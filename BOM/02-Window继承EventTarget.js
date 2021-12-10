const clickHandler = function() {
     console.log('window.onclick');
}

window.addEventListener('click', clickHandler);
// window.removeEventListener('click', clickHandler);

window.addEventListener('py', function() {
     console.log('监听到了py事件')
});

//dispatchEvent
//派发事件
window.dispatchEvent(new Event('py'));