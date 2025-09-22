let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnX = true;

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const reset = () => {
   turnX = true;
   enableBoxes();
   msgContainer.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        if(turnX === true){
        box.innerText = "X";
        turnX = false;
     }else{
        box.innerText = "O";
        turnX = true;
     }
     box.disabled = true;

     checkWinner();
     checkDraw();
    });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true; 
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const checkDraw = () => {
    let filled = 0;
    for(let box of boxes){
        if(box.innerText !== ""){
            filled++;
        }
    }

if(filled === 9){
    msg.innerText = "It's a draw";
     msgContainer.classList.remove("hide");
    disableBoxes();
  }
};

const  showWinner = (winner) =>{
     msg.innerText = `Congrats, Winner is ${winner}`;
     msgContainer.classList.remove("hide");
     disableBoxes(); 
};

const checkWinner =()=> {
     for(let pattern of winPattern){
       let pos1 = boxes[pattern[0]].innerText;
       let pos2 = boxes[pattern[1]].innerText;
       let pos3 = boxes[pattern[2]].innerText;
      
       if(pos1 != "" && pos2 != "" && pos3 != ""){
         if(pos1 === pos2 && pos2 === pos3){
           showWinner(pos1);
         }
       }
     }
    };

    newGameBtn.addEventListener("click",reset);
    resetBtn.addEventListener("click",reset);

