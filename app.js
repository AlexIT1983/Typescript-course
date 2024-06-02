"use strict";
// Задание #1 Модуль TypeScript
// функция для просчета рассрочки и скидки
const totalPrice = ({ price, discount = 0, isInstallment, months, }) => {
    let result;
    if (isInstallment === true && discount >= 0 && months) {
        result = (price * ((100 - discount) / 100)) / months;
    }
    else {
        result = price;
    }
    // вернуть округленный результат
    return Math.round(result);
};
const price = totalPrice({
    price: 100000,
    discount: 20,
    isInstallment: true,
    months: 12,
});
console.log(price); // 6250
