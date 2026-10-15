import { IsNotEmpty,IsNumberString,Length } from 'class-validator';
import { cp } from 'fs';

// configurar

export class cpfDTO {
    @IsNotEmpty({message: 'Envie o CPF'})
    @Length(11,11,{message: 'Passe o CPF com 11 números'})
    @IsNumberString({}, {message: 'O CPF deve ter apenas números '})
    cpf : string;

}

