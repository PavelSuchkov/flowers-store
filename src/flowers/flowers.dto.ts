import { IsNumber, IsString } from 'class-validator';

export class CreateFLowersDto {
  @IsString({
    message: 'name must be a string!!!',
  })
  name: string;

  @IsString()
  color: string;

  @IsNumber()
  price: number;
}

export type TUpdateFlowersDto = Partial<CreateFLowersDto>;
