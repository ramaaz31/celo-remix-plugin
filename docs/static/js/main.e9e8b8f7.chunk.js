(this["webpackJsonp@dexfair/celo-remix-plugin"]=this["webpackJsonp@dexfair/celo-remix-plugin"]||[]).push([[0],{438:function(e,t,a){},451:function(e,t){},453:function(e,t){},468:function(e,t){},469:function(e,t){},504:function(e,t){},506:function(e,t){},520:function(e,t){},563:function(e,t){},565:function(e,t){},572:function(e,t){},584:function(e,t){},932:function(e,t,a){},934:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),s=a.n(c),r=a(77),i=a.n(r),l=(a(438),a(7)),o=a.n(l),u=a(149),d=a(20),j=a(21),b=a(952),f=a(949),h=a(948),x=a(951),O=a(950),p=a(947),m=a(151),g=a(954),v=a(956),y=a(190),k=a.n(y),C=a(428),N=function(e){var t=s.a.useState([]),a=Object(j.a)(t,2),c=a[0],r=a[1],i=e.abi,l=e.setArgs;return s.a.useEffect((function(){r(i&&i.inputs?i.inputs:[])}),[i]),Object(n.jsx)(b.a,{className:"Method",children:function(){var e=c.map((function(e,t){return Object(n.jsxs)(s.a.Fragment,{children:[Object(n.jsx)(b.a.Text,{className:"text-muted",children:Object(n.jsx)("small",{children:e.name})}),Object(n.jsx)(b.a.Control,{type:"text",size:"sm",name:e.name,placeholder:e.type,onChange:function(e){"["===e.target.value[0]?l(e.target.name,JSON.parse(e.target.value)):l(e.target.name,e.target.value)}})]},t.toString())}));return Object(n.jsx)(b.a.Group,{children:e})}()})};function w(e){var t=[];return e.forEach((function(e){"function"===e.type&&t.push(e)})),t}function S(e,t){var a,n=[];e&&(null===(a=e.inputs)||void 0===a||a.forEach((function(e){n.push(t[e.name])})));return n}var A=function(e){var t=e.celo,a=e.network,c=e.gtag,r=e.busy,i=e.setBusy,l=e.addNewContract,u=e.setSelected,f=e.updateBalance,x=s.a.useState(!1),O=Object(j.a)(x,2),m=O[0],y=O[1],A=s.a.useState(null),B=Object(j.a)(A,2),E=B[0],M=B[1],T=s.a.useState(""),z=Object(j.a)(T,2),J=z[0],F=z[1],R=s.a.useState(""),I=Object(j.a)(R,2),K=I[0],W=I[1],G=s.a.useState({fileName:"",data:{}}),L=Object(j.a)(G,2),_=L[0],D=L[1],H=s.a.useState(""),P=Object(j.a)(H,2),U=P[0],q=P[1],Q=s.a.useState(null),V=Object(j.a)(Q,2),X=V[0],Y=V[1],Z=s.a.useState({}),$=Object(j.a)(Z,2),ee=$[0],te=$[1],ae=s.a.useState(""),ne=Object(j.a)(ae,2),ce=ne[0],se=ne[1],re=s.a.useState(""),ie=Object(j.a)(re,2),le=ie[0],oe=ie[1];function ue(){return de.apply(this,arguments)}function de(){return(de=Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),W("fa-spin"),e.next=4,null===E||void 0===E?void 0:E.solidity.compile(J);case 4:W(""),i(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function je(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=t?t[e].abi:_.data[e].abi;q(e),Y(null),te({}),a.forEach((function(e){if("constructor"===e.type){var t,a={};null===(t=e.inputs)||void 0===t||t.forEach((function(e){a[e.name]=""})),te(a),Y(e)}})),u({name:e,address:"",abi:w(a)})}function be(){return(be=Object(d.a)(o.a.mark((function e(){var a,n,s,u,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r||!t.isConnected){e.next=23;break}return c("deploy"),i(!0),se(""),e.prev=4,a=new t.kit.web3.eth.Contract(JSON.parse(JSON.stringify(_.data[U].abi))),e.next=8,t.getAccounts();case 8:return n=e.sent,s=S(X,ee),u={from:n[0],data:a.deploy({data:"0x".concat(_.data[U].evm.bytecode.object),arguments:s}).encodeABI()},e.next=13,t.sendTransaction(u);case 13:(d=e.sent).contractAddress?(se(d.contractAddress),l({name:U,address:d.contractAddress,abi:w(_.data[U].abi)})):oe("contractAddress error"),f(n[0]),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(4),console.error(e.t0),oe("deploy error");case 22:i(!1);case 23:case"end":return e.stop()}}),e,null,[[4,18]])})))).apply(this,arguments)}function fe(){var e=_.data,t=_.fileName.split("/")[_.fileName.split("/").length-1],a=Object.keys(e).map((function(e){return Object(n.jsx)("option",{value:e,children:"".concat(e," - ").concat(t)},e)}));return Object(n.jsx)(b.a,{children:Object(n.jsxs)(b.a.Group,{children:[Object(n.jsxs)(b.a.Text,{className:"text-muted",children:[Object(n.jsx)("small",{children:"CONTRACT"}),Object(n.jsx)(p.a,{variant:"link",size:"sm",className:"mt-0 pt-0 float-right",disabled:!_.data[U],onClick:function(){_.data[U]&&k()(JSON.stringify(_.data[U].abi,null,4))},children:Object(n.jsx)("i",{className:"far fa-copy"})})]}),Object(n.jsx)(h.a,{children:Object(n.jsx)(b.a.Control,{as:"select",value:U,onChange:function(e){je(e.target.value)},children:a})})]})})}return s.a.useEffect((function(){function e(){return(e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),t=Object(C.createClient)(),e.next=4,t.onload();case 4:return t.solidity.on("compilationFinished",(function(e,t,a,n){D({fileName:e,data:n.contracts[e]}),je(Object.keys(n.contracts[e]).length>0?Object.keys(n.contracts[e])[0]:"",n.contracts[e])})),t.on("fileManager","currentFileChanged",(function(e){F(e)})),e.prev=6,e.t0=F,e.next=10,t.fileManager.getCurrentFile();case 10:e.t1=e.sent,(0,e.t0)(e.t1),e.next=17;break;case 14:e.prev=14,e.t2=e.catch(6),console.log("Error from IDE : No such file or directory No file selected");case 17:M(t);case 18:case"end":return e.stop()}}),e,null,[[6,14]])})))).apply(this,arguments)}se(""),m||function(){e.apply(this,arguments)}()}),[a]),Object(n.jsxs)("div",{className:"Compiler",children:[Object(n.jsxs)(p.a,{variant:"primary",onClick:Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue();case 2:case"end":return e.stop()}}),e)}))),block:!0,disabled:""===J||""!==K,children:[Object(n.jsx)("i",{className:"fas fa-sync ".concat(K),style:{marginRight:"0.3em"}}),Object(n.jsxs)("span",{children:["Compile\xa0","".concat(""===J?"<no file selected>":J.split("/")[J.split("/").length-1])]})]}),Object(n.jsx)("hr",{}),Object(n.jsx)(fe,{}),Object(n.jsxs)(g.a,{children:[Object(n.jsx)(g.a.Header,{className:"p-2",children:"Deploy"}),Object(n.jsxs)(g.a.Body,{className:"py-1 px-2",children:[Object(n.jsx)(N,{abi:X,setArgs:function(e,t){ee[e]=t}}),Object(n.jsx)(v.a,{variant:"danger",onClose:function(){return oe("")},dismissible:!0,hidden:""===le,children:Object(n.jsx)("small",{children:le})}),Object(n.jsxs)(h.a,{className:"mb-3",children:[Object(n.jsx)(b.a.Control,{value:ce,placeholder:"contract address",size:"sm",readOnly:!0}),Object(n.jsx)(h.a.Append,{children:Object(n.jsx)(p.a,{variant:"warning",block:!0,size:"sm",disabled:r||!(t&&t.isConnected)||""===J,onClick:function(){return be.apply(this,arguments)},children:Object(n.jsx)("small",{children:"Deploy"})})})]})]})]})]})},B=a(953),E=a(955),M=(a(932),"Currently you have no contract instances to interact with."),T=function(e){var t=s.a.useState(""),a=Object(j.a)(t,2),c=a[0],r=a[1],i=s.a.useState(""),l=Object(j.a)(i,2),u=l[0],f=l[1],x=s.a.useState(""),O=Object(j.a)(x,2),m=O[0],g=O[1],y=s.a.useState({}),C=Object(j.a)(y,2),w=C[0],S=C[1],A=e.celo,B=e.busy,E=e.abi,M=e.address,T=e.updateBalance;function z(e){switch(e){case"view":case"pure":return"primary";case"nonpayable":return"warning";case"payable":return"danger"}return""}return s.a.useEffect((function(){var e,t={};null===(e=E.inputs)||void 0===e||e.forEach((function(e){t[e.name]=""})),S(t)}),[E.inputs]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(N,{abi:E,setArgs:function(e,t){w[e]=t}}),Object(n.jsx)(v.a,{variant:"danger",onClose:function(){return r("")},dismissible:!0,hidden:""===c,children:Object(n.jsx)("small",{children:c})}),Object(n.jsx)(v.a,{variant:"success",onClose:function(){return f("")},dismissible:!0,hidden:""===u,children:Object(n.jsx)("small",{children:u})}),Object(n.jsxs)(h.a,{className:"mb-3",children:[Object(n.jsxs)(h.a.Prepend,{children:[Object(n.jsx)(p.a,{variant:z(E.stateMutability),block:!0,size:"sm",disabled:B||!(A&&A.isConnected),onClick:Object(d.a)(o.a.mark((function e(){var t,a,n,c,s,i,l,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],null===(t=E.inputs)||void 0===t||t.forEach((function(e){a.push(w[e.name])})),n=new A.kit.web3.eth.Contract(JSON.parse(JSON.stringify([E])),M),e.next=5,A.getAccounts();case 5:if(c=e.sent,"view"!==E.stateMutability&&"pure"!==E.stateMutability){e.next=24;break}if(e.prev=7,!E.name){e.next=14;break}return e.next=11,(s=n.methods)[E.name].apply(s,a).call({from:c[0]});case 11:e.t0=e.sent,e.next=15;break;case 14:e.t0=null;case 15:"object"===typeof(i=e.t0)?f(JSON.stringify(i,null,4)):g(i),e.next=22;break;case 19:e.prev=19,e.t1=e.catch(7),r(e.t1.message?e.t1.message:e.t1.toString());case 22:e.next=41;break;case 24:if(e.prev=24,!E.name){e.next=31;break}return e.next=28,A.sendTransaction({from:c[0],to:M,data:(l=n.methods)[E.name].apply(l,a).encodeABI()});case 28:e.t2=e.sent,e.next=32;break;case 31:e.t2=null;case 32:u=e.t2,r(""),f(JSON.stringify(u,null,2)),T(c[0]),e.next=41;break;case 38:e.prev=38,e.t3=e.catch(24),r(e.t3.message?e.t3.message:e.t3.toString());case 41:case"end":return e.stop()}}),e,null,[[7,19],[24,38]])}))),children:Object(n.jsx)("small",{children:"view"===E.stateMutability||"pure"===E.stateMutability?"call":"transact"})}),Object(n.jsx)(p.a,{variant:z(E.stateMutability),size:"sm",className:"mt-0 pt-0 float-right",onClick:function(){if(E.name)try{var e,t,a=[];null===(e=E.inputs)||void 0===e||e.forEach((function(e){w[e.name]&&a.push(w[e.name])}));var n=new A.kit.web3.eth.Contract(JSON.parse(JSON.stringify([E])),M);k()((t=n.methods)[E.name].apply(t,a).encodeABI())}catch(c){console.log(c.toString())}},children:Object(n.jsx)("i",{className:"far fa-copy"})})]}),Object(n.jsx)(b.a.Control,{value:m,size:"sm",readOnly:!0,hidden:!("view"===E.stateMutability||"pure"===E.stateMutability)})]})]})},z=function(e){var t=e.celo,a=e.busy,c=e.setBusy,r=e.contract,i=e.index,l=e.remove,o=e.updateBalance,u=s.a.useState(!0),d=Object(j.a)(u,2),b=d[0],f=d[1];return Object(n.jsx)(E.a,{in:b,timeout:300,classNames:"zoom",unmountOnExit:!0,onExited:l,children:Object(n.jsxs)(g.a,{className:"mb-2",children:[Object(n.jsxs)(g.a.Header,{className:"px-2 py-1",children:[Object(n.jsx)("strong",{className:"align-middle",children:r.name}),"\xa0",Object(n.jsx)("small",{className:"align-middle",children:"".concat(r.address.substring(0,6),"...").concat(r.address.substring(38))}),Object(n.jsx)(p.a,{className:"float-right align-middle",size:"sm",variant:"link",onClick:function(){window.open("".concat(t.getNetwork().blockscout,"/address/").concat(r.address))},children:Object(n.jsx)("i",{className:"fas fa-external-link-alt"})}),Object(n.jsx)(p.a,{className:"float-right align-middle",size:"sm",variant:"link",onClick:function(){f(!1)},children:Object(n.jsx)("i",{className:"fas fa-trash-alt"})})]}),function(){var e=(r.abi?r.abi:[]).map((function(e,s){return Object(n.jsx)(B.a,{children:Object(n.jsxs)(g.a,{children:[Object(n.jsx)(B.a.Toggle,{as:g.a.Header,eventKey:"Methods_".concat(s),className:"p-1",children:Object(n.jsx)("small",{children:e.name})}),Object(n.jsx)(B.a.Collapse,{eventKey:"Methods_".concat(s),children:Object(n.jsx)(g.a.Body,{className:"py-1 px-2",children:Object(n.jsx)(T,{celo:t,busy:a,setBusy:c,abi:e,address:r.address,updateBalance:o})})})]})},"Methods_A_".concat(i.toString()))}));return Object(n.jsx)(n.Fragment,{children:e})}()]})})},J=function(e){var t=e.celo,a=e.busy,c=e.setBusy,r=e.contracts,i=e.updateBalance,l=s.a.useState(""),o=Object(j.a)(l,2),u=o[0],d=o[1],b=s.a.useState(0),f=Object(j.a)(b,2),h=f[0],x=f[1];return s.a.useEffect((function(){x(0),d(M)}),[r,a]),Object(n.jsxs)("div",{className:"SmartContracts",children:[Object(n.jsx)(v.a,{variant:"warning",className:"text-center",hidden:r.length!==h,children:Object(n.jsx)("small",{children:u})}),function(){var e=r.map((function(e,s){return Object(n.jsx)(z,{celo:t,busy:a,setBusy:c,contract:e,index:s,remove:function(){x(h+1),d(M)},updateBalance:i},"Contract_".concat(s.toString()))}));return Object(n.jsx)(n.Fragment,{children:e})}()]})},F=function(){var e=s.a.useState(""),t=Object(j.a)(e,2),a=t[0],c=t[1],r=s.a.useState(""),i=Object(j.a)(r,2),l=i[0],g=i[1],v=s.a.useState("Mainnet"),y=Object(j.a)(v,2),k=y[0],C=y[1],N=s.a.useState(!0),w=Object(j.a)(N,2),S=w[0],B=w[1],E=s.a.useState(!1),M=Object(j.a)(E,2),T=M[0],z=M[1],F=s.a.useState(new m.Celo(m.NETWORKS.Mainnet)),R=Object(j.a)(F,1)[0],I=s.a.useState(""),K=Object(j.a)(I,2),W=K[0],G=K[1],L=s.a.useState([]),_=Object(j.a)(L,2),D=_[0],H=_[1],P=s.a.useState(null),U=Object(j.a)(P,2),q=U[0],Q=U[1];function V(){return(V=Object(d.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(R.isConnected){e.next=18;break}return z(!0),e.next=4,R.getSupport();case 4:if(!e.sent.celo){e.next=12;break}return e.next=8,R.connectCelo((function(e,t){g(""),c(t[0])}),(function(e){g(""),C(e)}));case 8:e.sent&&window.gtag&&(t=window,(0,t.gtag)("event","login",{method:"Celo"})),e.next=17;break;case 12:return e.next=14,R.connectMetaMask((function(e,t){c(t[0])}));case 14:e.sent&&window.gtag&&(a=window,(0,a.gtag)("event","login",{method:"MetaMask"})),B(!1);case 17:z(!1);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(e){return Y.apply(this,arguments)}function Y(){return(Y=Object(d.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t){e.next=6;break}return e.next=3,R.kit.getTotalBalance(t);case 3:a=e.sent,n=a.CELO,g(R.kit.web3.utils.fromWei(n.toString()));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e){return $.apply(this,arguments)}function $(){return($=Object(d.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S){e.next=8;break}return z(!0),H([]),a=t.target.value,e.next=6,R.changeNetwork(m.NETWORKS[a]);case 6:C(a),z(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ee(e){H(D.concat([e]))}function te(){var e=m.NETWORKS,t=Object.keys(e).map((function(e){return Object(n.jsx)("option",{value:e,children:e},e)}));return Object(n.jsxs)(b.a.Group,{children:[Object(n.jsx)(b.a.Text,{className:"text-muted",children:Object(n.jsx)("small",{children:"NETWORK"})}),Object(n.jsx)(b.a.Control,{as:"select",value:k,onChange:Z,disabled:!R.isConnected||S,children:t})]})}return s.a.useEffect((function(){X(a)}),[a,k]),Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(f.a,{children:[Object(n.jsxs)(b.a,{children:[Object(n.jsxs)(b.a.Group,{children:[Object(n.jsx)(b.a.Text,{className:"text-muted",children:Object(n.jsx)("small",{children:"ACCOUNT"})}),Object(n.jsxs)(h.a,{children:[Object(n.jsx)(b.a.Control,{type:"text",placeholder:"Account",value:a,size:"sm",readOnly:!0}),Object(n.jsx)(h.a.Append,{hidden:""!==a,children:Object(n.jsx)(x.a,{placement:"left",overlay:Object(n.jsx)(O.a,{id:"overlay-connect",hidden:""!==a,children:"Connect to Wallet"}),children:Object(n.jsx)(p.a,{variant:"warning",block:!0,size:"sm",disabled:T,onClick:function(){return V.apply(this,arguments)},children:Object(n.jsx)("small",{children:"Connect"})})})})]})]}),Object(n.jsxs)(b.a.Group,{children:[Object(n.jsx)(b.a.Text,{className:"text-muted",children:Object(n.jsx)("small",{children:"BALANCE (CELO)"})}),Object(n.jsx)(h.a,{children:Object(n.jsx)(b.a.Control,{type:"text",placeholder:"Account",value:l,size:"sm",readOnly:!0})})]}),Object(n.jsx)(te,{})]}),Object(n.jsx)("hr",{}),Object(n.jsx)(A,{celo:R,network:k,gtag:function(e){var t=window.gtag;t("event",e,{network:k})},busy:T,setBusy:z,addNewContract:ee,setSelected:Q,updateBalance:X}),Object(n.jsx)("p",{className:"text-center mt-3",children:Object(n.jsx)("small",{children:"OR"})}),Object(n.jsxs)(h.a,{className:"mb-3",children:[Object(n.jsx)(b.a.Control,{value:W,placeholder:"contract address",onChange:function(e){G(e.target.value)},size:"sm",disabled:T||""===a||!q}),Object(n.jsx)(h.a.Append,{children:Object(n.jsx)(x.a,{placement:"left",overlay:Object(n.jsx)(O.a,{id:"overlay-ataddresss",children:"Use deployed Contract address"}),children:Object(n.jsx)(p.a,{variant:"primary",size:"sm",disabled:T||""===a||!q,onClick:function(){z(!0),q&&ee(Object(u.a)(Object(u.a)({},q),{},{address:W})),z(!1)},children:Object(n.jsx)("small",{children:"At Address"})})})})]}),Object(n.jsx)("hr",{}),Object(n.jsx)(J,{celo:R,busy:T,setBusy:z,contracts:D,updateBalance:X})]})})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,957)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(F,{})}),document.getElementById("root")),R()}},[[934,1,2]]]);
//# sourceMappingURL=main.e9e8b8f7.chunk.js.map