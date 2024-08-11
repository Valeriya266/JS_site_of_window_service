const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const windows = document.querySelectorAll('[data-modal]');


        trigger.forEach(item => 
            item.addEventListener('click', (e) => {
            if (e.target) {
               e.preventDefault(); //мы проверили что на нашу кнопку действительно нажали
            }

            windows.forEach(item => {
                item.style.display = 'none';
            })

            modal.style.display = 'block'; //после этого открываем модальное окно
            document.body.style.overflow = 'hidden';
            //document.body.classList.add('modal-open');
        })
        );

        close.addEventListener('click', () => { //события при нажатии на крестик модального окна
            windows.forEach(item => {
                item.style.display = 'none';
            })

            modal.style.display = 'none';
            document.body.style.overflow = '';
            //document.body.classList.remove('modal-open');
        })

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                windows.forEach(item => {
                    item.style.display = 'none';
                })
                
                modal.style.display = 'none';
                document.body.style.overflow = '';
                //document.body.classList.remove('modal-open');
            }
        })
    };

    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time)
    }
    //наша кнопка "вызвать замерщика" '.popup_engineer_btn'
    //наше модальное окно '.popup_engineer'
    //крестик на модальном окне '.popup_engineer .popup_close'

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    showModalByTime('.popup', 60000);
}

export default modals;