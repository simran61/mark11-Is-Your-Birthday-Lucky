var birthDate = document.querySelector("#birthDate");
var luckyNum = document.querySelector("#luckyNum");
var checkBtn = document.querySelector("#btn")

var luckyDiv= document.querySelector(".lucky");
var unluckyDiv= document.querySelector(".unlucky");

var crossIcon= document.querySelector(".cross");
var noteDiv= document.querySelector(".note");

checkBtn.addEventListener("click", function(){
    check(birthDate.value, Number(luckyNum.value));
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
        luckyDiv.style.display="block"
        unluckyDiv.style.display="none";
    }
    else{
        console.log("unlucky");
        unluckyDiv.style.display="block";
        luckyDiv.style.display="none";
    }
}

crossIcon.addEventListener("click", ()=>{
    noteDiv.style.display="none";
    console.log("working");
});
