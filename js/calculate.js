// storing button into variables
let calculateBtn = document.getElementById('calculate-btn');
let saveBtn = document.getElementById('save-btn');

// calculation storing into variables
let expensesAmnt = document.getElementById('expenses-amnt');
let balanceAmnt = document.getElementById('balance-amnt');
let savingsAmnt = document.getElementById('savings-amnt');
let ramainingBalAmnt = document.getElementById('remaining-bal-amnt');

// error mssg storing in a variable
let expensesError = document.getElementById('expenses-error');
let balanceError = document.getElementById('balance-error');

function setVariable(id){
    const value= parseFloat(document.getElementById(id).value);
    return value;
}

// calculation function
function calculation() {
    let calculated=0;
    for (const amnt of arguments) {
        calculated+=amnt;
    }
    return calculated;
}

// negative checker
function negativeCheck() {
    for (const value of arguments) {
        if (value>=0) {
            continue;
        }
        else{
            return true;
        }
    }
    return false;
}

// error checker
function errorCheck(var1,var2,id1,id2,var3,var4,amnt1,amnt2,indicator){
    if (indicator==true) {
        var1.classList.remove('hidden');
        var2.classList.add('hidden');
        document.getElementById(id1).classList.add('hidden');
        document.getElementById(id2).classList.add('hidden');
    }
    else if (indicator==false) {
        var1.classList.add('hidden');
        var2.classList.remove('hidden');
        document.getElementById(id1).classList.add('hidden');
        document.getElementById(id2).classList.add('hidden');
    }
    else{
        var1.classList.add('hidden');
        var2.classList.add('hidden');
        document.getElementById(id1).classList.remove('hidden');
        document.getElementById(id2).classList.remove('hidden');
        var3.innerText=amnt1;
        var4.innerText=amnt2;
    }
}

// calculate button event listener added
calculateBtn.addEventListener('click',function(){

    // set income and expenses input value into variables
    let incomeInput = setVariable('income-input');
    let foodInput = setVariable('food-input');
    let rentInput = setVariable('rent-input');
    let clothesInput = setVariable('clothes-input');

    // calculate expenses
    let expenses = calculation(foodInput,rentInput,clothesInput);
    let balance =  calculation(incomeInput,-1*expenses);

    // error check function call
    
    if (negativeCheck(incomeInput, foodInput, rentInput, clothesInput) == true) {
        errorCheck(expensesError,balanceError,'expense-text1','expense-text2',expensesAmnt,balanceAmnt,expenses,balance,true);
    }
    else if (negativeCheck(balance) == true) {
        errorCheck(expensesError,balanceError,'expense-text1','expense-text2',expensesAmnt,balanceAmnt,expenses,balance,false);
    }
    else {
    errorCheck(expensesError,balanceError,'expense-text1','expense-text2',expensesAmnt,balanceAmnt,expenses,balance);
    }


/*  if (negativeCheck(incomeInput, foodInput, rentInput, clothesInput) == true) {
        expensesError.classList.remove('hidden');
        balanceError.classList.add('hidden');
        document.getElementById('expense-text1').classList.add('hidden');
        document.getElementById('expense-text2').classList.add('hidden');
    }
    else if (negativeCheck(balance) == true) {
        expensesError.classList.add('hidden');
        balanceError.classList.remove('hidden');
        document.getElementById('expense-text1').classList.add('hidden');
        document.getElementById('expense-text2').classList.add('hidden');
    }
    else {
        expensesError.classList.add('hidden');
        balanceError.classList.add('hidden');
        document.getElementById('expense-text1').classList.remove('hidden');
        document.getElementById('expense-text2').classList.remove('hidden');
        expensesAmnt.innerText = expenses;
        balanceAmnt.innerText = balance;
    } */
    
});
