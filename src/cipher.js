window.cipher = {
  encode: (texto, desplazo) => {
let resultado="";
for (let i = 0; i<texto.length;i++) {
  texto = texto.toUpperCase();

//if (texto === ñ){
 // resultado += texto[i]/
//}
 const capsula= texto.charCodeAt(i);
 
 if(capsula >=65 && capsula<= 90){
  let form = (capsula - 65 + parseInt(desplazo)%26)+65;
  if(form>90){
    form-=26;
  }
   resultado += String.fromCharCode(form);
 }
 // numeros negativos
 if(capsula < 48 &&  capsula < 57) {
   let numerosNegativos = (capsula - 48 + desplazo)%10 +48;
   resultado += String.fromCharCode(numerosNegativos);
 }
if(capsula < 97 && capsula> 90){//este if donde dejo los caracteres especiales como ()!{} sin cambios
  resultado += texto [i];
}
if(capsula == 32) {
  resultado += texto[i];
}
}return resultado;

  },
 decode: (textoDescrifrar, desplazoDescifrar) => {
    let result = "";
    for(let i = 0; i<textoDescrifrar.length; i++){
      textoDescrifrar = textoDescrifrar.toUpperCase();// me pasa mi texto a mayusculas
      
      const descapsular = textoDescrifrar.charCodeAt(i);

     

      if(descapsular >= 65 && descapsular <= 90){
        let forMichel = (descapsular-65-parseInt(desplazoDescifrar)%26) +65;
        if(forMichel<65){
          forMichel+=26;
        }
        result+= String.fromCharCode(forMichel);
      }
    //  if(descapsular < 97 && descapsular> 90){
      //  result += textoDescrifrar [i];
     //  }
      if(descapsular == 32){
        result += textoDescrifrar[i];
      }

    }return result

}
};