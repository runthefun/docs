
## PrefabResource.instantiate() method

**Signature:**

```typescript
instantiate(opts: {
        parent?: Component3D;
        abort?: AbortSignal;
    }): Promise<import("../../../scripting").ModelComponent | import("../../../scripting").AudioComponent | import("../../components/dialog/dialogcomponent").DialogComponent | import("../../components/iframe/iframecomponent").IframeComponent | import("../../../scripting").VideoComponent | import("../../../scripting").TerrainComponent | import("../../../scripting").EnvmapComponent | import("../../../scripting").BackgroundComponent | import("../../../scripting").LightingComponent | import("../../../scripting").TextComponent | import("../../../scripting").FogComponent | import("../../components/camera/cameracomponent").CameraComponent | import("../../../scripting").MeshComponent | import("../../../scripting").ImageComponent | import("../../../scripting").WaterComponent | import("../../../scripting").PostProcessingComponent | import("../../../scripting").ReflectorComponent | import("../../../scripting").RainComponent | import("../../../scripting").SpawnComponent | import("../../components/vrmanims/vrmanimscomponent").VRMAnimsComponent | import("../../../scripting").WindComponent | import("../../../scripting").KitBashComponent | import("../../../scripting").AvatarComponent | import("../../../scripting").MagneticFieldComponent | import("../../../scripting").PlatformComponent | import("../../../scripting").CloudComponent | import("../../components/circle/circlecomponent").CircleComponent | import("../../../scripting").BulletComponent | import("../../../scripting").GodrayComponent | import("../../../scripting").BirdComponent | import("../../components/birdstatic/birdstaticcomponent").BirdStaticComponent | import("../../components/grass/grasscomponent").GrassComponent | import("../../../scripting").ShadowFloorComponent | import("../../../scripting").DustComponent | import("../../components/impact/impactcomponent").ImpactComponent | import("../../components/destination/destinationcomponent").DestinationComponent | import("../../components/interaction/interactioncomponent").InteractionComponent | import("../../components/scatter/scattercomponent").ScatterComponent | import("../../components/scattermesh/scattermeshcomponent").ScatterMeshComponent | import("../../components/instancedmesh/instancedmeshcomponent").InstancedMeshComponent | import("../../components/portal/portalcomponent").PortalComponent | import("../../components/spline/splinecomponent").SplineComponent | import("../../components/cache/cachecomponent").CacheComponent | import("../../components/agora/component").AgoraComponent | import("../../components/batch/batchcomponent").BatchComponent | import("../../components/group/groupcomponent").GroupComponent>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

opts


</td><td>

{ parent?: [Component3D](/reference/component3d.md)<!-- -->; abort?: AbortSignal; }


</td><td>


</td></tr>
</tbody></table>
**Returns:**

Promise&lt;import("../../../scripting").[ModelComponent](/reference/modelcomponent.md) \| import("../../../scripting").[AudioComponent](/reference/audiocomponent.md) \| import("../../components/dialog/dialogcomponent").DialogComponent \| import("../../components/iframe/iframecomponent").IframeComponent \| import("../../../scripting").[VideoComponent](/reference/videocomponent.md) \| import("../../../scripting").[TerrainComponent](/reference/terraincomponent.md) \| import("../../../scripting").[EnvmapComponent](/reference/envmapcomponent.md) \| import("../../../scripting").[BackgroundComponent](/reference/backgroundcomponent.md) \| import("../../../scripting").[LightingComponent](/reference/lightingcomponent.md) \| import("../../../scripting").[TextComponent](/reference/textcomponent.md) \| import("../../../scripting").[FogComponent](/reference/fogcomponent.md) \| import("../../components/camera/cameracomponent").CameraComponent \| import("../../../scripting").[MeshComponent](/reference/meshcomponent.md) \| import("../../../scripting").[ImageComponent](/reference/imagecomponent.md) \| import("../../../scripting").[WaterComponent](/reference/watercomponent.md) \| import("../../../scripting").[PostProcessingComponent](/reference/postprocessingcomponent.md) \| import("../../../scripting").[ReflectorComponent](/reference/reflectorcomponent.md) \| import("../../../scripting").[RainComponent](/reference/raincomponent.md) \| import("../../../scripting").[SpawnComponent](/reference/spawncomponent.md) \| import("../../components/vrmanims/vrmanimscomponent").VRMAnimsComponent \| import("../../../scripting").[WindComponent](/reference/windcomponent.md) \| import("../../../scripting").[KitBashComponent](/reference/kitbashcomponent.md) \| import("../../../scripting").[AvatarComponent](/reference/avatarcomponent.md) \| import("../../../scripting").[MagneticFieldComponent](/reference/magneticfieldcomponent.md) \| import("../../../scripting").[PlatformComponent](/reference/platformcomponent.md) \| import("../../../scripting").[CloudComponent](/reference/cloudcomponent.md) \| import("../../components/circle/circlecomponent").CircleComponent \| import("../../../scripting").[BulletComponent](/reference/bulletcomponent.md) \| import("../../../scripting").[GodrayComponent](/reference/godraycomponent.md) \| import("../../../scripting").[BirdComponent](/reference/birdcomponent.md) \| import("../../components/birdstatic/birdstaticcomponent").BirdStaticComponent \| import("../../components/grass/grasscomponent").GrassComponent \| import("../../../scripting").[ShadowFloorComponent](/reference/shadowfloorcomponent.md) \| import("../../../scripting").[DustComponent](/reference/dustcomponent.md) \| import("../../components/impact/impactcomponent").ImpactComponent \| import("../../components/destination/destinationcomponent").DestinationComponent \| import("../../components/interaction/interactioncomponent").InteractionComponent \| import("../../components/scatter/scattercomponent").ScatterComponent \| import("../../components/scattermesh/scattermeshcomponent").ScatterMeshComponent \| import("../../components/instancedmesh/instancedmeshcomponent").InstancedMeshComponent \| import("../../components/portal/portalcomponent").PortalComponent \| import("../../components/spline/splinecomponent").SplineComponent \| import("../../components/cache/cachecomponent").CacheComponent \| import("../../components/agora/component").AgoraComponent \| import("../../components/batch/batchcomponent").BatchComponent \| import("../../components/group/groupcomponent").GroupComponent&gt;

