var recipes = {};

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  
}

function updateObjectWithKeyAndValue(object, key, value){
  var Copy = Object.assign({}, object, {[key]: value});
  return Copy
}

