(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Rc="185",Rg=0,_h=1,Pg=2,Sa=1,Lg=2,ir=3,On=0,ri=1,Vi=2,on=0,Rs=1,xh=2,yh=3,Eh=4,Ig=5,qn=100,Dg=101,Ng=102,Ug=103,Og=104,kg=200,Fg=201,Bg=202,zg=203,vl=204,_l=205,Vg=206,Hg=207,Gg=208,Wg=209,Xg=210,$g=211,qg=212,Yg=213,Zg=214,xl=0,yl=1,El=2,Ns=3,Ml=4,wl=5,Sl=6,bl=7,pu=0,Kg=1,jg=2,Xi=0,Pc=1,mu=2,gu=3,vu=4,_u=5,xu=6,yu=7,Eu=300,Kn=301,Us=302,Po=303,Lo=304,co=306,Tl=1e3,sn=1001,Al=1002,Wt=1003,Jg=1004,qr=1005,Dt=1006,Io=1007,Pn=1008,gi=1009,Mu=1010,wu=1011,wr=1012,Lc=1013,Yi=1014,Hi=1015,un=1016,Ic=1017,Dc=1018,Sr=1020,Su=35902,bu=35899,Tu=1021,Au=1022,Ti=1023,fn=1026,Zn=1027,Cu=1028,Nc=1029,jn=1030,Uc=1031,Oc=1033,ba=33776,Ta=33777,Aa=33778,Ca=33779,Cl=35840,Rl=35841,Pl=35842,Ll=35843,Il=36196,Dl=37492,Nl=37496,Ul=37488,Ol=37489,Ua=37490,kl=37491,Fl=37808,Bl=37809,zl=37810,Vl=37811,Hl=37812,Gl=37813,Wl=37814,Xl=37815,$l=37816,ql=37817,Yl=37818,Zl=37819,Kl=37820,jl=37821,Jl=36492,Ql=36494,ec=36495,tc=36283,ic=36284,Oa=36285,nc=36286,Qg=3200,Mh=0,ev=1,Cn="",mi="srgb",br="srgb-linear",ka="linear",lt="srgb",as=7680,wh=519,tv=512,iv=513,nv=514,kc=515,sv=516,rv=517,Fc=518,av=519,Sh=35044,bh="300 es",Gi=2e3,Fa=2001;function ov(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lv(){const i=Tr("canvas");return i.style.display="block",i}const Th={};function Ah(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ru(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ie(...i){i=Ru(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function je(...i){i=Ru(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ps(...i){const e=i.join(" ");e in Th||(Th[e]=!0,Ie(...i))}function cv(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const hv={[xl]:yl,[El]:Sl,[Ml]:bl,[Ns]:wl,[yl]:xl,[Sl]:El,[bl]:Ml,[wl]:Ns};class ns{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ch=1234567;const ar=Math.PI/180,Ar=180/Math.PI;function Vs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function qe(i,e,t){return Math.max(e,Math.min(t,i))}function Bc(i,e){return(i%e+e)%e}function dv(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function uv(i,e,t){return i!==e?(t-i)/(e-i):0}function or(i,e,t){return(1-t)*i+t*e}function fv(i,e,t,n){return or(i,e,1-Math.exp(-t*n))}function pv(i,e=1){return e-Math.abs(Bc(i,e*2)-e)}function mv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function gv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function vv(i,e){return i+Math.floor(Math.random()*(e-i+1))}function _v(i,e){return i+Math.random()*(e-i)}function xv(i){return i*(.5-Math.random())}function yv(i){i!==void 0&&(Ch=i);let e=Ch+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ev(i){return i*ar}function Mv(i){return i*Ar}function wv(i){return(i&i-1)===0&&i!==0}function Sv(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bv(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Tv(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),f=r((e-n)/2),p=a((e-n)/2),m=r((n-e)/2),v=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*f,c*p,o*l);break;case"YZY":i.set(c*p,o*h,c*f,o*l);break;case"ZXZ":i.set(c*f,c*p,o*h,o*l);break;case"XZX":i.set(o*h,c*v,c*m,o*l);break;case"YXY":i.set(c*m,o*h,c*v,o*l);break;case"ZYZ":i.set(c*v,c*m,o*h,o*l);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ss(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Jt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Be={DEG2RAD:ar,RAD2DEG:Ar,generateUUID:Vs,clamp:qe,euclideanModulo:Bc,mapLinear:dv,inverseLerp:uv,lerp:or,damp:fv,pingpong:pv,smoothstep:mv,smootherstep:gv,randInt:vv,randFloat:_v,randFloatSpread:xv,seededRandom:yv,degToRad:Ev,radToDeg:Mv,isPowerOfTwo:wv,ceilPowerOfTwo:Sv,floorPowerOfTwo:bv,setQuaternionFromProperEuler:Tv,normalize:Jt,denormalize:Ss};class Ge{static{Ge.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],p=r[a+0],m=r[a+1],v=r[a+2],y=r[a+3];if(f!==y||c!==p||l!==m||h!==v){let d=c*p+l*m+h*v+f*y;d<0&&(p=-p,m=-m,v=-v,y=-y,d=-d);let u=1-o;if(d<.9995){const S=Math.acos(d),b=Math.sin(S);u=Math.sin(u*S)/b,o=Math.sin(o*S)/b,c=c*u+p*o,l=l*u+m*o,h=h*u+v*o,f=f*u+y*o}else{c=c*u+p*o,l=l*u+m*o,h=h*u+v*o,f=f*u+y*o;const S=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=S,l*=S,h*=S,f*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[a],p=r[a+1],m=r[a+2],v=r[a+3];return e[t]=o*v+h*f+c*m-l*p,e[t+1]=c*v+h*p+l*f-o*m,e[t+2]=l*v+h*m+o*p-c*f,e[t+3]=h*v-o*f-c*p-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),f=o(r/2),p=c(n/2),m=c(s/2),v=c(r/2);switch(a){case"XYZ":this._x=p*h*f+l*m*v,this._y=l*m*f-p*h*v,this._z=l*h*v+p*m*f,this._w=l*h*f-p*m*v;break;case"YXZ":this._x=p*h*f+l*m*v,this._y=l*m*f-p*h*v,this._z=l*h*v-p*m*f,this._w=l*h*f+p*m*v;break;case"ZXY":this._x=p*h*f-l*m*v,this._y=l*m*f+p*h*v,this._z=l*h*v+p*m*f,this._w=l*h*f-p*m*v;break;case"ZYX":this._x=p*h*f-l*m*v,this._y=l*m*f+p*h*v,this._z=l*h*v-p*m*f,this._w=l*h*f+p*m*v;break;case"YZX":this._x=p*h*f+l*m*v,this._y=l*m*f+p*h*v,this._z=l*h*v-p*m*f,this._w=l*h*f-p*m*v;break;case"XZY":this._x=p*h*f-l*m*v,this._y=l*m*f-p*h*v,this._z=l*h*v+p*m*f,this._w=l*h*f+p*m*v;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],f=t[10],p=n+o+f;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{static{P.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+c*l+a*f-o*h,this.y=n+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Do.copy(this).projectOnVector(e),this.sub(Do)}reflect(e){return this.sub(Do.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Do=new P,Rh=new gn;class Fe{static{Fe.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],p=n[2],m=n[5],v=n[8],y=s[0],d=s[3],u=s[6],S=s[1],b=s[4],E=s[7],T=s[2],w=s[5],C=s[8];return r[0]=a*y+o*S+c*T,r[3]=a*d+o*b+c*w,r[6]=a*u+o*E+c*C,r[1]=l*y+h*S+f*T,r[4]=l*d+h*b+f*w,r[7]=l*u+h*E+f*C,r[2]=p*y+m*S+v*T,r[5]=p*d+m*b+v*w,r[8]=p*u+m*E+v*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=h*a-o*l,p=o*c-h*r,m=l*r-a*c,v=t*f+n*p+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=f*y,e[1]=(s*l-h*n)*y,e[2]=(o*n-s*a)*y,e[3]=p*y,e[4]=(h*t-s*c)*y,e[5]=(s*r-o*t)*y,e[6]=m*y,e[7]=(n*c-l*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(No.makeScale(e,t)),this}rotate(e){return Ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(No.makeRotation(-e)),this}translate(e,t){return Ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(No.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const No=new Fe,Ph=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lh=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Av(){const i={enabled:!0,workingColorSpace:br,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===lt&&(s.r=ln(s.r),s.g=ln(s.g),s.b=ln(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(s.r=Ls(s.r),s.g=Ls(s.g),s.b=Ls(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Cn?ka:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ps("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ps("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[br]:{primaries:e,whitePoint:n,transfer:ka,toXYZ:Ph,fromXYZ:Lh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:n,transfer:lt,toXYZ:Ph,fromXYZ:Lh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),i}const Ze=Av();function ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let os;class Cv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{os===void 0&&(os=Tr("canvas")),os.width=e.width,os.height=e.height;const s=os.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=os}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Tr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ln(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ln(t[n]/255)*255):t[n]=ln(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rv=0;class zc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rv++}),this.uuid=Vs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Uo(s[a].image)):r.push(Uo(s[a]))}else r=Uo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Uo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cv.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let Pv=0;const Oo=new P;class Nt extends ns{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,n=sn,s=sn,r=Dt,a=Pn,o=Ti,c=gi,l=Nt.DEFAULT_ANISOTROPY,h=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pv++}),this.uuid=Vs(),this.name="",this.source=new zc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Oo).x}get height(){return this.source.getSize(Oo).y}get depth(){return this.source.getSize(Oo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tl:e.x=e.x-Math.floor(e.x);break;case sn:e.x=e.x<0?0:1;break;case Al:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tl:e.y=e.y-Math.floor(e.y);break;case sn:e.y=e.y<0?0:1;break;case Al:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=Eu;Nt.DEFAULT_ANISOTROPY=1;class Et{static{Et.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],f=c[8],p=c[1],m=c[5],v=c[9],y=c[2],d=c[6],u=c[10];if(Math.abs(h-p)<.01&&Math.abs(f-y)<.01&&Math.abs(v-d)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+y)<.1&&Math.abs(v+d)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,E=(m+1)/2,T=(u+1)/2,w=(h+p)/4,C=(f+y)/4,_=(v+d)/4;return b>E&&b>T?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=w/n,r=C/n):E>T?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=w/s,r=_/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=C/r,s=_/r),this.set(n,s,r,t),this}let S=Math.sqrt((d-v)*(d-v)+(f-y)*(f-y)+(p-h)*(p-h));return Math.abs(S)<.001&&(S=1),this.x=(d-v)/S,this.y=(f-y)/S,this.z=(p-h)/S,this.w=Math.acos((l+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lv extends ns{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Nt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Dt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new zc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends Lv{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Pu extends Nt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Iv extends Nt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rt{static{rt.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,c,l,h,f,p,m,v,y,d){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,f,p,m,v,y,d)}set(e,t,n,s,r,a,o,c,l,h,f,p,m,v,y,d){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=f,u[14]=p,u[3]=m,u[7]=v,u[11]=y,u[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/ls.setFromMatrixColumn(e,0).length(),r=1/ls.setFromMatrixColumn(e,1).length(),a=1/ls.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const p=a*h,m=a*f,v=o*h,y=o*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=m+v*l,t[5]=p-y*l,t[9]=-o*c,t[2]=y-p*l,t[6]=v+m*l,t[10]=a*c}else if(e.order==="YXZ"){const p=c*h,m=c*f,v=l*h,y=l*f;t[0]=p+y*o,t[4]=v*o-m,t[8]=a*l,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=m*o-v,t[6]=y+p*o,t[10]=a*c}else if(e.order==="ZXY"){const p=c*h,m=c*f,v=l*h,y=l*f;t[0]=p-y*o,t[4]=-a*f,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*h,t[9]=y-p*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const p=a*h,m=a*f,v=o*h,y=o*f;t[0]=c*h,t[4]=v*l-m,t[8]=p*l+y,t[1]=c*f,t[5]=y*l+p,t[9]=m*l-v,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const p=a*c,m=a*l,v=o*c,y=o*l;t[0]=c*h,t[4]=y-p*f,t[8]=v*f+m,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*f+v,t[10]=p-y*f}else if(e.order==="XZY"){const p=a*c,m=a*l,v=o*c,y=o*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=p*f+y,t[5]=a*h,t[9]=m*f-v,t[2]=v*f-m,t[6]=o*h,t[10]=y*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dv,e,Nv)}lookAt(e,t,n){const s=this.elements;return li.subVectors(e,t),li.lengthSq()===0&&(li.z=1),li.normalize(),En.crossVectors(n,li),En.lengthSq()===0&&(Math.abs(n.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),En.crossVectors(n,li)),En.normalize(),Yr.crossVectors(li,En),s[0]=En.x,s[4]=Yr.x,s[8]=li.x,s[1]=En.y,s[5]=Yr.y,s[9]=li.y,s[2]=En.z,s[6]=Yr.z,s[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],p=n[9],m=n[13],v=n[2],y=n[6],d=n[10],u=n[14],S=n[3],b=n[7],E=n[11],T=n[15],w=s[0],C=s[4],_=s[8],A=s[12],N=s[1],L=s[5],F=s[9],q=s[13],j=s[2],B=s[6],Y=s[10],V=s[14],K=s[3],te=s[7],pe=s[11],xe=s[15];return r[0]=a*w+o*N+c*j+l*K,r[4]=a*C+o*L+c*B+l*te,r[8]=a*_+o*F+c*Y+l*pe,r[12]=a*A+o*q+c*V+l*xe,r[1]=h*w+f*N+p*j+m*K,r[5]=h*C+f*L+p*B+m*te,r[9]=h*_+f*F+p*Y+m*pe,r[13]=h*A+f*q+p*V+m*xe,r[2]=v*w+y*N+d*j+u*K,r[6]=v*C+y*L+d*B+u*te,r[10]=v*_+y*F+d*Y+u*pe,r[14]=v*A+y*q+d*V+u*xe,r[3]=S*w+b*N+E*j+T*K,r[7]=S*C+b*L+E*B+T*te,r[11]=S*_+b*F+E*Y+T*pe,r[15]=S*A+b*q+E*V+T*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],f=e[6],p=e[10],m=e[14],v=e[3],y=e[7],d=e[11],u=e[15],S=c*m-l*p,b=o*m-l*f,E=o*p-c*f,T=a*m-l*h,w=a*p-c*h,C=a*f-o*h;return t*(y*S-d*b+u*E)-n*(v*S-d*T+u*w)+s*(v*b-y*T+u*C)-r*(v*E-y*w+d*C)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=e[9],p=e[10],m=e[11],v=e[12],y=e[13],d=e[14],u=e[15],S=t*o-n*a,b=t*c-s*a,E=t*l-r*a,T=n*c-s*o,w=n*l-r*o,C=s*l-r*c,_=h*y-f*v,A=h*d-p*v,N=h*u-m*v,L=f*d-p*y,F=f*u-m*y,q=p*u-m*d,j=S*q-b*F+E*L+T*N-w*A+C*_;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/j;return e[0]=(o*q-c*F+l*L)*B,e[1]=(s*F-n*q-r*L)*B,e[2]=(y*C-d*w+u*T)*B,e[3]=(p*w-f*C-m*T)*B,e[4]=(c*N-a*q-l*A)*B,e[5]=(t*q-s*N+r*A)*B,e[6]=(d*E-v*C-u*b)*B,e[7]=(h*C-p*E+m*b)*B,e[8]=(a*F-o*N+l*_)*B,e[9]=(n*N-t*F-r*_)*B,e[10]=(v*w-y*E+u*S)*B,e[11]=(f*E-h*w-m*S)*B,e[12]=(o*A-a*L-c*_)*B,e[13]=(t*L-n*A+s*_)*B,e[14]=(y*b-v*T-d*S)*B,e[15]=(h*T-f*b+p*S)*B,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,f=o+o,p=r*l,m=r*h,v=r*f,y=a*h,d=a*f,u=o*f,S=c*l,b=c*h,E=c*f,T=n.x,w=n.y,C=n.z;return s[0]=(1-(y+u))*T,s[1]=(m+E)*T,s[2]=(v-b)*T,s[3]=0,s[4]=(m-E)*w,s[5]=(1-(p+u))*w,s[6]=(d+S)*w,s[7]=0,s[8]=(v+b)*C,s[9]=(d-S)*C,s[10]=(1-(p+y))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ls.set(s[0],s[1],s[2]).length();const o=ls.set(s[4],s[5],s[6]).length(),c=ls.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ei.copy(this);const l=1/a,h=1/o,f=1/c;return Ei.elements[0]*=l,Ei.elements[1]*=l,Ei.elements[2]*=l,Ei.elements[4]*=h,Ei.elements[5]*=h,Ei.elements[6]*=h,Ei.elements[8]*=f,Ei.elements[9]*=f,Ei.elements[10]*=f,t.setFromRotationMatrix(Ei),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Gi,c=!1){const l=this.elements,h=2*r/(t-e),f=2*r/(n-s),p=(t+e)/(t-e),m=(n+s)/(n-s);let v,y;if(c)v=r/(a-r),y=a*r/(a-r);else if(o===Gi)v=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Fa)v=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=f,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Gi,c=!1){const l=this.elements,h=2/(t-e),f=2/(n-s),p=-(t+e)/(t-e),m=-(n+s)/(n-s);let v,y;if(c)v=1/(a-r),y=a/(a-r);else if(o===Gi)v=-2/(a-r),y=-(a+r)/(a-r);else if(o===Fa)v=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=f,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=v,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ls=new P,Ei=new rt,Dv=new P(0,0,0),Nv=new P(1,1,1),En=new P,Yr=new P,li=new P,Ih=new rt,Dh=new gn;class kn{constructor(e=0,t=0,n=0,s=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ih.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ih,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dh.setFromEuler(this),this.setFromQuaternion(Dh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class Vc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Uv=0;const Nh=new P,cs=new gn,Ki=new rt,Zr=new P,Xs=new P,Ov=new P,kv=new gn,Uh=new P(1,0,0),Oh=new P(0,1,0),kh=new P(0,0,1),Fh={type:"added"},Fv={type:"removed"},hs={type:"childadded",child:null},ko={type:"childremoved",child:null};class $t extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uv++}),this.uuid=Vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new P,t=new kn,n=new gn,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rt},normalMatrix:{value:new Fe}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(Uh,e)}rotateY(e){return this.rotateOnAxis(Oh,e)}rotateZ(e){return this.rotateOnAxis(kh,e)}translateOnAxis(e,t){return Nh.copy(e).applyQuaternion(this.quaternion),this.position.add(Nh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uh,e)}translateY(e){return this.translateOnAxis(Oh,e)}translateZ(e){return this.translateOnAxis(kh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zr.copy(e):Zr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Xs,Zr,this.up):Ki.lookAt(Zr,Xs,this.up),this.quaternion.setFromRotationMatrix(Ki),s&&(Ki.extractRotation(s.matrixWorld),cs.setFromRotationMatrix(Ki),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fh),hs.child=e,this.dispatchEvent(hs),hs.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fv),ko.child=e,this.dispatchEvent(ko),ko.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fh),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,Ov),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,kv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),f=a(e.shapes),p=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}$t.DEFAULT_UP=new P(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class rn extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bv={type:"move"};class Fo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const y of e.hand.values()){const d=t.getJointPose(y,n),u=this._getHandJoint(l,y);d!==null&&(u.matrix.fromArray(d.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=d.radius),u.visible=d!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],p=h.position.distanceTo(f.position),m=.02,v=.005;l.inputState.pinching&&p>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bv)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new rn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Lu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function Bo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class tt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ze.workingColorSpace){if(e=Bc(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Bo(a,r,e+1/3),this.g=Bo(a,r,e),this.b=Bo(a,r,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,t=mi){function n(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mi){const n=Lu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ln(e.r),this.g=ln(e.g),this.b=ln(e.b),this}copyLinearToSRGB(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return Ze.workingToColorSpace(jt.copy(this),e),Math.round(qe(jt.r*255,0,255))*65536+Math.round(qe(jt.g*255,0,255))*256+Math.round(qe(jt.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(jt.copy(this),t);const n=jt.r,s=jt.g,r=jt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=mi){Ze.workingToColorSpace(jt.copy(this),e);const t=jt.r,n=jt.g,s=jt.b;return e!==mi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Mn),this.setHSL(Mn.h+e,Mn.s+t,Mn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mn),e.getHSL(Kr);const n=or(Mn.h,Kr.h,t),s=or(Mn.s,Kr.s,t),r=or(Mn.l,Kr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new tt;tt.NAMES=Lu;class Ba extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Mi=new P,ji=new P,zo=new P,Ji=new P,ds=new P,us=new P,Bh=new P,Vo=new P,Ho=new P,Go=new P,Wo=new Et,Xo=new Et,$o=new Et;class bi{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Mi.subVectors(e,t),s.cross(Mi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Mi.subVectors(s,t),ji.subVectors(n,t),zo.subVectors(e,t);const a=Mi.dot(Mi),o=Mi.dot(ji),c=Mi.dot(zo),l=ji.dot(ji),h=ji.dot(zo),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;const p=1/f,m=(l*c-o*h)*p,v=(a*h-o*c)*p;return r.set(1-m-v,v,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Ji)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ji.x),c.addScaledVector(a,Ji.y),c.addScaledVector(o,Ji.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Wo.setScalar(0),Xo.setScalar(0),$o.setScalar(0),Wo.fromBufferAttribute(e,t),Xo.fromBufferAttribute(e,n),$o.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Wo,r.x),a.addScaledVector(Xo,r.y),a.addScaledVector($o,r.z),a}static isFrontFacing(e,t,n,s){return Mi.subVectors(n,t),ji.subVectors(e,t),Mi.cross(ji).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),Mi.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return bi.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;ds.subVectors(s,n),us.subVectors(r,n),Vo.subVectors(e,n);const c=ds.dot(Vo),l=us.dot(Vo);if(c<=0&&l<=0)return t.copy(n);Ho.subVectors(e,s);const h=ds.dot(Ho),f=us.dot(Ho);if(h>=0&&f<=h)return t.copy(s);const p=c*f-h*l;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(ds,a);Go.subVectors(e,r);const m=ds.dot(Go),v=us.dot(Go);if(v>=0&&m<=v)return t.copy(r);const y=m*l-c*v;if(y<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(n).addScaledVector(us,o);const d=h*v-m*f;if(d<=0&&f-h>=0&&m-v>=0)return Bh.subVectors(r,s),o=(f-h)/(f-h+(m-v)),t.copy(s).addScaledVector(Bh,o);const u=1/(d+y+p);return a=y*u,o=p*u,t.copy(n).addScaledVector(ds,a).addScaledVector(us,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Hs{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,wi):wi.fromBufferAttribute(r,a),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),jr.copy(n.boundingBox)),jr.applyMatrix4(e.matrixWorld),this.union(jr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($s),Jr.subVectors(this.max,$s),fs.subVectors(e.a,$s),ps.subVectors(e.b,$s),ms.subVectors(e.c,$s),wn.subVectors(ps,fs),Sn.subVectors(ms,ps),Hn.subVectors(fs,ms);let t=[0,-wn.z,wn.y,0,-Sn.z,Sn.y,0,-Hn.z,Hn.y,wn.z,0,-wn.x,Sn.z,0,-Sn.x,Hn.z,0,-Hn.x,-wn.y,wn.x,0,-Sn.y,Sn.x,0,-Hn.y,Hn.x,0];return!qo(t,fs,ps,ms,Jr)||(t=[1,0,0,0,1,0,0,0,1],!qo(t,fs,ps,ms,Jr))?!1:(Qr.crossVectors(wn,Sn),t=[Qr.x,Qr.y,Qr.z],qo(t,fs,ps,ms,Jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Qi=[new P,new P,new P,new P,new P,new P,new P,new P],wi=new P,jr=new Hs,fs=new P,ps=new P,ms=new P,wn=new P,Sn=new P,Hn=new P,$s=new P,Jr=new P,Qr=new P,Gn=new P;function qo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Gn.fromArray(i,r);const o=s.x*Math.abs(Gn.x)+s.y*Math.abs(Gn.y)+s.z*Math.abs(Gn.z),c=e.dot(Gn),l=t.dot(Gn),h=n.dot(Gn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Ct=new P,ea=new Ge;let zv=0;class $i extends ns{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sh,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ea.fromBufferAttribute(this,t),ea.applyMatrix3(e),this.setXY(t,ea.x,ea.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ss(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ss(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ss(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ss(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ss(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array),s=Jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sh&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Iu extends $i{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Du extends $i{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ti extends $i{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Vv=new Hs,qs=new P,Yo=new P;class ho{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Vv.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qs.subVectors(e,this.center);const t=qs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(qs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qs.copy(e.center).add(Yo)),this.expandByPoint(qs.copy(e.center).sub(Yo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Hv=0;const fi=new rt,Zo=new $t,gs=new P,ci=new Hs,Ys=new Hs,Ft=new P;class _i extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hv++}),this.uuid=Vs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ov(e)?Du:Iu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,n){return fi.makeTranslation(e,t,n),this.applyMatrix4(fi),this}scale(e,t,n){return fi.makeScale(e,t,n),this.applyMatrix4(fi),this}lookAt(e){return Zo.lookAt(e),Zo.updateMatrix(),this.applyMatrix4(Zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ti(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];ci.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ho);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(ci.min,Ys.min),ci.expandByPoint(Ft),Ft.addVectors(ci.max,Ys.max),ci.expandByPoint(Ft)):(ci.expandByPoint(Ys.min),ci.expandByPoint(Ys.max))}ci.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ft));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ft.fromBufferAttribute(o,l),c&&(gs.fromBufferAttribute(e,l),Ft.add(gs)),s=Math.max(s,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new $i(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new P,c[_]=new P;const l=new P,h=new P,f=new P,p=new Ge,m=new Ge,v=new Ge,y=new P,d=new P;function u(_,A,N){l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,A),f.fromBufferAttribute(n,N),p.fromBufferAttribute(r,_),m.fromBufferAttribute(r,A),v.fromBufferAttribute(r,N),h.sub(l),f.sub(l),m.sub(p),v.sub(p);const L=1/(m.x*v.y-v.x*m.y);isFinite(L)&&(y.copy(h).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(L),d.copy(f).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(L),o[_].add(y),o[A].add(y),o[N].add(y),c[_].add(d),c[A].add(d),c[N].add(d))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let _=0,A=S.length;_<A;++_){const N=S[_],L=N.start,F=N.count;for(let q=L,j=L+F;q<j;q+=3)u(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const b=new P,E=new P,T=new P,w=new P;function C(_){T.fromBufferAttribute(s,_),w.copy(T);const A=o[_];b.copy(A),b.sub(T.multiplyScalar(T.dot(A))).normalize(),E.crossVectors(w,A);const L=E.dot(c[_])<0?-1:1;a.setXYZW(_,b.x,b.y,b.z,L)}for(let _=0,A=S.length;_<A;++_){const N=S[_],L=N.start,F=N.count;for(let q=L,j=L+F;q<j;q+=3)C(e.getX(q+0)),C(e.getX(q+1)),C(e.getX(q+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new $i(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,f=new P;if(e)for(let p=0,m=e.count;p<m;p+=3){const v=e.getX(p+0),y=e.getX(p+1),d=e.getX(p+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,d),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,d),o.add(h),c.add(h),l.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,f=o.normalized,p=new l.constructor(c.length*h);let m=0,v=0;for(let y=0,d=c.length;y<d;y++){o.isInterleavedBufferAttribute?m=c[y]*o.data.stride+o.offset:m=c[y]*h;for(let u=0;u<h;u++)p[v++]=l[m++]}return new $i(p,h,f)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _i,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){const p=l[h],m=e(p,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,p=l.length;f<p;f++){const m=l[f];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],f=r[l];for(let p=0,m=f.length;p<m;p++)h.push(f[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Gv=0;class Dr extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=Vs(),this.name="",this.type="Material",this.blending=Rs,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vl,this.blendDst=_l,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vl&&(n.blendSrc=this.blendSrc),this.blendDst!==_l&&(n.blendDst=this.blendDst),this.blendEquation!==qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(n.stencilFail=this.stencilFail),this.stencilZFail!==as&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ge().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ge().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const en=new P,Ko=new P,ta=new P,bn=new P,jo=new P,ia=new P,Jo=new P;class Hc{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,en)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=en.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(en.copy(this.origin).addScaledVector(this.direction,t),en.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ko.copy(e).add(t).multiplyScalar(.5),ta.copy(t).sub(e).normalize(),bn.copy(this.origin).sub(Ko);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ta),o=bn.dot(this.direction),c=-bn.dot(ta),l=bn.lengthSq(),h=Math.abs(1-a*a);let f,p,m,v;if(h>0)if(f=a*c-o,p=a*o-c,v=r*h,f>=0)if(p>=-v)if(p<=v){const y=1/h;f*=y,p*=y,m=f*(f+a*p+2*o)+p*(a*f+p+2*c)+l}else p=r,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*c)+l;else p=-r,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*c)+l;else p<=-v?(f=Math.max(0,-(-a*r+o)),p=f>0?-r:Math.min(Math.max(-r,-c),r),m=-f*f+p*(p+2*c)+l):p<=v?(f=0,p=Math.min(Math.max(-r,-c),r),m=p*(p+2*c)+l):(f=Math.max(0,-(a*r+o)),p=f>0?r:Math.min(Math.max(-r,-c),r),m=-f*f+p*(p+2*c)+l);else p=a>0?-r:r,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ko).addScaledVector(ta,p),m}intersectSphere(e,t){en.subVectors(e.center,this.origin);const n=en.dot(this.direction),s=en.dot(en)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,s=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,s=(e.min.x-p.x)*l),h>=0?(r=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-p.z)*f,c=(e.max.z-p.z)*f):(o=(e.max.z-p.z)*f,c=(e.min.z-p.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,en)!==null}intersectTriangle(e,t,n,s,r){jo.subVectors(t,e),ia.subVectors(n,e),Jo.crossVectors(jo,ia);let a=this.direction.dot(Jo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;bn.subVectors(this.origin,e);const c=o*this.direction.dot(ia.crossVectors(bn,ia));if(c<0)return null;const l=o*this.direction.dot(jo.cross(bn));if(l<0||c+l>a)return null;const h=-o*bn.dot(Jo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pn extends Dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=pu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zh=new rt,Wn=new Hc,na=new ho,Vh=new P,sa=new P,ra=new P,aa=new P,Qo=new P,oa=new P,Hh=new P,la=new P;class Yt extends $t{constructor(e=new _i,t=new pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){oa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],f=r[c];h!==0&&(Qo.fromBufferAttribute(f,e),a?oa.addScaledVector(Qo,h):oa.addScaledVector(Qo.sub(t),h))}t.add(oa)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(r),Wn.copy(e.ray).recast(e.near),!(na.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(na,Vh)===null||Wn.origin.distanceToSquared(Vh)>(e.far-e.near)**2))&&(zh.copy(r).invert(),Wn.copy(e.ray).applyMatrix4(zh),!(n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,y=p.length;v<y;v++){const d=p[v],u=a[d.materialIndex],S=Math.max(d.start,m.start),b=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let E=S,T=b;E<T;E+=3){const w=o.getX(E),C=o.getX(E+1),_=o.getX(E+2);s=ca(this,u,e,n,l,h,f,w,C,_),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let d=v,u=y;d<u;d+=3){const S=o.getX(d),b=o.getX(d+1),E=o.getX(d+2);s=ca(this,a,e,n,l,h,f,S,b,E),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,y=p.length;v<y;v++){const d=p[v],u=a[d.materialIndex],S=Math.max(d.start,m.start),b=Math.min(c.count,Math.min(d.start+d.count,m.start+m.count));for(let E=S,T=b;E<T;E+=3){const w=E,C=E+1,_=E+2;s=ca(this,u,e,n,l,h,f,w,C,_),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let d=v,u=y;d<u;d+=3){const S=d,b=d+1,E=d+2;s=ca(this,a,e,n,l,h,f,S,b,E),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}}function Wv(i,e,t,n,s,r,a,o){let c;if(e.side===ri?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===On,o),c===null)return null;la.copy(o),la.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(la);return l<t.near||l>t.far?null:{distance:l,point:la.clone(),object:i}}function ca(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,sa),i.getVertexPosition(c,ra),i.getVertexPosition(l,aa);const h=Wv(i,e,t,n,sa,ra,aa,Hh);if(h){const f=new P;bi.getBarycoord(Hh,sa,ra,aa,f),s&&(h.uv=bi.getInterpolatedAttribute(s,o,c,l,f,new Ge)),r&&(h.uv1=bi.getInterpolatedAttribute(r,o,c,l,f,new Ge)),a&&(h.normal=bi.getInterpolatedAttribute(a,o,c,l,f,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:c,c:l,normal:new P,materialIndex:0};bi.getNormal(sa,ra,aa,p.normal),h.face=p,h.barycoord=f}return h}class Xv extends Nt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Wt,h=Wt,f,p){super(null,a,o,c,l,h,s,r,f,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const el=new P,$v=new P,qv=new Fe;class $n{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=el.subVectors(n,t).cross($v.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(el),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||qv.getNormalMatrix(e),s=this.coplanarPoint(el).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new ho,Yv=new Ge(.5,.5),ha=new P;class Gc{constructor(e=new $n,t=new $n,n=new $n,s=new $n,r=new $n,a=new $n){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gi,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],f=r[5],p=r[6],m=r[7],v=r[8],y=r[9],d=r[10],u=r[11],S=r[12],b=r[13],E=r[14],T=r[15];if(s[0].setComponents(l-a,m-h,u-v,T-S).normalize(),s[1].setComponents(l+a,m+h,u+v,T+S).normalize(),s[2].setComponents(l+o,m+f,u+y,T+b).normalize(),s[3].setComponents(l-o,m-f,u-y,T-b).normalize(),n)s[4].setComponents(c,p,d,E).normalize(),s[5].setComponents(l-c,m-p,u-d,T-E).normalize();else if(s[4].setComponents(l-c,m-p,u-d,T-E).normalize(),t===Gi)s[5].setComponents(l+c,m+p,u+d,T+E).normalize();else if(t===Fa)s[5].setComponents(c,p,d,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(e){Xn.center.set(0,0,0);const t=Yv.distanceTo(e.center);return Xn.radius=.7071067811865476+t,Xn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ha.x=s.normal.x>0?e.max.x:e.min.x,ha.y=s.normal.y>0?e.max.y:e.min.y,ha.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ha)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zv extends Dr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const za=new P,Va=new P,Gh=new rt,Zs=new Hc,da=new ho,tl=new P,Wh=new P;class Kv extends $t{constructor(e=new _i,t=new Zv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)za.fromBufferAttribute(t,s-1),Va.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=za.distanceTo(Va);e.setAttribute("lineDistance",new ti(n,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(s),da.radius+=r,e.ray.intersectsSphere(da)===!1)return;Gh.copy(s).invert(),Zs.copy(e.ray).applyMatrix4(Gh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let y=m,d=v-1;y<d;y+=l){const u=h.getX(y),S=h.getX(y+1),b=ua(this,e,Zs,c,u,S,y);b&&t.push(b)}if(this.isLineLoop){const y=h.getX(v-1),d=h.getX(m),u=ua(this,e,Zs,c,y,d,v-1);u&&t.push(u)}}else{const m=Math.max(0,a.start),v=Math.min(p.count,a.start+a.count);for(let y=m,d=v-1;y<d;y+=l){const u=ua(this,e,Zs,c,y,y+1,y);u&&t.push(u)}if(this.isLineLoop){const y=ua(this,e,Zs,c,v-1,m,v-1);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ua(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(za.fromBufferAttribute(o,s),Va.fromBufferAttribute(o,r),t.distanceSqToSegment(za,Va,tl,Wh)>n)return;tl.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(tl);if(!(l<e.near||l>e.far))return{distance:l,point:Wh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Xh=new P,$h=new P;class jv extends Kv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Xh.fromBufferAttribute(t,s),$h.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Xh.distanceTo($h);e.setAttribute("lineDistance",new ti(n,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jv extends Nt{constructor(e,t,n,s,r=Dt,a=Dt,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const h=this;function f(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(f))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class Nu extends Nt{constructor(e=[],t=Kn,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Os extends Nt{constructor(e,t,n=Yi,s,r,a,o=Wt,c=Wt,l,h=fn,f=1){if(h!==fn&&h!==Zn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:f};super(p,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Qv extends Os{constructor(e,t=Yi,n=Kn,s,r,a=Wt,o=Wt,c,l=fn){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Uu extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Nr extends _i{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],f=[];let p=0,m=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ti(l,3)),this.setAttribute("normal",new ti(h,3)),this.setAttribute("uv",new ti(f,2));function v(y,d,u,S,b,E,T,w,C,_,A){const N=E/C,L=T/_,F=E/2,q=T/2,j=w/2,B=C+1,Y=_+1;let V=0,K=0;const te=new P;for(let pe=0;pe<Y;pe++){const xe=pe*L-q;for(let we=0;we<B;we++){const it=we*N-F;te[y]=it*S,te[d]=xe*b,te[u]=j,l.push(te.x,te.y,te.z),te[y]=0,te[d]=0,te[u]=w>0?1:-1,h.push(te.x,te.y,te.z),f.push(we/C),f.push(1-pe/_),V+=1}}for(let pe=0;pe<_;pe++)for(let xe=0;xe<C;xe++){const we=p+xe+B*pe,it=p+xe+B*(pe+1),vt=p+(xe+1)+B*(pe+1),nt=p+(xe+1)+B*pe;c.push(we,it,nt),c.push(it,vt,nt),K+=6}o.addGroup(m,K,A),m+=K,p+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class e_{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ie("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const h=n[s],p=n[s+1]-h,m=(a-h)/p;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new Ge:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new P,s=[],r=[],a=[],o=new P,c=new rt;for(let m=0;m<=e;m++){const v=m/e;s[m]=this.getTangentAt(v,new P)}r[0]=new P,a[0]=new P;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),p<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(qe(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(o,v))}a[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(qe(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(m=-m);for(let v=1;v<=e;v++)r[v].applyMatrix4(c.makeRotationAxis(s[v],m*v)),a[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function qh(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}class t_ extends e_{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ge){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(qh(o,c.x,l.x,h.x,f.x),qh(o,c.y,l.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new Ge().fromArray(s))}return this}}class Gs extends _i{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,f=e/o,p=t/c,m=[],v=[],y=[],d=[];for(let u=0;u<h;u++){const S=u*p-a;for(let b=0;b<l;b++){const E=b*f-r;v.push(E,-S,0),y.push(0,0,1),d.push(b/o),d.push(1-u/c)}}for(let u=0;u<c;u++)for(let S=0;S<o;S++){const b=S+l*u,E=S+l*(u+1),T=S+1+l*(u+1),w=S+1+l*u;m.push(b,E,w),m.push(E,T,w)}this.setIndex(m),this.setAttribute("position",new ti(v,3)),this.setAttribute("normal",new ti(y,3)),this.setAttribute("uv",new ti(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Jn extends _i{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],f=new P,p=new P,m=[],v=[],y=[],d=[];for(let u=0;u<=n;u++){const S=[],b=u/n,E=a+b*o,T=e*Math.cos(E),w=Math.sqrt(e*e-T*T);let C=0;u===0&&a===0?C=.5/t:u===n&&c===Math.PI&&(C=-.5/t);for(let _=0;_<=t;_++){const A=_/t,N=s+A*r;f.x=-w*Math.cos(N),f.y=T,f.z=w*Math.sin(N),v.push(f.x,f.y,f.z),p.copy(f).normalize(),y.push(p.x,p.y,p.z),d.push(A+C,1-b),S.push(l++)}h.push(S)}for(let u=0;u<n;u++)for(let S=0;S<t;S++){const b=h[u][S+1],E=h[u][S],T=h[u+1][S],w=h[u+1][S+1];(u!==0||a>0)&&m.push(b,E,w),(u!==n-1||c<Math.PI)&&m.push(E,T,w)}this.setIndex(m),this.setAttribute("position",new ti(v,3)),this.setAttribute("normal",new ti(y,3)),this.setAttribute("uv",new ti(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class i_ extends _i{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,s=new P,r=new P;if(e.index!==null){const a=e.attributes.position,o=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){const f=c[l],p=f.start,m=f.count;for(let v=p,y=p+m;v<y;v+=3)for(let d=0;d<3;d++){const u=o.getX(v+d),S=o.getX(v+(d+1)%3);s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,S),Yh(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){const h=3*o+l,f=3*o+(l+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,f),Yh(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new ti(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Yh(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}function ks(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Zh(s))s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Zh(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Qt(i){const e={};for(let t=0;t<i.length;t++){const n=ks(i[t]);for(const s in n)e[s]=n[s]}return e}function Zh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function n_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ou(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const s_={clone:ks,merge:Qt};var r_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends Dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=r_,this.fragmentShader=a_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=n_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new tt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ge().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Et().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Fe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new rt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class o_ extends vi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class l_ extends Dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class c_ extends Dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const In={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Kh(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Kh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Kh(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class h_{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){const f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,p=l.length;f<p;f+=2){const m=l[f],v=l[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const d_=new h_;let uo=class{constructor(e){this.manager=e!==void 0?e:d_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};uo.DEFAULT_MATERIAL_NAME="__DEFAULT";const tn={};class u_ extends Error{constructor(e,t){super(e),this.response=t}}class f_ extends uo{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=In.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(tn[e]!==void 0){tn[e].push({onLoad:t,onProgress:n,onError:s});return}tn[e]=[],tn[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ie("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=tn[e],f=l.body.getReader(),p=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),m=p?parseInt(p):0,v=m!==0;let y=0;const d=new ReadableStream({start(u){S();function S(){f.read().then(({done:b,value:E})=>{if(b)u.close();else{y+=E.byteLength;const T=new ProgressEvent("progress",{lengthComputable:v,loaded:y,total:m});for(let w=0,C=h.length;w<C;w++){const _=h[w];_.onProgress&&_.onProgress(T)}u.enqueue(E),S()}},b=>{u.error(b)})}}});return new Response(d)}else throw new u_(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),p=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(p);return l.arrayBuffer().then(v=>m.decode(v))}}}).then(l=>{In.add(`file:${e}`,l);const h=tn[e];delete tn[e];for(let f=0,p=h.length;f<p;f++){const m=h[f];m.onLoad&&m.onLoad(l)}}).catch(l=>{const h=tn[e];if(h===void 0)throw this.manager.itemError(e),l;delete tn[e];for(let f=0,p=h.length;f<p;f++){const m=h[f];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const vs=new WeakMap;class ku extends uo{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=In.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let f=vs.get(a);f===void 0&&(f=[],vs.set(a,f)),f.push({onLoad:t,onError:s})}return a}const o=Tr("img");function c(){h(),t&&t(this);const f=vs.get(this)||[];for(let p=0;p<f.length;p++){const m=f[p];m.onLoad&&m.onLoad(this)}vs.delete(this),r.manager.itemEnd(e)}function l(f){h(),s&&s(f),In.remove(`image:${e}`);const p=vs.get(this)||[];for(let m=0;m<p.length;m++){const v=p[m];v.onError&&v.onError(f)}vs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),In.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}let p_=class extends uo{constructor(e){super(e)}load(e,t,n,s){const r=new Nt,a=new ku(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}};const fa=new P,pa=new gn,Ui=new P;class Fu extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fa,pa,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fa,pa,Ui.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(fa,pa,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fa,pa,Ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Tn=new P,jh=new Ge,Jh=new Ge;class di extends Fu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ar*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ar*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z)}getViewSize(e,t){return this.getViewBounds(e,jh,Jh),t.subVectors(Jh,jh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ar*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Bu extends Fu{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _s=-90,xs=1;class m_ extends $t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new di(_s,xs,e,t);s.layers=this.layers,this.add(s);const r=new di(_s,xs,e,t);r.layers=this.layers,this.add(r);const a=new di(_s,xs,e,t);a.layers=this.layers,this.add(a);const o=new di(_s,xs,e,t);o.layers=this.layers,this.add(o);const c=new di(_s,xs,e,t);c.layers=this.layers,this.add(c);const l=new di(_s,xs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===Gi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Fa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let d=!1;e.isWebGLRenderer===!0?d=e.state.buffers.depth.getReversed():d=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,p,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class g_ extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Qh=new rt;class v_{constructor(e,t,n=0,s=1/0){this.ray=new Hc(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Vc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Qh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qh),this}intersectObject(e,t=!0,n=[]){return sc(e,this,n,t),n.sort(ed),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)sc(e[s],this,n,t);return n.sort(ed),n}}function ed(i,e){return i.distance-e.distance}function sc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)sc(r[a],e,t,!0)}}class zu{static{zu.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}}function td(i,e,t,n){const s=__(n);switch(t){case Tu:return i*e;case Cu:return i*e/s.components*s.byteLength;case Nc:return i*e/s.components*s.byteLength;case jn:return i*e*2/s.components*s.byteLength;case Uc:return i*e*2/s.components*s.byteLength;case Au:return i*e*3/s.components*s.byteLength;case Ti:return i*e*4/s.components*s.byteLength;case Oc:return i*e*4/s.components*s.byteLength;case ba:case Ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Aa:case Ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Rl:case Ll:return Math.max(i,16)*Math.max(e,8)/4;case Cl:case Pl:return Math.max(i,8)*Math.max(e,8)/2;case Il:case Dl:case Ul:case Ol:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Nl:case Ua:case kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case zl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Gl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case $l:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ql:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Zl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Kl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case jl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Jl:case Ql:case ec:return Math.ceil(i/4)*Math.ceil(e/4)*16;case tc:case ic:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Oa:case nc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function __(i){switch(i){case gi:case Mu:return{byteLength:1,components:1};case wr:case wu:case un:return{byteLength:2,components:1};case Ic:case Dc:return{byteLength:2,components:4};case Yi:case Lc:case Hi:return{byteLength:4,components:1};case Su:case bu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rc}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rc);function Vu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function x_(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,f=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((m,v)=>m.start-v.start);let p=0;for(let m=1;m<f.length;m++){const v=f[p],y=f[m];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++p,f[p]=y)}f.length=p+1;for(let m=0,v=f.length;m<v;m++){const y=f[m];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var y_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,E_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,M_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,b_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,T_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,A_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,R_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,P_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,L_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,I_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,D_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,N_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,U_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,O_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,F_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,B_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,z_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,V_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,H_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,G_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,W_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,X_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,$_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,q_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Y_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,K_="gl_FragColor = linearToOutputTexel( gl_FragColor );",j_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,J_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Q_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,e0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,t0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,i0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,n0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,s0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,r0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,l0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,c0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,h0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,d0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,u0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,f0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,p0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,m0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,g0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,v0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,x0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,y0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,E0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,M0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,w0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,C0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,R0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,P0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,D0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,N0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,U0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,k0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,B0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,G0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,W0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,q0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Y0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Z0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,K0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ex=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ix=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,nx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ax=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ox=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ux=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,px=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ex=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ax=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ix=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ux=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ox=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Bx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$x=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:y_,alphahash_pars_fragment:E_,alphamap_fragment:M_,alphamap_pars_fragment:w_,alphatest_fragment:S_,alphatest_pars_fragment:b_,aomap_fragment:T_,aomap_pars_fragment:A_,batching_pars_vertex:C_,batching_vertex:R_,begin_vertex:P_,beginnormal_vertex:L_,bsdfs:I_,iridescence_fragment:D_,bumpmap_pars_fragment:N_,clipping_planes_fragment:U_,clipping_planes_pars_fragment:O_,clipping_planes_pars_vertex:k_,clipping_planes_vertex:F_,color_fragment:B_,color_pars_fragment:z_,color_pars_vertex:V_,color_vertex:H_,common:G_,cube_uv_reflection_fragment:W_,defaultnormal_vertex:X_,displacementmap_pars_vertex:$_,displacementmap_vertex:q_,emissivemap_fragment:Y_,emissivemap_pars_fragment:Z_,colorspace_fragment:K_,colorspace_pars_fragment:j_,envmap_fragment:J_,envmap_common_pars_fragment:Q_,envmap_pars_fragment:e0,envmap_pars_vertex:t0,envmap_physical_pars_fragment:u0,envmap_vertex:i0,fog_vertex:n0,fog_pars_vertex:s0,fog_fragment:r0,fog_pars_fragment:a0,gradientmap_pars_fragment:o0,lightmap_pars_fragment:l0,lights_lambert_fragment:c0,lights_lambert_pars_fragment:h0,lights_pars_begin:d0,lights_toon_fragment:f0,lights_toon_pars_fragment:p0,lights_phong_fragment:m0,lights_phong_pars_fragment:g0,lights_physical_fragment:v0,lights_physical_pars_fragment:_0,lights_fragment_begin:x0,lights_fragment_maps:y0,lights_fragment_end:E0,lightprobes_pars_fragment:M0,logdepthbuf_fragment:w0,logdepthbuf_pars_fragment:S0,logdepthbuf_pars_vertex:b0,logdepthbuf_vertex:T0,map_fragment:A0,map_pars_fragment:C0,map_particle_fragment:R0,map_particle_pars_fragment:P0,metalnessmap_fragment:L0,metalnessmap_pars_fragment:I0,morphinstance_vertex:D0,morphcolor_vertex:N0,morphnormal_vertex:U0,morphtarget_pars_vertex:O0,morphtarget_vertex:k0,normal_fragment_begin:F0,normal_fragment_maps:B0,normal_pars_fragment:z0,normal_pars_vertex:V0,normal_vertex:H0,normalmap_pars_fragment:G0,clearcoat_normal_fragment_begin:W0,clearcoat_normal_fragment_maps:X0,clearcoat_pars_fragment:$0,iridescence_pars_fragment:q0,opaque_fragment:Y0,packing:Z0,premultiplied_alpha_fragment:K0,project_vertex:j0,dithering_fragment:J0,dithering_pars_fragment:Q0,roughnessmap_fragment:ex,roughnessmap_pars_fragment:tx,shadowmap_pars_fragment:ix,shadowmap_pars_vertex:nx,shadowmap_vertex:sx,shadowmask_pars_fragment:rx,skinbase_vertex:ax,skinning_pars_vertex:ox,skinning_vertex:lx,skinnormal_vertex:cx,specularmap_fragment:hx,specularmap_pars_fragment:dx,tonemapping_fragment:ux,tonemapping_pars_fragment:fx,transmission_fragment:px,transmission_pars_fragment:mx,uv_pars_fragment:gx,uv_pars_vertex:vx,uv_vertex:_x,worldpos_vertex:xx,background_vert:yx,background_frag:Ex,backgroundCube_vert:Mx,backgroundCube_frag:wx,cube_vert:Sx,cube_frag:bx,depth_vert:Tx,depth_frag:Ax,distance_vert:Cx,distance_frag:Rx,equirect_vert:Px,equirect_frag:Lx,linedashed_vert:Ix,linedashed_frag:Dx,meshbasic_vert:Nx,meshbasic_frag:Ux,meshlambert_vert:Ox,meshlambert_frag:kx,meshmatcap_vert:Fx,meshmatcap_frag:Bx,meshnormal_vert:zx,meshnormal_frag:Vx,meshphong_vert:Hx,meshphong_frag:Gx,meshphysical_vert:Wx,meshphysical_frag:Xx,meshtoon_vert:$x,meshtoon_frag:qx,points_vert:Yx,points_frag:Zx,shadow_vert:Kx,shadow_frag:jx,sprite_vert:Jx,sprite_frag:Qx},fe={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},zi={basic:{uniforms:Qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Qt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Qt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new tt(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Qt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Qt([fe.points,fe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Qt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Qt([fe.common,fe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Qt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Qt([fe.sprite,fe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:Qt([fe.common,fe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:Qt([fe.lights,fe.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};zi.physical={uniforms:Qt([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const ma={r:0,b:0,g:0},ey=new rt,Hu=new Fe;Hu.set(-1,0,0,0,1,0,0,0,1);function ty(i,e,t,n,s,r){const a=new tt(0);let o=s===!0?0:1,c,l,h=null,f=0,p=null;function m(S){let b=S.isScene===!0?S.background:null;if(b&&b.isTexture){const E=S.backgroundBlurriness>0;b=e.get(b,E)}return b}function v(S){let b=!1;const E=m(S);E===null?d(a,o):E&&E.isColor&&(d(E,1),b=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(S,b){const E=m(b);E&&(E.isCubeTexture||E.mapping===co)?(l===void 0&&(l=new Yt(new Nr(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:ks(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=E,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ey.makeRotationFromEuler(b.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Hu),l.material.toneMapped=Ze.getTransfer(E.colorSpace)!==lt,(h!==E||f!==E.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=E,f=E.version,p=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Yt(new Gs(2,2),new vi({name:"BackgroundMaterial",uniforms:ks(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(E.colorSpace)!==lt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||f!==E.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=E,f=E.version,p=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function d(S,b){S.getRGB(ma,Ou(i)),t.buffers.color.setClear(ma.r,ma.g,ma.b,b,r)}function u(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,b=1){a.set(S),o=b,d(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,d(a,o)},render:v,addToRenderList:y,dispose:u}}function iy(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,a=!1;function o(L,F,q,j,B){let Y=!1;const V=f(L,j,q,F);r!==V&&(r=V,l(r.object)),Y=m(L,j,q,B),Y&&v(L,j,q,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,E(L,F,q,j),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return i.createVertexArray()}function l(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function f(L,F,q,j){const B=j.wireframe===!0;let Y=n[F.id];Y===void 0&&(Y={},n[F.id]=Y);const V=L.isInstancedMesh===!0?L.id:0;let K=Y[V];K===void 0&&(K={},Y[V]=K);let te=K[q.id];te===void 0&&(te={},K[q.id]=te);let pe=te[B];return pe===void 0&&(pe=p(c()),te[B]=pe),pe}function p(L){const F=[],q=[],j=[];for(let B=0;B<t;B++)F[B]=0,q[B]=0,j[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:q,attributeDivisors:j,object:L,attributes:{},index:null}}function m(L,F,q,j){const B=r.attributes,Y=F.attributes;let V=0;const K=q.getAttributes();for(const te in K)if(K[te].location>=0){const xe=B[te];let we=Y[te];if(we===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(we=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(we=L.instanceColor)),xe===void 0||xe.attribute!==we||we&&xe.data!==we.data)return!0;V++}return r.attributesNum!==V||r.index!==j}function v(L,F,q,j){const B={},Y=F.attributes;let V=0;const K=q.getAttributes();for(const te in K)if(K[te].location>=0){let xe=Y[te];xe===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(xe=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(xe=L.instanceColor));const we={};we.attribute=xe,xe&&xe.data&&(we.data=xe.data),B[te]=we,V++}r.attributes=B,r.attributesNum=V,r.index=j}function y(){const L=r.newAttributes;for(let F=0,q=L.length;F<q;F++)L[F]=0}function d(L){u(L,0)}function u(L,F){const q=r.newAttributes,j=r.enabledAttributes,B=r.attributeDivisors;q[L]=1,j[L]===0&&(i.enableVertexAttribArray(L),j[L]=1),B[L]!==F&&(i.vertexAttribDivisor(L,F),B[L]=F)}function S(){const L=r.newAttributes,F=r.enabledAttributes;for(let q=0,j=F.length;q<j;q++)F[q]!==L[q]&&(i.disableVertexAttribArray(q),F[q]=0)}function b(L,F,q,j,B,Y,V){V===!0?i.vertexAttribIPointer(L,F,q,B,Y):i.vertexAttribPointer(L,F,q,j,B,Y)}function E(L,F,q,j){y();const B=j.attributes,Y=q.getAttributes(),V=F.defaultAttributeValues;for(const K in Y){const te=Y[K];if(te.location>=0){let pe=B[K];if(pe===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(pe=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(pe=L.instanceColor)),pe!==void 0){const xe=pe.normalized,we=pe.itemSize,it=e.get(pe);if(it===void 0)continue;const vt=it.buffer,nt=it.type,Z=it.bytesPerElement,oe=nt===i.INT||nt===i.UNSIGNED_INT||pe.gpuType===Lc;if(pe.isInterleavedBufferAttribute){const ie=pe.data,ke=ie.stride,ze=pe.offset;if(ie.isInstancedInterleavedBuffer){for(let De=0;De<te.locationSize;De++)u(te.location+De,ie.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let De=0;De<te.locationSize;De++)d(te.location+De);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let De=0;De<te.locationSize;De++)b(te.location+De,we/te.locationSize,nt,xe,ke*Z,(ze+we/te.locationSize*De)*Z,oe)}else{if(pe.isInstancedBufferAttribute){for(let ie=0;ie<te.locationSize;ie++)u(te.location+ie,pe.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ie=0;ie<te.locationSize;ie++)d(te.location+ie);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let ie=0;ie<te.locationSize;ie++)b(te.location+ie,we/te.locationSize,nt,xe,we*Z,we/te.locationSize*ie*Z,oe)}}else if(V!==void 0){const xe=V[K];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(te.location,xe);break;case 3:i.vertexAttrib3fv(te.location,xe);break;case 4:i.vertexAttrib4fv(te.location,xe);break;default:i.vertexAttrib1fv(te.location,xe)}}}}S()}function T(){A();for(const L in n){const F=n[L];for(const q in F){const j=F[q];for(const B in j){const Y=j[B];for(const V in Y)h(Y[V].object),delete Y[V];delete j[B]}}delete n[L]}}function w(L){if(n[L.id]===void 0)return;const F=n[L.id];for(const q in F){const j=F[q];for(const B in j){const Y=j[B];for(const V in Y)h(Y[V].object),delete Y[V];delete j[B]}}delete n[L.id]}function C(L){for(const F in n){const q=n[F];for(const j in q){const B=q[j];if(B[L.id]===void 0)continue;const Y=B[L.id];for(const V in Y)h(Y[V].object),delete Y[V];delete B[L.id]}}}function _(L){for(const F in n){const q=n[F],j=L.isInstancedMesh===!0?L.id:0,B=q[j];if(B!==void 0){for(const Y in B){const V=B[Y];for(const K in V)h(V[K].object),delete V[K];delete B[Y]}delete q[j],Object.keys(q).length===0&&delete n[F]}}}function A(){N(),a=!0,r!==s&&(r=s,l(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:N,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:d,disableUnusedAttributes:S}}function ny(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let p=0;for(let m=0;m<h;m++)p+=l[m];t.update(p,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function sy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Ti&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const _=C===un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==gi&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Hi&&!_)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(Ie("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&p===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:d,maxAttributes:u,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:E,maxSamples:T,samples:w}}function ry(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new $n,o=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const m=f.length!==0||p||n!==0||s;return s=p,n=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){t=h(f,p,0)},this.setState=function(f,p,m){const v=f.clippingPlanes,y=f.clipIntersection,d=f.clipShadows,u=i.get(f);if(!s||v===null||v.length===0||r&&!d)r?h(null):l();else{const S=r?0:n,b=S*4;let E=u.clippingState||null;c.value=E,E=h(v,p,b,m);for(let T=0;T!==b;++T)E[T]=t[T];u.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,p,m,v){const y=f!==null?f.length:0;let d=null;if(y!==0){if(d=c.value,v!==!0||d===null){const u=m+y*4,S=p.matrixWorldInverse;o.getNormalMatrix(S),(d===null||d.length<u)&&(d=new Float32Array(u));for(let b=0,E=m;b!==y;++b,E+=4)a.copy(f[b]).applyMatrix4(S,o),a.normal.toArray(d,E),d[E+3]=a.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,d}}const Ln=4,id=[.125,.215,.35,.446,.526,.582],Yn=20,ay=256,Ks=new Bu,nd=new tt;let il=null,nl=0,sl=0,rl=!1;const oy=new P;class sd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=oy}=r;il=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),sl=this._renderer.getActiveMipmapLevel(),rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(il,nl,sl),this._renderer.xr.enabled=rl,e.scissorTest=!1,ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Kn||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),il=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),sl=this._renderer.getActiveMipmapLevel(),rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:un,format:Ti,colorSpace:br,depthBuffer:!1},s=rd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rd(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ly(r)),this._blurMaterial=hy(r,e,t),this._ggxMaterial=cy(r,e,t)}return s}_compileMaterial(e){const t=new Yt(new _i,e);this._renderer.compile(t,Ks)}_sceneToCubeUV(e,t,n,s,r){const c=new di(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,m=f.toneMapping;f.getClearColor(nd),f.toneMapping=Xi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Yt(new Nr,new pn({name:"PMREM.Background",side:ri,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,d=y.material;let u=!1;const S=e.background;S?S.isColor&&(d.color.copy(S),e.background=null,u=!0):(d.color.copy(nd),u=!0);for(let b=0;b<6;b++){const E=b%3;E===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[b],r.y,r.z)):E===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[b]));const T=this._cubeSize;ys(s,E*T,b>2?T:0,T,T),f.setRenderTarget(s),u&&f.render(y,c),f.render(e,c)}f.toneMapping=m,f.autoClear=p,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Kn||e.mapping===Us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=od()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ad());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;ys(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ks)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-h*h),p=0+l*1.25,m=f*p,{_lodMax:v}=this,y=this._sizeLods[n],d=3*y*(n>v-Ln?n-v+Ln:0),u=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=v-t,ys(r,d,u,3*y,2*y),s.setRenderTarget(r),s.render(o,Ks),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=v-n,ys(e,d,u,3*y,2*y),s.setRenderTarget(e),s.render(o,Ks)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&je("blur direction must be either latitudinal or longitudinal!");const h=3,f=this._lodMeshes[s];f.material=l;const p=l.uniforms,m=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Yn-1),y=r/v,d=isFinite(r)?1+Math.floor(h*y):Yn;d>Yn&&Ie(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Yn}`);const u=[];let S=0;for(let C=0;C<Yn;++C){const _=C/y,A=Math.exp(-_*_/2);u.push(A),C===0?S+=A:C<d&&(S+=2*A)}for(let C=0;C<u.length;C++)u[C]=u[C]/S;p.envMap.value=e.texture,p.samples.value=d,p.weights.value=u,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:b}=this;p.dTheta.value=v,p.mipInt.value=b-n;const E=this._sizeLods[s],T=3*E*(s>b-Ln?s-b+Ln:0),w=4*(this._cubeSize-E);ys(t,T,w,3*E,2*E),c.setRenderTarget(t),c.render(f,Ks)}}function ly(i){const e=[],t=[],n=[];let s=i;const r=i-Ln+1+id.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Ln?c=id[a-i+Ln-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),h=-l,f=1+l,p=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,v=6,y=3,d=2,u=1,S=new Float32Array(y*v*m),b=new Float32Array(d*v*m),E=new Float32Array(u*v*m);for(let w=0;w<m;w++){const C=w%3*2/3-1,_=w>2?0:-1,A=[C,_,0,C+2/3,_,0,C+2/3,_+1,0,C,_,0,C+2/3,_+1,0,C,_+1,0];S.set(A,y*v*w),b.set(p,d*v*w);const N=[w,w,w,w,w,w];E.set(N,u*v*w)}const T=new _i;T.setAttribute("position",new $i(S,y)),T.setAttribute("uv",new $i(b,d)),T.setAttribute("faceIndex",new $i(E,u)),n.push(new Yt(T,null)),s>Ln&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function rd(i,e,t){const n=new Ci(i,e,t);return n.texture.mapping=co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ys(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function cy(i,e,t){return new vi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ay,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:on,depthTest:!1,depthWrite:!1})}function hy(i,e,t){const n=new Float32Array(Yn),s=new P(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:on,depthTest:!1,depthWrite:!1})}function ad(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:on,depthTest:!1,depthWrite:!1})}function od(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:on,depthTest:!1,depthWrite:!1})}function fo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Gu extends Ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Nu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Nr(5,5,5),r=new vi({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ri,blending:on});r.uniforms.tEquirect.value=t;const a=new Yt(s,r),o=t.minFilter;return t.minFilter===Pn&&(t.minFilter=Dt),new m_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function dy(i){let e=new WeakMap,t=new WeakMap,n=null;function s(p,m=!1){return p==null?null:m?a(p):r(p)}function r(p){if(p&&p.isTexture){const m=p.mapping;if(m===Po||m===Lo)if(e.has(p)){const v=e.get(p).texture;return o(v,p.mapping)}else{const v=p.image;if(v&&v.height>0){const y=new Gu(v.height);return y.fromEquirectangularTexture(i,p),e.set(p,y),p.addEventListener("dispose",l),o(y.texture,p.mapping)}else return null}}return p}function a(p){if(p&&p.isTexture){const m=p.mapping,v=m===Po||m===Lo,y=m===Kn||m===Us;if(v||y){let d=t.get(p);const u=d!==void 0?d.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==u)return n===null&&(n=new sd(i)),d=v?n.fromEquirectangular(p,d):n.fromCubemap(p,d),d.texture.pmremVersion=p.pmremVersion,t.set(p,d),d.texture;if(d!==void 0)return d.texture;{const S=p.image;return v&&S&&S.height>0||y&&S&&c(S)?(n===null&&(n=new sd(i)),d=v?n.fromEquirectangular(p):n.fromCubemap(p),d.texture.pmremVersion=p.pmremVersion,t.set(p,d),p.addEventListener("dispose",h),d.texture):null}}}return p}function o(p,m){return m===Po?p.mapping=Kn:m===Lo&&(p.mapping=Us),p}function c(p){let m=0;const v=6;for(let y=0;y<v;y++)p[y]!==void 0&&m++;return m===v}function l(p){const m=p.target;m.removeEventListener("dispose",l);const v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function h(p){const m=p.target;m.removeEventListener("dispose",h);const v=t.get(m);v!==void 0&&(t.delete(m),v.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function uy(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ps("WebGLRenderer: "+n+" extension not supported."),s}}}function fy(i,e,t,n){const s={},r=new WeakMap;function a(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);p.removeEventListener("dispose",a),delete s[p.id];const m=r.get(p);m&&(e.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(f,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function c(f){const p=f.attributes;for(const m in p)e.update(p[m],i.ARRAY_BUFFER)}function l(f){const p=[],m=f.index,v=f.attributes.position;let y=0;if(v===void 0)return;if(m!==null){const S=m.array;y=m.version;for(let b=0,E=S.length;b<E;b+=3){const T=S[b+0],w=S[b+1],C=S[b+2];p.push(T,w,w,C,C,T)}}else{const S=v.array;y=v.version;for(let b=0,E=S.length/3-1;b<E;b+=3){const T=b+0,w=b+1,C=b+2;p.push(T,w,w,C,C,T)}}const d=new(v.count>=65535?Du:Iu)(p,1);d.version=y;const u=r.get(f);u&&e.remove(u),r.set(f,d)}function h(f){const p=r.get(f);if(p){const m=f.index;m!==null&&p.version<m.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function py(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*a),t.update(p,n,1)}function l(f,p,m){m!==0&&(i.drawElementsInstanced(n,p,r,f*a,m),t.update(p,n,m))}function h(f,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,m);let y=0;for(let d=0;d<m;d++)y+=p[d];t.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function my(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:je("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function gy(i,e,t){const n=new WeakMap,s=new Et;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let p=n.get(o);if(p===void 0||p.count!==f){let N=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",N)};var m=N;p!==void 0&&p.texture.dispose();const v=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let E=0;v===!0&&(E=1),y===!0&&(E=2),d===!0&&(E=3);let T=o.attributes.position.count*E,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const C=new Float32Array(T*w*4*f),_=new Pu(C,T,w,f);_.type=Hi,_.needsUpdate=!0;const A=E*4;for(let L=0;L<f;L++){const F=u[L],q=S[L],j=b[L],B=T*w*4*L;for(let Y=0;Y<F.count;Y++){const V=Y*A;v===!0&&(s.fromBufferAttribute(F,Y),C[B+V+0]=s.x,C[B+V+1]=s.y,C[B+V+2]=s.z,C[B+V+3]=0),y===!0&&(s.fromBufferAttribute(q,Y),C[B+V+4]=s.x,C[B+V+5]=s.y,C[B+V+6]=s.z,C[B+V+7]=0),d===!0&&(s.fromBufferAttribute(j,Y),C[B+V+8]=s.x,C[B+V+9]=s.y,C[B+V+10]=s.z,C[B+V+11]=j.itemSize===4?s.w:1)}}p={count:f,texture:_,size:new Ge(T,w)},n.set(o,p),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let v=0;for(let d=0;d<l.length;d++)v+=l[d];const y=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function vy(i,e,t,n,s){let r=new WeakMap;function a(l){const h=s.render.frame,f=l.geometry,p=e.get(l,f);if(r.get(p)!==h&&(e.update(p),r.set(p,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return p}function o(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const _y={[Pc]:"LINEAR_TONE_MAPPING",[mu]:"REINHARD_TONE_MAPPING",[gu]:"CINEON_TONE_MAPPING",[vu]:"ACES_FILMIC_TONE_MAPPING",[xu]:"AGX_TONE_MAPPING",[yu]:"NEUTRAL_TONE_MAPPING",[_u]:"CUSTOM_TONE_MAPPING"};function xy(i,e,t,n,s,r){const a=new Ci(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new Os(e,t):void 0}),o=new Ci(e,t,{type:un,depthBuffer:!1,stencilBuffer:!1}),c=new _i;c.setAttribute("position",new ti([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ti([0,2,0,0,2,0],2));const l=new o_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Yt(c,l),f=new Bu(-1,1,1,-1,0,1);let p=null,m=null,v=!1,y,d=null,u=[],S=!1;this.setSize=function(b,E){a.setSize(b,E),o.setSize(b,E);for(let T=0;T<u.length;T++){const w=u[T];w.setSize&&w.setSize(b,E)}},this.setEffects=function(b){u=b,S=u.length>0&&u[0].isRenderPass===!0;const E=a.width,T=a.height;for(let w=0;w<u.length;w++){const C=u[w];C.setSize&&C.setSize(E,T)}},this.begin=function(b,E){if(v||b.toneMapping===Xi&&u.length===0)return!1;if(d=E,E!==null){const T=E.width,w=E.height;(a.width!==T||a.height!==w)&&this.setSize(T,w)}return S===!1&&b.setRenderTarget(a),y=b.toneMapping,b.toneMapping=Xi,!0},this.hasRenderPass=function(){return S},this.end=function(b,E){b.toneMapping=y,v=!0;let T=a,w=o;for(let C=0;C<u.length;C++){const _=u[C];if(_.enabled!==!1&&(_.render(b,w,T,E),_.needsSwap!==!1)){const A=T;T=w,w=A}}if(p!==b.outputColorSpace||m!==b.toneMapping){p=b.outputColorSpace,m=b.toneMapping,l.defines={},Ze.getTransfer(p)===lt&&(l.defines.SRGB_TRANSFER="");const C=_y[m];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=T.texture,b.setRenderTarget(d),b.render(h,f),d=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}const Wu=new Nt,rc=new Os(1,1),Xu=new Pu,$u=new Iv,qu=new Nu,ld=[],cd=[],hd=new Float32Array(16),dd=new Float32Array(9),ud=new Float32Array(4);function Ws(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=ld[s];if(r===void 0&&(r=new Float32Array(s),ld[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ot(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function po(i,e){let t=cd[e];t===void 0&&(t=new Int32Array(e),cd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function yy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ey(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),Ot(t,e)}}function My(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),Ot(t,e)}}function wy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),Ot(t,e)}}function Sy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,n))return;ud.set(n),i.uniformMatrix2fv(this.addr,!1,ud),Ot(t,n)}}function by(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,n))return;dd.set(n),i.uniformMatrix3fv(this.addr,!1,dd),Ot(t,n)}}function Ty(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,n))return;hd.set(n),i.uniformMatrix4fv(this.addr,!1,hd),Ot(t,n)}}function Ay(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Cy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),Ot(t,e)}}function Ry(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),Ot(t,e)}}function Py(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),Ot(t,e)}}function Ly(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Iy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),Ot(t,e)}}function Dy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),Ot(t,e)}}function Ny(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),Ot(t,e)}}function Uy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(rc.compareFunction=t.isReversedDepthBuffer()?Fc:kc,r=rc):r=Wu,t.setTexture2D(e||r,s)}function Oy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||$u,s)}function ky(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||qu,s)}function Fy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Xu,s)}function By(i){switch(i){case 5126:return yy;case 35664:return Ey;case 35665:return My;case 35666:return wy;case 35674:return Sy;case 35675:return by;case 35676:return Ty;case 5124:case 35670:return Ay;case 35667:case 35671:return Cy;case 35668:case 35672:return Ry;case 35669:case 35673:return Py;case 5125:return Ly;case 36294:return Iy;case 36295:return Dy;case 36296:return Ny;case 35678:case 36198:case 36298:case 36306:case 35682:return Uy;case 35679:case 36299:case 36307:return Oy;case 35680:case 36300:case 36308:case 36293:return ky;case 36289:case 36303:case 36311:case 36292:return Fy}}function zy(i,e){i.uniform1fv(this.addr,e)}function Vy(i,e){const t=Ws(e,this.size,2);i.uniform2fv(this.addr,t)}function Hy(i,e){const t=Ws(e,this.size,3);i.uniform3fv(this.addr,t)}function Gy(i,e){const t=Ws(e,this.size,4);i.uniform4fv(this.addr,t)}function Wy(i,e){const t=Ws(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Xy(i,e){const t=Ws(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $y(i,e){const t=Ws(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function qy(i,e){i.uniform1iv(this.addr,e)}function Yy(i,e){i.uniform2iv(this.addr,e)}function Zy(i,e){i.uniform3iv(this.addr,e)}function Ky(i,e){i.uniform4iv(this.addr,e)}function jy(i,e){i.uniform1uiv(this.addr,e)}function Jy(i,e){i.uniform2uiv(this.addr,e)}function Qy(i,e){i.uniform3uiv(this.addr,e)}function eE(i,e){i.uniform4uiv(this.addr,e)}function tE(i,e,t){const n=this.cache,s=e.length,r=po(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=rc:a=Wu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function iE(i,e,t){const n=this.cache,s=e.length,r=po(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||$u,r[a])}function nE(i,e,t){const n=this.cache,s=e.length,r=po(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||qu,r[a])}function sE(i,e,t){const n=this.cache,s=e.length,r=po(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Xu,r[a])}function rE(i){switch(i){case 5126:return zy;case 35664:return Vy;case 35665:return Hy;case 35666:return Gy;case 35674:return Wy;case 35675:return Xy;case 35676:return $y;case 5124:case 35670:return qy;case 35667:case 35671:return Yy;case 35668:case 35672:return Zy;case 35669:case 35673:return Ky;case 5125:return jy;case 36294:return Jy;case 36295:return Qy;case 36296:return eE;case 35678:case 36198:case 36298:case 36306:case 35682:return tE;case 35679:case 36299:case 36307:return iE;case 35680:case 36300:case 36308:case 36293:return nE;case 36289:case 36303:case 36311:case 36292:return sE}}class aE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=By(t.type)}}class oE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rE(t.type)}}class lE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const al=/(\w+)(\])?(\[|\.)?/g;function fd(i,e){i.seq.push(e),i.map[e.id]=e}function cE(i,e,t){const n=i.name,s=n.length;for(al.lastIndex=0;;){const r=al.exec(n),a=al.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){fd(t,l===void 0?new aE(o,i,e):new oE(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new lE(o),fd(t,f)),t=f}}}class Ra{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);cE(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function pd(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const hE=37297;let dE=0;function uE(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const md=new Fe;function fE(i){Ze._getMatrix(md,Ze.workingColorSpace,i);const e=`mat3( ${md.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(i)){case ka:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function gd(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+uE(i.getShaderSource(e),o)}else return r}function pE(i,e){const t=fE(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const mE={[Pc]:"Linear",[mu]:"Reinhard",[gu]:"Cineon",[vu]:"ACESFilmic",[xu]:"AgX",[yu]:"Neutral",[_u]:"Custom"};function gE(i,e){const t=mE[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ga=new P;function vE(){Ze.getLuminanceCoefficients(ga);const i=ga.x.toFixed(4),e=ga.y.toFixed(4),t=ga.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _E(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nr).join(`
`)}function xE(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yE(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function nr(i){return i!==""}function vd(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _d(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const EE=/^[ \t]*#include +<([\w\d./]+)>/gm;function ac(i){return i.replace(EE,wE)}const ME=new Map;function wE(i,e){let t=Xe[e];if(t===void 0){const n=ME.get(e);if(n!==void 0)t=Xe[n],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ac(t)}const SE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xd(i){return i.replace(SE,bE)}function bE(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const TE={[Sa]:"SHADOWMAP_TYPE_PCF",[ir]:"SHADOWMAP_TYPE_VSM"};function AE(i){return TE[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const CE={[Kn]:"ENVMAP_TYPE_CUBE",[Us]:"ENVMAP_TYPE_CUBE",[co]:"ENVMAP_TYPE_CUBE_UV"};function RE(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":CE[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const PE={[Us]:"ENVMAP_MODE_REFRACTION"};function LE(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":PE[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const IE={[pu]:"ENVMAP_BLENDING_MULTIPLY",[Kg]:"ENVMAP_BLENDING_MIX",[jg]:"ENVMAP_BLENDING_ADD"};function DE(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":IE[i.combine]||"ENVMAP_BLENDING_NONE"}function NE(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function UE(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=AE(t),l=RE(t),h=LE(t),f=DE(t),p=NE(t),m=_E(t),v=xE(r),y=s.createProgram();let d,u,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(nr).join(`
`),d.length>0&&(d+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(nr).join(`
`),u.length>0&&(u+=`
`)):(d=[yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nr).join(`
`),u=[yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Xi?gE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,pE("linearToOutputTexel",t.outputColorSpace),vE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(nr).join(`
`)),a=ac(a),a=vd(a,t),a=_d(a,t),o=ac(o),o=vd(o,t),o=_d(o,t),a=xd(a),o=xd(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,u=["#define varying in",t.glslVersion===bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const b=S+d+a,E=S+u+o,T=pd(s,s.VERTEX_SHADER,b),w=pd(s,s.FRAGMENT_SHADER,E);s.attachShader(y,T),s.attachShader(y,w),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function C(L){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(y)||"",q=s.getShaderInfoLog(T)||"",j=s.getShaderInfoLog(w)||"",B=F.trim(),Y=q.trim(),V=j.trim();let K=!0,te=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,T,w);else{const pe=gd(s,T,"vertex"),xe=gd(s,w,"fragment");je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+pe+`
`+xe)}else B!==""?Ie("WebGLProgram: Program Info Log:",B):(Y===""||V==="")&&(te=!1);te&&(L.diagnostics={runnable:K,programLog:B,vertexShader:{log:Y,prefix:d},fragmentShader:{log:V,prefix:u}})}s.deleteShader(T),s.deleteShader(w),_=new Ra(s,y),A=yE(s,y)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(y,hE)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dE++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=w,this}let OE=0;class kE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new FE(e),t.set(e,n)),n}}class FE{constructor(e){this.id=OE++,this.code=e,this.usedTimes=0}}function BE(i){return i===jn||i===Ua||i===Oa}function zE(i,e,t,n,s,r){const a=new Vc,o=new kE,c=new Set,l=[],h=new Map,f=n.logarithmicDepthBuffer;let p=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return c.add(_),_===0?"uv":`uv${_}`}function y(_,A,N,L,F,q){const j=L.fog,B=F.geometry,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,K=e.get(_.envMap||Y,V),te=K&&K.mapping===co?K.image.height:null,pe=m[_.type];_.precision!==null&&(p=n.getMaxPrecision(_.precision),p!==_.precision&&Ie("WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));const xe=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,we=xe!==void 0?xe.length:0;let it=0;B.morphAttributes.position!==void 0&&(it=1),B.morphAttributes.normal!==void 0&&(it=2),B.morphAttributes.color!==void 0&&(it=3);let vt,nt,Z,oe;if(pe){const Se=zi[pe];vt=Se.vertexShader,nt=Se.fragmentShader}else{vt=_.vertexShader,nt=_.fragmentShader;const Se=o.getVertexShaderStage(_),xt=o.getFragmentShaderStage(_);o.update(_,Se,xt),Z=Se.id,oe=xt.id}const ie=i.getRenderTarget(),ke=i.state.buffers.depth.getReversed(),ze=F.isInstancedMesh===!0,De=F.isBatchedMesh===!0,wt=!!_.map,Ye=!!_.matcap,dt=!!K,st=!!_.aoMap,Je=!!_.lightMap,Tt=!!_.bumpMap&&_.wireframe===!1,Lt=!!_.normalMap,kt=!!_.displacementMap,Ht=!!_.emissiveMap,_t=!!_.metalnessMap,At=!!_.roughnessMap,I=_.anisotropy>0,ni=_.clearcoat>0,ot=_.dispersion>0,M=_.iridescence>0,g=_.sheen>0,U=_.transmission>0,z=I&&!!_.anisotropyMap,G=ni&&!!_.clearcoatMap,ne=ni&&!!_.clearcoatNormalMap,le=ni&&!!_.clearcoatRoughnessMap,W=M&&!!_.iridescenceMap,$=M&&!!_.iridescenceThicknessMap,ce=g&&!!_.sheenColorMap,Ce=g&&!!_.sheenRoughnessMap,ue=!!_.specularMap,he=!!_.specularColorMap,Le=!!_.specularIntensityMap,Ne=U&&!!_.transmissionMap,Ve=U&&!!_.thicknessMap,R=!!_.gradientMap,ae=!!_.alphaMap,X=_.alphaTest>0,de=!!_.alphaHash,_e=!!_.extensions;let J=Xi;_.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(J=i.toneMapping);const Ae={shaderID:pe,shaderType:_.type,shaderName:_.name,vertexShader:vt,fragmentShader:nt,defines:_.defines,customVertexShaderID:Z,customFragmentShaderID:oe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:De,batchingColor:De&&F._colorsTexture!==null,instancing:ze,instancingColor:ze&&F.instanceColor!==null,instancingMorph:ze&&F.morphTexture!==null,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:wt,matcap:Ye,envMap:dt,envMapMode:dt&&K.mapping,envMapCubeUVHeight:te,aoMap:st,lightMap:Je,bumpMap:Tt,normalMap:Lt,displacementMap:kt,emissiveMap:Ht,normalMapObjectSpace:Lt&&_.normalMapType===ev,normalMapTangentSpace:Lt&&_.normalMapType===Mh,packedNormalMap:Lt&&_.normalMapType===Mh&&BE(_.normalMap.format),metalnessMap:_t,roughnessMap:At,anisotropy:I,anisotropyMap:z,clearcoat:ni,clearcoatMap:G,clearcoatNormalMap:ne,clearcoatRoughnessMap:le,dispersion:ot,iridescence:M,iridescenceMap:W,iridescenceThicknessMap:$,sheen:g,sheenColorMap:ce,sheenRoughnessMap:Ce,specularMap:ue,specularColorMap:he,specularIntensityMap:Le,transmission:U,transmissionMap:Ne,thicknessMap:Ve,gradientMap:R,opaque:_.transparent===!1&&_.blending===Rs&&_.alphaToCoverage===!1,alphaMap:ae,alphaTest:X,alphaHash:de,combine:_.combine,mapUv:wt&&v(_.map.channel),aoMapUv:st&&v(_.aoMap.channel),lightMapUv:Je&&v(_.lightMap.channel),bumpMapUv:Tt&&v(_.bumpMap.channel),normalMapUv:Lt&&v(_.normalMap.channel),displacementMapUv:kt&&v(_.displacementMap.channel),emissiveMapUv:Ht&&v(_.emissiveMap.channel),metalnessMapUv:_t&&v(_.metalnessMap.channel),roughnessMapUv:At&&v(_.roughnessMap.channel),anisotropyMapUv:z&&v(_.anisotropyMap.channel),clearcoatMapUv:G&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:ne&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:$&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&v(_.sheenRoughnessMap.channel),specularMapUv:ue&&v(_.specularMap.channel),specularColorMapUv:he&&v(_.specularColorMap.channel),specularIntensityMapUv:Le&&v(_.specularIntensityMap.channel),transmissionMapUv:Ne&&v(_.transmissionMap.channel),thicknessMapUv:Ve&&v(_.thicknessMap.channel),alphaMapUv:ae&&v(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Lt||I),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!B.attributes.uv&&(wt||ae),fog:!!j,useFog:_.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&Lt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ke,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:it,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:J,decodeVideoTexture:wt&&_.map.isVideoTexture===!0&&Ze.getTransfer(_.map.colorSpace)===lt,decodeVideoTextureEmissive:Ht&&_.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(_.emissiveMap.colorSpace)===lt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Vi,flipSided:_.side===ri,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:_e&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&_.extensions.multiDraw===!0||De)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function d(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const N in _.defines)A.push(N),A.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(u(A,_),S(A,_),A.push(i.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function u(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function S(_,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function b(_){const A=m[_.type];let N;if(A){const L=zi[A];N=s_.clone(L.uniforms)}else N=_.uniforms;return N}function E(_,A){let N=h.get(A);return N!==void 0?++N.usedTimes:(N=new UE(i,A,_,s),l.push(N),h.set(A,N)),N}function T(_){if(--_.usedTimes===0){const A=l.indexOf(_);l[A]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function C(){o.dispose()}return{getParameters:y,getProgramCacheKey:d,getUniforms:b,acquireProgram:E,releaseProgram:T,releaseShaderCache:w,programs:l,dispose:C}}function VE(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function HE(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ed(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Md(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(p){let m=0;return p.isInstancedMesh&&(m+=2),p.isSkinnedMesh&&(m+=1),m}function o(p,m,v,y,d,u){let S=i[e];return S===void 0?(S={id:p.id,object:p,geometry:m,material:v,materialVariant:a(p),groupOrder:y,renderOrder:p.renderOrder,z:d,group:u},i[e]=S):(S.id=p.id,S.object=p,S.geometry=m,S.material=v,S.materialVariant=a(p),S.groupOrder=y,S.renderOrder=p.renderOrder,S.z=d,S.group=u),e++,S}function c(p,m,v,y,d,u){const S=o(p,m,v,y,d,u);v.transmission>0?n.push(S):v.transparent===!0?s.push(S):t.push(S)}function l(p,m,v,y,d,u){const S=o(p,m,v,y,d,u);v.transmission>0?n.unshift(S):v.transparent===!0?s.unshift(S):t.unshift(S)}function h(p,m,v){t.length>1&&t.sort(p||HE),n.length>1&&n.sort(m||Ed),s.length>1&&s.sort(m||Ed),v&&(t.reverse(),n.reverse(),s.reverse())}function f(){for(let p=e,m=i.length;p<m;p++){const v=i[p];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function GE(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Md,i.set(n,[a])):s>=r.length?(a=new Md,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function WE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new tt};break;case"SpotLight":t={position:new P,direction:new P,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function XE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let $E=0;function qE(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function YE(i){const e=new WE,t=XE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const s=new P,r=new rt,a=new rt;function o(l){let h=0,f=0,p=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let m=0,v=0,y=0,d=0,u=0,S=0,b=0,E=0,T=0,w=0,C=0;l.sort(qE);for(let A=0,N=l.length;A<N;A++){const L=l[A],F=L.color,q=L.intensity,j=L.distance;let B=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===jn?B=L.shadow.map.texture:B=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=F.r*q,f+=F.g*q,p+=F.b*q;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],q);C++}else if(L.isDirectionalLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const V=L.shadow,K=t.get(L);K.shadowIntensity=V.intensity,K.shadowBias=V.bias,K.shadowNormalBias=V.normalBias,K.shadowRadius=V.radius,K.shadowMapSize=V.mapSize,n.directionalShadow[m]=K,n.directionalShadowMap[m]=B,n.directionalShadowMatrix[m]=L.shadow.matrix,S++}n.directional[m]=Y,m++}else if(L.isSpotLight){const Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(F).multiplyScalar(q),Y.distance=j,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[y]=Y;const V=L.shadow;if(L.map&&(n.spotLightMap[T]=L.map,T++,V.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[y]=V.matrix,L.castShadow){const K=t.get(L);K.shadowIntensity=V.intensity,K.shadowBias=V.bias,K.shadowNormalBias=V.normalBias,K.shadowRadius=V.radius,K.shadowMapSize=V.mapSize,n.spotShadow[y]=K,n.spotShadowMap[y]=B,E++}y++}else if(L.isRectAreaLight){const Y=e.get(L);Y.color.copy(F).multiplyScalar(q),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),n.rectArea[d]=Y,d++}else if(L.isPointLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const V=L.shadow,K=t.get(L);K.shadowIntensity=V.intensity,K.shadowBias=V.bias,K.shadowNormalBias=V.normalBias,K.shadowRadius=V.radius,K.shadowMapSize=V.mapSize,K.shadowCameraNear=V.camera.near,K.shadowCameraFar=V.camera.far,n.pointShadow[v]=K,n.pointShadowMap[v]=B,n.pointShadowMatrix[v]=L.shadow.matrix,b++}n.point[v]=Y,v++}else if(L.isHemisphereLight){const Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(q),Y.groundColor.copy(L.groundColor).multiplyScalar(q),n.hemi[u]=Y,u++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=p;const _=n.hash;(_.directionalLength!==m||_.pointLength!==v||_.spotLength!==y||_.rectAreaLength!==d||_.hemiLength!==u||_.numDirectionalShadows!==S||_.numPointShadows!==b||_.numSpotShadows!==E||_.numSpotMaps!==T||_.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=y,n.rectArea.length=d,n.point.length=v,n.hemi.length=u,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=E+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,_.directionalLength=m,_.pointLength=v,_.spotLength=y,_.rectAreaLength=d,_.hemiLength=u,_.numDirectionalShadows=S,_.numPointShadows=b,_.numSpotShadows=E,_.numSpotMaps=T,_.numLightProbes=C,n.version=$E++)}function c(l,h){let f=0,p=0,m=0,v=0,y=0;const d=h.matrixWorldInverse;for(let u=0,S=l.length;u<S;u++){const b=l[u];if(b.isDirectionalLight){const E=n.directional[f];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),f++}else if(b.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),m++}else if(b.isRectAreaLight){const E=n.rectArea[v];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(d),a.identity(),r.copy(b.matrixWorld),r.premultiply(d),a.extractRotation(r),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){const E=n.point[p];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(d),p++}else if(b.isHemisphereLight){const E=n.hemi[y];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(d),y++}}}return{setup:o,setupView:c,state:n}}function wd(i){const e=new YE(i),t=[],n=[],s=[];function r(p){f.camera=p,t.length=0,n.length=0,s.length=0}function a(p){t.push(p)}function o(p){n.push(p)}function c(p){s.push(p)}function l(){e.setup(t)}function h(p){e.setupView(t,p)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function ZE(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new wd(i),e.set(s,[o])):r>=a.length?(o=new wd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const KE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,JE=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],QE=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Sd=new rt,js=new P,ol=new P;function eM(i,e,t){let n=new Gc;const s=new Ge,r=new Ge,a=new Et,o=new l_,c=new c_,l={},h=t.maxTextureSize,f={[On]:ri,[ri]:On,[Vi]:Vi},p=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:KE,fragmentShader:jE}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const v=new _i;v.setAttribute("position",new $i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Yt(v,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sa;let u=this.type;this.render=function(w,C,_){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||w.length===0)return;this.type===Lg&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Sa);const A=i.getRenderTarget(),N=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),F=i.state;F.setBlending(on),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const q=u!==this.type;q&&C.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(B=>B.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,B=w.length;j<B;j++){const Y=w[j],V=Y.shadow;if(V===void 0){Ie("WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const K=V.getFrameExtents();s.multiply(K),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,V.mapSize.y=r.y));const te=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=te,V.map===null||q===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===ir){if(Y.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Ci(s.x,s.y,{format:jn,type:un,minFilter:Dt,magFilter:Dt,generateMipmaps:!1}),V.map.texture.name=Y.name+".shadowMap",V.map.depthTexture=new Os(s.x,s.y,Hi),V.map.depthTexture.name=Y.name+".shadowMapDepth",V.map.depthTexture.format=fn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Wt,V.map.depthTexture.magFilter=Wt}else Y.isPointLight?(V.map=new Gu(s.x),V.map.depthTexture=new Qv(s.x,Yi)):(V.map=new Ci(s.x,s.y),V.map.depthTexture=new Os(s.x,s.y,Yi)),V.map.depthTexture.name=Y.name+".shadowMap",V.map.depthTexture.format=fn,this.type===Sa?(V.map.depthTexture.compareFunction=te?Fc:kc,V.map.depthTexture.minFilter=Dt,V.map.depthTexture.magFilter=Dt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Wt,V.map.depthTexture.magFilter=Wt);V.camera.updateProjectionMatrix()}const pe=V.map.isWebGLCubeRenderTarget?6:1;for(let xe=0;xe<pe;xe++){if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,xe),i.clear();else{xe===0&&(i.setRenderTarget(V.map),i.clear());const we=V.getViewport(xe);a.set(r.x*we.x,r.y*we.y,r.x*we.z,r.y*we.w),F.viewport(a)}if(Y.isPointLight){const we=V.camera,it=V.matrix,vt=Y.distance||we.far;vt!==we.far&&(we.far=vt,we.updateProjectionMatrix()),js.setFromMatrixPosition(Y.matrixWorld),we.position.copy(js),ol.copy(we.position),ol.add(JE[xe]),we.up.copy(QE[xe]),we.lookAt(ol),we.updateMatrixWorld(),it.makeTranslation(-js.x,-js.y,-js.z),Sd.multiplyMatrices(we.projectionMatrix,we.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Sd,we.coordinateSystem,we.reversedDepth)}else V.updateMatrices(Y);n=V.getFrustum(),E(C,_,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===ir&&S(V,_),V.needsUpdate=!1}u=this.type,d.needsUpdate=!1,i.setRenderTarget(A,N,L)};function S(w,C){const _=e.update(y);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ci(s.x,s.y,{format:jn,type:un})),p.uniforms.shadow_pass.value=w.map.depthTexture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,_,p,y,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,_,m,y,null)}function b(w,C,_,A){let N=null;const L=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)N=L;else if(N=_.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=N.uuid,q=C.uuid;let j=l[F];j===void 0&&(j={},l[F]=j);let B=j[q];B===void 0&&(B=N.clone(),j[q]=B,C.addEventListener("dispose",T)),N=B}if(N.visible=C.visible,N.wireframe=C.wireframe,A===ir?N.side=C.shadowSide!==null?C.shadowSide:C.side:N.side=C.shadowSide!==null?C.shadowSide:f[C.side],N.alphaMap=C.alphaMap,N.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,N.map=C.map,N.clipShadows=C.clipShadows,N.clippingPlanes=C.clippingPlanes,N.clipIntersection=C.clipIntersection,N.displacementMap=C.displacementMap,N.displacementScale=C.displacementScale,N.displacementBias=C.displacementBias,N.wireframeLinewidth=C.wireframeLinewidth,N.linewidth=C.linewidth,_.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const F=i.properties.get(N);F.light=_}return N}function E(w,C,_,A,N){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===ir)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);const q=e.update(w),j=w.material;if(Array.isArray(j)){const B=q.groups;for(let Y=0,V=B.length;Y<V;Y++){const K=B[Y],te=j[K.materialIndex];if(te&&te.visible){const pe=b(w,te,A,N);w.onBeforeShadow(i,w,C,_,q,pe,K),i.renderBufferDirect(_,null,q,pe,w,K),w.onAfterShadow(i,w,C,_,q,pe,K)}}}else if(j.visible){const B=b(w,j,A,N);w.onBeforeShadow(i,w,C,_,q,B,null),i.renderBufferDirect(_,null,q,B,w,null),w.onAfterShadow(i,w,C,_,q,B,null)}}const F=w.children;for(let q=0,j=F.length;q<j;q++)E(F[q],C,_,A,N)}function T(w){w.target.removeEventListener("dispose",T);for(const _ in l){const A=l[_],N=w.target.uuid;N in A&&(A[N].dispose(),delete A[N])}}}function tM(i,e){function t(){let R=!1;const ae=new Et;let X=null;const de=new Et(0,0,0,0);return{setMask:function(_e){X!==_e&&!R&&(i.colorMask(_e,_e,_e,_e),X=_e)},setLocked:function(_e){R=_e},setClear:function(_e,J,Ae,Se,xt){xt===!0&&(_e*=Se,J*=Se,Ae*=Se),ae.set(_e,J,Ae,Se),de.equals(ae)===!1&&(i.clearColor(_e,J,Ae,Se),de.copy(ae))},reset:function(){R=!1,X=null,de.set(-1,0,0,0)}}}function n(){let R=!1,ae=!1,X=null,de=null,_e=null;return{setReversed:function(J){if(ae!==J){const Ae=e.get("EXT_clip_control");J?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),ae=J;const Se=_e;_e=null,this.setClear(Se)}},getReversed:function(){return ae},setTest:function(J){J?ie(i.DEPTH_TEST):ke(i.DEPTH_TEST)},setMask:function(J){X!==J&&!R&&(i.depthMask(J),X=J)},setFunc:function(J){if(ae&&(J=hv[J]),de!==J){switch(J){case xl:i.depthFunc(i.NEVER);break;case yl:i.depthFunc(i.ALWAYS);break;case El:i.depthFunc(i.LESS);break;case Ns:i.depthFunc(i.LEQUAL);break;case Ml:i.depthFunc(i.EQUAL);break;case wl:i.depthFunc(i.GEQUAL);break;case Sl:i.depthFunc(i.GREATER);break;case bl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=J}},setLocked:function(J){R=J},setClear:function(J){_e!==J&&(_e=J,ae&&(J=1-J),i.clearDepth(J))},reset:function(){R=!1,X=null,de=null,_e=null,ae=!1}}}function s(){let R=!1,ae=null,X=null,de=null,_e=null,J=null,Ae=null,Se=null,xt=null;return{setTest:function(pt){R||(pt?ie(i.STENCIL_TEST):ke(i.STENCIL_TEST))},setMask:function(pt){ae!==pt&&!R&&(i.stencilMask(pt),ae=pt)},setFunc:function(pt,Ii,Di){(X!==pt||de!==Ii||_e!==Di)&&(i.stencilFunc(pt,Ii,Di),X=pt,de=Ii,_e=Di)},setOp:function(pt,Ii,Di){(J!==pt||Ae!==Ii||Se!==Di)&&(i.stencilOp(pt,Ii,Di),J=pt,Ae=Ii,Se=Di)},setLocked:function(pt){R=pt},setClear:function(pt){xt!==pt&&(i.clearStencil(pt),xt=pt)},reset:function(){R=!1,ae=null,X=null,de=null,_e=null,J=null,Ae=null,Se=null,xt=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},f={},p={},m=new WeakMap,v=[],y=null,d=!1,u=null,S=null,b=null,E=null,T=null,w=null,C=null,_=new tt(0,0,0),A=0,N=!1,L=null,F=null,q=null,j=null,B=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,K=0;const te=i.getParameter(i.VERSION);te.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(te)[1]),V=K>=1):te.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),V=K>=2);let pe=null,xe={};const we=i.getParameter(i.SCISSOR_BOX),it=i.getParameter(i.VIEWPORT),vt=new Et().fromArray(we),nt=new Et().fromArray(it);function Z(R,ae,X,de){const _e=new Uint8Array(4),J=i.createTexture();i.bindTexture(R,J),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ae=0;Ae<X;Ae++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(ae,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D(ae+Ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return J}const oe={};oe[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(i.DEPTH_TEST),a.setFunc(Ns),Tt(!1),Lt(_h),ie(i.CULL_FACE),st(on);function ie(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function ke(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function ze(R,ae){return p[R]!==ae?(i.bindFramebuffer(R,ae),p[R]=ae,R===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ae),R===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ae),!0):!1}function De(R,ae){let X=v,de=!1;if(R){X=m.get(ae),X===void 0&&(X=[],m.set(ae,X));const _e=R.textures;if(X.length!==_e.length||X[0]!==i.COLOR_ATTACHMENT0){for(let J=0,Ae=_e.length;J<Ae;J++)X[J]=i.COLOR_ATTACHMENT0+J;X.length=_e.length,de=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,de=!0);de&&i.drawBuffers(X)}function wt(R){return y!==R?(i.useProgram(R),y=R,!0):!1}const Ye={[qn]:i.FUNC_ADD,[Dg]:i.FUNC_SUBTRACT,[Ng]:i.FUNC_REVERSE_SUBTRACT};Ye[Ug]=i.MIN,Ye[Og]=i.MAX;const dt={[kg]:i.ZERO,[Fg]:i.ONE,[Bg]:i.SRC_COLOR,[vl]:i.SRC_ALPHA,[Xg]:i.SRC_ALPHA_SATURATE,[Gg]:i.DST_COLOR,[Vg]:i.DST_ALPHA,[zg]:i.ONE_MINUS_SRC_COLOR,[_l]:i.ONE_MINUS_SRC_ALPHA,[Wg]:i.ONE_MINUS_DST_COLOR,[Hg]:i.ONE_MINUS_DST_ALPHA,[$g]:i.CONSTANT_COLOR,[qg]:i.ONE_MINUS_CONSTANT_COLOR,[Yg]:i.CONSTANT_ALPHA,[Zg]:i.ONE_MINUS_CONSTANT_ALPHA};function st(R,ae,X,de,_e,J,Ae,Se,xt,pt){if(R===on){d===!0&&(ke(i.BLEND),d=!1);return}if(d===!1&&(ie(i.BLEND),d=!0),R!==Ig){if(R!==u||pt!==N){if((S!==qn||T!==qn)&&(i.blendEquation(i.FUNC_ADD),S=qn,T=qn),pt)switch(R){case Rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xh:i.blendFunc(i.ONE,i.ONE);break;case yh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Eh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:je("WebGLState: Invalid blending: ",R);break}else switch(R){case Rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case yh:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Eh:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",R);break}b=null,E=null,w=null,C=null,_.set(0,0,0),A=0,u=R,N=pt}return}_e=_e||ae,J=J||X,Ae=Ae||de,(ae!==S||_e!==T)&&(i.blendEquationSeparate(Ye[ae],Ye[_e]),S=ae,T=_e),(X!==b||de!==E||J!==w||Ae!==C)&&(i.blendFuncSeparate(dt[X],dt[de],dt[J],dt[Ae]),b=X,E=de,w=J,C=Ae),(Se.equals(_)===!1||xt!==A)&&(i.blendColor(Se.r,Se.g,Se.b,xt),_.copy(Se),A=xt),u=R,N=!1}function Je(R,ae){R.side===Vi?ke(i.CULL_FACE):ie(i.CULL_FACE);let X=R.side===ri;ae&&(X=!X),Tt(X),R.blending===Rs&&R.transparent===!1?st(on):st(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);const de=R.stencilWrite;o.setTest(de),de&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ht(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):ke(i.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(R){L!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),L=R)}function Lt(R){R!==Rg?(ie(i.CULL_FACE),R!==F&&(R===_h?i.cullFace(i.BACK):R===Pg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ke(i.CULL_FACE),F=R}function kt(R){R!==q&&(V&&i.lineWidth(R),q=R)}function Ht(R,ae,X){R?(ie(i.POLYGON_OFFSET_FILL),(j!==ae||B!==X)&&(j=ae,B=X,a.getReversed()&&(ae=-ae),i.polygonOffset(ae,X))):ke(i.POLYGON_OFFSET_FILL)}function _t(R){R?ie(i.SCISSOR_TEST):ke(i.SCISSOR_TEST)}function At(R){R===void 0&&(R=i.TEXTURE0+Y-1),pe!==R&&(i.activeTexture(R),pe=R)}function I(R,ae,X){X===void 0&&(pe===null?X=i.TEXTURE0+Y-1:X=pe);let de=xe[X];de===void 0&&(de={type:void 0,texture:void 0},xe[X]=de),(de.type!==R||de.texture!==ae)&&(pe!==X&&(i.activeTexture(X),pe=X),i.bindTexture(R,ae||oe[R]),de.type=R,de.texture=ae)}function ni(){const R=xe[pe];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function ot(){try{i.compressedTexImage2D(...arguments)}catch(R){je("WebGLState:",R)}}function M(){try{i.compressedTexImage3D(...arguments)}catch(R){je("WebGLState:",R)}}function g(){try{i.texSubImage2D(...arguments)}catch(R){je("WebGLState:",R)}}function U(){try{i.texSubImage3D(...arguments)}catch(R){je("WebGLState:",R)}}function z(){try{i.compressedTexSubImage2D(...arguments)}catch(R){je("WebGLState:",R)}}function G(){try{i.compressedTexSubImage3D(...arguments)}catch(R){je("WebGLState:",R)}}function ne(){try{i.texStorage2D(...arguments)}catch(R){je("WebGLState:",R)}}function le(){try{i.texStorage3D(...arguments)}catch(R){je("WebGLState:",R)}}function W(){try{i.texImage2D(...arguments)}catch(R){je("WebGLState:",R)}}function $(){try{i.texImage3D(...arguments)}catch(R){je("WebGLState:",R)}}function ce(R){return f[R]!==void 0?f[R]:i.getParameter(R)}function Ce(R,ae){f[R]!==ae&&(i.pixelStorei(R,ae),f[R]=ae)}function ue(R){vt.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),vt.copy(R))}function he(R){nt.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),nt.copy(R))}function Le(R,ae){let X=l.get(ae);X===void 0&&(X=new WeakMap,l.set(ae,X));let de=X.get(R);de===void 0&&(de=i.getUniformBlockIndex(ae,R.name),X.set(R,de))}function Ne(R,ae){const de=l.get(ae).get(R);c.get(ae)!==de&&(i.uniformBlockBinding(ae,de,R.__bindingPointIndex),c.set(ae,de))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},pe=null,xe={},p={},m=new WeakMap,v=[],y=null,d=!1,u=null,S=null,b=null,E=null,T=null,w=null,C=null,_=new tt(0,0,0),A=0,N=!1,L=null,F=null,q=null,j=null,B=null,vt.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:ke,bindFramebuffer:ze,drawBuffers:De,useProgram:wt,setBlending:st,setMaterial:Je,setFlipSided:Tt,setCullFace:Lt,setLineWidth:kt,setPolygonOffset:Ht,setScissorTest:_t,activeTexture:At,bindTexture:I,unbindTexture:ni,compressedTexImage2D:ot,compressedTexImage3D:M,texImage2D:W,texImage3D:$,pixelStorei:Ce,getParameter:ce,updateUBOMapping:Le,uniformBlockBinding:Ne,texStorage2D:ne,texStorage3D:le,texSubImage2D:g,texSubImage3D:U,compressedTexSubImage2D:z,compressedTexSubImage3D:G,scissor:ue,viewport:he,reset:Ve}}function iM(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ge,h=new WeakMap,f=new Set;let p;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(M,g){return v?new OffscreenCanvas(M,g):Tr("canvas")}function d(M,g,U){let z=1;const G=ot(M);if((G.width>U||G.height>U)&&(z=U/Math.max(G.width,G.height)),z<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const ne=Math.floor(z*G.width),le=Math.floor(z*G.height);p===void 0&&(p=y(ne,le));const W=g?y(ne,le):p;return W.width=ne,W.height=le,W.getContext("2d").drawImage(M,0,0,ne,le),Ie("WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+ne+"x"+le+")."),W}else return"data"in M&&Ie("WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),M;return M}function u(M){return M.generateMipmaps}function S(M){i.generateMipmap(M)}function b(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(M,g,U,z,G,ne=!1){if(M!==null){if(i[M]!==void 0)return i[M];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let le;z&&(le=e.get("EXT_texture_norm16"),le||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=g;if(g===i.RED&&(U===i.FLOAT&&(W=i.R32F),U===i.HALF_FLOAT&&(W=i.R16F),U===i.UNSIGNED_BYTE&&(W=i.R8),U===i.UNSIGNED_SHORT&&le&&(W=le.R16_EXT),U===i.SHORT&&le&&(W=le.R16_SNORM_EXT)),g===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(W=i.R8UI),U===i.UNSIGNED_SHORT&&(W=i.R16UI),U===i.UNSIGNED_INT&&(W=i.R32UI),U===i.BYTE&&(W=i.R8I),U===i.SHORT&&(W=i.R16I),U===i.INT&&(W=i.R32I)),g===i.RG&&(U===i.FLOAT&&(W=i.RG32F),U===i.HALF_FLOAT&&(W=i.RG16F),U===i.UNSIGNED_BYTE&&(W=i.RG8),U===i.UNSIGNED_SHORT&&le&&(W=le.RG16_EXT),U===i.SHORT&&le&&(W=le.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(W=i.RG8UI),U===i.UNSIGNED_SHORT&&(W=i.RG16UI),U===i.UNSIGNED_INT&&(W=i.RG32UI),U===i.BYTE&&(W=i.RG8I),U===i.SHORT&&(W=i.RG16I),U===i.INT&&(W=i.RG32I)),g===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(W=i.RGB8UI),U===i.UNSIGNED_SHORT&&(W=i.RGB16UI),U===i.UNSIGNED_INT&&(W=i.RGB32UI),U===i.BYTE&&(W=i.RGB8I),U===i.SHORT&&(W=i.RGB16I),U===i.INT&&(W=i.RGB32I)),g===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),U===i.UNSIGNED_INT&&(W=i.RGBA32UI),U===i.BYTE&&(W=i.RGBA8I),U===i.SHORT&&(W=i.RGBA16I),U===i.INT&&(W=i.RGBA32I)),g===i.RGB&&(U===i.UNSIGNED_SHORT&&le&&(W=le.RGB16_EXT),U===i.SHORT&&le&&(W=le.RGB16_SNORM_EXT),U===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),g===i.RGBA){const $=ne?ka:Ze.getTransfer(G);U===i.FLOAT&&(W=i.RGBA32F),U===i.HALF_FLOAT&&(W=i.RGBA16F),U===i.UNSIGNED_BYTE&&(W=$===lt?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT&&le&&(W=le.RGBA16_EXT),U===i.SHORT&&le&&(W=le.RGBA16_SNORM_EXT),U===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function T(M,g){let U;return M?g===null||g===Yi||g===Sr?U=i.DEPTH24_STENCIL8:g===Hi?U=i.DEPTH32F_STENCIL8:g===wr&&(U=i.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Yi||g===Sr?U=i.DEPTH_COMPONENT24:g===Hi?U=i.DEPTH_COMPONENT32F:g===wr&&(U=i.DEPTH_COMPONENT16),U}function w(M,g){return u(M)===!0||M.isFramebufferTexture&&M.minFilter!==Wt&&M.minFilter!==Dt?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function C(M){const g=M.target;g.removeEventListener("dispose",C),A(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&f.delete(g)}function _(M){const g=M.target;g.removeEventListener("dispose",_),L(g)}function A(M){const g=n.get(M);if(g.__webglInit===void 0)return;const U=M.source,z=m.get(U);if(z){const G=z[g.__cacheKey];G.usedTimes--,G.usedTimes===0&&N(M),Object.keys(z).length===0&&m.delete(U)}n.remove(M)}function N(M){const g=n.get(M);i.deleteTexture(g.__webglTexture);const U=M.source,z=m.get(U);delete z[g.__cacheKey],a.memory.textures--}function L(M){const g=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(g.__webglFramebuffer[z]))for(let G=0;G<g.__webglFramebuffer[z].length;G++)i.deleteFramebuffer(g.__webglFramebuffer[z][G]);else i.deleteFramebuffer(g.__webglFramebuffer[z]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[z])}else{if(Array.isArray(g.__webglFramebuffer))for(let z=0;z<g.__webglFramebuffer.length;z++)i.deleteFramebuffer(g.__webglFramebuffer[z]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let z=0;z<g.__webglColorRenderbuffer.length;z++)g.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[z]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const U=M.textures;for(let z=0,G=U.length;z<G;z++){const ne=n.get(U[z]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),a.memory.textures--),n.remove(U[z])}n.remove(M)}let F=0;function q(){F=0}function j(){return F}function B(M){F=M}function Y(){const M=F;return M>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),F+=1,M}function V(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function K(M,g){const U=n.get(M);if(M.isVideoTexture&&I(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&U.__version!==M.version){const z=M.image;if(z===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{ke(U,M,g);return}}else M.isExternalTexture&&(U.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+g)}function te(M,g){const U=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){ke(U,M,g);return}else M.isExternalTexture&&(U.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+g)}function pe(M,g){const U=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){ke(U,M,g);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+g)}function xe(M,g){const U=n.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&U.__version!==M.version){ze(U,M,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+g)}const we={[Tl]:i.REPEAT,[sn]:i.CLAMP_TO_EDGE,[Al]:i.MIRRORED_REPEAT},it={[Wt]:i.NEAREST,[Jg]:i.NEAREST_MIPMAP_NEAREST,[qr]:i.NEAREST_MIPMAP_LINEAR,[Dt]:i.LINEAR,[Io]:i.LINEAR_MIPMAP_NEAREST,[Pn]:i.LINEAR_MIPMAP_LINEAR},vt={[tv]:i.NEVER,[av]:i.ALWAYS,[iv]:i.LESS,[kc]:i.LEQUAL,[nv]:i.EQUAL,[Fc]:i.GEQUAL,[sv]:i.GREATER,[rv]:i.NOTEQUAL};function nt(M,g){if(g.type===Hi&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Dt||g.magFilter===Io||g.magFilter===qr||g.magFilter===Pn||g.minFilter===Dt||g.minFilter===Io||g.minFilter===qr||g.minFilter===Pn)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,we[g.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,we[g.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,we[g.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,it[g.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,it[g.minFilter]),g.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,vt[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Wt||g.minFilter!==qr&&g.minFilter!==Pn||g.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(M,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Z(M,g){let U=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",C));const z=g.source;let G=m.get(z);G===void 0&&(G={},m.set(z,G));const ne=V(g);if(ne!==M.__cacheKey){G[ne]===void 0&&(G[ne]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),G[ne].usedTimes++;const le=G[M.__cacheKey];le!==void 0&&(G[M.__cacheKey].usedTimes--,le.usedTimes===0&&N(g)),M.__cacheKey=ne,M.__webglTexture=G[ne].texture}return U}function oe(M,g,U){return Math.floor(Math.floor(M/U)/g)}function ie(M,g,U,z){const ne=M.updateRanges;if(ne.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,U,z,g.data);else{ne.sort((Ce,ue)=>Ce.start-ue.start);let le=0;for(let Ce=1;Ce<ne.length;Ce++){const ue=ne[le],he=ne[Ce],Le=ue.start+ue.count,Ne=oe(he.start,g.width,4),Ve=oe(ue.start,g.width,4);he.start<=Le+1&&Ne===Ve&&oe(he.start+he.count-1,g.width,4)===Ne?ue.count=Math.max(ue.count,he.start+he.count-ue.start):(++le,ne[le]=he)}ne.length=le+1;const W=t.getParameter(i.UNPACK_ROW_LENGTH),$=t.getParameter(i.UNPACK_SKIP_PIXELS),ce=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Ce=0,ue=ne.length;Ce<ue;Ce++){const he=ne[Ce],Le=Math.floor(he.start/4),Ne=Math.ceil(he.count/4),Ve=Le%g.width,R=Math.floor(Le/g.width),ae=Ne,X=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ve),t.pixelStorei(i.UNPACK_SKIP_ROWS,R),t.texSubImage2D(i.TEXTURE_2D,0,Ve,R,ae,X,U,z,g.data)}M.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,W),t.pixelStorei(i.UNPACK_SKIP_PIXELS,$),t.pixelStorei(i.UNPACK_SKIP_ROWS,ce)}}function ke(M,g,U){let z=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(z=i.TEXTURE_3D);const G=Z(M,g),ne=g.source;t.bindTexture(z,M.__webglTexture,i.TEXTURE0+U);const le=n.get(ne);if(ne.version!==le.__version||G===!0){if(t.activeTexture(i.TEXTURE0+U),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const X=Ze.getPrimaries(Ze.workingColorSpace),de=g.colorSpace===Cn?null:Ze.getPrimaries(g.colorSpace),_e=g.colorSpace===Cn||X===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let $=d(g.image,!1,s.maxTextureSize);$=ni(g,$);const ce=r.convert(g.format,g.colorSpace),Ce=r.convert(g.type);let ue=E(g.internalFormat,ce,Ce,g.normalized,g.colorSpace,g.isVideoTexture);nt(z,g);let he;const Le=g.mipmaps,Ne=g.isVideoTexture!==!0,Ve=le.__version===void 0||G===!0,R=ne.dataReady,ae=w(g,$);if(g.isDepthTexture)ue=T(g.format===Zn,g.type),Ve&&(Ne?t.texStorage2D(i.TEXTURE_2D,1,ue,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,ue,$.width,$.height,0,ce,Ce,null));else if(g.isDataTexture)if(Le.length>0){Ne&&Ve&&t.texStorage2D(i.TEXTURE_2D,ae,ue,Le[0].width,Le[0].height);for(let X=0,de=Le.length;X<de;X++)he=Le[X],Ne?R&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,he.width,he.height,ce,Ce,he.data):t.texImage2D(i.TEXTURE_2D,X,ue,he.width,he.height,0,ce,Ce,he.data);g.generateMipmaps=!1}else Ne?(Ve&&t.texStorage2D(i.TEXTURE_2D,ae,ue,$.width,$.height),R&&ie(g,$,ce,Ce)):t.texImage2D(i.TEXTURE_2D,0,ue,$.width,$.height,0,ce,Ce,$.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ne&&Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,ue,Le[0].width,Le[0].height,$.depth);for(let X=0,de=Le.length;X<de;X++)if(he=Le[X],g.format!==Ti)if(ce!==null)if(Ne){if(R)if(g.layerUpdates.size>0){const _e=td(he.width,he.height,g.format,g.type);for(const J of g.layerUpdates){const Ae=he.data.subarray(J*_e/he.data.BYTES_PER_ELEMENT,(J+1)*_e/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,J,he.width,he.height,1,ce,Ae)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,he.width,he.height,$.depth,ce,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,ue,he.width,he.height,$.depth,0,he.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?R&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,he.width,he.height,$.depth,ce,Ce,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,X,ue,he.width,he.height,$.depth,0,ce,Ce,he.data)}else{Ne&&Ve&&t.texStorage2D(i.TEXTURE_2D,ae,ue,Le[0].width,Le[0].height);for(let X=0,de=Le.length;X<de;X++)he=Le[X],g.format!==Ti?ce!==null?Ne?R&&t.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,he.width,he.height,ce,he.data):t.compressedTexImage2D(i.TEXTURE_2D,X,ue,he.width,he.height,0,he.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?R&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,he.width,he.height,ce,Ce,he.data):t.texImage2D(i.TEXTURE_2D,X,ue,he.width,he.height,0,ce,Ce,he.data)}else if(g.isDataArrayTexture)if(Ne){if(Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,ue,$.width,$.height,$.depth),R)if(g.layerUpdates.size>0){const X=td($.width,$.height,g.format,g.type);for(const de of g.layerUpdates){const _e=$.data.subarray(de*X/$.data.BYTES_PER_ELEMENT,(de+1)*X/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,de,$.width,$.height,1,ce,Ce,_e)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ce,Ce,$.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ue,$.width,$.height,$.depth,0,ce,Ce,$.data);else if(g.isData3DTexture)Ne?(Ve&&t.texStorage3D(i.TEXTURE_3D,ae,ue,$.width,$.height,$.depth),R&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ce,Ce,$.data)):t.texImage3D(i.TEXTURE_3D,0,ue,$.width,$.height,$.depth,0,ce,Ce,$.data);else if(g.isFramebufferTexture){if(Ve)if(Ne)t.texStorage2D(i.TEXTURE_2D,ae,ue,$.width,$.height);else{let X=$.width,de=$.height;for(let _e=0;_e<ae;_e++)t.texImage2D(i.TEXTURE_2D,_e,ue,X,de,0,ce,Ce,null),X>>=1,de>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){const X=i.canvas;if(X.hasAttribute("layoutsubtree")||X.setAttribute("layoutsubtree","true"),$.parentNode!==X){X.appendChild($),f.add(g),X.onpaint=de=>{const _e=de.changedElements;for(const J of f)_e.includes(J.image)&&(J.needsUpdate=!0)},X.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,$);else{const _e=i.RGBA,J=i.RGBA,Ae=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,_e,J,Ae,$)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Le.length>0){if(Ne&&Ve){const X=ot(Le[0]);t.texStorage2D(i.TEXTURE_2D,ae,ue,X.width,X.height)}for(let X=0,de=Le.length;X<de;X++)he=Le[X],Ne?R&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,ce,Ce,he):t.texImage2D(i.TEXTURE_2D,X,ue,ce,Ce,he);g.generateMipmaps=!1}else if(Ne){if(Ve){const X=ot($);t.texStorage2D(i.TEXTURE_2D,ae,ue,X.width,X.height)}R&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce,Ce,$)}else t.texImage2D(i.TEXTURE_2D,0,ue,ce,Ce,$);u(g)&&S(z),le.__version=ne.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function ze(M,g,U){if(g.image.length!==6)return;const z=Z(M,g),G=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+U);const ne=n.get(G);if(G.version!==ne.__version||z===!0){t.activeTexture(i.TEXTURE0+U);const le=Ze.getPrimaries(Ze.workingColorSpace),W=g.colorSpace===Cn?null:Ze.getPrimaries(g.colorSpace),$=g.colorSpace===Cn||le===W?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);const ce=g.isCompressedTexture||g.image[0].isCompressedTexture,Ce=g.image[0]&&g.image[0].isDataTexture,ue=[];for(let J=0;J<6;J++)!ce&&!Ce?ue[J]=d(g.image[J],!0,s.maxCubemapSize):ue[J]=Ce?g.image[J].image:g.image[J],ue[J]=ni(g,ue[J]);const he=ue[0],Le=r.convert(g.format,g.colorSpace),Ne=r.convert(g.type),Ve=E(g.internalFormat,Le,Ne,g.normalized,g.colorSpace),R=g.isVideoTexture!==!0,ae=ne.__version===void 0||z===!0,X=G.dataReady;let de=w(g,he);nt(i.TEXTURE_CUBE_MAP,g);let _e;if(ce){R&&ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Ve,he.width,he.height);for(let J=0;J<6;J++){_e=ue[J].mipmaps;for(let Ae=0;Ae<_e.length;Ae++){const Se=_e[Ae];g.format!==Ti?Le!==null?R?X&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae,0,0,Se.width,Se.height,Le,Se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae,Ve,Se.width,Se.height,0,Se.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae,0,0,Se.width,Se.height,Le,Ne,Se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae,Ve,Se.width,Se.height,0,Le,Ne,Se.data)}}}else{if(_e=g.mipmaps,R&&ae){_e.length>0&&de++;const J=ot(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Ve,J.width,J.height)}for(let J=0;J<6;J++)if(Ce){R?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ue[J].width,ue[J].height,Le,Ne,ue[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ve,ue[J].width,ue[J].height,0,Le,Ne,ue[J].data);for(let Ae=0;Ae<_e.length;Ae++){const xt=_e[Ae].image[J].image;R?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae+1,0,0,xt.width,xt.height,Le,Ne,xt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae+1,Ve,xt.width,xt.height,0,Le,Ne,xt.data)}}else{R?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Le,Ne,ue[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ve,Le,Ne,ue[J]);for(let Ae=0;Ae<_e.length;Ae++){const Se=_e[Ae];R?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae+1,0,0,Le,Ne,Se.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae+1,Ve,Le,Ne,Se.image[J])}}}u(g)&&S(i.TEXTURE_CUBE_MAP),ne.__version=G.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function De(M,g,U,z,G,ne){const le=r.convert(U.format,U.colorSpace),W=r.convert(U.type),$=E(U.internalFormat,le,W,U.normalized,U.colorSpace),ce=n.get(g),Ce=n.get(U);if(Ce.__renderTarget=g,!ce.__hasExternalTextures){const ue=Math.max(1,g.width>>ne),he=Math.max(1,g.height>>ne);G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?t.texImage3D(G,ne,$,ue,he,g.depth,0,le,W,null):t.texImage2D(G,ne,$,ue,he,0,le,W,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),At(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,G,Ce.__webglTexture,0,_t(g)):(G===i.TEXTURE_2D||G>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,G,Ce.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(M,g,U){if(i.bindRenderbuffer(i.RENDERBUFFER,M),g.depthBuffer){const z=g.depthTexture,G=z&&z.isDepthTexture?z.type:null,ne=T(g.stencilBuffer,G),le=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;At(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t(g),ne,g.width,g.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t(g),ne,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ne,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,M)}else{const z=g.textures;for(let G=0;G<z.length;G++){const ne=z[G],le=r.convert(ne.format,ne.colorSpace),W=r.convert(ne.type),$=E(ne.internalFormat,le,W,ne.normalized,ne.colorSpace);At(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t(g),$,g.width,g.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t(g),$,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,$,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ye(M,g,U){const z=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const G=n.get(g.depthTexture);if(G.__renderTarget=g,(!G.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),z){if(G.__webglInit===void 0&&(G.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),G.__webglTexture===void 0){G.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),nt(i.TEXTURE_CUBE_MAP,g.depthTexture);const ce=r.convert(g.depthTexture.format),Ce=r.convert(g.depthTexture.type);let ue;g.depthTexture.format===fn?ue=i.DEPTH_COMPONENT24:g.depthTexture.format===Zn&&(ue=i.DEPTH24_STENCIL8);for(let he=0;he<6;he++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ue,g.width,g.height,0,ce,Ce,null)}}else K(g.depthTexture,0);const ne=G.__webglTexture,le=_t(g),W=z?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,$=g.depthTexture.format===Zn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===fn)At(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,W,ne,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,$,W,ne,0);else if(g.depthTexture.format===Zn)At(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,W,ne,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,$,W,ne,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dt(M){const g=n.get(M),U=M.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==M.depthTexture){const z=M.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),z){const G=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,z.removeEventListener("dispose",G)};z.addEventListener("dispose",G),g.__depthDisposeCallback=G}g.__boundDepthTexture=z}if(M.depthTexture&&!g.__autoAllocateDepthBuffer)if(U)for(let z=0;z<6;z++)Ye(g.__webglFramebuffer[z],M,z);else{const z=M.texture.mipmaps;z&&z.length>0?Ye(g.__webglFramebuffer[0],M,0):Ye(g.__webglFramebuffer,M,0)}else if(U){g.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[z]),g.__webglDepthbuffer[z]===void 0)g.__webglDepthbuffer[z]=i.createRenderbuffer(),wt(g.__webglDepthbuffer[z],M,!1);else{const G=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=g.__webglDepthbuffer[z];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,G,i.RENDERBUFFER,ne)}}else{const z=M.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),wt(g.__webglDepthbuffer,M,!1);else{const G=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,G,i.RENDERBUFFER,ne)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function st(M,g,U){const z=n.get(M);g!==void 0&&De(z.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&dt(M)}function Je(M){const g=M.texture,U=n.get(M),z=n.get(g);M.addEventListener("dispose",_);const G=M.textures,ne=M.isWebGLCubeRenderTarget===!0,le=G.length>1;if(le||(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=g.version,a.memory.textures++),ne){U.__webglFramebuffer=[];for(let W=0;W<6;W++)if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer[W]=[];for(let $=0;$<g.mipmaps.length;$++)U.__webglFramebuffer[W][$]=i.createFramebuffer()}else U.__webglFramebuffer[W]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer=[];for(let W=0;W<g.mipmaps.length;W++)U.__webglFramebuffer[W]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(le)for(let W=0,$=G.length;W<$;W++){const ce=n.get(G[W]);ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(M.samples>0&&At(M)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let W=0;W<G.length;W++){const $=G[W];U.__webglColorRenderbuffer[W]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[W]);const ce=r.convert($.format,$.colorSpace),Ce=r.convert($.type),ue=E($.internalFormat,ce,Ce,$.normalized,$.colorSpace,M.isXRRenderTarget===!0),he=_t(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,he,ue,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.RENDERBUFFER,U.__webglColorRenderbuffer[W])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),wt(U.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),nt(i.TEXTURE_CUBE_MAP,g);for(let W=0;W<6;W++)if(g.mipmaps&&g.mipmaps.length>0)for(let $=0;$<g.mipmaps.length;$++)De(U.__webglFramebuffer[W][$],M,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+W,$);else De(U.__webglFramebuffer[W],M,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);u(g)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let W=0,$=G.length;W<$;W++){const ce=G[W],Ce=n.get(ce);let ue=i.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ue=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,Ce.__webglTexture),nt(ue,ce),De(U.__webglFramebuffer,M,ce,i.COLOR_ATTACHMENT0+W,ue,0),u(ce)&&S(ue)}t.unbindTexture()}else{let W=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(W=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(W,z.__webglTexture),nt(W,g),g.mipmaps&&g.mipmaps.length>0)for(let $=0;$<g.mipmaps.length;$++)De(U.__webglFramebuffer[$],M,g,i.COLOR_ATTACHMENT0,W,$);else De(U.__webglFramebuffer,M,g,i.COLOR_ATTACHMENT0,W,0);u(g)&&S(W),t.unbindTexture()}M.depthBuffer&&dt(M)}function Tt(M){const g=M.textures;for(let U=0,z=g.length;U<z;U++){const G=g[U];if(u(G)){const ne=b(M),le=n.get(G).__webglTexture;t.bindTexture(ne,le),S(ne),t.unbindTexture()}}}const Lt=[],kt=[];function Ht(M){if(M.samples>0){if(At(M)===!1){const g=M.textures,U=M.width,z=M.height;let G=i.COLOR_BUFFER_BIT;const ne=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=n.get(M),W=g.length>1;if(W)for(let ce=0;ce<g.length;ce++)t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);const $=M.texture.mipmaps;$&&$.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ce=0;ce<g.length;ce++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(G|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(G|=i.STENCIL_BUFFER_BIT)),W){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,le.__webglColorRenderbuffer[ce]);const Ce=n.get(g[ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ce,0)}i.blitFramebuffer(0,0,U,z,0,0,U,z,G,i.NEAREST),c===!0&&(Lt.length=0,kt.length=0,Lt.push(i.COLOR_ATTACHMENT0+ce),M.depthBuffer&&M.resolveDepthBuffer===!1&&(Lt.push(ne),kt.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,kt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Lt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),W)for(let ce=0;ce<g.length;ce++){t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,le.__webglColorRenderbuffer[ce]);const Ce=n.get(g[ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,Ce,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){const g=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function _t(M){return Math.min(s.maxSamples,M.samples)}function At(M){const g=n.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function I(M){const g=a.render.frame;h.get(M)!==g&&(h.set(M,g),M.update())}function ni(M,g){const U=M.colorSpace,z=M.format,G=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||U!==br&&U!==Cn&&(Ze.getTransfer(U)===lt?(z!==Ti||G!==gi)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",U)),g}function ot(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=Y,this.resetTextureUnits=q,this.getTextureUnits=j,this.setTextureUnits=B,this.setTexture2D=K,this.setTexture2DArray=te,this.setTexture3D=pe,this.setTextureCube=xe,this.rebindTextures=st,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=De,this.useMultisampledRTT=At,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function nM(i,e){function t(n,s=Cn){let r;const a=Ze.getTransfer(s);if(n===gi)return i.UNSIGNED_BYTE;if(n===Ic)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Dc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Su)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Mu)return i.BYTE;if(n===wu)return i.SHORT;if(n===wr)return i.UNSIGNED_SHORT;if(n===Lc)return i.INT;if(n===Yi)return i.UNSIGNED_INT;if(n===Hi)return i.FLOAT;if(n===un)return i.HALF_FLOAT;if(n===Tu)return i.ALPHA;if(n===Au)return i.RGB;if(n===Ti)return i.RGBA;if(n===fn)return i.DEPTH_COMPONENT;if(n===Zn)return i.DEPTH_STENCIL;if(n===Cu)return i.RED;if(n===Nc)return i.RED_INTEGER;if(n===jn)return i.RG;if(n===Uc)return i.RG_INTEGER;if(n===Oc)return i.RGBA_INTEGER;if(n===ba||n===Ta||n===Aa||n===Ca)if(a===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ba)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ba)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ca)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Cl||n===Rl||n===Pl||n===Ll)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ll)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Il||n===Dl||n===Nl||n===Ul||n===Ol||n===Ua||n===kl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Il||n===Dl)return a===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Nl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ul)return r.COMPRESSED_R11_EAC;if(n===Ol)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ua)return r.COMPRESSED_RG11_EAC;if(n===kl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Fl||n===Bl||n===zl||n===Vl||n===Hl||n===Gl||n===Wl||n===Xl||n===$l||n===ql||n===Yl||n===Zl||n===Kl||n===jl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$l)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ql)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jl||n===Ql||n===ec)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Jl)return a===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ql)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ec)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tc||n===ic||n===Oa||n===nc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===tc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Sr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const sM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class aM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Uu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new vi({vertexShader:sM,fragmentShader:rM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Yt(new Gs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oM extends ns{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,p=null,m=null,v=null;const y=typeof XRWebGLBinding<"u",d=new aM,u={},S=t.getContextAttributes();let b=null,E=null;const T=[],w=[],C=new Ge;let _=null;const A=new di;A.viewport=new Et;const N=new di;N.viewport=new Et;const L=[A,N],F=new g_;let q=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let oe=T[Z];return oe===void 0&&(oe=new Fo,T[Z]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Z){let oe=T[Z];return oe===void 0&&(oe=new Fo,T[Z]=oe),oe.getGripSpace()},this.getHand=function(Z){let oe=T[Z];return oe===void 0&&(oe=new Fo,T[Z]=oe),oe.getHandSpace()};function B(Z){const oe=w.indexOf(Z.inputSource);if(oe===-1)return;const ie=T[oe];ie!==void 0&&(ie.update(Z.inputSource,Z.frame,l||a),ie.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Y(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",V);for(let Z=0;Z<T.length;Z++){const oe=w[Z];oe!==null&&(w[Z]=null,T[Z].disconnect(oe))}q=null,j=null,d.reset();for(const Z in u)delete u[Z];e.setRenderTarget(b),m=null,p=null,f=null,s=null,E=null,nt.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",V),S.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,ke=null,ze=null;S.depth&&(ze=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=S.stencil?Zn:fn,ke=S.stencil?Sr:Yi);const De={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:r};f=this.getBinding(),p=f.createProjectionLayer(De),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),E=new Ci(p.textureWidth,p.textureHeight,{format:Ti,type:gi,depthTexture:new Os(p.textureWidth,p.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const ie={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Ci(m.framebufferWidth,m.framebufferHeight,{format:Ti,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),nt.setContext(s),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function V(Z){for(let oe=0;oe<Z.removed.length;oe++){const ie=Z.removed[oe],ke=w.indexOf(ie);ke>=0&&(w[ke]=null,T[ke].disconnect(ie))}for(let oe=0;oe<Z.added.length;oe++){const ie=Z.added[oe];let ke=w.indexOf(ie);if(ke===-1){for(let De=0;De<T.length;De++)if(De>=w.length){w.push(ie),ke=De;break}else if(w[De]===null){w[De]=ie,ke=De;break}if(ke===-1)break}const ze=T[ke];ze&&ze.connect(ie)}}const K=new P,te=new P;function pe(Z,oe,ie){K.setFromMatrixPosition(oe.matrixWorld),te.setFromMatrixPosition(ie.matrixWorld);const ke=K.distanceTo(te),ze=oe.projectionMatrix.elements,De=ie.projectionMatrix.elements,wt=ze[14]/(ze[10]-1),Ye=ze[14]/(ze[10]+1),dt=(ze[9]+1)/ze[5],st=(ze[9]-1)/ze[5],Je=(ze[8]-1)/ze[0],Tt=(De[8]+1)/De[0],Lt=wt*Je,kt=wt*Tt,Ht=ke/(-Je+Tt),_t=Ht*-Je;if(oe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(_t),Z.translateZ(Ht),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ze[10]===-1)Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const At=wt+Ht,I=Ye+Ht,ni=Lt-_t,ot=kt+(ke-_t),M=dt*Ye/I*At,g=st*Ye/I*At;Z.projectionMatrix.makePerspective(ni,ot,M,g,At,I),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function xe(Z,oe){oe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(oe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let oe=Z.near,ie=Z.far;d.texture!==null&&(d.depthNear>0&&(oe=d.depthNear),d.depthFar>0&&(ie=d.depthFar)),F.near=N.near=A.near=oe,F.far=N.far=A.far=ie,(q!==F.near||j!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),q=F.near,j=F.far),F.layers.mask=Z.layers.mask|6,A.layers.mask=F.layers.mask&-5,N.layers.mask=F.layers.mask&-3;const ke=Z.parent,ze=F.cameras;xe(F,ke);for(let De=0;De<ze.length;De++)xe(ze[De],ke);ze.length===2?pe(F,A,N):F.projectionMatrix.copy(A.projectionMatrix),we(Z,F,ke)};function we(Z,oe,ie){ie===null?Z.matrix.copy(oe.matrixWorld):(Z.matrix.copy(ie.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(oe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ar*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(Z){c=Z,p!==null&&(p.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(F)},this.getCameraTexture=function(Z){return u[Z]};let it=null;function vt(Z,oe){if(h=oe.getViewerPose(l||a),v=oe,h!==null){const ie=h.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let ke=!1;ie.length!==F.cameras.length&&(F.cameras.length=0,ke=!0);for(let Ye=0;Ye<ie.length;Ye++){const dt=ie[Ye];let st=null;if(m!==null)st=m.getViewport(dt);else{const Tt=f.getViewSubImage(p,dt);st=Tt.viewport,Ye===0&&(e.setRenderTargetTextures(E,Tt.colorTexture,Tt.depthStencilTexture),e.setRenderTarget(E))}let Je=L[Ye];Je===void 0&&(Je=new di,Je.layers.enable(Ye),Je.viewport=new Et,L[Ye]=Je),Je.matrix.fromArray(dt.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(dt.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(st.x,st.y,st.width,st.height),Ye===0&&(F.matrix.copy(Je.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ke===!0&&F.cameras.push(Je)}const ze=s.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=n.getBinding();const Ye=f.getDepthInformation(ie[0]);Ye&&Ye.isValid&&Ye.texture&&d.init(Ye,s.renderState)}if(ze&&ze.includes("camera-access")&&y){e.state.unbindTexture(),f=n.getBinding();for(let Ye=0;Ye<ie.length;Ye++){const dt=ie[Ye].camera;if(dt){let st=u[dt];st||(st=new Uu,u[dt]=st);const Je=f.getCameraImage(dt);st.sourceTexture=Je}}}}for(let ie=0;ie<T.length;ie++){const ke=w[ie],ze=T[ie];ke!==null&&ze!==void 0&&ze.update(ke,oe,l||a)}it&&it(Z,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),v=null}const nt=new Vu;nt.setAnimationLoop(vt),this.setAnimationLoop=function(Z){it=Z},this.dispose=function(){}}}const lM=new rt,Yu=new Fe;Yu.set(-1,0,0,0,1,0,0,0,1);function cM(i,e){function t(d,u){d.matrixAutoUpdate===!0&&d.updateMatrix(),u.value.copy(d.matrix)}function n(d,u){u.color.getRGB(d.fogColor.value,Ou(i)),u.isFog?(d.fogNear.value=u.near,d.fogFar.value=u.far):u.isFogExp2&&(d.fogDensity.value=u.density)}function s(d,u,S,b,E){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(d,u):u.isMeshLambertMaterial?(r(d,u),u.envMap&&(d.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(d,u),f(d,u)):u.isMeshPhongMaterial?(r(d,u),h(d,u),u.envMap&&(d.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(d,u),p(d,u),u.isMeshPhysicalMaterial&&m(d,u,E)):u.isMeshMatcapMaterial?(r(d,u),v(d,u)):u.isMeshDepthMaterial?r(d,u):u.isMeshDistanceMaterial?(r(d,u),y(d,u)):u.isMeshNormalMaterial?r(d,u):u.isLineBasicMaterial?(a(d,u),u.isLineDashedMaterial&&o(d,u)):u.isPointsMaterial?c(d,u,S,b):u.isSpriteMaterial?l(d,u):u.isShadowMaterial?(d.color.value.copy(u.color),d.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(d,u){d.opacity.value=u.opacity,u.color&&d.diffuse.value.copy(u.color),u.emissive&&d.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(d.map.value=u.map,t(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,t(u.alphaMap,d.alphaMapTransform)),u.bumpMap&&(d.bumpMap.value=u.bumpMap,t(u.bumpMap,d.bumpMapTransform),d.bumpScale.value=u.bumpScale,u.side===ri&&(d.bumpScale.value*=-1)),u.normalMap&&(d.normalMap.value=u.normalMap,t(u.normalMap,d.normalMapTransform),d.normalScale.value.copy(u.normalScale),u.side===ri&&d.normalScale.value.negate()),u.displacementMap&&(d.displacementMap.value=u.displacementMap,t(u.displacementMap,d.displacementMapTransform),d.displacementScale.value=u.displacementScale,d.displacementBias.value=u.displacementBias),u.emissiveMap&&(d.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,d.emissiveMapTransform)),u.specularMap&&(d.specularMap.value=u.specularMap,t(u.specularMap,d.specularMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest);const S=e.get(u),b=S.envMap,E=S.envMapRotation;b&&(d.envMap.value=b,d.envMapRotation.value.setFromMatrix4(lM.makeRotationFromEuler(E)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply(Yu),d.reflectivity.value=u.reflectivity,d.ior.value=u.ior,d.refractionRatio.value=u.refractionRatio),u.lightMap&&(d.lightMap.value=u.lightMap,d.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,d.lightMapTransform)),u.aoMap&&(d.aoMap.value=u.aoMap,d.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,d.aoMapTransform))}function a(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,u.map&&(d.map.value=u.map,t(u.map,d.mapTransform))}function o(d,u){d.dashSize.value=u.dashSize,d.totalSize.value=u.dashSize+u.gapSize,d.scale.value=u.scale}function c(d,u,S,b){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.size.value=u.size*S,d.scale.value=b*.5,u.map&&(d.map.value=u.map,t(u.map,d.uvTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,t(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function l(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.rotation.value=u.rotation,u.map&&(d.map.value=u.map,t(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,t(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function h(d,u){d.specular.value.copy(u.specular),d.shininess.value=Math.max(u.shininess,1e-4)}function f(d,u){u.gradientMap&&(d.gradientMap.value=u.gradientMap)}function p(d,u){d.metalness.value=u.metalness,u.metalnessMap&&(d.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,d.metalnessMapTransform)),d.roughness.value=u.roughness,u.roughnessMap&&(d.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,d.roughnessMapTransform)),u.envMap&&(d.envMapIntensity.value=u.envMapIntensity)}function m(d,u,S){d.ior.value=u.ior,u.sheen>0&&(d.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),d.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(d.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,d.sheenColorMapTransform)),u.sheenRoughnessMap&&(d.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,d.sheenRoughnessMapTransform))),u.clearcoat>0&&(d.clearcoat.value=u.clearcoat,d.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(d.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,d.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(d.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===ri&&d.clearcoatNormalScale.value.negate())),u.dispersion>0&&(d.dispersion.value=u.dispersion),u.iridescence>0&&(d.iridescence.value=u.iridescence,d.iridescenceIOR.value=u.iridescenceIOR,d.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(d.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,d.iridescenceMapTransform)),u.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),u.transmission>0&&(d.transmission.value=u.transmission,d.transmissionSamplerMap.value=S.texture,d.transmissionSamplerSize.value.set(S.width,S.height),u.transmissionMap&&(d.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,d.transmissionMapTransform)),d.thickness.value=u.thickness,u.thicknessMap&&(d.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=u.attenuationDistance,d.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(d.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(d.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=u.specularIntensity,d.specularColor.value.copy(u.specularColor),u.specularColorMap&&(d.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,d.specularColorMapTransform)),u.specularIntensityMap&&(d.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,d.specularIntensityMapTransform))}function v(d,u){u.matcap&&(d.matcap.value=u.matcap)}function y(d,u){const S=e.get(u).light;d.referencePosition.value.setFromMatrixPosition(S.matrixWorld),d.nearDistance.value=S.shadow.camera.near,d.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function hM(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,T){const w=T.program;n.uniformBlockBinding(E,w)}function l(E,T){let w=s[E.id];w===void 0&&(d(E),w=h(E),s[E.id]=w,E.addEventListener("dispose",S));const C=T.program;n.updateUBOMapping(E,C);const _=e.render.frame;r[E.id]!==_&&(p(E),r[E.id]=_)}function h(E){const T=f();E.__bindingPointIndex=T;const w=i.createBuffer(),C=E.__size,_=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,C,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,w),w}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){const T=s[E.id],w=E.uniforms,C=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let _=0,A=w.length;_<A;_++){const N=w[_];if(Array.isArray(N))for(let L=0,F=N.length;L<F;L++)m(N[L],_,L,C);else m(N,_,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,T,w,C){if(y(E,T,w,C)===!0){const _=E.__offset,A=E.value;if(Array.isArray(A)){let N=0;for(let L=0;L<A.length;L++){const F=A[L],q=u(F);v(F,E.__data,N),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(N+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(A,E.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,E.__data)}}function v(E,T,w){typeof E=="number"||typeof E=="boolean"?T[0]=E:E.isMatrix3?(T[0]=E.elements[0],T[1]=E.elements[1],T[2]=E.elements[2],T[3]=0,T[4]=E.elements[3],T[5]=E.elements[4],T[6]=E.elements[5],T[7]=0,T[8]=E.elements[6],T[9]=E.elements[7],T[10]=E.elements[8],T[11]=0):ArrayBuffer.isView(E)?T.set(new E.constructor(E.buffer,E.byteOffset,T.length)):E.toArray(T,w)}function y(E,T,w,C){const _=E.value,A=T+"_"+w;if(C[A]===void 0)return typeof _=="number"||typeof _=="boolean"?C[A]=_:ArrayBuffer.isView(_)?C[A]=_.slice():C[A]=_.clone(),!0;{const N=C[A];if(typeof _=="number"||typeof _=="boolean"){if(N!==_)return C[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(N.equals(_)===!1)return N.copy(_),!0}}return!1}function d(E){const T=E.uniforms;let w=0;const C=16;for(let A=0,N=T.length;A<N;A++){const L=Array.isArray(T[A])?T[A]:[T[A]];for(let F=0,q=L.length;F<q;F++){const j=L[F],B=Array.isArray(j.value)?j.value:[j.value];for(let Y=0,V=B.length;Y<V;Y++){const K=B[Y],te=u(K),pe=w%C,xe=pe%te.boundary,we=pe+xe;w+=xe,we!==0&&C-we<te.storage&&(w+=C-we),j.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=w,w+=te.storage}}}const _=w%C;return _>0&&(w+=C-_),E.__size=w,E.__cache={},this}function u(E){const T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(T.boundary=16,T.storage=E.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",E),T}function S(E){const T=E.target;T.removeEventListener("dispose",S);const w=a.indexOf(T.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function b(){for(const E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:c,update:l,dispose:b}}const dM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Oi=null;function uM(){return Oi===null&&(Oi=new Xv(dM,16,16,jn,un),Oi.name="DFG_LUT",Oi.minFilter=Dt,Oi.magFilter=Dt,Oi.wrapS=sn,Oi.wrapT=sn,Oi.generateMipmaps=!1,Oi.needsUpdate=!0),Oi}class fM{constructor(e={}){const{canvas:t=lv(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1,outputBufferType:m=gi}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;const y=m,d=new Set([Oc,Uc,Nc]),u=new Set([gi,Yi,wr,Sr,Ic,Dc]),S=new Uint32Array(4),b=new Int32Array(4),E=new P;let T=null,w=null;const C=[],_=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let L=!1,F=null,q=null,j=null,B=null;this._outputColorSpace=mi;let Y=0,V=0,K=null,te=-1,pe=null;const xe=new Et,we=new Et;let it=null;const vt=new tt(0);let nt=0,Z=t.width,oe=t.height,ie=1,ke=null,ze=null;const De=new Et(0,0,Z,oe),wt=new Et(0,0,Z,oe);let Ye=!1;const dt=new Gc;let st=!1,Je=!1;const Tt=new rt,Lt=new P,kt=new Et,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function At(){return K===null?ie:1}let I=n;function ni(x,D){return t.getContext(x,D)}try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rc}`),t.addEventListener("webglcontextlost",xt,!1),t.addEventListener("webglcontextrestored",pt,!1),t.addEventListener("webglcontextcreationerror",Ii,!1),I===null){const D="webgl2";if(I=ni(D,x),I===null)throw ni(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(x){throw je("WebGLRenderer: "+x.message),x}let ot,M,g,U,z,G,ne,le,W,$,ce,Ce,ue,he,Le,Ne,Ve,R,ae,X,de,_e,J;function Ae(){ot=new uy(I),ot.init(),de=new nM(I,ot),M=new sy(I,ot,e,de),g=new tM(I,ot),M.reversedDepthBuffer&&p&&g.buffers.depth.setReversed(!0),q=I.createFramebuffer(),j=I.createFramebuffer(),B=I.createFramebuffer(),U=new my(I),z=new VE,G=new iM(I,ot,g,z,M,de,U),ne=new dy(N),le=new x_(I),_e=new iy(I,le),W=new fy(I,le,U,_e),$=new vy(I,W,le,_e,U),R=new gy(I,M,G),Le=new ry(z),ce=new zE(N,ne,ot,M,_e,Le),Ce=new cM(N,z),ue=new GE,he=new ZE(ot),Ve=new ty(N,ne,g,$,v,c),Ne=new eM(N,$,M),J=new hM(I,U,M,g),ae=new ny(I,ot,U),X=new py(I,ot,U),U.programs=ce.programs,N.capabilities=M,N.extensions=ot,N.properties=z,N.renderLists=ue,N.shadowMap=Ne,N.state=g,N.info=U}Ae(),y!==gi&&(A=new xy(y,t.width,t.height,o,s,r));const Se=new oM(N,I);this.xr=Se,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const x=ot.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=ot.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(x){x!==void 0&&(ie=x,this.setSize(Z,oe,!1))},this.getSize=function(x){return x.set(Z,oe)},this.setSize=function(x,D,H=!0){if(Se.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=x,oe=D,t.width=Math.floor(x*ie),t.height=Math.floor(D*ie),H===!0&&(t.style.width=x+"px",t.style.height=D+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(Z*ie,oe*ie).floor()},this.setDrawingBufferSize=function(x,D,H){Z=x,oe=D,ie=H,t.width=Math.floor(x*H),t.height=Math.floor(D*H),this.setViewport(0,0,x,D)},this.setEffects=function(x){if(y===gi){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let D=0;D<x.length;D++)if(x[D].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(xe)},this.getViewport=function(x){return x.copy(De)},this.setViewport=function(x,D,H,O){x.isVector4?De.set(x.x,x.y,x.z,x.w):De.set(x,D,H,O),g.viewport(xe.copy(De).multiplyScalar(ie).round())},this.getScissor=function(x){return x.copy(wt)},this.setScissor=function(x,D,H,O){x.isVector4?wt.set(x.x,x.y,x.z,x.w):wt.set(x,D,H,O),g.scissor(we.copy(wt).multiplyScalar(ie).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(x){g.setScissorTest(Ye=x)},this.setOpaqueSort=function(x){ke=x},this.setTransparentSort=function(x){ze=x},this.getClearColor=function(x){return x.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(x=!0,D=!0,H=!0){let O=0;if(x){let k=!1;if(K!==null){const ge=K.texture.format;k=d.has(ge)}if(k){const ge=K.texture.type,Ee=u.has(ge),me=Ve.getClearColor(),be=Ve.getClearAlpha(),Re=me.r,He=me.g,$e=me.b;Ee?(S[0]=Re,S[1]=He,S[2]=$e,S[3]=be,I.clearBufferuiv(I.COLOR,0,S)):(b[0]=Re,b[1]=He,b[2]=$e,b[3]=be,I.clearBufferiv(I.COLOR,0,b))}else O|=I.COLOR_BUFFER_BIT}D&&(O|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(O|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&I.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),F=x},this.dispose=function(){t.removeEventListener("webglcontextlost",xt,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",Ii,!1),Ve.dispose(),ue.dispose(),he.dispose(),z.dispose(),ne.dispose(),$.dispose(),_e.dispose(),J.dispose(),ce.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",hh),Se.removeEventListener("sessionend",dh),Vn.stop()};function xt(x){x.preventDefault(),Ah("WebGLRenderer: Context Lost."),L=!0}function pt(){Ah("WebGLRenderer: Context Restored."),L=!1;const x=U.autoReset,D=Ne.enabled,H=Ne.autoUpdate,O=Ne.needsUpdate,k=Ne.type;Ae(),U.autoReset=x,Ne.enabled=D,Ne.autoUpdate=H,Ne.needsUpdate=O,Ne.type=k}function Ii(x){je("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Di(x){const D=x.target;D.removeEventListener("dispose",Di),Mg(D)}function Mg(x){wg(x),z.remove(x)}function wg(x){const D=z.get(x).programs;D!==void 0&&(D.forEach(function(H){ce.releaseProgram(H)}),x.isShaderMaterial&&ce.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,H,O,k,ge){D===null&&(D=Ht);const Ee=k.isMesh&&k.matrixWorld.determinantAffine()<0,me=Tg(x,D,H,O,k);g.setMaterial(O,Ee);let be=H.index,Re=1;if(O.wireframe===!0){if(be=W.getWireframeAttribute(H),be===void 0)return;Re=2}const He=H.drawRange,$e=H.attributes.position;let Pe=He.start*Re,ht=(He.start+He.count)*Re;ge!==null&&(Pe=Math.max(Pe,ge.start*Re),ht=Math.min(ht,(ge.start+ge.count)*Re)),be!==null?(Pe=Math.max(Pe,0),ht=Math.min(ht,be.count)):$e!=null&&(Pe=Math.max(Pe,0),ht=Math.min(ht,$e.count));const St=ht-Pe;if(St<0||St===1/0)return;_e.setup(k,O,me,H,be);let yt,ut=ae;if(be!==null&&(yt=le.get(be),ut=X,ut.setIndex(yt)),k.isMesh)O.wireframe===!0?(g.setLineWidth(O.wireframeLinewidth*At()),ut.setMode(I.LINES)):ut.setMode(I.TRIANGLES);else if(k.isLine){let Zt=O.linewidth;Zt===void 0&&(Zt=1),g.setLineWidth(Zt*At()),k.isLineSegments?ut.setMode(I.LINES):k.isLineLoop?ut.setMode(I.LINE_LOOP):ut.setMode(I.LINE_STRIP)}else k.isPoints?ut.setMode(I.POINTS):k.isSprite&&ut.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))ut.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Zt=k._multiDrawStarts,ye=k._multiDrawCounts,oi=k._multiDrawCount,Qe=be?le.get(be).bytesPerElement:1,ui=z.get(O).currentProgram.getUniforms();for(let Ni=0;Ni<oi;Ni++)ui.setValue(I,"_gl_DrawID",Ni),ut.render(Zt[Ni]/Qe,ye[Ni])}else if(k.isInstancedMesh)ut.renderInstances(Pe,St,k.count);else if(H.isInstancedBufferGeometry){const Zt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ye=Math.min(H.instanceCount,Zt);ut.renderInstances(Pe,St,ye)}else ut.render(Pe,St)};function ch(x,D,H){x.transparent===!0&&x.side===Vi&&x.forceSinglePass===!1?(x.side=ri,x.needsUpdate=!0,$r(x,D,H),x.side=On,x.needsUpdate=!0,$r(x,D,H),x.side=Vi):$r(x,D,H)}this.compile=function(x,D,H=null){H===null&&(H=x),w=he.get(H),w.init(D),_.push(w),H.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),x!==H&&x.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),w.setupLights();const O=new Set;return x.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ge=k.material;if(ge)if(Array.isArray(ge))for(let Ee=0;Ee<ge.length;Ee++){const me=ge[Ee];ch(me,H,k),O.add(me)}else ch(ge,H,k),O.add(ge)}),w=_.pop(),O},this.compileAsync=function(x,D,H=null){const O=this.compile(x,D,H);return new Promise(k=>{function ge(){if(O.forEach(function(Ee){z.get(Ee).currentProgram.isReady()&&O.delete(Ee)}),O.size===0){k(x);return}setTimeout(ge,10)}ot.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Co=null;function Sg(x){Co&&Co(x)}function hh(){Vn.stop()}function dh(){Vn.start()}const Vn=new Vu;Vn.setAnimationLoop(Sg),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(x){Co=x,Se.setAnimationLoop(x),x===null?Vn.stop():Vn.start()},Se.addEventListener("sessionstart",hh),Se.addEventListener("sessionend",dh),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(x,D);const H=Se.enabled===!0&&Se.isPresenting===!0,O=A!==null&&(K===null||H)&&A.begin(N,K);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(D),D=Se.getCamera()),x.isScene===!0&&x.onBeforeRender(N,x,D,K),w=he.get(x,_.length),w.init(D),w.state.textureUnits=G.getTextureUnits(),_.push(w),Tt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),dt.setFromProjectionMatrix(Tt,Gi,D.reversedDepth),Je=this.localClippingEnabled,st=Le.init(this.clippingPlanes,Je),T=ue.get(x,C.length),T.init(),C.push(T),Se.enabled===!0&&Se.isPresenting===!0){const Ee=N.xr.getDepthSensingMesh();Ee!==null&&Ro(Ee,D,-1/0,N.sortObjects)}Ro(x,D,0,N.sortObjects),T.finish(),N.sortObjects===!0&&T.sort(ke,ze,D.reversedDepth),_t=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,_t&&Ve.addToRenderList(T,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),st===!0&&Le.beginShadows();const k=w.state.shadowsArray;if(Ne.render(k,x,D),st===!0&&Le.endShadows(),(O&&A.hasRenderPass())===!1){const Ee=T.opaque,me=T.transmissive;if(w.setupLights(),D.isArrayCamera){const be=D.cameras;if(me.length>0)for(let Re=0,He=be.length;Re<He;Re++){const $e=be[Re];fh(Ee,me,x,$e)}_t&&Ve.render(x);for(let Re=0,He=be.length;Re<He;Re++){const $e=be[Re];uh(T,x,$e,$e.viewport)}}else me.length>0&&fh(Ee,me,x,D),_t&&Ve.render(x),uh(T,x,D)}K!==null&&V===0&&(G.updateMultisampleRenderTarget(K),G.updateRenderTargetMipmap(K)),O&&A.end(N),x.isScene===!0&&x.onAfterRender(N,x,D),_e.resetDefaultState(),te=-1,pe=null,_.pop(),_.length>0?(w=_[_.length-1],G.setTextureUnits(w.state.textureUnits),st===!0&&Le.setGlobalState(N.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?T=C[C.length-1]:T=null,F!==null&&F.renderEnd()};function Ro(x,D,H,O){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)H=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLightProbeGrid)w.pushLightProbeGrid(x);else if(x.isLight)w.pushLight(x),x.castShadow&&w.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||dt.intersectsSprite(x)){O&&kt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Tt);const Ee=$.update(x),me=x.material;me.visible&&T.push(x,Ee,me,H,kt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||dt.intersectsObject(x))){const Ee=$.update(x),me=x.material;if(O&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),kt.copy(x.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),kt.copy(Ee.boundingSphere.center)),kt.applyMatrix4(x.matrixWorld).applyMatrix4(Tt)),Array.isArray(me)){const be=Ee.groups;for(let Re=0,He=be.length;Re<He;Re++){const $e=be[Re],Pe=me[$e.materialIndex];Pe&&Pe.visible&&T.push(x,Ee,Pe,H,kt.z,$e)}}else me.visible&&T.push(x,Ee,me,H,kt.z,null)}}const ge=x.children;for(let Ee=0,me=ge.length;Ee<me;Ee++)Ro(ge[Ee],D,H,O)}function uh(x,D,H,O){const{opaque:k,transmissive:ge,transparent:Ee}=x;w.setupLightsView(H),st===!0&&Le.setGlobalState(N.clippingPlanes,H),O&&g.viewport(xe.copy(O)),k.length>0&&Xr(k,D,H),ge.length>0&&Xr(ge,D,H),Ee.length>0&&Xr(Ee,D,H),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function fh(x,D,H,O){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[O.id]===void 0){const Pe=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[O.id]=new Ci(1,1,{generateMipmaps:!0,type:Pe?un:gi,minFilter:Pn,samples:Math.max(4,M.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const ge=w.state.transmissionRenderTarget[O.id],Ee=O.viewport||xe;ge.setSize(Ee.z*N.transmissionResolutionScale,Ee.w*N.transmissionResolutionScale);const me=N.getRenderTarget(),be=N.getActiveCubeFace(),Re=N.getActiveMipmapLevel();N.setRenderTarget(ge),N.getClearColor(vt),nt=N.getClearAlpha(),nt<1&&N.setClearColor(16777215,.5),N.clear(),_t&&Ve.render(H);const He=N.toneMapping;N.toneMapping=Xi;const $e=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),w.setupLightsView(O),st===!0&&Le.setGlobalState(N.clippingPlanes,O),Xr(x,H,O),G.updateMultisampleRenderTarget(ge),G.updateRenderTargetMipmap(ge),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let ht=0,St=D.length;ht<St;ht++){const yt=D[ht],{object:ut,geometry:Zt,material:ye,group:oi}=yt;if(ye.side===Vi&&ut.layers.test(O.layers)){const Qe=ye.side;ye.side=ri,ye.needsUpdate=!0,ph(ut,H,O,Zt,ye,oi),ye.side=Qe,ye.needsUpdate=!0,Pe=!0}}Pe===!0&&(G.updateMultisampleRenderTarget(ge),G.updateRenderTargetMipmap(ge))}N.setRenderTarget(me,be,Re),N.setClearColor(vt,nt),$e!==void 0&&(O.viewport=$e),N.toneMapping=He}function Xr(x,D,H){const O=D.isScene===!0?D.overrideMaterial:null;for(let k=0,ge=x.length;k<ge;k++){const Ee=x[k],{object:me,geometry:be,group:Re}=Ee;let He=Ee.material;He.allowOverride===!0&&O!==null&&(He=O),me.layers.test(H.layers)&&ph(me,D,H,be,He,Re)}}function ph(x,D,H,O,k,ge){x.onBeforeRender(N,D,H,O,k,ge),x.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),k.onBeforeRender(N,D,H,O,x,ge),k.transparent===!0&&k.side===Vi&&k.forceSinglePass===!1?(k.side=ri,k.needsUpdate=!0,N.renderBufferDirect(H,D,O,k,x,ge),k.side=On,k.needsUpdate=!0,N.renderBufferDirect(H,D,O,k,x,ge),k.side=Vi):N.renderBufferDirect(H,D,O,k,x,ge),x.onAfterRender(N,D,H,O,k,ge)}function $r(x,D,H){D.isScene!==!0&&(D=Ht);const O=z.get(x),k=w.state.lights,ge=w.state.shadowsArray,Ee=k.state.version,me=ce.getParameters(x,k.state,ge,D,H,w.state.lightProbeGridArray),be=ce.getProgramCacheKey(me);let Re=O.programs;O.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,O.fog=D.fog;const He=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;O.envMap=ne.get(x.envMap||O.environment,He),O.envMapRotation=O.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,Re===void 0&&(x.addEventListener("dispose",Di),Re=new Map,O.programs=Re);let $e=Re.get(be);if($e!==void 0){if(O.currentProgram===$e&&O.lightsStateVersion===Ee)return gh(x,me),$e}else me.uniforms=ce.getUniforms(x),F!==null&&x.isNodeMaterial&&F.build(x,H,me),x.onBeforeCompile(me,N),$e=ce.acquireProgram(me,be),Re.set(be,$e),O.uniforms=me.uniforms;const Pe=O.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Pe.clippingPlanes=Le.uniform),gh(x,me),O.needsLights=Cg(x),O.lightsStateVersion=Ee,O.needsLights&&(Pe.ambientLightColor.value=k.state.ambient,Pe.lightProbe.value=k.state.probe,Pe.directionalLights.value=k.state.directional,Pe.directionalLightShadows.value=k.state.directionalShadow,Pe.spotLights.value=k.state.spot,Pe.spotLightShadows.value=k.state.spotShadow,Pe.rectAreaLights.value=k.state.rectArea,Pe.ltc_1.value=k.state.rectAreaLTC1,Pe.ltc_2.value=k.state.rectAreaLTC2,Pe.pointLights.value=k.state.point,Pe.pointLightShadows.value=k.state.pointShadow,Pe.hemisphereLights.value=k.state.hemi,Pe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Pe.spotLightMatrix.value=k.state.spotLightMatrix,Pe.spotLightMap.value=k.state.spotLightMap,Pe.pointShadowMatrix.value=k.state.pointShadowMatrix),O.lightProbeGrid=w.state.lightProbeGridArray.length>0,O.currentProgram=$e,O.uniformsList=null,$e}function mh(x){if(x.uniformsList===null){const D=x.currentProgram.getUniforms();x.uniformsList=Ra.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function gh(x,D){const H=z.get(x);H.outputColorSpace=D.outputColorSpace,H.batching=D.batching,H.batchingColor=D.batchingColor,H.instancing=D.instancing,H.instancingColor=D.instancingColor,H.instancingMorph=D.instancingMorph,H.skinning=D.skinning,H.morphTargets=D.morphTargets,H.morphNormals=D.morphNormals,H.morphColors=D.morphColors,H.morphTargetsCount=D.morphTargetsCount,H.numClippingPlanes=D.numClippingPlanes,H.numIntersection=D.numClipIntersection,H.vertexAlphas=D.vertexAlphas,H.vertexTangents=D.vertexTangents,H.toneMapping=D.toneMapping}function bg(x,D){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;E.setFromMatrixPosition(D.matrixWorld);for(let H=0,O=x.length;H<O;H++){const k=x[H];if(k.texture!==null&&k.boundingBox.containsPoint(E))return k}return null}function Tg(x,D,H,O,k){D.isScene!==!0&&(D=Ht),G.resetTextureUnits();const ge=D.fog,Ee=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?D.environment:null,me=K===null?N.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Ze.workingColorSpace,be=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Re=ne.get(O.envMap||Ee,be),He=O.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,$e=!!H.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Pe=!!H.morphAttributes.position,ht=!!H.morphAttributes.normal,St=!!H.morphAttributes.color;let yt=Xi;O.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(yt=N.toneMapping);const ut=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Zt=ut!==void 0?ut.length:0,ye=z.get(O),oi=w.state.lights;if(st===!0&&(Je===!0||x!==pe)){const mt=x===pe&&O.id===te;Le.setState(O,x,mt)}let Qe=!1;O.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==oi.state.version||ye.outputColorSpace!==me||k.isBatchedMesh&&ye.batching===!1||!k.isBatchedMesh&&ye.batching===!0||k.isBatchedMesh&&ye.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&ye.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&ye.instancing===!1||!k.isInstancedMesh&&ye.instancing===!0||k.isSkinnedMesh&&ye.skinning===!1||!k.isSkinnedMesh&&ye.skinning===!0||k.isInstancedMesh&&ye.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ye.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ye.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ye.instancingMorph===!1&&k.morphTexture!==null||ye.envMap!==Re||O.fog===!0&&ye.fog!==ge||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Le.numPlanes||ye.numIntersection!==Le.numIntersection)||ye.vertexAlphas!==He||ye.vertexTangents!==$e||ye.morphTargets!==Pe||ye.morphNormals!==ht||ye.morphColors!==St||ye.toneMapping!==yt||ye.morphTargetsCount!==Zt||!!ye.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,ye.__version=O.version);let ui=ye.currentProgram;Qe===!0&&(ui=$r(O,D,k),F&&O.isNodeMaterial&&F.onUpdateProgram(O,ui,ye));let Ni=!1,_n=!1,ss=!1;const ft=ui.getUniforms(),bt=ye.uniforms;if(g.useProgram(ui.program)&&(Ni=!0,_n=!0,ss=!0),O.id!==te&&(te=O.id,_n=!0),ye.needsLights){const mt=bg(w.state.lightProbeGridArray,k);ye.lightProbeGrid!==mt&&(ye.lightProbeGrid=mt,_n=!0)}if(Ni||pe!==x){g.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),ft.setValue(I,"projectionMatrix",x.projectionMatrix),ft.setValue(I,"viewMatrix",x.matrixWorldInverse);const yn=ft.map.cameraPosition;yn!==void 0&&yn.setValue(I,Lt.setFromMatrixPosition(x.matrixWorld)),M.logarithmicDepthBuffer&&ft.setValue(I,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ft.setValue(I,"isOrthographic",x.isOrthographicCamera===!0),pe!==x&&(pe=x,_n=!0,ss=!0)}if(ye.needsLights&&(oi.state.directionalShadowMap.length>0&&ft.setValue(I,"directionalShadowMap",oi.state.directionalShadowMap,G),oi.state.spotShadowMap.length>0&&ft.setValue(I,"spotShadowMap",oi.state.spotShadowMap,G),oi.state.pointShadowMap.length>0&&ft.setValue(I,"pointShadowMap",oi.state.pointShadowMap,G)),k.isSkinnedMesh){ft.setOptional(I,k,"bindMatrix"),ft.setOptional(I,k,"bindMatrixInverse");const mt=k.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),ft.setValue(I,"boneTexture",mt.boneTexture,G))}k.isBatchedMesh&&(ft.setOptional(I,k,"batchingTexture"),ft.setValue(I,"batchingTexture",k._matricesTexture,G),ft.setOptional(I,k,"batchingIdTexture"),ft.setValue(I,"batchingIdTexture",k._indirectTexture,G),ft.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&ft.setValue(I,"batchingColorTexture",k._colorsTexture,G));const xn=H.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&R.update(k,H,ui),(_n||ye.receiveShadow!==k.receiveShadow)&&(ye.receiveShadow=k.receiveShadow,ft.setValue(I,"receiveShadow",k.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&D.environment!==null&&(bt.envMapIntensity.value=D.environmentIntensity),bt.dfgLUT!==void 0&&(bt.dfgLUT.value=uM()),_n){if(ft.setValue(I,"toneMappingExposure",N.toneMappingExposure),ye.needsLights&&Ag(bt,ss),ge&&O.fog===!0&&Ce.refreshFogUniforms(bt,ge),Ce.refreshMaterialUniforms(bt,O,ie,oe,w.state.transmissionRenderTarget[x.id]),ye.needsLights&&ye.lightProbeGrid){const mt=ye.lightProbeGrid;bt.probesSH.value=mt.texture,bt.probesMin.value.copy(mt.boundingBox.min),bt.probesMax.value.copy(mt.boundingBox.max),bt.probesResolution.value.copy(mt.resolution)}Ra.upload(I,mh(ye),bt,G)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Ra.upload(I,mh(ye),bt,G),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ft.setValue(I,"center",k.center),ft.setValue(I,"modelViewMatrix",k.modelViewMatrix),ft.setValue(I,"normalMatrix",k.normalMatrix),ft.setValue(I,"modelMatrix",k.matrixWorld),O.uniformsGroups!==void 0){const mt=O.uniformsGroups;for(let yn=0,rs=mt.length;yn<rs;yn++){const vh=mt[yn];J.update(vh,ui),J.bind(vh,ui)}}return ui}function Ag(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function Cg(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(x,D,H){const O=z.get(x);O.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),z.get(x.texture).__webglTexture=D,z.get(x.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:H,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,D){const H=z.get(x);H.__webglFramebuffer=D,H.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(x,D=0,H=0){K=x,Y=D,V=H;let O=null,k=!1,ge=!1;if(x){const me=z.get(x);if(me.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(I.FRAMEBUFFER,me.__webglFramebuffer),xe.copy(x.viewport),we.copy(x.scissor),it=x.scissorTest,g.viewport(xe),g.scissor(we),g.setScissorTest(it),te=-1;return}else if(me.__webglFramebuffer===void 0)G.setupRenderTarget(x);else if(me.__hasExternalTextures)G.rebindTextures(x,z.get(x.texture).__webglTexture,z.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const He=x.depthTexture;if(me.__boundDepthTexture!==He){if(He!==null&&z.has(He)&&(x.width!==He.image.width||x.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(x)}}const be=x.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(ge=!0);const Re=z.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Re[D])?O=Re[D][H]:O=Re[D],k=!0):x.samples>0&&G.useMultisampledRTT(x)===!1?O=z.get(x).__webglMultisampledFramebuffer:Array.isArray(Re)?O=Re[H]:O=Re,xe.copy(x.viewport),we.copy(x.scissor),it=x.scissorTest}else xe.copy(De).multiplyScalar(ie).floor(),we.copy(wt).multiplyScalar(ie).floor(),it=Ye;if(H!==0&&(O=q),g.bindFramebuffer(I.FRAMEBUFFER,O)&&g.drawBuffers(x,O),g.viewport(xe),g.scissor(we),g.setScissorTest(it),k){const me=z.get(x.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,me.__webglTexture,H)}else if(ge){const me=D;for(let be=0;be<x.textures.length;be++){const Re=z.get(x.textures[be]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+be,Re.__webglTexture,H,me)}}else if(x!==null&&H!==0){const me=z.get(x.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,me.__webglTexture,H)}te=-1},this.readRenderTargetPixels=function(x,D,H,O,k,ge,Ee,me=0){if(!(x&&x.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=z.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Ee!==void 0&&(be=be[Ee]),be){g.bindFramebuffer(I.FRAMEBUFFER,be);try{const Re=x.textures[me],He=Re.format,$e=Re.type;if(x.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+me),!M.textureFormatReadable(He)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!M.textureTypeReadable($e)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-O&&H>=0&&H<=x.height-k&&I.readPixels(D,H,O,k,de.convert(He),de.convert($e),ge)}finally{const Re=K!==null?z.get(K).__webglFramebuffer:null;g.bindFramebuffer(I.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(x,D,H,O,k,ge,Ee,me=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=z.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Ee!==void 0&&(be=be[Ee]),be)if(D>=0&&D<=x.width-O&&H>=0&&H<=x.height-k){g.bindFramebuffer(I.FRAMEBUFFER,be);const Re=x.textures[me],He=Re.format,$e=Re.type;if(x.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+me),!M.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!M.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Pe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Pe),I.bufferData(I.PIXEL_PACK_BUFFER,ge.byteLength,I.STREAM_READ),I.readPixels(D,H,O,k,de.convert(He),de.convert($e),0);const ht=K!==null?z.get(K).__webglFramebuffer:null;g.bindFramebuffer(I.FRAMEBUFFER,ht);const St=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await cv(I,St,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Pe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ge),I.deleteBuffer(Pe),I.deleteSync(St),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,D=null,H=0){const O=Math.pow(2,-H),k=Math.floor(x.image.width*O),ge=Math.floor(x.image.height*O),Ee=D!==null?D.x:0,me=D!==null?D.y:0;G.setTexture2D(x,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,Ee,me,k,ge),g.unbindTexture()},this.copyTextureToTexture=function(x,D,H=null,O=null,k=0,ge=0){let Ee,me,be,Re,He,$e,Pe,ht,St;const yt=x.isCompressedTexture?x.mipmaps[ge]:x.image;if(H!==null)Ee=H.max.x-H.min.x,me=H.max.y-H.min.y,be=H.isBox3?H.max.z-H.min.z:1,Re=H.min.x,He=H.min.y,$e=H.isBox3?H.min.z:0;else{const bt=Math.pow(2,-k);Ee=Math.floor(yt.width*bt),me=Math.floor(yt.height*bt),x.isDataArrayTexture?be=yt.depth:x.isData3DTexture?be=Math.floor(yt.depth*bt):be=1,Re=0,He=0,$e=0}O!==null?(Pe=O.x,ht=O.y,St=O.z):(Pe=0,ht=0,St=0);const ut=de.convert(D.format),Zt=de.convert(D.type);let ye;D.isData3DTexture?(G.setTexture3D(D,0),ye=I.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(G.setTexture2DArray(D,0),ye=I.TEXTURE_2D_ARRAY):(G.setTexture2D(D,0),ye=I.TEXTURE_2D),g.activeTexture(I.TEXTURE0),g.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),g.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),g.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);const oi=g.getParameter(I.UNPACK_ROW_LENGTH),Qe=g.getParameter(I.UNPACK_IMAGE_HEIGHT),ui=g.getParameter(I.UNPACK_SKIP_PIXELS),Ni=g.getParameter(I.UNPACK_SKIP_ROWS),_n=g.getParameter(I.UNPACK_SKIP_IMAGES);g.pixelStorei(I.UNPACK_ROW_LENGTH,yt.width),g.pixelStorei(I.UNPACK_IMAGE_HEIGHT,yt.height),g.pixelStorei(I.UNPACK_SKIP_PIXELS,Re),g.pixelStorei(I.UNPACK_SKIP_ROWS,He),g.pixelStorei(I.UNPACK_SKIP_IMAGES,$e);const ss=x.isDataArrayTexture||x.isData3DTexture,ft=D.isDataArrayTexture||D.isData3DTexture;if(x.isDepthTexture){const bt=z.get(x),xn=z.get(D),mt=z.get(bt.__renderTarget),yn=z.get(xn.__renderTarget);g.bindFramebuffer(I.READ_FRAMEBUFFER,mt.__webglFramebuffer),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,yn.__webglFramebuffer);for(let rs=0;rs<be;rs++)ss&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,z.get(x).__webglTexture,k,$e+rs),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,z.get(D).__webglTexture,ge,St+rs)),I.blitFramebuffer(Re,He,Ee,me,Pe,ht,Ee,me,I.DEPTH_BUFFER_BIT,I.NEAREST);g.bindFramebuffer(I.READ_FRAMEBUFFER,null),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(k!==0||x.isRenderTargetTexture||z.has(x)){const bt=z.get(x),xn=z.get(D);g.bindFramebuffer(I.READ_FRAMEBUFFER,j),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,B);for(let mt=0;mt<be;mt++)ss?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,bt.__webglTexture,k,$e+mt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,bt.__webglTexture,k),ft?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,xn.__webglTexture,ge,St+mt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,xn.__webglTexture,ge),k!==0?I.blitFramebuffer(Re,He,Ee,me,Pe,ht,Ee,me,I.COLOR_BUFFER_BIT,I.NEAREST):ft?I.copyTexSubImage3D(ye,ge,Pe,ht,St+mt,Re,He,Ee,me):I.copyTexSubImage2D(ye,ge,Pe,ht,Re,He,Ee,me);g.bindFramebuffer(I.READ_FRAMEBUFFER,null),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ft?x.isDataTexture||x.isData3DTexture?I.texSubImage3D(ye,ge,Pe,ht,St,Ee,me,be,ut,Zt,yt.data):D.isCompressedArrayTexture?I.compressedTexSubImage3D(ye,ge,Pe,ht,St,Ee,me,be,ut,yt.data):I.texSubImage3D(ye,ge,Pe,ht,St,Ee,me,be,ut,Zt,yt):x.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ge,Pe,ht,Ee,me,ut,Zt,yt.data):x.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ge,Pe,ht,yt.width,yt.height,ut,yt.data):I.texSubImage2D(I.TEXTURE_2D,ge,Pe,ht,Ee,me,ut,Zt,yt);g.pixelStorei(I.UNPACK_ROW_LENGTH,oi),g.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Qe),g.pixelStorei(I.UNPACK_SKIP_PIXELS,ui),g.pixelStorei(I.UNPACK_SKIP_ROWS,Ni),g.pixelStorei(I.UNPACK_SKIP_IMAGES,_n),ge===0&&D.generateMipmaps&&I.generateMipmap(ye),g.unbindTexture()},this.initRenderTarget=function(x){z.get(x).__webglFramebuffer===void 0&&G.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?G.setTextureCube(x,0):x.isData3DTexture?G.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?G.setTexture2DArray(x,0):G.setTexture2D(x,0),g.unbindTexture()},this.resetState=function(){Y=0,V=0,K=null,g.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}var pM=Object.defineProperty,Wc=(i,e)=>{for(var t in e)pM(i,t,{get:e[t],enumerable:!0})},Ai={};Wc(Ai,{ACTIONS:()=>ef,ANIMATION_MIN_DURATION:()=>oc,CAPTURE_EVENTS_CLASS:()=>Ur,CTRLZOOM_TIMEOUT:()=>Qu,DBLCLICK_DELAY:()=>Ku,EASINGS:()=>Pa,ICONS:()=>Pi,IDS:()=>Gt,KEY_CODES:()=>Bt,LONGTOUCH_DELAY:()=>ju,MOVE_THRESHOLD:()=>Zu,SPHERE_RADIUS:()=>cn,TWOFINGERSOVERLAY_DELAY:()=>Ju,VIEWER_DATA:()=>Fn});var mM=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="40 40 432 432"><g transform="rotate(0, 256, 256)"><path fill="currentColor" d="M425.23 210.55H227.39a5 5 0 01-3.53-8.53l56.56-56.57a45.5 45.5 0 000-64.28 45.15 45.15 0 00-32.13-13.3 45.15 45.15 0 00-32.14 13.3L41.32 256l174.83 174.83a45.15 45.15 0 0032.14 13.3 45.15 45.15 0 0032.13-13.3 45.5 45.5 0 000-64.28l-56.57-56.57a5 5 0 013.54-8.53h197.84c25.06 0 45.45-20.39 45.45-45.45s-20.4-45.45-45.45-45.45z"/></g><!-- Created by Flatart from the Noun Project --></svg>
`,gM='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="currentColor" transform=" translate(50, 50) rotate(45)"><rect x="-5" y="-65" width="10" height="130"/><rect x="-65" y="-5" width="130" height="10"/></g></svg>',vM=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M83.3 35.6h-17V3H32.2v32.6H16.6l33.6 32.7 33-32.7z"/><path fill="currentColor" d="M83.3 64.2v16.3H16.6V64.2H-.1v32.6H100V64.2H83.3z"/><!--Created by Michael Zenaty from the Noun Project--></svg>
`,_M=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M100 40H87.1V18.8h-21V6H100zM100 93.2H66V80.3h21.1v-21H100zM34 93.2H0v-34h12.9v21.1h21zM12.9 40H0V6h34v12.9H12.8z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,xM=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M66 7h13v21h21v13H66zM66 60.3h34v12.9H79v21H66zM0 60.3h34v34H21V73.1H0zM21 7h13v34H0V28h21z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,yM=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="currentColor" d="M28.3 26.1c-1 2.6-1.9 4.8-2.6 7-2.5 7.4-5 14.7-7.2 22-1.3 4.4.5 7.2 4.3 7.8 1.3.2 2.8.2 4.2-.1 8.2-2 11.9-8.6 15.7-15.2l-2.2 2a18.8 18.8 0 0 1-7.4 5.2 2 2 0 0 1-1.6-.2c-.2-.1 0-1 0-1.4l.8-1.8L41.9 28c.5-1.4.9-3 .7-4.4-.2-2.6-3-4.4-6.3-4.4-8.8.2-15 4.5-19.5 11.8-.2.3-.2.6-.3 1.3 3.7-2.8 6.8-6.1 11.8-6.2z"/><circle fill="currentColor" cx="39.3" cy="9.2" r="8.2"/><!--Created by Arafat Uddin from the Noun Project--></svg>
`,EM=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 80 80"><g fill="currentColor"><circle r="10" cx="20" cy="20"/><circle r="10" cx="50" cy="20"/><circle r="10" cx="80" cy="20"/><circle r="10" cx="20" cy="50"/><circle r="10" cx="50" cy="50"/><circle r="10" cx="80" cy="50"/><circle r="10" cx="20" cy="80"/><circle r="10" cx="50" cy="80"/><circle r="10" cx="80" cy="80"/></g><!-- Created by Richard Kunák from the Noun Project--></svg>
`,MM=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M8.728 4.009H6.744v2.737H4.006V8.73h2.738v2.736h1.984V8.73h2.737V6.746H8.728z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,wM=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M4.006 6.746h7.459V8.73H4.006z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,oc=500,Zu=4,Ku=300,ju=500,Ju=100,Qu=2e3,cn=10,Fn="photoSphereViewer",Ur="psv--capture-event",ef=(i=>(i.ROTATE_UP="ROTATE_UP",i.ROTATE_DOWN="ROTATE_DOWN",i.ROTATE_RIGHT="ROTATE_RIGHT",i.ROTATE_LEFT="ROTATE_LEFT",i.ZOOM_IN="ZOOM_IN",i.ZOOM_OUT="ZOOM_OUT",i))(ef||{}),Gt={MENU:"menu",TWO_FINGERS:"twoFingers",CTRL_ZOOM:"ctrlZoom",ERROR:"error",DESCRIPTION:"description"},Bt={Enter:"Enter",Control:"Control",Escape:"Escape",Space:" ",PageUp:"PageUp",PageDown:"PageDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",ArrowDown:"ArrowDown",Delete:"Delete",Plus:"+",Minus:"-"},Pi={arrow:mM,close:gM,download:vM,fullscreenIn:_M,fullscreenOut:xM,info:yM,menu:EM,zoomIn:MM,zoomOut:wM},Pa={linear:i=>i,inQuad:i=>i*i,outQuad:i=>i*(2-i),inOutQuad:i=>i<.5?2*i*i:-1+(4-2*i)*i,inCubic:i=>i*i*i,outCubic:i=>--i*i*i+1,inOutCubic:i=>i<.5?4*i*i*i:(i-1)*(2*i-2)*(2*i-2)+1,inQuart:i=>i*i*i*i,outQuart:i=>1- --i*i*i*i,inOutQuart:i=>i<.5?8*i*i*i*i:1-8*--i*i*i*i,inQuint:i=>i*i*i*i*i,outQuint:i=>1+--i*i*i*i*i,inOutQuint:i=>i<.5?16*i*i*i*i*i:1+16*--i*i*i*i*i,inSine:i=>1-Math.cos(i*(Math.PI/2)),outSine:i=>Math.sin(i*(Math.PI/2)),inOutSine:i=>.5-.5*Math.cos(Math.PI*i),inExpo:i=>Math.pow(2,10*(i-1)),outExpo:i=>1-Math.pow(2,-10*i),inOutExpo:i=>(i=i*2-1)<0?.5*Math.pow(2,10*i):1-.5*Math.pow(2,-10*i),inCirc:i=>1-Math.sqrt(1-i*i),outCirc:i=>Math.sqrt(1-(i-1)*(i-1)),inOutCirc:i=>(i*=2)<1?.5-.5*Math.sqrt(1-i*i):.5+.5*Math.sqrt(1-(i-=2)*i)},Q={};Wc(Q,{Animation:()=>$a,Dynamic:()=>sr,MultiDynamic:()=>bf,PressHandler:()=>xo,Slider:()=>Af,SliderDirection:()=>Tf,addClasses:()=>Xc,angle:()=>nf,applyEulerInverse:()=>uc,checkClosedShadowDom:()=>Mf,checkStylesheet:()=>Ef,checkVersion:()=>jc,cleanCssPosition:()=>xf,clone:()=>go,createSizedTexture:()=>Sf,createTexture:()=>dc,cssPositionIsOrdered:()=>Kc,dasherize:()=>CM,deepEqual:()=>gf,deepmerge:()=>pf,distance:()=>tf,exitFullscreen:()=>uf,firstNonNull:()=>Bi,getAbortError:()=>cc,getAngle:()=>rf,getClosest:()=>of,getConfigParser:()=>_o,getElement:()=>af,getEventTarget:()=>Ha,getMatchingTarget:()=>lf,getPosition:()=>cf,getShortestArc:()=>sf,getStyleProperty:()=>Wi,getTouchData:()=>lc,getXMPValue:()=>hi,greatArcDistance:()=>bM,hasParent:()=>AM,invertResolvableBoolean:()=>vo,isAbortError:()=>_f,isEmpty:()=>mf,isExtendedPosition:()=>Zc,isFullscreenEnabled:()=>hf,isNil:()=>zt,isPlainObject:()=>qc,keyPressMatch:()=>$c,logWarn:()=>Vt,mergePanoData:()=>wf,parseAngle:()=>Rn,parsePoint:()=>RM,parseSpeed:()=>yf,removeClasses:()=>TM,requestFullscreen:()=>df,resolveBoolean:()=>Yc,speedToDuration:()=>hc,sum:()=>SM,throttle:()=>ff,toggleClass:()=>mo,wrap:()=>lr});function lr(i,e){let t=i%e;return t<0&&(t+=e),t}function SM(i){return i.reduce((e,t)=>e+t,0)}function tf(i,e){return Math.sqrt(Math.pow(i.x-e.x,2)+Math.pow(i.y-e.y,2))}function nf(i,e){return Math.atan2(e.y-i.y,e.x-i.x)}function sf(i,e){return[0,Math.PI*2,-Math.PI*2].reduce((n,s)=>{const r=e-i+s;return Math.abs(r)<Math.abs(n)?r:n},1/0)}function rf(i,e){return Math.acos(Math.cos(i.pitch)*Math.cos(e.pitch)*Math.cos(i.yaw-e.yaw)+Math.sin(i.pitch)*Math.sin(e.pitch))}function bM([i,e],[t,n]){i-t>Math.PI?i-=2*Math.PI:i-t<-Math.PI&&(i+=2*Math.PI);const s=(t-i)*Math.cos((e+n)/2),r=n-e;return Math.sqrt(s*s+r*r)}function af(i){return typeof i=="string"?i.match(/^[a-z]/i)?document.getElementById(i):document.querySelector(i):i}function mo(i,e,t){t===void 0?i.classList.toggle(e):t?i.classList.add(e):t||i.classList.remove(e)}function Xc(i,e){i.classList.add(...e.split(" ").filter(t=>!!t))}function TM(i,e){i.classList.remove(...e.split(" ").filter(t=>!!t))}function AM(i,e){let t=i;do{if(t===e)return!0;t=t.parentElement}while(t);return!1}function of(i,e){if(!i?.matches)return null;let t=i;do{if(t.matches(e))return t;t=t.parentElement}while(t);return null}function Ha(i){return i?.composedPath()[0]||null}function lf(i,e){return i?i.composedPath().find(t=>!(t instanceof HTMLElement)&&!(t instanceof SVGElement)?!1:t.matches(e)):null}function cf(i){let e=0,t=0,n=i;for(;n;)e+=n.offsetLeft-n.scrollLeft+n.clientLeft,t+=n.offsetTop-n.scrollTop+n.clientTop,n=n.offsetParent;return e-=window.scrollX,t-=window.scrollY,{x:e,y:t}}function Wi(i,e){return window.getComputedStyle(i).getPropertyValue(e)}function lc(i){if(i.touches.length<2)return null;const e={x:i.touches[0].clientX,y:i.touches[0].clientY},t={x:i.touches[1].clientX,y:i.touches[1].clientY};return{distance:tf(e,t),angle:nf(e,t),center:{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}}var Ga;function hf(i,e=!1){return e?i===Ga:document.fullscreenElement===i}function df(i,e=!1){e?(Ga=i,i.classList.add("psv-fullscreen-emulation"),document.dispatchEvent(new Event("fullscreenchange"))):i.requestFullscreen()}function uf(i=!1){i?(Ga.classList.remove("psv-fullscreen-emulation"),Ga=null,document.dispatchEvent(new Event("fullscreenchange"))):document.exitFullscreen()}function $c(i,e){let t,n=!1,s=!1,r=!1,a=!1;return e==="+"?t=e:e.split("+").forEach(o=>{switch(o){case"Shift":n=!0;break;case"Ctrl":s=!0;break;case"Alt":r=!0;break;case"Meta":a=!0;break;case"Space":t=" ";break;case"Plus":t="+";break;case"Minus":t="-";break;default:t=o;break}}),n===i.shiftKey&&s===i.ctrlKey&&r===i.altKey&&a===i.metaKey&&t===i.key}function CM(i){return i.replace(/[A-Z](?:(?=[^A-Z])|[A-Z]*(?=[A-Z][^A-Z]|$))/g,(e,t)=>(t>0?"-":"")+e.toLowerCase())}function ff(i,e){let t=!1;return function(...n){t||(t=!0,setTimeout(()=>{i.apply(this,n),t=!1},e))}}function qc(i){if(typeof i!="object"||i===null||Object.prototype.toString.call(i)!=="[object Object]")return!1;if(Object.getPrototypeOf(i)===null)return!0;let e=i;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(i)===e}function pf(i,e){const t=e;return(function n(s,r){return Array.isArray(r)?(!s||!Array.isArray(s)?s=[]:s.length=0,r.forEach((a,o)=>{s[o]=n(null,a)})):typeof r=="object"?((!s||Array.isArray(s))&&(s={}),Object.keys(r).forEach(a=>{a!=="__proto__"&&(typeof r[a]!="object"||!r[a]||!qc(r[a])?s[a]=r[a]:r[a]!==t&&(s[a]?n(s[a],r[a]):s[a]=n(null,r[a])))})):s=r,s})(i,e)}function go(i){return pf(null,i)}function mf(i){return!i||Object.keys(i).length===0&&i.constructor===Object}function zt(i){return i==null}function Bi(...i){for(const e of i)if(!zt(e))return e;return null}function gf(i,e){if(i===e)return!0;if(bd(i)&&bd(e)){if(Object.keys(i).length!==Object.keys(e).length)return!1;for(const t of Object.keys(i))if(!gf(i[t],e[t]))return!1;return!0}else return!1}function bd(i){return typeof i=="object"&&i!==null}var re=class vf extends Error{constructor(e,t){super(t&&t instanceof Error?`${e}: ${t.message}`:e),this.name="PSVError",Error.captureStackTrace?.(this,vf)}};function Yc(i,e){qc(i)?(e(i.initial,!0),i.promise.then(t=>e(t,!1))):e(i,!0)}function vo(i){return{initial:!i.initial,promise:i.promise.then(e=>!e)}}function cc(){const i=new Error("Loading was aborted.");return i.name="AbortError",i}function _f(i){return i?.name==="AbortError"}function Vt(i){console.warn(`PhotoSphereViewer: ${i}`)}function Zc(i){return!i||Array.isArray(i)?!1:[["textureX","textureY"],["yaw","pitch"]].some(([e,t])=>i[e]!==void 0&&i[t]!==void 0)}function hi(i,e,t=!0){let n=i.match("<GPano:"+e+">(.*)</GPano:"+e+">");if(n!==null){const s=t?parseInt(n[1],10):parseFloat(n[1]);return isNaN(s)?null:s}if(n=i.match("GPano:"+e+'="(.*?)"'),n!==null){const s=t?parseInt(n[1],10):parseFloat(n[1]);return isNaN(s)?null:s}return null}var Td={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Wa=["left","center","right"],Xa=["top","center","bottom"],Ad=[...Wa,...Xa],pi="center";function RM(i){if(!i)return{x:.5,y:.5};if(typeof i=="object")return i;let e=i.toLocaleLowerCase().split(" ").slice(0,2);e.length===1&&(Td[e[0]]?e=[e[0],pi]:e=[e[0],e[0]]);const t=e[1]!=="left"&&e[1]!=="right"&&e[0]!=="top"&&e[0]!=="bottom";e=e.map(s=>Td[s]||s),t||e.reverse();const n=e.join(" ").match(/^([0-9.]+)% ([0-9.]+)%$/);return n?{x:parseFloat(n[1])/100,y:parseFloat(n[2])/100}:{x:.5,y:.5}}function xf(i,{allowCenter:e,cssOrder:t}={allowCenter:!0,cssOrder:!0}){return i?(typeof i=="string"&&(i=i.split(" ")),i.length===1&&(i[0]===pi?i=[pi,pi]:Wa.indexOf(i[0])!==-1?i=[pi,i[0]]:Xa.indexOf(i[0])!==-1&&(i=[i[0],pi])),i.length!==2||Ad.indexOf(i[0])===-1||Ad.indexOf(i[1])===-1?(Vt(`Unparsable position ${i}`),null):!e&&i[0]===pi&&i[1]===pi?(Vt("Invalid position center center"),null):(t&&!Kc(i)&&(i=[i[1],i[0]]),i[1]===pi&&Wa.indexOf(i[0])!==-1&&(i=[pi,i[0]]),i[0]===pi&&Xa.indexOf(i[1])!==-1&&(i=[i[1],pi]),i)):null}function Kc(i){return Xa.indexOf(i[0])!==-1&&Wa.indexOf(i[1])!==-1}function yf(i){let e;if(typeof i=="string"){const t=i.toString().trim();let n=parseFloat(t.replace(/^(-?[0-9]+(?:\.[0-9]*)?).*$/,"$1"));const s=t.replace(/^-?[0-9]+(?:\.[0-9]*)?(.*)$/,"$1").trim();switch(s.match(/(pm|per minute)$/)&&(n/=60),s){case"dpm":case"degrees per minute":case"dps":case"degrees per second":e=Be.degToRad(n);break;case"rdpm":case"radians per minute":case"rdps":case"radians per second":e=n;break;case"rpm":case"revolutions per minute":case"rps":case"revolutions per second":e=n*Math.PI*2;break;default:throw new re(`Unknown speed unit "${s}"`)}}else e=i;return e}function hc(i,e){if(typeof i!="number"){const t=yf(i);return e/Math.abs(t)*1e3}else return Math.abs(i)}function Rn(i,e=!1,t=e){let n;if(typeof i=="string"){const s=i.toLowerCase().trim().match(/^(-?[0-9]+(?:\.[0-9]*)?)(.*)$/);if(!s)throw new re(`Unknown angle "${i}"`);const r=parseFloat(s[1]),a=s[2];if(a)switch(a){case"deg":case"degs":n=Be.degToRad(r);break;case"rad":case"rads":n=r;break;default:throw new re(`Unknown angle unit "${a}"`)}else n=r}else if(typeof i=="number"&&!isNaN(i))n=i;else throw new re(`Unknown angle "${i}"`);return n=lr(e?n+Math.PI:n,Math.PI*2),e?Be.clamp(n-Math.PI,-Math.PI/(t?2:1),Math.PI/(t?2:1)):n}function _o(i,e){const t=function(n){const s=go({...i,...n}),r={};for(let[a,o]of Object.entries(s)){if(e&&a in e)o=e[a](o,{rawConfig:s,defValue:i[a]});else if(!(a in i)){Vt(`Unknown option ${a}`);continue}r[a]=o}return r};return t.defaults=i,t.parsers=e||{},t}function Ef(i,e){Wi(i,`--psv-${e}-loaded`)!=="true"&&console.error(`PhotoSphereViewer: stylesheet "@photo-sphere-viewer/${e}/index.css" is not loaded`)}function jc(i,e,t){e&&e!==t&&console.error(`PhotoSphereViewer: @photo-sphere-viewer/${i} is in version ${e} but @photo-sphere-viewer/core is in version ${t}`)}function Mf(i){do{if(i instanceof ShadowRoot&&i.mode==="closed"){console.error("PhotoSphereViewer: closed shadow DOM detected, the viewer might not work as expected");return}i=i.parentNode}while(i)}function wf(i,e,t,n){const s={isEquirectangular:!0,fullWidth:Bi(t?.fullWidth,n?.fullWidth),fullHeight:Bi(t?.fullHeight,n?.fullHeight),croppedWidth:Bi(t?.croppedWidth,n?.croppedWidth,i),croppedHeight:Bi(t?.croppedHeight,n?.croppedHeight,e),croppedX:Bi(t?.croppedX,n?.croppedX),croppedY:Bi(t?.croppedY,n?.croppedY),poseHeading:Bi(t?.poseHeading,n?.poseHeading,0),posePitch:Bi(t?.posePitch,n?.posePitch,0),poseRoll:Bi(t?.poseRoll,n?.poseRoll,0),initialHeading:n?.initialHeading,initialPitch:n?.initialPitch,initialFov:n?.initialFov};if(s.croppedWidth!==i){const r=i/s.croppedWidth;["fullWidth","fullHeight","croppedWidth","croppedHeight","croppedX","croppedY"].forEach(a=>{s[a]&&(s[a]=Math.round(s[a]*r))})}return!s.fullWidth&&!s.fullHeight&&(s.fullWidth=Math.max(s.croppedWidth,s.croppedHeight*2),s.fullHeight=Math.round(s.fullWidth/2)),s.fullWidth||(s.fullWidth=s.fullHeight*2),s.fullHeight||(s.fullHeight=Math.round(s.fullWidth/2)),s.croppedX===null&&(s.croppedX=Math.round((s.fullWidth-i)/2)),s.croppedY===null&&(s.croppedY=Math.round((s.fullHeight-e)/2)),Math.abs(s.fullWidth-s.fullHeight*2)>1&&(Vt("Invalid panoData, fullWidth should be twice fullHeight"),s.fullHeight=Math.round(s.fullWidth/2)),s.croppedX+s.croppedWidth>s.fullWidth&&(Vt("Invalid panoData, croppedX + croppedWidth > fullWidth"),s.croppedX=s.fullWidth-s.croppedWidth),s.croppedY+s.croppedHeight>s.fullHeight&&(Vt("Invalid panoData, croppedY + croppedHeight > fullHeight"),s.croppedY=s.fullHeight-s.croppedHeight),s.croppedX<0&&(Vt("Invalid panoData, croppedX < 0"),s.croppedX=0),s.croppedY<0&&(Vt("Invalid panoData, croppedY < 0"),s.croppedY=0),s}var Js=`${Fn}_touchSupport`,ei={loaded:!1,pixelRatio:1,isWebGLSupported:!1,maxTextureWidth:0,isTouchEnabled:null,__maxCanvasWidth:null,isIphone:!1,get maxCanvasWidth(){return this.__maxCanvasWidth===null&&(this.__maxCanvasWidth=IM(this.maxTextureWidth)),this.__maxCanvasWidth},load(){if(!this.loaded){const i=PM();this.pixelRatio=window.devicePixelRatio||1,this.isWebGLSupported=!!i,this.maxTextureWidth=i?i.getParameter(i.MAX_TEXTURE_SIZE):0,this.isTouchEnabled=LM(),this.isIphone=/iPhone/i.test(navigator.userAgent),this.loaded=!0}if(!ei.isWebGLSupported)throw new re("WebGL 2 is not supported.");if(ei.maxTextureWidth===0)throw new re("Unable to detect system capabilities")}};function PM(){try{return document.createElement("canvas").getContext("webgl2")}catch{return null}}function LM(){let i="ontouchstart"in window||navigator.maxTouchPoints>0;Js in localStorage&&(i=localStorage[Js]==="true");const e=new Promise(t=>{const n=()=>{window.removeEventListener("mousedown",s),window.removeEventListener("touchstart",r),clearTimeout(o)},s=()=>{n(),localStorage[Js]=!1,t(!1)},r=()=>{n(),localStorage[Js]=!0,t(!0)},a=()=>{n(),localStorage[Js]=i,t(i)};window.addEventListener("mousedown",s,!1),window.addEventListener("touchstart",r,!1);const o=setTimeout(a,1e4)});return{initial:i,promise:e}}function IM(i){let e=i,t=!1;const n=document.createElement("canvas"),s=n.getContext("2d");for(n.width=1,n.height=1;e>1024&&!t;){const r=document.createElement("canvas"),a=r.getContext("2d");r.width=e,r.height=e/2;try{a.fillStyle="white",a.fillRect(e-1,e/2-1,1,1),s.drawImage(r,e-1,e/2-1,1,1,0,0,1,1),s.getImageData(0,0,1,1).data[0]>0&&(t=!0)}catch{}r.width=0,r.height=0,t||(e/=2)}if(t)return e;throw new re("Unable to detect system capabilities")}function dc(i,e=!1){const t=new Nt(i);return t.needsUpdate=!0,t.minFilter=e?Pn:Dt,t.generateMipmaps=e,t.anisotropy=e?2:1,t}function Sf(i,e){if(e||i.width>ei.maxTextureWidth){const t=Math.min(1,ei.maxCanvasWidth/i.width),n=new OffscreenCanvas(Math.floor(i.width*t),Math.floor(i.height*t)),s=n.getContext("2d");return e&&(s.filter=`blur(${n.width/e.factor}px)`),s.drawImage(i,0,0,n.width,n.height),dc(n)}return dc(i)}var Cd=new gn;function uc(i,e){Cd.setFromEuler(e).invert(),i.applyQuaternion(Cd)}var $a=class{constructor(i){this.easing=Pa.linear,this.callbacks=[],this.resolved=!1,this.cancelled=!1,this.options=i,i?(i.easing&&(this.easing=typeof i.easing=="function"?i.easing:Pa[i.easing]||Pa.linear),this.delayTimeout=setTimeout(()=>{this.delayTimeout=void 0,this.animationFrame=window.requestAnimationFrame(e=>this.__run(e))},i.delay||0)):this.resolved=!0}__run(i){if(this.cancelled)return;this.start||(this.start=i);const e=(i-this.start)/this.options.duration,t={};if(e<1){for(const[n,s]of Object.entries(this.options.properties))if(s){const r=s.start+(s.end-s.start)*this.easing(e);t[n]=r}this.options.onTick(t,e),this.animationFrame=window.requestAnimationFrame(n=>this.__run(n))}else{for(const[n,s]of Object.entries(this.options.properties))s&&(t[n]=s.end);this.options.onTick(t,1),this.__resolve(!0),this.animationFrame=void 0}}__resolve(i){i?this.resolved=!0:this.cancelled=!0,this.callbacks.forEach(e=>e(i)),this.callbacks.length=0}then(i){return this.resolved||this.cancelled?Promise.resolve(this.resolved).then(i):new Promise(e=>{this.callbacks.push(e)}).then(i)}cancel(){!this.cancelled&&!this.resolved&&(this.__resolve(!1),this.delayTimeout&&(window.clearTimeout(this.delayTimeout),this.delayTimeout=void 0),this.animationFrame&&(window.cancelAnimationFrame(this.animationFrame),this.animationFrame=void 0))}},sr=class{constructor(i,e){if(this.fn=i,this.mode=0,this.speed=0,this.speedMult=0,this.currentSpeed=0,this.target=0,this.__current=0,this.min=e.min,this.max=e.max,this.wrap=e.wrap,this.current=e.defaultValue,this.wrap&&this.min!==0)throw new re("invalid config");this.fn&&this.fn(this.current)}get current(){return this.__current}set current(i){this.__current=i}setSpeed(i){this.speed=i}goto(i,e=1){this.mode=2,this.target=this.wrap?lr(i,this.max):Be.clamp(i,this.min,this.max),this.speedMult=e}step(i,e=1){e===0?this.setValue(this.current+i):(this.mode!==2&&(this.target=this.current),this.goto(this.target+i,e))}roll(i=!1,e=1){this.mode=1,this.target=i?-1/0:1/0,this.speedMult=e}stop(){this.mode=0}setValue(i){return this.target=this.wrap?lr(i,this.max):Be.clamp(i,this.min,this.max),this.mode=0,this.currentSpeed=0,this.target!==this.current?(this.current=this.target,this.fn&&this.fn(this.current),!0):!1}update(i){if(this.mode===2){this.wrap&&Math.abs(this.target-this.current)>this.max/2&&(this.current=this.current<this.target?this.current+this.max:this.current-this.max);const n=this.currentSpeed*this.currentSpeed/(this.speed*this.speedMult*4);Math.abs(this.target-this.current)<=n&&(this.mode=0)}let e=this.mode===0?0:this.speed*this.speedMult;this.target<this.current&&(e=-e),this.currentSpeed<e?this.currentSpeed=Math.min(e,this.currentSpeed+i/1e3*this.speed*this.speedMult*2):this.currentSpeed>e&&(this.currentSpeed=Math.max(e,this.currentSpeed-i/1e3*this.speed*this.speedMult*2));let t=null;return this.current>this.target&&this.currentSpeed?t=Math.max(this.target,this.current+this.currentSpeed*i/1e3):this.current<this.target&&this.currentSpeed&&(t=Math.min(this.target,this.current+this.currentSpeed*i/1e3)),t!==null&&(t=this.wrap?lr(t,this.max):Be.clamp(t,this.min,this.max),t!==this.current)?(this.current=t,this.fn&&this.fn(this.current),!0):!1}},bf=class{constructor(i,e){this.fn=i,this.dynamics=e,this.fn&&this.fn(this.current)}get current(){return Object.entries(this.dynamics).reduce((i,[e,t])=>(i[e]=t.current,i),{})}setSpeed(i){for(const e of Object.values(this.dynamics))e.setSpeed(i)}goto(i,e=1){for(const[t,n]of Object.entries(i))this.dynamics[t].goto(n,e)}step(i,e=1){if(e===0)this.setValue(Object.keys(i).reduce((t,n)=>(t[n]=i[n]+this.dynamics[n].current,t),{}));else for(const[t,n]of Object.entries(i))this.dynamics[t].step(n,e)}roll(i,e=1){for(const[t,n]of Object.entries(i))this.dynamics[t].roll(n,e)}stop(){for(const i of Object.values(this.dynamics))i.stop()}setValue(i){let e=!1;for(const[t,n]of Object.entries(i))e=this.dynamics[t].setValue(n)||e;return e&&this.fn&&this.fn(this.current),e}update(i){let e=!1;for(const t of Object.values(this.dynamics))e=t.update(i)||e;return e&&this.fn&&this.fn(this.current),e}},xo=class{constructor(i=200){this.delay=i,this.time=0,this.delay=i}get pending(){return this.time!==0}down(i){this.timeout&&(clearTimeout(this.timeout),this.timeout=void 0),this.time=new Date().getTime(),this.data=i}up(i){if(!this.time)return;Date.now()-this.time<this.delay?this.timeout=setTimeout(()=>{i(this.data),this.timeout=void 0,this.time=0,this.data=void 0},this.delay):(i(this.data),this.time=0,this.data=void 0)}},Tf=(i=>(i.VERTICAL="VERTICAL",i.HORIZONTAL="HORIZONTAL",i))(Tf||{}),Af=class{constructor(i,e,t){this.container=i,this.direction=e,this.listener=t,this.mousedown=!1,this.mouseover=!1,this.container.addEventListener("click",this),this.container.addEventListener("mousedown",this),this.container.addEventListener("mouseenter",this),this.container.addEventListener("mouseleave",this),this.container.addEventListener("touchstart",this),this.container.addEventListener("mousemove",this,!0),this.container.addEventListener("touchmove",this,!0),window.addEventListener("mouseup",this),window.addEventListener("touchend",this)}get isVertical(){return this.direction==="VERTICAL"}get isHorizontal(){return this.direction==="HORIZONTAL"}destroy(){window.removeEventListener("mouseup",this),window.removeEventListener("touchend",this)}handleEvent(i){switch(i.type){case"click":i.stopPropagation();break;case"mousedown":this.__onMouseDown(i);break;case"mouseenter":this.__onMouseEnter(i);break;case"mouseleave":this.__onMouseLeave(i);break;case"touchstart":this.__onTouchStart(i);break;case"mousemove":this.__onMouseMove(i);break;case"touchmove":this.__onTouchMove(i);break;case"mouseup":this.__onMouseUp(i);break;case"touchend":this.__onTouchEnd(i);break}}__onMouseDown(i){this.mousedown=!0,this.__update(i.clientX,i.clientY,!0)}__onMouseEnter(i){this.mouseover=!0,this.__update(i.clientX,i.clientY,!0)}__onTouchStart(i){this.mouseover=!0,this.mousedown=!0;const e=i.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}__onMouseMove(i){(this.mousedown||this.mouseover)&&(i.stopPropagation(),this.__update(i.clientX,i.clientY,!0))}__onTouchMove(i){if(this.mousedown||this.mouseover){i.stopPropagation();const e=i.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}}__onMouseUp(i){this.mousedown&&(this.mousedown=!1,this.__update(i.clientX,i.clientY,!1))}__onMouseLeave(i){this.mouseover&&(this.mouseover=!1,this.__update(i.clientX,i.clientY,!0))}__onTouchEnd(i){if(this.mousedown){this.mouseover=!1,this.mousedown=!1;const e=i.changedTouches[0];this.__update(e.clientX,e.clientY,!1)}}__update(i,e,t){const n=this.container.getBoundingClientRect();let s;this.isVertical?s=Be.clamp((n.bottom-e)/n.height,0,1):s=Be.clamp((i-n.left)/n.width,0,1),this.listener({value:s,click:!t,mousedown:this.mousedown,mouseover:this.mouseover,cursor:{clientX:i,clientY:e}})}},se={};Wc(se,{BeforeAnimateEvent:()=>Jc,BeforeRenderEvent:()=>cr,BeforeRotateEvent:()=>Uf,ClickEvent:()=>Ff,ConfigChangedEvent:()=>ai,DoubleClickEvent:()=>Gf,FullscreenEvent:()=>hr,HideNotificationEvent:()=>dr,HideOverlayEvent:()=>Kf,HidePanelEvent:()=>Dn,HideTooltipEvent:()=>tp,KeypressEvent:()=>Nn,LoadProgressEvent:()=>ap,ObjectEnterEvent:()=>Xp,ObjectEvent:()=>yo,ObjectHoverEvent:()=>Kp,ObjectLeaveEvent:()=>fc,PanoramaErrorEvent:()=>pp,PanoramaLoadEvent:()=>cp,PanoramaLoadedEvent:()=>Is,PositionUpdatedEvent:()=>ur,ReadyEvent:()=>pr,RenderEvent:()=>Tp,RollUpdatedEvent:()=>fr,ShowNotificationEvent:()=>mr,ShowOverlayEvent:()=>Lp,ShowPanelEvent:()=>Un,ShowTooltipEvent:()=>Op,SizeUpdatedEvent:()=>gr,StopAllEvent:()=>vr,TransitionDoneEvent:()=>vp,ViewerEvent:()=>at,ZoomUpdatedEvent:()=>hn});var zn=class extends Event{constructor(i,e=!1){super(i,{cancelable:e})}},Cf=class extends EventTarget{dispatchEvent(i){return super.dispatchEvent(i)}addEventListener(i,e,t){super.addEventListener(i,e,t)}removeEventListener(i,e,t){super.removeEventListener(i,e,t)}},at=class extends zn{},Rf=class Pf extends at{constructor(e,t){super(Pf.type,!0),this.position=e,this.zoomLevel=t}};Rf.type="before-animate";var Jc=Rf,Lf=class If extends at{constructor(e,t){super(If.type),this.timestamp=e,this.elapsed=t}};Lf.type="before-render";var cr=Lf,Df=class Nf extends at{constructor(e){super(Nf.type,!0),this.position=e}};Df.type="before-rotate";var Uf=Df,Of=class kf extends at{constructor(e){super(kf.type),this.data=e}};Of.type="click";var Ff=Of,Bf=class zf extends at{constructor(e){super(zf.type),this.options=e}containsOptions(...e){return e.some(t=>this.options.includes(t))}};Bf.type="config-changed";var ai=Bf,Vf=class Hf extends at{constructor(e){super(Hf.type),this.data=e}};Vf.type="dblclick";var Gf=Vf,Wf=class Xf extends at{constructor(e){super(Xf.type),this.fullscreenEnabled=e}};Wf.type="fullscreen";var hr=Wf,$f=class qf extends at{constructor(e){super(qf.type),this.notificationId=e}};$f.type="hide-notification";var dr=$f,Yf=class Zf extends at{constructor(e){super(Zf.type),this.overlayId=e}};Yf.type="hide-overlay";var Kf=Yf,jf=class Jf extends at{constructor(e){super(Jf.type),this.panelId=e}};jf.type="hide-panel";var Dn=jf,Qf=class ep extends at{constructor(e){super(ep.type),this.tooltipData=e}};Qf.type="hide-tooltip";var tp=Qf,ip=class np extends at{constructor(e,t){super(np.type,!0),this.key=e,this.originalEvent=t}matches(e){return $c(this.originalEvent,e)}};ip.type="key-press";var Nn=ip,sp=class rp extends at{constructor(e){super(rp.type),this.progress=e}};sp.type="load-progress";var ap=sp,op=class lp extends at{constructor(e){super(lp.type),this.panorama=e}};op.type="panorama-load";var cp=op,hp=class dp extends at{constructor(e){super(dp.type),this.data=e}};hp.type="panorama-loaded";var Is=hp,up=class fp extends at{constructor(e,t){super(fp.type),this.panorama=e,this.error=t}};up.type="panorama-error";var pp=up,mp=class gp extends at{constructor(e){super(gp.type),this.completed=e}};mp.type="transition-done";var vp=mp,_p=class xp extends at{constructor(e){super(xp.type),this.position=e}};_p.type="position-updated";var ur=_p,yp=class Ep extends at{constructor(e){super(Ep.type),this.roll=e}};yp.type="roll-updated";var fr=yp,Mp=class wp extends at{constructor(){super(wp.type)}};Mp.type="ready";var pr=Mp,Sp=class bp extends at{constructor(){super(bp.type)}};Sp.type="render";var Tp=Sp,Ap=class Cp extends at{constructor(e){super(Cp.type),this.notificationId=e}};Ap.type="show-notification";var mr=Ap,Rp=class Pp extends at{constructor(e){super(Pp.type),this.overlayId=e}};Rp.type="show-overlay";var Lp=Rp,Ip=class Dp extends at{constructor(e){super(Dp.type),this.panelId=e}};Ip.type="show-panel";var Un=Ip,Np=class Up extends at{constructor(e,t){super(Up.type),this.tooltip=e,this.tooltipData=t}};Np.type="show-tooltip";var Op=Np,kp=class Fp extends at{constructor(e){super(Fp.type),this.size=e}};kp.type="size-updated";var gr=kp,Bp=class zp extends at{constructor(){super(zp.type)}};Bp.type="stop-all";var vr=Bp,Vp=class Hp extends at{constructor(e){super(Hp.type),this.zoomLevel=e}};Vp.type="zoom-updated";var hn=Vp,yo=class extends at{constructor(i,e,t,n,s){super(i),this.originalEvent=e,this.object=t,this.viewerPoint=n,this.userDataKey=s}},Gp=class Wp extends yo{constructor(e,t,n,s){super(Wp.type,e,t,n,s)}};Gp.type="enter-object";var Xp=Gp,$p=class qp extends yo{constructor(e,t,n,s){super(qp.type,e,t,n,s)}};$p.type="leave-object";var fc=$p,Yp=class Zp extends yo{constructor(e,t,n,s){super(Zp.type,e,t,n,s)}};Yp.type="hover-object";var Kp=Yp,Eo=class{constructor(i){this.viewer=i}init(){}destroy(){}supportsTransition(i){return!1}supportsPreload(i){return!1}textureCoordsToSphericalCoords(i,e){throw new re("Current adapter does not support texture coordinates.")}sphericalCoordsToTextureCoords(i,e){throw new re("Current adapter does not support texture coordinates.")}};Eo.supportsDownload=!1;function Rd(i){if(i){for(const[,e]of[["_",i],...Object.entries(i)])if(e.prototype instanceof Eo)return jc(e.id,e.VERSION,"5.15.1"),e}return null}var DM=`varying vec3 vLocalPos;
varying vec3 vLocalCam;
uniform sampler2D map;
uniform float opacity;
uniform vec2 uvOffset;
uniform vec2 uvScale;
uniform float radius;

const float PI = 3.1415926535897932384626433832795;

// Analytic edge antialiasing across one screen-space pixel at the
// cropped-region boundary on a single axis (replaces the MSAA the standard
// adapter gets by rendering triangles).
float edgeAlpha(float coord, float width) {
    float dist = min(coord, 1.0 - coord);
    return clamp(dist / width + 0.5, 0.0, 1.0);
}

// Screen-space derivative (fwidth) of a coordinate that wraps in [0, 1], such
// as longitude at the antimeridian. A naive fwidth() spikes to ~1.0 across the
// seam. Removing the integer jump keeps the result sub-pixel. Assumes the
// per-pixel change stays well under 0.5, so only the wrap rounds to a non-zero
// integer (safe unless a pixel spans ~180deg of longitude).
float fwidthWrapped(float coord) {
    float dx = dFdx(coord); dx -= floor(dx + 0.5);
    float dy = dFdy(coord); dy -= floor(dy + 0.5);
    return abs(dx) + abs(dy);
}

void main() {
    // Ray-cast the true sphere from the camera through the (interpolated, on
    // the polygon chord) position, and use the exit-point direction for
    // sampling. This makes the result independent of mesh tessellation even
    // when the camera is offset from the sphere center (e.g. fisheye config).
    // Inputs are already in the panorama's local frame (see vertex shader), so
    // the exit direction is too and needs no further rotation.
    vec3 rayDir = vLocalPos - vLocalCam;
    float a = dot(rayDir, rayDir);
    float b = dot(vLocalCam, rayDir);
    float c = dot(vLocalCam, vLocalCam) - radius * radius;
    float t = (-b + sqrt(max(b * b - a * c, 0.0))) / a;
    vec3 dir = (vLocalCam + t * rayDir) / radius;

    float u = atan(-dir.x, dir.z) / (2.0 * PI) + 0.5;
    float v = asin(clamp(dir.y, -1.0, 1.0)) / PI + 0.5;
    vec2 uv = (vec2(u, v) - uvOffset) / uvScale;

    float alpha = 1.0;
    // \`u\` wraps at the antimeridian, so derive its width safely.
    if (uvScale.x < 1.0) alpha = min(alpha, edgeAlpha(uv.x, fwidthWrapped(u) / uvScale.x));
    if (uvScale.y < 1.0) alpha = min(alpha, edgeAlpha(uv.y, fwidth(uv.y)));
    if (alpha <= 0.0) discard;

    gl_FragColor = texture2D(map, uv);
    gl_FragColor.a *= opacity * alpha;
}
`,NM=`// Ray-cast inputs in the panorama's local frame, so sphereCorrection and pose
// (both folded into modelMatrix) apply to the sampled direction without
// per-fragment work.
varying vec3 vLocalPos;
varying vec3 vLocalCam;

void main() {
    vLocalPos = position;

    // mat3(modelMatrix) is a pure rotation, so its inverse is its transpose:
    // \`cameraPosition * M == transpose(M) * cameraPosition\`.
    vLocalCam = cameraPosition * mat3(modelMatrix);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,UM=_o({shader:!1,resolution:64,useXmpData:!0},{resolution:i=>{if(!i||!Be.isPowerOfTwo(i))throw new re("EquirectangularAdapter resolution must be power of two.");return i}}),Mo=class jp extends Eo{static withConfig(e){return[jp,e]}constructor(e,t){super(e),this.config=UM(t),this.SPHERE_SEGMENTS=this.config.resolution,this.SPHERE_HORIZONTAL_SEGMENTS=this.SPHERE_SEGMENTS/2}supportsTransition(){return!0}supportsPreload(){return!0}textureCoordsToSphericalCoords(e,t){if(zt(e.textureX)||zt(e.textureY))throw new re("Texture position is missing 'textureX' or 'textureY'");const n=(e.textureX+t.croppedX)/t.fullWidth*Math.PI*2,s=(e.textureY+t.croppedY)/t.fullHeight*Math.PI;return{yaw:n>=Math.PI?n-Math.PI:n+Math.PI,pitch:Math.PI/2-s}}sphericalCoordsToTextureCoords(e,t){const n=e.yaw/Math.PI/2*t.fullWidth,s=e.pitch/Math.PI*t.fullHeight;let r=Math.round(e.yaw<Math.PI?n+t.fullWidth/2:n-t.fullWidth/2)-t.croppedX,a=Math.round(t.fullHeight/2-s)-t.croppedY;return(r<0||r>t.croppedWidth||a<0||a>t.croppedHeight)&&(r=a=void 0),{textureX:r,textureY:a}}async loadTexture(e,t=!0,n,s=this.config.useXmpData){if(typeof e!="string"&&(typeof e!="object"||!e.path))return Promise.reject(new re("Invalid panorama url, are you using the right adapter?"));let r;typeof e=="string"?r={path:e,data:n}:r={data:n,...e};const a=await this.viewer.textureLoader.loadFile(r.path,t?f=>this.viewer.textureLoader.dispatchProgress(f):null,r.path),o=s?await this.loadXMP(a):null,c=await this.viewer.textureLoader.blobToImage(a);typeof r.data=="function"&&(r.data=r.data(c,o));const l=wf(c.width,c.height,r.data,o),h=Sf(c,r.blur?{factor:2048}:null);return{panorama:e,texture:h,panoData:l,cacheKey:r.path}}async loadXMP(e){const t=await this.loadBlobAsString(e),n=t.indexOf("<x:xmpmeta");if(n===-1)return null;const s=t.indexOf("</x:xmpmeta>",n);if(s===-1)return null;const r=t.substring(n,s);return r.includes("GPano:")?{fullWidth:hi(r,"FullPanoWidthPixels"),fullHeight:hi(r,"FullPanoHeightPixels"),croppedWidth:hi(r,"CroppedAreaImageWidthPixels"),croppedHeight:hi(r,"CroppedAreaImageHeightPixels"),croppedX:hi(r,"CroppedAreaLeftPixels"),croppedY:hi(r,"CroppedAreaTopPixels"),poseHeading:hi(r,"PoseHeadingDegrees",!1),posePitch:hi(r,"PosePitchDegrees",!1),poseRoll:hi(r,"PoseRollDegrees",!1),initialHeading:hi(r,"InitialViewHeadingDegrees",!1),initialPitch:hi(r,"InitialViewPitchDegrees",!1),initialFov:hi(r,"InitialHorizontalFOVDegrees",!1)}:null}loadBlobAsString(e){return new Promise((t,n)=>{const s=new FileReader;s.onload=()=>t(s.result),s.onerror=n,s.readAsText(e)})}createMesh(e){if(this.config.shader){const t=new Jn(cn,32,16).scale(-1,1,1),n={map:{value:null},opacity:{value:1},radius:{value:cn},uvOffset:{value:new Ge(e.croppedX/e.fullWidth,(e.fullHeight-e.croppedY-e.croppedHeight)/e.fullHeight)},uvScale:{value:new Ge(e.croppedWidth/e.fullWidth,e.croppedHeight/e.fullHeight)}},s=new vi({uniforms:n,vertexShader:NM,fragmentShader:DM,depthTest:!1,depthWrite:!1,transparent:!0});return new Yt(t,s)}else{const t=e.croppedX/e.fullWidth*2*Math.PI,n=e.croppedWidth/e.fullWidth*2*Math.PI,s=e.croppedY/e.fullHeight*Math.PI,r=e.croppedHeight/e.fullHeight*Math.PI,a=new Jn(cn,Math.round(this.SPHERE_SEGMENTS/(2*Math.PI)*n),Math.round(this.SPHERE_HORIZONTAL_SEGMENTS/Math.PI*r),-Math.PI/2+t,n,s,r).scale(-1,1,1),o=new pn({depthTest:!1,depthWrite:!1});return new Yt(a,o)}}setTexture(e,t){this.config.shader?e.material.uniforms.map.value=t.texture:e.material.map=t.texture}setTextureOpacity(e,t){this.config.shader?e.material.uniforms.opacity.value=t:(e.material.opacity=t,e.material.transparent=t<1)}disposeTexture({texture:e}){e.dispose()}disposeMesh(e){e.geometry.dispose(),e.material.dispose()}};Mo.id="equirectangular";Mo.VERSION="5.15.1";Mo.supportsDownload=!0;var Qc=Mo,Jp=class Qp extends Qc{static withConfig(e){return[Qp,e]}constructor(e,t){super(e,{resolution:t?.resolution??64,useXmpData:!1}),Vt('"DualFisheyeAdapter" must be imported from "@photo-sphere-viewer/dual-fisheye-adapter" package')}async loadTexture(e,t){const n=await super.loadTexture(e,t,null,!1);return n.panoData=null,n}createMesh(){const e=new Jn(cn,this.SPHERE_SEGMENTS,this.SPHERE_HORIZONTAL_SEGMENTS).scale(-1,1,1).toNonIndexed(),t=e.getAttribute("uv"),n=e.getAttribute("normal");for(let r=0;r<t.count;r++)for(let a=0;a<3;a++){const o=r*3+a,c=n.getX(o),l=n.getY(o),h=n.getZ(o),f=.947;if(r<t.count/6){const p=c===0&&h===0?1:Math.acos(l)/Math.sqrt(c*c+h*h)*(2/Math.PI);t.setXY(o,c*(f/4)*p+1/4,h*(f/2)*p+1/2)}else{const p=c===0&&h===0?1:Math.acos(-l)/Math.sqrt(c*c+h*h)*(2/Math.PI);t.setXY(o,-c*(f/4)*p+3/4,h*(f/2)*p+1/2)}}e.rotateX(-Math.PI/2),e.rotateY(Math.PI);const s=new pn({depthTest:!1,depthWrite:!1});return new Yt(e,s)}};Jp.id="dual-fisheye";Jp.VERSION="5.15.1";var vn=class em{constructor(e,t){this.parent=e,this.children=[],this.state={visible:!0},this.viewer=e instanceof em?e.viewer:e,this.container=document.createElement(t.tagName??"div"),this.container.className=t.className||"",this.parent.children.push(this),this.parent.container.appendChild(this.container)}destroy(){this.parent.container.removeChild(this.container);const e=this.parent.children.indexOf(this);e!==-1&&this.parent.children.splice(e,1),this.children.slice().forEach(t=>t.destroy()),this.children.length=0}toggle(e=!this.isVisible()){e?this.show():this.hide()}hide(e){this.container.style.display="none",this.state.visible=!1}show(e){this.container.style.display="",this.state.visible=!0}isVisible(){return this.state.visible}},OM=_o({id:null,tagName:null,className:null,title:null,hoverScale:!1,collapsable:!1,tabbable:!0,icon:null,iconActive:null}),Xt=class extends vn{constructor(i,e){super(i,{tagName:e.tagName,className:`psv-button ${e.hoverScale?"psv-button--hover-scale":""} ${e.className||""}`}),this.state={visible:!0,enabled:!0,supported:!0,collapsed:!1,active:!1,width:0},this.config=OM(e),e.id||(this.config.id=this.constructor.id),e.icon&&this.__setIcon(e.icon),this.state.width=this.container.offsetWidth,this.config.title?this.container.title=this.viewer.config.lang[this.config.title]??this.config.title:this.id&&this.id in this.viewer.config.lang&&(this.container.title=this.viewer.config.lang[this.id]),e.tabbable&&(this.container.tabIndex=0),this.container.addEventListener("click",t=>{this.state.enabled&&this.onClick(),t.stopPropagation()}),this.container.addEventListener("keydown",t=>{t.key===Bt.Enter&&this.state.enabled&&(this.onClick(),t.stopPropagation())})}get id(){return this.config.id}get title(){return this.container.title}get content(){return this.container.innerHTML}get width(){return this.state.width}get collapsable(){return this.config.collapsable}show(i=!0){this.isVisible()||(this.state.visible=!0,this.state.collapsed||(this.container.style.display=""),i&&this.viewer.navbar.autoSize())}hide(i=!0){this.isVisible()&&(this.state.visible=!1,this.container.style.display="none",i&&this.viewer.navbar.autoSize())}checkSupported(){Yc(this.isSupported(),(i,e)=>{this.state&&(this.state.supported=i,e?i||this.hide():this.toggle(i))})}autoSize(){}isSupported(){return!0}toggleActive(i=!this.state.active){i!==this.state.active&&(this.state.active=i,mo(this.container,"psv-button--active",this.state.active),this.config.iconActive&&this.__setIcon(this.state.active?this.config.iconActive:this.config.icon))}disable(){this.container.classList.add("psv-button--disabled"),this.state.enabled=!1}enable(){this.container.classList.remove("psv-button--disabled"),this.state.enabled=!0}collapse(){this.state.collapsed=!0,this.container.style.display="none"}uncollapse(){this.state.collapsed=!1,this.state.visible&&(this.container.style.display="")}__setIcon(i){this.container.innerHTML=i,Xc(this.container.querySelector("svg"),"psv-button-svg")}},kM=class extends Xt{constructor(i,e){super(i,{id:e.id??`psvButton-${Math.random().toString(36).substring(2)}`,className:`psv-custom-button ${e.className||""}`,hoverScale:!1,collapsable:e.collapsable!==!1,tabbable:e.tabbable!==!1,title:e.title}),this.customOnClick=e.onClick,e.content&&(typeof e.content=="string"?this.container.innerHTML=e.content:(this.container.classList.add("psv-custom-button--no-padding"),e.content.style.height="100%",e.content.attachViewer?.(this.viewer),this.container.appendChild(e.content))),this.state.width=this.container.offsetWidth,e.disabled&&this.disable(),e.visible===!1&&this.hide()}onClick(){this.customOnClick?.(this.viewer)}},Cr=class extends Xt{constructor(i){super(i,{className:"psv-description-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:Pi.info}),this.mode=0,this.viewer.addEventListener(dr.type,this),this.viewer.addEventListener(mr.type,this),this.viewer.addEventListener(Dn.type,this),this.viewer.addEventListener(Un.type,this),this.viewer.addEventListener(ai.type,this)}destroy(){this.viewer.removeEventListener(dr.type,this),this.viewer.removeEventListener(mr.type,this),this.viewer.removeEventListener(Dn.type,this),this.viewer.removeEventListener(Un.type,this),this.viewer.removeEventListener(ai.type,this),super.destroy()}handleEvent(i){if(i instanceof ai){i.containsOptions("description")&&this.autoSize(!0);return}if(!this.mode)return;let e=!1;i instanceof dr?e=this.mode===1:i instanceof mr?e=this.mode===1&&i.notificationId!==Gt.DESCRIPTION:i instanceof Dn?e=this.mode===2:i instanceof Un&&(e=this.mode===2&&i.panelId!==Gt.DESCRIPTION),e&&(this.toggleActive(!1),this.mode=0)}onClick(){this.mode?this.__close():this.__open()}hide(i){super.hide(i),this.mode&&this.__close()}autoSize(i=!1){if(i){const e=this.viewer.navbar.getButton("caption",!1),t=e&&!e.isVisible(),n=!!this.viewer.config.description;t||n?this.show(!1):this.hide(!1)}}__close(){switch(this.mode){case 1:this.viewer.notification.hide(Gt.DESCRIPTION);break;case 2:this.viewer.panel.hide(Gt.DESCRIPTION);break}}__open(){this.toggleActive(!0),this.viewer.config.description?(this.mode=2,this.viewer.panel.show({id:Gt.DESCRIPTION,content:`${this.viewer.config.caption?`<p>${this.viewer.config.caption}</p>`:""}${this.viewer.config.description}`})):(this.mode=1,this.viewer.notification.show({id:Gt.DESCRIPTION,content:this.viewer.config.caption}))}};Cr.id="description";var tm=class extends Xt{constructor(i){super(i,{tagName:"a",className:"psv-download-button",hoverScale:!0,collapsable:!0,tabbable:!0,icon:Pi.download}),this.viewer.addEventListener(ai.type,this),this.viewer.addEventListener(Is.type,this)}destroy(){this.viewer.removeEventListener(ai.type,this),this.viewer.removeEventListener(Is.type,this),super.destroy()}handleEvent(i){i instanceof ai?(i.containsOptions("downloadUrl")&&this.checkSupported(),i.containsOptions("downloadUrl","downloadName")&&this.__update()):i instanceof Is&&this.__update()}onClick(){}checkSupported(){this.viewer.adapter.constructor.supportsDownload||this.viewer.config.downloadUrl?this.show():this.hide()}__update(){const i=this.container;i.href=this.viewer.config.downloadUrl||this.viewer.config.panorama,i.target="_blank",i.href.startsWith("data:")&&!this.viewer.config.downloadName?i.download="panorama."+i.href.substring(0,i.href.indexOf(";")).split("/").pop():i.download=this.viewer.config.downloadName||i.href.split("/").pop()}};tm.id="download";var im=class extends Xt{constructor(i){super(i,{className:"psv-fullscreen-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:Pi.fullscreenIn,iconActive:Pi.fullscreenOut}),this.viewer.addEventListener(hr.type,this)}destroy(){this.viewer.removeEventListener(hr.type,this),super.destroy()}handleEvent(i){i instanceof hr&&this.toggleActive(i.fullscreenEnabled)}onClick(){this.viewer.toggleFullscreen()}};im.id="fullscreen";var FM="psvButton",BM=(i,e)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
  <h1 class="psv-panel-menu-title">${Pi.menu} ${e}</h1>
  <ul class="psv-panel-menu-list">
    ${i.map(t=>`
    <li data-psv-button="${t.id}" class="psv-panel-menu-item" tabindex="0">
      <span class="psv-panel-menu-item-icon">${t.content}</span>
      <span class="psv-panel-menu-item-label">${t.title}</span>
    </li>
    `).join("")}
  </ul>
</div>
`,La=class extends Xt{constructor(i){super(i,{className:"psv-menu-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:Pi.menu}),this.viewer.addEventListener(Un.type,this),this.viewer.addEventListener(Dn.type,this),super.hide()}destroy(){this.viewer.removeEventListener(Un.type,this),this.viewer.removeEventListener(Dn.type,this),super.destroy()}handleEvent(i){i instanceof Un?this.toggleActive(i.panelId===Gt.MENU):i instanceof Dn&&this.toggleActive(!1)}onClick(){this.state.active?this.__hideMenu():this.__showMenu()}hide(i){super.hide(i),this.__hideMenu()}show(i){super.show(i),this.state.active&&this.__showMenu()}__showMenu(){this.viewer.panel.show({id:Gt.MENU,content:BM(this.viewer.navbar.collapsed,this.viewer.config.lang.menu),noMargin:!0,clickHandler:i=>{const e=i?of(i,".psv-panel-menu-item"):void 0,t=e?e.dataset[FM]:void 0;t&&(this.viewer.navbar.getButton(t).onClick(),this.__hideMenu())}})}__hideMenu(){this.viewer.panel.hide(Gt.MENU)}};La.id="menu";function zM(i){let e;switch(i){case 0:e=90;break;case 1:e=-90;break;case 3:e=180;break;default:e=0;break}return Pi.arrow.replace("rotate(0",`rotate(${e}`)}var Or=class extends Xt{constructor(i,e){super(i,{className:"psv-move-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:zM(e)}),this.direction=e,this.handler=new xo,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(i){switch(i.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":i.key===Bt.Enter&&this.__onMouseDown();break;case"keyup":i.key===Bt.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return vo(ei.isTouchEnabled)}__onMouseDown(){if(!this.state.enabled)return;const i={};switch(this.direction){case 0:i.pitch=!1;break;case 1:i.pitch=!0;break;case 3:i.yaw=!1;break;default:i.yaw=!0;break}this.viewer.stopAll(),this.viewer.dynamics.position.roll(i),this.handler.down()}__onMouseUp(){this.state.enabled&&this.handler.up(()=>{this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer()})}};Or.groupId="move";var nm=class extends Or{constructor(i){super(i,1)}};nm.id="moveDown";var sm=class extends Or{constructor(i){super(i,2)}};sm.id="moveLeft";var rm=class extends Or{constructor(i){super(i,3)}};rm.id="moveRight";var am=class extends Or{constructor(i){super(i,0)}};am.id="moveUp";var eh=class extends Xt{constructor(i,e,t){super(i,{className:"psv-zoom-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:e}),this.direction=t,this.handler=new xo,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(i){switch(i.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":i.key===Bt.Enter&&this.__onMouseDown();break;case"keyup":i.key===Bt.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return vo(ei.isTouchEnabled)}__onMouseDown(){this.state.enabled&&(this.viewer.dynamics.zoom.roll(this.direction===1),this.handler.down())}__onMouseUp(){this.state.enabled&&this.handler.up(()=>this.viewer.dynamics.zoom.stop())}};eh.groupId="zoom";var om=class extends eh{constructor(i){super(i,Pi.zoomIn,0)}};om.id="zoomIn";var lm=class extends eh{constructor(i){super(i,Pi.zoomOut,1)}};lm.id="zoomOut";var th=class extends Xt{constructor(i){super(i,{className:"psv-zoom-range",hoverScale:!1,collapsable:!1,tabbable:!1}),this.zoomRange=document.createElement("div"),this.zoomRange.className="psv-zoom-range-line",this.container.appendChild(this.zoomRange),this.zoomValue=document.createElement("div"),this.zoomValue.className="psv-zoom-range-handle",this.zoomRange.appendChild(this.zoomValue),this.slider=new Af(this.container,"HORIZONTAL",e=>this.__onSliderUpdate(e)),this.mediaMinWidth=parseInt(Wi(this.container,"max-width"),10),this.viewer.addEventListener(hn.type,this),this.viewer.state.ready?this.__moveZoomValue(this.viewer.getZoomLevel()):this.viewer.addEventListener(pr.type,this)}destroy(){this.slider.destroy(),this.viewer.removeEventListener(hn.type,this),this.viewer.removeEventListener(pr.type,this),super.destroy()}handleEvent(i){i instanceof hn?this.__moveZoomValue(i.zoomLevel):i instanceof pr&&this.__moveZoomValue(this.viewer.getZoomLevel())}onClick(){}isSupported(){return vo(ei.isTouchEnabled)}autoSize(){this.state.supported&&(this.viewer.state.size.width<=this.mediaMinWidth&&this.state.visible?this.hide(!1):this.viewer.state.size.width>this.mediaMinWidth&&!this.state.visible&&this.show(!1))}__moveZoomValue(i){this.zoomValue.style.left=i/100*this.zoomRange.offsetWidth-this.zoomValue.offsetWidth/2+"px"}__onSliderUpdate(i){i.mousedown&&this.viewer.zoom(i.value*100)}};th.id="zoomRange";th.groupId="zoom";var cm=class extends Cf{constructor(i){super(),this.viewer=i}init(){}destroy(){}},kr=class extends cm{constructor(i,e){super(i),this.config=this.constructor.configParser(e)}setOption(i,e){this.setOptions({[i]:e})}setOptions(i){const e={...this.config,...i},t=this.constructor,n=t.configParser,s=t.readonlyOptions,r=t.id;for(let[a,o]of Object.entries(i)){if(!(a in n.defaults)){Vt(`${r}: Unknown option "${a}"`);continue}if(s.includes(a)){Vt(`${r}: Option "${a}" cannot be updated`);continue}a in n.parsers&&(o=n.parsers[a](o,{rawConfig:e,defValue:n.defaults[a]})),this.config[a]=o}}};kr.readonlyOptions=[];function pc(i){if(i){for(const[,e]of[["_",i],...Object.entries(i)])if(e.prototype instanceof cm)return jc(e.id,e.VERSION,"5.15.1"),e}return null}var Li={panorama:null,container:null,adapter:[Qc,null],plugins:[],caption:null,description:null,downloadUrl:null,downloadName:null,loadingImg:null,loadingTxt:"",size:null,fisheye:0,minFov:30,maxFov:90,defaultZoomLvl:50,defaultYaw:0,defaultPitch:0,sphereCorrection:null,moveSpeed:1,zoomSpeed:1,moveInertia:.8,mousewheel:!0,mousemove:!0,mousewheelCtrlKey:!1,touchmoveTwoFingers:!1,panoData:null,requestHeaders:null,canvasBackground:"#000",defaultTransition:{speed:1500,rotation:!0,effect:"fade"},rendererParameters:{alpha:!0,antialias:!0},withCredentials:()=>!1,navbar:["zoom","move","download","description","caption","fullscreen"],lang:{zoom:"Zoom",zoomOut:"Zoom out",zoomIn:"Zoom in",moveUp:"Move up",moveDown:"Move down",moveLeft:"Move left",moveRight:"Move right",description:"Description",download:"Download",fullscreen:"Fullscreen",loading:"Loading...",menu:"Menu",close:"Close",twoFingers:"Use two fingers to navigate",ctrlZoom:"Use ctrl + scroll to zoom the image",loadError:"The panorama cannot be loaded",webglError:"Your browser does not seem to support WebGL"},keyboard:"fullscreen",keyboardActions:{[Bt.ArrowUp]:"ROTATE_UP",[Bt.ArrowDown]:"ROTATE_DOWN",[Bt.ArrowRight]:"ROTATE_RIGHT",[Bt.ArrowLeft]:"ROTATE_LEFT",[Bt.PageUp]:"ZOOM_IN",[Bt.PageDown]:"ZOOM_OUT",[Bt.Plus]:"ZOOM_IN",[Bt.Minus]:"ZOOM_OUT"}},Pd={panorama:"Use setPanorama method to change the panorama",panoData:"Use setPanorama method to change the panorama",container:"Cannot change viewer container",adapter:"Cannot change adapter",plugins:"Cannot change plugins"},mc={container:i=>{if(!i)throw new re("No value given for container.");return i},adapter:(i,{defValue:e})=>{if(i?Array.isArray(i)?i=[Rd(i[0]),i[1]]:i=[Rd(i),null]:i=e,!i[0])throw new re("An undefined value was given for adapter.");if(!i[0].id)throw new re("Adapter has no id.");return i},defaultYaw:i=>Rn(i),defaultPitch:i=>Rn(i,!0),defaultZoomLvl:i=>Be.clamp(i,0,100),minFov:(i,{rawConfig:e})=>(e.maxFov<i&&(Vt("maxFov cannot be lower than minFov"),i=e.maxFov),Be.clamp(i,1,179)),maxFov:(i,{rawConfig:e})=>(i<e.minFov&&(i=e.minFov),Be.clamp(i,1,179)),moveInertia:(i,{defValue:e})=>i===!0?e:i===!1?0:i,lang:i=>({...Li.lang,...i}),fisheye:i=>i===!0?1:i===!1?0:Be.clamp(i,0,2),requestHeaders:i=>i&&typeof i=="object"?()=>i:typeof i=="function"?i:null,withCredentials:i=>typeof i=="boolean"?()=>i:typeof i=="function"?i:()=>!1,defaultTransition:(i,{defValue:e})=>i===null||i.speed===0?null:{...e,...i},rendererParameters:(i,{defValue:e})=>({...i,...e}),plugins:i=>i.map((e,t)=>{if(Array.isArray(e)?e=[pc(e[0]),e[1]]:e=[pc(e),null],!e[0])throw new re(`An undefined value was given for plugin ${t}.`);if(!e[0].id)throw new re(`Plugin ${t} has no id.`);return e}),navbar:i=>i===!1?null:i===!0?go(Li.navbar):typeof i=="string"?i.split(/[ ,]/):i},VM=_o(Li,mc),Cs=class extends Xt{constructor(i){super(i,{className:"psv-caption",hoverScale:!1,collapsable:!1,tabbable:!0}),this.contentWidth=0,this.state.width=0,this.contentElt=document.createElement("div"),this.contentElt.className="psv-caption-content",this.container.appendChild(this.contentElt),this.setCaption(this.viewer.config.caption)}hide(){this.contentElt.style.display="none",this.state.visible=!1}show(){this.contentElt.style.display="",this.state.visible=!0}onClick(){}setCaption(i){this.show(),this.contentElt.innerHTML=i??"",this.contentElt.innerHTML?this.contentWidth=this.contentElt.offsetWidth:this.contentWidth=0,this.autoSize()}autoSize(){this.toggle(this.container.offsetWidth>=this.contentWidth),this.__refreshButton()}__refreshButton(){this.viewer.navbar.getButton(Cr.id,!1)?.autoSize(!0)}};Cs.id="caption";var gc={},qa={};function Fr(i,e){if(!i.id)throw new re("Button id is required");if(gc[i.id]=i,i.groupId&&(qa[i.groupId]=qa[i.groupId]||[]).push(i),e){const t=Li.navbar;switch(e){case"start":t.unshift(i.id);break;case"end":t.push(i.id);break;default:{const[n,s]=e.split(":"),r=t.indexOf(n);if(!n||!s||r===-1)throw new re(`Invalid defaultPosition ${e}`);t.splice(r+(s==="right"?1:0),0,i.id)}}}}[lm,th,om,Cr,Cs,tm,im,sm,rm,am,nm].forEach(i=>Fr(i));var HM=class extends vn{constructor(i){super(i,{className:`psv-navbar ${Ur}`}),this.collapsed=[],this.state.visible=!1}show(){this.viewer.container.classList.add("psv--has-navbar"),this.container.classList.add("psv-navbar--open"),this.state.visible=!0}hide(){this.viewer.container.classList.remove("psv--has-navbar"),this.container.classList.remove("psv-navbar--open"),this.state.visible=!1}setButtons(i){this.children.slice().forEach(e=>e.destroy()),this.children.length=0,i.indexOf(Cs.id)!==-1&&i.indexOf(Cr.id)===-1&&i.splice(i.indexOf(Cs.id),0,Cr.id),i.forEach(e=>{typeof e=="object"?new kM(this,e):gc[e]?new gc[e](this):qa[e]?qa[e].forEach(t=>{new t(this)}):Vt(`Unknown button ${e}`)}),new La(this),this.children.forEach(e=>{e instanceof Xt&&e.checkSupported()}),this.autoSize()}setCaption(i){this.children.some(e=>e instanceof Cs?(e.setCaption(i),!0):!1)}getButton(i,e=!0){const t=this.children.find(n=>n instanceof Xt&&n.id===i);return!t&&e&&Vt(`button "${i}" not found in the navbar`),t}focusButton(i){this.isVisible()&&(this.getButton(i,!1)?.container||this.container.firstElementChild)?.focus()}autoSize(){this.children.forEach(n=>{n instanceof Xt&&n.autoSize()});const i=this.container.offsetWidth;let e=0;const t=[];this.children.forEach(n=>{n.isVisible()&&n instanceof Xt&&(e+=n.width,n.collapsable&&t.push(n))}),e!==0&&(i<e&&t.length>0?(t.forEach(n=>n.collapse()),this.collapsed=t,this.getButton(La.id).show(!1)):i>=e&&this.collapsed.length>0&&(this.collapsed.forEach(n=>n.uncollapse()),this.collapsed=[],this.getButton(La.id).hide(!1)),this.getButton(Cs.id,!1)?.autoSize())}};In.enabled=!1;var bs={enabled:!0,maxItems:10,ttl:600,items:{},purgeInterval:null,init(){In.enabled&&(Vt("ThreeJS cache should be disabled"),In.enabled=!1),!this.purgeInterval&&this.enabled&&(this.purgeInterval=setInterval(()=>this.purge(),60*1e3))},add(i,e,t){this.enabled&&e&&(this.items[e]=this.items[e]??{files:{},lastAccess:null},this.items[e].files[i]=t,this.items[e].lastAccess=Date.now())},get(i,e){if(this.enabled&&e&&this.items[e])return this.items[e].lastAccess=Date.now(),this.items[e].files[i]},remove(i,e){this.enabled&&e&&this.items[e]&&(delete this.items[e].files[i],Object.keys(this.items[e].files).length===0&&delete this.items[e])},purge(){Object.entries(this.items).sort(([,i],[,e])=>e.lastAccess-i.lastAccess).forEach(([i,{lastAccess:e}],t)=>{t>0&&(Date.now()-e>=this.ttl*1e3||t>=this.maxItems)&&delete this.items[i]})}},GM=class extends vn{constructor(i){super(i,{className:"psv-loader-container"}),this.loader=document.createElement("div"),this.loader.className="psv-loader",this.container.appendChild(this.loader),this.size=this.loader.offsetWidth,this.canvas=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.canvas.setAttribute("class","psv-loader-canvas"),this.canvas.setAttribute("viewBox",`0 0 ${this.size} ${this.size}`),this.loader.appendChild(this.canvas),this.textColor=Wi(this.loader,"color"),this.color=Wi(this.canvas,"color"),this.border=parseInt(Wi(this.loader,"--psv-loader-border"),10),this.thickness=parseInt(Wi(this.loader,"--psv-loader-tickness"),10);const e=this.size/2;this.canvas.innerHTML=`
            <circle cx="${e}" cy="${e}" r="${e}" fill="${this.color}"/>
            <path d="" fill="none" stroke="${this.textColor}" stroke-width="${this.thickness}" stroke-linecap="round"/>
        `,this.viewer.addEventListener(ai.type,this),this.__updateContent(),this.hide()}destroy(){this.viewer.removeEventListener(ai.type,this),super.destroy()}handleEvent(i){i instanceof ai&&i.containsOptions("loadingImg","loadingTxt","lang")&&this.__updateContent()}setProgress(i){this.container.classList.remove("psv-loader--undefined");const e=Be.clamp(i,0,99.999)/100*Math.PI*2,t=this.size/2,n=t,s=this.thickness/2+this.border,r=(this.size-this.thickness)/2-this.border,a=Math.sin(e)*r+t,o=-Math.cos(e)*r+t,c=i>50?"1":"0";this.canvas.querySelector("path").setAttributeNS(null,"d",`M ${n} ${s} A ${r} ${r} 0 ${c} 1 ${a} ${o}`)}showUndefined(){this.show(),this.setProgress(25),this.container.classList.add("psv-loader--undefined")}__updateContent(){const i=this.loader.querySelector(".psv-loader-image, .psv-loader-text");i&&this.loader.removeChild(i);let e;if(this.viewer.config.loadingImg?(e=document.createElement("img"),e.className="psv-loader-image",e.src=this.viewer.config.loadingImg):this.viewer.config.loadingTxt!==null&&(e=document.createElement("div"),e.className="psv-loader-text",e.innerHTML=this.viewer.config.loadingTxt||this.viewer.config.lang.loading),e){const t=Math.round(Math.sqrt(2*Math.pow(this.size/2-this.thickness/2-this.border,2)));e.style.maxWidth=t+"px",e.style.maxHeight=t+"px",this.loader.appendChild(e)}}},WM=class extends vn{constructor(i){super(i,{className:"psv-notification"}),this.state={visible:!1,contentId:null,timeout:null},this.content=document.createElement("div"),this.content.className="psv-notification-content",this.container.appendChild(this.content),this.content.addEventListener("click",()=>this.hide())}isVisible(i){return this.state.visible&&(!i||!this.state.contentId||this.state.contentId===i)}toggle(){throw new re("Notification cannot be toggled")}show(i){this.state.timeout&&(clearTimeout(this.state.timeout),this.state.timeout=null),typeof i=="string"&&(i={content:i}),this.state.contentId=i.id||null,this.content.innerHTML=i.content,this.container.classList.add("psv-notification--visible"),this.state.visible=!0,this.viewer.dispatchEvent(new mr(this.state.contentId)),i.timeout&&(this.state.timeout=setTimeout(()=>this.hide(this.state.contentId),i.timeout))}hide(i){if(this.isVisible(i)){const e=this.state.contentId;this.container.classList.remove("psv-notification--visible"),this.state.visible=!1,this.state.contentId=null,this.viewer.dispatchEvent(new dr(e))}}},XM=class extends vn{constructor(i){super(i,{className:`psv-overlay ${Ur}`}),this.state={visible:!1,contentId:null,dismissible:!0},this.image=document.createElement("div"),this.image.className="psv-overlay-image",this.container.appendChild(this.image),this.title=document.createElement("div"),this.title.className="psv-overlay-title",this.container.appendChild(this.title),this.text=document.createElement("div"),this.text.className="psv-overlay-text",this.container.appendChild(this.text),this.container.addEventListener("click",this),this.viewer.addEventListener(Nn.type,this),super.hide()}destroy(){this.viewer.removeEventListener(Nn.type,this),super.destroy()}handleEvent(i){i.type==="click"?this.isVisible()&&this.state.dismissible&&(this.hide(),i.stopPropagation()):i instanceof Nn&&this.isVisible()&&this.state.dismissible&&i.matches(Bt.Escape)&&(this.hide(),i.preventDefault())}isVisible(i){return this.state.visible&&(!i||!this.state.contentId||this.state.contentId===i)}toggle(){throw new re("Overlay cannot be toggled")}show(i){typeof i=="string"&&(i={title:i}),this.state.contentId=i.id||null,this.state.dismissible=i.dismissible!==!1,this.image.innerHTML=i.image||"",this.title.innerHTML=i.title||"",this.text.innerHTML=i.text||"",super.show(),this.viewer.dispatchEvent(new Lp(this.state.contentId))}hide(i){if(this.isVisible(i)){const e=this.state.contentId;super.hide(),this.state.contentId=null,this.viewer.dispatchEvent(new Kf(e))}}},$M=200,ll="psv-panel-content--no-interaction",qM=class extends vn{constructor(i){super(i,{className:`psv-panel ${Ur}`}),this.state={visible:!1,contentId:null,mouseX:0,mouseY:0,mousedown:!1,clickHandler:null,keyHandler:null,width:{}};const e=document.createElement("div");e.className="psv-panel-resizer",this.container.appendChild(e);const t=document.createElement("div");t.className="psv-panel-close-button",t.innerHTML=Pi.close,t.title=i.config.lang.close,this.container.appendChild(t),this.content=document.createElement("div"),this.content.className="psv-panel-content",this.container.appendChild(this.content),t.addEventListener("click",()=>this.hide()),e.addEventListener("mousedown",this),e.addEventListener("touchstart",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this),this.viewer.container.addEventListener("mousemove",this),this.viewer.container.addEventListener("touchmove",this),this.viewer.addEventListener(Nn.type,this)}destroy(){this.viewer.removeEventListener(Nn.type,this),this.viewer.container.removeEventListener("mousemove",this),this.viewer.container.removeEventListener("touchmove",this),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(i){switch(i.type){case"mousedown":this.__onMouseDown(i);break;case"touchstart":this.__onTouchStart(i);break;case"mousemove":this.__onMouseMove(i);break;case"touchmove":this.__onTouchMove(i);break;case"mouseup":this.__onMouseUp(i);break;case"touchend":this.__onTouchEnd(i);break;case Nn.type:this.__onKeyPress(i);break}}isVisible(i){return this.state.visible&&(!i||!this.state.contentId||this.state.contentId===i)}toggle(){throw new re("Panel cannot be toggled")}show(i){typeof i=="string"&&(i={content:i});const e=this.isVisible(i.id);this.state.contentId=i.id||null,this.state.visible=!0,this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),i.id&&this.state.width[i.id]?this.container.style.width=this.state.width[i.id]:i.width?this.container.style.width=i.width:this.container.style.width=null,this.content.innerHTML=i.content,this.content.scrollTop=0,this.container.classList.add("psv-panel--open"),mo(this.content,"psv-panel-content--no-margin",i.noMargin===!0),i.clickHandler&&(this.state.clickHandler=t=>{i.clickHandler(Ha(t))},this.state.keyHandler=t=>{t.key===Bt.Enter&&i.clickHandler(Ha(t))},this.content.addEventListener("click",this.state.clickHandler),this.content.addEventListener("keydown",this.state.keyHandler),e||setTimeout(()=>{this.content.querySelector("a,button,[tabindex]")?.focus()},300)),this.viewer.dispatchEvent(new Un(this.state.contentId))}hide(i){if(this.isVisible(i)){const e=this.state.contentId;this.state.visible=!1,this.state.contentId=null,this.content.innerHTML=null,this.container.classList.remove("psv-panel--open"),this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),this.viewer.dispatchEvent(new Dn(e))}}__onMouseDown(i){i.stopPropagation(),this.__startResize(i.clientX,i.clientY)}__onTouchStart(i){if(i.stopPropagation(),i.touches.length===1){const e=i.touches[0];this.__startResize(e.clientX,e.clientY)}}__onMouseUp(i){this.state.mousedown&&(i.stopPropagation(),this.state.mousedown=!1,this.content.classList.remove(ll))}__onTouchEnd(i){this.state.mousedown&&(i.stopPropagation(),i.touches.length===0&&(this.state.mousedown=!1,this.content.classList.remove(ll)))}__onMouseMove(i){this.state.mousedown&&(i.stopPropagation(),this.__resize(i.clientX,i.clientY))}__onTouchMove(i){if(this.state.mousedown){const e=i.touches[0];this.__resize(e.clientX,e.clientY)}}__onKeyPress(i){this.isVisible()&&i.matches(Bt.Escape)&&(this.hide(),i.preventDefault())}__startResize(i,e){this.state.mouseX=i,this.state.mouseY=e,this.state.mousedown=!0,this.content.classList.add(ll)}__resize(i,e){const t=i,n=e,s=Math.max($M,this.container.offsetWidth-(t-this.state.mouseX))+"px";this.state.contentId&&(this.state.width[this.state.contentId]=s),this.container.style.width=s,this.state.mouseX=t,this.state.mouseY=n}},YM=class extends vn{constructor(i,e){super(i,{className:"psv-tooltip"}),this.state={visible:!0,arrow:0,border:0,state:0,width:0,height:0,pos:"",config:null,data:null,hideTimeout:null},this.content=document.createElement("div"),this.content.className="psv-tooltip-content",this.container.appendChild(this.content),this.arrow=document.createElement("div"),this.arrow.className="psv-tooltip-arrow",this.container.appendChild(this.arrow),this.container.addEventListener("transitionend",this),this.container.addEventListener("touchdown",t=>t.stopPropagation()),this.container.addEventListener("mousedown",t=>t.stopPropagation()),this.container.style.top="-1000px",this.container.style.left="-1000px",this.show(e)}handleEvent(i){i.type==="transitionend"&&this.__onTransitionEnd(i)}destroy(){clearTimeout(this.state.hideTimeout),delete this.state.data,super.destroy()}toggle(){throw new re("Tooltip cannot be toggled")}show(i){if(this.state.state!==0)throw new re("Initialized tooltip cannot be re-initialized");i.className&&Xc(this.container,i.className),i.style&&Object.assign(this.container.style,i.style),this.state.state=3,this.update(i.content,i),this.state.data=i.data,this.state.state=1,this.viewer.dispatchEvent(new Op(this,this.state.data)),this.__waitImages()}update(i,e){this.content.innerHTML=i;const t=this.container.getBoundingClientRect();this.state.width=t.right-t.left,this.state.height=t.bottom-t.top,this.state.arrow=parseInt(Wi(this.arrow,"border-top-width"),10),this.state.border=parseInt(Wi(this.container,"border-top-left-radius"),10),this.move(e??this.state.config),this.__waitImages()}move(i){if(this.state.state!==1&&this.state.state!==3)throw new re("Uninitialized tooltip cannot be moved");i.box=i.box??this.state.config?.box??{width:0,height:0},this.state.config=i;const e=this.container,t=this.arrow,n={posClass:xf(i.position,{allowCenter:!1,cssOrder:!1})||["top","center"],width:this.state.width,height:this.state.height,top:0,left:0,arrowTop:0,arrowLeft:0};this.__computeTooltipPosition(n,i);let s=null,r=null;if(n.top<0?s="bottom":n.top+n.height>this.viewer.state.size.height&&(s="top"),n.left<0?r="right":n.left+n.width>this.viewer.state.size.width&&(r="left"),r||s){const o=Kc(n.posClass);s&&(n.posClass[o?0:1]=s),r&&(n.posClass[o?1:0]=r),this.__computeTooltipPosition(n,i)}e.style.top=n.top+"px",e.style.left=n.left+"px",t.style.top=n.arrowTop+"px",t.style.left=n.arrowLeft+"px";const a=n.posClass.join("-");a!==this.state.pos&&(e.classList.remove(`psv-tooltip--${this.state.pos}`),this.state.pos=a,e.classList.add(`psv-tooltip--${this.state.pos}`))}hide(){this.container.classList.remove("psv-tooltip--visible"),this.state.state=2,this.viewer.dispatchEvent(new tp(this.state.data));const i=parseFloat(Wi(this.container,"transition-duration"));this.state.hideTimeout=setTimeout(()=>{this.destroy()},i*2)}__onTransitionEnd(i){if(i.propertyName==="transform")switch(this.state.state){case 1:this.container.classList.add("psv-tooltip--visible"),this.state.state=3;break;case 2:this.state.state=0,this.destroy();break}}__computeTooltipPosition(i,e){const t=this.state.arrow,n=e.top,s=i.height,r=e.left,a=i.width,o=t+this.state.border,c=e.box.width/2+t*2,l=e.box.height/2+t*2;switch(i.posClass.join("-")){case"top-left":i.top=n-l-s,i.left=r+o-a,i.arrowTop=s,i.arrowLeft=a-o-t;break;case"top-center":i.top=n-l-s,i.left=r-a/2,i.arrowTop=s,i.arrowLeft=a/2-t;break;case"top-right":i.top=n-l-s,i.left=r-o,i.arrowTop=s,i.arrowLeft=t;break;case"bottom-left":i.top=n+l,i.left=r+o-a,i.arrowTop=-t*2,i.arrowLeft=a-o-t;break;case"bottom-center":i.top=n+l,i.left=r-a/2,i.arrowTop=-t*2,i.arrowLeft=a/2-t;break;case"bottom-right":i.top=n+l,i.left=r-o,i.arrowTop=-t*2,i.arrowLeft=t;break;case"left-top":i.top=n+o-s,i.left=r-c-a,i.arrowTop=s-o-t,i.arrowLeft=a;break;case"center-left":i.top=n-s/2,i.left=r-c-a,i.arrowTop=s/2-t,i.arrowLeft=a;break;case"left-bottom":i.top=n-o,i.left=r-c-a,i.arrowTop=t,i.arrowLeft=a;break;case"right-top":i.top=n+o-s,i.left=r+c,i.arrowTop=s-o-t,i.arrowLeft=-t*2;break;case"center-right":i.top=n-s/2,i.left=r+c,i.arrowTop=s/2-t,i.arrowLeft=-t*2;break;case"right-bottom":i.top=n-o,i.left=r+c,i.arrowTop=t,i.arrowLeft=-t*2;break}}__waitImages(){const i=this.content.querySelectorAll("img");if(i.length>0){const e=[];i.forEach(t=>{t.complete||e.push(new Promise(n=>{t.onload=n,t.onerror=n}))}),e.length&&Promise.all(e).then(()=>{if(this.state.state===1||this.state.state===3){const t=this.container.getBoundingClientRect();this.state.width=t.right-t.left,this.state.height=t.bottom-t.top,this.move(this.state.config)}})}}},ZM=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="15 15 70 70"><path fill="currentColor" d="M50,16.2c-18.6,0-33.8,15.1-33.8,33.8S31.4,83.7,50,83.7S83.8,68.6,83.8,50S68.6,16.2,50,16.2z M50,80.2c-16.7,0-30.2-13.6-30.2-30.2S33.3,19.7,50,19.7S80.3,33.3,80.3,50S66.7,80.2,50,80.2z"/><rect fill="currentColor" x="48" y="31.7" width="4" height="28"/><rect fill="currentColor" x="48" y="63.2" width="4" height="5"/><!--Created by Shastry from the Noun Project--></svg>
`,Br=class{constructor(i){this.viewer=i,this.config=i.config,this.state=i.state}destroy(){}},Si=new P,va=new kn(0,0,0,"ZXY"),KM=class extends Br{constructor(i){super(i)}fovToZoomLevel(i){const e=Math.round((i-this.config.minFov)/(this.config.maxFov-this.config.minFov)*100);return Be.clamp(e-2*(e-50),0,100)}zoomLevelToFov(i){return this.config.maxFov+i/100*(this.config.minFov-this.config.maxFov)}vFovToHFov(i){return Be.radToDeg(2*Math.atan(Math.tan(Be.degToRad(i)/2)*this.state.aspect))}hFovToVFov(i){return Be.radToDeg(2*Math.atan(Math.tan(Be.degToRad(i)/2)/this.state.aspect))}getAnimationProperties(i,e,t){const n=!zt(e),s=!zt(t),r={};let a=null;if(n){const o=this.viewer.getPosition(),c=sf(o.yaw,e.yaw);r.yaw={start:o.yaw,end:o.yaw+c},r.pitch={start:o.pitch,end:e.pitch},a=hc(i,rf(o,e))}if(s){const o=this.viewer.getZoomLevel(),c=Math.abs(t-o);r.zoom={start:o,end:t},a===null&&(a=hc(i,Math.PI/4*c/100))}return a===null?typeof i=="number"?a=i:a=oc:a=Math.max(oc,a),{duration:a,properties:r}}getTransitionOptions(i){let e;const t=this.config.defaultTransition??Li.defaultTransition;return i.transition===!1||i.transition===null?e=null:i.transition===!0?e={...t}:typeof i.transition=="object"?e={...t,...i.transition}:e=this.config.defaultTransition,e}textureCoordsToSphericalCoords(i){if(!this.state.textureData?.panoData)throw new re("Current adapter does not support texture coordinates or no texture has been loaded");const e=this.viewer.adapter.textureCoordsToSphericalCoords(i,this.state.textureData.panoData);return!va.equals(this.viewer.renderer.panoramaPose)||!va.equals(this.viewer.renderer.sphereCorrection)?(this.sphericalCoordsToVector3(e,Si),Si.applyEuler(this.viewer.renderer.panoramaPose),Si.applyEuler(this.viewer.renderer.sphereCorrection),this.vector3ToSphericalCoords(Si)):e}sphericalCoordsToTextureCoords(i){if(!this.state.textureData?.panoData)throw new re("Current adapter does not support texture coordinates or no texture has been loaded");return(!va.equals(this.viewer.renderer.panoramaPose)||!va.equals(this.viewer.renderer.sphereCorrection))&&(this.sphericalCoordsToVector3(i,Si),uc(Si,this.viewer.renderer.sphereCorrection),uc(Si,this.viewer.renderer.panoramaPose),i=this.vector3ToSphericalCoords(Si)),this.viewer.adapter.sphericalCoordsToTextureCoords(i,this.state.textureData.panoData)}sphericalCoordsToVector3(i,e,t=cn){return e||(e=new P),e.x=t*-Math.cos(i.pitch)*Math.sin(i.yaw),e.y=t*Math.sin(i.pitch),e.z=t*Math.cos(i.pitch)*Math.cos(i.yaw),e}vector3ToSphericalCoords(i){const e=Math.acos(i.y/Math.sqrt(i.x*i.x+i.y*i.y+i.z*i.z)),t=Math.atan2(i.x,i.z);return{yaw:t<0?-t:Math.PI*2-t,pitch:Math.PI/2-e}}viewerCoordsToVector3(i){const e=this.viewer.renderer.getIntersections(i).filter(t=>t.object.userData[Fn]);return e.length?e[0].point:null}viewerCoordsToSphericalCoords(i){const e=this.viewerCoordsToVector3(i);return e?this.vector3ToSphericalCoords(e):null}vector3ToViewerCoords(i){const e=i.clone();return e.project(this.viewer.renderer.camera),{x:Math.round((e.x+1)/2*this.state.size.width),y:Math.round((1-e.y)/2*this.state.size.height)}}sphericalCoordsToViewerCoords(i){return this.sphericalCoordsToVector3(i,Si),this.vector3ToViewerCoords(Si)}isPointVisible(i){let e,t;if(i instanceof P)e=i,t=this.vector3ToViewerCoords(i);else if(Zc(i))e=this.sphericalCoordsToVector3(i,Si),t=this.vector3ToViewerCoords(e);else return!1;return e.dot(this.viewer.state.direction)>0&&t.x>=0&&t.x<=this.viewer.state.size.width&&t.y>=0&&t.y<=this.viewer.state.size.height}cleanPosition(i){if("yaw"in i||"pitch"in i){if(!("yaw"in i)||!("pitch"in i))throw new re("Position is missing 'yaw' or 'pitch'");return{yaw:Rn(i.yaw),pitch:Rn(i.pitch,!0)}}else return this.textureCoordsToSphericalCoords(i)}cleanSphereCorrection(i){return{pan:Rn(i?.pan||0),tilt:Rn(i?.tilt||0,!0),roll:Rn(i?.roll||0,!0,!1)}}cleanPanoramaPose(i){return{pan:Be.degToRad(i?.poseHeading||0),tilt:Be.degToRad(i?.posePitch||0),roll:Be.degToRad(i?.poseRoll||0)}}cleanPanoramaOptions(i,e){return e?.isEquirectangular&&(zt(i.zoom)&&!zt(e.initialFov)&&(i={...i,zoom:this.fovToZoomLevel(this.hFovToVFov(e.initialFov))}),zt(i.position)&&!zt(e.initialHeading)&&!zt(e.initialPitch)&&(i={...i,position:{yaw:Be.degToRad(e.initialHeading),pitch:Be.degToRad(e.initialPitch)}})),i}},jM=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M33.38 33.2a1.96 1.96 0 0 0 1.5-3.23 10.61 10.61 0 0 1 7.18-17.51c.7-.06 1.31-.49 1.61-1.12a13.02 13.02 0 0 1 11.74-7.43c7.14 0 12.96 5.8 12.96 12.9 0 3.07-1.1 6.05-3.1 8.38-.7.82-.61 2.05.21 2.76.83.7 2.07.6 2.78-.22a16.77 16.77 0 0 0 4.04-10.91C72.3 7.54 64.72 0 55.4 0a16.98 16.98 0 0 0-14.79 8.7 14.6 14.6 0 0 0-12.23 14.36c0 3.46 1.25 6.82 3.5 9.45.4.45.94.69 1.5.69m45.74 43.55a22.13 22.13 0 0 1-5.23 12.4c-4 4.55-9.53 6.86-16.42 6.86-12.6 0-20.1-10.8-20.17-10.91a1.82 1.82 0 0 0-.08-.1c-5.3-6.83-14.55-23.82-17.27-28.87-.05-.1 0-.21.02-.23a6.3 6.3 0 0 1 8.24 1.85l9.38 12.59a1.97 1.97 0 0 0 3.54-1.17V25.34a4 4 0 0 1 1.19-2.87 3.32 3.32 0 0 1 2.4-.95c1.88.05 3.4 1.82 3.4 3.94v24.32a1.96 1.96 0 0 0 3.93 0v-33.1a3.5 3.5 0 0 1 7 0v35.39a1.96 1.96 0 0 0 3.93 0v-.44c.05-2.05 1.6-3.7 3.49-3.7 1.93 0 3.5 1.7 3.5 3.82v5.63c0 .24.04.48.13.71l.1.26a1.97 1.97 0 0 0 3.76-.37c.33-1.78 1.77-3.07 3.43-3.07 1.9 0 3.45 1.67 3.5 3.74l-1.77 18.1zM77.39 51c-1.25 0-2.45.32-3.5.9v-.15c0-4.27-3.33-7.74-7.42-7.74-1.26 0-2.45.33-3.5.9V16.69a7.42 7.42 0 0 0-14.85 0v1.86a7 7 0 0 0-3.28-.94 7.21 7.21 0 0 0-5.26 2.07 7.92 7.92 0 0 0-2.38 5.67v37.9l-5.83-7.82a10.2 10.2 0 0 0-13.35-2.92 4.1 4.1 0 0 0-1.53 5.48C20 64.52 28.74 80.45 34.07 87.34c.72 1.04 9.02 12.59 23.4 12.59 7.96 0 14.66-2.84 19.38-8.2a26.06 26.06 0 0 0 6.18-14.6l1.78-18.2v-.2c0-4.26-3.32-7.73-7.42-7.73z"/><!--Created by AomAm from the Noun Project--></svg>
`,JM=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 17 79 79"><path fill="currentColor" d="M38.1 29.27c-.24 0-.44.2-.44.45v10.7a.45.45 0 00.9 0v-10.7c0-.25-.2-.45-.45-.45zm10.2 26.66a11.54 11.54 0 01-8.48-6.14.45.45 0 10-.8.41 12.45 12.45 0 009.22 6.62.45.45 0 00.07-.9zm24.55-13.08a23.04 23.04 0 00-22.56-23v7.07l-.01.05a2.83 2.83 0 012.39 2.78v14.03l.09-.02h8.84v-9.22a.45.45 0 11.9 0v9.22h10.35v-.9zm0 27.33V44.66H62.5c-.02 2.01-.52 4-1.47 5.76a.45.45 0 01-.61.18.45.45 0 01-.19-.61 11.54 11.54 0 001.36-5.33h-8.83l-.1-.01a2.83 2.83 0 01-2.83 2.84h-.04-.04a2.83 2.83 0 01-2.83-2.83v-14.9a2.82 2.82 0 012.47-2.8v-7.11a23.04 23.04 0 00-22.57 23v.91h14.72V29.88a8.2 8.2 0 015.02-7.57c.22-.1.5.01.59.24.1.23-.01.5-.24.6a7.3 7.3 0 00-4.47 6.73v13.88h3.9a.45.45 0 110 .9h-3.9v.15a7.32 7.32 0 0011.23 6.17.45.45 0 01.49.76 8.22 8.22 0 01-12.62-6.93v-.15H26.82v25.52a23.04 23.04 0 0023.01 23.01 23.04 23.04 0 0023.02-23.01zm1.8-27.33v27.33A24.85 24.85 0 0149.84 95a24.85 24.85 0 01-24.82-24.82V42.85a24.85 24.85 0 0124.82-24.82 24.85 24.85 0 0124.83 24.82zM57.98 29.88v9.36a.45.45 0 11-.9 0v-9.36a7.28 7.28 0 00-3.4-6.17.45.45 0 01.49-.76 8.18 8.18 0 013.8 6.93z"/><!-- Created by Icon Island from the Noun Project --></svg>
`,wo=class hm{constructor(){this.$=hm.IDLE}is(...e){return e.some(t=>this.$&t)}set(e){this.$=e}add(e){this.$|=e}remove(e){this.$&=~e}};wo.IDLE=0;wo.CLICK=1;wo.MOVING=2;var Rt=wo,QM=class extends Br{constructor(i){super(i),this.data={startMouseX:0,startMouseY:0,mouseX:0,mouseY:0,pinchDist:0,moveDelta:{yaw:0,pitch:0,zoom:0},accumulatorFactor:0,ctrlKeyDown:!1,dblclickData:null,dblclickTimeout:null,longtouchTimeout:null,twofingersTimeout:null,ctrlZoomTimeout:null},this.step=new Rt,this.keyHandler=new xo,this.resizeObserver=new ResizeObserver(ff(()=>this.viewer.autoSize(),50)),this.moveThreshold=Zu*ei.pixelRatio}init(){window.addEventListener("keydown",this,{passive:!1}),window.addEventListener("keyup",this),this.viewer.container.addEventListener("mousedown",this),window.addEventListener("mousemove",this,{passive:!1}),window.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchstart",this,{passive:!1}),window.addEventListener("touchmove",this,{passive:!1}),window.addEventListener("touchend",this,{passive:!1}),this.viewer.container.addEventListener("wheel",this,{passive:!1}),document.addEventListener("fullscreenchange",this),this.resizeObserver.observe(this.viewer.container),this.viewer.addEventListener(cr.type,this),this.viewer.addEventListener(vr.type,this)}destroy(){window.removeEventListener("keydown",this),window.removeEventListener("keyup",this),this.viewer.container.removeEventListener("mousedown",this),window.removeEventListener("mousemove",this),window.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchstart",this),window.removeEventListener("touchmove",this),window.removeEventListener("touchend",this),this.viewer.container.removeEventListener("wheel",this),document.removeEventListener("fullscreenchange",this),this.resizeObserver.disconnect(),this.viewer.removeEventListener(cr.type,this),this.viewer.removeEventListener(vr.type,this),clearTimeout(this.data.dblclickTimeout),clearTimeout(this.data.longtouchTimeout),clearTimeout(this.data.twofingersTimeout),clearTimeout(this.data.ctrlZoomTimeout),super.destroy()}handleEvent(i){switch(i.type){case"keydown":this.__onKeyDown(i);break;case"keyup":this.__onKeyUp();break;case"mousemove":this.__onMouseMove(i);break;case"mouseup":this.__onMouseUp(i);break;case"touchmove":this.__onTouchMove(i);break;case"touchend":this.__onTouchEnd(i);break;case"fullscreenchange":this.__onFullscreenChange();break;case cr.type:this.__applyMoveDelta();break;case vr.type:this.__clearMoveDelta();break}if(!lf(i,"."+Ur))switch(i.type){case"mousedown":this.__onMouseDown(i);break;case"touchstart":this.__onTouchStart(i);break;case"wheel":this.__onMouseWheel(i);break}}__onKeyDown(i){if(this.config.mousewheelCtrlKey&&(this.data.ctrlKeyDown=i.key===Bt.Control,this.data.ctrlKeyDown&&(clearTimeout(this.data.ctrlZoomTimeout),this.viewer.overlay.hide(Gt.CTRL_ZOOM))),!!this.viewer.dispatchEvent(new Nn(i.key,i))&&!(!this.state.keyboardEnabled||!this.config.keyboardActions||this.keyHandler.pending)){for(const[e,t]of Object.entries(this.config.keyboardActions))if($c(i,e)){if(typeof t=="function")t(this.viewer,i);else{switch(t!=="ZOOM_IN"&&t!=="ZOOM_OUT"&&this.viewer.stopAll(),t){case"ROTATE_UP":this.viewer.dynamics.position.roll({pitch:!1});break;case"ROTATE_DOWN":this.viewer.dynamics.position.roll({pitch:!0});break;case"ROTATE_RIGHT":this.viewer.dynamics.position.roll({yaw:!1});break;case"ROTATE_LEFT":this.viewer.dynamics.position.roll({yaw:!0});break;case"ZOOM_IN":this.viewer.dynamics.zoom.roll(!1);break;case"ZOOM_OUT":this.viewer.dynamics.zoom.roll(!0);break}this.keyHandler.down(t)}i.preventDefault();return}}}__onKeyUp(){this.data.ctrlKeyDown=!1,this.state.keyboardEnabled&&this.keyHandler.up(i=>{i==="ZOOM_IN"||i==="ZOOM_OUT"?this.viewer.dynamics.zoom.stop():(this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer())})}__onMouseDown(i){this.step.add(Rt.CLICK),this.data.startMouseX=i.clientX,this.data.startMouseY=i.clientY,this.config.mousemove&&i.preventDefault()}__onMouseUp(i){this.step.is(Rt.CLICK,Rt.MOVING)&&this.__stopMove(i.clientX,i.clientY,i,i.button===2)}__onMouseMove(i){this.config.mousemove&&this.step.is(Rt.CLICK,Rt.MOVING)&&(i.preventDefault(),this.__doMove(i.clientX,i.clientY)),this.__handleObjectsEvents(i)}__onTouchStart(i){i.touches.length===1?(this.step.add(Rt.CLICK),this.data.startMouseX=i.touches[0].clientX,this.data.startMouseY=i.touches[0].clientY,this.data.longtouchTimeout||(this.data.longtouchTimeout=setTimeout(()=>{const e=i.touches[0];this.__stopMove(e.clientX,e.clientY,i,!0),this.data.longtouchTimeout=null},ju))):i.touches.length===2&&(this.step.set(Rt.IDLE),this.__cancelLongTouch(),this.config.mousemove&&(this.__cancelTwoFingersOverlay(),this.__startMoveZoom(i),i.preventDefault()))}__onTouchEnd(i){if(this.__cancelLongTouch(),this.step.is(Rt.CLICK,Rt.MOVING)){if(i.preventDefault(),this.__cancelTwoFingersOverlay(),i.touches.length===1)this.__stopMove(this.data.mouseX,this.data.mouseY);else if(i.touches.length===0){const e=i.changedTouches[0];this.__stopMove(e.clientX,e.clientY,i)}}}__onTouchMove(i){if(this.__cancelLongTouch(),!!this.config.mousemove)if(i.touches.length===1){if(this.config.touchmoveTwoFingers)this.step.is(Rt.CLICK)&&!this.data.twofingersTimeout&&(this.data.twofingersTimeout=setTimeout(()=>{this.viewer.overlay.show({id:Gt.TWO_FINGERS,image:jM,title:this.config.lang.twoFingers})},Ju));else if(this.step.is(Rt.CLICK,Rt.MOVING)){i.preventDefault();const e=i.touches[0];this.__doMove(e.clientX,e.clientY)}}else this.__doMoveZoom(i),this.__cancelTwoFingersOverlay()}__cancelLongTouch(){this.data.longtouchTimeout&&(clearTimeout(this.data.longtouchTimeout),this.data.longtouchTimeout=null)}__cancelTwoFingersOverlay(){this.config.touchmoveTwoFingers&&(this.data.twofingersTimeout&&(clearTimeout(this.data.twofingersTimeout),this.data.twofingersTimeout=null),this.viewer.overlay.hide(Gt.TWO_FINGERS))}__onMouseWheel(i){if(!this.config.mousewheel||!i.deltaY)return;if(this.config.mousewheelCtrlKey&&!this.data.ctrlKeyDown){this.viewer.overlay.show({id:Gt.CTRL_ZOOM,image:JM,title:this.config.lang.ctrlZoom}),clearTimeout(this.data.ctrlZoomTimeout),this.data.ctrlZoomTimeout=setTimeout(()=>this.viewer.overlay.hide(Gt.CTRL_ZOOM),Qu);return}i.preventDefault(),i.stopPropagation();const e=i.deltaY/Math.abs(i.deltaY)*5*this.config.zoomSpeed;e!==0&&this.viewer.dynamics.zoom.step(-e,5)}__onFullscreenChange(){const i=this.viewer.isFullscreenEnabled();this.config.keyboard==="fullscreen"&&(i?this.viewer.startKeyboardControl():this.viewer.stopKeyboardControl()),this.viewer.dispatchEvent(new hr(i))}__resetMove(){this.step.set(Rt.IDLE),this.data.mouseX=0,this.data.mouseY=0,this.data.startMouseX=0,this.data.startMouseY=0}__startMoveZoom(i){this.viewer.stopAll(),this.__resetMove();const e=lc(i);this.step.set(Rt.MOVING),this.data.accumulatorFactor=this.config.moveInertia,{distance:this.data.pinchDist,center:{x:this.data.mouseX,y:this.data.mouseY}}=e}__stopMove(i,e,t,n=!1){this.step.is(Rt.CLICK)&&!this.__moveThresholdReached(i,e)&&this.__doClick(i,e,t,n),this.config.moveInertia&&(this.data.accumulatorFactor=Math.pow(this.config.moveInertia,.5)),this.__resetMove(),this.viewer.resetIdleTimer()}__doClick(i,e,t,n=!1){const s=this.viewer.container.getBoundingClientRect(),r=i-s.left,a=e-s.top,o=this.viewer.renderer.getIntersections({x:r,y:a}),c=o.find(l=>l.object.userData[Fn]);if(c){const l=this.viewer.dataHelper.vector3ToSphericalCoords(c.point),h={rightclick:n,originalEvent:t,target:Ha(t),clientX:i,clientY:e,viewerX:r,viewerY:a,yaw:l.yaw,pitch:l.pitch,objects:o.map(f=>f.object).filter(f=>!f.userData[Fn])};try{const f=this.viewer.dataHelper.sphericalCoordsToTextureCoords(h);Object.assign(h,f)}catch{}this.data.dblclickTimeout?(Math.abs(this.data.dblclickData.clientX-h.clientX)<this.moveThreshold&&Math.abs(this.data.dblclickData.clientY-h.clientY)<this.moveThreshold&&this.viewer.dispatchEvent(new Gf(this.data.dblclickData)),clearTimeout(this.data.dblclickTimeout),this.data.dblclickTimeout=null,this.data.dblclickData=null):(this.viewer.dispatchEvent(new Ff(h)),this.data.dblclickData=go(h),this.data.dblclickTimeout=setTimeout(()=>{this.data.dblclickTimeout=null,this.data.dblclickData=null},Ku))}}__handleObjectsEvents(i){if(!mf(this.state.objectsObservers)&&i.composedPath().includes(this.viewer.container)){const e=cf(this.viewer.container),t={x:i.clientX-e.x,y:i.clientY-e.y},n=this.viewer.renderer.getIntersections(t),s=(r,a,o)=>{this.viewer.dispatchEvent(new o(i,r,t,a))};for(const[r,a]of Object.entries(this.state.objectsObservers)){const o=n.find(c=>c.object.userData[r]);o?(a&&o.object!==a&&(s(a,r,fc),this.state.objectsObservers[r]=null),a?s(o.object,r,Kp):(this.state.objectsObservers[r]=o.object,s(o.object,r,Xp))):a&&(s(a,r,fc),this.state.objectsObservers[r]=null)}}}__doMove(i,e){if(this.step.is(Rt.CLICK)&&this.__moveThresholdReached(i,e))this.viewer.stopAll(),this.__resetMove(),this.step.set(Rt.MOVING),this.data.mouseX=i,this.data.mouseY=e,this.data.accumulatorFactor=this.config.moveInertia;else if(this.step.is(Rt.MOVING)){const t=(i-this.data.mouseX)*Math.cos(this.state.roll)-(e-this.data.mouseY)*Math.sin(this.state.roll),n=(e-this.data.mouseY)*Math.cos(this.state.roll)+(i-this.data.mouseX)*Math.sin(this.state.roll),s={yaw:this.config.moveSpeed*(t/this.state.size.width)*Be.degToRad(this.state.hFov),pitch:this.config.moveSpeed*(n/this.state.size.height)*Be.degToRad(this.state.vFov)};this.data.moveDelta.yaw+=s.yaw,this.data.moveDelta.pitch+=s.pitch,this.data.mouseX=i,this.data.mouseY=e}}__moveThresholdReached(i,e){return Math.abs(i-this.data.startMouseX)>=this.moveThreshold||Math.abs(e-this.data.startMouseY)>=this.moveThreshold}__doMoveZoom(i){if(this.step.is(Rt.MOVING)){i.preventDefault();const e=lc(i);this.__doMove(e.center.x,e.center.y),this.data.moveDelta.zoom+=this.config.zoomSpeed*((e.distance-this.data.pinchDist)/ei.pixelRatio),this.data.pinchDist=e.distance}}__applyMoveDelta(){if(Math.abs(this.data.moveDelta.yaw)>0||Math.abs(this.data.moveDelta.pitch)>0){const e=this.viewer.getPosition();this.viewer.rotate({yaw:e.yaw-this.data.moveDelta.yaw*(1-this.config.moveInertia),pitch:e.pitch+this.data.moveDelta.pitch*(1-this.config.moveInertia)}),this.data.moveDelta.yaw*=this.data.accumulatorFactor,this.data.moveDelta.pitch*=this.data.accumulatorFactor,Math.abs(this.data.moveDelta.yaw)<=.001&&(this.data.moveDelta.yaw=0),Math.abs(this.data.moveDelta.pitch)<=.001&&(this.data.moveDelta.pitch=0)}if(Math.abs(this.data.moveDelta.zoom)>0){const e=this.viewer.getZoomLevel();this.viewer.zoom(e+this.data.moveDelta.zoom*(1-this.config.moveInertia)),this.data.moveDelta.zoom*=this.config.moveInertia,Math.abs(this.data.moveDelta.zoom)<=.001&&(this.data.moveDelta.zoom=0)}}__clearMoveDelta(){this.data.moveDelta.yaw=0,this.data.moveDelta.pitch=0,this.data.moveDelta.zoom=0}};Ze.enabled=!1;var _a=new Ge,Ld=new rt,Id=new Hs,ew=class extends Br{constructor(i){super(i),this.frustumNeedsUpdate=!0,this.renderer=new fM(this.config.rendererParameters),this.renderer.setPixelRatio(ei.pixelRatio),this.renderer.outputColorSpace=br,this.renderer.toneMapping=Pc,this.renderer.domElement.className="psv-canvas",this.renderer.domElement.style.background=this.config.canvasBackground,this.scene=new Ba,this.camera=new di(50,16/9,.1,2*cn),this.camera.matrixAutoUpdate=!1;const e=new Yt(new Jn(cn).scale(-1,1,1),new pn({opacity:0,transparent:!0,depthTest:!1,depthWrite:!1}));e.userData={[Fn]:!0},this.scene.add(e),this.raycaster=new v_,this.frustum=new Gc,this.container=document.createElement("div"),this.container.className="psv-canvas-container",this.container.appendChild(this.renderer.domElement),this.viewer.container.appendChild(this.container),this.container.addEventListener("contextmenu",t=>t.preventDefault()),this.viewer.addEventListener(gr.type,this),this.viewer.addEventListener(hn.type,this),this.viewer.addEventListener(ur.type,this),this.viewer.addEventListener(fr.type,this),this.viewer.addEventListener(ai.type,this),this.hide()}get panoramaPose(){return this.mesh.rotation}get sphereCorrection(){return this.meshContainer.rotation}init(){this.show(),this.renderer.setAnimationLoop(i=>this.__renderLoop(i))}destroy(){this.renderer.setAnimationLoop(null),this.cleanScene(this.scene),this.renderer.dispose(),this.viewer.container.removeChild(this.container),this.viewer.removeEventListener(gr.type,this),this.viewer.removeEventListener(hn.type,this),this.viewer.removeEventListener(ur.type,this),this.viewer.removeEventListener(fr.type,this),this.viewer.removeEventListener(ai.type,this),super.destroy()}handleEvent(i){switch(i.type){case gr.type:this.__onSizeUpdated();break;case hn.type:this.__onZoomUpdated();break;case ur.type:this.__onPositionUpdated();break;case fr.type:this.__onPositionUpdated();break;case ai.type:i.containsOptions("fisheye")&&this.__onPositionUpdated(),i.containsOptions("canvasBackground")&&(this.renderer.domElement.style.background=this.config.canvasBackground);break}}hide(){this.container.style.opacity="0"}show(){this.container.style.opacity="1"}setCustomRenderer(i){i?this.customRenderer=i(this.renderer):this.customRenderer=null,this.viewer.needsUpdate()}__onSizeUpdated(){this.renderer.setSize(this.state.size.width,this.state.size.height),this.camera.aspect=this.state.aspect,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onZoomUpdated(){this.camera.fov=this.state.vFov,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onPositionUpdated(){this.camera.position.set(0,0,0),this.camera.lookAt(this.state.direction),this.config.fisheye&&this.camera.position.copy(this.state.direction).multiplyScalar(this.config.fisheye/2).negate(),this.camera.rotateZ(-this.state.roll),this.camera.updateMatrix(),this.camera.updateMatrixWorld(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__renderLoop(i){const e=this.timestamp?i-this.timestamp:0;this.timestamp=i,this.viewer.dispatchEvent(new cr(i,e)),this.viewer.dynamics.update(e),(this.state.needsUpdate||this.state.continuousUpdateCount>0)&&(this.state.needsUpdate=!1,(this.customRenderer||this.renderer).render(this.scene,this.camera),this.viewer.dispatchEvent(new Tp))}setTexture(i){this.meshContainer||(this.meshContainer=new rn,this.scene.add(this.meshContainer)),this.state.textureData&&this.viewer.adapter.disposeTexture(this.state.textureData),this.mesh&&(this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh)),this.mesh=this.viewer.adapter.createMesh(i.panoData),this.viewer.adapter.setTexture(this.mesh,i,!1),this.meshContainer.add(this.mesh),this.state.textureData=i,this.viewer.needsUpdate()}setPanoramaPose(i,e=this.mesh){const t=this.viewer.dataHelper.cleanPanoramaPose(i);e.rotation.set(-t.tilt,-t.pan,t.roll,"YXZ")}setSphereCorrection(i,e=this.meshContainer){const t=this.viewer.dataHelper.cleanSphereCorrection(i);e.rotation.set(t.tilt,t.pan,t.roll,"YXZ")}transition(i,e,t){const n=t.effect==="fade"||t.rotation,s=!zt(e.position),r=!zt(e.zoom),a=new Jc(s?this.viewer.dataHelper.cleanPosition(e.position):void 0,e.zoom);this.viewer.dispatchEvent(a);const o=new rn,c=this.viewer.adapter.createMesh(i.panoData);if(this.viewer.adapter.setTexture(c,i,!0),this.viewer.adapter.setTextureOpacity(c,0),this.setPanoramaPose(i.panoData,c),this.setSphereCorrection(e.sphereCorrection,o),s&&!t.rotation){const m=this.viewer.getPosition(),v=new P(0,1,0);o.rotateOnWorldAxis(v,a.position.yaw-m.yaw);const y=new P(0,1,0).cross(this.camera.getWorldDirection(new P)).normalize();o.rotateOnWorldAxis(y,a.position.pitch-m.pitch)}o.add(c),this.scene.add(o);const l=new Ci;this.renderer.setRenderTarget(l),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),l.dispose();const{duration:h,properties:f}=this.viewer.dataHelper.getAnimationProperties(t.speed,t.rotation?a.position:null,n?a.zoomLevel:null),p=new $a({properties:{...f,opacity:{start:0,end:1}},duration:h,easing:"inOutCubic",onTick:m=>{switch(t.effect){case"fade":this.viewer.adapter.setTextureOpacity(c,m.opacity);break;case"black":case"white":m.opacity<.5?this.renderer.toneMappingExposure=t.effect==="black"?Be.mapLinear(m.opacity,0,.5,1,0):Be.mapLinear(m.opacity,0,.5,1,5):(this.renderer.toneMappingExposure=t.effect==="black"?Be.mapLinear(m.opacity,.5,1,0,1):Be.mapLinear(m.opacity,.5,1,5,1),this.mesh.visible=!1,this.viewer.adapter.setTextureOpacity(c,1),r&&!n&&this.viewer.dynamics.zoom.setValue(a.zoomLevel));break}s&&t.rotation&&this.viewer.dynamics.position.setValue({yaw:m.yaw,pitch:m.pitch}),r&&n&&this.viewer.dynamics.zoom.setValue(m.zoom),this.viewer.needsUpdate()}});return p.then(m=>{o.remove(c),this.scene.remove(o),m?(this.viewer.adapter.disposeTexture(this.state.textureData),this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh),this.mesh=c,this.meshContainer.add(c),this.state.textureData=i,this.setPanoramaPose(i.panoData),this.setSphereCorrection(e.sphereCorrection),s&&!t.rotation&&this.viewer.rotate(e.position)):(this.viewer.adapter.disposeTexture(i),this.viewer.adapter.disposeMesh(c))}),p}getIntersections(i){_a.x=2*i.x/this.state.size.width-1,_a.y=-2*i.y/this.state.size.height+1,this.raycaster.setFromCamera(_a,this.camera);const e=this.raycaster.intersectObjects(this.scene.children,!0).filter(t=>t.object.visible).filter(t=>t.object.isMesh&&!!t.object.userData);return this.customRenderer?.getIntersections&&e.push(...this.customRenderer.getIntersections(this.raycaster,_a)),e}isObjectVisible(i){if(!i)return!1;if(this.frustumNeedsUpdate&&(Ld.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),this.frustum.setFromProjectionMatrix(Ld),this.frustumNeedsUpdate=!1),i.isVector3)return this.frustum.containsPoint(i);if(i.isMesh&&i.geometry){const e=i;return e.geometry.boundingBox||e.geometry.computeBoundingBox(),Id.copy(e.geometry.boundingBox).applyMatrix4(e.matrixWorld),this.frustum.intersectsBox(Id)}else return i.isObject3D?this.frustum.intersectsObject(i):!1}addObject(i){this.scene.add(i)}removeObject(i){this.scene.remove(i)}cleanScene(i){const e=t=>{t.map?.dispose(),t.uniforms&&Object.values(t.uniforms).forEach(n=>{n.value?.dispose?.()}),t.dispose()};i.traverse(t=>{t.geometry?.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(n=>{e(n)}):e(t.material)),t instanceof Ba||t.dispose?.(),t!==i&&this.cleanScene(t)})}},tw=class extends ku{constructor(){super(...arguments),this._abortController=new AbortController}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}load(i,e,t,n){const s=this._abortController.signal,r=super.load(i,c=>{o(),e(c)},t,c=>{if(o(),s.aborted){const l=new Error;l.name="AbortError",l.message="The operation was aborted.",n(l)}else n(c)});function a(){r.src=""}function o(){s.removeEventListener("abort",a,!1)}return s.addEventListener("abort",a,!1),r}},iw=class extends Br{constructor(i){super(i),this.fileLoader=new f_,this.fileLoader.setResponseType("blob"),this.imageLoader=new tw}destroy(){this.abortLoading(),super.destroy()}abortLoading(){this.fileLoader.abort?.(),this.imageLoader.abort()}loadFile(i,e,t){const n=bs.get(i,t);if(n){if(n instanceof Blob)return e?.(100),Promise.resolve(n);bs.remove(i,t)}this.config.requestHeaders&&this.fileLoader.setRequestHeader(this.config.requestHeaders(i)),this.fileLoader.setWithCredentials(this.config.withCredentials(i));let s=0;return e?.(s),this.fileLoader.loadAsync(i,r=>{if(r.lengthComputable){const a=r.loaded/r.total*100;a>s&&(s=a,e?.(s))}}).then(r=>(s=100,e?.(s),bs.add(i,t,r),r))}loadImage(i,e,t){const n=bs.get(i,t);return n?(e?.(100),n instanceof Blob?this.blobToImage(n):Promise.resolve(n)):!e&&!this.config.requestHeaders?(this.imageLoader.setWithCredentials(this.config.withCredentials(i)),this.imageLoader.loadAsync(i).then(s=>(bs.add(i,t,s),s))):this.loadFile(i,e,t).then(s=>this.blobToImage(s))}blobToImage(i){return new Promise((e,t)=>{const n=document.createElement("img");n.onload=()=>{URL.revokeObjectURL(n.src),e(n)},n.onerror=t,n.src=URL.createObjectURL(i)})}preloadPanorama(i){return this.viewer.adapter.supportsPreload(i)?this.viewer.adapter.loadTexture(i,!1):Promise.reject(new re("Current adapter does not support preload"))}dispatchProgress(i){this.viewer.loader.setProgress(i),this.viewer.dispatchEvent(new ap(Math.round(i)))}},nw=class extends Br{constructor(i){super(i),this.zoom=new sr(e=>{this.viewer.state.vFov=this.viewer.dataHelper.zoomLevelToFov(e),this.viewer.state.hFov=this.viewer.dataHelper.vFovToHFov(this.viewer.state.vFov),this.viewer.dispatchEvent(new hn(e))},{defaultValue:this.viewer.config.defaultZoomLvl,min:0,max:100,wrap:!1}),this.position=new bf(e=>{this.viewer.dataHelper.sphericalCoordsToVector3(e,this.viewer.state.direction),this.viewer.dispatchEvent(new ur(e))},{yaw:new sr(null,{defaultValue:this.config.defaultYaw,min:0,max:2*Math.PI,wrap:!0}),pitch:new sr(null,{defaultValue:this.config.defaultPitch,min:-Math.PI/2,max:Math.PI/2,wrap:!1})}),this.roll=new sr(e=>{this.viewer.state.roll=e,this.viewer.dispatchEvent(new fr(e))},{defaultValue:0,min:-Math.PI,max:Math.PI,wrap:!1}),this.updateSpeeds()}updateSpeeds(){this.zoom.setSpeed(this.config.zoomSpeed*50),this.position.setSpeed(Be.degToRad(this.config.moveSpeed*50)),this.roll.setSpeed(Be.degToRad(this.config.moveSpeed*50))}update(i){this.zoom.update(i),this.position.update(i),this.roll.update(i)}},sw=class{constructor(){this.ready=!1,this.needsUpdate=!1,this.continuousUpdateCount=0,this.keyboardEnabled=!1,this.direction=new P(0,0,cn),this.roll=0,this.vFov=60,this.hFov=60,this.aspect=1,this.animation=null,this.transitionAnimation=null,this.loadingPromise=null,this.idleTime=-1,this.objectsObservers={},this.size={width:0,height:0}}},rw=class extends Cf{constructor(i){if(super(),this.plugins={},this.children=[],this.parent=af(i.container),!this.parent)throw new re('"container" element not found.');this.parent[Fn]=this,this.container=document.createElement("div"),this.container.classList.add("psv-container"),this.parent.appendChild(this.container),Mf(this.parent),Ef(this.container,"core"),this.state=new sw,this.config=VM(i),this.__setSize(this.config.size),this.overlay=new XM(this);try{ei.load()}catch(e){console.error(e),this.showError(this.config.lang.webglError);return}bs.init(),this.adapter=new this.config.adapter[0](this,this.config.adapter[1]),this.renderer=new ew(this),this.textureLoader=new iw(this),this.eventsHandler=new QM(this),this.dataHelper=new KM(this),this.dynamics=new nw(this),this.adapter.init?.(),this.loader=new GM(this),this.navbar=new HM(this),this.panel=new qM(this),this.notification=new WM(this),this.autoSize(),this.setCursor(null),Yc(ei.isTouchEnabled,e=>{mo(this.container,"psv--is-touch",e)}),this.config.plugins.forEach(([e,t])=>{this.plugins[e.id]=new e(this,t)});for(const e of Object.values(this.plugins))e.init?.();this.config.navbar&&this.navbar.setButtons(this.config.navbar),this.state.loadingPromise||(this.config.panorama?this.setPanorama(this.config.panorama,{sphereCorrection:this.config.sphereCorrection,panoData:this.config.panoData}):this.loader.show())}destroy(){this.stopAll(),this.stopKeyboardControl(),this.exitFullscreen();for(const[i,e]of Object.entries(this.plugins))e.destroy(),delete this.plugins[i];this.children.slice().forEach(i=>i.destroy()),this.children.length=0,this.eventsHandler?.destroy(),this.renderer?.destroy(),this.textureLoader?.destroy(),this.dataHelper?.destroy(),this.adapter?.destroy(),this.dynamics?.destroy(),this.parent.removeChild(this.container),delete this.parent[Fn]}init(){this.eventsHandler.init(),this.renderer.init(),this.config.navbar&&this.navbar.show(),this.config.keyboard==="always"&&this.startKeyboardControl(),this.resetIdleTimer(),this.state.ready=!0,this.dispatchEvent(new pr)}resetIdleTimer(){this.state.idleTime=performance.now()}disableIdleTimer(){this.state.idleTime=-1}getPlugin(i){if(typeof i=="string")return this.plugins[i];{const e=pc(i);return e?this.plugins[e.id]:null}}getPosition(){return this.dataHelper.cleanPosition(this.dynamics.position.current)}getZoomLevel(){return this.dynamics.zoom.current}getSize(){return{...this.state.size}}isFullscreenEnabled(){return hf(this.parent,ei.isIphone)}needsUpdate(){this.state.needsUpdate=!0}needsContinuousUpdate(i){i?this.state.continuousUpdateCount++:this.state.continuousUpdateCount>0&&this.state.continuousUpdateCount--}autoSize(){(this.container.clientWidth!==this.state.size.width||this.container.clientHeight!==this.state.size.height)&&(this.state.size.width=Math.round(this.container.clientWidth),this.state.size.height=Math.round(this.container.clientHeight),this.state.aspect=this.state.size.width/this.state.size.height,this.state.hFov=this.dataHelper.vFovToHFov(this.state.vFov),this.dispatchEvent(new gr(this.getSize())),this.navbar.autoSize())}setPanorama(i,e={}){this.textureLoader.abortLoading(),this.state.transitionAnimation?.cancel();const t=this.dataHelper.getTransitionOptions(e);e.showLoader===void 0&&(e.showLoader=!0),e.caption===void 0&&(e.caption=this.config.caption),e.description===void 0&&(e.description=this.config.description),!e.panoData&&typeof this.config.panoData=="function"&&(e.panoData=this.config.panoData),e.sphereCorrection===void 0&&(e.sphereCorrection=this.config.sphereCorrection),this.hideError(),this.resetIdleTimer(),this.config.panorama=i,this.config.caption=e.caption,this.config.description=e.description,this.config.sphereCorrection=e.sphereCorrection,(typeof this.config.panoData!="function"||typeof e.panoData=="function")&&(this.config.panoData=e.panoData);const n=r=>{if(_f(r))return!1;if(this.loader.hide(),this.state.loadingPromise=null,r)throw this.navbar.setCaption(null),this.showError(this.config.lang.loadError),console.error(r),this.dispatchEvent(new pp(i,r)),r;return this.navbar.setCaption(this.config.caption),!0};this.navbar.setCaption(`<em>${this.config.lang.loading}</em>`),(e.showLoader||!this.state.ready)&&this.loader.show(),this.dispatchEvent(new cp(i));const s=this.adapter.loadTexture(this.config.panorama,!0,e.panoData).then(r=>{if(r.panorama!==this.config.panorama)throw this.adapter.disposeTexture(r),cc();const a=this.dataHelper.cleanPanoramaOptions(e,r.panoData);return(!zt(a.zoom)||!zt(a.position))&&this.stopAll(),{textureData:r,cleanOptions:a}});return!t||!this.state.ready||!this.adapter.supportsTransition(this.config.panorama)?this.state.loadingPromise=s.then(({textureData:r,cleanOptions:a})=>{this.renderer.show(),this.renderer.setTexture(r),this.renderer.setPanoramaPose(r.panoData),this.renderer.setSphereCorrection(e.sphereCorrection),this.state.ready||this.init(),this.dispatchEvent(new Is(r)),zt(a.zoom)||this.zoom(a.zoom),zt(a.position)||this.rotate(a.position)}).then(()=>n(),r=>n(r)):this.state.loadingPromise=s.then(({textureData:r,cleanOptions:a})=>(this.loader.hide(),this.dispatchEvent(new Is(r)),this.state.transitionAnimation=this.renderer.transition(r,a,t),this.state.transitionAnimation)).then(r=>{if(this.state.transitionAnimation=null,this.dispatchEvent(new vp(r)),!r)throw cc()}).then(()=>n(),r=>n(r)),this.state.loadingPromise}setOptions(i){const e={...this.config,...i};for(let[t,n]of Object.entries(i)){if(!(t in Li)){Vt(`Unknown option ${t}`);continue}if(t in Pd){Vt(Pd[t]);continue}switch(t in mc&&(n=mc[t](n,{rawConfig:e,defValue:Li[t]})),this.config[t]=n,t){case"mousemove":this.state.cursorOverride||this.setCursor(null);break;case"caption":this.navbar.setCaption(this.config.caption);break;case"size":this.resize(this.config.size);break;case"sphereCorrection":this.renderer.setSphereCorrection(this.config.sphereCorrection);break;case"navbar":case"lang":this.navbar.setButtons(this.config.navbar);break;case"moveSpeed":case"zoomSpeed":this.dynamics.updateSpeeds();break;case"minFov":case"maxFov":this.dynamics.zoom.setValue(this.dataHelper.fovToZoomLevel(this.state.vFov)),this.dispatchEvent(new hn(this.getZoomLevel()));break;case"keyboard":this.config.keyboard==="always"?this.startKeyboardControl():this.stopKeyboardControl();break}}this.needsUpdate(),this.dispatchEvent(new ai(Object.keys(i)))}setOption(i,e){this.setOptions({[i]:e})}showError(i){this.overlay.show({id:Gt.ERROR,image:ZM,title:i,dismissible:!1})}hideError(){this.overlay.hide(Gt.ERROR)}rotate(i){const e=new Uf(this.dataHelper.cleanPosition(i));this.dispatchEvent(e),!e.defaultPrevented&&this.dynamics.position.setValue(e.position)}zoom(i){this.dynamics.zoom.setValue(i)}zoomIn(i=1){this.dynamics.zoom.step(i)}zoomOut(i=1){this.dynamics.zoom.step(-i)}animate(i){const e=Zc(i),t=!zt(i.zoom),n=new Jc(e?this.dataHelper.cleanPosition(i):void 0,i.zoom);if(this.dispatchEvent(n),n.defaultPrevented)return;this.stopAll();const{duration:s,properties:r}=this.dataHelper.getAnimationProperties(i.speed,n.position,n.zoomLevel);return s?(this.state.animation=new $a({properties:r,duration:s,easing:i.easing||"inOutSine",onTick:a=>{e&&this.dynamics.position.setValue({yaw:a.yaw,pitch:a.pitch}),t&&this.dynamics.zoom.setValue(a.zoom)}}),this.state.animation.then(()=>{this.state.animation=null,this.resetIdleTimer()}),this.state.animation):(e&&this.rotate(n.position),t&&this.zoom(n.zoomLevel),new $a(null))}stopAnimation(){return this.state.animation?(this.state.animation.cancel(),this.state.animation):Promise.resolve()}resize(i){this.__setSize(i),this.autoSize()}__setSize(i){["width","height"].forEach(e=>{i?.[e]&&(/^[0-9.]+$/.test(i[e])&&(i[e]+="px"),this.parent.style[e]=i[e])})}enterFullscreen(){this.isFullscreenEnabled()||df(this.parent,ei.isIphone)}exitFullscreen(){this.isFullscreenEnabled()&&uf(ei.isIphone)}toggleFullscreen(){this.isFullscreenEnabled()?this.exitFullscreen():this.enterFullscreen()}startKeyboardControl(){this.state.keyboardEnabled=!0}stopKeyboardControl(){this.state.keyboardEnabled=!1}createTooltip(i){return new YM(this,i)}setCursor(i){this.state.cursorOverride=i,i?this.container.style.cursor=i:this.container.style.cursor=this.config.mousemove?"move":"default"}observeObjects(i){this.state.objectsObservers[i]||(this.state.objectsObservers[i]=null)}unobserveObjects(i){delete this.state.objectsObservers[i]}stopAll(){return this.dispatchEvent(new vr),this.disableIdleTimer(),this.stopAnimation()}};var aw=Object.defineProperty,ow=(i,e)=>{for(var t in e)aw(i,t,{get:e[t],enumerable:!0})},lw={};ow(lw,{AutorotateEvent:()=>Ds});var dm=class um extends zn{constructor(e){super(um.type),this.autorotateEnabled=e}};dm.type="autorotate";var Ds=dm,cw=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" overflow="visible"><g fill="currentColor" transform-origin="center" transform="scale(1.3)"><path d="M40.5 14.1c-.1-.1-1.2-.5-2.898-1-.102 0-.202-.1-.202-.2C34.5 6.5 28 2 20.5 2S6.6 6.5 3.7 12.9c0 .1-.1.1-.2.2-1.7.6-2.8 1-2.9 1l-.6.3v12.1l.6.2c.1 0 1.1.399 2.7.899.1 0 .2.101.2.199C6.3 34.4 12.9 39 20.5 39c7.602 0 14.102-4.6 16.9-11.1 0-.102.1-.102.199-.2 1.699-.601 2.699-1 2.801-1l.6-.3V14.3l-.5-.2zM6.701 11.5C9.7 7 14.8 4 20.5 4c5.8 0 10.9 3 13.8 7.5.2.3-.1.6-.399.5-3.799-1-8.799-2-13.6-2-4.7 0-9.5 1-13.2 2-.3.1-.5-.2-.4-.5zM25.1 20.3L18.7 24c-.3.2-.7 0-.7-.5v-7.4c0-.4.4-.6.7-.4l6.399 3.8c.301.1.301.6.001.8zm9.4 8.901A16.421 16.421 0 0 1 20.5 37c-5.9 0-11.1-3.1-14-7.898-.2-.302.1-.602.4-.5 3.9 1 8.9 2.1 13.6 2.1 5 0 9.9-1 13.602-2 .298-.1.5.198.398.499z"/></g><!--Created by Nick Bluth from the Noun Project--></svg>
`,hw=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" overflow="visible"><g fill="currentColor" transform-origin="center" transform="scale(1.3)"><path d="M40.5 14.1c-.1-.1-1.2-.5-2.899-1-.101 0-.2-.1-.2-.2C34.5 6.5 28 2 20.5 2S6.6 6.5 3.7 12.9c0 .1-.1.1-.2.2-1.7.6-2.8 1-2.9 1l-.6.3v12.1l.6.2c.1 0 1.1.4 2.7.9.1 0 .2.1.2.199C6.3 34.4 12.9 39 20.5 39c7.601 0 14.101-4.6 16.9-11.1 0-.101.1-.101.2-.2 1.699-.6 2.699-1 2.8-1l.6-.3V14.3l-.5-.2zM20.5 4c5.8 0 10.9 3 13.8 7.5.2.3-.1.6-.399.5-3.8-1-8.8-2-13.6-2-4.7 0-9.5 1-13.2 2-.3.1-.5-.2-.4-.5C9.7 7 14.8 4 20.5 4zm0 33c-5.9 0-11.1-3.1-14-7.899-.2-.301.1-.601.4-.5 3.9 1 8.9 2.1 13.6 2.1 5 0 9.9-1 13.601-2 .3-.1.5.2.399.5A16.422 16.422 0 0 1 20.5 37zm18.601-12.1c0 .1-.101.3-.2.3-2.5.9-10.4 3.6-18.4 3.6-7.1 0-15.6-2.699-18.3-3.6C2.1 25.2 2 25 2 24.9V16c0-.1.1-.3.2-.3 2.6-.9 10.6-3.6 18.2-3.6 7.5 0 15.899 2.7 18.5 3.6.1 0 .2.2.2.3v8.9z"/><path d="M18.7 24l6.4-3.7c.3-.2.3-.7 0-.8l-6.4-3.8c-.3-.2-.7 0-.7.4v7.4c0 .5.4.7.7.5z"/></g><!--Created by Nick Bluth from the Noun Project--></svg>
`,ih=class extends Xt{constructor(i){super(i,{className:"psv-autorotate-button",hoverScale:!0,collapsable:!0,tabbable:!0,icon:hw,iconActive:cw}),this.plugin=this.viewer.getPlugin("autorotate"),this.plugin?.addEventListener(Ds.type,this)}destroy(){this.plugin?.removeEventListener(Ds.type,this),super.destroy()}isSupported(){return!!this.plugin}handleEvent(i){i instanceof Ds&&this.toggleActive(i.autorotateEnabled)}onClick(){this.plugin.isEnabled()&&this.plugin.disableOnIdle(),this.plugin.toggle()}};ih.id="autorotate";var dw=Q.getConfigParser({autostartDelay:2e3,autostartOnIdle:!0,autorotateSpeed:Q.parseSpeed("2rpm"),autorotatePitch:null,autorotateZoomLvl:null,keypoints:null,startFromClosest:!0},{autostartOnIdle:(i,{rawConfig:e})=>i&&Q.isNil(e.autostartDelay)?(Q.logWarn("autostartOnIdle requires a non null autostartDelay"),!1):i,autorotateSpeed:i=>Q.parseSpeed(i),autorotatePitch:i=>Q.isNil(i)?null:Q.parseAngle(i,!0),autorotateZoomLvl:i=>Q.isNil(i)?null:Be.clamp(i,0,100)}),cl=16;function Qs(i){return[i.yaw,i.pitch]}var zr=class fm extends kr{constructor(e,t){super(e,t),this.state={initialStart:!0,disableOnIdle:!1,enabled:!1,idx:-1,curve:[],startStep:null,endStep:null,startTime:null,stepDuration:null,remainingPause:null,lastTime:null,tooltip:null},this.state.initialStart=!Q.isNil(this.config.autostartDelay)}static withConfig(e){return[fm,e]}init(){super.init(),this.video=this.viewer.getPlugin("video"),this.markers=this.viewer.getPlugin("markers"),this.config.keypoints&&(this.setKeypoints(this.config.keypoints),delete this.config.keypoints),this.viewer.addEventListener(se.StopAllEvent.type,this),this.viewer.addEventListener(se.BeforeRenderEvent.type,this),this.video||this.viewer.addEventListener(se.KeypressEvent.type,this)}destroy(){this.viewer.removeEventListener(se.StopAllEvent.type,this),this.viewer.removeEventListener(se.BeforeRenderEvent.type,this),this.viewer.removeEventListener(se.KeypressEvent.type,this),delete this.video,delete this.markers,delete this.keypoints,super.destroy()}handleEvent(e){switch(e.type){case se.StopAllEvent.type:this.stop();break;case se.BeforeRenderEvent.type:{this.__beforeRender(e.timestamp);break}case se.KeypressEvent.type:this.__onKeyPress(e);break}}setKeypoints(e){if(!e)this.keypoints=null;else{if(e.length<2)throw new re("At least two points are required");this.keypoints=e.map((t,n)=>{const s={position:null,markerId:null,pause:0,tooltip:null};let r;if(typeof t=="string"?s.markerId=t:Q.isExtendedPosition(t)?r=t:(s.markerId=t.markerId,s.pause=t.pause,r=t.position,t.tooltip&&typeof t.tooltip=="object"?s.tooltip=t.tooltip:typeof t.tooltip=="string"&&(s.tooltip={content:t.tooltip})),s.markerId){if(!this.markers)throw new re(`Keypoint #${n} references a marker but the markers plugin is not loaded`);const a=this.markers.getMarker(s.markerId);s.position=Qs(a.state.position)}else if(r)s.position=Qs(this.viewer.dataHelper.cleanPosition(r));else throw new re(`Keypoint #${n} is missing marker or position`);return s})}this.isEnabled()&&(this.stop(),this.start())}isEnabled(){return this.state.enabled}start(){this.isEnabled()||(this.viewer.stopAll(),this.keypoints?this.config.startFromClosest&&this.__shiftKeypoints():this.__animate(),this.state.initialStart=!1,this.state.disableOnIdle=!1,this.state.enabled=!0,this.dispatchEvent(new Ds(!0)))}stop(){this.isEnabled()&&(this.__hideTooltip(),this.__reset(),this.viewer.stopAnimation(),this.viewer.dynamics.position.stop(),this.viewer.dynamics.zoom.stop(),this.state.enabled=!1,this.dispatchEvent(new Ds(!1)))}toggle(){this.isEnabled()?this.stop():this.start()}reverse(){this.isEnabled()&&!this.keypoints&&(this.config.autorotateSpeed=-this.config.autorotateSpeed,this.__animate())}disableOnIdle(){this.state.disableOnIdle=!0}__animate(){let e;Q.isNil(this.config.autorotateZoomLvl)?e=Promise.resolve(!0):e=this.viewer.animate({zoom:this.config.autorotateZoomLvl,speed:`${this.viewer.config.zoomSpeed*2}rpm`}),e.then(t=>{t&&(this.viewer.dynamics.position.roll({yaw:this.config.autorotateSpeed<0},Math.abs(this.config.autorotateSpeed/this.viewer.config.moveSpeed)),Q.isNil(this.config.autorotatePitch)||this.viewer.dynamics.position.goto({pitch:this.config.autorotatePitch},Math.abs(this.config.autorotateSpeed/this.viewer.config.moveSpeed)))})}__reset(){this.state.idx=-1,this.state.curve=[],this.state.startStep=null,this.state.endStep=null,this.state.startTime=null,this.state.stepDuration=null,this.state.remainingPause=null,this.state.lastTime=null,this.state.tooltip=null}__beforeRender(e){(this.state.initialStart||this.config.autostartOnIdle&&!this.state.disableOnIdle)&&this.viewer.state.idleTime>0&&e-this.viewer.state.idleTime>this.config.autostartDelay&&this.start(),this.isEnabled()&&this.keypoints&&(this.state.startTime||(this.state.endStep=Qs(this.viewer.getPosition()),this.__nextStep(),this.state.startTime=e,this.state.lastTime=e),this.__nextFrame(e))}__shiftKeypoints(){const e=Qs(this.viewer.getPosition()),t=this.__findMinIndex(this.keypoints,n=>Q.greatArcDistance(n.position,e));this.keypoints.push(...this.keypoints.splice(0,t))}__incrementIdx(){this.state.idx++,this.state.idx===this.keypoints.length&&(this.state.idx=0)}__showTooltip(){const e=this.keypoints[this.state.idx];if(e.tooltip){const t=this.viewer.dataHelper.vector3ToViewerCoords(this.viewer.state.direction);this.state.tooltip=this.viewer.createTooltip({content:e.tooltip.content,position:e.tooltip.position,top:t.y,left:t.x})}else if(e.markerId){const t=this.markers.getMarker(e.markerId);t.showTooltip(),this.state.tooltip=t.tooltip}}__hideTooltip(){if(this.state.tooltip){const e=this.keypoints[this.state.idx];e.tooltip?this.state.tooltip.hide():e.markerId&&this.markers.getMarker(e.markerId).hideTooltip(),this.state.tooltip=null}}__nextPoint(){const e=[];if(this.state.idx===-1){const r=Qs(this.viewer.getPosition());e.push(r,r,this.keypoints[0].position,this.keypoints[1].position)}else for(let r=-1;r<3;r++){const a=this.state.idx+r<0?this.keypoints[this.keypoints.length-1]:this.keypoints[(this.state.idx+r)%this.keypoints.length];e.push(a.position)}const t=[new Ge(e[0][0],e[0][1])];let n=0;for(let r=1;r<=3;r++){const a=e[r-1][0]-e[r][0];a>Math.PI?n+=1:a<-Math.PI&&(n-=1),n!==0&&r===1&&(t[0].x-=n*2*Math.PI,n=0),t.push(new Ge(e[r][0]+n*2*Math.PI,e[r][1]))}const s=new t_(t).getPoints(cl*3).map(r=>[r.x,r.y]);this.state.curve=s.slice(cl+1,cl*2+1),this.state.idx!==-1?(this.state.remainingPause=this.keypoints[this.state.idx].pause,this.state.remainingPause?this.__showTooltip():this.__incrementIdx()):this.__incrementIdx()}__nextStep(){this.state.curve.length===0&&(this.__nextPoint(),this.state.endStep[0]=Q.parseAngle(this.state.endStep[0])),this.state.startStep=this.state.endStep,this.state.endStep=this.state.curve.shift();const e=Q.greatArcDistance(this.state.startStep,this.state.endStep);this.state.stepDuration=e*1e3/Math.abs(this.config.autorotateSpeed),e===0&&this.__nextStep()}__nextFrame(e){const t=e-this.state.lastTime;if(this.state.lastTime=e,this.state.remainingPause){if(this.state.remainingPause=Math.max(0,this.state.remainingPause-t),this.state.remainingPause>0)return;this.__hideTooltip(),this.__incrementIdx(),this.state.startTime=e}let n=(e-this.state.startTime)/this.state.stepDuration;n>=1&&(this.__nextStep(),n=0,this.state.startTime=e),this.viewer.rotate({yaw:this.state.startStep[0]+(this.state.endStep[0]-this.state.startStep[0])*n,pitch:this.state.startStep[1]+(this.state.endStep[1]-this.state.startStep[1])*n})}__findMinIndex(e,t){let n=0,s=Number.MAX_VALUE;return e.forEach((r,a)=>{const o=t(r);o<s&&(s=o,n=a)}),n}__onKeyPress(e){this.viewer.state.keyboardEnabled&&e.matches(Ai.KEY_CODES.Space)&&(this.toggle(),e.preventDefault())}};zr.id="autorotate";zr.VERSION="5.15.1";zr.configParser=dw;zr.readonlyOptions=["keypoints"];var uw=zr;Fr(ih,"start");Li.lang[ih.id]="Automatic rotation";var fw=class{constructor(i,e,t){this.id=i,this.priority=e,this.fn=t,this.status=1}start(){return this.status=2,this.fn(this).then(()=>{this.status=4},()=>{this.status=5})}cancel(){this.status=3}isCancelled(){return this.status===3}},pw=class{constructor(i=8){this.concurency=i,this.runningTasks={},this.tasks={}}enqueue(i){this.tasks[i.id]=i}clear(){Object.values(this.tasks).forEach(i=>i.cancel()),this.tasks={},this.runningTasks={}}setPriority(i,e){const t=this.tasks[i];t&&(t.priority=e,t.status===0&&(t.status=1))}disableAllTasks(){Object.values(this.tasks).forEach(i=>{i.status=0})}start(){if(Object.keys(this.runningTasks).length>=this.concurency)return;const i=Object.values(this.tasks).filter(e=>e.status===1).sort((e,t)=>t.priority-e.priority).pop();i&&(this.runningTasks[i.id]=!0,i.start().then(()=>{i.isCancelled()||(delete this.tasks[i.id],delete this.runningTasks[i.id],this.start())}),this.start())}};function mw(){const i=new OffscreenCanvas(512,512),e=i.getContext("2d");return e.fillStyle="#333",e.fillRect(0,0,i.width,i.height),e.font=`${i.width/5}px serif`,e.fillStyle="#a22",e.textAlign="center",e.textBaseline="middle",e.fillText("⚠",i.width/2,i.height/2),new pn({map:Q.createTexture(i)})}function gw(i){const e=new i_(i),t=new jv(e);return t.material.depthTest=!1,t.material.depthWrite=!1,t.material.opacity=.25,t.material.transparent=!0,t}var Dd=["dodgerblue","limegreen","indianred"];function vw(i,e,t){const n=document.createElement("canvas");n.width=i.width,n.height=i.height;const s=n.getContext("2d");s.fillStyle=Dd[e%Dd.length],s.fillRect(0,0,n.width,n.height),s.globalCompositeOperation="multiply",s.drawImage(i,0,0);const r=i.width/7;return s.globalCompositeOperation="source-over",s.fillStyle="white",s.font=`${r}px monospace`,s.textAlign="center",t.split(`
`).forEach((a,o)=>{s.fillText(a,i.width/2,i.height/2+r*(.3+o))}),n}function nh(i){return!!i.levels}function pm(i,e,t){return{...i,level:e,colSize:i.width/i.cols,rowSize:i.width/2/i.rows,facesByCol:t.SPHERE_SEGMENTS/i.cols,facesByRow:t.SPHERE_HORIZONTAL_SEGMENTS/i.rows}}function Nd(i,e,t,n,s){let r,a;return nh(i)?(n?(a=i.levels.findIndex(o=>{const c=o.width/360*e,l=o.width/2/180*t;return c>=n.width&&l>=n.height}),a===-1&&(a=i.levels.length-1)):a=0,r=i.levels[a]):(a=0,r={...i}),pm(r,a,s)}function _w(i,e,t){return!nh(i)||!i.levels[e]?null:pm(i.levels[e],e,t)}function xw(i,e){if(typeof i!="object"||!i.tileUrl)throw new re("Invalid panorama configuration, are you using the right adapter?");nh(i)?(i.levels.forEach(t=>{Ud(t,e),"zoomRange"in t&&Q.logWarn('EquirectangularTilesAdapter: "zoomRange" property is deprecated and must be removed')}),i.levels.sort((t,n)=>t.width-n.width)):Ud(i,e)}function Ud(i,e){if(!i.width||!i.cols||!i.rows)throw new re("Invalid panorama configuration, are you using the right adapter?");if(i.cols>e.SPHERE_SEGMENTS)throw new re(`Panorama cols must not be greater than ${e.SPHERE_SEGMENTS}.`);if(i.rows>e.SPHERE_HORIZONTAL_SEGMENTS)throw new re(`Panorama rows must not be greater than ${e.SPHERE_HORIZONTAL_SEGMENTS}.`);if(!Be.isPowerOfTwo(i.cols)||!Be.isPowerOfTwo(i.rows))throw new re("Panorama cols and rows must be powers of 2.")}function yw(i,e){for(let t=0;t<e.cols;t++){const n=i.tileUrl(t,e.rows/2,e.level);if(n)return n}return i.tileUrl.toString()}var er=6,si=3,Ew="uv",Mw="position",Od=-1;function hl(i){return`${i.col}x${i.row}/${i.config.level}`}function xa(i){return i.children}var ww=Q.getConfigParser({resolution:64,showErrorTile:!0,baseBlur:!0,antialias:!0,debug:!1,useXmpData:!1}),ya=new P,So=class mm extends Eo{constructor(e,t){super(e),this.state={tileConfig:null,tiles:{},faces:{},geom:null,materials:[],errorMaterial:null,inTransition:!1},this.queue=new pw,this.config=ww(t),this.adapter=new Qc(this.viewer,{shader:!1,resolution:this.config.resolution}),this.SPHERE_SEGMENTS=this.config.resolution,this.SPHERE_HORIZONTAL_SEGMENTS=this.SPHERE_SEGMENTS/2,this.NB_VERTICES=2*this.SPHERE_SEGMENTS*si+(this.SPHERE_HORIZONTAL_SEGMENTS-2)*this.SPHERE_SEGMENTS*er,this.NB_GROUPS=this.SPHERE_SEGMENTS*this.SPHERE_HORIZONTAL_SEGMENTS,this.viewer.config.requestHeaders&&Q.logWarn('EquirectangularTilesAdapter fallbacks to file loader because "requestHeaders" where provided. Consider removing "requestHeaders" if you experience performances issues.')}static withConfig(e){return[mm,e]}init(){super.init(),this.viewer.addEventListener(se.TransitionDoneEvent.type,this),this.viewer.addEventListener(se.PositionUpdatedEvent.type,this),this.viewer.addEventListener(se.ZoomUpdatedEvent.type,this)}destroy(){this.viewer.removeEventListener(se.TransitionDoneEvent.type,this),this.viewer.removeEventListener(se.PositionUpdatedEvent.type,this),this.viewer.removeEventListener(se.ZoomUpdatedEvent.type,this),this.__cleanup(),this.state.errorMaterial?.map?.dispose(),this.state.errorMaterial?.dispose(),this.adapter.destroy(),delete this.adapter,delete this.state.geom,delete this.state.errorMaterial,super.destroy()}handleEvent(e){switch(e.type){case se.PositionUpdatedEvent.type:case se.ZoomUpdatedEvent.type:this.__refresh();break;case se.TransitionDoneEvent.type:this.state.inTransition=!1,e.completed&&this.__switchMesh(this.viewer.renderer.mesh);break}}supportsTransition(e){return!!e.baseUrl}supportsPreload(e){return!!e.baseUrl}textureCoordsToSphericalCoords(e,t){return this.adapter.textureCoordsToSphericalCoords(e,t)}sphericalCoordsToTextureCoords(e,t){return this.adapter.sphericalCoordsToTextureCoords(e,t)}async loadTexture(e,t=!0){xw(e,this);const n=Nd(e,0,0,null,this),s={isEquirectangular:!0,fullWidth:n.width,fullHeight:n.width/2,croppedWidth:n.width,croppedHeight:n.width/2,croppedX:0,croppedY:0,poseHeading:0,posePitch:0,poseRoll:0};if(e.baseUrl){const r={path:e.baseUrl,data:e.basePanoData,blur:this.config.baseBlur},a=await this.adapter.loadTexture(r,t,null,!0);return{panorama:e,panoData:{...s,baseData:a.panoData},cacheKey:a.cacheKey,texture:a.texture}}else return{panorama:e,panoData:{...s,baseData:null},cacheKey:yw(e,n),texture:null}}createMesh(e){const t=this.adapter.createMesh(e.baseData??e),n=new Jn(Ai.SPHERE_RADIUS,this.SPHERE_SEGMENTS,this.SPHERE_HORIZONTAL_SEGMENTS,-Math.PI/2).scale(-1,1,1).toNonIndexed();n.clearGroups();let s=0,r=0;for(;s<this.SPHERE_SEGMENTS*si;s+=si)n.addGroup(s,si,r++);for(;s<this.NB_VERTICES-this.SPHERE_SEGMENTS*si;s+=er)n.addGroup(s,er,r++);for(;s<this.NB_VERTICES;s+=si)n.addGroup(s,si,r++);const a=[],o=new pn({opacity:0,transparent:!0,depthTest:!1,depthWrite:!1});for(let h=0;h<this.NB_GROUPS;h++)a.push(o);const c=new Yt(n,a);c.renderOrder=1;const l=new rn;return l.add(t),l.add(c),l}setTexture(e,t,n){const[s]=xa(e);t.texture?this.adapter.setTexture(s,{panorama:t.panorama.baseUrl,texture:t.texture,panoData:t.panoData.baseData}):s.visible=!1,n?this.state.inTransition=!0:this.__switchMesh(e)}setTextureOpacity(e,t){const[n]=xa(e);this.adapter.setTextureOpacity(n,t)}disposeTexture({texture:e}){e?.dispose()}disposeMesh(e){const[t,n]=xa(e);t.geometry.dispose(),t.material.dispose(),n.geometry.dispose(),n.material.forEach(s=>{s.map?.dispose(),s.dispose()})}__refresh(){if(!this.state.geom||this.state.inTransition)return;const e=this.viewer.config.panorama,t=Nd(e,this.viewer.state.hFov,this.viewer.state.vFov,this.viewer.state.size,this),n=this.state.geom.getAttribute(Mw),s={};for(let r=0;r<this.NB_VERTICES;r+=1)if(ya.fromBufferAttribute(n,r),ya.applyEuler(this.viewer.renderer.sphereCorrection),this.viewer.renderer.isObjectVisible(ya)){let a;r<this.SPHERE_SEGMENTS*si?a=Math.floor(r/3):r<this.NB_VERTICES-this.SPHERE_SEGMENTS*si?a=Math.floor((r/3-this.SPHERE_SEGMENTS)/2)+this.SPHERE_SEGMENTS:a=Math.floor((r-this.NB_VERTICES-this.SPHERE_SEGMENTS*si)/3)+this.SPHERE_HORIZONTAL_SEGMENTS*(this.SPHERE_SEGMENTS-1);const o=Math.floor(a/this.SPHERE_SEGMENTS),c=a-o*this.SPHERE_SEGMENTS;let l=t;for(;l;){const h=Math.floor(o/l.facesByRow),f=Math.floor(c/l.facesByCol);let p=ya.angleTo(this.viewer.state.direction);(h===0||h===l.rows-1)&&(p*=2);const m={row:h,col:f,angle:p,config:l,url:null},v=hl(m);if(s[v]){s[v].angle=Math.min(s[v].angle,p);break}else if(m.url=e.tileUrl(f,h,l.level),m.url){s[v]=m;break}else l=_w(e,l.level-1,this)}}this.state.tileConfig=t,this.__loadTiles(Object.values(s))}__loadTiles(e){this.queue.disableAllTasks(),e.forEach(t=>{const n=hl(t);this.state.tiles[n]?this.queue.setPriority(n,t.angle):(this.state.tiles[n]=!0,this.queue.enqueue(new fw(n,t.angle,s=>this.__loadTile(t,s))))}),this.queue.start()}__loadTile(e,t){return this.viewer.textureLoader.loadImage(e.url,null,this.viewer.state.textureData.cacheKey).then(n=>{if(!t.isCancelled()){this.config.debug&&(n=vw(n,e.config.level,hl(e)));const s=this.config.antialias&&e.config.level>0,r=new pn({map:Q.createTexture(n,s)});this.__swapMaterial(e,r,!1),this.viewer.needsUpdate()}}).catch(n=>{!Q.isAbortError(n)&&!t.isCancelled()&&this.config.showErrorTile&&(this.state.errorMaterial||(this.state.errorMaterial=mw()),this.__swapMaterial(e,this.state.errorMaterial,!0),this.viewer.needsUpdate())})}__swapMaterial(e,t,n){const s=this.state.geom.getAttribute(Ew);for(let r=0;r<e.config.facesByCol;r++)for(let a=0;a<e.config.facesByRow;a++){const o=e.col*e.config.facesByCol+r,c=e.row*e.config.facesByRow+a,l=c===0,h=c===this.SPHERE_HORIZONTAL_SEGMENTS-1;let f;if(l?f=o*si:h?f=this.NB_VERTICES-this.SPHERE_SEGMENTS*si+o*si:f=this.SPHERE_SEGMENTS*si+(c-1)*this.SPHERE_SEGMENTS*er+o*er,n&&this.state.faces[f]>Od||this.state.faces[f]>e.config.level)continue;this.state.faces[f]=n?Od:e.config.level;const p=this.state.geom.groups.find(u=>u.start===f).materialIndex;this.state.materials[p]=t;const m=1-a/e.config.facesByRow,v=1-(a+1)/e.config.facesByRow,y=r/e.config.facesByCol,d=(r+1)/e.config.facesByCol;l?(s.setXY(f,(y+d)/2,m),s.setXY(f+1,y,v),s.setXY(f+2,d,v)):h?(s.setXY(f,d,m),s.setXY(f+1,y,m),s.setXY(f+2,(y+d)/2,v)):(s.setXY(f,d,m),s.setXY(f+1,y,m),s.setXY(f+2,d,v),s.setXY(f+3,y,m),s.setXY(f+4,y,v),s.setXY(f+5,d,v))}s.needsUpdate=!0}__switchMesh(e){const[,t]=xa(e);if(this.__cleanup(),this.state.materials=t.material,this.state.geom=t.geometry,this.config.debug){const n=gw(this.state.geom);this.viewer.renderer.addObject(n),this.viewer.renderer.setSphereCorrection(this.viewer.config.sphereCorrection,n)}setTimeout(()=>this.__refresh())}__cleanup(){this.queue.clear(),this.state.tiles={},this.state.faces={},this.state.materials=[],this.state.inTransition=!1}};So.id="equirectangular-tiles";So.VERSION="5.15.1";So.supportsDownload=!1;var Sw=So;var bw=Object.defineProperty,Tw=(i,e)=>{for(var t in e)bw(i,t,{get:e[t],enumerable:!0})},Aw={};Tw(Aw,{HideGalleryEvent:()=>xr,ShowGalleryEvent:()=>_r});var gm=class vm extends zn{constructor(e){super(vm.type),this.fullscreen=e}};gm.type="show-gallery";var _r=gm,_m=class xm extends zn{constructor(){super(xm.type)}};_m.type="hide-gallery";var xr=_m,Cw='<svg viewBox="185 115 330 330" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M186.7 326.7V163.3c0-15 8.3-23.3 23.3-23.3h210c15 0 23.3 8.3 23.3 23.3v163.4c0 15-8.3 23.3-23.3 23.3H210c-15 0-23.3-8.3-23.3-23.3zm70 70v-23.4H420c30.2 0 46.7-16.4 46.7-46.6V210H490c15 0 23.3 8.3 23.3 23.3v163.4c0 15-8.3 23.3-23.3 23.3H280c-15 0-23.3-8.3-23.3-23.3zm-23.8-105H397l-40-50.4-26.7 29.7-44.3-54.5zm106.7-76c9.6 0 17.8-7.8 17.8-17.2a18 18 0 0 0-17.8-17.8c-9.4 0-17.2 8.2-17.2 17.8 0 9.4 7.8 17.2 17.2 17.2z"/><!--Created by Wolf Böse from the Noun Project--></svg>',Vr=class extends Xt{constructor(i){super(i,{className:"psv-gallery-button",hoverScale:!0,collapsable:!0,tabbable:!0,icon:Cw}),this.plugin=this.viewer.getPlugin("gallery"),this.plugin&&(this.plugin.addEventListener(_r.type,this),this.plugin.addEventListener(xr.type,this))}destroy(){this.plugin&&(this.plugin.removeEventListener(_r.type,this),this.plugin.removeEventListener(xr.type,this)),super.destroy()}handleEvent(i){i instanceof _r?this.toggleActive(!0):i instanceof xr&&this.toggleActive(!1)}isSupported(){return!!this.plugin}onClick(){this.plugin.toggle()}};Vr.id="gallery";var ym="psvGalleryItem",Em=Q.dasherize(ym),Ea="psv-gallery-item--active",Rw=(i,e)=>`
${i.map(t=>`
<div class="psv-gallery-item" 
     data-${Em}="${t.id}"
     style="width:${e.width}px; aspect-ratio:${e.width/e.height};"
     tabindex="0">
    ${t.name?`<div class="psv-gallery-item-title"><span>${t.name}</span></div>`:""}
    <svg class="psv-gallery-item-thumb" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice"><use href="#psvGalleryBlankIcon"></use></svg>
    ${t.thumbnail?`<div class="psv-gallery-item-thumb" data-src="${t.thumbnail}"></div>`:""}
</div>
`).join("")}
`,kd=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="25 0 50 100"><polygon fill="currentColor" points="24.66 99.31 25.34 100 75.34 50 25.34 0 24.66 0.69 24.66 22.64 52.01 50 24.66 77.36 24.66 99.31"/><!-- Created by Rainbow Designs from the Noun Project --></svg>
`,Pw=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <defs>
    <symbol id="psvGalleryBlankIcon" viewBox="0 0 200 200">
      <rect x="0" y="0" width="200" height="200" fill="#666"/>
      <g transform="scale(0.25) translate(25 20) " fill="#eee">
        <path d="M376 220.61c-85.84 0-155.39 69.56-155.39 155.39 0 85.84 69.56 155.39 155.39 155.39 85.84 0 155.39-69.56 155.39-155.39 0-85.84-69.56-155.39-155.39-155.39zm0 300.92c-80.41 0-145.53-65.12-145.53-145.53S295.59 230.47 376 230.47 521.53 295.59 521.53 376 456.41 521.53 376 521.53z"/>
        <path d="M467.27 300.03H284.74a18.21 18.21 0 0 0-18.25 18.25v115.43a18.21 18.21 0 0 0 18.25 18.26h182.53a18.21 18.21 0 0 0 18.25-18.26V318.28a18.2 18.2 0 0 0-18.25-18.25zm-190.91 18.25a8.64 8.64 0 0 1 8.39-8.38h182.53a8.64 8.64 0 0 1 8.38 8.38V413l-44.89-35.52c-.49-.5-.99-.5-1.48-.99h-2.46c-.5 0-1 0-1.48.5l-37.5 21.2-43.9-58.7-.5-.5s0-.48-.49-.48c0 0-.49 0-.49-.5-.49 0-.49-.49-.99-.49-.49 0-.49 0-.98-.49H337.53c-.5 0-.5.5-.99.5h-.49l-.5.48s-.48 0-.48.5l-58.7 65.12zM467.27 442.1H284.74a8.64 8.64 0 0 1-8.39-8.38v-15.3l63.15-68.07 42.92 57.22 1.48 1.48h.49c.5.5 1.48.5 1.97.5H388.83l38.47-21.72 46.37 36.5c.5.5 1.49 1 1.98 1v8.88c0 3.95-3.45 7.9-8.38 7.9z"/>
        <path d="M429.77 333.58a13.81 13.81 0 1 1-27.63 0 13.81 13.81 0 0 1 27.63 0"/>
      </g>
    </symbol>
  </defs>
</svg>`;function Fd(i,e){let t;i.addEventListener("mousedown",()=>{e(),clearInterval(t),t=setInterval(()=>{i.style.pointerEvents==="none"?clearInterval(t):e()},500)}),i.addEventListener("mouseup",()=>{clearInterval(t)})}var Lw=class extends vn{constructor(i,e){super(e,{className:`psv-gallery ${Ai.CAPTURE_EVENTS_CLASS}`}),this.plugin=i,this.state={visible:!0,mousedown:!1,initMouse:null,mouse:null,itemMargin:null,breakpoint:null,scrollLeft:0,scrollTop:0,isAboveBreakpoint:null},this.container.innerHTML=Pw,this.container.querySelector("svg").style.display="none";const t=document.createElement("div");t.className="psv-panel-close-button",t.innerHTML=Ai.ICONS.close,this.container.appendChild(t),t.addEventListener("click",()=>this.plugin.hide()),this.items=document.createElement("div"),this.items.className="psv-gallery-container",this.container.appendChild(this.items),this.config.navigationArrows&&(this.arrowLeft=document.createElement("div"),this.arrowLeft.className="psv-gallery-arrow",this.arrowLeft.innerHTML=kd,this.container.appendChild(this.arrowLeft),this.arrowRight=document.createElement("div"),this.arrowRight.className="psv-gallery-arrow",this.arrowRight.innerHTML=kd,this.container.appendChild(this.arrowRight),Fd(this.arrowLeft,()=>this.__scroll(-1)),Fd(this.arrowRight,()=>this.__scroll(1))),this.state.itemMargin=parseInt(Q.getStyleProperty(this.items,"padding-left"),10),this.state.breakpoint=parseInt(Q.getStyleProperty(this.container,"--psv-gallery-breakpoint"),10),this.observer=new IntersectionObserver(n=>{n.forEach(s=>{if(s.intersectionRatio>0){const r=s.target;r.style.backgroundImage=`url("${r.dataset.src}")`,delete r.dataset.src,this.observer.unobserve(s.target)}})},{root:this.viewer.container}),this.viewer.addEventListener(se.SizeUpdatedEvent.type,this),this.container.addEventListener("transitionend",this),this.container.addEventListener("keydown",this),this.items.addEventListener("wheel",this),this.items.addEventListener("scroll",this),this.items.addEventListener("mousedown",this),this.items.addEventListener("mousemove",this),this.items.addEventListener("click",this),window.addEventListener("mouseup",this),this.hide()}get isAboveBreakpoint(){return this.items.offsetWidth>this.state.breakpoint}get config(){return this.plugin.config}destroy(){window.removeEventListener("mouseup",this),this.viewer.removeEventListener(se.SizeUpdatedEvent.type,this),this.observer.disconnect(),super.destroy()}handleEvent(i){switch(i.type){case"transitionend":this.isVisible()&&i.target===this.container&&this.__focusActiveOrFirst();break;case"keydown":if(this.isVisible())switch(i.key){case Ai.KEY_CODES.Escape:this.plugin.hide();break;case Ai.KEY_CODES.Enter:this.__click(i);break}break;case"wheel":{const e=i;this.__scroll(e.deltaY>0?1:-1),i.preventDefault();break}case"scroll":case se.SizeUpdatedEvent.type:this.__updateArrows();break;case"mousedown":this.state.mousedown=!0,this.isAboveBreakpoint?this.state.initMouse=i.clientX:this.state.initMouse=i.clientY,this.state.mouse=this.state.initMouse;break;case"mousemove":if(this.state.mousedown)if(this.isAboveBreakpoint){const e=this.state.mouse-i.clientX;this.items.scrollLeft+=e,this.state.scrollLeft=this.items.scrollLeft,this.state.mouse=i.clientX}else{const e=this.state.mouse-i.clientY;this.items.scrollTop+=e,this.state.scrollTop=this.items.scrollTop,this.state.mouse=i.clientY}break;case"mouseup":this.state.mousedown=!1,this.state.mouse=null,i.preventDefault();break;case"click":{const e=this.isAboveBreakpoint?i.clientX:i.clientY;Math.abs(this.state.initMouse-e)<10&&this.__click(i);break}}}show(){this.container.classList.add("psv-gallery--open"),this.state.visible=!0}hide(){this.container.classList.remove("psv-gallery--open"),this.state.visible=!1,Q.hasParent(document.activeElement,this.container)&&this.viewer.navbar.focusButton(Vr.id)}setItems(i){this.items.innerHTML=Rw(i,this.plugin.config.thumbnailSize),this.observer&&(this.observer.disconnect(),this.items.querySelectorAll("[data-src]").forEach(e=>{this.observer.observe(e)})),this.__updateArrows()}setActive(i){if(this.items.querySelector("."+Ea)?.classList.remove(Ea),i){const t=this.items.querySelector(`[data-${Em}="${i}"]`);t&&(t.classList.add(Ea),this.items.scrollLeft=t.offsetLeft+t.clientWidth/2-this.items.clientWidth/2)}}__click(i){const e=Q.getMatchingTarget(i,".psv-gallery-item");if(!e)return;const t=e.dataset[ym];this.plugin.applyItem(t),this.setActive(t),(this.config.hideOnClick||!this.isAboveBreakpoint)&&this.hide()}__focusActiveOrFirst(){(this.items.querySelector("."+Ea)??this.items.firstElementChild)?.focus()}__scroll(i){if(this.isAboveBreakpoint){const e=this.items.scrollWidth-this.items.offsetWidth,t=this.plugin.config.thumbnailSize.width+(this.state.itemMargin??0);this.state.scrollLeft=Be.clamp(this.state.scrollLeft+i*t,0,e),i===-1&&this.state.scrollLeft<t*.8&&(this.state.scrollLeft=0),i===1&&this.state.scrollLeft>e-t*.8&&(this.state.scrollLeft=e),this.items.scroll({left:this.state.scrollLeft,behavior:"smooth"})}else{const e=this.items.scrollHeight-this.items.offsetHeight,t=this.items.querySelector(":first-child").offsetHeight*2+(this.state.itemMargin??0);this.state.scrollTop=Be.clamp(this.state.scrollTop+i*t,0,e),i===-1&&this.state.scrollTop<t*.8&&(this.state.scrollTop=0),i===1&&this.state.scrollTop>e-t*.8&&(this.state.scrollTop=e),this.items.scroll({top:this.state.scrollTop,behavior:"smooth"})}}__updateArrows(){if(!this.config.navigationArrows)return;this.state.isAboveBreakpoint!==this.isAboveBreakpoint&&(Q.toggleClass(this.arrowLeft,"psv-gallery-arrow--left",this.isAboveBreakpoint),Q.toggleClass(this.arrowLeft,"psv-gallery-arrow--top",!this.isAboveBreakpoint),Q.toggleClass(this.arrowRight,"psv-gallery-arrow--right",this.isAboveBreakpoint),Q.toggleClass(this.arrowRight,"psv-gallery-arrow--bottom",!this.isAboveBreakpoint),this.state.isAboveBreakpoint=this.isAboveBreakpoint);const i=(e,t)=>{t?(e.style.opacity="1",e.style.pointerEvents="auto"):(e.style.opacity="0",e.style.pointerEvents="none")};if(this.isAboveBreakpoint){const e=this.items.scrollWidth-this.items.offsetWidth;i(this.arrowLeft,this.items.scrollLeft>50),i(this.arrowRight,this.items.scrollLeft<e-50)}else{const e=this.items.scrollHeight-this.items.offsetHeight;i(this.arrowLeft,this.items.scrollTop>50),i(this.arrowRight,this.items.scrollTop<e-50)}}},Iw=Q.getConfigParser({items:[],navigationArrows:!0,visibleOnLoad:!1,hideOnClick:!0,thumbnailSize:{width:200,height:100}}),Hr=class Mm extends kr{constructor(e,t){super(e,t),this.items=[],this.gallery=new Lw(this,this.viewer)}static withConfig(e){return[Mm,e]}init(){super.init(),Q.checkStylesheet(this.viewer.container,"gallery-plugin"),this.map=this.viewer.getPlugin("map"),this.plan=this.viewer.getPlugin("plan"),this.viewer.addEventListener(se.PanoramaLoadedEvent.type,this),this.viewer.addEventListener(se.ShowPanelEvent.type,this),this.config.visibleOnLoad&&this.viewer.addEventListener(se.ReadyEvent.type,()=>{this.items.length&&this.show()},{once:!0}),this.setItems(this.config.items),delete this.config.items,setTimeout(()=>this.__updateButton())}destroy(){this.viewer.removeEventListener(se.PanoramaLoadedEvent.type,this),this.viewer.removeEventListener(se.ShowPanelEvent.type,this),this.gallery.destroy(),super.destroy()}setOptions(e){super.setOptions(e),e.thumbnailSize&&this.gallery.setItems(this.items)}handleEvent(e){if(e instanceof se.PanoramaLoadedEvent){const t=this.items.find(n=>Q.deepEqual(n.panorama,e.data.panorama));this.currentId=t?.id,this.gallery.setActive(this.currentId)}else e instanceof se.ShowPanelEvent&&this.gallery.isVisible()&&this.hide()}show(){return this.map?.minimize(),this.plan?.minimize(),this.dispatchEvent(new _r(!this.gallery.isAboveBreakpoint)),this.gallery.show()}hide(){return this.dispatchEvent(new xr),this.gallery.hide()}toggle(){this.gallery.isVisible()?this.hide():this.show()}isVisible(){return this.gallery.isVisible()}setItems(e,t){if(e?e.forEach((n,s)=>{if(!n.id)throw new re(`Item ${s} has no "id".`);if(!n.panorama)throw new re(`Item "${n.id}" has no "panorama".`)}):e=[],this.handler=t,this.items=e.map(n=>({...n,id:`${n.id}`})),this.gallery.setItems(this.items),this.currentId){const n=this.items.find(s=>s.id===this.currentId);this.currentId=n?.id,this.gallery.setActive(this.currentId)}this.items.length||this.gallery.hide(),this.__updateButton()}applyItem(e){if(e!==this.currentId){if(this.handler)this.handler(e);else{const t=this.items.find(n=>n.id===e);this.viewer.setPanorama(t.panorama,{caption:t.name,...t.options})}this.currentId=e}}__updateButton(){this.viewer.navbar.getButton(Vr.id,!1)?.toggle(this.items.length>0)}};Hr.id="gallery";Hr.VERSION="5.15.1";Hr.configParser=Iw;Hr.readonlyOptions=["items","navigationArrows","visibleOnLoad"];var Bd=Hr;Li.lang[Vr.id]="Gallery";Fr(Vr,"caption:left");var Dw=Object.defineProperty,Nw=(i,e)=>{for(var t in e)Dw(i,t,{get:e[t],enumerable:!0})},Uw={};Nw(Uw,{EnterMarkerEvent:()=>Dm,GotoMarkerDoneEvent:()=>vc,HideMarkersEvent:()=>yr,LeaveMarkerEvent:()=>Pm,MarkerVisibilityEvent:()=>bm,MarkersPluginEvent:()=>xi,RenderMarkersListEvent:()=>Jm,SelectMarkerEvent:()=>Om,SelectMarkerListEvent:()=>Bm,SetMarkersEvent:()=>qm,ShowMarkersEvent:()=>Er,UnselectMarkerEvent:()=>Hm});var xi=class extends zn{},wm=class Sm extends xi{constructor(e,t){super(Sm.type),this.marker=e,this.visible=t}};wm.type="marker-visibility";var bm=wm,Tm=class Am extends xi{constructor(e){super(Am.type),this.marker=e}};Tm.type="goto-marker-done";var vc=Tm,Cm=class Rm extends xi{constructor(e){super(Rm.type),this.marker=e}};Cm.type="leave-marker";var Pm=Cm,Lm=class Im extends xi{constructor(e){super(Im.type),this.marker=e}};Lm.type="enter-marker";var Dm=Lm,Nm=class Um extends xi{constructor(e,t,n){super(Um.type),this.marker=e,this.doubleClick=t,this.rightClick=n}};Nm.type="select-marker";var Om=Nm,km=class Fm extends xi{constructor(e){super(Fm.type),this.marker=e}};km.type="select-marker-list";var Bm=km,zm=class Vm extends xi{constructor(e){super(Vm.type),this.marker=e}};zm.type="unselect-marker";var Hm=zm,Gm=class Wm extends xi{constructor(){super(Wm.type)}};Gm.type="hide-markers";var yr=Gm,Xm=class $m extends xi{constructor(e){super($m.type),this.markers=e}};Xm.type="set-markers";var qm=Xm,Ym=class Zm extends xi{constructor(){super(Zm.type)}};Ym.type="show-markers";var Er=Ym,Km=class jm extends xi{constructor(e){super(jm.type),this.markers=e}};Km.type="render-markers-list";var Jm=Km,Ow=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 9 81 81"><path fill="currentColor" d="M50.5 90S22.9 51.9 22.9 36.6 35.2 9 50.5 9s27.6 12.4 27.6 27.6S50.5 90 50.5 90zm0-66.3c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11z"/><!--Created by Rohith M S from the Noun Project--></svg>
`,Rr=class extends Xt{constructor(i){super(i,{className:"psv-markers-button",icon:Ow,hoverScale:!0,collapsable:!0,tabbable:!0}),this.plugin=this.viewer.getPlugin("markers"),this.plugin&&(this.plugin.addEventListener(Er.type,this),this.plugin.addEventListener(yr.type,this),this.toggleActive(!0))}destroy(){this.plugin&&(this.plugin.removeEventListener(Er.type,this),this.plugin.removeEventListener(yr.type,this)),super.destroy()}isSupported(){return!!this.plugin}handleEvent(i){i instanceof Er?this.toggleActive(!0):i instanceof yr&&this.toggleActive(!1)}onClick(){this.plugin.toggleAllMarkers()}};Rr.id="markers";var Qm=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="9 9 81 81"><path fill="currentColor" d="M37.5 90S9.9 51.9 9.9 36.6 22.2 9 37.5 9s27.6 12.4 27.6 27.6S37.5 90 37.5 90zm0-66.3c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11zM86.7 55H70c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3h16.7c1.8 0 3.3 1.5 3.3 3.3S88.5 55 86.7 55zm0-25h-15a3.3 3.3 0 0 1-3.3-3.3c0-1.8 1.5-3.3 3.3-3.3h15c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3zM56.5 73h30c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3h-30a3.3 3.3 0 0 1-3.3-3.3 3.2 3.2 0 0 1 3.3-3.3z"/><!--Created by Rohith M S from the Noun Project--></svg>
`,Ya="http://www.w3.org/2000/svg",gt="psvMarker",kw=Q.dasherize(gt),tr="marker",Ts="markersList",_c={amount:2,duration:100,easing:"linear"},Fw=(i,e)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
    <h1 class="psv-panel-menu-title">${Qm} ${e}</h1>
    <ul class="psv-panel-menu-list">
    ${i.map(t=>`
        <li data-${kw}="${t.id}" class="psv-panel-menu-item" tabindex="0">
          ${t.type==="image"?`<span class="psv-panel-menu-item-icon"><img src="${t.definition}"/></span>`:""}
          <span class="psv-panel-menu-item-label">${t.getListContent()}</span>
        </li>
    `).join("")}
    </ul>
</div>
`,bo=class extends Xt{constructor(i){super(i,{className:" psv-markers-list-button",icon:Qm,hoverScale:!0,collapsable:!0,tabbable:!0}),this.plugin=this.viewer.getPlugin("markers"),this.plugin&&(this.viewer.addEventListener(se.ShowPanelEvent.type,this),this.viewer.addEventListener(se.HidePanelEvent.type,this))}destroy(){this.viewer.removeEventListener(se.ShowPanelEvent.type,this),this.viewer.removeEventListener(se.HidePanelEvent.type,this),super.destroy()}isSupported(){return!!this.plugin}handleEvent(i){i instanceof se.ShowPanelEvent?this.toggleActive(i.panelId===Ts):i instanceof se.HidePanelEvent&&this.toggleActive(!1)}onClick(){this.plugin.toggleMarkersList()}};bo.id="markersList";var zd=new P,Bw=new gn,Vd=new P,zw=class extends $t{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}},ki=new rt,Vw=new rt,Hw=class{constructor(e={}){const t=this;let n,s,r,a;const o={camera:{style:""},objects:new WeakMap},c=e.element!==void 0?e.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c;const l=document.createElement("div");l.style.transformOrigin="0 0",l.style.pointerEvents="none",c.appendChild(l);const h=document.createElement("div");h.style.transformStyle="preserve-3d",l.appendChild(h),this.getSize=function(){return{width:n,height:s}},this.render=function(d,u){const S=u.projectionMatrix.elements[5]*a;u.view&&u.view.enabled?(l.style.transform=`translate( ${-u.view.offsetX*(n/u.view.width)}px, ${-u.view.offsetY*(s/u.view.height)}px )`,l.style.transform+=`scale( ${u.view.fullWidth/u.view.width}, ${u.view.fullHeight/u.view.height} )`):l.style.transform="",d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld(),u.parent===null&&u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld();let b,E;u.isOrthographicCamera&&(b=-(u.right+u.left)/2,E=(u.top+u.bottom)/2);const T=u.view&&u.view.enabled?u.view.height/u.view.fullHeight:1,w=u.isOrthographicCamera?`scale( ${T} )scale(`+S+")translate("+f(b)+"px,"+f(E)+"px)"+p(u.matrixWorldInverse):`scale( ${T} )translateZ(`+S+"px)"+p(u.matrixWorldInverse),_=(u.isPerspectiveCamera?"perspective("+S+"px) ":"")+w+"translate("+r+"px,"+a+"px)";o.camera.style!==_&&(h.style.transform=_,o.camera.style=_),y(d,d,u)},this.setSize=function(d,u){n=d,s=u,r=n/2,a=s/2,c.style.width=d+"px",c.style.height=u+"px",l.style.width=d+"px",l.style.height=u+"px",h.style.width=d+"px",h.style.height=u+"px"};function f(d){return Math.abs(d)<1e-10?0:d}function p(d){const u=d.elements;return"matrix3d("+f(u[0])+","+f(-u[1])+","+f(u[2])+","+f(u[3])+","+f(u[4])+","+f(-u[5])+","+f(u[6])+","+f(u[7])+","+f(u[8])+","+f(-u[9])+","+f(u[10])+","+f(u[11])+","+f(u[12])+","+f(-u[13])+","+f(u[14])+","+f(u[15])+")"}function m(d){const u=d.elements;return"translate(-50%,-50%)"+("matrix3d("+f(u[0])+","+f(u[1])+","+f(u[2])+","+f(u[3])+","+f(-u[4])+","+f(-u[5])+","+f(-u[6])+","+f(-u[7])+","+f(u[8])+","+f(u[9])+","+f(u[10])+","+f(u[11])+","+f(u[12])+","+f(u[13])+","+f(u[14])+","+f(u[15])+")")}function v(d){d.isCSS3DObject&&(d.element.style.display="none");for(let u=0,S=d.children.length;u<S;u++)v(d.children[u])}function y(d,u,S,b){if(d.visible===!1){v(d);return}if(d.isCSS3DObject){const E=d.layers.test(S.layers)===!0,T=d.element;if(T.style.display=E===!0?"":"none",E===!0){d.onBeforeRender(t,u,S);let w;d.isCSS3DSprite?(ki.copy(S.matrixWorldInverse),ki.transpose(),d.rotation2D!==0&&ki.multiply(Vw.makeRotationZ(d.rotation2D)),d.matrixWorld.decompose(zd,Bw,Vd),ki.setPosition(zd),ki.scale(Vd),ki.elements[3]=0,ki.elements[7]=0,ki.elements[11]=0,ki.elements[15]=1,w=m(ki)):w=m(d.matrixWorld);const C=o.objects.get(d);if(C===void 0||C.style!==w){T.style.transform=w;const _={style:w};o.objects.set(d,_)}T.parentNode!==h&&h.appendChild(T),d.onAfterRender(t,u,S)}}for(let E=0,T=d.children.length;E<T;E++)y(d.children[E],u,S)}}},Gw=class{constructor(i){this.viewer=i,this.element=document.createElement("div"),this.element.className="psv-markers-css3d-container",this.renderer=new Hw({element:this.element}),this.scene=new Ba,this.intersectionObserver=new IntersectionObserver(e=>{e.forEach(t=>{const n=t.target[gt];n.config.visible&&(n.viewportIntersection=t.isIntersecting)})},{root:this.element}),i.addEventListener(se.ReadyEvent.type,this,{once:!0}),i.addEventListener(se.SizeUpdatedEvent.type,this),i.addEventListener(se.RenderEvent.type,this)}handleEvent(i){switch(i.type){case se.ReadyEvent.type:case se.SizeUpdatedEvent.type:this.updateSize();break;case se.RenderEvent.type:this.render();break}}destroy(){this.viewer.removeEventListener(se.ReadyEvent.type,this),this.viewer.removeEventListener(se.SizeUpdatedEvent.type,this),this.viewer.removeEventListener(se.RenderEvent.type,this),this.intersectionObserver.disconnect()}updateSize(){const i=this.viewer.getSize();this.renderer.setSize(i.width,i.height)}render(){this.renderer.render(this.scene,this.viewer.renderer.camera)}addObject(i){this.scene.add(i.threeElement),this.intersectionObserver.observe(i.domElement)}removeObject(i){this.scene.remove(i.threeElement),this.intersectionObserver.unobserve(i.domElement)}},Ia=(i=>(i.image="image",i.html="html",i.element="element",i.imageLayer="imageLayer",i.videoLayer="videoLayer",i.elementLayer="elementLayer",i.polygon="polygon",i.polygonPixels="polygonPixels",i.polyline="polyline",i.polylinePixels="polylinePixels",i.square="square",i.rect="rect",i.circle="circle",i.ellipse="ellipse",i.path="path",i))(Ia||{});function xc(i,e=!1){const t=[];if(Object.keys(Ia).forEach(n=>{i[n]&&t.push(n)}),t.length===0&&!e)throw new re(`missing marker content, either ${Object.keys(Ia).join(", ")}`);if(t.length>1)throw new re(`multiple marker content, either ${Object.keys(Ia).join(", ")}`);return t[0]}var eg=class{constructor(i,e,t){if(this.viewer=i,this.plugin=e,this.state={anchor:null,visible:!1,staticTooltip:!1,position:null,position2D:null,positions3D:null,size:null},!t.id)throw new re("missing marker id");this.type=xc(t),this.createElement(),this.update(t)}get id(){return this.config.id}get data(){return this.config.data}get domElement(){return null}get threeElement(){return null}get video(){return null}destroy(){delete this.viewer,delete this.plugin,delete this.element,this.hideTooltip()}is3d(){return!1}isNormal(){return!1}isPoly(){return!1}isSvg(){return!1}isCss3d(){return!1}update(i){const e=xc(i,!0);if(e!==void 0&&e!==this.type)throw new re(`cannot change marker ${i.id} type`);if(this.config=Q.deepmerge(this.config,i),typeof this.config.tooltip=="string"&&(this.config.tooltip={content:this.config.tooltip}),this.config.tooltip&&!this.config.tooltip.trigger&&(this.config.tooltip.trigger="hover"),Q.isNil(this.config.visible)&&(this.config.visible=!0),Q.isNil(this.config.zIndex)&&(this.config.zIndex=1),Q.isNil(this.config.opacity)&&(this.config.opacity=1),this.config.rotation){const t=this.config.rotation;typeof t=="object"?this.config.rotation={yaw:t.yaw?Q.parseAngle(t.yaw,!0,!1):0,pitch:t.pitch?Q.parseAngle(t.pitch,!0,!1):0,roll:t.roll?Q.parseAngle(t.roll,!0,!1):0}:this.config.rotation={yaw:0,pitch:0,roll:Q.parseAngle(t,!0,!1)}}else this.config.rotation={yaw:0,pitch:0,roll:0};this.state.anchor=Q.parsePoint(this.config.anchor)}getListContent(){return this.config.listContent?this.config.listContent:this.config.tooltip?.content?this.config.tooltip.content:this.config.html?this.config.html:this.id}showTooltip(i,e,t=!1){if(this.state.visible&&this.config.tooltip?.content&&this.state.position2D){const n={...this.config.tooltip,style:{pointerEvents:this.state.staticTooltip?"auto":"none"},data:this,top:0,left:0};if(this.isPoly()||this.is3d()||this.isCss3d())if(i||e){const s=Q.getPosition(this.viewer.container);n.top=e-s.y+10,n.left=i-s.x,n.box={width:20,height:20}}else n.top=this.state.position2D.y,n.left=this.state.position2D.x;else{const s=this.viewer.dataHelper.vector3ToViewerCoords(this.state.positions3D[0]);let r=this.state.size.width,a=this.state.size.height;this.config.hoverScale&&!this.state.staticTooltip&&(r*=this.config.hoverScale.amount,a*=this.config.hoverScale.amount),n.top=s.y-a*this.state.anchor.y+a/2,n.left=s.x-r*this.state.anchor.x+r/2,n.box={width:r,height:a}}this.tooltip?t?this.tooltip.update(this.config.tooltip.content,n):this.tooltip.move(n):this.tooltip=this.viewer.createTooltip(n)}}hideTooltip(){this.tooltip&&(this.tooltip.hide(),this.tooltip=null)}},sh=class extends eg{get domElement(){return this.element}constructor(i,e,t){super(i,e,t)}afterCreateElement(){this.element[gt]=this}destroy(){delete this.element[gt],super.destroy()}update(i){super.update(i);const e=this.domElement;e.id=`psv-marker-${this.config.id}`,e.setAttribute("class","psv-marker"),this.state.visible&&e.classList.add("psv-marker--visible"),this.config.tooltip&&e.classList.add("psv-marker--has-tooltip"),this.config.content&&e.classList.add("psv-marker--has-content"),this.config.className&&Q.addClasses(e,this.config.className),e.style.opacity=`${this.config.opacity}`,e.style.zIndex=`${30+this.config.zIndex}`,this.config.style&&Object.assign(e.style,this.config.style)}},Za=class extends sh{constructor(i,e,t){super(i,e,t)}afterCreateElement(){super.afterCreateElement(),this.domElement.addEventListener("transitionend",()=>{this.domElement.style.transition=""})}render({viewerPosition:i,zoomLevel:e,hoveringMarker:t}){this.__updateSize();const n=this.viewer.dataHelper.vector3ToViewerCoords(this.state.positions3D[0]);return n.x-=this.state.size.width*this.state.anchor.x,n.y-=this.state.size.height*this.state.anchor.y,this.state.positions3D[0].dot(this.viewer.state.direction)>0&&n.x+this.state.size.width>=0&&n.x-this.state.size.width<=this.viewer.state.size.width&&n.y+this.state.size.height>=0&&n.y-this.state.size.height<=this.viewer.state.size.height?(this.domElement.style.translate=`${n.x}px ${n.y}px 0px`,this.applyScale({zoomLevel:e,viewerPosition:i,mouseover:this===t}),n):null}update(i){if(super.update(i),!Q.isExtendedPosition(this.config.position))throw new re(`missing marker ${this.id} position`);try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(t){throw new re(`invalid marker ${this.id} position`,t)}this.state.positions3D=[this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position)];const e=this.domElement;e.classList.add("psv-marker--normal"),this.config.scale&&Array.isArray(this.config.scale)&&(this.config.scale={zoom:this.config.scale}),typeof this.config.hoverScale=="boolean"?this.config.hoverScale=this.config.hoverScale?this.plugin.config.defaultHoverScale||_c:null:typeof this.config.hoverScale=="number"?this.config.hoverScale={amount:this.config.hoverScale}:this.config.hoverScale||(this.config.hoverScale=this.plugin.config.defaultHoverScale),this.config.hoverScale&&(this.config.hoverScale={...this.plugin.config.defaultHoverScale,...this.config.hoverScale}),e.style.rotate=this.config.rotation.roll!==0?Be.radToDeg(this.config.rotation.roll)+"deg":null,e.style.transformOrigin=`${this.state.anchor.x*100}% ${this.state.anchor.y*100}%`}__updateSize(){if(!this.needsUpdateSize)return;const i=this.domElement,e=!this.state.visible||!this.state.size;if(e&&i.classList.add("psv-marker--transparent"),this.isSvg()){const t=i.firstElementChild.getBoundingClientRect();this.state.size={width:t.width,height:t.height}}else this.state.size={width:i.offsetWidth,height:i.offsetHeight};e&&i.classList.remove("psv-marker--transparent"),this.isSvg()&&(i.style.width=this.state.size.width+"px",i.style.height=this.state.size.height+"px"),this.type!=="element"&&(this.needsUpdateSize=!1)}applyScale({zoomLevel:i,viewerPosition:e,mouseover:t}){t!==null&&this.config.hoverScale&&(this.domElement.style.transition=`scale ${this.config.hoverScale.duration}ms ${this.config.hoverScale.easing}`);let n=1;if(typeof this.config.scale=="function")n=this.config.scale(i,e);else if(this.config.scale){if(Array.isArray(this.config.scale.zoom)){const[s,r]=this.config.scale.zoom;n*=s+(r-s)*Ai.EASINGS.inQuad(i/100)}if(Array.isArray(this.config.scale.yaw)){const[s,r]=this.config.scale.yaw,a=Be.degToRad(this.viewer.state.hFov)/2,o=Math.abs(Q.getShortestArc(this.state.position.yaw,e.yaw));n*=r+(s-r)*Ai.EASINGS.outQuad(Math.max(0,(a-o)/a))}}t&&this.config.hoverScale&&(n*=this.config.hoverScale.amount),this.domElement.style.scale=`${n}`}},Ww=`// https://www.8thwall.com/playground/chromakey-threejs

uniform sampler2D map;
uniform float alpha;
uniform bool keying;
uniform vec3 color;
uniform float similarity;
uniform float smoothness;
uniform float spill;

varying vec2 vUv;

vec2 RGBtoUV(vec3 rgb) {
    return vec2(
        rgb.r * -0.169 + rgb.g * -0.331 + rgb.b *  0.5    + 0.5,
        rgb.r *  0.5   + rgb.g * -0.419 + rgb.b * -0.081  + 0.5
    );
}

void main(void) {
    gl_FragColor = texture2D(map, vUv);

    if (keying) {
        float chromaDist = distance(RGBtoUV(gl_FragColor.rgb), RGBtoUV(color));

        float baseMask = chromaDist - similarity;
        float fullMask = pow(clamp(baseMask / smoothness, 0., 1.), 1.5);
        gl_FragColor.a *= fullMask * alpha;

        float spillVal = pow(clamp(baseMask / spill, 0., 1.), 1.5);
        float desat = clamp(gl_FragColor.r * 0.2126 + gl_FragColor.g * 0.7152 + gl_FragColor.b * 0.0722, 0., 1.);
        gl_FragColor.rgb = mix(vec3(desat, desat, desat), gl_FragColor.rgb, spillVal);
    } else {
        gl_FragColor.a *= alpha;
    }
}
`,Xw=`varying vec2 vUv;
uniform vec2 repeat;
uniform vec2 offset;

void main() {
    vUv = uv * repeat + offset;
    gl_Position = projectionMatrix *  modelViewMatrix * vec4( position, 1.0 );
}
`,$w=class extends vi{get map(){return this.uniforms.map.value}set map(i){this.uniforms.map.value=i}set alpha(i){this.uniforms.alpha.value=i}get offset(){return this.uniforms.offset.value}get repeat(){return this.uniforms.repeat.value}set chromaKey(i){this.uniforms.keying.value=i?.enabled===!0,i?.enabled&&(typeof i.color=="object"&&"r"in i.color?this.uniforms.color.value.set(i.color.r/255,i.color.g/255,i.color.b/255):this.uniforms.color.value.set(i.color??65280),this.uniforms.similarity.value=i.similarity??.2,this.uniforms.smoothness.value=i.smoothness??.2)}constructor(i){super({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{map:{value:i?.map},repeat:{value:new Ge(1,1)},offset:{value:new Ge(0,0)},alpha:{value:i?.alpha??1},keying:{value:!1},color:{value:new tt(65280)},similarity:{value:.2},smoothness:{value:.2},spill:{value:.1}},vertexShader:Xw,fragmentShader:Ww}),this.chromaKey=i?.chromaKey}};function qw({src:i,withCredentials:e,muted:t,autoplay:n}){const s=document.createElement("video");return s.crossOrigin=e?"use-credentials":"anonymous",s.loop=!0,s.playsInline=!0,s.autoplay=n,s.muted=t,s.preload="metadata",i instanceof MediaStream?s.srcObject=i:s.src=i,s}function Yw(i,e,t){const[n,s]=i,[r,a]=e,o=Q.greatArcDistance(i,e),c=Math.sin((1-t)*o)/Math.sin(o),l=Math.sin(t*o)/Math.sin(o),h=c*Math.cos(s)*Math.cos(n)+l*Math.cos(a)*Math.cos(r),f=c*Math.cos(s)*Math.sin(n)+l*Math.cos(a)*Math.sin(r),p=c*Math.sin(s)+l*Math.sin(a);return[Math.atan2(f,h),Math.atan2(p,Math.sqrt(h*h+f*f))]}function Zw(i){const e=[i[0]];let t=0;for(let n=1;n<i.length;n++){const s=i[n-1][0]-i[n][0];s>Math.PI?t+=1:s<-Math.PI&&(t-=1),e.push([i[n][0]+t*2*Math.PI,i[n][1]])}return e}function tg(i){return i.reduce((e,t)=>e.add(t),new P).normalize()}function Kw(i){const e=Zw(i);let t=0;const n=[];for(let r=0;r<e.length-1;r++){const a=Q.greatArcDistance(e[r],e[r+1])*Ai.SPHERE_RADIUS;n.push(a),t+=a}let s=0;for(let r=0;r<e.length-1;r++){if(s+n[r]>t/2){const a=(t/2-s)/n[r];return Yw(e[r],e[r+1],a)}s+=n[r]}return e[Math.round(e.length/2)]}var Ma=new P,Hd=new P,dl=new P,Gd=new P,Wd=new P,Xd=new P;function jw(i,e,t){Ma.copy(t).normalize(),Hd.crossVectors(i,e).normalize(),dl.crossVectors(Hd,i).normalize(),Gd.copy(i).multiplyScalar(-Ma.dot(dl)),Wd.copy(dl).multiplyScalar(Ma.dot(i));const n=new P().addVectors(Gd,Wd).normalize();return Xd.crossVectors(n,Ma),n.applyAxisAngle(Xd,.01).multiplyScalar(Ai.SPHERE_RADIUS)}var Jw=class extends eg{get threeElement(){return this.element}get threeMesh(){return this.threeElement.children[0]}get video(){return this.type==="videoLayer"?this.threeMesh.material.map.image:null}constructor(i,e,t){super(i,e,t)}is3d(){return!0}createElement(){const i=new $w({alpha:0}),e=new Gs(1,1),t=new Yt(e,i);t.userData={[gt]:this},Object.defineProperty(t,"visible",{enumerable:!0,get:function(){return this.userData[gt].config.visible},set:function(n){this.userData[gt].config.visible=n}}),this.element=new rn().add(t),this.type==="videoLayer"&&this.viewer.needsContinuousUpdate(!0)}destroy(){delete this.threeMesh.userData[gt],this.type==="videoLayer"&&(this.video.pause(),this.viewer.needsContinuousUpdate(!1)),super.destroy()}render(){return this.viewer.renderer.isObjectVisible(this.threeMesh)?this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position):null}update(i){super.update(i);const e=this.threeMesh,t=e.parent,n=e.material;if(Q.isExtendedPosition(this.config.position)){try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(r){throw new re(`invalid marker ${this.id} position`,r)}if(!this.config.size)throw new re(`missing marker ${this.id} size`);this.state.size=this.config.size,e.scale.set(this.config.size.width/100,this.config.size.height/100,1),e.position.set(e.scale.x*(.5-this.state.anchor.x),e.scale.y*(this.state.anchor.y-.5),0),e.rotation.set(0,0,0),this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position,t.position),t.lookAt(0,t.position.y,0),e.rotateY(-this.config.rotation.yaw),e.rotateX(-this.config.rotation.pitch),e.rotateZ(-this.config.rotation.roll);const s=e.geometry.getAttribute("position");this.state.positions3D=[0,1,3,2].map(r=>{const a=new P;return a.fromBufferAttribute(s,r),e.localToWorld(a)})}else{if(this.config.position?.length!==4)throw new re(`missing marker ${this.id} position`);let s;try{s=this.config.position.map(c=>this.viewer.dataHelper.cleanPosition(c))}catch(c){throw new re(`invalid marker ${this.id} position`,c)}const r=s.map(c=>this.viewer.dataHelper.sphericalCoordsToVector3(c)),a=tg(r);this.state.position=this.viewer.dataHelper.vector3ToSphericalCoords(a),this.state.positions3D=r;const o=e.geometry.getAttribute("position");[r[0],r[1],r[3],r[2]].forEach((c,l)=>{o.setX(l,c.x),o.setY(l,c.y),o.setZ(l,c.z)}),o.needsUpdate=!0,this.__setTextureWrap(n)}switch(this.type){case"videoLayer":if(this.definition!==this.config.videoLayer){n.map?.dispose();const s=qw({src:this.config.videoLayer,withCredentials:this.viewer.config.withCredentials(this.config.videoLayer),muted:!0,autoplay:this.config.autoplay??!0}),r=new Jv(s);n.map=r,n.alpha=0,s.addEventListener("loadedmetadata",()=>{this.viewer&&(n.alpha=this.config.opacity,Q.isExtendedPosition(this.config.position)||(e.material.userData[gt]={width:s.videoWidth,height:s.videoHeight},this.__setTextureWrap(n)))},{once:!0}),s.autoplay&&s.play(),this.definition=this.config.videoLayer}else n.alpha=this.config.opacity;break;case"imageLayer":if(this.definition!==this.config.imageLayer){n.map?.dispose();const s=new Nt;n.map=s,n.alpha=0,this.viewer.textureLoader.loadImage(this.config.imageLayer).then(r=>{this.viewer&&(Q.isExtendedPosition(this.config.position)||(e.material.userData[gt]={width:r.width,height:r.height},this.__setTextureWrap(n)),s.image=r,s.anisotropy=4,s.needsUpdate=!0,n.alpha=this.config.opacity,this.viewer.needsUpdate())}),this.definition=this.config.imageLayer}else n.alpha=this.config.opacity;break}n.chromaKey=this.config.chromaKey,e.renderOrder=1e3+this.config.zIndex,e.geometry.boundingBox=null}__setTextureWrap(i){const e=i.userData[gt];if(!e||!e.height||!e.width){i.repeat.set(1,1),i.offset.set(0,0);return}const t=this.config.position.map(f=>this.viewer.dataHelper.cleanPosition(f)),n=Q.greatArcDistance([t[0].yaw,t[0].pitch],[t[1].yaw,t[1].pitch]),s=Q.greatArcDistance([t[3].yaw,t[3].pitch],[t[2].yaw,t[2].pitch]),r=Q.greatArcDistance([t[1].yaw,t[1].pitch],[t[2].yaw,t[2].pitch]),a=Q.greatArcDistance([t[0].yaw,t[0].pitch],[t[3].yaw,t[3].pitch]),o=(n+s)/(r+a),c=e.width/e.height;let l=0,h=0;o<c?l=c-o:h=1/c-1/o,i.repeat.set(1-l,1-h),i.offset.set(l/2,h/2)}},Qw=class extends sh{constructor(i,e,t){super(i,e,t),this.viewportIntersection=!1}get threeElement(){return this.object}isCss3d(){return!0}createElement(){this.element=document.createElement("div"),this.object=new zw(this.element),this.object.userData={[gt]:this},Object.defineProperty(this.object,"visible",{enumerable:!0,get:function(){return this.userData[gt].config.visible},set:function(i){this.userData[gt].config.visible=i}}),this.afterCreateElement()}destroy(){delete this.object.userData[gt],delete this.object,super.destroy()}render({viewerPosition:i,zoomLevel:e}){const t=this.domElement;if(this.state.size={width:t.offsetWidth,height:t.offsetHeight},this.state.positions3D[0].dot(this.viewer.state.direction)>0&&this.viewportIntersection){const s=this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position);return this.config.elementLayer.updateMarker?.({marker:this,position:s,viewerPosition:i,zoomLevel:e,viewerSize:this.viewer.state.size}),s}else return null}update(i){if(super.update(i),!Q.isExtendedPosition(this.config.position))throw new re(`missing marker ${this.id} position`);try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(n){throw new re(`invalid marker ${this.id} position`,n)}this.state.positions3D=[this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position)];const e=this.threeElement,t=this.domElement;t.classList.add("psv-marker--css3d"),t.childNodes.forEach(n=>n.remove()),t.appendChild(this.config.elementLayer),this.config.elementLayer.style.display="block",e.position.copy(this.state.positions3D[0]).multiplyScalar(100),e.lookAt(0,this.state.positions3D[0].y*100,0),e.rotateY(-this.config.rotation.yaw),e.rotateX(-this.config.rotation.pitch),e.rotateZ(-this.config.rotation.roll)}},eS=class extends Za{constructor(i,e,t){super(i,e,t)}isNormal(){return!0}createElement(){this.element=document.createElement("div"),this.afterCreateElement()}render(i){const e=super.render(i);return e&&this.type==="element"&&this.config.element.updateMarker?.({marker:this,position:e,viewerPosition:i.viewerPosition,zoomLevel:i.zoomLevel,viewerSize:this.viewer.state.size}),e}update(i){super.update(i);const e=this.domElement;if(this.config.image&&!this.config.size)throw new re(`missing marker ${this.id} size`);switch(this.config.size?(this.needsUpdateSize=!1,this.state.size=this.config.size,e.style.width=this.config.size.width+"px",e.style.height=this.config.size.height+"px"):this.needsUpdateSize=!0,this.type){case"image":this.definition=this.config.image,e.style.backgroundImage=`url("${this.config.image}")`;break;case"html":this.definition=this.config.html,e.innerHTML=this.config.html;break;case"element":this.definition!==this.config.element&&(this.definition=this.config.element,e.childNodes.forEach(t=>t.remove()),e.appendChild(this.config.element),this.config.element.style.display="block");break}}},tS=class extends sh{constructor(i,e,t){super(i,e,t)}createElement(){this.element=document.createElementNS(Ya,"path"),this.element[gt]=this}isPoly(){return!0}get isPixels(){return this.type==="polygonPixels"||this.type==="polylinePixels"}get isPolygon(){return this.type==="polygon"||this.type==="polygonPixels"}get isPolyline(){return this.type==="polyline"||this.type==="polylinePixels"}get coords(){return this.definition}render(){const i=this.__getAllPolyPositions();if(i[0].length>(this.isPolygon?2:1)){const t=this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position),n=i.filter(s=>s.length>0).map(s=>{let r="M";return r+=s.map(a=>`${a.x-t.x},${a.y-t.y}`).join("L"),this.isPolygon&&(r+="Z"),r}).join(" ");return this.domElement.setAttributeNS(null,"d",n),this.domElement.setAttributeNS(null,"transform",`translate(${t.x} ${t.y})`),t}else return null}update(i){super.update(i);const e=this.domElement;e.classList.add("psv-marker--poly"),this.config.svgStyle?(Object.entries(this.config.svgStyle).forEach(([t,n])=>{e.setAttributeNS(null,Q.dasherize(t),n)}),this.isPolyline&&!this.config.svgStyle.fill&&e.setAttributeNS(null,"fill","none")):this.isPolygon?e.setAttributeNS(null,"fill","rgba(0,0,0,0.5)"):this.isPolyline&&(e.setAttributeNS(null,"fill","none"),e.setAttributeNS(null,"stroke","rgb(0,0,0)"));try{let t=this.config[this.type];if(!Array.isArray(t[0])&&typeof t[0]!="object")for(let n=0;n<t.length;n++)t.splice(n,2,[t[n],t[n+1]]);if(!Array.isArray(t[0][0])&&typeof t[0][0]!="object"&&(t=[t]),this.isPolyline&&t.length>1)throw new re("polylines cannot have holes");this.isPixels?this.definition=t.map(n=>n.map(s=>{let r;return Q.isExtendedPosition(s)?r=this.viewer.dataHelper.cleanPosition(s):r=this.viewer.dataHelper.textureCoordsToSphericalCoords({textureX:s[0],textureY:s[1]}),[r.yaw,r.pitch]})):this.definition=t.map(n=>n.map(s=>{let r;return Q.isExtendedPosition(s)?r=this.viewer.dataHelper.cleanPosition(s):r=this.viewer.dataHelper.cleanPosition({yaw:s[0],pitch:s[1]}),[r.yaw,r.pitch]}))}catch(t){throw new re(`invalid marker ${this.id} position`,t)}if(this.positions3D=this.coords.map(t=>t.map(n=>this.viewer.dataHelper.sphericalCoordsToVector3({yaw:n[0],pitch:n[1]}))),this.isPolygon){const t=tg(this.positions3D[0]);this.state.position=this.viewer.dataHelper.vector3ToSphericalCoords(t)}else{const t=Kw(this.coords[0]);this.state.position={yaw:t[0],pitch:t[1]}}this.state.positions3D=this.positions3D[0]}__getAllPolyPositions(){return this.positions3D.map(i=>this.__getPolyPositions(i))}__getPolyPositions(i){const e=i.length,t=i.map(s=>({vector:s,visible:s.dot(this.viewer.state.direction)>0})),n=[];return t.forEach((s,r)=>{s.visible||[r===0?t[e-1]:t[r-1],r===e-1?t[0]:t[r+1]].forEach(o=>{o.visible&&n.push({visible:o.vector,invisible:s.vector,index:r})})}),n.reverse().forEach(s=>{t.splice(s.index,0,{vector:jw(s.visible,s.invisible,this.viewer.state.direction),visible:!0})}),t.filter(s=>s.visible).map(s=>this.viewer.dataHelper.vector3ToViewerCoords(s.vector))}},iS=class extends Za{get svgElement(){return this.domElement.firstElementChild}constructor(i,e,t){super(i,e,t)}isSvg(){return!0}createElement(){const i=this.type==="square"?"rect":this.type,e=document.createElementNS(Ya,i);this.element=document.createElementNS(Ya,"svg"),this.element.appendChild(e),this.afterCreateElement()}update(i){super.update(i);const e=this.svgElement;switch(this.needsUpdateSize=!0,this.type){case"square":this.definition={x:0,y:0,width:this.config.square,height:this.config.square};break;case"rect":Array.isArray(this.config.rect)?this.definition={x:0,y:0,width:this.config.rect[0],height:this.config.rect[1]}:this.definition={x:0,y:0,width:this.config.rect.width,height:this.config.rect.height};break;case"circle":this.definition={cx:this.config.circle,cy:this.config.circle,r:this.config.circle};break;case"ellipse":Array.isArray(this.config.ellipse)?this.definition={cx:this.config.ellipse[0],cy:this.config.ellipse[1],rx:this.config.ellipse[0],ry:this.config.ellipse[1]}:this.definition={cx:this.config.ellipse.rx,cy:this.config.ellipse.ry,rx:this.config.ellipse.rx,ry:this.config.ellipse.ry};break;case"path":this.definition={d:this.config.path};break}Object.entries(this.definition).forEach(([t,n])=>{e.setAttributeNS(null,t,n)}),this.config.svgStyle?Object.entries(this.config.svgStyle).forEach(([t,n])=>{e.setAttributeNS(null,Q.dasherize(t),n)}):e.setAttributeNS(null,"fill","rgba(0,0,0,0.5)")}},nS=Q.getConfigParser({clickEventOnMarker:!1,gotoMarkerSpeed:"8rpm",markers:null,defaultHoverScale:null},{defaultHoverScale(i){return i?(i===!0&&(i=_c),typeof i=="number"&&(i={amount:i}),{..._c,...i}):null}});function sS(i){switch(xc(i,!1)){case"image":case"html":case"element":return eS;case"imageLayer":case"videoLayer":return Jw;case"elementLayer":return Qw;case"polygon":case"polyline":case"polygonPixels":case"polylinePixels":return tS;case"square":case"rect":case"circle":case"ellipse":case"path":return iS;default:throw new re("invalid marker type")}}var Gr=class ig extends kr{constructor(e,t){super(e,t),this.markers={},this.state={allVisible:!0,showAllTooltips:!1,currentMarker:null,hoveringMarker:null,needsReRender:!1,lastClientX:null,lastClientY:null},this.container=document.createElement("div"),this.container.className="psv-markers",this.viewer.container.appendChild(this.container),this.container.addEventListener("contextmenu",n=>n.preventDefault()),this.svgContainer=document.createElementNS(Ya,"svg"),this.svgContainer.setAttribute("class","psv-markers-svg-container"),this.container.appendChild(this.svgContainer),this.css3DContainer=new Gw(e),this.container.appendChild(this.css3DContainer.element),this.container.addEventListener("mouseenter",this,!0),this.container.addEventListener("mouseleave",this,!0),this.container.addEventListener("mousemove",this,!0)}static withConfig(e){return[ig,e]}init(){super.init(),Q.checkStylesheet(this.viewer.container,"markers-plugin"),this.viewer.addEventListener(se.ClickEvent.type,this),this.viewer.addEventListener(se.DoubleClickEvent.type,this),this.viewer.addEventListener(se.RenderEvent.type,this),this.viewer.addEventListener(se.ConfigChangedEvent.type,this),this.viewer.addEventListener(se.ObjectEnterEvent.type,this),this.viewer.addEventListener(se.ObjectHoverEvent.type,this),this.viewer.addEventListener(se.ObjectLeaveEvent.type,this),this.viewer.addEventListener(se.ReadyEvent.type,this,{once:!0})}destroy(){this.clearMarkers(!1),this.viewer.unobserveObjects(gt),this.viewer.removeEventListener(se.ClickEvent.type,this),this.viewer.removeEventListener(se.DoubleClickEvent.type,this),this.viewer.removeEventListener(se.RenderEvent.type,this),this.viewer.removeEventListener(se.ObjectEnterEvent.type,this),this.viewer.removeEventListener(se.ObjectHoverEvent.type,this),this.viewer.removeEventListener(se.ObjectLeaveEvent.type,this),this.viewer.removeEventListener(se.ReadyEvent.type,this),this.css3DContainer.destroy(),this.viewer.container.removeChild(this.container),super.destroy()}handleEvent(e){switch(e.type){case se.ReadyEvent.type:this.config.markers&&(this.setMarkers(this.config.markers),delete this.config.markers);break;case se.RenderEvent.type:this.renderMarkers();break;case se.ClickEvent.type:this.__onClick(e,!1);break;case se.DoubleClickEvent.type:this.__onClick(e,!0);break;case se.ObjectEnterEvent.type:case se.ObjectLeaveEvent.type:case se.ObjectHoverEvent.type:if(e.userDataKey===gt){const t=e.originalEvent,n=e.object.userData[gt];switch(e.type){case se.ObjectEnterEvent.type:n.config.style?.cursor?this.viewer.setCursor(n.config.style.cursor):(n.config.tooltip||n.config.content)&&this.viewer.setCursor("pointer"),this.__onEnterMarker(t,n);break;case se.ObjectLeaveEvent.type:this.viewer.setCursor(null),this.__onLeaveMarker(n);break;case se.ObjectHoverEvent.type:this.__onHoverMarker(t,n);break}}break;case"mouseenter":{const t=this.__getTargetMarker(Q.getEventTarget(e));this.__onEnterMarker(e,t);break}case"mouseleave":{const t=this.__getTargetMarker(Q.getEventTarget(e));this.__onLeaveMarker(t);break}case"mousemove":{const t=this.__getTargetMarker(Q.getEventTarget(e),!0);this.__onHoverMarker(e,t);break}}}toggleAllMarkers(){this.state.allVisible?this.hideAllMarkers():this.showAllMarkers()}showAllMarkers(){this.state.allVisible=!0,Object.values(this.markers).forEach(e=>{e.config.visible=!0}),this.renderMarkers(),this.dispatchEvent(new Er)}hideAllMarkers(){this.state.allVisible=!1,Object.values(this.markers).forEach(e=>{e.config.visible=!1}),this.renderMarkers(),this.dispatchEvent(new yr)}toggleAllTooltips(){this.state.showAllTooltips?this.hideAllTooltips():this.showAllTooltips()}showAllTooltips(){this.state.showAllTooltips=!0,Object.values(this.markers).forEach(e=>{e.state.staticTooltip=!0,e.showTooltip()})}hideAllTooltips(){this.state.showAllTooltips=!1,Object.values(this.markers).forEach(e=>{e.state.staticTooltip=!1,e.hideTooltip()})}getNbMarkers(){return Object.keys(this.markers).length}getMarkers(){return Object.values(this.markers)}addMarker(e,t=!0){if(this.markers[e.id])throw new re(`marker "${e.id}" already exists`);const n=new(sS(e))(this.viewer,this,e);n.isPoly()?this.svgContainer.appendChild(n.domElement):n.isCss3d()?this.css3DContainer.addObject(n):n.is3d()?this.viewer.renderer.addObject(n.threeElement):this.container.appendChild(n.domElement),this.markers[n.id]=n,this.state.showAllTooltips&&(n.state.staticTooltip=!0),t&&this.__afterChangeMarkers()}getMarker(e){const t=typeof e=="object"?e.id:e;if(!this.markers[t])throw new re(`cannot find marker "${t}"`);return this.markers[t]}getCurrentMarker(){return this.state.currentMarker}updateMarker(e,t=!0){const n=this.getMarker(e.id);n.update(e),t&&(this.__afterChangeMarkers(),(n===this.state.hoveringMarker&&n.config.tooltip?.trigger==="hover"||n.state.staticTooltip)&&n.showTooltip(this.state.lastClientX,this.state.lastClientY,!0))}removeMarker(e,t=!0){const n=this.getMarker(e);n.isPoly()?this.svgContainer.removeChild(n.domElement):n.isCss3d()?this.css3DContainer.removeObject(n):n.is3d()?this.viewer.renderer.removeObject(n.threeElement):this.container.removeChild(n.domElement),this.state.hoveringMarker===n&&(this.state.hoveringMarker=null),this.state.currentMarker===n&&(this.state.currentMarker=null),n.destroy(),delete this.markers[n.id],t&&this.__afterChangeMarkers()}removeMarkers(e,t=!0){e.forEach(n=>this.removeMarker(n,!1)),t&&this.__afterChangeMarkers()}setMarkers(e,t=!0){this.clearMarkers(!1),e?.forEach(n=>{this.addMarker(n,!1)}),t&&this.__afterChangeMarkers()}clearMarkers(e=!0){Object.keys(this.markers).forEach(t=>{this.removeMarker(t,!1)}),e&&this.__afterChangeMarkers()}gotoMarker(e,t=this.config.gotoMarkerSpeed){const n=this.getMarker(e);return t?this.viewer.animate({...n.state.position,zoom:n.config.zoomLvl,speed:t}).then(()=>{this.dispatchEvent(new vc(n))}):(this.viewer.rotate(n.state.position),Q.isNil(n.config.zoomLvl)||this.viewer.zoom(n.config.zoomLvl),this.dispatchEvent(new vc(n)),Promise.resolve())}hideMarker(e){this.toggleMarker(e,!1)}showMarker(e){this.toggleMarker(e,!0)}showMarkerTooltip(e){const t=this.getMarker(e);t.state.staticTooltip=!0,t.showTooltip()}hideMarkerTooltip(e){const t=this.getMarker(e);t.state.staticTooltip=!1,t.hideTooltip()}toggleMarker(e,t){const n=this.getMarker(e);n.config.visible=Q.isNil(t)?!n.config.visible:t,this.renderMarkers()}showMarkerPanel(e){const t=this.getMarker(e);t.config.content?this.viewer.panel.show({id:tr,content:t.config.content}):this.hideMarkerPanel()}hideMarkerPanel(){this.viewer.panel.hide(tr)}toggleMarkersList(){this.viewer.panel.isVisible(Ts)?this.hideMarkersList():this.showMarkersList()}showMarkersList(){let e=[];Object.values(this.markers).forEach(n=>{n.config.visible&&!n.config.hideList&&e.push(n)});const t=new Jm(e);this.dispatchEvent(t),e=t.markers,this.viewer.panel.show({id:Ts,content:Fw(e,this.viewer.config.lang[Rr.id]),noMargin:!0,clickHandler:n=>{const s=Q.getClosest(n,".psv-panel-menu-item"),r=s?s.dataset[gt]:void 0;if(r){const a=this.getMarker(r);this.dispatchEvent(new Bm(a)),this.gotoMarker(a.id),this.hideMarkersList()}}})}hideMarkersList(){this.viewer.panel.hide(Ts)}renderMarkers(){if(this.state.needsReRender){this.state.needsReRender=!1;return}const e=this.viewer.getZoomLevel(),t=this.viewer.getPosition(),n=this.state.hoveringMarker;Object.values(this.markers).forEach(s=>{let r=s.config.visible,a=null;r&&(a=s.render({viewerPosition:t,zoomLevel:e,hoveringMarker:n}),r=!!a);const o=s.state.visible!==r;s.state.visible=r,s.state.position2D=a,s.domElement&&Q.toggleClass(s.domElement,"psv-marker--visible",r),r?s.state.staticTooltip?s.showTooltip():s!==this.state.hoveringMarker&&s.hideTooltip():s.hideTooltip(),o&&(this.dispatchEvent(new bm(s,r)),(s.is3d()||s.isCss3d())&&(this.state.needsReRender=!0))}),this.state.needsReRender&&this.viewer.needsUpdate()}__getTargetMarker(e,t=!1){if(e instanceof Node){const n=t?Q.getClosest(e,".psv-marker"):e;return n?n[gt]:void 0}else return Array.isArray(e)?e.map(n=>n.userData[gt]).filter(n=>!!n).sort((n,s)=>s.config.zIndex-n.config.zIndex)[0]:null}__onEnterMarker(e,t){t&&(this.state.hoveringMarker=t,this.state.lastClientX=e.clientX,this.state.lastClientY=e.clientY,this.dispatchEvent(new Dm(t)),t instanceof Za&&t.applyScale({zoomLevel:this.viewer.getZoomLevel(),viewerPosition:this.viewer.getPosition(),mouseover:!0}),!t.state.staticTooltip&&t.config.tooltip?.trigger==="hover"&&t.showTooltip(e.clientX,e.clientY))}__onLeaveMarker(e){e&&(this.dispatchEvent(new Pm(e)),e instanceof Za&&e.applyScale({zoomLevel:this.viewer.getZoomLevel(),viewerPosition:this.viewer.getPosition(),mouseover:!1}),this.state.hoveringMarker=null,!e.state.staticTooltip&&e.config.tooltip?.trigger==="hover"?e.hideTooltip():e.state.staticTooltip&&e.showTooltip())}__onHoverMarker(e,t){t&&(this.state.lastClientX=e.clientX,this.state.lastClientY=e.clientY,(t.isPoly()||t.is3d()||t.isCss3d())&&t.config.tooltip?.trigger==="hover"&&t.showTooltip(e.clientX,e.clientY))}__onClick(e,t){const n=this.__getTargetMarker(e.data.objects),r=this.__getTargetMarker(e.data.target,!0)||n;this.state.currentMarker&&this.state.currentMarker!==r&&(this.dispatchEvent(new Hm(this.state.currentMarker)),this.viewer.panel.hide(tr),!this.state.showAllTooltips&&this.state.currentMarker.config.tooltip?.trigger==="click"&&this.hideMarkerTooltip(this.state.currentMarker.id),this.state.currentMarker=null),r&&(this.state.currentMarker=r,this.dispatchEvent(new Om(r,t,e.data.rightclick)),this.config.clickEventOnMarker?e.data.marker=r:e.stopImmediatePropagation(),this.markers[r.id]&&!e.data.rightclick&&(r.config.tooltip?.trigger==="click"?r.tooltip?this.hideMarkerTooltip(r.id):this.showMarkerTooltip(r.id):this.showMarkerPanel(r.id)))}__afterChangeMarkers(){this.__refreshUi(),this.__checkObjectsObserver(),this.viewer.needsUpdate(),this.dispatchEvent(new qm(this.getMarkers()))}__refreshUi(){const e=Object.values(this.markers).filter(t=>!t.config.hideList).length;e===0?(this.viewer.panel.hide(tr),this.viewer.panel.hide(Ts)):this.viewer.panel.isVisible(Ts)?this.showMarkersList():this.viewer.panel.isVisible(tr)&&(this.state.currentMarker?this.showMarkerPanel(this.state.currentMarker.id):this.viewer.panel.hide()),this.viewer.navbar.getButton(Rr.id,!1)?.toggle(e>0),this.viewer.navbar.getButton(bo.id,!1)?.toggle(e>0)}__checkObjectsObserver(){Object.values(this.markers).some(t=>t.is3d())?this.viewer.observeObjects(gt):this.viewer.unobserveObjects(gt)}};Gr.id="markers";Gr.VERSION="5.15.1";Gr.configParser=nS;Gr.readonlyOptions=["markers"];var $d=Gr;Li.lang[Rr.id]="Markers";Li.lang[bo.id]="Markers list";Fr(Rr,"caption:left");Fr(bo,"caption:left");var rS=Object.defineProperty,aS=(i,e)=>{for(var t in e)rS(i,t,{get:e[t],enumerable:!0})},oS={};aS(oS,{EnterArrowEvent:()=>lg,LeaveArrowEvent:()=>dg,NodeChangedEvent:()=>rg});var ng=class sg extends zn{constructor(e,t){super(sg.type),this.node=e,this.data=t}};ng.type="node-changed";var rg=ng,ag=class og extends zn{constructor(e,t){super(og.type),this.link=e,this.node=t}};ag.type="enter-arrow";var lg=ag,cg=class hg extends zn{constructor(e,t){super(hg.type),this.link=e,this.node=t}};cg.type="leave-arrow";var dg=cg,lS=class extends $t{constructor(i=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=i,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Ge(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element&&e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(i,e){return super.copy(i,e),this.element=i.element.cloneNode(!0),this.center=i.center,this}},Es=new P,qd=new rt,Yd=new rt,Zd=new P,Kd=new P,cS=class{constructor(i={}){const e=this;let t,n,s,r;const a={objects:new WeakMap},o=i.element!==void 0?i.element:document.createElement("div");o.style.overflow="hidden",this.domElement=o,this.sortObjects=!0,this.getSize=function(){return{width:t,height:n}},this.render=function(m,v){m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),v.parent===null&&v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),qd.copy(v.matrixWorldInverse),Yd.multiplyMatrices(v.projectionMatrix,qd),l(m,m,v),this.sortObjects&&p(m)},this.setSize=function(m,v){t=m,n=v,s=t/2,r=n/2,o.style.width=m+"px",o.style.height=v+"px"};function c(m){m.isCSS2DObject&&(m.element.style.display="none");for(let v=0,y=m.children.length;v<y;v++)c(m.children[v])}function l(m,v,y){if(m.visible===!1){c(m);return}if(m.isCSS2DObject){Es.setFromMatrixPosition(m.matrixWorld),Es.applyMatrix4(Yd);const d=Es.z>=-1&&Es.z<=1&&m.layers.test(y.layers)===!0,u=m.element;u.style.display=d===!0?"":"none",d===!0&&(m.onBeforeRender(e,v,y),u.style.transform="translate("+-100*m.center.x+"%,"+-100*m.center.y+"%)translate("+(Es.x*s+s)+"px,"+(-Es.y*r+r)+"px)",u.parentNode!==o&&o.appendChild(u),m.onAfterRender(e,v,y));const S={distanceToCameraSquared:h(y,m)};a.objects.set(m,S)}for(let d=0,u=m.children.length;d<u;d++)l(m.children[d],v,y)}function h(m,v){return Zd.setFromMatrixPosition(m.matrixWorld),Kd.setFromMatrixPosition(v.matrixWorld),Zd.distanceToSquared(Kd)}function f(m){const v=[];return m.traverseVisible(function(y){y.isCSS2DObject&&v.push(y)}),v}function p(m){const v=f(m).sort(function(d,u){if(d.renderOrder!==u.renderOrder)return u.renderOrder-d.renderOrder;const S=a.objects.get(d).distanceToCameraSquared,b=a.objects.get(u).distanceToCameraSquared;return S-b}),y=v.length;for(let d=0,u=v.length;d<u;d++)v[d].element.style.zIndex=y-d}}},jd=new P,hS=new gn,Jd=new P,dS=class extends $t{constructor(i=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=i,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(e){e.element&&e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(i,e){return super.copy(i,e),this.element=i.element.cloneNode(!0),this}},Fi=new rt,uS=new rt,fS=class{constructor(i={}){const e=this;let t,n,s,r;const a={camera:{style:""},objects:new WeakMap},o=i.element!==void 0?i.element:document.createElement("div");o.style.overflow="hidden",this.domElement=o;const c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",o.appendChild(c);const l=document.createElement("div");l.style.transformStyle="preserve-3d",c.appendChild(l),this.getSize=function(){return{width:t,height:n}},this.render=function(y,d){const u=d.projectionMatrix.elements[5]*r;d.view&&d.view.enabled?(c.style.transform=`translate( ${-d.view.offsetX*(t/d.view.width)}px, ${-d.view.offsetY*(n/d.view.height)}px )`,c.style.transform+=`scale( ${d.view.fullWidth/d.view.width}, ${d.view.fullHeight/d.view.height} )`):c.style.transform="",y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),d.parent===null&&d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld();let S,b;d.isOrthographicCamera&&(S=-(d.right+d.left)/2,b=(d.top+d.bottom)/2);const E=d.view&&d.view.enabled?d.view.height/d.view.fullHeight:1,T=d.isOrthographicCamera?`scale( ${E} )scale(`+u+")translate("+h(S)+"px,"+h(b)+"px)"+f(d.matrixWorldInverse):`scale( ${E} )translateZ(`+u+"px)"+f(d.matrixWorldInverse),C=(d.isPerspectiveCamera?"perspective("+u+"px) ":"")+T+"translate("+s+"px,"+r+"px)";a.camera.style!==C&&(l.style.transform=C,a.camera.style=C),v(y,y,d)},this.setSize=function(y,d){t=y,n=d,s=t/2,r=n/2,o.style.width=y+"px",o.style.height=d+"px",c.style.width=y+"px",c.style.height=d+"px",l.style.width=y+"px",l.style.height=d+"px"};function h(y){return Math.abs(y)<1e-10?0:y}function f(y){const d=y.elements;return"matrix3d("+h(d[0])+","+h(-d[1])+","+h(d[2])+","+h(d[3])+","+h(d[4])+","+h(-d[5])+","+h(d[6])+","+h(d[7])+","+h(d[8])+","+h(-d[9])+","+h(d[10])+","+h(d[11])+","+h(d[12])+","+h(-d[13])+","+h(d[14])+","+h(d[15])+")"}function p(y){const d=y.elements;return"translate(-50%,-50%)"+("matrix3d("+h(d[0])+","+h(d[1])+","+h(d[2])+","+h(d[3])+","+h(-d[4])+","+h(-d[5])+","+h(-d[6])+","+h(-d[7])+","+h(d[8])+","+h(d[9])+","+h(d[10])+","+h(d[11])+","+h(d[12])+","+h(d[13])+","+h(d[14])+","+h(d[15])+")")}function m(y){y.isCSS3DObject&&(y.element.style.display="none");for(let d=0,u=y.children.length;d<u;d++)m(y.children[d])}function v(y,d,u,S){if(y.visible===!1){m(y);return}if(y.isCSS3DObject){const b=y.layers.test(u.layers)===!0,E=y.element;if(E.style.display=b===!0?"":"none",b===!0){y.onBeforeRender(e,d,u);let T;y.isCSS3DSprite?(Fi.copy(u.matrixWorldInverse),Fi.transpose(),y.rotation2D!==0&&Fi.multiply(uS.makeRotationZ(y.rotation2D)),y.matrixWorld.decompose(jd,hS,Jd),Fi.setPosition(jd),Fi.scale(Jd),Fi.elements[3]=0,Fi.elements[7]=0,Fi.elements[11]=0,Fi.elements[15]=1,T=p(Fi)):T=p(y.matrixWorld);const w=a.objects.get(y);if(w===void 0||w.style!==T){E.style.transform=T;const C={style:T};a.objects.set(y,C)}E.parentNode!==l&&l.appendChild(E),y.onAfterRender(e,d,u)}}for(let b=0,E=y.children.length;b<E;b++)v(y.children[b],d,u)}}},pS=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <path fill-rule="even-odd" fill="currentColor" d="
        M50,50 m45,0
        a45,45 0 1,0 -90,0
        a45,45 0 1,0  90,0

        M50,50 m38,0
        a38,38 0 0,1 -76,0
        a38,38 0 0,1  76,0

        M50,50 m30,0
        a30,30 0 1,0 -60,0
        a30,30 0 1,0  60,0
        
        M50,40 m2.5,-2.5
        l17.5,17.5
        a 2.5,2.5 0 0 1 -5,5
        l-15,-15
        l-15,15
        a 2.5,2.5 0 0 1 -5,-5
        l17.5,-17.5
        a 3.5,3.5 0 0 1 5,0
    "/>
</svg>`,Ka="tourLink",Ms="__tour-link__",mS={className:"psv-virtual-tour-tooltip",content:'<div class="psv-virtual-tour-loader"><div></div><div></div><div></div></div>'},gS={element:()=>{const i=document.createElement("button");return i.className="psv-virtual-tour-arrow",i.innerHTML=pS,i},size:{width:80,height:80}},ul="arrow",vS=class extends vn{constructor(i,e){super(i,{className:"psv-virtual-tour-arrows"}),this.plugin=e,this.renderer=this.is3D?new fS({element:this.container}):new cS({element:this.container}),this.camera=this.is3D?new di(30,1):null,this.scene=new Ba,this.viewer.addEventListener(se.ReadyEvent.type,this,{once:!0}),this.viewer.addEventListener(se.PositionUpdatedEvent.type,this),this.viewer.addEventListener(se.SizeUpdatedEvent.type,this),this.viewer.addEventListener(se.RenderEvent.type,this),this.viewer.addEventListener(se.ClickEvent.type,this),this.container.addEventListener("mouseenter",this,!0),this.container.addEventListener("mouseleave",this,!0),this.container.addEventListener("mousemove",this,!0),this.container.addEventListener("contextmenu",t=>t.preventDefault())}get is3D(){return this.plugin.is3D}get arrowsPosition(){return this.plugin.config.arrowsPosition}get arrowStyle(){return this.plugin.config.arrowStyle}init(){this.is3D&&(this.gallery=this.viewer.getPlugin("gallery"),this.gallery?.addEventListener("show-gallery",this),this.gallery?.addEventListener("hide-gallery",this))}destroy(){this.viewer.removeEventListener(se.ReadyEvent.type,this),this.viewer.removeEventListener(se.PositionUpdatedEvent.type,this),this.viewer.removeEventListener(se.SizeUpdatedEvent.type,this),this.viewer.removeEventListener(se.RenderEvent.type,this),this.viewer.removeEventListener(se.ClickEvent.type,this),this.gallery?.removeEventListener("show-gallery",this),this.gallery?.removeEventListener("hide-gallery",this),super.destroy()}handleEvent(i){switch(i.type){case se.ReadyEvent.type:case se.SizeUpdatedEvent.type:case se.PositionUpdatedEvent.type:this.__updateCamera();break;case se.RenderEvent.type:this.render();break;case se.ClickEvent.type:{if(i.data.rightclick)break;const e=this.__getTargetLink(i.data.target,!0);e&&this.plugin.setCurrentNode(e.nodeId,null,e);break}case"mouseenter":{const e=this.__getTargetLink(Q.getEventTarget(i));e&&this.plugin.__onEnterArrow(e,i);break}case"mouseleave":{const e=this.__getTargetLink(Q.getEventTarget(i));e&&this.plugin.__onLeaveArrow(e);break}case"mousemove":{this.__getTargetLink(Q.getEventTarget(i),!0)&&this.plugin.__onHoverArrow(i);break}case"hide-gallery":this.__onToggleGallery(!1);break;case"show-gallery":i.fullscreen||this.__onToggleGallery(!0);break}}__updateCamera(){const i=this.viewer.getSize();if(this.renderer.setSize(i.width,i.height),this.is3D){const e=this.viewer.getPosition();e.pitch=Be.clamp(e.pitch,-this.arrowsPosition.maxPitch,-this.arrowsPosition.minPitch),this.viewer.dataHelper.sphericalCoordsToVector3(e,this.camera.position,i.height*2).negate(),this.camera.lookAt(0,0,0),this.camera.translateY(i.height/3),this.camera.updateProjectionMatrix()}}render(){if(this.is3D){const i=this.viewer.getPosition(),e=[];let t=Number.MAX_SAFE_INTEGER;this.scene.children.forEach(n=>{const s=n.userData[ul];if(s.conflict){const r=Math.abs(Q.getShortestArc(i.yaw,s.yaw));t=Math.min(t,r),e.push([n,r])}}),e.forEach(([n,s])=>{const r=s!==t;n.element.style.opacity=r?"0.5":null,n.element.style.zIndex=r?"-1":null}),this.renderer.render(this.scene,this.camera)}else this.renderer.render(this.scene,this.viewer.renderer.camera)}clear(){this.scene.clear()}__buildArrowElement(i,e){if(e?.image){const t=document.createElement("img");return t.src=e.image,t}else if(e?.element)return typeof e.element=="function"?e.element(i):e.element}addLinkArrow(i,e,t=1){let n=this.__buildArrowElement(i,i.arrowStyle);n||(n=this.__buildArrowElement(i,this.arrowStyle)),n[Ka]=i;const s={...this.arrowStyle,...i.arrowStyle};if(n.classList.add("psv-virtual-tour-link"),s.className&&Q.addClasses(n,s.className),s.style&&Object.assign(n.style,s.style),this.is3D){n.style.width=s.size.width*1.5+"px",n.style.height=s.size.height*1.5+"px";let r=!1;this.scene.children.forEach(o=>{const c=o.userData[ul];Math.abs(Q.getShortestArc(c.yaw,e.yaw))<this.arrowsPosition.linkOverlapAngle&&(c.conflict=!0,r=!0)});const a=new dS(n);a.userData[ul]={yaw:e.yaw,conflict:r},a.rotation.set(-Math.PI/2,0,Math.PI-e.yaw),this.viewer.dataHelper.sphericalCoordsToVector3({yaw:e.yaw,pitch:0},a.position,t*100),this.scene.add(a)}else{n.style.width=s.size.width+"px",n.style.height=s.size.height+"px",n.style.pointerEvents="auto";const r=new lS(n);this.viewer.dataHelper.sphericalCoordsToVector3(e,r.position),this.scene.add(r)}}__getTargetLink(i,e=!1){const t=e?Q.getClosest(i,".psv-virtual-tour-link"):i;return t?t[Ka]:void 0}__onToggleGallery(i){i?this.container.style.marginBottom=this.viewer.container.querySelector(".psv-gallery").offsetHeight+"px":this.container.style.marginBottom=""}},ug=class{constructor(i,e){this.plugin=i,this.viewer=e,this.nodes={}}destroy(){}checkNode(i){if(!i.id)throw new re("No id given for node");if(!i.panorama)throw new re(`No panorama provided for node ${i.id}`);if(this.plugin.isGps&&!(i.gps?.length>=2))throw new re(`No GPS position provided for node ${i.id}`);if(!this.plugin.isGps&&i.markers?.some(e=>e.gps&&!e.position))throw new re("Cannot use GPS positioning for markers in manual mode");i.links||(Q.logWarn(`Node ${i.id} has no links`),i.links=[])}checkLink(i,e){if(!e.nodeId)throw new re(`Link of node ${i.id} has no target id`);if(e.nodeId===i.id)throw new re(`Node ${i.id} links to itself`);if(!this.plugin.isGps&&!Q.isExtendedPosition(e.position))throw new re(`No position provided for link ${e.nodeId} of node ${i.id}`);if(this.plugin.isGps&&!e.gps)throw new re(`No GPS position provided for link ${e.nodeId} of node ${i.id}`)}},_S=class extends ug{async loadNode(i){if(this.nodes[i])return this.nodes[i];throw new re(`Node ${i} not found`)}setNodes(i){if(!i?.length)throw new re("No nodes provided");const e={},t={};i.forEach(n=>{if(this.checkNode(n),e[n.id])throw new re(`Duplicate node ${n.id}`);e[n.id]=n}),i.forEach(n=>{this.__checkLinks(n,e),n.links.forEach(s=>{t[s.nodeId]=!0})}),i.forEach(n=>{t[n.id]||Q.logWarn(`Node ${n.id} is never linked to`)}),this.nodes=e}updateNode(i){if(!i.id)throw new re("No id given for node");const e=this.nodes[i.id];if(!e)throw new re(`Node ${i.id} does not exist`);return Object.assign(e,i),this.checkNode(e),this.__checkLinks(e,this.nodes),e}__checkLinks(i,e){i.links.forEach(t=>{if(!e[t.nodeId])throw new re(`Target node ${t.nodeId} of node ${i.id} does not exists`);t.gps=t.gps||e[t.nodeId].gps,this.checkLink(i,t)})}},xS=class extends ug{constructor(i,e){if(super(i,e),!i.config.getNode)throw new re("Missing getNode() option.");this.nodeResolver=i.config.getNode}async loadNode(i){if(this.nodes[i])return this.nodes[i];{const e=await this.nodeResolver(i);return this.checkNode(e),e.links.forEach(t=>{this.checkLink(e,t)}),this.nodes[i]=e,e}}clearCache(){this.nodes={}}};function Qd(i,e){const t=eu(i),n=eu(e),s=i[2]??0,r=e[2]??0;let a=0;return s!==r&&(a=Math.atan((r-s)/yS(t,n))),{yaw:ES(t,n),pitch:a}}function eu(i){return[Be.degToRad(i[0]),Be.degToRad(i[1])]}function yS(i,e){return Q.greatArcDistance(i,e)*6371e3}function ES(i,e){const[t,n]=i,[s,r]=e,a=Math.sin(s-t)*Math.cos(r),o=Math.cos(n)*Math.sin(r)-Math.sin(n)*Math.cos(r)*Math.cos(s-t);return Math.atan2(a,o)}var rh=Q.getConfigParser({dataMode:"client",positionMode:"manual",renderMode:"3d",nodes:null,getNode:null,startNodeId:null,preload:!1,transitionOptions:{showLoader:!0,speed:"20rpm",effect:"fade",rotation:!0},linksOnCompass:!0,showLinkTooltip:!0,getLinkTooltip:null,arrowStyle:gS,arrowsPosition:{minPitch:.3,maxPitch:Math.PI/2,linkOverlapAngle:Math.PI/4,linkPitchOffset:-.1},map:null},{dataMode(i){if(i!=="client"&&i!=="server")throw new re("VirtualTourPlugin: invalid dataMode");return i},positionMode(i){if(i!=="gps"&&i!=="manual")throw new re("VirtualTourPlugin: invalid positionMode");return i},renderMode(i){if(i!=="3d"&&i!=="2d")throw new re("VirtualTourPlugin: invalid renderMode");return i},arrowsPosition(i,{defValue:e}){return{...e,...i}},arrowStyle(i,{defValue:e}){return{...e,...i}},map(i,{rawConfig:e}){if(i){if(e.dataMode==="server")return Q.logWarn("VirtualTourPlugin: The map cannot be used in server side mode"),null;if(!i.imageUrl)return Q.logWarn('VirtualTourPlugin: configuring the map requires at least "imageUrl"'),null;"recenter"in i||(i.recenter=!0)}return i}}),Wr=class fg extends kr{constructor(e,t){super(e,t),this.state={currentNode:null,currentTooltip:null,loadingNode:null,preload:{}},this.arrowsRenderer=new vS(this.viewer,this)}get is3D(){return this.config.renderMode==="3d"}get isServerSide(){return this.config.dataMode==="server"}get isGps(){return this.config.positionMode==="gps"}static withConfig(e){return[fg,e]}init(){super.init(),this.arrowsRenderer.init(),Q.checkStylesheet(this.viewer.container,"virtual-tour-plugin"),this.markers=this.viewer.getPlugin("markers"),this.compass=this.viewer.getPlugin("compass"),this.markers?.config.markers&&(Q.logWarn("No default markers can be configured on the MarkersPlugin when using the VirtualTourPlugin. Consider defining `markers` on each tour node."),delete this.markers.config.markers),this.isGps&&(this.plan=this.viewer.getPlugin("plan")),this.isServerSide||(this.gallery=this.viewer.getPlugin("gallery"),this.map=this.viewer.getPlugin("map"),this.config.map&&!this.map&&Q.logWarn("The map is configured on the VirtualTourPlugin but the MapPlugin is not loaded.")),this.datasource=this.isServerSide?new xS(this,this.viewer):new _S(this,this.viewer),this.map&&(this.map.addEventListener("select-hotspot",this),this.map.setImage(this.config.map.imageUrl)),this.plan?.addEventListener("select-hotspot",this),this.isServerSide?this.config.startNodeId&&this.setCurrentNode(this.config.startNodeId):this.config.nodes&&(this.setNodes(this.config.nodes,this.config.startNodeId),delete this.config.nodes)}destroy(){this.map?.removeEventListener("select-hotspot",this),this.plan?.removeEventListener("select-hotspot",this),this.datasource.destroy(),this.arrowsRenderer.destroy(),delete this.datasource,delete this.markers,delete this.compass,delete this.gallery,delete this.arrowsRenderer,super.destroy()}handleEvent(e){if(e instanceof se.ClickEvent){const t=e.data.objects.find(n=>n.userData[Ka])?.userData[Ka];t&&this.setCurrentNode(t.nodeId,null,t)}else if(e.type==="select-hotspot"){const t=e.hotspotId;t.startsWith(Ms)&&this.setCurrentNode(t.substring(Ms.length))}}getCurrentNode(){return this.state.currentNode}setNodes(e,t){if(this.isServerSide)throw new re("Cannot set nodes in server side mode");this.__hideTooltip(),this.state.currentNode=null,this.datasource.setNodes(e),t?this.datasource.nodes[t]||(t=e[0].id,Q.logWarn(`startNodeId not found is provided nodes, resetted to ${t}`)):t=e[0].id,this.setCurrentNode(t),this.__setGalleryItems(),this.__setMapHotspots(),this.__setPlanHotspots()}setCurrentNode(e,t,n){if(e===this.state.currentNode?.id&&!t?.forceUpdate)return Promise.resolve(!0);t?.forceUpdate&&this.isServerSide&&this.datasource.clearCache(),this.viewer.hideError(),this.state.loadingNode=e;const s=this.state.currentNode,r=s&&n?this.__getLinkPosition(s,n):null;return Promise.resolve(this.state.preload[e]).then(()=>{if(this.state.loadingNode!==e)throw Q.getAbortError();return this.datasource.loadNode(e)}).then(a=>{if(this.state.loadingNode!==e)throw Q.getAbortError();const o={...rh.defaults.transitionOptions,rotateTo:r,zoomTo:r?this.viewer.getZoomLevel():null,...typeof this.config.transitionOptions=="function"?this.config.transitionOptions(a,s,n):this.config.transitionOptions,...t};return o.effect||(o.effect="none"),this.viewer.panel.hide("description"),this.__hideTooltip(),this.arrowsRenderer.clear(),this.gallery?.config.hideOnClick&&this.gallery.hide(),this.map?.config.minimizeOnHotspotClick&&this.map.minimize(),this.plan?.config.minimizeOnHotspotClick&&this.plan.minimize(),o.rotation&&o.effect==="none"?this.viewer.animate({...o.rotateTo,zoom:o.zoomTo,speed:o.speed}).then(()=>[a,o]):Promise.resolve([a,o])}).then(([a,o])=>{if(this.state.loadingNode!==e)throw Q.getAbortError();return this.markers?.clearMarkers(),this.config.linksOnCompass&&this.compass?.clearHotspots(),this.viewer.setPanorama(a.panorama,{caption:a.caption,description:a.description,panoData:a.panoData,sphereCorrection:a.sphereCorrection,showLoader:o.showLoader,position:o.rotateTo,zoom:o.zoomTo,transition:o.effect==="none"?!1:{effect:o.effect,rotation:o.rotation,speed:o.speed}}).then(c=>{if(!c)throw Q.getAbortError();return a})}).then(a=>{if(this.state.loadingNode!==e)throw Q.getAbortError();return this.state.currentNode=a,this.map&&this.map.setCenter(this.__getNodeMapPosition(a)??this.map.config.center,this.config.map.recenter),this.plan?.setCoordinates(a.gps),this.__addNodeMarkers(a),this.__renderLinks(a),this.__preload(a),this.state.loadingNode=null,this.dispatchEvent(new rg(a,{fromNode:s,fromLink:n,fromLinkPosition:r})),this.viewer.resetIdleTimer(),!0}).catch(a=>{if(Q.isAbortError(a))return!1;throw this.viewer.showError(this.viewer.config.lang.loadError),this.viewer.loader.hide(),this.viewer.navbar.setCaption(""),this.state.loadingNode=null,a})}async gotoLink(e,t="8rpm"){const n=this.getLinkPosition(e);t?await this.viewer.animate({...n,speed:t}):this.viewer.rotate(n)}getLinkPosition(e){const t=this.state.currentNode?.links.find(n=>n.nodeId===e);if(!t)throw new re(`Cannot find link "${e}"`);return this.__getLinkPosition(this.state.currentNode,t)}updateNode(e){if(this.isServerSide)throw new re("Cannot update node in server side mode");const t=this.datasource.updateNode(e);if((e.name||e.thumbnail||e.panorama)&&this.__setGalleryItems(),(e.name||e.gps||e.map)&&this.__setMapHotspots(),(e.name||e.gps||e.plan)&&this.__setPlanHotspots(),this.state.currentNode?.id===t.id){if(this.__hideTooltip(),e.panorama||e.panoData||e.sphereCorrection){this.setCurrentNode(t.id,{forceUpdate:!0});return}e.caption&&this.viewer.setOption("caption",t.caption),e.description&&this.viewer.setOption("description",t.description),(e.links||e.gps)&&this.__renderLinks(t),e.gps&&this.plan?.setCoordinates(t.gps),(e.map||e.gps)&&this.map?.setCenter(this.__getNodeMapPosition(t)),(e.markers||e.gps)&&this.__addNodeMarkers(t)}}__setGalleryItems(){this.gallery&&this.gallery.setItems(Object.values(this.datasource.nodes).filter(e=>e.showInGallery!==!1).map(e=>({id:e.id,panorama:e.panorama,name:e.name,thumbnail:e.thumbnail})),e=>{this.setCurrentNode(e)})}__setMapHotspots(){this.map&&this.map.setHotspots(Object.values(this.datasource.nodes).filter(e=>e.map!==!1).map(e=>({tooltip:e.name,...e.map||{},...this.__getNodeMapPosition(e),id:Ms+e.id})))}__setPlanHotspots(){this.plan&&this.plan.setHotspots(Object.values(this.datasource.nodes).filter(e=>e.plan!==!1).map(e=>({tooltip:e.name,...e.plan||{},coordinates:e.gps,id:Ms+e.id})))}__renderLinks(e){this.arrowsRenderer.clear();const t=[];e.links.forEach(n=>{const s=this.__getLinkPosition(e,n);s.yaw+=n.linkOffset?.yaw??0,s.pitch+=n.linkOffset?.pitch??0,this.isGps&&!this.is3D&&(s.pitch+=this.config.arrowsPosition.linkPitchOffset),t.push(s),this.arrowsRenderer.addLinkArrow(n,s,n.linkOffset?.depth)}),this.arrowsRenderer.render(),this.config.linksOnCompass&&this.compass?.setHotspots(t)}__getLinkPosition(e,t){return this.isGps?Qd(e.gps,t.gps):this.viewer.dataHelper.cleanPosition(t.position)}async __getTooltipContent(e){const t=await this.datasource.loadNode(e.nodeId),n=[];(t.name||t.thumbnail||t.caption)&&(t.name&&n.push(`<h3>${t.name}</h3>`),t.thumbnail&&n.push(`<img src="${t.thumbnail}">`),t.caption&&n.push(`<p>${t.caption}</p>`));let s=n.join("");return this.config.getLinkTooltip&&(s=this.config.getLinkTooltip(s,e,t)),s}__onEnterArrow(e,t){const n=Q.getPosition(this.viewer.container),s={x:t.clientX-n.x,y:t.clientY-n.y};this.config.showLinkTooltip&&(this.state.currentTooltip=this.viewer.createTooltip({...mS,left:s.x,top:s.y,box:{width:20,height:20}}),this.__getTooltipContent(e).then(r=>{r?this.state.currentTooltip.update(r):this.__hideTooltip()})),this.map?.setActiveHotspot(Ms+e.nodeId),this.plan?.setActiveHotspot(Ms+e.nodeId),this.dispatchEvent(new lg(e,this.state.currentNode))}__onHoverArrow(e){const t=Q.getPosition(this.viewer.container),n={x:e.clientX-t.x,y:e.clientY-t.y};this.state.currentTooltip?.move({left:n.x,top:n.y})}__onLeaveArrow(e){this.__hideTooltip(),this.map?.setActiveHotspot(null),this.plan?.setActiveHotspot(null),this.dispatchEvent(new dg(e,this.state.currentNode))}__hideTooltip(){this.state.currentTooltip?.hide(),this.state.currentTooltip=null}__preload(e){this.config.preload&&(this.state.preload[e.id]=!0,this.state.currentNode.links.filter(t=>!this.state.preload[t.nodeId]).filter(t=>typeof this.config.preload=="function"?this.config.preload(this.state.currentNode,t):!0).forEach(t=>{this.state.preload[t.nodeId]=this.datasource.loadNode(t.nodeId).then(n=>this.viewer.textureLoader.preloadPanorama(n.panorama)).then(()=>{this.state.preload[t.nodeId]=!0}).catch(()=>{delete this.state.preload[t.nodeId]})}))}__addNodeMarkers(e){e.markers&&(this.markers?this.markers.setMarkers(e.markers.map(t=>(t.gps&&this.isGps&&(t.position=Qd(e.gps,t.gps),t.data?.map&&Object.assign(t.data.map,this.__getGpsMapPosition(t.gps)),t.data?.plan&&(t.data.plan.coordinates=t.gps)),t))):Q.logWarn(`Node ${e.id} markers ignored because the plugin is not loaded.`))}__getNodeMapPosition(e){const t=this.__getGpsMapPosition(e.gps);return t||(e.map?{x:e.map.x,y:e.map.y}:null)}__getGpsMapPosition(e){const t=this.config.map;return this.isGps&&t&&t.extent&&t.size?{x:Be.mapLinear(e[0],t.extent[0],t.extent[2],0,t.size.width),y:Be.mapLinear(e[1],t.extent[1],t.extent[3],0,t.size.height)}:null}};Wr.id="virtual-tour";Wr.VERSION="5.15.1";Wr.configParser=rh;Wr.readonlyOptions=Object.keys(rh.defaults);var tu=Wr,et;(function(i){i.assertEqual=s=>{};function e(s){}i.assertIs=e;function t(s){throw new Error}i.assertNever=t,i.arrayToEnum=s=>{const r={};for(const a of s)r[a]=a;return r},i.getValidEnumValues=s=>{const r=i.objectKeys(s).filter(o=>typeof s[s[o]]!="number"),a={};for(const o of r)a[o]=s[o];return i.objectValues(a)},i.objectValues=s=>i.objectKeys(s).map(function(r){return s[r]}),i.objectKeys=typeof Object.keys=="function"?s=>Object.keys(s):s=>{const r=[];for(const a in s)Object.prototype.hasOwnProperty.call(s,a)&&r.push(a);return r},i.find=(s,r)=>{for(const a of s)if(r(a))return a},i.isInteger=typeof Number.isInteger=="function"?s=>Number.isInteger(s):s=>typeof s=="number"&&Number.isFinite(s)&&Math.floor(s)===s;function n(s,r=" | "){return s.map(a=>typeof a=="string"?`'${a}'`:a).join(r)}i.joinValues=n,i.jsonStringifyReplacer=(s,r)=>typeof r=="bigint"?r.toString():r})(et||(et={}));var iu;(function(i){i.mergeShapes=(e,t)=>({...e,...t})})(iu||(iu={}));const Me=et.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),An=i=>{switch(typeof i){case"undefined":return Me.undefined;case"string":return Me.string;case"number":return Number.isNaN(i)?Me.nan:Me.number;case"boolean":return Me.boolean;case"function":return Me.function;case"bigint":return Me.bigint;case"symbol":return Me.symbol;case"object":return Array.isArray(i)?Me.array:i===null?Me.null:i.then&&typeof i.then=="function"&&i.catch&&typeof i.catch=="function"?Me.promise:typeof Map<"u"&&i instanceof Map?Me.map:typeof Set<"u"&&i instanceof Set?Me.set:typeof Date<"u"&&i instanceof Date?Me.date:Me.object;default:return Me.unknown}},ee=et.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class mn extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=n=>{this.issues=[...this.issues,n]},this.addIssues=(n=[])=>{this.issues=[...this.issues,...n]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}format(e){const t=e||function(r){return r.message},n={_errors:[]},s=r=>{for(const a of r.issues)if(a.code==="invalid_union")a.unionErrors.map(s);else if(a.code==="invalid_return_type")s(a.returnTypeError);else if(a.code==="invalid_arguments")s(a.argumentsError);else if(a.path.length===0)n._errors.push(t(a));else{let o=n,c=0;for(;c<a.path.length;){const l=a.path[c];c===a.path.length-1?(o[l]=o[l]||{_errors:[]},o[l]._errors.push(t(a))):o[l]=o[l]||{_errors:[]},o=o[l],c++}}};return s(this),n}static assert(e){if(!(e instanceof mn))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,et.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=t=>t.message){const t={},n=[];for(const s of this.issues)if(s.path.length>0){const r=s.path[0];t[r]=t[r]||[],t[r].push(e(s))}else n.push(e(s));return{formErrors:n,fieldErrors:t}}get formErrors(){return this.flatten()}}mn.create=i=>new mn(i);const yc=(i,e)=>{let t;switch(i.code){case ee.invalid_type:i.received===Me.undefined?t="Required":t=`Expected ${i.expected}, received ${i.received}`;break;case ee.invalid_literal:t=`Invalid literal value, expected ${JSON.stringify(i.expected,et.jsonStringifyReplacer)}`;break;case ee.unrecognized_keys:t=`Unrecognized key(s) in object: ${et.joinValues(i.keys,", ")}`;break;case ee.invalid_union:t="Invalid input";break;case ee.invalid_union_discriminator:t=`Invalid discriminator value. Expected ${et.joinValues(i.options)}`;break;case ee.invalid_enum_value:t=`Invalid enum value. Expected ${et.joinValues(i.options)}, received '${i.received}'`;break;case ee.invalid_arguments:t="Invalid function arguments";break;case ee.invalid_return_type:t="Invalid function return type";break;case ee.invalid_date:t="Invalid date";break;case ee.invalid_string:typeof i.validation=="object"?"includes"in i.validation?(t=`Invalid input: must include "${i.validation.includes}"`,typeof i.validation.position=="number"&&(t=`${t} at one or more positions greater than or equal to ${i.validation.position}`)):"startsWith"in i.validation?t=`Invalid input: must start with "${i.validation.startsWith}"`:"endsWith"in i.validation?t=`Invalid input: must end with "${i.validation.endsWith}"`:et.assertNever(i.validation):i.validation!=="regex"?t=`Invalid ${i.validation}`:t="Invalid";break;case ee.too_small:i.type==="array"?t=`Array must contain ${i.exact?"exactly":i.inclusive?"at least":"more than"} ${i.minimum} element(s)`:i.type==="string"?t=`String must contain ${i.exact?"exactly":i.inclusive?"at least":"over"} ${i.minimum} character(s)`:i.type==="number"?t=`Number must be ${i.exact?"exactly equal to ":i.inclusive?"greater than or equal to ":"greater than "}${i.minimum}`:i.type==="bigint"?t=`Number must be ${i.exact?"exactly equal to ":i.inclusive?"greater than or equal to ":"greater than "}${i.minimum}`:i.type==="date"?t=`Date must be ${i.exact?"exactly equal to ":i.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(i.minimum))}`:t="Invalid input";break;case ee.too_big:i.type==="array"?t=`Array must contain ${i.exact?"exactly":i.inclusive?"at most":"less than"} ${i.maximum} element(s)`:i.type==="string"?t=`String must contain ${i.exact?"exactly":i.inclusive?"at most":"under"} ${i.maximum} character(s)`:i.type==="number"?t=`Number must be ${i.exact?"exactly":i.inclusive?"less than or equal to":"less than"} ${i.maximum}`:i.type==="bigint"?t=`BigInt must be ${i.exact?"exactly":i.inclusive?"less than or equal to":"less than"} ${i.maximum}`:i.type==="date"?t=`Date must be ${i.exact?"exactly":i.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(i.maximum))}`:t="Invalid input";break;case ee.custom:t="Invalid input";break;case ee.invalid_intersection_types:t="Intersection results could not be merged";break;case ee.not_multiple_of:t=`Number must be a multiple of ${i.multipleOf}`;break;case ee.not_finite:t="Number must be finite";break;default:t=e.defaultError,et.assertNever(i)}return{message:t}};let MS=yc;function wS(){return MS}const SS=i=>{const{data:e,path:t,errorMaps:n,issueData:s}=i,r=[...t,...s.path||[]],a={...s,path:r};if(s.message!==void 0)return{...s,path:r,message:s.message};let o="";const c=n.filter(l=>!!l).slice().reverse();for(const l of c)o=l(a,{data:e,defaultError:o}).message;return{...s,path:r,message:o}};function ve(i,e){const t=wS(),n=SS({issueData:e,data:i.data,path:i.path,errorMaps:[i.common.contextualErrorMap,i.schemaErrorMap,t,t===yc?void 0:yc].filter(s=>!!s)});i.common.issues.push(n)}class ii{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,t){const n=[];for(const s of t){if(s.status==="aborted")return Ue;s.status==="dirty"&&e.dirty(),n.push(s.value)}return{status:e.value,value:n}}static async mergeObjectAsync(e,t){const n=[];for(const s of t){const r=await s.key,a=await s.value;n.push({key:r,value:a})}return ii.mergeObjectSync(e,n)}static mergeObjectSync(e,t){const n={};for(const s of t){const{key:r,value:a}=s;if(r.status==="aborted"||a.status==="aborted")return Ue;r.status==="dirty"&&e.dirty(),a.status==="dirty"&&e.dirty(),r.value!=="__proto__"&&(typeof a.value<"u"||s.alwaysSet)&&(n[r.value]=a.value)}return{status:e.value,value:n}}}const Ue=Object.freeze({status:"aborted"}),rr=i=>({status:"dirty",value:i}),yi=i=>({status:"valid",value:i}),nu=i=>i.status==="aborted",su=i=>i.status==="dirty",Fs=i=>i.status==="valid",ja=i=>typeof Promise<"u"&&i instanceof Promise;var Te;(function(i){i.errToObj=e=>typeof e=="string"?{message:e}:e||{},i.toString=e=>typeof e=="string"?e:e?.message})(Te||(Te={}));class Zi{constructor(e,t,n,s){this._cachedPath=[],this.parent=e,this.data=t,this._path=n,this._key=s}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const ru=(i,e)=>{if(Fs(e))return{success:!0,data:e.value};if(!i.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new mn(i.common.issues);return this._error=t,this._error}}};function We(i){if(!i)return{};const{errorMap:e,invalid_type_error:t,required_error:n,description:s}=i;if(e&&(t||n))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:s}:{errorMap:(a,o)=>{const{message:c}=i;return a.code==="invalid_enum_value"?{message:c??o.defaultError}:typeof o.data>"u"?{message:c??n??o.defaultError}:a.code!=="invalid_type"?{message:o.defaultError}:{message:c??t??o.defaultError}},description:s}}class Ke{get description(){return this._def.description}_getType(e){return An(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:An(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new ii,ctx:{common:e.parent.common,data:e.data,parsedType:An(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(ja(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const n=this.safeParse(e,t);if(n.success)return n.data;throw n.error}safeParse(e,t){const n={common:{issues:[],async:t?.async??!1,contextualErrorMap:t?.errorMap},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:An(e)},s=this._parseSync({data:e,path:n.path,parent:n});return ru(n,s)}"~validate"(e){const t={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:An(e)};if(!this["~standard"].async)try{const n=this._parseSync({data:e,path:[],parent:t});return Fs(n)?{value:n.value}:{issues:t.common.issues}}catch(n){n?.message?.toLowerCase()?.includes("encountered")&&(this["~standard"].async=!0),t.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:t}).then(n=>Fs(n)?{value:n.value}:{issues:t.common.issues})}async parseAsync(e,t){const n=await this.safeParseAsync(e,t);if(n.success)return n.data;throw n.error}async safeParseAsync(e,t){const n={common:{issues:[],contextualErrorMap:t?.errorMap,async:!0},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:An(e)},s=this._parse({data:e,path:n.path,parent:n}),r=await(ja(s)?s:Promise.resolve(s));return ru(n,r)}refine(e,t){const n=s=>typeof t=="string"||typeof t>"u"?{message:t}:typeof t=="function"?t(s):t;return this._refinement((s,r)=>{const a=e(s),o=()=>r.addIssue({code:ee.custom,...n(s)});return typeof Promise<"u"&&a instanceof Promise?a.then(c=>c?!0:(o(),!1)):a?!0:(o(),!1)})}refinement(e,t){return this._refinement((n,s)=>e(n)?!0:(s.addIssue(typeof t=="function"?t(n,s):t),!1))}_refinement(e){return new ts({schema:this,typeName:Oe.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:t=>this["~validate"](t)}}optional(){return dn.create(this,this._def)}nullable(){return is.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return qi.create(this)}promise(){return no.create(this,this._def)}or(e){return Qa.create([this,e],this._def)}and(e){return eo.create(this,e,this._def)}transform(e){return new ts({...We(this._def),schema:this,typeName:Oe.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t=typeof e=="function"?e:()=>e;return new so({...We(this._def),innerType:this,defaultValue:t,typeName:Oe.ZodDefault})}brand(){return new vg({typeName:Oe.ZodBranded,type:this,...We(this._def)})}catch(e){const t=typeof e=="function"?e:()=>e;return new ro({...We(this._def),innerType:this,catchValue:t,typeName:Oe.ZodCatch})}describe(e){const t=this.constructor;return new t({...this._def,description:e})}pipe(e){return oh.create(this,e)}readonly(){return ao.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const bS=/^c[^\s-]{8,}$/i,TS=/^[0-9a-z]+$/,AS=/^[0-9A-HJKMNP-TV-Z]{26}$/i,CS=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,RS=/^[a-z0-9_-]{21}$/i,PS=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,LS=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,IS=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,DS="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let fl;const NS=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,US=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,OS=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,kS=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,FS=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,BS=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,pg="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",zS=new RegExp(`^${pg}$`);function mg(i){let e="[0-5]\\d";i.precision?e=`${e}\\.\\d{${i.precision}}`:i.precision==null&&(e=`${e}(\\.\\d+)?`);const t=i.precision?"+":"?";return`([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`}function VS(i){return new RegExp(`^${mg(i)}$`)}function HS(i){let e=`${pg}T${mg(i)}`;const t=[];return t.push(i.local?"Z?":"Z"),i.offset&&t.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${t.join("|")})`,new RegExp(`^${e}$`)}function GS(i,e){return!!((e==="v4"||!e)&&NS.test(i)||(e==="v6"||!e)&&OS.test(i))}function WS(i,e){if(!PS.test(i))return!1;try{const[t]=i.split(".");if(!t)return!1;const n=t.replace(/-/g,"+").replace(/_/g,"/").padEnd(t.length+(4-t.length%4)%4,"="),s=JSON.parse(atob(n));return!(typeof s!="object"||s===null||"typ"in s&&s?.typ!=="JWT"||!s.alg||e&&s.alg!==e)}catch{return!1}}function XS(i,e){return!!((e==="v4"||!e)&&US.test(i)||(e==="v6"||!e)&&kS.test(i))}class an extends Ke{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==Me.string){const r=this._getOrReturnCtx(e);return ve(r,{code:ee.invalid_type,expected:Me.string,received:r.parsedType}),Ue}const n=new ii;let s;for(const r of this._def.checks)if(r.kind==="min")e.data.length<r.value&&(s=this._getOrReturnCtx(e,s),ve(s,{code:ee.too_small,minimum:r.value,type:"string",inclusive:!0,exact:!1,message:r.message}),n.dirty());else if(r.kind==="max")e.data.length>r.value&&(s=this._getOrReturnCtx(e,s),ve(s,{code:ee.too_big,maximum:r.value,type:"string",inclusive:!0,exact:!1,message:r.message}),n.dirty());else if(r.kind==="length"){const a=e.data.length>r.value,o=e.data.length<r.value;(a||o)&&(s=this._getOrReturnCtx(e,s),a?ve(s,{code:ee.too_big,maximum:r.value,type:"string",inclusive:!0,exact:!0,message:r.message}):o&&ve(s,{code:ee.too_small,minimum:r.value,type:"string",inclusive:!0,exact:!0,message:r.message}),n.dirty())}else if(r.kind==="email")IS.test(e.data)||(s=this._getOrReturnCtx(e,s),ve(s,{validation:"email",code:ee.invalid_string,message:r.message}),n.dirty());else if(r.kind==="emoji")fl||(fl=new RegExp(DS,"u")),fl.test(e.data)||(s=this._getOrReturnCtx(e,s),ve(s,{validation:"emoji",code:ee.invalid_string,message:r.message}),n.dirty());else if(r.kind==="uuid")CS.test(e.data)||(s=this._getOrReturnCtx(e,s),ve(s,{validation:"uuid",code:ee.invalid_string,message:r.message}),n.dirty());else if(r.kind==="nanoid")RS.test(e.data)||(s=this._getOrReturnCtx(e,s),ve(s,{validation:"nanoid",code:ee.invalid_string,message:r.message}),n.dirty());else if(r.kind==="cuid")bS.test(e.data)||(s=this._getOrReturnCtx(e,s),ve(s,{validation:"cuid",code:ee.invalid_string,message:r.message}),n.dirty());else if(r.kind==="cuid2")TS.test(e.data)||(s=this._getOrReturnCtx(e,s),ve(s,{validation:"cuid2",code:ee.invalid_string,message:r.message}),n.dirty());else if(r.kind==="ulid")AS.test(e.data)||(s=this._getOrReturnCtx(e,s),ve(s,{validation:"ulid",code:ee.invalid_string,message:r.message}),n.dirty());else if(r.kind==="url")try{new URL(e.data)}catch{s=this._getOrReturnCtx(e,s),ve(s,{validation:"url",code:ee.invalid_string,message:r.message}),n.dirty()}else r.kind==="regex"?(r.regex.lastIndex=0,r.regex.test(e.data)||(s=this._getOrReturnCtx(e,s),ve(s,{validation:"regex",code:ee.invalid_string,message:r.message}),n.dirty())):r.kind==="trim"?e.data=e.data.trim():r.kind==="includes"?e.data.includes(r.value,r.position)||(s=this._getOrReturnCtx(e,s),ve(s,{code:ee.invalid_string,validation:{includes:r.value,position:r.position},message:r.message}),n.dirty()):r.kind==="toLowerCase"?e.data=e.data.toLowerCase():r.kind==="toUpperCase"?e.data=e.data.toUpperCase():r.kind==="startsWith"?e.data.startsWith(r.value)||(s=this._getOrReturnCtx(e,s),ve(s,{code:ee.invalid_string,validation:{startsWith:r.value},message:r.message}),n.dirty()):r.kind==="endsWith"?e.data.endsWith(r.value)||(s=this._getOrReturnCtx(e,s),ve(s,{code:ee.invalid_string,validation:{endsWith:r.value},message:r.message}),n.dirty()):r.kind==="datetime"?HS(r).test(e.data)||(s=this._getOrReturnCtx(e,s),ve(s,{code:ee.invalid_string,validation:"datetime",message:r.message}),n.dirty()):r.kind==="date"?zS.test(e.data)||(s=this._getOrReturnCtx(e,s),ve(s,{code:ee.invalid_string,validation:"date",message:r.message}),n.dirty()):r.kind==="time"?VS(r).test(e.data)||(s=this._getOrReturnCtx(e,s),ve(s,{code:ee.invalid_string,validation:"time",message:r.message}),n.dirty()):r.kind==="duration"?LS.test(e.data)||(s=this._getOrReturnCtx(e,s),ve(s,{validation:"duration",code:ee.invalid_string,message:r.message}),n.dirty()):r.kind==="ip"?GS(e.data,r.version)||(s=this._getOrReturnCtx(e,s),ve(s,{validation:"ip",code:ee.invalid_string,message:r.message}),n.dirty()):r.kind==="jwt"?WS(e.data,r.alg)||(s=this._getOrReturnCtx(e,s),ve(s,{validation:"jwt",code:ee.invalid_string,message:r.message}),n.dirty()):r.kind==="cidr"?XS(e.data,r.version)||(s=this._getOrReturnCtx(e,s),ve(s,{validation:"cidr",code:ee.invalid_string,message:r.message}),n.dirty()):r.kind==="base64"?FS.test(e.data)||(s=this._getOrReturnCtx(e,s),ve(s,{validation:"base64",code:ee.invalid_string,message:r.message}),n.dirty()):r.kind==="base64url"?BS.test(e.data)||(s=this._getOrReturnCtx(e,s),ve(s,{validation:"base64url",code:ee.invalid_string,message:r.message}),n.dirty()):et.assertNever(r);return{status:n.value,value:e.data}}_regex(e,t,n){return this.refinement(s=>e.test(s),{validation:t,code:ee.invalid_string,...Te.errToObj(n)})}_addCheck(e){return new an({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...Te.errToObj(e)})}url(e){return this._addCheck({kind:"url",...Te.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...Te.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...Te.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...Te.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...Te.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...Te.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...Te.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...Te.errToObj(e)})}base64url(e){return this._addCheck({kind:"base64url",...Te.errToObj(e)})}jwt(e){return this._addCheck({kind:"jwt",...Te.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...Te.errToObj(e)})}cidr(e){return this._addCheck({kind:"cidr",...Te.errToObj(e)})}datetime(e){return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof e?.precision>"u"?null:e?.precision,offset:e?.offset??!1,local:e?.local??!1,...Te.errToObj(e?.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof e?.precision>"u"?null:e?.precision,...Te.errToObj(e?.message)})}duration(e){return this._addCheck({kind:"duration",...Te.errToObj(e)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...Te.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:t?.position,...Te.errToObj(t?.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...Te.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...Te.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...Te.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...Te.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...Te.errToObj(t)})}nonempty(e){return this.min(1,Te.errToObj(e))}trim(){return new an({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new an({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new an({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isCIDR(){return!!this._def.checks.find(e=>e.kind==="cidr")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get isBase64url(){return!!this._def.checks.find(e=>e.kind==="base64url")}get minLength(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}an.create=i=>new an({checks:[],typeName:Oe.ZodString,coerce:i?.coerce??!1,...We(i)});function $S(i,e){const t=(i.toString().split(".")[1]||"").length,n=(e.toString().split(".")[1]||"").length,s=t>n?t:n,r=Number.parseInt(i.toFixed(s).replace(".","")),a=Number.parseInt(e.toFixed(s).replace(".",""));return r%a/10**s}class Bs extends Ke{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==Me.number){const r=this._getOrReturnCtx(e);return ve(r,{code:ee.invalid_type,expected:Me.number,received:r.parsedType}),Ue}let n;const s=new ii;for(const r of this._def.checks)r.kind==="int"?et.isInteger(e.data)||(n=this._getOrReturnCtx(e,n),ve(n,{code:ee.invalid_type,expected:"integer",received:"float",message:r.message}),s.dirty()):r.kind==="min"?(r.inclusive?e.data<r.value:e.data<=r.value)&&(n=this._getOrReturnCtx(e,n),ve(n,{code:ee.too_small,minimum:r.value,type:"number",inclusive:r.inclusive,exact:!1,message:r.message}),s.dirty()):r.kind==="max"?(r.inclusive?e.data>r.value:e.data>=r.value)&&(n=this._getOrReturnCtx(e,n),ve(n,{code:ee.too_big,maximum:r.value,type:"number",inclusive:r.inclusive,exact:!1,message:r.message}),s.dirty()):r.kind==="multipleOf"?$S(e.data,r.value)!==0&&(n=this._getOrReturnCtx(e,n),ve(n,{code:ee.not_multiple_of,multipleOf:r.value,message:r.message}),s.dirty()):r.kind==="finite"?Number.isFinite(e.data)||(n=this._getOrReturnCtx(e,n),ve(n,{code:ee.not_finite,message:r.message}),s.dirty()):et.assertNever(r);return{status:s.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,Te.toString(t))}gt(e,t){return this.setLimit("min",e,!1,Te.toString(t))}lte(e,t){return this.setLimit("max",e,!0,Te.toString(t))}lt(e,t){return this.setLimit("max",e,!1,Te.toString(t))}setLimit(e,t,n,s){return new Bs({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:n,message:Te.toString(s)}]})}_addCheck(e){return new Bs({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:Te.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:Te.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:Te.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:Te.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:Te.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:Te.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:Te.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:Te.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:Te.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&et.isInteger(e.value))}get isFinite(){let e=null,t=null;for(const n of this._def.checks){if(n.kind==="finite"||n.kind==="int"||n.kind==="multipleOf")return!0;n.kind==="min"?(t===null||n.value>t)&&(t=n.value):n.kind==="max"&&(e===null||n.value<e)&&(e=n.value)}return Number.isFinite(t)&&Number.isFinite(e)}}Bs.create=i=>new Bs({checks:[],typeName:Oe.ZodNumber,coerce:i?.coerce||!1,...We(i)});class Pr extends Ke{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==Me.bigint)return this._getInvalidInput(e);let n;const s=new ii;for(const r of this._def.checks)r.kind==="min"?(r.inclusive?e.data<r.value:e.data<=r.value)&&(n=this._getOrReturnCtx(e,n),ve(n,{code:ee.too_small,type:"bigint",minimum:r.value,inclusive:r.inclusive,message:r.message}),s.dirty()):r.kind==="max"?(r.inclusive?e.data>r.value:e.data>=r.value)&&(n=this._getOrReturnCtx(e,n),ve(n,{code:ee.too_big,type:"bigint",maximum:r.value,inclusive:r.inclusive,message:r.message}),s.dirty()):r.kind==="multipleOf"?e.data%r.value!==BigInt(0)&&(n=this._getOrReturnCtx(e,n),ve(n,{code:ee.not_multiple_of,multipleOf:r.value,message:r.message}),s.dirty()):et.assertNever(r);return{status:s.value,value:e.data}}_getInvalidInput(e){const t=this._getOrReturnCtx(e);return ve(t,{code:ee.invalid_type,expected:Me.bigint,received:t.parsedType}),Ue}gte(e,t){return this.setLimit("min",e,!0,Te.toString(t))}gt(e,t){return this.setLimit("min",e,!1,Te.toString(t))}lte(e,t){return this.setLimit("max",e,!0,Te.toString(t))}lt(e,t){return this.setLimit("max",e,!1,Te.toString(t))}setLimit(e,t,n,s){return new Pr({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:n,message:Te.toString(s)}]})}_addCheck(e){return new Pr({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:Te.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:Te.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:Te.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:Te.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:Te.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}Pr.create=i=>new Pr({checks:[],typeName:Oe.ZodBigInt,coerce:i?.coerce??!1,...We(i)});class Ec extends Ke{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==Me.boolean){const n=this._getOrReturnCtx(e);return ve(n,{code:ee.invalid_type,expected:Me.boolean,received:n.parsedType}),Ue}return yi(e.data)}}Ec.create=i=>new Ec({typeName:Oe.ZodBoolean,coerce:i?.coerce||!1,...We(i)});class Ja extends Ke{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==Me.date){const r=this._getOrReturnCtx(e);return ve(r,{code:ee.invalid_type,expected:Me.date,received:r.parsedType}),Ue}if(Number.isNaN(e.data.getTime())){const r=this._getOrReturnCtx(e);return ve(r,{code:ee.invalid_date}),Ue}const n=new ii;let s;for(const r of this._def.checks)r.kind==="min"?e.data.getTime()<r.value&&(s=this._getOrReturnCtx(e,s),ve(s,{code:ee.too_small,message:r.message,inclusive:!0,exact:!1,minimum:r.value,type:"date"}),n.dirty()):r.kind==="max"?e.data.getTime()>r.value&&(s=this._getOrReturnCtx(e,s),ve(s,{code:ee.too_big,message:r.message,inclusive:!0,exact:!1,maximum:r.value,type:"date"}),n.dirty()):et.assertNever(r);return{status:n.value,value:new Date(e.data.getTime())}}_addCheck(e){return new Ja({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:Te.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:Te.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e!=null?new Date(e):null}}Ja.create=i=>new Ja({checks:[],coerce:i?.coerce||!1,typeName:Oe.ZodDate,...We(i)});class au extends Ke{_parse(e){if(this._getType(e)!==Me.symbol){const n=this._getOrReturnCtx(e);return ve(n,{code:ee.invalid_type,expected:Me.symbol,received:n.parsedType}),Ue}return yi(e.data)}}au.create=i=>new au({typeName:Oe.ZodSymbol,...We(i)});class Mc extends Ke{_parse(e){if(this._getType(e)!==Me.undefined){const n=this._getOrReturnCtx(e);return ve(n,{code:ee.invalid_type,expected:Me.undefined,received:n.parsedType}),Ue}return yi(e.data)}}Mc.create=i=>new Mc({typeName:Oe.ZodUndefined,...We(i)});class wc extends Ke{_parse(e){if(this._getType(e)!==Me.null){const n=this._getOrReturnCtx(e);return ve(n,{code:ee.invalid_type,expected:Me.null,received:n.parsedType}),Ue}return yi(e.data)}}wc.create=i=>new wc({typeName:Oe.ZodNull,...We(i)});class ou extends Ke{constructor(){super(...arguments),this._any=!0}_parse(e){return yi(e.data)}}ou.create=i=>new ou({typeName:Oe.ZodAny,...We(i)});class Sc extends Ke{constructor(){super(...arguments),this._unknown=!0}_parse(e){return yi(e.data)}}Sc.create=i=>new Sc({typeName:Oe.ZodUnknown,...We(i)});class Bn extends Ke{_parse(e){const t=this._getOrReturnCtx(e);return ve(t,{code:ee.invalid_type,expected:Me.never,received:t.parsedType}),Ue}}Bn.create=i=>new Bn({typeName:Oe.ZodNever,...We(i)});class lu extends Ke{_parse(e){if(this._getType(e)!==Me.undefined){const n=this._getOrReturnCtx(e);return ve(n,{code:ee.invalid_type,expected:Me.void,received:n.parsedType}),Ue}return yi(e.data)}}lu.create=i=>new lu({typeName:Oe.ZodVoid,...We(i)});class qi extends Ke{_parse(e){const{ctx:t,status:n}=this._processInputParams(e),s=this._def;if(t.parsedType!==Me.array)return ve(t,{code:ee.invalid_type,expected:Me.array,received:t.parsedType}),Ue;if(s.exactLength!==null){const a=t.data.length>s.exactLength.value,o=t.data.length<s.exactLength.value;(a||o)&&(ve(t,{code:a?ee.too_big:ee.too_small,minimum:o?s.exactLength.value:void 0,maximum:a?s.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:s.exactLength.message}),n.dirty())}if(s.minLength!==null&&t.data.length<s.minLength.value&&(ve(t,{code:ee.too_small,minimum:s.minLength.value,type:"array",inclusive:!0,exact:!1,message:s.minLength.message}),n.dirty()),s.maxLength!==null&&t.data.length>s.maxLength.value&&(ve(t,{code:ee.too_big,maximum:s.maxLength.value,type:"array",inclusive:!0,exact:!1,message:s.maxLength.message}),n.dirty()),t.common.async)return Promise.all([...t.data].map((a,o)=>s.type._parseAsync(new Zi(t,a,t.path,o)))).then(a=>ii.mergeArray(n,a));const r=[...t.data].map((a,o)=>s.type._parseSync(new Zi(t,a,t.path,o)));return ii.mergeArray(n,r)}get element(){return this._def.type}min(e,t){return new qi({...this._def,minLength:{value:e,message:Te.toString(t)}})}max(e,t){return new qi({...this._def,maxLength:{value:e,message:Te.toString(t)}})}length(e,t){return new qi({...this._def,exactLength:{value:e,message:Te.toString(t)}})}nonempty(e){return this.min(1,e)}}qi.create=(i,e)=>new qi({type:i,minLength:null,maxLength:null,exactLength:null,typeName:Oe.ZodArray,...We(e)});function As(i){if(i instanceof Pt){const e={};for(const t in i.shape){const n=i.shape[t];e[t]=dn.create(As(n))}return new Pt({...i._def,shape:()=>e})}else return i instanceof qi?new qi({...i._def,type:As(i.element)}):i instanceof dn?dn.create(As(i.unwrap())):i instanceof is?is.create(As(i.unwrap())):i instanceof Qn?Qn.create(i.items.map(e=>As(e))):i}class Pt extends Ke{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),t=et.objectKeys(e);return this._cached={shape:e,keys:t},this._cached}_parse(e){if(this._getType(e)!==Me.object){const l=this._getOrReturnCtx(e);return ve(l,{code:ee.invalid_type,expected:Me.object,received:l.parsedType}),Ue}const{status:n,ctx:s}=this._processInputParams(e),{shape:r,keys:a}=this._getCached(),o=[];if(!(this._def.catchall instanceof Bn&&this._def.unknownKeys==="strip"))for(const l in s.data)a.includes(l)||o.push(l);const c=[];for(const l of a){const h=r[l],f=s.data[l];c.push({key:{status:"valid",value:l},value:h._parse(new Zi(s,f,s.path,l)),alwaysSet:l in s.data})}if(this._def.catchall instanceof Bn){const l=this._def.unknownKeys;if(l==="passthrough")for(const h of o)c.push({key:{status:"valid",value:h},value:{status:"valid",value:s.data[h]}});else if(l==="strict")o.length>0&&(ve(s,{code:ee.unrecognized_keys,keys:o}),n.dirty());else if(l!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const l=this._def.catchall;for(const h of o){const f=s.data[h];c.push({key:{status:"valid",value:h},value:l._parse(new Zi(s,f,s.path,h)),alwaysSet:h in s.data})}}return s.common.async?Promise.resolve().then(async()=>{const l=[];for(const h of c){const f=await h.key,p=await h.value;l.push({key:f,value:p,alwaysSet:h.alwaysSet})}return l}).then(l=>ii.mergeObjectSync(n,l)):ii.mergeObjectSync(n,c)}get shape(){return this._def.shape()}strict(e){return Te.errToObj,new Pt({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(t,n)=>{const s=this._def.errorMap?.(t,n).message??n.defaultError;return t.code==="unrecognized_keys"?{message:Te.errToObj(e).message??s}:{message:s}}}:{}})}strip(){return new Pt({...this._def,unknownKeys:"strip"})}passthrough(){return new Pt({...this._def,unknownKeys:"passthrough"})}extend(e){return new Pt({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new Pt({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:Oe.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new Pt({...this._def,catchall:e})}pick(e){const t={};for(const n of et.objectKeys(e))e[n]&&this.shape[n]&&(t[n]=this.shape[n]);return new Pt({...this._def,shape:()=>t})}omit(e){const t={};for(const n of et.objectKeys(this.shape))e[n]||(t[n]=this.shape[n]);return new Pt({...this._def,shape:()=>t})}deepPartial(){return As(this)}partial(e){const t={};for(const n of et.objectKeys(this.shape)){const s=this.shape[n];e&&!e[n]?t[n]=s:t[n]=s.optional()}return new Pt({...this._def,shape:()=>t})}required(e){const t={};for(const n of et.objectKeys(this.shape))if(e&&!e[n])t[n]=this.shape[n];else{let r=this.shape[n];for(;r instanceof dn;)r=r._def.innerType;t[n]=r}return new Pt({...this._def,shape:()=>t})}keyof(){return gg(et.objectKeys(this.shape))}}Pt.create=(i,e)=>new Pt({shape:()=>i,unknownKeys:"strip",catchall:Bn.create(),typeName:Oe.ZodObject,...We(e)});Pt.strictCreate=(i,e)=>new Pt({shape:()=>i,unknownKeys:"strict",catchall:Bn.create(),typeName:Oe.ZodObject,...We(e)});Pt.lazycreate=(i,e)=>new Pt({shape:i,unknownKeys:"strip",catchall:Bn.create(),typeName:Oe.ZodObject,...We(e)});class Qa extends Ke{_parse(e){const{ctx:t}=this._processInputParams(e),n=this._def.options;function s(r){for(const o of r)if(o.result.status==="valid")return o.result;for(const o of r)if(o.result.status==="dirty")return t.common.issues.push(...o.ctx.common.issues),o.result;const a=r.map(o=>new mn(o.ctx.common.issues));return ve(t,{code:ee.invalid_union,unionErrors:a}),Ue}if(t.common.async)return Promise.all(n.map(async r=>{const a={...t,common:{...t.common,issues:[]},parent:null};return{result:await r._parseAsync({data:t.data,path:t.path,parent:a}),ctx:a}})).then(s);{let r;const a=[];for(const c of n){const l={...t,common:{...t.common,issues:[]},parent:null},h=c._parseSync({data:t.data,path:t.path,parent:l});if(h.status==="valid")return h;h.status==="dirty"&&!r&&(r={result:h,ctx:l}),l.common.issues.length&&a.push(l.common.issues)}if(r)return t.common.issues.push(...r.ctx.common.issues),r.result;const o=a.map(c=>new mn(c));return ve(t,{code:ee.invalid_union,unionErrors:o}),Ue}}get options(){return this._def.options}}Qa.create=(i,e)=>new Qa({options:i,typeName:Oe.ZodUnion,...We(e)});const nn=i=>i instanceof Tc?nn(i.schema):i instanceof ts?nn(i.innerType()):i instanceof io?[i.value]:i instanceof es?i.options:i instanceof Ac?et.objectValues(i.enum):i instanceof so?nn(i._def.innerType):i instanceof Mc?[void 0]:i instanceof wc?[null]:i instanceof dn?[void 0,...nn(i.unwrap())]:i instanceof is?[null,...nn(i.unwrap())]:i instanceof vg||i instanceof ao?nn(i.unwrap()):i instanceof ro?nn(i._def.innerType):[];class ah extends Ke{_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==Me.object)return ve(t,{code:ee.invalid_type,expected:Me.object,received:t.parsedType}),Ue;const n=this.discriminator,s=t.data[n],r=this.optionsMap.get(s);return r?t.common.async?r._parseAsync({data:t.data,path:t.path,parent:t}):r._parseSync({data:t.data,path:t.path,parent:t}):(ve(t,{code:ee.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[n]}),Ue)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,n){const s=new Map;for(const r of t){const a=nn(r.shape[e]);if(!a.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const o of a){if(s.has(o))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);s.set(o,r)}}return new ah({typeName:Oe.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:s,...We(n)})}}function bc(i,e){const t=An(i),n=An(e);if(i===e)return{valid:!0,data:i};if(t===Me.object&&n===Me.object){const s=et.objectKeys(e),r=et.objectKeys(i).filter(o=>s.indexOf(o)!==-1),a={...i,...e};for(const o of r){const c=bc(i[o],e[o]);if(!c.valid)return{valid:!1};a[o]=c.data}return{valid:!0,data:a}}else if(t===Me.array&&n===Me.array){if(i.length!==e.length)return{valid:!1};const s=[];for(let r=0;r<i.length;r++){const a=i[r],o=e[r],c=bc(a,o);if(!c.valid)return{valid:!1};s.push(c.data)}return{valid:!0,data:s}}else return t===Me.date&&n===Me.date&&+i==+e?{valid:!0,data:i}:{valid:!1}}class eo extends Ke{_parse(e){const{status:t,ctx:n}=this._processInputParams(e),s=(r,a)=>{if(nu(r)||nu(a))return Ue;const o=bc(r.value,a.value);return o.valid?((su(r)||su(a))&&t.dirty(),{status:t.value,value:o.data}):(ve(n,{code:ee.invalid_intersection_types}),Ue)};return n.common.async?Promise.all([this._def.left._parseAsync({data:n.data,path:n.path,parent:n}),this._def.right._parseAsync({data:n.data,path:n.path,parent:n})]).then(([r,a])=>s(r,a)):s(this._def.left._parseSync({data:n.data,path:n.path,parent:n}),this._def.right._parseSync({data:n.data,path:n.path,parent:n}))}}eo.create=(i,e,t)=>new eo({left:i,right:e,typeName:Oe.ZodIntersection,...We(t)});class Qn extends Ke{_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==Me.array)return ve(n,{code:ee.invalid_type,expected:Me.array,received:n.parsedType}),Ue;if(n.data.length<this._def.items.length)return ve(n,{code:ee.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Ue;!this._def.rest&&n.data.length>this._def.items.length&&(ve(n,{code:ee.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const r=[...n.data].map((a,o)=>{const c=this._def.items[o]||this._def.rest;return c?c._parse(new Zi(n,a,n.path,o)):null}).filter(a=>!!a);return n.common.async?Promise.all(r).then(a=>ii.mergeArray(t,a)):ii.mergeArray(t,r)}get items(){return this._def.items}rest(e){return new Qn({...this._def,rest:e})}}Qn.create=(i,e)=>{if(!Array.isArray(i))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Qn({items:i,typeName:Oe.ZodTuple,rest:null,...We(e)})};class to extends Ke{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==Me.object)return ve(n,{code:ee.invalid_type,expected:Me.object,received:n.parsedType}),Ue;const s=[],r=this._def.keyType,a=this._def.valueType;for(const o in n.data)s.push({key:r._parse(new Zi(n,o,n.path,o)),value:a._parse(new Zi(n,n.data[o],n.path,o)),alwaysSet:o in n.data});return n.common.async?ii.mergeObjectAsync(t,s):ii.mergeObjectSync(t,s)}get element(){return this._def.valueType}static create(e,t,n){return t instanceof Ke?new to({keyType:e,valueType:t,typeName:Oe.ZodRecord,...We(n)}):new to({keyType:an.create(),valueType:e,typeName:Oe.ZodRecord,...We(t)})}}class cu extends Ke{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==Me.map)return ve(n,{code:ee.invalid_type,expected:Me.map,received:n.parsedType}),Ue;const s=this._def.keyType,r=this._def.valueType,a=[...n.data.entries()].map(([o,c],l)=>({key:s._parse(new Zi(n,o,n.path,[l,"key"])),value:r._parse(new Zi(n,c,n.path,[l,"value"]))}));if(n.common.async){const o=new Map;return Promise.resolve().then(async()=>{for(const c of a){const l=await c.key,h=await c.value;if(l.status==="aborted"||h.status==="aborted")return Ue;(l.status==="dirty"||h.status==="dirty")&&t.dirty(),o.set(l.value,h.value)}return{status:t.value,value:o}})}else{const o=new Map;for(const c of a){const l=c.key,h=c.value;if(l.status==="aborted"||h.status==="aborted")return Ue;(l.status==="dirty"||h.status==="dirty")&&t.dirty(),o.set(l.value,h.value)}return{status:t.value,value:o}}}}cu.create=(i,e,t)=>new cu({valueType:e,keyType:i,typeName:Oe.ZodMap,...We(t)});class Lr extends Ke{_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==Me.set)return ve(n,{code:ee.invalid_type,expected:Me.set,received:n.parsedType}),Ue;const s=this._def;s.minSize!==null&&n.data.size<s.minSize.value&&(ve(n,{code:ee.too_small,minimum:s.minSize.value,type:"set",inclusive:!0,exact:!1,message:s.minSize.message}),t.dirty()),s.maxSize!==null&&n.data.size>s.maxSize.value&&(ve(n,{code:ee.too_big,maximum:s.maxSize.value,type:"set",inclusive:!0,exact:!1,message:s.maxSize.message}),t.dirty());const r=this._def.valueType;function a(c){const l=new Set;for(const h of c){if(h.status==="aborted")return Ue;h.status==="dirty"&&t.dirty(),l.add(h.value)}return{status:t.value,value:l}}const o=[...n.data.values()].map((c,l)=>r._parse(new Zi(n,c,n.path,l)));return n.common.async?Promise.all(o).then(c=>a(c)):a(o)}min(e,t){return new Lr({...this._def,minSize:{value:e,message:Te.toString(t)}})}max(e,t){return new Lr({...this._def,maxSize:{value:e,message:Te.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}Lr.create=(i,e)=>new Lr({valueType:i,minSize:null,maxSize:null,typeName:Oe.ZodSet,...We(e)});class Tc extends Ke{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}Tc.create=(i,e)=>new Tc({getter:i,typeName:Oe.ZodLazy,...We(e)});class io extends Ke{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return ve(t,{received:t.data,code:ee.invalid_literal,expected:this._def.value}),Ue}return{status:"valid",value:e.data}}get value(){return this._def.value}}io.create=(i,e)=>new io({value:i,typeName:Oe.ZodLiteral,...We(e)});function gg(i,e){return new es({values:i,typeName:Oe.ZodEnum,...We(e)})}class es extends Ke{_parse(e){if(typeof e.data!="string"){const t=this._getOrReturnCtx(e),n=this._def.values;return ve(t,{expected:et.joinValues(n),received:t.parsedType,code:ee.invalid_type}),Ue}if(this._cache||(this._cache=new Set(this._def.values)),!this._cache.has(e.data)){const t=this._getOrReturnCtx(e),n=this._def.values;return ve(t,{received:t.data,code:ee.invalid_enum_value,options:n}),Ue}return yi(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e,t=this._def){return es.create(e,{...this._def,...t})}exclude(e,t=this._def){return es.create(this.options.filter(n=>!e.includes(n)),{...this._def,...t})}}es.create=gg;class Ac extends Ke{_parse(e){const t=et.getValidEnumValues(this._def.values),n=this._getOrReturnCtx(e);if(n.parsedType!==Me.string&&n.parsedType!==Me.number){const s=et.objectValues(t);return ve(n,{expected:et.joinValues(s),received:n.parsedType,code:ee.invalid_type}),Ue}if(this._cache||(this._cache=new Set(et.getValidEnumValues(this._def.values))),!this._cache.has(e.data)){const s=et.objectValues(t);return ve(n,{received:n.data,code:ee.invalid_enum_value,options:s}),Ue}return yi(e.data)}get enum(){return this._def.values}}Ac.create=(i,e)=>new Ac({values:i,typeName:Oe.ZodNativeEnum,...We(e)});class no extends Ke{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==Me.promise&&t.common.async===!1)return ve(t,{code:ee.invalid_type,expected:Me.promise,received:t.parsedType}),Ue;const n=t.parsedType===Me.promise?t.data:Promise.resolve(t.data);return yi(n.then(s=>this._def.type.parseAsync(s,{path:t.path,errorMap:t.common.contextualErrorMap})))}}no.create=(i,e)=>new no({type:i,typeName:Oe.ZodPromise,...We(e)});class ts extends Ke{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===Oe.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:n}=this._processInputParams(e),s=this._def.effect||null,r={addIssue:a=>{ve(n,a),a.fatal?t.abort():t.dirty()},get path(){return n.path}};if(r.addIssue=r.addIssue.bind(r),s.type==="preprocess"){const a=s.transform(n.data,r);if(n.common.async)return Promise.resolve(a).then(async o=>{if(t.value==="aborted")return Ue;const c=await this._def.schema._parseAsync({data:o,path:n.path,parent:n});return c.status==="aborted"?Ue:c.status==="dirty"||t.value==="dirty"?rr(c.value):c});{if(t.value==="aborted")return Ue;const o=this._def.schema._parseSync({data:a,path:n.path,parent:n});return o.status==="aborted"?Ue:o.status==="dirty"||t.value==="dirty"?rr(o.value):o}}if(s.type==="refinement"){const a=o=>{const c=s.refinement(o,r);if(n.common.async)return Promise.resolve(c);if(c instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return o};if(n.common.async===!1){const o=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});return o.status==="aborted"?Ue:(o.status==="dirty"&&t.dirty(),a(o.value),{status:t.value,value:o.value})}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(o=>o.status==="aborted"?Ue:(o.status==="dirty"&&t.dirty(),a(o.value).then(()=>({status:t.value,value:o.value}))))}if(s.type==="transform")if(n.common.async===!1){const a=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});if(!Fs(a))return Ue;const o=s.transform(a.value,r);if(o instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:o}}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(a=>Fs(a)?Promise.resolve(s.transform(a.value,r)).then(o=>({status:t.value,value:o})):Ue);et.assertNever(s)}}ts.create=(i,e,t)=>new ts({schema:i,typeName:Oe.ZodEffects,effect:e,...We(t)});ts.createWithPreprocess=(i,e,t)=>new ts({schema:e,effect:{type:"preprocess",transform:i},typeName:Oe.ZodEffects,...We(t)});class dn extends Ke{_parse(e){return this._getType(e)===Me.undefined?yi(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}dn.create=(i,e)=>new dn({innerType:i,typeName:Oe.ZodOptional,...We(e)});class is extends Ke{_parse(e){return this._getType(e)===Me.null?yi(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}is.create=(i,e)=>new is({innerType:i,typeName:Oe.ZodNullable,...We(e)});class so extends Ke{_parse(e){const{ctx:t}=this._processInputParams(e);let n=t.data;return t.parsedType===Me.undefined&&(n=this._def.defaultValue()),this._def.innerType._parse({data:n,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}so.create=(i,e)=>new so({innerType:i,typeName:Oe.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...We(e)});class ro extends Ke{_parse(e){const{ctx:t}=this._processInputParams(e),n={...t,common:{...t.common,issues:[]}},s=this._def.innerType._parse({data:n.data,path:n.path,parent:{...n}});return ja(s)?s.then(r=>({status:"valid",value:r.status==="valid"?r.value:this._def.catchValue({get error(){return new mn(n.common.issues)},input:n.data})})):{status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new mn(n.common.issues)},input:n.data})}}removeCatch(){return this._def.innerType}}ro.create=(i,e)=>new ro({innerType:i,typeName:Oe.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...We(e)});class hu extends Ke{_parse(e){if(this._getType(e)!==Me.nan){const n=this._getOrReturnCtx(e);return ve(n,{code:ee.invalid_type,expected:Me.nan,received:n.parsedType}),Ue}return{status:"valid",value:e.data}}}hu.create=i=>new hu({typeName:Oe.ZodNaN,...We(i)});class vg extends Ke{_parse(e){const{ctx:t}=this._processInputParams(e),n=t.data;return this._def.type._parse({data:n,path:t.path,parent:t})}unwrap(){return this._def.type}}class oh extends Ke{_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.common.async)return(async()=>{const r=await this._def.in._parseAsync({data:n.data,path:n.path,parent:n});return r.status==="aborted"?Ue:r.status==="dirty"?(t.dirty(),rr(r.value)):this._def.out._parseAsync({data:r.value,path:n.path,parent:n})})();{const s=this._def.in._parseSync({data:n.data,path:n.path,parent:n});return s.status==="aborted"?Ue:s.status==="dirty"?(t.dirty(),{status:"dirty",value:s.value}):this._def.out._parseSync({data:s.value,path:n.path,parent:n})}}static create(e,t){return new oh({in:e,out:t,typeName:Oe.ZodPipeline})}}class ao extends Ke{_parse(e){const t=this._def.innerType._parse(e),n=s=>(Fs(s)&&(s.value=Object.freeze(s.value)),s);return ja(t)?t.then(s=>n(s)):n(t)}unwrap(){return this._def.innerType}}ao.create=(i,e)=>new ao({innerType:i,typeName:Oe.ZodReadonly,...We(e)});var Oe;(function(i){i.ZodString="ZodString",i.ZodNumber="ZodNumber",i.ZodNaN="ZodNaN",i.ZodBigInt="ZodBigInt",i.ZodBoolean="ZodBoolean",i.ZodDate="ZodDate",i.ZodSymbol="ZodSymbol",i.ZodUndefined="ZodUndefined",i.ZodNull="ZodNull",i.ZodAny="ZodAny",i.ZodUnknown="ZodUnknown",i.ZodNever="ZodNever",i.ZodVoid="ZodVoid",i.ZodArray="ZodArray",i.ZodObject="ZodObject",i.ZodUnion="ZodUnion",i.ZodDiscriminatedUnion="ZodDiscriminatedUnion",i.ZodIntersection="ZodIntersection",i.ZodTuple="ZodTuple",i.ZodRecord="ZodRecord",i.ZodMap="ZodMap",i.ZodSet="ZodSet",i.ZodFunction="ZodFunction",i.ZodLazy="ZodLazy",i.ZodLiteral="ZodLiteral",i.ZodEnum="ZodEnum",i.ZodEffects="ZodEffects",i.ZodNativeEnum="ZodNativeEnum",i.ZodOptional="ZodOptional",i.ZodNullable="ZodNullable",i.ZodDefault="ZodDefault",i.ZodCatch="ZodCatch",i.ZodPromise="ZodPromise",i.ZodBranded="ZodBranded",i.ZodPipeline="ZodPipeline",i.ZodReadonly="ZodReadonly"})(Oe||(Oe={}));const Mt=an.create,ct=Bs.create,_g=Ec.create,qS=Sc.create;Bn.create;const oo=qi.create,qt=Pt.create;Qa.create;const YS=ah.create;eo.create;Qn.create;const ZS=to.create,Da=io.create,Ir=es.create;no.create;dn.create;is.create;const zs=Mt().regex(/^[0-9A-HJKMNP-TV-Z]{26}$/,"ULID inválido"),xg=Mt().min(1).max(64).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/,"Slug inválido (kebab-case)"),Ri=Mt().datetime({offset:!0}),To=ct().min(-180).max(180),Ao=ct().min(-90).max(90),lo=ct().min(30).max(150),KS=qt({min:ct().min(0).max(100),max:ct().min(0).max(100)}),jS=Mt().regex(/^(?:#[0-9a-fA-F]{3,8}|rgba?\([^)]+\))$/,"Color CSS inválido"),JS=[{level:0,width:2048,height:1024,cols:4,rows:2,tilePx:512},{level:1,width:5120,height:2560,cols:8,rows:4,tilePx:640},{level:2,width:11264,height:5632,cols:16,rows:8,tilePx:704}];JS.reduce((i,e)=>i+e.cols*e.rows,0);const yg=30,Cc=90;function wa(i,e=yg,t=Cc){const s=(Math.min(Math.max(i,e),t)-e)/(t-e)*100;return Math.round(Math.min(Math.max(s,0),100))}function pl(i){const e=Math.min(Math.max(Math.min(i.min,i.max),yg),Cc-1),t=Math.min(Math.max(Math.max(i.min,i.max),e+1),Cc);return{minFov:e,maxFov:t}}function Na(i){const e=new Error(i);return e.source="ulid",e}const lh="0123456789ABCDEFGHJKMNPQRSTVWXYZ",Mr=lh.length,du=Math.pow(2,48)-1,QS=10,eb=16;function tb(i){let e=Math.floor(i()*Mr);return e===Mr&&(e=Mr-1),lh.charAt(e)}function ib(i,e){if(isNaN(i))throw new Error(i+" must be a number");if(i>du)throw Na("cannot encode time greater than "+du);if(i<0)throw Na("time must be positive");if(Number.isInteger(Number(i))===!1)throw Na("time must be an integer");let t,n="";for(;e>0;e--)t=i%Mr,n=lh.charAt(t)+n,i=(i-t)/Mr;return n}function nb(i,e){let t="";for(;i>0;i--)t=tb(e)+t;return t}function sb(i=!1,e){e||(e=typeof window<"u"?window:null);const t=e&&(e.crypto||e.msCrypto);if(t)return()=>{const n=new Uint8Array(1);return t.getRandomValues(n),n[0]/255};try{const n=require("crypto");return()=>n.randomBytes(1).readUInt8()/255}catch{}if(i){try{console.error("secure crypto unusable, falling back to insecure Math.random()!")}catch{}return()=>Math.random()}throw Na("secure crypto unusable, insecure Math.random not allowed")}function rb(i){return i||(i=sb()),function(t){return isNaN(t)&&(t=Date.now()),ib(t,QS)+nb(eb,i)}}rb();const ab=qt({width:ct().int().positive(),cols:ct().int().positive(),rows:ct().int().positive()}),ob=qt({width:ct().int().positive(),cols:ct().int().positive(),rows:ct().int().positive(),nbLevels:ct().int().positive(),baseUrl:Mt().min(1),tileUrlTemplate:Mt().min(1),levels:oo(ab)}),lb=qt({icon:Ir(["arrow","circle","info","whatsapp","star"]).default("arrow"),bgColor:jS.default("#d63031"),opacity:ct().min(.1).max(1).default(.9),sizeDeg:ct().min(1).max(20).default(5)}),ml={id:zs,title:Mt().min(1).max(120).optional(),yaw:To,pitch:Ao,zoomRange:KS.optional(),style:lb.optional(),createdAt:Ri,updatedAt:Ri},cb=YS("type",[qt({...ml,type:Da("nav"),targetSceneId:zs,targetYaw:To.optional(),targetPitch:Ao.optional(),targetFov:lo.optional(),transitionEffect:Ir(["blend","fade","none"]).default("blend"),transitionDurationMs:ct().int().min(0).max(5e3).default(750)}),qt({...ml,type:Da("info"),content:Mt().min(1).max(4e3)}),qt({...ml,type:Da("link"),url:Mt().url().max(2e3),action:Ir(["new-tab","same-tab"]).default("new-tab")})]),hb=qt({id:zs,yaw:To,pitch:Ao,widthDeg:ct().min(1).max(120),aspectRatio:ct().min(.1).max(10),src:Mt().min(1).max(500),opacity:ct().min(.1).max(1).default(1),rotationDeg:ct().min(-180).max(180).default(0),createdAt:Ri,updatedAt:Ri}),db=qt({yaw:To.default(0),pitch:Ao.default(0),fov:lo.default(90)}),ub=qt({min:lo.default(60),max:lo.default(150)}),fb=qt({url:Mt().min(1).max(500),volume:ct().min(0).max(1).default(.8)}),pb=qt({gsvId:Mt().max(500).optional(),gsvUrl:Mt().url().max(2e3).optional(),gsvHeading:ct().min(-360).max(360).optional()}),mb=qt({pan:ct().min(-360).max(360).default(0),tilt:ct().min(-180).max(180).default(0),roll:ct().min(-180).max(180).default(0)}),gb=qt({id:zs,name:Mt().min(1).max(120),revHash:Mt().regex(/^[0-9a-f]{10}$/),tiles:ob,lat:ct().min(-90).max(90).optional(),lng:ct().min(-180).max(180).optional(),defaultView:db,zoomLimit:ub,audio:fb.optional(),gsv:pb.optional(),sphereCorrection:mb.optional(),hotspots:oo(cb).default([]),patches:oo(hb).default([]),createdAt:Ri,updatedAt:Ri}),vb=qt({enabled:_g().default(!1),waitTimeMs:ct().int().min(0).max(6e4).default(4e3),speedDegPerSec:ct().min(.1).max(30).default(2)}),_b=qt({schemaVersion:Da(1),id:zs,slug:xg,title:Mt().min(1).max(120),clientName:Mt().max(120).optional(),whatsappNumber:Mt().regex(/^\+?[0-9][0-9\s-]{6,19}$/,"Número de WhatsApp inválido").optional(),whatsappDefaultText:Mt().max(500).optional(),hostingStatus:Ir(["active","suspended"]).default("active"),hostingExpiresAt:Ri.optional(),createdAt:Ri,updatedAt:Ri,defaultSceneId:zs.optional(),autoRotate:vb,littlePlanetIntro:_g().default(!1),scenes:oo(gb),plugins:ZS(Mt(),qS()).default({})});_b.superRefine((i,e)=>{if(i.scenes.length===0){e.addIssue({code:ee.custom,path:["scenes"],message:"Un tour publicado necesita al menos 1 escena"});return}const n=i.scenes[0]?.id,s=i.defaultSceneId??n;s&&!i.scenes.some(a=>a.id===s)&&e.addIssue({code:ee.custom,path:["defaultSceneId"],message:"defaultSceneId no corresponde a ninguna escena"});const r=new Set;for(const[a,o]of i.scenes.entries())r.has(o.id)&&e.addIssue({code:ee.custom,path:["scenes",a,"id"],message:`Escena duplicada: ${o.id}`}),r.add(o.id)});qt({slug:xg,title:Mt(),clientName:Mt().optional(),hostingStatus:Ir(["active","suspended"]),hostingExpiresAt:Ri.optional(),sceneCount:ct().int().min(0),updatedAt:Ri});const xb=Math.PI/180,It=i=>i*xb;function yb(i,e){const t=`/tours/${encodeURIComponent(e)}`;return{tour:i,base:t,url:n=>`${t}/${n.replace(/^\//,"")}`}}function Eb(i,e,t,n){return i.replaceAll("{level}",String(e)).replaceAll("{row}",String(t)).replaceAll("{col}",String(n))}function ws(i){const e=document.getElementById("estado"),t=document.getElementById("estado-insignia"),n=document.getElementById("estado-titulo"),s=document.getElementById("estado-mensaje"),r=document.getElementById("estado-reintentar");if(!e||!t||!n||!s||!r)return;e.hidden=!1,e.classList.toggle("estado--girando",i.clase==="cargando");const a={cargando:["Cargando","Preparando el tour…","Un momento por favor."],gate:["Pausado","Tour pausado",i.clase==="gate"&&i.estado===410?"El periodo de alojamiento de este tour ha finalizado.":"Este tour está temporalmente pausado por el administrador."],"no-encontrado":["404","Tour no encontrado","Este tour virtual no existe o fue retirado."],error:["Error","No se pudo cargar el tour",i.clase==="error"?i.detalle:""]},[o,c,l]=a[i.clase];t.textContent=o,n.textContent=c,s.textContent=l;const h=i.clase==="error"||i.clase==="no-encontrado";r.hidden=!h}function Mb(){const i=document.getElementById("estado");i&&(i.hidden=!0)}function wb(){const i=location.pathname.replace(/\/+$/,"").split("/"),e=i.lastIndexOf("tours");return e===-1||e+1>=i.length?null:i[e+1]??null}const Sb={nav:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 4.5 20.3l1.4 1.4L12 18.7l6.1 3 1.4-1.4z"/></svg>',info:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1 5h2v2h-2zm0 4h2v6h-2z"/></svg>',link:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8zm9-6h-4v1.9h4a3.1 3.1 0 0 1 0 6.2h-4V17h4a5 5 0 0 0 0-10z"/></svg>'},bb='<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.1 1.5 5.8L4 29l8.4-1.5c1.7.8 3.6 1.2 5.6 1.2h.1c6.6 0 11.9-5.4 11.9-12S22.6 3 16 3zm0 21.8c-1.8 0-3.5-.5-5-1.3l-.4-.2-4.9.9.9-4.8-.3-.5A9.9 9.9 0 0 1 6.1 15c0-5.5 4.5-9.9 10-9.9 2.6 0 5.1 1 7 2.9a9.8 9.8 0 0 1 2.9 7c0 5.5-4.5 10-10 9.8zm5.5-7.4c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.6-2.1c-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.6s0-.4 0-.6-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4a3.7 3.7 0 0 0-1.2 2.8c0 1.6 1.2 3.2 1.4 3.5a12 12 0 0 0 4.6 4c2.6 1 3.1.8 3.7.8s1.9-.8 2.2-1.5.3-1.4.2-1.5l-.1-.1z"/></svg>',uu=95;function Tb(i,e,t){const n=new rn,s=new p_,r=[];let a=!1;for(const o of t.patches){const c=s.load(e.url(o.src)),l=It(o.widthDeg)*uu,h=l/o.aspectRatio,f=new Gs(l,h),p=new pn({map:c,transparent:!0,opacity:o.opacity,side:Vi}),m=new Yt(f,p),v=i.dataHelper.sphericalCoordsToVector3({yaw:It(o.yaw),pitch:It(o.pitch)},new P,uu);m.position.copy(v),m.lookAt(0,0,0),m.rotateZ(It(o.rotationDeg)),n.add(m),r.push(p)}return i.renderer.addObject(n),{destruir(){if(!a){a=!0;try{i.renderer.removeObject(n)}catch{}for(const o of r)o.map?.dispose(),o.dispose();for(const o of n.children)o instanceof Yt&&o.geometry.dispose();n.clear()}}}}function Ab(i){let e;const t=document.createElement("a");t.className="pe-whatsapp",t.target="_blank",t.rel="noopener";const n=l=>{const h=i.tour.whatsappNumber;if(!h){t.style.display="none";return}t.style.display="";const f=[i.tour.whatsappDefaultText,l.name].filter(m=>!!m).join(" — "),p=h.replace(/[^0-9]/g,"");t.href=`https://wa.me/${p}?text=${encodeURIComponent(f)}`,t.innerHTML=`${bb}<span>${gl(f)}</span>`};let s;const r=document.createElement("button");r.type="button",r.className="pe-audio",r.textContent="🔊",r.hidden=!0;const a=l=>{if(s?.pause(),s=void 0,!l.audio){r.hidden=!0;return}s=new Audio(i.url(l.audio.url)),s.loop=!0,s.volume=l.audio.volume,s.muted=!1,r.hidden=!1,r.textContent="🔊";const h=()=>{s?.play().catch(()=>{})};h(),document.addEventListener("pointerdown",h,{once:!0})};r.addEventListener("click",()=>{s&&(s.muted=!s.muted,r.textContent=s.muted?"🔇":"🔊",s.muted||s.play().catch(()=>{}))}),document.body.append(t,r);let o;const c=()=>{o?.remove(),o=void 0};return{actualizarEscena(l){e=l,n(l),a(l)},precargarVecinos(l,h,f){const p=l.hotspots.filter(m=>m.type==="nav").map(m=>h.get(m.targetSceneId)).filter(m=>m!==void 0).slice(0,6);for(const m of p)fetch(f.url(m.tiles.baseUrl),{priority:"low"}).catch(()=>{})},mostrarInfo(l,h){c(),o=document.createElement("div"),o.className="pe-panel",o.setAttribute("role","dialog"),o.innerHTML=`<button class="pe-panel__cerrar" type="button" aria-label="Cerrar">✕</button><h2>${gl(l)}</h2><p>${gl(h)}</p>`,o.querySelector("button")?.addEventListener("click",c),document.body.append(o),e&&n(e)}}}function gl(i){return i.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Cb(i,e){const t=yb(i,e),n=new Map(i.scenes.map(d=>[d.id,d])),r=(i.defaultSceneId?n.get(i.defaultSceneId):void 0)??i.scenes[0];if(!r)return;const a=new rw({container:"pano",adapter:[Sw,{showErrorTile:!1}],caption:i.title,navbar:["zoom","move","gallery","autorotate","caption","fullscreen"],lang:{zoom:"Zoom",move:"Mover",gallery:"Galería",autorotate:"Rotación automática",caption:i.title,fullscreen:"Pantalla completa",loading:"Cargando…"},minFov:pl(r.zoomLimit).minFov,maxFov:pl(r.zoomLimit).maxFov,defaultYaw:It(r.defaultView.yaw),defaultPitch:It(r.defaultView.pitch),defaultZoomLvl:wa(r.defaultView.fov),loadingTxt:"Cargando el tour…",defaultTransition:{speed:1200,effect:"fade"},plugins:[[uw,Rb(i)],[$d,{clickEventOnMarker:!1}],[tu,{dataMode:"client",positionMode:"manual",renderMode:"3d",linksOnCompass:!1,showLinkTooltip:!0,transitionOptions:(d,u,S)=>{if(!u)return{effect:"none",rotation:!1,showLoader:!0};const b=S?.data,E=d.data;let T,w;if(b){const C=S?.position;T={yaw:It(b.targetYaw??C?.yaw??0),pitch:It(b.targetPitch??C?.pitch??0)},b.targetFov!==void 0&&(w=wa(b.targetFov))}else E&&(T={yaw:It(E.escena.defaultView.yaw),pitch:It(E.escena.defaultView.pitch)},w=wa(E.escena.defaultView.fov));return{effect:Pb(b?.transitionEffect),speed:b?.transitionDurationMs??1200,rotation:T!==void 0,...T!==void 0?{rotateTo:T}:{},...w!==void 0?{zoomTo:w}:{}}}}],[Bd,{visibleOnLoad:!0,thumbnailSize:{width:300,height:150}}]]}),o=a.getPlugin($d),c=a.getPlugin(tu),l=a.getPlugin(Bd);window.__psv=a,window.__psvPlugins={markers:o,virtualTour:c,gallery:l};const h=d=>({baseUrl:t.url(d.tiles.baseUrl),width:d.tiles.width,cols:d.tiles.cols,rows:d.tiles.rows,levels:d.tiles.levels.map(u=>({width:u.width,cols:u.cols,rows:u.rows})),tileUrl:(u,S,b)=>{const E=d.tiles.levels[b];return!E||u>=E.cols||S>=E.rows?null:t.url(Eb(d.tiles.tileUrlTemplate,b,S,u))}}),f=i.scenes.map(d=>({id:d.id,name:d.name,caption:`${i.title} — ${d.name}`,thumbnail:t.url(Lb(d)),panorama:h(d),links:d.hotspots.filter(u=>u.type==="nav").filter(u=>n.has(u.targetSceneId)).map(u=>({nodeId:u.targetSceneId,position:{yaw:It(u.yaw),pitch:It(u.pitch)},data:{targetYaw:u.targetYaw,targetPitch:u.targetPitch,targetFov:u.targetFov,transitionEffect:u.transitionEffect,transitionDurationMs:u.transitionDurationMs}})),markers:Ib(d),...d.sphereCorrection!==void 0?{sphereCorrection:{pan:It(d.sphereCorrection.pan),tilt:It(d.sphereCorrection.tilt),roll:It(d.sphereCorrection.roll)}}:{},data:{escena:d}}));c.setNodes(f,r.id),l.setItems(f.map(d=>{const u=d.data;return{id:d.id,panorama:u?h(u.escena):null,...d.name!==void 0?{name:d.name}:{},...d.thumbnail!==void 0?{thumbnail:d.thumbnail}:{}}}),d=>{c.setCurrentNode(String(d))});let p,m;o.addEventListener("select-marker",d=>{const b=c.getCurrentNode()?.data?.escena.hotspots.find(E=>`h-${E.id}`===d.marker.id);b&&(b.type==="info"?p?.mostrarInfo(b.title??"Información",b.content):b.type==="link"&&(b.action==="new-tab"?window.open(b.url,"_blank","noopener"):location.href=b.url))});let v;const y=()=>{const d=c.getCurrentNode(),u=d?.data;if(!u||v===u.escena.id)return;v=u.escena.id;const{minFov:S,maxFov:b}=pl(u.escena.zoomLimit);a.setOptions({minFov:S,maxFov:b}),p||(p=Ab(t)),p.actualizarEscena(u.escena,d?.id),p.precargarVecinos(u.escena,n,t),m?.destruir(),m=Tb(a,t,u.escena)};c.addEventListener("node-changed",y),a.addEventListener("zoom-updated",d=>{const S=c.getCurrentNode()?.data;if(S)for(const b of S.escena.hotspots){if(b.type==="nav"||!b.zoomRange)continue;const E=d.zoomLevel>=b.zoomRange.min&&d.zoomLevel<=b.zoomRange.max;try{E?o.showMarker(`h-${b.id}`):o.hideMarker(`h-${b.id}`)}catch{}}}),i.littlePlanetIntro&&a.addEventListener("ready",()=>{try{a.setOptions({fisheye:2}),a.rotate({yaw:0,pitch:-Math.PI/2}),a.zoom(0),window.setTimeout(()=>{a.animate({yaw:It(r.defaultView.yaw),pitch:It(r.defaultView.pitch),zoom:wa(r.defaultView.fov),speed:"4rpm"}),a.setOptions({fisheye:!1})},900)}catch{}})}function Rb(i){return{autorotateSpeed:`${(i.autoRotate.speedDegPerSec*60/360).toFixed(3)}rpm`,autostartDelay:i.autoRotate.enabled?i.autoRotate.waitTimeMs:864e5,autostartOnIdle:i.autoRotate.enabled}}function Pb(i){return i==="none"?"none":"fade"}function Lb(i){return i.tiles.baseUrl.replace(/\/preview\.webp$/,"/thumb.webp")}function Ib(i){return i.hotspots.filter(e=>e.type!=="nav").map(e=>({id:`h-${e.id}`,position:{yaw:It(e.yaw),pitch:It(e.pitch)},html:`<div class="pe-marker pe-marker--${e.type}" title="${fu(e.title??"")}">${Sb[e.type]}</div>`,size:{width:44,height:44},...e.title?{tooltip:{content:fu(e.title),position:"top center",trigger:"hover"}}:{},visible:!0}))}function fu(i){return i.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}async function Eg(){const i=wb();if(!i){ws({clase:"error",detalle:"La URL debe tener la forma /tours/mi-tour"});return}ws({clase:"cargando"});try{const e=await fetch(`/tours/${encodeURIComponent(i)}/tour.json`,{headers:{Accept:"application/json"}});if(e.status===402||e.status===410){ws({clase:"gate",estado:e.status});return}if(e.status===404){ws({clase:"no-encontrado"});return}if(!e.ok){ws({clase:"error",detalle:`El servidor respondió ${e.status}. Inténtalo más tarde.`});return}const t=await e.json();Mb(),Cb(t,i)}catch(e){ws({clase:"error",detalle:e instanceof Error?e.message:"Fallo de red al cargar el tour."})}}const Db=document.getElementById("estado-reintentar");Db?.addEventListener("click",()=>{Eg()});Eg();
