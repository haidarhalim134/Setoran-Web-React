/* tslint:disable */
/* eslint-disable */
/**
 * MyAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TwoFactorResponse
 */
export interface TwoFactorResponse {
    /**
     * 
     * @type {string}
     * @memberof TwoFactorResponse
     */
    sharedKey: string | null;
    /**
     * 
     * @type {number}
     * @memberof TwoFactorResponse
     */
    recoveryCodesLeft: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof TwoFactorResponse
     */
    recoveryCodes?: Array<string> | null;
    /**
     * 
     * @type {boolean}
     * @memberof TwoFactorResponse
     */
    isTwoFactorEnabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TwoFactorResponse
     */
    isMachineRemembered: boolean;
}

/**
 * Check if a given object implements the TwoFactorResponse interface.
 */
export function instanceOfTwoFactorResponse(value: object): value is TwoFactorResponse {
    if (!('sharedKey' in value) || value['sharedKey'] === undefined) return false;
    if (!('recoveryCodesLeft' in value) || value['recoveryCodesLeft'] === undefined) return false;
    if (!('isTwoFactorEnabled' in value) || value['isTwoFactorEnabled'] === undefined) return false;
    if (!('isMachineRemembered' in value) || value['isMachineRemembered'] === undefined) return false;
    return true;
}

export function TwoFactorResponseFromJSON(json: any): TwoFactorResponse {
    return TwoFactorResponseFromJSONTyped(json, false);
}

export function TwoFactorResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TwoFactorResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'sharedKey': json['sharedKey'],
        'recoveryCodesLeft': json['recoveryCodesLeft'],
        'recoveryCodes': json['recoveryCodes'] == null ? undefined : json['recoveryCodes'],
        'isTwoFactorEnabled': json['isTwoFactorEnabled'],
        'isMachineRemembered': json['isMachineRemembered'],
    };
}

export function TwoFactorResponseToJSON(json: any): TwoFactorResponse {
    return TwoFactorResponseToJSONTyped(json, false);
}

export function TwoFactorResponseToJSONTyped(value?: TwoFactorResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'sharedKey': value['sharedKey'],
        'recoveryCodesLeft': value['recoveryCodesLeft'],
        'recoveryCodes': value['recoveryCodes'],
        'isTwoFactorEnabled': value['isTwoFactorEnabled'],
        'isMachineRemembered': value['isMachineRemembered'],
    };
}

