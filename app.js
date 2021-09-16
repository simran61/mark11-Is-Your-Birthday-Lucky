var birthDate = document.querySelector("#birthDate");
var luckyNum = document.querySelector("#luckyNum");
var checkBtn = document.querySelector("#btn")

var luckyDiv= document.querySelector(".lucky");
var unluckyDiv= document.querySelector(".unlucky");
var msg= document.querySelector(".msg")

var crossIcon= document.querySelector(".cross");
var noteDiv= document.querySelector(".note");

checkBtn.addEventListener("click", function(){
    if(luckyNum.value === ""){
        msg.innerText = "Please enter your lucky number"
    } else if(luckyNum.value < 0){
        msg.innerText = "Negative values are not allowed"
    } else if(birthDate.value === ""){
        msg.innerText = "Please enter yur birth date"
    } 
    else{
        check(birthDate.value, Number(luckyNum.value));
    }
 });

function check(date, num) {
    let sum = 0;
    for (let i = 0; i < date.length; i++) {
        if (date[i] == "-") {
            continue;
        } else {
            sum += Number(date[i]);
        }
    }
    console.log(sum);

    if(sum%num ===0){
        console.log("lucky");
        msg.innerText = "Yayy !! Your birthday is lucky for you."
        luckyDiv.style.display="block"
        unluckyDiv.style.display="none";
    }
    else{
        console.log("unlucky");
        msg.innerText = "Opps !! Your birthday is not lucky for you."
        unluckyDiv.style.display="block";
        luckyDiv.style.display="none";
    }
}

crossIcon.addEventListener("click", ()=>{
    noteDiv.style.display="none";
    console.log("working");
});
