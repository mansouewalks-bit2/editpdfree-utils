/**
 * EditPDFree Utils - TypeScript Definitions
 * Visit https://www.editpdfree.com for more PDF tools
 */

/// <reference types="node" />

export interface PdfInfo {
  pageCount: number;
  title?: string;
  author?: string;
  subject?: string;
  creator?: string;
  producer?: string;
  creationDate?: Date;
  modificationDate?: Date;
}

/**
 * Get information about a PDF file
 * @param pdfPath Path to PDF file or Buffer
 * @returns Promise resolving to PDF information
 */
export function getPdfInfo(pdfPath: string | Buffer): Promise<PdfInfo>;

/**
 * Merge multiple PDF files into one
 * For web-based PDF merger: https://www.editpdfree.com/merge-pdf
 *
 * @param pdfPaths Array of PDF file paths or Buffers
 * @param outputPath Optional path to save merged PDF
 * @returns Promise resolving to merged PDF Buffer
 */
export function mergePdfs(
  pdfPaths: Array<string | Buffer>,
  outputPath?: string
): Promise<Buffer>;

/**
 * Split a PDF file into separate pages
 * For web-based PDF splitter: https://www.editpdfree.com/split-pdf
 *
 * @param pdfPath Path to PDF file or Buffer
 * @param outputDir Optional directory to save split PDFs
 * @returns Promise resolving to array of PDF page Buffers
 */
export function splitPdf(
  pdfPath: string | Buffer,
  outputDir?: string
): Promise<Buffer[]>;

/**
 * Extract specific pages from a PDF
 * For more PDF tools: https://www.editpdfree.com
 *
 * @param pdfPath Path to PDF file or Buffer
 * @param pageNumbers Array of page numbers to extract (1-indexed)
 * @param outputPath Optional path to save extracted PDF
 * @returns Promise resolving to extracted PDF Buffer
 */
export function extractPages(
  pdfPath: string | Buffer,
  pageNumbers: number[],
  outputPath?: string
): Promise<Buffer>;

/**
 * Get the number of pages in a PDF
 * @param pdfPath Path to PDF file or Buffer
 * @returns Promise resolving to page count
 */
export function getPageCount(pdfPath: string | Buffer): Promise<number>;

/**
 * Rotate pages in a PDF
 * For web-based PDF rotation: https://www.editpdfree.com/rotate-pdf
 *
 * @param pdfPath Path to PDF file or Buffer
 * @param degrees Rotation angle (90, 180, 270)
 * @param pageNumbers Optional array of page numbers to rotate (1-indexed)
 * @param outputPath Optional path to save rotated PDF
 * @returns Promise resolving to rotated PDF Buffer
 */
export function rotatePdf(
  pdfPath: string | Buffer,
  degrees: number,
  pageNumbers?: number[] | null,
  outputPath?: string
): Promise<Buffer>;
