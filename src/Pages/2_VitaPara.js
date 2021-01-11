import React from 'react';

function Osi() {
  return (
    <div className="VitaPara">
      <h1>2.Vītā pāra kabeļu datu pārraides vide.</h1>
      <p>Vītais pāris ir kabeļu tips, kurā divi vadītāji no vienas shēmas ir savīti kopā ar mērķi izslēgt viens otra elektromagnētisko interferenci no ārējiem avotiem.
</p>
<h2>UTP (Unshielded Twisted-Pair)</h2>
<p>visbiežāk izmantotā datu pārraides vide. UTP kabeļi parasti ir noslēgti ar RJ-45 savienotājiem. LAN tīklos, UTP kabelis sastāv no 4 ar krāsām kodētiem pāriem, kuri ir savīti kopā, un tad pārklāti ar plasmasas pārvalku, kas pasargā tos no maziem fizikāliem bojājumiem. Vadu vīšana palīdz pasargāt tos no signālu iejaukšanās jeb interferenci no citiem vadiem. Tā kā šie vadi neizmanto ekranēšanu, lai aizsargātos pret EMI un RFI, projektētājiem citādākos veidos ir jāaizsārgā tie. Tāpēc, kad divi vadi elektriskā savienojumā ir likti tuvu kopā, to magnētiskie lauki ir tieši pretēji viens otram, tāpēc šie 2 magnētiskie lauki atcel viens otru un arī atceļ jebkādus ārējos EMI un RFI signālus. Lai vairāk uzlabotu savīto vadu atcelšanas efektu, projektētāji katram pārim kabeļi dažādo vijumu skaitu. UTP kabeļiem jāievēro precīzas specifikācijas, kas nosaka cik daudz vijumi ir atļauti katram pārim metrā. Šiem kabeļiem ir mazs izmērs, kas var noderēt uztādīšanas laikā. Tātad UTP paļaujas vienīgi uz vadu vīšanas atcelšanas efektu, lai tos aizsargātu no signālu iejaukšanās jeb interferences.
UTP kabeļi pakļaujas standartiem, kurus veido kopīgi Telecommunications Industry Association (TIA) un Electronic Industries Alliance (EIA).Tieši TIA/EIA-568 nosaka komerco kabeļu standartus LAN uzstādīšanām, kas arī ir visvairāk izmantotais standarts LAN datu pārraides vidēs. Šie standarti nosaka, piemēram, kabeļu tipus, izmērus, savienotājus un metodes, kā šos kabeļus testēt. 
Tie ir lētāki kabeļi gan par STP kabeļiem, gan par koaksiālajiem kabeļiem, gan par optiskajiem kabeļiem, ar tiem ir viegli strādāt un tie ir viegli locāmi, toties signālu interferences dēļ nav pieejami lielam distancēm.
</p>
<h2>STP (Shielded Twisted Pair)</h2>
<p>tie gādā labāku aizsardzību pret trokšņiem nekā UTP kabeļi, bet salīdzinot ar UTP tie ir daudz dārgāki un tos ir grūtāk uzstādīt. Tāpat kā UTP kabeļi tie parasti izmanto RJ-45 savienotājus. STP apvieno vadu ekranēšanu, lai izvarītos no EMI un RFI, un vadu vīšanu, lai izvairītos no sķērsrunas jeb “crosstalk”. Lai iegūtu pilnu ieguvumu no ekranēšanas STP kabeļi ir noslēgti ar speciāli ekranētiem STP datu savienotājiem. Ja kabelis ir nepareizi zemēts, tad ekranējums var darboties kā antena un uztvert nevēlamus signālus  Parasti STP kabeļi izmanto četrus pārus vadu, kur katrs pāris ir ekranēts ar foliju, un šie ekranētie vadu pāri ir vēl ietīti metāliskā pinumā vai folijā.</p>
    <i>Elektronikas un Elektrotehnikas inženieru institūts</i>
    <p>Institute of Electrical and Electronics Engineers (IEEE) definē vara kabeļu elektriskās īpašības. Tās sadala kategorijās, kas norāda atbilstību noteiktām prasībām. Šīs kategorijas tiek numurētas no 1 līdz 7(pašlaik). Piemēram, UTP 3. kategoriju izmanto(ja) balss sakariem, visbiežāk telefonlīnijās. Mūsdienās vispopulārākā ir 5e kategorija, kas nodrošina 100-1000Mb/s joslas platumu. Populārākie pieslēgumu apzīmējumi ir:
</p>
<ul>
  <li>100BASE-TX – 100Mb/s, pamatjoslas, vītais pāris (T) un pilns duplekss (X);</li>
  <li>1000BASE-TX – 1Gb/s, pamatjoslas, vītais pāris (T) un pilns duplekss (X).</li>
</ul>
<p>
Abi šie vītā pāru kabeļu tipi ir pakļauti uguns un elektriskiem apdraudējumiem. Ugunsgrēka draudi eksistē, jo kabeļu izolācija un apvalki var būt uzliesmojoši vai izdalīt toksiskus dūmus, kad tie silsts vai deg. Elektriskie apdraudējumi eksistē, jo vara vadi var vadīt elektrību nevēlamos veidos, piemēram, vara vadi var vadīt spriegumus no zibens uz tīkla iekārtām, vai, kad tīklam pieslēdz bojātu tīkla iekārtu, u.c. Tie var ievainot personālu vai sabojāt tīkla iekārtas un pievienotos datorus. 
</p>
<p dir="ltr" style={{lineHeight: '1.295', textAlign: 'justify', marginTop: '0pt', marginBottom: '8pt'}}><span style={{fontSize: '12pt', fontFamily: 'Calibri,sans-serif', color: '#000000', backgroundColor: 'transparent', fontWeight: 400, fontStyle: 'normal', fontVariant: 'normal', textDecoration: 'none', verticalAlign: 'baseline', whiteSpace: 'pre-wrap'}}>Ir ļoti svarīgi pareizi savienot vadu ar savienotājiem, ja to neizdara pareizi, tas tikai palielina troksni un veicina signālu zaudēšanu.&nbsp;</span></p>
        <p dir="ltr" style={{lineHeight: '1.295', textAlign: 'center', marginTop: '0pt', marginBottom: '8pt'}}><span style={{fontSize: '12pt', fontFamily: 'Calibri,sans-serif', color: '#000000', backgroundColor: 'transparent', fontWeight: 400, fontStyle: 'normal', fontVariant: 'normal', textDecoration: 'none', verticalAlign: 'baseline', whiteSpace: 'pre-wrap'}}><span style={{border: 'none', display: 'inline-block', overflow: 'hidden', width: '538px', height: '267px'}}><img src="https://lh6.googleusercontent.com/MbD2_qMz5XFPtLCxjalehpxvS6f_2tNaYa_MqwwCj7_QApAMVmuy4Z1aJLKCfLUoevjMiwJiWxS_-s3DLyqMEg1LD5i_fyuW9yps_3DHVsYNH3-N2Kr8BxknOVFLQS-BHB-L_Ns" width={538} height={267} /></span></span></p>
        <p dir="ltr" style={{lineHeight: '1.295', textAlign: 'justify', marginTop: '0pt', marginBottom: '8pt'}}><span style={{fontSize: '12pt', fontFamily: 'Calibri,sans-serif', color: '#000000', backgroundColor: 'transparent', fontWeight: 400, fontStyle: 'normal', fontVariant: 'normal', textDecoration: 'none', verticalAlign: 'baseline', whiteSpace: 'pre-wrap'}}>UTP kabeļiem ir 4 krāsoti pāri, katrā pāri viens ir svītrots, otrs nesvītrots. UTP kabeļu standartos zilo pāri apzīme kā 1. pāri, oranžo pāri – 2. pāri, zaļo pāri – 3. pāri, brūno pāri – 4. pāri. UTP kabeļu tipam ir 2 vadu savienošas ar savienotājiem standarti(TIA):</span></p>
        <ul style={{marginTop: 0, marginBottom: 0, paddingInlineStart: '48px'}}>
          <li dir="ltr" style={{listStyleType: 'disc', fontSize: '12pt', fontFamily: 'Calibri,sans-serif', color: '#000000', backgroundColor: 'transparent', fontWeight: 400, fontStyle: 'normal', fontVariant: 'normal', textDecoration: 'none', verticalAlign: 'baseline', whiteSpace: 'pre'}}>
            <p dir="ltr" style={{lineHeight: '1.295', textAlign: 'justify', marginTop: '0pt', marginBottom: '0pt'}}><span style={{fontSize: '12pt', fontFamily: 'Calibri,sans-serif', color: '#000000', backgroundColor: 'transparent', fontWeight: 400, fontStyle: 'normal', fontVariant: 'normal', textDecoration: 'none', verticalAlign: 'baseline', whiteSpace: 'pre-wrap'}}>T568A, šis standarts, ja ķepiņa ir uz leju, tad no kreisās puses ar labo, sākas ar svītrotu, tad nesvītrots, svītrots nesvītrots un tā līdz beigām, un krāsas attiecīgi ir zaļš, zaļš, oranžs, zils, zils, oranžs, brūns, brūns.</span></p>
          </li>
          <li dir="ltr" style={{listStyleType: 'disc', fontSize: '12pt', fontFamily: 'Calibri,sans-serif', color: '#000000', backgroundColor: 'transparent', fontWeight: 400, fontStyle: 'normal', fontVariant: 'normal', textDecoration: 'none', verticalAlign: 'baseline', whiteSpace: 'pre'}}>
            <p dir="ltr" style={{lineHeight: '1.295', textAlign: 'justify', marginTop: '0pt', marginBottom: '8pt'}}><span style={{fontSize: '12pt', fontFamily: 'Calibri,sans-serif', color: '#000000', backgroundColor: 'transparent', fontWeight: 400, fontStyle: 'normal', fontVariant: 'normal', textDecoration: 'none', verticalAlign: 'baseline', whiteSpace: 'pre-wrap'}}>T568B, šis standarts, ja ķepiņa ir uz leju, tad no kreisās puses ar labo, sākas ar svītrotu, tad nesvītrots, svītrots nesvītrots un tā līdz beigām, un krāsas attiecīgi ir oranžs, oranžš, zaļš, zils, zils, zaļš, brūns, brūns.</span></p>
          </li>
        </ul>
        <p dir="ltr" style={{lineHeight: '1.295', textAlign: 'justify', marginTop: '0pt', marginBottom: '8pt'}}><span style={{fontSize: '12pt', fontFamily: 'Calibri,sans-serif', color: '#000000', backgroundColor: 'transparent', fontWeight: 400, fontStyle: 'normal', fontVariant: 'normal', textDecoration: 'none', verticalAlign: 'baseline', whiteSpace: 'pre-wrap'}}>Parasti izsaka standartu 2 galvenos vadu veidus:</span></p>
        <ul style={{marginTop: 0, marginBottom: 0, paddingInlineStart: '48px'}}>
          <li dir="ltr" style={{listStyleType: 'disc', fontSize: '12pt', fontFamily: 'Calibri,sans-serif', color: '#000000', backgroundColor: 'transparent', fontWeight: 400, fontStyle: 'normal', fontVariant: 'normal', textDecoration: 'none', verticalAlign: 'baseline', whiteSpace: 'pre'}}>
            <p dir="ltr" style={{lineHeight: '1.295', textAlign: 'justify', marginTop: '0pt', marginBottom: '0pt'}}><span style={{fontSize: '12pt', fontFamily: 'Calibri,sans-serif', color: '#000000', backgroundColor: 'transparent', fontWeight: 400, fontStyle: 'normal', fontVariant: 'normal', textDecoration: 'none', verticalAlign: 'baseline', whiteSpace: 'pre-wrap'}}>Ethernet caurplūde(straight-through), tajā abi gali ir ar vienādu “savienotāju” standartu, piemēram, abi ir T568A. Šos vadus izmanto, lai savienotu tīklā hostu ar tīkla iekārtu.</span></p>
          </li>
          <li dir="ltr" style={{listStyleType: 'disc', fontSize: '12pt', fontFamily: 'Calibri,sans-serif', color: '#000000', backgroundColor: 'transparent', fontWeight: 400, fontStyle: 'normal', fontVariant: 'normal', textDecoration: 'none', verticalAlign: 'baseline', whiteSpace: 'pre'}}>
            <p dir="ltr" style={{lineHeight: '1.295', textAlign: 'justify', marginTop: '0pt', marginBottom: '8pt'}}><span style={{fontSize: '12pt', fontFamily: 'Calibri,sans-serif', color: '#000000', backgroundColor: 'transparent', fontWeight: 400, fontStyle: 'normal', fontVariant: 'normal', textDecoration: 'none', verticalAlign: 'baseline', whiteSpace: 'pre-wrap'}}>Ethernet šķērskabelis(crossover), tajā abi gali ir ar dažādu “savienotāju” standartu, viens ir T568A, otrs T568B. Šos vadus izmanto, lai savienotu vienādas iekārtas, piemēram, hostu ar hostu vai komutatoru ar komutatoru.</span></p>
          </li>
        </ul>
        <p dir="ltr" style={{lineHeight: '1.295', textAlign: 'justify', marginTop: '0pt', marginBottom: '8pt'}}><span style={{fontSize: '12pt', fontFamily: 'Calibri,sans-serif', color: '#000000', backgroundColor: 'transparent', fontWeight: 400, fontStyle: 'normal', fontVariant: 'normal', textDecoration: 'none', verticalAlign: 'baseline', whiteSpace: 'pre-wrap'}}>Pēc vadu uzstādīšanas ir jāpārbaudu/jātestē vai viss tiem ir kārtībā.</span></p>
    </div>
  );
}

export default Osi;