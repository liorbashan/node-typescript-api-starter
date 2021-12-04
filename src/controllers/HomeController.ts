import { Container } from 'typedi';
import { JsonController, Post, Body, BadRequestError } from 'routing-controllers';

@JsonController('/api')
export class HomeController {
    constructor() {}

    @Post('/test')
    public async test(@Body() payload: any): Promise<any> {
        return 200;
    }
}
