
## AvatarComponent class

Avatar component, used to display VRM avatars in the game (for more info on VRM files, see [VRM site](https://vrm.dev/en/vrm/vrm_about/)<!-- -->)

See [AvatarComponentData](/reference/avatarcomponentdata.md) for the data schema used to create an audio component

**Signature:**

```typescript
export declare class AvatarComponent extends Component3D<AvatarComponentData> 
```
**Extends:** [Component3D](/reference/component3d.md)<!-- -->&lt;[AvatarComponentData](/reference/avatarcomponentdata.md)<!-- -->&gt;

## Remarks

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `AvatarComponent` class.

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

[\_plugins](/reference/avatarcomponent/_plugins.md)


</td><td>


</td><td>

any


</td><td>


</td></tr>
<tr><td>

[\_renderMode](/reference/avatarcomponent/_rendermode.md)


</td><td>


</td><td>

any


</td><td>


</td></tr>
<tr><td>

[activeAnimations](/reference/avatarcomponent/activeanimations.md)


</td><td>

`readonly`


</td><td>

{}


</td><td>


</td></tr>
<tr><td>

[animation](/reference/avatarcomponent/animation.md)


</td><td>


</td><td>

string


</td><td>

animation to play on the avatar by default when it loads.


</td></tr>
<tr><td>

[avatarScale](/reference/avatarcomponent/avatarscale.md)


</td><td>


</td><td>

number


</td><td>

get the scale of the avatar vrm


</td></tr>
<tr><td>

[ignoreLOD](/reference/avatarcomponent/ignorelod.md)


</td><td>


</td><td>

boolean


</td><td>

Do not use LOD optimization


</td></tr>
<tr><td>

[opacity](/reference/avatarcomponent/opacity.md)


</td><td>


</td><td>

number


</td><td>

Set the opacity of the avatar default is 1


</td></tr>
<tr><td>

[picture](/reference/avatarcomponent/picture.md)


</td><td>


</td><td>

string


</td><td>

url of a picture to display on top the avatar.


</td></tr>
<tr><td>

[renderMode](/reference/avatarcomponent/rendermode.md)


</td><td>


</td><td>

RenderMode


</td><td>

Model render mode. Defaults to "default"


</td></tr>
<tr><td>

[text](/reference/avatarcomponent/text.md)


</td><td>


</td><td>

string


</td><td>

text to display on top the avatar. Defaults to "".


</td></tr>
<tr><td>

[url](/reference/avatarcomponent/url.md)


</td><td>


</td><td>

string


</td><td>

url of the vrm file


</td></tr>
<tr><td>

[useMixer](/reference/avatarcomponent/usemixer.md)


</td><td>


</td><td>

boolean


</td><td>

Use CPU Animation


</td></tr>
<tr><td>

[visible](/reference/avatarcomponent/visible.md)


</td><td>


</td><td>

boolean


</td><td>

See [Threejs doc](https://threejs.org/docs/index.html?q=objec#api/en/core/Object3D.visible)


</td></tr>
<tr><td>

[vrmUrl](/reference/avatarcomponent/vrmurl.md)


</td><td>

`readonly`


</td><td>

string


</td><td>


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

[\_getBBoxImp(target)](/reference/avatarcomponent/_getbboximp.md)


</td><td>

`protected`


</td><td>


</td></tr>
<tr><td>

[\_onCreateCollisionMesh()](/reference/avatarcomponent/_oncreatecollisionmesh.md)


</td><td>

`protected`


</td><td>


</td></tr>
<tr><td>

[dispose()](/reference/avatarcomponent/dispose.md)


</td><td>

`protected`


</td><td>


</td></tr>
<tr><td>

[getDimensions()](/reference/avatarcomponent/getdimensions.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[getRawBBox(target)](/reference/avatarcomponent/getrawbbox.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[getTransformData()](/reference/avatarcomponent/gettransformdata.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[init()](/reference/avatarcomponent/init.md)


</td><td>

`protected`


</td><td>


</td></tr>
<tr><td>

[play(name, opts)](/reference/avatarcomponent/play.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[stop(name, opts)](/reference/avatarcomponent/stop.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[updateAnimationMode(mode)](/reference/avatarcomponent/updateanimationmode.md)


</td><td>


</td><td>

 the render mode of the avatar component


</td></tr>
<tr><td>

[updatePlugins(plugins)](/reference/avatarcomponent/updateplugins.md)


</td><td>


</td><td>

 the plugins of the avatar component


</td></tr>
<tr><td>

[updateRenderMode(mode)](/reference/avatarcomponent/updaterendermode.md)


</td><td>


</td><td>

 the render mode of the avatar component


</td></tr>
<tr><td>

[updateVRM(url, data)](/reference/avatarcomponent/updatevrm.md)


</td><td>


</td><td>

Updates the vrm displayed by the avatar component


</td></tr>
</tbody></table>
