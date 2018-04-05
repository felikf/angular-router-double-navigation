import { ActionReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

const storage = sessionStorage || window.sessionStorage;

/**
 * Reducer to persist Redux store in browser storage system.
 *
 * There is only one key persisted - `urlParams` - this is due to browser refresh (do not logout) functionality.
 */
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({keys: ['urlParams'], rehydrate: true, storage: storage})(reducer);
}
