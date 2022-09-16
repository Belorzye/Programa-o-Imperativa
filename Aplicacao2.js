let pessoas = [
    {
      altura: 1.80,
      sexo: "M",
      opiniao: 3,
      idade: 18,
    },
    {
      altura: 1.51,
      sexo: "M",
      opiniao: 2,
      idade: 22,
    },
    {
      altura: 1.61,
      sexo: "F",
      opiniao: 3,
      idade: 20,
    },
    {
      altura: 1.55,
      sexo: "F",
      opiniao: 3,
      idade: 50,
    },
    {
      altura: 1.70,
      sexo: "F",
      opiniao: 2,
      idade: 28,
    },
    {
      altura: 1.74,
      sexo: "M",
      opiniao: 1,
      idade: 29,
    },
    {
      altura: 1.84,
      sexo: "F",
      opiniao: 1,
      idade: 42,
    },
    {
      altura: 1.74,
      sexo: "M",
      opiniao: 2,
      idade: 30,
    },
    {
      altura: 1.44,
      sexo: "M",
      opiniao: 3,
      idade: 25,
    },
    {
      altura: 1.68,
      sexo: "F",
      opiniao: 3,
      idade: 37,
    },
    {
      altura: 1.00,
      sexo: "F",
      opiniao: 2,
      idade: 30,
    },
    {
      altura: 1.69,
      sexo: "F",
      opiniao: 1,
      idade: 24,
    },
    {
      altura: 1.92,
      sexo: "M",
      opiniao: 1,
      idade: 28,
    },
  
    {
      altura: 1.92,
      sexo: "M",
      opiniao: 1,
      idade: 21,
    },
  
    {
      altura: 1.72,
      sexo: "M",
      opiniao: 2,
      idade: 24,
    },

  ];
  
  // Valores opnião -  1) Regular | 2) Bom | 3) Ótimo
  
  const mediaOtimo = (array) => {
    let qtdRegular = 0;
    let qtdBom = 0;
    let qtdOtimo = 0;
    let soma = 0;
    let media = 0;
    let porcento = 0;
  
    array.forEach((item) => {


      if (item.opiniao === 1) {
        qtdRegular++;
      }
  
      if (item.opiniao === 2) {
        qtdBom++;
      }

      if (item.opiniao === 3) {
        qtdOtimo++;
        soma = soma + item.idade;
        media = soma / qtdOtimo;
      }


    });
  
    porcento = (qtdBom * 100) / array.length;
  
    console.log(
        `RESPOSTA 01) A porcengatem de pessoas que responderam bom foi de ${porcento.toFixed(2)}%.`
      );
      
    console.log(
      `RESPOSTA 02) A quantidade de pessoas que respondeu regular foi de ${qtdRegular}.`
    );
    
    console.log(
        `RESPOSTA 03) ${qtdOtimo} pessoas responderam ótimo e a média de idade entre elas foi de ${qtdOtimo}.`
      );
  };
  
  mediaOtimo(pessoas);