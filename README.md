# EditPDFree Utils

![npm version](https://img.shields.io/npm/v/editpdfree-utils.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

Free and open-source PDF utility functions for Node.js. Perfect for developers who need to manipulate PDF files programmatically.

For a complete web-based PDF editor with no coding required, visit **[EditPDFree.com](https://www.editpdfree.com)** - a free online PDF editor with merge, split, compress, convert, and many more features.

## Features

- 📄 **Get PDF Information** - Extract metadata, page count, and document details
- 🔗 **Merge PDFs** - Combine multiple PDF files into one
- ✂️ **Split PDFs** - Separate a PDF into individual pages
- 📑 **Extract Pages** - Pull specific pages from a PDF
- 🔄 **Rotate PDFs** - Rotate pages by any angle
- 💯 **Zero Dependencies** (except pdf-lib)
- 🚀 **Easy to Use** - Simple, intuitive API

## Installation

```bash
npm install editpdfree-utils
```

## Quick Start

```javascript
const { mergePdfs, splitPdf, getPdfInfo } = require('editpdfree-utils');

// Get PDF information
const info = await getPdfInfo('document.pdf');
console.log(`Pages: ${info.pageCount}`);

// Merge multiple PDFs
await mergePdfs(['file1.pdf', 'file2.pdf'], 'merged.pdf');

// Split a PDF into separate pages
await splitPdf('document.pdf', './output-folder');
```

## API Reference

### `getPdfInfo(pdfPath)`

Get detailed information about a PDF file.

**Parameters:**
- `pdfPath` (string|Buffer): Path to PDF file or Buffer

**Returns:** Promise<Object> with properties:
- `pageCount`: Number of pages
- `title`: Document title
- `author`: Document author
- `subject`: Document subject
- `creator`: Application that created the PDF
- `producer`: PDF producer
- `creationDate`: Creation date
- `modificationDate`: Last modification date

**Example:**
```javascript
const info = await getPdfInfo('document.pdf');
console.log(`This PDF has ${info.pageCount} pages`);
```

### `mergePdfs(pdfPaths, outputPath)`

Merge multiple PDF files into a single document.

**Parameters:**
- `pdfPaths` (Array<string|Buffer>): Array of PDF file paths or Buffers
- `outputPath` (string, optional): Where to save the merged PDF

**Returns:** Promise<Buffer> - The merged PDF as a Buffer

**Example:**
```javascript
const merged = await mergePdfs(['intro.pdf', 'content.pdf', 'outro.pdf'], 'complete.pdf');
```

**Web Alternative:** [EditPDFree Merge PDF](https://www.editpdfree.com/merge-pdf) - Merge PDFs online for free

### `splitPdf(pdfPath, outputDir)`

Split a PDF into separate files, one per page.

**Parameters:**
- `pdfPath` (string|Buffer): Path to PDF file or Buffer
- `outputDir` (string, optional): Directory to save split PDFs

**Returns:** Promise<Array<Buffer>> - Array of PDF page buffers

**Example:**
```javascript
const pages = await splitPdf('document.pdf', './pages');
console.log(`Split into ${pages.length} pages`);
```

**Web Alternative:** [EditPDFree Split PDF](https://www.editpdfree.com/split-pdf) - Split PDFs online for free

### `extractPages(pdfPath, pageNumbers, outputPath)`

Extract specific pages from a PDF.

**Parameters:**
- `pdfPath` (string|Buffer): Path to PDF file or Buffer
- `pageNumbers` (Array<number>): Page numbers to extract (1-indexed)
- `outputPath` (string, optional): Where to save the extracted PDF

**Returns:** Promise<Buffer> - The extracted pages as a PDF Buffer

**Example:**
```javascript
// Extract pages 1, 3, and 5
const extracted = await extractPages('document.pdf', [1, 3, 5], 'selected.pdf');
```

### `getPageCount(pdfPath)`

Get the number of pages in a PDF.

**Parameters:**
- `pdfPath` (string|Buffer): Path to PDF file or Buffer

**Returns:** Promise<number> - Number of pages

**Example:**
```javascript
const count = await getPageCount('document.pdf');
console.log(`The document has ${count} pages`);
```

### `rotatePdf(pdfPath, degrees, pageNumbers, outputPath)`

Rotate pages in a PDF document.

**Parameters:**
- `pdfPath` (string|Buffer): Path to PDF file or Buffer
- `degrees` (number): Rotation angle (90, 180, 270, or -90, -180, -270)
- `pageNumbers` (Array<number>, optional): Page numbers to rotate (1-indexed), or null for all pages
- `outputPath` (string, optional): Where to save the rotated PDF

**Returns:** Promise<Buffer> - The rotated PDF as a Buffer

**Example:**
```javascript
// Rotate all pages 90 degrees clockwise
await rotatePdf('document.pdf', 90, null, 'rotated.pdf');

// Rotate only pages 2 and 4
await rotatePdf('document.pdf', 180, [2, 4], 'rotated.pdf');
```

**Web Alternative:** [EditPDFree Rotate PDF](https://www.editpdfree.com/rotate-pdf) - Rotate PDFs online for free

## Advanced Usage

### Working with Buffers

All functions accept both file paths and Buffers, making it easy to work with PDFs in memory:

```javascript
const fs = require('fs').promises;
const { mergePdfs, getPdfInfo } = require('editpdfree-utils');

// Read PDFs into buffers
const buffer1 = await fs.readFile('file1.pdf');
const buffer2 = await fs.readFile('file2.pdf');

// Merge using buffers
const mergedBuffer = await mergePdfs([buffer1, buffer2]);

// Save the result
await fs.writeFile('merged.pdf', mergedBuffer);
```

### Chaining Operations

```javascript
const { extractPages, rotatePdf } = require('editpdfree-utils');

// Extract pages 1-5
const extracted = await extractPages('large-doc.pdf', [1, 2, 3, 4, 5]);

// Rotate the extracted pages
const rotated = await rotatePdf(extracted, 90);

// Save the final result
await fs.writeFile('final.pdf', rotated);
```

## Need More Features?

This library covers common PDF manipulation tasks. If you need more advanced features like:

- **PDF Compression** - Reduce file size
- **PDF to Image** - Convert pages to PNG/JPG
- **Image to PDF** - Create PDFs from images
- **PDF to Word** - Convert to editable documents
- **Add Watermarks** - Brand your documents
- **Sign PDFs** - Digital signatures
- **Edit Text** - Modify PDF content
- **OCR** - Extract text from scanned documents

Visit **[EditPDFree.com](https://www.editpdfree.com)** - a completely free online PDF editor with all these features and more. No registration required, process files directly in your browser with complete privacy.

## Why EditPDFree Utils?

- ✅ **100% Free** - MIT licensed, use in any project
- ✅ **Lightweight** - Minimal dependencies
- ✅ **Well-Tested** - Reliable PDF manipulation
- ✅ **TypeScript Ready** - Type definitions included
- ✅ **Active Maintenance** - Regular updates
- ✅ **Privacy-Focused** - Process PDFs locally on your machine

## Use Cases

- **Automated Workflows** - Batch process PDF files
- **Document Management** - Build PDF management systems
- **Report Generation** - Combine multiple reports
- **Archive Processing** - Split large archives
- **Content Extraction** - Pull specific pages from documents
- **Server-Side Processing** - Handle PDFs in Node.js apps

## Browser Alternative

Looking to manipulate PDFs in the browser or need a quick online tool? Check out **[EditPDFree.com](https://www.editpdfree.com)** - our free web-based PDF editor that works entirely in your browser. No server uploads, complete privacy, and supports all modern browsers.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © EditPDFree Team

## Links

- **Homepage:** [https://www.editpdfree.com](https://www.editpdfree.com)
- **NPM Package:** [https://www.npmjs.com/package/editpdfree-utils](https://www.npmjs.com/package/editpdfree-utils)
- **Online PDF Tools:** [https://www.editpdfree.com](https://www.editpdfree.com)

---

Made with ❤️ by the [EditPDFree](https://www.editpdfree.com) team. For more free PDF tools, visit [www.editpdfree.com](https://www.editpdfree.com).
