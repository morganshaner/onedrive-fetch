# @morganshaner/onedrive-fetch

Fetches and returns children's json from a public OneDrive folder using the OneDrive API.

## Install

```
Coming soon.
```

## Usage

```js
const odfetch = require("onedrive-fetch");

odfetch("https://1drv.ms/u/s!AsOBq5tE-6XDgZpN9uwZG5iZWGi3vw", //Required first argument must be share URL of root folder
["Folder", "Sub-folder"]) //Optional second argument accepts list of sub-folders to open
  .then(function (children) {
  
    if (children.error) {
      console.log(children); //Handle error
     
    } else {

      //Handle success
      children.forEach((child) => {
        console.log(child.name);
        console.log(child.webUrl);
      });
      
      //Example logs
      //"File 1.jpg"
      //"https://1drv.ms/i/s!AsOBq5tE-6XDgZpQ9uwZG5iZWGi3vw"
      //"File 2.jpg"
      //"https://1drv.ms/i/s!AsOBq5tE-6XDgZpR9uwZG5iZWGi3vw"
      
  }
});
```
