module.exports = function odfetch(input_url, name_array) {
  if ((arguments.length = 0)) {
    return { error: "This method requires arguments. See documentation." };
  }

  function fetcher(input_url, name_array, prev_name) {
    return fetch(
      "https://api.onedrive.com/v1.0/shares/u!" +
        btoa(input_url) +
        "/root?expand=children"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        if (json.error) {
          return { error: "Invalid folder url. See documentation." };
        }

        if (json.children == undefined) {
          return { error: "Did not find child name: " + prev_name };
        }

        let target = undefined;
        for (let x = 0; x < json.children.length; x++) {
          if (json.children[x].name == name_array[0]) {
            target = json.children[x].webUrl;
            break;
          }
        }

        if (name_array.length > 1 && target == undefined) {
          return { error: "Did not find child name: " + name_array[0] };
        }

        if (name_array.length > 0) {
          return fetcher(target, name_array.slice(1), name_array[0]);
        } else {
          return json.children;
        }
      });
  }
  let output = fetcher(input_url, name_array, name_array[0]);
  return output;
}
