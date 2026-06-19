const coverages = [
  { key: "basica" },
  { key: "condominio" },
  { key: "iptu" },
  { key: "gas" },
  { key: "agua" },
  { key: "luz" }
];


for (let i = 0; i < coverages.length; i++) {
    console.log(coverages[i].key);
}


//Modelo de chamada moderno abaixo:

/*for (let coverage of coverages) {
    console.log(coverage.key);
}*/ 