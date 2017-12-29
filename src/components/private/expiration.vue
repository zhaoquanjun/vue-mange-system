<template>
    <div class="contentForm">
        <el-form  ref="searchForm" :model="searchForm" :rules="rules" class="searchForm" label-width="80px">
            <el-form-item label="编码" prop="code" class="form-item" style="width:48%">
                <el-input v-model="searchForm.goodsCode" size="small"></el-input>
            </el-form-item>
            <el-form-item label="名称" prop="name" class="form-item">
                <el-input v-model="searchForm.goodsName" size="small"></el-input>
            </el-form-item>
            <el-form-item label="保质时间" required class="form-item">
                <el-col :span="11">
                    <el-form-item prop="dateStart-b">
                        <el-date-picker size="small" type="date" placeholder="选择日期" v-model="searchForm.expireDateStart"
                        style="width:100%"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col class="line" :span="1">-</el-col>
                <el-col :span="11">
                    <el-form-item prop="dateEnd">
                        <el-date-picker size="small" type="date" placeholder="选择日期" v-model="searchForm.expireDateEnd" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item label="预警时间" required class="form-item">
                <el-col :span="11">
                    <el-form-item prop="dateStart-y">
                        <el-date-picker size="small" type="date" placeholder="选择日期" v-model="searchForm.warningDateStart"
                        style="width:100%"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col class="line" :span="1">-</el-col>
                <el-col :span="11">
                    <el-form-item prop="dateEnd">
                        <el-date-picker size="small" type="date" placeholder="选择日期" v-model="searchForm.warningDateEnd" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item  class="form-item" style="width: 30%">
                <el-checkbox-group v-model="searchForm.type">
                    <el-checkbox label="已过期" name="type"></el-checkbox>
                    <el-checkbox label="已预警" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item class="form-item" style="width: 30%">
                <el-button type="primary" @click="formSubmit(searchForm)">查询</el-button>
                <el-button type="warning" @click="formReSet(searchForm)">重置</el-button>
            </el-form-item>
            <el-form-item class="form-item" style="width:20%">
                <el-upload
                    class="upload-demo"
                    action=""
                    :on-remove="handleRemove"
                    :before-upload="handleUpload"
                    :file-list="fileList">
                    <el-button  type="primary">点击上传</el-button>
                </el-upload>
            </el-form-item>
            <el-form-item class="form-item" style="width: 20%">
                <el-button type="primary" @click="formExport">导出</el-button>
            </el-form-item>
        </el-form>
        <template>
            <el-table height="550" :data="tableData" border style="width:100%" :row-class-name="tableRowClassName">
                <el-table-column type="expand">
                    <template slot-scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item label="商品编码">
                                <span>{{ props.row.code }}</span>
                            </el-form-item>
                            <el-form-item label="商品名称">
                                <span>{{ props.row.name }}</span>
                            </el-form-item>
                            <el-form-item label="仓库名称">
                                <span>{{ props.row.warehousename }}</span>
                            </el-form-item>
                            <el-form-item label="商品库存">
                                <span>{{ props.row.stocknum }}</span>
                            </el-form-item>
                        </el-form>
                    </template>
                </el-table-column>
                <el-table-column align="center" prop="code" label="商品编码"></el-table-column>
                <el-table-column align="center" prop="name" label="商品名称"></el-table-column>
                <el-table-column align="center" prop="spec" label="商品规格"></el-table-column>
                <el-table-column align="center" prop="stocknum" label="库存数量"></el-table-column>
                <el-table-column align="center" prop="expiredaynum" label="保质天数"></el-table-column>
                <el-table-column align="center" prop="remainExpireDays" label="保质剩余天数"></el-table-column>
                <el-table-column align="center" prop="expiredate" label="保质日期"></el-table-column>
                <el-table-column align="center" prop="warningdaynum" label="预警天数"></el-table-column>
                <el-table-column align="center" prop="warningdate" label="预警日期"></el-table-column>
                <el-table-column align="center" prop="productiondate" label="生产日期"></el-table-column>
                <!-- <el-table-column align="center" prop="operation" label="功能">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text"></el-button>
                    </template>
                </el-table-column> -->
            </el-table>
            <el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pagination.currentPage"
                layout="total, prev, pager, next, jumper"
                :total="pagination.total">
            </el-pagination>
        </template>
    </div>
</template>


<script>
import moment from "moment";
// import api from '../../../api/index'

