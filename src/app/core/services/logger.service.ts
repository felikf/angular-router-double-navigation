import { Inject, Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

    constructor(@Inject('debug') private debug: boolean) {}

    /**
     * Logs to console.
     *
     * @param args logged parameters
     */
    public log(...args) {
        if (this.debug) {
            console.log(...['### TEST:', new Date().toISOString(), ...args]);
        }
    }

    /**
     * Warns to console.
     *
     * @param args logged parameters
     */
    public warn(...args) {
        console.warn(...['### TEST:', new Date().toISOString(), ...args]);
    }
}
