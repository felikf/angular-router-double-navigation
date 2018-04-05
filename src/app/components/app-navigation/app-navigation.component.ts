import { Component } from '@angular/core';
import { ModuleRoutingConstants } from '../../core/helpers/module-routing.constants';

@Component({
    selector: 'ssf-app-navigation',
    templateUrl: './app-navigation.component.html'
})
export class AppNavigationComponent {

    /**
     * To be available in HTML template.
     */
    public ModuleRoutingConstants = ModuleRoutingConstants;

}
