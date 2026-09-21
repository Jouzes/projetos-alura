import express from 'express'
import routes from './routes/routes'
import { mongoConnect } from './util/database'

const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(routes);

mongoConnect(() => {
    app.listen(port)
})
