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

  arr.forEach(function (el) {
    if (compare(el, pivot[0])) {
      window.swaps.push([el, pivot[0]]);
      less.push(el);
    } else {
      window.swaps.push([pivot[0], el]);
      greater.push(el);
    }
  })

  return quickSort(less).concat(pivot, quickSort(greater))
};

var compare = function(a, b) {
  var a = $(a).text(),
      b = $(b).text(),
      less = a <= b;

  return less;
};

window.swaps = [];


$('#button-options').on('click', function() {
  var selectOptionsVal = $('#select-options').val();

  if(selectOptionsVal == 'Shuffle') {
    shuffle(itemsHolder.find('li'));
  } else if(selectOptionsVal == 'Sort') {
    var result = quickSort(itemsHolder.find('li').toArray());

    itemsHolder.html(result);
    bindItemEvents(result);

    $.each(result, function(idx, item) {
      // console.log(item.text());
    });
  }
});
