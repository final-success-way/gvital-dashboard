<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>

  /*--------------------------------------------------------------
  # Generic
  --------------------------------------------------------------*/

  /* Normalize
  --------------------------------------------- */

  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

  /* Document
       ========================================================================== */

  /**
   * 1. Correct the line height in all browsers.
   * 2. Prevent adjustments of font size after orientation changes in iOS.
   */

  @font-face {
    font-family: 'Geomanist';
    src: url("../assets/fonts/Geomanist-Light.woff");
    font-weight: 300;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Geomanist';
    src: url("../assets/fonts/Geomanist-Book.woff");
    font-weight: 350;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Geomanist';
    src: url("../assets/fonts/Geomanist-Regular.woff");
    font-weight: 400;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Geomanist';
    src: url("../assets/fonts/Geomanist-Medium.woff");
    font-weight: 500;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Geomanist';
    src: url("../assets/fonts/Geomanist-Bold.woff");
    font-weight: 600;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Geomanist';
    src: url("../assets/fonts/Geomanist-Bold.woff");
    font-weight: 700;
    font-style: normal;
    font-display: fallback;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    font-family: 'Geomanist', sans-serif;
  }

  /* Sections
       ========================================================================== */

  /**
   * Remove the margin in all browsers.
   */
  body {
    margin: 0;
    font-family: 'Geomanist', sans-serif;
  }

  /**
   * Render the `main` element consistently in IE.
   */
  main {
    display: block;
  }

  /**
   * Correct the font size and margin on `h1` elements within `section` and
   * `article` contexts in Chrome, Firefox, and Safari.
   */
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  /* Grouping content
       ========================================================================== */

  /**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd `em` font sizing in all browsers.
   */
  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  /* Text-level semantics
       ========================================================================== */

  /**
   * Remove the gray background on active links in IE 10.
   */
  a {
    background-color: transparent;
  }

  /**
   * 1. Remove the bottom border in Chrome 57-
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
   */
  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  /**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */
  b,
  strong {
    font-weight: bolder;
  }

  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd `em` font sizing in all browsers.
   */
  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  /**
   * Add the correct font size in all browsers.
   */
  small {
    font-size: 80%;
  }

  /**
   * Prevent `sub` and `sup` elements from affecting the line height in
   * all browsers.
   */
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  /* Embedded content
       ========================================================================== */

  /**
   * Remove the border on images inside links in IE 10.
   */
  img {
    border-style: none;
  }

  /* Forms
       ========================================================================== */

  /**
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
   */
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  /**
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
   */
  button,
  input {
    overflow: visible;
  }

  /**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */
  button,
  select {
    text-transform: none;
  }

  /**
   * Correct the inability to style clickable types in iOS and Safari.
   */
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  /**
   * Remove the inner border and padding in Firefox.
   */
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  /**
   * Restore the focus styles unset by the previous rule.
   */
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  /**
   * Correct the padding in Firefox.
   */
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  /**
   * 1. Correct the text wrapping in Edge and IE.
   * 2. Correct the color inheritance from `fieldset` elements in IE.
   * 3. Remove the padding so developers are not caught out when they zero out
   *		`fieldset` elements in all browsers.
   */
  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  /**
   * Add the correct vertical alignment in Chrome, Firefox, and Opera.
   */
  progress {
    vertical-align: baseline;
  }

  /**
   * Remove the default vertical scrollbar in IE 10+.
   */
  textarea {
    overflow: auto;
  }

  /**
   * 1. Add the correct box sizing in IE 10.
   * 2. Remove the padding in IE 10.
   */
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }

  /**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  /**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */
  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  /**
   * Remove the inner padding in Chrome and Safari on macOS.
   */
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Change font properties to `inherit` in Safari.
   */
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  /* Interactive
       ========================================================================== */

  /*
   * Add the correct display in Edge, IE 10+, and Firefox.
   */
  details {
    display: block;
  }

  /*
   * Add the correct display in all browsers.
   */
  summary {
    display: list-item;
  }

  /* Misc
       ========================================================================== */

  /**
   * Add the correct display in IE 10+.
   */
  template {
    display: none;
  }

  /**
   * Add the correct display in IE 10.
   */
  [hidden] {
    display: none;
  }

  /* Box sizing
  --------------------------------------------- */

  /* Inherit box-sizing to more easily change it's value on a component level.
  @link http://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/ */
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  /*--------------------------------------------------------------
  # Base
  --------------------------------------------------------------*/

  /* Typography
  --------------------------------------------- */
  body,
  button,
  input,
  select,
  optgroup,
  textarea {
    color: #40455F;
    font-family: 'Geomanist', sans-serif;
    font-size: 1rem;
    line-height: 1.5;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    clear: both;
  }

  p {
    margin-bottom: 1.5em;
    color: #40455F;
  }

  dfn,
  cite,
  em,
  i {
    font-style: italic;
  }

  blockquote {
    margin: 0 1.5em;
  }

  address {
    margin: 0 0 1.5em;
  }

  pre {
    background: #eee;
    font-family: "Courier 10 Pitch", courier, monospace;
    line-height: 1.6;
    margin-bottom: 1.6em;
    max-width: 100%;
    overflow: auto;
    padding: 1.6em;
  }

  code,
  kbd,
  tt,
  var {
    font-family: monaco, consolas, "Andale Mono", "DejaVu Sans Mono", monospace;
  }

  abbr,
  acronym {
    border-bottom: 1px dotted #666;
    cursor: help;
  }

  mark,
  ins {
    background: #fff9c0;
    text-decoration: none;
  }

  big {
    font-size: 125%;
  }

  /* Elements
  --------------------------------------------- */
  body {
    background: #fff;
  }

  hr {
    background-color: #ccc;
    border: 0;
    height: 1px;
    margin-bottom: 1.5em;
  }

  ul,
  ol {
    margin: 0 0 1.5em 3em;
  }

  ul {
    list-style: disc;
  }

  ol {
    list-style: decimal;
  }

  li > ul,
  li > ol {
    margin-bottom: 0;
    margin-left: 1.5em;
  }

  dt {
    font-weight: 700;
  }

  dd {
    margin: 0 1.5em 1.5em;
  }

  /* Make sure embeds and iframes fit their containers. */
  embed,
  iframe,
  object {
    max-width: 100%;
  }

  img {
    height: auto;
    max-width: 100%;
  }

  figure {
    margin: 1em 0;
  }

  table {
    margin: 0 0 1.5em;
    width: 100%;
  }

  /* Links
  --------------------------------------------- */

  a:hover,
  a:focus,
  a:active {

  }

  a:focus {
    outline: thin dotted;
  }

  a:hover,
  a:active {
    outline: 0;
  }

  /* Forms
  --------------------------------------------- */
  button,
  input[type="button"],
  input[type="reset"],
  input[type="submit"] {
    border: 1px solid;
    border-color: #ccc #ccc #bbb;
    border-radius: 3px;
    background: #e6e6e6;
    color: #40455F;
    line-height: 1;
    padding: 0.6em 1em 0.4em;
  }

  button:hover,
  input[type="button"]:hover,
  input[type="reset"]:hover,
  input[type="submit"]:hover {
    border-color: #ccc #bbb #aaa;
  }

  button:active,
  button:focus,
  input[type="button"]:active,
  input[type="button"]:focus,
  input[type="reset"]:active,
  input[type="reset"]:focus,
  input[type="submit"]:active,
  input[type="submit"]:focus {
    border-color: #aaa #bbb #bbb;
  }

  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="password"],
  input[type="search"],
  input[type="number"],
  input[type="tel"],
  input[type="range"],
  input[type="date"],
  input[type="month"],
  input[type="week"],
  input[type="time"],
  input[type="datetime"],
  input[type="datetime-local"],
  input[type="color"],
  textarea {
    color: #40455F;
  }

  input[type="text"]:focus,
  input[type="email"]:focus,
  input[type="url"]:focus,
  input[type="password"]:focus,
  input[type="search"]:focus,
  input[type="number"]:focus,
  input[type="tel"]:focus,
  input[type="range"]:focus,
  input[type="date"]:focus,
  input[type="month"]:focus,
  input[type="week"]:focus,
  input[type="time"]:focus,
  input[type="datetime"]:focus,
  input[type="datetime-local"]:focus,
  input[type="color"]:focus,
  textarea:focus {
    color: #40455F;
  }

  select {
    border: 1px solid #ccc;
  }

  textarea {
    width: 100%;
  }

  /*--------------------------------------------------------------
  # Layouts
  --------------------------------------------------------------*/

  /*--------------------------------------------------------------
  # Components
  --------------------------------------------------------------*/

  /* Navigation
  --------------------------------------------- */
  .main-navigation {
    display: block;
    width: 100%;
  }

  .main-navigation ul {
    display: none;
    list-style: none;
    margin: 0;
    padding-left: 0;
  }

  .main-navigation ul ul {
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
    float: left;
    position: absolute;
    top: 100%;
    left: -999em;
    z-index: 99999;
  }

  .main-navigation ul ul ul {
    left: -999em;
    top: 0;
  }

  .main-navigation ul ul li:hover > ul,
  .main-navigation ul ul li.focus > ul {
    display: block;
    left: auto;
  }

  .main-navigation ul ul a {
    width: 200px;
  }

  .main-navigation ul li:hover > ul,
  .main-navigation ul li.focus > ul {
    left: auto;
  }

  .main-navigation li {
    position: relative;
  }

  .main-navigation a {
    display: block;
    text-decoration: none;
  }

  /* Small menu. */
  .menu-toggle,
  .main-navigation.toggled ul {
    display: block;
  }

  @media screen and (min-width: 37.5em) {

    .menu-toggle {
      display: none;
    }

    .main-navigation ul {
      display: flex;
    }
  }

  .site-main .comment-navigation,
  .site-main
  .posts-navigation,
  .site-main
  .post-navigation {
    margin: 0 0 1.5em;
  }

  .comment-navigation .nav-links,
  .posts-navigation .nav-links,
  .post-navigation .nav-links {
    display: flex;
  }

  .comment-navigation .nav-previous,
  .posts-navigation .nav-previous,
  .post-navigation .nav-previous {
    flex: 1 0 50%;
  }

  .comment-navigation .nav-next,
  .posts-navigation .nav-next,
  .post-navigation .nav-next {
    text-align: end;
    flex: 1 0 50%;
  }

  /* Posts and pages
  --------------------------------------------- */
  .sticky {
    display: block;
  }

  .post,
  .page {
    margin: 0 0 1.5em;
  }

  .updated:not(.published) {
    display: none;
  }

  .page-content,
  .entry-content,
  .entry-summary {
    margin: 1.5em 0 0;
  }

  .page-links {
    clear: both;
    margin: 0 0 1.5em;
  }

  /* Comments
  --------------------------------------------- */
  .comment-content a {
    word-wrap: break-word;
  }

  .bypostauthor {
    display: block;
  }

  /* Widgets
  --------------------------------------------- */
  .widget {
    margin: 0 0 1.5em;
  }

  .widget select {
    max-width: 100%;
  }

  /* Media
  --------------------------------------------- */
  .page-content .wp-smiley,
  .entry-content .wp-smiley,
  .comment-content .wp-smiley {
    border: none;
    margin-bottom: 0;
    margin-top: 0;
    padding: 0;
  }

  /* Make sure logo link wraps around logo image. */
  .custom-logo-link {
    display: inline-block;
  }

  /* Captions
  --------------------------------------------- */
  .wp-caption {
    margin-bottom: 1.5em;
    max-width: 100%;
  }

  .wp-caption img[class*="wp-image-"] {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .wp-caption .wp-caption-text {
    margin: 0.8075em 0;
  }

  .wp-caption-text {
    text-align: center;
  }

  /* Galleries
  --------------------------------------------- */
  .gallery {
    margin-bottom: 1.5em;
    display: grid;
    grid-gap: 1.5em;
  }

  .gallery-item {
    display: inline-block;
    text-align: center;
    width: 100%;
  }

  .gallery-columns-2 {
    grid-template-columns: repeat(2, 1fr);
  }

  .gallery-columns-3 {
    grid-template-columns: repeat(3, 1fr);
  }

  .gallery-columns-4 {
    grid-template-columns: repeat(4, 1fr);
  }

  .gallery-columns-5 {
    grid-template-columns: repeat(5, 1fr);
  }

  .gallery-columns-6 {
    grid-template-columns: repeat(6, 1fr);
  }

  .gallery-columns-7 {
    grid-template-columns: repeat(7, 1fr);
  }

  .gallery-columns-8 {
    grid-template-columns: repeat(8, 1fr);
  }

  .gallery-columns-9 {
    grid-template-columns: repeat(9, 1fr);
  }

  .gallery-caption {
    display: block;
  }

  /*--------------------------------------------------------------
  # Plugins
  --------------------------------------------------------------*/

  /* Jetpack infinite scroll
  --------------------------------------------- */

  /* Hide the Posts Navigation and the Footer when Infinite Scroll is in use. */
  .infinite-scroll .posts-navigation,
  .infinite-scroll.neverending .site-footer {
    display: none;
  }

  /* Re-display the Theme Footer when Infinite Scroll has reached its end. */
  .infinity-end.neverending .site-footer {
    display: block;
  }

  /*--------------------------------------------------------------
  # Utilities
  --------------------------------------------------------------*/

  /* Accessibility
  --------------------------------------------- */

  /* Text meant only for screen readers. */
  .screen-reader-text {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute !important;
    width: 1px;
    word-wrap: normal !important;
  }

  .screen-reader-text:focus {
    background-color: #f1f1f1;
    border-radius: 3px;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
    clip: auto !important;
    clip-path: none;
    color: #21759b;
    display: block;
    font-size: 0.875rem;
    font-weight: 700;
    height: auto;
    left: 5px;
    line-height: normal;
    padding: 15px 23px 14px;
    text-decoration: none;
    top: 5px;
    width: auto;
    z-index: 100000;
  }

  /* Do not show the outline on the skip link target. */
  #primary[tabindex="-1"]:focus {
    outline: 0;
  }

  /* Alignments
  --------------------------------------------- */
  .alignleft {

    /*rtl:ignore*/
    float: left;

    /*rtl:ignore*/
    margin-right: 1.5em;
    margin-bottom: 1.5em;
  }

  .alignright {

    /*rtl:ignore*/
    float: right;

    /*rtl:ignore*/
    margin-left: 1.5em;
    margin-bottom: 1.5em;
  }

  .aligncenter {
    clear: both;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.5em;
  }

  ul#primary-menu li {
    margin-left: 16px;
    margin-right: 16px;
    color: #40455F;
  }

  li a {
    color: #40455F;
  }

  .menu-item-31 {
    padding: 10px;
    padding-left: 36px;
    padding-right: 36px;
    background-color: #ffffff;
    border-radius: 24px;
    color: #5347E3 !important;
    border: 1px solid #5347E3;
  }

  .register-btn {
    padding: 10px;
    padding-left: 36px;
    padding-right: 36px;
    background-color: #5347E3;
    border-radius: 24px;
    color: #ffffff;
    border: 1px solid #5347E3;
  }

  .w-26 {
    width: 135px;
  }

  .bg-primary {
    background-color: #5347E3
  }

  .bg-light {
    background-color: #6D63E7;
  }

  .border-primary {
    border-color: #5347E3;
  }
  .border-light {
    border-color: #E2E0FF;
  }
  .bg-light-1 {
    background-color: #E2E0FF;
  }

  .text-primary {
    color: #5347E3;
  }

  .text-secondary {
    color: #65667B;
  }

  .text-dark {
    color: #40455F;
  }

  .bg-translucent{
    background-color: rgba(0,0,0,0.4);
  }

  .content-top-bg {
    width: 100%;
    height: 180px;
    background: url(../assets/wave_top.svg);
    background-size: cover;
    background-repeat: no-repeat;
  }
  .content-top-bg-next {
    width: 100%;
    height: 125px;
    background: url(../assets/mask_top.svg);
    background-size: cover;
    background-repeat: no-repeat;
  }

  .content-bottom-bg {
    width: 100%;
    height: 215px;
    background: url(../assets/wave_bottom.svg);
    background-size: cover;
    background-repeat: no-repeat;
  }

  .light-text {
    color: rgba(255, 255, 255, 0.7);
  }

  .glow {
    box-shadow: 0 0 60px 2px #3A31A8;
  }

  .abs-middle {
    transform: translateY(-50%);
  }

  .translateY30p {
    transform: translateY(30%);
  }
  .translateY50p {
    transform: translateY(50%);
  }

  .bg-card {
    background-color: #E2E0FF;
  }

  .bg-light {
    background-color: #E2E0FF;
  }

  .quotes {
    quotes: '';
  }

  .grid-top-left {
    width: 16%;
    top: -35%;
  }

  .grid-bottom-left{
    width: 20%;
    bottom: -35%;
  }
  .grid-bottom-left-abs{
    width: 25%;
    bottom: 0;
    transform: translateY(70%);
  }

  .masked-test{
    box-shadow: 0 25px 50px -12px rgba(83,71,227,.12);
    border-radius: 20px;
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 32px;
    margin-bottom: 32px;
    border: 1px solid #E2E0FF;
  }

  .max-h-1000{
    height: 1000px;
  }

  .w-700{
    width: 430px;
  }

  @media (max-width: 800px) {
    .w-700{
      width: 375px;
    }
  }

  .border-16{
    border-radius: 18px;
  }
  .border-t-light{
    border-top-width: 0.1px;
    border-color: rgba(99,89,216,0.7);
  }
  .border-b-light{
    border-bottom-width: 0.1px;
    border-color: rgba(99,89,216,0.7);
  }

  .border border-light_thin{
    border-width: 0.1px;
    border-color: #E2E0FF;
  }

  .border-t-thin{
    border-top-width: 0.1px;
    border-color: #E2E0FF;
  }

  .box-light{
    box-shadow: 0 25px 50px -12px rgba(83,71,227,.12);
  }

  .border-t-dim{
    border-top-width: 0.1px;
    border-color: rgba(64,69,95,0.1);
  }

  .border-b-dim{
    border-bottom-width: 0.1px;
    border-color: rgba(64,69,95,0.1);
  }

  .dim-text{
    color: #b1b1b3
  }

  p{
    margin-block-end:0
  }

  .border-light{
    border-color: #E2E0FF;
  }

  @media(max-width:860px){
    .content-top-bg {
      height: 52px;
    }

    .content-bottom-bg {
      height:55px;
    }

    .content-top-bg-next{
      height: 30px;
    }

    .w-26{
      width: 100px;
    }
  }

  .accordion {
    cursor: pointer;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    transition: 0.4s;
    user-select: none;
  }

  .panel {
    max-height: 0;
    padding-top: 16px;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
  }

  .open {
    transform: rotate(180deg);
    transition: transform 300ms ease;
  }

  .close{
    transform: rotate(0deg);
    transition: transform 300ms ease;
  }

  #slider {
    --active: #FF5252;
    --balloon: var(--active);
    --value: #fff;
    --line: #E2E0FF;
    touch-action: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 100%;
    height: 10px;
    border-radius: 30px;
    background: var(--line);
    position: relative;
    outline: none;
    border: none;
  }
  #slider .noUi-connects .noUi-connect {
    background: var(--active);
  }
  #slider .noUi-handle:before, #slider .noUi-handle:after {
    border-radius: 20px;
    -webkit-transform: scale(var(--s));
    transform: scale(var(--s));
    -webkit-transition: border-radius .3s ease, -webkit-transform .3s ease;
    transition: border-radius .3s ease, -webkit-transform .3s ease;
    transition: transform .3s ease, border-radius .3s ease;
    transition: transform .3s ease, border-radius .3s ease, -webkit-transform .3s ease;
  }
  #slider .noUi-handle:before {
    --s: .5;
    background: var(--active);
  }
  #slider .noUi-handle:after {
    --s: .2;
    background: #FF5252;
  }
  #slider .noUi-handle.noUi-active:before {
    --s: 0.5;
  }
  #slider .noUi-handle.noUi-active:after {
    --s: 0.5;
  }
  #slider .balloon {
    /*--o: 0;*/
    /*--s: 0;*/
    /*--y: 0;*/
    --o: 1;
    --s: 1;
    --y: -35px;
    --r: 0deg;
    width: 52px;
    height: 68px;
    pointer-events: none;
    position: absolute;
    z-index: 5;
    left: -58px;
    bottom: 0;
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
  }
  #slider .balloon > div {
    width: 125px;
    height: 68px;
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    opacity: var(--o);
    -webkit-transform: scale(var(--s)) translate(0, var(--y)) rotate(var(--r));
    transform: scale(var(--s)) translate(0, var(--y)) rotate(var(--r));
    -webkit-transition: opacity .4s ease, -webkit-transform .4s ease;
    transition: opacity .4s ease, -webkit-transform .4s ease;
    transition: transform .4s ease, opacity .4s ease;
    transition: transform .4s ease, opacity .4s ease, -webkit-transform .4s ease;
  }
  #slider .balloon > div:before, #slider .balloon > div:after {
    content: '';
    display: block;
  }
  #slider .balloon > div:before {
    height: 75px;
    background: url(../assets/tag_new.svg);
    background-repeat: no-repeat;
    background-size: contain;
  }
  #slider .balloon > div:after {
    content: attr(data-value);
    font-family: 'Geomanist', sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: var(--value);
    position: absolute;
    right: 35px;
    top: 18px;
    line-height: 24px;
    text-align: start;
  }
  #slider .balloon > div svg {
    display: block;
    width: 8px;
    height: 6px;
    fill: var(--balloon);
    position: absolute;
    left: 22px;
    bottom: 0;
  }
  #slider .balloon.active {
    --o: 1;
    --s: 1;
    --y: -35px;
  }
  #slider * {
    touch-action: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
  #slider.noUi-state-tap .noUi-connect, #slider.noUi-state-tap .noUi-origin {
    -webkit-transition: -webkit-transform .3s;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s, -webkit-transform .3s;
  }
  #slider .noUi-target {
    position: relative;
  }
  #slider .noUi-base,
  #slider .noUi-connects {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
  #slider .noUi-origin,
  #slider .noUi-connect {
    position: absolute;
    will-change: transform;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    top: 0;
    left: 0;
    z-index: 1;
  }
  #slider .noUi-connects {
    overflow: hidden;
    z-index: 0;
    border-radius: 20px;
  }
  #slider .noUi-connects .noUi-connect {
    width: 100%;
    height: 100%;
  }
  #slider .noUi-handle {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    position: absolute;
    outline: none;
    cursor: pointer;
    width: 40px;
    height: 40px;
    top: -16px;
    background: none;
    border: none;
    border-radius: 0;
    box-shadow: none !important;
  }
  #slider .noUi-handle:before, #slider .noUi-handle:after {
    content: '';
    position: absolute;
  }
  #slider .noUi-handle:before {
    left: 25px;
    top: 0;
    width: 40px;
    height: 40px;
  }
  #slider .noUi-handle:after {
    /*left: 25px;*/
    /*top: 2px;*/
    /*width: 36px;*/
    /*height: 36px;*/
  }
  #slider .noUi-origin {
    left: auto;
    right: 0;
    height: 0;
    width: 10%;
  }

  .bg-dim{
    background: #fafafa;
  }

  .active-link{
    color: #5347E3;
  }

  button:focus {
    outline: none;
  }

  .rounded-xl{
    border-radius: 15px;
  }

  .bg-dim-trans{
    background: rgba(0,0,0,0.4)
  }

  .rounded-3xl {
    border-radius: 1.5rem;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>
