import { OperatorFunction } from 'rxjs/interfaces';
import { Action } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import * as routerActions from '../actions/router.actions';

export function ofRoute(route: string | string[]): OperatorFunction<Action, Action> {
    return filter((action: Action) => {
        const isRouteAction = action.type === routerActions.ROUTE_CHANGE;
        if (isRouteAction) {
            const routeAction = action as routerActions.RouteChange;
            const routePath = routeAction.payload.path;
            if (Array.isArray(route)) {
                return route.indexOf(routePath) > -1;
            } else {

                console.log('ofRoute: actualRoute: ', routePath, ', checkedRoute: ', route, ', equal: ', (routePath === route));

                return routePath === route;
            }
        }
        return isRouteAction;
    });
}

export function ofRouteExit(route: string): OperatorFunction<Action, Action> {
    return filter((action: Action) => {
        const isRouteAction = action.type === routerActions.ROUTE_CHANGE;
        if (isRouteAction) {
            const routeAction = action as routerActions.RouteChange;
            return routeAction.payload.previousPath === route  &&  routeAction.payload.path !== route;
        }
        return isRouteAction;
    });
}
