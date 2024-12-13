
## AudioComponentData interface

Data for the [AudioComponent](/reference/audiocomponent.md)<!-- -->, see [ComponentManager.create()](/reference/componentmanager/create.md) on how to create a component

**Signature:**

```typescript
export interface AudioComponentData extends Component3DData 
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

[ambient?](/reference/audiocomponentdata/ambient.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ weather the audio is used to play a background music. Defaults to false


</td></tr>
<tr><td>

[autoPlay](/reference/audiocomponentdata/autoplay.md)


</td><td>


</td><td>

false


</td><td>

Whether the audio should start playing automatically. Defaults to false


</td></tr>
<tr><td>

[id?](/reference/audiocomponentdata/id.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ if not provided, an auto id will be generated


</td></tr>
<tr><td>

[loop](/reference/audiocomponentdata/loop.md)


</td><td>


</td><td>

false


</td><td>

Whether the audio should loop. Defaults to false


</td></tr>
<tr><td>

[name?](/reference/audiocomponentdata/name.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ name for the component. Defaults to ""


</td></tr>
<tr><td>

[playbackRate?](/reference/audiocomponentdata/playbackrate.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ audio playback rate. Defaults to 1


</td></tr>
<tr><td>

[position?](/reference/audiocomponentdata/position.md)


</td><td>


</td><td>

[XYZ](/reference/xyz.md)


</td><td>

_(Optional)_ Position of the audio in the space. Defaults to {<!-- -->x: 0, y: 0, z: 0<!-- -->}


</td></tr>
<tr><td>

[rotation?](/reference/audiocomponentdata/rotation.md)


</td><td>


</td><td>

[XYZ](/reference/xyz.md)


</td><td>

_(Optional)_ Rotation of the audio in the space. Defaults to {<!-- -->x: 0, y: 0, z: 0<!-- -->}


</td></tr>
<tr><td>

[scale?](/reference/audiocomponentdata/scale.md)


</td><td>


</td><td>

[XYZ](/reference/xyz.md)


</td><td>

_(Optional)_ Scale of the audio in the space. Defaults to {<!-- -->x: 1, y: 1, z: 1<!-- -->}


</td></tr>
<tr><td>

[type](/reference/audiocomponentdata/type.md)


</td><td>


</td><td>

"audio"


</td><td>

Type of the component


</td></tr>
<tr><td>

[url](/reference/audiocomponentdata/url.md)


</td><td>


</td><td>

string


</td><td>

url of the audio file


</td></tr>
<tr><td>

[volume?](/reference/audiocomponentdata/volume.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Volume of the audio, from 0 to 1. Defaults to 1


</td></tr>
</tbody></table>
