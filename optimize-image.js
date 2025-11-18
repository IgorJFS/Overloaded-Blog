// Gerado por IA, checar depois
import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';

const PUBLIC_DIR = './public';
const IMAGE_EXTENSIONS = ['.webp', '.jpg', '.jpeg', '.png'];

// Configurações de tamanhos
const SIZES = {
  thumb: { width: 800, height: 450, suffix: '-thumb' },
  hero: { width: 1200, height: 675, suffix: '-hero' },
};

async function optimizeImages() {
  try {
    const files = await readdir(PUBLIC_DIR);
    
    // Filtrar apenas imagens de posts (post1, post2, etc.) e social media
    const postImages = files.filter(file => {
      const ext = file.substring(file.lastIndexOf('.')).toLowerCase();
      return IMAGE_EXTENSIONS.includes(ext) && 
             (file.startsWith('post') || file.startsWith('social'));
    });

    console.log('🖼️  Imagens encontradas:', postImages.join(', '));
    console.log('');

    for (const image of postImages) {
      const inputPath = join(PUBLIC_DIR, image);
      const baseName = image.substring(0, image.lastIndexOf('.'));
      const ext = image.substring(image.lastIndexOf('.'));

      console.log(`📸 Processando: ${image}`);

      // Obter informações da imagem original
      const metadata = await sharp(inputPath).metadata();
      console.log(`   Tamanho original: ${metadata.width}x${metadata.height}`);

      // Criar versão thumbnail (para cards)
      const thumbPath = join(PUBLIC_DIR, `${baseName}${SIZES.thumb.suffix}${ext}`);
      await sharp(inputPath)
        .resize(SIZES.thumb.width, SIZES.thumb.height, {
          fit: 'cover',
          position: 'center',
        })
        .webp({ quality: 85 })
        .toFile(thumbPath);
      
      const thumbStats = await sharp(thumbPath).metadata();
      console.log(`   ✅ Thumb: ${thumbStats.width}x${thumbStats.height} → ${thumbPath.split('/').pop()}`);

      // Criar versão hero (para posts completos)
      const heroPath = join(PUBLIC_DIR, `${baseName}${SIZES.hero.suffix}${ext}`);
      await sharp(inputPath)
        .resize(SIZES.hero.width, SIZES.hero.height, {
          fit: 'cover',
          position: 'center',
        })
        .webp({ quality: 90 })
        .toFile(heroPath);
      
      const heroStats = await sharp(heroPath).metadata();
      console.log(`   ✅ Hero: ${heroStats.width}x${heroStats.height} → ${heroPath.split('/').pop()}`);
      console.log('');
    }

    console.log('✨ Otimização concluída!');
    console.log('');
    console.log('📝 Próximos passos:');
    console.log('   1. Atualize posts.ts para usar as versões -thumb nos cards');
    console.log('   2. As versões -hero serão usadas automaticamente nos posts completos');
    console.log('   3. Delete as versões originais se não precisar mais (opcional)');

  } catch (error) {
    console.error('❌ Erro:', error.message);
    process.exit(1);
  }
}

optimizeImages();
