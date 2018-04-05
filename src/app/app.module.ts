import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { RouterEffects } from './core/effects/router.effects';
import { CustomSerializer } from './core/router/custom-serializer';
import { reducers } from './app.store';
import { CoreModule, createTranslateLoader } from './core/core.module';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AppNavigationComponent } from './components/app-navigation/app-navigation.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule, PaginationModule, TypeaheadModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ApplicationsModule } from './modules/applications/applications.module';
import { MainComponent } from './components/main/main.component';


@NgModule({
    imports: [
        ApplicationsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
        CoreModule.forRoot(),
        AlertModule.forRoot(),
        BsDropdownModule.forRoot(),
        BsDatepickerModule.forRoot(),
        PopoverModule.forRoot(),
        TooltipModule.forRoot(),
        ModalModule.forRoot(),
        PaginationModule.forRoot(),
        TypeaheadModule.forRoot(),
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot(reducers ),
        EffectsModule.forRoot([
            RouterEffects
        ]),
        StoreRouterConnectingModule
    ],
    declarations: [
        AppComponent,
        AppNavigationComponent,
        MainComponent
    ],
    providers: [
        { provide: RouterStateSerializer, useClass: CustomSerializer },
        { provide: 'debug', useValue: true } // messages display time in milliseconds
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
