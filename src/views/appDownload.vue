<template>
  <div class="appDownload border-iphone">
    <header>
      <div class="logo-name">
        课池
      </div>
      <div class="right-ul">
        <div class="ft-38 fwb ">课池——智能教育APP</div>
        <div class="ft-24 color-gray pt-12">快速提高学习成绩APP</div>
        <button
          class="action-but"
          type="info"
        >立即下载</button>
      </div>
    </header>

    <div class="last-new">
      <div class="title">
        <div class="title-msg">
          最新推荐
        </div>
      </div>
      <div class="content">
        <div class="top-msg">
          <img src="detail.png">
          <span class="right">
            <p class="ft-24 fwb pt-12">胡汉民</p>
            <p class="ft-20 color-gray pt-12">我正在使用课池APP提高学习成绩！</p>
          </span>
        </div>
        <p class="msg-li">三个月快速提高学习成绩，这款软件非常适合你。</p>
        <p class="msg-li">我推荐你使用它。这款软件还能分析出我已掌握知识点，</p>
        <p class="msg-li">和未掌握知识点，而且每个知识点有针对性的视频学习。</p>
        <p class="msg-li">还能在线考试，参与比赛拿奖金，真的太棒了。</p>

      </div>

    </div>

    <div class="last-new">
      <div class="title">
        <div class="title-msg">
          软件特色
        </div>
      </div>
      <div class="content-menu">
        <div
          class="tab-item"
          v-for="(item, index) in tabList"
          :key="index"
          :style="{background: item.bg}"
        >{{item.name}}</div>
      </div>

    </div>

    <div class="last-new app-image">
      <div class="title">
        <div class="title-msg">
          软件截图
        </div>
      </div>
      <div class="content-image">

        <div
          class="image-item"
          v-for="(item, index) in imgList"
          :key="index"
        >
          <img :src="item.img">
        </div>
      </div>

    </div>

    <div class="download-but">
      下载APP和好友一起学习
    </div>

   

  </div>
</template>
<script>
export default {
  data() {
    return {
      imgList: [
        {
          img: 'http://img10.360buyimg.com/babel/s590x470_jfs/t1/86665/16/14434/96847/5e65ecddE713deaba/0b7e64238f10ee54.jpg'
        },
        {
          img: 'http://img10.360buyimg.com/babel/s590x470_jfs/t1/86665/16/14434/96847/5e65ecddE713deaba/0b7e64238f10ee54.jpg'
        },
        {
          img: 'http://img10.360buyimg.com/babel/s590x470_jfs/t1/86665/16/14434/96847/5e65ecddE713deaba/0b7e64238f10ee54.jpg'
        }
      ],
      tabList: [
        {
          name: '智能学习',
          bg: '#ffbb51'
        },
        {
          name: '快速学习',
          bg: '#71a4de'
        },
        {
          name: '针对性学习，免费学习',
          bg: '#a9db84'
        },
        {
          name: '在线比赛',
          bg: '#ef8a75'
        },
        {
          name: '在线考试',
          bg: '#e186ec'
        },
        {
          name: '大数据分析知识点掌握程度',
          bg: '#a3dcb1'
        },
        {
          name: '生成月度学习报告',
          bg: '#a3dcb1'
        },
        {
          name: '适合年龄：4-24岁',
          bg: '#66a5ec'
        },
        {
          name: '适合学习阶段：小学~高中',
          bg: '#ebca97'
        }
      ]

    }
  },
  methods: {


  }
}
</script>
<style lang="scss" scoped>
button:hover {
  opacity: 0.6;

}

.appDownload {
  header {
    display: flex;
    background: #fff;
    padding: 36px;
    .logo-name {
      height: 170px;
      width: 170px;
      border-radius: 40px;
      font-size: 46px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #ffd916;
    }
    .right-ul {
      padding-left: 30px;
    }
    .action-but {
      font-size: 20px;
      font-weight: bold;
      width: 156px;
      height: 50px;
      border: none;
      background: #1684ff;
      color: #fff;
      border-radius: 25px;
      margin-top: 26px;
    }
  }
  .last-new {
    border-top: 20px solid #f6f6f6;
    padding: 40px 36px;
    .title {
      height: 64px;
      border-bottom: 2px solid #f6f6f6;
      .title-msg {
        height: 100%;
        display: inline-block;
        font-size: 28px;
        font-weight: bold;
        border-bottom: 2px solid #ffd916;
        margin-bottom: -2px;
      }
    }
    .content {
      .top-msg {
        display: flex;
        padding: 24px 0;
        img {
          height: 92px;
          width: 92px;
          border-radius: 46px;
          margin-right: 20px;
        }
      }
      .msg-li {
        font-size: 24px;
        color: #666666;
        margin-top: 14px;
      }
      .msg-li:nth-child(1) {
        margin-top: 0;
      }
    }

    .content-menu {
      display: flex;
      flex-flow: row wrap;
      padding: 10px 0 0;
      .tab-item {
        display: inline-block;
        padding: 12px 16px;
        // background: #ffbb51;
        font-size: 20px;
        color: #fff;
        border-radius: 6px;
        margin: 30px 20px 0 0;
      }
    }

    .content-image {
      padding: 40px 0;
      height: 860px;

      overflow-x: scroll;
      overflow-y: hidden;
      white-space: nowrap;

      .image-item {
        height: 100%;
        width: 442px;
        margin-left: 30px;
        display: inline-block;
        img {
          height: 100%;
          width: 100%;
        }
      }
      .image-item:nth-child(1) {
        margin-left: 36px;
      }
    }
    
  }
  .app-image {
    padding: 40px 0;
    .title {
      padding: 0 36px;
    }
  }

  .download-but {
    width: 630px;
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    background-color: #ffd916;
    margin: 0 auto 46px;
    border-radius: 12px;
  }
}
</style>