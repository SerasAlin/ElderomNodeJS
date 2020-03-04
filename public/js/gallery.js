$(document).ready(function(){

    // Get current page URL
    var url = window.location.href
    // remove # from URL
    url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
    // remove parameters from URL
    url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
    // select file name
    url = url.substr(url.lastIndexOf("/galerie") + 1)
    url = '/' + url;
    // If file name not avilable
    if(url == ''){
    url = '/';
    }
    // Loop all menu items
    $('.navbar-nav.text-uppercase.ml-auto li').each(function(){
     // select href
     var href = $(this).find('a').attr('href');
     console.log(href)
     // Check filename
     if(url == href){
      // Add active class
      $(this).find('a').addClass('active');
     }
    });

});
  