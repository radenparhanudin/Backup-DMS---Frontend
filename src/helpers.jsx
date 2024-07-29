function dateTime() {
  var date = new Date();
  var str =
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1) +
    "-" +
    date.getDate() +
    "-" +
    date.getHours() +
    "-" +
    date.getMinutes() +
    "-" +
    date.getSeconds();

  return str;
}

function getQueryParams(url) {
  const paramArr = url.slice(url.indexOf("?") + 1).split("&");
  const params = {};
  paramArr.map((param) => {
    const [key, val] = param.split("=");
    params[key] = decodeURIComponent(val);
  });
  return params;
}

function pluck(array, key) {
  return array.map((item) => item[key]);
}

function toCamelCase(str) {
  return str
    .toLowerCase()
    .split("-")
    .map((word, index) => {
      if (index === 0) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
}
export { getQueryParams, pluck, dateTime, toCamelCase };
