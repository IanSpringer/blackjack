var myArray = [1, 7, 2, 4, 5, 6, 8, 9, 6, 4]

var onlyEven;


var evenOccurence = function(array) {
var object = {};
var num = 0;
  for(var i = 0; i < array.length; i++){
      if (object[array[i]]) {
        object[array[i]]++;
      }else {
        object[array[i]] = 1;
      }
    }
  for (var j = 0; j < array.length; j++){
    if(object[array[j]] % 2 === 0) {
      return array[j];
    }
  }

  }
