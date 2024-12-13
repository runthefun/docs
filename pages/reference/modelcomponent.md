
## ModelComponent class

Model component, used to display gltf 3D models in the game (.gltf, .glb)

See [ModelComponentData](/reference/modelcomponentdata.md) for the data schema used to create a model component

**Signature:**

```typescript
export declare class ModelComponent extends Component3D<ModelComponentData> 
```
**Extends:** [Component3D](/reference/component3d.md)<!-- -->&lt;[ModelComponentData](/reference/modelcomponentdata.md)<!-- -->&gt;

## Remarks

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `ModelComponent` class.

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

[enableAnimation](/reference/modelcomponent/enableanimation.md)


</td><td>


</td><td>

boolean


</td><td>

Enable the animation system for this model. Defaults to false, works only on model that embeds animations


</td></tr>
<tr><td>

[mixer](/reference/modelcomponent/mixer.md)


</td><td>

`readonly`


</td><td>

any


</td><td>


</td></tr>
<tr><td>

[opacity](/reference/modelcomponent/opacity.md)


</td><td>


</td><td>

number


</td><td>

Set the opacity of the model. Defaults to 1


</td></tr>
<tr><td>

[renderMode](/reference/modelcomponent/rendermode.md)


</td><td>


</td><td>

RenderMode


</td><td>

Model render mode. Defaults to "default"


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

[dispose()](/reference/modelcomponent/dispose.md)


</td><td>

`protected`


</td><td>


</td></tr>
<tr><td>

[getAnimationData()](/reference/modelcomponent/getanimationdata.md)


</td><td>


</td><td>

Get the animation data of the 3D model


</td></tr>
<tr><td>

[init()](/reference/modelcomponent/init.md)


</td><td>

`protected`


</td><td>


</td></tr>
<tr><td>

[play(name, opts)](/reference/modelcomponent/play.md)


</td><td>


</td><td>

Play an animation on the 3D model. This applies only to animated gltf models containing animations.


</td></tr>
<tr><td>

[setAnimationAtTime(animation, val)](/reference/modelcomponent/setanimationattime.md)


</td><td>


</td><td>

Set the time of an animation on the 3D model


</td></tr>
<tr><td>

[stop(name)](/reference/modelcomponent/stop.md)


</td><td>


</td><td>

Stop an animation on the 3D model


</td></tr>
<tr><td>

[stopAll()](/reference/modelcomponent/stopall.md)


</td><td>


</td><td>

Stop all animations on the 3D model


</td></tr>
</tbody></table>
