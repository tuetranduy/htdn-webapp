// dropdown nav bar
$(document).ready(function () {
  $("#user-dropdown").dropdown({
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

// init tootip
document.addEventListener('DOMContentLoaded', function () {
  var bookingTootips = document.querySelectorAll('.tooltipped');
  var bookingTootipInstance = M.Tooltip.init(bookingTootips, {});
});

// init timepicker
document.addEventListener('DOMContentLoaded', function () {
  var timePicker = document.querySelectorAll('.timepicker');
  var instances = M.Timepicker.init(timePicker, {
    twelveHour: true,
    showClearBtn: true
  });
});

// close register-modal
function closeModal() {
  var regisModal = document.querySelector("#regis-modal");
  var regisModalInstance = M.Modal.getInstance(regisModal);
  regisModalInstance.close()
};

// tooltip handle for Name =====
function displayTooltipForName() {
  $(document).ready(function () {
    var nameTooltip = document.querySelector("#nameTooltip");
    var nameTooltipInstance = M.Tooltip.getInstance(nameTooltip);
    nameTooltipInstance.open()
  })
}

function dismissTooltipForName() {
  $(document).ready(function () {
    var nameTooltip = document.querySelector("#nameTooltip");
    var nameTooltipInstance = M.Tooltip.getInstance(nameTooltip);
    nameTooltipInstance.close()
  })
}
// end of tooltip handle for Name =====

// tooltip handle for Phone =====
function displayTooltipForPhone() {
  $(document).ready(function () {
    var phoneTooltip = document.querySelector("#phoneTooltip");
    var phoneTooltipInstance = M.Tooltip.getInstance(phoneTooltip);
    phoneTooltipInstance.open()
  })
}

function dismissTooltipForPhone() {
  $(document).ready(function () {
    var phoneTooltip = document.querySelector("#phoneTooltip");
    var phoneTooltipInstance = M.Tooltip.getInstance(phoneTooltip);
    phoneTooltipInstance.close()
  })
}
// end of tooltip handle for Phone =====

// tooltip handle for Subject =====
function displayTooltipForSubject() {
  $(document).ready(function () {
    var subjectTooltip = document.querySelector("#subjectTooltip");
    var subjectTooltipInstance = M.Tooltip.getInstance(subjectTooltip);
    subjectTooltipInstance.open()
  })
}

function dismissTooltipForSubject() {
  $(document).ready(function () {
    var subjectTooltip = document.querySelector("#subjectTooltip");
    var subjectTooltipInstance = M.Tooltip.getInstance(subjectTooltip);
    subjectTooltipInstance.close()
  })
}
// end of tooltip handle for Subject =====

// tooltip handle for message =====
function displayTooltipForMessage() {
  $(document).ready(function () {
    var messageTooltip = document.querySelector("#messageTooltip");
    var messageTooltipInstance = M.Tooltip.getInstance(messageTooltip);
    messageTooltipInstance.open()
  })
}

function dismissTooltipForMessage() {
  $(document).ready(function () {
    var messageTooltip = document.querySelector("#messageTooltip");
    var messageTooltipInstance = M.Tooltip.getInstance(messageTooltip);
    messageTooltipInstance.close()
  })
}
// end of tooltip handle for Subject =====