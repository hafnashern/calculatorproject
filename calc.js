
//for numbers and operators
function displaydata(data){
    // result.value=result.value+data
    result.value+=data
}

//for all clear
function allclear(){
    result.value=""
}

//for result
function findout(){
  result.value=eval(result.value)
}

//for backspace
function backspace(){
  result.value=result.value.slice(0,-1)
}