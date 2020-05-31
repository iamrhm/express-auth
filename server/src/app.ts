import express from 'express';
import * as bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';
import passport from 'passport';
import swaggerJsdoc from 'swagger-jsdoc';
import * as swaggerUi from 'swagger-ui-express';
import cors from 'cors';

import { appConfig } from './config/app';
import swaggerConfig from './config/swagger';
import Routes from 'routes/routes';

class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();
  public mongoUrl: string = appConfig.db.url();

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
    this.mongoSetup();
    this.swaggerSetup();
  }

  private config(): void {
    this.app.use(morgan('tiny'));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cors());
    this.app.use(passport.initialize());
    this.app.use(passport.session());
  }

  private mongoSetup = async (): Promise<void> => {
    try {
      const mongoConnection = await mongoose.connect(this.mongoUrl, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      });
    } catch (err) {
      console.error(new Error(`MongoDB error when connecting: ${err.message}`));
    }
  };

  private swaggerSetup(): void {
    const specs = swaggerJsdoc(swaggerConfig);
    this.app.use('/api/docs', swaggerUi.serve);
    this.app.get(
      '/api/docs',
      swaggerUi.setup(specs, {
        explorer: true,
      })
    );
  }
}

export default new App().app;
