var itemInput = $('#input-item'),
    addButton = $('#button-item'),
    itemsHolder = $('#list-items'),
    id = 1;

var createNewItemElement = function(itemString) {
  var listItem = document.createElement("li");
  var text = document.createElement("span");
  var deleteButton = document.createElement("button");

  $(listItem).attr('data-id', id);
  $(text).text(itemString);
  $(listItem).append(text);

  id++;
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
