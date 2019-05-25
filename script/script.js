!function(t,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof module&&module.exports?module.exports=e():t.ScrollTrigger=e()}(this,function(){"use strict";return function(t,e,n){function i(){var t=u.scrollElement.innerWidth,e=u.scrollElement.innerHeight,n=u.bindElement.scrollTop?u.bindElement.scrollTop:document.documentElement.scrollTop,l=u.bindElement.scrollLeft?u.bindElement.scrollLeft:document.documentElement.scrollLeft;a.left==l&&a.top==n||(o.forEach(function(i,r){var c=i.left(),f=i.top();a.left>l?c-=i.xOffset(!0):a.left<l&&(c+=i.xOffset(!1)),a.top>n?f-=i.yOffset(!0):a.top<n&&(f+=i.yOffset(!1)),t>c&&c>=0&&e>f&&f>=0?(i.addClass(i.visibleClass,function(){i.showCallback&&s(i,i.showCallback)}),i.removeClass(i.hiddenClass),i.once&&o.splice(r,1)):(i.addClass(i.hiddenClass),i.removeClass(i.visibleClass,function(){i.hideCallback&&s(i,i.hideCallback)}))}),r.forEach(function(i){i.call(u,l,n,t,e)}),a.left=l,a.top=n),o.length>0||r.length>0?(f=!0,c(i)):f=!1}function s(t,e){var n=e.split("("),i=n[0];n=n.length>1?n[1].split(")")[0]:void 0,window[i]&&window[i].call(t.element,n)}var l=function(t,e){this.element=e,this.defaultOptions=t,this.showCallback=null,this.hideCallback=null,this.visibleClass="visible",this.hiddenClass="invisible",this.addWidth=!1,this.addHeight=!1,this.once=!1;var n=0,i=0;this.left=function(t){return function(){return t.element.getBoundingClientRect().left}}(this),this.top=function(t){return function(){return t.element.getBoundingClientRect().top}}(this),this.xOffset=function(t){return function(e){var i=n;return t.addWidth&&!e?i+=t.width():e&&!t.addWidth&&(i-=t.width()),i}}(this),this.yOffset=function(t){return function(e){var n=i;return t.addHeight&&!e?n+=t.height():e&&!t.addHeight&&(n-=t.height()),n}}(this),this.width=function(t){return function(){return t.element.offsetWidth}}(this),this.height=function(t){return function(){return t.element.offsetHeight}}(this),this.reset=function(t){return function(){t.removeClass(t.visibleClass),t.removeClass(t.hiddenClass)}}(this),this.addClass=function(t){var e=function(e,n){t.element.classList.contains(e)||(t.element.classList.add(e),"function"==typeof n&&n())},n=function(e,n){e=e.trim();var i=new RegExp("(?:^|\\s)"+e+"(?:(\\s\\w)|$)","ig"),s=t.element.className;i.test(s)||(t.element.className+=" "+e,"function"==typeof n&&n())};return t.element.classList?e:n}(this),this.removeClass=function(t){var e=function(e,n){t.element.classList.contains(e)&&(t.element.classList.remove(e),"function"==typeof n&&n())},n=function(e,n){e=e.trim();var i=new RegExp("(?:^|\\s)"+e+"(?:(\\s\\w)|$)","ig"),s=t.element.className;i.test(s)&&(t.element.className=s.replace(i,"$1").trim(),"function"==typeof n&&n())};return t.element.classList?e:n}(this),this.init=function(t){return function(){var e=t.defaultOptions,s=t.element.getAttribute("data-scroll");e&&(e.toggle&&e.toggle.visible&&(t.visibleClass=e.toggle.visible),e.toggle&&e.toggle.hidden&&(t.hiddenClass=e.toggle.hidden),e.centerHorizontal===!0&&(n=t.element.offsetWidth/2),e.centerVertical===!0&&(i=t.element.offsetHeight/2),e.offset&&e.offset.x&&(n+=e.offset.x),e.offset&&e.offset.y&&(i+=e.offset.y),e.addWidth&&(t.addWidth=e.addWidth),e.addHeight&&(t.addHeight=e.addHeight),e.once&&(t.once=e.once));var l=s.indexOf("addWidth")>-1,o=s.indexOf("addHeight")>-1,r=s.indexOf("once")>-1;t.addWidth===!1&&l===!0&&(t.addWidth=l),t.addHeight===!1&&o===!0&&(t.addHeight=o),t.once===!1&&r===!0&&(t.once=r),t.showCallback=t.element.getAttribute("data-scroll-showCallback"),t.hideCallback=t.element.getAttribute("data-scroll-hideCallback");var a=s.split("toggle(");if(a.length>1){var c=a[1].split(")")[0].split(",");String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}),t.visibleClass=c[0].trim().replace(".",""),t.hiddenClass=c[1].trim().replace(".","")}s.indexOf("centerHorizontal")>-1&&(n=t.element.offsetWidth/2),s.indexOf("centerVertical")>-1&&(i=t.element.offsetHeight/2);var f=s.split("offset(");if(f.length>1){var d=f[1].split(")")[0].split(",");n+=parseInt(d[0].replace("px","")),i+=parseInt(d[1].replace("px",""))}return t}}(this)};this.scrollElement=window,this.bindElement=document.body;var o=[],r=[],a={left:-1,top:-1},c=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){setTimeout(t,1e3/60)},f=!1,d=function(t){return function(e,n,i){return void 0!=n&&null!=n?t.bindElement=n:t.bindElement=document.body,void 0!=i&&null!=i?t.scrollElement=i:t.scrollElement=window,t.bind(t.bindElement.querySelectorAll("[data-scroll]")),t}}(this);this.bind=function(e){return function(n){n instanceof HTMLElement&&(n=[n]);var s=[].slice.call(n);return s=s.map(function(e){var n=new l(t,e);return n.init()}),o=o.concat(s),o.length>0&&0==f?(f=!0,i()):f=!1,e}}(this),this.triggerFor=function(){return function(t){var e=null;return o.forEach(function(n){n.element==t&&(e=n)}),e}}(this),this.destroy=function(t){return function(e){return o.forEach(function(t,n){t.element==e&&o.splice(n,1)}),t}}(this),this.destroyAll=function(t){return function(){return o=[],t}}(this),this.reset=function(t){return function(e){var n=t.triggerFor(e);if(null!=n){n.reset();var i=o.indexOf(n);i>-1&&o.splice(i,1)}return t}}(this),this.resetAll=function(t){return function(){return o.forEach(function(t){t.reset()}),o=[],t}}(this),this.attach=function(t){return function(e){return r.push(e),f||(f=!0,i()),t}}(this),this.detach=function(t){return function(e){var n=r.indexOf(e);return n>-1&&r.splice(n,1),t}}(this);var u=this;return d(t,e,n)}});

