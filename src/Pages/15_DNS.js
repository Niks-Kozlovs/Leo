import React from 'react';

function Osi() {
  return (
    <div className="DNS">
      <h1>15.DNS sistēma.</h1>
      <p dir="ltr" id="docs-internal-guid-7a6bf2b9-7fff-0f2e-e991-53493ed6b505">
          Datu tīklos sistēmas ir apzīmēts ar cipariskām ip adresēm, lai saņemtu un
          sūtītu datus caur tīklu.Domainu vārdi tika izveidoti, lai konvertētu
          adreses vienkāršos vārdos. Šādi nosaukumi cilvekiem ir vieglāk iegaumējami.
          DNS ir liela datubāze, kas sadalīta mazās daļās, katra datubāze atbild
          tikai par savu daļu, ja serveris saņem pieprasījumu kas nav zonā tas to
          padod tālāk.
        </p>
        <p dir="ltr">
          DNS (Domain Name System) ir sistēma, kas ļauj izmantot datoru adresēšanai
          vārdus, nevis IP adreses. Tā ir sadalīta datubāze, kas satur informāciju
          par visiem Internetā reģistrētajiem domēnu vārdiem un tiem atbilstošajām IP
          adresēm. Kad lietotājs vēlas atvērt kādu Tīmekļa lapu pēc tās domēna vārda,
          pārlūkprogramma pirmkārt noskaidro, kāda IP adrese ir šim serverim. To dara
          ar DNS pieprasījumu datorā noteiktajam DNS serverim. Parasti tas ir lokālā
          tīkla vai Internet pakalpojumu sniedzēja DNS serveris. Tas iegūst atbildi
          no savas datubāzes daļas vai no cita DNS servera un nodod rezultātu
          lietotājam. Tikai pēc tam lietotāja dators var sākt sūtīt pieprasījumu
          serverim uz tā IP adresi. DNS sistēmā ir reģistrēti daudzi augšējā līmeņa
          domēni: .com, .edu, .net, .org, .gov, valstu domēni (piemēram, .lv, .lt,
          .ee), u.c. DNS. Pieprasījumi un atbildes balstās uz UDP protokola.
        </p>
    </div>
  );
}

export default Osi;
