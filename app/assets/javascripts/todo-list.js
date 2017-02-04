var itemInput = $('#input-item'),
    addButton = $('#button-item'),
    itemsHolder = $('#list-items');

var createNewItemElement = function(itemString) {
  var listItem = document.createElement("li");
  var text = document.createElement("span");
  var deleteButton = document.createElement("button");

  $(deleteButton).text("Delete");
  $(deleteButton).addClass("delete");

  $(text).text(itemString);

  $(listItem).append(text);
  $(listItem).append(deleteButton);

  return listItem;
}

var addItem = function() {
  var listItem = createNewItemElement(itemInput.val());
  itemsHolder.append(listItem);
  bindItemEvents(listItem);
  showOptions();

  itemInput.val('');
}

var bindItemEvents = function(listItem) {
  var deleteButton = $(listItem).find("button.delete");

  deleteButton.on('click', function() {
    itemsHolder.find($(this).parent()).remove();
    showOptions();
  });
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
