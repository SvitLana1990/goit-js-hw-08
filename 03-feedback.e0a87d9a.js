function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function p(e,t,n){var r,o,i,a,f,u,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function x(e){return l=e,f=setTimeout(S,t),c?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=i}function S(){var e=v();if(j(e))return h(e);f=setTimeout(S,function(e){var n=t-(e-u);return s?m(n,i-(e-l)):n}(e))}function h(e){return f=void 0,p&&r?y(e):(r=o=void 0,a)}function w(){var e=v(),n=j(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return x(u);if(s)return f=setTimeout(S,t),y(u)}return void 0===f&&(f=setTimeout(S,t)),a}return t=g(t)||0,b(n)&&(c=!!n.leading,i=(s="maxWait"in n)?d(g(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=u=o=f=void 0},w.flush=function(){return void 0===f?a:h(v())},w}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};const y={form:document.querySelector(".feedback-form"),email:document.querySelector('.feedback-form input[name="email"]'),textarea:document.querySelector(".feedback-form textarea")},x={};y.form.addEventListener("submit",(function(e){e.preventDefault(),y.email.value&&y.textarea.value?(console.log(x),localStorage.removeItem("feedback-form-state"),y.form.reset()):alert("Please fill in all fields.")})),y.form.addEventListener("input",e(t)((e=>{x[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(x))}),500)),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(y.email.value=e.email,y.textarea.value=e.message)}();
//# sourceMappingURL=03-feedback.e0a87d9a.js.map
