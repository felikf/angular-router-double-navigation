import { NgModule } from '@angular/core';
import { WhitelistComponent } from './components/whitelist/whitelist.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CoreModule, createTranslateLoader } from '../../core/core.module';
import { WhitelistRoutingModule } from './whitelist-routing.module';
import { whitelist } from './whitelist.store';
import { MainContractSelectComponent } from './components/main-contract-select/main-contract-select.component';

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
        WhitelistRoutingModule,
        StoreModule.forFeature('whitelist', whitelist )
    ],
    declarations: [
        WhitelistComponent,
        MainContractSelectComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
    ],
    entryComponents: [
    ],
    providers: [
    ]
})
export class WhitelistModule {}
