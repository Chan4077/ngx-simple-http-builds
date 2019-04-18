import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class SimpleHttpService {
    private http;
    constructor(http: HttpClient);
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
    createHttpDelete<P extends any, R extends any>(apiEndpoint: string, apiParams: P, apiHeaders?: HttpHeaders): Observable<R>;
    /**
     * Constructs and sends a HTTP DELETE request
     * @param apiEndpoint The API endpoint
     * @param apiParams Parameters to append to the API endpoint
     * @param apiHeaders HTTP headers to append to the request
     * @template P A TypeScript interface to type the HTTP request's parameters to
     * @template R A TypeScript interface to type the HTTP request's response to
     * @return A `HttpClient` instance
     */
    sendHttpDelete<P extends any, R extends any>(apiEndpoint: string, apiParams: P, apiHeaders?: HttpHeaders): Observable<R>;
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
    createHttpGet<P extends any, R extends any>(apiEndpoint: string, apiParams: P, apiHeaders?: HttpHeaders): Observable<R>;
    /**
     * Constructs and sends a HTTP GET request
     * @param apiEndpoint The API endpoint
     * @param apiParams Parameters to append to the API endpoint
     * @param apiHeaders HTTP headers to append to the request
     * @template P A TypeScript interface to type the HTTP request's parameters to
     * @template R A TypeScript interface to type the HTTP request's response to
     * @return A `HttpClient` instance
     */
    sendHttpGet<P extends any, R extends any>(apiEndpoint: string, apiParams: P, apiHeaders?: HttpHeaders): Observable<R>;
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
    createHttpPost<B extends any, P extends any, R extends any>(apiEndpoint: string, apiParams: P, apiBody?: B, apiHeaders?: HttpHeaders): Observable<R>;
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
    sendHttpPost<B extends any, P extends any, R extends any>(apiEndpoint: string, apiParams: P, apiBody?: B, apiHeaders?: HttpHeaders): Observable<R>;
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
    createHttpPut<B extends any, P extends any, R extends any>(apiEndpoint: string, apiParams: P, apiBody: B, apiHeaders?: HttpHeaders): Observable<R>;
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
    sendHttpPut<B extends any, P extends any, R extends any>(apiEndpoint: string, apiParams: P, apiBody: B, apiHeaders?: HttpHeaders): Observable<R>;
}
