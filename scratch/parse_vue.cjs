const fs = require('fs');

const md = fs.readFileSync('/var/www/html/syntaxia/vue.md', 'utf8');

const sections = [];
const lines = md.split('\n');

let currentSection = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.startsWith('## ')) {
    if (currentSection) {
      sections.push(currentSection);
    }
    const title = line.replace('## ', '').trim();
    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    currentSection = {
      id,
      title,
      description: '',
      language: 'vue',
      code: ''
    };
  } else if (currentSection) {
    if (line.startsWith('```')) {
      // Start or end code block
      if (!currentSection.inCodeBlock) {
        currentSection.inCodeBlock = true;
        currentSection.language = line.replace('```', '').trim() || 'vue';
        if (currentSection.code) {
           currentSection.code += '\n'; // Add spacing between code blocks if multiple
        }
      } else {
        currentSection.inCodeBlock = false;
      }
    } else if (currentSection.inCodeBlock) {
      currentSection.code += (currentSection.code ? '\n' : '') + line;
    } else {
      if (line.trim() !== '' && !line.startsWith('---') && !line.includes('This covers about 90%')) {
        currentSection.description += (currentSection.description ? ' ' : '') + line.trim();
      }
    }
  }
}
if (currentSection) {
  sections.push(currentSection);
}

// Clean up description and code
sections.forEach(s => {
  delete s.inCodeBlock;
  // If language wasn't set or is something else, fallback
  if (!s.language) s.language = 'vue';
});

const vueObj = {
  lang: 'vue',
  label: 'Vue.js',
  title: 'Vue.js',
  icon: '/vue.svg',
  color: '#41b883',
  sections
};

const vueStr = JSON.stringify(vueObj, null, 2);

// Now let's append it to refContent.ts
// It's a Record<string, RefTopic> export const refTopics = { ... }
// We can just find the end of refTopics by finding `};\n` or similar, but it's easier to inject before the closing brace of refTopics.
// Wait, the file ends with:
//   tailwind: { ... }
// };
// Let's modify refContent.ts safely.

let refContent = fs.readFileSync('/var/www/html/syntaxia/src/data/refContent.ts', 'utf8');

// Find the last `};` which closes `export const refTopics = { ... };`
// Actually `refContent.ts` might not end exactly there. Let's look at the last few lines.

// We will write the parsed JSON to a temporary file, and use the agent's edit tools to add it manually if it's too risky.
fs.writeFileSync('/var/www/html/syntaxia/scratch/vue_parsed.json', vueStr);
console.log('Parsed successfully, wrote to /var/www/html/syntaxia/scratch/vue_parsed.json');
