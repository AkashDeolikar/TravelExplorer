import { Routes } from '@angular/router';
import { ExploreComponent } from './components/explore/explore';
import { BookingComponent } from './components/booking/booking';
import { LoginComponent } from './components/login/login';
import { RegisterComponent } from './components/register/register';
import { HomeComponent } from './pages/home/home';
import { ExplorePageComponent } from './pages/explore/explore';
import { AboutComponent } from './pages/about/about';
import { ExploreNorthComponent } from './pages/explorenorth/explorenorth';
import { ExploreSouthComponent } from './pages/exploresouth/exploresouth';
import { ExploreEastComponent } from './pages/exploreeast/exploreeast';
import { ExploreWestComponent } from './pages/explorewest/explorewest';
import { PlaceDetailsComponent } from './components/place-details/place-details';
import { ContactComponent } from './pages/contact/contact';
import { GuideComponent } from './components/guide/guide';
import { DestinationGuideComponent } from './pages/destination/destination';
import { StatePageComponent } from './pages/statepage/statepage';
import { DawarComponent } from './pages/slide/dawar/dawar';
import { SarmoliComponent } from './pages/slide/sarmoli/sarmoli';
import { ReiekComponent } from './pages/slide/reiek/reiek';
import { MadlaComponent } from './pages/slide/madla/madla';
import { KanthalloorComponent } from './pages/slide/kanthalloor/kanthalloor';
import { FooterComponent } from './components/footer/footer';
import { KhajjiarComponent } from './pages/slide/khajjiar/khajjiar';
import { PlacePageComponent } from './pages/page/place-page/place-page';
import { AgartalaComponent } from './pages/exploredestini/agartala/agartala';
import { MechukaComponent } from './pages/exploredestini/Mechuka/mechuka';
import { ZiroComponent } from './pages/exploredestini/ziro/ziro';
import { AmritsarComponent } from './pages/exploredestini/Amritsar/amritsar';
import { DelhiComponent } from './pages/exploredestini/Delhi/delhi';
import { LehComponent } from './pages/exploredestini/Leh/leh';
import { SrinagarComponent } from './pages/exploredestini/Srinagar/srinagar';
import { ManaliComponent } from './pages/exploredestini/Manali/manali';
import { ChandigarhComponent } from './pages/exploredestini/Chandigarh/chandigarh';
import { GurugramComponent } from './pages/exploredestini/Gurugram/gurugram';
import { UdaipurComponent } from './pages/exploredestini/Udaipur/udaipur';
import { HaridwarComponent } from './pages/exploredestini/Haridwar/haridwar';
import { VaranasiComponent } from './pages/exploredestini/Varanasi/varanasi';
import { GoaComponent } from './pages/exploredestini/Goa/goa';
import { MumbaiComponent } from './pages/exploredestini/Mumbai/mumbai';
import { DwarkaComponent } from './pages/exploredestini/Dwarka/dwarka';
import { HyderabadComponent } from './pages/exploredestini/Hyderabad/hyderabad';
import { KochiComponent } from './pages/exploredestini/Kochi/kochi';
import { GuwahatiComponent } from './pages/exploredestini/Guwahati/guwahati';
import { GangtokComponent } from './pages/exploredestini/Gangtok/gangtok';
import { DelhiAttractComponent } from './pages/attractionpages/delhi';
import { NohkalikaiFallsComponent } from './pages/attractionpages/nohkalikai-falls';
import { CheraiBeachComponent } from './pages/attractionpages/cherai-beach';
import { FrenchQuarterComponent } from './pages/attractionpages/french-quarter';
import { CharminarComponent } from './pages/attractionpages/charminar';
import { GatewayOfIndiaComponent } from './pages/attractionpages/gateway-of-india';
import { TajMahalComponent } from './pages/attractionpages/taj-mahal';
import { HampiTemplesComponent } from './pages/attractionpages/hampi-temples';
import { AmberFortComponent } from './pages/attractionpages/amber-fort';
import { AlleppeyBackwatersComponent } from './pages/attractionpages/alleppey-backwaters';
import { QutubMinarComponent } from './pages/attractionpages/qutub-minar';
import { VaranasiGhatsComponent } from './pages/attractionpages/varanasi-ghats';
import { LehPangongComponent } from './pages/attractionpages/leh-pangong-tso';
import { SundarbansComponent } from './pages/attractionpages/sundarbans';
import { KonarkSunTempleComponent } from './pages/attractionpages/konark-sun-temple';
import { MysorePalaceComponent } from './pages/attractionpages/mysore-palace';
import { DwarkadhishTempleComponent } from './pages/attractionpages/dwarkadhish-temple';
import { GoldenTempleComponent } from './pages/attractionpages/golden-temple';
import { TulipGardenComponent } from './pages/attractionpages/tulip-garden';
import { RohtangPassComponent } from './pages/attractionpages/rohtang-pass';
import { RockGardenComponent } from './pages/attractionpages/rock-garden';
import { BrahmaSarowarComponent } from './pages/attractionpages/brahma-sarowar';
import { HawaMahalComponent } from './pages/attractionpages/hawa-mahal';
import { ChidiyaTapuComponent } from './pages/attractionpages/chidiya-tapu';
import { VictoriaMemorialComponent } from './pages/attractionpages/victoria-memorial';
import { MahabodhiTempleComponent } from './pages/attractionpages/mahabodhi-temple';
import { AnjunaBeachComponent } from './pages/attractionpages/anjuna-beach';
import { NaidaCavesComponent } from './pages/attractionpages/naida-caves';
import { vivekanandComponent } from './pages/attractionpages/vivekananda-sarowar';
import { VirupakshaTempleComponent } from './pages/attractionpages/virupaksha-temple';
import { BalajiTempleComponent } from './pages/attractionpages/balaji-temple';
import { ChamundiTempleComponent } from './pages/attractionpages/chamundi-temple';
import { KamakhyaTempleComponent } from './pages/attractionpages/kamakhya-temple';
import { ShoreTempleComponent } from './pages/attractionpages/shore-temple';
import { JagannathTempleComponent } from './pages/attractionpages/jagannath-temple';
import { BangaramIslandComponent } from './pages/attractionpages/bangaram-island';
import { DzukouValleyComponent } from './pages/attractionpages/dzukou-valley';
import { KanglaFortComponent } from './pages/attractionpages/kangla-fort';
import { AipanComponent } from './pages/craft/aipanart';
import { PauncheiComponent } from './pages/craft/arunachal-paunchei';
import { KhatwaComponent } from './pages/craft/bihar-khatwa';
import { MugaSilkComponent } from './pages/craft/assam-muga-silk';
import { PhulkariComponent } from './pages/craft/punjab-phulkari';
import { WarliComponent } from './pages/craft/maharashtra-warli';
import { KathputliComponent } from './pages/craft/rajasthan-kathputli';
import { FiligreeComponent } from './pages/craft/filigree';
import { ZardoziComponent } from './pages/craft/zardozi';
import { SantipurSareeComponent } from './pages/craft/santiporesaree';
import { DurgiStoneComponent } from './pages/craft/durgistone';
import { WalnutWoodComponent } from './pages/craft/j&k';
import { BastarDhokraComponent } from './pages/craft/bastardhokra';
import { PatanPatolaComponent } from './pages/craft/patanpatola';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'booking', component: BookingComponent },
  {
    path: 'destination/:id', loadComponent: () =>
      import('./pages/destination/destination').then(m => m.DestinationGuideComponent)
  },
  { path: 'destination', component: DestinationGuideComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'guide', component: GuideComponent },
  { path: 'place/:id', component: PlacePageComponent },
  { path: 'state/:name', component: StatePageComponent },

  // Explore routes
  { path: 'explore', component: ExplorePageComponent },
  { path: 'explore/:state', component: ExplorePageComponent },
  { path: 'explorenorth', component: ExploreNorthComponent },
  { path: 'exploresouth', component: ExploreSouthComponent },
  { path: 'exploreeast', component: ExploreEastComponent },
  { path: 'explorewest', component: ExploreWestComponent },

  //Attraction
  { path: 'getdelhi', component: DelhiAttractComponent },
  { path: 'getnohlikaifall', component: NohkalikaiFallsComponent},
  { path: 'getcheraibeach', component: CheraiBeachComponent },
  { path: 'getthefrenchquarter', component: FrenchQuarterComponent },
  { path: 'getcharminar', component: CharminarComponent },
  { path: 'getgatewayofindia', component: GatewayOfIndiaComponent },
  { path: 'gettajmahal', component: TajMahalComponent },
  { path: 'gethampitemples', component: HampiTemplesComponent },
  { path: 'getamberfort', component: AmberFortComponent },
  { path: 'getalleppeybackwaters', component: AlleppeyBackwatersComponent },
  { path: 'getqutubminar', component: QutubMinarComponent },
  { path: 'getvaranasighats', component: VaranasiGhatsComponent },
  { path: 'getleh', component: LehPangongComponent },
  { path: 'getsundarbans', component: SundarbansComponent },
  { path: 'getkonark', component: KonarkSunTempleComponent },
  { path: 'getmysore', component: MysorePalaceComponent },
  { path: 'getdwarkadhish', component: DwarkadhishTempleComponent },
  { path: 'getgoldentemple', component: GoldenTempleComponent },
  { path: 'gettulipgarden', component: TulipGardenComponent },
  { path: 'getrohtangpass', component: RohtangPassComponent },
  { path: 'getrockgarden', component: RockGardenComponent },
  { path: 'getbrahmasarowar', component: BrahmaSarowarComponent },
  { path: 'gethawamahal', component: HawaMahalComponent },
  { path: 'getchidiyatapu', component: ChidiyaTapuComponent },
  { path: 'getvictoriamemorial', component: VictoriaMemorialComponent },
  { path: 'getmahabodhitemple', component: MahabodhiTempleComponent },
  { path: 'getanjunabeach', component: AnjunaBeachComponent },
  { path: 'getnaidacaves', component: NaidaCavesComponent },
  { path: 'getvivekanandsarowar', component: vivekanandComponent },
  { path: 'getvirupaksha', component: VirupakshaTempleComponent },
  { path: 'getbalaji', component: BalajiTempleComponent },
  { path: 'getchamundi', component: ChamundiTempleComponent },
  { path: 'getkamakhya', component: KamakhyaTempleComponent },
  { path: 'getshore', component: ShoreTempleComponent },
  { path: 'getjagannath', component: JagannathTempleComponent },
  { path: 'getbangaram', component: BangaramIslandComponent },
  { path: 'getdzukouvalley', component: DzukouValleyComponent },
  { path: 'getkanglafort', component: KanglaFortComponent },

  //
  { path: 'explorekhajjiar', component: KhajjiarComponent },
  { path: 'exploredawar', component: DawarComponent },
  { path: 'exploresarmoli', component: SarmoliComponent },
  { path: 'explorereiek', component: ReiekComponent },
  { path: 'exploremadla', component: MadlaComponent },
  { path: 'explorekanthalloor', component: KanthalloorComponent },

  { path: 'getaipan', component: AipanComponent },
  { path: 'getpaunchei', component: PauncheiComponent },
  { path: 'getkhatwa', component: KhatwaComponent },
  { path: 'getmugasilk', component: MugaSilkComponent },
  { path: 'getphulkri', component: PhulkariComponent },
  { path: 'getwarli', component: WarliComponent },
  { path: 'getkathputlis', component: KathputliComponent },
  { path: 'getfiligree', component: FiligreeComponent },
  { path: 'getzardozi', component: ZardoziComponent },
  { path: 'getsaree', component: SantipurSareeComponent },
  { path: 'getdurgistone', component: DurgiStoneComponent },
  { path: 'getwalnutwood', component: WalnutWoodComponent },
  { path: 'getbastardhokra', component: BastarDhokraComponent },
  { path: 'getpatanpatola', component: PatanPatolaComponent },
  
  {
    path: 'exploredestini/agartala',
    loadComponent: () =>
      import('./pages/exploredestini/agartala/agartala').then((m) => m.AgartalaComponent),
  },
  { path: 'exploredestini/mechuka', component: MechukaComponent},
  { path: 'exploredestini/ziro', component: ZiroComponent },
  { path: 'exploredestini/amritsar', component: AmritsarComponent },
  { path: 'exploredestini/delhi', component: DelhiComponent },
  { path: 'exploredestini/leh', component: LehComponent },
  { path: 'exploredestini/srinagar', component: SrinagarComponent },
  { path: 'exploredestini/manali' ,component: ManaliComponent },
  { path: 'exploredestini/chandigarh', component: ChandigarhComponent },
  { path: 'exploredestini/gurugram', component: GurugramComponent },
  { path: 'exploredestini/udaipur', component: UdaipurComponent },
  { path: 'exploredestini/haridwar', component: HaridwarComponent },
  { path: 'exploredestini/varanasi', component: VaranasiComponent },
  { path: 'exploredestini/goa' , component: GoaComponent },
  { path: 'exploredestini/mumbai', component: MumbaiComponent },
  { path: 'exploredestini/dwarka', component: DwarkaComponent },
  { path: 'exploredestini/hyderabad' , component: HyderabadComponent },
  { path: 'exploredestini/kochi', component: KochiComponent },
  { path: 'exploredestini/guwahati', component: GuwahatiComponent },
  { path: 'exploredestini/gangtok', component: GangtokComponent },

  // Generated destination pages
  // { path: 'placepage', component: PlacePageComponent },
  // {
  //   path: 'place/auli',
  //   loadComponent: () =>
  //     import('./pages/destinations/auli/auli').then((m) => m.AuliPage),
  // },
  // {
  //   path: 'place/khajjiar',
  //   loadComponent: () =>
  //     import('./pages/destinations/khajjiar/khajjiar').then(
  //       (m) => m.KhajjiarPage
  //     ),
  // },
  // {
  //   path: 'place/madla',
  //   loadComponent: () =>
  //     import('./pages/destinations/madla/madla').then((m) => m.MadlaPage),
  // },
  // {
  //   path: 'place/tawang',
  //   loadComponent: () =>
  //     import('./pages/destinations/tawang/tawang').then((m) => m.TawangPage),
  // },
  // {
  //   path: 'place/ziro-valley',
  //   loadComponent: () =>
  //     import('./pages/destinations/ziro-valley/ziro-valley').then(
  //       (m) => m.ZiroValleyPage
  //     ),
  // },
  // {
  //   path: 'place/spiti-valley',
  //   loadComponent: () =>
  //     import('./pages/destinations/spiti-valley/spiti-valley').then(
  //       (m) => m.SpitiValleyPage
  //     ),
  // },
  // {
  //   path: 'place/leh-pangong',
  //   loadComponent: () =>
  //     import('./pages/destinations/leh-pangong/leh-pangong').then(
  //       (m) => m.LehPangongPage
  //     ),
  // },
  // {
  //   path: 'place/udaipur',
  //   loadComponent: () =>
  //     import('./pages/destinations/udaipur/udaipur').then(
  //       (m) => m.UdaipurPage
  //     ),
  // },
  // {
  //   path: 'place/coorg',
  //   loadComponent: () =>
  //     import('./pages/destinations/coorg/coorg').then((m) => m.CoorgPage),
  // },
  // {
  //   path: 'place/hampi',
  //   loadComponent: () =>
  //     import('./pages/destinations/hampi/hampi').then((m) => m.HampiPage),
  // },
  // {
  //   path: 'place/majuli',
  //   loadComponent: () =>
  //     import('./pages/destinations/majuli/majuli').then((m) => m.MajuliPage),
  // },
  // {
  //   path: 'place/andaman-havelock',
  //   loadComponent: () =>
  //     import('./pages/destinations/andaman-havelock/andaman-havelock').then(
  //       (m) => m.AndamanHavelockPage
  //     ),
  // },
  // {
  //   path: 'place/kutch-white-desert',
  //   loadComponent: () =>
  //     import('./pages/destinations/kutch-white-desert/kutch-white-desert').then(
  //       (m) => m.KutchWhiteDesertPage
  //     ),
  // },
  // {
  //   path: 'place/pachmarhi',
  //   loadComponent: () =>
  //     import('./pages/destinations/pachmarhi/pachmarhi').then(
  //       (m) => m.PachmarhiPage
  //     ),
  // },
  // {
  //   path: 'place/kanha',
  //   loadComponent: () =>
  //     import('./pages/destinations/kanha/kanha').then((m) => m.KanhaPage),
  // },
  // {
  //   path: 'place/wayanad',
  //   loadComponent: () =>
  //     import('./pages/destinations/wayanad/wayanad').then(
  //       (m) => m.WayanadPage
  //     ),
  // },
  // {
  //   path: 'place/cherrapunji',
  //   loadComponent: () =>
  //     import('./pages/destinations/cherrapunji/cherrapunji').then(
  //       (m) => m.CherrapunjiPage
  //     ),
  // },
  // {
  //   path: 'place/gangtok',
  //   loadComponent: () =>
  //     import('./pages/destinations/gangtok/gangtok').then(
  //       (m) => m.GangtokPage
  //     ),
  // },
  // {
  //   path: 'place/lakshadweep',
  //   loadComponent: () =>
  //     import('./pages/destinations/lakshadweep/lakshadweep').then(
  //       (m) => m.LakshadweepPage
  //     ),
  // },

  { path: 'footer', component: FooterComponent },

  // Wildcard fallback
  { path: '**', redirectTo: '/login' },


];
