/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWh0dHAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zaW1wbGUtaHR0cC8iLCJzb3VyY2VzIjpbInNpbXBsZS1odHRwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBRTNDO0lBSUUsMkJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDO0lBQ3pDOzs7Ozs7T0FNRzs7Ozs7Ozs7O0lBQ0gsNENBQWdCOzs7Ozs7OztJQUFoQixVQUErQyxXQUFtQixFQUFFLFNBQVksRUFBRSxVQUE4QjtRQUE5QiwyQkFBQSxFQUFBLGlCQUE4Qjs7WUFDMUcsTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFO1FBQzdCLEtBQUssSUFBTSxJQUFJLElBQUksU0FBUyxFQUFFO1lBQzVCLElBQUksSUFBSSxJQUFJLFNBQVMsSUFBSSxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDekYsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQy9DO1NBQ0Y7UUFDRCxJQUFJLFVBQVUsRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQ3JCLFdBQVcsRUFDWDtnQkFDRSxNQUFNLEVBQUUsTUFBTTtnQkFDZCxPQUFPLEVBQUUsVUFBVTthQUNwQixDQUNGLENBQUM7U0FDSDthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FDckIsV0FBVyxFQUNYO2dCQUNFLE1BQU0sRUFBRSxNQUFNO2FBQ2YsQ0FDRixDQUFDO1NBQ0g7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QUFDLEtBQUssU0FBUyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUU7Z0JBQ3pGLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUMvQztTQUNGO1FBQ0QsSUFBSSxVQUFVLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNsQixXQUFXLEVBQ1gsT0FBTyxFQUNQO2dCQUNFLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE9BQU8sRUFBRSxVQUFVO2FBQ3BCLENBQ0YsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNsQixXQUFXLEVBQ1gsT0FBTyxFQUNQO2dCQUNFLE1BQU0sRUFBRSxNQUFNO2FBQ2YsQ0FDRixDQUFDO1NBQ0g7SUFDSCxDQUFDOztnQkFwS0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFMUSxVQUFVOzs7NEJBQW5CO0NBd0tDLEFBcktELElBcUtDO1NBbEtZLGlCQUFpQjs7Ozs7O0lBQ2hCLGlDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2ltcGxlSHR0cFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuICAvKipcbiAgICogR2VuZXJhdGVzIHRoZSBxdWVyeSBwYXJhbWV0ZXJzIHRvIGJlIHVzZWQgZm9yIGEgSFRUUCBERUxFVEUgcmVxdWVzdFxuICAgKiBAcGFyYW0gYXBpRW5kcG9pbnQgVGhlIEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0gYXBpUGFyYW1zIFBhcmFtZXRlcnMgdG8gYXBwZW5kIHRvIHRoZSBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIGFwaUhlYWRlcnMgSFRUUCBoZWFkZXJzIHRvIGFwcGVuZCB0byB0aGUgcmVxdWVzdFxuICAgKiBAcmV0dXJuIEEgYEh0dHBDbGllbnRgIGluc3RhbmNlXG4gICAqL1xuICBjcmVhdGVIdHRwRGVsZXRlPFAgZXh0ZW5kcyBhbnksIFIgZXh0ZW5kcyBhbnk+KGFwaUVuZHBvaW50OiBzdHJpbmcsIGFwaVBhcmFtczogUCwgYXBpSGVhZGVyczogSHR0cEhlYWRlcnMgPSBudWxsKTogT2JzZXJ2YWJsZTxSPiB7XG4gICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG4gICAgZm9yIChjb25zdCBwcm9wIGluIGFwaVBhcmFtcykge1xuICAgICAgaWYgKHByb3AgaW4gYXBpUGFyYW1zICYmIHR5cGVvZiBhcGlQYXJhbXNbcHJvcF0gIT09IHVuZGVmaW5lZCAmJiBhcGlQYXJhbXNbcHJvcF0gIT09IG51bGwpIHtcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZChwcm9wLCBhcGlQYXJhbXNbcHJvcF0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYXBpSGVhZGVycykge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8Uj4oXG4gICAgICAgIGFwaUVuZHBvaW50LFxuICAgICAgICB7XG4gICAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgICAgaGVhZGVyczogYXBpSGVhZGVyc1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZTxSPihcbiAgICAgICAgYXBpRW5kcG9pbnQsXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogR2VuZXJhdGVzIHRoZSBxdWVyeSBwYXJhbWV0ZXJzIHRvIGJlIHVzZWQgZm9yIGEgSFRUUCBHRVQgcmVxdWVzdFxuICAgKiBAcGFyYW0gYXBpRW5kcG9pbnQgVGhlIEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0gYXBpUGFyYW1zIFBhcmFtZXRlcnMgdG8gYXBwZW5kIHRvIHRoZSBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIGFwaUhlYWRlcnMgSFRUUCBoZWFkZXJzIHRvIGFwcGVuZCB0byB0aGUgcmVxdWVzdFxuICAgKiBAcmV0dXJuIEEgYEh0dHBDbGllbnRgIGluc3RhbmNlXG4gICAqL1xuICBjcmVhdGVIdHRwR2V0PFAgZXh0ZW5kcyBhbnksIFIgZXh0ZW5kcyBhbnk+KGFwaUVuZHBvaW50OiBzdHJpbmcsIGFwaVBhcmFtczogUCwgYXBpSGVhZGVyczogSHR0cEhlYWRlcnMgPSBudWxsKTogT2JzZXJ2YWJsZTxSPiB7XG4gICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG4gICAgZm9yIChjb25zdCBwcm9wIGluIGFwaVBhcmFtcykge1xuICAgICAgaWYgKHByb3AgaW4gYXBpUGFyYW1zICYmIHR5cGVvZiBhcGlQYXJhbXNbcHJvcF0gIT09IHVuZGVmaW5lZCAmJiBhcGlQYXJhbXNbcHJvcF0gIT09IG51bGwpIHtcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZChwcm9wLCBhcGlQYXJhbXNbcHJvcF0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYXBpSGVhZGVycykge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8Uj4oXG4gICAgICAgIGFwaUVuZHBvaW50LFxuICAgICAgICB7XG4gICAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgICAgaGVhZGVyczogYXBpSGVhZGVyc1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxSPihcbiAgICAgICAgYXBpRW5kcG9pbnQsXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogR2VuZXJhdGVzIHRoZSBxdWVyeSBwYXJhbWV0ZXJzIHRvIGJlIHVzZWQgd2l0aCB0aGUgQVBJIGVuZHBvaW50XG4gICAqIEBwYXJhbSBhcGlFbmRwb2ludCBUaGUgQVBJIGVuZHBvaW50XG4gICAqIEBwYXJhbSBhcGlQYXJhbXMgUGFyYW1ldGVycyB0byBhcHBlbmQgdG8gdGhlIEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0gYXBpQm9keSBUaGUgcmVxdWVzdCBib2R5XG4gICAqIEBwYXJhbSBhcGlIZWFkZXJzIEhUVFAgaGVhZGVycyB0byBhcHBlbmQgdG8gdGhlIHJlcXVlc3RcbiAgICogQHJldHVybiBBIGBIdHRwQ2xpZW50YCBpbnN0YW5jZVxuICAgKi9cbiAgY3JlYXRlSHR0cFBvc3Q8XG4gICAgQiBleHRlbmRzIGFueSxcbiAgICBQIGV4dGVuZHMgYW55LFxuICAgIFIgZXh0ZW5kcyBhbnk+KGFwaUVuZHBvaW50OiBzdHJpbmcsIGFwaVBhcmFtczogUCwgYXBpQm9keTogQiA9IG51bGwsIGFwaUhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbnVsbCk6IE9ic2VydmFibGU8Uj4ge1xuICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xuICAgIGZvciAoY29uc3QgcHJvcCBpbiBhcGlQYXJhbXMpIHtcbiAgICAgIGlmIChwcm9wIGluIGFwaVBhcmFtcyAmJiB0eXBlb2YgYXBpUGFyYW1zW3Byb3BdICE9PSB1bmRlZmluZWQgJiYgYXBpUGFyYW1zW3Byb3BdICE9PSBudWxsKSB7XG4gICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQocHJvcCwgYXBpUGFyYW1zW3Byb3BdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGFwaUhlYWRlcnMpIHtcbiAgICAgIGlmIChhcGlCb2R5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxSPihcbiAgICAgICAgICBhcGlFbmRwb2ludCxcbiAgICAgICAgICBhcGlCb2R5LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICAgICAgaGVhZGVyczogYXBpSGVhZGVyc1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxSPihcbiAgICAgICAgICBhcGlFbmRwb2ludCxcbiAgICAgICAgICBhcGlCb2R5LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICAgICAgaGVhZGVyczogYXBpSGVhZGVyc1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGFwaUJvZHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFI+KFxuICAgICAgICAgIGFwaUVuZHBvaW50LFxuICAgICAgICAgIGFwaUJvZHksXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8Uj4oXG4gICAgICAgICAgYXBpRW5kcG9pbnQsXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgdGhlIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYmUgdXNlZCB3aXRoIHRoZSBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIGFwaUVuZHBvaW50IFRoZSBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIGFwaVBhcmFtcyBQYXJhbWV0ZXJzIHRvIGFwcGVuZCB0byB0aGUgQVBJIGVuZHBvaW50XG4gICAqIEBwYXJhbSBhcGlCb2R5IFRoZSByZXF1ZXN0IGJvZHlcbiAgICogQHBhcmFtIGFwaUhlYWRlcnMgSFRUUCBoZWFkZXJzIHRvIGFwcGVuZCB0byB0aGUgcmVxdWVzdFxuICAgKiBAcmV0dXJuIEEgYEh0dHBDbGllbnRgIGluc3RhbmNlXG4gICAqL1xuICBjcmVhdGVIdHRwUHV0PFxuICAgIEIgZXh0ZW5kcyBhbnksXG4gICAgUCBleHRlbmRzIGFueSxcbiAgICBSIGV4dGVuZHMgYW55PihcbiAgICAgIGFwaUVuZHBvaW50OiBzdHJpbmcsXG4gICAgICBhcGlQYXJhbXM6IFAsXG4gICAgICBhcGlCb2R5OiBCLFxuICAgICAgYXBpSGVhZGVyczogSHR0cEhlYWRlcnMgPSBudWxsKTogT2JzZXJ2YWJsZTxSPiB7XG4gICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG4gICAgZm9yIChjb25zdCBwcm9wIGluIGFwaVBhcmFtcykge1xuICAgICAgaWYgKHByb3AgaW4gYXBpUGFyYW1zICYmIHR5cGVvZiBhcGlQYXJhbXNbcHJvcF0gIT09IHVuZGVmaW5lZCAmJiBhcGlQYXJhbXNbcHJvcF0gIT09IG51bGwpIHtcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZChwcm9wLCBhcGlQYXJhbXNbcHJvcF0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYXBpSGVhZGVycykge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8Uj4oXG4gICAgICAgIGFwaUVuZHBvaW50LFxuICAgICAgICBhcGlCb2R5LFxuICAgICAgICB7XG4gICAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgICAgaGVhZGVyczogYXBpSGVhZGVyc1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxSPihcbiAgICAgICAgYXBpRW5kcG9pbnQsXG4gICAgICAgIGFwaUJvZHksXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIl19