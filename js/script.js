const videos = {
    aerial: [
        {
            id: "EmGVsProeXc",
            theme: "mountain",
            tagKey: "tagMountain",
            titleKey: "dolomitesTitle",
            descKey: "dolomitesDesc"
        },
        {
            id: "AS1op2gW7kg",
            theme: "town",
            tagKey: "tagTown",
            titleKey: "limoneTitle",
            descKey: "limoneDesc"
        },
        {
            id: "B1v-HRNH8OM",
            theme: "sea",
            tagKey: "tagSea",
            titleKey: "sardegnaTitle",
            descKey: "sardegnaDesc"
        },
        {
            id: "JCszJfAKEII",
            theme: "mountain",
            tagKey: "tagMountain",
            titleKey: "fertazzaTitle",
            descKey: "fertazzaDesc"
        },
        {
            id: "Ppbfqa0Msrw",
            theme: "mountain",
            tagKey: "tagMountain",
            titleKey: "brusagoTitle",
            descKey: "brusagoDesc"
        },
        {
            id: "ksH4jtXGFac",
            theme: "town",
            tagKey: "tagTown",
            titleKey: "abbadiaTitle",
            descKey: "abbadiaDesc"
        },
        {
            id: "KvVVLjbIt2k",
            theme: "town",
            tagKey: "tagTown",
            titleKey: "leccoTitle",
            descKey: "leccoDesc"
        },
        {
            id: "P_YhU5D_0pY",
            theme: "town",
            tagKey: "tagTown",
            titleKey: "molvenoTitle",
            descKey: "molvenoDesc"
        },
        {
            id: "jOd_yJVEe2g",
            theme: "sea",
            tagKey: "tagSea",
            titleKey: "girgoluTitle",
            descKey: "girgoluDesc"
        },
        {
            id: "99PYyXH7J2w",
            theme: "sea",
            tagKey: "tagSea",
            titleKey: "brandinchiTitle",
            descKey: "brandinchiDesc"
        },
        {
            id: "2e4GKbHVo6o",
            theme: "sea",
            tagKey: "tagSea",
            titleKey: "luImpostuTitle",
            descKey: "luImpostuDesc"
        }
    ],
    hiking: [
        {
            id: "HuCWuio_JzE",
            theme: "hiking",
            tagKey: "tagAlps",
            titleKey: "mottaroneTitle",
            descKey: "mottaroneDesc"
        },
        {
            id: "GEl4-18nQHs",
            theme: "hiking",
            tagKey: "tagHiking",
            titleKey: "lakeTitle",
            descKey: "lakeDesc"
        },
        {
            id: "yihydhdQK1o",
            theme: "hiking",
            tagKey: "tagExplore",
            titleKey: "grignaTitle",
            descKey: "grignaDesc",
            coverUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Grigna%20aerial%201.jpg"
        },
        {
            id: "cJ_l6ufn6QE",
            theme: "hiking",
            tagKey: "tagMountain",
            titleKey: "senalesTitle",
            descKey: "senalesDesc"
        },
        {
            id: "MffpwJRyt-I",
            theme: "hiking",
            tagKey: "tagHiking",
            titleKey: "erveTitle",
            descKey: "erveDesc",
            coverUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Beata_Vergine_di_Lourdes_%28Erve%29_01.jpg"
        }
    ],
    ski: [
        {
            id: "Wb0od3_Dpb0",
            theme: "ski",
            tagKey: "tagSki",
            titleKey: "kronplatzTitle",
            descKey: "kronplatzDesc",
            coverUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Praeparierte%20Skipiste.jpg"
        },
        {
            id: "Zfs3iO6YhjQ",
            theme: "ski",
            tagKey: "tagSki",
            titleKey: "cerviniaTitle",
            descKey: "cerviniaDesc",
            coverUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Matterhorn%20from%20Breuil-Cervinia.jpg"
        },
        {
            id: "-A3xT7hDOww",
            theme: "ski",
            tagKey: "tagSnowboard",
            titleKey: "paganellaTitle",
            descKey: "paganellaDesc",
            coverUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Andalo%20ski%20-%20View%20from%20Rifugio%20Paganela%202%20-%20panoramio.jpg"
        },
        {
            id: "nwp1zsLRYho",
            theme: "ski",
            tagKey: "tagSki",
            titleKey: "livignoTitle",
            descKey: "livignoDesc",
            coverUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Livigno%27s_ski_slope_%2813335023544%29.jpg"
        },
        {
            id: "oWH8nqVePg8",
            theme: "ski",
            tagKey: "tagSki",
            titleKey: "portesTitle",
            descKey: "portesDesc",
            coverUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Avoriaz%20-%20panoramio%20%281%29.jpg"
        },
        {
            id: "_u7XJScXw6E",
            theme: "ski",
            tagKey: "tagSki",
            titleKey: "bobbioTitle",
            descKey: "bobbioDesc"
        },
        {
            id: "iW5li9_jY8U",
            theme: "ski",
            tagKey: "tagSki",
            titleKey: "bobbioVlogTitle",
            descKey: "bobbioVlogDesc"
        }
    ]
};

