/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class SimpleHttpService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * Generates the query parameters to be used for a HTTP DELETE request
     * @template P, R
     * @param {?} apiEndpoint The API endpoint
     * @param {?} apiParams Parameters to append to the API endpoint
     * @param {?=} apiHeaders HTTP headers to append to the request
     * @return {?} A `HttpClient` instance
     */
    createHttpDelete(apiEndpoint, apiParams, apiHeaders = null) {
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
     * Generates the query parameters to be used for a HTTP GET request
     * @template P, R
     * @param {?} apiEndpoint The API endpoint
     * @param {?} apiParams Parameters to append to the API endpoint
     * @param {?=} apiHeaders HTTP headers to append to the request
     * @return {?} A `HttpClient` instance
     */
    createHttpGet(apiEndpoint, apiParams, apiHeaders = null) {
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
     * Generates the query parameters to be used with the API endpoint
     * @template B, P, R
     * @param {?} apiEndpoint The API endpoint
     * @param {?} apiParams Parameters to append to the API endpoint
     * @param {?=} apiBody The request body
     * @param {?=} apiHeaders HTTP headers to append to the request
     * @return {?} A `HttpClient` instance
     */
    createHttpPost(apiEndpoint, apiParams, apiBody = null, apiHeaders = null) {
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
     * Generates the query parameters to be used with the API endpoint
     * @template B, P, R
     * @param {?} apiEndpoint The API endpoint
     * @param {?} apiParams Parameters to append to the API endpoint
     * @param {?} apiBody The request body
     * @param {?=} apiHeaders HTTP headers to append to the request
     * @return {?} A `HttpClient` instance
     */
    createHttpPut(apiEndpoint, apiParams, apiBody, apiHeaders = null) {
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
/** @nocollapse */ SimpleHttpService.ngInjectableDef = i0.defineInjectable({ factory: function SimpleHttpService_Factory() { return new SimpleHttpService(i0.inject(i1.HttpClient)); }, token: SimpleHttpService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SimpleHttpService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWh0dHAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zaW1wbGUtaHR0cC8iLCJzb3VyY2VzIjpbInNpbXBsZS1odHRwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBSzNDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFDNUIsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7Ozs7Ozs7OztJQVF6QyxnQkFBZ0IsQ0FBK0IsV0FBbUIsRUFBRSxTQUFZLEVBQUUsYUFBMEIsSUFBSTs7WUFDMUcsTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFO1FBQzdCLEtBQUssTUFBTSxJQUFJLElBQUksU0FBUyxFQUFFO1lBQzVCLElBQUksSUFBSSxJQUFJLFNBQVMsSUFBSSxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDekYsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQy9DO1NBQ0Y7UUFDRCxJQUFJLFVBQVUsRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQ3JCLFdBQVcsRUFDWDtnQkFDRSxNQUFNLEVBQUUsTUFBTTtnQkFDZCxPQUFPLEVBQUUsVUFBVTthQUNwQixDQUNGLENBQUM7U0FDSDthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FDckIsV0FBVyxFQUNYO2dCQUNFLE1BQU0sRUFBRSxNQUFNO2FBQ2YsQ0FDRixDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7Ozs7Ozs7SUFRRCxhQUFh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LEdBQUcsQ0FDbEIsV0FBVyxFQUNYLE9BQU8sRUFDUDtnQkFDRSxNQUFNLEVBQUUsTUFBTTtnQkFDZCxPQUFPLEVBQUUsVUFBVTthQUNwQixDQUNGLENBQUM7U0FDSDthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbEIsV0FBVyxFQUNYLE9BQU8sRUFDUDtnQkFDRSxNQUFNLEVBQUUsTUFBTTthQUNmLENBQ0YsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7O1lBcEtGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUxRLFVBQVU7Ozs7Ozs7O0lBT0wsaUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTaW1wbGVIdHRwU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgdGhlIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYmUgdXNlZCBmb3IgYSBIVFRQIERFTEVURSByZXF1ZXN0XG4gICAqIEBwYXJhbSBhcGlFbmRwb2ludCBUaGUgQVBJIGVuZHBvaW50XG4gICAqIEBwYXJhbSBhcGlQYXJhbXMgUGFyYW1ldGVycyB0byBhcHBlbmQgdG8gdGhlIEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0gYXBpSGVhZGVycyBIVFRQIGhlYWRlcnMgdG8gYXBwZW5kIHRvIHRoZSByZXF1ZXN0XG4gICAqIEByZXR1cm4gQSBgSHR0cENsaWVudGAgaW5zdGFuY2VcbiAgICovXG4gIGNyZWF0ZUh0dHBEZWxldGU8UCBleHRlbmRzIGFueSwgUiBleHRlbmRzIGFueT4oYXBpRW5kcG9pbnQ6IHN0cmluZywgYXBpUGFyYW1zOiBQLCBhcGlIZWFkZXJzOiBIdHRwSGVhZGVycyA9IG51bGwpOiBPYnNlcnZhYmxlPFI+IHtcbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gYXBpUGFyYW1zKSB7XG4gICAgICBpZiAocHJvcCBpbiBhcGlQYXJhbXMgJiYgdHlwZW9mIGFwaVBhcmFtc1twcm9wXSAhPT0gdW5kZWZpbmVkICYmIGFwaVBhcmFtc1twcm9wXSAhPT0gbnVsbCkge1xuICAgICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKHByb3AsIGFwaVBhcmFtc1twcm9wXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhcGlIZWFkZXJzKSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZTxSPihcbiAgICAgICAgYXBpRW5kcG9pbnQsXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgICBoZWFkZXJzOiBhcGlIZWFkZXJzXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPFI+KFxuICAgICAgICBhcGlFbmRwb2ludCxcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgdGhlIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYmUgdXNlZCBmb3IgYSBIVFRQIEdFVCByZXF1ZXN0XG4gICAqIEBwYXJhbSBhcGlFbmRwb2ludCBUaGUgQVBJIGVuZHBvaW50XG4gICAqIEBwYXJhbSBhcGlQYXJhbXMgUGFyYW1ldGVycyB0byBhcHBlbmQgdG8gdGhlIEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0gYXBpSGVhZGVycyBIVFRQIGhlYWRlcnMgdG8gYXBwZW5kIHRvIHRoZSByZXF1ZXN0XG4gICAqIEByZXR1cm4gQSBgSHR0cENsaWVudGAgaW5zdGFuY2VcbiAgICovXG4gIGNyZWF0ZUh0dHBHZXQ8UCBleHRlbmRzIGFueSwgUiBleHRlbmRzIGFueT4oYXBpRW5kcG9pbnQ6IHN0cmluZywgYXBpUGFyYW1zOiBQLCBhcGlIZWFkZXJzOiBIdHRwSGVhZGVycyA9IG51bGwpOiBPYnNlcnZhYmxlPFI+IHtcbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gYXBpUGFyYW1zKSB7XG4gICAgICBpZiAocHJvcCBpbiBhcGlQYXJhbXMgJiYgdHlwZW9mIGFwaVBhcmFtc1twcm9wXSAhPT0gdW5kZWZpbmVkICYmIGFwaVBhcmFtc1twcm9wXSAhPT0gbnVsbCkge1xuICAgICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKHByb3AsIGFwaVBhcmFtc1twcm9wXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhcGlIZWFkZXJzKSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxSPihcbiAgICAgICAgYXBpRW5kcG9pbnQsXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgICBoZWFkZXJzOiBhcGlIZWFkZXJzXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFI+KFxuICAgICAgICBhcGlFbmRwb2ludCxcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgdGhlIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYmUgdXNlZCB3aXRoIHRoZSBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIGFwaUVuZHBvaW50IFRoZSBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIGFwaVBhcmFtcyBQYXJhbWV0ZXJzIHRvIGFwcGVuZCB0byB0aGUgQVBJIGVuZHBvaW50XG4gICAqIEBwYXJhbSBhcGlCb2R5IFRoZSByZXF1ZXN0IGJvZHlcbiAgICogQHBhcmFtIGFwaUhlYWRlcnMgSFRUUCBoZWFkZXJzIHRvIGFwcGVuZCB0byB0aGUgcmVxdWVzdFxuICAgKiBAcmV0dXJuIEEgYEh0dHBDbGllbnRgIGluc3RhbmNlXG4gICAqL1xuICBjcmVhdGVIdHRwUG9zdDxcbiAgICBCIGV4dGVuZHMgYW55LFxuICAgIFAgZXh0ZW5kcyBhbnksXG4gICAgUiBleHRlbmRzIGFueT4oYXBpRW5kcG9pbnQ6IHN0cmluZywgYXBpUGFyYW1zOiBQLCBhcGlCb2R5OiBCID0gbnVsbCwgYXBpSGVhZGVyczogSHR0cEhlYWRlcnMgPSBudWxsKTogT2JzZXJ2YWJsZTxSPiB7XG4gICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG4gICAgZm9yIChjb25zdCBwcm9wIGluIGFwaVBhcmFtcykge1xuICAgICAgaWYgKHByb3AgaW4gYXBpUGFyYW1zICYmIHR5cGVvZiBhcGlQYXJhbXNbcHJvcF0gIT09IHVuZGVmaW5lZCAmJiBhcGlQYXJhbXNbcHJvcF0gIT09IG51bGwpIHtcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZChwcm9wLCBhcGlQYXJhbXNbcHJvcF0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYXBpSGVhZGVycykge1xuICAgICAgaWYgKGFwaUJvZHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFI+KFxuICAgICAgICAgIGFwaUVuZHBvaW50LFxuICAgICAgICAgIGFwaUJvZHksXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgICAgICBoZWFkZXJzOiBhcGlIZWFkZXJzXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFI+KFxuICAgICAgICAgIGFwaUVuZHBvaW50LFxuICAgICAgICAgIGFwaUJvZHksXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgICAgICBoZWFkZXJzOiBhcGlIZWFkZXJzXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoYXBpQm9keSkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8Uj4oXG4gICAgICAgICAgYXBpRW5kcG9pbnQsXG4gICAgICAgICAgYXBpQm9keSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxSPihcbiAgICAgICAgICBhcGlFbmRwb2ludCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyB0aGUgcXVlcnkgcGFyYW1ldGVycyB0byBiZSB1c2VkIHdpdGggdGhlIEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0gYXBpRW5kcG9pbnQgVGhlIEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0gYXBpUGFyYW1zIFBhcmFtZXRlcnMgdG8gYXBwZW5kIHRvIHRoZSBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIGFwaUJvZHkgVGhlIHJlcXVlc3QgYm9keVxuICAgKiBAcGFyYW0gYXBpSGVhZGVycyBIVFRQIGhlYWRlcnMgdG8gYXBwZW5kIHRvIHRoZSByZXF1ZXN0XG4gICAqIEByZXR1cm4gQSBgSHR0cENsaWVudGAgaW5zdGFuY2VcbiAgICovXG4gIGNyZWF0ZUh0dHBQdXQ8XG4gICAgQiBleHRlbmRzIGFueSxcbiAgICBQIGV4dGVuZHMgYW55LFxuICAgIFIgZXh0ZW5kcyBhbnk+KFxuICAgICAgYXBpRW5kcG9pbnQ6IHN0cmluZyxcbiAgICAgIGFwaVBhcmFtczogUCxcbiAgICAgIGFwaUJvZHk6IEIsXG4gICAgICBhcGlIZWFkZXJzOiBIdHRwSGVhZGVycyA9IG51bGwpOiBPYnNlcnZhYmxlPFI+IHtcbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gYXBpUGFyYW1zKSB7XG4gICAgICBpZiAocHJvcCBpbiBhcGlQYXJhbXMgJiYgdHlwZW9mIGFwaVBhcmFtc1twcm9wXSAhPT0gdW5kZWZpbmVkICYmIGFwaVBhcmFtc1twcm9wXSAhPT0gbnVsbCkge1xuICAgICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKHByb3AsIGFwaVBhcmFtc1twcm9wXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhcGlIZWFkZXJzKSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxSPihcbiAgICAgICAgYXBpRW5kcG9pbnQsXG4gICAgICAgIGFwaUJvZHksXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgICBoZWFkZXJzOiBhcGlIZWFkZXJzXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0PFI+KFxuICAgICAgICBhcGlFbmRwb2ludCxcbiAgICAgICAgYXBpQm9keSxcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=