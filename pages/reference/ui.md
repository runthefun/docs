
## UI variable


**Signature:**

```typescript
UI: {
    getRoot(container?: HTMLElement): {
        render: (element: any) => void;
        unmount: () => void;
    };
    createRenderer(): {
        unmount: () => void;
        render: (node: ReactNode) => boolean;
        renderSync: (node: ReactNode) => boolean;
        renderTransition: (node: ReactNode) => boolean;
    };
}
```
