import React from 'react';

function Osi() {
  return (
    <div className="VietneDatortikli">
      <h1>16.Kādas datortīkla plūsmas notiek, atverot Tīmekļa vietni</h1>
      <p dir="ltr" id="docs-internal-guid-3cb600c7-7fff-7926-72b1-0fc12fb9ff75">
          Ja lietotājs ievada URL mājaslapu http://www.page.lv/index.html,
          tad tīmekļa pārlūkprogramma pieprasa DNS serverim, lai pārtulko uz IP
          adresi www.page.lv, kuru izmantos, lai
          pieslēgtos serverim. Izmantojot HTTP prasības, pārlūks sūta GET
          pieprasījumu serverim un prasa index.html failu. Tad…
        </p>
        <p dir="ltr">
          Kādi procesi notiek, kad tīmekļa serveris sūta datus klientam?
        </p>
        <ol>
          <li dir="ltr">
            <p dir="ltr">
              Tīmekļa serveris sagatavo Hypertext Markup Language (HTML) lapu kā
              datus, kurus vajag sūtīt.
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              Lietojumu protokola(application protocol) HTTP galvene ir
              pievienota HTML datu priekšā. Galvene(header) satur dažādu
              informāciju, ieskaitot HTTP versiju, kuru izmanto serveris un
              statusa kodu, kurš norāda, ka tam ir informācija tīmekļa klientam.
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              HTTP lietojuma slāņa protokols piegādā HTML-formatētas tīmekļa
              lapas datus uz transporta slāni. TCP transporta slāņa protokols ir
              izmantots, lai pārvaldītu inviduālas sarunas(piemēram, starp
              tīmekļa serveri un tīmekļa klientu).
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              Tad IP informācija ir pievienota priekšā TCP informācijai. IP
              pieškir atbilstošas avota un galamērķa IP adreses. Šī informācija
              ir zināma kā IP pakete.
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              Ethernet protokols pievieno informāciju abos galos IP paketei,
              pazīstams kā (data link frame). Šis rāmis ir piegādāts tuvākajam
              rūterim līdzi ceļam uz tīmekļa klientu. Šis rūteris noņem Ethernet
              informāciju, analizē IP paketi, nosaka labāko ceļu paketei, ievieto
              paketi jaunā rāmī, un sūta to uz nākamo kaimiņrūteri tuvāk
              galamērķim. Katrs rūteris noņem un pievieno jaunu (data link)
              informāciju pirms paketes nosūtīšanas tālāk.
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              Šie dati tagad ir transportēti caur starptīklu(internetwork), kurš
              sastāv no vidēm (media) un starpiekārtām(intermediary devices).
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              Kad klients saņem(data link) rāmjus, kuri satur datus, katra
              protokola galvene ir apstrādāta un tad noņemta pretējā secībā kā
              tika pievienota. Ethernet informācija ir apstrādāta un noņemta, tad
              IP protokola informācija, TCP informācija, un beidzot HTTP
              informācija.
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              Tad tīmekļa lapas informācija ir padota klienta tīmekļa pārlūka
              programmatūrai, kura to pārveido mums saprotamā izskatā.
            </p>
          </li>
        </ol>
        <p dir="ltr">
          Kad lietotājs liek kādai programmai sūtīt informāciju cita datora
          programmai (piemēram, parlūkprogramma pieprasa Tīmekļa lapu attālam
          serverim), informācija sāk savu ceļu no lietojumu līmeņa. Programma var
          veikt kādas darbības un nodot informāciju tālāk prezentācijas līmenim. Tajā
          informāciju apstrādā iepriekš zināmā veidā (konvertēšana, šifrēšana,
          kompresēšana, vai citi) un dot tālāk sesijas līmenim. Tā informācija tiek
          padota uz katru nākamo līmeni virzienā uz leju, katrā līmenī veicot
          attiecīgo informācijas apstrādi, līdz kamēr nonāk līdz fiziskajam līmenim,
          kurā biti tiek sūtīti projām kā signāli konkrētajā vidē. Šo informācijas
          virzīšanas procesu no augšas uz leju mēdz saukt par iekapsulēšanu. Kad
          signālu plūsma ir nonākusi līdz saņēmēja datoram, to virza pa līmeņiem uz
          augšu, līdz kamēr sasniedz lietojumu līmeni, kurā attiecīgā programma saņem
          sākotnējo pieprasījumu. Šo procesu, savukārt, sauc par dekapsulēšanu.
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
