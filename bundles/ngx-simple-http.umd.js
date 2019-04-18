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
    var VERSION = new i0.Version('1.0.0-1fd619b-1fd619b');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SimpleHttpService = /** @class */ (function () {
        function SimpleHttpService(http) {
            this.http = http;
        }
        /**
         * Constructs and sends a HTTP DELETE request
         * @param apiEndpoint The API endpoint
         * @param apiParams Parameters to append to the API endpoint
         * @param apiHeaders HTTP headers to append to the request
         * @template P A TypeScript interface to type the HTTP request's parameters to
         * @template R A TypeScript interface to type the HTTP request's response to
         * @return A `HttpClient` instance
         * @deprecated Use {@link SimpleHttpService#sendHttpDelete}
         */
        /**
         * Constructs and sends a HTTP DELETE request
         * @deprecated Use {\@link SimpleHttpService#sendHttpDelete}
         * @template P, R
         * @param {?} apiEndpoint The API endpoint
         * @param {?} apiParams Parameters to append to the API endpoint
         * @param {?=} apiHeaders HTTP headers to append to the request
         * @return {?} A `HttpClient` instance
         */
        SimpleHttpService.prototype.createHttpDelete = /**
         * Constructs and sends a HTTP DELETE request
         * @deprecated Use {\@link SimpleHttpService#sendHttpDelete}
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
                return this.sendHttpDelete(apiEndpoint, apiParams, apiHeaders);
            };
        /**
         * Constructs and sends a HTTP DELETE request
         * @param apiEndpoint The API endpoint
         * @param apiParams Parameters to append to the API endpoint
         * @param apiHeaders HTTP headers to append to the request
         * @template P A TypeScript interface to type the HTTP request's parameters to
         * @template R A TypeScript interface to type the HTTP request's response to
         * @return A `HttpClient` instance
         */
        /**
         * Constructs and sends a HTTP DELETE request
         * @template P, R
         * @param {?} apiEndpoint The API endpoint
         * @param {?} apiParams Parameters to append to the API endpoint
         * @param {?=} apiHeaders HTTP headers to append to the request
         * @return {?} A `HttpClient` instance
         */
        SimpleHttpService.prototype.sendHttpDelete = /**
         * Constructs and sends a HTTP DELETE request
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
         * Constructs and sends a HTTP GET request
         * @param apiEndpoint The API endpoint
         * @param apiParams Parameters to append to the API endpoint
         * @param apiHeaders HTTP headers to append to the request
         * @template P A TypeScript interface to type the HTTP request's parameters to
         * @template R A TypeScript interface to type the HTTP request's response to
         * @return A `HttpClient` instance
         * @deprecated Use {@link SimpleHttpService#sendHttpGet}
         */
        /**
         * Constructs and sends a HTTP GET request
         * @deprecated Use {\@link SimpleHttpService#sendHttpGet}
         * @template P, R
         * @param {?} apiEndpoint The API endpoint
         * @param {?} apiParams Parameters to append to the API endpoint
         * @param {?=} apiHeaders HTTP headers to append to the request
         * @return {?} A `HttpClient` instance
         */
        SimpleHttpService.prototype.createHttpGet = /**
         * Constructs and sends a HTTP GET request
         * @deprecated Use {\@link SimpleHttpService#sendHttpGet}
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
                return this.sendHttpGet(apiEndpoint, apiParams, apiHeaders);
            };
        /**
         * Constructs and sends a HTTP GET request
         * @param apiEndpoint The API endpoint
         * @param apiParams Parameters to append to the API endpoint
         * @param apiHeaders HTTP headers to append to the request
         * @template P A TypeScript interface to type the HTTP request's parameters to
         * @template R A TypeScript interface to type the HTTP request's response to
         * @return A `HttpClient` instance
         */
        /**
         * Constructs and sends a HTTP GET request
         * @template P, R
         * @param {?} apiEndpoint The API endpoint
         * @param {?} apiParams Parameters to append to the API endpoint
         * @param {?=} apiHeaders HTTP headers to append to the request
         * @return {?} A `HttpClient` instance
         */
        SimpleHttpService.prototype.sendHttpGet = /**
         * Constructs and sends a HTTP GET request
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
         * Constructs and sends a HTTP POST request
         * @param apiEndpoint The API endpoint
         * @param apiParams Parameters to append to the API endpoint
         * @param apiBody The request body
         * @param apiHeaders HTTP headers to append to the request
         * @template B A TypeScript interface to type the HTTP request's body to
         * @template P A TypeScript interface to type the HTTP request's parameters to
         * @template R A TypeScript interface to type the HTTP request's response to
         * @return A `HttpClient` instance
         * @deprecated Use {@link SimpleHttpService#sendHttpPost}
         */
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
        SimpleHttpService.prototype.createHttpPost = /**
         * Constructs and sends a HTTP POST request
         * @deprecated Use {\@link SimpleHttpService#sendHttpPost}
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
                return this.sendHttpPost(apiEndpoint, apiParams, apiBody, apiHeaders);
            };
        /**
         * Constructs and sends a HTTP POST request
         * @param apiEndpoint The API endpoint
         * @param apiParams Parameters to append to the API endpoint
         * @param apiBody The request body
         * @param apiHeaders HTTP headers to append to the request
         * @template B A TypeScript interface to type the HTTP request's body to
         * @template P A TypeScript interface to type the HTTP request's parameters to
         * @template R A TypeScript interface to type the HTTP request's response to
         * @return A `HttpClient` instance
         */
        /**
         * Constructs and sends a HTTP POST request
         * @template B, P, R
         * @param {?} apiEndpoint The API endpoint
         * @param {?} apiParams Parameters to append to the API endpoint
         * @param {?=} apiBody The request body
         * @param {?=} apiHeaders HTTP headers to append to the request
         * @return {?} A `HttpClient` instance
         */
        SimpleHttpService.prototype.sendHttpPost = /**
         * Constructs and sends a HTTP POST request
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
         * Constructs and sends a HTTP PUT request
         * @param apiEndpoint The API endpoint
         * @param apiParams Parameters to append to the API endpoint
         * @param apiBody The request body
         * @param apiHeaders HTTP headers to append to the request
         * @template B A TypeScript interface to type the HTTP request's body to
         * @template P A TypeScript interface to type the HTTP request's parameters to
         * @template R A TypeScript interface to type the HTTP request's response to
         * @return A `HttpClient` instance
         */
        /**
         * Constructs and sends a HTTP PUT request
         * @template B, P, R
         * @param {?} apiEndpoint The API endpoint
         * @param {?} apiParams Parameters to append to the API endpoint
         * @param {?} apiBody The request body
         * @param {?=} apiHeaders HTTP headers to append to the request
         * @return {?} A `HttpClient` instance
         */
        SimpleHttpService.prototype.createHttpPut = /**
         * Constructs and sends a HTTP PUT request
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
                return this.sendHttpPut(apiEndpoint, apiParams, apiBody, apiHeaders);
            };
        /**
         * Constructs and sends a HTTP PUT request
         * @param apiEndpoint The API endpoint
         * @param apiParams Parameters to append to the API endpoint
         * @param apiBody The request body
         * @param apiHeaders HTTP headers to append to the request
         * @template B A TypeScript interface to type the HTTP request's body to
         * @template P A TypeScript interface to type the HTTP request's parameters to
         * @template R A TypeScript interface to type the HTTP request's response to
         * @return A `HttpClient` instance
         */
        /**
         * Constructs and sends a HTTP PUT request
         * @template B, P, R
         * @param {?} apiEndpoint The API endpoint
         * @param {?} apiParams Parameters to append to the API endpoint
         * @param {?} apiBody The request body
         * @param {?=} apiHeaders HTTP headers to append to the request
         * @return {?} A `HttpClient` instance
         */
        SimpleHttpService.prototype.sendHttpPut = /**
         * Constructs and sends a HTTP PUT request
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