export declare const filterByName:( query:string , limit?:number ) => Array<{
    name:string,
    country:string,
    subcountry:string,
    geonameid:number
}>

export declare const filterByCityName:( query:string , limit?:number ) => Array<string>

export declare const cities:Array<{
    name:string,
    country:string,
    subcountry:string,
    geonameid:number
}>

export declare const citiesNames:Array<string>