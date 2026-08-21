const fs = require('fs');
const refPath = '/var/www/html/syntaxia/src/data/refContent.ts';
let content = fs.readFileSync(refPath, 'utf8');

const vueStr = fs.readFileSync('/var/www/html/syntaxia/scratch/vue_parsed.json', 'utf8');

// Replace the end of refTopics
// The end looks like:
//     ],
//   },
// }
// 
// export const refNavItems = [

const targetStr = '    ],\n  },\n}';
const replacementStr = '    ],\n  },\n  vue: ' + vueStr + '\n}';

if (content.includes(targetStr)) {
  content = content.replace(targetStr, replacementStr);
  console.log("Successfully injected Vue topics into refContent.ts");
} else {
  console.error("Could not find the target string for refTopics end");
  process.exit(1);
}

// Add vue to refNavItems
//   { lang: 'tailwind', label: 'Tailwind' },
// ]

const navTarget = "  { lang: 'tailwind', label: 'Tailwind' },\n]";
const navReplacement = "  { lang: 'tailwind', label: 'Tailwind' },\n  { lang: 'vue', label: 'Vue' },\n]";

if (content.includes(navTarget)) {
  content = content.replace(navTarget, navReplacement);
  console.log("Successfully added Vue to refNavItems");
} else {
  console.error("Could not find the target string for refNavItems end");
  process.exit(1);
}

fs.writeFileSync(refPath, content);
