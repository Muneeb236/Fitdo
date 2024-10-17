"use strict";function woostifyInfiniteScroll(addEventClick,infScrollPath){let container=document.querySelector(".site-main .products"),view_more_btn_wrap=document.querySelector(".woostify-view-more"),view_prev_btn_wrap=document.querySelector(".woostify-view-prev"),view_prev_btn=document.querySelector(".w-view-prev-button"),pagination=document.querySelector(".woocommerce-pagination ul.page-numbers");if(null==container&&(container=document.querySelector(".site-content .products")),!(null!=view_more_btn_wrap&&void 0!==view_more_btn_wrap||null!=view_prev_btn_wrap&&void 0!==view_prev_btn_wrap))return!1;if(null==view_more_btn_wrap||void 0===view_more_btn_wrap){let options={path:infScrollPath||".prev.page-numbers",append:".product.type-product",history:"push",hideNav:".woocommerce-pagination",loadOnScroll:!1};window.infScroll=new InfiniteScroll(container,options);var pagePrev=woostify_woocommerce_general.paged-1,page=woostify_woocommerce_general.paged,listPage={};return jQuery(".page-numbers").each((function(index,value){listPage[jQuery(value).text()]=jQuery(value).attr("href")})),view_prev_btn_wrap&&view_prev_btn&&view_prev_btn.addEventListener("click",(function(){var elementHeight=infScroll.element.getBoundingClientRect().height,view_prev_btn_wrap=document.querySelector(".woostify-view-prev");if(page<=1)return;let domParser=new DOMParser,path,{responseBody:responseBody,domParseResponse:domParseResponse,fetchOptions:fetchOptions}=infScroll.options;path=listPage[pagePrev],history.pushState(null,"",path);var url=jQuery(".page-numbers");"function"==typeof fetchOptions&&(fetchOptions=fetchOptions()),view_prev_btn.classList.add("circle-loading");var fetchPromise=fetch(path,fetchOptions).then(response=>{if(!response.ok){let error=new Error(response.statusText);return infScroll.onPageError(error,path,response),{response:response}}return view_prev_btn.classList.remove("circle-loading"),--pagePrev<=0&&(view_prev_btn_wrap.style.display="none"),response[responseBody]().then(body=>{let canDomParse;"text"==responseBody&&domParseResponse&&(body=domParser.parseFromString(body,"text/html"));let items=body.querySelectorAll(infScroll.options.append);if(!items||!items.length)return;let fragment=getItemsFragment(items);infScroll.element.insertBefore(fragment,infScroll.element.children[0]);var scrollPages=infScroll.scrollPages,history={top:0,path:path,title:response.title};infScroll.scrollPages.unshift(history);for(var i=1;i<infScroll.scrollPages.length;i++)infScroll.scrollPages[i].top=infScroll.scrollPages[i].top+elementHeight})}).catch(error=>{console.log(error)})})),!1}let loading_status=view_more_btn_wrap.querySelector(".woostify-loading-status"),loading_type=woostify_woocommerce_general.loading_type,view_more_btn=view_more_btn_wrap.querySelector(".w-view-more-button"),options={path:infScrollPath||".next.page-numbers",append:".product.type-product",history:"push",hideNav:".woocommerce-pagination",checkLastPage:".next.page-numbers",loadOnScroll:"button"!==loading_type};null==pagination||void 0===pagination?"button"===loading_type?view_more_btn_wrap.style.display="none":options.loadOnScroll=!1:"button"===loading_type?(view_more_btn_wrap.style.display="block",view_more_btn.style.display="inline-flex"):options.loadOnScroll=!0,window.infScroll=new InfiniteScroll(container,options),infScroll.loadCount=0,infScroll.on("request",(function(path,fetchPromise){"button"===loading_type?view_more_btn.classList.add("circle-loading"):loading_status.style.display="inline-block"})),infScroll.on("load",(function(body,path,fetchPromise){let all_page=body.querySelectorAll(".woocommerce-pagination .page-numbers .page-numbers:not(.next):not(.prev):not(.dots)"),next_page_el,is_last_page=!body.querySelectorAll(".woocommerce-pagination .page-numbers .page-numbers.next").length;"button"===loading_type?view_more_btn.classList.remove("circle-loading"):loading_status.style.display="none",all_page.length?is_last_page?"button"===loading_type?view_more_btn.style.display="none":(loading_status.style.display="none",infScroll.option({loadOnScroll:!1})):"button"!==loading_type&&infScroll.option({loadOnScroll:!0}):"button"===loading_type?view_more_btn.style.display="inline-flex":loading_status.style.display="inline-block"})),infScroll.on("append",(function(body,path,items,response){"function"==typeof woostifyQuickView&&woostifyQuickView(),"function"==typeof woostifyVariationSwatches&&woostifyVariationSwatches(),"function"==typeof woostifySwatchList&&woostifySwatchList(),"function"==typeof customQuantity&&customQuantity(),"function"==typeof woostifyCountdownUrgency&&woostifyCountdownUrgency(),"1"===woostify_woocommerce_general.is_active_wvs&&jQuery(".variations_form").each((function(){jQuery(this).wc_variation_form()}))})),infScroll.on("last",(function(body,path){"button"===loading_type?view_more_btn.style.display="none":loading_status.style.display="none"}));var pagePrev=woostify_woocommerce_general.paged-1,page=infScroll.pageIndex,listPage={};jQuery(".page-numbers").each((function(index,value){listPage[jQuery(value).text()]=jQuery(value).attr("href")})),view_prev_btn_wrap&&view_prev_btn&&view_prev_btn.addEventListener("click",(function(){loadPreviewPage(infScroll,pagePrev,listPage),pagePrev--})),"button"===loading_type&&addEventClick&&view_more_btn.addEventListener("click",(function(){infScroll.loadNextPage()}))}function loadPreviewPage(infScroll,pagePrev,listPage){let view_prev_btn=document.querySelector(".w-view-prev-button");var elementHeight=infScroll.element.getBoundingClientRect().height,view_prev_btn_wrap=document.querySelector(".woostify-view-prev"),page=infScroll.pageIndex;if(page<=1)return;let domParser=new DOMParser,path,{responseBody:responseBody,domParseResponse:domParseResponse,fetchOptions:fetchOptions}=infScroll.options;page-1==pagePrev&&(path=jQuery(".prev.page-numbers").attr("href")),path=listPage[pagePrev],history.pushState(null,"",path);var url=jQuery(".page-numbers");"function"==typeof fetchOptions&&(fetchOptions=fetchOptions()),view_prev_btn.classList.add("circle-loading");var fetchPromise=fetch(path,fetchOptions).then(response=>{if(!response.ok){let error=new Error(response.statusText);return infScroll.onPageError(error,path,response),{response:response}}return view_prev_btn.classList.remove("circle-loading"),--pagePrev<=0&&(view_prev_btn_wrap.style.display="none"),response[responseBody]().then(body=>{let canDomParse;"text"==responseBody&&domParseResponse&&(body=domParser.parseFromString(body,"text/html"));let items=body.querySelectorAll(infScroll.options.append);if(!items||!items.length)return;let fragment=getItemsFragment(items);infScroll.element.insertBefore(fragment,infScroll.element.children[0]);var scrollPages=infScroll.scrollPages,history={top:0,path:path,title:response.title};infScroll.scrollPages.unshift(history);for(var i=1;i<infScroll.scrollPages.length;i++)infScroll.scrollPages[i].top=infScroll.scrollPages[i].top+elementHeight})}).catch(error=>{console.log(error)})}function refreshScripts(fragment){let scripts=fragment.querySelectorAll("script");for(let script of scripts){let freshScript=document.createElement("script"),attrs=script.attributes;for(let attr of attrs)freshScript.setAttribute(attr.name,attr.value);freshScript.innerHTML=script.innerHTML,script.parentNode.replaceChild(freshScript,script)}}function getItemsFragment(items){let fragment=document.createDocumentFragment();return items&&fragment.append(...items),fragment}function cartSidebarOpen(){document.body.classList.contains("no-cart-sidebar")||document.body.classList.contains("disabled-sidebar-cart")||document.documentElement.classList.add("cart-sidebar-open")}function eventCartSidebarOpen(){document.body.classList.add("updating-cart"),document.body.classList.remove("cart-updated")}function eventCartSidebarClose(){document.body.classList.add("cart-updated"),document.body.classList.remove("updating-cart")}function shoppingBag(){var shoppingBag=document.getElementsByClassName("shopping-bag-button"),cartSidebar=document.getElementById("shop-cart-sidebar");if(shoppingBag.length&&cartSidebar&&!document.body.classList.contains("woocommerce-cart")&&!document.body.classList.contains("woocommerce-checkout"))for(var i=0,j=shoppingBag.length;i<j;i++)shoppingBag[i].addEventListener("click",(function(e){e.preventDefault(),cartSidebarOpen(),closeAll()}))}var woostifyConditionScrolling=function(){return!!(document.body.classList.contains("woocommerce-demo-store")&&-1===document.cookie.indexOf("store_notice")||(document.body.classList.contains("has-order-sticky-button")||document.body.classList.contains("has-proceed-sticky-button"))&&window.innerWidth<768)},woostifyStockQuantityProgressBar=function(){var selector=document.querySelectorAll(".woostify-single-product-stock-progress-bar");selector.length&&selector.forEach((function(element,index){var number=element.getAttribute("data-number")||0;element.style.width=number+"%"}))},progressBarConfetti=function(progress_bar,percent){if(woostify_woocommerce_general.shipping_threshold.enabled_shipping_threshold&&woostify_woocommerce_general.shipping_threshold.enabled_shipping_threshold_effect){var curr_progress_bar=document.querySelectorAll(".free-shipping-progress-bar"),curr_percent=0;if(curr_progress_bar.length&&(curr_percent=parseInt(curr_progress_bar[0].getAttribute("data-progress"))),!progress_bar.length&&curr_percent>=100||percent<curr_percent&&curr_percent>=100){let confetti_canvas=document.createElement("canvas");confetti_canvas.className="confetti-canvas",document.querySelector("#shop-cart-sidebar").appendChild(confetti_canvas);let wConfetti=confetti.create(confetti_canvas,{resize:!0});confettiSnowEffect(wConfetti,5e3),setTimeout((function(){wConfetti.reset(),document.querySelector(".confetti-canvas").remove()}),6e3)}percent=curr_percent}},confettiSnowEffect=function(confetti,duration){var animationEnd=Date.now()+duration,gravity=1,startVelocity=0;function randomInRange(min,max){return Math.random()*(max-min)+min}!function frame(){var timeLeft=animationEnd-Date.now(),ticks=Math.max(200,timeLeft/duration*500);confetti({particleCount:1,startVelocity:0,ticks:ticks,origin:{x:Math.random(),y:0},colors:["#EF2964"],shapes:["circle","square"],gravity:1,scalar:randomInRange(.4,1),drift:randomInRange(-.4,.4)}),confetti({particleCount:1,startVelocity:0,ticks:ticks,origin:{x:Math.random(),y:0},colors:["#2D87B0"],shapes:["circle","square"],gravity:1,scalar:randomInRange(.4,1),drift:randomInRange(-.4,.4)}),timeLeft>0&&requestAnimationFrame(frame)}()},woostifyQuantityMiniCart=function(){var cartCountContainer=document.querySelector(".shopping-bag-button .shop-cart-count, .boostify-count-product"),infor=document.querySelectorAll(".mini-cart-product-infor");infor.length&&cartCountContainer?(cartCountContainer.classList.remove("hide"),infor.forEach((function(ele,i){var quantityBtn=ele.querySelectorAll(".mini-cart-product-qty"),input=ele.querySelector("input.qty"),currInputVal=input.value,max=Number(input.getAttribute("max")||-1),cartItemKey=input.getAttribute("data-cart_item_key")||"",eventChange=new Event("change"),qtyUpdate=new Event("quantity_updated");if(quantityBtn.length&&input){for(var i=0,j=quantityBtn.length;i<j;i++)quantityBtn[i].onclick=function(){var t=this,current=Number(input.value||0),step=Number(input.getAttribute("step")||1),min=Number(input.getAttribute("min")||1),dataType=t.getAttribute("data-qty");if(current<min||isNaN(current))alert(woostify_woocommerce_general.qty_warning);else{if("minus"===dataType){if(current<=min||current-step<min||current<=step)return;var qty=Number((current-step).toFixed(step.countDecimals()));input.value=qty,currInputVal=qty}else if("plus"===dataType){if(max>0&&(current>=max||current+step>max))return;var qty=Number((current+step).toFixed(step.countDecimals()));input.value=qty,currInputVal=qty}input.dispatchEvent(eventChange)}};input.addEventListener("change",(function(){var inputVal=Number(input.value||0),min;if(inputVal<Number(input.getAttribute("min")||0)||isNaN(inputVal)||max>0&&Number(inputVal)>max)return alert(woostify_woocommerce_general.qty_warning),void(input.value=currInputVal);var request=new Request(woostify_woocommerce_general.ajax_url,{method:"POST",body:"action=update_quantity_in_mini_cart&ajax_nonce="+woostify_woocommerce_general.ajax_nonce+"&key="+cartItemKey+"&qty="+inputVal,credentials:"same-origin",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded; charset=utf-8"})});document.documentElement.classList.add("mini-cart-updating"),fetch(request).then((function(res){if(200!==res.status)throw alert(woostify_woocommerce_general.ajax_error),console.log("Status Code: "+res.status),res;return res.json()})).then((function(json){if(json.success){jQuery(document.body).trigger("updated_wc_div");var data=json.data,totalPrice=document.querySelector(".cart-sidebar-content .woocommerce-mini-cart__total .woocommerce-Price-amount.amount"),headerCartPriceContainer=document.querySelectorAll(".woostify-header-total-price, .boostify-subtotal"),productCount=document.querySelectorAll(".shop-cart-count, .boostify-count-product"),shipping_threshold=document.querySelectorAll(".free-shipping-progress-bar");if(totalPrice&&(totalPrice.innerHTML=data.total_price,headerCartPriceContainer.length))for(var si=0,sc=headerCartPriceContainer.length;si<sc;si++)headerCartPriceContainer[si].innerHTML=data.total_price;if(productCount.length)for(var c=0,n=productCount.length;c<n;c++)productCount[c].innerHTML=data.item;if(shipping_threshold.length&&data.hasOwnProperty("free_shipping_threshold")){let prev_percent=shipping_threshold[0].getAttribute("data-progress");for(var fsti=0,fstc=shipping_threshold.length;fsti<fstc;fsti++)shipping_threshold[fsti].setAttribute("data-progress",data.free_shipping_threshold.percent),shipping_threshold[fsti].querySelector(".progress-bar-message").innerHTML=data.free_shipping_threshold.message,shipping_threshold[fsti].querySelector(".progress-percent")&&(shipping_threshold[fsti].querySelector(".progress-percent").innerHTML=data.free_shipping_threshold.percent+"%"),shipping_threshold[fsti].querySelector(".progress-bar-status")&&(shipping_threshold[fsti].querySelector(".progress-bar-status").style.minWidth=data.free_shipping_threshold.percent+"%",shipping_threshold[fsti].querySelector(".progress-bar-status").style.transitionDuration=".6s",100<=parseInt(data.free_shipping_threshold.percent)?shipping_threshold[fsti].querySelector(".progress-bar-status").classList.add("success"):shipping_threshold[fsti].querySelector(".progress-bar-status").classList.remove("success"));if(woostify_woocommerce_general.shipping_threshold.enabled_shipping_threshold&&woostify_woocommerce_general.shipping_threshold.enabled_shipping_threshold_effect&&prev_percent<100&&data.free_shipping_threshold.percent>=100){var confetti_canvas=document.createElement("canvas");confetti_canvas.className="confetti-canvas",document.querySelector("#shop-cart-sidebar").appendChild(confetti_canvas);var wConfetti=confetti.create(confetti_canvas,{resize:!0});confettiSnowEffect(wConfetti,5e3),setTimeout((function(){wConfetti.reset(),document.querySelector(".confetti-canvas").remove()}),6e3)}}}})).catch((function(err){console.log(err)})).finally((function(){document.documentElement.classList.remove("mini-cart-updating"),document.dispatchEvent(qtyUpdate)}))}))}}))):cartCountContainer&&cartCountContainer.classList.add("hide")},updateHeaderCartPrice=function(){var total=document.querySelector(".cart-sidebar-content .woocommerce-mini-cart__total .woocommerce-Price-amount.amount"),priceFormat="",headerCartPriceContainer=document.querySelectorAll(".woostify-header-total-price");if(headerCartPriceContainer.length){switch(woostify_woocommerce_general.currency_pos){case"left":priceFormat='<span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">'+woostify_woocommerce_general.currency_symbol+"</span>0</bdi></span>";break;case"right":priceFormat='<span class="woocommerce-Price-amount amount"><bdi>0<span class="woocommerce-Price-currencySymbol">'+woostify_woocommerce_general.currency_symbol+"</span></bdi></span>";break;case"left_space":priceFormat='<span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">'+woostify_woocommerce_general.currency_symbol+"</span>&nbsp;0</bdi></span>";break;case"right_space":priceFormat='<span class="woocommerce-Price-amount amount"><bdi>0&nbsp;<span class="woocommerce-Price-currencySymbol">'+woostify_woocommerce_general.currency_symbol+"</span></bdi></span>"}for(var si=0,sc=headerCartPriceContainer.length;si<sc;si++)headerCartPriceContainer[si].innerHTML=total?'<span class="woocommerce-Price-amount amount">'+total.innerHTML+"</span>":priceFormat}},woostifyProductsCarousel=function(selector){var elements=document.querySelectorAll(selector);elements.length&&elements.forEach((function(element){if(!element.classList.contains("tns-slider")&&woostify_woocommerce_general.related_carousel_opts.hasOwnProperty("loop")){var options=woostify_woocommerce_general.related_carousel_opts;options.container=element;var slider=tns(options)}}))},woostiftToggleShow=function(elem){var getHeight,height=function(){elem.style.display="block";var height=elem.scrollHeight+"px";return elem.style.display="",height}();elem.classList.add("is-visible"),elem.style.height=height,window.setTimeout((function(){elem.style.height=""}),350)},woostiftToggleHide=function(elem){elem.style.height=elem.scrollHeight+"px",window.setTimeout((function(){elem.style.height="0"}),1),window.setTimeout((function(){elem.classList.remove("is-visible")}),350)},woostifyToggleSlide=function(elem,timing){elem.classList.contains("is-visible")?woostiftToggleHide(elem):woostiftToggleShow(elem)},productDataTabsAccordion=function(){var wcTabs=document.querySelectorAll(".woocommerce-tabs.layout-accordion");wcTabs.length&&wcTabs.forEach((function(wcTab){var tabTitles=wcTab.querySelectorAll(".woostify-accordion-title");if(tabTitles.length){var tabsWrapper=wcTab.querySelectorAll(".woostify-tab-wrapper");tabTitles.forEach((function(tabTitle,tabTitleIdx){tabTitle.onclick=function(){tabsWrapper.forEach((function(tabWrapper,tabWrapperIdx){tabWrapperIdx!==tabTitleIdx&&(tabWrapper.classList.contains("active")&&woostifyToggleSlide(tabWrapper.querySelector(".woocommerce-Tabs-panel")),tabWrapper.classList.remove("active"))})),tabTitle.parentNode.classList.contains("active")?tabTitle.parentNode.classList.remove("active"):tabTitle.parentNode.classList.add("active");var nextEls=nextSiblings(tabTitle);woostifyToggleSlide(nextEls[0])}}))}}))},stickyOrderReview=function(){var form,sidebarContainerSelector,reviewOrder=new WSYSticky("form.woocommerce-checkout .woostify-col .col-right-inner",{stickyContainer:"form.woocommerce-checkout",marginTop:96})},checkoutOrder=function(){var checkout_opt=document.querySelector(".before-checkout");if(checkout_opt){var spacer_orig=checkout_opt.offsetHeight,div_height=spacer_orig,show_login=document.querySelector(".showlogin"),sc_coupons_list;document.querySelector("#coupons_list")?document.arrive(".sc-coupon",(function(){document.getElementById("coupons_list").style.display="block",setTimeout((function(){set_heights(),jQuery(document).unbindArrive(".sc-coupon")}),1e3)})):set_heights(),document.body.addEventListener("click",(function(event){if(event.target===show_login){var refreshIntervalId=setInterval((function(){set_heights()}),50);setTimeout((function(){spacer_orig==div_height&&clearInterval(refreshIntervalId)}),2e3)}}))}function set_heights(){setTimeout((function(){var div_height=checkout_opt.offsetHeight;document.querySelector("#checkout-spacer").style.minHeight=div_height+"px",checkout_opt.classList.add("ready")}),200)}},woostifyGetUrl=function(endpoint){return wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%",endpoint)},woostifyShowNotice=function(html_element,$target){$target||($target=jQuery(".woocommerce-notices-wrapper:first")||jQuery(".cart-empty").closest(".woocommerce")||jQuery(".woocommerce-cart-form")),$target.prepend(html_element)},ajaxCouponForm=function(){var couponForm=document.querySelector("form.checkout_coupon");couponForm&&couponForm.addEventListener("submit",(function(event){event.preventDefault();var text_field=document.getElementById("coupon_code"),coupon_code=text_field.value,data={security:woostify_woocommerce_general.apply_coupon_nonce,coupon_code:coupon_code};jQuery.ajax({type:"POST",url:woostifyGetUrl("apply_coupon"),data:data,dataType:"html",success:function(response){jQuery(".woocommerce-error, .woocommerce-message, .woocommerce-NoticeGroup .woocommerce-info, .woocommerce-notices-wrapper .woocommerce-info").remove(),woostifyShowNotice(response,jQuery(".woostify-woocommerce-NoticeGroup")),jQuery(document.body).trigger("applied_coupon",[coupon_code])},complete:function(){text_field.value="",jQuery(document.body).trigger("update_checkout")}})}))},woostifyMoveNoticesInCheckoutPage=function(){var noticesWrapper=document.querySelectorAll(".woocommerce-notices-wrapper"),infoNotices=document.querySelectorAll(".woocommerce > .woocommerce-info"),woostifyNoticeGroup=document.querySelector(".woostify-woocommerce-NoticeGroup");if(woostifyNoticeGroup){if(noticesWrapper.length){var noticesWrapperEl=noticesWrapper[0],noticesWrapperNode=document.createElement("div");noticesWrapperNode.innerHTML=noticesWrapperEl.innerHTML,woostifyNoticeGroup.appendChild(noticesWrapperNode),noticesWrapperEl.remove()}infoNotices.length&&infoNotices.forEach((function(infoNotice){var infoNoticeNode=infoNotice.cloneNode(!0),classes=infoNotice.getAttribute("class");infoNoticeNode.setAttribute("class",classes),woostifyNoticeGroup.appendChild(infoNoticeNode),infoNotice.remove()}))}},woostifyCheckoutFormFieldAnimation=function(){var inputs=document.querySelectorAll("form.checkout .input-text, form.checkout_coupon .input-text"),formRows=document.querySelectorAll("form.checkout .form-row");inputs.length&&inputs.forEach((function(input){var formRow=input.closest(".form-row");formRow&&(""!==input.value&&formRow.classList.add("w-anim-wrap"),input.addEventListener("focus",(function(event){var formRow;event.target.closest(".form-row").classList.add("w-anim-wrap")})),input.addEventListener("blur",(function(event){var formRow=event.target.closest(".form-row");""===event.target.value&&(formRow.classList.remove("w-anim-wrap"),formRow.classList.contains("validate-required")&&formRow.classList.add("woocommerce-invalid-required-field"))})))})),formRows.length&&formRows.forEach((function(formRowEl){var labelEl=formRowEl.querySelector("label");if(null==labelEl?formRowEl.classList.add("no-label"):labelEl.classList.remove("screen-reader-text"),formRowEl.classList.contains("address-field")){var fieldInputs=formRowEl.querySelectorAll("input"),select2Inputs=formRowEl.querySelectorAll("span.select2");fieldInputs.length&&fieldInputs.length>0&&fieldInputs.forEach((function(fInput){"hidden"===fInput.getAttribute("type")?formRowEl.classList.add("field-readonly"):formRowEl.classList.remove("field-readonly")})),select2Inputs.length&&select2Inputs.length>0&&(formRowEl.classList.add("w-anim-wrap"),formRowEl.classList.remove("field-readonly"))}}))};document.addEventListener("DOMContentLoaded",(function(){var isMinimalCheckoutLayout;if(shoppingBag(),woostifyQuantityMiniCart(),woostifyProductsCarousel(".related.products ul.products"),woostifyProductsCarousel(".upsells.products ul.products"),woostifyProductsCarousel(".woostify-product-recently-viewed-section ul.products"),productDataTabsAccordion(),window.addEventListener("load",(function(){woostifyStockQuantityProgressBar()})),console.log(222),woostifyInfiniteScroll(!0),jQuery(document.body).on("adding_to_cart",(function(){eventCartSidebarOpen()})).on("added_to_cart",(function(e,fragments,cart_hash,$button){if(woostifyQuantityMiniCart(),updateHeaderCartPrice(),eventCartSidebarClose(),closeAll(),$button=void 0!==$button&&$button){if($button.removeClass("loading"),cartSidebarOpen(),fragments&&$button.addClass("added"),fragments&&!wc_add_to_cart_params.is_cart&&0===$button.parent().find(".added_to_cart").length){var icon=get_svg_icon("shopping-cart-full");$button.after('<a href="'+wc_add_to_cart_params.cart_url+'" class="added_to_cart wc-forward" title="'+wc_add_to_cart_params.i18n_view_cart+'">'+icon+wc_add_to_cart_params.i18n_view_cart+"</a>")}jQuery(document.body).trigger("wc_cart_button_updated",[$button])}})).on("removed_from_cart",(function(){woostifyQuantityMiniCart(),updateHeaderCartPrice()})).on("updated_cart_totals",(function(){"function"==typeof customQuantity&&customQuantity(),woostifyQuantityMiniCart(),updateHeaderCartPrice()})).on("wc_fragments_loaded wc_fragments_refreshed",(function(){if(woostifyQuantityMiniCart(),updateHeaderCartPrice(),woostify_woocommerce_general.shipping_threshold.enabled_shipping_threshold&&woostify_woocommerce_general.shipping_threshold.enabled_shipping_threshold_effect){var progress_bar=document.querySelectorAll(".free-shipping-progress-bar"),percent=0;progress_bar.length&&(percent=parseInt(progress_bar[0].getAttribute("data-progress"))),progressBarConfetti(progress_bar,percent)}})).on("wc_cart_emptied",(function(){location.reload()})),jQuery(document.body).on("init_checkout updated_checkout payment_method_selected",(function(){"function"==typeof customQuantity&&customQuantity()})),document.body.classList.contains("checkout-layout-3")){var resized=!1;woostifyCheckoutFormFieldAnimation(),woostifyMoveNoticesInCheckoutPage(),jQuery(document.body).on("updated_checkout",(function(event,data){setTimeout((function(){woostifyCheckoutFormFieldAnimation()}),100)})).on("init_checkout updated_checkout payment_method_selected",(function(event,data){jQuery(".woostify-woocommerce-NoticeGroup").html(""),jQuery("form.checkout").arrive("form.checkout_coupon",(function(newEl){ajaxCouponForm(),jQuery("form.checkout").unbindArrive("form.checkout_coupon")})),jQuery("form.checkout").arrive(".ajax-coupon-form",(function(newEl){jQuery(newEl).removeClass("loading"),jQuery(newEl).addClass("ready")})),jQuery("form.checkout").arrive(".woocommerce-NoticeGroup",(function(){jQuery(".woostify-woocommerce-NoticeGroup").append(jQuery(".woocommerce-NoticeGroup").html()),jQuery(".woocommerce-NoticeGroup").remove()})),jQuery(document).arrive(".woocommerce > .woocommerce-message",(function(newEl){var newWcMsg,newWcMsgClone=jQuery(newEl).clone();jQuery(".woostify-woocommerce-NoticeGroup").append(newWcMsgClone),jQuery(newEl).remove()})),jQuery(document).arrive(".woocommerce > .woocommerce-info",(function(newEl){var newWcMsg,newWcMsgClone=jQuery(newEl).clone();jQuery(".woostify-woocommerce-NoticeGroup").append(newWcMsgClone),jQuery(newEl).remove()}))})).on("applied_coupon",(function(){jQuery("form.checkout").arrive("form.checkout_coupon",(function(newEl){ajaxCouponForm(),jQuery("form.checkout").unbindArrive("form.checkout_coupon")}))})),jQuery("form.checkout").arrive("form.checkout_coupon",(function(newEl){ajaxCouponForm(),jQuery("form.checkout").unbindArrive("form.checkout_coupon")})),checkoutOrder(),stickyOrderReview(),window.onscroll=function(){resized||(window.dispatchEvent(new Event("resize")),resized=!0)}}"function"==typeof onElementorLoaded&&onElementorLoaded((function(){window.elementorFrontend.hooks.addAction("frontend/element_ready/global",(function(){productDataTabsAccordion()}))}))}));