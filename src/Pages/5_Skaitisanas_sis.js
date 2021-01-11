import React from 'react';

function Osi() {
  return (
    <div className="SkaitisanasSis">
      <h1>5.Decimālā, binārā un heksadecimālā skaitīšanas sistēmas.</h1>
      <p dir="ltr" style={{lineHeight: '1.2', textAlign: 'justify', marginTop: '0pt', marginBottom: '0pt'}}><strong>Skaitīšanas sistēma</strong> ir simbolisks skaitļu pieraksta veids, kurā skaitļu attēlošanai tiek izmantoti vairāki cipari vai citas rakstzīmes, piemēram heksadecimālais. </p>
      <h2>Decimālā</h2>
      <p>Decimālajā skaitīšanas sistēmā bāze ir 10, tas nozīmē, ka tiek izmantoti cipari no 0 līdz 9</p>
      <h2>Binārā</h2>
      <p>Binārā skaitīšanas sistēmas bāze ir 2, kur tiek izmantoti cipari 1 vai 0.</p>
      <p>Binārā skaitīšanas sistēma ir populāra datoros un citās elektriskajās ierīcēs, jo izmantojot elektrisko signālu (vai kādu citu), tas var nozīmēt tieši divus stāvokļus. Ir elektrība nozīmē 1, bet ja nav, tad 0</p>
      <h2>Heksadecimālā</h2>
      <p>Heksadecimālā skaitīšanas sistēmas bāze ir 16, tiek izmantoti cipari no 0 līdz 9 un vēl papildus cipari A līdz F</p>
      <p>Kā datori kļuva jaudīgāki, bija effektīvaāk grupēt bitus pa 4, kas sanāk ir heksadecimālais skaitlis</p>
      <p>Lai izvairītos no sajaukšanas ar decimāldaļām, oktāli vai citām numerācijas sistēmām, heksadecimālos skaitļus dažreiz sāk rakstīt ar "h" vai "0x" pirms skaitļa. Piemēram, 63h un 0x63 nozīmē 63 heksadecimālajā.</p>
    </div>
  );
}

export default Osi;
