import { HttpClient, HttpParams, HttpClientModule } from '@angular/common/http';
import { Version, Injectable, NgModule, defineInjectable, inject } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const VERSION = new Version('1.0.0-e2e6e12-e2e6e12');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SimpleHttpService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * Constructs and sends a HTTP DELETE request
     * @deprecated Use {\@link SimpleHttpService#sendHttpDelete}
     * @template P, R
     * @param {?} apiEndpoint The API endpoint
     * @param {?} apiParams Parameters to append to the API endpoint
     * @param {?=} apiHeaders HTTP headers to append to the request
     * @return {?} A `HttpClient` instance
     */
    createHttpDelete(apiEndpoint, apiParams, apiHeaders = null) {
        return this.sendHttpDelete(apiEndpoint, apiParams, apiHeaders);
    }
    /**
     * Constructs and sends a HTTP DELETE request
     * @template P, R
     * @param {?} apiEndpoint The API endpoint
     * @param {?} apiParams Parameters to append to the API endpoint
     * @param {?=} apiHeaders HTTP headers to append to the request
     * @return {?} A `HttpClient` instance
     */
    sendHttpDelete(apiEndpoint, apiParams, apiHeaders = null) {
        /** @type {?} */
        let params = new HttpParams();
        for (const prop in apiParams) {
            if (prop in apiParams && typeof apiParams[prop] !== undefined && apiParams[prop] !== null) {
                params = params.append(prop, apiParams[prop]);
            }
        }
        if (apiHeaders) {
            return this.http.delete(apiEndpoint, {
                params: params,
                headers: apiHeaders
            });
        }
        else {
            return this.http.delete(apiEndpoint, {
                params: params
            });
        }
    }
    /**
     * Constructs and sends a HTTP GET request
     * @deprecated Use {\@link SimpleHttpService#sendHttpGet}
     * @template P, R
     * @param {?} apiEndpoint The API endpoint
     * @param {?} apiParams Parameters to append to the API endpoint
     * @param {?=} apiHeaders HTTP headers to append to the request
     * @return {?} A `HttpClient` instance
     */
    createHttpGet(apiEndpoint, apiParams, apiHeaders = null) {
        return this.sendHttpGet(apiEndpoint, apiParams, apiHeaders);
    }
    /**
     * Constructs and sends a HTTP GET request
     * @template P, R
     * @param {?} apiEndpoint The API endpoint
     * @param {?} apiParams Parameters to append to the API endpoint
     * @param {?=} apiHeaders HTTP headers to append to the request
     * @return {?} A `HttpClient` instance
     */
    sendHttpGet(apiEndpoint, apiParams, apiHeaders = null) {
        /** @type {?} */
        let params = new HttpParams();
        for (const prop in apiParams) {
            if (prop in apiParams && typeof apiParams[prop] !== undefined && apiParams[prop] !== null) {
                params = params.append(prop, apiParams[prop]);
            }
        }
        if (apiHeaders) {
            return this.http.get(apiEndpoint, {
                params: params,
                headers: apiHeaders
            });
        }
        else {
            return this.http.get(apiEndpoint, {
                params: params
            });
        }
    }
    /**
     * Constructs and sends a HTTP POST request
     * @deprecated Use {\@link SimpleHttpService#sendHttpPost}
     * @template B, P, R
     * @param {?} apiEndpoint The API endpoint
     * @param {?} apiParams Parameters to append to the API endpoint
     * @param {?=} apiBody The request body
     * @param {?=} apiHeaders HTTP headers to append to the request
     * @return {?} A `HttpClient` instance
     */
    createHttpPost(apiEndpoint, apiParams, apiBody = null, apiHeaders = null) {
        return this.sendHttpPost(apiEndpoint, apiParams, apiBody, apiHeaders);
    }
    /**
     * Constructs and sends a HTTP POST request
     * @template B, P, R
     * @param {?} apiEndpoint The API endpoint
     * @param {?} apiParams Parameters to append to the API endpoint
     * @param {?=} apiBody The request body
     * @param {?=} apiHeaders HTTP headers to append to the request
     * @return {?} A `HttpClient` instance
     */
    sendHttpPost(apiEndpoint, apiParams, apiBody = null, apiHeaders = null) {
        /** @type {?} */
        let params = new HttpParams();
        for (const prop in apiParams) {
            if (prop in apiParams && typeof apiParams[prop] !== undefined && apiParams[prop] !== null) {
                params = params.append(prop, apiParams[prop]);
            }
        }
        if (apiHeaders) {
            if (apiBody) {
                return this.http.post(apiEndpoint, apiBody, {
                    params: params,
                    headers: apiHeaders
                });
            }
            else {
                return this.http.post(apiEndpoint, apiBody, {
                    params: params,
                    headers: apiHeaders
                });
            }
        }
        else {
            if (apiBody) {
                return this.http.post(apiEndpoint, apiBody, {
                    params: params
                });
            }
            else {
                return this.http.post(apiEndpoint, {
                    params: params
                });
            }
        }
    }
    /**
     * Constructs and sends a HTTP PUT request
     * @template B, P, R
     * @param {?} apiEndpoint The API endpoint
     * @param {?} apiParams Parameters to append to the API endpoint
     * @param {?} apiBody The request body
     * @param {?=} apiHeaders HTTP headers to append to the request
     * @return {?} A `HttpClient` instance
     */
    createHttpPut(apiEndpoint, apiParams, apiBody, apiHeaders = null) {
        return this.sendHttpPut(apiEndpoint, apiParams, apiBody, apiHeaders);
    }
    /**
     * Constructs and sends a HTTP PUT request
     * @template B, P, R
     * @param {?} apiEndpoint The API endpoint
     * @param {?} apiParams Parameters to append to the API endpoint
     * @param {?} apiBody The request body
     * @param {?=} apiHeaders HTTP headers to append to the request
     * @return {?} A `HttpClient` instance
     */
    sendHttpPut(apiEndpoint, apiParams, apiBody, apiHeaders = null) {
        /** @type {?} */
        let params = new HttpParams();
        for (const prop in apiParams) {
            if (prop in apiParams && typeof apiParams[prop] !== undefined && apiParams[prop] !== null) {
                params = params.append(prop, apiParams[prop]);
            }
        }
        if (apiHeaders) {
            return this.http.put(apiEndpoint, apiBody, {
                params: params,
                headers: apiHeaders
            });
        }
        else {
            return this.http.put(apiEndpoint, apiBody, {
                params: params
            });
        }
    }
}
SimpleHttpService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SimpleHttpService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ SimpleHttpService.ngInjectableDef = defineInjectable({ factory: function SimpleHttpService_Factory() { return new SimpleHttpService(inject(HttpClient)); }, token: SimpleHttpService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SimpleHttpModule {
}
SimpleHttpModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    HttpClientModule
                ],
                providers: [
                    SimpleHttpService
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { VERSION, SimpleHttpModule, SimpleHttpService };

//# sourceMappingURL=ngx-simple-http.js.map