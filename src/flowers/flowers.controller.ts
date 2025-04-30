import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { MyValidationPipe } from '../conception/pipe';
import { AuthGuard } from '../conception/guard';
import { LoggerInterceptor } from '../conception/interceptor';
import { CreateFLowersDto } from './flowers.dto';

@Controller('flowers')
@UseInterceptors(LoggerInterceptor)
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  @Get()
  @UseGuards(AuthGuard)
  findAll(@Query('pageNumber', MyValidationPipe) pageNumber: number) {
    console.log(pageNumber);
    return this.flowersService.findAll();
  }

  @Post()
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  create(@Body() dto: CreateFLowersDto) {
    return this.flowersService.create(dto);
  }

  @Get('new-order')
  newOrder() {
    console.log('newOrder was called');
    // return this.flowersService.findAll();
  }
}
