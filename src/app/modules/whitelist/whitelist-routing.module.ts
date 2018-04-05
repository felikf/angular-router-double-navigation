import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { WhitelistComponent } from './components/whitelist/whitelist.component';
import { ModuleRoutingConstants } from '../../core/helpers/module-routing.constants';

const routes: Routes = [
    { path: '', component: WhitelistComponent },
    { path: ModuleRoutingConstants.WHITELIST_CONTRACT, component: WhitelistComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class WhitelistRoutingModule {}

