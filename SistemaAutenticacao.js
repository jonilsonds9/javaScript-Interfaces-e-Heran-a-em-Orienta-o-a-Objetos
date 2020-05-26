/*
Ser autenticavel significa ter o método "autenticar"

Ducky Type
*/

export class SistemaAutenticacao{
  static login(autenticavel, senha) {
    if (SistemaAutenticacao.autenticavel(autenticavel)) {
      return autenticavel.autenticar(senha);
    }
    return false;
  }

  static autenticavel(autenticavel) {
    return "autenticar" in autenticavel && 
      autenticavel.autenticar instanceof Function;
  }
}