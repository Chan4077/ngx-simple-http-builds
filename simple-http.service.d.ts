import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class SimpleHttpService {
    private http;
    constructor(http: HttpClient);
    /**
     * Generates the query parameters to be used for a HTTP DELETE request
     * @param apiEndpoint The API endpoint
     * @param apiParams Parameters to append to the API endpoint
     * @param apiHeaders HTTP headers to append to the request
     * @return A `HttpClient` instance
     */
    createHttpDelete<P extends any, R extends any>(apiEndpoint: string, apiParams: P, apiHeaders?: HttpHeaders): Observable<R>;
    /**
     * Generates the query parameters to be used for a HTTP GET request
     * @param apiEndpoint The API endpoint
     * @param apiParams Parameters to append to the API endpoint
     * @param apiHeaders HTTP headers to append to the request
     * @return A `HttpClient` instance
     */
    createHttpGet<P extends any, R extends any>(apiEndpoint: string, apiParams: P, apiHeaders?: HttpHeaders): Observable<R>;
    /**
     * Generates the query parameters to be used with the API endpoint
     * @param apiEndpoint The API endpoint
     * @param apiParams Parameters to append to the API endpoint
     * @param apiBody The request body
     * @param apiHeaders HTTP headers to append to the request
     * @return A `HttpClient` instance
     */
    createHttpPost<B extends any, P extends any, R extends any>(apiEndpoint: string, apiParams: P, apiBody?: B, apiHeaders?: HttpHeaders): Observable<R>;
    /**
     * Generates the query parameters to be used with the API endpoint
     * @param apiEndpoint The API endpoint
     * @param apiParams Parameters to append to the API endpoint
     * @param apiBody The request body
     * @param apiHeaders HTTP headers to append to the request
     * @return A `HttpClient` instance
     */
    createHttpPut<B extends any, P extends any, R extends any>(apiEndpoint: string, apiParams: P, apiBody: B, apiHeaders?: HttpHeaders): Observable<R>;
}
