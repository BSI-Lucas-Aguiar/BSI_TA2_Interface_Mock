interface IVenda {
    msg: string;
}

class Venda implements IVenda {
    msg: string;

    constructor(msg: string) {
        this.msg = msg;
    }
    
}

export { IVenda, Venda }