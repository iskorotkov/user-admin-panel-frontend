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

/**
 *
 * @export
 * @interface ModelError
 */
export interface ModelError {
  /**
   * Unique error code is useful for differentiating different types of errors. Error code is globally unique and permanent, meaning that it will never change even if the error message changes
   * @type {number}
   * @memberof ModelError
   */
  code: number;
  /**
   *
   * @type {string}
   * @memberof ModelError
   */
  message: string;
  /**
   *
   * @type {Array<string>}
   * @memberof ModelError
   */
  errors: Array<string>;
}