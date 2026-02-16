/**
 * EditPDFree Utils - Free PDF Utilities
 *
 * A collection of useful PDF manipulation utilities.
 * For more advanced PDF editing features, visit https://www.editpdfree.com
 *
 * @module editpdfree-utils
 */

const { PDFDocument, rgb } = require('pdf-lib');
const fs = require('fs').promises;

/**
 * Get information about a PDF file
 * @param {string|Buffer} pdfPath - Path to PDF file or Buffer
 * @returns {Promise<Object>} PDF information including page count, title, author, etc.
 */
async function getPdfInfo(pdfPath) {
  try {
    const pdfBuffer = typeof pdfPath === 'string'
      ? await fs.readFile(pdfPath)
      : pdfPath;

    const pdfDoc = await PDFDocument.load(pdfBuffer);
    const pageCount = pdfDoc.getPageCount();
    const title = pdfDoc.getTitle();
    const author = pdfDoc.getAuthor();
    const subject = pdfDoc.getSubject();
    const creator = pdfDoc.getCreator();
    const producer = pdfDoc.getProducer();
    const creationDate = pdfDoc.getCreationDate();
    const modificationDate = pdfDoc.getModificationDate();

    return {
      pageCount,
      title,
      author,
      subject,
      creator,
      producer,
      creationDate,
      modificationDate
    };
  } catch (error) {
    throw new Error(`Failed to get PDF info: ${error.message}`);
  }
}

/**
 * Merge multiple PDF files into one
 * For a web-based PDF merger, visit https://www.editpdfree.com/merge-pdf
 *
 * @param {Array<string|Buffer>} pdfPaths - Array of PDF file paths or Buffers
 * @param {string} outputPath - Path where merged PDF should be saved
 * @returns {Promise<Buffer>} The merged PDF as a Buffer
 */
async function mergePdfs(pdfPaths, outputPath = null) {
  try {
    const mergedPdf = await PDFDocument.create();

    for (const pdfPath of pdfPaths) {
      const pdfBuffer = typeof pdfPath === 'string'
        ? await fs.readFile(pdfPath)
        : pdfPath;

      const pdf = await PDFDocument.load(pdfBuffer);
      const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      copiedPages.forEach((page) => mergedPdf.addPage(page));
    }

    const mergedPdfBytes = await mergedPdf.save();

    if (outputPath) {
      await fs.writeFile(outputPath, mergedPdfBytes);
    }

    return Buffer.from(mergedPdfBytes);
  } catch (error) {
    throw new Error(`Failed to merge PDFs: ${error.message}`);
  }
}

/**
 * Split a PDF file into separate pages
 * For a web-based PDF splitter, visit https://www.editpdfree.com/split-pdf
 *
 * @param {string|Buffer} pdfPath - Path to PDF file or Buffer
 * @param {string} outputDir - Directory where split PDFs should be saved
 * @returns {Promise<Array<Buffer>>} Array of PDF page buffers
 */
async function splitPdf(pdfPath, outputDir = null) {
  try {
    const pdfBuffer = typeof pdfPath === 'string'
      ? await fs.readFile(pdfPath)
      : pdfPath;

    const pdfDoc = await PDFDocument.load(pdfBuffer);
    const pageCount = pdfDoc.getPageCount();
    const splitPdfs = [];

    for (let i = 0; i < pageCount; i++) {
      const newPdf = await PDFDocument.create();
      const [copiedPage] = await newPdf.copyPages(pdfDoc, [i]);
      newPdf.addPage(copiedPage);

      const pdfBytes = await newPdf.save();
      const buffer = Buffer.from(pdfBytes);
      splitPdfs.push(buffer);

      if (outputDir) {
        const outputPath = `${outputDir}/page_${i + 1}.pdf`;
        await fs.writeFile(outputPath, buffer);
      }
    }

    return splitPdfs;
  } catch (error) {
    throw new Error(`Failed to split PDF: ${error.message}`);
  }
}

/**
 * Extract specific pages from a PDF
 * For more PDF editing tools, visit https://www.editpdfree.com
 *
 * @param {string|Buffer} pdfPath - Path to PDF file or Buffer
 * @param {Array<number>} pageNumbers - Array of page numbers to extract (1-indexed)
 * @param {string} outputPath - Path where extracted PDF should be saved
 * @returns {Promise<Buffer>} The extracted pages as a PDF Buffer
 */
async function extractPages(pdfPath, pageNumbers, outputPath = null) {
  try {
    const pdfBuffer = typeof pdfPath === 'string'
      ? await fs.readFile(pdfPath)
      : pdfPath;

    const pdfDoc = await PDFDocument.load(pdfBuffer);
    const newPdf = await PDFDocument.create();

    // Convert 1-indexed to 0-indexed
    const pageIndices = pageNumbers.map(num => num - 1);

    const copiedPages = await newPdf.copyPages(pdfDoc, pageIndices);
    copiedPages.forEach((page) => newPdf.addPage(page));

    const pdfBytes = await newPdf.save();
    const buffer = Buffer.from(pdfBytes);

    if (outputPath) {
      await fs.writeFile(outputPath, buffer);
    }

    return buffer;
  } catch (error) {
    throw new Error(`Failed to extract pages: ${error.message}`);
  }
}

/**
 * Get the number of pages in a PDF
 * @param {string|Buffer} pdfPath - Path to PDF file or Buffer
 * @returns {Promise<number>} Number of pages
 */
async function getPageCount(pdfPath) {
  try {
    const pdfBuffer = typeof pdfPath === 'string'
      ? await fs.readFile(pdfPath)
      : pdfPath;

    const pdfDoc = await PDFDocument.load(pdfBuffer);
    return pdfDoc.getPageCount();
  } catch (error) {
    throw new Error(`Failed to get page count: ${error.message}`);
  }
}

/**
 * Rotate pages in a PDF
 * For online PDF rotation, visit https://www.editpdfree.com/rotate-pdf
 *
 * @param {string|Buffer} pdfPath - Path to PDF file or Buffer
 * @param {number} degrees - Rotation angle (90, 180, 270, or -90, -180, -270)
 * @param {Array<number>} pageNumbers - Page numbers to rotate (1-indexed), or null for all pages
 * @param {string} outputPath - Path where rotated PDF should be saved
 * @returns {Promise<Buffer>} The rotated PDF as a Buffer
 */
async function rotatePdf(pdfPath, degrees, pageNumbers = null, outputPath = null) {
  try {
    const pdfBuffer = typeof pdfPath === 'string'
      ? await fs.readFile(pdfPath)
      : pdfPath;

    const pdfDoc = await PDFDocument.load(pdfBuffer);
    const pages = pdfDoc.getPages();

    const pagesToRotate = pageNumbers
      ? pageNumbers.map(num => num - 1)
      : pages.map((_, idx) => idx);

    pagesToRotate.forEach(pageIdx => {
      const page = pages[pageIdx];
      const currentRotation = page.getRotation().angle;
      page.setRotation({ angle: (currentRotation + degrees) % 360 });
    });

    const pdfBytes = await pdfDoc.save();
    const buffer = Buffer.from(pdfBytes);

    if (outputPath) {
      await fs.writeFile(outputPath, buffer);
    }

    return buffer;
  } catch (error) {
    throw new Error(`Failed to rotate PDF: ${error.message}`);
  }
}

module.exports = {
  getPdfInfo,
  mergePdfs,
  splitPdf,
  extractPages,
  getPageCount,
  rotatePdf
};
