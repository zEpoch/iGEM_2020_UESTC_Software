<template>
  <div>
    <!--====== SHOPPING CART PART START ======-->

    <div class="shopping-cart-wrapper">
      <div class="shopping-cart-canvas">
        <div class="shopping_cart">
          <div class="shopping_cart-top-bar d-flex justify-content-between">
            <h6>Style transfer</h6>
            <button class="shopping-cart-close">
              <i class="ion ion-md-add"></i>
            </button>
          </div>
          <div class="shopping_cart-list-items mt-30">
            Regarding the picture as a variable that can be trained, optimize
            the picture to reduce the content difference with the content
            picture and reduce the style difference with the style picture.
            After iterative training many times, the generated picture will be
            consistent with the content of the content picture. The style of the
            pictures is consistent.
            <!-- <ul>
                        <li>
                            <div class="single-shopping-cart media">
                                <div class="cart-image">
                                    <img src="assets/images/cart-1.jpg" alt="Cart">
                                </div>
                                <div class="cart-content media-body pl-15">
                                    <h6><a>Banana</a></h6>
                                    <span class="quality">QTY: 01</span>
                                    <span class="price">$205.00</span>
                                    <a class="remove" href="#"><i class="fal fa-times"></i></a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="single-shopping-cart media">
                                <div class="cart-image">
                                    <img src="assets/images/cart-2.jpg" alt="Cart">
                                </div>
                                <div class="cart-content media-body pl-15">
                                    <h6><a href="#">Grape</a></h6>
                                    <span class="quality">QTY: 01</span>
                                    <span class="price-discount">$205.00</span>
                                    <span class="price-close">$205.00</span>
                                    <a class="remove" href="#"><i class="fal fa-times"></i></a>
                                </div>
                            </div>
                        </li>
                    </ul> -->
          </div>
          <div class="shopping_cart-btn">
            <!-- <div class="total pt-35 d-flex justify-content-between">
                        <h5>Subtotal:</h5>
                        <p>$240.00</p>
                    </div>
                    <div class="cart-btn pt-25">
                        <a class="main-btn" href="#">View Cart</a>
                        <a class="main-btn main-btn-2" href="#">Checkout</a>
                    </div> -->
          </div>
        </div>
      </div>
      <div class="overlay"></div>
    </div>
    <!--====== SHOPPING CART PART ENDS ======-->
    <section
      class="page-title-area d-flex align-items-center bg_cover"
      style="background-image: url(assets/images/styletransfer.png)"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-title-item text-center">
              <h3 class="title">Style transfer</h3>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="/">Home</a></li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Style transfer
                  </li>
                </ol>
              </nav>
            </div>
            <!-- page title item -->
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- row -->
      <div class="page-title-shape">
        <img src="../../public/assets/images/banner-shape.png" alt="shape" />
      </div>
      <!-- page title shape -->
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
              <el-collapse-item
                title="About Style Transfer"
                name="1"
                align="middle"
              >
                <div align="left">
                  <br />
                  <h5>Real-time style transfer</h5>
                  <br />
                  <p>
                    In March 2016 a group of researchers from Stanford
                    University published a paper which outlined a method for
                    achieving real-time style transfer. They were able to train
                    a neural network to apply a single style to any given
                    content image. Given this ability, a different network could
                    be trained for each different style we wish to apply.
                  </p>
                  <p>
                    The paper, titled
                    <a href="https://arxiv.org/abs/1603.08155"
                      >Perceptual Losses for Real-Time Style Transfer and
                      Super-Resolution</a
                    >
                    by Johnson et. al, shows that it is possible to train a
                    neural network to apply a single style to any given content
                    image with a single forward pass through the network.
                  </p>
                  <p>
                    In this post I’ll give an overview of the method they
                    propose and share some results I obtained from my own
                    implementation in TensorFlow.
                  </p>
                  <br />
                  <h5>Learning to optimise</h5>
                  <br />
                  <p>
                    The
                    <a
                      href="https://shafeentejani.github.io/2016-12-27/style-transfer/"
                      >original algorithm</a
                    >
                    proposed by Gatys et. al formulated a loss function for
                    style transfer and reduced the problem down to one of
                    optimising this loss function. Johnson et. al show that, if
                    we limit ourselves to a single style image, we can train a
                    neural network to solve this optimisation problem for us in
                    real-time and transform any given content image into a
                    styled version.
                  </p>
                  <p>
                    The diagram below gives an overview of the system they
                    propose:
                  </p>
                  <img src="/assets/images/system_architecture.png" center />
                  <p>
                    This system consists of both an image transformation network
                    and a loss calculation network. The image transformation
                    network is a multi-layer convolutional neural network that
                    will transform an input content image <b>C</b> into an
                    output image <b>Y</b>, where <b>Y</b> should have the
                    content of the content image <b>C</b> and the style of a
                    separate style image <b>S</b>.
                  </p>
                  <p>
                    The loss network is used to calculate a loss between our
                    generated output image and our desired content and style
                    images. We calculate loss in the same way as the previous
                    method, by evaluating the content representation of
                    <b>C</b> and the style representation of <b>S</b> and taking
                    the distance between these and the content and style
                    representations of our output image <b>Y</b>. These
                    representations are calculated using the VGG network, which
                    is a network that has be pre-trained for object recognition.
                    You can read a more detailed explanation of the style
                    transfer loss function in my
                    <a
                      href="https://shafeentejani.github.io/2016-12-27/style-transfer/"
                      >earlier post</a
                    >.
                  </p>
                  <p>
                    Given this system, we can then train the image
                    transformation network to reduce the total style transfer
                    loss. To train the network, we pick a fixed style image and
                    use a large batch of different content images as training
                    examples. In their paper, Johnson et. al trained their
                    network on the
                    <a href="http://mscoco.org/">Microsoft COCO dataset </a>-
                    which is an object recognition dataset of 80,000 different
                    images.
                  </p>
                  <p>
                    Training involves using the loss network to evaluate the
                    loss for a given training example and then propagating this
                    error back through every layer in the image transformation
                    network. At each layer we compute the gradient of the
                    layer’s weights with respect to the loss function and use
                    this to make a small adjustment to the weights in the
                    negative direction of the gradient. This will iteratively
                    improve the performance of the network until the loss is
                    below an acceptable threshold. This technique is known as
                    gradient descent via backpropagation and iteratively
                    improves the network weights to reduce the value of the loss
                    function. You can read more about it
                    <a
                      href="http://neuralnetworksanddeeplearning.com/chap2.html"
                      >here</a
                    >
                  </p>
                  <br />
                  <h5>Image transformation network</h5>
                  <br />
                  <p>
                    The diagram below shows the architecture for the image
                    transformation network laid out by Johnson et. al:
                  </p>
                  <br />
                  <img src="/assets/images/image_transform_network.png" />
                  <br />
                  <br />
                  <p>
                    It consists of 3 layers of convolution and ReLU
                    non-linearity, 5 residual blocks, 3 transpose convolutional
                    layers and finally a non-linear tanh layer which produces an
                    output image. Let’s briefly describe what each of these
                    layers are doing.
                  </p>
                  <br />
                  <h5>Downsampling with strided convolution</h5>
                  <br />
                  <p>
                    Convolution layers are used to apply filters to an input
                    image. This is done by moving a fixed-size kernel filter
                    across the input image and applying the convolution
                    operation to the pixels within the kernel window to compute
                    each corresponding pixel in the output image. By default,
                    after each convolution operation we move the kernel window
                    across by 1 pixel. This is known as stride 1 convolution.
                  </p>
                  <br />
                  <img src="/assets/images/convolution_stride_1.gif" />
                  <br />
                  <br />
                  <p>
                    If the input image has size <b>n×m</b> pixels, stride 1
                    convolution with a <b>k×k</b> kernel size generates an
                    output image of size:
                    <b>(n−k+1)×(m−k+1)</b>
                  </p>
                  <br />
                  <p>
                    This is slightly less resolution than our original input
                    image. If we wish to maintain exactly the same resolution we
                    can use a strategy called zero padding, which adds layers of
                    zero-valued pixels around the input image so that the output
                    is still <b>n×m</b> pixels.
                  </p>
                  <br />
                  <br />
                  <img src="/assets/images/convolution_zero_padding.gif" />
                  <br />
                  <br />
                  <p>
                    The first convolution layer in our network is stride 1 but
                    the following two layers are stride 2. This means that each
                    time we move the kernel it is shifted by 2 pixels instead of
                    1, and our output images are now of size <b>n/2×m/2</b>
                  </p>
                  <br />
                  <br />
                  <img src="/assets/images/convolution_stride_2.gif" />
                  <br />
                  <br />
                  <p>
                    Stride 2 has the effect of halving the size of the input
                    image, which is known as <b>downsampling</b>.
                  </p>
                  <p>
                    The main reason for including downsampling layers in a
                    convolutional neural network is to increase the receptive
                    field size of the kernel filter in the layers that follow.
                    As the input image becomes downsampled each pixel in that
                    input will be the result of a calculation involving a larger
                    number of pixels from the original input image. In a sense
                    this will allow kernel filters to have access to a much
                    larger part of the original input image without having to
                    increase the kernel size. The reason this is desirable is
                    because style transfer involves applying a given style to an
                    entire image in a coherent way, and so the more information
                    each filter has about the original input image the more
                    coherently our network can apply the style.
                  </p>
                  <p>
                    An alternative way to introduce downsampling in this
                    convolution neural network would have been through a pooling
                    layer which also reduces the image size.
                  </p>
                  <br />
                  <br />
                  <h5>Upsampling with fractionally strided convolution</h5>
                  <br />
                  <br />
                  <p>
                    After applying both stride 2 convolution layers our image
                    resolution is reduced to 1/4 of it’s original size. The
                    desired output of our transformation network is a styled
                    image with the same resolution as the original content
                    image. In order to achieve this we introduce two convolution
                    layers with stride 1/2. These are sometimes referred to as
                    transpose convolution layers or deconvolution layers. These
                    layers have the effect of increasing the output image size,
                    which is known as <b>upsampling</b>.
                  </p>
                  <p>
                    Convolution with stride 1/2 involves moving the kernel
                    window across by half a pixel each time. This results in an
                    output image that has double the resolution of the input. In
                    reality we can’t actually move our kernel along by half a
                    pixel, so instead we pad the existing pixels with
                    zero-valued pixels and carry out a normal stride 1
                    convolution as shown below.
                  </p>
                  <br />
                  <img src="/assets/images/convolution_stride_half.gif" />
                  <br />
                  <p>
                    This achieves the same effect of double the image resolution
                    and results in the final image being the same resolution as
                    our original input image.
                  </p>
                  <br />
                  <h5>Residual layers</h5>
                  <br />
                  <p>
                    Between the downsampling and upsampling layers we have 5
                    residual layers. These are stride 1 convolution layers but
                    the difference between these and normal convolution layers
                    is that we add the input of the network back to the
                    generated output.
                  </p>
                  <br />
                  <img src="/assets/images/residual_layer.png" />
                  <br />
                  <p>
                    The reason for using residual layers in a network is that
                    for certain tasks it makes it easier to train the network
                    because it has less work to do. Our layer doesn’t need to
                    learn how to take our input and generate a new output - but
                    instead it just needs to learn how to adjust our input to
                    produce our output. They are called residual layers because
                    we are just trying to learn the difference, or residual,
                    between our input and our desired output.
                  </p>
                  <p>
                    For a task like style transfer using residual layers makes
                    sense as we know that our generated output image should be
                    somewhat similar to our input image so we can help the
                    network by only requiring it to learn the residual.
                  </p>
                  <br />
                  <h5>Constraining the output with a tanh layer</h5>
                  <br />
                  <p>
                    In order to process an image in a neural network it is first
                    represented as a matrix of integers which are the values of
                    each pixel in the image. These have a range of 0 to 255.
                    Each layer in a neural network performs a mathematical
                    operation on its input to produce an output and there is no
                    inherent constraint in these layers that keeps the output
                    bounded between 0 and 255.
                  </p>
                  <p>
                    After our final layer we want to produce a valid image as
                    this is the final result of our style transfer. This means
                    the generated output must contain values that are all in the
                    valid pixel range of 0 to 255. To achieve this we introduce
                    a final non-linear layer which applies a scaled <b>tanh</b>
                    function to each element in the output.
                  </p>
                  <br />
                  <img src="/assets/images/tanh.png" />
                  <br />
                  <p>
                    The <b>tanh</b> function is bound between -1 and 1 so by applying
                    this and rescaling the result we can constrain our generated
                    image to have valid pixel values.
                  </p>
                  <br/>
                  <p>output(x)=255×(tanh⁡(x)+1)/2</p>
                  <br/>
                  <h5>Results</h5>
                  <br/>
                  <p>Here is a sample of some of the results achieved by Zhuochao Min et. al:</p>
                  <br/>
                  <img src="/assets/images/Rain Princess.png" />
                  <img src="/assets/images/mont.png" />
                  <img src="/assets/images/la muse.png" />
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </div>
    </div>
    <figcaption style="cursor: default" class="container2">
      <h2>
        <strong
          style="color: orange; background:#0b2e13; border-radius: 4px;padding-left: 8px;padding-right: 8px"
        >
          Please Select A Masterpiece
        </strong>
      </h2>
    </figcaption>
    <br />
    <div class="container" style="background-color: #cbd3da ">
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div
                v-on:click="style_transfer('la_muse')"
                class="single-product mt-30"
              >
                <figure class="snip1543">
                  <img
                    src="../../public/img/cpkts/la_muse.jpg"
                    alt="product"
                    style="cursor:pointer"
                  />
                  <figcaption style="cursor:pointer">
                    <h3>La Muse</h3>
                    <p>By Pablo Picasso</p>
                  </figcaption>
                </figure>
                <h6 class="title">La Muse</h6>
              </div>
              <!-- single product -->
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div
                v-on:click="style_transfer('rain_princess')"
                class="single-product mt-30"
              >
                <figure class="snip1543">
                  <img
                    src="../../public/img/cpkts/rain_princess.jpg"
                    alt="product"
                    style="cursor:pointer"
                  />
                  <figcaption style="cursor:pointer">
                    <h3>Rain Princess</h3>
                    <p>By Leonid Afremov</p>
                  </figcaption>
                </figure>
                <h6 class="title">Rain Princess</h6>
              </div>
              <!-- single product -->
            </div>

            <div class="col-lg-3 col-md-4 col-sm-6">
              <div
                v-on:click="style_transfer('mont')"
                class="single-product mt-30"
              >
                <figure class="snip1543">
                  <img
                    src="../../public/img/cpkts/mont.jpg"
                    alt="product"
                    style="cursor:pointer"
                  />
                  <figcaption style="cursor:pointer">
                    <h4>Mont Sainte-Victoire</h4>
                    <p>By Paul Cézanne</p>
                  </figcaption>
                </figure>
                <h6 class="title">Mont Sainte-Victoire</h6>
              </div>
              <!-- single product -->
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div
                v-on:click="style_transfer('Composition8')"
                class="single-product mt-30"
              >
                <figure class="snip1543">
                  <img
                    src="../../public/img/cpkts/Composition8.jpg"
                    alt="product"
                    style="cursor:pointer"
                  />
                  <figcaption style="cursor:pointer">
                    <h3>Composition VIII</h3>
                    <p>By Василий Кандинский</p>
                  </figcaption>
                </figure>
                <h6 class="title">Composition VIII</h6>
              </div>
              <!-- single product -->
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div
                v-on:click="style_transfer('scream')"
                class="single-product mt-30"
              >
                <figure class="snip1543">
                  <img
                    src="../../public/img/cpkts/scream.jpg"
                    alt="product"
                    style="cursor:pointer"
                  />
                  <figcaption style="cursor:pointer">
                    <h3>The Scream</h3>
                    <p>By Edvard Munch</p>
                  </figcaption>
                </figure>

                <h6 class="title">The Scream</h6>
              </div>
              <!-- single product -->
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div
                v-on:click="style_transfer('wreck')"
                class="single-product mt-30"
              >
                <figure class="snip1543">
                  <img
                    src="../../public/img/cpkts/wreck.jpg"
                    alt="product"
                    style="cursor:pointer"
                  />
                  <figcaption style="cursor:pointer">
                    <h4>The Shipwreck of the Minotaur</h4>
                    <p>By Joseph Mallord William Turner</p>
                  </figcaption>
                </figure>

                <h6 class="title">The Shipwreck of the Minotaur</h6>
              </div>
              <!-- single product -->
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div
                v-on:click="style_transfer('udnie')"
                class="single-product mt-30"
              >
                <figure class="snip1543">
                  <img
                    src="../../public/img/cpkts/udnie.jpg"
                    alt="product"
                    style="cursor:pointer"
                  />
                  <figcaption style="cursor:pointer">
                    <h4>Udnie, Young American Girl</h4>
                    <p>By Francis Picabia</p>
                  </figcaption>
                </figure>

                <h6 class="title">Udnie, Young American Girl</h6>
              </div>
              <!-- single product -->
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div
                v-on:click="style_transfer('wave')"
                class="single-product mt-30"
              >
                <figure class="snip1543">
                  <img
                    src="../../public/img/cpkts/wave.jpg"
                    alt="product"
                    style="cursor:pointer"
                  />

                  <figcaption style="cursor:pointer">
                    <h4>The Great Wave of Kanagawa</h4>
                    <p>By Katsushika Hokusai</p>
                  </figcaption>
                </figure>
                <h6 class="title">The Great Wave of Kanagawa</h6>
              </div>
              <!-- single product -->
            </div>

            <div class="col-lg-3 col-md-4 col-sm-6">
              <div
                v-on:click="style_transfer('SunnyHugePeak')"
                class="single-product mt-30"
              >
                <figure class="snip1543">
                  <img
                    src="../../public/img/cpkts/SunnyHugePeak.jpg"
                    alt="product"
                    style="cursor:pointer"
                  />
                  <figcaption style="cursor:pointer">
                    <h3>Sunny Huge Peak 巨然晴峰图</h3>
                    <p>By Zhang DaQian</p>
                  </figcaption>
                </figure>
                <h6 class="title">Sunny Huge Peak</h6>
              </div>
              <!-- single product -->
            </div>
          </div>
        </div>
        <!-- row -->
      </div>
    </div>

    <div id="form-modal" class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <section
              class="contact-touch-area pt-3 pb-3"
              v-bind:style="{ backgroundImage: 'url(' + cpkt_url + ')' }"
            >
              <div class="container">
                <div class="contact-touch-part">
                  <div class="row">
                    <div class="col-lg-12">
                      <!--                                            <div class="col-lg-3 ">-->
                      <!--                                                <div class="contact-touch-thumb d-none d-lg-block ">-->
                      <!--                                                    <img v-bind:src="cpkt_url"-->
                      <!--                                                         alt="contact" >-->
                      <!--                                                </div>-->
                      <!--                                            </div>-->
                      <div class="secton-title text-center">
                        <h5 class="title" style="color: white">
                          Upload A Image
                        </h5>
                        <p style="color: white">
                          Please upload a image that less than 10Mb.
                        </p>
                      </div>
                    </div>
                  </div>
                  <form>
                    <div class="row">
                      <div class="col-sm-10">
                        <file
                          v-bind:cpkt="cpkt"
                          v-bind:input-id="'image-upload'"
                          v-bind:text="button_string"
                          v-bind:suffixs="['jpg', 'jpeg', 'png']"
                          v-bind:after-upload="afterUpload"
                        >
                        </file>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>

    <div id="another-modal" class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content " style="background-color: #cbd3da">
          <modal-header>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              style="color: #0b2e13"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div class="input-box mt-25">
              <button class="main-btn" v-on:click="download">
                Download <i class="ion ion-ios-download"></i>
              </button></div
          ></modal-header>
          <div class="modal-body">
            <img
              style="border-radius: 6px"
              :src="base64_string"
              class="img-responsive center-block"
            />
            <!-- /.modal-content -->
          </div>
          <!-- /.modal-dialog -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import File from "./file";

