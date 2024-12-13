
## VideoComponent class

This component is used to display a video in the game.

See [VideoComponentData](/reference/videocomponentdata.md) for the data schema used to create a video component

**Signature:**

```typescript
export declare class VideoComponent extends Component3D<VideoComponentData> 
```
**Extends:** [Component3D](/reference/component3d.md)<!-- -->&lt;[VideoComponentData](/reference/videocomponentdata.md)<!-- -->&gt;

## Remarks

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `VideoComponent` class.

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

[autoPlay](/reference/videocomponent/autoplay.md)


</td><td>


</td><td>

boolean


</td><td>

Whether the video should start playing automatically. Defaults to false


</td></tr>
<tr><td>

[curvedAngle](/reference/videocomponent/curvedangle.md)


</td><td>


</td><td>

number


</td><td>

The angle of the curved video. Defaults to 180


</td></tr>
<tr><td>

[displayMode](/reference/videocomponent/displaymode.md)


</td><td>


</td><td>

"flat" \| "curved"


</td><td>

Determine the display mode of the video. Defaults to "flat"


</td></tr>
<tr><td>

[isPlaying](/reference/videocomponent/isplaying.md)


</td><td>

`readonly`


</td><td>

boolean


</td><td>

Returns true if the video is playing


</td></tr>
<tr><td>

[muted](/reference/videocomponent/muted.md)


</td><td>


</td><td>

boolean


</td><td>

Whether the video should be muted. Defaults to false


</td></tr>
<tr><td>

[opacity](/reference/videocomponent/opacity.md)


</td><td>


</td><td>

number


</td><td>

Set the opacity of the video. Defaults to 1


</td></tr>
<tr><td>

[volume](/reference/videocomponent/volume.md)


</td><td>


</td><td>

number


</td><td>

Volume of the audio, from 0 to 1. Defaults to 1


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

[\_getBBoxImp(target)](/reference/videocomponent/_getbboximp.md)


</td><td>

`protected`


</td><td>


</td></tr>
<tr><td>

[dispose()](/reference/videocomponent/dispose.md)


</td><td>

`protected`


</td><td>


</td></tr>
<tr><td>

[init()](/reference/videocomponent/init.md)


</td><td>

`protected`


</td><td>


</td></tr>
<tr><td>

[pause()](/reference/videocomponent/pause.md)


</td><td>


</td><td>

Pause the video


</td></tr>
<tr><td>

[play()](/reference/videocomponent/play.md)


</td><td>


</td><td>

Play the video


</td></tr>
</tbody></table>
