<template>
  <div id="profunction">
    <section
      class="page-title-area d-flex align-items-center bg_cover"
      style="background-image: url(img/productlist.png)"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-title-item text-center">
              <h3 class="title">{{ name }}</h3>
            </div>
            <!-- page title item -->
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- row -->
      <div class="page-title-shape">
        <img src="assets/images/banner-shape.png" alt="shape" />
      </div>
      <!-- page title shape -->
    </section>

    <!-- header -->

    <div class="jumbotron background-color:0xffffff">
      <h1>{{ name }}</h1>

      <!-- <el-button v-on:click="claisshow" v-if="!clashow"
        >Check the cla the domain belong</el-button
      > -->

      <div v-if="!clashow">
        <p>It belongs to the</p>
        <el-tag type="success">
          {{ this.pdbcla.cla }}
        </el-tag>
        <p>type domain</p>
      </div>

      <!-- <el-button v-on:click="fun1isshow" v-if="!fun1show"
        >View the features that the domain has a 10% chance of</el-button
      >

      <div v-if="fun1show">
        <el-container>
          <el-aside width="200px" color="#909399"
            ><h5>
              It has a 10% probability of having the following functions
            </h5></el-aside
          >
          <el-main
            ><div v-for="item1 in this.fun1.domainFunction" :key="item1">
              <div v-for="item in item1" :key="item">
                <p>*{{ item }}</p>
              </div>
            </div></el-main
          >
        </el-container>
      </div> -->

      <section class="product-area area-padding">
        <div class="container">
          <div class="row">
            <!-- <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="single-product mt-30">
                <img src="assets/images/product-1.jpg" alt="product" /><a
                  href="https://2020.igem.org/Team:UESTC-Software"
                  ><h6 class="title">View our wiki</h6></a
                ><span>Wiki</span>
              </div>
            </div> -->

            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span
                  >View the features that the domain has a 10% chance of</span
                >
                <el-button
                  style="float: right; padding: 3px 0"
                  type="text"
                  v-on:click="fun1isshow"
                  >Click for the detail</el-button
                >
              </div>

              <div
                v-for="item1 in this.fun1.domainFunction"
                :key="item1"
                class="text item"
              >
                <div v-for="item in item1" :key="item">
                  <el-tag type="success" v-if="fun1show">
                    {{ item }}
                  </el-tag>
                </div>
              </div>
            </el-card>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span
                  >View the features that the domain has a 20% chance of</span
                >
                <el-button
                  style="float: right; padding: 3px 0"
                  type="text"
                  v-on:click="fun2isshow"
                  >Click for the detail</el-button
                >
              </div>

              <div
                v-for="item1 in this.fun2.domainFunction"
                :key="item1"
                class="text item"
              >
                <div v-for="item in item1" :key="item">
                  <el-tag type="success" v-if="fun2show">
                    {{ item }}
                  </el-tag>
                </div>
              </div>
            </el-card>
          </div>
        </div>
      </section>

      <!-- <el-button v-on:click="fun2isshow" v-if="!fun2show"
        >View the features that the domain has a 20% chance of</el-button
      > -->

      <!-- 20% -->
      <!-- <div v-if="fun2show">
        <el-container>
          <el-aside width="200px"
            ><h5>
              It has a 20% probability of having the following functions
            </h5></el-aside
          >

          <el-main
            ><div v-for="item1 in this.fun2.domainFunction" :key="item1">
              <div v-for="item in item1" :key="item">
                <p>*{{ item }}</p>
              </div>
            </div></el-main
          >
        </el-container>
      </div> -->

      <p>
        <!-- <button class="btn btn-primary btn-lg" role="button">
          Check the function of the domain
        </button> -->
      </p>
    </div>

    <!-- PDB FILE -->
    <el-divider><i class="el-icon-view">the pdb model</i></el-divider>
    <div class="jumbotron">
      <el-button><a :href="pdbb">download the pdbmodel</a></el-button>
      <!-- <button class="main-btn" v-on:click="download">Download <i class="ion ion-ios-download"></i></button> -->
      <!-- <div
        style=" 
            height: 400px;
            width: 300px;
            position: relative;
            left:40%;
            
          "
        class="viewer_3Dmoljs"
        :data-pdb="name"
        data-backgroundcolor="0xffffff"
        data-style="cartoon:color=spectrum"
        data-surface="opacity:.7;color:white"
      >
      </div> -->

      <!-- PDB FILE -->

      <!-- brick model -->
      <el-divider><i class="el-icon-view">the brick model</i></el-divider>
      <!-- <el-button><a :href="Mobj">download the brickmodel Obj</a></el-button>
      <el-button><a :href="Mmtl">download the brickmodel mtl</a></el-button> -->
      <!-- <demo-block :vue-code="code" :html-code="htmlCode" class="brickmodel">
        <template slot="preview">
          <model-obj
            :backgroundAlpha="0"
            @on-load="onLoad"
            :src="Mobj"
            :mtl="Mmtl"
          ></model-obj>
          <div class="example-loading" v-show="loading"></div>
        </template>
      </demo-block> -->
      <img :src="Mimg" class="img-fluid" alt="Responsive image">
      <el-button><a :href="Mldr">download the brickmodel ldr</a></el-button>
      <!-- brick model -->
    </div>
    <!-- <div v-for="item in fun1d" :key="item">
      <h1>{{ item.length }}</h1>
    </div>
    <div>
      <el-button>
        aaaaaa
      </el-button>
    </div> -->
  </div>
