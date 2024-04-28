import { Module, DynamicModule } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { Options } from 'nodemailer/lib/smtp-transport';
import { NodemailerService } from './nodemailer.service';

@Module({
  providers: [NodemailerService],
  exports: [],
})
export class NodemailerModule {
  static forRoot(options: Options): DynamicModule {
    const transporterProvider = {
      provide: 'MAILER_TRANSPORTER',
      useFactory: () => nodemailer.createTransport(options),
    };

    return {
      global: true,
      module: NodemailerModule,
      providers: [transporterProvider],
      exports: [NodemailerService],
    };
  }
}
