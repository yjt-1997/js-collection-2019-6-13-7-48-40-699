'use strict';

function grouping_count(collection) {
  var json = {};
  collection.filter(function (item) {
    if (json[item] == undefined)
      json[item] = 1;
    else json[item]++;
  });
  return json;
}
module.exports = grouping_count;
