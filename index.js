const express = require('express');
const ejsLayout = require('express-ejs-layouts');
const app = express();
const PORT = process.env.PORT || 8000;

// import the database
const db = require('./models');

app.set('view engine', 'ejs');
app.use(ejsLayout);
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('This is home');
});

// READ all of the cards
app.get('/cards', async (req, res) => {
    // let fetchCards = await db.creditcard.findAll(); // array of objects
    // console.log(fetchCards);
    // res.render('cards/index', { cards: fetchCards });
      try {
        let fetchCards = await db.creditcard.findAll(); // array of objects
        console.log(fetchCards);
        res.render('cards/index', { cards: fetchCards });
    } catch (error) {
        console.log('Error inside cards', error);
    }
});

// GET route NEW page
app.get('/cards/new', async (req, res) => {
    res.render('cards/new');
});

// SHOW ROUTE for card
app.get('/cards/:idx', async (req, res) => {
    try {
        let fetchCard = await db.creditcard.findByPk(req.params.idx);
        fetchCard = fetchCard.toJSON();
        // res.render('cards/show', { card: fetchCard });
         // send one object of data
        if (fetchCard) {
            res.render('cards/show', { card: fetchCard }); // send one object of data
        } else {
            res.redirect('/cards');
        }
    } catch (error) {
        console.log('Error inside of cards/show', error);
        res.redirect('/cards');
    }
 });

 // POST route for cards
app.post('/cards', async (req, res) => {
    // view post data in console
    console.log('user data inputed', req.body);
    // create new card
    let newCard = await db.creditcard.create({
        fullName: req.body.fullName,
        number: req.body.number,
        ccv: req.body.ccv,
        validFrom: req.body.validFrom,
        untilEnd: req.body.untilEnd,
        brand: req.body.brand
    });

    console.log('new card from database', newCard.toJSON);

    // redirect to the GET /cards/:idx route (show)
    res.redirect(`/cards/${newCard.id}`);
});

app.get('/books', async (req, res) => {
    let fetchBooks = await db.book.findAll();
    console.log(fetchBooks);
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT`, PORT);
})