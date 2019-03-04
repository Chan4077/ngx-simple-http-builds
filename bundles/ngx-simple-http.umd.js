(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-simple-http', ['exports', '@angular/common/http', '@angular/core'], factory) :
    (factory((global['ngx-simple-http'] = {}),global.ng.common.http,global.ng.core));
}(this, (function (exports,i1,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var VERSION = new i0.Version('1.0.0-6163735-6163735');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                if (apiHeaders === void 0) {
                    apiHeaders = null;
                }
                /** @type {?} */
                var params = new i1.HttpParams();
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
                if (apiHeaders === void 0) {
                    apiHeaders = null;
                }
                /** @type {?} */
                var params = new i1.HttpParams();
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
                if (apiBody === void 0) {
                    apiBody = null;
                }
                if (apiHeaders === void 0) {
                    apiHeaders = null;
                }
                /** @type {?} */
                var params = new i1.HttpParams();
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
                if (apiHeaders === void 0) {
                    apiHeaders = null;
                }
                /** @type {?} */
                var params = new i1.HttpParams();
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SimpleHttpService.ctorParameters = function () {
            return [
                { type: i1.HttpClient }
            ];
        };
        /** @nocollapse */ SimpleHttpService.ngInjectableDef = i0.defineInjectable({ factory: function SimpleHttpService_Factory() { return new SimpleHttpService(i0.inject(i1.HttpClient)); }, token: SimpleHttpService, providedIn: "root" });
        return SimpleHttpService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SimpleHttpModule = /** @class */ (function () {
        function SimpleHttpModule() {
        }
        SimpleHttpModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.HttpClientModule
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.VERSION = VERSION;
    exports.SimpleHttpModule = SimpleHttpModule;
    exports.SimpleHttpService = SimpleHttpService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-simple-http.umd.js.map