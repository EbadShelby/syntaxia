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
}

export const refNavItems = [
  { lang: 'html', label: 'HTML' },
  { lang: 'css', label: 'CSS' },
  { lang: 'js', label: 'JS' },
  { lang: 'php', label: 'PHP' },
  { lang: 'mysql', label: 'MySQL' },
  { lang: 'tailwind', label: 'Tailwind' },
]
