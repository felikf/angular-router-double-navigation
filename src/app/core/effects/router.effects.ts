import { Injectable } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Effect, Actions } from '@ngrx/effects';
import * as RouterActions from '../actions/router.actions';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import * as routerActions from '../actions/router.actions';
import { LoggerService } from '../services/logger.service';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class RouterEffects {

    private previousPath: string;

    @Effect({ dispatch: false })
    navigate$ = this.actions$.ofType(RouterActions.GO)
        .map((action: RouterActions.Go) => action.payload)
        .do(({ path, query: queryParams, extras}) => this.router.navigate(path, { queryParams, ...extras }));

    @Effect({ dispatch: false })
    navigateBack$ = this.actions$.ofType(RouterActions.BACK)
        .do(() => this.location.back());

    @Effect({ dispatch: false })
    navigateForward$ = this.actions$.ofType(RouterActions.FORWARD)
        .do(() => this.location.forward());

    constructor(
        private actions$: Actions,
        private router: Router,
        private location: Location,
        private store: Store<AppState>,
        private logger: LoggerService
    ) {
        this.listenToRouter();
    }

    private listenToRouter() {
        this.router.events
            .filter(e => e instanceof ActivationEnd)
            .subscribe((event: ActivationEnd) => {

                // const url = event.snapshot._routerState.url
                this.logger.log(`Route Change: ${this.previousPath} => ${event.snapshot.routeConfig.path}`);

                this.store.dispatch(new routerActions.RouteChange({
                    params: { ...event.snapshot.params },
                    queryParams: { ...event.snapshot.queryParams },
                    path: event.snapshot.routeConfig.path,
                    previousPath: this.previousPath
                }));

                this.previousPath = event.snapshot.routeConfig.path;
            });
    }
}
