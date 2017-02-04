//= require jquery
//= require jquery_ujs
//= require foundation
//= require chosen-jquery
//= require_tree .

$(function(){ $(document).foundation(); });

$("select").chosen({
  no_results_text: "Oops, nothing found!",
  width: '300px'
});
