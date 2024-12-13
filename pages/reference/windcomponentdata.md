
## WindComponentData interface

Data specification for [WindComponent](/reference/windcomponent.md)<!-- -->, see [ComponentManager.create()](/reference/componentmanager/create.md) on how to create a component

**Signature:**

```typescript
export interface WindComponentData extends Component3DData 
```
**Extends:** [Component3DData](/reference/component3ddata.md)

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

[divisions?](/reference/windcomponentdata/divisions.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Higher values result in a more detailed mesh on the vertical axis. Defaults to 10


</td></tr>
<tr><td>

[height?](/reference/windcomponentdata/height.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Height of the wind spiral. Defaults to 40


</td></tr>
<tr><td>

[id?](/reference/windcomponentdata/id.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ if not provided, an auto id will be generated


</td></tr>
<tr><td>

[lineHeight?](/reference/windcomponentdata/lineheight.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Height of the spiral lines. Defaults to 7


</td></tr>
<tr><td>

[linewidth?](/reference/windcomponentdata/linewidth.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Width of the spiral lines. Defaults to 0.15


</td></tr>
<tr><td>

[name?](/reference/windcomponentdata/name.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ name for the component. Defaults to ""


</td></tr>
<tr><td>

[position?](/reference/windcomponentdata/position.md)


</td><td>


</td><td>

[XYZ](/reference/xyz.md)


</td><td>

_(Optional)_ Position of the component in the space. Defaults to {<!-- -->x: 0, y: 0, z: 0<!-- -->}


</td></tr>
<tr><td>

[radius?](/reference/windcomponentdata/radius.md)


</td><td>


</td><td>

number


</td><td>

_(Optional)_ Radius of the spiral. Defaults to 7


</td></tr>
<tr><td>

[type](/reference/windcomponentdata/type.md)


</td><td>


</td><td>

"wind"


</td><td>


</td></tr>
</tbody></table>
