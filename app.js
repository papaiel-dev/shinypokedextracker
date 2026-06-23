function scrollToTop(){
 window.scrollTo({top:0,behavior:'smooth'});
}

const pokemon=['Bulbasaur','Ivysaur','Venusaur','Charmander','Charmeleon','Charizard','Squirtle','Wartortle','Blastoise','Caterpie','Metapod','Butterfree','Weedle','Kakuna','Beedrill','Pidgey','Pidgeotto','Pidgeot','Rattata','Raticate','Spearow','Fearow','Ekans','Arbok','Pikachu','Raichu','Sandshrew','Sandslash','Nidoran','Nidorina','Nidoqueen','Nidoran','Nidorino','Nidoking','Clefairy','Clefable','Vulpix','Ninetales','Jigglypuff','Wigglytuff','Zubat','Golbat','Oddish','Gloom','Vileplume','Paras','Parasect','Venonat','Venomoth','Diglett','Dugtrio','Meowth','Persian','Psyduck','Golduck','Mankey','Primeape','Growlithe','Arcanine','Poliwag','Poliwhirl','Poliwrath','Abra','Kadabra','Alakazam','Machop','Machoke','Machamp','Bellsprout','Weepinbell','Victreebel','Tentacool','Tentacruel','Geodude','Graveler','Golem','Ponyta','Rapidash','Slowpoke','Slowbro','Magnemite','Magneton',"Farfetch'd",'Doduo','Dodrio','Seel','Dewgong','Grimer','Muk','Shellder','Cloyster','Gastly','Haunter','Gengar','Onix','Drowzee','Hypno','Krabby','Kingler','Voltorb','Electrode','Exeggcute','Exeggutor','Cubone','Marowak','Hitmonlee','Hitmonchan','Lickitung','Koffing','Weezing','Rhyhorn','Rhydon','Chansey','Tangela','Kangaskhan','Horsea','Seadra','Goldeen','Seaking','Staryu','Starmie','Mr. Mime','Scyther','Jynx','Electabuzz','Magmar','Pinsir','Tauros','Magikarp','Gyarados','Lapras','Ditto','Eevee','Vaporeon','Jolteon','Flareon','Porygon','Omanyte','Omastar','Kabuto','Kabutops','Aerodactyl','Snorlax','Articuno','Zapdos','Moltres','Dratini','Dragonair','Dragonite','Mewtwo','Mew','Chikorita','Bayleef','Meganium','Cyndaquil','Quilava','Typhlosion','Totodile','Croconaw','Feraligatr','Sentret','Furret','Hoothoot','Noctowl','Ledyba','Ledian','Spinarak','Ariados','Crobat','Chinchou','Lanturn','Pichu','Cleffa','Igglybuff','Togepi','Togetic','Natu','Xatu','Mareep','Flaaffy','Ampharos','Bellossom','Marill','Azumarill','Sudowoodo','Politoed','Hoppip','Skiploom','Jumpluff','Aipom','Sunkern','Sunflora','Yanma','Wooper','Quagsire','Espeon','Umbreon','Murkrow','Slowking','Misdreavus','Unown','Wobbuffet','Girafarig','Pineco','Forretress','Dunsparce','Gligar','Steelix','Snubbull','Granbull','Qwilfish','Scizor','Shuckle','Heracross','Sneasel','Teddiursa','Ursaring','Slugma','Magcargo','Swinub','Piloswine','Corsola','Remoraid','Octillery','Delibird','Mantine','Skarmory','Houndour','Houndoom','Kingdra','Phanpy','Donphan','Porygon2','Stantler','Smeargle','Tyrogue','Hitmontop','Smoochum','Elekid','Magby','Miltank','Blissey','Raikou','Entei','Suicune','Larvitar','Pupitar','Tyranitar','Lugia','Ho-oh','Celebi','Treecko','Grovyle','Sceptile','Torchic','Combusken','Blaziken','Mudkip','Marshtomp','Swampert','Poochyena','Mightyena','Zigzagoon','Linoone','Wurmple','Silcoon','Beautifly','Cascoon','Dustox','Lotad','Lombre','Ludicolo','Seedot','Nuzleaf','Shiftry','Taillow','Swellow','Wingull','Pelipper','Ralts','Kirlia','Gardevoir','Surskit','Masquerain','Shroomish','Breloom','Slakoth','Vigoroth','Slaking','Nincada','Ninjask','Shedinja','Whismur','Loudred','Exploud','Makuhita','Hariyama','Azurill','Nosepass','Skitty','Delcatty','Sableye','Mawile','Aron','Lairon','Aggron','Meditite','Medicham','Electrike','Manectric','Plusle','Minun','Volbeat','Illumise','Roselia','Gulpin','Swalot','Carvanha','Sharpedo','Wailmer','Wailord','Numel','Camerupt','Torkoal','Spoink','Grumpig','Spinda','Trapinch','Vibrava','Flygon','Cacnea','Cacturne','Swablu','Altaria','Zangoose','Seviper','Lunatone','Solrock','Barboach','Whiscash','Corphish','Crawdaunt','Baltoy','Claydol','Lileep','Cradily','Anorith','Armaldo','Feebas','Milotic','Castform','Kecleon','Shuppet','Banette','Duskull','Dusclops','Tropius','Chimecho','Absol','Wynaut','Snorunt','Glalie','Spheal','Sealeo','Walrein','Clamperl','Huntail','Gorebyss','Relicanth','Luvdisc','Bagon','Shelgon','Salamence','Beldum','Metang','Metagross','Regirock','Regice','Registeel','Latias','Latios','Kyogre','Groudon','Rayquaza','Jirachi','Deoxys','Turtwig','Grotle','Torterra','Chimchar','Monferno','Infernape','Piplup','Prinplup','Empoleon','Starly','Staravia','Staraptor','Bidoof','Bibarel','Kricketot','Kricketune','Shinx','Luxio','Luxray','Budew','Roserade','Cranidos','Rampardos','Shieldon','Bastiodon','Burmy','Wormadam','Mothim','Combee','Vespiquen','Pachirisu','Buizel','Floatzel','Cherubi','Cherrim','Shellos','Gastrodon','Ambipom','Drifloon','Drifblim','Buneary','Lopunny','Mismagius','Honchkrow','Glameow','Purugly','Chingling','Stunky','Skuntank','Bronzor','Bronzong','Bonsly','Mime Jr.','Happiny','Chatot','Spiritomb','Gible','Gabite','Garchomp','Munchlax','Riolu','Lucario','Hippopotas','Hippowdon','Skorupi','Drapion','Croagunk','Toxicroak','Carnivine','Finneon','Lumineon','Mantyke','Snover','Abomasnow','Weavile','Magnezone','Lickilicky','Rhyperior','Tangrowth','Electivire','Magmortar','Togekiss','Yanmega','Leafeon','Glaceon','Gliscor','Mamoswine','Porygon-Z','Gallade','Probopass','Dusknoir','Froslass','Rotom','Uxie','Mesprit','Azelf','Dialga','Palkia','Heatran','Regigigas','Giratina','Cresselia','Phione','Manaphy','Darkrai','Shaymin','Arceus','Victini','Snivy','Servine','Serperior','Tepig','Pignite','Emboar','Oshawott','Dewott','Samurott','Patrat','Watchog','Lillipup','Herdier','Stoutland','Purrloin','Liepard','Pansage','Simisage','Pansear','Simisear','Panpour','Simipour','Munna','Musharna','Pidove','Tranquill','Unfezant','Blitzle','Zebstrika','Roggenrola','Boldore','Gigalith','Woobat','Swoobat','Drilbur','Excadrill','Audino','Timburr','Gurdurr','Conkeldurr','Tympole','Palpitoad','Seismitoad','Throh','Sawk','Sewaddle','Swadloon','Leavanny','Venipede','Whirlipede','Scolipede','Cottonee','Whimsicott','Petilil','Lilligant','Basculin','Sandile','Krokorok','Krookodile','Darumaka','Darmanitan','Maractus','Dwebble','Crustle','Scraggy','Scrafty','Sigilyph','Yamask','Cofagrigus','Tirtouga','Carracosta','Archen','Archeops','Trubbish','Garbodor','Zorua','Zoroark','Minccino','Cinccino','Gothita','Gothorita','Gothitelle','Solosis','Duosion','Reuniclus','Ducklett','Swanna','Vanillite','Vanillish','Vanilluxe','Deerling','Sawsbuck','Emolga','Karrablast','Escavalier','Foongus','Amoonguss','Frillish','Jellicent','Alomomola','Joltik','Galvantula','Ferroseed','Ferrothorn','Klink','Klang','Klinklang','Tynamo','Eelektrik','Eelektross','Elgyem','Beheeyem','Litwick','Lampent','Chandelure','Axew','Fraxure','Haxorus','Cubchoo','Beartic','Cryogonal','Shelmet','Accelgor','Stunfisk','Mienfoo','Mienshao','Druddigon','Golett','Golurk','Pawniard','Bisharp','Bouffalant','Rufflet','Braviary','Vullaby','Mandibuzz','Heatmor','Durant','Deino','Zweilous','Hydreigon','Larvesta','Volcarona','Cobalion','Terrakion','Virizion','Tornadus','Thundurus','Reshiram','Zekrom','Landorus','Kyurem','Keldeo','Meloetta','Genesect','Chespin','Quilladin','Chesnaught','Fennekin','Braixen','Delphox','Froakie','Frogadier','Greninja','Bunnelby','Diggersby','Fletchling','Fletchinder','Talonflame','Scatterbug','Spewpa','Vivillon','Litleo','Pyroar','Flabébé','Floette','Florges','Skiddo','Gogoat','Pancham','Pangoro','Furfrou','Espurr','Meowstic','Honedge','Doublade','Aegislash','Spritzee','Aromatisse','Swirlix','Slurpuff','Inkay','Malamar','Binacle','Barbaracle','Skrelp','Dragalge','Clauncher','Clawitzer','Helioptile','Heliolisk','Tyrunt','Tyrantrum','Amaura','Aurorus','Sylveon','Hawlucha','Dedenne','Carbink','Goomy','Sliggoo','Goodra','Klefki','Phantump','Trevenant','Pumpkaboo','Gourgeist','Bergmite','Avalugg','Noibat','Noivern','Xerneas','Yveltal','Zygarde50% Forme','Diancie','Hoopa','Volcanion','Rowlet','Dartrix','Decidueye','Litten','Torracat','Incineroar','Popplio','Brionne','Primarina','Pikipek','Trumbeak','Toucannon','Yungoos','Gumshoos','Grubbin','Charjabug','Vikavolt','Crabrawler','Crabominable','Oricorio','Cutiefly','Ribombee','Rockruff','Lycanroc','Wishiwashi','Mareanie','Toxapex','Mudbray','Mudsdale','Dewpider','Araquanid','Fomantis','Lurantis','Morelull','Shiinotic','Salandit','Salazzle','Stufful','Bewear','Bounsweet','Steenee','Tsareena','Comfey','Oranguru','Passimian','Wimpod','Golisopod','Sandygast','Palossand','Pyukumuku','Type: Null','Silvally','Minior','Komala','Turtonator','Togedemaru','Mimikyu','Bruxish','Drampa','Dhelmise','Jangmo-o','Hakamo-o','Kommo-o','Tapu Koko','Tapu Lele','Tapu Bulu','Tapu Fini','Cosmog','Cosmoem','Solgaleo','Lunala','Nihilego','Buzzwole','Pheromosa','Xurkitree','Celesteela','Kartana','Guzzlord','Necrozma','Magearna','Marshadow','Poipole','Naganadel','Stakataka','Blacephalon','Zeraora','Meltan','Melmetal','Grookey','Thwackey','Rillaboom','Scorbunny','Raboot','Cinderace','Sobble','Drizzile','Inteleon','Skwovet','Greedent','Rookidee','Corvisquire','Corviknight','Blipbug','Dottler','Orbeetle','Nickit','Thievul','Gossifleur','Eldegoss','Wooloo','Dubwool','Chewtle','Drednaw','Yamper','Boltund','Rolycoly','Carkol','Coalossal','Applin','Flapple','Appletun','Silicobra','Sandaconda','Cramorant','Arrokuda','Barraskewda','Toxel','Toxtricity','Sizzlipede','Centiskorch','Clobbopus','Grapploct','Sinistea','Polteageist','Hatenna','Hattrem','Hatterene','Impidimp','Morgrem','Grimmsnarl','Obstagoon','Perrserker','Cursola',"Sirfetch'd",'Mr. Rime','Runerigus','Milcery','Alcremie','Falinks','Pincurchin','Snom','Frosmoth','Stonjourner','Eiscue','Indeedee','Morpeko','Cufant','Copperajah','Dracozolt','Arctozolt','Dracovish','Arctovish','Duraludon','Dreepy','Drakloak','Dragapult','Zacian','Zamazenta','Eternatus','Kubfu','Urshifu','Zarude','Regieleki','Regidrago','Glastrier','Spectrier','Calyrex','Wyrdeer','Kleavor','Ursaluna','Basculegion','Sneasler','Overqwil','Enamorus','Sprigatito','Floragato','Meowscarada','Fuecoco','Crocalor','Skeledirge','Quaxly','Quaxwell','Quaquaval','Lechonk','Oinkologne','Tarountula','Spidops','Nymble','Lokix','Pawmi','Pawmo','Pawmot','Tandemaus','Maushold','Fidough','Dachsbun','Smoliv','Dolliv','Arboliva','Squawkabilly','Nacli','Naclstack','Garganacl','Charcadet','Armarouge','Ceruledge','Tadbulb','Bellibolt','Wattrel','Kilowattrel','Maschiff','Mabosstiff','Shroodle','Grafaiai','Bramblin','Brambleghast','Toedscool','Toedscruel','Klawf','Capsakid','Scovillain','Rellor','Rabsca','Flittle','Espathra','Tinkatink','Tinkatuff','Tinkaton','Wiglett','Wugtrio','Bombirdier','Finizen','Palafin','Varoom','Revavroom','Cyclizar','Orthworm','Glimmet','Glimmora','Greavard','Houndstone','Flamigo','Cetoddle','Cetitan','Veluza','Dondozo','Tatsugiri','Annihilape','Clodsire','Farigiraf','Dudunsparce','Kingambit','Great Tusk','Scream Tail','Brute Bonnet','Flutter Mane','Slither Wing','Sandy Shocks','Iron Treads','Iron Bundle','Iron Hands','Iron Jugulis','Iron Moth','Iron Thorns','Frigibax','Arctibax','Baxcalibur','Gimmighoul','Gholdengo','Wo-Chien','Chien-Pao','Ting-Lu','Chi-Yu','Roaring Moon','Iron Valiant','Koraidon','Miraidon','Walking Wake','Iron Leaves','Dipplin','Poltchageist','Sinistcha','Okidogi','Munkidori','Fezandipiti','Ogerpon','Archaludon','Hydrapple','Gouging Fire','Raging Bolt','Iron Boulder','Iron Crown','Terapagos','Pecharunt'];
const targets=[2, 5, 8, 11, 14, 17, 19, 21, 23, 25, 27, 30, 33, 35, 37, 39, 41, 44, 46, 48, 50, 52, 54, 56, 58, 61, 64, 67, 70, 72, 75, 77, 79, 81, 82, 84, 86, 88, 90, 93, 94, 96, 98, 100, 102, 104, 105, 106, 107, 108, 110, 112, 113, 114, 115, 116, 118, 120, 121, 122, 123, 124, 125, 126, 127, 129, 130, 131, 132, 135, 136, 137, 139, 141, 142, 143, 144, 145, 146, 149, 150];


