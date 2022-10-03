"use strict";
const arr = [-1, 1, 2, 3, 4];
console.group('1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
    function solution(arr) {
        console.log(arr.length);
    }
    console.log(arr);
    solution(arr);
}
console.groupEnd();
console.group('2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
    function solution(arr) {
        for (let i = 0; i < arr.length; i++)
            console.log(i);
    }
    solution(arr);
}
console.groupEnd();
console.group('3. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
    function solution(arr) {
        for (let i = 0; i < arr.length; i++)
            console.log(arr[i]);
    }
    solution(arr);
}
console.groupEnd();
console.group('4. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
    function solution(arr) {
        for (let i = 0; i < arr.length; i++)
            console.log(`[${i}] => ${arr[i]}`);
    }
    solution(arr);
}
console.groupEnd();
console.group('5. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
    function solution(arr) {
        for (let i = arr.length - 1; i >= 0; i--)
            console.log(arr[i]);
    }
    solution(arr);
}
console.groupEnd();
console.group('6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
    function solution(arr) {
        const res = arr.map((_, i) => i).join(' ');
        console.log(res);
    }
    solution(arr);
}
console.groupEnd();
console.group('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...');
{
    function solution(arr) {
        const res = arr.join(' ');
        console.log(res);
    }
    solution(arr);
}
console.groupEnd();
console.group('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17, [1]=>8, [2]=>88 ..
{
    function solution(arr) {
        const res = arr.map((x, i) => `[${i}] => ${x}`).join(', ');
        console.log(res);
    }
    solution(arr);
}
console.groupEnd();
console.group('9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2');
{
    function solution(arr) {
        return arr.map(x => x * 2);
    }
    console.log(arr);
    const result = solution(arr);
    console.log(result);
}
console.groupEnd();
console.group('10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu');
{
    function solution(arr) {
        return arr.map(x => x ** 2);
    }
    console.log(arr);
    const result = solution(arr);
    console.log(result);
}
console.groupEnd();
console.group('11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos');
{
    function solution(arr) {
        return arr.map((x, i) => x * i);
    }
    console.log(arr);
    const result = solution(arr);
    console.log(result);
}
console.groupEnd();
console.group('12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų');
{
    function solution(arr) {
        return arr.filter((x) => x > 0);
    }
    console.log(arr);
    const result = solution(arr);
    console.log(result);
}
console.groupEnd();
console.group('13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų');
{
    function solution(arr) {
        return arr.filter((x) => x <= 0);
    }
    console.log(arr);
    const result = solution(arr);
    console.log(result);
}
console.groupEnd();
console.group('14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų');
{
    function solution(arr) {
        return arr.filter((x) => x % 2 === 0);
    }
    console.log(arr);
    const result = solution(arr);
    console.log(result);
}
console.groupEnd();
console.group('15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų');
{
    function solution(arr) {
        return arr.filter((x) => Math.abs(x) % 2 === 1);
    }
    console.log(arr);
    const result = solution(arr);
    console.log(result);
}
console.groupEnd();
console.group('16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų');
{
    function solution(arr) {
        return arr.map((x) => x < 0 ? x * -1 : x);
    }
    console.log(arr);
    const result = solution(arr);
    console.log(result);
}
console.groupEnd();
