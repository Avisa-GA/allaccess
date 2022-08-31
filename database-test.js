const { 
    randFlightDetails,
     randAddress,
     randCreditCard, 
     randUser
} = require('@ngneat/falso');

const db = require('./models');

let newCard  = randCreditCard();

console.log("NEW CARD", newCard);


db.creditcard.create({
    fullName: newCard.fullName,
    brand: newCard.brand,
    validForm: newCard.validForm,
    untilEnd: newCard.untilEnd,
    ccv: newCard.ccv,
    number: newCard.number
})
.then(cc => {
    // new card from the database (inside of the creditcards table)
    console.log('new credit card', cc.toJSON());
})
.catch(error => console.log('error', error));