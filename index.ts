import express from 'express';
import cors from 'cors';
import UserRoute from './src/routes/UserRoute';
const app = express();
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})

app.get('/', (req: any, res: any) => {
    res.send('Hello World!');
});

app.use('/user', cors({ origin: '*' }), UserRoute);

app.listen(3000, () => console.log('Server ready'));                                                           