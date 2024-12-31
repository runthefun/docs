
## AudioComponent class

Audio component, used to play audio in the game

See [AudioComponentData](/reference/audiocomponentdata.md) for the data schema used to create an audio component

**Signature:**

```typescript
export declare class AudioComponent extends Component3D<AudioComponentData> 
```
**Extends:** [Component3D](/reference/component3d.md)<!-- -->&lt;[AudioComponentData](/reference/audiocomponentdata.md)<!-- -->&gt;

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

[\_audio](/reference/audiocomponent/_audio.md)


</td><td>


</td><td>

HTMLAudioElement


</td><td>


</td></tr>
<tr><td>

[\_changeCallbacks](/reference/audiocomponent/_changecallbacks.md)


</td><td>

`protected`


</td><td>

{ volume: (value: any) =&gt; void; loop: (value: any) =&gt; void; playbackRate: (value: any) =&gt; void; autoPlay: (value: any) =&gt; void; }


</td><td>


</td></tr>
<tr><td>

[ambient](/reference/audiocomponent/ambient.md)


</td><td>


</td><td>

boolean


</td><td>

weather the audio is used to play a background music. Defaults to false


</td></tr>
<tr><td>

[audio](/reference/audiocomponent/audio.md)


</td><td>

`readonly`


</td><td>

HTMLAudioElement


</td><td>


</td></tr>
<tr><td>

[autoPlay](/reference/audiocomponent/autoplay.md)


</td><td>


</td><td>

boolean


</td><td>


</td></tr>
<tr><td>

[isPlaying](/reference/audiocomponent/isplaying.md)


</td><td>

`readonly`


</td><td>

boolean


</td><td>

Returns true if the audio is playing


</td></tr>
<tr><td>

[loop](/reference/audiocomponent/loop.md)


</td><td>


</td><td>

boolean


</td><td>

Whether the audio should loop. Defaults to false


</td></tr>
<tr><td>

[playbackRate](/reference/audiocomponent/playbackrate.md)


</td><td>


</td><td>

number


</td><td>

audio playback rate. Defaults to 1


</td></tr>
<tr><td>

[volume](/reference/audiocomponent/volume.md)


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

[\_pauseTrigger()](/reference/audiocomponent/_pausetrigger.md)


</td><td>

`protected`


</td><td>


</td></tr>
<tr><td>

[\_playTrigger()](/reference/audiocomponent/_playtrigger.md)


</td><td>

`protected`


</td><td>


</td></tr>
<tr><td>

[dispose()](/reference/audiocomponent/dispose.md)


</td><td>

`protected`


</td><td>


</td></tr>
<tr><td>

[init()](/reference/audiocomponent/init.md)


</td><td>

`protected`


</td><td>


</td></tr>
<tr><td>

[pause()](/reference/audiocomponent/pause.md)


</td><td>


</td><td>

pause the audio


</td></tr>
<tr><td>

[play()](/reference/audiocomponent/play.md)


</td><td>


</td><td>

play the audio


</td></tr>
<tr><td>

[stop()](/reference/audiocomponent/stop.md)


</td><td>


</td><td>

stop the audio, this will reset the audio to the beginning


</td></tr>
</tbody></table>
