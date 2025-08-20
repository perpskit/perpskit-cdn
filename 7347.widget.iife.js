/*! For license information please see 7347.widget.iife.js.LICENSE.txt */
if(void 0===process)var process={env:{NODE_ENV:"production"},browser:!0,version:"",versions:{}};(this.webpackChunkHLWidget=this.webpackChunkHLWidget||[]).push([[7347],{2501:(t,e)=>{e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2},e.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},e.from=function(t,n){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+t)}}(t)}catch(t){return n}}},3824:(t,e,n)=>{const i=n(9074);function r(t,e){const n=t.a/255,i=e+'="'+t.hex+'"';return n<1?i+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':i}function o(t,e,n){let i=t+e;return void 0!==n&&(i+=" "+n),i}e.render=function(t,e,n){const a=i.getOptions(e),s=t.modules.size,c=t.modules.data,l=s+2*a.margin,u=a.color.light.a?"<path "+r(a.color.light,"fill")+' d="M0 0h'+l+"v"+l+'H0z"/>':"",h="<path "+r(a.color.dark,"stroke")+' d="'+function(t,e,n){let i="",r=0,a=!1,s=0;for(let c=0;c<t.length;c++){const l=Math.floor(c%e),u=Math.floor(c/e);l||a||(a=!0),t[c]?(s++,c>0&&l>0&&t[c-1]||(i+=a?o("M",l+n,.5+u+n):o("m",r,0),r=0,a=!1),l+1<e&&t[c+1]||(i+=o("h",s),s=0)):r++}return i}(c,s,a.margin)+'"/>',d='viewBox="0 0 '+l+" "+l+'"',g='<svg xmlns="http://www.w3.org/2000/svg" '+(a.width?'width="'+a.width+'" height="'+a.width+'" ':"")+d+' shape-rendering="crispEdges">'+u+h+"</svg>\n";return"function"==typeof n&&n(null,g),g}},4537:(t,e,n)=>{"use strict";n.d(e,{w:()=>r});var i=n(69623);function r(t){return(0,i.M)({...t,state:!0,attribute:!1})}},9074:(t,e)=>{function n(t){if("number"==typeof t&&(t=t.toString()),"string"!=typeof t)throw new Error("Color should be defined as hex string");let e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map(function(t){return[t,t]}))),6===e.length&&e.push("F","F");const n=parseInt(e.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:255&n,hex:"#"+e.slice(0,6).join("")}}e.getOptions=function(t){t||(t={}),t.color||(t.color={});const e=void 0===t.margin||null===t.margin||t.margin<0?4:t.margin,i=t.width&&t.width>=21?t.width:void 0,r=t.scale||4;return{width:i,scale:i?4:r,margin:e,color:{dark:n(t.color.dark||"#000000ff"),light:n(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},e.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},e.getImageWidth=function(t,n){const i=e.getScale(t,n);return Math.floor((t+2*n.margin)*i)},e.qrToImageData=function(t,n,i){const r=n.modules.size,o=n.modules.data,a=e.getScale(r,i),s=Math.floor((r+2*i.margin)*a),c=i.margin*a,l=[i.color.light,i.color.dark];for(let e=0;e<s;e++)for(let n=0;n<s;n++){let u=4*(e*s+n),h=i.color.light;e>=c&&n>=c&&e<s-c&&n<s-c&&(h=l[o[Math.floor((e-c)/a)*r+Math.floor((n-c)/a)]?1:0]),t[u++]=h.r,t[u++]=h.g,t[u++]=h.b,t[u]=h.a}}},10593:(t,e,n)=>{const i=n(32500),r=n(82890);function o(t){this.mode=i.KANJI,this.data=t}o.getBitsLength=function(t){return 13*t},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=r.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else{if(!(n>=57408&&n<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13)}},t.exports=o},13992:(t,e)=>{const n="[0-9]+";let i="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";i=i.replace(/u/g,"\\u");const r="(?:(?![A-Z0-9 $%*+\\-./:]|"+i+")(?:.|[\r\n]))+";e.KANJI=new RegExp(i,"g"),e.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),e.BYTE=new RegExp(r,"g"),e.NUMERIC=new RegExp(n,"g"),e.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");const o=new RegExp("^"+i+"$"),a=new RegExp("^"+n+"$"),s=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");e.testKanji=function(t){return o.test(t)},e.testNumeric=function(t){return a.test(t)},e.testAlphanumeric=function(t){return s.test(t)}},17262:(t,e,n)=>{"use strict";var i=n(48422),r=n(91427),o=n(47080),a=n(39783);const s=i.AH`
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
`;var c=function(t,e,n,i){var r,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(o<3?r(a):o>3?r(e,n,a):r(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a};let l=class extends i.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0,this.objectFit="cover"}render(){return this.objectFit&&(this.dataset.objectFit=this.objectFit),this.style.cssText=`\n      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      `,i.qy`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};l.styles=[o.W5,o.ck,s],c([(0,r.MZ)()],l.prototype,"src",void 0),c([(0,r.MZ)()],l.prototype,"alt",void 0),c([(0,r.MZ)()],l.prototype,"size",void 0),c([(0,r.MZ)()],l.prototype,"objectFit",void 0),l=c([(0,a.E)("wui-image")],l)},23507:(t,e,n)=>{"use strict";n.d(e,{H:()=>o});var i=n(80971),r=n(39341);const o=(0,r.u$)(class extends r.WL{constructor(t){if(super(t),t.type!==r.OA.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const n=t.element.classList;for(const t of this.st)t in e||(n.remove(t),this.st.delete(t));for(const t in e){const i=!!e[t];i===this.st.has(t)||this.nt?.has(t)||(i?(n.add(t),this.st.add(t)):(n.remove(t),this.st.delete(t)))}return i.c0}})},24909:(t,e,n)=>{const i=n(73743);e.mul=function(t,e){const n=new Uint8Array(t.length+e.length-1);for(let r=0;r<t.length;r++)for(let o=0;o<e.length;o++)n[r+o]^=i.mul(t[r],e[o]);return n},e.mod=function(t,e){let n=new Uint8Array(t);for(;n.length-e.length>=0;){const t=n[0];for(let r=0;r<e.length;r++)n[r]^=i.mul(e[r],t);let r=0;for(;r<n.length&&0===n[r];)r++;n=n.slice(r)}return n},e.generateECPolynomial=function(t){let n=new Uint8Array([1]);for(let r=0;r<t;r++)n=e.mul(n,new Uint8Array([1,i.exp(r)]));return n}},26264:(t,e)=>{e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};function n(t,n,i){switch(t){case e.Patterns.PATTERN000:return(n+i)%2==0;case e.Patterns.PATTERN001:return n%2==0;case e.Patterns.PATTERN010:return i%3==0;case e.Patterns.PATTERN011:return(n+i)%3==0;case e.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(i/3))%2==0;case e.Patterns.PATTERN101:return n*i%2+n*i%3==0;case e.Patterns.PATTERN110:return(n*i%2+n*i%3)%2==0;case e.Patterns.PATTERN111:return(n*i%3+(n+i)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}}e.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(t){const e=t.size;let n=0,i=0,r=0,o=null,a=null;for(let s=0;s<e;s++){i=r=0,o=a=null;for(let c=0;c<e;c++){let e=t.get(s,c);e===o?i++:(i>=5&&(n+=i-5+3),o=e,i=1),e=t.get(c,s),e===a?r++:(r>=5&&(n+=r-5+3),a=e,r=1)}i>=5&&(n+=i-5+3),r>=5&&(n+=r-5+3)}return n},e.getPenaltyN2=function(t){const e=t.size;let n=0;for(let i=0;i<e-1;i++)for(let r=0;r<e-1;r++){const e=t.get(i,r)+t.get(i,r+1)+t.get(i+1,r)+t.get(i+1,r+1);4!==e&&0!==e||n++}return 3*n},e.getPenaltyN3=function(t){const e=t.size;let n=0,i=0,r=0;for(let o=0;o<e;o++){i=r=0;for(let a=0;a<e;a++)i=i<<1&2047|t.get(o,a),a>=10&&(1488===i||93===i)&&n++,r=r<<1&2047|t.get(a,o),a>=10&&(1488===r||93===r)&&n++}return 40*n},e.getPenaltyN4=function(t){let e=0;const n=t.data.length;for(let i=0;i<n;i++)e+=t.data[i];return 10*Math.abs(Math.ceil(100*e/n/5)-10)},e.applyMask=function(t,e){const i=e.size;for(let r=0;r<i;r++)for(let o=0;o<i;o++)e.isReserved(o,r)||e.xor(o,r,n(t,o,r))},e.getBestMask=function(t,n){const i=Object.keys(e.Patterns).length;let r=0,o=1/0;for(let a=0;a<i;a++){n(a),e.applyMask(a,t);const i=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(a,t),i<o&&(o=i,r=a)}return r}},27165:(t,e,n)=>{"use strict";n.d(e,{Rt:()=>a,sO:()=>o});var i=n(80971);const{I:r}=i.ge,o=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=t=>void 0===t.strings},32240:(t,e,n)=>{const i=n(24909);function r(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}r.prototype.initialize=function(t){this.degree=t,this.genPoly=i.generateECPolynomial(this.degree)},r.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const e=new Uint8Array(t.length+this.degree);e.set(t);const n=i.mod(e,this.genPoly),r=this.degree-n.length;if(r>0){const t=new Uint8Array(this.degree);return t.set(n,r),t}return n},t.exports=r},32500:(t,e,n)=>{const i=n(95586),r=n(13992);e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!i.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]},e.getBestModeForData=function(t){return r.testNumeric(t)?e.NUMERIC:r.testAlphanumeric(t)?e.ALPHANUMERIC:r.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},e.isValid=function(t){return t&&t.bit&&t.ccBits},e.from=function(t,n){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+t)}}(t)}catch(t){return n}}},32971:(t,e,n)=>{"use strict";n.d(e,{T:()=>d});var i=n(80971),r=n(27165),o=n(64720);class a{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class s{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}var c=n(39341);const l=t=>!(0,r.sO)(t)&&"function"==typeof t.then,u=1073741823;class h extends o.Kq{constructor(){super(...arguments),this._$Cwt=u,this._$Cbt=[],this._$CK=new a(this),this._$CX=new s}render(...t){return t.find(t=>!l(t))??i.c0}update(t,e){const n=this._$Cbt;let r=n.length;this._$Cbt=e;const o=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$Cwt);t++){const i=e[t];if(!l(i))return this._$Cwt=t,i;t<r&&i===n[t]||(this._$Cwt=u,r=0,Promise.resolve(i).then(async t=>{for(;a.get();)await a.get();const e=o.deref();if(void 0!==e){const n=e._$Cbt.indexOf(i);n>-1&&n<e._$Cwt&&(e._$Cwt=n,e.setValue(t))}}))}return i.c0}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const d=(0,c.u$)(h)},33448:t=>{function e(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}e.prototype.set=function(t,e,n,i){const r=t*this.size+e;this.data[r]=n,i&&(this.reservedBit[r]=!0)},e.prototype.get=function(t,e){return this.data[t*this.size+e]},e.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n},e.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]},t.exports=e},36858:(t,e,n)=>{"use strict";var i=n(48422),r=n(91427),o=n(23507),a=n(47080),s=n(39783);const c=i.AH`
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
`;var l=function(t,e,n,i){var r,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(o<3?r(a):o>3?r(e,n,a):r(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a};let u=class extends i.WF{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,i.qy`<slot class=${(0,o.H)(t)}></slot>`}};u.styles=[a.W5,c],l([(0,r.MZ)()],u.prototype,"variant",void 0),l([(0,r.MZ)()],u.prototype,"color",void 0),l([(0,r.MZ)()],u.prototype,"align",void 0),l([(0,r.MZ)()],u.prototype,"lineClamp",void 0),u=l([(0,s.E)("wui-text")],u)},38273:(t,e,n)=>{"use strict";n(46116)},39168:(t,e,n)=>{"use strict";n.d(e,{J:()=>r});var i=n(80971);const r=t=>t??i.s6},39341:(t,e,n)=>{"use strict";n.d(e,{OA:()=>i,WL:()=>o,u$:()=>r});const i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},r=t=>(...e)=>({_$litDirective$:t,values:e});class o{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},42188:t=>{"use strict";t.exports=function(t){for(var e=[],n=t.length,i=0;i<n;i++){var r=t.charCodeAt(i);if(r>=55296&&r<=56319&&n>i+1){var o=t.charCodeAt(i+1);o>=56320&&o<=57343&&(r=1024*(r-55296)+o-56320+65536,i+=1)}r<128?e.push(r):r<2048?(e.push(r>>6|192),e.push(63&r|128)):r<55296||r>=57344&&r<65536?(e.push(r>>12|224),e.push(r>>6&63|128),e.push(63&r|128)):r>=65536&&r<=1114111?(e.push(r>>18|240),e.push(r>>12&63|128),e.push(r>>6&63|128),e.push(63&r|128)):e.push(239,191,189)}return new Uint8Array(e).buffer}},43401:(t,e,n)=>{const i=n(82890),r=n(2501),o=n(95567),a=n(33448),s=n(43825),c=n(54392),l=n(26264),u=n(94922),h=n(32240),d=n(93887),g=n(94753),f=n(32500),p=n(94541);function w(t,e,n){const i=t.size,r=g.getEncodedBits(e,n);let o,a;for(o=0;o<15;o++)a=1==(r>>o&1),o<6?t.set(o,8,a,!0):o<8?t.set(o+1,8,a,!0):t.set(i-15+o,8,a,!0),o<8?t.set(8,i-o-1,a,!0):o<9?t.set(8,15-o-1+1,a,!0):t.set(8,15-o-1,a,!0);t.set(i-8,8,1,!0)}function v(t,e,n,r){let g;if(Array.isArray(t))g=p.fromArray(t);else{if("string"!=typeof t)throw new Error("Invalid data");{let i=e;if(!i){const e=p.rawSplit(t);i=d.getBestVersionForData(e,n)}g=p.fromString(t,i||40)}}const v=d.getBestVersionForData(g,n);if(!v)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<v)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+v+".\n")}else e=v;const y=function(t,e,n){const r=new o;n.forEach(function(e){r.put(e.mode.bit,4),r.put(e.getLength(),f.getCharCountIndicator(e.mode,t)),e.write(r)});const a=8*(i.getSymbolTotalCodewords(t)-u.getTotalCodewordsCount(t,e));for(r.getLengthInBits()+4<=a&&r.put(0,4);r.getLengthInBits()%8!=0;)r.putBit(0);const s=(a-r.getLengthInBits())/8;for(let t=0;t<s;t++)r.put(t%2?17:236,8);return function(t,e,n){const r=i.getSymbolTotalCodewords(e),o=r-u.getTotalCodewordsCount(e,n),a=u.getBlocksCount(e,n),s=a-r%a,c=Math.floor(r/a),l=Math.floor(o/a),d=l+1,g=c-l,f=new h(g);let p=0;const w=new Array(a),v=new Array(a);let y=0;const m=new Uint8Array(t.buffer);for(let t=0;t<a;t++){const e=t<s?l:d;w[t]=m.slice(p,p+e),v[t]=f.encode(w[t]),p+=e,y=Math.max(y,e)}const b=new Uint8Array(r);let x,C,S=0;for(x=0;x<y;x++)for(C=0;C<a;C++)x<w[C].length&&(b[S++]=w[C][x]);for(x=0;x<g;x++)for(C=0;C<a;C++)b[S++]=v[C][x];return b}(r,t,e)}(e,n,g),m=i.getSymbolSize(e),b=new a(m);return function(t,e){const n=t.size,i=c.getPositions(e);for(let e=0;e<i.length;e++){const r=i[e][0],o=i[e][1];for(let e=-1;e<=7;e++)if(!(r+e<=-1||n<=r+e))for(let i=-1;i<=7;i++)o+i<=-1||n<=o+i||(e>=0&&e<=6&&(0===i||6===i)||i>=0&&i<=6&&(0===e||6===e)||e>=2&&e<=4&&i>=2&&i<=4?t.set(r+e,o+i,!0,!0):t.set(r+e,o+i,!1,!0))}}(b,e),function(t){const e=t.size;for(let n=8;n<e-8;n++){const e=n%2==0;t.set(n,6,e,!0),t.set(6,n,e,!0)}}(b),function(t,e){const n=s.getPositions(e);for(let e=0;e<n.length;e++){const i=n[e][0],r=n[e][1];for(let e=-2;e<=2;e++)for(let n=-2;n<=2;n++)-2===e||2===e||-2===n||2===n||0===e&&0===n?t.set(i+e,r+n,!0,!0):t.set(i+e,r+n,!1,!0)}}(b,e),w(b,n,0),e>=7&&function(t,e){const n=t.size,i=d.getEncodedBits(e);let r,o,a;for(let e=0;e<18;e++)r=Math.floor(e/3),o=e%3+n-8-3,a=1==(i>>e&1),t.set(r,o,a,!0),t.set(o,r,a,!0)}(b,e),function(t,e){const n=t.size;let i=-1,r=n-1,o=7,a=0;for(let s=n-1;s>0;s-=2)for(6===s&&s--;;){for(let n=0;n<2;n++)if(!t.isReserved(r,s-n)){let i=!1;a<e.length&&(i=1==(e[a]>>>o&1)),t.set(r,s-n,i),o--,-1===o&&(a++,o=7)}if(r+=i,r<0||n<=r){r-=i,i=-i;break}}}(b,y),isNaN(r)&&(r=l.getBestMask(b,w.bind(null,b,n))),l.applyMask(r,b),w(b,n,r),{modules:b,version:e,errorCorrectionLevel:n,maskPattern:r,segments:g}}e.create=function(t,e){if(void 0===t||""===t)throw new Error("No input text");let n,o,a=r.M;return void 0!==e&&(a=r.from(e.errorCorrectionLevel,r.M),n=d.from(e.version),o=l.from(e.maskPattern),e.toSJISFunc&&i.setToSJISFunction(e.toSJISFunc)),v(t,n,a,o)}},43825:(t,e,n)=>{const i=n(82890).getSymbolSize;e.getRowColCoords=function(t){if(1===t)return[];const e=Math.floor(t/7)+2,n=i(t),r=145===n?26:2*Math.ceil((n-13)/(2*e-2)),o=[n-7];for(let t=1;t<e-1;t++)o[t]=o[t-1]-r;return o.push(6),o.reverse()},e.getPositions=function(t){const n=[],i=e.getRowColCoords(t),r=i.length;for(let t=0;t<r;t++)for(let e=0;e<r;e++)0===t&&0===e||0===t&&e===r-1||t===r-1&&0===e||n.push([i[t],i[e]]);return n}},45666:(t,e,n)=>{const i=n(42188),r=n(32500);function o(t){this.mode=r.BYTE,"string"==typeof t&&(t=i(t)),this.data=new Uint8Array(t)}o.getBitsLength=function(t){return 8*t},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)},t.exports=o},46116:(t,e,n)=>{"use strict";var i=n(48422),r=n(91427),o=n(47080),a=n(86515),s=n(39783);const c=i.AH`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var l=function(t,e,n,i){var r,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(o<3?r(a):o>3?r(e,n,a):r(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a};let u=class extends i.WF{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&a.Z.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&a.Z.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&a.Z.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&a.Z.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&a.Z.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&a.Z.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&a.Z.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&a.Z.getSpacingStyles(this.margin,3)};\n    `,i.qy`<slot></slot>`}};u.styles=[o.W5,c],l([(0,r.MZ)()],u.prototype,"flexDirection",void 0),l([(0,r.MZ)()],u.prototype,"flexWrap",void 0),l([(0,r.MZ)()],u.prototype,"flexBasis",void 0),l([(0,r.MZ)()],u.prototype,"flexGrow",void 0),l([(0,r.MZ)()],u.prototype,"flexShrink",void 0),l([(0,r.MZ)()],u.prototype,"alignItems",void 0),l([(0,r.MZ)()],u.prototype,"justifyContent",void 0),l([(0,r.MZ)()],u.prototype,"columnGap",void 0),l([(0,r.MZ)()],u.prototype,"rowGap",void 0),l([(0,r.MZ)()],u.prototype,"gap",void 0),l([(0,r.MZ)()],u.prototype,"padding",void 0),l([(0,r.MZ)()],u.prototype,"margin",void 0),u=l([(0,s.E)("wui-flex")],u)},54392:(t,e,n)=>{const i=n(82890).getSymbolSize;e.getPositions=function(t){const e=i(t);return[[0,0],[e-7,0],[0,e-7]]}},59909:(t,e,n)=>{const i=n(32500),r=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function o(t){this.mode=i.ALPHANUMERIC,this.data=t}o.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let n=45*r.indexOf(this.data[e]);n+=r.indexOf(this.data[e+1]),t.put(n,11)}this.data.length%2&&t.put(r.indexOf(this.data[e]),6)},t.exports=o},60097:(t,e,n)=>{const i=n(32500);function r(t){this.mode=i.NUMERIC,this.data=t.toString()}r.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(t){let e,n,i;for(e=0;e+3<=this.data.length;e+=3)n=this.data.substr(e,3),i=parseInt(n,10),t.put(i,10);const r=this.data.length-e;r>0&&(n=this.data.substr(e),i=parseInt(n,10),t.put(i,3*r+1))},t.exports=r},64720:(t,e,n)=>{"use strict";n.d(e,{Kq:()=>h});var i=n(27165),r=n(39341);const o=(t,e)=>{const n=t._$AN;if(void 0===n)return!1;for(const t of n)t._$AO?.(e,!1),o(t,e);return!0},a=t=>{let e,n;do{if(void 0===(e=t._$AM))break;n=e._$AN,n.delete(t),t=e}while(0===n?.size)},s=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(void 0===n)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),u(e)}};function c(t){void 0!==this._$AN?(a(this),this._$AM=t,s(this)):this._$AM=t}function l(t,e=!1,n=0){const i=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(e)if(Array.isArray(i))for(let t=n;t<i.length;t++)o(i[t],!1),a(i[t]);else null!=i&&(o(i,!1),a(i));else o(this,t)}const u=t=>{t.type==r.OA.CHILD&&(t._$AP??=l,t._$AQ??=c)};class h extends r.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,n){super._$AT(t,e,n),s(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(o(this,t),a(this))}setValue(t){if((0,i.Rt)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}},66933:(t,e,n)=>{"use strict";n(36858)},69623:(t,e,n)=>{"use strict";n.d(e,{M:()=>a});var i=n(56451);const r={attribute:!0,type:String,converter:i.W3,reflect:!1,hasChanged:i.Ec},o=(t=r,e,n)=>{const{kind:i,metadata:o}=n;let a=globalThis.litPropertyMetadata.get(o);if(void 0===a&&globalThis.litPropertyMetadata.set(o,a=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),a.set(n.name,t),"accessor"===i){const{name:i}=n;return{set(n){const r=e.get.call(this);e.set.call(this,n),this.requestUpdate(i,r,t)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=n;return function(n){const r=this[i];e.call(this,n),this.requestUpdate(i,r,t)}}throw Error("Unsupported decorator location: "+i)};function a(t){return(e,n)=>"object"==typeof n?o(t,e,n):((t,e,n)=>{const i=e.hasOwnProperty(n);return e.constructor.createProperty(n,t),i?Object.getOwnPropertyDescriptor(e,n):void 0})(t,e,n)}},73743:(t,e)=>{const n=new Uint8Array(512),i=new Uint8Array(256);!function(){let t=1;for(let e=0;e<255;e++)n[e]=t,i[t]=e,t<<=1,256&t&&(t^=285);for(let t=255;t<512;t++)n[t]=n[t-255]}(),e.log=function(t){if(t<1)throw new Error("log("+t+")");return i[t]},e.exp=function(t){return n[t]},e.mul=function(t,e){return 0===t||0===e?0:n[i[t]+i[e]]}},76199:(t,e,n)=>{const i=n(9074);e.render=function(t,e,n){let r=n,o=e;void 0!==r||e&&e.getContext||(r=e,e=void 0),e||(o=function(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}()),r=i.getOptions(r);const a=i.getImageWidth(t.modules.size,r),s=o.getContext("2d"),c=s.createImageData(a,a);return i.qrToImageData(c.data,t,r),function(t,e,n){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=n,e.width=n,e.style.height=n+"px",e.style.width=n+"px"}(s,o,a),s.putImageData(c,0,0),o},e.renderToDataURL=function(t,n,i){let r=i;void 0!==r||n&&n.getContext||(r=n,n=void 0),r||(r={});const o=e.render(t,n,r),a=r.type||"image/png",s=r.rendererOpts||{};return o.toDataURL(a,s.quality)}},77200:(t,e,n)=>{"use strict";var i=n(48422),r=n(91427),o=n(32971);const a=new class{constructor(){this.cache=new Map}set(t,e){this.cache.set(t,e)}get(t){return this.cache.get(t)}has(t){return this.cache.has(t)}delete(t){this.cache.delete(t)}clear(){this.cache.clear()}};var s=n(47080),c=n(39783);const l=i.AH`
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
`;var u=function(t,e,n,i){var r,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(o<3?r(a):o>3?r(e,n,a):r(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a};const h={add:async()=>(await n.e(5619).then(n.bind(n,95619))).addSvg,allWallets:async()=>(await n.e(9452).then(n.bind(n,99452))).allWalletsSvg,arrowBottomCircle:async()=>(await n.e(5374).then(n.bind(n,45374))).arrowBottomCircleSvg,appStore:async()=>(await n.e(3019).then(n.bind(n,33019))).appStoreSvg,apple:async()=>(await n.e(8852).then(n.bind(n,58852))).appleSvg,arrowBottom:async()=>(await n.e(3097).then(n.bind(n,33097))).arrowBottomSvg,arrowLeft:async()=>(await n.e(9275).then(n.bind(n,89275))).arrowLeftSvg,arrowRight:async()=>(await n.e(1282).then(n.bind(n,61282))).arrowRightSvg,arrowTop:async()=>(await n.e(1967).then(n.bind(n,31967))).arrowTopSvg,bank:async()=>(await n.e(2236).then(n.bind(n,72236))).bankSvg,browser:async()=>(await n.e(6524).then(n.bind(n,76524))).browserSvg,bin:async()=>(await n.e(4249).then(n.bind(n,64249))).binSvg,bitcoin:async()=>(await n.e(4286).then(n.bind(n,94286))).bitcoinSvg,card:async()=>(await n.e(3524).then(n.bind(n,93524))).cardSvg,checkmark:async()=>(await n.e(525).then(n.bind(n,90525))).checkmarkSvg,checkmarkBold:async()=>(await n.e(8905).then(n.bind(n,48905))).checkmarkBoldSvg,chevronBottom:async()=>(await n.e(4231).then(n.bind(n,44231))).chevronBottomSvg,chevronLeft:async()=>(await n.e(5329).then(n.bind(n,65329))).chevronLeftSvg,chevronRight:async()=>(await n.e(1176).then(n.bind(n,61176))).chevronRightSvg,chevronTop:async()=>(await n.e(3745).then(n.bind(n,3745))).chevronTopSvg,chromeStore:async()=>(await n.e(9208).then(n.bind(n,59208))).chromeStoreSvg,clock:async()=>(await n.e(614).then(n.bind(n,20614))).clockSvg,close:async()=>(await n.e(3176).then(n.bind(n,3176))).closeSvg,compass:async()=>(await n.e(4484).then(n.bind(n,94484))).compassSvg,coinPlaceholder:async()=>(await n.e(410).then(n.bind(n,20410))).coinPlaceholderSvg,copy:async()=>(await n.e(355).then(n.bind(n,70355))).copySvg,cursor:async()=>(await n.e(988).then(n.bind(n,40988))).cursorSvg,cursorTransparent:async()=>(await n.e(4855).then(n.bind(n,84855))).cursorTransparentSvg,circle:async()=>(await n.e(8178).then(n.bind(n,78178))).circleSvg,desktop:async()=>(await n.e(4208).then(n.bind(n,54208))).desktopSvg,disconnect:async()=>(await n.e(9728).then(n.bind(n,99728))).disconnectSvg,discord:async()=>(await n.e(4172).then(n.bind(n,64172))).discordSvg,ethereum:async()=>(await n.e(6351).then(n.bind(n,96351))).ethereumSvg,etherscan:async()=>(await n.e(1461).then(n.bind(n,81461))).etherscanSvg,extension:async()=>(await n.e(7381).then(n.bind(n,67381))).extensionSvg,externalLink:async()=>(await n.e(7274).then(n.bind(n,47274))).externalLinkSvg,facebook:async()=>(await n.e(4698).then(n.bind(n,4698))).facebookSvg,farcaster:async()=>(await n.e(5505).then(n.bind(n,5505))).farcasterSvg,filters:async()=>(await n.e(8075).then(n.bind(n,48075))).filtersSvg,github:async()=>(await n.e(8573).then(n.bind(n,48573))).githubSvg,google:async()=>(await n.e(9521).then(n.bind(n,39521))).googleSvg,helpCircle:async()=>(await n.e(7842).then(n.bind(n,97842))).helpCircleSvg,image:async()=>(await n.e(4541).then(n.bind(n,64541))).imageSvg,id:async()=>(await n.e(8743).then(n.bind(n,18743))).idSvg,infoCircle:async()=>(await n.e(2907).then(n.bind(n,42907))).infoCircleSvg,lightbulb:async()=>(await n.e(7547).then(n.bind(n,57547))).lightbulbSvg,mail:async()=>(await n.e(3721).then(n.bind(n,3721))).mailSvg,mobile:async()=>(await n.e(2756).then(n.bind(n,42756))).mobileSvg,more:async()=>(await n.e(8023).then(n.bind(n,28023))).moreSvg,networkPlaceholder:async()=>(await n.e(2134).then(n.bind(n,72134))).networkPlaceholderSvg,nftPlaceholder:async()=>(await n.e(8679).then(n.bind(n,38679))).nftPlaceholderSvg,off:async()=>(await n.e(413).then(n.bind(n,10413))).offSvg,playStore:async()=>(await n.e(376).then(n.bind(n,80376))).playStoreSvg,plus:async()=>(await n.e(7142).then(n.bind(n,87142))).plusSvg,qrCode:async()=>(await n.e(4195).then(n.bind(n,44195))).qrCodeIcon,recycleHorizontal:async()=>(await n.e(8942).then(n.bind(n,28942))).recycleHorizontalSvg,refresh:async()=>(await n.e(8795).then(n.bind(n,88795))).refreshSvg,search:async()=>(await n.e(6202).then(n.bind(n,6202))).searchSvg,send:async()=>(await n.e(196).then(n.bind(n,60196))).sendSvg,swapHorizontal:async()=>(await n.e(1429).then(n.bind(n,31429))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await n.e(5634).then(n.bind(n,15634))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await n.e(638).then(n.bind(n,20638))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await n.e(1259).then(n.bind(n,91259))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await n.e(2051).then(n.bind(n,82051))).swapVerticalSvg,solana:async()=>(await n.e(2178).then(n.bind(n,12178))).solanaSvg,telegram:async()=>(await n.e(7137).then(n.bind(n,57137))).telegramSvg,threeDots:async()=>(await n.e(8617).then(n.bind(n,38617))).threeDotsSvg,twitch:async()=>(await n.e(9605).then(n.bind(n,59605))).twitchSvg,twitter:async()=>(await n.e(7420).then(n.bind(n,57420))).xSvg,twitterIcon:async()=>(await n.e(5622).then(n.bind(n,5622))).twitterIconSvg,user:async()=>(await n.e(9653).then(n.bind(n,29653))).userSvg,verify:async()=>(await n.e(6963).then(n.bind(n,86963))).verifySvg,verifyFilled:async()=>(await n.e(4368).then(n.bind(n,94368))).verifyFilledSvg,wallet:async()=>(await n.e(8235).then(n.bind(n,88235))).walletSvg,walletConnect:async()=>(await n.e(3565).then(n.bind(n,33565))).walletConnectSvg,walletConnectLightBrown:async()=>(await n.e(3565).then(n.bind(n,33565))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await n.e(3565).then(n.bind(n,33565))).walletConnectBrownSvg,walletPlaceholder:async()=>(await n.e(8447).then(n.bind(n,78447))).walletPlaceholderSvg,warningCircle:async()=>(await n.e(7873).then(n.bind(n,37873))).warningCircleSvg,x:async()=>(await n.e(7420).then(n.bind(n,57420))).xSvg,info:async()=>(await n.e(4734).then(n.bind(n,54734))).infoSvg,exclamationTriangle:async()=>(await n.e(7106).then(n.bind(n,7106))).exclamationTriangleSvg,reown:async()=>(await n.e(7391).then(n.bind(n,97391))).reownSvg,"x-mark":async()=>(await n.e(8940).then(n.bind(n,68940))).xMarkSvg};let d=class extends i.WF{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n      --local-aspect-ratio: ${this.aspectRatio}\n    `,i.qy`${(0,o.T)(async function(t){if(a.has(t))return a.get(t);const e=(h[t]??h.copy)();return a.set(t,e),e}(this.name),i.qy`<div class="fallback"></div>`)}`}};d.styles=[s.W5,s.ck,l],u([(0,r.MZ)()],d.prototype,"size",void 0),u([(0,r.MZ)()],d.prototype,"name",void 0),u([(0,r.MZ)()],d.prototype,"color",void 0),u([(0,r.MZ)()],d.prototype,"aspectRatio",void 0),d=u([(0,c.E)("wui-icon")],d)},80330:(t,e,n)=>{"use strict";var i=n(48422),r=n(91427),o=(n(77200),n(17262),n(36858),n(47080)),a=n(39783);const s=i.AH`
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
`;var c=function(t,e,n,i){var r,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(o<3?r(a):o>3?r(e,n,a):r(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a};let l=class extends i.WF{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){const t="sm"===this.size?"small-600":"paragraph-600";return i.qy`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?i.qy`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${t} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};l.styles=[o.W5,o.fD,s],c([(0,r.MZ)()],l.prototype,"variant",void 0),c([(0,r.MZ)()],l.prototype,"imageSrc",void 0),c([(0,r.MZ)({type:Boolean})],l.prototype,"disabled",void 0),c([(0,r.MZ)()],l.prototype,"icon",void 0),c([(0,r.MZ)()],l.prototype,"size",void 0),c([(0,r.MZ)()],l.prototype,"text",void 0),l=c([(0,a.E)("wui-chip-button")],l)},82890:(t,e)=>{let n;const i=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},e.getSymbolTotalCodewords=function(t){return i[t]},e.getBCHDigit=function(t){let e=0;for(;0!==t;)e++,t>>>=1;return e},e.setToSJISFunction=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');n=t},e.isKanjiModeEnabled=function(){return void 0!==n},e.toSJIS=function(t){return n(t)}},83036:(t,e,n)=>{"use strict";var i=n(48422),r=n(91427),o=(n(77200),n(17262),n(94083));function a(t,e,n){return t!==e&&(t-e<0?e-t:t-e)<=n+.1}const s={generate({uri:t,size:e,logoSize:n,dotColor:r="#141414"}){const s=[],c=function(t){const e=Array.prototype.slice.call(o.create(t,{errorCorrectionLevel:"Q"}).modules.data,0),n=Math.sqrt(e.length);return e.reduce((t,e,i)=>(i%n===0?t.push([e]):t[t.length-1].push(e))&&t,[])}(t),l=e/c.length,u=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];u.forEach(({x:t,y:e})=>{const n=(c.length-7)*l*t,o=(c.length-7)*l*e,a=.45;for(let t=0;t<u.length;t+=1){const e=l*(7-2*t);s.push(i.JW`
            <rect
              fill=${2===t?r:"transparent"}
              width=${0===t?e-5:e}
              rx= ${0===t?(e-5)*a:e*a}
              ry= ${0===t?(e-5)*a:e*a}
              stroke=${r}
              stroke-width=${0===t?5:0}
              height=${0===t?e-5:e}
              x= ${0===t?o+l*t+2.5:o+l*t}
              y= ${0===t?n+l*t+2.5:n+l*t}
            />
          `)}});const h=Math.floor((n+25)/l),d=c.length/2-h/2,g=c.length/2+h/2-1,f=[];c.forEach((t,e)=>{t.forEach((t,n)=>{if(c[e][n]&&!(e<7&&n<7||e>c.length-8&&n<7||e<7&&n>c.length-8||e>d&&e<g&&n>d&&n<g)){const t=e*l+l/2,i=n*l+l/2;f.push([t,i])}})});const p={};return f.forEach(([t,e])=>{p[t]?p[t]?.push(e):p[t]=[e]}),Object.entries(p).map(([t,e])=>{const n=e.filter(t=>e.every(e=>!a(t,e,l)));return[Number(t),n]}).forEach(([t,e])=>{e.forEach(e=>{s.push(i.JW`<circle cx=${t} cy=${e} fill=${r} r=${l/2.5} />`)})}),Object.entries(p).filter(([t,e])=>e.length>1).map(([t,e])=>{const n=e.filter(t=>e.some(e=>a(t,e,l)));return[Number(t),n]}).map(([t,e])=>{e.sort((t,e)=>t<e?-1:1);const n=[];for(const t of e){const e=n.find(e=>e.some(e=>a(t,e,l)));e?e.push(t):n.push([t])}return[t,n.map(t=>[t[0],t[t.length-1]])]}).forEach(([t,e])=>{e.forEach(([e,n])=>{s.push(i.JW`
              <line
                x1=${t}
                x2=${t}
                y1=${e}
                y2=${n}
                stroke=${r}
                stroke-width=${l/1.25}
                stroke-linecap="round"
              />
            `)})}),s}};var c=n(47080),l=n(39783);const u=i.AH`
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
`;var h=function(t,e,n,i){var r,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(o<3?r(a):o>3?r(e,n,a):r(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a};let d=class extends i.WF{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`\n     --local-size: ${this.size}px;\n     --local-icon-color: ${this.color??"#3396ff"}\n    `,i.qy`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const t="light"===this.theme?this.size:this.size-32;return i.JW`
      <svg height=${t} width=${t}>
        ${s.generate({uri:this.uri,size:t,logoSize:this.arenaClear?0:t/4,dotColor:this.color})}
      </svg>
    `}templateVisual(){return this.imageSrc?i.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?i.qy`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:i.qy`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};d.styles=[c.W5,u],h([(0,r.MZ)()],d.prototype,"uri",void 0),h([(0,r.MZ)({type:Number})],d.prototype,"size",void 0),h([(0,r.MZ)()],d.prototype,"theme",void 0),h([(0,r.MZ)()],d.prototype,"imageSrc",void 0),h([(0,r.MZ)()],d.prototype,"alt",void 0),h([(0,r.MZ)()],d.prototype,"color",void 0),h([(0,r.MZ)({type:Boolean})],d.prototype,"arenaClear",void 0),h([(0,r.MZ)({type:Boolean})],d.prototype,"farcaster",void 0),d=h([(0,l.E)("wui-qr-code")],d)},87347:(t,e,n)=>{"use strict";n.r(e),n.d(e,{W3mWalletReceiveView:()=>S});var i=n(48422),r=n(91427),o=n(39168),a=n(1759),s=n(65149),c=n(23774),l=n(26224),u=n(77433),h=n(21385),d=n(79063),g=n(65885),f=n(31779),p=(n(80330),n(77200),n(17262),n(36858),n(46116),n(47080)),w=n(39783);const v=i.AH`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var y=function(t,e,n,i){var r,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(o<3?r(a):o>3?r(e,n,a):r(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a};let m=class extends i.WF{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return i.qy`
      <button>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const t=this.networkImages.slice(0,5);return i.qy` <wui-flex class="networks">
      ${t?.map(t=>i.qy` <wui-flex class="network-icon"> <wui-image src=${t}></wui-image> </wui-flex>`)}
    </wui-flex>`}};m.styles=[p.W5,p.fD,v],y([(0,r.MZ)({type:Array})],m.prototype,"networkImages",void 0),y([(0,r.MZ)()],m.prototype,"text",void 0),m=y([(0,w.E)("wui-compatible-network")],m),n(38273),n(83036),n(66933);var b=n(74556);const x=i.AH`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`;var C=function(t,e,n,i){var r,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(o<3?r(a):o>3?r(e,n,a):r(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a};let S=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.address=a.U.state.address,this.profileName=a.U.state.profileName,this.network=s.W.state.activeCaipNetwork,this.unsubscribe.push(a.U.subscribe(t=>{t.address?(this.address=t.address,this.profileName=t.profileName):c.P.showError("Account not found")}),s.W.subscribeKey("activeCaipNetwork",t=>{t?.id&&(this.network=t)}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(!this.address)throw new Error("w3m-wallet-receive-view: No account provided");const t=l.$.getNetworkImage(this.network);return i.qy` <wui-flex
      flexDirection="column"
      .padding=${["0","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${f.Zv.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        size="sm"
        imageSrc=${t||""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l","0","0","0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${u.W.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          color=${(0,o.J)(u.W.state.themeVariables["--w3m-qr-color"])}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const t=s.W.getAllRequestedCaipNetworks(),e=s.W.checkIfSmartAccountEnabled(),n=s.W.state.activeCaipNetwork,r=t.filter(t=>t?.chainNamespace===n?.chainNamespace);if((0,h.lj)(n?.chainNamespace)===b.Vl.ACCOUNT_TYPES.SMART_ACCOUNT&&e)return n?i.qy`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[l.$.getNetworkImage(n)??""]}
      ></wui-compatible-network>`:null;const o=r?.filter(t=>t?.assets?.imageId)?.slice(0,5),a=o.map(l.$.getNetworkImage).filter(Boolean);return i.qy`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${a}
    ></wui-compatible-network>`}onReceiveClick(){d.I.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(g.w.copyToClopboard(this.address),c.P.showSuccess("Address copied"))}catch{c.P.showError("Failed to copy")}}};S.styles=x,C([(0,r.wk)()],S.prototype,"address",void 0),C([(0,r.wk)()],S.prototype,"profileName",void 0),C([(0,r.wk)()],S.prototype,"network",void 0),S=C([(0,f.EM)("w3m-wallet-receive-view")],S)},90681:t=>{t.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},91427:(t,e,n)=>{"use strict";n.d(e,{MZ:()=>i.M,wk:()=>r.w});var i=n(69623),r=n(4537)},93887:(t,e,n)=>{const i=n(82890),r=n(94922),o=n(2501),a=n(32500),s=n(95586),c=i.getBCHDigit(7973);function l(t,e){return a.getCharCountIndicator(t,e)+4}function u(t,e){let n=0;return t.forEach(function(t){const i=l(t.mode,e);n+=i+t.getBitsLength()}),n}e.from=function(t,e){return s.isValid(t)?parseInt(t,10):e},e.getCapacity=function(t,e,n){if(!s.isValid(t))throw new Error("Invalid QR Code version");void 0===n&&(n=a.BYTE);const o=8*(i.getSymbolTotalCodewords(t)-r.getTotalCodewordsCount(t,e));if(n===a.MIXED)return o;const c=o-l(n,t);switch(n){case a.NUMERIC:return Math.floor(c/10*3);case a.ALPHANUMERIC:return Math.floor(c/11*2);case a.KANJI:return Math.floor(c/13);case a.BYTE:default:return Math.floor(c/8)}},e.getBestVersionForData=function(t,n){let i;const r=o.from(n,o.M);if(Array.isArray(t)){if(t.length>1)return function(t,n){for(let i=1;i<=40;i++)if(u(t,i)<=e.getCapacity(i,n,a.MIXED))return i}(t,r);if(0===t.length)return 1;i=t[0]}else i=t;return function(t,n,i){for(let r=1;r<=40;r++)if(n<=e.getCapacity(r,i,t))return r}(i.mode,i.getLength(),r)},e.getEncodedBits=function(t){if(!s.isValid(t)||t<7)throw new Error("Invalid QR Code version");let e=t<<12;for(;i.getBCHDigit(e)-c>=0;)e^=7973<<i.getBCHDigit(e)-c;return t<<12|e}},94083:(t,e,n)=>{const i=n(90681),r=n(43401),o=n(76199),a=n(3824);function s(t,e,n,o,a){const s=[].slice.call(arguments,1),c=s.length,l="function"==typeof s[c-1];if(!l&&!i())throw new Error("Callback required as last argument");if(!l){if(c<1)throw new Error("Too few arguments provided");return 1===c?(n=e,e=o=void 0):2!==c||e.getContext||(o=n,n=e,e=void 0),new Promise(function(i,a){try{const a=r.create(n,o);i(t(a,e,o))}catch(t){a(t)}})}if(c<2)throw new Error("Too few arguments provided");2===c?(a=n,n=e,e=o=void 0):3===c&&(e.getContext&&void 0===a?(a=o,o=void 0):(a=o,o=n,n=e,e=void 0));try{const i=r.create(n,o);a(null,t(i,e,o))}catch(t){a(t)}}e.create=r.create,e.toCanvas=s.bind(null,o.render),e.toDataURL=s.bind(null,o.renderToDataURL),e.toString=s.bind(null,function(t,e,n){return a.render(t,n)})},94541:(t,e,n)=>{const i=n(32500),r=n(60097),o=n(59909),a=n(45666),s=n(10593),c=n(13992),l=n(82890),u=n(94904);function h(t){return unescape(encodeURIComponent(t)).length}function d(t,e,n){const i=[];let r;for(;null!==(r=t.exec(n));)i.push({data:r[0],index:r.index,mode:e,length:r[0].length});return i}function g(t){const e=d(c.NUMERIC,i.NUMERIC,t),n=d(c.ALPHANUMERIC,i.ALPHANUMERIC,t);let r,o;return l.isKanjiModeEnabled()?(r=d(c.BYTE,i.BYTE,t),o=d(c.KANJI,i.KANJI,t)):(r=d(c.BYTE_KANJI,i.BYTE,t),o=[]),e.concat(n,r,o).sort(function(t,e){return t.index-e.index}).map(function(t){return{data:t.data,mode:t.mode,length:t.length}})}function f(t,e){switch(e){case i.NUMERIC:return r.getBitsLength(t);case i.ALPHANUMERIC:return o.getBitsLength(t);case i.KANJI:return s.getBitsLength(t);case i.BYTE:return a.getBitsLength(t)}}function p(t,e){let n;const c=i.getBestModeForData(t);if(n=i.from(e,c),n!==i.BYTE&&n.bit<c.bit)throw new Error('"'+t+'" cannot be encoded with mode '+i.toString(n)+".\n Suggested mode is: "+i.toString(c));switch(n!==i.KANJI||l.isKanjiModeEnabled()||(n=i.BYTE),n){case i.NUMERIC:return new r(t);case i.ALPHANUMERIC:return new o(t);case i.KANJI:return new s(t);case i.BYTE:return new a(t)}}e.fromArray=function(t){return t.reduce(function(t,e){return"string"==typeof e?t.push(p(e,null)):e.data&&t.push(p(e.data,e.mode)),t},[])},e.fromString=function(t,n){const r=function(t){const e=[];for(let n=0;n<t.length;n++){const r=t[n];switch(r.mode){case i.NUMERIC:e.push([r,{data:r.data,mode:i.ALPHANUMERIC,length:r.length},{data:r.data,mode:i.BYTE,length:r.length}]);break;case i.ALPHANUMERIC:e.push([r,{data:r.data,mode:i.BYTE,length:r.length}]);break;case i.KANJI:e.push([r,{data:r.data,mode:i.BYTE,length:h(r.data)}]);break;case i.BYTE:e.push([{data:r.data,mode:i.BYTE,length:h(r.data)}])}}return e}(g(t,l.isKanjiModeEnabled())),o=function(t,e){const n={},r={start:{}};let o=["start"];for(let a=0;a<t.length;a++){const s=t[a],c=[];for(let t=0;t<s.length;t++){const l=s[t],u=""+a+t;c.push(u),n[u]={node:l,lastCount:0},r[u]={};for(let t=0;t<o.length;t++){const a=o[t];n[a]&&n[a].node.mode===l.mode?(r[a][u]=f(n[a].lastCount+l.length,l.mode)-f(n[a].lastCount,l.mode),n[a].lastCount+=l.length):(n[a]&&(n[a].lastCount=l.length),r[a][u]=f(l.length,l.mode)+4+i.getCharCountIndicator(l.mode,e))}}o=c}for(let t=0;t<o.length;t++)r[o[t]].end=0;return{map:r,table:n}}(r,n),a=u.find_path(o.map,"start","end"),s=[];for(let t=1;t<a.length-1;t++)s.push(o.table[a[t]].node);return e.fromArray(s.reduce(function(t,e){const n=t.length-1>=0?t[t.length-1]:null;return n&&n.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)},[]))},e.rawSplit=function(t){return e.fromArray(g(t,l.isKanjiModeEnabled()))}},94753:(t,e,n)=>{const i=n(82890),r=i.getBCHDigit(1335);e.getEncodedBits=function(t,e){const n=t.bit<<3|e;let o=n<<10;for(;i.getBCHDigit(o)-r>=0;)o^=1335<<i.getBCHDigit(o)-r;return 21522^(n<<10|o)}},94904:t=>{"use strict";var e={single_source_shortest_paths:function(t,n,i){var r={},o={};o[n]=0;var a,s,c,l,u,h,d,g=e.PriorityQueue.make();for(g.push(n,0);!g.empty();)for(c in s=(a=g.pop()).value,l=a.cost,u=t[s]||{})u.hasOwnProperty(c)&&(h=l+u[c],d=o[c],(void 0===o[c]||d>h)&&(o[c]=h,g.push(c,h),r[c]=s));if(void 0!==i&&void 0===o[i]){var f=["Could not find a path from ",n," to ",i,"."].join("");throw new Error(f)}return r},extract_shortest_path_from_predecessor_list:function(t,e){for(var n=[],i=e;i;)n.push(i),t[i],i=t[i];return n.reverse(),n},find_path:function(t,n,i){var r=e.single_source_shortest_paths(t,n,i);return e.extract_shortest_path_from_predecessor_list(r,i)},PriorityQueue:{make:function(t){var n,i=e.PriorityQueue,r={};for(n in t=t||{},i)i.hasOwnProperty(n)&&(r[n]=i[n]);return r.queue=[],r.sorter=t.sorter||i.default_sorter,r},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var n={value:t,cost:e};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=e},94922:(t,e,n)=>{const i=n(2501),r=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],o=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(t,e){switch(e){case i.L:return r[4*(t-1)+0];case i.M:return r[4*(t-1)+1];case i.Q:return r[4*(t-1)+2];case i.H:return r[4*(t-1)+3];default:return}},e.getTotalCodewordsCount=function(t,e){switch(e){case i.L:return o[4*(t-1)+0];case i.M:return o[4*(t-1)+1];case i.Q:return o[4*(t-1)+2];case i.H:return o[4*(t-1)+3];default:return}}},95567:t=>{function e(){this.buffer=[],this.length=0}e.prototype={get:function(t){const e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(let n=0;n<e;n++)this.putBit(1==(t>>>e-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=e},95586:(t,e)=>{e.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}}}]);
//# sourceMappingURL=7347.widget.iife.js.map