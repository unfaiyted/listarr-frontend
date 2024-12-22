/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/config": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get configuration
         * @description Retrieve current application configuration
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["models.ConfigResponse"];
                    };
                };
                /** @description Internal Server Error */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["models.ConfigResponse"];
                    };
                };
            };
        };
        /**
         * Update configuration
         * @description Update application configuration settings
         */
        put: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            /** @description Configuration settings */
            requestBody: {
                content: {
                    "application/json": components["schemas"]["models.Configuration"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["models.ConfigResponse"];
                    };
                };
                /** @description Bad Request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["models.ConfigResponse"];
                    };
                };
                /** @description Internal Server Error */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["models.ConfigResponse"];
                    };
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/config/reset": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reset configuration
         * @description Reset configuration to default values
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["models.ConfigResponse"];
                    };
                };
                /** @description Internal Server Error */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["models.ConfigResponse"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List users
         * @description Get all users in the system
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["models.UserResponse"][];
                    };
                };
                /** @description Internal Server Error */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["models.ErrorResponse"];
                    };
                };
            };
        };
        put?: never;
        /**
         * Create a new user
         * @description Create a new user in the system
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: components["requestBodies"]["models.User"];
            responses: {
                /** @description Created */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["models.UserResponse"];
                    };
                };
                /** @description Bad Request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["models.ErrorResponse"];
                    };
                };
                /** @description Internal Server Error */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["models.ErrorResponse"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a user
         * @description Get a user by ID
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description User ID */
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["models.UserResponse"];
                    };
                };
                /** @description Not Found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["models.ErrorResponse"];
                    };
                };
                /** @description Internal Server Error */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["models.ErrorResponse"];
                    };
                };
            };
        };
        /**
         * Update a user
         * @description Update a user's information
         */
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description User ID */
                    id: number;
                };
                cookie?: never;
            };
            requestBody: components["requestBodies"]["models.User"];
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["models.UserResponse"];
                    };
                };
                /** @description Bad Request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["models.ErrorResponse"];
                    };
                };
                /** @description Not Found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["models.ErrorResponse"];
                    };
                };
                /** @description Internal Server Error */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["models.ErrorResponse"];
                    };
                };
            };
        };
        post?: never;
        /**
         * Delete a user
         * @description Delete a user by ID
         */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description User ID */
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description No Content */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Not Found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["models.ErrorResponse"];
                    };
                };
                /** @description Internal Server Error */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["models.ErrorResponse"];
                    };
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** @description Configuration response wrapper */
        "models.ConfigResponse": {
            data?: components["schemas"]["models.Configuration"];
            error?: string;
        };
        /** @description Complete application configuration settings */
        "models.Configuration": {
            /** @description App contains core application settings */
            app?: {
                /** @example http://localhost:8080 */
                apiBaseURL: string;
                /** @example http://localhost:3000 */
                appURL: string;
                /**
                 * @example development
                 * @enum {string}
                 */
                environment: "development" | "staging" | "production";
                /**
                 * @example info
                 * @enum {string}
                 */
                logLevel: "debug" | "info" | "warn" | "error";
                /** @example 100 */
                maxPageSize: number;
                /** @example Listarr */
                name: string;
            };
            /** @description Auth contains authentication settings */
            auth?: {
                /** @example [
                 *       "http://localhost:3000"
                 *     ] */
                allowedOrigins?: string[];
                /** @example false */
                enable2FA?: boolean;
                /** @example true */
                enableLocal?: boolean;
                /** @example your-secret-key */
                jwtSecret: string;
                /** @example 60 */
                sessionTimeout: number;
                /** @example 24 */
                tokenExpiration: number;
            };
            /** @description Database contains database connection settings */
            database?: {
                /** @example 20 */
                maxConns: number;
                /** @example 30 */
                timeout: number;
                /** @example postgres://localhost:5432/listarr */
                url: string;
            };
            /** @description HTTP contains HTTP server configuration */
            http?: {
                /** @example false */
                enableSSL?: boolean;
                /** @example 60 */
                idleTimeout: number;
                /** @example 8080 */
                port: string;
                /** @example false */
                proxyEnabled?: boolean;
                /** @example http://proxy:8080 */
                proxyURL?: string;
                /** @example true */
                rateLimitEnabled?: boolean;
                /** @example 30 */
                readTimeout: number;
                /** @example 100 */
                requestsPerMin?: number;
                /** @example /path/to/cert.pem */
                sslCert?: string;
                /** @example /path/to/key.pem */
                sslKey?: string;
                /** @example 30 */
                writeTimeout: number;
            };
            /** @description Integrations contains all third-party service configurations */
            integrations?: {
                emby?: components["schemas"]["models.EmbyConfig"];
                jellyfin?: components["schemas"]["models.JellyfinConfig"];
                navidrome?: components["schemas"]["models.NavidromeConfig"];
                plex?: components["schemas"]["models.PlexConfig"];
                spotify?: components["schemas"]["models.SpotifyConfig"];
                trakt?: components["schemas"]["models.TraktConfig"];
            };
            /** @description SpotDL contains Spotify download integration settings */
            spotdl?: {
                /** @example 2 */
                concurrentDownloads: number;
                /** @example ./downloads */
                downloadDirectory: string;
                /** @example false */
                enabled?: boolean;
                /**
                 * @example mp3
                 * @enum {string}
                 */
                fileFormat: "mp3" | "flac";
                /** @example 3 */
                maxRetries: number;
                /** @example {artist} - {title} */
                namingTemplate: string;
                /** @example true */
                notifyOnComplete?: boolean;
                /**
                 * @example high
                 * @enum {string}
                 */
                qualityPreset: "low" | "medium" | "high";
            };
            /** @description Sync contains synchronization settings */
            sync?: {
                collections?: {
                    /** @example [
                     *       "series",
                     *       "movies",
                     *       "music"
                     *     ] */
                    allowedTypes?: string[];
                    /** @example true */
                    enableSync?: boolean;
                    /** @example 5000 */
                    maxItems: number;
                    /** @example 0 *\/12 * * * */
                    syncInterval?: string;
                };
                /**
                 * @example skip
                 * @enum {string}
                 */
                conflictStrategy: "overwrite" | "skip" | "merge";
                /** @example true */
                enabled?: boolean;
                /** @example 0 *\/12 * * * */
                interval: string;
                playlists?: {
                    /** @example [
                     *       "music",
                     *       "media"
                     *     ] */
                    allowedTypes?: string[];
                    /** @example true */
                    enableSync?: boolean;
                    /** @example 1000 */
                    maxItems: number;
                    /** @example 0 *\/6 * * * */
                    syncInterval?: string;
                };
            };
        };
        /** @description Emby media server configuration */
        "models.EmbyConfig": {
            /** @example your-api-key */
            apiKey?: string;
            /** @example false */
            enabled?: boolean;
            /** @example localhost */
            host?: string;
            /** @example 8096 */
            port?: number;
            /** @example false */
            ssl?: boolean;
            /** @example admin */
            username?: string;
        };
        "models.ErrorResponse": {
            /** @example error message */
            error?: string;
        };
        /** @description Jellyfin media server configuration */
        "models.JellyfinConfig": {
            /** @example your-api-key */
            apiKey?: string;
            /** @example false */
            enabled?: boolean;
            /** @example localhost */
            host?: string;
            /** @example 8096 */
            port?: number;
            /** @example false */
            ssl?: boolean;
            /** @example admin */
            username?: string;
        };
        /** @description Navidrome music server configuration */
        "models.NavidromeConfig": {
            /** @example false */
            enabled?: boolean;
            /** @example localhost */
            host?: string;
            /** @example your-password */
            password?: string;
            /** @example 4533 */
            port?: number;
            /** @example false */
            ssl?: boolean;
            /** @example admin */
            username?: string;
        };
        /** @description Plex media server configuration */
        "models.PlexConfig": {
            /** @example false */
            enabled?: boolean;
            /** @example localhost */
            host?: string;
            /** @example 32400 */
            port?: number;
            /** @example false */
            ssl?: boolean;
            /** @example your-plex-token */
            token?: string;
        };
        /** @description Spotify configuration */
        "models.SpotifyConfig": {
            /** @example your-client-id */
            clientId?: string;
            /** @example your-client-secret */
            clientSecret?: string;
            /** @example false */
            enabled?: boolean;
            /** @example http://localhost:8080/callback */
            redirectUri?: string;
            /** @example user-library-read playlist-read-private */
            scopes?: string;
        };
        /** @description Trakt.tv configuration */
        "models.TraktConfig": {
            /** @example your-client-id */
            clientId?: string;
            /** @example your-client-secret */
            clientSecret?: string;
            /** @example false */
            enabled?: boolean;
            /** @example http://localhost:8080/callback */
            redirectUri?: string;
        };
        "models.User": {
            /** @example john@example.com */
            email: string;
            /** @example 1 */
            id?: number;
            /** @example John Doe */
            name: string;
            /**
             * Format: password
             * @description omitempty will exclude it from JSON responses
             * @example strongpassword123
             */
            password: string;
        };
        "models.UserResponse": {
            email?: string;
            id?: number;
            name?: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: {
        /** @description User data */
        "models.User": {
            content: {
                "application/json": components["schemas"]["models.User"];
            };
        };
    };
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
