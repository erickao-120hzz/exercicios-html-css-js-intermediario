/*

Passo 1 - Pegar todos os inputs que tenham a mesma classe.

        Passo 2 - Dar um jeito de percorrer cada input.

        Passo 3 - Quando o usuário preencher algo, precisamos disparar a ação para verificar se o input foi alterado.
			
				Passo 4 - Realizar a verificação se o valor do input é diferente de vazio.

				Passo 5 - Se o input tiver alguma informação, adicionamos a classe de campo-preenchido que vai dar a borda verde ao input.

				Passo 6 - Se o input estiver vazio, removemos a classe campo-preenchido.
*/

// Passo 1 - Pegar todos os inputs que tenham a mesma classe.
const inputText = document.querySelectorAll("input-text");
// Passo 2 - Dar um jeito de percorrer cada input - vamos utilizar o laço de repetição forEach para percorrer os inputs.
inputText.forEach(input => {
// Passo 3 - Quando o usuário preencher algo, precisamos disparar a ação para verificar se o input foi alterado.
input.addEventListener('change', () => {
    // Passo 4 - Realizar a verificação se o valor do input é diferente de vazio.
    if (input.value !== "") {
        // Passo 5 - Se o input tiver alguma informação, adicionamos a classe de campo-preenchido que vai dar a borda verde ao input.
    } else {
        // Passo 6 - Se o input estiver vazio, removemos a classe campo-preenchido.
        input.classList.remove("campo-preenchido"); //
    }
});
});
