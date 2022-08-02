var numero = 20  //Com Var, fora do bloco, a variável fica declarada em um escopo mais amplo
{
    let numero = 30 
    console.log("Dentro =", numero)  /*Com Let, sendo declarada dentro de um bloco, o valor que
                                     será imprimido é diferente*/
}
    console.log("Fora =", numero)