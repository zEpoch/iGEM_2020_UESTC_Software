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

    <section class="contact-touch-area pt-85 pb-90">
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
                    <p>Input the shandard domain name of every class</p>
                    <p>You can search for a certain category <a href="/searchLists">Here</a> to get the name of the representative domain of that category</p>
                  </div>
                </div>
              </div>
              <form id="contact-form">
                <div>
                  <div class="col-lg-12">
                    <div class="input-box mt-35">
                      <input
                        v-model="search"
                        type="text"
                        placeholder="Please input the domain name"
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

    <!-- <div class="search-wrapper">
    <input type="text" v-model="search" placeholder="Search title.."/>
  </div> -->
  <div v-if="search !=''">
    <div class="wrapper">
      <div class="card" v-for="post in filteredList" :key="post">
        <a v-bind:href="post.link" target="_blank">
          <img v-bind:src="post.img" />
          <!-- <small>posted by: {{ post.author }}</small> -->
          {{ post.title }}
        </a>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
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
  name: "profunction",
  data() {
    return {
      search: "",
      isshow: false,
      postList: [
        new Post(
          "2p4vA02-1class",
          "/2p4vA02",
          "Chris",
          "./img/JPEG/2p4vA02-1class.jpg"
        ),
        new Post(
          "3l2nA01-2class",
          "/3l2nA01",
          "Tim",
          "./img/JPEG/3l2nA01-2class.jpg"
        ),
        new Post(
          "1tu9A00-3class",
          "/1tu9A00",
          "Sam",
          "./img/JPEG/1tu9A00-3class.jpg"
        ),
        new Post(
          "2h3gX01-4class.jpg",
          "/2h3gX01",
          "Rachel",
          "./img/JPEG/2h3gX01-4class.jpg"
        ),
        new Post(
          "1jo6A00-5class",
          "/1jo6A00",
          "Chris",
          "./img/JPEG/1jo6A00-5class.jpg"
        ),
        new Post(
          "1f9fA00-6class",
          "/1f9fA00",
          "Tim",
          "./img/JPEG/1f9fA00-6class.jpg"
        ),
        new Post(
          "8018702-7class",
          "/8018702_1m8p-A-19,390",
          "A. A. Ron",
          "./img/JPEG/8018702-7class.jpg"
        ),
        new Post(
          "2p1aA00-8class",
          "/2p1aA00",
          "Alex",
          "./img/JPEG/2p1aA00-8class.jpg"
        ),
        new Post(
          "4wjlA02-9class",
          "/4wjlA02",
          "Chuck",
          "./img/JPEG/4wjlA02-9class.jpg"
        ),
        new Post(
          "4wjlA02-9class",
          "/4wjlA02",
          "Chuck",
          "./img/JPEG/4wjlA02-9class.jpg"
        ),
        new Post(
          "2jbvA02-10class",
          "/2jbvA02",
          "Chuck",
          "./img/JPEG/2jbvA02-10class.jpg"
        ),
        new Post(
          "1ymqA01-11class",
          "/1ymqA01",
          "Chuck",
          "./img/JPEG/1ymqA01-11class.jpg"
        ),
        new Post(
          "4rdrA01-12class",
          "/4rdrA01",
          "Chuck",
          "./img/JPEG/4rdrA01-12class.jpg"
        ),
        new Post(
          "3ioqA00-13class",
          "/3ioqA00",
          "Chuck",
          "./img/JPEG/3ioqA00-13class.jpg"
        ),
        new Post(
          "2iqjA00-14class",
          "/2iqjA00",
          "Chuck",
          "./img/JPEG/2iqjA00-14class.jpg"
        ),
        new Post(
          "8092468-15class",
          "/8092468_6vsb-A-27,293",
          "Chuck",
          "./img/JPEG/8092468-15class.jpg"
        ),
        new Post(
          "3bnvA00-16class",
          "/3bnvA00",
          "Chuck",
          "./img/JPEG/3bnvA00-16class.jpg"
        ),
        new Post(
          "2r56H01-17class",
          "/2r56H01",
          "Chuck",
          "./img/JPEG/2r56H01-17class.jpg"
        ),
        new Post(
          "2cokA00-18class",
          "2cokA00",
          "Chuck",
          "./img/JPEG/2cokA00-18class.jpg"
        ),
        new Post(
          "1hcqA00-19class",
          "/1hcqA00",
          "Chuck",
          "./img/JPEG/1hcqA00-19class.jpg"
        ),
        new Post(
          "3huuA02-20class",
          "/3huuA02",
          "Chuck",
          "./img/JPEG/3huuA02-20class.jpg"
        ),
        new Post(
          "1s94B00-21class",
          "/1s94B00",
          "Chuck",
          "./img/JPEG/1s94B00-21class.jpg"
        ),
        new Post(
          "5l9sA01-22class",
          "/5l9sA01",
          "Chuck",
          "./img/JPEG/5l9sA01-22class.jpg"
        ),
        new Post(
          "3odtA00-23class",
          "/3odtA00",
          "Chuck",
          "./img/JPEG/3odtA00-23class.jpg"
        ),
        new Post(
          "1palA00-24class",
          "/1palA00",
          "Chuck",
          "./img/JPEG/1palA00-24class.jpg"
        ),
        new Post(
          "1dgjA02-25class",
          "/1dgjA02",
          "Chuck",
          "./img/JPEG/1dgjA02-25class.jpg"
        ),
        new Post(
          "8025171-26class",
          "/8025171",
          "Chuck",
          "./img/JPEG/8025171-26class.jpg"
        ),
        new Post(
          "1k2aA00-27class",
          "/1k2aA00",
          "Chuck",
          "./img/JPEG/1k2aA00-27class.jpg"
        ),
        new Post(
          "4uy1A00-28class",
          "/4uy1A00",
          "Chuck",
          "./img/JPEG/4uy1A00-28class.jpg"
        ),
        new Post(
          "1sziA02-29class",
          "/1sziA02",
          "Chuck",
          "./img/JPEG/1sziA02-29class.jpg"
        ),
        new Post(
          "1avuA00-30class",
          "/1avuA00",
          "Chuck",
          "./img/JPEG/1avuA00-30class.jpg"
        ),
        new Post(
          "3bsmA02-31class",
          "/3bsmA02",
          "Chuck",
          "./img/JPEG/3bsmA02-31class.jpg"
        ),
        new Post(
          "5c66A00-32class",
          "/5c66A00",
          "Chuck",
          "./img/JPEG/5c66A00-32class.jpg"
        ),
        new Post(
          "2v8zA00-33class",
          "/2v8zA00",
          "Chuck",
          "./img/JPEG/2v8zA00-33class.jpg"
        ),
        new Post(
          "3fn0H01-34class",
          "/3fn0H01",
          "Chuck",
          "./img/JPEG/3fn0H01-34class.jpg"
        ),
        new Post(
          "Feathers.js",
          "http://feathersjs.com/",
          "Chuck",
          "./img/JPEG/5dvbA00-35class.jpg"
        ),
        new Post(
          "2n3gA00-36class",
          "/2n3gA00",
          "Chuck",
          "./img/JPEG/2n3gA00-36class.jpg"
        ),
        new Post(
          "3fd3A02-37class",
          "/3fd3A02",
          "Chuck",
          "./img/JPEG/3fd3A02-37class.jpg"
        ),
        new Post(
          "4k2xA01-38class",
          "/4k2xA01",
          "Chuck",
          "./img/JPEG/4k2xA01-38class.jpg"
        ),
        new Post(
          "2q24A00-39class",
          "/2q24A00",
          "Chuck",
          "./img/JPEG/2q24A00-39class.jpg"
        ),
        new Post(
          "3dmyA03-40class",
          "/3dmyA03",
          "Chuck",
          "./img/JPEG/3dmyA03-40class.jpg"
        ),
        new Post(
          "2qywA00-41class",
          "/2qywA00",
          "Chuck",
          "./img/JPEG/2qywA00-41class.jpg"
        ),
        new Post(
          "5dhvA00-42class",
          "/5dhvA00",
          "Chuck",
          "./img/JPEG/5dhvA00-42class.jpg"
        ),
        new Post(
          "1wxlA00-43class",
          "/1wxlA00",
          "Chuck",
          "./img/JPEG/1wxlA00-43class.jpg"
        ),
        new Post(
          "2di4A00-44class",
          "/2di4A00",
          "Chuck",
          "./img/JPEG/2di4A00-44class.jpg"
        ),
        new Post(
          "8029491-45class",
          "/8029491",
          "Chuck",
          "./img/JPEG/8029491-45class.jpg"
        ),
        new Post(
          "4kc3B02-46class",
          "/4kc3B02",
          "Chuck",
          "./img/JPEG/4kc3B02-46class.jpg"
        ),
        new Post(
          "2aheA01-47class",
          "/2aheA01",
          "Chuck",
          "./img/JPEG/2aheA01-47class.jpg"
        ),
        new Post(
          "1jdsA00-48class",
          "/1jdsA00",
          "Chuck",
          "./img/JPEG/1jdsA00-48class.jpg"
        ),

        new Post(
          "Feathers.js",
          "http://feathersjs.com/",
          "Chuck",
          "./img/JPEG/3bfjA02-49class.jpg"
        ),
        new Post(
          "8030546-50class",
          "/8030546_1urj-A-9,1130",
          "Chuck",
          "./img/JPEG/8030546-50class.jpg"
        ),
        new Post(
          "2b51A01-51class",
          "/2b51A01",
          "Chuck",
          "./img/JPEG/2b51A01-51class.jpg"
        ),
        new Post(
          "3hrdC02-52class",
          "/3hrdC02",
          "Chuck",
          "./img/JPEG/3hrdC02-52class.jpg"
        ),
        new Post(
          "1oaqL00-53class",
          "/1oaqL00",
          "Chuck",
          "./img/JPEG/1oaqL00-53class.jpg"
        ),
        new Post(
          "8027279-54class",
          "/8027279_1cii-A-23,450",
          "Chuck",
          "./img/JPEG/8027279-54class.jpg"
        ),
        new Post(
          "8067903-55class",
          "/8067903_5wq4-C-435,506",
          "Chuck",
          "./img/JPEG/8067903-55class.jpg"
        ),
        new Post(
          "2x7mA01-56class",
          "/2x7mA01",
          "Chuck",
          "./img/JPEG/2x7mA01-56class.jpg"
        ),
        new Post(
          "1ifmA00-57class",
          "/1ifmA00",
          "Chuck",
          "./img/JPEG/1ifmA00-57class.jpg"
        ),
        new Post(
          "8066212-58class",
          "/8066212",
          "Chuck",
          "./img/JPEG/8066212-58class.jpg"
        ),
        new Post(
          "8045187-59class",
          "/8045187_5t0j-Y-12,285",
          "Chuck",
          "./img/JPEG/8045187-59class.jpg"
        ),
        new Post(
          "4zqbA02-60class",
          "/4zqbA02",
          "Chuck",
          "./img/JPEG/4zqbA02-60class.jpg"
        ),
        new Post(
          "8024335-61class",
          "/8024335_1uxy-A-201,342",
          "Chuck",
          "./img/JPEG/8024335-61class.jpg"
        ),
        new Post(
          "8057533-62class",
          "/8057533_1h2b-A-17,359",
          "Chuck",
          "./img/JPEG/8057533-62class.jpg"
        ),
        new Post(
          "8066229-63class",
          "/8066229_6bwl-A-1,313",
          "Chuck",
          "./img/JPEG/8066229-63class.jpg"
        ),
        new Post(
          "2v7iA01-64class",
          "/2v7iA01",
          "Chuck",
          "./img/JPEG/2v7iA01-64class.jpg"
        ),
        new Post(
          "4m8sA00-65class",
          "/4m8sA00",
          "Chuck",
          "./img/JPEG/4m8sA00-65class.jpg"
        ),
        new Post(
          "1gm5A01-66class",
          "/1gm5A01",
          "Chuck",
          "./img/JPEG/1gm5A01-66class.jpg"
        ),
        new Post(
          "1sofA00-67class",
          "/1sofA00",
          "Chuck",
          "./img/JPEG/1sofA00-67class.jpg"
        ),
        new Post(
          "4kzsA03-68class",
          "/4kzsA03",
          "Chuck",
          "./img/JPEG/4kzsA03-68class.jpg"
        ),
        new Post(
          "2fiwA00-69class",
          "/2fiwA00",
          "Chuck",
          "./img/JPEG/2fiwA00-69class.jpg"
        ),
        new Post(
          "1fdqA00-70class",
          "/1fdqA00",
          "Chuck",
          "./img/JPEG/1fdqA00-70class.jpg"
        ),
        new Post(
          "2gmhA02-71class",
          "/2gmhA02",
          "Chuck",
          "./img/JPEG/2gmhA02-71class.jpg"
        ),
        new Post(
          "2yweA04-72class",
          "/2yweA04",
          "Chuck",
          "./img/JPEG/2yweA04-72class.jpg"
        ),
        new Post(
          "4mm0A00-73class",
          "/4mm0A00",
          "Chuck",
          "./img/JPEG/4mm0A00-73class.jpg"
        ),
        new Post(
          "2kn1A00-74class",
          "/2kn1A00",
          "Chuck",
          "./img/JPEG/2kn1A00-74class.jpg"
        ),
        new Post(
          "2hpvA00-75class",
          "/2hpvA00",
          "Chuck",
          "./img/JPEG/2hpvA00-75class.jpg"
        ),
        new Post(
          "1m7vA03-76class",
          "/1m7vA03",
          "Chuck",
          "./img/JPEG/1m7vA03-76class.jpg"
        ),
        new Post(
          "3hwkA02-77class",
          "/3hwkA02",
          "Chuck",
          "./img/JPEG/3hwkA02-77class.jpg"
        ),
        new Post(
          "4xpwA00-78class",
          "/4xpwA00",
          "Chuck",
          "./img/JPEG/4xpwA00-78class.jpg"
        ),
        new Post(
          "1hi7A00-79class",
          "/1hi7A00",
          "Chuck",
          "./img/JPEG/1hi7A00-79class.jpg"
        ),
        new Post(
          "5i45A00-80class",
          "/5i45A00",
          "Chuck",
          "./img/JPEG/5i45A00-80class.jpg"
        ),
        new Post(
          "1z84B01-81class",
          "/1z84B01",
          "Chuck",
          "./img/JPEG/1z84B01-81class.jpg"
        ),
        new Post(
          "3bjuA02-82class",
          "/3bjuA02",
          "Chuck",
          "./img/JPEG/3bjuA02-82class.jpg"
        ),
        new Post(
          "3gyoA01-83class",
          "/3gyoA01",
          "Chuck",
          "./img/JPEG/3gyoA01-83class.jpg"
        ),
        new Post(
          "8089253-84class",
          "/8089253_6ncv-A-14,104",
          "Chuck",
          "./img/JPEG/8089253-84class.jpg"
        ),
        new Post(
          "1cd5A00-85class",
          "/1cd5A00",
          "Chuck",
          "./img/JPEG/1cd5A00-85class.jpg"
        ),
        new Post(
          "1uc8A02-86class",
          "/1uc8A02",
          "Chuck",
          "./img/JPEG/1uc8A02-86class.jpg"
        ),
        new Post(
          "8031517-87class",
          "/8031517_7acn-A-529,754",
          "Chuck",
          "./img/JPEG/8031517-87class.jpg"
        ),
        new Post(
          "3ffyA00-88class",
          "/3ffyA00",
          "Chuck",
          "./img/JPEG/3ffyA00-88class.jpg"
        ),
        new Post(
          "3r6mA01-89class",
          "/3r6mA01",
          "Chuck",
          "./img/JPEG/3r6mA01-89class.jpg"
        ),
        new Post(
          "5h3jA01-90class",
          "/5h3jA01",
          "Chuck",
          "./img/JPEG/5h3jA01-90class.jpg"
        ),
        new Post(
          "2vhvA02-91class",
          "/2vhvA02",
          "Chuck",
          "./img/JPEG/2vhvA02-91class.jpg"
        ),
        new Post(
          "2yqzA01-92class",
          "/2yqzA01",
          "Chuck",
          "./img/JPEG/2yqzA01-92class.jpg"
        ),
        new Post(
          "2eroA01-93class",
          "/2eroA01",
          "Chuck",
          "./img/JPEG/2eroA01-93class.jpg"
        ),
        new Post(
          "4p2oC01-94class",
          "/4p2oC01",
          "Chuck",
          "./img/JPEG/4p2oC01-94class.jpg"
        ),
        new Post(
          "3mwmA02-95class",
          "/3mwmA02",
          "Chuck",
          "./img/JPEG/3mwmA02-95class.jpg"
        ),
        new Post(
          "2wpdJ00-96class",
          "/2wpdJ00",
          "Chuck",
          "./img/JPEG/2wpdJ00-96class.jpg"
        ),
        new Post(
          "3fn9A02-97class",
          "/3fn9A02",
          "Chuck",
          "./img/JPEG/3fn9A02-97class.jpg"
        ),
        new Post(
          "2on7A01-98class",
          "/2on7A01",
          "Chuck",
          "./img/JPEG/2on7A01-98class.jpg"
        ),
        new Post(
          "4o5vA03-99class",
          "/4o5vA03",
          "Chuck",
          "./img/JPEG/4o5vA03-99class.jpg"
        ),
        new Post(
          "2pmzB07-0class",
          "/2pmzB07",
          "Chuck",
          "./img/JPEG/2pmzB07-0class.jpg"
        ),
      ],
    };
  },
  computed: {
    filteredList() {
      return this.postList.filter((post) => {
        return post.title.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
};
</script>

<style lang="less" scoped>
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
  //width: 480px;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}

html,
body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 16px;
}

div#app {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .search-wrapper {
    position: relative;
    label {
      position: absolute;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.5);
      top: 8px;
      left: 12px;
      z-index: -1;
      transition: 0.15s all ease-in-out;
    }
    input {
      padding: 4px 12px;
      color: rgba(0, 0, 0, 0.7);
      border: 1px solid rgba(0, 0, 0, 0.12);
      transition: 0.15s all ease-in-out;
      background: white;
      &:focus {
        outline: none;
        transform: scale(1.05);
        & + label {
          font-size: 10px;
          transform: translateY(-24px) translateX(-12px);
        }
      }
      &::-webkit-input-placeholder {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.5);
        font-weight: 100;
      }
    }
  }

  .wrapper {
    display: flex;
    //max-width: 444px;
    flex-wrap: wrap;
    padding-top: 12px;
  }

  .card {
    box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px,
      rgba(0, 0, 0, 0.117647) 0px 1px 4px;
    max-width: 124px;
    margin: 12px;
    transition: 0.15s all ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
    a {
      text-decoration: none;
      padding: 12px;
      color: #03a9f4;
      font-size: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        height: 100px;
      }
      small {
        font-size: 10px;
        padding: 4px;
      }
    }
  }

  .hotpink {
    background: hotpink;
  }

  .green {
    background: green;
  }

  .box {
    width: 100px;
    height: 100px;
    border: 1px solid rgba(0, 0, 0, 0.12);
  }
}
</style>
