module.exports = function odfetch(top_input_url, name_array = []) {
  function fetcher(input_url, name_array, prev_name) {
    return fetch(
      "https://api.onedrive.com/v1.0/shares/u!" +
        btoa(input_url) +
        "/root?expand=children"
    )
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response);
      })
      .then(function (json) {
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
      })
      .catch((error) => {
        return {
          error:
            "OneDrive API returned an error code (" +
            error.status +
            "). Check arguments."
        };
      });
  }

  let checked_top_input_url = top_input_url.split("?")[0];

  let output = fetcher(checked_top_input_url, name_array, name_array[0]);
  return output;
}
