<template>
  <div>
    <!-- <div class="shopping-cart-wrapper">
      <div class="shopping-cart-canvas">
        <div class="shopping_cart">
          <div class="shopping_cart-top-bar d-flex justify-content-between">
            <h6>Style transfer</h6>
            <button class="shopping-cart-close">
              <i class="ion ion-md-add"></i>
            </button>
          </div>
          <div class="shopping_cart-list-items mt-30">
            Search the domain name OR domain class OR the domain's function
          </div>
          <div class="shopping_cart-btn"></div>
        </div>
      </div>
      <div class="overlay"></div>
    </div> -->

    <section
      class="page-title-area d-flex align-items-center bg_cover"
      style="background-image: url(img/productlist.png)"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-title-item text-center">
              <h3 class="title">Search</h3>
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

    <br />
    <br />

    <!-- <el-input
      v-model="tableDataName"
      placeholder="please input the domain id such as:101mA00"
      style="width:60%"
    ></el-input> -->

    <section class="contact-touch-area pt-85 pb-90" v-if="clashow">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-3">
            <div class="contact-touch-thumb d-none d-lg-block">
              <img src="assets/images/search.png" alt="contact" />
            </div>
          </div>
          <div class="col-lg-9">
            <div class="contact-touch-part">
              <div class="row">
                <div class="col-lg-12">
                  <div class="secton-title text-center">
                    <h5 class="title">Search</h5>
                    <p>Search the list of <b>Domain Type</b></p>
                    <p>Please input the class <b>between 00 and 99</b></p>
                  </div>
                </div>
              </div>
              <form id="contact-form">
                <div>
                  <div class="col-lg-12">
                    <div class="input-box mt-35">
                      <input
                        v-model="tableDataName"
                        type="text"
                        placeholder="please input the domain cla such as:01"
                      />
                    </div>
                  </div>
                  <br />
                  <br />
                  <br />
                  <el-button type="primary" @click="doFiltercla"
                    >Search</el-button
                  >
                  <el-button type="primary" @click="switchd(1)"
                    >Switch name</el-button
                  >
                  <el-button type="primary" @click="switchd(3)"
                    >Switch function</el-button
                  >
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="contact-touch-area pt-85 pb-90" v-if="nameshow">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-3">
            <div class="contact-touch-thumb d-none d-lg-block">
              <img src="assets/images/search.png" alt="contact" />
            </div>
          </div>
          <div class="col-lg-9">
            <div class="contact-touch-part">
              <div class="row">
                <div class="col-lg-12">
                  <div class="secton-title text-center">
                    <h5 class="title">Search</h5>
                    <p>Search the list of <b>Domain Name</b></p>
                  </div>
                </div>
              </div>
              <form id="contact-form">
                <div>
                  <div class="col-lg-12">
                    <div class="input-box mt-35">
                      <input
                        v-model="tableDataName"
                        type="text"
                        placeholder="please input the domain id such as:101mA00"
                        @keyup.enter="doFilterdomain"
                        οnkeypress="if(event.keyCode==13) return false;"
                      />
                    </div>
                  </div>
                  <br />
                  <br />
                  <br />
                  <el-button type="primary" @click="doFilterdomain"
                    >Search</el-button
                  >
                  <el-button type="primary" @click="switchd(2)"
                    >Switch class</el-button
                  >
                  <el-button type="primary" @click="switchd(3)"
                    >Switch function</el-button
                  >
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="contact-touch-area pt-85 pb-90" v-if="functionshow">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-3">
            <div class="contact-touch-thumb d-none d-lg-block">
              <img src="assets/images/search.png" alt="contact" />
            </div>
          </div>
          <div class="col-lg-9">
            <div class="contact-touch-part">
              <div class="row">
                <div class="col-lg-12">
                  <div class="secton-title text-center">
                    <h5 class="title">Search</h5>
                    <p>Search the list of <b>Domain Function</b></p>
                  </div>
                </div>
              </div>
              <form id="contact-form">
                <div>
                  <div class="col-lg-12">
                    <div class="input-box mt-35">
                      <input
                        v-model="tableFunctionName"
                        type="text"
                        placeholder="please input the domain function such as:oxidoreductase activity"
                        @keyup.enter="doFilterdomain"
                        οnkeypress="if(event.keyCode==13) return false;"
                      />
                    </div>
                  </div>
                  <br />
                  <br />
                  <br />
                  <el-button type="primary" @click="doFilterfunction"
                    >Search</el-button
                  >
                  <el-button type="primary" @click="switchd(1)"
                    >Switch name</el-button
                  >
                  <el-button type="primary" @click="switchd(2)"
                    >Switch class</el-button
                  >
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div v-if="isshow">
      <div>
        <section class="product-area">
          <div class="container">
            <!-- <el-button type="primary" @click="doFilter">Search</el-button> -->
            <!-- <el-button type="primary" @click="openData">展示数据</el-button> -->
            <el-table :data="tableDataEnd" border style="width: 100%">
              <el-table-column label="Class" prop="cla" align="center">
              </el-table-column>
              <el-table-column label="domain" prop="domain" align="center">
                <template v-slot="tableDataEnd">
                  <a
                    :href="tableDataEnd.row.domain"
                    target="_blank"
                    class="buttonText"
                    >{{ tableDataEnd.row.domain }}</a
                  >
                </template>
              </el-table-column>
              <el-table-column label="URL" align="center">
                <template v-slot="tableDataEnd">
                  <a
                    :href="tableDataEnd.row.url"
                    target="_blank"
                    class="buttonText"
                    >{{ tableDataEnd.row.url }}</a
                  >
                </template>
              </el-table-column>
            </el-table>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[20, 30, 50, 300]"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="totalItems"
            >
            </el-pagination>
          </div>
          <!-- container -->
        </section>
      </div>
    </div>

    <div v-if="isshowfunction">
      <div>
        <section class="product-area">
          <div class="container">
            <!-- <el-button type="primary" @click="doFilter">Search</el-button> -->
            <!-- <el-button type="primary" @click="openData">展示数据</el-button> -->
            <el-table
              :data="tableFunctionEnd"
              border
              style="width: 100%"
              align="middle"
            >
              <el-table-column label="Class" prop="domainId" align="center">
              </el-table-column>
              <el-table-column
                label="domainName"
                prop="domainName"
                align="center"
              >
                <template v-slot="tableFunctionEnd">
                  <a
                    :href="tableFunctionEnd.row.domainName"
                    target="_blank"
                    class="buttonText"
                    >{{ tableFunctionEnd.row.domainName }}</a
                  >
                </template>
              </el-table-column>
              <el-table-column
                label="domainFunction"
                prop="domainFunction"
                align="center"
              >
                <!-- <template v-slot="tableFunctionEnd">
              <a
                :href="tableFunctionEnd.row.url"
                target="_blank"
                class="buttonText"
                >{{ tableFunctionEnd.row.url }}</a
              >
            </template> -->
              </el-table-column>
            </el-table>
            <el-pagination
              @size-change="handleSizeFunctionChange"
              @current-change="handleCurrentFunctionChange"
              :current-page="currentFunctionPage"
              :page-sizes="[20, 30, 50, 300]"
              :page-size="pageFunctionSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="totalFunctionItems"
            >
            </el-pagination>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      tableDataBegin: [],
      tableDataName: "",
      tableDataEnd: [],

      tableFunctionBegin: [],
      tableFunctionName: "",
      tableFunctionEnd: [],
      currentFunctionPage: 0,
      pageFunctionSize: 20,
      totalFunctionItems: 0,
      filterTableFunctionEnd: [],

      currentPage: 0,
      pageSize: 20,
      totalItems: 0,
      filterTableDataEnd: [],
      isshowfunction: false,
      flag: false,
      isshow: false,
      clashow: true,
      nameshow: false,
      functionshow: false,
    };
  },
  created() {
    axios
      .get("3w_100.json")

      .then((data) => {
        console.log(data);
        this.tableDataBegin = data.data;
        console.log(this.tableDataBegin);
        console.log(this.tableDataBegin.length);
      });
    axios.get("/static/domain1.json").then((data) => {
      console.log(data);
      this.tableFunctionBegin = data.data;
      console.log(this.tableFunctionBegin);
      console.log(this.tableFunctionBegin.length);
    });

    console.log(this.tableFunctionBegin.length);
    this.totalFunctionItems = this.tableFunctionBegin.length;
    console.log(this.tableFunctionBegin.length);
    console.log(this.totalFunctionItems);
    if (this.totalFunctionItems > this.pageFunctionSize) {
      for (let index = 0; index < this.pageFunctionSize; index++) {
        this.tableFunctionEnd.push(this.tableFunctionBegin[index]);
      }
    } else {
      this.tableFunctionEnd = this.tableFunctionBegin;
    }

    console.log(this.tableDataBegin.length);
    this.totalItems = this.tableDataBegin.length;
    console.log(this.tableDataBegin.length);
    console.log(this.totalItems);
    if (this.totalItems > this.pageSize) {
      for (let index = 0; index < this.pageSize; index++) {
        this.tableDataEnd.push(this.tableDataBegin[index]);
      }
    } else {
      this.tableDataEnd = this.tableDataBegin;
    }
  },
  methods: {
    //前端搜索功能需要区分是否检索,因为对应的字段的索引不同
    //用两个变量接收currentChangePage函数的参数
    switchd(id) {
      if (id == 1) {
        this.nameshow = true;
        this.clashow = false;
        this.functionshow = false;
        this.isshow = false;
        this.isshowfunction = false;
      } else if (id == 2) {
        this.nameshow = false;
        this.clashow = true;
        this.functionshow = false;
        this.isshow = false;
        this.isshowfunction = false;
      } else if (id == 3) {
        this.nameshow = false;
        this.clashow = false;
        this.functionshow = true;
        this.isshow = false;
        this.isshowfunction = false;
      }
      //this.clashow = !this.clashow;
    },
    doFilterdomain() {
      if (this.tableDataName == "") {
        //this.$message.warning("The query condition cannot be empty！");
        this.$notify.error({
          title: "Wrong",
          message: "You should input the domian name you want",
          offset: 150,
        });
        this.isshow = false;
        //return;
      } else {
        //this.$message.success("the domain name you searched at the bellow");
        this.$notify({
          title: "Success",
          message: "The domain name you search at the below",
          type: "success",
          offset: 150,
        });
        this.isshow = true;
      }
      this.tableDataEnd = [];
      //将数据置空
      this.filterTableDataEnd = [];
      this.tableDataBegin.forEach((value, index) => {
        if (value.domain) {
          if (value.domain.indexOf(this.tableDataName) >= 0) {
            this.filterTableDataEnd.push(value);
          }
        }
      });
      //页面数据改变重新统计数据数量和当前页
      this.currentPage = 1;
      this.totalItems = this.filterTableDataEnd.length;
      //渲染表格,根据值
      this.currentChangePage(this.filterTableDataEnd);
      //页面初始化数据需要判断是否检索过
      this.flag = true;
    },
    doFiltercla() {
      if (this.tableDataName == "") {
        //this.$message.warning("The query condition cannot be empty！");
        this.$notify.error({
          title: "Wrong",
          message: "You should input the domian class you want",
          offset: 150,
        });
        this.isshow = false;
        //return;
      } else {
        //this.$message.success("the domain cla you searched at the bellow");
        this.$notify({
          title: "Success",
          message: "The domain class you search at the below",
          type: "success",
          offset: 150,
        });
        this.isshow = true;
      }
      this.tableDataEnd = [];
      //将数据置空
      this.filterTableDataEnd = [];
      this.tableDataBegin.forEach((value, index) => {
        if (value.cla) {
          if (value.cla.indexOf(this.tableDataName) >= 0) {
            this.filterTableDataEnd.push(value);
          }
        }
      });
      //页面数据改变重新统计数据数量和当前页
      this.currentPage = 1;
      this.totalItems = this.filterTableDataEnd.length;
      //渲染表格,根据值
      this.currentChangePage(this.filterTableDataEnd);
      //页面初始化数据需要判断是否检索过
      this.flag = true;
    },
    doFilterfunction() {
      if (this.tableFunctionName == "") {
        //this.$message.warning("The query condition cannot be empty！");
        this.$notify.error({
          title: "Wrong",
          message: "You should input the domain function you want",
          offset: 150,
        });
        this.isshowfunction = false;
        //return;
      } else {
        //this.$message.success("the domain cla you searched at the bellow");
        this.$notify({
          title: "Success",
          message: "The domain function you search at the below",
          type: "success",
          offset: 150,
        });
        this.isshowfunction = true;
      }
      this.tableFunctionEnd = [];
      //将数据置空
      this.filterTableFunctionEnd = [];
      this.tableFunctionBegin.forEach((value, index) => {
        if (value.domainFunction) {
          if (value.domainFunction.indexOf(this.tableFunctionName) >= 0) {
            this.filterTableFunctionEnd.push(value);
          }
        }
      });

      //页面数据改变重新统计数据数量和当前页
      this.currentFunctionPage = 1;
      this.totalFunctionItems = this.filterTableFunctionEnd.length;
      //渲染表格,根据值
      this.currentChangeFunctionPage(this.filterTableFunctionEnd);
      //页面初始化数据需要判断是否检索过
      this.flag = true;
    },
    openData() {},
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.handleCurrentChange(1);
    },

    handleSizeFunctionChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.handleCurrentFunctionChange(1);
    },

    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      //需要判断是否检索
      if (!this.flag) {
        this.currentChangePage(this.tableDataBegin);
        console.log(this.tableDataEnd);
      } else {
        this.currentChangePage(this.filterTableDataEnd);
        console.log(this.tableDataEnd);
      }
    }, //组件自带监控当前页码

    handleCurrentFunctionChange(val) {
      console.log(`当前页: ${val}`);
      this.currentFunctionPage = val;
      //需要判断是否检索
      if (!this.flag) {
        this.currentChangeFunctionPage(this.tableFunctionBegin);
        console.log(this.tableFunctionEnd);
      } else {
        this.currentChangeFunctionPage(this.filterTableFunctionEnd);
        console.log(this.tableFunctionEnd);
      }
    }, //组件自带监控当前页码

    currentChangePage(list) {
      let from = (this.currentPage - 1) * this.pageSize;
      let to = this.currentPage * this.pageSize;
      this.tableDataEnd = [];
      for (; from < to; from++) {
        if (list[from]) {
          this.tableDataEnd.push(list[from]);
        }
      }
    },

    currentChangeFunctionPage(list) {
      let from = (this.currentFunctionPage - 1) * this.pageFunctionSize;
      let to = this.currentFunctionPage * this.pageFunctionSize;
      this.tableFunctionEnd = [];
      for (; from < to; from++) {
        if (list[from]) {
          this.tableFunctionEnd.push(list[from]);
        }
      }
    },
  },
};
</script>
