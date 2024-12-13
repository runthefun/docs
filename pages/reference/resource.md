
## Resource class

**Signature:**

```typescript
export declare class Resource<Data extends ResourceData = ResourceData> 
```

## Constructors

<table><thead><tr><th>

Constructor


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[(constructor)(opts)](/reference/resource/_constructor_.md)


</td><td>


</td><td>

Constructs a new instance of the `Resource` class


</td></tr>
</tbody></table>

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

[\_data](/reference/resource/_data.md)


</td><td>

`protected`


</td><td>

Data


</td><td>


</td></tr>
<tr><td>

[\_resourceFactory](/reference/resource/_resourcefactory.md)


</td><td>


</td><td>

ResourceFactory&lt;any&gt;


</td><td>


</td></tr>
<tr><td>

[\_state](/reference/resource/_state.md)


</td><td>

`protected`


</td><td>

ResourceState


</td><td>


</td></tr>
<tr><td>

[base](/reference/resource/base.md)


</td><td>

`readonly`


</td><td>

any


</td><td>


</td></tr>
<tr><td>

[data](/reference/resource/data.md)


</td><td>

`readonly`


</td><td>

Data


</td><td>


</td></tr>
<tr><td>

[hasComponentFactory](/reference/resource/hascomponentfactory.md)


</td><td>

`readonly`


</td><td>

boolean


</td><td>


</td></tr>
<tr><td>

[id](/reference/resource/id.md)


</td><td>

`readonly`


</td><td>

string


</td><td>


</td></tr>
<tr><td>

[isComponent](/reference/resource/iscomponent.md)


</td><td>

`readonly`


</td><td>

boolean


</td><td>


</td></tr>
<tr><td>

[parent](/reference/resource/parent.md)


</td><td>

`readonly`


</td><td>

any


</td><td>


</td></tr>
<tr><td>

[space](/reference/resource/space.md)


</td><td>

`readonly`


</td><td>

[Space](/reference/space.md)


</td><td>


</td></tr>
<tr><td>

[state](/reference/resource/state.md)


</td><td>

`readonly`


</td><td>

ResourceState


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

[dependsOn(resource)](/reference/resource/dependson.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[destroy()](/reference/resource/destroy.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[dispose()](/reference/resource/dispose.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[getDependentResources()](/reference/resource/getdependentresources.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[getDirectInstances()](/reference/resource/getdirectinstances.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[getInstances()](/reference/resource/getinstances.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[getRequiredResources()](/reference/resource/getrequiredresources.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[hasDependentComponents()](/reference/resource/hasdependentcomponents.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[hasDependentResources()](/reference/resource/hasdependentresources.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[hasReferences()](/reference/resource/hasreferences.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[isDirectTypeOf(data)](/reference/resource/isdirecttypeof.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[isPrefab()](/reference/resource/isprefab.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[isRefByComponent(data)](/reference/resource/isrefbycomponent.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[isRefByResource(r)](/reference/resource/isrefbyresource.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[isScript()](/reference/resource/isscript.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[isTypeOf(data)](/reference/resource/istypeof.md)


</td><td>


</td><td>


</td></tr>
<tr><td>

[onDispose()](/reference/resource/ondispose.md)


</td><td>


</td><td>


</td></tr>
</tbody></table>
