<template>
    <div class="percent">
        <el-row :gutter="30" class="rowLine">
            <el-col :span="11" class="goodsLine">
                <h2>商品年销售折线图</h2>
                <el-form ref="form" :model="saleForm" label-width="80px">
                    <el-form-item label="搜索时间" style="float:left">
                        <template>
                            <el-select v-model="saleForm.years.name" placeholder="2011年" @change="handleGoodsChange">
                                <el-option
                                v-for="item in saleForm.years"
                                :key="item.value"
                                :label="item.name"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </template>
                    </el-form-item>
                    <!-- <el-form-item style="float:left">
                        <el-button type="primary" icon="el-icon-search">搜索</el-button>
                    </el-form-item> -->
                    <div class="goodsLineEchart" ref="goodsChart" style="float:left;width:100%"></div>
                </el-form>
            </el-col>
            <el-col :span="11" class="personLine" :offset="2">
                <h2>优秀员工年销售折线图</h2>
                <el-form ref="form" :model="saleForm" label-width="80px">
                    <el-form-item label="商品名称" style="float:left">
                        <template>
                            <el-select v-model="saleForm.people.name" placeholder="刘之冰" @change="handlePersonChange">
                                <el-option 
                                v-for="item in saleForm.people"
                                :key="item.id" 
                                :value="item.name" 
                                :label="item.name"></el-option>
                            </el-select>
                        </template>
                    </el-form-item>
                    <!-- <el-form-item style="float:left">
                        <el-button type="primary" icon="el-icon-search">搜索</el-button>
                    </el-form-item> -->
                    <div class="personLineEchart" ref="personChart" style="float:left;width:100%"></div>
                </el-form>
            </el-col>
        </el-row>
        <el-row :gutter="30" class="rowLine">
          <el-col :span="11" class="goodsPie">
              <h2>商品销售占比</h2>
              <el-form :model="saleForm" label-width="80px">
                  <el-form-item label="搜索时间" style="float:left;">
                      <template>
                        <el-select v-model="saleForm.years.name" placeholder="2011年" @change="handlePercentChange">
                            <el-option
                            v-for="item in saleForm.years"
                            :key="item.value"
                            :label="item.name"
                            :value="item.value">
                            </el-option>
                        </el-select>
                      </template>
                  </el-form-item>
                  <div class="goodsPieEchart" ref="goodsPieChart" style="float:left;width:100%"></div>
              </el-form>
          </el-col>
          <el-col :span="11" class="goodsPie" :offset="2">
              <h2>全国销量分布</h2>
              <el-form :model="saleForm" label-width="80px">
                  <el-form-item label="搜索时间" style="float:left;">
                      <template>
                        <el-select v-model="saleForm.years.name" placeholder="2011年" @change="handleAreaLoad">
                            <el-option
                            v-for="item in saleForm.years"
                            :key="item.value"
                            :label="item.name"
                            :value="item.value">
                            </el-option>
                        </el-select>
                      </template>
                  </el-form-item>
                  <div class="regionalLoaded" ref="regionalMap" style="float:left;width:100%"></div>
              </el-form>
          </el-col>
        </el-row>
    </div>
</template>

<script>
import echart from "echarts";
import "../../../node_modules/echarts/map/js/china";

