/* ===== SONGS DATA ===== */
const songs = [
  { id:0, title:"Blinding Lights", artist:"The Weeknd", album:"After Hours", duration:"3:20", cover:"https://picsum.photos/seed/song1/300/300", src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", lyrics:`Ooh\nI've been tryna call\nI've been on my own for long enough\nMaybe you can show me how to love, maybe\n\nI'm going through withdrawals\nYou don't even have to do too much\nYou can turn me on with just a touch, baby\n\nI look around and\nSin City's cold and empty\nNo one's around to judge me\nI can't see clearly when you're gone\n\nI said, ooh, I'm blinded by the lights\nNo, I can't sleep until I feel your touch\nI said, ooh, I'm drowning in the night\nOh, when I'm like this, you're the one I trust` },
  { id:1, title:"Shape of You", artist:"Ed Sheeran", album:"÷ (Divide)", duration:"3:54", cover:"https://picsum.photos/seed/song2/300/300", src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", lyrics:`The club isn't the best place to find a lover\nSo the bar is where I go\nMe and my friends at the table doing shots\nDrinking faster and then we talk slow\n\nAnd you come over and start up a conversation with just me\nAnd trust me I'll give it a chance now\nTake my hand, stop, put Van the Man on the jukebox\nAnd then we start to dance, and now I'm singing like\n\nGirl, you know I want your love\nYour love was handmade for somebody like me\nCome on now, follow my lead\nI may be crazy, don't mind me\n\nSay, boy, let's not talk too much\nGrab on my waist and put that body on me\nCome on now, follow my lead\nCome, come on now, follow my lead` },
  { id:2, title:"Dance Monkey", artist:"Tones and I", album:"The Kids Are Coming", duration:"3:29", cover:"https://picsum.photos/seed/song3/300/300", src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", lyrics:`They say, oh my god I see the way you shine\nTake your hand, my dear, and place them both in mine\nYou know you stopped me dead while I was passing by\nAnd now I beg to see you dance just one more time\n\nOoh I see you, see you, see you every time\nAnd oh my I, I, I like your style\nYou, you make me, make me, make me wanna cry\nAnd now I beg to see you dance just one more time\n\nSo they say\nDance for me, dance for me, dance for me, oh, oh, oh\nI've never seen anybody do the things you do before\nThey say move for me, move for me, move for me, ay, ay, ay\nAnd when you're done I'll make you do it all again` },
  { id:3, title:"Rockstar", artist:"Post Malone ft. 21 Savage", album:"Beerbongs & Bentleys", duration:"3:38", cover:"https://picsum.photos/seed/song4/300/300", src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", lyrics:`Ayy, I've been fuckin' hoes and poppin' pillies\nMan, I feel just like a rockstar, ayy, ayy\nAll my brothers got that gas\nAnd they always be smokin' like a Rasta\nFuckin' with me, call up on a Uzi\nAnd show up, man them boys don't want no problem, ayy, ayy\nJealous 'cause I'm out here gettin' commas\nAyy, ayy, I'm like damn, it's hard at the top\n\nEvery day I'm on the grind, never give up\nThat's the motto, I'm that diamond in the rough\nI know, I know, I never fold up\nI'm on another level bro, they can't hold us\n\nI been in the hills fuckin' superstars\nFeelin' like a popstar\nDrinking Henny, bad bitches jumping off of stripper poles` },
  { id:4, title:"Levitating", artist:"Dua Lipa", album:"Future Nostalgia", duration:"3:23", cover:"https://picsum.photos/seed/song5/300/300", src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", lyrics:`If you wanna run away with me, I know a galaxy\nAnd I can take you for a ride\nI had a premonition that we fell into a rhythm\nWhere the music don't stop for life\n\nGlitter in the sky, glitter in my eyes\nShining just the way I like\nIf you're feeling like you need a little bit of company\nYou met me at the perfect time\n\nYou want me, I want you, baby\nMy sugarboo, I'm levitating\nThe Milky Way, we're renegading\nYeah, yeah, yeah, yeah, yeah\n\nI got you, moonlight, you're my starlight\nI need you all night, come on, dance with me\nI'm levitating` },
  { id:5, title:"Stay", artist:"Kid LAROI & Justin Bieber", album:"F*CK LOVE 3", duration:"2:21", cover:"https://picsum.photos/seed/song6/300/300", src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3", lyrics:`I do the same thing I told you that I never would\nI told you I'd change, even when I knew I never could\nI know that I can't find nobody else as good as you\nI need you to stay, need you to stay, hey\n\nI get drunk, wake up, I'm wasted still\nI realize the time that I wasted here\nI feel like you can't feel the way I feel\nOh, you're making it hard for me\n\nI look at her, she looks at me\nThat's how it used to be\nAll I wanted was to stay\nI wasn't ready for that day\n\nStay, I want you to stay\nStay, I want you to stay` },
  { id:6, title:"Peaches", artist:"Justin Bieber", album:"Justice", duration:"3:18", cover:"https://picsum.photos/seed/song7/300/300", src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3", lyrics:`I got my peaches out in Georgia, oh, yeah, shit\nI get my weed from California, that's that shit\nI took my chick up to the north, up north, yeah\nI took my time with her, I had to show her who I was\n\nLoving on your lips is all I wanna do\nLoving on your lips is all I know how to do\nAnd now I'm laying right beside you\nI need you near me\nI need your kisses, girl\n\nI got my peaches out in Georgia\nI get my weed from California\nI took my chick up to the north\nLoving on your lips is all I wanna do` },
  { id:7, title:"Good 4 U", artist:"Olivia Rodrigo", album:"SOUR", duration:"2:58", cover:"https://picsum.photos/seed/song8/300/300", src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3", lyrics:`Well, good for you, I guess you moved on really easily\nYou found a new girl and it only took a couple weeks\nRemember when you said that you wanted to give me the world?\nAnd good for you, I guess that you've been working on yourself\nI guess that therapist really helped\nRemember when you said that you wanted to give me the world?\n\nAnd good for you\nYou look happy and healthy, not me\nIf you ever cared to ask\nGood for you, you're doing great out there without me, baby\nGod, I wish that I could do that\n\nI've lost my mind, I've spent the night\nCrying on the floor of my bathroom\nBut you're so unaffected, I really don't get it\nBut I guess, good for you` },
  { id:8, title:"Bad Guy", artist:"Billie Eilish", album:"When We All Fall Asleep", duration:"3:14", cover:"https://picsum.photos/seed/song9/300/300", src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3", lyrics:`White shirt now red, my bloody nose\nSleeping, you're on your tippy toes\nCreeping around like no one knows\nThink you're so criminal\n\nBruises on both my knees for you\nDon't say thank you or please\nI do what I want when I'm wanting to\nMy soul? So cynical\n\nSo you're a tough guy\nLike it really rough guy\nJust can't get enough guy\nChest always so puffed guy\n\nI'm that bad type\nMake your mama sad type\nMight seduce your dad type\nI'm the bad guy, duh` },
  { id:9, title:"Watermelon Sugar", artist:"Harry Styles", album:"Fine Line", duration:"2:54", cover:"https://picsum.photos/seed/song10/300/300", src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3", lyrics:`Tastes like strawberries on a summer evening\nAnd it sounds just like a song\nI want more berries and that summer feeling\nIt's so wonderful and warm\n\nBreathe me in, breathe me out\nI don't know if I could ever go without\nI'm just thinking about it, I'm thinking about it\n\nWatermelon sugar high\nWatermelon sugar high\nWatermelon sugar high\nWatermelon sugar high\n\nI just wanna taste it\nI just wanna taste it\nWatermelon sugar high` },
  { id:10, title:"Tujhe Dekha Toh Yeh Jaana Sanam", artist:"Kumar Sanu & Lata Mangeshkar", album:"Dilwale Dulhania Le Jayenge (1995)", duration:"5:02", cover:"https://picsum.photos/seed/ddlj/300/300", src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3", lyrics:`Tujhe dekha toh yeh jaana sanam\nPyaar hota hai deewana sanam\nAb yahan se kahan jaayein hum\nTeri baahon mein mar jaayein hum\n\nAankhen meri sapne tere\nDil mera, yaadein teri\nO, mera hai kya sab kuch tera\nJaan teri, saansein teri\n\nMeri aankhon mein aansu tere aa gaye\nMuskuraane lage sab zamaane ke gham\nTujhe dekha toh yeh jaana sanam\nPyaar hota hai deewana sanam` },
  { id:11, title:"Dheere Dheere Se Meri Zindagi", artist:"Kumar Sanu & Anuradha Paudwal", album:"Aashiqui (1990)", duration:"5:30", cover:"https://picsum.photos/seed/aashiqui/300/300", src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3", lyrics:`Dheere dheere se meri zindagi mein aana\nDheere dheere se dil ko churana\nTum se pyaar hume hai kitna jaane jaana\nKhud kabhi paas baithke dekhna\n\nJab se dekha hai tumko humdum\nEk pal bhi chain na aaya hume\nHar taraf dekhein bas tera chehra\nDil pe aisa nasha chha gaya` },
  { id:12, title:"Pehla Nasha", artist:"Udit Narayan & Sadhana Sargam", album:"Jo Jeeta Wohi Sikandar (1992)", duration:"4:51", cover:"https://picsum.photos/seed/pehlanasha/300/300", src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3", lyrics:`Chaahe tum kuch na kaho maine sun liya\nKi saathi pyaar ka mujhe chun liya\nChun liya, maine sun liya\n\nPehla nasha, pehla khumaar\nNaya pyaar hai, naya intezaar\nKar loon main kya apna haal\nAye dil-e-bekaraar, mere dil-e-bekaraar\nTu hi bata\n\nUdta hi phiroon in hawaaon mein kahin\nYa main jhool jaaoon in ghataaon mein kahin` },
  { id:13, title:"Tip Tip Barsa Paani", artist:"Udit Narayan & Alka Yagnik", album:"Mohra (1994)", duration:"5:58", cover:"https://picsum.photos/seed/tiptip/300/300", src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3", lyrics:`Tip-tip barsa paani, paani ne aag lagayi\nAag lagi dil mein toh dil ko teri yaad aayi\nTeri yaad aayi toh jal utha mera bheega badan\nAb tum hi batao sajan hum kya karein\n\nDuur badi kulhad se chhalak gayi pyaali\nKaale kaale badalon ne kar diya kamaal\nTip tip barsa paani, paani ne aag lagayi` },
  { id:14, title:"Chura Ke Dil Mera", artist:"Kumar Sanu & Alka Yagnik", album:"Main Khiladi Tu Anari (1994)", duration:"4:38", cover:"https://picsum.photos/seed/churake/300/300", src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3", lyrics:`Chura ke dil mera goriya chali\nUda ke nindiyaan kahan tu chali\nPaagal hua deewana hua\nAashiqui mein teri yeh aalam hua\n\nO, chura ke dil tera chali main chali\nMujhe kya pata kahan main chali\nManzil meri bas tu hi tu\nTere bina ab jeena nahi` },
  { id:15, title:"Mera Dil Bhi Kitna Pagal Hai", artist:"Kumar Sanu & Alka Yagnik", album:"Saajan (1991)", duration:"5:25", cover:"https://picsum.photos/seed/saajan/300/300", src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3", lyrics:`Mera dil bhi kitna paagal hai\nYeh pyaar toh tum se karta hai\nPar saamne jab tum aate ho\nKuch bhi kehne se darta hai\n\nO mere saajan, o mere saajan\nSaajan saajan, mere saajan\nKitni dafaa aayi yeh baat zubaan tak\nKeh na saka tujhko main haal-e-dil apna` },
  { id:16, title:"Kuch Kuch Hota Hai", artist:"Udit Narayan & Alka Yagnik", album:"Kuch Kuch Hota Hai (1998)", duration:"4:56", cover:"https://picsum.photos/seed/kkhh/300/300", src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", lyrics:`Tum paas aaye, yoon muskuraaye\nTumne na jaane kya sapne dikhaaye\nAb toh mera dil, jaage na sota hai\nKya karoon haaye, kuch kuch hota hai\n\nNa jaane kaisa ehsaas hai\nBujhti nahi hai, kya pyaas hai\nKya nasha is pyaar ka\nMujhpe sanam chhaane laga` },
  { id:17, title:"Dil To Pagal Hai", artist:"Lata Mangeshkar & Udit Narayan", album:"Dil To Pagal Hai (1997)", duration:"5:38", cover:"https://picsum.photos/seed/dtph/300/300", src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", lyrics:`Dil to pagal hai, dil deewana hai\nPehli pehli baar milata hai yehi\nSeene mein aag lagata hai\nDheere dheere pyaar sikhata hai yehi\n\nSaari saari raat jagaata hai yehi\nAnjaani si pyaas jagata hai yehi\nDil to pagal hai, dil deewana hai` },
  { id:18, title:"Bahon Ke Darmiyan", artist:"Hariharan & Alka Yagnik", album:"Khamoshi: The Musical (1996)", duration:"6:49", cover:"https://picsum.photos/seed/khamoshi/300/300", src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", lyrics:`Baahon ke darmiyaan do pyaar mil rahe hain\nJaane kya bole mann dole sunke jhum raha hai\nKhamoshi bhi gunj rahi hai, pyaar ka saaz baje\nAasmaan jhook raha hai zameen par aaj\n\nKhulte band hote labon ki yeh daastaan\nKeh rahi hai humse ki ab dooriyan mitaa` },
  { id:19, title:"Chand Chhupa Badal Mein", artist:"Udit Narayan & Alka Yagnik", album:"Hum Dil De Chuke Sanam (1999)", duration:"5:46", cover:"https://picsum.photos/seed/hddcs/300/300", src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", lyrics:`Chaand chhupa baadal mein, sharma ke meri jaana\nSeene se lag ja tu, balkhake meri jaana\nGumsum sa hai, gupchup sa hai, madhosh hai khamosh hai\nYeh samaa, haan yeh samaa kuch aur hai\n\nNazrein chura ke tu parde mein na baith\nAa ja sanam meri baahon mein lipat` },
];

/* ===== STATE ===== */
let currentIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;
let isMuted = false;
let isLiked = false;
let likedSongs = new Set();
let queue = [];
let sleepTimerId = null;
let sleepEndTime = null;
let sleepInterval = null;
let ctxTargetIndex = -1;
let isDark = true;

/* ===== DOM ===== */
const audio = document.getElementById("audioPlayer");
const playIcon = document.getElementById("playIcon");
const progressFill = document.getElementById("progressFill");
const currentTimeEl = document.getElementById("currentTime");
const totalTimeEl = document.getElementById("totalTime");
const volumeBar = document.getElementById("volumeBar");
const volumeIcon = document.getElementById("volumeIcon");
const playerCover = document.getElementById("playerCover");
const playerTitle = document.getElementById("playerTitle");
const playerArtist = document.getElementById("playerArtist");
const shuffleBtn = document.getElementById("shuffleBtn");
const repeatBtn = document.getElementById("repeatBtn");
const likeBtn = document.getElementById("likeBtn");
const toastContainer = document.getElementById("toastContainer");
const contextMenu = document.getElementById("contextMenu");
const visualizerCanvas = document.getElementById("visualizer");
const ctx2d = visualizerCanvas.getContext("2d");

/* ===========================
   VIEW SWITCHING
=========================== */
function showView(viewName, navEl) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  const view = document.getElementById(viewName + "View");
  if (view) view.classList.add("active");

  document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
  if (navEl) navEl.classList.add("active");

  // Scroll to top
  document.querySelector(".main-content").scrollTop = 0;

  // Refresh views
  if (viewName === "liked") renderLiked();
  if (viewName === "queue") renderQueue();
  if (viewName === "library") renderLibrary();
  if (viewName === "lyrics") updateLyrics();
  return false;
}

/* ===========================
   RENDER FUNCTIONS
=========================== */

function renderRetroCards() {
  const grid = document.getElementById("retroCards");
  if (!grid) return;
  grid.innerHTML = "";
  const retroSongs = songs.filter(s => s.id >= 10);
  retroSongs.forEach((song) => {
    const globalIdx = songs.findIndex(x => x.id === song.id);
    const card = document.createElement("div");
    card.className = "playlist-card";
    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="${song.cover}" alt="${song.title}"/>
        <button class="card-play-btn" onclick="event.stopPropagation();playSong(${globalIdx})"><i class="fas fa-play"></i></button>
      </div>
      <p class="card-name">${song.title}</p>
      <p class="card-desc">${song.artist}</p>
    `;
    card.onclick = () => playSong(globalIdx);
    grid.appendChild(card);
  });
}

function renderHomeCards() {
  const grid = document.getElementById("homeCards");
  grid.innerHTML = "";
  songs.slice(0,5).forEach((song, i) => {
    const card = document.createElement("div");
    card.className = "playlist-card";
    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="${song.cover}" alt="${song.title}"/>
        <button class="card-play-btn" onclick="event.stopPropagation();playSong(${i})"><i class="fas fa-play"></i></button>
      </div>
      <p class="card-name">${song.title}</p>
      <p class="card-desc">${song.artist}</p>
    `;
    card.onclick = () => playSong(i);
    grid.appendChild(card);
  });
}

function renderSongTable(tbodyId, songList, indexMap) {
  const tbody = document.getElementById(tbodyId);
  tbody.innerHTML = "";
  songList.forEach((song, i) => {
    const globalIndex = indexMap ? indexMap[i] : i;
    const isActive = globalIndex === currentIndex;
    const tr = document.createElement("tr");
    tr.className = "song-row" + (isActive ? " active-song" : "");
    tr.onclick = () => playSong(globalIndex);
    tr.addEventListener("contextmenu", (e) => openContextMenu(e, globalIndex));
    tr.innerHTML = `
      <td class="song-num">
        <span class="num-text">${isActive && isPlaying
          ? `<span class="eq-bars"><span class="eq-bar"></span><span class="eq-bar"></span><span class="eq-bar"></span></span>`
          : i + 1}
        </span>
        <span class="play-icon-cell"><i class="fas fa-${isActive && isPlaying ? "pause" : "play"}"></i></span>
      </td>
      <td>
        <div class="song-info">
          <img src="${song.cover}" class="song-cover" alt="${song.title}"/>
          <div class="song-details">
            <div class="title">${song.title}</div>
            <div class="artist">${song.artist}</div>
          </div>
        </div>
      </td>
      <td class="song-album">${song.album}</td>
      <td class="song-duration">${song.duration}</td>
    `;
    tbody.appendChild(tr);
  });
}

function renderAll() {
  renderSongTable("homeSongList", songs, null);
  renderLibrary();
  renderLiked();
  renderQueue();
  renderHomeCards();
  renderRetroCards();
}

function renderLibrary() {
  renderSongTable("librarySongList", songs, null);
  document.getElementById("libCount").textContent = songs.length + " songs";
}

function renderLiked() {
  const likedArr = songs.filter(s => likedSongs.has(s.id));
  const indexMap = likedArr.map(s => songs.findIndex(x => x.id === s.id));
  renderSongTable("likedSongList", likedArr, indexMap);
  const count = likedSongs.size;
  document.getElementById("likedCount").textContent = count + " song" + (count !== 1 ? "s" : "");
  document.getElementById("likedEmpty").style.display = count === 0 ? "block" : "none";
  document.getElementById("likedTableWrap").style.display = count === 0 ? "none" : "table";
}

function renderQueue() {
  const nowPlaying = document.getElementById("queueNowPlaying");
  const queueListEl = document.getElementById("queueList");
  const queueEmpty = document.getElementById("queueEmpty");
  const song = songs[currentIndex];
  nowPlaying.innerHTML = `
    <div class="queue-item" onclick="playSong(${currentIndex})">
      <img src="${song.cover}" alt="${song.title}"/>
      <div class="queue-item-info">
        <div class="q-title" style="color:var(--green)">${song.title}</div>
        <div class="q-artist">${song.artist}</div>
      </div>
      <span style="color:var(--green);font-size:12px;margin-left:auto;padding:4px 8px">▶ Playing</span>
    </div>
  `;
  queueListEl.innerHTML = "";
  if (queue.length === 0) {
    // Show upcoming songs
    const upcoming = [];
    let next = (currentIndex + 1) % songs.length;
    for (let i = 0; i < 5; i++) {
      upcoming.push({ song: songs[next], globalIndex: next });
      next = (next + 1) % songs.length;
    }
    upcoming.forEach(({ song, globalIndex }) => {
      const item = createQueueItem(song, globalIndex, false);
      queueListEl.appendChild(item);
    });
  } else {
    queue.forEach((globalIndex, qi) => {
      const item = createQueueItem(songs[globalIndex], globalIndex, true, qi);
      queueListEl.appendChild(item);
    });
  }
  queueEmpty.style.display = "none";
}

function createQueueItem(song, globalIndex, canRemove, queueIdx) {
  const div = document.createElement("div");
  div.className = "queue-item";
  div.innerHTML = `
    <img src="${song.cover}" alt="${song.title}"/>
    <div class="queue-item-info">
      <div class="q-title">${song.title}</div>
      <div class="q-artist">${song.artist}</div>
    </div>
    ${canRemove ? `<button class="q-remove" onclick="event.stopPropagation();removeFromQueue(${queueIdx})"><i class="fas fa-times"></i></button>` : ""}
  `;
  div.onclick = () => playSong(globalIndex);
  return div;
}

function clearQueue() {
  queue = [];
  renderQueue();
  showToast("Queue cleared!", "info");
}

function removeFromQueue(qi) {
  queue.splice(qi, 1);
  renderQueue();
}

/* ===========================
   PLAY SONG
=========================== */
function playSong(index) {
  currentIndex = index;
  const song = songs[index];
  audio.src = song.src;
  audio.play().catch(() => {});
  isPlaying = true;
  updatePlayerUI(song);
  updatePlayIcon();
  renderAll();
  updateLyrics();
  showToast(`🎵 Now Playing: ${song.title}`, "success");
}

function updatePlayerUI(song) {
  playerCover.src = song.cover;
  playerTitle.textContent = song.title;
  playerArtist.textContent = song.artist;
  document.title = `${song.title} • ${song.artist} | Spotify`;
  // Update liked btn
  likeBtn.className = "like-btn" + (likedSongs.has(song.id) ? " liked" : "");
  likeBtn.innerHTML = likedSongs.has(song.id) ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>';
}

/* ===========================
   PLAY / PAUSE
=========================== */
function togglePlay() {
  if (!audio.src || audio.src === window.location.href) { playSong(0); return; }
  if (isPlaying) { audio.pause(); } else { audio.play().catch(() => {}); }
  isPlaying = !isPlaying;
  updatePlayIcon();
  renderAll();
}

function updatePlayIcon() {
  playIcon.className = isPlaying ? "fas fa-pause" : "fas fa-play";
}

/* ===========================
   NEXT / PREV
=========================== */
function nextSong() {
  if (queue.length > 0) { playSong(queue.shift()); return; }
  if (isShuffle) {
    let rand; do { rand = Math.floor(Math.random() * songs.length); } while (rand === currentIndex && songs.length > 1);
    playSong(rand);
  } else {
    playSong((currentIndex + 1) % songs.length);
  }
}

function prevSong() {
  if (audio.currentTime > 3) { audio.currentTime = 0; return; }
  playSong((currentIndex - 1 + songs.length) % songs.length);
}

/* ===========================
   SHUFFLE / REPEAT
=========================== */
function toggleShuffle() {
  isShuffle = !isShuffle;
  shuffleBtn.classList.toggle("active", isShuffle);
  showToast(isShuffle ? "Shuffle ON 🔀" : "Shuffle OFF", "info");
}

function toggleRepeat() {
  isRepeat = !isRepeat;
  repeatBtn.classList.toggle("active", isRepeat);
  showToast(isRepeat ? "Repeat ON 🔁" : "Repeat OFF", "info");
}

/* ===========================
   LIKE
=========================== */
function toggleLike() {
  const song = songs[currentIndex];
  if (likedSongs.has(song.id)) {
    likedSongs.delete(song.id);
    likeBtn.className = "like-btn";
    likeBtn.innerHTML = '<i class="far fa-heart"></i>';
    showToast(`Removed from Liked Songs`, "info");
  } else {
    likedSongs.add(song.id);
    likeBtn.className = "like-btn liked";
    likeBtn.innerHTML = '<i class="fas fa-heart"></i>';
    showToast(`❤️ Added to Liked Songs!`, "success");
  }
  renderAll();
}

function playLiked() {
  const likedArr = songs.filter(s => likedSongs.has(s.id));
  if (likedArr.length === 0) { showToast("Koi liked songs nahi hai!", "error"); return; }
  const idx = songs.findIndex(s => s.id === likedArr[0].id);
  playSong(idx);
}

function shuffleLiked() {
  const likedArr = songs.filter(s => likedSongs.has(s.id));
  if (likedArr.length === 0) { showToast("Koi liked songs nahi hai!", "error"); return; }
  const rand = likedArr[Math.floor(Math.random() * likedArr.length)];
  const idx = songs.findIndex(s => s.id === rand.id);
  isShuffle = true; shuffleBtn.classList.add("active");
  playSong(idx);
}

/* ===========================
   VOLUME
=========================== */
function changeVolume(val) {
  audio.volume = val / 100;
  volumeBar.style.setProperty("--vol", val + "%");
  if (val == 0) volumeIcon.className = "fas fa-volume-mute";
  else if (val < 50) volumeIcon.className = "fas fa-volume-down";
  else volumeIcon.className = "fas fa-volume-up";
  isMuted = val == 0;
}

let prevVol = 70;
function toggleMute() {
  if (isMuted) {
    audio.volume = prevVol / 100;
    volumeBar.value = prevVol;
    changeVolume(prevVol);
  } else {
    prevVol = parseInt(volumeBar.value);
    volumeBar.value = 0;
    changeVolume(0);
  }
  isMuted = !isMuted;
}

/* ===========================
   PROGRESS BAR
=========================== */
function formatTime(s) {
  if (!s || isNaN(s)) return "0:00";
  return `${Math.floor(s/60)}:${Math.floor(s%60).toString().padStart(2,"0")}`;
}

audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;
  const pct = (audio.currentTime / audio.duration) * 100;
  progressFill.style.width = pct + "%";
  currentTimeEl.textContent = formatTime(audio.currentTime);
  totalTimeEl.textContent = formatTime(audio.duration);
  updateLyricsHighlight();
});

audio.addEventListener("ended", () => {
  if (isRepeat) { audio.currentTime = 0; audio.play(); }
  else nextSong();
});

function seekClick(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  const pct = (e.clientX - rect.left) / rect.width;
  if (audio.duration) audio.currentTime = pct * audio.duration;
}

/* ===========================
   SEARCH
=========================== */
function handleSearch(query) {
  const resultsEl = document.getElementById("searchResults");
  if (!query.trim()) {
    resultsEl.innerHTML = `<div class="search-hint"><i class="fas fa-search fa-3x"></i><p>Search karo koi bhi song, artist ya album!</p></div>`;
    return;
  }
  const q = query.toLowerCase();
  const filtered = songs.map((s, i) => ({ ...s, globalIndex: i }))
    .filter(s => s.title.toLowerCase().includes(q) || s.artist.toLowerCase().includes(q) || s.album.toLowerCase().includes(q));

  if (filtered.length === 0) {
    resultsEl.innerHTML = `<div class="search-hint"><i class="fas fa-search fa-3x"></i><p>"${query}" nahi mila 😔</p></div>`;
    return;
  }
  resultsEl.innerHTML = `
    <div class="search-results-title">"${query}" ke results (${filtered.length})</div>
    <table class="songs-table">
      <thead><tr><th>#</th><th>Title</th><th>Album</th><th><i class="fas fa-clock"></i></th></tr></thead>
      <tbody id="searchSongList"></tbody>
    </table>
  `;
  renderSongTable("searchSongList", filtered, filtered.map(s => s.globalIndex));
}

/* ===========================
   TOAST NOTIFICATIONS
=========================== */
function showToast(msg, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  const icon = type === "success" ? "✅" : type === "error" ? "❌" : "ℹ️";
  toast.innerHTML = `<span>${icon}</span><span>${msg}</span>`;
  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("hiding");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

/* ===========================
   CONTEXT MENU
=========================== */
function openContextMenu(e, index) {
  e.preventDefault();
  ctxTargetIndex = index;
  contextMenu.style.left = Math.min(e.clientX, window.innerWidth - 200) + "px";
  contextMenu.style.top = Math.min(e.clientY, window.innerHeight - 200) + "px";
  contextMenu.classList.add("show");
}

document.addEventListener("click", () => contextMenu.classList.remove("show"));

function ctxPlay() { if (ctxTargetIndex >= 0) playSong(ctxTargetIndex); }
function ctxAddQueue() {
  if (ctxTargetIndex >= 0) {
    queue.push(ctxTargetIndex);
    showToast(`Added to queue: ${songs[ctxTargetIndex].title}`, "success");
    renderQueue();
  }
}
function ctxLike() {
  if (ctxTargetIndex >= 0) {
    const song = songs[ctxTargetIndex];
    likedSongs.add(song.id);
    showToast(`❤️ Liked: ${song.title}`, "success");
    renderAll();
  }
}
function ctxShare() {
  const song = songs[ctxTargetIndex];
  if (navigator.clipboard) navigator.clipboard.writeText(`Now listening: ${song.title} by ${song.artist}`);
  showToast("Song link copied! 🔗", "info");
}
function ctxInfo() {
  if (ctxTargetIndex < 0) return;
  const song = songs[ctxTargetIndex];
  document.getElementById("infoModalBody").innerHTML = `
    <img src="${song.cover}" class="info-cover" alt="${song.title}"/>
    <div class="info-row"><span class="info-label">Title</span><span class="info-value">${song.title}</span></div>
    <div class="info-row"><span class="info-label">Artist</span><span class="info-value">${song.artist}</span></div>
    <div class="info-row"><span class="info-label">Album</span><span class="info-value">${song.album}</span></div>
    <div class="info-row"><span class="info-label">Duration</span><span class="info-value">${song.duration}</span></div>
    <div class="info-row"><span class="info-label">Liked</span><span class="info-value">${likedSongs.has(song.id) ? "❤️ Yes" : "🤍 No"}</span></div>
  `;
  document.getElementById("infoModal").classList.add("show");
}
function closeInfoModal() { document.getElementById("infoModal").classList.remove("show"); }

/* ===========================
   SLEEP TIMER
=========================== */
function openSleepModal() { document.getElementById("sleepModal").classList.add("show"); }
function closeSleepModal() { document.getElementById("sleepModal").classList.remove("show"); }

function setSleepTimer(minutes) {
  if (sleepTimerId) clearTimeout(sleepTimerId);
  if (sleepInterval) clearInterval(sleepInterval);
  const ms = minutes * 60 * 1000;
  sleepEndTime = Date.now() + ms;
  sleepTimerId = setTimeout(() => {
    audio.pause(); isPlaying = false; updatePlayIcon();
    showToast("💤 Sleep Timer: Music stopped!", "info");
    clearTimerUI(); renderAll();
  }, ms);
  startTimerCountdown();
  showToast(`⏱ Sleep timer set: ${minutes} min`, "success");
  document.getElementById("timerBadge").style.display = "inline";
  document.getElementById("timerBadge").textContent = minutes + "m";
  closeSleepModal();
}

function setCustomTimer() {
  const val = parseInt(document.getElementById("customMinutes").value);
  if (!val || val < 1) { showToast("Valid minutes daalo!", "error"); return; }
  setSleepTimer(val);
}

function startTimerCountdown() {
  const statusEl = document.getElementById("timerStatus");
  const cancelBtn = document.getElementById("cancelTimerBtn");
  statusEl.style.display = "block";
  cancelBtn.style.display = "flex";
  sleepInterval = setInterval(() => {
    const remaining = sleepEndTime - Date.now();
    if (remaining <= 0) { clearInterval(sleepInterval); return; }
    const m = Math.floor(remaining / 60000);
    const s = Math.floor((remaining % 60000) / 1000);
    statusEl.textContent = `⏱ Music stops in: ${m}:${s.toString().padStart(2,"0")}`;
    document.getElementById("timerBadge").textContent = `${m}m ${s}s`;
  }, 1000);
}

function cancelSleepTimer() {
  if (sleepTimerId) clearTimeout(sleepTimerId);
  if (sleepInterval) clearInterval(sleepInterval);
  sleepTimerId = null; sleepEndTime = null;
  clearTimerUI();
  showToast("Sleep timer cancelled!", "info");
  closeSleepModal();
}

function clearTimerUI() {
  document.getElementById("timerStatus").style.display = "none";
  document.getElementById("cancelTimerBtn").style.display = "none";
  document.getElementById("timerBadge").style.display = "none";
}

/* ===========================
   THEME TOGGLE
=========================== */
function toggleTheme() {
  isDark = !isDark;
  document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  document.getElementById("themeIcon").className = isDark ? "fas fa-moon" : "fas fa-sun";
  document.getElementById("themeLabel").textContent = isDark ? "Dark Mode" : "Light Mode";
  showToast(isDark ? "🌙 Dark Mode ON" : "☀️ Light Mode ON", "info");
}

/* ===========================
   LYRICS
=========================== */
function updateLyrics() {
  const song = songs[currentIndex];
  document.getElementById("lyricsCover").src = song.cover;
  document.getElementById("lyricsTitle").textContent = song.title;
  document.getElementById("lyricsArtist").textContent = song.artist;
  const lyricsBox = document.getElementById("lyricsBox");
  const lines = song.lyrics.split("\n");
  lyricsBox.innerHTML = lines.map((line, i) =>
    `<p class="lyric-line" data-index="${i}">${line || "&nbsp;"}</p>`
  ).join("");
}

function updateLyricsHighlight() {
  if (!audio.duration) return;
  const lines = document.querySelectorAll(".lyric-line");
  if (!lines.length) return;
  const pct = audio.currentTime / audio.duration;
  const activeIdx = Math.floor(pct * lines.length);
  lines.forEach((l, i) => {
    l.classList.toggle("active-line", i === activeIdx);
  });
  // Scroll active line into view
  const activeLine = lines[activeIdx];
  if (activeLine && document.getElementById("lyricsView").classList.contains("active")) {
    activeLine.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

/* ===========================
   VISUALIZER (Canvas)
=========================== */
let analyser, dataArray, source, audioCtx;
let visualizerRunning = false;
let animFrame;
const BAR_COUNT = 20;

function initVisualizer() {
  // Using simulated visualizer to avoid CORS issues with audio
  simulateVisualizer();
}

function drawVisualizer() {
  // Not used - using simulated visualizer
}

function simulateVisualizer() {
  animFrame = requestAnimationFrame(simulateVisualizer);
  const fakeData = new Uint8Array(BAR_COUNT);
  for (let i = 0; i < BAR_COUNT; i++) {
    fakeData[i] = isPlaying ? Math.random() * 180 + 20 : 10;
  }
  drawBars(fakeData);
}

function drawBars(data) {
  const W = visualizerCanvas.width, H = visualizerCanvas.height;
  ctx2d.clearRect(0, 0, W, H);
  const barW = W / BAR_COUNT - 1;
  for (let i = 0; i < BAR_COUNT; i++) {
    const val = (data[i] || 0) / 255;
    const barH = val * H;
    const gradient = ctx2d.createLinearGradient(0, H - barH, 0, H);
    gradient.addColorStop(0, "#1db954");
    gradient.addColorStop(1, "#0a7a35");
    ctx2d.fillStyle = isPlaying ? gradient : "#333";
    ctx2d.beginPath();
    ctx2d.roundRect(i * (barW + 1), H - barH, barW, barH, 2);
    ctx2d.fill();
  }
}

/* ===========================
   KEYBOARD SHORTCUTS
=========================== */
document.addEventListener("keydown", e => {
  if (e.target.tagName === "INPUT") return;
  if (e.code === "Space") { e.preventDefault(); togglePlay(); }
  else if (e.code === "ArrowRight") nextSong();
  else if (e.code === "ArrowLeft") prevSong();
  else if (e.code === "ArrowUp") { const v = Math.min(100, +volumeBar.value + 10); volumeBar.value = v; changeVolume(v); }
  else if (e.code === "ArrowDown") { const v = Math.max(0, +volumeBar.value - 10); volumeBar.value = v; changeVolume(v); }
  else if (e.key === "m" || e.key === "M") toggleMute();
  else if (e.key === "l" || e.key === "L") toggleLike();
  else if (e.key === "s" || e.key === "S") toggleShuffle();
});

/* ===========================
   CLOSE MODALS ON BACKDROP
=========================== */
document.querySelectorAll(".modal-overlay").forEach(overlay => {
  overlay.addEventListener("click", e => {
    if (e.target === overlay) {
      overlay.classList.remove("show");
    }
  });
});

/* ===========================
   INIT
=========================== */
audio.volume = 0.7;
changeVolume(70);

// First song in player
const first = songs[0];
playerCover.src = first.cover;
playerTitle.textContent = first.title;
playerArtist.textContent = first.artist;
audio.src = first.src;

// Start visualizer (simulated until user clicks play)
simulateVisualizer();

// Render all
renderAll();
updateLyrics();

// When user first clicks play, resume audio context if needed
audio.addEventListener("play", () => {
  if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
}, { once: false });

// Show keyboard shortcut hint
setTimeout(() => showToast("⌨️ Shortcuts: Space=Play, ←→=Skip, L=Like, S=Shuffle", "info"), 1500);