/*
* iziModal | v1.6.1
* https://izimodal.marcelodolza.com
* by Marcelo Dolza.
*/
!function(i){"function"==typeof define&&define.amd?define(["jquery"],i):"object"==typeof module&&module.exports?module.exports=function(t,e){return void 0===e&&(e="undefined"!=typeof window?require("jquery"):require("jquery")(t)),i(e),e}:i(jQuery)}(function(d){var h=d(window),l=d(document),c="iziModal",o="closing",u="closed",p="opening",m="opened",e="destroyed";function f(t){if(9===t)return-1!==navigator.appVersion.indexOf("MSIE 9.");t=navigator.userAgent;return-1<t.indexOf("MSIE ")||-1<t.indexOf("Trident/")}function g(t){return parseInt(String(t).split(/%|px|em|cm|vh|vw/)[0])}function i(t){t=d(d.parseHTML("<div>"+t+"</div>",null,!1));return t.find("*").each(function(){var i;i=this,d.each(i.attributes,function(){var t=this.name,e=this.value;0!=t.indexOf("on")&&0!=e.indexOf("javascript:")||d(i).removeAttr(t)})}),t.html()}var v=function(){var t,e=document.createElement("fakeelement"),i={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(t in i)if(void 0!==e.style[t])return i[t]}(),$=!!/Mobi/.test(navigator.userAgent);window.$iziModal={},window.$iziModal.autoOpen=0,window.$iziModal.history=!1;function b(t,e){this.init(t,e)}return b.prototype={constructor:b,init:function(t,n){var o=this;this.$element=d(t),void 0!==this.$element[0].id&&""!==this.$element[0].id?this.id=this.$element[0].id:(this.id=c+Math.floor(1e7*Math.random()+1),this.$element.attr("id",this.id)),this.classes=void 0!==this.$element.attr("class")?this.$element.attr("class"):"",this.content=this.$element.html(),this.state=u,this.options=n,this.width=0,this.timer=null,this.timerTimeout=null,this.progressBar=null,this.isPaused=!1,this.isFullscreen=!1,this.headerHeight=0,this.modalHeight=0,this.$overlay=d('<div class="'+c+'-overlay"></div>').css("background-color",n.overlayColor),this.$navigate=d('<div class="'+c+'-navigate"><div class="'+c+'-navigate-caption">Use</div><button class="'+c+'-navigate-prev"></button><button class="'+c+'-navigate-next"></button></div>'),this.group={name:this.$element.attr("data-"+c+"-group"),index:null,ids:[]},this.$element.attr("aria-hidden","true"),this.$element.attr("aria-labelledby",this.id),this.$element.attr("role","dialog"),this.$element.hasClass("iziModal")||this.$element.addClass("iziModal"),void 0===this.group.name&&""!==n.group&&(this.group.name=n.group,this.$element.attr("data-"+c+"-group",n.group)),!0===this.options.loop&&this.$element.attr("data-"+c+"-loop",!0),d.each(this.options,function(t,e){var i=o.$element.attr("data-"+c+"-"+t);try{void 0!==i&&(n[t]=""===i||"true"==i||"false"!=i&&("function"==typeof e?new Function(i):i))}catch(t){}}),!1!==n.appendTo&&this.$element.appendTo(n.appendTo),!0===n.iframe?(this.$element.html('<div class="'+c+'-wrap"><div class="'+c+'-content"><iframe class="'+c+'-iframe"></iframe>'+this.content+"</div></div>"),null!==n.iframeHeight&&this.$element.find("."+c+"-iframe").css("height",n.iframeHeight)):this.$element.html('<div class="'+c+'-wrap"><div class="'+c+'-content">'+this.content+"</div></div>"),null!==this.options.background&&this.$element.css("background",this.options.background),this.$wrap=this.$element.find("."+c+"-wrap"),null===n.zindex||isNaN(parseInt(n.zindex))||(this.$element.css("z-index",n.zindex),this.$navigate.css("z-index",n.zindex-1),this.$overlay.css("z-index",n.zindex-2)),""!==n.radius&&this.$element.css("border-radius",n.radius),""!==n.padding&&this.$element.find("."+c+"-content").css("padding",n.padding),""!==n.theme&&("light"===n.theme?this.$element.addClass(c+"-light"):this.$element.addClass(n.theme)),!0===n.rtl&&this.$element.addClass(c+"-rtl"),!0===n.openFullscreen&&(this.isFullscreen=!0,this.$element.addClass("isFullscreen")),this.createHeader(),this.recalcWidth(),this.recalcVerticalPos(),!o.options.afterRender||"function"!=typeof o.options.afterRender&&"object"!=typeof o.options.afterRender||o.options.afterRender(o)},createHeader:function(){this.$header=d('<div class="'+c+'-header"><h2 class="'+c+'-header-title"></h2><p class="'+c+'-header-subtitle"></p><div class="'+c+'-header-buttons"></div></div>'),!0===this.options.closeButton&&this.$header.find("."+c+"-header-buttons").append('<a href="javascript:void(0)" class="'+c+"-button "+c+'-button-close" data-'+c+"-close></a>"),!0===this.options.fullscreen&&this.$header.find("."+c+"-header-buttons").append('<a href="javascript:void(0)" class="'+c+"-button "+c+'-button-fullscreen" data-'+c+"-fullscreen></a>"),!0===this.options.timeoutProgressbar&&this.$header.prepend(d('<div class="'+c+'-progressbar">').append(d("<div>").css("background-color",this.options.timeoutProgressbarColor))),""===this.options.subtitle?this.$header.addClass(c+"-noSubtitle"):this.$header.find("."+c+"-header-subtitle").html(i(this.options.subtitle)),""!==this.options.title&&(this.$header.find("."+c+"-header-title").html(i(this.options.title)),null!==this.options.headerColor&&(!0===this.options.borderBottom&&this.$element.css("border-bottom","3px solid "+this.options.headerColor),this.$header.css("background",this.options.headerColor)),null===this.options.icon&&null===this.options.iconText||(this.$header.prepend('<i class="'+c+'-header-icon"></i>'),null!==this.options.icon&&this.$header.find("."+c+"-header-icon").addClass(this.options.icon).css("color",this.options.iconColor),null!==this.options.iconText&&this.$header.find("."+c+"-header-icon").html(i(this.options.iconText))),this.$element.css("overflow","hidden").prepend(this.$header))},setGroup:function(t){var i,n=this,e=this.group.name||t;this.group.ids=[],void 0!==t&&t!==this.group.name&&(e=t,this.group.name=e,this.$element.attr("data-"+c+"-group",e)),void 0!==e&&""!==e&&(i=0,d.each(d("."+c+"[data-"+c+"-group="+e+"]"),function(t,e){n.group.ids.push(d(this)[0].id),n.id==d(this)[0].id&&(n.group.index=i),i++}))},toggle:function(){this.state==m&&this.close(),this.state==u&&this.open()},startProgress:function(t){var e=this;this.isPaused=!1,clearTimeout(this.timerTimeout),!0===this.options.timeoutProgressbar?(this.progressBar={hideEta:null,maxHideTime:null,currentTime:(new Date).getTime(),el:this.$element.find("."+c+"-progressbar > div"),updateProgress:function(){var t;e.isPaused||(e.progressBar.currentTime=e.progressBar.currentTime+10,t=(e.progressBar.hideEta-e.progressBar.currentTime)/e.progressBar.maxHideTime*100,e.progressBar.el.width(t+"%"),t<0&&e.close())}},0<t&&(this.progressBar.maxHideTime=parseFloat(t),this.progressBar.hideEta=(new Date).getTime()+this.progressBar.maxHideTime,this.timerTimeout=setInterval(this.progressBar.updateProgress,10))):this.timerTimeout=setTimeout(function(){e.close()},e.options.timeout)},pauseProgress:function(){this.isPaused=!0},resumeProgress:function(){this.isPaused=!1},resetProgress:function(t){clearTimeout(this.timerTimeout),this.progressBar={},this.$element.find("."+c+"-progressbar > div").width("100%")},open:function(i){var t,e,n,o,s=this;try{void 0!==i&&!1===i.preventClose&&d.each(d("."+c),function(t,e){var i;void 0!==d(e).data().iziModal&&("opened"!=(i=d(e).iziModal("getState"))&&"opening"!=i||d(e).iziModal("close"))})}catch(t){}function a(){s.state=m,s.$element.trigger(m),!s.options.onOpened||"function"!=typeof s.options.onOpened&&"object"!=typeof s.options.onOpened||s.options.onOpened(s)}if(s.options.history?(t=document.title,document.title=t+" - "+s.options.title,e="#"+s.id,n=e.replace(/^.*#/,""),(o=d(e)).attr("id",n+"-tmp"),window.location.hash=e,o.attr("id",n),document.title=t,window.$iziModal.history=!0):window.$iziModal.history=!1,this.state==u){if(s.$element.off("click","[data-"+c+"-close]").on("click","[data-"+c+"-close]",function(t){t.preventDefault();t=d(t.currentTarget).attr("data-"+c+"-transitionOut");void 0!==t?s.close({transition:t}):s.close()}),s.$element.off("click","[data-"+c+"-fullscreen]").on("click","[data-"+c+"-fullscreen]",function(t){t.preventDefault(),!0===s.isFullscreen?(s.isFullscreen=!1,s.$element.removeClass("isFullscreen")):(s.isFullscreen=!0,s.$element.addClass("isFullscreen")),s.options.onFullscreen&&"function"==typeof s.options.onFullscreen&&s.options.onFullscreen(s),s.$element.trigger("fullscreen",s)}),s.$navigate.off("click","."+c+"-navigate-next").on("click","."+c+"-navigate-next",function(t){s.next(t)}),s.$element.off("click","[data-"+c+"-next]").on("click","[data-"+c+"-next]",function(t){s.next(t)}),s.$navigate.off("click","."+c+"-navigate-prev").on("click","."+c+"-navigate-prev",function(t){s.prev(t)}),s.$element.off("click","[data-"+c+"-prev]").on("click","[data-"+c+"-prev]",function(t){s.prev(t)}),this.setGroup(),this.state=p,this.$element.trigger(p),this.$element.attr("aria-hidden","false"),!0===this.options.timeoutProgressbar&&this.$element.find("."+c+"-progressbar > div").width("100%"),!0===this.options.iframe){this.$element.find("."+c+"-content").addClass(c+"-content-loader"),this.$element.find("."+c+"-iframe").on("load",function(){d(this).parent().removeClass(c+"-content-loader")});var r=null;try{r=""!==d(i.currentTarget).attr("href")?d(i.currentTarget).attr("href"):null}catch(t){}if(null!==this.options.iframeURL&&null==r&&(r=this.options.iframeURL),null==r)throw new Error("Failed to find iframe URL");this.$element.find("."+c+"-iframe").attr("src",r)}(this.options.bodyOverflow||$)&&(d("html").addClass(c+"-isOverflow"),$&&d("body").css("overflow","hidden")),this.options.onOpening&&"function"==typeof this.options.onOpening&&this.options.onOpening(this),function(){var t;1<s.group.ids.length&&(s.$navigate.appendTo("body"),s.$navigate.addClass("fadeIn"),s.options.navigateCaption&&!$&&s.$navigate.find("."+c+"-navigate-caption").show(),t=s.$element.outerWidth(),!1!==s.options.navigateArrows?"closeScreenEdge"===s.options.navigateArrows?(s.$navigate.find("."+c+"-navigate-prev").css("left",0).show(),s.$navigate.find("."+c+"-navigate-next").css("right",0).show()):(s.$navigate.find("."+c+"-navigate-prev").css("margin-left",-(t/2+84)).show(),s.$navigate.find("."+c+"-navigate-next").css("margin-right",-(t/2+84)).show()):(s.$navigate.find("."+c+"-navigate-prev").hide(),s.$navigate.find("."+c+"-navigate-next").hide()),0===s.group.index&&0===d("."+c+"[data-"+c+'-group="'+s.group.name+'"][data-'+c+"-loop]").length&&!1===s.options.loop&&s.$navigate.find("."+c+"-navigate-prev").hide(),s.group.index+1===s.group.ids.length&&0===d("."+c+"[data-"+c+'-group="'+s.group.name+'"][data-'+c+"-loop]").length&&!1===s.options.loop&&s.$navigate.find("."+c+"-navigate-next").hide()),!0===s.options.overlay&&(!1===s.options.appendToOverlay?s.$overlay.appendTo("body"):s.$overlay.appendTo(s.options.appendToOverlay)),s.options.transitionInOverlay&&s.$overlay.addClass(s.options.transitionInOverlay);var e=s.options.transitionIn;"object"==typeof i&&(void 0===i.transition&&void 0===i.transitionIn||(e=i.transition||i.transitionIn),void 0!==i.zindex&&s.setZindex(i.zindex)),""!==e&&void 0!==v?(s.$element.addClass("transitionIn "+e).show(),s.$wrap.one(v,function(){s.$element.removeClass(e+" transitionIn"),s.$overlay.removeClass(s.options.transitionInOverlay),s.$navigate.removeClass("fadeIn"),a()})):(s.$element.show(),a()),!0!==s.options.pauseOnHover||!0!==s.options.pauseOnHover||!1===s.options.timeout||isNaN(parseInt(s.options.timeout))||!1===s.options.timeout||0===s.options.timeout||(s.$element.off("mouseenter").on("mouseenter",function(t){t.preventDefault(),s.isPaused=!0}),s.$element.off("mouseleave").on("mouseleave",function(t){t.preventDefault(),s.isPaused=!1}))}(),!1===this.options.timeout||isNaN(parseInt(this.options.timeout))||!1===this.options.timeout||0===this.options.timeout||s.startProgress(this.options.timeout),this.options.overlayClose&&!this.$element.hasClass(this.options.transitionOut)&&this.$overlay.click(function(){s.close()}),this.options.focusInput&&this.$element.find(":input:not(button):enabled:visible:first").focus(),function t(){s.recalcLayout(),s.timer=setTimeout(t,300)}(),l.on("keydown."+c,function(t){s.options.closeOnEscape&&27===t.keyCode&&s.close()})}},close:function(t){var e,i=this;function n(){i.state=u,i.$element.trigger(u),!0===i.options.iframe&&i.$element.find("."+c+"-iframe").attr("src",""),(i.options.bodyOverflow||$)&&(d("html").removeClass(c+"-isOverflow"),$&&d("body").css("overflow","auto")),i.options.onClosed&&"function"==typeof i.options.onClosed&&i.options.onClosed(i),!0===i.options.restoreDefaultContent&&i.$element.find("."+c+"-content").html(i.content),0===d("."+c+":visible").length&&d("html").removeClass(c+"-isAttached")}i.options.history&&(window.location.hash=""),this.state!=m&&this.state!=p||(l.off("keydown."+c),this.state=o,this.$element.trigger(o),this.$element.attr("aria-hidden","true"),clearTimeout(this.timer),clearTimeout(this.timerTimeout),i.options.onClosing&&"function"==typeof i.options.onClosing&&i.options.onClosing(this),e=this.options.transitionOut,"object"==typeof t&&(void 0===t.transition&&void 0===t.transitionOut||(e=t.transition||t.transitionOut)),!1===e||""===e||void 0===v?(this.$element.hide(),this.$overlay.remove(),this.$navigate.remove(),n()):(this.$element.attr("class",[this.classes,c,e,"light"==this.options.theme?c+"-light":this.options.theme,!0===this.isFullscreen?"isFullscreen":"",this.options.rtl?c+"-rtl":""].join(" ")),this.$overlay.attr("class",c+"-overlay "+this.options.transitionOutOverlay),!1===i.options.navigateArrows||$||this.$navigate.attr("class",c+"-navigate fadeOut"),this.$element.one(v,function(){i.$element.hasClass(e)&&i.$element.removeClass(e+" transitionOut").hide(),i.$overlay.removeClass(i.options.transitionOutOverlay).remove(),i.$navigate.removeClass("fadeOut").remove(),n()})))},next:function(t){var n=this,o="fadeInRight",e="fadeOutLeft",i=d("."+c+":visible"),s={};s.out=this,void 0!==t&&"object"!=typeof t?(t.preventDefault(),i=d(t.currentTarget),o=i.attr("data-"+c+"-transitionIn"),e=i.attr("data-"+c+"-transitionOut")):void 0!==t&&(void 0!==t.transitionIn&&(o=t.transitionIn),void 0!==t.transitionOut&&(e=t.transitionOut)),this.close({transition:e}),setTimeout(function(){for(var t=d("."+c+"[data-"+c+'-group="'+n.group.name+'"][data-'+c+"-loop]").length,e=n.group.index+1;e<=n.group.ids.length;e++){try{s.in=d("#"+n.group.ids[e]).data().iziModal}catch(t){}if(void 0!==s.in){d("#"+n.group.ids[e]).iziModal("open",{transition:o});break}if(e==n.group.ids.length&&0<t||!0===n.options.loop)for(var i=0;i<=n.group.ids.length;i++)if(s.in=d("#"+n.group.ids[i]).data().iziModal,void 0!==s.in){d("#"+n.group.ids[i]).iziModal("open",{transition:o});break}}},200),d(document).trigger(c+"-group-change",s)},prev:function(t){var n=this,o="fadeInLeft",e="fadeOutRight",i=d("."+c+":visible"),s={};s.out=this,void 0!==t&&"object"!=typeof t?(t.preventDefault(),i=d(t.currentTarget),o=i.attr("data-"+c+"-transitionIn"),e=i.attr("data-"+c+"-transitionOut")):void 0!==t&&(void 0!==t.transitionIn&&(o=t.transitionIn),void 0!==t.transitionOut&&(e=t.transitionOut)),this.close({transition:e}),setTimeout(function(){for(var t=d("."+c+"[data-"+c+'-group="'+n.group.name+'"][data-'+c+"-loop]").length,e=n.group.index;0<=e;e--){try{s.in=d("#"+n.group.ids[e-1]).data().iziModal}catch(t){}if(void 0!==s.in){d("#"+n.group.ids[e-1]).iziModal("open",{transition:o});break}if(0===e&&0<t||!0===n.options.loop)for(var i=n.group.ids.length-1;0<=i;i--)if(s.in=d("#"+n.group.ids[i]).data().iziModal,void 0!==s.in){d("#"+n.group.ids[i]).iziModal("open",{transition:o});break}}},200),d(document).trigger(c+"-group-change",s)},destroy:function(){var t=d.Event("destroy");this.$element.trigger(t),l.off("keydown."+c),clearTimeout(this.timer),clearTimeout(this.timerTimeout),!0===this.options.iframe&&this.$element.find("."+c+"-iframe").remove(),this.$element.html(this.$element.find("."+c+"-content").html()),this.$element.off("click","[data-"+c+"-close]"),this.$element.off("click","[data-"+c+"-fullscreen]"),this.$element.off("."+c).removeData(c).removeAttr("style"),this.$overlay.remove(),this.$navigate.remove(),this.$element.trigger(e),this.$element=null},getState:function(){return this.state},getGroup:function(){return this.group},setWidth:function(t){this.options.width=t,this.recalcWidth();t=this.$element.outerWidth();!0!==this.options.navigateArrows&&"closeToModal"!=this.options.navigateArrows||(this.$navigate.find("."+c+"-navigate-prev").css("margin-left",-(t/2+84)).show(),this.$navigate.find("."+c+"-navigate-next").css("margin-right",-(t/2+84)).show())},setTop:function(t){this.options.top=t,this.recalcVerticalPos(!1)},setBottom:function(t){this.options.bottom=t,this.recalcVerticalPos(!1)},setHeader:function(t){t?this.$element.find("."+c+"-header").show():(this.headerHeight=0,this.$element.find("."+c+"-header").hide())},setTitle:function(t){this.options.title=t,0===this.headerHeight&&this.createHeader(),0===this.$header.find("."+c+"-header-title").length&&this.$header.append('<h2 class="'+c+'-header-title"></h2>'),this.$header.find("."+c+"-header-title").html(i(t))},setSubtitle:function(t){""===t?(this.$header.find("."+c+"-header-subtitle").remove(),this.$header.addClass(c+"-noSubtitle")):(0===this.$header.find("."+c+"-header-subtitle").length&&this.$header.append('<p class="'+c+'-header-subtitle"></p>'),this.$header.removeClass(c+"-noSubtitle")),this.$header.find("."+c+"-header-subtitle").html(i(t)),this.options.subtitle=t},setIcon:function(t){0===this.$header.find("."+c+"-header-icon").length&&this.$header.prepend('<i class="'+c+'-header-icon"></i>'),this.$header.find("."+c+"-header-icon").attr("class",c+"-header-icon "+t),this.options.icon=t},setIconText:function(t){this.$header.find("."+c+"-header-icon").html(i(t)),this.options.iconText=t},setHeaderColor:function(t){!0===this.options.borderBottom&&this.$element.css("border-bottom","3px solid "+t),this.$header.css("background",t),this.options.headerColor=t},setBackground:function(t){!1===t?(this.options.background=null,this.$element.css("background","")):(this.$element.css("background",t),this.options.background=t)},setZindex:function(t){isNaN(parseInt(this.options.zindex))||(this.options.zindex=t,this.$element.css("z-index",t),this.$navigate.css("z-index",t-1),this.$overlay.css("z-index",t-2))},setFullscreen:function(t){t?(this.isFullscreen=!0,this.$element.addClass("isFullscreen")):(this.isFullscreen=!1,this.$element.removeClass("isFullscreen"))},setContent:function(t){"object"==typeof t&&(!0===(t.default||!1)&&(this.content=t.content),t=t.content),!1===this.options.iframe&&this.$element.find("."+c+"-content").html(i(t))},setTransitionIn:function(t){this.options.transitionIn=t},setTransitionOut:function(t){this.options.transitionOut=t},setTimeout:function(t){this.options.timeout=t},resetContent:function(){this.$element.find("."+c+"-content").html(this.content)},startLoading:function(){this.$element.find("."+c+"-loader").length||this.$element.append('<div class="'+c+'-loader fadeIn"></div>'),this.$element.find("."+c+"-loader").css({top:this.headerHeight,borderRadius:this.options.radius})},stopLoading:function(){var t=this.$element.find("."+c+"-loader");t.length||(this.$element.prepend('<div class="'+c+'-loader fadeIn"></div>'),t=this.$element.find("."+c+"-loader").css("border-radius",this.options.radius)),t.removeClass("fadeIn").addClass("fadeOut"),setTimeout(function(){t.remove()},600)},recalcWidth:function(){var t;this.$element.css("max-width",this.options.width),f()&&(1<(t=this.options.width).toString().split("%").length&&(t=this.$element.outerWidth()),this.$element.css({left:"50%",marginLeft:-t/2}))},recalcVerticalPos:function(t){null!==this.options.top&&!1!==this.options.top?(this.$element.css("margin-top",this.options.top),0===this.options.top&&this.$element.css({borderTopRightRadius:0,borderTopLeftRadius:0})):!1===t&&this.$element.css({marginTop:"",borderRadius:this.options.radius}),null!==this.options.bottom&&!1!==this.options.bottom?(this.$element.css("margin-bottom",this.options.bottom),0===this.options.bottom&&this.$element.css({borderBottomRightRadius:0,borderBottomLeftRadius:0})):!1===t&&this.$element.css({marginBottom:"",borderRadius:this.options.radius})},recalcLayout:function(){var t=this,e=h.height(),i=this.$element.outerHeight(),n=this.$element.outerWidth(),o=this.$element.find("."+c+"-content")[0].scrollHeight,s=o+this.headerHeight,a=this.$element.innerHeight()-this.headerHeight,r=(parseInt(-(this.$element.innerHeight()+1)/2),this.$wrap.scrollTop()),l=0;f()&&(n>=h.width()||!0===this.isFullscreen?this.$element.css({left:"0",marginLeft:""}):this.$element.css({left:"50%",marginLeft:-n/2})),!0===this.options.borderBottom&&""!==this.options.title&&(l=3),this.$element.find("."+c+"-header").length&&this.$element.find("."+c+"-header").is(":visible")?(this.headerHeight=parseInt(this.$element.find("."+c+"-header").innerHeight()),this.$element.css("overflow","hidden")):(this.headerHeight=0,this.$element.css("overflow","")),this.$element.find("."+c+"-loader").length&&this.$element.find("."+c+"-loader").css("top",this.headerHeight),i!==this.modalHeight&&(this.modalHeight=i,this.options.onResize&&"function"==typeof this.options.onResize&&this.options.onResize(this)),this.state!=m&&this.state!=p||(!0===this.options.iframe&&(e<this.options.iframeHeight+this.headerHeight+l||!0===this.isFullscreen?this.$element.find("."+c+"-iframe").css("height",e-(this.headerHeight+l)):this.$element.find("."+c+"-iframe").css("height",this.options.iframeHeight)),i==e?this.$element.addClass("isAttached"):this.$element.removeClass("isAttached"),!1===this.isFullscreen&&this.$element.width()>=h.width()?this.$element.find("."+c+"-button-fullscreen").hide():this.$element.find("."+c+"-button-fullscreen").show(),this.recalcButtons(),!1===this.isFullscreen&&(e=e-(g(this.options.top)||0)-(g(this.options.bottom)||0)),e<s?(0<this.options.top&&null===this.options.bottom&&o<h.height()&&this.$element.addClass("isAttachedBottom"),0<this.options.bottom&&null===this.options.top&&o<h.height()&&this.$element.addClass("isAttachedTop"),1===d("."+c+":visible").length&&d("html").addClass(c+"-isAttached"),this.$element.css("height",e)):(this.$element.css("height",o+(this.headerHeight+l)),this.$element.removeClass("isAttachedTop isAttachedBottom"),1===d("."+c+":visible").length&&d("html").removeClass(c+"-isAttached")),a<o&&e<s?(t.$element.addClass("hasScroll"),t.$wrap.css("height",i-(t.headerHeight+l))):(t.$element.removeClass("hasScroll"),t.$wrap.css("height","auto")),a+r<o-30?t.$element.addClass("hasShadow"):t.$element.removeClass("hasShadow"))},recalcButtons:function(){var t=this.$header.find("."+c+"-header-buttons").innerWidth()+10;!0===this.options.rtl?this.$header.css("padding-left",t):this.$header.css("padding-right",t)}},h.off("load."+c).on("load."+c,function(t){var e=decodeURIComponent(document.location.hash);if(0===window.$iziModal.autoOpen&&!d("."+c).is(":visible"))try{var i=d(e).data();void 0!==i&&!1!==i.iziModal.options.autoOpen&&d(e).iziModal("open")}catch(t){}}),h.off("hashchange."+c).on("hashchange."+c,function(t){var e=decodeURIComponent(document.location.hash);if(""!==e)try{void 0!==d(e).data()&&"opening"!==d(e).iziModal("getState")&&setTimeout(function(){d(e).iziModal("open",{preventClose:!1})},200)}catch(t){}else window.$iziModal.history&&d.each(d("."+c),function(t,e){var i;void 0!==d(e).data().iziModal&&("opened"!=(i=d(e).iziModal("getState"))&&"opening"!=i||d(e).iziModal("close"))})}),l.off("click","[data-"+c+"-open]").on("click","[data-"+c+"-open]",function(t){t.preventDefault();var e=d("."+c+":visible"),i=d(t.currentTarget).attr("data-"+c+"-open"),n=d(t.currentTarget).attr("data-"+c+"-preventClose"),o=d(t.currentTarget).attr("data-"+c+"-transitionIn"),s=d(t.currentTarget).attr("data-"+c+"-transitionOut"),t=d(t.currentTarget).attr("data-"+c+"-zindex");void 0!==t&&d(i).iziModal("setZindex",t),void 0===n&&(void 0!==s?e.iziModal("close",{transition:s}):e.iziModal("close")),setTimeout(function(){void 0!==o?d(i).iziModal("open",{transition:o}):d(i).iziModal("open")},200)}),l.off("keyup."+c).on("keyup."+c,function(t){var e,i,n,o;d("."+c+":visible").length&&!$&&(e=d("."+c+":visible")[0].id,i=d("#"+e).data().iziModal.options.arrowKeys,n=d("#"+e).iziModal("getGroup"),t=(o=t||window.event).target||o.srcElement,void 0===e||!i||void 0===n.name||o.ctrlKey||o.metaKey||o.altKey||"INPUT"===t.tagName.toUpperCase()||"TEXTAREA"==t.tagName.toUpperCase()||(37===o.keyCode?d("#"+e).iziModal("prev",o):39===o.keyCode&&d("#"+e).iziModal("next",o)))}),d.fn[c]=function(t,e){if(!d(this).length&&"object"==typeof t&&this.selector){var i={$el:document.createElement("div"),id:this.selector.split("#"),class:this.selector.split(".")};if(1<i.id.length){try{i.$el=document.createElement(id[0])}catch(t){}i.$el.id=i.id[1].trim()}else if(1<i.class.length){try{i.$el=document.createElement(i.class[0])}catch(t){}for(var n=1;n<i.class.length;n++)i.$el.classList.add(i.class[n].trim())}document.body.appendChild(i.$el),this.push(d(this.selector))}for(var o=0;o<this.length;o++){var s=d(this[o]),a=s.data(c),r=d.extend({},d.fn[c].defaults,s.data(),"object"==typeof t&&t);if(a||t&&"object"!=typeof t){if("string"==typeof t&&void 0!==a)return a[t].apply(a,[].concat(e))}else s.data(c,a=new b(s,r));r.autoOpen&&(isNaN(parseInt(r.autoOpen))?!0===r.autoOpen&&a.open():setTimeout(function(){a.open()},r.autoOpen),window.$iziModal.autoOpen++)}return this},d.fn[c].defaults={title:"",subtitle:"",headerColor:"#88A0B9",background:null,theme:"",icon:null,iconText:null,iconColor:"",rtl:!1,width:600,top:null,bottom:null,borderBottom:!0,padding:0,radius:3,zindex:999,iframe:!1,iframeHeight:400,iframeURL:null,focusInput:!0,group:"",loop:!1,arrowKeys:!0,navigateCaption:!0,navigateArrows:!0,history:!1,restoreDefaultContent:!1,autoOpen:0,bodyOverflow:!1,fullscreen:!1,openFullscreen:!1,closeOnEscape:!0,closeButton:!0,appendTo:"body",appendToOverlay:"body",overlay:!0,overlayClose:!0,overlayColor:"rgba(0, 0, 0, 0.4)",timeout:!1,timeoutProgressbar:!1,pauseOnHover:!1,timeoutProgressbarColor:"rgba(255,255,255,0.5)",transitionIn:"comingIn",transitionOut:"comingOut",transitionInOverlay:"fadeIn",transitionOutOverlay:"fadeOut",onFullscreen:function(){},onResize:function(){},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){},afterRender:function(){}},d.fn[c].Constructor=b,d.fn.iziModal});
