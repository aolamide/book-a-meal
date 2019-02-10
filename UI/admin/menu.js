const buttons = document.getElementsByClassName('btn-modify');

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', () => {
        if(buttons[i].innerText == 'REMOVE'){
            buttons[i].innerText = 'ADD';
            buttons[i].style.background = '#4971f8';
        }else{
            buttons[i].innerText = 'REMOVE';
            buttons[i].style.background = 'red';
        }
    });
}