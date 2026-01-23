const puppeteer = require('puppeteer');
const path = require('path');

async function generatePDF() {
    const now = new Date();
    const timestamp = now.toISOString()
        .replace(/[:.]/g, '-')
        .replace('T', '_')
        .slice(0, 19);

    const outputFileName = `Luong_NGUYEN_CV_${timestamp}.pdf`;
    const outputPath = path.join(__dirname, outputFileName);
    const htmlPath = path.join(__dirname, 'cv.html');

    console.log('Launching browser...');
    const browser = await puppeteer.launch({
        headless: 'new'
    });

    const page = await browser.newPage();

    console.log('Loading CV...');
    await page.goto(`file://${htmlPath}`, {
        waitUntil: 'networkidle0'
    });

    console.log('Generating PDF...');
    await page.pdf({
        path: outputPath,
        format: 'A4',
        printBackground: true,
        margin: {
            top: '0',
            right: '0',
            bottom: '0',
            left: '0'
        }
    });

    await browser.close();

    console.log(`PDF generated: ${outputFileName}`);
}

generatePDF().catch(console.error);
