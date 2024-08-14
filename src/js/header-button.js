document.addEventListener('DOMContentLoaded', function () {
  // Получаем элементы
  const mobileNavigator = document.querySelector('.mobileNavigator');
  const backdropClose = document.querySelector('.backdrop-close');

  // Переменная для отслеживания состояния
  let isOpen = false;

  // Функция для открытия/закрытия окна
  function toggleNavigator() {
    if (isOpen) {
      // Закрыть окно
      mobileNavigator.style.transform = 'translateY(46%)';
    } else {
      // Открыть окно
      mobileNavigator.style.transform = 'translateY(0%)';
    }
    // Переключаем состояние
    isOpen = !isOpen;
  }

  // Событие для открытия/закрытия при клике на backdropClose
  backdropClose.addEventListener('click', toggleNavigator);
});
