"use strict";
// const person1: FullnameTuple = ["Koridas", "Atmazas"];
// const person2: FullnameTuple = ["Paklodijus", "Pagalvė"];
// const person3: FullnameTuple = ["Višta", "Maumedienė"];
let currentAge = 18;
let currentHeight = 180;
const age = [currentAge, () => currentAge += 1];
const height = [currentAge, (h) => {
        if (h)
            currentHeight = h;
    }];
// Alikite užduotis, ir atspausdinkite konsolėje savo sprendimo pavyzdžius užduoties bloke
console.group('Tuples - užduotys');
{
    // ↑↑↑↑ Tipus apraškite čia ↑↑↑↑
    console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
    {
        const human = ['Deimantė', 25];
        console.log(human);
    }
    console.groupEnd();
    console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
    {
        const DogOwner = [{
                name: 'Deimantė',
                age: 25
            }, {
                name: 'Mika',
                age: 2,
                breed: 'Labrador'
            }];
        console.log(DogOwner);
    }
    console.groupEnd();
    console.group('3. Sukurkite trikampio taškų 2D erdvėje rinkinį(pradžioje teks sukurti 2D Taško tipą)');
    {
        const triangle1 = [[-2, 1], [2, 2], [3, 1]];
        const rightTriangle = [[0, 0], [4, 0], [4, 3]];
        console.log({ triangle1, rightTriangle });
    }
    console.groupEnd();
}
console.groupEnd();
