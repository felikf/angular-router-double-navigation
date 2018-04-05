import { Params } from '@angular/router';
import { RouterReducerState } from '@ngrx/router-store';

export interface RouterStateUrl {
    url: string;
    queryParams: Params;
}

export interface AppState {

    routerReducer: RouterReducerState<RouterStateUrl>;

}
