
## TextComponent class

Text component, used to display text in the game.

See [TextComponentData](/reference/textcomponentdata.md) for the data schema used to create a text component

**Signature:**

```typescript
export declare class TextComponent extends Component3D<TextComponentData> 
```
**Extends:** [Component3D](/reference/component3d.md)<!-- -->&lt;[TextComponentData](/reference/textcomponentdata.md)<!-- -->&gt;

## Properties

<table><thead><tr><th>

Property


</th><th>

Modifiers


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[align](/reference/textcomponent/align.md)


</td><td>


</td><td>

TextAlignment


</td><td>

How text should be aligned. Defaults to "left"


</td></tr>
<tr><td>

[font](/reference/textcomponent/font.md)


</td><td>


</td><td>

FontFamily


</td><td>

Font to use


</td></tr>
<tr><td>

[lineHeight](/reference/textcomponent/lineheight.md)


</td><td>


</td><td>

number


</td><td>

Line height of the text. Defaults to 60


</td></tr>
<tr><td>

[opacity](/reference/textcomponent/opacity.md)


</td><td>


</td><td>

number


</td><td>

Opacity of the text. Defaults to 1


</td></tr>
<tr><td>

[text](/reference/textcomponent/text.md)


</td><td>


</td><td>

string


</td><td>

Text to display


</td></tr>
<tr><td>

[textColor](/reference/textcomponent/textcolor.md)


</td><td>


</td><td>

string


</td><td>

Color of the text. Defaults to "\#ffffff"


</td></tr>
<tr><td>

[textTransform](/reference/textcomponent/texttransform.md)


</td><td>


</td><td>

string


</td><td>

Optional transform to apply to the text. Defaults to "none"


</td></tr>
<tr><td>

[width](/reference/textcomponent/width.md)


</td><td>


</td><td>

number


</td><td>

Width of the text box. Defaults to 500. Use this to avoid breaking a long into multiple lines


</td></tr>
</tbody></table>

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[dispose()](/reference/textcomponent/dispose.md)


</td><td>

`protected`


</td><td>


</td></tr>
<tr><td>

[init()](/reference/textcomponent/init.md)


</td><td>

`protected`


</td><td>


</td></tr>
</tbody></table>
