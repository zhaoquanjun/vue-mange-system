<template>
    <div class="news">
        <h2 class="title">近期新事件</h2>
        <el-card class="box-card">
            <div slot="header">
                <span class="cardTitle">追剧小美好，就是这么爱你</span>
                <el-button style="float:right;padding:3px" type="text" @click="submit">操作按钮</el-button>
                <i class="el-icon-star-off" v-if="star1Show" @click="news1Star" style="display:block;float:right;padding-right:20px;padding-top:2px"></i>
                <i class="el-icon-star-on" v-else  @click="news1Star" style="display:block;float:right;padding-right:20px;padding-top:2px"></i>
                </div>
            <div class="text item" v-for="item in news1" :key="item.desc">
                <router-link :to="'/newsDetail' + item.path">{{item.title}}</router-link>
            </div>
        </el-card>
        <el-card class="box-card">
            <div slot="header">
                <span class="cardTitle">告别2017，面对2018，你有什么 idea ~</span>
                <el-button style="float:right;padding:3px" type="text" @click="submit">操作按钮</el-button>
                <i class="el-icon-star-off" v-if="star2Show" @click="news2Star" style="display:block;float:right;padding-right:20px;padding-top:2px"></i>
                <i class="el-icon-star-on" v-else  @click="news2Star" style="display:block;float:right;padding-right:20px;padding-top:2px"></i>
                </div>
            <div class="text item" v-for="item in news2" :key="item.desc">
                <router-link :to="'/newsDetail' + item.path">{{item.title}}</router-link>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
  data() {
    return {
      news1: [
        {
          title: "致我们单纯的小美好1~5集预透",
          desc: "360",
          path: "/shenyue_1_5?news1_06"
        },
        {
          title: "致我们单纯的小美好6-10集抢先看，你准备好了吗？",
          desc: "2017",
          path: "/shenyue_6_10?news1_05"
        },
        {
          title: "致我们单纯的小美好11-15集，为了小美好，会员我来了！",
          desc: "2018",
          path: "/shenyue_11_15?news1_04"
        },
        {
          title: "致我们单纯的小美好16-20集，为了沈月月，我会准时守在电脑旁的！",
          desc: "脱单",
          path: "/shenyue_16_20?news1_03"
        },
        {
          title: "致我们单纯的小美好21-23集，就这么没了，青春的气息好不舍呀~",
          desc: "详情",
          path: "/shenyue_21_23?news1_02"
        },
        {
          title: "致我们单纯的小美好番外篇",
          desc: "图文详情",
          path: "/shenyueyue_fanwai?news1_01"
        }
      ],
      news2: [
        {
          title: "踩着2017的尾巴来到了2018，对于新的一年，你有什么想法",
          desc: "new2018",
          path: "/new2018?news2_01"
        },
        {
          title: "对于过去的2017，有几多感悟",
          desc: "past2017",
          path: "/past2017?news2_02"
        },
        {
          title: "对于这个新来的2018，你对自己的职业生涯是不是有了更深的认识呢？",
          desc: "2018",
          path: "/idea_of_carceer?news2_03"
        },
        {
          title: "经历了这么许久的一个人的生活，是否应该彻底脱离曾经的阴影，寻求一个新的生活了呢？",
          desc: "outSignal",
          path: "/outSignal?news2_04"
        },
        {
          title: "对于曾经的美好，适时的画上一个完整的句号，是对于以后生活的一种负责的态度",
          desc: "outOfPast",
          path: "/outOfPast?news2_05"
        },
        {
          title: "几年折腾，稚气、冲动都已经不再适合我们了~",
          desc: "adultness",
          path: "/adultness?news2_06"
        }
      ],
      star1Show: true,
      star2Show: true
    };
  },
  methods: {
    news1Star() {
      this.star1Show = !this.star1Show;
    },
    news2Star() {
      this.star2Show = !this.star2Show;
    },
    submit() {
      this.$message("目前没事干");
    }
  }
};
</script>


<style scoped>
.news {
  width: 100%;
  height: 100%;
}
.title {
  padding: 0 0 20px 0;
}
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.box-card {
  float: left;
  width: 45%;
  margin-left: 4%;
}
.cardTitle {
  color: deepskyblue;
}
</style>
