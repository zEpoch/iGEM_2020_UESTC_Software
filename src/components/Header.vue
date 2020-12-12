<template>
  <div class="hello">
    <!--====== PRELOADER  PART START ======-->

    <div id="preloader">
      <div id="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <!--====== PRELOADER  PART ENDS ======-->

    <!--====== SEARCH PART START ======-->

    <!--====== SEARCH PART ENDS ======-->

    <!--====== HEADER  PART START ======-->

    <header class="header-area">
      <div class="navigation fixed-top">
        <div class="container-fluid pl-60 pr-60">
          <div class="row">
            <div class="col-lg-12">
              <nav class="navbar navbar-expand-lg">
                <router-link class="navbar-brand" to="/">
                  <img
                    src="assets/images/logo1.png"
                    alt="Logo"
                    style="width:25px;height:25px"
                  />
                  <span style="color:#CE8349;">UESTC-SOFTWARE</span>
                </router-link>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="toggler-icon"></span>
                  <span class="toggler-icon"></span>
                  <span class="toggler-icon"></span>
                </button>
                <!-- navbar-toggler -->

                <div
                  class="collapse navbar-collapse sub-menu-bar"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav m-auto">
                    <li class="nav-item">
                      <a href="/">CPD3DS</a>
                    </li>
                    <li class="nav-item">
                      <a href="/tutorial">tutorial</a>
                    </li>
                    <li class="nav-item">
                      <a href="/domainList">Domain List</a>
                    </li>
                    <li class="nav-item">
                      <a href="/standardClass">Standard Class</a>
                    </li>
                    <li class="nav-item">
                      <a href="/domainInteraction">Domain Interaction</a>
                    </li>
                    <li class="nav-item">
                      <a href="/NeuralStyle">NeuralStyle</a>
                    </li>
                    <li class="nav-item">
                      <a href="/searchLists">Search domain</a>
                    </li>
                    <li class="nav-item">
                      <a href="/download">Download</a>
                    </li>
                    <!-- <li class="nav-item"><router-link to="/Contact">Contact</router-link></li> -->
                  </ul>
                </div>
                <div class="navbar-icon d-none d-sm-block">
                  <ul>
                    <li>
                      <a class="shopping-cart-open"
                        ><i class="pe-7s-info"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <!-- navbar collapse -->
              </nav>
              <!-- navbar -->
            </div>
          </div>
          <!-- row -->
        </div>
        <!-- container -->
      </div>
      <!-- navigation -->
    </header>
  </div>
</template>
<script lang="ts">
export default {
  name: "hello",

  data: function() {
    return {};
  },

  components: {},
  methods: {},
  watch: {},
};
</script>
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?db37613d2873a5dc4cee9021015378f5";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>

<style scoped lang="less"></style>
