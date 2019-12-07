function checaIdade(idade) {
  return new Promise((resolve, reject) => {
    setTimeout(() => idade >= 18 ? resolve(true) : reject(false), 2000);
  });
}

async function executaChecagemDeIdade() {
  try {
    await checaIdade(17);
    console.log('Maior que 18');
  } catch (error) {
    console.log('Menor que 18');
  }

  console.log('Será que aparece antes?');
}

executaChecagemDeIdade();
