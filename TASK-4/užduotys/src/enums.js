"use strict";
/*
  Enum(išvardinimas) - tai konstantų rinkinys.
  Enum(išvardinimai) yra naudojami įvardinti tipams ar nustatymams.
  Jų reikšmės dažniau naudojamos tipo patikrinimams, nei atvazdavimui.
*/
// Skaitiniai išvardinimai (numeric enums)
// Nurodžius pirmajai konstantai reikšmę, sekančios susinumeruoja pradedant nurodyta reikšme
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Monday"] = 1] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 2] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 3] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 4] = "Thursday";
    WeekDays[WeekDays["Friday"] = 5] = "Friday";
    WeekDays[WeekDays["Saturday"] = 6] = "Saturday";
    WeekDays[WeekDays["Sunday"] = 7] = "Sunday";
})(WeekDays || (WeekDays = {}));
;
// Jei nenurodote pirmosios reikšmės, numeruojama nuo 0
var Answer;
(function (Answer) {
    Answer[Answer["No"] = 0] = "No";
    Answer[Answer["Yes"] = 1] = "Yes";
})(Answer || (Answer = {}));
;
// Jei išvardinamų konstantų tipas yra ne skaičius, privalote įvardinti kiekvieną narį
var WeekDayNamesLT;
(function (WeekDayNamesLT) {
    WeekDayNamesLT["Monday"] = "pirmadienis";
    WeekDayNamesLT["Tuesday"] = "antradienis";
    WeekDayNamesLT["Wednesday"] = "tre\u010Diadienis";
    WeekDayNamesLT["Thursday"] = "ketvirtadienis";
    WeekDayNamesLT["Friday"] = "penktadienis";
    WeekDayNamesLT["Saturday"] = "\u0161e\u0161tadienis";
    WeekDayNamesLT["Sunday"] = "sekmadienis";
})(WeekDayNamesLT || (WeekDayNamesLT = {}));
;
// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Literal types - užduotys');
{
    // ↓↓↓↓ Tipus ir užduotims bendrus kintamuosius aprašykite čia ↓↓↓↓
    let Cities;
    (function (Cities) {
        Cities["Kaunas"] = "Kaunas";
        Cities["Vilnius"] = "Vilnius";
        Cities["Klaipeda"] = "Klaipeda";
        Cities["Siauliai"] = "Siauliai";
        Cities["Panevezys"] = "Panevezys";
    })(Cities || (Cities = {}));
    ;
    let Countries;
    (function (Countries) {
        Countries[Countries["China"] = 0] = "China";
        Countries[Countries["India"] = 1] = "India";
        Countries[Countries["UnitedStates"] = 2] = "UnitedStates";
        Countries[Countries["Indonesia"] = 3] = "Indonesia";
        Countries[Countries["Pakistan"] = 4] = "Pakistan";
    })(Countries || (Countries = {}));
    ;
    let StrongestEconomies;
    (function (StrongestEconomies) {
        StrongestEconomies[StrongestEconomies["UnitedStates"] = 1] = "UnitedStates";
        StrongestEconomies[StrongestEconomies["China"] = 2] = "China";
        StrongestEconomies[StrongestEconomies["Japan"] = 3] = "Japan";
        StrongestEconomies[StrongestEconomies["Germany"] = 4] = "Germany";
        StrongestEconomies[StrongestEconomies["UnitedKingdom"] = 5] = "UnitedKingdom";
    })(StrongestEconomies || (StrongestEconomies = {}));
    // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius aprašykite čia ↑↑↑↑
    console.group("1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.");
    {
        const city = Cities.Klaipeda;
        console.log(city);
    }
    console.groupEnd();
    console.group('2. Sukurkite 5 šalių su didžiausiu gyventojų skaičiumi skaitinį išvardinimą.');
    {
        const countrie1 = Countries.China;
        const countrie2 = Countries.UnitedStates;
        console.log(countrie1, countrie2);
    }
    console.groupEnd();
    console.group('3. Sukurkite 5 šalių su didžiausiu BVP skaitinį išvardinimą pradedant "1".');
    {
        const strongestEconomies = StrongestEconomies.Japan;
        console.log(strongestEconomies);
    }
    console.groupEnd();
}
console.groupEnd();
