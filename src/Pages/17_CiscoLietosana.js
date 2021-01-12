/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function Osi() {
  return (
    <div className="CiscoLietosana">
      <h1>17.Cisco IOS lietošana un iekārtas konfigurēšana</h1>
      <h2>Īsumā</h2>
      <p>Runāšanas punkti:</p>
      <ul>
        <li>Kas ir IOS - OS CISCO ierīcēs</li>
        <li>Kur var konfigurēt iekārtas (Konsole, SSH, Telnet)</li>
        <li>Konsoles taustiņi (keybinds)</li>
        <li>Exec režīmi un Global config</li>
        <li>Ko darīt uzstādot jaunu CISCO iekārtu</li>
      </ul>
      <p>Vēl bija jautājumi kāda ir starpība start rūtera un switcha IP likšanu</p>
      <p>Kā uzlikt IP uz switcha</p>
      <h2>Garumā</h2>
      <p dir="ltr" id="docs-internal-guid-a497e38e-7fff-3479-5c4c-ef5063f1d223">
          Cisco IOS (Internetwork Operating System) ir tīkla operētājsistēma, kuru
          izmanto Cisco tīkla iekārtas. Tā dod iespēju iekārtas aparatūrai funkcionēt
          un nodrošina lietotājiem saskarni, ar kuru darboties.
        </p>
        <p dir="ltr">
          CLI piekļuves opcijas:
        </p>
        <ul>
          <li dir="ltr">
            <p dir="ltr">
              Konsole – fiziskas pārvaldīšanas ports, kas dod
              ārpusjoslas(out-of-band) piekļuvi Cisco iekārtai.
              Ārpusjoslas(Out-of-band) piekļuve attiecas uz piekļuvi caur
              speciālu pārvaldīšanas kanālu, kas ir izmantots tikai pārvaldīsanas
              nolūkiem. Konsoles porta lietošanas labums ir tas, ka ierīce ir
              pieejama pat, ja nav neviena uzstādīta tīkla, piemēram, ja veic
              sākotnēju tīkla iekārtas konfigurēšanu. Veicot sākotnējo
              konfigurēšanu, dators ar ejošu speciālu termināļa emulācijas
              lietotni tiek savienots ar konsoles portu izmantojot speciālu
              kabeli/vadu.
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              Secure Shell(SSH) – SSH ir metode, lai varētu attālināti izveidot
              drošu CLI savienojumu caur virtuāli saskarni tīklā. Atšķirībā no
              konsoles porta, SSH vajag jau uzstādītus aktīvus tīklus uz
              iekārtas, tostarp aktīvu saskarni, kas ir konfigurēta ar adresi. Šī
              ir ieteicama metode attālinātai pārvaldīšanai, jo tā nodrošina
              drošu savienojumu. SSH nodrošina šifrētu paroļu pārbaudi un datu
              transportēšanu. Šis notur lietotāja ID, paroli, un pārvaldīšanas
              sesijas datus privātus. Lielākoties visas versijas no Cisco IOS
              iekļauj SSH serveri un SSH klientu, kuru var izmantot, lai
              nodrošinātu SSH savienojumus ar citām iekārtām.
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              Telnet – nedroša metoda, lai varētu attālināti izveidot CLI
              savienojumu caur virtuāli saskarni tīklā. Atšķirībā no SSH, Telnet
              nenodrošina šifrētu savienojumu. Visi dati tiek sūtīti tīklā kā
              parasts teksts. Kaut arī Cisco IOS iekļauj Telnet serveri un
              klientu, ir ieteicams izmantot SSH metodi.
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              Dažas iekārtas, kā, piemēram, maršrutētāji, var arī atbalstīt
              senāku AUX port, kas bija izmantots, lai nodrošinātu CLI sesiju
              attālināti izmantojot modemu. Līdzīgi kā konsoles savienojumam, AUX
              ports ir ārpusjoslas(out-of-band) un tam nevajag nodrošināt, lai
              tīkla pakalpojumi ir konfigurēti vai pieejami.
            </p>
          </li>
        </ul>
        <p dir="ltr">
          Ir pieejamas daudzas perfektas termināļa emulācijas lietotnes, kas var
          nodrošināt iepriekšminētās savienojuma veidus, daži no tiem ir PuTTY, Tera
          Term un SecureCRT. Šīs programmas mēdz paaugstināt produktivitāti.
        </p>
        <p dir="ltr">
          Datoru ar komutatoru(switch) var savienot ar konsoles vadu, kur datorā
          iesprauž tā galu RS232 portā, bet komutātorā konsoles portā.
        </p>
        <div dir="ltr" align="center">
          <table>
            <colgroup>
              <col width={78} />
              <col width={293} />
              <col width={184} />
            </colgroup>
            <tbody>
              <tr>
                <td>
                  <p dir="ltr">
                    Komandu režīms
                  </p>
                </td>
                <td>
                  <p dir="ltr">
                    Apraksts
                  </p>
                </td>
                <td>
                  <p dir="ltr">
                    Noklusētais ierīces uzvedne(prompt)
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p dir="ltr">
                    User Exec režīms
                  </p>
                </td>
                <td>
                  <ul>
                    <li dir="ltr">
                      <p dir="ltr">
                        Režīms atļauj piekļuvi tikai vienkāršām
                        uzraudzības komandām
                      </p>
                    </li>
                    <li dir="ltr">
                      <p dir="ltr">
                        Bieži tiek saukts par “viev-only” režīmu
                      </p>
                    </li>
                  </ul>
                </td>
                <td>
                  <p dir="ltr">
                    Switch&gt;
                  </p>
                  <p dir="ltr">
                    Router&gt;
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p dir="ltr">
                    Privileged EXEC režīms
                  </p>
                </td>
                <td>
                  <ul>
                    <li dir="ltr">
                      <p dir="ltr">
                        Režīms atļauj piekļuvi visām komandām un
                        iespējām
                      </p>
                    </li>
                    <li dir="ltr">
                      <p dir="ltr">
                        Lietotājs var lietot jebkādas uzraudzības
                        komandas, un palaist konfigurēšanas,
                        pārvaldības komandas
                      </p>
                    </li>
                  </ul>
                </td>
                <td>
                  <p dir="ltr">
                    Switch#
                  </p>
                  <p dir="ltr">
                    Router#
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p dir="ltr">
          Switch&gt; - tas nozīme, ka atrodies User Exec režīmā.
        </p>
        <p dir="ltr">
          Switch&gt;enable – ar šo komandu tu ieiesi Privileged EXEC režīmā.
        </p>
        <p dir="ltr">
          Switch# - tas nozīmē, ka atrodies Privileged EXEC režīmā.
        </p>
        <p dir="ltr">
          Switch#configure terminal - ar šo komandu tu ieiesi Global Configuration
          režīmā.
        </p>
        <p dir="ltr">
          Switch(config)# - tas nozīmē, ka atrodies Global Configuration režīmā jeb
          Global config režīmā.
        </p>
        <p dir="ltr">
          Switch(config)#interface vlan 1 - ar šo komandu tu ieiesi Interface
          Subconfiguration režīmā.
        </p>
        <p dir="ltr">
          2 izplatīti Subconfiguration režīmi ir:
        </p>
        <ul>
          <li dir="ltr">
            <p dir="ltr">
              Line Configuration Mode – izmantots, lai konfigurētu konsoles, SSH,
              Telnet vai AUX piekļuvi. Noklusējuma uzvedne(prompt) būs
              “Switch(config-line)#”.
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              Interface Configuration Mode – izmantots, lai konfigurētu
              komutatora portu vai maršrutētāja tīkla saskarni. Noklusējuma
              uzvedne būs “Switch(config-if)#”.
            </p>
          </li>
        </ul>
        <p dir="ltr">
          Lai ieietu no User Exec režīma uz Privileged EXEC, vajag izmantot komandu
          “enable”, lai izietu no Privileged EXEC režīma vajag izmantot komandu
          “disable”.
        </p>
        <p dir="ltr">
          Dažkārt Privileged EXEC režīmu sauc par “enable” režīmu.
        </p>
        <p dir="ltr">
          Ja vēlies iziet no Global Configuration režīma, vajag izmantot komandu
          “exit”, tad pēc tās tu būsi Privileged EXEC režīmā. Ja tu esi,
          Subconfiguration režīmā un vēlies iziet atpakaļ Global config režīmā, atkal
          vajag izmantot komandu “exit”. Ja tu esi Privileged EXEC režīmā un ieraksti
          komandu “exit”, tu izej no konsoles vispār.
        </p>
        <p dir="ltr">
          Ja vēlies iziet no Subconfig režīma uzreiz uz Privileged EXEC režīmu
          izmanto komandu “end” vai taustiņu kombināciju “Ctrl+Z”.
        </p>
        <p dir="ltr">
          Var arī iet no viena Subconfig režīmu uz citu, neizmantojot “exit”/”end”
          komandas.
        </p>
        <p dir="ltr">
          Kamēr tu esi Global config režīmā var rakstīt komandu “line console 0”, lai
          ieietu konsoles pārvaldes saskarnē, komandu “line vty 0 15”, virtuālā
          termināļa pārvaldes saskarnē, komandu “interface vlan 1” , komandu
          “interface fastethernet 0/1”, u.c.
        </p>
        <br />
        <br />
        <div dir="ltr" align="left">
          <table>
            <colgroup>
              <col width={138} />
              <col width={138} />
              <col width={111} />
              <col width={166} />
            </colgroup>
            <tbody>
              <tr>
                <td colSpan={4}>
                  <p dir="ltr">
                    Switch&gt;show ip protocols
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p dir="ltr">
                    Switch&gt;
                  </p>
                </td>
                <td>
                  <p dir="ltr">
                    show
                  </p>
                </td>
                <td>
                </td>
                <td>
                  <p dir="ltr">
                    ip protocols (keyword)
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p dir="ltr">
                    Prompt
                  </p>
                </td>
                <td>
                  <p dir="ltr">
                    Command
                  </p>
                </td>
                <td>
                  <p dir="ltr">
                    Space
                  </p>
                </td>
                <td>
                  <p dir="ltr">
                    Keyword or Argument
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p dir="ltr">
                    Switch&gt;
                  </p>
                </td>
                <td>
                  <p dir="ltr">
                    ping
                  </p>
                </td>
                <td>
                </td>
                <td>
                  <p dir="ltr">
                    192.168.10.5 (argument)
                  </p>
                </td>
              </tr>
              <tr>
                <td colSpan={4}>
                  <p dir="ltr">
                    Switch&gt;ping 192.168.10.5
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <p dir="ltr">
          Lai zinātu, kā katra komanda strādā Cisco IOS un kas jāraksta pēc tām ir
          apzīmējumi, ko katra daļa nozīmē, vai tā ir vajadzīga vai izvēles, u.c.
        </p>
        <div dir="ltr" align="left">
          <table>
            <colgroup>
              <col width={94} />
              <col width={478} />
            </colgroup>
            <tbody>
              <tr>
                <td>
                  <p dir="ltr">
                    Apzīmējums
                  </p>
                </td>
                <td>
                  <p dir="ltr">
                    Paskaidrojums
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p dir="ltr">
                    boldface
                  </p>
                </td>
                <td>
                  <p dir="ltr">
                    Treknraksts norāda uz to, ka komanda vai atslēgas vārdi
                    ir jāraksta tieši kā piemērā.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p dir="ltr">
                    italics
                  </p>
                </td>
                <td>
                  <p dir="ltr">
                    Slīpraksts norāda uz argumentiem, kuriem tev ir jāpadod
                    vērtības.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p dir="ltr">
                    [x]
                  </p>
                </td>
                <td>
                  <p dir="ltr">
                    Kvadrātiekavas norāda uz izvēles elementiem(atslēgas
                    vārdiem/argumentiem).
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p dir="ltr">
                    {'{'}x{'}'}
                  </p>
                </td>
                <td>
                  <p dir="ltr">
                    Figūriekavas norāda uz vajadzīgiem elementiem(atslēgas
                    vārdiem/argumentiem).
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p dir="ltr">
                    [x {'{'}y|z{'}'}]
                  </p>
                </td>
                <td>
                  <p dir="ltr">
                    Figūriekavas un taisnās līnijas norāda uz vajadzīgu
                    izvēli iekš izvēles elementa.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p dir="ltr">
          Piemērs: ping ip-address – Komanda ir “ping” un lietotāja notektas
          arguments ir beigu iekārtas IP, piemēram, “ping 10.10.10.5”.
        </p>
        <p dir="ltr">
          IOS palīdzības iespējas:
        </p>
        <ul>
          <li dir="ltr">
            <p dir="ltr">
              Kontekstsakarīga palīdzība(Context-Sensitive Help) – tā atļauj tev
              ātri atrast kādas komandas ir pieejamas katrā komandu režīmā, kuras
              komandas sākas ar konkrēto burtu vai vārdu un kuri argumenti un
              atslēgvārdi ir pieejami konkrētām komandām. Lai piekļūtu šai
              iespējai, ieraksti “?” iekš CLI.
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              Komandu sintakses pārbaudītājs(Command Syntax Check) – tas
              pārbauda, vai lietotāja ierakstītā komanda ir pareiza. Kad komanda
              ir ierakstīta, komandas līnjas interpretators pārbauda komandu no
              kreisās puses uz labo. Ja interpretators saprot komandu, tad
              pieprasītā darbība tiks palaista, un CLI atgriezīsies uz piemēroto
              uzvedni(prompt). Toties, ja interpretators nevar saprast komandu,
              kura tika uzrakstīta, tas pados ziņu, kas tieši šajā komandā ir
              nepareizi.
            </p>
          </li>
        </ul>
        <p dir="ltr">
          Konsoles īsinājumtaustiņi:
        </p>
        <ul>
          <li dir="ltr">
            <p dir="ltr">
              Tab – Pabeidz daļēji ievadītu komandu, ja tāda ir viena iespējama.
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              Backspace – Izdzēš simbolu pa kreisi no kursora.
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              Ctrl+D(press and hold the Ctrl key, then press D) – Izdzēs simbolu
              uz kursora.
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              Ctrl+K – Izdzēš visus simbolus no kursora līdz līnijas beigām.
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              Esc D(press Esc, then press D) – izdzēš visus simbolus no kursora
              līdz vārda beigām.
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              Ctrl+U vai Ctrl+X – Izdzēš visus simbolus no kursora līdz līnijas
              sākumam.
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              Ctrl+W – Izdzēš vārdu pa kreisi no kursora.
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              Ctrl+A – Pārvieto kursoru uz līnijas sākumu.
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              LeftArrow or Ctrl+B – Pārvieto kursoru 1 simbolu pa kreisi.
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              Esc B – Pārvietu kursoru atpakaļ 1 vārdu pa kreisi.
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              Esc F – Pārvieto kursoru uz priekšu 1 vārdu pa labi.
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              RightArrow or Ctrl+F – Pārvieto kursoru 1 simbolu pa labi.
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              Ctrl+E – Pārvieto kursoru uz komandu līnijas beigām.
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              UpArrow or Ctrl+P – Parāda komandu, kas tika rakstīta iepriekš,
              sākot ar visjaunāko.
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              Ctrl+R or Ctrl+I, or Ctrl+L – Atkārtoti parāda sistēmas
              uzvedni(prompt) un komandu līniju pēc tā, kad ir tikusi saņemta
              konsoles ziņa.
            </p>
          </li>
        </ul>
        <p dir="ltr">
          //Poga “Delete”, kas parasti izdzēš 1 simbolu pa labi, nestrādā šajās
          lietotnēs.
        </p>
        <p dir="ltr">
          Kad rādās “-----More-----”:
        </p>
        <ul>
          <li dir="ltr">
            <p dir="ltr">
              SpaceBar – Parāda nākamo ekrānu(piemēram, kad izmanto help “?”, bet
              komandu ir daudz).
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              Enter – Parāda nākamo līniju.
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              AnyKey – Pabeidz displeja virkni, atgriežas uz Privileged EXEC
              režīmu.
            </p>
          </li>
        </ul>
        <p dir="ltr">
          Break Keys:
        </p>
        <ul>
          <li dir="ltr">
            <p dir="ltr">
              Ctrl+C – Kad jebkurā config režīmā beidz to un atgriežas uz
              Privileged EXEC režīmu. Kad uzstādīšanas režīmā(setup mode),
              pārtraucas atpakaļ uz komandu uzvedni.
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              Ctrl+Z – Kad jebkurā config režīmā beidz to un atgriežas uz
              Privileged EXEC režīmu.
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              Ctrl+Shift+6 – Jebkādu mērķu beidzēšanas darbība. Izmantot, lai
              pārtrauktu “DNS lookups”, “traceroutes”, “pings”.
            </p>
          </li>
        </ul>
        <p dir="ltr">
          Ierīču vārdiem jāsākas ar burtu, tas nevar saturēt atstarpes, tam jābeidzas
          ar burtu vai ciparu, var izmantot tikai ciparus, burtus un domuzīmes “-”,
          jābūt īsākam par 64 simboliem garumā.
        </p>
        <p dir="ltr">
          Iekš Global config režīma var ierakstīt komandu “hostname Mainis”, tas
          nomainīs tā vārdu uz Mainis. Ar komandu “no hostname” var atlikt atpakaļ uz
          default vārdu.
        </p>
        <p dir="ltr">
          Visām tīkla iekārtām vajadzētu izdarīt šādas lietas:
        </p>
        <ul>
          <li dir="ltr">
            <p dir="ltr">
              Nodrošināt Privileged EXEC režīmu ar paroli.
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              Nodrošināt User Exec režīmu ar paroli.
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              Nodrošināt attālināto Telnet piekļuvi ar paroli.
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              Šifrēt visas paroles.
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              Sniegt juridisku paziņojumu.
            </p>
          </li>
        </ul>
        <p dir="ltr">
          Parolēm vajadzētu būt:
        </p>
        <ul>
          <li dir="ltr">
            <p dir="ltr">
              Vismaz 8 simbolu garumā.
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              Izmantot lielos, mazos burtus, ciparus, speciālos simbolus un/vai
              ciparu virknes.
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              Nelietot vienu paroli visām ierīcēm.
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              Neizmantot bieži izmantotus vārdus.
            </p>
          </li>
        </ul>
        <p dir="ltr">
          Lai uzliku Privileged EXEC režīmam paroli, vajag būt Global config režīmā
          un ievadīt komandu “enable secret parole”. “parole” vietā var likt jebkādu
          paroli.
        </p>
        <p dir="ltr">
          Lai uzliktu User Exec režīmam paroli, vajag būt Global config režīmā un
          ievadīt komandu “line console 0”, tad (subconfig režīmā) ierakstīt komandu
          “password parole”, kur “parole” vietā var likt jebkādu paroli. Tad tur pat
          jāraksta komanda “login”, lai ieslēgtu User Exec piekļuvi.
        </p>
        <p dir="ltr">
          Lai uzliktu Virtual terminal(VTY) līnijām paroli, vajag būt Global config
          režīmā un ievadīt komandu “line vty 0 15”, tad (subconfig režīmā) ierakstīt
          komandu “password parole”, kur “parole” vietā var likt jebkādu paroli. Tad
          tur pat jāraksta komanda “login”, lai ieslēgtu VTY piekļuvi.
        </p>
        <p dir="ltr">
          Ja Privileged EXEC režīmā ieraksta komandu “show running-config”, varēs
          redzēt visas paroles tādas kā tās ir. Lai šifrētu paroles, kamēr tu esi
          Global config režīmā ieraksti komandu “service password-encryption”, tad
          vairs tā nebūs. Šis šifrē paroles tikai konfigurācijas failā nevis parolēm,
          kas tiek sūtītas caur tīklu.
        </p>
        <p dir="ltr">
          Iekš Global config režīma var ievadīt komandu “banner motd # LEGAL NOTICE
          MESSAGE ETC ETC ETC #”, # vietā var likt ko citu, piemēram, “”, tikai to
          simbolu nevar izmantot iekš teksta.
        </p>
        <p dir="ltr">
          Ir 2 sistēmas faili, kas uzkrāj iekārtu konfigurāciju:
        </p>
        <ul>
          <li dir="ltr">
            <p dir="ltr">
              startup-config – uzglabātais fails iekš Non-volatile Random Access
              Memory (NVRAM), kurš satur visas komandas, kas tiks izmantotas
              iekārtā pēc startēšanas vai atsāknēšanas. NVRAM nepazaudē savu
              saturu, kad iekārta ir izslēgta.
            </p>
          </li>
          <li dir="ltr">
            <p dir="ltr">
              running-config – uzglabātais fails iekš Random Access Memory (RAM),
              kurš atspoguļo pašreizējo konfigurāciju. Izmainot pašreizējo
              konfigurāciju, tā ietekmēs Cisco iekārtas darbību uzreiz. RAM ir
              energoatkarīga atmiņa, tā pazaudē visu saturu, kad iekārta tiek
              izslēgta vai restartēta.
            </p>
          </li>
        </ul>
        <p dir="ltr">
          Lai saglabātu veiktās izmaiņas konfigurācijā, iekš Privileged EXEC režīma
          vajag ievadīt komandu “copy running-config startup-config”.
        </p>
        <p dir="ltr">
          Var izmantot komandu iekš Privileged EXEC režīma “dir nvram:”, lai
          apskatītos vai izdevās saglabāt.
        </p>
        <p dir="ltr">
          Ar Privileged EXEC režīma komandu “reload” var atiestatīt izmaiņas, lai
          būtu kā bija sākumā, vai šajā gadījumā varam simulēt iekārtas restartu, un
          redzēt, ka mūsu starting-config ir saglabājies. Pēc daudzu kļūdainu komandu
          ievadīšanas ir noderīgi izmantot šo komandu, lai tiktu pie vecās versijas
          konfigurācijas. Vienīgā problēma šai komandai ir, ka iekārta uz laiku ir
          izslēgta.
        </p>
        <p dir="ltr">
          Var izmantot komandu iekš Privileged EXEC režīma “erase startup-config”,
          lai pilnībā sāktu konfigurēšanu no sākuma. Pēc šīs komandas ievadīt vajag
          “reload” un tad būs jaunā konfigurācija.
        </p>
        <p dir="ltr">
          Var arī izmantot Privileged EXEC režīma komandu “copy startup-config
          running-config”, lai ielādētu startup-config konfigurāciju tagadējā, lai
          izmainītu mazas izmaiņas.
        </p>
        <p dir="ltr">
          Konfigurācijas failus var arī saglabāt un arhivēt teksta dokumentos. Lai to
          darītu, vajag atvērt termināļa emulācijas lietotni kā PuTTY vai Tera Term,
          kura ir savienota ar komutatoru. Atļaut logēšanu, iedot failam vārdu un
          vietu, kur tas atradīsies. Atzīmēt “All Session Input”, lai to visu uzņemtu
          noteiktajā failā. Palaist komandu “show running-config” vai “show
          startup-config”. Teksts uz ekrāna tiks ievietots izvēlētajā failā. Lai
          logēšanu aizliegtu vajag no “All Session Input” nomainīt uz “None”. Lai
          atgrieztu uz tieši šādu konfigurāciju vajag ieiet Global config režīmā un
          Copy+Paste iekšā visu teksta failu. Tas mainīs running-config uz tādu kā
          būs.
        </p>
        <p dir="ltr">
          Cisco IOS Layer 2 komutatoriem ir fiziski porti, kuriem var pieslēgties
          iekārtas.
        </p>
        <p dir="ltr">
          Using the global configuration command service password-encryption
        </p>
        <p dir="ltr">
          security passwords min-length
        </p>
        <p dir="ltr">
          login block-for 120 attempts 3 within 60
        </p>
        <p dir="ltr">
          Router(config)# line vty 0 4
        </p>
        <p dir="ltr">
          Router(config-line)# exec-timeout 10
        </p>
        <p dir="ltr">
          Telnet is not secure. Data contained within a Telnet packet is transmitted
          unencrypted. For this reason, it is highly recommended to enable SSH on
          devices for secure remote access. It is possible to configure a Cisco
          device to support SSH using four steps, as shown in the figure.
        </p>
        <p dir="ltr">
          Step 1. Ensure that the router has a unique hostname, and then configure
          the IP domain name of the network using the ip domain-name command in
          global configuration mode.
        </p>
        <p dir="ltr">
          Step 2. One-way secret keys must be generated for a router to encrypt SSH
          traffic. To generate the SSH key, use the crypto key generate rsa
          general-keys command in global configuration mode. The specific meaning of
          the various parts of this command are complex and out of scope for this
          course. Just note that the modulus determines the size of the key and can
          be configured from 360 bits to 2048 bits. The larger the modulus, the more
          secure the key, but the longer it takes to encrypt and decrypt information.
          The minimum recommended modulus length is 1024 bits.
        </p>
        <p dir="ltr">
          Step 3. Create a local database username entry using the username global
          configuration command.
        </p>
        <p dir="ltr">
          Step 4. Enable inbound SSH sessions using the line vty commands login local
          and transport input ssh.
        </p>
        <p dir="ltr">
          The router can now be remotely accessed only by using SSH.
        </p>
        <p dir="ltr">
          ipv6 unicast-routing
        </p>
        <br />
        <p dir="ltr">
          Komutatora virutālā saskarne(switch virtual interfaces (SVIs)). Šīs ir
          virtuālās saskarnes, jo te nav nekāda fiziska aparatūra, kas ir saistīta ar
          iekārtu. SVI ir izveidota programmatūrā. Virtuālā saskarne nodrošina
          iespēju attālināti pārvaldīt komutatoru caur tīklu izmantojot IPv4. Katrs
          komutators nāk ar vienu SVI, kurš parādās noklusējuma konfigurācijā
          "out-of-the-box." Noklusējuma SVI ir “interface VLAN1”.
        </p>
        <p dir="ltr">
          Lai komutatoru varētu konfigurēt attālināti, SVI vajag konfigurēt IP adresi
          un tīkla masku. Lai konfigurētu Svi uz komutatora vajag izmantot Global
          config komandu “interface vlan 1”, vlan 1 nav fiziska saskarne, bet gan
          virtuāla. Nākamais vajag pieškirt IPv4 adresi izmantojot komandu “ip
          address 10.0.69.2 255.255.255.0”, beigās, pielietot virtuālo saskarni
          izmantojot “no shutdown” komandu. Izskatās aptuveni šādi:
        </p>
        <p dir="ltr">
          • Mainis(config)#interface vlan 1
        </p>
        <p dir="ltr">
          • Mainis(config-if)#ip address 10.0.69.2 255.255.255.0
        </p>
        <p dir="ltr">
          • Mainis(config-if)#no shutdown
        </p>
        <p dir="ltr">
          Var izmantot Privileged EXEC režīma komandu “show ip interface brief”, lai
          apskatītu komutatora saskarnes.
        </p>
        <p dir="ltr">
          Command Promptā var izmantot komandu “ping 192.168.19.3”, lai pārbaudītu
          vai var kaut kā savienoties ar konkrētām iekārtām, u.c. Ar Ctrl+C var
          apstādināt ping pieprasījumus. Ja īstajā dzīve var no viena datora uz otru
          pingot, bet no otra nevar uz pirmo, tad tam gan jau ir aktivizēta Windows
          Firewall, kas noklusēti aizliedz ping.
        </p>
        <br />
        <p dir="ltr">
          1. Laboratorijas darbs
        </p>
        <p dir="ltr">
          Komandas
        </p>
        <p dir="ltr">
          Switch&gt;enable
        </p>
        <p dir="ltr">
          Switch#conf t
        </p>
        <p dir="ltr">
          Switch(config)#hostname Mainis
        </p>
        <p dir="ltr">
          Mainis(config)#line console 0
        </p>
        <p dir="ltr">
          Mainis(config-line)#password cisco
        </p>
        <p dir="ltr">
          Mainis(config-line)#login
        </p>
        <p dir="ltr">
          Mainis(config-line)#exit
        </p>
        <p dir="ltr">
          Mainis(config)#banner motd # Sveiki, ievadi paroli! #
        </p>
        <p dir="ltr">
          Mainis(config)#interface vlan 1
        </p>
        <p dir="ltr">
          Mainis(config-if)#ip adress 10.0.69.2 255.255.255.0
        </p>
        <p dir="ltr">
          Mainis(config-if)#no shutdown
        </p>
        <br />
        <div dir="ltr" align="left">
          <table>
            <colgroup>
              <col width={114} />
              <col width={134} />
              <col width={130} />
              <col width={247} />
            </colgroup>
            <tbody>
              <tr>
                <td>
                  <p dir="ltr">
                    Command Mode
                  </p>
                </td>
                <td>
                  <p dir="ltr">
                    Access Method
                  </p>
                </td>
                <td>
                  <p dir="ltr">
                    Prompt
                  </p>
                </td>
                <td>
                  <p dir="ltr">
                    Exit Method
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p dir="ltr">
                    User EXEC
                  </p>
                </td>
                <td>
                  <p dir="ltr">
                    Log in.
                  </p>
                </td>
                <td>
                  <p dir="ltr">
                    Router&gt;
                  </p>
                </td>
                <td>
                  <p dir="ltr">
                    Use the logout command.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p dir="ltr">
                    Privileged EXEC
                  </p>
                </td>
                <td>
                  <p dir="ltr">
                    From user EXEC mode, use the enable EXEC command.
                  </p>
                </td>
                <td>
                  <p dir="ltr">
                    Router#
                  </p>
                </td>
                <td>
                  <p dir="ltr">
                    To return to user EXEC mode, use the disable command.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p dir="ltr">
                    Global configuration
                  </p>
                </td>
                <td>
                  <p dir="ltr">
                    From privileged EXEC mode, use the configure terminal
                    privileged EXEC command.
                  </p>
                </td>
                <td>
                  <p dir="ltr">
                    Router(config)#
                  </p>
                </td>
                <td>
                  <p dir="ltr">
                    To return to privileged EXEC mode from global
                    configuration mode, use the exit or endcommand, or
                    press Ctrl-Z.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p dir="ltr">
                    Interface configuration
                  </p>
                </td>
                <td>
                  <p dir="ltr">
                    From global configuration mode, specify an interface
                    using an interface command.
                  </p>
                </td>
                <td>
                  <p dir="ltr">
                    Router(configif)#
                  </p>
                </td>
                <td>
                  <p dir="ltr">
                    To return to global configuration mode, use the exit
                    command. To return to privileged EXEC mode, use the end
                    command, or atbilstību noteiktām prasībām. Kategorijas
                    numurējas no 1 līdz 7 (līdz šim), un var press Ctrl-Z.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p dir="ltr">
                    ROM monitor
                  </p>
                </td>
                <td>
                  <p dir="ltr">
                    From privileged EXEC mode, use the reload EXEC command.
                    Press the Break key during the first 60 seconds while
                    the system is booting.
                  </p>
                </td>
                <td>
                  <p dir="ltr">
                    &gt;
                  </p>
                </td>
                <td>
                  <p dir="ltr">
                    To exit ROM monitor mode, use the continue command.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p dir="ltr">
          <img src="https://lh5.googleusercontent.com/ojvK2ivFlBvUu7eithIXe7tVk1hkAa-lqyY-TqZsVnoaZeSWW68Ty-yers_YWpkArVmbJ7O6LQCG5BW9H-8L9sYWHpW_Sr64s9E3PIjW5GW40zWDfJu_oT_MW_cUL_SizQnPRc8" width={318} height={185} />
        </p>
    </div>
  );
}

export default Osi;
