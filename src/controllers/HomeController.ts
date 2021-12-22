// import { Container } from 'typedi';
import { JsonController, Post, Body, BadRequestError, Get, Req, Res } from 'routing-controllers';

@JsonController('/api')
export class HomeController {
    constructor() {}

    @Post('/test')
    public async test(@Body() payload: any, @Res() response: any): Promise<any> {
        response.status(200);
    }

    @Get('/bad')
    public async bad(@Res() response: any): Promise<any> {
        response.status(400);
        return new BadRequestError('bad request example');
    }

    @Get('/')
    public async get(@Req() request: any, @Res() response: any): Promise<string> {
        response.status(200);
        return 'OK';
    }
}
