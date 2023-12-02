document.getElementById('voltarBtn').addEventListener('click', function() {
    goBack();
});

function goBack() {
    window.history.back();
}
document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
document.addEventListener('DOMContentLoaded', function() {
    var meuBotao = document.getElementById('andrei');

    meuBotao.addEventListener('click', function() {
        window.location.href = "mailto:andrei.cardozo@unidavi.edu.br";
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var meuBotao = document.getElementById('alex');

    meuBotao.addEventListener('click', function() {
        window.location.href = "mailto:alexssander.cristino@unidavi.edu.br";
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var meuBotao = document.getElementById('otavio');

    meuBotao.addEventListener('click', function() {
        window.location.href = "mailto:otavio.rodrigues@unidavi.edu.br";
    });
});
