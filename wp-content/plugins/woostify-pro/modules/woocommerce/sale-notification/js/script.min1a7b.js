"use strict";function woositfyRealTime(e=10){let t="",o=36e5*e,i=woostify_sale_notification.data;o=Math.floor(Math.random()*(o-1e4)+1e4);let n=864e5,a=36e5,s=parseInt(o/n),c=parseInt((o-s*n)/a),l=parseInt((o-s*n-c*a)/6e4),r=parseInt(o%6e4/1e3);return c>=1?t=c+" "+(c>1?i.hours:i.hour):l>0?t=l+" "+(l>1?i.minutes:i.minute):r>0&&(t=r+" "+(r>1?i.seconds:i.second)),t}function woositfyRandomValue(e){return e.length?e[Math.random()*e.length|0]:""}function woostifyMessage(e,t,o,i){let n="";return t&&(n+='<a class="sale-notification-image" href="'+e+'">',n+='<img src="'+t+'" alt="'+o+'">',n+="</a>"),n+='<div class="sale-notification-message">'+i+"</div>",n}function woostifySaleNotification(){let e=document.querySelector(".woostify-sale-notification-box"),t=!e||e.classList.contains("display-on-mobile");if(!e||!t&&window.outerWidth<=600)return;let o=woostify_sale_notification.data,i=o.products,n=o.messages;if(!i||!i.length||!n.length)return;let a=e.querySelector(".sale-notification-close-button"),s=e.querySelector(".sale-notification-inner"),c=1e3*parseInt(woostify_sale_notification.initial_display),l=1e3*parseInt(woostify_sale_notification.display_time),r=1e3*parseInt(woostify_sale_notification.next_time_display);a.onclick=function(){e.classList.remove("active")};for(let t in i){let a=woositfyRandomValue(n),d=woostifyMessage(i[t].link,i[t].src,i[t].alt,a),m=Math.floor(Math.random()*(o.min_number-o.max_number)+o.max_number),u=Number.isInteger(o.time)?woositfyRealTime(o.time):woositfyRandomValue(o.time);d=d.replace("{number}",m),d=d.replace("{time_ago}",u+" "+o.ago),d=d.replace("{first_name}",woositfyRandomValue(o.first_name)),d=d.replace("{city}",woositfyRandomValue(o.city)),d=d.replace("{state}",woositfyRandomValue(o.state)),d=d.replace("{country}",woositfyRandomValue(o.country)),d=d.replace("{product_title}",i[t].title),d=d.replace("{product_title_with_link}",'<a href="'+i[t].link+'">'+i[t].title+"</a>"),window.cacheForLoop&&(c=r+l);let f=0===Number(t)?c:c+Number(t)*(l+r);setTimeout((function(){s.innerHTML=d,e.classList.add("active"),setTimeout((function(){e.classList.remove("active")}),l),"1"==woostify_sale_notification.loop&&i.length==Number(t)+1&&(window.cacheForLoop=!0,woostifySaleNotification())}),f)}document.querySelector(".sticky-add-to-cart-section.from-bottom")&&(document.documentElement.addEventListener("stickedAddToCart",(function(){e.classList.add("need-more-space")})),document.documentElement.addEventListener("unStickedAddToCart",(function(){e.classList.remove("need-more-space")})))}document.addEventListener("DOMContentLoaded",(function(){woostifySaleNotification()}));