'use strict';

$(function() {

    SyntaxHighlighter.defaults['toolbar'] = false;
    SyntaxHighlighter.all();

// footer
//-----------------------------------------------------------------------------
  var
    $pageWrapper = $('#pageWrapper'),
    footer  = {
      $element: $('#footer'),
      height: null,
      place: function() {
        var self = this;
        self.height = self.$element.outerHeight();
        $pageWrapper.css({paddingBottom: self.height});
        self.$element.css({marginTop: -self.height});
      }
    };

  $(window).on({
    load: function() {
      footer.place();
    },
    resize: function() {
      footer.place();
    }
  });

// placeholder
//-----------------------------------------------------------------------------
  $('input[placeholder], textarea[placeholder]').placeholder();

});