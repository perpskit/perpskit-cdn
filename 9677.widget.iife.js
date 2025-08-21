/*! For license information please see 9677.widget.iife.js.LICENSE.txt */
"undefined"!=typeof globalThis&&(void 0===globalThis.process&&(globalThis.process={env:{NODE_ENV:"production"},browser:!0,version:"",versions:{}}),void 0===globalThis.require&&(globalThis.require=function(e){if("process/browser"===e||"process"===e)return globalThis.process;throw new Error("Module not found: "+e)})),"undefined"!=typeof window&&(void 0===window.process&&(window.process={env:{NODE_ENV:"production"},browser:!0,version:"",versions:{}}),void 0===window.require&&(window.require=function(e){if("process/browser"===e||"process"===e)return window.process;throw new Error("Module not found: "+e)})),"undefined"!=typeof global&&(void 0===global.process&&(global.process={env:{NODE_ENV:"production"},browser:!0,version:"",versions:{}}),void 0===global.require&&(global.require=function(e){if("process/browser"===e||"process"===e)return global.process;throw new Error("Module not found: "+e)})),"undefined"!=typeof self&&(void 0===self.process&&(self.process={env:{NODE_ENV:"production"},browser:!0,version:"",versions:{}}),void 0===self.require&&(self.require=function(e){if("process/browser"===e||"process"===e)return self.process;throw new Error("Module not found: "+e)})),(this.webpackChunkHLWidget=this.webpackChunkHLWidget||[]).push([[9677],{4537:(e,t,i)=>{i.d(t,{w:()=>a});var o=i(69623);function a(e){return(0,o.M)({...e,state:!0,attribute:!1})}},14080:(e,t,i)=>{i.d(t,{J:()=>w});var o=i(48422),a=i(91427),r=i(33461),n=i(43393),s=i(72470),c=i(44039);const l=o.AH`
  :host {
    --prev-height: 0px;
    --new-height: 0px;
    display: block;
  }

  div.w3m-router-container {
    transform: translateY(0);
    opacity: 1;
  }

  div.w3m-router-container[view-direction='prev'] {
    animation:
      slide-left-out 150ms forwards ease,
      slide-left-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  div.w3m-router-container[view-direction='next'] {
    animation:
      slide-right-out 150ms forwards ease,
      slide-right-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(-10px);
      opacity: 0;
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;var d=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let w=class extends o.WF{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=r.I.state.view,this.viewDirection="",this.unsubscribe.push(r.I.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(([e])=>{const t=`${e?.contentRect.height}px`;"0px"!==this.prevHeight&&(this.style.setProperty("--prev-height",this.prevHeight),this.style.setProperty("--new-height",t),this.style.animation="w3m-view-height 150ms forwards ease",this.style.height="auto"),setTimeout(()=>{this.prevHeight=t,this.style.animation="unset"},c.o.ANIMATION_DURATIONS.ModalHeight)}),this.resizeObserver?.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach(e=>e())}render(){return o.qy`<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`}viewTemplate(){switch(this.view){case"AccountSettings":return o.qy`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return o.qy`<w3m-account-view></w3m-account-view>`;case"AllWallets":return o.qy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return o.qy`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return o.qy`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return o.qy`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":default:return o.qy`<w3m-connect-view></w3m-connect-view>`;case"Create":return o.qy`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return o.qy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return o.qy`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return o.qy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return o.qy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return o.qy`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return o.qy`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return o.qy`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"Downloads":return o.qy`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return o.qy`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return o.qy`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return o.qy`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return o.qy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return o.qy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return o.qy`<w3m-network-switch-view></w3m-network-switch-view>`;case"Profile":return o.qy`<w3m-profile-view></w3m-profile-view>`;case"SwitchAddress":return o.qy`<w3m-switch-address-view></w3m-switch-address-view>`;case"Transactions":return o.qy`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return o.qy`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return o.qy`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return o.qy`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return o.qy`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return o.qy`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return o.qy`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return o.qy`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return o.qy`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return o.qy`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return o.qy`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return o.qy`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return o.qy`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return o.qy`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return o.qy`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return o.qy`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WhatIsABuy":return o.qy`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return o.qy`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return o.qy`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return o.qy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return o.qy`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return o.qy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return o.qy`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return o.qy`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return o.qy`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return o.qy`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return o.qy`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return o.qy`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return o.qy`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return o.qy`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return o.qy`<w3m-pay-loading-view></w3m-pay-loading-view>`}}onViewChange(e){n.I.hide();let t=c.o.VIEW_DIRECTION.Next;const{history:i}=r.I.state;i.length<this.prevHistoryLength&&(t=c.o.VIEW_DIRECTION.Prev),this.prevHistoryLength=i.length,this.viewDirection=t,setTimeout(()=>{this.view=e},c.o.ANIMATION_DURATIONS.ViewTransition)}getWrapper(){return this.shadowRoot?.querySelector("div")}};w.styles=l,d([(0,a.wk)()],w.prototype,"view",void 0),d([(0,a.wk)()],w.prototype,"viewDirection",void 0),w=d([(0,s.EM)("w3m-router")],w)},20766:(e,t,i)=>{var o=i(48422),a=i(91427),r=i(56063),n=i(68664);const s=o.AH`
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
    </svg>`}};l.styles=[r.W5,s],c([(0,a.MZ)()],l.prototype,"color",void 0),c([(0,a.MZ)()],l.prototype,"size",void 0),l=c([(0,n.E)("wui-loading-spinner")],l)},23507:(e,t,i)=>{i.d(t,{H:()=>r});var o=i(80971),a=i(39341);const r=(0,a.u$)(class extends a.WL{constructor(e){if(super(e),e.type!==a.OA.ATTRIBUTE||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e)));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const i=e.element.classList;for(const e of this.st)e in t||(i.remove(e),this.st.delete(e));for(const e in t){const o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return o.c0}})},27165:(e,t,i)=>{i.d(t,{Rt:()=>n,sO:()=>r});var o=i(80971);const{I:a}=o.ge,r=e=>null===e||"object"!=typeof e&&"function"!=typeof e,n=e=>void 0===e.strings},31037:(e,t,i)=>{var o=i(48422),a=i(91427),r=i(56063),n=i(68664);const s=o.AH`
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
`;var c=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let l=class extends o.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`\n      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      `,o.qy`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};l.styles=[r.W5,r.ck,s],c([(0,a.MZ)()],l.prototype,"src",void 0),c([(0,a.MZ)()],l.prototype,"alt",void 0),c([(0,a.MZ)()],l.prototype,"size",void 0),l=c([(0,n.E)("wui-image")],l)},32971:(e,t,i)=>{i.d(t,{T:()=>h});var o=i(80971),a=i(27165),r=i(64720);class n{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class s{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}}var c=i(39341);const l=e=>!(0,a.sO)(e)&&"function"==typeof e.then,d=1073741823;class w extends r.Kq{constructor(){super(...arguments),this._$Cwt=d,this._$Cbt=[],this._$CK=new n(this),this._$CX=new s}render(...e){return e.find(e=>!l(e))??o.c0}update(e,t){const i=this._$Cbt;let a=i.length;this._$Cbt=t;const r=this._$CK,n=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){const o=t[e];if(!l(o))return this._$Cwt=e,o;e<a&&o===i[e]||(this._$Cwt=d,a=0,Promise.resolve(o).then(async e=>{for(;n.get();)await n.get();const t=r.deref();if(void 0!==t){const i=t._$Cbt.indexOf(o);i>-1&&i<t._$Cwt&&(t._$Cwt=i,t.setValue(e))}}))}return o.c0}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const h=(0,c.u$)(w)},33165:(e,t,i)=>{var o=i(48422),a=i(91427),r=i(56063),n=i(71686),s=i(68664);const c=o.AH`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var l=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let d=class extends o.WF{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&n.Z.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&n.Z.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&n.Z.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&n.Z.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&n.Z.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&n.Z.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&n.Z.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&n.Z.getSpacingStyles(this.margin,3)};\n    `,o.qy`<slot></slot>`}};d.styles=[r.W5,c],l([(0,a.MZ)()],d.prototype,"flexDirection",void 0),l([(0,a.MZ)()],d.prototype,"flexWrap",void 0),l([(0,a.MZ)()],d.prototype,"flexBasis",void 0),l([(0,a.MZ)()],d.prototype,"flexGrow",void 0),l([(0,a.MZ)()],d.prototype,"flexShrink",void 0),l([(0,a.MZ)()],d.prototype,"alignItems",void 0),l([(0,a.MZ)()],d.prototype,"justifyContent",void 0),l([(0,a.MZ)()],d.prototype,"columnGap",void 0),l([(0,a.MZ)()],d.prototype,"rowGap",void 0),l([(0,a.MZ)()],d.prototype,"gap",void 0),l([(0,a.MZ)()],d.prototype,"padding",void 0),l([(0,a.MZ)()],d.prototype,"margin",void 0),d=l([(0,s.E)("wui-flex")],d)},37498:(e,t,i)=>{i(59481)},39168:(e,t,i)=>{i.d(t,{J:()=>a});var o=i(80971);const a=e=>e??o.s6},39341:(e,t,i)=>{i.d(t,{OA:()=>o,WL:()=>r,u$:()=>a});const o={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},a=e=>(...t)=>({_$litDirective$:e,values:t});class r{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},43393:(e,t,i)=>{i.d(t,{I:()=>c});var o=i(44822),a=i(36517),r=i(28621);const n=(0,o.BX)({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),s={state:n,subscribe:e=>(0,o.B1)(n,()=>e(n)),subscribeKey:(e,t)=>(0,a.u$)(n,e,t),showTooltip({message:e,triggerRect:t,variant:i}){n.open=!0,n.message=e,n.triggerRect=t,n.variant=i},hide(){n.open=!1,n.message="",n.triggerRect={width:0,height:0,top:0,left:0}}},c=(0,r.X)(s)},43508:(e,t,i)=>{i(33165)},46664:(e,t,i)=>{var o=i(48422),a=i(91427),r=(i(59481),i(56063)),n=i(68664);const s=o.AH`
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
`;var c=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let l=class extends o.WF{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const e="lg"===this.size?"--wui-border-radius-xs":"--wui-border-radius-xxs",t="lg"===this.size?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`\n    --local-border-radius: var(${e});\n    --local-padding: var(${t});\n`,o.qy`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};l.styles=[r.W5,r.fD,r.ck,s],c([(0,a.MZ)()],l.prototype,"size",void 0),c([(0,a.MZ)({type:Boolean})],l.prototype,"disabled",void 0),c([(0,a.MZ)()],l.prototype,"icon",void 0),c([(0,a.MZ)()],l.prototype,"iconColor",void 0),l=c([(0,n.E)("wui-icon-link")],l)},49677:(e,t,i)=>{i.r(t),i.d(t,{AppKitModal:()=>ie,W3mModal:()=>te,W3mModalBase:()=>ee});var o=i(48422),a=i(91427),r=i(39168),n=i(76539),s=i(19400),c=i(29327),l=i(52819),d=i(30413),w=i(24634),h=i(33461),p=i(37875);const u={isUnsupportedChainView:()=>"UnsupportedChain"===h.I.state.view||"SwitchNetwork"===h.I.state.view&&h.I.state.history.includes("UnsupportedChain"),async safeClose(){this.isUnsupportedChainView()||await p.U.isSIWXCloseDisabled()?c.W.shake():c.W.close()}};var g=i(42535),v=i(7380),m=i(92999),f=i(72470),y=i(56063),b=i(68664);const k=o.AH`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }

  :host([data-embedded='true']) {
    box-shadow:
      0 0 0 1px var(--wui-color-gray-glass-005),
      0px 4px 12px 4px var(--w3m-card-embedded-shadow-color);
  }
`;let x=class extends o.WF{render(){return o.qy`<slot></slot>`}};x.styles=[y.W5,k],x=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n}([(0,b.E)("wui-card")],x),i(43508);var C=i(44340);i(59481),i(82207),i(33165);const S=o.AH`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-dark-glass-100);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-325);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: var(--wui-border-radius-3xs);
    background-color: var(--local-icon-bg-value);
  }
