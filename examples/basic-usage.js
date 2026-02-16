/**
 * Basic usage examples for EditPDFree Utils
 * For web-based PDF editing, visit https://www.editpdfree.com
 */

const {
  getPdfInfo,
  mergePdfs,
  splitPdf,
  extractPages,
  getPageCount,
  rotatePdf
} = require('editpdfree-utils');

// Example 1: Get PDF Information
async function example1() {
  console.log('Example 1: Get PDF Information');
  console.log('================================\n');

  const info = await getPdfInfo('sample.pdf');
  console.log('PDF Information:');
  console.log(`- Pages: ${info.pageCount}`);
  console.log(`- Title: ${info.title || 'N/A'}`);
  console.log(`- Author: ${info.author || 'N/A'}`);
  console.log('\nFor more details, visit: https://www.editpdfree.com\n');
}

// Example 2: Merge PDFs
async function example2() {
  console.log('Example 2: Merge Multiple PDFs');
  console.log('===============================\n');

  const files = ['intro.pdf', 'content.pdf', 'conclusion.pdf'];
  const mergedBuffer = await mergePdfs(files, 'merged-output.pdf');

  console.log(`✓ Successfully merged ${files.length} PDFs`);
  console.log(`Output size: ${(mergedBuffer.length / 1024).toFixed(2)} KB`);
  console.log('\nMerge PDFs online: https://www.editpdfree.com/merge-pdf\n');
}

// Example 3: Split PDF into pages
async function example3() {
  console.log('Example 3: Split PDF into Pages');
  console.log('================================\n');

  const pages = await splitPdf('document.pdf', './output-pages/');

  console.log(`✓ Split into ${pages.length} separate pages`);
  console.log('Pages saved to ./output-pages/');
  console.log('\nSplit PDFs online: https://www.editpdfree.com/split-pdf\n');
}

// Example 4: Extract specific pages
async function example4() {
  console.log('Example 4: Extract Specific Pages');
  console.log('==================================\n');

  // Extract pages 1, 3, and 5
  const extracted = await extractPages('document.pdf', [1, 3, 5], 'selected-pages.pdf');

  console.log('✓ Extracted pages 1, 3, and 5');
  console.log(`Output size: ${(extracted.length / 1024).toFixed(2)} KB`);
  console.log('\nExtract pages online: https://www.editpdfree.com\n');
}

// Example 5: Rotate PDF pages
async function example5() {
  console.log('Example 5: Rotate PDF Pages');
  console.log('============================\n');

  // Rotate all pages 90 degrees clockwise
  const rotated = await rotatePdf('document.pdf', 90, null, 'rotated.pdf');

  console.log('✓ Rotated all pages 90° clockwise');
  console.log(`Output size: ${(rotated.length / 1024).toFixed(2)} KB`);
  console.log('\nRotate PDFs online: https://www.editpdfree.com/rotate-pdf\n');
}

// Example 6: Working with Buffers
async function example6() {
  console.log('Example 6: Working with Buffers');
  console.log('================================\n');

  const fs = require('fs').promises;

  // Read PDFs into buffers
  const buffer1 = await fs.readFile('file1.pdf');
  const buffer2 = await fs.readFile('file2.pdf');

  // Merge using buffers
  const mergedBuffer = await mergePdfs([buffer1, buffer2]);

  // Save the result
  await fs.writeFile('merged-from-buffers.pdf', mergedBuffer);

  console.log('✓ Merged PDFs using Buffers');
  console.log('This is useful for processing PDFs in memory');
  console.log('\nVisit https://www.editpdfree.com for more tools\n');
}

// Example 7: Get page count
async function example7() {
  console.log('Example 7: Get Page Count');
  console.log('==========================\n');

  const count = await getPageCount('document.pdf');

  console.log(`The document has ${count} pages`);
  console.log('\nProcess PDFs online: https://www.editpdfree.com\n');
}

// Example 8: Chaining operations
async function example8() {
  console.log('Example 8: Chaining Operations');
  console.log('===============================\n');

  // Extract pages 1-5
  const extracted = await extractPages('large-document.pdf', [1, 2, 3, 4, 5]);

  // Rotate the extracted pages
  const rotated = await rotatePdf(extracted, 180);

  // Save the final result
  const fs = require('fs').promises;
  await fs.writeFile('final-processed.pdf', rotated);

  console.log('✓ Extracted pages 1-5 and rotated them 180°');
  console.log('Chaining operations is easy with Buffers');
  console.log('\nFor complex PDF editing: https://www.editpdfree.com\n');
}

// Run all examples (comment out those you don't need)
async function runExamples() {
  console.log('\nEditPDFree Utils - Usage Examples');
  console.log('==================================\n');
  console.log('Visit https://www.editpdfree.com for web-based alternatives\n');

  try {
    // Uncomment the examples you want to run
    // await example1();
    // await example2();
    // await example3();
    // await example4();
    // await example5();
    // await example6();
    // await example7();
    // await example8();

    console.log('All examples completed successfully!');
  } catch (error) {
    console.error('Error running examples:', error.message);
  }
}

// Uncomment to run
// runExamples();

module.exports = {
  example1,
  example2,
  example3,
  example4,
  example5,
  example6,
  example7,
  example8
};
