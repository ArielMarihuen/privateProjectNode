import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { ConfigServer } from './config/config';
import { allrouters } from './routers/router';

class serverapp extends ConfigServer {
    
    public app: express.Application = express();
    private port: number = this.getNumberEnv('PORT');
    private allrouter : allrouters;

    constructor(){
        super();
        this.allrouter = new allrouters();
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use("/api", this.allrouter.router);
        this.listen();
    }
    //una funcion de tipo array de rutas de express
    public async listen(){

        this.app.listen(this.port, ()=>{
            console.log('Server Up on port ' + this.port);
        });
    }

}
new serverapp();