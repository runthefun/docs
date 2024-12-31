
## ClientProvider.\_send() method

**Signature:**

```typescript
_send(payload: any): Promise<{
        id: any;
        result: any;
    }[] | {
        id: any;
        error: {
            code: any;
            data: any;
            message: any;
        };
    }[]>;
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

payload


</td><td>

any


</td><td>


</td></tr>
</tbody></table>
**Returns:**

Promise&lt;{ id: any; result: any; }\[\] \| { id: any; error: { code: any; data: any; message: any; }; }\[\]&gt;

