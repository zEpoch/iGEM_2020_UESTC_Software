<template>
  <div id="home">
    <div class="shopping-cart-wrapper">
      <div class="shopping-cart-canvas">
        <div class="shopping_cart">
          <div class="shopping_cart-top-bar d-flex justify-content-between">
            <h6>Home</h6>
            <button class="shopping-cart-close">
              <i class="ion ion-md-add"></i>
            </button>
          </div>
          <div class="shopping_cart-list-items mt-30"></div>
          <div class="shopping_cart-btn"></div>
        </div>
      </div>
      <div class="overlay"></div>
    </div>

    <section
      class="page-title-area d-flex align-items-center bg_cover"
      style="background-image: url(img/home.png)"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="page-title-item text-center">
              <h1 data-animation="fadeInUp" data-delay="0.5s" class="title">
                CPD3DS
              </h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="">CPD3DS</a></li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <!-- row -->
      <div class="page-title-shape">
        <img src="../../public/assets/images/banner-shape.png" alt="shape" />
      </div>
    </section>
    <br />
    <br />
    <div class="row">
      <div class="col-lg-12">
        <div class="wrapper-1">
          <div class="cols paddingFor">
            <div
              class="col-lg-6 paddingFor"
              style="cursor:pointer"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div class="container" v-on:click="toUrl('/1a0aA00')">
                <div
                  class="front"
                  style="background-image: url(./img/1a0aA00.png)"
                >
                  <div class="inner">
                    <p>1a0aA00</p>
                  </div>
                </div>
                <div class="back">
                  <div class="inner2">
                    <div>
                      <a href="/1a0aA00">Show detail</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="col-lg-6 paddingFor"
              style="cursor:pointer"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div class="container" v-on:click="toUrl('/1a0bA00')">
                <div
                  class="front"
                  style="background-image: url(./img/1a0bA00.png)"
                >
                  <div class="inner">
                    <p>1a0bA00</p>
                  </div>
                </div>
                <div class="back">
                  <div class="inner2">
                    <div>
                      <a href="/1a0bA00">Show detail</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-lg-6 paddingFor"
              style="cursor:pointer"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div class="container" v-on:click="toUrl('1a0cA00')">
                <div
                  class="front"
                  style="background-image: url(./img/1a0cA00.png)"
                >
                  <div class="inner">
                    <p>1a0cA00</p>
                  </div>
                </div>
                <div class="back">
                  <div class="inner2">
                    <div>
                      <a href="/1a0cA00">Show detail</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="col-lg-6 paddingFor"
              style="cursor:pointer"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div class="container" v-on:click="toUrl('/1a05A00')">
                <div
                  class="front"
                  style="background-image: url(./img/1a05A00.png)"
                >
                  <div class="inner">
                    <p>1a05A00</p>
                  </div>
                </div>
                <div class="back">
                  <div class="inner2">
                    <div>
                      <a href="/1a05A00">Show detail</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />

    <div style="margin:40px 0">
      <div
        class="text-center"
        style="color:#053b9e;font-size:18px;width:100%;font-weight:bold"
      >
        CPD3DS
      </div>
      <div class="text-center" style="font-size:30px;width:100%">
        Introduction
      </div>
    </div>
    <section class="product-area area-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="single-product mt-30">
              <img src="assets/images/product-1.jpg" alt="product" />
              <a href="https://2020.igem.org/Team:UESTC-Software">
                <h6 class="title">View our wiki</h6>
              </a>
              <span>Wiki</span>
              <ul>
                <li>
                  This is our team wiki, you can learn about our complete
                  project through our wiki
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="single-product mt-30">
              <img src="assets/images/download.png" alt="product" />
              <a href="/download">
                <h6 class="title">Download</h6>
              </a>
              <span>Download</span>
              <ul>
                <li>CPD3DS offers the SQL to be downloaded</li>
              </ul>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="single-product mt-30">
              <img src="assets/images/product-3.png" alt="product" />
              <a href="https://2020.igem.org/Team:UESTC-Software/Model">
                <h6 class="title">Model</h6>
              </a>
              <span>Model</span>
              <ul>
                <li>
                  The 3d shape processing, extraction and normalization of
                  domain are innovatively realized, and the original domain
                  independent modular design is achieved.
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="single-product mt-30">
              <img src="assets/images/product-4.png" alt="product" />
              <a href="https://2020.igem.org/Team:UESTC-Software/Education">
                <h6 class="title">Education</h6>
              </a>
              <!-- <span>Search</span> -->
              <ul>
                <li>
                  Domain modeling and building blocks, scientific and
                  interesting combination
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="single-product mt-30">
              <img src="assets/images/product-5.png" alt="product" />
              <a href="/NeuralStyle">
                <h6 class="title">Neural Style</h6>
              </a>
              <ul>
                <li>
                  CPD3DS have given a feature that allows you to transfer the
                  style of your pictures
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="single-product mt-30">
              <img src="assets/images/product-6.jpeg" alt="product" />
              <a>
                <h6 class="title">Copyright</h6>
              </a>
              <!-- <span>Copyright</span> -->
              <ul>
                <li>
                  CPD3DS follows Creative Commons (CC BY 4.0). Here is the
                  statement of all original databases and licenses.
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="single-product mt-30">
              <img src="assets/images/xiaocezi_en.png" alt="product" />
              <a href="/Probrick Brochure-English.pdf" class="preview">
                <h6 class="title">The magic of domain</h6>
              </a>
              <!-- <span>Copyright</span> -->
              <ul>
                <li>
                  We photographed various domains and made a photography called
                  The Art of Domain. Come and explore the beauty of domains
                  together!
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="single-product mt-30">
              <img src="assets/images/domain_art.png" alt="product" />
              <a href="/The art of domain.pdf" class="preview">
                <h6 class="title">The art of domain</h6>
              </a>
              <!-- <span>Copyright</span> -->
              <ul>
                <li>
                  Through this brochure Magical domains, you'll know how to play
                  our construction toys Probrick and vividly view the way how
                  structure domain splicing！
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="single-product mt-30">
              <div class="play-item">
                <div class="play-thumb mt-30">
                  <img src="assets/images/your_ex.png" alt="" />
                  <a href="/Your existence.mp4" class="video-popup"
                    ><i class="icon ion-md-play"></i
                  ></a>
                </div>
              </div>
              <a>
                <h6 class="title">Your Presence</h6>
              </a>
              <!-- <span>Copyright</span> -->
              <ul>
                <li>
                  This video is for people with hearing loss, your presence
                  always matters.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <h3 class="title" style="margin-top: 40px">Domain Model</h3>
    <el-carousel :interval="4000" type="card" height="430px">
      <el-carousel-item v-for="(img, index) in image" :key="index">
        <img style="object-fit: cover; max-height: 370px" :src="img.src" alt />
        <br />
        <router-link to="/productDetails">
          <h5 class="divtitle" style="display: block">{{ img.title }}</h5>
        </router-link>
        <ul>
          <li>{{ img.model }}</li>
        </ul>
      </el-carousel-item>
    </el-carousel>

    <!-- <div class="customer-area">
      <div class="container">
        <div class="row customer-active">
          <div class="col-lg-6">
            <div class="customer-item">
              <img src="assets/images/wb.png" alt="customer" />
              <span> <b>Bin Wang</b> / Caption </span>
              <p>
                “这个世界缺的不是完美的人，而是从心底给出的真心，正义，无畏与同情。”
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="customer-item">
              <img src="assets/images/mn.png" alt="customer" />
              <span> <b>Nan Mo</b> / Caption </span>
              <p>
                “这个世界缺的不是完美的人，而是从心底给出的真心，正义，无畏与同情。”
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="customer-item">
              <img src="assets/images/gf.png" alt="customer" />
              <span> <b>Fan Gao</b> / Designer </span>
              <p>
                “这个世界缺的不是完美的人，而是从心底给出的真心，正义，无畏与同情。”
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="customer-item">
              <img src="assets/images/dhr.png" alt="customer" />
              <span> <b>Haoran Dong</b> / Designer </span>
              <p>
                “这个世界缺的不是完美的人，而是从心底给出的真心，正义，无畏与同情。”
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="customer-item">
              <img src="assets/images/hjq.png" alt="customer" />
              <span> <b>Haoran Dong</b> / Designer </span>
              <p>
                “这个世界缺的不是完美的人，而是从心底给出的真心，正义，无畏与同情。”
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="customer-item">
              <img src="assets/images/lmk.png" alt="customer" />
              <span> <b>Liuming Kang</b> / Designer </span>
              <p>
                “这个世界缺的不是完美的人，而是从心底给出的真心，正义，无畏与同情。”
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="customer-item">
              <img src="assets/images/my.png" alt="customer" />
              <span> <b>Yao Mei</b> / Designer </span>
              <p>
                “这个世界缺的不是完美的人，而是从心底给出的真心，正义，无畏与同情。”
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="customer-item">
              <img src="assets/images/mzc.png" alt="customer" />
              <span> <b>Zhuochao Min</b> / Designer </span>
              <p>
                “这个世界缺的不是完美的人，而是从心底给出的真心，正义，无畏与同情。”
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="customer-item">
              <img src="assets/images/qd.png" alt="customer" />
              <span> <b>Dan Qiao</b> / Designer </span>
              <p>
                “这个世界缺的不是完美的人，而是从心底给出的真心，正义，无畏与同情。”
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="customer-item">
              <img src="assets/images/xhy.png" alt="customer" />
              <span> <b>Huiyu Xiong</b> / Designer </span>
              <p>
                “这个世界缺的不是完美的人，而是从心底给出的真心，正义，无畏与同情。”
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="customer-item">
              <img src="assets/images/yzc.png" alt="customer" />
              <span> <b>Zhaochang Yang</b> / Designer </span>
              <p>
                “这个世界缺的不是完美的人，而是从心底给出的真心，正义，无畏与同情。”
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="customer-item">
              <img src="assets/images/zt.png" alt="customer" />
              <span> <b>Tao Zhou</b> / Designer </span>
              <p>
                “这个世界缺的不是完美的人，而是从心底给出的真心，正义，无畏与同情。”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <div class="instagram-area">
      <div class="container-fluid pl-60 pr-60">
        <div class="row">
          <div class="col-lg-12">
            <div class="instagram-item d-flex"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as $3Dmol from "3dmol/build/3Dmol-nojquery.js";
