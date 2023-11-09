"use strict";(self.webpackChunkn2_utility=self.webpackChunkn2_utility||[]).push([[8994],{25666:(e,t,r)=>{r.d(t,{cn:()=>i,j:()=>n,lK:()=>s});const i="updating";function s(e){return"updating"===e?null:e}function n(e){return"updating"===e}},59147:(e,t,r)=>{r.d(t,{Z:()=>A});var i=r(27366),s=r(52639),n=r(44055),l=(r(94931),r(78451),r(98689),r(57823),r(32066),r(49018),r(34999),r(28189),r(9014),r(40464)),o=r(76200),a=r(10064),u=r(43404),d=r(54472),p=r(32718),y=r(67426),h=r(49861),c=(r(25243),r(63780),r(93169),r(27135)),g=r(38511),f=r(69912),b=r(53866),v=r(78952),_=r(64326),w=r(58550),m=r(96978),F=r(45948),E=r(25610),C=r(52410),x=r(37270),S=r(30494),L=r(34207),I=r(21149),O=r(81085),Z=r(64575),V=r(44011),q=r(24405);const j="esri.layers.buildingSublayers.BuildingComponentSublayer",Q=p.Z.getLogger(j),M=(0,E.v)();let R=class extends(d.Z.LoadableMixin((0,y.v)(w.Z))){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){var e,t;return this.layer?{path:"".concat(null===(e=this.layer.parsedUrl)||void 0===e?void 0:e.path,"/sublayers/").concat(this.id),query:null===(t=this.layer.parsedUrl)||void 0===t?void 0:t.query}:{path:""}}get fieldsIndex(){return new C.Z(this.fields)}readAssociatedLayer(e,t){const r=this.layer.associatedFeatureServiceItem,i=t.associatedLayerID;return null!=r&&"number"==typeof i?new _.default({portalItem:r,layerId:i}):null}get objectIdField(){if(null!=this.fields)for(const e of this.fields)if("oid"===e.type)return e.name;return null}get displayField(){return null!=this.associatedLayer?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const t=null!=e?e.signal:null,r=this._fetchService(t).then((()=>{this.indexInfo=(0,S.T)(this.parsedUrl.path,this.rootNode,this.nodePages,this.apiKey,Q,t)}));return this.addResolvingPromise(r),Promise.resolve(this)}createPopupTemplate(e){return(0,O.eZ)(this,e)}async _fetchService(e){const t=(await(0,o.Z)(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var r,i,s;const n=null===(r=this.getFeatureType(null===t||void 0===t?void 0:t.feature))||void 0===r||null===(r=r.domains)||void 0===r?void 0:r[e];return n&&"inherited"!==n.type?n:null!==(i=null===(s=this.getField(e))||void 0===s?void 0:s.domain)&&void 0!==i?i:null}getFeatureType(e){return e&&null!=this.associatedLayer?this.associatedLayer.getFeatureType(e):null}get types(){var e;return null!=this.associatedLayer&&null!==(e=this.associatedLayer.types)&&void 0!==e?e:[]}get typeIdField(){return null!=this.associatedLayer?this.associatedLayer.typeIdField:null}get geometryType(){return"3d-object"===this.layerType?"mesh":"point"}get profile(){return"3d-object"===this.layerType?"mesh-pyramids":"points"}get capabilities(){const e=null!=this.associatedLayer&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:m.C,{query:t,data:{supportsZ:r,supportsM:i,isVersioned:s}}=e;return{query:t,data:{supportsZ:r,supportsM:i,isVersioned:s}}}createQuery(){const e=new I.Z;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(null!==e&&void 0!==e&&e.features)for(const t of e.features)t.layer=this.layer,t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}async queryCachedAttributes(e,t){const r=(0,x.Lk)(this.fieldsIndex,await(0,q.e7)(this,(0,q.V5)(this)));return(0,V.xe)(this.parsedUrl.path,this.attributeStorageInfo,e,t,r)}async queryCachedFeature(e,t){const r=await this.queryCachedAttributes(e,[t]);if(!r||0===r.length)throw new a.Z("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const i=new s.Z;return i.attributes=r[0],i.layer=this,i.sourceLayer=this,i}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:null!=this.associatedLayer}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return null!=e&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),null==this.associatedLayer)throw new a.Z("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new a.Z("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};(0,i._)([(0,h.Cb)({readOnly:!0})],R.prototype,"parsedUrl",null),(0,i._)([(0,h.Cb)({type:L.U4,readOnly:!0})],R.prototype,"nodePages",void 0),(0,i._)([(0,h.Cb)({type:[L.QI],readOnly:!0})],R.prototype,"materialDefinitions",void 0),(0,i._)([(0,h.Cb)({type:[L.Yh],readOnly:!0})],R.prototype,"textureSetDefinitions",void 0),(0,i._)([(0,h.Cb)({type:[L.H3],readOnly:!0})],R.prototype,"geometryDefinitions",void 0),(0,i._)([(0,h.Cb)({readOnly:!0})],R.prototype,"serviceUpdateTimeStamp",void 0),(0,i._)([(0,h.Cb)({readOnly:!0})],R.prototype,"store",void 0),(0,i._)([(0,h.Cb)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],R.prototype,"rootNode",void 0),(0,i._)([(0,h.Cb)({readOnly:!0})],R.prototype,"attributeStorageInfo",void 0),(0,i._)([(0,h.Cb)(M.fields)],R.prototype,"fields",void 0),(0,i._)([(0,h.Cb)({readOnly:!0})],R.prototype,"fieldsIndex",null),(0,i._)([(0,h.Cb)({readOnly:!0,type:_.default})],R.prototype,"associatedLayer",void 0),(0,i._)([(0,g.r)("service","associatedLayer",["associatedLayerID"])],R.prototype,"readAssociatedLayer",null),(0,i._)([(0,h.Cb)(M.outFields)],R.prototype,"outFields",void 0),(0,i._)([(0,h.Cb)({type:String,readOnly:!0})],R.prototype,"objectIdField",null),(0,i._)([(0,h.Cb)({readOnly:!0,type:String,json:{read:!1}})],R.prototype,"displayField",null),(0,i._)([(0,h.Cb)({readOnly:!0,type:String})],R.prototype,"apiKey",null),(0,i._)([(0,h.Cb)({readOnly:!0,type:b.Z})],R.prototype,"fullExtent",null),(0,i._)([(0,h.Cb)({readOnly:!0,type:v.Z})],R.prototype,"spatialReference",null),(0,i._)([(0,h.Cb)({readOnly:!0})],R.prototype,"version",null),(0,i._)([(0,h.Cb)({readOnly:!0,type:Z.Z})],R.prototype,"elevationInfo",null),(0,i._)([(0,h.Cb)({readOnly:!0,type:Number})],R.prototype,"minScale",null),(0,i._)([(0,h.Cb)({readOnly:!0,type:Number})],R.prototype,"maxScale",null),(0,i._)([(0,h.Cb)({readOnly:!0,type:Number})],R.prototype,"effectiveScaleRange",null),(0,i._)([(0,h.Cb)({type:["hide","show"],json:{write:!0}})],R.prototype,"listMode",void 0),(0,i._)([(0,h.Cb)({types:l.o,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],R.prototype,"renderer",void 0),(0,i._)([(0,h.Cb)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],R.prototype,"definitionExpression",void 0),(0,i._)([(0,h.Cb)(F.C_)],R.prototype,"popupEnabled",void 0),(0,i._)([(0,h.Cb)({type:n.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],R.prototype,"popupTemplate",void 0),(0,i._)([(0,h.Cb)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],R.prototype,"normalReferenceFrame",void 0),(0,i._)([(0,h.Cb)({readOnly:!0,json:{read:!1}})],R.prototype,"defaultPopupTemplate",null),(0,i._)([(0,h.Cb)()],R.prototype,"types",null),(0,i._)([(0,h.Cb)()],R.prototype,"typeIdField",null),(0,i._)([(0,h.Cb)({json:{write:!1}}),(0,c.J)(new u.X({"3DObject":"3d-object",Point:"point"}))],R.prototype,"layerType",void 0),(0,i._)([(0,h.Cb)()],R.prototype,"geometryType",null),(0,i._)([(0,h.Cb)()],R.prototype,"profile",null),(0,i._)([(0,h.Cb)({readOnly:!0,json:{read:!1}})],R.prototype,"capabilities",null),R=(0,i._)([(0,f.j)(j)],R);const A=R},15801:(e,t,r)=>{r.d(t,{Z:()=>f});var i,s=r(27366),n=r(80987),l=r(93002),o=r(51370),a=r(49861),u=(r(25243),r(63780),r(93169),r(69912)),d=r(59147),p=r(58550);const y={type:n.Z,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:h}}},read:!1}};function h(e,t,r){if(e&&Array.isArray(e))return new n.Z(e.map((e=>{const t=function(e){return"group"===e.layerType?c:d.Z}(e);if(t){const i=new t;return i.read(e,r),i}return null!==r&&void 0!==r&&r.messages&&e&&r.messages.push(new o.Z("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:r})),null})))}let c=i=class extends p.Z{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return(0,l.w)(this,(e=>i.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)}))))}};var g;(0,s._)([(0,a.Cb)({type:["hide","show","hide-children"],json:{write:!0}})],c.prototype,"listMode",void 0),(0,s._)([(0,a.Cb)(y)],c.prototype,"sublayers",void 0),c=i=(0,s._)([(0,u.j)("esri.layers.buildingSublayers.BuildingGroupSublayer")],c),(g=c||(c={})).sublayersProperty=y,g.readSublayers=h,g.forEachSublayer=function e(t,r){t.forEach((t=>{r(t),"building-group"===t.type&&e(t.sublayers,r)}))};const f=c},58550:(e,t,r)=>{r.d(t,{Z:()=>y});var i=r(27366),s=r(79056),n=r(97642),l=r(49861),o=r(25243),a=(r(63780),r(93169),r(38511)),u=r(69912),d=r(45948);let p=class extends((0,s.IG)(n.w)){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.legendEnabled=!0,this.visible=!0,this.opacity=1}readTitle(e,t){return"string"==typeof t.alias?t.alias:"string"==typeof t.name?t.name:""}readIdOnlyOnce(e){return-1!==this.id?this.id:"number"==typeof e?e:-1}};(0,i._)([(0,l.Cb)({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],p.prototype,"title",void 0),(0,i._)([(0,a.r)("service","title",["alias","name"])],p.prototype,"readTitle",null),(0,i._)([(0,l.Cb)()],p.prototype,"layer",void 0),(0,i._)([(0,l.Cb)({type:o.z8,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],p.prototype,"id",void 0),(0,i._)([(0,a.r)("service","id")],p.prototype,"readIdOnlyOnce",null),(0,i._)([(0,l.Cb)((0,d.Lx)(String))],p.prototype,"modelName",void 0),(0,i._)([(0,l.Cb)((0,d.Lx)(Boolean))],p.prototype,"isEmpty",void 0),(0,i._)([(0,l.Cb)({type:Boolean,nonNullable:!0})],p.prototype,"legendEnabled",void 0),(0,i._)([(0,l.Cb)({type:Boolean,json:{name:"visibility",write:!0}})],p.prototype,"visible",void 0),(0,i._)([(0,l.Cb)({type:Number,json:{write:!0}})],p.prototype,"opacity",void 0),p=(0,i._)([(0,u.j)("esri.layers.buildingSublayers.BuildingSublayer")],p);const y=p},7452:(e,t,r)=>{r.r(t),r.d(t,{default:()=>$});var i=r(27366),s=r(52639),n=r(7138),l=r(63780),o=r(80987),a=r(42537),u=r(32718),d=r(92026),p=r(66978),y=r(94172),h=r(49861),c=(r(25243),r(93169),r(69912)),g=(r(15801),r(10064)),f=r(54054),b=(r(59147),r(18661)),v=r(37270),_=r(21149),w=r(91505),m=r(79056),F=r(67426);const E=(e,t)=>{let r=class extends((0,F.v)((0,m.IG)(w.Z.EventedMixin(e)))){constructor(e){super(e),this.sublayer=null,this.parent=null,this.view=null}initialize(){}get suspended(){return!this.canResume()}get updating(){return!this.suspended&&this.isUpdating()}get visible(){var e;return!(null===(e=this.sublayer)||void 0===e||!e.visible)}set visible(e){this._overrideIfSome("visible",e)}get fullOpacity(){var e,t;const r=e=>null!=e?e:1;return r(null===(e=this.sublayer)||void 0===e?void 0:e.opacity)*r(null===(t=this.parent)||void 0===t?void 0:t.fullOpacity)}canResume(){var e,t;return!(null!==(e=this.parent)&&void 0!==e&&e.suspended)&&(null===(t=this.view)||void 0===t?void 0:t.ready)&&this.visible||!1}isUpdating(){return!1}};return(0,i._)([(0,h.Cb)()],r.prototype,"sublayer",void 0),(0,i._)([(0,h.Cb)()],r.prototype,"parent",void 0),(0,i._)([(0,h.Cb)({readOnly:!0})],r.prototype,"suspended",null),(0,i._)([(0,h.Cb)({type:Boolean,readOnly:!0})],r.prototype,"updating",null),(0,i._)([(0,h.Cb)()],r.prototype,"view",void 0),(0,i._)([(0,h.Cb)()],r.prototype,"visible",null),(0,i._)([(0,h.Cb)()],r.prototype,"fullOpacity",null),r=(0,i._)([(0,c.j)("esri.views.3d.layers.BuildingSublayerView3D")],r),r};var C,x,S=r(31625),L=r(42757),I=r(67077),O=r(97689),Z=r(49420);(x=C||(C={}))[x.Solid=0]="Solid",x[x.WireFrame=1]="WireFrame",x[x.XRay=2]="XRay";const V=.075;function q(e){switch(e.filterMode.type){case"solid":return{mode:C.Solid};case"wire-frame":return{mode:C.WireFrame,edgeMaterial:(0,O.C8)(e.filterMode.edges,{})};case"x-ray":return{mode:C.XRay}}}function j(e,t){if(null==t)return e.color[3]=0,e.edgeMaterial=null,void(e.pickable=!1);switch(t.mode){case C.Solid:return;case C.WireFrame:return e.color[3]=0,e.edgeMaterial=t.edgeMaterial,void(e.pickable=!1);case C.XRay:return e.color[0]=1,e.color[1]=1,e.color[2]=1,e.color[3]*=.15,e.colorMixMode=Z.a9.Replace,e.castShadows=!1,e.pickable=!1,void(e.edgeMaterial=function(e){return null==e?null:(Q.lastMaterial!==e&&(Q.cachedMaterial=function(e){const t=(0,I.d)(e.color);return t[3]*=V,{...e,color:t}}(e),Q.lastMaterial=e),Q.cachedMaterial)}(e.edgeMaterial))}}const Q={cachedMaterial:null,lastMaterial:null};var M=r(31730),R=r(71039),A=r(43812),T=r(51246),P=r(73552),D=r(44011),N=r(1247);r(75505),r(86741),r(47492);class U extends n.Z{constructor(){super(...arguments),this.sublayer=null}get updating(){return!1}get suspended(){return!1}get availableFields(){return[]}get filter(){return null}set filter(e){throw new Error("Not implemented")}queryFeatures(e,t){throw new Error("Not implemented")}queryObjectIds(e,t){throw new Error("Not implemented")}queryFeatureCount(e,t){throw new Error("Not implemented")}createQuery(){throw new Error("Not implemented")}queryExtent(e,t){throw new Error("Not implemented")}highlight(e){throw new Error("Not implemented")}}(0,i._)([(0,h.Cb)()],U.prototype,"sublayer",void 0),(0,i._)([(0,h.Cb)()],U.prototype,"availableFields",null),(0,i._)([(0,h.Cb)()],U.prototype,"filter",null);var B=r(24405),G=r(93463);let k=class extends((0,N.l)((0,S.NI)(E(U)))){constructor(){super(...arguments),this.type="building-component-sublayer-3d",this.layerView=null,this._elevationContext="scene",this._isIntegratedMesh=!1,this._supportsLabeling=!1,this.requiredFields=[],this.progressiveLoadFactor=1,this._queryEngine=null}get i3slayer(){return this.sublayer}get layerUid(){return this.sublayer.layer.uid}get sublayerUid(){return this.sublayer.uid}get layerId(){return this.sublayer.layer.id}get sublayerId(){return this.sublayer.id}get layerPopupEnabledAndHasTemplate(){var e;return this.sublayer.popupEnabled&&(0,B.zc)(this.sublayer,null===(e=this.layerView)||void 0===e||null===(e=e.view.popup)||void 0===e?void 0:e.defaultPopupTemplateEnabled)}initialize(){this._updatingHandles.add((()=>[this.sublayer.renderer,this.definitionExpressionFields,this.filterExpressionFields]),(()=>this._updateRequiredFields())),this._updatingHandles.add((()=>this.sublayer.renderer),(e=>this._rendererChange(e)),y.nn);const e=()=>this._filterChange();this._updatingHandles.add((()=>this.parsedDefinitionExpression),e),this._updatingHandles.add((()=>null!=this._filter?this._filter.sortedObjectIds:null),e),this._updatingHandles.add((()=>null!=this._filter?this._filter.parsedWhereClause:null),e),this._updatingHandles.add((()=>[null!=this._filter?this._filter.parsedGeometry:null,null!=this.filter?this.filter.spatialRelationship:null]),(()=>this._geometryFilterChange())),this._updatingHandles.add((()=>this.parsedFilterExpressions),(()=>this._updateSymbologyOverride()),y.nn),this.addResolvingPromise(this._updateRequiredFields())}get lodFactor(){return this.view.qualitySettings.sceneService.object.lodFactor}get parsedFilterExpressions(){return"Overview"!==this.sublayer.modelName&&this.layerView?this.layerView.filterExpressions.map((e=>{let t,[r,i]=e;try{t=f.WhereClause.create(r,this.sublayer.fieldsIndex)}catch(l){return u.Z.getLogger(this).error("Failed to parse filterExpression: "+l),null}if(!t.isStandardized)return u.Z.getLogger(this).error("filterExpression is using non standard function"),null;const s=[],n=t.fieldNames;return(0,D.e8)(n,this.sublayer.fields,{missingFields:s}),s.length>0?(u.Z.getLogger(this).error("filterExpression references unknown fields: ".concat(s.join(", "))),null):[t,i]})).filter((e=>null!=e)):[]}get filter(){return null!=this._filter?this._filter.viewFilter:null}set filter(e){null!=e&&R.z.checkSupport(e)?null!=this._filter?this._filter.viewFilter=e:this._filter=new R.z({viewFilter:e,layerFieldsIndex:this.sublayer.fieldsIndex,loadAsyncModule:e=>this._loadAsyncModule(e),addSqlFilter:(e,t)=>this.addSqlFilter(e,t,this.logError)}):this._filter=null}isUpdating(){return super.isUpdating()||null!=this._filter&&this._filter.updating}_updateSymbologyOverride(){const e=this.parsedFilterExpressions;e.length>0?this._setSymbologyOverride(((t,r)=>{for(const[i,s]of e)try{if(i.testFeature(t))return j(r,s)}catch(q){this.logError(q)}return j(r,null)}),this.filterExpressionFields):this._setSymbologyOverride(null,null)}get filterExpressionFields(){return(0,v.Q0)(this.sublayer.fieldsIndex,this.parsedFilterExpressions.reduce(((e,t)=>{let[r]=t;return e.concat(r.fieldNames)}),new Array))}get availableFields(){const e=this.sublayer,t=e.fieldsIndex;let r=this.requiredFields;if(e.outFields||e.layer.outFields){const i=[...e.outFields||[],...e.layer.outFields||[]];r=[...(0,v.Lk)(t,i),...r]}return(0,v.Q0)(t,r)}_createLayerGraphic(e){const t=new s.Z(null,null,e);return t.layer=this.sublayer.layer,t.sourceLayer=this.sublayer,t}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}async fetchPopupFeatures(e,t){const r=this._validateFetchPopupFeatures(t);if(r)throw r;if(null===t||void 0===t||!t.clientGraphics||0===t.clientGraphics.length)return[];const i=[],s=[],n=null!=this.sublayer.associatedLayer?await this.sublayer.associatedLayer.load():this.sublayer,l=(0,v.Lk)(this.sublayer.fieldsIndex,await(0,B.e7)(n,(0,B.V5)(this.sublayer,t))),o=new Set;for(const a of t.clientGraphics)(0,v.Gm)(l,a,o)?s.push(a):i.push(a);return 0===s.length?i:(null!=this.sublayer.associatedLayer&&await this.sublayer.associatedLayer.load().catch((()=>u.Z.getLogger(this).warn("Failed to load associated feature layer. Displaying popup attributes from cached attributes."))),this.whenGraphicAttributes(s,Array.from(o)).catch((()=>s)).then((e=>i.concat(e))))}async _updateRequiredFields(){const e=(0,v.Q0)(this.sublayer.fieldsIndex,[...this.sublayer.renderer?await this.sublayer.renderer.getRequiredFields(this.sublayer.fieldsIndex):[],...this.definitionExpressionFields||[],...this.filterExpressionFields||[]]);this._set("requiredFields",e)}_validateFetchPopupFeatures(e){const{sublayer:t}=this,{popupEnabled:r}=t;return r?(0,B.V5)(t,e)?void 0:new g.Z("buildingscenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{sublayer:t}):new g.Z("buildingscenelayerview3d:fetchPopupFeatures","Popups are disabled",{sublayer:t})}getFilters(){const e=super.getFilters();return this.addSqlFilter(e,this.parsedDefinitionExpression,this.logError),null!=this._filter&&this._filter.addFilters(e,this.view,this._controller.crsIndex,this._collection),e}createQuery(){const e={outFields:["*"],returnGeometry:!1,outSpatialReference:this.view.spatialReference};return null!=this.filter?this.filter.createQuery(e):new _.Z(e)}queryExtent(e,t){return this._ensureQueryEngine().executeQueryForExtent(this._ensureQuery(e),null===t||void 0===t?void 0:t.signal)}queryFeatureCount(e,t){return this._ensureQueryEngine().executeQueryForCount(this._ensureQuery(e),null===t||void 0===t?void 0:t.signal)}queryFeatures(e,t){return this._ensureQueryEngine().executeQuery(this._ensureQuery(e),null===t||void 0===t?void 0:t.signal).then((e=>{if(null===e||void 0===e||!e.features)return e;const t=this.sublayer,r=t.layer;for(const i of e.features)i.layer=r,i.sourceLayer=t;return e}))}queryObjectIds(e,t){return this._ensureQueryEngine().executeQueryForIds(this._ensureQuery(e),null===t||void 0===t?void 0:t.signal)}_ensureQueryEngine(){return null==this._queryEngine&&(this._queryEngine=this._createQueryEngine()),this._queryEngine}_createQueryEngine(){const e=(0,M.gz)(this.view.spatialReference,this.view.renderSpatialReference,this._collection);return new A.u({layerView:this,priority:G.T8.FEATURE_QUERY_ENGINE,spatialIndex:new P.I({featureAdapter:new T.u({objectIdField:this.sublayer.objectIdField,attributeStorageInfo:this.sublayer.attributeStorageInfo,getFeatureExtent:e}),forAllFeatures:(e,t)=>this._forAllFeatures(((t,r,i)=>e({id:t,index:r,meta:i})),t,L.p.QUERYABLE),getFeatureExtent:e,sourceSpatialReference:(0,D.tp)(this.sublayer),viewSpatialReference:this.view.spatialReference})})}_ensureQuery(e){return this._addDefinitionExpressionToQuery(null==e?this.createQuery():_.Z.from(e))}};(0,i._)([(0,h.Cb)()],k.prototype,"i3slayer",null),(0,i._)([(0,h.Cb)()],k.prototype,"layerView",void 0),(0,i._)([(0,h.Cb)()],k.prototype,"lodFactor",null),(0,i._)([(0,h.Cb)({readOnly:!0})],k.prototype,"parsedFilterExpressions",null),(0,i._)([(0,h.Cb)({type:b.Z})],k.prototype,"filter",null),(0,i._)([(0,h.Cb)()],k.prototype,"_filter",void 0),(0,i._)([(0,h.Cb)({type:[String],readOnly:!0})],k.prototype,"filterExpressionFields",null),(0,i._)([(0,h.Cb)({type:[String],readOnly:!0})],k.prototype,"requiredFields",void 0),(0,i._)([(0,h.Cb)({type:[String],readOnly:!0})],k.prototype,"availableFields",null),k=(0,i._)([(0,c.j)("esri.views.3d.layers.BuildingComponentSublayerView3D")],k);const z=k;var W=r(42069),H=r(58890),X=r(67581);class K extends X.Z{constructor(e){super(e),this.layer=null,this.sublayerViews=null}highlight(e){throw new Error("Not implemented")}}(0,i._)([(0,h.Cb)()],K.prototype,"layer",void 0),(0,i._)([(0,h.Cb)()],K.prototype,"sublayerViews",void 0);const Y=E(n.Z);let J=class extends((0,W.A)(K)){constructor(e){super(e),this.type="building-scene-3d",this.sublayerViews=new o.Z,this._abortController=new AbortController,this._loadingComponents=0,this._pendingWhenSublayerViews=new Map,this.ignoresMemoryFactor=!1}get filterExpression(){var e;const t=this.layer.activeFilterId,r=null!=t?this.layer.filters.find((e=>e.id===t)):null,i=null!=r?null===(e=r.filterBlocks)||void 0===e?void 0:e.find((e=>"solid"===e.filterMode.type)):null;return i?i.filterExpression:null}get filterExpressions(){const e=this.layer.activeFilterId,t=null!=e?this.layer.filters.find((t=>t.id===e)):null;return null!==t&&void 0!==t&&t.filterBlocks?t.filterBlocks.toArray().map((e=>{var t;return[null!==(t=e.filterExpression)&&void 0!==t?t:"",q(e)]})):[]}get updatingProgressValue(){const e=this.sublayerViews,t=this._loadingComponents+(e?e.length:0);return e.reduce(((e,t)=>e+t.updatingProgress),0)/t}isUpdating(){return this._loadingComponents>0||this.sublayerViews&&this.sublayerViews.some((e=>e.updating))}initialize(){(0,D.Jf)(this.layer.spatialReference,this.view.spatialReference,this.view.viewingMode),this._initializeSubLayerViews(this.layer.sublayers,this)}destroy(){this.sublayerViews&&(this.sublayerViews.forEach((e=>e.destroy())),this.sublayerViews=null),this._abortController=(0,d.IM)(this._abortController)}_initializeSubLayerViews(e,t){const r=this,i=this.view;e.forEach((e=>{if(!e.isEmpty)if("building-group"===e.type){const r=new Y({sublayer:e,view:i,parent:t});this._initializeSubLayerViews(e.sublayers,r)}else"mesh"===e.geometryType&&(this._loadingComponents++,e.load({signal:this._abortController.signal}).then((()=>{const s=new z({sublayer:e,layerView:r,view:i,parent:t});this.sublayerViews.push(s);const n=this._pendingWhenSublayerViews.get(e);if(n){for(const e of n)e.resolve(s);this._pendingWhenSublayerViews.delete(e)}this.addHandles([(0,y.YP)((()=>s.updating),(()=>this.notifyChange("updating")),y.tX),(0,y.YP)((()=>s.updatingProgress),(()=>this.notifyChange("updatingProgressValue")),y.tX)])})).catch((t=>{(0,p.D_)(t)||u.Z.getLogger(this).error("Error while creating view for sublayer ".concat(e.id,"\nLayer: ").concat(this.layer.url,"\n"),t)})).then((()=>{this._loadingComponents--,this.notifyChange("updating"),this.notifyChange("updatingProgressValue")})))}))}getGraphicFromIntersectorTarget(e){for(const t of this.sublayerViews.items)if(t.sublayer.uid===e.sublayerUid)return t.getGraphicFromIntersectorTarget(e);return null}async fetchPopupFeatures(e,t){if(null===t||void 0===t||!t.clientGraphics||0===t.clientGraphics.length)return[];const r=(0,l.Ms)(t.clientGraphics,(e=>e.sourceLayer)),i=[];for(const[s,n]of r){const r=this._findComponent(s);null!=r&&i.push(r.fetchPopupFeatures(e,{...t,clientGraphics:n}))}return(await(0,p.OT)(i)).flat()}whenGraphicBounds(e){const t=this._findComponent(e.sourceLayer);return null==t?Promise.reject():t.whenGraphicBounds(e)}getAABBFromIntersectorTarget(e){for(const t of this.sublayerViews.items)if(t.sublayer.uid===e.sublayerUid)return t.getAABBFromIntersectorTarget(e);return null}async whenSublayerView(e){const t=this._findComponent(e);if(null!=t)return t;const r=this._pendingWhenSublayerViews.get(e),i=(0,p.hh)();return r?r.push(i):this._pendingWhenSublayerViews.set(e,[i]),i.promise}_findComponent(e){return this.sublayerViews.find((t=>e===t.sublayer))}highlight(e){e instanceof s.Z?e=[e]:e instanceof o.Z&&(e=e.toArray());const t=[];if(Array.isArray(e)&&e.length>0&&e[0]instanceof s.Z){const r=e,i=new Map;for(const e of r){let t=i.get(e.sourceLayer);null==t&&(t=[],i.set(e.sourceLayer,t)),t.push(e)}this.sublayerViews.forEach((e=>{const r=i.get(e.sublayer);r&&t.push(e.highlight(r))}))}return(0,a.AL)(t)}get usedMemory(){return this.sublayerViews.reduce(((e,t)=>e+t.usedMemory),0)}get unloadedMemory(){return this.sublayerViews.reduce(((e,t)=>e+t.unloadedMemory),0)}};(0,i._)([(0,h.Cb)()],J.prototype,"sublayerViews",void 0),(0,i._)([(0,h.Cb)({readOnly:!0})],J.prototype,"filterExpression",null),(0,i._)([(0,h.Cb)({readOnly:!0})],J.prototype,"filterExpressions",null),(0,i._)([(0,h.Cb)(H.q)],J.prototype,"updatingProgress",void 0),(0,i._)([(0,h.Cb)({readOnly:!0,dependsOn:[]})],J.prototype,"updatingProgressValue",null),J=(0,i._)([(0,c.j)("esri.views.3d.layers.BuildingSceneLayerView3D")],J);const $=J},1247:(e,t,r)=>{r.d(t,{l:()=>u});var i=r(27366),s=r(32718),n=r(49861),l=(r(25243),r(63780),r(93169),r(69912)),o=r(54054),a=r(44011);const u=e=>{let t=class extends e{constructor(){super(...arguments),this._definitionExpressionErrors=0,this._maxDefinitionExpressionErrors=20,this.logError=e=>{this._definitionExpressionErrors<this._maxDefinitionExpressionErrors&&s.Z.getLogger(this).error("Error while evaluating definitionExpression: "+e),this._definitionExpressionErrors++,this._definitionExpressionErrors===this._maxDefinitionExpressionErrors&&s.Z.getLogger(this).error("Further errors are ignored")}}get parsedDefinitionExpression(){var e;if(null===(e=this.i3slayer)||void 0===e||!e.definitionExpression)return null;try{const e=o.WhereClause.create(this.i3slayer.definitionExpression,this.i3slayer.fieldsIndex);if(!e.isStandardized)return s.Z.getLogger(this).error("definitionExpression is using non standard function"),null;const t=[],r=e.fieldNames;return(0,a.e8)(r,this.i3slayer.fields,{missingFields:t}),t.length>0?(s.Z.getLogger(this).error("definitionExpression references unknown fields: ".concat(t.join(", "))),null):(this._definitionExpressionErrors=0,e)}catch(t){return s.Z.getLogger(this).error("Failed to parse definitionExpression: "+t),null}}get definitionExpressionFields(){return this.parsedDefinitionExpression?this.parsedDefinitionExpression.fieldNames:[]}_evaluateClause(e,t){try{return e.testFeature(t)}catch(r){return this.logError(r),!1}}_addDefinitionExpressionToQuery(e){if(!this.parsedDefinitionExpression)return e;const t=this.i3slayer.definitionExpression,r=e.clone();return r.where?r.where="(".concat(t,") AND (").concat(r.where,")"):r.where=t,r}};return(0,i._)([(0,n.Cb)()],t.prototype,"i3slayer",void 0),(0,i._)([(0,n.Cb)({readOnly:!0})],t.prototype,"parsedDefinitionExpression",null),(0,i._)([(0,n.Cb)({readOnly:!0})],t.prototype,"definitionExpressionFields",null),t=(0,i._)([(0,l.j)("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView")],t),t}}}]);
//# sourceMappingURL=8994.f89515c3.chunk.js.map