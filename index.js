import { config } from "dotenv";
config();
import { exec } from "node:child_process";
import { sendEmail } from "./email.js";
import { schedule } from "node-cron";
import moment from 'moment';


const { DB_USER, DB_PASSWORD, DB_NAME, DB_AUTH, OUT_PATH } = process.env;

function backup() {
    const fileName = `${moment().format("YYYY-MM-DD")}.gz`;
    const command = `mongodump --db=${DB_NAME} --archive=${OUT_PATH}/${fileName} --gzip`;
    
    exec(command, (error) => {
        if (error) {
            console.log(error)
            return
        }

        console.log('success backup');

        sendEmail(fileName)
    })
}

schedule('1 0 * * *', () => backup())
