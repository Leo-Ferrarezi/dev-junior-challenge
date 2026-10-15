import { Body, Controller, Post,Get } from '@nestjs/common';
import { cpfDTO } from './dtos/checkin';
import { CheckinService } from './checkin.service';
import { dot } from 'node:test/reporters';
// DEFINIREMOS DENTRO DO CONTROLLER OS metodos do checkin
// post /checkin/sendCPF( cpf) body da requisicao
// controller receber as inf do usuaurio dentro do checkin-controller e joga pro service
// coloquei o costrutor , pois o controller precisa receber a regra de negocio do service

// isso aq e literalmente o cliente chegando no totem e mandando cpf
@Controller('checkin')
export class CheckinController {
   constructor (private checkinService: CheckinService) {}

    @Post('sendcpf')

    async sendcpf(@Body() bodyDaReq: cpfDTO) {

        return this.checkinService.sendcpf(bodyDaReq);
} 
 
@Get('listqueue')

async listqueue() {
    return this.checkinService.updateList();
}

  
  

} 



   // FALTA A ROTA DE GET , BATER LA NO NOSSO POSTREGE E VEM QUEM TA ESPERANDO. 

