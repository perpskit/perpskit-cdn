/*! For license information please see 2672.widget.iife.js.LICENSE.txt */
"use strict";(this.webpackChunkHLWidget=this.webpackChunkHLWidget||[]).push([[2672],{379:(e,t,i)=>{i.d(t,{_:()=>n,K:()=>l});var o=i(80971),a=i(64720),r=i(39341);const n=()=>new s;class s{}const c=new WeakMap,l=(0,r.u$)(class extends a.Kq{render(e){return o.s6}update(e,[t]){const i=t!==this.G;return i&&void 0!==this.G&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),o.s6}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.G){const t=this.ht??globalThis;let i=c.get(t);void 0===i&&(i=new WeakMap,c.set(t,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,e),void 0!==e&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return"function"==typeof this.G?c.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})},4537:(e,t,i)=>{i.d(t,{w:()=>a});var o=i(69623);function a(e){return(0,o.M)({...e,state:!0,attribute:!1})}},20766:(e,t,i)=>{var o=i(48422),a=i(91427),r=i(56063),n=i(68664);const s=o.AH`
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
`;var c=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let l=class extends o.WF{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText="--local-color: "+("inherit"===this.color?"inherit":`var(--wui-color-${this.color})`),this.dataset.size=this.size,o.qy`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};l.styles=[r.W5,s],c([(0,a.MZ)()],l.prototype,"color",void 0),c([(0,a.MZ)()],l.prototype,"size",void 0),l=c([(0,n.E)("wui-loading-spinner")],l)},23507:(e,t,i)=>{i.d(t,{H:()=>r});var o=i(80971),a=i(39341);const r=(0,a.u$)(class extends a.WL{constructor(e){if(super(e),e.type!==a.OA.ATTRIBUTE||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e)));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const i=e.element.classList;for(const e of this.st)e in t||(i.remove(e),this.st.delete(e));for(const e in t){const o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return o.c0}})},27165:(e,t,i)=>{i.d(t,{Rt:()=>n,sO:()=>r});var o=i(80971);const{I:a}=o.ge,r=e=>null===e||"object"!=typeof e&&"function"!=typeof e,n=e=>void 0===e.strings},30990:(e,t,i)=>{var o=i(48422),a=i(91427),r=i(23507),n=i(39168),s=i(379),c=(i(59481),i(56063)),l=i(68664);const u=o.AH`
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
`;var d=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let p=class extends o.WF{constructor(){super(...arguments),this.inputElementRef=(0,s._)(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const e=`wui-padding-right-${this.inputRightPadding}`,t=`wui-size-${this.size}`,i={[t]:!0,[e]:Boolean(this.inputRightPadding)};return o.qy`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${(0,s.K)(this.inputElementRef)}
        class=${(0,r.H)(i)}
        type=${this.type}
        enterkeyhint=${(0,n.J)(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
        tabindex=${(0,n.J)(this.tabIdx)}
      />
      <slot></slot>`}templateIcon(){return this.icon?o.qy`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};p.styles=[c.W5,c.fD,u],d([(0,a.MZ)()],p.prototype,"size",void 0),d([(0,a.MZ)()],p.prototype,"icon",void 0),d([(0,a.MZ)({type:Boolean})],p.prototype,"disabled",void 0),d([(0,a.MZ)()],p.prototype,"placeholder",void 0),d([(0,a.MZ)()],p.prototype,"type",void 0),d([(0,a.MZ)()],p.prototype,"keyHint",void 0),d([(0,a.MZ)()],p.prototype,"value",void 0),d([(0,a.MZ)()],p.prototype,"inputRightPadding",void 0),d([(0,a.MZ)()],p.prototype,"tabIdx",void 0),p=d([(0,l.E)("wui-input-text")],p)},31037:(e,t,i)=>{var o=i(48422),a=i(91427),r=i(56063),n=i(68664);const s=o.AH`
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
`;var c=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let l=class extends o.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`\n      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      `,o.qy`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};l.styles=[r.W5,r.ck,s],c([(0,a.MZ)()],l.prototype,"src",void 0),c([(0,a.MZ)()],l.prototype,"alt",void 0),c([(0,a.MZ)()],l.prototype,"size",void 0),l=c([(0,n.E)("wui-image")],l)},32971:(e,t,i)=>{i.d(t,{T:()=>p});var o=i(80971),a=i(27165),r=i(64720);class n{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class s{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}}var c=i(39341);const l=e=>!(0,a.sO)(e)&&"function"==typeof e.then,u=1073741823;class d extends r.Kq{constructor(){super(...arguments),this._$Cwt=u,this._$Cbt=[],this._$CK=new n(this),this._$CX=new s}render(...e){return e.find(e=>!l(e))??o.c0}update(e,t){const i=this._$Cbt;let a=i.length;this._$Cbt=t;const r=this._$CK,n=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){const o=t[e];if(!l(o))return this._$Cwt=e,o;e<a&&o===i[e]||(this._$Cwt=u,a=0,Promise.resolve(o).then(async e=>{for(;n.get();)await n.get();const t=r.deref();if(void 0!==t){const i=t._$Cbt.indexOf(o);i>-1&&i<t._$Cwt&&(t._$Cwt=i,t.setValue(e))}}))}return o.c0}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const p=(0,c.u$)(d)},33165:(e,t,i)=>{var o=i(48422),a=i(91427),r=i(56063),n=i(71686),s=i(68664);const c=o.AH`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var l=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let u=class extends o.WF{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&n.Z.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&n.Z.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&n.Z.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&n.Z.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&n.Z.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&n.Z.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&n.Z.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&n.Z.getSpacingStyles(this.margin,3)};\n    `,o.qy`<slot></slot>`}};u.styles=[r.W5,c],l([(0,a.MZ)()],u.prototype,"flexDirection",void 0),l([(0,a.MZ)()],u.prototype,"flexWrap",void 0),l([(0,a.MZ)()],u.prototype,"flexBasis",void 0),l([(0,a.MZ)()],u.prototype,"flexGrow",void 0),l([(0,a.MZ)()],u.prototype,"flexShrink",void 0),l([(0,a.MZ)()],u.prototype,"alignItems",void 0),l([(0,a.MZ)()],u.prototype,"justifyContent",void 0),l([(0,a.MZ)()],u.prototype,"columnGap",void 0),l([(0,a.MZ)()],u.prototype,"rowGap",void 0),l([(0,a.MZ)()],u.prototype,"gap",void 0),l([(0,a.MZ)()],u.prototype,"padding",void 0),l([(0,a.MZ)()],u.prototype,"margin",void 0),u=l([(0,s.E)("wui-flex")],u)},37498:(e,t,i)=>{i(59481)},38991:(e,t,i)=>{var o=i(48422),a=i(91427),r=i(39168),n=(i(82207),i(56063)),s=i(68664);const c=o.AH`
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
`;var l=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let u=class extends o.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return o.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,r.J)(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};u.styles=[n.W5,n.fD,c],l([(0,a.MZ)()],u.prototype,"tabIdx",void 0),l([(0,a.MZ)({type:Boolean})],u.prototype,"disabled",void 0),l([(0,a.MZ)()],u.prototype,"color",void 0),u=l([(0,s.E)("wui-link")],u)},39168:(e,t,i)=>{i.d(t,{J:()=>a});var o=i(80971);const a=e=>e??o.s6},39341:(e,t,i)=>{i.d(t,{OA:()=>o,WL:()=>r,u$:()=>a});const o={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},a=e=>(...t)=>({_$litDirective$:e,values:t});class r{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},43508:(e,t,i)=>{i(33165)},46860:(e,t,i)=>{var o=i(48422),a=i(91427),r=(i(59481),i(31037),i(82207),i(33165),i(56063)),n=i(71686),s=i(68664);const c=o.AH`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var l=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let u=class extends o.WF{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return o.qy`
      <button data-clickable=${String(this.clickable)}>
        <wui-flex gap="s" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="spaceBetween">
            <wui-text variant="paragraph-500" color="fg-100">${this.tokenName}</wui-text>
            <wui-text variant="small-400" color="fg-200">
              ${n.Z.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-text variant="paragraph-500" color="fg-100">$${this.tokenValue.toFixed(2)}</wui-text>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?o.qy`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:o.qy`<wui-icon name="coinPlaceholder" color="fg-100"></wui-icon>`}};u.styles=[r.W5,r.fD,c],l([(0,a.MZ)()],u.prototype,"tokenName",void 0),l([(0,a.MZ)()],u.prototype,"tokenImageUrl",void 0),l([(0,a.MZ)({type:Number})],u.prototype,"tokenValue",void 0),l([(0,a.MZ)()],u.prototype,"tokenAmount",void 0),l([(0,a.MZ)()],u.prototype,"tokenCurrency",void 0),l([(0,a.MZ)({type:Boolean})],u.prototype,"clickable",void 0),u=l([(0,s.E)("wui-list-token")],u)},49048:(e,t,i)=>{var o=i(48422),a=i(91427),r=(i(82207),i(56063)),n=i(68664);const s=o.AH`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-color-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
    transition: background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color;
  }
`;var c=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let l=class extends o.WF{constructor(){super(...arguments),this.text=""}render(){return o.qy`${this.template()}`}template(){return this.text?o.qy`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};l.styles=[r.W5,s],c([(0,a.MZ)()],l.prototype,"text",void 0),l=c([(0,n.E)("wui-separator")],l)},50409:(e,t,i)=>{var o=i(48422),a=i(91427),r=(i(59481),i(56063)),n=i(68664);const s=o.AH`
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
`;var c=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let l=class extends o.WF{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,t="lg"===this.size,i="xl"===this.size,a=t?"12%":"16%",r=t?"xxs":i?"s":"3xl",n="gray"===this.background,s="opaque"===this.background,c="accent-100"===this.backgroundColor&&s||"success-100"===this.backgroundColor&&s||"error-100"===this.backgroundColor&&s||"inverse-100"===this.backgroundColor&&s;let l=`var(--wui-color-${this.backgroundColor})`;return c?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:n&&(l=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${l};\n       --local-bg-mix: ${c||n?"100%":a};\n       --local-border-radius: var(--wui-border-radius-${r});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,o.qy` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};l.styles=[r.W5,r.fD,s],c([(0,a.MZ)()],l.prototype,"size",void 0),c([(0,a.MZ)()],l.prototype,"backgroundColor",void 0),c([(0,a.MZ)()],l.prototype,"iconColor",void 0),c([(0,a.MZ)()],l.prototype,"iconSize",void 0),c([(0,a.MZ)()],l.prototype,"background",void 0),c([(0,a.MZ)({type:Boolean})],l.prototype,"border",void 0),c([(0,a.MZ)()],l.prototype,"borderColor",void 0),c([(0,a.MZ)()],l.prototype,"icon",void 0),l=c([(0,n.E)("wui-icon-box")],l)},52206:(e,t,i)=>{i(50409)},59481:(e,t,i)=>{var o=i(48422),a=i(91427),r=i(32971);const n=new class{constructor(){this.cache=new Map}set(e,t){this.cache.set(e,t)}get(e){return this.cache.get(e)}has(e){return this.cache.has(e)}delete(e){this.cache.delete(e)}clear(){this.cache.clear()}};var s=i(56063),c=i(68664);const l=o.AH`
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
`;var u=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const d={add:async()=>(await i.e(8186).then(i.bind(i,88186))).addSvg,allWallets:async()=>(await i.e(9569).then(i.bind(i,39569))).allWalletsSvg,arrowBottomCircle:async()=>(await i.e(5995).then(i.bind(i,25995))).arrowBottomCircleSvg,appStore:async()=>(await i.e(3774).then(i.bind(i,3774))).appStoreSvg,apple:async()=>(await i.e(5929).then(i.bind(i,15929))).appleSvg,arrowBottom:async()=>(await i.e(1198).then(i.bind(i,11198))).arrowBottomSvg,arrowLeft:async()=>(await i.e(9760).then(i.bind(i,29760))).arrowLeftSvg,arrowRight:async()=>(await i.e(4659).then(i.bind(i,94659))).arrowRightSvg,arrowTop:async()=>(await i.e(3690).then(i.bind(i,43690))).arrowTopSvg,bank:async()=>(await i.e(627).then(i.bind(i,80627))).bankSvg,browser:async()=>(await i.e(6913).then(i.bind(i,16913))).browserSvg,card:async()=>(await i.e(1327).then(i.bind(i,1327))).cardSvg,checkmark:async()=>(await i.e(1480).then(i.bind(i,31480))).checkmarkSvg,checkmarkBold:async()=>(await i.e(486).then(i.bind(i,70486))).checkmarkBoldSvg,chevronBottom:async()=>(await i.e(3928).then(i.bind(i,33928))).chevronBottomSvg,chevronLeft:async()=>(await i.e(3682).then(i.bind(i,23682))).chevronLeftSvg,chevronRight:async()=>(await i.e(7701).then(i.bind(i,17701))).chevronRightSvg,chevronTop:async()=>(await i.e(2592).then(i.bind(i,62592))).chevronTopSvg,chromeStore:async()=>(await i.e(1903).then(i.bind(i,1903))).chromeStoreSvg,clock:async()=>(await i.e(6027).then(i.bind(i,76027))).clockSvg,close:async()=>(await i.e(7545).then(i.bind(i,17545))).closeSvg,compass:async()=>(await i.e(2097).then(i.bind(i,2097))).compassSvg,coinPlaceholder:async()=>(await i.e(9919).then(i.bind(i,79919))).coinPlaceholderSvg,copy:async()=>(await i.e(340).then(i.bind(i,90340))).copySvg,cursor:async()=>(await i.e(9119).then(i.bind(i,29119))).cursorSvg,cursorTransparent:async()=>(await i.e(1944).then(i.bind(i,1944))).cursorTransparentSvg,desktop:async()=>(await i.e(3277).then(i.bind(i,73277))).desktopSvg,disconnect:async()=>(await i.e(2923).then(i.bind(i,2923))).disconnectSvg,discord:async()=>(await i.e(6977).then(i.bind(i,6977))).discordSvg,etherscan:async()=>(await i.e(3092).then(i.bind(i,73092))).etherscanSvg,extension:async()=>(await i.e(5712).then(i.bind(i,55712))).extensionSvg,externalLink:async()=>(await i.e(7563).then(i.bind(i,57563))).externalLinkSvg,facebook:async()=>(await i.e(8865).then(i.bind(i,98865))).facebookSvg,farcaster:async()=>(await i.e(4132).then(i.bind(i,74132))).farcasterSvg,filters:async()=>(await i.e(9222).then(i.bind(i,69222))).filtersSvg,github:async()=>(await i.e(9178).then(i.bind(i,89178))).githubSvg,google:async()=>(await i.e(3106).then(i.bind(i,13106))).googleSvg,helpCircle:async()=>(await i.e(4691).then(i.bind(i,34691))).helpCircleSvg,image:async()=>(await i.e(9652).then(i.bind(i,99652))).imageSvg,id:async()=>(await i.e(1636).then(i.bind(i,11636))).idSvg,infoCircle:async()=>(await i.e(298).then(i.bind(i,60298))).infoCircleSvg,lightbulb:async()=>(await i.e(54).then(i.bind(i,20054))).lightbulbSvg,mail:async()=>(await i.e(9930).then(i.bind(i,39930))).mailSvg,mobile:async()=>(await i.e(2475).then(i.bind(i,12475))).mobileSvg,more:async()=>(await i.e(6856).then(i.bind(i,36856))).moreSvg,networkPlaceholder:async()=>(await i.e(3387).then(i.bind(i,73387))).networkPlaceholderSvg,nftPlaceholder:async()=>(await i.e(3472).then(i.bind(i,53472))).nftPlaceholderSvg,off:async()=>(await i.e(4668).then(i.bind(i,54668))).offSvg,playStore:async()=>(await i.e(7755).then(i.bind(i,7755))).playStoreSvg,plus:async()=>(await i.e(2945).then(i.bind(i,22945))).plusSvg,qrCode:async()=>(await i.e(4034).then(i.bind(i,44034))).qrCodeIcon,recycleHorizontal:async()=>(await i.e(5045).then(i.bind(i,85045))).recycleHorizontalSvg,refresh:async()=>(await i.e(4290).then(i.bind(i,44290))).refreshSvg,search:async()=>(await i.e(3333).then(i.bind(i,73333))).searchSvg,send:async()=>(await i.e(8535).then(i.bind(i,18535))).sendSvg,swapHorizontal:async()=>(await i.e(9586).then(i.bind(i,49586))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await i.e(7773).then(i.bind(i,17773))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await i.e(9325).then(i.bind(i,9325))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await i.e(7562).then(i.bind(i,47562))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await i.e(2168).then(i.bind(i,82168))).swapVerticalSvg,telegram:async()=>(await i.e(8166).then(i.bind(i,88166))).telegramSvg,threeDots:async()=>(await i.e(1874).then(i.bind(i,51874))).threeDotsSvg,twitch:async()=>(await i.e(7218).then(i.bind(i,17218))).twitchSvg,twitter:async()=>(await i.e(3489).then(i.bind(i,93489))).xSvg,twitterIcon:async()=>(await i.e(9023).then(i.bind(i,69023))).twitterIconSvg,verify:async()=>(await i.e(2120).then(i.bind(i,52120))).verifySvg,verifyFilled:async()=>(await i.e(5337).then(i.bind(i,45337))).verifyFilledSvg,wallet:async()=>(await i.e(440).then(i.bind(i,60440))).walletSvg,walletConnect:async()=>(await i.e(3300).then(i.bind(i,33300))).walletConnectSvg,walletConnectLightBrown:async()=>(await i.e(3300).then(i.bind(i,33300))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await i.e(3300).then(i.bind(i,33300))).walletConnectBrownSvg,walletPlaceholder:async()=>(await i.e(5556).then(i.bind(i,25556))).walletPlaceholderSvg,warningCircle:async()=>(await i.e(7910).then(i.bind(i,87910))).warningCircleSvg,x:async()=>(await i.e(3489).then(i.bind(i,93489))).xSvg,info:async()=>(await i.e(917).then(i.bind(i,10917))).infoSvg,exclamationTriangle:async()=>(await i.e(2557).then(i.bind(i,32557))).exclamationTriangleSvg,reown:async()=>(await i.e(1864).then(i.bind(i,41864))).reownSvg};let p=class extends o.WF{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n      --local-aspect-ratio: ${this.aspectRatio}\n    `,o.qy`${(0,r.T)(async function(e){if(n.has(e))return n.get(e);const t=(d[e]??d.copy)();return n.set(e,t),t}(this.name),o.qy`<div class="fallback"></div>`)}`}};p.styles=[s.W5,s.ck,l],u([(0,a.MZ)()],p.prototype,"size",void 0),u([(0,a.MZ)()],p.prototype,"name",void 0),u([(0,a.MZ)()],p.prototype,"color",void 0),u([(0,a.MZ)()],p.prototype,"aspectRatio",void 0),p=u([(0,c.E)("wui-icon")],p)},59936:(e,t,i)=>{var o=i(48422),a=i(91427),r=(i(31037),i(82207),i(56063)),n=i(68664);i(50409);const s=o.AH`
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
`;var c=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let l=class extends o.WF{constructor(){super(...arguments),this.text=""}render(){return o.qy`
      <button>
        ${this.tokenTemplate()}
        <wui-text variant="paragraph-600" color="fg-100">${this.text}</wui-text>
      </button>
    `}tokenTemplate(){return this.imageSrc?o.qy`<wui-image src=${this.imageSrc}></wui-image>`:o.qy`
      <wui-icon-box
        size="sm"
        iconColor="fg-200"
        backgroundColor="fg-300"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};l.styles=[r.W5,r.fD,s],c([(0,a.MZ)()],l.prototype,"imageSrc",void 0),c([(0,a.MZ)()],l.prototype,"text",void 0),l=c([(0,n.E)("wui-token-button")],l)},62907:(e,t,i)=>{i(30990)},63718:(e,t,i)=>{var o=i(48422),a=i(91427),r=(i(20766),i(82207),i(56063)),n=i(68664);const s=o.AH`
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
`;var c=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const l={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},u={lg:"paragraph-600",md:"small-600"},d={lg:"md",md:"md"};let p=class extends o.WF{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`\n    --local-width: ${this.fullWidth?"100%":"auto"};\n    --local-opacity-100: ${this.loading?0:1};\n    --local-opacity-000: ${this.loading?1:0};\n    --local-border-radius: var(--wui-border-radius-${this.borderRadius});\n    `;const e=this.textVariant??u[this.size];return o.qy`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const e=d[this.size],t=this.disabled?l.disabled:l[this.variant];return o.qy`<wui-loading-spinner color=${t} size=${e}></wui-loading-spinner>`}return o.qy``}};p.styles=[r.W5,r.fD,s],c([(0,a.MZ)()],p.prototype,"size",void 0),c([(0,a.MZ)({type:Boolean})],p.prototype,"disabled",void 0),c([(0,a.MZ)({type:Boolean})],p.prototype,"fullWidth",void 0),c([(0,a.MZ)({type:Boolean})],p.prototype,"loading",void 0),c([(0,a.MZ)()],p.prototype,"variant",void 0),c([(0,a.MZ)({type:Boolean})],p.prototype,"hasIconLeft",void 0),c([(0,a.MZ)({type:Boolean})],p.prototype,"hasIconRight",void 0),c([(0,a.MZ)()],p.prototype,"borderRadius",void 0),c([(0,a.MZ)()],p.prototype,"textVariant",void 0),p=c([(0,n.E)("wui-button")],p)},64720:(e,t,i)=>{i.d(t,{Kq:()=>d});var o=i(27165),a=i(39341);const r=(e,t)=>{const i=e._$AN;if(void 0===i)return!1;for(const e of i)e._$AO?.(t,!1),r(e,t);return!0},n=e=>{let t,i;do{if(void 0===(t=e._$AM))break;i=t._$AN,i.delete(e),e=t}while(0===i?.size)},s=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),u(t)}};function c(e){void 0!==this._$AN?(n(this),this._$AM=e,s(this)):this._$AM=e}function l(e,t=!1,i=0){const o=this._$AH,a=this._$AN;if(void 0!==a&&0!==a.size)if(t)if(Array.isArray(o))for(let e=i;e<o.length;e++)r(o[e],!1),n(o[e]);else null!=o&&(r(o,!1),n(o));else r(this,e)}const u=e=>{e.type==a.OA.CHILD&&(e._$AP??=l,e._$AQ??=c)};class d extends a.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),s(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(r(this,e),n(this))}setValue(e){if((0,o.Rt)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}},69623:(e,t,i)=>{i.d(t,{M:()=>n});var o=i(56451);const a={attribute:!0,type:String,converter:o.W3,reflect:!1,hasChanged:o.Ec},r=(e=a,t,i)=>{const{kind:o,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),n.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const a=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,a,e)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){const{name:o}=i;return function(i){const a=this[o];t.call(this,i),this.requestUpdate(o,a,e)}}throw Error("Unsupported decorator location: "+o)};function n(e){return(t,i)=>"object"==typeof i?r(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}},73540:(e,t,i)=>{i.d(t,{GN:()=>P});var o=i(44822),a=i(36517),r=i(2973),n=i(76539),s=i(98096),c=i(13947),l=i(92999),u=i(4539),d=i(90101),p=i(19220),h=i(52819),g=i(90336);const w={async getTokenList(){const e=h.W.state.activeCaipNetwork,t=await p.T.fetchSwapTokens({chainId:e?.caipNetworkId});return t?.tokens?.map(e=>({...e,eip2612:!1,quantity:{decimals:"0",numeric:"0"},price:0,value:0}))||[]},async fetchGasPrice(){const e=h.W.state.activeCaipNetwork;if(!e)return null;try{if("solana"===e.chainNamespace){const e=(await(g.x?.estimateGas({chainNamespace:"solana"})))?.toString();return{standard:e,fast:e,instant:e}}return await p.T.fetchGasPrice({chainId:e.caipNetworkId})}catch{return null}},async fetchSwapAllowance({tokenAddress:e,userAddress:t,sourceTokenAmount:i,sourceTokenDecimals:o}){const a=await p.T.fetchSwapAllowance({tokenAddress:e,userAddress:t});if(a?.allowance&&i&&o){const e=g.x.parseUnits(i,o)||0;return BigInt(a.allowance)>=e}return!1},async getMyTokensWithBalance(e){const t=d.U.state.address,i=h.W.state.activeCaipNetwork;if(!t||!i)return[];const o=(await p.T.getBalance(t,i.caipNetworkId,e)).balances.filter(e=>"0"!==e.quantity.decimals);return d.U.setTokenBalance(o,h.W.state.activeChain),this.mapBalancesToSwapTokens(o)},mapBalancesToSwapTokens:e=>e?.map(e=>({...e,address:e?.address?e.address:h.W.getActiveNetworkTokenAddress(),decimals:parseInt(e.quantity.decimals,10),logoUri:e.iconUrl,eip2612:!1}))||[]},v={getGasPriceInEther:(e,t)=>Number(t*e)/1e18,getGasPriceInUSD(e,t,i){const o=v.getGasPriceInEther(t,i);return r.S.bigNumber(e).times(o).toNumber()},getPriceImpact({sourceTokenAmount:e,sourceTokenPriceInUSD:t,toTokenPriceInUSD:i,toTokenAmount:o}){const a=r.S.bigNumber(e).times(t),n=r.S.bigNumber(o).times(i);return a.minus(n).div(a).times(100).toNumber()},getMaxSlippage(e,t){const i=r.S.bigNumber(e).div(100);return r.S.multiply(t,i).toNumber()},getProviderFee:(e,t=.0085)=>r.S.bigNumber(e).times(t).toString(),isInsufficientNetworkTokenForGas(e,t){const i=t||"0";return!!r.S.bigNumber(e).eq(0)||r.S.bigNumber(r.S.bigNumber(i)).gt(e)},isInsufficientSourceTokenForSwap(e,t,i){const o=i?.find(e=>e.address===t)?.quantity?.numeric;return r.S.bigNumber(o||"0").lt(e)},getToTokenAmount({sourceToken:e,toToken:t,sourceTokenPrice:i,toTokenPrice:o,sourceTokenAmount:a}){if("0"===a)return"0";if(!e||!t)return"0";const n=e.decimals,s=i,c=t.decimals,l=o;if(l<=0)return"0";const u=r.S.bigNumber(a).times(.0085),d=r.S.bigNumber(a).minus(u).times(r.S.bigNumber(10).pow(n)),p=r.S.bigNumber(s).div(l),h=n-c;return d.times(p).div(r.S.bigNumber(10).pow(h)).div(r.S.bigNumber(10).pow(c)).toFixed(c).toString()}};var f=i(28621),m=i(44340),b=i(30413),k=i(34325),y=i(33461),x=i(7380);const T=15e4;Error;const S={initializing:!1,initialized:!1,loadingPrices:!1,loadingQuote:!1,loadingApprovalTransaction:!1,loadingBuildTransaction:!1,loadingTransaction:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:c.oU.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:"0",gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0},A=(0,o.BX)(S),$={state:A,subscribe:e=>(0,o.B1)(A,()=>e(A)),subscribeKey:(e,t)=>(0,a.u$)(A,e,t),getParams(){const e=h.W.state.activeCaipAddress,t=h.W.state.activeChain,i=l.w.getPlainAddress(e),o=h.W.getActiveNetworkTokenAddress(),a=b.a.getConnectorId(t);if(!i)throw new Error("No address found to swap the tokens from.");const s=!A.toToken?.address||!A.toToken?.decimals,c=!A.sourceToken?.address||!A.sourceToken?.decimals||!r.S.bigNumber(A.sourceTokenAmount).gt(0),u=!A.sourceTokenAmount;return{networkAddress:o,fromAddress:i,fromCaipAddress:e,sourceTokenAddress:A.sourceToken?.address,toTokenAddress:A.toToken?.address,toTokenAmount:A.toTokenAmount,toTokenDecimals:A.toToken?.decimals,sourceTokenAmount:A.sourceTokenAmount,sourceTokenDecimals:A.sourceToken?.decimals,invalidToToken:s,invalidSourceToken:c,invalidSourceTokenAmount:u,availableToSwap:e&&!s&&!c&&!u,isAuthConnector:a===n.o.CONNECTOR_ID.AUTH}},setSourceToken(e){if(!e)return A.sourceToken=e,A.sourceTokenAmount="",void(A.sourceTokenPriceInUSD=0);A.sourceToken=e,P.setTokenPrice(e.address,"sourceToken")},setSourceTokenAmount(e){A.sourceTokenAmount=e},setToToken(e){if(!e)return A.toToken=e,A.toTokenAmount="",void(A.toTokenPriceInUSD=0);A.toToken=e,P.setTokenPrice(e.address,"toToken")},setToTokenAmount(e){A.toTokenAmount=e?r.S.formatNumberToLocalString(e,6):""},async setTokenPrice(e,t){let i=A.tokensPriceMap[e]||0;i||(A.loadingPrices=!0,i=await P.getAddressPrice(e)),"sourceToken"===t?A.sourceTokenPriceInUSD=i:"toToken"===t&&(A.toTokenPriceInUSD=i),A.loadingPrices&&(A.loadingPrices=!1),P.getParams().availableToSwap&&P.swapTokens()},switchTokens(){if(A.initializing||!A.initialized)return;const e=A.toToken?{...A.toToken}:void 0,t=A.sourceToken?{...A.sourceToken}:void 0,i=e&&""===A.toTokenAmount?"1":A.toTokenAmount;P.setSourceToken(e),P.setToToken(t),P.setSourceTokenAmount(i),P.setToTokenAmount(""),P.swapTokens()},resetState(){A.myTokensWithBalance=S.myTokensWithBalance,A.tokensPriceMap=S.tokensPriceMap,A.initialized=S.initialized,A.sourceToken=S.sourceToken,A.sourceTokenAmount=S.sourceTokenAmount,A.sourceTokenPriceInUSD=S.sourceTokenPriceInUSD,A.toToken=S.toToken,A.toTokenAmount=S.toTokenAmount,A.toTokenPriceInUSD=S.toTokenPriceInUSD,A.networkPrice=S.networkPrice,A.networkTokenSymbol=S.networkTokenSymbol,A.networkBalanceInUSD=S.networkBalanceInUSD,A.inputError=S.inputError,A.myTokensWithBalance=S.myTokensWithBalance},resetValues(){const{networkAddress:e}=P.getParams(),t=A.tokens?.find(t=>t.address===e);P.setSourceToken(t),P.setToToken(void 0)},getApprovalLoadingState:()=>A.loadingApprovalTransaction,clearError(){A.transactionError=void 0},async initializeState(){if(!A.initializing){if(A.initializing=!0,!A.initialized)try{await P.fetchTokens(),A.initialized=!0}catch(e){A.initialized=!1,x.P.showError("Failed to initialize swap"),y.I.goBack()}A.initializing=!1}},async fetchTokens(){const{networkAddress:e}=P.getParams();await P.getTokenList(),await P.getNetworkTokenPrice(),await P.getMyTokensWithBalance();const t=A.tokens?.find(t=>t.address===e);t&&(A.networkTokenSymbol=t.symbol,P.setSourceToken(t),P.setSourceTokenAmount("1"))},async getTokenList(){const e=await w.getTokenList();A.tokens=e,A.popularTokens=e.sort((e,t)=>e.symbol<t.symbol?-1:e.symbol>t.symbol?1:0),A.suggestedTokens=e.filter(e=>!!c.oU.SWAP_SUGGESTED_TOKENS.includes(e.symbol),{})},async getAddressPrice(e){const t=A.tokensPriceMap[e];if(t)return t;const i=await p.T.fetchTokenPrice({addresses:[e]}),o=i?.fungibles||[],a=[...A.tokens||[],...A.myTokensWithBalance||[]],r=a?.find(t=>t.address===e)?.symbol,n=o.find(e=>e.symbol.toLowerCase()===r?.toLowerCase())?.price||0,s=parseFloat(n.toString());return A.tokensPriceMap[e]=s,s},async getNetworkTokenPrice(){const{networkAddress:e}=P.getParams(),t=await p.T.fetchTokenPrice({addresses:[e]}).catch(()=>(x.P.showError("Failed to fetch network token price"),{fungibles:[]})),i=t.fungibles?.[0],o=i?.price.toString()||"0";A.tokensPriceMap[e]=parseFloat(o),A.networkTokenSymbol=i?.symbol||"",A.networkPrice=o},async getMyTokensWithBalance(e){const t=await u.t.getMyTokensWithBalance(e),i=u.t.mapBalancesToSwapTokens(t);i&&(await P.getInitialGasPrice(),P.setBalances(i))},setBalances(e){const{networkAddress:t}=P.getParams(),i=h.W.state.activeCaipNetwork;if(!i)return;const o=e.find(e=>e.address===t);e.forEach(e=>{A.tokensPriceMap[e.address]=e.price||0}),A.myTokensWithBalance=e.filter(e=>e.address.startsWith(i.caipNetworkId)),A.networkBalanceInUSD=o?r.S.multiply(o.quantity.numeric,o.price).toString():"0"},async getInitialGasPrice(){const e=await w.fetchGasPrice();if(!e)return{gasPrice:null,gasPriceInUSD:null};if("solana"===h.W.state?.activeCaipNetwork?.chainNamespace)return A.gasFee=e.standard??"0",A.gasPriceInUSD=r.S.multiply(e.standard,A.networkPrice).div(1e9).toNumber(),{gasPrice:BigInt(A.gasFee),gasPriceInUSD:Number(A.gasPriceInUSD)};{const t=e.standard??"0",i=BigInt(t),o=BigInt(T),a=v.getGasPriceInUSD(A.networkPrice,o,i);return A.gasFee=t,A.gasPriceInUSD=a,{gasPrice:i,gasPriceInUSD:a}}},async swapTokens(){const e=d.U.state.address,t=A.sourceToken,i=A.toToken,o=r.S.bigNumber(A.sourceTokenAmount).gt(0);if(o||P.setToTokenAmount(""),!i||!t||A.loadingPrices||!o)return;A.loadingQuote=!0;const a=r.S.bigNumber(A.sourceTokenAmount).times(10**t.decimals).round(0);try{const o=await p.T.fetchSwapQuote({userAddress:e,from:t.address,to:i.address,gasPrice:A.gasFee,amount:a.toString()});A.loadingQuote=!1;const n=o?.quotes?.[0]?.toAmount;if(!n)return void m.h.open({shortMessage:"Incorrect amount",longMessage:"Please enter a valid amount"},"error");const s=r.S.bigNumber(n).div(10**i.decimals).toString();P.setToTokenAmount(s),P.hasInsufficientToken(A.sourceTokenAmount,t.address)?A.inputError="Insufficient balance":(A.inputError=void 0,P.setTransactionDetails())}catch(e){A.loadingQuote=!1,A.inputError="Insufficient balance"}},async getTransaction(){const{fromCaipAddress:e,availableToSwap:t}=P.getParams(),i=A.sourceToken,o=A.toToken;if(e&&t&&i&&o&&!A.loadingQuote)try{let t;return A.loadingBuildTransaction=!0,t=await w.fetchSwapAllowance({userAddress:e,tokenAddress:i.address,sourceTokenAmount:A.sourceTokenAmount,sourceTokenDecimals:i.decimals})?await P.createSwapTransaction():await P.createAllowanceTransaction(),A.loadingBuildTransaction=!1,A.fetchError=!1,t}catch(e){return y.I.goBack(),x.P.showError("Failed to check allowance"),A.loadingBuildTransaction=!1,A.approvalTransaction=void 0,A.swapTransaction=void 0,void(A.fetchError=!0)}},async createAllowanceTransaction(){const{fromCaipAddress:e,sourceTokenAddress:t,toTokenAddress:i}=P.getParams();if(e&&i){if(!t)throw new Error("createAllowanceTransaction - No source token address found.");try{const o=await p.T.generateApproveCalldata({from:t,to:i,userAddress:e}),a={data:o.tx.data,to:l.w.getPlainAddress(o.tx.from),gasPrice:BigInt(o.tx.eip155.gasPrice),value:BigInt(o.tx.value),toAmount:A.toTokenAmount};return A.swapTransaction=void 0,A.approvalTransaction={data:a.data,to:a.to,gasPrice:a.gasPrice,value:a.value,toAmount:a.toAmount},{data:a.data,to:a.to,gasPrice:a.gasPrice,value:a.value,toAmount:a.toAmount}}catch(e){return y.I.goBack(),x.P.showError("Failed to create approval transaction"),A.approvalTransaction=void 0,A.swapTransaction=void 0,void(A.fetchError=!0)}}},async createSwapTransaction(){const{networkAddress:e,fromCaipAddress:t,sourceTokenAmount:i}=P.getParams(),o=A.sourceToken,a=A.toToken;if(!(t&&i&&o&&a))return;const r=g.x.parseUnits(i,o.decimals)?.toString();try{const i=await p.T.generateSwapCalldata({userAddress:t,from:o.address,to:a.address,amount:r,disableEstimate:!0}),n=o.address===e,s=BigInt(i.tx.eip155.gas),c=BigInt(i.tx.eip155.gasPrice),u={data:i.tx.data,to:l.w.getPlainAddress(i.tx.to),gas:s,gasPrice:c,value:n?BigInt(r??"0"):BigInt("0"),toAmount:A.toTokenAmount};return A.gasPriceInUSD=v.getGasPriceInUSD(A.networkPrice,s,c),A.approvalTransaction=void 0,A.swapTransaction=u,u}catch(e){return y.I.goBack(),x.P.showError("Failed to create transaction"),A.approvalTransaction=void 0,A.swapTransaction=void 0,void(A.fetchError=!0)}},async sendTransactionForApproval(e){const{fromAddress:t,isAuthConnector:i}=P.getParams();A.loadingApprovalTransaction=!0;const o="Approve limit increase in your wallet";i?y.I.pushTransactionStack({onSuccess(){x.P.showLoading(o)}}):x.P.showLoading(o);try{await g.x.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:"eip155"}),await P.swapTokens(),await P.getTransaction(),A.approvalTransaction=void 0,A.loadingApprovalTransaction=!1}catch(e){const t=e;A.transactionError=t?.shortMessage,A.loadingApprovalTransaction=!1,x.P.showError(t?.shortMessage||"Transaction error"),k.E.sendEvent({type:"track",event:"SWAP_APPROVAL_ERROR",properties:{message:t?.shortMessage||t?.message||"Unknown",network:h.W.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:P.state.sourceToken?.symbol||"",swapToToken:P.state.toToken?.symbol||"",swapFromAmount:P.state.sourceTokenAmount||"",swapToAmount:P.state.toTokenAmount||"",isSmartAccount:d.U.state.preferredAccountTypes?.eip155===s.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}},async sendTransactionForSwap(e){if(!e)return;const{fromAddress:t,toTokenAmount:i,isAuthConnector:o}=P.getParams();A.loadingTransaction=!0;const a=`Swapping ${A.sourceToken?.symbol} to ${r.S.formatNumberToLocalString(i,3)} ${A.toToken?.symbol}`,n=`Swapped ${A.sourceToken?.symbol} to ${r.S.formatNumberToLocalString(i,3)} ${A.toToken?.symbol}`;o?y.I.pushTransactionStack({onSuccess(){y.I.replace("Account"),x.P.showLoading(a),$.resetState()}}):x.P.showLoading("Confirm transaction in your wallet");try{const i=[A.sourceToken?.address,A.toToken?.address].join(","),a=await g.x.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:"eip155"});return A.loadingTransaction=!1,x.P.showSuccess(n),k.E.sendEvent({type:"track",event:"SWAP_SUCCESS",properties:{network:h.W.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:P.state.sourceToken?.symbol||"",swapToToken:P.state.toToken?.symbol||"",swapFromAmount:P.state.sourceTokenAmount||"",swapToAmount:P.state.toTokenAmount||"",isSmartAccount:d.U.state.preferredAccountTypes?.eip155===s.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),$.resetState(),o||y.I.replace("Account"),$.getMyTokensWithBalance(i),a}catch(e){const t=e;return A.transactionError=t?.shortMessage,A.loadingTransaction=!1,x.P.showError(t?.shortMessage||"Transaction error"),void k.E.sendEvent({type:"track",event:"SWAP_ERROR",properties:{message:t?.shortMessage||t?.message||"Unknown",network:h.W.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:P.state.sourceToken?.symbol||"",swapToToken:P.state.toToken?.symbol||"",swapFromAmount:P.state.sourceTokenAmount||"",swapToAmount:P.state.toTokenAmount||"",isSmartAccount:d.U.state.preferredAccountTypes?.eip155===s.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}},hasInsufficientToken:(e,t)=>v.isInsufficientSourceTokenForSwap(e,t,A.myTokensWithBalance),setTransactionDetails(){const{toTokenAddress:e,toTokenDecimals:t}=P.getParams();e&&t&&(A.gasPriceInUSD=v.getGasPriceInUSD(A.networkPrice,BigInt(A.gasFee),BigInt(T)),A.priceImpact=v.getPriceImpact({sourceTokenAmount:A.sourceTokenAmount,sourceTokenPriceInUSD:A.sourceTokenPriceInUSD,toTokenPriceInUSD:A.toTokenPriceInUSD,toTokenAmount:A.toTokenAmount}),A.maxSlippage=v.getMaxSlippage(A.slippage,A.toTokenAmount),A.providerFee=v.getProviderFee(A.sourceTokenAmount))}},P=(0,f.X)($)},79932:(e,t,i)=>{i(82207)},80659:(e,t,i)=>{i(63718)},82207:(e,t,i)=>{var o=i(48422),a=i(91427),r=i(23507),n=i(56063),s=i(68664);const c=o.AH`
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
`;var l=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let u=class extends o.WF{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,o.qy`<slot class=${(0,r.H)(e)}></slot>`}};u.styles=[n.W5,c],l([(0,a.MZ)()],u.prototype,"variant",void 0),l([(0,a.MZ)()],u.prototype,"color",void 0),l([(0,a.MZ)()],u.prototype,"align",void 0),l([(0,a.MZ)()],u.prototype,"lineClamp",void 0),u=l([(0,s.E)("wui-text")],u)},83309:(e,t,i)=>{var o=i(48422),a=i(91427),r=(i(31037),i(56063)),n=i(71686),s=i(68664);const c=o.AH`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var l=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let u=class extends o.WF{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){return this.style.cssText=`\n    --local-width: var(--wui-icon-box-size-${this.size});\n    --local-height: var(--wui-icon-box-size-${this.size});\n    `,o.qy`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",o.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=n.Z.generateAvatarColors(this.address);return this.style.cssText+=`\n ${e}`,null}return this.dataset.variant="default",null}};u.styles=[r.W5,c],l([(0,a.MZ)()],u.prototype,"imageSrc",void 0),l([(0,a.MZ)()],u.prototype,"alt",void 0),l([(0,a.MZ)()],u.prototype,"address",void 0),l([(0,a.MZ)()],u.prototype,"size",void 0),u=l([(0,s.E)("wui-avatar")],u)},91427:(e,t,i)=>{i.d(t,{MZ:()=>o.M,wk:()=>a.w});var o=i(69623),a=i(4537)},92672:(e,t,i)=>{i.r(t),i.d(t,{W3mSendSelectTokenView:()=>z,W3mWalletSendPreviewView:()=>K,W3mWalletSendView:()=>C});var o=i(48422),a=i(91427),r=i(98558),n=i(73540),s=i(33461),c=i(92999),l=i(52819),u=i(72470),d=(i(80659),i(43508),i(52206),i(379)),p=i(90336);i(37498),i(79932);const h=o.AH`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: var(--wui-color-fg-100);
    margin: 0 var(--wui-spacing-xs);
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  .paste {
    display: inline-flex;
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: var(--w3m-font-family);
    font-size: var(--wui-font-size-medium);
    font-style: normal;
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    letter-spacing: var(--wui-letter-spacing-medium);
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`;var g=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let w=class extends o.WF{constructor(){super(...arguments),this.inputElementRef=(0,d._)(),this.instructionElementRef=(0,d._)(),this.instructionHidden=Boolean(this.value),this.pasting=!1,this.onDebouncedSearch=c.w.debounce(async e=>{if(!e.length)return void this.setReceiverAddress("");const t=l.W.state.activeChain;if(c.w.isAddress(e,t))this.setReceiverAddress(e);else try{const t=await p.x.getEnsAddress(e);if(t){r.R.setReceiverProfileName(e),r.R.setReceiverAddress(t);const i=await p.x.getEnsAvatar(e);r.R.setReceiverProfileImageUrl(i||void 0)}}catch(t){this.setReceiverAddress(e)}finally{r.R.setLoading(!1)}})}firstUpdated(){this.value&&(this.instructionHidden=!0),this.checkHidden()}render(){return o.qy` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="4xs"
      .padding=${["2xl","l","xl","l"]}
    >
      <wui-text
        ${(0,d.K)(this.instructionElementRef)}
        class="instruction"
        color="fg-300"
        variant="medium-400"
      >
        Type or
        <wui-button
          class="paste"
          size="md"
          variant="neutral"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        spellcheck="false"
        ?disabled=${!this.instructionHidden}
        ${(0,d.K)(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${this.value??""}
        autocomplete="off"
      >
${this.value??""}</textarea
      >
    </wui-flex>`}async focusInput(){this.instructionElementRef.value&&(this.instructionHidden=!0,await this.toggleInstructionFocus(!1),this.instructionElementRef.value.style.pointerEvents="none",this.inputElementRef.value?.focus(),this.inputElementRef.value&&(this.inputElementRef.value.selectionStart=this.inputElementRef.value.selectionEnd=this.inputElementRef.value.value.length))}async focusInstruction(){this.instructionElementRef.value&&(this.instructionHidden=!1,await this.toggleInstructionFocus(!0),this.instructionElementRef.value.style.pointerEvents="auto",this.inputElementRef.value?.blur())}async toggleInstructionFocus(e){this.instructionElementRef.value&&await this.instructionElementRef.value.animate([{opacity:e?0:1},{opacity:e?1:0}],{duration:100,easing:"ease",fill:"forwards"}).finished}onBoxClick(){this.value||this.instructionHidden||this.focusInput()}onBlur(){this.value||!this.instructionHidden||this.pasting||this.focusInstruction()}checkHidden(){this.instructionHidden&&this.focusInput()}async onPasteClick(){this.pasting=!0;const e=await navigator.clipboard.readText();r.R.setReceiverAddress(e),this.focusInput()}onInputChange(e){const t=e.target;this.pasting=!1,this.value=e.target?.value,t.value&&!this.instructionHidden&&this.focusInput(),r.R.setLoading(!0),this.onDebouncedSearch(t.value)}setReceiverAddress(e){r.R.setReceiverAddress(e),r.R.setReceiverProfileName(void 0),r.R.setReceiverProfileImageUrl(void 0),r.R.setLoading(!1)}};w.styles=h,g([(0,a.MZ)()],w.prototype,"value",void 0),g([(0,a.wk)()],w.prototype,"instructionHidden",void 0),g([(0,a.wk)()],w.prototype,"pasting",void 0),w=g([(0,u.EM)("w3m-input-address")],w);var v=i(2973),f=i(98615),m=i(56063),b=i(68664);const k=o.AH`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    background: transparent;
    width: 100%;
    height: auto;
    font-family: var(--wui-font-family);
    color: var(--wui-color-fg-100);

    font-feature-settings: 'case' on;
    font-size: 32px;
    font-weight: var(--wui-font-weight-light);
    caret-color: var(--wui-color-accent-100);
    line-height: 130%;
    letter-spacing: -1.28px;
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

  input::placeholder {
    color: var(--wui-color-fg-275);
  }
`;var y=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let x=class extends o.WF{constructor(){super(...arguments),this.inputElementRef=(0,d._)(),this.disabled=!1,this.value="",this.placeholder="0"}render(){return this.inputElementRef?.value&&this.value&&(this.inputElementRef.value.value=this.value),o.qy`<input
      ${(0,d.K)(this.inputElementRef)}
      type="text"
      inputmode="decimal"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    /> `}dispatchInputChangeEvent(e){const t=e.data;if(t&&this.inputElementRef?.value)if(","===t){const e=this.inputElementRef.value.value.replace(",",".");this.inputElementRef.value.value=e,this.value=`${this.value}${e}`}else f.Ky.test(t)||(this.inputElementRef.value.value=this.value.replace(new RegExp(t.replace(f.PG,"\\$&"),"gu"),""));this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};x.styles=[m.W5,m.fD,k],y([(0,a.MZ)({type:Boolean})],x.prototype,"disabled",void 0),y([(0,a.MZ)({type:String})],x.prototype,"value",void 0),y([(0,a.MZ)({type:String})],x.prototype,"placeholder",void 0),x=y([(0,b.E)("wui-input-amount")],x),i(38991),i(59936);const T=o.AH`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  wui-input-amount {
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

  .totalValue {
    width: 100%;
  }
`;var S=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let A=class extends o.WF{render(){return o.qy` <wui-flex
      flexDirection="column"
      gap="4xs"
      .padding=${["xl","s","l","l"]}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${!this.token&&!0}
          .value=${this.sendTokenAmount?String(this.sendTokenAmount):""}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      <wui-flex alignItems="center" justifyContent="space-between">
        ${this.sendValueTemplate()}
        <wui-flex alignItems="center" gap="4xs" justifyContent="flex-end">
          ${this.maxAmountTemplate()} ${this.actionTemplate()}
        </wui-flex>
      </wui-flex>
    </wui-flex>`}buttonTemplate(){return this.token?o.qy`<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
      >
      </wui-token-button>`:o.qy`<wui-button
      size="md"
      variant="accent"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`}handleSelectButtonClick(){s.I.push("WalletSendSelectToken")}sendValueTemplate(){if(this.token&&this.sendTokenAmount){const e=this.token.price*this.sendTokenAmount;return o.qy`<wui-text class="totalValue" variant="small-400" color="fg-200"
        >${e?`$${u.Zv.formatNumberToLocalString(e,2)}`:"Incorrect value"}</wui-text
      >`}return null}maxAmountTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?o.qy` <wui-text variant="small-400" color="error-100">
          ${u.Zv.roundNumber(Number(this.token.quantity.numeric),6,5)}
        </wui-text>`:o.qy` <wui-text variant="small-400" color="fg-200">
        ${u.Zv.roundNumber(Number(this.token.quantity.numeric),6,5)}
      </wui-text>`:null}actionTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?o.qy`<wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>`:o.qy`<wui-link @click=${this.onMaxClick.bind(this)}>Max</wui-link>`:null}onInputChange(e){r.R.setTokenAmount(e.detail)}onMaxClick(){if(this.token){const e=v.S.bigNumber(this.token.quantity.numeric);r.R.setTokenAmount(Number(e.toFixed(20)))}}onBuyClick(){s.I.push("OnRampProviders")}};A.styles=T,S([(0,a.MZ)({type:Object})],A.prototype,"token",void 0),S([(0,a.MZ)({type:Number})],A.prototype,"sendTokenAmount",void 0),A=S([(0,u.EM)("w3m-input-token")],A);const $=o.AH`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xs) !important;
    border: 5px solid var(--wui-color-bg-125);
    background: var(--wui-color-bg-175);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  wui-button {
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .inputContainer {
    height: fit-content;
  }
`;var P=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let C=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.token=r.R.state.token,this.sendTokenAmount=r.R.state.sendTokenAmount,this.receiverAddress=r.R.state.receiverAddress,this.receiverProfileName=r.R.state.receiverProfileName,this.loading=r.R.state.loading,this.message="Preview Send",this.fetchNetworkPrice(),this.fetchBalances(),this.unsubscribe.push(r.R.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.receiverProfileName=e.receiverProfileName,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.getMessage(),o.qy` <wui-flex flexDirection="column" .padding=${["0","l","l","l"]}>
      <wui-flex class="inputContainer" gap="xs" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
        ></w3m-input-token>
        <wui-icon-box
          size="inherit"
          backgroundColor="fg-300"
          iconSize="lg"
          iconColor="fg-250"
          background="opaque"
          icon="arrowBottom"
        ></wui-icon-box>
        <w3m-input-address
          .value=${this.receiverProfileName?this.receiverProfileName:this.receiverAddress}
        ></w3m-input-address>
      </wui-flex>
      <wui-flex .margin=${["l","0","0","0"]}>
        <wui-button
          @click=${this.onButtonClick.bind(this)}
          ?disabled=${!this.message.startsWith("Preview Send")}
          size="lg"
          variant="main"
          ?loading=${this.loading}
          fullWidth
        >
          ${this.message}
        </wui-button>
      </wui-flex>
    </wui-flex>`}async fetchBalances(){await r.R.fetchTokenBalance(),r.R.fetchNetworkBalance()}async fetchNetworkPrice(){await n.GN.getNetworkTokenPrice()}onButtonClick(){s.I.push("WalletSendPreview")}getMessage(){this.message="Preview Send",this.receiverAddress&&!c.w.isAddress(this.receiverAddress,l.W.state.activeChain)&&(this.message="Invalid Address"),this.receiverAddress||(this.message="Add Address"),this.sendTokenAmount&&this.token&&this.sendTokenAmount>Number(this.token.quantity.numeric)&&(this.message="Insufficient Funds"),this.sendTokenAmount||(this.message="Add Amount"),this.sendTokenAmount&&this.token?.price&&(this.sendTokenAmount*this.token.price||(this.message="Incorrect Value")),this.token||(this.message="Select Token")}};C.styles=$,P([(0,a.wk)()],C.prototype,"token",void 0),P([(0,a.wk)()],C.prototype,"sendTokenAmount",void 0),P([(0,a.wk)()],C.prototype,"receiverAddress",void 0),P([(0,a.wk)()],C.prototype,"receiverProfileName",void 0),P([(0,a.wk)()],C.prototype,"loading",void 0),P([(0,a.wk)()],C.prototype,"message",void 0),C=P([(0,u.EM)("w3m-wallet-send-view")],C),i(62907),i(46860),i(49048);const R=o.AH`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }
`;var I=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let z=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tokenBalances=r.R.state.tokenBalances,this.search="",this.onDebouncedSearch=c.w.debounce(e=>{this.search=e}),this.unsubscribe.push(r.R.subscribe(e=>{this.tokenBalances=e.tokenBalances}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.qy`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return o.qy`
      <wui-flex gap="xs" padding="s">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){return this.tokens=this.tokenBalances?.filter(e=>e.chainId===l.W.state.activeCaipNetwork?.caipNetworkId),this.search?this.filteredTokens=this.tokenBalances?.filter(e=>e.name.toLowerCase().includes(this.search.toLowerCase())):this.filteredTokens=this.tokens,o.qy`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","s","0","s"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["m","s","s","s"]}>
          <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="xs">
          ${this.filteredTokens&&this.filteredTokens.length>0?this.filteredTokens.map(e=>o.qy`<wui-list-token
                    @click=${this.handleTokenClick.bind(this,e)}
                    ?clickable=${!0}
                    tokenName=${e.name}
                    tokenImageUrl=${e.iconUrl}
                    tokenAmount=${e.quantity.numeric}
                    tokenValue=${e.value}
                    tokenCurrency=${e.symbol}
                  ></wui-list-token>`):o.qy`<wui-flex
                .padding=${["4xl","0","0","0"]}
                alignItems="center"
                flexDirection="column"
                gap="l"
              >
                <wui-icon-box
                  icon="coinPlaceholder"
                  size="inherit"
                  iconColor="fg-200"
                  backgroundColor="fg-200"
                  iconSize="lg"
                ></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="xs"
                  flexDirection="column"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <wui-text variant="paragraph-500" align="center" color="fg-100"
                    >No tokens found</wui-text
                  >
                  <wui-text variant="small-400" align="center" color="fg-200"
                    >Your tokens will appear here</wui-text
                  >
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){s.I.push("OnRampProviders")}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){r.R.setToken(e),r.R.setTokenAmount(void 0),s.I.goBack()}};z.styles=R,I([(0,a.wk)()],z.prototype,"tokenBalances",void 0),I([(0,a.wk)()],z.prototype,"tokens",void 0),I([(0,a.wk)()],z.prototype,"filteredTokens",void 0),I([(0,a.wk)()],z.prototype,"search",void 0),z=I([(0,u.EM)("w3m-wallet-send-select-token-view")],z);var E=i(7380),N=i(34325),M=i(90101);i(59481),i(31037),i(82207),i(33165),i(83309);const B=o.AH`
  :host {
    display: flex;
    gap: var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-xs) var(--wui-spacing-2xs)
      var(--wui-spacing-s);
    align-items: center;
  }

  wui-avatar,
  wui-icon,
  wui-image {
    width: 32px;
    height: 32px;
    border: 1px solid var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-002);
  }
`;var D=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Z=class extends o.WF{constructor(){super(...arguments),this.text="",this.address="",this.isAddress=!1}render(){return o.qy`<wui-text variant="large-500" color="fg-100">${this.text}</wui-text>
      ${this.imageTemplate()}`}imageTemplate(){return this.isAddress?o.qy`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`:this.imageSrc?o.qy`<wui-image src=${this.imageSrc}></wui-image>`:o.qy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Z.styles=[m.W5,m.fD,B],D([(0,a.MZ)()],Z.prototype,"text",void 0),D([(0,a.MZ)()],Z.prototype,"address",void 0),D([(0,a.MZ)()],Z.prototype,"imageSrc",void 0),D([(0,a.MZ)({type:Boolean})],Z.prototype,"isAddress",void 0),Z=D([(0,b.E)("wui-preview-item")],Z);var O=i(98096),W=i(39168),j=i(14782);const U=o.AH`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var _=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let q=class extends o.WF{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return o.qy`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?o.qy`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?o.qy` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:o.qy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};q.styles=[m.W5,m.fD,U],_([(0,a.MZ)()],q.prototype,"imageSrc",void 0),_([(0,a.MZ)()],q.prototype,"textTitle",void 0),_([(0,a.MZ)()],q.prototype,"textValue",void 0),q=_([(0,b.E)("wui-list-content")],q);const F=o.AH`
  :host {
    display: flex;
    width: auto;
    flex-direction: column;
    gap: var(--wui-border-radius-1xs);
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-s) var(--wui-spacing-1xs) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }

  wui-text {
    padding: 0 var(--wui-spacing-1xs);
  }

  wui-flex {
    margin-top: var(--wui-spacing-1xs);
  }

  .network {
    cursor: pointer;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  .network:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .network:active {
    background-color: var(--wui-color-gray-glass-010);
  }
`;var H=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let L=class extends o.WF{render(){return o.qy` <wui-text variant="small-400" color="fg-200">Details</wui-text>
      <wui-flex flexDirection="column" gap="xxs">
        <wui-list-content
          textTitle="Address"
          textValue=${u.Zv.getTruncateString({string:this.receiverAddress??"",charsStart:4,charsEnd:4,truncate:"middle"})}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`}networkTemplate(){return this.caipNetwork?.name?o.qy` <wui-list-content
        @click=${()=>this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${(0,W.J)(j.$.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`:null}onNetworkClick(e){e&&s.I.push("Networks",{network:e})}};L.styles=F,H([(0,a.MZ)()],L.prototype,"receiverAddress",void 0),H([(0,a.MZ)({type:Object})],L.prototype,"caipNetwork",void 0),L=H([(0,u.EM)("w3m-wallet-send-details")],L);const G=o.AH`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: var(--wui-border-radius-3xl);
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }
`;var V=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let K=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.token=r.R.state.token,this.sendTokenAmount=r.R.state.sendTokenAmount,this.receiverAddress=r.R.state.receiverAddress,this.receiverProfileName=r.R.state.receiverProfileName,this.receiverProfileImageUrl=r.R.state.receiverProfileImageUrl,this.caipNetwork=l.W.state.activeCaipNetwork,this.loading=r.R.state.loading,this.unsubscribe.push(r.R.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.receiverProfileName=e.receiverProfileName,this.receiverProfileImageUrl=e.receiverProfileImageUrl,this.loading=e.loading}),l.W.subscribeKey("activeCaipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.qy` <wui-flex flexDirection="column" .padding=${["0","l","l","l"]}>
      <wui-flex gap="xs" flexDirection="column" .padding=${["0","xs","0","xs"]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="4xs">
            <wui-text variant="small-400" color="fg-150">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${this.sendTokenAmount?u.Zv.roundNumber(this.sendTokenAmount,6,5):"unknown"} ${this.token?.symbol}"
            .imageSrc=${this.token?.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="fg-200" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="small-400" color="fg-150">To</wui-text>
          <wui-preview-item
            text="${this.receiverProfileName?u.Zv.getTruncateString({string:this.receiverProfileName,charsStart:20,charsEnd:0,truncate:"end"}):u.Zv.getTruncateString({string:this.receiverAddress?this.receiverAddress:"",charsStart:4,charsEnd:4,truncate:"middle"})}"
            address=${this.receiverAddress??""}
            .imageSrc=${this.receiverProfileImageUrl??void 0}
            .isAddress=${!0}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${["xxl","0","0","0"]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="xxs" .padding=${["s","0","0","0"]}>
          <wui-icon size="sm" color="fg-200" name="warningCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="s" .padding=${["l","0","0","0"]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="neutral"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="main"
            .loading=${this.loading}
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`}sendValueTemplate(){if(this.token&&this.sendTokenAmount){const e=this.token.price*this.sendTokenAmount;return o.qy`<wui-text variant="paragraph-400" color="fg-100"
        >$${e.toFixed(2)}</wui-text
      >`}return null}async onSendClick(){if(this.sendTokenAmount&&this.receiverAddress)try{await r.R.sendToken(),E.P.showSuccess("Transaction started"),s.I.replace("Account")}catch(e){E.P.showError("Failed to send transaction. Please try again."),console.error("SendController:sendToken - failed to send transaction",e);const t=l.W.state.activeChain,i=e instanceof Error?e.message:"Unknown error";N.E.sendEvent({type:"track",event:"SEND_ERROR",properties:{message:i,isSmartAccount:M.U.state.preferredAccountTypes?.[t]===O.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,token:this.token?.symbol||"",amount:this.sendTokenAmount,network:l.W.state.activeCaipNetwork?.caipNetworkId||""}})}else E.P.showError("Please enter a valid amount and receiver address")}onCancelClick(){s.I.goBack()}};K.styles=G,V([(0,a.wk)()],K.prototype,"token",void 0),V([(0,a.wk)()],K.prototype,"sendTokenAmount",void 0),V([(0,a.wk)()],K.prototype,"receiverAddress",void 0),V([(0,a.wk)()],K.prototype,"receiverProfileName",void 0),V([(0,a.wk)()],K.prototype,"receiverProfileImageUrl",void 0),V([(0,a.wk)()],K.prototype,"caipNetwork",void 0),V([(0,a.wk)()],K.prototype,"loading",void 0),K=V([(0,u.EM)("w3m-wallet-send-preview-view")],K)},98615:(e,t,i)=>{i.d(t,{C5:()=>r,Ky:()=>a,PG:()=>o});const o=/[.*+?^${}()|[\]\\]/gu,a=/[0-9,.]/u,r="https://reown.com"}}]);
//# sourceMappingURL=2672.widget.iife.js.map