## Positions

1. Static
2. Relative
3. Absolute
4. Fixed
5. Sticky

Explanation

1. Static position

   HTML elements are positioned static by default.
   Static positioned elements are not affected by the top, bottom, left, and right properties.
   An element with position: static; is not positioned in any special way; it is always positioned according
   to the normal flow of the page

2. Relative position

   - An element with position: relative; is positioned relative to its normal position.
     Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to
     be adjusted away from its normal position. Other content will not be adjusted to fit into any gap
     left by the elemen

   - If we adjust top, right, bottom and left then sOriginal Position will be blank 

3. Absolute Position
   An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of
   positioned relative to the viewport, like fixed).
   However; if an absolute positioned element has no positioned ancestors (parent divs), it uses the document body, and moves
   along with page scrolling.
   Note: A "positioned" element is one whose position is anything except static.

4. Fixed Position
   An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same
   place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.
   A fixed element does not leave a gap in the page where it would normally have been located.
