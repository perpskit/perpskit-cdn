/*! For license information please see 9885.widget.iife.js.LICENSE.txt */
"undefined"!=typeof globalThis&&(void 0===globalThis.process&&(globalThis.process={env:{NODE_ENV:"production"},browser:!0,version:"",versions:{}}),void 0===globalThis.require&&(globalThis.require=function(e){if("process/browser"===e||"process"===e)return globalThis.process;throw new Error("Module not found: "+e)})),"undefined"!=typeof window&&(void 0===window.process&&(window.process={env:{NODE_ENV:"production"},browser:!0,version:"",versions:{}}),void 0===window.require&&(window.require=function(e){if("process/browser"===e||"process"===e)return window.process;throw new Error("Module not found: "+e)})),"undefined"!=typeof global&&(void 0===global.process&&(global.process={env:{NODE_ENV:"production"},browser:!0,version:"",versions:{}}),void 0===global.require&&(global.require=function(e){if("process/browser"===e||"process"===e)return global.process;throw new Error("Module not found: "+e)})),"undefined"!=typeof self&&(void 0===self.process&&(self.process={env:{NODE_ENV:"production"},browser:!0,version:"",versions:{}}),void 0===self.require&&(self.require=function(e){if("process/browser"===e||"process"===e)return self.process;throw new Error("Module not found: "+e)})),(this.webpackChunkHLWidget=this.webpackChunkHLWidget||[]).push([[9885],{4537:(e,t,a)=>{a.d(t,{w:()=>n});var i=a(69623);function n(e){return(0,i.M)({...e,state:!0,attribute:!1})}},11942:(e,t,a)=>{var i=a(48422),n=a(91427),o=(a(77200),a(47080)),r=a(39783);const s=i.AH`
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
`;var c=function(e,t,a,i){var n,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,a,r):n(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r};let l=class extends i.WF{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return i.qy`<button>
      <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
    </button>`}};l.styles=[o.W5,o.fD,s],c([(0,n.MZ)()],l.prototype,"text",void 0),c([(0,n.MZ)()],l.prototype,"icon",void 0),l=c([(0,r.E)("wui-icon-button")],l)},15467:(e,t,a)=>{a.d(t,{a:()=>i});const i=a(48422).JW`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`},17262:(e,t,a)=>{var i=a(48422),n=a(91427),o=a(47080),r=a(39783);const s=i.AH`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-object-fit='cover']) img {
    object-fit: cover;
    object-position: center center;
  }

  :host([data-object-fit='contain']) img {
    object-fit: contain;
    object-position: center center;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }
`;var c=function(e,t,a,i){var n,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,a,r):n(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r};let l=class extends i.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0,this.objectFit="cover"}render(){return this.objectFit&&(this.dataset.objectFit=this.objectFit),this.style.cssText=`\n      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      `,i.qy`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};l.styles=[o.W5,o.ck,s],c([(0,n.MZ)()],l.prototype,"src",void 0),c([(0,n.MZ)()],l.prototype,"alt",void 0),c([(0,n.MZ)()],l.prototype,"size",void 0),c([(0,n.MZ)()],l.prototype,"objectFit",void 0),l=c([(0,r.E)("wui-image")],l)},18492:(e,t,a)=>{a(25354)},18901:(e,t,a)=>{var i=a(48422),n=a(91427),o=a(47080),r=a(39783);const s=i.AH`
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
`;var c=function(e,t,a,i){var n,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,a,r):n(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r};let l=class extends i.WF{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText="--local-color: "+("inherit"===this.color?"inherit":`var(--wui-color-${this.color})`),this.dataset.size=this.size,i.qy`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};l.styles=[o.W5,s],c([(0,n.MZ)()],l.prototype,"color",void 0),c([(0,n.MZ)()],l.prototype,"size",void 0),l=c([(0,r.E)("wui-loading-spinner")],l)},20611:(e,t,a)=>{a(84752)},23507:(e,t,a)=>{a.d(t,{H:()=>o});var i=a(80971),n=a(39341);const o=(0,n.u$)(class extends n.WL{constructor(e){if(super(e),e.type!==n.OA.ATTRIBUTE||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e)));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const a=e.element.classList;for(const e of this.st)e in t||(a.remove(e),this.st.delete(e));for(const e in t){const i=!!t[e];i===this.st.has(e)||this.nt?.has(e)||(i?(a.add(e),this.st.add(e)):(a.remove(e),this.st.delete(e)))}return i.c0}})},25354:(e,t,a)=>{var i=a(48422),n=a(91427),o=(a(77200),a(47080)),r=a(39783);const s=i.AH`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    :host(:not([size='sm'])) button {
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
`;var c=function(e,t,a,i){var n,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,a,r):n(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r};let l=class extends i.WF{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){this.dataset.size=this.size;let e="",t="";switch(this.size){case"lg":e="--wui-border-radius-xs",t="--wui-spacing-1xs";break;case"sm":e="--wui-border-radius-3xs",t="--wui-spacing-xxs";break;default:e="--wui-border-radius-xxs",t="--wui-spacing-2xs"}return this.style.cssText=`\n    --local-border-radius: var(${e});\n    --local-padding: var(${t});\n    `,i.qy`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};l.styles=[o.W5,o.fD,o.ck,s],c([(0,n.MZ)()],l.prototype,"size",void 0),c([(0,n.MZ)({type:Boolean})],l.prototype,"disabled",void 0),c([(0,n.MZ)()],l.prototype,"icon",void 0),c([(0,n.MZ)()],l.prototype,"iconColor",void 0),l=c([(0,r.E)("wui-icon-link")],l)},27165:(e,t,a)=>{a.d(t,{Rt:()=>r,sO:()=>o});var i=a(80971);const{I:n}=i.ge,o=e=>null===e||"object"!=typeof e&&"function"!=typeof e,r=e=>void 0===e.strings},30204:(e,t,a)=>{var i=a(48422),n=a(91427),o=(a(77200),a(47080)),r=a(39783);const s=i.AH`
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
`;var c=function(e,t,a,i){var n,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,a,r):n(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r};let l=class extends i.WF{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,t="lg"===this.size,a="xl"===this.size,n=t?"12%":"16%",o=t?"xxs":a?"s":"3xl",r="gray"===this.background,s="opaque"===this.background,c="accent-100"===this.backgroundColor&&s||"success-100"===this.backgroundColor&&s||"error-100"===this.backgroundColor&&s||"inverse-100"===this.backgroundColor&&s;let l=`var(--wui-color-${this.backgroundColor})`;return c?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:r&&(l=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${l};\n       --local-bg-mix: ${c||r?"100%":n};\n       --local-border-radius: var(--wui-border-radius-${o});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,i.qy` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};l.styles=[o.W5,o.fD,s],c([(0,n.MZ)()],l.prototype,"size",void 0),c([(0,n.MZ)()],l.prototype,"backgroundColor",void 0),c([(0,n.MZ)()],l.prototype,"iconColor",void 0),c([(0,n.MZ)()],l.prototype,"iconSize",void 0),c([(0,n.MZ)()],l.prototype,"background",void 0),c([(0,n.MZ)({type:Boolean})],l.prototype,"border",void 0),c([(0,n.MZ)()],l.prototype,"borderColor",void 0),c([(0,n.MZ)()],l.prototype,"icon",void 0),l=c([(0,r.E)("wui-icon-box")],l)},32480:(e,t,a)=>{a(18901)},32971:(e,t,a)=>{a.d(t,{T:()=>h});var i=a(80971),n=a(27165),o=a(64720);class r{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class s{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}}var c=a(39341);const l=e=>!(0,n.sO)(e)&&"function"==typeof e.then,d=1073741823;class u extends o.Kq{constructor(){super(...arguments),this._$Cwt=d,this._$Cbt=[],this._$CK=new r(this),this._$CX=new s}render(...e){return e.find(e=>!l(e))??i.c0}update(e,t){const a=this._$Cbt;let n=a.length;this._$Cbt=t;const o=this._$CK,r=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){const i=t[e];if(!l(i))return this._$Cwt=e,i;e<n&&i===a[e]||(this._$Cwt=d,n=0,Promise.resolve(i).then(async e=>{for(;r.get();)await r.get();const t=o.deref();if(void 0!==t){const a=t._$Cbt.indexOf(i);a>-1&&a<t._$Cwt&&(t._$Cwt=a,t.setValue(e))}}))}return i.c0}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const h=(0,c.u$)(u)},33846:(e,t,a)=>{a(66727)},35404:(e,t,a)=>{var i=a(48422),n=a(91427),o=a(47080),r=a(39783);const s=i.AH`
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
`;var c=function(e,t,a,i){var n,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,a,r):n(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r};let l=class extends i.WF{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,t=36-e,a=116+t,n=245+t,o=360+1.75*t;return i.qy`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${a} ${n}"
          stroke-dashoffset=${o}
        />
      </svg>
    `}};l.styles=[o.W5,s],c([(0,n.MZ)({type:Number})],l.prototype,"radius",void 0),l=c([(0,r.E)("wui-loading-thumbnail")],l)},36858:(e,t,a)=>{var i=a(48422),n=a(91427),o=a(23507),r=a(47080),s=a(39783);const c=i.AH`
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
  .wui-font-micro-600,
  .wui-font-micro-500 {
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
`;var l=function(e,t,a,i){var n,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,a,r):n(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r};let d=class extends i.WF{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,i.qy`<slot class=${(0,o.H)(e)}></slot>`}};d.styles=[r.W5,c],l([(0,n.MZ)()],d.prototype,"variant",void 0),l([(0,n.MZ)()],d.prototype,"color",void 0),l([(0,n.MZ)()],d.prototype,"align",void 0),l([(0,n.MZ)()],d.prototype,"lineClamp",void 0),d=l([(0,s.E)("wui-text")],d)},38273:(e,t,a)=>{a(46116)},39168:(e,t,a)=>{a.d(t,{J:()=>n});var i=a(80971);const n=e=>e??i.s6},39341:(e,t,a)=>{a.d(t,{OA:()=>i,WL:()=>o,u$:()=>n});const i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},n=e=>(...t)=>({_$litDirective$:e,values:t});class o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,a){this._$Ct=e,this._$AM=t,this._$Ci=a}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},41936:(e,t,a)=>{var i=a(48422),n=a(91427);const o=i.JW`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var r=a(15467);const s=i.JW`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`;a(77200),a(17262);var c=a(47080),l=a(39783);const d=i.AH`
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
`;var u=function(e,t,a,i){var n,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,a,r):n(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r};let h=class extends i.WF{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:s,md:r.a,lg:o},this.selected=!1,this.round=!1}render(){return this.round?(this.dataset.round="true",this.style.cssText="\n      --local-width: var(--wui-spacing-3xl);\n      --local-height: var(--wui-spacing-3xl);\n      --local-icon-size: var(--wui-spacing-l);\n    "):this.style.cssText=`\n\n      --local-path: var(--wui-path-network-${this.size});\n      --local-width:  var(--wui-width-network-${this.size});\n      --local-height:  var(--wui-height-network-${this.size});\n      --local-icon-size:  var(--wui-icon-size-network-${this.size});\n    `,i.qy`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?i.qy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:i.qy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};h.styles=[c.W5,d],u([(0,n.MZ)()],h.prototype,"size",void 0),u([(0,n.MZ)()],h.prototype,"name",void 0),u([(0,n.MZ)({type:Object})],h.prototype,"networkImagesBySize",void 0),u([(0,n.MZ)()],h.prototype,"imageSrc",void 0),u([(0,n.MZ)({type:Boolean})],h.prototype,"selected",void 0),u([(0,n.MZ)({type:Boolean})],h.prototype,"round",void 0),h=u([(0,l.E)("wui-network-image")],h)},46116:(e,t,a)=>{var i=a(48422),n=a(91427),o=a(47080),r=a(86515),s=a(39783);const c=i.AH`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var l=function(e,t,a,i){var n,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,a,r):n(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r};let d=class extends i.WF{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&r.Z.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&r.Z.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&r.Z.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&r.Z.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&r.Z.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&r.Z.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&r.Z.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&r.Z.getSpacingStyles(this.margin,3)};\n    `,i.qy`<slot></slot>`}};d.styles=[o.W5,c],l([(0,n.MZ)()],d.prototype,"flexDirection",void 0),l([(0,n.MZ)()],d.prototype,"flexWrap",void 0),l([(0,n.MZ)()],d.prototype,"flexBasis",void 0),l([(0,n.MZ)()],d.prototype,"flexGrow",void 0),l([(0,n.MZ)()],d.prototype,"flexShrink",void 0),l([(0,n.MZ)()],d.prototype,"alignItems",void 0),l([(0,n.MZ)()],d.prototype,"justifyContent",void 0),l([(0,n.MZ)()],d.prototype,"columnGap",void 0),l([(0,n.MZ)()],d.prototype,"rowGap",void 0),l([(0,n.MZ)()],d.prototype,"gap",void 0),l([(0,n.MZ)()],d.prototype,"padding",void 0),l([(0,n.MZ)()],d.prototype,"margin",void 0),d=l([(0,s.E)("wui-flex")],d)},49386:(e,t,a)=>{var i=a(48422),n=a(91427),o=a(39168),r=(a(77200),a(17262),a(18901),a(36858),a(46116),a(47080)),s=a(39783);a(30204);const c=i.AH`
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
`;var l=function(e,t,a,i){var n,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,a,r):n(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r};let d=class extends i.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return i.qy`
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
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return i.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return i.qy`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t="square-blue"===this.iconVariant?"mdl":"md",a=this.iconSize?this.iconSize:t;return i.qy`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${a}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?i.qy`<wui-loading-spinner
        data-testid="wui-list-item-loading-spinner"
        color="fg-300"
      ></wui-loading-spinner>`:i.qy``}chevronTemplate(){return this.chevron?i.qy`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};d.styles=[r.W5,r.fD,c],l([(0,n.MZ)()],d.prototype,"icon",void 0),l([(0,n.MZ)()],d.prototype,"iconSize",void 0),l([(0,n.MZ)()],d.prototype,"tabIdx",void 0),l([(0,n.MZ)()],d.prototype,"variant",void 0),l([(0,n.MZ)()],d.prototype,"iconVariant",void 0),l([(0,n.MZ)({type:Boolean})],d.prototype,"disabled",void 0),l([(0,n.MZ)()],d.prototype,"imageSrc",void 0),l([(0,n.MZ)()],d.prototype,"alt",void 0),l([(0,n.MZ)({type:Boolean})],d.prototype,"chevron",void 0),l([(0,n.MZ)({type:Boolean})],d.prototype,"loading",void 0),d=l([(0,s.E)("wui-list-item")],d)},53001:(e,t,a)=>{a(17262)},55986:(e,t,a)=>{a(41936)},57933:(e,t,a)=>{var i=a(48422),n=a(91427),o=(a(36858),a(47080)),r=a(39783);const s=i.AH`
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
`;var c=function(e,t,a,i){var n,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,a,r):n(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r};let l=class extends i.WF{constructor(){super(...arguments),this.text=""}render(){return i.qy`${this.template()}`}template(){return this.text?i.qy`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};l.styles=[o.W5,s],c([(0,n.MZ)()],l.prototype,"text",void 0),l=c([(0,r.E)("wui-separator")],l)},64720:(e,t,a)=>{a.d(t,{Kq:()=>u});var i=a(27165),n=a(39341);const o=(e,t)=>{const a=e._$AN;if(void 0===a)return!1;for(const e of a)e._$AO?.(t,!1),o(e,t);return!0},r=e=>{let t,a;do{if(void 0===(t=e._$AM))break;a=t._$AN,a.delete(e),e=t}while(0===a?.size)},s=e=>{for(let t;t=e._$AM;e=t){let a=t._$AN;if(void 0===a)t._$AN=a=new Set;else if(a.has(e))break;a.add(e),d(t)}};function c(e){void 0!==this._$AN?(r(this),this._$AM=e,s(this)):this._$AM=e}function l(e,t=!1,a=0){const i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(i))for(let e=a;e<i.length;e++)o(i[e],!1),r(i[e]);else null!=i&&(o(i,!1),r(i));else o(this,e)}const d=e=>{e.type==n.OA.CHILD&&(e._$AP??=l,e._$AQ??=c)};class u extends n.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,a){super._$AT(e,t,a),s(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(o(this,e),r(this))}setValue(e){if((0,i.Rt)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}},66727:(e,t,a)=>{var i=a(48422),n=a(91427),o=(a(18901),a(36858),a(47080)),r=a(39783);const s=i.AH`
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
  button[data-size='xs'] {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-s) var(--wui-spacing-3xs) var(--wui-spacing-s);
    height: 24px;
  }

  button[data-size='xs'][data-icon-left='true'][data-icon-right='false'] {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-s) var(--wui-spacing-3xs) var(--wui-spacing-s);
  }

  button[data-size='xs'][data-icon-right='true'][data-icon-left='false'] {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-s) var(--wui-spacing-3xs) var(--wui-spacing-s);
  }

  button[data-size='sm'] {
    padding: 7.2px var(--wui-spacing-s) 7.2px var(--wui-spacing-s);
    height: 32px;
  }

  button[data-size='sm'][data-icon-left='true'][data-icon-right='false'] {
    padding: 7.2px var(--wui-spacing-s) 7.2px var(--wui-spacing-s);
  }

  button[data-size='sm'][data-icon-right='true'][data-icon-left='false'] {
    padding: 7.2px var(--wui-spacing-s) 7.2px var(--wui-spacing-s);
  }

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
`;var c=function(e,t,a,i){var n,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,a,r):n(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r};const l={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},d={lg:"paragraph-600",md:"small-600",sm:"small-600",xs:"tiny-600"},u={lg:"md",md:"md",sm:"sm",xs:"sm"};let h=class extends i.WF{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`\n    --local-width: ${this.fullWidth?"100%":"auto"};\n    --local-opacity-100: ${this.loading?0:1};\n    --local-opacity-000: ${this.loading?1:0};\n    --local-border-radius: var(--wui-border-radius-${this.borderRadius});\n    `;const e=this.textVariant??d[this.size];return i.qy`
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
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const e=u[this.size],t=this.disabled?l.disabled:l[this.variant];return i.qy`<wui-loading-spinner color=${t} size=${e}></wui-loading-spinner>`}return i.qy``}};h.styles=[o.W5,o.fD,s],c([(0,n.MZ)()],h.prototype,"size",void 0),c([(0,n.MZ)({type:Boolean})],h.prototype,"disabled",void 0),c([(0,n.MZ)({type:Boolean})],h.prototype,"fullWidth",void 0),c([(0,n.MZ)({type:Boolean})],h.prototype,"loading",void 0),c([(0,n.MZ)()],h.prototype,"variant",void 0),c([(0,n.MZ)({type:Boolean})],h.prototype,"hasIconLeft",void 0),c([(0,n.MZ)({type:Boolean})],h.prototype,"hasIconRight",void 0),c([(0,n.MZ)()],h.prototype,"borderRadius",void 0),c([(0,n.MZ)()],h.prototype,"textVariant",void 0),h=c([(0,r.E)("wui-button")],h)},66933:(e,t,a)=>{a(36858)},69623:(e,t,a)=>{a.d(t,{M:()=>r});var i=a(56451);const n={attribute:!0,type:String,converter:i.W3,reflect:!1,hasChanged:i.Ec},o=(e=n,t,a)=>{const{kind:i,metadata:o}=a;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),"setter"===i&&((e=Object.create(e)).wrapped=!0),r.set(a.name,e),"accessor"===i){const{name:i}=a;return{set(a){const n=t.get.call(this);t.set.call(this,a),this.requestUpdate(i,n,e)},init(t){return void 0!==t&&this.C(i,void 0,e,t),t}}}if("setter"===i){const{name:i}=a;return function(a){const n=this[i];t.call(this,a),this.requestUpdate(i,n,e)}}throw Error("Unsupported decorator location: "+i)};function r(e){return(t,a)=>"object"==typeof a?o(e,t,a):((e,t,a)=>{const i=t.hasOwnProperty(a);return t.constructor.createProperty(a,e),i?Object.getOwnPropertyDescriptor(t,a):void 0})(e,t,a)}},77200:(e,t,a)=>{var i=a(48422),n=a(91427),o=a(32971);const r=new class{constructor(){this.cache=new Map}set(e,t){this.cache.set(e,t)}get(e){return this.cache.get(e)}has(e){return this.cache.has(e)}delete(e){this.cache.delete(e)}clear(){this.cache.clear()}};var s=a(47080),c=a(39783);const l=i.AH`
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
`;var d=function(e,t,a,i){var n,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,a,r):n(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r};const u={add:async()=>(await a.e(5619).then(a.bind(a,95619))).addSvg,allWallets:async()=>(await a.e(9452).then(a.bind(a,99452))).allWalletsSvg,arrowBottomCircle:async()=>(await a.e(5374).then(a.bind(a,45374))).arrowBottomCircleSvg,appStore:async()=>(await a.e(3019).then(a.bind(a,33019))).appStoreSvg,apple:async()=>(await a.e(8852).then(a.bind(a,58852))).appleSvg,arrowBottom:async()=>(await a.e(3097).then(a.bind(a,33097))).arrowBottomSvg,arrowLeft:async()=>(await a.e(9275).then(a.bind(a,89275))).arrowLeftSvg,arrowRight:async()=>(await a.e(1282).then(a.bind(a,61282))).arrowRightSvg,arrowTop:async()=>(await a.e(1967).then(a.bind(a,31967))).arrowTopSvg,bank:async()=>(await a.e(2236).then(a.bind(a,72236))).bankSvg,browser:async()=>(await a.e(6524).then(a.bind(a,76524))).browserSvg,bin:async()=>(await a.e(4249).then(a.bind(a,64249))).binSvg,bitcoin:async()=>(await a.e(4286).then(a.bind(a,94286))).bitcoinSvg,card:async()=>(await a.e(3524).then(a.bind(a,93524))).cardSvg,checkmark:async()=>(await a.e(525).then(a.bind(a,90525))).checkmarkSvg,checkmarkBold:async()=>(await a.e(8905).then(a.bind(a,48905))).checkmarkBoldSvg,chevronBottom:async()=>(await a.e(4231).then(a.bind(a,44231))).chevronBottomSvg,chevronLeft:async()=>(await a.e(5329).then(a.bind(a,65329))).chevronLeftSvg,chevronRight:async()=>(await a.e(1176).then(a.bind(a,61176))).chevronRightSvg,chevronTop:async()=>(await a.e(3745).then(a.bind(a,3745))).chevronTopSvg,chromeStore:async()=>(await a.e(9208).then(a.bind(a,59208))).chromeStoreSvg,clock:async()=>(await a.e(614).then(a.bind(a,20614))).clockSvg,close:async()=>(await a.e(3176).then(a.bind(a,3176))).closeSvg,compass:async()=>(await a.e(4484).then(a.bind(a,94484))).compassSvg,coinPlaceholder:async()=>(await a.e(410).then(a.bind(a,20410))).coinPlaceholderSvg,copy:async()=>(await a.e(355).then(a.bind(a,70355))).copySvg,cursor:async()=>(await a.e(988).then(a.bind(a,40988))).cursorSvg,cursorTransparent:async()=>(await a.e(4855).then(a.bind(a,84855))).cursorTransparentSvg,circle:async()=>(await a.e(8178).then(a.bind(a,78178))).circleSvg,desktop:async()=>(await a.e(4208).then(a.bind(a,54208))).desktopSvg,disconnect:async()=>(await a.e(9728).then(a.bind(a,99728))).disconnectSvg,discord:async()=>(await a.e(4172).then(a.bind(a,64172))).discordSvg,ethereum:async()=>(await a.e(6351).then(a.bind(a,96351))).ethereumSvg,etherscan:async()=>(await a.e(1461).then(a.bind(a,81461))).etherscanSvg,extension:async()=>(await a.e(7381).then(a.bind(a,67381))).extensionSvg,externalLink:async()=>(await a.e(7274).then(a.bind(a,47274))).externalLinkSvg,facebook:async()=>(await a.e(4698).then(a.bind(a,4698))).facebookSvg,farcaster:async()=>(await a.e(5505).then(a.bind(a,5505))).farcasterSvg,filters:async()=>(await a.e(8075).then(a.bind(a,48075))).filtersSvg,github:async()=>(await a.e(8573).then(a.bind(a,48573))).githubSvg,google:async()=>(await a.e(9521).then(a.bind(a,39521))).googleSvg,helpCircle:async()=>(await a.e(7842).then(a.bind(a,97842))).helpCircleSvg,image:async()=>(await a.e(4541).then(a.bind(a,64541))).imageSvg,id:async()=>(await a.e(8743).then(a.bind(a,18743))).idSvg,infoCircle:async()=>(await a.e(2907).then(a.bind(a,42907))).infoCircleSvg,lightbulb:async()=>(await a.e(7547).then(a.bind(a,57547))).lightbulbSvg,mail:async()=>(await a.e(3721).then(a.bind(a,3721))).mailSvg,mobile:async()=>(await a.e(2756).then(a.bind(a,42756))).mobileSvg,more:async()=>(await a.e(8023).then(a.bind(a,28023))).moreSvg,networkPlaceholder:async()=>(await a.e(2134).then(a.bind(a,72134))).networkPlaceholderSvg,nftPlaceholder:async()=>(await a.e(8679).then(a.bind(a,38679))).nftPlaceholderSvg,off:async()=>(await a.e(413).then(a.bind(a,10413))).offSvg,playStore:async()=>(await a.e(376).then(a.bind(a,80376))).playStoreSvg,plus:async()=>(await a.e(7142).then(a.bind(a,87142))).plusSvg,qrCode:async()=>(await a.e(4195).then(a.bind(a,44195))).qrCodeIcon,recycleHorizontal:async()=>(await a.e(8942).then(a.bind(a,28942))).recycleHorizontalSvg,refresh:async()=>(await a.e(8795).then(a.bind(a,88795))).refreshSvg,search:async()=>(await a.e(6202).then(a.bind(a,6202))).searchSvg,send:async()=>(await a.e(196).then(a.bind(a,60196))).sendSvg,swapHorizontal:async()=>(await a.e(1429).then(a.bind(a,31429))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await a.e(5634).then(a.bind(a,15634))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await a.e(638).then(a.bind(a,20638))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await a.e(1259).then(a.bind(a,91259))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await a.e(2051).then(a.bind(a,82051))).swapVerticalSvg,solana:async()=>(await a.e(2178).then(a.bind(a,12178))).solanaSvg,telegram:async()=>(await a.e(7137).then(a.bind(a,57137))).telegramSvg,threeDots:async()=>(await a.e(8617).then(a.bind(a,38617))).threeDotsSvg,twitch:async()=>(await a.e(9605).then(a.bind(a,59605))).twitchSvg,twitter:async()=>(await a.e(7420).then(a.bind(a,57420))).xSvg,twitterIcon:async()=>(await a.e(5622).then(a.bind(a,5622))).twitterIconSvg,user:async()=>(await a.e(9653).then(a.bind(a,29653))).userSvg,verify:async()=>(await a.e(6963).then(a.bind(a,86963))).verifySvg,verifyFilled:async()=>(await a.e(4368).then(a.bind(a,94368))).verifyFilledSvg,wallet:async()=>(await a.e(8235).then(a.bind(a,88235))).walletSvg,walletConnect:async()=>(await a.e(3565).then(a.bind(a,33565))).walletConnectSvg,walletConnectLightBrown:async()=>(await a.e(3565).then(a.bind(a,33565))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await a.e(3565).then(a.bind(a,33565))).walletConnectBrownSvg,walletPlaceholder:async()=>(await a.e(8447).then(a.bind(a,78447))).walletPlaceholderSvg,warningCircle:async()=>(await a.e(7873).then(a.bind(a,37873))).warningCircleSvg,x:async()=>(await a.e(7420).then(a.bind(a,57420))).xSvg,info:async()=>(await a.e(4734).then(a.bind(a,54734))).infoSvg,exclamationTriangle:async()=>(await a.e(7106).then(a.bind(a,7106))).exclamationTriangleSvg,reown:async()=>(await a.e(7391).then(a.bind(a,97391))).reownSvg,"x-mark":async()=>(await a.e(8940).then(a.bind(a,68940))).xMarkSvg};let h=class extends i.WF{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n      --local-aspect-ratio: ${this.aspectRatio}\n    `,i.qy`${(0,o.T)(async function(e){if(r.has(e))return r.get(e);const t=(u[e]??u.copy)();return r.set(e,t),t}(this.name),i.qy`<div class="fallback"></div>`)}`}};h.styles=[s.W5,s.ck,l],d([(0,n.MZ)()],h.prototype,"size",void 0),d([(0,n.MZ)()],h.prototype,"name",void 0),d([(0,n.MZ)()],h.prototype,"color",void 0),d([(0,n.MZ)()],h.prototype,"aspectRatio",void 0),h=d([(0,c.E)("wui-icon")],h)},84752:(e,t,a)=>{var i=a(48422),n=a(91427),o=(a(77200),a(17262),a(46116),a(47080)),r=a(39783);a(30204);const s=i.AH`
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
`;var c=function(e,t,a,i){var n,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,a,r):n(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r};let l=class extends i.WF{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return e="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`\n       --local-border-radius: var(--wui-border-radius-${e});\n       --local-size: var(--wui-wallet-image-size-${this.size});\n   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),i.qy`
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
    ></wui-icon>`}};l.styles=[o.fD,o.W5,s],c([(0,n.MZ)()],l.prototype,"size",void 0),c([(0,n.MZ)()],l.prototype,"name",void 0),c([(0,n.MZ)()],l.prototype,"imageSrc",void 0),c([(0,n.MZ)()],l.prototype,"walletIcon",void 0),c([(0,n.MZ)({type:Boolean})],l.prototype,"installed",void 0),c([(0,n.MZ)()],l.prototype,"badgeSize",void 0),l=c([(0,r.E)("wui-wallet-image")],l)},89885:(e,t,a)=>{a.r(t),a.d(t,{W3mPayLoadingView:()=>q,W3mPayView:()=>U,arbitrumUSDC:()=>ne,arbitrumUSDT:()=>le,baseETH:()=>Q,baseSepoliaETH:()=>te,baseUSDC:()=>ee,ethereumUSDC:()=>ae,ethereumUSDT:()=>se,getExchanges:()=>Y,getIsPaymentInProgress:()=>J,getPayError:()=>K,getPayResult:()=>F,openPay:()=>G,optimismUSDC:()=>ie,optimismUSDT:()=>ce,pay:()=>H,polygonUSDC:()=>oe,polygonUSDT:()=>de,solanaUSDC:()=>re,solanaUSDT:()=>ue});var i=a(48422),n=a(91427),o=a(39168),r=a(1759),s=a(65149),c=a(32757),l=a(65885),d=a(23774),u=a(68690),h=a(31779),p=(a(33846),a(38273),a(90315),a(11942),a(18492),a(53001),a(49386),a(32480),a(55986),a(57933),a(66933),a(20611),a(66586)),g=a(83548),w=a(33255),v=a(77133),y=a(58711),m=a(79063);const f={eip155:void 0,solana:void 0,polkadot:void 0,bip122:void 0,cosmos:void 0,sui:void 0,stacks:void 0},b=(0,p.BX)({providers:{...f},providerIds:{...f}}),x={state:b,subscribeKey:(e,t)=>(0,g.u$)(b,e,t),subscribe:e=>(0,p.B1)(b,()=>{e(b)}),subscribeProviders:e=>(0,p.B1)(b.providers,()=>e(b.providers)),setProvider(e,t){e&&t&&(b.providers[e]=(0,p.KR)(t))},getProvider(e){if(e)return b.providers[e]},setProviderId(e,t){t&&(b.providerIds[e]=t)},getProviderId(e){if(e)return b.providerIds[e]},reset(){b.providers={...f},b.providerIds={...f}},resetChain(e){b.providers[e]=void 0,b.providerIds[e]=void 0}},E={INVALID_PAYMENT_CONFIG:"INVALID_PAYMENT_CONFIG",INVALID_RECIPIENT:"INVALID_RECIPIENT",INVALID_ASSET:"INVALID_ASSET",INVALID_AMOUNT:"INVALID_AMOUNT",UNKNOWN_ERROR:"UNKNOWN_ERROR",UNABLE_TO_INITIATE_PAYMENT:"UNABLE_TO_INITIATE_PAYMENT",INVALID_CHAIN_NAMESPACE:"INVALID_CHAIN_NAMESPACE",GENERIC_PAYMENT_ERROR:"GENERIC_PAYMENT_ERROR",UNABLE_TO_GET_EXCHANGES:"UNABLE_TO_GET_EXCHANGES",ASSET_NOT_SUPPORTED:"ASSET_NOT_SUPPORTED",UNABLE_TO_GET_PAY_URL:"UNABLE_TO_GET_PAY_URL",UNABLE_TO_GET_BUY_STATUS:"UNABLE_TO_GET_BUY_STATUS"},S={[E.INVALID_PAYMENT_CONFIG]:"Invalid payment configuration",[E.INVALID_RECIPIENT]:"Invalid recipient address",[E.INVALID_ASSET]:"Invalid asset specified",[E.INVALID_AMOUNT]:"Invalid payment amount",[E.UNKNOWN_ERROR]:"Unknown payment error occurred",[E.UNABLE_TO_INITIATE_PAYMENT]:"Unable to initiate payment",[E.INVALID_CHAIN_NAMESPACE]:"Invalid chain namespace",[E.GENERIC_PAYMENT_ERROR]:"Unable to process payment",[E.UNABLE_TO_GET_EXCHANGES]:"Unable to get exchanges",[E.ASSET_NOT_SUPPORTED]:"Asset not supported by the selected exchange",[E.UNABLE_TO_GET_PAY_URL]:"Unable to get payment URL",[E.UNABLE_TO_GET_BUY_STATUS]:"Unable to get buy status"};class I extends Error{get message(){return S[this.code]}constructor(e,t){super(S[e]),this.name="AppKitPayError",this.code=e,this.details=t,Error.captureStackTrace&&Error.captureStackTrace(this,I)}}var A=a(46358);class k extends Error{}async function P(e,t){const a=`https://rpc.walletconnect.org/v1/json-rpc?projectId=${A.H.getSnapshot().projectId}`,i={jsonrpc:"2.0",id:1,method:e,params:t},n=await fetch(a,{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}}),o=await n.json();if(o.error)throw new k(o.error.message);return o}async function C(e){return(await P("reown_getExchanges",e)).result}const N=["eip155","solana"],_={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}};function T(e,t){const{chainNamespace:a,chainId:i}=v.C.parseCaipNetworkId(e),n=_[a];if(!n)throw new Error(`Unsupported chain namespace for CAIP-19 formatting: ${a}`);let o=n.native.assetNamespace,r=n.native.assetReference;return"native"!==t&&(o=n.defaultTokenNamespace,r=t),`${a}:${i}/${o}:${r}`}var $=a(55777);const R="unknown",M=(0,p.BX)({paymentAsset:{network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},recipient:"0x0",amount:0,isConfigured:!1,error:null,isPaymentInProgress:!1,exchanges:[],isLoading:!1,openInNewTab:!0,redirectUrl:void 0,payWithExchange:void 0,currentPayment:void 0,analyticsSet:!1,paymentId:void 0}),z={state:M,subscribe:e=>(0,p.B1)(M,()=>e(M)),subscribeKey:(e,t)=>(0,g.u$)(M,e,t),async handleOpenPay(e){this.resetState(),this.setPaymentConfig(e),this.subscribeEvents(),this.initializeAnalytics(),M.isConfigured=!0,y.E.sendEvent({type:"track",event:"PAY_MODAL_OPEN",properties:{exchanges:M.exchanges,configuration:{network:M.paymentAsset.network,asset:M.paymentAsset.asset,recipient:M.recipient,amount:M.amount}}}),await c.W.open({view:"Pay"})},resetState(){M.paymentAsset={network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},M.recipient="0x0",M.amount=0,M.isConfigured=!1,M.error=null,M.isPaymentInProgress=!1,M.isLoading=!1,M.currentPayment=void 0},setPaymentConfig(e){if(!e.paymentAsset)throw new I(E.INVALID_PAYMENT_CONFIG);try{M.paymentAsset=e.paymentAsset,M.recipient=e.recipient,M.amount=e.amount,M.openInNewTab=e.openInNewTab??!0,M.redirectUrl=e.redirectUrl,M.payWithExchange=e.payWithExchange,M.error=null}catch(e){throw new I(E.INVALID_PAYMENT_CONFIG,e.message)}},getPaymentAsset:()=>M.paymentAsset,getExchanges:()=>M.exchanges,async fetchExchanges(){try{M.isLoading=!0;const e=await C({page:0,asset:T(M.paymentAsset.network,M.paymentAsset.asset),amount:M.amount.toString()});M.exchanges=e.exchanges.slice(0,2)}catch(e){throw d.P.showError(S.UNABLE_TO_GET_EXCHANGES),new I(E.UNABLE_TO_GET_EXCHANGES)}finally{M.isLoading=!1}},async getAvailableExchanges(e){try{const t=e?.asset&&e?.network?T(e.network,e.asset):void 0;return await C({page:e?.page??0,asset:t,amount:e?.amount?.toString()})}catch(e){throw new I(E.UNABLE_TO_GET_EXCHANGES)}},async getPayUrl(e,t,a=!1){try{const i=Number(t.amount),n=await async function(e){return(await P("reown_getExchangePayUrl",e)).result}({exchangeId:e,asset:T(t.network,t.asset),amount:i.toString(),recipient:`${t.network}:${t.recipient}`});return y.E.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{exchange:{id:e},configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:i},currentPayment:{type:"exchange",exchangeId:e},headless:a}}),a&&(this.initiatePayment(),y.E.sendEvent({type:"track",event:"PAY_INITIATED",properties:{paymentId:M.paymentId||R,configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:i},currentPayment:{type:"exchange",exchangeId:e}}})),n}catch(e){if(e instanceof Error&&e.message.includes("is not supported"))throw new I(E.ASSET_NOT_SUPPORTED);throw new Error(e.message)}},async openPayUrl(e,t,a=!1){try{const i=await this.getPayUrl(e.exchangeId,t,a);if(!i)throw new I(E.UNABLE_TO_GET_PAY_URL);const n=e.openInNewTab??1?"_blank":"_self";return l.w.openHref(i.url,n),i}catch(e){throw M.error=e instanceof I?e.message:S.GENERIC_PAYMENT_ERROR,new I(E.UNABLE_TO_GET_PAY_URL)}},subscribeEvents(){M.isConfigured||(u.x.subscribeKey("connections",e=>{e.size>0&&this.handlePayment()}),r.U.subscribeKey("caipAddress",e=>{const t=u.x.hasAnyConnection(w.o.CONNECTOR_ID.WALLET_CONNECT);e&&(t?setTimeout(()=>{this.handlePayment()},100):this.handlePayment())}))},async handlePayment(){M.currentPayment={type:"wallet",status:"IN_PROGRESS"};const e=r.U.state.caipAddress;if(!e)return;const{chainId:t,address:a}=v.C.parseCaipAddress(e),i=s.W.state.activeChain;if(!a||!t||!i)return;if(!x.getProvider(i))return;const n=s.W.state.activeCaipNetwork;if(n&&!M.isPaymentInProgress)try{this.initiatePayment();const e=s.W.getAllRequestedCaipNetworks(),t=s.W.getAllApprovedCaipNetworkIds();switch(await async function(e){const{paymentAssetNetwork:t,activeCaipNetwork:a,approvedCaipNetworkIds:i,requestedCaipNetworks:n}=e,o=l.w.sortRequestedNetworks(i,n).find(e=>e.caipNetworkId===t);if(!o)throw new I(E.INVALID_PAYMENT_CONFIG);if(o.caipNetworkId===a.caipNetworkId)return;const r=s.W.getNetworkProp("supportsAllNetworks",o.chainNamespace);if(!i?.includes(o.caipNetworkId)&&!r)throw new I(E.INVALID_PAYMENT_CONFIG);try{await s.W.switchActiveNetwork(o)}catch(e){throw new I(E.GENERIC_PAYMENT_ERROR,e)}}({paymentAssetNetwork:M.paymentAsset.network,activeCaipNetwork:n,approvedCaipNetworkIds:t,requestedCaipNetworks:e}),await c.W.open({view:"PayLoading"}),i){case w.o.CHAIN.EVM:"native"===M.paymentAsset.asset&&(M.currentPayment.result=await async function(e,t,a){if(t!==w.o.CHAIN.EVM)throw new I(E.INVALID_CHAIN_NAMESPACE);if(!a.fromAddress)throw new I(E.INVALID_PAYMENT_CONFIG,"fromAddress is required for native EVM payments.");const i="string"==typeof a.amount?parseFloat(a.amount):a.amount;if(isNaN(i))throw new I(E.INVALID_PAYMENT_CONFIG);const n=e.metadata?.decimals??18,o=u.x.parseUnits(i.toString(),n);if("bigint"!=typeof o)throw new I(E.GENERIC_PAYMENT_ERROR);return await u.x.sendTransaction({chainNamespace:t,to:a.recipient,address:a.fromAddress,value:o,data:"0x"})??void 0}(M.paymentAsset,i,{recipient:M.recipient,amount:M.amount,fromAddress:a})),M.paymentAsset.asset.startsWith("0x")&&(M.currentPayment.result=await async function(e,t){if(!t.fromAddress)throw new I(E.INVALID_PAYMENT_CONFIG,"fromAddress is required for ERC20 EVM payments.");const a=e.asset,i=t.recipient,n=Number(e.metadata.decimals),o=u.x.parseUnits(t.amount.toString(),n);if(void 0===o)throw new I(E.GENERIC_PAYMENT_ERROR);return await u.x.writeContract({fromAddress:t.fromAddress,tokenAddress:a,args:[i,o],method:"transfer",abi:$.v.getERC20Abi(a),chainNamespace:w.o.CHAIN.EVM})??void 0}(M.paymentAsset,{recipient:M.recipient,amount:M.amount,fromAddress:a})),M.currentPayment.status="SUCCESS";break;case w.o.CHAIN.SOLANA:M.currentPayment.result=await async function(e,t){if(e!==w.o.CHAIN.SOLANA)throw new I(E.INVALID_CHAIN_NAMESPACE);if(!t.fromAddress)throw new I(E.INVALID_PAYMENT_CONFIG,"fromAddress is required for Solana payments.");const a="string"==typeof t.amount?parseFloat(t.amount):t.amount;if(isNaN(a)||a<=0)throw new I(E.INVALID_PAYMENT_CONFIG,"Invalid payment amount.");try{if(!x.getProvider(e))throw new I(E.GENERIC_PAYMENT_ERROR,"No Solana provider available.");const i=await u.x.sendTransaction({chainNamespace:w.o.CHAIN.SOLANA,to:t.recipient,value:a,tokenMint:t.tokenMint});if(!i)throw new I(E.GENERIC_PAYMENT_ERROR,"Transaction failed.");return i}catch(e){if(e instanceof I)throw e;throw new I(E.GENERIC_PAYMENT_ERROR,`Solana payment failed: ${e}`)}}(i,{recipient:M.recipient,amount:M.amount,fromAddress:a,tokenMint:"native"===M.paymentAsset.asset?void 0:M.paymentAsset.asset}),M.currentPayment.status="SUCCESS";break;default:throw new I(E.INVALID_CHAIN_NAMESPACE)}}catch(e){M.error=e instanceof I?e.message:S.GENERIC_PAYMENT_ERROR,M.currentPayment.status="FAILED",d.P.showError(M.error)}finally{M.isPaymentInProgress=!1}},getExchangeById:e=>M.exchanges.find(t=>t.id===e),validatePayConfig(e){const{paymentAsset:t,recipient:a,amount:i}=e;if(!t)throw new I(E.INVALID_PAYMENT_CONFIG);if(!a)throw new I(E.INVALID_RECIPIENT);if(!t.asset)throw new I(E.INVALID_ASSET);if(null==i||i<=0)throw new I(E.INVALID_AMOUNT)},handlePayWithWallet(){const e=r.U.state.caipAddress;if(!e)return void m.I.push("Connect");const{chainId:t,address:a}=v.C.parseCaipAddress(e),i=s.W.state.activeChain;a&&t&&i?this.handlePayment():m.I.push("Connect")},async handlePayWithExchange(e){try{M.currentPayment={type:"exchange",exchangeId:e};const{network:t,asset:a}=M.paymentAsset,i={network:t,asset:a,amount:M.amount,recipient:M.recipient},n=await this.getPayUrl(e,i);if(!n)throw new I(E.UNABLE_TO_INITIATE_PAYMENT);return M.currentPayment.sessionId=n.sessionId,M.currentPayment.status="IN_PROGRESS",M.currentPayment.exchangeId=e,this.initiatePayment(),{url:n.url,openInNewTab:M.openInNewTab}}catch(e){return M.error=e instanceof I?e.message:S.GENERIC_PAYMENT_ERROR,M.isPaymentInProgress=!1,d.P.showError(M.error),null}},async getBuyStatus(e,t){try{const a=await async function(e){return(await P("reown_getExchangeBuyStatus",e)).result}({sessionId:t,exchangeId:e});return"SUCCESS"!==a.status&&"FAILED"!==a.status||y.E.sendEvent({type:"track",event:"SUCCESS"===a.status?"PAY_SUCCESS":"PAY_ERROR",properties:{paymentId:M.paymentId||R,configuration:{network:M.paymentAsset.network,asset:M.paymentAsset.asset,recipient:M.recipient,amount:M.amount},currentPayment:{type:"exchange",exchangeId:M.currentPayment?.exchangeId,sessionId:M.currentPayment?.sessionId,result:a.txHash}}}),a}catch(e){throw new I(E.UNABLE_TO_GET_BUY_STATUS)}},async updateBuyStatus(e,t){try{const a=await this.getBuyStatus(e,t);M.currentPayment&&(M.currentPayment.status=a.status,M.currentPayment.result=a.txHash),"SUCCESS"!==a.status&&"FAILED"!==a.status||(M.isPaymentInProgress=!1)}catch(e){throw new I(E.UNABLE_TO_GET_BUY_STATUS)}},initiatePayment(){M.isPaymentInProgress=!0,M.paymentId=crypto.randomUUID()},initializeAnalytics(){M.analyticsSet||(M.analyticsSet=!0,this.subscribeKey("isPaymentInProgress",e=>{if(M.currentPayment?.status&&"UNKNOWN"!==M.currentPayment.status){const e={IN_PROGRESS:"PAY_INITIATED",SUCCESS:"PAY_SUCCESS",FAILED:"PAY_ERROR"}[M.currentPayment.status];y.E.sendEvent({type:"track",event:e,properties:{paymentId:M.paymentId||R,configuration:{network:M.paymentAsset.network,asset:M.paymentAsset.asset,recipient:M.recipient,amount:M.amount},currentPayment:{type:M.currentPayment.type,exchangeId:M.currentPayment.exchangeId,sessionId:M.currentPayment.sessionId,result:M.currentPayment.result}}})}}))}},O=i.AH`
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
`;var D=function(e,t,a,i){var n,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,a,r):n(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r};let U=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.amount="",this.tokenSymbol="",this.networkName="",this.exchanges=z.state.exchanges,this.isLoading=z.state.isLoading,this.loadingExchangeId=null,this.connectedWalletInfo=r.U.state.connectedWalletInfo,this.initializePaymentDetails(),this.unsubscribe.push(z.subscribeKey("exchanges",e=>this.exchanges=e)),this.unsubscribe.push(z.subscribeKey("isLoading",e=>this.isLoading=e)),this.unsubscribe.push(r.U.subscribe(e=>this.connectedWalletInfo=e.connectedWalletInfo)),z.fetchExchanges()}get isWalletConnected(){return"connected"===r.U.state.status}render(){return i.qy`
      <wui-flex flexDirection="column">
        <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
          ${this.renderPaymentHeader()}

          <wui-flex flexDirection="column" gap="s">
            ${this.renderPayWithWallet()} ${this.renderExchangeOptions()}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}initializePaymentDetails(){const e=z.getPaymentAsset();this.networkName=e.network,this.tokenSymbol=e.metadata.symbol,this.amount=z.state.amount.toString()}renderPayWithWallet(){return function(e){const{chainNamespace:t}=v.C.parseCaipNetworkId(e);return N.includes(t)}(this.networkName)?i.qy`<wui-flex flexDirection="column" gap="s">
        ${this.isWalletConnected?this.renderConnectedView():this.renderDisconnectedView()}
      </wui-flex>
      <wui-separator text="or"></wui-separator>`:i.qy``}renderPaymentHeader(){let e=this.networkName;if(this.networkName){const t=s.W.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===this.networkName);t&&(e=t.name)}return i.qy`
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex alignItems="center" gap="xs">
          <wui-text variant="large-700" color="fg-100">${this.amount||"0.0000"}</wui-text>
          <wui-flex class="token-display" alignItems="center" gap="xxs">
            <wui-text variant="paragraph-600" color="fg-100">
              ${this.tokenSymbol||"Unknown Asset"}
            </wui-text>
            ${e?i.qy`
                  <wui-text variant="small-500" color="fg-200"> on ${e} </wui-text>
                `:""}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}renderConnectedView(){const e=this.connectedWalletInfo?.name||"connected wallet";return i.qy`
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
          <wui-text variant="paragraph-500" color="inherit">Pay with ${e}</wui-text>
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
      </wui-flex>`:this.exchanges.map(e=>i.qy`
        <wui-list-item
          @click=${()=>this.onExchangePayment(e.id)}
          data-testid="exchange-option-${e.id}"
          ?chevron=${!0}
          ?disabled=${null!==this.loadingExchangeId}
        >
          <wui-flex alignItems="center" gap="s">
            ${this.loadingExchangeId===e.id?i.qy`<wui-loading-spinner color="accent-100" size="md"></wui-loading-spinner>`:i.qy`<wui-wallet-image
                  size="sm"
                  imageSrc=${(0,o.J)(e.imageUrl)}
                  name=${e.name}
                ></wui-wallet-image>`}
            <wui-text flexGrow="1" variant="paragraph-500" color="inherit"
              >Pay with ${e.name} <wui-spinner size="sm" color="fg-200"></wui-spinner
            ></wui-text>
          </wui-flex>
        </wui-list-item>
      `)}onWalletPayment(){z.handlePayWithWallet()}async onExchangePayment(e){try{this.loadingExchangeId=e;const t=await z.handlePayWithExchange(e);t&&(await c.W.open({view:"PayLoading"}),l.w.openHref(t.url,t.openInNewTab?"_blank":"_self"))}catch(e){console.error("Failed to pay with exchange",e),d.P.showError("Failed to pay with exchange")}finally{this.loadingExchangeId=null}}async onDisconnect(e){e.stopPropagation();try{await u.x.disconnect()}catch{console.error("Failed to disconnect"),d.P.showError("Failed to disconnect")}}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}};U.styles=O,D([(0,n.wk)()],U.prototype,"amount",void 0),D([(0,n.wk)()],U.prototype,"tokenSymbol",void 0),D([(0,n.wk)()],U.prototype,"networkName",void 0),D([(0,n.wk)()],U.prototype,"exchanges",void 0),D([(0,n.wk)()],U.prototype,"isLoading",void 0),D([(0,n.wk)()],U.prototype,"loadingExchangeId",void 0),D([(0,n.wk)()],U.prototype,"connectedWalletInfo",void 0),U=D([(0,h.EM)("w3m-pay-view")],U);var L=a(77433),W=a(99539),Z=a(26224);a(35404);const j=i.AH`
  :host {
    display: block;
    height: 100%;
    width: 100%;
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }
`;var B=function(e,t,a,i){var n,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(r=(o<3?n(r):o>3?n(t,a,r):n(t,a))||r);return o>3&&r&&Object.defineProperty(t,a,r),r};let q=class extends i.WF{constructor(){super(),this.loadingMessage="",this.subMessage="",this.paymentState="in-progress",this.paymentState=z.state.isPaymentInProgress?"in-progress":"completed",this.updateMessages(),this.setupSubscription(),this.setupExchangeSubscription()}disconnectedCallback(){clearInterval(this.exchangeSubscription)}render(){return i.qy`
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
    `}updateMessages(){switch(this.paymentState){case"completed":this.loadingMessage="Payment completed",this.subMessage="Your transaction has been successfully processed";break;case"error":this.loadingMessage="Payment failed",this.subMessage="There was an error processing your transaction";break;default:"exchange"===z.state.currentPayment?.type?(this.loadingMessage="Payment initiated",this.subMessage="Please complete the payment on the exchange"):(this.loadingMessage="Awaiting payment confirmation",this.subMessage="Please confirm the payment transaction in your wallet")}}getStateIcon(){switch(this.paymentState){case"completed":return this.successTemplate();case"error":return this.errorTemplate();default:return this.loaderTemplate()}}setupExchangeSubscription(){"exchange"===z.state.currentPayment?.type&&(this.exchangeSubscription=setInterval(async()=>{const e=z.state.currentPayment?.exchangeId,t=z.state.currentPayment?.sessionId;e&&t&&(await z.updateBuyStatus(e,t),"SUCCESS"===z.state.currentPayment?.status&&clearInterval(this.exchangeSubscription))},4e3))}setupSubscription(){z.subscribeKey("isPaymentInProgress",e=>{e||"in-progress"!==this.paymentState||(z.state.error||!z.state.currentPayment?.result?this.paymentState="error":this.paymentState="completed",this.updateMessages(),setTimeout(()=>{"disconnected"!==u.x.state.status&&c.W.close()},3e3))}),z.subscribeKey("error",e=>{e&&"in-progress"===this.paymentState&&(this.paymentState="error",this.updateMessages())})}loaderTemplate(){const e=L.W.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4,a=this.getPaymentIcon();return i.qy`
      <wui-flex justifyContent="center" alignItems="center" style="position: relative;">
        ${a?i.qy`<wui-wallet-image size="lg" imageSrc=${a}></wui-wallet-image>`:null}
        <wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>
      </wui-flex>
    `}getPaymentIcon(){const e=z.state.currentPayment;if(e){if("exchange"===e.type){const t=e.exchangeId;if(t){const e=z.getExchangeById(t);return e?.imageUrl}}if("wallet"===e.type){const e=r.U.state.connectedWalletInfo?.icon;if(e)return e;const t=s.W.state.activeChain;if(!t)return;const a=W.a.getConnectorId(t);if(!a)return;const i=W.a.getConnectorById(a);if(!i)return;return Z.$.getConnectorImage(i)}}}successTemplate(){return i.qy`<wui-icon size="xl" color="success-100" name="checkmark"></wui-icon>`}errorTemplate(){return i.qy`<wui-icon size="xl" color="error-100" name="close"></wui-icon>`}};q.styles=j,B([(0,n.wk)()],q.prototype,"loadingMessage",void 0),B([(0,n.wk)()],q.prototype,"subMessage",void 0),B([(0,n.wk)()],q.prototype,"paymentState",void 0),q=B([(0,h.EM)("w3m-pay-loading-view")],q);const V=3e5;async function G(e){return z.handleOpenPay(e)}async function H(e,t=V){if(t<=0)throw new I(E.INVALID_PAYMENT_CONFIG,"Timeout must be greater than 0");try{await G(e)}catch(e){if(e instanceof I)throw e;throw new I(E.UNABLE_TO_INITIATE_PAYMENT,e.message)}return new Promise((e,a)=>{let i=!1;const n=setTimeout(()=>{i||(i=!0,l(),a(new I(E.GENERIC_PAYMENT_ERROR,"Payment timeout")))},t);function o(){if(i)return;const t=z.state.currentPayment,a=z.state.error,o=z.state.isPaymentInProgress;return"SUCCESS"===t?.status?(i=!0,l(),clearTimeout(n),void e({success:!0,result:t.result})):"FAILED"===t?.status?(i=!0,l(),clearTimeout(n),void e({success:!1,error:a||"Payment failed"})):void(!a||o||t||(i=!0,l(),clearTimeout(n),e({success:!1,error:a})))}const r=X("currentPayment",o),s=X("error",o),c=X("isPaymentInProgress",o),l=(d=[r,s,c],()=>{d.forEach(e=>{try{e()}catch{}})});var d;o()})}function Y(){return z.getExchanges()}function F(){return z.state.currentPayment?.result}function K(){return z.state.error}function J(){return z.state.isPaymentInProgress}function X(e,t){return z.subscribeKey(e,t)}const Q={network:"eip155:8453",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},ee={network:"eip155:8453",asset:"0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},te={network:"eip155:84532",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},ae={network:"eip155:1",asset:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},ie={network:"eip155:10",asset:"0x0b2c639c533813f4aa9d7837caf62653d097ff85",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},ne={network:"eip155:42161",asset:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},oe={network:"eip155:137",asset:"0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},re={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},se={network:"eip155:1",asset:"0xdAC17F958D2ee523a2206206994597C13D831ec7",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},ce={network:"eip155:10",asset:"0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},le={network:"eip155:42161",asset:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},de={network:"eip155:137",asset:"0xc2132d05d31c914a87c6611c10748aeb04b58e8f",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},ue={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}}},90315:(e,t,a)=>{a(77200)},91427:(e,t,a)=>{a.d(t,{MZ:()=>i.M,wk:()=>n.w});var i=a(69623),n=a(4537)}}]);
//# sourceMappingURL=9885.widget.iife.js.map