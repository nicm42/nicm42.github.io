"use strict";function _createForOfIteratorHelper(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=_unsupportedIterableToArray(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,a,o=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){i=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(i)throw a}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var navLinks=document.getElementsByClassName("nav-link"),navIcon=document.getElementsByClassName("nav-icon");navIcon[0].addEventListener("click",function(){var e,t=_createForOfIteratorHelper(navLinks);try{for(t.s();!(e=t.n()).done;){e.value.classList.toggle("show")}}catch(e){t.e(e)}finally{t.f()}});var nav=document.getElementsByClassName("navigation"),navHeight=nav[0].offsetHeight,avatarHeight=navHeight-2;document.getElementById("avatar-img").style.height=avatarHeight+"px";var captions=document.getElementsByClassName("title"),descriptions=document.getElementsByClassName("description"),tools=document.getElementsByClassName("tools");function setHeights(){setHeight(captions),setHeight(descriptions),setHeight(tools)}function setHeight(e){resetHeight(e);var t,r=0,n=_createForOfIteratorHelper(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;a.offsetHeight>r&&(r=a.offsetHeight)}}catch(e){n.e(e)}finally{n.f()}var o,i=_createForOfIteratorHelper(e);try{for(i.s();!(o=i.n()).done;)element=o.value,element.style.height=r+"px"}catch(e){i.e(e)}finally{i.f()}}function resetHeight(e){var t,r=_createForOfIteratorHelper(e);try{for(r.s();!(t=r.n()).done;)element=t.value,element.style.height=null}catch(e){r.e(e)}finally{r.f()}}window.addEventListener("load",function(e){setHeights()}),window.addEventListener("resize",setHeights);
//# sourceMappingURL=script.js.map
