import { Request, Response } from 'express';

import { IUseCase } from '../use_cases/IUseCase';

class Venda_Controller {
    venda_usecase: IUseCase;

    constructor(venda_usecase: IUseCase) {
        console.log(typeof venda_usecase)
        console.log(venda_usecase)
        
        this.venda_usecase = venda_usecase;
    }

    listar_dados(req: Request, resp: Response) {

        const venda = this.venda_usecase.recuperaDados();
        return resp.status(200).json(venda)
    }
}

export { Venda_Controller };
