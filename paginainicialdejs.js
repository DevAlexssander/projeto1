
document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
document.addEventListener('DOMContentLoaded', function () {
    var botaoRedirecionar = document.getElementById('login');
    botaoRedirecionar.addEventListener('click', function () {
        window.location.href = 'pagina-de-cadastro/login.html';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var botaoRedirecionar = document.getElementById('influencia');
    botaoRedirecionar.addEventListener('click', function () {
        window.location.href = 'pagina-da-influencia-no-dia-a-dia/influencia.html';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var botaoRedirecionar = document.getElementById('usaraonde');
    botaoRedirecionar.addEventListener('click', function () {
        window.location.href = 'pagina-de-onde-podem-ser-usadas/ondepodemserusadas.html';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var botaoRedirecionar = document.getElementById('usoerrado');
    botaoRedirecionar.addEventListener('click', function () {
        window.location.href = 'pagina-do-uso-incorreto/usoincorreto.html';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var botaoRedirecionar = document.getElementById('passadovsfuturo');
    botaoRedirecionar.addEventListener('click', function () {
        window.location.href = 'pagina-passado-vs-futuro/passadovsfuturo.html';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var botaoRedirecionar = document.getElementById('sobrenos');
    botaoRedirecionar.addEventListener('click', function () {
        window.location.href = 'pagina-sobre-nós/slidesobrenos.html';
    });
});
function alterarFavicon(caminhoFavicon) {
    var link = document.getElementById('novofavicon');

    if (link) {
        link.href = caminhoFavicon;
    } else {
        var novoLink = document.createElement('link');
        novoLink.id = 'novofavicon';
        novoLink.rel = 'icon';
        novoLink.href = caminhoFavicon;
        novoLink.type = 'image/x-icon';
        document.head.appendChild(novoLink);
    }
}
alterarFavicon('imagens/novofavicon.png');