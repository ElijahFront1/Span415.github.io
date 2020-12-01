let linkToggle = document.querySelectorAll('.js-toggle');
console.log(linkToggle); // создаем NodeList linkToggle
for (i = 0; i < linkToggle.length; i++) {// Перебераем все элементы объекта linkToggle
    linkToggle[i].addEventListener('click', function (event) { //Каждому итерируемому элементу добавляем обработчик событий addEventListener с слушателем событий click и анонимной функцией с параметром event
        event.preventDefault();  // Отменяет стандартное дейвствие браузера для параметра event
        let container = document.getElementById(this.dataset.container); // Значением This в данной строке являются, поочередно все итерируемые элементы обьекта linkToggle. Метод dataset получает значение из атрибута 'data-container' содержащегося внутри this. При помощи .container получаем итоговое значение - id атрибута 'data-container'. Итоговое значение container: toggle-1
        if (!container.classList.contains('active')) { //Свойство classList возвращает псевдомассив DOMTokenList, содержащий все классы элемента. Метод .contains('active') проверяет является ли 'active' потомком узла DOMTokenList. Таким образом, в условии if проверяется активность триггера на элементе, и если он не активен запускается следующий блок кода.
            container.classList.add('active'); //classList.add('active') добавляет класс 'active' элементу 'container'
            container.style.height = 'auto'; //Стилизует элемент 'container'
            let height = container.clientHeight + 'px'; //Переменной height присваивается значение container.clientHeight + 'px'.
            container.style.height = '0px'; //container присваевается высота 0px.
            setTimeout(function () {  //setTimeout производит вызов функции после задержки в данном примере равной 0.
                container.style.height = height; // свойству height присваивается значение переменной height
            }, 100);
        } else { 
            container.style.height = '0px'; //container присваевается высота 0px.
            container.addEventListener('transitionend', function () { //addEventListener регестирует событие 'transitionend' с слушателем function дя переменной 'container' 
                container.classList.remove('active'); // Удаляем свойство 'active' 
            }, {
                once: true //once: Boolean указывает, что слушатель должен быть вызван не более одного раза после добавления. Если true, слушатель автоматически удаляется при вызове.
            });
        }
    });
}