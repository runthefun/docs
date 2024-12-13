
## PlatformerControlsWrapperParams interface

**Signature:**

```typescript
export interface PlatformerControlsWrapperParams 
```

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

[autoAnimate?](/reference/platformercontrolswrapperparams/autoanimate.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ whether to automatically apply the corresponding animation to the attached object This applies only when the attached object is an avatar component


</td></tr>
<tr><td>

[jump?](/reference/platformercontrolswrapperparams/jump.md)


</td><td>


</td><td>

[PCJumpParams](/reference/pcjumpparams.md)


</td><td>

_(Optional)_ Params to controls the jump of the character of the target object

- height: the height of the jump

- duration: the duration of the jump


</td></tr>
<tr><td>

[run?](/reference/platformercontrolswrapperparams/run.md)


</td><td>


</td><td>

[PCRunParams](/reference/pcrunparams.md)


</td><td>

_(Optional)_ Params to controls walking and running of the target object

- maxSpeed : the walking speed of the character

- boost: how much to speedup the character when running, this is activated when the user presses the shift key


</td></tr>
</tbody></table>