window.counter = function() {
	var span = this.querySelector('span');
	var current = parseInt(span.textContent);

	span.textContent = current + 1;
};

document.addEventListener('DOMContentLoaded', function(){
  var trigger = new ScrollTrigger({
	  addHeight: true
  });
});


(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(["jquery"], function (a0) {
      return (factory(a0));
    });
  } else if (typeof exports === 'object') {
    module.exports = factory(require("jquery"));
  } else {
    factory(jQuery);
  }
}(this, function ($) {


var CanvasRenderer = function(el, options) {
	var cachedBackground;
	var canvas = document.createElement('canvas');

	el.appendChild(canvas);

	if (typeof(G_vmlCanvasManager) === 'object') {
		G_vmlCanvasManager.initElement(canvas);
	}

	var ctx = canvas.getContext('2d');

	canvas.width = canvas.height = options.size;

	var scaleBy = 1;
	if (window.devicePixelRatio > 1) {
		scaleBy = window.devicePixelRatio;
		canvas.style.width = canvas.style.height = [options.size, 'px'].join('');
		canvas.width = canvas.height = options.size * scaleBy;
		ctx.scale(scaleBy, scaleBy);
	}

	ctx.translate(options.size / 2, options.size / 2);

	ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI);

	var radius = (options.size - options.lineWidth) / 2;
	if (options.scaleColor && options.scaleLength) {
		radius -= options.scaleLength + 2; 
	}

	Date.now = Date.now || function() {
		return +(new Date());
	};

	
	var drawCircle = function(color, lineWidth, percent) {
		percent = Math.min(Math.max(-1, percent || 0), 1);
		var isNegative = percent <= 0 ? true : false;

		ctx.beginPath();
		ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, isNegative);

		ctx.strokeStyle = color;
		ctx.lineWidth = lineWidth;

		ctx.stroke();
	};

	
	var drawScale = function() {
		var offset;
		var length;

		ctx.lineWidth = 1;
		ctx.fillStyle = options.scaleColor;

		ctx.save();
		for (var i = 24; i > 0; --i) {
			if (i % 6 === 0) {
				length = options.scaleLength;
				offset = 0;
			} else {
				length = options.scaleLength * 0.6;
				offset = options.scaleLength - length;
			}
			ctx.fillRect(-options.size/2 + offset, 0, length, 1);
			ctx.rotate(Math.PI / 12);
		}
		ctx.restore();
	};

	
	var reqAnimationFrame = (function() {
		return  window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				function(callback) {
					window.setTimeout(callback, 1000 / 60);
				};
	}());

	var drawBackground = function() {
		if(options.scaleColor) drawScale();
		if(options.trackColor) drawCircle(options.trackColor, options.trackWidth || options.lineWidth, 1);
	};

  getCanvas = function() {
    return canvas;
  };

  
  this.getCtx = function() {
    return ctx;
  };


	this.clear = function() {
		ctx.clearRect(options.size / -2, options.size / -2, options.size, options.size);
	};


	this.draw = function(percent) {
		if (!!options.scaleColor || !!options.trackColor) {
			if (ctx.getImageData && ctx.putImageData) {
				if (!cachedBackground) {
					drawBackground();
					cachedBackground = ctx.getImageData(0, 0, options.size * scaleBy, options.size * scaleBy);
				} else {
					ctx.putImageData(cachedBackground, 0, 0);
				}
			} else {
				this.clear();
				drawBackground();
			}
		} else {
			this.clear();
		}

		ctx.lineCap = options.lineCap;

		var color;
		if (typeof(options.barColor) === 'function') {
			color = options.barColor(percent);
		} else {
			color = options.barColor;
		}

		drawCircle(color, options.lineWidth, percent / 100);
	}.bind(this);

	this.animate = function(from, to) {
		var startTime = Date.now();
		options.onStart(from, to);
		var animation = function() {
			var process = Math.min(Date.now() - startTime, options.animate.duration);
			var currentValue = options.easing(this, process, from, to - from, options.animate.duration);
			this.draw(currentValue);
			options.onStep(from, to, currentValue);
			if (process >= options.animate.duration) {
				options.onStop(from, to);
			} else {
				reqAnimationFrame(animation);
			}
		}.bind(this);

		reqAnimationFrame(animation);
	}.bind(this);
};

