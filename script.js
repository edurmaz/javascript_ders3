// CONDİTİONAL (ŞARTLILAR, KOŞULLAR)
// Koşullar birer karar yapılarıdır. Şarta bağlı bir komutu yerine getirmek istiyorsak kullanılır.
// **Not olarak koşul ifadeleri boolean tiplerde çalışır.**

// if (condition) {         // if koşulundaki değer sağlanıyorsa içine girer
//     console.log("mesaj") // değeri sağlıyorsa mesajı yazdırır.
// }

/*----------- if else koşulu------------------ */
let raining = true;
if (raining) {
    console.log("şemsiyeni al")
}

let a = 4;
let b = 6;
let c = 7;

if (a > b) {
    console.log(`${a} ${b} den büyüktür.`)
}

if (a > b && b === c) {
    console.log(`${a} ${b} den büyüktür.`)
} else {                                          //if koşuluna uymayan koşulu else ile sağlarız.
    console.log(`${a} ${b} den büyük değil.`)

}

if (a > 18) {
    console.log("dışarı çıkabilir.")
} else {
    console.log("dışarı çıkamaz")
}

if (a > 12 && a < 18) {
    console.log("izinli dışarı çıkabilir")
} else if (a >= 18) {                             //else if koşulu 2. koşul olarak yazmak için kullanılır.
    console.log("Dışarı çıkabilir")
} else {
    console.log("dışarı çıkamaz")
}


let mantarZehir = true;
if (mantarZehir) {             //iç içe if'ler ve iç içe else if'ler kullanabiliyoruz.
    if (a < 6 && a > 65) {
        console.log("yoğun bakım")
    } else {
        console.log("ayakta tedavi")
    }
} else {
    console.log("afiyet olsun")
}

/*-----örnek-------*/
let name1 = prompt("adınız")
let name2 = prompt("şifreniz")
if (name1 === "emre" && name2 === "1234") {
    console.log("giriş yapıldı")
} else {
    console.log("isminiz veya şifreniz yanlış")
}

/*Truthy ve Falsy değerleri */

let rain = true;
rain = false;
rain = 0;           // Bunlar falsy değerler.
rain = null;
rain = NaN;
rain = undefined;
rain = ""; //boş string


rain = "aa"            // boş olmayan string
rain = Infinity;     // Bunlar Truthy değerler..
rain = 99           // Number değer

if (rain) {
    console.log("şemsiyeni al")
} else {
    console.log("rain yok.")
}


let x = 0;
if (x > 0) {     // if içine her zaman console.log yazmaya gerek yok.
    x--;
} else {
    x++
}
console.log(x)


/*--------Switch Case Koşulu------------*/
// if else koşuluna benzemektedir. if den farklı olarak değerin true olması değil aşağıdaki keyslerle örtüşmesi gerekiyor..

let weekDay = prompt("Gün giriniz").toLowerCase();


switch (weekDay) {
    case "pazartesi":
        console.log(`Bugün günlerden ${weekDay}, yemek menüsü...`)
        break;
    case "salı":
        console.log(`Bugün günlerden ${weekDay}, yemek menüsü...`)
        break;
    case "çarşamba":
        console.log(`Bugün günlerden ${weekDay}, yemek menüsü...`)
        break;
    case "perşembe":
        console.log(`Bugün günlerden ${weekDay}, yemek menüsü...`)
        break;
    case "cuma":
        console.log(`Bugün günlerden ${weekDay}, yemek menüsü...`)
        break;

    default: console.log("Yanlış değer girdiniz.")
        break;
}

let m = 5;
let n = 5;
switch (m > n) {  // koşulu anahtar olarak kullanabiliyoruz..
    case true:
        console.log("m n den büyük")
        break;

    default:
        console.log("m n den küçük")
        break;
}

switch (true) {   // şart sağlanıyorsa case lerdeki koşul geçerli olur.
    case m > n:
        console.log("m n den büyük")
        break;
    case m < n:
        console.log("n m den büyük")
        break;

    default: console.log("eşitler")
        break;
}

let hava = "yagmurlu";
switch (hava) {                     // Key aşağıdaki case'lerden birisiyle örtüşmesi durumunda keys'in içersindeki seçenek çalışır.
    case "yagmurlu":                // bunlar console.log, variable olabilir.
        console.log(hava)
        break;
    case "karlı":
        console.log(hava)
        break;
    case "güneşli":
        console.log(hava)
        break;


    default: console.log("default")
        break;
}

/*--------------Ternary Operatörü---------------*/

let isNight = true;
if (isNight) {
    console.log("Dişlerini fırçala")
} else {
    console.log("çalışmaya devam")
}
isNight ? console.log("Dişlerini fırçala") : console.log("çalışmaya devam"); //Ternary if else operatörünün bir varyantı.

let time1 = 7;        // şablonu bu şekilde.
let mesaj1 = "";
time1 > 17 ? mesaj1 = "mesai bitti" : mesaj1 = "mesai devam";
console.log(mesaj1)



let time = 7;        // aşağıdaki gibi iç içe koşullar verebiliyoruz. else if gibi düşünebiliriz eğer : koymazsak hata verir.
let mesaj = "";
time > 17 ? mesaj = "mesai bitti" : time >= 12 && time <= 13 ? mesaj = "öğlen arası" : time < 8 ? mesaj = "mesai başlamadı" : mesaj = "mesai devam";
console.log(mesaj)

let mesaj2 = time > 8 ? "mesai başladı" : "mesai başlamadı";  // Bu şekilde de yapabiliyoruz.
console.log(mesaj2);