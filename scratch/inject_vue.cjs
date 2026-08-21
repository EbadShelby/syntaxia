const fs = require('fs');
const refPath = '/var/www/html/syntaxia/src/data/refContent.ts';
let content = fs.readFileSync(refPath, 'utf8');

const vueStr = fs.readFileSync('/var/www/html/syntaxia/scratch/vue_parsed.json', 'utf8');

// Find the last "};" in the file
const lastBraceIndex = content.lastIndexOf('};');
if (lastBraceIndex === -1) {
  console.error("Could not find the closing brace!");
  process.exit(1);
}

const before = content.substring(0, lastBraceIndex).trimEnd();
const newContent = before + ',\n  vue: ' + vueStr + '\n};\n';

fs.writeFileSync(refPath, newContent);
console.log("Successfully injected Vue topics into refContent.ts");
