const { getImageFileList, writeFile, copyDir } = require('./utils/index')
const generateUtils = require('./utils/generate')
const imagePathList = require('./config')

imagePathList.forEach((item) => {
  const imageList = getImageFileList(item.path)

  const artalk = generateUtils.artalk(imageList, item)
  writeFile(`artalk`, item.path, JSON.stringify(artalk))
  const valine = generateUtils.valine(imageList, item)
  writeFile(`valine`, item.path, JSON.stringify(valine))
  const twikoo = generateUtils.twikoo(imageList, item)
  writeFile(`twikoo`, item.path, JSON.stringify(twikoo))
  copyDir(`${item.path}`, `${item.path}`)
})
