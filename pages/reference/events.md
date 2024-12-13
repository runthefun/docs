
## Events variable

An object containing all the events that can listened from scripting.

**Signature:**

```typescript
Events: typeof ScriptEvents
```

## Example


```ts

 import { Emitter, Events } from "@oo/scripting"

 // ...
 Emitter.on(Events.KEY_DOWN, handler)


 // ... later
 Emitter.off(Events.KEY_DOWN, handler)

```
Currently the following events are supported

- KEY\_DOWN - The event triggered when a key is pressed down.

- KEY\_UP - The event triggered when a key is released.

- MOUSE\_DOWN - The event triggered when a mouse button is pressed down.

- MOUSE\_MOVE - The event triggered when the mouse is moved.

- MOUSE\_UP - The event triggered when a mouse button is released.

- TOUCH\_MOVE - The event triggered when a touch point is moved.

- TOUCH\_START - The event triggered when a touch point is initially placed on the touch surface.

- TOUCH\_END - The event triggered when a touch point is removed from the touch surface.

- WHEEL - The event triggered when the mouse wheel is scrolled.

- GAME\_SPACE\_LOADED - The event triggered when the game space has finished loading all the components.

- GAME\_READY - The event triggered when the game is ready to start.

- GAME\_START - The event triggered when the game is started.

- GAME\_DISPOSE - The event triggered when the game is disposed.

- GAME\_END - The event triggered when the game ends.

- GAME\_PRE\_UPDATE - The event triggered before the game update. This event happens before the physics update.

- GAME\_UPDATE - The event triggered during each frame of the game update loop.

- GAME\_NOTIFY\_PAUSE - The event triggered when the game notifies a pause.

- GAME\_NOTIFY\_RESUME - The event triggered when the game notifies a resume.

