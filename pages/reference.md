
## oo-mono package

## Classes

<table><thead><tr><th>

Class


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[$Param](/reference/_param.md)


</td><td>



</td></tr>
<tr><td>

[AudioComponent](/reference/audiocomponent.md)


</td><td>

Audio component, used to play audio in the game

See [AudioComponentData](/reference/audiocomponentdata.md) for the data schema used to create an audio component


</td></tr>
<tr><td>

[AvatarComponent](/reference/avatarcomponent.md)


</td><td>

Avatar component, used to display VRM avatars in the game (for more info on VRM files, see [VRM site](https://vrm.dev/en/vrm/vrm_about/)<!-- -->)

See [AvatarComponentData](/reference/avatarcomponentdata.md) for the data schema used to create an audio component


</td></tr>
<tr><td>

[BackgroundComponent](/reference/backgroundcomponent.md)


</td><td>

The background component is used to set the background of the game. You can set the background appareance from the studio.

At runtime right now you can only change the color of the background, but we plan to add more options in the future.

Bakckground is a singleton, so you can only have one background in the game.


</td></tr>
<tr><td>

[BasicCharacterController](/reference/basiccharactercontroller.md)


</td><td>

A controller class that can be used to control kinematic rigid bodies. This is a convenient class that wraps the [Rapier's Character controller](https://rapier.rs/docs/user_guides/javascript/character_controller) class.


</td></tr>
<tr><td>

[BirdComponent](/reference/birdcomponent.md)


</td><td>

A component to display birds in the game.

See [BirdComponentData](/reference/birdcomponentdata.md) for the data schema used to create a bird component


</td></tr>
<tr><td>

[BulletComponent](/reference/bulletcomponent.md)


</td><td>

A component to display bullets in the game. Once created, the bullet will move in the given direction at the given speed.

See [BulletComponentData](/reference/bulletcomponentdata.md) for the data schema used to create a bullet component


</td></tr>
<tr><td>

[CGameClient](/reference/cgameclient.md)


</td><td>

A Game client instance is used to join a game room on the server


</td></tr>
<tr><td>

[ClientProvider](/reference/clientprovider.md)


</td><td>


</td></tr>
<tr><td>

[CloudComponent](/reference/cloudcomponent.md)


</td><td>

A component to display clouds in the game.

See [CloudComponentData](/reference/cloudcomponentdata.md) for the data schema used to create a cloud component


</td></tr>
<tr><td>

[Collider](/reference/collider.md)


</td><td>

This class encapsulates the physics entities attached to a component (rigid body, collider).

it offers some convenience methods to physics properties of the component.

For more info on the underlying physics engine, cf [Rapier docs](https://rapier.rs/docs/)


</td></tr>
<tr><td>

[Component3D](/reference/component3d.md)


</td><td>


</td></tr>
<tr><td>

[ComponentManager](/reference/componentmanager.md)


</td><td>

A ComponentManager is a container for all the components of a space. It is responsible for creating, destroying and duplicating components.


</td></tr>
<tr><td>

[ControlsFactory](/reference/controlsfactory.md)


</td><td>

Use this to create controls for your game, Currently supports the following types:

- [PlatformerControlsWrapper](/reference/platformercontrolswrapper.md) for a WASD + Space type of navigation

- [ThirdPersonCameraControlsWrapper](/reference/thirdpersoncameracontrolswrapper.md) for a third person camera movement

- [FirstPersonCameraControlsWrapper](/reference/firstpersoncameracontrolswrapper.md) for a first person camera movement

- [DebugOrbitControlsWrapper](/reference/debugorbitcontrolswrapper.md) for a debug orbit camera movement

- [FlyCameraControlsWrapper](/reference/flycameracontrolswrapper.md) for a fly camera movement

- [DefaultControlsWrapper](/reference/defaultcontrolswrapper.md) for a WASD + Space type of navigation


</td></tr>
<tr><td>

[DebugOrbitControlsWrapper](/reference/debugorbitcontrolswrapper.md)


</td><td>

Those controls are for debug purposes only. OrbitControls performs orbiting, dollying (zooming), and panning.

Orbit - left mouse / touch: one-finger move

Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish

Pan - right mouse, or left mouse + ctrl/meta/shiftKey, or arrow keys / touch: two-finger move


</td></tr>
<tr><td>

[DefaultControlsWrapper](/reference/defaultcontrolswrapper.md)


</td><td>

This class implements the default platformer controls, with support for jumping, running, etc

the controls use keyboard keys W, A, S, D or Arrow keys for movement, and SPACE for jumping;

The meaning of `object` &amp; `target` options is intepreted as follows:

- The `object` is moved by the controls actions

- The `target` is used to determine the forward direction of the movement

The behavior of the controls can be customized using the params object. See [DefaultControlParams](/reference/defaultcontrolparams.md) for more info


</td></tr>
<tr><td>

[Device](/reference/device.md)


</td><td>

Device information


</td></tr>
<tr><td>

[DustComponent](/reference/dustcomponent.md)


</td><td>

A component to display dust that follows a target in the game. You can use this component to create a trail of dust that follows a player, for example.

See [DustComponentData](/reference/dustcomponentdata.md) for the data schema used to create a dust component


</td></tr>
<tr><td>

[EnvmapComponent](/reference/envmapcomponent.md)


</td><td>

This component is used to display an environment map in the game. Use the studio to configure the environment for the space.

This is a singleton component. You can only have one environment map in the game.


</td></tr>
<tr><td>

[FirstPersonCameraControlsWrapper](/reference/firstpersoncameracontrolswrapper.md)


</td><td>

The class is used to implement first person camera controls.<!-- -->\`\`

The meaning of `object` &amp; `target` options is intepreted as follows:

- The `object` is typically set to the camera object being controlled

- The `target` is the object that the camera will follow


</td></tr>
<tr><td>

[FlyCameraControlsWrapper](/reference/flycameracontrolswrapper.md)


</td><td>

The class is used to implement fly camera controls.

It takes in the `object` parameter which is the camera object being controlled


</td></tr>
<tr><td>

[FogComponent](/reference/fogcomponent.md)


</td><td>

This component is used to activate a fog in the game. Use the studio to configure the fog for the space.

This is a singleton component. You can only have one fog in the game.


</td></tr>
<tr><td>

[GameRoom](/reference/gameroom.md)


</td><td>

This class is used to communicate with the game server and sync the game state


</td></tr>
<tr><td>

[GameStorageApi](/reference/gamestorageapi.md)


</td><td>

This class provides an API to store and retrieve data from the games.


</td></tr>
<tr><td>

[GodrayComponent](/reference/godraycomponent.md)


</td><td>

A component to display godrays effect in the game.

See [GodrayComponentData](/reference/godraycomponentdata.md) for the data schema used to create a godray component


</td></tr>
<tr><td>

[ImageComponent](/reference/imagecomponent.md)


</td><td>

Image component, used to display images in the game (.png, .jpg, .jpeg)

See [ImageComponentData](/reference/imagecomponentdata.md) for the data schema used to create an image component


</td></tr>
<tr><td>

[KitBashComponent](/reference/kitbashcomponent.md)


</td><td>

This component is used to display Kit Assets elements in the game

See [KitbashComponentData](/reference/kitbashcomponentdata.md) for the data schema used to create a kitbash component


</td></tr>
<tr><td>

[LightingComponent](/reference/lightingcomponent.md)


</td><td>

This component is used to controls lighting in the game. Use the studio to configure the lighting for the space.

This is a singleton component. You can only have one lighting in the game.


</td></tr>
<tr><td>

[MagneticFieldComponent](/reference/magneticfieldcomponent.md)


</td><td>

A component to display magnetic field like effect in the game.

See [MagneticFieldComponentData](/reference/magneticfieldcomponentdata.md) for the data specification to create a magnetic field component.


</td></tr>
<tr><td>

[MainCamera](/reference/maincamera.md)


</td><td>

Main camera used to render the scene, this is actually an instance of three.js [PerspectiveCamera](https://threejs.org/docs/index.html?q=Perspe#api/en/cameras/PerspectiveCamera)


</td></tr>
<tr><td>

[MeshComponent](/reference/meshcomponent.md)


</td><td>

Mesh component, used to display simple meshes in the game (box, sphere, cylinder)

See [MeshComponentData](/reference/meshcomponentdata.md) for the data schema used to create a mesh component


</td></tr>
<tr><td>

[ModelComponent](/reference/modelcomponent.md)


</td><td>

Model component, used to display gltf 3D models in the game (.gltf, .glb)

See [ModelComponentData](/reference/modelcomponentdata.md) for the data schema used to create a model component


</td></tr>
<tr><td>

[PhysicsRapierWrapper](/reference/physicsrapierwrapper.md)


</td><td>

Wrapper for the physics engine, currently using Rapier3D

This is the type of the [Physics](/reference/physics.md) variable in the scripting API


</td></tr>
<tr><td>

[PlatformComponent](/reference/platformcomponent.md)


</td><td>

A component to display sliding platforms in the game.

See [PlatformComponentData](/reference/platformcomponentdata.md) for the data schema used to create a platform component


</td></tr>
<tr><td>

[PlatformerControlsWrapper](/reference/platformercontrolswrapper.md)


</td><td>

This class implements traditional platformer controls, with support for jumping, running, etc

the controls use keyboard keys W, A, S, D or Arrow keys for movement, and SPACE for jumping;

The meaning of `object` &amp; `target` options is intepreted as follows:

- The `object` is moved by the controls actions

- The `target` is used to determine the forward direction of the movement

The behavior of the controls can be customized using the params object. See [PlatformerControlsWrapperParams](/reference/platformercontrolswrapperparams.md) for more info


</td></tr>
<tr><td>

[PlatformerInputController](/reference/platformerinputcontroller.md)


</td><td>

This class is used to control the actions of the [PlatformerControlsWrapper](/reference/platformercontrolswrapper.md) class.


</td></tr>
<tr><td>

[PlayerManager](/reference/playermanager.md)


</td><td>

A class to access to all player entities on the game


</td></tr>
<tr><td>

[PlayerWrapper](/reference/playerwrapper.md)


</td><td>

Represents a player entity in the game.

A PlayerWrapper instance is always created for the main player of the game; In mulitplayer mode, a PlayerWrapper instanceRor remote players in mulitplayer mode.

By default an avatar component is created for each player. You can customise the avatar used by the game using the current snippet in the `onPreload` method of the script


</td></tr>
<tr><td>

[PostProcessingComponent](/reference/postprocessingcomponent.md)


</td><td>

Post processing component, used to apply post processing effects to the game. Use the studio to configure the post processing for the space.

This is a singleton component. You can only have one post processing in the game.


</td></tr>
<tr><td>

[PrefabResource](/reference/prefabresource.md)


</td><td>


</td></tr>
<tr><td>

[RainComponent](/reference/raincomponent.md)


</td><td>

This component is used to display rain in the game. Use the studio to configure the rain for the space.

This is a singleton component. You can only have one rain in the game.


</td></tr>
<tr><td>

[ReflectorComponent](/reference/reflectorcomponent.md)


</td><td>

This component is used to display a reflective plan in the game. Use the studio to configure the reflector for the space.

This is a singleton component. You can only have one reflector in the game. For performance reasons, adding both a water and a reflector component to the same space is not supported.


</td></tr>
<tr><td>

[Resource](/reference/resource.md)


</td><td>


</td></tr>
<tr><td>

[RigidBodyWrapper](/reference/rigidbodywrapper.md)


</td><td>


</td></tr>
<tr><td>

[ScriptBehavior](/reference/scriptbehavior.md)


</td><td>


</td></tr>
<tr><td>

[ScriptComponent](/reference/scriptcomponent.md)


</td><td>



</td></tr>
<tr><td>

[ShadowFloorComponent](/reference/shadowfloorcomponent.md)


</td><td>


</td></tr>
<tr><td>

[SignalAction](/reference/signalaction.md)


</td><td>



</td></tr>
<tr><td>

[SignalEmitter](/reference/signalemitter.md)


</td><td>



</td></tr>
<tr><td>

[Space](/reference/space.md)


</td><td>

Repersents the container for all objects in the scene for the current game.

This class is a wrapper around the ThreeJS [Group](https://threejs.org/docs/index.html?q=Group#api/en/objects/Group) class.


</td></tr>
<tr><td>

[SpawnComponent](/reference/spawncomponent.md)


</td><td>

This component is used to configure where the player will spawn, initially, in the game. Use the studio to configure the spawn for the space.

This is a singleton component.


</td></tr>
<tr><td>

[Store](/reference/store.md)


</td><td>



</td></tr>
<tr><td>

[TerrainComponent](/reference/terraincomponent.md)


</td><td>

Terrain component, used to create terrains in the game. Use the studio to add terrains to the space.


</td></tr>
<tr><td>

[TextComponent](/reference/textcomponent.md)


</td><td>

Text component, used to display text in the game.

See [TextComponentData](/reference/textcomponentdata.md) for the data schema used to create a text component


</td></tr>
<tr><td>

[ThirdPersonCameraControlsWrapper](/reference/thirdpersoncameracontrolswrapper.md)


</td><td>

This class is used to implement third person camera mode.

The controls use mouse movements to rotate the camera around the target object; By default the conttrols controller will enter pointer lock mode when the user clicks on the canvas. To disable this behavior set the `usePointerLock` property to false on the controls controller.

The behavior of the controls can be customized by passing a [ThirdPersonCameraControlsWrapperParams](/reference/thirdpersoncameracontrolswrapperparams.md) object to the constructor

The meaning of `object` &amp; `target` options is intepreted as follows:

- The `object` is typically set to the camera object being controlled

- The `target` is the object that the camera will follow from the given maxZoomOut distance


</td></tr>
<tr><td>

[VideoComponent](/reference/videocomponent.md)


</td><td>

This component is used to display a video in the game.

See [VideoComponentData](/reference/videocomponentdata.md) for the data schema used to create a video component


</td></tr>
<tr><td>

[WaterComponent](/reference/watercomponent.md)


</td><td>

Water component, used to display water in the game. Use the studio to add a water component to the space.

This is a singleton component, so you can only have one water component in the game. For performance reasons Adding both a water and a reflector component to the same space is not supported.


</td></tr>
<tr><td>

[WaveComponent](/reference/wavecomponent.md)


</td><td>

A component to display a wave effect in the game.

See [WaveComponentData](/reference/wavecomponentdata.md) for the data schema used to create a wave component


</td></tr>
<tr><td>

[WindComponent](/reference/windcomponent.md)


</td><td>

A component to display a spiralling wind in the game. The wind will affect all objects colliding with it by pushing them up.

See [WindComponentData](/reference/windcomponentdata.md) for the data schema used to create a wind component


</td></tr>
</tbody></table>

## Functions

<table><thead><tr><th>

Function


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[Behavior(options)](/reference/behavior.md)


</td><td>


</td></tr>
<tr><td>

[Color(target, key)](/reference/color.md)


</td><td>


</td></tr>
<tr><td>

[Component(options)](/reference/component.md)


</td><td>


</td></tr>
<tr><td>

[Folder(label, opts)](/reference/folder.md)


</td><td>

Use this decorator to group multiple params into one folder


</td></tr>
<tr><td>

[getParam(key, value, decl)](/reference/getparam.md)


</td><td>


</td></tr>
<tr><td>

[getParams(instance, autoCreate)](/reference/getparams.md)


</td><td>


</td></tr>
<tr><td>

[getRpcMethods(target)](/reference/getrpcmethods.md)


</td><td>


</td></tr>
<tr><td>

[Message()](/reference/message.md)


</td><td>


</td></tr>
<tr><td>

[Param(options)](/reference/param.md)


</td><td>

The `@Param` decorator can be used on script properties to show them in the property panel of the script on the studio. if no type defined the engine will try to guess the type from it's default value. some Params need to be initialized, please refer to their documentation page


</td></tr>
<tr><td>

[Param(target, key)](/reference/param_1.md)


</td><td>


</td></tr>
<tr><td>

[Presets(presets)](/reference/presets.md)


</td><td>


</td></tr>
<tr><td>

[Receiver(opts)](/reference/receiver.md)


</td><td>

The `@Receiver` decorator allows functions to be bound to other component's signals


</td></tr>
<tr><td>

[Rpc(opts)](/reference/rpc.md)


</td><td>


</td></tr>
<tr><td>

[seconds(secs)](/reference/seconds.md)


</td><td>

Returns a promise that resolves after a number of seconds has passed


</td></tr>
<tr><td>

[ServerOnly()](/reference/serveronly.md)


</td><td>


</td></tr>
<tr><td>

[Signal(id, opts)](/reference/signal.md)


</td><td>


</td></tr>
<tr><td>

[Trigger(opts)](/reference/trigger.md)


</td><td>

The `@Trigger` decorator can be used on script functions to show a button for it in the property panel


</td></tr>
<tr><td>

[useStore(store)](/reference/usestore.md)


</td><td>



</td></tr>
</tbody></table>

## Interfaces

<table><thead><tr><th>

Interface


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[AbstractParam](/reference/abstractparam.md)


</td><td>


</td></tr>
<tr><td>

[Ai](/reference/ai.md)


</td><td>


</td></tr>
<tr><td>

[AiEmbedOptions](/reference/aiembedoptions.md)


</td><td>


</td></tr>
<tr><td>

[AiGenOptions](/reference/aigenoptions.md)


</td><td>


</td></tr>
<tr><td>

[AiTool](/reference/aitool.md)


</td><td>


</td></tr>
<tr><td>

[AnimationParam](/reference/animationparam.md)


</td><td>


</td></tr>
<tr><td>

[ArrayParam](/reference/arrayparam.md)


</td><td>


</td></tr>
<tr><td>

[AudioComponentData](/reference/audiocomponentdata.md)


</td><td>

Data for the [AudioComponent](/reference/audiocomponent.md)<!-- -->, see [ComponentManager.create()](/reference/componentmanager/create.md) on how to create a component


</td></tr>
<tr><td>

[AvatarComponentData](/reference/avatarcomponentdata.md)


</td><td>

Data specification for [AvatarComponent](/reference/avatarcomponent.md)<!-- -->, see [ComponentManager.create()](/reference/componentmanager/create.md) on how to create a component


</td></tr>
<tr><td>

[BaseIntersectionEvent](/reference/baseintersectionevent.md)


</td><td>

Base interface for all collision/sensor events.


</td></tr>
<tr><td>

[BaseRoomState](/reference/baseroomstate.md)


</td><td>


</td></tr>
<tr><td>

[BehaviorOptions](/reference/behavioroptions.md)


</td><td>


</td></tr>
<tr><td>

[BirdComponentData](/reference/birdcomponentdata.md)


</td><td>

Data specification for [BirdComponent](/reference/birdcomponent.md)<!-- -->, see [ComponentManager.create()](/reference/componentmanager/create.md) on how to create a component


</td></tr>
<tr><td>

[BooleanParam](/reference/booleanparam.md)


</td><td>


</td></tr>
<tr><td>

[BoxParamsData](/reference/boxparamsdata.md)


</td><td>

Params for the  property

See [BoxGeometry](https://threejs.org/docs/#api/en/geometries/BoxGeometry)


</td></tr>
<tr><td>

[BulletComponentData](/reference/bulletcomponentdata.md)


</td><td>

Data specification for [BulletComponent](/reference/bulletcomponent.md)<!-- -->, see [ComponentManager.create()](/reference/componentmanager/create.md) on how to create a component


</td></tr>
<tr><td>

[CloudComponentData](/reference/cloudcomponentdata.md)


</td><td>

Data specification for [CloudComponent](/reference/cloudcomponent.md)<!-- -->, see [ComponentManager.create()](/reference/componentmanager/create.md) on how to create a component


</td></tr>
<tr><td>

[CollisionEnterEvent](/reference/collisionenterevent.md)


</td><td>

Payload for the collision enter event; see {@<!-- -->link [Component3D.onCollisionEnter()](/reference/component3d/oncollisionenter.md)


</td></tr>
<tr><td>

[CollisionExitEvent](/reference/collisionexitevent.md)


</td><td>

Payload for the collision exit event; see {@<!-- -->link [Component3D.onCollisionExit()](/reference/component3d/oncollisionexit.md)


</td></tr>
<tr><td>

[ColorParam](/reference/colorparam.md)


</td><td>


</td></tr>
<tr><td>

[Component3DData](/reference/component3ddata.md)


</td><td>

Base class for all components data interfaces. It contains the common properties for all components


</td></tr>
<tr><td>

[ComponentOptions](/reference/componentoptions.md)


</td><td>


</td></tr>
<tr><td>

[ComponentParam](/reference/componentparam.md)


</td><td>

Component Params need to be initialized using the $Param.Component


</td></tr>
<tr><td>

[ContactPoint](/reference/contactpoint.md)


</td><td>


</td></tr>
<tr><td>

[ControlsFactoryOpts](/reference/controlsfactoryopts.md)


</td><td>


</td></tr>
<tr><td>

[CylinderParamsData](/reference/cylinderparamsdata.md)


</td><td>

Params for the  property

See [CylinderGeometry](https://threejs.org/docs/#api/en/geometries/CylinderGeometry)


</td></tr>
<tr><td>

[DefaultControlParams](/reference/defaultcontrolparams.md)


</td><td>


</td></tr>
<tr><td>

[DustComponentData](/reference/dustcomponentdata.md)


</td><td>

Data specification for [DustComponent](/reference/dustcomponent.md)<!-- -->, see [ComponentManager.create()](/reference/componentmanager/create.md) on how to create a component


</td></tr>
<tr><td>

[Folder](/reference/folder.md)


</td><td>


</td></tr>
<tr><td>

[FolderData](/reference/folderdata.md)


</td><td>


</td></tr>
<tr><td>

[GodrayComponentData](/reference/godraycomponentdata.md)


</td><td>

Data specification for [GodrayComponent](/reference/godraycomponent.md)<!-- -->, see [ComponentManager.create()](/reference/componentmanager/create.md) on how to create a component


</td></tr>
<tr><td>

[GroupParam](/reference/groupparam.md)


</td><td>

Group Params need to be initialized


</td></tr>
<tr><td>

[ImageComponentData](/reference/imagecomponentdata.md)


</td><td>

Data specification for [ImageComponent](/reference/imagecomponent.md)<!-- -->, see [ComponentManager.create()](/reference/componentmanager/create.md) on how to create a component


</td></tr>
<tr><td>

[JoinRoomOpts](/reference/joinroomopts.md)


</td><td>


</td></tr>
<tr><td>

[KitbashComponentData](/reference/kitbashcomponentdata.md)


</td><td>

Data specification for [KitBashComponent](/reference/kitbashcomponent.md)<!-- -->, see [ComponentManager.create()](/reference/componentmanager/create.md) on how to create a component


</td></tr>
<tr><td>

[MagneticFieldComponentData](/reference/magneticfieldcomponentdata.md)


</td><td>

Data specification for [MagneticFieldComponent](/reference/magneticfieldcomponent.md)<!-- -->, see [ComponentManager.create()](/reference/componentmanager/create.md) on how to create a component


</td></tr>
<tr><td>

[MapParam](/reference/mapparam.md)


</td><td>


</td></tr>
<tr><td>

[MeshComponentData](/reference/meshcomponentdata.md)


</td><td>

Data specification for [MeshComponent](/reference/meshcomponent.md)<!-- -->, see [ComponentManager.create()](/reference/componentmanager/create.md) on how to create a component


</td></tr>
<tr><td>

[MeshGeometryData](/reference/meshgeometrydata.md)


</td><td>

Geometry data for the [MeshComponentData.geometry](/reference/meshcomponentdata/geometry.md) property


</td></tr>
<tr><td>

[ModelComponentData](/reference/modelcomponentdata.md)


</td><td>

Data specification for [ModelComponent](/reference/modelcomponent.md)<!-- -->, see [ComponentManager.create()](/reference/componentmanager/create.md) on how to create a component


</td></tr>
<tr><td>

[NumberParam](/reference/numberparam.md)


</td><td>


</td></tr>
<tr><td>

[ParamDecl](/reference/paramdecl.md)


</td><td>


</td></tr>
<tr><td>

[PCActions](/reference/pcactions.md)


</td><td>


</td></tr>
<tr><td>

[PCJumpParams](/reference/pcjumpparams.md)


</td><td>


</td></tr>
<tr><td>

[PCRunParams](/reference/pcrunparams.md)


</td><td>


</td></tr>
<tr><td>

[PhysicsData](/reference/physicsdata.md)


</td><td>

This interface describes the data schema used to attach collision data to a component.

See [Component3DData.collider](/reference/component3ddata/collider.md)


</td></tr>
<tr><td>

[PlatformComponentData](/reference/platformcomponentdata.md)


</td><td>

Data specification for [PlatformComponent](/reference/platformcomponent.md)<!-- -->, see [ComponentManager.create()](/reference/componentmanager/create.md) on how to create a component


</td></tr>
<tr><td>

[PlatformerControlsWrapperParams](/reference/platformercontrolswrapperparams.md)


</td><td>


</td></tr>
<tr><td>

[PlayerAvatarOpts](/reference/playeravataropts.md)


</td><td>


</td></tr>
<tr><td>

[PlayerData](/reference/playerdata.md)


</td><td>



</td></tr>
<tr><td>

[PrefabResourceData](/reference/prefabresourcedata.md)


</td><td>


</td></tr>
<tr><td>

[PresetOptions](/reference/presetoptions.md)


</td><td>


</td></tr>
<tr><td>

[ProxyEmitter](/reference/proxyemitter.md)


</td><td>



</td></tr>
<tr><td>

[ReceiverOptions](/reference/receiveroptions.md)


</td><td>


</td></tr>
<tr><td>

[ReceiverParam](/reference/receiverparam.md)


</td><td>


</td></tr>
<tr><td>

[ResourceData](/reference/resourcedata.md)


</td><td>


</td></tr>
<tr><td>

[ResourceParam](/reference/resourceparam.md)


</td><td>

Resource Params need to be initialized using $Param.Resource


</td></tr>
<tr><td>

[Rpc](/reference/rpc.md)


</td><td>


</td></tr>
<tr><td>

[RpcOptions](/reference/rpcoptions.md)


</td><td>


</td></tr>
<tr><td>

[ScriptData](/reference/scriptdata.md)


</td><td>

Attach an identifier or a tag to a component, so that it can be easily accessed in the [ComponentManager.byId()](/reference/componentmanager/byid.md) or [ComponentManager.byTag()](/reference/componentmanager/bytag.md) methods


</td></tr>
<tr><td>

[SelectParam](/reference/selectparam.md)


</td><td>


</td></tr>
<tr><td>

[SensorEvent](/reference/sensorevent.md)


</td><td>


</td></tr>
<tr><td>

[ServerApi](/reference/serverapi.md)


</td><td>


</td></tr>
<tr><td>

[SignalOptions](/reference/signaloptions.md)


</td><td>


</td></tr>
<tr><td>

[SignalParam](/reference/signalparam.md)


</td><td>


</td></tr>
<tr><td>

[SphereParamsData](/reference/sphereparamsdata.md)


</td><td>

Params for the  property

See [SphereGeometry](https://threejs.org/docs/#api/en/geometries/SphereGeometry)


</td></tr>
<tr><td>

[StringParam](/reference/stringparam.md)


</td><td>


</td></tr>
<tr><td>

[Tagged](/reference/tagged.md)


</td><td>


</td></tr>
<tr><td>

[TextComponentData](/reference/textcomponentdata.md)


</td><td>

Data specification for [TextComponent](/reference/textcomponent.md)<!-- -->, see [ComponentManager.create()](/reference/componentmanager/create.md) on how to create a component


</td></tr>
<tr><td>

[ThirdPersonCameraControlsWrapperParams](/reference/thirdpersoncameracontrolswrapperparams.md)


</td><td>


</td></tr>
<tr><td>

[TriggerOptions](/reference/triggeroptions.md)


</td><td>


</td></tr>
<tr><td>

[TriggerParam](/reference/triggerparam.md)


</td><td>


</td></tr>
<tr><td>

[UnionParam](/reference/unionparam.md)


</td><td>


</td></tr>
<tr><td>

[Vec2Param](/reference/vec2param.md)


</td><td>


</td></tr>
<tr><td>

[Vec3Param](/reference/vec3param.md)


</td><td>


</td></tr>
<tr><td>

[VideoComponentData](/reference/videocomponentdata.md)


</td><td>

Data specification for [VideoComponent](/reference/videocomponent.md)<!-- -->, see [ComponentManager.create()](/reference/componentmanager/create.md) on how to create a component


</td></tr>
<tr><td>

[WaveComponentData](/reference/wavecomponentdata.md)


</td><td>

Data specification for [WaveComponent](/reference/wavecomponent.md)<!-- -->, see [ComponentManager.create()](/reference/componentmanager/create.md) on how to create a component


</td></tr>
<tr><td>

[WindComponentData](/reference/windcomponentdata.md)


</td><td>

Data specification for [WindComponent](/reference/windcomponent.md)<!-- -->, see [ComponentManager.create()](/reference/componentmanager/create.md) on how to create a component


</td></tr>
<tr><td>

[XYZ](/reference/xyz.md)


</td><td>

This is a shared interface used to represent various 3D coordinates in component data (position, rotation, scale ...)


</td></tr>
</tbody></table>

## Namespaces

<table><thead><tr><th>

Namespace


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[Folder](/reference/folder.md)


</td><td>


</td></tr>
<tr><td>

[Materials](/reference/materials.md)


</td><td>


</td></tr>
<tr><td>

[Plugins](/reference/plugins.md)


</td><td>


</td></tr>
<tr><td>

[Rpc](/reference/rpc.md)


</td><td>


</td></tr>
<tr><td>

[Utils](/reference/utils.md)


</td><td>


</td></tr>
</tbody></table>

## Variables

<table><thead><tr><th>

Variable


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[Ai](/reference/ai.md)


</td><td>


</td></tr>
<tr><td>

[Alert](/reference/alert.md)


</td><td>


</td></tr>
<tr><td>

[Bones](/reference/bones.md)


</td><td>



</td></tr>
<tr><td>

[Camera](/reference/camera.md)


</td><td>

Current camera instance, cf [MainCamera](/reference/maincamera.md) for more info


</td></tr>
<tr><td>

[CANVAS](/reference/canvas.md)


</td><td>


</td></tr>
<tr><td>

[Components](/reference/components.md)


</td><td>

Component manager for the current space, cf [ComponentManager](/reference/componentmanager.md) for more info


</td></tr>
<tr><td>

[Config](/reference/config.md)


</td><td>


</td></tr>
<tr><td>

[Controls](/reference/controls.md)


</td><td>

Use this to create controls for your game, cf [ControlsFactory](/reference/controlsfactory.md) for more info


</td></tr>
<tr><td>

[Emitter](/reference/emitter.md)


</td><td>

Use this to register listeners for events on the game (ready, update, etc)

See [Events](/reference/events.md) for the list of events you can listen to


</td></tr>
<tr><td>

[Env](/reference/env.md)


</td><td>

Provides access to the current script execution environment


</td></tr>
<tr><td>

[Events](/reference/events.md)


</td><td>

An object containing all the events that can listened from scripting.


</td></tr>
<tr><td>

[Formats](/reference/formats.md)


</td><td>


</td></tr>
<tr><td>

[GameClient](/reference/gameclient.md)


</td><td>

This is the main entry point for mulitplayer games on the frontend.

A Game client instance is used to join a game room on the server


</td></tr>
<tr><td>

[GameServer](/reference/gameserver.md)


</td><td>


</td></tr>
<tr><td>

[GameStorage](/reference/gamestorage.md)


</td><td>

The GameStorage instance is used to store and retrieve data from the game storage.


</td></tr>
<tr><td>

[IS\_PARAM\_VAL](/reference/is_param_val.md)


</td><td>


</td></tr>
<tr><td>

[OOOBjects](/reference/ooobjects.md)


</td><td>

Object containing helpers for creating meshes and materials in accordance with the internal pipeline of the engine


</td></tr>
<tr><td>

[OOUI](/reference/ooui.md)


</td><td>


</td></tr>
<tr><td>

[Page](/reference/page.md)


</td><td>


</td></tr>
<tr><td>

[PARAM\_KEY](/reference/param_key.md)


</td><td>


</td></tr>
<tr><td>

[Physics](/reference/physics.md)


</td><td>

Physics manager for the current space, cf [PhysicsRapierWrapper](/reference/physicsrapierwrapper.md) for more info


</td></tr>
<tr><td>

[Player](/reference/player.md)


</td><td>

Represents the main player entity on the game; cf [PlayerWrapper](/reference/playerwrapper.md) for more info


</td></tr>
<tr><td>

[Players](/reference/players.md)


</td><td>

Gives access to all player entities on the game; cd  for more info


</td></tr>
<tr><td>

[ResourceLoader](/reference/resourceloader.md)


</td><td>



</td></tr>
<tr><td>

[RPC\_KEY](/reference/rpc_key.md)


</td><td>


</td></tr>
<tr><td>

[SHARED](/reference/shared.md)


</td><td>


</td></tr>
<tr><td>

[UI](/reference/ui.md)


</td><td>



</td></tr>
<tr><td>

[UIApis](/reference/uiapis.md)


</td><td>


</td></tr>
<tr><td>

[Web3](/reference/web3.md)


</td><td>

Class representing Web3 functionalities.


</td></tr>
<tr><td>

[World](/reference/world.md)


</td><td>

Current space hosting the game, cf [Space](/reference/space.md) for more info


</td></tr>
</tbody></table>

## Type Aliases

<table><thead><tr><th>

Type Alias


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[Bone](/reference/bone.md)


</td><td>



</td></tr>
<tr><td>

[ColliderType](/reference/collidertype.md)


</td><td>


</td></tr>
<tr><td>

[ComponentTypes](/reference/componenttypes.md)


</td><td>



</td></tr>
<tr><td>

[ControlsParams](/reference/controlsparams.md)


</td><td>


</td></tr>
<tr><td>

[ControlsType](/reference/controlstype.md)


</td><td>


</td></tr>
<tr><td>

[Getter](/reference/getter.md)


</td><td>


</td></tr>
<tr><td>

[ParamOptions](/reference/paramoptions.md)


</td><td>


</td></tr>
<tr><td>

[RigidBodyType](/reference/rigidbodytype.md)


</td><td>


</td></tr>
<tr><td>

[ScriptParam](/reference/scriptparam.md)


</td><td>


</td></tr>
</tbody></table>
