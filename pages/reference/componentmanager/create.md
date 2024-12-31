
## ComponentManager.create() method

create a new component of the given type. You can pass additional data that will be used to initialize the component.

**Signature:**

```typescript
create<T extends CType>(data: CreateComponentArg<T>, opts?: {
        abort?: AbortSignal;
        transient?: boolean;
        parent?: Object3D;
        sessionId?: string;
    }): Promise<ComponentTypeMap[T]>;
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

data


</td><td>

CreateComponentArg&lt;T&gt;


</td><td>


</td></tr>
<tr><td>

opts


</td><td>

{ abort?: AbortSignal; transient?: boolean; parent?: Object3D; sessionId?: string; }


</td><td>

_(Optional)_


</td></tr>
</tbody></table>
**Returns:**

Promise&lt;[ComponentTypeMap](/reference/componenttypes.md)<!-- -->\[T\]&gt;

a promise that resolves to the created component. The type of the returned component depends on the type of the component you created. For example a "model" component will return a ModelComponent.

## Example


```ts
 const component = await Components.create({
     type: "model",
     url: "https://example.com/model.glb",
     position: { x: 0, y: 0, z: 0 }
     rotation: { x: 0, y: 0, z: 0 }
     scale: { x: 1, y: 1, z: 1 }
 })
```
For the data format, see the documentation of the component you want to create.

