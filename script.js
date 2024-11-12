const result = document.getElementById('result');
const reset = document.getElementById('reset')
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const addition = document.getElementById('addition')
const division = document.getElementById('division')


// const plusNumber = function() {
//     const sum = +input1.value + +input2.value;
//     result.textContent = sum
// }
// const minusNumber = function() {
//     const sum = +input1.value - +input2.value;
//     result.textContent = sum
// }
// const additionNumber = function() {
//     const sum = input1.value * input2.value;
//     result.textContent = sum
// }
// const divisionNumber = function() {
//     if(input2.value == 0){
//         result.textContent = 'Division by zero is impossible'
//     } else {
//         const sum = input1.value / input2.value;
//         result.textContent = sum
//     }
// }

// ...............Optimized............
const calculate = (operation) => {
    const num1 = input1.value
    const num2 = input2.value

    let resultValue;
    switch (operation) {
        case 'plus':
            resultValue = +num1 + +num2;
            break;
        case 'minus':
            resultValue = +num1 - +num2;
            break;
        case 'addition':
            resultValue = num1 * num2;
            break;
        case 'division':
            if (num2 == 0) {
                result.textContent = "Division by zero is impossible";
                return;
            }
            resultValue = num1 / num2;
            break;
    }

    result.textContent = resultValue;
};
// plus.addEventListener('click', () => {
//     plusNumber()
// })
// minus.addEventListener('click', () => {
//     minusNumber()
// });
// addition.addEventListener('click', () => {
//     additionNumber()
// })
// division.addEventListener('click', () => {
//     divisionNumber()
// })

// ...............Optimized............
plus.addEventListener('click', () => calculate('plus'));
minus.addEventListener('click', () => calculate('minus'));
addition.addEventListener('click', () => calculate('addition'));
division.addEventListener('click', () => calculate('division'));



reset.addEventListener('click', () => {
    result.textContent = 0
    input1.value = ''
    input2.value = ''
})


