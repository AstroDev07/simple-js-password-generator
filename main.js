const passGen = (charCant, includeUppercase, includeSpecials) => {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specials = "!@#$%&*?+=_-/][{}";

  // crear los caracteres basados en los argumentos
  let chars = lowercase;
  if (includeUppercase) chars += uppercase; // si incluir mayusculas, concatenamos
  chars += numbers; // Siempre incluir numeros
  if (includeSpecials) chars += specials; // si usar specials concatenamos

  // usar un array para la contrasena para poder guardar cada caracter individual
  const password = [];

  // generamos la contrasena
  for (let i = 0; i < charCant; i++) {
    // seleccionamos un caracter random de los chars
    const random = Math.floor(Math.random() * chars.length); // de esta manera evitamos tener que checkear por limites de la condicional
    password.push(chars[random]);
  }

  // Unimos el array en una cadena y la retornamos
  return password.join("");
};

let key = passGen(22, true, true);
console.log(key);
console.log(key.length);
