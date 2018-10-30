/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;
// tala sem segir til um hve marga leiki sé búið að spila
var fjoldi_leikja = 0;
// tala sem segir til um hve mörg rétt svör eru komin
var rett_svor = 0;
/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
    alert("Ýttu á OK takkann ef þú vilt reyna að svara 10 einföldum stærðfræðispurningum")
    play();
    var r = confirm("Má bjóða þér að spila aftur?");
    if(r == true) {
        rett_svor = 0;
        fjoldi_leikja = 0;
        start();
    }
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {
    var t0 = performance.now();
    do {
        ask();
    } while(fjoldi_leikja < GAMES_TO_PLAY);
    var t1 = performance.now();
    var rettur_timi = ((t1 - t0)*0.001).toFixed(2);
    var medaltal = rett_svor/rettur_timi;
    alert("Þú svaraðir " + rett_svor + " af 10 dæmum rétt á " + rettur_timi + " sekúndum\nMeðalrétt svör á sekúndu eru "
         +medaltal.toFixed(2)) + " sekúndum";
}

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() {
    var a = randomNumber(0,3);
    switch(a) {
        case 0:
            spurning_plus();
            break;
        case 1:
            spurning_minus();
            break;
        case 2:
            spurning_margfoldun();
            break;
        case 3:
            spurning_deilun();
            break;
    }  
}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function spurning_plus() {
    fjoldi_leikja++;
    var fyrri_tala = randomNumber(1,100);
    var seinni_tala = randomNumber(1,100);
    var number = prompt("Hvað er " + fyrri_tala + "+" + seinni_tala + "?");
    if(number == fyrri_tala + seinni_tala){
        rett_svor++;
    } 
}

function spurning_minus() {
    fjoldi_leikja++;
    var fyrri_tala = randomNumber(1,100);
    var seinni_tala = randomNumber(1,100);
    var number = prompt("Hvað er " + fyrri_tala + "-" + seinni_tala + "?");
    if(number == fyrri_tala - seinni_tala){
        rett_svor++;
    }
}

function spurning_margfoldun() {
    fjoldi_leikja++;
    var fyrri_tala = randomNumber(1,10);
    var seinni_tala = randomNumber(1,10);
    var number = prompt("Hvað er " + fyrri_tala + "*" + seinni_tala + "?");
    if(number == fyrri_tala * seinni_tala){
        rett_svor++;
    }
}

function spurning_deilun() {
    fjoldi_leikja++;
    var seinni_tala = randomNumber(2,10);
    var fyrri_tala = seinni_tala*randomNumber(2,10);
    var number = prompt("Hvað er " + fyrri_tala + "/" + seinni_tala + "?");
    if(number == fyrri_tala / seinni_tala){
        rett_svor++;
    }
}
// Byrjar leik
start();