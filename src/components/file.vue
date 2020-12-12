<template>
  <div>
    <div class="col-lg-12">
      <div class="input-box mt-35 ml-60  text-center">
        <button type="button" v-on:click="selectFile()">
          {{ text }}
        </button>
        <input
          v-show="0"
          class="hidden"
          type="file"
          ref="file"
          v-on:change="uploadFile()"
          v-bind:id="inputId + '-input'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "file",
  props: {
    cpkt: {
      default: "wave",
    },
    text: {
      default: "ddd",
    },
    inputId: {
      default: "file-upload",
    },
    suffixs: {
      default: [],
    },
    afterUpload: {
      type: Function,
      default: null,
    },
  },
  data: function() {
    return {};
  },
  methods: {
    uploadFile() {
      let _this = this;
      let formData = new window.FormData();
      let file = _this.$refs.file.files[0];

      // 判断文件格式
      let suffixs = _this.suffixs;
      let fileName = file.name;
      let suffix = fileName
        .substring(fileName.lastIndexOf(".") + 1, fileName.length)
        .toLowerCase();
      let validateSuffix = false;
      for (let i = 0; i < suffixs.length; i++) {
        if (suffixs[i].toLowerCase() === suffix) {
          validateSuffix = true;
          break;
        }
      }
      if (!validateSuffix) {
        // Toast.warning("文件格式不正确！只支持上传：" + suffixs.join(","));
        $("#" + _this.inputId + "-input").val("");
        return;
      }

      // key："file"必须和后端controller参数名一致
      formData.append("input_image", file);
      // Loading.show();
      _this.text = "Loading...";
      axios
        .post("http://104.168.165.152:5000/style-transfer/" + this.cpkt, formData)
        .then((response) => {
          // Loading.hide();
          _this.text = "Upload";
          let resp = response.data;
          _this.afterUpload(resp);
          $("#" + _this.inputId + "-input").val("");
        });
    },

    selectFile() {
      let _this = this;
      $("#" + _this.inputId + "-input").trigger("click");
    },
  },
};
</script>
