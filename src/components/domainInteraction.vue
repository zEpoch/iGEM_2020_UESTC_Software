<template>
  <div id="showbind">
    <div class="shopping-cart-wrapper">
      <div class="shopping-cart-canvas">
        <div class="shopping_cart">
          <div class="shopping_cart-top-bar d-flex justify-content-between">
            <h6>protein bind</h6>
            <button class="shopping-cart-close">
              <i class="ion ion-md-add"></i>
            </button>
          </div>
          <div class="shopping_cart-list-items mt-30">
            It shows the posibility one class of domain bind with another class
            of domain
          </div>
          <div class="shopping_cart-btn"></div>
        </div>
      </div>
      <div class="overlay"></div>
    </div>
    <section
      class="page-title-area d-flex align-items-center bg_cover"
      style="background-image: url(assets/images/interaction.png)"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-title-item text-center">
              <h3 class="title">Probability of combining between domains</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="page-title-shape">
        <img src="assets/images/banner-shape.png" alt="shape" />
      </div>
    </section>
    <div class="row">
      <div class="col-lg-12">
        <div class="wrapper-1">
          <div class="cols paddingFor">
            <el-collapse
              v-model="activeNames"
              @change="handleChange"
              style="width: 100%"
              align="middle"
            >
              <el-collapse-item title="Click here" name="1" align="middle">
                <div>
                  <h4></h4>
                  <img src="/assets/images/interaction_fun.png" />
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </div>
    </div>
    <section class="contact-touch-area pt-85 pb-90" v-if="!clashow">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-12">
            <div class="contact-touch-part">
              <div class="row">
                <div class="col-lg-12">
                  <div class="secton-title text-center">
                    <h5 class="title">Search</h5>
                    <p>
                      Please input the domain <b>type</b> to compute the
                      Probability of combining between with other domains
                    </p>
                  </div>
                </div>
              </div>
              <form id="contact-form">
                <div>
                  <div class="col-lg-12">
                    <div class="input-box mt-35">
                      <input
                        type="text"
                        v-model="search"
                        οnkeydοwn="if(event.keyCode==13){return false;}"
                        placeholder="please input the domain cla such as:01"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div v-if="search != ''">
      <div
        v-for="(bind, index) in filteredpdbs"
        :key="index"
        class="single-bind border border-primary rounded-pill"
        :style="
          (index + 1) % 10 == 1
            ? { border: '10px solid red' }
            : { border: 'none' }
        "
      >
        <div>
          <div>
            The Probability of combining
            <h4>{{ search }}</h4>
            cla and
            <h4>{{ bind.bindId }}</h4>
            type
          </div>
          <article>
            the Score is <b>{{ bind.bindscore | snippet }}</b>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "showbind",
  data() {
    return {
      bindfile: [],
      search: "",
    };
  },
  created() {
    axios.get("./bindn.json").then((res) => {
      for (let key in res.data) {
        this.bindfile.push(res.data[key]);
      }
    });
  },
  computed: {
    filteredpdbs: function() {
      return this.bindfile.filter((bind) => {
        return bind.Id.match(this.search);
      });
    },
  },
};
</script>

<style scoped>
#showbind {
  margin: 0 auto;
}
.single-bind {
  padding: 20px;
  margin: 20px auto;
  box-sizing: border-box;
  /* background: cadetblue; */
  /* background: #159,142,46; */
  width: 50%;
  /* height: 300px; */
}
#showbind a {
  color: #444;
  text-decoration: none;
}
input[type="text"] {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>
