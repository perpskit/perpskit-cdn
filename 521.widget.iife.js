/*! For license information please see 521.widget.iife.js.LICENSE.txt */
"undefined"!=typeof globalThis&&(void 0===globalThis.process&&(globalThis.process={env:{NODE_ENV:"production"},browser:!0,version:"",versions:{}}),void 0===globalThis.require&&(globalThis.require=function(t){if("process/browser"===t||"process"===t)return globalThis.process;throw new Error("Module not found: "+t)})),"undefined"!=typeof window&&(void 0===window.process&&(window.process={env:{NODE_ENV:"production"},browser:!0,version:"",versions:{}}),void 0===window.require&&(window.require=function(t){if("process/browser"===t||"process"===t)return window.process;throw new Error("Module not found: "+t)})),"undefined"!=typeof global&&(void 0===global.process&&(global.process={env:{NODE_ENV:"production"},browser:!0,version:"",versions:{}}),void 0===global.require&&(global.require=function(t){if("process/browser"===t||"process"===t)return global.process;throw new Error("Module not found: "+t)})),"undefined"!=typeof self&&(void 0===self.process&&(self.process={env:{NODE_ENV:"production"},browser:!0,version:"",versions:{}}),void 0===self.require&&(self.require=function(t){if("process/browser"===t||"process"===t)return self.process;throw new Error("Module not found: "+t)})),(this.webpackChunkHLWidget=this.webpackChunkHLWidget||[]).push([[521],{379:(t,e,i)=>{"use strict";i.d(e,{_:()=>n,K:()=>c});var o=i(80971),r=i(64720),a=i(39341);const n=()=>new s;class s{}const l=new WeakMap,c=(0,a.u$)(class extends r.Kq{render(t){return o.s6}update(t,[e]){const i=e!==this.G;return i&&void 0!==this.G&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),o.s6}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.G){const e=this.ht??globalThis;let i=l.get(e);void 0===i&&(i=new WeakMap,l.set(e,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,t),void 0!==t&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return"function"==typeof this.G?l.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})},2501:(t,e)=>{e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2},e.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},e.from=function(t,i){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+t)}}(t)}catch(t){return i}}},3824:(t,e,i)=>{const o=i(9074);function r(t,e){const i=t.a/255,o=e+'="'+t.hex+'"';return i<1?o+" "+e+'-opacity="'+i.toFixed(2).slice(1)+'"':o}function a(t,e,i){let o=t+e;return void 0!==i&&(o+=" "+i),o}e.render=function(t,e,i){const n=o.getOptions(e),s=t.modules.size,l=t.modules.data,c=s+2*n.margin,d=n.color.light.a?"<path "+r(n.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",u="<path "+r(n.color.dark,"stroke")+' d="'+function(t,e,i){let o="",r=0,n=!1,s=0;for(let l=0;l<t.length;l++){const c=Math.floor(l%e),d=Math.floor(l/e);c||n||(n=!0),t[l]?(s++,l>0&&c>0&&t[l-1]||(o+=n?a("M",c+i,.5+d+i):a("m",r,0),r=0,n=!1),c+1<e&&t[l+1]||(o+=a("h",s),s=0)):r++}return o}(l,s,n.margin)+'"/>',p='viewBox="0 0 '+c+" "+c+'"',h='<svg xmlns="http://www.w3.org/2000/svg" '+(n.width?'width="'+n.width+'" height="'+n.width+'" ':"")+p+' shape-rendering="crispEdges">'+d+u+"</svg>\n";return"function"==typeof i&&i(null,h),h}},4537:(t,e,i)=>{"use strict";i.d(e,{w:()=>r});var o=i(69623);function r(t){return(0,o.M)({...t,state:!0,attribute:!1})}},4898:(t,e,i)=>{"use strict";i.d(e,{a:()=>o});const o=i(48422).JW`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`},8854:(t,e,i)=>{"use strict";i.d(e,{Up:()=>p});var o=i(76539),r=i(90101),a=i(52819),n=i(30413),s=i(34325),l=i(33461),c=i(7380),d=i(92999),u=i(8735);async function p(t){r.U.setSocialProvider(t,a.W.state.activeChain),s.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:t}}),"farcaster"===t?await async function(){l.I.push("ConnectingFarcaster");const t=n.a.getAuthConnector();if(t&&!r.U.state.farcasterUrl)try{const{url:e}=await t.provider.getFarcasterUri();r.U.setFarcasterUrl(e,a.W.state.activeChain)}catch(t){l.I.goBack(),c.P.showError(t)}}():await async function(t){l.I.push("ConnectingSocial");const e=n.a.getAuthConnector();let i=null;try{const n=setTimeout(()=>{throw new Error("Social login timed out. Please try again.")},45e3);if(e&&t){if(d.w.isTelegram()||(i=function(){try{return d.w.returnOpenHref(`${o.o.SECURE_SITE_SDK_ORIGIN}/loading`,"popupWindow","width=600,height=800,scrollbars=yes")}catch(t){throw new Error("Could not open social popup")}}()),i)r.U.setSocialWindow(i,a.W.state.activeChain);else if(!d.w.isTelegram())throw new Error("Could not create social popup");const{uri:s}=await e.provider.getSocialRedirectUri({provider:t});if(!s)throw i?.close(),new Error("Could not fetch the social redirect uri");if(i&&(i.location.href=s),d.w.isTelegram()){u.i.setTelegramSocialProvider(t);const e=d.w.formatTelegramSocialLoginUrl(s);d.w.openHref(e,"_top")}clearTimeout(n)}}catch(t){i?.close(),c.P.showError(t?.message)}}(t)}},9074:(t,e)=>{function i(t){if("number"==typeof t&&(t=t.toString()),"string"!=typeof t)throw new Error("Color should be defined as hex string");let e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map(function(t){return[t,t]}))),6===e.length&&e.push("F","F");const i=parseInt(e.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:255&i,hex:"#"+e.slice(0,6).join("")}}e.getOptions=function(t){t||(t={}),t.color||(t.color={});const e=void 0===t.margin||null===t.margin||t.margin<0?4:t.margin,o=t.width&&t.width>=21?t.width:void 0,r=t.scale||4;return{width:o,scale:o?4:r,margin:e,color:{dark:i(t.color.dark||"#000000ff"),light:i(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},e.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},e.getImageWidth=function(t,i){const o=e.getScale(t,i);return Math.floor((t+2*i.margin)*o)},e.qrToImageData=function(t,i,o){const r=i.modules.size,a=i.modules.data,n=e.getScale(r,o),s=Math.floor((r+2*o.margin)*n),l=o.margin*n,c=[o.color.light,o.color.dark];for(let e=0;e<s;e++)for(let i=0;i<s;i++){let d=4*(e*s+i),u=o.color.light;e>=l&&i>=l&&e<s-l&&i<s-l&&(u=c[a[Math.floor((e-l)/n)*r+Math.floor((i-l)/n)]?1:0]),t[d++]=u.r,t[d++]=u.g,t[d++]=u.b,t[d]=u.a}}},10593:(t,e,i)=>{const o=i(32500),r=i(82890);function a(t){this.mode=o.KANJI,this.data=t}a.getBitsLength=function(t){return 13*t},a.prototype.getLength=function(){return this.data.length},a.prototype.getBitsLength=function(){return a.getBitsLength(this.data.length)},a.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let i=r.toSJIS(this.data[e]);if(i>=33088&&i<=40956)i-=33088;else{if(!(i>=57408&&i<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");i-=49472}i=192*(i>>>8&255)+(255&i),t.put(i,13)}},t.exports=a},10607:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),a=i(39168),n=(i(82207),i(56063)),s=i(68664);i(30990);const l=o.AH`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var c=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let d=class extends o.WF{constructor(){super(...arguments),this.disabled=!1}render(){return o.qy`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="mdl"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${(0,a.J)(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?o.qy`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};d.styles=[n.W5,l],c([(0,r.MZ)()],d.prototype,"errorMessage",void 0),c([(0,r.MZ)({type:Boolean})],d.prototype,"disabled",void 0),c([(0,r.MZ)()],d.prototype,"value",void 0),c([(0,r.MZ)()],d.prototype,"tabIdx",void 0),d=c([(0,s.E)("wui-email-input")],d)},13992:(t,e)=>{const i="[0-9]+";let o="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";o=o.replace(/u/g,"\\u");const r="(?:(?![A-Z0-9 $%*+\\-./:]|"+o+")(?:.|[\r\n]))+";e.KANJI=new RegExp(o,"g"),e.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),e.BYTE=new RegExp(r,"g"),e.NUMERIC=new RegExp(i,"g"),e.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");const a=new RegExp("^"+o+"$"),n=new RegExp("^"+i+"$"),s=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");e.testKanji=function(t){return a.test(t)},e.testNumeric=function(t){return n.test(t)},e.testAlphanumeric=function(t){return s.test(t)}},14080:(t,e,i)=>{"use strict";i.d(e,{J:()=>u});var o=i(48422),r=i(91427),a=i(33461),n=i(43393),s=i(72470),l=i(44039);const c=o.AH`
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
`;var d=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let u=class extends o.WF{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=a.I.state.view,this.viewDirection="",this.unsubscribe.push(a.I.subscribeKey("view",t=>this.onViewChange(t)))}firstUpdated(){this.resizeObserver=new ResizeObserver(([t])=>{const e=`${t?.contentRect.height}px`;"0px"!==this.prevHeight&&(this.style.setProperty("--prev-height",this.prevHeight),this.style.setProperty("--new-height",e),this.style.animation="w3m-view-height 150ms forwards ease",this.style.height="auto"),setTimeout(()=>{this.prevHeight=e,this.style.animation="unset"},l.o.ANIMATION_DURATIONS.ModalHeight)}),this.resizeObserver?.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach(t=>t())}render(){return o.qy`<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`}viewTemplate(){switch(this.view){case"AccountSettings":return o.qy`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return o.qy`<w3m-account-view></w3m-account-view>`;case"AllWallets":return o.qy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return o.qy`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return o.qy`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return o.qy`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":default:return o.qy`<w3m-connect-view></w3m-connect-view>`;case"Create":return o.qy`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return o.qy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return o.qy`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return o.qy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return o.qy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return o.qy`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return o.qy`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return o.qy`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"Downloads":return o.qy`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return o.qy`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return o.qy`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return o.qy`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return o.qy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return o.qy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return o.qy`<w3m-network-switch-view></w3m-network-switch-view>`;case"Profile":return o.qy`<w3m-profile-view></w3m-profile-view>`;case"SwitchAddress":return o.qy`<w3m-switch-address-view></w3m-switch-address-view>`;case"Transactions":return o.qy`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return o.qy`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return o.qy`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return o.qy`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return o.qy`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return o.qy`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return o.qy`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return o.qy`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return o.qy`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return o.qy`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return o.qy`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return o.qy`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return o.qy`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return o.qy`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return o.qy`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return o.qy`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WhatIsABuy":return o.qy`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return o.qy`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return o.qy`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return o.qy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return o.qy`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return o.qy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return o.qy`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return o.qy`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return o.qy`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return o.qy`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return o.qy`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return o.qy`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return o.qy`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return o.qy`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return o.qy`<w3m-pay-loading-view></w3m-pay-loading-view>`}}onViewChange(t){n.I.hide();let e=l.o.VIEW_DIRECTION.Next;const{history:i}=a.I.state;i.length<this.prevHistoryLength&&(e=l.o.VIEW_DIRECTION.Prev),this.prevHistoryLength=i.length,this.viewDirection=e,setTimeout(()=>{this.view=t},l.o.ANIMATION_DURATIONS.ViewTransition)}getWrapper(){return this.shadowRoot?.querySelector("div")}};u.styles=c,d([(0,r.wk)()],u.prototype,"view",void 0),d([(0,r.wk)()],u.prototype,"viewDirection",void 0),u=d([(0,s.EM)("w3m-router")],u)},14494:(t,e,i)=>{"use strict";i(63937)},20766:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),a=i(56063),n=i(68664);const s=o.AH`
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
`;var l=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let c=class extends o.WF{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText="--local-color: "+("inherit"===this.color?"inherit":`var(--wui-color-${this.color})`),this.dataset.size=this.size,o.qy`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};c.styles=[a.W5,s],l([(0,r.MZ)()],c.prototype,"color",void 0),l([(0,r.MZ)()],c.prototype,"size",void 0),c=l([(0,n.E)("wui-loading-spinner")],c)},21253:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),a=(i(59481),i(31037),i(82207),i(56063)),n=i(68664);const s=o.AH`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

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

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`;var l=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let c=class extends o.WF{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){const t="sm"===this.size?"small-600":"paragraph-600";return o.qy`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?o.qy`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${t} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};c.styles=[a.W5,a.fD,s],l([(0,r.MZ)()],c.prototype,"variant",void 0),l([(0,r.MZ)()],c.prototype,"imageSrc",void 0),l([(0,r.MZ)({type:Boolean})],c.prototype,"disabled",void 0),l([(0,r.MZ)()],c.prototype,"icon",void 0),l([(0,r.MZ)()],c.prototype,"size",void 0),l([(0,r.MZ)()],c.prototype,"text",void 0),c=l([(0,n.E)("wui-chip-button")],c)},22208:(t,e,i)=>{"use strict";i(82963)},22982:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427);const a=o.JW`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" fill="#F7931A"/>
  <g clip-path="url(#clip0_1045_17)">
    <path d="M63.0394 39.7409C58.7654 56.8839 41.4024 67.3169 24.2574 63.0419C7.11937 58.7679 -3.31363 41.4039 0.962367 24.2619C5.23437 7.11686 22.5974 -3.31714 39.7374 0.956863C56.8814 5.23086 67.3134 22.5969 63.0394 39.7409Z" fill="#F7931A"/>
    <path d="M46.1092 27.4409C46.7462 23.1829 43.5042 20.8939 39.0712 19.3669L40.5092 13.5989L36.9982 12.7239L35.5982 18.3399C34.6752 18.1099 33.7272 17.8929 32.7852 17.6779L34.1952 12.0249L30.6862 11.1499L29.2472 16.9159C28.4832 16.7419 27.7332 16.5699 27.0052 16.3889L27.0092 16.3709L22.1672 15.1619L21.2332 18.9119C21.2332 18.9119 23.8382 19.5089 23.7832 19.5459C25.2052 19.9009 25.4622 20.8419 25.4192 21.5879L23.7812 28.1589C23.8792 28.1839 24.0062 28.2199 24.1462 28.2759C24.0292 28.2469 23.9042 28.2149 23.7752 28.1839L21.4792 37.3889C21.3052 37.8209 20.8642 38.4689 19.8702 38.2229C19.9052 38.2739 17.3182 37.5859 17.3182 37.5859L15.5752 41.6049L20.1442 42.7439C20.9942 42.9569 21.8272 43.1799 22.6472 43.3899L21.1942 49.2239L24.7012 50.0989L26.1402 44.3269C27.0982 44.5869 28.0282 44.8269 28.9382 45.0529L27.5042 50.7979L31.0152 51.6729L32.4682 45.8499C38.4552 46.9829 42.9572 46.5259 44.8522 41.1109C46.3792 36.7509 44.7762 34.2359 41.6262 32.5959C43.9202 32.0669 45.6482 30.5579 46.1092 27.4409ZM38.0872 38.6899C37.0022 43.0499 29.6612 40.6929 27.2812 40.1019L29.2092 32.3729C31.5892 32.9669 39.2212 34.1429 38.0872 38.6899ZM39.1732 27.3779C38.1832 31.3439 32.0732 29.3289 30.0912 28.8349L31.8392 21.8249C33.8212 22.3189 40.2042 23.2409 39.1732 27.3779Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_1045_17">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,n=o.JW`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,s=o.JW`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <g clip-path="url(#clip0_187_29)">
    <path d="M1.18187e-05 15.8055C1.18187e-05 9.8015 -5.19442e-07 6.91338 1.69991e-08 0C4.5 3.72236e-05 9.62249 0 16.5 0L23.5 4.31399e-05C29.9349 4.31399e-05 35.5 0.000206332 40 3.73468e-05C40 2.77754 40 9.36708 40 15.8055V22.8364C40 29.2647 40 33.7962 40 40C31.5 40 29.8337 40 23.4 40H16.6C10.5092 40 6.50004 40 4.04289e-05 40C3.05176e-05 32.2453 1.18187e-05 29.6382 1.18187e-05 22.8364V15.8055Z" fill="#0052FF"/>
    <path d="M20.0236 26.5C16.4342 26.5 13.5236 23.5931 13.5236 20C13.5236 16.4069 16.4342 13.5 20.0236 13.5C23.2411 13.5 25.9134 15.8472 26.4261 18.9167H32.9731C32.4206 12.2433 26.8342 7 20.02 7C12.8411 7 7.02002 12.8211 7.02002 20C7.02002 27.1789 12.8411 33 20.02 33C26.8342 33 32.4206 27.7567 32.9731 21.0833H26.4225C25.9061 24.1528 23.2411 26.5 20.0236 26.5Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_187_29">
      <rect width="40" height="40" fill="white"/>
    </clipPath>
  </defs>
</svg>`,l=o.JW`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,c=o.JW`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,d=o.JW`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,u=o.JW`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,p=o.JW`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="30" fill="#1DC956"/>
  <rect x="0.5" y="0.5" width="63" height="63" rx="29.5" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M32.4053 19.8031C35.3901 19.8031 38.0431 20.8349 40.1619 22.8247L45.9656 17.0211C42.4465 13.7416 37.8773 11.7333 32.4053 11.7333C24.4829 11.7333 17.6475 16.2841 14.3127 22.9168L21.056 28.1493C22.6589 23.359 27.136 19.8031 32.4053 19.8031Z" fill="#1DC956" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M32.4053 52.2667C37.8773 52.2667 42.465 50.4611 45.8182 47.3658L39.2407 42.2623C37.4351 43.4783 35.1321 44.2153 32.4053 44.2153C27.136 44.2153 22.6589 40.6594 21.056 35.8691L14.3127 41.1016C17.6475 47.7159 24.4829 52.2667 32.4053 52.2667Z" fill="#2BEE6C"/>
  <path d="M21.056 35.8507L19.5636 36.993L14.3127 41.0832M39.2407 42.2623L45.8182 47.3658C42.465 50.4611 37.8773 52.2667 32.4053 52.2667C24.4829 52.2667 17.6475 47.7159 14.3127 41.1016L21.056 35.8691C22.6589 40.6594 27.136 44.2153 32.4053 44.2153C35.1321 44.2153 37.4351 43.4783 39.2407 42.2623Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M51.8613 32.4606C51.8613 31.0235 51.7323 29.6417 51.4928 28.3151H32.4053V36.1638H43.3124C42.8334 38.688 41.3963 40.8252 39.2407 42.2623L45.8181 47.3658C49.6503 43.8283 51.8613 38.6327 51.8613 32.4606Z" fill="#1FAD7E" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" fill="#86F999"/>
  <path d="M21.056 35.8691L14.3127 41.1016M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>
`,h=o.JW`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,w=o.JW`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31636)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58318 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58318 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9269C60.4784 58.4159 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4159 2.1019 55.9269C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#794CFF"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M40 39.4595C44.7824 36.693 48 31.5222 48 25.6C48 16.7634 40.8366 9.59998 32 9.59998C23.1634 9.59998 16 16.7634 16 25.6C16 31.5222 19.2176 36.693 24 39.4595V45.8144H40V39.4595Z" fill="#906EF7"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#906EF7"/>
    <path d="M24 45.8144V39.4595C19.2176 36.693 16 31.5222 16 25.6C16 16.7634 23.1634 9.59998 32 9.59998C40.8366 9.59998 48 16.7634 48 25.6C48 31.5222 44.7824 36.693 40 39.4595V45.8144M24 45.8144H40M24 45.8144V49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#643CDD" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M29.6735 26.9101V29.1109H34.0753V26.9101C34.0753 25.6945 35.0607 24.7092 36.2762 24.7092C37.4917 24.7092 38.4771 25.6945 38.4771 26.9101C38.4771 28.1256 37.4917 29.1109 36.2762 29.1109H34.0753H29.6735H27.4726C26.2571 29.1109 25.2717 28.1256 25.2717 26.9101C25.2717 25.6945 26.2571 24.7092 27.4726 24.7092C28.6881 24.7092 29.6735 25.6945 29.6735 26.9101Z" fill="#906EF7"/>
    <path d="M29.6735 45.3183V26.9101C29.6735 25.6945 28.6881 24.7092 27.4726 24.7092V24.7092C26.2571 24.7092 25.2717 25.6945 25.2717 26.9101V26.9101C25.2717 28.1256 26.2571 29.1109 27.4726 29.1109H36.2762C37.4917 29.1109 38.4771 28.1256 38.4771 26.9101V26.9101C38.4771 25.6945 37.4917 24.7092 36.2762 24.7092V24.7092C35.0607 24.7092 34.0753 25.6945 34.0753 26.9101V45.3183" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31636">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,g=o.JW`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,f=o.JW`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,v=o.JW`<svg width="40" height="42" viewBox="0 0 40 42" fill="none">
<path opacity="0.7" d="M19.9526 41.9076L7.3877 34.655V26.1226L19.9526 33.3751V41.9076Z" fill="url(#paint0_linear_2113_32117)"/>
<path opacity="0.7" d="M19.9521 41.9076L32.5171 34.655V26.1226L19.9521 33.3751V41.9076Z" fill="url(#paint1_linear_2113_32117)"/>
<path opacity="0.7" d="M39.9095 7.34521V21.8562L32.5166 26.1225V11.6114L39.9095 7.34521Z" fill="url(#paint2_linear_2113_32117)"/>
<path d="M39.9099 7.34536L27.345 0.0927734L19.9521 4.359L32.5171 11.6116L39.9099 7.34536Z" fill="url(#paint3_linear_2113_32117)"/>
<path d="M0 7.34536L12.5649 0.0927734L19.9519 4.359L7.387 11.6116L0 7.34536Z" fill="#F969D3"/>
<path opacity="0.7" d="M0 7.34521V21.8562L7.387 26.1225V11.6114L0 7.34521Z" fill="url(#paint4_linear_2113_32117)"/>
<defs>
<linearGradient id="paint0_linear_2113_32117" x1="18.6099" y1="41.8335" x2="7.73529" y2="8.31842" gradientUnits="userSpaceOnUse">
<stop stop-color="#E98ADA"/>
<stop offset="1" stop-color="#7E4DBD"/>
</linearGradient>
<linearGradient id="paint1_linear_2113_32117" x1="26.2346" y1="26.1226" x2="26.2346" y2="41.9076" gradientUnits="userSpaceOnUse">
<stop stop-color="#719DED"/>
<stop offset="1" stop-color="#2545BE"/>
</linearGradient>
<linearGradient id="paint2_linear_2113_32117" x1="36.213" y1="7.34521" x2="36.213" y2="26.1225" gradientUnits="userSpaceOnUse">
<stop stop-color="#93EBFF"/>
<stop offset="1" stop-color="#197DDB"/>
</linearGradient>
<linearGradient id="paint3_linear_2113_32117" x1="29.931" y1="0.0927734" x2="38.2156" y2="14.8448" gradientUnits="userSpaceOnUse">
<stop stop-color="#F969D3"/>
<stop offset="1" stop-color="#4F51C0"/>
</linearGradient>
<linearGradient id="paint4_linear_2113_32117" x1="18.1251" y1="44.2539" x2="-7.06792" y2="15.2763" gradientUnits="userSpaceOnUse">
<stop stop-color="#E98ADA"/>
<stop offset="1" stop-color="#7E4DBD"/>
</linearGradient>
</defs>
</svg>`,b=o.JW`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#7D00FF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M28.306 15.381a3.69 3.69 0 1 0 0-7.381 3.69 3.69 0 0 0 0 7.381ZM16.987 32a8.991 8.991 0 1 1 .016-17.983A8.991 8.991 0 0 1 16.988 32Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,m=o.JW`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,y=o.JW`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,x=o.JW`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,k=o.JW`<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
<g clip-path="url(#clip0_13859_31161)">
  <path d="M0 24.8995C0 15.6481 0 11.0223 1.97053 7.56763C3.3015 5.2342 5.23468 3.30101 7.56812 1.97004C11.0228 -0.000488281 15.6485 -0.000488281 24.9 -0.000488281H35.1C44.3514 -0.000488281 48.9772 -0.000488281 52.4319 1.97004C54.7653 3.30101 56.6985 5.2342 58.0295 7.56763C60 11.0223 60 15.6481 60 24.8995V35.0995C60 44.351 60 48.9767 58.0295 52.4314C56.6985 54.7648 54.7653 56.698 52.4319 58.029C48.9772 59.9995 44.3514 59.9995 35.1 59.9995H24.9C15.6485 59.9995 11.0228 59.9995 7.56812 58.029C5.23468 56.698 3.3015 54.7648 1.97053 52.4314C0 48.9767 0 44.351 0 35.0995V24.8995Z" fill="#EB8B47"/>
  <path d="M0.5 24.8995C0.5 20.2647 0.50047 16.8216 0.744315 14.1045C0.987552 11.3941 1.46987 9.45455 2.40484 7.81536C3.69145 5.55971 5.56019 3.69096 7.81585 2.40435C9.45504 1.46938 11.3946 0.987064 14.105 0.743826C16.8221 0.499981 20.2652 0.499512 24.9 0.499512H35.1C39.7348 0.499512 43.1779 0.499981 45.895 0.743826C48.6054 0.987064 50.545 1.46938 52.1841 2.40435C54.4398 3.69096 56.3086 5.55971 57.5952 7.81536C58.5301 9.45455 59.0124 11.3941 59.2557 14.1045C59.4995 16.8216 59.5 20.2647 59.5 24.8995V35.0995C59.5 39.7343 59.4995 43.1774 59.2557 45.8945C59.0124 48.6049 58.5301 50.5445 57.5952 52.1837C56.3086 54.4393 54.4398 56.3081 52.1841 57.5947C50.545 58.5296 48.6054 59.012 45.895 59.2552C43.1779 59.499 39.7348 59.4995 35.1 59.4995H24.9C20.2652 59.4995 16.8221 59.499 14.105 59.2552C11.3946 59.012 9.45504 58.5296 7.81585 57.5947C5.56019 56.3081 3.69145 54.4393 2.40484 52.1837C1.46987 50.5445 0.987552 48.6049 0.744315 45.8945C0.50047 43.1774 0.5 39.7343 0.5 35.0995V24.8995Z" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M13 26.0335C13 21.7838 13 19.659 14.0822 18.1694C14.4318 17.6883 14.8548 17.2653 15.3359 16.9157C16.8255 15.8335 18.9503 15.8335 23.2 15.8335H36.8C41.0497 15.8335 43.1745 15.8335 44.6641 16.9157C45.1452 17.2653 45.5682 17.6883 45.9178 18.1694C47 19.659 47 21.7838 47 26.0335V33.9668C47 38.2165 47 40.3414 45.9178 41.831C45.5682 42.312 45.1452 42.7351 44.6641 43.0846C43.1745 44.1668 41.0497 44.1668 36.8 44.1668H23.2C18.9503 44.1668 16.8255 44.1668 15.3359 43.0846C14.8548 42.7351 14.4318 42.312 14.0822 41.831C13 40.3414 13 38.2165 13 33.9668V26.0335Z" fill="#FF974C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M39.5 36.667H36.6666" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45.2 23.0645H14.8C14.0501 23.0645 13.6751 23.0645 13.4122 23.2554C13.3273 23.3171 13.2527 23.3918 13.191 23.4767C13 23.7395 13 24.1145 13 24.8645V27.2645C13 28.0144 13 28.3894 13.191 28.6522C13.2527 28.7371 13.3273 28.8118 13.4122 28.8735C13.6751 29.0645 14.0501 29.0645 14.8 29.0645H45.2C45.9499 29.0645 46.3249 29.0645 46.5878 28.8735C46.6727 28.8118 46.7473 28.7371 46.809 28.6522C47 28.3894 47 28.0144 47 27.2645V24.8645C47 24.1145 47 23.7395 46.809 23.4767C46.7473 23.3918 46.6727 23.3171 46.5878 23.2554C46.3249 23.0645 45.9499 23.0645 45.2 23.0645Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_13859_31161">
    <rect width="60" height="60" fill="white"/>
  </clipPath>
