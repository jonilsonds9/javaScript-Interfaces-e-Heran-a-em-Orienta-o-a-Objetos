import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Jonilson", 11122233309);

const contaCorrenteJonilson = new ContaCorrente(cliente1, 1001);
contaCorrenteJonilson.depositar(500);
contaCorrenteJonilson.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
contaPoupanca.sacar(10);

console.log(contaPoupanca);
console.log(contaCorrenteJonilson);
