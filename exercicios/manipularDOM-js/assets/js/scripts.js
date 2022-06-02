/*Atividade: Light Mode/Dark Mode

ok 1. Crie uma estrutura básica de projeto front-end (HTML, CSS e JS)
ok 2. Copie o HTML e o CSS deste repositório
ok 3. Crie um arquivo chamado scripts.js na sua pasta assets/js
4. Selecione os elementos: h1, button, footer e body
5. Se os elementos possuirem a classe dark-mode, modifique seus estilos. Caso contrário, volte os estilos para o original
 */



//Passo 6: essa função unifica as outras funções em uma só. Separar as funções que fazem coisas diferentes é uma boa prática.
function changeMode(){
    changeClasses();
    changeText();
}

//Passo 4: criar a função que muda as classes para darkmode
function changeClasses(){
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);

}

//Passo 5: criar a função que muda os textos do h1 e do botão
function changeText(){

    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";

    if (body.classList.contains(darkModeClass)) {
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
        return;
    }
        
    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + " ON";
    
}


//Passo 1: selecionar o botão como gatilho para o evento

const button = document.getElementById ('mode-selector') //mode-selector é o gatilho!



//Passo 2: adicionar evento ao botão (função "changeMode" foi declarada lá em cima)

button.addEventListener('click', changeMode)



//Passo 3: chamar os outros elementos que serão manipulados

const h1 = document.getElementById ('page-title'); //h1 tem id lá no doc html!

const body = document.getElementsByTagName ('body')[0];
//esse método retorna um array; portanto, é necessário chamar o index do elemento (no caso, 0, pq é o primeiro)
const footer = document.getElementsByTagName ('footer')[0]; //idem

const darkModeClass = 'dark-mode'; //o termo 'dark-mode' é repetido várias vezes no código. Então, vale a pena criar uma constante: caso seja necessário mudar, é só mudar uma vez no código






