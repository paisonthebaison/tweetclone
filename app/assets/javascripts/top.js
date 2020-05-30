document.addEventListener("turbolinks:load", function() {
  $(function () {
    $('.arrow').on('click', () => {
        $('.more_list').slideToggle();
    });
  });
})