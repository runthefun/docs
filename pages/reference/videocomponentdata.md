
## VideoComponentData interface

Data specification for [VideoComponent](/reference/videocomponent.md)<!-- -->, see [ComponentManager.create()](/reference/componentmanager/create.md) on how to create a component

**Signature:**

```typescript
export interface VideoComponentData extends Component3DData 
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

[autoPlay](/reference/videocomponentdata/autoplay.md)


</td><td>


</td><td>

false


</td><td>

Whether the video should start playing automatically. Defaults to false


</td></tr>
<tr><td>

[curvedAngle](/reference/videocomponentdata/curvedangle.md)


</td><td>


</td><td>

number


</td><td>

The angle of the curved video. Defaults to 180


</td></tr>
<tr><td>

[displayMode](/reference/videocomponentdata/displaymode.md)


</td><td>


</td><td>

"flat" \| "curved"


</td><td>

Determine the display mode of the video. Defaults to "flat"


</td></tr>
<tr><td>

[id?](/reference/videocomponentdata/id.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ if not provided, an auto id will be generated


</td></tr>
<tr><td>

[name?](/reference/videocomponentdata/name.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ name for the component. Defaults to ""


</td></tr>
<tr><td>

[opacity](/reference/videocomponentdata/opacity.md)


</td><td>


</td><td>

number


</td><td>

Set the opacity of the video. Defaults to 1


</td></tr>
<tr><td>

[position?](/reference/videocomponentdata/position.md)


</td><td>


</td><td>

[XYZ](/reference/xyz.md)


</td><td>

_(Optional)_ Position of the component in the space. Defaults to {<!-- -->x: 0, y: 0, z: 0<!-- -->}


</td></tr>
<tr><td>

[preview?](/reference/videocomponentdata/preview.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ url of the preview image to show when the video is not playing


</td></tr>
<tr><td>

[rotation?](/reference/videocomponentdata/rotation.md)


</td><td>


</td><td>

[XYZ](/reference/xyz.md)


</td><td>

_(Optional)_ Rotation of the component in the space. Defaults to {<!-- -->x: 0, y: 0, z: 0<!-- -->}


</td></tr>
<tr><td>

[scale?](/reference/videocomponentdata/scale.md)


</td><td>


</td><td>

[XYZ](/reference/xyz.md)


</td><td>

_(Optional)_ Scale of the component in the space. Defaults to {<!-- -->x: 1, y: 1, z: 1<!-- -->}


</td></tr>
<tr><td>

[type](/reference/videocomponentdata/type.md)


</td><td>


</td><td>

"video"


</td><td>


</td></tr>
<tr><td>

[url](/reference/videocomponentdata/url.md)


</td><td>


</td><td>

string


</td><td>

url of the video file


</td></tr>
<tr><td>

[volume?](/reference/videocomponentdata/volume.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Volume of the audio, from 0 to 1. Defaults to 1


</td></tr>
</tbody></table>
