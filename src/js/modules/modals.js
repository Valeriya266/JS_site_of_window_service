const modals = () => {
    function bindModal(trigger, modal, close) {
        trigger.addEventListener('click', (e) => {
            if (e.target) {
               e.preventDefault(); //мы проверили что на нашу кнопку действительно нажали
            }

            modal.style.display = 'block'; //после этого открываем модальное окно
            document.body.style.overflow = 'hidden';
        });

        close.addEventListener('click', () => { //события при нажатии на крестик модального окна
            modal.style.display = 'none';
            document.body.style.overflow = '';
        })
    }

    const callEngineerBtn = document.querySelector('.popup_engineer_btn');//наша кнопка "вызвать замерщика"
    const modalEngineer = document.querySelector('.popup_engineer');//наше модальное окно
    const modalEngineerClose = document.querySelector('.popup_engineer .popup_close');//крестик на модальном окне

    bindModal(callEngineerBtn, modalEngineer, modalEngineerClose);
}

export default modals;