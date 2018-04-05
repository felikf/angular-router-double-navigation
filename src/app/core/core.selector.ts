import { createFeatureSelector } from '@ngrx/store';
import { CoreState } from './core.state';

// selectors
export const selectCoreModule = createFeatureSelector<CoreState>('core');
