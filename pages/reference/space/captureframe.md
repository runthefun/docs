
## Space.captureFrame() method

Takes a screenshot of the current frame. Returns a promise that resolves to the data URL of the screenshot.

**Signature:**

```typescript
captureFrame(opts?: {
        width?: number;
        height?: number;
    }): Promise<string>;
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

opts


</td><td>

{ width?: number; height?: number; }


</td><td>

_(Optional)_ Options for the screenshot


</td></tr>
</tbody></table>
**Returns:**

Promise&lt;string&gt;

