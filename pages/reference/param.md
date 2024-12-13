
## $Param variable


**Signature:**

```typescript
$Param: {
    Resource: {
        <T extends keyof ResourceMap>(of: T): ResourceMap[T];
    };
    Component: {
        <T extends Component3D>(of: new () => T): T;
        <T extends keyof ComponentMap>(of: T): ComponentMap[T];
        (of: "any"): Component3D;
    };
    Signal: (opts?: SignalOptions) => SignalEmitter;
}
```
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

options


</td><td>

[ScriptParam](/reference/scriptparam.md)


</td><td>

_(Optional)_


</td></tr>
</tbody></table>
**Returns:**

any

