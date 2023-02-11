# @morganshaner/onedrive-fetch

Fetches and returns children's json data from a public OneDrive folder using the OneDrive API.

## Install

```
Coming soon.
```

## Usage

```js
const odfetch = require("onedrive-fetch");

odfetch("https://1drv.ms/u/s!AsOBq5tE-6XDgZpN9uwZG5iZWGi3vw", //Required first argument must be share URL of root folder
["Folder", "Sub-folder"]) //Optional second argument accepts list of sub-folder names to open
.then( //Then method is essential to await the asynchronous fetch process. Or, await may be used in an async function.
  function (result) {
    if (result.error) {
    
      //Handle errors
      console.log(result);
      
    } else {
    
      //Handle successful fetch
      result.forEach((item) => {
        console.log({ name: item.name, url: item.webUrl });
      });
      
      //Example log
      //{ "name": "File 1.jpg", "url": "https://1drv.ms/i/s!AsOBq5tE-6XDgZpQ9uwZG5iZWGi3vw" }
      //{ "name": "File 2.jpg", "url": "https://1drv.ms/i/s!AsOBq5tE-6XDgZpR9uwZG5iZWGi3vw" }
    }
  }
);
```