const regions={national:[1,1025],kanto:[1,151],johto:[152,251],hoenn:[252,386],sinnoh:[387,493],unova:[494,649],kalos:[650,721],alola:[722,809],galar:[810,905],paldea:[906,1025]};

const regionalTargets={
kanto:targets,
johto:[154,157,160,162,164,168,169,171,181,184,186,189,195,196,197,199,208,212,214,229,230,232,248,249,250,251].map(x=>x-1),
hoenn:[254,257,260,272,275,282,286,289,295,306,308,310,330,334,350,373,376,382,383,384,385].map(x=>x-1),
sinnoh:[389,392,395,405,407,445,448,460,461,462,463,464,468,470,471,472,473,475,477,478,483,484,487,493].map(x=>x-1),
unova:[497,500,503,526,530,534,542,545,553,560,571,573,576,579,612,635,637,643,644,646,649].map(x=>x-1),
kalos:[652,655,658,663,666,681,683,685,687,689,691,695,697,700,706,709,715,718,719,720,721].map(x=>x-1),
alola:[724,727,730,745,748,758,763,768,784,785,786,787,788,791,792,800,801,802,807,809].map(x=>x-1),
galar:[812,815,818,823,826,835,839,844,849,861,862,863,865,879,884,887,888,889,890,898].map(x=>x-1),
paldea:[908,911,914,930,934,937,959,960,964,970,977,979,980,981,983,987,988,989,990,991,992,993,994,995,1000,1007,1008,1024,1025].map(x=>x-1)
};

