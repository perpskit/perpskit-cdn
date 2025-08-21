/*! For license information please see 6800.widget.iife.js.LICENSE.txt */
"undefined"!=typeof globalThis&&(void 0===globalThis.process&&(globalThis.process={env:{NODE_ENV:"production"},browser:!0,version:"",versions:{}}),void 0===globalThis.require&&(globalThis.require=function(t){if("process/browser"===t||"process"===t)return globalThis.process;throw new Error("Module not found: "+t)})),"undefined"!=typeof window&&(void 0===window.process&&(window.process={env:{NODE_ENV:"production"},browser:!0,version:"",versions:{}}),void 0===window.require&&(window.require=function(t){if("process/browser"===t||"process"===t)return window.process;throw new Error("Module not found: "+t)})),"undefined"!=typeof global&&(void 0===global.process&&(global.process={env:{NODE_ENV:"production"},browser:!0,version:"",versions:{}}),void 0===global.require&&(global.require=function(t){if("process/browser"===t||"process"===t)return global.process;throw new Error("Module not found: "+t)})),"undefined"!=typeof self&&(void 0===self.process&&(self.process={env:{NODE_ENV:"production"},browser:!0,version:"",versions:{}}),void 0===self.require&&(self.require=function(t){if("process/browser"===t||"process"===t)return self.process;throw new Error("Module not found: "+t)})),(this.webpackChunkHLWidget=this.webpackChunkHLWidget||[]).push([[6800],{379:(t,e,o)=>{o.d(e,{_:()=>r,K:()=>l});var i=o(80971),a=o(64720),n=o(39341);const r=()=>new s;class s{}const c=new WeakMap,l=(0,n.u$)(class extends a.Kq{render(t){return i.s6}update(t,[e]){const o=e!==this.G;return o&&void 0!==this.G&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),i.s6}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.G){const e=this.ht??globalThis;let o=c.get(e);void 0===o&&(o=new WeakMap,c.set(e,o)),void 0!==o.get(this.G)&&this.G.call(this.ht,void 0),o.set(this.G,t),void 0!==t&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return"function"==typeof this.G?c.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})},4537:(t,e,o)=>{o.d(e,{w:()=>a});var i=o(69623);function a(t){return(0,i.M)({...t,state:!0,attribute:!1})}},20766:(t,e,o)=>{var i=o(48422),a=o(91427),n=o(56063),r=o(68664);const s=i.AH`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var c=function(t,e,o,i){var a,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(n<3?a(r):n>3?a(e,o,r):a(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r};let l=class extends i.WF{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText="--local-color: "+("inherit"===this.color?"inherit":`var(--wui-color-${this.color})`),this.dataset.size=this.size,i.qy`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};l.styles=[n.W5,s],c([(0,a.MZ)()],l.prototype,"color",void 0),c([(0,a.MZ)()],l.prototype,"size",void 0),l=c([(0,r.E)("wui-loading-spinner")],l)},22208:(t,e,o)=>{o(82963)},23507:(t,e,o)=>{o.d(e,{H:()=>n});var i=o(80971),a=o(39341);const n=(0,a.u$)(class extends a.WL{constructor(t){if(super(t),t.type!==a.OA.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const o=t.element.classList;for(const t of this.st)t in e||(o.remove(t),this.st.delete(t));for(const t in e){const i=!!e[t];i===this.st.has(t)||this.nt?.has(t)||(i?(o.add(t),this.st.add(t)):(o.remove(t),this.st.delete(t)))}return i.c0}})},25068:(t,e,o)=>{var i=o(48422),a=o(91427),n=o(43393),r=o(33461),s=o(29327),c=o(72470);const l=i.AH`
  :host {
    width: 100%;
    display: block;
  }
`;var u=function(t,e,o,i){var a,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(n<3?a(r):n>3?a(e,o,r):a(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r};let d=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.text="",this.open=n.I.state.open,this.unsubscribe.push(r.I.subscribeKey("view",()=>{n.I.hide()}),s.W.subscribeKey("open",t=>{t||n.I.hide()}),n.I.subscribeKey("open",t=>{this.open=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),n.I.hide()}render(){return i.qy`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return i.qy`<slot></slot> `}onMouseEnter(){const t=this.getBoundingClientRect();this.open||n.I.showTooltip({message:this.text,triggerRect:{width:t.width,height:t.height,left:t.left,top:t.top},variant:"shade"})}onMouseLeave(t){this.contains(t.relatedTarget)||n.I.hide()}};d.styles=[l],u([(0,a.MZ)()],d.prototype,"text",void 0),u([(0,a.wk)()],d.prototype,"open",void 0),d=u([(0,c.EM)("w3m-tooltip-trigger")],d)},27165:(t,e,o)=>{o.d(e,{Rt:()=>r,sO:()=>n});var i=o(80971);const{I:a}=i.ge,n=t=>null===t||"object"!=typeof t&&"function"!=typeof t,r=t=>void 0===t.strings},30990:(t,e,o)=>{var i=o(48422),a=o(91427),n=o(23507),r=o(39168),s=o(379),c=(o(59481),o(56063)),l=o(68664);const u=i.AH`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var d=function(t,e,o,i){var a,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(n<3?a(r):n>3?a(e,o,r):a(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r};let p=class extends i.WF{constructor(){super(...arguments),this.inputElementRef=(0,s._)(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const t=`wui-padding-right-${this.inputRightPadding}`,e=`wui-size-${this.size}`,o={[e]:!0,[t]:Boolean(this.inputRightPadding)};return i.qy`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${(0,s.K)(this.inputElementRef)}
        class=${(0,n.H)(o)}
        type=${this.type}
        enterkeyhint=${(0,r.J)(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
        tabindex=${(0,r.J)(this.tabIdx)}
      />
      <slot></slot>`}templateIcon(){return this.icon?i.qy`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};p.styles=[c.W5,c.fD,u],d([(0,a.MZ)()],p.prototype,"size",void 0),d([(0,a.MZ)()],p.prototype,"icon",void 0),d([(0,a.MZ)({type:Boolean})],p.prototype,"disabled",void 0),d([(0,a.MZ)()],p.prototype,"placeholder",void 0),d([(0,a.MZ)()],p.prototype,"type",void 0),d([(0,a.MZ)()],p.prototype,"keyHint",void 0),d([(0,a.MZ)()],p.prototype,"value",void 0),d([(0,a.MZ)()],p.prototype,"inputRightPadding",void 0),d([(0,a.MZ)()],p.prototype,"tabIdx",void 0),p=d([(0,l.E)("wui-input-text")],p)},31037:(t,e,o)=>{var i=o(48422),a=o(91427),n=o(56063),r=o(68664);const s=i.AH`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var c=function(t,e,o,i){var a,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(n<3?a(r):n>3?a(e,o,r):a(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r};let l=class extends i.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`\n      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      `,i.qy`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};l.styles=[n.W5,n.ck,s],c([(0,a.MZ)()],l.prototype,"src",void 0),c([(0,a.MZ)()],l.prototype,"alt",void 0),c([(0,a.MZ)()],l.prototype,"size",void 0),l=c([(0,r.E)("wui-image")],l)},32971:(t,e,o)=>{o.d(e,{T:()=>p});var i=o(80971),a=o(27165),n=o(64720);class r{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class s{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}var c=o(39341);const l=t=>!(0,a.sO)(t)&&"function"==typeof t.then,u=1073741823;class d extends n.Kq{constructor(){super(...arguments),this._$Cwt=u,this._$Cbt=[],this._$CK=new r(this),this._$CX=new s}render(...t){return t.find(t=>!l(t))??i.c0}update(t,e){const o=this._$Cbt;let a=o.length;this._$Cbt=e;const n=this._$CK,r=this._$CX;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$Cwt);t++){const i=e[t];if(!l(i))return this._$Cwt=t,i;t<a&&i===o[t]||(this._$Cwt=u,a=0,Promise.resolve(i).then(async t=>{for(;r.get();)await r.get();const e=n.deref();if(void 0!==e){const o=e._$Cbt.indexOf(i);o>-1&&o<e._$Cwt&&(e._$Cwt=o,e.setValue(t))}}))}return i.c0}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const p=(0,c.u$)(d)},33165:(t,e,o)=>{var i=o(48422),a=o(91427),n=o(56063),r=o(71686),s=o(68664);const c=i.AH`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var l=function(t,e,o,i){var a,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(n<3?a(r):n>3?a(e,o,r):a(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r};let u=class extends i.WF{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&r.Z.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&r.Z.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&r.Z.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&r.Z.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&r.Z.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&r.Z.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&r.Z.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&r.Z.getSpacingStyles(this.margin,3)};\n    `,i.qy`<slot></slot>`}};u.styles=[n.W5,c],l([(0,a.MZ)()],u.prototype,"flexDirection",void 0),l([(0,a.MZ)()],u.prototype,"flexWrap",void 0),l([(0,a.MZ)()],u.prototype,"flexBasis",void 0),l([(0,a.MZ)()],u.prototype,"flexGrow",void 0),l([(0,a.MZ)()],u.prototype,"flexShrink",void 0),l([(0,a.MZ)()],u.prototype,"alignItems",void 0),l([(0,a.MZ)()],u.prototype,"justifyContent",void 0),l([(0,a.MZ)()],u.prototype,"columnGap",void 0),l([(0,a.MZ)()],u.prototype,"rowGap",void 0),l([(0,a.MZ)()],u.prototype,"gap",void 0),l([(0,a.MZ)()],u.prototype,"padding",void 0),l([(0,a.MZ)()],u.prototype,"margin",void 0),u=l([(0,s.E)("wui-flex")],u)},37498:(t,e,o)=>{o(59481)},39168:(t,e,o)=>{o.d(e,{J:()=>a});var i=o(80971);const a=t=>t??i.s6},39341:(t,e,o)=>{o.d(e,{OA:()=>i,WL:()=>n,u$:()=>a});const i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},a=t=>(...e)=>({_$litDirective$:t,values:e});class n{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},43393:(t,e,o)=>{o.d(e,{I:()=>c});var i=o(44822),a=o(36517),n=o(28621);const r=(0,i.BX)({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),s={state:r,subscribe:t=>(0,i.B1)(r,()=>t(r)),subscribeKey:(t,e)=>(0,a.u$)(r,t,e),showTooltip({message:t,triggerRect:e,variant:o}){r.open=!0,r.message=t,r.triggerRect=e,r.variant=o},hide(){r.open=!1,r.message="",r.triggerRect={width:0,height:0,top:0,left:0}}},c=(0,n.X)(s)},43508:(t,e,o)=>{o(33165)},46800:(t,e,o)=>{o.r(e),o.d(e,{W3mSwapPreviewView:()=>z,W3mSwapSelectTokenView:()=>j,W3mSwapView:()=>C});var i=o(48422),a=o(91427),n=o(2973),r=o(33461),s=o(90101),c=o(52819),l=o(73540),u=o(92999),d=o(29327),p=o(34325),h=o(72470),w=(o(80659),o(43508),o(37498),o(79932),o(98096)),g=o(13947);o(25068),o(77887);const v=i.AH`
  :host {
    width: 100%;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    cursor: pointer;
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-1xs);
    border-radius: calc(var(--wui-border-radius-5xs) + var(--wui-border-radius-4xs));
    background: var(--wui-color-gray-glass-002);
  }

  .details-row-title {
    white-space: nowrap;
  }

  .details-row.provider-free-row {
    padding-right: var(--wui-spacing-xs);
  }
`;var b=function(t,e,o,i){var a,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(n<3?a(r):n>3?a(e,o,r):a(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r};const f=g.oU.CONVERT_SLIPPAGE_TOLERANCE;let m=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.networkName=c.W.state.activeCaipNetwork?.name,this.detailsOpen=!1,this.sourceToken=l.GN.state.sourceToken,this.toToken=l.GN.state.toToken,this.toTokenAmount=l.GN.state.toTokenAmount,this.sourceTokenPriceInUSD=l.GN.state.sourceTokenPriceInUSD,this.toTokenPriceInUSD=l.GN.state.toTokenPriceInUSD,this.priceImpact=l.GN.state.priceImpact,this.maxSlippage=l.GN.state.maxSlippage,this.networkTokenSymbol=l.GN.state.networkTokenSymbol,this.inputError=l.GN.state.inputError,this.unsubscribe.push(l.GN.subscribe(t=>{this.sourceToken=t.sourceToken,this.toToken=t.toToken,this.toTokenAmount=t.toTokenAmount,this.priceImpact=t.priceImpact,this.maxSlippage=t.maxSlippage,this.sourceTokenPriceInUSD=t.sourceTokenPriceInUSD,this.toTokenPriceInUSD=t.toTokenPriceInUSD,this.inputError=t.inputError}))}render(){const t=this.toTokenAmount&&this.maxSlippage?n.S.bigNumber(this.toTokenAmount).minus(this.maxSlippage).toString():null;if(!this.sourceToken||!this.toToken||this.inputError)return null;const e=this.sourceTokenPriceInUSD&&this.toTokenPriceInUSD?1/this.toTokenPriceInUSD*this.sourceTokenPriceInUSD:0;return i.qy`
      <wui-flex flexDirection="column" alignItems="center" gap="1xs" class="details-container">
        <wui-flex flexDirection="column">
          <button @click=${this.toggleDetails.bind(this)}>
            <wui-flex justifyContent="space-between" .padding=${["0","xs","0","xs"]}>
              <wui-flex justifyContent="flex-start" flexGrow="1" gap="xs">
                <wui-text variant="small-400" color="fg-100">
                  1 ${this.sourceToken.symbol} =
                  ${h.Zv.formatNumberToLocalString(e,3)}
                  ${this.toToken.symbol}
                </wui-text>
                <wui-text variant="small-400" color="fg-200">
                  $${h.Zv.formatNumberToLocalString(this.sourceTokenPriceInUSD)}
                </wui-text>
              </wui-flex>
              <wui-icon name="chevronBottom"></wui-icon>
            </wui-flex>
          </button>
          ${this.detailsOpen?i.qy`
                <wui-flex flexDirection="column" gap="xs" class="details-content-container">
                  ${this.priceImpact?i.qy` <wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Price impact
                            </wui-text>
                            <w3m-tooltip-trigger
                              text="Price impact reflects the change in market price due to your trade"
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${h.Zv.formatNumberToLocalString(this.priceImpact,3)}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  ${this.maxSlippage&&this.sourceToken.symbol?i.qy`<wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Max. slippage
                            </wui-text>
                            <w3m-tooltip-trigger
                              text=${"Max slippage sets the minimum amount you must receive for the transaction to proceed. "+(t?`Transaction will be reversed if you receive less than ${h.Zv.formatNumberToLocalString(t,6)} ${this.toToken.symbol} due to price changes.`:"")}
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${h.Zv.formatNumberToLocalString(this.maxSlippage,6)}
                              ${this.toToken.symbol} ${f}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row provider-free-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Provider fee
                        </wui-text>
                      </wui-flex>
                      <wui-flex>
                        <wui-text variant="small-400" color="fg-200">0.85%</wui-text>
                      </wui-flex>
                    </wui-flex>
                  </wui-flex>
                </wui-flex>
              `:null}
        </wui-flex>
      </wui-flex>
    `}toggleDetails(){this.detailsOpen=!this.detailsOpen}};m.styles=[v],b([(0,a.wk)()],m.prototype,"networkName",void 0),b([(0,a.MZ)()],m.prototype,"detailsOpen",void 0),b([(0,a.wk)()],m.prototype,"sourceToken",void 0),b([(0,a.wk)()],m.prototype,"toToken",void 0),b([(0,a.wk)()],m.prototype,"toTokenAmount",void 0),b([(0,a.wk)()],m.prototype,"sourceTokenPriceInUSD",void 0),b([(0,a.wk)()],m.prototype,"toTokenPriceInUSD",void 0),b([(0,a.wk)()],m.prototype,"priceImpact",void 0),b([(0,a.wk)()],m.prototype,"maxSlippage",void 0),b([(0,a.wk)()],m.prototype,"networkTokenSymbol",void 0),b([(0,a.wk)()],m.prototype,"inputError",void 0),m=b([(0,h.EM)("w3m-swap-details")],m),o(22208);const k=i.AH`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    position: relative;
  }

  wui-shimmer.market-value {
    opacity: 0;
  }

  :host > wui-flex > svg.input_mask {
    position: absolute;
    inset: 0;
    z-index: 5;
  }

  :host wui-flex .input_mask__border,
  :host wui-flex .input_mask__background {
    transition: fill var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: fill;
  }

  :host wui-flex .input_mask__border {
    fill: var(--wui-color-gray-glass-020);
  }

  :host wui-flex .input_mask__background {
    fill: var(--wui-color-gray-glass-002);
  }
`;var y=function(t,e,o,i){var a,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(n<3?a(r):n>3?a(e,o,r):a(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r};let x=class extends i.WF{constructor(){super(...arguments),this.target="sourceToken"}render(){return i.qy`
      <wui-flex class justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
          gap="xxs"
        >
          <wui-shimmer width="80px" height="40px" borderRadius="xxs" variant="light"></wui-shimmer>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}templateTokenSelectButton(){return i.qy`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-shimmer width="80px" height="40px" borderRadius="3xl" variant="light"></wui-shimmer>
      </wui-flex>
    `}};x.styles=[k],y([(0,a.MZ)()],x.prototype,"target",void 0),x=y([(0,h.EM)("w3m-swap-input-skeleton")],x);const T={numericInputKeyDown(t,e,o){const i=t.metaKey||t.ctrlKey,a=t.key,n=a.toLocaleLowerCase(),r=","===a,s="."===a,c=a>="0"&&a<="9";!i&&("a"===n||"c"===n||"v"===n||"x"===n)&&t.preventDefault(),"0"!==e||r||s||"0"!==a||t.preventDefault(),"0"===e&&c&&(o(a),t.preventDefault()),(r||s)&&(e||(o("0."),t.preventDefault()),(e?.includes(".")||e?.includes(","))&&t.preventDefault()),c||["Backspace","Meta","Ctrl","a","A","c","C","x","X","v","V","ArrowLeft","ArrowRight","Tab"].includes(a)||s||r||t.preventDefault()}};o(59936);const S=i.AH`
  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    position: relative;
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host wui-flex.focus {
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-005);
  }

  :host > wui-flex .swap-input,
  :host > wui-flex .swap-token-button {
    z-index: 10;
  }

  :host > wui-flex .swap-input {
    -webkit-mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  :host > wui-flex .swap-input input {
    background: none;
    border: none;
    height: 42px;
    width: 100%;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -1.28px;
    outline: none;
    caret-color: var(--wui-color-accent-100);
    color: var(--wui-color-fg-100);
    padding: 0px;
  }

  :host > wui-flex .swap-input input:focus-visible {
    outline: none;
  }

  :host > wui-flex .swap-input input::-webkit-outer-spin-button,
  :host > wui-flex .swap-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .max-value-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--wui-color-gray-glass-020);
    padding-left: 0px;
  }

  .market-value {
    min-height: 18px;
  }
`;var A=function(t,e,o,i){var a,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(n<3?a(r):n>3?a(e,o,r):a(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r};let $=class extends i.WF{constructor(){super(...arguments),this.focused=!1,this.price=0,this.target="sourceToken",this.onSetAmount=null,this.onSetMaxValue=null}render(){const t=this.marketValue||"0",e=n.S.bigNumber(t).gt("0");return i.qy`
      <wui-flex class="${this.focused?"focus":""}" justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
        >
          <input
            data-testid="swap-input-${this.target}"
            @focusin=${()=>this.onFocusChange(!0)}
            @focusout=${()=>this.onFocusChange(!1)}
            ?disabled=${this.disabled}
            .value=${this.value}
            @input=${this.dispatchInputChangeEvent}
            @keydown=${this.handleKeydown}
            placeholder="0"
            type="text"
            inputmode="decimal"
          />
          <wui-text class="market-value" variant="small-400" color="fg-200">
            ${e?`$${h.Zv.formatNumberToLocalString(this.marketValue,2)}`:null}
          </wui-text>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}handleKeydown(t){return T.numericInputKeyDown(t,this.value,t=>this.onSetAmount?.(this.target,t))}dispatchInputChangeEvent(t){if(!this.onSetAmount)return;const e=t.target.value.replace(/[^0-9.]/gu,"");","===e||"."===e?this.onSetAmount(this.target,"0."):e.endsWith(",")?this.onSetAmount(this.target,e.replace(",",".")):this.onSetAmount(this.target,e)}setMaxValueToInput(){this.onSetMaxValue?.(this.target,this.balance)}templateTokenSelectButton(){return this.token?i.qy`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-token-button
          data-testid="swap-input-token-${this.target}"
          text=${this.token.symbol}
          imageSrc=${this.token.logoUri}
          @click=${this.onSelectToken.bind(this)}
        >
        </wui-token-button>
        <wui-flex alignItems="center" gap="xxs"> ${this.tokenBalanceTemplate()} </wui-flex>
      </wui-flex>
    `:i.qy` <wui-button
        data-testid="swap-select-token-button-${this.target}"
        class="swap-token-button"
        size="md"
        variant="accent"
        @click=${this.onSelectToken.bind(this)}
      >
        Select token
      </wui-button>`}tokenBalanceTemplate(){const t=n.S.multiply(this.balance,this.price),e=!!t&&t?.gt(5e-5);return i.qy`
      ${e?i.qy`<wui-text variant="small-400" color="fg-200">
            ${h.Zv.formatNumberToLocalString(this.balance,2)}
          </wui-text>`:null}
      ${"sourceToken"===this.target?this.tokenActionButtonTemplate(e):null}
    `}tokenActionButtonTemplate(t){return t?i.qy` <button class="max-value-button" @click=${this.setMaxValueToInput.bind(this)}>
        <wui-text color="accent-100" variant="small-600">Max</wui-text>
      </button>`:i.qy` <button class="max-value-button" @click=${this.onBuyToken.bind(this)}>
      <wui-text color="accent-100" variant="small-600">Buy</wui-text>
    </button>`}onFocusChange(t){this.focused=t}onSelectToken(){p.E.sendEvent({type:"track",event:"CLICK_SELECT_TOKEN_TO_SWAP"}),r.I.push("SwapSelectToken",{target:this.target})}onBuyToken(){r.I.push("OnRampProviders")}};$.styles=[S],A([(0,a.MZ)()],$.prototype,"focused",void 0),A([(0,a.MZ)()],$.prototype,"balance",void 0),A([(0,a.MZ)()],$.prototype,"value",void 0),A([(0,a.MZ)()],$.prototype,"price",void 0),A([(0,a.MZ)()],$.prototype,"marketValue",void 0),A([(0,a.MZ)()],$.prototype,"disabled",void 0),A([(0,a.MZ)()],$.prototype,"target",void 0),A([(0,a.MZ)()],$.prototype,"token",void 0),A([(0,a.MZ)()],$.prototype,"onSetAmount",void 0),A([(0,a.MZ)()],$.prototype,"onSetMaxValue",void 0),$=A([(0,h.EM)("w3m-swap-input")],$);const P=i.AH`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .action-button {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }

  .action-button:disabled {
    border-color: 1px solid var(--wui-color-gray-glass-005);
  }

  .swap-inputs-container {
    position: relative;
  }

  .replace-tokens-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: var(--wui-spacing-1xs);
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-modal-bg-base);
    padding: var(--wui-spacing-xxs);
  }

  .replace-tokens-button-container > button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    padding: var(--wui-spacing-xs);
    border: none;
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: background-color;
    z-index: 20;
  }

  .replace-tokens-button-container > button:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`;var I=function(t,e,o,i){var a,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(n<3?a(r):n>3?a(e,o,r):a(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r};let C=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.initialParams=r.I.state.data?.swap,this.detailsOpen=!1,this.caipAddress=s.U.state.caipAddress,this.caipNetworkId=c.W.state.activeCaipNetwork?.caipNetworkId,this.initialized=l.GN.state.initialized,this.loadingQuote=l.GN.state.loadingQuote,this.loadingPrices=l.GN.state.loadingPrices,this.loadingTransaction=l.GN.state.loadingTransaction,this.sourceToken=l.GN.state.sourceToken,this.sourceTokenAmount=l.GN.state.sourceTokenAmount,this.sourceTokenPriceInUSD=l.GN.state.sourceTokenPriceInUSD,this.toToken=l.GN.state.toToken,this.toTokenAmount=l.GN.state.toTokenAmount,this.toTokenPriceInUSD=l.GN.state.toTokenPriceInUSD,this.inputError=l.GN.state.inputError,this.fetchError=l.GN.state.fetchError,this.onDebouncedGetSwapCalldata=u.w.debounce(async()=>{await l.GN.swapTokens()},200),c.W.subscribeKey("activeCaipNetwork",t=>this.onCaipNetworkChange({newCaipNetwork:t,resetSwapState:!0,initializeSwapState:!1})),s.U.subscribeKey("caipAddress",t=>this.onCaipAddressChange({newCaipAddress:t,resetSwapState:!0,initializeSwapState:!1})),this.unsubscribe.push(c.W.subscribeKey("activeCaipNetwork",t=>this.onCaipNetworkChange({newCaipNetwork:t,resetSwapState:!1,initializeSwapState:!0})),s.U.subscribeKey("caipAddress",t=>this.onCaipAddressChange({newCaipAddress:t,resetSwapState:!1,initializeSwapState:!0})),d.W.subscribeKey("open",t=>{t||l.GN.resetState()}),r.I.subscribeKey("view",t=>{t.includes("Swap")||l.GN.resetValues()}),l.GN.subscribe(t=>{this.initialized=t.initialized,this.loadingQuote=t.loadingQuote,this.loadingPrices=t.loadingPrices,this.loadingTransaction=t.loadingTransaction,this.sourceToken=t.sourceToken,this.sourceTokenAmount=t.sourceTokenAmount,this.sourceTokenPriceInUSD=t.sourceTokenPriceInUSD,this.toToken=t.toToken,this.toTokenAmount=t.toTokenAmount,this.toTokenPriceInUSD=t.toTokenPriceInUSD,this.inputError=t.inputError,this.fetchError=t.fetchError}))}async firstUpdated(){l.GN.initializeState(),this.watchTokensAndValues(),await this.handleSwapParameters()}disconnectedCallback(){this.unsubscribe.forEach(t=>t?.()),clearInterval(this.interval)}render(){return i.qy`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.initialized?this.templateSwap():this.templateLoading()}
      </wui-flex>
    `}watchTokensAndValues(){this.interval=setInterval(()=>{l.GN.getNetworkTokenPrice(),l.GN.getMyTokensWithBalance(),l.GN.swapTokens()},1e4)}templateSwap(){return i.qy`
      <wui-flex flexDirection="column" gap="s">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          ${this.templateTokenInput("sourceToken",this.sourceToken)}
          ${this.templateTokenInput("toToken",this.toToken)} ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateDetails()} ${this.templateActionButton()}
      </wui-flex>
    `}actionButtonLabel(){return this.fetchError?"Swap":this.sourceToken&&this.toToken?this.sourceTokenAmount?this.inputError?this.inputError:"Review swap":"Enter amount":"Select token"}templateReplaceTokensButton(){return i.qy`
      <wui-flex class="replace-tokens-button-container">
        <button @click=${this.onSwitchTokens.bind(this)}>
          <wui-icon name="recycleHorizontal" color="fg-250" size="lg"></wui-icon>
        </button>
      </wui-flex>
    `}templateLoading(){return i.qy`
      <wui-flex flexDirection="column" gap="l">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          <w3m-swap-input-skeleton target="sourceToken"></w3m-swap-input-skeleton>
          <w3m-swap-input-skeleton target="toToken"></w3m-swap-input-skeleton>
          ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateActionButton()}
      </wui-flex>
    `}templateTokenInput(t,e){const o=l.GN.state.myTokensWithBalance?.find(t=>t?.address===e?.address),a="toToken"===t?this.toTokenAmount:this.sourceTokenAmount,r="toToken"===t?this.toTokenPriceInUSD:this.sourceTokenPriceInUSD,s=n.S.parseLocalStringToNumber(a)*r;return i.qy`<w3m-swap-input
      .value=${"toToken"===t?this.toTokenAmount:this.sourceTokenAmount}
      .disabled=${"toToken"===t}
      .onSetAmount=${this.handleChangeAmount.bind(this)}
      target=${t}
      .token=${e}
      .balance=${o?.quantity?.numeric}
      .price=${o?.price}
      .marketValue=${s}
      .onSetMaxValue=${this.onSetMaxValue.bind(this)}
    ></w3m-swap-input>`}onSetMaxValue(t,e){const o=n.S.bigNumber(e||"0");this.handleChangeAmount(t,o.gt(0)?o.toFixed(20):"0")}templateDetails(){return this.sourceToken&&this.toToken&&!this.inputError?i.qy`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`:null}handleChangeAmount(t,e){l.GN.clearError(),"sourceToken"===t?l.GN.setSourceTokenAmount(e):l.GN.setToTokenAmount(e),this.onDebouncedGetSwapCalldata()}templateActionButton(){const t=!this.toToken||!this.sourceToken,e=!this.sourceTokenAmount,o=this.loadingQuote||this.loadingPrices||this.loadingTransaction,a=o||t||e||this.inputError;return i.qy` <wui-flex gap="xs">
      <wui-button
        data-testid="swap-action-button"
        class="action-button"
        fullWidth
        size="lg"
        borderRadius="xs"
        variant=${t?"neutral":"main"}
        .loading=${o}
        .disabled=${a}
        @click=${this.onSwapPreview.bind(this)}
      >
        ${this.actionButtonLabel()}
      </wui-button>
    </wui-flex>`}onSwitchTokens(){l.GN.switchTokens()}async onSwapPreview(){const t=c.W.state.activeChain;this.fetchError&&await l.GN.swapTokens(),p.E.sendEvent({type:"track",event:"INITIATE_SWAP",properties:{network:this.caipNetworkId||"",swapFromToken:this.sourceToken?.symbol||"",swapToToken:this.toToken?.symbol||"",swapFromAmount:this.sourceTokenAmount||"",swapToAmount:this.toTokenAmount||"",isSmartAccount:s.U.state.preferredAccountTypes?.[t]===w.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),r.I.push("SwapPreview")}async handleSwapParameters(){if(this.initialParams){if(!l.GN.state.initialized){const t=new Promise(t=>{const e=l.GN.subscribeKey("initialized",o=>{o&&(e?.(),t())})});await t}await this.setSwapParameters(this.initialParams)}}async setSwapParameters({amount:t,fromToken:e,toToken:o}){if(!l.GN.state.tokens||!l.GN.state.myTokensWithBalance){const t=new Promise(t=>{const e=l.GN.subscribeKey("myTokensWithBalance",o=>{o&&o.length>0&&(e?.(),t())});setTimeout(()=>{e?.(),t()},5e3)});await t}const i=[...l.GN.state.tokens||[],...l.GN.state.myTokensWithBalance||[]];if(e){const t=i.find(t=>t.symbol.toLowerCase()===e.toLowerCase());t&&l.GN.setSourceToken(t)}if(o){const t=i.find(t=>t.symbol.toLowerCase()===o.toLowerCase());t&&l.GN.setToToken(t)}t&&!isNaN(Number(t))&&l.GN.setSourceTokenAmount(t)}onCaipAddressChange({newCaipAddress:t,resetSwapState:e,initializeSwapState:o}){this.caipAddress!==t&&(this.caipAddress=t,e&&l.GN.resetState(),o&&l.GN.initializeState())}onCaipNetworkChange({newCaipNetwork:t,resetSwapState:e,initializeSwapState:o}){this.caipNetworkId!==t?.caipNetworkId&&(this.caipNetworkId=t?.caipNetworkId,e&&l.GN.resetState(),o&&l.GN.initializeState())}};C.styles=P,I([(0,a.MZ)({type:Object})],C.prototype,"initialParams",void 0),I([(0,a.wk)()],C.prototype,"interval",void 0),I([(0,a.wk)()],C.prototype,"detailsOpen",void 0),I([(0,a.wk)()],C.prototype,"caipAddress",void 0),I([(0,a.wk)()],C.prototype,"caipNetworkId",void 0),I([(0,a.wk)()],C.prototype,"initialized",void 0),I([(0,a.wk)()],C.prototype,"loadingQuote",void 0),I([(0,a.wk)()],C.prototype,"loadingPrices",void 0),I([(0,a.wk)()],C.prototype,"loadingTransaction",void 0),I([(0,a.wk)()],C.prototype,"sourceToken",void 0),I([(0,a.wk)()],C.prototype,"sourceTokenAmount",void 0),I([(0,a.wk)()],C.prototype,"sourceTokenPriceInUSD",void 0),I([(0,a.wk)()],C.prototype,"toToken",void 0),I([(0,a.wk)()],C.prototype,"toTokenAmount",void 0),I([(0,a.wk)()],C.prototype,"toTokenPriceInUSD",void 0),I([(0,a.wk)()],C.prototype,"inputError",void 0),I([(0,a.wk)()],C.prototype,"fetchError",void 0),C=I([(0,h.EM)("w3m-swap-view")],C);const N=i.AH`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  .preview-container,
  .details-container {
    width: 100%;
  }

  .token-image {
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: 12px;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .token-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    height: 40px;
    border: none;
    border-radius: 80px;
    background: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    cursor: pointer;
    transition: background 0.2s linear;
  }

  .token-item:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .preview-token-details-container {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }

  .action-buttons-container {
    width: 100%;
    gap: var(--wui-spacing-xs);
  }

  .action-buttons-container > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 48px;
    border-radius: var(--wui-border-radius-xs);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  .action-buttons-container > button:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  .action-button > wui-loading-spinner {
    display: inline-block;
  }

  .cancel-button:hover,
  .action-button:hover {
    cursor: pointer;
  }

  .action-buttons-container > wui-button.cancel-button {
    flex: 2;
  }

  .action-buttons-container > wui-button.action-button {
    flex: 4;
  }

  .action-buttons-container > button.action-button > wui-text {
    color: white;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`;var E=function(t,e,o,i){var a,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(n<3?a(r):n>3?a(e,o,r):a(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r};let z=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.detailsOpen=!0,this.approvalTransaction=l.GN.state.approvalTransaction,this.swapTransaction=l.GN.state.swapTransaction,this.sourceToken=l.GN.state.sourceToken,this.sourceTokenAmount=l.GN.state.sourceTokenAmount??"",this.sourceTokenPriceInUSD=l.GN.state.sourceTokenPriceInUSD,this.toToken=l.GN.state.toToken,this.toTokenAmount=l.GN.state.toTokenAmount??"",this.toTokenPriceInUSD=l.GN.state.toTokenPriceInUSD,this.caipNetwork=c.W.state.activeCaipNetwork,this.balanceSymbol=s.U.state.balanceSymbol,this.inputError=l.GN.state.inputError,this.loadingQuote=l.GN.state.loadingQuote,this.loadingApprovalTransaction=l.GN.state.loadingApprovalTransaction,this.loadingBuildTransaction=l.GN.state.loadingBuildTransaction,this.loadingTransaction=l.GN.state.loadingTransaction,this.unsubscribe.push(s.U.subscribeKey("balanceSymbol",t=>{this.balanceSymbol!==t&&r.I.goBack()}),c.W.subscribeKey("activeCaipNetwork",t=>{this.caipNetwork!==t&&(this.caipNetwork=t)}),l.GN.subscribe(t=>{this.approvalTransaction=t.approvalTransaction,this.swapTransaction=t.swapTransaction,this.sourceToken=t.sourceToken,this.toToken=t.toToken,this.toTokenPriceInUSD=t.toTokenPriceInUSD,this.sourceTokenAmount=t.sourceTokenAmount??"",this.toTokenAmount=t.toTokenAmount??"",this.inputError=t.inputError,t.inputError&&r.I.goBack(),this.loadingQuote=t.loadingQuote,this.loadingApprovalTransaction=t.loadingApprovalTransaction,this.loadingBuildTransaction=t.loadingBuildTransaction,this.loadingTransaction=t.loadingTransaction}))}firstUpdated(){l.GN.getTransaction(),this.refreshTransaction()}disconnectedCallback(){this.unsubscribe.forEach(t=>t?.()),clearInterval(this.interval)}render(){return i.qy`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.templateSwap()}
      </wui-flex>
    `}refreshTransaction(){this.interval=setInterval(()=>{l.GN.getApprovalLoadingState()||l.GN.getTransaction()},1e4)}templateSwap(){const t=`${h.Zv.formatNumberToLocalString(parseFloat(this.sourceTokenAmount))} ${this.sourceToken?.symbol}`,e=`${h.Zv.formatNumberToLocalString(parseFloat(this.toTokenAmount))} ${this.toToken?.symbol}`,o=parseFloat(this.sourceTokenAmount)*this.sourceTokenPriceInUSD,a=parseFloat(this.toTokenAmount)*this.toTokenPriceInUSD,n=h.Zv.formatNumberToLocalString(o),r=h.Zv.formatNumberToLocalString(a),s=this.loadingQuote||this.loadingBuildTransaction||this.loadingTransaction||this.loadingApprovalTransaction;return i.qy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        <wui-flex class="preview-container" flexDirection="column" alignItems="flex-start" gap="l">
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Send</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${n}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${t}
              imageSrc=${this.sourceToken?.logoUri}
            >
            </wui-token-button>
          </wui-flex>
          <wui-icon name="recycleHorizontal" color="fg-200" size="md"></wui-icon>
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Receive</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${r}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${e}
              imageSrc=${this.toToken?.logoUri}
            >
            </wui-token-button>
          </wui-flex>
        </wui-flex>

        ${this.templateDetails()}

        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="xs">
          <wui-icon size="sm" color="fg-200" name="infoCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>

        <wui-flex
          class="action-buttons-container"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="xs"
        >
          <wui-button
            class="cancel-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="neutral"
            @click=${this.onCancelTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="fg-200">Cancel</wui-text>
          </wui-button>
          <wui-button
            class="action-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="main"
            ?loading=${s}
            ?disabled=${s}
            @click=${this.onSendTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="inverse-100">
              ${this.actionButtonLabel()}
            </wui-text>
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}templateDetails(){return this.sourceToken&&this.toToken&&!this.inputError?i.qy`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`:null}actionButtonLabel(){return this.loadingApprovalTransaction?"Approving...":this.approvalTransaction?"Approve":"Swap"}onCancelTransaction(){r.I.goBack()}onSendTransaction(){this.approvalTransaction?l.GN.sendTransactionForApproval(this.approvalTransaction):l.GN.sendTransactionForSwap(this.swapTransaction)}};z.styles=N,E([(0,a.wk)()],z.prototype,"interval",void 0),E([(0,a.wk)()],z.prototype,"detailsOpen",void 0),E([(0,a.wk)()],z.prototype,"approvalTransaction",void 0),E([(0,a.wk)()],z.prototype,"swapTransaction",void 0),E([(0,a.wk)()],z.prototype,"sourceToken",void 0),E([(0,a.wk)()],z.prototype,"sourceTokenAmount",void 0),E([(0,a.wk)()],z.prototype,"sourceTokenPriceInUSD",void 0),E([(0,a.wk)()],z.prototype,"toToken",void 0),E([(0,a.wk)()],z.prototype,"toTokenAmount",void 0),E([(0,a.wk)()],z.prototype,"toTokenPriceInUSD",void 0),E([(0,a.wk)()],z.prototype,"caipNetwork",void 0),E([(0,a.wk)()],z.prototype,"balanceSymbol",void 0),E([(0,a.wk)()],z.prototype,"inputError",void 0),E([(0,a.wk)()],z.prototype,"loadingQuote",void 0),E([(0,a.wk)()],z.prototype,"loadingApprovalTransaction",void 0),E([(0,a.wk)()],z.prototype,"loadingBuildTransaction",void 0),E([(0,a.wk)()],z.prototype,"loadingTransaction",void 0),z=E([(0,h.EM)("w3m-swap-preview-view")],z),o(62907),o(59481),o(31037),o(82207),o(33165);var D=o(56063),M=o(71686),R=o(68664);const B=i.AH`
  :host {
    height: 60px;
    min-height: 60px;
  }

  :host > wui-flex {
    cursor: pointer;
    height: 100%;
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-l);
    width: 100%;
    background-color: transparent;
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-lg),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color, opacity;
  }

  @media (hover: hover) and (pointer: fine) {
    :host > wui-flex:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    :host > wui-flex:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  :host([disabled]) > wui-flex {
    opacity: 0.6;
  }

  :host([disabled]) > wui-flex:hover {
    background-color: transparent;
  }

  :host > wui-flex > wui-flex {
    flex: 1;
  }

  :host > wui-flex > wui-image,
  :host > wui-flex > .token-item-image-placeholder {
    width: 40px;
    max-width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    position: relative;
  }

  :host > wui-flex > .token-item-image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host > wui-flex > wui-image::after,
  :host > wui-flex > .token-item-image-placeholder::after {
    position: absolute;
    content: '';
    inset: 0;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-l);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }
`;var G=function(t,e,o,i){var a,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(n<3?a(r):n>3?a(e,o,r):a(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r};let U=class extends i.WF{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.imageSrc=void 0,this.name=void 0,this.symbol=void 0,this.price=void 0,this.amount=void 0,this.visible=!1,this.imageError=!1,this.observer=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting?this.visible=!0:this.visible=!1})},{threshold:.1})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){if(!this.visible)return null;const t=this.amount&&this.price?n.S.multiply(this.price,this.amount)?.toFixed(3):null;return i.qy`
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="3xs">
          <wui-flex justifyContent="space-between">
            <wui-text variant="paragraph-500" color="fg-100" lineClamp="1">${this.name}</wui-text>
            ${t?i.qy`
                  <wui-text variant="paragraph-500" color="fg-100">
                    $${M.Z.formatNumberToLocalString(t,3)}
                  </wui-text>
                `:null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="small-400" color="fg-200" lineClamp="1">${this.symbol}</wui-text>
            ${this.amount?i.qy`<wui-text variant="small-400" color="fg-200">
                  ${M.Z.formatNumberToLocalString(this.amount,4)}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}visualTemplate(){return this.imageError?i.qy`<wui-flex class="token-item-image-placeholder">
        <wui-icon name="image" color="inherit"></wui-icon>
      </wui-flex>`:this.imageSrc?i.qy`<wui-image
        width="40"
        height="40"
        src=${this.imageSrc}
        @onLoadError=${this.imageLoadError}
      ></wui-image>`:null}imageLoadError(){this.imageError=!0}};U.styles=[D.W5,D.fD,B],G([(0,a.MZ)()],U.prototype,"imageSrc",void 0),G([(0,a.MZ)()],U.prototype,"name",void 0),G([(0,a.MZ)()],U.prototype,"symbol",void 0),G([(0,a.MZ)()],U.prototype,"price",void 0),G([(0,a.MZ)()],U.prototype,"amount",void 0),G([(0,a.wk)()],U.prototype,"visible",void 0),G([(0,a.wk)()],U.prototype,"imageError",void 0),U=G([(0,R.E)("wui-token-list-item")],U);const O=i.AH`
  :host {
    --tokens-scroll--top-opacity: 0;
    --tokens-scroll--bottom-opacity: 1;
    --suggested-tokens-scroll--left-opacity: 0;
    --suggested-tokens-scroll--right-opacity: 1;
  }

  :host > wui-flex:first-child {
    overflow-y: hidden;
    overflow-x: hidden;
    scrollbar-width: none;
    scrollbar-height: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .suggested-tokens-container {
    overflow-x: auto;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--suggested-tokens-scroll--right-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--right-opacity))) 100%
    );
  }

  .suggested-tokens-container::-webkit-scrollbar {
    display: none;
  }

  .tokens-container {
    border-top: 1px solid var(--wui-color-gray-glass-005);
    height: 100%;
    max-height: 390px;
  }

  .tokens {
    width: 100%;
    overflow-y: auto;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--tokens-scroll--top-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--tokens-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--bottom-opacity))) 100%
    );
  }

  .network-search-input,
  .select-network-button {
    height: 40px;
  }

  .select-network-button {
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: transparent;
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-xs);
    align-items: center;
    transition: background-color 0.2s linear;
  }

  .select-network-button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .select-network-button > wui-image {
    width: 26px;
    height: 26px;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`;var W=function(t,e,o,i){var a,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(n<3?a(r):n>3?a(e,o,r):a(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r};let j=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.targetToken=r.I.state.data?.target,this.sourceToken=l.GN.state.sourceToken,this.sourceTokenAmount=l.GN.state.sourceTokenAmount,this.toToken=l.GN.state.toToken,this.myTokensWithBalance=l.GN.state.myTokensWithBalance,this.popularTokens=l.GN.state.popularTokens,this.searchValue="",this.unsubscribe.push(l.GN.subscribe(t=>{this.sourceToken=t.sourceToken,this.toToken=t.toToken,this.myTokensWithBalance=t.myTokensWithBalance}))}updated(){const t=this.renderRoot?.querySelector(".suggested-tokens-container");t?.addEventListener("scroll",this.handleSuggestedTokensScroll.bind(this));const e=this.renderRoot?.querySelector(".tokens");e?.addEventListener("scroll",this.handleTokenListScroll.bind(this))}disconnectedCallback(){super.disconnectedCallback();const t=this.renderRoot?.querySelector(".suggested-tokens-container"),e=this.renderRoot?.querySelector(".tokens");t?.removeEventListener("scroll",this.handleSuggestedTokensScroll.bind(this)),e?.removeEventListener("scroll",this.handleTokenListScroll.bind(this)),clearInterval(this.interval)}render(){return i.qy`
      <wui-flex flexDirection="column" gap="s">
        ${this.templateSearchInput()} ${this.templateSuggestedTokens()} ${this.templateTokens()}
      </wui-flex>
    `}onSelectToken(t){"sourceToken"===this.targetToken?l.GN.setSourceToken(t):(l.GN.setToToken(t),this.sourceToken&&this.sourceTokenAmount&&l.GN.swapTokens()),r.I.goBack()}templateSearchInput(){return i.qy`
      <wui-flex .padding=${["3xs","s","0","s"]} gap="xs">
        <wui-input-text
          data-testid="swap-select-token-search-input"
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
          .value=${this.searchValue}
          @inputChange=${this.onSearchInputChange.bind(this)}
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){const t=this.myTokensWithBalance?Object.values(this.myTokensWithBalance):[],e=this.popularTokens?this.popularTokens:[],o=this.filterTokensWithText(t,this.searchValue),a=this.filterTokensWithText(e,this.searchValue);return i.qy`
      <wui-flex class="tokens-container">
        <wui-flex class="tokens" .padding=${["0","s","s","s"]} flexDirection="column">
          ${o?.length>0?i.qy`
                <wui-flex justifyContent="flex-start" padding="s">
                  <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
                </wui-flex>
                ${o.map(t=>{const e=t.symbol===this.sourceToken?.symbol||t.symbol===this.toToken?.symbol;return i.qy`
                    <wui-token-list-item
                      data-testid="swap-select-token-item-${t.symbol}"
                      name=${t.name}
                      ?disabled=${e}
                      symbol=${t.symbol}
                      price=${t?.price}
                      amount=${t?.quantity?.numeric}
                      imageSrc=${t.logoUri}
                      @click=${()=>{e||this.onSelectToken(t)}}
                    >
                    </wui-token-list-item>
                  `})}
              `:null}

          <wui-flex justifyContent="flex-start" padding="s">
            <wui-text variant="paragraph-500" color="fg-200">Tokens</wui-text>
          </wui-flex>
          ${a?.length>0?a.map(t=>i.qy`
                  <wui-token-list-item
                    data-testid="swap-select-token-item-${t.symbol}"
                    name=${t.name}
                    symbol=${t.symbol}
                    imageSrc=${t.logoUri}
                    @click=${()=>this.onSelectToken(t)}
                  >
                  </wui-token-list-item>
                `):null}
        </wui-flex>
      </wui-flex>
    `}templateSuggestedTokens(){const t=l.GN.state.suggestedTokens?l.GN.state.suggestedTokens.slice(0,8):null;return t?i.qy`
      <wui-flex class="suggested-tokens-container" .padding=${["0","s","0","s"]} gap="xs">
        ${t.map(t=>i.qy`
            <wui-token-button
              text=${t.symbol}
              imageSrc=${t.logoUri}
              @click=${()=>this.onSelectToken(t)}
            >
            </wui-token-button>
          `)}
      </wui-flex>
    `:null}onSearchInputChange(t){this.searchValue=t.detail}handleSuggestedTokensScroll(){const t=this.renderRoot?.querySelector(".suggested-tokens-container");t&&(t.style.setProperty("--suggested-tokens-scroll--left-opacity",h.z8.interpolate([0,100],[0,1],t.scrollLeft).toString()),t.style.setProperty("--suggested-tokens-scroll--right-opacity",h.z8.interpolate([0,100],[0,1],t.scrollWidth-t.scrollLeft-t.offsetWidth).toString()))}handleTokenListScroll(){const t=this.renderRoot?.querySelector(".tokens");t&&(t.style.setProperty("--tokens-scroll--top-opacity",h.z8.interpolate([0,100],[0,1],t.scrollTop).toString()),t.style.setProperty("--tokens-scroll--bottom-opacity",h.z8.interpolate([0,100],[0,1],t.scrollHeight-t.scrollTop-t.offsetHeight).toString()))}filterTokensWithText(t,e){return t.filter(t=>`${t.symbol} ${t.name} ${t.address}`.toLowerCase().includes(e.toLowerCase()))}};j.styles=O,W([(0,a.wk)()],j.prototype,"interval",void 0),W([(0,a.wk)()],j.prototype,"targetToken",void 0),W([(0,a.wk)()],j.prototype,"sourceToken",void 0),W([(0,a.wk)()],j.prototype,"sourceTokenAmount",void 0),W([(0,a.wk)()],j.prototype,"toToken",void 0),W([(0,a.wk)()],j.prototype,"myTokensWithBalance",void 0),W([(0,a.wk)()],j.prototype,"popularTokens",void 0),W([(0,a.wk)()],j.prototype,"searchValue",void 0),j=W([(0,h.EM)("w3m-swap-select-token-view")],j)},50409:(t,e,o)=>{var i=o(48422),a=o(91427),n=(o(59481),o(56063)),r=o(68664);const s=i.AH`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var c=function(t,e,o,i){var a,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(n<3?a(r):n>3?a(e,o,r):a(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r};let l=class extends i.WF{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const t=this.iconSize||this.size,e="lg"===this.size,o="xl"===this.size,a=e?"12%":"16%",n=e?"xxs":o?"s":"3xl",r="gray"===this.background,s="opaque"===this.background,c="accent-100"===this.backgroundColor&&s||"success-100"===this.backgroundColor&&s||"error-100"===this.backgroundColor&&s||"inverse-100"===this.backgroundColor&&s;let l=`var(--wui-color-${this.backgroundColor})`;return c?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:r&&(l=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${l};\n       --local-bg-mix: ${c||r?"100%":a};\n       --local-border-radius: var(--wui-border-radius-${n});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,i.qy` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};l.styles=[n.W5,n.fD,s],c([(0,a.MZ)()],l.prototype,"size",void 0),c([(0,a.MZ)()],l.prototype,"backgroundColor",void 0),c([(0,a.MZ)()],l.prototype,"iconColor",void 0),c([(0,a.MZ)()],l.prototype,"iconSize",void 0),c([(0,a.MZ)()],l.prototype,"background",void 0),c([(0,a.MZ)({type:Boolean})],l.prototype,"border",void 0),c([(0,a.MZ)()],l.prototype,"borderColor",void 0),c([(0,a.MZ)()],l.prototype,"icon",void 0),l=c([(0,r.E)("wui-icon-box")],l)},59481:(t,e,o)=>{var i=o(48422),a=o(91427),n=o(32971);const r=new class{constructor(){this.cache=new Map}set(t,e){this.cache.set(t,e)}get(t){return this.cache.get(t)}has(t){return this.cache.has(t)}delete(t){this.cache.delete(t)}clear(){this.cache.clear()}};var s=o(56063),c=o(68664);const l=i.AH`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;var u=function(t,e,o,i){var a,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(n<3?a(r):n>3?a(e,o,r):a(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r};const d={add:async()=>(await o.e(8186).then(o.bind(o,88186))).addSvg,allWallets:async()=>(await o.e(9569).then(o.bind(o,39569))).allWalletsSvg,arrowBottomCircle:async()=>(await o.e(5995).then(o.bind(o,25995))).arrowBottomCircleSvg,appStore:async()=>(await o.e(3774).then(o.bind(o,3774))).appStoreSvg,apple:async()=>(await o.e(5929).then(o.bind(o,15929))).appleSvg,arrowBottom:async()=>(await o.e(1198).then(o.bind(o,11198))).arrowBottomSvg,arrowLeft:async()=>(await o.e(9760).then(o.bind(o,29760))).arrowLeftSvg,arrowRight:async()=>(await o.e(4659).then(o.bind(o,94659))).arrowRightSvg,arrowTop:async()=>(await o.e(3690).then(o.bind(o,43690))).arrowTopSvg,bank:async()=>(await o.e(627).then(o.bind(o,80627))).bankSvg,browser:async()=>(await o.e(6913).then(o.bind(o,16913))).browserSvg,card:async()=>(await o.e(1327).then(o.bind(o,1327))).cardSvg,checkmark:async()=>(await o.e(1480).then(o.bind(o,31480))).checkmarkSvg,checkmarkBold:async()=>(await o.e(486).then(o.bind(o,70486))).checkmarkBoldSvg,chevronBottom:async()=>(await o.e(3928).then(o.bind(o,33928))).chevronBottomSvg,chevronLeft:async()=>(await o.e(3682).then(o.bind(o,23682))).chevronLeftSvg,chevronRight:async()=>(await o.e(7701).then(o.bind(o,17701))).chevronRightSvg,chevronTop:async()=>(await o.e(2592).then(o.bind(o,62592))).chevronTopSvg,chromeStore:async()=>(await o.e(1903).then(o.bind(o,1903))).chromeStoreSvg,clock:async()=>(await o.e(6027).then(o.bind(o,76027))).clockSvg,close:async()=>(await o.e(7545).then(o.bind(o,17545))).closeSvg,compass:async()=>(await o.e(2097).then(o.bind(o,2097))).compassSvg,coinPlaceholder:async()=>(await o.e(9919).then(o.bind(o,79919))).coinPlaceholderSvg,copy:async()=>(await o.e(340).then(o.bind(o,90340))).copySvg,cursor:async()=>(await o.e(9119).then(o.bind(o,29119))).cursorSvg,cursorTransparent:async()=>(await o.e(1944).then(o.bind(o,1944))).cursorTransparentSvg,desktop:async()=>(await o.e(3277).then(o.bind(o,73277))).desktopSvg,disconnect:async()=>(await o.e(2923).then(o.bind(o,2923))).disconnectSvg,discord:async()=>(await o.e(6977).then(o.bind(o,6977))).discordSvg,etherscan:async()=>(await o.e(3092).then(o.bind(o,73092))).etherscanSvg,extension:async()=>(await o.e(5712).then(o.bind(o,55712))).extensionSvg,externalLink:async()=>(await o.e(7563).then(o.bind(o,57563))).externalLinkSvg,facebook:async()=>(await o.e(8865).then(o.bind(o,98865))).facebookSvg,farcaster:async()=>(await o.e(4132).then(o.bind(o,74132))).farcasterSvg,filters:async()=>(await o.e(9222).then(o.bind(o,69222))).filtersSvg,github:async()=>(await o.e(9178).then(o.bind(o,89178))).githubSvg,google:async()=>(await o.e(3106).then(o.bind(o,13106))).googleSvg,helpCircle:async()=>(await o.e(4691).then(o.bind(o,34691))).helpCircleSvg,image:async()=>(await o.e(9652).then(o.bind(o,99652))).imageSvg,id:async()=>(await o.e(1636).then(o.bind(o,11636))).idSvg,infoCircle:async()=>(await o.e(298).then(o.bind(o,60298))).infoCircleSvg,lightbulb:async()=>(await o.e(54).then(o.bind(o,20054))).lightbulbSvg,mail:async()=>(await o.e(9930).then(o.bind(o,39930))).mailSvg,mobile:async()=>(await o.e(2475).then(o.bind(o,12475))).mobileSvg,more:async()=>(await o.e(6856).then(o.bind(o,36856))).moreSvg,networkPlaceholder:async()=>(await o.e(3387).then(o.bind(o,73387))).networkPlaceholderSvg,nftPlaceholder:async()=>(await o.e(3472).then(o.bind(o,53472))).nftPlaceholderSvg,off:async()=>(await o.e(4668).then(o.bind(o,54668))).offSvg,playStore:async()=>(await o.e(7755).then(o.bind(o,7755))).playStoreSvg,plus:async()=>(await o.e(2945).then(o.bind(o,22945))).plusSvg,qrCode:async()=>(await o.e(4034).then(o.bind(o,44034))).qrCodeIcon,recycleHorizontal:async()=>(await o.e(5045).then(o.bind(o,85045))).recycleHorizontalSvg,refresh:async()=>(await o.e(4290).then(o.bind(o,44290))).refreshSvg,search:async()=>(await o.e(3333).then(o.bind(o,73333))).searchSvg,send:async()=>(await o.e(8535).then(o.bind(o,18535))).sendSvg,swapHorizontal:async()=>(await o.e(9586).then(o.bind(o,49586))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await o.e(7773).then(o.bind(o,17773))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await o.e(9325).then(o.bind(o,9325))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await o.e(7562).then(o.bind(o,47562))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await o.e(2168).then(o.bind(o,82168))).swapVerticalSvg,telegram:async()=>(await o.e(8166).then(o.bind(o,88166))).telegramSvg,threeDots:async()=>(await o.e(1874).then(o.bind(o,51874))).threeDotsSvg,twitch:async()=>(await o.e(7218).then(o.bind(o,17218))).twitchSvg,twitter:async()=>(await o.e(3489).then(o.bind(o,93489))).xSvg,twitterIcon:async()=>(await o.e(9023).then(o.bind(o,69023))).twitterIconSvg,verify:async()=>(await o.e(2120).then(o.bind(o,52120))).verifySvg,verifyFilled:async()=>(await o.e(5337).then(o.bind(o,45337))).verifyFilledSvg,wallet:async()=>(await o.e(440).then(o.bind(o,60440))).walletSvg,walletConnect:async()=>(await o.e(3300).then(o.bind(o,33300))).walletConnectSvg,walletConnectLightBrown:async()=>(await o.e(3300).then(o.bind(o,33300))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await o.e(3300).then(o.bind(o,33300))).walletConnectBrownSvg,walletPlaceholder:async()=>(await o.e(5556).then(o.bind(o,25556))).walletPlaceholderSvg,warningCircle:async()=>(await o.e(7910).then(o.bind(o,87910))).warningCircleSvg,x:async()=>(await o.e(3489).then(o.bind(o,93489))).xSvg,info:async()=>(await o.e(917).then(o.bind(o,10917))).infoSvg,exclamationTriangle:async()=>(await o.e(2557).then(o.bind(o,32557))).exclamationTriangleSvg,reown:async()=>(await o.e(1864).then(o.bind(o,41864))).reownSvg};let p=class extends i.WF{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n      --local-aspect-ratio: ${this.aspectRatio}\n    `,i.qy`${(0,n.T)(async function(t){if(r.has(t))return r.get(t);const e=(d[t]??d.copy)();return r.set(t,e),e}(this.name),i.qy`<div class="fallback"></div>`)}`}};p.styles=[s.W5,s.ck,l],u([(0,a.MZ)()],p.prototype,"size",void 0),u([(0,a.MZ)()],p.prototype,"name",void 0),u([(0,a.MZ)()],p.prototype,"color",void 0),u([(0,a.MZ)()],p.prototype,"aspectRatio",void 0),p=u([(0,c.E)("wui-icon")],p)},59936:(t,e,o)=>{var i=o(48422),a=o(91427),n=(o(31037),o(82207),o(56063)),r=o(68664);o(50409);const s=i.AH`
  :host {
    display: block;
  }

  :host > button {
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-1xs);
    height: 40px;
    border-radius: var(--wui-border-radius-l);
    background: var(--wui-color-gray-glass-002);
    border-width: 0px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
  }

  :host > button wui-image {
    width: 24px;
    height: 24px;
    border-radius: var(--wui-border-radius-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`;var c=function(t,e,o,i){var a,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(n<3?a(r):n>3?a(e,o,r):a(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r};let l=class extends i.WF{constructor(){super(...arguments),this.text=""}render(){return i.qy`
      <button>
        ${this.tokenTemplate()}
        <wui-text variant="paragraph-600" color="fg-100">${this.text}</wui-text>
      </button>
    `}tokenTemplate(){return this.imageSrc?i.qy`<wui-image src=${this.imageSrc}></wui-image>`:i.qy`
      <wui-icon-box
        size="sm"
        iconColor="fg-200"
        backgroundColor="fg-300"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};l.styles=[n.W5,n.fD,s],c([(0,a.MZ)()],l.prototype,"imageSrc",void 0),c([(0,a.MZ)()],l.prototype,"text",void 0),l=c([(0,r.E)("wui-token-button")],l)},62907:(t,e,o)=>{o(30990)},63718:(t,e,o)=>{var i=o(48422),a=o(91427),n=(o(20766),o(82207),o(56063)),r=o(68664);const s=i.AH`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var c=function(t,e,o,i){var a,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(n<3?a(r):n>3?a(e,o,r):a(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r};const l={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},u={lg:"paragraph-600",md:"small-600"},d={lg:"md",md:"md"};let p=class extends i.WF{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`\n    --local-width: ${this.fullWidth?"100%":"auto"};\n    --local-opacity-100: ${this.loading?0:1};\n    --local-opacity-000: ${this.loading?1:0};\n    --local-border-radius: var(--wui-border-radius-${this.borderRadius});\n    `;const t=this.textVariant??u[this.size];return i.qy`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const t=d[this.size],e=this.disabled?l.disabled:l[this.variant];return i.qy`<wui-loading-spinner color=${e} size=${t}></wui-loading-spinner>`}return i.qy``}};p.styles=[n.W5,n.fD,s],c([(0,a.MZ)()],p.prototype,"size",void 0),c([(0,a.MZ)({type:Boolean})],p.prototype,"disabled",void 0),c([(0,a.MZ)({type:Boolean})],p.prototype,"fullWidth",void 0),c([(0,a.MZ)({type:Boolean})],p.prototype,"loading",void 0),c([(0,a.MZ)()],p.prototype,"variant",void 0),c([(0,a.MZ)({type:Boolean})],p.prototype,"hasIconLeft",void 0),c([(0,a.MZ)({type:Boolean})],p.prototype,"hasIconRight",void 0),c([(0,a.MZ)()],p.prototype,"borderRadius",void 0),c([(0,a.MZ)()],p.prototype,"textVariant",void 0),p=c([(0,r.E)("wui-button")],p)},64720:(t,e,o)=>{o.d(e,{Kq:()=>d});var i=o(27165),a=o(39341);const n=(t,e)=>{const o=t._$AN;if(void 0===o)return!1;for(const t of o)t._$AO?.(e,!1),n(t,e);return!0},r=t=>{let e,o;do{if(void 0===(e=t._$AM))break;o=e._$AN,o.delete(t),t=e}while(0===o?.size)},s=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(void 0===o)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),u(e)}};function c(t){void 0!==this._$AN?(r(this),this._$AM=t,s(this)):this._$AM=t}function l(t,e=!1,o=0){const i=this._$AH,a=this._$AN;if(void 0!==a&&0!==a.size)if(e)if(Array.isArray(i))for(let t=o;t<i.length;t++)n(i[t],!1),r(i[t]);else null!=i&&(n(i,!1),r(i));else n(this,t)}const u=t=>{t.type==a.OA.CHILD&&(t._$AP??=l,t._$AQ??=c)};class d extends a.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,o){super._$AT(t,e,o),s(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(n(this,t),r(this))}setValue(t){if((0,i.Rt)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}},69623:(t,e,o)=>{o.d(e,{M:()=>r});var i=o(56451);const a={attribute:!0,type:String,converter:i.W3,reflect:!1,hasChanged:i.Ec},n=(t=a,e,o)=>{const{kind:i,metadata:n}=o;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),r.set(o.name,t),"accessor"===i){const{name:i}=o;return{set(o){const a=e.get.call(this);e.set.call(this,o),this.requestUpdate(i,a,t)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=o;return function(o){const a=this[i];e.call(this,o),this.requestUpdate(i,a,t)}}throw Error("Unsupported decorator location: "+i)};function r(t){return(e,o)=>"object"==typeof o?n(t,e,o):((t,e,o)=>{const i=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),i?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}},73540:(t,e,o)=>{o.d(e,{GN:()=>P});var i=o(44822),a=o(36517),n=o(2973),r=o(76539),s=o(98096),c=o(13947),l=o(92999),u=o(4539),d=o(90101),p=o(19220),h=o(52819),w=o(90336);const g={async getTokenList(){const t=h.W.state.activeCaipNetwork,e=await p.T.fetchSwapTokens({chainId:t?.caipNetworkId});return e?.tokens?.map(t=>({...t,eip2612:!1,quantity:{decimals:"0",numeric:"0"},price:0,value:0}))||[]},async fetchGasPrice(){const t=h.W.state.activeCaipNetwork;if(!t)return null;try{if("solana"===t.chainNamespace){const t=(await(w.x?.estimateGas({chainNamespace:"solana"})))?.toString();return{standard:t,fast:t,instant:t}}return await p.T.fetchGasPrice({chainId:t.caipNetworkId})}catch{return null}},async fetchSwapAllowance({tokenAddress:t,userAddress:e,sourceTokenAmount:o,sourceTokenDecimals:i}){const a=await p.T.fetchSwapAllowance({tokenAddress:t,userAddress:e});if(a?.allowance&&o&&i){const t=w.x.parseUnits(o,i)||0;return BigInt(a.allowance)>=t}return!1},async getMyTokensWithBalance(t){const e=d.U.state.address,o=h.W.state.activeCaipNetwork;if(!e||!o)return[];const i=(await p.T.getBalance(e,o.caipNetworkId,t)).balances.filter(t=>"0"!==t.quantity.decimals);return d.U.setTokenBalance(i,h.W.state.activeChain),this.mapBalancesToSwapTokens(i)},mapBalancesToSwapTokens:t=>t?.map(t=>({...t,address:t?.address?t.address:h.W.getActiveNetworkTokenAddress(),decimals:parseInt(t.quantity.decimals,10),logoUri:t.iconUrl,eip2612:!1}))||[]},v={getGasPriceInEther:(t,e)=>Number(e*t)/1e18,getGasPriceInUSD(t,e,o){const i=v.getGasPriceInEther(e,o);return n.S.bigNumber(t).times(i).toNumber()},getPriceImpact({sourceTokenAmount:t,sourceTokenPriceInUSD:e,toTokenPriceInUSD:o,toTokenAmount:i}){const a=n.S.bigNumber(t).times(e),r=n.S.bigNumber(i).times(o);return a.minus(r).div(a).times(100).toNumber()},getMaxSlippage(t,e){const o=n.S.bigNumber(t).div(100);return n.S.multiply(e,o).toNumber()},getProviderFee:(t,e=.0085)=>n.S.bigNumber(t).times(e).toString(),isInsufficientNetworkTokenForGas(t,e){const o=e||"0";return!!n.S.bigNumber(t).eq(0)||n.S.bigNumber(n.S.bigNumber(o)).gt(t)},isInsufficientSourceTokenForSwap(t,e,o){const i=o?.find(t=>t.address===e)?.quantity?.numeric;return n.S.bigNumber(i||"0").lt(t)},getToTokenAmount({sourceToken:t,toToken:e,sourceTokenPrice:o,toTokenPrice:i,sourceTokenAmount:a}){if("0"===a)return"0";if(!t||!e)return"0";const r=t.decimals,s=o,c=e.decimals,l=i;if(l<=0)return"0";const u=n.S.bigNumber(a).times(.0085),d=n.S.bigNumber(a).minus(u).times(n.S.bigNumber(10).pow(r)),p=n.S.bigNumber(s).div(l),h=r-c;return d.times(p).div(n.S.bigNumber(10).pow(h)).div(n.S.bigNumber(10).pow(c)).toFixed(c).toString()}};var b=o(28621),f=o(44340),m=o(30413),k=o(34325),y=o(33461),x=o(7380);const T=15e4;Error;const S={initializing:!1,initialized:!1,loadingPrices:!1,loadingQuote:!1,loadingApprovalTransaction:!1,loadingBuildTransaction:!1,loadingTransaction:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:c.oU.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:"0",gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0},A=(0,i.BX)(S),$={state:A,subscribe:t=>(0,i.B1)(A,()=>t(A)),subscribeKey:(t,e)=>(0,a.u$)(A,t,e),getParams(){const t=h.W.state.activeCaipAddress,e=h.W.state.activeChain,o=l.w.getPlainAddress(t),i=h.W.getActiveNetworkTokenAddress(),a=m.a.getConnectorId(e);if(!o)throw new Error("No address found to swap the tokens from.");const s=!A.toToken?.address||!A.toToken?.decimals,c=!A.sourceToken?.address||!A.sourceToken?.decimals||!n.S.bigNumber(A.sourceTokenAmount).gt(0),u=!A.sourceTokenAmount;return{networkAddress:i,fromAddress:o,fromCaipAddress:t,sourceTokenAddress:A.sourceToken?.address,toTokenAddress:A.toToken?.address,toTokenAmount:A.toTokenAmount,toTokenDecimals:A.toToken?.decimals,sourceTokenAmount:A.sourceTokenAmount,sourceTokenDecimals:A.sourceToken?.decimals,invalidToToken:s,invalidSourceToken:c,invalidSourceTokenAmount:u,availableToSwap:t&&!s&&!c&&!u,isAuthConnector:a===r.o.CONNECTOR_ID.AUTH}},setSourceToken(t){if(!t)return A.sourceToken=t,A.sourceTokenAmount="",void(A.sourceTokenPriceInUSD=0);A.sourceToken=t,P.setTokenPrice(t.address,"sourceToken")},setSourceTokenAmount(t){A.sourceTokenAmount=t},setToToken(t){if(!t)return A.toToken=t,A.toTokenAmount="",void(A.toTokenPriceInUSD=0);A.toToken=t,P.setTokenPrice(t.address,"toToken")},setToTokenAmount(t){A.toTokenAmount=t?n.S.formatNumberToLocalString(t,6):""},async setTokenPrice(t,e){let o=A.tokensPriceMap[t]||0;o||(A.loadingPrices=!0,o=await P.getAddressPrice(t)),"sourceToken"===e?A.sourceTokenPriceInUSD=o:"toToken"===e&&(A.toTokenPriceInUSD=o),A.loadingPrices&&(A.loadingPrices=!1),P.getParams().availableToSwap&&P.swapTokens()},switchTokens(){if(A.initializing||!A.initialized)return;const t=A.toToken?{...A.toToken}:void 0,e=A.sourceToken?{...A.sourceToken}:void 0,o=t&&""===A.toTokenAmount?"1":A.toTokenAmount;P.setSourceToken(t),P.setToToken(e),P.setSourceTokenAmount(o),P.setToTokenAmount(""),P.swapTokens()},resetState(){A.myTokensWithBalance=S.myTokensWithBalance,A.tokensPriceMap=S.tokensPriceMap,A.initialized=S.initialized,A.sourceToken=S.sourceToken,A.sourceTokenAmount=S.sourceTokenAmount,A.sourceTokenPriceInUSD=S.sourceTokenPriceInUSD,A.toToken=S.toToken,A.toTokenAmount=S.toTokenAmount,A.toTokenPriceInUSD=S.toTokenPriceInUSD,A.networkPrice=S.networkPrice,A.networkTokenSymbol=S.networkTokenSymbol,A.networkBalanceInUSD=S.networkBalanceInUSD,A.inputError=S.inputError,A.myTokensWithBalance=S.myTokensWithBalance},resetValues(){const{networkAddress:t}=P.getParams(),e=A.tokens?.find(e=>e.address===t);P.setSourceToken(e),P.setToToken(void 0)},getApprovalLoadingState:()=>A.loadingApprovalTransaction,clearError(){A.transactionError=void 0},async initializeState(){if(!A.initializing){if(A.initializing=!0,!A.initialized)try{await P.fetchTokens(),A.initialized=!0}catch(t){A.initialized=!1,x.P.showError("Failed to initialize swap"),y.I.goBack()}A.initializing=!1}},async fetchTokens(){const{networkAddress:t}=P.getParams();await P.getTokenList(),await P.getNetworkTokenPrice(),await P.getMyTokensWithBalance();const e=A.tokens?.find(e=>e.address===t);e&&(A.networkTokenSymbol=e.symbol,P.setSourceToken(e),P.setSourceTokenAmount("1"))},async getTokenList(){const t=await g.getTokenList();A.tokens=t,A.popularTokens=t.sort((t,e)=>t.symbol<e.symbol?-1:t.symbol>e.symbol?1:0),A.suggestedTokens=t.filter(t=>!!c.oU.SWAP_SUGGESTED_TOKENS.includes(t.symbol),{})},async getAddressPrice(t){const e=A.tokensPriceMap[t];if(e)return e;const o=await p.T.fetchTokenPrice({addresses:[t]}),i=o?.fungibles||[],a=[...A.tokens||[],...A.myTokensWithBalance||[]],n=a?.find(e=>e.address===t)?.symbol,r=i.find(t=>t.symbol.toLowerCase()===n?.toLowerCase())?.price||0,s=parseFloat(r.toString());return A.tokensPriceMap[t]=s,s},async getNetworkTokenPrice(){const{networkAddress:t}=P.getParams(),e=await p.T.fetchTokenPrice({addresses:[t]}).catch(()=>(x.P.showError("Failed to fetch network token price"),{fungibles:[]})),o=e.fungibles?.[0],i=o?.price.toString()||"0";A.tokensPriceMap[t]=parseFloat(i),A.networkTokenSymbol=o?.symbol||"",A.networkPrice=i},async getMyTokensWithBalance(t){const e=await u.t.getMyTokensWithBalance(t),o=u.t.mapBalancesToSwapTokens(e);o&&(await P.getInitialGasPrice(),P.setBalances(o))},setBalances(t){const{networkAddress:e}=P.getParams(),o=h.W.state.activeCaipNetwork;if(!o)return;const i=t.find(t=>t.address===e);t.forEach(t=>{A.tokensPriceMap[t.address]=t.price||0}),A.myTokensWithBalance=t.filter(t=>t.address.startsWith(o.caipNetworkId)),A.networkBalanceInUSD=i?n.S.multiply(i.quantity.numeric,i.price).toString():"0"},async getInitialGasPrice(){const t=await g.fetchGasPrice();if(!t)return{gasPrice:null,gasPriceInUSD:null};if("solana"===h.W.state?.activeCaipNetwork?.chainNamespace)return A.gasFee=t.standard??"0",A.gasPriceInUSD=n.S.multiply(t.standard,A.networkPrice).div(1e9).toNumber(),{gasPrice:BigInt(A.gasFee),gasPriceInUSD:Number(A.gasPriceInUSD)};{const e=t.standard??"0",o=BigInt(e),i=BigInt(T),a=v.getGasPriceInUSD(A.networkPrice,i,o);return A.gasFee=e,A.gasPriceInUSD=a,{gasPrice:o,gasPriceInUSD:a}}},async swapTokens(){const t=d.U.state.address,e=A.sourceToken,o=A.toToken,i=n.S.bigNumber(A.sourceTokenAmount).gt(0);if(i||P.setToTokenAmount(""),!o||!e||A.loadingPrices||!i)return;A.loadingQuote=!0;const a=n.S.bigNumber(A.sourceTokenAmount).times(10**e.decimals).round(0);try{const i=await p.T.fetchSwapQuote({userAddress:t,from:e.address,to:o.address,gasPrice:A.gasFee,amount:a.toString()});A.loadingQuote=!1;const r=i?.quotes?.[0]?.toAmount;if(!r)return void f.h.open({shortMessage:"Incorrect amount",longMessage:"Please enter a valid amount"},"error");const s=n.S.bigNumber(r).div(10**o.decimals).toString();P.setToTokenAmount(s),P.hasInsufficientToken(A.sourceTokenAmount,e.address)?A.inputError="Insufficient balance":(A.inputError=void 0,P.setTransactionDetails())}catch(t){A.loadingQuote=!1,A.inputError="Insufficient balance"}},async getTransaction(){const{fromCaipAddress:t,availableToSwap:e}=P.getParams(),o=A.sourceToken,i=A.toToken;if(t&&e&&o&&i&&!A.loadingQuote)try{let e;return A.loadingBuildTransaction=!0,e=await g.fetchSwapAllowance({userAddress:t,tokenAddress:o.address,sourceTokenAmount:A.sourceTokenAmount,sourceTokenDecimals:o.decimals})?await P.createSwapTransaction():await P.createAllowanceTransaction(),A.loadingBuildTransaction=!1,A.fetchError=!1,e}catch(t){return y.I.goBack(),x.P.showError("Failed to check allowance"),A.loadingBuildTransaction=!1,A.approvalTransaction=void 0,A.swapTransaction=void 0,void(A.fetchError=!0)}},async createAllowanceTransaction(){const{fromCaipAddress:t,sourceTokenAddress:e,toTokenAddress:o}=P.getParams();if(t&&o){if(!e)throw new Error("createAllowanceTransaction - No source token address found.");try{const i=await p.T.generateApproveCalldata({from:e,to:o,userAddress:t}),a={data:i.tx.data,to:l.w.getPlainAddress(i.tx.from),gasPrice:BigInt(i.tx.eip155.gasPrice),value:BigInt(i.tx.value),toAmount:A.toTokenAmount};return A.swapTransaction=void 0,A.approvalTransaction={data:a.data,to:a.to,gasPrice:a.gasPrice,value:a.value,toAmount:a.toAmount},{data:a.data,to:a.to,gasPrice:a.gasPrice,value:a.value,toAmount:a.toAmount}}catch(t){return y.I.goBack(),x.P.showError("Failed to create approval transaction"),A.approvalTransaction=void 0,A.swapTransaction=void 0,void(A.fetchError=!0)}}},async createSwapTransaction(){const{networkAddress:t,fromCaipAddress:e,sourceTokenAmount:o}=P.getParams(),i=A.sourceToken,a=A.toToken;if(!(e&&o&&i&&a))return;const n=w.x.parseUnits(o,i.decimals)?.toString();try{const o=await p.T.generateSwapCalldata({userAddress:e,from:i.address,to:a.address,amount:n,disableEstimate:!0}),r=i.address===t,s=BigInt(o.tx.eip155.gas),c=BigInt(o.tx.eip155.gasPrice),u={data:o.tx.data,to:l.w.getPlainAddress(o.tx.to),gas:s,gasPrice:c,value:r?BigInt(n??"0"):BigInt("0"),toAmount:A.toTokenAmount};return A.gasPriceInUSD=v.getGasPriceInUSD(A.networkPrice,s,c),A.approvalTransaction=void 0,A.swapTransaction=u,u}catch(t){return y.I.goBack(),x.P.showError("Failed to create transaction"),A.approvalTransaction=void 0,A.swapTransaction=void 0,void(A.fetchError=!0)}},async sendTransactionForApproval(t){const{fromAddress:e,isAuthConnector:o}=P.getParams();A.loadingApprovalTransaction=!0;const i="Approve limit increase in your wallet";o?y.I.pushTransactionStack({onSuccess(){x.P.showLoading(i)}}):x.P.showLoading(i);try{await w.x.sendTransaction({address:e,to:t.to,data:t.data,value:t.value,chainNamespace:"eip155"}),await P.swapTokens(),await P.getTransaction(),A.approvalTransaction=void 0,A.loadingApprovalTransaction=!1}catch(t){const e=t;A.transactionError=e?.shortMessage,A.loadingApprovalTransaction=!1,x.P.showError(e?.shortMessage||"Transaction error"),k.E.sendEvent({type:"track",event:"SWAP_APPROVAL_ERROR",properties:{message:e?.shortMessage||e?.message||"Unknown",network:h.W.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:P.state.sourceToken?.symbol||"",swapToToken:P.state.toToken?.symbol||"",swapFromAmount:P.state.sourceTokenAmount||"",swapToAmount:P.state.toTokenAmount||"",isSmartAccount:d.U.state.preferredAccountTypes?.eip155===s.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}},async sendTransactionForSwap(t){if(!t)return;const{fromAddress:e,toTokenAmount:o,isAuthConnector:i}=P.getParams();A.loadingTransaction=!0;const a=`Swapping ${A.sourceToken?.symbol} to ${n.S.formatNumberToLocalString(o,3)} ${A.toToken?.symbol}`,r=`Swapped ${A.sourceToken?.symbol} to ${n.S.formatNumberToLocalString(o,3)} ${A.toToken?.symbol}`;i?y.I.pushTransactionStack({onSuccess(){y.I.replace("Account"),x.P.showLoading(a),$.resetState()}}):x.P.showLoading("Confirm transaction in your wallet");try{const o=[A.sourceToken?.address,A.toToken?.address].join(","),a=await w.x.sendTransaction({address:e,to:t.to,data:t.data,value:t.value,chainNamespace:"eip155"});return A.loadingTransaction=!1,x.P.showSuccess(r),k.E.sendEvent({type:"track",event:"SWAP_SUCCESS",properties:{network:h.W.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:P.state.sourceToken?.symbol||"",swapToToken:P.state.toToken?.symbol||"",swapFromAmount:P.state.sourceTokenAmount||"",swapToAmount:P.state.toTokenAmount||"",isSmartAccount:d.U.state.preferredAccountTypes?.eip155===s.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),$.resetState(),i||y.I.replace("Account"),$.getMyTokensWithBalance(o),a}catch(t){const e=t;return A.transactionError=e?.shortMessage,A.loadingTransaction=!1,x.P.showError(e?.shortMessage||"Transaction error"),void k.E.sendEvent({type:"track",event:"SWAP_ERROR",properties:{message:e?.shortMessage||e?.message||"Unknown",network:h.W.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:P.state.sourceToken?.symbol||"",swapToToken:P.state.toToken?.symbol||"",swapFromAmount:P.state.sourceTokenAmount||"",swapToAmount:P.state.toTokenAmount||"",isSmartAccount:d.U.state.preferredAccountTypes?.eip155===s.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}},hasInsufficientToken:(t,e)=>v.isInsufficientSourceTokenForSwap(t,e,A.myTokensWithBalance),setTransactionDetails(){const{toTokenAddress:t,toTokenDecimals:e}=P.getParams();t&&e&&(A.gasPriceInUSD=v.getGasPriceInUSD(A.networkPrice,BigInt(A.gasFee),BigInt(T)),A.priceImpact=v.getPriceImpact({sourceTokenAmount:A.sourceTokenAmount,sourceTokenPriceInUSD:A.sourceTokenPriceInUSD,toTokenPriceInUSD:A.toTokenPriceInUSD,toTokenAmount:A.toTokenAmount}),A.maxSlippage=v.getMaxSlippage(A.slippage,A.toTokenAmount),A.providerFee=v.getProviderFee(A.sourceTokenAmount))}},P=(0,b.X)($)},77887:(t,e,o)=>{var i=o(48422),a=o(91427),n=o(43393),r=o(72470);o(43508),o(37498),o(79932);const s=i.AH`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var c=function(t,e,o,i){var a,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(n<3?a(r):n>3?a(e,o,r):a(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r};let l=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.open=n.I.state.open,this.message=n.I.state.message,this.triggerRect=n.I.state.triggerRect,this.variant=n.I.state.variant,this.unsubscribe.push(n.I.subscribe(t=>{this.open=t.open,this.message=t.message,this.triggerRect=t.triggerRect,this.variant=t.variant}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){this.dataset.variant=this.variant;const t=this.triggerRect.top,e=this.triggerRect.left;return this.style.cssText=`\n    --w3m-tooltip-top: ${t}px;\n    --w3m-tooltip-left: ${e}px;\n    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;\n    --w3m-tooltip-display: ${this.open?"flex":"none"};\n    --w3m-tooltip-opacity: ${this.open?1:0};\n    `,i.qy`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};l.styles=[s],c([(0,a.wk)()],l.prototype,"open",void 0),c([(0,a.wk)()],l.prototype,"message",void 0),c([(0,a.wk)()],l.prototype,"triggerRect",void 0),c([(0,a.wk)()],l.prototype,"variant",void 0),l=c([(0,r.EM)("w3m-tooltip"),(0,r.EM)("w3m-tooltip")],l)},79932:(t,e,o)=>{o(82207)},80659:(t,e,o)=>{o(63718)},82207:(t,e,o)=>{var i=o(48422),a=o(91427),n=o(23507),r=o(56063),s=o(68664);const c=i.AH`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var l=function(t,e,o,i){var a,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(n<3?a(r):n>3?a(e,o,r):a(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r};let u=class extends i.WF{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,i.qy`<slot class=${(0,n.H)(t)}></slot>`}};u.styles=[r.W5,c],l([(0,a.MZ)()],u.prototype,"variant",void 0),l([(0,a.MZ)()],u.prototype,"color",void 0),l([(0,a.MZ)()],u.prototype,"align",void 0),l([(0,a.MZ)()],u.prototype,"lineClamp",void 0),u=l([(0,s.E)("wui-text")],u)},82963:(t,e,o)=>{var i=o(48422),a=o(91427),n=o(68664);const r=i.AH`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var s=function(t,e,o,i){var a,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(n<3?a(r):n>3?a(e,o,r):a(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r};let c=class extends i.WF{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);\n    `,i.qy`<slot></slot>`}};c.styles=[r],s([(0,a.MZ)()],c.prototype,"width",void 0),s([(0,a.MZ)()],c.prototype,"height",void 0),s([(0,a.MZ)()],c.prototype,"borderRadius",void 0),s([(0,a.MZ)()],c.prototype,"variant",void 0),c=s([(0,n.E)("wui-shimmer")],c)},91427:(t,e,o)=>{o.d(e,{MZ:()=>i.M,wk:()=>a.w});var i=o(69623),a=o(4537)}}]);
//# sourceMappingURL=6800.widget.iife.js.map