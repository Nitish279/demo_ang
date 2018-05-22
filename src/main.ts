import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

  $(document).ready(function() {
    $('#navbarNav .search-form .form-group.wb_search_box').click(function() {
        $('#search_box_blk').toggleClass('hide_ele');
    });
  });

//   $(document).ready(function() {
//     // $('#navbarNav .search-form .form-group.wb_search_box').click(function() {
//     //     $('#search_box_blk').toggleClass('hide_ele');
//     // });
//     // $('.list_expand_menu').click(function() {
//     //     const ele = $(this).siblings().find('.nav-link span.left_nav_txt_hidden').toggleClass('close');
//     //     // setTimeout(function(){
//     //     //     ele.toggleClass('hide_ele').slideToggle('slow');;
//     //     // }, 500);
//     // });
//     // $('#toggleBtnLeftNav').click(function() {
//     //     $('.main_left_nav').toggleClass('hide_ele');
//     // });
//     // $('#toggleBtnSubNavItem').click(function() {
//     //     $('.asdfgh_block').toggleClass('hide_ele');
//     // });
//     // $('.rotate').click(function() {
//     //     $(this).toggleClass('down');
//     // });
//     // $('#qwerty ul li a').each(function() {
//     //     if ($(this).hasClass('active')) {
//     //         $('#subHeaderItem').text($(this).text());
//     //     }
//     // });
//     // $('#qwerty ul li a').click(function(e) {
//     //     e.preventDefault();
//     //     $('#qwerty ul li a').removeClass('active');
//     //     $(this).addClass('active');
//     // });
//     // $('.main_left_nav ul li a').eq(0).addClass('active');
//     // $('.main_left_nav ul li a').each(function() {
//     //     if ($(this).hasClass('active')) {
//     //         $('#leftNavItem').text($(this).text());
//     //     }
//     // });
//     // $('.main_left_nav ul li a').click(function(e) {
//     //     e.preventDefault();
//     //     $('.main_left_nav ul li a').removeClass('active');
//     //     $(this).addClass('active');
//     // });
//     // $('.main_left_nav ul li a').click(function() {
//     //     $('#leftNavItem').text($(this).text());
//     // });
//     // $('#qwerty ul li a').click(function() {
//     //     $('#subHeaderItem').text($(this).text());
//     // });
//   });
