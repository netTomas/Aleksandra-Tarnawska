const express = require('express');
const hbs = require('express-handlebars');
const {mobile_handmadeRouter} = require("./routers/handmade/mobile_handmade");
const {desktop_product_handmadeRouter} = require("./routers/handmade/desktop_product_handmadeRouter");
const {desktop_handmadeRouter} = require("./routers/handmade/desktop_handmade");
const {analysis_architecture_handmadeRouter} = require("./routers/handmade/analysis_architecture_handmade");
const {analysis_handmadeRouter} = require("./routers/handmade/analysis_handmade");
const {description_handmadeRouter} = require("./routers/handmade/description_handmade");
const {presentationmobileHandmadeRouter} = require("./routers/handmade/presentation_mobile");
const {presentationHandmadeRouter} = require("./routers/handmade/presentation");
const {handmadeRouter} = require("./routers/handmade/handmade");
const {mobile_mocakRouter} = require("./routers/mocak/mobile_mocak");
const {desktop_current_mocakRouter} = require("./routers/mocak/desktop_current_mocakRouter");
const {desktop_mocakRouter} = require("./routers/mocak/desktop_mocak");
const {analysis_architecture_mocakRouter} = require("./routers/mocak/analysis_architecture_mocak");
const {analysis_mocakRouter} = require("./routers/mocak/analysis_mocak");
const {description_mocakRouter} = require("./routers/mocak/description_mocak");
const {presentationmobileMocakRouter} = require("./routers/mocak/presentation_mobile");
const {presentationMocakRouter} = require("./routers/mocak/presentation");
const {mocakRouter} = require("./routers/mocak/mocak");
const {introRouter} = require("./routers/intro");
const {mobile_homeRouter} = require("./routers/home_library/mobile_home");
const {desktop_booksearch_homeRouter} = require("./routers/home_library/desktop_booksearch_home");
const {desktop_homeRouter} = require("./routers/home_library/desktop_home");
const {analysis_architecture_homeRouter} = require("./routers/home_library/analysis_architecture_home");
const {analysis_homeRouter} = require("./routers/home_library/analysis_home");
const {description_homeRouter} = require("./routers/home_library/description_home");
const {presentationmobileRouter} = require("./routers/home_library/presentation_mobile");
const {presentationRouter} = require("./routers/home_library/presentation");
const {homelibraryRouter} = require("./routers/home_library/homelibrary");
const {contactRouter} = require("./routers/contact");
const {aboutRouter} = require("./routers/about");
const {mainRouter} = require("./routers/main");
const {homeRouter} = require("./routers/home");

const app = express();


app.use(express.urlencoded({ //chyba nie potrzebne
  extended: true,
}));
app.use(express.static('public'));
app.use(express.json());  //nie potrzebne
app.engine('.hbs', hbs.engine({
  extname: 'hbs',
  //helpers: handlebarsHelpers,
}));
app.set('view engine', '.hbs');

app.use('/', introRouter);
app.use('/homepage', homeRouter);
app.use('/main', mainRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/homelibrary', homelibraryRouter);
app.use('/homelibrary/presentation', presentationRouter);
app.use('/homelibrary/presentation_mobile', presentationmobileRouter);
app.use('/homelibrary/description', description_homeRouter);
app.use('/homelibrary/analysis', analysis_homeRouter);
app.use('/homelibrary/architecture', analysis_architecture_homeRouter);
app.use('/homelibrary/desktop', desktop_homeRouter);
app.use('/homelibrary/booksearch', desktop_booksearch_homeRouter);
app.use('/homelibrary/mobile', mobile_homeRouter);
app.use('/mocak', mocakRouter);
app.use('/mocak/presentation', presentationMocakRouter);
app.use('/mocak/presentation_mobile', presentationmobileMocakRouter);
app.use('/mocak/description', description_mocakRouter);
app.use('/mocak/analysis', analysis_mocakRouter);
app.use('/mocak/architecture', analysis_architecture_mocakRouter);
app.use('/mocak/desktop', desktop_mocakRouter);
app.use('/mocak/current', desktop_current_mocakRouter);
app.use('/mocak/mobile', mobile_mocakRouter);
app.use('/handmade', handmadeRouter);
app.use('/handmade/presentation', presentationHandmadeRouter);
app.use('/handmade/presentation_mobile', presentationmobileHandmadeRouter);
app.use('/handmade/description', description_handmadeRouter);
app.use('/handmade/analysis', analysis_handmadeRouter);
app.use('/handmade/architecture', analysis_architecture_handmadeRouter);
app.use('/handmade/desktop', desktop_handmadeRouter);
app.use('/handmade/product', desktop_product_handmadeRouter);
app.use('/handmade/mobile', mobile_handmadeRouter);


app.listen(3000, '0.0.0.0');




