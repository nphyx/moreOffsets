/**
 * jQuery.moreOffsets
 *
 * Author: Justen Robertson <justen@justen.us>
 * GitHub: https://github.com/nphyx/moreOffsets
 * License: Public Domain (unlicensed)
 *
 * A jquery plugin providing a bunch of additional offset values for jQuery.offset(), including bottom, right, offsets from window, center (horizontal) and middle (vertical) offsets. 
 */
(function($) {
	var _oldOffset = $.fn.offset;
	$.fn.offset = function() {
		offsets = _oldOffset.apply(this, arguments);
		// Only do the rest if the function was called as a getter rather than a setter.
		if(!arguments.length) {
			var height = this.outerHeight();
			var width = this.outerWidth();
			var win = $(window);

			offsets.bottom = height + offsets.top;
			offsets.right = width + offsets.left;

			offsets.window = {};
			offsets.window.top = offsets.top - win.scrollTop();
			offsets.window.bottom = win.outerHeight() + win.scrollTop() - offsets.bottom;
			offsets.window.left = offsets.left - win.scrollLeft();
			offsets.window.right = win.outerWidth() + win.scrollLeft() - offsets.right;

			offsets.middle = {};
			offsets.middle.top = height/2 + offsets.top;
			offsets.middle.bottom = offsets.bottom - height/2;
			offsets.window.middle = {};
			offsets.window.middle.top = height/2 + offsets.window.top;
			offsets.window.middle.bottom = offsets.window.bottom - height/2;

			offsets.center = {};
			offsets.center.left = width/2 + offsets.left;
			offsets.center.right = offsets.right - width/2;
			offsets.window.center = {};
			offsets.window.center.left = width/2 + offsets.window.left;
			offsets.window.center.right = offsets.window.right - width/2;
		}
		return offsets;
	}
}(jQuery));
