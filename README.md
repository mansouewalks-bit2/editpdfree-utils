# editpdfree-utils

Free PDF manipulation utilities for Node.js - merge, split, rotate, compress and convert PDFs programmatically.

## Features

- **Merge** - Combine multiple PDF files into one
- **Split** - Extract specific pages from a PDF
- **Rotate** - Rotate pages by 90, 180 or 270 degrees
- **Compress** - Reduce PDF file size
- **Metadata** - Read and write PDF metadata

## Installation

```bash
npm install editpdfree-utils
```

## Quick Start

```js
const { merge, split, rotate } = require("editpdfree-utils");

const merged = await merge(["file1.pdf", "file2.pdf"]);
const pages = await split("document.pdf", { pages: [1, 2, 3] });
const rotated = await rotate("document.pdf", 90);
```

## Online Tools

Need a quick edit without code? Use our **free online PDF tools** at **[editpdfree.com](https://www.editpdfree.com)** - no signup required.

Available tools on [editpdfree.com](https://www.editpdfree.com):
- [Merge PDF](https://www.editpdfree.com/en/merge-pdf)
- [Split PDF](https://www.editpdfree.com/en/split-pdf)
- [Compress PDF](https://www.editpdfree.com/en/compress-pdf)
- [Rotate PDF](https://www.editpdfree.com/en/rotate-pdf)
- [PDF to Word](https://www.editpdfree.com/en/pdf-to-word)
- [Word to PDF](https://www.editpdfree.com/en/word-to-pdf)
- And 20+ more tools

## API

### merge(files, options)
Merges an array of PDF file paths or buffers into a single PDF.

### split(file, options)
Splits a PDF into individual pages or page ranges.

### rotate(file, degrees)
Rotates all pages by the specified degrees (90, 180, 270).

### compress(file, options)
Compresses a PDF to reduce file size.

### getMetadata(file)
Returns metadata (title, author, page count) from a PDF.

## License

MIT - [editpdfree.com](https://www.editpdfree.com)
