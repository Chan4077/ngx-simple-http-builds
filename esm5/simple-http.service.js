/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
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
        if (apiHeaders === void 0) { apiHeaders = null; }
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
        if (apiHeaders === void 0) { apiHeaders = null; }
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
        if (apiBody === void 0) { apiBody = null; }
        if (apiHeaders === void 0) { apiHeaders = null; }
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
        if (apiHeaders === void 0) { apiHeaders = null; }
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
    /** @nocollapse */ SimpleHttpService.ngInjectableDef = i0.defineInjectable({ factory: function SimpleHttpService_Factory() { return new SimpleHttpService(i0.inject(i1.HttpClient)); }, token: SimpleHttpService, providedIn: "root" });
    return SimpleHttpService;
}());
export { SimpleHttpService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SimpleHttpService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWh0dHAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zaW1wbGUtaHR0cC8iLCJzb3VyY2VzIjpbInNpbXBsZS1odHRwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBRTNDO0lBSUUsMkJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDO0lBQ3pDOzs7Ozs7Ozs7T0FTRzs7Ozs7Ozs7OztJQUNILDRDQUFnQjs7Ozs7Ozs7O0lBQWhCLFVBQStDLFdBQW1CLEVBQUUsU0FBWSxFQUFFLFVBQThCO1FBQTlCLDJCQUFBLEVBQUEsaUJBQThCO1FBQzlHLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBTyxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFDRDs7Ozs7Ozs7T0FRRzs7Ozs7Ozs7O0lBQ0gsMENBQWM7Ozs7Ozs7O0lBQWQsVUFBNkMsV0FBbUIsRUFBRSxTQUFZLEVBQUUsVUFBOEI7UUFBOUIsMkJBQUEsRUFBQSxpQkFBOEI7O1lBQ3hHLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTtRQUM3QixLQUFLLElBQU0sSUFBSSxJQUFJLFNBQVMsRUFBRTtZQUM1QixJQUFJLElBQUksSUFBSSxTQUFTLElBQUksT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUU7Z0JBQ3pGLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUMvQztTQUNGO1FBQ0QsSUFBSSxVQUFVLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUNyQixXQUFXLEVBQ1g7Z0JBQ0UsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsT0FBTyxFQUFFLFVBQVU7YUFDcEIsQ0FDRixDQUFDO1NBQ0g7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQ3JCLFdBQVcsRUFDWDtnQkFDRSxNQUFNLEVBQUUsTUFBTTthQUNmLENBQ0YsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRzs7Ozs7Ozs7OztJQUNILHlDQUFhOzs7Ozs7Ozs7SUFBYixVQUE0QyxXQUFtQixFQUFFLFNBQVksRUFBRSxVQUE4QjtRQUE5QiwyQkFBQSxFQUFBLGlCQUE4QjtRQUMzRyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQU8sV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBQ0Q7Ozs7Ozs7O09BUUc7Ozs7Ozs7OztJQUNILHVDQUFXOzs7Ozs7OztJQUFYLFVBQTBDLFdBQW1CLEVBQUUsU0FBWSxFQUFFLFVBQThCO1FBQTlCLDJCQUFBLEVBQUEsaUJBQThCOztZQUNyRyxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUU7UUFDN0IsS0FBSyxJQUFNLElBQUksSUFBSSxTQUFTLEVBQUU7WUFDNUIsSUFBSSxJQUFJLElBQUksU0FBUyxJQUFJLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFO2dCQUN6RixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDL0M7U0FDRjtRQUNELElBQUksVUFBVSxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbEIsV0FBVyxFQUNYO2dCQUNFLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE9BQU8sRUFBRSxVQUFVO2FBQ3BCLENBQ0YsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNsQixXQUFXLEVBQ1g7Z0JBQ0UsTUFBTSxFQUFFLE1BQU07YUFDZixDQUNGLENBQUM7U0FDSDtJQUNILENBQUM7SUFFRDs7Ozs7Ozs7Ozs7T0FXRzs7Ozs7Ozs7Ozs7SUFDSCwwQ0FBYzs7Ozs7Ozs7OztJQUFkLFVBR2lCLFdBQW1CLEVBQUUsU0FBWSxFQUFFLE9BQWlCLEVBQUUsVUFBOEI7UUFBakQsd0JBQUEsRUFBQSxjQUFpQjtRQUFFLDJCQUFBLEVBQUEsaUJBQThCO1FBQ25HLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBVSxXQUFXLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBQ0Q7Ozs7Ozs7Ozs7T0FVRzs7Ozs7Ozs7OztJQUNILHdDQUFZOzs7Ozs7Ozs7SUFBWixVQUdpQixXQUFtQixFQUFFLFNBQVksRUFBRSxPQUFpQixFQUFFLFVBQThCO1FBQWpELHdCQUFBLEVBQUEsY0FBaUI7UUFBRSwyQkFBQSxFQUFBLGlCQUE4Qjs7WUFDL0YsTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFO1FBQzdCLEtBQUssSUFBTSxJQUFJLElBQUksU0FBUyxFQUFFO1lBQzVCLElBQUksSUFBSSxJQUFJLFNBQVMsSUFBSSxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDekYsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQy9DO1NBQ0Y7UUFDRCxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksT0FBTyxFQUFFO2dCQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ25CLFdBQVcsRUFDWCxPQUFPLEVBQ1A7b0JBQ0UsTUFBTSxFQUFFLE1BQU07b0JBQ2QsT0FBTyxFQUFFLFVBQVU7aUJBQ3BCLENBQ0YsQ0FBQzthQUNIO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ25CLFdBQVcsRUFDWCxPQUFPLEVBQ1A7b0JBQ0UsTUFBTSxFQUFFLE1BQU07b0JBQ2QsT0FBTyxFQUFFLFVBQVU7aUJBQ3BCLENBQ0YsQ0FBQzthQUNIO1NBQ0Y7YUFBTTtZQUNMLElBQUksT0FBTyxFQUFFO2dCQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ25CLFdBQVcsRUFDWCxPQUFPLEVBQ1A7b0JBQ0UsTUFBTSxFQUFFLE1BQU07aUJBQ2YsQ0FDRixDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDbkIsV0FBVyxFQUNYO29CQUNFLE1BQU0sRUFBRSxNQUFNO2lCQUNmLENBQ0YsQ0FBQzthQUNIO1NBQ0Y7SUFDSCxDQUFDO0lBQ0Q7Ozs7Ozs7Ozs7T0FVRzs7Ozs7Ozs7OztJQUNILHlDQUFhOzs7Ozs7Ozs7SUFBYixVQUlJLFdBQW1CLEVBQ25CLFNBQVksRUFDWixPQUFVLEVBQ1YsVUFBOEI7UUFBOUIsMkJBQUEsRUFBQSxpQkFBOEI7UUFDaEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFVLFdBQVcsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFDRDs7Ozs7Ozs7OztPQVVHOzs7Ozs7Ozs7O0lBQ0gsdUNBQVc7Ozs7Ozs7OztJQUFYLFVBSUksV0FBbUIsRUFDbkIsU0FBWSxFQUNaLE9BQVUsRUFDVixVQUE4QjtRQUE5QiwyQkFBQSxFQUFBLGlCQUE4Qjs7WUFDNUIsTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFO1FBQzdCLEtBQUssSUFBTSxJQUFJLElBQUksU0FBUyxFQUFFO1lBQzVCLElBQUksSUFBSSxJQUFJLFNBQVMsSUFBSSxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDekYsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQy9DO1NBQ0Y7UUFDRCxJQUFJLFVBQVUsRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2xCLFdBQVcsRUFDWCxPQUFPLEVBQ1A7Z0JBQ0UsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsT0FBTyxFQUFFLFVBQVU7YUFDcEIsQ0FDRixDQUFDO1NBQ0g7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2xCLFdBQVcsRUFDWCxPQUFPLEVBQ1A7Z0JBQ0UsTUFBTSxFQUFFLE1BQU07YUFDZixDQUNGLENBQUM7U0FDSDtJQUNILENBQUM7O2dCQWpQRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUxRLFVBQVU7Ozs0QkFBbkI7Q0FxUEMsQUFsUEQsSUFrUEM7U0EvT1ksaUJBQWlCOzs7Ozs7SUFDaEIsaUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTaW1wbGVIdHRwU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RzIGFuZCBzZW5kcyBhIEhUVFAgREVMRVRFIHJlcXVlc3RcbiAgICogQHBhcmFtIGFwaUVuZHBvaW50IFRoZSBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIGFwaVBhcmFtcyBQYXJhbWV0ZXJzIHRvIGFwcGVuZCB0byB0aGUgQVBJIGVuZHBvaW50XG4gICAqIEBwYXJhbSBhcGlIZWFkZXJzIEhUVFAgaGVhZGVycyB0byBhcHBlbmQgdG8gdGhlIHJlcXVlc3RcbiAgICogQHRlbXBsYXRlIFAgQSBUeXBlU2NyaXB0IGludGVyZmFjZSB0byB0eXBlIHRoZSBIVFRQIHJlcXVlc3QncyBwYXJhbWV0ZXJzIHRvXG4gICAqIEB0ZW1wbGF0ZSBSIEEgVHlwZVNjcmlwdCBpbnRlcmZhY2UgdG8gdHlwZSB0aGUgSFRUUCByZXF1ZXN0J3MgcmVzcG9uc2UgdG9cbiAgICogQHJldHVybiBBIGBIdHRwQ2xpZW50YCBpbnN0YW5jZVxuICAgKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIFNpbXBsZUh0dHBTZXJ2aWNlI3NlbmRIdHRwRGVsZXRlfVxuICAgKi9cbiAgY3JlYXRlSHR0cERlbGV0ZTxQIGV4dGVuZHMgYW55LCBSIGV4dGVuZHMgYW55PihhcGlFbmRwb2ludDogc3RyaW5nLCBhcGlQYXJhbXM6IFAsIGFwaUhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbnVsbCk6IE9ic2VydmFibGU8Uj4ge1xuICAgIHJldHVybiB0aGlzLnNlbmRIdHRwRGVsZXRlPFAsIFI+KGFwaUVuZHBvaW50LCBhcGlQYXJhbXMsIGFwaUhlYWRlcnMpO1xuICB9XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RzIGFuZCBzZW5kcyBhIEhUVFAgREVMRVRFIHJlcXVlc3RcbiAgICogQHBhcmFtIGFwaUVuZHBvaW50IFRoZSBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIGFwaVBhcmFtcyBQYXJhbWV0ZXJzIHRvIGFwcGVuZCB0byB0aGUgQVBJIGVuZHBvaW50XG4gICAqIEBwYXJhbSBhcGlIZWFkZXJzIEhUVFAgaGVhZGVycyB0byBhcHBlbmQgdG8gdGhlIHJlcXVlc3RcbiAgICogQHRlbXBsYXRlIFAgQSBUeXBlU2NyaXB0IGludGVyZmFjZSB0byB0eXBlIHRoZSBIVFRQIHJlcXVlc3QncyBwYXJhbWV0ZXJzIHRvXG4gICAqIEB0ZW1wbGF0ZSBSIEEgVHlwZVNjcmlwdCBpbnRlcmZhY2UgdG8gdHlwZSB0aGUgSFRUUCByZXF1ZXN0J3MgcmVzcG9uc2UgdG9cbiAgICogQHJldHVybiBBIGBIdHRwQ2xpZW50YCBpbnN0YW5jZVxuICAgKi9cbiAgc2VuZEh0dHBEZWxldGU8UCBleHRlbmRzIGFueSwgUiBleHRlbmRzIGFueT4oYXBpRW5kcG9pbnQ6IHN0cmluZywgYXBpUGFyYW1zOiBQLCBhcGlIZWFkZXJzOiBIdHRwSGVhZGVycyA9IG51bGwpOiBPYnNlcnZhYmxlPFI+IHtcbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gYXBpUGFyYW1zKSB7XG4gICAgICBpZiAocHJvcCBpbiBhcGlQYXJhbXMgJiYgdHlwZW9mIGFwaVBhcmFtc1twcm9wXSAhPT0gdW5kZWZpbmVkICYmIGFwaVBhcmFtc1twcm9wXSAhPT0gbnVsbCkge1xuICAgICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKHByb3AsIGFwaVBhcmFtc1twcm9wXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhcGlIZWFkZXJzKSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZTxSPihcbiAgICAgICAgYXBpRW5kcG9pbnQsXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgICBoZWFkZXJzOiBhcGlIZWFkZXJzXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPFI+KFxuICAgICAgICBhcGlFbmRwb2ludCxcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdHMgYW5kIHNlbmRzIGEgSFRUUCBHRVQgcmVxdWVzdFxuICAgKiBAcGFyYW0gYXBpRW5kcG9pbnQgVGhlIEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0gYXBpUGFyYW1zIFBhcmFtZXRlcnMgdG8gYXBwZW5kIHRvIHRoZSBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIGFwaUhlYWRlcnMgSFRUUCBoZWFkZXJzIHRvIGFwcGVuZCB0byB0aGUgcmVxdWVzdFxuICAgKiBAdGVtcGxhdGUgUCBBIFR5cGVTY3JpcHQgaW50ZXJmYWNlIHRvIHR5cGUgdGhlIEhUVFAgcmVxdWVzdCdzIHBhcmFtZXRlcnMgdG9cbiAgICogQHRlbXBsYXRlIFIgQSBUeXBlU2NyaXB0IGludGVyZmFjZSB0byB0eXBlIHRoZSBIVFRQIHJlcXVlc3QncyByZXNwb25zZSB0b1xuICAgKiBAcmV0dXJuIEEgYEh0dHBDbGllbnRgIGluc3RhbmNlXG4gICAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgU2ltcGxlSHR0cFNlcnZpY2Ujc2VuZEh0dHBHZXR9XG4gICAqL1xuICBjcmVhdGVIdHRwR2V0PFAgZXh0ZW5kcyBhbnksIFIgZXh0ZW5kcyBhbnk+KGFwaUVuZHBvaW50OiBzdHJpbmcsIGFwaVBhcmFtczogUCwgYXBpSGVhZGVyczogSHR0cEhlYWRlcnMgPSBudWxsKTogT2JzZXJ2YWJsZTxSPiB7XG4gICAgcmV0dXJuIHRoaXMuc2VuZEh0dHBHZXQ8UCwgUj4oYXBpRW5kcG9pbnQsIGFwaVBhcmFtcywgYXBpSGVhZGVycyk7XG4gIH1cbiAgLyoqXG4gICAqIENvbnN0cnVjdHMgYW5kIHNlbmRzIGEgSFRUUCBHRVQgcmVxdWVzdFxuICAgKiBAcGFyYW0gYXBpRW5kcG9pbnQgVGhlIEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0gYXBpUGFyYW1zIFBhcmFtZXRlcnMgdG8gYXBwZW5kIHRvIHRoZSBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIGFwaUhlYWRlcnMgSFRUUCBoZWFkZXJzIHRvIGFwcGVuZCB0byB0aGUgcmVxdWVzdFxuICAgKiBAdGVtcGxhdGUgUCBBIFR5cGVTY3JpcHQgaW50ZXJmYWNlIHRvIHR5cGUgdGhlIEhUVFAgcmVxdWVzdCdzIHBhcmFtZXRlcnMgdG9cbiAgICogQHRlbXBsYXRlIFIgQSBUeXBlU2NyaXB0IGludGVyZmFjZSB0byB0eXBlIHRoZSBIVFRQIHJlcXVlc3QncyByZXNwb25zZSB0b1xuICAgKiBAcmV0dXJuIEEgYEh0dHBDbGllbnRgIGluc3RhbmNlXG4gICAqL1xuICBzZW5kSHR0cEdldDxQIGV4dGVuZHMgYW55LCBSIGV4dGVuZHMgYW55PihhcGlFbmRwb2ludDogc3RyaW5nLCBhcGlQYXJhbXM6IFAsIGFwaUhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbnVsbCk6IE9ic2VydmFibGU8Uj4ge1xuICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xuICAgIGZvciAoY29uc3QgcHJvcCBpbiBhcGlQYXJhbXMpIHtcbiAgICAgIGlmIChwcm9wIGluIGFwaVBhcmFtcyAmJiB0eXBlb2YgYXBpUGFyYW1zW3Byb3BdICE9PSB1bmRlZmluZWQgJiYgYXBpUGFyYW1zW3Byb3BdICE9PSBudWxsKSB7XG4gICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQocHJvcCwgYXBpUGFyYW1zW3Byb3BdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGFwaUhlYWRlcnMpIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFI+KFxuICAgICAgICBhcGlFbmRwb2ludCxcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICAgIGhlYWRlcnM6IGFwaUhlYWRlcnNcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8Uj4oXG4gICAgICAgIGFwaUVuZHBvaW50LFxuICAgICAgICB7XG4gICAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0cyBhbmQgc2VuZHMgYSBIVFRQIFBPU1QgcmVxdWVzdFxuICAgKiBAcGFyYW0gYXBpRW5kcG9pbnQgVGhlIEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0gYXBpUGFyYW1zIFBhcmFtZXRlcnMgdG8gYXBwZW5kIHRvIHRoZSBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIGFwaUJvZHkgVGhlIHJlcXVlc3QgYm9keVxuICAgKiBAcGFyYW0gYXBpSGVhZGVycyBIVFRQIGhlYWRlcnMgdG8gYXBwZW5kIHRvIHRoZSByZXF1ZXN0XG4gICAqIEB0ZW1wbGF0ZSBCIEEgVHlwZVNjcmlwdCBpbnRlcmZhY2UgdG8gdHlwZSB0aGUgSFRUUCByZXF1ZXN0J3MgYm9keSB0b1xuICAgKiBAdGVtcGxhdGUgUCBBIFR5cGVTY3JpcHQgaW50ZXJmYWNlIHRvIHR5cGUgdGhlIEhUVFAgcmVxdWVzdCdzIHBhcmFtZXRlcnMgdG9cbiAgICogQHRlbXBsYXRlIFIgQSBUeXBlU2NyaXB0IGludGVyZmFjZSB0byB0eXBlIHRoZSBIVFRQIHJlcXVlc3QncyByZXNwb25zZSB0b1xuICAgKiBAcmV0dXJuIEEgYEh0dHBDbGllbnRgIGluc3RhbmNlXG4gICAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgU2ltcGxlSHR0cFNlcnZpY2Ujc2VuZEh0dHBQb3N0fVxuICAgKi9cbiAgY3JlYXRlSHR0cFBvc3Q8XG4gICAgQiBleHRlbmRzIGFueSxcbiAgICBQIGV4dGVuZHMgYW55LFxuICAgIFIgZXh0ZW5kcyBhbnk+KGFwaUVuZHBvaW50OiBzdHJpbmcsIGFwaVBhcmFtczogUCwgYXBpQm9keTogQiA9IG51bGwsIGFwaUhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbnVsbCk6IE9ic2VydmFibGU8Uj4ge1xuICAgIHJldHVybiB0aGlzLnNlbmRIdHRwUG9zdDxCLCBQLCBSPihhcGlFbmRwb2ludCwgYXBpUGFyYW1zLCBhcGlCb2R5LCBhcGlIZWFkZXJzKTtcbiAgfVxuICAvKipcbiAgICogQ29uc3RydWN0cyBhbmQgc2VuZHMgYSBIVFRQIFBPU1QgcmVxdWVzdFxuICAgKiBAcGFyYW0gYXBpRW5kcG9pbnQgVGhlIEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0gYXBpUGFyYW1zIFBhcmFtZXRlcnMgdG8gYXBwZW5kIHRvIHRoZSBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIGFwaUJvZHkgVGhlIHJlcXVlc3QgYm9keVxuICAgKiBAcGFyYW0gYXBpSGVhZGVycyBIVFRQIGhlYWRlcnMgdG8gYXBwZW5kIHRvIHRoZSByZXF1ZXN0XG4gICAqIEB0ZW1wbGF0ZSBCIEEgVHlwZVNjcmlwdCBpbnRlcmZhY2UgdG8gdHlwZSB0aGUgSFRUUCByZXF1ZXN0J3MgYm9keSB0b1xuICAgKiBAdGVtcGxhdGUgUCBBIFR5cGVTY3JpcHQgaW50ZXJmYWNlIHRvIHR5cGUgdGhlIEhUVFAgcmVxdWVzdCdzIHBhcmFtZXRlcnMgdG9cbiAgICogQHRlbXBsYXRlIFIgQSBUeXBlU2NyaXB0IGludGVyZmFjZSB0byB0eXBlIHRoZSBIVFRQIHJlcXVlc3QncyByZXNwb25zZSB0b1xuICAgKiBAcmV0dXJuIEEgYEh0dHBDbGllbnRgIGluc3RhbmNlXG4gICAqL1xuICBzZW5kSHR0cFBvc3Q8XG4gICAgQiBleHRlbmRzIGFueSxcbiAgICBQIGV4dGVuZHMgYW55LFxuICAgIFIgZXh0ZW5kcyBhbnk+KGFwaUVuZHBvaW50OiBzdHJpbmcsIGFwaVBhcmFtczogUCwgYXBpQm9keTogQiA9IG51bGwsIGFwaUhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbnVsbCk6IE9ic2VydmFibGU8Uj4ge1xuICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xuICAgIGZvciAoY29uc3QgcHJvcCBpbiBhcGlQYXJhbXMpIHtcbiAgICAgIGlmIChwcm9wIGluIGFwaVBhcmFtcyAmJiB0eXBlb2YgYXBpUGFyYW1zW3Byb3BdICE9PSB1bmRlZmluZWQgJiYgYXBpUGFyYW1zW3Byb3BdICE9PSBudWxsKSB7XG4gICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQocHJvcCwgYXBpUGFyYW1zW3Byb3BdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGFwaUhlYWRlcnMpIHtcbiAgICAgIGlmIChhcGlCb2R5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxSPihcbiAgICAgICAgICBhcGlFbmRwb2ludCxcbiAgICAgICAgICBhcGlCb2R5LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICAgICAgaGVhZGVyczogYXBpSGVhZGVyc1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxSPihcbiAgICAgICAgICBhcGlFbmRwb2ludCxcbiAgICAgICAgICBhcGlCb2R5LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICAgICAgaGVhZGVyczogYXBpSGVhZGVyc1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGFwaUJvZHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFI+KFxuICAgICAgICAgIGFwaUVuZHBvaW50LFxuICAgICAgICAgIGFwaUJvZHksXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8Uj4oXG4gICAgICAgICAgYXBpRW5kcG9pbnQsXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RzIGFuZCBzZW5kcyBhIEhUVFAgUFVUIHJlcXVlc3RcbiAgICogQHBhcmFtIGFwaUVuZHBvaW50IFRoZSBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIGFwaVBhcmFtcyBQYXJhbWV0ZXJzIHRvIGFwcGVuZCB0byB0aGUgQVBJIGVuZHBvaW50XG4gICAqIEBwYXJhbSBhcGlCb2R5IFRoZSByZXF1ZXN0IGJvZHlcbiAgICogQHBhcmFtIGFwaUhlYWRlcnMgSFRUUCBoZWFkZXJzIHRvIGFwcGVuZCB0byB0aGUgcmVxdWVzdFxuICAgKiBAdGVtcGxhdGUgQiBBIFR5cGVTY3JpcHQgaW50ZXJmYWNlIHRvIHR5cGUgdGhlIEhUVFAgcmVxdWVzdCdzIGJvZHkgdG9cbiAgICogQHRlbXBsYXRlIFAgQSBUeXBlU2NyaXB0IGludGVyZmFjZSB0byB0eXBlIHRoZSBIVFRQIHJlcXVlc3QncyBwYXJhbWV0ZXJzIHRvXG4gICAqIEB0ZW1wbGF0ZSBSIEEgVHlwZVNjcmlwdCBpbnRlcmZhY2UgdG8gdHlwZSB0aGUgSFRUUCByZXF1ZXN0J3MgcmVzcG9uc2UgdG9cbiAgICogQHJldHVybiBBIGBIdHRwQ2xpZW50YCBpbnN0YW5jZVxuICAgKi9cbiAgY3JlYXRlSHR0cFB1dDxcbiAgICBCIGV4dGVuZHMgYW55LFxuICAgIFAgZXh0ZW5kcyBhbnksXG4gICAgUiBleHRlbmRzIGFueT4oXG4gICAgICBhcGlFbmRwb2ludDogc3RyaW5nLFxuICAgICAgYXBpUGFyYW1zOiBQLFxuICAgICAgYXBpQm9keTogQixcbiAgICAgIGFwaUhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbnVsbCk6IE9ic2VydmFibGU8Uj4ge1xuICAgIHJldHVybiB0aGlzLnNlbmRIdHRwUHV0PEIsIFAsIFI+KGFwaUVuZHBvaW50LCBhcGlQYXJhbXMsIGFwaUJvZHksIGFwaUhlYWRlcnMpO1xuICB9XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RzIGFuZCBzZW5kcyBhIEhUVFAgUFVUIHJlcXVlc3RcbiAgICogQHBhcmFtIGFwaUVuZHBvaW50IFRoZSBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIGFwaVBhcmFtcyBQYXJhbWV0ZXJzIHRvIGFwcGVuZCB0byB0aGUgQVBJIGVuZHBvaW50XG4gICAqIEBwYXJhbSBhcGlCb2R5IFRoZSByZXF1ZXN0IGJvZHlcbiAgICogQHBhcmFtIGFwaUhlYWRlcnMgSFRUUCBoZWFkZXJzIHRvIGFwcGVuZCB0byB0aGUgcmVxdWVzdFxuICAgKiBAdGVtcGxhdGUgQiBBIFR5cGVTY3JpcHQgaW50ZXJmYWNlIHRvIHR5cGUgdGhlIEhUVFAgcmVxdWVzdCdzIGJvZHkgdG9cbiAgICogQHRlbXBsYXRlIFAgQSBUeXBlU2NyaXB0IGludGVyZmFjZSB0byB0eXBlIHRoZSBIVFRQIHJlcXVlc3QncyBwYXJhbWV0ZXJzIHRvXG4gICAqIEB0ZW1wbGF0ZSBSIEEgVHlwZVNjcmlwdCBpbnRlcmZhY2UgdG8gdHlwZSB0aGUgSFRUUCByZXF1ZXN0J3MgcmVzcG9uc2UgdG9cbiAgICogQHJldHVybiBBIGBIdHRwQ2xpZW50YCBpbnN0YW5jZVxuICAgKi9cbiAgc2VuZEh0dHBQdXQ8XG4gICAgQiBleHRlbmRzIGFueSxcbiAgICBQIGV4dGVuZHMgYW55LFxuICAgIFIgZXh0ZW5kcyBhbnk+KFxuICAgICAgYXBpRW5kcG9pbnQ6IHN0cmluZyxcbiAgICAgIGFwaVBhcmFtczogUCxcbiAgICAgIGFwaUJvZHk6IEIsXG4gICAgICBhcGlIZWFkZXJzOiBIdHRwSGVhZGVycyA9IG51bGwpOiBPYnNlcnZhYmxlPFI+IHtcbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gYXBpUGFyYW1zKSB7XG4gICAgICBpZiAocHJvcCBpbiBhcGlQYXJhbXMgJiYgdHlwZW9mIGFwaVBhcmFtc1twcm9wXSAhPT0gdW5kZWZpbmVkICYmIGFwaVBhcmFtc1twcm9wXSAhPT0gbnVsbCkge1xuICAgICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKHByb3AsIGFwaVBhcmFtc1twcm9wXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhcGlIZWFkZXJzKSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxSPihcbiAgICAgICAgYXBpRW5kcG9pbnQsXG4gICAgICAgIGFwaUJvZHksXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgICBoZWFkZXJzOiBhcGlIZWFkZXJzXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0PFI+KFxuICAgICAgICBhcGlFbmRwb2ludCxcbiAgICAgICAgYXBpQm9keSxcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=