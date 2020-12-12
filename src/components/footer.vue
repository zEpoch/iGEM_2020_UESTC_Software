<template>
  <div id="Pfooter">
    <!--====== FOOTER PART START ======-->

    <section class="footer-area gray-bg pb-90">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-5">
            <div class="footer-item-1 mt-30">
              <router-link to="/index">
                <img src="assets/images/logo1.png" height="50" alt="logo" />
              </router-link>
              <ul>
                <!-- <li>
                  <router-link to="/about">About Us</routerlink>
                </li> -->
                <li >
                      <a href="https://2020.igem.org/Team:UESTC-Software/Team">About Us</a>
                    </li>
              </ul>
              <div class="footer-info">
                <ul>
                  <li>
                    <i class="ion ion-md-pin"></i> NO.2006.Xiyuan Avenue,UESTC,
                    <br />Chengdu,China
                  </li>
                  <li>
                    <i class="ion ion-ios-mail"></i>uestcsoftware@vip.qq.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4 offset-lg-4 col-md-4 col-sm-4">
            <div class="footer-social mt-30">
              <h5 class="title">Follow our WeChat public account</h5>
              <img src="assets/images/workingcell.png">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--====== FOOTER PART ENDS ======-->

    <!--====== BACK TO TOP ======-->
    <div class="back-to-top">
      <a href="">
        <i class="ion ion-md-arrow-up"></i>
      </a>
    </div>
    <!--====== BACK TO TOP ======-->
  </div>
</template>
<script>
export default {
  name: "Pfooter",
  data: function () {
    return {};
  },
  components: {},
};
</script>>
<style lang="less">
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
</style>
