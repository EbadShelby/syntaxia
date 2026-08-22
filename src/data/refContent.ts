export interface Section {
  id: string
  title: string
  description: string
  language: string
  code: string
}

export interface RefTopic {
  lang: string
  label: string
  title: string
  icon: string
  color: string
  sections: Section[]
}

export const refTopics: Record<string, RefTopic> = {
  html: {
    lang: 'html',
    label: 'HTML',
    title: 'HTML',
    icon: '/html5.svg',
    color: '#e34c26',
    sections: [
      {
        id: 'basic-structure',
        title: 'Basic Structure',
        description: 'Every HTML page needs these essential elements:',
        language: 'html',
        code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Page Title</title>
  </head>
  <body>
    <!-- Your content goes here -->
  </body>
</html>`,
      },
      {
        id: 'headings',
        title: 'Headings',
        description:
          'There are six levels of headings. <h1> is the most important (largest), and <h6> is the least important (smallest).',
        language: 'html',
        code: `<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`,
      },
      {
        id: 'text-formatting',
        title: 'Text Formatting',
        description: 'These tags change how text looks or add special meaning:',
        language: 'html',
        code: `<p>This is a paragraph</p>
<br />         <!-- Line break -->
<hr />         <!-- Horizontal line -->
<strong>Bold text (important)</strong>
<b>Bold text (visual only)</b>
<em>Italic text (emphasized)</em>
<i>Italic text (visual only)</i>
<u>Underlined text</u>
<mark>Highlighted text</mark>
<small>Smaller text</small>
<del>Deleted text (strikethrough)</del>
<ins>Inserted text (underlined)</ins>
<sub>Subscript text</sub>
<sup>Superscript text</sup>`,
      },
      {
        id: 'links',
        title: 'Links',
        description: 'Links connect pages together:',
        language: 'html',
        code: `<a href="https://example.com">Link to another website</a>
<a href="page.html">Link to another page</a>
<a href="#section">Link to a section on same page</a>
<a href="mailto:email@example.com">Email link</a>
<a href="tel:+1234567890">Phone link</a>
<a href="file.pdf" download>Download link</a>
<a href="https://example.com" target="_blank">Open in new tab</a>`,
      },
      {
        id: 'images',
        title: 'Images',
        description: 'Add pictures to your page:',
        language: 'html',
        code: `<img src="image.jpg" alt="Description of image" />
<img src="image.jpg" alt="Description" width="300" height="200" />
<img src="image.jpg" alt="Description" title="Hover text" />`,
      },
      {
        id: 'lists',
        title: 'Lists',
        description: 'Organize items in lists:',
        language: 'html',
        code: `<!-- Unordered list (bullets) -->
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>

<!-- Ordered list (numbers) -->
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>

<!-- Description list -->
<dl>
  <dt>Term</dt>
  <dd>Definition of the term</dd>
  <dt>Another term</dt>
  <dd>Definition of another term</dd>
</dl>`,
      },
      {
        id: 'containers',
        title: 'Containers',
        description: 'Container elements group or hold other content:',
        language: 'html',
        code: `<div>This is a block container (div)</div>
<span>This is an inline container (span)</span>
<p>This is a paragraph</p>
<pre>Preserves formatting and spaces</pre>
<code>console.log("Code snippet")</code>
<blockquote>A block quotation of text</blockquote>
<article>Independent, self-contained content</article>
<section>A section of content</section>
<aside>Side content or sidebar</aside>
<main>Main content of the page</main>
<header>Header of page or section</header>
<footer>Footer of page or section</footer>
<nav>Navigation links</nav>`,
      },
      {
        id: 'tables',
        title: 'Tables',
        description: 'Display data in rows and columns:',
        language: 'html',
        code: `<table>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
      <th>Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
      <td>Row 1, Cell 3</td>
    </tr>
    <tr>
      <td>Row 2, Cell 1</td>
      <td>Row 2, Cell 2</td>
      <td>Row 2, Cell 3</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Footer 1</td>
      <td>Footer 2</td>
      <td>Footer 3</td>
    </tr>
  </tfoot>
</table>`,
      },
      {
        id: 'forms',
        title: 'Forms',
        description: 'Collect information from users:',
        language: 'html',
        code: `<form action="/submit" method="POST">
  <!-- Text input -->
  <input type="text" name="username" placeholder="Enter username" />

  <!-- Password input -->
  <input type="password" name="password" placeholder="Enter password" />

  <!-- Email input -->
  <input type="email" name="email" placeholder="Enter email" />

  <!-- Textarea -->
  <textarea name="message" rows="4" placeholder="Your message"></textarea>

  <!-- Checkbox -->
  <input type="checkbox" name="agree" id="agree" />
  <label for="agree">I agree</label>

  <!-- Radio buttons -->
  <input type="radio" name="gender" value="male" id="male" />
  <label for="male">Male</label>
  <input type="radio" name="gender" value="female" id="female" />
  <label for="female">Female</label>

  <!-- Select dropdown -->
  <select name="country">
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
    <option value="ph">Philippines</option>
  </select>

  <!-- Submit button -->
  <button type="submit">Submit</button>
</form>`,
      },
      {
        id: 'input-types',
        title: 'Input Types',
        description: 'HTML5 provides many specialized input types:',
        language: 'html',
        code: `<input type="text" />        <!-- Regular text -->
<input type="email" />       <!-- Email (validates format) -->
<input type="password" />    <!-- Hidden text -->
<input type="number" />      <!-- Number only -->
<input type="tel" />         <!-- Phone number -->
<input type="url" />         <!-- URL -->
<input type="search" />      <!-- Search box -->
<input type="date" />        <!-- Date picker -->
<input type="time" />        <!-- Time picker -->
<input type="datetime-local" /> <!-- Date + time picker -->
<input type="color" />       <!-- Color picker -->
<input type="range" />       <!-- Slider -->
<input type="file" />        <!-- File upload -->
<input type="checkbox" />    <!-- Checkbox -->
<input type="radio" />       <!-- Radio button -->
<input type="hidden" />      <!-- Hidden field -->
<input type="submit" />      <!-- Submit button -->
<input type="reset" />       <!-- Reset button -->`,
      },
      {
        id: 'media-elements',
        title: 'Media Elements',
        description: 'Embed audio and video content:',
        language: 'html',
        code: `<!-- Video -->
<video width="320" height="240" controls>
  <source src="video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

<!-- Audio -->
<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>

<!-- Embedded content (YouTube, maps, etc.) -->
<iframe
  src="https://www.youtube.com/embed/VIDEO_ID"
  width="560"
  height="315"
  allowfullscreen
></iframe>`,
      },
      {
        id: 'semantic-elements',
        title: 'Semantic Elements',
        description: 'Elements that describe their meaning:',
        language: 'html',
        code: `<header>Site header / page header</header>
<nav>Navigation links</nav>
<main>Main content area</main>
<article>Independent piece of content</article>
<section>Thematic grouping of content</section>
<aside>Sidebar or supplementary content</aside>
<footer>Site footer / section footer</footer>
<figure>
  <img src="image.jpg" alt="Description" />
  <figcaption>Caption for the image</figcaption>
</figure>
<time datetime="2025-01-01">January 1, 2025</time>
<address>Contact information</address>`,
      },
      {
        id: 'meta-tags',
        title: 'Meta Tags',
        description: 'Provide metadata about your page:',
        language: 'html',
        code: `<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Page description for SEO" />
  <meta name="keywords" content="html, css, javascript" />
  <meta name="author" content="Your Name" />

  <!-- Open Graph (for social sharing) -->
  <meta property="og:title" content="Page Title" />
  <meta property="og:description" content="Page Description" />
  <meta property="og:image" content="https://example.com/image.jpg" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />

  <!-- Favicon -->
  <link rel="icon" href="favicon.ico" />
  <link rel="stylesheet" href="styles.css" />
  <script src="script.js"></script>
</head>`,
      },
      {
        id: 'special-characters',
        title: 'Special Characters',
        description: 'Display special symbols using HTML entities:',
        language: 'html',
        code: `&lt;   <!-- < (less than) -->
&gt;   <!-- > (greater than) -->
&amp;  <!-- & (ampersand) -->
&quot; <!-- " (quote) -->
&apos; <!-- ' (apostrophe) -->
&nbsp; <!-- Non-breaking space -->
&copy; <!-- © (copyright) -->
&reg;  <!-- ® (registered) -->
&trade;<!-- ™ (trademark) -->
&euro; <!-- € (euro) -->
&pound;<!-- £ (pound) -->
&yen;  <!-- ¥ (yen) -->`,
      },
      {
        id: 'attributes',
        title: 'Attributes',
        description: 'Common attributes that can be used on many elements:',
        language: 'html',
        code: `<element id="unique-id">Unique identifier</element>
<element class="class-name">Group identifier</element>
<element style="color: red;">Inline CSS</element>
<element title="Tooltip text">Hover info</element>
<element hidden>Hidden element</element>
<element contenteditable="true">Editable content</element>
<element draggable="true">Draggable element</element>
<element data-custom="value">Custom data attribute</element>
<element lang="en">Language</element>
<element dir="ltr">Text direction (ltr or rtl)</element>
<element tabindex="1">Tab order</element>
<element accesskey="k">Keyboard shortcut</element>`,
      },
      {
        id: 'comments',
        title: 'Comments',
        description: 'Notes in your code that browsers ignore:',
        language: 'html',
        code: `<!-- This is a comment -->
<!--
    This is a
    multi-line comment
-->`,
      },
      {
        id: 'button-element',
        title: 'Button Element',
        description: 'Different ways to use buttons:',
        language: 'html',
        code: `<button>Click Me</button>
<button type="button">Regular Button</button>
<button type="submit">Submit Form</button>
<button type="reset">Reset Form</button>
<button disabled>Disabled Button</button>`,
      },
      {
        id: 'script-and-style',
        title: 'Script and Style',
        description: 'Add JavaScript and CSS:',
        language: 'html',
        code: `<!-- Internal CSS -->
<style>
  body {
    background-color: lightblue;
  }
</style>

<!-- External CSS -->
<link rel="stylesheet" href="styles.css" />

<!-- Internal JavaScript -->
<script>
  console.log('Hello World');
</script>

<!-- External JavaScript -->
<script src="script.js"></script>`,
      },
    ],
  },

  css: {
    lang: 'css',
    label: 'CSS',
    title: 'CSS',
    icon: '/css.svg',
    color: '#264de4',
    sections: [
      {
        id: 'basic-syntax',
        title: 'Basic Syntax',
        description: 'How CSS is structured:',
        language: 'css',
        code: `selector {
  property: value;
  another-property: another-value;
}

/* This is a comment */`,
      },
      {
        id: 'how-to-add-css',
        title: 'How to Add CSS',
        description: 'Three ways to include CSS in your HTML:',
        language: 'html',
        code: `<!-- 1. Inline CSS (inside HTML tags) -->
<p style="color: blue; font-size: 16px;">Text</p>

<!-- 2. Internal CSS (inside <head> tag) -->
<head>
  <style>
    p { color: blue; font-size: 16px; }
  </style>
</head>

<!-- 3. External CSS (separate file) -->
<head>
  <link rel="stylesheet" href="styles.css" />
</head>`,
      },
      {
        id: 'selectors',
        title: 'Selectors',
        description: 'Ways to target HTML elements:',
        language: 'css',
        code: `/* Element selector */
p { color: blue; }

/* Class selector */
.my-class { color: red; }

/* ID selector */
#my-id { color: green; }

/* Multiple selectors */
h1, h2, h3 { color: purple; }

/* Descendant selector (all p inside div) */
div p { color: orange; }

/* Child selector (direct child only) */
div > p { color: pink; }

/* Adjacent sibling (immediately after) */
h1 + p { color: brown; }

/* General sibling (all siblings after) */
h1 ~ p { color: gray; }

/* Universal selector */
* { margin: 0; }

/* Attribute selector */
input[type="text"] { border: 1px solid black; }`,
      },
      {
        id: 'colors',
        title: 'Colors',
        description: 'Different ways to set colors:',
        language: 'css',
        code: `.element {
  /* Color names */
  color: red;

  /* Hexadecimal */
  color: #ff0000;
  color: #f00; /* Short form */

  /* RGB */
  color: rgb(255, 0, 0);

  /* RGBA (with transparency) */
  color: rgba(255, 0, 0, 0.5);

  /* HSL */
  color: hsl(0, 100%, 50%);

  /* HSLA (with transparency) */
  color: hsla(0, 100%, 50%, 0.5);
}`,
      },
      {
        id: 'text-properties',
        title: 'Text Properties',
        description: 'Style your text:',
        language: 'css',
        code: `.element {
  font-family: Arial, sans-serif;
  font-size: 16px;         /* Size of text */
  font-weight: bold;       /* normal, bold, 100-900 */
  font-style: italic;      /* normal, italic, oblique */
  font-variant: small-caps;
  line-height: 1.5;        /* Space between lines */
  letter-spacing: 2px;     /* Space between letters */
  word-spacing: 4px;       /* Space between words */
  text-align: center;      /* left, right, center, justify */
  text-decoration: underline; /* none, underline, line-through */
  text-transform: uppercase;  /* uppercase, lowercase, capitalize */
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  white-space: nowrap;     /* Prevent line breaks */
}`,
      },
      {
        id: 'background-properties',
        title: 'Background Properties',
        description: 'Set element backgrounds:',
        language: 'css',
        code: `.element {
  background-color: #f0f0f0;
  background-image: url("image.jpg");
  background-repeat: no-repeat;   /* repeat, repeat-x, repeat-y */
  background-size: cover;          /* cover, contain, 100px */
  background-position: center;     /* top, bottom, left, right */
  background-attachment: fixed;    /* fixed, scroll */

  /* Gradient */
  background: linear-gradient(to right, #ff0000, #0000ff);
  background: radial-gradient(circle, #ff0000, #0000ff);

  /* Shorthand */
  background: #f0f0f0 url("img.jpg") no-repeat center / cover;
}`,
      },
      {
        id: 'box-model',
        title: 'Box Model',
        description: 'Every element is a box with these properties:',
        language: 'css',
        code: `.element {
  /* Content size */
  width: 200px;
  height: 100px;

  /* Padding (inside, between content and border) */
  padding: 10px;           /* All sides */
  padding: 10px 20px;      /* Top/bottom  Left/right */
  padding: 10px 20px 15px 5px; /* Top Right Bottom Left */

  /* Border */
  border: 1px solid black;
  border-radius: 8px;      /* Rounded corners */

  /* Margin (outside, between elements) */
  margin: 10px;            /* All sides */
  margin: 10px auto;       /* Center horizontally */
  margin: 0;               /* No margin */

  /* Box sizing (include padding/border in width) */
  box-sizing: border-box;
}`,
      },
      {
        id: 'display-property',
        title: 'Display Property',
        description: 'Control how elements are displayed:',
        language: 'css',
        code: `.element {
  display: block;          /* Full width, new line */
  display: inline;         /* Inline, no width/height */
  display: inline-block;   /* Inline but can set size */
  display: flex;           /* Flexbox container */
  display: grid;           /* Grid container */
  display: none;           /* Completely hidden */
}

/* Visibility (still takes space) */
.element {
  visibility: hidden;
  visibility: visible;
}`,
      },
      {
        id: 'position-property',
        title: 'Position Property',
        description: 'Control element positioning:',
        language: 'css',
        code: `.element {
  position: static;    /* Default, normal flow */
  position: relative;  /* Relative to itself */
  position: absolute;  /* Relative to nearest positioned parent */
  position: fixed;     /* Fixed to viewport */
  position: sticky;    /* Sticks when scrolled to */

  /* Use with top, right, bottom, left */
  top: 10px;
  right: 0;
  bottom: 0;
  left: 10px;

  /* Stack order */
  z-index: 10;
}`,
      },
      {
        id: 'flexbox',
        title: 'Flexbox',
        description: 'Flexible one-dimensional layout:',
        language: 'css',
        code: `/* Parent (container) */
.container {
  display: flex;
  flex-direction: row;        /* row, column, row-reverse, column-reverse */
  justify-content: center;    /* Main axis: flex-start, center, space-between, space-around */
  align-items: center;        /* Cross axis: flex-start, center, flex-end, stretch */
  flex-wrap: wrap;            /* Allow items to wrap */
  gap: 16px;                  /* Space between items */
}

/* Child (items) */
.item {
  flex: 1;                    /* Grow/shrink equally */
  flex-grow: 1;               /* How much to grow */
  flex-shrink: 0;             /* How much to shrink */
  flex-basis: 200px;          /* Starting size */
  align-self: flex-end;       /* Override align-items for this item */
  order: 2;                   /* Change visual order */
}`,
      },
      {
        id: 'grid-layout',
        title: 'Grid Layout',
        description: 'Powerful two-dimensional layout:',
        language: 'css',
        code: `/* Parent (container) */
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;  /* 3 columns */
  grid-template-rows: auto 1fr auto;   /* 3 rows */
  gap: 16px;                           /* Space between cells */
  grid-template-columns: repeat(3, 1fr); /* Repeat shorthand */
}

/* Child (items) */
.item {
  grid-column: 1 / 3;   /* Span from column 1 to 3 */
  grid-row: 1 / 2;      /* Span row 1 */
  grid-column: span 2;  /* Span 2 columns */
}`,
      },
      {
        id: 'transitions',
        title: 'Transitions',
        description: 'Animate property changes smoothly:',
        language: 'css',
        code: `.element {
  /* Shorthand: property duration timing-function delay */
  transition: all 0.3s ease;
  transition: background-color 0.3s ease, transform 0.5s ease-in-out;
}

.element:hover {
  background-color: blue;
  transform: scale(1.1);
}

/* Timing functions */
.element {
  transition-timing-function: ease;        /* Default */
  transition-timing-function: linear;     /* Constant speed */
  transition-timing-function: ease-in;    /* Starts slow */
  transition-timing-function: ease-out;   /* Ends slow */
  transition-timing-function: ease-in-out;/* Slow start and end */
}`,
      },
      {
        id: 'transforms',
        title: 'Transforms',
        description: 'Move, rotate, scale, and skew elements:',
        language: 'css',
        code: `.element {
  /* Move */
  transform: translate(50px, 100px);
  transform: translateX(50px);
  transform: translateY(100px);

  /* Rotate */
  transform: rotate(45deg);

  /* Scale */
  transform: scale(1.5);       /* Both axes */
  transform: scaleX(2);        /* Only X */
  transform: scaleY(0.5);      /* Only Y */

  /* Skew */
  transform: skew(10deg, 5deg);

  /* Multiple transforms */
  transform: translate(50px) rotate(45deg) scale(1.2);
}`,
      },
      {
        id: 'animations',
        title: 'Animations',
        description: 'Create complex animations with keyframes:',
        language: 'css',
        code: `/* Define animation */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-30px); }
}

/* Apply animation */
.element {
  animation: fadeIn 0.5s ease forwards;
  animation: bounce 1s ease infinite;
  animation-delay: 0.2s;
  animation-direction: alternate;
  animation-play-state: paused; /* or running */
}`,
      },
      {
        id: 'responsive-design',
        title: 'Responsive Design',
        description: 'Adapt layouts to different screen sizes:',
        language: 'css',
        code: `/* Mobile-first approach */
.element {
  font-size: 14px; /* Default (mobile) */
}

/* Tablet and up */
@media (min-width: 768px) {
  .element { font-size: 16px; }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .element { font-size: 18px; }
}

/* Other useful queries */
@media (max-width: 480px) { /* Only mobile */ }
@media (orientation: landscape) { /* Landscape mode */ }
@media (prefers-color-scheme: dark) { /* Dark mode */ }`,
      },
      {
        id: 'variables',
        title: 'Variables (Custom Properties)',
        description: 'Reuse values throughout your CSS:',
        language: 'css',
        code: `/* Define variables (usually on :root) */
:root {
  --primary-color: #007bff;
  --font-size-base: 16px;
  --spacing: 8px;
  --border-radius: 4px;
}

/* Use variables */
.element {
  color: var(--primary-color);
  font-size: var(--font-size-base);
  margin: var(--spacing);
  border-radius: var(--border-radius);

  /* With fallback value */
  color: var(--primary-color, blue);
}`,
      },
      {
        id: 'pseudo-classes',
        title: 'Pseudo-classes',
        description: 'Style elements in specific states:',
        language: 'css',
        code: `a:hover    { color: blue; }        /* Mouse over */
a:visited  { color: purple; }      /* Visited link */
a:active   { color: red; }         /* Being clicked */
a:focus    { outline: 2px solid; } /* Keyboard focus */

input:disabled { opacity: 0.5; }
input:checked  { accent-color: green; }

/* Structural */
li:first-child  { font-weight: bold; }
li:last-child   { border-bottom: none; }
li:nth-child(2) { color: red; }
li:nth-child(odd) { background: #f0f0f0; }`,
      },
      {
        id: 'pseudo-elements',
        title: 'Pseudo-elements',
        description: 'Style specific parts of elements:',
        language: 'css',
        code: `p::first-line  { font-variant: small-caps; }
p::first-letter { font-size: 2em; float: left; }

/* Add content before/after */
.element::before {
  content: "→ ";
  color: blue;
}
.element::after {
  content: " ✓";
  color: green;
}

/* Style text selection */
::selection {
  background: yellow;
  color: black;
}`,
      },
      {
        id: 'units',
        title: 'Units',
        description: 'Different measurement units:',
        language: 'css',
        code: `.element {
  /* Absolute units */
  width: 100px;  /* Pixels */
  width: 1cm;    /* Centimeters */
  width: 1in;    /* Inches */

  /* Relative units */
  width: 50%;    /* Percentage of parent */
  width: 2em;    /* Relative to element's font size */
  width: 2rem;   /* Relative to root font size */
  width: 50vw;   /* 50% of viewport width */
  height: 50vh;  /* 50% of viewport height */
  width: 50dvw;  /* Dynamic viewport width */

  /* Modern */
  font-size: 2ch; /* Width of "0" character */
}`,
      },
    ],
  },

  js: {
    lang: 'js',
    label: 'JS',
    title: 'JavaScript',
    icon: '/javascript.svg',
    color: '#f7df1e',
    sections: [
      {
        id: 'variables',
        title: 'Variables',
        description: 'Store and reuse values:',
        language: 'javascript',
        code: `// Three ways to declare variables
let name = 'John';      // Can be changed, block scoped
const age = 25;         // Cannot be changed, block scoped
var oldWay = 'avoid';   // Old way, function scoped (avoid)

// Examples
let x = 5;
x = 10;  // Can change

const PI = 3.14159;
// PI = 3.14;  // Error! Cannot change

// Multiple variables
let a = 1, b = 2, c = 3;`,
      },
      {
        id: 'data-types',
        title: 'Data Types',
        description: 'Different types of values:',
        language: 'javascript',
        code: `// String (text)
let text = "Hello World";
let text2 = 'Single quotes work too';
let text3 = \`Template literal with \${text}\`;

// Number
let num = 42;
let decimal = 3.14;

// Boolean (true/false)
let isActive = true;

// Array (list of items)
let fruits = ['apple', 'banana', 'orange'];

// Object (key-value pairs)
let person = {
  name: 'John',
  age: 30,
  isStudent: false
};

// Null and Undefined
let empty = null;       // Intentionally empty
let notDefined;         // Undefined (not set yet)`,
      },
      {
        id: 'strings',
        title: 'Strings',
        description: 'Working with text:',
        language: 'javascript',
        code: `let text = "Hello World";

text.length;                    // 11 (length)
text.toLowerCase();             // "hello world"
text.toUpperCase();             // "HELLO WORLD"
text.trim();                    // Remove spaces from both ends
text.includes('World');         // true
text.startsWith('Hello');       // true
text.endsWith('World');         // true
text.replace('World', 'JS');    // "Hello JS"
text.split(' ');                // ['Hello', 'World']
text.slice(0, 5);               // "Hello"
text.substring(6, 11);         // "World"
text.indexOf('o');              // 4 (first occurrence)
text.charAt(0);                 // "H"

// Template literals
let name = 'John';
let greeting = \`Hello, \${name}! You are \${2025 - 2000} years old.\`;`,
      },
      {
        id: 'arrays',
        title: 'Arrays',
        description: 'Working with lists of data:',
        language: 'javascript',
        code: `let fruits = ['apple', 'banana', 'orange'];

// Access elements
fruits[0];            // 'apple' (first)
fruits[fruits.length - 1]; // 'orange' (last)

// Add / Remove
fruits.push('grape');     // Add to end
fruits.pop();             // Remove from end
fruits.unshift('mango');  // Add to beginning
fruits.shift();           // Remove from beginning

// Find
fruits.indexOf('banana'); // 1
fruits.includes('apple'); // true
fruits.find(f => f.length > 5); // 'banana'

// Transform
fruits.map(f => f.toUpperCase()); // ['APPLE', 'BANANA', ...]
fruits.filter(f => f.length > 5); // ['banana', 'orange']
fruits.reduce((acc, f) => acc + f, ''); // 'applebananaorange'

// Sort / Reverse
fruits.sort();
fruits.reverse();

// Spread
let all = [...fruits, 'kiwi'];`,
      },
      {
        id: 'objects',
        title: 'Objects',
        description: 'Working with key-value pairs:',
        language: 'javascript',
        code: `let person = {
  name: 'John',
  age: 30,
  greet() {
    return \`Hi, I'm \${this.name}\`;
  }
};

// Access properties
person.name;        // 'John'
person['age'];      // 30

// Add / Update / Delete
person.email = 'john@example.com'; // Add
person.age = 31;                   // Update
delete person.email;               // Delete

// Check existence
'name' in person;       // true
person.hasOwnProperty('age'); // true

// Destructuring
const { name, age } = person;

// Spread
const copy = { ...person, role: 'admin' };

// Object methods
Object.keys(person);    // ['name', 'age']
Object.values(person);  // ['John', 30]
Object.entries(person); // [['name','John'],['age',30]]`,
      },
      {
        id: 'functions',
        title: 'Functions',
        description: 'Reusable blocks of code:',
        language: 'javascript',
        code: `// Function declaration
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Function expression
const greet = function(name) {
  return \`Hello, \${name}!\`;
};

// Arrow function (modern)
const greet = (name) => \`Hello, \${name}!\`;
const square = n => n * n; // Single param, no parens needed

// Default parameters
function greet(name = 'World') {
  return \`Hello, \${name}!\`;
}

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
sum(1, 2, 3, 4); // 10

// Immediately Invoked Function Expression (IIFE)
(function() {
  console.log('Runs immediately!');
})();`,
      },
      {
        id: 'conditionals',
        title: 'Conditionals',
        description: 'Make decisions in your code:',
        language: 'javascript',
        code: `// If / else if / else
if (age >= 18) {
  console.log('Adult');
} else if (age >= 13) {
  console.log('Teenager');
} else {
  console.log('Child');
}

// Ternary operator (one-liner)
let status = age >= 18 ? 'Adult' : 'Minor';

// Nullish coalescing
let name = userName ?? 'Anonymous';

// Optional chaining
let city = user?.address?.city;

// Switch statement
switch (day) {
  case 'Monday':
    console.log('Start of week');
    break;
  case 'Friday':
    console.log('End of week');
    break;
  default:
    console.log('Midweek');
}`,
      },
      {
        id: 'loops',
        title: 'Loops',
        description: 'Repeat code multiple times:',
        language: 'javascript',
        code: `// for loop
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// while loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// do...while (runs at least once)
do {
  console.log(i);
  i++;
} while (i < 5);

// for...of (arrays, strings)
for (const fruit of fruits) {
  console.log(fruit);
}

// for...in (objects)
for (const key in person) {
  console.log(key, person[key]);
}

// Array methods as loops
fruits.forEach(fruit => console.log(fruit));`,
      },
      {
        id: 'dom-manipulation',
        title: 'DOM Manipulation',
        description: 'Control HTML elements from JavaScript:',
        language: 'javascript',
        code: `// Select elements
const el = document.getElementById('myId');
const els = document.querySelectorAll('.myClass');
const el2 = document.querySelector('h1');

// Modify content
el.textContent = 'New text';     // Text only
el.innerHTML = '<b>Bold</b>';    // HTML content

// Modify styles
el.style.color = 'red';
el.style.fontSize = '20px';

// Modify classes
el.classList.add('active');
el.classList.remove('hidden');
el.classList.toggle('dark');
el.classList.contains('active'); // true/false

// Attributes
el.setAttribute('href', '/new-url');
el.getAttribute('href');
el.removeAttribute('disabled');

// Create & append elements
const div = document.createElement('div');
div.textContent = 'New element';
document.body.appendChild(div);
div.remove(); // Remove element`,
      },
      {
        id: 'events',
        title: 'Events',
        description: 'Respond to user interactions:',
        language: 'javascript',
        code: `// Add event listener
el.addEventListener('click', function(event) {
  console.log('Clicked!', event.target);
});

// Arrow function shorthand
el.addEventListener('click', (e) => console.log(e));

// Remove event listener
el.removeEventListener('click', handler);

// Common events
el.addEventListener('click', handler);       // Click
el.addEventListener('dblclick', handler);    // Double click
el.addEventListener('mouseover', handler);   // Mouse enter
el.addEventListener('mouseout', handler);    // Mouse leave
el.addEventListener('keydown', handler);     // Key pressed
el.addEventListener('keyup', handler);       // Key released
el.addEventListener('submit', handler);      // Form submit
el.addEventListener('change', handler);      // Input change
el.addEventListener('input', handler);       // Input value change
window.addEventListener('load', handler);    // Page loaded
window.addEventListener('scroll', handler);  // Page scroll
window.addEventListener('resize', handler);  // Window resize

// Prevent default behavior
form.addEventListener('submit', (e) => {
  e.preventDefault();
});`,
      },
      {
        id: 'json',
        title: 'JSON',
        description: 'Work with JSON data format:',
        language: 'javascript',
        code: `// Convert object to JSON string
const user = { name: 'John', age: 30 };
const jsonString = JSON.stringify(user);
// '{"name":"John","age":30}'

// Pretty print
JSON.stringify(user, null, 2);

// Convert JSON string to object
const parsed = JSON.parse(jsonString);
parsed.name; // 'John'

// Deep clone an object
const clone = JSON.parse(JSON.stringify(original));`,
      },
      {
        id: 'local-storage',
        title: 'Local Storage',
        description: 'Store data in the browser:',
        language: 'javascript',
        code: `// Save data
localStorage.setItem('username', 'John');
localStorage.setItem('age', '30');

// Get data
let username = localStorage.getItem('username'); // "John"

// Remove one item
localStorage.removeItem('username');

// Clear all data
localStorage.clear();

// Store objects (convert to JSON first)
let user = { name: 'John', age: 30 };
localStorage.setItem('user', JSON.stringify(user));

// Retrieve objects
let storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser.name); // "John"`,
      },
      {
        id: 'fetch-api',
        title: 'Fetch API',
        description: 'Get data from servers:',
        language: 'javascript',
        code: `// Simple GET request
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Async/await version (modern way)
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// POST request (send data)
fetch('https://api.example.com/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'John', age: 30 })
})
  .then(res => res.json())
  .then(data => console.log(data));`,
      },
      {
        id: 'error-handling',
        title: 'Error Handling',
        description: 'Handle errors gracefully:',
        language: 'javascript',
        code: `// Try-catch
try {
  const result = riskyOperation();
} catch (error) {
  console.error('An error occurred:', error);
} finally {
  console.log('Cleanup code — always runs');
}

// Throw custom errors
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

try {
  divide(10, 0);
} catch (error) {
  console.error(error.message); // "Cannot divide by zero"
}`,
      },
      {
        id: 'common-patterns',
        title: 'Common Patterns',
        description: "Useful patterns you'll use often:",
        language: 'javascript',
        code: `// Destructuring arrays
const [first, second] = ['apple', 'banana', 'orange'];

// Destructuring objects
const { name, age } = { name: 'John', age: 30 };

// Default value with OR operator
const username = inputValue || 'Guest';

// Nullish coalescing (only null/undefined)
const name = userName ?? 'Anonymous';

// Optional chaining
const city = user?.address?.city;

// Spread operator
const all = [...arr1, ...arr2];
const merged = { ...obj1, ...obj2 };

// Random number in range
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Convert to boolean
const bool = Boolean(value);
const bool2 = !!value;`,
      },
      {
        id: 'console-methods',
        title: 'Console Methods',
        description: 'Debug your code:',
        language: 'javascript',
        code: `console.log('Normal message');
console.error('Error message');
console.warn('Warning message');
console.info('Info message');
console.table([
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 }
]);
console.group('Group');
console.log('Inside group');
console.groupEnd();
console.time('timer');
// ... some code
console.timeEnd('timer'); // Shows elapsed time`,
      },
    ],
  },

  php: {
    lang: 'php',
    label: 'PHP',
    title: 'PHP',
    icon: '/Php_dark.svg',
    color: '#777bb4',
    sections: [
      {
        id: 'basic-syntax',
        title: 'Basic Syntax',
        description: 'PHP code structure:',
        language: 'php',
        code: `<?php
// Single line comment

/* Multi-line
   comment */

// Echo (output to screen)
echo "Hello World";
echo "Hello", " ", "World"; // Multiple items

// Print (similar to echo)
print "Hello World";

// Variables start with $
$name = "John";
echo $name;
?>`,
      },
      {
        id: 'variables',
        title: 'Variables',
        description: 'Store and use data:',
        language: 'php',
        code: `<?php
// Variable declaration
$text = "Hello";
$number = 42;
$decimal = 3.14;
$isTrue = true;
$isEmpty = null;

// Variable names are case-sensitive
$name = "John";
$Name = "Jane"; // Different variable

// Check if variable exists
isset($name);     // true if exists and not null
empty($name);     // true if empty or null
unset($name);     // Delete variable

// Constants (cannot be changed)
define("SITE_NAME", "My Website");
echo SITE_NAME;

// Modern constant syntax
const PI = 3.14159;
?>`,
      },
      {
        id: 'data-types',
        title: 'Data Types',
        description: 'PHP data types:',
        language: 'php',
        code: `<?php
$str    = "Hello World";   // String
$int    = 42;              // Integer
$float  = 3.14;            // Float
$bool   = true;            // Boolean
$null   = null;            // Null
$arr    = [1, 2, 3];       // Array
$obj    = new stdClass();  // Object

// Check types
gettype($str);     // "string"
is_string($str);   // true
is_int($int);      // true
is_float($float);  // true
is_bool($bool);    // true
is_null($null);    // true
is_array($arr);    // true

// Type casting
(int)"42";         // 42
(float)"3.14";     // 3.14
(string)42;        // "42"
(bool)1;           // true
?>`,
      },
      {
        id: 'strings',
        title: 'Strings',
        description: 'Working with text in PHP:',
        language: 'php',
        code: `<?php
$text = "Hello World";

// String functions
strlen($text);              // 11 (length)
strtolower($text);          // "hello world"
strtoupper($text);          // "HELLO WORLD"
trim($text);                // Remove whitespace
str_replace("World","PHP",$text); // "Hello PHP"
strpos($text, "World");     // 6 (position, or false)
substr($text, 0, 5);        // "Hello"
str_repeat("abc", 3);       // "abcabcabc"
str_pad("5", 3, "0", STR_PAD_LEFT); // "005"
explode(" ", $text);        // ["Hello", "World"]
implode(", ", ["a","b"]);   // "a, b"
sprintf("Name: %s, Age: %d", "John", 30);

// Heredoc (multiline string)
$html = <<<EOT
<div>
  <p>Hello $text</p>
</div>
EOT;
?>`,
      },
      {
        id: 'arrays',
        title: 'Arrays',
        description: 'Working with arrays in PHP:',
        language: 'php',
        code: `<?php
// Indexed array
$fruits = ["apple", "banana", "orange"];
$fruits[] = "grape"; // Add to end

// Associative array (like an object)
$person = [
  "name" => "John",
  "age"  => 30,
  "city" => "Manila"
];

// Access
echo $fruits[0];        // "apple"
echo $person["name"];   // "John"

// Array functions
count($fruits);         // 4
array_push($fruits, "mango"); // Add to end
array_pop($fruits);           // Remove from end
array_shift($fruits);         // Remove from beginning
array_unshift($fruits, "kiwi"); // Add to beginning
in_array("apple", $fruits);   // true
array_search("banana", $fruits); // 1 (index)
sort($fruits);                // Sort ascending
rsort($fruits);               // Sort descending
ksort($person);               // Sort by key
array_merge($arr1, $arr2);    // Merge arrays
array_slice($fruits, 1, 2);   // Get slice
array_map(fn($f) => strtoupper($f), $fruits); // Map
array_filter($fruits, fn($f) => strlen($f) > 5); // Filter
?>`,
      },
      {
        id: 'functions',
        title: 'Functions',
        description: 'Define and use functions:',
        language: 'php',
        code: `<?php
// Basic function
function greet($name) {
  return "Hello, $name!";
}
echo greet("John"); // "Hello, John!"

// Default parameters
function greet($name = "World") {
  return "Hello, $name!";
}

// Type hints (PHP 7+)
function add(int $a, int $b): int {
  return $a + $b;
}

// Variable number of arguments
function sum(...$numbers) {
  return array_sum($numbers);
}
echo sum(1, 2, 3, 4); // 10

// Anonymous function (closure)
$multiply = function($a, $b) {
  return $a * $b;
};

// Arrow function (PHP 7.4+)
$double = fn($n) => $n * 2;
echo $double(5); // 10
?>`,
      },
      {
        id: 'conditionals',
        title: 'Conditionals',
        description: 'Make decisions in PHP:',
        language: 'php',
        code: `<?php
// If / else if / else
if ($age >= 18) {
  echo "Adult";
} elseif ($age >= 13) {
  echo "Teenager";
} else {
  echo "Child";
}

// Ternary operator
$status = $age >= 18 ? "Adult" : "Minor";

// Null coalescing operator
$name = $username ?? "Anonymous";

// Switch statement
switch ($day) {
  case "Monday":
    echo "Start of week";
    break;
  case "Friday":
    echo "End of week";
    break;
  default:
    echo "Midweek";
}

// Match expression (PHP 8+)
$result = match($status) {
  1 => "Active",
  2 => "Inactive",
  default => "Unknown"
};
?>`,
      },
      {
        id: 'loops',
        title: 'Loops',
        description: 'Repeat code in PHP:',
        language: 'php',
        code: `<?php
// for loop
for ($i = 0; $i < 5; $i++) {
  echo $i; // 0, 1, 2, 3, 4
}

// while loop
$i = 0;
while ($i < 5) {
  echo $i;
  $i++;
}

// do...while (runs at least once)
$i = 0;
do {
  echo $i;
  $i++;
} while ($i < 5);

// foreach (arrays)
$fruits = ["apple", "banana", "orange"];
foreach ($fruits as $fruit) {
  echo $fruit;
}

// foreach with key
$person = ["name" => "John", "age" => 30];
foreach ($person as $key => $value) {
  echo "$key: $value";
}
?>`,
      },
      {
        id: 'superglobals',
        title: 'Superglobals',
        description: 'Built-in global variables in PHP:',
        language: 'php',
        code: `<?php
// $_GET — URL query string parameters
// URL: page.php?name=John&age=30
$name = $_GET['name']; // "John"

// $_POST — Form POST data
$username = $_POST['username'];

// $_REQUEST — Both GET and POST
$data = $_REQUEST['field'];

// $_SERVER — Server and environment info
$_SERVER['PHP_SELF'];       // Current script path
$_SERVER['REQUEST_METHOD']; // "GET" or "POST"
$_SERVER['HTTP_HOST'];      // "example.com"

// $_SESSION — Session data
session_start();
$_SESSION['user'] = 'John';
echo $_SESSION['user'];
session_destroy(); // End session

// $_COOKIE — Cookie data
setcookie("user", "John", time() + 86400);
echo $_COOKIE['user'];

// $_FILES — File uploads
$_FILES['file']['name'];
$_FILES['file']['tmp_name'];
$_FILES['file']['size'];
?>`,
      },
      {
        id: 'oop',
        title: 'Object-Oriented PHP',
        description: 'Classes and objects in PHP:',
        language: 'php',
        code: `<?php
class Animal {
  // Properties
  public string $name;
  protected int $age;
  private string $secret = "shh";

  // Constructor
  public function __construct(string $name, int $age) {
    $this->name = $name;
    $this->age  = $age;
  }

  // Method
  public function speak(): string {
    return "I am {$this->name}";
  }

  // Static method
  public static function create(string $name): self {
    return new self($name, 0);
  }
}

// Inheritance
class Dog extends Animal {
  public function speak(): string {
    return parent::speak() . " and I bark!";
  }
}

// Usage
$dog = new Dog("Buddy", 3);
echo $dog->speak();

// Interface
interface Drawable {
  public function draw(): string;
}
?>`,
      },
    ],
  },

  mysql: {
    lang: 'mysql',
    label: 'MySQL',
    title: 'MySQL',
    icon: '/MySQL_dark.svg',
    color: '#00758f',
    sections: [
      {
        id: 'basic-syntax',
        title: 'Basic Syntax',
        description: 'Every MySQL statement ends with a semicolon:',
        language: 'sql',
        code: `SELECT * FROM users;
-- This is a comment
/* This is a
   multi-line comment */`,
      },
      {
        id: 'database-operations',
        title: 'Database Operations',
        description: 'Create and manage databases:',
        language: 'sql',
        code: `-- Create database
CREATE DATABASE mydb;
CREATE DATABASE IF NOT EXISTS mydb;

-- Show all databases
SHOW DATABASES;

-- Use/select a database
USE mydb;

-- Delete database
DROP DATABASE mydb;
DROP DATABASE IF EXISTS mydb;

-- Show current database
SELECT DATABASE();`,
      },
      {
        id: 'table-operations',
        title: 'Table Operations',
        description: 'Create and manage tables:',
        language: 'sql',
        code: `-- Create table
CREATE TABLE users (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  username   VARCHAR(50)  NOT NULL,
  email      VARCHAR(100) UNIQUE,
  age        INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Show all tables
SHOW TABLES;

-- Show table structure
DESCRIBE users;
SHOW COLUMNS FROM users;

-- Delete table
DROP TABLE IF EXISTS users;

-- Rename table
RENAME TABLE users TO customers;

-- Copy table structure
CREATE TABLE backup LIKE users;

-- Copy with data
CREATE TABLE backup AS SELECT * FROM users;`,
      },
      {
        id: 'data-types',
        title: 'Data Types',
        description: 'Common MySQL data types:',
        language: 'sql',
        code: `-- Numeric
INT                  -- Integer
TINYINT              -- -128 to 127
BIGINT               -- Large integer
DECIMAL(10,2)        -- Exact decimal (e.g. money)
FLOAT                -- Approximate decimal

-- String
VARCHAR(255)         -- Variable length string
CHAR(10)             -- Fixed length string
TEXT                 -- Long text
LONGTEXT             -- Very long text
ENUM('a','b','c')    -- One of a set of values

-- Date and Time
DATE                 -- 'YYYY-MM-DD'
TIME                 -- 'HH:MM:SS'
DATETIME             -- 'YYYY-MM-DD HH:MM:SS'
TIMESTAMP            -- Auto-updates, UTC
YEAR                 -- Year value

-- Other
BOOLEAN              -- TRUE / FALSE (TINYINT alias)
JSON                 -- JSON data (MySQL 5.7+)`,
      },
      {
        id: 'insert',
        title: 'INSERT — Add Data',
        description: 'Add rows to a table:',
        language: 'sql',
        code: `-- Insert a single row
INSERT INTO users (username, email, age)
VALUES ('john', 'john@example.com', 30);

-- Insert multiple rows
INSERT INTO users (username, email, age) VALUES
  ('jane', 'jane@example.com', 25),
  ('bob',  'bob@example.com',  35),
  ('alice','alice@example.com', 28);

-- Insert from another table
INSERT INTO users_backup
SELECT * FROM users WHERE age > 18;`,
      },
      {
        id: 'select',
        title: 'SELECT — Read Data',
        description: 'Query and retrieve data:',
        language: 'sql',
        code: `-- Select all columns
SELECT * FROM users;

-- Select specific columns
SELECT username, email FROM users;

-- Rename column in output
SELECT username AS name, email AS contact FROM users;

-- Distinct values
SELECT DISTINCT city FROM users;

-- Limit results
SELECT * FROM users LIMIT 10;
SELECT * FROM users LIMIT 5 OFFSET 10; -- Skip first 10

-- Search with LIKE
SELECT * FROM users WHERE username LIKE 'j%';  -- Starts with j
SELECT * FROM users WHERE email LIKE '%@gmail%'; -- Contains @gmail`,
      },
      {
        id: 'where',
        title: 'WHERE — Filter Data',
        description: 'Filter rows by conditions:',
        language: 'sql',
        code: `-- Basic comparison
SELECT * FROM users WHERE age = 30;
SELECT * FROM users WHERE age > 18;
SELECT * FROM users WHERE age BETWEEN 18 AND 30;

-- String conditions
SELECT * FROM users WHERE username = 'john';
SELECT * FROM users WHERE username != 'admin';
SELECT * FROM users WHERE email IS NULL;
SELECT * FROM users WHERE email IS NOT NULL;

-- Multiple conditions
SELECT * FROM users WHERE age > 18 AND city = 'Manila';
SELECT * FROM users WHERE city = 'Manila' OR city = 'Cebu';
SELECT * FROM users WHERE NOT (age < 18);

-- IN operator
SELECT * FROM users WHERE city IN ('Manila', 'Cebu', 'Davao');
SELECT * FROM users WHERE id IN (1, 3, 5);`,
      },
      {
        id: 'update',
        title: 'UPDATE — Modify Data',
        description: 'Update existing rows:',
        language: 'sql',
        code: `-- Update a single column
UPDATE users
SET age = 31
WHERE username = 'john';

-- Update multiple columns
UPDATE users
SET age = 31, email = 'new@example.com'
WHERE id = 1;

-- Update all rows (use carefully!)
UPDATE users SET is_active = 1;

-- Update using current value
UPDATE products SET price = price * 1.1; -- 10% price increase`,
      },
      {
        id: 'delete',
        title: 'DELETE — Remove Data',
        description: 'Delete rows from a table:',
        language: 'sql',
        code: `-- Delete specific rows
DELETE FROM users WHERE id = 1;
DELETE FROM users WHERE age < 18;

-- Delete all rows (but keep the table)
DELETE FROM users;

-- TRUNCATE (faster way to clear all rows)
TRUNCATE TABLE users;`,
      },
      {
        id: 'order-by',
        title: 'ORDER BY — Sort Results',
        description: 'Sort query results:',
        language: 'sql',
        code: `-- Sort ascending (default)
SELECT * FROM users ORDER BY age;
SELECT * FROM users ORDER BY age ASC;

-- Sort descending
SELECT * FROM users ORDER BY age DESC;

-- Sort by multiple columns
SELECT * FROM users ORDER BY city ASC, age DESC;

-- Sort with LIMIT
SELECT * FROM users ORDER BY created_at DESC LIMIT 5;`,
      },
      {
        id: 'joins',
        title: 'JOINs — Combine Tables',
        description: 'Combine data from multiple tables:',
        language: 'sql',
        code: `-- INNER JOIN (only matching rows)
SELECT users.username, orders.total
FROM users
INNER JOIN orders ON users.id = orders.user_id;

-- LEFT JOIN (all from left, matching from right)
SELECT users.username, orders.total
FROM users
LEFT JOIN orders ON users.id = orders.user_id;

-- RIGHT JOIN (all from right, matching from left)
SELECT users.username, orders.total
FROM users
RIGHT JOIN orders ON users.id = orders.user_id;

-- Multiple joins
SELECT u.username, o.total, p.name AS product
FROM users u
JOIN orders o ON u.id = o.user_id
JOIN products p ON o.product_id = p.id;`,
      },
      {
        id: 'aggregate-functions',
        title: 'Aggregate Functions',
        description: 'Calculate summary values:',
        language: 'sql',
        code: `-- Count rows
SELECT COUNT(*) FROM users;
SELECT COUNT(email) FROM users; -- Only non-null

-- Sum, Average, Min, Max
SELECT SUM(total)   FROM orders;
SELECT AVG(age)     FROM users;
SELECT MIN(price)   FROM products;
SELECT MAX(price)   FROM products;

-- Group by
SELECT city, COUNT(*) AS user_count
FROM users
GROUP BY city;

SELECT city, AVG(age) AS avg_age
FROM users
GROUP BY city
HAVING AVG(age) > 25
ORDER BY avg_age DESC;`,
      },
      {
        id: 'alter-table',
        title: 'ALTER TABLE',
        description: 'Modify an existing table structure:',
        language: 'sql',
        code: `-- Add a column
ALTER TABLE users ADD COLUMN phone VARCHAR(20);
ALTER TABLE users ADD COLUMN role ENUM('admin','user') DEFAULT 'user';

-- Modify a column
ALTER TABLE users MODIFY COLUMN age TINYINT UNSIGNED;

-- Rename a column
ALTER TABLE users RENAME COLUMN phone TO phone_number;

-- Drop a column
ALTER TABLE users DROP COLUMN phone;

-- Add index
ALTER TABLE users ADD INDEX idx_email (email);
CREATE INDEX idx_username ON users (username);

-- Add foreign key
ALTER TABLE orders
ADD CONSTRAINT fk_user
FOREIGN KEY (user_id) REFERENCES users(id)
ON DELETE CASCADE;`,
      },
    ],
  },

  tailwind: {
    lang: 'tailwind',
    label: 'Tailwind CSS',
    title: 'Tailwind CSS',
    icon: '/tailwindcss.svg',
    color: '#38bdf8',
    sections: [
      {
        id: '-setup',
        title: '## Setup',
        description: 'Add Tailwind to your project:',
        language: 'html',
        code: '<!-- CDN (quick start) -->\n<script src="https://cdn.tailwindcss.com"></script>\n\n<!-- Or via npm -->\nnpm install -D tailwindcss\nnpx tailwindcss init',
      },
      {
        id: 'basic-concept',
        title: 'Basic Concept',
        description: 'Tailwind uses utility classes instead of custom CSS:',
        language: 'html',
        code: '<!-- Traditional CSS -->\n<div class="card">Content</div>\n<style>\n  .card {\n    padding: 16px;\n    background: white;\n    border-radius: 8px;\n  }\n</style>\n\n<!-- Tailwind way -->\n<div class="p-4 bg-white rounded-lg">Content</div>',
      },
      {
        id: 'spacing-padding-margin-',
        title: 'Spacing (Padding & Margin)',
        description: 'Control space around elements:',
        language: 'html',
        code: '<!-- Padding (p) -->\n<div class="p-0">No padding</div>\n<div class="p-1">Padding 0.25rem (4px)</div>\n<div class="p-2">Padding 0.5rem (8px)</div>\n<div class="p-4">Padding 1rem (16px)</div>\n<div class="p-8">Padding 2rem (32px)</div>\n\n<!-- Directional padding -->\n<div class="pt-4">Padding top</div>\n<div class="pr-4">Padding right</div>\n<div class="pb-4">Padding bottom</div>\n<div class="pl-4">Padding left</div>\n<div class="px-4">Padding left and right</div>\n<div class="py-4">Padding top and bottom</div>\n\n<!-- Margin (m) - same pattern as padding -->\n<div class="m-4">Margin all sides</div>\n<div class="mt-4">Margin top</div>\n<div class="mx-auto">Center horizontally (auto margins)</div>\n<div class="mb-4">Margin bottom</div>\n\n<!-- Negative margin -->\n<div class="-mt-4">Negative margin top</div>\n\n<!-- Space between children -->\n<div class="space-x-4">Horizontal space between children</div>\n<div class="space-y-4">Vertical space between children</div>\n\n<!-- Common scale: 0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 64 -->',
      },
      {
        id: 'width-height',
        title: 'Width & Height',
        description: 'Control element size:',
        language: 'html',
        code: '<!-- Width -->\n<div class="w-full">100% width</div>\n<div class="w-1/2">50% width</div>\n<div class="w-1/3">33.33% width</div>\n<div class="w-1/4">25% width</div>\n<div class="w-64">16rem (256px) width</div>\n<div class="w-screen">100vw width</div>\n<div class="w-auto">Auto width</div>\n<div class="w-fit">Fit content width</div>\n\n<!-- Height -->\n<div class="h-full">100% height</div>\n<div class="h-screen">100vh height</div>\n<div class="h-64">16rem (256px) height</div>\n<div class="h-auto">Auto height</div>\n\n<!-- Min/Max width and height -->\n<div class="min-w-0">Min width 0</div>\n<div class="max-w-md">Max width medium</div>\n<div class="max-w-lg">Max width large</div>\n<div class="max-w-xl">Max width extra large</div>\n<div class="max-w-full">Max width 100%</div>\n<div class="min-h-screen">Min height 100vh</div>\n<div class="max-h-full">Max height 100%</div>\n\n<!-- Common max-width scale: xs, sm, md, lg, xl, 2xl, 3xl...7xl -->',
      },
      {
        id: 'colors',
        title: 'Colors',
        description: 'Text, background, and border colors:',
        language: 'html',
        code: '<!-- Text color -->\n<p class="text-black">Black text</p>\n<p class="text-white">White text</p>\n<p class="text-gray-500">Gray text</p>\n<p class="text-red-500">Red text</p>\n<p class="text-blue-500">Blue text</p>\n<p class="text-green-500">Green text</p>\n<p class="text-yellow-500">Yellow text</p>\n<p class="text-purple-500">Purple text</p>\n<p class="text-pink-500">Pink text</p>\n<p class="text-indigo-500">Indigo text</p>\n\n<!-- Background color -->\n<div class="bg-white">White background</div>\n<div class="bg-gray-100">Light gray background</div>\n<div class="bg-blue-500">Blue background</div>\n<div class="bg-red-500">Red background</div>\n\n<!-- Color shades (50-900, lighter to darker) -->\n<div class="bg-blue-50">Lightest blue</div>\n<div class="bg-blue-100">Very light blue</div>\n<div class="bg-blue-300">Light blue</div>\n<div class="bg-blue-500">Medium blue</div>\n<div class="bg-blue-700">Dark blue</div>\n<div class="bg-blue-900">Darkest blue</div>\n\n<!-- Border color -->\n<div class="border border-gray-300">Gray border</div>\n<div class="border border-red-500">Red border</div>\n\n<!-- Opacity -->\n<div class="bg-blue-500 bg-opacity-50">50% opacity background</div>\n<div class="text-black text-opacity-75">75% opacity text</div>\n\n<!-- Gradient -->\n<div class="bg-gradient-to-r from-blue-500 to-purple-500">Gradient background</div>\n<div class="bg-gradient-to-b from-green-400 to-blue-500">Top to bottom gradient</div>',
      },
      {
        id: 'typography',
        title: 'Typography',
        description: 'Text styling:',
        language: 'html',
        code: '<!-- Font size -->\n<p class="text-xs">Extra small text</p>\n<p class="text-sm">Small text</p>\n<p class="text-base">Base text (16px)</p>\n<p class="text-lg">Large text</p>\n<p class="text-xl">Extra large text</p>\n<p class="text-2xl">2x large text</p>\n<p class="text-3xl">3x large text</p>\n<p class="text-4xl">4x large text</p>\n<p class="text-6xl">6x large text</p>\n\n<!-- Font weight -->\n<p class="font-thin">Thin weight</p>\n<p class="font-light">Light weight</p>\n<p class="font-normal">Normal weight</p>\n<p class="font-medium">Medium weight</p>\n<p class="font-semibold">Semibold weight</p>\n<p class="font-bold">Bold weight</p>\n<p class="font-extrabold">Extra bold weight</p>\n\n<!-- Text alignment -->\n<p class="text-left">Left aligned</p>\n<p class="text-center">Center aligned</p>\n<p class="text-right">Right aligned</p>\n<p class="text-justify">Justified text</p>\n\n<!-- Text decoration -->\n<p class="underline">Underlined text</p>\n<p class="line-through">Strikethrough text</p>\n<p class="no-underline">No underline</p>\n\n<!-- Text transform -->\n<p class="uppercase">Uppercase text</p>\n<p class="lowercase">Lowercase text</p>\n<p class="capitalize">Capitalize Text</p>\n\n<!-- Line height -->\n<p class="leading-none">No line height</p>\n<p class="leading-tight">Tight line height</p>\n<p class="leading-normal">Normal line height</p>\n<p class="leading-loose">Loose line height</p>\n\n<!-- Letter spacing -->\n<p class="tracking-tight">Tight letter spacing</p>\n<p class="tracking-normal">Normal letter spacing</p>\n<p class="tracking-wide">Wide letter spacing</p>\n\n<!-- Text overflow -->\n<p class="truncate">Truncated text with ellipsis...</p>\n<p class="line-clamp-2">Limit to 2 lines of text</p>\n\n<!-- Font family -->\n<p class="font-sans">Sans-serif font</p>\n<p class="font-serif">Serif font</p>\n<p class="font-mono">Monospace font</p>\n\n<!-- Italic -->\n<p class="italic">Italic text</p>\n<p class="not-italic">Not italic</p>',
      },
      {
        id: 'flexbox',
        title: 'Flexbox',
        description: 'Layout with flexbox:',
        language: 'html',
        code: '<!-- Display flex -->\n<div class="flex">Flex container</div>\n<div class="inline-flex">Inline flex container</div>\n\n<!-- Flex direction -->\n<div class="flex flex-row">Row direction (default)</div>\n<div class="flex flex-col">Column direction</div>\n<div class="flex flex-row-reverse">Reverse row</div>\n<div class="flex flex-col-reverse">Reverse column</div>\n\n<!-- Justify content (horizontal alignment) -->\n<div class="flex justify-start">Start</div>\n<div class="flex justify-center">Center</div>\n<div class="flex justify-end">End</div>\n<div class="flex justify-between">Space between</div>\n<div class="flex justify-around">Space around</div>\n<div class="flex justify-evenly">Space evenly</div>\n\n<!-- Align items (vertical alignment) -->\n<div class="flex items-start">Align start</div>\n<div class="flex items-center">Align center</div>\n<div class="flex items-end">Align end</div>\n<div class="flex items-stretch">Align stretch</div>\n\n<!-- Flex wrap -->\n<div class="flex flex-wrap">Wrap items</div>\n<div class="flex flex-nowrap">No wrap</div>\n\n<!-- Gap between items -->\n<div class="flex gap-4">Gap 1rem</div>\n<div class="flex gap-x-4">Horizontal gap</div>\n<div class="flex gap-y-4">Vertical gap</div>\n\n<!-- Flex grow/shrink -->\n<div class="flex-1">Grow and shrink equally</div>\n<div class="flex-grow">Grow to fill space</div>\n<div class="flex-shrink-0">Don\'t shrink</div>\n\n<!-- Common pattern: centered content -->\n<div class="flex items-center justify-center h-screen">\n  <p>Perfectly centered</p>\n</div>\n\n<!-- Common pattern: navbar -->\n<nav class="flex items-center justify-between p-4">\n  <div>Logo</div>\n  <div>Menu Items</div>\n</nav>',
      },
      {
        id: 'grid',
        title: 'Grid',
        description: 'Layout with CSS grid:',
        language: 'html',
        code: '<!-- Display grid -->\n<div class="grid">Grid container</div>\n\n<!-- Grid columns -->\n<div class="grid grid-cols-1">1 column</div>\n<div class="grid grid-cols-2">2 columns</div>\n<div class="grid grid-cols-3">3 columns</div>\n<div class="grid grid-cols-4">4 columns</div>\n<div class="grid grid-cols-12">12 columns</div>\n\n<!-- Grid rows -->\n<div class="grid grid-rows-2">2 rows</div>\n<div class="grid grid-rows-3">3 rows</div>\n\n<!-- Gap -->\n<div class="grid grid-cols-3 gap-4">Gap between all items</div>\n<div class="grid grid-cols-3 gap-x-4 gap-y-8">Different x/y gaps</div>\n\n<!-- Column span -->\n<div class="grid grid-cols-3">\n  <div class="col-span-2">Spans 2 columns</div>\n  <div class="col-span-1">Spans 1 column</div>\n</div>\n\n<!-- Row span -->\n<div class="row-span-2">Spans 2 rows</div>\n\n<!-- Common pattern: responsive grid -->\n<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">\n  <div>Item 1</div>\n  <div>Item 2</div>\n  <div>Item 3</div>\n</div>',
      },
      {
        id: 'borders',
        title: 'Borders',
        description: 'Add borders to elements:',
        language: 'html',
        code: '<!-- Border width -->\n<div class="border">Default border (1px)</div>\n<div class="border-2">2px border</div>\n<div class="border-4">4px border</div>\n<div class="border-0">No border</div>\n\n<!-- Border sides -->\n<div class="border-t">Top border only</div>\n<div class="border-r">Right border only</div>\n<div class="border-b">Bottom border only</div>\n<div class="border-l">Left border only</div>\n\n<!-- Border style -->\n<div class="border border-solid">Solid border</div>\n<div class="border border-dashed">Dashed border</div>\n<div class="border border-dotted">Dotted border</div>\n\n<!-- Border radius (rounded corners) -->\n<div class="rounded-none">No rounding</div>\n<div class="rounded-sm">Small rounding</div>\n<div class="rounded">Default rounding</div>\n<div class="rounded-md">Medium rounding</div>\n<div class="rounded-lg">Large rounding</div>\n<div class="rounded-xl">Extra large rounding</div>\n<div class="rounded-2xl">2x large rounding</div>\n<div class="rounded-full">Fully rounded (circle/pill)</div>\n\n<!-- Rounded specific corners -->\n<div class="rounded-t-lg">Round top corners</div>\n<div class="rounded-b-lg">Round bottom corners</div>\n<div class="rounded-l-lg">Round left corners</div>\n<div class="rounded-r-lg">Round right corners</div>',
      },
      {
        id: 'shadows',
        title: 'Shadows',
        description: 'Add depth with shadows:',
        language: 'html',
        code: '<div class="shadow-sm">Small shadow</div>\n<div class="shadow">Default shadow</div>\n<div class="shadow-md">Medium shadow</div>\n<div class="shadow-lg">Large shadow</div>\n<div class="shadow-xl">Extra large shadow</div>\n<div class="shadow-2xl">2x large shadow</div>\n<div class="shadow-none">No shadow</div>\n<div class="shadow-inner">Inner shadow</div>',
      },
      {
        id: 'position',
        title: 'Position',
        description: 'Control element positioning:',
        language: 'html',
        code: '<!-- Position type -->\n<div class="static">Static (default)</div>\n<div class="relative">Relative</div>\n<div class="absolute">Absolute</div>\n<div class="fixed">Fixed</div>\n<div class="sticky">Sticky</div>\n\n<!-- Position values -->\n<div class="absolute top-0">Top 0</div>\n<div class="absolute right-0">Right 0</div>\n<div class="absolute bottom-0">Bottom 0</div>\n<div class="absolute left-0">Left 0</div>\n<div class="absolute inset-0">All sides 0</div>\n<div class="absolute top-4 left-4">Top and left 1rem</div>\n\n<!-- Z-index -->\n<div class="z-0">Z-index 0</div>\n<div class="z-10">Z-index 10</div>\n<div class="z-50">Z-index 50</div>\n\n<!-- Common pattern: centered absolute element -->\n<div class="relative">\n  <div class="absolute inset-0 flex items-center justify-center">Centered content</div>\n</div>',
      },
      {
        id: 'display',
        title: 'Display',
        description: 'Control how elements are displayed:',
        language: 'html',
        code: '<div class="block">Block display</div>\n<div class="inline-block">Inline block</div>\n<div class="inline">Inline display</div>\n<div class="flex">Flex display</div>\n<div class="grid">Grid display</div>\n<div class="hidden">Hidden (display: none)</div>\n<div class="table">Table display</div>',
      },
      {
        id: 'sizing-overflow',
        title: 'Sizing Overflow',
        description: 'Control content overflow:',
        language: 'html',
        code: '<div class="overflow-auto">Auto scrollbar when needed</div>\n<div class="overflow-hidden">Hide overflow</div>\n<div class="overflow-visible">Visible overflow</div>\n<div class="overflow-scroll">Always show scrollbar</div>\n<div class="overflow-x-auto">Horizontal auto</div>\n<div class="overflow-y-auto">Vertical auto</div>',
      },
      {
        id: 'hover-focus-other-states',
        title: 'Hover, Focus & Other States',
        description: 'Interactive states:',
        language: 'html',
        code: '<!-- Hover -->\n<button class="bg-blue-500 hover:bg-blue-700">Hover to change color</button>\n<div class="opacity-50 hover:opacity-100">Hover to full opacity</div>\n\n<!-- Focus -->\n<input class="border focus:border-blue-500 focus:outline-none" />\n\n<!-- Active -->\n<button class="bg-blue-500 active:bg-blue-800">Active state</button>\n\n<!-- Disabled -->\n<button class="disabled:opacity-50 disabled:cursor-not-allowed" disabled>Disabled button</button>\n\n<!-- Group hover (parent hover affects child) -->\n<div class="group">\n  <p class="group-hover:text-blue-500">Changes when parent is hovered</p>\n</div>\n\n<!-- Multiple states -->\n<button class="bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 active:bg-blue-800">\n  Interactive button\n</button>\n\n<!-- Transitions with states -->\n<button class="bg-blue-500 hover:bg-blue-700 transition duration-300">Smooth color change</button>',
      },
      {
        id: 'responsive-design',
        title: 'Responsive Design',
        description: 'Mobile-first breakpoints:',
        language: 'html',
        code: '<!-- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px) -->\n\n<!-- Width changes at different screens -->\n<div class="w-full md:w-1/2 lg:w-1/3">Full width on mobile, half on tablet, third on desktop</div>\n\n<!-- Hide/show at different screens -->\n<div class="hidden md:block">Hidden on mobile, visible on tablet+</div>\n<div class="block md:hidden">Visible on mobile, hidden on tablet+</div>\n\n<!-- Flex direction changes -->\n<div class="flex flex-col md:flex-row">Stack on mobile, row on tablet+</div>\n\n<!-- Grid columns change -->\n<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">Responsive grid</div>\n\n<!-- Text size changes -->\n<h1 class="text-2xl md:text-4xl lg:text-6xl">Responsive heading</h1>\n\n<!-- Padding changes -->\n<div class="p-4 md:p-8 lg:p-12">Responsive padding</div>\n\n<!-- Common pattern: responsive navbar -->\n<nav class="flex flex-col md:flex-row items-center justify-between p-4">\n  <div>Logo</div>\n  <div class="hidden md:flex space-x-4">Menu items</div>\n  <button class="md:hidden">Mobile menu button</button>\n</nav>',
      },
      {
        id: 'transitions-animations',
        title: 'Transitions & Animations',
        description: 'Smooth transitions:',
        language: 'html',
        code: '<!-- Basic transition -->\n<div class="transition">Basic transition</div>\n<div class="transition-all">All properties</div>\n<div class="transition-colors">Color properties only</div>\n<div class="transition-opacity">Opacity only</div>\n<div class="transition-transform">Transform only</div>\n\n<!-- Duration -->\n<div class="transition duration-150">150ms duration</div>\n<div class="transition duration-300">300ms duration</div>\n<div class="transition duration-500">500ms duration</div>\n<div class="transition duration-1000">1000ms duration</div>\n\n<!-- Timing function -->\n<div class="transition ease-linear">Linear</div>\n<div class="transition ease-in">Ease in</div>\n<div class="transition ease-out">Ease out</div>\n<div class="transition ease-in-out">Ease in-out</div>\n\n<!-- Complete example -->\n<button class="bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out">\n  Smooth hover\n</button>\n\n<!-- Transform -->\n<div class="hover:scale-110 transition-transform">Scale on hover</div>\n<div class="hover:rotate-45 transition-transform">Rotate on hover</div>\n<div class="hover:translate-x-4 transition-transform">Move on hover</div>\n\n<!-- Animation -->\n<div class="animate-spin">Spinning animation</div>\n<div class="animate-ping">Ping animation</div>\n<div class="animate-pulse">Pulse animation</div>\n<div class="animate-bounce">Bounce animation</div>',
      },
      {
        id: 'forms',
        title: 'Forms',
        description: 'Style form elements:',
        language: 'html',
        code: '<!-- Input -->\n<input\n  class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"\n  type="text"\n  placeholder="Enter text"\n/>\n\n<!-- Textarea -->\n<textarea class="border border-gray-300 rounded-lg px-4 py-2 w-full" rows="4"></textarea>\n\n<!-- Select -->\n<select class="border border-gray-300 rounded-lg px-4 py-2">\n  <option>Option 1</option>\n  <option>Option 2</option>\n</select>\n\n<!-- Checkbox -->\n<input type="checkbox" class="w-4 h-4 text-blue-600 rounded" />\n\n<!-- Button styles -->\n<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">\n  Primary Button\n</button>\n\n<button class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">\n  Secondary Button\n</button>\n\n<button\n  class="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded"\n>\n  Outline Button\n</button>\n\n<!-- Disabled input -->\n<input class="bg-gray-100 cursor-not-allowed" disabled />',
      },
      {
        id: 'common-ui-patterns',
        title: 'Common UI Patterns',
        description: 'Ready-to-use component patterns:',
        language: 'html',
        code: '<!-- Card -->\n<div class="bg-white rounded-lg shadow-md p-6">\n  <h3 class="text-xl font-bold mb-2">Card Title</h3>\n  <p class="text-gray-600">Card content goes here</p>\n</div>\n\n<!-- Button group -->\n<div class="flex space-x-2">\n  <button class="bg-blue-500 text-white px-4 py-2 rounded">Save</button>\n  <button class="bg-gray-200 text-gray-800 px-4 py-2 rounded">Cancel</button>\n</div>\n\n<!-- Badge -->\n<span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">\n  Active\n</span>\n\n<!-- Alert -->\n<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">\n  Error message here\n</div>\n\n<!-- Avatar -->\n<img class="w-10 h-10 rounded-full" src="avatar.jpg" alt="Avatar" />\n\n<!-- Container (centered with max width) -->\n<div class="container mx-auto px-4">Content centered with padding</div>\n\n<!-- Modal overlay -->\n<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">\n  <div class="bg-white rounded-lg p-6 max-w-md">Modal content</div>\n</div>\n\n<!-- Sticky header -->\n<header class="sticky top-0 bg-white shadow-md z-50">Header content</header>\n\n<!-- Divider -->\n<hr class="border-t border-gray-200 my-4" />',
      },
      {
        id: 'custom-values-arbitrary-values-',
        title: 'Custom Values (Arbitrary Values)',
        description: "When default values aren't enough:",
        language: 'html',
        code: '<!-- Custom width -->\n<div class="w-[350px]">Custom width</div>\n\n<!-- Custom color -->\n<div class="bg-[#1da1f2]">Custom hex color</div>\n\n<!-- Custom spacing -->\n<div class="p-[18px]">Custom padding</div>\n\n<!-- Custom font size -->\n<p class="text-[22px]">Custom font size</p>',
      },
    ],
  },
  vue: {
    lang: 'vue',
    label: 'Vue.js',
    title: 'Vue.js',
    icon: '/vue.svg',
    color: '#41b883',
    sections: [
      {
        id: 'setup',
        title: 'Setup',
        description: 'Add Vue to your project:',
        language: 'bash',
        code: '<!-- CDN (quick start) -->\n<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>\n\n<!-- Or via npm -->\n\nnpm create vue@latest\nnpm install vue',
      },
      {
        id: 'basic-app-structure',
        title: 'Basic App Structure',
        description: 'Create a Vue application:',
        language: 'vue',
        code: "<!-- HTML -->\n<div id=\"app\">{{ message }}</div>\n\n<script>\n  const { createApp } = Vue\n\n  createApp({\n    data() {\n      return {\n        message: 'Hello Vue!',\n      }\n    },\n  }).mount('#app')\n</script>\n\n<!-- Single File Component (.vue file) -->\n<template>\n  <div>{{ message }}</div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      message: 'Hello Vue!',\n    }\n  },\n}\n</script>\n\n<style>\n/* Component styles */\n</style>",
      },
      {
        id: 'template-syntax-interpolation',
        title: 'Template Syntax (Interpolation)',
        description: 'Display data in templates:',
        language: 'vue',
        code: "<template>\n  <!-- Text interpolation -->\n  <p>{{ message }}</p>\n\n  <!-- Expressions -->\n  <p>{{ number + 1 }}</p>\n  <p>{{ isActive ? 'Yes' : 'No' }}</p>\n  <p>{{ message.toUpperCase() }}</p>\n\n  <!-- Raw HTML (use carefully) -->\n  <div v-html=\"rawHtml\"></div>\n</template>",
      },
      {
        id: 'directives',
        title: 'Directives',
        description: 'Special attributes that add functionality:',
        language: 'vue',
        code: '<template>\n  <!-- v-bind (short: :) - bind attribute -->\n  <img v-bind:src="imageUrl" />\n  <img :src="imageUrl" />\n  <div :class="className"></div>\n  <div :style="{ color: textColor }"></div>\n\n  <!-- v-if / v-else-if / v-else - conditional rendering -->\n  <p v-if="score >= 90">Grade A</p>\n  <p v-else-if="score >= 80">Grade B</p>\n  <p v-else>Grade F</p>\n\n  <!-- v-show - toggle visibility (display: none) -->\n  <p v-show="isVisible">This can be hidden</p>\n\n  <!-- v-for - loop through items -->\n  <li v-for="item in items" :key="item.id">\n    {{ item.name }}\n  </li>\n\n  <!-- v-for with index -->\n  <li v-for="(item, index) in items" :key="item.id">{{ index }}: {{ item.name }}</li>\n\n  <!-- v-for with object -->\n  <li v-for="(value, key) in object" :key="key">{{ key }}: {{ value }}</li>\n\n  <!-- v-on (short: @) - event handling -->\n  <button v-on:click="handleClick">Click me</button>\n  <button @click="handleClick">Click me</button>\n  <button @click="count++">Increment</button>\n\n  <!-- v-model - two-way data binding -->\n  <input v-model="username" />\n  <textarea v-model="message"></textarea>\n  <select v-model="selected">\n    <option value="a">A</option>\n    <option value="b">B</option>\n  </select>\n\n  <!-- v-once - render once, never update -->\n  <p v-once>{{ message }}</p>\n\n  <!-- v-pre - skip compilation -->\n  <span v-pre>{{ not compiled }}</span>\n</template>',
      },
      {
        id: 'data-reactivity-options-api',
        title: 'Data & Reactivity (Options API)',
        description: 'Manage component state:',
        language: 'vue',
        code: "<script>\nexport default {\n  data() {\n    return {\n      message: 'Hello',\n      count: 0,\n      isActive: true,\n      items: ['apple', 'banana'],\n      user: {\n        name: 'John',\n        age: 30,\n      },\n    }\n  },\n  methods: {\n    increment() {\n      this.count++\n    },\n    updateMessage(newMessage) {\n      this.message = newMessage\n    },\n  },\n}\n</script>",
      },
      {
        id: 'composition-api-modern-way',
        title: 'Composition API (Modern Way)',
        description: 'Alternative way to write components:',
        language: 'vue',
        code: "<script setup>\nimport { ref, reactive, computed, onMounted } from 'vue'\n\n// ref - for primitive values\nconst count = ref(0)\nconst message = ref('Hello')\n\n// Access/modify ref value with .value\nconsole.log(count.value)\ncount.value++\n\n// reactive - for objects\nconst user = reactive({\n  name: 'John',\n  age: 30,\n})\n\n// Access reactive properties directly (no .value)\nconsole.log(user.name)\nuser.age++\n\n// Functions\nfunction increment() {\n  count.value++\n}\n\n// Computed properties\nconst doubleCount = computed(() => count.value * 2)\n\n// Lifecycle hooks\nonMounted(() => {\n  console.log('Component mounted')\n})\n</script>\n\n<template>\n  <p>{{ count }}</p>\n  <p>{{ message }}</p>\n  <p>{{ user.name }}</p>\n  <button @click=\"increment\">Increment</button>\n</template>",
      },
      {
        id: 'computed-properties',
        title: 'Computed Properties',
        description: 'Cached values based on dependencies:',
        language: 'vue',
        code: "<script>\nexport default {\n  data() {\n    return {\n      firstName: 'John',\n      lastName: 'Doe',\n      items: [1, 2, 3, 4, 5],\n    }\n  },\n  computed: {\n    fullName() {\n      return this.firstName + ' ' + this.lastName\n    },\n    totalItems() {\n      return this.items.length\n    },\n    expensiveItems() {\n      return this.items.filter((item) => item > 2)\n    },\n  },\n}\n</script>\n\n<template>\n  <p>{{ fullName }}</p>\n  <p>Total: {{ totalItems }}</p>\n</template>",
      },
      {
        id: 'watchers',
        title: 'Watchers',
        description: 'React to data changes:',
        language: 'vue',
        code: "<script>\nexport default {\n  data() {\n    return {\n      question: '',\n      answer: '',\n    }\n  },\n  watch: {\n    question(newValue, oldValue) {\n      console.log('Question changed from', oldValue, 'to', newValue)\n      this.answer = 'Thinking...'\n    },\n  },\n}\n</script>\n\n<!-- Composition API version -->\n<script setup>\nimport { ref, watch } from 'vue'\n\nconst question = ref('')\nconst answer = ref('')\n\nwatch(question, (newValue, oldValue) => {\n  console.log('Changed:', newValue)\n  answer.value = 'Thinking...'\n})\n\n// Watch multiple sources\nwatch([question, answer], ([newQ, newA]) => {\n  console.log('Either changed')\n})\n</script>",
      },
      {
        id: 'methods',
        title: 'Methods',
        description: 'Define functions in components:',
        language: 'vue',
        code: '<script>\nexport default {\n  data() {\n    return {\n      count: 0,\n    }\n  },\n  methods: {\n    increment() {\n      this.count++\n    },\n    greet(name) {\n      alert(\'Hello \' + name)\n    },\n    handleSubmit(event) {\n      event.preventDefault()\n      console.log(\'Form submitted\')\n    },\n  },\n}\n</script>\n\n<template>\n  <button @click="increment">Add</button>\n  <button @click="greet(\'John\')">Greet</button>\n  <button @click="greet($event.target.value)">Dynamic</button>\n</template>',
      },
      {
        id: 'class-style-binding',
        title: 'Class & Style Binding',
        description: 'Dynamically apply classes and styles:',
        language: 'vue',
        code: "<template>\n  <!-- Object syntax for class -->\n  <div :class=\"{ active: isActive, 'text-red': hasError }\">Content</div>\n\n  <!-- Array syntax for class -->\n  <div :class=\"[activeClass, errorClass]\">Content</div>\n\n  <!-- Combining -->\n  <div :class=\"[isActive ? activeClass : '', errorClass]\">Content</div>\n\n  <!-- Object syntax for style -->\n  <div :style=\"{ color: textColor, fontSize: fontSize + 'px' }\">Content</div>\n\n  <!-- Array syntax for style -->\n  <div :style=\"[baseStyles, overridingStyles]\">Content</div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      isActive: true,\n      hasError: false,\n      activeClass: 'active',\n      errorClass: 'text-red',\n      textColor: 'blue',\n      fontSize: 16,\n    }\n  },\n}\n</script>",
      },
      {
        id: 'props',
        title: 'Props',
        description: 'Pass data from parent to child components:',
        language: 'vue',
        code: '<!-- Child.vue -->\n<script>\nexport default {\n  props: {\n    title: String,\n    count: {\n      type: Number,\n      required: true,\n      default: 0,\n    },\n    items: Array,\n    isActive: Boolean,\n  },\n}\n</script>\n\n<template>\n  <h2>{{ title }}</h2>\n  <p>{{ count }}</p>\n</template>\n\n<!-- Composition API Child.vue -->\n<script setup>\nconst props = defineProps({\n  title: String,\n  count: {\n    type: Number,\n    default: 0,\n  },\n})\n</script>\n\n<template>\n  <h2>{{ props.title }}</h2>\n</template>\n\n<!-- Parent.vue -->\n<template>\n  <Child title="Hello" :count="5" :items="myItems" />\n</template>',
      },
      {
        id: 'emits-child-to-parent',
        title: 'Emits (Child to Parent)',
        description: 'Send events from child to parent:',
        language: 'vue',
        code: "<!-- Child.vue -->\n<script>\nexport default {\n  emits: ['update', 'delete'],\n  methods: {\n    sendUpdate() {\n      this.$emit('update', 'new value')\n    },\n    sendDelete(id) {\n      this.$emit('delete', id)\n    },\n  },\n}\n</script>\n\n<template>\n  <button @click=\"sendUpdate\">Update</button>\n</template>\n\n<!-- Composition API -->\n<script setup>\nconst emit = defineEmits(['update', 'delete'])\n\nfunction sendUpdate() {\n  emit('update', 'new value')\n}\n</script>\n\n<!-- Parent.vue -->\n<template>\n  <Child @update=\"handleUpdate\" @delete=\"handleDelete\" />\n</template>\n\n<script>\nexport default {\n  methods: {\n    handleUpdate(value) {\n      console.log('Updated:', value)\n    },\n    handleDelete(id) {\n      console.log('Delete:', id)\n    },\n  },\n}\n</script>",
      },
      {
        id: 'slots',
        title: 'Slots',
        description: 'Pass content into components:',
        language: 'vue',
        code: '<!-- Child.vue -->\n<template>\n  <div class="card">\n    <slot></slot>\n  </div>\n</template>\n\n<!-- Parent.vue -->\n<template>\n  <Child>\n    <p>This content goes into the slot</p>\n  </Child>\n</template>\n\n<!-- Named slots -->\n<!-- Child.vue -->\n<template>\n  <div>\n    <header><slot name="header"></slot></header>\n    <main><slot></slot></main>\n    <footer><slot name="footer"></slot></footer>\n  </div>\n</template>\n\n<!-- Parent.vue -->\n<template>\n  <Child>\n    <template #header>\n      <h1>Title</h1>\n    </template>\n\n    <p>Main content</p>\n\n    <template #footer>\n      <p>Footer content</p>\n    </template>\n  </Child>\n</template>',
      },
      {
        id: 'component-registration',
        title: 'Component Registration',
        description: 'Register and use components:',
        language: 'vue',
        code: "<!-- Local registration (Options API) -->\n<script>\nimport ChildComponent from './ChildComponent.vue'\n\nexport default {\n  components: {\n    ChildComponent,\n  },\n}\n</script>\n\n<template>\n  <ChildComponent />\n</template>\n\n<!-- Composition API (auto-imported in script setup) -->\n<script setup>\nimport ChildComponent from './ChildComponent.vue'\n</script>\n\n<template>\n  <ChildComponent />\n</template>",
      },
      {
        id: 'lifecycle-hooks',
        title: 'Lifecycle Hooks',
        description: 'Run code at specific component stages:',
        language: 'vue',
        code: "<!-- Options API -->\n<script>\nexport default {\n  beforeCreate() {\n    console.log('Before create')\n  },\n  created() {\n    console.log('Created - data is reactive')\n  },\n  beforeMount() {\n    console.log('Before mount')\n  },\n  mounted() {\n    console.log('Mounted - DOM is ready')\n    // Good place for API calls, DOM manipulation\n  },\n  beforeUpdate() {\n    console.log('Before update')\n  },\n  updated() {\n    console.log('Updated')\n  },\n  beforeUnmount() {\n    console.log('Before unmount')\n  },\n  unmounted() {\n    console.log('Unmounted - cleanup here')\n  },\n}\n</script>\n\n<!-- Composition API -->\n<script setup>\nimport { onMounted, onUpdated, onUnmounted, onBeforeMount } from 'vue'\n\nonBeforeMount(() => {\n  console.log('Before mount')\n})\n\nonMounted(() => {\n  console.log('Mounted')\n  // API calls, setup here\n})\n\nonUpdated(() => {\n  console.log('Updated')\n})\n\nonUnmounted(() => {\n  console.log('Unmounted - cleanup here')\n})\n</script>",
      },
      {
        id: 'forms-v-model',
        title: 'Forms & v-model',
        description: 'Handle form input:',
        language: 'vue',
        code: '<template>\n  <!-- Text input -->\n  <input v-model="text" type="text" />\n\n  <!-- Textarea -->\n  <textarea v-model="message"></textarea>\n\n  <!-- Checkbox (single) -->\n  <input type="checkbox" v-model="checked" />\n\n  <!-- Checkbox (multiple) -->\n  <input type="checkbox" value="A" v-model="checkedItems" />\n  <input type="checkbox" value="B" v-model="checkedItems" />\n\n  <!-- Radio -->\n  <input type="radio" value="A" v-model="picked" />\n  <input type="radio" value="B" v-model="picked" />\n\n  <!-- Select -->\n  <select v-model="selected">\n    <option disabled value="">Please select</option>\n    <option value="A">A</option>\n    <option value="B">B</option>\n  </select>\n\n  <!-- Modifiers -->\n  <input v-model.lazy="text" />\n  <!-- sync on change instead of input -->\n  <input v-model.number="age" />\n  <!-- convert to number -->\n  <input v-model.trim="text" />\n  <!-- trim whitespace -->\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      text: \'\',\n      message: \'\',\n      checked: false,\n      checkedItems: [],\n      picked: \'\',\n      selected: \'\',\n      age: 0,\n    }\n  },\n}\n</script>',
      },
      {
        id: 'event-handling',
        title: 'Event Handling',
        description: 'Handle user interactions:',
        language: 'vue',
        code: '<template>\n  <!-- Basic event -->\n  <button @click="handleClick">Click</button>\n\n  <!-- Inline handler -->\n  <button @click="count++">Add</button>\n\n  <!-- Method with arguments -->\n  <button @click="greet(\'John\')">Greet</button>\n\n  <!-- Access event object -->\n  <button @click="handleClick($event)">Click</button>\n\n  <!-- Event modifiers -->\n  <form @submit.prevent="handleSubmit">Prevent default</form>\n  <div @click.stop="handleClick">Stop propagation</div>\n  <div @click.once="handleClick">Trigger once</div>\n\n  <!-- Key modifiers -->\n  <input @keyup.enter="submit" />\n  <input @keyup.esc="cancel" />\n  <input @keydown.tab="handleTab" />\n\n  <!-- Mouse button modifiers -->\n  <button @click.left="handleLeft">Left click</button>\n  <button @click.right="handleRight">Right click</button>\n</template>',
      },
      {
        id: 'conditional-rendering',
        title: 'Conditional Rendering',
        description: 'Show/hide elements based on conditions:',
        language: 'vue',
        code: '<template>\n  <!-- v-if / v-else-if / v-else -->\n  <div v-if="type === \'A\'">Type A</div>\n  <div v-else-if="type === \'B\'">Type B</div>\n  <div v-else>Other</div>\n\n  <!-- v-if with template (no wrapper element) -->\n  <template v-if="showAll">\n    <h1>Title</h1>\n    <p>Content</p>\n  </template>\n\n  <!-- v-show (toggles display CSS) -->\n  <p v-show="isVisible">Toggle visibility</p>\n</template>',
      },
      {
        id: 'list-rendering',
        title: 'List Rendering',
        description: 'Loop through arrays and objects:',
        language: 'vue',
        code: '<template>\n  <!-- Simple array -->\n  <li v-for="item in items" :key="item.id">\n    {{ item.name }}\n  </li>\n\n  <!-- With index -->\n  <li v-for="(item, index) in items" :key="item.id">{{ index }} - {{ item.name }}</li>\n\n  <!-- Range -->\n  <span v-for="n in 10" :key="n">{{ n }}</span>\n\n  <!-- Object iteration -->\n  <li v-for="(value, key, index) in object" :key="key">{{ index }}. {{ key }}: {{ value }}</li>\n\n  <!-- Filtered list -->\n  <li v-for="item in filteredItems" :key="item.id">\n    {{ item.name }}\n  </li>\n</template>\n\n<script>\nexport default {\n  computed: {\n    filteredItems() {\n      return this.items.filter((item) => item.active)\n    },\n  },\n}\n</script>',
      },
      {
        id: 'vue-router-navigation',
        title: 'Vue Router (Navigation)',
        description: 'Handle routing in single-page apps:',
        language: 'vue',
        code: "// router/index.js\nimport { createRouter, createWebHistory } from 'vue-router'\nimport Home from '../views/Home.vue'\nimport About from '../views/About.vue'\n\nconst routes = [\n  { path: '/', name: 'Home', component: Home },\n  { path: '/about', name: 'About', component: About },\n  { path: '/user/:id', name: 'User', component: User },\n]\n\nconst router = createRouter({\n  history: createWebHistory(),\n  routes,\n})\n\nexport default router\n\n<!-- App.vue -->\n<template>\n  <nav>\n    <router-link to=\"/\">Home</router-link>\n    <router-link to=\"/about\">About</router-link>\n  </nav>\n  <router-view></router-view>\n</template>\n\n<!-- Using route params -->\n<script setup>\nimport { useRoute, useRouter } from 'vue-router'\n\nconst route = useRoute()\nconst router = useRouter()\n\nconsole.log(route.params.id)\n\nfunction goBack() {\n  router.push('/')\n  router.push({ name: 'Home' })\n}\n</script>",
      },
      {
        id: 'pinia-state-management',
        title: 'Pinia (State Management)',
        description: 'Manage global state:',
        language: 'vue',
        code: "// stores/counter.js\nimport { defineStore } from 'pinia'\n\nexport const useCounterStore = defineStore('counter', {\n  state: () => ({\n    count: 0,\n  }),\n  getters: {\n    doubleCount: (state) => state.count * 2,\n  },\n  actions: {\n    increment() {\n      this.count++\n    },\n  },\n})\n\n<!-- Component.vue -->\n<script setup>\nimport { useCounterStore } from '@/stores/counter'\n\nconst counter = useCounterStore()\n</script>\n\n<template>\n  <p>{{ counter.count }}</p>\n  <button @click=\"counter.increment\">Add</button>\n</template>",
      },
      {
        id: 'fetching-data-api-calls',
        title: 'Fetching Data (API Calls)',
        description: 'Get data from APIs:',
        language: 'vue',
        code: '<script setup>\nimport { ref, onMounted } from \'vue\'\n\nconst data = ref(null)\nconst loading = ref(true)\nconst error = ref(null)\n\nasync function fetchData() {\n  try {\n    const response = await fetch(\'https://api.example.com/data\')\n    data.value = await response.json()\n  } catch (err) {\n    error.value = err.message\n  } finally {\n    loading.value = false\n  }\n}\n\nonMounted(() => {\n  fetchData()\n})\n</script>\n\n<template>\n  <div v-if="loading">Loading...</div>\n  <div v-else-if="error">Error: {{ error }}</div>\n  <div v-else>{{ data }}</div>\n</template>',
      },
      {
        id: 'refs-dom-access',
        title: 'Refs (DOM Access)',
        description: 'Access DOM elements directly:',
        language: 'vue',
        code: '<template>\n  <input ref="inputRef" />\n  <button @click="focusInput">Focus Input</button>\n</template>\n\n<script setup>\nimport { ref, onMounted } from \'vue\'\n\nconst inputRef = ref(null)\n\nfunction focusInput() {\n  inputRef.value.focus()\n}\n\nonMounted(() => {\n  console.log(inputRef.value)\n})\n</script>',
      },
      {
        id: 'provide-inject',
        title: 'Provide/Inject',
        description: 'Share data across component tree:',
        language: 'vue',
        code: "<!-- Parent.vue -->\n<script setup>\nimport { provide, ref } from 'vue'\n\nconst theme = ref('dark')\nprovide('theme', theme)\n</script>\n\n<!-- Deeply nested Child.vue -->\n<script setup>\nimport { inject } from 'vue'\n\nconst theme = inject('theme')\n</script>\n\n<template>\n  <p>Theme: {{ theme }}</p>\n</template>",
      },
      {
        id: 'transitions',
        title: 'Transitions',
        description: 'Animate elements entering/leaving:',
        language: 'vue',
        code: '<template>\n  <Transition name="fade">\n    <p v-if="show">Hello</p>\n  </Transition>\n</template>\n\n<style>\n.fade-enter-active,\n.fade-leave-active {\n  transition: opacity 0.5s ease;\n}\n.fade-enter-from,\n.fade-leave-to {\n  opacity: 0;\n}\n</style>',
      },
      {
        id: 'common-patterns',
        title: 'Common Patterns',
        description: 'Frequently used patterns:',
        language: 'vue',
        code: '<script setup>\nimport { ref, computed } from \'vue\'\n\n// Toggle boolean\nconst isOpen = ref(false)\nfunction toggle() {\n  isOpen.value = !isOpen.value\n}\n\n// Form handling\nconst form = ref({\n  name: \'\',\n  email: \'\',\n})\n\nfunction handleSubmit() {\n  console.log(form.value)\n}\n\n// List with add/remove\nconst items = ref([])\nfunction addItem(item) {\n  items.value.push(item)\n}\nfunction removeItem(index) {\n  items.value.splice(index, 1)\n}\n\n// Search/filter\nconst searchQuery = ref(\'\')\nconst filteredList = computed(() => {\n  return items.value.filter((item) =>\n    item.name.toLowerCase().includes(searchQuery.value.toLowerCase()),\n  )\n})\n</script>\n\n<template>\n  <button @click="toggle">{{ isOpen ? \'Close\' : \'Open\' }}</button>\n\n  <form @submit.prevent="handleSubmit">\n    <input v-model="form.name" placeholder="Name" />\n    <input v-model="form.email" placeholder="Email" />\n    <button type="submit">Submit</button>\n  </form>\n\n  <input v-model="searchQuery" placeholder="Search..." />\n  <li v-for="item in filteredList" :key="item.id">\n    {{ item.name }}\n  </li>\n</template>',
      },
    ],
  },

  git: {
    lang: 'git',
    label: 'Git',
    title: 'Git Version Control',
    icon: '/git.svg',
    color: '#f14e32',
    sections: [
      {
        id: 'setup',
        title: 'Setup',
        description: 'Configure Git for first use:',
        language: 'bash',
        code: '# Set your name and email\ngit config --global user.name "Your Name"\ngit config --global user.email "your.email@example.com"\n\n# Check configuration\ngit config --list\n\n# Set default branch name\ngit config --global init.defaultBranch main\n\n# Set default editor\ngit config --global core.editor "code --wait"',
      },
      {
        id: 'creating-a-repository',
        title: 'Creating a Repository',
        description: 'Start tracking a project with Git:',
        language: 'bash',
        code: '# Initialize a new repository\ngit init\n\n# Clone an existing repository\ngit clone https://github.com/username/repo.git\n\n# Clone into a specific folder\ngit clone https://github.com/username/repo.git my-folder\n\n# Clone a specific branch\ngit clone -b branch-name https://github.com/username/repo.git',
      },
      {
        id: 'basic-workflow',
        title: 'Basic Workflow',
        description: 'Check status and save changes:',
        language: 'bash',
        code: '# Check status of files\ngit status\n\n# Short status\ngit status -s\n\n# See what changed (before staging)\ngit diff\n\n# See what changed (after staging, before commit)\ngit diff --staged',
      },
      {
        id: 'staging-changes',
        title: 'Staging Changes',
        description: 'Prepare files for commit:',
        language: 'bash',
        code: '# Stage a specific file\ngit add filename.txt\n\n# Stage multiple files\ngit add file1.txt file2.txt\n\n# Stage all changes in current folder\ngit add .\n\n# Stage all changes in repo\ngit add -A\n\n# Stage all modified files (not new files)\ngit add -u\n\n# Interactively choose parts to stage\ngit add -p\n\n# Unstage a file (keep changes)\ngit reset filename.txt\n\n# Unstage all files\ngit reset',
      },
      {
        id: 'committing-changes',
        title: 'Committing Changes',
        description: 'Save staged changes to history:',
        language: 'bash',
        code: '# Commit with message\ngit commit -m "Add login feature"\n\n# Stage all tracked files and commit\ngit commit -am "Fix bug in header"\n\n# Commit with detailed message (opens editor)\ngit commit\n\n# Amend the last commit (change message or add files)\ngit commit --amend -m "New message"\n\n# Add forgotten files to last commit (no message change)\ngit add forgotten-file.txt\ngit commit --amend --no-edit',
      },
      {
        id: 'viewing-history',
        title: 'Viewing History',
        description: 'Look at commit history:',
        language: 'bash',
        code: '# View commit history\ngit log\n\n# Compact one-line view\ngit log --oneline\n\n# Show last N commits\ngit log -5\n\n# Show changes in each commit\ngit log -p\n\n# Show stats (files changed, lines added/removed)\ngit log --stat\n\n# Graph view (useful with branches)\ngit log --graph --oneline --all\n\n# Show commits by author\ngit log --author="John"\n\n# Show commits with specific message\ngit log --grep="bug fix"\n\n# Show commits between dates\ngit log --since="2024-01-01" --until="2024-12-31"\n\n# Show a specific commit\ngit show commit-hash\n\n# Show who changed each line (blame)\ngit blame filename.txt',
      },
      {
        id: 'branches',
        title: 'Branches',
        description: 'Work with different lines of development:',
        language: 'bash',
        code: '# List all branches\ngit branch\n\n# List all branches (including remote)\ngit branch -a\n\n# Create a new branch\ngit branch feature-login\n\n# Create and switch to new branch\ngit checkout -b feature-login\ngit switch -c feature-login  # Modern alternative\n\n# Switch to a branch\ngit checkout branch-name\ngit switch branch-name  # Modern alternative\n\n# Rename current branch\ngit branch -m new-name\n\n# Delete a branch (safe, checks if merged)\ngit branch -d branch-name\n\n# Force delete a branch (unmerged changes lost)\ngit branch -D branch-name\n\n# Delete remote branch\ngit push origin --delete branch-name',
      },
      {
        id: 'merging',
        title: 'Merging',
        description: 'Combine changes from different branches:',
        language: 'bash',
        code: '# Merge a branch into current branch\ngit merge feature-login\n\n# Merge with no fast-forward (always create merge commit)\ngit merge --no-ff feature-login\n\n# Abort a merge (if conflicts occur)\ngit merge --abort\n\n# Continue merge after resolving conflicts\ngit add .\ngit commit\n\n# Squash merge (combine all commits into one)\ngit merge --squash feature-login\ngit commit -m "Add login feature"',
      },
      {
        id: 'rebasing',
        title: 'Rebasing',
        description: 'Reapply commits on top of another branch:',
        language: 'bash',
        code: '# Rebase current branch onto main\ngit rebase main\n\n# Interactive rebase (edit, squash, reorder commits)\ngit rebase -i HEAD~3  # Last 3 commits\n\n# Continue rebase after resolving conflicts\ngit add .\ngit rebase --continue\n\n# Abort rebase\ngit rebase --abort\n\n# Skip current commit during rebase\ngit rebase --skip',
      },
      {
        id: 'remote-repositories',
        title: 'Remote Repositories',
        description: 'Work with remote repos (GitHub, GitLab, etc):',
        language: 'bash',
        code: '# List remote repositories\ngit remote -v\n\n# Add a remote\ngit remote add origin https://github.com/username/repo.git\n\n# Change remote URL\ngit remote set-url origin https://github.com/username/new-repo.git\n\n# Remove a remote\ngit remote remove origin\n\n# Rename a remote\ngit remote rename origin upstream',
      },
      {
        id: 'push-pull',
        title: 'Push & Pull',
        description: 'Sync with remote repositories:',
        language: 'bash',
        code: '# Push to remote\ngit push origin main\n\n# Push and set upstream branch\ngit push -u origin main\n\n# Push all branches\ngit push --all\n\n# Push tags\ngit push --tags\n\n# Force push (use carefully, overwrites remote history)\ngit push --force\ngit push --force-with-lease  # Safer force push\n\n# Pull from remote (fetch + merge)\ngit pull origin main\n\n# Pull with rebase instead of merge\ngit pull --rebase origin main\n\n# Fetch changes (without merging)\ngit fetch origin\n\n# Fetch all branches\ngit fetch --all',
      },
      {
        id: 'undoing-changes',
        title: 'Undoing Changes',
        description: 'Fix mistakes and revert changes:',
        language: 'bash',
        code: '# Discard changes in working directory (file)\ngit checkout -- filename.txt\ngit restore filename.txt  # Modern alternative\n\n# Discard all changes in working directory\ngit checkout -- .\ngit restore .  # Modern alternative\n\n# Unstage a file (keep changes)\ngit reset filename.txt\ngit restore --staged filename.txt  # Modern alternative\n\n# Reset to specific commit (keep changes staged)\ngit reset --soft commit-hash\n\n# Reset to specific commit (keep changes unstaged)\ngit reset --mixed commit-hash\n\n# Reset to specific commit (discard all changes)\ngit reset --hard commit-hash\n\n# Undo last commit (keep changes)\ngit reset --soft HEAD~1\n\n# Undo last commit (discard changes)\ngit reset --hard HEAD~1\n\n# Revert a commit (creates new commit that undoes changes)\ngit revert commit-hash\n\n# Revert without committing immediately\ngit revert --no-commit commit-hash',
      },
      {
        id: 'stashing',
        title: 'Stashing',
        description: 'Temporarily save changes without committing:',
        language: 'bash',
        code: '# Stash current changes\ngit stash\n\n# Stash with a message\ngit stash save "work in progress"\n\n# List all stashes\ngit stash list\n\n# Apply most recent stash (keep in stash list)\ngit stash apply\n\n# Apply specific stash\ngit stash apply stash@{2}\n\n# Apply and remove most recent stash\ngit stash pop\n\n# Remove a specific stash\ngit stash drop stash@{0}\n\n# Remove all stashes\ngit stash clear\n\n# Show stash contents\ngit stash show -p stash@{0}\n\n# Stash including untracked files\ngit stash -u',
      },
      {
        id: 'tags',
        title: 'Tags',
        description: 'Mark specific points in history (like releases):',
        language: 'bash',
        code: '# List all tags\ngit tag\n\n# Create a lightweight tag\ngit tag v1.0.0\n\n# Create an annotated tag (recommended)\ngit tag -a v1.0.0 -m "Version 1.0.0"\n\n# Tag a specific commit\ngit tag -a v1.0.0 commit-hash -m "Version 1.0.0"\n\n# Show tag details\ngit show v1.0.0\n\n# Push a specific tag\ngit push origin v1.0.0\n\n# Push all tags\ngit push origin --tags\n\n# Delete a local tag\ngit tag -d v1.0.0\n\n# Delete a remote tag\ngit push origin --delete v1.0.0\n\n# Checkout a tag\ngit checkout v1.0.0',
      },
      {
        id: 'ignoring-files',
        title: 'Ignoring Files',
        description: 'Exclude files from Git tracking:',
        language: 'bash',
        code: '# Create .gitignore file\ntouch .gitignore\n\n# .gitignore contents\nnode_modules/\n*.log\n.env\n.DS_Store\ndist/\nbuild/\n*.tmp\n\n# Ignore all .txt files except important.txt\n*.txt\n!important.txt\n\n# Ignore a specific folder\nconfig/local/\n\n# Check if file is ignored\ngit check-ignore -v filename.txt\n\n# Remove already tracked file (add to .gitignore after)\ngit rm --cached filename.txt',
      },
      {
        id: 'comparing-changes-diff',
        title: 'Comparing Changes (Diff)',
        description: 'See differences between versions:',
        language: 'bash',
        code: '# Compare working directory to last commit\ngit diff\n\n# Compare staged changes to last commit\ngit diff --staged\n\n# Compare two branches\ngit diff branch1 branch2\n\n# Compare two commits\ngit diff commit1 commit2\n\n# Compare specific file between commits\ngit diff commit1 commit2 -- filename.txt\n\n# Show only file names that changed\ngit diff --name-only\n\n# Show summary of changes\ngit diff --stat',
      },
      {
        id: 'working-with-conflicts',
        title: 'Working with Conflicts',
        description: 'Resolve merge conflicts:',
        language: 'bash',
        code: '# After a conflict occurs, files show conflict markers:\n\n<<<<<<< HEAD\nYour changes\n=======\nTheir changes\n>>>>>>> branch-name\n\n# After manually resolving conflicts, mark as resolved\ngit add filename.txt\n\n# Continue the merge/rebase\ngit commit  # for merge\ngit rebase --continue  # for rebase\n\n# Use "ours" version (keep current branch changes)\ngit checkout --ours filename.txt\n\n# Use "theirs" version (keep incoming changes)\ngit checkout --theirs filename.txt\n\n# Abort and go back to before conflict\ngit merge --abort\ngit rebase --abort',
      },
      {
        id: 'cherry-pick',
        title: 'Cherry Pick',
        description: 'Apply specific commits from another branch:',
        language: 'bash',
        code: '# Apply a specific commit to current branch\ngit cherry-pick commit-hash\n\n# Cherry-pick multiple commits\ngit cherry-pick commit1 commit2\n\n# Cherry-pick without committing\ngit cherry-pick -n commit-hash\n\n# Continue after resolving conflicts\ngit cherry-pick --continue\n\n# Abort cherry-pick\ngit cherry-pick --abort',
      },
      {
        id: 'working-with-files',
        title: 'Working with Files',
        description: 'Move, remove, and rename files:',
        language: 'bash',
        code: '# Remove a file (from Git and disk)\ngit rm filename.txt\n\n# Remove a file (from Git only, keep on disk)\ngit rm --cached filename.txt\n\n# Remove a folder\ngit rm -r foldername/\n\n# Rename/move a file\ngit mv oldname.txt newname.txt\n\n# Show file history\ngit log --follow filename.txt',
      },
      {
        id: 'submodules',
        title: 'Submodules',
        description: 'Include other repositories inside your repo:',
        language: 'bash',
        code: '# Add a submodule\ngit submodule add https://github.com/username/repo.git path/to/submodule\n\n# Clone repo with submodules\ngit clone --recurse-submodules https://github.com/username/repo.git\n\n# Initialize submodules (after regular clone)\ngit submodule init\ngit submodule update\n\n# Update all submodules\ngit submodule update --remote\n\n# Remove a submodule\ngit submodule deinit path/to/submodule\ngit rm path/to/submodule',
      },
      {
        id: 'useful-commands',
        title: 'Useful Commands',
        description: 'Helpful Git utilities:',
        language: 'bash',
        code: '# Show current branch\ngit branch --show-current\n\n# Show remote URL\ngit remote get-url origin\n\n# Show detailed info about a commit\ngit show commit-hash\n\n# Search commit messages\ngit log --all --grep="keyword"\n\n# Search code changes (find when a line was added/removed)\ngit log -S "search term"\n\n# Find which commit introduced a bug (binary search)\ngit bisect start\ngit bisect bad                 # Current commit is bad\ngit bisect good commit-hash    # Known good commit\ngit bisect reset               # End bisect session\n\n# Clean untracked files (dry run first!)\ngit clean -n                   # Show what would be deleted\ngit clean -f                   # Delete untracked files\ngit clean -fd                  # Delete untracked files and folders\n\n# Show file at specific commit\ngit show commit-hash:filename.txt\n\n# Count commits\ngit rev-list --count HEAD\n\n# Show repository size\ngit count-objects -vH\n\n# Archive repository as zip\ngit archive --format=zip HEAD > archive.zip',
      },
      {
        id: 'github-specific-workflow',
        title: 'GitHub-Specific Workflow',
        description: 'Common workflow for GitHub projects:',
        language: 'bash',
        code: '# Fork workflow: clone your fork\ngit clone https://github.com/your-username/repo.git\n\n# Add original repo as upstream\ngit remote add upstream https://github.com/original-owner/repo.git\n\n# Sync your fork with upstream\ngit fetch upstream\ngit checkout main\ngit merge upstream/main\n\n# Create feature branch for pull request\ngit checkout -b feature/new-feature\n\n# Push feature branch\ngit push -u origin feature/new-feature\n\n# After PR is merged, clean up\ngit checkout main\ngit pull\ngit branch -d feature/new-feature',
      },
      {
        id: 'common-workflow-example',
        title: 'Common Workflow Example',
        description: 'Typical daily Git workflow:',
        language: 'bash',
        code: '# Start your day - get latest changes\ngit checkout main\ngit pull origin main\n\n# Create a new branch for your feature\ngit checkout -b feature/user-profile\n\n# Make changes, then check status\ngit status\n\n# Stage and commit changes\ngit add .\ngit commit -m "Add user profile page"\n\n# Push your branch\ngit push -u origin feature/user-profile\n\n# Continue working, make more commits\ngit add .\ngit commit -m "Add profile picture upload"\n\n# Push updates\ngit push\n\n# When ready, merge main into your branch to get updates\ngit checkout main\ngit pull\ngit checkout feature/user-profile\ngit merge main\n\n# Resolve any conflicts, then push\ngit push\n\n# After PR approved and merged, clean up\ngit checkout main\ngit pull\ngit branch -d feature/user-profile',
      },
      {
        id: 'aliases',
        title: 'Aliases',
        description: 'Create shortcuts for common commands:',
        language: 'bash',
        code: '# Create aliases\ngit config --global alias.co checkout\ngit config --global alias.br branch\ngit config --global alias.ci commit\ngit config --global alias.st status\ngit config --global alias.last "log -1 HEAD"\ngit config --global alias.unstage "reset HEAD --"\n\n# Now you can use:\ngit co branch-name    # instead of git checkout branch-name\ngit st                # instead of git status',
      },
    ],
  },
  laravel: {
    lang: 'laravel',
    label: 'Laravel',
    title: 'Laravel PHP Framework',
    icon: '/laravel.svg',
    color: '#ff2d20',
    sections: [
      {
        id: 'installation-setup',
        title: 'Installation & Setup',
        description: 'Create a new Laravel project:',
        language: 'bash',
        code: '# Install via Composer\ncomposer create-project laravel/laravel my-project\n\n# Install via Laravel installer\nlaravel new my-project\n\n# Start development server\nphp artisan serve\n\n# Generate application key\nphp artisan key:generate',
      },
      {
        id: 'project-structure',
        title: 'Project Structure',
        description: 'Key folders and files:',
        language: 'php',
        code: 'app/\n  Http/\n    Controllers/    # Controller classes\n    Middleware/      # Middleware classes\n  Models/            # Eloquent models\nroutes/\n  web.php            # Web routes\n  api.php            # API routes\ndatabase/\n  migrations/        # Database migrations\n  seeders/           # Database seeders\nresources/\n  views/             # Blade templates\n  css/ js/            # Frontend assets\npublic/              # Public entry point\n.env                 # Environment configuration',
      },
      {
        id: 'routing',
        title: 'Routing',
        description: 'Define application routes:',
        language: 'php',
        code: "// routes/web.php\n\nuse App\\Http\\Controllers\\UserController;\n\n// Basic routes\nRoute::get('/', function () {\n    return view('welcome');\n});\n\nRoute::get('/about', function () {\n    return 'About page';\n});\n\n// Route with parameter\nRoute::get('/user/{id}', function ($id) {\n    return 'User ' . $id;\n});\n\n// Optional parameter\nRoute::get('/user/{name?}', function ($name = 'Guest') {\n    return $name;\n});\n\n// Named route\nRoute::get('/profile', function () {\n    return view('profile');\n})->name('profile');\n\n// Route to controller method\nRoute::get('/users', [UserController::class, 'index']);\nRoute::post('/users', [UserController::class, 'store']);\nRoute::get('/users/{id}', [UserController::class, 'show']);\nRoute::put('/users/{id}', [UserController::class, 'update']);\nRoute::delete('/users/{id}', [UserController::class, 'destroy']);\n\n// Resource controller (all CRUD routes at once)\nRoute::resource('users', UserController::class);\n\n// Route groups\nRoute::prefix('admin')->group(function () {\n    Route::get('/dashboard', function () {\n        return 'Admin Dashboard';\n    });\n});\n\n// Route group with middleware\nRoute::middleware(['auth'])->group(function () {\n    Route::get('/dashboard', function () {\n        return view('dashboard');\n    });\n});\n\n// Route group with name prefix\nRoute::name('admin.')->group(function () {\n    Route::get('/users', function () {\n        return 'Admin Users';\n    })->name('users');  // Full name: admin.users\n});\n\n// Multiple HTTP methods\nRoute::match(['get', 'post'], '/contact', function () {\n    return 'Contact page';\n});\n\nRoute::any('/anything', function () {\n    return 'Handles all methods';\n});\n\n// Redirect\nRoute::redirect('/old-page', '/new-page');\n\n// Route with constraints\nRoute::get('/user/{id}', function ($id) {\n    return $id;\n})->where('id', '[0-9]+');",
      },
      {
        id: 'controllers',
        title: 'Controllers',
        description: 'Handle application logic:',
        language: 'php',
        code: "# Create a controller\nphp artisan make:controller UserController\n\n# Create a resource controller (with CRUD methods)\nphp artisan make:controller UserController --resource\n\n// app/Http/Controllers/UserController.php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Models\\User;\nuse Illuminate\\Http\\Request;\n\nclass UserController extends Controller\n{\n    // Show all users\n    public function index()\n    {\n        $users = User::all();\n        return view('users.index', ['users' => $users]);\n    }\n\n    // Show form to create new user\n    public function create()\n    {\n        return view('users.create');\n    }\n\n    // Store new user\n    public function store(Request $request)\n    {\n        $validated = $request->validate([\n            'name' => 'required|max:255',\n            'email' => 'required|email|unique:users'\n        ]);\n\n        User::create($validated);\n\n        return redirect()->route('users.index');\n    }\n\n    // Show single user\n    public function show($id)\n    {\n        $user = User::findOrFail($id);\n        return view('users.show', ['user' => $user]);\n    }\n\n    // Show form to edit user\n    public function edit($id)\n    {\n        $user = User::findOrFail($id);\n        return view('users.edit', ['user' => $user]);\n    }\n\n    // Update user\n    public function update(Request $request, $id)\n    {\n        $user = User::findOrFail($id);\n        $user->update($request->all());\n        return redirect()->route('users.index');\n    }\n\n    // Delete user\n    public function destroy($id)\n    {\n        User::destroy($id);\n        return redirect()->route('users.index');\n    }\n}",
      },
      {
        id: 'blade-templates',
        title: 'Blade Templates',
        description: "Laravel's templating engine:",
        language: 'blade',
        code: "{{-- Display data --}}\n{{ $name }}\n\n{{-- Display raw HTML (careful with XSS) --}}\n{!! $html !!}\n\n{{-- Comments --}}\n{{-- This is a comment --}}\n\n{{-- If statements --}}\n@if ($age >= 18)\n    Adult\n@elseif ($age >= 13)\n    Teenager\n@else\n    Child\n@endif\n\n{{-- Unless (opposite of if) --}}\n@unless ($isLoggedIn)\n    Please log in\n@endunless\n\n{{-- Loops --}}\n@foreach ($users as $user)\n    <p>{{ $user->name }}</p>\n@endforeach\n\n@for ($i = 0; $i < 10; $i++)\n    {{ $i }}\n@endfor\n\n@while ($condition)\n    Loop content\n@endwhile\n\n{{-- Loop variable --}}\n@foreach ($users as $user)\n    {{ $loop->index }}     {{-- current index (0 based) --}}\n    {{ $loop->iteration }} {{-- current iteration (1 based) --}}\n    {{ $loop->first }}     {{-- is first iteration --}}\n    {{ $loop->last }}      {{-- is last iteration --}}\n    {{ $loop->count }}     {{-- total items --}}\n@endforeach\n\n{{-- Empty check --}}\n@forelse ($users as $user)\n    {{ $user->name }}\n@empty\n    No users found\n@endforelse\n\n{{-- Include another view --}}\n@include('partials.header')\n\n{{-- Pass data to included view --}}\n@include('partials.alert', ['type' => 'success'])\n\n{{-- Extend a layout --}}\n@extends('layouts.app')\n\n@section('title', 'Home Page')\n\n@section('content')\n    <h1>Welcome</h1>\n@endsection\n\n{{-- Layout file (layouts/app.blade.php) --}}\n<html>\n<head>\n    <title>@yield('title', 'Default Title')</title>\n</head>\n<body>\n    @yield('content')\n</body>\n</html>\n\n{{-- Sections with parent content --}}\n@section('sidebar')\n    @parent\n    New sidebar content\n@endsection\n\n{{-- Stack (push content to a section) --}}\n@push('scripts')\n    <script src=\"app.js\"></script>\n@endpush\n\n{{-- In layout --}}\n@stack('scripts')\n\n{{-- Components --}}\n<x-alert type=\"error\" message=\"Something went wrong\" />\n\n{{-- Authentication checks --}}\n@auth\n    Welcome, {{ auth()->user()->name }}\n@endauth\n\n@guest\n    Please log in\n@endguest\n\n{{-- CSRF token (required for forms) --}}\n<form method=\"POST\" action=\"/submit\">\n    @csrf\n    <input type=\"text\" name=\"name\">\n</form>\n\n{{-- Method spoofing (for PUT, DELETE) --}}\n<form method=\"POST\" action=\"/users/1\">\n    @csrf\n    @method('DELETE')\n    <button type=\"submit\">Delete</button>\n</form>\n\n{{-- CSS classes conditionally --}}\n<div @class(['active' => $isActive, 'text-red' => $hasError])>\n    Content\n</div>",
      },
      {
        id: 'eloquent-models',
        title: 'Eloquent Models',
        description: 'Database interaction:',
        language: 'php',
        code: "# Create a model\nphp artisan make:model Post\n\n# Create model with migration\nphp artisan make:model Post -m\n\n# Create model with migration, controller, factory\nphp artisan make:model Post -mcr\n\n// app/Models/Post.php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Post extends Model\n{\n    // Fillable fields (mass assignment)\n    protected $fillable = ['title', 'content', 'user_id'];\n\n    // Guarded fields (opposite of fillable)\n    protected $guarded = ['id'];\n\n    // Hidden fields (won't show in JSON)\n    protected $hidden = ['password'];\n\n    // Cast attributes to specific types\n    protected $casts = [\n        'is_published' => 'boolean',\n        'published_at' => 'datetime'\n    ];\n\n    // Custom table name (default is plural of model)\n    protected $table = 'blog_posts';\n\n    // Disable timestamps\n    public $timestamps = false;\n\n    // Relationship: Post belongs to User\n    public function user()\n    {\n        return $this->belongsTo(User::class);\n    }\n\n    // Relationship: Post has many comments\n    public function comments()\n    {\n        return $this->hasMany(Comment::class);\n    }\n}",
      },
      {
        id: 'eloquent-queries',
        title: 'Eloquent Queries',
        description: 'Query the database:',
        language: 'php',
        code: "use App\\Models\\User;\n\n// Get all records\n$users = User::all();\n\n// Get first record\n$user = User::first();\n\n// Find by primary key\n$user = User::find(1);\n$user = User::findOrFail(1);  // 404 if not found\n\n// Where clause\n$users = User::where('age', '>', 18)->get();\n$users = User::where('name', 'John')->get();\n\n// Multiple where clauses\n$users = User::where('age', '>', 18)\n             ->where('active', true)\n             ->get();\n\n// Or where\n$users = User::where('name', 'John')\n             ->orWhere('name', 'Jane')\n             ->get();\n\n// Where in\n$users = User::whereIn('id', [1, 2, 3])->get();\n\n// Where not in\n$users = User::whereNotIn('id', [1, 2, 3])->get();\n\n// Where null / not null\n$users = User::whereNull('deleted_at')->get();\n$users = User::whereNotNull('email_verified_at')->get();\n\n// Where between\n$users = User::whereBetween('age', [18, 65])->get();\n\n// Order by\n$users = User::orderBy('name', 'asc')->get();\n$users = User::orderBy('created_at', 'desc')->get();\n\n// Limit and offset\n$users = User::limit(10)->get();\n$users = User::offset(5)->limit(10)->get();\n\n// Take (alias for limit)\n$users = User::take(5)->get();\n\n// Select specific columns\n$users = User::select('name', 'email')->get();\n\n// Count\n$count = User::count();\n$count = User::where('active', true)->count();\n\n// Sum, Avg, Max, Min\n$total = Order::sum('amount');\n$average = Product::avg('price');\n$highest = Product::max('price');\n$lowest = Product::min('price');\n\n// Group by\n$users = User::groupBy('country')->get();\n\n// Pagination\n$users = User::paginate(10);\n\n// First or fail\n$user = User::where('email', 'test@test.com')->firstOrFail();\n\n// Check existence\n$exists = User::where('email', 'test@test.com')->exists();\n\n// Get single column values\n$names = User::pluck('name');\n$emails = User::pluck('email', 'id');  // key-value pairs\n\n// Chunk (process large datasets in batches)\nUser::chunk(100, function ($users) {\n    foreach ($users as $user) {\n        // Process user\n    }\n});",
      },
      {
        id: 'creating-updating-deleting',
        title: 'Creating, Updating, Deleting',
        description: 'Modify database records:',
        language: 'php',
        code: "// Create a new record\n$user = User::create([\n    'name' => 'John',\n    'email' => 'john@example.com'\n]);\n\n// Create using new instance\n$user = new User();\n$user->name = 'John';\n$user->email = 'john@example.com';\n$user->save();\n\n// Update a record\n$user = User::find(1);\n$user->name = 'Jane';\n$user->save();\n\n// Update using update method\nUser::where('id', 1)->update(['name' => 'Jane']);\n\n// Update or create\nUser::updateOrCreate(\n    ['email' => 'john@example.com'],  // find by this\n    ['name' => 'John Updated']         // update/create with this\n);\n\n// First or create\nUser::firstOrCreate(\n    ['email' => 'john@example.com'],\n    ['name' => 'John']\n);\n\n// Delete a record\n$user = User::find(1);\n$user->delete();\n\n// Delete by ID\nUser::destroy(1);\nUser::destroy([1, 2, 3]);\n\n// Delete with where\nUser::where('active', false)->delete();\n\n// Soft delete (requires SoftDeletes trait)\n$user->delete();  // Sets deleted_at instead of removing\n\n// Restore soft deleted\n$user->restore();\n\n// Force delete (permanently remove)\n$user->forceDelete();\n\n// Get soft deleted records\n$users = User::withTrashed()->get();\n$users = User::onlyTrashed()->get();",
      },
      {
        id: 'relationships',
        title: 'Relationships',
        description: 'Define connections between models:',
        language: 'php',
        code: "// One to Many (User has many Posts)\nclass User extends Model {\n    public function posts() {\n        return $this->hasMany(Post::class);\n    }\n}\n\nclass Post extends Model {\n    public function user() {\n        return $this->belongsTo(User::class);\n    }\n}\n\n// Usage\n$user = User::find(1);\n$posts = $user->posts;  // Get all posts\n\n$post = Post::find(1);\n$user = $post->user;  // Get the owner\n\n// One to One\nclass User extends Model {\n    public function profile() {\n        return $this->hasOne(Profile::class);\n    }\n}\n\n// Many to Many\nclass User extends Model {\n    public function roles() {\n        return $this->belongsToMany(Role::class);\n    }\n}\n\nclass Role extends Model {\n    public function users() {\n        return $this->belongsToMany(User::class);\n    }\n}\n\n// Usage\n$user = User::find(1);\n$roles = $user->roles;\n\n// Attach/detach (many to many)\n$user->roles()->attach($roleId);\n$user->roles()->detach($roleId);\n$user->roles()->sync([1, 2, 3]);  // Set exact roles\n\n// Has Many Through\nclass Country extends Model {\n    public function posts() {\n        return $this->hasManyThrough(Post::class, User::class);\n    }\n}\n\n// Eager loading (avoid N+1 query problem)\n$users = User::with('posts')->get();\n\n// Eager load multiple relationships\n$users = User::with(['posts', 'profile'])->get();\n\n// Nested eager loading\n$users = User::with('posts.comments')->get();\n\n// Eager load with condition\n$users = User::with(['posts' => function ($query) {\n    $query->where('published', true);\n}])->get();",
      },
      {
        id: 'migrations',
        title: 'Migrations',
        description: 'Version control for database schema:',
        language: 'php',
        code: "# Create a migration\nphp artisan make:migration create_posts_table\n\n# Run migrations\nphp artisan migrate\n\n# Rollback last migration\nphp artisan migrate:rollback\n\n# Rollback all migrations\nphp artisan migrate:reset\n\n# Rollback and re-run all migrations\nphp artisan migrate:refresh\n\n# Drop all tables and re-run migrations\nphp artisan migrate:fresh\n\n# Check migration status\nphp artisan migrate:status\n\n// database/migrations/xxxx_create_posts_table.php\n\nuse Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nreturn new class extends Migration\n{\n    public function up()\n    {\n        Schema::create('posts', function (Blueprint $table) {\n            $table->id();\n            $table->string('title');\n            $table->text('content');\n            $table->boolean('is_published')->default(false);\n            $table->foreignId('user_id')->constrained();\n            $table->timestamps();\n            $table->softDeletes();  // Adds deleted_at column\n        });\n    }\n\n    public function down()\n    {\n        Schema::dropIfExists('posts');\n    }\n};\n\n// Common column types\n$table->id();                          // Auto-incrementing ID\n$table->string('name');                // VARCHAR\n$table->string('name', 100);           // VARCHAR with length\n$table->text('description');           // TEXT\n$table->longText('content');           // LONGTEXT\n$table->integer('age');                // INTEGER\n$table->bigInteger('views');           // BIGINT\n$table->float('price');                // FLOAT\n$table->decimal('amount', 8, 2);       // DECIMAL(8,2)\n$table->boolean('is_active');          // BOOLEAN\n$table->date('birth_date');            // DATE\n$table->dateTime('published_at');      // DATETIME\n$table->timestamp('verified_at');      // TIMESTAMP\n$table->timestamps();                  // created_at, updated_at\n$table->softDeletes();                 // deleted_at\n$table->json('metadata');              // JSON\n$table->foreignId('user_id')->constrained();  // Foreign key\n\n// Column modifiers\n$table->string('email')->unique();\n$table->string('name')->nullable();\n$table->integer('age')->default(18);\n$table->string('slug')->index();\n\n// Modify existing table\nSchema::table('posts', function (Blueprint $table) {\n    $table->string('slug')->after('title');\n    $table->dropColumn('old_column');\n});",
      },
      {
        id: 'validation',
        title: 'Validation',
        description: 'Validate incoming data:',
        language: 'php',
        code: "// In controller\npublic function store(Request $request)\n{\n    $validated = $request->validate([\n        'name' => 'required|string|max:255',\n        'email' => 'required|email|unique:users',\n        'password' => 'required|min:8|confirmed',\n        'age' => 'nullable|integer|min:18',\n    ]);\n\n    User::create($validated);\n}\n\n// Common validation rules\n'required'              // Field must be present\n'nullable'               // Field can be null\n'string'                // Must be a string\n'integer'               // Must be an integer\n'numeric'               // Must be numeric\n'boolean'                // Must be true/false\n'email'                  // Must be valid email\n'unique:users'           // Must be unique in users table\n'unique:users,email'     // Unique in users table, email column\n'exists:users,id'        // Must exist in users table\n'min:8'                  // Minimum length/value\n'max:255'                // Maximum length/value\n'between:1,100'          // Between two values\n'confirmed'              // Must match field_confirmation\n'date'                   // Must be a valid date\n'url'                    // Must be a valid URL\n'in:admin,user,guest'    // Must be one of these values\n'image'                  // Must be an image file\n'file'                   // Must be a file\n'array'                  // Must be an array\n\n// Custom error messages\n$request->validate([\n    'email' => 'required|email'\n], [\n    'email.required' => 'We need your email address',\n    'email.email' => 'Please enter a valid email'\n]);\n\n// Form Request (separate validation class)\nphp artisan make:request StoreUserRequest\n\n// app/Http/Requests/StoreUserRequest.php\nclass StoreUserRequest extends FormRequest\n{\n    public function authorize()\n    {\n        return true;\n    }\n\n    public function rules()\n    {\n        return [\n            'name' => 'required|max:255',\n            'email' => 'required|email|unique:users'\n        ];\n    }\n}\n\n// In controller\npublic function store(StoreUserRequest $request)\n{\n    $validated = $request->validated();\n    User::create($validated);\n}",
      },
      {
        id: 'middleware',
        title: 'Middleware',
        description: 'Filter HTTP requests:',
        language: 'php',
        code: "# Create middleware\nphp artisan make:middleware CheckAge\n\n// app/Http/Middleware/CheckAge.php\n\nnamespace App\\Http\\Middleware;\n\nuse Closure;\n\nclass CheckAge\n{\n    public function handle($request, Closure $next)\n    {\n        if ($request->age < 18) {\n            return redirect('home');\n        }\n        return $next($request);\n    }\n}\n\n// Register in app/Http/Kernel.php\nprotected $middlewareAliases = [\n    'age' => \\App\\Http\\Middleware\\CheckAge::class,\n];\n\n// Use in routes\nRoute::get('/profile', function () {\n    //\n})->middleware('age');\n\n// Multiple middleware\nRoute::get('/profile', function () {\n    //\n})->middleware(['auth', 'age']);\n\n// Built-in middleware\n'auth'          // User must be authenticated\n'guest'         // User must NOT be authenticated\n'verified'      // Email must be verified\n'throttle:60,1' // Rate limiting (60 requests per minute)",
      },
      {
        id: 'authentication',
        title: 'Authentication',
        description: 'User login and registration:',
        language: 'php',
        code: "# Install Laravel Breeze (simple auth scaffolding)\ncomposer require laravel/breeze --dev\nphp artisan breeze:install\nnpm install && npm run dev\nphp artisan migrate\n\nuse Illuminate\\Support\\Facades\\Auth;\n\n// Attempt login\nif (Auth::attempt(['email' => $email, 'password' => $password])) {\n    // Login successful\n    return redirect('/dashboard');\n}\n\n// Check if logged in\nif (Auth::check()) {\n    // User is logged in\n}\n\n// Get logged in user\n$user = Auth::user();\n$userId = Auth::id();\n\n// Logout\nAuth::logout();\n\n// In Blade\n@auth\n    Welcome, {{ Auth::user()->name }}\n@endauth\n\n@guest\n    <a href=\"/login\">Login</a>\n@endguest\n\n// Protect routes\nRoute::middleware('auth')->group(function () {\n    Route::get('/dashboard', function () {\n        return view('dashboard');\n    });\n});",
      },
      {
        id: 'request-response',
        title: 'Request & Response',
        description: 'Handle HTTP requests:',
        language: 'php',
        code: "public function store(Request $request)\n{\n    // Get all input\n    $all = $request->all();\n\n    // Get specific input\n    $name = $request->input('name');\n    $name = $request->name;  // Alternative syntax\n\n    // Get with default value\n    $name = $request->input('name', 'Guest');\n\n    // Check if input exists\n    if ($request->has('name')) {\n        //\n    }\n\n    // Get only specific fields\n    $data = $request->only(['name', 'email']);\n\n    // Get all except specific fields\n    $data = $request->except(['password']);\n\n    // File upload\n    $file = $request->file('avatar');\n    $path = $request->file('avatar')->store('avatars');\n\n    // Check if file exists\n    if ($request->hasFile('avatar')) {\n        //\n    }\n\n    // Get query string\n    $search = $request->query('search');\n\n    // Get request method\n    $method = $request->method();\n\n    // Check request method\n    if ($request->isMethod('post')) {\n        //\n    }\n\n    // JSON request\n    $data = $request->json()->all();\n}\n\n// Responses\nreturn response('Hello World');\nreturn response()->json(['name' => 'John']);\nreturn response()->json(['error' => 'Not found'], 404);\nreturn redirect('/home');\nreturn redirect()->route('home');\nreturn redirect()->back();\nreturn redirect()->back()->with('success', 'Saved!');\nreturn view('welcome');\nreturn view('welcome', ['name' => 'John']);",
      },
      {
        id: 'sessions-flash-messages',
        title: 'Sessions & Flash Messages',
        description: 'Store temporary data:',
        language: 'php',
        code: "// Store in session\nsession(['key' => 'value']);\n$request->session()->put('key', 'value');\n\n// Get from session\n$value = session('key');\n$value = $request->session()->get('key');\n\n// Get with default\n$value = session('key', 'default');\n\n// Check if exists\nif (session()->has('key')) {\n    //\n}\n\n// Remove from session\nsession()->forget('key');\n\n// Flash message (available for next request only)\nsession()->flash('success', 'Saved successfully!');\n\n// In controller\nreturn redirect('/home')->with('success', 'Saved!');\n\n// In Blade\n@if (session('success'))\n    <div class=\"alert\">{{ session('success') }}</div>\n@endif",
      },
      {
        id: 'artisan-commands',
        title: 'Artisan Commands',
        description: 'Common CLI commands:',
        language: 'bash',
        code: '# Create files\nphp artisan make:model Post\nphp artisan make:controller PostController\nphp artisan make:migration create_posts_table\nphp artisan make:seeder PostSeeder\nphp artisan make:factory PostFactory\nphp artisan make:request StorePostRequest\nphp artisan make:middleware CheckAge\nphp artisan make:command SendEmails\n\n# Database\nphp artisan migrate\nphp artisan migrate:rollback\nphp artisan migrate:fresh\nphp artisan db:seed\nphp artisan migrate:fresh --seed\n\n# Cache\nphp artisan cache:clear\nphp artisan config:clear\nphp artisan route:clear\nphp artisan view:clear\nphp artisan optimize:clear\n\n# Other useful commands\nphp artisan route:list          # List all routes\nphp artisan tinker              # Interactive shell\nphp artisan queue:work          # Process queue jobs\nphp artisan storage:link        # Create symbolic link for storage',
      },
      {
        id: 'seeders-factories',
        title: 'Seeders & Factories',
        description: 'Generate test data:',
        language: 'php',
        code: "// database/factories/UserFactory.php\nuse Illuminate\\Database\\Eloquent\\Factories\\Factory;\n\nclass UserFactory extends Factory\n{\n    public function definition()\n    {\n        return [\n            'name' => fake()->name(),\n            'email' => fake()->unique()->safeEmail(),\n            'password' => bcrypt('password'),\n        ];\n    }\n}\n\n// Usage\nUser::factory()->create();\nUser::factory()->count(10)->create();\nUser::factory()->create(['name' => 'John']);\n\n// database/seeders/UserSeeder.php\nclass UserSeeder extends Seeder\n{\n    public function run()\n    {\n        User::factory()->count(50)->create();\n\n        User::create([\n            'name' => 'Admin',\n            'email' => 'admin@example.com',\n            'password' => bcrypt('password')\n        ]);\n    }\n}\n\n// Run seeder\nphp artisan db:seed --class=UserSeeder",
      },
      {
        id: 'environment-configuration',
        title: 'Environment Configuration',
        description: 'Manage app settings:',
        language: 'php',
        code: "# .env file\nAPP_NAME=Laravel\nAPP_ENV=local\nAPP_KEY=base64:xxxxx\nAPP_DEBUG=true\nAPP_URL=http://localhost\n\nDB_CONNECTION=mysql\nDB_HOST=127.0.0.1\nDB_PORT=3306\nDB_DATABASE=mydb\nDB_USERNAME=root\nDB_PASSWORD=\n\n// Access env variables\n$appName = env('APP_NAME');\n\n// Better: use config (cached)\n$appName = config('app.name');\n\n// config/app.php\nreturn [\n    'name' => env('APP_NAME', 'Laravel'),\n];",
      },
      {
        id: 'common-helper-functions',
        title: 'Common Helper Functions',
        description: 'Frequently used Laravel helpers:',
        language: 'php',
        code: "// Redirect helper\nredirect('/home');\nredirect()->route('home');\nredirect()->back();\n\n// Route helper (generate URL)\nroute('users.show', ['id' => 1]);\n\n// URL helper\nurl('/users');\nasset('css/app.css');  // For public assets\n\n// Auth helper\nauth()->user();\nauth()->check();\nauth()->id();\n\n// Config helper\nconfig('app.name');\n\n// Session helper\nsession('key');\nsession(['key' => 'value']);\n\n// Old input (after validation fails)\nold('name');\n\n// CSRF token\ncsrf_token();\ncsrf_field();  // In blade forms\n\n// Collections\ncollect([1, 2, 3])->map(function ($item) {\n    return $item * 2;\n});\n\n// Dump and die (debugging)\ndd($variable);\ndump($variable);\n\n// Now (current timestamp)\nnow();\nnow()->addDays(7);\n\n// Str helper\nStr::slug('Hello World');  // \"hello-world\"\nStr::limit('Long text here', 10);\nStr::random(10);",
      },
    ],
  },
  react: {
    lang: 'react',
    label: 'React',
    title: 'React.js',
    icon: '/react_dark.svg',
    color: '#61DAFB',
    sections: [
      {
        id: 'setup',
        title: 'Setup',
        description: 'Create a new React project:',
        language: 'bash',
        code: '# Using Vite (recommended, faster)\nnpm create vite@latest my-app -- --template react\ncd my-app\nnpm install\nnpm run dev\n\n# Using Create React App\nnpx create-react-app my-app\ncd my-app\nnpm start',
      },
      {
        id: 'basic-component',
        title: 'Basic Component',
        description: 'Create your first component:',
        language: 'jsx',
        code: "// Function component (modern way)\nfunction Welcome() {\n  return <h1>Hello, World!</h1>\n}\n\n// Arrow function component\nconst Welcome = () => {\n  return <h1>Hello, World!</h1>\n}\n\n// Export component\nexport default Welcome\n\n// Import and use\nimport Welcome from './Welcome'\n\nfunction App() {\n  return (\n    <div>\n      <Welcome />\n    </div>\n  )\n}",
      },
      {
        id: 'jsx-syntax',
        title: 'JSX Syntax',
        description: 'Write HTML-like code in JavaScript:',
        language: 'jsx',
        code: 'function App() {\n  const name = \'John\'\n  const isLoggedIn = true\n\n  return (\n    <div>\n      {/* This is a comment */}\n\n      {/* Display variable */}\n      <h1>Hello, {name}!</h1>\n\n      {/* Expressions */}\n      <p>{2 + 2}</p>\n      <p>{isLoggedIn ? \'Welcome back\' : \'Please log in\'}</p>\n\n      {/* Attributes use camelCase */}\n      <div className="container" onClick={handleClick}>\n        Content\n      </div>\n\n      {/* Self-closing tags */}\n      <img src="image.jpg" alt="Description" />\n      <br />\n\n      {/* Fragment (no extra DOM element) */}\n      <>\n        <p>First</p>\n        <p>Second</p>\n      </>\n\n      {/* Or with React.Fragment */}\n      <React.Fragment>\n        <p>First</p>\n        <p>Second</p>\n      </React.Fragment>\n    </div>\n  )\n}',
      },
      {
        id: 'props',
        title: 'Props',
        description: 'Pass data to components:',
        language: 'jsx',
        code: '// Child component\nfunction Greeting({ name, age }) {\n  return (\n    <div>\n      <p>Hello, {name}!</p>\n      <p>Age: {age}</p>\n    </div>\n  )\n}\n\n// Alternative with props object\nfunction Greeting(props) {\n  return <p>Hello, {props.name}!</p>\n}\n\n// Parent component\nfunction App() {\n  return <Greeting name="John" age={30} />\n}\n\n// Default props\nfunction Greeting({ name = \'Guest\' }) {\n  return <p>Hello, {name}!</p>\n}\n\n// Children prop\nfunction Card({ children }) {\n  return <div className="card">{children}</div>\n}\n\n// Usage\n;<Card>\n  <p>This is card content</p>\n</Card>\n\n// Destructuring props with rest\nfunction Button({ label, ...rest }) {\n  return <button {...rest}>{label}</button>\n}',
      },
      {
        id: 'state-with-usestate',
        title: 'State with useState',
        description: 'Manage component data that changes:',
        language: 'jsx',
        code: "import { useState } from 'react'\n\nfunction Counter() {\n  // Declare state variable\n  const [count, setCount] = useState(0)\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  )\n}\n\n// Multiple state variables\nfunction Form() {\n  const [name, setName] = useState('')\n  const [email, setEmail] = useState('')\n\n  return (\n    <div>\n      <input value={name} onChange={(e) => setName(e.target.value)} />\n      <input value={email} onChange={(e) => setEmail(e.target.value)} />\n    </div>\n  )\n}\n\n// State with objects\nfunction Profile() {\n  const [user, setUser] = useState({ name: '', age: 0 })\n\n  function updateName(newName) {\n    setUser({ ...user, name: newName }) // Spread to keep other properties\n  }\n\n  return <input onChange={(e) => updateName(e.target.value)} />\n}\n\n// State with arrays\nfunction TodoList() {\n  const [todos, setTodos] = useState([])\n\n  function addTodo(text) {\n    setTodos([...todos, text])\n  }\n\n  function removeTodo(index) {\n    setTodos(todos.filter((_, i) => i !== index))\n  }\n\n  return (\n    <ul>\n      {todos.map((todo, index) => (\n        <li key={index}>{todo}</li>\n      ))}\n    </ul>\n  )\n}\n\n// Functional updates (when new state depends on old state)\nfunction Counter() {\n  const [count, setCount] = useState(0)\n\n  function increment() {\n    setCount((prevCount) => prevCount + 1)\n  }\n\n  return <button onClick={increment}>Add</button>\n}",
      },
      {
        id: 'event-handling',
        title: 'Event Handling',
        description: 'Respond to user interactions:',
        language: 'jsx',
        code: "function Button() {\n  // Handler function\n  function handleClick() {\n    console.log('Clicked!')\n  }\n\n  // Handler with parameter\n  function handleClickWithParam(name) {\n    console.log('Hello, ' + name)\n  }\n\n  // Handler with event object\n  function handleChange(event) {\n    console.log(event.target.value)\n  }\n\n  return (\n    <div>\n      <button onClick={handleClick}>Click Me</button>\n      <button onClick={() => handleClickWithParam('John')}>Greet</button>\n      <input onChange={handleChange} />\n\n      {/* Common events */}\n      <button onClick={handleClick}>Click</button>\n      <input onFocus={handleFocus} onBlur={handleBlur} />\n      <form onSubmit={handleSubmit}>Submit</form>\n      <input onKeyDown={handleKeyDown} />\n      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>\n        Hover me\n      </div>\n    </div>\n  )\n}\n\n// Prevent default behavior\nfunction Form() {\n  function handleSubmit(event) {\n    event.preventDefault()\n    console.log('Form submitted')\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <button type=\"submit\">Submit</button>\n    </form>\n  )\n}",
      },
      {
        id: 'conditional-rendering',
        title: 'Conditional Rendering',
        description: 'Show content based on conditions:',
        language: 'jsx',
        code: 'function Greeting({ isLoggedIn }) {\n  // If-else with early return\n  if (isLoggedIn) {\n    return <h1>Welcome back!</h1>\n  }\n  return <h1>Please log in</h1>\n}\n\n// Ternary operator\nfunction Status({ isOnline }) {\n  return <p>{isOnline ? \'Online\' : \'Offline\'}</p>\n}\n\n// Logical AND (&&)\nfunction Notification({ hasMessage }) {\n  return <div>{hasMessage && <p>You have a new message!</p>}</div>\n}\n\n// Multiple conditions\nfunction StatusBadge({ status }) {\n  return (\n    <div>\n      {status === \'active\' && <span className="green">Active</span>}\n      {status === \'pending\' && <span className="yellow">Pending</span>}\n      {status === \'inactive\' && <span className="red">Inactive</span>}\n    </div>\n  )\n}\n\n// Switch-like pattern with object\nfunction StatusBadge({ status }) {\n  const badges = {\n    active: <span className="green">Active</span>,\n    pending: <span className="yellow">Pending</span>,\n    inactive: <span className="red">Inactive</span>,\n  }\n\n  return badges[status] || <span>Unknown</span>\n}',
      },
      {
        id: 'lists-keys',
        title: 'Lists & Keys',
        description: 'Render arrays of data:',
        language: 'jsx',
        code: "function ItemList() {\n  const items = ['Apple', 'Banana', 'Orange']\n\n  return (\n    <ul>\n      {items.map((item, index) => (\n        <li key={index}>{item}</li>\n      ))}\n    </ul>\n  )\n}\n\n// With objects (use unique ID as key, not index)\nfunction UserList() {\n  const users = [\n    { id: 1, name: 'John' },\n    { id: 2, name: 'Jane' },\n  ]\n\n  return (\n    <ul>\n      {users.map((user) => (\n        <li key={user.id}>{user.name}</li>\n      ))}\n    </ul>\n  )\n}\n\n// Rendering components in a list\nfunction TodoList({ todos }) {\n  return (\n    <ul>\n      {todos.map((todo) => (\n        <TodoItem key={todo.id} todo={todo} />\n      ))}\n    </ul>\n  )\n}\n\nfunction TodoItem({ todo }) {\n  return <li>{todo.text}</li>\n}\n\n// Filtering before rendering\nfunction ActiveUsers({ users }) {\n  const activeUsers = users.filter((user) => user.active)\n\n  return (\n    <ul>\n      {activeUsers.map((user) => (\n        <li key={user.id}>{user.name}</li>\n      ))}\n    </ul>\n  )\n}",
      },
      {
        id: 'forms-controlled-inputs',
        title: 'Forms & Controlled Inputs',
        description: 'Handle form input:',
        language: 'jsx',
        code: 'function LoginForm() {\n  const [email, setEmail] = useState(\'\')\n  const [password, setPassword] = useState(\'\')\n\n  function handleSubmit(event) {\n    event.preventDefault()\n    console.log(email, password)\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        type="email"\n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n        placeholder="Email"\n      />\n      <input\n        type="password"\n        value={password}\n        onChange={(e) => setPassword(e.target.value)}\n        placeholder="Password"\n      />\n      <button type="submit">Login</button>\n    </form>\n  )\n}\n\n// Textarea\nfunction MessageForm() {\n  const [message, setMessage] = useState(\'\')\n\n  return <textarea value={message} onChange={(e) => setMessage(e.target.value)} />\n}\n\n// Select dropdown\nfunction CountrySelect() {\n  const [country, setCountry] = useState(\'\')\n\n  return (\n    <select value={country} onChange={(e) => setCountry(e.target.value)}>\n      <option value="">Choose a country</option>\n      <option value="us">United States</option>\n      <option value="uk">United Kingdom</option>\n    </select>\n  )\n}\n\n// Checkbox\nfunction Newsletter() {\n  const [subscribed, setSubscribed] = useState(false)\n\n  return (\n    <input type="checkbox" checked={subscribed} onChange={(e) => setSubscribed(e.target.checked)} />\n  )\n}\n\n// Radio buttons\nfunction Gender() {\n  const [gender, setGender] = useState(\'\')\n\n  return (\n    <div>\n      <input\n        type="radio"\n        value="male"\n        checked={gender === \'male\'}\n        onChange={(e) => setGender(e.target.value)}\n      />\n      <input\n        type="radio"\n        value="female"\n        checked={gender === \'female\'}\n        onChange={(e) => setGender(e.target.value)}\n      />\n    </div>\n  )\n}\n\n// Managing form with object state\nfunction SignupForm() {\n  const [formData, setFormData] = useState({\n    name: \'\',\n    email: \'\',\n    password: \'\',\n  })\n\n  function handleChange(event) {\n    const { name, value } = event.target\n    setFormData({ ...formData, [name]: value })\n  }\n\n  function handleSubmit(event) {\n    event.preventDefault()\n    console.log(formData)\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input name="name" value={formData.name} onChange={handleChange} />\n      <input name="email" value={formData.email} onChange={handleChange} />\n      <input name="password" type="password" value={formData.password} onChange={handleChange} />\n      <button type="submit">Sign Up</button>\n    </form>\n  )\n}',
      },
      {
        id: 'useeffect-hook',
        title: 'useEffect Hook',
        description: 'Handle side effects (API calls, subscriptions, etc):',
        language: 'jsx',
        code: "import { useState, useEffect } from 'react'\n\n// Run on every render\nfunction Component() {\n  useEffect(() => {\n    console.log('Component rendered')\n  })\n}\n\n// Run only once (on mount)\nfunction Component() {\n  useEffect(() => {\n    console.log('Component mounted')\n  }, []) // Empty dependency array\n}\n\n// Run when specific value changes\nfunction Component({ userId }) {\n  useEffect(() => {\n    console.log('userId changed')\n  }, [userId]) // Runs when userId changes\n}\n\n// Cleanup function (runs before next effect or unmount)\nfunction Timer() {\n  useEffect(() => {\n    const timer = setInterval(() => {\n      console.log('Tick')\n    }, 1000)\n\n    return () => {\n      clearInterval(timer) // Cleanup\n    }\n  }, [])\n}\n\n// Fetching data\nfunction UserProfile({ userId }) {\n  const [user, setUser] = useState(null)\n  const [loading, setLoading] = useState(true)\n\n  useEffect(() => {\n    async function fetchUser() {\n      const response = await fetch(`/api/users/${userId}`)\n      const data = await response.json()\n      setUser(data)\n      setLoading(false)\n    }\n\n    fetchUser()\n  }, [userId])\n\n  if (loading) return <p>Loading...</p>\n  return <p>{user.name}</p>\n}\n\n// Multiple effects\nfunction Component() {\n  useEffect(() => {\n    console.log('Effect 1')\n  }, [])\n\n  useEffect(() => {\n    console.log('Effect 2')\n  }, [])\n}",
      },
      {
        id: 'useref-hook',
        title: 'useRef Hook',
        description: 'Access DOM elements directly:',
        language: 'jsx',
        code: "import { useRef, useEffect } from 'react'\n\nfunction TextInput() {\n  const inputRef = useRef(null)\n\n  function focusInput() {\n    inputRef.current.focus()\n  }\n\n  return (\n    <div>\n      <input ref={inputRef} />\n      <button onClick={focusInput}>Focus Input</button>\n    </div>\n  )\n}\n\n// Auto focus on mount\nfunction AutoFocusInput() {\n  const inputRef = useRef(null)\n\n  useEffect(() => {\n    inputRef.current.focus()\n  }, [])\n\n  return <input ref={inputRef} />\n}\n\n// Store mutable value (doesn't trigger re-render)\nfunction Timer() {\n  const countRef = useRef(0)\n\n  function increment() {\n    countRef.current += 1\n    console.log(countRef.current)\n  }\n\n  return <button onClick={increment}>Increment</button>\n}",
      },
      {
        id: 'usecontext-hook',
        title: 'useContext Hook',
        description: 'Share data across components without prop drilling:',
        language: 'jsx',
        code: "import { createContext, useContext, useState } from 'react'\n\n// Create context\nconst ThemeContext = createContext()\n\n// Provider component\nfunction App() {\n  const [theme, setTheme] = useState('light')\n\n  return (\n    <ThemeContext.Provider value={{ theme, setTheme }}>\n      <Header />\n      <Content />\n    </ThemeContext.Provider>\n  )\n}\n\n// Consumer component\nfunction Header() {\n  const { theme, setTheme } = useContext(ThemeContext)\n\n  return (\n    <div className={theme}>\n      <button onClick={() => setTheme('dark')}>Dark Mode</button>\n    </div>\n  )\n}\n\n// Another consumer (no prop drilling needed)\nfunction Content() {\n  const { theme } = useContext(ThemeContext)\n\n  return <p>Current theme: {theme}</p>\n}",
      },
      {
        id: 'usememo-usecallback',
        title: 'useMemo & useCallback',
        description: 'Optimize performance:',
        language: 'jsx',
        code: "import { useMemo, useCallback, useState } from 'react'\n\n// useMemo - memoize expensive calculations\nfunction ExpensiveComponent({ items }) {\n  const total = useMemo(() => {\n    console.log('Calculating total...')\n    return items.reduce((sum, item) => sum + item.price, 0)\n  }, [items]) // Only recalculate when items changes\n\n  return <p>Total: {total}</p>\n}\n\n// useCallback - memoize functions\nfunction Parent() {\n  const [count, setCount] = useState(0)\n\n  const handleClick = useCallback(() => {\n    console.log('Clicked')\n  }, []) // Function reference stays the same\n\n  return <Child onClick={handleClick} />\n}",
      },
      {
        id: 'custom-hooks',
        title: 'Custom Hooks',
        description: 'Create reusable logic:',
        language: 'jsx',
        code: '// Custom hook for fetching data\nfunction useFetch(url) {\n  const [data, setData] = useState(null)\n  const [loading, setLoading] = useState(true)\n  const [error, setError] = useState(null)\n\n  useEffect(() => {\n    async function fetchData() {\n      try {\n        const response = await fetch(url)\n        const result = await response.json()\n        setData(result)\n      } catch (err) {\n        setError(err.message)\n      } finally {\n        setLoading(false)\n      }\n    }\n\n    fetchData()\n  }, [url])\n\n  return { data, loading, error }\n}\n\n// Usage\nfunction UserProfile({ userId }) {\n  const { data, loading, error } = useFetch(`/api/users/${userId}`)\n\n  if (loading) return <p>Loading...</p>\n  if (error) return <p>Error: {error}</p>\n  return <p>{data.name}</p>\n}\n\n// Custom hook for local storage\nfunction useLocalStorage(key, initialValue) {\n  const [value, setValue] = useState(() => {\n    const stored = localStorage.getItem(key)\n    return stored ? JSON.parse(stored) : initialValue\n  })\n\n  useEffect(() => {\n    localStorage.setItem(key, JSON.stringify(value))\n  }, [key, value])\n\n  return [value, setValue]\n}\n\n// Custom hook for toggling boolean\nfunction useToggle(initialValue = false) {\n  const [value, setValue] = useState(initialValue)\n\n  function toggle() {\n    setValue((prev) => !prev)\n  }\n\n  return [value, toggle]\n}\n\n// Usage\nfunction Modal() {\n  const [isOpen, toggleOpen] = useToggle(false)\n\n  return (\n    <div>\n      <button onClick={toggleOpen}>Toggle</button>\n      {isOpen && <p>Modal content</p>}\n    </div>\n  )\n}',
      },
      {
        id: 'component-lifecycle-with-hooks',
        title: 'Component Lifecycle (with hooks)',
        description: 'Understand when code runs:',
        language: 'jsx',
        code: "function Component() {\n  // Runs on every render (like componentDidMount + componentDidUpdate)\n  useEffect(() => {\n    console.log('Rendered')\n  })\n\n  // Runs once on mount (like componentDidMount)\n  useEffect(() => {\n    console.log('Mounted')\n\n    // Cleanup (like componentWillUnmount)\n    return () => {\n      console.log('Unmounting')\n    }\n  }, [])\n\n  // Runs when dependency changes (like componentDidUpdate)\n  useEffect(() => {\n    console.log('Value changed')\n  }, [someValue])\n}",
      },
      {
        id: 'styling-components',
        title: 'Styling Components',
        description: 'Different ways to style React components:',
        language: 'jsx',
        code: "// Inline styles\nfunction Component() {\n  return <div style={{ color: 'blue', fontSize: '16px' }}>Content</div>\n}\n\n// With variable\nfunction Component() {\n  const styles = {\n    color: 'blue',\n    fontSize: '16px',\n    padding: '10px',\n  }\n\n  return <div style={styles}>Content</div>\n}\n\n// CSS classes\nfunction Component() {\n  return <div className=\"my-class\">Content</div>\n}\n\n// Conditional classes\nfunction Component({ isActive }) {\n  return <div className={isActive ? 'active' : 'inactive'}>Content</div>\n}\n\n// Multiple conditional classes\nfunction Component({ isActive, hasError }) {\n  return (\n    <div className={`base-class ${isActive ? 'active' : ''} ${hasError ? 'error' : ''}`}>\n      Content\n    </div>\n  )\n}\n\n// CSS Modules\n// styles.module.css\n// .container { color: blue; }\n\nimport styles from './styles.module.css'\n\nfunction Component() {\n  return <div className={styles.container}>Content</div>\n}",
      },
      {
        id: 'component-composition',
        title: 'Component Composition',
        description: 'Combine components effectively:',
        language: 'jsx',
        code: '// Passing components as children\nfunction Layout({ children }) {\n  return (\n    <div>\n      <Header />\n      <main>{children}</main>\n      <Footer />\n    </div>\n  )\n}\n\nfunction App() {\n  return (\n    <Layout>\n      <h1>Page Content</h1>\n    </Layout>\n  )\n}\n\n// Passing components as props\nfunction Card({ header, body }) {\n  return (\n    <div className="card">\n      <div className="header">{header}</div>\n      <div className="body">{body}</div>\n    </div>\n  )\n}\n\nfunction App() {\n  return <Card header={<h2>Title</h2>} body={<p>Content</p>} />\n}\n\n// Render props pattern\nfunction DataProvider({ render }) {\n  const [data, setData] = useState(\'some data\')\n  return render(data)\n}\n\nfunction App() {\n  return <DataProvider render={(data) => <p>{data}</p>} />\n}',
      },
      {
        id: 'error-boundaries',
        title: 'Error Boundaries',
        description: 'Catch errors in components:',
        language: 'jsx',
        code: 'class ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = { hasError: false }\n  }\n\n  static getDerivedStateFromError(error) {\n    return { hasError: true }\n  }\n\n  componentDidCatch(error, errorInfo) {\n    console.log(error, errorInfo)\n  }\n\n  render() {\n    if (this.state.hasError) {\n      return <h1>Something went wrong.</h1>\n    }\n    return this.props.children\n  }\n}\n\n// Usage\nfunction App() {\n  return (\n    <ErrorBoundary>\n      <MyComponent />\n    </ErrorBoundary>\n  )\n}',
      },
      {
        id: 'react-router',
        title: 'React Router',
        description: 'Handle navigation in single-page apps:',
        language: 'jsx',
        code: 'npm install react-router-dom\n\nimport { BrowserRouter, Routes, Route, Link, useNavigate, useParams } from \'react-router-dom\'\n\n// Setup routes\nfunction App() {\n  return (\n    <BrowserRouter>\n      <nav>\n        <Link to="/">Home</Link>\n        <Link to="/about">About</Link>\n      </nav>\n\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/about" element={<About />} />\n        <Route path="/user/:id" element={<UserProfile />} />\n        <Route path="*" element={<NotFound />} />\n      </Routes>\n    </BrowserRouter>\n  )\n}\n\n// Access URL parameters\nfunction UserProfile() {\n  const { id } = useParams()\n  return <p>User ID: {id}</p>\n}\n\n// Programmatic navigation\nfunction LoginButton() {\n  const navigate = useNavigate()\n\n  function handleLogin() {\n    // After login logic\n    navigate(\'/dashboard\')\n  }\n\n  return <button onClick={handleLogin}>Login</button>\n}\n\n// Nested routes\nfunction App() {\n  return (\n    <Routes>\n      <Route path="/dashboard" element={<Dashboard />}>\n        <Route path="settings" element={<Settings />} />\n        <Route path="profile" element={<Profile />} />\n      </Route>\n    </Routes>\n  )\n}',
      },
      {
        id: 'fetching-data-api-calls',
        title: 'Fetching Data (API Calls)',
        description: 'Get data from APIs:',
        language: 'jsx',
        code: "import { useState, useEffect } from 'react'\n\nfunction UserList() {\n  const [users, setUsers] = useState([])\n  const [loading, setLoading] = useState(true)\n  const [error, setError] = useState(null)\n\n  useEffect(() => {\n    fetch('https://api.example.com/users')\n      .then((response) => response.json())\n      .then((data) => {\n        setUsers(data)\n        setLoading(false)\n      })\n      .catch((err) => {\n        setError(err.message)\n        setLoading(false)\n      })\n  }, [])\n\n  if (loading) return <p>Loading...</p>\n  if (error) return <p>Error: {error}</p>\n\n  return (\n    <ul>\n      {users.map((user) => (\n        <li key={user.id}>{user.name}</li>\n      ))}\n    </ul>\n  )\n}\n\n// Async/await version\nfunction UserList() {\n  const [users, setUsers] = useState([])\n  const [loading, setLoading] = useState(true)\n\n  useEffect(() => {\n    async function fetchUsers() {\n      try {\n        const response = await fetch('https://api.example.com/users')\n        const data = await response.json()\n        setUsers(data)\n      } catch (error) {\n        console.error(error)\n      } finally {\n        setLoading(false)\n      }\n    }\n\n    fetchUsers()\n  }, [])\n\n  if (loading) return <p>Loading...</p>\n  return (\n    <ul>\n      {users.map((u) => (\n        <li key={u.id}>{u.name}</li>\n      ))}\n    </ul>\n  )\n}\n\n// POST request\nasync function createUser(userData) {\n  const response = await fetch('https://api.example.com/users', {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify(userData),\n  })\n  return response.json()\n}",
      },
      {
        id: 'common-patterns',
        title: 'Common Patterns',
        description: 'Frequently used React patterns:',
        language: 'jsx',
        code: "// Toggle boolean state\nfunction ToggleButton() {\n  const [isOn, setIsOn] = useState(false)\n\n  return <button onClick={() => setIsOn(!isOn)}>{isOn ? 'ON' : 'OFF'}</button>\n}\n\n// Loading, error, success states\nfunction DataComponent() {\n  const [state, setState] = useState({\n    loading: true,\n    error: null,\n    data: null,\n  })\n\n  // ... fetch logic\n\n  if (state.loading) return <Spinner />\n  if (state.error) return <ErrorMessage error={state.error} />\n  return <DataDisplay data={state.data} />\n}\n\n// Debounced search\nfunction SearchBox() {\n  const [query, setQuery] = useState('')\n  const [debouncedQuery, setDebouncedQuery] = useState('')\n\n  useEffect(() => {\n    const timer = setTimeout(() => {\n      setDebouncedQuery(query)\n    }, 500)\n\n    return () => clearTimeout(timer)\n  }, [query])\n\n  return <input value={query} onChange={(e) => setQuery(e.target.value)} />\n}\n\n// Modal pattern\nfunction App() {\n  const [showModal, setShowModal] = useState(false)\n\n  return (\n    <div>\n      <button onClick={() => setShowModal(true)}>Open Modal</button>\n      {showModal && (\n        <Modal onClose={() => setShowModal(false)}>\n          <p>Modal content</p>\n        </Modal>\n      )}\n    </div>\n  )\n}\n\n// Controlled vs Uncontrolled input\n// Controlled (React manages state)\nfunction ControlledInput() {\n  const [value, setValue] = useState('')\n  return <input value={value} onChange={(e) => setValue(e.target.value)} />\n}\n\n// Uncontrolled (DOM manages state)\nfunction UncontrolledInput() {\n  const inputRef = useRef()\n\n  function handleSubmit() {\n    console.log(inputRef.current.value)\n  }\n\n  return <input ref={inputRef} />\n}",
      },
    ],
  },

  motion: {
    lang: 'motion',
    label: 'Motion',
    title: 'Framer Motion',
    icon: '/motion_dark.svg',
    color: '#FF00A2',
    sections: [
      {
        id: 'setup',
        title: 'Setup',
        description: 'Install Framer Motion:',
        language: 'jsx',
        code: "npm install motion\n\nimport { motion } from 'framer-motion'",
      },
      {
        id: 'basic-animation',
        title: 'Basic Animation',
        description: 'Animate elements with the motion component:',
        language: 'jsx',
        code: 'import { motion } from \'framer-motion\';\n\n// Basic fade in\nfunction App() {\n    return (\n        <motion.div\n            initial={{ opacity: 0 }}\n            animate={{ opacity: 1 }}\n        >\n            Hello World\n        </motion.div>\n    );\n}\n\n// Any HTML element can be a motion component\n<motion.h1>Title</motion.h1>\n<motion.p>Paragraph</motion.p>\n<motion.button>Button</motion.button>\n<motion.img src="image.jpg" />\n<motion.ul>List</motion.ul>',
      },
      {
        id: 'animate-prop',
        title: 'Animate Prop',
        description: 'Define the animation state:',
        language: 'jsx',
        code: "// Single property\n<motion.div animate={{ x: 100 }} />\n\n// Multiple properties\n<motion.div\n    animate={{\n        x: 100,\n        y: 50,\n        scale: 1.5,\n        rotate: 180,\n        opacity: 0.5\n    }}\n/>\n\n// Animate colors\n<motion.div\n    animate={{ backgroundColor: '#ff0000' }}\n/>\n\n// Animate multiple values in sequence (keyframes)\n<motion.div\n    animate={{\n        x: [0, 100, 0],  // Goes to 100, then back to 0\n        opacity: [0, 1, 1, 0]  // Fade in, stay, fade out\n    }}\n/>",
      },
      {
        id: 'initial-animate',
        title: 'Initial & Animate',
        description: 'Set starting and ending states:',
        language: 'jsx',
        code: '<motion.div\n    initial={{ opacity: 0, y: 50 }}\n    animate={{ opacity: 1, y: 0 }}\n/>\n\n// Disable initial animation (skip entrance)\n<motion.div\n    initial={false}\n    animate={{ opacity: 1 }}\n/>\n\n// No initial state defined (uses animate values immediately)\n<motion.div animate={{ opacity: 1 }} />',
      },
      {
        id: 'exit-animations',
        title: 'Exit Animations',
        description: "Animate elements when they're removed (requires AnimatePresence):",
        language: 'jsx',
        code: 'import { motion, AnimatePresence } from \'framer-motion\';\nimport { useState } from \'react\';\n\nfunction App() {\n    const [isVisible, setIsVisible] = useState(true);\n\n    return (\n        <div>\n            <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>\n\n            <AnimatePresence>\n                {isVisible && (\n                    <motion.div\n                        initial={{ opacity: 0 }}\n                        animate={{ opacity: 1 }}\n                        exit={{ opacity: 0 }}\n                    >\n                        Content\n                    </motion.div>\n                )}\n            </AnimatePresence>\n        </div>\n    );\n}\n\n// AnimatePresence with lists\nfunction List({ items }) {\n    return (\n        <AnimatePresence>\n            {items.map(item => (\n                <motion.li\n                    key={item.id}\n                    initial={{ opacity: 0, x: -50 }}\n                    animate={{ opacity: 1, x: 0 }}\n                    exit={{ opacity: 0, x: 50 }}\n                >\n                    {item.text}\n                </motion.li>\n            ))}\n        </AnimatePresence>\n    );\n}\n\n// Mode options for AnimatePresence\n<AnimatePresence mode="wait">\n    {/* Waits for exit to finish before next enters */}\n</AnimatePresence>\n\n<AnimatePresence mode="popLayout">\n    {/* Removes element from layout flow during exit */}\n</AnimatePresence>',
      },
      {
        id: 'transition-prop',
        title: 'Transition Prop',
        description: 'Control how animations behave:',
        language: 'jsx',
        code: "// Duration\n<motion.div\n    animate={{ x: 100 }}\n    transition={{ duration: 0.5 }}  // In seconds\n/>\n\n// Delay\n<motion.div\n    animate={{ opacity: 1 }}\n    transition={{ delay: 0.3 }}\n/>\n\n// Ease\n<motion.div\n    animate={{ x: 100 }}\n    transition={{ ease: 'easeInOut' }}\n/>\n// Options: 'linear', 'easeIn', 'easeOut', 'easeInOut', 'circIn', 'circOut', 'backIn', 'backOut'\n\n// Custom bezier curve\n<motion.div\n    animate={{ x: 100 }}\n    transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}\n/>\n\n// Spring animation (more natural, physics-based)\n<motion.div\n    animate={{ x: 100 }}\n    transition={{ type: 'spring', stiffness: 300, damping: 20 }}\n/>\n\n// Spring options\n<motion.div\n    animate={{ scale: 1 }}\n    transition={{\n        type: 'spring',\n        stiffness: 400,   // Higher = faster/snappier\n        damping: 10,      // Higher = less bouncy\n        mass: 1           // Higher = slower/heavier\n    }}\n/>\n\n// Tween (default, time-based)\n<motion.div\n    animate={{ x: 100 }}\n    transition={{ type: 'tween', duration: 0.5 }}\n/>\n\n// Different transitions for different properties\n<motion.div\n    animate={{ x: 100, opacity: 1 }}\n    transition={{\n        x: { type: 'spring', stiffness: 300 },\n        opacity: { duration: 0.5 }\n    }}\n/>\n\n// Repeat animation\n<motion.div\n    animate={{ rotate: 360 }}\n    transition={{ duration: 2, repeat: Infinity }}\n/>\n\n// Repeat type\n<motion.div\n    animate={{ x: 100 }}\n    transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}\n/>\n// Options: 'loop' (default), 'reverse', 'mirror'\n\n// Repeat delay\n<motion.div\n    animate={{ opacity: [1, 0] }}\n    transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}\n/>",
      },
      {
        id: 'hover-tap',
        title: 'Hover & Tap',
        description: 'Interactive animations:',
        language: 'jsx',
        code: "// Hover animation\n<motion.button\n    whileHover={{ scale: 1.1 }}\n>\n    Hover Me\n</motion.button>\n\n// Tap animation (on click/touch)\n<motion.button\n    whileTap={{ scale: 0.9 }}\n>\n    Click Me\n</motion.button>\n\n// Combine hover and tap\n<motion.button\n    whileHover={{ scale: 1.1 }}\n    whileTap={{ scale: 0.9 }}\n>\n    Interactive Button\n</motion.button>\n\n// Multiple properties on hover\n<motion.div\n    whileHover={{\n        scale: 1.05,\n        backgroundColor: '#f0f0f0',\n        boxShadow: '0px 10px 20px rgba(0,0,0,0.2)'\n    }}\n/>\n\n// Custom transition for hover\n<motion.button\n    whileHover={{ scale: 1.1 }}\n    transition={{ type: 'spring', stiffness: 400 }}\n/>",
      },
      {
        id: 'drag',
        title: 'Drag',
        description: 'Make elements draggable:',
        language: 'jsx',
        code: "// Basic drag\n<motion.div drag>\n    Drag me\n</motion.div>\n\n// Restrict drag direction\n<motion.div drag=\"x\">Horizontal only</motion.div>\n<motion.div drag=\"y\">Vertical only</motion.div>\n\n// Drag constraints (limit movement area)\n<motion.div\n    drag\n    dragConstraints={{ left: 0, right: 300, top: 0, bottom: 300 }}\n/>\n\n// Constrain to parent element\n<motion.div\n    ref={constraintsRef}\n    style={{ width: 400, height: 400 }}\n>\n    <motion.div\n        drag\n        dragConstraints={constraintsRef}\n    />\n</motion.div>\n\n// Drag elastic (how much it can go beyond constraints)\n<motion.div\n    drag\n    dragConstraints={{ left: 0, right: 300 }}\n    dragElastic={0.2}  // 0 = no movement beyond, 1 = full elastic\n/>\n\n// Drag momentum (continues moving after release)\n<motion.div\n    drag\n    dragMomentum={false}  // Disable momentum\n/>\n\n// Drag events\n<motion.div\n    drag\n    onDragStart={() => console.log('Drag started')}\n    onDrag={(event, info) => console.log(info.point.x, info.point.y)}\n    onDragEnd={() => console.log('Drag ended')}\n/>\n\n// While dragging style\n<motion.div\n    drag\n    whileDrag={{ scale: 1.2, cursor: 'grabbing' }}\n/>",
      },
      {
        id: 'variants',
        title: 'Variants',
        description: 'Reusable animation states for organized code:',
        language: 'jsx',
        code: '// Define variants\nconst boxVariants = {\n  hidden: { opacity: 0, y: 50 },\n  visible: { opacity: 1, y: 0 },\n  hover: { scale: 1.1 },\n}\n\n// Use variants\n;<motion.div variants={boxVariants} initial="hidden" animate="visible" whileHover="hover" />\n\n// Variants with transition\nconst variants = {\n  hidden: { opacity: 0 },\n  visible: {\n    opacity: 1,\n    transition: { duration: 0.5 },\n  },\n}\n\n// Parent-child variant propagation (staggering)\nconst containerVariants = {\n  hidden: { opacity: 0 },\n  visible: {\n    opacity: 1,\n    transition: {\n      staggerChildren: 0.2, // Delay between each child\n    },\n  },\n}\n\nconst itemVariants = {\n  hidden: { opacity: 0, x: -20 },\n  visible: { opacity: 1, x: 0 },\n}\n\nfunction List({ items }) {\n  return (\n    <motion.ul variants={containerVariants} initial="hidden" animate="visible">\n      {items.map((item) => (\n        <motion.li key={item.id} variants={itemVariants}>\n          {item.text}\n        </motion.li>\n      ))}\n    </motion.ul>\n  )\n}\n\n// Stagger direction\nconst containerVariants = {\n  visible: {\n    transition: {\n      staggerChildren: 0.1,\n      staggerDirection: -1, // Reverse order (1 = forward, -1 = backward)\n    },\n  },\n}\n\n// Dynamic variants (using custom prop)\nconst variants = {\n  hidden: { opacity: 0 },\n  visible: (custom) => ({\n    opacity: 1,\n    transition: { delay: custom * 0.2 },\n  }),\n}\n\n;<motion.div custom={index} variants={variants} initial="hidden" animate="visible" />',
      },
      {
        id: 'layout-animations',
        title: 'Layout Animations',
        description: 'Automatically animate layout changes:',
        language: 'jsx',
        code: "// Basic layout animation\n<motion.div layout>\n    Content that changes size/position\n</motion.div>\n\n// Layout with unique ID (for shared element transitions)\n<motion.div layoutId=\"unique-id\">\n    Shared element\n</motion.div>\n\n// Example: Expanding card\nfunction Card({ isExpanded }) {\n    return (\n        <motion.div\n            layout\n            style={{ height: isExpanded ? 300 : 100 }}\n        >\n            Content\n        </motion.div>\n    );\n}\n\n// Shared layout animation (element moves between positions)\nfunction Tabs() {\n    const [selected, setSelected] = useState(0);\n    const tabs = ['Home', 'About', 'Contact'];\n\n    return (\n        <div style={{ display: 'flex' }}>\n            {tabs.map((tab, index) => (\n                <div key={tab} onClick={() => setSelected(index)}>\n                    {tab}\n                    {selected === index && (\n                        <motion.div\n                            layoutId=\"underline\"\n                            style={{ height: 2, background: 'blue' }}\n                        />\n                    )}\n                </div>\n            ))}\n        </div>\n    );\n}\n\n// Layout type\n<motion.div layout=\"position\" />  // Only animate position\n<motion.div layout=\"size\" />       // Only animate size",
      },
      {
        id: 'scroll-animations',
        title: 'Scroll Animations',
        description: 'Animate based on scroll position:',
        language: 'jsx',
        code: "import { motion, useScroll, useTransform } from 'framer-motion';\n\n// Whileinview (trigger animation when scrolled into view)\n<motion.div\n    initial={{ opacity: 0, y: 50 }}\n    whileInView={{ opacity: 1, y: 0 }}\n    viewport={{ once: true }}  // Only animate once\n>\n    Content\n</motion.div>\n\n// Viewport options\n<motion.div\n    whileInView={{ opacity: 1 }}\n    viewport={{\n        once: true,           // Animate only once\n        amount: 0.5,           // Trigger when 50% visible\n        margin: '0px 0px -100px 0px'  // Adjust trigger area\n    }}\n/>\n\n// useScroll hook (track scroll progress)\nfunction ScrollProgress() {\n    const { scrollYProgress } = useScroll();\n\n    return (\n        <motion.div\n            style={{\n                scaleX: scrollYProgress,\n                position: 'fixed',\n                top: 0,\n                left: 0,\n                right: 0,\n                height: 4,\n                background: 'blue',\n                transformOrigin: '0%'\n            }}\n        />\n    );\n}\n\n// Transform values based on scroll\nfunction ParallaxSection() {\n    const { scrollYProgress } = useScroll();\n    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);\n\n    return <motion.div style={{ y }}>Content</motion.div>;\n}\n\n// Scroll within a specific element\nfunction Component() {\n    const ref = useRef(null);\n    const { scrollYProgress } = useScroll({\n        target: ref,\n        offset: ['start end', 'end start']\n    });\n\n    return (\n        <div ref={ref}>\n            <motion.div style={{ opacity: scrollYProgress }} />\n        </div>\n    );\n}",
      },
      {
        id: 'animation-controls',
        title: 'Animation Controls',
        description: 'Programmatically control animations:',
        language: 'jsx',
        code: "import { motion, useAnimation } from 'framer-motion'\n\nfunction Component() {\n  const controls = useAnimation()\n\n  async function handleClick() {\n    await controls.start({ x: 100 })\n    await controls.start({ y: 100 })\n  }\n\n  return (\n    <div>\n      <motion.div animate={controls} />\n      <button onClick={handleClick}>Animate</button>\n    </div>\n  )\n}\n\n// Start with variants\nconst controls = useAnimation()\ncontrols.start('visible') // Uses variant name\n\n// Sequence of animations\nasync function sequence() {\n  await controls.start({ opacity: 1 })\n  await controls.start({ x: 100 })\n  await controls.start({ scale: 1.2 })\n}\n\n// Stop animation\ncontrols.stop()",
      },
      {
        id: 'animatenumber-counting',
        title: 'AnimateNumber / Counting',
        description: 'Animate numeric values:',
        language: 'jsx',
        code: "import { motion, useMotionValue, useTransform, animate } from 'framer-motion'\nimport { useEffect } from 'react'\n\nfunction Counter({ value }) {\n  const count = useMotionValue(0)\n  const rounded = useTransform(count, (latest) => Math.round(latest))\n\n  useEffect(() => {\n    const controls = animate(count, value, { duration: 2 })\n    return controls.stop\n  }, [value])\n\n  return <motion.p>{rounded}</motion.p>\n}",
      },
      {
        id: 'usemotionvalue-usetransform',
        title: 'useMotionValue & useTransform',
        description: 'Advanced value tracking and transformation:',
        language: 'jsx',
        code: 'import { motion, useMotionValue, useTransform } from \'framer-motion\'\n\n// Track a value without triggering re-render\nfunction Component() {\n  const x = useMotionValue(0)\n\n  return <motion.div drag="x" style={{ x }} onDrag={() => console.log(x.get())} />\n}\n\n// Transform one value based on another\nfunction Component() {\n  const x = useMotionValue(0)\n  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0])\n\n  return <motion.div drag="x" style={{ x, opacity }} />\n}\n\n// Multiple input/output ranges\nconst scale = useTransform(x, [-200, 0, 200], [0.5, 1, 0.5])\nconst rotate = useTransform(x, [-200, 200], [-45, 45])',
      },
      {
        id: 'common-ui-patterns',
        title: 'Common UI Patterns',
        description: 'Ready-to-use animation patterns:',
        language: 'jsx',
        code: "// Fade in on mount\n<motion.div\n    initial={{ opacity: 0 }}\n    animate={{ opacity: 1 }}\n    transition={{ duration: 0.5 }}\n>\n    Content\n</motion.div>\n\n// Slide in from side\n<motion.div\n    initial={{ x: -100, opacity: 0 }}\n    animate={{ x: 0, opacity: 1 }}\n    transition={{ duration: 0.5 }}\n>\n    Content\n</motion.div>\n\n// Scale in (pop effect)\n<motion.div\n    initial={{ scale: 0 }}\n    animate={{ scale: 1 }}\n    transition={{ type: 'spring', stiffness: 260, damping: 20 }}\n>\n    Content\n</motion.div>\n\n// Modal/Dialog animation\nfunction Modal({ isOpen, onClose, children }) {\n    return (\n        <AnimatePresence>\n            {isOpen && (\n                <>\n                    <motion.div\n                        className=\"overlay\"\n                        initial={{ opacity: 0 }}\n                        animate={{ opacity: 1 }}\n                        exit={{ opacity: 0 }}\n                        onClick={onClose}\n                    />\n                    <motion.div\n                        className=\"modal\"\n                        initial={{ opacity: 0, scale: 0.8, y: 20 }}\n                        animate={{ opacity: 1, scale: 1, y: 0 }}\n                        exit={{ opacity: 0, scale: 0.8, y: 20 }}\n                    >\n                        {children}\n                    </motion.div>\n                </>\n            )}\n        </AnimatePresence>\n    );\n}\n\n// Accordion/Collapse\nfunction Accordion({ isOpen, children }) {\n    return (\n        <motion.div\n            animate={{ height: isOpen ? 'auto' : 0 }}\n            style={{ overflow: 'hidden' }}\n        >\n            {children}\n        </motion.div>\n    );\n}\n\n// Card hover effect\n<motion.div\n    className=\"card\"\n    whileHover={{\n        scale: 1.03,\n        boxShadow: '0px 20px 40px rgba(0,0,0,0.1)'\n    }}\n    transition={{ type: 'spring', stiffness: 300 }}\n>\n    Card content\n</motion.div>\n\n// Button press effect\n<motion.button\n    whileHover={{ scale: 1.05 }}\n    whileTap={{ scale: 0.95 }}\n>\n    Click Me\n</motion.button>\n\n// Loading spinner\n<motion.div\n    animate={{ rotate: 360 }}\n    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}\n    style={{ width: 30, height: 30, border: '3px solid #ccc', borderTopColor: '#333', borderRadius: '50%' }}\n/>\n\n// Staggered list animation\nconst container = {\n    hidden: { opacity: 0 },\n    show: {\n        opacity: 1,\n        transition: { staggerChildren: 0.1 }\n    }\n};\n\nconst item = {\n    hidden: { opacity: 0, y: 20 },\n    show: { opacity: 1, y: 0 }\n};\n\nfunction List({ items }) {\n    return (\n        <motion.ul variants={container} initial=\"hidden\" animate=\"show\">\n            {items.map(i => (\n                <motion.li key={i.id} variants={item}>{i.text}</motion.li>\n            ))}\n        </motion.ul>\n    );\n}\n\n// Page transition\n<motion.div\n    initial={{ opacity: 0, x: 100 }}\n    animate={{ opacity: 1, x: 0 }}\n    exit={{ opacity: 0, x: -100 }}\n    transition={{ duration: 0.3 }}\n>\n    Page content\n</motion.div>\n\n// Notification/Toast\n<motion.div\n    initial={{ opacity: 0, y: -50, scale: 0.3 }}\n    animate={{ opacity: 1, y: 0, scale: 1 }}\n    exit={{ opacity: 0, scale: 0.5 }}\n    className=\"toast\"\n>\n    Notification message\n</motion.div>",
      },
      {
        id: 'motion-components-for-svg',
        title: 'Motion Components for SVG',
        description: 'Animate SVG elements:',
        language: 'jsx',
        code: '// Path drawing animation\n<motion.svg width="100" height="100">\n    <motion.path\n        d="M10 10 L90 90"\n        stroke="black"\n        strokeWidth="2"\n        initial={{ pathLength: 0 }}\n        animate={{ pathLength: 1 }}\n        transition={{ duration: 2 }}\n    />\n</motion.svg>\n\n// Animate SVG circle\n<motion.circle\n    cx="50"\n    cy="50"\n    r="40"\n    initial={{ scale: 0 }}\n    animate={{ scale: 1 }}\n/>',
      },
      {
        id: 'performance-tips',
        title: 'Performance Tips',
        description: 'Optimize animations:',
        language: 'jsx',
        code: "// Use transform properties (x, y, scale, rotate) instead of top/left/width/height\n// Good (GPU accelerated)\n<motion.div animate={{ x: 100 }} />\n\n// Avoid (triggers layout recalculation)\n<motion.div animate={{ left: 100 }} />\n\n// Use layout prop sparingly (can be expensive)\n<motion.div layout />\n\n// Reduce motion for accessibility\nimport { useReducedMotion } from 'framer-motion';\n\nfunction Component() {\n    const shouldReduceMotion = useReducedMotion();\n\n    return (\n        <motion.div\n            animate={{ x: shouldReduceMotion ? 0 : 100 }}\n        />\n    );\n}",
      },
    ],
  },

  bootstrap: {
    lang: 'bootstrap',
    label: 'Bootstrap',
    title: 'Bootstrap',
    icon: '/bootstrap.svg',
    color: '#7952B3',
    sections: [
      {
        id: 'setup',
        title: 'Setup',
        description: 'Add Bootstrap to your project:',
        language: 'html',
        code: '<!-- CSS (in head) -->\n<link\n  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"\n  rel="stylesheet"\n/>\n\n<!-- JS (before closing body tag, needed for interactive components) -->\n<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>\n\n# Or via npm\nnpm install bootstrap',
      },
      {
        id: 'containers',
        title: 'Containers',
        description: 'Wrap content with responsive padding:',
        language: 'html',
        code: '<!-- Fixed-width container (responsive breakpoints) -->\n<div class="container">Content with max-width at each breakpoint</div>\n\n<!-- Full-width container (100% width always) -->\n<div class="container-fluid">Always full width</div>\n\n<!-- Responsive container (fluid until specific breakpoint) -->\n<div class="container-sm">Fluid until small</div>\n<div class="container-md">Fluid until medium</div>\n<div class="container-lg">Fluid until large</div>\n<div class="container-xl">Fluid until extra large</div>',
      },
      {
        id: 'grid-system',
        title: 'Grid System',
        description: '12-column responsive grid:',
        language: 'html',
        code: '<!-- Basic row and columns -->\n<div class="container">\n  <div class="row">\n    <div class="col">Column 1</div>\n    <div class="col">Column 2</div>\n    <div class="col">Column 3</div>\n  </div>\n</div>\n\n<!-- Specific column widths (out of 12) -->\n<div class="row">\n  <div class="col-4">Width 4/12</div>\n  <div class="col-8">Width 8/12</div>\n</div>\n\n<!-- Responsive columns (different width per breakpoint) -->\n<div class="row">\n  <div class="col-12 col-md-6 col-lg-4">Full width mobile, half tablet, third desktop</div>\n</div>\n\n<!-- Breakpoints: sm (576px), md (768px), lg (992px), xl (1200px), xxl (1400px) -->\n\n<!-- Auto-width columns -->\n<div class="row">\n  <div class="col-auto">Fits content</div>\n  <div class="col">Takes remaining space</div>\n</div>\n\n<!-- Column offset (push column right) -->\n<div class="row">\n  <div class="col-4 offset-4">Centered 4-wide column</div>\n</div>\n\n<!-- Nested grid -->\n<div class="row">\n  <div class="col-6">\n    <div class="row">\n      <div class="col-6">Nested 1</div>\n      <div class="col-6">Nested 2</div>\n    </div>\n  </div>\n</div>\n\n<!-- Gutters (spacing between columns) -->\n<div class="row g-3">Default gutter</div>\n<div class="row g-0">No gutter</div>\n<div class="row gx-3 gy-2">Different x/y gutters</div>\n\n<!-- Row columns (equal width columns automatically) -->\n<div class="row row-cols-3">\n  <div class="col">1</div>\n  <div class="col">2</div>\n  <div class="col">3</div>\n</div>',
      },
      {
        id: 'typography',
        title: 'Typography',
        description: 'Text styling utilities:',
        language: 'html',
        code: '<!-- Headings -->\n<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n\n<!-- Display headings (larger, more prominent) -->\n<h1 class="display-1">Display 1</h1>\n<h1 class="display-4">Display 4</h1>\n\n<!-- Text alignment -->\n<p class="text-start">Left aligned</p>\n<p class="text-center">Center aligned</p>\n<p class="text-end">Right aligned</p>\n\n<!-- Responsive text alignment -->\n<p class="text-center text-md-start">Center mobile, left desktop</p>\n\n<!-- Text colors -->\n<p class="text-primary">Primary color</p>\n<p class="text-secondary">Secondary color</p>\n<p class="text-success">Success (green)</p>\n<p class="text-danger">Danger (red)</p>\n<p class="text-warning">Warning (yellow)</p>\n<p class="text-info">Info (light blue)</p>\n<p class="text-light">Light color</p>\n<p class="text-dark">Dark color</p>\n<p class="text-muted">Muted/gray text</p>\n<p class="text-white bg-dark">White text</p>\n\n<!-- Font weight -->\n<p class="fw-bold">Bold text</p>\n<p class="fw-semibold">Semibold text</p>\n<p class="fw-normal">Normal weight</p>\n<p class="fw-light">Light weight</p>\n\n<!-- Font style -->\n<p class="fst-italic">Italic text</p>\n<p class="fst-normal">Normal style</p>\n\n<!-- Text decoration -->\n<p class="text-decoration-underline">Underlined</p>\n<p class="text-decoration-line-through">Strikethrough</p>\n<p class="text-decoration-none">No decoration</p>\n\n<!-- Text transform -->\n<p class="text-lowercase">lowercase text</p>\n<p class="text-uppercase">UPPERCASE TEXT</p>\n<p class="text-capitalize">Capitalized Text</p>\n\n<!-- Text truncation -->\n<p class="text-truncate" style="width: 150px;">Long text that gets truncated with ellipsis</p>\n\n<!-- Lead paragraph -->\n<p class="lead">This paragraph stands out with larger, lighter text</p>\n\n<!-- Small text -->\n<small>Small text</small>\n<p class="small">Small paragraph</p>\n\n<!-- Blockquote -->\n<blockquote class="blockquote">\n  <p>A famous quote here.</p>\n  <footer class="blockquote-footer">Someone famous</footer>\n</blockquote>',
      },
      {
        id: 'colors-backgrounds',
        title: 'Colors & Backgrounds',
        description: 'Apply color utilities:',
        language: 'html',
        code: '<!-- Background colors -->\n<div class="bg-primary">Primary background</div>\n<div class="bg-secondary">Secondary background</div>\n<div class="bg-success">Success background</div>\n<div class="bg-danger">Danger background</div>\n<div class="bg-warning">Warning background</div>\n<div class="bg-info">Info background</div>\n<div class="bg-light">Light background</div>\n<div class="bg-dark">Dark background</div>\n<div class="bg-white">White background</div>\n<div class="bg-transparent">Transparent background</div>\n\n<!-- Background with text color -->\n<div class="bg-dark text-white">Dark background, white text</div>\n<div class="bg-primary text-white">Primary background, white text</div>\n\n<!-- Background opacity -->\n<div class="bg-primary bg-opacity-50">50% opacity</div>\n<div class="bg-primary bg-opacity-25">25% opacity</div>\n\n<!-- Background gradient -->\n<div class="bg-primary bg-gradient">Gradient background</div>',
      },
      {
        id: 'buttons',
        title: 'Buttons',
        description: 'Style clickable buttons:',
        language: 'html',
        code: '<!-- Solid buttons -->\n<button class="btn btn-primary">Primary</button>\n<button class="btn btn-secondary">Secondary</button>\n<button class="btn btn-success">Success</button>\n<button class="btn btn-danger">Danger</button>\n<button class="btn btn-warning">Warning</button>\n<button class="btn btn-info">Info</button>\n<button class="btn btn-light">Light</button>\n<button class="btn btn-dark">Dark</button>\n\n<!-- Outline buttons -->\n<button class="btn btn-outline-primary">Primary Outline</button>\n<button class="btn btn-outline-danger">Danger Outline</button>\n\n<!-- Button sizes -->\n<button class="btn btn-primary btn-lg">Large Button</button>\n<button class="btn btn-primary">Default Button</button>\n<button class="btn btn-primary btn-sm">Small Button</button>\n\n<!-- Full width button -->\n<button class="btn btn-primary w-100">Full Width</button>\n\n<!-- Disabled button -->\n<button class="btn btn-primary" disabled>Disabled</button>\n\n<!-- Button as link -->\n<a href="#" class="btn btn-primary">Link Button</a>\n\n<!-- Button group -->\n<div class="btn-group">\n  <button class="btn btn-primary">Left</button>\n  <button class="btn btn-primary">Middle</button>\n  <button class="btn btn-primary">Right</button>\n</div>\n\n<!-- Vertical button group -->\n<div class="btn-group-vertical">\n  <button class="btn btn-primary">Top</button>\n  <button class="btn btn-primary">Bottom</button>\n</div>\n\n<!-- Close button -->\n<button type="button" class="btn-close" aria-label="Close"></button>',
      },
      {
        id: 'forms',
        title: 'Forms',
        description: 'Style form elements:',
        language: 'html',
        code: '<!-- Basic input -->\n<div class="mb-3">\n  <label for="email" class="form-label">Email address</label>\n  <input type="email" class="form-control" id="email" placeholder="name@example.com" />\n</div>\n\n<!-- Textarea -->\n<div class="mb-3">\n  <label class="form-label">Message</label>\n  <textarea class="form-control" rows="3"></textarea>\n</div>\n\n<!-- Select dropdown -->\n<select class="form-select">\n  <option selected>Choose...</option>\n  <option value="1">Option 1</option>\n  <option value="2">Option 2</option>\n</select>\n\n<!-- Checkbox -->\n<div class="form-check">\n  <input class="form-check-input" type="checkbox" id="check1" />\n  <label class="form-check-label" for="check1">Check me</label>\n</div>\n\n<!-- Radio buttons -->\n<div class="form-check">\n  <input class="form-check-input" type="radio" name="options" id="radio1" />\n  <label class="form-check-label" for="radio1">Option 1</label>\n</div>\n<div class="form-check">\n  <input class="form-check-input" type="radio" name="options" id="radio2" />\n  <label class="form-check-label" for="radio2">Option 2</label>\n</div>\n\n<!-- Switch (toggle) -->\n<div class="form-check form-switch">\n  <input class="form-check-input" type="checkbox" id="switch1" />\n  <label class="form-check-label" for="switch1">Toggle switch</label>\n</div>\n\n<!-- Input sizes -->\n<input class="form-control form-control-lg" type="text" placeholder="Large" />\n<input class="form-control" type="text" placeholder="Default" />\n<input class="form-control form-control-sm" type="text" placeholder="Small" />\n\n<!-- Disabled input -->\n<input class="form-control" type="text" disabled placeholder="Disabled" />\n\n<!-- Readonly input -->\n<input class="form-control" type="text" readonly value="Readonly value" />\n\n<!-- Input with validation -->\n<input class="form-control is-valid" type="text" />\n<div class="valid-feedback">Looks good!</div>\n\n<input class="form-control is-invalid" type="text" />\n<div class="invalid-feedback">Please provide a valid value.</div>\n\n<!-- Input group (with icon/text addon) -->\n<div class="input-group mb-3">\n  <span class="input-group-text">@</span>\n  <input type="text" class="form-control" placeholder="Username" />\n</div>\n\n<div class="input-group mb-3">\n  <input type="text" class="form-control" />\n  <button class="btn btn-outline-secondary">Button</button>\n</div>\n\n<!-- Floating label -->\n<div class="form-floating">\n  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />\n  <label for="floatingInput">Email address</label>\n</div>\n\n<!-- Form text (help text) -->\n<input type="text" class="form-control" />\n<div class="form-text">We\'ll never share your email.</div>\n\n<!-- File input -->\n<input class="form-control" type="file" />\n\n<!-- Range slider -->\n<input type="range" class="form-range" />',
      },
      {
        id: 'cards',
        title: 'Cards',
        description: 'Flexible content containers:',
        language: 'html',
        code: '<!-- Basic card -->\n<div class="card">\n  <div class="card-body">\n    <h5 class="card-title">Card Title</h5>\n    <p class="card-text">Card content goes here.</p>\n    <a href="#" class="btn btn-primary">Go somewhere</a>\n  </div>\n</div>\n\n<!-- Card with image -->\n<div class="card">\n  <img src="image.jpg" class="card-img-top" alt="..." />\n  <div class="card-body">\n    <h5 class="card-title">Card Title</h5>\n    <p class="card-text">Card content.</p>\n  </div>\n</div>\n\n<!-- Card with header and footer -->\n<div class="card">\n  <div class="card-header">Header</div>\n  <div class="card-body">\n    <p class="card-text">Content</p>\n  </div>\n  <div class="card-footer text-muted">Footer</div>\n</div>\n\n<!-- Card with list group -->\n<div class="card">\n  <ul class="list-group list-group-flush">\n    <li class="list-group-item">Item 1</li>\n    <li class="list-group-item">Item 2</li>\n  </ul>\n</div>\n\n<!-- Card group (equal width, connected) -->\n<div class="card-group">\n  <div class="card">...</div>\n  <div class="card">...</div>\n</div>\n\n<!-- Card width -->\n<div class="card" style="width: 18rem;">Fixed width card</div>',
      },
      {
        id: 'navbar',
        title: 'Navbar',
        description: 'Navigation bar component:',
        language: 'html',
        code: '<nav class="navbar navbar-expand-lg navbar-light bg-light">\n  <div class="container-fluid">\n    <a class="navbar-brand" href="#">Brand</a>\n\n    <button\n      class="navbar-toggler"\n      type="button"\n      data-bs-toggle="collapse"\n      data-bs-target="#navbarNav"\n    >\n      <span class="navbar-toggler-icon"></span>\n    </button>\n\n    <div class="collapse navbar-collapse" id="navbarNav">\n      <ul class="navbar-nav me-auto mb-2 mb-lg-0">\n        <li class="nav-item">\n          <a class="nav-link active" href="#">Home</a>\n        </li>\n        <li class="nav-item">\n          <a class="nav-link" href="#">About</a>\n        </li>\n        <li class="nav-item dropdown">\n          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> Dropdown </a>\n          <ul class="dropdown-menu">\n            <li><a class="dropdown-item" href="#">Action</a></li>\n            <li><a class="dropdown-item" href="#">Another action</a></li>\n          </ul>\n        </li>\n      </ul>\n      <form class="d-flex">\n        <input class="form-control me-2" type="search" placeholder="Search" />\n        <button class="btn btn-outline-success">Search</button>\n      </form>\n    </div>\n  </div>\n</nav>\n\n<!-- Dark navbar -->\n<nav class="navbar navbar-expand-lg navbar-dark bg-dark">Content</nav>\n\n<!-- Fixed navbar -->\n<nav class="navbar fixed-top">Fixed to top</nav>\n<nav class="navbar fixed-bottom">Fixed to bottom</nav>\n<nav class="navbar sticky-top">Sticky (scrolls until top)</nav>',
      },
      {
        id: 'modal',
        title: 'Modal',
        description: 'Popup dialog boxes:',
        language: 'html',
        code: '<!-- Trigger button -->\n<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">\n  Open Modal\n</button>\n\n<!-- Modal -->\n<div class="modal fade" id="exampleModal" tabindex="-1">\n  <div class="modal-dialog">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h5 class="modal-title">Modal Title</h5>\n        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>\n      </div>\n      <div class="modal-body">Modal content goes here.</div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\n        <button type="button" class="btn btn-primary">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Modal sizes -->\n<div class="modal-dialog modal-sm">Small modal</div>\n<div class="modal-dialog modal-lg">Large modal</div>\n<div class="modal-dialog modal-xl">Extra large modal</div>\n\n<!-- Centered modal -->\n<div class="modal-dialog modal-dialog-centered">Centered vertically</div>\n\n<!-- Scrollable modal -->\n<div class="modal-dialog modal-dialog-scrollable">Scrollable content</div>\n\n<!-- Static backdrop (won\'t close on outside click) -->\n<div class="modal" data-bs-backdrop="static">Static modal</div>',
      },
      {
        id: 'alerts',
        title: 'Alerts',
        description: 'Contextual feedback messages:',
        language: 'html',
        code: '<div class="alert alert-primary">Primary alert</div>\n<div class="alert alert-secondary">Secondary alert</div>\n<div class="alert alert-success">Success alert</div>\n<div class="alert alert-danger">Danger alert</div>\n<div class="alert alert-warning">Warning alert</div>\n<div class="alert alert-info">Info alert</div>\n<div class="alert alert-light">Light alert</div>\n<div class="alert alert-dark">Dark alert</div>\n\n<!-- Alert with heading -->\n<div class="alert alert-success">\n  <h4 class="alert-heading">Well done!</h4>\n  <p>You successfully completed the task.</p>\n</div>\n\n<!-- Dismissible alert -->\n<div class="alert alert-warning alert-dismissible fade show">\n  Warning message\n  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>\n</div>\n\n<!-- Alert with link -->\n<div class="alert alert-primary">Check out <a href="#" class="alert-link">this link</a></div>',
      },
      {
        id: 'badges',
        title: 'Badges',
        description: 'Small count/label indicators:',
        language: 'html',
        code: '<span class="badge bg-primary">Primary</span>\n<span class="badge bg-secondary">Secondary</span>\n<span class="badge bg-success">Success</span>\n<span class="badge bg-danger">Danger</span>\n<span class="badge bg-warning text-dark">Warning</span>\n\n<!-- Pill badge (rounded) -->\n<span class="badge rounded-pill bg-primary">Pill Badge</span>\n\n<!-- Badge in button -->\n<button class="btn btn-primary">\n  Notifications <span class="badge bg-light text-dark">4</span>\n</button>\n\n<!-- Badge in heading -->\n<h3>Heading <span class="badge bg-secondary">New</span></h3>',
      },
      {
        id: 'dropdowns',
        title: 'Dropdowns',
        description: 'Toggleable menus:',
        language: 'html',
        code: '<div class="dropdown">\n  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">\n    Dropdown button\n  </button>\n  <ul class="dropdown-menu">\n    <li><a class="dropdown-item" href="#">Action</a></li>\n    <li><a class="dropdown-item" href="#">Another action</a></li>\n    <li><hr class="dropdown-divider" /></li>\n    <li><a class="dropdown-item" href="#">Separated link</a></li>\n  </ul>\n</div>\n\n<!-- Dropdown alignment -->\n<div class="dropdown-menu dropdown-menu-end">Right aligned</div>\n\n<!-- Dropup -->\n<div class="dropup">Menu opens upward</div>\n\n<!-- Active/disabled items -->\n<a class="dropdown-item active" href="#">Active item</a>\n<a class="dropdown-item disabled" href="#">Disabled item</a>',
      },
      {
        id: 'tables',
        title: 'Tables',
        description: 'Style data tables:',
        language: 'html',
        code: '<table class="table">\n  <thead>\n    <tr>\n      <th>#</th>\n      <th>Name</th>\n      <th>Email</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>1</td>\n      <td>John</td>\n      <td>john@example.com</td>\n    </tr>\n  </tbody>\n</table>\n\n<!-- Striped rows -->\n<table class="table table-striped">\n  Content\n</table>\n\n<!-- Bordered table -->\n<table class="table table-bordered">\n  Content\n</table>\n\n<!-- Hover effect -->\n<table class="table table-hover">\n  Content\n</table>\n\n<!-- Small/compact table -->\n<table class="table table-sm">\n  Content\n</table>\n\n<!-- Dark table -->\n<table class="table table-dark">\n  Content\n</table>\n\n<!-- Responsive table (scrolls on small screens) -->\n<div class="table-responsive">\n  <table class="table">\n    Content\n  </table>\n</div>\n\n<!-- Contextual row/cell colors -->\n<tr class="table-primary">\n  Primary row\n</tr>\n<tr class="table-success">\n  Success row\n</tr>\n<td class="table-danger">Danger cell</td>',
      },
      {
        id: 'spacing-utilities',
        title: 'Spacing Utilities',
        description: 'Margin and padding classes:',
        language: 'html',
        code: '<!-- Margin: m-{size} -->\n<div class="m-0">No margin</div>\n<div class="m-1">Margin 0.25rem</div>\n<div class="m-2">Margin 0.5rem</div>\n<div class="m-3">Margin 1rem</div>\n<div class="m-4">Margin 1.5rem</div>\n<div class="m-5">Margin 3rem</div>\n<div class="m-auto">Auto margin</div>\n\n<!-- Directional margin -->\n<div class="mt-3">Margin top</div>\n<div class="mb-3">Margin bottom</div>\n<div class="ms-3">Margin start (left)</div>\n<div class="me-3">Margin end (right)</div>\n<div class="mx-3">Margin left and right</div>\n<div class="my-3">Margin top and bottom</div>\n\n<!-- Padding: p-{size} (same pattern as margin) -->\n<div class="p-3">Padding all sides</div>\n<div class="pt-3">Padding top</div>\n<div class="px-3">Padding left and right</div>\n<div class="py-3">Padding top and bottom</div>\n\n<!-- Responsive spacing -->\n<div class="mt-2 mt-md-4 mt-lg-5">Responsive margin top</div>\n\n<!-- Negative margin -->\n<div class="mt-n3">Negative margin top</div>',
      },
      {
        id: 'display-flexbox-utilities',
        title: 'Display & Flexbox Utilities',
        description: 'Control layout with utility classes:',
        language: 'html',
        code: '<!-- Display -->\n<div class="d-none">Hidden</div>\n<div class="d-block">Block</div>\n<div class="d-inline">Inline</div>\n<div class="d-inline-block">Inline block</div>\n<div class="d-flex">Flex</div>\n<div class="d-grid">Grid</div>\n\n<!-- Responsive display -->\n<div class="d-none d-md-block">Hidden mobile, visible tablet+</div>\n<div class="d-block d-md-none">Visible mobile, hidden tablet+</div>\n\n<!-- Flexbox -->\n<div class="d-flex justify-content-center">Center horizontally</div>\n<div class="d-flex justify-content-between">Space between</div>\n<div class="d-flex justify-content-around">Space around</div>\n<div class="d-flex align-items-center">Center vertically</div>\n<div class="d-flex align-items-start">Align start</div>\n<div class="d-flex align-items-end">Align end</div>\n\n<!-- Flex direction -->\n<div class="d-flex flex-row">Row (default)</div>\n<div class="d-flex flex-column">Column</div>\n<div class="d-flex flex-row-reverse">Reverse row</div>\n\n<!-- Flex wrap -->\n<div class="d-flex flex-wrap">Wrap items</div>\n<div class="d-flex flex-nowrap">No wrap</div>\n\n<!-- Gap -->\n<div class="d-flex gap-3">Gap between flex items</div>\n\n<!-- Common pattern: centered content -->\n<div class="d-flex justify-content-center align-items-center" style="height: 100vh;">\n  Perfectly centered\n</div>',
      },
      {
        id: 'sizing-utilities',
        title: 'Sizing Utilities',
        description: 'Width and height classes:',
        language: 'html',
        code: '<!-- Width -->\n<div class="w-25">25% width</div>\n<div class="w-50">50% width</div>\n<div class="w-75">75% width</div>\n<div class="w-100">100% width</div>\n<div class="w-auto">Auto width</div>\n\n<!-- Height -->\n<div class="h-25">25% height</div>\n<div class="h-50">50% height</div>\n<div class="h-100">100% height</div>\n<div class="vh-100">100% viewport height</div>\n\n<!-- Min/Max width -->\n<div class="mw-100">Max width 100%</div>\n<div class="min-vh-100">Min height 100vh</div>',
      },
      {
        id: 'border-utilities',
        title: 'Border Utilities',
        description: 'Add and style borders:',
        language: 'html',
        code: '<!-- Add border -->\n<div class="border">Border all sides</div>\n<div class="border-top">Top border only</div>\n<div class="border-bottom">Bottom border only</div>\n<div class="border-0">No border</div>\n\n<!-- Border color -->\n<div class="border border-primary">Primary border</div>\n<div class="border border-danger">Danger border</div>\n\n<!-- Border width -->\n<div class="border border-2">2px border</div>\n<div class="border border-3">3px border</div>\n\n<!-- Rounded corners -->\n<div class="rounded">Default rounded</div>\n<div class="rounded-1">Small rounded</div>\n<div class="rounded-3">Large rounded</div>\n<div class="rounded-circle">Fully rounded (circle)</div>\n<div class="rounded-pill">Pill shape</div>\n<div class="rounded-0">No rounding</div>\n\n<!-- Rounded specific sides -->\n<div class="rounded-top">Round top</div>\n<div class="rounded-end">Round right</div>',
      },
      {
        id: 'shadows',
        title: 'Shadows',
        description: 'Add depth with shadows:',
        language: 'html',
        code: '<div class="shadow-sm">Small shadow</div>\n<div class="shadow">Default shadow</div>\n<div class="shadow-lg">Large shadow</div>\n<div class="shadow-none">No shadow</div>',
      },
      {
        id: 'list-group',
        title: 'List Group',
        description: 'Display lists of content:',
        language: 'html',
        code: '<ul class="list-group">\n  <li class="list-group-item">Item 1</li>\n  <li class="list-group-item active">Active item</li>\n  <li class="list-group-item disabled">Disabled item</li>\n</ul>\n\n<!-- List group with links -->\n<div class="list-group">\n  <a href="#" class="list-group-item list-group-item-action">Link item</a>\n</div>\n\n<!-- Flush list group (no borders/rounded corners) -->\n<ul class="list-group list-group-flush">\n  <li class="list-group-item">Item 1</li>\n</ul>\n\n<!-- Contextual colors -->\n<li class="list-group-item list-group-item-success">Success item</li>\n<li class="list-group-item list-group-item-danger">Danger item</li>\n\n<!-- Badges in list -->\n<li class="list-group-item d-flex justify-content-between align-items-center">\n  Item\n  <span class="badge bg-primary rounded-pill">14</span>\n</li>',
      },
      {
        id: 'progress-bars',
        title: 'Progress Bars',
        description: 'Show completion progress:',
        language: 'html',
        code: '<div class="progress">\n  <div class="progress-bar" style="width: 75%">75%</div>\n</div>\n\n<!-- Colored progress bar -->\n<div class="progress">\n  <div class="progress-bar bg-success" style="width: 50%"></div>\n</div>\n\n<!-- Striped progress bar -->\n<div class="progress">\n  <div class="progress-bar progress-bar-striped" style="width: 60%"></div>\n</div>\n\n<!-- Animated striped -->\n<div class="progress">\n  <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 60%"></div>\n</div>\n\n<!-- Multiple bars -->\n<div class="progress">\n  <div class="progress-bar bg-success" style="width: 25%"></div>\n  <div class="progress-bar bg-warning" style="width: 25%"></div>\n  <div class="progress-bar bg-danger" style="width: 25%"></div>\n</div>',
      },
      {
        id: 'spinners',
        title: 'Spinners',
        description: 'Loading indicators:',
        language: 'html',
        code: '<!-- Border spinner -->\n<div class="spinner-border" role="status">\n  <span class="visually-hidden">Loading...</span>\n</div>\n\n<!-- Colored spinner -->\n<div class="spinner-border text-primary"></div>\n\n<!-- Growing spinner -->\n<div class="spinner-grow" role="status">\n  <span class="visually-hidden">Loading...</span>\n</div>\n\n<!-- Small spinner -->\n<div class="spinner-border spinner-border-sm"></div>\n\n<!-- Spinner in button -->\n<button class="btn btn-primary" disabled>\n  <span class="spinner-border spinner-border-sm"></span>\n  Loading...\n</button>',
      },
      {
        id: 'tooltips-popovers',
        title: 'Tooltips & Popovers',
        description: 'Contextual information on hover/click:',
        language: 'html',
        code: '<!-- Tooltip -->\n<button class="btn btn-primary" data-bs-toggle="tooltip" title="Tooltip text">Hover me</button>\n\n<!-- Initialize tooltips (required JS) -->\n<script>\n  const tooltips = document.querySelectorAll(\'[data-bs-toggle="tooltip"]\')\n  tooltips.forEach((t) => new bootstrap.Tooltip(t))\n</script>\n\n<!-- Popover -->\n<button\n  class="btn btn-primary"\n  data-bs-toggle="popover"\n  title="Title"\n  data-bs-content="Popover content"\n>\n  Click me\n</button>\n\n<!-- Initialize popovers (required JS) -->\n<script>\n  const popovers = document.querySelectorAll(\'[data-bs-toggle="popover"]\')\n  popovers.forEach((p) => new bootstrap.Popover(p))\n</script>',
      },
      {
        id: 'tabs',
        title: 'Tabs',
        description: 'Tabbed content navigation:',
        language: 'html',
        code: '<ul class="nav nav-tabs">\n  <li class="nav-item">\n    <a class="nav-link active" data-bs-toggle="tab" href="#home">Home</a>\n  </li>\n  <li class="nav-item">\n    <a class="nav-link" data-bs-toggle="tab" href="#profile">Profile</a>\n  </li>\n</ul>\n\n<div class="tab-content">\n  <div class="tab-pane fade show active" id="home">Home content</div>\n  <div class="tab-pane fade" id="profile">Profile content</div>\n</div>\n\n<!-- Pills style tabs -->\n<ul class="nav nav-pills">\n  <li class="nav-item">\n    <a class="nav-link active" href="#">Active</a>\n  </li>\n</ul>',
      },
      {
        id: 'accordion',
        title: 'Accordion',
        description: 'Collapsible content panels:',
        language: 'html',
        code: '<div class="accordion" id="accordionExample">\n  <div class="accordion-item">\n    <h2 class="accordion-header">\n      <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne">\n        Accordion Item 1\n      </button>\n    </h2>\n    <div\n      id="collapseOne"\n      class="accordion-collapse collapse show"\n      data-bs-parent="#accordionExample"\n    >\n      <div class="accordion-body">Content for first item</div>\n    </div>\n  </div>\n  <div class="accordion-item">\n    <h2 class="accordion-header">\n      <button\n        class="accordion-button collapsed"\n        data-bs-toggle="collapse"\n        data-bs-target="#collapseTwo"\n      >\n        Accordion Item 2\n      </button>\n    </h2>\n    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">\n      <div class="accordion-body">Content for second item</div>\n    </div>\n  </div>\n</div>',
      },
      {
        id: 'carousel',
        title: 'Carousel',
        description: 'Image/content slideshow:',
        language: 'html',
        code: '<div id="carouselExample" class="carousel slide">\n  <div class="carousel-indicators">\n    <button data-bs-target="#carouselExample" data-bs-slide-to="0" class="active"></button>\n    <button data-bs-target="#carouselExample" data-bs-slide-to="1"></button>\n  </div>\n\n  <div class="carousel-inner">\n    <div class="carousel-item active">\n      <img src="image1.jpg" class="d-block w-100" alt="..." />\n    </div>\n    <div class="carousel-item">\n      <img src="image2.jpg" class="d-block w-100" alt="..." />\n    </div>\n  </div>\n\n  <button class="carousel-control-prev" data-bs-target="#carouselExample" data-bs-slide="prev">\n    <span class="carousel-control-prev-icon"></span>\n  </button>\n  <button class="carousel-control-next" data-bs-target="#carouselExample" data-bs-slide="next">\n    <span class="carousel-control-next-icon"></span>\n  </button>\n</div>',
      },
      {
        id: 'pagination',
        title: 'Pagination',
        description: 'Page navigation:',
        language: 'html',
        code: '<nav>\n  <ul class="pagination">\n    <li class="page-item"><a class="page-link" href="#">Previous</a></li>\n    <li class="page-item"><a class="page-link" href="#">1</a></li>\n    <li class="page-item active"><a class="page-link" href="#">2</a></li>\n    <li class="page-item"><a class="page-link" href="#">3</a></li>\n    <li class="page-item"><a class="page-link" href="#">Next</a></li>\n  </ul>\n</nav>\n\n<!-- Sizes -->\n<ul class="pagination pagination-lg">\n  Large pagination\n</ul>\n<ul class="pagination pagination-sm">\n  Small pagination\n</ul>\n\n<!-- Disabled item -->\n<li class="page-item disabled"><a class="page-link">Previous</a></li>',
      },
      {
        id: 'breadcrumb',
        title: 'Breadcrumb',
        description: 'Navigation trail:',
        language: 'html',
        code: '<nav>\n  <ol class="breadcrumb">\n    <li class="breadcrumb-item"><a href="#">Home</a></li>\n    <li class="breadcrumb-item"><a href="#">Library</a></li>\n    <li class="breadcrumb-item active">Data</li>\n  </ol>\n</nav>',
      },
      {
        id: 'toast',
        title: 'Toast',
        description: 'Notification messages:',
        language: 'html',
        code: '<div class="toast" role="alert">\n  <div class="toast-header">\n    <strong class="me-auto">Notification</strong>\n    <small>Just now</small>\n    <button type="button" class="btn-close" data-bs-dismiss="toast"></button>\n  </div>\n  <div class="toast-body">Message content here.</div>\n</div>\n\n<!-- Show toast with JS -->\n<script>\n  const toast = new bootstrap.Toast(document.querySelector(\'.toast\'))\n  toast.show()\n</script>',
      },
      {
        id: 'utilities-cheat-sheet',
        title: 'Utilities Cheat Sheet',
        description: 'Quick reference for common utilities:',
        language: 'html',
        code: '<!-- Visibility -->\n<div class="visually-hidden">Hidden but accessible to screen readers</div>\n<div class="invisible">Invisible but takes up space</div>\n\n<!-- Position -->\n<div class="position-relative">Relative</div>\n<div class="position-absolute">Absolute</div>\n<div class="position-fixed">Fixed</div>\n<div class="position-sticky">Sticky</div>\n\n<!-- Overflow -->\n<div class="overflow-auto">Auto overflow</div>\n<div class="overflow-hidden">Hidden overflow</div>\n\n<!-- Z-index -->\n<div class="z-0">Z-index 0</div>\n<div class="z-3">Z-index 3</div>\n\n<!-- Float -->\n<div class="float-start">Float left</div>\n<div class="float-end">Float right</div>\n\n<!-- Vertical align -->\n<span class="align-top">Top aligned</span>\n<span class="align-middle">Middle aligned</span>\n\n<!-- Cursor -->\n<div class="cursor-pointer" style="cursor: pointer;">Pointer cursor</div>\n\n<!-- Opacity -->\n<div class="opacity-25">25% opacity</div>\n<div class="opacity-50">50% opacity</div>\n<div class="opacity-100">100% opacity</div>',
      },
    ],
  },

  nodejs: {
    lang: 'nodejs',
    label: 'Node.js',
    title: 'Node.js',
    icon: '/nodejs.svg',
    color: '#339933',
    sections: [
      {
        id: 'setup',
        title: 'Setup',
        description: 'Install and run Node.js:',
        language: 'bash',
        code: '# Check if Node is installed\nnode -v\nnpm -v\n\n# Run a JavaScript file\nnode app.js\n\n# Initialize a new project (creates package.json)\nnpm init\nnpm init -y  # Skip questions, use defaults\n\n# Install a package\nnpm install express\nnpm install express --save-dev  # Dev dependency only\n\n# Install globally\nnpm install -g nodemon\n\n# Run npm scripts\nnpm run start\nnpm run dev',
      },
      {
        id: 'package-json',
        title: 'package.json',
        description: 'Project configuration file:',
        language: 'json',
        code: '{\n  "name": "my-app",\n  "version": "1.0.0",\n  "main": "index.js",\n  "scripts": {\n    "start": "node index.js",\n    "dev": "nodemon index.js",\n    "test": "jest"\n  },\n  "dependencies": {\n    "express": "^4.18.2"\n  },\n  "devDependencies": {\n    "nodemon": "^3.0.1"\n  }\n}',
      },
      {
        id: 'modules-commonjs',
        title: 'Modules (CommonJS)',
        description: 'Import and export code between files:',
        language: 'javascript',
        code: "// math.js - Export\nfunction add(a, b) {\n  return a + b\n}\n\nfunction subtract(a, b) {\n  return a - b\n}\n\nmodule.exports = { add, subtract }\n\n// Or export single item\nmodule.exports = add\n\n// Export as you define\nexports.add = add\nexports.subtract = subtract\n\n// app.js - Import\nconst { add, subtract } = require('./math')\nconst math = require('./math') // Import all as object\n\nconsole.log(add(2, 3)) // 5\n\n// Import built-in modules\nconst fs = require('fs')\nconst path = require('path')\nconst http = require('http')",
      },
      {
        id: 'modules-es-modules',
        title: 'Modules (ES Modules)',
        description: 'Modern import/export syntax:',
        language: 'javascript',
        code: "// package.json needs: \"type\": \"module\"\n\n// math.js - Export\nexport function add(a, b) {\n  return a + b\n}\n\nexport function subtract(a, b) {\n  return a - b\n}\n\nexport default add // Default export\n\n// app.js - Import\nimport { add, subtract } from './math.js'\nimport add from './math.js' // Default import\nimport * as math from './math.js' // Import all",
      },
      {
        id: 'file-system-fs',
        title: 'File System (fs)',
        description: 'Read and write files:',
        language: 'javascript',
        code: "const fs = require('fs')\n\n// Read file (async, callback style)\nfs.readFile('file.txt', 'utf8', (err, data) => {\n  if (err) throw err\n  console.log(data)\n})\n\n// Read file (sync, blocks execution)\nconst data = fs.readFileSync('file.txt', 'utf8')\nconsole.log(data)\n\n// Write file (async)\nfs.writeFile('file.txt', 'Hello World', (err) => {\n  if (err) throw err\n  console.log('File saved')\n})\n\n// Write file (sync)\nfs.writeFileSync('file.txt', 'Hello World')\n\n// Append to file\nfs.appendFile('file.txt', 'New line\\n', (err) => {\n  if (err) throw err\n})\n\n// Check if file exists\nfs.existsSync('file.txt') // true/false\n\n// Delete file\nfs.unlink('file.txt', (err) => {\n  if (err) throw err\n})\n\n// Create directory\nfs.mkdir('newFolder', (err) => {\n  if (err) throw err\n})\n\nfs.mkdirSync('newFolder', { recursive: true }) // Create nested folders\n\n// Read directory contents\nfs.readdir('.', (err, files) => {\n  console.log(files) // Array of file/folder names\n})\n\n// Get file info\nfs.stat('file.txt', (err, stats) => {\n  console.log(stats.isFile()) // true\n  console.log(stats.isDirectory()) // false\n  console.log(stats.size) // File size in bytes\n})\n\n// Rename/move file\nfs.rename('old.txt', 'new.txt', (err) => {\n  if (err) throw err\n})\n\n// Copy file\nfs.copyFile('source.txt', 'dest.txt', (err) => {\n  if (err) throw err\n})\n\n// Modern promise-based API\nconst fsPromises = require('fs').promises\n\nasync function readFile() {\n  try {\n    const data = await fsPromises.readFile('file.txt', 'utf8')\n    console.log(data)\n  } catch (err) {\n    console.error(err)\n  }\n}",
      },
      {
        id: 'path-module',
        title: 'Path Module',
        description: 'Work with file paths:',
        language: 'javascript',
        code: "const path = require('path')\n\n// Join paths (cross-platform safe)\npath.join('folder', 'subfolder', 'file.txt') // folder/subfolder/file.txt\n\n// Resolve to absolute path\npath.resolve('file.txt') // /full/path/to/file.txt\n\n// Get file extension\npath.extname('file.txt') // .txt\n\n// Get file name (without directory)\npath.basename('/folder/file.txt') // file.txt\npath.basename('/folder/file.txt', '.txt') // file\n\n// Get directory name\npath.dirname('/folder/file.txt') // /folder\n\n// Parse path into object\npath.parse('/folder/file.txt')\n// { root: '/', dir: '/folder', base: 'file.txt', ext: '.txt', name: 'file' }\n\n// Current directory\n__dirname // Directory of current file\n__filename // Full path of current file",
      },
      {
        id: 'http-server-built-in',
        title: 'HTTP Server (Built-in)',
        description: 'Create a basic server without frameworks:',
        language: 'javascript',
        code: "const http = require('http')\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' })\n  res.end('Hello World')\n})\n\nserver.listen(3000, () => {\n  console.log('Server running on port 3000')\n})\n\n// Handle different routes\nconst server = http.createServer((req, res) => {\n  if (req.url === '/') {\n    res.end('Home page')\n  } else if (req.url === '/about') {\n    res.end('About page')\n  } else {\n    res.writeHead(404)\n    res.end('Not Found')\n  }\n})\n\n// JSON response\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' })\n  res.end(JSON.stringify({ message: 'Hello' }))\n})",
      },
      {
        id: 'express-js',
        title: 'Express.js',
        description: 'Popular web framework (most common way to build servers):',
        language: 'javascript',
        code: "npm install express\n\nconst express = require('express')\nconst app = express()\n\n// Middleware to parse JSON body\napp.use(express.json())\n\n// Middleware to parse URL-encoded body\napp.use(express.urlencoded({ extended: true }))\n\n// Basic route\napp.get('/', (req, res) => {\n  res.send('Hello World')\n})\n\n// Different HTTP methods\napp.get('/users', (req, res) => {\n  res.json({ users: [] })\n})\n\napp.post('/users', (req, res) => {\n  const newUser = req.body\n  res.status(201).json(newUser)\n})\n\napp.put('/users/:id', (req, res) => {\n  res.json({ updated: true })\n})\n\napp.delete('/users/:id', (req, res) => {\n  res.json({ deleted: true })\n})\n\n// Route parameters\napp.get('/users/:id', (req, res) => {\n  const id = req.params.id\n  res.send(`User ID: ${id}`)\n})\n\n// Query parameters\napp.get('/search', (req, res) => {\n  const query = req.query.q // /search?q=hello\n  res.send(`Searching for: ${query}`)\n})\n\n// Start server\napp.listen(3000, () => {\n  console.log('Server running on port 3000')\n})",
      },
      {
        id: 'express-middleware',
        title: 'Express Middleware',
        description: 'Functions that process requests:',
        language: 'javascript',
        code: "// Custom middleware\nfunction logger(req, res, next) {\n    console.log(`${req.method} ${req.url}`);\n    next();  // Must call next() to continue\n}\n\napp.use(logger);  // Apply to all routes\n\n// Middleware for specific route\napp.get('/protected', logger, (req, res) => {\n    res.send('Protected route');\n});\n\n// Error handling middleware (4 parameters)\napp.use((err, req, res, next) => {\n    console.error(err.stack);\n    res.status(500).send('Something broke!');\n});\n\n// Serve static files\napp.use(express.static('public'));\n\n// CORS middleware\nconst cors = require('cors');\napp.use(cors());\n\n// Common third-party middleware\nnpm install cors helmet morgan\n\nconst helmet = require('helmet')\nconst morgan = require('morgan')\n\napp.use(helmet()) // Security headers\napp.use(morgan('dev')) // Request logging",
      },
      {
        id: 'express-router',
        title: 'Express Router',
        description: 'Organize routes into separate files:',
        language: 'javascript',
        code: "// routes/users.js\nconst express = require('express')\nconst router = express.Router()\n\nrouter.get('/', (req, res) => {\n  res.json({ users: [] })\n})\n\nrouter.get('/:id', (req, res) => {\n  res.json({ id: req.params.id })\n})\n\nmodule.exports = router\n\n// app.js\nconst usersRouter = require('./routes/users')\napp.use('/users', usersRouter) // Prefix all routes with /users",
      },
      {
        id: 'express-request-response',
        title: 'Express Request & Response',
        description: 'Common req/res properties and methods:',
        language: 'javascript',
        code: "app.get('/example', (req, res) => {\n  // Request properties\n  req.params // Route parameters (/users/:id)\n  req.query // Query string (?key=value)\n  req.body // Request body (needs express.json())\n  req.headers // Request headers\n  req.method // HTTP method\n  req.url // Request URL\n  req.cookies // Cookies (needs cookie-parser)\n\n  // Response methods\n  res.send('text') // Send text/html response\n  res.json({ key: 'value' }) // Send JSON response\n  res.status(404).send('Not Found') // Set status code\n  res.redirect('/home') // Redirect\n  res.render('view', { data }) // Render template\n  res.sendFile('/path/file.pdf') // Send a file\n  res.download('/path/file.pdf') // Download file\n  res.cookie('name', 'value') // Set cookie\n  res.clearCookie('name') // Clear cookie\n\n  // Chaining\n  res.status(201).json({ created: true })\n})",
      },
      {
        id: 'environment-variables',
        title: 'Environment Variables',
        description: 'Manage configuration:',
        language: 'javascript',
        code: "npm install dotenv\n\n// .env file\nPORT=3000\nDB_URL=mongodb://localhost/mydb\nAPI_KEY=secret123\n\n// app.js\nrequire('dotenv').config()\n\nconst port = process.env.PORT || 3000\nconst dbUrl = process.env.DB_URL\n\nconsole.log(process.env.NODE_ENV) // 'development' or 'production'",
      },
      {
        id: 'async-await-promises',
        title: 'Async/Await & Promises',
        description: 'Handle asynchronous operations:',
        language: 'javascript',
        code: "// Promise\nfunction fetchData() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve('Data received')\n    }, 1000)\n  })\n}\n\nfetchData().then((data) => console.log(data))\n\n// Async/await\nasync function getData() {\n  try {\n    const data = await fetchData()\n    console.log(data)\n  } catch (error) {\n    console.error(error)\n  }\n}\n\n// Multiple async operations\nasync function getMultiple() {\n  const [result1, result2] = await Promise.all([fetchData1(), fetchData2()])\n}\n\n// In Express routes\napp.get('/data', async (req, res) => {\n  try {\n    const data = await fetchFromDatabase()\n    res.json(data)\n  } catch (error) {\n    res.status(500).json({ error: error.message })\n  }\n})",
      },
      {
        id: 'mongodb-with-mongoose',
        title: 'MongoDB with Mongoose',
        description: 'Connect to MongoDB database:',
        language: 'javascript',
        code: "npm install mongoose\n\nconst mongoose = require('mongoose')\n\n// Connect to database\nmongoose.connect('mongodb://localhost:27017/mydb')\n\n// Define schema\nconst userSchema = new mongoose.Schema({\n  name: { type: String, required: true },\n  email: { type: String, required: true, unique: true },\n  age: Number,\n  createdAt: { type: Date, default: Date.now },\n})\n\n// Create model\nconst User = mongoose.model('User', userSchema)\n\n// Create document\nconst user = new User({ name: 'John', email: 'john@example.com' })\nawait user.save()\n\n// Or using create\nawait User.create({ name: 'John', email: 'john@example.com' })\n\n// Find documents\nconst users = await User.find()\nconst user = await User.findById(id)\nconst user = await User.findOne({ email: 'john@example.com' })\n\n// Update document\nawait User.findByIdAndUpdate(id, { name: 'Jane' })\n\n// Delete document\nawait User.findByIdAndDelete(id)\n\n// Query with conditions\nconst users = await User.find({ age: { $gte: 18 } })\nconst users = await User.find().sort({ name: 1 }).limit(10)",
      },
      {
        id: 'mysql-with-mysql2',
        title: 'MySQL with mysql2',
        description: 'Connect to MySQL database:',
        language: 'javascript',
        code: "npm install mysql2\n\nconst mysql = require('mysql2/promise')\n\n// Create connection\nconst connection = await mysql.createConnection({\n  host: 'localhost',\n  user: 'root',\n  password: '',\n  database: 'mydb',\n})\n\n// Query database\nconst [rows] = await connection.query('SELECT * FROM users')\nconsole.log(rows)\n\n// Query with parameters (prevents SQL injection)\nconst [rows] = await connection.query('SELECT * FROM users WHERE id = ?', [userId])\n\n// Insert data\nconst [result] = await connection.query('INSERT INTO users (name, email) VALUES (?, ?)', [\n  'John',\n  'john@example.com',\n])\nconsole.log(result.insertId)\n\n// Connection pool (recommended for production)\nconst pool = mysql.createPool({\n  host: 'localhost',\n  user: 'root',\n  password: '',\n  database: 'mydb',\n  waitForConnections: true,\n  connectionLimit: 10,\n})\n\nconst [rows] = await pool.query('SELECT * FROM users')",
      },
      {
        id: 'authentication-with-jwt',
        title: 'Authentication with JWT',
        description: 'Token-based authentication:',
        language: 'javascript',
        code: "npm install jsonwebtoken bcrypt\n\nconst jwt = require('jsonwebtoken')\nconst bcrypt = require('bcrypt')\n\n// Hash password\nconst hashedPassword = await bcrypt.hash(password, 10)\n\n// Compare password\nconst isMatch = await bcrypt.compare(password, hashedPassword)\n\n// Create token\nconst token = jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '1h' })\n\n// Verify token\ntry {\n  const decoded = jwt.verify(token, 'your-secret-key')\n  console.log(decoded.userId)\n} catch (error) {\n  console.log('Invalid token')\n}\n\n// Middleware to protect routes\nfunction authenticate(req, res, next) {\n  const token = req.headers.authorization?.split(' ')[1]\n\n  if (!token) {\n    return res.status(401).json({ error: 'No token provided' })\n  }\n\n  try {\n    const decoded = jwt.verify(token, 'your-secret-key')\n    req.userId = decoded.userId\n    next()\n  } catch (error) {\n    res.status(401).json({ error: 'Invalid token' })\n  }\n}\n\n// Use middleware\napp.get('/protected', authenticate, (req, res) => {\n  res.json({ userId: req.userId })\n})",
      },
      {
        id: 'file-uploads-multer',
        title: 'File Uploads (Multer)',
        description: 'Handle file uploads:',
        language: 'javascript',
        code: "npm install multer\n\nconst multer = require('multer')\n\n// Configure storage\nconst storage = multer.diskStorage({\n  destination: (req, file, cb) => {\n    cb(null, 'uploads/')\n  },\n  filename: (req, file, cb) => {\n    cb(null, Date.now() + '-' + file.originalname)\n  },\n})\n\nconst upload = multer({ storage: storage })\n\n// Single file upload\napp.post('/upload', upload.single('file'), (req, res) => {\n  console.log(req.file)\n  res.json({ filename: req.file.filename })\n})\n\n// Multiple files\napp.post('/uploads', upload.array('files', 5), (req, res) => {\n  console.log(req.files)\n  res.json({ count: req.files.length })\n})",
      },
      {
        id: 'events-eventemitter',
        title: 'Events (EventEmitter)',
        description: 'Custom event handling:',
        language: 'javascript',
        code: "const EventEmitter = require('events')\n\nclass MyEmitter extends EventEmitter {}\nconst emitter = new MyEmitter()\n\n// Listen for event\nemitter.on('greet', (name) => {\n  console.log(`Hello, ${name}!`)\n})\n\n// Emit event\nemitter.emit('greet', 'John')\n\n// Listen once\nemitter.once('login', () => {\n  console.log('User logged in')\n})\n\n// Remove listener\nfunction handler() {\n  console.log('handled')\n}\nemitter.on('event', handler)\nemitter.off('event', handler)",
      },
      {
        id: 'streams',
        title: 'Streams',
        description: 'Handle data in chunks (efficient for large files):',
        language: 'javascript',
        code: "const fs = require('fs')\n\n// Read stream\nconst readStream = fs.createReadStream('largefile.txt', 'utf8')\n\nreadStream.on('data', (chunk) => {\n  console.log('Received chunk:', chunk.length)\n})\n\nreadStream.on('end', () => {\n  console.log('Finished reading')\n})\n\n// Write stream\nconst writeStream = fs.createWriteStream('output.txt')\nwriteStream.write('Hello ')\nwriteStream.write('World')\nwriteStream.end()\n\n// Pipe (connect read to write stream)\nconst readStream = fs.createReadStream('input.txt')\nconst writeStream = fs.createWriteStream('output.txt')\nreadStream.pipe(writeStream)\n\n// Pipe with Express (serve large files)\napp.get('/download', (req, res) => {\n  const stream = fs.createReadStream('largefile.zip')\n  stream.pipe(res)\n})",
      },
      {
        id: 'process-os',
        title: 'Process & OS',
        description: 'System information and process control:',
        language: 'javascript',
        code: "const os = require('os')\n\n// Process info\nprocess.env // Environment variables\nprocess.argv // Command line arguments\nprocess.platform // 'win32', 'darwin', 'linux'\nprocess.exit(0) // Exit process (0 = success)\nprocess.cwd() // Current working directory\n\n// OS info\nos.platform() // Operating system platform\nos.cpus() // CPU info\nos.totalmem() // Total memory\nos.freemem() // Free memory\nos.homedir() // Home directory\n\n// Environment-based logic\nif (process.env.NODE_ENV === 'production') {\n  console.log('Running in production')\n}\n\n// Handle uncaught errors\nprocess.on('uncaughtException', (err) => {\n  console.error('Uncaught Exception:', err)\n})\n\n// Graceful shutdown\nprocess.on('SIGTERM', () => {\n  console.log('Shutting down gracefully')\n  process.exit(0)\n})",
      },
      {
        id: 'error-handling',
        title: 'Error Handling',
        description: 'Handle errors properly:',
        language: 'javascript',
        code: "// Try-catch\ntry {\n  const data = JSON.parse(invalidJson)\n} catch (error) {\n  console.error('Error:', error.message)\n}\n\n// Async error handling\nasync function fetchData() {\n  try {\n    const result = await someAsyncOperation()\n    return result\n  } catch (error) {\n    console.error(error)\n    throw error // Re-throw if needed\n  }\n}\n\n// Express error handling\napp.get('/route', async (req, res, next) => {\n  try {\n    const data = await fetchData()\n    res.json(data)\n  } catch (error) {\n    next(error) // Pass to error middleware\n  }\n})\n\n// Global error handler (must be last)\napp.use((err, req, res, next) => {\n  console.error(err.stack)\n  res.status(500).json({ error: 'Internal Server Error' })\n})\n\n// Custom error class\nclass AppError extends Error {\n  constructor(message, statusCode) {\n    super(message)\n    this.statusCode = statusCode\n  }\n}\n\nthrow new AppError('User not found', 404)",
      },
      {
        id: 'npm-scripts-nodemon',
        title: 'NPM Scripts & Nodemon',
        description: 'Development workflow tools:',
        language: 'json',
        code: '# Install nodemon for auto-restart\nnpm install -g nodemon\nnpm install nodemon --save-dev\n\n// package.json\n{\n  "scripts": {\n    "start": "node index.js",\n    "dev": "nodemon index.js",\n    "test": "jest",\n    "build": "webpack --mode production"\n  }\n}\n\n# Run scripts\nnpm start\nnpm run dev\nnpm test',
      },
      {
        id: 'rest-api-example',
        title: 'REST API Example',
        description: 'Complete CRUD API with Express:',
        language: 'javascript',
        code: "const express = require('express')\nconst app = express()\n\napp.use(express.json())\n\nlet users = []\nlet nextId = 1\n\n// Get all users\napp.get('/api/users', (req, res) => {\n  res.json(users)\n})\n\n// Get single user\napp.get('/api/users/:id', (req, res) => {\n  const user = users.find((u) => u.id === parseInt(req.params.id))\n  if (!user) return res.status(404).json({ error: 'User not found' })\n  res.json(user)\n})\n\n// Create user\napp.post('/api/users', (req, res) => {\n  const user = {\n    id: nextId++,\n    name: req.body.name,\n    email: req.body.email,\n  }\n  users.push(user)\n  res.status(201).json(user)\n})\n\n// Update user\napp.put('/api/users/:id', (req, res) => {\n  const user = users.find((u) => u.id === parseInt(req.params.id))\n  if (!user) return res.status(404).json({ error: 'User not found' })\n\n  user.name = req.body.name || user.name\n  user.email = req.body.email || user.email\n  res.json(user)\n})\n\n// Delete user\napp.delete('/api/users/:id', (req, res) => {\n  const index = users.findIndex((u) => u.id === parseInt(req.params.id))\n  if (index === -1) return res.status(404).json({ error: 'User not found' })\n\n  users.splice(index, 1)\n  res.status(204).send()\n})\n\napp.listen(3000, () => console.log('Server running on port 3000'))",
      },
      {
        id: 'common-npm-packages',
        title: 'Common NPM Packages',
        description: 'Frequently used packages:',
        language: 'bash',
        code: '# Web framework\nnpm install express\n\n# Database\nnpm install mongoose        # MongoDB\nnpm install mysql2          # MySQL\nnpm install pg              # PostgreSQL\n\n# Authentication\nnpm install jsonwebtoken bcrypt\n\n# Environment variables\nnpm install dotenv\n\n# Validation\nnpm install joi\nnpm install express-validator\n\n# HTTP requests\nnpm install axios\n\n# File uploads\nnpm install multer\n\n# CORS\nnpm install cors\n\n# Logging\nnpm install morgan winston\n\n# Security\nnpm install helmet\n\n# Development\nnpm install --save-dev nodemon\nnpm install --save-dev jest',
      },
    ],
  },

  python: {
    lang: 'python',
    label: 'Python',
    title: 'Python',
    icon: '/python.svg',
    color: '#3776AB',
    sections: [
      {
        id: 'basic-syntax',
        title: 'Basic Syntax',
        description: 'Python code structure:',
        language: 'python',
        code: '# Single line comment\n"""\nMulti-line comment\nor docstring\n"""\n\n# Print output\nprint("Hello World")\nprint("Hello", "World")  # Multiple items\nprint("Hello", "World", sep=", ")  # Custom separator\n\n# Indentation matters (use 4 spaces, no semicolons needed)\nif True:\n    print("Indented code block")',
      },
      {
        id: 'variables',
        title: 'Variables',
        description: 'Store and use data:',
        language: 'python',
        code: '# Variable assignment (no need to declare type)\nname = "John"\nage = 25\nprice = 9.99\nis_active = True\n\n# Multiple assignment\nx, y, z = 1, 2, 3\na = b = c = 0\n\n# Check type\ntype(name)  # <class \'str\'>\n\n# Type conversion\nint("42")       # 42\nfloat("3.14")   # 3.14\nstr(42)         # "42"\nbool(1)         # True\n\n# Constants (by convention, use uppercase)\nPI = 3.14159\nMAX_SIZE = 100',
      },
      {
        id: 'data-types',
        title: 'Data Types',
        description: 'Different types of values:',
        language: 'python',
        code: '# String\ntext = "Hello World"\ntext2 = \'Single quotes work too\'\ntext3 = """Multi-line\nstring"""\n\n# Integer\nnumber = 42\nnegative = -10\n\n# Float\ndecimal = 3.14\nscientific = 1.5e3  # 1500.0\n\n# Boolean\nis_true = True\nis_false = False\n\n# List (mutable, ordered)\nfruits = ["apple", "banana", "orange"]\n\n# Tuple (immutable, ordered)\ncoordinates = (10, 20)\n\n# Dictionary (key-value pairs)\nperson = {"name": "John", "age": 30}\n\n# Set (unique values, unordered)\nunique_numbers = {1, 2, 3, 4}\n\n# None (represents null/empty)\nempty = None\n\n# Check type\nisinstance(name, str)      # True\nisinstance(age, int)        # True',
      },
      {
        id: 'strings',
        title: 'Strings',
        description: 'Working with text:',
        language: 'python',
        code: 'text = "Hello World"\n\n# String length\nlen(text)                  # 11\n\n# Uppercase and lowercase\ntext.upper()                # "HELLO WORLD"\ntext.lower()                # "hello world"\ntext.title()                # "Hello World"\ntext.capitalize()           # "Hello world"\n\n# Trim whitespace\n"  hello  ".strip()         # "hello"\n"  hello  ".lstrip()        # "hello  "\n"  hello  ".rstrip()        # "  hello"\n\n# Check content\ntext.startswith("Hello")    # True\ntext.endswith("World")      # True\n"World" in text              # True (contains)\n\n# Find position\ntext.find("World")          # 6\ntext.index("World")         # 6 (raises error if not found)\n\n# Replace text\ntext.replace("World", "Python")  # "Hello Python"\n\n# Split string into list\ntext.split(" ")             # ["Hello", "World"]\n"a,b,c".split(",")           # ["a", "b", "c"]\n\n# Join list into string\n" ".join(["Hello", "World"])  # "Hello World"\n",".join(["a", "b", "c"])      # "a,b,c"\n\n# String formatting (f-strings, modern way)\nname = "John"\nage = 30\nf"My name is {name} and I am {age} years old"\n\n# Format method\n"My name is {} and I am {}".format(name, age)\n\n# % formatting (older way)\n"My name is %s and I am %d" % (name, age)\n\n# String repetition\n"Ha" * 3  # "HaHaHa"\n\n# Reverse string\ntext[::-1]\n\n# Slicing\ntext[0:5]     # "Hello"\ntext[6:]      # "World"\ntext[:5]      # "Hello"\ntext[-5:]     # "World"\n\n# Check if numeric/alpha\n"123".isdigit()   # True\n"abc".isalpha()   # True\n"abc123".isalnum() # True',
      },
      {
        id: 'numbers',
        title: 'Numbers',
        description: 'Working with numbers:',
        language: 'python',
        code: '# Math operations\nsum_result = 5 + 3        # 8\ndiff = 5 - 3               # 2\nproduct = 5 * 3            # 15\nquotient = 6 / 3            # 2.0 (always returns float)\nfloor_div = 7 // 2          # 3 (integer division)\nremainder = 7 % 3           # 1 (modulus)\npower = 2 ** 3               # 8 (exponent)\n\n# Increment (no ++ in Python)\ncount = 0\ncount += 1                  # 1\ncount -= 1                  # 0\ncount *= 2                  # 0\ncount /= 2                  # 0.0\n\n# Built-in math functions\nabs(-5)                     # 5\nround(3.7)                  # 4\nround(3.14159, 2)           # 3.14\nmax(1, 5, 3)                 # 5\nmin(1, 5, 3)                 # 1\nsum([1, 2, 3])                # 6\npow(2, 3)                    # 8\n\n# Math module\nimport math\nmath.sqrt(16)                # 4.0\nmath.floor(4.7)              # 4\nmath.ceil(4.3)                # 5\nmath.pi                       # 3.14159...\n\n# Random numbers\nimport random\nrandom.random()               # Random float 0-1\nrandom.randint(1, 10)          # Random int between 1-10\nrandom.choice([1, 2, 3])       # Random item from list',
      },
      {
        id: 'lists',
        title: 'Lists',
        description: 'Working with ordered, mutable collections:',
        language: 'python',
        code: 'fruits = ["apple", "banana", "orange"]\n\n# Access elements\nfruits[0]                   # "apple"\nfruits[-1]                  # "orange" (last item)\n\n# List length\nlen(fruits)                 # 3\n\n# Add elements\nfruits.append("grape")            # Add to end\nfruits.insert(0, "mango")         # Add at specific index\n\n# Remove elements\nfruits.remove("banana")           # Remove by value\nfruits.pop()                       # Remove and return last item\nfruits.pop(0)                      # Remove and return item at index\ndel fruits[0]                      # Delete by index\n\n# Check existence\n"apple" in fruits                 # True\n\n# Find index\nfruits.index("apple")             # 0\n\n# Sort\nfruits.sort()                      # Sort ascending\nfruits.sort(reverse=True)          # Sort descending\nsorted(fruits)                     # Return new sorted list\n\n# Reverse\nfruits.reverse()\n\n# Copy list\nfruits_copy = fruits.copy()\nfruits_copy = fruits[:]\n\n# Slicing\nfruits[0:2]                 # First 2 items\nfruits[1:]                   # From index 1 to end\nfruits[:2]                   # From start to index 2\nfruits[::-1]                  # Reversed list\n\n# List comprehension (create list from loop)\nsquares = [x**2 for x in range(5)]           # [0, 1, 4, 9, 16]\nevens = [x for x in range(10) if x % 2 == 0]  # [0, 2, 4, 6, 8]\n\n# Combine lists\ncombined = fruits + ["kiwi", "pear"]\nfruits.extend(["kiwi", "pear"])\n\n# Count occurrences\nfruits.count("apple")\n\n# Clear list\nfruits.clear()\n\n# Loop through list\nfor fruit in fruits:\n    print(fruit)\n\n# Loop with index\nfor index, fruit in enumerate(fruits):\n    print(index, fruit)',
      },
      {
        id: 'tuples',
        title: 'Tuples',
        description: 'Immutable ordered collections:',
        language: 'python',
        code: 'coordinates = (10, 20)\n\n# Access elements\ncoordinates[0]               # 10\n\n# Unpacking\nx, y = coordinates\n\n# Tuple with one item (needs comma)\nsingle = (5,)\n\n# Cannot modify (immutable)\n# coordinates[0] = 5  # Error!\n\n# Convert list to tuple\ntuple([1, 2, 3])\n\n# Convert tuple to list\nlist((1, 2, 3))',
      },
      {
        id: 'dictionaries',
        title: 'Dictionaries',
        description: 'Key-value pair collections:',
        language: 'python',
        code: 'person = {"name": "John", "age": 30, "city": "New York"}\n\n# Access values\nperson["name"]               # "John"\nperson.get("name")           # "John"\nperson.get("email", "N/A")   # "N/A" (default if not found)\n\n# Add or update\nperson["email"] = "john@example.com"\nperson["age"] = 31\n\n# Remove key\ndel person["city"]\nperson.pop("city")\n\n# Check if key exists\n"name" in person              # True\n\n# Get all keys, values, items\nperson.keys()                 # dict_keys([\'name\', \'age\', \'email\'])\nperson.values()               # dict_values([\'John\', 31, \'john@example.com\'])\nperson.items()                # dict_items([(\'name\', \'John\'), ...])\n\n# Loop through dictionary\nfor key in person:\n    print(key, person[key])\n\nfor key, value in person.items():\n    print(key, value)\n\n# Dictionary comprehension\nsquares = {x: x**2 for x in range(5)}\n\n# Merge dictionaries\nperson2 = {"country": "USA"}\nmerged = {**person, **person2}\nperson.update(person2)\n\n# Nested dictionary\ndata = {\n    "user": {\n        "name": "John",\n        "age": 30\n    }\n}\ndata["user"]["name"]          # "John"\n\n# Copy dictionary\nperson_copy = person.copy()\n\n# Clear dictionary\nperson.clear()',
      },
      {
        id: 'sets',
        title: 'Sets',
        description: 'Unordered collections of unique items:',
        language: 'python',
        code: 'numbers = {1, 2, 3, 4}\n\n# Add items\nnumbers.add(5)\n\n# Remove items\nnumbers.remove(1)             # Error if not found\nnumbers.discard(1)            # No error if not found\n\n# Check existence\n3 in numbers                  # True\n\n# Set operations\nset1 = {1, 2, 3}\nset2 = {2, 3, 4}\n\nset1.union(set2)               # {1, 2, 3, 4}\nset1.intersection(set2)         # {2, 3}\nset1.difference(set2)            # {1}\nset1 | set2                     # Union (shorthand)\nset1 & set2                     # Intersection (shorthand)\n\n# Convert list to set (removes duplicates)\nunique = set([1, 2, 2, 3, 3])   # {1, 2, 3}',
      },
      {
        id: 'conditionals',
        title: 'Conditionals',
        description: 'Make decisions in code:',
        language: 'python',
        code: '# If statement\nage = 18\nif age >= 18:\n    print("Adult")\n\n# If-elif-else\nscore = 85\nif score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelif score >= 70:\n    print("C")\nelse:\n    print("F")\n\n# Comparison operators\n5 == 5      # True (equal)\n5 != 3      # True (not equal)\n5 > 3       # True (greater than)\n5 < 3       # False (less than)\n5 >= 5      # True (greater or equal)\n5 <= 3      # False (less or equal)\n\n# Logical operators\nage >= 18 and age < 65   # AND\nage < 18 or is_citizen     # OR\nnot is_student              # NOT\n\n# Ternary operator (conditional expression)\nstatus = "Adult" if age >= 18 else "Minor"\n\n# Membership test\n"apple" in fruits\n"grape" not in fruits\n\n# Multiple conditions with chaining\nif 18 <= age < 65:\n    print("Working age")\n\n# Check for None\nif value is None:\n    print("No value")\n\nif value is not None:\n    print("Has value")',
      },
      {
        id: 'loops',
        title: 'Loops',
        description: 'Repeat code multiple times:',
        language: 'python',
        code: '# For loop\nfor i in range(5):\n    print(i)  # 0, 1, 2, 3, 4\n\n# Range with start, stop, step\nfor i in range(2, 10, 2):\n    print(i)  # 2, 4, 6, 8\n\n# Loop through list\nfruits = ["apple", "banana", "orange"]\nfor fruit in fruits:\n    print(fruit)\n\n# Loop with index\nfor index, fruit in enumerate(fruits):\n    print(index, fruit)\n\n# Loop through string\nfor char in "Hello":\n    print(char)\n\n# Loop through dictionary\nperson = {"name": "John", "age": 30}\nfor key, value in person.items():\n    print(key, value)\n\n# While loop\ncount = 0\nwhile count < 5:\n    print(count)\n    count += 1\n\n# Break (exit loop)\nfor i in range(10):\n    if i == 5:\n        break\n    print(i)\n\n# Continue (skip iteration)\nfor i in range(5):\n    if i == 2:\n        continue\n    print(i)  # 0, 1, 3, 4\n\n# Else clause (runs if loop completes without break)\nfor i in range(5):\n    print(i)\nelse:\n    print("Loop completed")\n\n# Nested loops\nfor i in range(3):\n    for j in range(3):\n        print(i, j)',
      },
      {
        id: 'functions',
        title: 'Functions',
        description: 'Reusable blocks of code:',
        language: 'python',
        code: '# Basic function\ndef greet():\n    print("Hello!")\n\ngreet()\n\n# Function with parameters\ndef greet(name):\n    print(f"Hello, {name}!")\n\ngreet("John")\n\n# Function with return value\ndef add(a, b):\n    return a + b\n\nresult = add(5, 3)  # 8\n\n# Default parameters\ndef greet(name="Guest"):\n    return f"Hello, {name}!"\n\ngreet()          # "Hello, Guest!"\ngreet("John")    # "Hello, John!"\n\n# Multiple return values\ndef get_coordinates():\n    return 10, 20\n\nx, y = get_coordinates()\n\n# Variable number of arguments (*args)\ndef sum_all(*numbers):\n    return sum(numbers)\n\nsum_all(1, 2, 3, 4)  # 10\n\n# Keyword arguments (**kwargs)\ndef print_info(**info):\n    for key, value in info.items():\n        print(key, value)\n\nprint_info(name="John", age=30)\n\n# Combining *args and **kwargs\ndef function(*args, **kwargs):\n    print(args)\n    print(kwargs)\n\n# Type hints (optional but helpful)\ndef add(a: int, b: int) -> int:\n    return a + b\n\n# Lambda function (anonymous function)\nsquare = lambda x: x ** 2\nsquare(5)  # 25\n\nadd = lambda a, b: a + b\nadd(3, 5)  # 8\n\n# Using lambda with map, filter\nnumbers = [1, 2, 3, 4, 5]\ndoubled = list(map(lambda x: x * 2, numbers))\nevens = list(filter(lambda x: x % 2 == 0, numbers))\n\n# Docstring\ndef greet(name):\n    """This function greets a person by name."""\n    return f"Hello, {name}!"',
      },
      {
        id: 'classes-oop',
        title: 'Classes & OOP',
        description: 'Object-oriented programming:',
        language: 'python',
        code: '# Define class\nclass Person:\n    # Constructor\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n    # Method\n    def greet(self):\n        return f"Hello, my name is {self.name}"\n\n    # String representation\n    def __str__(self):\n        return f"Person({self.name}, {self.age})"\n\n# Create object\nperson = Person("John", 30)\nprint(person.name)         # "John"\nprint(person.greet())      # "Hello, my name is John"\n\n# Inheritance\nclass Student(Person):\n    def __init__(self, name, age, school):\n        super().__init__(name, age)  # Call parent constructor\n        self.school = school\n\n    def study(self):\n        return f"{self.name} is studying"\n\nstudent = Student("Jane", 20, "MIT")\nprint(student.greet())     # Inherited method\nprint(student.study())     # New method\n\n# Class variables (shared across instances)\nclass Counter:\n    count = 0  # Class variable\n\n    def __init__(self):\n        Counter.count += 1\n\n# Private attributes (convention: prefix with underscore)\nclass BankAccount:\n    def __init__(self, balance):\n        self._balance = balance  # "Private" by convention\n\n    def get_balance(self):\n        return self._balance\n\n# Property decorator (getter/setter)\nclass Circle:\n    def __init__(self, radius):\n        self._radius = radius\n\n    @property\n    def radius(self):\n        return self._radius\n\n    @radius.setter\n    def radius(self, value):\n        if value < 0:\n            raise ValueError("Radius cannot be negative")\n        self._radius = value\n\ncircle = Circle(5)\ncircle.radius = 10  # Uses setter\n\n# Static method (doesn\'t need instance)\nclass MathHelper:\n    @staticmethod\n    def add(a, b):\n        return a + b\n\nMathHelper.add(3, 5)  # Can call without creating instance\n\n# Class method\nclass Person:\n    count = 0\n\n    @classmethod\n    def get_count(cls):\n        return cls.count\n\n# Check instance type\nisinstance(person, Person)  # True',
      },
      {
        id: 'error-handling',
        title: 'Error Handling',
        description: 'Handle errors gracefully:',
        language: 'python',
        code: '# Try-except\ntry:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print("Cannot divide by zero")\n\n# Multiple exceptions\ntry:\n    value = int("abc")\nexcept ValueError:\n    print("Invalid value")\nexcept TypeError:\n    print("Type error")\n\n# Catch all exceptions\ntry:\n    risky_operation()\nexcept Exception as e:\n    print(f"Error: {e}")\n\n# Finally (always runs)\ntry:\n    file = open("file.txt")\nexcept FileNotFoundError:\n    print("File not found")\nfinally:\n    print("This always runs")\n\n# Else (runs if no exception)\ntry:\n    result = 10 / 2\nexcept ZeroDivisionError:\n    print("Error")\nelse:\n    print("Success:", result)\n\n# Raise custom exception\ndef check_age(age):\n    if age < 0:\n        raise ValueError("Age cannot be negative")\n    return age\n\n# Custom exception class\nclass CustomError(Exception):\n    pass\n\nraise CustomError("Something went wrong")',
      },
      {
        id: 'file-handling',
        title: 'File Handling',
        description: 'Read and write files:',
        language: 'python',
        code: '# Read entire file\nwith open("file.txt", "r") as file:\n    content = file.read()\n\n# Read line by line\nwith open("file.txt", "r") as file:\n    for line in file:\n        print(line.strip())\n\n# Read all lines into list\nwith open("file.txt", "r") as file:\n    lines = file.readlines()\n\n# Write to file (overwrites)\nwith open("file.txt", "w") as file:\n    file.write("Hello World")\n\n# Append to file\nwith open("file.txt", "a") as file:\n    file.write("New line\\n")\n\n# Write multiple lines\nwith open("file.txt", "w") as file:\n    file.writelines(["Line 1\\n", "Line 2\\n"])\n\n# Check if file exists\nimport os\nos.path.exists("file.txt")\n\n# Delete file\nos.remove("file.txt")\n\n# Working with CSV\nimport csv\n\nwith open("data.csv", "r") as file:\n    reader = csv.reader(file)\n    for row in reader:\n        print(row)\n\nwith open("data.csv", "w", newline="") as file:\n    writer = csv.writer(file)\n    writer.writerow(["Name", "Age"])\n    writer.writerow(["John", 30])',
      },
      {
        id: 'json',
        title: 'JSON',
        description: 'Work with JSON data:',
        language: 'python',
        code: 'import json\n\n# Python dict to JSON string\ndata = {"name": "John", "age": 30}\njson_string = json.dumps(data)\n\n# Pretty print JSON\njson_string = json.dumps(data, indent=4)\n\n# JSON string to Python dict\njson_data = \'{"name": "John", "age": 30}\'\ndata = json.loads(json_data)\n\n# Read JSON file\nwith open("data.json", "r") as file:\n    data = json.load(file)\n\n# Write JSON file\nwith open("data.json", "w") as file:\n    json.dump(data, file, indent=4)',
      },
      {
        id: 'modules-imports',
        title: 'Modules & Imports',
        description: 'Organize and reuse code:',
        language: 'python',
        code: '# Import entire module\nimport math\nmath.sqrt(16)\n\n# Import specific function\nfrom math import sqrt\nsqrt(16)\n\n# Import multiple items\nfrom math import sqrt, pi\n\n# Import with alias\nimport numpy as np\nimport pandas as pd\n\n# Import all (not recommended)\nfrom math import *\n\n# Custom module (mymodule.py)\ndef greet(name):\n    return f"Hello, {name}"\n\n# Import custom module\nimport mymodule\nmymodule.greet("John")\n\nfrom mymodule import greet\ngreet("John")\n\n# Common standard library modules\nimport os          # Operating system interface\nimport sys          # System-specific parameters\nimport datetime     # Date and time\nimport random        # Random numbers\nimport re             # Regular expressions\nimport time            # Time-related functions',
      },
      {
        id: 'working-with-dates',
        title: 'Working with Dates',
        description: 'Handle dates and times:',
        language: 'python',
        code: 'from datetime import datetime, date, timedelta\n\n# Current date and time\nnow = datetime.now()\ntoday = date.today()\n\n# Create specific date\nspecific_date = datetime(2024, 12, 25)\n\n# Format date\nnow.strftime("%Y-%m-%d")           # "2024-12-10"\nnow.strftime("%Y-%m-%d %H:%M:%S")  # "2024-12-10 15:30:45"\nnow.strftime("%B %d, %Y")           # "December 10, 2024"\n\n# Parse string to date\ndate_obj = datetime.strptime("2024-12-10", "%Y-%m-%d")\n\n# Date arithmetic\ntomorrow = today + timedelta(days=1)\nnext_week = today + timedelta(weeks=1)\ndifference = date(2024, 12, 31) - date(2024, 1, 1)\nprint(difference.days)  # Number of days\n\n# Get specific parts\nnow.year\nnow.month\nnow.day\nnow.hour\nnow.minute',
      },
      {
        id: 'regular-expressions',
        title: 'Regular Expressions',
        description: 'Pattern matching in strings:',
        language: 'python',
        code: "import re\n\n# Search for pattern\ntext = \"My email is john@example.com\"\nmatch = re.search(r'\\w+@\\w+\\.\\w+', text)\nif match:\n    print(match.group())  # \"john@example.com\"\n\n# Find all matches\nnumbers = re.findall(r'\\d+', \"I have 5 apples and 3 oranges\")\n# ['5', '3']\n\n# Replace pattern\nresult = re.sub(r'\\d+', 'X', \"I have 5 apples\")\n# \"I have X apples\"\n\n# Split by pattern\nparts = re.split(r'\\s+', \"Hello   World\")\n# ['Hello', 'World']\n\n# Check if matches\nif re.match(r'^\\d+$', \"12345\"):\n    print(\"Valid number\")\n\n# Common patterns\nr'\\d'        # Digit\nr'\\w'        # Word character\nr'\\s'        # Whitespace\nr'.'         # Any character\nr'+'         # One or more\nr'*'         # Zero or more\nr'?'         # Optional\nr'^'         # Start of string\nr'$'         # End of string",
      },
      {
        id: 'list-dict-comprehensions',
        title: 'List/Dict Comprehensions',
        description: 'Concise way to create collections:',
        language: 'python',
        code: '# List comprehension\nsquares = [x**2 for x in range(10)]\nevens = [x for x in range(20) if x % 2 == 0]\n\n# With if-else\nlabels = ["even" if x % 2 == 0 else "odd" for x in range(5)]\n\n# Nested comprehension\nmatrix = [[i*j for j in range(3)] for i in range(3)]\n\n# Dictionary comprehension\nsquares_dict = {x: x**2 for x in range(5)}\n\n# Set comprehension\nunique_squares = {x**2 for x in [-2, -1, 0, 1, 2]}\n\n# Generator expression (memory efficient)\ngen = (x**2 for x in range(10))',
      },
      {
        id: 'common-built-in-functions',
        title: 'Common Built-in Functions',
        description: 'Frequently used functions:',
        language: 'python',
        code: "len([1, 2, 3])              # 3 (length)\ntype(42)                     # <class 'int'>\nrange(5)                     # 0, 1, 2, 3, 4\nenumerate(['a', 'b'])        # (0, 'a'), (1, 'b')\nzip([1, 2], ['a', 'b'])      # (1, 'a'), (2, 'b')\nsorted([3, 1, 2])            # [1, 2, 3]\nreversed([1, 2, 3])          # 3, 2, 1\nsum([1, 2, 3])               # 6\nmax([1, 5, 3])               # 5\nmin([1, 5, 3])               # 1\nabs(-5)                       # 5\nall([True, True, False])     # False\nany([True, False, False])    # True\nmap(str, [1, 2, 3])          # ['1', '2', '3']\nfilter(lambda x: x > 2, [1, 2, 3, 4])  # [3, 4]\ninput(\"Enter name: \")         # Get user input",
      },
      {
        id: 'working-with-multiple-values',
        title: 'Working with Multiple Values',
        description: 'Common patterns for handling data:',
        language: 'python',
        code: '# Unpacking\na, b, c = [1, 2, 3]\nfirst, *rest = [1, 2, 3, 4]  # first=1, rest=[2,3,4]\n*start, last = [1, 2, 3, 4]  # start=[1,2,3], last=4\n\n# Swap values\na, b = 1, 2\na, b = b, a\n\n# Multiple assignments\nx = y = z = 0\n\n# Ignore values with underscore\n_, value = (1, "important")',
      },
    ],
  },

  angular: {
    lang: 'angular',
    label: 'Angular',
    title: 'Angular',
    icon: '/angular.svg',
    color: '#DD0031',
    sections: [
      {
        id: 'setup',
        title: 'Setup',
        description: 'Create a new Angular project:',
        language: 'bash',
        code: '# Install Angular CLI globally\nnpm install -g @angular/cli\n\n# Create new project\nng new my-app\ncd my-app\n\n# Start development server\nng serve\n\n# Generate components, services, etc.\nng generate component my-component\nng g c my-component  # Shorthand\n\nng generate service my-service\nng g s my-service',
      },
      {
        id: 'project-structure',
        title: 'Project Structure',
        description: 'Key folders and files:',
        language: 'typescript',
        code: 'src/\n  app/\n    app.component.ts       # Root component\n    app.component.html\n    app.component.css\n    app.module.ts          # Root module\n  assets/                  # Images, fonts, etc.\n  environments/            # Environment configs\n  index.html                # Main HTML file\n  main.ts                   # Entry point\nangular.json                 # Angular configuration\npackage.json',
      },
      {
        id: 'components',
        title: 'Components',
        description: 'Building blocks of Angular apps:',
        language: 'typescript',
        code: "// my-component.component.ts\nimport { Component } from '@angular/core'\n\n@Component({\n  selector: 'app-my-component',\n  templateUrl: './my-component.component.html',\n  styleUrls: ['./my-component.component.css'],\n})\nexport class MyComponentComponent {\n  title = 'Hello World'\n\n  constructor() {\n    // Initialization logic\n  }\n}\n\n<!-- my-component.component.html -->\n<h1>{{ title }}</h1>\n\n// Inline template and styles\n@Component({\n  selector: 'app-my-component',\n  template: `<h1>{{ title }}</h1>`,\n  styles: [\n    `\n      h1 {\n        color: blue;\n      }\n    `,\n  ],\n})\nexport class MyComponentComponent {\n  title = 'Hello World'\n}\n\n<!-- Use component in another template -->\n<app-my-component></app-my-component>",
      },
      {
        id: 'data-binding',
        title: 'Data Binding',
        description: 'Connect component data to templates:',
        language: 'typescript',
        code: 'export class AppComponent {\n  name = \'John\'\n  age = 30\n  isActive = true\n  imageUrl = \'image.jpg\'\n}\n\n<!-- Interpolation (one-way, component to view) -->\n<p>{{ name }}</p>\n<p>{{ age + 1 }}</p>\n<p>{{ isActive ? \'Active\' : \'Inactive\' }}</p>\n\n<!-- Property binding -->\n<img [src]="imageUrl" />\n<button [disabled]="isDisabled">Click</button>\n<div [class.active]="isActive">Content</div>\n<div [style.color]="textColor">Content</div>\n\n<!-- Event binding (view to component) -->\n<button (click)="handleClick()">Click Me</button>\n<input (keyup)="handleKeyUp($event)" />\n<form (submit)="handleSubmit()">Submit</form>\n\n<!-- Two-way binding (requires FormsModule) -->\n<input [(ngModel)]="name" />\n<p>Hello, {{ name }}!</p>',
      },
      {
        id: 'directives',
        title: 'Directives',
        description: 'Add behavior to elements:',
        language: 'html',
        code: '<!-- *ngIf - conditional rendering -->\n<p *ngIf="isLoggedIn">Welcome back!</p>\n<p *ngIf="!isLoggedIn">Please log in</p>\n\n<!-- *ngIf with else -->\n<div *ngIf="isLoggedIn; else loggedOut">Welcome!</div>\n<ng-template #loggedOut>\n  <p>Please log in</p>\n</ng-template>\n\n<!-- *ngFor - loop through items -->\n<li *ngFor="let item of items">{{ item }}</li>\n\n<!-- *ngFor with index -->\n<li *ngFor="let item of items; let i = index">{{ i }}: {{ item }}</li>\n\n<!-- *ngFor with trackBy (performance optimization) -->\n<li *ngFor="let item of items; trackBy: trackByFn">{{ item.name }}</li>\n\ntrackByFn(index: number, item: any) {\n    return item.id;\n}\n\n<!-- ngClass - dynamic classes -->\n<div [ngClass]="{\'active\': isActive, \'error\': hasError}">Content</div>\n<div [ngClass]="[\'class1\', \'class2\']">Content</div>\n\n<!-- ngStyle - dynamic styles -->\n<div [ngStyle]="{\'color\': textColor, \'font-size\': fontSize + \'px\'}">Content</div>\n\n<!-- ngSwitch - conditional switching -->\n<div [ngSwitch]="status">\n  <p *ngSwitchCase="\'active\'">Active</p>\n  <p *ngSwitchCase="\'pending\'">Pending</p>\n  <p *ngSwitchDefault>Unknown</p>\n</div>',
      },
      {
        id: 'component-communication-input-output',
        title: 'Component Communication (Input/Output)',
        description: 'Pass data between components:',
        language: 'typescript',
        code: "// child.component.ts\nimport { Component, Input, Output, EventEmitter } from '@angular/core'\n\n@Component({\n  selector: 'app-child',\n  template: `\n    <p>{{ message }}</p>\n    <button (click)=\"sendUpdate()\">Update Parent</button>\n  `,\n})\nexport class ChildComponent {\n  @Input() message: string = ''\n  @Output() update = new EventEmitter<string>()\n\n  sendUpdate() {\n    this.update.emit('New value from child')\n  }\n}\n\n<!-- parent.component.html -->\n<app-child [message]=\"parentMessage\" (update)=\"handleUpdate($event)\"> </app-child>\n\n// parent.component.ts\nexport class ParentComponent {\n  parentMessage = 'Hello from parent'\n\n  handleUpdate(value: string) {\n    console.log('Received:', value)\n  }\n}",
      },
      {
        id: 'services',
        title: 'Services',
        description: 'Share data and logic across components:',
        language: 'typescript',
        code: "ng generate service data\n\n// data.service.ts\nimport { Injectable } from '@angular/core'\n\n@Injectable({\n  providedIn: 'root', // Available app-wide\n})\nexport class DataService {\n  private data: string[] = []\n\n  getData() {\n    return this.data\n  }\n\n  addData(item: string) {\n    this.data.push(item)\n  }\n}\n\n// Using service in a component\nimport { Component } from '@angular/core'\nimport { DataService } from './data.service'\n\n@Component({\n  selector: 'app-my-component',\n  template: `<div>{{ items }}</div>`,\n})\nexport class MyComponent {\n  items: string[] = []\n\n  // Dependency injection through constructor\n  constructor(private dataService: DataService) {\n    this.items = this.dataService.getData()\n  }\n}",
      },
      {
        id: 'lifecycle-hooks',
        title: 'Lifecycle Hooks',
        description: 'Run code at specific component stages:',
        language: 'typescript',
        code: "import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core'\n\nexport class MyComponent implements OnInit, OnDestroy, AfterViewInit {\n  ngOnInit() {\n    console.log('Component initialized')\n    // Good place for API calls, initial setup\n  }\n\n  ngOnChanges(changes) {\n    console.log('Input properties changed', changes)\n  }\n\n  ngAfterViewInit() {\n    console.log('View initialized')\n    // DOM is ready\n  }\n\n  ngOnDestroy() {\n    console.log('Component destroyed')\n    // Cleanup: unsubscribe, clear timers\n  }\n}",
      },
      {
        id: 'forms-template-driven',
        title: 'Forms (Template-Driven)',
        description: 'Simple forms using ngModel:',
        language: 'typescript',
        code: '// Import in module\nimport { FormsModule } from \'@angular/forms\';\n\n@NgModule({\n    imports: [FormsModule]\n})\n\n<form (ngSubmit)="onSubmit()" #myForm="ngForm">\n  <input name="username" [(ngModel)]="user.username" required minlength="3" />\n\n  <input name="email" [(ngModel)]="user.email" required email />\n\n  <button type="submit" [disabled]="!myForm.valid">Submit</button>\n</form>\n\nexport class MyComponent {\n  user = { username: \'\', email: \'\' }\n\n  onSubmit() {\n    console.log(this.user)\n  }\n}',
      },
      {
        id: 'forms-reactive',
        title: 'Forms (Reactive)',
        description: 'More powerful, code-driven forms:',
        language: 'typescript',
        code: "// Import in module\nimport { ReactiveFormsModule } from '@angular/forms';\n\n@NgModule({\n    imports: [ReactiveFormsModule]\n})\n\nimport { FormGroup, FormControl, Validators } from '@angular/forms'\n\nexport class MyComponent {\n  myForm = new FormGroup({\n    username: new FormControl('', [Validators.required, Validators.minLength(3)]),\n    email: new FormControl('', [Validators.required, Validators.email]),\n  })\n\n  onSubmit() {\n    if (this.myForm.valid) {\n      console.log(this.myForm.value)\n    }\n  }\n\n  get username() {\n    return this.myForm.get('username')\n  }\n}\n\n<form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n  <input formControlName=\"username\" />\n  <div *ngIf=\"username?.invalid && username?.touched\">Username is required</div>\n\n  <input formControlName=\"email\" />\n  <button type=\"submit\" [disabled]=\"myForm.invalid\">Submit</button>\n</form>\n\n// FormBuilder (cleaner syntax)\nimport { FormBuilder } from '@angular/forms'\n\nexport class MyComponent {\n  myForm\n\n  constructor(private fb: FormBuilder) {\n    this.myForm = this.fb.group({\n      username: ['', Validators.required],\n      email: ['', [Validators.required, Validators.email]],\n    })\n  }\n}",
      },
      {
        id: 'http-client',
        title: 'HTTP Client',
        description: 'Make API requests:',
        language: 'typescript',
        code: "// Import in module\nimport { HttpClientModule } from '@angular/common/http';\n\n@NgModule({\n    imports: [HttpClientModule]\n})\n\nimport { HttpClient } from '@angular/common/http'\nimport { Injectable } from '@angular/core'\n\n@Injectable({\n  providedIn: 'root',\n})\nexport class ApiService {\n  private apiUrl = 'https://api.example.com'\n\n  constructor(private http: HttpClient) {}\n\n  // GET request\n  getUsers() {\n    return this.http.get(`${this.apiUrl}/users`)\n  }\n\n  // GET with type\n  getUsersTyped() {\n    return this.http.get<User[]>(`${this.apiUrl}/users`)\n  }\n\n  // POST request\n  createUser(user: any) {\n    return this.http.post(`${this.apiUrl}/users`, user)\n  }\n\n  // PUT request\n  updateUser(id: number, user: any) {\n    return this.http.put(`${this.apiUrl}/users/${id}`, user)\n  }\n\n  // DELETE request\n  deleteUser(id: number) {\n    return this.http.delete(`${this.apiUrl}/users/${id}`)\n  }\n}\n\n// Using the service in a component\nexport class MyComponent implements OnInit {\n  users: any[] = []\n\n  constructor(private apiService: ApiService) {}\n\n  ngOnInit() {\n    this.apiService.getUsers().subscribe((data) => {\n      this.users = data as any[]\n    })\n  }\n}",
      },
      {
        id: 'observables-rxjs',
        title: 'Observables & RxJS',
        description: 'Handle asynchronous data streams:',
        language: 'typescript',
        code: "import { Observable, of, Subject } from 'rxjs'\nimport { map, filter, catchError } from 'rxjs/operators'\n\n// Create observable\nconst myObservable = new Observable((observer) => {\n  observer.next('Hello')\n  observer.next('World')\n  observer.complete()\n})\n\n// Subscribe to observable\nmyObservable.subscribe((value) => console.log(value))\n\n// Subscribe with error handling\nmyObservable.subscribe({\n  next: (value) => console.log(value),\n  error: (err) => console.error(err),\n  complete: () => console.log('Done'),\n})\n\n// Unsubscribe (important to prevent memory leaks)\nconst subscription = myObservable.subscribe((value) => console.log(value))\nsubscription.unsubscribe()\n\n// Common RxJS operators\nthis.apiService\n  .getUsers()\n  .pipe(\n    map((users) => users.filter((u) => u.active)),\n    catchError((error) => {\n      console.error(error)\n      return of([])\n    }),\n  )\n  .subscribe((users) => (this.users = users))\n\n// Subject (can emit values manually)\nconst subject = new Subject()\nsubject.subscribe((value) => console.log('Sub 1:', value))\nsubject.next('Hello') // Emits to all subscribers\n\n// Async pipe (auto-subscribe/unsubscribe in template)\nusers$ = this.apiService.getUsers()\n\n<div *ngFor=\"let user of users$ | async\">{{ user.name }}</div>",
      },
      {
        id: 'routing',
        title: 'Routing',
        description: 'Navigate between pages:',
        language: 'typescript',
        code: "// app-routing.module.ts\nimport { NgModule } from '@angular/core'\nimport { RouterModule, Routes } from '@angular/router'\nimport { HomeComponent } from './home/home.component'\nimport { AboutComponent } from './about/about.component'\n\nconst routes: Routes = [\n  { path: '', component: HomeComponent },\n  { path: 'about', component: AboutComponent },\n  { path: 'user/:id', component: UserComponent },\n  { path: '**', component: NotFoundComponent }, // Wildcard/404\n]\n\n@NgModule({\n  imports: [RouterModule.forRoot(routes)],\n  exports: [RouterModule],\n})\nexport class AppRoutingModule {}\n\n<!-- app.component.html -->\n<nav>\n  <a routerLink=\"/\">Home</a>\n  <a routerLink=\"/about\">About</a>\n  <a [routerLink]=\"['/user', userId]\">User</a>\n</nav>\n\n<router-outlet></router-outlet>\n\n// Programmatic navigation\nimport { Router, ActivatedRoute } from '@angular/router'\n\nexport class MyComponent {\n  constructor(\n    private router: Router,\n    private route: ActivatedRoute,\n  ) {}\n\n  navigate() {\n    this.router.navigate(['/about'])\n    this.router.navigate(['/user', 123])\n  }\n\n  ngOnInit() {\n    // Get route parameter\n    const id = this.route.snapshot.paramMap.get('id')\n\n    // Or subscribe to changes\n    this.route.paramMap.subscribe((params) => {\n      const id = params.get('id')\n    })\n  }\n}\n\n<!-- Active link styling -->\n<a routerLink=\"/\" routerLinkActive=\"active\">Home</a>",
      },
      {
        id: 'pipes',
        title: 'Pipes',
        description: 'Transform data in templates:',
        language: 'html',
        code: "<!-- Built-in pipes -->\n<p>{{ name | uppercase }}</p>\n<p>{{ name | lowercase }}</p>\n<p>{{ price | currency }}</p>\n<p>{{ price | currency:'EUR' }}</p>\n<p>{{ date | date }}</p>\n<p>{{ date | date:'short' }}</p>\n<p>{{ date | date:'yyyy-MM-dd' }}</p>\n<p>{{ number | number:'1.2-2' }}</p>\n<p>{{ percentage | percent }}</p>\n<p>{{ items | json }}</p>\n<p>{{ text | slice:0:5 }}</p>\n\n<!-- Chaining pipes -->\n<p>{{ name | uppercase | slice:0:5 }}</p>\n\n<!-- Async pipe -->\n<div>{{ data$ | async }}</div>\n\n// Custom pipe\nimport { Pipe, PipeTransform } from '@angular/core'\n\n@Pipe({ name: 'truncate' })\nexport class TruncatePipe implements PipeTransform {\n  transform(value: string, limit: number = 20): string {\n    return value.length > limit ? value.substring(0, limit) + '...' : value\n  }\n}\n\n<!-- Using custom pipe -->\n<p>{{ longText | truncate:50 }}</p>",
      },
      {
        id: 'modules',
        title: 'Modules',
        description: 'Organize application into functional blocks:',
        language: 'typescript',
        code: "// app.module.ts\nimport { NgModule } from '@angular/core'\nimport { BrowserModule } from '@angular/platform-browser'\nimport { FormsModule } from '@angular/forms'\nimport { HttpClientModule } from '@angular/common/http'\n\nimport { AppComponent } from './app.component'\nimport { HomeComponent } from './home/home.component'\n\n@NgModule({\n  declarations: [AppComponent, HomeComponent],\n  imports: [BrowserModule, FormsModule, HttpClientModule],\n  providers: [],\n  bootstrap: [AppComponent],\n})\nexport class AppModule {}\n\n# Generate feature module\nng generate module users\nng g module users --routing\n\n// Feature module\n@NgModule({\n  declarations: [UserListComponent, UserDetailComponent],\n  imports: [CommonModule, RouterModule],\n  exports: [UserListComponent],\n})\nexport class UsersModule {}",
      },
      {
        id: 'dependency-injection',
        title: 'Dependency Injection',
        description: 'Provide services to components:',
        language: 'typescript',
        code: "// Service with providedIn (app-wide, recommended)\n@Injectable({\n  providedIn: 'root',\n})\nexport class MyService {}\n\n// Provide at component level (new instance per component)\n@Component({\n  selector: 'app-my-component',\n  providers: [MyService],\n})\nexport class MyComponent {\n  constructor(private myService: MyService) {}\n}\n\n// Provide at module level\n@NgModule({\n  providers: [MyService],\n})\nexport class AppModule {}\n\n// Injecting multiple services\nexport class MyComponent {\n  constructor(\n    private http: HttpClient,\n    private router: Router,\n    private dataService: DataService,\n  ) {}\n}",
      },
      {
        id: 'content-projection-ng-content',
        title: 'Content Projection (ng-content)',
        description: 'Pass content into components:',
        language: 'typescript',
        code: '// card.component.ts\n@Component({\n  selector: \'app-card\',\n  template: `\n    <div class="card">\n      <ng-content></ng-content>\n    </div>\n  `,\n})\nexport class CardComponent {}\n\n<!-- Using the component -->\n<app-card>\n  <h2>Title</h2>\n  <p>Content goes here</p>\n</app-card>\n\n<!-- Multiple content slots (named) -->\n<div class="card">\n  <div class="header">\n    <ng-content select="[card-header]"></ng-content>\n  </div>\n  <div class="body">\n    <ng-content></ng-content>\n  </div>\n</div>\n\n<app-card>\n  <div card-header>Header Content</div>\n  <p>Body content</p>\n</app-card>',
      },
      {
        id: 'viewchild-elementref',
        title: 'ViewChild & ElementRef',
        description: 'Access DOM elements and child components:',
        language: 'typescript',
        code: "import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core'\n\n@Component({\n  selector: 'app-my-component',\n  template: `<input #myInput type=\"text\" />`,\n})\nexport class MyComponent implements AfterViewInit {\n  @ViewChild('myInput') inputElement!: ElementRef\n\n  ngAfterViewInit() {\n    this.inputElement.nativeElement.focus()\n  }\n}\n\n// Access child component\n@Component({\n  template: `<app-child #childComp></app-child>`,\n})\nexport class ParentComponent {\n  @ViewChild('childComp') child!: ChildComponent\n\n  callChildMethod() {\n    this.child.someMethod()\n  }\n}",
      },
      {
        id: 'guards',
        title: 'Guards',
        description: 'Protect routes:',
        language: 'typescript',
        code: "ng generate guard auth\n\n// auth.guard.ts\nimport { Injectable } from '@angular/core'\nimport { CanActivate, Router } from '@angular/router'\n\n@Injectable({\n  providedIn: 'root',\n})\nexport class AuthGuard implements CanActivate {\n  constructor(private router: Router) {}\n\n  canActivate(): boolean {\n    const isLoggedIn = !!localStorage.getItem('token')\n    if (!isLoggedIn) {\n      this.router.navigate(['/login'])\n      return false\n    }\n    return true\n  }\n}\n\n// Use guard in routes\nconst routes: Routes = [\n  {\n    path: 'dashboard',\n    component: DashboardComponent,\n    canActivate: [AuthGuard],\n  },\n]",
      },
      {
        id: 'interceptors',
        title: 'Interceptors',
        description: 'Modify HTTP requests/responses globally:',
        language: 'typescript',
        code: "import { Injectable } from '@angular/core'\nimport { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http'\n\n@Injectable()\nexport class AuthInterceptor implements HttpInterceptor {\n  intercept(req: HttpRequest<any>, next: HttpHandler) {\n    const token = localStorage.getItem('token')\n\n    const authReq = req.clone({\n      headers: req.headers.set('Authorization', `Bearer ${token}`),\n    })\n\n    return next.handle(authReq)\n  }\n}\n\n// Register in app.module.ts\nimport { HTTP_INTERCEPTORS } from '@angular/common/http';\n\n@NgModule({\n    providers: [\n        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }\n    ]\n})",
      },
      {
        id: 'common-patterns',
        title: 'Common Patterns',
        description: 'Frequently used patterns:',
        language: 'typescript',
        code: '// Loading state pattern\nexport class MyComponent implements OnInit {\n  loading = true\n  error: string | null = null\n  data: any[] = []\n\n  constructor(private apiService: ApiService) {}\n\n  ngOnInit() {\n    this.apiService.getData().subscribe({\n      next: (data) => {\n        this.data = data\n        this.loading = false\n      },\n      error: (err) => {\n        this.error = err.message\n        this.loading = false\n      },\n    })\n  }\n}\n\n<div *ngIf="loading">Loading...</div>\n<div *ngIf="error">{{ error }}</div>\n<div *ngIf="!loading && !error">\n  <div *ngFor="let item of data">{{ item.name }}</div>\n</div>\n\n// Unsubscribe pattern (prevent memory leaks)\nimport { Subscription } from \'rxjs\'\n\nexport class MyComponent implements OnInit, OnDestroy {\n  private subscription!: Subscription\n\n  ngOnInit() {\n    this.subscription = this.dataService.getData().subscribe((data) => {\n      // Handle data\n    })\n  }\n\n  ngOnDestroy() {\n    this.subscription.unsubscribe()\n  }\n}\n\n// Component communication via service\n@Injectable({ providedIn: \'root\' })\nexport class SharedService {\n  private messageSource = new Subject<string>()\n  message$ = this.messageSource.asObservable()\n\n  sendMessage(message: string) {\n    this.messageSource.next(message)\n  }\n}',
      },
      {
        id: 'angular-cli-commands',
        title: 'Angular CLI Commands',
        description: 'Common CLI commands:',
        language: 'bash',
        code: '# Create new project\nng new my-app\n\n# Generate files\nng generate component my-component\nng generate service my-service\nng generate module my-module\nng generate directive my-directive\nng generate pipe my-pipe\nng generate guard my-guard\nng generate interface my-interface\n\n# Shorthand\nng g c my-component\nng g s my-service\n\n# Run development server\nng serve\nng serve --open  # Opens browser automatically\nng serve --port 4300\n\n# Build for production\nng build\nng build --configuration production\n\n# Run tests\nng test\nng e2e\n\n# Update Angular\nng update\n\n# Add packages\nng add @angular/material',
      },
    ],
  },

  csharp: {
    lang: 'csharp',
    label: 'C#',
    title: 'C#',
    icon: '/csharp.svg',
    color: '#68217A',
    sections: [
      {
        id: 'setup',
        title: 'Setup',
        description: 'Create a new C# project:',
        language: 'bash',
        code: '# Install .NET SDK, then check version\ndotnet --version\n\n# Create a new console project\ndotnet new console -o MyApp\ncd MyApp\n\n# Run the project\ndotnet run\n\n# Build the project\ndotnet build\n\n# Create other project types\ndotnet new webapi -o MyApi\ndotnet new mvc -o MyMvcApp\ndotnet new classlib -o MyLibrary',
      },
      {
        id: 'basic-syntax',
        title: 'Basic Syntax',
        description: 'C# code structure:',
        language: 'csharp',
        code: '// Single line comment\n/* Multi-line\n   comment */\n\nusing System;\n\nnamespace MyApp\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            Console.WriteLine("Hello World");\n        }\n    }\n}\n\n// Modern top-level statements (C# 9+, no Main method needed)\nConsole.WriteLine("Hello World");',
      },
      {
        id: 'variables',
        title: 'Variables',
        description: 'Store and use data:',
        language: 'csharp',
        code: '// Explicit typing\nint age = 25;\nstring name = "John";\ndouble price = 9.99;\nbool isActive = true;\nchar grade = \'A\';\n\n// Implicit typing (var - type inferred)\nvar count = 10;\nvar message = "Hello";\n\n// Constants (cannot be changed)\nconst double PI = 3.14159;\n\n// Multiple variables\nint x = 1, y = 2, z = 3;\n\n// Nullable types\nint? nullableAge = null;\nstring? nullableName = null;\n\n// Default values\nint defaultInt = default;  // 0\nstring defaultString = default;  // null',
      },
      {
        id: 'data-types',
        title: 'Data Types',
        description: 'Common data types in C#:',
        language: 'csharp',
        code: '// Numeric types\nint number = 42;                  // 32-bit integer\nlong bigNumber = 123456789L;      // 64-bit integer\nshort smallNumber = 100;          // 16-bit integer\nbyte tinyNumber = 255;            // 8-bit unsigned\nfloat decimal1 = 3.14f;           // Single precision\ndouble decimal2 = 3.14159;        // Double precision\ndecimal money = 19.99m;           // High precision (for currency)\n\n// Text types\nstring text = "Hello World";\nchar letter = \'A\';\n\n// Boolean\nbool isTrue = true;\n\n// Arrays\nint[] numbers = { 1, 2, 3, 4, 5 };\nstring[] names = new string[3];\n\n// Type conversion\nint num = Convert.ToInt32("42");\nstring str = Convert.ToString(42);\ndouble d = Convert.ToDouble("3.14");\n\n// Parsing\nint parsed = int.Parse("42");\nbool success = int.TryParse("42", out int result);\n\n// Type checking\nobject obj = 42;\nif (obj is int) { }\nType type = obj.GetType();',
      },
      {
        id: 'strings',
        title: 'Strings',
        description: 'Working with text:',
        language: 'csharp',
        code: 'string text = "Hello World";\n\n// String length\ntext.Length;                        // 11\n\n// Uppercase and lowercase\ntext.ToUpper();                     // "HELLO WORLD"\ntext.ToLower();                     // "hello world"\n\n// Trim whitespace\n"  hello  ".Trim();                 // "hello"\n"  hello  ".TrimStart();\n"  hello  ".TrimEnd();\n\n// Check content\ntext.Contains("World");             // true\ntext.StartsWith("Hello");           // true\ntext.EndsWith("World");             // true\n\n// Find position\ntext.IndexOf("World");              // 6\n\n// Substring\ntext.Substring(0, 5);               // "Hello"\ntext.Substring(6);                  // "World"\n\n// Replace\ntext.Replace("World", "C#");        // "Hello C#"\n\n// Split\nstring[] words = text.Split(\' \');   // ["Hello", "World"]\n\n// Join\nstring joined = string.Join(", ", words);  // "Hello, World"\n\n// String interpolation (modern way)\nstring name = "John";\nint age = 30;\nstring message = $"My name is {name} and I am {age} years old";\n\n// String.Format (older way)\nstring message2 = string.Format("My name is {0} and I am {1}", name, age);\n\n// Concatenation\nstring full = "Hello" + " " + "World";\nstring full2 = string.Concat("Hello", " ", "World");\n\n// StringBuilder (efficient for many concatenations)\nusing System.Text;\nStringBuilder sb = new StringBuilder();\nsb.Append("Hello");\nsb.Append(" World");\nstring result = sb.ToString();\n\n// Check null or empty\nstring.IsNullOrEmpty(text);\nstring.IsNullOrWhiteSpace(text);\n\n// Comparison\nstring.Equals(text, "Hello World");\ntext.Equals("hello world", StringComparison.OrdinalIgnoreCase);',
      },
      {
        id: 'numbers',
        title: 'Numbers',
        description: 'Working with numbers:',
        language: 'csharp',
        code: '// Math operations\nint sum = 5 + 3;              // 8\nint diff = 5 - 3;             // 2\nint product = 5 * 3;          // 15\nint quotient = 6 / 3;         // 2\nint remainder = 7 % 3;        // 1\ndouble power = Math.Pow(2, 3);  // 8\n\n// Increment/decrement\nint count = 0;\ncount++;                       // 1\ncount--;                       // 0\ncount += 5;                    // 5\ncount -= 2;                    // 3\n\n// Math class\nMath.Abs(-5);                  // 5\nMath.Round(3.7);               // 4\nMath.Ceiling(3.3);             // 4\nMath.Floor(3.7);               // 3\nMath.Max(1, 5);                // 5\nMath.Min(1, 5);                // 1\nMath.Sqrt(16);                 // 4\n\n// Random numbers\nRandom random = new Random();\nint randomNum = random.Next(1, 100);  // Between 1-99\ndouble randomDouble = random.NextDouble();\n\n// Formatting numbers\ndouble price = 19.99;\nprice.ToString("C");           // Currency format "$19.99"\nprice.ToString("N2");          // "19.99"\nprice.ToString("F2");          // "19.99"',
      },
      {
        id: 'arrays',
        title: 'Arrays',
        description: 'Working with fixed-size collections:',
        language: 'csharp',
        code: '// Declare and initialize\nint[] numbers = { 1, 2, 3, 4, 5 };\nint[] numbers2 = new int[5];\nstring[] names = new string[] { "John", "Jane" };\n\n// Access elements\nnumbers[0];                     // 1\nnumbers[numbers.Length - 1];    // Last item\n\n// Array length\nnumbers.Length;                  // 5\n\n// Loop through array\nforeach (int num in numbers)\n{\n    Console.WriteLine(num);\n}\n\nfor (int i = 0; i < numbers.Length; i++)\n{\n    Console.WriteLine(numbers[i]);\n}\n\n// Sort array\nArray.Sort(numbers);\n\n// Reverse array\nArray.Reverse(numbers);\n\n// Find index\nint index = Array.IndexOf(numbers, 3);\n\n// Multidimensional array\nint[,] grid = new int[3, 3];\ngrid[0, 0] = 1;\n\n// Jagged array (array of arrays)\nint[][] jagged = new int[3][];\njagged[0] = new int[] { 1, 2 };',
      },
      {
        id: 'lists-collections',
        title: 'Lists (Collections)',
        description: 'Dynamic-size collections:',
        language: 'csharp',
        code: 'using System.Collections.Generic;\n\n// Create list\nList<string> fruits = new List<string> { "apple", "banana", "orange" };\nList<int> numbers = new List<int>();\n\n// Add items\nfruits.Add("grape");\nfruits.AddRange(new string[] { "kiwi", "mango" });\n\n// Remove items\nfruits.Remove("banana");         // Remove by value\nfruits.RemoveAt(0);               // Remove by index\n\n// Access elements\nfruits[0];                        // "apple"\n\n// Count\nfruits.Count;\n\n// Check existence\nfruits.Contains("apple");         // true\n\n// Find index\nfruits.IndexOf("apple");\n\n// Sort\nfruits.Sort();\n\n// Clear\nfruits.Clear();\n\n// Loop through list\nforeach (string fruit in fruits)\n{\n    Console.WriteLine(fruit);\n}\n\n// LINQ methods (very common)\nusing System.Linq;\n\nvar filtered = fruits.Where(f => f.Length > 5).ToList();\nvar mapped = fruits.Select(f => f.ToUpper()).ToList();\nvar first = fruits.FirstOrDefault();\nvar sorted = fruits.OrderBy(f => f).ToList();\nbool any = fruits.Any(f => f.StartsWith("a"));\nint count = fruits.Count(f => f.Length > 5);',
      },
      {
        id: 'dictionaries',
        title: 'Dictionaries',
        description: 'Key-value pair collections:',
        language: 'csharp',
        code: 'using System.Collections.Generic;\n\n// Create dictionary\nDictionary<string, int> ages = new Dictionary<string, int>\n{\n    { "John", 30 },\n    { "Jane", 25 }\n};\n\n// Add items\nages.Add("Bob", 35);\nages["Alice"] = 28;\n\n// Access values\nint johnAge = ages["John"];\n\n// Check if key exists\nif (ages.ContainsKey("John"))\n{\n    Console.WriteLine(ages["John"]);\n}\n\n// Try get value (safer)\nif (ages.TryGetValue("John", out int age))\n{\n    Console.WriteLine(age);\n}\n\n// Remove\nages.Remove("John");\n\n// Loop through dictionary\nforeach (KeyValuePair<string, int> pair in ages)\n{\n    Console.WriteLine($"{pair.Key}: {pair.Value}");\n}\n\nforeach (string key in ages.Keys)\n{\n    Console.WriteLine(key);\n}\n\nforeach (int value in ages.Values)\n{\n    Console.WriteLine(value);\n}',
      },
      {
        id: 'conditionals',
        title: 'Conditionals',
        description: 'Make decisions in code:',
        language: 'csharp',
        code: '// If statement\nint age = 18;\nif (age >= 18)\n{\n    Console.WriteLine("Adult");\n}\n\n// If-else\nif (age >= 18)\n{\n    Console.WriteLine("Adult");\n}\nelse\n{\n    Console.WriteLine("Minor");\n}\n\n// If-else if-else\nint score = 85;\nif (score >= 90)\n{\n    Console.WriteLine("A");\n}\nelse if (score >= 80)\n{\n    Console.WriteLine("B");\n}\nelse\n{\n    Console.WriteLine("F");\n}\n\n// Comparison operators\n5 == 5    // true\n5 != 3    // true\n5 > 3     // true\n5 < 3     // false\n5 >= 5    // true\n5 <= 3    // false\n\n// Logical operators\nbool isAdult = age >= 18 && age < 65;  // AND\nbool canVote = age >= 18 || isCitizen; // OR\nbool isNotStudent = !isStudent;         // NOT\n\n// Ternary operator\nstring status = age >= 18 ? "Adult" : "Minor";\n\n// Null coalescing operator\nstring name = userName ?? "Guest";\n\n// Null coalescing assignment\nname ??= "Guest";\n\n// Switch statement\nint day = 2;\nswitch (day)\n{\n    case 1:\n        Console.WriteLine("Monday");\n        break;\n    case 2:\n        Console.WriteLine("Tuesday");\n        break;\n    default:\n        Console.WriteLine("Other day");\n        break;\n}\n\n// Switch expression (modern, C# 8+)\nstring dayName = day switch\n{\n    1 => "Monday",\n    2 => "Tuesday",\n    3 => "Wednesday",\n    _ => "Other day"\n};',
      },
      {
        id: 'loops',
        title: 'Loops',
        description: 'Repeat code multiple times:',
        language: 'csharp',
        code: '// For loop\nfor (int i = 0; i < 5; i++)\n{\n    Console.WriteLine(i);\n}\n\n// While loop\nint count = 0;\nwhile (count < 5)\n{\n    Console.WriteLine(count);\n    count++;\n}\n\n// Do-while loop\nint num = 0;\ndo\n{\n    Console.WriteLine(num);\n    num++;\n} while (num < 5);\n\n// Foreach loop\nList<string> fruits = new List<string> { "apple", "banana" };\nforeach (string fruit in fruits)\n{\n    Console.WriteLine(fruit);\n}\n\n// Break\nfor (int i = 0; i < 10; i++)\n{\n    if (i == 5) break;\n    Console.WriteLine(i);\n}\n\n// Continue\nfor (int i = 0; i < 5; i++)\n{\n    if (i == 2) continue;\n    Console.WriteLine(i);\n}',
      },
      {
        id: 'methods-functions',
        title: 'Methods (Functions)',
        description: 'Reusable blocks of code:',
        language: 'csharp',
        code: '// Basic method\nstatic void Greet()\n{\n    Console.WriteLine("Hello!");\n}\n\n// Method with parameters\nstatic void SayHello(string name)\n{\n    Console.WriteLine($"Hello, {name}!");\n}\n\n// Method with return value\nstatic int Add(int a, int b)\n{\n    return a + b;\n}\n\nint result = Add(5, 3);  // 8\n\n// Default parameters\nstatic string Greet(string name = "Guest")\n{\n    return $"Hello, {name}!";\n}\n\n// Multiple parameters, optional parameters\nstatic void PrintInfo(string name, int age = 0, string city = "Unknown")\n{\n    Console.WriteLine($"{name}, {age}, {city}");\n}\n\n// Named arguments\nPrintInfo(name: "John", city: "New York");\n\n// Params (variable number of arguments)\nstatic int Sum(params int[] numbers)\n{\n    int total = 0;\n    foreach (int n in numbers) total += n;\n    return total;\n}\n\nSum(1, 2, 3, 4);  // 10\n\n// Out parameter\nstatic bool TryDivide(int a, int b, out int result)\n{\n    if (b == 0)\n    {\n        result = 0;\n        return false;\n    }\n    result = a / b;\n    return true;\n}\n\n// ref parameter (pass by reference)\nstatic void Increment(ref int number)\n{\n    number++;\n}\n\nint value = 5;\nIncrement(ref value);  // value is now 6\n\n// Local functions\nstatic void Outer()\n{\n    void Inner()\n    {\n        Console.WriteLine("Inner function");\n    }\n    Inner();\n}\n\n// Lambda expressions\nFunc<int, int, int> add = (a, b) => a + b;\nint sum = add(3, 5);  // 8\n\nAction<string> print = message => Console.WriteLine(message);\nprint("Hello");',
      },
      {
        id: 'classes-objects',
        title: 'Classes & Objects',
        description: 'Object-oriented programming:',
        language: 'csharp',
        code: '// Define class\npublic class Person\n{\n    // Fields\n    private string name;\n    private int age;\n\n    // Properties (getter/setter)\n    public string Name\n    {\n        get { return name; }\n        set { name = value; }\n    }\n\n    // Auto-implemented property (shorter syntax)\n    public int Age { get; set; }\n\n    // Read-only property\n    public string FullInfo => $"{Name}, {Age}";\n\n    // Constructor\n    public Person(string name, int age)\n    {\n        this.name = name;\n        this.Age = age;\n    }\n\n    // Method\n    public string Greet()\n    {\n        return $"Hello, my name is {Name}";\n    }\n}\n\n// Create object\nPerson person = new Person("John", 30);\nConsole.WriteLine(person.Name);\nConsole.WriteLine(person.Greet());\n\n// Inheritance\npublic class Student : Person\n{\n    public string School { get; set; }\n\n    public Student(string name, int age, string school)\n        : base(name, age)\n    {\n        School = school;\n    }\n\n    public string Study()\n    {\n        return $"{Name} is studying at {School}";\n    }\n}\n\n// Access modifiers\npublic class Example\n{\n    public int PublicField;        // Accessible everywhere\n    private int privateField;      // Only within class\n    protected int protectedField;  // Class and derived classes\n    internal int internalField;    // Same assembly only\n}\n\n// Static members\npublic class Counter\n{\n    public static int Count { get; set; } = 0;\n\n    public Counter()\n    {\n        Count++;\n    }\n\n    public static void Reset()\n    {\n        Count = 0;\n    }\n}\n\nCounter.Count;  // Access without instance\n\n// Abstract class\npublic abstract class Shape\n{\n    public abstract double GetArea();\n\n    public void Display()\n    {\n        Console.WriteLine($"Area: {GetArea()}");\n    }\n}\n\npublic class Circle : Shape\n{\n    public double Radius { get; set; }\n\n    public override double GetArea()\n    {\n        return Math.PI * Radius * Radius;\n    }\n}\n\n// Interface\npublic interface IShape\n{\n    double GetArea();\n    void Display();\n}\n\npublic class Rectangle : IShape\n{\n    public double Width { get; set; }\n    public double Height { get; set; }\n\n    public double GetArea() => Width * Height;\n    public void Display() => Console.WriteLine($"Area: {GetArea()}");\n}\n\n// Virtual methods (can be overridden)\npublic class Animal\n{\n    public virtual string MakeSound()\n    {\n        return "Some sound";\n    }\n}\n\npublic class Dog : Animal\n{\n    public override string MakeSound()\n    {\n        return "Woof";\n    }\n}',
      },
      {
        id: 'exception-handling',
        title: 'Exception Handling',
        description: 'Handle errors gracefully:',
        language: 'csharp',
        code: '// Try-catch\ntry\n{\n    int result = 10 / 0;\n}\ncatch (DivideByZeroException ex)\n{\n    Console.WriteLine($"Error: {ex.Message}");\n}\n\n// Multiple catch blocks\ntry\n{\n    int value = int.Parse("abc");\n}\ncatch (FormatException ex)\n{\n    Console.WriteLine("Invalid format");\n}\ncatch (Exception ex)\n{\n    Console.WriteLine($"General error: {ex.Message}");\n}\n\n// Finally (always runs)\ntry\n{\n    // Risky code\n}\ncatch (Exception ex)\n{\n    // Handle error\n}\nfinally\n{\n    Console.WriteLine("Cleanup code");\n}\n\n// Throw exception\npublic void CheckAge(int age)\n{\n    if (age < 0)\n    {\n        throw new ArgumentException("Age cannot be negative");\n    }\n}\n\n// Custom exception\npublic class CustomException : Exception\n{\n    public CustomException(string message) : base(message) { }\n}\n\nthrow new CustomException("Something went wrong");\n\n// Using statement (auto-dispose resources)\nusing (StreamReader reader = new StreamReader("file.txt"))\n{\n    string content = reader.ReadToEnd();\n}\n\n// Modern using declaration (C# 8+)\nusing StreamReader reader = new StreamReader("file.txt");\nstring content = reader.ReadToEnd();',
      },
      {
        id: 'file-handling',
        title: 'File Handling',
        description: 'Read and write files:',
        language: 'csharp',
        code: 'using System.IO;\n\n// Read entire file\nstring content = File.ReadAllText("file.txt");\n\n// Read all lines\nstring[] lines = File.ReadAllLines("file.txt");\n\n// Write to file (overwrites)\nFile.WriteAllText("file.txt", "Hello World");\n\n// Write lines\nFile.WriteAllLines("file.txt", new string[] { "Line 1", "Line 2" });\n\n// Append to file\nFile.AppendAllText("file.txt", "New line\\n");\n\n// Check if file exists\nbool exists = File.Exists("file.txt");\n\n// Delete file\nFile.Delete("file.txt");\n\n// Copy file\nFile.Copy("source.txt", "destination.txt");\n\n// Directory operations\nDirectory.CreateDirectory("newFolder");\nbool dirExists = Directory.Exists("folder");\nstring[] files = Directory.GetFiles("folder");\nDirectory.Delete("folder");\n\n// StreamReader/StreamWriter (for large files)\nusing (StreamReader reader = new StreamReader("file.txt"))\n{\n    string line;\n    while ((line = reader.ReadLine()) != null)\n    {\n        Console.WriteLine(line);\n    }\n}\n\nusing (StreamWriter writer = new StreamWriter("file.txt"))\n{\n    writer.WriteLine("Hello World");\n}',
      },
      {
        id: 'linq',
        title: 'LINQ',
        description: 'Query collections efficiently:',
        language: 'csharp',
        code: 'using System.Linq;\n\nList<int> numbers = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };\n\n// Where (filter)\nvar evens = numbers.Where(n => n % 2 == 0).ToList();\n\n// Select (transform/map)\nvar doubled = numbers.Select(n => n * 2).ToList();\n\n// OrderBy / OrderByDescending\nvar sorted = numbers.OrderBy(n => n).ToList();\nvar sortedDesc = numbers.OrderByDescending(n => n).ToList();\n\n// First / FirstOrDefault\nint first = numbers.First();\nint firstEven = numbers.First(n => n % 2 == 0);\nint firstOrDefault = numbers.FirstOrDefault(n => n > 100);  // 0 if not found\n\n// Any / All\nbool hasEven = numbers.Any(n => n % 2 == 0);\nbool allPositive = numbers.All(n => n > 0);\n\n// Count\nint count = numbers.Count(n => n > 5);\n\n// Sum / Average / Max / Min\nint sum = numbers.Sum();\ndouble average = numbers.Average();\nint max = numbers.Max();\nint min = numbers.Min();\n\n// GroupBy\nvar grouped = numbers.GroupBy(n => n % 2 == 0 ? "Even" : "Odd");\n\n// Distinct\nvar unique = new List<int> { 1, 1, 2, 2, 3 }.Distinct().ToList();\n\n// Skip / Take (pagination)\nvar page = numbers.Skip(2).Take(3).ToList();\n\n// Chaining LINQ methods\nvar result = numbers\n    .Where(n => n > 2)\n    .OrderByDescending(n => n)\n    .Select(n => n * 2)\n    .ToList();\n\n// Query syntax (alternative to method syntax)\nvar query = from n in numbers\n            where n % 2 == 0\n            orderby n\n            select n;',
      },
      {
        id: 'async-await',
        title: 'Async/Await',
        description: 'Handle asynchronous operations:',
        language: 'csharp',
        code: 'using System.Threading.Tasks;\n\n// Async method\npublic async Task<string> GetDataAsync()\n{\n    await Task.Delay(1000);  // Simulate delay\n    return "Data received";\n}\n\n// Calling async method\npublic async Task ProcessDataAsync()\n{\n    string data = await GetDataAsync();\n    Console.WriteLine(data);\n}\n\n// Async main\nstatic async Task Main(string[] args)\n{\n    await ProcessDataAsync();\n}\n\n// Multiple async operations\npublic async Task RunMultipleAsync()\n{\n    Task<string> task1 = GetDataAsync();\n    Task<string> task2 = GetDataAsync();\n\n    string[] results = await Task.WhenAll(task1, task2);\n}\n\n// Try-catch with async\npublic async Task SafeGetDataAsync()\n{\n    try\n    {\n        string data = await GetDataAsync();\n    }\n    catch (Exception ex)\n    {\n        Console.WriteLine(ex.Message);\n    }\n}\n\n// HTTP requests (common async use case)\nusing System.Net.Http;\n\npublic async Task<string> FetchDataAsync(string url)\n{\n    using HttpClient client = new HttpClient();\n    HttpResponseMessage response = await client.GetAsync(url);\n    string content = await response.Content.ReadAsStringAsync();\n    return content;\n}',
      },
      {
        id: 'generics',
        title: 'Generics',
        description: 'Write reusable, type-safe code:',
        language: 'csharp',
        code: '// Generic class\npublic class Box<T>\n{\n    private T item;\n\n    public void Set(T value)\n    {\n        item = value;\n    }\n\n    public T Get()\n    {\n        return item;\n    }\n}\n\nBox<int> intBox = new Box<int>();\nintBox.Set(42);\n\nBox<string> stringBox = new Box<string>();\nstringBox.Set("Hello");\n\n// Generic method\npublic T GetFirst<T>(List<T> list)\n{\n    return list[0];\n}\n\n// Generic with constraints\npublic T Max<T>(T a, T b) where T : IComparable<T>\n{\n    return a.CompareTo(b) > 0 ? a : b;\n}\n\n// Common generic collections\nList<int> list = new List<int>();\nDictionary<string, int> dict = new Dictionary<string, int>();\nQueue<string> queue = new Queue<string>();\nStack<int> stack = new Stack<int>();',
      },
      {
        id: 'records-c-9',
        title: 'Records (C# 9+)',
        description: 'Immutable data classes:',
        language: 'csharp',
        code: '// Define record\npublic record Person(string Name, int Age);\n\n// Create instance\nvar person = new Person("John", 30);\nConsole.WriteLine(person.Name);\n\n// Records are immutable by default, use \'with\' to create modified copy\nvar olderPerson = person with { Age = 31 };\n\n// Value equality (records compare by value, not reference)\nvar person1 = new Person("John", 30);\nvar person2 = new Person("John", 30);\nConsole.WriteLine(person1 == person2);  // true',
      },
      {
        id: 'nullable-reference-types',
        title: 'Nullable Reference Types',
        description: 'Handle null safety:',
        language: 'csharp',
        code: '// Enable nullable context (in .csproj or file)\n#nullable enable\n\nstring? nullableName = null;      // Can be null\nstring nonNullableName = "John";  // Cannot be null (warning if assigned null)\n\n// Null checking\nif (nullableName != null)\n{\n    Console.WriteLine(nullableName.Length);\n}\n\n// Null-conditional operator\nint? length = nullableName?.Length;\n\n// Null-coalescing operator\nstring name = nullableName ?? "Default";\n\n// Null-forgiving operator (tell compiler you know it\'s not null)\nstring definitelyNotNull = nullableName!;',
      },
      {
        id: 'common-patterns',
        title: 'Common Patterns',
        description: 'Frequently used patterns:',
        language: 'csharp',
        code: '// Object initializer\nPerson person = new Person\n{\n    Name = "John",\n    Age = 30\n};\n\n// Collection initializer\nList<int> numbers = new List<int> { 1, 2, 3, 4, 5 };\n\n// Anonymous types\nvar point = new { X = 10, Y = 20 };\nConsole.WriteLine(point.X);\n\n// Tuples\n(string name, int age) person2 = ("John", 30);\nConsole.WriteLine(person2.name);\n\n// Or with var\nvar (name, age) = ("John", 30);\n\n// Pattern matching\nobject value = 42;\nif (value is int number)\n{\n    Console.WriteLine($"It\'s an int: {number}");\n}\n\n// Pattern matching with switch\nstring result = value switch\n{\n    int n when n > 0 => "Positive",\n    int n when n < 0 => "Negative",\n    0 => "Zero",\n    _ => "Not a number"\n};\n\n// Extension methods\npublic static class StringExtensions\n{\n    public static bool IsValidEmail(this string email)\n    {\n        return email.Contains("@");\n    }\n}\n\n// Usage\nbool valid = "test@example.com".IsValidEmail();',
      },
    ],
  },

  java: {
    lang: 'java',
    label: 'Java',
    title: 'Java',
    icon: '/java.svg',
    color: '#5382A1',
    sections: [
      {
        id: 'setup',
        title: 'Setup',
        description: 'Create and run a Java program:',
        language: 'java',
        code: '# Check if Java is installed\njava -version\njavac -version\n\n# Compile a Java file\njavac MyClass.java\n\n# Run compiled class\njava MyClass\n\n// MyClass.java\npublic class MyClass {\n    public static void main(String[] args) {\n        System.out.println("Hello World");\n    }\n}',
      },
      {
        id: 'basic-syntax',
        title: 'Basic Syntax',
        description: 'Java code structure:',
        language: 'java',
        code: '// Single line comment\n/* Multi-line\n   comment */\n\n/**\n * Javadoc comment\n * @param args command line arguments\n */\npublic class Program {\n    public static void main(String[] args) {\n        System.out.println("Hello World");\n        System.out.print("No newline");\n    }\n}',
      },
      {
        id: 'variables',
        title: 'Variables',
        description: 'Store and use data:',
        language: 'java',
        code: '// Declare with explicit type\nint age = 25;\nString name = "John";\ndouble price = 9.99;\nboolean isActive = true;\nchar grade = \'A\';\n\n// Multiple declarations\nint x = 1, y = 2, z = 3;\n\n// Constants (final keyword)\nfinal double PI = 3.14159;\n\n// var (type inference, Java 10+)\nvar count = 10;\nvar message = "Hello";',
      },
      {
        id: 'data-types',
        title: 'Data Types',
        description: 'Common data types in Java:',
        language: 'java',
        code: '// Primitive types\nint number = 42;                  // 32-bit integer\nlong bigNumber = 123456789L;      // 64-bit integer\nshort smallNumber = 100;          // 16-bit integer\nbyte tinyNumber = 127;            // 8-bit integer\nfloat decimal1 = 3.14f;           // Single precision\ndouble decimal2 = 3.14159;        // Double precision\nboolean isTrue = true;\nchar letter = \'A\';\n\n// Reference types\nString text = "Hello World";\nInteger boxedInt = 42;             // Wrapper class\nDouble boxedDouble = 3.14;\n\n// Arrays\nint[] numbers = {1, 2, 3, 4, 5};\nString[] names = new String[3];\n\n// Type conversion (casting)\ndouble d = 3.99;\nint i = (int) d;                  // 3 (truncates)\n\n// Parsing strings\nint parsed = Integer.parseInt("42");\ndouble parsedD = Double.parseDouble("3.14");\nboolean parsedB = Boolean.parseBoolean("true");\n\n// Converting to string\nString str = String.valueOf(42);\nString str2 = Integer.toString(42);',
      },
      {
        id: 'strings',
        title: 'Strings',
        description: 'Working with text:',
        language: 'java',
        code: 'String text = "Hello World";\n\n// String length\ntext.length();                     // 11\n\n// Uppercase and lowercase\ntext.toUpperCase();                // "HELLO WORLD"\ntext.toLowerCase();                // "hello world"\n\n// Trim whitespace\n"  hello  ".trim();                // "hello"\n"  hello  ".strip();               // "hello" (Java 11+, unicode aware)\n\n// Check content\ntext.contains("World");            // true\ntext.startsWith("Hello");          // true\ntext.endsWith("World");            // true\n\n// Find position\ntext.indexOf("World");             // 6\n\n// Substring\ntext.substring(0, 5);              // "Hello"\ntext.substring(6);                 // "World"\n\n// Replace\ntext.replace("World", "Java");     // "Hello Java"\n\n// Split\nString[] words = text.split(" ");  // ["Hello", "World"]\n\n// Join\nString joined = String.join(", ", words);  // "Hello, World"\n\n// String comparison\ntext.equals("Hello World");        // true (use equals, not ==)\ntext.equalsIgnoreCase("hello world");  // true\n\n// String formatting\nString name = "John";\nint age = 30;\nString message = String.format("My name is %s and I am %d", name, age);\n\n// Text blocks (Java 15+)\nString textBlock = """\n    Hello\n    World\n    """;\n\n// StringBuilder (efficient for many concatenations)\nStringBuilder sb = new StringBuilder();\nsb.append("Hello");\nsb.append(" World");\nString result = sb.toString();\n\n// Check null or empty\ntext == null;\ntext.isEmpty();\ntext.isBlank();  // Java 11+\n\n// Concatenation\nString full = "Hello" + " " + "World";',
      },
      {
        id: 'numbers',
        title: 'Numbers',
        description: 'Working with numbers:',
        language: 'java',
        code: '// Math operations\nint sum = 5 + 3;              // 8\nint diff = 5 - 3;             // 2\nint product = 5 * 3;          // 15\nint quotient = 6 / 3;         // 2\nint remainder = 7 % 3;        // 1\n\n// Increment/decrement\nint count = 0;\ncount++;                       // 1\ncount--;                       // 0\ncount += 5;                    // 5\ncount -= 2;                    // 3\n\n// Math class\nMath.abs(-5);                  // 5\nMath.round(3.7);               // 4\nMath.ceil(3.3);                // 4.0\nMath.floor(3.7);               // 3.0\nMath.max(1, 5);                // 5\nMath.min(1, 5);                // 1\nMath.sqrt(16);                 // 4.0\nMath.pow(2, 3);                // 8.0\n\n// Random numbers\nimport java.util.Random;\nRandom random = new Random();\nint randomNum = random.nextInt(100);       // 0-99\nint randomRange = random.nextInt(50) + 1;  // 1-50\ndouble randomDouble = random.nextDouble();\n\n// Number formatting\ndouble price = 19.99;\nString formatted = String.format("%.2f", price);  // "19.99"',
      },
      {
        id: 'arrays',
        title: 'Arrays',
        description: 'Working with fixed-size collections:',
        language: 'java',
        code: '// Declare and initialize\nint[] numbers = {1, 2, 3, 4, 5};\nint[] numbers2 = new int[5];\nString[] names = new String[]{"John", "Jane"};\n\n// Access elements\nnumbers[0];                     // 1\nnumbers[numbers.length - 1];    // Last item\n\n// Array length\nnumbers.length;                  // 5\n\n// Loop through array\nfor (int num : numbers) {\n    System.out.println(num);\n}\n\nfor (int i = 0; i < numbers.length; i++) {\n    System.out.println(numbers[i]);\n}\n\n// Sort array\nimport java.util.Arrays;\nArrays.sort(numbers);\n\n// Print array\nSystem.out.println(Arrays.toString(numbers));\n\n// Fill array\nint[] filled = new int[5];\nArrays.fill(filled, 0);\n\n// Copy array\nint[] copy = Arrays.copyOf(numbers, numbers.length);\n\n// Multidimensional array\nint[][] grid = new int[3][3];\ngrid[0][0] = 1;\n\nint[][] grid2 = {{1, 2}, {3, 4}};',
      },
      {
        id: 'lists-collections',
        title: 'Lists (Collections)',
        description: 'Dynamic-size collections:',
        language: 'java',
        code: 'import java.util.ArrayList;\nimport java.util.List;\n\n// Create list\nList<String> fruits = new ArrayList<>();\nfruits.add("apple");\nfruits.add("banana");\nfruits.add("orange");\n\n// Or with initial values\nList<String> fruits2 = new ArrayList<>(List.of("apple", "banana"));\n\n// Add items\nfruits.add("grape");\nfruits.add(0, "mango");  // Add at index\n\n// Remove items\nfruits.remove("banana");        // Remove by value\nfruits.remove(0);                // Remove by index\n\n// Access elements\nfruits.get(0);                   // "apple"\n\n// Update element\nfruits.set(0, "kiwi");\n\n// Size\nfruits.size();\n\n// Check existence\nfruits.contains("apple");        // true\n\n// Find index\nfruits.indexOf("apple");\n\n// Clear\nfruits.clear();\n\n// Check empty\nfruits.isEmpty();\n\n// Loop through list\nfor (String fruit : fruits) {\n    System.out.println(fruit);\n}\n\nfruits.forEach(fruit -> System.out.println(fruit));\n\n// Sort\nimport java.util.Collections;\nCollections.sort(fruits);\n\n// Convert to array\nString[] array = fruits.toArray(new String[0]);\n\n// Streams (very common for filtering/mapping)\nimport java.util.stream.Collectors;\n\nList<String> filtered = fruits.stream()\n    .filter(f -> f.length() > 5)\n    .collect(Collectors.toList());\n\nList<String> mapped = fruits.stream()\n    .map(String::toUpperCase)\n    .collect(Collectors.toList());',
      },
      {
        id: 'maps-dictionaries',
        title: 'Maps (Dictionaries)',
        description: 'Key-value pair collections:',
        language: 'java',
        code: 'import java.util.HashMap;\nimport java.util.Map;\n\n// Create map\nMap<String, Integer> ages = new HashMap<>();\nages.put("John", 30);\nages.put("Jane", 25);\n\n// Access values\nint johnAge = ages.get("John");\nint defaultAge = ages.getOrDefault("Bob", 0);\n\n// Check if key exists\nif (ages.containsKey("John")) {\n    System.out.println(ages.get("John"));\n}\n\n// Remove\nages.remove("John");\n\n// Size\nages.size();\n\n// Loop through map\nfor (Map.Entry<String, Integer> entry : ages.entrySet()) {\n    System.out.println(entry.getKey() + ": " + entry.getValue());\n}\n\nfor (String key : ages.keySet()) {\n    System.out.println(key);\n}\n\nfor (int value : ages.values()) {\n    System.out.println(value);\n}\n\nages.forEach((key, value) -> System.out.println(key + ": " + value));\n\n// Update or insert\nages.merge("John", 1, Integer::sum);  // Add 1 to existing value\n\n// TreeMap (sorted keys)\nimport java.util.TreeMap;\nMap<String, Integer> sortedMap = new TreeMap<>();',
      },
      {
        id: 'conditionals',
        title: 'Conditionals',
        description: 'Make decisions in code:',
        language: 'java',
        code: '// If statement\nint age = 18;\nif (age >= 18) {\n    System.out.println("Adult");\n}\n\n// If-else\nif (age >= 18) {\n    System.out.println("Adult");\n} else {\n    System.out.println("Minor");\n}\n\n// If-else if-else\nint score = 85;\nif (score >= 90) {\n    System.out.println("A");\n} else if (score >= 80) {\n    System.out.println("B");\n} else {\n    System.out.println("F");\n}\n\n// Comparison operators\n5 == 5    // true\n5 != 3    // true\n5 > 3     // true\n5 < 3     // false\n5 >= 5    // true\n5 <= 3    // false\n\n// Logical operators\nboolean isAdult = age >= 18 && age < 65;  // AND\nboolean canVote = age >= 18 || isCitizen; // OR\nboolean isNotStudent = !isStudent;         // NOT\n\n// Ternary operator\nString status = age >= 18 ? "Adult" : "Minor";\n\n// Switch statement\nint day = 2;\nswitch (day) {\n    case 1:\n        System.out.println("Monday");\n        break;\n    case 2:\n        System.out.println("Tuesday");\n        break;\n    default:\n        System.out.println("Other day");\n        break;\n}\n\n// Switch expression (Java 14+)\nString dayName = switch (day) {\n    case 1 -> "Monday";\n    case 2 -> "Tuesday";\n    case 3 -> "Wednesday";\n    default -> "Other day";\n};',
      },
      {
        id: 'loops',
        title: 'Loops',
        description: 'Repeat code multiple times:',
        language: 'java',
        code: '// For loop\nfor (int i = 0; i < 5; i++) {\n    System.out.println(i);\n}\n\n// While loop\nint count = 0;\nwhile (count < 5) {\n    System.out.println(count);\n    count++;\n}\n\n// Do-while loop\nint num = 0;\ndo {\n    System.out.println(num);\n    num++;\n} while (num < 5);\n\n// Enhanced for loop (for-each)\nList<String> fruits = List.of("apple", "banana");\nfor (String fruit : fruits) {\n    System.out.println(fruit);\n}\n\n// Break\nfor (int i = 0; i < 10; i++) {\n    if (i == 5) break;\n    System.out.println(i);\n}\n\n// Continue\nfor (int i = 0; i < 5; i++) {\n    if (i == 2) continue;\n    System.out.println(i);\n}',
      },
      {
        id: 'methods',
        title: 'Methods',
        description: 'Reusable blocks of code:',
        language: 'java',
        code: 'public class Calculator {\n    // Basic method\n    static void greet() {\n        System.out.println("Hello!");\n    }\n\n    // Method with parameters\n    static void sayHello(String name) {\n        System.out.println("Hello, " + name + "!");\n    }\n\n    // Method with return value\n    static int add(int a, int b) {\n        return a + b;\n    }\n\n    // Method overloading (same name, different parameters)\n    static double add(double a, double b) {\n        return a + b;\n    }\n\n    // Varargs (variable number of arguments)\n    static int sum(int... numbers) {\n        int total = 0;\n        for (int n : numbers) total += n;\n        return total;\n    }\n\n    public static void main(String[] args) {\n        int result = add(5, 3);        // 8\n        int total = sum(1, 2, 3, 4);   // 10\n    }\n}',
      },
      {
        id: 'classes-objects',
        title: 'Classes & Objects',
        description: 'Object-oriented programming:',
        language: 'java',
        code: '// Define class\npublic class Person {\n    // Fields\n    private String name;\n    private int age;\n\n    // Constructor\n    public Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n\n    // Getter and setter\n    public String getName() {\n        return name;\n    }\n\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    public int getAge() {\n        return age;\n    }\n\n    // Method\n    public String greet() {\n        return "Hello, my name is " + name;\n    }\n\n    // toString method (for printing)\n    @Override\n    public String toString() {\n        return "Person{name=\'" + name + "\', age=" + age + "}";\n    }\n}\n\n// Create object\nPerson person = new Person("John", 30);\nSystem.out.println(person.getName());\nSystem.out.println(person.greet());\n\n// Inheritance\npublic class Student extends Person {\n    private String school;\n\n    public Student(String name, int age, String school) {\n        super(name, age);  // Call parent constructor\n        this.school = school;\n    }\n\n    public String study() {\n        return getName() + " is studying at " + school;\n    }\n}\n\n// Access modifiers\npublic class Example {\n    public int publicField;        // Accessible everywhere\n    private int privateField;      // Only within class\n    protected int protectedField;  // Package and subclasses\n    int packageField;              // Package only (default)\n}\n\n// Static members\npublic class Counter {\n    public static int count = 0;\n\n    public Counter() {\n        count++;\n    }\n\n    public static void reset() {\n        count = 0;\n    }\n}\n\nCounter.count;  // Access without instance\n\n// Abstract class\npublic abstract class Shape {\n    public abstract double getArea();\n\n    public void display() {\n        System.out.println("Area: " + getArea());\n    }\n}\n\npublic class Circle extends Shape {\n    private double radius;\n\n    public Circle(double radius) {\n        this.radius = radius;\n    }\n\n    @Override\n    public double getArea() {\n        return Math.PI * radius * radius;\n    }\n}\n\n// Interface\npublic interface Shape2 {\n    double getArea();\n\n    default void display() {\n        System.out.println("Area: " + getArea());\n    }\n}\n\npublic class Rectangle implements Shape2 {\n    private double width, height;\n\n    public Rectangle(double width, double height) {\n        this.width = width;\n        this.height = height;\n    }\n\n    @Override\n    public double getArea() {\n        return width * height;\n    }\n}\n\n// Multiple interfaces\npublic class MyClass implements Interface1, Interface2 {\n    // Must implement all methods from both interfaces\n}',
      },
      {
        id: 'exception-handling',
        title: 'Exception Handling',
        description: 'Handle errors gracefully:',
        language: 'java',
        code: '// Try-catch\ntry {\n    int result = 10 / 0;\n} catch (ArithmeticException e) {\n    System.out.println("Error: " + e.getMessage());\n}\n\n// Multiple catch blocks\ntry {\n    int value = Integer.parseInt("abc");\n} catch (NumberFormatException e) {\n    System.out.println("Invalid number");\n} catch (Exception e) {\n    System.out.println("General error: " + e.getMessage());\n}\n\n// Finally (always runs)\ntry {\n    // Risky code\n} catch (Exception e) {\n    // Handle error\n} finally {\n    System.out.println("Cleanup code");\n}\n\n// Try-with-resources (auto-close resources)\ntry (FileReader reader = new FileReader("file.txt")) {\n    // Use reader\n} catch (IOException e) {\n    System.out.println(e.getMessage());\n}\n\n// Throw exception\npublic void checkAge(int age) {\n    if (age < 0) {\n        throw new IllegalArgumentException("Age cannot be negative");\n    }\n}\n\n// Custom exception\npublic class CustomException extends Exception {\n    public CustomException(String message) {\n        super(message);\n    }\n}\n\n// Method that throws checked exception\npublic void riskyMethod() throws CustomException {\n    throw new CustomException("Something went wrong");\n}\n\n// Checked vs Unchecked exceptions\n// Checked: must be caught or declared (IOException, SQLException)\n// Unchecked: RuntimeException and subclasses (NullPointerException, ArithmeticException)',
      },
      {
        id: 'file-handling',
        title: 'File Handling',
        description: 'Read and write files:',
        language: 'java',
        code: 'import java.io.*;\nimport java.nio.file.*;\n\n// Read entire file (modern way)\nString content = Files.readString(Paths.get("file.txt"));\n\n// Read all lines\nList<String> lines = Files.readAllLines(Paths.get("file.txt"));\n\n// Write to file\nFiles.writeString(Paths.get("file.txt"), "Hello World");\n\n// Write lines\nFiles.write(Paths.get("file.txt"), List.of("Line 1", "Line 2"));\n\n// Check if file exists\nboolean exists = Files.exists(Paths.get("file.txt"));\n\n// Delete file\nFiles.delete(Paths.get("file.txt"));\n\n// BufferedReader (for large files, line by line)\ntry (BufferedReader reader = new BufferedReader(new FileReader("file.txt"))) {\n    String line;\n    while ((line = reader.readLine()) != null) {\n        System.out.println(line);\n    }\n} catch (IOException e) {\n    e.printStackTrace();\n}\n\n// BufferedWriter\ntry (BufferedWriter writer = new BufferedWriter(new FileWriter("file.txt"))) {\n    writer.write("Hello World");\n} catch (IOException e) {\n    e.printStackTrace();\n}\n\n// Create directory\nFiles.createDirectories(Paths.get("newFolder"));',
      },
      {
        id: 'streams-java-8',
        title: 'Streams (Java 8+)',
        description: 'Process collections functionally:',
        language: 'java',
        code: 'import java.util.stream.*;\nimport java.util.List;\n\nList<Integer> numbers = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);\n\n// Filter\nList<Integer> evens = numbers.stream()\n    .filter(n -> n % 2 == 0)\n    .collect(Collectors.toList());\n\n// Map (transform)\nList<Integer> doubled = numbers.stream()\n    .map(n -> n * 2)\n    .collect(Collectors.toList());\n\n// Sorted\nList<Integer> sorted = numbers.stream()\n    .sorted()\n    .collect(Collectors.toList());\n\nList<Integer> sortedDesc = numbers.stream()\n    .sorted(Comparator.reverseOrder())\n    .collect(Collectors.toList());\n\n// Sum, Average, Max, Min\nint sum = numbers.stream().mapToInt(Integer::intValue).sum();\nOptionalDouble average = numbers.stream().mapToInt(Integer::intValue).average();\nOptional<Integer> max = numbers.stream().max(Integer::compareTo);\nOptional<Integer> min = numbers.stream().min(Integer::compareTo);\n\n// Count\nlong count = numbers.stream().filter(n -> n > 5).count();\n\n// AnyMatch, AllMatch\nboolean hasEven = numbers.stream().anyMatch(n -> n % 2 == 0);\nboolean allPositive = numbers.stream().allMatch(n -> n > 0);\n\n// First element\nOptional<Integer> first = numbers.stream().findFirst();\n\n// Reduce (combine into single value)\nint total = numbers.stream().reduce(0, Integer::sum);\n\n// Chaining operations\nList<Integer> result = numbers.stream()\n    .filter(n -> n > 2)\n    .map(n -> n * 2)\n    .sorted()\n    .collect(Collectors.toList());\n\n// Joining strings\nList<String> names = List.of("John", "Jane", "Bob");\nString joined = names.stream().collect(Collectors.joining(", "));\n\n// Grouping\nMap<Boolean, List<Integer>> grouped = numbers.stream()\n    .collect(Collectors.groupingBy(n -> n % 2 == 0));\n\n// Stream from array\nint[] arr = {1, 2, 3};\nIntStream.of(arr).sum();\n\n// Range\nIntStream.range(0, 5).forEach(System.out::println);  // 0-4\nIntStream.rangeClosed(0, 5).forEach(System.out::println);  // 0-5',
      },
      {
        id: 'generics',
        title: 'Generics',
        description: 'Write reusable, type-safe code:',
        language: 'java',
        code: '// Generic class\npublic class Box<T> {\n    private T item;\n\n    public void set(T value) {\n        item = value;\n    }\n\n    public T get() {\n        return item;\n    }\n}\n\nBox<Integer> intBox = new Box<>();\nintBox.set(42);\n\nBox<String> stringBox = new Box<>();\nstringBox.set("Hello");\n\n// Generic method\npublic <T> T getFirst(List<T> list) {\n    return list.get(0);\n}\n\n// Generic with bounded type\npublic <T extends Comparable<T>> T max(T a, T b) {\n    return a.compareTo(b) > 0 ? a : b;\n}\n\n// Wildcard\npublic void printList(List<?> list) {\n    for (Object item : list) {\n        System.out.println(item);\n    }\n}',
      },
      {
        id: 'optional',
        title: 'Optional',
        description: 'Handle null values safely:',
        language: 'java',
        code: 'import java.util.Optional;\n\n// Create Optional\nOptional<String> optional = Optional.of("Hello");\nOptional<String> empty = Optional.empty();\nOptional<String> nullable = Optional.ofNullable(getName());  // May be null\n\n// Check if present\nif (optional.isPresent()) {\n    System.out.println(optional.get());\n}\n\n// isEmpty (Java 11+)\nif (optional.isEmpty()) {\n    System.out.println("No value");\n}\n\n// ifPresent\noptional.ifPresent(value -> System.out.println(value));\n\n// orElse (default value)\nString value = nullable.orElse("Default");\n\n// orElseGet (lazy default)\nString value2 = nullable.orElseGet(() -> "Computed Default");\n\n// orElseThrow\nString value3 = nullable.orElseThrow(() -> new RuntimeException("No value"));\n\n// map\nOptional<Integer> length = optional.map(String::length);',
      },
      {
        id: 'interfaces-functional-interfaces',
        title: 'Interfaces & Functional Interfaces',
        description: 'Modern Java functional programming:',
        language: 'java',
        code: '// Functional interface (single abstract method)\n@FunctionalInterface\ninterface Calculator {\n    int calculate(int a, int b);\n}\n\n// Lambda expression\nCalculator add = (a, b) -> a + b;\nint result = add.calculate(5, 3);  // 8\n\n// Built-in functional interfaces\nimport java.util.function.*;\n\nFunction<Integer, Integer> square = x -> x * x;\nsquare.apply(5);  // 25\n\nPredicate<Integer> isEven = x -> x % 2 == 0;\nisEven.test(4);  // true\n\nConsumer<String> print = s -> System.out.println(s);\nprint.accept("Hello");\n\nSupplier<String> supplier = () -> "Hello World";\nsupplier.get();\n\nBiFunction<Integer, Integer, Integer> add2 = (a, b) -> a + b;\nadd2.apply(3, 5);  // 8\n\n// Method references\nList<String> names = List.of("John", "Jane");\nnames.forEach(System.out::println);',
      },
      {
        id: 'common-patterns',
        title: 'Common Patterns',
        description: 'Frequently used patterns:',
        language: 'java',
        code: '// StringBuilder pattern\nStringBuilder sb = new StringBuilder();\nfor (int i = 0; i < 5; i++) {\n    sb.append(i).append(", ");\n}\n\n// Builder pattern\npublic class Person {\n    private String name;\n    private int age;\n\n    public static class Builder {\n        private Person person = new Person();\n\n        public Builder name(String name) {\n            person.name = name;\n            return this;\n        }\n\n        public Builder age(int age) {\n            person.age = age;\n            return this;\n        }\n\n        public Person build() {\n            return person;\n        }\n    }\n}\n\nPerson person = new Person.Builder()\n    .name("John")\n    .age(30)\n    .build();\n\n// Singleton pattern\npublic class Singleton {\n    private static Singleton instance;\n\n    private Singleton() {}\n\n    public static Singleton getInstance() {\n        if (instance == null) {\n            instance = new Singleton();\n        }\n        return instance;\n    }\n}\n\n// Record (Java 14+, immutable data class)\npublic record Point(int x, int y) {}\n\nPoint p = new Point(10, 20);\nSystem.out.println(p.x());  // 10\n\n// Text blocks (Java 15+)\nString json = """\n    {\n        "name": "John",\n        "age": 30\n    }\n    """;\n\n// Instanceof pattern matching (Java 16+)\nObject obj = "Hello";\nif (obj instanceof String str) {\n    System.out.println(str.length());\n}',
      },
    ],
  },

  postgresql: {
    lang: 'postgresql',
    label: 'PostgreSQL',
    title: 'PostgreSQL',
    icon: '/postgresql.svg',
    color: '#336791',
    sections: [
      {
        id: 'basic-syntax',
        title: 'Basic Syntax',
        description: 'Every PostgreSQL statement ends with a semicolon:',
        language: 'sql',
        code: 'SELECT * FROM users;\n-- This is a comment\n/* This is a\n   multi-line comment */',
      },
      {
        id: 'database-operations',
        title: 'Database Operations',
        description: 'Create and manage databases:',
        language: 'sql',
        code: '-- Create database\nCREATE DATABASE mydb;\n\n-- Connect to database (psql command line)\n\\c mydb\n\n-- List all databases\n\\l\n\n-- Delete database\nDROP DATABASE mydb;\nDROP DATABASE IF EXISTS mydb;\n\n-- Show current database\nSELECT current_database();',
      },
      {
        id: 'table-operations',
        title: 'Table Operations',
        description: 'Create and manage tables:',
        language: 'sql',
        code: '-- Create table\nCREATE TABLE users (\n    id SERIAL PRIMARY KEY,\n    username VARCHAR(50) NOT NULL,\n    email VARCHAR(100) UNIQUE,\n    age INT,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\n-- List all tables\n\\dt\n\n-- Show table structure\n\\d users\n\n-- Delete table\nDROP TABLE users;\nDROP TABLE IF EXISTS users;\n\n-- Rename table\nALTER TABLE users RENAME TO customers;\n\n-- Copy table structure (no data)\nCREATE TABLE users_backup (LIKE users);\n\n-- Copy table with data\nCREATE TABLE users_backup AS SELECT * FROM users;\n\n-- Truncate table (delete all rows, keep structure)\nTRUNCATE TABLE users;\nTRUNCATE TABLE users RESTART IDENTITY;  -- Also reset serial counter',
      },
      {
        id: 'data-types',
        title: 'Data Types',
        description: 'Common data types in PostgreSQL:',
        language: 'sql',
        code: '-- Numeric types\nINTEGER, INT             -- 4-byte integer\nBIGINT                    -- 8-byte integer\nSMALLINT                  -- 2-byte integer\nSERIAL                     -- Auto-incrementing integer\nBIGSERIAL                  -- Auto-incrementing bigint\nDECIMAL(10,2)              -- Fixed precision decimal\nNUMERIC(10,2)              -- Same as decimal\nREAL                        -- Single precision float\nDOUBLE PRECISION             -- Double precision float\n\n-- String types\nVARCHAR(255)               -- Variable length with limit\nCHAR(10)                    -- Fixed length\nTEXT                         -- Unlimited length text\n\n-- Date and time types\nDATE                        -- Date only (YYYY-MM-DD)\nTIME                         -- Time only (HH:MM:SS)\nTIMESTAMP                    -- Date and time\nTIMESTAMPTZ                  -- Timestamp with timezone\nINTERVAL                     -- Time span\n\n-- Boolean type\nBOOLEAN                      -- true/false\n\n-- Other useful types\nUUID                          -- Universally unique identifier\nJSON                           -- JSON data\nJSONB                          -- Binary JSON (faster, indexed)\nARRAY                           -- Array of any type\nBYTEA                            -- Binary data',
      },
      {
        id: 'insert-data',
        title: 'Insert Data',
        description: 'Add data to tables:',
        language: 'sql',
        code: "-- Insert single row\nINSERT INTO users (username, email, age)\nVALUES ('john', 'john@example.com', 30);\n\n-- Insert multiple rows\nINSERT INTO users (username, email, age) VALUES\n('jane', 'jane@example.com', 25),\n('bob', 'bob@example.com', 35);\n\n-- Insert and return the inserted row\nINSERT INTO users (username, email)\nVALUES ('mike', 'mike@example.com')\nRETURNING id, username;\n\n-- Insert with ON CONFLICT (upsert)\nINSERT INTO users (id, username, email)\nVALUES (1, 'john', 'john@example.com')\nON CONFLICT (id) DO UPDATE\nSET email = EXCLUDED.email;\n\n-- Insert, do nothing on conflict\nINSERT INTO users (email, username)\nVALUES ('john@example.com', 'john')\nON CONFLICT (email) DO NOTHING;\n\n-- Insert from another table\nINSERT INTO users_backup SELECT * FROM users;",
      },
      {
        id: 'select-data',
        title: 'Select Data',
        description: 'Retrieve data from tables:',
        language: 'sql',
        code: '-- Select all columns\nSELECT * FROM users;\n\n-- Select specific columns\nSELECT username, email FROM users;\n\n-- Select with alias\nSELECT username AS name, email AS mail FROM users;\n\n-- Select distinct values\nSELECT DISTINCT age FROM users;\n\n-- Count rows\nSELECT COUNT(*) FROM users;\nSELECT COUNT(*) AS total_users FROM users;\n\n-- Limit results\nSELECT * FROM users LIMIT 5;\nSELECT * FROM users LIMIT 5 OFFSET 10;  -- Skip 10, get 5\n\n-- Select with calculation\nSELECT username, age, age + 5 AS age_plus_5 FROM users;',
      },
      {
        id: 'where-clause',
        title: 'Where Clause',
        description: 'Filter data:',
        language: 'sql',
        code: "-- Basic conditions\nSELECT * FROM users WHERE age = 30;\nSELECT * FROM users WHERE age > 25;\nSELECT * FROM users WHERE age < 40;\nSELECT * FROM users WHERE age >= 30;\nSELECT * FROM users WHERE age <= 35;\nSELECT * FROM users WHERE age != 30;\nSELECT * FROM users WHERE age <> 30;  -- Not equal (alternative)\n\n-- Multiple conditions\nSELECT * FROM users WHERE age > 25 AND age < 40;\nSELECT * FROM users WHERE age = 25 OR age = 30;\nSELECT * FROM users WHERE NOT age = 30;\n\n-- IN operator\nSELECT * FROM users WHERE age IN (25, 30, 35);\n\n-- BETWEEN operator\nSELECT * FROM users WHERE age BETWEEN 25 AND 35;\n\n-- LIKE operator (case-sensitive pattern matching)\nSELECT * FROM users WHERE username LIKE 'j%';      -- Starts with 'j'\nSELECT * FROM users WHERE username LIKE '%n';      -- Ends with 'n'\nSELECT * FROM users WHERE username LIKE '%oh%';    -- Contains 'oh'\n\n-- ILIKE operator (case-insensitive pattern matching)\nSELECT * FROM users WHERE username ILIKE 'JOHN';\n\n-- NULL checks\nSELECT * FROM users WHERE email IS NULL;\nSELECT * FROM users WHERE email IS NOT NULL;",
      },
      {
        id: 'update-data',
        title: 'Update Data',
        description: 'Modify existing data:',
        language: 'sql',
        code: "-- Update single row\nUPDATE users SET age = 31 WHERE id = 1;\n\n-- Update multiple columns\nUPDATE users SET age = 31, email = 'newemail@example.com' WHERE id = 1;\n\n-- Update multiple rows\nUPDATE users SET age = age + 1 WHERE age < 30;\n\n-- Update and return updated rows\nUPDATE users SET age = 31 WHERE id = 1 RETURNING *;\n\n-- Update with subquery\nUPDATE users SET age = (SELECT AVG(age) FROM users) WHERE id = 1;",
      },
      {
        id: 'delete-data',
        title: 'Delete Data',
        description: 'Remove data from tables:',
        language: 'sql',
        code: '-- Delete specific rows\nDELETE FROM users WHERE id = 1;\nDELETE FROM users WHERE age > 50;\n\n-- Delete all rows (keeps table structure)\nDELETE FROM users;\n\n-- Delete and return deleted rows\nDELETE FROM users WHERE id = 1 RETURNING *;',
      },
      {
        id: 'order-by',
        title: 'Order By',
        description: 'Sort results:',
        language: 'sql',
        code: '-- Sort ascending (default)\nSELECT * FROM users ORDER BY age;\nSELECT * FROM users ORDER BY age ASC;\n\n-- Sort descending\nSELECT * FROM users ORDER BY age DESC;\n\n-- Sort by multiple columns\nSELECT * FROM users ORDER BY age DESC, username ASC;\n\n-- Sort with NULLS FIRST/LAST\nSELECT * FROM users ORDER BY email NULLS LAST;',
      },
      {
        id: 'aggregate-functions',
        title: 'Aggregate Functions',
        description: 'Perform calculations on data:',
        language: 'sql',
        code: '-- Count rows\nSELECT COUNT(*) FROM users;\nSELECT COUNT(DISTINCT age) FROM users;\n\n-- Sum values\nSELECT SUM(age) FROM users;\n\n-- Average\nSELECT AVG(age) FROM users;\n\n-- Minimum and maximum\nSELECT MIN(age) FROM users;\nSELECT MAX(age) FROM users;\n\n-- Multiple aggregates\nSELECT COUNT(*) AS total, AVG(age) AS average_age, MAX(age) AS oldest\nFROM users;',
      },
      {
        id: 'group-by',
        title: 'Group By',
        description: 'Group results for aggregation:',
        language: 'sql',
        code: '-- Group by single column\nSELECT age, COUNT(*) FROM users GROUP BY age;\n\n-- Group by multiple columns\nSELECT age, country, COUNT(*) FROM users GROUP BY age, country;\n\n-- Group with having (filter groups)\nSELECT age, COUNT(*) AS count FROM users\nGROUP BY age\nHAVING COUNT(*) > 2;',
      },
      {
        id: 'joins',
        title: 'Joins',
        description: 'Combine data from multiple tables:',
        language: 'sql',
        code: '-- INNER JOIN (only matching rows)\nSELECT users.username, orders.order_date\nFROM users\nINNER JOIN orders ON users.id = orders.user_id;\n\n-- LEFT JOIN (all from left table, matching from right)\nSELECT users.username, orders.order_date\nFROM users\nLEFT JOIN orders ON users.id = orders.user_id;\n\n-- RIGHT JOIN (all from right table, matching from left)\nSELECT users.username, orders.order_date\nFROM users\nRIGHT JOIN orders ON users.id = orders.user_id;\n\n-- FULL OUTER JOIN (all rows from both tables)\nSELECT users.username, orders.order_date\nFROM users\nFULL OUTER JOIN orders ON users.id = orders.user_id;\n\n-- Multiple joins\nSELECT users.username, orders.order_date, products.name\nFROM users\nINNER JOIN orders ON users.id = orders.user_id\nINNER JOIN products ON orders.product_id = products.id;\n\n-- Self join\nSELECT e1.name AS employee, e2.name AS manager\nFROM employees e1\nLEFT JOIN employees e2 ON e1.manager_id = e2.id;\n\n-- Join with table aliases\nSELECT u.username, o.order_date\nFROM users u\nINNER JOIN orders o ON u.id = o.user_id;',
      },
      {
        id: 'alter-table',
        title: 'Alter Table',
        description: 'Modify table structure:',
        language: 'sql',
        code: "-- Add column\nALTER TABLE users ADD COLUMN phone VARCHAR(20);\n\n-- Modify column type\nALTER TABLE users ALTER COLUMN age TYPE BIGINT;\n\n-- Set/drop NOT NULL\nALTER TABLE users ALTER COLUMN username SET NOT NULL;\nALTER TABLE users ALTER COLUMN username DROP NOT NULL;\n\n-- Set default value\nALTER TABLE users ALTER COLUMN status SET DEFAULT 'active';\n\n-- Rename column\nALTER TABLE users RENAME COLUMN age TO user_age;\n\n-- Drop column\nALTER TABLE users DROP COLUMN phone;\n\n-- Add primary key\nALTER TABLE users ADD PRIMARY KEY (id);\n\n-- Add foreign key\nALTER TABLE orders\nADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id);\n\n-- Add unique constraint\nALTER TABLE users ADD CONSTRAINT unique_email UNIQUE (email);\n\n-- Add check constraint\nALTER TABLE users ADD CONSTRAINT check_age CHECK (age >= 0);\n\n-- Drop constraint\nALTER TABLE users DROP CONSTRAINT unique_email;",
      },
      {
        id: 'constraints',
        title: 'Constraints',
        description: 'Rules for data in columns:',
        language: 'sql',
        code: "CREATE TABLE users (\n    id SERIAL PRIMARY KEY,                            -- Auto-increment, unique\n    username VARCHAR(50) NOT NULL,                      -- Cannot be null\n    email VARCHAR(100) UNIQUE,                            -- No duplicates\n    age INT CHECK (age >= 18),                              -- Must meet condition\n    status VARCHAR(20) DEFAULT 'active',                       -- Default value\n    user_id INT REFERENCES other_table(id),                       -- Foreign key\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\n-- Named constraints\nCREATE TABLE users (\n    id SERIAL PRIMARY KEY,\n    email VARCHAR(100),\n    CONSTRAINT unique_email UNIQUE (email),\n    CONSTRAINT check_email CHECK (email LIKE '%@%')\n);",
      },
      {
        id: 'indexes',
        title: 'Indexes',
        description: 'Speed up data retrieval:',
        language: 'sql',
        code: "-- Create index\nCREATE INDEX idx_username ON users(username);\n\n-- Create unique index\nCREATE UNIQUE INDEX idx_email ON users(email);\n\n-- Create index on multiple columns\nCREATE INDEX idx_name_age ON users(username, age);\n\n-- Create index with condition (partial index)\nCREATE INDEX idx_active_users ON users(username) WHERE status = 'active';\n\n-- List indexes\n\\di\n\n-- Drop index\nDROP INDEX idx_username;",
      },
      {
        id: 'string-functions',
        title: 'String Functions',
        description: 'Work with text data:',
        language: 'sql',
        code: "-- Concatenate strings\nSELECT first_name || ' ' || last_name AS full_name FROM users;\nSELECT CONCAT(first_name, ' ', last_name) FROM users;\n\n-- String length\nSELECT LENGTH(username) FROM users;\n\n-- Uppercase and lowercase\nSELECT UPPER(username) FROM users;\nSELECT LOWER(username) FROM users;\n\n-- Substring\nSELECT SUBSTRING(username, 1, 3) FROM users;  -- First 3 characters\nSELECT LEFT(username, 3) FROM users;\nSELECT RIGHT(username, 3) FROM users;\n\n-- Trim whitespace\nSELECT TRIM(username) FROM users;\nSELECT LTRIM(username) FROM users;\nSELECT RTRIM(username) FROM users;\n\n-- Replace text\nSELECT REPLACE(email, '@example.com', '@test.com') FROM users;\n\n-- Position of substring\nSELECT POSITION('test' IN email) FROM users;\n\n-- Pad string\nSELECT LPAD(username, 10, '*') FROM users;\nSELECT RPAD(username, 10, '*') FROM users;",
      },
      {
        id: 'date-functions',
        title: 'Date Functions',
        description: 'Work with dates and times:',
        language: 'sql',
        code: "-- Current date and time\nSELECT NOW();\nSELECT CURRENT_DATE;\nSELECT CURRENT_TIME;\nSELECT CURRENT_TIMESTAMP;\n\n-- Extract parts of date\nSELECT EXTRACT(YEAR FROM created_at) FROM users;\nSELECT EXTRACT(MONTH FROM created_at) FROM users;\nSELECT EXTRACT(DAY FROM created_at) FROM users;\n\n-- Format date\nSELECT TO_CHAR(created_at, 'YYYY-MM-DD') FROM users;\nSELECT TO_CHAR(created_at, 'Day, Month DD, YYYY') FROM users;\n\n-- Add/subtract time (interval)\nSELECT created_at + INTERVAL '1 day' FROM users;\nSELECT created_at + INTERVAL '1 month' FROM users;\nSELECT created_at - INTERVAL '1 year' FROM users;\n\n-- Difference between dates\nSELECT AGE(NOW(), created_at) FROM users;\nSELECT NOW() - created_at AS time_diff FROM users;\n\n-- Convert string to date\nSELECT TO_DATE('2024-12-10', 'YYYY-MM-DD');\nSELECT '2024-12-10'::DATE;",
      },
      {
        id: 'numeric-functions',
        title: 'Numeric Functions',
        description: 'Work with numbers:',
        language: 'sql',
        code: '-- Round numbers\nSELECT ROUND(price, 2) FROM products;\nSELECT CEIL(price) FROM products;\nSELECT FLOOR(price) FROM products;\n\n-- Absolute value\nSELECT ABS(balance) FROM accounts;\n\n-- Power and square root\nSELECT POWER(2, 3);    -- 8\nSELECT SQRT(16);       -- 4\n\n-- Random number\nSELECT RANDOM();                      -- Random between 0 and 1\nSELECT FLOOR(RANDOM() * 100);          -- Random between 0 and 99',
      },
      {
        id: 'conditional-logic',
        title: 'Conditional Logic',
        description: 'CASE statements in queries:',
        language: 'sql',
        code: "-- CASE statement\nSELECT username,\n       CASE\n           WHEN age < 18 THEN 'Minor'\n           WHEN age BETWEEN 18 AND 65 THEN 'Adult'\n           ELSE 'Senior'\n       END AS age_group\nFROM users;\n\n-- COALESCE (return first non-null value)\nSELECT username, COALESCE(phone, email, 'No contact') FROM users;\n\n-- NULLIF (return null if values are equal)\nSELECT NULLIF(quantity, 0) FROM orders;",
      },
      {
        id: 'subqueries',
        title: 'Subqueries',
        description: 'Query within a query:',
        language: 'sql',
        code: '-- Subquery in WHERE\nSELECT * FROM users\nWHERE age = (SELECT MAX(age) FROM users);\n\n-- Subquery with IN\nSELECT * FROM users\nWHERE id IN (SELECT user_id FROM orders WHERE amount > 100);\n\n-- Subquery in SELECT\nSELECT username,\n       (SELECT COUNT(*) FROM orders WHERE orders.user_id = users.id) AS order_count\nFROM users;\n\n-- Subquery in FROM\nSELECT avg_age FROM\n(SELECT AVG(age) AS avg_age FROM users) AS subquery;\n\n-- EXISTS\nSELECT * FROM users\nWHERE EXISTS (SELECT 1 FROM orders WHERE orders.user_id = users.id);',
      },
      {
        id: 'union',
        title: 'Union',
        description: 'Combine results from multiple queries:',
        language: 'sql',
        code: '-- UNION (removes duplicates)\nSELECT username FROM users\nUNION\nSELECT username FROM customers;\n\n-- UNION ALL (keeps duplicates)\nSELECT username FROM users\nUNION ALL\nSELECT username FROM customers;',
      },
      {
        id: 'views',
        title: 'Views',
        description: 'Virtual tables based on queries:',
        language: 'sql',
        code: "-- Create view\nCREATE VIEW active_users AS\nSELECT id, username, email FROM users WHERE status = 'active';\n\n-- Use view\nSELECT * FROM active_users;\n\n-- Update view\nCREATE OR REPLACE VIEW active_users AS\nSELECT id, username, email, age FROM users WHERE status = 'active';\n\n-- Drop view\nDROP VIEW active_users;\nDROP VIEW IF EXISTS active_users;\n\n-- Materialized view (stores data, needs refresh)\nCREATE MATERIALIZED VIEW user_stats AS\nSELECT status, COUNT(*) FROM users GROUP BY status;\n\nREFRESH MATERIALIZED VIEW user_stats;",
      },
      {
        id: 'transactions',
        title: 'Transactions',
        description: 'Group multiple operations:',
        language: 'sql',
        code: '-- Start transaction\nBEGIN;\n\n-- Execute queries\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\n\n-- Commit (save changes)\nCOMMIT;\n\n-- Or rollback (undo changes)\nROLLBACK;\n\n-- Savepoints (partial rollback)\nBEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nSAVEPOINT my_savepoint;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nROLLBACK TO my_savepoint;  -- Undo only the second update\nCOMMIT;',
      },
      {
        id: 'json-jsonb',
        title: 'JSON & JSONB',
        description: 'Work with JSON data (PostgreSQL specialty):',
        language: 'sql',
        code: "-- Create table with JSONB\nCREATE TABLE products (\n    id SERIAL PRIMARY KEY,\n    data JSONB\n);\n\n-- Insert JSON data\nINSERT INTO products (data)\nVALUES ('{\"name\": \"Laptop\", \"price\": 999, \"tags\": [\"electronics\", \"computers\"]}');\n\n-- Query JSON fields\nSELECT data->>'name' AS name FROM products;         -- As text\nSELECT data->'name' AS name FROM products;          -- As JSON\n\n-- Nested JSON access\nSELECT data->'details'->>'color' FROM products;\n\n-- Filter by JSON value\nSELECT * FROM products WHERE data->>'name' = 'Laptop';\n\n-- JSON array contains\nSELECT * FROM products WHERE data->'tags' ? 'electronics';\n\n-- Update JSON field\nUPDATE products SET data = jsonb_set(data, '{price}', '899');\n\n-- Index JSONB for performance\nCREATE INDEX idx_data ON products USING GIN (data);",
      },
      {
        id: 'arrays',
        title: 'Arrays',
        description: "PostgreSQL's native array support:",
        language: 'sql',
        code: "-- Create table with array column\nCREATE TABLE posts (\n    id SERIAL PRIMARY KEY,\n    tags TEXT[]\n);\n\n-- Insert array data\nINSERT INTO posts (tags) VALUES (ARRAY['tech', 'programming', 'sql']);\nINSERT INTO posts (tags) VALUES ('{tech, programming}');\n\n-- Query array elements\nSELECT tags[1] FROM posts;  -- First element (1-indexed)\n\n-- Check if array contains value\nSELECT * FROM posts WHERE 'tech' = ANY(tags);\nSELECT * FROM posts WHERE tags @> ARRAY['tech'];\n\n-- Array length\nSELECT ARRAY_LENGTH(tags, 1) FROM posts;\n\n-- Unnest array (convert to rows)\nSELECT UNNEST(tags) FROM posts;\n\n-- Append to array\nUPDATE posts SET tags = ARRAY_APPEND(tags, 'new_tag') WHERE id = 1;",
      },
      {
        id: 'window-functions',
        title: 'Window Functions',
        description: 'Advanced analytical queries:',
        language: 'sql',
        code: '-- ROW_NUMBER (unique sequential number)\nSELECT username, age,\n       ROW_NUMBER() OVER (ORDER BY age) AS row_num\nFROM users;\n\n-- RANK (with gaps for ties)\nSELECT username, age,\n       RANK() OVER (ORDER BY age DESC) AS rank\nFROM users;\n\n-- DENSE_RANK (no gaps for ties)\nSELECT username, age,\n       DENSE_RANK() OVER (ORDER BY age DESC) AS rank\nFROM users;\n\n-- PARTITION BY (group before applying window function)\nSELECT username, department, salary,\n       RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rank\nFROM employees;\n\n-- Running total\nSELECT order_date, amount,\n       SUM(amount) OVER (ORDER BY order_date) AS running_total\nFROM orders;\n\n-- LAG and LEAD (access previous/next row)\nSELECT username, age,\n       LAG(age) OVER (ORDER BY age) AS previous_age,\n       LEAD(age) OVER (ORDER BY age) AS next_age\nFROM users;',
      },
      {
        id: 'common-table-expressions-cte',
        title: 'Common Table Expressions (CTE)',
        description: 'Organize complex queries:',
        language: 'sql',
        code: "-- Basic CTE\nWITH high_earners AS (\n    SELECT * FROM employees WHERE salary > 50000\n)\nSELECT * FROM high_earners WHERE department = 'Sales';\n\n-- Multiple CTEs\nWITH\nsales_data AS (\n    SELECT * FROM orders WHERE status = 'completed'\n),\ncustomer_data AS (\n    SELECT * FROM customers WHERE active = true\n)\nSELECT s.*, c.name\nFROM sales_data s\nJOIN customer_data c ON s.customer_id = c.id;\n\n-- Recursive CTE (for hierarchical data)\nWITH RECURSIVE employee_hierarchy AS (\n    SELECT id, name, manager_id, 1 AS level\n    FROM employees\n    WHERE manager_id IS NULL\n\n    UNION ALL\n\n    SELECT e.id, e.name, e.manager_id, eh.level + 1\n    FROM employees e\n    JOIN employee_hierarchy eh ON e.manager_id = eh.id\n)\nSELECT * FROM employee_hierarchy;",
      },
      {
        id: 'users-and-privileges',
        title: 'Users and Privileges',
        description: 'Manage database users:',
        language: 'sql',
        code: "-- Create user/role\nCREATE USER myuser WITH PASSWORD 'password';\nCREATE ROLE myrole WITH LOGIN PASSWORD 'password';\n\n-- Grant privileges\nGRANT ALL PRIVILEGES ON DATABASE mydb TO myuser;\nGRANT SELECT, INSERT ON users TO myuser;\nGRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO myuser;\n\n-- Revoke privileges\nREVOKE ALL PRIVILEGES ON mydb FROM myuser;\n\n-- Change password\nALTER USER myuser WITH PASSWORD 'newpassword';\n\n-- Delete user\nDROP USER myuser;\n\n-- List users\n\\du",
      },
      {
        id: 'backup-and-restore',
        title: 'Backup and Restore',
        description: 'Save and restore database:',
        language: 'bash',
        code: '# Backup database (run in terminal)\npg_dump -U username -d database_name > backup.sql\n\n# Backup with custom format (compressed)\npg_dump -U username -Fc database_name > backup.dump\n\n# Backup specific tables\npg_dump -U username -d database_name -t table1 -t table2 > backup.sql\n\n# Restore database\npsql -U username -d database_name < backup.sql\n\n# Restore custom format\npg_restore -U username -d database_name backup.dump',
      },
      {
        id: 'useful-commands-psql',
        title: 'Useful Commands (psql)',
        description: 'Helpful PostgreSQL command-line commands:',
        language: 'sql',
        code: "-- Show PostgreSQL version\nSELECT version();\n\n-- Show current user\nSELECT current_user;\n\n-- Show current database\nSELECT current_database();\n\n-- List databases\n\\l\n\n-- Connect to database\n\\c database_name\n\n-- List tables\n\\dt\n\n-- Describe table structure\n\\d table_name\n\n-- List all schemas\n\\dn\n\n-- Show table size\nSELECT pg_size_pretty(pg_total_relation_size('users'));\n\n-- Show all running queries\nSELECT * FROM pg_stat_activity;\n\n-- Kill a query\nSELECT pg_terminate_backend(pid);\n\n-- Explain query plan (for optimization)\nEXPLAIN SELECT * FROM users WHERE age > 25;\nEXPLAIN ANALYZE SELECT * FROM users WHERE age > 25;\n\n-- Quit psql\n\\q",
      },
      {
        id: 'common-patterns',
        title: 'Common Patterns',
        description: 'Frequently used query patterns:',
        language: 'sql',
        code: "-- Pagination\nSELECT * FROM users ORDER BY id LIMIT 10 OFFSET 20;\n\n-- Get top N records\nSELECT * FROM products ORDER BY price DESC LIMIT 5;\n\n-- Find records not in another table\nSELECT * FROM users\nWHERE id NOT IN (SELECT user_id FROM orders);\n\n-- Upsert (insert or update)\nINSERT INTO users (id, username, email)\nVALUES (1, 'john', 'john@example.com')\nON CONFLICT (id)\nDO UPDATE SET username = EXCLUDED.username, email = EXCLUDED.email;\n\n-- Get random rows\nSELECT * FROM users ORDER BY RANDOM() LIMIT 5;\n\n-- Case-insensitive search\nSELECT * FROM users WHERE LOWER(username) = LOWER('John');\n\n-- Full text search\nSELECT * FROM articles\nWHERE to_tsvector('english', content) @@ to_tsquery('english', 'search & term');\n\n-- Generate series (useful for date ranges)\nSELECT generate_series('2024-01-01'::date, '2024-01-10'::date, '1 day'::interval);",
      },
    ],
  },

  mongodb: {
    lang: 'mongodb',
    label: 'MongoDB',
    title: 'MongoDB',
    icon: '/mongodb-icon-dark.svg',
    color: '#47A248',
    sections: [
      {
        id: 'setup',
        title: 'Setup',
        description: 'Install and connect to MongoDB:',
        language: 'bash',
        code: '# Check MongoDB version\nmongod --version\n\n# Start MongoDB server\nmongod\n\n# Connect via mongo shell\nmongosh\n\n# Connect to specific database\nmongosh "mongodb://localhost:27017/mydb"\n\n# Install MongoDB driver for Node.js\nnpm install mongodb\n\n# Install Mongoose (ODM for Node.js)\nnpm install mongoose',
      },
      {
        id: 'database-collection-basics',
        title: 'Database & Collection Basics',
        description: 'Work with databases and collections:',
        language: 'javascript',
        code: '// Show all databases\nshow dbs\n\n// Switch to / create database\nuse mydb\n\n// Show current database\ndb\n\n// Show all collections\nshow collections\n\n// Create collection (also created automatically on first insert)\ndb.createCollection("users")\n\n// Drop collection\ndb.users.drop()\n\n// Drop database\ndb.dropDatabase()',
      },
      {
        id: 'insert-documents',
        title: 'Insert Documents',
        description: 'Add data to a collection:',
        language: 'javascript',
        code: "// Insert single document\ndb.users.insertOne({\n  name: 'John',\n  email: 'john@example.com',\n  age: 30,\n})\n\n// Insert multiple documents\ndb.users.insertMany([\n  { name: 'Jane', email: 'jane@example.com', age: 25 },\n  { name: 'Bob', email: 'bob@example.com', age: 35 },\n])\n\n// MongoDB auto-generates _id if not provided\ndb.users.insertOne({ name: 'Mike' })\n// _id: ObjectId(\"...\")\n\n// Insert with custom _id\ndb.users.insertOne({ _id: 1, name: 'Custom ID' })",
      },
      {
        id: 'find-documents',
        title: 'Find Documents',
        description: 'Query data from a collection:',
        language: 'javascript',
        code: "// Find all documents\ndb.users.find()\n\n// Find with pretty formatting\ndb.users.find().pretty()\n\n// Find one document\ndb.users.findOne({ name: 'John' })\n\n// Find with condition\ndb.users.find({ age: 30 })\n\n// Find with multiple conditions (AND)\ndb.users.find({ age: 30, name: 'John' })\n\n// Select specific fields (projection)\ndb.users.find({}, { name: 1, email: 1 }) // Include fields\ndb.users.find({}, { password: 0 }) // Exclude field\ndb.users.find({}, { _id: 0, name: 1 }) // Exclude _id\n\n// Count documents\ndb.users.countDocuments()\ndb.users.countDocuments({ age: { $gt: 25 } })\n\n// Limit and skip (pagination)\ndb.users.find().limit(10)\ndb.users.find().skip(10).limit(10)\n\n// Sort results\ndb.users.find().sort({ age: 1 }) // Ascending\ndb.users.find().sort({ age: -1 }) // Descending\ndb.users.find().sort({ age: -1, name: 1 }) // Multiple fields",
      },
      {
        id: 'query-operators',
        title: 'Query Operators',
        description: 'Filter documents with comparison and logical operators:',
        language: 'javascript',
        code: "// Comparison operators\ndb.users.find({ age: { $eq: 30 } }) // Equal\ndb.users.find({ age: { $ne: 30 } }) // Not equal\ndb.users.find({ age: { $gt: 25 } }) // Greater than\ndb.users.find({ age: { $gte: 25 } }) // Greater than or equal\ndb.users.find({ age: { $lt: 40 } }) // Less than\ndb.users.find({ age: { $lte: 40 } }) // Less than or equal\ndb.users.find({ age: { $in: [25, 30, 35] } }) // In array\ndb.users.find({ age: { $nin: [25, 30] } }) // Not in array\n\n// Logical operators\ndb.users.find({ $and: [{ age: { $gt: 25 } }, { age: { $lt: 40 } }] })\ndb.users.find({ $or: [{ name: 'John' }, { name: 'Jane' }] })\ndb.users.find({ $nor: [{ name: 'John' }, { age: 30 }] })\ndb.users.find({ age: { $not: { $eq: 30 } } })\n\n// Element operators\ndb.users.find({ email: { $exists: true } }) // Field exists\ndb.users.find({ email: { $exists: false } }) // Field doesn't exist\ndb.users.find({ age: { $type: 'number' } }) // Check type\n\n// Evaluation operators\ndb.users.find({ name: { $regex: '^J' } }) // Regex pattern\ndb.users.find({ name: /^J/ }) // Regex shorthand\ndb.users.find({ name: { $regex: 'john', $options: 'i' } }) // Case insensitive\n\n// Array operators\ndb.posts.find({ tags: { $all: ['mongodb', 'database'] } }) // Contains all\ndb.posts.find({ tags: 'mongodb' }) // Contains value\ndb.posts.find({ 'comments.2': { $exists: true } }) // Array size check\ndb.posts.find({ tags: { $size: 3 } }) // Exact array size\n\n// Nested field query (dot notation)\ndb.users.find({ 'address.city': 'New York' })",
      },
      {
        id: 'update-documents',
        title: 'Update Documents',
        description: 'Modify existing documents:',
        language: 'javascript',
        code: "// Update single document\ndb.users.updateOne({ name: 'John' }, { $set: { age: 31 } })\n\n// Update multiple documents\ndb.users.updateMany({ age: { $lt: 30 } }, { $set: { status: 'young' } })\n\n// Replace entire document\ndb.users.replaceOne({ name: 'John' }, { name: 'John', age: 31, email: 'newemail@example.com' })\n\n// Update operators\ndb.users.updateOne({ name: 'John' }, { $set: { age: 31 } }) // Set field\ndb.users.updateOne({ name: 'John' }, { $unset: { age: '' } }) // Remove field\ndb.users.updateOne({ name: 'John' }, { $inc: { age: 1 } }) // Increment\ndb.users.updateOne({ name: 'John' }, { $mul: { age: 2 } }) // Multiply\ndb.users.updateOne({ name: 'John' }, { $rename: { age: 'years' } }) // Rename field\ndb.users.updateOne({ name: 'John' }, { $min: { age: 25 } }) // Set if less\ndb.users.updateOne({ name: 'John' }, { $max: { age: 35 } }) // Set if greater\n\n// Array update operators\ndb.posts.updateOne({ _id: 1 }, { $push: { tags: 'new-tag' } }) // Add to array\ndb.posts.updateOne({ _id: 1 }, { $push: { tags: { $each: ['a', 'b'] } } }) // Add multiple\ndb.posts.updateOne({ _id: 1 }, { $pull: { tags: 'old-tag' } }) // Remove from array\ndb.posts.updateOne({ _id: 1 }, { $addToSet: { tags: 'unique-tag' } }) // Add if not exists\ndb.posts.updateOne({ _id: 1 }, { $pop: { tags: 1 } }) // Remove last (1) or first (-1)\n\n// Upsert (insert if not found)\ndb.users.updateOne({ email: 'new@example.com' }, { $set: { name: 'New User' } }, { upsert: true })\n\n// Update and return document (findOneAndUpdate)\ndb.users.findOneAndUpdate({ name: 'John' }, { $set: { age: 31 } }, { returnDocument: 'after' })",
      },
      {
        id: 'delete-documents',
        title: 'Delete Documents',
        description: 'Remove data from collections:',
        language: 'javascript',
        code: "// Delete single document\ndb.users.deleteOne({ name: 'John' })\n\n// Delete multiple documents\ndb.users.deleteMany({ age: { $lt: 18 } })\n\n// Delete all documents in collection\ndb.users.deleteMany({})\n\n// Delete and return document\ndb.users.findOneAndDelete({ name: 'John' })",
      },
      {
        id: 'aggregation-pipeline',
        title: 'Aggregation Pipeline',
        description: 'Process and transform data through stages:',
        language: 'javascript',
        code: "// Basic aggregation\ndb.orders.aggregate([\n  { $match: { status: 'completed' } },\n  { $group: { _id: '$customerId', total: { $sum: '$amount' } } },\n  { $sort: { total: -1 } },\n])\n\n// $match (filter documents, like find)\ndb.orders.aggregate([{ $match: { amount: { $gt: 100 } } }])\n\n// $group (group and aggregate)\ndb.orders.aggregate([\n  {\n    $group: {\n      _id: '$customerId',\n      totalSpent: { $sum: '$amount' },\n      orderCount: { $sum: 1 },\n      avgAmount: { $avg: '$amount' },\n      maxAmount: { $max: '$amount' },\n      minAmount: { $min: '$amount' },\n    },\n  },\n])\n\n// $project (select/transform fields)\ndb.users.aggregate([{ $project: { name: 1, email: 1, yearBorn: { $subtract: [2024, '$age'] } } }])\n\n// $sort\ndb.orders.aggregate([{ $sort: { amount: -1 } }])\n\n// $limit and $skip\ndb.orders.aggregate([{ $skip: 10 }, { $limit: 5 }])\n\n// $lookup (join collections)\ndb.orders.aggregate([\n  {\n    $lookup: {\n      from: 'users',\n      localField: 'userId',\n      foreignField: '_id',\n      as: 'userDetails',\n    },\n  },\n])\n\n// $unwind (deconstruct array field)\ndb.posts.aggregate([{ $unwind: '$tags' }])\n\n// $count\ndb.users.aggregate([{ $match: { age: { $gt: 25 } } }, { $count: 'totalUsers' }])\n\n// Complete pipeline example\ndb.orders.aggregate([\n  { $match: { status: 'completed' } },\n  { $group: { _id: '$customerId', total: { $sum: '$amount' } } },\n  { $sort: { total: -1 } },\n  { $limit: 10 },\n  {\n    $lookup: {\n      from: 'customers',\n      localField: '_id',\n      foreignField: '_id',\n      as: 'customer',\n    },\n  },\n])",
      },
      {
        id: 'indexes',
        title: 'Indexes',
        description: 'Speed up query performance:',
        language: 'javascript',
        code: "// Create index\ndb.users.createIndex({ email: 1 }) // Ascending\ndb.users.createIndex({ email: -1 }) // Descending\n\n// Create unique index\ndb.users.createIndex({ email: 1 }, { unique: true })\n\n// Create compound index\ndb.users.createIndex({ name: 1, age: -1 })\n\n// Create text index (for text search)\ndb.articles.createIndex({ content: 'text' })\n\n// List all indexes\ndb.users.getIndexes()\n\n// Drop index\ndb.users.dropIndex('email_1')\n\n// Drop all indexes (except _id)\ndb.users.dropIndexes()\n\n// Explain query performance\ndb.users.find({ email: 'john@example.com' }).explain('executionStats')",
      },
      {
        id: 'text-search',
        title: 'Text Search',
        description: 'Search text content:',
        language: 'javascript',
        code: "// Create text index first\ndb.articles.createIndex({ title: 'text', content: 'text' })\n\n// Search text\ndb.articles.find({ $text: { $search: 'mongodb database' } })\n\n// Search with score\ndb.articles\n  .find({ $text: { $search: 'mongodb' } }, { score: { $meta: 'textScore' } })\n  .sort({ score: { $meta: 'textScore' } })\n\n// Exact phrase search\ndb.articles.find({ $text: { $search: '\"exact phrase\"' } })\n\n// Exclude term\ndb.articles.find({ $text: { $search: 'mongodb -sql' } })",
      },
      {
        id: 'schema-design-embedding-vs-referencing',
        title: 'Schema Design (Embedding vs Referencing)',
        description: 'Common patterns for structuring data:',
        language: 'javascript',
        code: "// Embedded document (one-to-few relationship)\ndb.users.insertOne({\n  name: 'John',\n  address: {\n    street: '123 Main St',\n    city: 'New York',\n    zip: '10001',\n  },\n})\n\n// Embedded array (one-to-many, limited)\ndb.users.insertOne({\n  name: 'John',\n  orders: [\n    { product: 'Laptop', price: 999 },\n    { product: 'Mouse', price: 25 },\n  ],\n})\n\n// Referencing (one-to-many, large collections)\n// users collection\ndb.users.insertOne({ _id: 1, name: 'John' })\n\n// orders collection (references user)\ndb.orders.insertOne({ userId: 1, product: 'Laptop', price: 999 })\n\n// Query with reference (manual join)\nconst user = db.users.findOne({ _id: 1 })\nconst orders = db.orders.find({ userId: user._id })",
      },
      {
        id: 'mongoose-node-js-odm',
        title: 'Mongoose (Node.js ODM)',
        description: 'Object modeling for MongoDB in Node.js:',
        language: 'javascript',
        code: "const mongoose = require('mongoose')\n\n// Connect to database\nmongoose.connect('mongodb://localhost:27017/mydb')\n\n// Define schema\nconst userSchema = new mongoose.Schema({\n  name: { type: String, required: true },\n  email: { type: String, required: true, unique: true },\n  age: { type: Number, min: 0 },\n  createdAt: { type: Date, default: Date.now },\n})\n\n// Create model\nconst User = mongoose.model('User', userSchema)\n\n// Create document\nconst user = new User({ name: 'John', email: 'john@example.com' })\nawait user.save()\n\n// Or using create\nawait User.create({ name: 'John', email: 'john@example.com' })\n\n// Find documents\nconst users = await User.find()\nconst user = await User.findById(id)\nconst user = await User.findOne({ email: 'john@example.com' })\n\n// Find with conditions\nconst users = await User.find({ age: { $gte: 18 } })\n\n// Update document\nawait User.findByIdAndUpdate(id, { name: 'Jane' })\nawait User.updateOne({ _id: id }, { $set: { name: 'Jane' } })\n\n// Delete document\nawait User.findByIdAndDelete(id)\n\n// Populate (join referenced documents)\nconst orderSchema = new mongoose.Schema({\n  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },\n  product: String,\n})\nconst Order = mongoose.model('Order', orderSchema)\n\nconst orders = await Order.find().populate('userId')\n\n// Schema validation\nconst userSchema = new mongoose.Schema({\n  email: {\n    type: String,\n    required: [true, 'Email is required'],\n    unique: true,\n    match: [/^\\S+@\\S+\\.\\S+$/, 'Invalid email'],\n  },\n  age: {\n    type: Number,\n    min: [0, 'Age cannot be negative'],\n    max: 120,\n  },\n})\n\n// Schema methods\nuserSchema.methods.greet = function () {\n  return `Hello, ${this.name}`\n}\n\nconst user = await User.findById(id)\nuser.greet()\n\n// Middleware (hooks)\nuserSchema.pre('save', function (next) {\n  console.log('About to save user')\n  next()\n})",
      },
      {
        id: 'node-js-mongodb-driver-native',
        title: 'Node.js MongoDB Driver (native)',
        description: 'Direct MongoDB usage without Mongoose:',
        language: 'javascript',
        code: "const { MongoClient } = require('mongodb')\n\nconst client = new MongoClient('mongodb://localhost:27017')\n\nasync function main() {\n  await client.connect()\n  const db = client.db('mydb')\n  const users = db.collection('users')\n\n  // Insert\n  await users.insertOne({ name: 'John', email: 'john@example.com' })\n\n  // Find\n  const allUsers = await users.find().toArray()\n  const user = await users.findOne({ name: 'John' })\n\n  // Update\n  await users.updateOne({ name: 'John' }, { $set: { age: 31 } })\n\n  // Delete\n  await users.deleteOne({ name: 'John' })\n\n  await client.close()\n}\n\nmain()",
      },
      {
        id: 'data-types',
        title: 'Data Types',
        description: 'BSON data types used in MongoDB:',
        language: 'javascript',
        code: '// String\n{ name: "John" }\n\n// Number (int, long, double, decimal)\n{ age: 30 }\n{ price: 19.99 }\n\n// Boolean\n{ isActive: true }\n\n// Date\n{ createdAt: new Date() }\n{ createdAt: ISODate("2024-12-10T00:00:00Z") }\n\n// Array\n{ tags: ["mongodb", "database"] }\n\n// Embedded document\n{ address: { city: "New York", zip: "10001" } }\n\n// ObjectId\n{ _id: ObjectId("507f1f77bcf86cd799439011") }\n\n// Null\n{ middleName: null }\n\n// Binary data\n{ file: BinData(0, "base64string") }',
      },
      {
        id: 'common-patterns',
        title: 'Common Patterns',
        description: 'Frequently used MongoDB patterns:',
        language: 'javascript',
        code: "// Pagination\ndb.users.find().skip(20).limit(10)\n\n// Search with regex (case insensitive)\ndb.users.find({ name: { $regex: search, $options: 'i' } })\n\n// Get distinct values\ndb.users.distinct('city')\n\n// Check if array field contains value\ndb.posts.find({ tags: 'mongodb' })\n\n// Update nested field\ndb.users.updateOne({ _id: 1 }, { $set: { 'address.city': 'Boston' } })\n\n// Bulk operations\ndb.users.bulkWrite([\n  { insertOne: { document: { name: 'John' } } },\n  { updateOne: { filter: { name: 'Jane' }, update: { $set: { age: 26 } } } },\n  { deleteOne: { filter: { name: 'Bob' } } },\n])\n\n// Transaction (multi-document ACID)\nconst session = client.startSession()\nsession.startTransaction()\ntry {\n  await users.updateOne({ _id: 1 }, { $inc: { balance: -100 } }, { session })\n  await users.updateOne({ _id: 2 }, { $inc: { balance: 100 } }, { session })\n  await session.commitTransaction()\n} catch (error) {\n  await session.abortTransaction()\n} finally {\n  session.endSession()\n}\n\n// Change streams (watch for changes)\nconst changeStream = db.collection('users').watch()\nchangeStream.on('change', (change) => {\n  console.log(change)\n})",
      },
    ],
  },

  cpp: {
    lang: 'cpp',
    label: 'C++',
    title: 'C++',
    icon: '/c-plusplus.svg',
    color: '#00599C',
    sections: [
      {
        id: 'setup',
        title: 'Setup',
        description: 'Compile and run a C++ program:',
        language: 'cpp',
        code: '# Compile with g++\ng++ program.cpp -o program\n\n# Run compiled program\n./program\n\n# Compile with C++17 standard\ng++ -std=c++17 program.cpp -o program\n\n// program.cpp\n#include <iostream>\n\nint main() {\n    std::cout << "Hello World" << std::endl;\n    return 0;\n}',
      },
      {
        id: 'basic-syntax',
        title: 'Basic Syntax',
        description: 'C++ code structure:',
        language: 'cpp',
        code: '// Single line comment\n/* Multi-line\n   comment */\n\n#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello World" << endl;\n    cout << "No newline needed for next";\n    return 0;  // 0 means success\n}',
      },
      {
        id: 'variables',
        title: 'Variables',
        description: 'Store and use data:',
        language: 'cpp',
        code: '// Declare with explicit type\nint age = 25;\ndouble price = 9.99;\nchar grade = \'A\';\nbool isActive = true;\nstring name = "John";  // needs #include <string>\n\n// Multiple declarations\nint x = 1, y = 2, z = 3;\n\n// Constants\nconst double PI = 3.14159;\n\n// auto (type inference, C++11+)\nauto count = 10;\nauto message = string("Hello");',
      },
      {
        id: 'data-types',
        title: 'Data Types',
        description: 'Common data types in C++:',
        language: 'cpp',
        code: '// Integer types\nint number = 42;                // Typically 4 bytes\nshort smallNumber = 100;        // Typically 2 bytes\nlong bigNumber = 123456789L;    // Typically 4 or 8 bytes\nlong long veryBig = 123456789012LL;  // At least 8 bytes\nunsigned int positive = 42;     // Non-negative only\n\n// Floating point types\nfloat decimal1 = 3.14f;         // Single precision\ndouble decimal2 = 3.14159;      // Double precision\n\n// Character types\nchar letter = \'A\';\n\n// Boolean\nbool isTrue = true;\n\n// String (needs #include <string>)\nstring text = "Hello World";\n\n// Type conversion (casting)\ndouble d = 3.99;\nint i = (int) d;         // 3 (C-style cast)\nint i2 = static_cast<int>(d);  // 3 (C++ style, preferred)\n\n// sizeof operator\nsizeof(int);  // Number of bytes',
      },
      {
        id: 'input-output',
        title: 'Input & Output',
        description: 'Handle console input and output:',
        language: 'cpp',
        code: '#include <iostream>\nusing namespace std;\n\n// Output\ncout << "Hello World" << endl;\ncout << "Value: " << 42 << endl;\ncout << "Multiple " << "values " << "concatenated" << endl;\n\n// Input\nint age;\ncout << "Enter age: ";\ncin >> age;\n\n// Multiple inputs\nint x, y;\ncin >> x >> y;\n\n// Reading a full line (with spaces)\nstring name;\ngetline(cin, name);\n\n// Formatted output\n#include <iomanip>\ncout << fixed << setprecision(2) << 3.14159 << endl;  // 3.14',
      },
      {
        id: 'strings',
        title: 'Strings',
        description: 'Working with text:',
        language: 'cpp',
        code: '#include <string>\nusing namespace std;\n\nstring text = "Hello World";\n\n// String length\ntext.length();\ntext.size();\n\n// Access characters\ntext[0];                 // \'H\'\ntext.at(0);               // \'H\' (bounds-checked)\n\n// Concatenation\nstring full = "Hello" + string(" ") + "World";\ntext += "!";\n\n// Substring\ntext.substr(0, 5);        // "Hello"\ntext.substr(6);           // "World"\n\n// Find\ntext.find("World");       // 6 (returns index or string::npos)\nif (text.find("World") != string::npos) {\n    cout << "Found!" << endl;\n}\n\n// Replace\ntext.replace(0, 5, "Hi");  // "Hi World"\n\n// Compare\ntext == "Hello World";      // true\ntext.compare("Hello") == 0;  // false\n\n// Convert case (manual, needs #include <algorithm>)\ntransform(text.begin(), text.end(), text.begin(), ::toupper);\n\n// Convert to/from number\n#include <string>\nint num = stoi("42");\ndouble d = stod("3.14");\nstring s = to_string(42);\n\n// Loop through string\nfor (char c : text) {\n    cout << c;\n}',
      },
      {
        id: 'numbers-math',
        title: 'Numbers & Math',
        description: 'Working with numbers:',
        language: 'cpp',
        code: '#include <cmath>\n\n// Math operations\nint sum = 5 + 3;\nint diff = 5 - 3;\nint product = 5 * 3;\nint quotient = 6 / 3;\nint remainder = 7 % 3;\n\n// Increment/decrement\nint count = 0;\ncount++;\ncount--;\ncount += 5;\ncount -= 2;\n\n// Math functions\nabs(-5);           // 5\npow(2, 3);          // 8 (power)\nsqrt(16);           // 4\nceil(3.3);          // 4\nfloor(3.7);         // 3\nround(3.5);         // 4\n\n// Min/max\nmax(1, 5);          // 5\nmin(1, 5);          // 1\n\n// Random numbers\n#include <cstdlib>\n#include <ctime>\nsrand(time(0));        // Seed random generator\nint randomNum = rand() % 100;  // 0-99\n\n// Modern random (C++11+)\n#include <random>\nrandom_device rd;\nmt19937 gen(rd());\nuniform_int_distribution<> dist(1, 100);\nint randomNum2 = dist(gen);',
      },
      {
        id: 'arrays',
        title: 'Arrays',
        description: 'Fixed-size collections:',
        language: 'cpp',
        code: '// Declare and initialize\nint numbers[5] = {1, 2, 3, 4, 5};\nint numbers2[5];  // Uninitialized\n\n// Access elements\nnumbers[0];               // 1\nnumbers[4];                // 5 (last element)\n\n// Array size\nint size = sizeof(numbers) / sizeof(numbers[0]);\n\n// Loop through array\nfor (int i = 0; i < 5; i++) {\n    cout << numbers[i] << endl;\n}\n\n// Range-based for loop (C++11+)\nfor (int num : numbers) {\n    cout << num << endl;\n}\n\n// Multidimensional array\nint grid[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\ngrid[0][0];  // 1\n\n// 2D array loop\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 3; j++) {\n        cout << grid[i][j] << " ";\n    }\n}',
      },
      {
        id: 'vectors',
        title: 'Vectors',
        description: 'Dynamic-size arrays (most commonly used):',
        language: 'cpp',
        code: '#include <vector>\nusing namespace std;\n\n// Create vector\nvector<int> numbers = {1, 2, 3, 4, 5};\nvector<string> names;\n\n// Add elements\nnumbers.push_back(6);\n\n// Remove last element\nnumbers.pop_back();\n\n// Access elements\nnumbers[0];                // 1\nnumbers.at(0);              // 1 (bounds-checked)\nnumbers.front();             // First element\nnumbers.back();              // Last element\n\n// Size\nnumbers.size();\n\n// Check empty\nnumbers.empty();\n\n// Insert at position\nnumbers.insert(numbers.begin() + 1, 10);\n\n// Remove at position\nnumbers.erase(numbers.begin() + 1);\n\n// Clear all elements\nnumbers.clear();\n\n// Loop through vector\nfor (int num : numbers) {\n    cout << num << endl;\n}\n\nfor (int i = 0; i < numbers.size(); i++) {\n    cout << numbers[i] << endl;\n}\n\n// Sort vector\n#include <algorithm>\nsort(numbers.begin(), numbers.end());               // Ascending\nsort(numbers.begin(), numbers.end(), greater<int>());  // Descending\n\n// Find element\nauto it = find(numbers.begin(), numbers.end(), 3);\nif (it != numbers.end()) {\n    cout << "Found at index: " << (it - numbers.begin()) << endl;\n}\n\n// 2D vector\nvector<vector<int>> matrix = {{1, 2}, {3, 4}};',
      },
      {
        id: 'maps',
        title: 'Maps',
        description: 'Key-value pair collections:',
        language: 'cpp',
        code: '#include <map>\nusing namespace std;\n\n// Create map\nmap<string, int> ages;\nages["John"] = 30;\nages["Jane"] = 25;\n\n// Or initialize directly\nmap<string, int> ages2 = {{"John", 30}, {"Jane", 25}};\n\n// Access values\nages["John"];               // 30\n\n// Check if key exists\nif (ages.find("John") != ages.end()) {\n    cout << "Found" << endl;\n}\n\nif (ages.count("John") > 0) {\n    cout << "Found" << endl;\n}\n\n// Remove\nages.erase("John");\n\n// Size\nages.size();\n\n// Loop through map\nfor (auto& pair : ages) {\n    cout << pair.first << ": " << pair.second << endl;\n}\n\n// Structured bindings (C++17+)\nfor (auto& [key, value] : ages) {\n    cout << key << ": " << value << endl;\n}\n\n// unordered_map (faster, no ordering)\n#include <unordered_map>\nunordered_map<string, int> fastMap;',
      },
      {
        id: 'conditionals',
        title: 'Conditionals',
        description: 'Make decisions in code:',
        language: 'cpp',
        code: '// If statement\nint age = 18;\nif (age >= 18) {\n    cout << "Adult" << endl;\n}\n\n// If-else\nif (age >= 18) {\n    cout << "Adult" << endl;\n} else {\n    cout << "Minor" << endl;\n}\n\n// If-else if-else\nint score = 85;\nif (score >= 90) {\n    cout << "A" << endl;\n} else if (score >= 80) {\n    cout << "B" << endl;\n} else {\n    cout << "F" << endl;\n}\n\n// Comparison operators\n5 == 5;    // true\n5 != 3;    // true\n5 > 3;     // true\n5 < 3;     // false\n5 >= 5;    // true\n5 <= 3;    // false\n\n// Logical operators\nbool isAdult = age >= 18 && age < 65;\nbool canVote = age >= 18 || isCitizen;\nbool isNotStudent = !isStudent;\n\n// Ternary operator\nstring status = age >= 18 ? "Adult" : "Minor";\n\n// Switch statement\nint day = 2;\nswitch (day) {\n    case 1:\n        cout << "Monday" << endl;\n        break;\n    case 2:\n        cout << "Tuesday" << endl;\n        break;\n    default:\n        cout << "Other day" << endl;\n        break;\n}',
      },
      {
        id: 'loops',
        title: 'Loops',
        description: 'Repeat code multiple times:',
        language: 'cpp',
        code: '// For loop\nfor (int i = 0; i < 5; i++) {\n    cout << i << endl;\n}\n\n// While loop\nint count = 0;\nwhile (count < 5) {\n    cout << count << endl;\n    count++;\n}\n\n// Do-while loop\nint num = 0;\ndo {\n    cout << num << endl;\n    num++;\n} while (num < 5);\n\n// Range-based for loop (C++11+)\nvector<int> numbers = {1, 2, 3};\nfor (int num : numbers) {\n    cout << num << endl;\n}\n\n// Break\nfor (int i = 0; i < 10; i++) {\n    if (i == 5) break;\n    cout << i << endl;\n}\n\n// Continue\nfor (int i = 0; i < 5; i++) {\n    if (i == 2) continue;\n    cout << i << endl;\n}',
      },
      {
        id: 'functions',
        title: 'Functions',
        description: 'Reusable blocks of code:',
        language: 'cpp',
        code: '// Basic function\nvoid greet() {\n    cout << "Hello!" << endl;\n}\n\n// Function with parameters\nvoid sayHello(string name) {\n    cout << "Hello, " << name << "!" << endl;\n}\n\n// Function with return value\nint add(int a, int b) {\n    return a + b;\n}\n\nint result = add(5, 3);  // 8\n\n// Default parameters\nstring greet(string name = "Guest") {\n    return "Hello, " + name + "!";\n}\n\n// Function overloading (same name, different parameters)\nint add(int a, int b) {\n    return a + b;\n}\ndouble add(double a, double b) {\n    return a + b;\n}\n\n// Pass by reference (modifies original)\nvoid increment(int &num) {\n    num++;\n}\n\nint value = 5;\nincrement(value);  // value is now 6\n\n// Pass by pointer\nvoid increment(int *num) {\n    (*num)++;\n}\nincrement(&value);\n\n// Function declaration (prototype) vs definition\nint add(int a, int b);  // Declaration\n\nint main() {\n    add(2, 3);\n}\n\nint add(int a, int b) {  // Definition\n    return a + b;\n}\n\n// Lambda functions (C++11+)\nauto add2 = [](int a, int b) { return a + b; };\nint sum = add2(3, 5);  // 8\n\n// Lambda with capture\nint multiplier = 2;\nauto multiply = [multiplier](int x) { return x * multiplier; };',
      },
      {
        id: 'classes-objects',
        title: 'Classes & Objects',
        description: 'Object-oriented programming:',
        language: 'cpp',
        code: '// Define class\nclass Person {\nprivate:\n    string name;\n    int age;\n\npublic:\n    // Constructor\n    Person(string n, int a) {\n        name = n;\n        age = a;\n    }\n\n    // Getter\n    string getName() {\n        return name;\n    }\n\n    // Setter\n    void setName(string n) {\n        name = n;\n    }\n\n    // Method\n    string greet() {\n        return "Hello, my name is " + name;\n    }\n};\n\n// Create object\nPerson person("John", 30);\ncout << person.getName() << endl;\ncout << person.greet() << endl;\n\n// Inheritance\nclass Student : public Person {\nprivate:\n    string school;\n\npublic:\n    Student(string n, int a, string s) : Person(n, a) {\n        school = s;\n    }\n\n    string study() {\n        return getName() + " is studying at " + school;\n    }\n};\n\n// Access modifiers\nclass Example {\npublic:\n    int publicField;       // Accessible everywhere\nprivate:\n    int privateField;      // Only within class\nprotected:\n    int protectedField;    // Class and derived classes\n};\n\n// Static members\nclass Counter {\npublic:\n    static int count;\n\n    Counter() {\n        count++;\n    }\n};\nint Counter::count = 0;  // Must define outside class\n\n// Destructor\nclass Resource {\npublic:\n    ~Resource() {\n        cout << "Resource destroyed" << endl;\n    }\n};\n\n// Virtual functions (polymorphism)\nclass Shape {\npublic:\n    virtual double getArea() {\n        return 0;\n    }\n};\n\nclass Circle : public Shape {\nprivate:\n    double radius;\npublic:\n    Circle(double r) : radius(r) {}\n\n    double getArea() override {\n        return 3.14159 * radius * radius;\n    }\n};\n\n// Abstract class (pure virtual function)\nclass AbstractShape {\npublic:\n    virtual double getArea() = 0;  // Pure virtual\n};\n\n// Operator overloading\nclass Point {\npublic:\n    int x, y;\n    Point(int x, int y) : x(x), y(y) {}\n\n    Point operator+(const Point& other) {\n        return Point(x + other.x, y + other.y);\n    }\n};',
      },
      {
        id: 'pointers-references',
        title: 'Pointers & References',
        description: 'Memory addresses and aliases:',
        language: 'cpp',
        code: '// Pointer basics\nint number = 42;\nint* ptr = &number;    // Pointer stores address\n\ncout << ptr;             // Prints address\ncout << *ptr;             // Dereference - prints value (42)\n\n// Modify through pointer\n*ptr = 100;\ncout << number;           // 100\n\n// Null pointer\nint* nullPtr = nullptr;\n\n// Reference (alias for existing variable)\nint original = 10;\nint& ref = original;\nref = 20;  // original is now 20\n\n// Dynamic memory allocation\nint* dynamicInt = new int(42);\ndelete dynamicInt;  // Free memory\n\nint* dynamicArray = new int[5];\ndelete[] dynamicArray;  // Free array memory\n\n// Smart pointers (C++11+, automatic memory management)\n#include <memory>\nunique_ptr<int> smartPtr = make_unique<int>(42);\nshared_ptr<int> sharedPtr = make_shared<int>(42);',
      },
      {
        id: 'structs',
        title: 'Structs',
        description: 'Simple data structures:',
        language: 'cpp',
        code: 'struct Point {\n    int x;\n    int y;\n};\n\n// Create struct instance\nPoint p1;\np1.x = 10;\np1.y = 20;\n\n// Or with initialization\nPoint p2 = {10, 20};\n\n// Struct with methods (C++ allows this)\nstruct Rectangle {\n    int width, height;\n\n    int area() {\n        return width * height;\n    }\n};',
      },
      {
        id: 'exception-handling',
        title: 'Exception Handling',
        description: 'Handle errors gracefully:',
        language: 'cpp',
        code: '#include <stdexcept>\n\n// Try-catch\ntry {\n    int result = 10 / 0;\n    if (result == 0) {\n        throw runtime_error("Division error");\n    }\n} catch (const runtime_error& e) {\n    cout << "Error: " << e.what() << endl;\n}\n\n// Multiple catch blocks\ntry {\n    // risky code\n} catch (const invalid_argument& e) {\n    cout << "Invalid argument" << endl;\n} catch (const exception& e) {\n    cout << "General error: " << e.what() << endl;\n}\n\n// Throw custom exception\nvoid checkAge(int age) {\n    if (age < 0) {\n        throw invalid_argument("Age cannot be negative");\n    }\n}\n\n// Custom exception class\nclass CustomException : public exception {\npublic:\n    const char* what() const noexcept override {\n        return "Custom error occurred";\n    }\n};',
      },
      {
        id: 'file-handling',
        title: 'File Handling',
        description: 'Read and write files:',
        language: 'cpp',
        code: '#include <fstream>\nusing namespace std;\n\n// Write to file\nofstream outFile("file.txt");\noutFile << "Hello World" << endl;\noutFile.close();\n\n// Append to file\nofstream appendFile("file.txt", ios::app);\nappendFile << "New line" << endl;\nappendFile.close();\n\n// Read from file\nifstream inFile("file.txt");\nstring line;\nwhile (getline(inFile, line)) {\n    cout << line << endl;\n}\ninFile.close();\n\n// Read entire file\nifstream file("file.txt");\nstring content((istreambuf_iterator<char>(file)), istreambuf_iterator<char>());\n\n// Check if file opened successfully\nifstream file2("file.txt");\nif (!file2) {\n    cout << "Error opening file" << endl;\n}',
      },
      {
        id: 'templates',
        title: 'Templates',
        description: 'Generic programming:',
        language: 'cpp',
        code: '// Function template\ntemplate <typename T>\nT add(T a, T b) {\n    return a + b;\n}\n\nadd(3, 5);          // Works with int\nadd(3.5, 2.1);       // Works with double\n\n// Class template\ntemplate <typename T>\nclass Box {\nprivate:\n    T item;\npublic:\n    void set(T value) { item = value; }\n    T get() { return item; }\n};\n\nBox<int> intBox;\nintBox.set(42);\n\nBox<string> stringBox;\nstringBox.set("Hello");\n\n// Multiple template parameters\ntemplate <typename T, typename U>\nclass Pair {\npublic:\n    T first;\n    U second;\n    Pair(T f, U s) : first(f), second(s) {}\n};\n\nPair<string, int> p("age", 30);',
      },
      {
        id: 'stl-algorithms',
        title: 'STL Algorithms',
        description: 'Common algorithm functions:',
        language: 'cpp',
        code: '#include <algorithm>\n#include <vector>\nusing namespace std;\n\nvector<int> numbers = {5, 2, 8, 1, 9};\n\n// Sort\nsort(numbers.begin(), numbers.end());\n\n// Reverse\nreverse(numbers.begin(), numbers.end());\n\n// Find\nauto it = find(numbers.begin(), numbers.end(), 8);\n\n// Max/min element\nauto maxIt = max_element(numbers.begin(), numbers.end());\nauto minIt = min_element(numbers.begin(), numbers.end());\n\n// Sum (needs <numeric>)\n#include <numeric>\nint sum = accumulate(numbers.begin(), numbers.end(), 0);\n\n// Count\nint count = count(numbers.begin(), numbers.end(), 5);\n\n// Count if\nint countEven = count_if(numbers.begin(), numbers.end(),\n    [](int n) { return n % 2 == 0; });\n\n// Transform (like map)\nvector<int> doubled(numbers.size());\ntransform(numbers.begin(), numbers.end(), doubled.begin(),\n    [](int n) { return n * 2; });\n\n// All/any/none of\nbool allPositive = all_of(numbers.begin(), numbers.end(),\n    [](int n) { return n > 0; });\nbool anyNegative = any_of(numbers.begin(), numbers.end(),\n    [](int n) { return n < 0; });\n\n// Unique (removes consecutive duplicates)\nsort(numbers.begin(), numbers.end());\nnumbers.erase(unique(numbers.begin(), numbers.end()), numbers.end());',
      },
      {
        id: 'common-patterns',
        title: 'Common Patterns',
        description: 'Frequently used patterns:',
        language: 'cpp',
        code: '// Swap values\nint a = 1, b = 2;\nswap(a, b);\n\n// Pair\n#include <utility>\npair<string, int> person = make_pair("John", 30);\ncout << person.first << " " << person.second;\n\n// Structured bindings (C++17+)\nauto [name, age] = person;\n\n// Multiple return values (using tuple)\n#include <tuple>\ntuple<string, int, double> getData() {\n    return make_tuple("John", 30, 5.9);\n}\n\nauto [n, a, h] = getData();\n\n// String stream (parse/build strings)\n#include <sstream>\nstringstream ss;\nss << "Value: " << 42;\nstring result = ss.str();\n\n// Parsing with stringstream\nstringstream ss2("10 20 30");\nint x, y, z;\nss2 >> x >> y >> z;\n\n// Namespace\nnamespace MyNamespace {\n    void myFunction() {\n        cout << "In namespace" << endl;\n    }\n}\nMyNamespace::myFunction();',
      },
    ],
  },

  jquery: {
    lang: 'jquery',
    label: 'jQuery',
    title: 'jQuery',
    icon: '/jquery.svg',
    color: '#0769AD',
    sections: [
      {
        id: 'setup',
        title: 'Setup',
        description: 'Add jQuery to your project:',
        language: 'html',
        code: '<!-- CDN -->\n<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>\n\n<!-- Or via npm -->\n\nnpm install jquery\n\n// Make sure DOM is ready before running code\n$(document).ready(function () {\n  // Your code here\n})\n\n// Shorthand\n$(function () {\n  // Your code here\n})',
      },
      {
        id: 'selectors',
        title: 'Selectors',
        description: 'Select HTML elements:',
        language: 'javascript',
        code: "// By tag\n$('p')\n\n// By ID\n$('#myId')\n\n// By class\n$('.myClass')\n\n// Multiple selectors\n$('p, .myClass, #myId')\n\n// Descendant selector\n$('div p')\n\n// Direct child\n$('div > p')\n\n// Attribute selector\n$(\"input[type='text']\")\n$(\"a[href^='https']\") // Starts with\n$(\"a[href$='.pdf']\") // Ends with\n$(\"a[href*='example']\") // Contains\n\n// Pseudo-selectors\n$('li:first')\n$('li:last')\n$('li:even')\n$('li:odd')\n$('li:eq(2)') // Index 2\n$(\"p:contains('Hello')\")\n$('input:checked')\n$('input:disabled')\n$(':visible')\n$(':hidden')\n\n// This selector (inside event handlers)\n$(this)",
      },
      {
        id: 'dom-manipulation',
        title: 'DOM Manipulation',
        description: 'Change content and attributes:',
        language: 'javascript',
        code: "// Get/set text\n$('p').text() // Get text\n$('p').text('New text') // Set text\n\n// Get/set HTML\n$('div').html() // Get HTML\n$('div').html('<b>Bold</b>') // Set HTML\n\n// Get/set value (form inputs)\n$('input').val() // Get value\n$('input').val('New value') // Set value\n\n// Get/set attributes\n$('img').attr('src') // Get attribute\n$('img').attr('src', 'new.jpg') // Set attribute\n$('img').attr({ src: 'new.jpg', alt: 'Image' }) // Set multiple\n\n// Remove attribute\n$('input').removeAttr('disabled')\n\n// Data attributes\n$('div').data('id') // Get data-id\n$('div').data('id', 123) // Set data-id\n\n// CSS properties\n$('p').css('color') // Get CSS property\n$('p').css('color', 'red') // Set single property\n$('p').css({ color: 'red', fontSize: '16px' }) // Set multiple\n\n// Classes\n$('div').addClass('active')\n$('div').removeClass('active')\n$('div').toggleClass('active')\n$('div').hasClass('active') // true/false\n\n// Add multiple classes\n$('div').addClass('class1 class2')",
      },
      {
        id: 'creating-inserting-elements',
        title: 'Creating & Inserting Elements',
        description: 'Add new content to the page:',
        language: 'javascript',
        code: "// Create element\nvar newDiv = $('<div>New Content</div>')\n\n// Append (add as last child)\n$('#container').append('<p>New paragraph</p>')\n$('#container').append(newDiv)\n\n// Prepend (add as first child)\n$('#container').prepend('<p>First paragraph</p>')\n\n// Insert after element\n$('#element').after('<p>After this</p>')\n\n// Insert before element\n$('#element').before('<p>Before this</p>')\n\n// Append to another element (reverse of append)\n$('<p>New</p>').appendTo('#container')\n\n// Clone an element\nvar clone = $('#element').clone()\n\n// Wrap element with another\n$('p').wrap(\"<div class='wrapper'></div>\")",
      },
      {
        id: 'removing-elements',
        title: 'Removing Elements',
        description: 'Delete content from the page:',
        language: 'javascript',
        code: "// Remove element completely\n$('#element').remove()\n\n// Remove but keep event handlers/data\n$('#element').detach()\n\n// Empty element (remove children, keep element)\n$('#container').empty()\n\n// Remove with condition\n$('li').remove('.completed')",
      },
      {
        id: 'traversing-dom',
        title: 'Traversing DOM',
        description: 'Navigate through elements:',
        language: 'javascript',
        code: "// Parent\n$('p').parent()\n$('p').parents() // All ancestors\n$('p').parentsUntil('div') // Ancestors until selector\n\n// Children\n$('div').children()\n$('div').children('p') // Only p children\n\n// Siblings\n$('p').siblings()\n$('p').next() // Next sibling\n$('p').prev() // Previous sibling\n$('p').nextAll()\n$('p').prevAll()\n\n// Find descendants\n$('div').find('p')\n$('div').find('.myClass')\n\n// Closest ancestor matching selector\n$('span').closest('div')\n\n// First/last\n$('li').first()\n$('li').last()\n\n// Filter\n$('li').filter('.active')\n$('li').not('.active')\n\n// Each (loop through elements)\n$('li').each(function (index, element) {\n  console.log(index, $(element).text())\n})",
      },
      {
        id: 'events',
        title: 'Events',
        description: 'Handle user interactions:',
        language: 'javascript',
        code: "// Click event\n$('button').click(function () {\n  console.log('Clicked!')\n})\n\n// Modern way (on method)\n$('button').on('click', function () {\n  console.log('Clicked!')\n})\n\n// Common events\n$('button').click(handler)\n$('input').focus(handler)\n$('input').blur(handler)\n$('input').change(handler)\n$('input').keyup(handler)\n$('input').keydown(handler)\n$('form').submit(handler)\n$('div').mouseenter(handler)\n$('div').mouseleave(handler)\n$('div').mouseover(handler)\n$('div').hover(handlerIn, handlerOut)\n$(window).resize(handler)\n$(window).scroll(handler)\n$(document).ready(handler)\n\n// Event object\n$('button').click(function (event) {\n  event.preventDefault() // Prevent default action\n  event.stopPropagation() // Stop event bubbling\n  console.log(event.target) // Element that triggered event\n})\n\n// Pass data to handler\n$('button').on('click', { name: 'John' }, function (event) {\n  console.log(event.data.name)\n})\n\n// Multiple events at once\n$('input').on('focus blur', function () {\n  console.log('Focus or blur')\n})\n\n// Namespaced events\n$('button').on('click.myPlugin', handler)\n$('button').off('click.myPlugin') // Remove only this namespace\n\n// Event delegation (for dynamically added elements)\n$('#container').on('click', '.dynamic-item', function () {\n  console.log('Dynamic item clicked')\n})\n\n// Remove event handler\n$('button').off('click')\n$('button').off('click', specificHandler)\n\n// Trigger event programmatically\n$('button').trigger('click')\n$('button').click() // Shorthand\n\n// One-time event\n$('button').one('click', function () {\n  console.log('Only fires once')\n})",
      },
      {
        id: 'effects-animation',
        title: 'Effects & Animation',
        description: 'Animate elements:',
        language: 'javascript',
        code: "// Show/hide\n$('div').show()\n$('div').hide()\n$('div').toggle()\n\n// With duration (ms)\n$('div').show(500)\n$('div').hide(500)\n$('div').toggle(500)\n\n// Fade effects\n$('div').fadeIn()\n$('div').fadeOut()\n$('div').fadeToggle()\n$('div').fadeTo(500, 0.5) // Fade to specific opacity\n\n// Slide effects\n$('div').slideDown()\n$('div').slideUp()\n$('div').slideToggle()\n\n// With duration and callback\n$('div').fadeIn(500, function () {\n  console.log('Animation complete')\n})\n\n// Custom animation\n$('div').animate(\n  {\n    left: '250px',\n    opacity: 0.5,\n    height: '100px',\n  },\n  1000,\n)\n\n// Animate with easing\n$('div').animate({ left: '250px' }, 1000, 'swing')\n\n// Chaining animations\n$('div').slideUp(300).delay(500).fadeIn(300)\n\n// Stop animation\n$('div').stop()\n\n// Predefined speeds\n$('div').fadeIn('slow')\n$('div').fadeIn('fast')",
      },
      {
        id: 'ajax',
        title: 'AJAX',
        description: 'Make HTTP requests:',
        language: 'javascript',
        code: "// GET request\n$.get('https://api.example.com/data', function (data) {\n  console.log(data)\n})\n\n// POST request\n$.post('https://api.example.com/users', { name: 'John' }, function (data) {\n  console.log(data)\n})\n\n// Full ajax method (most flexible)\n$.ajax({\n  url: 'https://api.example.com/data',\n  method: 'GET', // or \"POST\", \"PUT\", \"DELETE\"\n  data: { key: 'value' },\n  dataType: 'json',\n  success: function (response) {\n    console.log(response)\n  },\n  error: function (xhr, status, error) {\n    console.error(error)\n  },\n})\n\n// POST with JSON data\n$.ajax({\n  url: 'https://api.example.com/users',\n  method: 'POST',\n  contentType: 'application/json',\n  data: JSON.stringify({ name: 'John', email: 'john@example.com' }),\n  success: function (response) {\n    console.log(response)\n  },\n})\n\n// getJSON shorthand\n$.getJSON('https://api.example.com/data', function (data) {\n  console.log(data)\n})\n\n// Using promises (.then)\n$.ajax({ url: 'https://api.example.com/data' })\n  .done(function (data) {\n    console.log(data)\n  })\n  .fail(function (error) {\n    console.error(error)\n  })\n  .always(function () {\n    console.log('Request completed')\n  })\n\n// Load HTML content into element\n$('#container').load('page.html')\n$('#container').load('page.html #specific-div') // Load part of page\n\n// Ajax with headers\n$.ajax({\n  url: 'https://api.example.com/data',\n  headers: { Authorization: 'Bearer token123' },\n  success: function (data) {\n    console.log(data)\n  },\n})",
      },
      {
        id: 'form-handling',
        title: 'Form Handling',
        description: 'Work with forms:',
        language: 'javascript',
        code: "// Get form values\n$('#username').val()\n$('form').serialize() // All form data as query string\n$('form').serializeArray() // All form data as array of objects\n\n// Set form values\n$('#username').val('John')\n\n// Submit form\n$('form').submit(function (event) {\n  event.preventDefault()\n  var username = $('#username').val()\n  console.log(username)\n})\n\n// Checkbox/radio\n$(\"input[type='checkbox']\").is(':checked')\n$(\"input[name='gender']:checked\").val()\n\n// Select dropdown\n$('select').val() // Get selected value\n$('select').val('option2') // Set selected value\n$('select option:selected').text() // Get selected text\n\n// Reset form\n$('form')[0].reset()\n\n// Disable/enable form elements\n$('input').prop('disabled', true)\n$('input').prop('disabled', false)\n\n// Form validation example\n$('form').submit(function (event) {\n  var email = $('#email').val()\n  if (email === '') {\n    alert('Email is required')\n    event.preventDefault()\n  }\n})",
      },
      {
        id: 'dimensions-position',
        title: 'Dimensions & Position',
        description: 'Get and set element sizes/positions:',
        language: 'javascript',
        code: "// Width/height\n$('div').width() // Get width (content only)\n$('div').height() // Get height (content only)\n$('div').innerWidth() // Width + padding\n$('div').innerHeight() // Height + padding\n$('div').outerWidth() // Width + padding + border\n$('div').outerHeight() // Height + padding + border\n$('div').outerWidth(true) // Width + padding + border + margin\n\n// Set width/height\n$('div').width(200)\n$('div').height(100)\n\n// Position\n$('div').position() // Position relative to parent\n$('div').offset() // Position relative to document\n\n// Scroll position\n$(window).scrollTop() // Get scroll position\n$(window).scrollTop(0) // Scroll to top\n$('html, body').animate({ scrollTop: 0 }, 500) // Smooth scroll to top\n\n// Document/window dimensions\n$(document).width()\n$(document).height()\n$(window).width()\n$(window).height()",
      },
      {
        id: 'chaining',
        title: 'Chaining',
        description: 'Combine multiple methods:',
        language: 'javascript',
        code: "// Method chaining (jQuery's key feature)\n$('#element').addClass('active').css('color', 'red').fadeIn(500).delay(1000).fadeOut(500)\n\n// Multiple manipulations\n$('p').text('New text').addClass('highlight').css('font-weight', 'bold')",
      },
      {
        id: 'utility-functions',
        title: 'Utility Functions',
        description: 'Helpful jQuery utilities:',
        language: 'javascript',
        code: "// Check if element exists\nif ($('#element').length > 0) {\n  console.log('Element exists')\n}\nif ($('#element').length) {\n  console.log('Element exists')\n}\n\n// Iterate over array/object\n$.each([1, 2, 3], function (index, value) {\n  console.log(index, value)\n})\n\n$.each({ a: 1, b: 2 }, function (key, value) {\n  console.log(key, value)\n})\n\n// Extend objects (merge)\nvar obj1 = { a: 1 }\nvar obj2 = { b: 2 }\nvar merged = $.extend({}, obj1, obj2) // { a: 1, b: 2 }\n\n// Check type\n$.isArray([1, 2, 3]) // true\n$.isFunction(function () {}) // true\n$.isEmptyObject({}) // true\n\n// Trim string\n$.trim('  hello  ') // \"hello\"\n\n// Parse JSON\n$.parseJSON('{\"name\": \"John\"}')\n\n// Map array\n$.map([1, 2, 3], function (value) {\n  return value * 2\n}) // [2, 4, 6]\n\n// Grep (filter array)\n$.grep([1, 2, 3, 4], function (value) {\n  return value > 2\n}) // [3, 4]\n\n// No conflict mode (avoid $ conflicts with other libraries)\nvar jq = $.noConflict()",
      },
      {
        id: 'common-patterns',
        title: 'Common Patterns',
        description: 'Frequently used jQuery patterns:',
        language: 'javascript',
        code: "// Toggle class on click\n$('button').click(function () {\n  $(this).toggleClass('active')\n})\n\n// Show/hide based on condition\n$('input').change(function () {\n  if ($(this).val() === '') {\n    $('#error').show()\n  } else {\n    $('#error').hide()\n  }\n})\n\n// Loop through elements and modify\n$('li').each(function (index) {\n  $(this).text('Item ' + (index + 1))\n})\n\n// Dynamic content with event delegation\n$('#list').on('click', '.delete-btn', function () {\n  $(this).closest('li').remove()\n})\n\n// Load content dynamically\n$('#loadMore').click(function () {\n  $.get('more-content.html', function (data) {\n    $('#container').append(data)\n  })\n})\n\n// Simple modal toggle\n$('#openModal').click(function () {\n  $('#modal').fadeIn()\n})\n$('#closeModal').click(function () {\n  $('#modal').fadeOut()\n})\n\n// Form submission with AJAX\n$('#myForm').submit(function (event) {\n  event.preventDefault()\n\n  $.ajax({\n    url: '/submit',\n    method: 'POST',\n    data: $(this).serialize(),\n    success: function (response) {\n      $('#result').html(response)\n    },\n  })\n})\n\n// Debounce search input\nvar timer\n$('#search').on('keyup', function () {\n  clearTimeout(timer)\n  var value = $(this).val()\n  timer = setTimeout(function () {\n    console.log('Searching for:', value)\n  }, 500)\n})\n\n// Toggle text content\n$('#toggleBtn').click(function () {\n  var $this = $(this)\n  $this.text($this.text() === 'Show' ? 'Hide' : 'Show')\n})\n\n// Copy to clipboard pattern\n$('#copyBtn').click(function () {\n  var text = $('#textToCopy').text()\n  navigator.clipboard.writeText(text)\n})\n\n// Infinite scroll pattern\n$(window).scroll(function () {\n  if ($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {\n    loadMoreContent()\n  }\n})\n\n// Sticky header on scroll\n$(window).scroll(function () {\n  if ($(window).scrollTop() > 100) {\n    $('header').addClass('sticky')\n  } else {\n    $('header').removeClass('sticky')\n  }\n})",
      },
    ],
  },
}

export const refNavItems = [
  { lang: 'html', label: 'HTML' },
  { lang: 'css', label: 'CSS' },
  { lang: 'js', label: 'JS' },
  { lang: 'php', label: 'PHP' },
  { lang: 'mysql', label: 'MySQL' },
  { lang: 'tailwind', label: 'Tailwind' },
  { lang: 'vue', label: 'Vue' },
  { lang: 'git', label: 'Git' },
  { lang: 'laravel', label: 'Laravel' },
  { lang: 'react', label: 'React' },
  { lang: 'motion', label: 'Motion' },
  { lang: 'bootstrap', label: 'Bootstrap' },
  { lang: 'nodejs', label: 'Node.js' },
  { lang: 'python', label: 'Python' },
  { lang: 'angular', label: 'Angular' },
  { lang: 'csharp', label: 'C#' },
  { lang: 'java', label: 'Java' },
  { lang: 'postgresql', label: 'PostgreSQL' },
  { lang: 'mongodb', label: 'MongoDB' },
  { lang: 'cpp', label: 'C++' },
  { lang: 'jquery', label: 'jQuery' },
]
