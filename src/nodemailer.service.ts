import { Inject, Injectable } from '@nestjs/common';
import { Transporter } from 'nodemailer';

@Injectable()
export class NodemailerService {
    constructor(
    @Inject('MAILER_TRANSPORTER') private readonly transporter: Transporter,
    ) {}

    async sendEmail(to: string, subject: string, text: string, html: string) {
        const mailOptions = {
            from: this.transporter?.options?.from,
            to,
            subject,
            text,
            html,
        };

        await this.transporter.sendMail(mailOptions);
    }
}
