import nodemailer from "nodemailer";
import { config } from "dotenv";
import { join } from "path";
config();

const trasporter = nodemailer.createTransport({
    service:process.env.EMAIL_SERVICE,
    auth: { 
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
})

function sendEmail(backupFileName){

     trasporter.sendMail({
        to: {
            address: process.env.EMAIL_TO_ADDRESS,
            name: process.env.EMAIL_TO_NAME
        },
        from: {
            address:process.env.EMAIL_FROM_ADDRESS,
            name: process.env.EMAIL_FROM_NAME
        },
        subject: `backup mongodb from ${process.env.DB_NAME} database`,
        attachments: [
            {
                filename: backupFileName,
                path: join("backups", backupFileName)
            }
        ]
    })
}

export { sendEmail }