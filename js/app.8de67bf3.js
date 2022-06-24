(function(){"use strict";var e={7176:function(e,t,o){var i=o(8935),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("mainPage")],1)},r=[],l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"hello"},[i("el-container",[i("el-header",{staticStyle:{"text-align":"left",color:"#409EFF","font-size":"20px","line-height":"60px","border-bottom":"4px solid #409EFF"}},[i("img",{attrs:{src:o(2923),alt:""}}),e._v(" 可选色谱 V4.0.0 "),i("a",{staticStyle:{color:"darkgray","font-size":"20px"},attrs:{href:"https://peise.designcolors.cc"}},[i("i",{staticClass:"el-icon-link"}),e._v("转到配色工具")]),i("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.activeIndex,mode:"horizontal"},on:{select:e.handleSelect}},[i("el-menu-item",{attrs:{index:"1"},on:{click:e.changeToRed}},[e._v("红")]),i("el-menu-item",{attrs:{index:"2"},on:{click:e.changeToPurple}},[e._v("紫")]),i("el-menu-item",{attrs:{index:"3"},on:{click:e.changeToGray}},[e._v("灰")]),i("el-menu-item",{attrs:{index:"4"},on:{click:e.changeToBlue}},[e._v("蓝")]),i("el-menu-item",{attrs:{index:"5"},on:{click:e.changeToWhite}},[e._v("白")]),i("el-menu-item",{attrs:{index:"6"},on:{click:e.changeToCyan}},[e._v("青")]),i("el-menu-item",{attrs:{index:"7"},on:{click:e.changeToGreen}},[e._v("绿")]),i("el-menu-item",{attrs:{index:"8"},on:{click:e.changeToYellow}},[e._v("黄")]),i("el-menu-item",{attrs:{index:"9"},on:{click:e.changeToChange}},[e._v("渐变")])],1)],1),i("br"),i("br"),i("br"),i("br"),i("br"),i("el-container",[i("el-main",[i("el-steps",{attrs:{active:3,"align-center":""}},[i("el-step",{attrs:{title:"点击上方选项卡选取色系"}}),i("el-step",{attrs:{title:"复制16进制色值"}}),i("el-step",{attrs:{title:"点击上方链接“转到配色工具”进行配色"}})],1),i("br"),0==e.filtColorList.length?i("el-skeleton",{attrs:{animated:""}}):e._e(),e._l(e.filtColorList,(function(t){return i("div",{key:t.colorValueHex,attrs:{id:"colorsItems"}},[i("div",{attrs:{id:"oneColor"},on:{click:function(o){return e.chooseColor(t.colorValueHex,t.name,t.bgi)}}},[i("div",{style:{backgroundColor:t.colorValueHex,backgroundImage:t.bgi},attrs:{id:"colorPadding"}}),i("div",{attrs:{id:"colorInfo"}},[e._v(" "+e._s(t.name)+" "),i("br"),e._v(" "+e._s(t.colorValueHex)+" "),i("br"),7==t.colorValueHex.length?i("span",[e._v(e._s(e.hexToRgb(t.colorValueHex)))]):e._e()])])])}))],2)],1)],1),i("el-footer",[i("br"),e._v(" ©ZhaoYide www.designcolors.cc "+e._s(e.years)+" "),i("br")])],1)},s=[],a=o(4029),c=o.n(a),u={name:"mainPage",props:{msg:String},data(){return{searchInputIndex:"",filtColorList:[],colorList:[],color1:"",color2:"",color1Name:"",color2Name:"",bgi1:"",bgi2:"",distenceOfTwoColors:""}},methods:{isMobile(){const e=navigator.userAgent.toLowerCase();/mobile|android|iphone|ipod|phone|ipad/i.test(e)?alert("当前使用的为移动端设备，为确保使用体验，建议使用电脑打开。"):(console.log(/mobile|android|iphone|ipod|phone|ipad/i.test(e)),console.log(e))},changeToRed(){this.filtColorList=this.colorList.filter((e=>-1!==e.name.indexOf("红")))},changeToPurple(){this.filtColorList=this.colorList.filter((e=>-1!==e.name.indexOf("紫")))},changeToGray(){this.filtColorList=this.colorList.filter((e=>-1!==e.name.indexOf("灰")))},changeToWhite(){this.filtColorList=this.colorList.filter((e=>-1!==e.name.indexOf("白")))},changeToBlue(){this.filtColorList=this.colorList.filter((e=>-1!==e.name.indexOf("蓝")))},changeToCyan(){this.filtColorList=this.colorList.filter((e=>-1!==e.name.indexOf("青")))},changeToGreen(){this.filtColorList=this.colorList.filter((e=>-1!==e.name.indexOf("绿")))},changeToYellow(){this.filtColorList=this.colorList.filter((e=>-1!==e.name.indexOf("黄")))},showColorHex(e,t){this.$notify.info({duration:3e3,title:"颜色提示",message:"Name:"+e+"               Hex:"+t+"               "+this.hexToRgb(t)})},hexToRgb(e){return"RGB("+parseInt("0x"+e.slice(1,3))+","+parseInt("0x"+e.slice(3,5))+","+parseInt("0x"+e.slice(5,7))+")"},hexToCMYK(e){let t=parseInt("0x"+e.slice(1,3)),o=parseInt("0x"+e.slice(3,5)),i=parseInt("0x"+e.slice(5,7)),n=255-t,r=255-o,l=255-i,s=n<r?n:r;return s=s<l?s:l,n-=s,r-=s,l-=s,"CMYK("+n+","+r+","+l+","+s+")"},changeToChange(){this.$notify.warning({duration:5e3,title:"注意！",message:"渐变色不提供RGB，请使用16进制色值，RGB会在之后的版本中进行更新"}),this.filtColorList=this.colorList.filter((e=>-1!==e.name.indexOf("渐变")))},chooseColor(e,t,o){""==this.color1&&""!=this.color2?(this.color1Name=t,this.color1=e,this.bgi1=o):""!==this.color1&&""==this.color2?(this.color2Name=t,this.color2=e,this.bgi2=o):""==this.color1&&""==this.color2?(this.color1Name=t,this.color1=e,this.bgi1=o):""!=this.color1&&""!=this.color2&&(this.color2="",this.color1="",this.color1Name="",this.color2Name="",this.bgi1="",this.bgi2="",this.color1=e,this.color1Name=t,this.bgi1=o)}},computed:{years(){var e=new Date;let t=e.getFullYear(),o=t+1;return t+"~"+o}},mounted(){this.isMobile();const e=this;c().getJSON("./colorList.json",(function(t){e.colorList=t,console.log(t)})),console.log(e.filtColorList)}},h=u,f=o(1001),d=(0,f.Z)(h,l,s,!1,null,"72a6117a",null),g=d.exports,m={name:"App",components:{mainPage:g}},p=m,x=(0,f.Z)(p,n,r,!1,null,null,null),b=x.exports,v=o(4549),A=o.n(v);i["default"].config.productionTip=!1,i["default"].use(A()),new i["default"]({render:e=>e(b)}).$mount("#app")},2923:function(e){e.exports="data:image/png;base64,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"}},t={};function o(i){var n=t[i];if(void 0!==n)return n.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(t,i,n,r){if(!i){var l=1/0;for(u=0;u<e.length;u++){i=e[u][0],n=e[u][1],r=e[u][2];for(var s=!0,a=0;a<i.length;a++)(!1&r||l>=r)&&Object.keys(o.O).every((function(e){return o.O[e](i[a])}))?i.splice(a--,1):(s=!1,r<l&&(l=r));if(s){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[i,n,r]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,r,l=i[0],s=i[1],a=i[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(a)var u=a(o)}for(t&&t(i);c<l.length;c++)r=l[c],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(u)},i=self["webpackChunkcolors"]=self["webpackChunkcolors"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=o.O(void 0,[998],(function(){return o(7176)}));i=o.O(i)})();
//# sourceMappingURL=app.8de67bf3.js.map