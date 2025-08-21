/*! For license information please see 351.widget.iife.js.LICENSE.txt */
"undefined"!=typeof globalThis&&(void 0===globalThis.process&&(globalThis.process={env:{NODE_ENV:"production"},browser:!0,version:"",versions:{}}),void 0===globalThis.require&&(globalThis.require=function(e){if("process/browser"===e||"process"===e)return globalThis.process;throw new Error("Module not found: "+e)})),"undefined"!=typeof window&&(void 0===window.process&&(window.process={env:{NODE_ENV:"production"},browser:!0,version:"",versions:{}}),void 0===window.require&&(window.require=function(e){if("process/browser"===e||"process"===e)return window.process;throw new Error("Module not found: "+e)})),"undefined"!=typeof global&&(void 0===global.process&&(global.process={env:{NODE_ENV:"production"},browser:!0,version:"",versions:{}}),void 0===global.require&&(global.require=function(e){if("process/browser"===e||"process"===e)return global.process;throw new Error("Module not found: "+e)})),"undefined"!=typeof self&&(void 0===self.process&&(self.process={env:{NODE_ENV:"production"},browser:!0,version:"",versions:{}}),void 0===self.require&&(self.require=function(e){if("process/browser"===e||"process"===e)return self.process;throw new Error("Module not found: "+e)})),(this.webpackChunkHLWidget=this.webpackChunkHLWidget||[]).push([[351],{351:(e,t,i)=>{i.r(t),i.d(t,{W3mSendSelectTokenView:()=>E,W3mWalletSendPreviewView:()=>K,W3mWalletSendView:()=>C});var o=i(48422),r=i(91427),a=i(31124),n=i(3062),s=i(79063),c=i(65885),l=i(65149),u=i(31779),d=(i(33846),i(38273),i(23411),i(379)),p=i(68690);i(90315),i(66933);const h=o.AH`
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
`;var g=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let w=class extends o.WF{constructor(){super(...arguments),this.inputElementRef=(0,d._)(),this.instructionElementRef=(0,d._)(),this.instructionHidden=Boolean(this.value),this.pasting=!1,this.onDebouncedSearch=c.w.debounce(async e=>{if(!e.length)return void this.setReceiverAddress("");const t=l.W.state.activeChain;if(c.w.isAddress(e,t))this.setReceiverAddress(e);else try{const t=await p.x.getEnsAddress(e);if(t){a.R.setReceiverProfileName(e),a.R.setReceiverAddress(t);const i=await p.x.getEnsAvatar(e);a.R.setReceiverProfileImageUrl(i||void 0)}}catch(t){this.setReceiverAddress(e)}finally{a.R.setLoading(!1)}})}firstUpdated(){this.value&&(this.instructionHidden=!0),this.checkHidden()}render(){return o.qy` <wui-flex
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
    </wui-flex>`}async focusInput(){this.instructionElementRef.value&&(this.instructionHidden=!0,await this.toggleInstructionFocus(!1),this.instructionElementRef.value.style.pointerEvents="none",this.inputElementRef.value?.focus(),this.inputElementRef.value&&(this.inputElementRef.value.selectionStart=this.inputElementRef.value.selectionEnd=this.inputElementRef.value.value.length))}async focusInstruction(){this.instructionElementRef.value&&(this.instructionHidden=!1,await this.toggleInstructionFocus(!0),this.instructionElementRef.value.style.pointerEvents="auto",this.inputElementRef.value?.blur())}async toggleInstructionFocus(e){this.instructionElementRef.value&&await this.instructionElementRef.value.animate([{opacity:e?0:1},{opacity:e?1:0}],{duration:100,easing:"ease",fill:"forwards"}).finished}onBoxClick(){this.value||this.instructionHidden||this.focusInput()}onBlur(){this.value||!this.instructionHidden||this.pasting||this.focusInstruction()}checkHidden(){this.instructionHidden&&this.focusInput()}async onPasteClick(){this.pasting=!0;const e=await navigator.clipboard.readText();a.R.setReceiverAddress(e),this.focusInput()}onInputChange(e){const t=e.target;this.pasting=!1,this.value=e.target?.value,t.value&&!this.instructionHidden&&this.focusInput(),a.R.setLoading(!0),this.onDebouncedSearch(t.value)}setReceiverAddress(e){a.R.setReceiverAddress(e),a.R.setReceiverProfileName(void 0),a.R.setReceiverProfileImageUrl(void 0),a.R.setLoading(!1)}};w.styles=h,g([(0,r.MZ)()],w.prototype,"value",void 0),g([(0,r.wk)()],w.prototype,"instructionHidden",void 0),g([(0,r.wk)()],w.prototype,"pasting",void 0),w=g([(0,u.EM)("w3m-input-address")],w);var v=i(78793),f=i(35016),b=i(47080),m=i(39783);const k=o.AH`
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
`;var y=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let x=class extends o.WF{constructor(){super(...arguments),this.inputElementRef=(0,d._)(),this.disabled=!1,this.value="",this.placeholder="0"}render(){return this.inputElementRef?.value&&this.value&&(this.inputElementRef.value.value=this.value),o.qy`<input
      ${(0,d.K)(this.inputElementRef)}
      type="text"
      inputmode="decimal"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    /> `}dispatchInputChangeEvent(e){const t=e.data;if(t&&this.inputElementRef?.value)if(","===t){const e=this.inputElementRef.value.value.replace(",",".");this.inputElementRef.value.value=e,this.value=`${this.value}${e}`}else f.Ky.test(t)||(this.inputElementRef.value.value=this.value.replace(new RegExp(t.replace(f.PG,"\\$&"),"gu"),""));this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};x.styles=[b.W5,b.fD,k],y([(0,r.MZ)({type:Boolean})],x.prototype,"disabled",void 0),y([(0,r.MZ)({type:String})],x.prototype,"value",void 0),y([(0,r.MZ)({type:String})],x.prototype,"placeholder",void 0),x=y([(0,m.E)("wui-input-amount")],x),i(24668),i(3407);const T=o.AH`
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
`;var S=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let A=class extends o.WF{render(){return o.qy` <wui-flex
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
      </wui-text>`:null}actionTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?o.qy`<wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>`:o.qy`<wui-link @click=${this.onMaxClick.bind(this)}>Max</wui-link>`:null}onInputChange(e){a.R.setTokenAmount(e.detail)}onMaxClick(){if(this.token){const e=v.S.bigNumber(this.token.quantity.numeric);a.R.setTokenAmount(Number(e.toFixed(20)))}}onBuyClick(){s.I.push("OnRampProviders")}};A.styles=T,S([(0,r.MZ)({type:Object})],A.prototype,"token",void 0),S([(0,r.MZ)({type:Number})],A.prototype,"sendTokenAmount",void 0),A=S([(0,u.EM)("w3m-input-token")],A);const $=o.AH`
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
`;var P=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let C=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.token=a.R.state.token,this.sendTokenAmount=a.R.state.sendTokenAmount,this.receiverAddress=a.R.state.receiverAddress,this.receiverProfileName=a.R.state.receiverProfileName,this.loading=a.R.state.loading,this.message="Preview Send",this.token&&(this.fetchBalances(),this.fetchNetworkPrice()),this.unsubscribe.push(a.R.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.receiverProfileName=e.receiverProfileName,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.getMessage(),o.qy` <wui-flex flexDirection="column" .padding=${["0","l","l","l"]}>
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
    </wui-flex>`}async fetchBalances(){await a.R.fetchTokenBalance(),a.R.fetchNetworkBalance()}async fetchNetworkPrice(){await n.GN.getNetworkTokenPrice()}onButtonClick(){s.I.push("WalletSendPreview")}getMessage(){this.message="Preview Send",this.receiverAddress&&!c.w.isAddress(this.receiverAddress,l.W.state.activeChain)&&(this.message="Invalid Address"),this.receiverAddress||(this.message="Add Address"),this.sendTokenAmount&&this.token&&this.sendTokenAmount>Number(this.token.quantity.numeric)&&(this.message="Insufficient Funds"),this.sendTokenAmount||(this.message="Add Amount"),this.sendTokenAmount&&this.token?.price&&(this.sendTokenAmount*this.token.price||(this.message="Incorrect Value")),this.token||(this.message="Select Token")}};C.styles=$,P([(0,r.wk)()],C.prototype,"token",void 0),P([(0,r.wk)()],C.prototype,"sendTokenAmount",void 0),P([(0,r.wk)()],C.prototype,"receiverAddress",void 0),P([(0,r.wk)()],C.prototype,"receiverProfileName",void 0),P([(0,r.wk)()],C.prototype,"loading",void 0),P([(0,r.wk)()],C.prototype,"message",void 0),C=P([(0,u.EM)("w3m-wallet-send-view")],C),i(12974),i(78411),i(57933);const R=o.AH`
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
`;var I=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let E=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tokenBalances=a.R.state.tokenBalances,this.search="",this.onDebouncedSearch=c.w.debounce(e=>{this.search=e}),this.fetchBalancesAndNetworkPrice(),this.unsubscribe.push(a.R.subscribe(e=>{this.tokenBalances=e.tokenBalances}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.qy`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}async fetchBalancesAndNetworkPrice(){this.tokenBalances&&0!==this.tokenBalances?.length||(await this.fetchBalances(),await this.fetchNetworkPrice())}async fetchBalances(){await a.R.fetchTokenBalance(),a.R.fetchNetworkBalance()}async fetchNetworkPrice(){await n.GN.getNetworkTokenPrice()}templateSearchInput(){return o.qy`
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
    `}onBuyClick(){s.I.push("OnRampProviders")}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){a.R.setToken(e),a.R.setTokenAmount(void 0),s.I.goBack()}};E.styles=R,I([(0,r.wk)()],E.prototype,"tokenBalances",void 0),I([(0,r.wk)()],E.prototype,"tokens",void 0),I([(0,r.wk)()],E.prototype,"filteredTokens",void 0),I([(0,r.wk)()],E.prototype,"search",void 0),E=I([(0,u.EM)("w3m-wallet-send-select-token-view")],E);var z=i(23774),N=i(58711),M=i(21385);i(77200),i(17262),i(36858),i(46116),i(86668);const B=o.AH`
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
`;var j=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let O=class extends o.WF{constructor(){super(...arguments),this.text="",this.address="",this.isAddress=!1}render(){return o.qy`<wui-text variant="large-500" color="fg-100">${this.text}</wui-text>
      ${this.imageTemplate()}`}imageTemplate(){return this.isAddress?o.qy`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`:this.imageSrc?o.qy`<wui-image src=${this.imageSrc}></wui-image>`:o.qy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};O.styles=[b.W5,b.fD,B],j([(0,r.MZ)()],O.prototype,"text",void 0),j([(0,r.MZ)()],O.prototype,"address",void 0),j([(0,r.MZ)()],O.prototype,"imageSrc",void 0),j([(0,r.MZ)({type:Boolean})],O.prototype,"isAddress",void 0),O=j([(0,m.E)("wui-preview-item")],O);var D=i(74556),Z=i(39168),W=i(26224);const _=o.AH`
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
`;var q=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let U=class extends o.WF{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return o.qy`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?o.qy`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?o.qy` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:o.qy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};U.styles=[b.W5,b.fD,_],q([(0,r.MZ)()],U.prototype,"imageSrc",void 0),q([(0,r.MZ)()],U.prototype,"textTitle",void 0),q([(0,r.MZ)()],U.prototype,"textValue",void 0),U=q([(0,m.E)("wui-list-content")],U);const F=o.AH`
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
`;var H=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let L=class extends o.WF{render(){return o.qy` <wui-text variant="small-400" color="fg-200">Details</wui-text>
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
        imageSrc=${(0,Z.J)(W.$.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`:null}onNetworkClick(e){e&&s.I.push("Networks",{network:e})}};L.styles=F,H([(0,r.MZ)()],L.prototype,"receiverAddress",void 0),H([(0,r.MZ)({type:Object})],L.prototype,"caipNetwork",void 0),L=H([(0,u.EM)("w3m-wallet-send-details")],L);const V=o.AH`
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
`;var G=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let K=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.token=a.R.state.token,this.sendTokenAmount=a.R.state.sendTokenAmount,this.receiverAddress=a.R.state.receiverAddress,this.receiverProfileName=a.R.state.receiverProfileName,this.receiverProfileImageUrl=a.R.state.receiverProfileImageUrl,this.caipNetwork=l.W.state.activeCaipNetwork,this.loading=a.R.state.loading,this.unsubscribe.push(a.R.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.receiverProfileName=e.receiverProfileName,this.receiverProfileImageUrl=e.receiverProfileImageUrl,this.loading=e.loading}),l.W.subscribeKey("activeCaipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.qy` <wui-flex flexDirection="column" .padding=${["0","l","l","l"]}>
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
      >`}return null}async onSendClick(){if(this.sendTokenAmount&&this.receiverAddress)try{await a.R.sendToken(),z.P.showSuccess("Transaction started"),s.I.replace("Account")}catch(e){z.P.showError("Failed to send transaction. Please try again."),console.error("SendController:sendToken - failed to send transaction",e);const t=e instanceof Error?e.message:"Unknown error";N.E.sendEvent({type:"track",event:"SEND_ERROR",properties:{message:t,isSmartAccount:(0,M.lj)(l.W.state.activeChain)===D.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,token:this.token?.symbol||"",amount:this.sendTokenAmount,network:l.W.state.activeCaipNetwork?.caipNetworkId||""}})}else z.P.showError("Please enter a valid amount and receiver address")}onCancelClick(){s.I.goBack()}};K.styles=V,G([(0,r.wk)()],K.prototype,"token",void 0),G([(0,r.wk)()],K.prototype,"sendTokenAmount",void 0),G([(0,r.wk)()],K.prototype,"receiverAddress",void 0),G([(0,r.wk)()],K.prototype,"receiverProfileName",void 0),G([(0,r.wk)()],K.prototype,"receiverProfileImageUrl",void 0),G([(0,r.wk)()],K.prototype,"caipNetwork",void 0),G([(0,r.wk)()],K.prototype,"loading",void 0),K=G([(0,u.EM)("w3m-wallet-send-preview-view")],K)},379:(e,t,i)=>{i.d(t,{_:()=>n,K:()=>l});var o=i(80971),r=i(64720),a=i(39341);const n=()=>new s;class s{}const c=new WeakMap,l=(0,a.u$)(class extends r.Kq{render(e){return o.s6}update(e,[t]){const i=t!==this.G;return i&&void 0!==this.G&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),o.s6}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.G){const t=this.ht??globalThis;let i=c.get(t);void 0===i&&(i=new WeakMap,c.set(t,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,e),void 0!==e&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return"function"==typeof this.G?c.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})},1711:(e,t,i)=>{var o=i(48422),r=i(91427),a=i(23507),n=i(39168),s=i(379),c=(i(77200),i(47080)),l=i(39783);const u=o.AH`
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
`;var d=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let p=class extends o.WF{constructor(){super(...arguments),this.inputElementRef=(0,s._)(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const e=`wui-padding-right-${this.inputRightPadding}`,t=`wui-size-${this.size}`,i={[t]:!0,[e]:Boolean(this.inputRightPadding)};return o.qy`${this.templateIcon()}
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
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};p.styles=[c.W5,c.fD,u],d([(0,r.MZ)()],p.prototype,"size",void 0),d([(0,r.MZ)()],p.prototype,"icon",void 0),d([(0,r.MZ)({type:Boolean})],p.prototype,"disabled",void 0),d([(0,r.MZ)()],p.prototype,"placeholder",void 0),d([(0,r.MZ)()],p.prototype,"type",void 0),d([(0,r.MZ)()],p.prototype,"keyHint",void 0),d([(0,r.MZ)()],p.prototype,"value",void 0),d([(0,r.MZ)()],p.prototype,"inputRightPadding",void 0),d([(0,r.MZ)()],p.prototype,"tabIdx",void 0),p=d([(0,l.E)("wui-input-text")],p)},3062:(e,t,i)=>{i.d(t,{GN:()=>C});var o=i(66586),r=i(83548),a=i(78793),n=i(33255),s=i(74556),c=i(75128),l=i(21385),u=i(53141),d=i(65885),p=i(97869);const h={getGasPriceInEther:(e,t)=>Number(t*e)/1e18,getGasPriceInUSD(e,t,i){const o=h.getGasPriceInEther(t,i);return a.S.bigNumber(e).times(o).toNumber()},getPriceImpact({sourceTokenAmount:e,sourceTokenPriceInUSD:t,toTokenPriceInUSD:i,toTokenAmount:o}){const r=a.S.bigNumber(e).times(t),n=a.S.bigNumber(o).times(i);return r.minus(n).div(r).times(100).toNumber()},getMaxSlippage(e,t){const i=a.S.bigNumber(e).div(100);return a.S.multiply(t,i).toNumber()},getProviderFee:(e,t=.0085)=>a.S.bigNumber(e).times(t).toString(),isInsufficientNetworkTokenForGas(e,t){const i=t||"0";return!!a.S.bigNumber(e).eq(0)||a.S.bigNumber(a.S.bigNumber(i)).gt(e)},isInsufficientSourceTokenForSwap(e,t,i){const o=i?.find(e=>e.address===t)?.quantity?.numeric;return a.S.bigNumber(o||"0").lt(e)},getToTokenAmount({sourceToken:e,toToken:t,sourceTokenPrice:i,toTokenPrice:o,sourceTokenAmount:r}){if("0"===r)return"0";if(!e||!t)return"0";const n=e.decimals,s=i,c=t.decimals,l=o;if(l<=0)return"0";const u=a.S.bigNumber(r).times(.0085),d=a.S.bigNumber(r).minus(u).times(a.S.bigNumber(10).pow(n)),p=a.S.bigNumber(s).div(l),h=n-c;return d.times(p).div(a.S.bigNumber(10).pow(h)).div(a.S.bigNumber(10).pow(c)).toFixed(c).toString()}};var g=i(34335),w=i(1759),v=i(10298),f=i(82422),b=i(65149),m=i(68690),k=i(99539),y=i(58711),x=i(79063),T=i(23774);const S=15e4;Error;const A={initializing:!1,initialized:!1,loadingPrices:!1,loadingQuote:!1,loadingApprovalTransaction:!1,loadingBuildTransaction:!1,loadingTransaction:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:u.oU.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:"0",gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0},$=(0,o.BX)(A),P={state:$,subscribe:e=>(0,o.B1)($,()=>e($)),subscribeKey:(e,t)=>(0,r.u$)($,e,t),getParams(){const e=b.W.state.activeCaipAddress,t=d.w.getPlainAddress(e),i=(0,l.K1)(),o=k.a.getConnectorId(b.W.state.activeChain);if(!t)throw new Error("No address found to swap the tokens from.");const r=!$.toToken?.address||!$.toToken?.decimals,s=!$.sourceToken?.address||!$.sourceToken?.decimals||!a.S.bigNumber($.sourceTokenAmount).gt(0),c=!$.sourceTokenAmount;return{networkAddress:i,fromAddress:t,fromCaipAddress:e,sourceTokenAddress:$.sourceToken?.address,toTokenAddress:$.toToken?.address,toTokenAmount:$.toTokenAmount,toTokenDecimals:$.toToken?.decimals,sourceTokenAmount:$.sourceTokenAmount,sourceTokenDecimals:$.sourceToken?.decimals,invalidToToken:r,invalidSourceToken:s,invalidSourceTokenAmount:c,availableToSwap:e&&!r&&!s&&!c,isAuthConnector:o===n.o.CONNECTOR_ID.AUTH}},setSourceToken(e){if(!e)return $.sourceToken=e,$.sourceTokenAmount="",void($.sourceTokenPriceInUSD=0);$.sourceToken=e,C.setTokenPrice(e.address,"sourceToken")},setSourceTokenAmount(e){$.sourceTokenAmount=e},setToToken(e){if(!e)return $.toToken=e,$.toTokenAmount="",void($.toTokenPriceInUSD=0);$.toToken=e,C.setTokenPrice(e.address,"toToken")},setToTokenAmount(e){$.toTokenAmount=e?a.S.formatNumberToLocalString(e,6):""},async setTokenPrice(e,t){let i=$.tokensPriceMap[e]||0;i||($.loadingPrices=!0,i=await C.getAddressPrice(e)),"sourceToken"===t?$.sourceTokenPriceInUSD=i:"toToken"===t&&($.toTokenPriceInUSD=i),$.loadingPrices&&($.loadingPrices=!1),C.getParams().availableToSwap&&C.swapTokens()},switchTokens(){if($.initializing||!$.initialized)return;const e=$.toToken?{...$.toToken}:void 0,t=$.sourceToken?{...$.sourceToken}:void 0,i=e&&""===$.toTokenAmount?"1":$.toTokenAmount;C.setSourceToken(e),C.setToToken(t),C.setSourceTokenAmount(i),C.setToTokenAmount(""),C.swapTokens()},resetState(){$.myTokensWithBalance=A.myTokensWithBalance,$.tokensPriceMap=A.tokensPriceMap,$.initialized=A.initialized,$.sourceToken=A.sourceToken,$.sourceTokenAmount=A.sourceTokenAmount,$.sourceTokenPriceInUSD=A.sourceTokenPriceInUSD,$.toToken=A.toToken,$.toTokenAmount=A.toTokenAmount,$.toTokenPriceInUSD=A.toTokenPriceInUSD,$.networkPrice=A.networkPrice,$.networkTokenSymbol=A.networkTokenSymbol,$.networkBalanceInUSD=A.networkBalanceInUSD,$.inputError=A.inputError,$.myTokensWithBalance=A.myTokensWithBalance},resetValues(){const{networkAddress:e}=C.getParams(),t=$.tokens?.find(t=>t.address===e);C.setSourceToken(t),C.setToToken(void 0)},getApprovalLoadingState:()=>$.loadingApprovalTransaction,clearError(){$.transactionError=void 0},async initializeState(){if(!$.initializing){if($.initializing=!0,!$.initialized)try{await C.fetchTokens(),$.initialized=!0}catch(e){$.initialized=!1,T.P.showError("Failed to initialize swap"),x.I.goBack()}$.initializing=!1}},async fetchTokens(){const{networkAddress:e}=C.getParams();await C.getTokenList(),await C.getNetworkTokenPrice(),await C.getMyTokensWithBalance();const t=$.tokens?.find(t=>t.address===e);t&&($.networkTokenSymbol=t.symbol,C.setSourceToken(t),C.setSourceTokenAmount("0"))},async getTokenList(){const e=await p.s.getTokenList();$.tokens=e,$.popularTokens=e.sort((e,t)=>e.symbol<t.symbol?-1:e.symbol>t.symbol?1:0),$.suggestedTokens=e.filter(e=>!!u.oU.SWAP_SUGGESTED_TOKENS.includes(e.symbol),{})},async getAddressPrice(e){const t=$.tokensPriceMap[e];if(t)return t;const i=await f.T.fetchTokenPrice({addresses:[e]}),o=i?.fungibles||[],r=[...$.tokens||[],...$.myTokensWithBalance||[]],a=r?.find(t=>t.address===e)?.symbol,n=o.find(e=>e.symbol.toLowerCase()===a?.toLowerCase())?.price||0,s=parseFloat(n.toString());return $.tokensPriceMap[e]=s,s},async getNetworkTokenPrice(){const{networkAddress:e}=C.getParams(),t=await f.T.fetchTokenPrice({addresses:[e]}).catch(()=>(T.P.showError("Failed to fetch network token price"),{fungibles:[]})),i=t.fungibles?.[0],o=i?.price.toString()||"0";$.tokensPriceMap[e]=parseFloat(o),$.networkTokenSymbol=i?.symbol||"",$.networkPrice=o},async getMyTokensWithBalance(e){const t=await c.Z.getMyTokensWithBalance(e),i=p.s.mapBalancesToSwapTokens(t);i&&(await C.getInitialGasPrice(),C.setBalances(i))},setBalances(e){const{networkAddress:t}=C.getParams(),i=b.W.state.activeCaipNetwork;if(!i)return;const o=e.find(e=>e.address===t);e.forEach(e=>{$.tokensPriceMap[e.address]=e.price||0}),$.myTokensWithBalance=e.filter(e=>e.address.startsWith(i.caipNetworkId)),$.networkBalanceInUSD=o?a.S.multiply(o.quantity.numeric,o.price).toString():"0"},async getInitialGasPrice(){const e=await p.s.fetchGasPrice();if(!e)return{gasPrice:null,gasPriceInUSD:null};switch(b.W.state?.activeCaipNetwork?.chainNamespace){case n.o.CHAIN.SOLANA:return $.gasFee=e.standard??"0",$.gasPriceInUSD=a.S.multiply(e.standard,$.networkPrice).div(1e9).toNumber(),{gasPrice:BigInt($.gasFee),gasPriceInUSD:Number($.gasPriceInUSD)};case n.o.CHAIN.EVM:default:const t=e.standard??"0",i=BigInt(t),o=BigInt(S),r=h.getGasPriceInUSD($.networkPrice,o,i);return $.gasFee=t,$.gasPriceInUSD=r,{gasPrice:i,gasPriceInUSD:r}}},async swapTokens(){const e=w.U.state.address,t=$.sourceToken,i=$.toToken,o=a.S.bigNumber($.sourceTokenAmount).gt(0);if(o||C.setToTokenAmount(""),!i||!t||$.loadingPrices||!o)return;$.loadingQuote=!0;const r=a.S.bigNumber($.sourceTokenAmount).times(10**t.decimals).round(0);try{const o=await f.T.fetchSwapQuote({userAddress:e,from:t.address,to:i.address,gasPrice:$.gasFee,amount:r.toString()});$.loadingQuote=!1;const n=o?.quotes?.[0]?.toAmount;if(!n)return void v.h.open({displayMessage:"Incorrect amount",debugMessage:"Please enter a valid amount"},"error");const s=a.S.bigNumber(n).div(10**i.decimals).toString();C.setToTokenAmount(s),C.hasInsufficientToken($.sourceTokenAmount,t.address)?$.inputError="Insufficient balance":($.inputError=void 0,C.setTransactionDetails())}catch(e){$.loadingQuote=!1,$.inputError="Insufficient balance"}},async getTransaction(){const{fromCaipAddress:e,availableToSwap:t}=C.getParams(),i=$.sourceToken,o=$.toToken;if(e&&t&&i&&o&&!$.loadingQuote)try{let t;return $.loadingBuildTransaction=!0,t=await p.s.fetchSwapAllowance({userAddress:e,tokenAddress:i.address,sourceTokenAmount:$.sourceTokenAmount,sourceTokenDecimals:i.decimals})?await C.createSwapTransaction():await C.createAllowanceTransaction(),$.loadingBuildTransaction=!1,$.fetchError=!1,t}catch(e){return x.I.goBack(),T.P.showError("Failed to check allowance"),$.loadingBuildTransaction=!1,$.approvalTransaction=void 0,$.swapTransaction=void 0,void($.fetchError=!0)}},async createAllowanceTransaction(){const{fromCaipAddress:e,sourceTokenAddress:t,toTokenAddress:i}=C.getParams();if(e&&i){if(!t)throw new Error("createAllowanceTransaction - No source token address found.");try{const o=await f.T.generateApproveCalldata({from:t,to:i,userAddress:e}),r=d.w.getPlainAddress(o.tx.from);if(!r)throw new Error("SwapController:createAllowanceTransaction - address is required");const a={data:o.tx.data,to:r,gasPrice:BigInt(o.tx.eip155.gasPrice),value:BigInt(o.tx.value),toAmount:$.toTokenAmount};return $.swapTransaction=void 0,$.approvalTransaction={data:a.data,to:a.to,gasPrice:a.gasPrice,value:a.value,toAmount:a.toAmount},{data:a.data,to:a.to,gasPrice:a.gasPrice,value:a.value,toAmount:a.toAmount}}catch(e){return x.I.goBack(),T.P.showError("Failed to create approval transaction"),$.approvalTransaction=void 0,$.swapTransaction=void 0,void($.fetchError=!0)}}},async createSwapTransaction(){const{networkAddress:e,fromCaipAddress:t,sourceTokenAmount:i}=C.getParams(),o=$.sourceToken,r=$.toToken;if(!(t&&i&&o&&r))return;const a=m.x.parseUnits(i,o.decimals)?.toString();try{const i=await f.T.generateSwapCalldata({userAddress:t,from:o.address,to:r.address,amount:a,disableEstimate:!0}),n=o.address===e,s=BigInt(i.tx.eip155.gas),c=BigInt(i.tx.eip155.gasPrice),l=d.w.getPlainAddress(i.tx.to);if(!l)throw new Error("SwapController:createSwapTransaction - address is required");const u={data:i.tx.data,to:l,gas:s,gasPrice:c,value:n?BigInt(a??"0"):BigInt("0"),toAmount:$.toTokenAmount};return $.gasPriceInUSD=h.getGasPriceInUSD($.networkPrice,s,c),$.approvalTransaction=void 0,$.swapTransaction=u,u}catch(e){return x.I.goBack(),T.P.showError("Failed to create transaction"),$.approvalTransaction=void 0,$.swapTransaction=void 0,void($.fetchError=!0)}},onEmbeddedWalletApprovalSuccess(){T.P.showLoading("Approve limit increase in your wallet"),x.I.replace("SwapPreview")},async sendTransactionForApproval(e){const{fromAddress:t,isAuthConnector:i}=C.getParams();$.loadingApprovalTransaction=!0,i?x.I.pushTransactionStack({onSuccess:C.onEmbeddedWalletApprovalSuccess}):T.P.showLoading("Approve limit increase in your wallet");try{await m.x.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:n.o.CHAIN.EVM}),await C.swapTokens(),await C.getTransaction(),$.approvalTransaction=void 0,$.loadingApprovalTransaction=!1}catch(e){const t=e;$.transactionError=t?.displayMessage,$.loadingApprovalTransaction=!1,T.P.showError(t?.displayMessage||"Transaction error"),y.E.sendEvent({type:"track",event:"SWAP_APPROVAL_ERROR",properties:{message:t?.displayMessage||t?.message||"Unknown",network:b.W.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:C.state.sourceToken?.symbol||"",swapToToken:C.state.toToken?.symbol||"",swapFromAmount:C.state.sourceTokenAmount||"",swapToAmount:C.state.toTokenAmount||"",isSmartAccount:(0,l.lj)(n.o.CHAIN.EVM)===s.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}},async sendTransactionForSwap(e){if(!e)return;const{fromAddress:t,toTokenAmount:i,isAuthConnector:o}=C.getParams();$.loadingTransaction=!0;const r=`Swapping ${$.sourceToken?.symbol} to ${a.S.formatNumberToLocalString(i,3)} ${$.toToken?.symbol}`,c=`Swapped ${$.sourceToken?.symbol} to ${a.S.formatNumberToLocalString(i,3)} ${$.toToken?.symbol}`;o?x.I.pushTransactionStack({onSuccess(){x.I.replace("Account"),T.P.showLoading(r),P.resetState()}}):T.P.showLoading("Confirm transaction in your wallet");try{const i=[$.sourceToken?.address,$.toToken?.address].join(","),r=await m.x.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:n.o.CHAIN.EVM});return $.loadingTransaction=!1,T.P.showSuccess(c),y.E.sendEvent({type:"track",event:"SWAP_SUCCESS",properties:{network:b.W.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:C.state.sourceToken?.symbol||"",swapToToken:C.state.toToken?.symbol||"",swapFromAmount:C.state.sourceTokenAmount||"",swapToAmount:C.state.toTokenAmount||"",isSmartAccount:(0,l.lj)(n.o.CHAIN.EVM)===s.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),P.resetState(),o||x.I.replace("Account"),P.getMyTokensWithBalance(i),r}catch(e){const t=e;return $.transactionError=t?.displayMessage,$.loadingTransaction=!1,T.P.showError(t?.displayMessage||"Transaction error"),void y.E.sendEvent({type:"track",event:"SWAP_ERROR",properties:{message:t?.displayMessage||t?.message||"Unknown",network:b.W.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:C.state.sourceToken?.symbol||"",swapToToken:C.state.toToken?.symbol||"",swapFromAmount:C.state.sourceTokenAmount||"",swapToAmount:C.state.toTokenAmount||"",isSmartAccount:(0,l.lj)(n.o.CHAIN.EVM)===s.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}},hasInsufficientToken:(e,t)=>h.isInsufficientSourceTokenForSwap(e,t,$.myTokensWithBalance),setTransactionDetails(){const{toTokenAddress:e,toTokenDecimals:t}=C.getParams();e&&t&&($.gasPriceInUSD=h.getGasPriceInUSD($.networkPrice,BigInt($.gasFee),BigInt(S)),$.priceImpact=h.getPriceImpact({sourceTokenAmount:$.sourceTokenAmount,sourceTokenPriceInUSD:$.sourceTokenPriceInUSD,toTokenPriceInUSD:$.toTokenPriceInUSD,toTokenAmount:$.toTokenAmount}),$.maxSlippage=h.getMaxSlippage($.slippage,$.toTokenAmount),$.providerFee=h.getProviderFee($.sourceTokenAmount))}},C=(0,g.X)(P)},3407:(e,t,i)=>{var o=i(48422),r=i(91427),a=(i(17262),i(36858),i(47080)),n=i(39783);i(30204);const s=o.AH`
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
`;var c=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let l=class extends o.WF{constructor(){super(...arguments),this.text=""}render(){return o.qy`
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
    `}};l.styles=[a.W5,a.fD,s],c([(0,r.MZ)()],l.prototype,"imageSrc",void 0),c([(0,r.MZ)()],l.prototype,"text",void 0),l=c([(0,n.E)("wui-token-button")],l)},4537:(e,t,i)=>{i.d(t,{w:()=>r});var o=i(69623);function r(e){return(0,o.M)({...e,state:!0,attribute:!1})}},12974:(e,t,i)=>{i(1711)},17262:(e,t,i)=>{var o=i(48422),r=i(91427),a=i(47080),n=i(39783);const s=o.AH`
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
`;var c=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let l=class extends o.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0,this.objectFit="cover"}render(){return this.objectFit&&(this.dataset.objectFit=this.objectFit),this.style.cssText=`\n      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      `,o.qy`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};l.styles=[a.W5,a.ck,s],c([(0,r.MZ)()],l.prototype,"src",void 0),c([(0,r.MZ)()],l.prototype,"alt",void 0),c([(0,r.MZ)()],l.prototype,"size",void 0),c([(0,r.MZ)()],l.prototype,"objectFit",void 0),l=c([(0,n.E)("wui-image")],l)},18901:(e,t,i)=>{var o=i(48422),r=i(91427),a=i(47080),n=i(39783);const s=o.AH`
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
`;var c=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let l=class extends o.WF{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText="--local-color: "+("inherit"===this.color?"inherit":`var(--wui-color-${this.color})`),this.dataset.size=this.size,o.qy`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};l.styles=[a.W5,s],c([(0,r.MZ)()],l.prototype,"color",void 0),c([(0,r.MZ)()],l.prototype,"size",void 0),l=c([(0,n.E)("wui-loading-spinner")],l)},23411:(e,t,i)=>{i(30204)},23507:(e,t,i)=>{i.d(t,{H:()=>a});var o=i(80971),r=i(39341);const a=(0,r.u$)(class extends r.WL{constructor(e){if(super(e),e.type!==r.OA.ATTRIBUTE||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e)));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const i=e.element.classList;for(const e of this.st)e in t||(i.remove(e),this.st.delete(e));for(const e in t){const o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return o.c0}})},24668:(e,t,i)=>{var o=i(48422),r=i(91427),a=i(39168),n=(i(36858),i(47080)),s=i(39783);const c=o.AH`
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
`;var l=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let u=class extends o.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return o.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,a.J)(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};u.styles=[n.W5,n.fD,c],l([(0,r.MZ)()],u.prototype,"tabIdx",void 0),l([(0,r.MZ)({type:Boolean})],u.prototype,"disabled",void 0),l([(0,r.MZ)()],u.prototype,"color",void 0),u=l([(0,s.E)("wui-link")],u)},27165:(e,t,i)=>{i.d(t,{Rt:()=>n,sO:()=>a});var o=i(80971);const{I:r}=o.ge,a=e=>null===e||"object"!=typeof e&&"function"!=typeof e,n=e=>void 0===e.strings},30204:(e,t,i)=>{var o=i(48422),r=i(91427),a=(i(77200),i(47080)),n=i(39783);const s=o.AH`
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
`;var c=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let l=class extends o.WF{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,t="lg"===this.size,i="xl"===this.size,r=t?"12%":"16%",a=t?"xxs":i?"s":"3xl",n="gray"===this.background,s="opaque"===this.background,c="accent-100"===this.backgroundColor&&s||"success-100"===this.backgroundColor&&s||"error-100"===this.backgroundColor&&s||"inverse-100"===this.backgroundColor&&s;let l=`var(--wui-color-${this.backgroundColor})`;return c?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:n&&(l=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${l};\n       --local-bg-mix: ${c||n?"100%":r};\n       --local-border-radius: var(--wui-border-radius-${a});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,o.qy` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};l.styles=[a.W5,a.fD,s],c([(0,r.MZ)()],l.prototype,"size",void 0),c([(0,r.MZ)()],l.prototype,"backgroundColor",void 0),c([(0,r.MZ)()],l.prototype,"iconColor",void 0),c([(0,r.MZ)()],l.prototype,"iconSize",void 0),c([(0,r.MZ)()],l.prototype,"background",void 0),c([(0,r.MZ)({type:Boolean})],l.prototype,"border",void 0),c([(0,r.MZ)()],l.prototype,"borderColor",void 0),c([(0,r.MZ)()],l.prototype,"icon",void 0),l=c([(0,n.E)("wui-icon-box")],l)},32971:(e,t,i)=>{i.d(t,{T:()=>p});var o=i(80971),r=i(27165),a=i(64720);class n{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class s{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}}var c=i(39341);const l=e=>!(0,r.sO)(e)&&"function"==typeof e.then,u=1073741823;class d extends a.Kq{constructor(){super(...arguments),this._$Cwt=u,this._$Cbt=[],this._$CK=new n(this),this._$CX=new s}render(...e){return e.find(e=>!l(e))??o.c0}update(e,t){const i=this._$Cbt;let r=i.length;this._$Cbt=t;const a=this._$CK,n=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){const o=t[e];if(!l(o))return this._$Cwt=e,o;e<r&&o===i[e]||(this._$Cwt=u,r=0,Promise.resolve(o).then(async e=>{for(;n.get();)await n.get();const t=a.deref();if(void 0!==t){const i=t._$Cbt.indexOf(o);i>-1&&i<t._$Cwt&&(t._$Cwt=i,t.setValue(e))}}))}return o.c0}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const p=(0,c.u$)(d)},33846:(e,t,i)=>{i(66727)},35016:(e,t,i)=>{i.d(t,{C5:()=>a,Ky:()=>r,PG:()=>o});const o=/[.*+?^${}()|[\]\\]/gu,r=/[0-9,.]/u,a="https://reown.com"},36858:(e,t,i)=>{var o=i(48422),r=i(91427),a=i(23507),n=i(47080),s=i(39783);const c=o.AH`
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
`;var l=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let u=class extends o.WF{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,o.qy`<slot class=${(0,a.H)(e)}></slot>`}};u.styles=[n.W5,c],l([(0,r.MZ)()],u.prototype,"variant",void 0),l([(0,r.MZ)()],u.prototype,"color",void 0),l([(0,r.MZ)()],u.prototype,"align",void 0),l([(0,r.MZ)()],u.prototype,"lineClamp",void 0),u=l([(0,s.E)("wui-text")],u)},38273:(e,t,i)=>{i(46116)},39168:(e,t,i)=>{i.d(t,{J:()=>r});var o=i(80971);const r=e=>e??o.s6},39341:(e,t,i)=>{i.d(t,{OA:()=>o,WL:()=>a,u$:()=>r});const o={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},r=e=>(...t)=>({_$litDirective$:e,values:t});class a{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},46116:(e,t,i)=>{var o=i(48422),r=i(91427),a=i(47080),n=i(86515),s=i(39783);const c=o.AH`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var l=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let u=class extends o.WF{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&n.Z.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&n.Z.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&n.Z.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&n.Z.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&n.Z.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&n.Z.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&n.Z.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&n.Z.getSpacingStyles(this.margin,3)};\n    `,o.qy`<slot></slot>`}};u.styles=[a.W5,c],l([(0,r.MZ)()],u.prototype,"flexDirection",void 0),l([(0,r.MZ)()],u.prototype,"flexWrap",void 0),l([(0,r.MZ)()],u.prototype,"flexBasis",void 0),l([(0,r.MZ)()],u.prototype,"flexGrow",void 0),l([(0,r.MZ)()],u.prototype,"flexShrink",void 0),l([(0,r.MZ)()],u.prototype,"alignItems",void 0),l([(0,r.MZ)()],u.prototype,"justifyContent",void 0),l([(0,r.MZ)()],u.prototype,"columnGap",void 0),l([(0,r.MZ)()],u.prototype,"rowGap",void 0),l([(0,r.MZ)()],u.prototype,"gap",void 0),l([(0,r.MZ)()],u.prototype,"padding",void 0),l([(0,r.MZ)()],u.prototype,"margin",void 0),u=l([(0,s.E)("wui-flex")],u)},57933:(e,t,i)=>{var o=i(48422),r=i(91427),a=(i(36858),i(47080)),n=i(39783);const s=o.AH`
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
`;var c=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let l=class extends o.WF{constructor(){super(...arguments),this.text=""}render(){return o.qy`${this.template()}`}template(){return this.text?o.qy`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};l.styles=[a.W5,s],c([(0,r.MZ)()],l.prototype,"text",void 0),l=c([(0,n.E)("wui-separator")],l)},64720:(e,t,i)=>{i.d(t,{Kq:()=>d});var o=i(27165),r=i(39341);const a=(e,t)=>{const i=e._$AN;if(void 0===i)return!1;for(const e of i)e._$AO?.(t,!1),a(e,t);return!0},n=e=>{let t,i;do{if(void 0===(t=e._$AM))break;i=t._$AN,i.delete(e),e=t}while(0===i?.size)},s=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),u(t)}};function c(e){void 0!==this._$AN?(n(this),this._$AM=e,s(this)):this._$AM=e}function l(e,t=!1,i=0){const o=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(t)if(Array.isArray(o))for(let e=i;e<o.length;e++)a(o[e],!1),n(o[e]);else null!=o&&(a(o,!1),n(o));else a(this,e)}const u=e=>{e.type==r.OA.CHILD&&(e._$AP??=l,e._$AQ??=c)};class d extends r.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),s(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(a(this,e),n(this))}setValue(e){if((0,o.Rt)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}},66727:(e,t,i)=>{var o=i(48422),r=i(91427),a=(i(18901),i(36858),i(47080)),n=i(39783);const s=o.AH`
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
`;var c=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};const l={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},u={lg:"paragraph-600",md:"small-600",sm:"small-600",xs:"tiny-600"},d={lg:"md",md:"md",sm:"sm",xs:"sm"};let p=class extends o.WF{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`\n    --local-width: ${this.fullWidth?"100%":"auto"};\n    --local-opacity-100: ${this.loading?0:1};\n    --local-opacity-000: ${this.loading?1:0};\n    --local-border-radius: var(--wui-border-radius-${this.borderRadius});\n    `;const e=this.textVariant??u[this.size];return o.qy`
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
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const e=d[this.size],t=this.disabled?l.disabled:l[this.variant];return o.qy`<wui-loading-spinner color=${t} size=${e}></wui-loading-spinner>`}return o.qy``}};p.styles=[a.W5,a.fD,s],c([(0,r.MZ)()],p.prototype,"size",void 0),c([(0,r.MZ)({type:Boolean})],p.prototype,"disabled",void 0),c([(0,r.MZ)({type:Boolean})],p.prototype,"fullWidth",void 0),c([(0,r.MZ)({type:Boolean})],p.prototype,"loading",void 0),c([(0,r.MZ)()],p.prototype,"variant",void 0),c([(0,r.MZ)({type:Boolean})],p.prototype,"hasIconLeft",void 0),c([(0,r.MZ)({type:Boolean})],p.prototype,"hasIconRight",void 0),c([(0,r.MZ)()],p.prototype,"borderRadius",void 0),c([(0,r.MZ)()],p.prototype,"textVariant",void 0),p=c([(0,n.E)("wui-button")],p)},66933:(e,t,i)=>{i(36858)},69623:(e,t,i)=>{i.d(t,{M:()=>n});var o=i(56451);const r={attribute:!0,type:String,converter:o.W3,reflect:!1,hasChanged:o.Ec},a=(e=r,t,i)=>{const{kind:o,metadata:a}=i;let n=globalThis.litPropertyMetadata.get(a);if(void 0===n&&globalThis.litPropertyMetadata.set(a,n=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),n.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const r=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,r,e)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){const{name:o}=i;return function(i){const r=this[o];t.call(this,i),this.requestUpdate(o,r,e)}}throw Error("Unsupported decorator location: "+o)};function n(e){return(t,i)=>"object"==typeof i?a(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}},77200:(e,t,i)=>{var o=i(48422),r=i(91427),a=i(32971);const n=new class{constructor(){this.cache=new Map}set(e,t){this.cache.set(e,t)}get(e){return this.cache.get(e)}has(e){return this.cache.has(e)}delete(e){this.cache.delete(e)}clear(){this.cache.clear()}};var s=i(47080),c=i(39783);const l=o.AH`
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
`;var u=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};const d={add:async()=>(await i.e(5619).then(i.bind(i,95619))).addSvg,allWallets:async()=>(await i.e(9452).then(i.bind(i,99452))).allWalletsSvg,arrowBottomCircle:async()=>(await i.e(5374).then(i.bind(i,45374))).arrowBottomCircleSvg,appStore:async()=>(await i.e(3019).then(i.bind(i,33019))).appStoreSvg,apple:async()=>(await i.e(8852).then(i.bind(i,58852))).appleSvg,arrowBottom:async()=>(await i.e(3097).then(i.bind(i,33097))).arrowBottomSvg,arrowLeft:async()=>(await i.e(9275).then(i.bind(i,89275))).arrowLeftSvg,arrowRight:async()=>(await i.e(1282).then(i.bind(i,61282))).arrowRightSvg,arrowTop:async()=>(await i.e(1967).then(i.bind(i,31967))).arrowTopSvg,bank:async()=>(await i.e(2236).then(i.bind(i,72236))).bankSvg,browser:async()=>(await i.e(6524).then(i.bind(i,76524))).browserSvg,bin:async()=>(await i.e(4249).then(i.bind(i,64249))).binSvg,bitcoin:async()=>(await i.e(4286).then(i.bind(i,94286))).bitcoinSvg,card:async()=>(await i.e(3524).then(i.bind(i,93524))).cardSvg,checkmark:async()=>(await i.e(525).then(i.bind(i,90525))).checkmarkSvg,checkmarkBold:async()=>(await i.e(8905).then(i.bind(i,48905))).checkmarkBoldSvg,chevronBottom:async()=>(await i.e(4231).then(i.bind(i,44231))).chevronBottomSvg,chevronLeft:async()=>(await i.e(5329).then(i.bind(i,65329))).chevronLeftSvg,chevronRight:async()=>(await i.e(1176).then(i.bind(i,61176))).chevronRightSvg,chevronTop:async()=>(await i.e(3745).then(i.bind(i,3745))).chevronTopSvg,chromeStore:async()=>(await i.e(9208).then(i.bind(i,59208))).chromeStoreSvg,clock:async()=>(await i.e(614).then(i.bind(i,20614))).clockSvg,close:async()=>(await i.e(3176).then(i.bind(i,3176))).closeSvg,compass:async()=>(await i.e(4484).then(i.bind(i,94484))).compassSvg,coinPlaceholder:async()=>(await i.e(410).then(i.bind(i,20410))).coinPlaceholderSvg,copy:async()=>(await i.e(355).then(i.bind(i,70355))).copySvg,cursor:async()=>(await i.e(988).then(i.bind(i,40988))).cursorSvg,cursorTransparent:async()=>(await i.e(4855).then(i.bind(i,84855))).cursorTransparentSvg,circle:async()=>(await i.e(8178).then(i.bind(i,78178))).circleSvg,desktop:async()=>(await i.e(4208).then(i.bind(i,54208))).desktopSvg,disconnect:async()=>(await i.e(9728).then(i.bind(i,99728))).disconnectSvg,discord:async()=>(await i.e(4172).then(i.bind(i,64172))).discordSvg,ethereum:async()=>(await i.e(6351).then(i.bind(i,96351))).ethereumSvg,etherscan:async()=>(await i.e(1461).then(i.bind(i,81461))).etherscanSvg,extension:async()=>(await i.e(7381).then(i.bind(i,67381))).extensionSvg,externalLink:async()=>(await i.e(7274).then(i.bind(i,47274))).externalLinkSvg,facebook:async()=>(await i.e(4698).then(i.bind(i,4698))).facebookSvg,farcaster:async()=>(await i.e(5505).then(i.bind(i,5505))).farcasterSvg,filters:async()=>(await i.e(8075).then(i.bind(i,48075))).filtersSvg,github:async()=>(await i.e(8573).then(i.bind(i,48573))).githubSvg,google:async()=>(await i.e(9521).then(i.bind(i,39521))).googleSvg,helpCircle:async()=>(await i.e(7842).then(i.bind(i,97842))).helpCircleSvg,image:async()=>(await i.e(4541).then(i.bind(i,64541))).imageSvg,id:async()=>(await i.e(8743).then(i.bind(i,18743))).idSvg,infoCircle:async()=>(await i.e(2907).then(i.bind(i,42907))).infoCircleSvg,lightbulb:async()=>(await i.e(7547).then(i.bind(i,57547))).lightbulbSvg,mail:async()=>(await i.e(3721).then(i.bind(i,3721))).mailSvg,mobile:async()=>(await i.e(2756).then(i.bind(i,42756))).mobileSvg,more:async()=>(await i.e(8023).then(i.bind(i,28023))).moreSvg,networkPlaceholder:async()=>(await i.e(2134).then(i.bind(i,72134))).networkPlaceholderSvg,nftPlaceholder:async()=>(await i.e(8679).then(i.bind(i,38679))).nftPlaceholderSvg,off:async()=>(await i.e(413).then(i.bind(i,10413))).offSvg,playStore:async()=>(await i.e(376).then(i.bind(i,80376))).playStoreSvg,plus:async()=>(await i.e(7142).then(i.bind(i,87142))).plusSvg,qrCode:async()=>(await i.e(4195).then(i.bind(i,44195))).qrCodeIcon,recycleHorizontal:async()=>(await i.e(8942).then(i.bind(i,28942))).recycleHorizontalSvg,refresh:async()=>(await i.e(8795).then(i.bind(i,88795))).refreshSvg,search:async()=>(await i.e(6202).then(i.bind(i,6202))).searchSvg,send:async()=>(await i.e(196).then(i.bind(i,60196))).sendSvg,swapHorizontal:async()=>(await i.e(1429).then(i.bind(i,31429))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await i.e(5634).then(i.bind(i,15634))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await i.e(638).then(i.bind(i,20638))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await i.e(1259).then(i.bind(i,91259))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await i.e(2051).then(i.bind(i,82051))).swapVerticalSvg,solana:async()=>(await i.e(2178).then(i.bind(i,12178))).solanaSvg,telegram:async()=>(await i.e(7137).then(i.bind(i,57137))).telegramSvg,threeDots:async()=>(await i.e(8617).then(i.bind(i,38617))).threeDotsSvg,twitch:async()=>(await i.e(9605).then(i.bind(i,59605))).twitchSvg,twitter:async()=>(await i.e(7420).then(i.bind(i,57420))).xSvg,twitterIcon:async()=>(await i.e(5622).then(i.bind(i,5622))).twitterIconSvg,user:async()=>(await i.e(9653).then(i.bind(i,29653))).userSvg,verify:async()=>(await i.e(6963).then(i.bind(i,86963))).verifySvg,verifyFilled:async()=>(await i.e(4368).then(i.bind(i,94368))).verifyFilledSvg,wallet:async()=>(await i.e(8235).then(i.bind(i,88235))).walletSvg,walletConnect:async()=>(await i.e(3565).then(i.bind(i,33565))).walletConnectSvg,walletConnectLightBrown:async()=>(await i.e(3565).then(i.bind(i,33565))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await i.e(3565).then(i.bind(i,33565))).walletConnectBrownSvg,walletPlaceholder:async()=>(await i.e(8447).then(i.bind(i,78447))).walletPlaceholderSvg,warningCircle:async()=>(await i.e(7873).then(i.bind(i,37873))).warningCircleSvg,x:async()=>(await i.e(7420).then(i.bind(i,57420))).xSvg,info:async()=>(await i.e(4734).then(i.bind(i,54734))).infoSvg,exclamationTriangle:async()=>(await i.e(7106).then(i.bind(i,7106))).exclamationTriangleSvg,reown:async()=>(await i.e(7391).then(i.bind(i,97391))).reownSvg,"x-mark":async()=>(await i.e(8940).then(i.bind(i,68940))).xMarkSvg};let p=class extends o.WF{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n      --local-aspect-ratio: ${this.aspectRatio}\n    `,o.qy`${(0,a.T)(async function(e){if(n.has(e))return n.get(e);const t=(d[e]??d.copy)();return n.set(e,t),t}(this.name),o.qy`<div class="fallback"></div>`)}`}};p.styles=[s.W5,s.ck,l],u([(0,r.MZ)()],p.prototype,"size",void 0),u([(0,r.MZ)()],p.prototype,"name",void 0),u([(0,r.MZ)()],p.prototype,"color",void 0),u([(0,r.MZ)()],p.prototype,"aspectRatio",void 0),p=u([(0,c.E)("wui-icon")],p)},78411:(e,t,i)=>{var o=i(48422),r=i(91427),a=(i(77200),i(17262),i(36858),i(46116),i(47080)),n=i(86515),s=i(39783);const c=o.AH`
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
`;var l=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let u=class extends o.WF{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return o.qy`
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
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?o.qy`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:o.qy`<wui-icon name="coinPlaceholder" color="fg-100"></wui-icon>`}};u.styles=[a.W5,a.fD,c],l([(0,r.MZ)()],u.prototype,"tokenName",void 0),l([(0,r.MZ)()],u.prototype,"tokenImageUrl",void 0),l([(0,r.MZ)({type:Number})],u.prototype,"tokenValue",void 0),l([(0,r.MZ)()],u.prototype,"tokenAmount",void 0),l([(0,r.MZ)()],u.prototype,"tokenCurrency",void 0),l([(0,r.MZ)({type:Boolean})],u.prototype,"clickable",void 0),u=l([(0,s.E)("wui-list-token")],u)},86668:(e,t,i)=>{var o=i(48422),r=i(91427),a=(i(17262),i(47080)),n=i(86515),s=i(39783);const c=o.AH`
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
`;var l=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let u=class extends o.WF{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){return this.style.cssText=`\n    --local-width: var(--wui-icon-box-size-${this.size});\n    --local-height: var(--wui-icon-box-size-${this.size});\n    `,o.qy`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",o.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=n.Z.generateAvatarColors(this.address);return this.style.cssText+=`\n ${e}`,null}return this.dataset.variant="default",null}};u.styles=[a.W5,c],l([(0,r.MZ)()],u.prototype,"imageSrc",void 0),l([(0,r.MZ)()],u.prototype,"alt",void 0),l([(0,r.MZ)()],u.prototype,"address",void 0),l([(0,r.MZ)()],u.prototype,"size",void 0),u=l([(0,s.E)("wui-avatar")],u)},90315:(e,t,i)=>{i(77200)},91427:(e,t,i)=>{i.d(t,{MZ:()=>o.M,wk:()=>r.w});var o=i(69623),r=i(4537)}}]);
//# sourceMappingURL=351.widget.iife.js.map