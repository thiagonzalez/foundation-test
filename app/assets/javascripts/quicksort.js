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
      window.swaps.push([pivot[0], el, false]);
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

  console.log($a_span.text() <= $b_span.text());
  console.log(condition);
  console.log($a_span.text());
  console.log($b_span.text());

  if(condition) {
    setTimeout(function() {
      var delta1 = $b.offset().top - $a.offset().top;
      $a.css('transform', 'translateY('+delta1+'px)');

      // Move item2 to item1's position
      var delta2 = $a.offset().top - $b.offset().top;
      $b.css('transform', 'translateY('+delta2+'px)');
    }, 400);


    setTimeout(function() {
      var old_a = $a_span.clone().css({ top: null }),
          old_b = $b_span.clone().css({ top: null });

      $a_span.replaceWith(old_b);
      $b_span.replaceWith(old_a);

      $a.attr('data-id', id_b);
      $b.attr('data-id', id_a);

      $a.css('transform', '');
      $b.css('transform', '');
    }, 800);
  }

  setTimeout(function() {
    $('.active').removeClass('active');
  }, 800);
};

var sortList = function() {
  var items = itemsHolder.find('li');
  window.swaps = [];
  quickSort(items.toArray());

  $.each(window.swaps, function(i, el) {
    var item1 = el[0],
        item2 = el[1];

    setTimeout(function() {
      swap($(item1).data('id'), $(item2).data('id'), el[2]);
    }, 1500 * i);
  });
};

window.swaps = [];

$('#button-options').on('click', function() {
  var selectOptionsVal = $('#select-options').val();

  if(selectOptionsVal == 'Shuffle') {
    shuffle(itemsHolder.find('li'));
  } else if(selectOptionsVal == 'Sort') {
    sortList();
  }
});