</template>

<script>
function download() {
  let a = document.createElement("a");
  a.href =
    "http://104.168.165.152/static/models/obj/" +
    this.$route.params.name +
    ".obj";
  a.click();
}
import axios from "axios";
import ModelObj from "../components/3dModel/model-obj.vue";
import DemoBlock from "../components/demo-block.vue";
import 'jquery';
import * as $3Dmol from '3dmol/build/3Dmol-nojquery.js';
export default {
  name: "singlepdb",
  data() {
    return {
      name: this.$route.params.name,
      pdb: {},
      pdbb: "http://104.168.165.152/pdb/" + this.$route.params.name + ".pdb",
      Mobj:
        "http://104.168.165.152/static/models/obj/" +
        this.$route.params.name +
        ".obj",
      Mmtl:
        "http://104.168.165.152/static/models/obj/" +
        this.$route.params.name +
        ".mtl",
      Mldr:
        "http://104.168.165.152/static/models/ldr/" +
        this.$route.params.name +
        ".ldr",
      Mimg:
        "http://104.168.165.152/static/models/png/" +
        this.$route.params.name +
        ".png",
      loading: true,
      clashow: false,
      pdbfile: [],
      data: [],
      fun10: [],
      fun20: [],
      pdbcla: { cla: "Loading..." },
      k: "",
      t: "",
      fun1: "",
      fun2: "",
      fun1show: false,
      fun2show: false,
      brickshow: false,
    };
  },
  created() {
    console.log(this.$route.params.name);
    this.getpdb();
    this.pdb10();
    this.pdb20();
  },
  computed: {},
  methods: {
    claisshow: function() {
      this.clashow = !this.clashow;
    },
    fun1isshow: function() {
      this.fun1show = !this.fun1show;
    },
    fun2isshow: function() {
      this.fun2show = !this.fun2show;
    },
    brickisshow: function() {
      this.brickshow = !this.brickshow;
    },
    getpdb() {
      axios.get("3w_100.json").then((data) => {
        this.pdbfile = data.data;
        console.log(this.pdbfile);
        console.log(this.name);
        this.pdbcla = this.pdbfile.find((item) => {
          return item.domain == this.name;
        });
        this.fun1 = this.fun10.find((item) => {
          return item.domainId == this.pdbcla.cla;
        });
        this.fun2 = this.fun20.find((item) => {
          return item.domainId == this.pdbcla.cla;
        });
        console.log(this.fun2);
        //this.fun1d = this.fun1.domainFunction;
        console.log(this.pdbcla);
      });
    },
    pdb10() {
      axios.get("./static/domain1N.json").then((data) => {
        this.fun10 = data.data;
      });
    },
    pdb20() {
      axios.get("./static/domain2N.json").then((data) => {
        this.fun20 = data.data;
      });
    },
    download() {
      // 这里是获取到的图片base64编码,这里只是个例子哈，要自行编码图片替换这里才能测试看到效果
      let imgUrl = this.pdbb;
      // 如果浏览器支持msSaveOrOpenBlob方法（也就是使用IE浏览器的时候），那么调用该方法去下载图片
      if (window.navigator.msSaveOrOpenBlob) {
        const bstr = atob(imgUrl.split(",")[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        const blob = new Blob([u8arr]);
        window.navigator.msSaveOrOpenBlob(blob, "chart-download" + "." + "png");
      } else {
        // 这里就按照chrome等新版浏览器来处理
        const a = document.createElement("a");
        a.href = imgUrl;
        a.setAttribute("download", "chart-download");
        a.click();
      }
      $("#another-modal").modal("hide");
    },
  },
  components: {
    ModelObj,
    DemoBlock,
  },
};
</script>
<style scoped>
.jumbotron {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: rgb(255, 255, 255);
  border-radius: 0.3rem;
}
/* .container {
  height: 400px;
  width: 500px;
  position: relative;
  border: 5px solid #e8e7e3;
} */
.brickmodel {
  height: 400px;
  width: 300px;
  position: relative;
}
</style>
<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  /* background-color: #d3dce6; */
  background-color: rgb(198, 226, 255);
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  /* background-color: #e9eef3; */
  background-color: rgb(236, 245, 255);
  color: #333;
  text-align: center;
  line-height: 160px;
}

/* body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
} */

element.style {
  animation-delay: 0.5s;
}
.page-title-area .page-title-item .title {
  color: #fff;
  font-size: 138px;
  font-family: "Dancing Script", cursive;
  padding-bottom: 42px;
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
  width: 480px;
}
.row {
  display: -ms-flexbox;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

*,
::after,
::before {
  box-sizing: border-box;
}
</style>
