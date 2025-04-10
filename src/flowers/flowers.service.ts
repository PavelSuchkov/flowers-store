import { Injectable } from '@nestjs/common';

@Injectable()
export class FlowersService {
  findAll() {
    return [
      {
        id: 1,
        name: 'Rose',
        price: 10,
        color: 'red',
      },
      {
        id: 2,
        name: 'Lily',
        price: 20,
        color: 'white',
      },
      {
        id: 3,
        name: 'Tulip',
        price: 30,
        color: 'yellow',
      },
    ];
  }
}
