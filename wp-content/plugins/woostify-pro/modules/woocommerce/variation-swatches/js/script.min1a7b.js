"use strict";if(void 0===woostifyEvent)var woostifyEvent={};var woostifyAvailableVariations=function(target){var selector=target.closest("#woostify-quick-view-panel")?document.getElementById("woostify-quick-view-panel"):document.getElementById("view");if(selector){var availableSelect=selector.querySelectorAll('.variations [name^="attribute_"] option');if(availableSelect.length){var availableValue=[];availableSelect.forEach((function(as){var selectValue=as.getAttribute("value");selectValue&&!as.disabled&&availableValue.push(selectValue)}));var availableSwatch=selector.querySelectorAll(".variations .swatch");availableSwatch.length&&availableSwatch.forEach((function(awv){var swatchValue=awv.getAttribute("data-value");availableValue.includes(swatchValue)?awv.classList.remove("unavailable"):awv.classList.add("unavailable")}))}}},woostifyVariationSwatches=function(){var form=document.querySelectorAll("form.variations_form");if(form.length)for(var i=0,j=form.length;i<j;i++){var element=form[i],swatch=element.querySelectorAll(".swatch");if(!swatch.length)return;var selected=[],change=new Event("change",{bubbles:!0}),noMatching=new Event("woostify_no_matching_variations");swatch.forEach((function(el){el.onclick=function(e){if(e.preventDefault(),!el.classList.contains("unavailable")){var variations=el.closest(".variations"),parent=el.closest(".value"),allSelect=variations.querySelectorAll("select"),select=parent.querySelector("select"),attribute=select.getAttribute("data-attribute_name")||select.getAttribute("name"),value=el.getAttribute("data-value"),combi=select?select.querySelectorAll('option[value="'+value+'"]'):[],sibs=siblings(el);combi.length?(-1===selected.indexOf(attribute)&&selected.push(attribute),el.classList.contains("selected")?(select.value="",el.classList.remove("selected"),delete selected[selected.indexOf(attribute)]):(el.classList.add("selected"),sibs.length&&sibs.forEach((function(sb){sb.classList.remove("selected")})),select.value=value),select.dispatchEvent(change)):element.dispatchEvent(noMatching,el)}}}));var reset=element.querySelector(".reset_variations");reset&&reset.addEventListener("click",(function(){var resetSwatches=element.querySelectorAll(".swatch");resetSwatches.length&&resetSwatches.forEach((function(rs){rs.classList.remove("unavailable","selected")})),selected=[]})),element.addEventListener("woostify_no_matching_variations",(function(){window.alert(wc_add_to_cart_variation_params.i18n_no_matching_variations_text)}))}},woostifySwatchList=function(){var list=document.querySelectorAll(".swatch-list");list.length&&list.forEach((function(element){var parent=element.closest(".product"),imageWrap=parent.querySelector(".product-loop-image-wrapper"),image=parent.querySelector(".product-loop-image"),items=element.querySelectorAll(".swatch");items.length&&items.forEach((function(item){var sib=siblings(item),src=item.getAttribute("data-slug");item.classList.contains("selected")&&(image.setAttribute("srcset",""),image.src=src),item.onclick=function(){image.getAttribute("data-swatch")||image.setAttribute("data-swatch",image.src),imageWrap.classList.add("circle-loading"),image.setAttribute("srcset",""),sib.length&&sib.forEach((function(el){el.classList.remove("selected")})),item.classList.contains("selected")?(item.classList.remove("selected"),image.src=image.getAttribute("data-swatch")):(item.classList.add("selected"),image.src=src);var img=new Image;img.src=src,img.onload=function(){imageWrap.classList.remove("circle-loading")}}}))}))},variationAddUrl=function(){var form=document.querySelectorAll(".product-summary form.variations_form");if(form.length)for(var i=0,j=form.length;i<j;i++){var element=form[i],swatch=element.querySelectorAll(".swatch"),woostify_variation_swatches=element.querySelector(".woostify-variation-swatches");if(!woostify_variation_swatches)return;if(!woostify_variation_swatches.classList.contains("url-active"))return;if(!swatch.length)return;swatch.forEach((function(el){el.addEventListener("click",(function(e){e.preventDefault();var value=el.getAttribute("data-value"),attribute_name=el.closest(".woostify-variation-swatches").getAttribute("data-attribute_name"),queryParams=new URLSearchParams(window.location.search);this.classList.contains("selected")?queryParams.set(attribute_name,value):queryParams.delete(attribute_name),history.replaceState(null,null,"?"+queryParams.toString())}))}));var reset=element.querySelector(".reset_variations");reset&&reset.addEventListener("click",(function(){var uri=window.location.href,clean_uri=uri.substring(0,uri.indexOf("?"));window.history.replaceState({},document.title,clean_uri)}))}};jQuery(document).ajaxStop((function(){woostifyEvent.productSwatchIconReady||(jQuery(document).on("click",".swatch-list .swatch",(function(e){var imageWrap=jQuery(this).parents(".product-loop-wrapper").find(".product-loop-image-wrapper"),image=jQuery(this).parents(".product-loop-wrapper").find(".product-loop-image"),src=$(this).attr("data-slug");image.attr("data-swatch")||image.attr("data-swatch",image.attr("src")),imageWrap.addClass("circle-loading"),image.attr("srcset",""),jQuery(this).siblings().removeClass("selected"),$(this).hasClass("selected")?($(this).removeClass("selected"),image.attr("src",image.attr("data-swatch"))):($(this).addClass("selected"),image.attr("src",src));var img=new Image;img.src=src,img.onload=function(){imageWrap.removeClass("circle-loading")}})),woostifyEvent.productSwatchIconReady=1),woostifySwatchList()})),document.addEventListener("DOMContentLoaded",(function(){woostifyEvent.productSwatchReady||(woostifyVariationSwatches(),woostifySwatchList(),variationAddUrl(),jQuery(document.body).on("check_variations",(function(e){woostifyAvailableVariations(e.target)})),woostifyEvent.productSwatchReady=1)}));