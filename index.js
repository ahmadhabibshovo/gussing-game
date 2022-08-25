function myFunction() {
    
  const  num = Math.floor(Math.random() * 10);
    localStorage.setItem('num',num)
   
for(let i=0;i<5;i++){
   const x = prompt(`Try no ${i+1} \n Enter Number between 0 to  9`);
    if(x==num){
        window.location.replace("win.html");
        break;
    }
    else
    window.location.replace("lose.html");

}
    }