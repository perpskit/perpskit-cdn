/*! For license information please see 4865.widget.iife.js.LICENSE.txt */
"use strict";(this.webpackChunkHLWidget=this.webpackChunkHLWidget||[]).push([[4865],{4537:(t,e,a)=>{a.d(e,{w:()=>n});var i=a(69623);function n(t){return(0,i.M)({...t,state:!0,attribute:!1})}},4898:(t,e,a)=>{a.d(e,{a:()=>i});const i=a(48422).JW`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`},14494:(t,e,a)=>{a(63937)},20766:(t,e,a)=>{var i=a(48422),n=a(91427),o=a(56063),r=a(68664);const s=i.AH`
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
`;var c=function(t,e,a,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,a,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(o<3?n(r):o>3?n(e,a,r):n(e,a))||r);return o>3&&r&&Object.defineProperty(e,a,r),r};let l=class extends i.WF{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText="--local-color: "+("inherit"===this.color?"inherit":`var(--wui-color-${this.color})`),this.dataset.size=this.size,i.qy`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};l.styles=[o.W5,s],c([(0,n.MZ)()],l.prototype,"color",void 0),c([(0,n.MZ)()],l.prototype,"size",void 0),l=c([(0,r.E)("wui-loading-spinner")],l)},23507:(t,e,a)=>{a.d(e,{H:()=>o});var i=a(80971),n=a(39341);const o=(0,n.u$)(class extends n.WL{constructor(t){if(super(t),t.type!==n.OA.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const a=t.element.classList;for(const t of this.st)t in e||(a.remove(t),this.st.delete(t));for(const t in e){const i=!!e[t];i===this.st.has(t)||this.nt?.has(t)||(i?(a.add(t),this.st.add(t)):(a.remove(t),this.st.delete(t)))}return i.c0}})},27165:(t,e,a)=>{a.d(e,{Rt:()=>r,sO:()=>o});var i=a(80971);const{I:n}=i.ge,o=t=>null===t||"object"!=typeof t&&"function"!=typeof t,r=t=>void 0===t.strings},31037:(t,e,a)=>{var i=a(48422),n=a(91427),o=a(56063),r=a(68664);const s=i.AH`
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
`;var c=function(t,e,a,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,a,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(o<3?n(r):o>3?n(e,a,r):n(e,a))||r);return o>3&&r&&Object.defineProperty(e,a,r),r};let l=class extends i.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`\n      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      `,i.qy`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};l.styles=[o.W5,o.ck,s],c([(0,n.MZ)()],l.prototype,"src",void 0),c([(0,n.MZ)()],l.prototype,"alt",void 0),c([(0,n.MZ)()],l.prototype,"size",void 0),l=c([(0,r.E)("wui-image")],l)},32971:(t,e,a)=>{a.d(e,{T:()=>h});var i=a(80971),n=a(27165),o=a(64720);class r{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class s{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}var c=a(39341);const l=t=>!(0,n.sO)(t)&&"function"==typeof t.then,d=1073741823;class u extends o.Kq{constructor(){super(...arguments),this._$Cwt=d,this._$Cbt=[],this._$CK=new r(this),this._$CX=new s}render(...t){return t.find(t=>!l(t))??i.c0}update(t,e){const a=this._$Cbt;let n=a.length;this._$Cbt=e;const o=this._$CK,r=this._$CX;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$Cwt);t++){const i=e[t];if(!l(i))return this._$Cwt=t,i;t<n&&i===a[t]||(this._$Cwt=d,n=0,Promise.resolve(i).then(async t=>{for(;r.get();)await r.get();const e=o.deref();if(void 0!==e){const a=e._$Cbt.indexOf(i);a>-1&&a<e._$Cwt&&(e._$Cwt=a,e.setValue(t))}}))}return i.c0}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const h=(0,c.u$)(u)},33165:(t,e,a)=>{var i=a(48422),n=a(91427),o=a(56063),r=a(71686),s=a(68664);const c=i.AH`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var l=function(t,e,a,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,a,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(o<3?n(r):o>3?n(e,a,r):n(e,a))||r);return o>3&&r&&Object.defineProperty(e,a,r),r};let d=class extends i.WF{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&r.Z.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&r.Z.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&r.Z.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&r.Z.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&r.Z.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&r.Z.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&r.Z.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&r.Z.getSpacingStyles(this.margin,3)};\n    `,i.qy`<slot></slot>`}};d.styles=[o.W5,c],l([(0,n.MZ)()],d.prototype,"flexDirection",void 0),l([(0,n.MZ)()],d.prototype,"flexWrap",void 0),l([(0,n.MZ)()],d.prototype,"flexBasis",void 0),l([(0,n.MZ)()],d.prototype,"flexGrow",void 0),l([(0,n.MZ)()],d.prototype,"flexShrink",void 0),l([(0,n.MZ)()],d.prototype,"alignItems",void 0),l([(0,n.MZ)()],d.prototype,"justifyContent",void 0),l([(0,n.MZ)()],d.prototype,"columnGap",void 0),l([(0,n.MZ)()],d.prototype,"rowGap",void 0),l([(0,n.MZ)()],d.prototype,"gap",void 0),l([(0,n.MZ)()],d.prototype,"padding",void 0),l([(0,n.MZ)()],d.prototype,"margin",void 0),d=l([(0,s.E)("wui-flex")],d)},36639:(t,e,a)=>{var i=a(48422),n=a(91427);const o=i.JW`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var r=a(4898);const s=i.JW`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`;a(59481),a(31037);var c=a(56063),l=a(68664);const d=i.AH`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: var(--wui-color-gray-glass-002);
    border-radius: 100%;
    outline: 1px solid var(--wui-color-gray-glass-005);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-color-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-color-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var u=function(t,e,a,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,a,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(o<3?n(r):o>3?n(e,a,r):n(e,a))||r);return o>3&&r&&Object.defineProperty(e,a,r),r};let h=class extends i.WF{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:s,md:r.a,lg:o},this.selected=!1,this.round=!1}render(){return this.round?(this.dataset.round="true",this.style.cssText="\n      --local-width: var(--wui-spacing-3xl);\n      --local-height: var(--wui-spacing-3xl);\n      --local-icon-size: var(--wui-spacing-l);\n    "):this.style.cssText=`\n\n      --local-path: var(--wui-path-network-${this.size});\n      --local-width:  var(--wui-width-network-${this.size});\n      --local-height:  var(--wui-height-network-${this.size});\n      --local-icon-size:  var(--wui-icon-size-network-${this.size});\n    `,i.qy`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?i.qy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:i.qy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};h.styles=[c.W5,d],u([(0,n.MZ)()],h.prototype,"size",void 0),u([(0,n.MZ)()],h.prototype,"name",void 0),u([(0,n.MZ)({type:Object})],h.prototype,"networkImagesBySize",void 0),u([(0,n.MZ)()],h.prototype,"imageSrc",void 0),u([(0,n.MZ)({type:Boolean})],h.prototype,"selected",void 0),u([(0,n.MZ)({type:Boolean})],h.prototype,"round",void 0),h=u([(0,l.E)("wui-network-image")],h)},37498:(t,e,a)=>{a(59481)},38371:(t,e,a)=>{var i=a(48422),n=a(91427),o=a(39168),r=(a(59481),a(31037),a(20766),a(82207),a(33165),a(56063)),s=a(68664);a(50409);const c=i.AH`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var l=function(t,e,a,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,a,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(o<3?n(r):o>3?n(e,a,r):n(e,a))||r);return o>3&&r&&Object.defineProperty(e,a,r),r};let d=class extends i.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return i.qy`
      <button
        ?disabled=${!!this.loading||Boolean(this.disabled)}
        data-loading=${this.loading}
        data-iconvariant=${(0,o.J)(this.iconVariant)}
        tabindex=${(0,o.J)(this.tabIdx)}
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return i.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return i.qy`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){const t=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",e="square-blue"===this.iconVariant?"mdl":"md",a=this.iconSize?this.iconSize:e;return i.qy`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${a}
          background="transparent"
          iconColor=${t}
          backgroundColor=${t}
          size=${e}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?i.qy`<wui-loading-spinner
        data-testid="wui-list-item-loading-spinner"
        color="fg-300"
      ></wui-loading-spinner>`:i.qy``}chevronTemplate(){return this.chevron?i.qy`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};d.styles=[r.W5,r.fD,c],l([(0,n.MZ)()],d.prototype,"icon",void 0),l([(0,n.MZ)()],d.prototype,"iconSize",void 0),l([(0,n.MZ)()],d.prototype,"tabIdx",void 0),l([(0,n.MZ)()],d.prototype,"variant",void 0),l([(0,n.MZ)()],d.prototype,"iconVariant",void 0),l([(0,n.MZ)({type:Boolean})],d.prototype,"disabled",void 0),l([(0,n.MZ)()],d.prototype,"imageSrc",void 0),l([(0,n.MZ)()],d.prototype,"alt",void 0),l([(0,n.MZ)({type:Boolean})],d.prototype,"chevron",void 0),l([(0,n.MZ)({type:Boolean})],d.prototype,"loading",void 0),d=l([(0,s.E)("wui-list-item")],d)},39168:(t,e,a)=>{a.d(e,{J:()=>n});var i=a(80971);const n=t=>t??i.s6},39341:(t,e,a)=>{a.d(e,{OA:()=>i,WL:()=>o,u$:()=>n});const i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},n=t=>(...e)=>({_$litDirective$:t,values:e});class o{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,a){this._$Ct=t,this._$AM=e,this._$Ci=a}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},43508:(t,e,a)=>{a(33165)},46664:(t,e,a)=>{var i=a(48422),n=a(91427),o=(a(59481),a(56063)),r=a(68664);const s=i.AH`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var c=function(t,e,a,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,a,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(o<3?n(r):o>3?n(e,a,r):n(e,a))||r);return o>3&&r&&Object.defineProperty(e,a,r),r};let l=class extends i.WF{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const t="lg"===this.size?"--wui-border-radius-xs":"--wui-border-radius-xxs",e="lg"===this.size?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`\n    --local-border-radius: var(${t});\n    --local-padding: var(${e});\n`,i.qy`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};l.styles=[o.W5,o.fD,o.ck,s],c([(0,n.MZ)()],l.prototype,"size",void 0),c([(0,n.MZ)({type:Boolean})],l.prototype,"disabled",void 0),c([(0,n.MZ)()],l.prototype,"icon",void 0),c([(0,n.MZ)()],l.prototype,"iconColor",void 0),l=c([(0,r.E)("wui-icon-link")],l)},49048:(t,e,a)=>{var i=a(48422),n=a(91427),o=(a(82207),a(56063)),r=a(68664);const s=i.AH`
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
`;var c=function(t,e,a,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,a,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(o<3?n(r):o>3?n(e,a,r):n(e,a))||r);return o>3&&r&&Object.defineProperty(e,a,r),r};let l=class extends i.WF{constructor(){super(...arguments),this.text=""}render(){return i.qy`${this.template()}`}template(){return this.text?i.qy`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};l.styles=[o.W5,s],c([(0,n.MZ)()],l.prototype,"text",void 0),l=c([(0,r.E)("wui-separator")],l)},50409:(t,e,a)=>{var i=a(48422),n=a(91427),o=(a(59481),a(56063)),r=a(68664);const s=i.AH`
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
`;var c=function(t,e,a,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,a,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(o<3?n(r):o>3?n(e,a,r):n(e,a))||r);return o>3&&r&&Object.defineProperty(e,a,r),r};let l=class extends i.WF{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const t=this.iconSize||this.size,e="lg"===this.size,a="xl"===this.size,n=e?"12%":"16%",o=e?"xxs":a?"s":"3xl",r="gray"===this.background,s="opaque"===this.background,c="accent-100"===this.backgroundColor&&s||"success-100"===this.backgroundColor&&s||"error-100"===this.backgroundColor&&s||"inverse-100"===this.backgroundColor&&s;let l=`var(--wui-color-${this.backgroundColor})`;return c?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:r&&(l=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${l};\n       --local-bg-mix: ${c||r?"100%":n};\n       --local-border-radius: var(--wui-border-radius-${o});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,i.qy` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};l.styles=[o.W5,o.fD,s],c([(0,n.MZ)()],l.prototype,"size",void 0),c([(0,n.MZ)()],l.prototype,"backgroundColor",void 0),c([(0,n.MZ)()],l.prototype,"iconColor",void 0),c([(0,n.MZ)()],l.prototype,"iconSize",void 0),c([(0,n.MZ)()],l.prototype,"background",void 0),c([(0,n.MZ)({type:Boolean})],l.prototype,"border",void 0),c([(0,n.MZ)()],l.prototype,"borderColor",void 0),c([(0,n.MZ)()],l.prototype,"icon",void 0),l=c([(0,r.E)("wui-icon-box")],l)},59087:(t,e,a)=>{var i=a(48422),n=a(91427),o=(a(59481),a(56063)),r=a(68664);const s=i.AH`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-color-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }
  }
