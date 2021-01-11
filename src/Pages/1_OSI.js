import React from 'react';

function Osi() {
  return (
    <div className="OSI">
      <h1>1.OSI, TCP/IP modeļi.</h1>
      <p dir="ltr" id="docs-internal-guid-424052f6-7fff-80a8-664d-a6022adb351a">
    Ieguvumi izmantojot slāņotu modeli, lai aprakstītu tīkla protokolus un
    operācijas, iekļauj:
  </p>
  <ul>
    <li dir="ltr">
      <p dir="ltr">
        Palīdzība protokolu dizainā, jo protokoliem, kas darbojas
        specifiskā slāni, ir definēta informācija, kuru viņi izmanto un
        definēta saskarne slāņiem augstāk un zemāk.
      </p>
    </li>
    <li dir="ltr">
      <p dir="ltr">
        Konkurences veicināšana, jo produkti no dažādiem pārdevējiem strādā
        kopā.
      </p>
    </li>
    <li dir="ltr">
      <p dir="ltr">
        Novērš tehnoloģijas vai spējas izmaiņas vienā slānī no ietekmēšanas
        sļānos lejā un augšā.
      </p>
    </li>
    <li dir="ltr">
      <p dir="ltr">
        Sniedz kopēju valodu, lai aprakstīju tīklošanas funkcijas un
        spējas.
      </p>
    </li>
  </ul>
  <p dir="ltr">
    TCP/IP modelis un OSI modelis ir galvenie modeļi, kas tiek izmantoti, lai
    aprakstītu tīkla funkcionalitāti. Katrs pārstāv slāņota tīklošanas modeļa
    tipu:
  </p>
  <ul>
    <li dir="ltr">
      <p dir="ltr">
        Protokolu modelis – Šis modeļa tips tuvu sakrīt ar struktūru no
        konkrētas protokolu saimes. TCP/IP modelis ir protokolu modelis, jo
        tas apraksta funkcijas, kas notiek katrā protokolu slānī iekš
        TCP/IP protokolu kopuma. TCP/IP ir arī izmantots kā atsauces
        modelis.
      </p>
    </li>
    <li dir="ltr">
      <p dir="ltr">
        Atsauces modelis jeb “Reference model” – Šis modeļa tips nodrošina
        pastāvīgumu starp visiem tīkla protokolu un pakalpojumu(services)
        tipiem, aprakstot, kas ir jādara noteiktā slānī, bet neapraksot kā
        tas ir jādara. OSI modelis ir plaši zināms starptīkla(internetwork)
        atsauces modelis, bet ir arī protokolu modelis OSI protokolu
        kopumam.
      </p>
    </li>
  </ul>
      <h2>OSI modelis</h2>
      <>
  <p dir="ltr" id="docs-internal-guid-df69eb8a-7fff-9031-b34b-8f35bdd0f3aa">
    1984. gadā tika publicēts OSI (Open System Interconnection) modelis, kas
    kategorizēja visus datortīklu procesus un tehnoloģijas 7 līmeņos un
    saskarnēs starp tiem. OSI modelis nodrošina garu sarakstu ar funkcijām un
    pakalpojumiem, kas var notikt katrā slānī. Tas arī apraksta katra slāņa
    mijiedarbību ar slāņiem tieši augšā un apakšā. OSI modelī slāņus mēdz saukt
    pēc to cipariem, piemēram, 7. slānis, lai teiktu lietojuma slānis. Tas ļāva
    datortīklu kompānijām ražot savietojamus tehnoloģiskos risinājumus. OSI
    modelis ir kļuvis par galveno datortīklu saziņas modeli.
  </p>
  <p dir="ltr">
    Septini OSI atsauces modeļa līmeņi(no augšas uz leju):
  </p>
  <ul>
    <li dir="ltr">
      <p dir="ltr">
        7. Lietojuma(Application) – Lietojuma slānis satur protokolus,
        kurus izmanto process-to-process komunikācijā.
      </p>
    </li>
    <li dir="ltr">
      <p dir="ltr">
        6. Prezentācijas(Presentation) – Prezentācijas slānis nodrošina
        datu, kuri pārsūtīti starp lietojuma slāņa pakalpojumiem(services),
        kopēju reprezentāciju.
      </p>
    </li>
    <li dir="ltr">
      <p dir="ltr">
        5. Sesijas(Session) – Sesijas slānis nodrošina pakalpojumus
        prezentācijas slānim, lai organizētu tā dialogu un lai pārvaldītu
        datu apmaiņu.
      </p>
    </li>
    <li dir="ltr">
      <p dir="ltr">
        4. Transporta – Transporta slānis definē pakalpojumus, lai
        segmentētu, pārsūtītu un samontētu datus inviduālām komunikācijām
        starp beigu iekārtām.
      </p>
    </li>
    <li dir="ltr">
      <p dir="ltr">
        3. Tīkla(Network) – Tīkla slānis nodrošina pakalpojumus, lai
        apmainītu inviduālas datu daļas cauri tīklam starp identificētām
        beigu iekārtām.
      </p>
    </li>
    <li dir="ltr">
      <p dir="ltr">
        2. Datu posma(Data link) – Datu posma slāņa protokoli apraksta
        metodes datu rāmju apmaiņai starp ierīcēm caur kopēju vidi.
      </p>
    </li>
    <li dir="ltr">
      <p dir="ltr">
        1. Fiziskais(Physical) – Fiziskā slāņa protokoli apraksta
        mehāniskās, elektriskās, funkcionālās un procedūras vajadzības, lai
        aktivizētu, saglabātu un deaktivizētu fiziskus savienojumus bitu
        pārsūtīšanai uz un no tīkla iekārtu.
      </p>
    </li>
  </ul>
  <p dir="ltr">
    Septiņi OSI modeļa līmeņi ir (no augšas uz leju):
  </p>
  <ul>
    <li dir="ltr">
      <p dir="ltr">
        7. Lietojumu (Application) – tīklu pakalpojumi programmatūrai
      </p>
    </li>
    <li dir="ltr">
      <p dir="ltr">
        6. Prezentācijas (Presentation) – datu pārveidošana un atainošana
      </p>
    </li>
    <li dir="ltr">
      <p dir="ltr">
        5. Sesijas (Session) – sesiju pārvaldība
      </p>
    </li>
    <li dir="ltr">
      <p dir="ltr">
        4. Transporta (Transport) – saziņas integritāte virtuālos slēgumos
      </p>
    </li>
    <li dir="ltr">
      <p dir="ltr">
        3. Tīkla (Network) – loģiskā adresācija, ceļu izvēle
      </p>
    </li>
    <li dir="ltr">
      <p dir="ltr">
        2. Kanāla (Data link) – tiešā savienojuma kontrole, pieeja videi,
        fiziskā adresācija
      </p>
    </li>
    <li dir="ltr">
      <p dir="ltr">
        1. Fiziskais (Physical) – signālu sūtīšana vidē
      </p>
    </li>
  </ul>
  <p dir="ltr">
    Datortīklu sadalīšana līmeņos sniedz sekojošas priekšrocības:
  </p>
  <ul>
    <li dir="ltr">
      <p dir="ltr">
        tā sadala saziņu sīkākās, labāk pārvaldāmās daļās;
      </p>
    </li>
    <li dir="ltr">
      <p dir="ltr">
        tā standartizē tīklu komponentes, lai nodrošinātu vairāku ražotāju
        izstrādi un uzturēšanu;
      </p>
    </li>
    <li dir="ltr">
      <p dir="ltr">
        tā ļauj dažāda veida aparatūrai un programmatūrai sadarboties;
      </p>
    </li>
    <li dir="ltr">
      <p dir="ltr">
        tā novērš izmaiņu vienā līmenī ietekmi uz citiem līmeņiem;
      </p>
    </li>
    <li dir="ltr">
      <p dir="ltr">
        tā sadala datortīklu procesus mazākās daļās, ļaujot vieglāk tos
        saprast.
      </p>
    </li>
  </ul>
</>

        <h2>TCP/IP modelis</h2>
        <p dir="ltr" id="docs-internal-guid-71d14be8-7fff-324f-8b43-fdeb3d1ad709">
    TCP/IP modelis TCP/IP protokola modelis starptīkla(internetwork)
    komunikācijām tika izmantots 1970. gadu sākumā un dažkārt ir saukts par
    Interneta modelo. Tas definē četras funkciju kategorijas, kurām jānotiek,
    lai komunikācija būtu veiksmīga. TCP/IP protocol kopuma arhitektūra seko šī
    modeļa struktūrai. Tādēļ Interneta modelis ir bieži saukts par TCP/IP
    modeli.ASV aizsardzības departaments izveidoja TCP/IP protokolu saimi, jo
    tā vēlējās izveidot tīklu, kas izturētu vissarežģītākās situācijas, pat
    atomkaru. Atšķirībā no daudzām tā laika datortīklu tehnoloģijām, TCP/IP
    bija atvērts standarts. Tas paātrināja tā attīstību.
  </p>
  <p dir="ltr">
    TCP/IP modelis:
  </p>
  <ul>
    <li dir="ltr">
      <p dir="ltr">
        Lietojumu(Application) – Attēlo datus lietotājam, kā arī kontrolē
        kodēšanu un dialogus.
      </p>
    </li>
    <li dir="ltr">
      <p dir="ltr">
        Transporta – Atbalsta komunikāciju starp dažādām iekārtām starp
        daudzveidīgiem tīkliem.
      </p>
    </li>
    <li dir="ltr">
      <p dir="ltr">
        Interneta – Nosaka labāko ceļu cauri tīklam.
      </p>
    </li>
    <li dir="ltr">
      <p dir="ltr">
        Tīkla piekļuves(Network Access) – kontrolē aparatūras ierīces un
        vides, kas veido tīklu.
      </p>
    </li>
  </ul>
  <p dir="ltr">
    OSI modelis ir drīzāk veids, kā raudzīties uz datortīklu procesiem. Bet
    TCP/IP modelis ir strādājoša tīkla reālu protokolu saime. Pie tam TCP/IP
    modelis ir radies krietni ātrāk par OSI modeli.
  </p>
        <h2>Salīdzinājums</h2>
        <p dir="ltr" id="docs-internal-guid-26a90ed0-7fff-eb5f-f94f-68a03f3391fc">
    Protokoli, kas veido TCP/IP protokolu saimi, var arī būt aprakstīti ar OSI
    atsauces modeli. OSI modelī, TCP/IP modeļa tīkla piekļuves slānis un
    lietojuma slānis ir tālāk sadalīti, lai aprakstītu atsevisķas funkcijas,
    kurām jānotiek šajos slāņos.
  </p>
  <p dir="ltr">
    Tīkla piekļuves slānī, TCP/IP protkolu saime nenorāda kādus protokolus
    izmantot, kad sūta pāri fiziskajai videi; tas tikai apraskta nodošanu no
    interneta slāņa uz fiziskajiem tīkla protkoliem. OSI slāņi 1 un 2 apraksta
    vajadzīgās procedūras, lai piekļūtu videi un fizikālās vajadzības, lai
    sūtītu datus pāri tīklam. OSI 3. slānis, Tīkla slānis, savienojas tieši ar
    TCP/IP Interneta slāni. Šis slānis ir izmantots, lai aprakstītu protokolus,
    kuri adresē un maršrutē ziņas cauri starptīklam. OSI 4. slānis, transporta
    slānis, savienojas tieši ar TCP/IP Transporta slāni. Šis slānis apraksta
    vispārīgos pakalpojumus un funkcijas, kuras nodrošina pasūtīto un uzticamo
    datu piegādi starp avota un galamērķa hostiem. TCP/IP lietojuma slānis
    iekļauj daudzus protokolus, kas nodrošina specifisku funkicionalitāti
    dažādām beigu lietotāja lietotnēm. OSI modeļa slāņi 5, 6, un 7 ir izmantoti
    kā atsauces lietojuma programmatūras izveidotājiem un pārdevējiem, kas ražo
    produktus, kas strādā tīklos. Gan TCP/IP, gan OSI modeļi ir bieži
    izmantoti, lai atsauktos uz protokoliem dažādos slāņos. Tādēļ, ka OSI
    modelis atdala datu posma slāni no fiziskā slāņa, tas tiek bieži izmantots,
    lai atsauktos uz apakšējiem slāņiem.
  </p>
  <p dir="ltr">
    Līdzīgākais šiem modeļiem ir transporta un tīkla slāņi, bet abi modeļi
    atšķiras ar to kā tie attiecas uz slāņiem zem un virs tiem.
  </p>
  </div>
  );
}

export default Osi;
