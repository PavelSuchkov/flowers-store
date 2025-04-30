import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class WebsocketGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  afterInit(server: Server): any {
    console.log('WebsacketGateway initialized ');
  }

  handleConnection(client: Socket, ...args): any {
    console.log('Client connected', client.id);
  }

  handleDisconnect(client: Socket): any {
    console.log('Client disconnected', client.id);
  }

  @SubscribeMessage('message')
  handleMessage(message: string): void {
    console.log('message ===>  ', message);
    this.server.emit('emit message => ', `Echo: ${message}`);
  }
}
