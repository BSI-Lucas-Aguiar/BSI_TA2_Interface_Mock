import { IVenda } from "../domain/Venda";

interface IRepository {
    read(): Array<IVenda>;
}

export { IRepository }