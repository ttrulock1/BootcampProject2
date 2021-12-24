const express = require('express');
const { engine } = require('express-handlebars');
const session = require('express-session');
const routes = require('./controllers');
const path = require ('path');
// const dotenv = require('dotenv');
// dotenv.config();

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const port = process.env.PORT || 3001;





app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const sess = {
  secret: 'Todd is doing this by himself',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => console.log(`now listening on port ${port}`));
});
