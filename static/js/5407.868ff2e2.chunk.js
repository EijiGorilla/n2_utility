"use strict";(self.webpackChunkn2_utility=self.webpackChunkn2_utility||[]).push([[5407],{5407:(i,e,l)=>{l.r(e),l.d(e,{default:()=>u});var t=l(27366),s=l(80987),r=l(60354),a=l(94172),n=l(49861),d=(l(25243),l(63780),l(93169),l(69912)),y=l(67581);let o=class extends y.Z{constructor(i){super(i),this.type="group",this.layerViews=new s.Z}destroy(){this.layerViews.length=0}_allLayerViewVisibility(i){this.layerViews.forEach((e=>{e.visible=i}))}initialize(){this.addHandles([this.layerViews.on("change",(i=>this._layerViewsChangeHandler(i))),(0,a.YP)((()=>{var i;return null===(i=this.layer)||void 0===i?void 0:i.visibilityMode}),(()=>{this.layer&&this._applyVisibility((()=>this._allLayerViewVisibility(this.visible)),(()=>this._applyExclusiveVisibility(null)))}),a.Z_),(0,a.YP)((()=>this.visible),(i=>{this._applyVisibility((()=>this._allLayerViewVisibility(i)),(()=>{}))}),a.Z_)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}set layerViews(i){this._set("layerViews",(0,r.Z)(i,this._get("layerViews")))}get updatingProgress(){return 0===this.layerViews.length?1:this.layerViews.reduce(((i,e)=>i+e.updatingProgress),0)/this.layerViews.length}isUpdating(){return this.layerViews.some((i=>i.updating))}_hasLayerViewVisibleOverrides(){return this.layerViews.some((i=>i._isOverridden("visible")))}_findLayerViewForLayer(i){return i&&this.layerViews.find((e=>e.layer===i))}_firstVisibleOnLayerOrder(){const i=this.layer.layers.find((i=>{const e=this._findLayerViewForLayer(i);return!(null===e||void 0===e||!e.visible)}));return i&&this._findLayerViewForLayer(i)}_applyExclusiveVisibility(i){null==i&&null==(i=this._firstVisibleOnLayerOrder())&&this.layerViews.length>0&&(i=this._findLayerViewForLayer(this.layer.layers.at(0))),this.layerViews.forEach((e=>{e.visible=e===i}))}_layerViewsChangeHandler(i){this.removeHandles("grouplayerview:visible"),this.addHandles(this.layerViews.map((i=>(0,a.YP)((()=>i.visible),(e=>this._applyVisibility((()=>{e!==this.visible&&(i.visible=this.visible)}),(()=>this._applyExclusiveVisibility(e?i:null)))),a.Z_))).toArray(),"grouplayerview:visible");const e=i.added[i.added.length-1];this._applyVisibility((()=>this._allLayerViewVisibility(this.visible)),(()=>this._applyExclusiveVisibility(null!==e&&void 0!==e&&e.visible?e:null)))}_applyVisibility(i,e){var l,t;this._hasLayerViewVisibleOverrides()&&("inherited"===(null===(l=this.layer)||void 0===l?void 0:l.visibilityMode)?i():"exclusive"===(null===(t=this.layer)||void 0===t?void 0:t.visibilityMode)&&e())}};(0,t._)([(0,n.Cb)({cast:r.R})],o.prototype,"layerViews",null),(0,t._)([(0,n.Cb)({readOnly:!0})],o.prototype,"updatingProgress",null),(0,t._)([(0,n.Cb)()],o.prototype,"view",void 0),o=(0,t._)([(0,d.j)("esri.views.layers.GroupLayerView")],o);const u=o},67581:(i,e,l)=>{l.d(e,{Z:()=>p});var t=l(27366),s=l(7138),r=l(91505),a=l(79056),n=l(32718),d=l(92026),y=l(67426),o=l(49861),u=(l(25243),l(63780),l(93169),l(69912)),h=l(46634);let v=class extends((0,a.IG)((0,y.v)(r.Z.EventedMixin(s.Z)))){constructor(i){super(i),this._updatingHandles=new h.R,this.layer=null,this.parent=null}initialize(){this.when().catch((i=>{if("layerview:create-error"!==i.name){var e;const l=this.layer&&this.layer.id||"no id",t=(null===(e=this.layer)||void 0===e?void 0:e.title)||"no title";n.Z.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(t,"', id: '").concat(l,"')"),i)}}))}destroy(){this._updatingHandles=(0,d.SC)(this._updatingHandles)}get fullOpacity(){var i,e,l,t;return(null!==(i=null===(e=this.layer)||void 0===e?void 0:e.opacity)&&void 0!==i?i:1)*(null!==(l=null===(t=this.parent)||void 0===t?void 0:t.fullOpacity)&&void 0!==l?l:1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var i;return!this.suspended&&!0===(null===(i=this.layer)||void 0===i?void 0:i.legendEnabled)}get updating(){var i;return!((null===(i=this._updatingHandles)||void 0===i||!i.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var i;return!0===(null===(i=this.layer)||void 0===i?void 0:i.visible)}set visible(i){this._overrideIfSome("visible",i)}canResume(){var i,e,l;return this.visible&&(null===(i=this.layer)||void 0===i?void 0:i.loaded)&&!(null!==(e=this.parent)&&void 0!==e&&e.suspended)&&(null===(l=this.view)||void 0===l?void 0:l.ready)||!1}getSuspendInfo(){var i,e;const l=null!==(i=this.parent)&&void 0!==i&&i.suspended?this.parent.suspendInfo:{};return null!==(e=this.view)&&void 0!==e&&e.ready||(l.viewNotReady=!0),this.layer&&this.layer.loaded||(l.layerNotLoaded=!0),this.visible||(l.layerInvisible=!0),l}isUpdating(){return!1}};(0,t._)([(0,o.Cb)()],v.prototype,"fullOpacity",null),(0,t._)([(0,o.Cb)()],v.prototype,"layer",void 0),(0,t._)([(0,o.Cb)()],v.prototype,"parent",void 0),(0,t._)([(0,o.Cb)({readOnly:!0})],v.prototype,"suspended",null),(0,t._)([(0,o.Cb)({readOnly:!0})],v.prototype,"suspendInfo",null),(0,t._)([(0,o.Cb)({readOnly:!0})],v.prototype,"legendEnabled",null),(0,t._)([(0,o.Cb)({type:Boolean,readOnly:!0})],v.prototype,"updating",null),(0,t._)([(0,o.Cb)({readOnly:!0})],v.prototype,"updatingProgress",null),(0,t._)([(0,o.Cb)()],v.prototype,"visible",null),(0,t._)([(0,o.Cb)()],v.prototype,"view",void 0),v=(0,t._)([(0,u.j)("esri.views.layers.LayerView")],v);const p=v}}]);
//# sourceMappingURL=5407.868ff2e2.chunk.js.map