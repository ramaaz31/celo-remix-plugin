(this["webpackJsonp@dexfair/celo-remix-plugin"]=this["webpackJsonp@dexfair/celo-remix-plugin"]||[]).push([[0],{238:function(e,t,a){e.exports=a(624)},243:function(e,t,a){},255:function(e,t){},274:function(e,t){},276:function(e,t){},339:function(e,t){},394:function(e,t){},419:function(e,t){},422:function(e,t){},485:function(e,t){},506:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=506},516:function(e,t){},533:function(e,t){},624:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(235),c=a.n(l),o=(a(243),a(34)),u=a.n(o),s=a(90),i=a(26),m=a(628),p=a(629),f=a(626),d=a(627),E=a(630),h=a(237),b=a(236),v=a(91),y={textAlign:"center",padding:"20px",position:"fixed",left:"0",bottom:"0",height:"50px",width:"100%"};var g=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement("div",{style:y},r.a.createElement("small",null),t))};var x=function(){var e=r.a.useState(null),t=Object(i.a)(e,2),a=t[0],n=t[1],l=r.a.useState(""),c=Object(i.a)(l,2),o=c[0],y=c[1],x=r.a.useState(""),O=Object(i.a)(x,2),k=O[0],w=O[1],N=r.a.useState([]),C=Object(i.a)(N,2),j=C[0],S=C[1],T=r.a.useState({}),A=Object(i.a)(T,2),z=A[0],G=A[1],J=r.a.useState(""),F=Object(i.a)(J,2),W=F[0],B=F[1],D=r.a.useState("Mainnet"),I=Object(i.a)(D,2),L=I[0],M=I[1],R=r.a.useState(""),U=Object(i.a)(R,2),K=U[0],_=U[1],H=r.a.useState(""),$=Object(i.a)(H,2),q=$[0],P=$[1],Q=r.a.useState(null),V=Object(i.a)(Q,2),X=V[0],Y=V[1],Z=r.a.useState(!1),ee=Object(i.a)(Z,2),te=ee[0],ae=ee[1];function ne(){return(ne=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.ethereum&&window.ethereum.enable();case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function re(){return(re=Object(s.a)(u.a.mark((function e(){var t,a,n,r,l,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(te){e.next=19;break}for(ae(!0),t=j[K.replace(" - ".concat(k),"")],a=new X.kit.web3.eth.Contract(JSON.parse(JSON.stringify(t.abi))),n=[],r=0;r<z.inputs.length;r++)"]"===z.inputs[r].type[z.inputs[r].type.length-1]?n.push(JSON.parse(z.inputs[r].value)):n.push(z.inputs[r].value.toString());return e.prev=6,l={from:W,data:a.deploy({data:"0x".concat(t.evm.bytecode.object),arguments:n}).encodeABI()},e.next=10,X.sendTransaction(l);case 10:c=e.sent,P(c.contractAddress),ae(!1),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(6),console.error(e.t0),ae(!1);case 19:case"end":return e.stop()}}),e,null,[[6,15]])})))).apply(this,arguments)}function le(e){G({});for(var t=0;t<e.abi.length;t++){if("constructor"===e.abi[t].type)if("break"===function(){for(var a=JSON.parse(JSON.stringify(e.abi[t])),n=function(e){a.inputs[e].value="",a.inputs[e].onChange=function(t){a.inputs[e].value=t.target.value}},r=0;r<a.inputs.length;r++)n(r);return G(a),"break"}())break}}function ce(e){var t=e.parms.inputs?e.parms.inputs:[],a=t.map((function(e,t){return r.a.createElement(m.a.Group,{key:t.toString()},r.a.createElement(m.a.Text,{className:"text-muted"},r.a.createElement("small",null,e.name)),r.a.createElement(m.a.Control,{type:"text",placeholder:e.type,onChange:e.onChange,size:"sm"}))}));return r.a.createElement(m.a,null,r.a.createElement(se,{contracts:j,fileName:k}),r.a.createElement("div",{className:0===t.length?"d-none":""},r.a.createElement(p.a,null,r.a.createElement(p.a.Header,{size:"sm"},r.a.createElement("small",null,e.parms.name||e.parms.type)),r.a.createElement(p.a.Body,null,a))))}function oe(e){_(e.target.value),le(j[e.target.value.replace(" - ".concat(k),"")])}function ue(){var e=v.NETWORK,t=Object.keys(e).map((function(e){return r.a.createElement("option",{key:e},e)}));return r.a.createElement(m.a.Group,null,r.a.createElement(m.a.Text,{className:"text-muted"},r.a.createElement("small",null,"NETWORK")),r.a.createElement(m.a.Control,{as:"select",value:L,onChange:function(e){M(e.target.value),X.changeNetwork(e.target.value)}},t))}function se(e){var t=e.contracts,a=Object.keys(t).map((function(t){return r.a.createElement("option",{key:t},"".concat(t," - ").concat(e.fileName))}));return r.a.createElement(m.a.Group,null,r.a.createElement(m.a.Text,{className:"text-muted"},r.a.createElement("small",null,"CONTRACT")),r.a.createElement(m.a.Control,{as:"select",value:K,onChange:oe},a))}return r.a.useEffect((function(){function e(){return(e=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=5;break}n(Object(b.createIframeClient)()),Y(new v.Celo(L)),e.next=10;break;case 5:return e.next=7,a.onload();case 7:return a.solidity.on("compilationFinished",(function(e,t,a,n){w(e),y(a),S(n.contracts[e]),_(Object.keys(n.contracts[e]).length>0?Object.keys(n.contracts[e])[0]:""),le(n.contracts[e][Object.keys(n.contracts[e])[0]])})),e.next=10,X.init(M,B);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()})),r.a.createElement("div",{className:"App"},r.a.createElement(f.a,null,r.a.createElement(m.a,null,r.a.createElement(m.a.Group,{hidden:!0},r.a.createElement(m.a.Text,{className:"text-muted"},r.a.createElement("small",null,"LANGUAGE")),r.a.createElement(m.a.Control,{type:"text",placeholder:"Language",value:o,size:"sm",readOnly:!0})),r.a.createElement(m.a.Group,{hidden:!0},r.a.createElement(m.a.Text,{className:"text-muted"},r.a.createElement("small",null,"FILE NAME")),r.a.createElement(m.a.Control,{type:"text",placeholder:"File Name",value:k,size:"sm",readOnly:!0})),r.a.createElement(m.a.Group,null,r.a.createElement(m.a.Text,{className:"text-muted"},r.a.createElement("small",null,"ACCOUNT")),r.a.createElement(d.a,null,r.a.createElement(m.a.Control,{type:"text",placeholder:"Account",value:W,size:"sm",readOnly:!0}),r.a.createElement(d.a.Append,null,r.a.createElement(E.a,{className:""!==W?"d-none":"",variant:"warning",block:!0,onClick:function(){return ne.apply(this,arguments)},size:"sm"},r.a.createElement("small",null,"Connect"))))),r.a.createElement(ue,null)),r.a.createElement("hr",null),r.a.createElement(ce,{parms:z}),r.a.createElement(d.a,{className:"mb-3"},r.a.createElement(h.a,{value:q,size:"sm",readOnly:!0}),r.a.createElement(d.a.Append,null,r.a.createElement(E.a,{variant:"warning",size:"sm",onClick:function(){window.open("".concat(v.NETWORK[L].blockscout,"/address/").concat(q))},disabled:te||""===q},r.a.createElement("i",{className:"fas fa-globe"})),r.a.createElement(E.a,{variant:"warning",block:!0,onClick:function(){return re.apply(this,arguments)},size:"sm",disabled:te||""===W},r.a.createElement("small",null,"Deploy"))))),r.a.createElement(g,{children:r.a.createElement("small",null,"by DexFair")}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[238,1,2]]]);
//# sourceMappingURL=main.0f5a3f30.chunk.js.map