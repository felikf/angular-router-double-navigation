import { RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterStateUrl } from './router.state.interface';

/**
 * Custom Router State Serializer
 * During each navigation cycle, a RouterNavigationAction is dispatched with a snapshot of the state in its payload, the
 * RouterStateSnapshot. The RouterStateSnapshot is a large complex structure, containing many pieces of information
 * about the current state and what's rendered by the router. This can cause performance issues when used with the
 * Store Devtools. In most cases, you may only need a piece of information from the RouterStateSnapshot. In order to
 * pare down the RouterStateSnapshot provided during navigation, you provide a custom serializer for the snapshot to
 * only return what you need to be added to the payload and store.
 *
 * Additionally, the router state snapshot is a mutable object, which can cause issues when developing with store freeze
 * to prevent direct state mutations. This can be avoided by using a custom serializer.
 *
 * To use the time-traveling debugging in the Devtools, you must return an object containing the url when using the
 * routerReducer.
 *
 * see https://github.com/ngrx/platform/blob/master/docs/router-store/api.md#custom-router-state-serializer
 */
export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        const { url } = routerState;
        const queryParams = routerState.root.queryParams;

        // Only return an object including the URL and query params
        // instead of the entire snapshot
        return { url, queryParams };
    }
}
