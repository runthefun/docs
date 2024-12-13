
## ModelComponentData interface

Data specification for [ModelComponent](/reference/modelcomponent.md)<!-- -->, see [ComponentManager.create()](/reference/componentmanager/create.md) on how to create a component

**Signature:**

```typescript
export interface ModelComponentData extends Component3DData 
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

[animations?](/reference/modelcomponentdata/animations.md)


</td><td>


</td><td>

Record&lt;string, boolean&gt;


</td><td>

_(Optional)_ An object containing the names of the animations to play at start.


</td></tr>
<tr><td>

[enableAnimation?](/reference/modelcomponentdata/enableanimation.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ Enable the animation system for this model. Defaults to false, works only on model that embeds animations


</td></tr>
<tr><td>

[enableRealTimeShadow?](/reference/modelcomponentdata/enablerealtimeshadow.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ Enable real time shadows for this model. Defaults to false


</td></tr>
<tr><td>

[id?](/reference/modelcomponentdata/id.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ if not provided, an auto id will be generated


</td></tr>
<tr><td>

[name?](/reference/modelcomponentdata/name.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ name for the component. Defaults to ""


</td></tr>
<tr><td>

[opacity?](/reference/modelcomponentdata/opacity.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Set the opacity of the model. Defaults to 1


</td></tr>
<tr><td>

[position?](/reference/modelcomponentdata/position.md)


</td><td>


</td><td>

[XYZ](/reference/xyz.md)


</td><td>

_(Optional)_ Position of the component in the space. Defaults to {<!-- -->x: 0, y: 0, z: 0<!-- -->}


</td></tr>
<tr><td>

[renderMode?](/reference/modelcomponentdata/rendermode.md)


</td><td>


</td><td>

RenderMode


</td><td>

_(Optional)_ Model render mode. Defaults to "default"


</td></tr>
<tr><td>

[rotation?](/reference/modelcomponentdata/rotation.md)


</td><td>


</td><td>

[XYZ](/reference/xyz.md)


</td><td>

_(Optional)_ Rotation of the component in the space. Defaults to {<!-- -->x: 0, y: 0, z: 0<!-- -->}


</td></tr>
<tr><td>

[scale?](/reference/modelcomponentdata/scale.md)


</td><td>


</td><td>

[XYZ](/reference/xyz.md)


</td><td>

_(Optional)_ Scale of the component in the space. Defaults to {<!-- -->x: 1, y: 1, z: 1<!-- -->}


</td></tr>
<tr><td>

[type](/reference/modelcomponentdata/type.md)


</td><td>


</td><td>

"model"


</td><td>


</td></tr>
<tr><td>

[url](/reference/modelcomponentdata/url.md)


</td><td>


</td><td>

string


</td><td>

url of the gltf/glb file


</td></tr>
<tr><td>

[useTransparency?](/reference/modelcomponentdata/usetransparency.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ Use transparency on the model. Defaults to true


</td></tr>
</tbody></table>
