const accordionBtn = document.querySelectorAll('.accordion');
accordionBtn.forEach(btn => {
  const panel = btn.nextElementSibling;
  if(btn.classList.contains('always-active-accordion')) {
    panel.style.maxHeight = '170px';
    btn.classList.toggle('active');
  }
  btn.addEventListener('click', event => {
    btn.classList.toggle('active');
    if (btn.classList.contains('active')) {
      panel.style.maxHeight = panel.scrollHeight = '170px';
    }
    else {
      panel.style.maxHeight = 0;
    }
  })
})
