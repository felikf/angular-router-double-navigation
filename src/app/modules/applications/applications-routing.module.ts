import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ApplicationsComponent } from './components/applications/applications.component';

const routes: Routes = [
    { path: 'applications', component: ApplicationsComponent }

];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class ApplicationsRoutingModule {}

