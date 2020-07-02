// insert header content into desktop header

const header = document.querySelector('.header')
const desktopHeader = document.querySelector('.header-desktop')
desktopHeader.innerHTML = header.innerHTML

// hide desktop header when header enters viewport and shows when it leaves

inView('.header')
  .on('enter', el => desktopHeader.classList.remove('visible'))
  .on('exit', el => desktopHeader.classList.add('visible'))

VanillaTilt.init(document.querySelectorAll('.image'), {
  max: 25,
  speed: 400
})
