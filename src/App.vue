<template>
  <div id="app">
    <Header></Header>
    <Bar></Bar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";

import Footer from "@/components/footer.vue";
import 'jquery';
import * as $3Dmol from '3dmol/build/3Dmol-nojquery.js';
$(function() {
  function footerPosition() {
    $("footer").removeClass("fixed-bottom");
    var contentHeight = document.body.scrollHeight, //网页正文全文高度
      winHeight = window.innerHeight; //可视窗口高度，不包括浏览器顶部工具栏
    if (!(contentHeight > winHeight)) {
      //当网页正文高度小于可视窗口高度时，为footer添加类fixed-bottom
      $("footer").addClass("fixed-bottom");
    }
  }
  footerPosition();
  $(window).resize(footerPosition);
});
export default {
  name: "app",

  data: function() {
    return {
      isRouterAlive: true,
    };
  },
  components: {
    Header,
    Footer,
  },
  computed: {
    //    key() {
    //   // 只要保证 key 唯一性就可以了，保证不同页面的 key 不相同
    //   console.log(this.$route.fullPath);
    //   return this.$route.fullPath
    // }
  },
  methods: {},
};
</script>

<style lang="less">
.fixed-bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
::-webkit-scrollbar {
  width: 7px;
  height: 10px;
}
/* 滚动条的滑块 */
::-webkit-scrollbar-thumb {
  // background-color: #a1a3a9;
  background-color: rgb(0,169,151);
  border-radius: 3px;
}
</style>
