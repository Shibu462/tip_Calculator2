


const billInput = document.getElementById('billTotalInput')         //get the bill input ELEMENT from HTML Forms
const tipInput = document.getElementById('tipInput')                //get the tip input ELEMENT from HTML Forms
const numberOfPeopleDiv = document.getElementById('numberOfPeople') //get the no of peep ELEMENT(not input)  
const perPersonTotalDiv=document.getElementById('perPersonTotal')   //get the perPersonTotal ELEMENT(not any input) 

let numberOfPeople = Number(numberOfPeopleDiv.innerText)            //get the no of peep  from noOfPeopleDiv ELEMENT(generally 1)

const calculateBill = () => {                                       /******** Function for calculating and displaying total bill amount*/ 
    const bill = Number(billInput.value)                            //get the actual bill amount  from billInput ELEMENT
    const tipPercentage = Number(tipInput.value) / 100              //get the tipPercentage  from billInput ELEMENT
    const tipAmount = bill * tipPercentage                          //calculate tip amount from bill data and tip% data
    const total = tipAmount + bill                                  //calculate total amount of bill customers have to pay
    const perPersonTotal = total / numberOfPeople                   //calculate bill amount that each person has to pay for
    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`   //display on screen the perPersonTotal amount
}

const increasePeople = () => {                      
    numberOfPeople += 1;                                            //increase total no of people who will pay for
    numberOfPeopleDiv.innerText=numberOfPeople                      //display total no of people who will pay for
    calculateBill()                                                 //calculate and display total bill amount
}
const decreasePeople = () => {
    if (numberOfPeople <= 1) {
        throw 'hey! you cant have less than 1 person'
        return
    }
    numberOfPeople -= 1;                                             //decrease total no of people who will pay for
    numberOfPeopleDiv.innerText=numberOfPeople                       //display total no of people who will pay for
    calculateBill()                                                  //calculate and display total bill amount
}





