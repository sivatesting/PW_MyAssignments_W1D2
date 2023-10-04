const listOfSavingAccountNumbers =  ["1000", "1001", "1002"];
const listOfCheckingAccountNumbers =  ["10000", "10001", "10002"];
/** TO DO Task for typescript
 * Add correct data type for userName parameter
 * Add custom data type to hold typeOfAccount , either it can be checking or saving
 * opening balance is default parameter whose value should be 5000
 */

let userName:string = prompt(`Enter user name`)!
type typeOfAccount = "Savings"|"Checking"
let accType = prompt(`Enter account type`) as typeOfAccount 
let accountNumber = prompt(`Eenter account number`)!

function openNewAccount(userName:string,accountType:typeOfAccount,openingBalance=5000){
    /**
     * Here use the generateNewAccountNumber() to get the new account number
     * Add that new account number in the array
     * just print console message that new account added for username with this balance
     * 
     */
    
let newAccountNumber:string =  generateNewAccountNumber(accountType)

if (accountType=="Savings"){
 listOfSavingAccountNumbers.push(newAccountNumber)
 console.log(`New account is created for ${userName} and balance is ${openingBalance}`)
}
else if (accountType=="Checking"){
    listOfCheckingAccountNumbers.push(newAccountNumber)
    console.log(`New account is created for ${userName} and balance is ${openingBalance}`)
}
else{
console.log('Invalid account type')
}


}


function generateNewAccountNumber(accountType:string){
    let newAccountNumber:string;
    let count:number=0;
if (accountType=="Savings"){

    for (let i=0;i<listOfSavingAccountNumbers.length;i++){

        if (accountNumber==listOfSavingAccountNumbers[i]){
            console.log(`Account already exists`)
            break;
        }

        else if (accountNumber!=listOfSavingAccountNumbers[i]){
            
            count++;
            continue
        }
        }
    

    if (count==listOfSavingAccountNumbers.length){
       // newAccountNumber =   (listOfSavingAccountNumbers[listOfSavingAccountNumbers.length-1]) + 1
       newAccountNumber = accountNumber
        console.log(`New Account no. ${newAccountNumber}`)
    }   
        
 //   isValidAccount(accountNumber, accType)

}

if (accountType=="Checking"){


    for (let i=0;i<listOfCheckingAccountNumbers.length;i++){

        if (accountNumber==listOfCheckingAccountNumbers[i]){
            console.log(`Account already exists`)
            break;
        }

        else if (accountNumber!=listOfCheckingAccountNumbers[i]){
           
            count++;
            continue
        }
        }
    

    if (count==listOfCheckingAccountNumbers.length){
       //  newAccountNumber=   (listOfCheckingAccountNumbers[listOfCheckingAccountNumbers.length-1]) + 1
       newAccountNumber = accountNumber
        console.log(`New Account no. ${newAccountNumber}`)
    }   
    
 // isValidAccount(accountNumber, accType)

}
return newAccountNumber;

}


// function isValidAccount(accountNumber, typeOfAccount){
   
//      const isAccountNumberPresent:boolean= listOfSavingAccountNumbers.includes(accountNumber)

//      console.log(`@@@@@ ${isAccountNumberPresent}`);
//    if (isAccountNumberPresent==true){
//     console.log(`You can proceed further`)
//    }
//    else
//    console.log(`Account Number is not valid`)
//}


//Script

/**
 * 1. ask user his name
 * 2. ask user his account number
 * 3. ask user his type of account
 * 4. now check if for the type of account selected, the given account number exist or not
 *  4.a If account number does not exist then ask him
 *   4.a.1 if he want to open a new account
 *   4.a.2 ask him the type of account he want to open
 *   4.a.3  then add a new account for him and update the array with the new acccount
 * 
 *  4.b If account number is valid, just print the message "You can proceed further"
 * 
 */



openNewAccount(userName, accType)

console.log ( `List of Saving Account Numbers ${listOfSavingAccountNumbers}`)
console.log ( `List of Checking Account Numbers ${listOfCheckingAccountNumbers}`)
