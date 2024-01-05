# Combinators

Combinators, on the other hand, are specific symbols used to define relationships between selectors. They include the space (descendant selector), > (child selector), + (adjacent sibling selector), and ~ (general sibling selector).

### 1. Descendant Selector (Space):

The descendant selector selects all elements that are descendants(പിൻഗാമികൾ) of a specified element.

**Example:**
```css
/* Selects all <li> elements that are descendants of <ul> */
ul li {
  list-style-type: square;
}
```

In this example, any `<li>` element that is a descendant of a `<ul>` will have a square list style.

### 2. Child Selector (>):

The child selector selects all elements that are a direct child of a specified element.

**Example:**
```css
/* Selects all <li> elements that are direct children of <ul> */
ul > li {
  font-weight: bold;
}
```

This style targets only `<li>` elements that are direct children of a `<ul>`.

### 3. Adjacent(തൊട്ടടുത്തുള്ള) Sibling Selector (+):

The adjacent sibling selector selects an element that is immediately preceded by a specified element.

**Example:**
```css
/* Selects the <p> immediately following any <h2> */
h2 + p {
  color: blue;
}
```

In this case, the style is applied to `<p>` elements that directly follow `<h2>` elements.

### 4. General Sibling Selector (~):

The general sibling selector selects all elements that are siblings of a specified element.

**Example:**
```css
/* Selects all <p> elements that are siblings of <h2> */
h2 ~ p {
  margin-top: 10px;
}
```

This rule applies to all `<p>` elements that share the same parent as `<h2>` and come after it.

These combinators provide flexibility in targeting specific elements based on their relationship in the HTML document. By using these selectors, you can create more targeted and nuanced styles for different parts of your webpage.



# Combined Selectors


"Combined selectors" typically refer to grouping multiple selectors together to apply the same styles to all the selected elements. This is done by separating the selectors with a comma. Let me provide an example to illustrate this:

```css
/* Apply the same styles to all paragraphs and all list items */
p, li {
  color: #333;
  font-size: 16px;
}
```

In this example, the styles specified within the curly braces will be applied to both `<p>` (paragraph) elements and `<li>` (list item) elements. This method allows you to avoid duplicating styles for different selectors when they share common styles.

You can also combine multiple selectors for more specific rules. For instance:

```css
/* Apply different styles to paragraphs inside a div and list items */
div p, ul li {
  font-weight: bold;
}
```

In this case, the styles inside the curly braces will apply to paragraphs that are descendants of a `<div>` and list items (`<li>`) that are descendants of a `<ul>`. Combining selectors can be a powerful way to efficiently manage your styles.