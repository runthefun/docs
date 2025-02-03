export const defaultConcepts = `
awe.box is a platform for creating 3D browser experiences (games, interactive galleries ...).
Components are the building blocks in the 3D world derived from the \`Component3D\` class. Component3D derives from threejs Object3D class.
Everything in the scene is a Component. they can be ONLY ONE OF 
 - builtin Components (model, mesh, avatar ...) extend from Component3D class.
 - Custom Components created via the scripting interface, extend from ScriptComponent class.
 - Behaviors are custom components that need to be attached to other components. extend from ScriptBehavior class.

the process of creating an experience in awe.box involves: 
    - create a new world in studio. this will create a default scene with
    - add needed Components (3D models, avatars, meshes) using studio's GUI
    - attach behaviors to Components to add custom logic
    - additionally create custom Components or Behvaiors (via script) to add more complex logic
    - Alternatively User can also implement custom logic directly in the \`main\` script by instering relevent code into the appropriate lifecycle method.

Your task consists of generating code to implement user desired logic either via adding custom Components or Behaviors to the scene or by adding code to the main script.

Remember that Component3D extends threejs Group so you can access all properties and methods of a threejs object. When answering the
user provide a list of concrete steps to implement the desired logic:
 - What builting components to add via the studio GUI
 - What scripts need to be created to implement custom logic (Behaviors or Components or main script)
 - The source code of the scripts or the modifications to the main script


### Component/Behavior lifecycle methods

Most of the classes are in the \`@awe/scripting\` package

\`\`\`ts
import { ScriptComponent, ScriptBehavior } from "@awe/scripting"

class MyComponent extends ScriptComponent {
    // Called after all assets load. Put one-time initializations here.
    onReady() {
        // for behaviors, this.host is the component the behavior is attached to
    } 
    onStart() {...} // Triggers each time the game starts. Good for resetting positions, timers, etc.
    onUpdate(dt) {...} // Runs every frame render
    onFixedUpdate(dt) {...} // Runs every physics tick (fixed time step)
    onPause() {...} // Called when the game is paused
    onResume() {...} // Called when the game is resumed
    onEnd() {...} // Called when the game ends
    onDispose() {...} // Called when the component is destroyed

    onRenderInit() {} // will trigger both on game play and studio
    onRenderUpdate(dt) {} 
    onRenderDispose() {}
}
\`\`\`


### Components manager

The Components manager lets you find, duplicate, or destroy components in the scene. Typically the user assigns
a 'scripting id' or 'scripting tag' to an added instance in the studio to mark the component instance. Then
use the manager to find it in the script.

\`\`\`ts
import { Components } from "@awe/scripting"

const boss = Components.byId("firstboss")
const enemies = Components.byTag("enemies")

const clone = await boss.duplicate()
clone.destroy()
\`\`\`

we can also create components dynamically:

\`\`\`ts
// builtin types: model, mesh, avatar ...
const instance = await Components.create(type, data)

// for behaviors or custom Components
import MyBeh from "./mybeh";
const instance = await MyBeh.create(data)
\`\`\`

### Creating custom Components or Behaviors

Expose properties:
\`\`\`ts
import { ScriptComponent, $Param as P } from '@awe/scripting'
 
export default class MyComponent extends ScriptComponent {
    // available config options. Not all are required
    static config = {
        title: "My Cube", // required
        description: "A customizable cube", // optional
        singleton: false, // default to false.
        draggable: true, // optional, can be dragged from studio assets to scene
        transform: true // optional, can be moved, rotated, scaled in studio
    }

    // define params
    text = P.String("Hello")
    bool = P.Boolean(true)
    num = P.Number(10)
    vec3 = P.Vector3(1, 2, 3) // this.vec3 is a threejs Vector3
    vec2 = P.Vector2(1, 2) // this.vec2 is a threejs Vector2
    color = P.Color("#ffffff");
    choice = P.select({ options: ["a", "b", "c"] })
    anim = P.Animation("idle") // will display a list of vrm anims, vrms anims are applied to vrm avatars (type "avatar")
}


// for example
import { ScriptBehavior, $Param as P } from '@awe/scripting'
 
// make the host spin
export default class SpinBehavior extends ScriptBehavior {
    
  // Use @Folder to group params in studio inspector
  @Folder("Rotation Settings")
  speed = P.Number(0.5, { step: 0.1 });
 
  @Folder("Extra")
  color = P.Color("#ffffff");
 
  onUpdate(dt: number) {
    this.host.rotation.y += this.speed * dt
  }
}
\`\`\`

### Animations


### Avatar Animations

We utilize the Mixamo FBX format for our avatar animations. The process involves:
- Visit Mixamo, choose an animation, and download it in the .FBX format.
- In oncyber Studio, select Avatar Animations component in the studio.
- Upload your animation and rename it for easy access later (either in the avatar menu or through scripting through P.Animation params).

In scripting, we can then assign the animation to a component of type "avatar"
\`\`\`ts
const avatar = Components.byId("AvatarID");
avatar.animation = "chickendance";
\`\`\`

### Animating Objects on the Screen (Position, Rotation, etc.)
use animejs

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
await seconds(10);
model.stop("GM");
\`\`\`

### Physics

When adding components, user can toggle on \`Collider\` in collision section in the studio inspector. Then choose

- Type of rigid body (fixed, dynamic, kinematic)
- Collider shape (box, sphere, capsule, cylinder, mesh)
- optionally toggle 'sensor' on to make the collider trigger events without causing physics interactions.
- optionnally set 
    - friction
    - restitution
    - lock translation/rotation on a specific axis or all of them

In scripts user can then listent to collision events: 
onCollisionEnter, onCollisionStay, onCollisionExit, onSensorEnter, onSensorStay, onSensorExit
for example:
\`\`\`ts
import { Player } from '@awe/scripting'

comp.onCollisionEnter((event) => {
  if(event.other === Player.avatar) { ... }
});
\`\`\`


User can also apply forces to rigid bodies:
\`\`\`ts
// The impulse is applied at the center of mass by default unless a relative point is provided
comp.rigidBody.applyImpulse(impulse, relativePoint);
\`\`\`

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

// If your UI is purely visual (not interactive), disable pointer events so users can still lock the mouse in the scene:

<div style={{ pointerEvents: "none", ... }}>
  {/* Non-interactive UI */}
</div>

// create a renderer, typically in onReady
const renderer = UI.createRenderer(MyReactComp);

// render the component, initially or when needed
UI.addRenderer(renderer);

// remove the renderer when done
renderer.unmount()
\`\`\`

### Importing and Utilizing Built-in Libraries

the following libraries are available in the scripting environment: threejs, animejs, react, rapier

\`\`\`ts
import {...} from "three";
import * as React from "react";
import * as RAPIER from "@dimforge/rapier3d"
// ...
\`\`\`
`;

export const defaultBasicTypes = `
\`\`\`ts

interface Component3DData {
    id: string;
    parentId?: string;
    name: string;
    // for builtin components: model, video, audio, text, image, avatar, mesh...
    // for custom components: it's the underlying script unique id
    // used in Components.byType()
    type: string;
}

class Component3D<Data extends Component3DData> extends AugmentedGroup {
    rigidBody: RigidBodyWrapper;
    data: Data;
    // used in Components.byId()
    identifier: string;
    // used in Components.byTag()
    get tag(): string;
    getCollisionMesh(): Mesh | null;
    getBBox(): Box3;
    getDimensions(): Vector3;
    async duplicate(): Promise<this>;
    destroy(): void;
}

class RigidBodyWrapper {
    component: Component3D;
    get raw(): RigidBody; // raw rapier rigidbody
    get isFixed();
    get isDynamic();
    get isKinematic();
    enabled; // disable/enable the physics simulation for this rigidbody
    position: Vector3;
    quaternion: Quaternion;
    teleport(position, quaternion);
    reset();
    addForce(force: Vector3, relativePoint?: Vector3);
    resetForces();
    resetVelocities();
    addTorque(torque: XYZ);
    resetTorques();
    applyImpulse(impulse: Vector3, relativePoint?: Vector3);
}

// builtin components
declare let ComponentTypes = {
    background: BackgroundComponent, // singleton, required
    terrain: TerrainComponent,
    postpro: PostProcessingComponent, // singleton
    reflector: ReflectorComponent, // singleton
    rain: RainComponent, // singleton
    envmap: EnvmapComponent, // singleton
    spawn: SpawnComponent, // singleton
    mesh: MeshComponent,
    model: ModelComponent,
    text: TextComponent,
    audio: AudioComponent,
    image: ImageComponent,
    wind: WindComponent,
    video: VideoComponent,
    avatar: AvatarComponent,
    bird: BirdComponent,
    grass: GrassComponent,
    dust: DustComponent,
    impact: ImpactComponent,
    dialog: DialogComponent,
    interaction: InteractionComponent,
    group: GroupComponent,
    // some others...
};

// World singleton : import { World } from "@awe/scripting"
class Space extends AugmentedGroup {
    components: ComponentManager;
    physics: PhysicsRapierWrapper;
    start(); // start the game
    stop(); // stop the game
    // ... other methods
}

// Components singleton : import { Components } from "@awe/scripting"
declare class ComponentManager extends AugmentedGroup {
    byId(id: string);
    byTag(tag: string);
    byType(type: string);
    ...
}

class AvatarComponent extends Component3D<AvatarData> {
    animation: string;
    url: string;
    text: string; // displayed above the avatar
    opacity: number;
    renderMode: "default" | "toon" | "glitch" | "ghost"; // some render effects
    // ...
}

// represents a player in the game
class PlayerWrapper {
    get avatar(): AvatarComponent;
    name: string;
    userId: string;
    sessionId: string;
}

class PlayerManager {
    get main(): PlayerWrapper;
    players: Record<string, PlayerWrapper>;
    get(sessionId: string): PlayerWrapper;
}

// global singletons can be imported from "@awe/scripting"
let Components: ComponentManager;
let Camera: PerspectiveCamera;
// Main player
let Player: PlayerWrapper;
let World: Space;
\`\`\`
`;
