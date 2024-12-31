
## ComponentManager class

A ComponentManager is a container for all the components of a space. It is responsible for creating, destroying and duplicating components.

**Signature:**

```typescript
export declare class ComponentManager extends AugmentedGroup 
```
**Extends:** AugmentedGroup

## Remarks

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `ComponentManager` class.

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

[\_isLoading](/reference/componentmanager/_isloading.md)


</td><td>


</td><td>

boolean


</td><td>

some scripts still use this


</td></tr>
<tr><td>

[components](/reference/componentmanager/components.md)


</td><td>

`readonly`


</td><td>

[Component3D](/reference/component3d.md)<!-- -->&lt;import("../../scripting").[Component3DData](/reference/component3ddata.md)<!-- -->&gt;\[\]


</td><td>


</td></tr>
<tr><td>

[loaded](/reference/componentmanager/loaded.md)


</td><td>

`readonly`


</td><td>

Promise&lt;void&gt;


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

[\_updateComponentTag(component, tag, prevTag)](/reference/componentmanager/_updatecomponenttag.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[addLoadTask(promise)](/reference/componentmanager/addloadtask.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[byId(id)](/reference/componentmanager/byid.md)


</td><td>


</td><td>

Returns a component by its id.


</td></tr>
<tr><td>

[byInternalId(id)](/reference/componentmanager/byinternalid.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[byName(name)](/reference/componentmanager/byname.md)


</td><td>


</td><td>

Returns all components with matching name.


</td></tr>
<tr><td>

[byTag(tag)](/reference/componentmanager/bytag.md)


</td><td>


</td><td>

Returns all component with matching tag. A tag is a string identifier that can be used to group components.


</td></tr>
<tr><td>

[byType(type)](/reference/componentmanager/bytype.md)


</td><td>


</td><td>

Returns all components with matching type.


</td></tr>
<tr><td>

[create(data, opts)](/reference/componentmanager/create.md)


</td><td>


</td><td>

create a new component of the given type. You can pass additional data that will be used to initialize the component.


</td></tr>
<tr><td>

[destroy(component)](/reference/componentmanager/destroy.md)


</td><td>


</td><td>

Removes the given component from the space.


</td></tr>
<tr><td>

[duplicate(component, opts)](/reference/componentmanager/duplicate.md)


</td><td>


</td><td>

Duplicates the given component.


</td></tr>
<tr><td>

[filter(f)](/reference/componentmanager/filter.md)


</td><td>


</td><td>

Returns all components satisfying the given filter function.


</td></tr>
<tr><td>

[find(f)](/reference/componentmanager/find.md)


</td><td>


</td><td>

Returns the first component satisfying the given filter function.


</td></tr>
<tr><td>

[forEach(f)](/reference/componentmanager/foreach.md)


</td><td>


</td><td>

Iterates over all components and calls the given function for each one.


</td></tr>
<tr><td>

[onSpaceLoaded(cb)](/reference/componentmanager/onspaceloaded.md)


</td><td>


</td><td>


</td></tr>
</tbody></table>
