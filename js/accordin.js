window.onload = () => {
  const accordionBtn = document.querySelectorAll('.accordion');
  accordionBtn.forEach(btn => {
    const panel = btn.nextElementSibling;
    console.log(panel.scrollHeight);
    if (btn.classList.contains('always-active-accordion')) {
      panel.style.maxHeight = panel.scrollHeight + 'px';
      btn.classList.toggle('active');
    }
    btn.addEventListener('click', event => {
      btn.classList.toggle('active');
      if (btn.classList.contains('active')) {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
      else {
        panel.style.maxHeight = 0;
      }
    })
  })
}
