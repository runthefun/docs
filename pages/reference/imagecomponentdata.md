
## ImageComponentData interface

Data specification for [ImageComponent](/reference/imagecomponent.md)<!-- -->, see [ComponentManager.create()](/reference/componentmanager/create.md) on how to create a component

**Signature:**

```typescript
export interface ImageComponentData extends Component3DData 
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

[id?](/reference/imagecomponentdata/id.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ if not provided, an auto id will be generated


</td></tr>
<tr><td>

[magFilter?](/reference/imagecomponentdata/magfilter.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Set the magFilter of the image. Defaults to 'LinearFilter'


</td></tr>
<tr><td>

[minFilter?](/reference/imagecomponentdata/minfilter.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Set the minFilter of the image. Defaults to 'LinearMipmapLinearFilter'


</td></tr>
<tr><td>

[name?](/reference/imagecomponentdata/name.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ name for the component. Defaults to ""


</td></tr>
<tr><td>

[opacity?](/reference/imagecomponentdata/opacity.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Set opacity of the image. Defaults to 1


</td></tr>
<tr><td>

[position?](/reference/imagecomponentdata/position.md)


</td><td>


</td><td>

[XYZ](/reference/xyz.md)


</td><td>

_(Optional)_ Position of the component in the space. Defaults to {<!-- -->x: 0, y: 0, z: 0<!-- -->}


</td></tr>
<tr><td>

[rotation?](/reference/imagecomponentdata/rotation.md)


</td><td>


</td><td>

[XYZ](/reference/xyz.md)


</td><td>

_(Optional)_ Rotation of the component in the space. Defaults to {<!-- -->x: 0, y: 0, z: 0<!-- -->}


</td></tr>
<tr><td>

[scale?](/reference/imagecomponentdata/scale.md)


</td><td>


</td><td>

[XYZ](/reference/xyz.md)


</td><td>

_(Optional)_ Scale of the component in the space. Defaults to {<!-- -->x: 1, y: 1, z: 1<!-- -->}


</td></tr>
<tr><td>

[type](/reference/imagecomponentdata/type.md)


</td><td>


</td><td>

"image"


</td><td>


</td></tr>
<tr><td>

[url](/reference/imagecomponentdata/url.md)


</td><td>


</td><td>

string


</td><td>

url of the image file


</td></tr>
<tr><td>

[useMipMap?](/reference/imagecomponentdata/usemipmap.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ Set if the image should use mipmaps. Defaults to true


</td></tr>
</tbody></table>
