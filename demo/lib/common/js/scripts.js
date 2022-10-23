// ----------------------------------------------------------------------------
// jquery-smooth-scroll
// ----------------------------------------------------------------------------
$('a').smoothScroll();


// ----------------------------------------------------------------------------
// TOPへ戻るボタン
// ----------------------------------------------------------------------------
$(window).on('load scroll', trigger_scroll_event);

/**
 * ページスクロールのトリガーイベントを発生させる
 */
function trigger_scroll_event(){

  let window = $(this),
      curr_window_top_line = window.scrollTop(),
      curr_window_bottom_line = window.height() + curr_window_top_line,
      top_section = $('header'),
      top_section_bottom_line = top_section.offset().top + top_section.height(),
      bottom_section_top_line = $('footer').offset().top,
      event_name;

  if(curr_window_top_line < top_section_bottom_line){

    event_name = 'page_top';

  }else if(curr_window_bottom_line < bottom_section_top_line){

    event_name = 'page_middle';

  }else{

    event_name = 'page_bottom';
  }

  $('#go_top_arrow').trigger('scroll_' + event_name);
}


$('#go_top_arrow').on('scroll_page_top', function(){

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

  if(class_name === void 0){
    class_name = '';
  }

  if(btn.hasClass(class_name) === false){
    btn.prop('class', class_name );
  }
}
