// Gloabl variables
var btn_solve = document.getElementById('btn_solve');
var txt_input = document.getElementById('txt_input');
var N=0;  //problem size
var solution=null;
var vec;  // vector rapresentation of the matrix

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

function pos(r,c){
  return c+r*N;
}
function dfs(num,r,c){
  //base cases
  if(r<0 || c<0 || r>=N || c>=N || pos(r,c)<0 ||pos(r,c)>=N*N){return;} //outside the borders
  if(solution !== null){return;}  // a solution already found
  if(num>N*N){
    solution =[...vec];
    return;
  }

  //check if the position is empty
  if(vec[pos(r,c)]!==0){return;}

  vec[pos(r,c)]=num;

  dfs(num+1,r-3,c)
  dfs(num+1,r-2,c+2)
  dfs(num+1,r,c+3)
  dfs(num+1,r+2,c+2)
  dfs(num+1,r+3,c)
  dfs(num+1,r+2,c-2)
  dfs(num+1,r,c-3)
  dfs(num+1,r-2,c-2)


  vec[pos(r,c)]=0;
  return;

  
}


function makeTableHTML(myArray) {
  var result = "<table class='table-bordered'>";
  for(var i=0; i<N; i++) {
      result += "<tr>";
      for(var j=0; j<N; j++){
          result += "<td class='text-center'>"+myArray[pos(i,j)]+"</td>";
      }
      result += "</tr>";
  }
  result += "</table>";

  return result;
}

function btn_solve_click(evt){
  if (N<=0){
    alert("Can't solve for N<=0!!");
    return;
  }

  solution=null;
  vec=new Array(N*N).fill(0);
  for (let r = 0; r < N; r++) {
    if(solution !==null){break;}
    for(let c=0;c<N;c++){
      if(solution !== null){break;}
      
      dfs(1,r,c)
    }
  }

  console.log(solution)
  //display solution
  var div_solution=document.getElementById('solution')
  var p=document.createElement('p');
  if(solution===null){
    p.innerHTML = "No solution found for N={N}";
  }
  else{
    var txt="";
    for(let r=0; r<N;r++){
      for(let c=0;c<N;c++){
        txt=txt+"\t"+solution[pos(r,c)];
      }
      txt=txt+"<br>";
      
    }
    console.log(txt);
    p.innerHTML = txt;
  }
  
  div_solution.appendChild(p);


  p=document.createElement('p');
  tbl=makeTableHTML(solution);
  p.innerHTML = tbl;
  div_solution.innerHTML=tbl;
}


// Setup input text listener.
txt_input.addEventListener('change',txt_input_changed);

// Setup button listener.
btn_solve.addEventListener('click',btn_solve_click);