var recipes = {};


function updateObjectWithKeyAndValue(object, key, value){
  var Copy = Object.assign({}, object, {key: value});
  return Copy
}

