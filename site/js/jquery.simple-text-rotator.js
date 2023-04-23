/* ===========================================================
 * jquery-simple-text-rotator.js v1
 * ===========================================================
 * Copyright 2013 Pete Rojwongsuriya.
 * http://www.thepetedesign.com
 *
 * A very simple and light weight jQuery plugin that 
 * allows you to rotate multiple text without changing 
 * the layout
 * https://github.com/peachananr/simple-text-rotator
 *
 * ========================================================== */

!function(a){var b={animation:"dissolve",separator:",",speed:4e3};a.fx.step.textShadowBlur=function(b){a(b.elem).prop("textShadowBlur",b.now).css({textShadow:"0 0 "+Math.floor(b.now)+"px black"})},a.fn.textrotator=function(c){var d=a.extend({},b,c);return this.each(function(){var b=a(this),c=[];a.each(b.text().split(d.separator),function(a,b){c.push(b)}),b.text(c[0]);setInterval(function(){switch(d.animation){case"dissolve":b.animate({textShadowBlur:20,opacity:0},500,function(){index=a.inArray(b.text(),c),index+1==c.length&&(index=-1),b.text(c[index+1]).animate({textShadowBlur:0,opacity:1},500)});break;case"fade":b.fadeOut(d.speed,function(){index=a.inArray(b.text(),c),index+1==c.length&&(index=-1),b.text(c[index+1]).fadeIn(d.speed)});}},2*d.speed)})}}(window.jQuery);