"use strict";(self.webpackChunkn2_utility=self.webpackChunkn2_utility||[]).push([[656],{80656:(e,t,n)=>{n.d(t,{fetchCIMSymbolReference:()=>m});var l=n(71277),a=n(10064),r=n(66978),o=n(35995),s=n(7575),i=n(53283),c=n(38048),u=n(19951);async function m(e,t,n){if(!e.name)throw new a.Z("style-symbol-reference-name-missing","Missing name in style symbol reference");if(e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName)return async function(e,t){const l=c.wm.replaceAll(/\{SymbolName\}/gi,e.name);try{const e=await(0,c.EJ)(l,t);return(0,c.KV)(e.data)}catch(n){return(0,r.r9)(n),null}}(e,n);try{return async function(e,t,n,m){const y={portal:null!=(null===n||void 0===n?void 0:n.portal)?n.portal:s.Z.getDefault(),url:(0,o.mN)(e.baseUrl),origin:"portal-item"},f=(0,u.m)(t,e.data);if(!f)throw new a.Z("symbolstyleutils:symbol-name-not-found","The symbol name '".concat(t,"' could not be found"),{symbolName:t});let b=(0,i.f)((0,c.v9)(f,"cimRef"),y);(0,l.XO)()&&(b=(0,l.pJ)(b));try{const e=await(0,c.EJ)(b,m);return(0,c.KV)(e.data)}catch(h){return(0,r.r9)(h),null}}(await(0,c.n2)(e,t,n),e.name,t,n)}catch(m){return(0,r.r9)(m),null}}}}]);
//# sourceMappingURL=656.392dbc6d.chunk.js.map