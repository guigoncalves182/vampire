export function rand(min, max) {
    if (min === max ) return min
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  export function shuffle(array) {
    var i = array.length,
      j = 0,
      temp;
  
    while (i--) {
      j = Math.floor(Math.random() * (i + 1));
  
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  
    return array;
  }
  