</defs>
</svg>`,C=o.JW`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#fff"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M18.606 12.642a.781.781 0 0 0-.771.66l-1.281 8.125a.78.78 0 0 1 .77-.66h3.755a7.668 7.668 0 0 0 7.57-6.49 6.26 6.26 0 0 0 .075-.843c-.96-.504-2.089-.792-3.325-.792h-6.793Z"
        fill="#001C64"
      />
      <path
        d="M28.724 13.434c-.006.282-.03.564-.075.843a7.668 7.668 0 0 1-7.57 6.491h-3.754a.78.78 0 0 0-.771.66l-1.916 12.15a.634.634 0 0 0 .626.734h4.075a.781.781 0 0 0 .77-.66l1.074-6.807a.781.781 0 0 1 .772-.66h2.4a7.668 7.668 0 0 0 7.57-6.491c.415-2.651-.92-5.064-3.201-6.26Z"
        fill="#0070E0"
      />
      <path
        d="M13.977 7.226a.78.78 0 0 0-.771.658l-3.198 20.277a.634.634 0 0 0 .626.733h4.742l1.178-7.467 1.281-8.125a.782.782 0 0 1 .771-.66H25.4c1.237 0 2.364.289 3.325.792.065-3.4-2.74-6.208-6.599-6.208h-8.148Z"
        fill="#003087"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,$=o.JW`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31635)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58317 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58317 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9268C60.4784 58.4158 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4158 2.1019 55.9268C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#EB8B47"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M28.1042 49.2329L13.1024 51.2077L15.0772 36.2059L37.1015 14.1815C39.2441 12.039 40.3154 10.9677 41.5718 10.624C42.4205 10.3918 43.3159 10.3918 44.1645 10.624C45.421 10.9677 46.4922 12.039 48.6348 14.1815L50.1286 15.6753C52.2711 17.8179 53.3424 18.8891 53.6861 20.1456C53.9183 20.9942 53.9183 21.8896 53.6861 22.7383C53.3424 23.9947 52.2711 25.066 50.1286 27.2086L28.1042 49.2329Z" fill="#FF974C" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M38.5962 20.5376L22.4199 36.7139" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M43.7727 25.714L27.5964 41.8903" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.3703 36.7635C19.3258 39.808 16.0198 36.6395 16.2616 35.0324" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5466 41.9399C24.5034 44.9831 28.155 48.7098 29.2738 48.0475" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5468 41.9398C23.428 46.0586 18.2516 40.8822 22.3704 36.7634" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.8191 50.5214C15.4711 49.5823 14.728 48.8392 13.7889 48.4912" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M49.2862 29.5805L34.7275 15.0219" stroke="#E4E7E7" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31635">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,E=o.JW`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,S=o.JW`<svg fill="none" viewBox="0 0 80 80">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M40 80a40 40 0 1 0 0-80 40 40 0 0 0 0 80Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M79.5 40a39.5 39.5 0 1 1-79 0 39.5 39.5 0 0 1 79 0Z"
    />
    <path
      fill="#fff"
      d="m62.62 51.54-7.54 7.91a1.75 1.75 0 0 1-1.29.55H18.02a.9.9 0 0 1-.8-.52.84.84 0 0 1 .16-.92l7.55-7.92a1.75 1.75 0 0 1 1.28-.55h35.77a.87.87 0 0 1 .8.52.84.84 0 0 1-.16.93Zm-7.54-15.95a1.75 1.75 0 0 0-1.29-.54H18.02a.89.89 0 0 0-.8.51.84.84 0 0 0 .16.93l7.55 7.92a1.75 1.75 0 0 0 1.28.54h35.77a.89.89 0 0 0 .8-.51.84.84 0 0 0-.16-.93l-7.54-7.92ZM18.02 29.9h35.77a1.79 1.79 0 0 0 1.29-.54l7.54-7.92a.85.85 0 0 0 .16-.93.87.87 0 0 0-.8-.51H26.21a1.79 1.79 0 0 0-1.28.54l-7.55 7.92a.85.85 0 0 0-.16.93.89.89 0 0 0 .8.52Z"
    />
  </g>
  <defs>
    <linearGradient id="b" x1="6.75" x2="80.68" y1="81.91" y2="7.37" gradientUnits="userSpaceOnUse">
      <stop offset=".08" stop-color="#9945FF" />
      <stop offset=".3" stop-color="#8752F3" />
      <stop offset=".5" stop-color="#5497D5" />
      <stop offset=".6" stop-color="#43B4CA" />
      <stop offset=".72" stop-color="#28E0B9" />
      <stop offset=".97" stop-color="#19FB9B" />
    </linearGradient>
    <clipPath id="a"><path fill="#fff" d="M0 0h80v80H0z" /></clipPath>
  </defs>
</svg> `,A=o.JW`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#635BFF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.299 15.147c0-1.028.844-1.424 2.242-1.424 2.004 0 4.536.607 6.54 1.688V9.213C24.892 8.343 22.73 8 20.541 8c-5.354 0-8.915 2.796-8.915 7.464 0 7.279 10.022 6.118 10.022 9.257 0 1.213-1.055 1.609-2.531 1.609-2.19 0-4.985-.897-7.2-2.11v6.277a18.283 18.283 0 0 0 7.2 1.503c5.485 0 9.257-2.716 9.257-7.437-.027-7.86-10.075-6.462-10.075-9.416Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,I=o.JW`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `;var R=i(56063),T=i(68664);const M=o.AH`
  :host {
    display: block;
    width: var(--local-size);
    height: var(--local-size);
  }

  :host svg {
    width: 100%;
    height: 100%;
  }
`;var W=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};const O={browser:n,dao:l,defi:c,defiAlt:d,eth:u,layers:h,lock:g,login:f,network:m,nft:y,noun:x,profile:E,system:I,coinbase:s,meld:v,onrampCard:k,moonpay:b,stripe:A,paypal:C,google:p,pencil:$,lightbulb:w,solana:S,bitcoin:a};let P=class extends o.WF{constructor(){super(...arguments),this.name="browser",this.size="md"}render(){return this.style.cssText=`\n       --local-size: var(--wui-visual-size-${this.size});\n   `,o.qy`${O[this.name]}`}};P.styles=[R.W5,M],W([(0,r.MZ)()],P.prototype,"name",void 0),W([(0,r.MZ)()],P.prototype,"size",void 0),P=W([(0,T.E)("wui-visual")],P)},23507:(t,e,i)=>{"use strict";i.d(e,{H:()=>a});var o=i(80971),r=i(39341);const a=(0,r.u$)(class extends r.WL{constructor(t){if(super(t),t.type!==r.OA.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const o=!!e[t];o===this.st.has(t)||this.nt?.has(t)||(o?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return o.c0}})},24909:(t,e,i)=>{const o=i(73743);e.mul=function(t,e){const i=new Uint8Array(t.length+e.length-1);for(let r=0;r<t.length;r++)for(let a=0;a<e.length;a++)i[r+a]^=o.mul(t[r],e[a]);return i},e.mod=function(t,e){let i=new Uint8Array(t);for(;i.length-e.length>=0;){const t=i[0];for(let r=0;r<e.length;r++)i[r]^=o.mul(e[r],t);let r=0;for(;r<i.length&&0===i[r];)r++;i=i.slice(r)}return i},e.generateECPolynomial=function(t){let i=new Uint8Array([1]);for(let r=0;r<t;r++)i=e.mul(i,new Uint8Array([1,o.exp(r)]));return i}},25059:(t,e,i)=>{"use strict";i.d(e,{o:()=>n});var o=i(44822),r=i(36517);const a=(0,o.BX)({isLegalCheckboxChecked:!1}),n={state:a,subscribe:t=>(0,o.B1)(a,()=>t(a)),subscribeKey:(t,e)=>(0,r.u$)(a,t,e),setIsLegalCheckboxChecked(t){a.isLegalCheckboxChecked=t}}},25068:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),a=i(43393),n=i(33461),s=i(29327),l=i(72470);const c=o.AH`
  :host {
    width: 100%;
    display: block;
  }
