"use strict";(self.webpackChunkn2_utility=self.webpackChunkn2_utility||[]).push([[4763,9969],{99969:(e,t,a)=>{a.r(t),a.d(t,{CIMSymbolRasterizer:()=>_});var i=a(51995),r=a(76200),n=a(66978),o=a(17842),s=a(81400),l=a(82272),h=a(51e3);class c{constructor(){this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null}destroy(){this._inFlightResourceMap.clear(),this._resourceMap.clear()}getResource(e){var t;return null!==(t=this._resourceMap.get(e))&&void 0!==t?t:null}async fetchResource(e,t){const a=this._resourceMap.get(e);if(a)return{width:a.width,height:a.height};let i=this._inFlightResourceMap.get(e);return i?i.then((e=>({width:e.width,height:e.height}))):(i=(0,h.n$)(e,t),this._inFlightResourceMap.set(e,i),i.then((t=>(this._inFlightResourceMap.delete(e),this._resourceMap.set(e,t),{width:t.width,height:t.height})),(()=>({width:0,height:0}))))}deleteResource(e){this._inFlightResourceMap.delete(e),this._resourceMap.delete(e)}loadFont(e){return(0,l.mx)(e)}}var m=a(66726),u=a(78915),g=a(16889),d=a(26554),f=a(691),y=a(6388),w=a(31027);class p{constructor(e){this._resourceManager=e,this._lazyRasterizationCanvas=null}dispose(){this._lazyRasterizationCanvas=null}get _rasterizationCanvas(){return null==this._lazyRasterizationCanvas&&(this._lazyRasterizationCanvas=document.createElement("canvas"),this._lazyRasterizationCanvas.getContext("2d",{willReadFrequently:!0})),this._lazyRasterizationCanvas}rasterizeJSONResource(e,t,a){if("simple-fill"===e.type||"esriSFS"===e.type){const[a,i,r]=(0,d.Y)(this._rasterizationCanvas,e.style,t);return{size:[i,r],image:new Uint32Array(a.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0,rasterizationScale:(0,g.fp)(Math.ceil(t))}}if("simple-line"===e.type||"esriSLS"===e.type||"line"===e.type&&e.dashTemplate){let t,a;if("simple-line"===e.type||"esriSLS"===e.type)switch(t=(0,u.U1)(e.style,e.cap),e.cap){case"butt":a="Butt";break;case"square":a="Square";break;default:a="Round"}else t=e.dashTemplate,a=e.cim.capStyle;const[i,r,n]=(0,d.m)(t,a);return{size:[r,n],image:new Uint32Array(i.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}let i,r=null,n=null,o=1;if("simple-marker"===e.type||"esriSMS"===e.type||"line-marker"===e.type?(i=u.B$.fromSimpleMarker(e),n=(0,y.Fp)(i)):e.cim&&"CIMHatchFill"===e.cim.type?(i=u.B$.fromCIMHatchFill(e.cim,t),r=new f.Z(i.frame.xmin,-i.frame.ymax,i.frame.xmax-i.frame.xmin,i.frame.ymax-i.frame.ymin),o=t):e.cim.markerPlacement&&"CIMMarkerPlacementInsidePolygon"===e.cim.markerPlacement.type?(i=u.B$.fromCIMInsidePolygon(e.cim),r=new f.Z(i.frame.xmin,-i.frame.ymax,i.frame.xmax-i.frame.xmin,i.frame.ymax-i.frame.ymin)):(i=e.cim,e.avoidSDFRasterization||(n=(0,y.Fp)(i))),n&&!a){const[e,t,a]=(0,y.RL)(n);return e?{size:[t,a],image:new Uint32Array(e.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0,rasterizationScale:o}:null}const[s,l,h,c,m]=u.B$.rasterize(this._rasterizationCanvas,i,r,this._resourceManager,!a);return s?{size:[l,h],image:new Uint32Array(s.buffer),sdf:!1,simplePattern:!1,anchorX:c,anchorY:m}:null}rasterizeImageResource(e,t,a,i){this._rasterizationCanvas.width=e,this._rasterizationCanvas.height=t;const r=this._rasterizationCanvas.getContext("2d");a instanceof ImageData?r.putImageData(a,0,0):(a.setAttribute("width","".concat(e,"px")),a.setAttribute("height","".concat(t,"px")),r.drawImage(a,0,0,e,t));const n=r.getImageData(0,0,e,t),o=new Uint8Array(n.data);if(i)for(const u of i)if(u&&u.oldColor&&4===u.oldColor.length&&u.newColor&&4===u.newColor.length){const[e,t,a,i]=u.oldColor,[r,n,s,l]=u.newColor;if(e===r&&t===n&&a===s&&i===l)continue;for(let h=0;h<o.length;h+=4)e===o[h]&&t===o[h+1]&&a===o[h+2]&&i===o[h+3]&&(o[h]=r,o[h+1]=n,o[h+2]=s,o[h+3]=l)}let s;for(let u=0;u<o.length;u+=4)s=o[u+3]/255,o[u]=o[u]*s,o[u+1]=o[u+1]*s,o[u+2]=o[u+2]*s;let l=o,h=e,c=t;const m=512;if(h>=m||c>=m){const a=h/c;a>1?(h=m,c=Math.round(m/a)):(c=m,h=Math.round(m*a)),l=new Uint8Array(4*h*c);const i=new Uint8ClampedArray(l.buffer);(0,w.TT)(o,e,t,i,h,c,!1)}return{size:[h,c],image:new Uint32Array(l.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}}var v=a(22532),M=a(49729),C=a(83748);const z=e=>null!==e&&void 0!==e&&e.scaleFactor?e.scaleFactor:1;class _{constructor(e,t){this._spatialReference=e,this._avoidSDF=t,this._resourceCache=new Map,this._lazyImageDataCanvas=null,this._pictureMarkerCache=new Map,this._textRasterizer=new v.Z,this._cimResourceManager=new c,this._rasterizer=new p(this._cimResourceManager)}get _imageDataCanvas(){var e;return null!==(e=this._lazyImageDataCanvas)&&void 0!==e||(this._lazyImageDataCanvas=document.createElement("canvas")),this._lazyImageDataCanvas}get _imageDataContext(){return this._imageDataCanvas.getContext("2d",{willReadFrequently:!0})}get resourceManager(){return this._cimResourceManager}async rasterizeCIMSymbolAsync(e,t,a,i,r,n,o,s,l){if(!e)return null;const{data:h}=e;if(!h||"CIMSymbolReference"!==h.type||!h.symbol)return null;const{symbol:c}=h;n||(n=(0,w.JW)(c));const g=await u.E0.resolveSymbolOverrides(h,t,this._spatialReference,r,n,o,s),d=this._imageDataCanvas,f=this._cimResourceManager,y=[];u.B$.fetchResources(g,f,y),u.B$.fetchFonts(g,f,y),y.length>0&&await Promise.all(y);const{width:p,height:v}=a,M=function(e,t,a,i){const r=1,n=-t/2+r,o=t/2-r,s=a/2-r,l=-a/2+r;switch(e){case"esriGeometryPoint":return{x:0,y:0};case"esriGeometryPolyline":return{paths:[[[n,0],[0,0],[o,0]]]};default:return"legend"===i?{rings:[[[n,s],[o,0],[o,l],[n,l],[n,s]]]}:{rings:[[[n,s],[o,s],[o,l],[n,l],[n,s]]]}}}(n,p,v,i),C=u.B$.getEnvelope(g,M,f);if(!C)return null;const z=1.3333333333333333*(window.devicePixelRatio||1);let _=1,b=0,S=0;switch(c.type){case"CIMPointSymbol":case"CIMTextSymbol":{let e=1;C.width>p&&(e=p/C.width);let t=1;C.height>v&&(t=v/C.height),"preview"===i&&(C.width<p&&(e=p/C.width),C.height<v&&(t=v/C.height)),_=Math.min(e,t),b=C.x+C.width/2,S=C.y+C.height/2}break;case"CIMLineSymbol":{(l||C.height>v)&&(_=v/C.height),S=C.y+C.height/2;const e=C.x*_+p/2,t=(C.x+C.width)*_+p/2,{paths:a}=M;a[0][0][0]-=e/_,a[0][2][0]-=(t-p)/_}break;case"CIMPolygonSymbol":{b=C.x+C.width/2,S=C.y+C.height/2;const e=C.x*_+p/2,t=(C.x+C.width)*_+p/2,a=C.y*_+v/2,i=(C.y+C.height)*_+v/2,{rings:r}=M;e<0&&(r[0][0][0]-=e,r[0][3][0]-=e,r[0][4][0]-=e),a<0&&(r[0][0][1]+=a,r[0][1][1]+=a,r[0][4][1]+=a),t>p&&(r[0][1][0]-=t-p,r[0][2][0]-=t-p),i>v&&(r[0][2][1]+=i-v,r[0][3][1]+=i-v)}}d.width=p*z,d.height=v*z;d.width+=2,d.height+=2;const x=this._imageDataContext,F=m.zA.createIdentity();return F.translate(-b,-S),F.scale(_*z,-_*z),F.translate(p*z/2+1,v*z/2+1),x.clearRect(0,0,d.width,d.height),new m.cD(x,f,F,!0).drawSymbol(g,M),x.getImageData(0,0,d.width,d.height)}async analyzeCIMSymbol3D(e,t,a,i,r){const o=[],l=t?{geometryType:i,spatialReference:this._spatialReference,fields:t}:null,h=[];u.B$.fetchFonts(e.data.symbol,this._cimResourceManager,h),await Promise.all(h);const c=new s._(this._cimResourceManager,l);let m;await c.analyzeSymbolReference(e.data,this._avoidSDF,o),(0,n.k_)(r);for(const n of o)"CIMPictureMarker"!==n.cim.type&&"CIMPictureFill"!==n.cim.type&&"CIMPictureStroke"!==n.cim.type||(m||(m=[]),m.push(this._fetchPictureMarkerResource(n,r))),a&&"text"===n.type&&"string"==typeof n.text&&n.text.includes("[")&&(n.text=(0,w.Qs)(a,n.text,n.cim.textCase));return m&&await Promise.all(m),o}rasterizeCIMSymbol3D(e,t,a,i,r,n){const o=[];for(const l of e){i&&"function"==typeof i.scaleFactor&&(i.scaleFactor=i.scaleFactor(t,r,n));const e=this._getRasterizedResource(l,t,a,i,r,n);if(!e)continue;let h=0,c=e.anchorX||0,m=e.anchorY||0,u=!1,g=0,d=0;if("esriGeometryPoint"===a){var s;const e=z(i);if(g=(0,w.hf)(l.offsetX,t,r,n)*e||0,d=(0,w.hf)(l.offsetY,t,r,n)*e||0,"marker"===l.type)h=(0,w.hf)(l.rotation,t,r,n)||0,u=null!==(s=l.rotateClockwise)&&void 0!==s&&s;else if("text"===l.type){if(h=(0,w.hf)(l.angle,t,r,n)||0,void 0!==l.horizontalAlignment)switch(l.horizontalAlignment){case"left":c=-.5;break;case"right":c=.5;break;default:c=0}if(void 0!==l.verticalAlignment)switch(l.verticalAlignment){case"top":m=.5;break;case"bottom":m=-.5;break;case"baseline":m=-.25;break;default:m=0}}}null!=e&&o.push({angle:h,rotateClockWise:u,anchorX:c,anchorY:m,offsetX:g,offsetY:d,rasterizedResource:e})}return this.getSymbolImage(o)}getSymbolImage(e){const t=document.createElement("canvas"),a=t.getContext("2d");let i=0,r=0,n=0,s=0;const l=[];for(let u=0;u<e.length;u++){const t=e[u],h=t.rasterizedResource;if(!h)continue;const c=h.size,m=t.offsetX,g=t.offsetY,d=t.anchorX,f=t.anchorY,y=t.rotateClockWise||!1;let w=t.angle,p=(0,o.F2)(m)-c[0]*(.5+d),v=(0,o.F2)(g)-c[1]*(.5+f),M=p+c[0],C=v+c[1];if(w){y&&(w=-w);const e=Math.sin(w*Math.PI/180),t=Math.cos(w*Math.PI/180),a=p*t-v*e,i=p*e+v*t,r=p*t-C*e,n=p*e+C*t,o=M*t-C*e,s=M*e+C*t,l=M*t-v*e,h=M*e+v*t;p=Math.min(a,r,o,l),v=Math.min(i,n,s,h),M=Math.max(a,r,o,l),C=Math.max(i,n,s,h)}i=p<i?p:i,r=v<r?v:r,n=M>n?M:n,s=C>s?C:s;const z=a.createImageData(h.size[0],h.size[1]);z.data.set(new Uint8ClampedArray(h.image.buffer));const _={offsetX:m,offsetY:g,rotateClockwise:y,angle:w,rasterizedImage:z,anchorX:d,anchorY:f};l.push(_)}t.width=n-i,t.height=s-r;const h=-i,c=s;for(let u=0;u<l.length;u++){const e=l[u],t=this._imageDataToCanvas(e.rasterizedImage),i=e.rasterizedImage.width,r=e.rasterizedImage.height,n=h-i*(.5+e.anchorX),s=c-r*(.5-e.anchorY);if(e.angle){const i=(360-e.angle)*Math.PI/180;a.save(),a.translate((0,o.F2)(e.offsetX),-(0,o.F2)(e.offsetY)),a.translate(h,c),a.rotate(i),a.translate(-h,-c),a.drawImage(t,n,s),a.restore()}else a.drawImage(t,n+(0,o.F2)(e.offsetX),s-(0,o.F2)(e.offsetY))}const m=new C.e({x:h/t.width-.5,y:c/t.height-.5});return{imageData:0!==t.width&&0!==t.height?a.getImageData(0,0,t.width,t.height):a.createImageData(1,1),anchorPosition:m}}async _fetchPictureMarkerResource(e,t){const a=e.materialHash;if(!this._pictureMarkerCache.get(a)){const i=(await(0,r.Z)(e.cim.url,{responseType:"image",signal:null===t||void 0===t?void 0:t.signal})).data;this._pictureMarkerCache.set(a,i)}}_imageDataToCanvas(e){const t=this._imageDataCanvas,a=this._imageDataContext;return t.width=e.width,t.height=e.height,a.putImageData(e,0,0),t}_imageTo32Array(e,t,a,r){const n=this._imageDataCanvas,o=this._imageDataContext;if(n.width=t,n.height=a,o.drawImage(e,0,0,t,a),r){o.save();const n=new i.Z(r);o.fillStyle=n.toHex(),o.globalCompositeOperation="multiply",o.fillRect(0,0,t,a),o.globalCompositeOperation="destination-atop",o.drawImage(e,0,0,t,a),o.restore()}return new Uint32Array(o.getImageData(0,0,t,a).data.buffer)}_getRasterizedResource(e,t,a,i,r,n){let o,l,h;if("text"===e.type)return this._rasterizeTextResource(e,t,i,r,n);({analyzedCIM:o,hash:l}=function(e,t,a,i){let r,n;"function"==typeof e.materialHash?(r=(0,e.materialHash)(t,a,i),n=(0,s.S)(e.cim,e.materialOverrides)):(r=e.materialHash,n=e.cim);return{analyzedCIM:n,hash:r}}(e,t,r,n));const c=z(i);if("CIMPictureMarker"===e.cim.type){const a=(0,w.hf)(e.size,t,r,n)*c,{image:i,width:o,height:s}=this._getPictureResource(e,a,(0,w.hf)(e.color,t,r,n));return h={image:i,size:[o,s],sdf:!1,simplePattern:!1,anchorX:e.anchorPoint?e.anchorPoint.x:0,anchorY:e.anchorPoint?e.anchorPoint.y:0},h}(0,M.FW)(o,c,{preserveOutlineWidth:!1});const m=o;l+=a,i&&(l+=JSON.stringify(i));const u=this._resourceCache;return u.has(l)?u.get(l):(h=this._rasterizer.rasterizeJSONResource({cim:m,type:e.type,url:e.url,mosaicHash:l,size:null,path:null},window.devicePixelRatio||1,this._avoidSDF),u.set(l,h),h)}_rasterizeTextResource(e,t,a,i,r){var n,o,s;const l=z(a),h=(0,w.hf)(e.text,t,i,r);if(!h||0===h.length)return null;const c=e.cim,m=(0,w.hf)((null===c||void 0===c?void 0:c.fontFamilyName)||e.fontName,t,i,r),u=(0,w.hf)((null===c||void 0===c||null===(n=c.font)||void 0===n?void 0:n.style)||e.style,t,i,r),g=(0,w.hf)((null===c||void 0===c||null===(o=c.font)||void 0===o?void 0:o.weight)||e.weight,t,i,r),d=(0,w.hf)((null===c||void 0===c||null===(s=c.font)||void 0===s?void 0:s.decoration)||e.decoration,t,i,r),f=(0,w.hf)(e.size,t,i,r)*l,y=(0,w.hf)(e.horizontalAlignment,t,i,r),p=(0,w.hf)(e.verticalAlignment,t,i,r),v=(0,w.nn)((0,w.hf)(e.color,t,i,r)),M=(0,w.nn)((0,w.hf)(e.outlineColor,t,i,r)),C=(0,w.hf)(e.outlineSize,t,i,r),_=null!=e.backgroundColor?(0,w.nn)(e.backgroundColor):null,b=null!=e.borderLineColor?(0,w.nn)(e.borderLineColor):null,S=null!=e.borderLineWidth?e.borderLineWidth:null,x={color:v,size:f,horizontalAlignment:y,verticalAlignment:p,font:{family:m,style:u,weight:g,decoration:d},halo:{size:C||0,color:M,style:u},backgroundColor:_,borderLine:null!=b&&null!=S?{color:b,size:S}:null,pixelRatio:1,premultiplyColors:!this._avoidSDF};return this._textRasterizer.rasterizeText(h,x)}_getPictureResource(e,t,a){const i=this._pictureMarkerCache.get(e.materialHash);if(!i)return null;const r=i.height/i.width,n=t?r>1?(0,o.F2)(t):(0,o.F2)(t)/r:i.width,s=t?r>1?(0,o.F2)(t)*r:(0,o.F2)(t):i.height;return{image:this._imageTo32Array(i,n,s,a),width:n,height:s}}}},26554:(e,t,a)=>{a.d(t,{Y:()=>o,m:()=>s});var i=a(46228),r=a(16889);const n=e=>"vertical"===e||"horizontal"===e||"cross"===e||"esriSFSCross"===e||"esriSFSVertical"===e||"esriSFSHorizontal"===e;function o(e,t,a){const i=(0,r.fp)(Math.ceil(a)),o=n(t)?8*i:16*i,s=2*i;e.width=o,e.height=o;const l=e.getContext("2d");l.strokeStyle="#FFFFFF",l.lineWidth=i,l.beginPath(),"vertical"!==t&&"cross"!==t&&"esriSFSCross"!==t&&"esriSFSVertical"!==t||(l.moveTo(o/2,-s),l.lineTo(o/2,o+s)),"horizontal"!==t&&"cross"!==t&&"esriSFSCross"!==t&&"esriSFSHorizontal"!==t||(l.moveTo(-s,o/2),l.lineTo(o+s,o/2)),"forward-diagonal"!==t&&"diagonal-cross"!==t&&"esriSFSDiagonalCross"!==t&&"esriSFSForwardDiagonal"!==t||(l.moveTo(-s,-s),l.lineTo(o+s,o+s),l.moveTo(o-s,-s),l.lineTo(o+s,s),l.moveTo(-s,o-s),l.lineTo(s,o+s)),"backward-diagonal"!==t&&"diagonal-cross"!==t&&"esriSFSBackwardDiagonal"!==t&&"esriSFSDiagonalCross"!==t||(l.moveTo(o+s,-s),l.lineTo(-s,o+s),l.moveTo(s,-s),l.lineTo(-s,s),l.moveTo(o+s,o-s),l.lineTo(o-s,o+s)),l.stroke();const h=l.getImageData(0,0,e.width,e.height),c=new Uint8Array(h.data);let m;for(let r=0;r<c.length;r+=4)m=c[r+3]/255,c[r]=c[r]*m,c[r+1]=c[r+1]*m,c[r+2]=c[r+2]*m;return[c,e.width,e.height]}function s(e,t){const a="Butt"===t,r="Square"===t,n=!a&&!r;e.length%2==1&&(e=[...e,...e]);const o=15.5;let s=0;for(const i of e)s+=i;const l=Math.round(s*o),h=new Float32Array(31*l),c=7.75;let m=0,u=0,g=.5,d=!0;for(const i of e){for(m=u,u+=i*o;g<=u;){let e=.5;for(;e<31;){const t=(e-.5)*l+g-.5,i=n?(e-o)*(e-o):Math.abs(e-o);h[t]=d?a?Math.max(Math.max(m+c-g,i),Math.max(g-u+c,i)):i:n?Math.min((g-m)*(g-m)+i,(g-u)*(g-u)+i):r?Math.min(Math.max(g-m,i),Math.max(u-g,i)):Math.min(Math.max(g-m+c,i),Math.max(u+c-g,i)),e++}g++}d=!d}const f=h.length,y=new Uint8Array(4*f);for(let w=0;w<f;++w){const e=(n?Math.sqrt(h[w]):h[w])/o;(0,i.I)(e,y,4*w)}return[y,l,31]}},54763:(e,t,a)=>{a.d(t,{previewCIMSymbol:()=>f});var i=a(17842),r=a(78915),n=a(99969),o=a(31027),s=a(37817),l=a(69157);const h=new n.CIMSymbolRasterizer(null,!0),c=(0,i.Wz)(s.b_.size),m=(0,i.Wz)(s.b_.maxSize),u=(0,i.Wz)(s.b_.lineWidth),g=1;async function d(e,t,a){const i=null===t||void 0===t?void 0:t.size;let n=null!=i&&"object"==typeof i&&"width"in i?i.width:i,o=null!=i&&"object"==typeof i&&"height"in i?i.height:i;if(null==n||null==o)if("esriGeometryPolygon"===a)n=c,o=c;else{const i=await async function(e,t,a){const{feature:i,fieldMap:n,viewParams:o}=t.cimOptions||t,s=await r.E0.resolveSymbolOverrides(e.data,i,null,n,a,null,o);if(!s)return null;(e=e.clone()).data={type:"CIMSymbolReference",symbol:s},e.data.primitiveOverrides=void 0;const l=[];return r.B$.fetchResources(s,h.resourceManager,l),r.B$.fetchFonts(s,h.resourceManager,l),l.length>0&&await Promise.all(l),r.B$.getEnvelope(s,null,h.resourceManager)}(e,t,a);i&&(n=i.width,o=i.height),"esriGeometryPolyline"===a&&(n=u),n=null!=n&&isFinite(n)?Math.min(n,m):c,o=null!=o&&isFinite(o)?Math.max(Math.min(o,m),g):c}return"legend"===t.style&&"esriGeometryPolyline"===a&&(n=u),{width:n,height:o}}async function f(e){var t,a,r;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{node:s,opacity:c,symbolConfig:m}=n,u=null!=m&&"object"==typeof m&&"isSquareFill"in m&&m.isSquareFill,g=n.cimOptions||n,f=g.geometryType||(0,o.JW)(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.symbol),y=await d(e,n,f),{feature:w,fieldMap:p}=g,v=u||"esriGeometryPolygon"!==f?"preview":"legend",M=await h.rasterizeCIMSymbolAsync(e,w,y,v,p,f,null,g.viewParams,g.allowScalingUp);if(!M)return null;const{width:C,height:z}=M,_=document.createElement("canvas");_.width=C,_.height=z,_.getContext("2d").putImageData(M,0,0);const b=(0,i.F2)(y.width),S=(0,i.F2)(y.height),x=new Image(b,S);x.src=_.toDataURL(),x.ariaLabel=null!==(a=n.ariaLabel)&&void 0!==a?a:null,x.alt=null!==(r=n.ariaLabel)&&void 0!==r?r:"",null!=c&&(x.style.opacity="".concat(c));let F=x;if(null!=n.effectView){const e={shape:{type:"image",x:0,y:0,width:b,height:S,src:x.src},fill:null,stroke:null,offset:[0,0]};F=(0,l.wh)([[e]],[b,S],{effectView:n.effectView,ariaLabel:n.ariaLabel})}return s&&F&&s.appendChild(F),F}}}]);
//# sourceMappingURL=4763.a4c4df8d.chunk.js.map