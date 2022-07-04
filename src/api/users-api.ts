/* tslint:disable */
/* eslint-disable */
/**
 * API for user admin panel
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * Contact: korotkov.ivan.s@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import globalAxios, {
  AxiosPromise,
  AxiosInstance,
  AxiosRequestConfig,
} from "axios";
import { Configuration } from "../../configuration";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from "../../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from "../../base";
// @ts-ignore
import { NewUser } from "../../src/models";
// @ts-ignore
import { User } from "../../src/models";
/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Delete an existing user
     * @param {number} id Unique user id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete: async (
      id: number,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("_delete", "id", id);
      const localVarPath = `/users/{id}`.replace(
        `{${"id"}}`,
        encodeURIComponent(String(id))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "DELETE",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Retrieve list of all users
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    all: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      const localVarPath = `/users`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Create a new user
     * @param {NewUser} [newUser]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    create: async (
      newUser?: NewUser,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/users`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        newUser,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Retrieve user by id
     * @param {number} id Unique user id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    single: async (
      id: number,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("single", "id", id);
      const localVarPath = `/users/{id}`.replace(
        `{${"id"}}`,
        encodeURIComponent(String(id))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Update an existing user
     * @param {number} id Unique user id
     * @param {User} [user]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    update: async (
      id: number,
      user?: User,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("update", "id", id);
      const localVarPath = `/users/{id}`.replace(
        `{${"id"}}`,
        encodeURIComponent(String(id))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "PUT",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        user,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration);
  return {
    /**
     * Delete an existing user
     * @param {number} id Unique user id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async _delete(
      id: number,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator._delete(
        id,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Retrieve list of all users
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async all(
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<User>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.all(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Create a new user
     * @param {NewUser} [newUser]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async create(
      newUser?: NewUser,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.create(
        newUser,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Retrieve user by id
     * @param {number} id Unique user id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async single(
      id: number,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.single(
        id,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Update an existing user
     * @param {number} id Unique user id
     * @param {User} [user]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async update(
      id: number,
      user?: User,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.update(
        id,
        user,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
  };
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = UsersApiFp(configuration);
  return {
    /**
     * Delete an existing user
     * @param {number} id Unique user id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    _delete(id: number, options?: any): AxiosPromise<User> {
      return localVarFp
        ._delete(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Retrieve list of all users
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    all(options?: any): AxiosPromise<Array<User>> {
      return localVarFp
        .all(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Create a new user
     * @param {NewUser} [newUser]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    create(newUser?: NewUser, options?: any): AxiosPromise<User> {
      return localVarFp
        .create(newUser, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Retrieve user by id
     * @param {number} id Unique user id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    single(id: number, options?: any): AxiosPromise<User> {
      return localVarFp
        .single(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Update an existing user
     * @param {number} id Unique user id
     * @param {User} [user]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    update(id: number, user?: User, options?: any): AxiosPromise<User> {
      return localVarFp
        .update(id, user, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
  /**
   * Delete an existing user
   * @param {number} id Unique user id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersApi
   */
  public _delete(id: number, options?: AxiosRequestConfig) {
    return UsersApiFp(this.configuration)
      ._delete(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Retrieve list of all users
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersApi
   */
  public all(options?: AxiosRequestConfig) {
    return UsersApiFp(this.configuration)
      .all(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Create a new user
   * @param {NewUser} [newUser]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersApi
   */
  public create(newUser?: NewUser, options?: AxiosRequestConfig) {
    return UsersApiFp(this.configuration)
      .create(newUser, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Retrieve user by id
   * @param {number} id Unique user id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersApi
   */
  public single(id: number, options?: AxiosRequestConfig) {
    return UsersApiFp(this.configuration)
      .single(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Update an existing user
   * @param {number} id Unique user id
   * @param {User} [user]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersApi
   */
  public update(id: number, user?: User, options?: AxiosRequestConfig) {
    return UsersApiFp(this.configuration)
      .update(id, user, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
