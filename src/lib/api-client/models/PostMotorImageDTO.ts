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
 * @interface PostMotorImageDTO
 */
export interface PostMotorImageDTO {
    /**
     * 
     * @type {number}
     * @memberof PostMotorImageDTO
     */
    idMotor?: number;
    /**
     * 
     * @type {string}
     * @memberof PostMotorImageDTO
     */
    front?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PostMotorImageDTO
     */
    left?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PostMotorImageDTO
     */
    right?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PostMotorImageDTO
     */
    rear?: string | null;
}

/**
 * Check if a given object implements the PostMotorImageDTO interface.
 */
export function instanceOfPostMotorImageDTO(value: object): value is PostMotorImageDTO {
    return true;
}

export function PostMotorImageDTOFromJSON(json: any): PostMotorImageDTO {
    return PostMotorImageDTOFromJSONTyped(json, false);
}

export function PostMotorImageDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostMotorImageDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'idMotor': json['idMotor'] == null ? undefined : json['idMotor'],
        'front': json['front'] == null ? undefined : json['front'],
        'left': json['left'] == null ? undefined : json['left'],
        'right': json['right'] == null ? undefined : json['right'],
        'rear': json['rear'] == null ? undefined : json['rear'],
    };
}

export function PostMotorImageDTOToJSON(json: any): PostMotorImageDTO {
    return PostMotorImageDTOToJSONTyped(json, false);
}

export function PostMotorImageDTOToJSONTyped(value?: PostMotorImageDTO | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'idMotor': value['idMotor'],
        'front': value['front'],
        'left': value['left'],
        'right': value['right'],
        'rear': value['rear'],
    };
}

