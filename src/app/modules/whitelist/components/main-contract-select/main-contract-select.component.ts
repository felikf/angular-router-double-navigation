import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as RouterActions from '../../../../core/actions/router.actions';
import { WhitelistState } from '../../whitelist.state';
import { ModuleRoutingConstants } from '../../../../core/helpers/module-routing.constants';

@Component({
    selector: 'ssf-main-contract-select',
    template: `
    <select name="test" id="test" (change)="onContractSelected($event.target.value)">
        <option value="aaa">aaa</option>
        <option value="bbb">bbb</option>
    </select>
    
    `,
})
export class MainContractSelectComponent {

    constructor(private store: Store<WhitelistState>) {
    }

    public onContractSelected(value): void {
        this.store.dispatch(
            new RouterActions.Go({
                path: [...ModuleRoutingConstants.WHITELIST_ROUTER, value]
            }));
    }

}
