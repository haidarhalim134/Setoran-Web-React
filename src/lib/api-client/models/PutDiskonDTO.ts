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
import type { StatusDiskon } from './StatusDiskon';
import {
    StatusDiskonFromJSON,
    StatusDiskonFromJSONTyped,
    StatusDiskonToJSON,
    StatusDiskonToJSONTyped,
} from './StatusDiskon';

/**
 * 
 * @export
 * @interface PutDiskonDTO
 */
export interface PutDiskonDTO {
    /**
     * 
     * @type {number}
     * @memberof PutDiskonDTO
     */
    idDiskon?: number;
    /**
     * 
     * @type {number}
     * @memberof PutDiskonDTO
     */
    idMotor?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PutDiskonDTO
     */
    nama?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PutDiskonDTO
     */
    deskripsi?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PutDiskonDTO
     */
    jumlahDiskon?: number | null;
    /**
     * 
     * @type {StatusDiskon}
     * @memberof PutDiskonDTO
     */
    statusDiskon?: StatusDiskon;
    /**
     * 
     * @type {Date}
     * @memberof PutDiskonDTO
     */
    tanggalMulai?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof PutDiskonDTO
     */
    tanggalAkhir?: Date | null;
}



/**
 * Check if a given object implements the PutDiskonDTO interface.
 */
export function instanceOfPutDiskonDTO(value: object): value is PutDiskonDTO {
    return true;
}

export function PutDiskonDTOFromJSON(json: any): PutDiskonDTO {
    return PutDiskonDTOFromJSONTyped(json, false);
}

export function PutDiskonDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutDiskonDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'idDiskon': json['idDiskon'] == null ? undefined : json['idDiskon'],
        'idMotor': json['idMotor'] == null ? undefined : json['idMotor'],
        'nama': json['nama'] == null ? undefined : json['nama'],
        'deskripsi': json['deskripsi'] == null ? undefined : json['deskripsi'],
        'jumlahDiskon': json['jumlahDiskon'] == null ? undefined : json['jumlahDiskon'],
        'statusDiskon': json['statusDiskon'] == null ? undefined : StatusDiskonFromJSON(json['statusDiskon']),
        'tanggalMulai': json['tanggalMulai'] == null ? undefined : (new Date(json['tanggalMulai'])),
        'tanggalAkhir': json['tanggalAkhir'] == null ? undefined : (new Date(json['tanggalAkhir'])),
    };
}

export function PutDiskonDTOToJSON(json: any): PutDiskonDTO {
    return PutDiskonDTOToJSONTyped(json, false);
}

export function PutDiskonDTOToJSONTyped(value?: PutDiskonDTO | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'idDiskon': value['idDiskon'],
        'idMotor': value['idMotor'],
        'nama': value['nama'],
        'deskripsi': value['deskripsi'],
        'jumlahDiskon': value['jumlahDiskon'],
        'statusDiskon': StatusDiskonToJSON(value['statusDiskon']),
        'tanggalMulai': value['tanggalMulai'] == null ? undefined : ((value['tanggalMulai'] as any).toISOString()),
        'tanggalAkhir': value['tanggalAkhir'] == null ? undefined : ((value['tanggalAkhir'] as any).toISOString()),
    };
}

