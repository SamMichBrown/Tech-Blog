// Dependencies
// =============================================================
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const hbs = exphbs.create({});

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));

// SETS UP HANDLEBARS
// =============================================================
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Routes
// =============================================================
app.use(routes);
  
  // Starts the server to begin listening
  // =============================================================
  sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`NOW LISTENING ON PORT ${PORT}`));
})