function currentRegion(){const v=document.getElementById('regionFilter'); return regions[v?v.value:'national'];}

let data=JSON.parse(localStorage.getItem('kantoHomeEdition')||'[]');
while(data.length<pokemon.length)data.push({have:false,shiny:false});

const sprite=(id,s)=>`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${s?'shiny/':''}${id}.png`;

function save(){localStorage.setItem('kantoHomeEdition',JSON.stringify(data));render();}
function toggleHave(i){data[i].have=!data[i].have;save();}
function toggleShiny(i){data[i].shiny=!data[i].shiny;if(data[i].shiny)data[i].have=true;save();}

function getNextHave(){
 const [start,end]=currentRegion();
 for(let i=start-1;i<end;i++){
   if(!data[i].have) return i;
 }
 return -1;
}
function getNextCollection(){
 const region=document.getElementById('regionFilter').value;
 const list=regionalTargets[region];
 if(list){
   for(let t of list){ if(!data[t].shiny) return t; }
   return -1;
 }
 for(let t of targets){ if(!data[t].shiny) return t; }
 return -1;
}

function markHaveTarget(){let i=getNextHave(); if(i>=0){data[i].have=true; save();}}
function markCollectionHave(){let i=getNextCollection(); if(i>=0){data[i].have=true; save();}}
function markCollectionShiny(){let i=getNextCollection(); if(i>=0){data[i].have=true; data[i].shiny=true; save();}}


