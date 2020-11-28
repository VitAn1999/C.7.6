import { definePrime } from './definePrime.js';

describe ('test is the number prime or complex', () => {
    it (('number is prime/complex/incorrectData'), () => {
        expect(definePrime(17)).toBe('Число 17 простое');
        expect(definePrime(18)).toBe('Число 18 составное');
        expect(definePrime(1001)).toBe('Данные введены неверно');
    });
});