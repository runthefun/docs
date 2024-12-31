
## ThirdPersonCameraControlsWrapper class

This class is used to implement third person camera mode.

The controls use mouse movements to rotate the camera around the target object; By default the conttrols controller will enter pointer lock mode when the user clicks on the canvas. To disable this behavior set the `usePointerLock` property to false on the controls controller.

The behavior of the controls can be customized by passing a [ThirdPersonCameraControlsWrapperParams](/reference/thirdpersoncameracontrolswrapperparams.md) object to the constructor

The meaning of `object` &amp; `target` options is intepreted as follows:

- The `object` is typically set to the camera object being controlled

- The `target` is the object that the camera will follow from the given maxZoomOut distance

**Signature:**

```typescript
export declare class ThirdPersonCameraControlsWrapper extends ControlsAbstract 
```
**Extends:** ControlsAbstract

## Remarks

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `ThirdPersonCameraControlsWrapper` class.

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

[\_canZoom](/reference/thirdpersoncameracontrolswrapper/_canzoom.md)


</td><td>


</td><td>

boolean


</td><td>


</td></tr>
<tr><td>

[$$lerp](/reference/thirdpersoncameracontrolswrapper/__lerp.md)


</td><td>


</td><td>

{ dt: number; a: number; }


</td><td>


</td></tr>
<tr><td>

[active](/reference/thirdpersoncameracontrolswrapper/active.md)


</td><td>


</td><td>

boolean


</td><td>

Returns true if the controls are active, false otherwise


</td></tr>
<tr><td>

[cameraAltitudeMaxDistance](/reference/thirdpersoncameracontrolswrapper/cameraaltitudemaxdistance.md)


</td><td>


</td><td>

number


</td><td>


</td></tr>
<tr><td>

[cameraAltitudeSmoothing](/reference/thirdpersoncameracontrolswrapper/cameraaltitudesmoothing.md)


</td><td>


</td><td>

number


</td><td>


</td></tr>
<tr><td>

[cameraVirtualTarget](/reference/thirdpersoncameracontrolswrapper/cameravirtualtarget.md)


</td><td>


</td><td>

Vector3


</td><td>


</td></tr>
<tr><td>

[canZoom](/reference/thirdpersoncameracontrolswrapper/canzoom.md)


</td><td>


</td><td>

boolean


</td><td>


</td></tr>
<tr><td>

[controller](/reference/thirdpersoncameracontrolswrapper/controller.md)


</td><td>


</td><td>

Controller


</td><td>

The controller used to translate mouse movements into camera rotations


</td></tr>
<tr><td>

[disableCollision](/reference/thirdpersoncameracontrolswrapper/disablecollision.md)


</td><td>


</td><td>

boolean


</td><td>


</td></tr>
<tr><td>

[disableWheelZoom](/reference/thirdpersoncameracontrolswrapper/disablewheelzoom.md)


</td><td>


</td><td>

boolean


</td><td>


</td></tr>
<tr><td>

[heightOffset](/reference/thirdpersoncameracontrolswrapper/heightoffset.md)


</td><td>


</td><td>

number


</td><td>

Represents the vertical offset from the target object


</td></tr>
<tr><td>

[loadState](/reference/thirdpersoncameracontrolswrapper/loadstate.md)


</td><td>


</td><td>

(state: any) =&gt; void


</td><td>


</td></tr>
<tr><td>

[lockAxis](/reference/thirdpersoncameracontrolswrapper/lockaxis.md)


</td><td>


</td><td>

{ x: boolean; y: boolean; }


</td><td>

Used to lock the camera movement on a specific axis


</td></tr>
<tr><td>

[maxZoomOut](/reference/thirdpersoncameracontrolswrapper/maxzoomout.md)


</td><td>


</td><td>

number


</td><td>

Represents the maximum distance from the target object


</td></tr>
<tr><td>

[saveState](/reference/thirdpersoncameracontrolswrapper/savestate.md)


</td><td>


</td><td>

() =&gt; { spherical: Spherical; targetSpherical: Spherical; idealCameraPosition: Vector3; idealCameraTarget: Vector3; cameraPosition: Vector3; cameraTarget: Vector3; cameraHeight: number; theta: number; phi: number; currentZoom: number; }


</td><td>


</td></tr>
<tr><td>

[smoothFactor](/reference/thirdpersoncameracontrolswrapper/smoothfactor.md)


</td><td>


</td><td>

number


</td><td>


</td></tr>
<tr><td>

[smoothMethod](/reference/thirdpersoncameracontrolswrapper/smoothmethod.md)


</td><td>


</td><td>

"position" \| "orbit"


</td><td>


</td></tr>
<tr><td>

[usePointerLock](/reference/thirdpersoncameracontrolswrapper/usepointerlock.md)


</td><td>


</td><td>

boolean


</td><td>

Returns true if the controls are using pointer lock, false otherwise


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

[lerpSpherical(spherical, target, alpha)](/reference/thirdpersoncameracontrolswrapper/lerpspherical.md)


</td><td>


</td><td>


</td></tr>
</tbody></table>
