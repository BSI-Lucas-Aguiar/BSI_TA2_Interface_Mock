import { IVenda } from "../domain/Venda"

interface IUseCase {
    recuperaDados(): IVenda;
}

export { IUseCase }