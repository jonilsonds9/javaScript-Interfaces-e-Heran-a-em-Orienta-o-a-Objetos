import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Jonilson", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

const contaCorrenteJonilson = new ContaCorrente(1001, cliente1);
contaCorrenteJonilson.depositar(500);
const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteJonilson.transferir(valor, conta2);

console.log(contaCorrenteJonilson);
console.log(ContaCorrente.numeroDeContas);
