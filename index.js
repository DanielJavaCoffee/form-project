document.getElementById('sectionB').style.setProperty('display', 'none', 'important');
document.getElementById('sectionF').style.setProperty('display', 'none', 'important');

function back(){
    document.getElementById('sectionF').style.setProperty('display', 'none', 'important');

    document.getElementById('sectionB').style.setProperty('display', 'block', 'important');

    document.getElementById('text_resposta').innerHTML = '';
}

function backResposta(event) {

    let value = event.target.value;
    let resposta = ''; 

    switch(value) {
        case 'java':
            resposta = 'Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90 por uma equipe de programadores chefiada por James Gosling, na empresa Sun Microsystems, que em 2008 foi adquirido pela empresa Oracle Corporation.';
            break;
        case 'python':
            resposta = 'Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Foi lançada por Guido van Rossum em 1991.';
            break;
        case 'javascript':
            resposta = 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.';
            break;
    }
    document.getElementById('text_resposta').innerHTML = resposta;
}

function front(){
    document.getElementById('sectionB').style.setProperty('display', 'none', 'important');

    document.getElementById('sectionF').style.setProperty('display', 'block', 'important');

    document.getElementById('text_resposta').innerHTML = '';
}


function frontResposta(event){

    let value = event.target.value;
    let resposta = '';

    switch(value) {
        case 'react':
            resposta = 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas.';
            break;
        case 'angula':
            resposta = 'Angular é uma plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript liderado pela Equipe Angular do Google e por uma comunidade de indivíduos e corporações. Angular é uma reescrita completa do AngularJS, feito pela mesma equipe que o construiu.';
            break;
        case 'vue.js':
            resposta = 'Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única';
            break;
    }
    document.getElementById('text_resposta').innerHTML = resposta;
}