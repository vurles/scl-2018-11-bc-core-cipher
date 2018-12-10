window.cipher = {
  encode: (texto, desplazo) => {
let resultado="";
for (let i = 0; i<texto.length;i++) {
  texto = texto.toUpperCase();
 const capsula= texto.charCodeAt(i);
 
 if(capsula >=65 && capsula<= 90){
  let form = (capsula - 65 + parseInt(desplazo)%26)+65;
  if(form>90){
    form-=26;
  }
   resultado += String.fromCharCode(form);
 }
if(capsula < 97 && capsula> 90){//este if donde dejo los caracteres especiales como ()!{} sin cambios
  resultado += texto [i];
}
if(capsula == 32) {
  resultado += texto[i];
}
}return resultado;

  },
 decode: (cajaDeco, desplazoDeco) => {
    let result = "";
    for(let i = 0; i<cajaDeco.length; i++){
      cajaDeco = cajaDeco.toUpperCase();// me pasa mi texto a mayusculas
      
      const descapsular = cajaDeco.charCodeAt(i);

     

      if(descapsular >= 65 && descapsular <= 90){
        let forMichel = (descapsular-65-parseInt(desplazoDeco)%26) +65;
        if(forMichel<65){
          forMichel+=26;
        }
        result+= String.fromCharCode(forMichel);
      }
    //  if(descapsular < 97 && descapsular> 90){
      //  result += cajaDeco [i];
     //  }
      if(descapsular == 32){
        result += cajaDeco[i];
      }

    }return result

}
};