`;var c=function(t,e,a,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,a,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(o<3?n(r):o>3?n(e,a,r):n(e,a))||r);return o>3&&r&&Object.defineProperty(e,a,r),r};let l=class extends i.WF{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return i.qy`<button>
      <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
    </button>`}};l.styles=[o.W5,o.fD,s],c([(0,n.MZ)()],l.prototype,"text",void 0),c([(0,n.MZ)()],l.prototype,"icon",void 0),l=c([(0,r.E)("wui-icon-button")],l)},59183:(t,e,a)=>{a(20766)},59481:(t,e,a)=>{var i=a(48422),n=a(91427),o=a(32971);const r=new class{constructor(){this.cache=new Map}set(t,e){this.cache.set(t,e)}get(t){return this.cache.get(t)}has(t){return this.cache.has(t)}delete(t){this.cache.delete(t)}clear(){this.cache.clear()}};var s=a(56063),c=a(68664);const l=i.AH`
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
`;var d=function(t,e,a,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,a,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(o<3?n(r):o>3?n(e,a,r):n(e,a))||r);return o>3&&r&&Object.defineProperty(e,a,r),r};const u={add:async()=>(await a.e(8186).then(a.bind(a,88186))).addSvg,allWallets:async()=>(await a.e(9569).then(a.bind(a,39569))).allWalletsSvg,arrowBottomCircle:async()=>(await a.e(5995).then(a.bind(a,25995))).arrowBottomCircleSvg,appStore:async()=>(await a.e(3774).then(a.bind(a,3774))).appStoreSvg,apple:async()=>(await a.e(5929).then(a.bind(a,15929))).appleSvg,arrowBottom:async()=>(await a.e(1198).then(a.bind(a,11198))).arrowBottomSvg,arrowLeft:async()=>(await a.e(9760).then(a.bind(a,29760))).arrowLeftSvg,arrowRight:async()=>(await a.e(4659).then(a.bind(a,94659))).arrowRightSvg,arrowTop:async()=>(await a.e(3690).then(a.bind(a,43690))).arrowTopSvg,bank:async()=>(await a.e(627).then(a.bind(a,80627))).bankSvg,browser:async()=>(await a.e(6913).then(a.bind(a,16913))).browserSvg,card:async()=>(await a.e(1327).then(a.bind(a,1327))).cardSvg,checkmark:async()=>(await a.e(1480).then(a.bind(a,31480))).checkmarkSvg,checkmarkBold:async()=>(await a.e(486).then(a.bind(a,70486))).checkmarkBoldSvg,chevronBottom:async()=>(await a.e(3928).then(a.bind(a,33928))).chevronBottomSvg,chevronLeft:async()=>(await a.e(3682).then(a.bind(a,23682))).chevronLeftSvg,chevronRight:async()=>(await a.e(7701).then(a.bind(a,17701))).chevronRightSvg,chevronTop:async()=>(await a.e(2592).then(a.bind(a,62592))).chevronTopSvg,chromeStore:async()=>(await a.e(1903).then(a.bind(a,1903))).chromeStoreSvg,clock:async()=>(await a.e(6027).then(a.bind(a,76027))).clockSvg,close:async()=>(await a.e(7545).then(a.bind(a,17545))).closeSvg,compass:async()=>(await a.e(2097).then(a.bind(a,2097))).compassSvg,coinPlaceholder:async()=>(await a.e(9919).then(a.bind(a,79919))).coinPlaceholderSvg,copy:async()=>(await a.e(340).then(a.bind(a,90340))).copySvg,cursor:async()=>(await a.e(9119).then(a.bind(a,29119))).cursorSvg,cursorTransparent:async()=>(await a.e(1944).then(a.bind(a,1944))).cursorTransparentSvg,desktop:async()=>(await a.e(3277).then(a.bind(a,73277))).desktopSvg,disconnect:async()=>(await a.e(2923).then(a.bind(a,2923))).disconnectSvg,discord:async()=>(await a.e(6977).then(a.bind(a,6977))).discordSvg,etherscan:async()=>(await a.e(3092).then(a.bind(a,73092))).etherscanSvg,extension:async()=>(await a.e(5712).then(a.bind(a,55712))).extensionSvg,externalLink:async()=>(await a.e(7563).then(a.bind(a,57563))).externalLinkSvg,facebook:async()=>(await a.e(8865).then(a.bind(a,98865))).facebookSvg,farcaster:async()=>(await a.e(4132).then(a.bind(a,74132))).farcasterSvg,filters:async()=>(await a.e(9222).then(a.bind(a,69222))).filtersSvg,github:async()=>(await a.e(9178).then(a.bind(a,89178))).githubSvg,google:async()=>(await a.e(3106).then(a.bind(a,13106))).googleSvg,helpCircle:async()=>(await a.e(4691).then(a.bind(a,34691))).helpCircleSvg,image:async()=>(await a.e(9652).then(a.bind(a,99652))).imageSvg,id:async()=>(await a.e(1636).then(a.bind(a,11636))).idSvg,infoCircle:async()=>(await a.e(298).then(a.bind(a,60298))).infoCircleSvg,lightbulb:async()=>(await a.e(54).then(a.bind(a,20054))).lightbulbSvg,mail:async()=>(await a.e(9930).then(a.bind(a,39930))).mailSvg,mobile:async()=>(await a.e(2475).then(a.bind(a,12475))).mobileSvg,more:async()=>(await a.e(6856).then(a.bind(a,36856))).moreSvg,networkPlaceholder:async()=>(await a.e(3387).then(a.bind(a,73387))).networkPlaceholderSvg,nftPlaceholder:async()=>(await a.e(3472).then(a.bind(a,53472))).nftPlaceholderSvg,off:async()=>(await a.e(4668).then(a.bind(a,54668))).offSvg,playStore:async()=>(await a.e(7755).then(a.bind(a,7755))).playStoreSvg,plus:async()=>(await a.e(2945).then(a.bind(a,22945))).plusSvg,qrCode:async()=>(await a.e(4034).then(a.bind(a,44034))).qrCodeIcon,recycleHorizontal:async()=>(await a.e(5045).then(a.bind(a,85045))).recycleHorizontalSvg,refresh:async()=>(await a.e(4290).then(a.bind(a,44290))).refreshSvg,search:async()=>(await a.e(3333).then(a.bind(a,73333))).searchSvg,send:async()=>(await a.e(8535).then(a.bind(a,18535))).sendSvg,swapHorizontal:async()=>(await a.e(9586).then(a.bind(a,49586))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await a.e(7773).then(a.bind(a,17773))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await a.e(9325).then(a.bind(a,9325))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await a.e(7562).then(a.bind(a,47562))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await a.e(2168).then(a.bind(a,82168))).swapVerticalSvg,telegram:async()=>(await a.e(8166).then(a.bind(a,88166))).telegramSvg,threeDots:async()=>(await a.e(1874).then(a.bind(a,51874))).threeDotsSvg,twitch:async()=>(await a.e(7218).then(a.bind(a,17218))).twitchSvg,twitter:async()=>(await a.e(3489).then(a.bind(a,93489))).xSvg,twitterIcon:async()=>(await a.e(9023).then(a.bind(a,69023))).twitterIconSvg,verify:async()=>(await a.e(2120).then(a.bind(a,52120))).verifySvg,verifyFilled:async()=>(await a.e(5337).then(a.bind(a,45337))).verifyFilledSvg,wallet:async()=>(await a.e(440).then(a.bind(a,60440))).walletSvg,walletConnect:async()=>(await a.e(3300).then(a.bind(a,33300))).walletConnectSvg,walletConnectLightBrown:async()=>(await a.e(3300).then(a.bind(a,33300))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await a.e(3300).then(a.bind(a,33300))).walletConnectBrownSvg,walletPlaceholder:async()=>(await a.e(5556).then(a.bind(a,25556))).walletPlaceholderSvg,warningCircle:async()=>(await a.e(7910).then(a.bind(a,87910))).warningCircleSvg,x:async()=>(await a.e(3489).then(a.bind(a,93489))).xSvg,info:async()=>(await a.e(917).then(a.bind(a,10917))).infoSvg,exclamationTriangle:async()=>(await a.e(2557).then(a.bind(a,32557))).exclamationTriangleSvg,reown:async()=>(await a.e(1864).then(a.bind(a,41864))).reownSvg};let h=class extends i.WF{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n      --local-aspect-ratio: ${this.aspectRatio}\n    `,i.qy`${(0,o.T)(async function(t){if(r.has(t))return r.get(t);const e=(u[t]??u.copy)();return r.set(t,e),e}(this.name),i.qy`<div class="fallback"></div>`)}`}};h.styles=[s.W5,s.ck,l],d([(0,n.MZ)()],h.prototype,"size",void 0),d([(0,n.MZ)()],h.prototype,"name",void 0),d([(0,n.MZ)()],h.prototype,"color",void 0),d([(0,n.MZ)()],h.prototype,"aspectRatio",void 0),h=d([(0,c.E)("wui-icon")],h)},63718:(t,e,a)=>{var i=a(48422),n=a(91427),o=(a(20766),a(82207),a(56063)),r=a(68664);const s=i.AH`
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
`;var c=function(t,e,a,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,a,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(o<3?n(r):o>3?n(e,a,r):n(e,a))||r);return o>3&&r&&Object.defineProperty(e,a,r),r};const l={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},d={lg:"paragraph-600",md:"small-600"},u={lg:"md",md:"md"};let h=class extends i.WF{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`\n    --local-width: ${this.fullWidth?"100%":"auto"};\n    --local-opacity-100: ${this.loading?0:1};\n    --local-opacity-000: ${this.loading?1:0};\n    --local-border-radius: var(--wui-border-radius-${this.borderRadius});\n    `;const t=this.textVariant??d[this.size];return i.qy`
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
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const t=u[this.size],e=this.disabled?l.disabled:l[this.variant];return i.qy`<wui-loading-spinner color=${e} size=${t}></wui-loading-spinner>`}return i.qy``}};h.styles=[o.W5,o.fD,s],c([(0,n.MZ)()],h.prototype,"size",void 0),c([(0,n.MZ)({type:Boolean})],h.prototype,"disabled",void 0),c([(0,n.MZ)({type:Boolean})],h.prototype,"fullWidth",void 0),c([(0,n.MZ)({type:Boolean})],h.prototype,"loading",void 0),c([(0,n.MZ)()],h.prototype,"variant",void 0),c([(0,n.MZ)({type:Boolean})],h.prototype,"hasIconLeft",void 0),c([(0,n.MZ)({type:Boolean})],h.prototype,"hasIconRight",void 0),c([(0,n.MZ)()],h.prototype,"borderRadius",void 0),c([(0,n.MZ)()],h.prototype,"textVariant",void 0),h=c([(0,r.E)("wui-button")],h)},63937:(t,e,a)=>{var i=a(48422),n=a(91427),o=(a(59481),a(31037),a(33165),a(56063)),r=a(68664);a(50409);const s=i.AH`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`;var c=function(t,e,a,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,a,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(o<3?n(r):o>3?n(e,a,r):n(e,a))||r);return o>3&&r&&Object.defineProperty(e,a,r),r};let l=class extends i.WF{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let t="xxs";return t="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`\n       --local-border-radius: var(--wui-border-radius-${t});\n       --local-size: var(--wui-wallet-image-size-${this.size});\n   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),i.qy`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?i.qy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?i.qy`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:i.qy`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};l.styles=[o.fD,o.W5,s],c([(0,n.MZ)()],l.prototype,"size",void 0),c([(0,n.MZ)()],l.prototype,"name",void 0),c([(0,n.MZ)()],l.prototype,"imageSrc",void 0),c([(0,n.MZ)()],l.prototype,"walletIcon",void 0),c([(0,n.MZ)({type:Boolean})],l.prototype,"installed",void 0),c([(0,n.MZ)()],l.prototype,"badgeSize",void 0),l=c([(0,r.E)("wui-wallet-image")],l)},64720:(t,e,a)=>{a.d(e,{Kq:()=>u});var i=a(27165),n=a(39341);const o=(t,e)=>{const a=t._$AN;if(void 0===a)return!1;for(const t of a)t._$AO?.(e,!1),o(t,e);return!0},r=t=>{let e,a;do{if(void 0===(e=t._$AM))break;a=e._$AN,a.delete(t),t=e}while(0===a?.size)},s=t=>{for(let e;e=t._$AM;t=e){let a=e._$AN;if(void 0===a)e._$AN=a=new Set;else if(a.has(t))break;a.add(t),d(e)}};function c(t){void 0!==this._$AN?(r(this),this._$AM=t,s(this)):this._$AM=t}function l(t,e=!1,a=0){const i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(i))for(let t=a;t<i.length;t++)o(i[t],!1),r(i[t]);else null!=i&&(o(i,!1),r(i));else o(this,t)}const d=t=>{t.type==n.OA.CHILD&&(t._$AP??=l,t._$AQ??=c)};class u extends n.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,a){super._$AT(t,e,a),s(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(o(this,t),r(this))}setValue(t){if((0,i.Rt)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}},69623:(t,e,a)=>{a.d(e,{M:()=>r});var i=a(56451);const n={attribute:!0,type:String,converter:i.W3,reflect:!1,hasChanged:i.Ec},o=(t=n,e,a)=>{const{kind:i,metadata:o}=a;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),r.set(a.name,t),"accessor"===i){const{name:i}=a;return{set(a){const n=e.get.call(this);e.set.call(this,a),this.requestUpdate(i,n,t)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=a;return function(a){const n=this[i];e.call(this,a),this.requestUpdate(i,n,t)}}throw Error("Unsupported decorator location: "+i)};function r(t){return(e,a)=>"object"==typeof a?o(t,e,a):((t,e,a)=>{const i=e.hasOwnProperty(a);return e.constructor.createProperty(a,t),i?Object.getOwnPropertyDescriptor(e,a):void 0})(t,e,a)}},73921:(t,e,a)=>{var i=a(48422),n=a(91427),o=a(56063),r=a(68664);const s=i.AH`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var c=function(t,e,a,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,a,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(o<3?n(r):o>3?n(e,a,r):n(e,a))||r);return o>3&&r&&Object.defineProperty(e,a,r),r};let l=class extends i.WF{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,e=36-t,a=116+e,n=245+e,o=360+1.75*e;return i.qy`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${a} ${n}"
          stroke-dashoffset=${o}
        />
      </svg>
    `}};l.styles=[o.W5,s],c([(0,n.MZ)({type:Number})],l.prototype,"radius",void 0),l=c([(0,r.E)("wui-loading-thumbnail")],l)},74865:(t,e,a)=>{a.r(e),a.d(e,{W3mPayLoadingView:()=>J,W3mPayView:()=>F,baseETH:()=>it,baseSepoliaETH:()=>ot,baseUSDC:()=>nt,getExchanges:()=>Q,getIsPaymentInProgress:()=>at,getPayError:()=>et,getPayResult:()=>tt,openPay:()=>X});var i=a(48422),n=a(91427),o=a(39168),r=a(90101),s=a(52819),c=a(29327),l=a(92999),d=a(7380),u=a(90336),h=a(72470),p=(a(80659),a(43508),a(37498),a(59087),a(46664),a(99838),a(38371),a(59183),a(99233),a(49048),a(79932),a(14494),a(44822)),g=a(36517),w=a(51121),v=a(76539),y=a(34325),f=a(33461),m=a(92669);const b="INVALID_PAYMENT_CONFIG",x="INVALID_RECIPIENT",k="INVALID_ASSET",S="INVALID_AMOUNT",$="UNKNOWN_ERROR",P="UNABLE_TO_INITIATE_PAYMENT",I="INVALID_CHAIN_NAMESPACE",C="GENERIC_PAYMENT_ERROR",E="UNABLE_TO_GET_EXCHANGES",A="ASSET_NOT_SUPPORTED",z="UNABLE_TO_GET_PAY_URL",M="UNABLE_TO_GET_BUY_STATUS",R={[b]:"Invalid payment configuration",[x]:"Invalid recipient address",[k]:"Invalid asset specified",[S]:"Invalid payment amount",[$]:"Unknown payment error occurred",[P]:"Unable to initiate payment",[I]:"Invalid chain namespace",[C]:"Unable to process payment",[E]:"Unable to get exchanges",[A]:"Asset not supported by the selected exchange",[z]:"Unable to get payment URL",[M]:"Unable to get buy status"};class N extends Error{get message(){return R[this.code]}constructor(t,e){super(R[t]),this.name="AppKitPayError",this.code=t,this.details=e,Error.captureStackTrace&&Error.captureStackTrace(this,N)}}var _=a(19400);class T extends Error{}async function O(t,e){const a=`https://rpc.walletconnect.org/v1/json-rpc?projectId=${_.H.getSnapshot().projectId}`,i={jsonrpc:"2.0",id:1,method:t,params:e},n=await fetch(a,{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}}),o=await n.json();if(o.error)throw new T(o.error.message);return o}async function W(t){return(await O("reown_getExchanges",t)).result}const Z=["eip155"],j={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}};function L(t,e){const{chainNamespace:a,chainId:i}=w.C.parseCaipNetworkId(t),n=j[a];if(!n)throw new Error(`Unsupported chain namespace for CAIP-19 formatting: ${a}`);let o=n.native.assetNamespace,r=n.native.assetReference;return"native"!==e&&(o=n.defaultTokenNamespace,r=e),`${a}:${i}/${o}:${r}`}var q=a(9405);const D="unknown",U=(0,p.BX)({paymentAsset:{network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},recipient:"0x0",amount:0,isConfigured:!1,error:null,isPaymentInProgress:!1,exchanges:[],isLoading:!1,openInNewTab:!0,redirectUrl:void 0,payWithExchange:void 0,currentPayment:void 0,analyticsSet:!1,paymentId:void 0}),B={state:U,subscribe:t=>(0,p.B1)(U,()=>t(U)),subscribeKey:(t,e)=>(0,g.u$)(U,t,e),async handleOpenPay(t){this.resetState(),this.setPaymentConfig(t),this.subscribeEvents(),this.initializeAnalytics(),U.isConfigured=!0,y.E.sendEvent({type:"track",event:"PAY_MODAL_OPEN",properties:{exchanges:U.exchanges,configuration:{network:U.paymentAsset.network,asset:U.paymentAsset.asset,recipient:U.recipient,amount:U.amount}}}),await c.W.open({view:"Pay"})},resetState(){U.paymentAsset={network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},U.recipient="0x0",U.amount=0,U.isConfigured=!1,U.error=null,U.isPaymentInProgress=!1,U.isLoading=!1,U.currentPayment=void 0},setPaymentConfig(t){if(!t.paymentAsset)throw new N(b);try{U.paymentAsset=t.paymentAsset,U.recipient=t.recipient,U.amount=t.amount,U.openInNewTab=t.openInNewTab??!0,U.redirectUrl=t.redirectUrl,U.payWithExchange=t.payWithExchange,U.error=null}catch(t){throw new N(b,t.message)}},getPaymentAsset:()=>U.paymentAsset,getExchanges:()=>U.exchanges,async fetchExchanges(){try{U.isLoading=!0;const t=await W({page:0,asset:L(U.paymentAsset.network,U.paymentAsset.asset),amount:U.amount.toString()});U.exchanges=t.exchanges.slice(0,2)}catch(t){throw d.P.showError(R.UNABLE_TO_GET_EXCHANGES),new N(E)}finally{U.isLoading=!1}},async getAvailableExchanges(t){try{const e=t?.asset&&t?.network?L(t.network,t.asset):void 0;return await W({page:t?.page??0,asset:e,amount:t?.amount?.toString()})}catch(t){throw new N(E)}},async getPayUrl(t,e,a=!1){try{const i=Number(e.amount),n=await async function(t){return(await O("reown_getExchangePayUrl",t)).result}({exchangeId:t,asset:L(e.network,e.asset),amount:i.toString(),recipient:`${e.network}:${e.recipient}`});return y.E.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{exchange:{id:t},configuration:{network:e.network,asset:e.asset,recipient:e.recipient,amount:i},currentPayment:{type:"exchange",exchangeId:t},headless:a}}),a&&(this.initiatePayment(),y.E.sendEvent({type:"track",event:"PAY_INITIATED",properties:{paymentId:U.paymentId||D,configuration:{network:e.network,asset:e.asset,recipient:e.recipient,amount:i},currentPayment:{type:"exchange",exchangeId:t}}})),n}catch(t){if(t instanceof Error&&t.message.includes("is not supported"))throw new N(A);throw new Error(t.message)}},async openPayUrl(t,e,a=!1){try{const i=await this.getPayUrl(t.exchangeId,e,a);if(!i)throw new N(z);const n=t.openInNewTab??1?"_blank":"_self";return l.w.openHref(i.url,n),i}catch(t){throw U.error=t instanceof N?t.message:R.GENERIC_PAYMENT_ERROR,new N(z)}},subscribeEvents(){U.isConfigured||(m.A.subscribeProviders(async t=>{const e=s.W.state.activeChain;m.A.getProvider(e)&&await this.handlePayment()}),r.U.subscribeKey("caipAddress",async t=>{t&&await this.handlePayment()}))},async handlePayment(){U.currentPayment={type:"wallet",status:"IN_PROGRESS"};const t=r.U.state.caipAddress;if(!t)return;const{chainId:e,address:a}=w.C.parseCaipAddress(t),i=s.W.state.activeChain;if(!a||!e||!i)return;if(!m.A.getProvider(i))return;const n=s.W.state.activeCaipNetwork;if(n&&!U.isPaymentInProgress)try{this.initiatePayment();const t=s.W.getAllRequestedCaipNetworks(),e=s.W.getAllApprovedCaipNetworkIds();if(await async function(t){const{paymentAssetNetwork:e,activeCaipNetwork:a,approvedCaipNetworkIds:i,requestedCaipNetworks:n}=t,o=l.w.sortRequestedNetworks(i,n).find(t=>t.caipNetworkId===e);if(!o)throw new N(b);if(o.caipNetworkId===a.caipNetworkId)return;const r=s.W.getNetworkProp("supportsAllNetworks",o.chainNamespace);if(!i?.includes(o.caipNetworkId)&&!r)throw new N(b);try{await s.W.switchActiveNetwork(o)}catch(t){throw new N(C,t)}}({paymentAssetNetwork:U.paymentAsset.network,activeCaipNetwork:n,approvedCaipNetworkIds:e,requestedCaipNetworks:t}),await c.W.open({view:"PayLoading"}),i!==v.o.CHAIN.EVM)throw new N(I);"native"===U.paymentAsset.asset&&(U.currentPayment.result=await async function(t,e,a){if(e!==v.o.CHAIN.EVM)throw new N(I);if(!a.fromAddress)throw new N(b,"fromAddress is required for native EVM payments.");const i="string"==typeof a.amount?parseFloat(a.amount):a.amount;if(isNaN(i))throw new N(b);const n=t.metadata?.decimals??18,o=u.x.parseUnits(i.toString(),n);if("bigint"!=typeof o)throw new N(C);return await u.x.sendTransaction({chainNamespace:e,to:a.recipient,address:a.fromAddress,value:o,data:"0x"})??void 0}(U.paymentAsset,i,{recipient:U.recipient,amount:U.amount,fromAddress:a})),U.paymentAsset.asset.startsWith("0x")&&(U.currentPayment.result=await async function(t,e){if(!e.fromAddress)throw new N(b,"fromAddress is required for ERC20 EVM payments.");const a=t.asset,i=e.recipient,n=Number(t.metadata.decimals),o=u.x.parseUnits(e.amount.toString(),n);if(void 0===o)throw new N(C);return await u.x.writeContract({fromAddress:e.fromAddress,tokenAddress:a,args:[i,o],method:"transfer",abi:q.v.getERC20Abi(a),chainNamespace:v.o.CHAIN.EVM})??void 0}(U.paymentAsset,{recipient:U.recipient,amount:U.amount,fromAddress:a})),U.currentPayment.status="SUCCESS"}catch(t){U.error=t instanceof N?t.message:R.GENERIC_PAYMENT_ERROR,U.currentPayment.status="FAILED",d.P.showError(U.error)}finally{U.isPaymentInProgress=!1}},getExchangeById:t=>U.exchanges.find(e=>e.id===t),validatePayConfig(t){const{paymentAsset:e,recipient:a,amount:i}=t;if(!e)throw new N(b);if(!a)throw new N(x);if(!e.asset)throw new N(k);if(null==i||i<=0)throw new N(S)},handlePayWithWallet(){const t=r.U.state.caipAddress;if(!t)return void f.I.push("Connect");const{chainId:e,address:a}=w.C.parseCaipAddress(t),i=s.W.state.activeChain;a&&e&&i?this.handlePayment():f.I.push("Connect")},async handlePayWithExchange(t){try{U.currentPayment={type:"exchange",exchangeId:t};const{network:e,asset:a}=U.paymentAsset,i={network:e,asset:a,amount:U.amount,recipient:U.recipient},n=await this.getPayUrl(t,i);if(!n)throw new N(P);return U.currentPayment.sessionId=n.sessionId,U.currentPayment.status="IN_PROGRESS",U.currentPayment.exchangeId=t,this.initiatePayment(),{url:n.url,openInNewTab:U.openInNewTab}}catch(t){return U.error=t instanceof N?t.message:R.GENERIC_PAYMENT_ERROR,U.isPaymentInProgress=!1,d.P.showError(U.error),null}},async getBuyStatus(t,e){try{const a=await async function(t){return(await O("reown_getExchangeBuyStatus",t)).result}({sessionId:e,exchangeId:t});return"SUCCESS"!==a.status&&"FAILED"!==a.status||y.E.sendEvent({type:"track",event:"SUCCESS"===a.status?"PAY_SUCCESS":"PAY_ERROR",properties:{paymentId:U.paymentId||D,configuration:{network:U.paymentAsset.network,asset:U.paymentAsset.asset,recipient:U.recipient,amount:U.amount},currentPayment:{type:"exchange",exchangeId:U.currentPayment?.exchangeId,sessionId:U.currentPayment?.sessionId,result:a.txHash}}}),a}catch(t){throw new N(M)}},async updateBuyStatus(t,e){try{const a=await this.getBuyStatus(t,e);U.currentPayment&&(U.currentPayment.status=a.status,U.currentPayment.result=a.txHash),"SUCCESS"!==a.status&&"FAILED"!==a.status||(U.isPaymentInProgress=!1)}catch(t){throw new N(M)}},initiatePayment(){U.isPaymentInProgress=!0,U.paymentId=crypto.randomUUID()},initializeAnalytics(){U.analyticsSet||(U.analyticsSet=!0,this.subscribeKey("isPaymentInProgress",t=>{if(U.currentPayment?.status&&"UNKNOWN"!==U.currentPayment.status){const t={IN_PROGRESS:"PAY_INITIATED",SUCCESS:"PAY_SUCCESS",FAILED:"PAY_ERROR"}[U.currentPayment.status];y.E.sendEvent({type:"track",event:t,properties:{paymentId:U.paymentId||D,configuration:{network:U.paymentAsset.network,asset:U.paymentAsset.asset,recipient:U.recipient,amount:U.amount},currentPayment:{type:U.currentPayment.type,exchangeId:U.currentPayment.exchangeId,sessionId:U.currentPayment.sessionId,result:U.currentPayment.result}}})}}))}},H=i.AH`
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  .token-display {
    padding: var(--wui-spacing-s) var(--wui-spacing-m);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-bg-125);
    margin-top: var(--wui-spacing-s);
    margin-bottom: var(--wui-spacing-s);
  }

  .token-display wui-text {
    text-transform: none;
  }

  wui-loading-spinner {
    padding: var(--wui-spacing-xs);
  }
`;var V=function(t,e,a,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,a,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(o<3?n(r):o>3?n(e,a,r):n(e,a))||r);return o>3&&r&&Object.defineProperty(e,a,r),r};let F=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.amount="",this.tokenSymbol="",this.networkName="",this.exchanges=B.state.exchanges,this.isLoading=B.state.isLoading,this.loadingExchangeId=null,this.connectedWalletInfo=r.U.state.connectedWalletInfo,this.initializePaymentDetails(),this.unsubscribe.push(B.subscribeKey("exchanges",t=>this.exchanges=t)),this.unsubscribe.push(B.subscribeKey("isLoading",t=>this.isLoading=t)),this.unsubscribe.push(r.U.subscribe(t=>this.connectedWalletInfo=t.connectedWalletInfo)),B.fetchExchanges()}get isWalletConnected(){return"connected"===r.U.state.status}render(){return i.qy`
      <wui-flex flexDirection="column">
        <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
          ${this.renderPaymentHeader()}

          <wui-flex flexDirection="column" gap="s">
            ${this.renderPayWithWallet()} ${this.renderExchangeOptions()}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}initializePaymentDetails(){const t=B.getPaymentAsset();this.networkName=t.network,this.tokenSymbol=t.metadata.symbol,this.amount=B.state.amount.toString()}renderPayWithWallet(){return function(t){const{chainNamespace:e}=w.C.parseCaipNetworkId(t);return Z.includes(e)}(this.networkName)?i.qy`<wui-flex flexDirection="column" gap="s">
        ${this.isWalletConnected?this.renderConnectedView():this.renderDisconnectedView()}
      </wui-flex>
      <wui-separator text="or"></wui-separator>`:i.qy``}renderPaymentHeader(){let t=this.networkName;if(this.networkName){const e=s.W.getAllRequestedCaipNetworks().find(t=>t.caipNetworkId===this.networkName);e&&(t=e.name)}return i.qy`
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex alignItems="center" gap="xs">
          <wui-text variant="large-700" color="fg-100">${this.amount||"0.0000"}</wui-text>
          <wui-flex class="token-display" alignItems="center" gap="xxs">
            <wui-text variant="paragraph-600" color="fg-100">
              ${this.tokenSymbol||"Unknown Asset"}
            </wui-text>
            ${t?i.qy`
                  <wui-text variant="small-500" color="fg-200"> on ${t} </wui-text>
                `:""}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}renderConnectedView(){const t=this.connectedWalletInfo?.name||"connected wallet";return i.qy`
      <wui-list-item
        @click=${this.onWalletPayment}
        ?chevron=${!0}
        data-testid="wallet-payment-option"
      >
        <wui-flex alignItems="center" gap="s">
          <wui-wallet-image
            size="sm"
            imageSrc=${(0,o.J)(this.connectedWalletInfo?.icon)}
            name=${(0,o.J)(this.connectedWalletInfo?.name)}
          ></wui-wallet-image>
          <wui-text variant="paragraph-500" color="inherit">Pay with ${t}</wui-text>
        </wui-flex>
      </wui-list-item>

      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="disconnect"
        @click=${this.onDisconnect}
        data-testid="disconnect-button"
        ?chevron=${!1}
      >
        <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
      </wui-list-item>
    `}renderDisconnectedView(){return i.qy`<wui-list-item
      variant="icon"
      iconVariant="overlay"
      icon="walletPlaceholder"
      @click=${this.onWalletPayment}
      ?chevron=${!0}
      data-testid="wallet-payment-option"
    >
      <wui-text variant="paragraph-500" color="inherit">Pay from wallet</wui-text>
    </wui-list-item>`}renderExchangeOptions(){return this.isLoading?i.qy`<wui-flex justifyContent="center" alignItems="center">
        <wui-spinner size="md"></wui-spinner>
      </wui-flex>`:0===this.exchanges.length?i.qy`<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-100">No exchanges available</wui-text>
      </wui-flex>`:this.exchanges.map(t=>i.qy`
        <wui-list-item
          @click=${()=>this.onExchangePayment(t.id)}
          data-testid="exchange-option-${t.id}"
          ?chevron=${!0}
          ?disabled=${null!==this.loadingExchangeId}
        >
          <wui-flex alignItems="center" gap="s">
            ${this.loadingExchangeId===t.id?i.qy`<wui-loading-spinner color="accent-100" size="md"></wui-loading-spinner>`:i.qy`<wui-wallet-image
                  size="sm"
                  imageSrc=${(0,o.J)(t.imageUrl)}
                  name=${t.name}
                ></wui-wallet-image>`}
            <wui-text flexGrow="1" variant="paragraph-500" color="inherit"
              >Pay with ${t.name} <wui-spinner size="sm" color="fg-200"></wui-spinner
            ></wui-text>
          </wui-flex>
        </wui-list-item>
      `)}onWalletPayment(){B.handlePayWithWallet()}async onExchangePayment(t){try{this.loadingExchangeId=t;const e=await B.handlePayWithExchange(t);e&&(await c.W.open({view:"PayLoading"}),l.w.openHref(e.url,e.openInNewTab?"_blank":"_self"))}catch(t){console.error("Failed to pay with exchange",t),d.P.showError("Failed to pay with exchange")}finally{this.loadingExchangeId=null}}async onDisconnect(t){t.stopPropagation();try{await u.x.disconnect(),c.W.close()}catch{console.error("Failed to disconnect"),d.P.showError("Failed to disconnect")}}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}};F.styles=H,V([(0,n.wk)()],F.prototype,"amount",void 0),V([(0,n.wk)()],F.prototype,"tokenSymbol",void 0),V([(0,n.wk)()],F.prototype,"networkName",void 0),V([(0,n.wk)()],F.prototype,"exchanges",void 0),V([(0,n.wk)()],F.prototype,"isLoading",void 0),V([(0,n.wk)()],F.prototype,"loadingExchangeId",void 0),V([(0,n.wk)()],F.prototype,"connectedWalletInfo",void 0),F=V([(0,h.EM)("w3m-pay-view")],F);var G=a(42535);a(73921);const Y=i.AH`
  :host {
    display: block;
    height: 100%;
    width: 100%;
  }
`;var K=function(t,e,a,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,a,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(o<3?n(r):o>3?n(e,a,r):n(e,a))||r);return o>3&&r&&Object.defineProperty(e,a,r),r};let J=class extends i.WF{constructor(){super(),this.loadingMessage="",this.subMessage="",this.paymentState="in-progress",this.paymentState=B.state.isPaymentInProgress?"in-progress":"completed",this.updateMessages(),this.setupSubscription(),this.setupExchangeSubscription()}disconnectedCallback(){clearInterval(this.exchangeSubscription)}render(){return i.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center"> ${this.getStateIcon()} </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            ${this.loadingMessage}
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            ${this.subMessage}
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}updateMessages(){switch(this.paymentState){case"completed":this.loadingMessage="Payment completed",this.subMessage="Your transaction has been successfully processed";break;case"error":this.loadingMessage="Payment failed",this.subMessage="There was an error processing your transaction";break;default:"exchange"===B.state.currentPayment?.type?(this.loadingMessage="Payment initiated",this.subMessage="Please complete the payment on the exchange"):(this.loadingMessage="Awaiting payment confirmation",this.subMessage="Please confirm the payment transaction in your wallet")}}getStateIcon(){switch(this.paymentState){case"completed":return this.successTemplate();case"error":return this.errorTemplate();default:return this.loaderTemplate()}}setupExchangeSubscription(){"exchange"===B.state.currentPayment?.type&&(this.exchangeSubscription=setInterval(async()=>{const t=B.state.currentPayment?.exchangeId,e=B.state.currentPayment?.sessionId;t&&e&&(await B.updateBuyStatus(t,e),"SUCCESS"===B.state.currentPayment?.status&&clearInterval(this.exchangeSubscription))},4e3))}setupSubscription(){B.subscribeKey("isPaymentInProgress",t=>{t||"in-progress"!==this.paymentState||(B.state.error||!B.state.currentPayment?.result?this.paymentState="error":this.paymentState="completed",this.updateMessages(),setTimeout(()=>{"disconnected"!==u.x.state.status&&c.W.close()},3e3))}),B.subscribeKey("error",t=>{t&&"in-progress"===this.paymentState&&(this.paymentState="error",this.updateMessages())})}loaderTemplate(){const t=G.W.state.themeVariables["--w3m-border-radius-master"],e=t?parseInt(t.replace("px",""),10):4;return i.qy`<wui-loading-thumbnail radius=${9*e}></wui-loading-thumbnail>`}successTemplate(){return i.qy`<wui-icon size="xl" color="success-100" name="checkmark"></wui-icon>`}errorTemplate(){return i.qy`<wui-icon size="xl" color="error-100" name="close"></wui-icon>`}};async function X(t){return B.handleOpenPay(t)}function Q(){return B.getExchanges()}function tt(){return B.state.currentPayment?.result}function et(){return B.state.error}function at(){return B.state.isPaymentInProgress}J.styles=Y,K([(0,n.wk)()],J.prototype,"loadingMessage",void 0),K([(0,n.wk)()],J.prototype,"subMessage",void 0),K([(0,n.wk)()],J.prototype,"paymentState",void 0),J=K([(0,h.EM)("w3m-pay-loading-view")],J);const it={network:"eip155:8453",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},nt={network:"eip155:8453",asset:"0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},ot={network:"eip155:84532",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}}},79932:(t,e,a)=>{a(82207)},80659:(t,e,a)=>{a(63718)},82207:(t,e,a)=>{var i=a(48422),n=a(91427),o=a(23507),r=a(56063),s=a(68664);const c=i.AH`
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
`;var l=function(t,e,a,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,a,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(o<3?n(r):o>3?n(e,a,r):n(e,a))||r);return o>3&&r&&Object.defineProperty(e,a,r),r};let d=class extends i.WF{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,i.qy`<slot class=${(0,o.H)(t)}></slot>`}};d.styles=[r.W5,c],l([(0,n.MZ)()],d.prototype,"variant",void 0),l([(0,n.MZ)()],d.prototype,"color",void 0),l([(0,n.MZ)()],d.prototype,"align",void 0),l([(0,n.MZ)()],d.prototype,"lineClamp",void 0),d=l([(0,s.E)("wui-text")],d)},91427:(t,e,a)=>{a.d(e,{MZ:()=>i.M,wk:()=>n.w});var i=a(69623),n=a(4537)},99233:(t,e,a)=>{a(36639)},99838:(t,e,a)=>{a(31037)}}]);
//# sourceMappingURL=4865.widget.iife.js.map