const express = require("express");
const cors = require('cors');
const morgan = require('morgan')
const app = express();
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
const port = process.env.PORT || 4000;
dotenv.config();


app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(bodyParser.json())
app.use('/', require('./routes/email_text'));
app.use('/', require('./routes/email_html'));
app.use('/', require('./routes/email_ejs'));
app.use('/', require('./routes/email_attatchment'));


app.listen(port, function () {
  console.log('now listening for requests serving on port ' + port)
}
)