`;var $=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let W=class extends o.WF{constructor(){super(...arguments),this.message="",this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="info"}render(){return this.style.cssText=`\n      --local-icon-bg-value: var(--wui-color-${this.backgroundColor});\n   `,o.qy`
      <wui-flex flexDirection="row" justifyContent="space-between" alignItems="center">
        <wui-flex columnGap="xs" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color=${this.iconColor} size="md" name=${this.icon}></wui-icon>
          </wui-flex>
          <wui-text variant="small-500" color="bg-350" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="bg-350"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){C.h.close()}};W.styles=[y.W5,S],$([(0,a.MZ)()],W.prototype,"message",void 0),$([(0,a.MZ)()],W.prototype,"backgroundColor",void 0),$([(0,a.MZ)()],W.prototype,"iconColor",void 0),$([(0,a.MZ)()],W.prototype,"icon",void 0),W=$([(0,b.E)("wui-alertbar")],W);const A=o.AH`
  :host {
    display: block;
    position: absolute;
    top: var(--wui-spacing-s);
    left: var(--wui-spacing-l);
    right: var(--wui-spacing-l);
    opacity: 0;
    pointer-events: none;
  }
`;var R=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const O={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"exclamationTriangle"}};let E=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.open=C.h.state.open,this.onOpen(!0),this.unsubscribe.push(C.h.subscribeKey("open",e=>{this.open=e,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t}=C.h.state,i=O[t];return o.qy`
      <wui-alertbar
        message=${e}
        backgroundColor=${i?.backgroundColor}
        iconColor=${i?.iconColor}
        icon=${i?.icon}
      ></wui-alertbar>
    `}onOpen(e){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):e||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};E.styles=A,R([(0,a.wk)()],E.prototype,"open",void 0),E=R([(0,f.EM)("w3m-alertbar")],E);var T=i(90101),q=i(14782),z=i(58622),I=i(34325);i(46664),i(31037),i(50409);const N=o.AH`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var P=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let M=class extends o.WF{constructor(){super(...arguments),this.imageSrc=""}render(){return o.qy`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`}imageTemplate(){return this.imageSrc?o.qy`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`:o.qy`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`}};M.styles=[y.W5,y.fD,y.ck,N],P([(0,a.MZ)()],M.prototype,"imageSrc",void 0),M=P([(0,b.E)("wui-select")],M),i(97127),i(79932);var j=i(44039);const _=o.AH`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards var(--wui-ease-out-power-2),
      slide-down-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards var(--wui-ease-out-power-2),
      slide-up-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;var Z=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const H=["SmartSessionList"];function B(){const e=h.I.state.data?.connector?.name,t=h.I.state.data?.wallet?.name,i=h.I.state.data?.network?.name,o=t??e,a=d.a.getConnectors();return{Connect:`Connect ${1===a.length&&"w3m-email"===a[0]?.id?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:o??"Connect Wallet",ConnectingWalletConnect:o??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview convert",Downloads:o?`Get ${o}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",Profile:void 0,SwitchNetwork:i??"Switch Network",SwitchAddress:"Switch Address",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select token",SwapPreview:"Preview swap",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",ConnectWallets:"Connect wallet",ConnectSocials:"All socials",ConnectingSocial:T.U.state.socialProvider?T.U.state.socialProvider:"Connect Social",ConnectingMultiChain:"Select chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Payment in progress"}}let D=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.heading=B()[h.I.state.view],this.network=l.W.state.activeCaipNetwork,this.networkImage=q.$.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=h.I.state.view,this.viewDirection="",this.headerText=B()[h.I.state.view],this.unsubscribe.push(z.j.subscribeNetworkImages(()=>{this.networkImage=q.$.getNetworkImage(this.network)}),h.I.subscribeKey("view",e=>{setTimeout(()=>{this.view=e,this.headerText=B()[e]},j.o.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),l.W.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=q.$.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.qy`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){I.E.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),h.I.push("WhatIsAWallet")}async onClose(){await u.safeClose()}rightHeaderTemplate(){const e=s.H?.state?.features?.smartSessions;return"Account"===h.I.state.view&&e?o.qy`<wui-flex>
      <wui-icon-link
        icon="clock"
        @click=${()=>h.I.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-link>
      ${this.closeButtonTemplate()}
    </wui-flex> `:this.closeButtonTemplate()}closeButtonTemplate(){return o.qy`
      <wui-icon-link
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `}titleTemplate(){const e=H.includes(this.view);return o.qy`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100" data-testid="w3m-header-text"
          >${this.headerText}</wui-text
        >
        ${e?o.qy`<wui-tag variant="main">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){const{view:e}=h.I.state,t="Connect"===e,i=s.H.state.enableEmbedded,a="ApproveTransaction"===e,n="ConnectingSiwe"===e,c="Account"===e,l=s.H.state.enableNetworkSwitch,d=a||n||t&&i;return c&&l?o.qy`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${(0,r.J)(this.network?.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${(0,r.J)(this.networkImage)}
      ></wui-select>`:this.showBack&&!d?o.qy`<wui-icon-link
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:o.qy`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}onNetworks(){this.isAllowedNetworkSwitch()&&(I.E.sendEvent({type:"track",event:"CLICK_NETWORKS"}),h.I.push("Networks"))}isAllowedNetworkSwitch(){const e=l.W.getAllRequestedCaipNetworks(),t=!!e&&e.length>1,i=e?.find(({id:e})=>e===this.network?.id);return t||!i}getPadding(){return this.heading?["l","2l","l","2l"]:["0","2l","0","2l"]}onViewChange(){const{history:e}=h.I.state;let t=j.o.VIEW_DIRECTION.Next;e.length<this.prevHistoryLength&&(t=j.o.VIEW_DIRECTION.Prev),this.prevHistoryLength=e.length,this.viewDirection=t}async onHistoryChange(){const{history:e}=h.I.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){h.I.goBack()}};D.styles=_,Z([(0,a.wk)()],D.prototype,"heading",void 0),Z([(0,a.wk)()],D.prototype,"network",void 0),Z([(0,a.wk)()],D.prototype,"networkImage",void 0),Z([(0,a.wk)()],D.prototype,"showBack",void 0),Z([(0,a.wk)()],D.prototype,"prevHistoryLength",void 0),Z([(0,a.wk)()],D.prototype,"view",void 0),Z([(0,a.wk)()],D.prototype,"viewDirection",void 0),Z([(0,a.wk)()],D.prototype,"headerText",void 0),D=Z([(0,f.EM)("w3m-header")],D),i(20766);const L=o.AH`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);

    max-width: 300px;
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`;var U=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let K=class extends o.WF{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message="",this.loading=!1,this.iconType="default"}render(){return o.qy`
      ${this.templateIcon()}
      <wui-text variant="paragraph-500" color="fg-100" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return this.loading?o.qy`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:"default"===this.iconType?o.qy`<wui-icon size="xl" color=${this.iconColor} name=${this.icon}></wui-icon>`:o.qy`<wui-icon-box
      size="sm"
      iconSize="xs"
      iconColor=${this.iconColor}
      backgroundColor=${this.backgroundColor}
      icon=${this.icon}
      background="opaque"
    ></wui-icon-box>`}};K.styles=[y.W5,L],U([(0,a.MZ)()],K.prototype,"backgroundColor",void 0),U([(0,a.MZ)()],K.prototype,"iconColor",void 0),U([(0,a.MZ)()],K.prototype,"icon",void 0),U([(0,a.MZ)()],K.prototype,"message",void 0),U([(0,a.MZ)()],K.prototype,"loading",void 0),U([(0,a.MZ)()],K.prototype,"iconType",void 0),K=U([(0,b.E)("wui-snackbar")],K);const F=o.AH`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var V=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const X={loading:void 0,success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let Y=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=v.P.state.open,this.unsubscribe.push(v.P.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t,svg:i}=v.P.state,a=X[t],{icon:r,iconColor:n}=i??a??{};return o.qy`
      <wui-snackbar
        message=${e}
        backgroundColor=${a?.backgroundColor}
        iconColor=${n}
        icon=${r}
        .loading=${"loading"===t}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),v.P.state.autoClose&&(this.timeout=setTimeout(()=>v.P.hide(),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};Y.styles=F,V([(0,a.wk)()],Y.prototype,"open",void 0),Y=V([(0,f.EM)("w3m-snackbar")],Y),i(77887),i(14080);const G=o.AH`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host(.appkit-modal) wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`;var J=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const Q="scroll-lock";class ee extends o.WF{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=s.H.state.enableEmbedded,this.open=c.W.state.open,this.caipAddress=l.W.state.activeCaipAddress,this.caipNetwork=l.W.state.activeCaipNetwork,this.shake=c.W.state.shake,this.filterByNamespace=d.a.state.filterByNamespace,this.initializeTheming(),w.N.prefetchAnalyticsConfig(),this.unsubscribe.push(c.W.subscribeKey("open",e=>e?this.onOpen():this.onClose()),c.W.subscribeKey("shake",e=>this.shake=e),l.W.subscribeKey("activeCaipNetwork",e=>this.onNewNetwork(e)),l.W.subscribeKey("activeCaipAddress",e=>this.onNewAddress(e)),s.H.subscribeKey("enableEmbedded",e=>this.enableEmbedded=e),d.a.subscribeKey("filterByNamespace",e=>{this.filterByNamespace===e||l.W.getAccountData(e)?.caipAddress||(w.N.fetchRecommendedWallets(),this.filterByNamespace=e)}))}firstUpdated(){if(this.caipAddress){if(this.enableEmbedded)return c.W.close(),void this.prefetch();this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.style.cssText=`\n      --local-border-bottom-mobile-radius: ${this.enableEmbedded?"clamp(0px, var(--wui-border-radius-l), 44px)":"0px"};\n    `,this.enableEmbedded?o.qy`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?o.qy`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return o.qy` <wui-card
      shake="${this.shake}"
      data-embedded="${(0,r.J)(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){await u.safeClose()}initializeTheming(){const{themeVariables:e,themeMode:t}=g.W.state,i=f.Zv.getColorTheme(t);(0,f.RF)(e,i)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),v.P.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=Q,e.textContent="\n      body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    ",document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${Q}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;const e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",t=>{if("Escape"===t.key)this.handleClose();else if("Tab"===t.key){const{tagName:i}=t.target;!i||i.includes("W3M-")||i.includes("WUI-")||e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAddress(e){const t=l.W.state.isSwitchingNamespace,i=m.w.getPlainAddress(e);i||t?t&&i&&h.I.goBack():c.W.close(),await p.U.initializeIfEnabled(),this.caipAddress=e,l.W.setIsSwitchingNamespace(!1)}onNewNetwork(e){const t=this.caipNetwork,i=t?.caipNetworkId?.toString(),o=t?.chainNamespace,a=e?.caipNetworkId?.toString(),r=e?.chainNamespace,s=i!==a,d=s&&!(o!==r),w=t?.name===n.o.UNSUPPORTED_NETWORK_NAME,p="ConnectingExternal"===h.I.state.view,u=!l.W.getAccountData(e?.chainNamespace)?.caipAddress,g="UnsupportedChain"===h.I.state.view;let v=!1;c.W.state.open&&!p&&(u?s&&(v=!0):(g||d&&!w)&&(v=!0)),v&&"SIWXSignMessage"!==h.I.state.view&&h.I.goBack(),this.caipNetwork=e}prefetch(){this.hasPrefetched||(w.N.prefetch(),w.N.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}}ee.styles=G,J([(0,a.MZ)({type:Boolean})],ee.prototype,"enableEmbedded",void 0),J([(0,a.wk)()],ee.prototype,"open",void 0),J([(0,a.wk)()],ee.prototype,"caipAddress",void 0),J([(0,a.wk)()],ee.prototype,"caipNetwork",void 0),J([(0,a.wk)()],ee.prototype,"shake",void 0),J([(0,a.wk)()],ee.prototype,"filterByNamespace",void 0);let te=class extends ee{};te=J([(0,f.EM)("w3m-modal")],te);let ie=class extends ee{};ie=J([(0,f.EM)("appkit-modal")],ie)},50409:(e,t,i)=>{var o=i(48422),a=i(91427),r=(i(59481),i(56063)),n=i(68664);const s=o.AH`
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
`;var c=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let l=class extends o.WF{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,t="lg"===this.size,i="xl"===this.size,a=t?"12%":"16%",r=t?"xxs":i?"s":"3xl",n="gray"===this.background,s="opaque"===this.background,c="accent-100"===this.backgroundColor&&s||"success-100"===this.backgroundColor&&s||"error-100"===this.backgroundColor&&s||"inverse-100"===this.backgroundColor&&s;let l=`var(--wui-color-${this.backgroundColor})`;return c?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:n&&(l=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${l};\n       --local-bg-mix: ${c||n?"100%":a};\n       --local-border-radius: var(--wui-border-radius-${r});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,o.qy` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};l.styles=[r.W5,r.fD,s],c([(0,a.MZ)()],l.prototype,"size",void 0),c([(0,a.MZ)()],l.prototype,"backgroundColor",void 0),c([(0,a.MZ)()],l.prototype,"iconColor",void 0),c([(0,a.MZ)()],l.prototype,"iconSize",void 0),c([(0,a.MZ)()],l.prototype,"background",void 0),c([(0,a.MZ)({type:Boolean})],l.prototype,"border",void 0),c([(0,a.MZ)()],l.prototype,"borderColor",void 0),c([(0,a.MZ)()],l.prototype,"icon",void 0),l=c([(0,n.E)("wui-icon-box")],l)},59481:(e,t,i)=>{var o=i(48422),a=i(91427),r=i(32971);const n=new class{constructor(){this.cache=new Map}set(e,t){this.cache.set(e,t)}get(e){return this.cache.get(e)}has(e){return this.cache.has(e)}delete(e){this.cache.delete(e)}clear(){this.cache.clear()}};var s=i(56063),c=i(68664);const l=o.AH`
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
`;var d=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const w={add:async()=>(await i.e(8186).then(i.bind(i,88186))).addSvg,allWallets:async()=>(await i.e(9569).then(i.bind(i,39569))).allWalletsSvg,arrowBottomCircle:async()=>(await i.e(5995).then(i.bind(i,25995))).arrowBottomCircleSvg,appStore:async()=>(await i.e(3774).then(i.bind(i,3774))).appStoreSvg,apple:async()=>(await i.e(5929).then(i.bind(i,15929))).appleSvg,arrowBottom:async()=>(await i.e(1198).then(i.bind(i,11198))).arrowBottomSvg,arrowLeft:async()=>(await i.e(9760).then(i.bind(i,29760))).arrowLeftSvg,arrowRight:async()=>(await i.e(4659).then(i.bind(i,94659))).arrowRightSvg,arrowTop:async()=>(await i.e(3690).then(i.bind(i,43690))).arrowTopSvg,bank:async()=>(await i.e(627).then(i.bind(i,80627))).bankSvg,browser:async()=>(await i.e(6913).then(i.bind(i,16913))).browserSvg,card:async()=>(await i.e(1327).then(i.bind(i,1327))).cardSvg,checkmark:async()=>(await i.e(1480).then(i.bind(i,31480))).checkmarkSvg,checkmarkBold:async()=>(await i.e(486).then(i.bind(i,70486))).checkmarkBoldSvg,chevronBottom:async()=>(await i.e(3928).then(i.bind(i,33928))).chevronBottomSvg,chevronLeft:async()=>(await i.e(3682).then(i.bind(i,23682))).chevronLeftSvg,chevronRight:async()=>(await i.e(7701).then(i.bind(i,17701))).chevronRightSvg,chevronTop:async()=>(await i.e(2592).then(i.bind(i,62592))).chevronTopSvg,chromeStore:async()=>(await i.e(1903).then(i.bind(i,1903))).chromeStoreSvg,clock:async()=>(await i.e(6027).then(i.bind(i,76027))).clockSvg,close:async()=>(await i.e(7545).then(i.bind(i,17545))).closeSvg,compass:async()=>(await i.e(2097).then(i.bind(i,2097))).compassSvg,coinPlaceholder:async()=>(await i.e(9919).then(i.bind(i,79919))).coinPlaceholderSvg,copy:async()=>(await i.e(340).then(i.bind(i,90340))).copySvg,cursor:async()=>(await i.e(9119).then(i.bind(i,29119))).cursorSvg,cursorTransparent:async()=>(await i.e(1944).then(i.bind(i,1944))).cursorTransparentSvg,desktop:async()=>(await i.e(3277).then(i.bind(i,73277))).desktopSvg,disconnect:async()=>(await i.e(2923).then(i.bind(i,2923))).disconnectSvg,discord:async()=>(await i.e(6977).then(i.bind(i,6977))).discordSvg,etherscan:async()=>(await i.e(3092).then(i.bind(i,73092))).etherscanSvg,extension:async()=>(await i.e(5712).then(i.bind(i,55712))).extensionSvg,externalLink:async()=>(await i.e(7563).then(i.bind(i,57563))).externalLinkSvg,facebook:async()=>(await i.e(8865).then(i.bind(i,98865))).facebookSvg,farcaster:async()=>(await i.e(4132).then(i.bind(i,74132))).farcasterSvg,filters:async()=>(await i.e(9222).then(i.bind(i,69222))).filtersSvg,github:async()=>(await i.e(9178).then(i.bind(i,89178))).githubSvg,google:async()=>(await i.e(3106).then(i.bind(i,13106))).googleSvg,helpCircle:async()=>(await i.e(4691).then(i.bind(i,34691))).helpCircleSvg,image:async()=>(await i.e(9652).then(i.bind(i,99652))).imageSvg,id:async()=>(await i.e(1636).then(i.bind(i,11636))).idSvg,infoCircle:async()=>(await i.e(298).then(i.bind(i,60298))).infoCircleSvg,lightbulb:async()=>(await i.e(54).then(i.bind(i,20054))).lightbulbSvg,mail:async()=>(await i.e(9930).then(i.bind(i,39930))).mailSvg,mobile:async()=>(await i.e(2475).then(i.bind(i,12475))).mobileSvg,more:async()=>(await i.e(6856).then(i.bind(i,36856))).moreSvg,networkPlaceholder:async()=>(await i.e(3387).then(i.bind(i,73387))).networkPlaceholderSvg,nftPlaceholder:async()=>(await i.e(3472).then(i.bind(i,53472))).nftPlaceholderSvg,off:async()=>(await i.e(4668).then(i.bind(i,54668))).offSvg,playStore:async()=>(await i.e(7755).then(i.bind(i,7755))).playStoreSvg,plus:async()=>(await i.e(2945).then(i.bind(i,22945))).plusSvg,qrCode:async()=>(await i.e(4034).then(i.bind(i,44034))).qrCodeIcon,recycleHorizontal:async()=>(await i.e(5045).then(i.bind(i,85045))).recycleHorizontalSvg,refresh:async()=>(await i.e(4290).then(i.bind(i,44290))).refreshSvg,search:async()=>(await i.e(3333).then(i.bind(i,73333))).searchSvg,send:async()=>(await i.e(8535).then(i.bind(i,18535))).sendSvg,swapHorizontal:async()=>(await i.e(9586).then(i.bind(i,49586))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await i.e(7773).then(i.bind(i,17773))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await i.e(9325).then(i.bind(i,9325))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await i.e(7562).then(i.bind(i,47562))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await i.e(2168).then(i.bind(i,82168))).swapVerticalSvg,telegram:async()=>(await i.e(8166).then(i.bind(i,88166))).telegramSvg,threeDots:async()=>(await i.e(1874).then(i.bind(i,51874))).threeDotsSvg,twitch:async()=>(await i.e(7218).then(i.bind(i,17218))).twitchSvg,twitter:async()=>(await i.e(3489).then(i.bind(i,93489))).xSvg,twitterIcon:async()=>(await i.e(9023).then(i.bind(i,69023))).twitterIconSvg,verify:async()=>(await i.e(2120).then(i.bind(i,52120))).verifySvg,verifyFilled:async()=>(await i.e(5337).then(i.bind(i,45337))).verifyFilledSvg,wallet:async()=>(await i.e(440).then(i.bind(i,60440))).walletSvg,walletConnect:async()=>(await i.e(3300).then(i.bind(i,33300))).walletConnectSvg,walletConnectLightBrown:async()=>(await i.e(3300).then(i.bind(i,33300))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await i.e(3300).then(i.bind(i,33300))).walletConnectBrownSvg,walletPlaceholder:async()=>(await i.e(5556).then(i.bind(i,25556))).walletPlaceholderSvg,warningCircle:async()=>(await i.e(7910).then(i.bind(i,87910))).warningCircleSvg,x:async()=>(await i.e(3489).then(i.bind(i,93489))).xSvg,info:async()=>(await i.e(917).then(i.bind(i,10917))).infoSvg,exclamationTriangle:async()=>(await i.e(2557).then(i.bind(i,32557))).exclamationTriangleSvg,reown:async()=>(await i.e(1864).then(i.bind(i,41864))).reownSvg};let h=class extends o.WF{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n      --local-aspect-ratio: ${this.aspectRatio}\n    `,o.qy`${(0,r.T)(async function(e){if(n.has(e))return n.get(e);const t=(w[e]??w.copy)();return n.set(e,t),t}(this.name),o.qy`<div class="fallback"></div>`)}`}};h.styles=[s.W5,s.ck,l],d([(0,a.MZ)()],h.prototype,"size",void 0),d([(0,a.MZ)()],h.prototype,"name",void 0),d([(0,a.MZ)()],h.prototype,"color",void 0),d([(0,a.MZ)()],h.prototype,"aspectRatio",void 0),h=d([(0,c.E)("wui-icon")],h)},64720:(e,t,i)=>{i.d(t,{Kq:()=>w});var o=i(27165),a=i(39341);const r=(e,t)=>{const i=e._$AN;if(void 0===i)return!1;for(const e of i)e._$AO?.(t,!1),r(e,t);return!0},n=e=>{let t,i;do{if(void 0===(t=e._$AM))break;i=t._$AN,i.delete(e),e=t}while(0===i?.size)},s=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),d(t)}};function c(e){void 0!==this._$AN?(n(this),this._$AM=e,s(this)):this._$AM=e}function l(e,t=!1,i=0){const o=this._$AH,a=this._$AN;if(void 0!==a&&0!==a.size)if(t)if(Array.isArray(o))for(let e=i;e<o.length;e++)r(o[e],!1),n(o[e]);else null!=o&&(r(o,!1),n(o));else r(this,e)}const d=e=>{e.type==a.OA.CHILD&&(e._$AP??=l,e._$AQ??=c)};class w extends a.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),s(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(r(this,e),n(this))}setValue(e){if((0,o.Rt)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}},69623:(e,t,i)=>{i.d(t,{M:()=>n});var o=i(56451);const a={attribute:!0,type:String,converter:o.W3,reflect:!1,hasChanged:o.Ec},r=(e=a,t,i)=>{const{kind:o,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),n.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const a=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,a,e)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){const{name:o}=i;return function(i){const a=this[o];t.call(this,i),this.requestUpdate(o,a,e)}}throw Error("Unsupported decorator location: "+o)};function n(e){return(t,i)=>"object"==typeof i?r(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}},77887:(e,t,i)=>{var o=i(48422),a=i(91427),r=i(43393),n=i(72470);i(43508),i(37498),i(79932);const s=o.AH`
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
`;var c=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let l=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.open=r.I.state.open,this.message=r.I.state.message,this.triggerRect=r.I.state.triggerRect,this.variant=r.I.state.variant,this.unsubscribe.push(r.I.subscribe(e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){this.dataset.variant=this.variant;const e=this.triggerRect.top,t=this.triggerRect.left;return this.style.cssText=`\n    --w3m-tooltip-top: ${e}px;\n    --w3m-tooltip-left: ${t}px;\n    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;\n    --w3m-tooltip-display: ${this.open?"flex":"none"};\n    --w3m-tooltip-opacity: ${this.open?1:0};\n    `,o.qy`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};l.styles=[s],c([(0,a.wk)()],l.prototype,"open",void 0),c([(0,a.wk)()],l.prototype,"message",void 0),c([(0,a.wk)()],l.prototype,"triggerRect",void 0),c([(0,a.wk)()],l.prototype,"variant",void 0),l=c([(0,n.EM)("w3m-tooltip"),(0,n.EM)("w3m-tooltip")],l)},79932:(e,t,i)=>{i(82207)},82207:(e,t,i)=>{var o=i(48422),a=i(91427),r=i(23507),n=i(56063),s=i(68664);const c=o.AH`
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
`;var l=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let d=class extends o.WF{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,o.qy`<slot class=${(0,r.H)(e)}></slot>`}};d.styles=[n.W5,c],l([(0,a.MZ)()],d.prototype,"variant",void 0),l([(0,a.MZ)()],d.prototype,"color",void 0),l([(0,a.MZ)()],d.prototype,"align",void 0),l([(0,a.MZ)()],d.prototype,"lineClamp",void 0),d=l([(0,s.E)("wui-text")],d)},91427:(e,t,i)=>{i.d(t,{MZ:()=>o.M,wk:()=>a.w});var o=i(69623),a=i(4537)},92490:(e,t,i)=>{var o=i(48422),a=i(91427),r=(i(82207),i(56063)),n=i(68664);const s=o.AH`
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
`;var c=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let l=class extends o.WF{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const e="md"===this.size?"mini-700":"micro-700";return o.qy`
      <wui-text data-variant=${this.variant} variant=${e} color="inherit">
        <slot></slot>
      </wui-text>
    `}};l.styles=[r.W5,s],c([(0,a.MZ)()],l.prototype,"variant",void 0),c([(0,a.MZ)()],l.prototype,"size",void 0),l=c([(0,n.E)("wui-tag")],l)},97127:(e,t,i)=>{i(92490)}}]);
//# sourceMappingURL=9677.widget.iife.js.map