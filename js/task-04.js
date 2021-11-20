// const counterValue = {
//     value: 0,
//     increment() {
//         this.value += 1;
//     },
//     decrement() {
//         this.value -= 1;
//     },
// };

const counterEl = document.querySelector('#value');
const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');



let counterValue = 0;

decrementEl.addEventListener('click', decrementButtonClick)

incrementEl.addEventListener('click', incrementButtonClick)

function decrementButtonClick() {
    counterValue -= 1;
    counterEl.textContent = counterValue;
}

function incrementButtonClick() {
    counterValue += 1;
    counterEl.textContent = counterValue;
}