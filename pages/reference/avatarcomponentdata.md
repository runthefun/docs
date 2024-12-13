
## AvatarComponentData interface

Data specification for [AvatarComponent](/reference/avatarcomponent.md)<!-- -->, see [ComponentManager.create()](/reference/componentmanager/create.md) on how to create a component

**Signature:**

```typescript
export interface AvatarComponentData extends Component3DData 
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

[animation?](/reference/avatarcomponentdata/animation.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ animation to play on the avatar by default when it loads.


</td></tr>
<tr><td>

[id?](/reference/avatarcomponentdata/id.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ if not provided, an auto id will be generated


</td></tr>
<tr><td>

[ignoreLOD?](/reference/avatarcomponentdata/ignorelod.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ Do not use LOD optimization


</td></tr>
<tr><td>

[image?](/reference/avatarcomponentdata/image.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ image of the avatar.


</td></tr>
<tr><td>

[name?](/reference/avatarcomponentdata/name.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ name for the component. Defaults to ""


</td></tr>
<tr><td>

[opacity](/reference/avatarcomponentdata/opacity.md)


</td><td>


</td><td>

number


</td><td>

Set the opacity of the avatar default is 1


</td></tr>
<tr><td>

[picture?](/reference/avatarcomponentdata/picture.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ url of a picture to display on top the avatar.


</td></tr>
<tr><td>

[plugins?](/reference/avatarcomponentdata/plugins.md)


</td><td>


</td><td>

\[\]


</td><td>

_(Optional)_ Plugins to use with the avatar. Defaults to \[\]


</td></tr>
<tr><td>

[position?](/reference/avatarcomponentdata/position.md)


</td><td>


</td><td>

[XYZ](/reference/xyz.md)


</td><td>

_(Optional)_ Position of the component in the space. Defaults to {<!-- -->x: 0, y: 0, z: 0<!-- -->}


</td></tr>
<tr><td>

[renderMode?](/reference/avatarcomponentdata/rendermode.md)


</td><td>


</td><td>

RenderMode


</td><td>

_(Optional)_ Model render mode. Defaults to "default"


</td></tr>
<tr><td>

[rotation?](/reference/avatarcomponentdata/rotation.md)


</td><td>


</td><td>

[XYZ](/reference/xyz.md)


</td><td>

_(Optional)_ Rotation of the component in the space. Defaults to {<!-- -->x: 0, y: 0, z: 0<!-- -->}


</td></tr>
<tr><td>

[scale?](/reference/avatarcomponentdata/scale.md)


</td><td>


</td><td>

[XYZ](/reference/xyz.md)


</td><td>

_(Optional)_ Scale of the component in the space. Defaults to {<!-- -->x: 1, y: 1, z: 1<!-- -->}


</td></tr>
<tr><td>

[text?](/reference/avatarcomponentdata/text.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ text to display on top the avatar. Defaults to "".


</td></tr>
<tr><td>

[type](/reference/avatarcomponentdata/type.md)


</td><td>


</td><td>

"avatar"


</td><td>


</td></tr>
<tr><td>

[url](/reference/avatarcomponentdata/url.md)


</td><td>


</td><td>

string


</td><td>

url of the vrm file


</td></tr>
<tr><td>

[urlCompressed?](/reference/avatarcomponentdata/urlcompressed.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ url of the vrm file


</td></tr>
<tr><td>

[useMixer?](/reference/avatarcomponentdata/usemixer.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ Use CPU Animation


</td></tr>
</tbody></table>
