import * as dotenv from "dotenv";

export abstract class ConfigServer{

    constructor(){
        const nodeNameEnv = this.createdPathEnv(this.nodeEnv);
        dotenv.config({
            path: nodeNameEnv,
        });
    }
    public get nodeEnv():string{
        return this.getEnviroment('NODE_ENV') || "";
    }

    public createdPathEnv(path:string) : string{
        let transform : string;
        if(path.length > 0){
            transform = "." + path + ".env";
            return transform;
        }
        else{
            return ".env";
        }
    }
    public getNumberEnv(K:string) : number{

        return Number(this.getEnviroment(K));
    }

    public getEnviroment(K:string) : string | undefined {
        return process.env[K];

    }
    
}