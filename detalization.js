let linkToggle = document.querySelectorAll('.js-toggle');
console.log(linkToggle);
for (i = 0; i < linkToggle.length; i++) {
    linkToggle[i].addEventListener('click', function (event) {
        event.preventDefault();
        let container = document.getElementById(this.dataset.container);
        if (!container.classList.contains('active')) {
            container.classList.add('active');
            container.style.height = 'auto';
            let height = container.clientHeight + 'px';
            container.style.height = '0px';
            setTimeout(function () {
                container.style.height = height;
            }, 100);
        } else {
            container.style.height = '0px';
            container.addEventListener('transitionend', function () {
                container.classList.remove('active');
            }, {
                once: true
            });
        }
    });
}