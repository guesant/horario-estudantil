interface Base {
  nome: string;
}

interface Sub extends Base {
  senha: string;
}

type TBase = { nome: string };

type TSub = TBase | { senha: string };

var v1: Sub = { nome: "", senha: "", zz: 98 };
var v2: TSub = { nome: "", senha: "" };
