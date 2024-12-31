
## ImageComponent class

Image component, used to display images in the game (.png, .jpg, .jpeg)

See [ImageComponentData](/reference/imagecomponentdata.md) for the data schema used to create an image component

**Signature:**

```typescript
export declare class ImageComponent extends Component3D<ImageComponentData> 
```
**Extends:** [Component3D](/reference/component3d.md)<!-- -->&lt;[ImageComponentData](/reference/imagecomponentdata.md)<!-- -->&gt;

## Remarks

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `ImageComponent` class.

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

[\_changeCallbacks](/reference/imagecomponent/_changecallbacks.md)


</td><td>

`protected`


</td><td>

{ opacity: (value: any) =&gt; void; }


</td><td>


</td></tr>
<tr><td>

[magFilter](/reference/imagecomponent/magfilter.md)


</td><td>


</td><td>

string


</td><td>


</td></tr>
<tr><td>

[minFilter](/reference/imagecomponent/minfilter.md)


</td><td>


</td><td>

string


</td><td>


</td></tr>
<tr><td>

[opacity](/reference/imagecomponent/opacity.md)


</td><td>


</td><td>

number


</td><td>

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\* Public API \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*


</td></tr>
<tr><td>

[useMipMap](/reference/imagecomponent/usemipmap.md)


</td><td>


</td><td>

boolean


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

[\_getBBoxImp(target)](/reference/imagecomponent/_getbboximp.md)


</td><td>

`protected`


</td><td>


</td></tr>
<tr><td>

[\_onCreateCollisionMesh()](/reference/imagecomponent/_oncreatecollisionmesh.md)


</td><td>

`protected`


</td><td>


</td></tr>
<tr><td>

[dispose()](/reference/imagecomponent/dispose.md)


</td><td>

`protected`


</td><td>


</td></tr>
<tr><td>

[init()](/reference/imagecomponent/init.md)


</td><td>

`protected`


</td><td>


</td></tr>
</tbody></table>
