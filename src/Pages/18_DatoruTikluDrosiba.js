import React from 'react';

function Osi() {
  return (
    <div className="DatoruTikluDrosiba">
      <h1>18.Datoru tīklu drošība.</h1>
      <p>Tīkla drošība sastāv no noteikumiem un politikas kādu ir pieņēmis tīkla administrators lai nepieļautu un pastāvīgi novērotu neautorizētu pieeju, nepareizu lietošanu un nesankcionētu modifikāciju. Drošība sevī ietver datu piekļuvi tīklā, kurš tiek kontrolēts.Mēs dzīvojam digitālā laikmetā, kā rezultātā spiegošanas, krāpšanas un apzagšanas draudi ir atrodami katrā tīklā, nav svarīgi vai publiskā vai privātā. Tīkla drošība nosedz vairumu datortīklu, gan privātu, gan publisku, kuri tiek izmantoti ikdienas darbos,darījumos un komunikācijā starp valsts aģentūrām, biznesiem vai individuālām personām. Tīkla drošība uzrauga un pasargā visas šīs iepriekšminētās darbības. </p>
      <h3>Aizsardzības elementi mājās un mazos uzņēmumos</h3>
      <ul>
      <li>Standarta ugunsmūris vai vienota draudu pārvaldības sistēma</li>
      <li>Windows lietotājiem, standarta antivīrusa programma un kāda anti-spyware programma būtu laba ideja.</li>
    <li>Izmantojot bezvadu savienojumu obligāti izveidot noturīgu paroli. Kā arī nodrošināties ar spēcīgu bezvadu ierīces aizsardzību — piemērām WPA2 ar AES.</li>
    <li>Izmantojot bezvadu savienojumu nomainiet standarta SSID nosaukumu un deaktivizējiet SSID Broadcast.</li>
    <li>Izmantojiet paroles visiem kontiem.</li>
      </ul>
    <h3>Aizsardzības elementi lielos uzņēmumos</h3>
    <ul>
    <li>Spēcīgs ugunsmūris un pārvaldnieks, vai tīkla sargs, lai neļautu piekļuvi nevēlamiem viesiem.</li>
    <li>Vēlama spēcīga Antivīrusa programmu paka un interneta drošības programmatūras paka.</li>
    <li>Autorizēšanai izmantot spēcīgas paroles un mainīt tās ik pāris nedēļas.</li>
    <li>Veicināt kursus darbiniekiem par tīklu drošību un draudiem darba vietā.</li>
    <li>Pēc nepieciešamības ievies video novērošanu ieejas/izejas un liegtas pieejas zonām.</li>
    </ul>
    <p>Draudi dalībnieki bieži mēģina piekļūt ierīcēm internetā, izmantojot saziņas protokolus. Daži no populārākajiem attālajiem izmantojumiem ir šādi:</p>
    <ul>
      <li>Man-In-the-middle uzbrukums (MITM) - draudu dalībnieks nokļūst starp sistēmas ierīcēm un pārtver visus pārraidītos datus. Šo informāciju varētu vienkārši savākt vai pārveidot konkrētam mērķim un nogādāt sākotnējā galamērķī.</li>
      <li>Noklausīšanās uzbrukums - kad tiek instalētas ierīces, draudu dalībnieks var pārtvert tādus datus kā drošības atslēgas, kuras ierobežotas ierīces izmanto sakaru nodibināšanai, tiklīdz tās ir izveidotas un darbojas.</li>
      <li>SQL injekcija (SQLi) - draudu dalībnieki izmanto strukturētās vaicājumu valodas (SQL) kļūdu, kas viņiem ļauj piekļūt datu modificēšanai vai administratīvo privilēģiju iegūšanai.</li>
      <li>Maršrutēšanas uzbrukums - draudu dalībnieks var vai nu ievietot tīklā negodīgu maršrutēšanas ierīci, vai arī modificēt maršrutēšanas paketes, lai manipulētu ar maršrutētājiem, lai visas paketes nosūtītu uz draudu dalībnieka izvēlēto galamērķi. Pēc tam draudu aktieris varēja nomest īpašas paketes, kas pazīstamas kā selektīva pārsūtīšana, vai nomest visas paketes, kas pazīstamas kā izlietnes uzbrukums.</li>
    </ul>
    </div>
  );
}

export default Osi;
