# Angular 5 application with NGRX 4 - demo of double ActivationEnd event


## Problem description

There are two modules
* applications - eager
* whitelist - lazy

with this routing:

```
    { path: '', pathMatch: 'full', component: MainComponent },
    { path: ModuleRoutingConstants.APPLICATIONS, loadChildren: () => ApplicationsModule },
    { path: ModuleRoutingConstants.WHITELIST, loadChildren: './modules/whitelist/whitelist.module#WhitelistModule'},
```

Issue:

* When there is navigation to `applications` route - only **one** navigation event is dispatched (see dev tools console)

```
### TEST: 2018-04-05T07:55:14.190Z Route Change:  => applications
```

* When there is navigation to `whitelist` route - there are two navigation events dispatched (see dev tools console)

```
### TEST: 2018-04-05T07:54:53.819Z Route Change:  =>
### TEST: 2018-04-05T07:54:53.823Z Route Change:  => whitelist
```

Also navigation within `whitelist` route causes double route event:

```
### TEST: 2018-04-05T07:58:39.784Z Route Change: whitelist => :contractID
### TEST: 2018-04-05T07:58:39.787Z Route Change: :contractID => whitelist
```

see `router.effects.ts` which are dispatching `Route Change` NGRX actions:

```typescript
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
```


## Usage:
* npm install
* npm run start

Open browser on `http://localhost:8080`

Navigate by clicking applications and whitelist