export default {
  name: "style_transfer",
  components: {
    File,
  },

  data() {
    return {
      // cpkts: ["la_muse", "rain_princess", "scream", "udnie", "wave", "wreck"],
      cpkt: "",
      cpkt_url: "",
      base64_string: "",
      button_string: "Upload",
      // backgroundImageUrl: require("./../../public/img/home.png"),
    };
  },

  methods: {
    style_transfer(cpkt) {
      let _this = this;
      _this.cpkt = cpkt;
      _this.cpkt_url = require("./../../public/img/cpkts/" +
        this.cpkt.toString() +
        ".jpg");
      $("#form-modal").modal("show");
    },

    afterUpload(resp) {
      $("#form-modal").modal("hide");
      this.base64_string = resp.toString();
      $("#another-modal").modal("show");
    },

    download() {
      // 这里是获取到的图片base64编码,这里只是个例子哈，要自行编码图片替换这里才能测试看到效果
      let imgUrl = this.base64_string;

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
};

$(".hover").mouseleave(function() {
  $(this).removeClass("hover");
});
</script>
<style scoped>
.container {
  border-radius: 10px;
  padding: 60px;
}

.container2 {
  border-radius: 6px;
  padding: 20px;
}

@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro);
@import url(https://fonts.googleapis.com/css?family=Teko:700);

.snip1543 {
  border-radius: 20px;

  background-color: #fff;
  color: #ffffff;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 16px;
  margin: 10px;
  max-width: 315px;
  min-width: 230px;
  overflow: hidden;
  position: relative;
  text-align: left;
  width: 100%;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

.snip1543 *,
.snip1543 *:before,
.snip1543 *:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.45s ease;
  transition: all 0.45s ease;
}

.snip1543 img {
  border-radius: 20px;
  backface-visibility: hidden;
  max-width: 100%;
  vertical-align: top;
}

.snip1543:before,
.snip1543:after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  content: "";
  background-color: #229262;
  opacity: 0.5;
  -webkit-transition: all 0.45s ease;
  transition: all 0.45s ease;
}

.snip1543:before {
  -webkit-transform: skew(30deg) translateX(-80%);
  transform: skew(30deg) translateX(-80%);
}

.snip1543:after {
  -webkit-transform: skew(-30deg) translateX(-70%);
  transform: skew(-30deg) translateX(-70%);
}

.snip1543 figcaption {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 1;
  bottom: 0;
  padding: 25px 40% 25px 20px;
}

.snip1543 figcaption:before,
.snip1543 figcaption:after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #229262;
  box-shadow: 0 0 20px rgba(255, 255, 255, 255);
  content: "";
  opacity: 0.5;
  z-index: -1;
}

