/*! For license information please see 3582.widget.iife.js.LICENSE.txt */
if(void 0===process)var process={env:{NODE_ENV:"production"},browser:!0,version:"",versions:{}};(this.webpackChunkHLWidget=this.webpackChunkHLWidget||[]).push([[3582],{379:(t,e,o)=>{"use strict";o.d(e,{_:()=>a,K:()=>l});var r=o(80971),i=o(64720),n=o(39341);const a=()=>new s;class s{}const c=new WeakMap,l=(0,n.u$)(class extends i.Kq{render(t){return r.s6}update(t,[e]){const o=e!==this.G;return o&&void 0!==this.G&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),r.s6}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.G){const e=this.ht??globalThis;let o=c.get(e);void 0===o&&(o=new WeakMap,c.set(e,o)),void 0!==o.get(this.G)&&this.G.call(this.ht,void 0),o.set(this.G,t),void 0!==t&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return"function"==typeof this.G?c.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})},2501:(t,e)=>{e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2},e.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},e.from=function(t,o){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+t)}}(t)}catch(t){return o}}},3824:(t,e,o)=>{const r=o(9074);function i(t,e){const o=t.a/255,r=e+'="'+t.hex+'"';return o<1?r+" "+e+'-opacity="'+o.toFixed(2).slice(1)+'"':r}function n(t,e,o){let r=t+e;return void 0!==o&&(r+=" "+o),r}e.render=function(t,e,o){const a=r.getOptions(e),s=t.modules.size,c=t.modules.data,l=s+2*a.margin,u=a.color.light.a?"<path "+i(a.color.light,"fill")+' d="M0 0h'+l+"v"+l+'H0z"/>':"",d="<path "+i(a.color.dark,"stroke")+' d="'+function(t,e,o){let r="",i=0,a=!1,s=0;for(let c=0;c<t.length;c++){const l=Math.floor(c%e),u=Math.floor(c/e);l||a||(a=!0),t[c]?(s++,c>0&&l>0&&t[c-1]||(r+=a?n("M",l+o,.5+u+o):n("m",i,0),i=0,a=!1),l+1<e&&t[c+1]||(r+=n("h",s),s=0)):i++}return r}(c,s,a.margin)+'"/>',h='viewBox="0 0 '+l+" "+l+'"',g='<svg xmlns="http://www.w3.org/2000/svg" '+(a.width?'width="'+a.width+'" height="'+a.width+'" ':"")+h+' shape-rendering="crispEdges">'+u+d+"</svg>\n";return"function"==typeof o&&o(null,g),g}},4537:(t,e,o)=>{"use strict";o.d(e,{w:()=>i});var r=o(69623);function i(t){return(0,r.M)({...t,state:!0,attribute:!1})}},8854:(t,e,o)=>{"use strict";o.d(e,{Up:()=>h});var r=o(76539),i=o(90101),n=o(52819),a=o(30413),s=o(34325),c=o(33461),l=o(7380),u=o(92999),d=o(8735);async function h(t){i.U.setSocialProvider(t,n.W.state.activeChain),s.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:t}}),"farcaster"===t?await async function(){c.I.push("ConnectingFarcaster");const t=a.a.getAuthConnector();if(t&&!i.U.state.farcasterUrl)try{const{url:e}=await t.provider.getFarcasterUri();i.U.setFarcasterUrl(e,n.W.state.activeChain)}catch(t){c.I.goBack(),l.P.showError(t)}}():await async function(t){c.I.push("ConnectingSocial");const e=a.a.getAuthConnector();let o=null;try{const a=setTimeout(()=>{throw new Error("Social login timed out. Please try again.")},45e3);if(e&&t){if(u.w.isTelegram()||(o=function(){try{return u.w.returnOpenHref(`${r.o.SECURE_SITE_SDK_ORIGIN}/loading`,"popupWindow","width=600,height=800,scrollbars=yes")}catch(t){throw new Error("Could not open social popup")}}()),o)i.U.setSocialWindow(o,n.W.state.activeChain);else if(!u.w.isTelegram())throw new Error("Could not create social popup");const{uri:s}=await e.provider.getSocialRedirectUri({provider:t});if(!s)throw o?.close(),new Error("Could not fetch the social redirect uri");if(o&&(o.location.href=s),u.w.isTelegram()){d.i.setTelegramSocialProvider(t);const e=u.w.formatTelegramSocialLoginUrl(s);u.w.openHref(e,"_top")}clearTimeout(a)}}catch(t){o?.close(),l.P.showError(t?.message)}}(t)}},9074:(t,e)=>{function o(t){if("number"==typeof t&&(t=t.toString()),"string"!=typeof t)throw new Error("Color should be defined as hex string");let e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map(function(t){return[t,t]}))),6===e.length&&e.push("F","F");const o=parseInt(e.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:255&o,hex:"#"+e.slice(0,6).join("")}}e.getOptions=function(t){t||(t={}),t.color||(t.color={});const e=void 0===t.margin||null===t.margin||t.margin<0?4:t.margin,r=t.width&&t.width>=21?t.width:void 0,i=t.scale||4;return{width:r,scale:r?4:i,margin:e,color:{dark:o(t.color.dark||"#000000ff"),light:o(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},e.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},e.getImageWidth=function(t,o){const r=e.getScale(t,o);return Math.floor((t+2*o.margin)*r)},e.qrToImageData=function(t,o,r){const i=o.modules.size,n=o.modules.data,a=e.getScale(i,r),s=Math.floor((i+2*r.margin)*a),c=r.margin*a,l=[r.color.light,r.color.dark];for(let e=0;e<s;e++)for(let o=0;o<s;o++){let u=4*(e*s+o),d=r.color.light;e>=c&&o>=c&&e<s-c&&o<s-c&&(d=l[n[Math.floor((e-c)/a)*i+Math.floor((o-c)/a)]?1:0]),t[u++]=d.r,t[u++]=d.g,t[u++]=d.b,t[u]=d.a}}},10593:(t,e,o)=>{const r=o(32500),i=o(82890);function n(t){this.mode=r.KANJI,this.data=t}n.getBitsLength=function(t){return 13*t},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let o=i.toSJIS(this.data[e]);if(o>=33088&&o<=40956)o-=33088;else{if(!(o>=57408&&o<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");o-=49472}o=192*(o>>>8&255)+(255&o),t.put(o,13)}},t.exports=n},13992:(t,e)=>{const o="[0-9]+";let r="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";r=r.replace(/u/g,"\\u");const i="(?:(?![A-Z0-9 $%*+\\-./:]|"+r+")(?:.|[\r\n]))+";e.KANJI=new RegExp(r,"g"),e.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),e.BYTE=new RegExp(i,"g"),e.NUMERIC=new RegExp(o,"g"),e.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");const n=new RegExp("^"+r+"$"),a=new RegExp("^"+o+"$"),s=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");e.testKanji=function(t){return n.test(t)},e.testNumeric=function(t){return a.test(t)},e.testAlphanumeric=function(t){return s.test(t)}},20766:(t,e,o)=>{"use strict";var r=o(48422),i=o(91427),n=o(56063),a=o(68664);const s=r.AH`
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
`;var c=function(t,e,o,r){var i,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(n<3?i(a):n>3?i(e,o,a):i(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let l=class extends r.WF{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText="--local-color: "+("inherit"===this.color?"inherit":`var(--wui-color-${this.color})`),this.dataset.size=this.size,r.qy`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};l.styles=[n.W5,s],c([(0,i.MZ)()],l.prototype,"color",void 0),c([(0,i.MZ)()],l.prototype,"size",void 0),l=c([(0,a.E)("wui-loading-spinner")],l)},22208:(t,e,o)=>{"use strict";o(82963)},23507:(t,e,o)=>{"use strict";o.d(e,{H:()=>n});var r=o(80971),i=o(39341);const n=(0,i.u$)(class extends i.WL{constructor(t){if(super(t),t.type!==i.OA.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const o=t.element.classList;for(const t of this.st)t in e||(o.remove(t),this.st.delete(t));for(const t in e){const r=!!e[t];r===this.st.has(t)||this.nt?.has(t)||(r?(o.add(t),this.st.add(t)):(o.remove(t),this.st.delete(t)))}return r.c0}})},23582:(t,e,o)=>{"use strict";o.r(e),o.d(e,{W3mConnectSocialsView:()=>x,W3mConnectingFarcasterView:()=>U,W3mConnectingSocialView:()=>B});var r=o(48422),i=o(91427),n=o(39168),a=o(25059),s=o(19400),c=o(72470),l=(o(43508),o(68855),o(57723),o(30413)),u=o(33461),d=o(13947),h=o(44340),g=o(8854),p=o(92999),f=(o(64416),o(69105));const w=r.AH`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var v=function(t,e,o,r){var i,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(n<3?i(a):n>3?i(e,o,a):i(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let b=class extends r.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=l.a.state.connectors,this.authConnector=this.connectors.find(t=>"AUTH"===t.type),this.remoteFeatures=s.H.state.remoteFeatures,this.isPwaLoading=!1,this.unsubscribe.push(l.a.subscribeKey("connectors",t=>{this.connectors=t,this.authConnector=this.connectors.find(t=>"AUTH"===t.type)}),s.H.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){let t=this.remoteFeatures?.socials||[];const e=Boolean(this.authConnector),o=t?.length,i="ConnectSocials"===u.I.state.view;return e&&o||i?(i&&!o&&(t=d.oU.DEFAULT_SOCIALS),r.qy` <wui-flex flexDirection="column" gap="xs">
      ${t.map(t=>r.qy`<wui-list-social
            @click=${()=>{this.onSocialClick(t)}}
            data-testid=${`social-selector-${t}`}
            name=${t}
            logo=${t}
            ?disabled=${this.isPwaLoading}
          ></wui-list-social>`)}
    </wui-flex>`):null}async onSocialClick(t){t&&await(0,g.Up)(t)}async handlePwaFrameLoad(){if(p.w.isPWA()){this.isPwaLoading=!0;try{this.authConnector?.provider instanceof f.Y&&await this.authConnector.provider.init()}catch(t){h.h.open({shortMessage:"Error loading embedded wallet in PWA",longMessage:t.message},"error")}finally{this.isPwaLoading=!1}}}};b.styles=w,v([(0,i.MZ)()],b.prototype,"tabIdx",void 0),v([(0,i.wk)()],b.prototype,"connectors",void 0),v([(0,i.wk)()],b.prototype,"authConnector",void 0),v([(0,i.wk)()],b.prototype,"remoteFeatures",void 0),v([(0,i.wk)()],b.prototype,"isPwaLoading",void 0),b=v([(0,c.EM)("w3m-social-login-list")],b);const y=r.AH`
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
`;var m=function(t,e,o,r){var i,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(n<3?i(a):n>3?i(e,o,a):i(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let x=class extends r.WF{constructor(){super(),this.unsubscribe=[],this.checked=a.o.state.isLegalCheckboxChecked,this.unsubscribe.push(a.o.subscribeKey("isLegalCheckboxChecked",t=>{this.checked=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{termsConditionsUrl:t,privacyPolicyUrl:e}=s.H.state,o=s.H.state.features?.legalCheckbox,i=Boolean(t||e)&&Boolean(o),a=i&&!this.checked,c=a?-1:void 0;return r.qy`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${i?["0","s","s","s"]:"s"}
        gap="xs"
        class=${(0,n.J)(a?"disabled":void 0)}
      >
        <w3m-social-login-list tabIdx=${(0,n.J)(c)}></w3m-social-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}};x.styles=y,m([(0,i.wk)()],x.prototype,"checked",void 0),x=m([(0,c.EM)("w3m-connect-socials-view")],x);var C=o(90101),k=o(52819),$=o(34325),E=o(90336),S=o(8735),P=o(7380),R=o(29327),A=o(42535),M=(o(52206),o(73921),o(79507),o(79932),o(89896)),T=o(44039);const I=r.AH`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }
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
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
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
  .capitalize {
    text-transform: capitalize;
  }
`;var z=function(t,e,o,r){var i,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(n<3?i(a):n>3?i(e,o,a):i(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let B=class extends r.WF{constructor(){super(),this.unsubscribe=[],this.socialProvider=C.U.state.socialProvider,this.socialWindow=C.U.state.socialWindow,this.error=!1,this.connecting=!1,this.message="Connect in the provider window",this.authConnector=l.a.getAuthConnector(),this.handleSocialConnection=async t=>{if(t.data?.resultUri)if(t.origin===T.o.SECURE_SITE_ORIGIN){window.removeEventListener("message",this.handleSocialConnection,!1);try{if(this.authConnector&&!this.connecting){this.socialWindow&&(this.socialWindow.close(),C.U.setSocialWindow(void 0,k.W.state.activeChain)),this.connecting=!0,this.updateMessage();const e=t.data.resultUri;this.socialProvider&&$.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}}),await E.x.connectExternal({id:this.authConnector.id,type:this.authConnector.type,socialUri:e},this.authConnector.chain),this.socialProvider&&(S.i.setConnectedSocialProvider(this.socialProvider),$.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}))}}catch(t){this.error=!0,this.updateMessage(),this.socialProvider&&$.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})}}else u.I.goBack(),P.P.showError("Untrusted Origin"),this.socialProvider&&$.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})},M.R.EmbeddedWalletAbortController.signal.addEventListener("abort",()=>{this.socialWindow&&(this.socialWindow.close(),C.U.setSocialWindow(void 0,k.W.state.activeChain))}),this.unsubscribe.push(C.U.subscribe(t=>{t.socialProvider&&(this.socialProvider=t.socialProvider),t.socialWindow&&(this.socialWindow=t.socialWindow),t.address&&(R.W.state.open||s.H.state.enableEmbedded)&&R.W.close()})),this.authConnector&&this.connectSocial()}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),window.removeEventListener("message",this.handleSocialConnection,!1),this.socialWindow?.close(),C.U.setSocialWindow(void 0,k.W.state.activeChain)}render(){return r.qy`
      <wui-flex
        data-error=${(0,n.J)(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${(0,n.J)(this.socialProvider)}></wui-logo>
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
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >Log in with
            <span class="capitalize">${this.socialProvider??"Social"}</span></wui-text
          >
          <wui-text align="center" variant="small-400" color=${this.error?"error-100":"fg-200"}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `}loaderTemplate(){const t=A.W.state.themeVariables["--w3m-border-radius-master"],e=t?parseInt(t.replace("px",""),10):4;return r.qy`<wui-loading-thumbnail radius=${9*e}></wui-loading-thumbnail>`}connectSocial(){const t=setInterval(()=>{this.socialWindow?.closed&&(this.connecting||"ConnectingSocial"!==u.I.state.view||(this.socialProvider&&$.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_CANCELED",properties:{provider:this.socialProvider}}),u.I.goBack()),clearInterval(t))},1e3);window.addEventListener("message",this.handleSocialConnection,!1)}updateMessage(){this.error?this.message="Something went wrong":this.connecting?this.message="Retrieving user data":this.message="Connect in the provider window"}};B.styles=I,z([(0,i.wk)()],B.prototype,"socialProvider",void 0),z([(0,i.wk)()],B.prototype,"socialWindow",void 0),z([(0,i.wk)()],B.prototype,"error",void 0),z([(0,i.wk)()],B.prototype,"connecting",void 0),z([(0,i.wk)()],B.prototype,"message",void 0),B=z([(0,c.EM)("w3m-connecting-social-view")],B),o(80659),o(37498),o(38991),o(90141),o(22208);const L=r.AH`
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

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
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
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
`;var O=function(t,e,o,r){var i,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(n<3?i(a):n>3?i(e,o,a):i(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let U=class extends r.WF{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.socialProvider=C.U.state.socialProvider,this.uri=C.U.state.farcasterUrl,this.ready=!1,this.loading=!1,this.authConnector=l.a.getAuthConnector(),this.forceUpdate=()=>{this.requestUpdate()},this.unsubscribe.push(C.U.subscribeKey("farcasterUrl",t=>{t&&(this.uri=t,this.connectFarcaster())}),C.U.subscribeKey("socialProvider",t=>{t&&(this.socialProvider=t)})),window.addEventListener("resize",this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timeout),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),r.qy`${this.platformTemplate()}`}platformTemplate(){return p.w.isMobile()?r.qy`${this.mobileTemplate()}`:r.qy`${this.desktopTemplate()}`}desktopTemplate(){return this.loading?r.qy`${this.loadingTemplate()}`:r.qy`${this.qrTemplate()}`}qrTemplate(){return r.qy` <wui-flex
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
    </wui-flex>`}loadingTemplate(){return r.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo="farcaster"></wui-logo>
          ${this.loaderTemplate()}
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
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Loading user data
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Please wait a moment while we load your data.
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}mobileTemplate(){return r.qy` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["3xl","xl","xl","xl"]}
      gap="xl"
    >
      <wui-flex justifyContent="center" alignItems="center">
        <wui-logo logo="farcaster"></wui-logo>
        ${this.loaderTemplate()}
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
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >Continue in Farcaster</span></wui-text
        >
        <wui-text align="center" variant="small-400" color="fg-200"
          >Accept connection request in the app</wui-text
        ></wui-flex
      >
      ${this.mobileLinkTemplate()}
    </wui-flex>`}loaderTemplate(){const t=A.W.state.themeVariables["--w3m-border-radius-master"],e=t?parseInt(t.replace("px",""),10):4;return r.qy`<wui-loading-thumbnail radius=${9*e}></wui-loading-thumbnail>`}async connectFarcaster(){if(this.authConnector)try{await(this.authConnector?.provider.connectFarcaster()),this.socialProvider&&(S.i.setConnectedSocialProvider(this.socialProvider),$.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}})),this.loading=!0,await E.x.connectExternal(this.authConnector,this.authConnector.chain),this.socialProvider&&$.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}),this.loading=!1,R.W.close()}catch(t){this.socialProvider&&$.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}}),u.I.goBack(),P.P.showError(t)}}mobileLinkTemplate(){return r.qy`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri||this.loading}
      @click=${()=>{this.uri&&p.w.openHref(this.uri,"_blank")}}
    >
      Open farcaster</wui-button
    >`}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const t=this.getBoundingClientRect().width-40;return r.qy` <wui-qr-code
      size=${t}
      theme=${A.W.state.themeMode}
      uri=${this.uri}
      ?farcaster=${!0}
      data-testid="wui-qr-code"
      color=${(0,n.J)(A.W.state.themeVariables["--w3m-qr-color"])}
    ></wui-qr-code>`}copyTemplate(){const t=!this.uri||!this.ready;return r.qy`<wui-link
      .disabled=${t}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}onCopyUri(){try{this.uri&&(p.w.copyToClopboard(this.uri),P.P.showSuccess("Link copied"))}catch{P.P.showError("Failed to copy")}}};U.styles=L,O([(0,i.wk)()],U.prototype,"socialProvider",void 0),O([(0,i.wk)()],U.prototype,"uri",void 0),O([(0,i.wk)()],U.prototype,"ready",void 0),O([(0,i.wk)()],U.prototype,"loading",void 0),U=O([(0,c.EM)("w3m-connecting-farcaster-view")],U)},24909:(t,e,o)=>{const r=o(73743);e.mul=function(t,e){const o=new Uint8Array(t.length+e.length-1);for(let i=0;i<t.length;i++)for(let n=0;n<e.length;n++)o[i+n]^=r.mul(t[i],e[n]);return o},e.mod=function(t,e){let o=new Uint8Array(t);for(;o.length-e.length>=0;){const t=o[0];for(let i=0;i<e.length;i++)o[i]^=r.mul(e[i],t);let i=0;for(;i<o.length&&0===o[i];)i++;o=o.slice(i)}return o},e.generateECPolynomial=function(t){let o=new Uint8Array([1]);for(let i=0;i<t;i++)o=e.mul(o,new Uint8Array([1,r.exp(i)]));return o}},25059:(t,e,o)=>{"use strict";o.d(e,{o:()=>a});var r=o(44822),i=o(36517);const n=(0,r.BX)({isLegalCheckboxChecked:!1}),a={state:n,subscribe:t=>(0,r.B1)(n,()=>t(n)),subscribeKey:(t,e)=>(0,i.u$)(n,t,e),setIsLegalCheckboxChecked(t){n.isLegalCheckboxChecked=t}}},26264:(t,e)=>{e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};function o(t,o,r){switch(t){case e.Patterns.PATTERN000:return(o+r)%2==0;case e.Patterns.PATTERN001:return o%2==0;case e.Patterns.PATTERN010:return r%3==0;case e.Patterns.PATTERN011:return(o+r)%3==0;case e.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(r/3))%2==0;case e.Patterns.PATTERN101:return o*r%2+o*r%3==0;case e.Patterns.PATTERN110:return(o*r%2+o*r%3)%2==0;case e.Patterns.PATTERN111:return(o*r%3+(o+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}}e.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(t){const e=t.size;let o=0,r=0,i=0,n=null,a=null;for(let s=0;s<e;s++){r=i=0,n=a=null;for(let c=0;c<e;c++){let e=t.get(s,c);e===n?r++:(r>=5&&(o+=r-5+3),n=e,r=1),e=t.get(c,s),e===a?i++:(i>=5&&(o+=i-5+3),a=e,i=1)}r>=5&&(o+=r-5+3),i>=5&&(o+=i-5+3)}return o},e.getPenaltyN2=function(t){const e=t.size;let o=0;for(let r=0;r<e-1;r++)for(let i=0;i<e-1;i++){const e=t.get(r,i)+t.get(r,i+1)+t.get(r+1,i)+t.get(r+1,i+1);4!==e&&0!==e||o++}return 3*o},e.getPenaltyN3=function(t){const e=t.size;let o=0,r=0,i=0;for(let n=0;n<e;n++){r=i=0;for(let a=0;a<e;a++)r=r<<1&2047|t.get(n,a),a>=10&&(1488===r||93===r)&&o++,i=i<<1&2047|t.get(a,n),a>=10&&(1488===i||93===i)&&o++}return 40*o},e.getPenaltyN4=function(t){let e=0;const o=t.data.length;for(let r=0;r<o;r++)e+=t.data[r];return 10*Math.abs(Math.ceil(100*e/o/5)-10)},e.applyMask=function(t,e){const r=e.size;for(let i=0;i<r;i++)for(let n=0;n<r;n++)e.isReserved(n,i)||e.xor(n,i,o(t,n,i))},e.getBestMask=function(t,o){const r=Object.keys(e.Patterns).length;let i=0,n=1/0;for(let a=0;a<r;a++){o(a),e.applyMask(a,t);const r=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(a,t),r<n&&(n=r,i=a)}return i}},27165:(t,e,o)=>{"use strict";o.d(e,{Rt:()=>a,sO:()=>n});var r=o(80971);const{I:i}=r.ge,n=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=t=>void 0===t.strings},31037:(t,e,o)=>{"use strict";var r=o(48422),i=o(91427),n=o(56063),a=o(68664);const s=r.AH`
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
`;var c=function(t,e,o,r){var i,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(n<3?i(a):n>3?i(e,o,a):i(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let l=class extends r.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`\n      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      `,r.qy`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};l.styles=[n.W5,n.ck,s],c([(0,i.MZ)()],l.prototype,"src",void 0),c([(0,i.MZ)()],l.prototype,"alt",void 0),c([(0,i.MZ)()],l.prototype,"size",void 0),l=c([(0,a.E)("wui-image")],l)},32240:(t,e,o)=>{const r=o(24909);function i(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}i.prototype.initialize=function(t){this.degree=t,this.genPoly=r.generateECPolynomial(this.degree)},i.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const e=new Uint8Array(t.length+this.degree);e.set(t);const o=r.mod(e,this.genPoly),i=this.degree-o.length;if(i>0){const t=new Uint8Array(this.degree);return t.set(o,i),t}return o},t.exports=i},32500:(t,e,o)=>{const r=o(95586),i=o(13992);e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!r.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]},e.getBestModeForData=function(t){return i.testNumeric(t)?e.NUMERIC:i.testAlphanumeric(t)?e.ALPHANUMERIC:i.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},e.isValid=function(t){return t&&t.bit&&t.ccBits},e.from=function(t,o){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+t)}}(t)}catch(t){return o}}},32971:(t,e,o)=>{"use strict";o.d(e,{T:()=>h});var r=o(80971),i=o(27165),n=o(64720);class a{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class s{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}var c=o(39341);const l=t=>!(0,i.sO)(t)&&"function"==typeof t.then,u=1073741823;class d extends n.Kq{constructor(){super(...arguments),this._$Cwt=u,this._$Cbt=[],this._$CK=new a(this),this._$CX=new s}render(...t){return t.find(t=>!l(t))??r.c0}update(t,e){const o=this._$Cbt;let i=o.length;this._$Cbt=e;const n=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$Cwt);t++){const r=e[t];if(!l(r))return this._$Cwt=t,r;t<i&&r===o[t]||(this._$Cwt=u,i=0,Promise.resolve(r).then(async t=>{for(;a.get();)await a.get();const e=n.deref();if(void 0!==e){const o=e._$Cbt.indexOf(r);o>-1&&o<e._$Cwt&&(e._$Cwt=o,e.setValue(t))}}))}return r.c0}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const h=(0,c.u$)(d)},33165:(t,e,o)=>{"use strict";var r=o(48422),i=o(91427),n=o(56063),a=o(71686),s=o(68664);const c=r.AH`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var l=function(t,e,o,r){var i,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(n<3?i(a):n>3?i(e,o,a):i(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let u=class extends r.WF{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&a.Z.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&a.Z.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&a.Z.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&a.Z.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&a.Z.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&a.Z.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&a.Z.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&a.Z.getSpacingStyles(this.margin,3)};\n    `,r.qy`<slot></slot>`}};u.styles=[n.W5,c],l([(0,i.MZ)()],u.prototype,"flexDirection",void 0),l([(0,i.MZ)()],u.prototype,"flexWrap",void 0),l([(0,i.MZ)()],u.prototype,"flexBasis",void 0),l([(0,i.MZ)()],u.prototype,"flexGrow",void 0),l([(0,i.MZ)()],u.prototype,"flexShrink",void 0),l([(0,i.MZ)()],u.prototype,"alignItems",void 0),l([(0,i.MZ)()],u.prototype,"justifyContent",void 0),l([(0,i.MZ)()],u.prototype,"columnGap",void 0),l([(0,i.MZ)()],u.prototype,"rowGap",void 0),l([(0,i.MZ)()],u.prototype,"gap",void 0),l([(0,i.MZ)()],u.prototype,"padding",void 0),l([(0,i.MZ)()],u.prototype,"margin",void 0),u=l([(0,s.E)("wui-flex")],u)},33448:t=>{function e(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}e.prototype.set=function(t,e,o,r){const i=t*this.size+e;this.data[i]=o,r&&(this.reservedBit[i]=!0)},e.prototype.get=function(t,e){return this.data[t*this.size+e]},e.prototype.xor=function(t,e,o){this.data[t*this.size+e]^=o},e.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]},t.exports=e},37498:(t,e,o)=>{"use strict";o(59481)},38991:(t,e,o)=>{"use strict";var r=o(48422),i=o(91427),n=o(39168),a=(o(82207),o(56063)),s=o(68664);const c=r.AH`
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
`;var l=function(t,e,o,r){var i,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(n<3?i(a):n>3?i(e,o,a):i(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let u=class extends r.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return r.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,n.J)(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};u.styles=[a.W5,a.fD,c],l([(0,i.MZ)()],u.prototype,"tabIdx",void 0),l([(0,i.MZ)({type:Boolean})],u.prototype,"disabled",void 0),l([(0,i.MZ)()],u.prototype,"color",void 0),u=l([(0,s.E)("wui-link")],u)},39168:(t,e,o)=>{"use strict";o.d(e,{J:()=>i});var r=o(80971);const i=t=>t??r.s6},39341:(t,e,o)=>{"use strict";o.d(e,{OA:()=>r,WL:()=>n,u$:()=>i});const r={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},i=t=>(...e)=>({_$litDirective$:t,values:e});class n{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},42188:t=>{"use strict";t.exports=function(t){for(var e=[],o=t.length,r=0;r<o;r++){var i=t.charCodeAt(r);if(i>=55296&&i<=56319&&o>r+1){var n=t.charCodeAt(r+1);n>=56320&&n<=57343&&(i=1024*(i-55296)+n-56320+65536,r+=1)}i<128?e.push(i):i<2048?(e.push(i>>6|192),e.push(63&i|128)):i<55296||i>=57344&&i<65536?(e.push(i>>12|224),e.push(i>>6&63|128),e.push(63&i|128)):i>=65536&&i<=1114111?(e.push(i>>18|240),e.push(i>>12&63|128),e.push(i>>6&63|128),e.push(63&i|128)):e.push(239,191,189)}return new Uint8Array(e).buffer}},43401:(t,e,o)=>{const r=o(82890),i=o(2501),n=o(95567),a=o(33448),s=o(43825),c=o(54392),l=o(26264),u=o(94922),d=o(32240),h=o(93887),g=o(94753),p=o(32500),f=o(94541);function w(t,e,o){const r=t.size,i=g.getEncodedBits(e,o);let n,a;for(n=0;n<15;n++)a=1==(i>>n&1),n<6?t.set(n,8,a,!0):n<8?t.set(n+1,8,a,!0):t.set(r-15+n,8,a,!0),n<8?t.set(8,r-n-1,a,!0):n<9?t.set(8,15-n-1+1,a,!0):t.set(8,15-n-1,a,!0);t.set(r-8,8,1,!0)}function v(t,e,o,i){let g;if(Array.isArray(t))g=f.fromArray(t);else{if("string"!=typeof t)throw new Error("Invalid data");{let r=e;if(!r){const e=f.rawSplit(t);r=h.getBestVersionForData(e,o)}g=f.fromString(t,r||40)}}const v=h.getBestVersionForData(g,o);if(!v)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<v)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+v+".\n")}else e=v;const b=function(t,e,o){const i=new n;o.forEach(function(e){i.put(e.mode.bit,4),i.put(e.getLength(),p.getCharCountIndicator(e.mode,t)),e.write(i)});const a=8*(r.getSymbolTotalCodewords(t)-u.getTotalCodewordsCount(t,e));for(i.getLengthInBits()+4<=a&&i.put(0,4);i.getLengthInBits()%8!=0;)i.putBit(0);const s=(a-i.getLengthInBits())/8;for(let t=0;t<s;t++)i.put(t%2?17:236,8);return function(t,e,o){const i=r.getSymbolTotalCodewords(e),n=i-u.getTotalCodewordsCount(e,o),a=u.getBlocksCount(e,o),s=a-i%a,c=Math.floor(i/a),l=Math.floor(n/a),h=l+1,g=c-l,p=new d(g);let f=0;const w=new Array(a),v=new Array(a);let b=0;const y=new Uint8Array(t.buffer);for(let t=0;t<a;t++){const e=t<s?l:h;w[t]=y.slice(f,f+e),v[t]=p.encode(w[t]),f+=e,b=Math.max(b,e)}const m=new Uint8Array(i);let x,C,k=0;for(x=0;x<b;x++)for(C=0;C<a;C++)x<w[C].length&&(m[k++]=w[C][x]);for(x=0;x<g;x++)for(C=0;C<a;C++)m[k++]=v[C][x];return m}(i,t,e)}(e,o,g),y=r.getSymbolSize(e),m=new a(y);return function(t,e){const o=t.size,r=c.getPositions(e);for(let e=0;e<r.length;e++){const i=r[e][0],n=r[e][1];for(let e=-1;e<=7;e++)if(!(i+e<=-1||o<=i+e))for(let r=-1;r<=7;r++)n+r<=-1||o<=n+r||(e>=0&&e<=6&&(0===r||6===r)||r>=0&&r<=6&&(0===e||6===e)||e>=2&&e<=4&&r>=2&&r<=4?t.set(i+e,n+r,!0,!0):t.set(i+e,n+r,!1,!0))}}(m,e),function(t){const e=t.size;for(let o=8;o<e-8;o++){const e=o%2==0;t.set(o,6,e,!0),t.set(6,o,e,!0)}}(m),function(t,e){const o=s.getPositions(e);for(let e=0;e<o.length;e++){const r=o[e][0],i=o[e][1];for(let e=-2;e<=2;e++)for(let o=-2;o<=2;o++)-2===e||2===e||-2===o||2===o||0===e&&0===o?t.set(r+e,i+o,!0,!0):t.set(r+e,i+o,!1,!0)}}(m,e),w(m,o,0),e>=7&&function(t,e){const o=t.size,r=h.getEncodedBits(e);let i,n,a;for(let e=0;e<18;e++)i=Math.floor(e/3),n=e%3+o-8-3,a=1==(r>>e&1),t.set(i,n,a,!0),t.set(n,i,a,!0)}(m,e),function(t,e){const o=t.size;let r=-1,i=o-1,n=7,a=0;for(let s=o-1;s>0;s-=2)for(6===s&&s--;;){for(let o=0;o<2;o++)if(!t.isReserved(i,s-o)){let r=!1;a<e.length&&(r=1==(e[a]>>>n&1)),t.set(i,s-o,r),n--,-1===n&&(a++,n=7)}if(i+=r,i<0||o<=i){i-=r,r=-r;break}}}(m,b),isNaN(i)&&(i=l.getBestMask(m,w.bind(null,m,o))),l.applyMask(i,m),w(m,o,i),{modules:m,version:e,errorCorrectionLevel:o,maskPattern:i,segments:g}}e.create=function(t,e){if(void 0===t||""===t)throw new Error("No input text");let o,n,a=i.M;return void 0!==e&&(a=i.from(e.errorCorrectionLevel,i.M),o=h.from(e.version),n=l.from(e.maskPattern),e.toSJISFunc&&r.setToSJISFunction(e.toSJISFunc)),v(t,o,a,n)}},43508:(t,e,o)=>{"use strict";o(33165)},43825:(t,e,o)=>{const r=o(82890).getSymbolSize;e.getRowColCoords=function(t){if(1===t)return[];const e=Math.floor(t/7)+2,o=r(t),i=145===o?26:2*Math.ceil((o-13)/(2*e-2)),n=[o-7];for(let t=1;t<e-1;t++)n[t]=n[t-1]-i;return n.push(6),n.reverse()},e.getPositions=function(t){const o=[],r=e.getRowColCoords(t),i=r.length;for(let t=0;t<i;t++)for(let e=0;e<i;e++)0===t&&0===e||0===t&&e===i-1||t===i-1&&0===e||o.push([r[t],r[e]]);return o}},45666:(t,e,o)=>{const r=o(42188),i=o(32500);function n(t){this.mode=i.BYTE,"string"==typeof t&&(t=r(t)),this.data=new Uint8Array(t)}n.getBitsLength=function(t){return 8*t},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(t){for(let e=0,o=this.data.length;e<o;e++)t.put(this.data[e],8)},t.exports=n},50409:(t,e,o)=>{"use strict";var r=o(48422),i=o(91427),n=(o(59481),o(56063)),a=o(68664);const s=r.AH`
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
`;var c=function(t,e,o,r){var i,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(n<3?i(a):n>3?i(e,o,a):i(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let l=class extends r.WF{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const t=this.iconSize||this.size,e="lg"===this.size,o="xl"===this.size,i=e?"12%":"16%",n=e?"xxs":o?"s":"3xl",a="gray"===this.background,s="opaque"===this.background,c="accent-100"===this.backgroundColor&&s||"success-100"===this.backgroundColor&&s||"error-100"===this.backgroundColor&&s||"inverse-100"===this.backgroundColor&&s;let l=`var(--wui-color-${this.backgroundColor})`;return c?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:a&&(l=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${l};\n       --local-bg-mix: ${c||a?"100%":i};\n       --local-border-radius: var(--wui-border-radius-${n});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,r.qy` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};l.styles=[n.W5,n.fD,s],c([(0,i.MZ)()],l.prototype,"size",void 0),c([(0,i.MZ)()],l.prototype,"backgroundColor",void 0),c([(0,i.MZ)()],l.prototype,"iconColor",void 0),c([(0,i.MZ)()],l.prototype,"iconSize",void 0),c([(0,i.MZ)()],l.prototype,"background",void 0),c([(0,i.MZ)({type:Boolean})],l.prototype,"border",void 0),c([(0,i.MZ)()],l.prototype,"borderColor",void 0),c([(0,i.MZ)()],l.prototype,"icon",void 0),l=c([(0,a.E)("wui-icon-box")],l)},52206:(t,e,o)=>{"use strict";o(50409)},54392:(t,e,o)=>{const r=o(82890).getSymbolSize;e.getPositions=function(t){const e=r(t);return[[0,0],[e-7,0],[0,e-7]]}},57723:(t,e,o)=>{"use strict";var r=o(48422),i=o(91427),n=o(19400),a=o(72470);o(43508),o(79932),o(79723);const s=r.AH`
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
`;var c=function(t,e,o,r){var i,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(n<3?i(a):n>3?i(e,o,a):i(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let l=class extends r.WF{constructor(){super(),this.unsubscribe=[],this.remoteFeatures=n.H.state.remoteFeatures,this.unsubscribe.push(n.H.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{termsConditionsUrl:t,privacyPolicyUrl:e}=n.H.state,o=n.H.state.features?.legalCheckbox;return!t&&!e||o?r.qy`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(!0)} </wui-flex>
      `:r.qy`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
          <wui-text color="fg-250" variant="small-400" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:t,privacyPolicyUrl:e}=n.H.state;return t&&e?"and":""}termsTemplate(){const{termsConditionsUrl:t}=n.H.state;return t?r.qy`<a href=${t}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:t}=n.H.state;return t?r.qy`<a href=${t}>Privacy Policy</a>`:null}reownBrandingTemplate(t=!1){return this.remoteFeatures?.reownBranding?t?r.qy`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`:r.qy`<wui-ux-by-reown></wui-ux-by-reown>`:null}};l.styles=[s],c([(0,i.wk)()],l.prototype,"remoteFeatures",void 0),l=c([(0,a.EM)("w3m-legal-footer")],l)},59481:(t,e,o)=>{"use strict";var r=o(48422),i=o(91427),n=o(32971);const a=new class{constructor(){this.cache=new Map}set(t,e){this.cache.set(t,e)}get(t){return this.cache.get(t)}has(t){return this.cache.has(t)}delete(t){this.cache.delete(t)}clear(){this.cache.clear()}};var s=o(56063),c=o(68664);const l=r.AH`
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
`;var u=function(t,e,o,r){var i,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(n<3?i(a):n>3?i(e,o,a):i(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};const d={add:async()=>(await o.e(8186).then(o.bind(o,88186))).addSvg,allWallets:async()=>(await o.e(9569).then(o.bind(o,39569))).allWalletsSvg,arrowBottomCircle:async()=>(await o.e(5995).then(o.bind(o,25995))).arrowBottomCircleSvg,appStore:async()=>(await o.e(3774).then(o.bind(o,3774))).appStoreSvg,apple:async()=>(await o.e(5929).then(o.bind(o,15929))).appleSvg,arrowBottom:async()=>(await o.e(1198).then(o.bind(o,11198))).arrowBottomSvg,arrowLeft:async()=>(await o.e(9760).then(o.bind(o,29760))).arrowLeftSvg,arrowRight:async()=>(await o.e(4659).then(o.bind(o,94659))).arrowRightSvg,arrowTop:async()=>(await o.e(3690).then(o.bind(o,43690))).arrowTopSvg,bank:async()=>(await o.e(627).then(o.bind(o,80627))).bankSvg,browser:async()=>(await o.e(6913).then(o.bind(o,16913))).browserSvg,card:async()=>(await o.e(1327).then(o.bind(o,1327))).cardSvg,checkmark:async()=>(await o.e(1480).then(o.bind(o,31480))).checkmarkSvg,checkmarkBold:async()=>(await o.e(486).then(o.bind(o,70486))).checkmarkBoldSvg,chevronBottom:async()=>(await o.e(3928).then(o.bind(o,33928))).chevronBottomSvg,chevronLeft:async()=>(await o.e(3682).then(o.bind(o,23682))).chevronLeftSvg,chevronRight:async()=>(await o.e(7701).then(o.bind(o,17701))).chevronRightSvg,chevronTop:async()=>(await o.e(2592).then(o.bind(o,62592))).chevronTopSvg,chromeStore:async()=>(await o.e(1903).then(o.bind(o,1903))).chromeStoreSvg,clock:async()=>(await o.e(6027).then(o.bind(o,76027))).clockSvg,close:async()=>(await o.e(7545).then(o.bind(o,17545))).closeSvg,compass:async()=>(await o.e(2097).then(o.bind(o,2097))).compassSvg,coinPlaceholder:async()=>(await o.e(9919).then(o.bind(o,79919))).coinPlaceholderSvg,copy:async()=>(await o.e(340).then(o.bind(o,90340))).copySvg,cursor:async()=>(await o.e(9119).then(o.bind(o,29119))).cursorSvg,cursorTransparent:async()=>(await o.e(1944).then(o.bind(o,1944))).cursorTransparentSvg,desktop:async()=>(await o.e(3277).then(o.bind(o,73277))).desktopSvg,disconnect:async()=>(await o.e(2923).then(o.bind(o,2923))).disconnectSvg,discord:async()=>(await o.e(6977).then(o.bind(o,6977))).discordSvg,etherscan:async()=>(await o.e(3092).then(o.bind(o,73092))).etherscanSvg,extension:async()=>(await o.e(5712).then(o.bind(o,55712))).extensionSvg,externalLink:async()=>(await o.e(7563).then(o.bind(o,57563))).externalLinkSvg,facebook:async()=>(await o.e(8865).then(o.bind(o,98865))).facebookSvg,farcaster:async()=>(await o.e(4132).then(o.bind(o,74132))).farcasterSvg,filters:async()=>(await o.e(9222).then(o.bind(o,69222))).filtersSvg,github:async()=>(await o.e(9178).then(o.bind(o,89178))).githubSvg,google:async()=>(await o.e(3106).then(o.bind(o,13106))).googleSvg,helpCircle:async()=>(await o.e(4691).then(o.bind(o,34691))).helpCircleSvg,image:async()=>(await o.e(9652).then(o.bind(o,99652))).imageSvg,id:async()=>(await o.e(1636).then(o.bind(o,11636))).idSvg,infoCircle:async()=>(await o.e(298).then(o.bind(o,60298))).infoCircleSvg,lightbulb:async()=>(await o.e(54).then(o.bind(o,20054))).lightbulbSvg,mail:async()=>(await o.e(9930).then(o.bind(o,39930))).mailSvg,mobile:async()=>(await o.e(2475).then(o.bind(o,12475))).mobileSvg,more:async()=>(await o.e(6856).then(o.bind(o,36856))).moreSvg,networkPlaceholder:async()=>(await o.e(3387).then(o.bind(o,73387))).networkPlaceholderSvg,nftPlaceholder:async()=>(await o.e(3472).then(o.bind(o,53472))).nftPlaceholderSvg,off:async()=>(await o.e(4668).then(o.bind(o,54668))).offSvg,playStore:async()=>(await o.e(7755).then(o.bind(o,7755))).playStoreSvg,plus:async()=>(await o.e(2945).then(o.bind(o,22945))).plusSvg,qrCode:async()=>(await o.e(4034).then(o.bind(o,44034))).qrCodeIcon,recycleHorizontal:async()=>(await o.e(5045).then(o.bind(o,85045))).recycleHorizontalSvg,refresh:async()=>(await o.e(4290).then(o.bind(o,44290))).refreshSvg,search:async()=>(await o.e(3333).then(o.bind(o,73333))).searchSvg,send:async()=>(await o.e(8535).then(o.bind(o,18535))).sendSvg,swapHorizontal:async()=>(await o.e(9586).then(o.bind(o,49586))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await o.e(7773).then(o.bind(o,17773))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await o.e(9325).then(o.bind(o,9325))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await o.e(7562).then(o.bind(o,47562))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await o.e(2168).then(o.bind(o,82168))).swapVerticalSvg,telegram:async()=>(await o.e(8166).then(o.bind(o,88166))).telegramSvg,threeDots:async()=>(await o.e(1874).then(o.bind(o,51874))).threeDotsSvg,twitch:async()=>(await o.e(7218).then(o.bind(o,17218))).twitchSvg,twitter:async()=>(await o.e(3489).then(o.bind(o,93489))).xSvg,twitterIcon:async()=>(await o.e(9023).then(o.bind(o,69023))).twitterIconSvg,verify:async()=>(await o.e(2120).then(o.bind(o,52120))).verifySvg,verifyFilled:async()=>(await o.e(5337).then(o.bind(o,45337))).verifyFilledSvg,wallet:async()=>(await o.e(440).then(o.bind(o,60440))).walletSvg,walletConnect:async()=>(await o.e(3300).then(o.bind(o,33300))).walletConnectSvg,walletConnectLightBrown:async()=>(await o.e(3300).then(o.bind(o,33300))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await o.e(3300).then(o.bind(o,33300))).walletConnectBrownSvg,walletPlaceholder:async()=>(await o.e(5556).then(o.bind(o,25556))).walletPlaceholderSvg,warningCircle:async()=>(await o.e(7910).then(o.bind(o,87910))).warningCircleSvg,x:async()=>(await o.e(3489).then(o.bind(o,93489))).xSvg,info:async()=>(await o.e(917).then(o.bind(o,10917))).infoSvg,exclamationTriangle:async()=>(await o.e(2557).then(o.bind(o,32557))).exclamationTriangleSvg,reown:async()=>(await o.e(1864).then(o.bind(o,41864))).reownSvg};let h=class extends r.WF{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n      --local-aspect-ratio: ${this.aspectRatio}\n    `,r.qy`${(0,n.T)(async function(t){if(a.has(t))return a.get(t);const e=(d[t]??d.copy)();return a.set(t,e),e}(this.name),r.qy`<div class="fallback"></div>`)}`}};h.styles=[s.W5,s.ck,l],u([(0,i.MZ)()],h.prototype,"size",void 0),u([(0,i.MZ)()],h.prototype,"name",void 0),u([(0,i.MZ)()],h.prototype,"color",void 0),u([(0,i.MZ)()],h.prototype,"aspectRatio",void 0),h=u([(0,c.E)("wui-icon")],h)},59909:(t,e,o)=>{const r=o(32500),i=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function n(t){this.mode=r.ALPHANUMERIC,this.data=t}n.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let o=45*i.indexOf(this.data[e]);o+=i.indexOf(this.data[e+1]),t.put(o,11)}this.data.length%2&&t.put(i.indexOf(this.data[e]),6)},t.exports=n},60097:(t,e,o)=>{const r=o(32500);function i(t){this.mode=r.NUMERIC,this.data=t.toString()}i.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){let e,o,r;for(e=0;e+3<=this.data.length;e+=3)o=this.data.substr(e,3),r=parseInt(o,10),t.put(r,10);const i=this.data.length-e;i>0&&(o=this.data.substr(e),r=parseInt(o,10),t.put(r,3*i+1))},t.exports=i},63718:(t,e,o)=>{"use strict";var r=o(48422),i=o(91427),n=(o(20766),o(82207),o(56063)),a=o(68664);const s=r.AH`
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
`;var c=function(t,e,o,r){var i,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(n<3?i(a):n>3?i(e,o,a):i(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};const l={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},u={lg:"paragraph-600",md:"small-600"},d={lg:"md",md:"md"};let h=class extends r.WF{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`\n    --local-width: ${this.fullWidth?"100%":"auto"};\n    --local-opacity-100: ${this.loading?0:1};\n    --local-opacity-000: ${this.loading?1:0};\n    --local-border-radius: var(--wui-border-radius-${this.borderRadius});\n    `;const t=this.textVariant??u[this.size];return r.qy`
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
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const t=d[this.size],e=this.disabled?l.disabled:l[this.variant];return r.qy`<wui-loading-spinner color=${e} size=${t}></wui-loading-spinner>`}return r.qy``}};h.styles=[n.W5,n.fD,s],c([(0,i.MZ)()],h.prototype,"size",void 0),c([(0,i.MZ)({type:Boolean})],h.prototype,"disabled",void 0),c([(0,i.MZ)({type:Boolean})],h.prototype,"fullWidth",void 0),c([(0,i.MZ)({type:Boolean})],h.prototype,"loading",void 0),c([(0,i.MZ)()],h.prototype,"variant",void 0),c([(0,i.MZ)({type:Boolean})],h.prototype,"hasIconLeft",void 0),c([(0,i.MZ)({type:Boolean})],h.prototype,"hasIconRight",void 0),c([(0,i.MZ)()],h.prototype,"borderRadius",void 0),c([(0,i.MZ)()],h.prototype,"textVariant",void 0),h=c([(0,a.E)("wui-button")],h)},64416:(t,e,o)=>{"use strict";var r=o(48422),i=o(91427),n=o(39168),a=(o(82207),o(56063)),s=o(68664);o(79507);const c=r.AH`
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
`;var l=function(t,e,o,r){var i,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(n<3?i(a):n>3?i(e,o,a):i(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let u=class extends r.WF{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.align="left",this.disabled=!1}render(){return r.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,n.J)(this.tabIdx)}>
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
    `}templatePlacement(){return"center"===this.align?r.qy` <wui-logo class="invisible" logo=${this.logo}></wui-logo>`:null}};u.styles=[a.W5,a.fD,c],l([(0,i.MZ)()],u.prototype,"logo",void 0),l([(0,i.MZ)()],u.prototype,"name",void 0),l([(0,i.MZ)()],u.prototype,"align",void 0),l([(0,i.MZ)()],u.prototype,"tabIdx",void 0),l([(0,i.MZ)({type:Boolean})],u.prototype,"disabled",void 0),u=l([(0,s.E)("wui-list-social")],u)},64720:(t,e,o)=>{"use strict";o.d(e,{Kq:()=>d});var r=o(27165),i=o(39341);const n=(t,e)=>{const o=t._$AN;if(void 0===o)return!1;for(const t of o)t._$AO?.(e,!1),n(t,e);return!0},a=t=>{let e,o;do{if(void 0===(e=t._$AM))break;o=e._$AN,o.delete(t),t=e}while(0===o?.size)},s=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(void 0===o)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),u(e)}};function c(t){void 0!==this._$AN?(a(this),this._$AM=t,s(this)):this._$AM=t}function l(t,e=!1,o=0){const r=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(e)if(Array.isArray(r))for(let t=o;t<r.length;t++)n(r[t],!1),a(r[t]);else null!=r&&(n(r,!1),a(r));else n(this,t)}const u=t=>{t.type==i.OA.CHILD&&(t._$AP??=l,t._$AQ??=c)};class d extends i.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,o){super._$AT(t,e,o),s(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(n(this,t),a(this))}setValue(t){if((0,r.Rt)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}},68855:(t,e,o)=>{"use strict";var r=o(48422),i=o(91427),n=o(25059),a=o(19400),s=o(72470),c=o(39168),l=o(379),u=(o(59481),o(56063)),d=o(68664);const h=r.AH`
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
`;var g=function(t,e,o,r){var i,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(n<3?i(a):n>3?i(e,o,a):i(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let p=class extends r.WF{constructor(){super(...arguments),this.inputElementRef=(0,l._)(),this.checked=void 0}render(){return r.qy`
      <label>
        <input
          ${(0,l.K)(this.inputElementRef)}
          ?checked=${(0,c.J)(this.checked)}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" color="inverse-100" size="xxs"></wui-icon>
        </span>
        <slot></slot>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("checkboxChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};p.styles=[u.W5,h],g([(0,i.MZ)({type:Boolean})],p.prototype,"checked",void 0),p=g([(0,d.E)("wui-checkbox")],p),o(79932);const f=r.AH`
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
`;var w=function(t,e,o,r){var i,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(n<3?i(a):n>3?i(e,o,a):i(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let v=class extends r.WF{constructor(){super(),this.unsubscribe=[],this.checked=n.o.state.isLegalCheckboxChecked,this.unsubscribe.push(n.o.subscribeKey("isLegalCheckboxChecked",t=>{this.checked=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{termsConditionsUrl:t,privacyPolicyUrl:e}=a.H.state,o=a.H.state.features?.legalCheckbox;return(t||e)&&o?r.qy`
      <wui-checkbox
        ?checked=${this.checked}
        @checkboxChange=${this.onCheckboxChange.bind(this)}
        data-testid="wui-checkbox"
      >
        <wui-text color="fg-250" variant="small-400" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `:null}andTemplate(){const{termsConditionsUrl:t,privacyPolicyUrl:e}=a.H.state;return t&&e?"and":""}termsTemplate(){const{termsConditionsUrl:t}=a.H.state;return t?r.qy`<a rel="noreferrer" target="_blank" href=${t}>terms of service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:t}=a.H.state;return t?r.qy`<a rel="noreferrer" target="_blank" href=${t}>privacy policy</a>`:null}onCheckboxChange(){n.o.setIsLegalCheckboxChecked(!this.checked)}};v.styles=[f],w([(0,i.wk)()],v.prototype,"checked",void 0),v=w([(0,s.EM)("w3m-legal-checkbox")],v)},69623:(t,e,o)=>{"use strict";o.d(e,{M:()=>a});var r=o(56451);const i={attribute:!0,type:String,converter:r.W3,reflect:!1,hasChanged:r.Ec},n=(t=i,e,o)=>{const{kind:r,metadata:n}=o;let a=globalThis.litPropertyMetadata.get(n);if(void 0===a&&globalThis.litPropertyMetadata.set(n,a=new Map),"setter"===r&&((t=Object.create(t)).wrapped=!0),a.set(o.name,t),"accessor"===r){const{name:r}=o;return{set(o){const i=e.get.call(this);e.set.call(this,o),this.requestUpdate(r,i,t)},init(e){return void 0!==e&&this.C(r,void 0,t,e),e}}}if("setter"===r){const{name:r}=o;return function(o){const i=this[r];e.call(this,o),this.requestUpdate(r,i,t)}}throw Error("Unsupported decorator location: "+r)};function a(t){return(e,o)=>"object"==typeof o?n(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}},73743:(t,e)=>{const o=new Uint8Array(512),r=new Uint8Array(256);!function(){let t=1;for(let e=0;e<255;e++)o[e]=t,r[t]=e,t<<=1,256&t&&(t^=285);for(let t=255;t<512;t++)o[t]=o[t-255]}(),e.log=function(t){if(t<1)throw new Error("log("+t+")");return r[t]},e.exp=function(t){return o[t]},e.mul=function(t,e){return 0===t||0===e?0:o[r[t]+r[e]]}},73921:(t,e,o)=>{"use strict";var r=o(48422),i=o(91427),n=o(56063),a=o(68664);const s=r.AH`
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
`;var c=function(t,e,o,r){var i,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(n<3?i(a):n>3?i(e,o,a):i(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let l=class extends r.WF{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,e=36-t,o=116+e,i=245+e,n=360+1.75*e;return r.qy`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${o} ${i}"
          stroke-dashoffset=${n}
        />
      </svg>
    `}};l.styles=[n.W5,s],c([(0,i.MZ)({type:Number})],l.prototype,"radius",void 0),l=c([(0,a.E)("wui-loading-thumbnail")],l)},76199:(t,e,o)=>{const r=o(9074);e.render=function(t,e,o){let i=o,n=e;void 0!==i||e&&e.getContext||(i=e,e=void 0),e||(n=function(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}()),i=r.getOptions(i);const a=r.getImageWidth(t.modules.size,i),s=n.getContext("2d"),c=s.createImageData(a,a);return r.qrToImageData(c.data,t,i),function(t,e,o){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=o,e.width=o,e.style.height=o+"px",e.style.width=o+"px"}(s,n,a),s.putImageData(c,0,0),n},e.renderToDataURL=function(t,o,r){let i=r;void 0!==i||o&&o.getContext||(i=o,o=void 0),i||(i={});const n=e.render(t,o,i),a=i.type||"image/png",s=i.rendererOpts||{};return n.toDataURL(a,s.quality)}},79507:(t,e,o)=>{"use strict";var r=o(48422),i=o(91427),n=(o(59481),o(56063)),a=o(68664);const s=r.AH`
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
`;var c=function(t,e,o,r){var i,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(n<3?i(a):n>3?i(e,o,a):i(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let l=class extends r.WF{constructor(){super(...arguments),this.logo="google"}render(){return r.qy`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};l.styles=[n.W5,s],c([(0,i.MZ)()],l.prototype,"logo",void 0),l=c([(0,a.E)("wui-logo")],l)},79723:(t,e,o)=>{"use strict";var r=o(48422),i=(o(59481),o(82207),o(33165),o(98615)),n=o(56063),a=o(68664);const s=r.AH`
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
`;let c=class extends r.WF{render(){return r.qy`
      <a
        data-testid="ux-branding-reown"
        href=${i.C5}
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
    `}};c.styles=[n.W5,n.fD,s],c=function(t,e,o,r){var i,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(n<3?i(a):n>3?i(e,o,a):i(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a}([(0,a.E)("wui-ux-by-reown")],c)},79932:(t,e,o)=>{"use strict";o(82207)},80659:(t,e,o)=>{"use strict";o(63718)},82207:(t,e,o)=>{"use strict";var r=o(48422),i=o(91427),n=o(23507),a=o(56063),s=o(68664);const c=r.AH`
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
`;var l=function(t,e,o,r){var i,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(n<3?i(a):n>3?i(e,o,a):i(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let u=class extends r.WF{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,r.qy`<slot class=${(0,n.H)(t)}></slot>`}};u.styles=[a.W5,c],l([(0,i.MZ)()],u.prototype,"variant",void 0),l([(0,i.MZ)()],u.prototype,"color",void 0),l([(0,i.MZ)()],u.prototype,"align",void 0),l([(0,i.MZ)()],u.prototype,"lineClamp",void 0),u=l([(0,s.E)("wui-text")],u)},82890:(t,e)=>{let o;const r=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},e.getSymbolTotalCodewords=function(t){return r[t]},e.getBCHDigit=function(t){let e=0;for(;0!==t;)e++,t>>>=1;return e},e.setToSJISFunction=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');o=t},e.isKanjiModeEnabled=function(){return void 0!==o},e.toSJIS=function(t){return o(t)}},82963:(t,e,o)=>{"use strict";var r=o(48422),i=o(91427),n=o(68664);const a=r.AH`
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
`;var s=function(t,e,o,r){var i,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(n<3?i(a):n>3?i(e,o,a):i(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let c=class extends r.WF{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);\n    `,r.qy`<slot></slot>`}};c.styles=[a],s([(0,i.MZ)()],c.prototype,"width",void 0),s([(0,i.MZ)()],c.prototype,"height",void 0),s([(0,i.MZ)()],c.prototype,"borderRadius",void 0),s([(0,i.MZ)()],c.prototype,"variant",void 0),c=s([(0,n.E)("wui-shimmer")],c)},90141:(t,e,o)=>{"use strict";var r=o(48422),i=o(91427),n=(o(59481),o(31037),o(94083));function a(t,e,o){return t!==e&&(t-e<0?e-t:t-e)<=o+.1}const s={generate({uri:t,size:e,logoSize:o,dotColor:i="#141414"}){const s=[],c=function(t){const e=Array.prototype.slice.call(n.create(t,{errorCorrectionLevel:"Q"}).modules.data,0),o=Math.sqrt(e.length);return e.reduce((t,e,r)=>(r%o===0?t.push([e]):t[t.length-1].push(e))&&t,[])}(t),l=e/c.length,u=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];u.forEach(({x:t,y:e})=>{const o=(c.length-7)*l*t,n=(c.length-7)*l*e,a=.45;for(let t=0;t<u.length;t+=1){const e=l*(7-2*t);s.push(r.JW`
            <rect
              fill=${2===t?i:"transparent"}
              width=${0===t?e-5:e}
              rx= ${0===t?(e-5)*a:e*a}
              ry= ${0===t?(e-5)*a:e*a}
              stroke=${i}
              stroke-width=${0===t?5:0}
              height=${0===t?e-5:e}
              x= ${0===t?n+l*t+2.5:n+l*t}
              y= ${0===t?o+l*t+2.5:o+l*t}
            />
          `)}});const d=Math.floor((o+25)/l),h=c.length/2-d/2,g=c.length/2+d/2-1,p=[];c.forEach((t,e)=>{t.forEach((t,o)=>{if(c[e][o]&&!(e<7&&o<7||e>c.length-8&&o<7||e<7&&o>c.length-8||e>h&&e<g&&o>h&&o<g)){const t=e*l+l/2,r=o*l+l/2;p.push([t,r])}})});const f={};return p.forEach(([t,e])=>{f[t]?f[t]?.push(e):f[t]=[e]}),Object.entries(f).map(([t,e])=>{const o=e.filter(t=>e.every(e=>!a(t,e,l)));return[Number(t),o]}).forEach(([t,e])=>{e.forEach(e=>{s.push(r.JW`<circle cx=${t} cy=${e} fill=${i} r=${l/2.5} />`)})}),Object.entries(f).filter(([t,e])=>e.length>1).map(([t,e])=>{const o=e.filter(t=>e.some(e=>a(t,e,l)));return[Number(t),o]}).map(([t,e])=>{e.sort((t,e)=>t<e?-1:1);const o=[];for(const t of e){const e=o.find(e=>e.some(e=>a(t,e,l)));e?e.push(t):o.push([t])}return[t,o.map(t=>[t[0],t[t.length-1]])]}).forEach(([t,e])=>{e.forEach(([e,o])=>{s.push(r.JW`
              <line
                x1=${t}
                x2=${t}
                y1=${e}
                y2=${o}
                stroke=${i}
                stroke-width=${l/1.25}
                stroke-linecap="round"
              />
            `)})}),s}};var c=o(56063),l=o(68664);const u=r.AH`
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
`;var d=function(t,e,o,r){var i,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(n<3?i(a):n>3?i(e,o,a):i(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let h=class extends r.WF{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`\n     --local-size: ${this.size}px;\n     --local-icon-color: ${this.color??"#3396ff"}\n    `,r.qy`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const t="light"===this.theme?this.size:this.size-32;return r.JW`
      <svg height=${t} width=${t}>
        ${s.generate({uri:this.uri,size:t,logoSize:this.arenaClear?0:t/4,dotColor:this.color})}
      </svg>
    `}templateVisual(){return this.imageSrc?r.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?r.qy`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:r.qy`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};h.styles=[c.W5,u],d([(0,i.MZ)()],h.prototype,"uri",void 0),d([(0,i.MZ)({type:Number})],h.prototype,"size",void 0),d([(0,i.MZ)()],h.prototype,"theme",void 0),d([(0,i.MZ)()],h.prototype,"imageSrc",void 0),d([(0,i.MZ)()],h.prototype,"alt",void 0),d([(0,i.MZ)()],h.prototype,"color",void 0),d([(0,i.MZ)({type:Boolean})],h.prototype,"arenaClear",void 0),d([(0,i.MZ)({type:Boolean})],h.prototype,"farcaster",void 0),h=d([(0,l.E)("wui-qr-code")],h)},90681:t=>{t.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},91427:(t,e,o)=>{"use strict";o.d(e,{MZ:()=>r.M,wk:()=>i.w});var r=o(69623),i=o(4537)},93887:(t,e,o)=>{const r=o(82890),i=o(94922),n=o(2501),a=o(32500),s=o(95586),c=r.getBCHDigit(7973);function l(t,e){return a.getCharCountIndicator(t,e)+4}function u(t,e){let o=0;return t.forEach(function(t){const r=l(t.mode,e);o+=r+t.getBitsLength()}),o}e.from=function(t,e){return s.isValid(t)?parseInt(t,10):e},e.getCapacity=function(t,e,o){if(!s.isValid(t))throw new Error("Invalid QR Code version");void 0===o&&(o=a.BYTE);const n=8*(r.getSymbolTotalCodewords(t)-i.getTotalCodewordsCount(t,e));if(o===a.MIXED)return n;const c=n-l(o,t);switch(o){case a.NUMERIC:return Math.floor(c/10*3);case a.ALPHANUMERIC:return Math.floor(c/11*2);case a.KANJI:return Math.floor(c/13);case a.BYTE:default:return Math.floor(c/8)}},e.getBestVersionForData=function(t,o){let r;const i=n.from(o,n.M);if(Array.isArray(t)){if(t.length>1)return function(t,o){for(let r=1;r<=40;r++)if(u(t,r)<=e.getCapacity(r,o,a.MIXED))return r}(t,i);if(0===t.length)return 1;r=t[0]}else r=t;return function(t,o,r){for(let i=1;i<=40;i++)if(o<=e.getCapacity(i,r,t))return i}(r.mode,r.getLength(),i)},e.getEncodedBits=function(t){if(!s.isValid(t)||t<7)throw new Error("Invalid QR Code version");let e=t<<12;for(;r.getBCHDigit(e)-c>=0;)e^=7973<<r.getBCHDigit(e)-c;return t<<12|e}},94083:(t,e,o)=>{const r=o(90681),i=o(43401),n=o(76199),a=o(3824);function s(t,e,o,n,a){const s=[].slice.call(arguments,1),c=s.length,l="function"==typeof s[c-1];if(!l&&!r())throw new Error("Callback required as last argument");if(!l){if(c<1)throw new Error("Too few arguments provided");return 1===c?(o=e,e=n=void 0):2!==c||e.getContext||(n=o,o=e,e=void 0),new Promise(function(r,a){try{const a=i.create(o,n);r(t(a,e,n))}catch(t){a(t)}})}if(c<2)throw new Error("Too few arguments provided");2===c?(a=o,o=e,e=n=void 0):3===c&&(e.getContext&&void 0===a?(a=n,n=void 0):(a=n,n=o,o=e,e=void 0));try{const r=i.create(o,n);a(null,t(r,e,n))}catch(t){a(t)}}e.create=i.create,e.toCanvas=s.bind(null,n.render),e.toDataURL=s.bind(null,n.renderToDataURL),e.toString=s.bind(null,function(t,e,o){return a.render(t,o)})},94541:(t,e,o)=>{const r=o(32500),i=o(60097),n=o(59909),a=o(45666),s=o(10593),c=o(13992),l=o(82890),u=o(94904);function d(t){return unescape(encodeURIComponent(t)).length}function h(t,e,o){const r=[];let i;for(;null!==(i=t.exec(o));)r.push({data:i[0],index:i.index,mode:e,length:i[0].length});return r}function g(t){const e=h(c.NUMERIC,r.NUMERIC,t),o=h(c.ALPHANUMERIC,r.ALPHANUMERIC,t);let i,n;return l.isKanjiModeEnabled()?(i=h(c.BYTE,r.BYTE,t),n=h(c.KANJI,r.KANJI,t)):(i=h(c.BYTE_KANJI,r.BYTE,t),n=[]),e.concat(o,i,n).sort(function(t,e){return t.index-e.index}).map(function(t){return{data:t.data,mode:t.mode,length:t.length}})}function p(t,e){switch(e){case r.NUMERIC:return i.getBitsLength(t);case r.ALPHANUMERIC:return n.getBitsLength(t);case r.KANJI:return s.getBitsLength(t);case r.BYTE:return a.getBitsLength(t)}}function f(t,e){let o;const c=r.getBestModeForData(t);if(o=r.from(e,c),o!==r.BYTE&&o.bit<c.bit)throw new Error('"'+t+'" cannot be encoded with mode '+r.toString(o)+".\n Suggested mode is: "+r.toString(c));switch(o!==r.KANJI||l.isKanjiModeEnabled()||(o=r.BYTE),o){case r.NUMERIC:return new i(t);case r.ALPHANUMERIC:return new n(t);case r.KANJI:return new s(t);case r.BYTE:return new a(t)}}e.fromArray=function(t){return t.reduce(function(t,e){return"string"==typeof e?t.push(f(e,null)):e.data&&t.push(f(e.data,e.mode)),t},[])},e.fromString=function(t,o){const i=function(t){const e=[];for(let o=0;o<t.length;o++){const i=t[o];switch(i.mode){case r.NUMERIC:e.push([i,{data:i.data,mode:r.ALPHANUMERIC,length:i.length},{data:i.data,mode:r.BYTE,length:i.length}]);break;case r.ALPHANUMERIC:e.push([i,{data:i.data,mode:r.BYTE,length:i.length}]);break;case r.KANJI:e.push([i,{data:i.data,mode:r.BYTE,length:d(i.data)}]);break;case r.BYTE:e.push([{data:i.data,mode:r.BYTE,length:d(i.data)}])}}return e}(g(t,l.isKanjiModeEnabled())),n=function(t,e){const o={},i={start:{}};let n=["start"];for(let a=0;a<t.length;a++){const s=t[a],c=[];for(let t=0;t<s.length;t++){const l=s[t],u=""+a+t;c.push(u),o[u]={node:l,lastCount:0},i[u]={};for(let t=0;t<n.length;t++){const a=n[t];o[a]&&o[a].node.mode===l.mode?(i[a][u]=p(o[a].lastCount+l.length,l.mode)-p(o[a].lastCount,l.mode),o[a].lastCount+=l.length):(o[a]&&(o[a].lastCount=l.length),i[a][u]=p(l.length,l.mode)+4+r.getCharCountIndicator(l.mode,e))}}n=c}for(let t=0;t<n.length;t++)i[n[t]].end=0;return{map:i,table:o}}(i,o),a=u.find_path(n.map,"start","end"),s=[];for(let t=1;t<a.length-1;t++)s.push(n.table[a[t]].node);return e.fromArray(s.reduce(function(t,e){const o=t.length-1>=0?t[t.length-1]:null;return o&&o.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)},[]))},e.rawSplit=function(t){return e.fromArray(g(t,l.isKanjiModeEnabled()))}},94753:(t,e,o)=>{const r=o(82890),i=r.getBCHDigit(1335);e.getEncodedBits=function(t,e){const o=t.bit<<3|e;let n=o<<10;for(;r.getBCHDigit(n)-i>=0;)n^=1335<<r.getBCHDigit(n)-i;return 21522^(o<<10|n)}},94904:t=>{"use strict";var e={single_source_shortest_paths:function(t,o,r){var i={},n={};n[o]=0;var a,s,c,l,u,d,h,g=e.PriorityQueue.make();for(g.push(o,0);!g.empty();)for(c in s=(a=g.pop()).value,l=a.cost,u=t[s]||{})u.hasOwnProperty(c)&&(d=l+u[c],h=n[c],(void 0===n[c]||h>d)&&(n[c]=d,g.push(c,d),i[c]=s));if(void 0!==r&&void 0===n[r]){var p=["Could not find a path from ",o," to ",r,"."].join("");throw new Error(p)}return i},extract_shortest_path_from_predecessor_list:function(t,e){for(var o=[],r=e;r;)o.push(r),t[r],r=t[r];return o.reverse(),o},find_path:function(t,o,r){var i=e.single_source_shortest_paths(t,o,r);return e.extract_shortest_path_from_predecessor_list(i,r)},PriorityQueue:{make:function(t){var o,r=e.PriorityQueue,i={};for(o in t=t||{},r)r.hasOwnProperty(o)&&(i[o]=r[o]);return i.queue=[],i.sorter=t.sorter||r.default_sorter,i},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var o={value:t,cost:e};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=e},94922:(t,e,o)=>{const r=o(2501),i=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],n=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(t,e){switch(e){case r.L:return i[4*(t-1)+0];case r.M:return i[4*(t-1)+1];case r.Q:return i[4*(t-1)+2];case r.H:return i[4*(t-1)+3];default:return}},e.getTotalCodewordsCount=function(t,e){switch(e){case r.L:return n[4*(t-1)+0];case r.M:return n[4*(t-1)+1];case r.Q:return n[4*(t-1)+2];case r.H:return n[4*(t-1)+3];default:return}}},95567:t=>{function e(){this.buffer=[],this.length=0}e.prototype={get:function(t){const e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(let o=0;o<e;o++)this.putBit(1==(t>>>e-o-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=e},95586:(t,e)=>{e.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}},98615:(t,e,o)=>{"use strict";o.d(e,{C5:()=>n,Ky:()=>i,PG:()=>r});const r=/[.*+?^${}()|[\]\\]/gu,i=/[0-9,.]/u,n="https://reown.com"}}]);
//# sourceMappingURL=3582.widget.iife.js.map