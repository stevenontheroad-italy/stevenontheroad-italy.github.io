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
        }
    ]
};

const spotlightIds = ["EmGVsProeXc", "B1v-HRNH8OM", "Zfs3iO6YhjQ", "AS1op2gW7kg"];

const musicTracks = [
    {
        id: "wake",
        artist: "Avicii",
        title: "Wake Me Up",
        spotifyId: "2WQPQezYWzlJlQtuGL0rgS"
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
        hikingKicker: "Hiking",
        hikingTitle: "Hiking videos",
        hikingSubtitle: "Trails, lakes, and mountain views.",
        skiKicker: "Ski",
        skiTitle: "Ski videos",
        skiSubtitle: "Ski slopes, snowboarding, and winter routes.",
        footerText: "© 2026 Steven On The Road. All rights reserved.",
        photoCreditLead: "Fallback cover photos via",
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
        paganellaDesc: "Paganella snowboarding and ski area views."
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
        hikingKicker: "爬山",
        hikingTitle: "爬山视频",
        hikingSubtitle: "徒步路线、湖景和山景。",
        skiKicker: "滑雪",
        skiTitle: "滑雪视频",
        skiSubtitle: "雪道、滑雪和单板。",
        footerText: "© 2026 Steven On The Road. All rights reserved.",
        photoCreditLead: "备用封面图片来自",
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
        paganellaDesc: "Paganella 单板和雪道。"
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
        hikingKicker: "Trekking",
        hikingTitle: "Video trekking",
        hikingSubtitle: "Sentieri, laghi e viste di montagna.",
        skiKicker: "Sci",
        skiTitle: "Video sci",
        skiSubtitle: "Piste, snowboard e percorsi sulla neve.",
        footerText: "© 2026 Steven On The Road. Tutti i diritti riservati.",
        photoCreditLead: "Foto copertina di riserva da",
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
        paganellaDesc: "Snowboard e piste della Paganella."
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
                <img src="${escapeHtml(imageSrc)}" data-fallback="${escapeHtml(imageFallback)}" alt="${escapeHtml(title)}">
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

function renderVideoGroups() {
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
