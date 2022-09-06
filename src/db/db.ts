import * as Knex from 'knex';
import moment from 'moment-timezone';

const config = {
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'portafolio',
        port: 3306,
        typeCast: (field: any, next: any) => {
           if (field.type == 'DATETIME' || field.type == 'TIMESTAMP') {
                if(field.buffer() == null) {
                    return null;
                } else {
                    return moment(field.string()).tz("America/Santiago").format('YYYY-MM-DD HH:mm:ss');
                }
            }
            return next();
        }
    },
    pool: { min: 0, max: 12}
}


const db: Knex.Knex = Knex.knex(config as Knex.Knex.Config)

db.on("end", function(err) {
    console.log("cerrando db", err);
});

export default db;