const fs = require('fs');

const markdown = fs.readFileSync('/var/www/html/syntaxia/tailwind.md', 'utf-8');
const blocks = markdown.split('\n## ');

const sections = [];

for (let i = 0; i < blocks.length; i++) {
  let block = blocks[i].trim();
  if (!block) continue;
  if (i === 0 && !block.startsWith('## ')) {
    if (block.startsWith('##')) {
       block = block.substring(2).trim();
    } else {
       continue;
    }
  }

  const lines = block.split('\n');
  const title = lines[0].trim();
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  let descriptionLines = [];
  let codeLines = [];
  let inCode = false;
  let codeLang = 'html';

  for (let j = 1; j < lines.length; j++) {
    const line = lines[j];
    if (line.startsWith('```')) {
      inCode = !inCode;
      if (inCode) {
         const lang = line.substring(3).trim();
         if (lang && codeLang === 'html' && title !== 'Setup') {
            codeLang = lang;
         }
      }
      continue;
    }
    
    if (inCode) {
      codeLines.push(line);
    } else {
      if (line.trim()) {
        descriptionLines.push(line);
      }
    }
  }

  sections.push({
    id,
    title,
    description: descriptionLines.join(' '),
    language: 'html', // mostly html
    code: codeLines.join('\n')
  });
}

const tailwindTopic = {
  lang: 'tailwind',
  label: 'Tailwind CSS',
  title: 'Tailwind CSS',
  icon: '/css.svg', // using css icon as fallback
  color: '#38bdf8',
  sections
};

const refContentPath = '/var/www/html/syntaxia/src/data/refContent.ts';
let refContent = fs.readFileSync(refContentPath, 'utf-8');

const replacement = `,

  tailwind: ${JSON.stringify(tailwindTopic, null, 4).replace(/"([^"]+)":/g, '$1:')}
};`;

// Let's just do a regex replace
const objectEndMatch = refContent.match(/  \},\n\}/);
if (objectEndMatch) {
   refContent = refContent.replace(/  \},\n\}/, '  },\n\n  tailwind: ' + JSON.stringify(tailwindTopic, null, 4).replace(/"([^"]+)":/g, '$1:') + '\n}');
} else {
   refContent = refContent.replace(/}\n$/, replacement);
}

// update refNavItems
refContent = refContent.replace(
  /export const refNavItems = \[([\s\S]*?)\]/,
  (match, p1) => `export const refNavItems = [\n${p1}  { lang: 'tailwind', label: 'Tailwind' },\n]`
);

// fix formatting issues with extra newlines inside refNavItems if any
fs.writeFileSync(refContentPath, refContent);
console.log('done');
