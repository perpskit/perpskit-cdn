/*! For license information please see 6894.widget.iife.js.LICENSE.txt */
"use strict";(this.webpackChunkHLWidget=this.webpackChunkHLWidget||[]).push([[6894],{379:(t,e,i)=>{i.d(e,{_:()=>n,K:()=>l});var a=i(80971),r=i(64720),o=i(39341);const n=()=>new s;class s{}const c=new WeakMap,l=(0,o.u$)(class extends r.Kq{render(t){return a.s6}update(t,[e]){const i=e!==this.G;return i&&void 0!==this.G&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),a.s6}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.G){const e=this.ht??globalThis;let i=c.get(e);void 0===i&&(i=new WeakMap,c.set(e,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,t),void 0!==t&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return"function"==typeof this.G?c.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})},1711:(t,e,i)=>{var a=i(48422),r=i(91427),o=i(23507),n=i(39168),s=i(379),c=(i(77200),i(47080)),l=i(39783);const d=a.AH`
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
`;var u=function(t,e,i,a){var r,o=arguments.length,n=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let h=class extends a.WF{constructor(){super(...arguments),this.inputElementRef=(0,s._)(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const t=`wui-padding-right-${this.inputRightPadding}`,e=`wui-size-${this.size}`,i={[e]:!0,[t]:Boolean(this.inputRightPadding)};return a.qy`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${(0,s.K)(this.inputElementRef)}
        class=${(0,o.H)(i)}
        type=${this.type}
        enterkeyhint=${(0,n.J)(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
        tabindex=${(0,n.J)(this.tabIdx)}
      />
      <slot></slot>`}templateIcon(){return this.icon?a.qy`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};h.styles=[c.W5,c.fD,d],u([(0,r.MZ)()],h.prototype,"size",void 0),u([(0,r.MZ)()],h.prototype,"icon",void 0),u([(0,r.MZ)({type:Boolean})],h.prototype,"disabled",void 0),u([(0,r.MZ)()],h.prototype,"placeholder",void 0),u([(0,r.MZ)()],h.prototype,"type",void 0),u([(0,r.MZ)()],h.prototype,"keyHint",void 0),u([(0,r.MZ)()],h.prototype,"value",void 0),u([(0,r.MZ)()],h.prototype,"inputRightPadding",void 0),u([(0,r.MZ)()],h.prototype,"tabIdx",void 0),h=u([(0,l.E)("wui-input-text")],h)},3814:(t,e,i)=>{var a=i(48422),r=i(91427),o=(i(77200),i(17262),i(36858),i(47080)),n=i(86515),s=i(39783);const c=a.AH`
  a {
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon:not(.image-icon),
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-success-glass-010);
    background-color: var(--wui-color-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-error-glass-010);
    background-color: var(--wui-color-error-glass-010);
    color: var(--wui-color-error-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'],
  a[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child),
  a[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon:not(.image-icon),
  a[data-variant='shade'] > wui-icon:not(.image-icon) {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image,
  a[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon:not(.image-icon),
  a[data-variant='success'] > wui-icon:not(.image-icon),
  a[data-variant='shadeSmall'] > wui-icon:not(.image-icon),
  a[data-variant='error'] > wui-icon:not(.image-icon) {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-color-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-color-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-color-success-glass-015);
  }

  a[data-variant='error']:focus-visible {
    background-color: var(--wui-color-error-glass-015);
  }

  a.disabled {
    color: var(--wui-color-gray-glass-015);
    background-color: var(--wui-color-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-color-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-color-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-color-success-glass-015);
    }

    a[data-variant='error']:hover {
      background-color: var(--wui-color-error-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-color-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-color-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-color-success-glass-020);
  }

  a[data-variant='error']:active {
    background-color: var(--wui-color-error-glass-020);
  }
`;var l=function(t,e,i,a){var r,o=arguments.length,n=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let d=class extends a.WF{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.imageIcon=void 0,this.imageIconSize="md",this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){const t="success"===this.variant||"transparent"===this.variant||"shadeSmall"===this.variant?"small-600":"paragraph-600";return a.qy`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${t} color="inherit">
          ${this.title?this.title:n.Z.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?a.qy`<wui-image src=${this.imageSrc}></wui-image>`:this.imageIcon?a.qy`<wui-icon
        name=${this.imageIcon}
        color="inherit"
        size=${this.imageIconSize}
        class="image-icon"
      ></wui-icon>`:null}};d.styles=[o.W5,o.fD,c],l([(0,r.MZ)()],d.prototype,"variant",void 0),l([(0,r.MZ)()],d.prototype,"imageSrc",void 0),l([(0,r.MZ)()],d.prototype,"imageIcon",void 0),l([(0,r.MZ)()],d.prototype,"imageIconSize",void 0),l([(0,r.MZ)({type:Boolean})],d.prototype,"disabled",void 0),l([(0,r.MZ)()],d.prototype,"icon",void 0),l([(0,r.MZ)()],d.prototype,"href",void 0),l([(0,r.MZ)()],d.prototype,"text",void 0),d=l([(0,s.E)("wui-chip")],d)},4537:(t,e,i)=>{i.d(e,{w:()=>r});var a=i(69623);function r(t){return(0,a.M)({...t,state:!0,attribute:!1})}},17262:(t,e,i)=>{var a=i(48422),r=i(91427),o=i(47080),n=i(39783);const s=a.AH`
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
`;var c=function(t,e,i,a){var r,o=arguments.length,n=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let l=class extends a.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0,this.objectFit="cover"}render(){return this.objectFit&&(this.dataset.objectFit=this.objectFit),this.style.cssText=`\n      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      `,a.qy`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};l.styles=[o.W5,o.ck,s],c([(0,r.MZ)()],l.prototype,"src",void 0),c([(0,r.MZ)()],l.prototype,"alt",void 0),c([(0,r.MZ)()],l.prototype,"size",void 0),c([(0,r.MZ)()],l.prototype,"objectFit",void 0),l=c([(0,n.E)("wui-image")],l)},18492:(t,e,i)=>{i(25354)},18901:(t,e,i)=>{var a=i(48422),r=i(91427),o=i(47080),n=i(39783);const s=a.AH`
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
`;var c=function(t,e,i,a){var r,o=arguments.length,n=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let l=class extends a.WF{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText="--local-color: "+("inherit"===this.color?"inherit":`var(--wui-color-${this.color})`),this.dataset.size=this.size,a.qy`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};l.styles=[o.W5,s],c([(0,r.MZ)()],l.prototype,"color",void 0),c([(0,r.MZ)()],l.prototype,"size",void 0),l=c([(0,n.E)("wui-loading-spinner")],l)},23411:(t,e,i)=>{i(30204)},23507:(t,e,i)=>{i.d(e,{H:()=>o});var a=i(80971),r=i(39341);const o=(0,r.u$)(class extends r.WL{constructor(t){if(super(t),t.type!==r.OA.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const a=!!e[t];a===this.st.has(t)||this.nt?.has(t)||(a?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return a.c0}})},23802:(t,e,i)=>{i.d(e,{T:()=>a});const a={URLS:{FAQ:"https://walletconnect.com/faq"}}},24668:(t,e,i)=>{var a=i(48422),r=i(91427),o=i(39168),n=(i(36858),i(47080)),s=i(39783);const c=a.AH`
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
`;var l=function(t,e,i,a){var r,o=arguments.length,n=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let d=class extends a.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return a.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,o.J)(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};d.styles=[n.W5,n.fD,c],l([(0,r.MZ)()],d.prototype,"tabIdx",void 0),l([(0,r.MZ)({type:Boolean})],d.prototype,"disabled",void 0),l([(0,r.MZ)()],d.prototype,"color",void 0),d=l([(0,s.E)("wui-link")],d)},25354:(t,e,i)=>{var a=i(48422),r=i(91427),o=(i(77200),i(47080)),n=i(39783);const s=a.AH`
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
`;var c=function(t,e,i,a){var r,o=arguments.length,n=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let l=class extends a.WF{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){this.dataset.size=this.size;let t="",e="";switch(this.size){case"lg":t="--wui-border-radius-xs",e="--wui-spacing-1xs";break;case"sm":t="--wui-border-radius-3xs",e="--wui-spacing-xxs";break;default:t="--wui-border-radius-xxs",e="--wui-spacing-2xs"}return this.style.cssText=`\n    --local-border-radius: var(${t});\n    --local-padding: var(${e});\n    `,a.qy`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};l.styles=[o.W5,o.fD,o.ck,s],c([(0,r.MZ)()],l.prototype,"size",void 0),c([(0,r.MZ)({type:Boolean})],l.prototype,"disabled",void 0),c([(0,r.MZ)()],l.prototype,"icon",void 0),c([(0,r.MZ)()],l.prototype,"iconColor",void 0),l=c([(0,n.E)("wui-icon-link")],l)},27165:(t,e,i)=>{i.d(e,{Rt:()=>n,sO:()=>o});var a=i(80971);const{I:r}=a.ge,o=t=>null===t||"object"!=typeof t&&"function"!=typeof t,n=t=>void 0===t.strings},30204:(t,e,i)=>{var a=i(48422),r=i(91427),o=(i(77200),i(47080)),n=i(39783);const s=a.AH`
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
`;var c=function(t,e,i,a){var r,o=arguments.length,n=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let l=class extends a.WF{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const t=this.iconSize||this.size,e="lg"===this.size,i="xl"===this.size,r=e?"12%":"16%",o=e?"xxs":i?"s":"3xl",n="gray"===this.background,s="opaque"===this.background,c="accent-100"===this.backgroundColor&&s||"success-100"===this.backgroundColor&&s||"error-100"===this.backgroundColor&&s||"inverse-100"===this.backgroundColor&&s;let l=`var(--wui-color-${this.backgroundColor})`;return c?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:n&&(l=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${l};\n       --local-bg-mix: ${c||n?"100%":r};\n       --local-border-radius: var(--wui-border-radius-${o});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,a.qy` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};l.styles=[o.W5,o.fD,s],c([(0,r.MZ)()],l.prototype,"size",void 0),c([(0,r.MZ)()],l.prototype,"backgroundColor",void 0),c([(0,r.MZ)()],l.prototype,"iconColor",void 0),c([(0,r.MZ)()],l.prototype,"iconSize",void 0),c([(0,r.MZ)()],l.prototype,"background",void 0),c([(0,r.MZ)({type:Boolean})],l.prototype,"border",void 0),c([(0,r.MZ)()],l.prototype,"borderColor",void 0),c([(0,r.MZ)()],l.prototype,"icon",void 0),l=c([(0,n.E)("wui-icon-box")],l)},32480:(t,e,i)=>{i(18901)},32971:(t,e,i)=>{i.d(e,{T:()=>h});var a=i(80971),r=i(27165),o=i(64720);class n{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class s{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}var c=i(39341);const l=t=>!(0,r.sO)(t)&&"function"==typeof t.then,d=1073741823;class u extends o.Kq{constructor(){super(...arguments),this._$Cwt=d,this._$Cbt=[],this._$CK=new n(this),this._$CX=new s}render(...t){return t.find(t=>!l(t))??a.c0}update(t,e){const i=this._$Cbt;let r=i.length;this._$Cbt=e;const o=this._$CK,n=this._$CX;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$Cwt);t++){const a=e[t];if(!l(a))return this._$Cwt=t,a;t<r&&a===i[t]||(this._$Cwt=d,r=0,Promise.resolve(a).then(async t=>{for(;n.get();)await n.get();const e=o.deref();if(void 0!==e){const i=e._$Cbt.indexOf(a);i>-1&&i<e._$Cwt&&(e._$Cwt=i,e.setValue(t))}}))}return a.c0}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const h=(0,c.u$)(u)},33846:(t,e,i)=>{i(66727)},36858:(t,e,i)=>{var a=i(48422),r=i(91427),o=i(23507),n=i(47080),s=i(39783);const c=a.AH`
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
`;var l=function(t,e,i,a){var r,o=arguments.length,n=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let d=class extends a.WF{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,a.qy`<slot class=${(0,o.H)(t)}></slot>`}};d.styles=[n.W5,c],l([(0,r.MZ)()],d.prototype,"variant",void 0),l([(0,r.MZ)()],d.prototype,"color",void 0),l([(0,r.MZ)()],d.prototype,"align",void 0),l([(0,r.MZ)()],d.prototype,"lineClamp",void 0),d=l([(0,s.E)("wui-text")],d)},38273:(t,e,i)=>{i(46116)},39168:(t,e,i)=>{i.d(e,{J:()=>r});var a=i(80971);const r=t=>t??a.s6},39341:(t,e,i)=>{i.d(e,{OA:()=>a,WL:()=>o,u$:()=>r});const a={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},r=t=>(...e)=>({_$litDirective$:t,values:e});class o{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},46116:(t,e,i)=>{var a=i(48422),r=i(91427),o=i(47080),n=i(86515),s=i(39783);const c=a.AH`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var l=function(t,e,i,a){var r,o=arguments.length,n=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let d=class extends a.WF{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&n.Z.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&n.Z.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&n.Z.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&n.Z.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&n.Z.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&n.Z.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&n.Z.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&n.Z.getSpacingStyles(this.margin,3)};\n    `,a.qy`<slot></slot>`}};d.styles=[o.W5,c],l([(0,r.MZ)()],d.prototype,"flexDirection",void 0),l([(0,r.MZ)()],d.prototype,"flexWrap",void 0),l([(0,r.MZ)()],d.prototype,"flexBasis",void 0),l([(0,r.MZ)()],d.prototype,"flexGrow",void 0),l([(0,r.MZ)()],d.prototype,"flexShrink",void 0),l([(0,r.MZ)()],d.prototype,"alignItems",void 0),l([(0,r.MZ)()],d.prototype,"justifyContent",void 0),l([(0,r.MZ)()],d.prototype,"columnGap",void 0),l([(0,r.MZ)()],d.prototype,"rowGap",void 0),l([(0,r.MZ)()],d.prototype,"gap",void 0),l([(0,r.MZ)()],d.prototype,"padding",void 0),l([(0,r.MZ)()],d.prototype,"margin",void 0),d=l([(0,s.E)("wui-flex")],d)},50301:(t,e,i)=>{var a=i(48422),r=i(91427),o=(i(36858),i(47080)),n=i(39783);const s=a.AH`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }

  :host([data-size='xs']) {
    height: var(--wui-spacing-2l);
    padding: 0 var(--wui-spacing-3xs) !important;
  }

  :host([data-size='xs']) > wui-text {
    transform: translateY(2%);
  }
`;var c=function(t,e,i,a){var r,o=arguments.length,n=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let l=class extends a.WF{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const t="md"===this.size||"xs"===this.size?"mini-700":"micro-700";return a.qy`
      <wui-text data-variant=${this.variant} variant=${t} color="inherit">
        <slot></slot>
      </wui-text>
    `}};l.styles=[o.W5,s],c([(0,r.MZ)()],l.prototype,"variant",void 0),c([(0,r.MZ)()],l.prototype,"size",void 0),l=c([(0,n.E)("wui-tag")],l)},56894:(t,e,i)=>{i.r(e),i.d(e,{W3mApproveTransactionView:()=>h,W3mRegisterAccountNameSuccess:()=>P,W3mRegisterAccountNameView:()=>_,W3mUpgradeWalletView:()=>w});var a=i(48422),r=i(91427),o=i(37551),n=i(32757),s=i(99539),c=i(77433),l=i(31779);const d=a.AH`
  div {
    width: 100%;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var u=function(t,e,i,a){var r,o=arguments.length,n=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let h=class extends a.WF{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(n.W.subscribeKey("open",t=>{t||this.onHideIframe()}),n.W.subscribeKey("shake",t=>{this.iframe.style.animation=t?"w3m-shake 500ms var(--wui-ease-out-power-2)":"none"}))}disconnectedCallback(){this.onHideIframe(),this.unsubscribe.forEach(t=>t()),this.bodyObserver?.unobserve(window.document.body)}async firstUpdated(){await this.syncTheme(),this.iframe.style.display="block";const t=this?.renderRoot?.querySelector("div");this.bodyObserver=new ResizeObserver(e=>{const i=e?.[0]?.contentBoxSize,a=i?.[0]?.inlineSize;this.iframe.style.height="600px",t.style.height="600px",a&&a<=430?(this.iframe.style.width="100%",this.iframe.style.left="0px",this.iframe.style.bottom="0px",this.iframe.style.top="unset"):(this.iframe.style.width="360px",this.iframe.style.left="calc(50% - 180px)",this.iframe.style.top="calc(50% - 300px + 32px)",this.iframe.style.bottom="unset"),this.ready=!0,this.onShowIframe()}),this.bodyObserver.observe(window.document.body)}render(){return a.qy`<div data-ready=${this.ready} id="w3m-frame-container"></div>`}onShowIframe(){const t=window.innerWidth<=430;this.iframe.style.animation=t?"w3m-iframe-zoom-in-mobile 200ms var(--wui-ease-out-power-2)":"w3m-iframe-zoom-in 200ms var(--wui-ease-out-power-2)"}onHideIframe(){this.iframe.style.display="none",this.iframe.style.animation="w3m-iframe-fade-out 200ms var(--wui-ease-out-power-2)"}async syncTheme(){const t=s.a.getAuthConnector();if(t){const e=c.W.getSnapshot().themeMode,i=c.W.getSnapshot().themeVariables;await t.provider.syncTheme({themeVariables:i,w3mThemeVariables:(0,o.o)(i,e)})}}};h.styles=d,u([(0,r.wk)()],h.prototype,"ready",void 0),h=u([(0,l.EM)("w3m-approve-transaction-view")],h);var g=i(53141),p=(i(3814),i(38273),i(66933),function(t,e,i,a){var r,o=arguments.length,n=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n});let w=class extends a.WF{render(){return a.qy`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${g.oU.SECURE_SITE_DASHBOARD}
          imageSrc=${g.oU.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};w=p([(0,l.EM)("w3m-upgrade-wallet-view")],w);var v=i(379),b=i(33255),f=i(98850),m=i(1759),y=i(65885),x=i(58711),$=i(21385),k=i(65149),S=i(23774),z=i(39168),C=(i(18901),i(36858),i(47080)),R=i(39783);i(1711);const M=a.AH`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  .error {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }

  .base-name {
    position: absolute;
    right: 45px;
    top: 15px;
    text-align: right;
  }
`;var A=function(t,e,i,a){var r,o=arguments.length,n=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let T=class extends a.WF{constructor(){super(...arguments),this.disabled=!1,this.loading=!1}render(){return a.qy`
      <wui-input-text
        value=${(0,z.J)(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value||""}
        data-testid="wui-ens-input"
        inputRightPadding="5xl"
      >
        ${this.baseNameTemplate()} ${this.errorTemplate()}${this.loadingTemplate()}
      </wui-input-text>
    `}baseNameTemplate(){return a.qy`<wui-text variant="paragraph-400" color="fg-200" class="base-name">
      ${b.o.WC_NAME_SUFFIX}
    </wui-text>`}loadingTemplate(){return this.loading?a.qy`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}errorTemplate(){return this.errorMessage?a.qy`<wui-text variant="tiny-500" color="error-100" class="error"
        >${this.errorMessage}</wui-text
      >`:null}};T.styles=[C.W5,M],A([(0,r.MZ)()],T.prototype,"errorMessage",void 0),A([(0,r.MZ)({type:Boolean})],T.prototype,"disabled",void 0),A([(0,r.MZ)()],T.prototype,"value",void 0),A([(0,r.MZ)({type:Boolean})],T.prototype,"loading",void 0),T=A([(0,R.E)("wui-ens-input")],T),i(90315),i(18492),i(32480),i(76660);var Z=i(74556);const j=a.AH`
  wui-flex {
    width: 100%;
  }

  .suggestion {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  .suggestion:hover {
    background-color: var(--wui-color-gray-glass-005);
    cursor: pointer;
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
  }

  wui-icon-link {
    position: absolute;
    right: 20px;
    transform: translateY(11px);
  }
`;var E=function(t,e,i,a){var r,o=arguments.length,n=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let _=class extends a.WF{constructor(){super(),this.formRef=(0,v._)(),this.usubscribe=[],this.name="",this.error="",this.loading=f.f.state.loading,this.suggestions=f.f.state.suggestions,this.registered=!1,this.profileName=m.U.state.profileName,this.onDebouncedNameInputChange=y.w.debounce(t=>{f.f.validateName(t)?(this.error="",this.name=t,f.f.getSuggestions(t),f.f.isNameRegistered(t).then(t=>{this.registered=t})):t.length<4?this.error="Name must be at least 4 characters long":this.error="Can only contain letters, numbers and - characters"}),this.usubscribe.push(f.f.subscribe(t=>{this.suggestions=t.suggestions,this.loading=t.loading}),m.U.subscribeKey("profileName",t=>{this.profileName=t,t&&(this.error="You already own a name")}))}firstUpdated(){this.formRef.value?.addEventListener("keydown",this.onEnterKey.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.usubscribe.forEach(t=>t()),this.formRef.value?.removeEventListener("keydown",this.onEnterKey.bind(this))}render(){return a.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="m"
        .padding=${["0","s","m","s"]}
      >
        <form ${(0,v.K)(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `}submitButtonTemplate(){return this.isAllowedToSubmit()?a.qy`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitName.bind(this)}
          >
          </wui-icon-link>
        `:null}onSelectSuggestion(t){return()=>{this.name=t,this.registered=!1,this.requestUpdate()}}onNameInputChange(t){this.onDebouncedNameInputChange(t.detail)}nameSuggestionTagTemplate(){return this.loading?a.qy`<wui-loading-spinner size="lg" color="fg-100"></wui-loading-spinner>`:this.registered?a.qy`<wui-tag variant="shade" size="lg">Registered</wui-tag>`:a.qy`<wui-tag variant="success" size="lg">Available</wui-tag>`}templateSuggestions(){if(!this.name||this.name.length<4||this.error)return null;const t=this.registered?this.suggestions.filter(t=>t.name!==this.name):[];return a.qy`<wui-flex flexDirection="column" gap="xxs" alignItems="center">
      <wui-flex
        data-testid="account-name-suggestion"
        .padding=${["m","m","m","m"]}
        justifyContent="space-between"
        class="suggestion"
        @click=${this.onSubmitName.bind(this)}
      >
        <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
          ${this.name}</wui-text
        >${this.nameSuggestionTagTemplate()}
      </wui-flex>
      ${t.map(t=>this.availableNameTemplate(t.name))}
    </wui-flex>`}availableNameTemplate(t){return a.qy` <wui-flex
      data-testid="account-name-suggestion"
      .padding=${["m","m","m","m"]}
      justifyContent="space-between"
      class="suggestion"
      @click=${this.onSelectSuggestion(t)}
    >
      <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
        ${t}
      </wui-text>
      <wui-tag variant="success" size="lg">Available</wui-tag>
    </wui-flex>`}isAllowedToSubmit(){return!this.loading&&!this.registered&&!this.error&&!this.profileName&&f.f.validateName(this.name)}async onSubmitName(){try{if(!this.isAllowedToSubmit())return;const t=`${this.name}${b.o.WC_NAME_SUFFIX}`;x.E.sendEvent({type:"track",event:"REGISTER_NAME_INITIATED",properties:{isSmartAccount:(0,$.lj)(k.W.state.activeChain)===Z.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:t}}),await f.f.registerName(t),x.E.sendEvent({type:"track",event:"REGISTER_NAME_SUCCESS",properties:{isSmartAccount:(0,$.lj)(k.W.state.activeChain)===Z.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:t}})}catch(t){S.P.showError(t.message),x.E.sendEvent({type:"track",event:"REGISTER_NAME_ERROR",properties:{isSmartAccount:(0,$.lj)(k.W.state.activeChain)===Z.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:`${this.name}${b.o.WC_NAME_SUFFIX}`,error:t?.message||"Unknown error"}})}}onEnterKey(t){"Enter"===t.key&&this.isAllowedToSubmit()&&this.onSubmitName()}};_.styles=j,E([(0,r.MZ)()],_.prototype,"errorMessage",void 0),E([(0,r.wk)()],_.prototype,"name",void 0),E([(0,r.wk)()],_.prototype,"error",void 0),E([(0,r.wk)()],_.prototype,"loading",void 0),E([(0,r.wk)()],_.prototype,"suggestions",void 0),E([(0,r.wk)()],_.prototype,"registered",void 0),E([(0,r.wk)()],_.prototype,"profileName",void 0),_=E([(0,l.EM)("w3m-register-account-name-view")],_);var O=i(23802),I=i(79063);i(33846),i(23411),i(24668);const W=a.AH`
  .continue-button-container {
    width: 100%;
  }
`;let P=class extends a.WF{render(){return a.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{y.w.openHref(O.T.URLS.FAQ,"_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return a.qy` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          size="xl"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          You can now fund your account and trade crypto
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return a.qy`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`}redirectToAccount(){I.I.replace("Account")}};P.styles=W,P=function(t,e,i,a){var r,o=arguments.length,n=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}([(0,l.EM)("w3m-register-account-name-success-view")],P)},64720:(t,e,i)=>{i.d(e,{Kq:()=>u});var a=i(27165),r=i(39341);const o=(t,e)=>{const i=t._$AN;if(void 0===i)return!1;for(const t of i)t._$AO?.(e,!1),o(t,e);return!0},n=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===i?.size)},s=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),d(e)}};function c(t){void 0!==this._$AN?(n(this),this._$AM=t,s(this)):this._$AM=t}function l(t,e=!1,i=0){const a=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(e)if(Array.isArray(a))for(let t=i;t<a.length;t++)o(a[t],!1),n(a[t]);else null!=a&&(o(a,!1),n(a));else o(this,t)}const d=t=>{t.type==r.OA.CHILD&&(t._$AP??=l,t._$AQ??=c)};class u extends r.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),s(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(o(this,t),n(this))}setValue(t){if((0,a.Rt)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}},66727:(t,e,i)=>{var a=i(48422),r=i(91427),o=(i(18901),i(36858),i(47080)),n=i(39783);const s=a.AH`
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
`;var c=function(t,e,i,a){var r,o=arguments.length,n=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};const l={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},d={lg:"paragraph-600",md:"small-600",sm:"small-600",xs:"tiny-600"},u={lg:"md",md:"md",sm:"sm",xs:"sm"};let h=class extends a.WF{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`\n    --local-width: ${this.fullWidth?"100%":"auto"};\n    --local-opacity-100: ${this.loading?0:1};\n    --local-opacity-000: ${this.loading?1:0};\n    --local-border-radius: var(--wui-border-radius-${this.borderRadius});\n    `;const t=this.textVariant??d[this.size];return a.qy`
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
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const t=u[this.size],e=this.disabled?l.disabled:l[this.variant];return a.qy`<wui-loading-spinner color=${e} size=${t}></wui-loading-spinner>`}return a.qy``}};h.styles=[o.W5,o.fD,s],c([(0,r.MZ)()],h.prototype,"size",void 0),c([(0,r.MZ)({type:Boolean})],h.prototype,"disabled",void 0),c([(0,r.MZ)({type:Boolean})],h.prototype,"fullWidth",void 0),c([(0,r.MZ)({type:Boolean})],h.prototype,"loading",void 0),c([(0,r.MZ)()],h.prototype,"variant",void 0),c([(0,r.MZ)({type:Boolean})],h.prototype,"hasIconLeft",void 0),c([(0,r.MZ)({type:Boolean})],h.prototype,"hasIconRight",void 0),c([(0,r.MZ)()],h.prototype,"borderRadius",void 0),c([(0,r.MZ)()],h.prototype,"textVariant",void 0),h=c([(0,n.E)("wui-button")],h)},66933:(t,e,i)=>{i(36858)},69623:(t,e,i)=>{i.d(e,{M:()=>n});var a=i(56451);const r={attribute:!0,type:String,converter:a.W3,reflect:!1,hasChanged:a.Ec},o=(t=r,e,i)=>{const{kind:a,metadata:o}=i;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),"setter"===a&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===a){const{name:a}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(a,r,t)},init(e){return void 0!==e&&this.C(a,void 0,t,e),e}}}if("setter"===a){const{name:a}=i;return function(i){const r=this[a];e.call(this,i),this.requestUpdate(a,r,t)}}throw Error("Unsupported decorator location: "+a)};function n(t){return(e,i)=>"object"==typeof i?o(t,e,i):((t,e,i)=>{const a=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),a?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}},76660:(t,e,i)=>{i(50301)},77200:(t,e,i)=>{var a=i(48422),r=i(91427),o=i(32971);const n=new class{constructor(){this.cache=new Map}set(t,e){this.cache.set(t,e)}get(t){return this.cache.get(t)}has(t){return this.cache.has(t)}delete(t){this.cache.delete(t)}clear(){this.cache.clear()}};var s=i(47080),c=i(39783);const l=a.AH`
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
`;var d=function(t,e,i,a){var r,o=arguments.length,n=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};const u={add:async()=>(await i.e(5619).then(i.bind(i,95619))).addSvg,allWallets:async()=>(await i.e(9452).then(i.bind(i,99452))).allWalletsSvg,arrowBottomCircle:async()=>(await i.e(5374).then(i.bind(i,45374))).arrowBottomCircleSvg,appStore:async()=>(await i.e(3019).then(i.bind(i,33019))).appStoreSvg,apple:async()=>(await i.e(8852).then(i.bind(i,58852))).appleSvg,arrowBottom:async()=>(await i.e(3097).then(i.bind(i,33097))).arrowBottomSvg,arrowLeft:async()=>(await i.e(9275).then(i.bind(i,89275))).arrowLeftSvg,arrowRight:async()=>(await i.e(1282).then(i.bind(i,61282))).arrowRightSvg,arrowTop:async()=>(await i.e(1967).then(i.bind(i,31967))).arrowTopSvg,bank:async()=>(await i.e(2236).then(i.bind(i,72236))).bankSvg,browser:async()=>(await i.e(6524).then(i.bind(i,76524))).browserSvg,bin:async()=>(await i.e(4249).then(i.bind(i,64249))).binSvg,bitcoin:async()=>(await i.e(4286).then(i.bind(i,94286))).bitcoinSvg,card:async()=>(await i.e(3524).then(i.bind(i,93524))).cardSvg,checkmark:async()=>(await i.e(525).then(i.bind(i,90525))).checkmarkSvg,checkmarkBold:async()=>(await i.e(8905).then(i.bind(i,48905))).checkmarkBoldSvg,chevronBottom:async()=>(await i.e(4231).then(i.bind(i,44231))).chevronBottomSvg,chevronLeft:async()=>(await i.e(5329).then(i.bind(i,65329))).chevronLeftSvg,chevronRight:async()=>(await i.e(1176).then(i.bind(i,61176))).chevronRightSvg,chevronTop:async()=>(await i.e(3745).then(i.bind(i,3745))).chevronTopSvg,chromeStore:async()=>(await i.e(9208).then(i.bind(i,59208))).chromeStoreSvg,clock:async()=>(await i.e(614).then(i.bind(i,20614))).clockSvg,close:async()=>(await i.e(3176).then(i.bind(i,3176))).closeSvg,compass:async()=>(await i.e(4484).then(i.bind(i,94484))).compassSvg,coinPlaceholder:async()=>(await i.e(410).then(i.bind(i,20410))).coinPlaceholderSvg,copy:async()=>(await i.e(355).then(i.bind(i,70355))).copySvg,cursor:async()=>(await i.e(988).then(i.bind(i,40988))).cursorSvg,cursorTransparent:async()=>(await i.e(4855).then(i.bind(i,84855))).cursorTransparentSvg,circle:async()=>(await i.e(8178).then(i.bind(i,78178))).circleSvg,desktop:async()=>(await i.e(4208).then(i.bind(i,54208))).desktopSvg,disconnect:async()=>(await i.e(9728).then(i.bind(i,99728))).disconnectSvg,discord:async()=>(await i.e(4172).then(i.bind(i,64172))).discordSvg,ethereum:async()=>(await i.e(6351).then(i.bind(i,96351))).ethereumSvg,etherscan:async()=>(await i.e(1461).then(i.bind(i,81461))).etherscanSvg,extension:async()=>(await i.e(7381).then(i.bind(i,67381))).extensionSvg,externalLink:async()=>(await i.e(7274).then(i.bind(i,47274))).externalLinkSvg,facebook:async()=>(await i.e(4698).then(i.bind(i,4698))).facebookSvg,farcaster:async()=>(await i.e(5505).then(i.bind(i,5505))).farcasterSvg,filters:async()=>(await i.e(8075).then(i.bind(i,48075))).filtersSvg,github:async()=>(await i.e(8573).then(i.bind(i,48573))).githubSvg,google:async()=>(await i.e(9521).then(i.bind(i,39521))).googleSvg,helpCircle:async()=>(await i.e(7842).then(i.bind(i,97842))).helpCircleSvg,image:async()=>(await i.e(4541).then(i.bind(i,64541))).imageSvg,id:async()=>(await i.e(8743).then(i.bind(i,18743))).idSvg,infoCircle:async()=>(await i.e(2907).then(i.bind(i,42907))).infoCircleSvg,lightbulb:async()=>(await i.e(7547).then(i.bind(i,57547))).lightbulbSvg,mail:async()=>(await i.e(3721).then(i.bind(i,3721))).mailSvg,mobile:async()=>(await i.e(2756).then(i.bind(i,42756))).mobileSvg,more:async()=>(await i.e(8023).then(i.bind(i,28023))).moreSvg,networkPlaceholder:async()=>(await i.e(2134).then(i.bind(i,72134))).networkPlaceholderSvg,nftPlaceholder:async()=>(await i.e(8679).then(i.bind(i,38679))).nftPlaceholderSvg,off:async()=>(await i.e(413).then(i.bind(i,10413))).offSvg,playStore:async()=>(await i.e(376).then(i.bind(i,80376))).playStoreSvg,plus:async()=>(await i.e(7142).then(i.bind(i,87142))).plusSvg,qrCode:async()=>(await i.e(4195).then(i.bind(i,44195))).qrCodeIcon,recycleHorizontal:async()=>(await i.e(8942).then(i.bind(i,28942))).recycleHorizontalSvg,refresh:async()=>(await i.e(8795).then(i.bind(i,88795))).refreshSvg,search:async()=>(await i.e(6202).then(i.bind(i,6202))).searchSvg,send:async()=>(await i.e(196).then(i.bind(i,60196))).sendSvg,swapHorizontal:async()=>(await i.e(1429).then(i.bind(i,31429))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await i.e(5634).then(i.bind(i,15634))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await i.e(638).then(i.bind(i,20638))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await i.e(1259).then(i.bind(i,91259))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await i.e(2051).then(i.bind(i,82051))).swapVerticalSvg,solana:async()=>(await i.e(2178).then(i.bind(i,12178))).solanaSvg,telegram:async()=>(await i.e(7137).then(i.bind(i,57137))).telegramSvg,threeDots:async()=>(await i.e(8617).then(i.bind(i,38617))).threeDotsSvg,twitch:async()=>(await i.e(9605).then(i.bind(i,59605))).twitchSvg,twitter:async()=>(await i.e(7420).then(i.bind(i,57420))).xSvg,twitterIcon:async()=>(await i.e(5622).then(i.bind(i,5622))).twitterIconSvg,user:async()=>(await i.e(9653).then(i.bind(i,29653))).userSvg,verify:async()=>(await i.e(6963).then(i.bind(i,86963))).verifySvg,verifyFilled:async()=>(await i.e(4368).then(i.bind(i,94368))).verifyFilledSvg,wallet:async()=>(await i.e(8235).then(i.bind(i,88235))).walletSvg,walletConnect:async()=>(await i.e(3565).then(i.bind(i,33565))).walletConnectSvg,walletConnectLightBrown:async()=>(await i.e(3565).then(i.bind(i,33565))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await i.e(3565).then(i.bind(i,33565))).walletConnectBrownSvg,walletPlaceholder:async()=>(await i.e(8447).then(i.bind(i,78447))).walletPlaceholderSvg,warningCircle:async()=>(await i.e(7873).then(i.bind(i,37873))).warningCircleSvg,x:async()=>(await i.e(7420).then(i.bind(i,57420))).xSvg,info:async()=>(await i.e(4734).then(i.bind(i,54734))).infoSvg,exclamationTriangle:async()=>(await i.e(7106).then(i.bind(i,7106))).exclamationTriangleSvg,reown:async()=>(await i.e(7391).then(i.bind(i,97391))).reownSvg,"x-mark":async()=>(await i.e(8940).then(i.bind(i,68940))).xMarkSvg};let h=class extends a.WF{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n      --local-aspect-ratio: ${this.aspectRatio}\n    `,a.qy`${(0,o.T)(async function(t){if(n.has(t))return n.get(t);const e=(u[t]??u.copy)();return n.set(t,e),e}(this.name),a.qy`<div class="fallback"></div>`)}`}};h.styles=[s.W5,s.ck,l],d([(0,r.MZ)()],h.prototype,"size",void 0),d([(0,r.MZ)()],h.prototype,"name",void 0),d([(0,r.MZ)()],h.prototype,"color",void 0),d([(0,r.MZ)()],h.prototype,"aspectRatio",void 0),h=d([(0,c.E)("wui-icon")],h)},90315:(t,e,i)=>{i(77200)},91427:(t,e,i)=>{i.d(e,{MZ:()=>a.M,wk:()=>r.w});var a=i(69623),r=i(4537)}}]);
//# sourceMappingURL=6894.widget.iife.js.map