.snip1543 figcaption:before {
  -webkit-transform: skew(30deg) translateX(-100%);
  transform: skew(30deg) translateX(-100%);
}

.snip1543 figcaption:after {
  -webkit-transform: skew(-30deg) translateX(-90%);
  transform: skew(-30deg) translateX(-90%);
}

.snip1543 h3,
.snip1543 h4,
.snip1543 p {
  margin: 0;
  opacity: 0;
  letter-spacing: 1px;
  color: white;
}

.snip1543 h3 {
  font-family: "Teko", sans-serif;
  font-size: 36px;
  font-weight: 700;
  line-height: 1em;
  text-transform: uppercase;
  color: white;
}

.snip1543 h4 {
  font-family: "Teko", sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1em;
  text-transform: uppercase;
  color: white;
}

.snip1543 p {
  font-size: 0.9em;
}

.snip1543 a {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.snip1543:hover h3,
.snip1543.hover h3,
.snip1543:hover h4,
.snip1543.hover h4,
.snip1543:hover p,
.snip1543.hover p {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  opacity: 0.9;
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}

.snip1543:hover:before,
.snip1543.hover:before {
  -webkit-transform: skew(30deg) translateX(-20%);
  transform: skew(30deg) translateX(-20%);
  -webkit-transition-delay: 0.05s;
  transition-delay: 0.05s;
}

.snip1543:hover:after,
.snip1543.hover:after {
  -webkit-transform: skew(-30deg) translateX(-10%);
  transform: skew(-30deg) translateX(-10%);
}

.snip1543:hover figcaption:before,
.snip1543.hover figcaption:before {
  -webkit-transform: skew(30deg) translateX(-40%);
  transform: skew(30deg) translateX(-40%);
  -webkit-transition-delay: 0.15s;
  transition-delay: 0.15s;
}

.snip1543:hover figcaption:after,
.snip1543.hover figcaption:after {
  -webkit-transform: skew(-30deg) translateX(-30%);
  transform: skew(-30deg) translateX(-30%);
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}
</style>
