import { ActionReducer } from '@ngrx/store';

/**
 * Create a higher order reducer or meta reducer to reset / clean state after logout action.
 */
export function createClearReducer(actionType: string) {
    return function clear(reducer: ActionReducer<any>): ActionReducer<any> {
        return function(state: any, action: any): any {
            switch (action.type) {
                case actionType:
                    state = undefined;
            }

            return reducer(state, action);
        };
    };
}

