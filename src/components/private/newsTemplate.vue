<template>
    <div class="newsTemplate">
        <div class="newsDetail" v-for="item in news1List" :key="item.title">
            <h1 class="title">{{item.title}}</h1>
            <small class="subDesc">{{item.subDesc}}</small>
            <div class="newsContent">
                <div class="contentItem" v-for="content in item.content" :key="content.id">
                    <h3 class="crossHead">{{content.crossHead}}</h3>
                    <div class="imgBox" v-if="content.img">
                        <img :src="content.img" alt="">
                        <p class="tip">图注：{{content.tip}}</p>
                    </div>
                    <div class="parh">{{content.p}}</div>
                </div>
            </div>         
        </div>
        
    </div>
</template>

<script>
export default {
  data() {
    return {
      news1List: []
    };
  },
  created() {
    this.getQueryUrl();
  },
  methods: {
    getQueryUrl() {
      let localHref = window.location.href;
      let urlQuery = localHref.slice(localHref.lastIndexOf("?") + 1);
      let url = "../../../newsData/" + urlQuery + ".json";
      this.getNewsData(url);
    },
    getNewsData(url) {
      this.$axios
        .get(url)
        .then(res => {
          if (res.data.code == 200) {
            this.news1List = res.data.data;
          } else {
            this.$message("数据出错了");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>


<style scoped>
.newsDetail {
  padding: 20px 50px;
}
.title {
  text-align: center;
}
.crossHead {
  padding: 20px 0 0 0;
  text-align: left;
}
.subDesc {
  display: inline-block;
  width: 100%;
  padding: 5px 0;
  text-align: center;
}
.contentItem .parh {
  /* float: left; */
  font-size: 15px;
  text-indent: 35px;
  padding-top: 5px;
  line-height: 25px;
}
.imgBox {
  width: 50%;
  padding: 15px 1% 15px 0;
  float: left;
}
.tip {
  font-size: 12px;
  text-align: center;
}
img {
  display: inline-block;
  width: 100%;
  padding-right: 2%;
}
</style>
