# filterByCities
Simple function that use data from https://github.com/datasets/world-cities

## Usage
### Javascript
```
const { filterByName } = require("filterbycities");
console.log(filterByName('Bangk'));
[{
    "name": "Tanjung Pandan",
    "country": "Indonesia",
    "subcountry": "Bangka–Belitung Islands",
    "geonameid": 1624877
  },
  ...
  ]
```
### TypeScript
```
import { filterByName } from 'filterbycities';
console.log(filterByName('Bangk'));
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