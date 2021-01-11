import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import OSI from './Pages/1_OSI';
import VitaPara from './Pages/2_VitaPara';
import Optiskais from './Pages/3_Optisko';
import Bezvade from './Pages/4_Bezvadu';
import Skaitisana from './Pages/5_Skaitisanas_sis';
import Ethernet from './Pages/6_EthernetProtokols';
import EthKomut from './Pages/7_EthernetKomutesana';
import IPv4 from './Pages/8_IPv4';
import IPv6 from './Pages/9_IPv6';
import IPVirz from './Pages/10_IPVirzisana';
import TCProt from './Pages/11_TCPProtokols';
import UDProt from './Pages/12_UDPProtokols';
import PopularakieSlani from './Pages/13_PopularakieSlani';
import EnkDek from './Pages/14_EnkDek';
import DNSServ from './Pages/15_DNS';
import Vietne from './Pages/16_VietneDatortiki';
import CiscoLietosana from './Pages/17_CiscoLietosana';
import TikluDros from './Pages/18_DatoruTikluDrosiba';
import HomePage from './HomePage';
import './reset.scss';

function App() {
  return (
    <div className="App">
    <Link to="/" style={{fontSize:28}}>Mājas</Link>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/osi">
            <OSI />
          </Route>
          <Route path="/VitaPara">
            <VitaPara />
          </Route>
          <Route path="/OptiskaisKabelis">
            <Optiskais />
          </Route>
          <Route path="/BezvaduTikls">
            <Bezvade />
          </Route>
          <Route path="/SkaitisanasSistemas">
            <Skaitisana />
          </Route>
          <Route path="/EthernetProtokols">
            <Ethernet />
          </Route>
          <Route path="/EthernetKomutesana">
            <EthKomut />
          </Route>
          <Route path="/IPv4">
            <IPv4 />
          </Route>
          <Route path="/IPv6">
            <IPv6 />
          </Route>
          <Route path="/IPVirzisana">
            <IPVirz />
          </Route>
          <Route path="/TCP">
            <TCProt />
          </Route>
          <Route path="/UDP">
            <UDProt />
          </Route>
          <Route path="/PopularakieSlani">
            <PopularakieSlani />
          </Route>
          <Route path="/EnkapsulacijaDekapsulacija">
            <EnkDek />
          </Route>
          <Route path="/DNS">
            <DNSServ />
          </Route>
          <Route path="/VietnesDatortiklaPlusma">
            <Vietne />
          </Route>
          <Route path="/CiscoIOS">
            <CiscoLietosana />
          </Route>
          <Route path="/DatortikluDrosiba">
            <TikluDros />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
