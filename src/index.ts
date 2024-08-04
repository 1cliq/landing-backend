import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/user';
import sequelize from './config/database';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use('/api', userRoutes);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
