document.addEventListener("turbolinks:load", function() {
  $(function () {
    $('.arrow').on('click', () => {
        $('.more_list').slideToggle();
    });
  });

  $(document).click(function(event){
    var target = $(event.target);

    if(target.hasClass('.more_list')) {
        target.fadeOut();
    }
    
  });

  $(function() {
    $(".user_nav").hover(
      function() {
        $("#user-info").slideDown();
      },
      function() {
        $("#user-info").slideUp();
      }
    );
  });
})