function shuffle(array) {
  var oldItemOrder = array;

  for (var i = 0; i < array.length - 1; i++) {
    var math = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[math];
    array[math] = temp;
  }

  itemsHolder.html(array);
  bindItemEvents(array);
}

var quickSort = function(arr) {
  if (!arr.length) return arr;

  var pivot = arr.splice(0, 1),
      less = [],
      greater = [];

  for(var i = 0; i < arr.length; i++) {
    var el = arr[i];

    if (compare(el, pivot[0])) {
      less.push(el);
    } else {
      greater.push(el);
    }
  }

  return quickSort(less).concat(pivot, quickSort(greater))
};

var compare = function(a, b) {
  var a = $(a).text(),
      b = $(b).text(),
      less = a <= b;

  return less;
};


$('#button-options').on('click', function() {
  var selectOptionsVal = $('#select-options').val();

  if(selectOptionsVal == 'Shuffle') {
    shuffle(itemsHolder.find('li'));
  } else if(selectOptionsVal == 'Sort') {
    var items = itemsHolder.find('li');
    var results = quickSort(items.toArray());
    itemsHolder.html(results);
  }
});
