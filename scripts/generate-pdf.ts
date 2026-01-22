import { chromium } from 'playwright';
import path from 'path';

const BASE_URL = process.env.BASE_URL || 'http://localhost:4242';
const OUTPUT_PATH = path.resolve(__dirname, '../../Dokumentation/Bedienungsanleitung_3D-Display_WEB.pdf');

async function generatePDF() {
  console.log('🚀 Starting PDF generation...');
  console.log(`📍 Base URL: ${BASE_URL}`);
  console.log(`📄 Output: ${OUTPUT_PATH}`);

  const browser = await chromium.launch({
    headless: true,
  });

  try {
    const context = await browser.newContext({
      viewport: { width: 1200, height: 800 },
    });

    const page = await context.newPage();

    console.log('📖 Loading PDF page...');
    await page.goto(`${BASE_URL}/pdf`, {
      waitUntil: 'networkidle',
      timeout: 60000,
    });

    // Wait for images to load
    console.log('🖼️  Waiting for images to load...');
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(3000); // Extra time for images

    // Wait for fonts to load
    await page.evaluate(() => document.fonts.ready);
    console.log('✅ Fonts loaded');

    console.log('📝 Generating PDF...');
    await page.pdf({
      path: OUTPUT_PATH,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '15mm',
        bottom: '20mm',
        left: '15mm',
        right: '15mm',
      },
      displayHeaderFooter: true,
      headerTemplate: '<div></div>',
      footerTemplate: `
        <div style="width: 100%; font-size: 10px; font-family: Arial, sans-serif; color: #666; padding: 0 15mm; display: flex; justify-content: space-between; align-items: center;">
          <span style="flex: 1;">3DGlobal Displays GmbH</span>
          <span style="flex: 1; text-align: center;">MultiView 3D-Display Bedienungsanleitung</span>
          <span style="flex: 1; text-align: right;">Seite <span class="pageNumber"></span> von <span class="totalPages"></span></span>
        </div>
      `,
      preferCSSPageSize: true,
    });

    console.log(`✅ PDF generated successfully: ${OUTPUT_PATH}`);
  } catch (error) {
    console.error('❌ Error generating PDF:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

generatePDF();
