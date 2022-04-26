window.onload=function(){
    show (0);
}

const questions=
    [{
        question:"What is the answer of 8+5?",
        option:["2","13","11","10","9"],
        correctanswer:"13"
        },
    {
        question:"What is the answer of 2*5?",
        option:["2","13","11","10","9"],
        correctanswer:"10"
    },
    {
        question:"What is the answer of 3-10?",
        option:["2","-7","7","-10","-9"],
        correctanswer:"-7"
    },
    {
        question:"What is the answer of 6*10?",
        option:["2","13","60","10","61"],
        correctanswer:"60"
    },
    {
        question:"What is the answer of 2/10?",
        option:["2","0.4","0.3","0.6","0.2"],
        correctanswer:"0.2"
    }]


let ques_count=0;
let wrongAnswer=0;
let score=0;

const next=()=>{
    var userAnswer = document.querySelector("li.active").innerHTML;
            if (userAnswer == questions[ques_count].correctanswer)
            {
                console.log(userAnswer);
                score++;
                localStorage.setItem("Score",score);
            }
            else{
                ques_count + 1 + "wrong answer"
            }
            if(ques_count == questions.length-1){
                    score=localStorage.getItem("Score");
                    console.log(score);
                    alert("You have done 5 out of " + score+ " questions right!!")
                    return;
            }
            ques_count++;
            show(ques_count);
}
const show=(count)=>{
    let question=document.getElementById("questions");
    question.innerHTML=document.createElement("h2").innerHTML=questions[count].question;
    for(let i=0;i<5;i++)
    {
        let li=document.createElement("li");
        li.innerHTML=questions[count].option[i];
        li.setAttribute("class","option")
        document.getElementById("questions").appendChild(li);
    }


    active();
}
const active=()=>{
    let btn_container=document.getElementById("questions");
    let btns=document.querySelectorAll("li.option");
    console.log(btns)
    for (let i=0;i<btns.length;i++){
        btns[i].addEventListener("click", function() {
        btns[i].classList.add("active");
        
        });
    }                
}

      
