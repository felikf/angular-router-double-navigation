import { createFeatureSelector } from '@ngrx/store' ;
import { ApplicationsState } from './applications.state' ;

export const selectApplicationsModule = createFeatureSelector<ApplicationsState>('applications');
