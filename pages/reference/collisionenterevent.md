
## CollisionEnterEvent interface

Payload for the collision enter event; see {@<!-- -->link [Component3D.onCollisionEnter()](/reference/component3d/oncollisionenter.md)

**Signature:**

```typescript
export interface CollisionEnterEvent extends BaseIntersectionEvent 
```
**Extends:** [BaseIntersectionEvent](/reference/baseintersectionevent.md)

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

[contactPoints](/reference/collisionenterevent/contactpoints.md)


</td><td>

`readonly`


</td><td>

[ContactPoint](/reference/contactpoint.md)<!-- -->\[\]


</td><td>

Iterator over the contact points of the collision.


</td></tr>
</tbody></table>
