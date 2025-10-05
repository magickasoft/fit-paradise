import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const INPUT_DIR = path.join(process.cwd(), 'public/static/articles-imgs') // твоя папка с картинками
const OUTPUT_DIR = path.join(process.cwd(), 'public/static/articles-imgs-optimized')

const SUPPORTED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp']

async function optimizeImage(filePath: string, outputPath: string) {
  try {
    await sharp(filePath)
      .resize({ width: 640 })
      .toFormat('webp', { quality: 60 }) // сжимаем в webp
      .toFile(outputPath)
    console.log('✔ Оптимизировано:', outputPath)
  } catch (err) {
    console.error('Ошибка:', err)
  }
}

function walkDir(dir: string, callback: (filePath: string) => void) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file)
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath, callback)
    } else {
      callback(fullPath)
    }
  })
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  }

  walkDir(INPUT_DIR, filePath => {
    const ext = path.extname(filePath).toLowerCase()
    if (SUPPORTED_EXTENSIONS.includes(ext)) {
      const relativePath = path.relative(INPUT_DIR, filePath)
      const outputPath = path.join(OUTPUT_DIR, relativePath.replace(ext, '.webp'))
      fs.mkdirSync(path.dirname(outputPath), { recursive: true })
      optimizeImage(filePath, outputPath)
    }
  })
}

main()
