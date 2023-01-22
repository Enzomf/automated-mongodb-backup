import { exec } from "node:child_process";
import { schedule } from "node-cron";
import { config } from "dotenv";
import moment from 'moment'
config();
const { DB_USER, DB_PASSWORD, DB_NAME, DB_AUTH, OUT_PATH } = process.env;

//mongorestore --archive="2023-01-22.gz" --gzip

function backup() {
    const timeStamp = moment().format("YYYY-MM-DD");
    const mongoDump =
    `mongodump --db=${DB_NAME} --archive=${OUT_PATH}/${timeStamp}.gz --gzip`;

    exec(mongoDump, (error) => {
        if (error) {
            console.log(error)
            return
        }

        console.log('success backup');
    })
}

schedule('1 0 * * *', ()=> backup())
