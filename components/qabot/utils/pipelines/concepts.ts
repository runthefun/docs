export const defaultConcepts = `
awe.box is a platform for creating 3D browser experiences (games, interactive galleries ...).

Everything in the scene is a Component. they can be ONLY ONE OF 
 - builtin Components (model, mesh, avatar ...) extend from Component3D class.
 - Custom Components created via the scripting interface, extend from ScriptComponent class.
 - Behaviors are custom components that need to be attached to other components. extend from ScriptBehavior class.

In scripting, behaviors can be attached to Components via usual Object3D.add() method.

the process of creating an experience in awe.box involves: 
    - create a new world in studio. this will create a default scene with
    - add needed Components (3D models, avatars, meshes) using studio's GUI
    - attach behaviors to Components to add custom logic
    - additionally create custom Components or Behvaiors (via script) to add more complex logic


Remember that Component3D extends threejs Group so you can access all properties and methods of a threejs object.
Also since we run in the browser you can use builtin web api.
DO NOT USE ANY API that is not available in the browser or via awe scripting interface.


### Custom Component/Behaviors

\`\`\`ts
import { ScriptComponent, ScriptBehavior } from "@awe/scripting"

class MyComponent extends ScriptComponent {
    // implement relevent lifecycle methods, see <api> for more details
}
\`\`\`


### Components manager

The Components manager manages components in the scene (add, clone, find...). 
Typically the user assigns a 'scripting id' or 'scripting tag' to an added instance 
in the studio to mark the component instance. Then use the manager to find it in the script.
we can also create components dynamically using Components.create
see <api> for more details.


### Creating custom Components or Behaviors

Expose properties:
\`\`\`ts
import { ScriptComponent, $Param as P } from '@awe/scripting'
 
export default class MyComponent extends ScriptComponent {
    // available config options. Not all are required
    static config = {
        title: "My Cube", // required
        description: "A customizable cube",
        // ... optionall set singleton, transform ...
    }

    // define params
    text = P.String("Hello");
    // reference to another component
    component = P.Component("model", { title: "My Model" })
    // ... see <api> for more options
}

### Avatar Animations

We utilize FBX format for avatar anims.
- user download fbx anim.
- In studio, user selects Avatar Animations component in the studio.
- User Upload your animation and assign name to it for easy access later (in avatar.animation or $Param.Animation props).


### Animating Objects using animejs

\`\`\`ts
import anime from "animejs";
 
const bus = Components.byId("bus");
anime({
    targets: bus.position,
    x: -10,
    y: 0,
    z: 0,
    duration: 1000,
});
\`\`\`

### Gltf animations
For gltf models (builtin type "model"), animations are automatically loaded and can be played using play/pause.

\`\`\`ts
import { Components, ModelComponent, seconds } from "@awe/scripting";
 
const model = Components.byId('samplemodel') as ModelComponent;
model.play("GM");
// ... later
model.stop("GM");
\`\`\`

### Physics

When adding components, user can toggle on \`Collider\` in collision section in the studio inspector. 
Then choose type of rigid body and collider shape (see PhysicsData in <api> for mode details).
In scripts user can then listent to collision events by attaching callbacks to the component (onCollisionEnter, ...).

for exampme comp.onCollisionEnter((event) => {...});

For behaviors, there're convenient handler methods to avoid the need to manually attach/detach event listeners:

\`\`\`ts
import { ScriptBehavior } from '@awe/scripting'

export default class MyBehavior extends ScriptBehavior {
    handleCollisionEnter(event) { ... }
    // or if host is a sensor
    handleSensorEnter(event) { ... }
    // ...
}
\`\`\`

So either we add event listeners directly to the component or we create a behavior and implement the physics handlers.

User can also apply forces to rigid bodies using applyForce or applyImpulse methods. see RigidBodyWrapper <api> for more details.
for more advances physics, we use the rapier physics engine. Get comp.rigidBody.raw and then use the rapier API (you can do import * as RAPIER from "@dimforge/rapier3d").

### Adding Custom UI with React

awe provides built-in React support for creating in-world UI elements. You can render React components in any 
script using a UI.createRenderer().

\`\`\`ts
import { ScriptBehavior, UI, Store, useStore } from '@awe/scripting'

const store = new Store({ count: 0 });

function MyReactComp() {
    const { count } = useStore(store);
    return (...) // your react component
}

class MyUI extends ScriptBehavior {

    renderer = UI.createRenderer(MyReactComp);

    // render the component, initially or when needed
    // for example in onReady
    // or update the store and the component will re-render
    onReady() {
        this.renderer.render(<MyReactComp />);
    }
    
    onDispose() {
        this.renderer.unmount()
    }
}
\`\`\`

### Custom Player Controls

First user needs to make sure to remove the defailt player controls in the studio.
We need to use 'BasicCharacterController' to properly handle movement for kinematic objects.


\`\`\`ts
import { ScriptComponent, Camera, BasicCharacterController, Emitter, Events } from "@oo/scripting"

export default class Controls extends ScriptComponent {

    static config = {
        title: "Player Controls",
        description: "Basic player movement controls",
        singleton: true, // only one instance
    }

    // used for proper handling of collisions, walls, stairs, etc.
    private controller = new BasicCharacterController();

    // ... params for speed, jump height, gravity, etc.

    onReady = () => {
        // set camera mode to thirdperson. 
        // alternatively can use "firstperson" and the camera will be attached to the player's head
        Camera.useControls("thirdperson"); 
    
        // set the target of the camera to the player
        Camera.controls.target = Player.avatar; 

        // update keyboard state 
        Emitter.on(Events.KEY_DOWN, this.handleKeyDown); 
        Emitter.on(Events.KEY_UP, this.handleKeyUp);
    }

    onUpdate = (deltaTime: number) => {
        // ... compute movement: eg wasd, gravity ...
        // then request the controller to update the player's position
        const { onFloor } = this.controller.update(this.target, movement, deltaTime);
        this.onFloor = onFloor;

        // optionally:
        // rotate the player to face the direction of movement
        // apply appropriate animation: walk, run, jump, ...
    }

    onDispose() {
        // cleaning the event listeners 
        Emitter.off(Events.KEY_DOWN, this.onKeyDown);
        Emitter.off(Events.KEY_UP, this.onKeyUp);
    }
}
\`\`\`ts

### Events

You can listen to key/mouse events either using Emitter and Events provided classes 
You can also use browser built-in event listeners.


### Importing and Utilizing Built-in Libraries

the following libraries are available in the scripting environment: threejs, animejs, react, rapier

\`\`\`ts
import {...} from "three";
import * as React from "react";
import * as RAPIER from "@dimforge/rapier3d"
// ...
\`\`\`
`;
