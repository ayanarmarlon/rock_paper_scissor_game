
let  btn   = document.querySelectorAll("button")
document.getElementById("pick-btn").disabled =true;
console.log(btn)
const userChoice = document.getElementById("user-choice")

const compChoice = document.getElementById("computer-choice")

 const  youWin  =  document.getElementById('you-win')

 const images  = ["/rock1.png", "/paper1.png", "/scissor1.png"];

 let showIcon = document.getElementById('show-icon')
 let popUp  = document.getElementById('pop-up')
 let score1 = document.getElementById('score1')
 let score2 = document.getElementById('score2')
let  gif = document. getElementById('gif')


let points1 = 0
let points2 = 0

btn.forEach(button =>   button.addEventListener('click',  (e) => { choice  =  e.target.id
 gif.style.display =  'none'
 
    let  user = userChoice.setAttribute ("src", choice)
    
    console.log(choice)
  
    let comp = images[Math.floor(Math.random()*3)]
    let cp = compChoice.setAttribute("src", comp)
    console.log(comp)

if(choice == comp){
    youWin.innerText = "It's   a   tie !!!"
    popUp.innerText = "Try again !!!"
    gif.setAttribute("src", "https://giphy.com/embed/06CVFAUpzk6Ss9KWlt")
    gif.style.display= "inline-block"
    
}


else if(choice == "/paper1.png" && comp === "/scissor1.png"){
    youWin.innerText = "You Lose !!!"
    popUp.innerText = "ComPuter Win !!!"
    console.log('you lose')
    gif.setAttribute("src", "https://giphy.com/embed/56xUyJ5GDVmak")
    gif.style.display= "inline-block"
    points2 ++
    score2.innerText = "WIN :" +" " + points2
}

else  if(choice == "/paper1.png" && comp === "/rock1.png"){
    youWin.innerText = "You WIN !!!"
    popUp.innerText = "You are great !!!"
    gif.setAttribute("src", "https://giphy.com/embed/r3rb6ucOsMATpK6U45")
    gif.style.display= "inline-block"
    points1 ++
    score1.innerText = "WIN :" +" " + points1
}

else  if(choice == "/scissor1.png" && comp === "/rock1.png"){
    youWin.innerText = "You Lose !!!"
    popUp.innerText = "ComPuter Win !!!"
    gif.setAttribute("src", "https://giphy.com/embed/3o7TKLoD6IDwdSw0rS")
    gif.style.display= "inline-block"
    points2 ++
    score2.innerText = "WIN :" +" " + points2
}
else  if(choice == "/scissor1.png" && comp === "/paper1.png"){
    youWin.innerText = "You WIN !!!"
    popUp.innerText = "You are fantastic !!!"
    gif.setAttribute("src", "https://giphy.com/embed/zbeXGY6HLpIXdS7qJu")
    gif.style.display= "inline-block"
    points1 ++
    score1.innerText = "WIN :" +" " + points1
}
else  if(choice == "/rock1.png" && comp === "/scissor1.png"){
    youWin.innerText = "You WIN !!!"
    popUp.innerText = "You are awesome !!!"
    gif.setAttribute("src", "https://giphy.com/embed/jWklSDRBKHwg1f9aCa")
    gif.style.display= "inline-block"
    points1 ++
    score1.innerText = "WIN :" +" " + points1
}
else  if(choice == "/rock1.png" && comp === "/paper1.png"){
    youWin.innerText = "You Lose !!!"
    popUp.innerText = "ComPuter Win !!!"
    gif.setAttribute("src", "https://giphy.com/embed/2fTLnGx5HcDyU")
    gif.style.display= "inline-block"
    points2 ++
    score2.innerText = "WIN :" +" " + points2
}

if   (points2 === 5){
    youWin.innerText = "GAME OVER BITCH !!!"
    //  showIcon.setAttribute("src", "/skul.png")
     popUp.innerText = "ComPuter Kicked your Ass !!!"
     gif.setAttribute("src", "https://giphy.com/embed/vtRy1NnXV3aqQ")
     gif.style.display= "inline-block"
     let score1 = document.getElementById('score1')
 let score2 = document.getElementById('score2')
 btn.forEach(button =>   button.addEventListener('click',  (e) => { 
      
     let  r = confirm("Click  OK to play again!");
     if (r == true){
        window.location.reload();
      }
     }))
    
     
}

else   if  (points1 === 5){
    youWin.innerText = "YOU  ARE  A  LEGEND !!!"
    // showIcon.setAttribute("src", "/legend.jpg")
    popUp.innerText = "You are a  Hero !!!"
     gif.setAttribute("src", "https://giphy.com/embed/FaVHesvRFuHtMhVXdN")
     gif.style.display= "inline-block"
let score1 = document.getElementById('score1')
 let score2 = document.getElementById('score2')
 btn.forEach(button =>   button.addEventListener('click',  (e) => { 
       
        let r = confirm("Click  OK to play again!");
        if (r == true){
          window.location.reload();
        }
        }))

       
 
    
   
    
   
}



})
)


 
   
      
      
    
    



