const refs = {
    fontSizeControl: document.querySelector('#font-size-control'),
    text: document.querySelector('#text')
}

refs.fontSizeControl.addEventListener('change', onFontSizeControl)

function onFontSizeControl(event) {
    refs.text.style.fontSize = event.currentTarget.value + 'px'
}

