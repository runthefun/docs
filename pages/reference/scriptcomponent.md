
## ScriptComponent class


**Signature:**

```typescript
export declare class ScriptComponent extends ScriptHost 
```
**Extends:** ScriptHost

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

[config](/reference/scriptcomponent/config.md)


</td><td>

`static`

`readonly`


</td><td>

[ComponentOptions](/reference/componentoptions.md)


</td><td>


</td></tr>
<tr><td>

[geometry](/reference/scriptcomponent/geometry.md)


</td><td>


</td><td>

never


</td><td>


</td></tr>
<tr><td>

[instances](/reference/scriptcomponent/instances.md)


</td><td>

`static`

`readonly`


</td><td>

[ScriptComponent](/reference/scriptcomponent.md)<!-- -->\[\]


</td><td>


</td></tr>
<tr><td>

[material](/reference/scriptcomponent/material.md)


</td><td>


</td><td>

never


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

[create(this, data)](/reference/scriptcomponent/create.md)


</td><td>

`static`


</td><td>

Creates a new instance of the script component


</td></tr>
<tr><td>

[getInstances(this)](/reference/scriptcomponent/getinstances.md)


</td><td>

`static`


</td><td>


</td></tr>
<tr><td>

[getMain(this)](/reference/scriptcomponent/getmain.md)


</td><td>

`static`


</td><td>


</td></tr>
<tr><td>

[handleCollisionEnter(event)](/reference/scriptcomponent/handlecollisionenter.md)


</td><td>


</td><td>

Handles the collision enter event for the host component


</td></tr>
<tr><td>

[handleCollisionExit(event)](/reference/scriptcomponent/handlecollisionexit.md)


</td><td>


</td><td>

Handles the collision exit event for the host component


</td></tr>
<tr><td>

[handleCollisionStay(event)](/reference/scriptcomponent/handlecollisionstay.md)


</td><td>


</td><td>

Handles the collision stay event for the host component


</td></tr>
<tr><td>

[handleSensorEnter(event)](/reference/scriptcomponent/handlesensorenter.md)


</td><td>


</td><td>

Handles the sensor enter event for the host component


</td></tr>
<tr><td>

[handleSensorExit(event)](/reference/scriptcomponent/handlesensorexit.md)


</td><td>


</td><td>

Handles the sensor exit event for the host component


</td></tr>
<tr><td>

[handleSensorStay(event)](/reference/scriptcomponent/handlesensorstay.md)


</td><td>


</td><td>

Handles the sensor stay event for the host component


</td></tr>
<tr><td>

[onAttached()](/reference/scriptcomponent/onattached.md)


</td><td>


</td><td>

Invoked when the component is attached to a parent


</td></tr>
<tr><td>

[onChildrenLoaded(children)](/reference/scriptcomponent/onchildrenloaded.md)


</td><td>


</td><td>

Invoked when all children of the host component are loaded


</td></tr>
<tr><td>

[onDispose()](/reference/scriptcomponent/ondispose.md)


</td><td>


</td><td>

Invoked when the game is about to be destroyed. Use this for final cleanup, like releasing resources or unsubscribing from events


</td></tr>
<tr><td>

[onEditorGetMeshes()](/reference/scriptcomponent/oneditorgetmeshes.md)


</td><td>


</td><td>

Returns the meshes that can be selected in the editor


</td></tr>
<tr><td>

[onEditorMeshClicked(mesh, intersect)](/reference/scriptcomponent/oneditormeshclicked.md)


</td><td>


</td><td>

Invoked when the user clicks on a mesh in the editor


</td></tr>
<tr><td>

[onEditorMeshMouseEnter(mesh, intersect)](/reference/scriptcomponent/oneditormeshmouseenter.md)


</td><td>


</td><td>

Invoked when the user hovers over a mesh in the editor


</td></tr>
<tr><td>

[onEditorMeshMouseLeave(mesh)](/reference/scriptcomponent/oneditormeshmouseleave.md)


</td><td>


</td><td>

Invoked when the user hovers out of a mesh in the editor


</td></tr>
<tr><td>

[onEnd()](/reference/scriptcomponent/onend.md)


</td><td>


</td><td>

Invoked whenever the game has ended.


</td></tr>
<tr><td>

[onFixedUpdate(dt)](/reference/scriptcomponent/onfixedupdate.md)


</td><td>


</td><td>

Invoked at regular intervals when the game is running. Use this when writing custom controls, or other physics sensitive calculations.


</td></tr>
<tr><td>

[onFrame(dt)](/reference/scriptcomponent/onframe.md)


</td><td>


</td><td>

Invoked each frame even if the game isnt running


</td></tr>
<tr><td>

[onGetCollisionMesh()](/reference/scriptcomponent/ongetcollisionmesh.md)


</td><td>


</td><td>

Invoked when the host component is asked for its collision mesh (if any)


</td></tr>
<tr><td>

[onGetGui()](/reference/scriptcomponent/ongetgui.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[onLoad()](/reference/scriptcomponent/onload.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[onPause()](/reference/scriptcomponent/onpause.md)


</td><td>


</td><td>

Invoked when the game is paused by the user.


</td></tr>
<tr><td>

[onPreload()](/reference/scriptcomponent/onpreload.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[onReady()](/reference/scriptcomponent/onready.md)


</td><td>


</td><td>

Invoked only \*\*one time\*\* when all assets are loaded and the game is ready to start.


</td></tr>
<tr><td>

[onRenderDispose()](/reference/scriptcomponent/onrenderdispose.md)


</td><td>


</td><td>

Invoked when the host component is asked for its collision mesh (if any)


</td></tr>
<tr><td>

[onRenderInit()](/reference/scriptcomponent/onrenderinit.md)


</td><td>


</td><td>

Invoked when the host component is initialized


</td></tr>
<tr><td>

[onRenderUpdate(opts)](/reference/scriptcomponent/onrenderupdate.md)


</td><td>


</td><td>

Invoked when the host component is updated


</td></tr>
<tr><td>

[onResume()](/reference/scriptcomponent/onresume.md)


</td><td>


</td><td>

Invoked when the game is resumed by the user.


</td></tr>
<tr><td>

[onStart()](/reference/scriptcomponent/onstart.md)


</td><td>


</td><td>

Invoked whenever the game is started or restarted by the user.


</td></tr>
<tr><td>

[onUpdate(dt)](/reference/scriptcomponent/onupdate.md)


</td><td>


</td><td>

Invoked each frame when the game is running.


</td></tr>
</tbody></table>
