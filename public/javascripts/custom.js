// dropdown nav bar
$(document).ready(function () {
  $(".dropdown-trigger").dropdown({
    hover: true,
    alignment: "bottom",
    coverTrigger: false
  });
})

// Modal
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  var modal = M.Modal.init(elems, 0.5);
});

// datetime picker
$(document).ready(function () {
  $('.datepicker').datepicker({
    selectMonths: true, // Creates a dropdown to control month
    yearRange: [1970, (new Date()).getFullYear()], // Creates a dropdown of 15 years to control year
    format: "yyyy-mm-dd"
  });
});

// drop-down
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll("select");
  var dropdown = M.FormSelect.init(elems, {});
});

// Carousel
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".carousel");
  var carousel = M.Carousel.init(elems, {
    fullWidth: true,
    indicators: true
  });
});

// clear modal after closed
function clearModal() {
  $(document).ready(function () {
    $('#regis-modal').find('input:text, input:password, select, textarea').val('');
    $('#regis-modal').find('input:checkbox').prop('checked', false);
    $("#email").val("");
    document.getElementById("fn").innerHTML = "";
    document.getElementById("ln").innerHTML = "";
    document.getElementById("em").innerHTML = "";
    document.getElementById("pn").innerHTML = "";
    document.getElementById("un").innerHTML = "";
    document.getElementById("pw").innerHTML = "";
    document.getElementById("rpw").innerHTML = "";
    document.getElementById("bd").innerHTML = "";
    document.getElementById("sc").innerHTML = "";
  });
}