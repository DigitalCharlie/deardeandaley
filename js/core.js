$(function() {

    var showModal = function(selector) {
      $(selector).css('display', 'block');
      setTimeout(function() {
        $(selector).css('opacity', 1);
      }, 50);
    };

    var hideModal = function(selector) {
      $(selector).css('display', 'none');
      setTimeout(function() {
        $(selector).css('opacity', 0);
      }, 50);
    };

    setTimeout(function(){
      showModal('#shareModal');
    }, 1000);

    $("#shareX").click(function() {
      hideModal('#shareModal');
    });

    $("#emailthedean").on('click', function(event){
      showModal('#shareModal');
    });
});