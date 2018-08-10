// Write JS/JQuery code to give the class “learn” to all links on a page that have the text “learn more”:

// HTML
<a href="#">learn more</a>
<a href="#">learn more</a>
<a href="#">learn more</a>
<button>Add the "learn" class to anchors</button>


// Added an onClick event to test.
// Please visit https://codepen.io/pkayokay/pen/KBJpzd
$('button').on('click', function() {
  $('a:contains("learn more")').addClass('learn')
})
