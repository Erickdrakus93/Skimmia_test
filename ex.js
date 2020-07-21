//here we can define the close functions
function multiple_of_3(i){
  if(i%5 && i%3!=0){
    console.log("Music");
  }
}

function multiple_of_5(i){
  if(i%3==0 && i%5!=0){
    console.log("TI");
  }
}

function multiple_of_3_and_5(i){
  if(i%3==0 && i%5==0){
    console.log("Musical");
  }
}

//here we call the function without logic inside

function main(n){
  for (var i = 1; i <=n; i++) {
     multiple_of_3(i);
     multiple_of_5(i);
     multiple_of_3_and_5(i);
  }
}
