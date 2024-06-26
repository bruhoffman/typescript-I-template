/*
A função abaixo recebe um ano e retorna um booleano, indicando se o ano recebido é bissexto ou não.
Lembre-se que:
são bissextos todos os anos múltiplos de 400;
são bissextos todos os múltiplos de 4, exceto se for múltiplo de 100 mas não de 400;
Não são bissextos todos os demais anos.

Com isso em mente, refatore a função para o Typescript.
*/
/* DESCOMENTE ESTA FUNÇÃO */
function checaAnoBissexto(ano) {
    var cond1 = ano % 400 === 0;
    var cond2 = (ano % 4 === 0) && (ano % 100 !== 0);
    return cond1 || cond2;
}
console.log(checaAnoBissexto(2022));
console.log(checaAnoBissexto(2020));