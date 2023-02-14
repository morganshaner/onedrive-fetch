# onedrive-fetch

Fetches and returns children's json data (ex: name and URL) from a public OneDrive folder using the OneDrive API.

## Install

```
$ npm install onedrive-fetch
```

## Usage

Test

```js
const odfetch = require("onedrive-fetch");

odfetch("https://1drv.ms/u/s!AsOBq5tE-6XDgZpN9uwZG5iZWGi3vw", //Required OneDrive root folder share URL
        ["Folder", "Sub-folder"]) //Optional array of sub-folder names to open
  .then( //Note this is asynchronous
    function (result) {
      if (result.error) {
        
        //Handle errors
        console.log(result);
      } else {
      
        //Handle successful fetch
        result.forEach((item) => {
          console.log({ name: item.name, url: item.webUrl });
        });
        //FYI: OneDrive API returns an array of child objects
        
        //Example log
        //{ "name": "File 1.jpg", "url": "https://1drv.ms/i/s!AsOBq5tE-6XDgZpQ9uwZG5iZWGi3vw" }
        //{ "name": "File 2.jpg", "url": "https://1drv.ms/i/s!AsOBq5tE-6XDgZpR9uwZG5iZWGi3vw" }
      }
  }
);
```
