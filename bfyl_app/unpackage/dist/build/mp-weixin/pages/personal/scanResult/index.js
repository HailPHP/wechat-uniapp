(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/personal/scanResult/index"],{"19ac":function(e,t,n){"use strict";n.r(t);var r=n("d84e"),o=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=o.a},"5d49":function(e,t,n){},6888:function(e,t,n){"use strict";var r=n("5d49"),o=n.n(r);o.a},"6e07":function(e,t,n){"use strict";n.r(t);var r=n("9369"),o=n("19ac");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("6888");var i,u=n("f0c5"),c=Object(u["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);t["default"]=c.exports},9369:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}));var o=function(){var e=this,t=e.$createElement;e._self._c},a=[]},d84e:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("1d11"),o=n("2f62");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c={onLoad:function(e){this.data=JSON.parse(decodeURIComponent(e.data)),this.type=Number(e.type),this.path+="type="+e.type+"&data="+e.data,1===this.type&&this.getUserInfo()},data:function(){return{data:{name:"",end_time:""},type:1,fileBaseUrl:"https://test-file.y1b.cn/public/img/bfxn/202103/",path:"/pages/personal/scanResult/index?"}},computed:i({},(0,o.mapGetters)(["token"])),methods:i(i({},(0,o.mapActions)({getUserInfo:"login/getUserInfo"})),{},{goShopMall:function(){this.$router.navigateTo({url:"/pages/webview/webview?link="+encodeURIComponent(r.baseUrl+"/api/txjifen/txlogin?way=2&token="+this.token+"&random="+Date.now())})},gowebview:function(){if(!this.data.url)return this.$router.redirectTo({url:"/pages/personal/welfare/index"});this.$router.navigateTo({url:"/pages/webview/webview?link="+encodeURIComponent(this.data.url)})},goAgreementLook:function(){e.navigateTo({url:"/pages/webview/webview?link="+encodeURIComponent("https://new-test.y1b.cn/index/index/creditsrule.html")})}})};t.default=c}).call(this,n("543d")["default"])},e765:function(e,t,n){"use strict";(function(e){n("cadd");r(n("66fd"));var t=r(n("6e07"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])}},[["e765","common/runtime","common/vendor"]]]);