var itemInput = $('#input-item'),
    addButton = $('#button-item'),
    itemsHolder = $('#list-items');

var createNewItemElement = function(itemString) {
  var listItem = document.createElement("li"),
      text = document.createElement("span");

  $(text).text(itemString);
  $(listItem).append(text);

  return listItem;
}

var addItem = function() {
  var listItem = createNewItemElement(itemInput.val());
  itemsHolder.append(listItem);
  showOptions();

  itemInput.val('');
}

var showOptions = function() {
  if(itemsHolder.find('li').length >= 3) {
    $('#options').removeClass('hide');
  } else {
    $('#options').addClass('hide');
  }
}


// Call addItem
$(addButton).on('click', function() {
  addItem();
});

$(itemInput).keyup(function(e){
  if(e.keyCode == 13) {
    addItem();
  }
});
