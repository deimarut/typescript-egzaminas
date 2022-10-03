/* eslint-disable no-empty */
/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */

/*
  Užduočių atlikimo eiga:
  * Pirmiausiai perskaitykite visą užduotį:

  * Klauskite dėstytojo užduoties paaiškinimo, jeigu užduotis nėra aiški.

  * Galvoje susidarytkite sprendimo planą:
    * Kaip atliksiu užduotį? Galbūt verta pasibraižyti sprendimo idėją ant lapelio?
    * Kokių tipų reikės? Parametrų tipai, rezultatų tipai, funkcijų tipai.
    * Kaip aiškiai ir tvarkingai pateiksiu rezultatus?

  * Bandykite atlikti užduotį:
    * Pavyko:
      * Atspausdinkite rezultatus ir/arba veikimo pavyzdžius
      * Pabandykite patobulinti savo kodą:
        * pabandykite aiškiau aprašyti kintamųjų/tipų pavadinimus
        * sužiūrėkite ar tikrai naudojate vieningą sintaksę
      * Palyginkite savo sprendimą su užuočių atsakymų failu.
      * Suformuokite klausimus dėstytojui, pagal sprendimų skirtumus
    * Nepavyko:
      * pažiūrėkite atsakymų failą ir PO VIENĄ EILUTĘ nusirašykite sprendimą
      * rašant kiekvieną eilutę smulkmeniškai suformuokite klausimus.

    * Spręskite kitus uždavinius, o kai dėstytojas aiškins užduoties sprendimą, klausykitės
      * Po dėstytojo sprendimo ir aiškinimo užduokite klausimus, kurių vis dar nesuprantate.

  Patarimai:
    * Paspauskite komandą: ALT + Z - tai padės lengviau skaityti užduočių tekstą
    * Nežiūrėkite į atsakymų failus anksčiau laiko.
      jūsų tikslas lavinti inžinerinį mąstymą, o ne atlikti užduotis.
    * Nesedėkite prie kompiuterio ilgiau nei 1 val iš eilės, darykite pertraukas po 10 min
    * Klauskite visko ko nesuprantate. Neklausdami eikvojat savo laiką, kurį šie kursai taupo.
      Gerbiat savo laiką - gerbiat save.
    * Kodo tvarka ir aiškumas tiek pat svarbūs kiek funkcionalumas. Išmoksite tai dabar,
      arba kuomet negausite darbo dėl netvarkingo kodo.
    * Atlikę užduotį, užduokite sau klausimą: "Ar tai geriausia ką galėjau?"
    * Įsigilinimas jūsų žinias iš supratimo perkelia į suvokimą. Tik suvokiant dalykus, galite
      žinias pritaikyti kūrybiškai. Iš to seka, kad užduoties atlikimo kokybė >>> užduočių kiekis
    * Užduočių rezultatų pateikimas tike pat svarbus, kiek sprendimas.
*/
type Person = {
  readonly name: string,
  readonly surname: string,
  readonly sex: 'male' | 'female',
  age: number,
  income?: number,
  married?: boolean,
  hasCar?: boolean,
}

const people: Person[] = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true,
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true,
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true,
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
  },
];

/*
  Šių užduočių tikslas ne tik išspręsti užduotis, bet išmokti kurti tipus pagal jau esančius tipus
  Pirmos 2 užduotys pateikiamos kaip pavyzdžiai kaip turėtų būt sprendžiami uždaviniai:
    * Aprašome tipus
    * Aprašome funkcijas
    * (jeigu reikia aprašome naujus kintamuosius reikalingus sprendimui)
    * Atliekame užduoties sprendimą
    * Spausdiname sprendimo rezultatus
  
  Visas funkcijas ir kintamuosius reikia aprašyti tipais (net jei to ir nereikalauja TS compiler'is)
    
*/
console.groupCollapsed('1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą');
{
  // Tipai:
  type Identity = {
    name: Person["name"],
    surname: Person["surname"],
  }

  // Funkcijos:
  const personToIdentity = ({ name, surname }: Person): Identity => {
    return { name, surname };
  }

  // Sprendimas:
  const identities: Identity[] = people.map(personToIdentity);

  // Spausdinimas:
  console.table(people);
  console.table(identities);
}
console.groupEnd();

console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
{
  type TaskProps = Pick<Required<Person>, "hasCar" | "married">;

  const selectTaskProps = ({ married, hasCar }: Person): TaskProps => ({
    married: Boolean(married),
    hasCar: Boolean(hasCar),
  });

  const result: TaskProps[] = people.map(selectTaskProps);

  console.table(people);
  console.table(result);
}
console.groupEnd();

