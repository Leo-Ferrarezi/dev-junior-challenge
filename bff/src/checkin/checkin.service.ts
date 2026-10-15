import { Injectable, NotAcceptableException, UnauthorizedException } from '@nestjs/common';
import { cpfDTO } from './dtos/checkin';
import { HttpService } from '@nestjs/axios';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CheckinService {

  constructor(private prismaService: PrismaService) {}
    
    async sendcpf(data: cpfDTO ){
      
      const cpfWaitingLista = await this.prismaService.checkin.findFirst({
     
          where: {

            cpf: data.cpf,
        } ,
       });
       if (cpfWaitingLista){
        throw new UnauthorizedException("O Paciente já realizou check-in :) ")
        } 

        const clientExist = await fetch(`http://localhost:4000/pacientes/${data.cpf}`);

        if (clientExist.status == 400 || !clientExist.ok) {
          
          throw new NotAcceptableException('Que pena, vocé não é nosso cliente')

        }

       const clientTotal = await clientExist.json();



        return this.prismaService.checkin.create({
          
          data: {

            cpf: clientTotal.cpf,
            nome: clientTotal.nome,
          },


        })

      
           
       
      
       

    }
      async updateList() {
        return this.prismaService.checkin.findMany({
          orderBy: {
            horarioChegada: 'asc',


          }

        })


        }


}


