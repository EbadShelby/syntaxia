import { createHighlighter } from 'shiki';

async function run() {
  const hl = await createHighlighter({
    themes: ['one-dark-pro'],
    langs: []
  });
  console.log(hl.getLoadedLanguages());
  await hl.loadLanguage('php');
  console.log(hl.getLoadedLanguages());
}

run().catch(console.error);