`;var d=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let u=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.text="",this.open=a.I.state.open,this.unsubscribe.push(n.I.subscribeKey("view",()=>{a.I.hide()}),s.W.subscribeKey("open",t=>{t||a.I.hide()}),a.I.subscribeKey("open",t=>{this.open=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),a.I.hide()}render(){return o.qy`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return o.qy`<slot></slot> `}onMouseEnter(){const t=this.getBoundingClientRect();this.open||a.I.showTooltip({message:this.text,triggerRect:{width:t.width,height:t.height,left:t.left,top:t.top},variant:"shade"})}onMouseLeave(t){this.contains(t.relatedTarget)||a.I.hide()}};u.styles=[c],d([(0,r.MZ)()],u.prototype,"text",void 0),d([(0,r.wk)()],u.prototype,"open",void 0),u=d([(0,l.EM)("w3m-tooltip-trigger")],u)},25262:(t,e,i)=>{"use strict";i.d(e,{T:()=>o});const o={URLS:{FAQ:"https://walletconnect.com/faq"}}},26264:(t,e)=>{e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};function i(t,i,o){switch(t){case e.Patterns.PATTERN000:return(i+o)%2==0;case e.Patterns.PATTERN001:return i%2==0;case e.Patterns.PATTERN010:return o%3==0;case e.Patterns.PATTERN011:return(i+o)%3==0;case e.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(o/3))%2==0;case e.Patterns.PATTERN101:return i*o%2+i*o%3==0;case e.Patterns.PATTERN110:return(i*o%2+i*o%3)%2==0;case e.Patterns.PATTERN111:return(i*o%3+(i+o)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}}e.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(t){const e=t.size;let i=0,o=0,r=0,a=null,n=null;for(let s=0;s<e;s++){o=r=0,a=n=null;for(let l=0;l<e;l++){let e=t.get(s,l);e===a?o++:(o>=5&&(i+=o-5+3),a=e,o=1),e=t.get(l,s),e===n?r++:(r>=5&&(i+=r-5+3),n=e,r=1)}o>=5&&(i+=o-5+3),r>=5&&(i+=r-5+3)}return i},e.getPenaltyN2=function(t){const e=t.size;let i=0;for(let o=0;o<e-1;o++)for(let r=0;r<e-1;r++){const e=t.get(o,r)+t.get(o,r+1)+t.get(o+1,r)+t.get(o+1,r+1);4!==e&&0!==e||i++}return 3*i},e.getPenaltyN3=function(t){const e=t.size;let i=0,o=0,r=0;for(let a=0;a<e;a++){o=r=0;for(let n=0;n<e;n++)o=o<<1&2047|t.get(a,n),n>=10&&(1488===o||93===o)&&i++,r=r<<1&2047|t.get(n,a),n>=10&&(1488===r||93===r)&&i++}return 40*i},e.getPenaltyN4=function(t){let e=0;const i=t.data.length;for(let o=0;o<i;o++)e+=t.data[o];return 10*Math.abs(Math.ceil(100*e/i/5)-10)},e.applyMask=function(t,e){const o=e.size;for(let r=0;r<o;r++)for(let a=0;a<o;a++)e.isReserved(a,r)||e.xor(a,r,i(t,a,r))},e.getBestMask=function(t,i){const o=Object.keys(e.Patterns).length;let r=0,a=1/0;for(let n=0;n<o;n++){i(n),e.applyMask(n,t);const o=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(n,t),o<a&&(a=o,r=n)}return r}},27165:(t,e,i)=>{"use strict";i.d(e,{Rt:()=>n,sO:()=>a});var o=i(80971);const{I:r}=o.ge,a=t=>null===t||"object"!=typeof t&&"function"!=typeof t,n=t=>void 0===t.strings},30990:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),a=i(23507),n=i(39168),s=i(379),l=(i(59481),i(56063)),c=i(68664);const d=o.AH`
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
`;var u=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let p=class extends o.WF{constructor(){super(...arguments),this.inputElementRef=(0,s._)(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const t=`wui-padding-right-${this.inputRightPadding}`,e=`wui-size-${this.size}`,i={[e]:!0,[t]:Boolean(this.inputRightPadding)};return o.qy`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${(0,s.K)(this.inputElementRef)}
        class=${(0,a.H)(i)}
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
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};p.styles=[l.W5,l.fD,d],u([(0,r.MZ)()],p.prototype,"size",void 0),u([(0,r.MZ)()],p.prototype,"icon",void 0),u([(0,r.MZ)({type:Boolean})],p.prototype,"disabled",void 0),u([(0,r.MZ)()],p.prototype,"placeholder",void 0),u([(0,r.MZ)()],p.prototype,"type",void 0),u([(0,r.MZ)()],p.prototype,"keyHint",void 0),u([(0,r.MZ)()],p.prototype,"value",void 0),u([(0,r.MZ)()],p.prototype,"inputRightPadding",void 0),u([(0,r.MZ)()],p.prototype,"tabIdx",void 0),p=u([(0,c.E)("wui-input-text")],p)},31037:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),a=i(56063),n=i(68664);const s=o.AH`
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
`;var l=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let c=class extends o.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`\n      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      `,o.qy`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};c.styles=[a.W5,a.ck,s],l([(0,r.MZ)()],c.prototype,"src",void 0),l([(0,r.MZ)()],c.prototype,"alt",void 0),l([(0,r.MZ)()],c.prototype,"size",void 0),c=l([(0,n.E)("wui-image")],c)},32240:(t,e,i)=>{const o=i(24909);function r(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}r.prototype.initialize=function(t){this.degree=t,this.genPoly=o.generateECPolynomial(this.degree)},r.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const e=new Uint8Array(t.length+this.degree);e.set(t);const i=o.mod(e,this.genPoly),r=this.degree-i.length;if(r>0){const t=new Uint8Array(this.degree);return t.set(i,r),t}return i},t.exports=r},32500:(t,e,i)=>{const o=i(95586),r=i(13992);e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!o.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]},e.getBestModeForData=function(t){return r.testNumeric(t)?e.NUMERIC:r.testAlphanumeric(t)?e.ALPHANUMERIC:r.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},e.isValid=function(t){return t&&t.bit&&t.ccBits},e.from=function(t,i){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+t)}}(t)}catch(t){return i}}},32971:(t,e,i)=>{"use strict";i.d(e,{T:()=>p});var o=i(80971),r=i(27165),a=i(64720);class n{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class s{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}var l=i(39341);const c=t=>!(0,r.sO)(t)&&"function"==typeof t.then,d=1073741823;class u extends a.Kq{constructor(){super(...arguments),this._$Cwt=d,this._$Cbt=[],this._$CK=new n(this),this._$CX=new s}render(...t){return t.find(t=>!c(t))??o.c0}update(t,e){const i=this._$Cbt;let r=i.length;this._$Cbt=e;const a=this._$CK,n=this._$CX;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$Cwt);t++){const o=e[t];if(!c(o))return this._$Cwt=t,o;t<r&&o===i[t]||(this._$Cwt=d,r=0,Promise.resolve(o).then(async t=>{for(;n.get();)await n.get();const e=a.deref();if(void 0!==e){const i=e._$Cbt.indexOf(o);i>-1&&i<e._$Cwt&&(e._$Cwt=i,e.setValue(t))}}))}return o.c0}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const p=(0,l.u$)(u)},33165:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),a=i(56063),n=i(71686),s=i(68664);const l=o.AH`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var c=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let d=class extends o.WF{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&n.Z.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&n.Z.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&n.Z.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&n.Z.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&n.Z.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&n.Z.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&n.Z.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&n.Z.getSpacingStyles(this.margin,3)};\n    `,o.qy`<slot></slot>`}};d.styles=[a.W5,l],c([(0,r.MZ)()],d.prototype,"flexDirection",void 0),c([(0,r.MZ)()],d.prototype,"flexWrap",void 0),c([(0,r.MZ)()],d.prototype,"flexBasis",void 0),c([(0,r.MZ)()],d.prototype,"flexGrow",void 0),c([(0,r.MZ)()],d.prototype,"flexShrink",void 0),c([(0,r.MZ)()],d.prototype,"alignItems",void 0),c([(0,r.MZ)()],d.prototype,"justifyContent",void 0),c([(0,r.MZ)()],d.prototype,"columnGap",void 0),c([(0,r.MZ)()],d.prototype,"rowGap",void 0),c([(0,r.MZ)()],d.prototype,"gap",void 0),c([(0,r.MZ)()],d.prototype,"padding",void 0),c([(0,r.MZ)()],d.prototype,"margin",void 0),d=c([(0,s.E)("wui-flex")],d)},33448:t=>{function e(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}e.prototype.set=function(t,e,i,o){const r=t*this.size+e;this.data[r]=i,o&&(this.reservedBit[r]=!0)},e.prototype.get=function(t,e){return this.data[t*this.size+e]},e.prototype.xor=function(t,e,i){this.data[t*this.size+e]^=i},e.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]},t.exports=e},36639:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427);const a=o.JW`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var n=i(4898);const s=o.JW`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`;i(59481),i(31037);var l=i(56063),c=i(68664);const d=o.AH`
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
`;var u=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let p=class extends o.WF{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:s,md:n.a,lg:a},this.selected=!1,this.round=!1}render(){return this.round?(this.dataset.round="true",this.style.cssText="\n      --local-width: var(--wui-spacing-3xl);\n      --local-height: var(--wui-spacing-3xl);\n      --local-icon-size: var(--wui-spacing-l);\n    "):this.style.cssText=`\n\n      --local-path: var(--wui-path-network-${this.size});\n      --local-width:  var(--wui-width-network-${this.size});\n      --local-height:  var(--wui-height-network-${this.size});\n      --local-icon-size:  var(--wui-icon-size-network-${this.size});\n    `,o.qy`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?o.qy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:o.qy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};p.styles=[l.W5,d],u([(0,r.MZ)()],p.prototype,"size",void 0),u([(0,r.MZ)()],p.prototype,"name",void 0),u([(0,r.MZ)({type:Object})],p.prototype,"networkImagesBySize",void 0),u([(0,r.MZ)()],p.prototype,"imageSrc",void 0),u([(0,r.MZ)({type:Boolean})],p.prototype,"selected",void 0),u([(0,r.MZ)({type:Boolean})],p.prototype,"round",void 0),p=u([(0,c.E)("wui-network-image")],p)},37498:(t,e,i)=>{"use strict";i(59481)},38371:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),a=i(39168),n=(i(59481),i(31037),i(20766),i(82207),i(33165),i(56063)),s=i(68664);i(50409);const l=o.AH`
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
`;var c=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let d=class extends o.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return o.qy`
      <button
        ?disabled=${!!this.loading||Boolean(this.disabled)}
        data-loading=${this.loading}
        data-iconvariant=${(0,a.J)(this.iconVariant)}
        tabindex=${(0,a.J)(this.tabIdx)}
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return o.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return o.qy`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){const t=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",e="square-blue"===this.iconVariant?"mdl":"md",i=this.iconSize?this.iconSize:e;return o.qy`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${i}
          background="transparent"
          iconColor=${t}
          backgroundColor=${t}
          size=${e}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?o.qy`<wui-loading-spinner
        data-testid="wui-list-item-loading-spinner"
        color="fg-300"
      ></wui-loading-spinner>`:o.qy``}chevronTemplate(){return this.chevron?o.qy`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};d.styles=[n.W5,n.fD,l],c([(0,r.MZ)()],d.prototype,"icon",void 0),c([(0,r.MZ)()],d.prototype,"iconSize",void 0),c([(0,r.MZ)()],d.prototype,"tabIdx",void 0),c([(0,r.MZ)()],d.prototype,"variant",void 0),c([(0,r.MZ)()],d.prototype,"iconVariant",void 0),c([(0,r.MZ)({type:Boolean})],d.prototype,"disabled",void 0),c([(0,r.MZ)()],d.prototype,"imageSrc",void 0),c([(0,r.MZ)()],d.prototype,"alt",void 0),c([(0,r.MZ)({type:Boolean})],d.prototype,"chevron",void 0),c([(0,r.MZ)({type:Boolean})],d.prototype,"loading",void 0),d=c([(0,s.E)("wui-list-item")],d)},38991:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),a=i(39168),n=(i(82207),i(56063)),s=i(68664);const l=o.AH`
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
`;var c=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let d=class extends o.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return o.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,a.J)(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};d.styles=[n.W5,n.fD,l],c([(0,r.MZ)()],d.prototype,"tabIdx",void 0),c([(0,r.MZ)({type:Boolean})],d.prototype,"disabled",void 0),c([(0,r.MZ)()],d.prototype,"color",void 0),d=c([(0,s.E)("wui-link")],d)},39168:(t,e,i)=>{"use strict";i.d(e,{J:()=>r});var o=i(80971);const r=t=>t??o.s6},39341:(t,e,i)=>{"use strict";i.d(e,{OA:()=>o,WL:()=>a,u$:()=>r});const o={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},r=t=>(...e)=>({_$litDirective$:t,values:e});class a{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},42188:t=>{"use strict";t.exports=function(t){for(var e=[],i=t.length,o=0;o<i;o++){var r=t.charCodeAt(o);if(r>=55296&&r<=56319&&i>o+1){var a=t.charCodeAt(o+1);a>=56320&&a<=57343&&(r=1024*(r-55296)+a-56320+65536,o+=1)}r<128?e.push(r):r<2048?(e.push(r>>6|192),e.push(63&r|128)):r<55296||r>=57344&&r<65536?(e.push(r>>12|224),e.push(r>>6&63|128),e.push(63&r|128)):r>=65536&&r<=1114111?(e.push(r>>18|240),e.push(r>>12&63|128),e.push(r>>6&63|128),e.push(63&r|128)):e.push(239,191,189)}return new Uint8Array(e).buffer}},43393:(t,e,i)=>{"use strict";i.d(e,{I:()=>l});var o=i(44822),r=i(36517),a=i(28621);const n=(0,o.BX)({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),s={state:n,subscribe:t=>(0,o.B1)(n,()=>t(n)),subscribeKey:(t,e)=>(0,r.u$)(n,t,e),showTooltip({message:t,triggerRect:e,variant:i}){n.open=!0,n.message=t,n.triggerRect=e,n.variant=i},hide(){n.open=!1,n.message="",n.triggerRect={width:0,height:0,top:0,left:0}}},l=(0,a.X)(s)},43401:(t,e,i)=>{const o=i(82890),r=i(2501),a=i(95567),n=i(33448),s=i(43825),l=i(54392),c=i(26264),d=i(94922),u=i(32240),p=i(93887),h=i(94753),w=i(32500),g=i(94541);function f(t,e,i){const o=t.size,r=h.getEncodedBits(e,i);let a,n;for(a=0;a<15;a++)n=1==(r>>a&1),a<6?t.set(a,8,n,!0):a<8?t.set(a+1,8,n,!0):t.set(o-15+a,8,n,!0),a<8?t.set(8,o-a-1,n,!0):a<9?t.set(8,15-a-1+1,n,!0):t.set(8,15-a-1,n,!0);t.set(o-8,8,1,!0)}function v(t,e,i,r){let h;if(Array.isArray(t))h=g.fromArray(t);else{if("string"!=typeof t)throw new Error("Invalid data");{let o=e;if(!o){const e=g.rawSplit(t);o=p.getBestVersionForData(e,i)}h=g.fromString(t,o||40)}}const v=p.getBestVersionForData(h,i);if(!v)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<v)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+v+".\n")}else e=v;const b=function(t,e,i){const r=new a;i.forEach(function(e){r.put(e.mode.bit,4),r.put(e.getLength(),w.getCharCountIndicator(e.mode,t)),e.write(r)});const n=8*(o.getSymbolTotalCodewords(t)-d.getTotalCodewordsCount(t,e));for(r.getLengthInBits()+4<=n&&r.put(0,4);r.getLengthInBits()%8!=0;)r.putBit(0);const s=(n-r.getLengthInBits())/8;for(let t=0;t<s;t++)r.put(t%2?17:236,8);return function(t,e,i){const r=o.getSymbolTotalCodewords(e),a=r-d.getTotalCodewordsCount(e,i),n=d.getBlocksCount(e,i),s=n-r%n,l=Math.floor(r/n),c=Math.floor(a/n),p=c+1,h=l-c,w=new u(h);let g=0;const f=new Array(n),v=new Array(n);let b=0;const m=new Uint8Array(t.buffer);for(let t=0;t<n;t++){const e=t<s?c:p;f[t]=m.slice(g,g+e),v[t]=w.encode(f[t]),g+=e,b=Math.max(b,e)}const y=new Uint8Array(r);let x,k,C=0;for(x=0;x<b;x++)for(k=0;k<n;k++)x<f[k].length&&(y[C++]=f[k][x]);for(x=0;x<h;x++)for(k=0;k<n;k++)y[C++]=v[k][x];return y}(r,t,e)}(e,i,h),m=o.getSymbolSize(e),y=new n(m);return function(t,e){const i=t.size,o=l.getPositions(e);for(let e=0;e<o.length;e++){const r=o[e][0],a=o[e][1];for(let e=-1;e<=7;e++)if(!(r+e<=-1||i<=r+e))for(let o=-1;o<=7;o++)a+o<=-1||i<=a+o||(e>=0&&e<=6&&(0===o||6===o)||o>=0&&o<=6&&(0===e||6===e)||e>=2&&e<=4&&o>=2&&o<=4?t.set(r+e,a+o,!0,!0):t.set(r+e,a+o,!1,!0))}}(y,e),function(t){const e=t.size;for(let i=8;i<e-8;i++){const e=i%2==0;t.set(i,6,e,!0),t.set(6,i,e,!0)}}(y),function(t,e){const i=s.getPositions(e);for(let e=0;e<i.length;e++){const o=i[e][0],r=i[e][1];for(let e=-2;e<=2;e++)for(let i=-2;i<=2;i++)-2===e||2===e||-2===i||2===i||0===e&&0===i?t.set(o+e,r+i,!0,!0):t.set(o+e,r+i,!1,!0)}}(y,e),f(y,i,0),e>=7&&function(t,e){const i=t.size,o=p.getEncodedBits(e);let r,a,n;for(let e=0;e<18;e++)r=Math.floor(e/3),a=e%3+i-8-3,n=1==(o>>e&1),t.set(r,a,n,!0),t.set(a,r,n,!0)}(y,e),function(t,e){const i=t.size;let o=-1,r=i-1,a=7,n=0;for(let s=i-1;s>0;s-=2)for(6===s&&s--;;){for(let i=0;i<2;i++)if(!t.isReserved(r,s-i)){let o=!1;n<e.length&&(o=1==(e[n]>>>a&1)),t.set(r,s-i,o),a--,-1===a&&(n++,a=7)}if(r+=o,r<0||i<=r){r-=o,o=-o;break}}}(y,b),isNaN(r)&&(r=c.getBestMask(y,f.bind(null,y,i))),c.applyMask(r,y),f(y,i,r),{modules:y,version:e,errorCorrectionLevel:i,maskPattern:r,segments:h}}e.create=function(t,e){if(void 0===t||""===t)throw new Error("No input text");let i,a,n=r.M;return void 0!==e&&(n=r.from(e.errorCorrectionLevel,r.M),i=p.from(e.version),a=c.from(e.maskPattern),e.toSJISFunc&&o.setToSJISFunction(e.toSJISFunc)),v(t,i,n,a)}},43508:(t,e,i)=>{"use strict";i(33165)},43825:(t,e,i)=>{const o=i(82890).getSymbolSize;e.getRowColCoords=function(t){if(1===t)return[];const e=Math.floor(t/7)+2,i=o(t),r=145===i?26:2*Math.ceil((i-13)/(2*e-2)),a=[i-7];for(let t=1;t<e-1;t++)a[t]=a[t-1]-r;return a.push(6),a.reverse()},e.getPositions=function(t){const i=[],o=e.getRowColCoords(t),r=o.length;for(let t=0;t<r;t++)for(let e=0;e<r;e++)0===t&&0===e||0===t&&e===r-1||t===r-1&&0===e||i.push([o[t],o[e]]);return i}},45666:(t,e,i)=>{const o=i(42188),r=i(32500);function a(t){this.mode=r.BYTE,"string"==typeof t&&(t=o(t)),this.data=new Uint8Array(t)}a.getBitsLength=function(t){return 8*t},a.prototype.getLength=function(){return this.data.length},a.prototype.getBitsLength=function(){return a.getBitsLength(this.data.length)},a.prototype.write=function(t){for(let e=0,i=this.data.length;e<i;e++)t.put(this.data[e],8)},t.exports=a},46664:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),a=(i(59481),i(56063)),n=i(68664);const s=o.AH`
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
`;var l=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let c=class extends o.WF{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const t="lg"===this.size?"--wui-border-radius-xs":"--wui-border-radius-xxs",e="lg"===this.size?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`\n    --local-border-radius: var(${t});\n    --local-padding: var(${e});\n`,o.qy`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};c.styles=[a.W5,a.fD,a.ck,s],l([(0,r.MZ)()],c.prototype,"size",void 0),l([(0,r.MZ)({type:Boolean})],c.prototype,"disabled",void 0),l([(0,r.MZ)()],c.prototype,"icon",void 0),l([(0,r.MZ)()],c.prototype,"iconColor",void 0),c=l([(0,n.E)("wui-icon-link")],c)},46860:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),a=(i(59481),i(31037),i(82207),i(33165),i(56063)),n=i(71686),s=i(68664);const l=o.AH`
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
`;var c=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let d=class extends o.WF{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return o.qy`
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
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?o.qy`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:o.qy`<wui-icon name="coinPlaceholder" color="fg-100"></wui-icon>`}};d.styles=[a.W5,a.fD,l],c([(0,r.MZ)()],d.prototype,"tokenName",void 0),c([(0,r.MZ)()],d.prototype,"tokenImageUrl",void 0),c([(0,r.MZ)({type:Number})],d.prototype,"tokenValue",void 0),c([(0,r.MZ)()],d.prototype,"tokenAmount",void 0),c([(0,r.MZ)()],d.prototype,"tokenCurrency",void 0),c([(0,r.MZ)({type:Boolean})],d.prototype,"clickable",void 0),d=c([(0,s.E)("wui-list-token")],d)},49048:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),a=(i(82207),i(56063)),n=i(68664);const s=o.AH`
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
`;var l=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let c=class extends o.WF{constructor(){super(...arguments),this.text=""}render(){return o.qy`${this.template()}`}template(){return this.text?o.qy`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};c.styles=[a.W5,s],l([(0,r.MZ)()],c.prototype,"text",void 0),c=l([(0,n.E)("wui-separator")],c)},50409:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),a=(i(59481),i(56063)),n=i(68664);const s=o.AH`
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
`;var l=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let c=class extends o.WF{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const t=this.iconSize||this.size,e="lg"===this.size,i="xl"===this.size,r=e?"12%":"16%",a=e?"xxs":i?"s":"3xl",n="gray"===this.background,s="opaque"===this.background,l="accent-100"===this.backgroundColor&&s||"success-100"===this.backgroundColor&&s||"error-100"===this.backgroundColor&&s||"inverse-100"===this.backgroundColor&&s;let c=`var(--wui-color-${this.backgroundColor})`;return l?c=`var(--wui-icon-box-bg-${this.backgroundColor})`:n&&(c=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${c};\n       --local-bg-mix: ${l||n?"100%":r};\n       --local-border-radius: var(--wui-border-radius-${a});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,o.qy` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};c.styles=[a.W5,a.fD,s],l([(0,r.MZ)()],c.prototype,"size",void 0),l([(0,r.MZ)()],c.prototype,"backgroundColor",void 0),l([(0,r.MZ)()],c.prototype,"iconColor",void 0),l([(0,r.MZ)()],c.prototype,"iconSize",void 0),l([(0,r.MZ)()],c.prototype,"background",void 0),l([(0,r.MZ)({type:Boolean})],c.prototype,"border",void 0),l([(0,r.MZ)()],c.prototype,"borderColor",void 0),l([(0,r.MZ)()],c.prototype,"icon",void 0),c=l([(0,n.E)("wui-icon-box")],c)},52206:(t,e,i)=>{"use strict";i(50409)},54392:(t,e,i)=>{const o=i(82890).getSymbolSize;e.getPositions=function(t){const e=o(t);return[[0,0],[e-7,0],[0,e-7]]}},57303:(t,e,i)=>{"use strict";var o=i(48422),r=(i(82963),i(33165),i(56063)),a=i(68664);const n=o.AH`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;let s=class extends o.WF{render(){return o.qy`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};s.styles=[r.W5,n],s=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n}([(0,a.E)("wui-transaction-list-item-loader")],s)},57723:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),a=i(19400),n=i(72470);i(43508),i(79932),i(79723);const s=o.AH`
  :host > wui-flex {
    background-color: var(--wui-color-gray-glass-005);
  }

  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: var(--wui-spacing-m);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;var l=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let c=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.remoteFeatures=a.H.state.remoteFeatures,this.unsubscribe.push(a.H.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{termsConditionsUrl:t,privacyPolicyUrl:e}=a.H.state,i=a.H.state.features?.legalCheckbox;return!t&&!e||i?o.qy`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(!0)} </wui-flex>
      `:o.qy`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
          <wui-text color="fg-250" variant="small-400" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:t,privacyPolicyUrl:e}=a.H.state;return t&&e?"and":""}termsTemplate(){const{termsConditionsUrl:t}=a.H.state;return t?o.qy`<a href=${t}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:t}=a.H.state;return t?o.qy`<a href=${t}>Privacy Policy</a>`:null}reownBrandingTemplate(t=!1){return this.remoteFeatures?.reownBranding?t?o.qy`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`:o.qy`<wui-ux-by-reown></wui-ux-by-reown>`:null}};c.styles=[s],l([(0,r.wk)()],c.prototype,"remoteFeatures",void 0),c=l([(0,n.EM)("w3m-legal-footer")],c)},59087:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),a=(i(59481),i(56063)),n=i(68664);const s=o.AH`
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
`;var l=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let c=class extends o.WF{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return o.qy`<button>
      <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
    </button>`}};c.styles=[a.W5,a.fD,s],l([(0,r.MZ)()],c.prototype,"text",void 0),l([(0,r.MZ)()],c.prototype,"icon",void 0),c=l([(0,n.E)("wui-icon-button")],c)},59183:(t,e,i)=>{"use strict";i(20766)},59481:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),a=i(32971);const n=new class{constructor(){this.cache=new Map}set(t,e){this.cache.set(t,e)}get(t){return this.cache.get(t)}has(t){return this.cache.has(t)}delete(t){this.cache.delete(t)}clear(){this.cache.clear()}};var s=i(56063),l=i(68664);const c=o.AH`
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
`;var d=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};const u={add:async()=>(await i.e(8186).then(i.bind(i,88186))).addSvg,allWallets:async()=>(await i.e(9569).then(i.bind(i,39569))).allWalletsSvg,arrowBottomCircle:async()=>(await i.e(5995).then(i.bind(i,25995))).arrowBottomCircleSvg,appStore:async()=>(await i.e(3774).then(i.bind(i,3774))).appStoreSvg,apple:async()=>(await i.e(5929).then(i.bind(i,15929))).appleSvg,arrowBottom:async()=>(await i.e(1198).then(i.bind(i,11198))).arrowBottomSvg,arrowLeft:async()=>(await i.e(9760).then(i.bind(i,29760))).arrowLeftSvg,arrowRight:async()=>(await i.e(4659).then(i.bind(i,94659))).arrowRightSvg,arrowTop:async()=>(await i.e(3690).then(i.bind(i,43690))).arrowTopSvg,bank:async()=>(await i.e(627).then(i.bind(i,80627))).bankSvg,browser:async()=>(await i.e(6913).then(i.bind(i,16913))).browserSvg,card:async()=>(await i.e(1327).then(i.bind(i,1327))).cardSvg,checkmark:async()=>(await i.e(1480).then(i.bind(i,31480))).checkmarkSvg,checkmarkBold:async()=>(await i.e(486).then(i.bind(i,70486))).checkmarkBoldSvg,chevronBottom:async()=>(await i.e(3928).then(i.bind(i,33928))).chevronBottomSvg,chevronLeft:async()=>(await i.e(3682).then(i.bind(i,23682))).chevronLeftSvg,chevronRight:async()=>(await i.e(7701).then(i.bind(i,17701))).chevronRightSvg,chevronTop:async()=>(await i.e(2592).then(i.bind(i,62592))).chevronTopSvg,chromeStore:async()=>(await i.e(1903).then(i.bind(i,1903))).chromeStoreSvg,clock:async()=>(await i.e(6027).then(i.bind(i,76027))).clockSvg,close:async()=>(await i.e(7545).then(i.bind(i,17545))).closeSvg,compass:async()=>(await i.e(2097).then(i.bind(i,2097))).compassSvg,coinPlaceholder:async()=>(await i.e(9919).then(i.bind(i,79919))).coinPlaceholderSvg,copy:async()=>(await i.e(340).then(i.bind(i,90340))).copySvg,cursor:async()=>(await i.e(9119).then(i.bind(i,29119))).cursorSvg,cursorTransparent:async()=>(await i.e(1944).then(i.bind(i,1944))).cursorTransparentSvg,desktop:async()=>(await i.e(3277).then(i.bind(i,73277))).desktopSvg,disconnect:async()=>(await i.e(2923).then(i.bind(i,2923))).disconnectSvg,discord:async()=>(await i.e(6977).then(i.bind(i,6977))).discordSvg,etherscan:async()=>(await i.e(3092).then(i.bind(i,73092))).etherscanSvg,extension:async()=>(await i.e(5712).then(i.bind(i,55712))).extensionSvg,externalLink:async()=>(await i.e(7563).then(i.bind(i,57563))).externalLinkSvg,facebook:async()=>(await i.e(8865).then(i.bind(i,98865))).facebookSvg,farcaster:async()=>(await i.e(4132).then(i.bind(i,74132))).farcasterSvg,filters:async()=>(await i.e(9222).then(i.bind(i,69222))).filtersSvg,github:async()=>(await i.e(9178).then(i.bind(i,89178))).githubSvg,google:async()=>(await i.e(3106).then(i.bind(i,13106))).googleSvg,helpCircle:async()=>(await i.e(4691).then(i.bind(i,34691))).helpCircleSvg,image:async()=>(await i.e(9652).then(i.bind(i,99652))).imageSvg,id:async()=>(await i.e(1636).then(i.bind(i,11636))).idSvg,infoCircle:async()=>(await i.e(298).then(i.bind(i,60298))).infoCircleSvg,lightbulb:async()=>(await i.e(54).then(i.bind(i,20054))).lightbulbSvg,mail:async()=>(await i.e(9930).then(i.bind(i,39930))).mailSvg,mobile:async()=>(await i.e(2475).then(i.bind(i,12475))).mobileSvg,more:async()=>(await i.e(6856).then(i.bind(i,36856))).moreSvg,networkPlaceholder:async()=>(await i.e(3387).then(i.bind(i,73387))).networkPlaceholderSvg,nftPlaceholder:async()=>(await i.e(3472).then(i.bind(i,53472))).nftPlaceholderSvg,off:async()=>(await i.e(4668).then(i.bind(i,54668))).offSvg,playStore:async()=>(await i.e(7755).then(i.bind(i,7755))).playStoreSvg,plus:async()=>(await i.e(2945).then(i.bind(i,22945))).plusSvg,qrCode:async()=>(await i.e(4034).then(i.bind(i,44034))).qrCodeIcon,recycleHorizontal:async()=>(await i.e(5045).then(i.bind(i,85045))).recycleHorizontalSvg,refresh:async()=>(await i.e(4290).then(i.bind(i,44290))).refreshSvg,search:async()=>(await i.e(3333).then(i.bind(i,73333))).searchSvg,send:async()=>(await i.e(8535).then(i.bind(i,18535))).sendSvg,swapHorizontal:async()=>(await i.e(9586).then(i.bind(i,49586))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await i.e(7773).then(i.bind(i,17773))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await i.e(9325).then(i.bind(i,9325))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await i.e(7562).then(i.bind(i,47562))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await i.e(2168).then(i.bind(i,82168))).swapVerticalSvg,telegram:async()=>(await i.e(8166).then(i.bind(i,88166))).telegramSvg,threeDots:async()=>(await i.e(1874).then(i.bind(i,51874))).threeDotsSvg,twitch:async()=>(await i.e(7218).then(i.bind(i,17218))).twitchSvg,twitter:async()=>(await i.e(3489).then(i.bind(i,93489))).xSvg,twitterIcon:async()=>(await i.e(9023).then(i.bind(i,69023))).twitterIconSvg,verify:async()=>(await i.e(2120).then(i.bind(i,52120))).verifySvg,verifyFilled:async()=>(await i.e(5337).then(i.bind(i,45337))).verifyFilledSvg,wallet:async()=>(await i.e(440).then(i.bind(i,60440))).walletSvg,walletConnect:async()=>(await i.e(3300).then(i.bind(i,33300))).walletConnectSvg,walletConnectLightBrown:async()=>(await i.e(3300).then(i.bind(i,33300))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await i.e(3300).then(i.bind(i,33300))).walletConnectBrownSvg,walletPlaceholder:async()=>(await i.e(5556).then(i.bind(i,25556))).walletPlaceholderSvg,warningCircle:async()=>(await i.e(7910).then(i.bind(i,87910))).warningCircleSvg,x:async()=>(await i.e(3489).then(i.bind(i,93489))).xSvg,info:async()=>(await i.e(917).then(i.bind(i,10917))).infoSvg,exclamationTriangle:async()=>(await i.e(2557).then(i.bind(i,32557))).exclamationTriangleSvg,reown:async()=>(await i.e(1864).then(i.bind(i,41864))).reownSvg};let p=class extends o.WF{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n      --local-aspect-ratio: ${this.aspectRatio}\n    `,o.qy`${(0,a.T)(async function(t){if(n.has(t))return n.get(t);const e=(u[t]??u.copy)();return n.set(t,e),e}(this.name),o.qy`<div class="fallback"></div>`)}`}};p.styles=[s.W5,s.ck,c],d([(0,r.MZ)()],p.prototype,"size",void 0),d([(0,r.MZ)()],p.prototype,"name",void 0),d([(0,r.MZ)()],p.prototype,"color",void 0),d([(0,r.MZ)()],p.prototype,"aspectRatio",void 0),p=d([(0,l.E)("wui-icon")],p)},59909:(t,e,i)=>{const o=i(32500),r=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function a(t){this.mode=o.ALPHANUMERIC,this.data=t}a.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},a.prototype.getLength=function(){return this.data.length},a.prototype.getBitsLength=function(){return a.getBitsLength(this.data.length)},a.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let i=45*r.indexOf(this.data[e]);i+=r.indexOf(this.data[e+1]),t.put(i,11)}this.data.length%2&&t.put(r.indexOf(this.data[e]),6)},t.exports=a},60097:(t,e,i)=>{const o=i(32500);function r(t){this.mode=o.NUMERIC,this.data=t.toString()}r.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(t){let e,i,o;for(e=0;e+3<=this.data.length;e+=3)i=this.data.substr(e,3),o=parseInt(i,10),t.put(o,10);const r=this.data.length-e;r>0&&(i=this.data.substr(e),o=parseInt(i,10),t.put(o,3*r+1))},t.exports=r},62907:(t,e,i)=>{"use strict";i(30990)},63718:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),a=(i(20766),i(82207),i(56063)),n=i(68664);const s=o.AH`
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
`;var l=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};const c={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},d={lg:"paragraph-600",md:"small-600"},u={lg:"md",md:"md"};let p=class extends o.WF{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`\n    --local-width: ${this.fullWidth?"100%":"auto"};\n    --local-opacity-100: ${this.loading?0:1};\n    --local-opacity-000: ${this.loading?1:0};\n    --local-border-radius: var(--wui-border-radius-${this.borderRadius});\n    `;const t=this.textVariant??d[this.size];return o.qy`
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
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const t=u[this.size],e=this.disabled?c.disabled:c[this.variant];return o.qy`<wui-loading-spinner color=${e} size=${t}></wui-loading-spinner>`}return o.qy``}};p.styles=[a.W5,a.fD,s],l([(0,r.MZ)()],p.prototype,"size",void 0),l([(0,r.MZ)({type:Boolean})],p.prototype,"disabled",void 0),l([(0,r.MZ)({type:Boolean})],p.prototype,"fullWidth",void 0),l([(0,r.MZ)({type:Boolean})],p.prototype,"loading",void 0),l([(0,r.MZ)()],p.prototype,"variant",void 0),l([(0,r.MZ)({type:Boolean})],p.prototype,"hasIconLeft",void 0),l([(0,r.MZ)({type:Boolean})],p.prototype,"hasIconRight",void 0),l([(0,r.MZ)()],p.prototype,"borderRadius",void 0),l([(0,r.MZ)()],p.prototype,"textVariant",void 0),p=l([(0,n.E)("wui-button")],p)},63937:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),a=(i(59481),i(31037),i(33165),i(56063)),n=i(68664);i(50409);const s=o.AH`
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
`;var l=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let c=class extends o.WF{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let t="xxs";return t="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`\n       --local-border-radius: var(--wui-border-radius-${t});\n       --local-size: var(--wui-wallet-image-size-${this.size});\n   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),o.qy`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?o.qy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?o.qy`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:o.qy`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};c.styles=[a.fD,a.W5,s],l([(0,r.MZ)()],c.prototype,"size",void 0),l([(0,r.MZ)()],c.prototype,"name",void 0),l([(0,r.MZ)()],c.prototype,"imageSrc",void 0),l([(0,r.MZ)()],c.prototype,"walletIcon",void 0),l([(0,r.MZ)({type:Boolean})],c.prototype,"installed",void 0),l([(0,r.MZ)()],c.prototype,"badgeSize",void 0),c=l([(0,n.E)("wui-wallet-image")],c)},64416:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),a=i(39168),n=(i(82207),i(56063)),s=i(68664);i(79507);const l=o.AH`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    justify-content: flex-start;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-text[data-align='left'] {
    display: flex;
    flex: 1;
  }

  wui-text[data-align='center'] {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .invisible {
    opacity: 0;
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var c=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let d=class extends o.WF{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.align="left",this.disabled=!1}render(){return o.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,a.J)(this.tabIdx)}>
        <wui-logo logo=${this.logo}></wui-logo>
        <wui-text
          data-align=${this.align}
          variant="paragraph-500"
          color="inherit"
          align=${this.align}
          >${this.name}</wui-text
        >
        ${this.templatePlacement()}
      </button>
    `}templatePlacement(){return"center"===this.align?o.qy` <wui-logo class="invisible" logo=${this.logo}></wui-logo>`:null}};d.styles=[n.W5,n.fD,l],c([(0,r.MZ)()],d.prototype,"logo",void 0),c([(0,r.MZ)()],d.prototype,"name",void 0),c([(0,r.MZ)()],d.prototype,"align",void 0),c([(0,r.MZ)()],d.prototype,"tabIdx",void 0),c([(0,r.MZ)({type:Boolean})],d.prototype,"disabled",void 0),d=c([(0,s.E)("wui-list-social")],d)},64720:(t,e,i)=>{"use strict";i.d(e,{Kq:()=>u});var o=i(27165),r=i(39341);const a=(t,e)=>{const i=t._$AN;if(void 0===i)return!1;for(const t of i)t._$AO?.(e,!1),a(t,e);return!0},n=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===i?.size)},s=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),d(e)}};function l(t){void 0!==this._$AN?(n(this),this._$AM=t,s(this)):this._$AM=t}function c(t,e=!1,i=0){const o=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(e)if(Array.isArray(o))for(let t=i;t<o.length;t++)a(o[t],!1),n(o[t]);else null!=o&&(a(o,!1),n(o));else a(this,t)}const d=t=>{t.type==r.OA.CHILD&&(t._$AP??=c,t._$AQ??=l)};class u extends r.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),s(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(a(this,t),n(this))}setValue(t){if((0,o.Rt)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}},68855:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),a=i(25059),n=i(19400),s=i(72470),l=i(39168),c=i(379),d=(i(59481),i(56063)),u=i(68664);const p=o.AH`
  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    column-gap: var(--wui-spacing-1xs);
  }

  label > input[type='checkbox'] {
    height: 0;
    width: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
  }

  label > span {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
    min-width: var(--wui-spacing-xl);
    min-height: var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-3xs);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-010);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  label > span:hover,
  label > input[type='checkbox']:focus-visible + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  label input[type='checkbox']:checked + span {
    background-color: var(--wui-color-blue-base-90);
  }

  label > span > wui-icon {
    opacity: 0;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span wui-icon {
    opacity: 1;
  }
`;var h=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let w=class extends o.WF{constructor(){super(...arguments),this.inputElementRef=(0,c._)(),this.checked=void 0}render(){return o.qy`
      <label>
        <input
          ${(0,c.K)(this.inputElementRef)}
          ?checked=${(0,l.J)(this.checked)}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" color="inverse-100" size="xxs"></wui-icon>
        </span>
        <slot></slot>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("checkboxChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};w.styles=[d.W5,p],h([(0,r.MZ)({type:Boolean})],w.prototype,"checked",void 0),w=h([(0,u.E)("wui-checkbox")],w),i(79932);const g=o.AH`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: var(--wui-spacing-s);
  }
  a {
    text-decoration: none;
    color: var(--wui-color-fg-150);
    font-weight: 500;
  }
`;var f=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let v=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.checked=a.o.state.isLegalCheckboxChecked,this.unsubscribe.push(a.o.subscribeKey("isLegalCheckboxChecked",t=>{this.checked=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{termsConditionsUrl:t,privacyPolicyUrl:e}=n.H.state,i=n.H.state.features?.legalCheckbox;return(t||e)&&i?o.qy`
      <wui-checkbox
        ?checked=${this.checked}
        @checkboxChange=${this.onCheckboxChange.bind(this)}
        data-testid="wui-checkbox"
      >
        <wui-text color="fg-250" variant="small-400" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `:null}andTemplate(){const{termsConditionsUrl:t,privacyPolicyUrl:e}=n.H.state;return t&&e?"and":""}termsTemplate(){const{termsConditionsUrl:t}=n.H.state;return t?o.qy`<a rel="noreferrer" target="_blank" href=${t}>terms of service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:t}=n.H.state;return t?o.qy`<a rel="noreferrer" target="_blank" href=${t}>privacy policy</a>`:null}onCheckboxChange(){a.o.setIsLegalCheckboxChecked(!this.checked)}};v.styles=[g],f([(0,r.wk)()],v.prototype,"checked",void 0),v=f([(0,s.EM)("w3m-legal-checkbox")],v)},69623:(t,e,i)=>{"use strict";i.d(e,{M:()=>n});var o=i(56451);const r={attribute:!0,type:String,converter:o.W3,reflect:!1,hasChanged:o.Ec},a=(t=r,e,i)=>{const{kind:o,metadata:a}=i;let n=globalThis.litPropertyMetadata.get(a);if(void 0===n&&globalThis.litPropertyMetadata.set(a,n=new Map),"setter"===o&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===o){const{name:o}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,r,t)},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===o){const{name:o}=i;return function(i){const r=this[o];e.call(this,i),this.requestUpdate(o,r,t)}}throw Error("Unsupported decorator location: "+o)};function n(t){return(e,i)=>"object"==typeof i?a(t,e,i):((t,e,i)=>{const o=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}},72482:(t,e,i)=>{"use strict";var o,r=i(48422),a=i(91427),n=i(44148),s=i(52819),l=i(16785),c=i(92999),d=i(33461),u=i(19400),p=i(34325),h=i(90101),w=i(72470),g=(i(43508),i(52206),i(38991),i(79932),i(39168)),f=(i(59481),i(82207),i(33165),i(56063));!function(t){t.approve="approved",t.bought="bought",t.borrow="borrowed",t.burn="burnt",t.cancel="canceled",t.claim="claimed",t.deploy="deployed",t.deposit="deposited",t.execute="executed",t.mint="minted",t.receive="received",t.repay="repaid",t.send="sent",t.sell="sold",t.stake="staked",t.trade="swapped",t.unstake="unstaked",t.withdraw="withdrawn"}(o||(o={}));var v=i(68664);i(31037),i(50409);const b=r.AH`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var m=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let y=class extends r.WF{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[t,e]=this.images,i="NFT"===t?.type,o=i?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",a=(e?.url?"NFT"===e.type:i)?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`\n    --local-left-border-radius: ${o};\n    --local-right-border-radius: ${a};\n    `,r.qy`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[t,e]=this.images,i=t?.type;return 2===this.images.length&&(t?.url||e?.url)?r.qy`<div class="swap-images-container">
        ${t?.url?r.qy`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
        ${e?.url?r.qy`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
      </div>`:t?.url?r.qy`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:"NFT"===i?r.qy`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:r.qy`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let t,e="accent-100";return t=this.getIcon(),this.status&&(e=this.getStatusColor()),t?r.qy`
      <wui-icon-box
        size="xxs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        icon=${t}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontalBold":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};y.styles=[b],m([(0,a.MZ)()],y.prototype,"type",void 0),m([(0,a.MZ)()],y.prototype,"status",void 0),m([(0,a.MZ)()],y.prototype,"direction",void 0),m([(0,a.MZ)({type:Boolean})],y.prototype,"onlyDirectionIcon",void 0),m([(0,a.MZ)({type:Array})],y.prototype,"images",void 0),m([(0,a.MZ)({type:Object})],y.prototype,"secondImage",void 0),y=m([(0,v.E)("wui-transaction-visual")],y);const x=r.AH`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var k=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let C=class extends r.WF{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return r.qy`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${(0,g.J)(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${(0,g.J)(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${o[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){const t=this.descriptions?.[0];return t?r.qy`
          <wui-text variant="small-500" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}templateSecondDescription(){const t=this.descriptions?.[1];return t?r.qy`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}};C.styles=[f.W5,x],k([(0,a.MZ)()],C.prototype,"type",void 0),k([(0,a.MZ)({type:Array})],C.prototype,"descriptions",void 0),k([(0,a.MZ)()],C.prototype,"date",void 0),k([(0,a.MZ)({type:Boolean})],C.prototype,"onlyDirectionIcon",void 0),k([(0,a.MZ)()],C.prototype,"status",void 0),k([(0,a.MZ)()],C.prototype,"direction",void 0),k([(0,a.MZ)({type:Array})],C.prototype,"images",void 0),k([(0,a.MZ)({type:Array})],C.prototype,"price",void 0),k([(0,a.MZ)({type:Array})],C.prototype,"amount",void 0),k([(0,a.MZ)({type:Array})],C.prototype,"symbol",void 0),C=k([(0,v.E)("wui-transaction-list-item")],C),i(57303);var $=i(98096);const E=r.AH`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: var(--wui-spacing-m);
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;var S=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};const A="last-transaction";let I=class extends r.WF{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.caipAddress=s.W.state.activeCaipAddress,this.transactionsByYear=l.W.state.transactionsByYear,this.loading=l.W.state.loading,this.empty=l.W.state.empty,this.next=l.W.state.next,l.W.clearCursor(),this.unsubscribe.push(s.W.subscribeKey("activeCaipAddress",t=>{t&&this.caipAddress!==t&&(l.W.resetTransactions(),l.W.fetchTransactions(t)),this.caipAddress=t}),s.W.subscribeKey("activeCaipNetwork",()=>{this.updateTransactionView()}),l.W.subscribe(t=>{this.transactionsByYear=t.transactionsByYear,this.loading=t.loading,this.empty=t.empty,this.next=t.next}))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return r.qy` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){const t=s.W.state.activeCaipNetwork?.caipNetworkId;l.W.state.lastNetworkInView!==t&&(l.W.resetTransactions(),this.caipAddress&&l.W.fetchTransactions(c.w.getPlainAddress(this.caipAddress))),l.W.setLastNetworkInView(t)}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map(t=>{const e=parseInt(t,10),i=new Array(12).fill(null).map((t,i)=>{const o=w.tt.getTransactionGroupTitle(e,i),r=this.transactionsByYear[e]?.[i];return{groupTitle:o,transactions:r}}).filter(({transactions:t})=>t).reverse();return i.map(({groupTitle:t,transactions:e},o)=>{const a=o===i.length-1;return e?r.qy`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${a?"true":"false"}"
            data-testid="month-indexes"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200" data-testid="group-title"
                >${t}</wui-text
              >
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(e,a)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(t,e){const{date:i,descriptions:o,direction:a,isAllNFT:n,images:s,status:l,transfers:c,type:d}=this.getTransactionListItemProps(t),u=c?.length>1;return 2!==c?.length||n?u?c.map((t,o)=>{const a=w.tt.getTransferDescription(t),n=e&&o===c.length-1;return r.qy` <wui-transaction-list-item
          date=${i}
          direction=${t.direction}
          id=${n&&this.next?A:""}
          status=${l}
          type=${d}
          .onlyDirectionIcon=${!0}
          .images=${[s[o]]}
          .descriptions=${[a]}
        ></wui-transaction-list-item>`}):r.qy`
      <wui-transaction-list-item
        date=${i}
        .direction=${a}
        id=${e&&this.next?A:""}
        status=${l}
        type=${d}
        .images=${s}
        .descriptions=${o}
      ></wui-transaction-list-item>
    `:r.qy`
        <wui-transaction-list-item
          date=${i}
          .direction=${a}
          id=${e&&this.next?A:""}
          status=${l}
          type=${d}
          .images=${s}
          .descriptions=${o}
        ></wui-transaction-list-item>
      `}templateTransactions(t,e){return t.map((i,o)=>{const a=e&&o===t.length-1;return r.qy`${this.templateRenderTransaction(i,a)}`})}emptyStateActivity(){return r.qy`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl","xl","3xl","xl"]}
      gap="xl"
      data-testid="empty-activity-state"
    >
      <wui-icon-box
        backgroundColor="gray-glass-005"
        background="gray"
        iconColor="fg-200"
        icon="wallet"
        size="lg"
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >No Transactions yet</wui-text
        >
        <wui-text align="center" variant="small-500" color="fg-200"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return r.qy`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
      data-testid="empty-account-state"
    >
      <wui-icon-box
        icon="swapHorizontal"
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
        <wui-text variant="paragraph-500" align="center" color="fg-100">No activity yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return"account"===this.page?r.qy`${this.emptyStateAccount()}`:r.qy`${this.emptyStateActivity()}`}templateLoading(){return"activity"===this.page?Array(7).fill(r.qy` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(t=>t):null}onReceiveClick(){d.I.push("WalletReceive")}createPaginationObserver(){const t=s.W.state.activeChain,{projectId:e}=u.H.state;this.paginationObserver=new IntersectionObserver(([i])=>{i?.isIntersecting&&!this.loading&&(l.W.fetchTransactions(c.w.getPlainAddress(this.caipAddress)),p.E.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:c.w.getPlainAddress(this.caipAddress),projectId:e,cursor:this.next,isSmartAccount:h.U.state.preferredAccountTypes?.[t]===$.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}))},{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();const t=this.shadowRoot?.querySelector(`#${A}`);t&&this.paginationObserver?.observe(t)}getTransactionListItemProps(t){const e=n.r.formatDate(t?.metadata?.minedAt),i=w.tt.getTransactionDescriptions(t),o=t?.transfers,r=t?.transfers?.[0],a=Boolean(r)&&t?.transfers?.every(t=>Boolean(t.nft_info)),s=w.tt.getTransactionImages(o);return{date:e,direction:r?.direction,descriptions:i,isAllNFT:a,images:s,status:t.metadata?.status,transfers:o,type:t.metadata?.operationType}}};I.styles=E,S([(0,a.MZ)()],I.prototype,"page",void 0),S([(0,a.wk)()],I.prototype,"caipAddress",void 0),S([(0,a.wk)()],I.prototype,"transactionsByYear",void 0),S([(0,a.wk)()],I.prototype,"loading",void 0),S([(0,a.wk)()],I.prototype,"empty",void 0),S([(0,a.wk)()],I.prototype,"next",void 0),I=S([(0,w.EM)("w3m-activity-list")],I)},73743:(t,e)=>{const i=new Uint8Array(512),o=new Uint8Array(256);!function(){let t=1;for(let e=0;e<255;e++)i[e]=t,o[t]=e,t<<=1,256&t&&(t^=285);for(let t=255;t<512;t++)i[t]=i[t-255]}(),e.log=function(t){if(t<1)throw new Error("log("+t+")");return o[t]},e.exp=function(t){return i[t]},e.mul=function(t,e){return 0===t||0===e?0:i[o[t]+o[e]]}},73921:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),a=i(56063),n=i(68664);const s=o.AH`
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
`;var l=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let c=class extends o.WF{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,e=36-t,i=116+e,r=245+e,a=360+1.75*e;return o.qy`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${i} ${r}"
          stroke-dashoffset=${a}
        />
      </svg>
    `}};c.styles=[a.W5,s],l([(0,r.MZ)({type:Number})],c.prototype,"radius",void 0),c=l([(0,n.E)("wui-loading-thumbnail")],c)},76199:(t,e,i)=>{const o=i(9074);e.render=function(t,e,i){let r=i,a=e;void 0!==r||e&&e.getContext||(r=e,e=void 0),e||(a=function(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}()),r=o.getOptions(r);const n=o.getImageWidth(t.modules.size,r),s=a.getContext("2d"),l=s.createImageData(n,n);return o.qrToImageData(l.data,t,r),function(t,e,i){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=i,e.width=i,e.style.height=i+"px",e.style.width=i+"px"}(s,a,n),s.putImageData(l,0,0),a},e.renderToDataURL=function(t,i,o){let r=o;void 0!==r||i&&i.getContext||(r=i,i=void 0),r||(r={});const a=e.render(t,i,r),n=r.type||"image/png",s=r.rendererOpts||{};return a.toDataURL(n,s.quality)}},77887:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),a=i(43393),n=i(72470);i(43508),i(37498),i(79932);const s=o.AH`
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
`;var l=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let c=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.open=a.I.state.open,this.message=a.I.state.message,this.triggerRect=a.I.state.triggerRect,this.variant=a.I.state.variant,this.unsubscribe.push(a.I.subscribe(t=>{this.open=t.open,this.message=t.message,this.triggerRect=t.triggerRect,this.variant=t.variant}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){this.dataset.variant=this.variant;const t=this.triggerRect.top,e=this.triggerRect.left;return this.style.cssText=`\n    --w3m-tooltip-top: ${t}px;\n    --w3m-tooltip-left: ${e}px;\n    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;\n    --w3m-tooltip-display: ${this.open?"flex":"none"};\n    --w3m-tooltip-opacity: ${this.open?1:0};\n    `,o.qy`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};c.styles=[s],l([(0,r.wk)()],c.prototype,"open",void 0),l([(0,r.wk)()],c.prototype,"message",void 0),l([(0,r.wk)()],c.prototype,"triggerRect",void 0),l([(0,r.wk)()],c.prototype,"variant",void 0),c=l([(0,n.EM)("w3m-tooltip"),(0,n.EM)("w3m-tooltip")],c)},79507:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),a=(i(59481),i(56063)),n=i(68664);const s=o.AH`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var l=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let c=class extends o.WF{constructor(){super(...arguments),this.logo="google"}render(){return o.qy`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};c.styles=[a.W5,s],l([(0,r.MZ)()],c.prototype,"logo",void 0),c=l([(0,n.E)("wui-logo")],c)},79723:(t,e,i)=>{"use strict";var o=i(48422),r=(i(59481),i(82207),i(33165),i(98615)),a=i(56063),n=i(68664);const s=o.AH`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    opacity: 0.9;
  }
`;let l=class extends o.WF{render(){return o.qy`
      <a
        data-testid="ux-branding-reown"
        href=${r.C5}
        rel="noreferrer"
        target="_blank"
        style="text-decoration: none;"
      >
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="xs"
          .padding=${["0","0","l","0"]}
        >
          <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
          <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `}};l.styles=[a.W5,a.fD,s],l=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n}([(0,n.E)("wui-ux-by-reown")],l)},79932:(t,e,i)=>{"use strict";i(82207)},80659:(t,e,i)=>{"use strict";i(63718)},82207:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),a=i(23507),n=i(56063),s=i(68664);const l=o.AH`
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
`;var c=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let d=class extends o.WF{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,o.qy`<slot class=${(0,a.H)(t)}></slot>`}};d.styles=[n.W5,l],c([(0,r.MZ)()],d.prototype,"variant",void 0),c([(0,r.MZ)()],d.prototype,"color",void 0),c([(0,r.MZ)()],d.prototype,"align",void 0),c([(0,r.MZ)()],d.prototype,"lineClamp",void 0),d=c([(0,s.E)("wui-text")],d)},82890:(t,e)=>{let i;const o=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},e.getSymbolTotalCodewords=function(t){return o[t]},e.getBCHDigit=function(t){let e=0;for(;0!==t;)e++,t>>>=1;return e},e.setToSJISFunction=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');i=t},e.isKanjiModeEnabled=function(){return void 0!==i},e.toSJIS=function(t){return i(t)}},82963:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),a=i(68664);const n=o.AH`
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
`;var s=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let l=class extends o.WF{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);\n    `,o.qy`<slot></slot>`}};l.styles=[n],s([(0,r.MZ)()],l.prototype,"width",void 0),s([(0,r.MZ)()],l.prototype,"height",void 0),s([(0,r.MZ)()],l.prototype,"borderRadius",void 0),s([(0,r.MZ)()],l.prototype,"variant",void 0),l=s([(0,a.E)("wui-shimmer")],l)},83309:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),a=(i(31037),i(56063)),n=i(71686),s=i(68664);const l=o.AH`
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
`;var c=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let d=class extends o.WF{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){return this.style.cssText=`\n    --local-width: var(--wui-icon-box-size-${this.size});\n    --local-height: var(--wui-icon-box-size-${this.size});\n    `,o.qy`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",o.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const t=n.Z.generateAvatarColors(this.address);return this.style.cssText+=`\n ${t}`,null}return this.dataset.variant="default",null}};d.styles=[a.W5,l],c([(0,r.MZ)()],d.prototype,"imageSrc",void 0),c([(0,r.MZ)()],d.prototype,"alt",void 0),c([(0,r.MZ)()],d.prototype,"address",void 0),c([(0,r.MZ)()],d.prototype,"size",void 0),d=c([(0,s.E)("wui-avatar")],d)},90141:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),a=(i(59481),i(31037),i(94083));function n(t,e,i){return t!==e&&(t-e<0?e-t:t-e)<=i+.1}const s={generate({uri:t,size:e,logoSize:i,dotColor:r="#141414"}){const s=[],l=function(t){const e=Array.prototype.slice.call(a.create(t,{errorCorrectionLevel:"Q"}).modules.data,0),i=Math.sqrt(e.length);return e.reduce((t,e,o)=>(o%i===0?t.push([e]):t[t.length-1].push(e))&&t,[])}(t),c=e/l.length,d=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];d.forEach(({x:t,y:e})=>{const i=(l.length-7)*c*t,a=(l.length-7)*c*e,n=.45;for(let t=0;t<d.length;t+=1){const e=c*(7-2*t);s.push(o.JW`
            <rect
              fill=${2===t?r:"transparent"}
              width=${0===t?e-5:e}
              rx= ${0===t?(e-5)*n:e*n}
              ry= ${0===t?(e-5)*n:e*n}
              stroke=${r}
              stroke-width=${0===t?5:0}
              height=${0===t?e-5:e}
              x= ${0===t?a+c*t+2.5:a+c*t}
              y= ${0===t?i+c*t+2.5:i+c*t}
            />
          `)}});const u=Math.floor((i+25)/c),p=l.length/2-u/2,h=l.length/2+u/2-1,w=[];l.forEach((t,e)=>{t.forEach((t,i)=>{if(l[e][i]&&!(e<7&&i<7||e>l.length-8&&i<7||e<7&&i>l.length-8||e>p&&e<h&&i>p&&i<h)){const t=e*c+c/2,o=i*c+c/2;w.push([t,o])}})});const g={};return w.forEach(([t,e])=>{g[t]?g[t]?.push(e):g[t]=[e]}),Object.entries(g).map(([t,e])=>{const i=e.filter(t=>e.every(e=>!n(t,e,c)));return[Number(t),i]}).forEach(([t,e])=>{e.forEach(e=>{s.push(o.JW`<circle cx=${t} cy=${e} fill=${r} r=${c/2.5} />`)})}),Object.entries(g).filter(([t,e])=>e.length>1).map(([t,e])=>{const i=e.filter(t=>e.some(e=>n(t,e,c)));return[Number(t),i]}).map(([t,e])=>{e.sort((t,e)=>t<e?-1:1);const i=[];for(const t of e){const e=i.find(e=>e.some(e=>n(t,e,c)));e?e.push(t):i.push([t])}return[t,i.map(t=>[t[0],t[t.length-1]])]}).forEach(([t,e])=>{e.forEach(([e,i])=>{s.push(o.JW`
              <line
                x1=${t}
                x2=${t}
                y1=${e}
                y2=${i}
                stroke=${r}
                stroke-width=${c/1.25}
                stroke-linecap="round"
              />
            `)})}),s}};var l=i(56063),c=i(68664);const d=o.AH`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: var(--local-icon-color) !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var u=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let p=class extends o.WF{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`\n     --local-size: ${this.size}px;\n     --local-icon-color: ${this.color??"#3396ff"}\n    `,o.qy`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const t="light"===this.theme?this.size:this.size-32;return o.JW`
      <svg height=${t} width=${t}>
        ${s.generate({uri:this.uri,size:t,logoSize:this.arenaClear?0:t/4,dotColor:this.color})}
      </svg>
    `}templateVisual(){return this.imageSrc?o.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?o.qy`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:o.qy`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};p.styles=[l.W5,d],u([(0,r.MZ)()],p.prototype,"uri",void 0),u([(0,r.MZ)({type:Number})],p.prototype,"size",void 0),u([(0,r.MZ)()],p.prototype,"theme",void 0),u([(0,r.MZ)()],p.prototype,"imageSrc",void 0),u([(0,r.MZ)()],p.prototype,"alt",void 0),u([(0,r.MZ)()],p.prototype,"color",void 0),u([(0,r.MZ)({type:Boolean})],p.prototype,"arenaClear",void 0),u([(0,r.MZ)({type:Boolean})],p.prototype,"farcaster",void 0),p=u([(0,c.E)("wui-qr-code")],p)},90445:(t,e,i)=>{"use strict";i.d(e,{w:()=>o.w});var o=i(4537)},90521:(t,e,i)=>{"use strict";i.r(e),i.d(e,{AppKitAccountButton:()=>C,AppKitButton:()=>I,AppKitConnectButton:()=>N,AppKitNetworkButton:()=>H,W3mAccountButton:()=>k,W3mAccountSettingsView:()=>st,W3mAccountView:()=>Bt,W3mAllWalletsView:()=>Pe,W3mButton:()=>A,W3mChooseAccountNameView:()=>vo,W3mConnectButton:()=>P,W3mConnectView:()=>qi,W3mConnectWalletsView:()=>So,W3mConnectingExternalView:()=>Ji,W3mConnectingMultiChainView:()=>Yi,W3mConnectingWcBasicView:()=>ho,W3mConnectingWcView:()=>uo,W3mDownloadsView:()=>bo,W3mGetWalletView:()=>mo,W3mNetworkButton:()=>U,W3mNetworkSwitchView:()=>Mo,W3mNetworksView:()=>Do,W3mProfileView:()=>Kt,W3mRouter:()=>F.J,W3mSIWXSignMessageView:()=>sr,W3mSwitchActiveChainView:()=>Bo,W3mSwitchAddressView:()=>ee,W3mUnsupportedChainView:()=>Vo,W3mWalletCompatibleNetworksView:()=>Qo,W3mWhatIsANetworkView:()=>Ho,W3mWhatIsAWalletView:()=>Co});var o=i(48422),r=i(91427),a=i(39168),n=i(52819),s=i(14782),l=i(19400),c=i(58622),d=i(90101),u=i(92999),p=i(29327),h=i(72470),w=(i(31037),i(20766),i(82207),i(33165),i(56063)),g=i(71686),f=i(68664);i(83309),i(50409);const v=o.AH`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-color-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    background: var(--wui-color-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var b=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let m=class extends o.WF{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.loading=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return o.qy`
      <button
        ?disabled=${this.disabled}
        class=${(0,a.J)(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?g.Z.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return o.qy` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){const t=this.networkSrc?o.qy`<wui-image src=${this.networkSrc}></wui-image>`:o.qy`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `,e=this.loading?o.qy`<wui-loading-spinner size="md" color="fg-200"></wui-loading-spinner>`:o.qy`<wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>`;return o.qy`${t} ${e}`}return null}};m.styles=[w.W5,w.fD,v],b([(0,r.MZ)()],m.prototype,"networkSrc",void 0),b([(0,r.MZ)()],m.prototype,"avatarSrc",void 0),b([(0,r.MZ)()],m.prototype,"balance",void 0),b([(0,r.MZ)({type:Boolean})],m.prototype,"isUnsupportedChain",void 0),b([(0,r.MZ)({type:Boolean})],m.prototype,"disabled",void 0),b([(0,r.MZ)({type:Boolean})],m.prototype,"loading",void 0),b([(0,r.MZ)()],m.prototype,"address",void 0),b([(0,r.MZ)()],m.prototype,"profileName",void 0),b([(0,r.MZ)()],m.prototype,"charsStart",void 0),b([(0,r.MZ)()],m.prototype,"charsEnd",void 0),m=b([(0,f.E)("wui-account-button")],m);var y=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};class x extends o.WF{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.caipAddress=n.W.getAccountData(this.namespace)?.caipAddress,this.balanceVal=n.W.getAccountData(this.namespace)?.balance,this.balanceSymbol=n.W.getAccountData(this.namespace)?.balanceSymbol,this.profileName=n.W.getAccountData(this.namespace)?.profileName,this.profileImage=n.W.getAccountData(this.namespace)?.profileImage,this.network=n.W.getNetworkData(this.namespace)?.caipNetwork,this.networkImage=s.$.getNetworkImage(this.network),this.isSupported=!!l.H.state.allowUnsupportedChain||!n.W.state.activeChain||n.W.checkIfSupportedNetwork(n.W.state.activeChain)}firstUpdated(){const t=this.namespace;t?this.unsubscribe.push(n.W.subscribeChainProp("accountState",t=>{this.caipAddress=t?.caipAddress,this.balanceVal=t?.balance,this.balanceSymbol=t?.balanceSymbol,this.profileName=t?.profileName,this.profileImage=t?.profileImage},t),n.W.subscribeChainProp("networkState",e=>{this.network=e?.caipNetwork,this.isSupported=n.W.checkIfSupportedNetwork(t,e?.caipNetwork),this.networkImage=s.$.getNetworkImage(e?.caipNetwork)},t)):this.unsubscribe.push(c.j.subscribeNetworkImages(()=>{this.networkImage=s.$.getNetworkImage(this.network)}),n.W.subscribeKey("activeCaipAddress",t=>{this.caipAddress=t}),d.U.subscribeKey("balance",t=>this.balanceVal=t),d.U.subscribeKey("balanceSymbol",t=>this.balanceSymbol=t),d.U.subscribeKey("profileName",t=>this.profileName=t),d.U.subscribeKey("profileImage",t=>this.profileImage=t),n.W.subscribeKey("activeCaipNetwork",t=>{this.network=t,this.networkImage=s.$.getNetworkImage(t),this.isSupported=!t?.chainNamespace||n.W.checkIfSupportedNetwork(t?.chainNamespace),this.fetchNetworkImage(t)}))}updated(){this.fetchNetworkImage(this.network)}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(!n.W.state.activeChain)return null;const t="show"===this.balance,e="string"!=typeof this.balanceVal;return o.qy`
      <wui-account-button
        .disabled=${Boolean(this.disabled)}
        .isUnsupportedChain=${!l.H.state.allowUnsupportedChain&&!this.isSupported}
        address=${(0,a.J)(u.w.getPlainAddress(this.caipAddress))}
        profileName=${(0,a.J)(this.profileName)}
        networkSrc=${(0,a.J)(this.networkImage)}
        avatarSrc=${(0,a.J)(this.profileImage)}
        balance=${t?u.w.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid=${"account-button"+(this.namespace?`-${this.namespace}`:"")}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${e}
      >
      </wui-account-button>
    `}onClick(){this.isSupported||l.H.state.allowUnsupportedChain?p.W.open({namespace:this.namespace}):p.W.open({view:"UnsupportedChain"})}async fetchNetworkImage(t){t?.assets?.imageId&&(this.networkImage=await s.$.fetchNetworkImage(t?.assets?.imageId))}}y([(0,r.MZ)({type:Boolean})],x.prototype,"disabled",void 0),y([(0,r.MZ)()],x.prototype,"balance",void 0),y([(0,r.MZ)()],x.prototype,"charsStart",void 0),y([(0,r.MZ)()],x.prototype,"charsEnd",void 0),y([(0,r.MZ)()],x.prototype,"namespace",void 0),y([(0,r.wk)()],x.prototype,"caipAddress",void 0),y([(0,r.wk)()],x.prototype,"balanceVal",void 0),y([(0,r.wk)()],x.prototype,"balanceSymbol",void 0),y([(0,r.wk)()],x.prototype,"profileName",void 0),y([(0,r.wk)()],x.prototype,"profileImage",void 0),y([(0,r.wk)()],x.prototype,"network",void 0),y([(0,r.wk)()],x.prototype,"networkImage",void 0),y([(0,r.wk)()],x.prototype,"isSupported",void 0);let k=class extends x{};k=y([(0,h.EM)("w3m-account-button")],k);let C=class extends x{};C=y([(0,h.EM)("appkit-account-button")],C);const $=o.AH`
  :host {
    display: block;
    width: max-content;
  }
`;var E=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};class S extends o.WF{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.caipAddress=n.W.state.activeCaipAddress}firstUpdated(){this.namespace?this.unsubscribe.push(n.W.subscribeChainProp("accountState",t=>{this.caipAddress=t?.caipAddress},this.namespace)):this.unsubscribe.push(n.W.subscribeKey("activeCaipAddress",t=>this.caipAddress=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return this.caipAddress?o.qy`
          <appkit-account-button
            .disabled=${Boolean(this.disabled)}
            balance=${(0,a.J)(this.balance)}
            .charsStart=${(0,a.J)(this.charsStart)}
            .charsEnd=${(0,a.J)(this.charsEnd)}
            namespace=${(0,a.J)(this.namespace)}
          >
          </appkit-account-button>
        `:o.qy`
          <appkit-connect-button
            size=${(0,a.J)(this.size)}
            label=${(0,a.J)(this.label)}
            loadingLabel=${(0,a.J)(this.loadingLabel)}
            namespace=${(0,a.J)(this.namespace)}
          ></appkit-connect-button>
        `}}S.styles=$,E([(0,r.MZ)({type:Boolean})],S.prototype,"disabled",void 0),E([(0,r.MZ)()],S.prototype,"balance",void 0),E([(0,r.MZ)()],S.prototype,"size",void 0),E([(0,r.MZ)()],S.prototype,"label",void 0),E([(0,r.MZ)()],S.prototype,"loadingLabel",void 0),E([(0,r.MZ)()],S.prototype,"charsStart",void 0),E([(0,r.MZ)()],S.prototype,"charsEnd",void 0),E([(0,r.MZ)()],S.prototype,"namespace",void 0),E([(0,r.wk)()],S.prototype,"caipAddress",void 0);let A=class extends S{};A=E([(0,h.EM)("w3m-button")],A);let I=class extends S{};I=E([(0,h.EM)("appkit-button")],I);const R=o.AH`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-color-gray-glass-010);
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var T=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let M=class extends o.WF{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const t="md"===this.size?"paragraph-600":"small-600";return o.qy`
      <button data-size=${this.size} ?disabled=${this.loading}>
        ${this.loadingTemplate()}
        <wui-text variant=${t} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?o.qy`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};M.styles=[w.W5,w.fD,R],T([(0,r.MZ)()],M.prototype,"size",void 0),T([(0,r.MZ)({type:Boolean})],M.prototype,"loading",void 0),M=T([(0,f.E)("wui-connect-button")],M);var W=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};class O extends o.WF{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=p.W.state.open,this.loading=this.namespace?p.W.state.loadingNamespaceMap.get(this.namespace):p.W.state.loading,this.unsubscribe.push(p.W.subscribe(t=>{this.open=t.open,this.loading=this.namespace?t.loadingNamespaceMap.get(this.namespace):t.loading}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return o.qy`
      <wui-connect-button
        size=${(0,a.J)(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${"connect-button"+(this.namespace?`-${this.namespace}`:"")}
      >
        ${this.loading?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?p.W.close():this.loading||p.W.open({view:"Connect",namespace:this.namespace})}}W([(0,r.MZ)()],O.prototype,"size",void 0),W([(0,r.MZ)()],O.prototype,"label",void 0),W([(0,r.MZ)()],O.prototype,"loadingLabel",void 0),W([(0,r.MZ)()],O.prototype,"namespace",void 0),W([(0,r.wk)()],O.prototype,"open",void 0),W([(0,r.wk)()],O.prototype,"loading",void 0);let P=class extends O{};P=W([(0,h.EM)("w3m-connect-button")],P);let N=class extends O{};N=W([(0,h.EM)("appkit-connect-button")],N);var j=i(34325);const q=o.AH`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }
`;var D=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let Z=class extends o.WF{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return o.qy`
      <button data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?o.qy`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?o.qy`<wui-image src=${this.imageSrc}></wui-image>`:o.qy`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Z.styles=[w.W5,w.fD,q],D([(0,r.MZ)()],Z.prototype,"imageSrc",void 0),D([(0,r.MZ)({type:Boolean})],Z.prototype,"isUnsupportedChain",void 0),D([(0,r.MZ)({type:Boolean})],Z.prototype,"disabled",void 0),Z=D([(0,f.E)("wui-network-button")],Z);const z=o.AH`
  :host {
    display: block;
    width: max-content;
  }
`;var L=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};class B extends o.WF{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=n.W.state.activeCaipNetwork,this.networkImage=s.$.getNetworkImage(this.network),this.caipAddress=n.W.state.activeCaipAddress,this.loading=p.W.state.loading,this.isSupported=!!l.H.state.allowUnsupportedChain||!n.W.state.activeChain||n.W.checkIfSupportedNetwork(n.W.state.activeChain),this.unsubscribe.push(c.j.subscribeNetworkImages(()=>{this.networkImage=s.$.getNetworkImage(this.network)}),n.W.subscribeKey("activeCaipAddress",t=>{this.caipAddress=t}),n.W.subscribeKey("activeCaipNetwork",t=>{this.network=t,this.networkImage=s.$.getNetworkImage(t),this.isSupported=!t?.chainNamespace||n.W.checkIfSupportedNetwork(t.chainNamespace),s.$.fetchNetworkImage(t?.assets?.imageId)}),p.W.subscribeKey("loading",t=>this.loading=t))}firstUpdated(){s.$.fetchNetworkImage(this.network?.assets?.imageId)}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=!this.network||n.W.checkIfSupportedNetwork(this.network.chainNamespace);return o.qy`
      <wui-network-button
        .disabled=${Boolean(this.disabled||this.loading)}
        .isUnsupportedChain=${!l.H.state.allowUnsupportedChain&&!t}
        imageSrc=${(0,a.J)(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.network?this.isSupported||l.H.state.allowUnsupportedChain?this.network.name:"Switch Network":this.label?this.label:this.caipAddress?"Unknown Network":"Select Network"}onClick(){this.loading||(j.E.sendEvent({type:"track",event:"CLICK_NETWORKS"}),p.W.open({view:"Networks"}))}}B.styles=z,L([(0,r.MZ)({type:Boolean})],B.prototype,"disabled",void 0),L([(0,r.MZ)({type:String})],B.prototype,"label",void 0),L([(0,r.wk)()],B.prototype,"network",void 0),L([(0,r.wk)()],B.prototype,"networkImage",void 0),L([(0,r.wk)()],B.prototype,"caipAddress",void 0),L([(0,r.wk)()],B.prototype,"loading",void 0),L([(0,r.wk)()],B.prototype,"isSupported",void 0);let U=class extends B{};U=L([(0,h.EM)("w3m-network-button")],U);let H=class extends B{};H=L([(0,h.EM)("appkit-network-button")],H);var F=i(14080),_=i(76539),V=i(30413),J=i(13947),K=i(7380),G=i(33461),Y=i(90336),X=i(98558);i(43508),i(46664),i(38371),i(59481),i(63718);const Q=o.AH`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-accent-glass-010);
  }

  button:hover {
    background-color: var(--wui-color-accent-glass-015) !important;
  }

  button:active {
    background-color: var(--wui-color-accent-glass-020) !important;
  }
`;var tt=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let et=class extends o.WF{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return o.qy`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};et.styles=[w.W5,w.fD,Q],tt([(0,r.MZ)()],et.prototype,"label",void 0),tt([(0,r.MZ)()],et.prototype,"description",void 0),tt([(0,r.MZ)()],et.prototype,"icon",void 0),et=tt([(0,f.E)("wui-notice-card")],et),i(79932);var it=i(98096),ot=i(8735),rt=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let at=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.socialProvider=ot.i.getConnectedSocialProvider(),this.socialUsername=ot.i.getConnectedSocialUsername(),this.namespace=n.W.state.activeChain,this.unsubscribe.push(n.W.subscribeKey("activeChain",t=>{this.namespace=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=V.a.getConnectorId(this.namespace),e=V.a.getAuthConnector();if(!e||t!==_.o.CONNECTOR_ID.AUTH)return this.style.cssText="display: none",null;const i=e.provider.getEmail()??"";return i||this.socialUsername?o.qy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon=${this.socialProvider??"mail"}
        iconSize=${this.socialProvider?"xxl":"sm"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(i,this.socialProvider)}}
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.getAuthName(i)}</wui-text>
      </wui-list-item>
    `:(this.style.cssText="display: none",null)}onGoToUpdateEmail(t,e){e||G.I.push("UpdateEmailWallet",{email:t,redirectView:"Account"})}getAuthName(t){return this.socialUsername?"discord"===this.socialProvider&&this.socialUsername.endsWith("0")?this.socialUsername.slice(0,-1):this.socialUsername:t.length>30?`${t.slice(0,-3)}...`:t}};rt([(0,r.wk)()],at.prototype,"namespace",void 0),at=rt([(0,h.EM)("w3m-account-auth-button")],at);var nt=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let st=class extends o.WF{constructor(){super(),this.usubscribe=[],this.networkImages=c.j.state.networkImages,this.address=d.U.state.address,this.profileImage=d.U.state.profileImage,this.profileName=d.U.state.profileName,this.network=n.W.state.activeCaipNetwork,this.preferredAccountTypes=d.U.state.preferredAccountTypes,this.disconnecting=!1,this.loading=!1,this.switched=!1,this.text="",this.usubscribe.push(d.U.subscribe(t=>{t.address&&(this.address=t.address,this.profileImage=t.profileImage,this.profileName=t.profileName,this.preferredAccountTypes=t.preferredAccountTypes)}),d.U.subscribeKey("preferredAccountTypes",t=>this.preferredAccountTypes=t),n.W.subscribeKey("activeCaipNetwork",t=>{t?.id&&(this.network=t)}))}disconnectedCallback(){this.usubscribe.forEach(t=>t())}render(){if(!this.address)throw new Error("w3m-account-settings-view: No account provided");const t=this.networkImages[this.network?.assets?.imageId??""];return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="l"
        .padding=${["0","xl","m","xl"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${(0,a.J)(this.profileImage)}
          size="2lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
              ${h.Zv.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0","l","m","l"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            .variant=${t?"image":"icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${(0,a.J)(t)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${this.network?.name??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){const t=this.network?.chainNamespace,e=V.a.getConnectorId(t),i=V.a.getAuthConnector();return n.W.checkIfNamesSupported()&&i&&e===_.o.CONNECTOR_ID.AUTH&&!this.profileName?o.qy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="id"
        iconSize="sm"
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Choose account name </wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){const t=this.network?.chainNamespace,e=V.a.getConnectorId(t),i=V.a.getAuthConnector(),{origin:r}=location;return!i||e!==_.o.CONNECTOR_ID.AUTH||r.includes(J.oU.SECURE_SITE)?null:o.qy`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){const t=n.W.getAllRequestedCaipNetworks(),e=!!t&&t.length>1,i=t?.find(({id:t})=>t===this.network?.id);return e||!i}onCopyAddress(){try{this.address&&(u.w.copyToClopboard(this.address),K.P.showSuccess("Address copied"))}catch{K.P.showError("Failed to copy")}}togglePreferredAccountBtnTemplate(){const t=this.network?.chainNamespace,e=n.W.checkIfSmartAccountEnabled(),i=V.a.getConnectorId(t);return V.a.getAuthConnector()&&i===_.o.CONNECTOR_ID.AUTH&&e?(this.switched||(this.text=this.preferredAccountTypes?.[t]===it.Vl.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account"),o.qy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>
      </wui-list-item>
    `):null}onChooseName(){G.I.push("ChooseAccountName")}async changePreferredAccountType(){const t=this.network?.chainNamespace,e=n.W.checkIfSmartAccountEnabled(),i=this.preferredAccountTypes?.[t]!==it.Vl.ACCOUNT_TYPES.SMART_ACCOUNT&&e?it.Vl.ACCOUNT_TYPES.SMART_ACCOUNT:it.Vl.ACCOUNT_TYPES.EOA;V.a.getAuthConnector()&&(this.loading=!0,await Y.x.setPreferredAccountType(i,t),this.text=i===it.Vl.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account",this.switched=!0,X.R.resetSend(),this.loading=!1,this.requestUpdate())}onNetworks(){this.isAllowedNetworkSwitch()&&G.I.push("Networks")}async onDisconnect(){try{this.disconnecting=!0,await Y.x.disconnect(),p.W.close()}catch{j.E.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),K.P.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onGoToUpgradeView(){j.E.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),G.I.push("UpgradeEmailWallet")}};nt([(0,r.wk)()],st.prototype,"address",void 0),nt([(0,r.wk)()],st.prototype,"profileImage",void 0),nt([(0,r.wk)()],st.prototype,"profileName",void 0),nt([(0,r.wk)()],st.prototype,"network",void 0),nt([(0,r.wk)()],st.prototype,"preferredAccountTypes",void 0),nt([(0,r.wk)()],st.prototype,"disconnecting",void 0),nt([(0,r.wk)()],st.prototype,"loading",void 0),nt([(0,r.wk)()],st.prototype,"switched",void 0),nt([(0,r.wk)()],st.prototype,"text",void 0),st=nt([(0,h.EM)("w3m-account-settings-view")],st),i(80659),i(37498);const lt=o.AH`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var ct=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let dt=class extends o.WF{constructor(){super(...arguments),this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="mail"}render(){const t=n.W.state.activeChain,e=V.a.getConnectorId(t)===_.o.CONNECTOR_ID.AUTH;return o.qy`<button data-testid="wui-profile-button" @click=${this.handleClick}>
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${e?this.getIconTemplate(this.icon):""}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${g.Z.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name="copy" id="copy-address"></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}handleClick(t){t.target instanceof HTMLElement&&"copy-address"===t.target.id?this.onCopyClick?.(t):this.onProfileClick?.(t)}getIconTemplate(t){return o.qy`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="${t||"networkPlaceholder"}"
      ></wui-icon-box>
    `}};dt.styles=[w.W5,w.fD,lt],ct([(0,r.MZ)()],dt.prototype,"avatarSrc",void 0),ct([(0,r.MZ)()],dt.prototype,"profileName",void 0),ct([(0,r.MZ)()],dt.prototype,"address",void 0),ct([(0,r.MZ)()],dt.prototype,"icon",void 0),ct([(0,r.MZ)()],dt.prototype,"onProfileClick",void 0),ct([(0,r.MZ)()],dt.prototype,"onCopyClick",void 0),dt=ct([(0,f.E)("wui-profile-button-v2")],dt);const ut=o.AH`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var pt=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let ht=class extends o.WF{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`\n      --local-tab: ${this.activeTab};\n      --local-tab-width: ${this.localTabWidth};\n    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((t,e)=>{const i=e===this.activeTab;return o.qy`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(e)}
          data-active=${i}
          data-testid="tab-${t.label?.toLowerCase()}"
        >
          ${this.iconTemplate(t)}
          <wui-text variant="small-600" color="inherit"> ${t.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(t){return t.icon?o.qy`<wui-icon size="xs" color="inherit" name=${t.icon}></wui-icon>`:null}onTabClick(t){this.buttons&&this.animateTabs(t,!1),this.activeTab=t,this.onTabChange(t)}animateTabs(t,e){const i=this.buttons[this.activeTab],o=this.buttons[t],r=i?.querySelector("wui-text"),a=o?.querySelector("wui-text"),n=o?.getBoundingClientRect(),s=a?.getBoundingClientRect();i&&r&&!e&&t!==this.activeTab&&(r.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),i.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),o&&n&&s&&a&&(t!==this.activeTab||e)&&(this.localTabWidth=`${Math.round(n.width+s.width)+6}px`,o.animate([{width:`${n.width+s.width}px`}],{duration:e?0:500,fill:"forwards",easing:"ease"}),a.animate([{opacity:1}],{duration:e?0:125,delay:e?0:200,fill:"forwards",easing:"ease"}))}};ht.styles=[w.W5,w.fD,ut],pt([(0,r.MZ)({type:Array})],ht.prototype,"tabs",void 0),pt([(0,r.MZ)()],ht.prototype,"onTabChange",void 0),pt([(0,r.MZ)({type:Array})],ht.prototype,"buttons",void 0),pt([(0,r.MZ)({type:Boolean})],ht.prototype,"disabled",void 0),pt([(0,r.MZ)()],ht.prototype,"localTabWidth",void 0),pt([(0,r.wk)()],ht.prototype,"activeTab",void 0),pt([(0,r.wk)()],ht.prototype,"isDense",void 0),ht=pt([(0,f.E)("wui-tabs")],ht),i(97127);const wt=o.AH`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: 24px;
    transition: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;var gt=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let ft=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.caipAddress=d.U.state.caipAddress,this.address=u.w.getPlainAddress(d.U.state.caipAddress),this.allAccounts=d.U.state.allAccounts,this.profileImage=d.U.state.profileImage,this.profileName=d.U.state.profileName,this.disconnecting=!1,this.balance=d.U.state.balance,this.balanceSymbol=d.U.state.balanceSymbol,this.features=l.H.state.features,this.remoteFeatures=l.H.state.remoteFeatures,this.namespace=n.W.state.activeChain,this.chainId=n.W.state.activeCaipNetwork?.id,this.unsubscribe.push(d.U.subscribeKey("caipAddress",t=>{this.address=u.w.getPlainAddress(t),this.caipAddress=t}),d.U.subscribeKey("balance",t=>this.balance=t),d.U.subscribeKey("balanceSymbol",t=>this.balanceSymbol=t),d.U.subscribeKey("profileName",t=>this.profileName=t),d.U.subscribeKey("profileImage",t=>this.profileImage=t),l.H.subscribeKey("features",t=>this.features=t),l.H.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t),d.U.subscribeKey("allAccounts",t=>{this.allAccounts=t}),l.H.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t),n.W.subscribeKey("activeChain",t=>this.namespace=t),n.W.subscribeKey("activeCaipNetwork",t=>{if(t){const[e,i]=t?.caipNetworkId?.split(":")||[];e&&i&&(this.namespace=e,this.chainId=i)}}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(!this.caipAddress)return null;const t=n.W.state.activeChain!==_.o.CHAIN.SOLANA&&this.allAccounts.length>1;return o.qy`<wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        ${t?this.multiAccountTemplate():this.singleAccountTemplate()}
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-200">
            ${u.w.formatBalance(this.balance,this.balanceSymbol)}
          </wui-text>
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}onrampTemplate(){if(!this.namespace)return null;const t=this.remoteFeatures?.onramp,e=J.oU.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace);return t&&e?o.qy`
      <wui-list-item
        data-testid="w3m-account-default-onramp-button"
        iconVariant="blue"
        icon="card"
        ?chevron=${!0}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `:null}orderedFeaturesTemplate(){return(this.features?.walletFeaturesOrder||J.oU.DEFAULT_FEATURES.walletFeaturesOrder).map(t=>{switch(t){case"onramp":return this.onrampTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}})}activityTemplate(){return this.namespace&&this.remoteFeatures?.activity&&J.oU.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace)?o.qy` <wui-list-item
          iconVariant="blue"
          icon="clock"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
          data-testid="w3m-account-default-activity-button"
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>`:null}swapsTemplate(){const t=this.remoteFeatures?.swaps,e=n.W.state.activeChain===_.o.CHAIN.EVM;return t&&e?o.qy`
      <wui-list-item
        iconVariant="blue"
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
        data-testid="w3m-account-default-swaps-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Swap</wui-text>
      </wui-list-item>
    `:null}sendTemplate(){const t=this.features?.send,e=n.W.state.activeChain,i=J.oU.SEND_SUPPORTED_NAMESPACES.includes(e);return t&&i?o.qy`
      <wui-list-item
        iconVariant="blue"
        icon="send"
        ?chevron=${!0}
        @click=${this.handleClickSend.bind(this)}
        data-testid="w3m-account-default-send-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Send</wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){const t=n.W.state.activeChain,e=V.a.getConnectorId(t),i=V.a.getAuthConnector(),{origin:r}=location;return!i||e!==_.o.CONNECTOR_ID.AUTH||r.includes(J.oU.SECURE_SITE)?null:o.qy`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleSwitchAccountsView(){G.I.push("SwitchAddress")}handleClickPay(){G.I.push("OnRampProviders")}handleClickSwap(){G.I.push("Swap")}handleClickSend(){G.I.push("WalletSend")}explorerBtnTemplate(){return d.U.state.addressExplorerUrl?o.qy`
      <wui-button size="md" variant="neutral" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}singleAccountTemplate(){return o.qy`
      <wui-avatar
        alt=${(0,a.J)(this.caipAddress)}
        address=${(0,a.J)(u.w.getPlainAddress(this.caipAddress))}
        imageSrc=${(0,a.J)(null===this.profileImage?void 0:this.profileImage)}
        data-testid="single-account-avatar"
      ></wui-avatar>
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex gap="3xs" alignItems="center" justifyContent="center">
          <wui-text variant="large-600" color="fg-100">
            ${this.profileName?h.Zv.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):h.Zv.getTruncateString({string:this.address||"",charsStart:4,charsEnd:4,truncate:"middle"})}
          </wui-text>
          <wui-icon-link
            size="md"
            icon="copy"
            iconColor="fg-200"
            @click=${this.onCopyAddress}
          ></wui-icon-link> </wui-flex
      ></wui-flex>
    `}multiAccountTemplate(){if(!this.address)throw new Error("w3m-account-view: No account provided");const t=this.allAccounts.find(t=>t.address===this.address),e=d.U.state.addressLabels.get(this.address);return"bip122"===this.namespace?this.btcAccountsTemplate():o.qy`
      <wui-profile-button-v2
        .onProfileClick=${this.handleSwitchAccountsView.bind(this)}
        address=${(0,a.J)(this.address)}
        icon="${t?.type===it.Vl.ACCOUNT_TYPES.SMART_ACCOUNT&&n.W.state.activeChain===_.o.CHAIN.EVM?"lightbulb":"mail"}"
        avatarSrc=${(0,a.J)(this.profileImage?this.profileImage:void 0)}
        profileName=${(0,a.J)(e||this.profileName)}
        .onCopyClick=${this.onCopyAddress.bind(this)}
      ></wui-profile-button-v2>
    `}btcAccountsTemplate(){return o.qy`<wui-flex gap="m" alignItems="center" flexDirection="column">
      <wui-avatar
        .imageSrc=${(0,a.J)(this.profileImage?this.profileImage:void 0)}
        alt=${this.address}
        address=${this.address}
      ></wui-avatar>
      <wui-tabs
        .tabs=${[{label:"Payment"},{label:"Ordinals"}]}
        .onTabChange=${t=>d.U.setCaipAddress(`bip122:${this.chainId}:${this.allAccounts[t]?.address||""}`,this.namespace)}
      ></wui-tabs>
      <wui-flex gap="xs" alignItems="center" justifyContent="center">
        <wui-text variant="large-600" color="fg-100">
          ${h.Zv.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        </wui-text>
        <wui-icon-link
          size="md"
          icon="copy"
          iconColor="fg-200"
          @click=${this.onCopyAddress}
        ></wui-icon-link>
      </wui-flex>
    </wui-flex>`}onCopyAddress(){try{this.address&&(u.w.copyToClopboard(this.address),K.P.showSuccess("Address copied"))}catch{K.P.showError("Failed to copy")}}onTransactions(){const t=n.W.state.activeChain;j.E.sendEvent({type:"track",event:"CLICK_TRANSACTIONS",properties:{isSmartAccount:d.U.state.preferredAccountTypes?.[t]===it.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),G.I.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0,await Y.x.disconnect(),p.W.close()}catch{j.E.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),K.P.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){const t=d.U.state.addressExplorerUrl;t&&u.w.openHref(t,"_blank")}onGoToUpgradeView(){j.E.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),G.I.push("UpgradeEmailWallet")}};ft.styles=wt,gt([(0,r.wk)()],ft.prototype,"caipAddress",void 0),gt([(0,r.wk)()],ft.prototype,"address",void 0),gt([(0,r.wk)()],ft.prototype,"allAccounts",void 0),gt([(0,r.wk)()],ft.prototype,"profileImage",void 0),gt([(0,r.wk)()],ft.prototype,"profileName",void 0),gt([(0,r.wk)()],ft.prototype,"disconnecting",void 0),gt([(0,r.wk)()],ft.prototype,"balance",void 0),gt([(0,r.wk)()],ft.prototype,"balanceSymbol",void 0),gt([(0,r.wk)()],ft.prototype,"features",void 0),gt([(0,r.wk)()],ft.prototype,"remoteFeatures",void 0),gt([(0,r.wk)()],ft.prototype,"namespace",void 0),gt([(0,r.wk)()],ft.prototype,"chainId",void 0),ft=gt([(0,h.EM)("w3m-account-default-widget")],ft);const vt=o.AH`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`;var bt=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let mt=class extends o.WF{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return o.qy`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};mt.styles=[w.W5,vt],bt([(0,r.MZ)()],mt.prototype,"dollars",void 0),bt([(0,r.MZ)()],mt.prototype,"pennies",void 0),mt=bt([(0,f.E)("wui-balance")],mt),i(59087);const yt=o.AH`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var xt=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let kt=class extends o.WF{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="chevronBottom"}render(){return o.qy`<button data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${g.Z.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}networkImageTemplate(){return this.networkSrc?o.qy`<wui-image src=${this.networkSrc}></wui-image>`:o.qy`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};kt.styles=[w.W5,w.fD,yt],xt([(0,r.MZ)()],kt.prototype,"networkSrc",void 0),xt([(0,r.MZ)()],kt.prototype,"avatarSrc",void 0),xt([(0,r.MZ)()],kt.prototype,"profileName",void 0),xt([(0,r.MZ)()],kt.prototype,"address",void 0),xt([(0,r.MZ)()],kt.prototype,"icon",void 0),kt=xt([(0,f.E)("wui-profile-button")],kt);const Ct=o.AH`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
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
`;var $t=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let Et=class extends o.WF{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.message=""}render(){return this.dataset.variant=this.variant,o.qy`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${"fill"===this.variant?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};Et.styles=[w.W5,w.fD,Ct],$t([(0,r.MZ)()],Et.prototype,"placement",void 0),$t([(0,r.MZ)()],Et.prototype,"variant",void 0),$t([(0,r.MZ)()],Et.prototype,"message",void 0),Et=$t([(0,f.E)("wui-tooltip")],Et);var St=i(44039);const At=t=>Boolean(t)&&t===_.o.CHAIN.EVM?!1===l.H.state.remoteFeatures?.activity?St.o.ACCOUNT_TABS.filter(t=>"Activity"!==t.label):St.o.ACCOUNT_TABS:[];i(72482);const It=o.AH`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;let Rt=class extends o.WF{render(){return o.qy`<w3m-activity-list page="account"></w3m-activity-list>`}};Rt.styles=It,Rt=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n}([(0,h.EM)("w3m-account-activity-widget")],Rt),i(52206),i(38991);const Tt=o.AH`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;let Mt=class extends o.WF{render(){return o.qy`${this.nftTemplate()}`}nftTemplate(){return o.qy` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
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
        <wui-text
          variant="paragraph-500"
          align="center"
          color="fg-100"
          data-testid="nft-template-title"
          >Coming soon</wui-text
        >
        <wui-text
          variant="small-400"
          align="center"
          color="fg-200"
          data-testid="nft-template-description"
          >Stay tuned for our upcoming NFT feature</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)} data-testid="link-receive-funds"
        >Receive funds</wui-link
      >
    </wui-flex>`}onReceiveClick(){G.I.push("WalletReceive")}};Mt.styles=Tt,Mt=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n}([(0,h.EM)("w3m-account-nfts-widget")],Mt),i(92490);const Wt=o.AH`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`;var Ot=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let Pt=class extends o.WF{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.iconBackgroundColor="accent-100",this.iconColor="accent-100",this.disabled=!1}render(){return o.qy`
      <button ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `}titleTemplate(){return this.tag?o.qy` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`:o.qy`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};Pt.styles=[w.W5,w.fD,Wt],Ot([(0,r.MZ)()],Pt.prototype,"icon",void 0),Ot([(0,r.MZ)()],Pt.prototype,"text",void 0),Ot([(0,r.MZ)()],Pt.prototype,"description",void 0),Ot([(0,r.MZ)()],Pt.prototype,"tag",void 0),Ot([(0,r.MZ)()],Pt.prototype,"iconBackgroundColor",void 0),Ot([(0,r.MZ)()],Pt.prototype,"iconColor",void 0),Ot([(0,r.MZ)({type:Boolean})],Pt.prototype,"disabled",void 0),Pt=Ot([(0,f.E)("wui-list-description")],Pt),i(46860);const Nt=o.AH`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;var jt=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let qt=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tokenBalance=d.U.state.tokenBalance,this.remoteFeatures=l.H.state.remoteFeatures,this.unsubscribe.push(d.U.subscribe(t=>{this.tokenBalance=t.tokenBalance}),l.H.subscribeKey("remoteFeatures",t=>{this.remoteFeatures=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return o.qy`${this.tokenTemplate()}`}tokenTemplate(){return this.tokenBalance&&this.tokenBalance?.length>0?o.qy`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`:o.qy` <wui-flex flexDirection="column" gap="xs"
      >${this.onRampTemplate()}
      <wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="receive-funds"
      ></wui-list-description
    ></wui-flex>`}onRampTemplate(){return this.remoteFeatures?.onramp?o.qy`<wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="buy-crypto"
      ></wui-list-description>`:o.qy``}tokenItemTemplate(){return this.tokenBalance?.map(t=>o.qy`<wui-list-token
          tokenName=${t.name}
          tokenImageUrl=${t.iconUrl}
          tokenAmount=${t.quantity.numeric}
          tokenValue=${t.value}
          tokenCurrency=${t.symbol}
        ></wui-list-token>`)}onReceiveClick(){G.I.push("WalletReceive")}onBuyClick(){const t=n.W.state.activeChain;j.E.sendEvent({type:"track",event:"SELECT_BUY_CRYPTO",properties:{isSmartAccount:d.U.state.preferredAccountTypes?.[t]===it.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),G.I.push("OnRampProviders")}};qt.styles=Nt,jt([(0,r.wk)()],qt.prototype,"tokenBalance",void 0),jt([(0,r.wk)()],qt.prototype,"remoteFeatures",void 0),qt=jt([(0,h.EM)("w3m-account-tokens-widget")],qt),i(25068),i(77887);const Dt=o.AH`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var Zt=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let zt=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.address=d.U.state.address,this.profileImage=d.U.state.profileImage,this.profileName=d.U.state.profileName,this.network=n.W.state.activeCaipNetwork,this.currentTab=d.U.state.currentTab,this.tokenBalance=d.U.state.tokenBalance,this.features=l.H.state.features,this.remoteFeatures=l.H.state.remoteFeatures,this.networkImage=s.$.getNetworkImage(this.network),this.unsubscribe.push(c.j.subscribeNetworkImages(()=>{this.networkImage=s.$.getNetworkImage(this.network)}),d.U.subscribe(t=>{t.address?(this.address=t.address,this.profileImage=t.profileImage,this.profileName=t.profileName,this.currentTab=t.currentTab,this.tokenBalance=t.tokenBalance):p.W.close()}),n.W.subscribeKey("activeCaipNetwork",t=>{this.network=t,this.networkImage=s.$.getNetworkImage(this.network)}),l.H.subscribeKey("features",t=>this.features=t),l.H.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t)),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),clearInterval(this.watchTokenBalance)}firstUpdated(){d.U.fetchTokenBalance()}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");return o.qy`<wui-flex
      flexDirection="column"
      .padding=${["0","xl","m","xl"]}
      alignItems="center"
      gap="m"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${(0,a.J)(this.address)}
        networkSrc=${(0,a.J)(this.networkImage)}
        icon="chevronBottom"
        avatarSrc=${(0,a.J)(this.profileImage?this.profileImage:void 0)}
        profileName=${(0,a.J)(this.profileName??void 0)}
        data-testid="w3m-profile-button"
      ></wui-profile-button>

      ${this.tokenBalanceTemplate()} ${this.orderedWalletFeatures()} ${this.tabsTemplate()}
      ${this.listContentTemplate()}
    </wui-flex>`}orderedWalletFeatures(){const t=this.features?.walletFeaturesOrder||J.oU.DEFAULT_FEATURES.walletFeaturesOrder;return t.every(t=>"send"===t||"receive"===t?!this.features?.[t]:"swaps"!==t&&"onramp"!==t||!this.remoteFeatures?.[t])?null:o.qy`<wui-flex gap="s">
      ${t.map(t=>{switch(t){case"onramp":return this.onrampTemplate();case"swaps":return this.swapsTemplate();case"receive":return this.receiveTemplate();case"send":return this.sendTemplate();default:return null}})}
    </wui-flex>`}onrampTemplate(){const t=this.remoteFeatures?.onramp;return t?o.qy`
      <w3m-tooltip-trigger text="Buy">
        <wui-icon-button
          data-testid="wallet-features-onramp-button"
          @click=${this.onBuyClick.bind(this)}
          icon="card"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}swapsTemplate(){const t=this.remoteFeatures?.swaps,e=n.W.state.activeChain===_.o.CHAIN.EVM;return t&&e?o.qy`
      <w3m-tooltip-trigger text="Swap">
        <wui-icon-button
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          icon="recycleHorizontal"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}receiveTemplate(){const t=this.features?.receive;return t?o.qy`
      <w3m-tooltip-trigger text="Receive">
        <wui-icon-button
          data-testid="wallet-features-receive-button"
          @click=${this.onReceiveClick.bind(this)}
          icon="arrowBottomCircle"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}sendTemplate(){const t=this.features?.send,e=n.W.state.activeChain,i=J.oU.SEND_SUPPORTED_NAMESPACES.includes(e);return t&&i?o.qy`
      <w3m-tooltip-trigger text="Send">
        <wui-icon-button
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          icon="send"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}watchSwapValues(){this.watchTokenBalance=setInterval(()=>d.U.fetchTokenBalance(t=>this.onTokenBalanceError(t)),1e4)}onTokenBalanceError(t){t instanceof Error&&t.cause instanceof Response&&t.cause.status===_.o.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE&&clearInterval(this.watchTokenBalance)}listContentTemplate(){return 0===this.currentTab?o.qy`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:1===this.currentTab?o.qy`<w3m-account-nfts-widget></w3m-account-nfts-widget>`:2===this.currentTab?o.qy`<w3m-account-activity-widget></w3m-account-activity-widget>`:o.qy`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){if(this.tokenBalance&&this.tokenBalance?.length>=0){const t=u.w.calculateBalance(this.tokenBalance),{dollars:e="0",pennies:i="00"}=u.w.formatTokenBalance(t);return o.qy`<wui-balance dollars=${e} pennies=${i}></wui-balance>`}return o.qy`<wui-balance dollars="0" pennies="00"></wui-balance>`}tabsTemplate(){const t=At(n.W.state.activeChain);if(0===t.length)return null;let e="104px";return e=u.w.isMobile()&&window.innerWidth<430?(window.innerWidth-48)/t.length+"px":2===t.length?"156px":"104px",o.qy`<wui-tabs
      .onTabChange=${this.onTabChange.bind(this)}
      .activeTab=${this.currentTab}
      localTabWidth=${e}
      .tabs=${t}
    ></wui-tabs>`}onTabChange(t){d.U.setCurrentTab(t)}onProfileButtonClick(){const{allAccounts:t}=d.U.state;t.length>1?G.I.push("Profile"):G.I.push("AccountSettings")}onBuyClick(){G.I.push("OnRampProviders")}onSwapClick(){const t=n.W.state.activeChain;this.network?.caipNetworkId&&!J.oU.SWAP_SUPPORTED_NETWORKS.includes(this.network?.caipNetworkId)?G.I.push("UnsupportedChain",{swapUnsupportedChain:!0}):(j.E.sendEvent({type:"track",event:"OPEN_SWAP",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:d.U.state.preferredAccountTypes?.[t]===it.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),G.I.push("Swap"))}onReceiveClick(){G.I.push("WalletReceive")}onSendClick(){const t=n.W.state.activeChain;j.E.sendEvent({type:"track",event:"OPEN_SEND",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:d.U.state.preferredAccountTypes?.[t]===it.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),G.I.push("WalletSend")}};zt.styles=Dt,Zt([(0,r.wk)()],zt.prototype,"watchTokenBalance",void 0),Zt([(0,r.wk)()],zt.prototype,"address",void 0),Zt([(0,r.wk)()],zt.prototype,"profileImage",void 0),Zt([(0,r.wk)()],zt.prototype,"profileName",void 0),Zt([(0,r.wk)()],zt.prototype,"network",void 0),Zt([(0,r.wk)()],zt.prototype,"currentTab",void 0),Zt([(0,r.wk)()],zt.prototype,"tokenBalance",void 0),Zt([(0,r.wk)()],zt.prototype,"features",void 0),Zt([(0,r.wk)()],zt.prototype,"remoteFeatures",void 0),Zt([(0,r.wk)()],zt.prototype,"networkImage",void 0),zt=Zt([(0,h.EM)("w3m-account-wallet-features-widget")],zt);var Lt=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let Bt=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.namespace=n.W.state.activeChain,this.unsubscribe.push(n.W.subscribeKey("activeChain",t=>{this.namespace=t}))}render(){if(!this.namespace)return null;const t=V.a.getConnectorId(this.namespace),e=V.a.getAuthConnector();return o.qy`
      ${e&&t===_.o.CONNECTOR_ID.AUTH?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return o.qy`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return o.qy`<w3m-account-default-widget></w3m-account-default-widget>`}};Lt([(0,r.wk)()],Bt.prototype,"namespace",void 0),Bt=Lt([(0,h.EM)("w3m-account-view")],Bt);var Ut=i(19220);const Ht=o.AH`
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

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }
  .address {
    color: var(--wui-color-fg-base-100);
  }
  .address-description {
    text-transform: capitalize;
    color: var(--wui-color-fg-base-200);
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;var Ft=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let _t=class extends o.WF{constructor(){super(...arguments),this.accountAddress="",this.accountType="",this.labels=d.U.state.addressLabels,this.caipNetwork=n.W.state.activeCaipNetwork,this.socialProvider=ot.i.getConnectedSocialProvider(),this.balance=0,this.fetchingBalance=!0,this.shouldShowIcon=!1,this.selected=!1}connectedCallback(){super.connectedCallback(),Ut.T.getBalance(this.accountAddress,this.caipNetwork?.caipNetworkId).then(t=>{let e=this.balance;t.balances.length>0&&(e=t.balances.reduce((t,e)=>t+(e?.value||0),0)),this.balance=e,this.fetchingBalance=!1,this.requestUpdate()}).catch(()=>{this.fetchingBalance=!1,this.requestUpdate()})}render(){const t=this.getLabel(),e=n.W.state.activeChain,i=V.a.getConnectorId(e);return this.shouldShowIcon=i===_.o.CONNECTOR_ID.AUTH,o.qy`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        .padding=${["0","0","s","1xs"]}
      >
        <wui-flex gap="md" alignItems="center">
          <wui-avatar address=${this.accountAddress}></wui-avatar>
          ${this.shouldShowIcon?o.qy`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="fg-300"
                icon=${this.accountType===it.Vl.ACCOUNT_TYPES.EOA?this.socialProvider??"mail":"lightbulb"}
                background="fg-300"
              ></wui-icon-box>`:o.qy`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${g.Z.getTruncateString({string:this.accountAddress,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">${t}</wui-text></wui-flex
          >
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          <slot name="action"></slot>
          ${this.fetchingBalance?o.qy`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`:o.qy` <wui-text variant="small-400">$${this.balance.toFixed(2)}</wui-text>`}
        </wui-flex>
      </wui-flex>
    `}getLabel(){let t=this.labels?.get(this.accountAddress);const e=n.W.state.activeChain,i=V.a.getConnectorId(e);return t||i!==_.o.CONNECTOR_ID.AUTH?t||(t="EOA"):t=`${"eoa"===this.accountType?this.socialProvider??"Email":"Smart"} Account`,t}};_t.styles=[w.W5,w.fD,Ht],Ft([(0,r.MZ)()],_t.prototype,"accountAddress",void 0),Ft([(0,r.MZ)()],_t.prototype,"accountType",void 0),Ft([(0,r.MZ)({type:Boolean})],_t.prototype,"selected",void 0),Ft([(0,r.MZ)({type:Function})],_t.prototype,"onSelect",void 0),_t=Ft([(0,f.E)("wui-list-account")],_t);const Vt=o.AH`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }

  .account-settings-button {
    padding: calc(var(--wui-spacing-m) - 1px) var(--wui-spacing-2l);
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .account-settings-button:hover {
    background: var(--wui-color-gray-glass-005);
  }
`;var Jt=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let Kt=class extends o.WF{constructor(){super(),this.usubscribe=[],this.address=d.U.state.address,this.profileImage=d.U.state.profileImage,this.profileName=d.U.state.profileName,this.accounts=d.U.state.allAccounts,this.loading=!1,this.usubscribe.push(d.U.subscribeKey("address",t=>{t?this.address=t:p.W.close()})),this.usubscribe.push(d.U.subscribeKey("profileImage",t=>{this.profileImage=t})),this.usubscribe.push(d.U.subscribeKey("profileName",t=>{this.profileName=t}))}disconnectedCallback(){this.usubscribe.forEach(t=>t())}render(){if(!this.address)throw new Error("w3m-profile-view: No account provided");return o.qy`
      <wui-flex flexDirection="column" gap="l" .padding=${["0","xl","m","xl"]}>
        <wui-flex flexDirection="column" alignItems="center" gap="l">
          <wui-avatar
            alt=${this.address}
            address=${this.address}
            imageSrc=${(0,a.J)(this.profileImage)}
            size="2lg"
          ></wui-avatar>
          <wui-flex flexDirection="column" alignItems="center">
            <wui-flex gap="3xs" alignItems="center" justifyContent="center">
              <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
                ${this.profileName?h.Zv.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):h.Zv.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
              </wui-text>
              <wui-icon-link
                size="md"
                icon="copy"
                iconColor="fg-200"
                @click=${this.onCopyAddress}
              ></wui-icon-link>
            </wui-flex>
          </wui-flex>
        </wui-flex>
        <wui-flex
          data-testid="account-settings-button"
          justifyContent="center"
          alignItems="center"
          class="account-settings-button"
          @click=${()=>G.I.push("AccountSettings")}
        >
          <wui-text variant="paragraph-500" color="fg-100">Account Settings</wui-text>
        </wui-flex>
        ${this.accountsTemplate()}
      </wui-flex>
    `}accountsTemplate(){return o.qy`<wui-flex flexDirection="column">
      <wui-flex .padding=${["3xs","m","s","s"]}>
        <wui-text color="fg-200" variant="paragraph-400">Your accounts</wui-text>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxs">
        ${this.accounts.map(t=>this.accountTemplate(t))}
      </wui-flex>
    </wui-flex>`}async onSwitchAccount(t){const e=n.W.state.activeCaipNetwork?.chainNamespace;if(this.loading=!0,V.a.getAuthConnector()){const i=t.type;await Y.x.setPreferredAccountType(i,e)}d.U.setShouldUpdateToAddress(t.address,e),this.loading=!1}accountTemplate(t){return o.qy`<wui-list-account accountAddress=${t.address} accountType=${t.type}>
      ${t.address===this.address?"":o.qy`<wui-button
            slot="action"
            textVariant="small-600"
            size="md"
            variant="accent"
            @click=${()=>this.onSwitchAccount(t)}
            .loading=${this.loading}
            >Switch</wui-button
          >`}
    </wui-list-account>`}onCopyAddress(){try{this.address&&(u.w.copyToClopboard(this.address),K.P.showSuccess("Address copied"))}catch{K.P.showError("Failed to copy")}}};Kt.styles=Vt,Jt([(0,r.wk)()],Kt.prototype,"address",void 0),Jt([(0,r.wk)()],Kt.prototype,"profileImage",void 0),Jt([(0,r.wk)()],Kt.prototype,"profileName",void 0),Jt([(0,r.wk)()],Kt.prototype,"accounts",void 0),Jt([(0,r.wk)()],Kt.prototype,"loading",void 0),Kt=Jt([(0,h.EM)("w3m-profile-view")],Kt);const Gt=o.AH`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-m);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var Yt=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let Xt=class extends o.WF{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size=""}render(){return o.qy`
      <wui-flex gap="1xs" alignItems="center">
        <wui-avatar size=${this.size} imageSrc=${this.imageSrc}></wui-avatar>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};Xt.styles=[w.W5,w.fD,Gt],Yt([(0,r.MZ)()],Xt.prototype,"imageSrc",void 0),Yt([(0,r.MZ)()],Xt.prototype,"text",void 0),Yt([(0,r.MZ)()],Xt.prototype,"size",void 0),Xt=Yt([(0,f.E)("wui-banner-img")],Xt);const Qt=o.AH`
  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;var te=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let ee=class extends o.WF{constructor(){super(),this.metadata=l.H.state.metadata,this.allAccounts=d.U.state.allAccounts||[],this.balances={},this.labels=d.U.state.addressLabels,this.currentAddress=d.U.state.address||"",this.caipNetwork=n.W.state.activeCaipNetwork,d.U.subscribeKey("allAccounts",t=>{this.allAccounts=t})}connectedCallback(){super.connectedCallback(),this.allAccounts.forEach(t=>{Ut.T.getBalance(t.address,this.caipNetwork?.caipNetworkId).then(e=>{let i=this.balances[t.address]||0;e.balances.length>0&&(i=e.balances.reduce((t,e)=>t+(e?.value||0),0)),this.balances[t.address]=i,this.requestUpdate()})})}getAddressIcon(t){return"smartAccount"===t?"lightbulb":"mail"}render(){return o.qy`
      <wui-flex justifyContent="center" .padding=${["xl","0","xl","0"]}>
        <wui-banner-img
          imageSrc=${(0,a.J)(this.metadata?.icons[0])}
          text=${(0,a.J)(this.metadata?.url)}
          size="sm"
        ></wui-banner-img>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxl" .padding=${["l","xl","xl","xl"]}>
        ${this.allAccounts.map((t,e)=>this.getAddressTemplate(t,e))}
      </wui-flex>
    `}getAddressTemplate(t,e){const i=this.labels?.get(t.address),r=n.W.state.activeChain,a=V.a.getConnectorId(r)===_.o.CONNECTOR_ID.AUTH;return o.qy`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        data-testid="switch-address-item"
      >
        <wui-flex alignItems="center">
          <wui-avatar address=${t.address}></wui-avatar>
          ${a?o.qy`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="glass-002"
                background="gray"
                icon="${this.getAddressIcon(t.type)}"
                ?border=${!0}
              ></wui-icon-box>`:o.qy`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${i||h.Zv.getTruncateString({string:t.address,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">
              ${"number"==typeof this.balances[t.address]?`$${this.balances[t.address]?.toFixed(2)}`:o.qy`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          ${t.address?.toLowerCase()===this.currentAddress?.toLowerCase()?"":o.qy`
                <wui-button
                  data-testid=${`w3m-switch-address-button-${e}`}
                  textVariant="small-600"
                  size="md"
                  variant="accent"
                  @click=${()=>this.onSwitchAddress(t.address)}
                  >Switch to</wui-button
                >
              `}
        </wui-flex>
      </wui-flex>
    `}onSwitchAddress(t){const e=n.W.state.activeCaipNetwork,i=e?.chainNamespace,o=`${i}:${e?.id}:${t}`;d.U.setCaipAddress(o,i),p.W.close()}};ee.styles=Qt,te([(0,r.wk)()],ee.prototype,"allAccounts",void 0),te([(0,r.wk)()],ee.prototype,"balances",void 0),ee=te([(0,h.EM)("w3m-switch-address-view")],ee);var ie=i(379);const oe=o.AH`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`;var re=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let ae=class extends o.WF{constructor(){super(...arguments),this.inputElementRef=(0,ie._)(),this.checked=void 0}render(){return o.qy`
      <label>
        <input
          ${(0,ie.K)(this.inputElementRef)}
          type="checkbox"
          ?checked=${(0,a.J)(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};ae.styles=[w.W5,w.fD,w.ck,oe],re([(0,r.MZ)({type:Boolean})],ae.prototype,"checked",void 0),ae=re([(0,f.E)("wui-switch")],ae);const ne=o.AH`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var se=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let le=class extends o.WF{constructor(){super(...arguments),this.checked=void 0}render(){return o.qy`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${(0,a.J)(this.checked)}></wui-switch>
      </button>
    `}};le.styles=[w.W5,w.fD,ne],se([(0,r.MZ)({type:Boolean})],le.prototype,"checked",void 0),le=se([(0,f.E)("wui-certified-switch")],le);const ce=o.AH`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;var de=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let ue=class extends o.WF{constructor(){super(...arguments),this.icon="copy"}render(){return o.qy`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};ue.styles=[w.W5,w.fD,ce],de([(0,r.MZ)()],ue.prototype,"icon",void 0),ue=de([(0,f.E)("wui-input-element")],ue),i(30990);const pe=o.AH`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;let he=class extends o.WF{constructor(){super(...arguments),this.inputComponentRef=(0,ie._)()}render(){return o.qy`
      <wui-input-text
        ${(0,ie.K)(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const t=this.inputComponentRef.value,e=t?.inputElementRef.value;e&&(e.value="",e.focus(),e.dispatchEvent(new Event("input")))}};he.styles=[w.W5,pe],he=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n}([(0,f.E)("wui-search-bar")],he);var we=i(24634),ge=i(4898);i(82963);const fe=o.AH`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var ve=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let be=class extends o.WF{constructor(){super(...arguments),this.type="wallet"}render(){return o.qy`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?o.qy` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${ge.a}`:o.qy`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};be.styles=[w.W5,w.fD,fe],ve([(0,r.MZ)()],be.prototype,"type",void 0),be=ve([(0,f.E)("wui-card-select-loader")],be);const me=o.AH`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var ye=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let xe=class extends o.WF{render(){return this.style.cssText=`\n      grid-template-rows: ${this.gridTemplateRows};\n      grid-template-columns: ${this.gridTemplateColumns};\n      justify-items: ${this.justifyItems};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      align-content: ${this.alignContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&g.Z.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&g.Z.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&g.Z.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&g.Z.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&g.Z.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&g.Z.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&g.Z.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&g.Z.getSpacingStyles(this.margin,3)};\n    `,o.qy`<slot></slot>`}};xe.styles=[w.W5,me],ye([(0,r.MZ)()],xe.prototype,"gridTemplateRows",void 0),ye([(0,r.MZ)()],xe.prototype,"gridTemplateColumns",void 0),ye([(0,r.MZ)()],xe.prototype,"justifyItems",void 0),ye([(0,r.MZ)()],xe.prototype,"alignItems",void 0),ye([(0,r.MZ)()],xe.prototype,"justifyContent",void 0),ye([(0,r.MZ)()],xe.prototype,"alignContent",void 0),ye([(0,r.MZ)()],xe.prototype,"columnGap",void 0),ye([(0,r.MZ)()],xe.prototype,"rowGap",void 0),ye([(0,r.MZ)()],xe.prototype,"gap",void 0),ye([(0,r.MZ)()],xe.prototype,"padding",void 0),ye([(0,r.MZ)()],xe.prototype,"margin",void 0),xe=ye([(0,f.E)("wui-grid")],xe);var ke=i(40213);i(22208),i(14494);const Ce=o.AH`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var $e=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let Ee=class extends o.WF{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){const t="certified"===this.wallet?.badge_type;return o.qy`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${(0,a.J)(t?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${t?o.qy`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():o.qy`
      <wui-wallet-image
        size="md"
        imageSrc=${(0,a.J)(this.imageSrc)}
        name=${this.wallet?.name}
        .installed=${this.wallet?.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return o.qy`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=s.$.getWalletImage(this.wallet),this.imageSrc||(this.imageLoading=!0,this.imageSrc=await s.$.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};Ee.styles=Ce,$e([(0,r.wk)()],Ee.prototype,"visible",void 0),$e([(0,r.wk)()],Ee.prototype,"imageSrc",void 0),$e([(0,r.wk)()],Ee.prototype,"imageLoading",void 0),$e([(0,r.MZ)()],Ee.prototype,"wallet",void 0),Ee=$e([(0,h.EM)("w3m-all-wallets-list-item")],Ee);const Se=o.AH`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var Ae=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};const Ie="local-paginator";let Re=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!we.N.state.wallets.length,this.wallets=we.N.state.wallets,this.recommended=we.N.state.recommended,this.featured=we.N.state.featured,this.filteredWallets=we.N.state.filteredWallets,this.unsubscribe.push(we.N.subscribeKey("wallets",t=>this.wallets=t),we.N.subscribeKey("recommended",t=>this.recommended=t),we.N.subscribeKey("featured",t=>this.featured=t),we.N.subscribeKey("filteredWallets",t=>this.filteredWallets=t))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),this.paginationObserver?.disconnect()}render(){return o.qy`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=!0;const t=this.shadowRoot?.querySelector("wui-grid");t&&(await we.N.fetchWalletsByPage({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(t,e){return[...Array(t)].map(()=>o.qy`
        <wui-card-select-loader type="wallet" id=${(0,a.J)(e)}></wui-card-select-loader>
      `)}walletsTemplate(){const t=this.filteredWallets?.length>0?u.w.uniqueBy([...this.featured,...this.recommended,...this.filteredWallets],"id"):u.w.uniqueBy([...this.featured,...this.recommended,...this.wallets],"id");return ke.A.markWalletsAsInstalled(t).map(t=>o.qy`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(t)}
          .wallet=${t}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:t,recommended:e,featured:i,count:o}=we.N.state,r=window.innerWidth<352?3:4,a=t.length+e.length;let n=Math.ceil(a/r)*r-a+r;return n-=t.length?i.length%r:0,0===o&&i.length>0?null:0===o||[...i,...t,...e].length<o?this.shimmerTemplate(n,Ie):null}createPaginationObserver(){const t=this.shadowRoot?.querySelector(`#${Ie}`);t&&(this.paginationObserver=new IntersectionObserver(([t])=>{if(t?.isIntersecting&&!this.loading){const{page:t,count:e,wallets:i}=we.N.state;i.length<e&&we.N.fetchWalletsByPage({page:t+1})}}),this.paginationObserver.observe(t))}onConnectWallet(t){V.a.selectWalletConnector(t)}};Re.styles=Se,Ae([(0,r.wk)()],Re.prototype,"loading",void 0),Ae([(0,r.wk)()],Re.prototype,"wallets",void 0),Ae([(0,r.wk)()],Re.prototype,"recommended",void 0),Ae([(0,r.wk)()],Re.prototype,"featured",void 0),Ae([(0,r.wk)()],Re.prototype,"filteredWallets",void 0),Re=Ae([(0,h.EM)("w3m-all-wallets-list")],Re),i(59183);const Te=o.AH`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var Me=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let We=class extends o.WF{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?o.qy`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query.trim()===this.prevQuery.trim()&&this.badge===this.prevBadge||(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await we.N.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:t}=we.N.state,e=ke.A.markWalletsAsInstalled(t);return t.length?o.qy`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","s","s","s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${e.map(t=>o.qy`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(t)}
              .wallet=${t}
              data-testid="wallet-search-item-${t.id}"
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:o.qy`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(t){V.a.selectWalletConnector(t)}};We.styles=Te,Me([(0,r.wk)()],We.prototype,"loading",void 0),Me([(0,r.MZ)()],We.prototype,"query",void 0),Me([(0,r.MZ)()],We.prototype,"badge",void 0),We=Me([(0,h.EM)("w3m-all-wallets-search")],We);var Oe=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let Pe=class extends o.WF{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=u.w.debounce(t=>{this.search=t})}render(){const t=this.search.length>=2;return o.qy`
      <wui-flex .padding=${["0","s","s","s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${t||this.badge?o.qy`<w3m-all-wallets-search
            query=${this.search}
            badge=${(0,a.J)(this.badge)}
          ></w3m-all-wallets-search>`:o.qy`<w3m-all-wallets-list badge=${(0,a.J)(this.badge)}></w3m-all-wallets-list>`}
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}onClick(){"certified"!==this.badge?(this.badge="certified",K.P.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return u.w.isMobile()?o.qy`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){G.I.push("ConnectingWalletConnect")}};Oe([(0,r.wk)()],Pe.prototype,"search",void 0),Oe([(0,r.wk)()],Pe.prototype,"badge",void 0),Pe=Oe([(0,h.EM)("w3m-all-wallets-view")],Pe);var Ne=i(90445),je=i(23507),qe=i(25059);const De=o.AH`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 16.5px var(--wui-spacing-l) 16.5px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var Ze=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let ze=class extends o.WF{constructor(){super(...arguments),this.text="",this.disabled=!1,this.tabIdx=void 0}render(){return o.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,a.J)(this.tabIdx)}>
        <wui-text align="center" variant="paragraph-500" color="inherit">${this.text}</wui-text>
      </button>
    `}};ze.styles=[w.W5,w.fD,De],Ze([(0,r.MZ)()],ze.prototype,"text",void 0),Ze([(0,r.MZ)({type:Boolean})],ze.prototype,"disabled",void 0),Ze([(0,r.MZ)()],ze.prototype,"tabIdx",void 0),ze=Ze([(0,f.E)("wui-list-button")],ze),i(49048);var Le=i(57131);i(10607);const Be=o.AH`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var Ue=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let He=class extends o.WF{constructor(){super(...arguments),this.unsubscribe=[],this.formRef=(0,ie._)(),this.email="",this.loading=!1,this.error=""}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}firstUpdated(){this.formRef.value?.addEventListener("keydown",t=>{"Enter"===t.key&&this.onSubmitEmail(t)})}render(){return o.qy`
      <form ${(0,ie.K)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${(0,a.J)(this.tabIdx)}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `}submitButtonTemplate(){return!this.loading&&this.email.length>3?o.qy`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?o.qy`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}templateError(){return this.error?o.qy`<wui-text variant="tiny-500" color="error-100">${this.error}</wui-text>`:null}onEmailInputChange(t){this.email=t.detail.trim(),this.error=""}async onSubmitEmail(t){if(!_.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(t=>t===n.W.state.activeChain)){const t=n.W.getFirstCaipNetworkSupportsAuthConnector();if(t)return void G.I.push("SwitchNetwork",{network:t})}try{if(this.loading)return;this.loading=!0,t.preventDefault();const e=V.a.getAuthConnector();if(!e)throw new Error("w3m-email-login-widget: Auth connector not found");const{action:i}=await e.provider.connectEmail({email:this.email});j.E.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),"VERIFY_OTP"===i?(j.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),G.I.push("EmailVerifyOtp",{email:this.email})):"VERIFY_DEVICE"===i?G.I.push("EmailVerifyDevice",{email:this.email}):"CONNECT"===i&&(await Y.x.connectExternal(e,n.W.state.activeChain),G.I.replace("Account"))}catch(t){const e=u.w.parseError(t);e?.includes("Invalid email")?this.error="Invalid email. Try again.":K.P.showError(t)}finally{this.loading=!1}}onFocusEvent(){j.E.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};He.styles=Be,Ue([(0,r.MZ)()],He.prototype,"tabIdx",void 0),Ue([(0,r.wk)()],He.prototype,"email",void 0),Ue([(0,r.wk)()],He.prototype,"loading",void 0),Ue([(0,r.wk)()],He.prototype,"error",void 0),He=Ue([(0,h.EM)("w3m-email-login-widget")],He),i(68855),i(57723);var Fe=i(44340),_e=i(8854);i(64416),i(79507);const Ve=o.AH`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 56px;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Je=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let Ke=class extends o.WF{constructor(){super(...arguments),this.logo="google",this.disabled=!1,this.tabIdx=void 0}render(){return o.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,a.J)(this.tabIdx)}>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};Ke.styles=[w.W5,w.fD,Ve],Je([(0,r.MZ)()],Ke.prototype,"logo",void 0),Je([(0,r.MZ)({type:Boolean})],Ke.prototype,"disabled",void 0),Je([(0,r.MZ)()],Ke.prototype,"tabIdx",void 0),Ke=Je([(0,f.E)("wui-logo-select")],Ke);var Ge=i(69105);const Ye=o.AH`
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-m)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var Xe=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let Qe=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.walletGuide="get-started",this.tabIdx=void 0,this.connectors=V.a.state.connectors,this.remoteFeatures=l.H.state.remoteFeatures,this.authConnector=this.connectors.find(t=>"AUTH"===t.type),this.isPwaLoading=!1,this.unsubscribe.push(V.a.subscribeKey("connectors",t=>{this.connectors=t,this.authConnector=this.connectors.find(t=>"AUTH"===t.type)}),l.H.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return o.qy`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="xs"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `}topViewTemplate(){const t="explore"===this.walletGuide;let e=this.remoteFeatures?.socials;return!e&&t?(e=J.oU.DEFAULT_SOCIALS,this.renderTopViewContent(e)):e?this.renderTopViewContent(e):null}renderTopViewContent(t){return 2===t.length?o.qy` <wui-flex gap="xs">
        ${t.slice(0,2).map(t=>o.qy`<wui-logo-select
              data-testid=${`social-selector-${t}`}
              @click=${()=>{this.onSocialClick(t)}}
              logo=${t}
              tabIdx=${(0,a.J)(this.tabIdx)}
              ?disabled=${this.isPwaLoading}
            ></wui-logo-select>`)}
      </wui-flex>`:o.qy` <wui-list-social
      data-testid=${`social-selector-${t[0]}`}
      @click=${()=>{this.onSocialClick(t[0])}}
      logo=${(0,a.J)(t[0])}
      align="center"
      name=${`Continue with ${t[0]}`}
      tabIdx=${(0,a.J)(this.tabIdx)}
      ?disabled=${this.isPwaLoading}
    ></wui-list-social>`}bottomViewTemplate(){let t=this.remoteFeatures?.socials;const e="explore"===this.walletGuide;return(!this.authConnector||!t||0===t.length)&&e&&(t=J.oU.DEFAULT_SOCIALS),t?t.length<=2?null:t&&t.length>6?o.qy`<wui-flex gap="xs">
        ${t.slice(1,5).map(t=>o.qy`<wui-logo-select
              data-testid=${`social-selector-${t}`}
              @click=${()=>{this.onSocialClick(t)}}
              logo=${t}
              tabIdx=${(0,a.J)(this.tabIdx)}
              ?focusable=${void 0!==this.tabIdx&&this.tabIdx>=0}
              ?disabled=${this.isPwaLoading}
            ></wui-logo-select>`)}
        <wui-logo-select
          logo="more"
          tabIdx=${(0,a.J)(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
          ?disabled=${this.isPwaLoading}
          data-testid="social-selector-more"
        ></wui-logo-select>
      </wui-flex>`:t?o.qy`<wui-flex gap="xs">
      ${t.slice(1,t.length).map(t=>o.qy`<wui-logo-select
            data-testid=${`social-selector-${t}`}
            @click=${()=>{this.onSocialClick(t)}}
            logo=${t}
            tabIdx=${(0,a.J)(this.tabIdx)}
            ?focusable=${void 0!==this.tabIdx&&this.tabIdx>=0}
            ?disabled=${this.isPwaLoading}
          ></wui-logo-select>`)}
    </wui-flex>`:null:null}onMoreSocialsClick(){G.I.push("ConnectSocials")}async onSocialClick(t){if(!_.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(t=>t===n.W.state.activeChain)){const t=n.W.getFirstCaipNetworkSupportsAuthConnector();if(t)return void G.I.push("SwitchNetwork",{network:t})}t&&await(0,_e.Up)(t)}async handlePwaFrameLoad(){if(u.w.isPWA()){this.isPwaLoading=!0;try{this.authConnector?.provider instanceof Ge.Y&&await this.authConnector.provider.init()}catch(t){Fe.h.open({shortMessage:"Error loading embedded wallet in PWA",longMessage:t.message},"error")}finally{this.isPwaLoading=!1}}}};Qe.styles=Ye,Xe([(0,r.MZ)()],Qe.prototype,"walletGuide",void 0),Xe([(0,r.MZ)()],Qe.prototype,"tabIdx",void 0),Xe([(0,r.wk)()],Qe.prototype,"connectors",void 0),Xe([(0,r.wk)()],Qe.prototype,"remoteFeatures",void 0),Xe([(0,r.wk)()],Qe.prototype,"authConnector",void 0),Xe([(0,r.wk)()],Qe.prototype,"isPwaLoading",void 0),Qe=Xe([(0,h.EM)("w3m-social-login-widget")],Qe),i(93613);const ti=o.AH`
  wui-flex {
    width: 100%;
  }

  .wallet-guide {
    width: 100%;
  }

  .chip-box {
    width: fit-content;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }
`;var ei=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let ii=class extends o.WF{constructor(){super(...arguments),this.walletGuide="get-started"}render(){return"explore"===this.walletGuide?o.qy`<wui-flex
          class="wallet-guide"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowGap="xs"
          data-testid="w3m-wallet-guide-explore"
        >
          <wui-text variant="small-400" color="fg-200" align="center">
            Looking for a self-custody wallet?
          </wui-text>

          <wui-flex class="chip-box">
            <wui-chip
              imageIcon="walletConnectLightBrown"
              icon="externalLink"
              variant="transparent"
              href="https://walletguide.walletconnect.network"
              title="Find one on WalletGuide"
            ></wui-chip>
          </wui-flex>
        </wui-flex>`:o.qy`<wui-flex
          columnGap="4xs"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          .padding=${["s","0","s","0"]}
        >
          <wui-text variant="small-400" class="title" color="fg-200"
            >Haven't got a wallet?</wui-text
          >
          <wui-link
            data-testid="w3m-wallet-guide-get-started"
            color="blue-100"
            class="get-started-link"
            @click=${this.onGetStarted}
            tabIdx=${(0,a.J)(this.tabIdx)}
          >
            Get started
          </wui-link>
        </wui-flex>`}onGetStarted(){G.I.push("Create")}};ii.styles=ti,ei([(0,r.MZ)()],ii.prototype,"tabIdx",void 0),ei([(0,r.MZ)()],ii.prototype,"walletGuide",void 0),ii=ei([(0,h.EM)("w3m-wallet-guide")],ii),i(63937);const oi=o.AH`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
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

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var ri=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let ai=class extends o.WF{constructor(){super(...arguments),this.walletImages=[]}render(){const t=this.walletImages.length<4;return o.qy`${this.walletImages.slice(0,4).map(({src:t,walletName:e})=>o.qy`
            <wui-wallet-image
              size="inherit"
              imageSrc=${t}
              name=${(0,a.J)(e)}
            ></wui-wallet-image>
          `)}
      ${t?[...Array(4-this.walletImages.length)].map(()=>o.qy` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};ai.styles=[w.W5,oi],ri([(0,r.MZ)({type:Array})],ai.prototype,"walletImages",void 0),ai=ri([(0,f.E)("wui-all-wallets-image")],ai);const ni=o.AH`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;var si=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let li=class extends o.WF{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.tabIdx=void 0,this.installed=!1,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return o.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,a.J)(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?o.qy` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?o.qy` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?o.qy`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:o.qy`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.loading?o.qy`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?o.qy`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?o.qy`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};li.styles=[w.W5,w.fD,ni],si([(0,r.MZ)({type:Array})],li.prototype,"walletImages",void 0),si([(0,r.MZ)()],li.prototype,"imageSrc",void 0),si([(0,r.MZ)()],li.prototype,"name",void 0),si([(0,r.MZ)()],li.prototype,"tagLabel",void 0),si([(0,r.MZ)()],li.prototype,"tagVariant",void 0),si([(0,r.MZ)()],li.prototype,"icon",void 0),si([(0,r.MZ)()],li.prototype,"walletIcon",void 0),si([(0,r.MZ)()],li.prototype,"tabIdx",void 0),si([(0,r.MZ)({type:Boolean})],li.prototype,"installed",void 0),si([(0,r.MZ)({type:Boolean})],li.prototype,"disabled",void 0),si([(0,r.MZ)({type:Boolean})],li.prototype,"showAllWallets",void 0),si([(0,r.MZ)({type:Boolean})],li.prototype,"loading",void 0),si([(0,r.MZ)({type:String})],li.prototype,"loadingSpinnerColor",void 0),li=si([(0,f.E)("wui-list-wallet")],li);var ci=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let di=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.a.state.connectors,this.count=we.N.state.count,this.filteredCount=we.N.state.filteredWallets.length,this.isFetchingRecommendedWallets=we.N.state.isFetchingRecommendedWallets,this.unsubscribe.push(V.a.subscribeKey("connectors",t=>this.connectors=t),we.N.subscribeKey("count",t=>this.count=t),we.N.subscribeKey("filteredWallets",t=>this.filteredCount=t.length),we.N.subscribeKey("isFetchingRecommendedWallets",t=>this.isFetchingRecommendedWallets=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.find(t=>"walletConnect"===t.id),{allWallets:e}=l.H.state;if(!t||"HIDE"===e)return null;if("ONLY_MOBILE"===e&&!u.w.isMobile())return null;const i=we.N.state.featured.length,r=this.count+i,n=r<10?r:10*Math.floor(r/10),s=this.filteredCount>0?this.filteredCount:n;let c=`${s}`;return this.filteredCount>0?c=`${this.filteredCount}`:s<r&&(c=`${s}+`),o.qy`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${c}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${(0,a.J)(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets?"fg-300":"accent-100"}
      ></wui-list-wallet>
    `}onAllWallets(){j.E.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),G.I.push("AllWallets")}};ci([(0,r.MZ)()],di.prototype,"tabIdx",void 0),ci([(0,r.wk)()],di.prototype,"connectors",void 0),ci([(0,r.wk)()],di.prototype,"count",void 0),ci([(0,r.wk)()],di.prototype,"filteredCount",void 0),ci([(0,r.wk)()],di.prototype,"isFetchingRecommendedWallets",void 0),di=ci([(0,h.EM)("w3m-all-wallets-widget")],di);var ui=i(67277),pi=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let hi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.a.state.connectors,this.unsubscribe.push(V.a.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.filter(t=>"ANNOUNCED"===t.type);return t?.length?o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${t.filter(ui.g.showConnector).map(t=>o.qy`
              <wui-list-wallet
                imageSrc=${(0,a.J)(s.$.getConnectorImage(t))}
                name=${t.name??"Unknown"}
                @click=${()=>this.onConnector(t)}
                tagVariant="success"
                tagLabel="installed"
                data-testid=${`wallet-selector-${t.id}`}
                .installed=${!0}
                tabIdx=${(0,a.J)(this.tabIdx)}
              >
              </wui-list-wallet>
            `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){"walletConnect"===t.id?u.w.isMobile()?G.I.push("AllWallets"):G.I.push("ConnectingWalletConnect"):G.I.push("ConnectingExternal",{connector:t})}};pi([(0,r.MZ)()],hi.prototype,"tabIdx",void 0),pi([(0,r.wk)()],hi.prototype,"connectors",void 0),hi=pi([(0,h.EM)("w3m-connect-announced-widget")],hi);var wi=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let gi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.a.state.connectors,this.loading=!1,this.unsubscribe.push(V.a.subscribeKey("connectors",t=>this.connectors=t)),u.w.isTelegram()&&u.w.isIos()&&(this.loading=!Y.x.state.wcUri,this.unsubscribe.push(Y.x.subscribeKey("wcUri",t=>this.loading=!t)))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{customWallets:t}=l.H.state;if(!t?.length)return this.style.cssText="display: none",null;const e=this.filterOutDuplicateWallets(t);return o.qy`<wui-flex flexDirection="column" gap="xs">
      ${e.map(t=>o.qy`
          <wui-list-wallet
            imageSrc=${(0,a.J)(s.$.getWalletImage(t))}
            name=${t.name??"Unknown"}
            @click=${()=>this.onConnectWallet(t)}
            data-testid=${`wallet-selector-${t.id}`}
            tabIdx=${(0,a.J)(this.tabIdx)}
            ?loading=${this.loading}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(t){const e=ot.i.getRecentWallets(),i=this.connectors.map(t=>t.info?.rdns).filter(Boolean),o=e.map(t=>t.rdns).filter(Boolean),r=i.concat(o);if(r.includes("io.metamask.mobile")&&u.w.isMobile()){const t=r.indexOf("io.metamask.mobile");r[t]="io.metamask"}return t.filter(t=>!r.includes(String(t?.rdns)))}onConnectWallet(t){this.loading||G.I.push("ConnectingWalletConnect",{wallet:t})}};wi([(0,r.MZ)()],gi.prototype,"tabIdx",void 0),wi([(0,r.wk)()],gi.prototype,"connectors",void 0),wi([(0,r.wk)()],gi.prototype,"loading",void 0),gi=wi([(0,h.EM)("w3m-connect-custom-widget")],gi);var fi=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let vi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.a.state.connectors,this.unsubscribe.push(V.a.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.filter(t=>"EXTERNAL"===t.type).filter(ui.g.showConnector).filter(t=>t.id!==_.o.CONNECTOR_ID.COINBASE_SDK);return t?.length?o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(t=>o.qy`
            <wui-list-wallet
              imageSrc=${(0,a.J)(s.$.getConnectorImage(t))}
              .installed=${!0}
              name=${t.name??"Unknown"}
              data-testid=${`wallet-selector-external-${t.id}`}
              @click=${()=>this.onConnector(t)}
              tabIdx=${(0,a.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){G.I.push("ConnectingExternal",{connector:t})}};fi([(0,r.MZ)()],vi.prototype,"tabIdx",void 0),fi([(0,r.wk)()],vi.prototype,"connectors",void 0),vi=fi([(0,h.EM)("w3m-connect-external-widget")],vi);var bi=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let mi=class extends o.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){return this.wallets.length?o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map(t=>o.qy`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${t.id}`}
              imageSrc=${(0,a.J)(s.$.getWalletImage(t))}
              name=${t.name??"Unknown"}
              @click=${()=>this.onConnectWallet(t)}
              tabIdx=${(0,a.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){V.a.selectWalletConnector(t)}};bi([(0,r.MZ)()],mi.prototype,"tabIdx",void 0),bi([(0,r.MZ)()],mi.prototype,"wallets",void 0),mi=bi([(0,h.EM)("w3m-connect-featured-widget")],mi);var yi=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let xi=class extends o.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.connectors=[]}render(){const t=this.connectors.filter(ui.g.showConnector);return 0===t.length?(this.style.cssText="display: none",null):o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(t=>o.qy`
            <wui-list-wallet
              imageSrc=${(0,a.J)(s.$.getConnectorImage(t))}
              .installed=${!0}
              name=${t.name??"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${t.id}`}
              @click=${()=>this.onConnector(t)}
              tabIdx=${(0,a.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnector(t){V.a.setActiveConnector(t),G.I.push("ConnectingExternal",{connector:t})}};yi([(0,r.MZ)()],xi.prototype,"tabIdx",void 0),yi([(0,r.MZ)()],xi.prototype,"connectors",void 0),xi=yi([(0,h.EM)("w3m-connect-injected-widget")],xi);var ki=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let Ci=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.a.state.connectors,this.unsubscribe.push(V.a.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.filter(t=>"MULTI_CHAIN"===t.type&&"WalletConnect"!==t.name);return t?.length?o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(t=>o.qy`
            <wui-list-wallet
              imageSrc=${(0,a.J)(s.$.getConnectorImage(t))}
              .installed=${!0}
              name=${t.name??"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${t.id}`}
              @click=${()=>this.onConnector(t)}
              tabIdx=${(0,a.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){V.a.setActiveConnector(t),G.I.push("ConnectingMultiChain")}};ki([(0,r.MZ)()],Ci.prototype,"tabIdx",void 0),ki([(0,r.wk)()],Ci.prototype,"connectors",void 0),Ci=ki([(0,h.EM)("w3m-connect-multi-chain-widget")],Ci);var $i=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let Ei=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.a.state.connectors,this.loading=!1,this.unsubscribe.push(V.a.subscribeKey("connectors",t=>this.connectors=t)),u.w.isTelegram()&&u.w.isIos()&&(this.loading=!Y.x.state.wcUri,this.unsubscribe.push(Y.x.subscribeKey("wcUri",t=>this.loading=!t)))}render(){const t=ot.i.getRecentWallets().filter(t=>!ke.A.isExcluded(t)).filter(t=>!this.hasWalletConnector(t)).filter(t=>this.isWalletCompatibleWithCurrentChain(t));return t.length?o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(t=>o.qy`
            <wui-list-wallet
              imageSrc=${(0,a.J)(s.$.getWalletImage(t))}
              name=${t.name??"Unknown"}
              @click=${()=>this.onConnectWallet(t)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${(0,a.J)(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){this.loading||V.a.selectWalletConnector(t)}hasWalletConnector(t){return this.connectors.some(e=>e.id===t.id||e.name===t.name)}isWalletCompatibleWithCurrentChain(t){const e=n.W.state.activeChain;return!e||!t.chains||t.chains.some(t=>{const i=t.split(":")[0];return e===i})}};$i([(0,r.MZ)()],Ei.prototype,"tabIdx",void 0),$i([(0,r.wk)()],Ei.prototype,"connectors",void 0),$i([(0,r.wk)()],Ei.prototype,"loading",void 0),Ei=$i([(0,h.EM)("w3m-connect-recent-widget")],Ei);var Si=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let Ai=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,u.w.isTelegram()&&u.w.isIos()&&(this.loading=!Y.x.state.wcUri,this.unsubscribe.push(Y.x.subscribeKey("wcUri",t=>this.loading=!t)))}render(){const{connectors:t}=V.a.state,{customWallets:e,featuredWalletIds:i}=l.H.state,r=ot.i.getRecentWallets(),n=t.find(t=>"walletConnect"===t.id),c=t.filter(t=>"INJECTED"===t.type||"ANNOUNCED"===t.type||"MULTI_CHAIN"===t.type).filter(t=>"Browser Wallet"!==t.name);if(!n)return null;if(i||e||!this.wallets.length)return this.style.cssText="display: none",null;const d=c.length+r.length,u=Math.max(0,2-d),p=ke.A.filterOutDuplicateWallets(this.wallets).slice(0,u);return p.length?o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${p.map(t=>o.qy`
            <wui-list-wallet
              imageSrc=${(0,a.J)(s.$.getWalletImage(t))}
              name=${t?.name??"Unknown"}
              @click=${()=>this.onConnectWallet(t)}
              tabIdx=${(0,a.J)(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){if(this.loading)return;const e=V.a.getConnector(t.id,t.rdns);e?G.I.push("ConnectingExternal",{connector:e}):G.I.push("ConnectingWalletConnect",{wallet:t})}};Si([(0,r.MZ)()],Ai.prototype,"tabIdx",void 0),Si([(0,r.MZ)()],Ai.prototype,"wallets",void 0),Si([(0,r.wk)()],Ai.prototype,"loading",void 0),Ai=Si([(0,h.EM)("w3m-connect-recommended-widget")],Ai);var Ii=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let Ri=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.a.state.connectors,this.connectorImages=c.j.state.connectorImages,this.unsubscribe.push(V.a.subscribeKey("connectors",t=>this.connectors=t),c.j.subscribeKey("connectorImages",t=>this.connectorImages=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(u.w.isMobile())return this.style.cssText="display: none",null;const t=this.connectors.find(t=>"walletConnect"===t.id);if(!t)return this.style.cssText="display: none",null;const e=t.imageUrl||this.connectorImages[t?.imageId??""];return o.qy`
      <wui-list-wallet
        imageSrc=${(0,a.J)(e)}
        name=${t.name??"Unknown"}
        @click=${()=>this.onConnector(t)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${(0,a.J)(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `}onConnector(t){V.a.setActiveConnector(t),G.I.push("ConnectingWalletConnect")}};Ii([(0,r.MZ)()],Ri.prototype,"tabIdx",void 0),Ii([(0,r.wk)()],Ri.prototype,"connectors",void 0),Ii([(0,r.wk)()],Ri.prototype,"connectorImages",void 0),Ri=Ii([(0,h.EM)("w3m-connect-walletconnect-widget")],Ri);const Ti=o.AH`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var Mi=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let Wi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.a.state.connectors,this.recommended=we.N.state.recommended,this.featured=we.N.state.featured,this.unsubscribe.push(V.a.subscribeKey("connectors",t=>this.connectors=t),we.N.subscribeKey("recommended",t=>this.recommended=t),we.N.subscribeKey("featured",t=>this.featured=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return o.qy`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){const{custom:t,recent:e,announced:i,injected:r,multiChain:n,recommended:s,featured:l,external:c}=ui.g.getConnectorsByType(this.connectors,this.recommended,this.featured);return ui.g.getConnectorTypeOrder({custom:t,recent:e,announced:i,injected:r,multiChain:n,recommended:s,featured:l,external:c}).map(t=>{switch(t){case"injected":return o.qy`
            ${n.length?o.qy`<w3m-connect-multi-chain-widget
                  tabIdx=${(0,a.J)(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`:null}
            ${i.length?o.qy`<w3m-connect-announced-widget
                  tabIdx=${(0,a.J)(this.tabIdx)}
                ></w3m-connect-announced-widget>`:null}
            ${r.length?o.qy`<w3m-connect-injected-widget
                  .connectors=${r}
                  tabIdx=${(0,a.J)(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return o.qy`<w3m-connect-walletconnect-widget
            tabIdx=${(0,a.J)(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return o.qy`<w3m-connect-recent-widget
            tabIdx=${(0,a.J)(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return o.qy`<w3m-connect-featured-widget
            .wallets=${l}
            tabIdx=${(0,a.J)(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return o.qy`<w3m-connect-custom-widget
            tabIdx=${(0,a.J)(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return o.qy`<w3m-connect-external-widget
            tabIdx=${(0,a.J)(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return o.qy`<w3m-connect-recommended-widget
            .wallets=${s}
            tabIdx=${(0,a.J)(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return console.warn(`Unknown connector type: ${t}`),null}})}};Wi.styles=Ti,Mi([(0,r.MZ)()],Wi.prototype,"tabIdx",void 0),Mi([(0,r.wk)()],Wi.prototype,"connectors",void 0),Mi([(0,r.wk)()],Wi.prototype,"recommended",void 0),Mi([(0,r.wk)()],Wi.prototype,"featured",void 0),Wi=Mi([(0,h.EM)("w3m-connector-list")],Wi);var Oi=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let Pi=class extends o.WF{constructor(){super(...arguments),this.tabIdx=void 0}render(){return o.qy`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connector-list tabIdx=${(0,a.J)(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${(0,a.J)(this.tabIdx)}></w3m-all-wallets-widget>
      </wui-flex>
    `}};Oi([(0,r.MZ)()],Pi.prototype,"tabIdx",void 0),Pi=Oi([(0,h.EM)("w3m-wallet-login-list")],Pi);const Ni=o.AH`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var ji=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let qi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.connectors=V.a.state.connectors,this.authConnector=this.connectors.find(t=>"AUTH"===t.type),this.features=l.H.state.features,this.remoteFeatures=l.H.state.remoteFeatures,this.enableWallets=l.H.state.enableWallets,this.noAdapters=n.W.state.noAdapters,this.walletGuide="get-started",this.checked=qe.o.state.isLegalCheckboxChecked,this.isEmailEnabled=this.remoteFeatures?.email&&!n.W.state.noAdapters,this.isSocialEnabled=this.remoteFeatures?.socials&&this.remoteFeatures.socials.length>0&&!n.W.state.noAdapters,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors),this.unsubscribe.push(V.a.subscribeKey("connectors",t=>{this.connectors=t,this.authConnector=this.connectors.find(t=>"AUTH"===t.type),this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)}),l.H.subscribeKey("features",t=>{this.features=t}),l.H.subscribeKey("remoteFeatures",t=>{this.remoteFeatures=t,this.setEmailAndSocialEnableCheck(this.noAdapters,this.remoteFeatures)}),l.H.subscribeKey("enableWallets",t=>this.enableWallets=t),n.W.subscribeKey("noAdapters",t=>this.setEmailAndSocialEnableCheck(t,this.remoteFeatures)),qe.o.subscribeKey("isLegalCheckboxChecked",t=>this.checked=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),this.resizeObserver?.disconnect();const t=this.shadowRoot?.querySelector(".connect");t?.removeEventListener("scroll",this.handleConnectListScroll.bind(this))}firstUpdated(){const t=this.shadowRoot?.querySelector(".connect");t&&(requestAnimationFrame(this.handleConnectListScroll.bind(this)),t?.addEventListener("scroll",this.handleConnectListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleConnectListScroll()}),this.resizeObserver?.observe(t),this.handleConnectListScroll())}render(){const{termsConditionsUrl:t,privacyPolicyUrl:e}=l.H.state,i=l.H.state.features?.legalCheckbox,r=Boolean(t||e)&&Boolean(i)&&"get-started"===this.walletGuide&&!this.checked,a={connect:!0,disabled:r},n=l.H.state.enableWalletGuide,s=this.enableWallets,c=this.isSocialEnabled||this.authConnector,d=r?-1:void 0;return o.qy`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          class=${(0,je.H)(a)}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="s"
            .padding=${c&&s&&n&&"get-started"===this.walletGuide?["3xs","s","0","s"]:["3xs","s","s","s"]}
          >
            ${this.renderConnectMethod(d)}
          </wui-flex>
        </wui-flex>
        ${this.guideTemplate(r)}
        <w3m-legal-footer></w3m-legal-footer>
      </wui-flex>
    `}setEmailAndSocialEnableCheck(t,e){this.isEmailEnabled=e?.email&&!t,this.isSocialEnabled=e?.socials&&e.socials.length>0&&!t,this.remoteFeatures=e,this.noAdapters=t}checkIfAuthEnabled(t){const e=t.filter(t=>t.type===Le.o.CONNECTOR_TYPE_AUTH).map(t=>t.chain);return _.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(t=>e.includes(t))}renderConnectMethod(t){const e=ke.A.getConnectOrderMethod(this.features,this.connectors);return o.qy`${e.map((e,i)=>{switch(e){case"email":return o.qy`${this.emailTemplate(t)} ${this.separatorTemplate(i,"email")}`;case"social":return o.qy`${this.socialListTemplate(t)}
          ${this.separatorTemplate(i,"social")}`;case"wallet":return o.qy`${this.walletListTemplate(t)}
          ${this.separatorTemplate(i,"wallet")}`;default:return null}})}`}checkMethodEnabled(t){switch(t){case"wallet":return this.enableWallets;case"social":return this.isSocialEnabled&&this.isAuthEnabled;case"email":return this.isEmailEnabled&&this.isAuthEnabled;default:return null}}checkIsThereNextMethod(t){const e=ke.A.getConnectOrderMethod(this.features,this.connectors)[t+1];if(e)return this.checkMethodEnabled(e)?e:this.checkIsThereNextMethod(t+1)}separatorTemplate(t,e){const i=this.checkIsThereNextMethod(t),r="explore"===this.walletGuide;switch(e){case"wallet":return this.enableWallets&&i&&!r?o.qy`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null;case"email":{const t="social"===i;return this.isAuthEnabled&&this.isEmailEnabled&&!t&&i?o.qy`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`:null}case"social":{const t="email"===i;return this.isAuthEnabled&&this.isSocialEnabled&&!t&&i?o.qy`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null}default:return null}}emailTemplate(t){return this.isEmailEnabled&&this.isAuthEnabled?o.qy`<w3m-email-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${(0,a.J)(t)}
    ></w3m-email-login-widget>`:null}socialListTemplate(t){return this.isSocialEnabled&&this.isAuthEnabled?o.qy`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${(0,a.J)(t)}
    ></w3m-social-login-widget>`:null}walletListTemplate(t){const e=this.enableWallets,i=!1===this.features?.emailShowWallets,r=this.features?.collapseWallets,n=i||r;return e?(u.w.isTelegram()&&(u.w.isSafari()||u.w.isIos())&&Y.x.connectWalletConnect().catch(t=>({})),"explore"===this.walletGuide?null:this.isAuthEnabled&&(this.isEmailEnabled||this.isSocialEnabled)&&n?o.qy`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${(0,a.J)(t)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`:o.qy`<w3m-wallet-login-list tabIdx=${(0,a.J)(t)}></w3m-wallet-login-list>`):null}guideTemplate(t=!1){if(!l.H.state.enableWalletGuide)return null;const e={guide:!0,disabled:t},i=t?-1:void 0;return this.authConnector||this.isSocialEnabled?o.qy`
      ${"explore"!==this.walletGuide||n.W.state.noAdapters?null:o.qy`<wui-separator data-testid="wui-separator" id="explore" text="or"></wui-separator>`}
      <w3m-wallet-guide
        class=${(0,je.H)(e)}
        tabIdx=${(0,a.J)(i)}
        walletGuide=${this.walletGuide}
      ></w3m-wallet-guide>
    `:null}legalCheckboxTemplate(){return"explore"===this.walletGuide?null:o.qy`<w3m-legal-checkbox data-testid="w3m-legal-checkbox"></w3m-legal-checkbox>`}handleConnectListScroll(){const t=this.shadowRoot?.querySelector(".connect");t&&(t.scrollHeight>470?(t.style.setProperty("--connect-mask-image","linear-gradient(\n          to bottom,\n          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,\n          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,\n          black 40px,\n          black calc(100% - 40px),\n          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),\n          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%\n        )"),t.style.setProperty("--connect-scroll--top-opacity",h.z8.interpolate([0,50],[0,1],t.scrollTop).toString()),t.style.setProperty("--connect-scroll--bottom-opacity",h.z8.interpolate([0,50],[0,1],t.scrollHeight-t.scrollTop-t.offsetHeight).toString())):(t.style.setProperty("--connect-mask-image","none"),t.style.setProperty("--connect-scroll--top-opacity","0"),t.style.setProperty("--connect-scroll--bottom-opacity","0")))}onContinueWalletClick(){G.I.push("ConnectWallets")}};qi.styles=Ni,ji([(0,Ne.w)()],qi.prototype,"connectors",void 0),ji([(0,Ne.w)()],qi.prototype,"authConnector",void 0),ji([(0,Ne.w)()],qi.prototype,"features",void 0),ji([(0,Ne.w)()],qi.prototype,"remoteFeatures",void 0),ji([(0,Ne.w)()],qi.prototype,"enableWallets",void 0),ji([(0,Ne.w)()],qi.prototype,"noAdapters",void 0),ji([(0,r.MZ)()],qi.prototype,"walletGuide",void 0),ji([(0,Ne.w)()],qi.prototype,"checked",void 0),ji([(0,Ne.w)()],qi.prototype,"isEmailEnabled",void 0),ji([(0,Ne.w)()],qi.prototype,"isSocialEnabled",void 0),ji([(0,Ne.w)()],qi.prototype,"isAuthEnabled",void 0),qi=ji([(0,h.EM)("w3m-connect-view")],qi);var Di=i(42535);i(73921),i(21253);const Zi=o.AH`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var zi=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let Li=class extends o.WF{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return o.qy`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};Li.styles=[w.W5,w.fD,Zi],zi([(0,r.MZ)({type:Boolean})],Li.prototype,"disabled",void 0),zi([(0,r.MZ)()],Li.prototype,"label",void 0),zi([(0,r.MZ)()],Li.prototype,"buttonLabel",void 0),Li=zi([(0,f.E)("wui-cta-button")],Li);const Bi=o.AH`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var Ui=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let Hi=class extends o.WF{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:t,app_store:e,play_store:i,chrome_store:r,homepage:a}=this.wallet,n=u.w.isMobile(),s=u.w.isIos(),l=u.w.isAndroid(),c=[e,i,a,r].filter(Boolean).length>1,d=h.Zv.getTruncateString({string:t,charsStart:12,charsEnd:0,truncate:"end"});return c&&!n?o.qy`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${()=>G.I.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&a?o.qy`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:e&&s?o.qy`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:i&&l?o.qy`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&u.w.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&u.w.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&u.w.openHref(this.wallet.homepage,"_blank")}};Hi.styles=[Bi],Ui([(0,r.MZ)({type:Object})],Hi.prototype,"wallet",void 0),Hi=Ui([(0,h.EM)("w3m-mobile-download-links")],Hi);const Fi=o.AH`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var _i=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};class Vi extends o.WF{constructor(){super(),this.wallet=G.I.state.data?.wallet,this.connector=G.I.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=s.$.getWalletImage(this.wallet)??s.$.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=Y.x.state.wcUri,this.error=Y.x.state.wcError,this.ready=!1,this.showRetry=!1,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(Y.x.subscribeKey("wcUri",t=>{this.uri=t,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),Y.x.subscribeKey("wcError",t=>this.error=t)),(u.w.isTelegram()||u.w.isSafari())&&u.w.isIos()&&Y.x.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),Y.x.setWcError(!1),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();const t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let e=`Continue in ${this.name}`;return this.error&&(e="Connection declined"),o.qy`
      <wui-flex
        data-error=${(0,a.J)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,a.J)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${e}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?o.qy`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying||this.isLoading}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `:null}
      </wui-flex>

      ${this.isWalletConnect?o.qy`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const t=this.shadowRoot?.querySelector("wui-button");t?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){Y.x.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.()}loaderTemplate(){const t=Di.W.state.themeVariables["--w3m-border-radius-master"],e=t?parseInt(t.replace("px",""),10):4;return o.qy`<wui-loading-thumbnail radius=${9*e}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(u.w.copyToClopboard(this.uri),K.P.showSuccess("Link copied"))}catch{K.P.showError("Failed to copy")}}}Vi.styles=Fi,_i([(0,r.wk)()],Vi.prototype,"isRetrying",void 0),_i([(0,r.wk)()],Vi.prototype,"uri",void 0),_i([(0,r.wk)()],Vi.prototype,"error",void 0),_i([(0,r.wk)()],Vi.prototype,"ready",void 0),_i([(0,r.wk)()],Vi.prototype,"showRetry",void 0),_i([(0,r.wk)()],Vi.prototype,"secondaryBtnLabel",void 0),_i([(0,r.wk)()],Vi.prototype,"secondaryLabel",void 0),_i([(0,r.wk)()],Vi.prototype,"isLoading",void 0),_i([(0,r.MZ)({type:Boolean})],Vi.prototype,"isMobile",void 0),_i([(0,r.MZ)()],Vi.prototype,"onRetry",void 0);let Ji=class extends Vi{constructor(){if(super(),this.externalViewUnsubscribe=[],!this.connector)throw new Error("w3m-connecting-view: No connector provided");j.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1,this.externalViewUnsubscribe.push(n.W.subscribeKey("activeCaipAddress",t=>{t&&p.W.close()}))}disconnectedCallback(){this.externalViewUnsubscribe.forEach(t=>t())}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.id===_.o.CONNECTOR_ID.COINBASE_SDK&&this.error||(await Y.x.connectExternal(this.connector,this.connector.chain),j.E.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown"}})))}catch(t){j.E.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:t?.message??"Unknown"}}),this.error=!0}}};Ji=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n}([(0,h.EM)("w3m-connecting-external-view")],Ji);const Ki=o.AH`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`;var Gi=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let Yi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.activeConnector=V.a.state.activeConnector,this.unsubscribe.push(V.a.subscribeKey("activeConnector",t=>this.activeConnector=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["m","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${(0,a.J)(s.$.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["0","s","0","s"]}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            Select Chain for ${this.activeConnector?.name}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["xs","0","xs","0"]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){return this.activeConnector?.connectors?.map(t=>t.name?o.qy`
            <wui-list-wallet
              imageSrc=${(0,a.J)(s.$.getChainImage(t.chain))}
              name=${_.o.CHAIN_NAME_MAP[t.chain]}
              @click=${()=>this.onConnector(t)}
              data-testid="wui-list-chain-${t.chain}"
            ></wui-list-wallet>
          `:null)}onConnector(t){const e=this.activeConnector?.connectors?.find(e=>e.chain===t.chain);e?"walletConnect"===e.id?u.w.isMobile()?G.I.push("AllWallets"):G.I.push("ConnectingWalletConnect"):G.I.push("ConnectingExternal",{connector:e}):K.P.showError("Failed to find connector")}};Yi.styles=Ki,Gi([(0,r.wk)()],Yi.prototype,"activeConnector",void 0),Yi=Gi([(0,h.EM)("w3m-connecting-multi-chain-view")],Yi);var Xi=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let Qi=class extends o.WF{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.generateTabs();return o.qy`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs .tabs=${t} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const t=this.platforms.map(t=>"browser"===t?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===t?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===t?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===t?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===t?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=t.map(({platform:t})=>t),t}onTabChange(t){const e=this.platformTabs[t];e&&this.onSelectPlatfrom?.(e)}};Xi([(0,r.MZ)({type:Array})],Qi.prototype,"platforms",void 0),Xi([(0,r.MZ)()],Qi.prototype,"onSelectPlatfrom",void 0),Qi=Xi([(0,h.EM)("w3m-connecting-header")],Qi);let to=class extends Vi{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),j.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;const{connectors:t}=V.a.state,e=t.find(t=>"ANNOUNCED"===t.type&&t.info?.rdns===this.wallet?.rdns||"INJECTED"===t.type||t.name===this.wallet?.name);if(!e)throw new Error("w3m-connecting-wc-browser: No connector found");await Y.x.connectExternal(e,e.chain),p.W.close(),j.E.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown"}})}catch(t){j.E.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:t?.message??"Unknown"}}),this.error=!0}}};to=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n}([(0,h.EM)("w3m-connecting-wc-browser")],to);let eo=class extends Vi{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),j.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:t,name:e}=this.wallet,{redirect:i,href:o}=u.w.formatNativeUrl(t,this.uri);Y.x.setWcLinking({name:e,href:o}),Y.x.setRecentWallet(this.wallet),u.w.openHref(i,"_blank")}catch{this.error=!0}}};eo=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n}([(0,h.EM)("w3m-connecting-wc-desktop")],eo);var io=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let oo=class extends Vi{constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=l.H.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:t,link_mode:e,name:i}=this.wallet,{redirect:o,redirectUniversalLink:r,href:a}=u.w.formatNativeUrl(t,this.uri,e);this.redirectDeeplink=o,this.redirectUniversalLink=r,this.target=u.w.isIframe()?"_top":"_self",Y.x.setWcLinking({name:i,href:a}),Y.x.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?u.w.openHref(this.redirectUniversalLink,this.target):u.w.openHref(this.redirectDeeplink,this.target)}catch(t){j.E.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:t instanceof Error?t.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=J.oU.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(Y.x.subscribeKey("wcUri",()=>{this.onHandleURI()})),j.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onTryAgain(){Y.x.setWcError(!1),this.onConnect?.()}};io([(0,r.wk)()],oo.prototype,"redirectDeeplink",void 0),io([(0,r.wk)()],oo.prototype,"redirectUniversalLink",void 0),io([(0,r.wk)()],oo.prototype,"target",void 0),io([(0,r.wk)()],oo.prototype,"preferUniversalLinks",void 0),io([(0,r.wk)()],oo.prototype,"isLoading",void 0),oo=io([(0,h.EM)("w3m-connecting-wc-mobile")],oo),i(90141),i(79723);const ro=o.AH`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;let ao=class extends Vi{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),j.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach(t=>t()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const t=this.getBoundingClientRect().width-40,e=this.wallet?this.wallet.name:void 0;return Y.x.setWcLinking(void 0),Y.x.setRecentWallet(this.wallet),o.qy` <wui-qr-code
      size=${t}
      theme=${Di.W.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,a.J)(s.$.getWalletImage(this.wallet))}
      color=${(0,a.J)(Di.W.state.themeVariables["--w3m-qr-color"])}
      alt=${(0,a.J)(e)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const t=!this.uri||!this.ready;return o.qy`<wui-link
      .disabled=${t}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};ao.styles=ro,ao=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n}([(0,h.EM)("w3m-connecting-wc-qrcode")],ao);let no=class extends o.WF{constructor(){if(super(),this.wallet=G.I.state.data?.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");j.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,a.J)(s.$.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};no=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n}([(0,h.EM)("w3m-connecting-wc-unsupported")],no);var so=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let lo=class extends Vi{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=J.oU.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(Y.x.subscribeKey("wcUri",()=>{this.updateLoadingState()})),j.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:t,name:e}=this.wallet,{redirect:i,href:o}=u.w.formatUniversalUrl(t,this.uri);Y.x.setWcLinking({name:e,href:o}),Y.x.setRecentWallet(this.wallet),u.w.openHref(i,"_blank")}catch{this.error=!0}}};so([(0,r.wk)()],lo.prototype,"isLoading",void 0),lo=so([(0,h.EM)("w3m-connecting-wc-web")],lo);var co=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let uo=class extends o.WF{constructor(){super(),this.wallet=G.I.state.data?.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=Boolean(l.H.state.siwx),this.remoteFeatures=l.H.state.remoteFeatures,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(l.H.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return o.qy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding?o.qy`<wui-ux-by-reown></wui-ux-by-reown>`:null}async initializeConnection(t=!1){if("browser"!==this.platform&&(!l.H.state.manualWCControl||t))try{const{wcPairingExpiry:e,status:i}=Y.x.state;(t||l.H.state.enableEmbedded||u.w.isPairingExpired(e)||"connecting"===i)&&(await Y.x.connectWalletConnect(),this.isSiwxEnabled||p.W.close())}catch(t){j.E.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:t?.message??"Unknown"}}),Y.x.setWcError(!0),K.P.showError(t.message??"Connection error"),Y.x.resetWcConnection(),G.I.goBack()}}determinePlatforms(){if(!this.wallet)return this.platforms.push("qrcode"),void(this.platform="qrcode");if(this.platform)return;const{mobile_link:t,desktop_link:e,webapp_link:i,injected:o,rdns:r}=this.wallet,a=o?.map(({injected_id:t})=>t).filter(Boolean),s=[...r?[r]:a??[]],c=!l.H.state.isUniversalProvider&&s.length,d=t,p=i,h=Y.x.checkInstalled(s),w=c&&h,g=e&&!u.w.isMobile();w&&!n.W.state.noAdapters&&this.platforms.push("browser"),d&&this.platforms.push(u.w.isMobile()?"mobile":"qrcode"),p&&this.platforms.push("web"),g&&this.platforms.push("desktop"),w||!c||n.W.state.noAdapters||this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return o.qy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return o.qy`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return o.qy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return o.qy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return o.qy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return o.qy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?o.qy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(t){const e=this.shadowRoot?.querySelector("div");e&&(await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=t,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};co([(0,r.wk)()],uo.prototype,"platform",void 0),co([(0,r.wk)()],uo.prototype,"platforms",void 0),co([(0,r.wk)()],uo.prototype,"isSiwxEnabled",void 0),co([(0,r.wk)()],uo.prototype,"remoteFeatures",void 0),uo=co([(0,h.EM)("w3m-connecting-wc-view")],uo);var po=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let ho=class extends o.WF{constructor(){super(...arguments),this.isMobile=u.w.isMobile()}render(){if(this.isMobile){const{featured:t,recommended:e}=we.N.state,{customWallets:i}=l.H.state,r=ot.i.getRecentWallets(),a=t.length||e.length||i?.length||r.length;return o.qy`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs","s","s","s"]}
      >
        ${a?o.qy`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return o.qy`<wui-flex flexDirection="column" .padding=${["0","0","l","0"]}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${["0","m","0","m"]}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`}};po([(0,r.wk)()],ho.prototype,"isMobile",void 0),ho=po([(0,h.EM)("w3m-connecting-wc-basic-view")],ho);var wo=i(25262);const go=o.AH`
  .continue-button-container {
    width: 100%;
  }
`;var fo=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let vo=class extends o.WF{constructor(){super(...arguments),this.loading=!1}render(){return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{u.w.openHref(wo.T.URLS.FAQ,"_blank")}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return o.qy` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          icon="id"
          size="xl"
          iconSize="xxl"
          iconColor="fg-200"
          backgroundColor="fg-200"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return o.qy`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){const t=n.W.state.activeChain;G.I.push("RegisterAccountName"),j.E.sendEvent({type:"track",event:"OPEN_ENS_FLOW",properties:{isSmartAccount:d.U.state.preferredAccountTypes?.[t]===it.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}};vo.styles=go,fo([(0,r.wk)()],vo.prototype,"loading",void 0),vo=fo([(0,h.EM)("w3m-choose-account-name-view")],vo);let bo=class extends o.WF{constructor(){super(...arguments),this.wallet=G.I.state.data?.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return o.qy`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?o.qy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?o.qy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?o.qy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?o.qy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&u.w.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&u.w.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&u.w.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&u.w.openHref(this.wallet.homepage,"_blank")}};bo=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n}([(0,h.EM)("w3m-downloads-view")],bo);let mo=class extends o.WF{render(){return o.qy`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{u.w.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:t,featured:e}=we.N.state,{customWallets:i}=l.H.state;return[...e,...i??[],...t].slice(0,4).map(t=>o.qy`
        <wui-list-wallet
          name=${t.name??"Unknown"}
          tagVariant="main"
          imageSrc=${(0,a.J)(s.$.getWalletImage(t))}
          @click=${()=>{u.w.openHref(t.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `)}};mo=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n}([(0,h.EM)("w3m-get-wallet-view")],mo),i(22982);var yo=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let xo=class extends o.WF{constructor(){super(...arguments),this.data=[]}render(){return o.qy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(t=>o.qy`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${t.images.map(t=>o.qy`<wui-visual name=${t}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${t.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${t.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};yo([(0,r.MZ)({type:Array})],xo.prototype,"data",void 0),xo=yo([(0,h.EM)("w3m-help-widget")],xo);const ko=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let Co=class extends o.WF{render(){return o.qy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${ko}></w3m-help-widget>
        <wui-button variant="main" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){j.E.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),G.I.push("GetWallet")}};Co=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n}([(0,h.EM)("w3m-what-is-a-wallet-view")],Co);const $o=o.AH`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var Eo=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let So=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.checked=qe.o.state.isLegalCheckboxChecked,this.unsubscribe.push(qe.o.subscribeKey("isLegalCheckboxChecked",t=>{this.checked=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{termsConditionsUrl:t,privacyPolicyUrl:e}=l.H.state,i=l.H.state.features?.legalCheckbox,r=Boolean(t||e)&&Boolean(i),n=r&&!this.checked,s=n?-1:void 0;return o.qy`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${r?["0","s","s","s"]:"s"}
        gap="xs"
        class=${(0,a.J)(n?"disabled":void 0)}
      >
        <w3m-wallet-login-list tabIdx=${(0,a.J)(s)}></w3m-wallet-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}};So.styles=$o,Eo([(0,r.wk)()],So.prototype,"checked",void 0),So=Eo([(0,h.EM)("w3m-connect-wallets-view")],So);const Ao=o.AH`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;let Io=class extends o.WF{render(){return o.qy`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Io.styles=[w.W5,Ao],Io=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n}([(0,f.E)("wui-loading-hexagon")],Io),i(99233);const Ro=o.AH`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var To=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let Mo=class extends o.WF{constructor(){super(),this.network=G.I.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const t=this.getLabel(),e=this.getSubLabel();return o.qy`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${(0,a.J)(s.$.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:o.qy`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${t}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){const t=n.W.state.activeChain,e=V.a.getConnectorId(t);return V.a.getAuthConnector()&&e===_.o.CONNECTOR_ID.AUTH?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){const t=n.W.state.activeChain,e=V.a.getConnectorId(t);return V.a.getAuthConnector()&&e===_.o.CONNECTOR_ID.AUTH?`Switching to ${this.network?.name??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const t=this.shadowRoot?.querySelector("wui-button");t?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onSwitchNetwork(){try{this.error=!1,n.W.state.activeChain!==this.network?.chainNamespace&&n.W.setIsSwitchingNamespace(!0),this.network&&n.W.switchActiveNetwork(this.network)}catch(t){this.error=!0}}};Mo.styles=Ro,To([(0,r.wk)()],Mo.prototype,"showRetry",void 0),To([(0,r.wk)()],Mo.prototype,"error",void 0),Mo=To([(0,h.EM)("w3m-network-switch-view")],Mo);var Wo=i(2904);i(62907),i(36639);const Oo=o.AH`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: 100%;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var Po=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let No=class extends o.WF{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1,this.selected=!1,this.transparent=!1}render(){return o.qy`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled}>
        <wui-flex gap="s" alignItems="center">
          ${this.templateNetworkImage()}
          <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text></wui-flex
        >
        ${this.checkmarkTemplate()}
      </button>
    `}checkmarkTemplate(){return this.selected?o.qy`<wui-icon size="sm" color="accent-100" name="checkmarkBold"></wui-icon>`:null}templateNetworkImage(){return this.imageSrc?o.qy`<wui-image size="sm" src=${this.imageSrc} name=${this.name}></wui-image>`:this.imageSrc?null:o.qy`<wui-network-image
        ?round=${!0}
        size="md"
        name=${this.name}
      ></wui-network-image>`}};No.styles=[w.W5,w.fD,Oo],Po([(0,r.MZ)()],No.prototype,"imageSrc",void 0),Po([(0,r.MZ)()],No.prototype,"name",void 0),Po([(0,r.MZ)({type:Boolean})],No.prototype,"disabled",void 0),Po([(0,r.MZ)({type:Boolean})],No.prototype,"selected",void 0),Po([(0,r.MZ)({type:Boolean})],No.prototype,"transparent",void 0),No=Po([(0,f.E)("wui-list-network")],No);const jo=o.AH`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`;var qo=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let Do=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.network=n.W.state.activeCaipNetwork,this.requestedCaipNetworks=n.W.getCaipNetworks(),this.search="",this.onDebouncedSearch=u.w.debounce(t=>{this.search=t},100),this.unsubscribe.push(c.j.subscribeNetworkImages(()=>this.requestUpdate()),n.W.subscribeKey("activeCaipNetwork",t=>this.network=t),n.W.subscribe(()=>{this.requestedCaipNetworks=n.W.getAllRequestedCaipNetworks()}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return o.qy`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${["0","s","s","s"]}
        flexDirection="column"
        gap="xs"
      >
        ${this.networksTemplate()}
      </wui-flex>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}templateSearchInput(){return o.qy`
      <wui-flex gap="xs" .padding=${["0","s","s","s"]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}onNetworkHelp(){j.E.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),G.I.push("WhatIsANetwork")}networksTemplate(){const t=n.W.getAllApprovedCaipNetworkIds(),e=u.w.sortRequestedNetworks(t,this.requestedCaipNetworks);return this.search?this.filteredNetworks=e?.filter(t=>t?.name?.toLowerCase().includes(this.search.toLowerCase())):this.filteredNetworks=e,this.filteredNetworks?.map(t=>o.qy`
        <wui-list-network
          .selected=${this.network?.id===t.id}
          imageSrc=${(0,a.J)(s.$.getNetworkImage(t))}
          type="network"
          name=${t.name??t.id}
          @click=${()=>this.onSwitchNetwork(t)}
          .disabled=${this.getNetworkDisabled(t)}
          data-testid=${`w3m-network-switch-${t.name??t.id}`}
        ></wui-list-network>
      `)}getNetworkDisabled(t){const e=t.chainNamespace,i=d.U.getCaipAddress(e),o=n.W.getAllApprovedCaipNetworkIds(),r=!1!==n.W.getNetworkProp("supportsAllNetworks",e),a=V.a.getConnectorId(e),s=V.a.getAuthConnector(),l=a===_.o.CONNECTOR_ID.AUTH&&s;return!(!i||r||l||o?.includes(t.caipNetworkId))}onSwitchNetwork(t){Wo.L.onSwitchNetwork({network:t})}};Do.styles=jo,qo([(0,r.wk)()],Do.prototype,"network",void 0),qo([(0,r.wk)()],Do.prototype,"requestedCaipNetworks",void 0),qo([(0,r.wk)()],Do.prototype,"filteredNetworks",void 0),qo([(0,r.wk)()],Do.prototype,"search",void 0),Do=qo([(0,h.EM)("w3m-networks-view")],Do);const Zo=o.AH`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }

  .capitalize {
    text-transform: capitalize;
  }
`;var zo=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};const Lo={eip155:"eth",solana:"solana",bip122:"bitcoin",polkadot:void 0};let Bo=class extends o.WF{constructor(){super(...arguments),this.unsubscribe=[],this.switchToChain=G.I.state.data?.switchToChain,this.caipNetwork=G.I.state.data?.network,this.activeChain=n.W.state.activeChain}firstUpdated(){this.unsubscribe.push(n.W.subscribeKey("activeChain",t=>this.activeChain=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.switchToChain?_.o.CHAIN_NAME_MAP[this.switchToChain]:"supported";if(!this.switchToChain)return null;const e=_.o.CHAIN_NAME_MAP[this.switchToChain];return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="xl">
          <wui-visual name=${(0,a.J)(Lo[this.switchToChain])}></wui-visual>
          <wui-text
            data-testid=${`w3m-switch-active-chain-to-${e}`}
            variant="paragraph-500"
            color="fg-100"
            align="center"
            >Switch to <span class="capitalize">${e}</span></wui-text
          >
          <wui-text variant="small-400" color="fg-200" align="center">
            Connected wallet doesn't support connecting to ${t} chain. You
            need to connect with a different wallet.
          </wui-text>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `}async switchActiveChain(){this.switchToChain&&(n.W.setIsSwitchingNamespace(!0),V.a.setFilterByNamespace(this.switchToChain),this.caipNetwork?await n.W.switchActiveNetwork(this.caipNetwork):n.W.setActiveNamespace(this.switchToChain),G.I.reset("Connect"))}};Bo.styles=Zo,zo([(0,r.MZ)()],Bo.prototype,"activeChain",void 0),Bo=zo([(0,h.EM)("w3m-switch-active-chain-view")],Bo);const Uo=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let Ho=class extends o.WF{render(){return o.qy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${Uo}></w3m-help-widget>
        <wui-button
          variant="main"
          size="md"
          @click=${()=>{u.w.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Ho=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n}([(0,h.EM)("w3m-what-is-a-network-view")],Ho);const Fo=o.AH`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var _o=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let Vo=class extends o.WF{constructor(){super(),this.swapUnsupportedChain=G.I.state.data?.swapUnsupportedChain,this.unsubscribe=[],this.disconecting=!1,this.unsubscribe.push(c.j.subscribeNetworkImages(()=>this.requestUpdate()))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return o.qy`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?o.qy`
        <wui-text variant="small-400" color="fg-200" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:o.qy`
      <wui-text variant="small-400" color="fg-200" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){const t=n.W.getAllRequestedCaipNetworks(),e=n.W.getAllApprovedCaipNetworkIds(),i=u.w.sortRequestedNetworks(e,t);return(this.swapUnsupportedChain?i.filter(t=>J.oU.SWAP_SUPPORTED_NETWORKS.includes(t.caipNetworkId)):i).map(t=>o.qy`
        <wui-list-network
          imageSrc=${(0,a.J)(s.$.getNetworkImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(t)}
        >
        </wui-list-network>
      `)}async onDisconnect(){try{this.disconecting=!0,await Y.x.disconnect(),p.W.close()}catch{j.E.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),K.P.showError("Failed to disconnect")}finally{this.disconecting=!1}}async onSwitchNetwork(t){const e=d.U.state.caipAddress,i=n.W.getAllApprovedCaipNetworkIds(),o=(n.W.getNetworkProp("supportsAllNetworks",t.chainNamespace),G.I.state.data);e?i?.includes(t.caipNetworkId)?await n.W.switchActiveNetwork(t):G.I.push("SwitchNetwork",{...o,network:t}):e||(n.W.setActiveCaipNetwork(t),G.I.push("Connect"))}};Vo.styles=Fo,_o([(0,r.wk)()],Vo.prototype,"disconecting",void 0),Vo=_o([(0,h.EM)("w3m-unsupported-chain-view")],Vo);const Jo=o.AH`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var Ko=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let Go=class extends o.WF{constructor(){super(...arguments),this.icon="externalLink",this.text=""}render(){return o.qy`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};Go.styles=[w.W5,w.fD,Jo],Ko([(0,r.MZ)()],Go.prototype,"icon",void 0),Ko([(0,r.MZ)()],Go.prototype,"text",void 0),Go=Ko([(0,f.E)("wui-banner")],Go);const Yo=o.AH`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var Xo=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let Qo=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.preferredAccountTypes=d.U.state.preferredAccountTypes,this.unsubscribe.push(d.U.subscribeKey("preferredAccountTypes",t=>{this.preferredAccountTypes=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return o.qy` <wui-flex
      flexDirection="column"
      .padding=${["xs","s","m","s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const t=n.W.getAllRequestedCaipNetworks(),e=n.W.getAllApprovedCaipNetworkIds(),i=n.W.state.activeCaipNetwork,r=n.W.checkIfSmartAccountEnabled();let l=u.w.sortRequestedNetworks(e,t);if(r&&this.preferredAccountTypes?.[i?.chainNamespace]===it.Vl.ACCOUNT_TYPES.SMART_ACCOUNT){if(!i)return null;l=[i]}return l.filter(t=>t.chainNamespace===i?.chainNamespace).map(t=>o.qy`
        <wui-list-network
          imageSrc=${(0,a.J)(s.$.getNetworkImage(t))}
          name=${t.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};Qo.styles=Yo,Xo([(0,r.wk)()],Qo.prototype,"preferredAccountTypes",void 0),Qo=Xo([(0,h.EM)("w3m-wallet-compatible-networks-view")],Qo);var tr=i(37875);const er=o.AH`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var ir=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let or=class extends o.WF{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"}; background-color: var(--wui-color-modal-bg);`,o.qy`${this.templateVisual()}`}templateVisual(){return this.imageSrc?o.qy`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:o.qy`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};or.styles=[w.W5,er],ir([(0,r.MZ)()],or.prototype,"imageSrc",void 0),ir([(0,r.MZ)()],or.prototype,"alt",void 0),ir([(0,r.MZ)({type:Boolean})],or.prototype,"borderRadiusFull",void 0),or=ir([(0,f.E)("wui-visual-thumbnail")],or);const rr=o.AH`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;let ar=class extends o.WF{constructor(){super(...arguments),this.dappImageUrl=l.H.state.metadata?.icons,this.walletImageUrl=d.U.state.connectedWalletInfo?.icon}firstUpdated(){const t=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");t?.[0]&&this.createAnimation(t[0],"translate(18px)"),t?.[1]&&this.createAnimation(t[1],"translate(-18px)")}render(){return o.qy`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(t,e){t.animate([{transform:"translateX(0px)"},{transform:e}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};ar.styles=rr,ar=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n}([(0,h.EM)("w3m-siwx-sign-message-thumbnails")],ar);var nr=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let sr=class extends o.WF{constructor(){super(...arguments),this.dappName=l.H.state.metadata?.name,this.isCancelling=!1,this.isSigning=!1}render(){return o.qy`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling?"Cancelling...":"Cancel"}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0,await tr.U.requestSignMessage().finally(()=>this.isSigning=!1)}async onCancel(){this.isCancelling=!0,await tr.U.cancelSignMessage().finally(()=>this.isCancelling=!1)}};nr([(0,r.wk)()],sr.prototype,"isCancelling",void 0),nr([(0,r.wk)()],sr.prototype,"isSigning",void 0),sr=nr([(0,h.EM)("w3m-siwx-sign-message-view")],sr)},90681:t=>{t.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},91427:(t,e,i)=>{"use strict";i.d(e,{MZ:()=>o.M,wk:()=>r.w});var o=i(69623),r=i(4537)},92490:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),a=(i(82207),i(56063)),n=i(68664);const s=o.AH`
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
`;var l=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let c=class extends o.WF{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const t="md"===this.size?"mini-700":"micro-700";return o.qy`
      <wui-text data-variant=${this.variant} variant=${t} color="inherit">
        <slot></slot>
      </wui-text>
    `}};c.styles=[a.W5,s],l([(0,r.MZ)()],c.prototype,"variant",void 0),l([(0,r.MZ)()],c.prototype,"size",void 0),c=l([(0,n.E)("wui-tag")],c)},93613:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),a=(i(59481),i(31037),i(82207),i(56063)),n=i(71686),s=i(68664);const l=o.AH`
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
`;var c=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let d=class extends o.WF{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.imageIcon=void 0,this.imageIconSize="md",this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){const t="success"===this.variant||"transparent"===this.variant||"shadeSmall"===this.variant?"small-600":"paragraph-600";return o.qy`
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
    `}imageTemplate(){return this.imageSrc?o.qy`<wui-image src=${this.imageSrc}></wui-image>`:this.imageIcon?o.qy`<wui-icon
        name=${this.imageIcon}
        color="inherit"
        size=${this.imageIconSize}
        class="image-icon"
      ></wui-icon>`:null}};d.styles=[a.W5,a.fD,l],c([(0,r.MZ)()],d.prototype,"variant",void 0),c([(0,r.MZ)()],d.prototype,"imageSrc",void 0),c([(0,r.MZ)()],d.prototype,"imageIcon",void 0),c([(0,r.MZ)()],d.prototype,"imageIconSize",void 0),c([(0,r.MZ)({type:Boolean})],d.prototype,"disabled",void 0),c([(0,r.MZ)()],d.prototype,"icon",void 0),c([(0,r.MZ)()],d.prototype,"href",void 0),c([(0,r.MZ)()],d.prototype,"text",void 0),d=c([(0,s.E)("wui-chip")],d)},93887:(t,e,i)=>{const o=i(82890),r=i(94922),a=i(2501),n=i(32500),s=i(95586),l=o.getBCHDigit(7973);function c(t,e){return n.getCharCountIndicator(t,e)+4}function d(t,e){let i=0;return t.forEach(function(t){const o=c(t.mode,e);i+=o+t.getBitsLength()}),i}e.from=function(t,e){return s.isValid(t)?parseInt(t,10):e},e.getCapacity=function(t,e,i){if(!s.isValid(t))throw new Error("Invalid QR Code version");void 0===i&&(i=n.BYTE);const a=8*(o.getSymbolTotalCodewords(t)-r.getTotalCodewordsCount(t,e));if(i===n.MIXED)return a;const l=a-c(i,t);switch(i){case n.NUMERIC:return Math.floor(l/10*3);case n.ALPHANUMERIC:return Math.floor(l/11*2);case n.KANJI:return Math.floor(l/13);case n.BYTE:default:return Math.floor(l/8)}},e.getBestVersionForData=function(t,i){let o;const r=a.from(i,a.M);if(Array.isArray(t)){if(t.length>1)return function(t,i){for(let o=1;o<=40;o++)if(d(t,o)<=e.getCapacity(o,i,n.MIXED))return o}(t,r);if(0===t.length)return 1;o=t[0]}else o=t;return function(t,i,o){for(let r=1;r<=40;r++)if(i<=e.getCapacity(r,o,t))return r}(o.mode,o.getLength(),r)},e.getEncodedBits=function(t){if(!s.isValid(t)||t<7)throw new Error("Invalid QR Code version");let e=t<<12;for(;o.getBCHDigit(e)-l>=0;)e^=7973<<o.getBCHDigit(e)-l;return t<<12|e}},94083:(t,e,i)=>{const o=i(90681),r=i(43401),a=i(76199),n=i(3824);function s(t,e,i,a,n){const s=[].slice.call(arguments,1),l=s.length,c="function"==typeof s[l-1];if(!c&&!o())throw new Error("Callback required as last argument");if(!c){if(l<1)throw new Error("Too few arguments provided");return 1===l?(i=e,e=a=void 0):2!==l||e.getContext||(a=i,i=e,e=void 0),new Promise(function(o,n){try{const n=r.create(i,a);o(t(n,e,a))}catch(t){n(t)}})}if(l<2)throw new Error("Too few arguments provided");2===l?(n=i,i=e,e=a=void 0):3===l&&(e.getContext&&void 0===n?(n=a,a=void 0):(n=a,a=i,i=e,e=void 0));try{const o=r.create(i,a);n(null,t(o,e,a))}catch(t){n(t)}}e.create=r.create,e.toCanvas=s.bind(null,a.render),e.toDataURL=s.bind(null,a.renderToDataURL),e.toString=s.bind(null,function(t,e,i){return n.render(t,i)})},94541:(t,e,i)=>{const o=i(32500),r=i(60097),a=i(59909),n=i(45666),s=i(10593),l=i(13992),c=i(82890),d=i(94904);function u(t){return unescape(encodeURIComponent(t)).length}function p(t,e,i){const o=[];let r;for(;null!==(r=t.exec(i));)o.push({data:r[0],index:r.index,mode:e,length:r[0].length});return o}function h(t){const e=p(l.NUMERIC,o.NUMERIC,t),i=p(l.ALPHANUMERIC,o.ALPHANUMERIC,t);let r,a;return c.isKanjiModeEnabled()?(r=p(l.BYTE,o.BYTE,t),a=p(l.KANJI,o.KANJI,t)):(r=p(l.BYTE_KANJI,o.BYTE,t),a=[]),e.concat(i,r,a).sort(function(t,e){return t.index-e.index}).map(function(t){return{data:t.data,mode:t.mode,length:t.length}})}function w(t,e){switch(e){case o.NUMERIC:return r.getBitsLength(t);case o.ALPHANUMERIC:return a.getBitsLength(t);case o.KANJI:return s.getBitsLength(t);case o.BYTE:return n.getBitsLength(t)}}function g(t,e){let i;const l=o.getBestModeForData(t);if(i=o.from(e,l),i!==o.BYTE&&i.bit<l.bit)throw new Error('"'+t+'" cannot be encoded with mode '+o.toString(i)+".\n Suggested mode is: "+o.toString(l));switch(i!==o.KANJI||c.isKanjiModeEnabled()||(i=o.BYTE),i){case o.NUMERIC:return new r(t);case o.ALPHANUMERIC:return new a(t);case o.KANJI:return new s(t);case o.BYTE:return new n(t)}}e.fromArray=function(t){return t.reduce(function(t,e){return"string"==typeof e?t.push(g(e,null)):e.data&&t.push(g(e.data,e.mode)),t},[])},e.fromString=function(t,i){const r=function(t){const e=[];for(let i=0;i<t.length;i++){const r=t[i];switch(r.mode){case o.NUMERIC:e.push([r,{data:r.data,mode:o.ALPHANUMERIC,length:r.length},{data:r.data,mode:o.BYTE,length:r.length}]);break;case o.ALPHANUMERIC:e.push([r,{data:r.data,mode:o.BYTE,length:r.length}]);break;case o.KANJI:e.push([r,{data:r.data,mode:o.BYTE,length:u(r.data)}]);break;case o.BYTE:e.push([{data:r.data,mode:o.BYTE,length:u(r.data)}])}}return e}(h(t,c.isKanjiModeEnabled())),a=function(t,e){const i={},r={start:{}};let a=["start"];for(let n=0;n<t.length;n++){const s=t[n],l=[];for(let t=0;t<s.length;t++){const c=s[t],d=""+n+t;l.push(d),i[d]={node:c,lastCount:0},r[d]={};for(let t=0;t<a.length;t++){const n=a[t];i[n]&&i[n].node.mode===c.mode?(r[n][d]=w(i[n].lastCount+c.length,c.mode)-w(i[n].lastCount,c.mode),i[n].lastCount+=c.length):(i[n]&&(i[n].lastCount=c.length),r[n][d]=w(c.length,c.mode)+4+o.getCharCountIndicator(c.mode,e))}}a=l}for(let t=0;t<a.length;t++)r[a[t]].end=0;return{map:r,table:i}}(r,i),n=d.find_path(a.map,"start","end"),s=[];for(let t=1;t<n.length-1;t++)s.push(a.table[n[t]].node);return e.fromArray(s.reduce(function(t,e){const i=t.length-1>=0?t[t.length-1]:null;return i&&i.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)},[]))},e.rawSplit=function(t){return e.fromArray(h(t,c.isKanjiModeEnabled()))}},94753:(t,e,i)=>{const o=i(82890),r=o.getBCHDigit(1335);e.getEncodedBits=function(t,e){const i=t.bit<<3|e;let a=i<<10;for(;o.getBCHDigit(a)-r>=0;)a^=1335<<o.getBCHDigit(a)-r;return 21522^(i<<10|a)}},94904:t=>{"use strict";var e={single_source_shortest_paths:function(t,i,o){var r={},a={};a[i]=0;var n,s,l,c,d,u,p,h=e.PriorityQueue.make();for(h.push(i,0);!h.empty();)for(l in s=(n=h.pop()).value,c=n.cost,d=t[s]||{})d.hasOwnProperty(l)&&(u=c+d[l],p=a[l],(void 0===a[l]||p>u)&&(a[l]=u,h.push(l,u),r[l]=s));if(void 0!==o&&void 0===a[o]){var w=["Could not find a path from ",i," to ",o,"."].join("");throw new Error(w)}return r},extract_shortest_path_from_predecessor_list:function(t,e){for(var i=[],o=e;o;)i.push(o),t[o],o=t[o];return i.reverse(),i},find_path:function(t,i,o){var r=e.single_source_shortest_paths(t,i,o);return e.extract_shortest_path_from_predecessor_list(r,o)},PriorityQueue:{make:function(t){var i,o=e.PriorityQueue,r={};for(i in t=t||{},o)o.hasOwnProperty(i)&&(r[i]=o[i]);return r.queue=[],r.sorter=t.sorter||o.default_sorter,r},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var i={value:t,cost:e};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=e},94922:(t,e,i)=>{const o=i(2501),r=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],a=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(t,e){switch(e){case o.L:return r[4*(t-1)+0];case o.M:return r[4*(t-1)+1];case o.Q:return r[4*(t-1)+2];case o.H:return r[4*(t-1)+3];default:return}},e.getTotalCodewordsCount=function(t,e){switch(e){case o.L:return a[4*(t-1)+0];case o.M:return a[4*(t-1)+1];case o.Q:return a[4*(t-1)+2];case o.H:return a[4*(t-1)+3];default:return}}},95567:t=>{function e(){this.buffer=[],this.length=0}e.prototype={get:function(t){const e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(let i=0;i<e;i++)this.putBit(1==(t>>>e-i-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=e},95586:(t,e)=>{e.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}},97127:(t,e,i)=>{"use strict";i(92490)},98615:(t,e,i)=>{"use strict";i.d(e,{C5:()=>a,Ky:()=>r,PG:()=>o});const o=/[.*+?^${}()|[\]\\]/gu,r=/[0-9,.]/u,a="https://reown.com"},99233:(t,e,i)=>{"use strict";i(36639)}}]);
//# sourceMappingURL=521.widget.iife.js.map