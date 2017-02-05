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
      window.swaps.push([el, pivot[0], true]);
      less.push(el);
    } else {
      window.swaps.push([pivot[0], el], false);
      greater.push(el);
    }
  });

  return quickSort(less).concat(pivot, quickSort(greater))
};

var compare = function(a, b) {
  var a = $(a).text(),
      b = $(b).text(),
      less = a <= b;

  return less;
};

var swap = function(id_a, id_b, condition) {
  var $a = $('li[data-id=' + id_a + ']'),
      $b = $('li[data-id=' + id_b + ']'),
      $a_span = $a.children('span'),
      $b_span = $b.children('span');

  $a.addClass('active');
  $b.addClass('active');

  setTimeout(function() {
    if(condition) {
      var old_a = $a_span.clone().css({ top: null }),
          old_b = $b_span.clone().css({ top: null });

      $a_span.replaceWith(old_b);
      $b_span.replaceWith(old_a);
    }

    $('.active').removeClass('active');
  }, 1000);
};

var sortList = function() {
  var items = itemsHolder.find('li');
  window.swaps = [];
  quickSort(items.toArray());

  $.each(window.swaps, function(i, el) {
    var item1 = el[0],
        item2 = el[1],
        condition = el[2];

    setTimeout(function() {
      swap($(item1).data('id'), $(item2).data('id'), condition);
    }, 2000 * i);
  });
};

window.swaps = [];

$('#button-options').on('click', function() {
  var selectOptionsVal = $('#select-options').val();

  if(selectOptionsVal == 'Shuffle') {
    shuffle(itemsHolder.find('li'));
  } else if(selectOptionsVal == 'Sort') {
    sortList();
    // var result = quickSort(itemsHolder.find('li').toArray());
  }
});
