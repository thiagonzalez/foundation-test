// var swap = function(id_a, id_b) {
//   console.log(id_a, id_b);

//   var $a = $('li[data-id=' + id_a + ']'),
//       $b = $('li[data-id=' + id_b + ']'),
//       $a_span = $a.children('span'),
//       $b_span = $b.children('span');
//       // a_position = $a.position().top,
//       // b_position = $b.position().top;

//   $a.addClass('active');
//   $b.addClass('active');

//   setTimeout(function() {
//     // $a_span.animate({ top: b_position + 'px' }, 500);
//     // $b_span.animate({ top: a_position + 'px' }, 500);

//     setTimeout(function() {
//       var old_a = $a_span.clone().css({ top: null }),
//           old_b = $b_span.clone().css({ top: null });

//       $a_span.replaceWith(old_b);
//       $b_span.replaceWith(old_a);

//       $('.active').removeClass('active');
//     }, 1000);
//   }, 500);
// };



// var compare = function(a, b) {
//   var a = $(a).text(),
//       b = $(b).text(),
//       less = a <= b;

//   return less;
// };

// var quickSort = function(arr) {
//   if (!arr.length) return arr;

//   var pivot = arr.splice(0, 1);
//   var less = [];
//   var greater = [];

//   arr.forEach(function (el) {
//     if (compare(el, pivot[0])) {
//       window.swaps.push([el, pivot[0]]);
//       less.push(el);
//     } else {
//       window.swaps.push([pivot[0], el]);
//       greater.push(el);
//     }
//   });

//   return quickSort(less).concat(pivot, quickSort(greater))
// };

// window.swaps = [];

// var sortList = function() {
//   var items = itemsHolder.find('li');
//   window.swaps = [];
//   quickSort(items.toArray());

//   $.each(window.swaps, function(i, el) {
//     console.log($(this)[0].data('id'));

//     setTimeout(function() {
//       swap($(this[0]).data('id'), $(this[1]).data('id'));
//     }, i * 2000 );
//   });
// };

// $(function() {
//   $('#button-options').on('click', sortList);
// });
