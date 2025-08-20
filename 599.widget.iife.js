/*! For license information please see 599.widget.iife.js.LICENSE.txt */
if(void 0===process)var process={env:{NODE_ENV:"production"},browser:!0,version:"",versions:{}};(this.webpackChunkHLWidget=this.webpackChunkHLWidget||[]).push([[599],{379:(t,e,i)=>{"use strict";i.d(e,{_:()=>a,K:()=>l});var o=i(80971),r=i(64720),n=i(39341);const a=()=>new s;class s{}const c=new WeakMap,l=(0,n.u$)(class extends r.Kq{render(t){return o.s6}update(t,[e]){const i=e!==this.G;return i&&void 0!==this.G&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),o.s6}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.G){const e=this.ht??globalThis;let i=c.get(e);void 0===i&&(i=new WeakMap,c.set(e,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,t),void 0!==t&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return"function"==typeof this.G?c.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})},2501:(t,e)=>{e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2},e.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},e.from=function(t,i){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+t)}}(t)}catch(t){return i}}},3521:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),n=i(39168),a=(i(36858),i(47080)),s=i(39783);i(41630);const c=o.AH`
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
`;var l=function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let u=class extends o.WF{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.align="left",this.disabled=!1}render(){return o.qy`
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
    `}templatePlacement(){return"center"===this.align?o.qy` <wui-logo class="invisible" logo=${this.logo}></wui-logo>`:null}};u.styles=[a.W5,a.fD,c],l([(0,r.MZ)()],u.prototype,"logo",void 0),l([(0,r.MZ)()],u.prototype,"name",void 0),l([(0,r.MZ)()],u.prototype,"align",void 0),l([(0,r.MZ)()],u.prototype,"tabIdx",void 0),l([(0,r.MZ)({type:Boolean})],u.prototype,"disabled",void 0),u=l([(0,s.E)("wui-list-social")],u)},3824:(t,e,i)=>{const o=i(9074);function r(t,e){const i=t.a/255,o=e+'="'+t.hex+'"';return i<1?o+" "+e+'-opacity="'+i.toFixed(2).slice(1)+'"':o}function n(t,e,i){let o=t+e;return void 0!==i&&(o+=" "+i),o}e.render=function(t,e,i){const a=o.getOptions(e),s=t.modules.size,c=t.modules.data,l=s+2*a.margin,u=a.color.light.a?"<path "+r(a.color.light,"fill")+' d="M0 0h'+l+"v"+l+'H0z"/>':"",d="<path "+r(a.color.dark,"stroke")+' d="'+function(t,e,i){let o="",r=0,a=!1,s=0;for(let c=0;c<t.length;c++){const l=Math.floor(c%e),u=Math.floor(c/e);l||a||(a=!0),t[c]?(s++,c>0&&l>0&&t[c-1]||(o+=a?n("M",l+i,.5+u+i):n("m",r,0),r=0,a=!1),l+1<e&&t[c+1]||(o+=n("h",s),s=0)):r++}return o}(c,s,a.margin)+'"/>',h='viewBox="0 0 '+l+" "+l+'"',g='<svg xmlns="http://www.w3.org/2000/svg" '+(a.width?'width="'+a.width+'" height="'+a.width+'" ':"")+h+' shape-rendering="crispEdges">'+u+d+"</svg>\n";return"function"==typeof i&&i(null,g),g}},4537:(t,e,i)=>{"use strict";i.d(e,{w:()=>r});var o=i(69623);function r(t){return(0,o.M)({...t,state:!0,attribute:!1})}},9074:(t,e)=>{function i(t){if("number"==typeof t&&(t=t.toString()),"string"!=typeof t)throw new Error("Color should be defined as hex string");let e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map(function(t){return[t,t]}))),6===e.length&&e.push("F","F");const i=parseInt(e.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:255&i,hex:"#"+e.slice(0,6).join("")}}e.getOptions=function(t){t||(t={}),t.color||(t.color={});const e=void 0===t.margin||null===t.margin||t.margin<0?4:t.margin,o=t.width&&t.width>=21?t.width:void 0,r=t.scale||4;return{width:o,scale:o?4:r,margin:e,color:{dark:i(t.color.dark||"#000000ff"),light:i(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},e.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},e.getImageWidth=function(t,i){const o=e.getScale(t,i);return Math.floor((t+2*i.margin)*o)},e.qrToImageData=function(t,i,o){const r=i.modules.size,n=i.modules.data,a=e.getScale(r,o),s=Math.floor((r+2*o.margin)*a),c=o.margin*a,l=[o.color.light,o.color.dark];for(let e=0;e<s;e++)for(let i=0;i<s;i++){let u=4*(e*s+i),d=o.color.light;e>=c&&i>=c&&e<s-c&&i<s-c&&(d=l[n[Math.floor((e-c)/a)*r+Math.floor((i-c)/a)]?1:0]),t[u++]=d.r,t[u++]=d.g,t[u++]=d.b,t[u]=d.a}}},10593:(t,e,i)=>{const o=i(32500),r=i(82890);function n(t){this.mode=o.KANJI,this.data=t}n.getBitsLength=function(t){return 13*t},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let i=r.toSJIS(this.data[e]);if(i>=33088&&i<=40956)i-=33088;else{if(!(i>=57408&&i<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");i-=49472}i=192*(i>>>8&255)+(255&i),t.put(i,13)}},t.exports=n},13992:(t,e)=>{const i="[0-9]+";let o="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";o=o.replace(/u/g,"\\u");const r="(?:(?![A-Z0-9 $%*+\\-./:]|"+o+")(?:.|[\r\n]))+";e.KANJI=new RegExp(o,"g"),e.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),e.BYTE=new RegExp(r,"g"),e.NUMERIC=new RegExp(i,"g"),e.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");const n=new RegExp("^"+o+"$"),a=new RegExp("^"+i+"$"),s=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");e.testKanji=function(t){return n.test(t)},e.testNumeric=function(t){return a.test(t)},e.testAlphanumeric=function(t){return s.test(t)}},17262:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),n=i(47080),a=i(39783);const s=o.AH`
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
`;var c=function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let l=class extends o.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0,this.objectFit="cover"}render(){return this.objectFit&&(this.dataset.objectFit=this.objectFit),this.style.cssText=`\n      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      `,o.qy`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};l.styles=[n.W5,n.ck,s],c([(0,r.MZ)()],l.prototype,"src",void 0),c([(0,r.MZ)()],l.prototype,"alt",void 0),c([(0,r.MZ)()],l.prototype,"size",void 0),c([(0,r.MZ)()],l.prototype,"objectFit",void 0),l=c([(0,a.E)("wui-image")],l)},18901:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),n=i(47080),a=i(39783);const s=o.AH`
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
`;var c=function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let l=class extends o.WF{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText="--local-color: "+("inherit"===this.color?"inherit":`var(--wui-color-${this.color})`),this.dataset.size=this.size,o.qy`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};l.styles=[n.W5,s],c([(0,r.MZ)()],l.prototype,"color",void 0),c([(0,r.MZ)()],l.prototype,"size",void 0),l=c([(0,a.E)("wui-loading-spinner")],l)},20304:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),n=i(46358),a=i(31779);i(38273),i(66933),i(88766);const s=o.AH`
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
`;var c=function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let l=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.remoteFeatures=n.H.state.remoteFeatures,this.unsubscribe.push(n.H.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{termsConditionsUrl:t,privacyPolicyUrl:e}=n.H.state,i=n.H.state.features?.legalCheckbox;return!t&&!e||i?o.qy`
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
    `}andTemplate(){const{termsConditionsUrl:t,privacyPolicyUrl:e}=n.H.state;return t&&e?"and":""}termsTemplate(){const{termsConditionsUrl:t}=n.H.state;return t?o.qy`<a href=${t} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`:null}privacyTemplate(){const{privacyPolicyUrl:t}=n.H.state;return t?o.qy`<a href=${t} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`:null}reownBrandingTemplate(t=!1){return this.remoteFeatures?.reownBranding?t?o.qy`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`:o.qy`<wui-ux-by-reown></wui-ux-by-reown>`:null}};l.styles=[s],c([(0,r.wk)()],l.prototype,"remoteFeatures",void 0),l=c([(0,a.EM)("w3m-legal-footer")],l)},23411:(t,e,i)=>{"use strict";i(30204)},23507:(t,e,i)=>{"use strict";i.d(e,{H:()=>n});var o=i(80971),r=i(39341);const n=(0,r.u$)(class extends r.WL{constructor(t){if(super(t),t.type!==r.OA.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const o=!!e[t];o===this.st.has(t)||this.nt?.has(t)||(o?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return o.c0}})},24668:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),n=i(39168),a=(i(36858),i(47080)),s=i(39783);const c=o.AH`
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
`;var l=function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let u=class extends o.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return o.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,n.J)(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};u.styles=[a.W5,a.fD,c],l([(0,r.MZ)()],u.prototype,"tabIdx",void 0),l([(0,r.MZ)({type:Boolean})],u.prototype,"disabled",void 0),l([(0,r.MZ)()],u.prototype,"color",void 0),u=l([(0,s.E)("wui-link")],u)},24909:(t,e,i)=>{const o=i(73743);e.mul=function(t,e){const i=new Uint8Array(t.length+e.length-1);for(let r=0;r<t.length;r++)for(let n=0;n<e.length;n++)i[r+n]^=o.mul(t[r],e[n]);return i},e.mod=function(t,e){let i=new Uint8Array(t);for(;i.length-e.length>=0;){const t=i[0];for(let r=0;r<e.length;r++)i[r]^=o.mul(e[r],t);let r=0;for(;r<i.length&&0===i[r];)r++;i=i.slice(r)}return i},e.generateECPolynomial=function(t){let i=new Uint8Array([1]);for(let r=0;r<t;r++)i=e.mul(i,new Uint8Array([1,o.exp(r)]));return i}},26264:(t,e)=>{e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};function i(t,i,o){switch(t){case e.Patterns.PATTERN000:return(i+o)%2==0;case e.Patterns.PATTERN001:return i%2==0;case e.Patterns.PATTERN010:return o%3==0;case e.Patterns.PATTERN011:return(i+o)%3==0;case e.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(o/3))%2==0;case e.Patterns.PATTERN101:return i*o%2+i*o%3==0;case e.Patterns.PATTERN110:return(i*o%2+i*o%3)%2==0;case e.Patterns.PATTERN111:return(i*o%3+(i+o)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}}e.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(t){const e=t.size;let i=0,o=0,r=0,n=null,a=null;for(let s=0;s<e;s++){o=r=0,n=a=null;for(let c=0;c<e;c++){let e=t.get(s,c);e===n?o++:(o>=5&&(i+=o-5+3),n=e,o=1),e=t.get(c,s),e===a?r++:(r>=5&&(i+=r-5+3),a=e,r=1)}o>=5&&(i+=o-5+3),r>=5&&(i+=r-5+3)}return i},e.getPenaltyN2=function(t){const e=t.size;let i=0;for(let o=0;o<e-1;o++)for(let r=0;r<e-1;r++){const e=t.get(o,r)+t.get(o,r+1)+t.get(o+1,r)+t.get(o+1,r+1);4!==e&&0!==e||i++}return 3*i},e.getPenaltyN3=function(t){const e=t.size;let i=0,o=0,r=0;for(let n=0;n<e;n++){o=r=0;for(let a=0;a<e;a++)o=o<<1&2047|t.get(n,a),a>=10&&(1488===o||93===o)&&i++,r=r<<1&2047|t.get(a,n),a>=10&&(1488===r||93===r)&&i++}return 40*i},e.getPenaltyN4=function(t){let e=0;const i=t.data.length;for(let o=0;o<i;o++)e+=t.data[o];return 10*Math.abs(Math.ceil(100*e/i/5)-10)},e.applyMask=function(t,e){const o=e.size;for(let r=0;r<o;r++)for(let n=0;n<o;n++)e.isReserved(n,r)||e.xor(n,r,i(t,n,r))},e.getBestMask=function(t,i){const o=Object.keys(e.Patterns).length;let r=0,n=1/0;for(let a=0;a<o;a++){i(a),e.applyMask(a,t);const o=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(a,t),o<n&&(n=o,r=a)}return r}},27165:(t,e,i)=>{"use strict";i.d(e,{Rt:()=>a,sO:()=>n});var o=i(80971);const{I:r}=o.ge,n=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=t=>void 0===t.strings},30204:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),n=(i(77200),i(47080)),a=i(39783);const s=o.AH`
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
`;var c=function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let l=class extends o.WF{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const t=this.iconSize||this.size,e="lg"===this.size,i="xl"===this.size,r=e?"12%":"16%",n=e?"xxs":i?"s":"3xl",a="gray"===this.background,s="opaque"===this.background,c="accent-100"===this.backgroundColor&&s||"success-100"===this.backgroundColor&&s||"error-100"===this.backgroundColor&&s||"inverse-100"===this.backgroundColor&&s;let l=`var(--wui-color-${this.backgroundColor})`;return c?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:a&&(l=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${l};\n       --local-bg-mix: ${c||a?"100%":r};\n       --local-border-radius: var(--wui-border-radius-${n});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,o.qy` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};l.styles=[n.W5,n.fD,s],c([(0,r.MZ)()],l.prototype,"size",void 0),c([(0,r.MZ)()],l.prototype,"backgroundColor",void 0),c([(0,r.MZ)()],l.prototype,"iconColor",void 0),c([(0,r.MZ)()],l.prototype,"iconSize",void 0),c([(0,r.MZ)()],l.prototype,"background",void 0),c([(0,r.MZ)({type:Boolean})],l.prototype,"border",void 0),c([(0,r.MZ)()],l.prototype,"borderColor",void 0),c([(0,r.MZ)()],l.prototype,"icon",void 0),l=c([(0,a.E)("wui-icon-box")],l)},32240:(t,e,i)=>{const o=i(24909);function r(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}r.prototype.initialize=function(t){this.degree=t,this.genPoly=o.generateECPolynomial(this.degree)},r.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const e=new Uint8Array(t.length+this.degree);e.set(t);const i=o.mod(e,this.genPoly),r=this.degree-i.length;if(r>0){const t=new Uint8Array(this.degree);return t.set(i,r),t}return i},t.exports=r},32500:(t,e,i)=>{const o=i(95586),r=i(13992);e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!o.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]},e.getBestModeForData=function(t){return r.testNumeric(t)?e.NUMERIC:r.testAlphanumeric(t)?e.ALPHANUMERIC:r.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},e.isValid=function(t){return t&&t.bit&&t.ccBits},e.from=function(t,i){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+t)}}(t)}catch(t){return i}}},32971:(t,e,i)=>{"use strict";i.d(e,{T:()=>h});var o=i(80971),r=i(27165),n=i(64720);class a{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class s{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}var c=i(39341);const l=t=>!(0,r.sO)(t)&&"function"==typeof t.then,u=1073741823;class d extends n.Kq{constructor(){super(...arguments),this._$Cwt=u,this._$Cbt=[],this._$CK=new a(this),this._$CX=new s}render(...t){return t.find(t=>!l(t))??o.c0}update(t,e){const i=this._$Cbt;let r=i.length;this._$Cbt=e;const n=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$Cwt);t++){const o=e[t];if(!l(o))return this._$Cwt=t,o;t<r&&o===i[t]||(this._$Cwt=u,r=0,Promise.resolve(o).then(async t=>{for(;a.get();)await a.get();const e=n.deref();if(void 0!==e){const i=e._$Cbt.indexOf(o);i>-1&&i<e._$Cwt&&(e._$Cwt=i,e.setValue(t))}}))}return o.c0}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const h=(0,c.u$)(d)},33448:t=>{function e(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}e.prototype.set=function(t,e,i,o){const r=t*this.size+e;this.data[r]=i,o&&(this.reservedBit[r]=!0)},e.prototype.get=function(t,e){return this.data[t*this.size+e]},e.prototype.xor=function(t,e,i){this.data[t*this.size+e]^=i},e.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]},t.exports=e},33846:(t,e,i)=>{"use strict";i(66727)},35016:(t,e,i)=>{"use strict";i.d(e,{C5:()=>n,Ky:()=>r,PG:()=>o});const o=/[.*+?^${}()|[\]\\]/gu,r=/[0-9,.]/u,n="https://reown.com"},35404:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),n=i(47080),a=i(39783);const s=o.AH`
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
`;var c=function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let l=class extends o.WF{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,e=36-t,i=116+e,r=245+e,n=360+1.75*e;return o.qy`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${i} ${r}"
          stroke-dashoffset=${n}
        />
      </svg>
    `}};l.styles=[n.W5,s],c([(0,r.MZ)({type:Number})],l.prototype,"radius",void 0),l=c([(0,a.E)("wui-loading-thumbnail")],l)},36858:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),n=i(23507),a=i(47080),s=i(39783);const c=o.AH`
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
`;var l=function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let u=class extends o.WF{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,o.qy`<slot class=${(0,n.H)(t)}></slot>`}};u.styles=[a.W5,c],l([(0,r.MZ)()],u.prototype,"variant",void 0),l([(0,r.MZ)()],u.prototype,"color",void 0),l([(0,r.MZ)()],u.prototype,"align",void 0),l([(0,r.MZ)()],u.prototype,"lineClamp",void 0),u=l([(0,s.E)("wui-text")],u)},38273:(t,e,i)=>{"use strict";i(46116)},39168:(t,e,i)=>{"use strict";i.d(e,{J:()=>r});var o=i(80971);const r=t=>t??o.s6},39341:(t,e,i)=>{"use strict";i.d(e,{OA:()=>o,WL:()=>n,u$:()=>r});const o={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},r=t=>(...e)=>({_$litDirective$:t,values:e});class n{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},40627:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),n=i(58301),a=i(46358),s=i(31779),c=i(39168),l=i(379),u=(i(77200),i(47080)),d=i(39783);const h=o.AH`
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
`;var g=function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let p=class extends o.WF{constructor(){super(...arguments),this.inputElementRef=(0,l._)(),this.checked=void 0}render(){return o.qy`
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
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("checkboxChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};p.styles=[u.W5,h],g([(0,r.MZ)({type:Boolean})],p.prototype,"checked",void 0),p=g([(0,d.E)("wui-checkbox")],p),i(66933);const f=o.AH`
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
`;var w=function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let v=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.checked=n.o.state.isLegalCheckboxChecked,this.unsubscribe.push(n.o.subscribeKey("isLegalCheckboxChecked",t=>{this.checked=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{termsConditionsUrl:t,privacyPolicyUrl:e}=a.H.state,i=a.H.state.features?.legalCheckbox;return(t||e)&&i?o.qy`
      <wui-checkbox
        ?checked=${this.checked}
        @checkboxChange=${this.onCheckboxChange.bind(this)}
        data-testid="wui-checkbox"
      >
        <wui-text color="fg-250" variant="small-400" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `:null}andTemplate(){const{termsConditionsUrl:t,privacyPolicyUrl:e}=a.H.state;return t&&e?"and":""}termsTemplate(){const{termsConditionsUrl:t}=a.H.state;return t?o.qy`<a rel="noreferrer" target="_blank" href=${t}>terms of service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:t}=a.H.state;return t?o.qy`<a rel="noreferrer" target="_blank" href=${t}>privacy policy</a>`:null}onCheckboxChange(){n.o.setIsLegalCheckboxChecked(!this.checked)}};v.styles=[f],w([(0,r.wk)()],v.prototype,"checked",void 0),v=w([(0,s.EM)("w3m-legal-checkbox")],v)},41630:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),n=(i(77200),i(47080)),a=i(39783);const s=o.AH`
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
`;var c=function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let l=class extends o.WF{constructor(){super(...arguments),this.logo="google"}render(){return o.qy`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};l.styles=[n.W5,s],c([(0,r.MZ)()],l.prototype,"logo",void 0),l=c([(0,a.E)("wui-logo")],l)},42188:t=>{"use strict";t.exports=function(t){for(var e=[],i=t.length,o=0;o<i;o++){var r=t.charCodeAt(o);if(r>=55296&&r<=56319&&i>o+1){var n=t.charCodeAt(o+1);n>=56320&&n<=57343&&(r=1024*(r-55296)+n-56320+65536,o+=1)}r<128?e.push(r):r<2048?(e.push(r>>6|192),e.push(63&r|128)):r<55296||r>=57344&&r<65536?(e.push(r>>12|224),e.push(r>>6&63|128),e.push(63&r|128)):r>=65536&&r<=1114111?(e.push(r>>18|240),e.push(r>>12&63|128),e.push(r>>6&63|128),e.push(63&r|128)):e.push(239,191,189)}return new Uint8Array(e).buffer}},43401:(t,e,i)=>{const o=i(82890),r=i(2501),n=i(95567),a=i(33448),s=i(43825),c=i(54392),l=i(26264),u=i(94922),d=i(32240),h=i(93887),g=i(94753),p=i(32500),f=i(94541);function w(t,e,i){const o=t.size,r=g.getEncodedBits(e,i);let n,a;for(n=0;n<15;n++)a=1==(r>>n&1),n<6?t.set(n,8,a,!0):n<8?t.set(n+1,8,a,!0):t.set(o-15+n,8,a,!0),n<8?t.set(8,o-n-1,a,!0):n<9?t.set(8,15-n-1+1,a,!0):t.set(8,15-n-1,a,!0);t.set(o-8,8,1,!0)}function v(t,e,i,r){let g;if(Array.isArray(t))g=f.fromArray(t);else{if("string"!=typeof t)throw new Error("Invalid data");{let o=e;if(!o){const e=f.rawSplit(t);o=h.getBestVersionForData(e,i)}g=f.fromString(t,o||40)}}const v=h.getBestVersionForData(g,i);if(!v)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<v)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+v+".\n")}else e=v;const b=function(t,e,i){const r=new n;i.forEach(function(e){r.put(e.mode.bit,4),r.put(e.getLength(),p.getCharCountIndicator(e.mode,t)),e.write(r)});const a=8*(o.getSymbolTotalCodewords(t)-u.getTotalCodewordsCount(t,e));for(r.getLengthInBits()+4<=a&&r.put(0,4);r.getLengthInBits()%8!=0;)r.putBit(0);const s=(a-r.getLengthInBits())/8;for(let t=0;t<s;t++)r.put(t%2?17:236,8);return function(t,e,i){const r=o.getSymbolTotalCodewords(e),n=r-u.getTotalCodewordsCount(e,i),a=u.getBlocksCount(e,i),s=a-r%a,c=Math.floor(r/a),l=Math.floor(n/a),h=l+1,g=c-l,p=new d(g);let f=0;const w=new Array(a),v=new Array(a);let b=0;const y=new Uint8Array(t.buffer);for(let t=0;t<a;t++){const e=t<s?l:h;w[t]=y.slice(f,f+e),v[t]=p.encode(w[t]),f+=e,b=Math.max(b,e)}const m=new Uint8Array(r);let x,C,k=0;for(x=0;x<b;x++)for(C=0;C<a;C++)x<w[C].length&&(m[k++]=w[C][x]);for(x=0;x<g;x++)for(C=0;C<a;C++)m[k++]=v[C][x];return m}(r,t,e)}(e,i,g),y=o.getSymbolSize(e),m=new a(y);return function(t,e){const i=t.size,o=c.getPositions(e);for(let e=0;e<o.length;e++){const r=o[e][0],n=o[e][1];for(let e=-1;e<=7;e++)if(!(r+e<=-1||i<=r+e))for(let o=-1;o<=7;o++)n+o<=-1||i<=n+o||(e>=0&&e<=6&&(0===o||6===o)||o>=0&&o<=6&&(0===e||6===e)||e>=2&&e<=4&&o>=2&&o<=4?t.set(r+e,n+o,!0,!0):t.set(r+e,n+o,!1,!0))}}(m,e),function(t){const e=t.size;for(let i=8;i<e-8;i++){const e=i%2==0;t.set(i,6,e,!0),t.set(6,i,e,!0)}}(m),function(t,e){const i=s.getPositions(e);for(let e=0;e<i.length;e++){const o=i[e][0],r=i[e][1];for(let e=-2;e<=2;e++)for(let i=-2;i<=2;i++)-2===e||2===e||-2===i||2===i||0===e&&0===i?t.set(o+e,r+i,!0,!0):t.set(o+e,r+i,!1,!0)}}(m,e),w(m,i,0),e>=7&&function(t,e){const i=t.size,o=h.getEncodedBits(e);let r,n,a;for(let e=0;e<18;e++)r=Math.floor(e/3),n=e%3+i-8-3,a=1==(o>>e&1),t.set(r,n,a,!0),t.set(n,r,a,!0)}(m,e),function(t,e){const i=t.size;let o=-1,r=i-1,n=7,a=0;for(let s=i-1;s>0;s-=2)for(6===s&&s--;;){for(let i=0;i<2;i++)if(!t.isReserved(r,s-i)){let o=!1;a<e.length&&(o=1==(e[a]>>>n&1)),t.set(r,s-i,o),n--,-1===n&&(a++,n=7)}if(r+=o,r<0||i<=r){r-=o,o=-o;break}}}(m,b),isNaN(r)&&(r=l.getBestMask(m,w.bind(null,m,i))),l.applyMask(r,m),w(m,i,r),{modules:m,version:e,errorCorrectionLevel:i,maskPattern:r,segments:g}}e.create=function(t,e){if(void 0===t||""===t)throw new Error("No input text");let i,n,a=r.M;return void 0!==e&&(a=r.from(e.errorCorrectionLevel,r.M),i=h.from(e.version),n=l.from(e.maskPattern),e.toSJISFunc&&o.setToSJISFunction(e.toSJISFunc)),v(t,i,a,n)}},43825:(t,e,i)=>{const o=i(82890).getSymbolSize;e.getRowColCoords=function(t){if(1===t)return[];const e=Math.floor(t/7)+2,i=o(t),r=145===i?26:2*Math.ceil((i-13)/(2*e-2)),n=[i-7];for(let t=1;t<e-1;t++)n[t]=n[t-1]-r;return n.push(6),n.reverse()},e.getPositions=function(t){const i=[],o=e.getRowColCoords(t),r=o.length;for(let t=0;t<r;t++)for(let e=0;e<r;e++)0===t&&0===e||0===t&&e===r-1||t===r-1&&0===e||i.push([o[t],o[e]]);return i}},45666:(t,e,i)=>{const o=i(42188),r=i(32500);function n(t){this.mode=r.BYTE,"string"==typeof t&&(t=o(t)),this.data=new Uint8Array(t)}n.getBitsLength=function(t){return 8*t},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(t){for(let e=0,i=this.data.length;e<i;e++)t.put(this.data[e],8)},t.exports=n},46116:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),n=i(47080),a=i(86515),s=i(39783);const c=o.AH`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var l=function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let u=class extends o.WF{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&a.Z.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&a.Z.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&a.Z.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&a.Z.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&a.Z.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&a.Z.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&a.Z.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&a.Z.getSpacingStyles(this.margin,3)};\n    `,o.qy`<slot></slot>`}};u.styles=[n.W5,c],l([(0,r.MZ)()],u.prototype,"flexDirection",void 0),l([(0,r.MZ)()],u.prototype,"flexWrap",void 0),l([(0,r.MZ)()],u.prototype,"flexBasis",void 0),l([(0,r.MZ)()],u.prototype,"flexGrow",void 0),l([(0,r.MZ)()],u.prototype,"flexShrink",void 0),l([(0,r.MZ)()],u.prototype,"alignItems",void 0),l([(0,r.MZ)()],u.prototype,"justifyContent",void 0),l([(0,r.MZ)()],u.prototype,"columnGap",void 0),l([(0,r.MZ)()],u.prototype,"rowGap",void 0),l([(0,r.MZ)()],u.prototype,"gap",void 0),l([(0,r.MZ)()],u.prototype,"padding",void 0),l([(0,r.MZ)()],u.prototype,"margin",void 0),u=l([(0,s.E)("wui-flex")],u)},50279:(t,e,i)=>{"use strict";i(50468)},50468:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),n=i(39783);const a=o.AH`
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
`;var s=function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let c=class extends o.WF{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);\n    `,o.qy`<slot></slot>`}};c.styles=[a],s([(0,r.MZ)()],c.prototype,"width",void 0),s([(0,r.MZ)()],c.prototype,"height",void 0),s([(0,r.MZ)()],c.prototype,"borderRadius",void 0),s([(0,r.MZ)()],c.prototype,"variant",void 0),c=s([(0,n.E)("wui-shimmer")],c)},50599:(t,e,i)=>{"use strict";i.r(e),i.d(e,{W3mConnectSocialsView:()=>x,W3mConnectingFarcasterView:()=>U,W3mConnectingSocialView:()=>B});var o=i(48422),r=i(91427),n=i(39168),a=i(58301),s=i(46358),c=i(31779),l=(i(38273),i(40627),i(20304),i(99539)),u=i(79063),d=i(53141),h=i(10298),g=i(51128),p=i(65885),f=(i(3521),i(71086));const w=o.AH`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var v=function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let b=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=l.a.state.connectors,this.authConnector=this.connectors.find(t=>"AUTH"===t.type),this.remoteFeatures=s.H.state.remoteFeatures,this.isPwaLoading=!1,this.unsubscribe.push(l.a.subscribeKey("connectors",t=>{this.connectors=t,this.authConnector=this.connectors.find(t=>"AUTH"===t.type)}),s.H.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){let t=this.remoteFeatures?.socials||[];const e=Boolean(this.authConnector),i=t?.length,r="ConnectSocials"===u.I.state.view;return e&&i||r?(r&&!i&&(t=d.oU.DEFAULT_SOCIALS),o.qy` <wui-flex flexDirection="column" gap="xs">
      ${t.map(t=>o.qy`<wui-list-social
            @click=${()=>{this.onSocialClick(t)}}
            data-testid=${`social-selector-${t}`}
            name=${t}
            logo=${t}
            ?disabled=${this.isPwaLoading}
          ></wui-list-social>`)}
    </wui-flex>`):null}async onSocialClick(t){t&&await(0,g.Up)(t)}async handlePwaFrameLoad(){if(p.w.isPWA()){this.isPwaLoading=!0;try{this.authConnector?.provider instanceof f.Y&&await this.authConnector.provider.init()}catch(t){h.h.open({displayMessage:"Error loading embedded wallet in PWA",debugMessage:t.message},"error")}finally{this.isPwaLoading=!1}}}};b.styles=w,v([(0,r.MZ)()],b.prototype,"tabIdx",void 0),v([(0,r.wk)()],b.prototype,"connectors",void 0),v([(0,r.wk)()],b.prototype,"authConnector",void 0),v([(0,r.wk)()],b.prototype,"remoteFeatures",void 0),v([(0,r.wk)()],b.prototype,"isPwaLoading",void 0),b=v([(0,c.EM)("w3m-social-login-list")],b);const y=o.AH`
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
`;var m=function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let x=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.checked=a.o.state.isLegalCheckboxChecked,this.unsubscribe.push(a.o.subscribeKey("isLegalCheckboxChecked",t=>{this.checked=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{termsConditionsUrl:t,privacyPolicyUrl:e}=s.H.state,i=s.H.state.features?.legalCheckbox,r=Boolean(t||e)&&Boolean(i),a=r&&!this.checked,c=a?-1:void 0;return o.qy`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${r?["0","s","s","s"]:"s"}
        gap="xs"
        class=${(0,n.J)(a?"disabled":void 0)}
      >
        <w3m-social-login-list tabIdx=${(0,n.J)(c)}></w3m-social-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}};x.styles=y,m([(0,r.wk)()],x.prototype,"checked",void 0),x=m([(0,c.EM)("w3m-connect-socials-view")],x);var C=i(1759),k=i(68690),$=i(65149),E=i(58711),S=i(61401),P=i(23774),R=i(32757),A=i(77433),M=(i(23411),i(35404),i(41630),i(66933),i(30824)),T=i(42526);const I=o.AH`
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
`;var z=function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let B=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.socialProvider=C.U.state.socialProvider,this.socialWindow=C.U.state.socialWindow,this.error=!1,this.connecting=!1,this.message="Connect in the provider window",this.remoteFeatures=s.H.state.remoteFeatures,this.address=C.U.state.address,this.connectionsByNamespace=k.x.getConnections($.W.state.activeChain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.authConnector=l.a.getAuthConnector(),this.handleSocialConnection=async t=>{if(t.data?.resultUri)if(t.origin===T.o.SECURE_SITE_ORIGIN){window.removeEventListener("message",this.handleSocialConnection,!1);try{if(this.authConnector&&!this.connecting){this.socialWindow&&(this.socialWindow.close(),C.U.setSocialWindow(void 0,$.W.state.activeChain)),this.connecting=!0,this.updateMessage();const e=t.data.resultUri;this.socialProvider&&E.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}}),await k.x.connectExternal({id:this.authConnector.id,type:this.authConnector.type,socialUri:e},this.authConnector.chain),this.socialProvider&&(S.i.setConnectedSocialProvider(this.socialProvider),E.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider,caipNetworkId:$.W.getActiveCaipNetwork()?.caipNetworkId}}))}}catch(t){this.error=!0,this.updateMessage(),this.socialProvider&&E.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})}}else u.I.goBack(),P.P.showError("Untrusted Origin"),this.socialProvider&&E.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})},M.R.EmbeddedWalletAbortController.signal.addEventListener("abort",()=>{this.socialWindow&&(this.socialWindow.close(),C.U.setSocialWindow(void 0,$.W.state.activeChain))}),this.unsubscribe.push(C.U.subscribe(t=>{t.socialProvider&&(this.socialProvider=t.socialProvider),t.socialWindow&&(this.socialWindow=t.socialWindow)}),s.H.subscribeKey("remoteFeatures",t=>{this.remoteFeatures=t}),C.U.subscribeKey("address",t=>{const e=this.remoteFeatures?.multiWallet;t&&t!==this.address&&(this.hasMultipleConnections&&e?(u.I.replace("ProfileWallets"),P.P.showSuccess("New Wallet Added")):(R.W.state.open||s.H.state.enableEmbedded)&&R.W.close())})),this.authConnector&&this.connectSocial()}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),window.removeEventListener("message",this.handleSocialConnection,!1),this.socialWindow?.close(),C.U.setSocialWindow(void 0,$.W.state.activeChain)}render(){return o.qy`
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
    `}loaderTemplate(){const t=A.W.state.themeVariables["--w3m-border-radius-master"],e=t?parseInt(t.replace("px",""),10):4;return o.qy`<wui-loading-thumbnail radius=${9*e}></wui-loading-thumbnail>`}connectSocial(){const t=setInterval(()=>{this.socialWindow?.closed&&(this.connecting||"ConnectingSocial"!==u.I.state.view||(this.socialProvider&&E.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_CANCELED",properties:{provider:this.socialProvider}}),u.I.goBack()),clearInterval(t))},1e3);window.addEventListener("message",this.handleSocialConnection,!1)}updateMessage(){this.error?this.message="Something went wrong":this.connecting?this.message="Retrieving user data":this.message="Connect in the provider window"}};B.styles=I,z([(0,r.wk)()],B.prototype,"socialProvider",void 0),z([(0,r.wk)()],B.prototype,"socialWindow",void 0),z([(0,r.wk)()],B.prototype,"error",void 0),z([(0,r.wk)()],B.prototype,"connecting",void 0),z([(0,r.wk)()],B.prototype,"message",void 0),z([(0,r.wk)()],B.prototype,"remoteFeatures",void 0),B=z([(0,c.EM)("w3m-connecting-social-view")],B),i(33846),i(90315),i(24668),i(83036),i(50279);const L=o.AH`
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
`;var O=function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let U=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.socialProvider=C.U.state.socialProvider,this.uri=C.U.state.farcasterUrl,this.ready=!1,this.loading=!1,this.remoteFeatures=s.H.state.remoteFeatures,this.authConnector=l.a.getAuthConnector(),this.forceUpdate=()=>{this.requestUpdate()},this.unsubscribe.push(C.U.subscribeKey("farcasterUrl",t=>{t&&(this.uri=t,this.connectFarcaster())}),C.U.subscribeKey("socialProvider",t=>{t&&(this.socialProvider=t)}),s.H.subscribeKey("remoteFeatures",t=>{this.remoteFeatures=t})),window.addEventListener("resize",this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timeout),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),o.qy`${this.platformTemplate()}`}platformTemplate(){return p.w.isMobile()?o.qy`${this.mobileTemplate()}`:o.qy`${this.desktopTemplate()}`}desktopTemplate(){return this.loading?o.qy`${this.loadingTemplate()}`:o.qy`${this.qrTemplate()}`}qrTemplate(){return o.qy` <wui-flex
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
    </wui-flex>`}loadingTemplate(){return o.qy`
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
    `}mobileTemplate(){return o.qy` <wui-flex
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
    </wui-flex>`}loaderTemplate(){const t=A.W.state.themeVariables["--w3m-border-radius-master"],e=t?parseInt(t.replace("px",""),10):4;return o.qy`<wui-loading-thumbnail radius=${9*e}></wui-loading-thumbnail>`}async connectFarcaster(){if(this.authConnector)try{await(this.authConnector?.provider.connectFarcaster()),this.socialProvider&&(S.i.setConnectedSocialProvider(this.socialProvider),E.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}})),this.loading=!0;const t=k.x.getConnections(this.authConnector.chain).length>0;await k.x.connectExternal(this.authConnector,this.authConnector.chain);const e=this.remoteFeatures?.multiWallet;this.socialProvider&&E.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider,caipNetworkId:$.W.getActiveCaipNetwork()?.caipNetworkId}}),this.loading=!1,t&&e?(u.I.replace("ProfileWallets"),P.P.showSuccess("New Wallet Added")):R.W.close()}catch(t){this.socialProvider&&E.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}}),u.I.goBack(),P.P.showError(t)}}mobileLinkTemplate(){return o.qy`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri||this.loading}
      @click=${()=>{this.uri&&p.w.openHref(this.uri,"_blank")}}
    >
      Open farcaster</wui-button
    >`}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const t=this.getBoundingClientRect().width-40;return o.qy` <wui-qr-code
      size=${t}
      theme=${A.W.state.themeMode}
      uri=${this.uri}
      ?farcaster=${!0}
      data-testid="wui-qr-code"
      color=${(0,n.J)(A.W.state.themeVariables["--w3m-qr-color"])}
    ></wui-qr-code>`}copyTemplate(){const t=!this.uri||!this.ready;return o.qy`<wui-link
      .disabled=${t}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}onCopyUri(){try{this.uri&&(p.w.copyToClopboard(this.uri),P.P.showSuccess("Link copied"))}catch{P.P.showError("Failed to copy")}}};U.styles=L,O([(0,r.wk)()],U.prototype,"socialProvider",void 0),O([(0,r.wk)()],U.prototype,"uri",void 0),O([(0,r.wk)()],U.prototype,"ready",void 0),O([(0,r.wk)()],U.prototype,"loading",void 0),O([(0,r.wk)()],U.prototype,"remoteFeatures",void 0),U=O([(0,c.EM)("w3m-connecting-farcaster-view")],U)},51128:(t,e,i)=>{"use strict";i.d(e,{Up:()=>h});var o=i(33255),r=i(1759),n=i(65149),a=i(99539),s=i(58711),c=i(79063),l=i(23774),u=i(65885),d=i(61401);async function h(t){r.U.setSocialProvider(t,n.W.state.activeChain),s.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:t}}),"farcaster"===t?await async function(){c.I.push("ConnectingFarcaster");const t=a.a.getAuthConnector();if(t&&!r.U.state.farcasterUrl)try{const{url:e}=await t.provider.getFarcasterUri();r.U.setFarcasterUrl(e,n.W.state.activeChain)}catch(t){c.I.goBack(),l.P.showError(t)}}():await async function(t){c.I.push("ConnectingSocial");const e=a.a.getAuthConnector();let i=null;try{const a=setTimeout(()=>{throw new Error("Social login timed out. Please try again.")},45e3);if(e&&t){if(u.w.isTelegram()||(i=function(){try{return u.w.returnOpenHref(`${o.o.SECURE_SITE_SDK_ORIGIN}/loading`,"popupWindow","width=600,height=800,scrollbars=yes")}catch(t){throw new Error("Could not open social popup")}}()),i)r.U.setSocialWindow(i,n.W.state.activeChain);else if(!u.w.isTelegram())throw new Error("Could not create social popup");const{uri:s}=await e.provider.getSocialRedirectUri({provider:t});if(!s)throw i?.close(),new Error("Could not fetch the social redirect uri");if(i&&(i.location.href=s),u.w.isTelegram()){d.i.setTelegramSocialProvider(t);const e=u.w.formatTelegramSocialLoginUrl(s);u.w.openHref(e,"_top")}clearTimeout(a)}}catch(t){i?.close(),l.P.showError(t?.message)}}(t)}},54392:(t,e,i)=>{const o=i(82890).getSymbolSize;e.getPositions=function(t){const e=o(t);return[[0,0],[e-7,0],[0,e-7]]}},58301:(t,e,i)=>{"use strict";i.d(e,{o:()=>a});var o=i(66586),r=i(83548);const n=(0,o.BX)({isLegalCheckboxChecked:!1}),a={state:n,subscribe:t=>(0,o.B1)(n,()=>t(n)),subscribeKey:(t,e)=>(0,r.u$)(n,t,e),setIsLegalCheckboxChecked(t){n.isLegalCheckboxChecked=t}}},59909:(t,e,i)=>{const o=i(32500),r=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function n(t){this.mode=o.ALPHANUMERIC,this.data=t}n.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let i=45*r.indexOf(this.data[e]);i+=r.indexOf(this.data[e+1]),t.put(i,11)}this.data.length%2&&t.put(r.indexOf(this.data[e]),6)},t.exports=n},60097:(t,e,i)=>{const o=i(32500);function r(t){this.mode=o.NUMERIC,this.data=t.toString()}r.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(t){let e,i,o;for(e=0;e+3<=this.data.length;e+=3)i=this.data.substr(e,3),o=parseInt(i,10),t.put(o,10);const r=this.data.length-e;r>0&&(i=this.data.substr(e),o=parseInt(i,10),t.put(o,3*r+1))},t.exports=r},64720:(t,e,i)=>{"use strict";i.d(e,{Kq:()=>d});var o=i(27165),r=i(39341);const n=(t,e)=>{const i=t._$AN;if(void 0===i)return!1;for(const t of i)t._$AO?.(e,!1),n(t,e);return!0},a=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===i?.size)},s=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),u(e)}};function c(t){void 0!==this._$AN?(a(this),this._$AM=t,s(this)):this._$AM=t}function l(t,e=!1,i=0){const o=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(e)if(Array.isArray(o))for(let t=i;t<o.length;t++)n(o[t],!1),a(o[t]);else null!=o&&(n(o,!1),a(o));else n(this,t)}const u=t=>{t.type==r.OA.CHILD&&(t._$AP??=l,t._$AQ??=c)};class d extends r.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),s(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(n(this,t),a(this))}setValue(t){if((0,o.Rt)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}},66727:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),n=(i(18901),i(36858),i(47080)),a=i(39783);const s=o.AH`
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
`;var c=function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};const l={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},u={lg:"paragraph-600",md:"small-600",sm:"small-600",xs:"tiny-600"},d={lg:"md",md:"md",sm:"sm",xs:"sm"};let h=class extends o.WF{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`\n    --local-width: ${this.fullWidth?"100%":"auto"};\n    --local-opacity-100: ${this.loading?0:1};\n    --local-opacity-000: ${this.loading?1:0};\n    --local-border-radius: var(--wui-border-radius-${this.borderRadius});\n    `;const t=this.textVariant??u[this.size];return o.qy`
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
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const t=d[this.size],e=this.disabled?l.disabled:l[this.variant];return o.qy`<wui-loading-spinner color=${e} size=${t}></wui-loading-spinner>`}return o.qy``}};h.styles=[n.W5,n.fD,s],c([(0,r.MZ)()],h.prototype,"size",void 0),c([(0,r.MZ)({type:Boolean})],h.prototype,"disabled",void 0),c([(0,r.MZ)({type:Boolean})],h.prototype,"fullWidth",void 0),c([(0,r.MZ)({type:Boolean})],h.prototype,"loading",void 0),c([(0,r.MZ)()],h.prototype,"variant",void 0),c([(0,r.MZ)({type:Boolean})],h.prototype,"hasIconLeft",void 0),c([(0,r.MZ)({type:Boolean})],h.prototype,"hasIconRight",void 0),c([(0,r.MZ)()],h.prototype,"borderRadius",void 0),c([(0,r.MZ)()],h.prototype,"textVariant",void 0),h=c([(0,a.E)("wui-button")],h)},66933:(t,e,i)=>{"use strict";i(36858)},69623:(t,e,i)=>{"use strict";i.d(e,{M:()=>a});var o=i(56451);const r={attribute:!0,type:String,converter:o.W3,reflect:!1,hasChanged:o.Ec},n=(t=r,e,i)=>{const{kind:o,metadata:n}=i;let a=globalThis.litPropertyMetadata.get(n);if(void 0===a&&globalThis.litPropertyMetadata.set(n,a=new Map),"setter"===o&&((t=Object.create(t)).wrapped=!0),a.set(i.name,t),"accessor"===o){const{name:o}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,r,t)},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===o){const{name:o}=i;return function(i){const r=this[o];e.call(this,i),this.requestUpdate(o,r,t)}}throw Error("Unsupported decorator location: "+o)};function a(t){return(e,i)=>"object"==typeof i?n(t,e,i):((t,e,i)=>{const o=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}},73743:(t,e)=>{const i=new Uint8Array(512),o=new Uint8Array(256);!function(){let t=1;for(let e=0;e<255;e++)i[e]=t,o[t]=e,t<<=1,256&t&&(t^=285);for(let t=255;t<512;t++)i[t]=i[t-255]}(),e.log=function(t){if(t<1)throw new Error("log("+t+")");return o[t]},e.exp=function(t){return i[t]},e.mul=function(t,e){return 0===t||0===e?0:i[o[t]+o[e]]}},76199:(t,e,i)=>{const o=i(9074);e.render=function(t,e,i){let r=i,n=e;void 0!==r||e&&e.getContext||(r=e,e=void 0),e||(n=function(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}()),r=o.getOptions(r);const a=o.getImageWidth(t.modules.size,r),s=n.getContext("2d"),c=s.createImageData(a,a);return o.qrToImageData(c.data,t,r),function(t,e,i){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=i,e.width=i,e.style.height=i+"px",e.style.width=i+"px"}(s,n,a),s.putImageData(c,0,0),n},e.renderToDataURL=function(t,i,o){let r=o;void 0!==r||i&&i.getContext||(r=i,i=void 0),r||(r={});const n=e.render(t,i,r),a=r.type||"image/png",s=r.rendererOpts||{};return n.toDataURL(a,s.quality)}},77200:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),n=i(32971);const a=new class{constructor(){this.cache=new Map}set(t,e){this.cache.set(t,e)}get(t){return this.cache.get(t)}has(t){return this.cache.has(t)}delete(t){this.cache.delete(t)}clear(){this.cache.clear()}};var s=i(47080),c=i(39783);const l=o.AH`
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
`;var u=function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};const d={add:async()=>(await i.e(5619).then(i.bind(i,95619))).addSvg,allWallets:async()=>(await i.e(9452).then(i.bind(i,99452))).allWalletsSvg,arrowBottomCircle:async()=>(await i.e(5374).then(i.bind(i,45374))).arrowBottomCircleSvg,appStore:async()=>(await i.e(3019).then(i.bind(i,33019))).appStoreSvg,apple:async()=>(await i.e(8852).then(i.bind(i,58852))).appleSvg,arrowBottom:async()=>(await i.e(3097).then(i.bind(i,33097))).arrowBottomSvg,arrowLeft:async()=>(await i.e(9275).then(i.bind(i,89275))).arrowLeftSvg,arrowRight:async()=>(await i.e(1282).then(i.bind(i,61282))).arrowRightSvg,arrowTop:async()=>(await i.e(1967).then(i.bind(i,31967))).arrowTopSvg,bank:async()=>(await i.e(2236).then(i.bind(i,72236))).bankSvg,browser:async()=>(await i.e(6524).then(i.bind(i,76524))).browserSvg,bin:async()=>(await i.e(4249).then(i.bind(i,64249))).binSvg,bitcoin:async()=>(await i.e(4286).then(i.bind(i,94286))).bitcoinSvg,card:async()=>(await i.e(3524).then(i.bind(i,93524))).cardSvg,checkmark:async()=>(await i.e(525).then(i.bind(i,90525))).checkmarkSvg,checkmarkBold:async()=>(await i.e(8905).then(i.bind(i,48905))).checkmarkBoldSvg,chevronBottom:async()=>(await i.e(4231).then(i.bind(i,44231))).chevronBottomSvg,chevronLeft:async()=>(await i.e(5329).then(i.bind(i,65329))).chevronLeftSvg,chevronRight:async()=>(await i.e(1176).then(i.bind(i,61176))).chevronRightSvg,chevronTop:async()=>(await i.e(3745).then(i.bind(i,3745))).chevronTopSvg,chromeStore:async()=>(await i.e(9208).then(i.bind(i,59208))).chromeStoreSvg,clock:async()=>(await i.e(614).then(i.bind(i,20614))).clockSvg,close:async()=>(await i.e(3176).then(i.bind(i,3176))).closeSvg,compass:async()=>(await i.e(4484).then(i.bind(i,94484))).compassSvg,coinPlaceholder:async()=>(await i.e(410).then(i.bind(i,20410))).coinPlaceholderSvg,copy:async()=>(await i.e(355).then(i.bind(i,70355))).copySvg,cursor:async()=>(await i.e(988).then(i.bind(i,40988))).cursorSvg,cursorTransparent:async()=>(await i.e(4855).then(i.bind(i,84855))).cursorTransparentSvg,circle:async()=>(await i.e(8178).then(i.bind(i,78178))).circleSvg,desktop:async()=>(await i.e(4208).then(i.bind(i,54208))).desktopSvg,disconnect:async()=>(await i.e(9728).then(i.bind(i,99728))).disconnectSvg,discord:async()=>(await i.e(4172).then(i.bind(i,64172))).discordSvg,ethereum:async()=>(await i.e(6351).then(i.bind(i,96351))).ethereumSvg,etherscan:async()=>(await i.e(1461).then(i.bind(i,81461))).etherscanSvg,extension:async()=>(await i.e(7381).then(i.bind(i,67381))).extensionSvg,externalLink:async()=>(await i.e(7274).then(i.bind(i,47274))).externalLinkSvg,facebook:async()=>(await i.e(4698).then(i.bind(i,4698))).facebookSvg,farcaster:async()=>(await i.e(5505).then(i.bind(i,5505))).farcasterSvg,filters:async()=>(await i.e(8075).then(i.bind(i,48075))).filtersSvg,github:async()=>(await i.e(8573).then(i.bind(i,48573))).githubSvg,google:async()=>(await i.e(9521).then(i.bind(i,39521))).googleSvg,helpCircle:async()=>(await i.e(7842).then(i.bind(i,97842))).helpCircleSvg,image:async()=>(await i.e(4541).then(i.bind(i,64541))).imageSvg,id:async()=>(await i.e(8743).then(i.bind(i,18743))).idSvg,infoCircle:async()=>(await i.e(2907).then(i.bind(i,42907))).infoCircleSvg,lightbulb:async()=>(await i.e(7547).then(i.bind(i,57547))).lightbulbSvg,mail:async()=>(await i.e(3721).then(i.bind(i,3721))).mailSvg,mobile:async()=>(await i.e(2756).then(i.bind(i,42756))).mobileSvg,more:async()=>(await i.e(8023).then(i.bind(i,28023))).moreSvg,networkPlaceholder:async()=>(await i.e(2134).then(i.bind(i,72134))).networkPlaceholderSvg,nftPlaceholder:async()=>(await i.e(8679).then(i.bind(i,38679))).nftPlaceholderSvg,off:async()=>(await i.e(413).then(i.bind(i,10413))).offSvg,playStore:async()=>(await i.e(376).then(i.bind(i,80376))).playStoreSvg,plus:async()=>(await i.e(7142).then(i.bind(i,87142))).plusSvg,qrCode:async()=>(await i.e(4195).then(i.bind(i,44195))).qrCodeIcon,recycleHorizontal:async()=>(await i.e(8942).then(i.bind(i,28942))).recycleHorizontalSvg,refresh:async()=>(await i.e(8795).then(i.bind(i,88795))).refreshSvg,search:async()=>(await i.e(6202).then(i.bind(i,6202))).searchSvg,send:async()=>(await i.e(196).then(i.bind(i,60196))).sendSvg,swapHorizontal:async()=>(await i.e(1429).then(i.bind(i,31429))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await i.e(5634).then(i.bind(i,15634))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await i.e(638).then(i.bind(i,20638))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await i.e(1259).then(i.bind(i,91259))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await i.e(2051).then(i.bind(i,82051))).swapVerticalSvg,solana:async()=>(await i.e(2178).then(i.bind(i,12178))).solanaSvg,telegram:async()=>(await i.e(7137).then(i.bind(i,57137))).telegramSvg,threeDots:async()=>(await i.e(8617).then(i.bind(i,38617))).threeDotsSvg,twitch:async()=>(await i.e(9605).then(i.bind(i,59605))).twitchSvg,twitter:async()=>(await i.e(7420).then(i.bind(i,57420))).xSvg,twitterIcon:async()=>(await i.e(5622).then(i.bind(i,5622))).twitterIconSvg,user:async()=>(await i.e(9653).then(i.bind(i,29653))).userSvg,verify:async()=>(await i.e(6963).then(i.bind(i,86963))).verifySvg,verifyFilled:async()=>(await i.e(4368).then(i.bind(i,94368))).verifyFilledSvg,wallet:async()=>(await i.e(8235).then(i.bind(i,88235))).walletSvg,walletConnect:async()=>(await i.e(3565).then(i.bind(i,33565))).walletConnectSvg,walletConnectLightBrown:async()=>(await i.e(3565).then(i.bind(i,33565))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await i.e(3565).then(i.bind(i,33565))).walletConnectBrownSvg,walletPlaceholder:async()=>(await i.e(8447).then(i.bind(i,78447))).walletPlaceholderSvg,warningCircle:async()=>(await i.e(7873).then(i.bind(i,37873))).warningCircleSvg,x:async()=>(await i.e(7420).then(i.bind(i,57420))).xSvg,info:async()=>(await i.e(4734).then(i.bind(i,54734))).infoSvg,exclamationTriangle:async()=>(await i.e(7106).then(i.bind(i,7106))).exclamationTriangleSvg,reown:async()=>(await i.e(7391).then(i.bind(i,97391))).reownSvg,"x-mark":async()=>(await i.e(8940).then(i.bind(i,68940))).xMarkSvg};let h=class extends o.WF{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n      --local-aspect-ratio: ${this.aspectRatio}\n    `,o.qy`${(0,n.T)(async function(t){if(a.has(t))return a.get(t);const e=(d[t]??d.copy)();return a.set(t,e),e}(this.name),o.qy`<div class="fallback"></div>`)}`}};h.styles=[s.W5,s.ck,l],u([(0,r.MZ)()],h.prototype,"size",void 0),u([(0,r.MZ)()],h.prototype,"name",void 0),u([(0,r.MZ)()],h.prototype,"color",void 0),u([(0,r.MZ)()],h.prototype,"aspectRatio",void 0),h=u([(0,c.E)("wui-icon")],h)},82890:(t,e)=>{let i;const o=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},e.getSymbolTotalCodewords=function(t){return o[t]},e.getBCHDigit=function(t){let e=0;for(;0!==t;)e++,t>>>=1;return e},e.setToSJISFunction=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');i=t},e.isKanjiModeEnabled=function(){return void 0!==i},e.toSJIS=function(t){return i(t)}},83036:(t,e,i)=>{"use strict";var o=i(48422),r=i(91427),n=(i(77200),i(17262),i(94083));function a(t,e,i){return t!==e&&(t-e<0?e-t:t-e)<=i+.1}const s={generate({uri:t,size:e,logoSize:i,dotColor:r="#141414"}){const s=[],c=function(t){const e=Array.prototype.slice.call(n.create(t,{errorCorrectionLevel:"Q"}).modules.data,0),i=Math.sqrt(e.length);return e.reduce((t,e,o)=>(o%i===0?t.push([e]):t[t.length-1].push(e))&&t,[])}(t),l=e/c.length,u=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];u.forEach(({x:t,y:e})=>{const i=(c.length-7)*l*t,n=(c.length-7)*l*e,a=.45;for(let t=0;t<u.length;t+=1){const e=l*(7-2*t);s.push(o.JW`
            <rect
              fill=${2===t?r:"transparent"}
              width=${0===t?e-5:e}
              rx= ${0===t?(e-5)*a:e*a}
              ry= ${0===t?(e-5)*a:e*a}
              stroke=${r}
              stroke-width=${0===t?5:0}
              height=${0===t?e-5:e}
              x= ${0===t?n+l*t+2.5:n+l*t}
              y= ${0===t?i+l*t+2.5:i+l*t}
            />
          `)}});const d=Math.floor((i+25)/l),h=c.length/2-d/2,g=c.length/2+d/2-1,p=[];c.forEach((t,e)=>{t.forEach((t,i)=>{if(c[e][i]&&!(e<7&&i<7||e>c.length-8&&i<7||e<7&&i>c.length-8||e>h&&e<g&&i>h&&i<g)){const t=e*l+l/2,o=i*l+l/2;p.push([t,o])}})});const f={};return p.forEach(([t,e])=>{f[t]?f[t]?.push(e):f[t]=[e]}),Object.entries(f).map(([t,e])=>{const i=e.filter(t=>e.every(e=>!a(t,e,l)));return[Number(t),i]}).forEach(([t,e])=>{e.forEach(e=>{s.push(o.JW`<circle cx=${t} cy=${e} fill=${r} r=${l/2.5} />`)})}),Object.entries(f).filter(([t,e])=>e.length>1).map(([t,e])=>{const i=e.filter(t=>e.some(e=>a(t,e,l)));return[Number(t),i]}).map(([t,e])=>{e.sort((t,e)=>t<e?-1:1);const i=[];for(const t of e){const e=i.find(e=>e.some(e=>a(t,e,l)));e?e.push(t):i.push([t])}return[t,i.map(t=>[t[0],t[t.length-1]])]}).forEach(([t,e])=>{e.forEach(([e,i])=>{s.push(o.JW`
              <line
                x1=${t}
                x2=${t}
                y1=${e}
                y2=${i}
                stroke=${r}
                stroke-width=${l/1.25}
                stroke-linecap="round"
              />
            `)})}),s}};var c=i(47080),l=i(39783);const u=o.AH`
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
`;var d=function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let h=class extends o.WF{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`\n     --local-size: ${this.size}px;\n     --local-icon-color: ${this.color??"#3396ff"}\n    `,o.qy`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const t="light"===this.theme?this.size:this.size-32;return o.JW`
      <svg height=${t} width=${t}>
        ${s.generate({uri:this.uri,size:t,logoSize:this.arenaClear?0:t/4,dotColor:this.color})}
      </svg>
    `}templateVisual(){return this.imageSrc?o.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?o.qy`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:o.qy`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};h.styles=[c.W5,u],d([(0,r.MZ)()],h.prototype,"uri",void 0),d([(0,r.MZ)({type:Number})],h.prototype,"size",void 0),d([(0,r.MZ)()],h.prototype,"theme",void 0),d([(0,r.MZ)()],h.prototype,"imageSrc",void 0),d([(0,r.MZ)()],h.prototype,"alt",void 0),d([(0,r.MZ)()],h.prototype,"color",void 0),d([(0,r.MZ)({type:Boolean})],h.prototype,"arenaClear",void 0),d([(0,r.MZ)({type:Boolean})],h.prototype,"farcaster",void 0),h=d([(0,l.E)("wui-qr-code")],h)},88766:(t,e,i)=>{"use strict";var o=i(48422),r=(i(77200),i(36858),i(46116),i(35016)),n=i(47080),a=i(39783);const s=o.AH`
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
`;let c=class extends o.WF{render(){return o.qy`
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
    `}};c.styles=[n.W5,n.fD,s],c=function(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a}([(0,a.E)("wui-ux-by-reown")],c)},90315:(t,e,i)=>{"use strict";i(77200)},90681:t=>{t.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},91427:(t,e,i)=>{"use strict";i.d(e,{MZ:()=>o.M,wk:()=>r.w});var o=i(69623),r=i(4537)},93887:(t,e,i)=>{const o=i(82890),r=i(94922),n=i(2501),a=i(32500),s=i(95586),c=o.getBCHDigit(7973);function l(t,e){return a.getCharCountIndicator(t,e)+4}function u(t,e){let i=0;return t.forEach(function(t){const o=l(t.mode,e);i+=o+t.getBitsLength()}),i}e.from=function(t,e){return s.isValid(t)?parseInt(t,10):e},e.getCapacity=function(t,e,i){if(!s.isValid(t))throw new Error("Invalid QR Code version");void 0===i&&(i=a.BYTE);const n=8*(o.getSymbolTotalCodewords(t)-r.getTotalCodewordsCount(t,e));if(i===a.MIXED)return n;const c=n-l(i,t);switch(i){case a.NUMERIC:return Math.floor(c/10*3);case a.ALPHANUMERIC:return Math.floor(c/11*2);case a.KANJI:return Math.floor(c/13);case a.BYTE:default:return Math.floor(c/8)}},e.getBestVersionForData=function(t,i){let o;const r=n.from(i,n.M);if(Array.isArray(t)){if(t.length>1)return function(t,i){for(let o=1;o<=40;o++)if(u(t,o)<=e.getCapacity(o,i,a.MIXED))return o}(t,r);if(0===t.length)return 1;o=t[0]}else o=t;return function(t,i,o){for(let r=1;r<=40;r++)if(i<=e.getCapacity(r,o,t))return r}(o.mode,o.getLength(),r)},e.getEncodedBits=function(t){if(!s.isValid(t)||t<7)throw new Error("Invalid QR Code version");let e=t<<12;for(;o.getBCHDigit(e)-c>=0;)e^=7973<<o.getBCHDigit(e)-c;return t<<12|e}},94083:(t,e,i)=>{const o=i(90681),r=i(43401),n=i(76199),a=i(3824);function s(t,e,i,n,a){const s=[].slice.call(arguments,1),c=s.length,l="function"==typeof s[c-1];if(!l&&!o())throw new Error("Callback required as last argument");if(!l){if(c<1)throw new Error("Too few arguments provided");return 1===c?(i=e,e=n=void 0):2!==c||e.getContext||(n=i,i=e,e=void 0),new Promise(function(o,a){try{const a=r.create(i,n);o(t(a,e,n))}catch(t){a(t)}})}if(c<2)throw new Error("Too few arguments provided");2===c?(a=i,i=e,e=n=void 0):3===c&&(e.getContext&&void 0===a?(a=n,n=void 0):(a=n,n=i,i=e,e=void 0));try{const o=r.create(i,n);a(null,t(o,e,n))}catch(t){a(t)}}e.create=r.create,e.toCanvas=s.bind(null,n.render),e.toDataURL=s.bind(null,n.renderToDataURL),e.toString=s.bind(null,function(t,e,i){return a.render(t,i)})},94541:(t,e,i)=>{const o=i(32500),r=i(60097),n=i(59909),a=i(45666),s=i(10593),c=i(13992),l=i(82890),u=i(94904);function d(t){return unescape(encodeURIComponent(t)).length}function h(t,e,i){const o=[];let r;for(;null!==(r=t.exec(i));)o.push({data:r[0],index:r.index,mode:e,length:r[0].length});return o}function g(t){const e=h(c.NUMERIC,o.NUMERIC,t),i=h(c.ALPHANUMERIC,o.ALPHANUMERIC,t);let r,n;return l.isKanjiModeEnabled()?(r=h(c.BYTE,o.BYTE,t),n=h(c.KANJI,o.KANJI,t)):(r=h(c.BYTE_KANJI,o.BYTE,t),n=[]),e.concat(i,r,n).sort(function(t,e){return t.index-e.index}).map(function(t){return{data:t.data,mode:t.mode,length:t.length}})}function p(t,e){switch(e){case o.NUMERIC:return r.getBitsLength(t);case o.ALPHANUMERIC:return n.getBitsLength(t);case o.KANJI:return s.getBitsLength(t);case o.BYTE:return a.getBitsLength(t)}}function f(t,e){let i;const c=o.getBestModeForData(t);if(i=o.from(e,c),i!==o.BYTE&&i.bit<c.bit)throw new Error('"'+t+'" cannot be encoded with mode '+o.toString(i)+".\n Suggested mode is: "+o.toString(c));switch(i!==o.KANJI||l.isKanjiModeEnabled()||(i=o.BYTE),i){case o.NUMERIC:return new r(t);case o.ALPHANUMERIC:return new n(t);case o.KANJI:return new s(t);case o.BYTE:return new a(t)}}e.fromArray=function(t){return t.reduce(function(t,e){return"string"==typeof e?t.push(f(e,null)):e.data&&t.push(f(e.data,e.mode)),t},[])},e.fromString=function(t,i){const r=function(t){const e=[];for(let i=0;i<t.length;i++){const r=t[i];switch(r.mode){case o.NUMERIC:e.push([r,{data:r.data,mode:o.ALPHANUMERIC,length:r.length},{data:r.data,mode:o.BYTE,length:r.length}]);break;case o.ALPHANUMERIC:e.push([r,{data:r.data,mode:o.BYTE,length:r.length}]);break;case o.KANJI:e.push([r,{data:r.data,mode:o.BYTE,length:d(r.data)}]);break;case o.BYTE:e.push([{data:r.data,mode:o.BYTE,length:d(r.data)}])}}return e}(g(t,l.isKanjiModeEnabled())),n=function(t,e){const i={},r={start:{}};let n=["start"];for(let a=0;a<t.length;a++){const s=t[a],c=[];for(let t=0;t<s.length;t++){const l=s[t],u=""+a+t;c.push(u),i[u]={node:l,lastCount:0},r[u]={};for(let t=0;t<n.length;t++){const a=n[t];i[a]&&i[a].node.mode===l.mode?(r[a][u]=p(i[a].lastCount+l.length,l.mode)-p(i[a].lastCount,l.mode),i[a].lastCount+=l.length):(i[a]&&(i[a].lastCount=l.length),r[a][u]=p(l.length,l.mode)+4+o.getCharCountIndicator(l.mode,e))}}n=c}for(let t=0;t<n.length;t++)r[n[t]].end=0;return{map:r,table:i}}(r,i),a=u.find_path(n.map,"start","end"),s=[];for(let t=1;t<a.length-1;t++)s.push(n.table[a[t]].node);return e.fromArray(s.reduce(function(t,e){const i=t.length-1>=0?t[t.length-1]:null;return i&&i.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)},[]))},e.rawSplit=function(t){return e.fromArray(g(t,l.isKanjiModeEnabled()))}},94753:(t,e,i)=>{const o=i(82890),r=o.getBCHDigit(1335);e.getEncodedBits=function(t,e){const i=t.bit<<3|e;let n=i<<10;for(;o.getBCHDigit(n)-r>=0;)n^=1335<<o.getBCHDigit(n)-r;return 21522^(i<<10|n)}},94904:t=>{"use strict";var e={single_source_shortest_paths:function(t,i,o){var r={},n={};n[i]=0;var a,s,c,l,u,d,h,g=e.PriorityQueue.make();for(g.push(i,0);!g.empty();)for(c in s=(a=g.pop()).value,l=a.cost,u=t[s]||{})u.hasOwnProperty(c)&&(d=l+u[c],h=n[c],(void 0===n[c]||h>d)&&(n[c]=d,g.push(c,d),r[c]=s));if(void 0!==o&&void 0===n[o]){var p=["Could not find a path from ",i," to ",o,"."].join("");throw new Error(p)}return r},extract_shortest_path_from_predecessor_list:function(t,e){for(var i=[],o=e;o;)i.push(o),t[o],o=t[o];return i.reverse(),i},find_path:function(t,i,o){var r=e.single_source_shortest_paths(t,i,o);return e.extract_shortest_path_from_predecessor_list(r,o)},PriorityQueue:{make:function(t){var i,o=e.PriorityQueue,r={};for(i in t=t||{},o)o.hasOwnProperty(i)&&(r[i]=o[i]);return r.queue=[],r.sorter=t.sorter||o.default_sorter,r},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var i={value:t,cost:e};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=e},94922:(t,e,i)=>{const o=i(2501),r=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],n=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(t,e){switch(e){case o.L:return r[4*(t-1)+0];case o.M:return r[4*(t-1)+1];case o.Q:return r[4*(t-1)+2];case o.H:return r[4*(t-1)+3];default:return}},e.getTotalCodewordsCount=function(t,e){switch(e){case o.L:return n[4*(t-1)+0];case o.M:return n[4*(t-1)+1];case o.Q:return n[4*(t-1)+2];case o.H:return n[4*(t-1)+3];default:return}}},95567:t=>{function e(){this.buffer=[],this.length=0}e.prototype={get:function(t){const e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(let i=0;i<e;i++)this.putBit(1==(t>>>e-i-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=e},95586:(t,e)=>{e.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}}}]);
//# sourceMappingURL=599.widget.iife.js.map