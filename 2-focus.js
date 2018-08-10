// Write JS/JQuery code that sets focus to an anchor tag with id="main" when a button with class="skip" is clicked.

// HTML code
<div>
  <a href="#" id="main">Link</a>
</div>
<button class="skip">Skip</button>

// jQuery
$('button.skip').on('click', function() {
  $('a#main').focus()
})


// Here's a jsfiddle I created to test.
// https://codepen.io/pkayokay/pen/XBObXM?editors=1010