export function definePrime (num) {
    let isPrime = true;
    let result = '';
    if (num > 1 && num <= 1000) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            result = `Число ${num} простое`;
        } else {
            result = `Число ${num} составное`;
        }
    } else {
        result = 'Данные введены неверно';
    }
    return result;
}