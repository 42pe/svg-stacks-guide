# svg-stacks-guide - (My) (Somewhat) Definitive Guide to SVG Stacks

1. Clone the repo
1. run `npm install && gulp && npm start`
1. Go to `localhost:3000` on your browser.

## How it works

1. Place SVGs in `src/svgs`. Illustrator outputs, Noun Project downloads, anything.
1. Run `gulp`, to merge all the SVGs into a single stack.
1. You can use the SVG sprite in 2 ways: As a CSS background image or by using and `xlink` in an `<SVG>` tag (which can be styles via CSS). Review the `index.html` file for reference.
