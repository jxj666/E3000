/*
 * @Description:
 * @Author: jinxiaojian
 * @Email: jinxiaojian@youxin.com
 * @Date: 2019-11-20 16:45:19
 * @LastEditTime: 2020-06-10 10:45:20
 * @LastEditors: jinxiaojian
 */

var arr = str.split("<br />");
var app = new Vue({
  el: "#app",
  data: {
    arr: arr,
    search: "",
  },
  computed: {
    re_arr() {
      var arr = this.arr || [];
      if (!this.search) {
        return arr;
      } else {
        var reg = new RegExp(`^${this.search}`, "i");
        var arr1 = arr.filter(x => {
          return reg.test(x.split(" ")[1]);
        });
        return arr1;
      }
    },
  },
  created() {},
  methods: {},
});
