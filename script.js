function handleInput(event) {
   const input = event.target;
   input.value = input.value.toLowerCase().replace(/[^a-z]/g, '');
 }
 
 const textarea = document.getElementById('texto');
 const cajaTexto = document.querySelector('.cajatexto');
 const errorMensaje = document.querySelector('.error');
 const petiMensaje = document.querySelector('.peti');
 const btnEncriptar = document.querySelector('.btn_Encriptar');
 const btnDesencriptar = document.querySelector('.btn_Desencriptar');
 const btnLimpiar = document.querySelector('.btn_Limpiar');
 const btnCopiar = document.querySelector('.btn_Copiar');
 
 btnEncriptar.addEventListener('click', encriptarTexto);
 btnDesencriptar.addEventListener('click', desencriptarTexto);
 btnLimpiar.addEventListener('click', limpiarTexto);
 btnCopiar.addEventListener('click', copiarTexto);
 
 function encriptarTexto() {
   const texto = textarea.value;
   const textoEncriptado = encriptar(texto);
   mostrarResultado(textoEncriptado);
 }
 
 function desencriptarTexto() {
   const textoEncriptado = textarea.value;
   const textoDesencriptado = desencriptar(textoEncriptado);
   mostrarResultado(textoDesencriptado);
 }
 
 function limpiarTexto() {
   textarea.value = '';
   cajaTexto.style.display = 'none';
   errorMensaje.style.display = 'none';
   petiMensaje.style.display = 'block';
 }
 
 function copiarTexto() {
   textarea.select();
   document.execCommand('copy');
 }
 
 function mostrarResultado(texto) {
   if (texto) {
     petiMensaje.style.display = 'none';
     errorMensaje.style.display = 'none';
     cajaTexto.style.display = 'block';
     cajaTexto.textContent = texto;
   } else {
     cajaTexto.style.display = 'none';
     petiMensaje.style.display = 'none';
     errorMensaje.style.display = 'block';
   }
 }
 function encriptar(texto) {
   let textoEncriptado = '';
   for (let i = 0; i < texto.length; i++) {
     const letra = texto[i];
     switch (letra) {
       case 'e':
         textoEncriptado += 'enter';
         break;
       case 'i':
         textoEncriptado += 'imes';
         break;
       case 'a':
         textoEncriptado += 'ai';
         break;
       case 'o':
         textoEncriptado += 'ober';
         break;
       case 'u':
         textoEncriptado += 'ufat';
         break;
       default:
         textoEncriptado += letra;
     }
   }
   return textoEncriptado;
 }
 
 function desencriptar(textoEncriptado) {
   let textoDesencriptado = '';
   let i = 0;
   while (i < textoEncriptado.length) {
     const letra = textoEncriptado.slice(i, i + 5);
     switch (letra) {
       case 'enter':
         textoDesencriptado += 'e';
         i += 5;
         break;
       case 'imes':
         textoDesencriptado += 'i';
         i += 4;
         break;
       case 'ai':
         textoDesencriptado += 'a';
         i += 2;
         break;
       case 'ober':
         textoDesencriptado += 'o';
         i += 4;
         break;
       case 'ufat':
         textoDesencriptado += 'u';
         i += 4;
         break;
       default:
         textoDesencriptado += letra[0];
         i++;
     }
   }
   return textoDesencriptado;
 }
 
 