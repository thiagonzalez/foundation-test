function shuffle(array) {
  var oldItemOrder = array;

  for (var i = 0; i < array.length - 1; i++) {
    var math = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[math];
    array[math] = temp;
  }

  itemsHolder.html(array);
}

var quickSort = function(arr, message) {
  if (arr.length <= 1) return arr;
  console.log(arr);
  console.log(message);

  var pivot = arr.splice(0, 1);

  var i = 0;
  function eachCombination (pivot) {
    setTimeout(function () {
      var item1 = arr[i],
          item2 = pivot[0];

      if (compare(item1, item2)) {
        window.less.push(item1);
        // console.log($(item1).text(), $(item2).text(), 'less');
        phase1(item1, item2, true);
      } else {
        window.greater.push(item1);
        // console.log($(item1).text(), $(item2).text(), 'greater');
        phase1(item1, item2, false);
      }

      i++;
      if (i < arr.length) {
        eachCombination(pivot);
      } else {
        console.log(window.less, window.greater, $(item2).toArray());
        quickSort(window.less, 'less').concat($(item2).toArray(), quickSort(greater, 'greater'));
      }
    }, 1500);
  }

  eachCombination(pivot);
};

var compare = function(a, b) {
  var a = $(a).text(),
      b = $(b).text(),
      less = a < b;

  return less;
};

function phase1(item1, item2, condition) {
  /* Highlight the two items for comparison
  */
  $(item1).addClass('active');
  $(item2).addClass('active');

  // Initiatite phase 2 or 3
  if(condition) {
    setTimeout(function () { phase2(item1, item2, condition) }, 500);
  } else {
    setTimeout(function () { phase3(item1, item2, condition) }, 500);
  }
}

function phase2(item1, item2, condition) {
  // Move item1 to item2's position
  var delta = $(item2).offset().top - $(item1).offset().top;
  $(item1).css('transform', 'translateY('+delta+'px)');
  // Move item2 to item1's position
  $(item2).css('transform', 'translateY('+ (-delta) +'px)');
  // Initiatite phase 2
  setTimeout(function () { phase3(item1, item2, condition) }, 500);
}

function phase3(item1, item2, condition) {
  // Remove the "active" class from both elements
  $(item1).removeClass('active');
  $(item2).removeClass('active');

  // Remove the translateY modifiers
  $(item1).css('transform', '');
  $(item2).css('transform', '');

  if(condition) phase4(item1, item2);
}

function phase4(item1, item2) {
  // Swap the element contents at DOM level
  var item1Clone = $(item1).text();
  var item2Clone = $(item2).text();

  $(item1).find('span').text(item2Clone);
  $(item2).find('span').text(item1Clone);
}


$('#button-options').on('click', function() {
  var selectOptionsVal = $('#select-options').val();

  if(selectOptionsVal == 'Shuffle') {
    shuffle(itemsHolder.find('li'));
  } else if(selectOptionsVal == 'Sort') {
    window.less = [];
    window.greater = [];

    var items = itemsHolder.find('li');
    quickSort(items.toArray(), 'initial');
    // var results = quickSort(items.toArray());
    // itemsHolder.html(results);
  }
});
