import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="Home">
        <Link to="/osi">1.OSI, TCP/IP modeļi.</Link>
        <Link to="/VitaPara">2.Vītā pāra kabeļu datu pārraides vide.</Link>
        <Link to="/OptiskaisKabelis">3.Optisko kabeļu datu pārraides vide.</Link>
        <Link to="/BezvaduTikls">4.Bezvadu lokālie tīkli.</Link>
        <Link to="/SkaitisanasSistemas">5.Decimālā, binārā un heksadecimālā skaitīšanas sistēmas.</Link>
        <Link to="/EthernetProtokols">6.Ethernet protokols.</Link>
        <Link to="/EthernetKomutesana">7.Ethernet komutēšana (switching).</Link>
        <Link to="/IPv4">8.IPv4 protokols.</Link>
        <Link to="/IPv6">9.IPv6 protokols.</Link>
        <Link to="/IPVirzisana">10.IP virzīšana (routing).</Link>
        <Link to="/TCP">11.TCP protokols.</Link>
        <Link to="/UDP">12.UDP protokols.</Link>
        <Link to="/PopularakieSlani">13.Populārākie lietojumu slāņa protokoli un pielietojumi.</Link>
        <Link to="/EnkapsulacijaDekapsulacija">14.Enkapsulācijas/dekapsulācijas procesi.</Link>
        <Link to="/DNS">15.DNS sistēma.</Link>
        <Link to="/VietnesDatortiklaPlusma">16.Kādas datortīkla plūsmas notiek, atverot Tīmekļa vietni.</Link>
        <Link to="/CiscoIOS">17.Cisco IOS lietošana un iekārtas konfigurēšana.</Link>
        <Link to="/DatortikluDrosiba">18.Datoru tīklu drošība.</Link>
        <Link to="/LietuInternets">Lietu internets</Link>
    </div>
  );
}

export default App;
