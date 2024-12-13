
## ComponentParam interface

Component Params need to be initialized using the $Param.Component

**Signature:**

```typescript
export interface ComponentParam extends AbstractParam 
```
**Extends:** [AbstractParam](/reference/abstractparam.md)

## Example 1

@<!-- -->Param() myAudio = $Param.Component("audio")

## Example 2

@<!-- -->Param() myComponent = $Param.Component(MyCustomComponent)

## Example 3

@<!-- -->Param() myComponent = $Param.Component("any")

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

[required?](/reference/componentparam/required.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_


</td></tr>
<tr><td>

[type?](/reference/componentparam/type.md)


</td><td>


</td><td>

"component"


</td><td>

_(Optional)_


</td></tr>
<tr><td>

[typeof?](/reference/componentparam/typeof.md)


</td><td>


</td><td>

string \| any


</td><td>

_(Optional)_


</td></tr>
</tbody></table>
