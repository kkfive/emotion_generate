module.exports = [
  {
    // 文件路径，heo 从 src/image/heo 目录下寻找文件
    path: 'heo',
    // 生成json时的前缀
    prefix: 'heo-',
    // 图片基路径
    baseUrl: 'https://emotion-new.acs.pw/heo/image',
    twikoo: {
      // twikoo 生成的tab栏名称
      name: `<img src="${'https://emotion-new.acs.pw/heo/image'}/害羞.png" style="width: 30px;top: 4px;position: relative;" title="Heo">`
    },
    artalk: {
      // artalk 生成的tab栏名称
      name: `Heo`
    },
    waline: {
      name: 'Heo',
      icon: '害羞.png'
    },
    discuss: {
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
    },
    waline: {
      name: '阿鲁',
      icon: '001.gif'
    },
    discuss: {
      name: `阿鲁`
    }
  },
  {
    path: 'kcoin',
    prefix: 'kcoin-',
    baseUrl: 'https://emotion-new.acs.pw/kcoin/image',
    twikoo: {
      name: `酷币`
    },
    artalk: {
      name: `酷币`
    },
    waline: {
      name: '酷币',
      icon: 'coolb1.png'
    },
    discuss: {
      name: `酷币`
    }
  },
  {
    path: 'bili_tv',
    prefix: 'btv-',
    baseUrl: 'https://emotion-new.acs.pw/bili_tv/image',
    twikoo: {
      name: `哔哩TV`
    },
    artalk: {
      name: `哔哩TV`
    },
    waline: {
      name: '哔哩TV',
      icon: '点赞.gif'
    },
    discuss: {
      name: `哔哩TV`
    }
  },
  {
    path: 'huaji',
    prefix: 'huaji-',
    baseUrl: 'https://emotion-new.acs.pw/huaji/image',
    twikoo: {
      name: `滑稽`
    },
    artalk: {
      name: `滑稽`
    },
    waline: {
      name: '滑稽',
      icon: '啊哈哈.jpg'
    },
    discuss: {
      name: `滑稽`
    }
  }
]
