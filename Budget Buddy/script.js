const bar = document.querySelector("toggleBtn")



const toggleFun = (name) => {
    let element = document.querySelector(`.${name}`)
    console.log("clicked")
    if (element.style.display === "none") {
        element.style.display = "block";
        element.style.opacity = "1";
        console.log("done")
    }
    else {
        element.style.display = "none";
        console.log("not done")
    }
}



// Expense Form JS
const addExpense = document.querySelector("#addExpense");
let expenseForm = document.querySelector(".expenseForm");
addExpense.addEventListener("click", () => {
    if (expenseForm.style.opacity === "1") {
        expenseForm.style.opacity = "0";
        expenseForm.style.top = "-600px";
        addExpense.classList.toggle("activeNav");

    }
    else {
        
        expenseForm.style.top = "100px";
        expenseForm.style.opacity = "1";
        addExpense.classList.toggle("activeNav");

    }
})
// expnese Form input JS
const amntInp = document.querySelector("#amntInp");
const priceInp = document.querySelector("#priceInp");
const itemInp = document.querySelector("#itemInp");
const statusInp = document.querySelector("#statusInp");
const addExpenseBtn = document.querySelector("#addExpenseBtn")

const budgetData = document.querySelector("#budgetData span")
const expData = document.querySelector("#expData span")
const leftAmntData = document.querySelector("#leftAmntData span")
const savingData = document.querySelector("#savingData span")
const ratioData = document.querySelector("#ratioData span")

addExpenseBtn.addEventListener("click", () => {
    if (amntInp.value != "" && priceInp.value != "" && itemInp.value != ""&&statusInp!="") {
       
    
         
    }
    else {
        alert("Nothing added")
    }
})



const toggleSignupBtn = document.querySelector(".signupOpt a");
toggleSignupBtn.addEventListener('click', () => {
    alert("clicked")
    
})





// let signupContainer = document.querySelector(".signupContainer");
//     console.log("clicked")
//     if (signupContainer.style.opacity === "0") {
//         signupContainer.style.top = "0";
//         signupContainer.style.opacity = "1";

//     }
//     else {
//          signupContainer.style.top = "100vh";
//         signupContainer.style.opacity = "0";

        
//     }