//= require jquery
//= require jquery_ujs
//= require foundation
//= require chosen-jquery
//= require_tree .

$(function(){ $(document).foundation(); });

$("select").chosen({
  width: '300px',
  search_contains: true
});
