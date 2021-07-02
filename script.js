// Gloabl variables
var btn_solve = document.getElementById('btn_solve');
var txt_input = document.getElementById('txt_input');
var N=0;

function enableButton(){
  if (N<=0){
    return;
  }
  btn_solve.classList.remove("disabled");
}
function disabelButton(){
  btn_solve.classList.add("disabled");
}

function txt_input_changed(evt){
  //TODO....
  
  var a=txt_input.value;
  if (a<=0){
    txt_input.value=0;
    disabelButton();
    return;
  }
  N=a
  enableButton();
  return;
}

function btn_solve_click(evt){
  if (N<=0){
    alert("Can't solve for N<=0!!");
    return;
  }

  //TODO.....
}


// Setup input text listener.
txt_input.addEventListener('change',txt_input_changed);

// Setup button listener.
btn_solve.addEventListener('click',btn_solve_click);