var EasyPieChart = function(el, opts) {
	var defaultOptions = {
		barColor: '#ef1e25',
		trackColor: '#f9f9f9',
		scaleColor: '#dfe0e0',
		scaleLength: 5,
		lineCap: 'round',
		lineWidth: 3,
		trackWidth: undefined,
		size: 130,
		rotate: 0,
		animate: {
			duration: 1000,
			enabled: true
		},
		easing: function (x, t, b, c, d) { 
			t = t / (d/2);
			if (t < 1) {
				return c / 2 * t * t + b;
			}
			return -c/2 * ((--t)*(t-2) - 1) + b;
		},
		onStart: function(from, to) {
			return;
		},
		onStep: function(from, to, currentValue) {
			return;
		},
		onStop: function(from, to) {
			return;
		}
	};

	if (typeof(CanvasRenderer) !== 'undefined') {
		defaultOptions.renderer = CanvasRenderer;
	} else if (typeof(SVGRenderer) !== 'undefined') {
		defaultOptions.renderer = SVGRenderer;
	} else {
		throw new Error('Please load either the SVG- or the CanvasRenderer');
	}

	var options = {};
	var currentValue = 0;

	var init = function() {
		this.el = el;
		this.options = options;

		for (var i in defaultOptions) {
			if (defaultOptions.hasOwnProperty(i)) {
				options[i] = opts && typeof(opts[i]) !== 'undefined' ? opts[i] : defaultOptions[i];
				if (typeof(options[i]) === 'function') {
					options[i] = options[i].bind(this);
				}
			}
		}

		if (typeof(options.easing) === 'string' && typeof(jQuery) !== 'undefined' && jQuery.isFunction(jQuery.easing[options.easing])) {
			options.easing = jQuery.easing[options.easing];
		} else {
			options.easing = defaultOptions.easing;
		}

		if (typeof(options.animate) === 'number') {
			options.animate = {
				duration: options.animate,
				enabled: true
			};
		}

		if (typeof(options.animate) === 'boolean' && !options.animate) {
			options.animate = {
				duration: 1000,
				enabled: options.animate
			};
		}

		this.renderer = new options.renderer(el, options);

		this.renderer.draw(currentValue);

		if (el.dataset && el.dataset.percent) {
			this.update(parseFloat(el.dataset.percent));
		} else if (el.getAttribute && el.getAttribute('data-percent')) {
			this.update(parseFloat(el.getAttribute('data-percent')));
		}
	}.bind(this);

	this.update = function(newValue) {
		newValue = parseFloat(newValue);
		if (options.animate.enabled) {
			this.renderer.animate(currentValue, newValue);
		} else {
			this.renderer.draw(newValue);
		}
		currentValue = newValue;
		return this;
	}.bind(this);

	this.disableAnimation = function() {
		options.animate.enabled = false;
		return this;
	};

	this.enableAnimation = function() {
		options.animate.enabled = true;
		return this;
	};

	init();
};

$.fn.easyPieChart = function(options) {
	return this.each(function() {
		var instanceOptions;

		if (!$.data(this, 'easyPieChart')) {
			instanceOptions = $.extend({}, options, $(this).data());
			$.data(this, 'easyPieChart', new EasyPieChart(this, instanceOptions));
		}
	});
};




}));