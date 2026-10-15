/* anotaçoes leo 

PONTO DE ENTRADA DO SERVIDOR, TODAS OPÇOES DE ROTAS PUBLICAS E IMMPORTACOES TEM Q ACONTECER AQ

*/

import { Module } from '@nestjs/common';
import { CheckinModule } from './checkin/checkin.module';
import { CheckinController } from './checkin/checkin.controller';
import { PrismaService } from './prisma/prisma.service';



@Module({
  imports: [CheckinModule],
  controllers: [],
  providers: [],
})

export class AppModule {}
