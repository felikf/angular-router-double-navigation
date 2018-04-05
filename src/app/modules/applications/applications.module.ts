import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationsRoutingModule } from './applications-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { applications } from './applications.store';
import { FormsModule } from '@angular/forms';
import { ApplicationsComponent } from './components/applications/applications.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CoreModule, createTranslateLoader } from '../../core/core.module';
import { StoreModule } from '@ngrx/store';


@NgModule({
    imports: [
        CoreModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        ApplicationsRoutingModule,
        StoreModule.forFeature('applications', applications ),
    ],
    declarations: [
        ApplicationsComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule
    ],
    entryComponents: [
    ],
})
export class ApplicationsModule {}
