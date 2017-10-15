$(function() {
  $('.datepicker').datepicker();
});


// Instantiate a slider
var mySlider = $("input.slider").bootstrapSlider();

// Call a method on the slider
var value = mySlider.bootstrapSlider('getValue');

// For non-getter methods, you can chain together commands
mySlider
  .bootstrapSlider('setValue', 5)
  .bootstrapSlider('setValue', 7);

function showDiv() {
  document.getElementById('maybeDiv').style.display = "block";
}
