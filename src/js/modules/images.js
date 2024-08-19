const images = () => {
    const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),//секция с картинками
            bigImage = document.createElement('img');

    imgPopup.classList.add('popup');//из пустого div сделали модалку с помощью класса
    workSection.appendChild(imgPopup);//поместили модалку на место секции с картинками

    //Отцентровали наше модальное окно 
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImage);//вставили блок Img в нашу модалку

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
        }

        if (target && target.matches('div.popup')) {//выражение в скобках равно клику на подложку
            imgPopup.style.display = 'none';
        }
    })


};

export default images;