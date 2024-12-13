
## TextComponentData interface

Data specification for [TextComponent](/reference/textcomponent.md)<!-- -->, see [ComponentManager.create()](/reference/componentmanager/create.md) on how to create a component

**Signature:**

```typescript
export interface TextComponentData extends Component3DData 
```
**Extends:** [Component3DData](/reference/component3ddata.md)

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

[align?](/reference/textcomponentdata/align.md)


</td><td>


</td><td>

TextAlignment


</td><td>

_(Optional)_ How text should be aligned. Defaults to "left"


</td></tr>
<tr><td>

[font?](/reference/textcomponentdata/font.md)


</td><td>


</td><td>

FontFamily


</td><td>

_(Optional)_ Font to use


</td></tr>
<tr><td>

[id?](/reference/textcomponentdata/id.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ if not provided, an auto id will be generated


</td></tr>
<tr><td>

[instanced?](/reference/textcomponentdata/instanced.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ Whether the text should use instancing. Defaults to false


</td></tr>
<tr><td>

[instancedBillBoard?](/reference/textcomponentdata/instancedbillboard.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ Whether the text should use billboardind when instanced. Defaults to true


</td></tr>
<tr><td>

[lineHeight?](/reference/textcomponentdata/lineheight.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Line height of the text. Defaults to 60


</td></tr>
<tr><td>

[name?](/reference/textcomponentdata/name.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ name for the component. Defaults to ""


</td></tr>
<tr><td>

[opacity?](/reference/textcomponentdata/opacity.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Opacity of the text. Defaults to 1


</td></tr>
<tr><td>

[position?](/reference/textcomponentdata/position.md)


</td><td>


</td><td>

[XYZ](/reference/xyz.md)


</td><td>

_(Optional)_ Position of the component in the space. Defaults to {<!-- -->x: 0, y: 0, z: 0<!-- -->}


</td></tr>
<tr><td>

[rotation?](/reference/textcomponentdata/rotation.md)


</td><td>


</td><td>

[XYZ](/reference/xyz.md)


</td><td>

_(Optional)_ Rotation of the component in the space. Defaults to {<!-- -->x: 0, y: 0, z: 0<!-- -->}


</td></tr>
<tr><td>

[scale?](/reference/textcomponentdata/scale.md)


</td><td>


</td><td>

[XYZ](/reference/xyz.md)


</td><td>

_(Optional)_ Scale of the component in the space. Defaults to {<!-- -->x: 1, y: 1, z: 1<!-- -->}


</td></tr>
<tr><td>

[text](/reference/textcomponentdata/text.md)


</td><td>


</td><td>

string


</td><td>

Text to display


</td></tr>
<tr><td>

[textColor?](/reference/textcomponentdata/textcolor.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Color of the text. Defaults to "\#ffffff"


</td></tr>
<tr><td>

[textTransform?](/reference/textcomponentdata/texttransform.md)


</td><td>


</td><td>

TextTransform


</td><td>

_(Optional)_ Optional transform to apply to the text. Defaults to "none"


</td></tr>
<tr><td>

[type](/reference/textcomponentdata/type.md)


</td><td>


</td><td>

"text"


</td><td>


</td></tr>
<tr><td>

[width?](/reference/textcomponentdata/width.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Width of the text box. Defaults to 500. Use this to avoid breaking a long into multiple lines


</td></tr>
</tbody></table>
