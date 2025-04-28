import { Injectable } from '@nestjs/common';
import { Flower } from '../../generated/prisma';
import { PrismaService } from '../prisma.service';
import { CreateFLowersDto } from './flowers.dto';
import { ConfigService } from '@nestjs/config';
import { EnumAppMode } from "../types";

@Injectable()
export class FlowersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  findAll() {
    console.log(this.configService.get<EnumAppMode>('MODE'));
    return this.prisma.flower.findMany();
  }

  create(dto: CreateFLowersDto) {
    return this.prisma.flower.create({
      data: dto,
    });
  }
}
