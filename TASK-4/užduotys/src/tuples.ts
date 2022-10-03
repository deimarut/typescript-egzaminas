/*
  Tuple(rinkinys) - tai masyvas su greižtai nurodytais masyvo elemento tipais ir jų seka.
  Šis tipas neleidžia turėti kitokį kiekį, ar kitokio tipo elementų
*/
type FullnameTuple = [string, string];
type UseNumericStateTuple = [number, (num?: number) => void];

// const person1: FullnameTuple = ["Koridas", "Atmazas"];
// const person2: FullnameTuple = ["Paklodijus", "Pagalvė"];
// const person3: FullnameTuple = ["Višta", "Maumedienė"];

let currentAge: number = 18;
let currentHeight: number = 180;
const age: UseNumericStateTuple = [currentAge, () => currentAge += 1];
const height: UseNumericStateTuple = [currentAge, (h) => {
  if (h) currentHeight = h;
}];

// Alikite užduotis, ir atspausdinkite konsolėje savo sprendimo pavyzdžius užduoties bloke
console.group('Tuples - užduotys');
{
  // ↓↓↓↓ Tipus apraškite čia ↓↓↓↓

  type Human = [string, number];

  type Owner = {
    name: string,
    age: number
  };

  type Dog = {
    name: string,
    age: number,
    breed: string
  };

  type DogOwner = [Owner, Dog];

  type PointTuple = [number, number];
  type TriangleTuple = [PointTuple, PointTuple, PointTuple];

  // ↑↑↑↑ Tipus apraškite čia ↑↑↑↑

  console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
  {
    const human: Human = ['Deimantė', 25];
    console.log(human);
  }
  console.groupEnd();

  console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
  {
    const DogOwner: DogOwner = [{
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
    const triangle1: TriangleTuple = [[-2, 1], [2, 2], [3, 1]];
    const rightTriangle: TriangleTuple = [[0, 0], [4, 0], [4, 3]];

    console.log({triangle1, rightTriangle});
  }
  console.groupEnd();

}
console.groupEnd();