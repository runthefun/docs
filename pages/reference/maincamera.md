
## MainCamera class

Main camera used to render the scene, this is actually an instance of three.js [PerspectiveCamera](https://threejs.org/docs/index.html?q=Perspe#api/en/cameras/PerspectiveCamera)

**Signature:**

```typescript
export class MainCamera extends AbstractCamera 
```
**Extends:** AbstractCamera

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

[controls](/reference/maincamera/controls.md)


</td><td>


</td><td>

[FirstPersonCameraControlsWrapper](/reference/firstpersoncameracontrolswrapper.md) \| [ThirdPersonCameraControlsWrapper](/reference/thirdpersoncameracontrolswrapper.md) \| [FlyCameraControlsWrapper](/reference/flycameracontrolswrapper.md)


</td><td>

Returns the current camera controls, the type of the controls depends on the `mode` property:

- if mode is `firstperson` the controls will be an instance of [FirstPersonCameraControlsWrapper](/reference/firstpersoncameracontrolswrapper.md) - if mode is `thirdperson` the controls will be an instance of [ThirdPersonCameraControlsWrapper](/reference/thirdpersoncameracontrolswrapper.md) - if mode is `fly` the controls will be an instance of [FlyCameraControlsWrapper](/reference/flycameracontrolswrapper.md)


</td></tr>
<tr><td>

[disableCollision](/reference/maincamera/disablecollision.md)


</td><td>


</td><td>

boolean


</td><td>


</td></tr>
<tr><td>

[disableWheelZoom](/reference/maincamera/disablewheelzoom.md)


</td><td>


</td><td>

boolean


</td><td>


</td></tr>
<tr><td>

[heightOffset](/reference/maincamera/heightoffset.md)


</td><td>


</td><td>

number


</td><td>

Returns vertical offset from the target object, this is used in combination with the `useControls` method.


</td></tr>
<tr><td>

[maxZoomOut](/reference/maincamera/maxzoomout.md)


</td><td>


</td><td>

number


</td><td>

Represents the maximum distance from the target object, this is used in combination with the `useControls` method.


</td></tr>
<tr><td>

[mode](/reference/maincamera/mode.md)


</td><td>


</td><td>

"thirdperson" \| "firstperson"


</td><td>


</td></tr>
<tr><td>

[target](/reference/maincamera/target.md)


</td><td>


</td><td>

Object3D&lt;import("three").Object3DEventMap&gt;


</td><td>


</td></tr>
<tr><td>

[usePointerLock](/reference/maincamera/usepointerlock.md)


</td><td>


</td><td>

boolean


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

[useControls(controls)](/reference/maincamera/usecontrols.md)


</td><td>


</td><td>


</td></tr>
</tbody></table>
