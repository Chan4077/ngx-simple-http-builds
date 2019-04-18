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
     */
    /**
     * Constructs and sends a HTTP DELETE request
     * @template P, R
     * @param {?} apiEndpoint The API endpoint
     * @param {?} apiParams Parameters to append to the API endpoint
     * @param {?=} apiHeaders HTTP headers to append to the request
     * @return {?} A `HttpClient` instance
     */
    SimpleHttpService.prototype.createHttpDelete = /**
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
     */
    /**
     * Constructs and sends a HTTP GET request
     * @template P, R
     * @param {?} apiEndpoint The API endpoint
     * @param {?} apiParams Parameters to append to the API endpoint
     * @param {?=} apiHeaders HTTP headers to append to the request
     * @return {?} A `HttpClient` instance
     */
    SimpleHttpService.prototype.createHttpGet = /**
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
    SimpleHttpService.prototype.createHttpPost = /**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWh0dHAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zaW1wbGUtaHR0cC8iLCJzb3VyY2VzIjpbInNpbXBsZS1odHRwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBRTNDO0lBSUUsMkJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDO0lBQ3pDOzs7Ozs7OztPQVFHOzs7Ozs7Ozs7SUFDSCw0Q0FBZ0I7Ozs7Ozs7O0lBQWhCLFVBQStDLFdBQW1CLEVBQUUsU0FBWSxFQUFFLFVBQThCO1FBQTlCLDJCQUFBLEVBQUEsaUJBQThCOztZQUMxRyxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUU7UUFDN0IsS0FBSyxJQUFNLElBQUksSUFBSSxTQUFTLEVBQUU7WUFDNUIsSUFBSSxJQUFJLElBQUksU0FBUyxJQUFJLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFO2dCQUN6RixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDL0M7U0FDRjtRQUNELElBQUksVUFBVSxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FDckIsV0FBVyxFQUNYO2dCQUNFLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE9BQU8sRUFBRSxVQUFVO2FBQ3BCLENBQ0YsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUNyQixXQUFXLEVBQ1g7Z0JBQ0UsTUFBTSxFQUFFLE1BQU07YUFDZixDQUNGLENBQUM7U0FD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QUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFO2dCQUN6RixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDL0M7U0FDRjtRQUNELElBQUksVUFBVSxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbEIsV0FBVyxFQUNYLE9BQU8sRUFDUDtnQkFDRSxNQUFNLEVBQUUsTUFBTTtnQkFDZCxPQUFPLEVBQUUsVUFBVTthQUNwQixDQUNGLENBQUM7U0FDSDthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbEIsV0FBVyxFQUNYLE9BQU8sRUFDUDtnQkFDRSxNQUFNLEVBQUUsTUFBTTthQUNmLENBQ0YsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7Z0JBOUtGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTFEsVUFBVTs7OzRCQUFuQjtDQWtMQyxBQS9LRCxJQStLQztTQTVLWSxpQkFBaUI7Ozs7OztJQUNoQixpQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNpbXBsZUh0dHBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cbiAgLyoqXG4gICAqIENvbnN0cnVjdHMgYW5kIHNlbmRzIGEgSFRUUCBERUxFVEUgcmVxdWVzdFxuICAgKiBAcGFyYW0gYXBpRW5kcG9pbnQgVGhlIEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0gYXBpUGFyYW1zIFBhcmFtZXRlcnMgdG8gYXBwZW5kIHRvIHRoZSBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIGFwaUhlYWRlcnMgSFRUUCBoZWFkZXJzIHRvIGFwcGVuZCB0byB0aGUgcmVxdWVzdFxuICAgKiBAdGVtcGxhdGUgUCBBIFR5cGVTY3JpcHQgaW50ZXJmYWNlIHRvIHR5cGUgdGhlIEhUVFAgcmVxdWVzdCdzIHBhcmFtZXRlcnMgdG9cbiAgICogQHRlbXBsYXRlIFIgQSBUeXBlU2NyaXB0IGludGVyZmFjZSB0byB0eXBlIHRoZSBIVFRQIHJlcXVlc3QncyByZXNwb25zZSB0b1xuICAgKiBAcmV0dXJuIEEgYEh0dHBDbGllbnRgIGluc3RhbmNlXG4gICAqL1xuICBjcmVhdGVIdHRwRGVsZXRlPFAgZXh0ZW5kcyBhbnksIFIgZXh0ZW5kcyBhbnk+KGFwaUVuZHBvaW50OiBzdHJpbmcsIGFwaVBhcmFtczogUCwgYXBpSGVhZGVyczogSHR0cEhlYWRlcnMgPSBudWxsKTogT2JzZXJ2YWJsZTxSPiB7XG4gICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG4gICAgZm9yIChjb25zdCBwcm9wIGluIGFwaVBhcmFtcykge1xuICAgICAgaWYgKHByb3AgaW4gYXBpUGFyYW1zICYmIHR5cGVvZiBhcGlQYXJhbXNbcHJvcF0gIT09IHVuZGVmaW5lZCAmJiBhcGlQYXJhbXNbcHJvcF0gIT09IG51bGwpIHtcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZChwcm9wLCBhcGlQYXJhbXNbcHJvcF0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYXBpSGVhZGVycykge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8Uj4oXG4gICAgICAgIGFwaUVuZHBvaW50LFxuICAgICAgICB7XG4gICAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgICAgaGVhZGVyczogYXBpSGVhZGVyc1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZTxSPihcbiAgICAgICAgYXBpRW5kcG9pbnQsXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ29uc3RydWN0cyBhbmQgc2VuZHMgYSBIVFRQIEdFVCByZXF1ZXN0XG4gICAqIEBwYXJhbSBhcGlFbmRwb2ludCBUaGUgQVBJIGVuZHBvaW50XG4gICAqIEBwYXJhbSBhcGlQYXJhbXMgUGFyYW1ldGVycyB0byBhcHBlbmQgdG8gdGhlIEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0gYXBpSGVhZGVycyBIVFRQIGhlYWRlcnMgdG8gYXBwZW5kIHRvIHRoZSByZXF1ZXN0XG4gICAqIEB0ZW1wbGF0ZSBQIEEgVHlwZVNjcmlwdCBpbnRlcmZhY2UgdG8gdHlwZSB0aGUgSFRUUCByZXF1ZXN0J3MgcGFyYW1ldGVycyB0b1xuICAgKiBAdGVtcGxhdGUgUiBBIFR5cGVTY3JpcHQgaW50ZXJmYWNlIHRvIHR5cGUgdGhlIEhUVFAgcmVxdWVzdCdzIHJlc3BvbnNlIHRvXG4gICAqIEByZXR1cm4gQSBgSHR0cENsaWVudGAgaW5zdGFuY2VcbiAgICovXG4gIGNyZWF0ZUh0dHBHZXQ8UCBleHRlbmRzIGFueSwgUiBleHRlbmRzIGFueT4oYXBpRW5kcG9pbnQ6IHN0cmluZywgYXBpUGFyYW1zOiBQLCBhcGlIZWFkZXJzOiBIdHRwSGVhZGVycyA9IG51bGwpOiBPYnNlcnZhYmxlPFI+IHtcbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gYXBpUGFyYW1zKSB7XG4gICAgICBpZiAocHJvcCBpbiBhcGlQYXJhbXMgJiYgdHlwZW9mIGFwaVBhcmFtc1twcm9wXSAhPT0gdW5kZWZpbmVkICYmIGFwaVBhcmFtc1twcm9wXSAhPT0gbnVsbCkge1xuICAgICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKHByb3AsIGFwaVBhcmFtc1twcm9wXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhcGlIZWFkZXJzKSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxSPihcbiAgICAgICAgYXBpRW5kcG9pbnQsXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgICBoZWFkZXJzOiBhcGlIZWFkZXJzXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFI+KFxuICAgICAgICBhcGlFbmRwb2ludCxcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RzIGFuZCBzZW5kcyBhIEhUVFAgUE9TVCByZXF1ZXN0XG4gICAqIEBwYXJhbSBhcGlFbmRwb2ludCBUaGUgQVBJIGVuZHBvaW50XG4gICAqIEBwYXJhbSBhcGlQYXJhbXMgUGFyYW1ldGVycyB0byBhcHBlbmQgdG8gdGhlIEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0gYXBpQm9keSBUaGUgcmVxdWVzdCBib2R5XG4gICAqIEBwYXJhbSBhcGlIZWFkZXJzIEhUVFAgaGVhZGVycyB0byBhcHBlbmQgdG8gdGhlIHJlcXVlc3RcbiAgICogQHRlbXBsYXRlIEIgQSBUeXBlU2NyaXB0IGludGVyZmFjZSB0byB0eXBlIHRoZSBIVFRQIHJlcXVlc3QncyBib2R5IHRvXG4gICAqIEB0ZW1wbGF0ZSBQIEEgVHlwZVNjcmlwdCBpbnRlcmZhY2UgdG8gdHlwZSB0aGUgSFRUUCByZXF1ZXN0J3MgcGFyYW1ldGVycyB0b1xuICAgKiBAdGVtcGxhdGUgUiBBIFR5cGVTY3JpcHQgaW50ZXJmYWNlIHRvIHR5cGUgdGhlIEhUVFAgcmVxdWVzdCdzIHJlc3BvbnNlIHRvXG4gICAqIEByZXR1cm4gQSBgSHR0cENsaWVudGAgaW5zdGFuY2VcbiAgICovXG4gIGNyZWF0ZUh0dHBQb3N0PFxuICAgIEIgZXh0ZW5kcyBhbnksXG4gICAgUCBleHRlbmRzIGFueSxcbiAgICBSIGV4dGVuZHMgYW55PihhcGlFbmRwb2ludDogc3RyaW5nLCBhcGlQYXJhbXM6IFAsIGFwaUJvZHk6IEIgPSBudWxsLCBhcGlIZWFkZXJzOiBIdHRwSGVhZGVycyA9IG51bGwpOiBPYnNlcnZhYmxlPFI+IHtcbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gYXBpUGFyYW1zKSB7XG4gICAgICBpZiAocHJvcCBpbiBhcGlQYXJhbXMgJiYgdHlwZW9mIGFwaVBhcmFtc1twcm9wXSAhPT0gdW5kZWZpbmVkICYmIGFwaVBhcmFtc1twcm9wXSAhPT0gbnVsbCkge1xuICAgICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKHByb3AsIGFwaVBhcmFtc1twcm9wXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhcGlIZWFkZXJzKSB7XG4gICAgICBpZiAoYXBpQm9keSkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8Uj4oXG4gICAgICAgICAgYXBpRW5kcG9pbnQsXG4gICAgICAgICAgYXBpQm9keSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgICAgIGhlYWRlcnM6IGFwaUhlYWRlcnNcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8Uj4oXG4gICAgICAgICAgYXBpRW5kcG9pbnQsXG4gICAgICAgICAgYXBpQm9keSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgICAgIGhlYWRlcnM6IGFwaUhlYWRlcnNcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChhcGlCb2R5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxSPihcbiAgICAgICAgICBhcGlFbmRwb2ludCxcbiAgICAgICAgICBhcGlCb2R5LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFI+KFxuICAgICAgICAgIGFwaUVuZHBvaW50LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ29uc3RydWN0cyBhbmQgc2VuZHMgYSBIVFRQIFBVVCByZXF1ZXN0XG4gICAqIEBwYXJhbSBhcGlFbmRwb2ludCBUaGUgQVBJIGVuZHBvaW50XG4gICAqIEBwYXJhbSBhcGlQYXJhbXMgUGFyYW1ldGVycyB0byBhcHBlbmQgdG8gdGhlIEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0gYXBpQm9keSBUaGUgcmVxdWVzdCBib2R5XG4gICAqIEBwYXJhbSBhcGlIZWFkZXJzIEhUVFAgaGVhZGVycyB0byBhcHBlbmQgdG8gdGhlIHJlcXVlc3RcbiAgICogQHRlbXBsYXRlIEIgQSBUeXBlU2NyaXB0IGludGVyZmFjZSB0byB0eXBlIHRoZSBIVFRQIHJlcXVlc3QncyBib2R5IHRvXG4gICAqIEB0ZW1wbGF0ZSBQIEEgVHlwZVNjcmlwdCBpbnRlcmZhY2UgdG8gdHlwZSB0aGUgSFRUUCByZXF1ZXN0J3MgcGFyYW1ldGVycyB0b1xuICAgKiBAdGVtcGxhdGUgUiBBIFR5cGVTY3JpcHQgaW50ZXJmYWNlIHRvIHR5cGUgdGhlIEhUVFAgcmVxdWVzdCdzIHJlc3BvbnNlIHRvXG4gICAqIEByZXR1cm4gQSBgSHR0cENsaWVudGAgaW5zdGFuY2VcbiAgICovXG4gIGNyZWF0ZUh0dHBQdXQ8XG4gICAgQiBleHRlbmRzIGFueSxcbiAgICBQIGV4dGVuZHMgYW55LFxuICAgIFIgZXh0ZW5kcyBhbnk+KFxuICAgICAgYXBpRW5kcG9pbnQ6IHN0cmluZyxcbiAgICAgIGFwaVBhcmFtczogUCxcbiAgICAgIGFwaUJvZHk6IEIsXG4gICAgICBhcGlIZWFkZXJzOiBIdHRwSGVhZGVycyA9IG51bGwpOiBPYnNlcnZhYmxlPFI+IHtcbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gYXBpUGFyYW1zKSB7XG4gICAgICBpZiAocHJvcCBpbiBhcGlQYXJhbXMgJiYgdHlwZW9mIGFwaVBhcmFtc1twcm9wXSAhPT0gdW5kZWZpbmVkICYmIGFwaVBhcmFtc1twcm9wXSAhPT0gbnVsbCkge1xuICAgICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKHByb3AsIGFwaVBhcmFtc1twcm9wXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhcGlIZWFkZXJzKSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxSPihcbiAgICAgICAgYXBpRW5kcG9pbnQsXG4gICAgICAgIGFwaUJvZHksXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgICBoZWFkZXJzOiBhcGlIZWFkZXJzXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0PFI+KFxuICAgICAgICBhcGlFbmRwb2ludCxcbiAgICAgICAgYXBpQm9keSxcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=