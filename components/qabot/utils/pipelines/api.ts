export const defaultApi = `
interface Format {
  format: (value: any) => any;
  parse: (value: any) => any;
}

interface Param<T = any> {
  name?: string;
  label?: string;
  info?: string;
  visible?: (self: Component3D) => boolean;
  format?: Format;
}

interface NumberParam extends Param<number> {
  min?: number;
  max?: number;
  step?: number;
}

interface SelectParam<T extends string> extends Param<T> {
  options?: Array<T>;
  mode?: "buttons" | "slider" | "dropdown";
}

interface $Param {
  String(def?: string, opts?: Param): string;
  Number(def?: number, opts?: NumberParam): number;
  Boolean(def?: boolean, opts?: Param): boolean;
  Color(def?: string, opts?: Param): string;
  // vrm animation names: builtin names are idle, walk, run, jump, fly and sitting
  // user can upload custom animations and assign names to them
  // in the inspector this param will show as a select to choose from the list of animations on the space
  Animation(def: string, opts?: Param): string;
  Vector2(x: number, y: number, opts?: Param): Vector2;
  Vector3(x: number, y: number, z: number, opts?: Param): Vector3;
  Select<const T extends string>(opts: SelectParam<T>): T;
  // added as a button in the studio inspector
  Action(callback: () => void, opts?: Param);
  // In studio user can drag on of scene components to this param
  Component(of: any): Component3D; // of: "model", "avatar" ...
  Object<T>(shape: T): T; // eg: P.Object({ x: P.Number(0) })
  Folder<T>(label: string, t: T): T;
  Array<T>(itemType: T, opts?: Param<T>): Array<T>; // eg: P.Array(P.Number(0))
  Map<T>(itemType: T, opts?: Param): Record<string, T>; // eg: P.Map(P.Number(0))
}

// PLAYER is used for avatar characters
type RigidBodyType = "DYNAMIC" | "KINEMATIC" | "FIXED" | "PLAYER";

type ColliderType = "CUBE" | "MESH" | "SPHERE" | "CAPSULE" | "CYLINDER";

interface PhysicsData {
  enabled?: boolean;
  rigidbodyType?: RigidBodyType;
  colliderType?: ColliderType;
  sensor?: boolean;
  // for dynamic type
  dynamicProps?: {
    mass?: number;
    friction?: number;
    restitution?: number;
    density?: number;
  };
   //left 16 bits for groups membership, right 16 bits for filter
   groups?: number;
  translationLock?: [boolean, boolean, boolean];
  rotationLock?: [boolean, boolean, boolean];
}

interface XYZ {
  x: number;
  y: number;
  z: number;
}

interface RigidBodyWrapper {
  colliders: ColliderWrapper[];
  component: Component3D;
  raw: any; // Returns the raw Rapier rigidbody
  enabled: boolean;
  position: Vector3;
  quaternion: Quaternion;
  teleport(position: Vector3, quaternion: Quaternion): void;
  translationLock: [boolean, boolean, boolean];
  rotationLock: [boolean, boolean, boolean];
  reset(): void;
  addForce(force: XYZ, relativePoint?: XYZ): void;
  resetForces(): void;
  resetVelocities(): void;
  addTorque(torque: XYZ): void;
  resetTorques(): void;
  applyImpulse(impulse: XYZ, relativePoint?: XYZ): void;
}

interface ColliderWrapper {
  parent: RigidBodyWrapper;
  component: Component3D;
  enabled: boolean;
  raw: any; // Returns the raw Rapier collider
  mass: number;
  friction: number;
  restitution: number;
  isSensor: boolean;
}

interface Component3DData {
  // if not provided, an auto id will be generated
   id?: string;
  parentId?: string;
  position?: XYZ;
  rotation?: XYZ;
  scale?: XYZ;
  name?: string;
  type: string;
  script?: {
    identifier?: string;
    tag?: string;
  };
  collider?: PhysicsData;
}

interface CollisionEvent {
  me: Component3D;
  other: Component3D;
}

interface ContactEvent extends CollisionEvent {
  contactPoints: Array<{
    position: Vector3;
    normal: Vector3;
    depth: number;
  }>;
}

// Base class for all components in the space.
class Component3D<Data> extends Object3D {

 // use Components.create(data) 
 // or 
 // import MyBeh from "./mybeh";
 // use MyBeh.create()
  private constructor(d);

  rigidBody: RigidBodyWrapper;
  space: Space;
  get data(): Data;
  _updateData(data: Partial<Data>): void;
  onCollisionEnter(cb: (event: ContactEvent) => void): () => void;
  onCollisionExit(cb: (event: CollisionEvent) => void): () => void;
  onCollisionStay(cb: (event: ContactEvent) => void): () => void;
  onSensorEnter(cb: (event: ContactEvent) => void): () => void;
  onSensorExit(cb: (event: CollisionEvent) => void): () => void;
  onSensorStay(cb: (event: ContactEvent) => void): () => void;
  get childComponents(): Component3D[];
  get behaviors(): ScriptBehavior[];
  get parentComponent();
  getBBox(target?: Box3): Box3;
  duplicate(): Promise<this>;

  // add, remove works for both behaviors and components as well as threejs objects
}

interface AudioComponentData extends Component3DData {
  type: "audio";
  url: string;
  // 0 to 1
  volume?: number;
  autoPlay: false;
  loop: false;
}

class AudioComponent extends Component3D<AudioComponentData> {
  play();
  pause();
  stop();
  isPlaying: boolean;
  autoPlay: boolean;
  volume: number;
  loop: boolean;
  audio: HTMLAudioElement;
}

type RenderMode = "default" | "toon" | "glitch" | "ghost";

interface AvatarComponentData extends Component3DData {
  type: "avatar";
  // vrm url
  url: string;
  // shown on top the avatar
  text?: string;
  renderMode?: RenderMode;
  // CPU or GPU Animation
   useMixer?: boolean;
  opacity: number;
}

// display VRM avatars in the game
class AvatarComponent extends Component3D<AvatarComponentData> {
  play(name: string);
  stop(name: string);
  stopAll();
  getBone(id: string): Object3D;
  onMixerUpdate(f: Function): () => any;

  url: string;
  text: string;
  animation: string;
  renderMode: RenderMode;
  useMixer: boolean;
  opacity: number;
}

interface GroupComponentData extends Component3DData {
  type: "group";
}
// used to group components
class GroupComponent extends Component3D<GroupComponentData> {}

interface InteractionComponentData extends Component3DData {
  type: "interaction";
  distance: number;
  // target source to calculate the distance for the interaction
  distanceTarget: Vector3;
  key: string;
  // always face the camera
  billboard: boolean;
}

/**
 * eg 
 *  let inter = await Components.create({
      type: 'interaction',
      distanceTarget: Player.avatar.position,
      distance: 2,
      atlas: "keyboard_e_outline",
      key: "KeyE",
    });

    inter.active = true;
    inter.position.copy(some.position)
    // place above the object
    inter.position.y = some.position.y + some.getDimensions().y + 0.8;
    inter.onInteraction(() => {...});
 */
class InteractionComponent extends Component3D<InteractionComponentData> {
  active: boolean;
  onInteraction(cb: () => void): () => void;
}

interface MeshComponentData extends Component3DData {
  type: "mesh";
  geometry?: {
    type: "plane" | "box" | "sphere" | "cylinder" | "dome";
  };
  color?: string;
  image?: string;
  opacity?: number;
  // display in live mode?
  display?: boolean;
}

// display simple meshes in the game (box, sphere, cylinder)
class MeshComponent extends Component3D<MeshComponentData> {
  color: string;
  opacity: number;
  image: string;
}

interface ModelComponentData extends Component3DData {
  type: "model";
  // url of the gltf/glb
  url: string;
  renderMode?: RenderMode;
  opacity?: number;
}

// display (.gltf, .glb)
class ModelComponent extends Component3D<ModelComponentData> {
  play(name);
  stop(name);
  stopAll();
  // gltf animations
  getAnimationData(): Record<string, any>;
  renderMode: RenderMode;
  opacity: number;
}

type TextAlignment = "left" | "center" | "right";
type FontFamily = "aeonik-bold" | "aeonik-medium" | "playfair-regular" | "playfair-italic";
type TextTransform = "none" | "uppercase" | "lowercase" | "capitalize" | "togglecase";

interface TextComponentData extends Component3DData {

    type: "text";
    text: string;
    font?: FontFamily;
    // Width of the text box. Defaults to 500. Use this to avoid breaking a long into multiple lines
    width?: number;
    // Defaults to 60
    lineHeight?: number;
    // Defaults to "#ffffff"
    textColor?: string;
    // Defaults to "left"
    align?: TextAlignment;
    textTransform?: TextTransform;
    // defaults to 1
    opacity?: number;
}

// Uses to show text in 3D scene (not an UI overly but webgl).
class TextComponent extends Component3D<TextComponentData> {
    text: string;
    font: FontFamily;
    width: number;
    lineHeight: number;
    textColor: string;
    align: TextAlignment;
    textTransform: string;
    opacity: number;
}

// used for pathfinding. 
// This has to be created in studio and use Components.byType("navmesh") to get it in the script
class NavmeshComponent extends Component3D {
    crowd: NavmeshCrowd;
}

interface AgentParams {
  radius: number;
  height: number;
  maxAcceleration: number;
  maxSpeed: number;
}


class NavmeshCrowd  {
    component: NavmeshComponent;
    params: CrowdParams;
    agents: NavmeshAgent[];

    addAgent(target: Vector3 | Object3D, params?: Partial<AgentParams>): NavmeshAgent;
    removeAgent(agent: NavmeshAgent): boolean;

    findClosestPoint(position: Vector3, target?: Vector3): Vector3;
    findRandomPoint(target?: Vector3): Vector3;
    findRandomPoint(position: Vector3, radius: number, target?: Vector3): Vector3;
  
}

class NavmeshAgent extends Augmented {

    get velocity(): Vector3;
    
    findClosestPoint(position: Vector3): Vector3;
    findRandomPoint(radius: number, target?: Vector3): Vector3;
    get parameters(): Partial<AgentParams>;
    set parameters(params: Partial<AgentParams>);
    updateParameters(params: Partial<AgentParams>): void;
    
    teleport(position: Vector3): void;
    
    moveTo(position: Vector3, opts?: {
        callback?: (reached: boolean) => void;
    }): boolean;
    
    moveToTarget(target: Component3D, opts?: {
        offset?: number;
        callback?: () => void;
    }): void;
    
    reset(): void;
}


class MainCamera extends PerspectiveCamera {
  useControls(controls: "thirdperson" | "firstperson" | any);

  // if true clicking on the canvas will lock the pointer
   usePointerLock: boolean;
  // Usually Player.avatar, but can be any object
  target: Object3D;
  // max distance from the target object, used with useControls
   */
  maxZoomOut: number;
  /**
   * vert offset from the target object, used with useControls
   */
  heightOffset: number;
}

class ComponentManager extends Object3D {
  // lookup by data.id
  byInternalId(id): Component3D;
  // lookup by data.script.identifier
  byId(id): Component3D;
  // lookup by data.script.tag
  byTag(tag): Component3D[];
  // lookup by data.type
  byType(type): Component3D[];
  // lookup by data.name
  byName(name): Component3D[];
  filter(f: Function): Component3D[];
  find(f: Function): Component3D;
  forEach(f: Function): void;
  // dynamically create a component
  create(data: Component3DData): Promise<Component3D>;
  destroy(comp): boolean;
  duplicate(comp): Promise;
}

interface ComponentOptions {
  title?: string;
  description?: string;
  singleton?: boolean;
  draggable?: boolean;
  transform?: boolean;
}

interface DataChangeOpts<Data> {
  prev: Data;
  isProgress: boolean;
}

class ScriptComponent extends Component3D {
  static readonly config: ComponentOptions;
  // Creates a new instance of the script component
  static create(data): Promise;
  static getInstances<T>(): T[];
  static getMain<T>(): T; // for singletons
  /**
   * Invoked when the host component is initialized; this is called both on studio and runtime
   * good place to create the visual representation of the component
   */
  onRenderInit(): void;
  /**
   * Invoked when the host component is updated; called both on studio and runtime
   * good place to reflect params changes on the component
   */
  onRenderUpdate(opts: DataChangeOpts): void;
  /**
   * This will be used to construct the collider for the component
   * required when static config.transform is true
   */
  onGetCollisionMesh(): Mesh;
  /**
   * Invoked when the host component is asked for its collision mesh (if any)
   */
  onRenderDispose(): void;

  /**
   * Invoked only **one time** when all assets are loaded and the game is ready to start.
   * Note the engine will wait for all component onReady methods to finish before starting the game.
   * So make sure you only put initialization code here.
   */
  onReady(): void;
  /**
   * Invoked whenever the game is started or restarted by the user.
   */
  onStart(): void;
  /**
   * Invoked whenever the game has ended.
   */
  onEnd(): void;

  /**
   * Invoked each frame even, both in studio and runtime.
   */
  onFrame(dt: number): void;
  /**
   * Invoked each frame when the game is running.
   */
  onUpdate(dt: number): void;
  /**
   * Invoked at regular intervals when the game is running.
   * Use this when writing custom controls, or other physics sensitive calculations.
   */
  onFixedUpdate(dt: number): void;
  /**
   * Invoked when the game is paused by the user.
   */
  onPause(): void;
  /**
   * Invoked when the game is resumed by the user.
   */
  onResume(): void;
  /**
   * Invoked when the game is about to be destroyed.
   * Use this for final cleanup, like releasing resources or unsubscribing from events
   */
  onDispose(): void;
}

/**
 * Behaviors require a host component to be attached to. So they always have a parent component.
 * In scripting parent.add(behavior) is used to attach a behavior to a component.
 */
class ScriptBehavior extends ScriptComponent {
  get host(): Component3D;

  // you can override these methods to handle physics events on the host component
  handleSensorEnter(event: ContactEvent): void;
  handleSensorExit(event: CollisionEvent): void;
  handleSensorStay(event: ContactEvent): void;
  handleCollisionEnter(event: ContactEvent): void;
  handleCollisionExit(event: CollisionEvent): void;
  handleCollisionStay(event: ContactEvent): void;
}

/**
 * Wrapper for the physics engine, currently using Rapier3D
 */
class PhysicsRapierWrapper extends Object3D {
  // Current Rapier world instance
  world: RapierWorld;
  active: boolean;
}

/**
 * This provides a conveneince around Rapier character controller to move kinematic characters in the scene.
 * Use this to create custom player controls.
 */
class BasicCharacterController {
  constructor(options: {
    // gap the controller will leave between the character and its env
    offset: number;
    applyImpulsesToDynamicBodies: boolean,
    characterMass: number,
    slideEnabled: boolean,
    snapToGround: boolean,
    autoStep: {
        // max height the character can step over
        maxHeight: number,
        // min horizontal available space for the character to step over
        minWidth: number,
    }

  });

  /**
   * this applies the movement to the target component but takes into account
   * the physics collisions and adjustements/constraionts defined in this controller's options
   * Will also take care of firing appropriate collision/sensor events
   */
  update(target: Component3D, movement: Vector3, deltaTime: number): { onFloor: boolean };
}
 
/*
 * A class to access to all player entities on the game
 */
class PlayerManager {
  players: Record<string, PlayerWrapper>;
  main: PlayerWrapper;
  get(avatarOrSessionId: Component3D | string): PlayerWrapper;
}

class PlayerWrapper {
  avatarReady: Promise<AvatarComponent>;
  avatar: AvatarComponent;
  sessionId: string;
  userId: string;
  name: string;
  isAnonymous: boolean;
}

/**
 * Repersents the container for all objects in the scene for the current game.
 * this is World singleton object.
 */
class Space extends Object3D {
  //
  components: ComponentManager;
  physics: PhysicsRapierWrapper;

  // start the game
  start(payload?: any): void;
  // stop the game
  stop(payload?: any): void;
  // pause the game
  pause(payload?: any): void;
  // resume the game
  resume(payload?: any): void;
}

const UI: {
  createRenderer(): {
    unmount: () => void;
    render: (node: ReactNode) => boolean;
    renderSync: (node: ReactNode) => boolean;
  };
};

// singletons exposed from the package
let World: Space;
let Camera: MainCamera;
let Physics: PhysicsRapierWrapper;
let Players: PlayerManager;
// main player
let Player: PlayerWrapper;
`;
