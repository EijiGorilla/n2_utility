"use strict";(self.webpackChunkn2_utility=self.webpackChunkn2_utility||[]).push([[5569],{95569:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var i=n(22526),s=n(67009),r=n(10662),a=n(79762);class c{async extract(e){const t=o(e),n=(0,a.Kl)(t),i=[t.data.buffer];return{result:l(n,i),transferList:i}}async extractComponentsEdgeLocations(e){const t=o(e),n=(0,a.kY)(t.data,t.skipDeduplicate,t.indices,t.indicesLength),s=(0,r.n)(n,d,f),c=[];return{result:(0,i.H)(s.regular.instancesData,c),transferList:c}}async extractEdgeLocations(e){const t=o(e),n=(0,a.kY)(t.data,t.skipDeduplicate,t.indices,t.indicesLength),s=(0,r.n)(n,u,f),c=[];return{result:(0,i.H)(s.regular.instancesData,c),transferList:c}}}function o(e){return{data:s.tf.createView(e.dataBuffer),indices:"Uint32Array"===e.indicesType?new Uint32Array(e.indices):"Uint16Array"===e.indicesType?new Uint16Array(e.indices):e.indices,indicesLength:e.indicesLength,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate}}function l(e,t){return t.push(e.regular.lodInfo.lengths.buffer),t.push(e.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:(0,i.H)(e.regular.instancesData,t),lodInfo:{lengths:e.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:(0,i.H)(e.silhouette.instancesData,t),lodInfo:{lengths:e.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:e.averageEdgeLength}}const u=new class{allocate(e){return a.Yr.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,n){e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1)}},d=new class{allocate(e){return a.n_.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,n){e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1),e.componentIndex.set(t,n.componentIndex)}},f={allocate:()=>null,write:()=>{},trim:()=>null}}}]);
//# sourceMappingURL=5569.c4cc2719.chunk.js.map