
## MainCamera.controls property

Returns the current camera controls, the type of the controls depends on the `mode` property:

- if mode is `firstperson` the controls will be an instance of [FirstPersonCameraControlsWrapper](/reference/firstpersoncameracontrolswrapper.md) - if mode is `thirdperson` the controls will be an instance of [ThirdPersonCameraControlsWrapper](/reference/thirdpersoncameracontrolswrapper.md) - if mode is `fly` the controls will be an instance of [FlyCameraControlsWrapper](/reference/flycameracontrolswrapper.md)

**Signature:**

```typescript
set controls(val: FirstPersonCameraControlsWrapper | ThirdPersonCameraControlsWrapper | FlyCameraControlsWrapper);
```
