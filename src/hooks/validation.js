import valid from 'card-validator'

export default function validation(values){
    let errors = {};
    let creditCard = valid.number(values.cardNumber);

    creditCard.expirationDate = valid.expirationDate(values.cardExpirationMonth + values.cardExpirationYear);
    creditCard.cvv = valid.cvv(values.cvv);
    creditCard.cardholderName = valid.cardholderName(values.cardHolder);



    errors.cname = false;
    errors.cnameMsg = "";
    errors.cnumber = false;
    errors.cnumberMsg = "";
    errors.ctype = false;
    errors.ctypeMsg = "";
    errors.cexp = false;
    errors.cexpMsg = "";
    errors.ccvv = false;
    errors.ccvvMsg = "";
    errors.isvalid = false;



    // Card Type Verification
    if(creditCard.card){
        if(creditCard.card.type !== "visa" && creditCard.card.type !== "mastercard"){
            errors.ctypeMsg = "We only accept Visa or Mastercard"
        }else{
            errors.ctype = true
            errors.ctypeMsg = ""
        }
    }

    //Card CVV expiration
    if (values.cvv === null || !values.cvv.trim()) {
        errors.ccvvMsg = "Credit card CVC is not complete";
    } else if (creditCard.cvv.isValid) {
        errors.ccvv = true;
    } else {
        errors.ccvvMsg = "CVV is invalid";
    }

    //Card Expiration Verification
    if (values.cardExpirationMonth === null || !values.cardExpirationMonth.trim() || values.cardExpirationYear === null || !values.cardExpirationYear.trim()) {
        errors.cexpMsg = "Credit card expiration date is not complete";
    } else if (creditCard.expirationDate.isValid) {
        errors.cexp = true;
    } else {
        errors.cexpMsg = "Credit card expiration date is invalid";
    }


    //Card Number Verification
    if (values.cardNumber === null || !values.cardNumber.trim()) {
        errors.cnumberMsg = "Credit card number is not complete";
    }else if (creditCard.isValid ) {
        errors.cnumber = true;
    } else {
        errors.cnumberMsg = "Credit card number is invalid";
    }

    //Cardholder Name Verification
    if (values.cardHolder === null || !values.cardHolder.trim()) {
        errors.cnameMsg = "Card holder's name is not complete";
    }else if(values.cardHolder.indexOf(' ') === 0 || values.cardHolder.indexOf(' ') === values.cardHolder.length - 1){
            errors.cnameMsg = "Card holder's name should not contain space before or after"
    } else if (creditCard.cardholderName.isValid) {
        errors.cname = true;
    } else {
        errors.cnameMsg = "Card holder's name is invalid";
    }


    if (
        errors.ctype &&
        errors.cname &&
        errors.cnumber &&
        errors.cexp &&
        errors.ccvv
    ) {

        errors.isvalid = true
    }

    return errors;
}