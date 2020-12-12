<template>
  <div id="list">
    <div class="banner-active">
      <div
        class="banner-area d-flex align-items-center bg_cover"
        style="background-image: url(assets/images/banner-bg-5.png);"
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="banner-content text-center">
                <h1 data-animation="fadeInUp" data-delay="0.5s" class="title">
                  All list
                </h1>
                <a
                  data-animation="fadeInUp"
                  data-delay="1.2s"
                  class="main-btn"
                  @click="folder"
                  >Show all</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="banner-shape">
          <img src="assets/images/banner-shape.png" alt="shape" />
        </div>
      </div>
    </div>


    <div class="row">
      <div class="col-lg-12">
        <div class="wrapper-1">
          <div class="cols paddingFor">biotechniques
            <el-collapse
              v-model="activeNames"
              @change="handleChange"
              style="width: 100%"
              align="middle"
            >
              <el-collapse-item title="Click here" name="1" align="middle">
                <div>
                  <h4>If the domain list is not loaded, you can wait for a while until the domain list appears</h4>
                </div>
              </el-collapse-item>
              </el-collapse>
          </div>
        </div>
      </div>
    </div>
    <div id="table" :class="navBarFixed == true ? 'navBarWrap' : ''">
      <div v-if="isshow">
        <br />

        <section class="product-area">
          <div class="container">
            <el-table
              :data="
                userList.slice(
                  (currentPage - 1) * pagesize,
                  currentPage * pagesize
                )
              "
              :default-sort="{ prop: 'cla', order: 'descending' }"
              border
            >
              <el-table-column type="index" align="center"> </el-table-column>
              <el-table-column label="type" prop="cla" align="center">
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
                <template v-slot="uesrList">
                  <a
                    :href="uesrList.row.url"
                    target="_blank"
                    class="buttonText"
                    >{{ uesrList.row.url }}</a
                  >
                </template>
              </el-table-column>
              <!-- <el-table-column label="地址" prop="address" width="200">  
            </el-table-column>   -->
            </el-table>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[20, 50, 100, 33454]"
              :page-size="pagesize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="userList.length"
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
      currentPage: 1, //初始页
      pagesize: 20, //  每页的数据
      userList: [],
      search: "",
      isshow: false,
    };
  },
  created() {
    axios
      .get("3w_100.json")

      .then((data) => {
        //console.log(data.data);
      });
    this.handleUserList();
    // this.handleUserList();
  },
  methods: {
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function(size) {
      this.pagesize = size;
      console.log(this.pagesize); //每页下拉显示数据
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
      console.log(this.currentPage); //点击第几页
    },
    handleUserList() {
      axios.get("3w_100.json").then((data) => {
        //这是从本地请求的数据接口，
        this.userList = data.data;
        console.log(this.userList);
      });
    },
    folder() {
      this.isshow = !this.isshow;
      if (this.isshow) {
        this.$notify({
          title: "Success",
          message: "All of our domain list at the below",
          type: "success",
          offset: 150,
        });
        //this.$message.success("all of our domain list at the below");
        var anchor = document.getElementById("table");
        // chrome
        document.body.scrollTop = anchor.offsetTop;
        // firefox
        document.documentElement.scrollTop = anchor.offsetTop;
        // safari
        window.pageYOffset = anchor.offsetTop;
      } else {
        this.$notify.error({
          title: "Wrong",
          message: "All of our domain list has been folded",
          offset: 150,
        });
        //this.$message.warning("all of our domain list has been folder");
      }
    },
  },
};
</script>
<style lang="less">
li {
  display: inline-block;
}
.navBarWrap {
  position: fixed;
  top: 0;
  z-index: 999;
}
</style>