import axios from "axios";
class Post {
  constructor(title, link, author, img) {
    this.title = title;
    this.link = link;
    this.author = author;
    this.img = img;
  }
}
export default {
  name: "Home",
  data: function() {
    return {
      image: [
        {
          title: "1b1c",
          model: "stlModel",
          src: "assets/images/1b1cstl.png",
        },
        {
          title: "1b1c",
          model: "legpModel",
          src: "assets/images/1b1c.png",
        },
        {
          title: "1b3c",
          model: "stlModel",
          src: "assets/images/1b3cstl.png",
        },
        {
          title: "1b3c",
          model: "legoModel",
          src: "assets/images/1b3c.png",
        },
        {
          title: "1b3i",
          model: "stlModel",
          src: "assets/images/1b3istl.png",
        },
        {
          title: "1b3i",
          model: "legoModel",
          src: "assets/images/1b3i.png",
        },
      ],
    };
  },
  components: {},
  created() {},
  methods: {},
  watch: {},
};
</script>
>
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
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) divtitle {
  color: firebrick;
}

.el-carousel__item:nth-child(2n + 1) divtitle {
  color: hotpink;
}
.el-carousel__item:nth-child(2n) ul li {
  color: orangered;
}

.el-carousel__item:nth-child(2n + 1) ul li {
  color: rgb(255, 178, 105);
}
* {
  margin: 0;
  /*padding: 0;*/
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

h1 {
  font-size: 0.5rem;
  font-family: "Montserrat";
  font-weight: normal;
  color: #444;
  text-align: center;
  margin: 2rem 0;
}

.wrapper-1 {
  width: 90%;
  margin: 0 auto;
  max-width: 80rem;
}

.cols {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.paddingFor {
  padding: 15px 0px 0px 0px;
}

.col {
  width: calc(25% - 2rem);
  margin: 1rem;
  cursor: pointer;
}

.container {
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-perspective: 1000px;
  perspective: 1000px;
}

.front,
.back {
  background-size: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-position: center;
  -webkit-transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -o-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1),
    -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  text-align: center;
  min-height: 280px;
  height: auto;
  border-radius: 10px;
  color: #fff;
  font-size: 1.5rem;
}

.back {
  background: #cedce7;
  //background: -webkit-linear-gradient(45deg, #cedce7 0%, #596a72 100%);
  //background: -o-linear-gradient(45deg, #cedce7 0%, #596a72 100%);
  //background: linear-gradient(45deg, #cedce7 0%, #596a72 100%);
}

.front:after {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  content: "";
  display: block;
  opacity: 0.3;
  background-color: lightskyblue;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 10px;
}
.container:hover .front,
.container:hover .back {
  -webkit-transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -o-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1),
    -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
}

