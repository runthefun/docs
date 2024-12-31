
## Space class

Repersents the container for all objects in the scene for the current game.

This class is a wrapper around the ThreeJS [Group](https://threejs.org/docs/index.html?q=Group#api/en/objects/Group) class.

**Signature:**

```typescript
export class Space extends AugmentedGroup 
```
**Extends:** AugmentedGroup

## Remarks

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `Space` class.

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

[camera](/reference/space/camera.md)


</td><td>

`readonly`


</td><td>

any


</td><td>

Returns the current camera in the scene. cf [MainCamera](/reference/maincamera.md)


</td></tr>
<tr><td>

[components](/reference/space/components.md)


</td><td>


</td><td>

[ComponentManager](/reference/componentmanager.md)


</td><td>

 { ComponentManager } - The component manager for the current game.


</td></tr>
<tr><td>

[isReady](/reference/space/isready.md)


</td><td>

`readonly`


</td><td>

boolean


</td><td>


</td></tr>
<tr><td>

[options](/reference/space/options.md)


</td><td>


</td><td>

{ game: import("..").Game; externalApi: any; server?: import("../@types/states").Server; disableScripts?: boolean; signals?: import("..").GameSignals; loadOpts?: { looseMode?: boolean; }; }


</td><td>


</td></tr>
<tr><td>

[physics](/reference/space/physics.md)


</td><td>


</td><td>

[PhysicsRapierWrapper](/reference/physicsrapierwrapper.md)


</td><td>

 { PhysicsRapierWrapper } - The physics manager for the current game. Currently only Rapier is supported.


</td></tr>
<tr><td>

[registry](/reference/space/registry.md)


</td><td>


</td><td>

ComponentsRegistry


</td><td>

 { ComponentsRegistry } - The components registry for the current game.


</td></tr>
<tr><td>

[resources](/reference/space/resources.md)


</td><td>


</td><td>

ResourceManager


</td><td>

 { ResourceManager } - The resources manager for the current game.


</td></tr>
<tr><td>

[sessionId](/reference/space/sessionid.md)


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

[captureFrame(opts)](/reference/space/captureframe.md)


</td><td>


</td><td>

Takes a screenshot of the current frame. Returns a promise that resolves to the data URL of the screenshot.


</td></tr>
<tr><td>

[pause(payload)](/reference/space/pause.md)


</td><td>


</td><td>

Use this method to pause the current game.


</td></tr>
<tr><td>

[resume(payload)](/reference/space/resume.md)


</td><td>


</td><td>

Use this method to resume the current game.


</td></tr>
<tr><td>

[start(payload)](/reference/space/start.md)


</td><td>


</td><td>

Use this method to start the current game.


</td></tr>
<tr><td>

[stop(payload)](/reference/space/stop.md)


</td><td>


</td><td>

Use this method to stop the current game.


</td></tr>
</tbody></table>