export default {
  data() {
    return {
      saleForm: {
        years: [
          { name: "2013年", value: "2013" },
          { name: "2014年", value: "2014" },
          { name: "2015年", value: "2015" },
          { name: "2016年", value: "2016" },
          { name: "2017年", value: "2017" }
        ],
        people: [
          { name: "刘之冰", id: "1301" },
          { name: "徐志聪", id: "1302" },
          { name: "唐舞麟", id: "1303" },
          { name: "唐舞桐", id: "1304" },
          { name: "霍雨皓", id: "1305" }
        ]
      },
      myChart: {},
      myGoodsOpt: {},
      myPersonOpt: {},
      myPieOpt: {},
      myMapLoadOpt: {}
    };
  },
  computed: {},
  created() {
    this.goodsDataFetch("../../../echartData/goodsLineData2013.json");
    this.personDataFetch("../../../echartData/personLineData_zhibing.json");
    this.piePercentDataFetch("../../../echartData/goodsPieData2013.json");
    this.regionalMapDataFetch("../../../echartData/regionMap.json");
  },
  methods: {
    // echarts
    initChart(dom, type) {
      let source = this.getSource(type);
      this.myChart = echart.init(dom);
      this.myChart.setOption(source);
    },
    // select change
    handleGoodsChange(val) {
      let url = "";
      switch (val) {
        case "2013":
          url = "../../../echartData/goodsLineData2013.json";
          break;
        case "2014":
          url = "../../../echartData/goodsLineData2014.json";
          break;
        case "2015":
          url = "../../../echartData/goodsLineData2015.json";
          break;
        case "2016":
          url = "../../../echartData/goodsLineData2016.json";
          break;
        case "2017":
          url = "../../../echartData/goodsLineData2017.json";
          break;
        default:
          url = "../../../echartData/goodsLineData2011.json";
          break;
      }
      this.goodsDataFetch(url);
    },
    handlePersonChange(val) {
      let url = "";
      switch (val) {
        case "刘之冰":
          url = "../../../echartData/personLineData_zhibing.json";
          break;
        case "徐志聪":
          url = "../../../echartData/personLineData_zhicong.json";
          break;
        case "唐舞麟":
          url = "../../../echartData/personLineData_wulin.json";
          break;
        case "唐舞桐":
          url = "../../../echartData/personLineData_wutong.json";
          break;
        case "霍雨皓":
          url = "../../../echartData/personLineData_yuhao.json";
          break;
        default:
          url = "../../../echartData/goodsLineData2011.json";
          break;
      }
      this.personDataFetch(url);
    },
    handlePercentChange(val) {
      let url = "";
      switch (val) {
        case "2013":
          url = "../../../echartData/goodsPieData2013.json";
          break;
        case "2014":
          url = "../../../echartData/goodsPieData2014.json";
          break;
        case "2015":
          url = "../../../echartData/goodsPieData2015.json";
          break;
        case "2016":
          url = "../../../echartData/goodsPieData2016.json";
          break;
        case "2017":
          url = "../../../echartData/goodsPieData2017.json";
          break;
        default:
          url = "../../../echartData/goodsPieData2013.json";
          break;
      }
      this.piePercentDataFetch(url);
    },
    handleAreaLoad(val) {
      let oldYear = "";
      if (oldYear && val == oldYear) {
        return false;
      } else {
        oldYear = val;
        this.regionalMapDataFetch("../../../echartData/regionMap.json");
      }
    },
    // axios request
    goodsDataFetch(url) {
      this.$axios
        .get(url)
        .then(res => {
          if (res.data.code == 200) {
            this.myGoodsOpt = res.data.data;
            this.initChart(this.$refs.goodsChart, "goods");
          } else {
            this.$message("数据出错了");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    personDataFetch(url) {
      this.$axios
        .get(url)
        .then(res => {
          if (res.data.code == 200) {
            this.myPersonOpt = res.data.data;
            this.initChart(this.$refs.personChart, "person");
          } else {
            this.$message("数据出错了");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    piePercentDataFetch(url) {
      this.$axios
        .get(url)
        .then(res => {
          if (res.data.code == 200) {
            this.myPieOpt = res.data.data;
            this.initChart(this.$refs.goodsPieChart, "goodsPie");
          } else {
            this.$message("数据出错了");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    regionalMapDataFetch(url) {
      this.$axios
        .get(url)
        .then(res => {
          if (res.data.code == 200) {
            this.myMapLoadOpt = res.data.data;
            this.myMapLoadOpt.series.map(item => {
              item.data.map(item => {
                item.value = Math.round(Math.random() * 3000);
              });
            });
            this.initChart(this.$refs.regionalMap, "regionalMap");
          } else {
            this.$message("数据出错了");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // get source-data
    getSource(type) {
      switch (type) {
        case "goods":
          return this.myGoodsOpt;
          break;
        case "person":
          return this.myPersonOpt;
          break;
        case "goodsPie":
          return this.myPieOpt;
          break;
        case "regionalMap":
          return this.myMapLoadOpt;
          break;
      }
    }
  }
};
</script>

<style scope>
.percent {
  width: 100%;
  height: 100%;
}
.rowLine {
  padding-bottom: 20px;
}
.goodsLine,
.personLine,
.goodsPie {
  background: #eee;
}
.goodsLine h2,
.personLine h2,
.goodsPie h2,
.regionalLoaded h2 {
  padding: 10px;
}
.goodsLineEchart,
.goodsPieEchart,
.personLineEchart,
.regionalLoaded {
  height: 400px;
}
</style>
