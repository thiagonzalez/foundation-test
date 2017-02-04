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

function sort(array) {

}

$('#button-options').on('click', function() {
  var selectOptionsVal = $('#select-options').val();

  if(selectOptionsVal == 'Shuffle') {
    shuffle(itemsHolder.find('li'));
  } else if(selectOptionsVal == 'Sort') {
    sort(itemsHolder.find('li'));
  }
});