const spotlightIds = ["EmGVsProeXc", "B1v-HRNH8OM", "cJ_l6ufn6QE", "Ppbfqa0Msrw", "AS1op2gW7kg", "99PYyXH7J2w"];

const musicTracks = [
    {
        id: "wake",
        artist: "Avicii",
        title: "Wake Me Up",
        spotifyId: "2WQPQezYWzlJlQtuGL0rgS"
    },
    {
        id: "nights",
        artist: "Avicii",
        title: "The Nights",
        spotifyId: "0ct6r3EGTcMLPtrXHDvVjc"
    },
    {
        id: "viva",
        artist: "Coldplay",
        title: "Viva La Vida",
        spotifyId: "6iO1ifqpQHRvK6WVwzpIjt"
    },
    {
        id: "heaven",
        artist: "Avicii",
        title: "Heaven",
        spotifyId: "0vrmHPfoBadXVr2n0m1aqZ"
    }
];

const sectionMaps = {
    aerial: {
        titleKey: "aerialMapTitle",
        introKey: "aerialMapIntro",
        mapQuery: "Dolomites Lake Garda Lake Como Molveno Sardinia Italy",
        bounds: { latMin: 40.6, latMax: 46.8, lngMin: 8.9, lngMax: 12.3 },
        locations: [
            { name: "Passo Oclini", lat: 46.35, lng: 11.43 },
            { name: "Cima Fertazza", lat: 46.47, lng: 12.02 },
            { name: "Brusago", lat: 46.13, lng: 11.25 },
            { name: "Limone sul Garda", lat: 45.81, lng: 10.79 },
            { name: "Lecco", lat: 45.85, lng: 9.39 },
            { name: "Abbadia Lariana", lat: 45.9, lng: 9.33 },
            { name: "Molveno", lat: 46.14, lng: 10.96 },
            { name: "Cala Girgolu", lat: 40.87, lng: 9.7 },
            { name: "Cala Brandinchi", lat: 40.83, lng: 9.71 },
            { name: "Lu Impostu", lat: 40.82, lng: 9.69 }
        ]
    },
    hiking: {
        titleKey: "hikingMapTitle",
        introKey: "hikingMapIntro",
        mapQuery: "Mottarone Grigna Val Senales Erve Italy",
        bounds: { latMin: 45.65, latMax: 46.85, lngMin: 8.25, lngMax: 11.05 },
        locations: [
            { name: "Mottarone", lat: 45.88, lng: 8.45 },
            { name: "Lake Como", lat: 46.02, lng: 9.26 },
            { name: "Grigna", lat: 45.92, lng: 9.39 },
            { name: "Val Senales", lat: 46.73, lng: 10.91 },
            { name: "Erve", lat: 45.82, lng: 9.45 }
        ]
    },
    ski: {
        titleKey: "skiMapTitle",
        introKey: "skiMapIntro",
        mapQuery: "Kronplatz Cervinia Paganella Livigno Portes du Soleil Piani di Bobbio",
        bounds: { latMin: 45.55, latMax: 46.85, lngMin: 6.55, lngMax: 12.25 },
        locations: [
            { name: "Kronplatz", lat: 46.74, lng: 11.96 },
            { name: "Cervinia", lat: 45.93, lng: 7.63 },
            { name: "Paganella", lat: 46.16, lng: 11.04 },
            { name: "Livigno", lat: 46.54, lng: 10.13 },
            { name: "Portes du Soleil", lat: 46.2, lng: 6.85 },
            { name: "Piani di Bobbio", lat: 45.96, lng: 9.45 }
        ]
    }
};

