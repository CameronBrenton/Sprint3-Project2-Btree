const treeify = require('treeify');
const express = require('express');
const app = express();
const router = express.Router();
const nunjucks = require('nunjucks')

const port = 3000

//app.get('/', function (req, res) {
//	res.render('app.html')
//
//});

const indexRouter = require('./routes/index');
const submitRouter = require('./routes/submit');

nunjucks.configure('views', {
	noCache: true,
	autoescape: true,
	express: app
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);
app.use('/submit', submitRouter);

app.listen(port, () => {
	console.log(`Listening on http://localhost:${port}`);
});
