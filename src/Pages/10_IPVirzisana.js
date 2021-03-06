import React from 'react';

function Osi() {
  return (
    <div className="IPVirzisana">
      <h1>10.IP virzīšana (routing).</h1>
      <p>Runāšanas punkti:</p>
      <ul>
        <li>Kā saimniekdators izveido IP paketi (ka tiek pievienots IP)</li>
        <li>Kā tas tiek pāsūtīts kā kadrs</li>
        <li>ARP</li>
        <li>Noklusētais maršruts jeb default route</li>
        <li>Izmantojot tabulu, kā virzis zin kur sūtīt datus</li>
      </ul>
      <p dir="ltr" style={{lineHeight: '1.2', textAlign: 'justify', marginTop: '0pt', marginBottom: '0pt'}}><span style={{fontSize: '12pt', fontFamily: 'Calibri,sans-serif', color: '#000000', backgroundColor: 'transparent', fontWeight: 400, fontStyle: 'normal', fontVariant: 'normal', textDecoration: 'none', verticalAlign: 'baseline', whiteSpace: 'pre-wrap'}}>Maršrutēšanu lielākoties realizē pārsūtot ienākošās paketes tālāk, saskaņā ar ierakstiem dinamiski atjaunotā maršrutēšanas tabulā (skatoties pēc destination adress). Datoriem, kam ir tikai viens pieslēgums pie interneta, parasti tā tabula ir statiska - uz adresēm, kas atrodas lokālajā subnetā datus sūta tieši (uz attiecīgo 2. līmeņa adresi), visām pārējām adresēm paredzētās paketes sūta uzdefault gateway, kas ir tuvākais maršrutizētājs (router).</span></p>
        <p dir="ltr" style={{lineHeight: '1.2', textAlign: 'justify', marginTop: '0pt', marginBottom: '0pt'}}><span style={{fontSize: '12pt', fontFamily: 'Calibri,sans-serif', color: '#000000', backgroundColor: 'transparent', fontWeight: 400, fontStyle: 'normal', fontVariant: 'normal', textDecoration: 'none', verticalAlign: 'baseline', whiteSpace: 'pre-wrap'}}>IP adresi (kas ir 32 bitu skaitlis) loģiski sadala 2 daļās: tīkla adrese (network address) un datora adrese (host address). Rūteri interesejas tikai par tīkla adresēm. Lielajiem interneta backbone rūteriem atmiņā ir jātur visas neatkarīgi iespējamās tīkla adreses. Palielinoties nesaistāmu tīkla adrešu skaitam (ja vairāki tīkli ir pieslēgti ar vienu pieslēgumu un to adreses ir secīgas (piem. 112.112.129.0/24, 112.112.130.0/24, 112.112.131.0/24 un 112.112.132.0/24 no ārpuses var noadresēt arī kā 112.112.129.0/22 un tālākajiem rūteriem pietiek ar vienu ierakstu 4 vietā)). Ekonomiskāka IP adrešu izmanošana palielina slodzi un backbone rūteriem.</span></p>
        <p dir="ltr" style={{lineHeight: '1.2', textAlign: 'justify', marginTop: '0pt', marginBottom: '0pt'}}><span style={{fontSize: '12pt', fontFamily: 'Calibri,sans-serif', color: '#000000', backgroundColor: 'transparent', fontWeight: 400, fontStyle: 'normal', fontVariant: 'normal', textDecoration: 'none', verticalAlign: 'baseline', whiteSpace: 'pre-wrap'}}>Rūteriem ir 2 vai vairāk tīkla interfeisi (tīklakartes). Katram no tiem ir sava IP adrese un katrs pieder pie sava tīkla (jo rūtera funkcija ir sasaistīt kopā tīklus). Vēl rūterim ir tabula, kas satur informāciju par to, kādus tīklus var sasniegt caur kuru interfeisu. Tīklu skaits parasti ir lielāks par interfeisu skaitu. Lai sasniegtu tīklus, kuri nav definēti tajā tabulā, lieto default route, tas ir definēts nākamais rūteris uz kuru pārsūta paketes, kuru mērķa tīklam nav atbilstoša ieraksta tabulā.</span></p>
    </div>
  );
}

export default Osi;
