(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/noLocation/noLocation"],{1868:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("5f4e"),o=n("2f62"),i=n("1d11"),a=n("3fd9"),c=n("6852");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l={data:function(){return{baseUrl:i.fileBaseUrl,tipsMsg:"请检查网络获定位权限"}},onShow:function(){var t=this;wx.getSystemInfo({success:function(e){/IOS/g.test(e.system.toUpperCase())?t.tipsMsg="请打开手机 '设置' > '隐私' > '定位服务'，并允许微信访问位置，以提供优质服务^_^":t.tipsMsg="请打开手机 '设置' > '应用与权限' > '权限管理' 中更改权限配置，以提供优质服务^_^"}})},methods:u(u({},(0,o.mapMutations)({setUserLocation:"login/setUserLocation"})),{},{again:function(){var e=this;t.showLoading({title:"定位中，请稍后···",mask:!0}),(0,r.getUserLocation)(!0).then((function(n){t.hideLoading(),e.setUserLocation(n.data),(0,c.setStorage)("getUserLocation",JSON.stringify({lastModified:Date.now(),data:n.data})),t.reLaunch({url:"/pages/tabBar/personal/index"})})).catch((function(n){if(t.hideLoading(),!n.isWXPermission)return e.ipLocation();setTimeout((function(){t.showToast({icon:"none",title:n.errText})}),200)}))},ipLocation:function(){var e=this;(0,a.ctoolsIshide)().then((function(n){var r=n.data||{},o=r.lat,i=r.lng;if(o&&i)return e.setUserLocation({longitude:i,latitude:o}),(0,c.setStorage)("getUserLocation",JSON.stringify({lastModified:Date.now(),prescription:600,data:{longitude:i,latitude:o}})),void t.reLaunch({url:"/pages/tabBar/personal/index"})}))},linkService:function(){t.switchTab({url:"/pages/tabBar/service/service"})}})};e.default=l}).call(this,n("543d")["default"])},2924:function(t,e,n){"use strict";(function(t){n("cadd");r(n("66fd"));var e=r(n("f211"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"2c9d":function(t,e,n){},"2e61":function(t,e,n){"use strict";var r=n("2c9d"),o=n.n(r);o.a},"40ca":function(t,e,n){"use strict";n.r(e);var r=n("1868"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},db5f:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var o=function(){var t=this,e=t.$createElement;t._self._c},i=[]},f211:function(t,e,n){"use strict";n.r(e);var r=n("db5f"),o=n("40ca");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("2e61");var a,c=n("f0c5"),s=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=s.exports}},[["2924","common/runtime","common/vendor"]]]);