# 📂 nodemailer-nestjs
Reusable NestJs package for nodemailer.

## Install

```bash
npm install --save nodemailer-nestjs
# or
yarn add nodemailer-nestjs
```

# Usage

### Sample implementation 

```ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NodemailerModule } from 'nodemailer-nestjs';

@Module({
  imports: [
    NodemailerModule.forRoot({
      host: 'your_smtp_host',
      port: 587, // or your SMTP port
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'your_smtp_username',
        pass: 'your_smtp_password',
      },
      from: '"your_name"<your_email@example.com>"',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

```
```ts
import { Injectable } from '@nestjs/common';
import { NodemailerService } from 'nodemailer-nestjs';

@Injectable()
export class AppService {
  constructor(private nodemailerService: NodemailerService) {}
  await this.nodemailerService.sendEmail(
    'to_email',
    'subject',
    'text',
    'html',
  );
}
```
## Author

[Zahir](https://krittimmanush.com/)


## License

MIT
