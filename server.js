const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}


app.listen(port, err => {
    if (err) {
        throw err;
    }
    console.log('Server running on port ' + port);
});

app.post('/payment', (req, res) => {
    stripe.charges.create({
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'cad'
    })
        .then(stripeRes => res.status(200).send({success: stripeRes}))
        .catch(stripeErr => res.status(500).send({error: stripeErr}));
});
