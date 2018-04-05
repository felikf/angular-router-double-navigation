import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ApplicationsModule } from './modules/applications/applications.module';
import { ModuleRoutingConstants } from './core/helpers/module-routing.constants';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [

    { path: '', pathMatch: 'full', component: MainComponent },

    { path: ModuleRoutingConstants.APPLICATIONS, loadChildren: () => ApplicationsModule },

    { path: ModuleRoutingConstants.WHITELIST, loadChildren: './modules/whitelist/whitelist.module#WhitelistModule'},

];

@NgModule({
    imports: [ RouterModule.forRoot(routes, /*{ enableTracing: true }*/)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
