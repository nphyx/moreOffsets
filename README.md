moreOffsets
===========

A jquery plugin providing a bunch of additional offset values for jQuery.offset(), including bottom, right, offsets from window, center (horizontal) and middle (vertical) offsets.

Usage:
```javascript
$('#myElement').offset();
```

Returns:
```javascript
{
	top: (offset of top edge from document top)
	left: (offset of left edge from document left)
	bottom: (offset of bottom edge from document top)
	right: (offset of right edge from document left)
	window: {
		top: (offset of top edge from window top)
		left: (offset of left edge from window left)
		bottom: (offset of bottom edge from window bottom)
		right: (offset of right edge from window right)
	}
	middle: {
		top: (offset of vertical middle from document top)
		bottom: (offset of vertical middle from document bottom)
	}
	center: {
		left: (offset of horizontal center from document left)
		right: (offset of horizontal center from document right)
	}
}
```
