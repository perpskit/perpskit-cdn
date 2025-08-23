/*! For license information please see 9831.widget.iife.js.LICENSE.txt */
"use strict";(this.webpackChunkHLWidget=this.webpackChunkHLWidget||[]).push([[9831],{379:(t,e,i)=>{i.d(e,{_:()=>r,K:()=>c});var a=i(80971),o=i(64720),n=i(39341);const r=()=>new s;class s{}const l=new WeakMap,c=(0,n.u$)(class extends o.Kq{render(t){return a.s6}update(t,[e]){const i=e!==this.G;return i&&void 0!==this.G&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),a.s6}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.G){const e=this.ht??globalThis;let i=l.get(e);void 0===i&&(i=new WeakMap,l.set(e,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,t),void 0!==t&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return"function"==typeof this.G?l.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})},4537:(t,e,i)=>{i.d(e,{w:()=>o});var a=i(69623);function o(t){return(0,a.M)({...t,state:!0,attribute:!1})}},10607:(t,e,i)=>{var a=i(48422),o=i(91427),n=i(39168),r=(i(82207),i(56063)),s=i(68664);i(30990);const l=a.AH`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var c=function(t,e,i,a){var o,n=arguments.length,r=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let d=class extends a.WF{constructor(){super(...arguments),this.disabled=!1}render(){return a.qy`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="mdl"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${(0,n.J)(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?a.qy`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};d.styles=[r.W5,l],c([(0,o.MZ)()],d.prototype,"errorMessage",void 0),c([(0,o.MZ)({type:Boolean})],d.prototype,"disabled",void 0),c([(0,o.MZ)()],d.prototype,"value",void 0),c([(0,o.MZ)()],d.prototype,"tabIdx",void 0),d=c([(0,s.E)("wui-email-input")],d)},20766:(t,e,i)=>{var a=i(48422),o=i(91427),n=i(56063),r=i(68664);const s=a.AH`
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
`;var l=function(t,e,i,a){var o,n=arguments.length,r=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let c=class extends a.WF{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText="--local-color: "+("inherit"===this.color?"inherit":`var(--wui-color-${this.color})`),this.dataset.size=this.size,a.qy`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};c.styles=[n.W5,s],l([(0,o.MZ)()],c.prototype,"color",void 0),l([(0,o.MZ)()],c.prototype,"size",void 0),c=l([(0,r.E)("wui-loading-spinner")],c)},23507:(t,e,i)=>{i.d(e,{H:()=>n});var a=i(80971),o=i(39341);const n=(0,o.u$)(class extends o.WL{constructor(t){if(super(t),t.type!==o.OA.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const a=!!e[t];a===this.st.has(t)||this.nt?.has(t)||(a?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return a.c0}})},27165:(t,e,i)=>{i.d(e,{Rt:()=>r,sO:()=>n});var a=i(80971);const{I:o}=a.ge,n=t=>null===t||"object"!=typeof t&&"function"!=typeof t,r=t=>void 0===t.strings},30990:(t,e,i)=>{var a=i(48422),o=i(91427),n=i(23507),r=i(39168),s=i(379),l=(i(59481),i(56063)),c=i(68664);const d=a.AH`
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
`;var u=function(t,e,i,a){var o,n=arguments.length,r=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let h=class extends a.WF{constructor(){super(...arguments),this.inputElementRef=(0,s._)(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const t=`wui-padding-right-${this.inputRightPadding}`,e=`wui-size-${this.size}`,i={[e]:!0,[t]:Boolean(this.inputRightPadding)};return a.qy`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${(0,s.K)(this.inputElementRef)}
        class=${(0,n.H)(i)}
        type=${this.type}
        enterkeyhint=${(0,r.J)(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
        tabindex=${(0,r.J)(this.tabIdx)}
      />
      <slot></slot>`}templateIcon(){return this.icon?a.qy`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};h.styles=[l.W5,l.fD,d],u([(0,o.MZ)()],h.prototype,"size",void 0),u([(0,o.MZ)()],h.prototype,"icon",void 0),u([(0,o.MZ)({type:Boolean})],h.prototype,"disabled",void 0),u([(0,o.MZ)()],h.prototype,"placeholder",void 0),u([(0,o.MZ)()],h.prototype,"type",void 0),u([(0,o.MZ)()],h.prototype,"keyHint",void 0),u([(0,o.MZ)()],h.prototype,"value",void 0),u([(0,o.MZ)()],h.prototype,"inputRightPadding",void 0),u([(0,o.MZ)()],h.prototype,"tabIdx",void 0),h=u([(0,c.E)("wui-input-text")],h)},32971:(t,e,i)=>{i.d(e,{T:()=>h});var a=i(80971),o=i(27165),n=i(64720);class r{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class s{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}var l=i(39341);const c=t=>!(0,o.sO)(t)&&"function"==typeof t.then,d=1073741823;class u extends n.Kq{constructor(){super(...arguments),this._$Cwt=d,this._$Cbt=[],this._$CK=new r(this),this._$CX=new s}render(...t){return t.find(t=>!c(t))??a.c0}update(t,e){const i=this._$Cbt;let o=i.length;this._$Cbt=e;const n=this._$CK,r=this._$CX;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$Cwt);t++){const a=e[t];if(!c(a))return this._$Cwt=t,a;t<o&&a===i[t]||(this._$Cwt=d,o=0,Promise.resolve(a).then(async t=>{for(;r.get();)await r.get();const e=n.deref();if(void 0!==e){const i=e._$Cbt.indexOf(a);i>-1&&i<e._$Cwt&&(e._$Cwt=i,e.setValue(t))}}))}return a.c0}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const h=(0,l.u$)(u)},33165:(t,e,i)=>{var a=i(48422),o=i(91427),n=i(56063),r=i(71686),s=i(68664);const l=a.AH`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var c=function(t,e,i,a){var o,n=arguments.length,r=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let d=class extends a.WF{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&r.Z.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&r.Z.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&r.Z.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&r.Z.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&r.Z.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&r.Z.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&r.Z.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&r.Z.getSpacingStyles(this.margin,3)};\n    `,a.qy`<slot></slot>`}};d.styles=[n.W5,l],c([(0,o.MZ)()],d.prototype,"flexDirection",void 0),c([(0,o.MZ)()],d.prototype,"flexWrap",void 0),c([(0,o.MZ)()],d.prototype,"flexBasis",void 0),c([(0,o.MZ)()],d.prototype,"flexGrow",void 0),c([(0,o.MZ)()],d.prototype,"flexShrink",void 0),c([(0,o.MZ)()],d.prototype,"alignItems",void 0),c([(0,o.MZ)()],d.prototype,"justifyContent",void 0),c([(0,o.MZ)()],d.prototype,"columnGap",void 0),c([(0,o.MZ)()],d.prototype,"rowGap",void 0),c([(0,o.MZ)()],d.prototype,"gap",void 0),c([(0,o.MZ)()],d.prototype,"padding",void 0),c([(0,o.MZ)()],d.prototype,"margin",void 0),d=c([(0,s.E)("wui-flex")],d)},38991:(t,e,i)=>{var a=i(48422),o=i(91427),n=i(39168),r=(i(82207),i(56063)),s=i(68664);const l=a.AH`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var c=function(t,e,i,a){var o,n=arguments.length,r=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let d=class extends a.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return a.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,n.J)(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};d.styles=[r.W5,r.fD,l],c([(0,o.MZ)()],d.prototype,"tabIdx",void 0),c([(0,o.MZ)({type:Boolean})],d.prototype,"disabled",void 0),c([(0,o.MZ)()],d.prototype,"color",void 0),d=c([(0,s.E)("wui-link")],d)},39168:(t,e,i)=>{i.d(e,{J:()=>o});var a=i(80971);const o=t=>t??a.s6},39341:(t,e,i)=>{i.d(e,{OA:()=>a,WL:()=>n,u$:()=>o});const a={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},o=t=>(...e)=>({_$litDirective$:t,values:e});class n{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},43508:(t,e,i)=>{i(33165)},49831:(t,e,i)=>{i.r(e),i.d(e,{W3mEmailLoginView:()=>F,W3mEmailVerifyDeviceView:()=>A,W3mEmailVerifyOtpView:()=>O,W3mUpdateEmailPrimaryOtpView:()=>Z,W3mUpdateEmailSecondaryOtpView:()=>j,W3mUpdateEmailWalletView:()=>P});var a=i(34325),o=i(52819),n=i(90336),r=i(19400),s=i(29327),l=i(92999),c=i(72470),d=i(48422),u=i(91427),h=i(33461),p=i(30413),g=i(7380),w=(i(43508),i(38991),i(59183),i(33165),i(56063)),v=i(71686),f=i(68664);const b=d.AH`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
    background: var(--wui-color-gray-glass-005);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }
`;var m=function(t,e,i,a){var o,n=arguments.length,r=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let y=class extends d.WF{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return d.qy`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};y.styles=[w.W5,w.fD,b],m([(0,u.MZ)({type:Boolean})],y.prototype,"disabled",void 0),m([(0,u.MZ)({type:String})],y.prototype,"value",void 0),y=m([(0,f.E)("wui-input-numeric")],y);const x=d.AH`
  :host {
    position: relative;
    display: block;
  }
`;var E=function(t,e,i,a){var o,n=arguments.length,r=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let $=class extends d.WF{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=t=>this.values.slice(0,t).every(t=>""!==t),this.handleKeyDown=(t,e)=>{const i=t.target,a=this.getInputElement(i);if(!a)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(t.key)&&t.preventDefault();const o=a.selectionStart;switch(t.key){case"ArrowLeft":o&&a.setSelectionRange(o+1,o+1),this.focusInputField("prev",e);break;case"ArrowRight":case"Shift":this.focusInputField("next",e);break;case"Delete":case"Backspace":""===a.value?this.focusInputField("prev",e):this.updateInput(a,e,"")}},this.focusInputField=(t,e)=>{if("next"===t){const t=e+1;if(!this.shouldInputBeEnabled(t))return;const i=this.numerics[t<this.length?t:e],a=i?this.getInputElement(i):void 0;a&&(a.disabled=!1,a.focus())}if("prev"===t){const t=e-1,i=this.numerics[t>-1?t:e],a=i?this.getInputElement(i):void 0;a&&a.focus()}}}firstUpdated(){this.otp&&(this.values=this.otp.split(""));const t=this.shadowRoot?.querySelectorAll("wui-input-numeric");t&&(this.numerics=Array.from(t)),this.numerics[0]?.focus()}render(){return d.qy`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((t,e)=>d.qy`
            <wui-input-numeric
              @input=${t=>this.handleInput(t,e)}
              @click=${t=>this.selectInput(t)}
              @keydown=${t=>this.handleKeyDown(t,e)}
              .disabled=${!this.shouldInputBeEnabled(e)}
              .value=${this.values[e]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(t,e,i){const a=this.numerics[e],o=t||(a?this.getInputElement(a):void 0);o&&(o.value=i,this.values=this.values.map((t,a)=>a===e?i:t))}selectInput(t){const e=t.target;if(e){const t=this.getInputElement(e);t?.select()}}handleInput(t,e){const i=t.target,a=this.getInputElement(i);if(a){const i=a.value;"insertFromPaste"===t.inputType?this.handlePaste(a,i,e):v.Z.isNumber(i)&&t.data?(this.updateInput(a,e,t.data),this.focusInputField("next",e)):this.updateInput(a,e,"")}this.dispatchInputChangeEvent()}handlePaste(t,e,i){const a=e[0];if(a&&v.Z.isNumber(a)){this.updateInput(t,i,a);const o=e.substring(1);if(i+1<this.length&&o.length){const t=this.numerics[i+1],e=t?this.getInputElement(t):void 0;e&&this.handlePaste(e,o,i+1)}else this.focusInputField("next",i)}else this.updateInput(t,i,"")}getInputElement(t){return t.shadowRoot?.querySelector("input")?t.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const t=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:t,bubbles:!0,composed:!0}))}};$.styles=[w.W5,x],E([(0,u.MZ)({type:Number})],$.prototype,"length",void 0),E([(0,u.MZ)({type:String})],$.prototype,"otp",void 0),E([(0,u.wk)()],$.prototype,"values",void 0),$=E([(0,f.E)("wui-otp")],$),i(79932);var k=i(53633);const S=d.AH`
  wui-loading-spinner {
    margin: 9px auto;
  }

  .email-display,
  .email-display wui-text {
    max-width: 100%;
  }
`;var C=function(t,e,i,a){var o,n=arguments.length,r=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let I=class extends d.WF{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){super(),this.loading=!1,this.timeoutTimeLeft=k.Q.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=h.I.state.data?.email,this.authConnector=p.a.getAuthConnector()}render(){if(!this.email)throw new Error("w3m-email-otp-widget: No email provided");const t=Boolean(this.timeoutTimeLeft),e=this.getFooterLabels(t);return d.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex
          class="email-display"
          flexDirection="column"
          alignItems="center"
          .padding=${["0","xl","0","xl"]}
        >
          <wui-text variant="paragraph-400" color="fg-100" align="center">
            Enter the code we sent to
          </wui-text>
          <wui-text variant="paragraph-500" color="fg-100" lineClamp="1" align="center">
            ${this.email}
          </wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?d.qy`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:d.qy` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?d.qy`
                    <wui-text variant="small-400" align="center" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center" gap="xs">
          <wui-text variant="small-400" color="fg-200">${e.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${t}>
            ${e.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=k.Q.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=k.Q.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(t){try{this.loading||(this.otp=t.detail,this.authConnector&&6===this.otp.length&&(this.loading=!0,await(this.onOtpSubmit?.(this.otp))))}catch(t){this.error=l.w.parseError(t),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){if(this.error="",this.otp="",!p.a.getAuthConnector()||!this.email)throw new Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),g.P.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(t){g.P.showError(t)}finally{this.loading=!1}}getFooterLabels(t){return this.onStartOver?{title:"Something wrong?",action:"Try again "+(t?`in ${this.timeoutTimeLeft}s`:"")}:{title:"Didn't receive it?",action:"Resend "+(t?`in ${this.timeoutTimeLeft}s`:"Code")}}};I.styles=S,C([(0,u.wk)()],I.prototype,"loading",void 0),C([(0,u.wk)()],I.prototype,"timeoutTimeLeft",void 0),C([(0,u.wk)()],I.prototype,"error",void 0),I=C([(0,c.EM)("w3m-email-otp-widget")],I);let O=class extends I{constructor(){super(...arguments),this.onOtpSubmit=async t=>{try{if(this.authConnector){if(await this.authConnector.provider.connectOtp({otp:t}),a.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),!o.W.state.activeChain)throw new Error("Active chain is not set on ChainControll");await n.x.connectExternal(this.authConnector,o.W.state.activeChain),a.E.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email",name:this.authConnector.name||"Unknown"}}),r.H.state.siwx||s.W.close()}}catch(t){throw a.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:l.w.parseError(t)}}),t}},this.onOtpResend=async t=>{this.authConnector&&(await this.authConnector.provider.connectEmail({email:t}),a.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))}}};O=function(t,e,i,a){var o,n=arguments.length,r=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}([(0,c.EM)("w3m-email-verify-otp-view")],O),i(52206);const R=d.AH`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var z=function(t,e,i,a){var o,n=arguments.length,r=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let A=class extends d.WF{constructor(){super(),this.email=h.I.state.data?.email,this.authConnector=p.a.getAuthConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.authConnector)throw new Error("w3m-email-verify-device-view: No auth connector provided");return d.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section" gap="xs">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.authConnector)try{await this.authConnector.provider.connectDevice(),a.E.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),a.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),h.I.replace("EmailVerifyOtp",{email:this.email})}catch(t){h.I.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.authConnector||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.authConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),g.P.showSuccess("Code email resent")}}catch(t){g.P.showError(t)}finally{this.loading=!1}}};A.styles=R,z([(0,u.wk)()],A.prototype,"loading",void 0),A=z([(0,c.EM)("w3m-email-verify-device-view")],A);var M=i(379);i(80659),i(10607);const _=d.AH`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var T=function(t,e,i,a){var o,n=arguments.length,r=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let P=class extends d.WF{constructor(){super(...arguments),this.formRef=(0,M._)(),this.initialEmail=h.I.state.data?.email??"",this.redirectView=h.I.state.data?.redirectView,this.email="",this.loading=!1}firstUpdated(){this.formRef.value?.addEventListener("keydown",t=>{"Enter"===t.key&&this.onSubmitEmail(t)})}render(){return d.qy`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${(0,M.K)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>
        ${this.buttonsTemplate()}
      </wui-flex>
    `}onEmailInputChange(t){this.email=t.detail}async onSubmitEmail(t){try{if(this.loading)return;this.loading=!0,t.preventDefault();const e=p.a.getAuthConnector();if(!e)throw new Error("w3m-update-email-wallet: Auth connector not found");const i=await e.provider.updateEmail({email:this.email});a.E.sendEvent({type:"track",event:"EMAIL_EDIT"}),"VERIFY_SECONDARY_OTP"===i.action?h.I.push("UpdateEmailSecondaryOtp",{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView}):h.I.push("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView})}catch(t){g.P.showError(t),this.loading=!1}}buttonsTemplate(){const t=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return this.redirectView?d.qy`
      <wui-flex gap="s">
        <wui-button size="md" variant="neutral" fullWidth @click=${h.I.goBack}>
          Cancel
        </wui-button>

        <wui-button
          size="md"
          variant="main"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!t}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      </wui-flex>
    `:d.qy`
        <wui-button
          size="md"
          variant="main"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!t}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      `}};P.styles=_,T([(0,u.wk)()],P.prototype,"email",void 0),T([(0,u.wk)()],P.prototype,"loading",void 0),P=T([(0,c.EM)("w3m-update-email-wallet-view")],P);let Z=class extends I{constructor(){super(),this.email=h.I.state.data?.email,this.onOtpSubmit=async t=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailPrimaryOtp({otp:t}),a.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),h.I.replace("UpdateEmailSecondaryOtp",h.I.state.data))}catch(t){throw a.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:l.w.parseError(t)}}),t}},this.onStartOver=()=>{h.I.replace("UpdateEmailWallet",h.I.state.data)}}};Z=function(t,e,i,a){var o,n=arguments.length,r=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}([(0,c.EM)("w3m-update-email-primary-otp-view")],Z);let j=class extends I{constructor(){super(),this.email=h.I.state.data?.newEmail,this.redirectView=h.I.state.data?.redirectView,this.onOtpSubmit=async t=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailSecondaryOtp({otp:t}),a.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),this.redirectView&&h.I.reset(this.redirectView))}catch(t){throw a.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:l.w.parseError(t)}}),t}},this.onStartOver=()=>{h.I.replace("UpdateEmailWallet",h.I.state.data)}}};j=function(t,e,i,a){var o,n=arguments.length,r=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}([(0,c.EM)("w3m-update-email-secondary-otp-view")],j);var D=i(76539),L=i(57131),W=function(t,e,i,a){var o,n=arguments.length,r=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let F=class extends d.WF{constructor(){super(),this.authConnector=p.a.getAuthConnector(),this.isEmailEnabled=r.H.state.remoteFeatures?.email,this.isAuthEnabled=this.checkIfAuthEnabled(p.a.state.connectors),this.connectors=p.a.state.connectors,p.a.subscribeKey("connectors",t=>{this.connectors=t,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)})}render(){if(!this.isEmailEnabled)throw new Error("w3m-email-login-view: Email is not enabled");if(!this.isAuthEnabled)throw new Error("w3m-email-login-view: No auth connector provided");return d.qy`<wui-flex
      flexDirection="column"
      .padding=${["3xs","m","m","m"]}
      gap="l"
    >
      <w3m-email-login-widget></w3m-email-login-widget>
    </wui-flex> `}checkIfAuthEnabled(t){const e=t.filter(t=>t.type===L.o.CONNECTOR_TYPE_AUTH).map(t=>t.chain);return D.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(t=>e.includes(t))}};W([(0,u.wk)()],F.prototype,"connectors",void 0),F=W([(0,c.EM)("w3m-email-login-view")],F)},50409:(t,e,i)=>{var a=i(48422),o=i(91427),n=(i(59481),i(56063)),r=i(68664);const s=a.AH`
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
`;var l=function(t,e,i,a){var o,n=arguments.length,r=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let c=class extends a.WF{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const t=this.iconSize||this.size,e="lg"===this.size,i="xl"===this.size,o=e?"12%":"16%",n=e?"xxs":i?"s":"3xl",r="gray"===this.background,s="opaque"===this.background,l="accent-100"===this.backgroundColor&&s||"success-100"===this.backgroundColor&&s||"error-100"===this.backgroundColor&&s||"inverse-100"===this.backgroundColor&&s;let c=`var(--wui-color-${this.backgroundColor})`;return l?c=`var(--wui-icon-box-bg-${this.backgroundColor})`:r&&(c=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${c};\n       --local-bg-mix: ${l||r?"100%":o};\n       --local-border-radius: var(--wui-border-radius-${n});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,a.qy` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};c.styles=[n.W5,n.fD,s],l([(0,o.MZ)()],c.prototype,"size",void 0),l([(0,o.MZ)()],c.prototype,"backgroundColor",void 0),l([(0,o.MZ)()],c.prototype,"iconColor",void 0),l([(0,o.MZ)()],c.prototype,"iconSize",void 0),l([(0,o.MZ)()],c.prototype,"background",void 0),l([(0,o.MZ)({type:Boolean})],c.prototype,"border",void 0),l([(0,o.MZ)()],c.prototype,"borderColor",void 0),l([(0,o.MZ)()],c.prototype,"icon",void 0),c=l([(0,r.E)("wui-icon-box")],c)},52206:(t,e,i)=>{i(50409)},59183:(t,e,i)=>{i(20766)},59481:(t,e,i)=>{var a=i(48422),o=i(91427),n=i(32971);const r=new class{constructor(){this.cache=new Map}set(t,e){this.cache.set(t,e)}get(t){return this.cache.get(t)}has(t){return this.cache.has(t)}delete(t){this.cache.delete(t)}clear(){this.cache.clear()}};var s=i(56063),l=i(68664);const c=a.AH`
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
`;var d=function(t,e,i,a){var o,n=arguments.length,r=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};const u={add:async()=>(await i.e(8186).then(i.bind(i,88186))).addSvg,allWallets:async()=>(await i.e(9569).then(i.bind(i,39569))).allWalletsSvg,arrowBottomCircle:async()=>(await i.e(5995).then(i.bind(i,25995))).arrowBottomCircleSvg,appStore:async()=>(await i.e(3774).then(i.bind(i,3774))).appStoreSvg,apple:async()=>(await i.e(5929).then(i.bind(i,15929))).appleSvg,arrowBottom:async()=>(await i.e(1198).then(i.bind(i,11198))).arrowBottomSvg,arrowLeft:async()=>(await i.e(9760).then(i.bind(i,29760))).arrowLeftSvg,arrowRight:async()=>(await i.e(4659).then(i.bind(i,94659))).arrowRightSvg,arrowTop:async()=>(await i.e(3690).then(i.bind(i,43690))).arrowTopSvg,bank:async()=>(await i.e(627).then(i.bind(i,80627))).bankSvg,browser:async()=>(await i.e(6913).then(i.bind(i,16913))).browserSvg,card:async()=>(await i.e(1327).then(i.bind(i,1327))).cardSvg,checkmark:async()=>(await i.e(1480).then(i.bind(i,31480))).checkmarkSvg,checkmarkBold:async()=>(await i.e(486).then(i.bind(i,70486))).checkmarkBoldSvg,chevronBottom:async()=>(await i.e(3928).then(i.bind(i,33928))).chevronBottomSvg,chevronLeft:async()=>(await i.e(3682).then(i.bind(i,23682))).chevronLeftSvg,chevronRight:async()=>(await i.e(7701).then(i.bind(i,17701))).chevronRightSvg,chevronTop:async()=>(await i.e(2592).then(i.bind(i,62592))).chevronTopSvg,chromeStore:async()=>(await i.e(1903).then(i.bind(i,1903))).chromeStoreSvg,clock:async()=>(await i.e(6027).then(i.bind(i,76027))).clockSvg,close:async()=>(await i.e(7545).then(i.bind(i,17545))).closeSvg,compass:async()=>(await i.e(2097).then(i.bind(i,2097))).compassSvg,coinPlaceholder:async()=>(await i.e(9919).then(i.bind(i,79919))).coinPlaceholderSvg,copy:async()=>(await i.e(340).then(i.bind(i,90340))).copySvg,cursor:async()=>(await i.e(9119).then(i.bind(i,29119))).cursorSvg,cursorTransparent:async()=>(await i.e(1944).then(i.bind(i,1944))).cursorTransparentSvg,desktop:async()=>(await i.e(3277).then(i.bind(i,73277))).desktopSvg,disconnect:async()=>(await i.e(2923).then(i.bind(i,2923))).disconnectSvg,discord:async()=>(await i.e(6977).then(i.bind(i,6977))).discordSvg,etherscan:async()=>(await i.e(3092).then(i.bind(i,73092))).etherscanSvg,extension:async()=>(await i.e(5712).then(i.bind(i,55712))).extensionSvg,externalLink:async()=>(await i.e(7563).then(i.bind(i,57563))).externalLinkSvg,facebook:async()=>(await i.e(8865).then(i.bind(i,98865))).facebookSvg,farcaster:async()=>(await i.e(4132).then(i.bind(i,74132))).farcasterSvg,filters:async()=>(await i.e(9222).then(i.bind(i,69222))).filtersSvg,github:async()=>(await i.e(9178).then(i.bind(i,89178))).githubSvg,google:async()=>(await i.e(3106).then(i.bind(i,13106))).googleSvg,helpCircle:async()=>(await i.e(4691).then(i.bind(i,34691))).helpCircleSvg,image:async()=>(await i.e(9652).then(i.bind(i,99652))).imageSvg,id:async()=>(await i.e(1636).then(i.bind(i,11636))).idSvg,infoCircle:async()=>(await i.e(298).then(i.bind(i,60298))).infoCircleSvg,lightbulb:async()=>(await i.e(54).then(i.bind(i,20054))).lightbulbSvg,mail:async()=>(await i.e(9930).then(i.bind(i,39930))).mailSvg,mobile:async()=>(await i.e(2475).then(i.bind(i,12475))).mobileSvg,more:async()=>(await i.e(6856).then(i.bind(i,36856))).moreSvg,networkPlaceholder:async()=>(await i.e(3387).then(i.bind(i,73387))).networkPlaceholderSvg,nftPlaceholder:async()=>(await i.e(3472).then(i.bind(i,53472))).nftPlaceholderSvg,off:async()=>(await i.e(4668).then(i.bind(i,54668))).offSvg,playStore:async()=>(await i.e(7755).then(i.bind(i,7755))).playStoreSvg,plus:async()=>(await i.e(2945).then(i.bind(i,22945))).plusSvg,qrCode:async()=>(await i.e(4034).then(i.bind(i,44034))).qrCodeIcon,recycleHorizontal:async()=>(await i.e(5045).then(i.bind(i,85045))).recycleHorizontalSvg,refresh:async()=>(await i.e(4290).then(i.bind(i,44290))).refreshSvg,search:async()=>(await i.e(3333).then(i.bind(i,73333))).searchSvg,send:async()=>(await i.e(8535).then(i.bind(i,18535))).sendSvg,swapHorizontal:async()=>(await i.e(9586).then(i.bind(i,49586))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await i.e(7773).then(i.bind(i,17773))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await i.e(9325).then(i.bind(i,9325))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await i.e(7562).then(i.bind(i,47562))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await i.e(2168).then(i.bind(i,82168))).swapVerticalSvg,telegram:async()=>(await i.e(8166).then(i.bind(i,88166))).telegramSvg,threeDots:async()=>(await i.e(1874).then(i.bind(i,51874))).threeDotsSvg,twitch:async()=>(await i.e(7218).then(i.bind(i,17218))).twitchSvg,twitter:async()=>(await i.e(3489).then(i.bind(i,93489))).xSvg,twitterIcon:async()=>(await i.e(9023).then(i.bind(i,69023))).twitterIconSvg,verify:async()=>(await i.e(2120).then(i.bind(i,52120))).verifySvg,verifyFilled:async()=>(await i.e(5337).then(i.bind(i,45337))).verifyFilledSvg,wallet:async()=>(await i.e(440).then(i.bind(i,60440))).walletSvg,walletConnect:async()=>(await i.e(3300).then(i.bind(i,33300))).walletConnectSvg,walletConnectLightBrown:async()=>(await i.e(3300).then(i.bind(i,33300))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await i.e(3300).then(i.bind(i,33300))).walletConnectBrownSvg,walletPlaceholder:async()=>(await i.e(5556).then(i.bind(i,25556))).walletPlaceholderSvg,warningCircle:async()=>(await i.e(7910).then(i.bind(i,87910))).warningCircleSvg,x:async()=>(await i.e(3489).then(i.bind(i,93489))).xSvg,info:async()=>(await i.e(917).then(i.bind(i,10917))).infoSvg,exclamationTriangle:async()=>(await i.e(2557).then(i.bind(i,32557))).exclamationTriangleSvg,reown:async()=>(await i.e(1864).then(i.bind(i,41864))).reownSvg};let h=class extends a.WF{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n      --local-aspect-ratio: ${this.aspectRatio}\n    `,a.qy`${(0,n.T)(async function(t){if(r.has(t))return r.get(t);const e=(u[t]??u.copy)();return r.set(t,e),e}(this.name),a.qy`<div class="fallback"></div>`)}`}};h.styles=[s.W5,s.ck,c],d([(0,o.MZ)()],h.prototype,"size",void 0),d([(0,o.MZ)()],h.prototype,"name",void 0),d([(0,o.MZ)()],h.prototype,"color",void 0),d([(0,o.MZ)()],h.prototype,"aspectRatio",void 0),h=d([(0,l.E)("wui-icon")],h)},63718:(t,e,i)=>{var a=i(48422),o=i(91427),n=(i(20766),i(82207),i(56063)),r=i(68664);const s=a.AH`
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
`;var l=function(t,e,i,a){var o,n=arguments.length,r=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};const c={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},d={lg:"paragraph-600",md:"small-600"},u={lg:"md",md:"md"};let h=class extends a.WF{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`\n    --local-width: ${this.fullWidth?"100%":"auto"};\n    --local-opacity-100: ${this.loading?0:1};\n    --local-opacity-000: ${this.loading?1:0};\n    --local-border-radius: var(--wui-border-radius-${this.borderRadius});\n    `;const t=this.textVariant??d[this.size];return a.qy`
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
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const t=u[this.size],e=this.disabled?c.disabled:c[this.variant];return a.qy`<wui-loading-spinner color=${e} size=${t}></wui-loading-spinner>`}return a.qy``}};h.styles=[n.W5,n.fD,s],l([(0,o.MZ)()],h.prototype,"size",void 0),l([(0,o.MZ)({type:Boolean})],h.prototype,"disabled",void 0),l([(0,o.MZ)({type:Boolean})],h.prototype,"fullWidth",void 0),l([(0,o.MZ)({type:Boolean})],h.prototype,"loading",void 0),l([(0,o.MZ)()],h.prototype,"variant",void 0),l([(0,o.MZ)({type:Boolean})],h.prototype,"hasIconLeft",void 0),l([(0,o.MZ)({type:Boolean})],h.prototype,"hasIconRight",void 0),l([(0,o.MZ)()],h.prototype,"borderRadius",void 0),l([(0,o.MZ)()],h.prototype,"textVariant",void 0),h=l([(0,r.E)("wui-button")],h)},64720:(t,e,i)=>{i.d(e,{Kq:()=>u});var a=i(27165),o=i(39341);const n=(t,e)=>{const i=t._$AN;if(void 0===i)return!1;for(const t of i)t._$AO?.(e,!1),n(t,e);return!0},r=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===i?.size)},s=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),d(e)}};function l(t){void 0!==this._$AN?(r(this),this._$AM=t,s(this)):this._$AM=t}function c(t,e=!1,i=0){const a=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(e)if(Array.isArray(a))for(let t=i;t<a.length;t++)n(a[t],!1),r(a[t]);else null!=a&&(n(a,!1),r(a));else n(this,t)}const d=t=>{t.type==o.OA.CHILD&&(t._$AP??=c,t._$AQ??=l)};class u extends o.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),s(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(n(this,t),r(this))}setValue(t){if((0,a.Rt)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}},69623:(t,e,i)=>{i.d(e,{M:()=>r});var a=i(56451);const o={attribute:!0,type:String,converter:a.W3,reflect:!1,hasChanged:a.Ec},n=(t=o,e,i)=>{const{kind:a,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),"setter"===a&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===a){const{name:a}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(a,o,t)},init(e){return void 0!==e&&this.C(a,void 0,t,e),e}}}if("setter"===a){const{name:a}=i;return function(i){const o=this[a];e.call(this,i),this.requestUpdate(a,o,t)}}throw Error("Unsupported decorator location: "+a)};function r(t){return(e,i)=>"object"==typeof i?n(t,e,i):((t,e,i)=>{const a=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),a?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}},79932:(t,e,i)=>{i(82207)},80659:(t,e,i)=>{i(63718)},82207:(t,e,i)=>{var a=i(48422),o=i(91427),n=i(23507),r=i(56063),s=i(68664);const l=a.AH`
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
`;var c=function(t,e,i,a){var o,n=arguments.length,r=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let d=class extends a.WF{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,a.qy`<slot class=${(0,n.H)(t)}></slot>`}};d.styles=[r.W5,l],c([(0,o.MZ)()],d.prototype,"variant",void 0),c([(0,o.MZ)()],d.prototype,"color",void 0),c([(0,o.MZ)()],d.prototype,"align",void 0),c([(0,o.MZ)()],d.prototype,"lineClamp",void 0),d=c([(0,s.E)("wui-text")],d)},91427:(t,e,i)=>{i.d(e,{MZ:()=>a.M,wk:()=>o.w});var a=i(69623),o=i(4537)}}]);
//# sourceMappingURL=9831.widget.iife.js.map