.back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.inner {
  -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
  transform: translateY(-50%) translateZ(60px) scale(0.94);
  top: 90%;
  position: absolute;
  left: 0;
  width: 100%;
  padding: 2rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 1px solid transparent;
  -webkit-perspective: inherit;
  perspective: inherit;
  z-index: 2;
}

.inner2 {
  -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
  transform: translateY(-50%) translateZ(60px) scale(0.94);
  top: 50%;
  position: absolute;
  left: 0;
  width: 100%;
  padding: 2rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 1px solid transparent;
  -webkit-perspective: inherit;
  perspective: inherit;
  z-index: 2;
}

.container .back {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.container .front {
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.container:hover .back {
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.container:hover .front {
  -webkit-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.front .inner p {
  font-size: 2rem;
  margin-bottom: 2rem;
  position: relative;
}

.front .inner p:after {
  content: "";
  width: 4rem;
  height: 2px;
  position: absolute;
  background: #c6d4df;
  display: block;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: -0.75rem;
}

.front .inner span {
  color: rgba(255, 255, 255, 0.7);
  font-family: "Montserrat";
  font-weight: 300;
}

@media screen and (max-width: 64rem) {
  .col {
    width: calc(33.333333% - 2rem);
  }
}

@media screen and (max-width: 48rem) {
  .col {
    width: calc(50% - 2rem);
  }
}

@media screen and (max-width: 32rem) {
  .col {
    width: 100%;
    margin: 0 0 2rem 0;
  }
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
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) divtitle {
  color: firebrick;
}

.el-carousel__item:nth-child(2n + 1) divtitle {
  color: hotpink;
}
.el-carousel__item:nth-child(2n) ul li {
  color: orangered;
}

.el-carousel__item:nth-child(2n + 1) ul li {
  color: rgb(255, 178, 105);
}
</style>

<style scoped>
/* cyrillic-ext */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  src: local("Open Sans Light"), local("OpenSans-Light"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OX-hpOqc.woff2)
      format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  src: local("Open Sans Light"), local("OpenSans-Light"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OVuhpOqc.woff2)
      format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  src: local("Open Sans Light"), local("OpenSans-Light"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OXuhpOqc.woff2)
      format("woff2");
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  src: local("Open Sans Light"), local("OpenSans-Light"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUehpOqc.woff2)
      format("woff2");
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  src: local("Open Sans Light"), local("OpenSans-Light"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OXehpOqc.woff2)
      format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  src: local("Open Sans Light"), local("OpenSans-Light"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OXOhpOqc.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  src: local("Open Sans Light"), local("OpenSans-Light"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhp.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  src: local("Open Sans Regular"), local("OpenSans-Regular"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFWJ0bbck.woff2)
      format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  src: local("Open Sans Regular"), local("OpenSans-Regular"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFUZ0bbck.woff2)
      format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  src: local("Open Sans Regular"), local("OpenSans-Regular"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFWZ0bbck.woff2)
      format("woff2");
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  src: local("Open Sans Regular"), local("OpenSans-Regular"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVp0bbck.woff2)
      format("woff2");
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  src: local("Open Sans Regular"), local("OpenSans-Regular"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFWp0bbck.woff2)
      format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  src: local("Open Sans Regular"), local("OpenSans-Regular"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFW50bbck.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  src: local("Open Sans Regular"), local("OpenSans-Regular"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVZ0b.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  src: local("Open Sans Bold"), local("OpenSans-Bold"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOX-hpOqc.woff2)
      format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  src: local("Open Sans Bold"), local("OpenSans-Bold"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOVuhpOqc.woff2)
      format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  src: local("Open Sans Bold"), local("OpenSans-Bold"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOXuhpOqc.woff2)
      format("woff2");
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  src: local("Open Sans Bold"), local("OpenSans-Bold"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOUehpOqc.woff2)
      format("woff2");
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  src: local("Open Sans Bold"), local("OpenSans-Bold"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOXehpOqc.woff2)
      format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  src: local("Open Sans Bold"), local("OpenSans-Bold"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOXOhpOqc.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  src: local("Open Sans Bold"), local("OpenSans-Bold"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOUuhp.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
} /* cyrillic-ext */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  src: local("Open Sans Light"), local("OpenSans-Light"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OX-hpOqc.woff2)
      format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  src: local("Open Sans Light"), local("OpenSans-Light"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OVuhpOqc.woff2)
      format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  src: local("Open Sans Light"), local("OpenSans-Light"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OXuhpOqc.woff2)
      format("woff2");
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  src: local("Open Sans Light"), local("OpenSans-Light"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUehpOqc.woff2)
      format("woff2");
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  src: local("Open Sans Light"), local("OpenSans-Light"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OXehpOqc.woff2)
      format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  src: local("Open Sans Light"), local("OpenSans-Light"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OXOhpOqc.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  src: local("Open Sans Light"), local("OpenSans-Light"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhp.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  src: local("Open Sans Regular"), local("OpenSans-Regular"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFWJ0bbck.woff2)
      format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  src: local("Open Sans Regular"), local("OpenSans-Regular"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFUZ0bbck.woff2)
      format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  src: local("Open Sans Regular"), local("OpenSans-Regular"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFWZ0bbck.woff2)
      format("woff2");
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  src: local("Open Sans Regular"), local("OpenSans-Regular"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVp0bbck.woff2)
      format("woff2");
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  src: local("Open Sans Regular"), local("OpenSans-Regular"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFWp0bbck.woff2)
      format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  src: local("Open Sans Regular"), local("OpenSans-Regular"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFW50bbck.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  src: local("Open Sans Regular"), local("OpenSans-Regular"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVZ0b.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  src: local("Open Sans Bold"), local("OpenSans-Bold"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOX-hpOqc.woff2)
      format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  src: local("Open Sans Bold"), local("OpenSans-Bold"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOVuhpOqc.woff2)
      format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  src: local("Open Sans Bold"), local("OpenSans-Bold"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOXuhpOqc.woff2)
      format("woff2");
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  src: local("Open Sans Bold"), local("OpenSans-Bold"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOUehpOqc.woff2)
      format("woff2");
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  src: local("Open Sans Bold"), local("OpenSans-Bold"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOXehpOqc.woff2)
      format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  src: local("Open Sans Bold"), local("OpenSans-Bold"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOXOhpOqc.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  src: local("Open Sans Bold"), local("OpenSans-Bold"),
    url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOUuhp.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
</style>

<style scoped lang="less">
@mixin cf {
  &::before,
  &::after {
    content: "";
    display: table;
  }
  &::after {
    clear: both;
  }
}

* {
  box-sizing: border-box;
}

body {
  background-image: linear-gradient(to right, #034378, #2d4e68);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  font-family: "Open Sans";
}

a {
  text-decoration: none;
}

h1 {
  //font-family: "Open Sans";
  //font-weight: 300;
}

.row {
  max-width: 900px;
  margin: 50px auto 0;
}

// Base styles
.card {
  float: left;
  padding: 0 1.7rem;
  width: 33.3%;
  .menu-content {
    @include cf;
    margin: 0;
    padding: 0;
    list-style-type: none;
    li {
      display: inline-block;
    }
    a {
      color: #fff;
    }
    span {
      position: absolute;
      left: 50%;
      top: 0;
      font-size: 10px;
      font-weight: 700;
      font-family: "Open Sans";
      transform: translate(-50%, 0);
    }
  }
  .wrapper {
    background-color: #fff;
    min-height: 350px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 19px 38px rgba(#000, 0.3), 0 15px 12px rgba(#000, 0.2);
    &:hover {
      .data {
        transform: translateY(0);
      }
    }
  }
  .data {
    position: absolute;
    bottom: 0;
    width: 100%;
    transform: translateY(calc(70px + 1em));
    transition: transform 0.3s;
    .content {
      padding: 1em;
      position: relative;
      z-index: 1;
    }
  }
  .author {
    font-size: 12px;
  }
  .title {
    margin-top: 10px;
  }
  .text {
    height: 70px;
    margin: 0;
  }
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"]:checked + .menu-content {
    transform: translateY(-60px);
  }
}
</style>
