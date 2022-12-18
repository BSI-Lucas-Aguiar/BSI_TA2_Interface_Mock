import { IVenda, Venda } from '../domain/Venda'
import { IRepository } from '../repository/IRepository';
import { IUseCase } from './IUseCase';

class VendasUseCase implements IUseCase {
    repo: IRepository;

    constructor(repo: IRepository) {
        this.repo = repo;
    }

    recuperaDados(): IVenda {
        const venda = new Venda('Venda Realizada');
        return venda;
    }
}

export { VendasUseCase }