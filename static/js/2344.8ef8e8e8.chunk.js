/*! For license information please see 2344.8ef8e8e8.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkn2_utility=self.webpackChunkn2_utility||[]).push([[2344],{20856:(e,t,a)=>{a.d(t,{D:()=>k,d:()=>x});var i=a(51554),s=a(10883),n=a(92358),r=a(19579),c=a(46895),h=a(8703),o=a(64044),l=a(57601);const d="header",v="month",D="chevron",u="suffix",g="year--suffix",m="year-wrap",f="text--reverse",p="chevron-left",y="chevron-right",k=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalDatePickerSelect=(0,i.yM)(this,"calciteInternalDatePickerSelect",6),this.onYearKey=e=>{const t=this.parseCalendarYear(e.target.value);switch(e.key){case"ArrowDown":e.preventDefault(),this.setYear({localizedYear:t,offset:-1});break;case"ArrowUp":e.preventDefault(),this.setYear({localizedYear:t,offset:1})}},this.onYearChange=e=>{this.setYear({localizedYear:this.parseCalendarYear(e.target.value)})},this.onYearInput=e=>{this.setYear({localizedYear:this.parseCalendarYear(e.target.value),commit:!1})},this.prevMonthClick=e=>{this.handleArrowClick(e,this.prevMonthDate)},this.prevMonthKeydown=e=>{(0,r.i)(e.key)&&this.prevMonthClick(e)},this.nextMonthClick=e=>{this.handleArrowClick(e,this.nextMonthDate)},this.nextMonthKeydown=e=>{(0,r.i)(e.key)&&this.nextMonthClick(e)},this.handleArrowClick=(e,t)=>{e.preventDefault(),this.calciteInternalDatePickerSelect.emit(t)},this.selectedDate=void 0,this.activeDate=void 0,this.headingLevel=void 0,this.min=void 0,this.max=void 0,this.scale=void 0,this.localeData=void 0,this.messages=void 0,this.nextMonthDate=void 0,this.prevMonthDate=void 0}componentWillLoad(){this.parentDatePickerEl=(0,n.c)(this.el,"calcite-date-picker")}connectedCallback(){this.setNextPrevMonthDates()}render(){return(0,i.h)("div",{class:d},this.renderContent())}renderContent(){var e;const{messages:t,localeData:a,activeDate:n}=this;if(!n||!a)return null;if(this.parentDatePickerEl){const{numberingSystem:e,lang:t}=this.parentDatePickerEl;c.n.numberFormatOptions={useGrouping:!1,...e&&{numberingSystem:e},...t&&{locale:t}}}const r=n.getMonth(),{months:l,unitOrder:d}=a,k=(l.wide||l.narrow||l.abbreviated)[r],x=this.formatCalendarYear(n.getFullYear()),b=(0,s.j)(d),A=b.indexOf("y")<b.indexOf("m"),w=null===(e=a.year)||void 0===e?void 0:e.suffix;return(0,i.h)(i.HY,null,(0,i.h)("a",{"aria-disabled":"".concat(this.prevMonthDate.getMonth()===r),"aria-label":t.prevMonth,class:D,href:"#",onClick:this.prevMonthClick,onKeyDown:this.prevMonthKeydown,role:"button",tabindex:this.prevMonthDate.getMonth()===r?-1:0},(0,i.h)("calcite-icon",{"flip-rtl":!0,icon:p,scale:(0,o.g)(this.scale)})),(0,i.h)("div",{class:{text:!0,[f]:A}},(0,i.h)(h.H,{class:v,level:this.headingLevel},k),(0,i.h)("span",{class:m},(0,i.h)("input",{"aria-label":t.year,class:{year:!0,[g]:!!w},inputmode:"numeric",maxlength:"4",minlength:"1",onChange:this.onYearChange,onInput:this.onYearInput,onKeyDown:this.onYearKey,pattern:"\\d*",type:"text",value:x,ref:e=>this.yearInput=e}),w&&(0,i.h)("span",{class:u},w))),(0,i.h)("a",{"aria-disabled":"".concat(this.nextMonthDate.getMonth()===r),"aria-label":t.nextMonth,class:D,href:"#",onClick:this.nextMonthClick,onKeyDown:this.nextMonthKeydown,role:"button",tabindex:this.nextMonthDate.getMonth()===r?-1:0},(0,i.h)("calcite-icon",{"flip-rtl":!0,icon:y,scale:(0,o.g)(this.scale)})))}setNextPrevMonthDates(){this.activeDate&&(this.nextMonthDate=(0,s.f)((0,s.n)(this.activeDate),this.min,this.max),this.prevMonthDate=(0,s.f)((0,s.p)(this.activeDate),this.min,this.max))}formatCalendarYear(e){return c.n.localize("".concat((0,s.k)(e,this.localeData)))}parseCalendarYear(e){return c.n.localize("".concat((0,s.l)(Number(c.n.delocalize(e)),this.localeData)))}getInRangeDate(e){let{localizedYear:t,offset:a=0}=e;const{min:i,max:n,activeDate:r}=this,h=Number(c.n.delocalize(t)),o=h.toString().length,l=!isNaN(h)&&h+a,d=l&&(!i||i.getFullYear()<=l)&&(!n||n.getFullYear()>=l);if(l&&d&&o===t.length){const e=new Date(r);return e.setFullYear(l),(0,s.f)(e,i,n)}}setYear(e){let{localizedYear:t,commit:a=!0,offset:i=0}=e;const{yearInput:s,activeDate:n}=this,r=this.getInRangeDate({localizedYear:t,offset:i});r&&this.calciteInternalDatePickerSelect.emit(r),a&&(s.value=this.formatCalendarYear((r||n).getFullYear()))}get el(){return this}static get watchers(){return{min:["setNextPrevMonthDates"],max:["setNextPrevMonthDates"],activeDate:["setNextPrevMonthDates"]}}static get style(){return":host{display:block}.header{display:flex;justify-content:space-between;padding-block:0px;padding-inline:0.25rem}:host([scale=s]) .text{margin-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=s]) .chevron{block-size:2.25rem}:host([scale=m]) .text{margin-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=m]) .chevron{block-size:3rem}:host([scale=l]) .text{margin-block:1rem;font-size:var(--calcite-font-size-1);line-height:1.5rem}:host([scale=l]) .chevron{block-size:3.5rem}.chevron{margin-inline:-0.25rem;box-sizing:content-box;display:flex;flex-grow:0;cursor:pointer;align-items:center;justify-content:center;border-style:none;background-color:var(--calcite-ui-foreground-1);padding-inline:0.25rem;color:var(--calcite-ui-text-3);outline:2px solid transparent;outline-offset:2px;outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;inline-size:14.2857142857%}.chevron:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.chevron:hover,.chevron:focus{background-color:var(--calcite-ui-foreground-2);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1)}.chevron:active{background-color:var(--calcite-ui-foreground-3)}.chevron[aria-disabled=true]{pointer-events:none;opacity:0}.text{margin-block:auto;display:flex;inline-size:100%;flex:1 1 auto;align-items:center;justify-content:center;text-align:center;line-height:1}.text--reverse{flex-direction:row-reverse}.month,.year,.suffix{margin-inline:0.25rem;margin-block:auto;display:inline-block;background-color:var(--calcite-ui-foreground-1);font-weight:var(--calcite-font-weight-medium);line-height:1.25;color:var(--calcite-ui-text-1);font-size:inherit}.year{position:relative;inline-size:2.5rem;border-style:none;background-color:transparent;text-align:center;font-family:inherit;outline-color:transparent}.year:hover{transition-duration:100ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-property:outline-color;outline:2px solid var(--calcite-ui-border-2);outline-offset:2px}.year:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.year--suffix{text-align:start}.year-wrap{position:relative}.suffix{inset-block-start:0px;white-space:nowrap;text-align:start;inset-inline-start:0}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-date-picker-month-header",{selectedDate:[16],activeDate:[16],headingLevel:[2,"heading-level"],min:[16],max:[16],scale:[513],localeData:[16],messages:[1040],nextMonthDate:[32],prevMonthDate:[32]}]);function x(){if("undefined"===typeof customElements)return;["calcite-date-picker-month-header","calcite-icon"].forEach((e=>{switch(e){case"calcite-date-picker-month-header":customElements.get(e)||customElements.define(e,k);break;case"calcite-icon":customElements.get(e)||(0,l.d)()}}))}x()},1029:(e,t,a)=>{a.d(t,{D:()=>r,d:()=>c});var i=a(51554),s=a(10883),n=a(8443);const r=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalDatePickerSelect=(0,i.yM)(this,"calciteInternalDatePickerSelect",6),this.calciteInternalDatePickerHover=(0,i.yM)(this,"calciteInternalDatePickerHover",6),this.calciteInternalDatePickerActiveDateChange=(0,i.yM)(this,"calciteInternalDatePickerActiveDateChange",6),this.calciteInternalDatePickerMouseOut=(0,i.yM)(this,"calciteInternalDatePickerMouseOut",6),this.keyDownHandler=e=>{if(e.defaultPrevented)return;const t="rtl"===this.el.dir;switch(e.key){case"ArrowUp":e.preventDefault(),this.addDays(-7);break;case"ArrowRight":e.preventDefault(),this.addDays(t?-1:1);break;case"ArrowDown":e.preventDefault(),this.addDays(7);break;case"ArrowLeft":e.preventDefault(),this.addDays(t?1:-1);break;case"PageUp":e.preventDefault(),this.addMonths(-1);break;case"PageDown":e.preventDefault(),this.addMonths(1);break;case"Home":e.preventDefault(),this.activeDate.setDate(1),this.addDays();break;case"End":e.preventDefault(),this.activeDate.setDate(new Date(this.activeDate.getFullYear(),this.activeDate.getMonth()+1,0).getDate()),this.addDays();break;case"Enter":case" ":e.preventDefault();break;case"Tab":this.activeFocus=!1}},this.disableActiveFocus=()=>{this.activeFocus=!1},this.dayHover=e=>{const t=e.target;t.disabled?this.calciteInternalDatePickerMouseOut.emit():this.calciteInternalDatePickerHover.emit(t.value),e.stopPropagation()},this.daySelect=e=>{const t=e.target;this.calciteInternalDatePickerSelect.emit(t.value)},this.dateTimeFormat=void 0,this.selectedDate=void 0,this.activeDate=new Date,this.startDate=void 0,this.endDate=void 0,this.min=void 0,this.max=void 0,this.scale=void 0,this.localeData=void 0,this.hoverRange=void 0}pointerOutHandler(){this.calciteInternalDatePickerMouseOut.emit()}render(){const e=this.activeDate.getMonth(),t=this.activeDate.getFullYear(),a=this.localeData.weekStart%7,{abbreviated:n,short:r,narrow:c}=this.localeData.days,h="s"===this.scale?c||r||n:r||n||c,o=[...h.slice(a,7),...h.slice(0,a)],l=this.getCurrentMonthDays(e,t),d=this.getPreviousMonthDays(e,t,a),v=this.getNextMonthDays(e,t,a);let D=0;const u=()=>D++%7,g=[...d.map((a=>({active:!1,day:a,dayInWeek:u(),date:new Date(t,e-1,a)}))),...l.map((a=>{const i=new Date(t,e,a);return{active:(0,s.h)(i,this.activeDate),currentMonth:!0,day:a,dayInWeek:u(),date:i,ref:!0}})),...v.map((a=>({active:!1,day:a,dayInWeek:u(),date:new Date(t,e+1,a)})))],m=[];for(let i=0;i<g.length;i+=7)m.push(g.slice(i,i+7));return(0,i.h)(i.AA,{onFocusOut:this.disableActiveFocus,onKeyDown:this.keyDownHandler},(0,i.h)("div",{class:"calendar",role:"grid"},(0,i.h)("div",{class:"week-headers",role:"row"},o.map((e=>(0,i.h)("span",{class:"week-header",role:"columnheader"},e)))),m.map((e=>(0,i.h)("div",{class:"week-days",role:"row"},e.map((e=>this.renderDateDay(e))))))))}addMonths(e){const t=new Date(this.activeDate);t.setMonth(this.activeDate.getMonth()+e),this.calciteInternalDatePickerActiveDateChange.emit((0,s.f)(t,this.min,this.max)),this.activeFocus=!0}addDays(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const t=new Date(this.activeDate);t.setDate(this.activeDate.getDate()+e),this.calciteInternalDatePickerActiveDateChange.emit((0,s.f)(t,this.min,this.max)),this.activeFocus=!0}getPreviousMonthDays(e,t,a){const i=new Date(t,e,0),s=i.getDate(),n=i.getDay(),r=[];if(n===(a+6)%7)return r;if(n===a)return[s];for(let c=(7+n-a)%7;c>=0;c--)r.push(s-c);return r}getCurrentMonthDays(e,t){const a=new Date(t,e+1,0).getDate(),i=[];for(let s=0;s<a;s++)i.push(s+1);return i}getNextMonthDays(e,t,a){const i=new Date(t,e+1,0).getDay(),s=[];if(i===(a+6)%7)return s;for(let n=0;n<(6-(i-a))%7;n++)s.push(n+1);return s}betweenSelectedRange(e){return!(!(this.startDate&&this.endDate&&e>this.startDate&&e<this.endDate)||this.isRangeHover(e))}isSelected(e){return!!((0,s.h)(e,this.selectedDate)||this.startDate&&(0,s.h)(e,this.startDate)||this.endDate&&(0,s.h)(e,this.endDate))}isStartOfRange(e){return!(!this.startDate||(0,s.h)(this.startDate,this.endDate)||!(0,s.h)(this.startDate,e)||this.isEndOfRange(e))}isEndOfRange(e){return!!(this.endDate&&!(0,s.h)(this.startDate,this.endDate)&&(0,s.h)(this.endDate,e)||!this.endDate&&this.hoverRange&&(0,s.h)(this.startDate,this.hoverRange.end)&&(0,s.h)(e,this.hoverRange.end))}renderDateDay(e){var t;let{active:a,currentMonth:n,date:r,day:c,dayInWeek:h,ref:o}=e;const l=this.isFocusedOnStart(),d=this.isHoverInRange()||!this.endDate&&this.hoverRange&&(0,s.h)(null===(t=this.hoverRange)||void 0===t?void 0:t.end,this.startDate);return(0,i.h)("div",{class:"day",key:r.toDateString(),role:"gridcell"},(0,i.h)("calcite-date-picker-day",{active:a,class:{"hover--inside-range":this.startDate&&d,"hover--outside-range":this.startDate&&!d,"focused--start":l,"focused--end":!l},currentMonth:n,dateTimeFormat:this.dateTimeFormat,day:c,disabled:!(0,s.i)(r,this.min,this.max),endOfRange:this.isEndOfRange(r),highlighted:this.betweenSelectedRange(r),onCalciteDaySelect:this.daySelect,onCalciteInternalDayHover:this.dayHover,range:!!this.startDate&&!!this.endDate&&!(0,s.h)(this.startDate,this.endDate),rangeEdge:0===h?"start":6===h?"end":void 0,rangeHover:this.isRangeHover(r),scale:this.scale,selected:this.isSelected(r),startOfRange:this.isStartOfRange(r),value:r,ref:e=>{o&&a&&this.activeFocus&&(null===e||void 0===e||e.focus())}}))}isFocusedOnStart(){var e;return"start"===(null===(e=this.hoverRange)||void 0===e?void 0:e.focused)}isHoverInRange(){if(!this.hoverRange)return!1;const{start:e,end:t}=this.hoverRange;return!!(!this.isFocusedOnStart()&&this.startDate&&(!this.endDate||t<this.endDate)||this.isFocusedOnStart()&&this.startDate&&e>this.startDate)}isRangeHover(e){if(!this.hoverRange)return!1;const{start:t,end:a}=this.hoverRange,i=this.isFocusedOnStart(),n=this.isHoverInRange(),r=n&&(!i&&e>this.startDate&&(e<a||(0,s.h)(e,a))||i&&e<this.endDate&&(e>t||(0,s.h)(e,t))),c=!n&&(!i&&e>=this.endDate&&(e<a||(0,s.h)(e,a))||i&&(this.startDate&&e<this.startDate||this.endDate&&(0,s.h)(e,this.startDate))&&(t&&e>t||(0,s.h)(e,t)));return r||c}get el(){return this}static get style(){return":host([hidden]){display:none}[hidden]{display:none}.calendar{margin-block-end:0.25rem}.week-headers{display:flex;border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);padding-block:0px;padding-inline:0.25rem}.week-header{text-align:center;font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-3);inline-size:14.2857142857%}.day{display:flex;min-inline-size:0px;justify-content:center;inline-size:14.2857142857%}:host([scale=s]) .week-header{padding-inline:0px;padding-block:0.5rem 0.75rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) .week-header{padding-inline:0px;padding-block:0.75rem 1rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=l]) .week-header{padding-inline:0px;padding-block:1rem 1.25rem;font-size:var(--calcite-font-size--1);line-height:1rem}.week-days{display:flex;flex-direction:row;padding-block:0px;padding-inline:6px}.week-days:focus{outline:2px solid transparent;outline-offset:2px}"}},[1,"calcite-date-picker-month",{dateTimeFormat:[16],selectedDate:[16],activeDate:[16],startDate:[16],endDate:[16],min:[16],max:[16],scale:[513],localeData:[16],hoverRange:[16]},[[1,"pointerout","pointerOutHandler"]]]);function c(){if("undefined"===typeof customElements)return;["calcite-date-picker-month","calcite-date-picker-day"].forEach((e=>{switch(e){case"calcite-date-picker-month":customElements.get(e)||customElements.define(e,r);break;case"calcite-date-picker-day":customElements.get(e)||(0,n.d)()}}))}c()},8152:(e,t,a)=>{a.d(t,{D:()=>f,a:()=>g,d:()=>p,g:()=>m});var i=a(51554),s=a(10883),n=a(47242),r=a(46895),c=a(52655),h=a(8443),o=a(1029),l=a(20856),d=a(57601);const v={dateStyle:"full"},D={},u={};async function g(e){const t=(0,r.g)(e);if(D[t])return D[t];u[t]||(u[t]=fetch((0,i.K3)("./assets/date-picker/nls/".concat(t,".json"))).then((e=>e.json())).catch((()=>(console.error('Translations for "'.concat(t,'" not found or invalid, falling back to english')),g("en")))));const a=await u[t];return D[t]=a,a}function m(e){return e.map(((e,t)=>(0,s.e)(e,1===t)))}const f=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteDatePickerChange=(0,i.yM)(this,"calciteDatePickerChange",6),this.calciteDatePickerRangeChange=(0,i.yM)(this,"calciteDatePickerRangeChange",6),this.keyDownHandler=e=>{"Escape"===e.key&&this.resetActiveDates()},this.monthHeaderSelectChange=e=>{const t=new Date(e.detail);this.range?("end"===this.activeRange?this.activeEndDate=t:this.activeStartDate=t,this.mostRecentRangeValue=t):this.activeDate=t},this.monthActiveDateChange=e=>{const t=new Date(e.detail);this.range?("end"===this.activeRange?this.activeEndDate=t:this.activeStartDate=t,this.mostRecentRangeValue=t):this.activeDate=t},this.monthHoverChange=e=>{if(!this.range)return void(this.hoverRange=void 0);const{valueAsDate:t}=this,a=Array.isArray(t)&&t[0],i=Array.isArray(t)&&t[1],n=new Date(e.detail);if(this.hoverRange={focused:this.activeRange||"start",start:a,end:i},this.proximitySelectionDisabled)i?this.hoverRange=void 0:n<a?this.hoverRange={focused:"start",start:n,end:a}:(this.hoverRange.end=n,this.hoverRange.focused="end");else if(i){const e=(0,s.g)(n,a),t=(0,s.g)(n,i);t>0?(this.hoverRange.end=n,this.hoverRange.focused="end"):e<0||e>t?(this.hoverRange.start=n,this.hoverRange.focused="start"):(this.hoverRange.end=n,this.hoverRange.focused="end")}else a&&(n<a?this.hoverRange={focused:"start",start:n,end:a}:(this.hoverRange.end=n,this.hoverRange.focused="end"));e.stopPropagation()},this.monthMouseOutChange=()=>{this.hoverRange&&(this.hoverRange=void 0)},this.resetActiveDates=()=>{const{valueAsDate:e}=this;!Array.isArray(e)&&e&&e!==this.activeDate&&(this.activeDate=new Date(e)),Array.isArray(e)&&(e[0]&&e[0]!==this.activeStartDate&&(this.activeStartDate=new Date(e[0])),e[1]&&e[1]!==this.activeEndDate&&(this.activeEndDate=new Date(e[1])))},this.monthDateChange=e=>{const t=new Date(e.detail),a=(0,s.c)(t);if(!this.range&&a===(0,s.c)(this.valueAsDate))return;if(!this.range)return this.value=a||"",this.valueAsDate=t||null,this.activeDate=t||null,void this.calciteDatePickerChange.emit();const i=this.getStartDate(),n=this.getEndDate();if(!i||!n&&t<i)i&&this.setEndDate(new Date(i)),"end"==this.activeRange?this.setEndDate(t):this.setStartDate(t);else if(n)if(this.proximitySelectionDisabled)this.setStartDate(t);else if(this.activeRange)"end"==this.activeRange?this.setEndDate(t):this.setStartDate(t);else{const e=(0,s.g)(t,i),a=(0,s.g)(t,n);0===a||e<0?this.setStartDate(t):0===e||a<0?this.setEndDate(t):e<a?this.setStartDate(t):this.setEndDate(t)}else this.setEndDate(t);this.calciteDatePickerChange.emit()},this.activeDate=void 0,this.activeRange=void 0,this.value=void 0,this.headingLevel=void 0,this.valueAsDate=void 0,this.minAsDate=void 0,this.maxAsDate=void 0,this.min=void 0,this.max=void 0,this.numberingSystem=void 0,this.scale="m",this.range=!1,this.proximitySelectionDisabled=!1,this.messageOverrides=void 0,this.messages=void 0,this.activeEndDate=void 0,this.activeStartDate=void 0,this.dateTimeFormat=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.endAsDate=void 0,this.hoverRange=void 0,this.localeData=void 0,this.mostRecentRangeValue=void 0,this.startAsDate=void 0}activeDateWatcher(e){"end"===this.activeRange&&(this.activeEndDate=e)}valueAsDateWatcher(e){if(this.range&&Array.isArray(e)){const{activeStartDate:t,activeEndDate:a}=this,i=e[0],s=e[1];this.activeStartDate=t!==i&&i,this.activeEndDate=a!==s&&s}else e&&e!==this.activeDate&&(this.activeDate=e)}onMinChanged(e){e&&(this.minAsDate=(0,s.e)(e))}onMaxChanged(e){e&&(this.maxAsDate=(0,s.e)(e))}onMessagesChange(){}async setFocus(){await(0,n.c)(this),this.el.focus()}async reset(){this.resetActiveDates(),this.mostRecentRangeValue=void 0}connectedCallback(){(0,r.c)(this),(0,c.c)(this),Array.isArray(this.value)?this.valueAsDate=m(this.value):this.value&&(this.valueAsDate=(0,s.e)(this.value)),this.min&&(this.minAsDate=(0,s.e)(this.min)),this.max&&(this.maxAsDate=(0,s.e)(this.max))}disconnectedCallback(){(0,r.d)(this),(0,c.d)(this)}async componentWillLoad(){(0,n.a)(this),await this.loadLocaleData(),this.onMinChanged(this.min),this.onMaxChanged(this.max),await(0,c.s)(this)}componentDidLoad(){(0,n.s)(this)}render(){var e;const t=(0,s.f)(this.range&&Array.isArray(this.valueAsDate)?this.valueAsDate[0]:this.valueAsDate,this.minAsDate,this.maxAsDate);let a=this.getActiveDate(t,this.minAsDate,this.maxAsDate);const n=this.range&&Array.isArray(this.valueAsDate)?(0,s.f)(this.valueAsDate[1],this.minAsDate,this.maxAsDate):null,r=this.getActiveEndDate(n,this.minAsDate,this.maxAsDate);"end"!==this.activeRange&&("end"!==(null===(e=this.hoverRange)||void 0===e?void 0:e.focused)||this.proximitySelectionDisabled&&!n)||!r||(a=r),this.range&&this.mostRecentRangeValue&&(a=this.mostRecentRangeValue);const c=this.range&&this.activeRange?"start"===this.activeRange?this.minAsDate:t||this.minAsDate:this.minAsDate,h=this.range&&this.activeRange&&"start"===this.activeRange&&n||this.maxAsDate;return(0,i.h)(i.AA,{onBlur:this.resetActiveDates,onKeyDown:this.keyDownHandler},this.renderCalendar(a,h,c,t,n))}effectiveLocaleChange(){(0,c.u)(this,this.effectiveLocale)}valueHandler(e){Array.isArray(e)?this.valueAsDate=m(e):e&&(this.valueAsDate=(0,s.e)(e))}async loadLocaleData(){i.Z5.isBrowser&&(r.n.numberFormatOptions={numberingSystem:this.numberingSystem,locale:this.effectiveLocale,useGrouping:!1},this.localeData=await g(this.effectiveLocale),this.dateTimeFormat=(0,r.b)(this.effectiveLocale,v))}renderCalendar(e,t,a,s,n){return this.localeData&&[(0,i.h)("calcite-date-picker-month-header",{activeDate:e,headingLevel:this.headingLevel||2,localeData:this.localeData,max:t,messages:this.messages,min:a,onCalciteInternalDatePickerSelect:this.monthHeaderSelectChange,scale:this.scale,selectedDate:"end"===this.activeRange?n:s||new Date}),(0,i.h)("calcite-date-picker-month",{activeDate:e,dateTimeFormat:this.dateTimeFormat,endDate:this.range?n:void 0,hoverRange:this.hoverRange,localeData:this.localeData,max:t,min:a,onCalciteInternalDatePickerActiveDateChange:this.monthActiveDateChange,onCalciteInternalDatePickerHover:this.monthHoverChange,onCalciteInternalDatePickerMouseOut:this.monthMouseOutChange,onCalciteInternalDatePickerSelect:this.monthDateChange,scale:this.scale,selectedDate:"end"===this.activeRange?n:s,startDate:this.range?s:void 0})]}getEndDate(){return Array.isArray(this.valueAsDate)&&this.valueAsDate[1]||void 0}setEndDate(e){const t=this.getStartDate(),a=e?(0,s.s)(e):e;this.value=[(0,s.c)(t),(0,s.c)(e)],this.valueAsDate=[t,e],this.mostRecentRangeValue=a,this.calciteDatePickerRangeChange.emit(),this.activeEndDate=e||null}getStartDate(){return Array.isArray(this.valueAsDate)&&this.valueAsDate[0]}setStartDate(e){const t=this.getEndDate();this.value=[(0,s.c)(e),(0,s.c)(t)],this.valueAsDate=[e,t],this.mostRecentRangeValue=e,this.calciteDatePickerRangeChange.emit(),this.activeStartDate=e||null}getActiveDate(e,t,a){return(0,s.f)(this.activeDate,t,a)||e||(0,s.f)(new Date,t,a)}getActiveEndDate(e,t,a){return(0,s.f)(this.activeEndDate,t,a)||e||(0,s.f)(new Date,t,a)}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{activeDate:["activeDateWatcher"],valueAsDate:["valueAsDateWatcher"],min:["onMinChanged"],max:["onMaxChanged"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange","loadLocaleData"],value:["valueHandler"]}}static get style(){return":host{position:relative;display:inline-block;inline-size:100%;overflow:visible;border-radius:0px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-1);background-color:var(--calcite-ui-foreground-1);vertical-align:top}:host([scale=s]){max-inline-size:216px}:host([scale=m]){max-inline-size:286px}:host([scale=l]){max-inline-size:398px}:host([hidden]){display:none}[hidden]{display:none}"}},[17,"calcite-date-picker",{activeDate:[1040],activeRange:[513,"active-range"],value:[1025],headingLevel:[514,"heading-level"],valueAsDate:[1040],minAsDate:[1040],maxAsDate:[1040],min:[513],max:[513],numberingSystem:[513,"numbering-system"],scale:[513],range:[516],proximitySelectionDisabled:[516,"proximity-selection-disabled"],messageOverrides:[1040],messages:[1040],activeEndDate:[32],activeStartDate:[32],dateTimeFormat:[32],defaultMessages:[32],effectiveLocale:[32],endAsDate:[32],hoverRange:[32],localeData:[32],mostRecentRangeValue:[32],startAsDate:[32],setFocus:[64],reset:[64]}]);function p(){if("undefined"===typeof customElements)return;["calcite-date-picker","calcite-date-picker-day","calcite-date-picker-month","calcite-date-picker-month-header","calcite-icon"].forEach((e=>{switch(e){case"calcite-date-picker":customElements.get(e)||customElements.define(e,f);break;case"calcite-date-picker-day":customElements.get(e)||(0,h.d)();break;case"calcite-date-picker-month":customElements.get(e)||(0,o.d)();break;case"calcite-date-picker-month-header":customElements.get(e)||(0,l.d)();break;case"calcite-icon":customElements.get(e)||(0,d.d)()}}))}p()}}]);
//# sourceMappingURL=2344.8ef8e8e8.chunk.js.map