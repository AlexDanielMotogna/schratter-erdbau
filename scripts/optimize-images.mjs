/**
 * Image Optimization Script for Schratter Erdbau
 *
 * USO:
 * 1. Coloca tus fotos nuevas en: public/images/Schratter-images/new/
 * 2. Ejecuta: node scripts/optimize-images.mjs
 * 3. Las imágenes optimizadas se guardarán en: public/images/Schratter-images/
 *
 * El script:
 * - Redimensiona imágenes a máximo 1920px de ancho
 * - Comprime con calidad 85%
 * - Renombra automáticamente (quita WhatsApp, IMG-, etc.)
 * - Mantiene el formato original (Next.js convierte a WebP automáticamente)
 */

import sharp from 'sharp';
import { readdir, mkdir, rename, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

const INPUT_DIR = './public/images/Schratter-images/new';
const OUTPUT_DIR = './public/images/Schratter-images';
const MAX_WIDTH = 1920;
const QUALITY = 85;

// Limpia nombres de archivo (quita WhatsApp, IMG-, timestamps, etc.)
function cleanFileName(filename) {
  let name = basename(filename, extname(filename));

  // Quitar prefijos comunes
  name = name
    .replace(/^WhatsApp[-_]?(Bild|Image|Video)?[-_]?/i, '')
    .replace(/^IMG[-_]?/i, '')
    .replace(/^DSC[-_]?/i, '')
    .replace(/^Screenshot[-_]?/i, '')
    // Quitar timestamps como 20240117, 2024-01-17, etc.
    .replace(/\d{4}[-_]?\d{2}[-_]?\d{2}[-_]?(um|at)?[-_]?/gi, '')
    .replace(/\d{2}\.\d{2}\.\d{2}[-_]?/g, '')
    // Quitar códigos aleatorios como _a0cb4574, -768x1024
    .replace(/[-_][a-f0-9]{8}$/i, '')
    .replace(/[-_]\d+x\d+$/i, '')
    // Quitar WA0001, etc.
    .replace(/[-_]?WA\d+/gi, '')
    // Limpiar guiones/underscores múltiples
    .replace(/[-_]+/g, '-')
    .replace(/^[-_]|[-_]$/g, '')
    .toLowerCase();

  // Si quedó vacío o muy corto, usar timestamp
  if (name.length < 3) {
    name = `foto-${Date.now()}`;
  }

  return name + extname(filename).toLowerCase();
}

async function optimizeImages() {
  try {
    // Verificar que existe el directorio de entrada
    try {
      await stat(INPUT_DIR);
    } catch {
      console.log(`\nCreando directorio: ${INPUT_DIR}`);
      console.log('Coloca tus fotos nuevas ahí y ejecuta el script de nuevo.\n');
      await mkdir(INPUT_DIR, { recursive: true });
      return;
    }

    const files = await readdir(INPUT_DIR);
    const imageFiles = files.filter(file =>
      ['.jpg', '.jpeg', '.png', '.webp'].includes(extname(file).toLowerCase())
    );

    if (imageFiles.length === 0) {
      console.log(`\nNo hay imágenes en ${INPUT_DIR}`);
      console.log('Coloca tus fotos ahí y ejecuta el script de nuevo.\n');
      return;
    }

    console.log(`\nOptimizando ${imageFiles.length} imágenes...\n`);

    let processed = 0;
    const renamedFiles = [];

    for (const file of imageFiles) {
      const inputPath = join(INPUT_DIR, file);
      const newName = cleanFileName(file);
      const outputPath = join(OUTPUT_DIR, newName);

      try {
        const image = sharp(inputPath);
        const metadata = await image.metadata();

        // Determinar formato de salida
        const format = metadata.format === 'png' ? 'png' : 'jpeg';

        await image
          .resize(MAX_WIDTH, null, {
            withoutEnlargement: true,
            fit: 'inside'
          })
          [format]({ quality: QUALITY })
          .toFile(outputPath);

        const inputStats = await stat(inputPath);
        const outputStats = await stat(outputPath);
        const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(0);

        console.log(`✓ ${file}`);
        console.log(`  → ${newName} (${savings > 0 ? savings + '% menor' : 'mismo tamaño'})`);

        renamedFiles.push({ original: file, new: newName });
        processed++;
      } catch (err) {
        console.error(`✗ Error con ${file}:`, err.message);
      }
    }

    console.log(`\n${'─'.repeat(50)}`);
    console.log(`✓ ${processed} imágenes optimizadas`);
    console.log(`\nArchivos guardados en: ${OUTPUT_DIR}`);
    console.log('\nPuedes eliminar las fotos originales de /new/ si todo está bien.');

    if (renamedFiles.length > 0) {
      console.log('\n📋 Para agregar a gallery.ts:\n');
      renamedFiles.forEach((f, i) => {
        console.log(`  {
    id: "${processed + i + 1}",
    src: "/images/Schratter-images/${f.new}",
    alt: "Descripción aquí",
    category: "Transport",
  },`);
      });
    }

  } catch (error) {
    console.error('Error:', error);
  }
}

optimizeImages();
