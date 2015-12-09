/*! a.mphibio.us v1.5.5 | Copyright 2015, Clive Moore @cliveMoore @Treefrog | http://a.mphibio.us | http://www.opensource.org/licenses/mit-license.php */
function initTabNav(){jQuery("ul.mainmenu").tabNav({items:"li"})}!function(){for(var a,b=function(){},c=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],d=c.length,e=window.console=window.console||{};d--;)a=c[d],e[a]||(e[a]=b)}(),function(a){"use strict";a(["jquery"],function(a){function b(b){return a.isFunction(b)||"object"==typeof b?b:{top:b,left:b}}var c=a.scrollTo=function(b,c,d){return a(window).scrollTo(b,c,d)};return c.defaults={axis:"xy",duration:parseFloat(a.fn.jquery)>=1.3?0:1,limit:!0},c.window=function(){return a(window)._scrollable()},a.fn._scrollable=function(){return this.map(function(){var b=this,c=!b.nodeName||-1!=a.inArray(b.nodeName.toLowerCase(),["iframe","#document","html","body"]);if(!c)return b;var d=(b.contentWindow||b).document||b.ownerDocument||b;return/webkit/i.test(navigator.userAgent)||"BackCompat"==d.compatMode?d.body:d.documentElement})},a.fn.scrollTo=function(d,e,f){return"object"==typeof e&&(f=e,e=0),"function"==typeof f&&(f={onAfter:f}),"max"==d&&(d=9e9),f=a.extend({},c.defaults,f),e=e||f.duration,f.queue=f.queue&&f.axis.length>1,f.queue&&(e/=2),f.offset=b(f.offset),f.over=b(f.over),this._scrollable().each(function(){function g(a){j.animate(l,e,f.easing,a&&function(){a.call(this,k,f)})}if(null!=d){var h,i=this,j=a(i),k=d,l={},m=j.is("html,body");switch(typeof k){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(k)){k=b(k);break}if(k=m?a(k):a(k,this),!k.length)return;case"object":(k.is||k.style)&&(h=(k=a(k)).offset())}var n=a.isFunction(f.offset)&&f.offset(i,k)||f.offset;a.each(f.axis.split(""),function(a,b){var d="x"==b?"Left":"Top",e=d.toLowerCase(),o="scroll"+d,p=i[o],q=c.max(i,b);if(h)l[o]=h[e]+(m?0:p-j.offset()[e]),f.margin&&(l[o]-=parseInt(k.css("margin"+d))||0,l[o]-=parseInt(k.css("border"+d+"Width"))||0),l[o]+=n[e]||0,f.over[e]&&(l[o]+=k["x"==b?"width":"height"]()*f.over[e]);else{var r=k[e];l[o]=r.slice&&"%"==r.slice(-1)?parseFloat(r)/100*q:r}f.limit&&/^\d+$/.test(l[o])&&(l[o]=l[o]<=0?0:Math.min(l[o],q)),!a&&f.queue&&(p!=l[o]&&g(f.onAfterFirst),delete l[o])}),g(f.onAfter)}}).end()},c.max=function(b,c){var d="x"==c?"Width":"Height",e="scroll"+d;if(!a(b).is("html,body"))return b[e]-a(b)[d.toLowerCase()]();var f="client"+d,g=b.ownerDocument.documentElement,h=b.ownerDocument.body;return Math.max(g[e],h[e])-Math.min(g[f],h[f])},c})}("function"==typeof define&&define.amd?define:function(a,b){"undefined"!=typeof module&&module.exports?module.exports=b(require("jquery")):b(jQuery)}),function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){function b(b,c,d){var e=c.hash.slice(1),f=document.getElementById(e)||document.getElementsByName(e)[0];if(f){b&&b.preventDefault();var g=a(d.target);if(!(d.lock&&g.is(":animated")||d.onBefore&&d.onBefore(b,f,g)===!1)){if(d.stop&&g._scrollable().stop(!0),d.hash){var h=f.id===e?"id":"name",i=a("<a> </a>").attr(h,e).css({position:"absolute",top:a(window).scrollTop(),left:a(window).scrollLeft()});f[h]="",a("body").prepend(i),location.hash=c.hash,i.remove(),f[h]=e}g.scrollTo(f,d).trigger("notify.serialScroll",[f])}}}var c=location.href.replace(/#.*/,""),d=a.localScroll=function(b){a("body").localScroll(b)};return d.defaults={duration:1e3,axis:"y",event:"click",stop:!0,target:window},a.fn.localScroll=function(e){function f(){return!(!this.href||!this.hash||this.href.replace(this.hash,"")!=c||e.filter&&!a(this).is(e.filter))}return e=a.extend({},d.defaults,e),e.hash&&location.hash&&(e.target&&window.scrollTo(0,0),b(0,location,e)),e.lazy?this.on(e.event,"a,area",function(a){f.call(this)&&b(a,this,e)}):this.find("a,area").filter(f).bind(e.event,function(a){b(a,this,e)}).end().end()},d.hash=function(){},d}),function(){function a(){}function b(a,b){for(var c=a.length;c--;)if(a[c].listener===b)return c;return-1}function c(a){return function(){return this[a].apply(this,arguments)}}var d=a.prototype,e=this,f=e.EventEmitter;d.getListeners=function(a){var b,c,d=this._getEvents();if("object"==typeof a){b={};for(c in d)d.hasOwnProperty(c)&&a.test(c)&&(b[c]=d[c])}else b=d[a]||(d[a]=[]);return b},d.flattenListeners=function(a){var b,c=[];for(b=0;b<a.length;b+=1)c.push(a[b].listener);return c},d.getListenersAsObject=function(a){var b,c=this.getListeners(a);return c instanceof Array&&(b={},b[a]=c),b||c},d.addListener=function(a,c){var d,e=this.getListenersAsObject(a),f="object"==typeof c;for(d in e)e.hasOwnProperty(d)&&-1===b(e[d],c)&&e[d].push(f?c:{listener:c,once:!1});return this},d.on=c("addListener"),d.addOnceListener=function(a,b){return this.addListener(a,{listener:b,once:!0})},d.once=c("addOnceListener"),d.defineEvent=function(a){return this.getListeners(a),this},d.defineEvents=function(a){for(var b=0;b<a.length;b+=1)this.defineEvent(a[b]);return this},d.removeListener=function(a,c){var d,e,f=this.getListenersAsObject(a);for(e in f)f.hasOwnProperty(e)&&(d=b(f[e],c),-1!==d&&f[e].splice(d,1));return this},d.off=c("removeListener"),d.addListeners=function(a,b){return this.manipulateListeners(!1,a,b)},d.removeListeners=function(a,b){return this.manipulateListeners(!0,a,b)},d.manipulateListeners=function(a,b,c){var d,e,f=a?this.removeListener:this.addListener,g=a?this.removeListeners:this.addListeners;if("object"!=typeof b||b instanceof RegExp)for(d=c.length;d--;)f.call(this,b,c[d]);else for(d in b)b.hasOwnProperty(d)&&(e=b[d])&&("function"==typeof e?f.call(this,d,e):g.call(this,d,e));return this},d.removeEvent=function(a){var b,c=typeof a,d=this._getEvents();if("string"===c)delete d[a];else if("object"===c)for(b in d)d.hasOwnProperty(b)&&a.test(b)&&delete d[b];else delete this._events;return this},d.removeAllListeners=c("removeEvent"),d.emitEvent=function(a,b){var c,d,e,f,g=this.getListenersAsObject(a);for(e in g)if(g.hasOwnProperty(e))for(d=g[e].length;d--;)c=g[e][d],c.once===!0&&this.removeListener(a,c.listener),f=c.listener.apply(this,b||[]),f===this._getOnceReturnValue()&&this.removeListener(a,c.listener);return this},d.trigger=c("emitEvent"),d.emit=function(a){var b=Array.prototype.slice.call(arguments,1);return this.emitEvent(a,b)},d.setOnceReturnValue=function(a){return this._onceReturnValue=a,this},d._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},d._getEvents=function(){return this._events||(this._events={})},a.noConflict=function(){return e.EventEmitter=f,a},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return a}):"object"==typeof module&&module.exports?module.exports=a:this.EventEmitter=a}.call(this),function(a){function b(b){var c=a.event;return c.target=c.target||c.srcElement||b,c}var c=document.documentElement,d=function(){};c.addEventListener?d=function(a,b,c){a.addEventListener(b,c,!1)}:c.attachEvent&&(d=function(a,c,d){a[c+d]=d.handleEvent?function(){var c=b(a);d.handleEvent.call(d,c)}:function(){var c=b(a);d.call(a,c)},a.attachEvent("on"+c,a[c+d])});var e=function(){};c.removeEventListener?e=function(a,b,c){a.removeEventListener(b,c,!1)}:c.detachEvent&&(e=function(a,b,c){a.detachEvent("on"+b,a[b+c]);try{delete a[b+c]}catch(d){a[b+c]=void 0}});var f={bind:d,unbind:e};"function"==typeof define&&define.amd?define("eventie/eventie",f):a.eventie=f}(this),function(a,b){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(c,d){return b(a,c,d)}):"object"==typeof exports?module.exports=b(a,require("wolfy87-eventemitter"),require("eventie")):a.imagesLoaded=b(a,a.EventEmitter,a.eventie)}(window,function(a,b,c){function d(a,b){for(var c in b)a[c]=b[c];return a}function e(a){return"[object Array]"===m.call(a)}function f(a){var b=[];if(e(a))b=a;else if("number"==typeof a.length)for(var c=0,d=a.length;d>c;c++)b.push(a[c]);else b.push(a);return b}function g(a,b,c){if(!(this instanceof g))return new g(a,b);"string"==typeof a&&(a=document.querySelectorAll(a)),this.elements=f(a),this.options=d({},this.options),"function"==typeof b?c=b:d(this.options,b),c&&this.on("always",c),this.getImages(),j&&(this.jqDeferred=new j.Deferred);var e=this;setTimeout(function(){e.check()})}function h(a){this.img=a}function i(a){this.src=a,n[a]=this}var j=a.jQuery,k=a.console,l="undefined"!=typeof k,m=Object.prototype.toString;g.prototype=new b,g.prototype.options={},g.prototype.getImages=function(){this.images=[];for(var a=0,b=this.elements.length;b>a;a++){var c=this.elements[a];"IMG"===c.nodeName&&this.addImage(c);var d=c.nodeType;if(d&&(1===d||9===d||11===d))for(var e=c.querySelectorAll("img"),f=0,g=e.length;g>f;f++){var h=e[f];this.addImage(h)}}},g.prototype.addImage=function(a){var b=new h(a);this.images.push(b)},g.prototype.check=function(){function a(a,e){return b.options.debug&&l&&k.log("confirm",a,e),b.progress(a),c++,c===d&&b.complete(),!0}var b=this,c=0,d=this.images.length;if(this.hasAnyBroken=!1,!d)return void this.complete();for(var e=0;d>e;e++){var f=this.images[e];f.on("confirm",a),f.check()}},g.prototype.progress=function(a){this.hasAnyBroken=this.hasAnyBroken||!a.isLoaded;var b=this;setTimeout(function(){b.emit("progress",b,a),b.jqDeferred&&b.jqDeferred.notify&&b.jqDeferred.notify(b,a)})},g.prototype.complete=function(){var a=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var b=this;setTimeout(function(){if(b.emit(a,b),b.emit("always",b),b.jqDeferred){var c=b.hasAnyBroken?"reject":"resolve";b.jqDeferred[c](b)}})},j&&(j.fn.imagesLoaded=function(a,b){var c=new g(this,a,b);return c.jqDeferred.promise(j(this))}),h.prototype=new b,h.prototype.check=function(){var a=n[this.img.src]||new i(this.img.src);if(a.isConfirmed)return void this.confirm(a.isLoaded,"cached was confirmed");if(this.img.complete&&void 0!==this.img.naturalWidth)return void this.confirm(0!==this.img.naturalWidth,"naturalWidth");var b=this;a.on("confirm",function(a,c){return b.confirm(a.isLoaded,c),!0}),a.check()},h.prototype.confirm=function(a,b){this.isLoaded=a,this.emit("confirm",this,b)};var n={};return i.prototype=new b,i.prototype.check=function(){if(!this.isChecked){var a=new Image;c.bind(a,"load",this),c.bind(a,"error",this),a.src=this.src,this.isChecked=!0}},i.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},i.prototype.onload=function(a){this.confirm(!0,"onload"),this.unbindProxyEvents(a)},i.prototype.onerror=function(a){this.confirm(!1,"onerror"),this.unbindProxyEvents(a)},i.prototype.confirm=function(a,b){this.isConfirmed=!0,this.isLoaded=a,this.emit("confirm",this,b)},i.prototype.unbindProxyEvents=function(a){c.unbind(a.target,"load",this),c.unbind(a.target,"error",this)},g}),window.matchMedia||(window.matchMedia=function(){"use strict";var a=window.styleMedia||window.media;if(!a){var b=document.createElement("style"),c=document.getElementsByTagName("script")[0],d=null;b.type="text/css",b.id="matchmediajs-test",c.parentNode.insertBefore(b,c),d="getComputedStyle"in window&&window.getComputedStyle(b,null)||b.currentStyle,a={matchMedium:function(a){var c="@media "+a+"{ #matchmediajs-test { width: 1px; } }";return b.styleSheet?b.styleSheet.cssText=c:b.textContent=c,"1px"===d.width}}}return function(b){return{matches:a.matchMedium(b||"all"),media:b||"all"}}}()),function(a,b,c){"use strict";function d(a){var b,c,d,e,g,h=a||{};b=h.elements||f.getAllElements();for(var i=0,j=b.length;j>i;i++)if(c=b[i],d=c.parentNode,e=void 0,g=void 0,"IMG"===c.nodeName.toUpperCase()&&(c[f.ns]||(c[f.ns]={}),h.reevaluate||!c[f.ns].evaluated)){if("PICTURE"===d.nodeName.toUpperCase()){if(f.removeVideoShim(d),e=f.getMatch(c,d),e===!1)continue}else e=void 0;("PICTURE"===d.nodeName.toUpperCase()||c.srcset&&!f.srcsetSupported||!f.sizesSupported&&c.srcset&&c.srcset.indexOf("w")>-1)&&f.dodgeSrcset(c),e?(g=f.processSourceSet(e),f.applyBestCandidate(g,c)):(g=f.processSourceSet(c),(void 0===c.srcset||c[f.ns].srcset)&&f.applyBestCandidate(g,c)),c[f.ns].evaluated=!0}}function e(){function c(){var b;a._picturefillWorking||(a._picturefillWorking=!0,a.clearTimeout(b),b=a.setTimeout(function(){d({reevaluate:!0}),a._picturefillWorking=!1},60))}d();var e=setInterval(function(){return d(),/^loaded|^i|^c/.test(b.readyState)?void clearInterval(e):void 0},250);a.addEventListener?a.addEventListener("resize",c,!1):a.attachEvent&&a.attachEvent("onresize",c)}if(a.HTMLPictureElement)return void(a.picturefill=function(){});b.createElement("picture");var f={};f.ns="picturefill",function(){f.srcsetSupported="srcset"in c,f.sizesSupported="sizes"in c}(),f.trim=function(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")},f.endsWith=function(a,b){return a.endsWith?a.endsWith(b):-1!==a.indexOf(b,a.length-b.length)},f.restrictsMixedContent=function(){return"https:"===a.location.protocol},f.matchesMedia=function(b){return a.matchMedia&&a.matchMedia(b).matches},f.getDpr=function(){return a.devicePixelRatio||1},f.getWidthFromLength=function(a){a=a&&a.indexOf("%")>-1==!1&&(parseFloat(a)>0||a.indexOf("calc(")>-1)?a:"100vw",a=a.replace("vw","%"),f.lengthEl||(f.lengthEl=b.createElement("div"),f.lengthEl.style.cssText="border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden"),f.lengthEl.style.width=a,b.body.appendChild(f.lengthEl),f.lengthEl.className="helper-from-picturefill-js",f.lengthEl.offsetWidth<=0&&(f.lengthEl.style.width=b.documentElement.offsetWidth+"px");var c=f.lengthEl.offsetWidth;return b.body.removeChild(f.lengthEl),c},f.types={},f.types["image/jpeg"]=!0,f.types["image/gif"]=!0,f.types["image/png"]=!0,f.types["image/svg+xml"]=b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),f.types["image/webp"]=function(){var a="image/webp";c.onerror=function(){f.types[a]=!1,d()},c.onload=function(){f.types[a]=1===c.width,d()},c.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="},f.verifyTypeSupport=function(a){var b=a.getAttribute("type");return null===b||""===b?!0:"function"==typeof f.types[b]?(f.types[b](),"pending"):f.types[b]},f.parseSize=function(a){var b=/(\([^)]+\))?\s*(.+)/g.exec(a);return{media:b&&b[1],length:b&&b[2]}},f.findWidthFromSourceSize=function(a){for(var b,c=f.trim(a).split(/\s*,\s*/),d=0,e=c.length;e>d;d++){var g=c[d],h=f.parseSize(g),i=h.length,j=h.media;if(i&&(!j||f.matchesMedia(j))){b=i;break}}return f.getWidthFromLength(b)},f.parseSrcset=function(a){for(var b=[];""!==a;){a=a.replace(/^\s+/g,"");var c,d=a.search(/\s/g),e=null;if(-1!==d){c=a.slice(0,d);var f=c.slice(-1);if((","===f||""===c)&&(c=c.replace(/,+$/,""),e=""),a=a.slice(d+1),null===e){var g=a.indexOf(",");-1!==g?(e=a.slice(0,g),a=a.slice(g+1)):(e=a,a="")}}else c=a,a="";(c||e)&&b.push({url:c,descriptor:e})}return b},f.parseDescriptor=function(a,b){var c,d=b||"100vw",e=a&&a.replace(/(^\s+|\s+$)/g,""),g=f.findWidthFromSourceSize(d);if(e)for(var h=e.split(" "),i=h.length-1;i>=0;i--){var j=h[i],k=j&&j.slice(j.length-1);if("h"!==k&&"w"!==k||f.sizesSupported){if("x"===k){var l=j&&parseFloat(j,10);c=l&&!isNaN(l)?l:1}}else c=parseFloat(parseInt(j,10)/g)}return c||1},f.getCandidatesFromSourceSet=function(a,b){for(var c=f.parseSrcset(a),d=[],e=0,g=c.length;g>e;e++){var h=c[e];d.push({url:h.url,resolution:f.parseDescriptor(h.descriptor,b)})}return d},f.dodgeSrcset=function(a){a.srcset&&(a[f.ns].srcset=a.srcset,a.removeAttribute("srcset"))},f.processSourceSet=function(a){var b=a.getAttribute("srcset"),c=a.getAttribute("sizes"),d=[];return"IMG"===a.nodeName.toUpperCase()&&a[f.ns]&&a[f.ns].srcset&&(b=a[f.ns].srcset),b&&(d=f.getCandidatesFromSourceSet(b,c)),d},f.applyBestCandidate=function(a,b){var c,d,e;a.sort(f.ascendingSort),d=a.length,e=a[d-1];for(var g=0;d>g;g++)if(c=a[g],c.resolution>=f.getDpr()){e=c;break}if(e&&!f.endsWith(b.src,e.url))if(f.restrictsMixedContent()&&"http:"===e.url.substr(0,"http:".length).toLowerCase())void 0!==typeof console&&console.warn("Blocked mixed content image "+e.url);else{b.src=e.url,b.currentSrc=b.src;var h=b.style||{},i="webkitBackfaceVisibility"in h,j=h.zoom;i&&(h.zoom=".999",i=b.offsetWidth,h.zoom=j)}},f.ascendingSort=function(a,b){return a.resolution-b.resolution},f.removeVideoShim=function(a){var b=a.getElementsByTagName("video");if(b.length){for(var c=b[0],d=c.getElementsByTagName("source");d.length;)a.insertBefore(d[0],c);c.parentNode.removeChild(c)}},f.getAllElements=function(){for(var a=[],c=b.getElementsByTagName("img"),d=0,e=c.length;e>d;d++){var g=c[d];("PICTURE"===g.parentNode.nodeName.toUpperCase()||null!==g.getAttribute("srcset")||g[f.ns]&&null!==g[f.ns].srcset)&&a.push(g)}return a},f.getMatch=function(a,b){for(var c,d=b.childNodes,e=0,g=d.length;g>e;e++){var h=d[e];if(1===h.nodeType){if(h===a)return c;if("SOURCE"===h.nodeName.toUpperCase()){null!==h.getAttribute("src")&&void 0!==typeof console&&console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");var i=h.getAttribute("media");if(h.getAttribute("srcset")&&(!i||f.matchesMedia(i))){var j=f.verifyTypeSupport(h);if(j===!0){c=h;break}if("pending"===j)return!1}}}}return c},e(),d._=f,"object"==typeof module&&"object"==typeof module.exports?module.exports=d:"function"==typeof define&&define.amd?define(function(){return d}):"object"==typeof a&&(a.picturefill=d)}(this,this.document,new this.Image),function(a,b,c){function d(a){var b={},d=/^jQuery\d+$/;return c.each(a.attributes,function(a,c){c.specified&&!d.test(c.name)&&(b[c.name]=c.value)}),b}function e(a,b){var d=this,e=c(d);if(d.value==e.attr("placeholder")&&e.hasClass("placeholder"))if(e.data("placeholder-password")){if(e=e.hide().next().show().attr("id",e.removeAttr("id").data("placeholder-id")),a===!0)return e[0].value=b;e.focus()}else d.value="",e.removeClass("placeholder"),d==g()&&d.select()}function f(){var a,b=this,f=c(b),g=this.id;if(""==b.value){if("password"==b.type){if(!f.data("placeholder-textinput")){try{a=f.clone().attr({type:"text"})}catch(h){a=c("<input>").attr(c.extend(d(this),{type:"text"}))}a.removeAttr("name").data({"placeholder-password":f,"placeholder-id":g}).bind("focus.placeholder",e),f.data({"placeholder-textinput":a,"placeholder-id":g}).before(a)}f=f.removeAttr("id").hide().prev().attr("id",g).show()}f.addClass("placeholder"),f[0].value=f.attr("placeholder")}else f.removeClass("placeholder")}function g(){try{return b.activeElement}catch(a){}}var h,i,j="[object OperaMini]"==Object.prototype.toString.call(a.operamini),k="placeholder"in b.createElement("input")&&!j,l="placeholder"in b.createElement("textarea")&&!j,m=c.fn,n=c.valHooks,o=c.propHooks;k&&l?(i=m.placeholder=function(){return this},i.input=i.textarea=!0):(i=m.placeholder=function(){var a=this;return a.filter((k?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":e,"blur.placeholder":f}).data("placeholder-enabled",!0).trigger("blur.placeholder"),a},i.input=k,i.textarea=l,h={get:function(a){var b=c(a),d=b.data("placeholder-password");return d?d[0].value:b.data("placeholder-enabled")&&b.hasClass("placeholder")?"":a.value},set:function(a,b){var d=c(a),h=d.data("placeholder-password");return h?h[0].value=b:d.data("placeholder-enabled")?(""==b?(a.value=b,a!=g()&&f.call(a)):d.hasClass("placeholder")?e.call(a,!0,b)||(a.value=b):a.value=b,d):a.value=b}},k||(n.input=h,o.value=h),l||(n.textarea=h,o.value=h),c(function(){c(b).delegate("form","submit.placeholder",function(){var a=c(".placeholder",this).each(e);setTimeout(function(){a.each(f)},10)})}),c(a).bind("beforeunload.placeholder",function(){c(".placeholder").each(function(){this.value=""})}))}(this,document,jQuery),function(a){var b=/(Windows Phone OS) ([0-9.]*).*/.exec(navigator.userAgent)||/MSIE 10.*Touch/.test(navigator.userAgent),c="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch;a.fn.tabNav=function(d){var e=a.extend({hoverClass:"hover",items:"li",opener:">a",delay:10},d);return b||c?this:this.each(function(){var b=a(this),c=b.find(e.items);c.each(function(c,d){var f,g,h,i=a(this),j=i.find(e.opener);j.bind("focus",function(){f=b.hasClass("js-nav-active"),g=window.TouchNav&&TouchNav.isActiveOn(d),(!f||g)&&k(),i.trigger(f&&g?"itemhover":"mouseenter")}).bind("blur",function(){i.trigger(f&&g?"itemleave":"mouseleave")});var k=function(){k.done||(k.done=!0,i.hover(function(){clearTimeout(h),h=setTimeout(function(){i.addClass(e.hoverClass)},e.delay)},function(){clearTimeout(h),h=setTimeout(function(){i.removeClass(e.hoverClass)},e.delay)}))}})})}}(jQuery);var amp={};amp.init=function(){amp.bindlisteners(),Modernizr.touch?amp.mobilelisteners():amp.desktoplisteners()},amp.cache=function(){amp.dom={}},amp.bindlisteners=function(){$("table td:first-child").addClass("first"),$("table tr:nth-child(2n+1)").addClass("odd"),$("table tr:nth-child(2n)").addClass("even"),$("table tr:first-child").addClass("first"),$("table tr:last-child").addClass("last"),$("table td:first-child").addClass("first"),$("table td:last-child").addClass("last"),$("table th:first-child").addClass("first"),$("table th:last-child").addClass("last"),$("ul li:first-child").addClass("first"),$("ul li:last-child").addClass("last"),$(document).on("click",".checkall",function(){$(this).closest("fieldset").find(":checkbox").prop("checked",this.checked)}),$(document).on("click","#mainnav li",function(){$("#mainnav").hasClass("open")&&($("#mainnav").removeClass("open"),$("#nav_toggle").removeClass("active"))}),$(document).on("click",".tabs li a",function(){var a=$(this).closest("ul").attr("id"),b="#"+$(this).attr("amp-tab-content");return $(this).hasClass("active")&&b.length||(a>0?($("#"+a+".tabs li a").removeClass("active"),$(this).addClass("active")):($(".tabs li a").removeClass("active"),$(this).addClass("active")),$(b).show().addClass("active").siblings().hide().removeClass("active")),!1}),$(document).on("change",".options_select",function(){var a=".options_div."+$(this).val();$(".options_div").each(function(){$(this).addClass("hide")}),console.log(a),$(a).length>0&&$(a).removeClass("hide")}),$(document).on("click",".opener",function(){var a=$(this).attr("amp-target");$("#"+$(this).attr("amp-target")).hasClass("hide")?$("#"+a).removeClass("hide"):$("#"+a).addClass("hide")}),$(document).on("click",".amp_trigger",function(){$(this).attr("location");"out"==$(this).attr("clicktype")?window.open($(this).attr("location")):document.location.href=$(this).attr("location")}),$(document).on("click",".modal_opener",function(){var a=$(this).attr("amp-target");if($("#"+$(this).attr("amp-target")).hasClass("show"))$("body").css("overflow","auto"),$("#"+a).removeClass("show"),$(".focus").removeClass("blur");else{$("body").css("overflow","hidden"),$("#"+a).addClass("show").css("overflow","auto"),$(".focus").addClass("blur");var b="#"+$(this).attr("amp-tab-content"),c="#trigger_"+$(this).attr("amp-tab-content");$(c).hasClass("active")&&b.length||($(".tabs li a").removeClass("active"),$(c).addClass("active"),$(b).show().addClass("active").siblings().hide().removeClass("active"))}}),$(document).on("click",".modal_kill",function(){var a=$(this).attr("amp-target");$("body").css("overflow","auto"),$("#"+a).removeClass("show"),$(".focus").removeClass("blur")}),$(document).on("click","#search_toggle, .search_cancel",function(){$("#search_toggle").hasClass("active")?($("#search_toggle").removeClass("active"),$("#search_form").removeClass("open")):($("#search_toggle").addClass("active"),$("#search_form").addClass("open"))}),$(document).on("click","#nav_toggle",function(){$("#nav_toggle").hasClass("active")?($("#nav_toggle").removeClass("active"),$("#mainnav").removeClass("open")):($("#nav_toggle").addClass("active"),$("#mainnav").addClass("open"))})},amp.mobilelisteners=function(){var a=!1;$("body").on("touchmove",function(){a=!0}),$("body").on("touchstart",function(){a=!1}),$(document).on("click","#mainnav ul.horizontal li a",function(a){console.log("click");var b=navigator.userAgent.match(/iPad|iPhone|iPod/g)?!0:!1,c=navigator.userAgent.match(/Blackberry|BB/g)?!0:!1;if(0==b||0==c){var d=$(this).siblings("ul, .drop").length;$(this).hasClass("activated")||1>d||(a.preventDefault(),$(this).addClass("activated"))}}),$(document).on("touchend","#mainnav ul.horizontal li a",function(){if(console.log("touchend"),a=!1){var b=$(this).siblings("ul").length;b>1&&$(this).addClass("okgo")}}),$(document).on("click","#mainnav li.okgo > a",function(){window.location.href($(this).attr("href"))})},amp.desktoplisteners=function(){$.localScroll(),initTabNav()},$(document).ready(function(){amp.init()});