$(document).ready(function(){
  $('#one').on('click', f_showAlert);
  $('#delete').on('click', f_deleteAlert);
  
});

function f_showAlert() {
  alert('work');
}

function f_deleteAlert() {
  $('#btn1').off('click', f_showAlert);
}