// Suporte para dispositivos touch: alterna classe expanded ao clicar no botão
(function(){
    const topbar = document.getElementById('topbar');
    const toggle = document.getElementById('toggleBtn');

    // Toggle via botão (útil em touch)
    toggle.addEventListener('click', function(e){
    const expanded = topbar.classList.toggle('expanded');
    toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });

    // Fecha a barra se o usuário clicar fora dela (em telas pequenas)
    document.addEventListener('click', function(e){
    const wrap = document.getElementById('topbarWrap');
    if(!wrap.contains(e.target) && topbar.classList.contains('expanded')){
        topbar.classList.remove('expanded');
        toggle.setAttribute('aria-expanded','false');
    }
    });

    // Evita que o hover do desktop conflite com toque: detecta touch e remove hover behavior if desired
    let isTouch = false;
    window.addEventListener('touchstart', function onFirstTouch(){
    isTouch = true;
    window.removeEventListener('touchstart', onFirstTouch, false);
    }, false);
})();