const translations = {
    en: {
        musicKicker: "Music",
        musicTitle: "Trip soundtrack",
        musicOpen: "Open music selector",
        musicCollapse: "Hide music selector",
        navAerial: "Aerial",
        navHiking: "Hiking",
        navSki: "Ski",
        heroEyebrow: "Steven On The Road",
        heroTitle: "Italy: aerial, hiking, ski.",
        heroSubtitle: "Aerial videos are grouped by mountain, town, and sea. Hiking and ski videos follow below. Click any cover to play.",
        heroCta: "Play aerial video",
        heroBrowse: "Browse videos",
        heroMetaAerial: "Drone: mountain, town, sea",
        heroMetaHiking: "Hiking routes",
        heroMetaSki: "Ski memories",
        featuredKicker: "Recommended",
        featuredTitle: "Recommended videos",
        featuredSubtitle: "Click any cover to play.",
        aerialKicker: "Aerial",
        aerialTitle: "Mountain / Town / Sea",
        aerialSubtitle: "Three aerial video groups.",
        aerialMapTitle: "Aerial locations",
        aerialMapIntro: "Dolomites, Garda, Como, Molveno, and Sardinia.",
        hikingKicker: "Hiking",
        hikingTitle: "Hiking videos",
        hikingSubtitle: "Trails, lakes, and mountain views.",
        hikingMapTitle: "Hiking locations",
        hikingMapIntro: "Mountain routes around lakes, peaks, and alpine valleys.",
        skiKicker: "Ski",
        skiTitle: "Ski videos",
        skiSubtitle: "Ski slopes, snowboarding, and winter routes.",
        skiMapTitle: "Ski locations",
        skiMapIntro: "Winter stops across the Alps and ski resorts.",
        footerText: "© 2026 Steven On The Road. All rights reserved.",
        modalTitle: "Now playing",
        closeVideo: "Close video",
        coverPick: "Play",
        watchAria: "Watch {title}",
        tagMountain: "Mountain",
        tagTown: "Town & Lake",
        tagSea: "Sea",
        tagAlps: "Alps",
        tagHiking: "Hiking",
        tagExplore: "Explore",
        tagSki: "Ski",
        tagSnowboard: "Snowboard",
        dolomitesTitle: "Dolomiti Passo Oclini",
        dolomitesDesc: "Passo Oclini, Dolomites, ridgelines, and alpine meadows.",
        limoneTitle: "Limone sul Garda",
        limoneDesc: "Lake Garda, cliffs, and the old town from above.",
        sardegnaTitle: "Sardegna Beaches",
        sardegnaDesc: "Sardinian coastline, beaches, and turquoise water.",
        mottaroneTitle: "Mottarone Trekking",
        mottaroneDesc: "A hiking route on Mottarone with open mountain views.",
        lakeTitle: "Lake & Mountains Views",
        lakeDesc: "A lake and mountain route with a relaxed walking pace.",
        grignaTitle: "Grigna Drone & Hiking",
        grignaDesc: "Grigna hiking views with aerial shots.",
        kronplatzTitle: "Kronplatz Memory",
        kronplatzDesc: "Kronplatz ski slopes and winter scenery.",
        cerviniaTitle: "Cervinia Slopes",
        cerviniaDesc: "Cervinia ski area and Matterhorn views.",
        paganellaTitle: "Paganella Snowboarding",
        paganellaDesc: "Paganella snowboarding and ski area views.",
        fertazzaTitle: "Cima Fertazza Aerial",
        fertazzaDesc: "Stunning drone views of Cima Fertazza and Lago di Alleghe.",
        brusagoTitle: "Brusago Dolomiti",
        brusagoDesc: "A quiet Dolomites village framed by forest and mountain ridges.",
        abbadiaTitle: "Abbadia Lariana (Como)",
        abbadiaDesc: "The beautiful shores of Lake Como at Abbadia Lariana.",
        leccoTitle: "Lecco & Abbadia Lariana",
        leccoDesc: "Lake Como waterfront views between Lecco and Abbadia Lariana.",
        molvenoTitle: "Molveno Aerial",
        molvenoDesc: "Aerial views around Lake Molveno and the Brenta Dolomites.",
        girgoluTitle: "Cala Girgolu Beach",
        girgoluDesc: "Crystal clear waters of Cala Girgolu in Sardinia.",
        brandinchiTitle: "Cala Brandinchi",
        brandinchiDesc: "A bright Sardinian beach known for shallow turquoise water.",
        luImpostuTitle: "Lu Impostu & Cala Brandinchi",
        luImpostuDesc: "Two Sardinian beaches with soft sand and clear water.",
        senalesTitle: "Val Senales Glacier",
        senalesDesc: "Breathtaking views of the Val Senales glacier and Otzi Peak.",
        livignoTitle: "Livigno Ski Vlog",
        livignoDesc: "A day on the slopes in the duty-free paradise of Livigno.",
        portesTitle: "Portes du Soleil Ski",
        portesDesc: "Skiing memories from the massive Portes du Soleil area.",
        bobbioTitle: "Piani di Bobbio",
        bobbioDesc: "A winter day in the Piani di Bobbio ski area.",
        bobbioVlogTitle: "Piani di Bobbio Vlog",
        bobbioVlogDesc: "Another ski day around the slopes of Piani di Bobbio.",
        erveTitle: "Erve Hiking Trail",
        erveDesc: "A peaceful hiking route through the village of Erve."
    },
    cn: {
        musicKicker: "音乐",
        musicTitle: "旅途音乐",
        musicOpen: "打开音乐选择",
        musicCollapse: "隐藏音乐选择",
        navAerial: "航拍",
        navHiking: "爬山",
        navSki: "滑雪",
        heroEyebrow: "Steven On The Road",
        heroTitle: "意大利航拍、爬山、滑雪",
        heroSubtitle: "航拍分为山、小镇、海；下面是爬山和滑雪视频。点击任意封面直接播放。",
        heroCta: "播放航拍",
        heroBrowse: "浏览视频",
        heroMetaAerial: "航拍：山 / 小镇 / 海",
        heroMetaHiking: "爬山路线",
        heroMetaSki: "滑雪记忆",
        featuredKicker: "推荐",
        featuredTitle: "推荐视频",
        featuredSubtitle: "点击任意封面播放。",
        aerialKicker: "航拍",
        aerialTitle: "山 / 小镇 / 海",
        aerialSubtitle: "三个航拍子板块。",
        aerialMapTitle: "航拍地点",
        aerialMapIntro: "多洛米蒂、加尔达湖、科莫湖、Molveno 和撒丁岛。",
        hikingKicker: "爬山",
        hikingTitle: "爬山视频",
        hikingSubtitle: "徒步路线、湖景和山景。",
        hikingMapTitle: "爬山地点",
        hikingMapIntro: "湖区、山峰和阿尔卑斯山谷里的徒步路线。",
        skiKicker: "滑雪",
        skiTitle: "滑雪视频",
        skiSubtitle: "雪道、滑雪和单板。",
        skiMapTitle: "滑雪地点",
        skiMapIntro: "阿尔卑斯和多个滑雪场的冬季路线。",
        footerText: "© 2026 Steven On The Road. All rights reserved.",
        modalTitle: "正在播放",
        closeVideo: "关闭视频",
        coverPick: "播放",
        watchAria: "播放 {title}",
        tagMountain: "山",
        tagTown: "小镇与湖",
        tagSea: "海",
        tagAlps: "阿尔卑斯",
        tagHiking: "爬山",
        tagExplore: "探索",
        tagSki: "滑雪",
        tagSnowboard: "单板",
        dolomitesTitle: "多洛米蒂 Passo Oclini",
        dolomitesDesc: "多洛米蒂山口、山脊和草坡。",
        limoneTitle: "加尔达湖 Limone 小镇",
        limoneDesc: "加尔达湖、悬崖和湖边小镇。",
        sardegnaTitle: "撒丁岛海岸",
        sardegnaDesc: "撒丁岛海岸、沙滩和海水。",
        mottaroneTitle: "Mottarone 徒步",
        mottaroneDesc: "Mottarone 山景和徒步路线。",
        lakeTitle: "湖光山色路线",
        lakeDesc: "湖景、山坡和步行路线。",
        grignaTitle: "Grigna 航拍与徒步",
        grignaDesc: "Grigna 徒步和航拍视角。",
        kronplatzTitle: "Kronplatz 滑雪记忆",
        kronplatzDesc: "Kronplatz 雪道和冬季景色。",
        cerviniaTitle: "Cervinia 雪道",
        cerviniaDesc: "Cervinia 雪场和马特洪峰视野。",
        paganellaTitle: "Paganella 单板滑雪",
        paganellaDesc: "Paganella 单板和雪道。",
        fertazzaTitle: "Cima Fertazza 航拍",
        fertazzaDesc: "Cima Fertazza 和 Alleghe 湖的壮丽航拍视角。",
        brusagoTitle: "Brusago 多洛米蒂",
        brusagoDesc: "森林、村庄和多洛米蒂山脊组成的安静画面。",
        abbadiaTitle: "科莫湖 Abbadia Lariana",
        abbadiaDesc: "科莫湖畔 Abbadia Lariana 的宁静美景。",
        leccoTitle: "Lecco 与 Abbadia Lariana",
        leccoDesc: "Lecco 到 Abbadia Lariana 一带的科莫湖湖岸风景。",
        molvenoTitle: "Molveno 航拍",
        molvenoDesc: "Molveno 湖和 Brenta 多洛米蒂周边航拍。",
        girgoluTitle: "撒丁岛 Cala Girgolu",
        girgoluDesc: "撒丁岛 Cala Girgolu 碧绿清澈的海水。",
        brandinchiTitle: "Cala Brandinchi",
        brandinchiDesc: "撒丁岛浅蓝海水和细沙海滩。",
        luImpostuTitle: "Lu Impostu 与 Cala Brandinchi",
        luImpostuDesc: "两个撒丁岛海滩，海水清澈、沙滩开阔。",
        senalesTitle: "Val Senales 冰川",
        senalesDesc: "Val Senales 冰川和 Otzi 峰的震撼景观。",
        livignoTitle: "Livigno 滑雪记录",
        livignoDesc: "在 Livigno 免税天堂滑雪的一天。",
        portesTitle: "太阳门雪场滑雪",
        portesDesc: "瑞士太阳门 (Portes du Soleil) 雪场的滑雪回忆。",
        bobbioTitle: "Piani di Bobbio",
        bobbioDesc: "Piani di Bobbio 雪场的冬季滑雪日。",
        bobbioVlogTitle: "Piani di Bobbio Vlog",
        bobbioVlogDesc: "Piani di Bobbio 雪道周边的另一段滑雪记录。",
        erveTitle: "Erve 徒步路线",
        erveDesc: "穿越意大利 Erve 小镇的宁静徒步之旅。"
    },
    it: {
        musicKicker: "Musica",
        musicTitle: "Musica del viaggio",
        musicOpen: "Apri selezione musica",
        musicCollapse: "Nascondi selezione musica",
        navAerial: "Drone",
        navHiking: "Trekking",
        navSki: "Sci",
        heroEyebrow: "Steven On The Road",
        heroTitle: "Italia: drone, trekking, sci.",
        heroSubtitle: "I video drone sono divisi in montagna, paese e mare. Seguono trekking e sci. Clicca una copertina per guardare.",
        heroCta: "Guarda il drone",
        heroBrowse: "Sfoglia i video",
        heroMetaAerial: "Drone: montagna, paese, mare",
        heroMetaHiking: "Percorsi trekking",
        heroMetaSki: "Ricordi sulla neve",
        featuredKicker: "Consigliati",
        featuredTitle: "Video consigliati",
        featuredSubtitle: "Clicca una copertina per guardare.",
        aerialKicker: "Drone",
        aerialTitle: "Montagna / Paese / Mare",
        aerialSubtitle: "Tre gruppi di video drone.",
        aerialMapTitle: "Luoghi drone",
        aerialMapIntro: "Dolomiti, Garda, Como, Molveno e Sardegna.",
        hikingKicker: "Trekking",
        hikingTitle: "Video trekking",
        hikingSubtitle: "Sentieri, laghi e viste di montagna.",
        hikingMapTitle: "Luoghi trekking",
        hikingMapIntro: "Percorsi tra laghi, cime e valli alpine.",
        skiKicker: "Sci",
        skiTitle: "Video sci",
        skiSubtitle: "Piste, snowboard e percorsi sulla neve.",
        skiMapTitle: "Luoghi sci",
        skiMapIntro: "Tappe invernali tra Alpi e comprensori sciistici.",
        footerText: "© 2026 Steven On The Road. Tutti i diritti riservati.",
        modalTitle: "In riproduzione",
        closeVideo: "Chiudi video",
        coverPick: "Play",
        watchAria: "Guarda {title}",
        tagMountain: "Montagna",
        tagTown: "Paese & Lago",
        tagSea: "Mare",
        tagAlps: "Alpi",
        tagHiking: "Trekking",
        tagExplore: "Esplora",
        tagSki: "Sci",
        tagSnowboard: "Snowboard",
        dolomitesTitle: "Dolomiti Passo Oclini",
        dolomitesDesc: "Passo Oclini, Dolomiti, creste e prati alpini.",
        limoneTitle: "Limone sul Garda",
        limoneDesc: "Lago di Garda, pareti e paese visti dall'alto.",
        sardegnaTitle: "Spiagge della Sardegna",
        sardegnaDesc: "Costa sarda, spiagge e acqua turchese.",
        mottaroneTitle: "Trekking al Mottarone",
        mottaroneDesc: "Un percorso sul Mottarone con viste di montagna.",
        lakeTitle: "Viste su lago e monti",
        lakeDesc: "Lago, montagne e ritmo tranquillo.",
        grignaTitle: "Grigna Drone & Trekking",
        grignaDesc: "Trekking sulla Grigna con riprese aeree.",
        kronplatzTitle: "Ricordi di Kronplatz",
        kronplatzDesc: "Piste di Kronplatz e paesaggio invernale.",
        cerviniaTitle: "Piste di Cervinia",
        cerviniaDesc: "Area sci di Cervinia e vista sul Cervino.",
        paganellaTitle: "Snowboard in Paganella",
        paganellaDesc: "Snowboard e piste della Paganella.",
        fertazzaTitle: "Cima Fertazza Drone",
        fertazzaDesc: "Splendide riprese aeree di Cima Fertazza e del Lago di Alleghe.",
        brusagoTitle: "Brusago Dolomiti",
        brusagoDesc: "Un paese tranquillo tra boschi e creste dolomitiche.",
        abbadiaTitle: "Abbadia Lariana (Como)",
        abbadiaDesc: "Le bellissime rive del Lago di Como ad Abbadia Lariana.",
        leccoTitle: "Lecco e Abbadia Lariana",
        leccoDesc: "Vedute del lungolago tra Lecco e Abbadia Lariana.",
        molvenoTitle: "Molveno Drone",
        molvenoDesc: "Riprese aeree sul Lago di Molveno e sulle Dolomiti di Brenta.",
        girgoluTitle: "Spiaggia di Cala Girgolu",
        girgoluDesc: "Acque cristalline a Cala Girgolu, in Sardegna.",
        brandinchiTitle: "Cala Brandinchi",
        brandinchiDesc: "Una spiaggia sarda luminosa con acqua turchese e bassa.",
        luImpostuTitle: "Lu Impostu e Cala Brandinchi",
        luImpostuDesc: "Due spiagge sarde con sabbia chiara e mare limpido.",
        senalesTitle: "Ghiacciaio Val Senales",
        senalesDesc: "Viste mozzafiato sul ghiacciaio della Val Senales e Otzi Peak.",
        livignoTitle: "Livigno Ski Vlog",
        livignoDesc: "Una giornata sulle piste nel paradiso di Livigno.",
        portesTitle: "Sci a Portes du Soleil",
        portesDesc: "Ricordi di sci nel vasto comprensorio di Portes du Soleil.",
        bobbioTitle: "Piani di Bobbio",
        bobbioDesc: "Una giornata invernale nel comprensorio dei Piani di Bobbio.",
        bobbioVlogTitle: "Piani di Bobbio Vlog",
        bobbioVlogDesc: "Un'altra giornata sulle piste dei Piani di Bobbio.",
        erveTitle: "Sentiero di Erve" ,
        erveDesc: "Un tranquillo percorso di trekking attraverso il borgo di Erve."
    }
};

