"use strict";(self.webpackChunkn2_utility=self.webpackChunkn2_utility||[]).push([[2463],{92463:(e,n,t)=>{t.r(n),t.d(n,{hydratedAdapter:()=>c});var a=t(53866),i=t(77577),o=t(585),s=t(80885),r=t(29909);const c={convertToGEGeometry:function(e,n){if(null==n)return null;let t="cache"in n?n.cache._geVersion:void 0;return null==t&&(t=e.convertJSONToGeometry(n),"cache"in n&&(n.cache._geVersion=t)),t},exportPoint:function(e,n,t){const a=e.hasZ(n),i=e.hasM(n),s=new o.Z({x:e.getPointX(n),y:e.getPointY(n),spatialReference:t});return a&&(s.z=e.getPointZ(n)),i&&(s.m=e.getPointM(n)),s.cache._geVersion=n,s},exportPolygon:function(e,n,t){const a=new s.Z({rings:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return a.cache._geVersion=n,a},exportPolyline:function(e,n,t){const a=new r.Z({paths:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return a.cache._geVersion=n,a},exportMultipoint:function(e,n,t){const a=new i.Z({hasZ:e.hasZ(n),hasM:e.hasM(n),points:e.exportPoints(n),spatialReference:t});return a.cache._geVersion=n,a},exportExtent:function(e,n,t){const i=e.hasZ(n),o=e.hasM(n),s=new a.Z({xmin:e.getXMin(n),ymin:e.getYMin(n),xmax:e.getXMax(n),ymax:e.getYMax(n),spatialReference:t});if(i){const t=e.getZExtent(n);s.zmin=t.vmin,s.zmax=t.vmax}if(o){const t=e.getMExtent(n);s.mmin=t.vmin,s.mmax=t.vmax}return s.cache._geVersion=n,s}}}}]);
//# sourceMappingURL=2463.a6e6ed71.chunk.js.map