<template>
  <div id="list">
    <div class="banner-active">
      <div class="banner-shape">
        <img src="assets/images/banner-shape.png" alt="shape" />
      </div>
      <!-- </div> -->
      <!-- banner area -->
    </div>

    <br />
    <br />
    <br />


    <el-table
      :data="
        userList.slice((currentPage - 1) * pagesize, currentPage * pagesize)
      "
      :default-sort = "{prop: 'cla', order: 'descending'}"
      border
    >
      <el-table-column type="index" > </el-table-column>
      <el-table-column label="cla" prop="cla" sortable> </el-table-column>
      <el-table-column label="domain" prop="domain" >
      </el-table-column>
      <el-table-column label="URL" prop="url" >  
        <template v-slot="uesrList">
    <a :href="uesrList.url" target="_blank" class="buttonText">{{uesrList.url}}</a>
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
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      currentPage: 1, //初始页
      pagesize: 10, //  每页的数据
      userList: [],
    };
  },
  created() {
    axios
      .get("3w_100.json")

      .then((data) => {
        console.log(data);
        this.html = data.data;
        console.log(this.html);
      });
    this.handleUserList();
  },
  methods: {
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function (size) {
      this.pagesize = size;
      console.log(this.pagesize); //每页下拉显示数据
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage;
      console.log(this.currentPage); //点击第几页
    },
    handleUserList() {
      axios.get("3w_100.json").then((data) => {
        //这是从本地请求的数据接口，
        console.log(data.data);
        this.userList = data.data.records;
        console.log(this.userList);
      });
    },
  },
};
</script>
<style lang="less">
li {
  display: inline-block;
}
</style>