const state = {
    lang: getInitialLanguage(),
    activeTrack: musicTracks[0].id,
    musicTimer: null
};

function getInitialLanguage() {
    const saved = localStorage.getItem("preferredLang");
    if (saved && translations[saved]) {
        return saved;
    }

    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith("zh")) {
        return "cn";
    }
    if (browserLang.startsWith("it")) {
        return "it";
    }
    return "en";
}

function t(key) {
    return translations[state.lang][key] || translations.en[key] || key;
}

function escapeHtml(value) {
    const map = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&#039;"
    };

    return String(value).replace(/[&<>"']/g, (char) => map[char]);
}

function getAllVideos() {
    return [...videos.aerial, ...videos.hiking, ...videos.ski];
}

function getVideoById(id) {
    return getAllVideos().find((video) => video.id === id);
}

function thumbnailUrl(id, size = "maxresdefault") {
    return `https://img.youtube.com/vi/${id}/${size}.jpg`;
}

function googleMapsSearchUrl(query) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function projectMapPoint(location, bounds) {
    const x = ((location.lng - bounds.lngMin) / (bounds.lngMax - bounds.lngMin)) * 100;
    const y = ((bounds.latMax - location.lat) / (bounds.latMax - bounds.latMin)) * 100;

    return {
        x: Math.min(94, Math.max(6, x)),
        y: Math.min(88, Math.max(12, y))
    };
}

function createMapPins(map) {
    return map.locations
        .map((location, index) => {
            const point = projectMapPoint(location, map.bounds);
            const href = googleMapsSearchUrl(`${location.name}, Italy`);

            return `
                <a
                    class="map-pin"
                    style="--x: ${point.x.toFixed(2)}%; --y: ${point.y.toFixed(2)}%;"
                    href="${escapeHtml(href)}"
                    target="_blank"
                    rel="noopener"
                    aria-label="${escapeHtml(`Open ${location.name} in Google Maps`)}">
                    <span>${index + 1}</span>
                    <em>${escapeHtml(location.name)}</em>
                </a>
            `;
        })
        .join("");
}

function createMapRoute(map) {
    const points = map.locations
        .map((location) => {
            const point = projectMapPoint(location, map.bounds);
            return `${point.x.toFixed(2)},${point.y.toFixed(2)}`;
        })
        .join(" ");

    return `
        <svg class="map-route" viewBox="0 0 100 100" aria-hidden="true" preserveAspectRatio="none">
            <polyline points="${points}"></polyline>
        </svg>
    `;
}

function spotifyEmbedUrl(spotifyId) {
    return `https://open.spotify.com/embed/track/${spotifyId}?utm_source=generator&theme=0`;
}

function getMusicTrack(id) {
    return musicTracks.find((track) => track.id === id) || musicTracks[0];
}

function createMusicOptions() {
    const container = document.getElementById("music-options");
    container.innerHTML = musicTracks
        .map((track) => `
            <button class="music-option" type="button" data-track-id="${escapeHtml(track.id)}">
                ${escapeHtml(track.artist)}
                <span>${escapeHtml(track.title)}</span>
            </button>
        `)
        .join("");
}

function setMusicTrack(trackId) {
    const track = getMusicTrack(trackId);
    const player = document.getElementById("spotify-player");

    state.activeTrack = track.id;
    player.src = spotifyEmbedUrl(track.spotifyId);

    document.querySelectorAll(".music-option").forEach((button) => {
        button.classList.toggle("active", button.dataset.trackId === track.id);
    });

    expandMusicBanner();
    scheduleMusicCollapse(9000);
}

function expandMusicBanner() {
    document.body.classList.add("music-expanded");
    clearTimeout(state.musicTimer);
}

function collapseMusicBanner() {
    const banner = document.getElementById("music-banner");
    if (banner.contains(document.activeElement)) {
        scheduleMusicCollapse(3500);
        return;
    }
    document.body.classList.remove("music-expanded");
}

function scheduleMusicCollapse(delay = 6500) {
    clearTimeout(state.musicTimer);
    state.musicTimer = window.setTimeout(collapseMusicBanner, delay);
}

function initMusicBanner() {
    const banner = document.getElementById("music-banner");
    const wakeZone = document.getElementById("music-wake-zone");
    const tab = document.getElementById("music-tab");
    const collapseButton = document.getElementById("music-collapse");

    createMusicOptions();
    setMusicTrack(state.activeTrack);

    document.querySelectorAll(".music-option").forEach((button) => {
        button.addEventListener("click", () => setMusicTrack(button.dataset.trackId));
    });

    wakeZone.addEventListener("mouseenter", () => {
        expandMusicBanner();
        scheduleMusicCollapse(7000);
    });

    tab.addEventListener("click", () => {
        expandMusicBanner();
        scheduleMusicCollapse(9000);
    });

    banner.addEventListener("mouseenter", () => clearTimeout(state.musicTimer));
    banner.addEventListener("mouseleave", () => scheduleMusicCollapse(2800));
    banner.addEventListener("focusin", expandMusicBanner);
    banner.addEventListener("focusout", () => scheduleMusicCollapse(3500));
    collapseButton.addEventListener("click", collapseMusicBanner);
}

function createVideoCard(video, extraClass = "") {
    const title = t(video.titleKey);
    const desc = t(video.descKey);
    const tag = t(video.tagKey);
    const ariaLabel = t("watchAria").replace("{title}", title);
    const imageSrc = video.coverUrl || thumbnailUrl(video.id);
    const imageFallback = video.coverFallbackUrl || thumbnailUrl(video.id, "hqdefault");

    return `
        <button class="video-card ${extraClass} theme-${video.theme}" type="button" data-video-id="${escapeHtml(video.id)}" aria-label="${escapeHtml(ariaLabel)}">
            <span class="thumbnail-wrap">
                <img src="${escapeHtml(imageSrc)}" data-fallback="${escapeHtml(imageFallback)}" alt="${escapeHtml(title)}" onerror="if(this.src !== this.dataset.fallback) { this.src = this.dataset.fallback; }">
            </span>
            <span class="card-shade" aria-hidden="true"></span>
            <span class="play-pill" aria-hidden="true"><span></span></span>
            <span class="card-copy">
                <span class="card-topline">
                    <span class="tag">${escapeHtml(tag)}</span>
                    <span class="cover-label">${escapeHtml(t("coverPick"))}</span>
                </span>
                <span class="card-title">${escapeHtml(title)}</span>
                <span class="card-desc">${escapeHtml(desc)}</span>
            </span>
        </button>
    `;
}

function createSectionMap(sectionKey) {
    const map = sectionMaps[sectionKey];
    const title = t(map.titleKey);
    const intro = t(map.introKey);

    return `
        <div class="map-copy">
            <p class="map-label">Google Maps</p>
            <h3>${escapeHtml(title)}</h3>
            <p>${escapeHtml(intro)}</p>
            <div class="map-locations" aria-label="${escapeHtml(title)}">
                ${map.locations.map((location) => `
                    <a href="${escapeHtml(googleMapsSearchUrl(`${location.name}, Italy`))}" target="_blank" rel="noopener">
                        ${escapeHtml(location.name)}
                    </a>
                `).join("")}
            </div>
        </div>
        <div class="map-frame">
            <a class="map-open-link" href="${escapeHtml(googleMapsSearchUrl(map.mapQuery))}" target="_blank" rel="noopener">
                Google Maps
            </a>
            <div class="mini-map" aria-label="${escapeHtml(title)}">
                ${createMapRoute(map)}
                ${createMapPins(map)}
            </div>
        </div>
    `;
}

function renderSectionMaps() {
    Object.keys(sectionMaps).forEach((sectionKey) => {
        const target = document.getElementById(`${sectionKey}-map`);
        if (target) {
            target.innerHTML = createSectionMap(sectionKey);
        }
    });
}

function renderVideoGroups() {
    renderSectionMaps();

    document.getElementById("spotlight-grid").innerHTML = spotlightIds
        .map((id) => createVideoCard(getVideoById(id), "spotlight-card"))
        .join("");

    document.getElementById("aerial-grid").innerHTML = videos.aerial
        .map((video) => createVideoCard(video))
        .join("");

    document.getElementById("hiking-grid").innerHTML = videos.hiking
        .map((video) => createVideoCard(video))
        .join("");

    document.getElementById("ski-grid").innerHTML = videos.ski
        .map((video) => createVideoCard(video))
        .join("");
}

function updateStaticText() {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
        element.textContent = t(element.dataset.i18n);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
        element.setAttribute("aria-label", t(element.dataset.i18nAria));
    });

    document.documentElement.lang = state.lang === "cn" ? "zh-CN" : state.lang;
}

