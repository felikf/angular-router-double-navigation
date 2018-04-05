import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';
import { Params } from '@angular/router/src/shared';

export const GO = '[Router] Go';
export const BACK = '[Router] Back';
export const FORWARD = '[Router] Forward';
export const ROUTE_CHANGE = '[Router] Route Change';

export class Go implements Action {
    readonly type = GO;

    constructor(public payload: {
        path: any[];
        query?: object;
        extras?: NavigationExtras;
    }) {}
}

export class Back implements Action {
    readonly type = BACK;
}

export class Forward implements Action {
    readonly type = FORWARD;
}

/**
 * Action payload for RouteChange action.
 */
export type RouteChangePayload = {
    params: Params,
    queryParams: Params,
    path: string,
    previousPath: string
};

/**
 * Special action invoked when router navigation ends - preserving guard order.
 * See https://medium.com/@amcdnl/angular-routing-data-with-ngrx-effects-1cda1bd5e579
 * or https://stackoverflow.com/questions/47202946/angular-router-guard-and-router-navigation-effect-order
 */
export class RouteChange implements Action {
    readonly type = ROUTE_CHANGE;
    constructor(public payload: RouteChangePayload) {}
}

export type Actions
    = Go
    | Back
    | Forward
    | RouteChange;
