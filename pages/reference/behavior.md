
## Behavior() function

> Warning: This API is now obsolete.
> 
> use ScriptBehavior instead https://docs.oncyber.io/behaviors
> 
> Defines a script as a behavior that can be attached to components in the world to add functionality You can use Behaviors to add a variety of functionality to components like adding Examples include:
> 
> - Animating a component - Make the component follow the player - Attack the player when they get close
> 
> You can annotate the script class properties using `@Param` to make them editable in the studio
> 

**Signature:**

```typescript
export declare function Behavior(options: BehaviorOptions): ClassDecorator;
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

[BehaviorOptions](/reference/behavioroptions.md)


</td><td>


</td></tr>
</tbody></table>
**Returns:**

ClassDecorator

