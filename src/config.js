module.exports = [
  {
    // 文件路径，heo 从 src/image/heo 目录下寻找文件
    path: 'heo',
    // 生成json时的前缀
    prefix: 'heo-',
    // 图片基路径
    baseUrl: 'https://npm.elemecdn.com/sticker-heo/Sticker-100',
    twikoo: {
      // twikoo 生成的tab栏名称
      name: `<img src="${'https://npm.elemecdn.com/sticker-heo/Sticker-100'}/害羞.png" style="width: 30px;top: 4px;position: relative;" title="Heo">`
    },
    artalk: {
      // artalk 生成的tab栏名称
      name: `Heo`
    }
  },
  {
    path: 'aru',
    prefix: 'aru-',
    baseUrl: 'https://emotion-new.acs.pw/aru/image',
    twikoo: {
      name: `阿鲁`
    },
    artalk: {
      name: `阿鲁`
    }
  },
  {
    path: 'kcoin',
    prefix: 'kcoin-',
    baseUrl: 'https://emotion-new.acs.pw/aru/kcoin',
    twikoo: {
      name: `酷币`
    },
    artalk: {
      name: `酷币`
    }
  },
  {
    path: 'bili_tv',
    prefix: 'btv-',
    baseUrl: 'https://emotion-new.acs.pw/aru/bili_tv',
    twikoo: {
      name: `哔哩TV`
    },
    artalk: {
      name: `哔哩TV`
    }
  }
]
