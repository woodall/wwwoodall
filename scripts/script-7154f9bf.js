(function(){$(document).ready(function(){var t,e,n,r,o;return e=document.getElementById("js-fadeInElement"),$(e).addClass("js-fade-element-hide"),$(window).scroll(function(){var t,n,r,o,i,s;return n=$(e).offset().top,s=$(window).scrollTop(),i=window.innerHeight,o=n-s,r=i-o,t=750,r>t?$(e).addClass("js-fade-element-show"):600>r?($(e).removeClass("js-fade-element-show"),$(e).addClass("js-fade-element-hide")):void 0}),$("#gifs").click(function(){return $("#gifs").children().hide(),$("p.date").text("(Click to show)")}),$("#gif-show").click(function(){return $("#gifs").children().show(),$("p.date").text("(Click to hide)")}),t=function(){function t(t,e){this.posts=t,this.tags=e,this.currentTag="",_.each(this.tags,function(t){return function(e){return e.el.on("click",_.bind(t.onClick,t))}}(this))}return t.prototype.onClick=function(t){var e,n;return e=$(t.currentTarget),this.currentTag=n=e.text(),this.filterPosts(n)},t.prototype.filterPosts=function(t){var e,n,r,o,i,s,u,l;for(e=_.filter(this.posts,function(e){return e.tag===t}),u=this.allPosts(),r=0,i=u.length;i>r;r++)n=u[r],$(n).hide();for(l=[],o=0,s=e.length;s>o;o++)n=e[o],l.push($(n.el).show());return l},t.prototype.allPosts=function(){return _.map(this.posts,function(t){return t.el})},t.prototype.addPost=function(t){return this.posts.push(t)},t}(),r=_.map($("article"),function(t){return{el:$(t),tag:$(t).data("tag")}}),o=_.map($(".blog-tags ul > li"),function(t){return{el:$(t),tag:$(t).text()}}),n=new t(r,o),jQuery.mark={jump:function(t){var e;return e={selector:"a.scroll-on-page-link"},"string"==typeof t&&(e.selector=t),t=jQuery.extend(e,t),jQuery(t.selector).click(function(t){var e,n,r,o;e=jQuery(this),r=e.attr("href"),o=800,n=jQuery(r).offset().top,jQuery("html,body").animate({scrollTop:n},o,"swing"),t.preventDefault()})}}}),jQuery(function(){jQuery.mark.jump()})}).call(this);