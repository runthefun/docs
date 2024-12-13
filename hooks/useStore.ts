//
import { useSyncExternalStore } from "react";

import { Draft, produce } from "immer";

type Callback = () => void;

export class Store<State, Actions = {}> {
    //
    private callbacks: Set<Callback> = new Set();

    constructor(
        private _state: State,
        public actions?: Actions
    ) {}

    public getState = () => this._state;

    public subscribe = (cb: Callback) => {
        //
        this.callbacks.add(cb);

        return () => {
            this.callbacks.delete(cb);
        };
    };

    public get state() {
        //
        return this._state;
    }

    public notify = () => {
        this.callbacks.forEach((cb) => {
            cb();
        });
    };

    public update = (fn: (state: Draft<State>) => void) => {
        //
        this._state = produce(this.state, fn);

        this.notify();
    };
}

export function useStore<T, AS>(store: Store<T, AS>) {
    //
    const state = useSyncExternalStore(
        store.subscribe,
        store.getState,
        store.getState
    );

    return {
        state,
        update: store.update,
    };
}
