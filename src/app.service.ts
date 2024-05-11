import { Injectable, Inject } from '@nestjs/common';
import configuration from './config/configuration';
import { ConfigType } from '@nestjs/config';
@Injectable()
export class AppService {
  constructor(@Inject(configuration.KEY) private configService: ConfigType<typeof configuration>){}


  getHello(): string {
    return 'Aqui el puerto determinado por el archivo .env  '+ this.configService.Port
  }
}
