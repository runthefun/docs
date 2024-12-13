
## UIApis variable

**Signature:**

```typescript
UIApis: {
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
    };
    Store: typeof Store;
    useStore: typeof useStore;
}
```
