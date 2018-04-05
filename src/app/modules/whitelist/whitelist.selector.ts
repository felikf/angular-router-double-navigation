import { createFeatureSelector } from '@ngrx/store';
import { WhitelistState } from './whitelist.state';

export const selectWhitelistModule = createFeatureSelector<WhitelistState>('whitelist');
