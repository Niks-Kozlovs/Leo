import React from 'react';

function Osi() {
  return (
    <div className="EnkDek">
      <h1>14.Enkapsulācijas/dekapsulācijas procesi</h1>
      <p dir="ltr" id="docs-internal-guid-d7c4564b-7fff-711b-b796-4a7ba8fb033d">
          Datu enkapsulācija ir process kurā dati nonāk no augstākie sļāņiem OSI
          modelī uz zemākiem, katrā slānī tiek pievienota protokolu informācija. Kad
          ta ir nonākusi līdz zemākajam slānim, tad tā ir beidzot gatava sūtīšanai.
          Kad tā sasniedz Tīkla piekļuves slāni pēc TCP/IP modeļa headeris jeb
          galvene tiek izveidota un mac adrese tiek pievienota. Tad tā ir saucama par
          frame jeb rāmi. Tieši tāpat katrā slānī tiek pievienoti protokolu dati.
          Dekapsulācija ir pretējais process ir datu izņemšana no rāmja
        </p>
        <p dir="ltr">
          Datu enkapsulācija nodrošina trīs primāras funkcijas:
        </p>
        <ul>
          <li dir="ltr">
            <p dir="ltr">
              Frame delimiting(rāmju noteikšana/atpazīšana);
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              Adresēšanu;
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              Kļūdu noteikšanu.
            </p>
          </li>
        </ul>
        <p dir="ltr">
          Datu enkapsulācijas process iekļauj frame salikšanu pirms pārsūtīšanas kā
          arī tā pārsēšanu, kad tas tiek saņemts. Frame veidošanas procesā MAC slānis
          pievieno headeri un traileri 3. līmeņa PDU. Frame lietošana palīdz bitu
          pārsūtīšanas procesā, kad tie tiek ievietoti pārsūtīšanas vidē, kā arī bitu
          grupēšanā tur, kur biti tiek saņemti. "Freimošanas process" nodrošina
          svarīgus atdalītājus, kas tiek izmantoti, lai identificētu bitu grupu, kas
          veido "freimu". Šis process nodrošina sinhronizāciju starp sūtītāj un
          saņēmēj ierīcēm.
        </p>
        <p dir="ltr">
          Vēl enkapsulācija nodrošina Data Link slāņa adresēšanu. Katrs Ethernet
          "headeris", kas pievienots "freimam" satur fizisko adresi(MAC adresi), kas
          ļauj "freimu" nogādāt gala ierīcei.
        </p>
        <p dir="ltr">
          Papildus funkcija datu enkapsulācijai ir kļūdu noteikšana. Katrs Ethernet
          "freims" satur "treileri" (trailer - asti) ar cyclic redundancy check (CRC)
          ar rāmja saturu. Kad "freims ir saņemts", saņēmējierīce uzģenerē savu CRC
          un salīdzina ar to, kas ir saņemts. Ja šīs vērtības sakrīt, tad var
          uzskatīt, ka "freims" ir saņemts bez kļūdām.
        </p>
        <p dir="ltr">
          Kad signālu plūsma ir nonākusi līdz saņēmēja datoram, to virza pa līmeņiem
          uz augšu, līdz kamēr sasniedz lietojumu līmeni, kurā attiecīgā programma
          saņem sākotnējo pieprasījumu. Šo procesu, savukārt, sauc par dekapsulēšanu.
          Iekapsulēšanas procesā informācija tiek dalīta aizvien sīkākās daļās un
          apaudzēta ar papildus dienesta informāciju. Dekapsulēšanas gaitā, savukārt
          informācijas fragmentiem ņem nost papildus informāciju un savieno tos kopā,
          lai iegūtu katram nākamajam līmenim paredzētu atjaunotu informāciju līdz
          pašās beigās nonāk līdz derīgajai informācijai.
        </p>
    </div>
  );
}

export default Osi;
