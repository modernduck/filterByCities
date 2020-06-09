# filterByCities
Simple function that use data from https://github.com/datasets/world-cities

## Usage

```const { filterByName } = require("./index");
console.log(filterByName('Bangk'))
//return
/*
[{
    "name": "Tanjung Pandan",
    "country": "Indonesia",
    "subcountry": "Bangka–Belitung Islands",
    "geonameid": 1624877
  },
  ...
  ]
```
##Warning
This code will load the cities.json directly which is 2 MB if you want to do lazy loading please avoid this code