"use strict";
/*
  Assertion(Teigimas) - tai papildoma direktyva tiksliau aprašyti tipui, kuomet programuotojui žinoma daugiau
  informacijos nei gali žinoti TypeScript transpiliatorius.

  Įmanoma 'teigti' tik tuos tipus, kurie priklauso potencialių tipų aibei
*/
const someNumber = 17;
const title = "Grace";
// // Šiuo atveju 'teigiame' kad rastas elementas bus būtent form'os elementas.
// const formAddUser: HTMLFormElement = document.querySelector('#form-add-user') as HTMLFormElement;
// formAddUser.onsubmit = (e) => {
//   e.preventDefault();
//   console.log('Ateityje pridėsiu vartotoją');
// };
// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Assertions - užduotys');
{
    const btn = document.querySelector('#button');
    // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius apraškite čia ↑↑↑↑
    console.group('1. Sukurkite HTML mygtuką ir uždėkite jam įvykio klausiklį, jog paspaudus, būt spausdinamas tekstas "paspausta!"');
    {
        const printClick = () => console.log('Mygtukas buvo paspaustas!');
        btn.addEventListener('click', printClick);
    }
    console.groupEnd();
    console.group('2. Sukurkite <div> elementą ir papildikyte jo turinį mažu kvadaratėliu kiekvieną kart, kuomet paspaudžiamas [1.] mygtukas');
    {
        const squareContainer = document.querySelector('#sq-container');
        const addSquare = () => {
            const sq = document.createElement('span');
            sq.className = 'sq';
            squareContainer.append(sq);
        };
        btn.addEventListener('click', addSquare);
    }
    console.groupEnd();
    console.group('3. Sukurkite <p> elementą kuriame spausdinsite skaičių - kiek kvadratėlių yra [2.] konteineryje');
    {
        const countContainer = document.querySelector('#count-container');
        let sqCount = 0;
        const incSqCount = () => {
            sqCount++;
            countContainer.innerHTML = `Kvadratų skaičius: ${sqCount}`;
        };
        btn.addEventListener('click', incSqCount);
    }
    console.groupEnd();
}
console.groupEnd();