function openSerebii(id){
 const dex=String(id).padStart(3,'0');
 window.open(`https://www.serebii.net/pokedex/${dex}.shtml`,'_blank');
}

function toggleSettings(){
document.getElementById('controlsMenu').classList.toggle('open');
}

function exportData(){
const blob=new Blob([JSON.stringify(data)],{type:'application/json'});
const a=document.createElement('a');
a.href=URL.createObjectURL(blob);
a.download='kanto-shiny-dex-backup.json';
a.click();
}
function importData(e){
const r=new FileReader();
r.onload=()=>{data=JSON.parse(r.result);save();};
r.readAsText(e.target.files[0]);
}

function render(){
const [start,end]=currentRegion();
const regionSize=end-start+1;
const regionData=data.slice(start-1,end);
const haveCount=regionData.filter(x=>x.have).length;
const shinyCount=regionData.filter(x=>x.shiny).length;
const collectionCount=(start===1&&end===151)
 ? targets.filter(t=>data[t].shiny).length
 : regionData.filter(x=>x.shiny).length;

const regionInfo=[['Kanto','kanto'],['Johto','johto'],['Hoenn','hoenn'],['Sinnoh','sinnoh'],['Unova','unova'],['Kalos','kalos'],['Alola','alola'],['Galar','galar'],['Paldea','paldea']];
regionProgress.innerHTML='<h3>🌎 Progresso por Região</h3>'+regionInfo.map(([label,key])=>{
const [rs,re]=regions[key];
const total=re-rs+1;
const owned=data.slice(rs-1,re).filter(x=>x.have).length;
const pct=(owned/total)*100;
return `<div class="region-row"><div class="region-name">${label}</div><div class="region-bar"><div class="region-fill" style="width:${pct}%"></div></div><div class="region-value">${owned}/${total}</div></div>`;
}).join('');

stats.innerHTML=`<h3>🏆 Progresso</h3>
<p>📦 Obtidos: ${haveCount}/${regionSize}</p>
<p>✨ Shinies: ${shinyCount}/${regionSize}</p>
<p>🎯 Coleção: ${collectionCount}/${(start===1&&end===151)?targets.length:regionSize}</p>`;
let nh=getNextHave();
haveText.textContent=nh>=0?`#${String(nh+1).padStart(3,'0')} ${pokemon[nh]}`:'Completo';
haveImg.src=nh>=0?sprite(nh+1,false):'';

let nc=getNextCollection();
shinyText.textContent=nc>=0?`#${String(nc+1).padStart(3,'0')} ${pokemon[nc]}`:'Coleção completa';
shinyImg.src=nc>=0?sprite(nc+1,true):'';

boxes.innerHTML='';
let s=document.getElementById('search').value.toLowerCase();
const firstBox=Math.floor((start-1)/30);
const lastBox=Math.floor((end-1)/30);
for(let b=firstBox;b<=lastBox;b++){
 let box=document.createElement('div');
 box.className='box';
 box.innerHTML='<h2>BOX '+(b+1)+'</h2>';
 let grid=document.createElement('div');
 grid.className='grid';
 for(let i=b*30;i<Math.min((b+1)*30,pokemon.length);i++){
  if(s && !pokemon[i].toLowerCase().includes(s)) continue;
  grid.innerHTML+=`<div class="slot ${data[i].have?'have':''} ${data[i].shiny?'shiny':''}">
  <img src="${sprite(i+1,data[i].shiny)}">
  <div>#${String(i+1).padStart(3,'0')}</div>
  <div>${pokemon[i]}</div>
  <button class="btn" onclick="toggleHave(${i})"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" width="16"></button>
  <button class="btn" onclick="toggleShiny(${i})">✨</button>
  </div>`;
 }
 box.appendChild(grid);
 boxes.appendChild(box);
}
}
render();
