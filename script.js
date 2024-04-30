const navMenu = document.getElementById('main-nav'),
      openMenu = document.getElementById('open-menu'),
      closeMenu = document.getElementById('close-menu');

    openMenu.addEventListener('click', ()=> {
        navMenu.classList.toggle('active');
      }) 

      closeMenu.addEventListener('click', ()=> {
        navMenu.classList.remove('active');
      }) 

      