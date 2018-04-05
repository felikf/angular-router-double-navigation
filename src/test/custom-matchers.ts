import { TestRequest } from '@angular/common/http/testing';

/**
 * https://stackoverflow.com/questions/42956195/create-custom-jasmine-matcher-using-typescript
 * https://stackoverflow.com/questions/43787900/how-do-i-add-a-jasmine-custom-matcher-typescript-definition
 */
export const customMatchers = {

    /**
     * Custom matcher that checks a request that:
     * - contains all defined headers
     * - all defined headers have given value
     *
     * Expected type is a map of string to string value, for example:
     * {
     *     'Authorization': 'Bearer access_token from spec',
     *     'WEB-API-Key': 'test-web-api-key',
     *     'Pragma': 'no-cache',
     *     'Accept-Language': 'cs'
     * }
     */
    toContainHeaders: function () {
        return {
            compare: function (actual: TestRequest, expected: any) {

                let message = '';

                let result = Object.keys(expected).every(requiredHeader => {
                        const headerPresent = actual.request.headers.keys().some(header => requiredHeader === header);

                        const actualHeaderValue = actual.request.headers.get(requiredHeader);
                        const expectedHeaderValue = expected[requiredHeader];

                        if (!headerPresent) {
                            message = 'Missing headers in request: ' + Object.keys(expected).filter(h => actual.request.headers.keys().indexOf(h) <= -1);
                        } else if (actualHeaderValue !== expectedHeaderValue) {
                            message = `Header ${requiredHeader} should have value: ${expectedHeaderValue}, actual value: ${actualHeaderValue}`;
                        }

                        return headerPresent  &&  actualHeaderValue === expectedHeaderValue;
                    }
                );

                return {
                    pass: result,
                    message: message
                };
            }
        };
    }
};
