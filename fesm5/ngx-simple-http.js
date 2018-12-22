import { HttpClient, HttpParams, HttpClientModule } from '@angular/common/http';
import { Version, Injectable, NgModule, defineInjectable, inject } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var VERSION = new Version('1.0.0-c882dbd-c882dbd');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SimpleHttpService = /** @class */ (function () {
    function SimpleHttpService(http) {
        this.http = http;
    }
    /**
     * Generates the query parameters to be used for a HTTP DELETE request
     * @param apiEndpoint The API endpoint
     * @param apiParams Parameters to append to the API endpoint
     * @param apiHeaders HTTP headers to append to the request
     * @return A `HttpClient` instance
     */
    /**
     * Generates the query parameters to be used for a HTTP DELETE request
     * @template P, R
     * @param {?} apiEndpoint The API endpoint
     * @param {?} apiParams Parameters to append to the API endpoint
     * @param {?=} apiHeaders HTTP headers to append to the request
     * @return {?} A `HttpClient` instance
     */
    SimpleHttpService.prototype.createHttpDelete = /**
     * Generates the query parameters to be used for a HTTP DELETE request
     * @template P, R
     * @param {?} apiEndpoint The API endpoint
     * @param {?} apiParams Parameters to append to the API endpoint
     * @param {?=} apiHeaders HTTP headers to append to the request
     * @return {?} A `HttpClient` instance
     */
    function (apiEndpoint, apiParams, apiHeaders) {
        if (apiHeaders === void 0) { apiHeaders = null; }
        /** @type {?} */
        var params = new HttpParams();
        for (var prop in apiParams) {
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
    };
    /**
     * Generates the query parameters to be used for a HTTP GET request
     * @param apiEndpoint The API endpoint
     * @param apiParams Parameters to append to the API endpoint
     * @param apiHeaders HTTP headers to append to the request
     * @return A `HttpClient` instance
     */
    /**
     * Generates the query parameters to be used for a HTTP GET request
     * @template P, R
     * @param {?} apiEndpoint The API endpoint
     * @param {?} apiParams Parameters to append to the API endpoint
     * @param {?=} apiHeaders HTTP headers to append to the request
     * @return {?} A `HttpClient` instance
     */
    SimpleHttpService.prototype.createHttpGet = /**
     * Generates the query parameters to be used for a HTTP GET request
     * @template P, R
     * @param {?} apiEndpoint The API endpoint
     * @param {?} apiParams Parameters to append to the API endpoint
     * @param {?=} apiHeaders HTTP headers to append to the request
     * @return {?} A `HttpClient` instance
     */
    function (apiEndpoint, apiParams, apiHeaders) {
        if (apiHeaders === void 0) { apiHeaders = null; }
        /** @type {?} */
        var params = new HttpParams();
        for (var prop in apiParams) {
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
    };
    /**
     * Generates the query parameters to be used with the API endpoint
     * @param apiEndpoint The API endpoint
     * @param apiParams Parameters to append to the API endpoint
     * @param apiBody The request body
     * @param apiHeaders HTTP headers to append to the request
     * @return A `HttpClient` instance
     */
    /**
     * Generates the query parameters to be used with the API endpoint
     * @template B, P, R
     * @param {?} apiEndpoint The API endpoint
     * @param {?} apiParams Parameters to append to the API endpoint
     * @param {?=} apiBody The request body
     * @param {?=} apiHeaders HTTP headers to append to the request
     * @return {?} A `HttpClient` instance
     */
    SimpleHttpService.prototype.createHttpPost = /**
     * Generates the query parameters to be used with the API endpoint
     * @template B, P, R
     * @param {?} apiEndpoint The API endpoint
     * @param {?} apiParams Parameters to append to the API endpoint
     * @param {?=} apiBody The request body
     * @param {?=} apiHeaders HTTP headers to append to the request
     * @return {?} A `HttpClient` instance
     */
    function (apiEndpoint, apiParams, apiBody, apiHeaders) {
        if (apiBody === void 0) { apiBody = null; }
        if (apiHeaders === void 0) { apiHeaders = null; }
        /** @type {?} */
        var params = new HttpParams();
        for (var prop in apiParams) {
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
    };
    /**
     * Generates the query parameters to be used with the API endpoint
     * @param apiEndpoint The API endpoint
     * @param apiParams Parameters to append to the API endpoint
     * @param apiBody The request body
     * @param apiHeaders HTTP headers to append to the request
     * @return A `HttpClient` instance
     */
    /**
     * Generates the query parameters to be used with the API endpoint
     * @template B, P, R
     * @param {?} apiEndpoint The API endpoint
     * @param {?} apiParams Parameters to append to the API endpoint
     * @param {?} apiBody The request body
     * @param {?=} apiHeaders HTTP headers to append to the request
     * @return {?} A `HttpClient` instance
     */
    SimpleHttpService.prototype.createHttpPut = /**
     * Generates the query parameters to be used with the API endpoint
     * @template B, P, R
     * @param {?} apiEndpoint The API endpoint
     * @param {?} apiParams Parameters to append to the API endpoint
     * @param {?} apiBody The request body
     * @param {?=} apiHeaders HTTP headers to append to the request
     * @return {?} A `HttpClient` instance
     */
    function (apiEndpoint, apiParams, apiBody, apiHeaders) {
        if (apiHeaders === void 0) { apiHeaders = null; }
        /** @type {?} */
        var params = new HttpParams();
        for (var prop in apiParams) {
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
    };
    SimpleHttpService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SimpleHttpService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ SimpleHttpService.ngInjectableDef = defineInjectable({ factory: function SimpleHttpService_Factory() { return new SimpleHttpService(inject(HttpClient)); }, token: SimpleHttpService, providedIn: "root" });
    return SimpleHttpService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SimpleHttpModule = /** @class */ (function () {
    function SimpleHttpModule() {
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
    return SimpleHttpModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { VERSION, SimpleHttpModule, SimpleHttpService };

//# sourceMappingURL=ngx-simple-http.js.map