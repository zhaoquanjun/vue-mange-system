<template>
    <div class="news">
        <h2 class="title">近期新事件</h2>
        <el-card class="box-card">
            <div slot="header">
                <span>追剧小美好，就是这么爱你</span>
                <el-button style="float:right;padding:3px" type="text" @click="submit">操作按钮</el-button>
                <i class="el-icon-star-off" v-if="startShow" @click="star" style="display:block;float:right;padding-right:20px;padding-top:2px"></i>
                <i class="el-icon-star-on" v-else  @click="star" style="display:block;float:right;padding-right:20px;padding-top:2px"></i>
                </div>
            <div class="text item" v-for="item in news1" :key="item.desc">
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
          title: "月底之际，公司组织廉价内购为2017画上圆满句号",
          desc: "内购",
          path: "/news1_01_inner_buy"
        }
      ],
      startShow: true
    };
  },
  methods: {
    star() {
      this.startShow = !this.startShow;
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
  width: 45%;
}
</style>
