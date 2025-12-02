// Safety: wrap code so it não quebre se elemento não existir
document.addEventListener('DOMContentLoaded', function () {

    /* SCROLL REVEAL SIMPLES */
    const scrollElems = document.querySelectorAll('.scroll-anim');
    function revealOnScroll() {
        scrollElems.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 80) el.classList.add('show');
        });
    }
    window.addEventListener('scroll', revealOnScroll, { passive: true });
    revealOnScroll();

    /* MENU MOBILE (botão que move nav in/out) */
    const menuBtn = document.getElementById('menu-btn');
    const nav = document.getElementById('nav');

    if (menuBtn && nav) {
        let open = false;
        menuBtn.addEventListener('click', () => {
            open = !open;
            if (open) {
                nav.style.right = '0';
                menuBtn.setAttribute('aria-label', 'Fechar menu');
            } else {
                nav.style.right = '-260px';
                menuBtn.setAttribute('aria-label', 'Abrir menu');
            }
        });

        // fecha menu ao clicar em um link (mobile)
        nav.addEventListener('click', (e) => {
            if (e.target.tagName === 'A' && window.innerWidth <= 880) {
                nav.style.right = '-260px';
                open = false;
                menuBtn.setAttribute('aria-label', 'Abrir menu');
            }
        });

        // garante estado inicial (principalmente em resize)
        function onResize() {
            if (window.innerWidth > 880) {
                nav.style.right = '0';
            } else if (!open) {
                nav.style.right = '-260px';
            }
        }
        window.addEventListener('resize', onResize);
        onResize();
    }

    /* PREVENIR ERROS se btn whatsapp não existir - não necessário aqui pois sempre está */
});
