// 'use strict';
//
// var articleView = {};
//
// articleView.populateFilters = function() {
//   $('article').each(function() {
//     if (!$(this).hasClass('template')) {
//       var val = $(this).find('address a').text();
//       var optionTag = `<option value="${val}">${val}</option>`;
//
//       if ($(`#author-filter option[value="${val}"]`).length === 0) {
//         $('#author-filter').append(optionTag);
//       }
//
//       val = $(this).attr('data-category');
//       optionTag = `<option value="${val}">${val}</option>`;
//       if ($(`#category-filter option[value="${val}"]`).length === 0) {
//         $('#category-filter').append(optionTag);
//       }
//     }
//   });
// };
//
// articleView.handleAuthorFilter = function() {
//   $('#author-filter').on('change', function() {
//     if ($(this).val()) {
//       $('article').hide();
//       $(`article[data-author="${$(this).val()}"]`).fadeIn();
//     } else {
//       $('article').fadeIn();
//       $('article.template').hide();
//     }
//     $('#category-filter').val('');
//   });
// };
//
// articleView.handleCategoryFilter = function() {
//   $('#category-filter').on('change', function() {
//     if ($(this).val()) {
//       $('article').hide();
//       $(`article[data-category="${$(this).val()}"]`).fadeIn();
//     } else {
//       $('article').fadeIn();
//       $('article.template').hide();
//     }
//     $('#author-filter').val('');
//   });
// };
//
// articleView.handleMainNav = function() {
//   $('.main-nav').on('click', '.tab', function() {
//     $('.tab-content').hide();
//     $('#' + $(this).data('content')).fadeIn();
//   });
//
//   $('.main-nav .tab:first').click();
// };
//
// articleView.setTeasers = function() {
//   $('.article-body *:nth-of-type(n+2)').hide();
//
//   $('#articles').on('click', 'a.read-on', function(e) {
//     e.preventDefault();
//     $(this).parent().find('*').fadeIn();
//     $(this).hide();
//   });
// };
//
// articleView.initNewArticlePage = function() {
//   // TODO: Ensure the main .tab-content area is revealed. We might add more tabs later or otherwise edit the tab navigation.
//
//
//   // TODO: The new articles we create will be copy/pasted into our source data file.
//   // Set up this "export" functionality. We can hide it for now, and show it once we have data to export.
//
//   $('#article-json').on('focus', function(){
//     this.select();
//   });
//
//   // TODO: Add an event handler to update the preview and the export field if any inputs change.
//   $('#new-article-form').on('submit', (e) => {
//     e.preventDefault();
//     articleView.create();
//   });
//   // articleView.setTeasers();
//   $('#articles').html('');
// };
//
// articleView.create = function() {
//   // TODO: Set up a var to hold the new article we are creating.
//   // Clear out the #articles element, so we can put in the updated preview
//   var newArticle = {};
//   var $form = $('#new-article-form');
//
//   // TODO: Instantiate an article based on what's in the form fields:
//
//     newArticle.title = $form.find('input[name="article-title"]').val();
//     newArticle.body = $form.find('textarea').val();
//     newArticle.author = $form.find('input[name="article-author"]').val();
//     newArticle.authorUrl = $form.find('input[name="article-url"]').val();
//     newArticle.category = $form.find('input[name="article-category"]').val();
//     if ($form.find('input[name="publish"]').is(':checked')) {
//       newArticle.publishedOn = new Date();
//     }
//   // TODO: Use our interface to the Handblebars template to put this new article into the DOM:
// // var newArticleHtml = Handlebars.compile($('#article-template').html())(newArticle);
// // $('articles').append(newArticleHtml);
// var article = new Article(newArticle);
// $('#articles').prepend(article.toHtml());
//   // TODO: Activate the highlighting of any code blocks; look at the documentation for hljs to see how to do this by placing a callback function in the .each():
//   $('pre code').each();
//
//   // TODO: Show our export field, and export the new article as JSON, so it's ready to copy/paste into blogArticles.js:
// $('#articles-export-json').val(JSON.stringify(newArticle));
// };
//
//
// articleView.initIndexPage = function() {
//   articleView.populateFilters();
//   articleView.handleCategoryFilter();
//   articleView.handleAuthorFilter();
//   articleView.handleMainNav();
//   articleView.setTeasers();
// };

'use strict';

var articleView = {};

articleView.populateFilters = function() {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      var val = $(this).find('address a').text();
      var optionTag = `<option value="${val}">${val}</option>`;

      if ($(`#author-filter option[value="${val}"]`).length === 0) {
        $('#author-filter').append(optionTag);
      }

      val = $(this).attr('data-category');
      optionTag = `<option value="${val}">${val}</option>`;
      if ($(`#category-filter option[value="${val}"]`).length === 0) {
        $('#category-filter').append(optionTag);
      }
    }
  });
};

articleView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $(`article[data-author="${$(this).val()}"]`).fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#category-filter').val('');
  });
};

articleView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $(`article[data-category="${$(this).val()}"]`).fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#author-filter').val('');
  });
};

articleView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });

  $('.main-nav .tab:first').click();
};

articleView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide();

  $('#articles').on('click', 'a.read-on', function(e) {
    e.preventDefault();
    $(this).parent().find('*').fadeIn();
    $(this).hide();
  });
};

articleView.initNewArticlePage = function() {
  // TODO: Ensure the main .tab-content area is revealed. We might add more tabs later or otherwise edit the tab navigation.
  $('.tab-content').show();

  // TODO: The new articles we create will be copy/pasted into our source data file.
  // Set up this "export" functionality. We can hide it for now, and show it once we have data to export.

  $('#article-json').on('focus', function(){
    this.select();
  });

  // TODO: Add an event handler to update the preview and the export field if any inputs change.
  $('#new-article-form').on('submit', (e) => {
    e.preventDefault();
    articleView.create();
  });

  $('#articles').html('');
};

articleView.create = function() {
  // TODO: Set up a var to hold the new article we are creating.
  // Clear out the #articles element, so we can put in the updated preview
  var newArticle = {};
  var $form = $('#new-article-form');


  // TODO: Instantiate an article based on what's in the form fields:
  newArticle.title = $form.find('input[name="article-title"]').val();
  newArticle.body = $form.find('textarea').val();
  newArticle.author = $form.find('input[name="article-author"]').val();
  newArticle.authorUrl = $form.find('input[name="author-url"]').val();
  newArticle.category = $form.find('input[name="article-category"]').val();
  if ($form.find('input[name="publish"]').is(':checked')) {
    newArticle.publishedOn = new Date();
  }

  // TODO: Use our interface to the Handblebars template to put this new article into the DOM:
//  var template = Handlebars.compile($('#article-template').html());
//  var new ArticleHtml = template(newArticle);

  var article = new Article(newArticle);
  $('#articles').prepend(article.toHtml());


  // TODO: Activate the highlighting of any code blocks; look at the documentation for hljs to see how to do this by placing a callback function in the .each():
  $('pre code').each();

  // TODO: Show our export field, and export the new article as JSON, so it's ready to copy/paste into blogArticles.js:
  $('#article-export-json').val(JSON.stringify(newArticle));
};


articleView.initIndexPage = function() {
  articleView.populateFilters();
  articleView.handleCategoryFilter();
  articleView.handleAuthorFilter();
  articleView.handleMainNav();
  articleView.setTeasers();
};
