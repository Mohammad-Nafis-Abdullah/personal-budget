// storing button into variables
let calculateBtn = document.getElementById('calculate-btn');
let saveBtn = document.getElementById('save-btn');

// calculation storing into variables
let expensesAmnt = document.getElementById('expenses-amnt');
let balanceAmnt = document.getElementById('balance-amnt');
let savingsAmnt = document.getElementById('savings-amnt');
let remainBalAmnt = document.getElementById('remaining-bal-amnt');
let expenses,balance,incomeInput,savings,remainBalance;

// error mssg storing in a variable
let expensesError = document.getElementById('expenses-error');
let balanceError = document.getElementById('balance-error');
let savingsError1 = document.getElementById('savings-error1');
let savingsError2 = document.getElementById('savings-error2');


function setVariable(id) {
    const value = parseFloat(document.getElementById(id).value);
    return value;
}

// calculation function
function calculation() {
    let calculated = 0;
    for (const amnt of arguments) {
        calculated += amnt;
    }
    return calculated;
}

// negative checker
function negativeCheck() {
    for (const value of arguments) {
        if (value >= 0) {
            continue;
        }
        else {
            return true;
        }
    }
    return false;
}

// calculate button click handler and function
calculateBtn.addEventListener('click', function () {

    // set income and expenses input value into variables
    incomeInput = setVariable('income-input');
    let foodInput = setVariable('food-input');
    let rentInput = setVariable('rent-input');
    let clothesInput = setVariable('clothes-input');

    // calculate expenses
    expenses = calculation(foodInput, rentInput, clothesInput);
    balance = calculation(incomeInput, -1 * expenses);

    // error check and display result
    if (negativeCheck(incomeInput, foodInput, rentInput, clothesInput) == true) {
        expensesError.classList.remove('hidden');
        balanceError.classList.add('hidden');
        document.getElementById('expense-text').classList.add('hidden');
        document.getElementById('balance-text').classList.add('hidden');
        savingsAmnt.innerText=0;
        remainBalAmnt.innerText=0;
        document.querySelector('#savings-input').value='';
        document.querySelector('#savings-input').disabled=true;
        document.querySelector('#save-btn').disabled=true;
    }
    else if (negativeCheck(balance) == true) {
        expensesError.classList.add('hidden');
        balanceError.classList.remove('hidden');
        document.getElementById('expense-text').classList.add('hidden');
        document.getElementById('balance-text').classList.add('hidden');
        savingsAmnt.innerText=0;
        remainBalAmnt.innerText=0;
        document.querySelector('#savings-input').value='';
        document.querySelector('#savings-input').disabled=true;
        document.querySelector('#save-btn').disabled=true;
    }
    else {
        expensesError.classList.add('hidden');
        balanceError.classList.add('hidden');
        document.getElementById('expense-text').classList.remove('hidden');
        document.getElementById('balance-text').classList.remove('hidden');
        expensesAmnt.innerText = expenses;
        balanceAmnt.innerText = balance;
        document.querySelector('#savings-input').disabled=false;
        document.querySelector('#save-btn').disabled=false;
    }
});

// savings button click handler and function
saveBtn.addEventListener('click', function () {
    let savingsInput=setVariable('savings-input');
    savings=(savingsInput*incomeInput)/100;
    remainBalance = balance-savings;
    console.log(remainBalance);
    

    // error check and display result
    if (savingsInput<0 || savingsInput>100) {
        savingsError1.classList.remove('hidden');
        savingsError2.classList.add('hidden');
        document.getElementById('savings-text1').classList.add('hidden');
        document.getElementById('savings-text2').classList.add('hidden');
    }
    else if (remainBalance<0) {
        savingsError1.classList.add('hidden');
        savingsError2.classList.remove('hidden');
        document.getElementById('savings-text1').classList.add('hidden');
        document.getElementById('savings-text2').classList.add('hidden');
    }
    else if(remainBalance>=0 && savingsInput>=0 && savingsInput<=100) {
        savingsError1.classList.add('hidden');
        savingsError2.classList.add('hidden');
        document.getElementById('savings-text1').classList.remove('hidden');
        document.getElementById('savings-text2').classList.remove('hidden');
        savingsAmnt.innerText = savings;
        remainBalAmnt.innerText = remainBalance;
    }
})
