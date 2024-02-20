import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {AppService} from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Get('getHelloService')
    getHelloService(): string {
        return this.getHelloService();
    }

    // Route GET dotée d'un paramètre qui renvoie la valeur de ce paramètre
    @Get('getWithParam/:id')
    getWithParam(@Param('id') id: string): string {
        return `Votre paramètre : ${id}.`;
    }

    // Route POST dotée d'un body qui renvoie la valeur de ce body
    @Post('postWithBody')
    postWithBody(@Body() body: string): string {
        return `Le corps de la requête : ${JSON.stringify(body)}.`;
    }
}
