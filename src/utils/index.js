const fs = require('fs')
const path = require('path')
const child_process = require('child_process')

/**
 * 获取文件夹下所有文件名
 * @param {string} name image下的文件名 例如：heo
 * @returns {Array<string>} 文件列表
 */
function getImageFileList(name) {
  return fs.readdirSync(path.resolve(__dirname, `../image/${name}`))
}
/**
 * 写文件
 * @param {string} fileName 文件名
 * @param {string} content 文件内容
 */
function writeFile(fileName, pathTarget, content) {
  const distDir = fs.existsSync(path.resolve(__dirname, `../../dist`))
  const pathDir = fs.existsSync(
    path.resolve(__dirname, `../../dist/${pathTarget}`)
  )
  if (!distDir) {
    fs.mkdirSync(path.resolve(__dirname, `../../dist`))
  }
  if (!pathDir) {
    fs.mkdirSync(path.resolve(__dirname, `../../dist/${pathTarget}`))
  }
  fs.writeFileSync(
    path.resolve(__dirname, `../../dist/${pathTarget}/${fileName}.json`),
    content
  )
}
function copyDir(src, dist) {
  const imagePath = path.resolve(__dirname, `../../dist/${dist}/image`)
  const isImagePath = fs.existsSync(imagePath)
  if (!isImagePath) {
    fs.mkdirSync(imagePath)
  }

  const srcPath = path.resolve(__dirname, `../../src/image/${src}/*`)
  const distPath = path.resolve(__dirname, `../../dist/${dist}/image/`)
  child_process.exec(`cp ${srcPath} ${distPath}`, (err, stdout, stderr) => {
    if (err) {
      //发生一些错误
      console.error('error', err)
    }
  })
}

module.exports = { getImageFileList, writeFile, copyDir }
