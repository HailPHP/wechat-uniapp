(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/userGuide"],{"2e97":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement;t._self._c},a=[]},6015:function(t,e,n){"use strict";var i=n("d2ab"),r=n.n(i);r.a},"8d76":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("09bf"),r=n("6852"),a=n("2f62");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={computed:u({},(0,a.mapGetters)(["adData"])),data:function(){return{isShow:!1,toastImg:""}},props:{isReLaunch:{type:Boolean,default:!0},ids:{type:String,default:""},isNoJump:{type:Boolean,default:!1}},created:function(){this.initData()},watch:{adData:function(t,e){this.toastImg||this.initData()}},methods:{initData:function(){if(this.isNoJump){var t=this.adData.A8;return this.toastImg=t?t.value[0].img:""}this.getRandomUrl()},show:function(){if(this.toastImg){var t=(0,r.getStorage)(this.ids+"userGuide");if(t)return void((0,i.VALID_CACHE)(300,t)||(this.isShow=!0));this.isShow=!0}},close:function(t){if(t)return this.isShow=!1;this.isShow=!1,this.$emit("closeBack"),(0,r.setStorage)(this.ids+"userGuide",Date.now())},getRandomUrl:function(){var t=this.adData.A7;if(t&&t.value.length>0){var e=t.value[Math.floor(Math.random()*t.value.length)];this.toastImg=e.img}},imageClick:function(){if(this.close(),this.isNoJump&&t.previewImage({urls:[this.adData.A8.value[0].link]}),this.isReLaunch)return t.reLaunch({url:"/pages/tabBar/home/index"});t.switchTab({url:"/pages/tabBar/home/index"})}},beforeDestroy:function(){this.isShow&&(0,r.setStorage)(this.ids+"userGuide",Date.now())}};e.default=c}).call(this,n("543d")["default"])},bb39:function(t,e,n){"use strict";n.r(e);var i=n("8d76"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},c08d:function(t,e,n){"use strict";n.r(e);var i=n("2e97"),r=n("bb39");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("6015");var o,u=n("f0c5"),s=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);e["default"]=s.exports},d2ab:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/userGuide-create-component',
    {
        'components/userGuide-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("c08d"))
        })
    },
    [['components/userGuide-create-component']]
]);