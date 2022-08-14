// paralax
$(window).scroll(function () {
  var wscroll = $(this).scrolltop();

  $('jumbotron img').css({
    transfrom: 'translate(0px, ' + wscroll / 2 + '%)',
  });

  $(' jumbotron h1').css({
    transfrom: 'translate(0px, ' + wscroll / 2 + '%)',
  });

  $('jumbotron p').css({
    transfrom: 'translate(0px, ' + wscroll / 2 + '%)',
  });
});
