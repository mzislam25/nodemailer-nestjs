import { Transporter } from 'nodemailer';
export declare class NodemailerService {
    private readonly transporter;
    constructor(transporter: Transporter);
    sendEmail(to: string, subject: string, text: string, html: string): Promise<void>;
}
//# sourceMappingURL=nodemailer.service.d.ts.map