﻿/* Copyright (c) 2012 Code it Better, http://www.codeitbetter.co.uk 

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. */

if(typeof jQuery=="undefined"){var errorMessage="jQuery library required.";if(console.error){console.error(errorMessage)}else{alert(errorMessage)}};(function(a){a.fn.DropDownListResizer=function(){var b=0;a(this).live("mousedown",function(){if(a(this).css("width")!="auto"){var c=a(this).outerWidth(true);if(b==0){b=a(this).outerWidth(true)}a(this).css("width","auto");if(a(this).outerWidth(true)<c){a(this).css("width",b)}else{a(this).css("width","auto")}a(this).focus()}}).live("blur change",function(){a(this).css("width",b)})}})(jQuery);(function(a){a.fn.WaterMark=function(c){var b={waterMarkText:"[[Your watermark text]]"};var c=a.fn.extend(b,c);return this.each(function(){if(c){try{var h=a(this);var f=c.waterMarkText;var g="wm_waterMarkText";h.val(f);h.addClass(g);a("input[type=submit]").click(function(){if(h.val()==f){h.val("")}});h.focus(function(){h.removeClass(g);if(h.val()==f){h.val("")}}).blur(function(){if(h.val().length==0){h.val(f);h.addClass((h.attr("class").length>0)?h.attr("class")+" "+g:g)}})}catch(d){alert(d.description)}}})}})(jQuery);(function(a){a.fn.FocusHighlight=function(b){return this.each(function(){try{var f=a(this);var d="fh_focus";f.focus(function(){f.addClass(d)}).blur(function(){f.removeClass(d)})}catch(c){alert(c.description)}})}})(jQuery);(function(a){a.fn.HideBrokenImages=function(){return this.each(function(){try{var b=a(this);var c=b.attr("src");if(c){var f=new Image();a(f).attr("src",c);a(document).append(a(f));a(f).error(function(){b.addClass("hide")})}else{b.addClass("hide")}}catch(d){alert(d.description)}})}})(jQuery);(function(a){a.fn.ImageLoader=function(c){var b={};var c=a.fn.extend(b,c);return this.each(function(){if(c){try{var i=a(this);var f=new Date().getDay();var h=c.loaderImagePath;var j=i.attr("src")+"?"+f;if(j){var g=new Image();a(g).attr("src",j);a(document).append(a(g));if(h){a(i).attr("src","/images/ajax-loader.gif")}else{console.error("Please provide a loader image path")}a(g).load(function(){a(i).fadeOut("fast",function(){a(i).attr("src",j).fadeIn("fast")})})}}catch(d){alert(d.description)}}})}})(jQuery);(function(a){a.fn.CharacterCount=function(c){var b={};var c=a.fn.extend(b,c);return this.each(function(){if(c){try{var d=a(this);var f=a(d).attr("maxlength");if(f>0){var h=c.charactersRemainingControlId;var g=a("#"+h);if(g){a(g).html(f)}function i(){var m=d.val();var e=m.length;if(e>f){var k=m.substr(0,f);a(d).val(k);e=f}var l=(f-e);if(l>=0){a(g).html(l)}}i();a(d).keyup(function(){i()})}else{console.error("Character count: please ensure 'maxlength' has been set against your textbox or textarea.");d.css("border","solid 2px red")}}catch(j){console.error(j.description)}}})}})(jQuery);(function(a){a.fn.Ellipsis=function(c){var b={numberOfCharacters:10,showLessText:"less",showMoreText:"more"};var c=a.fn.extend(b,c);return this.each(function(){if(c){try{var f=a(this);var i=a.trim(f.text()).replace(/\s*[\r\n]+\s*/g,"\n").replace(/(<[^\/][^>]*>)\s*/g,"$1").replace(/\s*(<\/[^>]+>)/g,"$1");var g=parseInt(c.numberOfCharacters);var h=i.substr(0,g);var j=document.createElement("a");a(j).addClass("ellipsis-link");if(i.length>g){var k=c.showLessText;var l=c.showMoreText;a(j).text(l);f.text(h+"...").after(a(j));a(j).toggle(function(){a(this).text(k);f.text(i)},function(){a(this).text(l);f.text(h+"...")})}else{a(j).hide()}}catch(d){alert(d.description)}}})}})(jQuery);(function(a){a.fn.News=function(c){var b={animatonSpeed:"fast",changeFrequency:2000};var c=a.fn.extend(b,c);return this.each(function(){if(c){try{var k=null;var g=c.animatonSpeed;var h=c.changeFrequency;var i=a(this);var j=i.attr("id");function f(){var e=a("#"+j+" ul li").outerHeight();var l=parseInt(a("#"+j+" ul").css("top"))-e;a(i).find("ul").animate({top:l},g,function(){a(i).find("ul li:last").after(a("#"+j+" ul li:first"));a(i).find("ul").css({top:"0"})});k=setTimeout(f,h)}k=setTimeout(f,h);i.mouseover(function(){clearTimeout(k)}).mouseout(function(){k=setTimeout(f,h)})}catch(d){alert(d.description)}}})}})(jQuery);