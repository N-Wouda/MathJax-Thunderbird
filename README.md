# MathJax loader for Thunderbird

This plugin loads MathJax in the message pane, which renders any LaTeX in the message.
I find that to be useful for many of my RSS feeds, which regularly contain mathematics.

## Requirements

For now, Thunderbird 78. I tested this with MathJax 3.2.0, but other versions might work as well.

## How to configure MathJax

This can be done in the `src/config.js` file before installing the plugin.
At a later date I might make this configurable from Thunderbird as well.

## How to use/install

1. Run `npm install`.
2. Package `node_modules/`, `src/` and `manifest.json` into `MathJax-Thunderbird.zip`.
3. Install `MathJax-Thunderbird.zip` as a file-based Thunderbird extension.
