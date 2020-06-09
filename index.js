//if can use require
const cities = require("./cities.json");//if can require

exports.filterByName = ( query , limit = 3) => {
    if(query && query.length >= limit){
        return cities.filter(item => {
            let result = item.name.toLowerCase().search( query.toLowerCase()) >= 0
            result = result || item.subcountry.toLowerCase().search( query.toLowerCase() ) >= 0
            result = result || item.country.toLowerCase().search( query.toLowerCase()) >= 0
            return result;
        })
    }else
        return [];
}  