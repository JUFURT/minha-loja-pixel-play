function simularCompra() {
    const preco1 = 199.90, preco2 = 249.90, preco3 = 179.90;
    let qtd1 = Number(prompt("Quantos HEADSET GAMER RGB (R$ 199,90) você quer?"));
    let qtd2 = Number(prompt("Quantos CONTROLE WIRELESS PRO (R$ 249,90) você quer?"));
    let qtd3 = Number(prompt("Quantos TECLADO MECÂNICO 60% (R$ 179,90) você quer?"));

    if (isNaN(qtd1) || isNaN(qtd2) || isNaN(qtd3)) {
        alert("Digite apenas números!"); return;
    }
    if (qtd1 === 0 && qtd2 === 0 && qtd3 === 0) {
        alert("Nenhum produto foi selecionado."); return;
    }

    let totalBruto = (preco1*qtd1) + (preco2*qtd2) + (preco3*qtd3);
    let desconto = totalBruto >= 500 ? totalBruto*0.15 : totalBruto >= 300 ? totalBruto*0.10 : 0;

    alert(`RESUMO - PIXEL PLAY
Headset: ${qtd1} x R$199,90 = R$${(preco1*qtd1).toFixed(2)}
Controle: ${qtd2} x R$249,90 = R$${(preco2*qtd2).toFixed(2)}
Teclado: ${qtd3} x R$179,90 = R$${(preco3*qtd3).toFixed(2)}

Subtotal: R$${totalBruto.toFixed(2)}
Desconto: -R$${desconto.toFixed(2)}
TOTAL: R$${(totalBruto-desconto).toFixed(2)}`);
}
