(function(t){function e(e){for(var n,o,r=e[0],c=e[1],l=e[2],f=0,d=[];f<r.length;f++)o=r[f],a[o]&&d.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,r=1;r<i.length;r++){var c=i[r];0!==a[c]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},a={app:0},s=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/blockchain-demo/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("64a9"),a=i.n(n);a.a},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("b-row",[i("b-col"),i("b-col",{attrs:{cols:"5"}},[i("Blockchain")],1),i("b-col",[i("ResetBlockchain")],1)],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Blockchain"},[i("h1",{staticClass:"mb-5"},[t._v("BLOCKCHAIN")]),t._l(t.blockchain,function(t){return i("Block",{key:t.index,attrs:{item:t}})}),t.blockchain.length>0?i("AddBlock",{staticClass:"mb-5"}):i("div",[i("br"),i("b-spinner",{attrs:{type:"grow"}}),i("div",[t._v("Mining Genesis Block...")])],1)],2)},r=[],c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Block"},[t.item.index>0?i("i",{staticClass:"fas fa-angle-down fa-2x mb-3"}):t._e(),i("b-card",{staticClass:"p-3 mb-3",class:{shadow:t.hover},on:{mouseover:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1}}},[i("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:"DATA"}},[i("b-input",{attrs:{id:"data",placeholder:""},on:{input:function(e){return t.updateHash(t.item)}},model:{value:t.item.data,callback:function(e){t.$set(t.item,"data",e)},expression:"item.data"}})],1),i("br"),i("b-card-text",{staticClass:"text-left"},[i("small",[t._v("PREVIOUS HASH \n                    "),t.item.index>=1?i("span",[t.isValidBlock(t.getPreviousBlock(t.item.index))?i("span",[i("b-alert",{attrs:{show:"",variant:"success"}},[t._v(t._s(t.item.previousHash))])],1):i("span",[i("b-alert",{attrs:{show:"",variant:"danger"}},[t._v(t._s(t.item.previousHash))])],1)]):t._e()])]),i("b-card-text",{staticClass:"text-left"},[i("small",[t._v("HASH \n                "),t.isValidBlock(t.item)?i("span",[i("b-alert",{attrs:{show:"",variant:"success"}},[t._v(t._s(t.item.hash))])],1):i("span",[i("b-alert",{attrs:{show:"",variant:"danger"}},[t._v(t._s(t.item.hash))])],1)])]),i("b-card-text",{staticClass:"text-left"},[0===t.item.index?i("span",[i("strong",[t._v("GENESIS BLOCK")])]):i("span",[i("strong",[t._v("BLOCK # "+t._s(t.item.index)+" ")])]),i("span",[i("small",[t._v("  on "+t._s(t.item.timestamp)+" ")])]),t.isValidBlock(t.item)?i("span",{staticStyle:{float:"right"}},[t._v(t._s(t.item.nonce))]):i("span",{staticStyle:{float:"right"}},[i("b-button",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.right",value:"Re-mine block!",expression:"'Re-mine block!'",modifiers:{hover:!0,right:!0}}],attrs:{disabled:t.isRevalidationInProgress(t.item.index),variant:"primary"},on:{click:function(e){return t.revalidateBlock(t.item)}}},[t.isRevalidationInProgress(t.item.index)?i("span",[t._v("Re-validating...")]):i("i",{staticClass:"fas fa-cogs"})])],1)])],1)],1)},l=[],u=(i("6762"),i("2fdb"),{name:"Block",data:function(){return{hover:!1}},props:["item"],methods:{updateHash:function(t){this.$store.commit("modifyData",{index:t.index,data:t.data})},isValidBlock:function(t){return this.$store.getters.isValidBlock(t)},revalidateBlock:function(t){this.$store.dispatch("revalidateBlock",t)},getPreviousBlock:function(t){return this.$store.getters.getPreviousBlock(t)},isRevalidationInProgress:function(t){return this.$store.state.revalidatingInProgress.includes(t)}}}),f=u,d=i("2877"),h=Object(d["a"])(f,c,l,!1,null,null,null),p=h.exports,m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"AddBlock"},[i("b-card",{staticClass:"ml-5 mr-5 mt-5 p-3",class:{shadow:t.hover},on:{mouseover:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1}}},[i("b-form",{on:{submit:t.onSubmit}},[i("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:"DATA"}},[i("b-input",{attrs:{id:"data",placeholder:"Enter your data here",disabled:t.isMining},model:{value:t.inputData,callback:function(e){t.inputData=e},expression:"inputData"}})],1),i("br"),i("b-button",{attrs:{disabled:t.isMining,type:"submit",variant:"primary"}},[i("i",{staticClass:"fas fa-plus-circle"}),t._v("  New Block")])],1),t.isMining?i("div",[i("br"),i("b-spinner",{attrs:{type:"grow",label:"Loading..."}}),i("div",[t._v("Mining block...")])],1):t._e()],1)],1)},v=[],b={name:"AddBlock",data:function(){return{inputData:"",hover:!1}},computed:{isMining:function(){return this.$store.getters.isMining}},methods:{onSubmit:function(t){t.preventDefault(),this.$store.dispatch("createBlockAndAddToChain",this.inputData),this.inputData=""}}},k=b,g=Object(d["a"])(k,m,v,!1,null,null,null),y=g.exports,B={name:"Blockchain",components:{Block:p,AddBlock:y},computed:{blockchain:function(){return this.$store.state.blockchain}},beforeCreate:function(){this.$store.commit("setDifficulty",4),this.$store.dispatch("createBlockAndAddToChain","Welcome to Blockchain Demo!")}},x=B,_=Object(d["a"])(x,o,r,!1,null,null,null),w=_.exports,D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ResetBlockchain"},[i("p",[i("small",[t._v("Current Difficulty Level : "+t._s(t.currentDifficulty))])]),i("b-button",{staticClass:"mb-2",attrs:{variant:"outline-secondary"},on:{click:t.showHideDifficulty}},[t._v("Reset Blockchain")]),t.showDifficulty?i("b-container",[i("b-button-toolbar",{staticClass:"mx-auto",staticStyle:{width:"200px"}},[i("b-input-group",{staticClass:"mr-1",staticStyle:{width:"120px"},attrs:{size:"sm",prepend:"Difficulty"}},[i("b-form-input",{attrs:{disabled:""},model:{value:t.difficulty,callback:function(e){t.difficulty=e},expression:"difficulty"}})],1),i("b-button-group",{attrs:{size:"sm"}},[i("b-button",{on:{click:t.incrementDifficulty}},[t._v("+")]),i("b-button",{on:{click:t.decrementDifficulty}},[t._v("-")])],1)],1),i("b-button",{staticClass:"mt-2 mx-auto",staticStyle:{width:"100px"},attrs:{variant:"primary",size:"sm"},on:{click:t.reset}},[t._v("Go!")])],1):t._e()],1)},C=[],O={name:"ResetBlockchain",data:function(){return{showDifficulty:!1,difficulty:4}},computed:{currentDifficulty:function(){return this.$store.state.difficulty}},methods:{reset:function(){this.showDifficulty=!1,this.$store.commit("emptyBlockchain"),this.$store.commit("setDifficulty",this.difficulty),this.$store.dispatch("createBlockAndAddToChain","Welcome to Blockchain Demo!")},showHideDifficulty:function(){this.showDifficulty=!0},incrementDifficulty:function(){this.difficulty++},decrementDifficulty:function(){this.difficulty--}}},S=O,$=Object(d["a"])(S,D,C,!1,null,null,null),A=$.exports,H={name:"app",components:{Blockchain:w,ResetBlockchain:A}},P=H,M=(i("034f"),Object(d["a"])(P,a,s,!1,null,null,null)),j=M.exports,R=i("9f7b"),I=i.n(R),L=(i("f9e3"),i("2dd8"),i("f499")),E=i.n(L),T=i("2f62"),V=(i("6b54"),i("d225")),N=i("b0b4"),z=i("e7ea"),G=function(){function t(){Object(V["a"])(this,t)}return Object(N["a"])(t,[{key:"setDifficulty",value:function(t){this.difficulty=t}},{key:"hashBlock",value:function(t){var e=E()(t),i=this.toHex(e);return z["ethers"].utils.keccak256(i)}},{key:"calculateNonce",value:function(t){var e=JSON.parse(E()(t)),i=0;e["nonce"]=i;var n=this.hashBlock(e);while(n.substring(2,this.difficulty+2)!==this.getLeadingZeros())i++,e["nonce"]=i,n=this.hashBlock(e);return i}},{key:"verifyBlock",value:function(t){var e={timestamp:t.timestamp,data:t.data,previousHash:t.previousHash,index:t.index,nonce:t.nonce},i=this.hashBlock(e);return i===t.hash}},{key:"getLeadingZeros",value:function(){for(var t="",e=0;e<this.difficulty;e++)t=t.concat("0");return t}},{key:"toHex",value:function(t){for(var e="",i=0;i<t.length;i++)e+=t.charCodeAt(i).toString(16);return"0x"+e}}]),t}(),J=i("b449"),K=i.n(J);n["a"].use(T["a"]);var W=new G,Z=new T["a"].Store({state:{blockchain:[],difficulty:4,mining:!1,revalidatingInProgress:[]},mutations:{addBlock:function(t,e){t.blockchain.push(e)},emptyBlockchain:function(t){t.blockchain=[]},setDifficulty:function(t,e){t.difficulty=e},setMining:function(t,e){t.mining=e},modifyData:function(t,e){var i=t.blockchain[e.index];i["data"]=e.data;var n=W.hashBlock(i);t.blockchain[e.index]["hash"]=n;for(var a=e.index+1;a<t.blockchain.length;a++)t.blockchain[a].previousHash=t.blockchain[a-1].hash,t.blockchain[a].hash=W.hashBlock(t.blockchain[a])}},getters:{getLatestBlock:function(t){return t.blockchain[t.blockchain.length-1]},isValidBlock:function(t){return function(t){return W.verifyBlock(t)}},getPreviousBlock:function(t){return function(e){return t.blockchain[e-1]}},isMining:function(t){return t.mining}},actions:{createBlockAndAddToChain:function(t,e){var i=t.commit,n=t.state,a=t.getters;i("setMining",!0);var s="",o=0;0!=n.blockchain.length&&(s=a.getLatestBlock.hash,o=a.getLatestBlock.index+1);var r=new K.a;r.postMessage(E()({timestamp:(new Date).toLocaleString(),prevHash:s,data:e,index:o,difficulty:n.difficulty})),r.onmessage=function(t){i("addBlock",t.data),i("setMining",!1),r.terminate()}},revalidateBlock:function(t,e){t.commit;var i=t.state,n=new K.a;i.revalidatingInProgress.push(e.index),n.postMessage(E()({timestamp:e.timestamp,prevHash:e.previousHash,data:e.data,index:e.index,difficulty:i.difficulty})),n.onmessage=function(t){i.revalidatingInProgress=i.revalidatingInProgress.filter(function(t){return t!==e.index}),i.blockchain.splice(e.index,1,t.data);for(var a=e.index+1;a<i.blockchain.length;a++)i.blockchain[a].previousHash=i.blockchain[a-1].hash;n.terminate()}}}});n["a"].use(I.a),n["a"].config.productionTip=!1,new n["a"]({store:Z,render:function(t){return t(j)}}).$mount("#app")},"64a9":function(t,e,i){},b449:function(t,e,i){t.exports=function(){return new Worker(i.p+"b06913322975b567a1fc.worker.js")}}});
//# sourceMappingURL=app.0da9fd33.js.map