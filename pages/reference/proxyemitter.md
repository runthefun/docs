
## ProxyEmitter interface


**Signature:**

```typescript
export interface ProxyEmitter<T extends Record<string, any[]>> 
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

[\_EMIT\_?](/reference/proxyemitter/_emit_.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ 


</td></tr>
<tr><td>

[emit?](/reference/proxyemitter/emit.md)


</td><td>


</td><td>

&lt;K extends keyof T &amp; string&gt;(name: K, ...args: T\[K\]) =&gt; void


</td><td>

_(Optional)_ 


</td></tr>
<tr><td>

[on](/reference/proxyemitter/on.md)


</td><td>


</td><td>

&lt;K extends keyof T &amp; string&gt;(name: K, callback: (...args: T\[K\]) =&gt; void) =&gt; () =&gt; void


</td><td>


</td></tr>
</tbody></table>
