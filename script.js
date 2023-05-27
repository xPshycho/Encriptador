function handleInput(event) {
   const input = event.target;
   input.value = input.value.toLowerCase().replace(/[^a-z]/g, '');
}
const textarea = document.getElementById('texto');
const placeholder = "Escribe aquí tu texto...";
let index = 0;

function typePlaceholder() {
   textarea.setAttribute('placeholder', placeholder.slice(0, index));
   index++;
   if (index <= placeholder.length) {
      setTimeout(typePlaceholder, 100);
   }
}

window.addEventListener('load', () => {
   typePlaceholder();
});
