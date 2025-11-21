// Gerado por IA, checar depois
import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';

const POSTS_DIR = './public/posts';
const IMAGE_EXTENSIONS = ['.webp', '.jpg', '.jpeg', '.png'];

// Configurações de tamanhos
const SIZES = {
  thumb: { width: 662, height: 372, suffix: '-thumb' },
};

async function optimizeImages() {
  try {
    const files = await readdir(POSTS_DIR);
    
    // Filtrar apenas imagens que começam com "post" seguido de número
    const postImages = files.filter(file => {
      const ext = file.substring(file.lastIndexOf('.')).toLowerCase();
      return IMAGE_EXTENSIONS.includes(ext) && 
             file.startsWith('postx');
    });

    console.log('🖼️  Imagens encontradas:', postImages.join(', '));
    console.log('');

    for (const image of postImages) {
      const inputPath = join(POSTS_DIR, image);
      const baseName = image.substring(0, image.lastIndexOf('.'));
      const ext = image.substring(image.lastIndexOf('.'));

      console.log(`📸 Processando: ${image}`);

      // Obter informações da imagem original
      const metadata = await sharp(inputPath).metadata();
      console.log(`   Tamanho original: ${metadata.width}x${metadata.height}`);

      // Criar versão thumbnail (para cards)
      const thumbPath = join(POSTS_DIR, `${baseName}${SIZES.thumb.suffix}${ext}`);
      await sharp(inputPath)
        .resize(SIZES.thumb.width, SIZES.thumb.height, {
          fit: 'cover',
          position: 'center',
        })
        .webp({ quality: 85 })
        .toFile(thumbPath);
      
      const thumbStats = await sharp(thumbPath).metadata();
      console.log(`   ✅ Thumb: ${thumbStats.width}x${thumbStats.height} → ${thumbPath.split('/').pop()}`);
      console.log('');
    }

    console.log('✨ Otimização concluída!');
    console.log('');
    console.log('📝 Próximos passos:');
    console.log('   1. As versões -thumb serão usadas nos cards e listagens');
    console.log('   2. As versões originais (postX.webp) serão usadas nos posts completos');

  } catch (error) {
    console.error('❌ Erro:', error.message);
    process.exit(1);
  }
}

optimizeImages();
