import{$a as u,$b as te,Aa as p,Ab as Ao,Ac as Zo,Ba as Ot,Bb as Fo,C as Qi,Ca as be,Cb as Ro,Da as ct,Db as nt,Dc as sn,E as fo,Ea as it,Eb as Oo,Fa as T,Fb as Qe,Ga as Co,Gb as Je,Ha as ye,Hb as To,Ia as wo,J as Ji,Jb as Ct,K as go,Kb as wt,L as tn,La as k,Lb as Po,M as _o,Ma as x,N as Nt,Na as g,Nb as we,O as Ye,Oa as q,Ob as Vo,P as Et,Pa as ot,Pb as Mt,Q as Kt,Qa as Mo,Qb as j,R as qe,Rb as on,Sa as xe,Sb as No,T as Rt,Ta as Eo,Tb as ti,U as v,Ub as rn,V as y,Va as zt,Vb as Lo,Wa as Z,Wb as Bo,X as f,Xa as Q,Xb as zo,Y as ve,Ya as J,Yb as jo,Z as s,Za as w,Zb as Ho,_a as m,_b as Uo,a as _,aa as Zt,ab as at,ac as Wo,b as tt,bb as _t,c as rt,ca as X,cb as bt,cc as Go,da as K,db as yt,e as Ue,ea as en,eb as Ke,f as C,fa as Y,fb as Ze,fc as Yo,g as lo,ga as O,gb as xt,h as co,hb as jt,i as mo,ib as F,j as lt,ja as B,jb as ko,k as uo,ka as M,kb as A,kc as qo,la as $e,lb as $,lc as St,mb as D,mc as $o,n as mt,nb as Ht,oa as et,ob as Ut,pa as Lt,pb as V,qa as gt,qb as N,ra as Bt,rb as Do,rc as Xo,s as We,sa as E,sb as So,t as Xt,ta as Qt,tb as nn,u as ut,ua as vo,ub as Ce,uc as an,v as Zi,va as bo,vb as S,w as ho,wa as Xe,wb as kt,xa as yo,xb as R,xc as Ko,y as po,ya as Jt,yb as Dt,z as Ge,za as xo,zb as Io}from"./chunk-I4DBKGMD.js";var ei=$o("bookmarks"),us=St(ei,n=>n.bookmarks),Qo=St(ei,n=>n.loading),zc=St(ei,n=>n.error),hs=St(ei,n=>n.search),ln=St(us,hs,(n,i)=>{if(!i)return n;let t=i.toLowerCase();return n.filter(e=>e.title.toLowerCase().includes(t)||e.url.toLowerCase().includes(t))}),cn=St(ln,n=>{let i=new Date().toDateString();return n.filter(t=>new Date(t.createdAt).toDateString()===i)}),dn=St(ln,n=>{let i=new Date;i.setDate(i.getDate()-1);let t=i.toDateString();return n.filter(e=>new Date(e.createdAt).toDateString()===t)}),Jo=St(ln,cn,dn,(n,i,t)=>n.filter(e=>!i.includes(e)&&!t.includes(e)));var ps=new f("cdk-dir-doc",{providedIn:"root",factory:()=>s(O)}),fs=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function tr(n){let i=n?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?fs.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var Tt=(()=>{class n{get value(){return this.valueSignal()}valueSignal=et("ltr");change=new B;constructor(){let t=s(ps,{optional:!0});if(t){let e=t.body?t.body.dir:null,o=t.documentElement?t.documentElement.dir:null;this.valueSignal.set(tr(e||o||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(e){return new(e||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var z=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=x({type:n});static \u0275inj=y({})}return n})();var gs=["*"];var _s=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],vs=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],bs=new f("MAT_CARD_CONFIG"),er=(()=>{class n{appearance;constructor(){let t=s(bs,{optional:!0});this.appearance=t?.appearance||"raised"}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=k({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(e,o){e&2&&S("mat-mdc-card-outlined",o.appearance==="outlined")("mdc-card--outlined",o.appearance==="outlined")("mat-mdc-card-filled",o.appearance==="filled")("mdc-card--filled",o.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:gs,decls:1,vars:0,template:function(e,o){e&1&&($(),D(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return n})(),ir=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=g({type:n,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return n})();var nr=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=g({type:n,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return n})();var or=(()=>{class n{align="start";static \u0275fac=function(e){return new(e||n)};static \u0275dir=g({type:n,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(e,o){e&2&&S("mat-mdc-card-actions-align-end",o.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return n})(),rr=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=k({type:n,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:vs,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(e,o){e&1&&($(_s),D(0),_t(1,"div",0),D(2,1),bt(),D(3,2))},encapsulation:2,changeDetection:0})}return n})();var ar=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=g({type:n,selectors:[["","mat-card-avatar",""],["","matCardAvatar",""]],hostAttrs:[1,"mat-mdc-card-avatar"]})}return n})();var ii=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=x({type:n});static \u0275inj=y({imports:[z]})}return n})();var ni=new WeakMap,ht=(()=>{class n{_appRef;_injector=s(Y);_environmentInjector=s(Zt);load(t){let e=this._appRef=this._appRef||this._injector.get(zt),o=ni.get(e);o||(o={loaders:new Set,refs:[]},ni.set(e,o),e.onDestroy(()=>{ni.get(e)?.refs.forEach(r=>r.destroy()),ni.delete(e)})),o.loaders.has(t)||(o.loaders.add(t),o.refs.push(ti(t,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var oi;function xs(){if(oi===void 0&&(oi=null,typeof window<"u")){let n=window;n.trustedTypes!==void 0&&(oi=n.trustedTypes.createPolicy("angular#components",{createHTML:i=>i}))}return oi}function ee(n){return xs()?.createHTML(n)||n}function sr(n){return Error(`Unable to find icon with the name "${n}"`)}function Cs(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function lr(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function cr(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var It=class{url;svgText;options;svgElement=null;constructor(i,t,e){this.url=i,this.svgText=t,this.options=e}},mr=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(t,e,o,r){this._httpClient=t,this._sanitizer=e,this._errorHandler=r,this._document=o}addSvgIcon(t,e,o){return this.addSvgIconInNamespace("",t,e,o)}addSvgIconLiteral(t,e,o){return this.addSvgIconLiteralInNamespace("",t,e,o)}addSvgIconInNamespace(t,e,o,r){return this._addSvgIconConfig(t,e,new It(o,null,r))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,o,r){let a=this._sanitizer.sanitize(Jt.HTML,o);if(!a)throw cr(o);let l=ee(a);return this._addSvgIconConfig(t,e,new It("",l,r))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,o){return this._addSvgIconSetConfig(t,new It(e,null,o))}addSvgIconSetLiteralInNamespace(t,e,o){let r=this._sanitizer.sanitize(Jt.HTML,e);if(!r)throw cr(e);let a=ee(r);return this._addSvgIconSetConfig(t,new It("",a,o))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(Jt.RESOURCE_URL,t);if(!e)throw lr(t);let o=this._cachedIconsByUrl.get(e);return o?lt(ri(o)):this._loadSvgIconFromConfig(new It(t,null)).pipe(Kt(r=>this._cachedIconsByUrl.set(e,r)),mt(r=>ri(r)))}getNamedSvgIcon(t,e=""){let o=dr(e,t),r=this._svgIconConfigs.get(o);if(r)return this._getSvgFromConfig(r);if(r=this._getIconConfigFromResolvers(e,t),r)return this._svgIconConfigs.set(o,r),this._getSvgFromConfig(r);let a=this._iconSetConfigs.get(e);return a?this._getSvgFromIconSetConfigs(t,a):uo(sr(o))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?lt(ri(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(mt(e=>ri(e)))}_getSvgFromIconSetConfigs(t,e){let o=this._extractIconWithNameFromAnySet(t,e);if(o)return lt(o);let r=e.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(ho(l=>{let h=`Loading icon set URL: ${this._sanitizer.sanitize(Jt.RESOURCE_URL,a.url)} failed: ${l.message}`;return this._errorHandler.handleError(new Error(h)),lt(null)})));return We(r).pipe(mt(()=>{let a=this._extractIconWithNameFromAnySet(t,e);if(!a)throw sr(t);return a}))}_extractIconWithNameFromAnySet(t,e){for(let o=e.length-1;o>=0;o--){let r=e[o];if(r.svgText&&r.svgText.toString().indexOf(t)>-1){let a=this._svgElementFromConfig(r),l=this._extractSvgIconFromSet(a,t,r.options);if(l)return l}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(Kt(e=>t.svgText=e),mt(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?lt(null):this._fetchIcon(t).pipe(Kt(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,o){let r=t.querySelector(`[id="${e}"]`);if(!r)return null;let a=r.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,o);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),o);let l=this._svgElementFromString(ee("<svg></svg>"));return l.appendChild(a),this._setSvgAttributes(l,o)}_svgElementFromString(t){let e=this._document.createElement("DIV");e.innerHTML=t;let o=e.querySelector("svg");if(!o)throw Error("<svg> tag not found");return o}_toSvgElement(t){let e=this._svgElementFromString(ee("<svg></svg>")),o=t.attributes;for(let r=0;r<o.length;r++){let{name:a,value:l}=o[r];a!=="id"&&e.setAttribute(a,l)}for(let r=0;r<t.childNodes.length;r++)t.childNodes[r].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[r].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){let{url:e,options:o}=t,r=o?.withCredentials??!1;if(!this._httpClient)throw Cs();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let a=this._sanitizer.sanitize(Jt.RESOURCE_URL,e);if(!a)throw lr(e);let l=this._inProgressUrlFetches.get(a);if(l)return l;let d=this._httpClient.get(a,{responseType:"text",withCredentials:r}).pipe(mt(h=>ee(h)),fo(()=>this._inProgressUrlFetches.delete(a)),go());return this._inProgressUrlFetches.set(a,d),d}_addSvgIconConfig(t,e,o){return this._svgIconConfigs.set(dr(t,e),o),this}_addSvgIconSetConfig(t,e){let o=this._iconSetConfigs.get(t);return o?o.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let o=0;o<this._resolvers.length;o++){let r=this._resolvers[o](e,t);if(r)return ws(r)?new It(r.url,null,r.options):new It(r,null)}}static \u0275fac=function(e){return new(e||n)(ve(Go,8),ve(Yo),ve(O,8),ve($e))};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function ri(n){return n.cloneNode(!0)}function dr(n,i){return n+":"+i}function ws(n){return!!(n.url&&n.options)}var Ms=["*"],Es=new f("MAT_ICON_DEFAULT_OPTIONS"),ks=new f("mat-icon-location",{providedIn:"root",factory:()=>{let n=s(O),i=n?n.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),ur=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Ds=ur.map(n=>`[${n}]`).join(", "),Ss=/^url\(['"]?#(.*?)['"]?\)$/,ai=(()=>{class n{_elementRef=s(E);_iconRegistry=s(mr);_location=s(ks);_errorHandler=s($e);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=rt.EMPTY;constructor(){let t=s(new Po("aria-hidden"),{optional:!0}),e=s(Es,{optional:!0});e&&(e.color&&(this.color=this._defaultColor=e.color),e.fontSet&&(this.fontSet=e.fontSet)),t||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];let e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let o=t.childNodes[e];(o.nodeType!==1||o.nodeName.toLowerCase()==="svg")&&o.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(o=>o.length>0);this._previousFontSetClass.forEach(o=>t.classList.remove(o)),e.forEach(o=>t.classList.add(o)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences;e&&e.forEach((o,r)=>{o.forEach(a=>{r.setAttribute(a.name,`url('${t}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(Ds),o=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let r=0;r<e.length;r++)ur.forEach(a=>{let l=e[r],d=l.getAttribute(a),h=d?d.match(Ss):null;if(h){let c=o.get(l);c||(c=[],o.set(l,c)),c.push({name:a,value:h[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,o]=this._splitIconName(t);e&&(this._svgNamespace=e),o&&(this._svgName=o),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(o,e).pipe(Ge(1)).subscribe(r=>this._setSvgElement(r),r=>{let a=`Error retrieving icon ${e}:${o}! ${r.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=k({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(e,o){e&2&&(Z("data-mat-icon-type",o._usingFontIcon()?"font":"svg")("data-mat-icon-name",o._svgName||o.fontIcon)("data-mat-icon-namespace",o._svgNamespace||o.fontSet)("fontIcon",o._usingFontIcon()?o.fontIcon:null),kt(o.color?"mat-"+o.color:""),S("mat-icon-inline",o.inline)("mat-icon-no-color",o.color!=="primary"&&o.color!=="accent"&&o.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",j],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:Ms,decls:1,vars:0,template:function(e,o){e&1&&($(),D(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),si=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=x({type:n});static \u0275inj=y({imports:[z]})}return n})();var Me=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},mn=class extends Me{component;viewContainerRef;injector;projectableNodes;bindings;constructor(i,t,e,o,r){super(),this.component=i,this.viewContainerRef=t,this.injector=e,this.projectableNodes=o,this.bindings=r||null}},ie=class extends Me{templateRef;viewContainerRef;context;injector;constructor(i,t,e,o){super(),this.templateRef=i,this.viewContainerRef=t,this.context=e,this.injector=o}get origin(){return this.templateRef.elementRef}attach(i,t=this.context){return this.context=t,super.attach(i)}detach(){return this.context=void 0,super.detach()}},un=class extends Me{element;constructor(i){super(),this.element=i instanceof E?i.nativeElement:i}},hn=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof mn)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof ie)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof un)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Ee=class extends hn{outletElement;_appRef;_defaultInjector;constructor(i,t,e){super(),this.outletElement=i,this._appRef=t,this._defaultInjector=e}attachComponentPortal(i){let t;if(i.viewContainerRef){let e=i.injector||i.viewContainerRef.injector,o=e.get(wo,null,{optional:!0})||void 0;t=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:e,ngModuleRef:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),this.setDisposeFn(()=>t.destroy())}else{let e=this._appRef,o=i.injector||this._defaultInjector||Y.NULL,r=o.get(Zt,e.injector);t=ti(i.component,{elementInjector:o,environmentInjector:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),e.attachView(t.hostView),this.setDisposeFn(()=>{e.viewCount>0&&e.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=i,t}attachTemplatePortal(i){let t=i.viewContainerRef,e=t.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return e.rootNodes.forEach(o=>this.outletElement.appendChild(o)),e.detectChanges(),this.setDisposeFn(()=>{let o=t.indexOf(e);o!==-1&&t.remove(o)}),this._attachedPortal=i,e}attachDomPortal=i=>{let t=i.element;t.parentNode;let e=this.outletElement.ownerDocument.createComment("dom-portal");t.parentNode.insertBefore(e,t),this.outletElement.appendChild(t),this._attachedPortal=i,super.setDisposeFn(()=>{e.parentNode&&e.parentNode.replaceChild(t,e)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var pr=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=x({type:n});static \u0275inj=y({})}return n})();function Wt(n){return n.buttons===0||n.detail===0}function Gt(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var pn;function fr(){if(pn==null){let n=typeof document<"u"?document.head:null;pn=!!(n&&(n.createShadowRoot||n.attachShadow))}return pn}function fn(n){if(fr()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function st(n){return n.composedPath?n.composedPath()[0]:n.target}var gn;try{gn=typeof Intl<"u"&&Intl.v8BreakIterator}catch{gn=!1}var P=(()=>{class n{_platformId=s(bo);isBrowser=this._platformId?Wo(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||gn)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ke;function gr(){if(ke==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>ke=!0}))}finally{ke=ke||!1}return ke}function ne(n){return gr()?n:!!n.capture}function dt(n){return n instanceof E?n.nativeElement:n}var _r=new f("cdk-input-modality-detector-options"),vr={ignoreKeys:[18,17,224,91,16]},br=650,_n={passive:!0,capture:!0},yr=(()=>{class n{_platform=s(P);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new lo(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(e=>e===t.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=st(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<br||(this._modality.next(Wt(t)?"keyboard":"mouse"),this._mostRecentTarget=st(t))};_onTouchstart=t=>{if(Gt(t)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=st(t)};constructor(){let t=s(M),e=s(O),o=s(_r,{optional:!0});if(this._options=_(_({},vr),o),this.modalityDetected=this._modality.pipe(_o(1)),this.modalityChanged=this.modalityDetected.pipe(Qi()),this._platform.isBrowser){let r=s(ct).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[r.listen(e,"keydown",this._onKeydown,_n),r.listen(e,"mousedown",this._onMousedown,_n),r.listen(e,"touchstart",this._onTouchstart,_n)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static \u0275fac=function(e){return new(e||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),De=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(De||{}),xr=new f("cdk-focus-monitor-default-options"),li=ne({passive:!0,capture:!0}),oe=(()=>{class n{_ngZone=s(M);_platform=s(P);_inputModalityDetector=s(yr);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=s(O);_stopInputModalityDetector=new C;constructor(){let t=s(xr,{optional:!0});this._detectionMode=t?.detectionMode||De.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let e=st(t);for(let o=e;o;o=o.parentElement)t.type==="focus"?this._onFocus(t,o):this._onBlur(t,o)};monitor(t,e=!1){let o=dt(t);if(!this._platform.isBrowser||o.nodeType!==1)return lt();let r=fn(o)||this._document,a=this._elementInfo.get(o);if(a)return e&&(a.checkChildren=!0),a.subject;let l={checkChildren:e,subject:new C,rootNode:r};return this._elementInfo.set(o,l),this._registerGlobalListeners(l),l.subject}stopMonitoring(t){let e=dt(t),o=this._elementInfo.get(e);o&&(o.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(o))}focusVia(t,e,o){let r=dt(t),a=this._document.activeElement;r===a?this._getClosestElementsInfo(r).forEach(([l,d])=>this._originChanged(l,e,d)):(this._setOrigin(e),typeof r.focus=="function"&&r.focus(o))}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===De.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,e){t.classList.toggle("cdk-focused",!!e),t.classList.toggle("cdk-touch-focused",e==="touch"),t.classList.toggle("cdk-keyboard-focused",e==="keyboard"),t.classList.toggle("cdk-mouse-focused",e==="mouse"),t.classList.toggle("cdk-program-focused",e==="program")}_setOrigin(t,e=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&e,this._detectionMode===De.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?br:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(t,e){let o=this._elementInfo.get(e),r=st(t);!o||!o.checkChildren&&e!==r||this._originChanged(e,this._getFocusOrigin(r),o)}_onBlur(t,e){let o=this._elementInfo.get(e);!o||o.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(o,null))}_emitOrigin(t,e){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(e))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let e=t.rootNode,o=this._rootNodeFocusListenerCount.get(e)||0;o||this._ngZone.runOutsideAngular(()=>{e.addEventListener("focus",this._rootNodeFocusAndBlurListener,li),e.addEventListener("blur",this._rootNodeFocusAndBlurListener,li)}),this._rootNodeFocusListenerCount.set(e,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Et(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(t){let e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){let o=this._rootNodeFocusListenerCount.get(e);o>1?this._rootNodeFocusListenerCount.set(e,o-1):(e.removeEventListener("focus",this._rootNodeFocusAndBlurListener,li),e.removeEventListener("blur",this._rootNodeFocusAndBlurListener,li),this._rootNodeFocusListenerCount.delete(e))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,e,o){this._setClasses(t,e),this._emitOrigin(o,e),this._lastFocusOrigin=e}_getClosestElementsInfo(t){let e=[];return this._elementInfo.forEach((o,r)=>{(r===t||o.checkChildren&&r.contains(t))&&e.push([r,o])}),e}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:e,mostRecentModality:o}=this._inputModalityDetector;if(o!=="mouse"||!e||e===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let r=t.labels;if(r){for(let a=0;a<r.length;a++)if(r[a].contains(e))return!0}return!1}static \u0275fac=function(e){return new(e||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function vn(n){return Array.isArray(n)?n:[n]}var Cr=new Set,Yt,bn=(()=>{class n{_platform=s(P);_nonce=s(yo,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):As}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&Is(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Is(n,i){if(!Cr.has(n))try{Yt||(Yt=document.createElement("style"),i&&Yt.setAttribute("nonce",i),Yt.setAttribute("type","text/css"),document.head.appendChild(Yt)),Yt.sheet&&(Yt.sheet.insertRule(`@media ${n} {body{ }}`,0),Cr.add(n))}catch(t){console.error(t)}}function As(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var Fs=(()=>{class n{create(t){return typeof MutationObserver>"u"?null:new MutationObserver(t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var wr=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=x({type:n});static \u0275inj=y({providers:[Fs]})}return n})();var Rs=200,ci=class{_letterKeyStream=new C;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new C;selectedItem=this._selectedItem;constructor(i,t){let e=typeof t?.debounceInterval=="number"?t.debounceInterval:Rs;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(i),this._setupKeyHandler(e)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let t=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(Kt(t=>this._pressedLetters.push(t)),po(i),ut(()=>this._pressedLetters.length>0),mt(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(t=>{for(let e=1;e<this._items.length+1;e++){let o=(this._selectedItemIndex+e)%this._items.length,r=this._items[o];if(!this._skipPredicateFn?.(r)&&r.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(r);break}}this._pressedLetters=[]})}};function di(n,...i){return i.length?i.some(t=>n[t]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var mi=class{_items;_activeItemIndex=et(-1);_activeItem=et(null);_wrap=!1;_typeaheadSubscription=rt.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,t){this._items=i,i instanceof Qt?this._itemChangesSubscription=i.changes.subscribe(e=>this._itemsChanged(e.toArray())):xe(i)&&(this._effectRef=Lt(()=>this._itemsChanged(i()),{injector:t}))}tabOut=new C;change=new C;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new ci(t,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:e=>this._skipPredicateFn(e)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(e=>{this.setActiveItem(e)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,t=10){return this._pageUpAndDown={enabled:i,delta:t},this}setActiveItem(i){let t=this._activeItem();this.updateActiveItem(i),this._activeItem()!==t&&this.change.next(this._activeItemIndex())}onKeydown(i){let t=i.keyCode,o=["altKey","ctrlKey","metaKey","shiftKey"].every(r=>!i[r]||this._allowedModifierKeys.indexOf(r)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&o){this.setNextItemActive();break}else return;case 38:if(this._vertical&&o){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&o){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&o){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&o){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&o){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&o){let r=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(r>0?r:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&o){let r=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(r<a?r:a-1,-1);break}else return;default:(o||di(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let t=this._getItemsArray(),e=typeof i=="number"?i:t.indexOf(i),o=t[e];this._activeItem.set(o??null),this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let t=this._getItemsArray();for(let e=1;e<=t.length;e++){let o=(this._activeItemIndex()+i*e+t.length)%t.length,r=t[o];if(!this._skipPredicateFn(r)){this.setActiveItem(o);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,t){let e=this._getItemsArray();if(e[i]){for(;this._skipPredicateFn(e[i]);)if(i+=t,!e[i])return;this.setActiveItem(i)}}_getItemsArray(){return xe(this._items)?this._items():this._items instanceof Qt?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let t=this._activeItem();if(t){let e=i.indexOf(t);e>-1&&e!==this._activeItemIndex()&&(this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e))}}};var Se=class extends mi{_origin="program";setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var Cn={},pt=class n{_appId=s(vo);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,t=!1){return this._appId!=="ng"&&(i+=this._appId),Cn.hasOwnProperty(i)||(Cn[i]=0),`${i}${t?n._infix+"-":""}${Cn[i]++}`}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})};var ui=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=k({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(e,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var qt;function kr(){if(qt==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return qt=!1,qt;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)qt=!0;else{let n=Element.prototype.scrollTo;n?qt=!/\{\s*\[native code\]\s*\}/.test(n.toString()):qt=!1}}return qt}function wn(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var re,Dr=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Mn(){if(re)return re;if(typeof document!="object"||!document)return re=new Set(Dr),re;let n=document.createElement("input");return re=new Set(Dr.filter(i=>(n.setAttribute("type",i),n.type===i))),re}function H(n){return n==null?"":typeof n=="string"?n:`${n}px`}function ae(n){return n!=null&&`${n}`!="false"}var Os=new f("MATERIAL_ANIMATIONS"),Ir=null;function Ts(){return s(Os,{optional:!0})?.animationsDisabled||s(Xe,{optional:!0})==="NoopAnimations"?"di-disabled":(Ir??=s(bn).matchMedia("(prefers-reduced-motion)").matches,Ir?"reduced-motion":"enabled")}function vt(){return Ts()!=="enabled"}var ft=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(ft||{}),En=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=ft.HIDDEN;constructor(i,t,e,o=!1){this._renderer=i,this.element=t,this.config=e,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}},Ar=ne({passive:!0,capture:!0}),kn=class{_events=new Map;addHandler(i,t,e,o){let r=this._events.get(t);if(r){let a=r.get(e);a?a.add(o):r.set(e,new Set([o]))}else this._events.set(t,new Map([[e,new Set([o])]])),i.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,Ar)})}removeHandler(i,t,e){let o=this._events.get(i);if(!o)return;let r=o.get(t);r&&(r.delete(e),r.size===0&&o.delete(t),o.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,Ar)))}_delegateEventHandler=i=>{let t=st(i);t&&this._events.get(i.type)?.forEach((e,o)=>{(o===t||o.contains(t))&&e.forEach(r=>r.handleEvent(i))})}},Ie={enterDuration:225,exitDuration:150},Ps=800,Fr=ne({passive:!0,capture:!0}),Rr=["mousedown","touchstart"],Or=["mouseup","mouseleave","touchend","touchcancel"],Vs=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=k({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(e,o){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),Ae=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new kn;constructor(i,t,e,o,r){this._target=i,this._ngZone=t,this._platform=o,o.isBrowser&&(this._containerElement=dt(e)),r&&r.get(ht).load(Vs)}fadeInRipple(i,t,e={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=_(_({},Ie),e.animation);e.centered&&(i=o.left+o.width/2,t=o.top+o.height/2);let a=e.radius||Ns(i,t,o),l=i-o.left,d=t-o.top,h=r.enterDuration,c=document.createElement("div");c.classList.add("mat-ripple-element"),c.style.left=`${l-a}px`,c.style.top=`${d-a}px`,c.style.height=`${a*2}px`,c.style.width=`${a*2}px`,e.color!=null&&(c.style.backgroundColor=e.color),c.style.transitionDuration=`${h}ms`,this._containerElement.appendChild(c);let b=window.getComputedStyle(c),L=b.transitionProperty,U=b.transitionDuration,G=L==="none"||U==="0s"||U==="0s, 0s"||o.width===0&&o.height===0,W=new En(this,c,e,G);c.style.transform="scale3d(1, 1, 1)",W.state=ft.FADING_IN,e.persistent||(this._mostRecentTransientRipple=W);let Vt=null;return!G&&(h||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let ao=()=>{Vt&&(Vt.fallbackTimer=null),clearTimeout(so),this._finishRippleTransition(W)},Ki=()=>this._destroyRipple(W),so=setTimeout(Ki,h+100);c.addEventListener("transitionend",ao),c.addEventListener("transitioncancel",Ki),Vt={onTransitionEnd:ao,onTransitionCancel:Ki,fallbackTimer:so}}),this._activeRipples.set(W,Vt),(G||!h)&&this._finishRippleTransition(W),W}fadeOutRipple(i){if(i.state===ft.FADING_OUT||i.state===ft.HIDDEN)return;let t=i.element,e=_(_({},Ie),i.config.animation);t.style.transitionDuration=`${e.exitDuration}ms`,t.style.opacity="0",i.state=ft.FADING_OUT,(i._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let t=dt(i);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,Rr.forEach(e=>{n._eventManager.addHandler(this._ngZone,e,t,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Or.forEach(t=>{this._triggerElement.addEventListener(t,this,Fr)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===ft.FADING_IN?this._startFadeOutTransition(i):i.state===ft.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let t=i===this._mostRecentTransientRipple,{persistent:e}=i.config;i.state=ft.VISIBLE,!e&&(!t||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let t=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=ft.HIDDEN,t!==null&&(i.element.removeEventListener("transitionend",t.onTransitionEnd),i.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),i.element.remove()}_onMousedown(i){let t=Wt(i),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Ps;!this._target.rippleDisabled&&!t&&!e&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!Gt(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=i.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let t=i.state===ft.VISIBLE||i.config.terminateOnPointerUp&&i.state===ft.FADING_IN;!i.config.persistent&&t&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(Rr.forEach(t=>n._eventManager.removeHandler(t,i,this)),this._pointerUpEventsRegistered&&(Or.forEach(t=>i.removeEventListener(t,this,Fr)),this._pointerUpEventsRegistered=!1))}};function Ns(n,i,t){let e=Math.max(Math.abs(n-t.left),Math.abs(n-t.right)),o=Math.max(Math.abs(i-t.top),Math.abs(i-t.bottom));return Math.sqrt(e*e+o*o)}var Dn=new f("mat-ripple-global-options"),Tr=(()=>{class n{_elementRef=s(E);_animationsDisabled=vt();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=s(M),e=s(P),o=s(Dn,{optional:!0}),r=s(Y);this._globalOptions=o||{},this._rippleRenderer=new Ae(this,t,this._elementRef,e,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:_(_(_({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,e=0,o){return typeof t=="number"?this._rippleRenderer.fadeInRipple(t,e,_(_({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,_(_({},this.rippleConfig),t))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=g({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(e,o){e&2&&S("mat-ripple-unbounded",o.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var Bs=20,pi=(()=>{class n{_ngZone=s(M);_platform=s(P);_renderer=s(ct).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new C;_scrolledCount=0;scrollContainers=new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let e=this.scrollContainers.get(t);e&&(e.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=Bs){return this._platform.isBrowser?new Ue(e=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let o=t>0?this._scrolled.pipe(Zi(t)).subscribe(e):this._scrolled.subscribe(e);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):lt()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,e)=>this.deregister(e)),this._scrolled.complete()}ancestorScrolled(t,e){let o=this.getAncestorScrollContainers(t);return this.scrolled(e).pipe(ut(r=>!r||o.indexOf(r)>-1))}getAncestorScrollContainers(t){let e=[];return this.scrollContainers.forEach((o,r)=>{this._scrollableContainsElement(r,t)&&e.push(r)}),e}_scrollableContainsElement(t,e){let o=dt(e),r=t.getElementRef().nativeElement;do if(o==r)return!0;while(o=o.parentElement);return!1}static \u0275fac=function(e){return new(e||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var zs=20,se=(()=>{class n{_platform=s(P);_listeners;_viewportSize=null;_change=new C;_document=s(O);constructor(){let t=s(M),e=s(ct).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=r=>this._change.next(r);this._listeners=[e.listen("window","resize",o),e.listen("window","orientationchange",o)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:e,height:o}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+o,right:t.left+e,height:o,width:e}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,e=this._getWindow(),o=t.documentElement,r=o.getBoundingClientRect(),a=-r.top||t.body?.scrollTop||e.scrollY||o.scrollTop||0,l=-r.left||t.body?.scrollLeft||e.scrollX||o.scrollLeft||0;return{top:a,left:l}}change(t=zs){return t>0?this._change.pipe(Zi(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static \u0275fac=function(e){return new(e||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var hi=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=x({type:n});static \u0275inj=y({})}return n})(),Sn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=x({type:n});static \u0275inj=y({imports:[z,hi,z,hi]})}return n})();var Pr=kr();function Hr(n){return new fi(n.get(se),n.get(O))}var fi=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,t){this._viewportRuler=i,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||"",this._previousHTMLStyles.top=i.style.top||"",i.style.left=H(-this._previousScrollPosition.left),i.style.top=H(-this._previousScrollPosition.top),i.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,t=this._document.body,e=i.style,o=t.style,r=e.scrollBehavior||"",a=o.scrollBehavior||"";this._isEnabled=!1,e.left=this._previousHTMLStyles.left,e.top=this._previousHTMLStyles.top,i.classList.remove("cdk-global-scrollblock"),Pr&&(e.scrollBehavior=o.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Pr&&(e.scrollBehavior=r,o.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let t=this._document.documentElement,e=this._viewportRuler.getViewportSize();return t.scrollHeight>e.height||t.scrollWidth>e.width}};function Ur(n,i){return new gi(n.get(pi),n.get(M),n.get(se),i)}var gi=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,t,e,o){this._scrollDispatcher=i,this._ngZone=t,this._viewportRuler=e,this._config=o}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(ut(t=>!t||!this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Fe=class{enable(){}disable(){}attach(){}};function In(n,i){return i.some(t=>{let e=n.bottom<t.top,o=n.top>t.bottom,r=n.right<t.left,a=n.left>t.right;return e||o||r||a})}function Vr(n,i){return i.some(t=>{let e=n.top<t.top,o=n.bottom>t.bottom,r=n.left<t.left,a=n.right>t.right;return e||o||r||a})}function Ci(n,i){return new _i(n.get(pi),n.get(se),n.get(M),i)}var _i=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,t,e,o){this._scrollDispatcher=i,this._viewportRuler=t,this._ngZone=e,this._config=o}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:e,height:o}=this._viewportRuler.getViewportSize();In(t,[{width:e,height:o,bottom:o,right:e,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Wr=(()=>{class n{_injector=s(Y);constructor(){}noop=()=>new Fe;close=t=>Ur(this._injector,t);block=()=>Hr(this._injector);reposition=t=>Ci(this._injector,t);static \u0275fac=function(e){return new(e||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),le=class{positionStrategy;scrollStrategy=new Fe;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let t=Object.keys(i);for(let e of t)i[e]!==void 0&&(this[e]=i[e])}}};var vi=class{connectionPair;scrollableViewProperties;constructor(i,t){this.connectionPair=i,this.scrollableViewProperties=t}};var Gr=(()=>{class n{_attachedOverlays=[];_document=s(O);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let e=this._attachedOverlays.indexOf(t);e>-1&&this._attachedOverlays.splice(e,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,e,o){return o.observers.length<1?!1:t.eventPredicate?t.eventPredicate(e):!0}static \u0275fac=function(e){return new(e||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Yr=(()=>{class n extends Gr{_ngZone=s(M);_renderer=s(ct).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let e=this._attachedOverlays;for(let o=e.length-1;o>-1;o--){let r=e[o];if(this.canReceiveEvent(r,t,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(t));break}}};static \u0275fac=(()=>{let t;return function(o){return(t||(t=Bt(n)))(o||n)}})();static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),qr=(()=>{class n extends Gr{_platform=s(P);_ngZone=s(M);_renderer=s(ct).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let e=this._document.body,o={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(e,"pointerdown",this._pointerDownListener,o),r.listen(e,"click",this._clickListener,o),r.listen(e,"auxclick",this._clickListener,o),r.listen(e,"contextmenu",this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=e.style.cursor,e.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=st(t)};_clickListener=t=>{let e=st(t),o=t.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:e;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let a=r.length-1;a>-1;a--){let l=r[a],d=l._outsidePointerEvents;if(!(!l.hasAttached()||!this.canReceiveEvent(l,t,d))){if(Nr(l.overlayElement,e)||Nr(l.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>d.next(t)):d.next(t)}}};static \u0275fac=(()=>{let t;return function(o){return(t||(t=Bt(n)))(o||n)}})();static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Nr(n,i){let t=typeof ShadowRoot<"u"&&ShadowRoot,e=i;for(;e;){if(e===n)return!0;e=t&&e instanceof ShadowRoot?e.host:e.parentNode}return!1}var $r=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=k({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(e,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),Xr=(()=>{class n{_platform=s(P);_containerElement;_document=s(O);_styleLoader=s(ht);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t="cdk-overlay-container";if(this._platform.isBrowser||wn()){let o=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let r=0;r<o.length;r++)o[r].remove()}let e=this._document.createElement("div");e.classList.add(t),wn()?e.setAttribute("platform","test"):this._platform.isBrowser||e.setAttribute("platform","server"),this._document.body.appendChild(e),this._containerElement=e}_loadStyles(){this._styleLoader.load($r)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),An=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,t,e,o){this._renderer=t,this._ngZone=e,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=t.listen(this.element,"click",o)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Fn(n){return n&&n.nodeType===1}var bi=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new C;_attachments=new C;_detachments=new C;_positionStrategy;_scrollStrategy;_locationChanges=rt.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new C;_outsidePointerEvents=new C;_afterNextRenderRef;constructor(i,t,e,o,r,a,l,d,h,c=!1,b,L){this._portalOutlet=i,this._host=t,this._pane=e,this._config=o,this._ngZone=r,this._keyboardDispatcher=a,this._document=l,this._location=d,this._outsideClickDispatcher=h,this._animationsDisabled=c,this._injector=b,this._renderer=L,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Ot(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof t?.onDestroy=="function"&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=_(_({},this._config),i),this._updateElementSize()}setDirection(i){this._config=tt(_({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=H(this._config.width),i.height=H(this._config.height),i.minWidth=H(this._config.minWidth),i.minHeight=H(this._config.minHeight),i.maxWidth=H(this._config.maxWidth),i.maxHeight=H(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Fn(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new An(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,t,e){let o=vn(t||[]).filter(r=>!!r);o.length&&(e?i.classList.add(...o):i.classList.remove(...o))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=Ot(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(t){if(i)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}},Lr="cdk-overlay-connected-position-bounding-box",js=/([A-Za-z%]+)$/;function wi(n,i){return new yi(i,n.get(se),n.get(O),n.get(P),n.get(Xr))}var yi=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new C;_resizeSubscription=rt.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,t,e,o,r){this._viewportRuler=t,this._document=e,this._platform=o,this._overlayContainer=r,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(Lr),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,t=this._overlayRect,e=this._viewportRect,o=this._containerRect,r=[],a;for(let l of this._preferredPositions){let d=this._getOriginPoint(i,o,l),h=this._getOverlayPoint(d,t,l),c=this._getOverlayFit(h,t,e,l);if(c.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(l,d);return}if(this._canFitWithFlexibleDimensions(c,h,e)){r.push({position:l,origin:d,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(d,l)});continue}(!a||a.overlayFit.visibleArea<c.visibleArea)&&(a={overlayFit:c,overlayPoint:h,originPoint:d,position:l,overlayRect:t})}if(r.length){let l=null,d=-1;for(let h of r){let c=h.boundingBoxRect.width*h.boundingBoxRect.height*(h.position.weight||1);c>d&&(d=c,l=h)}this._isPushed=!1,this._applyPosition(l.position,l.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&$t(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Lr),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof E?this._origin.nativeElement:Fn(this._origin)?this._origin:null}_getOriginPoint(i,t,e){let o;if(e.originX=="center")o=i.left+i.width/2;else{let a=this._isRtl()?i.right:i.left,l=this._isRtl()?i.left:i.right;o=e.originX=="start"?a:l}t.left<0&&(o-=t.left);let r;return e.originY=="center"?r=i.top+i.height/2:r=e.originY=="top"?i.top:i.bottom,t.top<0&&(r-=t.top),{x:o,y:r}}_getOverlayPoint(i,t,e){let o;e.overlayX=="center"?o=-t.width/2:e.overlayX==="start"?o=this._isRtl()?-t.width:0:o=this._isRtl()?0:-t.width;let r;return e.overlayY=="center"?r=-t.height/2:r=e.overlayY=="top"?0:-t.height,{x:i.x+o,y:i.y+r}}_getOverlayFit(i,t,e,o){let r=zr(t),{x:a,y:l}=i,d=this._getOffset(o,"x"),h=this._getOffset(o,"y");d&&(a+=d),h&&(l+=h);let c=0-a,b=a+r.width-e.width,L=0-l,U=l+r.height-e.height,G=this._subtractOverflows(r.width,c,b),W=this._subtractOverflows(r.height,L,U),Vt=G*W;return{visibleArea:Vt,isCompletelyWithinViewport:r.width*r.height===Vt,fitsInViewportVertically:W===r.height,fitsInViewportHorizontally:G==r.width}}_canFitWithFlexibleDimensions(i,t,e){if(this._hasFlexibleDimensions){let o=e.bottom-t.y,r=e.right-t.x,a=Br(this._overlayRef.getConfig().minHeight),l=Br(this._overlayRef.getConfig().minWidth),d=i.fitsInViewportVertically||a!=null&&a<=o,h=i.fitsInViewportHorizontally||l!=null&&l<=r;return d&&h}return!1}_pushOverlayOnScreen(i,t,e){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let o=zr(t),r=this._viewportRect,a=Math.max(i.x+o.width-r.width,0),l=Math.max(i.y+o.height-r.height,0),d=Math.max(r.top-e.top-i.y,0),h=Math.max(r.left-e.left-i.x,0),c=0,b=0;return o.width<=r.width?c=h||-a:c=i.x<this._getViewportMarginStart()?r.left-e.left-i.x:0,o.height<=r.height?b=d||-l:b=i.y<this._getViewportMarginTop()?r.top-e.top-i.y:0,this._previousPushAmount={x:c,y:b},{x:i.x+c,y:i.y+b}}_applyPosition(i,t){if(this._setTransformOrigin(i),this._setOverlayElementStyles(t,i),this._setBoundingBoxStyles(t,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let e=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!Hs(this._lastScrollVisibility,e)){let o=new vi(i,e);this._positionChanges.next(o)}this._lastScrollVisibility=e}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),e,o=i.overlayY;i.overlayX==="center"?e="center":this._isRtl()?e=i.overlayX==="start"?"right":"left":e=i.overlayX==="start"?"left":"right";for(let r=0;r<t.length;r++)t[r].style.transformOrigin=`${e} ${o}`}_calculateBoundingBoxRect(i,t){let e=this._viewportRect,o=this._isRtl(),r,a,l;if(t.overlayY==="top")a=i.y,r=e.height-a+this._getViewportMarginBottom();else if(t.overlayY==="bottom")l=e.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=e.height-l+this._getViewportMarginTop();else{let U=Math.min(e.bottom-i.y+e.top,i.y),G=this._lastBoundingBoxSize.height;r=U*2,a=i.y-U,r>G&&!this._isInitialRender&&!this._growAfterOpen&&(a=i.y-G/2)}let d=t.overlayX==="start"&&!o||t.overlayX==="end"&&o,h=t.overlayX==="end"&&!o||t.overlayX==="start"&&o,c,b,L;if(h)L=e.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),c=i.x-this._getViewportMarginStart();else if(d)b=i.x,c=e.right-i.x-this._getViewportMarginEnd();else{let U=Math.min(e.right-i.x+e.left,i.x),G=this._lastBoundingBoxSize.width;c=U*2,b=i.x-U,c>G&&!this._isInitialRender&&!this._growAfterOpen&&(b=i.x-G/2)}return{top:a,left:b,bottom:l,right:L,width:c,height:r}}_setBoundingBoxStyles(i,t){let e=this._calculateBoundingBoxRect(i,t);!this._isInitialRender&&!this._growAfterOpen&&(e.height=Math.min(e.height,this._lastBoundingBoxSize.height),e.width=Math.min(e.width,this._lastBoundingBoxSize.width));let o={};if(this._hasExactPosition())o.top=o.left="0",o.bottom=o.right="auto",o.maxHeight=o.maxWidth="",o.width=o.height="100%";else{let r=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;o.width=H(e.width),o.height=H(e.height),o.top=H(e.top)||"auto",o.bottom=H(e.bottom)||"auto",o.left=H(e.left)||"auto",o.right=H(e.right)||"auto",t.overlayX==="center"?o.alignItems="center":o.alignItems=t.overlayX==="end"?"flex-end":"flex-start",t.overlayY==="center"?o.justifyContent="center":o.justifyContent=t.overlayY==="bottom"?"flex-end":"flex-start",r&&(o.maxHeight=H(r)),a&&(o.maxWidth=H(a))}this._lastBoundingBoxSize=e,$t(this._boundingBox.style,o)}_resetBoundingBoxStyles(){$t(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){$t(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(i,t){let e={},o=this._hasExactPosition(),r=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(o){let c=this._viewportRuler.getViewportScrollPosition();$t(e,this._getExactOverlayY(t,i,c)),$t(e,this._getExactOverlayX(t,i,c))}else e.position="static";let l="",d=this._getOffset(t,"x"),h=this._getOffset(t,"y");d&&(l+=`translateX(${d}px) `),h&&(l+=`translateY(${h}px)`),e.transform=l.trim(),a.maxHeight&&(o?e.maxHeight=H(a.maxHeight):r&&(e.maxHeight="")),a.maxWidth&&(o?e.maxWidth=H(a.maxWidth):r&&(e.maxWidth="")),$t(this._pane.style,e)}_getExactOverlayY(i,t,e){let o={top:"",bottom:""},r=this._getOverlayPoint(t,this._overlayRect,i);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,e)),i.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;o.bottom=`${a-(r.y+this._overlayRect.height)}px`}else o.top=H(r.y);return o}_getExactOverlayX(i,t,e){let o={left:"",right:""},r=this._getOverlayPoint(t,this._overlayRect,i);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,e));let a;if(this._isRtl()?a=i.overlayX==="end"?"left":"right":a=i.overlayX==="end"?"right":"left",a==="right"){let l=this._document.documentElement.clientWidth;o.right=`${l-(r.x+this._overlayRect.width)}px`}else o.left=H(r.x);return o}_getScrollVisibility(){let i=this._getOriginRect(),t=this._pane.getBoundingClientRect(),e=this._scrollables.map(o=>o.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Vr(i,e),isOriginOutsideView:In(i,e),isOverlayClipped:Vr(t,e),isOverlayOutsideView:In(t,e)}}_subtractOverflows(i,...t){return t.reduce((e,o)=>e-Math.max(o,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,e=this._viewportRuler.getViewportScrollPosition();return{top:e.top+this._getViewportMarginTop(),left:e.left+this._getViewportMarginStart(),right:e.left+i-this._getViewportMarginEnd(),bottom:e.top+t-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,t){return t==="x"?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&vn(i).forEach(t=>{t!==""&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof E)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let t=i.width||0,e=i.height||0;return{top:i.y,bottom:i.y+e,left:i.x,right:i.x+t,height:e,width:t}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",t=this._overlayContainer.getContainerElement();i&&(t.style.display="block");let e=t.getBoundingClientRect();return i&&(t.style.display=""),e}};function $t(n,i){for(let t in i)i.hasOwnProperty(t)&&(n[t]=i[t]);return n}function Br(n){if(typeof n!="number"&&n!=null){let[i,t]=n.split(js);return!t||t==="px"?parseFloat(i):null}return n||null}function zr(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function Hs(n,i){return n===i?!0:n.isOriginClipped===i.isOriginClipped&&n.isOriginOutsideView===i.isOriginOutsideView&&n.isOverlayClipped===i.isOverlayClipped&&n.isOverlayOutsideView===i.isOverlayOutsideView}var jr="cdk-global-overlay-wrapper";function Kr(n){return new xi}var xi=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let t=i.getConfig();this._overlayRef=i,this._width&&!t.width&&i.updateSize({width:this._width}),this._height&&!t.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(jr),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,e=this._overlayRef.getConfig(),{width:o,height:r,maxWidth:a,maxHeight:l}=e,d=(o==="100%"||o==="100vw")&&(!a||a==="100%"||a==="100vw"),h=(r==="100%"||r==="100vh")&&(!l||l==="100%"||l==="100vh"),c=this._xPosition,b=this._xOffset,L=this._overlayRef.getConfig().direction==="rtl",U="",G="",W="";d?W="flex-start":c==="center"?(W="center",L?G=b:U=b):L?c==="left"||c==="end"?(W="flex-end",U=b):(c==="right"||c==="start")&&(W="flex-start",G=b):c==="left"||c==="start"?(W="flex-start",U=b):(c==="right"||c==="end")&&(W="flex-end",G=b),i.position=this._cssPosition,i.marginLeft=d?"0":U,i.marginTop=h?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=d?"0":G,t.justifyContent=W,t.alignItems=h?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,e=t.style;t.classList.remove(jr),e.justifyContent=e.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}},Zr=(()=>{class n{_injector=s(Y);constructor(){}global(){return Kr()}flexibleConnectedTo(t){return wi(this._injector,t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Qr=new f("OVERLAY_DEFAULT_CONFIG");function Mi(n,i){n.get(ht).load($r);let t=n.get(Xr),e=n.get(O),o=n.get(pt),r=n.get(zt),a=n.get(Tt),l=n.get(it,null,{optional:!0})||n.get(ct).createRenderer(null,null),d=new le(i),h=n.get(Qr,null,{optional:!0})?.usePopover??!0;d.direction=d.direction||a.value,"showPopover"in e.body?d.usePopover=i?.usePopover??h:d.usePopover=!1;let c=e.createElement("div"),b=e.createElement("div");c.id=o.getId("cdk-overlay-"),c.classList.add("cdk-overlay-pane"),b.appendChild(c),d.usePopover&&(b.setAttribute("popover","manual"),b.classList.add("cdk-overlay-popover"));let L=d.usePopover?d.positionStrategy?.getPopoverInsertionPoint?.():null;return Fn(L)?L.after(b):L?.type==="parent"?L.element.appendChild(b):t.getContainerElement().appendChild(b),new bi(new Ee(c,r,n),b,c,d,n.get(M),n.get(Yr),e,n.get(Lo),n.get(qr),i?.disableAnimations??n.get(Xe,null,{optional:!0})==="NoopAnimations",n.get(Zt),l)}var Jr=(()=>{class n{scrollStrategies=s(Wr);_positionBuilder=s(Zr);_injector=s(Y);constructor(){}create(t){return Mi(this._injector,t)}position(){return this._positionBuilder}static \u0275fac=function(e){return new(e||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Rn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=x({type:n});static \u0275inj=y({providers:[Jr],imports:[z,pr,Sn,Sn]})}return n})();var ce=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=x({type:n});static \u0275inj=y({imports:[z]})}return n})();var Gs=["mat-menu-item",""],Ys=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],qs=["mat-icon, [matMenuItemIcon]","*"];function $s(n,i){n&1&&(en(),m(0,"svg",2),at(1,"polygon",3),u())}var Xs=["*"];function Ks(n,i){if(n&1){let t=xt();_t(0,"div",0),ko("click",function(){X(t);let o=A();return K(o.closed.emit("click"))})("animationstart",function(o){X(t);let r=A();return K(r._onAnimationStart(o.animationName))})("animationend",function(o){X(t);let r=A();return K(r._onAnimationDone(o.animationName))})("animationcancel",function(o){X(t);let r=A();return K(r._onAnimationDone(o.animationName))}),_t(1,"div",1),D(2),bt()()}if(n&2){let t=A();kt(t._classList),S("mat-menu-panel-animations-disabled",t._animationsDisabled)("mat-menu-panel-exit-animation",t._panelAnimationState==="void")("mat-menu-panel-animating",t._isAnimating()),jt("id",t.panelId),Z("aria-label",t.ariaLabel||null)("aria-labelledby",t.ariaLabelledby||null)("aria-describedby",t.ariaDescribedby||null)}}var Pn=new f("MAT_MENU_PANEL"),Re=(()=>{class n{_elementRef=s(E);_document=s(O);_focusMonitor=s(oe);_parentMenu=s(Pn,{optional:!0});_changeDetectorRef=s(Mt);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new C;_focused=new C;_highlighted=!1;_triggersSubmenu=!1;constructor(){s(ht).load(ui),this._parentMenu?.addItem?.(this)}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._getHostElement(),t,e):this._getHostElement().focus(e),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let t=this._elementRef.nativeElement.cloneNode(!0),e=t.querySelectorAll("mat-icon, .material-icons");for(let o=0;o<e.length;o++)e[o].remove();return t.textContent?.trim()||""}_setHighlighted(t){this._highlighted=t,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(t){this._triggersSubmenu=t,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=k({type:n,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(e,o){e&1&&F("click",function(a){return o._checkDisabled(a)})("mouseenter",function(){return o._handleMouseEnter()}),e&2&&(Z("role",o.role)("tabindex",o._getTabIndex())("aria-disabled",o.disabled)("disabled",o.disabled||null),S("mat-mdc-menu-item-highlighted",o._highlighted)("mat-mdc-menu-item-submenu-trigger",o._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",j],disableRipple:[2,"disableRipple","disableRipple",j]},exportAs:["matMenuItem"],attrs:Gs,ngContentSelectors:qs,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(e,o){e&1&&($(Ys),D(0),m(1,"span",0),D(2,1),u(),at(3,"div",1),Q(4,$s,2,0,":svg:svg",2)),e&2&&(p(3),w("matRippleDisabled",o.disableRipple||o.disabled)("matRippleTrigger",o._getHostElement()),p(),J(o._triggersSubmenu?4:-1))},dependencies:[Tr],encapsulation:2,changeDetection:0})}return n})();var Zs=new f("MatMenuContent");var Qs=new f("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),On="_mat-menu-enter",Ei="_mat-menu-exit",me=(()=>{class n{_elementRef=s(E);_changeDetectorRef=s(Mt);_injector=s(Y);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=vt();_allItems;_directDescendantItems=new Qt;_classList={};_panelAnimationState="void";_animationDone=new C;_isAnimating=et(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(t){this._xPosition=t,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(t){this._yPosition=t,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(t){let e=this._previousPanelClass,o=_({},this._classList);e&&e.length&&e.split(" ").forEach(r=>{o[r]=!1}),this._previousPanelClass=t,t&&t.length&&(t.split(" ").forEach(r=>{o[r]=!0}),this._elementRef.nativeElement.className=""),this._classList=o}_previousPanelClass;get classList(){return this.panelClass}set classList(t){this.panelClass=t}closed=new B;close=this.closed;panelId=s(pt).getId("mat-menu-panel-");constructor(){let t=s(Qs);this.overlayPanelClass=t.overlayPanelClass||"",this._xPosition=t.xPosition,this._yPosition=t.yPosition,this.backdropClass=t.backdropClass,this.overlapTrigger=t.overlapTrigger,this.hasBackdrop=t.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Se(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(Nt(this._directDescendantItems),Ye(t=>Xt(...t.map(e=>e._focused)))).subscribe(t=>this._keyManager.updateActiveItem(t)),this._directDescendantItems.changes.subscribe(t=>{let e=this._keyManager;if(this._panelAnimationState==="enter"&&e.activeItem?._hasFocus()){let o=t.toArray(),r=Math.max(0,Math.min(o.length-1,e.activeItemIndex||0));o[r]&&!o[r].disabled?e.setActiveItem(r):e.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(Nt(this._directDescendantItems),Ye(e=>Xt(...e.map(o=>o._hovered))))}addItem(t){}removeItem(t){}_handleKeydown(t){let e=t.keyCode,o=this._keyManager;switch(e){case 27:di(t)||(t.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(e===38||e===40)&&o.setFocusOrigin("keyboard"),o.onKeydown(t);return}}focusFirstItem(t="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Ot(()=>{let e=this._resolvePanel();if(!e||!e.contains(document.activeElement)){let o=this._keyManager;o.setFocusOrigin(t).setFirstItemActive(),!o.activeItem&&e&&e.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(t){}setPositionClasses(t=this.xPosition,e=this.yPosition){this._classList=tt(_({},this._classList),{"mat-menu-before":t==="before","mat-menu-after":t==="after","mat-menu-above":e==="above","mat-menu-below":e==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(t){let e=t===Ei;(e||t===On)&&(e&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(e?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(t){(t===On||t===Ei)&&this._isAnimating.set(!0)}_setIsOpen(t){if(this._panelAnimationState=t?"enter":"void",t){if(this._keyManager.activeItemIndex===0){let e=this._resolvePanel();e&&(e.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Ei),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(t?On:Ei)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(Nt(this._allItems)).subscribe(t=>{this._directDescendantItems.reset(t.filter(e=>e._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let t=null;return this._directDescendantItems.length&&(t=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),t}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=k({type:n,selectors:[["mat-menu"]],contentQueries:function(e,o,r){if(e&1&&Ht(r,Zs,5)(r,Re,5)(r,Re,4),e&2){let a;V(a=N())&&(o.lazyContent=a.first),V(a=N())&&(o._allItems=a),V(a=N())&&(o.items=a)}},viewQuery:function(e,o){if(e&1&&Ut(be,5),e&2){let r;V(r=N())&&(o.templateRef=r.first)}},hostVars:3,hostBindings:function(e,o){e&2&&Z("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",j],hasBackdrop:[2,"hasBackdrop","hasBackdrop",t=>t==null?null:j(t)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[nt([{provide:Pn,useExisting:n}])],ngContentSelectors:Xs,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(e,o){e&1&&($(),Mo(0,Ks,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),Js=new f("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(Y);return()=>Ci(n)}});var de=new WeakMap,tl=(()=>{class n{_canHaveBackdrop;_element=s(E);_viewContainerRef=s(ye);_menuItemInstance=s(Re,{optional:!0,self:!0});_dir=s(Tt,{optional:!0});_focusMonitor=s(oe);_ngZone=s(M);_injector=s(Y);_scrollStrategy=s(Js);_changeDetectorRef=s(Mt);_animationsDisabled=vt();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=rt.EMPTY;_menuCloseSubscription=rt.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(t){t!==this._menuInternal&&(this._menuInternal=t,this._menuCloseSubscription.unsubscribe(),t&&(this._parentMaterialMenu,this._menuCloseSubscription=t.close.subscribe(e=>{this._destroyMenu(e),(e==="click"||e==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(e)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(t){this._canHaveBackdrop=t;let e=s(Pn,{optional:!0});this._parentMaterialMenu=e instanceof me?e:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&de.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(t){if(this._triggerIsAriaDisabled())return;let e=this._menu;if(this._menuOpen||!e)return;this._pendingRemoval?.unsubscribe();let o=de.get(e);de.set(e,this),o&&o!==this&&o._closeMenu();let r=this._createOverlay(e),a=r.getConfig(),l=a.positionStrategy;this._setPosition(e,l),this._canHaveBackdrop?a.hasBackdrop=e.hasBackdrop==null?!this._triggersSubmenu():e.hasBackdrop:a.hasBackdrop=e.hasBackdrop??!1,r.hasAttached()||(r.attach(this._getPortal(e)),e.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),e.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,e.direction=this.dir,t&&e.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),e instanceof me&&(e._setIsOpen(!0),e._directDescendantItems.changes.pipe(Et(e.close)).subscribe(()=>{l.withLockedPosition(!1).reapplyLastPosition(),l.withLockedPosition(!0)}))}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._element,t,e):this._element.nativeElement.focus(e)}_destroyMenu(t){let e=this._overlayRef,o=this._menu;!e||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),o instanceof me&&this._ownsMenu(o)?(this._pendingRemoval=o._animationDone.pipe(Ge(1)).subscribe(()=>{e.detach(),de.has(o)||o.lazyContent?.detach()}),o._setIsOpen(!1)):(e.detach(),o?.lazyContent?.detach()),o&&this._ownsMenu(o)&&de.delete(o),this.restoreFocus&&(t==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(t){t!==this._menuOpen&&(this._menuOpen=t,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(t),this._changeDetectorRef.markForCheck())}_createOverlay(t){if(!this._overlayRef){let e=this._getOverlayConfig(t);this._subscribeToPositions(t,e.positionStrategy),this._overlayRef=Mi(this._injector,e),this._overlayRef.keydownEvents().subscribe(o=>{this._menu instanceof me&&this._menu._handleKeydown(o)})}return this._overlayRef}_getOverlayConfig(t){return new le({positionStrategy:wi(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:t.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:t.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(t,e){t.setPositionClasses&&e.positionChanges.subscribe(o=>{this._ngZone.run(()=>{let r=o.connectionPair.overlayX==="start"?"after":"before",a=o.connectionPair.overlayY==="top"?"below":"above";t.setPositionClasses(r,a)})})}_setPosition(t,e){let[o,r]=t.xPosition==="before"?["end","start"]:["start","end"],[a,l]=t.yPosition==="above"?["bottom","top"]:["top","bottom"],[d,h]=[a,l],[c,b]=[o,r],L=0;if(this._triggersSubmenu()){if(b=o=t.xPosition==="before"?"start":"end",r=c=o==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let U=this._parentMaterialMenu.items.first;this._parentInnerPadding=U?U._getHostElement().offsetTop:0}L=a==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else t.overlapTrigger||(d=a==="top"?"bottom":"top",h=l==="top"?"bottom":"top");e.withPositions([{originX:o,originY:d,overlayX:c,overlayY:a,offsetY:L},{originX:r,originY:d,overlayX:b,overlayY:a,offsetY:L},{originX:o,originY:h,overlayX:c,overlayY:l,offsetY:-L},{originX:r,originY:h,overlayX:b,overlayY:l,offsetY:-L}])}_menuClosingActions(){let t=this._getOutsideClickStream(this._overlayRef),e=this._overlayRef.detachments(),o=this._parentMaterialMenu?this._parentMaterialMenu.closed:lt(),r=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(ut(a=>this._menuOpen&&a!==this._menuItemInstance)):lt();return Xt(t,o,r,e)}_getPortal(t){return(!this._portal||this._portal.templateRef!==t.templateRef)&&(this._portal=new ie(t.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(t){return de.get(t)===this}_triggerIsAriaDisabled(){return j(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(e){Co()};static \u0275dir=g({type:n})}return n})(),ta=(()=>{class n extends tl{_cleanupTouchstart;_hoverSubscription=rt.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(t){this.menu=t}get menu(){return this._menu}set menu(t){this._menu=t}menuData;restoreFocus=!0;menuOpened=new B;onMenuOpen=this.menuOpened;menuClosed=new B;onMenuClose=this.menuClosed;constructor(){super(!0);let t=s(it);this._cleanupTouchstart=t.listen(this._element.nativeElement,"touchstart",e=>{Gt(e)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(t){return t.backdropClick()}_handleMousedown(t){Wt(t)||(this._openedBy=t.button===0?"mouse":void 0,this.triggersSubmenu()&&t.preventDefault())}_handleKeydown(t){let e=t.keyCode;(e===13||e===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(e===39&&this.dir==="ltr"||e===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(t){this.triggersSubmenu()?(t.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(t=>{t===this._menuItemInstance&&!t.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=g({type:n,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(e,o){e&1&&F("click",function(a){return o._handleClick(a)})("mousedown",function(a){return o._handleMousedown(a)})("keydown",function(a){return o._handleKeydown(a)}),e&2&&Z("aria-haspopup",o.menu?"menu":null)("aria-expanded",o.menuOpen)("aria-controls",o.menuOpen?o.menu==null?null:o.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[q]})}return n})();var ea=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=x({type:n});static \u0275inj=y({imports:[ce,Rn,z,hi]})}return n})();function nl(n,i){if(n&1){let t=xt();m(0,"mat-card",2)(1,"mat-card-header")(2,"mat-card-title"),at(3,"div",3),m(4,"span",4),R(5),u()(),m(6,"mat-card-actions")(7,"button",5)(8,"mat-icon"),R(9,"more_vert"),u()(),m(10,"mat-menu",null,0)(12,"button",6),F("click",function(){let o=X(t).$implicit,r=A();return K(r.edit.emit(o))}),m(13,"mat-icon"),R(14,"edit"),u(),R(15," Edit"),u(),m(16,"button",6),F("click",function(){let o=X(t).$implicit,r=A();return K(r.delete.emit(o.id))}),m(17,"mat-icon"),R(18,"delete"),u(),R(19," Delete"),u()()()(),m(20,"mat-card-content")(21,"a",7),R(22),u(),m(23,"p"),R(24,"This is where your bookmark description or a small preview of the site goes."),u()()()}if(n&2){let t=i.$implicit,e=Ce(11);p(5),Dt(t.title),p(2),w("matMenuTriggerFor",e),p(14),w("href",t.url,xo),p(),Dt(t.url)}}var ki=class n{bookmarks=[];delete=new B;edit=new B;static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-bookmark-list"]],inputs:{bookmarks:"bookmarks"},outputs:{delete:"delete",edit:"edit"},decls:1,vars:1,consts:[["menu","matMenu"],["class","card",4,"ngFor","ngForOf"],[1,"card"],["mat-card-avatar","",1,"header-image"],[1,"truncate"],["mat-icon-button","",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],["target","_blank",3,"href"]],template:function(t,e){t&1&&ot(0,nl,25,4,"mat-card",1),t&2&&w("ngForOf",e.bookmarks)},dependencies:[te,zo,ii,er,or,ar,nr,rr,ir,si,ai,ea,me,Re,ta],styles:[".card[_ngcontent-%COMP%]{border:1px solid #eceaea;border-radius:3px;box-shadow:none}.card[_ngcontent-%COMP%]   .mat-mdc-card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;border-bottom:1px dashed #ccc;margin-bottom:5px;padding:10px 15px}.card[_ngcontent-%COMP%]   .mat-mdc-card-header[_ngcontent-%COMP%]   .mat-mdc-card-avatar[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:3px;background:#ccc;margin:0}.card[_ngcontent-%COMP%]   .mat-mdc-card-header[_ngcontent-%COMP%]   .mat-mdc-card-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.card[_ngcontent-%COMP%]   .mat-mdc-card-header[_ngcontent-%COMP%]   .mat-mdc-card-title[_ngcontent-%COMP%]   .truncate[_ngcontent-%COMP%]{max-width:165px}.card[_ngcontent-%COMP%]   .mat-mdc-card-header[_ngcontent-%COMP%]   .mat-mdc-card-actions[_ngcontent-%COMP%]{padding:0;min-height:30px;justify-content:end}.card[_ngcontent-%COMP%]   .mat-mdc-card-header[_ngcontent-%COMP%]   .mat-mdc-card-actions[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{width:7px;height:18px;font-size:18px;color:#6b6666;justify-content:center;cursor:pointer;display:flex}"]})};var ma=(()=>{class n{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,e){this._renderer=t,this._elementRef=e}setProperty(t,e){this._renderer.setProperty(this._elementRef.nativeElement,t,e)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(e){return new(e||n)(T(it),T(E))};static \u0275dir=g({type:n})}return n})(),ol=(()=>{class n extends ma{static \u0275fac=(()=>{let t;return function(o){return(t||(t=Bt(n)))(o||n)}})();static \u0275dir=g({type:n,features:[q]})}return n})(),Bn=new f("");var rl={provide:Bn,useExisting:Rt(()=>ge),multi:!0};function al(){let n=rn()?rn().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var sl=new f(""),ge=(()=>{class n extends ma{_compositionMode;_composing=!1;constructor(t,e,o){super(t,e),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!al())}writeValue(t){let e=t??"";this.setProperty("value",e)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(e){return new(e||n)(T(it),T(E),T(sl,8))};static \u0275dir=g({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,o){e&1&&F("input",function(a){return o._handleInput(a.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(a){return o._compositionEnd(a.target.value)})},standalone:!1,features:[nt([rl]),q]})}return n})();function zn(n){return n==null||jn(n)===0}function jn(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var Ni=new f(""),Li=new f(""),ll=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Si=class{static min(i){return cl(i)}static max(i){return dl(i)}static required(i){return ml(i)}static requiredTrue(i){return ul(i)}static email(i){return hl(i)}static minLength(i){return pl(i)}static maxLength(i){return fl(i)}static pattern(i){return gl(i)}static nullValidator(i){return ua()}static compose(i){return va(i)}static composeAsync(i){return ba(i)}};function cl(n){return i=>{if(i.value==null||n==null)return null;let t=parseFloat(i.value);return!isNaN(t)&&t<n?{min:{min:n,actual:i.value}}:null}}function dl(n){return i=>{if(i.value==null||n==null)return null;let t=parseFloat(i.value);return!isNaN(t)&&t>n?{max:{max:n,actual:i.value}}:null}}function ml(n){return zn(n.value)?{required:!0}:null}function ul(n){return n.value===!0?null:{required:!0}}function hl(n){return zn(n.value)||ll.test(n.value)?null:{email:!0}}function pl(n){return i=>{let t=i.value?.length??jn(i.value);return t===null||t===0?null:t<n?{minlength:{requiredLength:n,actualLength:t}}:null}}function fl(n){return i=>{let t=i.value?.length??jn(i.value);return t!==null&&t>n?{maxlength:{requiredLength:n,actualLength:t}}:null}}function gl(n){if(!n)return ua;let i,t;return typeof n=="string"?(t="",n.charAt(0)!=="^"&&(t+="^"),t+=n,n.charAt(n.length-1)!=="$"&&(t+="$"),i=new RegExp(t)):(t=n.toString(),i=n),e=>{if(zn(e.value))return null;let o=e.value;return i.test(o)?null:{pattern:{requiredPattern:t,actualValue:o}}}}function ua(n){return null}function ha(n){return n!=null}function pa(n){return Eo(n)?mo(n):n}function fa(n){let i={};return n.forEach(t=>{i=t!=null?_(_({},i),t):i}),Object.keys(i).length===0?null:i}function ga(n,i){return i.map(t=>t(n))}function _l(n){return!n.validate}function _a(n){return n.map(i=>_l(i)?i:t=>i.validate(t))}function va(n){if(!n)return null;let i=n.filter(ha);return i.length==0?null:function(t){return fa(ga(t,i))}}function Hn(n){return n!=null?va(_a(n)):null}function ba(n){if(!n)return null;let i=n.filter(ha);return i.length==0?null:function(t){let e=ga(t,i).map(pa);return We(e).pipe(mt(fa))}}function Un(n){return n!=null?ba(_a(n)):null}function na(n,i){return n===null?[i]:Array.isArray(n)?[...n,i]:[n,i]}function ya(n){return n._rawValidators}function xa(n){return n._rawAsyncValidators}function Vn(n){return n?Array.isArray(n)?n:[n]:[]}function Ii(n,i){return Array.isArray(n)?n.includes(i):n===i}function oa(n,i){let t=Vn(i);return Vn(n).forEach(o=>{Ii(t,o)||t.push(o)}),t}function ra(n,i){return Vn(i).filter(t=>!Ii(n,t))}var Ai=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=Hn(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=Un(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,t){return this.control?this.control.hasError(i,t):!1}getError(i,t){return this.control?this.control.getError(i,t):null}},At=class extends Ai{name;get formDirective(){return null}get path(){return null}},Ft=class extends Ai{_parent=null;name=null;valueAccessor=null},Fi=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Bi=(()=>{class n extends Fi{constructor(t){super(t)}static \u0275fac=function(e){return new(e||n)(T(Ft,2))};static \u0275dir=g({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,o){e&2&&S("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[q]})}return n})(),Ca=(()=>{class n extends Fi{constructor(t){super(t)}static \u0275fac=function(e){return new(e||n)(T(At,10))};static \u0275dir=g({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(e,o){e&2&&S("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},standalone:!1,features:[q]})}return n})();var Oe="VALID",Di="INVALID",ue="PENDING",Te="DISABLED",Pt=class{},Ri=class extends Pt{value;source;constructor(i,t){super(),this.value=i,this.source=t}},Ve=class extends Pt{pristine;source;constructor(i,t){super(),this.pristine=i,this.source=t}},Ne=class extends Pt{touched;source;constructor(i,t){super(),this.touched=i,this.source=t}},he=class extends Pt{status;source;constructor(i,t){super(),this.status=i,this.source=t}},Oi=class extends Pt{source;constructor(i){super(),this.source=i}},Be=class extends Pt{source;constructor(i){super(),this.source=i}};function Wn(n){return(zi(n)?n.validators:n)||null}function vl(n){return Array.isArray(n)?Hn(n):n||null}function Gn(n,i){return(zi(i)?i.asyncValidators:n)||null}function bl(n){return Array.isArray(n)?Un(n):n||null}function zi(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function wa(n,i,t){let e=n.controls;if(!(i?Object.keys(e):e).length)throw new qe(1e3,"");if(!e[t])throw new qe(1001,"")}function Ma(n,i,t){n._forEachChild((e,o)=>{if(t[o]===void 0)throw new qe(-1002,"")})}var pe=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,t){this._assignValidators(i),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return Ct(this.statusReactive)}set status(i){Ct(()=>this.statusReactive.set(i))}_status=wt(()=>this.statusReactive());statusReactive=et(void 0);get valid(){return this.status===Oe}get invalid(){return this.status===Di}get pending(){return this.status===ue}get disabled(){return this.status===Te}get enabled(){return this.status!==Te}errors;get pristine(){return Ct(this.pristineReactive)}set pristine(i){Ct(()=>this.pristineReactive.set(i))}_pristine=wt(()=>this.pristineReactive());pristineReactive=et(!0);get dirty(){return!this.pristine}get touched(){return Ct(this.touchedReactive)}set touched(i){Ct(()=>this.touchedReactive.set(i))}_touched=wt(()=>this.touchedReactive());touchedReactive=et(!1);get untouched(){return!this.touched}_events=new C;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(oa(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(oa(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(ra(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(ra(i,this._rawAsyncValidators))}hasValidator(i){return Ii(this._rawValidators,i)}hasAsyncValidator(i){return Ii(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let t=this.touched===!1;this.touched=!0;let e=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(tt(_({},i),{sourceControl:e})),t&&i.emitEvent!==!1&&this._events.next(new Ne(!0,e))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(i))}markAsUntouched(i={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let e=i.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:e})}),i.onlySelf||this._parent?._updateTouched(i,e),t&&i.emitEvent!==!1&&this._events.next(new Ne(!1,e))}markAsDirty(i={}){let t=this.pristine===!0;this.pristine=!1;let e=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(tt(_({},i),{sourceControl:e})),t&&i.emitEvent!==!1&&this._events.next(new Ve(!1,e))}markAsPristine(i={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let e=i.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,e),t&&i.emitEvent!==!1&&this._events.next(new Ve(!0,e))}markAsPending(i={}){this.status=ue;let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new he(this.status,t)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(tt(_({},i),{sourceControl:t}))}disable(i={}){let t=this._parentMarkedDirty(i.onlySelf);this.status=Te,this.errors=null,this._forEachChild(o=>{o.disable(tt(_({},i),{onlySelf:!0}))}),this._updateValue();let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Ri(this.value,e)),this._events.next(new he(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(tt(_({},i),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(i={}){let t=this._parentMarkedDirty(i.onlySelf);this.status=Oe,this._forEachChild(e=>{e.enable(tt(_({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(tt(_({},i),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(e=>e(!1))}_updateAncestors(i,t){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},t),this._parent?._updateTouched({},t))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let e=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Oe||this.status===ue)&&this._runAsyncValidator(e,i.emitEvent)}let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Ri(this.value,t)),this._events.next(new he(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(tt(_({},i),{sourceControl:t}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Te:Oe}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,t){if(this.asyncValidator){this.status=ue,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:i!==!1};let e=pa(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:t,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,t={}){this.errors=i,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(i){let t=i;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((e,o)=>e&&e._find(o),this)}getError(i,t){let e=t?this.get(t):this;return e?.errors?e.errors[i]:null}hasError(i,t){return!!this.getError(i,t)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,t,e){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||e)&&this._events.next(new he(this.status,t)),this._parent&&this._parent._updateControlsErrors(i,t,e)}_initObservables(){this.valueChanges=new B,this.statusChanges=new B}_calculateStatus(){return this._allControlsDisabled()?Te:this.errors?Di:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ue)?ue:this._anyControlsHaveStatus(Di)?Di:Oe}_anyControlsHaveStatus(i){return this._anyControls(t=>t.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,t){let e=!this._anyControlsDirty(),o=this.pristine!==e;this.pristine=e,i.onlySelf||this._parent?._updatePristine(i,t),o&&this._events.next(new Ve(this.pristine,t))}_updateTouched(i={},t){this.touched=this._anyControlsTouched(),this._events.next(new Ne(this.touched,t)),i.onlySelf||this._parent?._updateTouched(i,t)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){zi(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=vl(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=bl(this._rawAsyncValidators)}},fe=class extends pe{constructor(i,t,e){super(Wn(t),Gn(e,t)),this.controls=i,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,t){return this.controls[i]?this.controls[i]:(this.controls[i]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(i,t,e={}){this.registerControl(i,t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}removeControl(i,t={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(i,t,e={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],t&&this.registerControl(i,t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,t={}){Ma(this,!0,i),Object.keys(i).forEach(e=>{wa(this,!0,e),this.controls[e].setValue(i[e],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(i,t={}){i!=null&&(Object.keys(i).forEach(e=>{let o=this.controls[e];o&&o.patchValue(i[e],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(i={},t={}){this._forEachChild((e,o)=>{e.reset(i?i[o]:null,tt(_({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new Be(this))}getRawValue(){return this._reduceChildren({},(i,t,e)=>(i[e]=t.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(t,e)=>e._syncPendingControls()?!0:t);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(t=>{let e=this.controls[t];e&&i(e,t)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[t,e]of Object.entries(this.controls))if(this.contains(t)&&i(e))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(t,e,o)=>((e.enabled||this.disabled)&&(t[o]=e.value),t))}_reduceChildren(i,t){let e=i;return this._forEachChild((o,r)=>{e=t(e,o,r)}),e}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var Nn=class extends fe{};var ze=new f("",{factory:()=>ji}),ji="always";function Ea(n,i){return[...i.path,n]}function Ti(n,i,t=ji){Yn(n,i),i.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&i.valueAccessor.setDisabledState?.(n.disabled),xl(n,i),wl(n,i),Cl(n,i),yl(n,i)}function aa(n,i,t=!0){let e=()=>{};i?.valueAccessor?.registerOnChange(e),i?.valueAccessor?.registerOnTouched(e),Vi(n,i),n&&(i._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function Pi(n,i){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(i)})}function yl(n,i){if(i.valueAccessor.setDisabledState){let t=e=>{i.valueAccessor.setDisabledState(e)};n.registerOnDisabledChange(t),i._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function Yn(n,i){let t=ya(n);i.validator!==null?n.setValidators(na(t,i.validator)):typeof t=="function"&&n.setValidators([t]);let e=xa(n);i.asyncValidator!==null?n.setAsyncValidators(na(e,i.asyncValidator)):typeof e=="function"&&n.setAsyncValidators([e]);let o=()=>n.updateValueAndValidity();Pi(i._rawValidators,o),Pi(i._rawAsyncValidators,o)}function Vi(n,i){let t=!1;if(n!==null){if(i.validator!==null){let o=ya(n);if(Array.isArray(o)&&o.length>0){let r=o.filter(a=>a!==i.validator);r.length!==o.length&&(t=!0,n.setValidators(r))}}if(i.asyncValidator!==null){let o=xa(n);if(Array.isArray(o)&&o.length>0){let r=o.filter(a=>a!==i.asyncValidator);r.length!==o.length&&(t=!0,n.setAsyncValidators(r))}}}let e=()=>{};return Pi(i._rawValidators,e),Pi(i._rawAsyncValidators,e),t}function xl(n,i){i.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&ka(n,i)})}function Cl(n,i){i.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&ka(n,i),n.updateOn!=="submit"&&n.markAsTouched()})}function ka(n,i){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function wl(n,i){let t=(e,o)=>{i.valueAccessor.writeValue(e),o&&i.viewToModelUpdate(e)};n.registerOnChange(t),i._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function Da(n,i){n==null,Yn(n,i)}function Ml(n,i){return Vi(n,i)}function Sa(n,i){if(!n.hasOwnProperty("model"))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(i,t.currentValue)}function El(n){return Object.getPrototypeOf(n.constructor)===ol}function Ia(n,i){n._syncPendingControls(),i.forEach(t=>{let e=t.control;e.updateOn==="submit"&&e._pendingChange&&(t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1)})}function Aa(n,i){if(!i)return null;Array.isArray(i);let t,e,o;return i.forEach(r=>{r.constructor===ge?t=r:El(r)?e=r:o=r}),o||e||t||null}function kl(n,i){let t=n.indexOf(i);t>-1&&n.splice(t,1)}var Dl={provide:At,useExisting:Rt(()=>qn)},Pe=Promise.resolve(),qn=(()=>{class n extends At{callSetDisabledState;get submitted(){return Ct(this.submittedReactive)}_submitted=wt(()=>this.submittedReactive());submittedReactive=et(!1);_directives=new Set;form;ngSubmit=new B;options;constructor(t,e,o){super(),this.callSetDisabledState=o,this.form=new fe({},Hn(t),Un(e))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){Pe.then(()=>{let e=this._findContainer(t.path);t.control=e.registerControl(t.name,t.control),Ti(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){Pe.then(()=>{this._findContainer(t.path)?.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){Pe.then(()=>{let e=this._findContainer(t.path),o=new fe({});Da(o,t),e.registerControl(t.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){Pe.then(()=>{this._findContainer(t.path)?.removeControl?.(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,e){Pe.then(()=>{this.form.get(t.path).setValue(e)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),Ia(this.form,this._directives),this.ngSubmit.emit(t),this.form._events.next(new Oi(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static \u0275fac=function(e){return new(e||n)(T(Ni,10),T(Li,10),T(ze,8))};static \u0275dir=g({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(e,o){e&1&&F("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[nt([Dl]),q]})}return n})();function sa(n,i){let t=n.indexOf(i);t>-1&&n.splice(t,1)}function la(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var Le=class extends pe{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,t,e){super(Wn(t),Gn(e,t)),this._applyFormState(i),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),zi(t)&&(t.nonNullable||t.initialValueIsDefault)&&(la(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,t={}){this.value=this._pendingValue=i,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(e=>e(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(i,t={}){this.setValue(i,t)}reset(i=this.defaultValue,t={}){this._applyFormState(i),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),t.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,t?.emitEvent!==!1&&this._events.next(new Be(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){sa(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){sa(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){la(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var Sl=n=>n instanceof Le;var Il={provide:Ft,useExisting:Rt(()=>$n)},ca=Promise.resolve(),$n=(()=>{class n extends Ft{_changeDetectorRef;callSetDisabledState;control=new Le;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new B;constructor(t,e,o,r,a,l){super(),this._changeDetectorRef=a,this.callSetDisabledState=l,this._parent=t,this._setValidators(e),this._setAsyncValidators(o),this.valueAccessor=Aa(this,r)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let e=t.name.previousValue;this.formDirective.removeControl({name:e,path:this._getPath(e)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),Sa(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Ti(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){ca.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let e=t.isDisabled.currentValue,o=e!==0&&j(e);ca.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?Ea(t,this._parent):[t]}static \u0275fac=function(e){return new(e||n)(T(At,9),T(Ni,10),T(Li,10),T(Bn,10),T(Mt,8),T(ze,8))};static \u0275dir=g({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[nt([Il]),q,gt]})}return n})();var Fa=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=g({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})();var Ln=class extends pe{constructor(i,t,e){super(Wn(t),Gn(e,t)),this.controls=i,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(i){return this.controls[this._adjustIndex(i)]}push(i,t={}){Array.isArray(i)?i.forEach(e=>{this.controls.push(e),this._registerControl(e)}):(this.controls.push(i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(i,t,e={}){this.controls.splice(i,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:e.emitEvent})}removeAt(i,t={}){let e=this._adjustIndex(i);e<0&&(e=0),this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),this.controls.splice(e,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(i,t,e={}){let o=this._adjustIndex(i);o<0&&(o=0),this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),this.controls.splice(o,1),t&&(this.controls.splice(o,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(i,t={}){Ma(this,!1,i),i.forEach((e,o)=>{wa(this,!1,o),this.at(o).setValue(e,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(i,t={}){i!=null&&(i.forEach((e,o)=>{this.at(o)&&this.at(o).patchValue(e,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(i=[],t={}){this._forEachChild((e,o)=>{e.reset(i[o],tt(_({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new Be(this))}getRawValue(){return this.controls.map(i=>i.getRawValue())}clear(i={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:i.emitEvent}))}_adjustIndex(i){return i<0?i+this.length:i}_syncPendingControls(){let i=this.controls.reduce((t,e)=>e._syncPendingControls()?!0:t,!1);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){this.controls.forEach((t,e)=>{i(t,e)})}_updateValue(){this.value=this.controls.filter(i=>i.enabled||this.disabled).map(i=>i.value)}_anyControls(i){return this.controls.some(t=>t.enabled&&i(t))}_setUpControls(){this._forEachChild(i=>this._registerControl(i))}_allControlsDisabled(){for(let i of this.controls)if(i.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(i){i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)}_find(i){return this.at(i)??null}};var Al=(()=>{class n extends At{callSetDisabledState;get submitted(){return Ct(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=wt(()=>this._submittedReactive());_submittedReactive=et(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(t,e,o){super(),this.callSetDisabledState=o,this._setValidators(t),this._setAsyncValidators(e)}ngOnChanges(t){this.onChanges(t)}ngOnDestroy(){this.onDestroy()}onChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Vi(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(t){let e=this.form.get(t.path);return Ti(e,t,this.callSetDisabledState),e.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),e}getControl(t){return this.form.get(t.path)}removeControl(t){aa(t.control||null,t,!1),kl(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}getFormArray(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}updateModel(t,e){this.form.get(t.path).setValue(e)}onReset(){this.resetForm()}resetForm(t=void 0,e={}){this.form.reset(t,e),this._submittedReactive.set(!1)}onSubmit(t){return this.submitted=!0,Ia(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new Oi(this.control)),t?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(t=>{let e=t.control,o=this.form.get(t.path);e!==o&&(aa(e||null,t),Sl(o)&&(Ti(o,t,this.callSetDisabledState),t.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let e=this.form.get(t.path);Da(e,t),e.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){let e=this.form?.get(t.path);e&&Ml(e,t)&&e.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Yn(this.form,this),this._oldForm&&Vi(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(e){return new(e||n)(T(Ni,10),T(Li,10),T(ze,8))};static \u0275dir=g({type:n,features:[q,gt]})}return n})();var Ra=new f("");var Fl={provide:Ft,useExisting:Rt(()=>Xn)},Xn=(()=>{class n extends Ft{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(t){}model;update=new B;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,e,o,r,a){super(),this._ngModelWarningConfig=a,this._parent=t,this._setValidators(e),this._setAsyncValidators(o),this.valueAccessor=Aa(this,r)}ngOnChanges(t){this._added||this._setUpControl(),Sa(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return Ea(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(e){return new(e||n)(T(At,13),T(Ni,10),T(Li,10),T(Bn,10),T(Ra,8))};static \u0275dir=g({type:n,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[nt([Fl]),q,gt]})}return n})();var Rl={provide:At,useExisting:Rt(()=>je)},je=(()=>{class n extends Al{form=null;ngSubmit=new B;get control(){return this.form}static \u0275fac=(()=>{let t;return function(o){return(t||(t=Bt(n)))(o||n)}})();static \u0275dir=g({type:n,selectors:[["","formGroup",""]],hostBindings:function(e,o){e&1&&F("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[nt([Rl]),q]})}return n})();var Oa=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=x({type:n});static \u0275inj=y({})}return n})();function da(n){return!!n&&(n.asyncValidators!==void 0||n.validators!==void 0||n.updateOn!==void 0)}var Ta=(()=>{class n{useNonNullable=!1;get nonNullable(){let t=new n;return t.useNonNullable=!0,t}group(t,e=null){let o=this._reduceControls(t),r={};return da(e)?r=e:e!==null&&(r.validators=e.validator,r.asyncValidators=e.asyncValidator),new fe(o,r)}record(t,e=null){let o=this._reduceControls(t);return new Nn(o,e)}control(t,e,o){let r={};return this.useNonNullable?(da(e)?r=e:(r.validators=e,r.asyncValidators=o),new Le(t,tt(_({},r),{nonNullable:!0}))):new Le(t,e,o)}array(t,e,o){let r=t.map(a=>this._createControl(a));return new Ln(r,e,o)}_reduceControls(t){let e={};return Object.keys(t).forEach(o=>{e[o]=this._createControl(t[o])}),e}_createControl(t){if(t instanceof Le)return t;if(t instanceof pe)return t;if(Array.isArray(t)){let e=t[0],o=t.length>1?t[1]:null,r=t.length>2?t[2]:null;return this.control(e,o,r)}else return this.control(t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Pa=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:ze,useValue:t.callSetDisabledState??ji}]}}static \u0275fac=function(e){return new(e||n)};static \u0275mod=x({type:n});static \u0275inj=y({imports:[Oa]})}return n})(),Va=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:Ra,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:ze,useValue:t.callSetDisabledState??ji}]}}static \u0275fac=function(e){return new(e||n)};static \u0275mod=x({type:n});static \u0275inj=y({imports:[Oa]})}return n})();var Ol={capture:!0},Tl=["focus","mousedown","mouseenter","touchstart"],Kn="mat-ripple-loader-uninitialized",Zn="mat-ripple-loader-class-name",La="mat-ripple-loader-centered",Hi="mat-ripple-loader-disabled",Ba=(()=>{class n{_document=s(O);_animationsDisabled=vt();_globalRippleOptions=s(Dn,{optional:!0});_platform=s(P);_ngZone=s(M);_injector=s(Y);_eventCleanups;_hosts=new Map;constructor(){let t=s(ct).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Tl.map(e=>t.listen(this._document,e,this._onInteraction,Ol)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(Kn,this._globalRippleOptions?.namespace??""),(e.className||!t.hasAttribute(Zn))&&t.setAttribute(Zn,e.className||""),e.centered&&t.setAttribute(La,""),e.disabled&&t.setAttribute(Hi,"")}setDisabled(t,e){let o=this._hosts.get(t);o?(o.target.rippleDisabled=e,!e&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(t))):e?t.setAttribute(Hi,""):t.removeAttribute(Hi)}_onInteraction=t=>{let e=st(t);if(e instanceof HTMLElement){let o=e.closest(`[${Kn}="${this._globalRippleOptions?.namespace??""}"]`);o&&this._createRipple(o)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let e=this._document.createElement("span");e.classList.add("mat-ripple",t.getAttribute(Zn)),t.append(e);let o=this._globalRippleOptions,r=this._animationsDisabled?0:o?.animation?.enterDuration??Ie.enterDuration,a=this._animationsDisabled?0:o?.animation?.exitDuration??Ie.exitDuration,l={rippleDisabled:this._animationsDisabled||o?.disabled||t.hasAttribute(Hi),rippleConfig:{centered:t.hasAttribute(La),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:a}}},d=new Ae(l,this._ngZone,e,this._platform,this._injector),h=!l.rippleDisabled;h&&d.setupTriggerEvents(t),this._hosts.set(t,{target:l,renderer:d,hasSetUpEvents:h}),t.removeAttribute(Kn)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Pl=["mat-icon-button",""],Vl=["*"],Nl=new f("MAT_BUTTON_CONFIG");function za(n){return n==null?void 0:on(n)}var Qn=(()=>{class n{_elementRef=s(E);_ngZone=s(M);_animationsDisabled=vt();_config=s(Nl,{optional:!0});_focusMonitor=s(oe);_cleanupClick;_renderer=s(it);_rippleLoader=s(Ba);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}constructor(){s(ht).load(ui);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=g({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(e,o){e&2&&(Z("disabled",o._getDisabledAttribute())("aria-disabled",o._getAriaDisabled())("tabindex",o._getTabIndex()),kt(o.color?"mat-"+o.color:""),S("mat-mdc-button-disabled",o.disabled)("mat-mdc-button-disabled-interactive",o.disabledInteractive)("mat-unthemed",!o.color)("_mat-animation-noopable",o._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",j],disabled:[2,"disabled","disabled",j],ariaDisabled:[2,"aria-disabled","ariaDisabled",j],disabledInteractive:[2,"disabledInteractive","disabledInteractive",j],tabIndex:[2,"tabIndex","tabIndex",za],_tabindex:[2,"tabindex","_tabindex",za]}})}return n})(),Jn=(()=>{class n extends Qn{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=k({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[q],attrs:Pl,ngContentSelectors:Vl,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,o){e&1&&($(),yt(0,"span",0),D(1),yt(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var Ll=["matButton",""],Bl=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],zl=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var ja=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Ha=(()=>{class n extends Qn{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let t=jl(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let e=this._elementRef.nativeElement.classList,o=this._appearance?ja.get(this._appearance):null,r=ja.get(t);o&&e.remove(...o),e.add(...r),this._appearance=t}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=k({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[q],attrs:Ll,ngContentSelectors:zl,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,o){e&1&&($(Bl),yt(0,"span",0),D(1),_t(2,"span",1),D(3,1),bt(),D(4,2),yt(5,"span",2)(6,"span",3)),e&2&&S("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function jl(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var Ui=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=x({type:n});static \u0275inj=y({imports:[ce,z]})}return n})();var to=class{_box;_destroyed=new C;_resizeSubject=new C;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(t=>this._resizeSubject.next(t)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new Ue(t=>{let e=this._resizeSubject.subscribe(t);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),e.unsubscribe(),this._elementObservables.delete(i)}}).pipe(ut(t=>t.some(e=>e.target===i)),tn({bufferSize:1,refCount:!0}),Et(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Wa=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=s(M);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,t]of this._observers)t.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(t,e){let o=e?.box||"content-box";return this._observers.has(o)||this._observers.set(o,new to(o)),this._observers.get(o).observe(t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Hl=["notch"],Ul=["matFormFieldNotchedOutline",""],Wl=["*"],Ga=["iconPrefixContainer"],Ya=["textPrefixContainer"],qa=["iconSuffixContainer"],$a=["textSuffixContainer"],Gl=["textField"],Yl=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],ql=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function $l(n,i){n&1&&at(0,"span",21)}function Xl(n,i){if(n&1&&(m(0,"label",20),D(1,1),Q(2,$l,1,0,"span",21),u()),n&2){let t=A(2);w("floating",t._shouldLabelFloat())("monitorResize",t._hasOutline())("id",t._labelId),Z("for",t._control.disableAutomaticLabeling?null:t._control.id),p(2),J(!t.hideRequiredMarker&&t._control.required?2:-1)}}function Kl(n,i){if(n&1&&Q(0,Xl,3,5,"label",20),n&2){let t=A();J(t._hasFloatingLabel()?0:-1)}}function Zl(n,i){n&1&&at(0,"div",7)}function Ql(n,i){}function Jl(n,i){if(n&1&&ot(0,Ql,0,0,"ng-template",13),n&2){A(2);let t=Ce(1);w("ngTemplateOutlet",t)}}function tc(n,i){if(n&1&&(m(0,"div",9),Q(1,Jl,1,1,null,13),u()),n&2){let t=A();w("matFormFieldNotchedOutlineOpen",t._shouldLabelFloat()),p(),J(t._forceDisplayInfixLabel()?-1:1)}}function ec(n,i){n&1&&(m(0,"div",10,2),D(2,2),u())}function ic(n,i){n&1&&(m(0,"div",11,3),D(2,3),u())}function nc(n,i){}function oc(n,i){if(n&1&&ot(0,nc,0,0,"ng-template",13),n&2){A();let t=Ce(1);w("ngTemplateOutlet",t)}}function rc(n,i){n&1&&(m(0,"div",14,4),D(2,4),u())}function ac(n,i){n&1&&(m(0,"div",15,5),D(2,5),u())}function sc(n,i){n&1&&at(0,"div",16)}function lc(n,i){n&1&&(m(0,"div",18),D(1,6),u())}function cc(n,i){if(n&1&&(m(0,"mat-hint",22),R(1),u()),n&2){let t=A(2);w("id",t._hintLabelId),p(),Dt(t.hintLabel)}}function dc(n,i){if(n&1&&(m(0,"div",19),Q(1,cc,2,2,"mat-hint",22),D(2,7),at(3,"div",23),D(4,8),u()),n&2){let t=A();p(),J(t.hintLabel?1:-1)}}var eo=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=g({type:n,selectors:[["mat-label"]]})}return n})(),mc=new f("MatError");var io=(()=>{class n{align="start";id=s(pt).getId("mat-mdc-hint-");static \u0275fac=function(e){return new(e||n)};static \u0275dir=g({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(e,o){e&2&&(jt("id",o.id),Z("align",null),S("mat-mdc-form-field-hint-end",o.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),uc=new f("MatPrefix");var es=new f("MatSuffix"),no=(()=>{class n{set _isTextSelector(t){this._isText=!0}_isText=!1;static \u0275fac=function(e){return new(e||n)};static \u0275dir=g({type:n,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[nt([{provide:es,useExisting:n}])]})}return n})(),is=new f("FloatingLabelParent"),Xa=(()=>{class n{_elementRef=s(E);get floating(){return this._floating}set floating(t){this._floating=t,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(t){this._monitorResize=t,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=s(Wa);_ngZone=s(M);_parent=s(is);_resizeSubscription=new rt;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return hc(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(e){return new(e||n)};static \u0275dir=g({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(e,o){e&2&&S("mdc-floating-label--float-above",o.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function hc(n){let i=n;if(i.offsetParent!==null)return i.scrollWidth;let t=i.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);let e=t.scrollWidth;return t.remove(),e}var Ka="mdc-line-ripple--active",Wi="mdc-line-ripple--deactivating",Za=(()=>{class n{_elementRef=s(E);_cleanupTransitionEnd;constructor(){let t=s(M),e=s(it);t.runOutsideAngular(()=>{this._cleanupTransitionEnd=e.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let t=this._elementRef.nativeElement.classList;t.remove(Wi),t.add(Ka)}deactivate(){this._elementRef.nativeElement.classList.add(Wi)}_handleTransitionEnd=t=>{let e=this._elementRef.nativeElement.classList,o=e.contains(Wi);t.propertyName==="opacity"&&o&&e.remove(Ka,Wi)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(e){return new(e||n)};static \u0275dir=g({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),Qa=(()=>{class n{_elementRef=s(E);_ngZone=s(M);open=!1;_notch;ngAfterViewInit(){let t=this._elementRef.nativeElement,e=t.querySelector(".mdc-floating-label");e?(t.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(e.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>e.style.transitionDuration="")}))):t.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(t){let e=this._notch.nativeElement;!this.open||!t?e.style.width="":e.style.width=`calc(${t}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(t){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${t}px)`)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=k({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(e,o){if(e&1&&Ut(Hl,5),e&2){let r;V(r=N())&&(o._notch=r.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(e,o){e&2&&S("mdc-notched-outline--notched",o.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:Ul,ngContentSelectors:Wl,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(e,o){e&1&&($(),yt(0,"div",1),_t(1,"div",2,0),D(3),bt(),yt(4,"div",3))},encapsulation:2,changeDetection:0})}return n})(),oo=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(e){return new(e||n)};static \u0275dir=g({type:n})}return n})();var ro=new f("MatFormField"),pc=new f("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Ja="fill",fc="auto",ts="fixed",gc="translateY(-50%)",_e=(()=>{class n{_elementRef=s(E);_changeDetectorRef=s(Mt);_platform=s(P);_idGenerator=s(pt);_ngZone=s(M);_defaults=s(pc,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=we("iconPrefixContainer");_textPrefixContainerSignal=we("textPrefixContainer");_iconSuffixContainerSignal=we("iconSuffixContainer");_textSuffixContainerSignal=we("textSuffixContainer");_prefixSuffixContainers=wt(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(t=>t?.nativeElement).filter(t=>t!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Vo(eo);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(t){this._hideRequiredMarker=ae(t)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||fc}set floatLabel(t){t!==this._floatLabel&&(this._floatLabel=t,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(t){let e=t||this._defaults?.appearance||Ja;this._appearanceSignal.set(e)}_appearanceSignal=et(Ja);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||ts}set subscriptSizing(t){this._subscriptSizing=t||this._defaults?.subscriptSizing||ts}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(t){this._hintLabel=t,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(t){this._explicitFormFieldControl=t}_destroyed=new C;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=vt();constructor(){let t=this._defaults,e=s(Tt);t&&(t.appearance&&(this.appearance=t.appearance),this._hideRequiredMarker=!!t?.hideRequiredMarker,t.color&&(this.color=t.color)),Lt(()=>this._currentDirection=e.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=wt(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(t){let e=this._control,o="mat-mdc-form-field-type-";t&&this._elementRef.nativeElement.classList.remove(o+t.controlType),e.controlType&&this._elementRef.nativeElement.classList.add(o+e.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=e.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=e.stateChanges.pipe(Nt([void 0,void 0]),mt(()=>[e.errorState,e.userAriaDescribedBy]),Ji(),ut(([[r,a],[l,d]])=>r!==l||a!==d)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),e.ngControl&&e.ngControl.valueChanges&&(this._valueChanges=e.ngControl.valueChanges.pipe(Et(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(t=>!t._isText),this._hasTextPrefix=!!this._prefixChildren.find(t=>t._isText),this._hasIconSuffix=!!this._suffixChildren.find(t=>!t._isText),this._hasTextSuffix=!!this._suffixChildren.find(t=>t._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Xt(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let t=this._control.focused;t&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!t&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",t),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",t)}_syncOutlineLabelOffset(){No({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let t of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(t,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:t=>this._writeOutlinedLabelStyles(t())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=wt(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(t){let e=this._control?this._control.ngControl:null;return e&&e[t]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let t=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&t.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let r=this._hintChildren?this._hintChildren.find(l=>l.align==="start"):null,a=this._hintChildren?this._hintChildren.find(l=>l.align==="end"):null;r?t.push(r.id):this._hintLabel&&t.push(this._hintLabelId),a&&t.push(a.id)}else this._errorChildren&&t.push(...this._errorChildren.map(r=>r.id));let e=this._control.describedByIds,o;if(e){let r=this._describedByIds||t;o=t.concat(e.filter(a=>a&&!r.includes(a)))}else o=t;this._control.setDescribedByIds(o),this._describedByIds=t}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let t=this._iconPrefixContainer?.nativeElement,e=this._textPrefixContainer?.nativeElement,o=this._iconSuffixContainer?.nativeElement,r=this._textSuffixContainer?.nativeElement,a=t?.getBoundingClientRect().width??0,l=e?.getBoundingClientRect().width??0,d=o?.getBoundingClientRect().width??0,h=r?.getBoundingClientRect().width??0,c=this._currentDirection==="rtl"?"-1":"1",b=`${a+l}px`,U=`calc(${c} * (${b} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,G=`var(--mat-mdc-form-field-label-transform, ${gc} translateX(${U}))`,W=a+l+d+h;return[G,W]}_writeOutlinedLabelStyles(t){if(t!==null){let[e,o]=t;this._floatingLabel&&(this._floatingLabel.element.style.transform=e),o!==null&&this._notchedOutline?._setMaxWidth(o)}}_isAttachedToDom(){let t=this._elementRef.nativeElement;if(t.getRootNode){let e=t.getRootNode();return e&&e!==t}return document.documentElement.contains(t)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=k({type:n,selectors:[["mat-form-field"]],contentQueries:function(e,o,r){if(e&1&&(Do(r,o._labelChild,eo,5),Ht(r,oo,5)(r,uc,5)(r,es,5)(r,mc,5)(r,io,5)),e&2){nn();let a;V(a=N())&&(o._formFieldControl=a.first),V(a=N())&&(o._prefixChildren=a),V(a=N())&&(o._suffixChildren=a),V(a=N())&&(o._errorChildren=a),V(a=N())&&(o._hintChildren=a)}},viewQuery:function(e,o){if(e&1&&(So(o._iconPrefixContainerSignal,Ga,5)(o._textPrefixContainerSignal,Ya,5)(o._iconSuffixContainerSignal,qa,5)(o._textSuffixContainerSignal,$a,5),Ut(Gl,5)(Ga,5)(Ya,5)(qa,5)($a,5)(Xa,5)(Qa,5)(Za,5)),e&2){nn(4);let r;V(r=N())&&(o._textField=r.first),V(r=N())&&(o._iconPrefixContainer=r.first),V(r=N())&&(o._textPrefixContainer=r.first),V(r=N())&&(o._iconSuffixContainer=r.first),V(r=N())&&(o._textSuffixContainer=r.first),V(r=N())&&(o._floatingLabel=r.first),V(r=N())&&(o._notchedOutline=r.first),V(r=N())&&(o._lineRipple=r.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(e,o){e&2&&S("mat-mdc-form-field-label-always-float",o._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",o._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",o._hasIconSuffix)("mat-form-field-invalid",o._control.errorState)("mat-form-field-disabled",o._control.disabled)("mat-form-field-autofilled",o._control.autofilled)("mat-form-field-appearance-fill",o.appearance=="fill")("mat-form-field-appearance-outline",o.appearance=="outline")("mat-form-field-hide-placeholder",o._hasFloatingLabel()&&!o._shouldLabelFloat())("mat-primary",o.color!=="accent"&&o.color!=="warn")("mat-accent",o.color==="accent")("mat-warn",o.color==="warn")("ng-untouched",o._shouldForward("untouched"))("ng-touched",o._shouldForward("touched"))("ng-pristine",o._shouldForward("pristine"))("ng-dirty",o._shouldForward("dirty"))("ng-valid",o._shouldForward("valid"))("ng-invalid",o._shouldForward("invalid"))("ng-pending",o._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[nt([{provide:ro,useExisting:n},{provide:is,useExisting:n}])],ngContentSelectors:ql,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(e,o){if(e&1&&($(Yl),ot(0,Kl,1,1,"ng-template",null,0,To),m(2,"div",6,1),F("click",function(a){return o._control.onContainerClick(a)}),Q(4,Zl,1,0,"div",7),m(5,"div",8),Q(6,tc,2,2,"div",9),Q(7,ec,3,0,"div",10),Q(8,ic,3,0,"div",11),m(9,"div",12),Q(10,oc,1,1,null,13),D(11),u(),Q(12,rc,3,0,"div",14),Q(13,ac,3,0,"div",15),u(),Q(14,sc,1,0,"div",16),u(),m(15,"div",17),Q(16,lc,2,0,"div",18)(17,dc,5,1,"div",19),u()),e&2){let r;p(2),S("mdc-text-field--filled",!o._hasOutline())("mdc-text-field--outlined",o._hasOutline())("mdc-text-field--no-label",!o._hasFloatingLabel())("mdc-text-field--disabled",o._control.disabled)("mdc-text-field--invalid",o._control.errorState),p(2),J(!o._hasOutline()&&!o._control.disabled?4:-1),p(2),J(o._hasOutline()?6:-1),p(),J(o._hasIconPrefix?7:-1),p(),J(o._hasTextPrefix?8:-1),p(2),J(!o._hasOutline()||o._forceDisplayInfixLabel()?10:-1),p(2),J(o._hasTextSuffix?12:-1),p(),J(o._hasIconSuffix?13:-1),p(),J(o._hasOutline()?-1:14),p(),S("mat-mdc-form-field-subscript-dynamic-size",o.subscriptSizing==="dynamic");let a=o._getSubscriptMessageType();p(),J((r=a)==="error"?16:r==="hint"?17:-1)}},dependencies:[Xa,Qa,Ho,Za,io],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return n})();var He=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=x({type:n});static \u0275inj=y({imports:[wr,_e,z]})}return n})();var _c=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=k({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(e,o){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return n})(),vc={passive:!0},os=(()=>{class n{_platform=s(P);_ngZone=s(M);_renderer=s(ct).createRenderer(null,null);_styleLoader=s(ht);_monitoredElements=new Map;constructor(){}monitor(t){if(!this._platform.isBrowser)return co;this._styleLoader.load(_c);let e=dt(t),o=this._monitoredElements.get(e);if(o)return o.subject;let r=new C,a="cdk-text-field-autofilled",l=h=>{h.animationName==="cdk-text-field-autofill-start"&&!e.classList.contains(a)?(e.classList.add(a),this._ngZone.run(()=>r.next({target:h.target,isAutofilled:!0}))):h.animationName==="cdk-text-field-autofill-end"&&e.classList.contains(a)&&(e.classList.remove(a),this._ngZone.run(()=>r.next({target:h.target,isAutofilled:!1})))},d=this._ngZone.runOutsideAngular(()=>(e.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(e,"animationstart",l,vc)));return this._monitoredElements.set(e,{subject:r,unlisten:d}),r}stopMonitoring(t){let e=dt(t),o=this._monitoredElements.get(e);o&&(o.unlisten(),o.subject.complete(),e.classList.remove("cdk-text-field-autofill-monitored"),e.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(e))}ngOnDestroy(){this._monitoredElements.forEach((t,e)=>this.stopMonitoring(e))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var rs=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=x({type:n});static \u0275inj=y({})}return n})();var as=new f("MAT_INPUT_VALUE_ACCESSOR");var Gi=(()=>{class n{isErrorState(t,e){return!!(t&&t.invalid&&(t.touched||e&&e.submitted))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Yi=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(i,t,e,o,r){this._defaultMatcher=i,this.ngControl=t,this._parentFormGroup=e,this._parentForm=o,this._stateChanges=r}updateErrorState(){let i=this.errorState,t=this._parentFormGroup||this._parentForm,e=this.matcher||this._defaultMatcher,o=this.ngControl?this.ngControl.control:null,r=e?.isErrorState(o,t)??!1;r!==i&&(this.errorState=r,this._stateChanges.next())}};var bc=["button","checkbox","file","hidden","image","radio","range","reset","submit"],yc=new f("MAT_INPUT_CONFIG"),qi=(()=>{class n{_elementRef=s(E);_platform=s(P);ngControl=s(Ft,{optional:!0,self:!0});_autofillMonitor=s(os);_ngZone=s(M);_formField=s(ro,{optional:!0});_renderer=s(it);_uid=s(pt).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=s(yc,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new C;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=ae(t),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(t){this._id=t||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Si.required)??!1}set required(t){this._required=ae(t)}_required;get type(){return this._type}set type(t){this._type=t||"text",this._validateType(),!this._isTextarea&&Mn().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(t){t!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(t):this._inputValueAccessor.value=t,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(t){this._readonly=ae(t)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(t=>Mn().has(t));constructor(){let t=s(qn,{optional:!0}),e=s(je,{optional:!0}),o=s(Gi),r=s(as,{optional:!0,self:!0}),a=this._elementRef.nativeElement,l=a.nodeName.toLowerCase();r?xe(r.value)?this._signalBasedValueAccessor=r:this._inputValueAccessor=r:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Yi(o,this.ngControl,e,t,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=l==="select",this._isTextarea=l==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Lt(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(t=>{this.autofilled=t.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(t){this._elementRef.nativeElement.focus(t)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(t){if(t!==this.focused){if(!this._isNativeSelect&&t&&this.disabled&&this.disabledInteractive){let e=this._elementRef.nativeElement;e.type==="number"?(e.type="text",e.setSelectionRange(0,0),e.type="number"):e.setSelectionRange(0,0)}this.focused=t,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let t=this._elementRef.nativeElement.value;this._previousNativeValue!==t&&(this._previousNativeValue=t,this.stateChanges.next())}_dirtyCheckPlaceholder(){let t=this._getPlaceholder();if(t!==this._previousPlaceholder){let e=this._elementRef.nativeElement;this._previousPlaceholder=t,t?e.setAttribute("placeholder",t):e.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){bc.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let t=this._elementRef.nativeElement.validity;return t&&t.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let t=this._elementRef.nativeElement,e=t.options[0];return this.focused||t.multiple||!this.empty||!!(t.selectedIndex>-1&&e&&e.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(t){let e=this._elementRef.nativeElement;t.length?e.setAttribute("aria-describedby",t.join(" ")):e.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let t=this._elementRef.nativeElement;return this._isNativeSelect&&(t.multiple||t.size>1)}_iOSKeyupListener=t=>{let e=t.target;!e.value&&e.selectionStart===0&&e.selectionEnd===0&&(e.setSelectionRange(1,1),e.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(e){return new(e||n)};static \u0275dir=g({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(e,o){e&1&&F("focus",function(){return o._focusChanged(!0)})("blur",function(){return o._focusChanged(!1)})("input",function(){return o._onInput()}),e&2&&(jt("id",o.id)("disabled",o.disabled&&!o.disabledInteractive)("required",o.required),Z("name",o.name||null)("readonly",o._getReadonlyAttribute())("aria-disabled",o.disabled&&o.disabledInteractive?"true":null)("aria-invalid",o.empty&&o.required?null:o.errorState)("aria-required",o.required)("id",o.id),S("mat-input-server",o._isServer)("mat-mdc-form-field-textarea-control",o._isInFormField&&o._isTextarea)("mat-mdc-form-field-input-control",o._isInFormField)("mat-mdc-input-disabled-interactive",o.disabledInteractive)("mdc-text-field__input",o._isInFormField)("mat-mdc-native-select-inline",o._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",j]},exportAs:["matInput"],features:[nt([{provide:oo,useExisting:n}]),gt]})}return n})(),$i=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=x({type:n});static \u0275inj=y({imports:[He,He,rs,z]})}return n})();var Xi=class n{bookmark;save=new B;fb=s(Ta);constructor(){}form=this.fb.group({title:[""],url:[""]});ngOnChanges(){this.bookmark?this.form.patchValue(this.bookmark):this.form.reset()}submit(){this.save.emit(_(_({},this.bookmark||{}),this.form.value)),this.form.reset()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-bookmark-form"]],inputs:{bookmark:"bookmark"},outputs:{save:"save"},features:[gt],decls:9,vars:4,consts:[[3,"ngSubmit","formGroup"],["appearance","outline","subscriptSizing","dynamic"],["matInput","","formControlName","title","placeholder","Title"],["matInput","","formControlName","url","placeholder","URL"],["type","submit","mat-raised-button","","color","primary","type","submit",3,"disabled"]],template:function(t,e){t&1&&(m(0,"form",0),F("ngSubmit",function(){return e.submit()}),m(1,"h3"),R(2),u(),m(3,"mat-form-field",1),at(4,"input",2),u(),m(5,"mat-form-field",1),at(6,"input",3),u(),m(7,"button",4),R(8),u()()),t&2&&(w("formGroup",e.form),p(2),Dt(e.bookmark?"Edit Bookmark":"Add Bookmark"),p(5),w("disabled",e.form.invalid),p(),Io(" ",e.bookmark?"Update":"Add"," "))},dependencies:[te,Va,Fa,ge,Bi,Ca,je,Xn,He,_e,$i,qi,Ui,Ha],styles:["form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}"]})};var xc=new f("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})});var ls=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=x({type:n});static \u0275inj=y({providers:[Gi,{provide:xc,useValue:{separatorKeyCodes:[13]}}],imports:[ce,z]})}return n})();var Cc=["*",[["mat-toolbar-row"]]],wc=["*","mat-toolbar-row"],Mc=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=g({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),cs=(()=>{class n{_elementRef=s(E);_platform=s(P);_document=s(O);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=k({type:n,selectors:[["mat-toolbar"]],contentQueries:function(e,o,r){if(e&1&&Ht(r,Mc,5),e&2){let a;V(a=N())&&(o._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(e,o){e&2&&(kt(o.color?"mat-"+o.color:""),S("mat-toolbar-multiple-rows",o._toolbarRows.length>0)("mat-toolbar-single-row",o._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:wc,decls:2,vars:0,template:function(e,o){e&1&&($(Cc),D(0),D(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var ds=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=x({type:n});static \u0275inj=y({imports:[z]})}return n})();var kc=n=>({"list-view":n});function Dc(n,i){n&1&&(m(0,"mat-icon",15),R(1,"search"),u())}function Sc(n,i){if(n&1){let t=xt();m(0,"button",16),F("click",function(){X(t);let o=A();return K(o.clearSearch())}),m(1,"mat-icon"),R(2,"close"),u()()}}function Ic(n,i){if(n&1){let t=xt();m(0,"app-bookmark-list",19),F("delete",function(o){X(t);let r=A(2);return K(r.delete(o))})("edit",function(o){X(t);let r=A(2);return K(r.openEdit(o))}),u()}if(n&2){let t=A().ngIf;w("bookmarks",t)}}function Ac(n,i){n&1&&(m(0,"p"),R(1,"No data found!"),u())}function Fc(n,i){if(n&1&&(Ke(0),m(1,"div",17)(2,"h2"),R(3,"Today"),u(),ot(4,Ic,1,1,"app-bookmark-list",18)(5,Ac,2,0,"p",11),u(),Ze()),n&2){let t=i.ngIf;p(4),w("ngIf",t.length),p(),w("ngIf",!t.length)}}function Rc(n,i){if(n&1){let t=xt();m(0,"app-bookmark-list",19),F("delete",function(o){X(t);let r=A(2);return K(r.delete(o))})("edit",function(o){X(t);let r=A(2);return K(r.openEdit(o))}),u()}if(n&2){let t=A().ngIf;w("bookmarks",t)}}function Oc(n,i){n&1&&(m(0,"p"),R(1,"No data found!"),u())}function Tc(n,i){if(n&1&&(Ke(0),m(1,"div",17)(2,"h2"),R(3,"Yesterday"),u(),ot(4,Rc,1,1,"app-bookmark-list",18)(5,Oc,2,0,"p",11),u(),Ze()),n&2){let t=i.ngIf;p(4),w("ngIf",t.length),p(),w("ngIf",!t.length)}}function Pc(n,i){if(n&1){let t=xt();m(0,"app-bookmark-list",19),F("delete",function(o){X(t);let r=A(2);return K(r.delete(o))})("edit",function(o){X(t);let r=A(2);return K(r.openEdit(o))}),u()}if(n&2){let t=A().ngIf;w("bookmarks",t)}}function Vc(n,i){n&1&&(m(0,"p"),R(1,"No data found!"),u())}function Nc(n,i){if(n&1&&(Ke(0),m(1,"div",17)(2,"h2"),R(3,"Older"),u(),ot(4,Pc,1,1,"app-bookmark-list",18)(5,Vc,2,0,"p",11),u(),Ze()),n&2){let t=i.ngIf;p(4),w("ngIf",t.length),p(),w("ngIf",!t.length)}}function Lc(n,i){if(n&1){let t=xt();m(0,"div",20),F("click",function(){X(t);let o=A();return K(o.closePanel())}),u()}}var ms=class n{searchTerm="";store=s(qo);constructor(){}ngOnInit(){this.store.dispatch(Xo())}onSearchChange(i){this.store.dispatch(sn({term:i}))}today$=this.store.select(cn);yesterday$=this.store.select(dn);older$=this.store.select(Jo);loading$=this.store.select(Qo);isSelected=!1;view="view_list";clearSearch(){this.searchTerm="",this.store.dispatch(sn({term:""}))}toggleView(){this.isSelected=!this.isSelected,this.view=this.isSelected?"view_module":"view_list"}add(i){this.store.dispatch(an({bookmark:i}))}delete(i){this.store.dispatch(Ko({id:i}))}isOpen=!1;selectedBookmark=null;openPanel(){this.selectedBookmark=null,this.isOpen=!0}openEdit(i){this.selectedBookmark=i,this.isOpen=!0}closePanel(){this.isOpen=!1}handleSave(i){i.id?this.store.dispatch(Zo({bookmark:i})):this.store.dispatch(an({bookmark:i})),this.closePanel()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["app-bookmark-pages"]],decls:26,vars:20,consts:[["color","primary",1,"bookmark-header"],[1,"logo"],[1,"title"],[1,"search"],["subscriptSizing","dynamic"],["matInput","","placeholder","Search bookmarks",3,"ngModelChange","ngModel"],["matSuffix","",4,"ngIf"],["mat-icon-button","","matSuffix","",3,"click",4,"ngIf"],[1,"bookmark-header_right","add-action"],[3,"click"],[1,"bookmark-container",3,"ngClass"],[4,"ngIf"],["class","overlay",3,"click",4,"ngIf"],[1,"side-panel"],[3,"save","bookmark"],["matSuffix",""],["mat-icon-button","","matSuffix","",3,"click"],[1,"lists"],[3,"bookmarks","delete","edit",4,"ngIf"],[3,"delete","edit","bookmarks"],[1,"overlay",3,"click"]],template:function(t,e){t&1&&(m(0,"mat-toolbar",0)(1,"div",1)(2,"mat-icon"),R(3,"bookmark"),u(),m(4,"span",2),R(5,"Bookmarker"),u()(),m(6,"div",3)(7,"mat-form-field",4)(8,"input",5),F("ngModelChange",function(r){return e.onSearchChange(r)}),Ro("ngModelChange",function(r){return Fo(e.searchTerm,r)||(e.searchTerm=r),r}),u(),ot(9,Dc,2,0,"mat-icon",6)(10,Sc,3,0,"button",7),u()(),m(11,"div",8)(12,"mat-icon",9),F("click",function(){return e.toggleView()}),R(13),u(),m(14,"mat-icon",9),F("click",function(){return e.openPanel()}),R(15,"add"),u()()(),m(16,"section",10),ot(17,Fc,6,2,"ng-container",11),Qe(18,"async"),ot(19,Tc,6,2,"ng-container",11),Qe(20,"async"),ot(21,Nc,6,2,"ng-container",11),Qe(22,"async"),ot(23,Lc,1,0,"div",12),m(24,"div",13)(25,"app-bookmark-form",14),F("save",function(r){return e.handleSave(r)}),u()()()),t&2&&(p(8),Ao("ngModel",e.searchTerm),p(),w("ngIf",!e.searchTerm),p(),w("ngIf",e.searchTerm),p(3),Dt(e.view),p(3),w("ngClass",Oo(18,kc,e.isSelected)),p(),w("ngIf",Je(18,12,e.today$)),p(2),w("ngIf",Je(20,14,e.yesterday$)),p(2),w("ngIf",Je(22,16,e.older$)),p(2),w("ngIf",e.isOpen),p(),S("open",e.isOpen),p(),w("bookmark",e.selectedBookmark))},dependencies:[te,Bo,jo,ki,Xi,$i,qi,_e,no,ii,ls,si,ai,Ui,Jn,Pa,ge,Bi,$n,ds,cs,Uo],styles:[".bookmark-header[_ngcontent-%COMP%]{display:grid;align-items:center;justify-content:space-between;margin-bottom:20px;background:#324c8c;grid-template-columns:1fr 2fr 1fr}.bookmark-header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.bookmark-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{justify-content:start;color:#fff}.bookmark-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:20px;font-weight:500;font-family:Quicksand,sans-serif}.bookmark-header[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{justify-content:center}.bookmark-header[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]     .mat-mdc-form-field{width:75%}.bookmark-header[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]     .mat-mdc-form-field .mat-mdc-text-field-wrapper{background:none;padding:0}.bookmark-header[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]     .mat-mdc-form-field .mat-mdc-text-field-wrapper input{color:#fff;padding-left:15px}.bookmark-header[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]     .mat-mdc-form-field .mat-mdc-text-field-wrapper input::placeholder{color:#ffffff8a}.bookmark-header[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]     .mat-mdc-form-field .mat-mdc-text-field-wrapper .mat-icon{color:#fff}.bookmark-header[_ngcontent-%COMP%]   .add-action[_ngcontent-%COMP%]{cursor:pointer;justify-content:end}.bookmark-header[_ngcontent-%COMP%]   .add-action[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{color:#fff;border:1px solid #fff;border-radius:3px;padding:2px}.bookmark-container[_ngcontent-%COMP%]{display:grid;margin:0 auto;max-width:1200px;width:100%}.bookmark-container.list-view[_ngcontent-%COMP%]   app-bookmark-list[_ngcontent-%COMP%]{display:flex;flex-direction:column}.bookmark-container[_ngcontent-%COMP%]   app-bookmark-list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:16px}.bookmark-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%]{border:#ccc 1px solid;border-radius:5px;padding:15px;margin:0 15px 15px;box-sizing:border-box}.bookmark-container[_ngcontent-%COMP%]   .lists[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 15px}.overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background:#0000004d;z-index:100}.side-panel[_ngcontent-%COMP%]{position:fixed;top:65px;right:-440px;width:400px;height:100%;background:#fff;box-shadow:-2px 0 10px #0003;transition:right .3s ease;z-index:101;padding:20px;box-sizing:border-box}.side-panel.open[_ngcontent-%COMP%]{right:0}"]})};export{ms as BookmarkPagesComponent};