function bindVideoButtons() {
    document.querySelectorAll(".video-trigger, .video-card").forEach((button) => {
        button.addEventListener("click", () => openVideo(button.dataset.videoId));
    });
}

function wireThumbnailFallbacks() {
    document.querySelectorAll("img[data-fallback]").forEach((image) => {
        image.addEventListener("error", () => {
            if (image.src !== image.dataset.fallback) {
                image.src = image.dataset.fallback;
            }
        }, { once: true });
    });
}

function setLang(lang) {
    if (!translations[lang]) {
        return;
    }

    state.lang = lang;
    localStorage.setItem("preferredLang", lang);

    document.querySelectorAll(".lang-selector button").forEach((button) => {
        button.classList.toggle("active", button.dataset.lang === lang);
    });

    updateStaticText();
    renderVideoGroups();
    bindVideoButtons();
    wireThumbnailFallbacks();
}

function openVideo(videoId) {
    const modal = document.getElementById("video-modal");
    const iframe = document.getElementById("youtube-player");
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    document.querySelector(".close-btn").focus();
}

function closeVideo() {
    const modal = document.getElementById("video-modal");
    const iframe = document.getElementById("youtube-player");
    iframe.src = "";
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}

function init() {
    initMusicBanner();

    document.querySelectorAll(".lang-selector button").forEach((button) => {
        button.addEventListener("click", () => setLang(button.dataset.lang));
    });

    document.querySelector(".close-btn").addEventListener("click", closeVideo);

    document.getElementById("video-modal").addEventListener("click", (event) => {
        if (event.target.id === "video-modal") {
            closeVideo();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeVideo();
        }
    });

    window.addEventListener("scroll", () => {
        document.querySelector(".site-nav").classList.toggle("scrolled", window.scrollY > 24);
    });

    setLang(state.lang);
}

document.addEventListener("DOMContentLoaded", init);
