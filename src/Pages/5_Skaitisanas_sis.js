import React from 'react';

function Osi() {
  return (
    <div className="SkaitisanasSis">
      <h1>5.Decimālā, binārā un heksadecimālā skaitīšanas sistēmas.</h1>
      <h2>Runāšanas punkti: </h2>
      <ul>
        <li>Kas ir decimālais skaitīšanas sistēma</li>
        <li>Kas ir binārā skaitīšanas sistēma</li>
        <li>Kas ir heksadecimālā skaitīšanas sistēma</li>
        <li>Kā pārtaisīt no vienas skaitīšanas sistēmas uz citu</li>
        <li>Kā pārtaisīt no binārā uz decimālo un otrādi</li>
        <li>Kā pārtaisīt no heksadecimālā uz decimālo un otrādi</li>
      </ul>
      <p dir="ltr" style={{lineHeight: '1.2', textAlign: 'justify', marginTop: '0pt', marginBottom: '0pt'}}><strong>Skaitīšanas sistēma</strong> ir simbolisks skaitļu pieraksta veids, kurā skaitļu attēlošanai tiek izmantoti vairāki cipari vai citas rakstzīmes, piemēram heksadecimālais. </p>
      <h2>Decimālā</h2>
      <p>Decimālajā skaitīšanas sistēmā bāze ir 10, tas nozīmē, ka tiek izmantoti cipari no 0 līdz 9</p>
      <ol>
        <li>Uzraksta ciparus no 0 līdz 9</li>
        <li>Kad sasniedz 9, pieskaita 1 un iegūst 10. Turpina skaitīt no 1, mainot skaitļa pēdējo ciparu.</li>
        <li>Kad pēdējais cipars atkal sasniedz 9, kreisajam ciparam pieskaita 1, iegūstot 20.</li>
        <li>Kad sasniedz 99, abus ciparus aizvieto ar 0, bet pa kreisi pievieno 1.</li>
      </ol>
      <h2>Binārā</h2>
      <p>Binārā skaitīšanas sistēmas bāze ir 2, kur tiek izmantoti cipari 1 vai 0.</p>
      <p>Binārā skaitīšanas sistēma ir populāra datoros un citās elektriskajās ierīcēs, jo izmantojot elektrisko signālu (vai kādu citu), tas var nozīmēt tieši divus stāvokļus. Ir elektrība nozīmē 1, bet ja nav, tad 0</p>
      <p>Tas nozīmē, ka binārajā sistēmā katra nākamā pozīcija ir 2 reizes lielāka nekā iepriekšējā.
Pirmā pozīcija atbilst 2 0 , nākamā 2 1 utt. Lai no binārās sistēmas pārietu uz decimālo, jāsāk skaitīt
no labās puses. Piemēram, skaitlis 1011 = 1 + 2 + 0 + 8 = 11</p>
<br />
<p>No decimālā uz bināro divos veidos</p>
<p>Vispopulārākais veidz ir dalot skaitli ar divi, ja atlikums ir viens, tad pieliec 1 pie rezultāta. Atlikumu noņem un jauno skaitli atkal dala ar 2 tā atkārtot līdz nav vairs skaitļu. Rezultātu nolasa otrādi un tā būs atbilde binārajā</p>
<img src="https://x-engineer.org/wp-content/uploads/2016/09/Decimal-to-Binary-Conversion.jpg?257cdb&257cdb" alt="Decimālais uz bināro" />
      <h2>Heksadecimālā</h2>
      <p>Heksadecimālā skaitīšanas sistēmas bāze ir 16, tiek izmantoti cipari no 0 līdz 9 un vēl papildus cipari A līdz F</p>
      <p>Kā datori kļuva jaudīgāki, bija effektīvaāk grupēt bitus pa 4, kas sanāk ir heksadecimālais skaitlis</p>
      <p>To izmanto priekš: </p>
      <ul>
        <li>Lai norādītu vietas atmiņā.</li>
        <li>Lai definētu krāsas tīmekļa lapās (#RRGGBB)</li>
        <li>Lai attēlotu MAC adreses (MM:MM:SS:SS:SS vai MMMM-MMSS-SSSS). Pirmie 6 cipari apzīmē adaptera ražotāja ID, bet pēdējie 6 – adaptera sērijas numuru.</li>
        <li>Lai parādītu kļūdu ziņojumus.</li>
      </ul>
      <p>Lai izvairītos no sajaukšanas ar decimāldaļām, oktāli vai citām numerācijas sistēmām, heksadecimālos skaitļus dažreiz sāk rakstīt ar "h" vai "0x" pirms skaitļa. Piemēram, 63h un 0x63 nozīmē 63 heksadecimālajā.</p>
      <img src="https://www.sciencehq.com/wp-content/uploads/Hexadecimal-to-Decimal-Conversion.jpg" alt="Hex to binary" />
      <p>Lai pārtaisītu no decimālo uz heksadecimālo skaitlis ir jādala ar 16. Atlikumu noņem un pārtaisa par heksadecimālo un pieliek pie rezultāta. Darbību atkārto līdz skaitlis vairs nav</p>
      <img src="/DecimalToHex.png" alt="Decimal to hex"/>
    </div>
  );
}

export default Osi;
