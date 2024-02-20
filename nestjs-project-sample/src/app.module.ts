import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UserModule} from "./user.module";
import {ConfigurationModule} from "./configuration/configuration.module";
import {LoggerMiddleware} from "./logger.middleware";

@Module({
  imports: [UserModule, ConfigurationModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(AppController);
  }
}
