
## ResourceParam interface

Resource Params need to be initialized using $Param.Resource

**Signature:**

```typescript
export interface ResourceParam extends AbstractParam 
```
**Extends:** [AbstractParam](/reference/abstractparam.md)

## Example

@<!-- -->Param() myAudio = $Param.Resource("audio")

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

[required?](/reference/resourceparam/required.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_


</td></tr>
<tr><td>

[type?](/reference/resourceparam/type.md)


</td><td>


</td><td>

"resource"


</td><td>

_(Optional)_


</td></tr>
<tr><td>

[typeof?](/reference/resourceparam/typeof.md)


</td><td>


</td><td>

string \| any


</td><td>

_(Optional)_


</td></tr>
</tbody></table>