console.groupCollapsed('3. Sukurkite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  type TaskProps = {
    name: Person["name"],
    surname: Person["surname"],
    sex: Person["sex"],
  }

  const selectTaskProps = ({ name, surname, sex }: Person): TaskProps => ({
    name, surname, sex
  });

  const result: TaskProps[] = people.map(selectTaskProps);

  console.table(people);
  console.table(result);
}
console.groupEnd();

console.groupCollapsed('4. Suformuokite visų vyrų masyvą');
{
  type Male = Omit<Person, 'sex'> & {
    sex: 'male',
  }

  const isMale = ({ sex }: Person): boolean => sex === 'male';

  const males: Male[] = people.filter(isMale) as Male[];

  console.table(people);
  console.table(males);
}
console.groupEnd();

console.groupCollapsed('5. Suformuokite visų moterų masyvą');
{
  type Female = Omit<Person, 'sex'> & {
    sex: 'female',
  }

  const isFemale = ({ sex }: Person): boolean => sex === 'female';

  const females: Female[] = people.filter(isFemale) as Female[];

  console.table(people);
  console.table(females);
}
console.groupEnd();

console.groupCollapsed('6. Suformuokite objektų masyvą su žmonių vardais ir pavardėm, kurie turi mašinas');
{
  type Identity = {
    name: Person["name"],
    surname: Person["surname"],
  }

  const personHasCar = ({ hasCar }: Person): boolean => Boolean(hasCar);

  const createIdentity = ({ name, surname }: Person): Identity => ({ name, surname });

  const identityReducer = (result: Identity[], { hasCar, name, surname }: Person): Identity[] => {
    if (hasCar) result.push({ name, surname })
    return result;
  }

  const peopleWithCars: Person[] = people.filter(personHasCar);
  const indentities: Identity[] = peopleWithCars.map(createIdentity);
  const identitiess2: Identity[] = people.reduce(identityReducer, []);

  console.table(people);
  console.table(indentities);
  console.table(identitiess2);
}
console.groupEnd();

console.groupCollapsed('7. Suformuokite objektų masyvą iš žmonių kurie yra susituokę');
{
  type MarriedPerson = Omit<Person, "married"> & {
    married: true
  };

  const marriedReducer = (result: MarriedPerson[], person: Person): MarriedPerson[] => {
    if (person.married) result.push(person as MarriedPerson);

    return result;
  }

  const marriedPeople: MarriedPerson[] = people.reduce(marriedReducer, []);

  console.table(people);
  console.table(marriedPeople);
}
console.groupEnd();

console.groupCollapsed('8. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
/*
  {
    male: 7,
    female: 8
  }
*/
{
  type CarOwnerCountBySex = {
    [Key in Person["sex"]]?: number
  }

  const groupCarOwnersBySexReducer = (result: CarOwnerCountBySex, person: Person): CarOwnerCountBySex => {
    if (!person.hasCar) return result;

    if (!result[person.sex]) result[person.sex] = 0;

    result[person.sex] = result[person.sex] as number + 1;

    return result;
  };

  const groupedPeopleBySex: CarOwnerCountBySex = people.reduce(groupCarOwnersBySexReducer, {});

  console.table(people);
  console.log(groupedPeopleBySex);
}
console.groupEnd();

console.groupCollapsed('9. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  type PersonBritish = Omit<Person, 'income'> & {
    salary?: Person['income']
  }

  const convertToBritish = ({ income, ...person }: Person): PersonBritish => {
    const result: PersonBritish = { ...person };

    if (income) result.salary = income;

    return result;
  }

  const britishPeople: PersonBritish[] = people.map(convertToBritish);

  console.table(people);
  console.table(britishPeople);

}
console.groupEnd();

console.groupCollapsed('10. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
  type AnonymousPerson = Omit<Person, 'name' | 'surname' | 'sex'>;

  const createAnonymous = ({ name, surname, sex, ...anonPerson }: Person): AnonymousPerson => anonPerson;

  const anonymousPeople: AnonymousPerson[] = people.map(createAnonymous);

  console.table(people);
  console.table(anonymousPeople);

}
console.groupEnd();

console.groupCollapsed('11. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  type FullnamePerson = Omit<Person, 'name' | 'surname'> & {
    readonly fullname: string,
  }

  const createFullnamePerson = ({ name, surname, ...rest }: Person): FullnamePerson => ({
    ...rest,
    fullname: name + ' ' + surname
  })

  const fullnamePeople: FullnamePerson[] = people.map(createFullnamePerson);

  console.table(people);
  console.table(fullnamePeople);
}
console.groupEnd();