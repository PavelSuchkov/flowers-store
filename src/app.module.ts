import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { FlowersModule } from './flowers/flowers.module';
import { LoggerMiddleware } from './conception/middleware';

@Module({
  imports: [FlowersModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('flowers');
  }
}
