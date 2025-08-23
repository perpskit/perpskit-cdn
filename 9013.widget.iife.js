/*! For license information please see 9013.widget.iife.js.LICENSE.txt */
"use strict";(this.webpackChunkHLWidget=this.webpackChunkHLWidget||[]).push([[9013],{379:(t,e,i)=>{i.d(e,{_:()=>r,K:()=>c});var a=i(80971),o=i(64720),n=i(39341);const r=()=>new s;class s{}const l=new WeakMap,c=(0,n.u$)(class extends o.Kq{render(t){return a.s6}update(t,[e]){const i=e!==this.G;return i&&void 0!==this.G&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),a.s6}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.G){const e=this.ht??globalThis;let i=l.get(e);void 0===i&&(i=new WeakMap,l.set(e,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,t),void 0!==t&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return"function"==typeof this.G?l.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})},1711:(t,e,i)=>{var a=i(48422),o=i(91427),n=i(23507),r=i(39168),s=i(379),l=(i(77200),i(47080)),c=i(39783);const d=a.AH`
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
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};h.styles=[l.W5,l.fD,d],u([(0,o.MZ)()],h.prototype,"size",void 0),u([(0,o.MZ)()],h.prototype,"icon",void 0),u([(0,o.MZ)({type:Boolean})],h.prototype,"disabled",void 0),u([(0,o.MZ)()],h.prototype,"placeholder",void 0),u([(0,o.MZ)()],h.prototype,"type",void 0),u([(0,o.MZ)()],h.prototype,"keyHint",void 0),u([(0,o.MZ)()],h.prototype,"value",void 0),u([(0,o.MZ)()],h.prototype,"inputRightPadding",void 0),u([(0,o.MZ)()],h.prototype,"tabIdx",void 0),h=u([(0,c.E)("wui-input-text")],h)},4537:(t,e,i)=>{i.d(e,{w:()=>o});var a=i(69623);function o(t){return(0,a.M)({...t,state:!0,attribute:!1})}},5802:(t,e,i)=>{var a=i(48422),o=i(91427),n=i(39168),r=(i(36858),i(47080)),s=i(39783);i(1711);const l=a.AH`
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
    `}templateError(){return this.errorMessage?a.qy`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};d.styles=[r.W5,l],c([(0,o.MZ)()],d.prototype,"errorMessage",void 0),c([(0,o.MZ)({type:Boolean})],d.prototype,"disabled",void 0),c([(0,o.MZ)()],d.prototype,"value",void 0),c([(0,o.MZ)()],d.prototype,"tabIdx",void 0),d=c([(0,s.E)("wui-email-input")],d)},18901:(t,e,i)=>{var a=i(48422),o=i(91427),n=i(47080),r=i(39783);const s=a.AH`
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
    </svg>`}};c.styles=[n.W5,s],l([(0,o.MZ)()],c.prototype,"color",void 0),l([(0,o.MZ)()],c.prototype,"size",void 0),c=l([(0,r.E)("wui-loading-spinner")],c)},19013:(t,e,i)=>{i.r(e),i.d(e,{W3mEmailLoginView:()=>H,W3mEmailOtpWidget:()=>O,W3mEmailVerifyDeviceView:()=>M,W3mEmailVerifyOtpView:()=>z,W3mUpdateEmailPrimaryOtpView:()=>j,W3mUpdateEmailSecondaryOtpView:()=>D,W3mUpdateEmailWalletView:()=>Z});var a=i(65149),o=i(68690),n=i(46358),r=i(58711),s=i(32757),l=i(79063),c=i(23774),d=i(65885),u=i(31779),h=i(48422),p=i(91427),g=i(99539),w=(i(38273),i(24668),i(32480),i(46116),i(47080)),v=i(86515),f=i(39783);const b=h.AH`
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
`;var m=function(t,e,i,a){var o,n=arguments.length,r=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let y=class extends h.WF{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return h.qy`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};y.styles=[w.W5,w.fD,b],m([(0,p.MZ)({type:Boolean})],y.prototype,"disabled",void 0),m([(0,p.MZ)({type:String})],y.prototype,"value",void 0),y=m([(0,f.E)("wui-input-numeric")],y);const x=h.AH`
  :host {
    position: relative;
    display: block;
  }
`;var E=function(t,e,i,a){var o,n=arguments.length,r=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let $=class extends h.WF{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=t=>this.values.slice(0,t).every(t=>""!==t),this.handleKeyDown=(t,e)=>{const i=t.target,a=this.getInputElement(i);if(!a)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(t.key)&&t.preventDefault();const o=a.selectionStart;switch(t.key){case"ArrowLeft":o&&a.setSelectionRange(o+1,o+1),this.focusInputField("prev",e);break;case"ArrowRight":case"Shift":this.focusInputField("next",e);break;case"Delete":case"Backspace":""===a.value?this.focusInputField("prev",e):this.updateInput(a,e,"")}},this.focusInputField=(t,e)=>{if("next"===t){const t=e+1;if(!this.shouldInputBeEnabled(t))return;const i=this.numerics[t<this.length?t:e],a=i?this.getInputElement(i):void 0;a&&(a.disabled=!1,a.focus())}if("prev"===t){const t=e-1,i=this.numerics[t>-1?t:e],a=i?this.getInputElement(i):void 0;a&&a.focus()}}}firstUpdated(){this.otp&&(this.values=this.otp.split(""));const t=this.shadowRoot?.querySelectorAll("wui-input-numeric");t&&(this.numerics=Array.from(t)),this.numerics[0]?.focus()}render(){return h.qy`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((t,e)=>h.qy`
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
    `}updateInput(t,e,i){const a=this.numerics[e],o=t||(a?this.getInputElement(a):void 0);o&&(o.value=i,this.values=this.values.map((t,a)=>a===e?i:t))}selectInput(t){const e=t.target;if(e){const t=this.getInputElement(e);t?.select()}}handleInput(t,e){const i=t.target,a=this.getInputElement(i);if(a){const i=a.value;"insertFromPaste"===t.inputType?this.handlePaste(a,i,e):v.Z.isNumber(i)&&t.data?(this.updateInput(a,e,t.data),this.focusInputField("next",e)):this.updateInput(a,e,"")}this.dispatchInputChangeEvent()}handlePaste(t,e,i){const a=e[0];if(a&&v.Z.isNumber(a)){this.updateInput(t,i,a);const o=e.substring(1);if(i+1<this.length&&o.length){const t=this.numerics[i+1],e=t?this.getInputElement(t):void 0;e&&this.handlePaste(e,o,i+1)}else this.focusInputField("next",i)}else this.updateInput(t,i,"")}getInputElement(t){return t.shadowRoot?.querySelector("input")?t.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const t=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:t,bubbles:!0,composed:!0}))}};$.styles=[w.W5,x],E([(0,p.MZ)({type:Number})],$.prototype,"length",void 0),E([(0,p.MZ)({type:String})],$.prototype,"otp",void 0),E([(0,p.wk)()],$.prototype,"values",void 0),$=E([(0,f.E)("wui-otp")],$),i(66933);var k=i(54309);const S=h.AH`
  wui-loading-spinner {
    margin: 9px auto;
  }

  .email-display,
  .email-display wui-text {
    max-width: 100%;
  }
`;var C,I=function(t,e,i,a){var o,n=arguments.length,r=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let O=C=class extends h.WF{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){super(),this.loading=!1,this.timeoutTimeLeft=k.Q.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=l.I.state.data?.email,this.authConnector=g.a.getAuthConnector()}render(){if(!this.email)throw new Error("w3m-email-otp-widget: No email provided");const t=Boolean(this.timeoutTimeLeft),e=this.getFooterLabels(t);return h.qy`
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

        ${this.loading?h.qy`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:h.qy` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?h.qy`
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
    `}startOTPTimeout(){this.timeoutTimeLeft=k.Q.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=k.Q.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(t){try{this.loading||(this.otp=t.detail,this.shouldSubmitOnOtpChange()&&(this.loading=!0,await(this.onOtpSubmit?.(this.otp))))}catch(t){this.error=d.w.parseError(t),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){if(this.error="",this.otp="",!g.a.getAuthConnector()||!this.email)throw new Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),c.P.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(t){c.P.showError(t)}finally{this.loading=!1}}getFooterLabels(t){return this.onStartOver?{title:"Something wrong?",action:"Try again "+(t?`in ${this.timeoutTimeLeft}s`:"")}:{title:"Didn't receive it?",action:"Resend "+(t?`in ${this.timeoutTimeLeft}s`:"Code")}}shouldSubmitOnOtpChange(){return this.authConnector&&this.otp.length===C.OTP_LENGTH}};O.OTP_LENGTH=6,O.styles=S,I([(0,p.wk)()],O.prototype,"loading",void 0),I([(0,p.wk)()],O.prototype,"timeoutTimeLeft",void 0),I([(0,p.wk)()],O.prototype,"error",void 0),O=C=I([(0,u.EM)("w3m-email-otp-widget")],O);let z=class extends O{constructor(){super(...arguments),this.onOtpSubmit=async t=>{try{if(this.authConnector){const e=a.W.state.activeChain,i=o.x.getConnections(e),d=n.H.state.remoteFeatures?.multiWallet,u=i.length>0;if(await this.authConnector.provider.connectOtp({otp:t}),r.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),!e)throw new Error("Active chain is not set on ChainControll");if(await o.x.connectExternal(this.authConnector,e),r.E.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email",name:this.authConnector.name||"Unknown",caipNetworkId:a.W.getActiveCaipNetwork()?.caipNetworkId}}),n.H.state.remoteFeatures?.emailCapture)return;if(n.H.state.siwx)return void s.W.close();if(u&&d)return l.I.replace("ProfileWallets"),void c.P.showSuccess("New Wallet Added");s.W.close()}}catch(t){throw r.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:d.w.parseError(t)}}),t}},this.onOtpResend=async t=>{this.authConnector&&(await this.authConnector.provider.connectEmail({email:t}),r.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))}}};z=function(t,e,i,a){var o,n=arguments.length,r=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}([(0,u.EM)("w3m-email-verify-otp-view")],z),i(23411);const R=h.AH`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var A=function(t,e,i,a){var o,n=arguments.length,r=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let M=class extends h.WF{constructor(){super(),this.email=l.I.state.data?.email,this.authConnector=g.a.getAuthConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.authConnector)throw new Error("w3m-email-verify-device-view: No auth connector provided");return h.qy`
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
    `}async listenForDeviceApproval(){if(this.authConnector)try{await this.authConnector.provider.connectDevice(),r.E.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),r.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),l.I.replace("EmailVerifyOtp",{email:this.email})}catch(t){l.I.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.authConnector||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.authConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),c.P.showSuccess("Code email resent")}}catch(t){c.P.showError(t)}finally{this.loading=!1}}};M.styles=R,A([(0,p.wk)()],M.prototype,"loading",void 0),M=A([(0,u.EM)("w3m-email-verify-device-view")],M);var T=i(379);i(33846),i(5802);const _=h.AH`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var P=function(t,e,i,a){var o,n=arguments.length,r=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let Z=class extends h.WF{constructor(){super(...arguments),this.formRef=(0,T._)(),this.initialEmail=l.I.state.data?.email??"",this.redirectView=l.I.state.data?.redirectView,this.email="",this.loading=!1}firstUpdated(){this.formRef.value?.addEventListener("keydown",t=>{"Enter"===t.key&&this.onSubmitEmail(t)})}render(){return h.qy`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${(0,T.K)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
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
    `}onEmailInputChange(t){this.email=t.detail}async onSubmitEmail(t){try{if(this.loading)return;this.loading=!0,t.preventDefault();const e=g.a.getAuthConnector();if(!e)throw new Error("w3m-update-email-wallet: Auth connector not found");const i=await e.provider.updateEmail({email:this.email});r.E.sendEvent({type:"track",event:"EMAIL_EDIT"}),"VERIFY_SECONDARY_OTP"===i.action?l.I.push("UpdateEmailSecondaryOtp",{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView}):l.I.push("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView})}catch(t){c.P.showError(t),this.loading=!1}}buttonsTemplate(){const t=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return this.redirectView?h.qy`
      <wui-flex gap="s">
        <wui-button size="md" variant="neutral" fullWidth @click=${l.I.goBack}>
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
    `:h.qy`
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
      `}};Z.styles=_,P([(0,p.wk)()],Z.prototype,"email",void 0),P([(0,p.wk)()],Z.prototype,"loading",void 0),Z=P([(0,u.EM)("w3m-update-email-wallet-view")],Z);let j=class extends O{constructor(){super(),this.email=l.I.state.data?.email,this.onOtpSubmit=async t=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailPrimaryOtp({otp:t}),r.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),l.I.replace("UpdateEmailSecondaryOtp",l.I.state.data))}catch(t){throw r.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:d.w.parseError(t)}}),t}},this.onStartOver=()=>{l.I.replace("UpdateEmailWallet",l.I.state.data)}}};j=function(t,e,i,a){var o,n=arguments.length,r=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}([(0,u.EM)("w3m-update-email-primary-otp-view")],j);let D=class extends O{constructor(){super(),this.email=l.I.state.data?.newEmail,this.redirectView=l.I.state.data?.redirectView,this.onOtpSubmit=async t=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailSecondaryOtp({otp:t}),r.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),this.redirectView&&l.I.reset(this.redirectView))}catch(t){throw r.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:d.w.parseError(t)}}),t}},this.onStartOver=()=>{l.I.replace("UpdateEmailWallet",l.I.state.data)}}};D=function(t,e,i,a){var o,n=arguments.length,r=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}([(0,u.EM)("w3m-update-email-secondary-otp-view")],D);var W=i(33255),L=i(1483),F=function(t,e,i,a){var o,n=arguments.length,r=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let H=class extends h.WF{constructor(){super(),this.authConnector=g.a.getAuthConnector(),this.isEmailEnabled=n.H.state.remoteFeatures?.email,this.isAuthEnabled=this.checkIfAuthEnabled(g.a.state.connectors),this.connectors=g.a.state.connectors,g.a.subscribeKey("connectors",t=>{this.connectors=t,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)})}render(){if(!this.isEmailEnabled)throw new Error("w3m-email-login-view: Email is not enabled");if(!this.isAuthEnabled)throw new Error("w3m-email-login-view: No auth connector provided");return h.qy`<wui-flex
      flexDirection="column"
      .padding=${["3xs","m","m","m"]}
      gap="l"
    >
      <w3m-email-login-widget></w3m-email-login-widget>
    </wui-flex> `}checkIfAuthEnabled(t){const e=t.filter(t=>t.type===L.o.CONNECTOR_TYPE_AUTH).map(t=>t.chain);return W.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(t=>e.includes(t))}};F([(0,p.wk)()],H.prototype,"connectors",void 0),H=F([(0,u.EM)("w3m-email-login-view")],H)},23411:(t,e,i)=>{i(30204)},23507:(t,e,i)=>{i.d(e,{H:()=>n});var a=i(80971),o=i(39341);const n=(0,o.u$)(class extends o.WL{constructor(t){if(super(t),t.type!==o.OA.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const a=!!e[t];a===this.st.has(t)||this.nt?.has(t)||(a?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return a.c0}})},24668:(t,e,i)=>{var a=i(48422),o=i(91427),n=i(39168),r=(i(36858),i(47080)),s=i(39783);const l=a.AH`
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
    `}};d.styles=[r.W5,r.fD,l],c([(0,o.MZ)()],d.prototype,"tabIdx",void 0),c([(0,o.MZ)({type:Boolean})],d.prototype,"disabled",void 0),c([(0,o.MZ)()],d.prototype,"color",void 0),d=c([(0,s.E)("wui-link")],d)},27165:(t,e,i)=>{i.d(e,{Rt:()=>r,sO:()=>n});var a=i(80971);const{I:o}=a.ge,n=t=>null===t||"object"!=typeof t&&"function"!=typeof t,r=t=>void 0===t.strings},30204:(t,e,i)=>{var a=i(48422),o=i(91427),n=(i(77200),i(47080)),r=i(39783);const s=a.AH`
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
`;var l=function(t,e,i,a){var o,n=arguments.length,r=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let c=class extends a.WF{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const t=this.iconSize||this.size,e="lg"===this.size,i="xl"===this.size,o=e?"12%":"16%",n=e?"xxs":i?"s":"3xl",r="gray"===this.background,s="opaque"===this.background,l="accent-100"===this.backgroundColor&&s||"success-100"===this.backgroundColor&&s||"error-100"===this.backgroundColor&&s||"inverse-100"===this.backgroundColor&&s;let c=`var(--wui-color-${this.backgroundColor})`;return l?c=`var(--wui-icon-box-bg-${this.backgroundColor})`:r&&(c=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${c};\n       --local-bg-mix: ${l||r?"100%":o};\n       --local-border-radius: var(--wui-border-radius-${n});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,a.qy` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};c.styles=[n.W5,n.fD,s],l([(0,o.MZ)()],c.prototype,"size",void 0),l([(0,o.MZ)()],c.prototype,"backgroundColor",void 0),l([(0,o.MZ)()],c.prototype,"iconColor",void 0),l([(0,o.MZ)()],c.prototype,"iconSize",void 0),l([(0,o.MZ)()],c.prototype,"background",void 0),l([(0,o.MZ)({type:Boolean})],c.prototype,"border",void 0),l([(0,o.MZ)()],c.prototype,"borderColor",void 0),l([(0,o.MZ)()],c.prototype,"icon",void 0),c=l([(0,r.E)("wui-icon-box")],c)},32480:(t,e,i)=>{i(18901)},32971:(t,e,i)=>{i.d(e,{T:()=>h});var a=i(80971),o=i(27165),n=i(64720);class r{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class s{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}var l=i(39341);const c=t=>!(0,o.sO)(t)&&"function"==typeof t.then,d=1073741823;class u extends n.Kq{constructor(){super(...arguments),this._$Cwt=d,this._$Cbt=[],this._$CK=new r(this),this._$CX=new s}render(...t){return t.find(t=>!c(t))??a.c0}update(t,e){const i=this._$Cbt;let o=i.length;this._$Cbt=e;const n=this._$CK,r=this._$CX;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$Cwt);t++){const a=e[t];if(!c(a))return this._$Cwt=t,a;t<o&&a===i[t]||(this._$Cwt=d,o=0,Promise.resolve(a).then(async t=>{for(;r.get();)await r.get();const e=n.deref();if(void 0!==e){const i=e._$Cbt.indexOf(a);i>-1&&i<e._$Cwt&&(e._$Cwt=i,e.setValue(t))}}))}return a.c0}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const h=(0,l.u$)(u)},33846:(t,e,i)=>{i(66727)},36858:(t,e,i)=>{var a=i(48422),o=i(91427),n=i(23507),r=i(47080),s=i(39783);const l=a.AH`
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
`;var c=function(t,e,i,a){var o,n=arguments.length,r=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let d=class extends a.WF{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,a.qy`<slot class=${(0,n.H)(t)}></slot>`}};d.styles=[r.W5,l],c([(0,o.MZ)()],d.prototype,"variant",void 0),c([(0,o.MZ)()],d.prototype,"color",void 0),c([(0,o.MZ)()],d.prototype,"align",void 0),c([(0,o.MZ)()],d.prototype,"lineClamp",void 0),d=c([(0,s.E)("wui-text")],d)},38273:(t,e,i)=>{i(46116)},39168:(t,e,i)=>{i.d(e,{J:()=>o});var a=i(80971);const o=t=>t??a.s6},39341:(t,e,i)=>{i.d(e,{OA:()=>a,WL:()=>n,u$:()=>o});const a={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},o=t=>(...e)=>({_$litDirective$:t,values:e});class n{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},46116:(t,e,i)=>{var a=i(48422),o=i(91427),n=i(47080),r=i(86515),s=i(39783);const l=a.AH`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var c=function(t,e,i,a){var o,n=arguments.length,r=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let d=class extends a.WF{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&r.Z.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&r.Z.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&r.Z.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&r.Z.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&r.Z.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&r.Z.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&r.Z.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&r.Z.getSpacingStyles(this.margin,3)};\n    `,a.qy`<slot></slot>`}};d.styles=[n.W5,l],c([(0,o.MZ)()],d.prototype,"flexDirection",void 0),c([(0,o.MZ)()],d.prototype,"flexWrap",void 0),c([(0,o.MZ)()],d.prototype,"flexBasis",void 0),c([(0,o.MZ)()],d.prototype,"flexGrow",void 0),c([(0,o.MZ)()],d.prototype,"flexShrink",void 0),c([(0,o.MZ)()],d.prototype,"alignItems",void 0),c([(0,o.MZ)()],d.prototype,"justifyContent",void 0),c([(0,o.MZ)()],d.prototype,"columnGap",void 0),c([(0,o.MZ)()],d.prototype,"rowGap",void 0),c([(0,o.MZ)()],d.prototype,"gap",void 0),c([(0,o.MZ)()],d.prototype,"padding",void 0),c([(0,o.MZ)()],d.prototype,"margin",void 0),d=c([(0,s.E)("wui-flex")],d)},64720:(t,e,i)=>{i.d(e,{Kq:()=>u});var a=i(27165),o=i(39341);const n=(t,e)=>{const i=t._$AN;if(void 0===i)return!1;for(const t of i)t._$AO?.(e,!1),n(t,e);return!0},r=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===i?.size)},s=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),d(e)}};function l(t){void 0!==this._$AN?(r(this),this._$AM=t,s(this)):this._$AM=t}function c(t,e=!1,i=0){const a=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(e)if(Array.isArray(a))for(let t=i;t<a.length;t++)n(a[t],!1),r(a[t]);else null!=a&&(n(a,!1),r(a));else n(this,t)}const d=t=>{t.type==o.OA.CHILD&&(t._$AP??=c,t._$AQ??=l)};class u extends o.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),s(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(n(this,t),r(this))}setValue(t){if((0,a.Rt)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}},66727:(t,e,i)=>{var a=i(48422),o=i(91427),n=(i(18901),i(36858),i(47080)),r=i(39783);const s=a.AH`
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
`;var l=function(t,e,i,a){var o,n=arguments.length,r=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};const c={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},d={lg:"paragraph-600",md:"small-600",sm:"small-600",xs:"tiny-600"},u={lg:"md",md:"md",sm:"sm",xs:"sm"};let h=class extends a.WF{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`\n    --local-width: ${this.fullWidth?"100%":"auto"};\n    --local-opacity-100: ${this.loading?0:1};\n    --local-opacity-000: ${this.loading?1:0};\n    --local-border-radius: var(--wui-border-radius-${this.borderRadius});\n    `;const t=this.textVariant??d[this.size];return a.qy`
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
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const t=u[this.size],e=this.disabled?c.disabled:c[this.variant];return a.qy`<wui-loading-spinner color=${e} size=${t}></wui-loading-spinner>`}return a.qy``}};h.styles=[n.W5,n.fD,s],l([(0,o.MZ)()],h.prototype,"size",void 0),l([(0,o.MZ)({type:Boolean})],h.prototype,"disabled",void 0),l([(0,o.MZ)({type:Boolean})],h.prototype,"fullWidth",void 0),l([(0,o.MZ)({type:Boolean})],h.prototype,"loading",void 0),l([(0,o.MZ)()],h.prototype,"variant",void 0),l([(0,o.MZ)({type:Boolean})],h.prototype,"hasIconLeft",void 0),l([(0,o.MZ)({type:Boolean})],h.prototype,"hasIconRight",void 0),l([(0,o.MZ)()],h.prototype,"borderRadius",void 0),l([(0,o.MZ)()],h.prototype,"textVariant",void 0),h=l([(0,r.E)("wui-button")],h)},66933:(t,e,i)=>{i(36858)},69623:(t,e,i)=>{i.d(e,{M:()=>r});var a=i(56451);const o={attribute:!0,type:String,converter:a.W3,reflect:!1,hasChanged:a.Ec},n=(t=o,e,i)=>{const{kind:a,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),"setter"===a&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===a){const{name:a}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(a,o,t)},init(e){return void 0!==e&&this.C(a,void 0,t,e),e}}}if("setter"===a){const{name:a}=i;return function(i){const o=this[a];e.call(this,i),this.requestUpdate(a,o,t)}}throw Error("Unsupported decorator location: "+a)};function r(t){return(e,i)=>"object"==typeof i?n(t,e,i):((t,e,i)=>{const a=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),a?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}},77200:(t,e,i)=>{var a=i(48422),o=i(91427),n=i(32971);const r=new class{constructor(){this.cache=new Map}set(t,e){this.cache.set(t,e)}get(t){return this.cache.get(t)}has(t){return this.cache.has(t)}delete(t){this.cache.delete(t)}clear(){this.cache.clear()}};var s=i(47080),l=i(39783);const c=a.AH`
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
`;var d=function(t,e,i,a){var o,n=arguments.length,r=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};const u={add:async()=>(await i.e(5619).then(i.bind(i,95619))).addSvg,allWallets:async()=>(await i.e(9452).then(i.bind(i,99452))).allWalletsSvg,arrowBottomCircle:async()=>(await i.e(5374).then(i.bind(i,45374))).arrowBottomCircleSvg,appStore:async()=>(await i.e(3019).then(i.bind(i,33019))).appStoreSvg,apple:async()=>(await i.e(8852).then(i.bind(i,58852))).appleSvg,arrowBottom:async()=>(await i.e(3097).then(i.bind(i,33097))).arrowBottomSvg,arrowLeft:async()=>(await i.e(9275).then(i.bind(i,89275))).arrowLeftSvg,arrowRight:async()=>(await i.e(1282).then(i.bind(i,61282))).arrowRightSvg,arrowTop:async()=>(await i.e(1967).then(i.bind(i,31967))).arrowTopSvg,bank:async()=>(await i.e(2236).then(i.bind(i,72236))).bankSvg,browser:async()=>(await i.e(6524).then(i.bind(i,76524))).browserSvg,bin:async()=>(await i.e(4249).then(i.bind(i,64249))).binSvg,bitcoin:async()=>(await i.e(4286).then(i.bind(i,94286))).bitcoinSvg,card:async()=>(await i.e(3524).then(i.bind(i,93524))).cardSvg,checkmark:async()=>(await i.e(525).then(i.bind(i,90525))).checkmarkSvg,checkmarkBold:async()=>(await i.e(8905).then(i.bind(i,48905))).checkmarkBoldSvg,chevronBottom:async()=>(await i.e(4231).then(i.bind(i,44231))).chevronBottomSvg,chevronLeft:async()=>(await i.e(5329).then(i.bind(i,65329))).chevronLeftSvg,chevronRight:async()=>(await i.e(1176).then(i.bind(i,61176))).chevronRightSvg,chevronTop:async()=>(await i.e(3745).then(i.bind(i,3745))).chevronTopSvg,chromeStore:async()=>(await i.e(9208).then(i.bind(i,59208))).chromeStoreSvg,clock:async()=>(await i.e(614).then(i.bind(i,20614))).clockSvg,close:async()=>(await i.e(3176).then(i.bind(i,3176))).closeSvg,compass:async()=>(await i.e(4484).then(i.bind(i,94484))).compassSvg,coinPlaceholder:async()=>(await i.e(410).then(i.bind(i,20410))).coinPlaceholderSvg,copy:async()=>(await i.e(355).then(i.bind(i,70355))).copySvg,cursor:async()=>(await i.e(988).then(i.bind(i,40988))).cursorSvg,cursorTransparent:async()=>(await i.e(4855).then(i.bind(i,84855))).cursorTransparentSvg,circle:async()=>(await i.e(8178).then(i.bind(i,78178))).circleSvg,desktop:async()=>(await i.e(4208).then(i.bind(i,54208))).desktopSvg,disconnect:async()=>(await i.e(9728).then(i.bind(i,99728))).disconnectSvg,discord:async()=>(await i.e(4172).then(i.bind(i,64172))).discordSvg,ethereum:async()=>(await i.e(6351).then(i.bind(i,96351))).ethereumSvg,etherscan:async()=>(await i.e(1461).then(i.bind(i,81461))).etherscanSvg,extension:async()=>(await i.e(7381).then(i.bind(i,67381))).extensionSvg,externalLink:async()=>(await i.e(7274).then(i.bind(i,47274))).externalLinkSvg,facebook:async()=>(await i.e(4698).then(i.bind(i,4698))).facebookSvg,farcaster:async()=>(await i.e(5505).then(i.bind(i,5505))).farcasterSvg,filters:async()=>(await i.e(8075).then(i.bind(i,48075))).filtersSvg,github:async()=>(await i.e(8573).then(i.bind(i,48573))).githubSvg,google:async()=>(await i.e(9521).then(i.bind(i,39521))).googleSvg,helpCircle:async()=>(await i.e(7842).then(i.bind(i,97842))).helpCircleSvg,image:async()=>(await i.e(4541).then(i.bind(i,64541))).imageSvg,id:async()=>(await i.e(8743).then(i.bind(i,18743))).idSvg,infoCircle:async()=>(await i.e(2907).then(i.bind(i,42907))).infoCircleSvg,lightbulb:async()=>(await i.e(7547).then(i.bind(i,57547))).lightbulbSvg,mail:async()=>(await i.e(3721).then(i.bind(i,3721))).mailSvg,mobile:async()=>(await i.e(2756).then(i.bind(i,42756))).mobileSvg,more:async()=>(await i.e(8023).then(i.bind(i,28023))).moreSvg,networkPlaceholder:async()=>(await i.e(2134).then(i.bind(i,72134))).networkPlaceholderSvg,nftPlaceholder:async()=>(await i.e(8679).then(i.bind(i,38679))).nftPlaceholderSvg,off:async()=>(await i.e(413).then(i.bind(i,10413))).offSvg,playStore:async()=>(await i.e(376).then(i.bind(i,80376))).playStoreSvg,plus:async()=>(await i.e(7142).then(i.bind(i,87142))).plusSvg,qrCode:async()=>(await i.e(4195).then(i.bind(i,44195))).qrCodeIcon,recycleHorizontal:async()=>(await i.e(8942).then(i.bind(i,28942))).recycleHorizontalSvg,refresh:async()=>(await i.e(8795).then(i.bind(i,88795))).refreshSvg,search:async()=>(await i.e(6202).then(i.bind(i,6202))).searchSvg,send:async()=>(await i.e(196).then(i.bind(i,60196))).sendSvg,swapHorizontal:async()=>(await i.e(1429).then(i.bind(i,31429))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await i.e(5634).then(i.bind(i,15634))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await i.e(638).then(i.bind(i,20638))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await i.e(1259).then(i.bind(i,91259))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await i.e(2051).then(i.bind(i,82051))).swapVerticalSvg,solana:async()=>(await i.e(2178).then(i.bind(i,12178))).solanaSvg,telegram:async()=>(await i.e(7137).then(i.bind(i,57137))).telegramSvg,threeDots:async()=>(await i.e(8617).then(i.bind(i,38617))).threeDotsSvg,twitch:async()=>(await i.e(9605).then(i.bind(i,59605))).twitchSvg,twitter:async()=>(await i.e(7420).then(i.bind(i,57420))).xSvg,twitterIcon:async()=>(await i.e(5622).then(i.bind(i,5622))).twitterIconSvg,user:async()=>(await i.e(9653).then(i.bind(i,29653))).userSvg,verify:async()=>(await i.e(6963).then(i.bind(i,86963))).verifySvg,verifyFilled:async()=>(await i.e(4368).then(i.bind(i,94368))).verifyFilledSvg,wallet:async()=>(await i.e(8235).then(i.bind(i,88235))).walletSvg,walletConnect:async()=>(await i.e(3565).then(i.bind(i,33565))).walletConnectSvg,walletConnectLightBrown:async()=>(await i.e(3565).then(i.bind(i,33565))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await i.e(3565).then(i.bind(i,33565))).walletConnectBrownSvg,walletPlaceholder:async()=>(await i.e(8447).then(i.bind(i,78447))).walletPlaceholderSvg,warningCircle:async()=>(await i.e(7873).then(i.bind(i,37873))).warningCircleSvg,x:async()=>(await i.e(7420).then(i.bind(i,57420))).xSvg,info:async()=>(await i.e(4734).then(i.bind(i,54734))).infoSvg,exclamationTriangle:async()=>(await i.e(7106).then(i.bind(i,7106))).exclamationTriangleSvg,reown:async()=>(await i.e(7391).then(i.bind(i,97391))).reownSvg,"x-mark":async()=>(await i.e(8940).then(i.bind(i,68940))).xMarkSvg};let h=class extends a.WF{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n      --local-aspect-ratio: ${this.aspectRatio}\n    `,a.qy`${(0,n.T)(async function(t){if(r.has(t))return r.get(t);const e=(u[t]??u.copy)();return r.set(t,e),e}(this.name),a.qy`<div class="fallback"></div>`)}`}};h.styles=[s.W5,s.ck,c],d([(0,o.MZ)()],h.prototype,"size",void 0),d([(0,o.MZ)()],h.prototype,"name",void 0),d([(0,o.MZ)()],h.prototype,"color",void 0),d([(0,o.MZ)()],h.prototype,"aspectRatio",void 0),h=d([(0,l.E)("wui-icon")],h)},91427:(t,e,i)=>{i.d(e,{MZ:()=>a.M,wk:()=>o.w});var a=i(69623),o=i(4537)}}]);
//# sourceMappingURL=9013.widget.iife.js.map