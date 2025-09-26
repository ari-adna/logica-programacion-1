let nekoNum1 = parseInt(prompt("UwU Ingresa el primer numerito kawaii:"));
let nekoNum2 = parseInt(prompt("UwU Ingresa el segundo numerito kawaii:"));
let nekoNum3 = parseInt(prompt("UwU Ingresa el tercer numerito kawaii:"));

let cajitaNums = [nekoNum1, nekoNum2, nekoNum3];

if (nekoNum1 === nekoNum2 && nekoNum2 === nekoNum3) {
  console.log("✨ Todos los numeros son iguales ✨: " + nekoNum1 + ", " + nekoNum2 + ", " + nekoNum3);
  document.body.innerHTML += "<p>✨ Todos los numeritos son iguales ✨</p>";
} else {
  let mayorAMenor = [...cajitaNums].sort((a, b) => b - a);
  let menorAMayor = [...cajitaNums].sort((a, b) => a - b);

  console.log("🌟 Orden de mayor a menor: " + mayorAMenor.join(", "));
  console.log("🍀 Orden de menor a mayor: " + menorAMayor.join(", "));

  document.body.innerHTML += "<p>🌟 Orden de mayor a menor: " + mayorAMenor.join(", ") + "</p>";
  document.body.innerHTML += "<p>🍀 Orden de menor a mayor: " + menorAMayor.join(", ") + "</p>";
}
