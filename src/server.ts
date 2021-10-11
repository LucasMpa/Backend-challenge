import express from 'express';
import cors from 'cors';
import routes from './routes/routes';


const app = express();
app.use(express.json());

app.use(routes);
app.use(cors());



app.listen(2262, () => console.log('Server started on port 3333! 🏆'));
