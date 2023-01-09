// ----------------------------------------------------------------------------
// jquery-smooth-scroll
// ----------------------------------------------------------------------------
$('a:not([data-smooth-scroll="false"])').smoothScroll({
  beforeScroll: function () {

    $('a:not([data-smooth-scroll="false"])').trigger('smooth_scroll.before');
  }
});


// ----------------------------------------------------------------------------
// Go top
// ----------------------------------------------------------------------------
$(window).on('scroll_page_top', function(){

  go_top_arrow_handle();

}).on('scroll_page_middle', function(){

  go_top_arrow_handle('is_fixed');

}).on('scroll_page_bottom', function(){

  go_top_arrow_handle('is_absolute');
});


/**
 * ボタンのクラス名切り替え
 * @param {string} class_name
 */
function go_top_arrow_handle( class_name ){

  let btn = $('#go_top_arrow');

  if($('#go_top_arrow').length === 0) return;

  if(class_name === void 0){
    class_name = '';
  }

  if(btn.hasClass(class_name) === false){
    btn.prop('class', class_name );
  }
}
