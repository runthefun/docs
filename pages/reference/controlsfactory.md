
## ControlsFactory class

Use this to create controls for your game, Currently supports the following types:

- [PlatformerControlsWrapper](/reference/platformercontrolswrapper.md) for a WASD + Space type of navigation

- [ThirdPersonCameraControlsWrapper](/reference/thirdpersoncameracontrolswrapper.md) for a third person camera movement

- [FirstPersonCameraControlsWrapper](/reference/firstpersoncameracontrolswrapper.md) for a first person camera movement

- [DebugOrbitControlsWrapper](/reference/debugorbitcontrolswrapper.md) for a debug orbit camera movement

- [FlyCameraControlsWrapper](/reference/flycameracontrolswrapper.md) for a fly camera movement

-  for a WASD + Space type of navigation

**Signature:**

```typescript
export declare class ControlsFactory 
```

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[get(opts)](/reference/controlsfactory/get.md)


</td><td>


</td><td>

Factory method to create control. The controls returned depend on the type of controls you want to create. Currently supports the following types: "platformer", "thirdperson", "firstperson", "debugorbit", "fly".


</td></tr>
<tr><td>

[getControllerFor(obj)](/reference/controlsfactory/getcontrollerfor.md)


</td><td>


</td><td>

Returns an existing controller instance for the given object, if one exists.


</td></tr>
</tbody></table>
