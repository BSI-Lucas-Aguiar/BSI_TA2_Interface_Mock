import { Venda_Controller } from "../controller/venda_Controller"
import { VendaRepository } from "../repository/venda_repository";
import { VendasUseCase } from "../use_cases/venda_usecase";


function criaRepositoryFactory() {
    const repo = new VendaRepository();
    return repo;
}

function criaUseCaseFactory() {
    const repo = criaRepositoryFactory();
    const useCase = new VendasUseCase(repo);
    return useCase;
}

function criaControllerFactory() {
    const usecase = criaUseCaseFactory();
    const controller = new Venda_Controller(usecase);
    return controller;
}

export { criaRepositoryFactory, criaUseCaseFactory , criaControllerFactory }