export default {
  data() {
    return {
      searchForm: {
        goodsCode: "",
        goodsName: "",
        expireDateStart: "",
        expireDateEnd: "",
        warningDateStart: "",
        warningDateEnd: "",
        type: []
      },
      rules: {
        code: [{ message: "请输入商品编码", trigger: "blur", type: "string" }],
        name: [{ message: "请输入商品名称", trigger: "blur" }],
        dateStart_b: [{ message: "请选择日期", type: "date", trigger: "change" }],
        dateEnd_b: [{ message: "请选择日期", type: "date", trigger: "change" }],
        dateStart_y: [{ message: "请选择日期", type: "date", trigger: "change" }],
        dateEnd_y: [{ message: "请选择日期", type: "date", trigger: "change" }],
        type: [{ message: "请选择类型", type: "array", trigger: "change" }]
      },
      fileList: [],
      tableData: [
        {
          code: "",
          name: "",
          spec: "",
          warehousename: "",
          stocknum: "",
          expiredate: null,
          expiredaynum: null,
          remainExpireDays: null,
          warningdate: null,
          warningdaynum: null,
          productiondate: null,
          type: ""
        }
      ],
      pagination: {
        total: 100,
        currentPage: 1
      }
    };
  },
  created() {
    // let data = this.getFormData();
    // data = data + 'pageNo=1'
    // api.GetTableData(data).then((res) => {
    //     console.log(res)
    //     if(res.data.code == 200){
    //         this.$message('数据请求成功')
    //         this.tableData = res.data.data;
    //     }else{
    //         this.$message('请求失败了')
    //     }
    // }).catch((err) => {
    //     console.log(err)
    // })

    this.$axios
      .get("../../../tableData/data1.json")
      .then(res => {
        if (res.data.code == 200) {
          this.$message("数据请求成功");
          this.tableData = res.data.data.data;
          this.pagination.total = res.data.data.totalCount;
        } else {
          this.$message("请求失败了");
        }
      })
      .catch(err => {
        //console.log(err)
      });
  },
  methods: {
    // 表单区
    handleRemove(file) {
      console.log(file);
    },
    handleUpload(file) {
      var reg = /\.(xlsx|xls|xlsm)$/;
      if (reg.test(file.name)) {
        this.$message("抱歉，暂时不支持导入");
        return false;
        this.$axios.post("../../../excelData.json", file).then(res => {});
      } else {
        this.$message("请上传xls/xlsx/xlsm格式得文件");
      }
    },
    formSubmit() {
      let data = getFormData();
      //axios.get('/expirationsystem.api.Data/exportExcel' + '?' + data)
    },
    formReSet() {
      this.searchForm.goodsCode = "";
      this.searchForm.goodsName = "";
      this.searchForm.expireDateStart = "";
      this.searchForm.expireDateEnd = "";
      this.searchForm.warningDateStart = "";
      this.searchForm.warningDateEnd = "";
      this.searchForm.type = [];
    },
    getFormData() {
      let data = "";
      this.searchForm.goodsCode
        ? (data += "goodsCode=" + this.searchForm.goodsCode + "&")
        : data;
      this.searchForm.goodsName
        ? (data += "goodsName=" + this.searchForm.goodsName + "&")
        : data;
      this.searchForm.expireDateStart
        ? (data +=
            "expireDateStart=" +
            moment(this.searchForm.expireDateStart).format("YYYY-MM-DD") +
            "&")
        : data;
      this.searchForm.expireDateEnd
        ? (data +=
            "expireDateEnd=" +
            moment(this.searchForm.expireDateEnd).format("YYYY-MM-DD") +
            "&")
        : data;
      this.searchForm.warningDateStart
        ? (data +=
            "warningDateStart=" +
            moment(this.searchForm.warningDateStart).format("YYYY-MM-DD") +
            "&")
        : data;
      this.searchForm.warningDateEnd
        ? (data +=
            "warningDateEnd=" +
            moment(this.searchForm.warningDateEnd).format("YYYY-MM-DD") +
            "&")
        : data;
      if (this.searchForm.type) {
        let type = this.searchForm.type;
        if (type.length > 1) {
          type.map(item => {
            item == "已过期" ? (data += "isExpire=1&") : data;
            item == "已预警" ? (data += "isWarning=1&") : data;
          });
        } else {
          type[0] == "已过期" ? (data += "isExpire=1&") : data;
          type[0] == "已预警" ? (data += "isWarning=1&") : data;
        }
      }
      return data;
    },
    formExport() {
      let data = this.getFormData();
      //this.$axios('../../../data.json')
    },
    // 表格区
    tableRowClassName({ row, rowIndex }) {
      switch (row.type) {
        case "warning":
          return "warning-row";
          break;
        case "danger":
          return "danger-row";
          break;
        default:
          return "";
          break;
      }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      // let updateData = getFormData();
      // updateData + 'pageNo=' + val
      var url = "";
      switch (val) {
        case 1:
          url = "../../../tableData/data1.json";
          break;
        case 2:
          url = "../../../tableData/data2.json";
          break;
        case 3:
          url = "../../../tableData/data3.json";
          break;
        case 4:
          url = "../../../tableData/data4.json";
          break;
        case 5:
          url = "../../../tableData/data5.json";
          break;
        case 6:
          url = "../../../tableData/data6.json";
          break;
        case 7:
          url = "../../../tableData/data7.json";
          break;
        case 8:
          url = "../../../tableData/data8.json";
          break;
        case 9:
          url = "../../../tableData/data9.json";
          break;
      }
      this.$axios
        .get(url)
        .then(res => {
          if (res.data.code == 200) {
            this.tableData = res.data.data.data;
          } else {
            this.$message("请求出错了");
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
.line {
  text-align: center;
}
.form-item {
  width: 50%;
  display: inline-block;
  float: left;
}
.el-upload--text {
  border-bottom: 0;
}
.el-pagination {
  float: right;
  padding: 30px 10px 0 0;
}
.el-table tr td {
  padding: 6px 0;
}
</style>


//  动态得样式不能在scope中
<style>
.el-table .warning-row {
  background: orange;
}
.el-table .danger-row {
  background: orangered;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>


