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
import type { Pengguna } from './Pengguna';
import {
    PenggunaFromJSON,
    PenggunaFromJSONTyped,
    PenggunaToJSON,
    PenggunaToJSONTyped,
} from './Pengguna';
import type { StatusMitra } from './StatusMitra';
import {
    StatusMitraFromJSON,
    StatusMitraFromJSONTyped,
    StatusMitraToJSON,
    StatusMitraToJSONTyped,
} from './StatusMitra';

/**
 * 
 * @export
 * @interface Mitra
 */
export interface Mitra {
    /**
     * 
     * @type {number}
     * @memberof Mitra
     */
    idMitra?: number;
    /**
     * 
     * @type {StatusMitra}
     * @memberof Mitra
     */
    status?: StatusMitra;
    /**
     * 
     * @type {string}
     * @memberof Mitra
     */
    idPengguna?: string | null;
    /**
     * 
     * @type {Pengguna}
     * @memberof Mitra
     */
    pengguna?: Pengguna;
}



/**
 * Check if a given object implements the Mitra interface.
 */
export function instanceOfMitra(value: object): value is Mitra {
    return true;
}

export function MitraFromJSON(json: any): Mitra {
    return MitraFromJSONTyped(json, false);
}

export function MitraFromJSONTyped(json: any, ignoreDiscriminator: boolean): Mitra {
    if (json == null) {
        return json;
    }
    return {
        
        'idMitra': json['idMitra'] == null ? undefined : json['idMitra'],
        'status': json['status'] == null ? undefined : StatusMitraFromJSON(json['status']),
        'idPengguna': json['idPengguna'] == null ? undefined : json['idPengguna'],
        'pengguna': json['pengguna'] == null ? undefined : PenggunaFromJSON(json['pengguna']),
    };
}

export function MitraToJSON(json: any): Mitra {
    return MitraToJSONTyped(json, false);
}

export function MitraToJSONTyped(value?: Mitra | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'idMitra': value['idMitra'],
        'status': StatusMitraToJSON(value['status']),
        'idPengguna': value['idPengguna'],
        'pengguna': PenggunaToJSON(value['pengguna']),
    };
}

