/*
  Name: LinkIt
  Author: Ken Rebane
  Version: 0.1;
*/
$(document).ready(function() {

  $.fn.linkIt = function(options) {
    //Default settings
    var settings = $.extend({
        href: null,
        text: null,
        target: "_blank"
    }, options);

    //Validation
    if ( settings.href === null ) {
      console.log("You need an href in settings for LinkIt to work");
      return this;
    }

    return this.each(function() {
      var object = $(this);

      if ( settings.text === null ) {
        settings.text = object.text();
      }

      object.wrap("<a target='"+settings.target+"' href='"+settings.href+"'></a>")
        .text(settings.text);

    });



  };

});
