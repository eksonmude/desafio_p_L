window.onload = () => {
   const indexManager = {
      currentPageIndex: 0,
      fadeBehavior: [['load', 'initial'], ['initial', 'rules']],
   }

   function fadeSection() {
      const sections = {
         current: document.querySelector(`.${indexManager.fadeBehavior[indexManager.currentPageIndex][0]}`),
         previus: document.querySelector(`.${indexManager.fadeBehavior[indexManager.currentPageIndex][1]}`)
      }

      sections.current.classList.add('reset-opacity')

      setTimeout(() => {
         sections.current.classList.add('hide')
         sections.previus.classList.remove('hide')
      }, 500);

      setTimeout(() => sections.previus.classList.remove('reset-opacity'), 600);

      ++indexManager.currentPageIndex
   }

   // fadeSection()

   // setup each fader-btn after 3 sec's
   setTimeout(() => {
      document.querySelector('#initial-btn').classList.add('show')

      document.querySelectorAll('.fader-btn').forEach(btn => btn.addEventListener('click', fadeSection))
   },);
}