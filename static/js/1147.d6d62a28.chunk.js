/*! For license information please see 1147.d6d62a28.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkn2_utility=self.webpackChunkn2_utility||[]).push([[1147],{31147:(e,t,i)=>{i.r(t),i.d(t,{CalciteTable:()=>E,defineCustomElement:()=>R});var s=i(51554),a=i(47242),n=i(52655),l=i(46895),o=i(13160),c=i(14105),r=i(1579),d=i(57601),h=i(91438),u=i(4580);const p="bordered",g="zebra",m="selection-area",v="pagination-area",b="container",f="table-container",x="table--fixed",y="assistive-text",w="selection-actions",k="selection-actions",z="table-header",S="table-footer",C=(0,s.GH)(class extends s.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteTableSelect=(0,s.yM)(this,"calciteTableSelect",6),this.calciteTablePageChange=(0,s.yM)(this,"calciteTablePageChange",6),this.calciteInternalTableRowFocusChange=(0,s.yM)(this,"calciteInternalTableRowFocusChange",6),this.getSlottedRows=e=>{var t;return null===e||void 0===e||null===(t=e.assignedElements({flatten:!0}))||void 0===t?void 0:t.filter((e=>null===e||void 0===e?void 0:e.matches("calcite-table-row")))},this.updateRows=()=>{var e,t;const i=this.getSlottedRows(this.tableHeadSlotEl)||[],s=this.getSlottedRows(this.tableBodySlotEl)||[],a=this.getSlottedRows(this.tableFootSlotEl)||[],n=[...i,...s,...a];null===i||void 0===i||i.forEach((e=>{const t=null===i||void 0===i?void 0:i.indexOf(e);e.rowType="head",e.positionSection=t,e.positionSectionLocalized=this.localizeNumber((t+1).toString())})),null===s||void 0===s||s.forEach((e=>{const t=null===s||void 0===s?void 0:s.indexOf(e);e.rowType="body",e.positionSection=t,e.positionSectionLocalized=this.localizeNumber((t+1).toString())})),null===a||void 0===a||a.forEach((e=>{const t=null===a||void 0===a?void 0:a.indexOf(e);e.rowType="foot",e.positionSection=t,e.positionSectionLocalized=this.localizeNumber((t+1).toString())})),null===n||void 0===n||n.forEach((e=>{e.selectionMode=this.selectionMode,e.bodyRowCount=null===s||void 0===s?void 0:s.length,e.positionAll=null===n||void 0===n?void 0:n.indexOf(e),e.numbered=this.numbered,e.scale=this.scale,e.readCellContentsToAT=this.readCellContentsToAT}));const l=(null===(e=i[0])||void 0===e?void 0:e.cellCount)||(null===(t=i[0])||void 0===t||null===(t=t.querySelectorAll("calcite-table-header"))||void 0===t?void 0:t.length);this.colCount=l,this.headRows=i,this.bodyRows=s,this.footRows=a,this.allRows=n,this.updateSelectedItems(),this.paginateRows()},this.handlePaginationChange=()=>{var e;const t=null===(e=this.paginationEl)||void 0===e?void 0:e.startItem;this.pageStartRow=t||1,this.calciteTablePageChange.emit(),this.updateRows()},this.paginateRows=()=>{var e;null===(e=this.bodyRows)||void 0===e||e.forEach((e=>{const t=e.positionSection+1,i=t>=this.pageStartRow&&t<this.pageStartRow+this.pageSize;e.hidden=this.pageSize>0&&!i&&!this.footRows.includes(e)}))},this.updateSelectedItems=e=>{var t,i;const s=null===(t=this.bodyRows)||void 0===t?void 0:t.filter((e=>e.selected));this.selectedItems=s,this.selectedCount=null===s||void 0===s?void 0:s.length,null===(i=this.allRows)||void 0===i||i.forEach((e=>{e.selectedRowCount=this.selectedCount,e.selectedRowCountLocalized=this.localizeNumber(this.selectedCount)})),e&&this.calciteTableSelect.emit()},this.handleDeselectAllRows=()=>{var e;null===(e=this.bodyRows)||void 0===e||e.forEach((e=>{e.selected=!1})),this.updateSelectedItems(!0)},this.setSelectedItems=e=>{var t;null===(t=this.bodyRows)||void 0===t||t.forEach((t=>{var i;"head"===(null===e||void 0===e?void 0:e.rowType)?t.selected=this.selectedCount!==(null===(i=this.bodyRows)||void 0===i?void 0:i.length):t.selected=e===t?!t.selected:"multiple"===this.selectionMode&&t.selected})),this.updateSelectedItems(!0)},this.localizeNumber=e=>(l.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator},l.n.localize(e.toString())),this.bordered=!1,this.caption=void 0,this.groupSeparator=!1,this.layout="auto",this.numbered=!1,this.numberingSystem=void 0,this.pageSize=0,this.scale="m",this.selectionMode="none",this.zebra=!1,this.selectedItems=[],this.messages=void 0,this.messageOverrides=void 0,this.colCount=0,this.pageStartRow=1,this.selectedCount=0,this.readCellContentsToAT=void 0,this.defaultMessages=void 0,this.effectiveLocale=""}handleNumberedChange(){this.updateRows()}onMessagesChange(){}effectiveLocaleChange(){(0,n.u)(this,this.effectiveLocale)}async componentWillLoad(){(0,a.a)(this),await(0,n.s)(this),this.readCellContentsToAT=/safari/i.test((0,o.g)()),this.updateRows()}componentDidLoad(){(0,a.s)(this)}connectedCallback(){(0,l.c)(this),(0,n.c)(this)}disconnectedCallback(){(0,l.d)(this),(0,n.d)(this)}calciteChipSelectListener(e){e.composedPath().includes(this.el)&&this.setSelectedItems(e.target)}calciteInternalTableRowFocusEvent(e){var t,i,s,a,n,l,o,c;const r=e.detail.cellPosition,d=e.detail.rowPosition,h=e.detail.destination,u=e.detail.lastCell,p=null===(t=this.bodyRows)||void 0===t?void 0:t.filter((e=>!e.hidden)),g=null===(i=this.allRows)||void 0===i?void 0:i.filter((e=>!e.hidden)),m=null===(s=this.headRows[this.headRows.length-1])||void 0===s?void 0:s.positionAll,v=null===(a=p[0])||void 0===a?void 0:a.positionAll,b=null===(n=p[p.length-1])||void 0===n?void 0:n.positionAll,f=null===(l=this.footRows[0])||void 0===l?void 0:l.positionAll,x=null===(o=g[g.length-1])||void 0===o?void 0:o.positionAll,y="next"===h&&d===m,w="previous"===h&&d===f,k="previous"===h&&d===v,z="next"===h&&d===b;let S;switch(h){case"first":S=0;break;case"last":S=x;break;case"next":S=y?v:z?f:d+1;break;case"previous":S=w?b:k?m:d-1}const C=null===(c=this.allRows)||void 0===c||null===(c=c.find((e=>e.positionAll===S)))||void 0===c?void 0:c.cellCount,I=r>C?C:r;void 0!==S&&this.calciteInternalTableRowFocusChange.emit({cellPosition:I,rowPosition:S,destination:h,lastCell:u})}renderSelectionArea(){var e,t;const i=null===(e=this.selectedItems)||void 0===e||null===(e=e.filter((e=>e.hidden)))||void 0===e?void 0:e.length,a=this.localizeNumber(null===i||void 0===i?void 0:i.toString()),n=this.localizeNumber(null===(t=this.selectedCount)||void 0===t?void 0:t.toString()),l="".concat(n," ").concat(this.messages.selected),o="".concat(a," ").concat(this.messages.hiddenSelected);return(0,s.h)("div",{class:m},(0,s.h)("calcite-chip",{kind:this.selectedCount>0?"brand":"neutral",scale:this.scale,value:l},l),i>0&&(0,s.h)("calcite-chip",{icon:"hide-empty",scale:this.scale,title:o,value:o},a),this.selectedCount>0&&(0,s.h)("calcite-button",{"icon-start":"x",kind:"neutral",onClick:this.handleDeselectAllRows,round:!0,scale:this.scale,title:"".concat(this.messages.clear," ").concat(l," ").concat(this.messages.row)},this.messages.clear),(0,s.h)("div",{class:w},(0,s.h)("slot",{name:k})))}renderPaginationArea(){var e;return(0,s.h)("div",{class:v},(0,s.h)("calcite-pagination",{groupSeparator:this.groupSeparator,numberingSystem:this.numberingSystem,onCalcitePaginationChange:this.handlePaginationChange,pageSize:this.pageSize,scale:this.scale,startItem:1,totalItems:null===(e=this.bodyRows)||void 0===e?void 0:e.length,ref:e=>this.paginationEl=e}))}renderTHead(){return(0,s.h)("thead",null,(0,s.h)("slot",{name:z,onSlotchange:this.updateRows,ref:e=>this.tableHeadSlotEl=e}))}renderTBody(){return(0,s.h)("tbody",null,(0,s.h)("slot",{onSlotchange:this.updateRows,ref:e=>this.tableBodySlotEl=e}))}renderTFoot(){return(0,s.h)("tfoot",null,(0,s.h)("slot",{name:S,onSlotchange:this.updateRows,ref:e=>this.tableFootSlotEl=e}))}render(){var e;return(0,s.h)(s.AA,null,(0,s.h)("div",{class:b},"none"!==this.selectionMode&&this.renderSelectionArea(),(0,s.h)("div",{class:{[p]:this.bordered,[g]:this.zebra,[f]:!0}},(0,s.h)("table",{"aria-colcount":this.colCount,"aria-multiselectable":"multiple"===this.selectionMode,"aria-readonly":!0,"aria-rowcount":null===(e=this.allRows)||void 0===e?void 0:e.length,class:{[x]:"fixed"===this.layout},role:"grid"},(0,s.h)("caption",{class:y},this.caption),this.renderTHead(),this.renderTBody(),this.renderTFoot())),this.pageSize>0&&this.renderPaginationArea()))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{groupSeparator:["handleNumberedChange"],numbered:["handleNumberedChange"],numberingSystem:["handleNumberedChange"],pageSize:["handleNumberedChange"],scale:["handleNumberedChange"],selectionMode:["handleNumberedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host([scale=s]){--calcite-internal-table-cell-padding:0.25rem;--calcite-internal-table-cell-font-size:var(--calcite-font-size--2);--calcite-internal-table-cell-font-size-secondary:var(--calcite-font-size--3)}:host([scale=m]){--calcite-internal-table-cell-padding:0.5rem;--calcite-internal-table-cell-font-size:var(--calcite-font-size--1);--calcite-internal-table-cell-font-size-secondary:var(--calcite-font-size--2)}:host([scale=l]){--calcite-internal-table-cell-padding:1rem;--calcite-internal-table-cell-font-size:var(--calcite-font-size-0);--calcite-internal-table-cell-font-size-secondary:var(--calcite-font-size--1)}:host{display:table}.container{max-inline-size:100vw;inline-size:100%}.table-container{overflow-x:auto;white-space:nowrap}.table-container:not(.bordered){border-block-end:1px solid var(--calcite-ui-border-3)}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}table{inline-size:100%;border-collapse:collapse;overflow-x:scroll;border-block-start:1px solid var(--calcite-ui-border-3);border-inline-start:1px solid var(--calcite-ui-border-3);border-block-end:1px solid var(--calcite-ui-border-3)}tbody{border-block-end:1px solid var(--calcite-ui-border-3)}.table--fixed{table-layout:fixed}.bordered ::slotted(calcite-table-row){--calcite-table-row-border-color:var(--calcite-ui-border-3)}.zebra ::slotted(calcite-table-row:nth-child(2n+1)){--calcite-table-row-background:var(--calcite-ui-foreground-2)}.selection-actions{display:flex;flex-direction:row;margin-inline-start:auto}.selection-area{display:flex;flex-direction:row;align-items:center;padding-block:var(--calcite-internal-table-cell-padding)}.selection-area calcite-chip:last-of-type{margin-inline-end:0.5rem}.selection-area calcite-chip:last-of-type:not(:first-of-type){margin-inline-start:0.5rem}.selection-area calcite-button{margin-inline-end:1rem}.pagination-area{display:flex;inline-size:100%;flex-direction:row;justify-content:center;padding-block:var(--calcite-internal-table-cell-padding)}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-table",{bordered:[516],caption:[1],groupSeparator:[516,"group-separator"],layout:[513],numbered:[516],numberingSystem:[513,"numbering-system"],pageSize:[514,"page-size"],scale:[513],selectionMode:[513,"selection-mode"],zebra:[516],selectedItems:[1040],messages:[1040],messageOverrides:[1040],colCount:[32],pageStartRow:[32],selectedCount:[32],readCellContentsToAT:[32],defaultMessages:[32],effectiveLocale:[32]},[[0,"calciteTableRowSelect","calciteChipSelectListener"],[0,"calciteInternalTableRowFocusRequest","calciteInternalTableRowFocusEvent"]]]);function I(){if("undefined"===typeof customElements)return;["calcite-table","calcite-button","calcite-chip","calcite-icon","calcite-loader","calcite-pagination"].forEach((e=>{switch(e){case"calcite-table":customElements.get(e)||customElements.define(e,C);break;case"calcite-button":customElements.get(e)||(0,c.d)();break;case"calcite-chip":customElements.get(e)||(0,r.d)();break;case"calcite-icon":customElements.get(e)||(0,d.d)();break;case"calcite-loader":customElements.get(e)||(0,h.d)();break;case"calcite-pagination":customElements.get(e)||(0,u.d)()}}))}I();const E=C,R=I},1579:(e,t,i)=>{i.d(t,{C:()=>A,d:()=>H});var s=i(51554),a=i(92358),n=i(19432),l=i(47242),o=i(52655),c=i(13160),r=i(46895),d=i(72021),h=i(19579),u=i(64044),p=i(57601);const g="title",m="close",v="image-container",b="chip-icon",f="text--slotted",x="container",y="image--slotted",w="closable",k="multiple",z="selectable",S="select-icon",C="select-icon--active",I="non-interactive",E="is-circle",R="image",M="x",T="circle",P="circle-f",L="check-circle-f",A=(0,s.GH)(class extends s.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteChipClose=(0,s.yM)(this,"calciteChipClose",6),this.calciteChipSelect=(0,s.yM)(this,"calciteChipSelect",6),this.calciteInternalChipKeyEvent=(0,s.yM)(this,"calciteInternalChipKeyEvent",6),this.mutationObserver=(0,d.c)("mutation",(()=>this.updateHasText())),this.close=()=>{this.calciteChipClose.emit(),this.selected=!1,this.closed=!0},this.closeButtonKeyDownHandler=e=>{(0,h.i)(e.key)&&(e.preventDefault(),this.close())},this.handleSlotImageChange=e=>{this.hasImage=(0,a.e)(e)},this.handleEmittingEvent=()=>{this.interactive&&this.calciteChipSelect.emit()},this.disabled=!1,this.appearance="solid",this.kind="neutral",this.closable=!1,this.icon=void 0,this.iconFlipRtl=!1,this.scale="m",this.label=void 0,this.value=void 0,this.closed=!1,this.selectionMode="none",this.selected=!1,this.messageOverrides=void 0,this.messages=void 0,this.interactive=!1,this.defaultMessages=void 0,this.effectiveLocale=void 0,this.hasText=!1,this.hasImage=!1}onMessagesChange(){}effectiveLocaleChange(){(0,o.u)(this,this.effectiveLocale)}connectedCallback(){var e;(0,n.c)(this),(0,c.c)(this),(0,r.c)(this),(0,o.c)(this),null===(e=this.mutationObserver)||void 0===e||e.observe(this.el,{childList:!0,subtree:!0})}componentDidLoad(){(0,l.s)(this)}componentDidRender(){(0,c.u)(this)}disconnectedCallback(){var e;(0,n.d)(this),(0,c.d)(this),(0,r.d)(this),(0,o.d)(this),null===(e=this.mutationObserver)||void 0===e||e.disconnect()}async componentWillLoad(){(0,l.a)(this),s.Z5.isBrowser&&(await(0,o.s)(this),this.updateHasText())}keyDownHandler(e){if(e.target===this.el)switch(e.key){case" ":case"Enter":this.handleEmittingEvent(),e.preventDefault();break;case"ArrowRight":case"ArrowLeft":case"Home":case"End":this.calciteInternalChipKeyEvent.emit(e),e.preventDefault()}}clickHandler(){!this.interactive&&this.closable&&this.closeButtonEl.focus()}async setFocus(){var e;if(await(0,l.c)(this),!this.disabled&&this.interactive)null===(e=this.containerEl)||void 0===e||e.focus();else if(!this.disabled&&this.closable){var t;null===(t=this.closeButtonEl)||void 0===t||t.focus()}}updateHasText(){this.hasText=this.el.textContent.trim().length>0}renderChipImage(){return(0,s.h)("div",{class:v},(0,s.h)("slot",{name:R,onSlotchange:this.handleSlotImageChange}))}renderSelectionIcon(){const e="multiple"===this.selectionMode&&this.selected?L:"multiple"===this.selectionMode?T:this.selected?P:void 0;return(0,s.h)("div",{class:{[S]:!0,[C]:"multiple"===this.selectionMode||this.selected}},(0,s.h)("calcite-icon",{icon:e,scale:(0,u.g)(this.scale)}))}renderCloseButton(){return(0,s.h)("button",{"aria-label":this.messages.dismissLabel,class:m,onClick:this.close,onKeyDown:this.closeButtonKeyDownHandler,tabIndex:this.disabled?-1:0,ref:e=>this.closeButtonEl=e},(0,s.h)("calcite-icon",{icon:M,scale:(0,u.g)(this.scale)}))}renderIcon(){return(0,s.h)("calcite-icon",{class:b,flipRtl:this.iconFlipRtl,icon:this.icon,scale:(0,u.g)(this.scale)})}render(){const e=this.disabled||!this.disabled&&!this.interactive,t="multiple"===this.selectionMode&&this.interactive?"checkbox":"none"!==this.selectionMode&&this.interactive?"radio":this.interactive?"button":void 0;return(0,s.h)(s.AA,null,(0,s.h)("div",{"aria-checked":"none"!==this.selectionMode&&this.interactive?(0,a.t)(this.selected):void 0,"aria-disabled":e?(0,a.t)(this.disabled):void 0,"aria-label":this.label,class:{[x]:!0,[f]:this.hasText,[y]:this.hasImage,[z]:"none"!==this.selectionMode,[k]:"multiple"===this.selectionMode,[w]:this.closable,[I]:!this.interactive,[E]:!this.closable&&!this.hasText&&(!this.icon||!this.hasImage)&&("none"===this.selectionMode||!!this.selectionMode&&"multiple"!==this.selectionMode&&!this.selected)},onClick:this.handleEmittingEvent,role:t,tabIndex:e?-1:0,ref:e=>this.containerEl=e},"none"!==this.selectionMode&&this.renderSelectionIcon(),this.renderChipImage(),this.icon&&this.renderIcon(),(0,s.h)("span",{class:g},(0,s.h)("slot",null)),this.closable&&this.renderCloseButton()))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([scale=s]){block-size:1.5rem;font-size:var(--calcite-font-size--2);--calcite-chip-spacing-s-internal:0.25rem;--calcite-chip-spacing-l-internal:0.5rem}:host([scale=s]) .close,:host([scale=s]) .select-icon--active{block-size:1rem;inline-size:1rem}:host([scale=s]) .image-container{block-size:1.25rem;inline-size:1.25rem}:host([scale=s]) .container.is-circle{block-size:1.5rem;inline-size:1.5rem}:host([scale=m]){block-size:2rem;font-size:var(--calcite-font-size--1);--calcite-chip-spacing-s-internal:0.375rem;--calcite-chip-spacing-l-internal:0.5rem}:host([scale=m]) .close,:host([scale=m]) .image-container,:host([scale=m]) .select-icon--active{block-size:1.5rem;inline-size:1.5rem}:host([scale=m]) .container.is-circle{block-size:2rem;inline-size:2rem}:host([scale=l]){block-size:2.75rem;font-size:var(--calcite-font-size-0);--calcite-chip-spacing-s-internal:0.5rem;--calcite-chip-spacing-l-internal:0.75rem}:host([scale=l]) .image-container,:host([scale=l]) .close,:host([scale=l]) .select-icon--active{block-size:2rem;inline-size:2rem}:host([scale=l]) .container.is-circle{block-size:2.75rem;inline-size:2.75rem}:host{display:inline-flex;cursor:default;border-radius:9999px}.container{box-sizing:border-box;display:inline-flex;block-size:100%;max-inline-size:100%;align-items:center;justify-content:center;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-1);font-weight:var(--calcite-font-weight-medium);outline-color:transparent}.container:not(.is-circle){padding-inline:var(--calcite-chip-spacing-s-internal)}.container.selectable{cursor:pointer}.container:not(.non-interactive):focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([scale=s]) .container.image--slotted{padding-inline-start:calc(0.125rem / 2)}:host([scale=s]) .container.is-circle{padding-inline:0}.container.text--slotted .title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-inline:var(--calcite-chip-spacing-s-internal)}.container:not(.text--slotted) .title{display:none}.container:not(.image--slotted) .image-container{display:none}.container.closable{padding-inline-end:calc(var(--calcite-chip-spacing-l-internal) / 2)}.container:not(.is-circle).image--slotted{padding-inline-start:calc(var(--calcite-chip-spacing-l-internal) / 2)}.container:not(.is-circle).image--slotted .image-container{margin-inline-end:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle).image--slotted .image-container~.chip-icon{margin-inline-start:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle).selectable:not(.text--slotted) .chip-icon{margin-inline-end:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle):not(.selectable):not(.text--slotted) .chip-icon{margin-inline-start:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle):not(.text--slotted) .chip-icon{margin-inline-end:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle):not(.text-slotted).image--slotted .image-container{margin-inline-end:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle):not(.closable):not(.text--slotted).image--slotted.selectable .image-container{margin-inline-end:0}.container:not(.is-circle):not(.closable):not(.text--slotted).image--slotted.selectable .image-container~.chip-icon{margin-inline-start:calc(var(--calcite-chip-spacing-s-internal) * 2)}.chip-icon{position:relative;margin-block:0px;display:inline-flex;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline:var(--calcite-chip-spacing-s-internal)}.image-container{display:inline-flex;overflow:hidden;align-items:center;justify-content:center;pointer-events:none}.close{margin:0px;cursor:pointer;align-items:center;border-style:none;background-color:transparent;color:var(--calcite-ui-text-1);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;-webkit-appearance:none;display:flex;border-radius:50%;align-content:center;justify-content:center;--calcite-chip-transparent-hover:var(--calcite-button-transparent-hover);--calcite-chip-transparent-press:var(--calcite-button-transparent-press)}.close:hover{background-color:var(--calcite-chip-transparent-hover)}.close:focus{background-color:var(--calcite-chip-transparent-hover);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.close:active{background-color:var(--calcite-chip-transparent-press)}.close calcite-icon{color:inherit}.select-icon{align-self:center;justify-content:center;align-items:center;display:flex;inset-block-start:-1px;position:relative;visibility:hidden;inline-size:0;opacity:0;transition:opacity 0.15s ease-in-out, inline-size 0.15s ease-in-out}.select-icon.select-icon--active{visibility:visible;opacity:0.5}.container:not(.is-circle).image--slotted .select-icon.select-icon--active{margin-inline-end:var(--calcite-chip-spacing-s-internal)}:host([selected]) .select-icon{opacity:1}.container:hover .select-icon--active{opacity:1}slot[name=image]::slotted(*){display:flex;block-size:100%;inline-size:100%;overflow:hidden;border-radius:50%}:host([kind=neutral]){background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host([kind=neutral]) .container{border-color:transparent}:host([kind=neutral]) .close{color:var(--calcite-ui-text-3)}:host([kind=neutral]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-3))}:host([kind=inverse]){background-color:var(--calcite-ui-inverse);color:var(--calcite-ui-text-inverse)}:host([kind=inverse]) .container{border-color:transparent}:host([kind=inverse]) .close{color:var(--calcite-ui-text-inverse)}:host([kind=inverse]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-inverse))}:host([kind=brand]){background-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-inverse)}:host([kind=brand]) .container{border-color:transparent}:host([kind=brand]) .close{color:var(--calcite-ui-text-inverse)}:host([kind=brand]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-inverse))}:host([appearance=outline-fill]),:host([appearance=outline]){background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1)}:host([appearance=outline-fill]) .close,:host([appearance=outline]) .close{color:var(--calcite-ui-text-3)}:host([appearance=outline-fill]) .chip-icon,:host([appearance=outline]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-3))}:host([appearance=outline-fill]){background-color:var(--calcite-ui-foreground-1)}:host([appearance=outline]){background-color:transparent}:host([kind=neutral][appearance=outline-fill]) .container,:host([kind=neutral][appearance=outline]) .container{border-color:var(--calcite-ui-border-1)}:host([kind=inverse][appearance=outline-fill]) .container,:host([kind=inverse][appearance=outline]) .container{border-color:var(--calcite-ui-border-inverse)}:host([kind=brand][appearance=outline-fill]) .container,:host([kind=brand][appearance=outline]) .container{border-color:var(--calcite-ui-brand)}:host([kind=brand][appearance=solid]) button,:host([kind=inverse][appearance=solid]) button{outline-color:var(--calcite-ui-text-inverse)}:host([closed]){display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-chip",{disabled:[516],appearance:[513],kind:[513],closable:[516],icon:[513],iconFlipRtl:[516,"icon-flip-rtl"],scale:[513],label:[1],value:[8],closed:[1540],selectionMode:[1,"selection-mode"],selected:[1540],messageOverrides:[1040],messages:[1040],interactive:[4],defaultMessages:[32],effectiveLocale:[32],hasText:[32],hasImage:[32],setFocus:[64]},[[0,"keydown","keyDownHandler"],[0,"click","clickHandler"]]]);function H(){if("undefined"===typeof customElements)return;["calcite-chip","calcite-icon"].forEach((e=>{switch(e){case"calcite-chip":customElements.get(e)||customElements.define(e,A);break;case"calcite-icon":customElements.get(e)||(0,p.d)()}}))}H()},4580:(e,t,i)=>{i.d(t,{P:()=>C,d:()=>I});var s=i(51554),a=i(47242),n=i(46895),l=i(52655),o=i(72021),c=i(40758),r=i(64044),d=i(57601);const h="page",u="is-selected",p="previous",g="next",m="is-disabled",v="ellipsis",b="ellipsis--start",f="ellipsis--end",x="chevronRight",y="chevronLeft",w=11,k=9,z=7,S=5,C=(0,s.GH)(class extends s.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePaginationChange=(0,s.yM)(this,"calcitePaginationChange",6),this.resizeObserver=(0,o.c)("resize",(e=>e.forEach(this.resizeHandler))),this.resizeHandler=e=>{let{contentRect:{width:t}}=e;return this.setMaxItemsToBreakpoint(t)},this.previousClicked=async()=>{await this.previousPage(),this.emitUpdate()},this.nextClicked=async()=>{await this.nextPage(),this.emitUpdate()},this.handlePageClick=e=>{const t=e.target;this.startItem=parseInt(t.value,10),this.emitUpdate()},this.groupSeparator=!1,this.messages=void 0,this.messageOverrides=void 0,this.numberingSystem=void 0,this.pageSize=20,this.scale="m",this.startItem=1,this.totalItems=0,this.defaultMessages=void 0,this.effectiveLocale="",this.maxItems=S,this.totalPages=void 0}onMessagesChange(){}handleTotalPages(){this.pageSize<1&&(this.pageSize=1),this.totalPages=this.totalItems/this.pageSize}effectiveLocaleChange(){(0,l.u)(this,this.effectiveLocale)}effectiveLocaleWatcher(){n.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator}}connectedCallback(){var e;(0,n.c)(this),(0,l.c)(this),null===(e=this.resizeObserver)||void 0===e||e.observe(this.el)}async componentWillLoad(){const[,e]=await Promise.all([(0,l.s)(this),(0,c.g)()]);this.breakpoints=e,(0,a.a)(this),this.handleTotalPages()}componentDidLoad(){(0,a.s)(this),this.setMaxItemsToBreakpoint(this.el.clientWidth)}disconnectedCallback(){var e;(0,n.d)(this),(0,l.d)(this),null===(e=this.resizeObserver)||void 0===e||e.disconnect()}async setFocus(){await(0,a.c)(this),this.el.focus()}async nextPage(){this.startItem=Math.min(this.getLastStart(),this.startItem+this.pageSize)}async previousPage(){this.startItem=Math.max(1,this.startItem-this.pageSize)}setMaxItemsToBreakpoint(e){const{breakpoints:t}=this;t&&e&&(e>=t.width.medium?this.maxItems=w:e>=t.width.small?this.maxItems=k:e>=t.width.xsmall?this.maxItems=z:this.maxItems=S)}getLastStart(){const{totalItems:e,pageSize:t,totalPages:i}=this;return(e%t===0?e-t:Math.floor(i)*t)+1}showStartEllipsis(){return this.totalPages>this.maxItems&&Math.floor(this.startItem/this.pageSize)>this.maxItems-2-2}showEndEllipsis(){return this.totalPages>this.maxItems&&(this.totalItems-this.startItem)/this.pageSize>this.maxItems-2-1}emitUpdate(){this.calcitePaginationChange.emit()}renderEllipsis(e){return(0,s.h)("span",{class:{[v]:!0,[b]:"start"===e,[f]:"end"===e},key:e},"\u2026")}renderItems(){const{totalItems:e,pageSize:t,startItem:i,maxItems:s,totalPages:a}=this,n=[],l=e>t,o=this.showStartEllipsis(),c=this.showEndEllipsis(),r=this.getLastStart();l&&n.push(this.renderPage(1)),o&&n.push(this.renderEllipsis("start"));const d=s-2-(c?1:0)-(o?1:0);let h,u;a-1<=d?(u=1+t,h=r-t):i/t<d?(u=1+t,h=1+d*t):i+d*t>=e?(u=r-d*t,h=r-t):(u=i-t*((d-1)/2),h=i+t*((d-1)/2));for(let p=0;p<d&&u<=h;p++)n.push(this.renderPage(u)),u+=t;return c&&n.push(this.renderEllipsis("end")),n.push(this.renderPage(r)),n}renderPage(e){const{pageSize:t}=this,i=Math.floor(e/t)+(1===t?0:1);n.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};const a=n.n.localize(i.toString()),l=e===this.startItem;return(0,s.h)("button",{"aria-current":l?"page":"false",class:{[h]:!0,[u]:l},onClick:this.handlePageClick,value:e},a)}render(){const{totalItems:e,pageSize:t,startItem:i,messages:a}=this,n=1===t?i<=t:i<t,l=i+t>e;return(0,s.h)(s.HY,null,(0,s.h)("button",{"aria-label":a.previous,class:{[p]:!0,[m]:n},disabled:n,onClick:this.previousClicked},(0,s.h)("calcite-icon",{flipRtl:!0,icon:y,scale:(0,r.g)(this.scale)})),this.renderItems(),(0,s.h)("button",{"aria-label":a.next,class:{[g]:!0,[m]:l},disabled:l,onClick:this.nextClicked},(0,s.h)("calcite-icon",{flipRtl:!0,icon:x,scale:(0,r.g)(this.scale)})))}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],totalItems:["handleTotalPages"],pageSize:["handleTotalPages"],effectiveLocale:["effectiveLocaleChange","effectiveLocaleWatcher"]}}static get style(){return":host{display:flex;writing-mode:horizontal-tb}:host([scale=s]) .previous,:host([scale=s]) .next,:host([scale=s]) .page,:host([scale=s]) .ellipsis{block-size:1.5rem;padding-inline:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;min-inline-size:1.5rem}:host([scale=m]) .previous,:host([scale=m]) .next,:host([scale=m]) .page,:host([scale=m]) .ellipsis{block-size:2rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;min-inline-size:2rem}:host([scale=l]) .previous,:host([scale=l]) .next,:host([scale=l]) .page,:host([scale=l]) .ellipsis{block-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-inline-size:2.75rem}:host([scale=l]) .previous,:host([scale=l]) .next{padding-inline:0.625rem}:host([scale=l]) .page,:host([scale=l]) .ellipsis{padding-inline:0.75rem}:host button{outline-color:transparent}:host button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.previous,.next,.page,.ellipsis{margin:0px;box-sizing:border-box;display:flex;align-items:center;justify-content:center;border-style:none;--tw-border-opacity:0;background-color:transparent;padding:0px;vertical-align:baseline;font-family:inherit;font-size:var(--calcite-font-size-0);line-height:1.25rem;color:var(--calcite-ui-text-3)}.previous,.next,.page{cursor:pointer;border-block:2px solid transparent}.previous:hover,.next:hover,.page:hover{color:var(--calcite-ui-text-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.page:hover{border-block-end-color:var(--calcite-ui-border-2)}.page.is-selected{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);border-block-end-color:var(--calcite-ui-brand)}.previous:hover,.next:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-brand)}.previous:active,.next:active{background-color:var(--calcite-ui-foreground-3)}.previous.is-disabled,.next.is-disabled{pointer-events:none;background-color:transparent}.previous.is-disabled>calcite-icon,.next.is-disabled>calcite-icon{opacity:var(--calcite-ui-opacity-disabled)}:host([hidden]){display:none}[hidden]{display:none}"}},[17,"calcite-pagination",{groupSeparator:[516,"group-separator"],messages:[1040],messageOverrides:[1040],numberingSystem:[1,"numbering-system"],pageSize:[1538,"page-size"],scale:[513],startItem:[1538,"start-item"],totalItems:[514,"total-items"],defaultMessages:[32],effectiveLocale:[32],maxItems:[32],totalPages:[32],setFocus:[64],nextPage:[64],previousPage:[64]}]);function I(){if("undefined"===typeof customElements)return;["calcite-pagination","calcite-icon"].forEach((e=>{switch(e){case"calcite-pagination":customElements.get(e)||customElements.define(e,C);break;case"calcite-icon":customElements.get(e)||(0,d.d)()}}))}I()},40758:(e,t,i)=>{let s;function a(e,t){return parseInt(e.getPropertyValue(t))}async function n(){return s||(s=new Promise((e=>{requestAnimationFrame((()=>{const t=getComputedStyle(document.body);e({width:{large:a(t,"--calcite-app-breakpoint-width-lg"),medium:a(t,"--calcite-app-breakpoint-width-md"),small:a(t,"--calcite-app-breakpoint-width-sm"),xsmall:a(t,"--calcite-app-breakpoint-width-xs"),xxsmall:a(t,"--calcite-app-breakpoint-width-xxs")}})}))})),s)}i.d(t,{g:()=>n})}}]);
//# sourceMappingURL=1147.d6d62a28.chunk.js.map