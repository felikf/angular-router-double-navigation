import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { routerReducer } from '@ngrx/router-store';

export const reducers: ActionReducerMap<AppState> = {
    routerReducer
};
