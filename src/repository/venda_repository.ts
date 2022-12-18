import { IVenda } from "../domain/Venda";
import { IRepository } from "./IRepository";

class VendaRepository implements IRepository {
    read() : Array<IVenda> {
        const lista = new Array<IVenda>();
        return lista;
    }
}

export { VendaRepository }