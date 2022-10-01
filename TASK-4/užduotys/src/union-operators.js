"use strict";
/*
  Union operator (Apjungimo operatorius) yra skirtas aprašytis tipus, kurie apjungia kelis kitus tipus
*/
const id1 = '1321354';
const id2 = 17;
const id3 = 47;
const id4 = 'asdasdas';
const id5 = 47;
const id6 = 'sdfsdfdsfsdf';
const id7 = true;
const call = (callee) => {
    if (typeof callee === 'string') {
        console.log('Skambinama:', callee);
    }
    else {
        console.log('Skambinama:', callee.mobile);
    }
};
// Union panaudojimas aprašant masyvus
const data1 = [1, 5, 'burundukas', 8, 'siurprizas', 7];
//  data1 ir data2 tipai yra identiški.
const data2 = [1, 5, 'burundukas', 8, 'siurprizas', 7];
const flags1 = [1, 1, 0, 0, 0, 1, 1];
const flags2 = [true, false, false, true, true];
//  Alikite užduotis, ir atspausdinkite konsolėje savo sprendimo pavyzdžius užduoties bloke
console.group('Union operators - užduotys');
{
    // ↑↑↑↑ Tipus apraškite čia ↑↑↑↑
    console.group('1. Aprašykite objekto tipą Accommodation, kurio savybė "type" būtų, "House" arba "Flat"');
    {
        const accommodation1 = {
            type: 'House'
        };
        console.log(accommodation1);
    }
    console.groupEnd();
    console.group('2. Aprašykite objekto tipą Car, kurio savybė "transmission" būtų, "Automatic" arba "Manual"');
    {
        const car1 = {
            transmission: 'Automatic'
        };
        console.log(car1);
    }
    console.groupEnd();
    console.group('3. Aprašykite tipą, kuris kintamajam leistų būti: arba Accommodation masyvu, arba Car masyvu');
    {
        const both1 = [{
                type: 'House',
            }, {
                type: 'Flat',
            }];
        const both2 = [{
                transmission: 'Automatic'
            }, {
                transmission: 'Manual',
            }];
        console.log(both1, both2);
    }
    console.groupEnd();
}
console.groupEnd();
