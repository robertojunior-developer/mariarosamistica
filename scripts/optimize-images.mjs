import sharp from 'sharp';
import path from 'node:path';
import fs from 'node:fs';

const srcDir = path.resolve('..', 'imagens');
const outDir = path.resolve('public', 'images');

fs.mkdirSync(outDir, { recursive: true });

const jobs = [
  { src: 'logomarca.png', out: 'logo.png', width: 600, format: 'png' },
  { src: '1.png', out: 'loja-interior-01.jpg', width: 1400, format: 'jpeg' },
  { src: '2.png', out: 'loja-interior-02.jpg', width: 1400, format: 'jpeg' },
  { src: '3.png', out: 'nossa-senhora-fatima.jpg', width: 1400, format: 'jpeg' },
  { src: '4.png', out: 'terco-noiva.jpg', width: 1400, format: 'jpeg' },
  { src: '5.png', out: 'imagens-sao-jose.jpg', width: 1400, format: 'jpeg' },
  { src: '6.png', out: 'sagrada-familia.jpg', width: 1400, format: 'jpeg' },
];

for (const job of jobs) {
  const inputPath = path.join(srcDir, job.src);
  const outputPath = path.join(outDir, job.out);
  let pipeline = sharp(inputPath).resize({ width: job.width, withoutEnlargement: true });
  if (job.format === 'jpeg') {
    pipeline = pipeline.jpeg({ quality: 82, mozjpeg: true });
  } else {
    pipeline = pipeline.png({ quality: 90, compressionLevel: 9 });
  }
  await pipeline.toFile(outputPath);

  // Also generate webp version
  const webpOut = outputPath.replace(/\.(jpg|png)$/, '.webp');
  await sharp(inputPath).resize({ width: job.width, withoutEnlargement: true }).webp({ quality: 80 }).toFile(webpOut);

  console.log(`Generated ${job.out} and webp version`);
}

// Favicon from logo
await sharp(path.join(srcDir, 'logomarca.png')).resize(64, 64).png().toFile(path.join('public', 'favicon.png'));
console.log('Generated favicon.png');
