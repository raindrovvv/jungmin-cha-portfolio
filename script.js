const portfolio = {
  name: "차정민",
  role: "Game Audio · Wwise · Unreal Engine 5",
  headline: "차정민 Game Audio Designer",
  intro:
    "플레이어가 상황을 직관적으로 읽도록 사운드를 설계합니다. Wwise와 Unreal Engine 5로 전투 BGM 전환, 환경/캐릭터 SFX, UI 피드백을 구현하고 실제 플레이에서 들리는 방식까지 다듬습니다.",
  years: "7년+",
  focusCount: "299명",
  source: "4.36/5",
  contactNote:
    "전투의 흐름, 공간감, 피드백 타이밍이 플레이 안에서 자연스럽게 읽히도록 제작과 구현을 함께 다룹니다. 싱어송라이터로 쌓은 음악 프로덕션 경험은 BGM과 감정선 설계에 직접 연결됩니다.",
  footerName: "차정민 Game Audio Designer Portfolio",
  focus: [
    "Wwise",
    "Unreal Engine 5",
    "SFX Design",
    "Interactive BGM",
    "Audio Debugging",
    "FL Studio",
    "C++ / Blueprint",
    "Unity / C#",
    "OpenAI API",
    "Git Collaboration",
  ],
  reelNotes: [
    {
      title: "4v1 PvP 프로젝트의 실제 구현 사례",
      text: "G-STAR 2025 출품을 목표로 제작한 UE5 팀 프로젝트에서 전투, 환경, UI 사운드를 Wwise로 직접 설계하고 적용했습니다.",
    },
    {
      title: "SFX 제작부터 Wwise·UE 적용까지",
      text: "191개 오디오 에셋을 캐릭터, 몬스터, 환경, UI/System으로 나누고 Event, Switch, RTPC, Anim Notify 기반으로 연결했습니다.",
    },
    {
      title: "플레이 테스트로 밸런싱과 QA 검증",
      text: "299명 플레이테스트(평균 4.36/5) 피드백을 바탕으로 BGM 전환, 발소리, 오클루전, UI 피드백을 세밀하게 조정했습니다.",
    },
  ],
  projects: [
    {
      title: "Guardian & Seeker",
      period: "G-STAR 2025",
      type: "UE5.6 / Wwise",
      summary:
        "4v1 비대칭 PvP 액션 게임의 캐릭터, 몬스터, 환경, UI 사운드 디자인과 Wwise 구현 전반을 담당했습니다. 전투 BGM 전환, Physical Material 기반 발소리, 오클루전 시스템을 설계하고 플레이테스트를 통해 밸런싱과 QA까지 마무리했습니다.",
      featured: true,
      href: "https://www.youtube.com/watch?v=d7xon5fv-kg",
      media: {
        label: "Main demo",
        href: "https://www.youtube.com/watch?v=d7xon5fv-kg",
        image: "./assets/game/guardian-seeker.webp",
        fallback: "./assets/game/guardian-seeker.gif",
      },
      cta: "Demo video",
      connection: {
        label: "Guardian & Seeker",
        role: "Core audio case",
        side: "start",
      },
      skills: ["Wwise", "UE5.6", "SFX", "Interactive BGM", "QA"],
      scope: {
        content: "캐릭터, 몬스터, 환경, UI 사운드 / 전투 BGM",
        implementation: "Wwise Event, Switch, RTPC, UE5 Blueprint, Anim Notify",
        proof: "G-STAR 2025 출품, 299명 체험, 평균 4.36/5",
      },
    },
    {
      title: "Wwise / UE5 Audio Debugging",
      period: "Troubleshooting",
      type: "Occlusion / Spatial Audio",
      summary:
        "벽과 문 너머 몬스터 소리의 거리감과 차폐감을 실제 플레이 기준으로 교정한 오디오 디버깅 사례입니다. Wwise 오클루전, Environmental Curves, Diffraction / Transmission, UE 콜리전과 라인 트레이스를 함께 점검했습니다.",
      href: "https://www.youtube.com/watch?v=dp_Kr3LQ6EE",
      media: {
        label: "Audio tech",
        href: "https://www.youtube.com/watch?v=dp_Kr3LQ6EE",
        image: "./assets/game/audio-debugging.webp",
        fallback: "./assets/game/audio-debugging.gif",
      },
      cta: "Tech video",
      connection: {
        label: "Same project",
        role: "Occlusion deep dive",
        side: "end",
      },
      skills: ["Occlusion", "RTPC", "Collision", "Line Trace"],
      scope: {
        content: "몬스터 위치감, 벽/문 너머 공간감 개선",
        implementation: "Wwise Occlusion, Diffraction, Transmission, UE Collision Debug",
        proof: "멀리 있는 소리와 차폐된 소리를 구분하도록 시스템 조정",
      },
    },
    {
      title: "조선 십이기사단",
      period: "2025.04.18",
      type: "UE5 / Platform Fighter",
      summary:
        "조선 말기 맵을 배경으로 한 멀티플레이 플랫폼 파이터 프로토타입입니다. Team Lead, PM, Creative Director로 참여하며 BGM 3트랙, SFX 40종, 믹싱, 캐릭터/맵/스킬 밸런스, HUD 레이아웃을 함께 설계했습니다.",
      href: "https://www.youtube.com/watch?v=HrRCXKaU5pM",
      media: {
        label: "Gameplay demo",
        href: "https://www.youtube.com/watch?v=HrRCXKaU5pM",
        image: "./assets/game/joseon-knights.webp",
        fallback: "./assets/game/joseon-knights.gif",
      },
      cta: "Demo video",
      skills: ["Team Lead", "BGM 3 tracks", "SFX 40", "UE5", "PM"],
      scope: {
        content: "한국 전통 모티프 기반 BGM, 전투 SFX, UI/캐릭터/맵 아이콘",
        implementation: "Buff & StatComponent, DeathVolume, Knight 3종 스킬 설계 보조",
        proof: "Notion Credit: Team Lead, PM, Creative Director / BGM 3트랙, SFX 40종",
      },
    },
    {
      title: "SYMBIO",
      period: "2025.03.07",
      type: "UE5 / TPS Shooting",
      summary:
        "언리얼 엔진 기반 TPS/FPS 슈팅 프로토타입입니다. 게임 기획, UI/UX 설계, BGM/SFX 제작, 레벨 디자인, 시네마틱 컷씬을 맡아 세계관과 오디오 톤을 함께 잡았습니다.",
      href: "https://www.youtube.com/watch?v=2nxZ4AfdJa8",
      media: {
        label: "Cinematic demo",
        href: "https://www.youtube.com/watch?v=2nxZ4AfdJa8",
        image: "./assets/game/symbio.webp",
        fallback: "./assets/game/symbio.gif",
      },
      cta: "Demo video",
      skills: ["BGM", "SFX", "UI/UX", "Level Design", "Cinematic"],
      scope: {
        content: "폐쇄적 연구소 톤의 BGM/SFX, UI 피드백, 시네마틱 오디오",
        implementation: "UE5 프로젝트 내 게임플레이 및 시네마틱 컷씬에 오디오 직접 적용",
        proof: "Notion Credit: BGM/SFX 제작, UI/UX 설계, 레벨 디자인, 시네마틱 컷씬 담당",
      },
    },
    {
      title: "레인보우 가디언",
      period: "2025.01.16",
      type: "Text RPG / Console",
      summary:
        "8가지 콘셉트의 미로형 타워를 탐험하는 콘솔 텍스트 RPG입니다. 게임 콘셉트와 스토리, 맵 시스템, BGM 작편곡, 효과음 제작을 맡아 층마다 뚜렷한 분위기와 감정선을 만들었습니다.",
      href: "https://www.youtube.com/watch?v=9vPQz9_O9Uw",
      media: {
        label: "Console RPG demo",
        href: "https://www.youtube.com/watch?v=9vPQz9_O9Uw",
        image: "./assets/game/rainbow-guardian.webp",
        fallback: "./assets/game/rainbow-guardian.gif",
      },
      cta: "Demo video",
      skills: ["BGM", "SFX", "Story", "Map System", "Console RPG"],
      scope: {
        content: "8개 테마 타워, 몬스터, 전투/상점/제단 사운드",
        implementation: "콘솔 텍스트 RPG 맵 시스템, 전투 씬, 층별 테마 구성",
        proof: "Notion Credit: 게임 컨셉/스토리, BGM 작편곡, 효과음 제작",
      },
    },
    {
      title: "Flight Record",
      period: "2024.11.25",
      type: "Unity / C#",
      summary:
        "디지털 공간을 탐험하며 음악을 경험하는 인터랙티브 미디어 프로젝트입니다. 직접 발매한 앨범 '비행'의 수록곡 초안 3곡을 활용해 이동과 탐험이 음악 경험으로 이어지도록 구성했습니다.",
      href: "https://www.youtube.com/watch?v=X-2pHNHbX7M&t=103s",
      media: {
        label: "Interactive media",
        href: "https://www.youtube.com/watch?v=X-2pHNHbX7M&t=103s",
        image: "./assets/game/flight-record.webp",
        fallback: "./assets/game/flight-record.gif",
      },
      cta: "Demo video",
      skills: ["Unity", "C#", "Interactive Media", "Album BGM"],
      scope: {
        content: "비행 앨범 수록곡 초안 3곡: 탈선, ばらばら, 청춘예찬(VNRS remix)",
        implementation: "Unity C# 기반 탐험, 상호작용, 음악 트리거",
        proof: "Notion Credit: 프로젝트 리더, PM, 기획 / 사운드 디자이너, 개발",
      },
    },
    {
      title: "Lore Pocket",
      period: "Prototype",
      type: "OpenAI API / TTS",
      summary:
        "키워드 기반으로 캐릭터 페르소나, 대사, 음성을 생성하는 AI 캐릭터 보이스 생성 웹 플랫폼입니다. GPT-4o-mini 기반 JSON 구조화와 OpenAI TTS 연동으로 보이스 프리프로덕션 흐름을 실험했습니다.",
      media: {
        label: "Voice pipeline",
        image: "./assets/game/lore-pocket.svg",
      },
      skills: ["OpenAI API", "TTS", "JSON", "Voice Pipeline"],
      scope: {
        content: "캐릭터 페르소나, 대사, TTS 보이스 생성",
        implementation: "OpenAI API, JSON 구조화, 웹 기반 생성 파이프라인",
        proof: "AI 기반 보이스 프리프로덕션 워크플로 실험",
      },
    },
  ],
  musicProjects: [
    {
      title: "[LP] 비행",
      period: "2025.06.11",
      type: "VENI RAIN X HUNDOSHI",
      summary:
        "향수와 여정을 테마로 한 정규 앨범입니다. VENI RAIN으로 작사, 작곡, 보컬에 참여하고 VENIRUS로 편곡, 믹싱/마스터링까지 맡아 앨범 단위 제작 흐름을 완성했습니다.",
      href: "https://www.notion.so/raingem/VENI-RAIN-X-HUNDOSHI-20e5e5b9c8bb80458583e0342a2cb9d7?source=copy_link",
      listenHref: "https://www.youtube.com/watch?v=fl0X68Ofhfo",
      coverImage: "./assets/covers/flight.jpg",
      cta: "Album detail",
      skills: ["Lyrics", "Compose", "Arrange", "Mix/Master", "Music Video"],
      scope: {
        content: "정규 앨범, 뮤직비디오, Spotify / YouTube Music / Apple Music / Melon 릴리즈",
        implementation: "Lyrics/Compose by VENI RAIN, Arranged/Mixed/Mastered by VENIRUS",
        proof: "Executive Producer: 차정민 / Editors, VFX, Color Grading에도 참여",
      },
    },
    {
      title: "[EP] Rainshower",
      period: "2021.01.11",
      type: "VENI RAIN",
      summary:
        "6곡으로 구성된 EP입니다. 전곡 작사/작곡에 참여하고 VENIRUS와 편곡, 믹싱/마스터링을 연결하며 음악 프로덕션의 기본기를 쌓았습니다.",
      href: "https://www.notion.so/raingem/VENI-s-Discography-c1529c8e5386413089ac9264644d223c",
      listenHref: "https://www.youtube.com/watch?v=GAmkMyEuLd8",
      coverImage: "./assets/covers/rainshower.jpg",
      cta: "Discography",
      skills: ["Lyrics", "Compose", "Arrange", "Mix/Master", "EP"],
      scope: {
        content: "소나기, Sober Up, Shut Down, DOMINO, Where you at, T.M.T Remix",
        implementation: "작사/작곡 VENI RAIN, 편곡 VENIRUS, Mixing & Mastering VENIRUS",
        proof: "Spotify, YouTube Music, Melon, Genie, Bugs, FLO 릴리즈",
      },
    },
    {
      title: "[Single] RAINDROP",
      period: "2020.12.16",
      type: "VENI RAIN",
      summary:
        "작사, 작곡, 편곡 협업, 믹싱/마스터링까지 직접 참여한 초기 싱글입니다. VENI RAIN/VENIRUS 체계를 처음 정립한 릴리즈입니다.",
      href: "https://www.notion.so/raingem/VENI-s-Discography-c1529c8e5386413089ac9264644d223c",
      listenHref: "https://www.youtube.com/watch?v=gLoUqPA4jJg",
      coverImage: "./assets/covers/raindrop.jpg",
      cta: "Discography",
      skills: ["Lyrics", "Compose", "Arrange", "Mix/Master", "Single"],
      scope: {
        content: "소나기",
        implementation: "작사 VENI RAIN, 작곡 VENI RAIN/훈도시, 편곡 VENIRUS/훈도시",
        proof: "Executive Producer: VENI RAIN, VENIRUS / Mixing & Mastering: VENIRUS",
      },
    },
    {
      title: "[Prod. by & Feat.] Neon Romance",
      period: "2024.05.13",
      type: "Arthur · VENI RAIN",
      summary:
        "Arthur와의 외부 협업 싱글입니다. 피처링 보컬, 공동 작곡, VENIRUS 편곡으로 밴드 사운드 프로덕션을 완성했습니다.",
      href: "https://www.youtube.com/watch?v=BgnCh1RIvo4",
      listenHref: "https://www.youtube.com/watch?v=BgnCh1RIvo4",
      coverImage: "./assets/covers/neon-romance.jpg",
      cta: "Listen",
      skills: ["Feature", "Lyrics", "Compose", "Arrange", "Collaboration"],
      scope: {
        content: "Neon Romance (Feat. VENI RAIN)",
        implementation: "Lyrics by Arthur/VENI RAIN, Composed by VENI RAIN/Arthur, Arranged by VENIRUS",
        proof: "Vocal/Chorus: Arthur, VENI RAIN / Guitar, Synthesizer, Drums, Bass: VENIRUS",
      },
    },
    {
      title: "[Single] 잔",
      period: "2024.12.13",
      type: "VENI RAIN · VENIRUS",
      summary:
        "작사, 작곡, 편곡, 아트워크, 믹싱/마스터링까지 단독으로 완결한 최근 싱글입니다.",
      href: "https://www.notion.so/raingem/VENI-s-Discography-c1529c8e5386413089ac9264644d223c",
      listenHref: "https://www.youtube.com/watch?v=sAp2zHu-kBo",
      cta: "Discography",
      skills: ["Lyrics", "Compose", "Arrange", "Artwork", "Mix/Master"],
      scope: {
        content: "싱글 릴리즈와 아트워크 포함 제작",
        implementation: "VENI RAIN / VENIRUS 크레딧 기반 프로덕션",
        proof: "Discography DB 등록, 2024.12.13 발매",
      },
    },
    {
      title: "[Prod. by] Sober - Romantic Refuge :: 밤",
      period: "2024.02.12",
      type: "Sober · VENIRUS",
      summary:
        "Sober의 EP Romantic Refuge 수록 작업입니다. VENIRUS가 작곡/프로덕션 크레딧으로 연결된 외부 아티스트 협업 사례입니다.",
      href: "https://www.notion.so/raingem/VENI-s-Discography-c1529c8e5386413089ac9264644d223c",
      listenHref: "https://www.youtube.com/watch?v=knAzWxn1vfE",
      cta: "Discography",
      skills: ["Compose", "Arrange", "Mixing", "VENIRUS"],
    },
    {
      title: "[EP] Downtown Man",
      period: "2024.01.22",
      type: "VENI RAIN · VENIRUS",
      summary:
        "작사부터 아트워크, 믹싱/마스터링까지 모두 담당한 EP입니다.",
      href: "https://www.notion.so/raingem/VENI-s-Discography-c1529c8e5386413089ac9264644d223c",
      listenHref: "https://www.youtube.com/watch?v=BKecGY-5h8Q",
      cta: "Discography",
      skills: ["Lyrics", "Compose", "Arrange", "Artwork", "Mix/Master"],
    },
    {
      title: "[EP] V-taper",
      period: "2023.11.16",
      type: "VENIRUS",
      summary:
        "VENIRUS 크레딧으로 참여한 EP입니다. 코러스, 아트워크, 믹싱/마스터링까지 프로덕션 전반을 담당했습니다.",
      href: "https://www.notion.so/raingem/VENI-s-Discography-c1529c8e5386413089ac9264644d223c",
      listenHref: "https://www.youtube.com/watch?v=H8l2GJmKIP8",
      cta: "Discography",
      skills: ["Compose", "Arrange", "Artwork", "Mix/Master", "VENIRUS"],
    },
    {
      title: "[EP] FEAR & AMBITION",
      period: "2023.06.12",
      type: "VENI RAIN",
      summary:
        "VENI RAIN으로 작사/작곡에 참여한 EP입니다. 기존 싱글에서 이어진 음악적 색을 앨범 단위로 확장했습니다.",
      href: "https://www.notion.so/raingem/VENI-s-Discography-c1529c8e5386413089ac9264644d223c",
      listenHref: "https://www.youtube.com/watch?v=7eK011nuAxE&list=OLAK5uy_mwYtC_iGh9SPncl6wwXlyd5XScJpdTPvA",
      cta: "Discography",
      skills: ["Lyrics", "Compose", "Arrange", "Artwork", "Mix/Master"],
    },
    {
      title: "[Single] FLOWER",
      period: "2022.12.08",
      type: "VENI RAIN",
      summary:
        "VENI RAIN으로 작사/작곡에 참여한 싱글입니다. 보컬 중심 송라이팅과 프로덕션 감각이 드러나는 작업입니다.",
      href: "https://www.notion.so/raingem/VENI-s-Discography-c1529c8e5386413089ac9264644d223c",
      listenHref: "https://www.youtube.com/watch?v=t2L2AJpRm7M&list=OLAK5uy_kD6qyzn7kBhpXPq3nL1qZrQIccj-z0FuI",
      cta: "Discography",
      skills: ["Lyrics", "Compose", "Arrange", "Artwork", "Mix/Master"],
    },
    {
      title: "[Single] OAO",
      period: "2021.10.01",
      type: "VENI RAIN",
      summary:
        "훈도시가 피처링한 싱글입니다. 작사, 작곡, 편곡, 아트워크, 믹싱/마스터링까지 직접 이어간 릴리즈입니다.",
      href: "https://www.youtube.com/watch?v=Ov4GDN3eKUg",
      listenHref: "https://www.youtube.com/watch?v=Ov4GDN3eKUg",
      coverImage: "./assets/covers/oao.jpg",
      cta: "Listen",
      skills: ["Lyrics", "Compose", "Arrange", "Artwork", "Mix/Master"],
      scope: {
        content: "OAO (Feat. 훈도시)",
        implementation: "작사 VENI RAIN/훈도시, 작곡 VENI RAIN/훈도시/Miler/IOF",
        proof: "2021.10.01 발매 / Spotify, YouTube Music, Melon 등 등록",
      },
    },
    {
      title: "[Single] HIGHWAY",
      period: "2020.09.16",
      type: "VENI RAIN",
      summary:
        "Highway와 TMT로 구성된 싱글입니다. VENI RAIN의 작사/작곡과 VENIRUS의 편곡, 믹싱/마스터링이 함께 맞물린 작업입니다.",
      href: "https://www.youtube.com/watch?v=x1OXs4Ud8TY",
      listenHref: "https://www.youtube.com/watch?v=x1OXs4Ud8TY",
      coverImage: "./assets/covers/highway.jpg",
      cta: "Listen",
      skills: ["Lyrics", "Compose", "Arrange", "Mix/Master", "Single"],
      scope: {
        content: "Highway / TMT(Too many thought) feat. Holynn",
        implementation: "작사 VENI RAIN, 작곡 VENI RAIN 외, 편곡 VENIRUS",
        proof: "Executive Producer: VENI RAIN, VENIRUS / Mixing & Mastering: VENIRUS",
      },
    },
    {
      title: "[Single] FIRE & WATER",
      period: "2020.06.08",
      type: "VENI RAIN",
      summary:
        "NEEDFIRE와 FREEZE TAG로 구성된 싱글입니다. VENIRUS 프로덕션을 전면에 둔 초기 작사/작곡/편곡 릴리즈입니다.",
      href: "https://www.youtube.com/watch?v=Cc1XFT9E96Y",
      listenHref: "https://www.youtube.com/watch?v=Cc1XFT9E96Y",
      coverImage: "./assets/covers/fire-water.jpg",
      cta: "Listen",
      skills: ["Lyrics", "Compose", "Arrange", "Mix/Master", "Single"],
      scope: {
        content: "NEEDFIRE / FREEZE TAG (Feat. OoOo)",
        implementation: "작사 VENI RAIN, 작곡 VENIRUS 외, 편곡 VENIRUS",
        proof: "2020.06.08 발매 / Spotify, Melon, Genie, Bugs, FLO 등록",
      },
    },
    {
      title: "[Single] FOUND ME",
      period: "2020.02.26",
      type: "VENI RAIN",
      summary:
        "좀비(FOUND ME), SIDEWALK, S.O.S로 구성된 초기 싱글입니다. VENI RAIN과 VENIRUS의 공동 제작 체계를 쌓은 작업입니다.",
      href: "https://www.youtube.com/watch?v=KEXbC-JBRT4",
      listenHref: "https://www.youtube.com/watch?v=KEXbC-JBRT4",
      coverImage: "./assets/covers/found-me.jpg",
      cta: "Listen",
      skills: ["Lyrics", "Compose", "Arrange", "Mix/Master", "Single"],
      scope: {
        content: "좀비(FOUND ME), SIDEWALK, S.O.S",
        implementation: "작사 VENI RAIN, 작곡 VENIRUS/VENI RAIN, 편곡 VENIRUS",
        proof: "Executive Producer: VENI RAIN, VENIRUS / Mixing & Mastering: VENIRUS",
      },
    },
    {
      title: "[EP] FORECAST",
      period: "EP",
      type: "VENI RAIN · VENIRUS",
      summary:
        "VENI RAIN과 VENIRUS 크레딧으로 함께 발표한 EP입니다.",
      href: "https://www.notion.so/raingem/VENI-s-Discography-c1529c8e5386413089ac9264644d223c",
      listenHref: "https://music.youtube.com/playlist?list=PL0S3gU03wJzjf_YHggWxUAmoMQ6xBQucU",
      coverImage: "./assets/covers/forecast-640.jpg",
      cta: "Discography",
      skills: ["Lyrics", "Compose", "Arrange", "Mix/Master", "EP"],
    },
    {
      title: "[Single] UNBERELLA",
      period: "Single",
      type: "VENI RAIN",
      summary:
        "VENI RAIN의 싱글/비주얼라이저 작업입니다. 음악과 영상이 함께 연결된 릴리즈로 정리했습니다.",
      href: "https://www.notion.so/raingem/VENI-s-Discography-c1529c8e5386413089ac9264644d223c",
      listenHref: "https://www.youtube.com/watch?v=6mYuG9W2ZWU&list=OLAK5uy_nHnNIr4Vf7SqMRTIHeOkQvbiGjvL-6EkY",
      cta: "Discography",
      skills: ["Lyrics", "Compose", "Video", "VENI RAIN"],
    },
    {
      title: "[Prod.by] 스내키챈 - 숫자일 뿐",
      period: "Prod.by",
      type: "스내키챈 · DJ Wreckx · VENIRUS",
      summary:
        "스내키챈 작업에 VENIRUS 프로듀서 크레딧으로 참여한 외부 협업입니다. 개인 릴리즈 밖에서도 프로덕션을 맡았습니다.",
      href: "https://www.notion.so/raingem/VENI-s-Discography-c1529c8e5386413089ac9264644d223c",
      listenHref: "https://www.youtube.com/watch?v=WC28-lcyV6s",
      cta: "Discography",
      skills: ["Prod.by", "VENIRUS", "Collaboration"],
    },
    {
      title: "[Prod.by] kumira - 돌연변이",
      period: "Prod.by",
      type: "kumira · VENIRUS",
      summary: "kumira 작업에 VENIRUS 프로덕션/편곡 크레딧으로 참여한 외부 협업입니다.",
      href: "https://www.notion.so/raingem/VENI-s-Discography-c1529c8e5386413089ac9264644d223c",
      listenHref: "https://www.youtube.com/watch?v=jhthdbsLv4E",
      cta: "Discography",
      skills: ["Prod.by", "Arrange", "VENIRUS"],
    },
    {
      title: "[Prod.by] kumira - 위험해",
      period: "Prod.by",
      type: "kumira · VENIRUS",
      summary:
        "kumira의 싱글 작업에 프로덕션 크레딧으로 참여했습니다. 외부 보컬/래퍼와 호흡을 맞춘 협업입니다.",
      href: "https://www.notion.so/raingem/VENI-s-Discography-c1529c8e5386413089ac9264644d223c",
      listenHref: "https://www.youtube.com/watch?v=Hh5tF0gvq4g",
      cta: "Discography",
      skills: ["Prod.by", "Collaboration", "VENIRUS"],
    },
    {
      title: "[Prod.by] Holmsted - Survive",
      period: "Prod.by",
      type: "Holmsted · VENIRUS",
      summary: "Holmsted의 작업에 VENIRUS 작곡/프로덕션 크레딧으로 참여한 외부 협업입니다.",
      href: "https://www.notion.so/raingem/VENI-s-Discography-c1529c8e5386413089ac9264644d223c",
      listenHref: "https://www.youtube.com/watch?v=YQ5DRFveoRk",
      cta: "Discography",
      skills: ["Prod.by", "Compose", "VENIRUS"],
    },
    {
      title: "[Prod.by] kumira - KottonVill : 다락방",
      period: "Prod.by",
      type: "kumira · VENIRUS",
      summary:
        "앨범 전곡 프로덕션을 맡은 외부 협업입니다.",
      href: "https://www.notion.so/raingem/VENI-s-Discography-c1529c8e5386413089ac9264644d223c",
      listenHref: "https://music.youtube.com/playlist?list=OLAK5uy_nCxov7KU6806wSy_BDRknr5ZpAVntIsBY",
      coverImage: "./assets/covers/kottonvill-640.jpg",
      cta: "Discography",
      skills: ["Prod.by", "Album Production", "VENIRUS"],
    },
    {
      title: "[Prod.by & Feat.] IndEgo Aid - 자가격리패키지 : Comma",
      period: "Prod.by & Feat.",
      type: "IndEgo Aid · VENI RAIN",
      summary:
        "프로덕션과 피처링으로 동시에 참여한 협업입니다. 보컬과 사운드 메이킹을 함께 맡았습니다.",
      href: "https://www.notion.so/raingem/VENI-s-Discography-c1529c8e5386413089ac9264644d223c",
      listenHref: "https://www.youtube.com/watch?v=SjDueooVpH0&list=PLsz52Sh1SHNbngvNFONW8Xlq7q0AbypIz",
      cta: "Discography",
      skills: ["Prod.by", "Feature", "Collaboration"],
    },
    {
      title: "[Mixtape] P V R V D V X",
      period: "Mixtape",
      type: "VENIRUS",
      summary:
        "전곡 프로듀싱한 믹스테이프입니다.",
      href: "https://www.notion.so/raingem/VENI-s-Discography-c1529c8e5386413089ac9264644d223c",
      listenHref: "https://soundcloud.com/venirain/sets/paradox",
      coverImage: "./assets/covers/paradox.png",
      cta: "Discography",
      skills: ["Mixtape", "Produced by", "VENIRUS"],
    },
    {
      title: "[Arr.by] 서연고 사이퍼 CINDY",
      period: "Arr.by",
      type: "Cypher · VENIRUS",
      summary:
        "Arranged by VENIRUS로 참여한 사이퍼 작업입니다. 작곡뿐 아니라 편곡자로 외부 협업에 참여했습니다.",
      href: "https://www.notion.so/raingem/VENI-s-Discography-c1529c8e5386413089ac9264644d223c",
      listenHref: "https://www.youtube.com/watch?v=bgQuMXl2L8Y",
      cta: "Discography",
      skills: ["Arr.by", "Arrangement", "VENIRUS"],
    },
  ],
  workTabs: {
    game: {
      eyebrow: "Game Audio / BGM",
      title: "플레이 안에서 작동하는 사운드",
      text: "Wwise와 Unreal Engine 5 기반 구현, 전투 BGM, 공간감, UI 피드백처럼 플레이어가 바로 알아차리는 작업을 모았습니다.",
    },
    music: {
      eyebrow: "Music Discography",
      title: "VENI RAIN / VENIRUS 음악 작업",
      text: "작사, 작곡, 보컬, 편곡, 믹싱/마스터링까지 직접 다룬 24개 릴리즈를 모았습니다. 게임 오디오와는 별개로 이어온 7년+ 음악 제작 경력입니다.",
    },
  },
  practice: [
    {
      title: "Gameplay-first audio",
      text: "사운드를 분위기 장식이 아니라 플레이어가 상황, 거리, 위험, 인터랙션을 이해하는 정보로 설계합니다.",
    },
    {
      title: "Implementation-ready workflow",
      text: "FL Studio에서 소스를 만들고 Wwise Event, Switch, RTPC, 컨테이너 구조를 정리한 뒤 UE5 Blueprint, Anim Notify, 데이터 테이블과 연결합니다.",
    },
    {
      title: "Audio QA & polishing",
      text: "실제 플레이 테스트에서 묻히는 구간, 과한 피드백, 재생 오류, 공간감 문제를 확인하고 볼륨과 우선순위를 조정합니다.",
    },
    {
      title: "Source-centered production",
      text: "싱어송라이터이자 프로듀서로 보컬 녹음, 디렉팅, 편집, 믹싱을 직접 다루며 소스 퀄리티와 밸런스에 대한 기준을 게임 오디오에도 그대로 적용합니다.",
    },
  ],
  links: [
    { label: "Email", icon: "📧", href: "mailto:vnrs97@gmail.com" },
    { label: "GitHub", icon: "⌘", href: "https://github.com/raindrovvv" },
    { label: "Blog", icon: "✎", href: "https://raindrovvv.tistory.com" },
    { label: "SoundCloud", icon: "☁", href: "https://soundcloud.com/venirain" },
    { label: "Instagram", icon: "◎", href: "https://www.instagram.com/raindrovvv/" },
    {
      label: "Notion",
      icon: "◈",
      href: "https://www.notion.so/raingem/Portfolio-b507bf5ce7334a40b5dabc2fce226300",
    },
    {
      label: "Slides",
      icon: "▣",
      href: "https://docs.google.com/presentation/d/1Jmfm_5ZRj9EfSarHVeVsUaEku4qlAIsZJJmyfgGs5ZM/edit?slide=id.p1",
    },
  ],
};

const fillFields = () => {
  document.querySelectorAll("[data-field]").forEach((node) => {
    const key = node.dataset.field;
    if (portfolio[key]) node.textContent = portfolio[key];
  });
  document.title = "Jungmin Cha | Game Audio Designer";
};

const TEXT_EDIT_STORAGE_KEY = "jungmin-portfolio-text-overrides-v1";
let refreshTextEditorTargets = () => {};
let activateWorkTab = () => {};

const renderFocus = () => {
  const fullList = document.querySelector("#focus-list");
  const heroList = document.querySelector("#hero-focus-list");
  const tag = (item) => `<span class="tag">${item}</span>`;
  fullList.innerHTML = portfolio.focus.map(tag).join("");
  heroList.innerHTML = portfolio.focus.slice(0, 5).map(tag).join("");
};

const renderWorkIntro = (activeTab) => {
  const intro = document.querySelector("#work-intro");
  const copy = portfolio.workTabs[activeTab];
  intro.innerHTML = `
    <span>${copy.eyebrow}</span>
    <strong>${copy.title}</strong>
    <p>${copy.text}</p>
  `;
};

const coverPalettes = [
  ["#f4c5a8", "#a8c8e8"],
  ["#a7e5d3", "#c8b8e0"],
  ["#e8b8c4", "#f0efed"],
  ["#a8c8e8", "#292524"],
  ["#d6d3d1", "#777169"],
  ["#1ed760", "#1f1f1f"],
];

const getYouTubeId = (url = "") => {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([^?&/]+)/);
  return match ? match[1] : "";
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const getListenHref = (project) => project.listenHref || (project.cta === "Listen" ? project.href : "");

const getCoverData = (project, index) => {
  const [from, to] = coverPalettes[index % coverPalettes.length];
  const youtubeId = getYouTubeId(project.coverImage || getListenHref(project));
  const image = project.coverImage || (youtubeId ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg` : "");

  return {
    image,
    style: `--cover-from: ${from}; --cover-to: ${to};`,
  };
};

const getProjectMedia = (project) => {
  if (!project.media) return null;

  const href = project.media.href || project.href || "";
  const youtubeId = getYouTubeId(href);
  const fallbackImage = youtubeId ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg` : "";
  const usesAnimatedPreview = /\.(gif|webp)$/i.test(project.media.image || "");
  const posterImage =
    project.media.poster || project.media.image?.replace(/\.(gif|webp)$/i, "-poster.jpg") || fallbackImage;
  const image = usesAnimatedPreview && prefersReducedMotion ? posterImage : project.media.image || fallbackImage;

  if (!image) return null;

  return {
    href,
    image,
    fallback: prefersReducedMotion ? "" : project.media.fallback || "",
    label: project.media.label || "Preview",
    isVideo: Boolean(youtubeId),
  };
};

const renderCoverMedia = (media) => {
  const image = `<img class="cover-media" src="${media.image}" alt="" loading="lazy" decoding="async" />`;

  if (!media.fallback || !media.image.toLowerCase().endsWith(".webp")) {
    return image;
  }

  return `<picture>
    <source srcset="${media.image}" type="image/webp" />
    <img class="cover-media" src="${media.fallback}" alt="" loading="lazy" decoding="async" />
  </picture>`;
};

const workViewCache = new Map();

const renderProjects = (activeTab = "game") => {
  const list = document.querySelector("#project-list");
  const projects = activeTab === "music" ? portfolio.musicProjects : portfolio.projects;

  renderWorkIntro(activeTab);

  if (list.dataset.activeWork === activeTab && list.childElementCount) {
    refreshTextEditorTargets();
    return;
  }

  if (list.dataset.activeWork && list.childNodes.length) {
    const currentView = document.createDocumentFragment();
    currentView.append(...list.childNodes);
    workViewCache.set(list.dataset.activeWork, currentView);
  }

  const cachedView = workViewCache.get(activeTab);
  list.dataset.activeWork = activeTab;

  if (cachedView?.childNodes.length) {
    list.replaceChildren(cachedView);
    refreshTextEditorTargets();
    return;
  }

  list.innerHTML = projects
    .map((project, index) => {
      const isMusic = activeTab === "music";
      const listenHref = getListenHref(project);
      const projectMedia = isMusic ? null : getProjectMedia(project);
      const hasMusicCover = isMusic && (project.coverImage || getYouTubeId(listenHref));
      const musicCover = hasMusicCover ? getCoverData(project, index) : null;
      const cardHref = isMusic && listenHref && !hasMusicCover ? listenHref : project.href;
      const cardCta = isMusic && listenHref && !hasMusicCover ? "Listen" : project.cta || "View detail";

      return `
        <article class="work-card${project.featured ? " featured" : ""}${project.connection ? ` linked-case linked-case-${project.connection.side}` : ""}">
          <div>
            ${
              hasMusicCover
                ? `<div class="music-cover" style="${musicCover.style}">
                    <img class="cover-media" src="${musicCover.image}" alt="" loading="lazy" decoding="async" />
                    <a class="listen-button" href="${listenHref}" target="_blank" rel="noreferrer" aria-label="${project.title} 바로 듣기"><span aria-hidden="true">▶</span><span>Listen</span></a>
                  </div>`
                : ""
            }
            ${
              projectMedia
                ? projectMedia.href
                  ? `<a class="game-cover" href="${projectMedia.href}" target="_blank" rel="noreferrer" aria-label="${project.title} 미디어 보기">
                    ${renderCoverMedia(projectMedia)}
                    <span class="media-label">${projectMedia.label}</span>
                    <span class="listen-button media-button">
                      ${projectMedia.isVideo ? `<span aria-hidden="true">▶</span><span>Watch</span>` : `<span aria-hidden="true">↗</span><span>View</span>`}
                    </span>
                  </a>`
                  : `<div class="game-cover" aria-label="${project.title} 미디어 프리뷰">
                    ${renderCoverMedia(projectMedia)}
                    <span class="media-label">${projectMedia.label}</span>
                  </div>`
                : ""
            }
            ${
              project.connection
                ? `<div class="connection-badge" aria-label="${project.connection.label} ${project.connection.role}">
                    <span class="connection-icon" aria-hidden="true">⌁</span>
                    <span>${project.connection.label}</span>
                    <small>${project.connection.role}</small>
                  </div>`
                : ""
            }
            <div class="card-meta">
              <span>${project.period}</span>
              <span>${project.type}</span>
            </div>
            <h3>${project.title}</h3>
            <p class="card-summary">${project.summary}</p>
            ${
              project.scope
                ? `<div class="scope-list">${Object.entries(project.scope)
                    .map(
                      ([key, value]) =>
                        `<div class="scope-row"><strong>${scopeLabels[key] || key}</strong><span>${value}</span></div>`,
                    )
                    .join("")}</div>`
                : ""
            }
            ${
              project.skills
                ? `<div class="skill-list">${project.skills
                    .map((skill) => `<span class="skill-pill">${skill}</span>`)
                    .join("")}</div>`
                : ""
            }
          </div>
          ${
            cardHref
              ? `<a class="tag card-link" href="${cardHref}" target="_blank" rel="noreferrer">${cardCta}</a>`
              : `<span class="tag">Case study</span>`
          }
        </article>
      `;
    })
    .join("");
  refreshTextEditorTargets();
};

const scopeLabels = {
  content: "Content",
  implementation: "Implementation",
  proof: "Proof",
};

const renderReelNotes = () => {
  const list = document.querySelector("#reel-notes");
  list.innerHTML = portfolio.reelNotes
    .map(
      (note, index) => `
        <article class="reel-note">
          <span class="reel-note-index">${String(index + 1).padStart(2, "0")}</span>
          <div>
            <h3>${note.title}</h3>
            <p>${note.text}</p>
          </div>
        </article>
      `,
    )
    .join("");
  refreshTextEditorTargets();
};

const renderPractice = () => {
  const list = document.querySelector("#practice-list");
  list.innerHTML = portfolio.practice
    .map(
      (item) => `
        <article class="practice-item">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join("");
  refreshTextEditorTargets();
};

const renderLinks = () => {
  const list = document.querySelector("#contact-links");
  list.innerHTML = portfolio.links
    .map(
      (link) =>
        `<a href="${link.href}" target="_blank" rel="noreferrer"><span class="contact-icon" aria-hidden="true">${link.icon}</span><span>${link.label}</span></a>`,
    )
    .join("");
  refreshTextEditorTargets();
};

const setupSecretTextEditor = () => {
  const trigger = document.querySelector(".brand-mark");
  if (!trigger) return;

  let editMode = false;
  let clickCount = 0;
  let clickTimer = 0;
  let overrides = {};
  const originalText = {};
  const editableEvents = new WeakSet();
  const activeEditableNodes = new Set();
  const editCommitTimers = new WeakMap();
  const windowNameStorageKey = "__jungminPortfolioTextOverrides";
  let isApplyingText = false;

  const normalizeStoredOverrides = (value) => {
    if (!value) return {};
    try {
      const parsed = typeof value === "string" ? JSON.parse(value) : value;
      if (parsed && typeof parsed === "object" && parsed.overrides) return parsed.overrides;
      if (parsed && typeof parsed === "object") return parsed;
    } catch {
      return {};
    }
    return {};
  };

  const overrideCount = (value) => Object.keys(value || {}).length;

  const readWindowNameOverrides = () => {
    try {
      const parsed = JSON.parse(window.name || "{}");
      return normalizeStoredOverrides(parsed[windowNameStorageKey]);
    } catch {
      return {};
    }
  };

  const writeWindowNameOverrides = (value) => {
    try {
      let parsed = {};
      try {
        parsed = JSON.parse(window.name || "{}");
      } catch {
        parsed = {};
      }
      parsed[windowNameStorageKey] = value;
      window.name = JSON.stringify(parsed);
    } catch {
      // Window-name persistence is only a same-tab fallback.
    }
  };

  const replaceHistoryOverrides = (value) => {
    try {
      history.replaceState(
        {
          ...(history.state && typeof history.state === "object" ? history.state : {}),
          [TEXT_EDIT_STORAGE_KEY]: value,
        },
        document.title,
      );
    } catch {
      // Some embedded/file contexts can reject history writes.
    }
  };

  const loadOverrides = () => {
    const candidates = [];
    try {
      candidates.push(normalizeStoredOverrides(localStorage.getItem(TEXT_EDIT_STORAGE_KEY)));
    } catch {
      candidates.push({});
    }
    try {
      candidates.push(normalizeStoredOverrides(sessionStorage.getItem(TEXT_EDIT_STORAGE_KEY)));
    } catch {
      candidates.push({});
    }
    candidates.push(normalizeStoredOverrides(history.state?.[TEXT_EDIT_STORAGE_KEY]));
    candidates.push(readWindowNameOverrides());

    return candidates.find((candidate) => overrideCount(candidate) > 0) || {};
  };

  const clearPersistedOverrides = () => {
    try {
      localStorage.removeItem(TEXT_EDIT_STORAGE_KEY);
    } catch {
      // Ignore storage availability differences between browsers.
    }
    try {
      sessionStorage.removeItem(TEXT_EDIT_STORAGE_KEY);
    } catch {
      // Ignore storage availability differences between browsers.
    }
    replaceHistoryOverrides({});
    writeWindowNameOverrides({});
  };

  overrides = loadOverrides();

  const editorBar = document.createElement("div");
  editorBar.className = "text-editor-bar";
  editorBar.setAttribute("aria-hidden", "true");
  editorBar.innerHTML = `
    <span>Text edit mode</span>
    <button type="button" data-editor-action="reset">Reset text</button>
    <button type="button" data-editor-action="done">Done</button>
  `;
  document.body.appendChild(editorBar);

  const getTextNodes = () =>
    [
      ...document.querySelectorAll(
        [
          ".brand span:last-child",
          ".hero-title-name",
          ".hero-title-role",
          "[data-field]",
          ".role-token",
          ".featured-case .label",
          ".featured-case strong",
          ".featured-case p",
          ".featured-case a",
          "#reel .eyebrow",
          "#reel-title",
          ".reel-kicker",
          ".reel-caption",
          ".reel-note h3",
          ".reel-note p",
          "#work .eyebrow",
          "#work-title",
          "#practice .eyebrow",
          "#practice-title",
          "#work-intro span",
          "#work-intro strong",
          "#work-intro p",
          ".work-card h3",
          ".work-card p",
          ".connection-badge span",
          ".connection-badge small",
          ".scope-list dt",
          ".scope-list dd",
          ".skill-pill",
          ".practice-item h3",
          ".practice-item p",
          ".contact h2 span",
          ".contact p",
          ".contact-links a span:last-child",
          ".footer span",
        ].join(", "),
      ),
    ].filter(
      (node) =>
        node.textContent.trim() &&
        (!node.closest(".signal-panel") || node.closest(".featured-case")),
    );

  const getEditKey = (node, index) => {
    if (node.dataset.field) return `field:${node.dataset.field}`;
    if (node.dataset.editKey) return node.dataset.editKey;

    const stableKeySelectors = [
      [".brand span:last-child", "brand:name"],
      [".hero-title-name", "hero:name"],
      [".hero-title-role", "hero:role"],
      [".featured-case .label", "featured:label"],
      [".featured-case strong", "featured:title"],
      [".featured-case p", "featured:summary"],
      [".featured-case a", "featured:cta"],
      [".token-sound", "role-token:sound"],
      [".token-audio", "role-token:audio"],
      [".token-music", "role-token:music"],
      [".token-field", "role-token:field"],
      ["#reel .eyebrow", "reel:section-kicker"],
      ["#reel-title", "reel:heading"],
      [".reel-kicker", "reel:kicker"],
      [".reel-caption", "reel:caption"],
      ["#work .eyebrow", "work:kicker"],
      ["#work-title", "work:heading"],
      ["#practice .eyebrow", "practice:kicker"],
      ["#practice-title", "practice:heading"],
      [".contact h2 span:nth-child(1)", "contact:title:1"],
      [".contact h2 span:nth-child(2)", "contact:title:2"],
      [".contact h2 span:nth-child(3)", "contact:title:3"],
      [".contact h2 span:nth-child(4)", "contact:title:4"],
      [".footer span:first-child", "footer:name"],
      [".footer span:last-child", "footer:tools"],
    ];

    const stableMatch = stableKeySelectors.find(([selector]) => node.matches(selector));
    if (stableMatch) {
      node.dataset.editKey = stableMatch[1];
      return stableMatch[1];
    }

    if (node.matches(".role-token")) {
      const orbitIndex = [...document.querySelectorAll(".role-token")].indexOf(node);
      const key = `role-token:${orbitIndex}`;
      node.dataset.editKey = key;
      return key;
    }

    const section = node.closest("section")?.id || node.closest("header")?.className || node.closest("footer")?.className || "page";
    const card = node.closest(".work-card, .practice-item, .reel-note, .contact-links a");
    const cardIndex = card && card.parentElement ? [...card.parentElement.children].indexOf(card) : -1;
    const localIndex = card ? [...card.querySelectorAll("h3, p, span, dt, dd, strong, a")].indexOf(node) : index;
    const key = `${section}:${cardIndex}:${node.tagName.toLowerCase()}:${localIndex}`;
    node.dataset.editKey = key;
    return key;
  };

  const saveOverrides = () => {
    const serialized = JSON.stringify(overrides);
    try {
      localStorage.setItem(TEXT_EDIT_STORAGE_KEY, serialized);
    } catch {
      // Local files can be opened in storage-restricted browser contexts.
    }
    try {
      sessionStorage.setItem(TEXT_EDIT_STORAGE_KEY, serialized);
    } catch {
      // Session storage is a best-effort same-tab fallback.
    }
    replaceHistoryOverrides(overrides);
    writeWindowNameOverrides(overrides);
  };

  const blockTextTags = new Set([
    "ADDRESS",
    "ARTICLE",
    "ASIDE",
    "BLOCKQUOTE",
    "DIV",
    "FIGCAPTION",
    "FIGURE",
    "FOOTER",
    "H1",
    "H2",
    "H3",
    "H4",
    "H5",
    "H6",
    "HEADER",
    "LI",
    "MAIN",
    "P",
    "PRE",
    "SECTION",
  ]);

  const normalizeEditableText = (value) =>
    value
      .replace(/\u00a0/g, " ")
      .replace(/[ \t]+\n/g, "\n")
      .replace(/\n[ \t]+/g, "\n")
      .replace(/\n{3,}/g, "\n\n")
      .trim();

  const readEditableText = (node) => {
    const parts = [];

    const walk = (current) => {
      current.childNodes.forEach((child) => {
        if (child.nodeType === Node.TEXT_NODE) {
          parts.push(child.textContent || "");
          return;
        }
        if (!(child instanceof HTMLElement)) return;
        if (child.tagName === "BR") {
          parts.push("\n");
          return;
        }

        const isBlock = blockTextTags.has(child.tagName);
        const before = parts.join("").endsWith("\n");
        if (isBlock && parts.length && !before) parts.push("\n");
        walk(child);
        const after = parts.join("").endsWith("\n");
        if (isBlock && !after) parts.push("\n");
      });
    };

    walk(node);
    return normalizeEditableText(parts.join("") || node.textContent || "");
  };

  const markTextSpacing = (node, value) => {
    const hasCustomSpacing = /\n| {2,}/.test(value);
    if (hasCustomSpacing) {
      node.dataset.textSpacing = "preserve";
    } else {
      delete node.dataset.textSpacing;
    }
  };

  const commitNodeText = (node, key) => {
    if (isApplyingText) return;
    const nextText = readEditableText(node);
    const original = originalText[key] ?? "";

    if (!nextText || nextText === original.trim()) {
      delete overrides[key];
      delete node.dataset.textEdited;
      delete node.dataset.textSpacing;
    } else {
      overrides[key] = nextText;
      node.dataset.textEdited = "true";
      markTextSpacing(node, nextText);
    }
    saveOverrides();
  };

  const queueCommitNodeText = (node, key) => {
    if (isApplyingText) return;
    window.clearTimeout(editCommitTimers.get(node));
    editCommitTimers.set(
      node,
      window.setTimeout(() => {
        commitNodeText(node, key);
      }, 40),
    );
  };

  const commitAllEditableText = () => {
    const nodes = new Set([
      ...activeEditableNodes,
      ...document.querySelectorAll("[data-text-editable='true']"),
    ]);
    nodes.forEach((node, index) => {
      if (!(node instanceof HTMLElement)) return;
      window.clearTimeout(editCommitTimers.get(node));
      commitNodeText(node, getEditKey(node, index));
    });
  };

  window.addEventListener("beforeunload", commitAllEditableText);

  const applyOverrides = (nodes = getTextNodes()) => {
    isApplyingText = true;
    nodes.forEach((node, index) => {
      const key = getEditKey(node, index);
      if (!Object.prototype.hasOwnProperty.call(originalText, key)) {
        originalText[key] = node.textContent;
      }
      if (Object.prototype.hasOwnProperty.call(overrides, key)) {
        node.textContent = overrides[key];
        node.dataset.textEdited = "true";
        markTextSpacing(node, overrides[key]);
      } else {
        delete node.dataset.textEdited;
        delete node.dataset.textSpacing;
      }
    });
    isApplyingText = false;
  };

  const restoreOriginalText = () => {
    getTextNodes().forEach((node, index) => {
      const key = getEditKey(node, index);
      if (Object.prototype.hasOwnProperty.call(originalText, key)) {
        node.textContent = originalText[key];
        delete node.dataset.textEdited;
        delete node.dataset.textSpacing;
      }
    });
  };

  const setEditable = (node, key) => {
    const link = node.closest("a");
    if (link?.hasAttribute("href") && !link.dataset.editHref) {
      link.dataset.editHref = link.getAttribute("href");
      link.removeAttribute("href");
    }

    node.dataset.textEditable = "true";
    node.dataset.editKey = key;
    node.setAttribute("contenteditable", "true");
    node.setAttribute("spellcheck", "false");
    node.setAttribute("aria-label", "편집 가능한 포트폴리오 텍스트");
    activeEditableNodes.add(node);

    if (editableEvents.has(node)) return;
    editableEvents.add(node);

    node.addEventListener("click", (event) => {
      if (!editMode) return;
      event.stopPropagation();
    });

    node.addEventListener("input", () => queueCommitNodeText(node, getEditKey(node, 0)));
    node.addEventListener("keyup", () => queueCommitNodeText(node, getEditKey(node, 0)));
    node.addEventListener("paste", () => queueCommitNodeText(node, getEditKey(node, 0)));
    node.addEventListener("cut", () => queueCommitNodeText(node, getEditKey(node, 0)));
    node.addEventListener("blur", () => commitNodeText(node, getEditKey(node, 0)));
    node.addEventListener("compositionend", () => commitNodeText(node, getEditKey(node, 0)));
  };

  const unsetEditable = (node) => {
    const link = node.closest("a");
    if (link?.dataset.editHref) {
      link.setAttribute("href", link.dataset.editHref);
      delete link.dataset.editHref;
    }

    delete node.dataset.textEditable;
    activeEditableNodes.delete(node);
    node.removeAttribute("contenteditable");
    node.removeAttribute("spellcheck");
    node.removeAttribute("aria-label");
  };

  const syncEditableState = ({ applyStoredText = true } = {}) => {
    const nodes = getTextNodes();
    if (applyStoredText) {
      applyOverrides(nodes);
    }
    nodes.forEach((node, index) => {
      const key = getEditKey(node, index);
      if (editMode) {
        setEditable(node, key);
      } else {
        unsetEditable(node);
      }
    });
  };

  const setEditMode = (enabled) => {
    editMode = enabled;
    document.body.classList.toggle("text-edit-mode", editMode);
    editorBar.classList.toggle("is-visible", editMode);
    editorBar.setAttribute("aria-hidden", String(!editMode));
    syncEditableState({ applyStoredText: editMode });
  };

  refreshTextEditorTargets = syncEditableState;
  applyOverrides();

  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    clickCount += 1;
    clearTimeout(clickTimer);
    clickTimer = window.setTimeout(() => {
      clickCount = 0;
    }, 1800);

    if (clickCount < 10) return;
    clickCount = 0;
    setEditMode(!editMode);
  });

  editorBar.addEventListener("click", (event) => {
    const action = event.target instanceof HTMLElement ? event.target.dataset.editorAction : "";
    if (action === "done") {
      event.preventDefault();
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
      commitAllEditableText();
      saveOverrides();
      setEditMode(false);
    }
    if (action === "reset") {
      overrides = {};
      clearPersistedOverrides();
      workViewCache.clear();
      restoreOriginalText();
      fillFields();
      renderFocus();
      renderReelNotes();
      document.querySelector("#project-list").dataset.activeWork = "";
      renderProjects(document.querySelector("[data-work-tab].is-active")?.dataset.workTab || "game");
      renderPractice();
      renderLinks();
      restoreOriginalText();
      setEditMode(true);
    }
  });
};

const setupWorkTabs = () => {
  activateWorkTab = (activeTab = "game") => {
    document.querySelectorAll("[data-work-tab]").forEach((item) => {
      const isActive = item.dataset.workTab === activeTab;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    renderProjects(activeTab);
  };

  document.querySelectorAll("[data-work-tab]").forEach((tab) => {
    tab.addEventListener("click", () => {
      activateWorkTab(tab.dataset.workTab);
    });
  });
};

const setupMarqueeScroll = () => {
  const marquee = document.querySelector("#focus-list");
  if (!marquee) return;

  let isDragging = false;
  let startX = 0;
  let startScrollLeft = 0;

  marquee.addEventListener(
    "wheel",
    (event) => {
      if (marquee.scrollWidth <= marquee.clientWidth) return;
      const horizontalDelta =
        Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;

      marquee.scrollLeft += horizontalDelta;
      event.preventDefault();
    },
    { passive: false },
  );

  marquee.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 && event.button !== 1) return;

    isDragging = true;
    startX = event.clientX;
    startScrollLeft = marquee.scrollLeft;
    marquee.classList.add("is-dragging");
    marquee.setPointerCapture(event.pointerId);
    event.preventDefault();
  });

  marquee.addEventListener("pointermove", (event) => {
    if (!isDragging) return;

    const dragDistance = event.clientX - startX;
    marquee.scrollLeft = startScrollLeft - dragDistance;
  });

  const stopDragging = (event) => {
    if (!isDragging) return;

    isDragging = false;
    marquee.classList.remove("is-dragging");
    if (marquee.hasPointerCapture(event.pointerId)) {
      marquee.releasePointerCapture(event.pointerId);
    }
  };

  marquee.addEventListener("pointerup", stopDragging);
  marquee.addEventListener("pointercancel", stopDragging);
  marquee.addEventListener("pointerleave", stopDragging);
};

const setupAudioConsole = () => {
  const consoleRoot = document.querySelector("[data-audio-console], .audio-console");
  if (!consoleRoot) return;

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  const enableButton = document.querySelector("#audio-enable");
  const floatingAudioControl = document.querySelector("#floating-audio-control");
  const resetButton = document.querySelector("#audio-reset");
  const occlusionInput = document.querySelector("#occlusion-control");
  const distanceInput = document.querySelector("#distance-control");
  const statusText = document.querySelector("#console-status");
  const stateText = document.querySelector("#console-state");
  const routeText = document.querySelector("#console-route");
  const lpfText = document.querySelector("#console-lpf");
  const volumeText = document.querySelector("#console-volume");
  const cueText = document.querySelector("#console-cue");
  const meterRoot = consoleRoot.querySelector(".console-meter");
  let meters = [];
  const stateButtons = [...document.querySelectorAll("[data-audio-state]")];
  const cueButtons = [...document.querySelectorAll("[data-audio-cue]")];

  if (!enableButton || !AudioContextClass) {
    if (enableButton) {
      enableButton.querySelector(".transport-label").textContent = "Unavailable";
      enableButton.disabled = true;
    }
    if (floatingAudioControl) {
      floatingAudioControl.setAttribute("aria-hidden", "true");
    }
    return;
  }

  const stateConfig = {
    explore: {
      label: "Explore",
      route: "Event: Play_Explore_Music · Switch: Explore",
      fileName: "explore",
      extension: "mp3",
      freqA: 146.83,
      freqB: 220,
      type: "sine",
      energy: 0.24,
    },
    combat: {
      label: "Combat",
      route: "Event: Set_Combat_BGM · Switch: Combat",
      fileName: "combat",
      extension: "mp3",
      freqA: 110,
      freqB: 329.63,
      type: "sawtooth",
      energy: 0.72,
    },
    boss: {
      label: "Boss Room",
      route: "Event: Enter_Boss_Room · Switch: Boss Room",
      fileName: "boss-room",
      extension: "mp3",
      freqA: 82.41,
      freqB: 246.94,
      type: "triangle",
      energy: 0.94,
    },
  };

  const cueConfig = {
    ui: {
      label: "UI",
      fileName: "ui",
      extension: "wav",
      spatial: false,
      frequency: 1240,
      duration: 0.1,
      type: "sine",
      gain: 0.18,
    },
    hit: {
      label: "Hit",
      fileName: "hit",
      extension: "wav",
      spatial: true,
      frequency: 92,
      duration: 0.18,
      type: "triangle",
      gain: 0.28,
    },
    trap: {
      label: "Trap",
      fileName: "trap",
      extension: "wav",
      spatial: true,
      frequency: 440,
      duration: 0.34,
      type: "sawtooth",
      gain: 0.16,
    },
    monster: {
      label: "Monster",
      fileName: "monster",
      extension: "wav",
      spatial: true,
      frequency: 760,
      duration: 0.18,
      type: "square",
      gain: 0.13,
    },
  };

  const waveformData = {
    explore: [
      59.5, 58.5, 58.4, 40.9, 31.1, 58.6, 51.6, 59.2, 39.6, 51.4, 36.2, 66.4, 55, 71.2, 48.2, 42.7,
      29.6, 58.4, 55.8, 60.8, 50.1, 54.2, 58.7, 61.6, 87.6, 69.3, 48.7, 38.9, 29.4, 66.3, 71.9, 64.9,
      52.7, 65.8, 65.8, 73.8, 64.2, 72.4, 52.1, 46.6, 29.4, 66.7, 62.8, 65.5, 63.9, 62.8, 70.4, 67.6,
      67.2, 70.4, 73, 50, 42.5, 61.3, 57.8, 53.7, 40.9, 53.7, 48.6, 76.3, 68.6, 72.2, 65, 49.5,
      43.1, 58.5, 61.7, 79.8, 54.6, 61.9, 67.2, 77, 75.8, 68.1, 79.8, 53.9, 45, 69.3, 74.2, 64,
      48.2, 64.1, 69.1, 86.5, 75.9, 71.8, 69.9, 48.2, 40.4, 63.1, 87.6, 68.7, 70, 60, 68, 82,
      70.8, 64.9, 81.9, 51.4, 41.7, 57.8, 54.8, 59.7, 39, 56, 44.8, 74.6, 72.7, 71.2, 68.8, 50.5,
      40.5, 67.2, 72.4, 72.5, 58.7, 56.2, 59.2, 65.9, 68.9, 66.8, 76.7, 50.8, 41.1, 68.7, 57.8, 54.6,
      39.3, 51.4, 44.2, 92, 62.3, 69, 62.9, 48.3, 40.7, 60.6, 62.8, 67.5, 49.6, 59.9, 53.3, 86.8,
      63.9, 59.6, 54.9, 52.4, 41.6, 54, 60.2, 58.7, 39, 63.7, 45.1, 65.9, 63.6, 63.4, 51.3, 52.5,
      42.5, 58.9, 69, 65.1, 55.3, 60.9, 46.6, 60.2, 75.8, 59.4, 49.3, 38.2, 29.3, 57.7, 53.9, 64.2,
      37.7, 55.1, 32.4, 63.7, 57.4, 62.7, 47.6, 41, 29.6, 59.4, 64.8, 67.8, 50, 49.6, 43.4, 52.6,
    ],
    combat: [
      88, 87.2, 85.3, 86.8, 88.7, 83.8, 78, 78.4, 68.1, 74.6, 77.5, 71, 74.5, 72.4, 72.1, 73.1,
      60.5, 59, 66.2, 60.1, 60.7, 62.8, 77.2, 67.9, 86, 75.2, 75.3, 78.5, 61.4, 57.5, 69.9, 70.7,
      64.1, 68, 58.5, 62.5, 79.3, 65, 64.8, 68.6, 61.6, 59.6, 72.1, 65.2, 65.2, 82.2, 74.5, 71.2,
      83.5, 80.9, 76.7, 76.2, 69.8, 63.2, 65.5, 66.6, 56.7, 71.4, 70.5, 65.7, 74.7, 71.5, 68.9, 73.8,
      59.2, 58.6, 65.5, 60.3, 61.3, 66, 76.5, 66.5, 85.3, 75.4, 76, 79.1, 61.2, 57.7, 70.6, 70,
      60.3, 66.9, 57.9, 62.5, 79.2, 65.7, 65.2, 67.9, 61.4, 59.7, 72.1, 64.4, 65.2, 82.1, 74.5, 71,
      88.7, 92, 87.8, 78.1, 78.4, 77.9, 81.3, 76.8, 73.7, 69.1, 70.8, 70.6, 72.2, 78.8, 76.8, 74,
      73.6, 72.6, 72.4, 78.6, 68, 64.4, 73.8, 75.8, 90, 85.1, 78.6, 70.3, 71.3, 73.8, 75.6, 69.4,
      66.4, 65.1, 68.3, 74.1, 80.5, 80.3, 72.1, 64.8, 69.1, 62.3, 65.9, 66, 69.3, 70.1, 67.9, 67.7,
      87.1, 85.1, 77.3, 72, 70.2, 69.2, 79.1, 76.7, 74.1, 71.2, 72, 68.8, 71.2, 80.1, 69.6, 72.4,
      74, 72.4, 72, 75.1, 69.4, 66.4, 68.3, 71, 86.5, 80.5, 76.3, 67.9, 75.1, 72.2, 78.6, 68.7,
      68, 70.2, 72.8, 73.7, 75.1, 80.9, 67.9, 62.8, 65, 66.1, 67.6, 69.6, 70.8, 71.6, 73, 77.2,
    ],
    boss: [
      83.4, 66.8, 56.1, 77.4, 48.7, 88.1, 86, 73.5, 68.4, 73.8, 35.6, 80.3, 60.8, 83.1, 62.7, 80.1,
      73.7, 61, 44.6, 70, 32, 82.4, 81.8, 74, 77.7, 79.6, 34.9, 77.3, 51.5, 82.6, 57.9, 83.2,
      83.2, 69.2, 49.2, 76.8, 60.3, 85.3, 84.3, 76.3, 63.4, 71.9, 46.8, 82.2, 43.7, 78.6, 62.5, 81.9,
      78.9, 64.6, 45.6, 71, 35.1, 82.1, 92, 68.3, 77.1, 81.3, 37.8, 76.3, 47.8, 78.4, 57.6, 86.4,
      70.8, 70.2, 59.1, 83.5, 76, 72.7, 79.4, 58.5, 52, 38.8, 28.6, 47.8, 32.8, 49.2, 76.4, 67.3,
      70.6, 74.7, 55.9, 81, 84.4, 65.6, 80.3, 61.7, 54.9, 43.1, 28.5, 53.5, 41.4, 54.4, 65.7, 64,
      71.8, 64.9, 55.4, 78.1, 61.6, 60.6, 74.8, 73.4, 73.1, 84.4, 56.3, 75.9, 76.8, 62, 73.2, 63.1,
      68.9, 84.5, 51.7, 76.7, 66.9, 66.7, 72, 54.8, 57.1, 41.9, 31.4, 42.5, 42, 44.8, 47.3, 53.9,
      83.4, 72.8, 56.3, 80.6, 60.3, 84, 83.6, 73.3, 69.7, 71.8, 40.8, 77, 47.8, 74.9, 66.6, 76.9,
      78.3, 60.3, 46.2, 70.3, 35.2, 84.5, 90.1, 68.6, 80.4, 83.3, 34.5, 79.4, 42.1, 81.8, 57.5, 87.7,
      81.6, 69.8, 62.6, 78.1, 49.8, 87.7, 81.8, 69.3, 63.5, 65.6, 37.6, 82.6, 57.6, 83.6, 60.3, 77,
      79.4, 60.3, 48.4, 68.8, 38.1, 80.8, 89.1, 69.2, 72.4, 75, 37.2, 75.9, 43.3, 80.7, 59.4, 81,
    ],
  };

  let audio = null;
  let currentState = "explore";
  let currentCue = "ui";
  let isEnabled = false;
  let renderedWaveformState = "";
  let waveformTicker = 0;
  const waveformVisibleBars = 48;

  const getRtpc = () => ({
    occlusion: Number(occlusionInput.value),
    distance: Number(distanceInput.value),
  });

  const renderWaveform = (state) => {
    if (!meterRoot || renderedWaveformState === state) return;

    const playhead = meterRoot.querySelector(".meter-playhead") || document.createElement("i");
    playhead.className = "meter-playhead";
    playhead.setAttribute("aria-hidden", "true");

    const fragment = document.createDocumentFragment();
    for (let index = 0; index < waveformVisibleBars; index += 1) {
      const bar = document.createElement("span");
      fragment.appendChild(bar);
    }
    fragment.appendChild(playhead);
    meterRoot.replaceChildren(fragment);
    meterRoot.style.setProperty("--waveform-bars", String(waveformVisibleBars));
    meterRoot.style.setProperty("--waveform-progress", "50%");
    meterRoot.style.setProperty("--playhead-opacity", isEnabled ? "1" : "0");
    meters = [...meterRoot.querySelectorAll("span")];
    renderedWaveformState = state;
  };

  const readWaveformPeak = (peaks, position) => {
    const length = peaks.length;
    const wrappedPosition = ((position % length) + length) % length;
    const lowerIndex = Math.floor(wrappedPosition);
    const upperIndex = (lowerIndex + 1) % length;
    const blend = wrappedPosition - lowerIndex;
    return peaks[lowerIndex] + (peaks[upperIndex] - peaks[lowerIndex]) * blend;
  };

  const updateWaveformWindow = (progress) => {
    const peaks = waveformData[currentState] || waveformData.explore;
    const centerPosition = progress * peaks.length;
    const lookBehind = Math.floor(waveformVisibleBars * 0.42);

    meters.forEach((meter, index) => {
      const sourceLevel = readWaveformPeak(peaks, centerPosition - lookBehind + index);
      const distanceFromPlayhead = Math.abs(index - lookBehind);
      const focusLift = Math.max(0, 1 - distanceFromPlayhead / 7) * 5;
      const level = Math.max(12, Math.min(94, sourceLevel + focusLift));
      meter.style.setProperty("--level", `${level.toFixed(1)}%`);
      meter.classList.toggle("is-played", isEnabled && index <= lookBehind);
      meter.classList.toggle("is-current", isEnabled && distanceFromPlayhead <= 1);
    });
  };

  const updateWaveformProgress = () => {
    if (!meterRoot) return;

    const track = getCurrentTrack();
    const element = track?.element;
    const duration = element?.duration;
    const progress =
      element && Number.isFinite(duration) && duration > 0
        ? Math.max(0, Math.min(1, element.currentTime / duration))
        : 0;

    updateWaveformWindow(progress);
    meterRoot.style.setProperty("--waveform-progress", "42%");
    meterRoot.style.setProperty("--playhead-opacity", isEnabled ? "1" : "0");
  };

  const startWaveformTicker = () => {
    if (waveformTicker) return;

    updateWaveformProgress();
    waveformTicker = window.setInterval(updateWaveformProgress, 125);
  };

  const stopWaveformTicker = ({ reset = false } = {}) => {
    if (waveformTicker) {
      window.clearInterval(waveformTicker);
      waveformTicker = 0;
    }
    if (reset && meterRoot) {
      updateWaveformWindow(0);
      meterRoot.style.setProperty("--waveform-progress", "42%");
      meterRoot.style.setProperty("--playhead-opacity", "0");
      meters.forEach((meter) => meter.classList.remove("is-played", "is-current"));
    } else {
      updateWaveformProgress();
    }
  };

  const createMusicTrack = (key, config) => {
    const element = new Audio();
    const extension = config.extension || "mp3";

    element.loop = true;
    element.hidden = true;
    element.preload = "metadata";
    element.volume = 0;
    element.dataset.ready = "false";
    element.dataset.track = key;
    element.src = `./assets/audio/${config.fileName}.${extension}`;

    element.addEventListener("canplay", () => {
      element.dataset.ready = "true";
      if (isEnabled && key === currentState) {
        tryPlayTrack({ key, element });
      }
      updateAudio();
    });

    element.addEventListener("error", () => {
      element.dataset.ready = "false";
    });

    consoleRoot.appendChild(element);

    return { key, element };
  };

  const createCueTrack = (key, config) => {
    const element = new Audio();
    const extension = config.extension || "wav";

    element.hidden = true;
    element.preload = "auto";
    element.volume = 0;
    element.dataset.ready = "false";
    element.dataset.cue = key;
    element.src = `./assets/audio/${config.fileName}.${extension}`;

    element.addEventListener("canplay", () => {
      element.dataset.ready = "true";
    });

    element.addEventListener("error", () => {
      element.dataset.ready = "false";
    });

    consoleRoot.appendChild(element);

    return { key, element };
  };

  const ensureAudio = () => {
    if (audio) return audio;

    const context = new AudioContextClass();
    const master = context.createGain();

    master.gain.value = 0;
    master.connect(context.destination);

    const tracks = Object.fromEntries(
      Object.entries(stateConfig).map(([key, config]) => [
        key,
        createMusicTrack(key, config),
      ]),
    );
    const cueTracks = Object.fromEntries(
      Object.entries(cueConfig).map(([key, config]) => [
        key,
        createCueTrack(key, config),
      ]),
    );

    audio = { context, master, tracks, cueTracks };
    return audio;
  };

  const getCurrentTrack = () => audio?.tracks?.[currentState];

  const isTrackReady = (track = getCurrentTrack()) =>
    track?.element.dataset.ready === "true" && !track.element.paused;

  const getMusicVolumeTarget = () =>
    Math.max(0, Math.min(0.82, getOutputGain() * getOcclusionGain() * 18));

  const getTrackLevel = (track) => track?.element.volume ?? 0;

  const setTrackLevel = (track, level) => {
    const safeLevel = Math.max(0, Math.min(1, level));
    if (track?.element) {
      track.element.volume = safeLevel;
    }
  };

  const fadeTrackTo = (track, targetVolume, duration = 520, { pauseAtEnd = false, resetAtEnd = false } = {}) => {
    if (!track) return Promise.resolve();

    if (track.fadeFrame) {
      cancelAnimationFrame(track.fadeFrame);
      track.fadeFrame = 0;
    }
    if (track.fadeResolve) {
      track.fadeResolve();
      track.fadeResolve = null;
    }
    const startVolume = getTrackLevel(track);
    const startTime = performance.now();
    const target = Math.max(0, Math.min(1, targetVolume));

    return new Promise((resolve) => {
      track.fadeResolve = resolve;
      const step = (time) => {
        const progress = duration <= 0 ? 1 : Math.max(0, Math.min(1, (time - startTime) / duration));
        const eased = 1 - Math.pow(1 - progress, 3);
        setTrackLevel(track, startVolume + (target - startVolume) * eased);

        if (progress < 1) {
          track.fadeFrame = requestAnimationFrame(step);
          return;
        }

        setTrackLevel(track, target);
        track.fadeFrame = 0;
        track.fadeResolve = null;
        if (pauseAtEnd) {
          track.element.pause();
          if (resetAtEnd && Number.isFinite(track.element.duration)) {
            track.element.currentTime = 0;
          }
        }
        resolve();
      };

      track.fadeFrame = requestAnimationFrame(step);
    });
  };

  const tryPlayTrack = async (track) => {
    if (!track) return false;

    try {
      if (track.element.readyState === 0) {
        track.element.load();
      }
      await track.element.play();
      track.element.dataset.ready = track.element.readyState >= 2 ? "true" : track.element.dataset.ready;
      return true;
    } catch {
      return false;
    }
  };

  const syncMusicTracks = async () => {
    if (!audio || !isEnabled) return;

    await Promise.all(
      Object.values(audio.tracks).map(async (track) => {
        if (track.key === currentState) {
          const didPlay = await tryPlayTrack(track);
          if (didPlay) {
            await fadeTrackTo(track, getMusicVolumeTarget(), 680);
          }
          return;
        }

        await fadeTrackTo(track, 0, 520, { pauseAtEnd: true, resetAtEnd: true });
      }),
    );
    updateAudio();
  };

  const stopMusicTracks = async () => {
    if (!audio) return;

    await Promise.all(
      Object.values(audio.tracks).map((track) =>
        fadeTrackTo(track, 0, 360, { pauseAtEnd: true, resetAtEnd: true }),
      ),
    );
  };

  const stopCueTracks = () => {
    if (!audio?.cueTracks) return;

    Object.values(audio.cueTracks).forEach((track) => {
      cancelAnimationFrame(track.fadeFrame);
      track.element.pause();
      setTrackLevel(track, 0);
      if (Number.isFinite(track.element.duration)) {
        track.element.currentTime = 0;
      }
    });
  };

  const getFilterFrequency = () => {
    const { occlusion, distance } = getRtpc();
    const occlusionRatio = occlusion / 100;
    const distanceRatio = distance / 100;
    const occlusionCut = 18000 * (0.05 + 0.95 * Math.pow(1 - occlusionRatio, 2.35));
    const distanceAirLoss = 18000 - 5200 * Math.pow(distanceRatio, 1.15);
    return Math.max(650, Math.min(18000, occlusionCut, distanceAirLoss));
  };

  const getOutputGain = () => {
    const { distance } = getRtpc();
    const distanceRatio = distance / 100;
    return Math.max(0.012, 0.06 * Math.pow(1 - distanceRatio * 0.78, 1.35));
  };

  const getOcclusionGain = () => {
    const { occlusion } = getRtpc();
    const occlusionRatio = occlusion / 100;
    return Math.max(0.04, 1 - 0.96 * Math.pow(occlusionRatio, 0.82));
  };

  const getSfxGain = () => {
    const { occlusion, distance } = getRtpc();
    const distanceRatio = distance / 100;
    const occlusionRatio = occlusion / 100;
    return Math.max(0.08, 0.9 - distanceRatio * 0.45 - occlusionRatio * 0.58);
  };

  const updateAudio = () => {
    if (!audio || !isEnabled) return;

    const now = audio.context.currentTime;
    const currentTrackIsReady = isTrackReady();
    if (currentTrackIsReady) {
      fadeTrackTo(getCurrentTrack(), getMusicVolumeTarget(), 120);
    }
    audio.master.gain.setTargetAtTime(0.42, now, 0.04);
  };

  const updateConsole = () => {
    const config = stateConfig[currentState];
    const { occlusion, distance } = getRtpc();
    const filterFrequency = getFilterFrequency();

    stateText.textContent = config.label;
    routeText.textContent = config.route;
    lpfText.textContent =
      filterFrequency >= 10000
        ? `Occ ${Math.round(occlusion)}% · LPF ${(filterFrequency / 1000).toFixed(1)}kHz`
        : `Occ ${Math.round(occlusion)}% · LPF ${Math.round(filterFrequency)}Hz`;
    volumeText.textContent = `Distance ${Math.round(4 + distance * 0.7)}m`;
    cueText.textContent = cueConfig[currentCue].spatial
      ? `Cue ${cueConfig[currentCue].label}`
      : `Cue ${cueConfig[currentCue].label} · 2D`;
    statusText.textContent = isEnabled
      ? "Interactive audio reel · running"
      : "Interactive audio reel · standby";
    enableButton.setAttribute("aria-pressed", String(isEnabled));
    enableButton.setAttribute("aria-label", isEnabled ? "오디오 일시정지" : "오디오 재생");
    const transportLabel = enableButton.querySelector(".transport-label");
    if (transportLabel) {
      transportLabel.textContent = isEnabled ? "Pause audio" : "Play audio";
    }
    if (floatingAudioControl) {
      floatingAudioControl.classList.toggle("is-visible", isEnabled);
      floatingAudioControl.setAttribute("aria-hidden", String(!isEnabled));
    }

    consoleRoot.style.setProperty("--meter-energy", config.energy.toFixed(2));
    renderWaveform(currentState);
    updateWaveformProgress();

    updateAudio();
  };

  const playCue = () => {
    if (!audio || !isEnabled) return;

    const cue = cueConfig[currentCue];
    const cueTrack = audio.cueTracks?.[currentCue];
    if (cueTrack?.element.dataset.ready === "true") {
      cancelAnimationFrame(cueTrack.fadeFrame);
      cueTrack.element.pause();
      if (Number.isFinite(cueTrack.element.duration)) {
        cueTrack.element.currentTime = 0;
      }
      setTrackLevel(cueTrack, cue.spatial ? Math.max(0.06, getSfxGain() * 0.92) : 0.88);
      cueTrack.element.play().catch(() => {});
      return;
    }
  };

  const setActiveState = (state) => {
    currentState = state;
    stateButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.audioState === state));
    updateConsole();
    syncMusicTracks();
  };

  const setActiveCue = (cue) => {
    currentCue = cue;
    cueButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.audioCue === cue));
    updateConsole();
    playCue();
  };

  const startAudio = async () => {
    const audioEngine = ensureAudio();

    await audioEngine.context.resume();
    isEnabled = true;
    audioEngine.master.gain.setTargetAtTime(0.42, audioEngine.context.currentTime, 0.04);
    updateConsole();
    startWaveformTicker();
    await syncMusicTracks();
    updateConsole();
  };

  const stopAudio = async () => {
    if (!audio || !isEnabled) return;

    isEnabled = false;
    updateConsole();
    await stopMusicTracks();
    stopCueTracks();
    stopWaveformTicker({ reset: true });
    audio.master.gain.setTargetAtTime(0, audio.context.currentTime, 0.04);
    await audio.context.suspend();
    updateConsole();
  };

  enableButton.addEventListener("click", async () => {
    if (isEnabled) {
      await stopAudio();
      return;
    }

    await startAudio();
  });

  floatingAudioControl?.addEventListener("click", stopAudio);

  stateButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setActiveState(button.dataset.audioState);
    });
  });

  cueButtons.forEach((button) => {
    button.addEventListener("click", () => setActiveCue(button.dataset.audioCue));
  });

  [occlusionInput, distanceInput].forEach((input) => {
    input.addEventListener("input", updateConsole);
  });

  resetButton.addEventListener("click", () => {
    occlusionInput.value = "14";
    distanceInput.value = "32";
    setActiveState("explore");
    setActiveCue("ui");
  });

  updateConsole();
};

const setupTheme = () => {
  const toggle = document.querySelector(".theme-toggle");
  const saved = localStorage.getItem("portfolio-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const useDark = saved ? saved === "dark" : prefersDark;

  const applyTheme = (isDark) => {
    document.documentElement.classList.toggle("dark", isDark);
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.title = isDark ? "라이트모드로 전환" : "다크모드로 전환";
  };

  applyTheme(useDark);

  toggle.addEventListener("click", () => {
    const isDark = !document.documentElement.classList.contains("dark");
    applyTheme(isDark);
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  });
};

const setupCursorInteraction = () => {
  if (!window.matchMedia("(pointer: fine)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let cursorFrame = 0;
  let orbitFrame = 0;
  let tiltFrame = 0;
  let idleTimer = 0;
  let latestCursorEvent = null;
  let latestOrbitEvent = null;
  let latestTiltEvent = null;
  const hero = document.querySelector(".hero");

  const setRootCursor = (event) => {
    latestCursorEvent = event;
    document.body.classList.remove("cursor-idle");
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => document.body.classList.add("cursor-idle"), 900);

    if (cursorFrame) return;
    cursorFrame = requestAnimationFrame(() => {
      cursorFrame = 0;
      if (!latestCursorEvent) return;
      document.documentElement.style.setProperty("--cursor-x", `${latestCursorEvent.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${latestCursorEvent.clientY}px`);
    });
  };

  const updateOrbit = (event) => {
    latestOrbitEvent = event;
    if (orbitFrame) return;

    orbitFrame = requestAnimationFrame(() => {
      orbitFrame = 0;
      if (!latestOrbitEvent) return;

      const rect = hero.getBoundingClientRect();
      const x = (latestOrbitEvent.clientX - rect.left) / rect.width - 0.5;
      const y = (latestOrbitEvent.clientY - rect.top) / rect.height - 0.5;

      document.documentElement.style.setProperty("--orbit-x-slow", `${(x * 8).toFixed(2)}px`);
      document.documentElement.style.setProperty("--orbit-y-slow", `${(y * 8).toFixed(2)}px`);
      document.documentElement.style.setProperty("--orbit-x-mid", `${(x * -14).toFixed(2)}px`);
      document.documentElement.style.setProperty("--orbit-y-mid", `${(y * -12).toFixed(2)}px`);
      document.documentElement.style.setProperty("--orbit-x-fast", `${(x * 22).toFixed(2)}px`);
      document.documentElement.style.setProperty("--orbit-y-fast", `${(y * 18).toFixed(2)}px`);
    });
  };

  const clearOrbit = () => {
    [
      "--orbit-x-slow",
      "--orbit-y-slow",
      "--orbit-x-mid",
      "--orbit-y-mid",
      "--orbit-x-fast",
      "--orbit-y-fast",
    ].forEach((property) => document.documentElement.style.setProperty(property, "0px"));
  };

  const getInteractiveTarget = (node) =>
    node instanceof Element ? node.closest(".work-card, .signal-panel") : null;

  const updateTilt = (event) => {
    const card = getInteractiveTarget(event.target);
    if (!card) return;

    latestTiltEvent = { card, clientX: event.clientX, clientY: event.clientY };
    if (tiltFrame) return;

    tiltFrame = requestAnimationFrame(() => {
      tiltFrame = 0;
      if (!latestTiltEvent) return;

      const { card: target, clientX, clientY } = latestTiltEvent;
      const rect = target.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width - 0.5;
      const y = (clientY - rect.top) / rect.height - 0.5;
      target.style.setProperty("--tilt-x", x.toFixed(3));
      target.style.setProperty("--tilt-y", y.toFixed(3));
    });
  };

  const clearTilt = (event) => {
    const card = getInteractiveTarget(event.target);
    if (!card || card.contains(event.relatedTarget)) return;

    if (latestTiltEvent?.card === card) latestTiltEvent = null;
    card.style.setProperty("--tilt-x", "0");
    card.style.setProperty("--tilt-y", "0");
  };

  window.addEventListener("pointermove", setRootCursor, { passive: true });
  hero.addEventListener("pointermove", updateOrbit, { passive: true });
  hero.addEventListener("pointerleave", clearOrbit);
  document.addEventListener("pointermove", updateTilt, { passive: true });
  document.addEventListener("pointerout", clearTilt, { passive: true });
};

const setupOrbitLinks = () => {
  document.querySelectorAll("[data-orbit]").forEach((link) => {
    link.addEventListener("click", (event) => {
      link.classList.remove("is-hopping");
      requestAnimationFrame(() => link.classList.add("is-hopping"));
      window.setTimeout(() => link.classList.remove("is-hopping"), 420);

      if (!link.dataset.workJump) return;
      event.preventDefault();

      activateWorkTab(link.dataset.workJump);
      document.querySelector("#work")?.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(history.state, document.title, "#work");
    });
  });
};

const setupLazyYouTubeEmbeds = () => {
  document.querySelectorAll("[data-youtube-lazy]").forEach((root) => {
    const youtubeId = root.dataset.youtubeId;
    if (!youtubeId) return;

    const button = root.querySelector("button");
    const title = root.dataset.youtubeTitle || "YouTube video";
    const loadEmbed = () => {
      if (root.dataset.loaded === "true") return;
      root.dataset.loaded = "true";

      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`;
      iframe.title = title;
      iframe.loading = "lazy";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.allowFullscreen = true;
      root.replaceChildren(iframe);
    };

    button?.addEventListener("click", loadEmbed);
  });
};

fillFields();
renderFocus();
renderReelNotes();
renderProjects();
renderPractice();
renderLinks();
setupSecretTextEditor();
setupTheme();
setupWorkTabs();
setupMarqueeScroll();
setupAudioConsole();
setupCursorInteraction();
setupOrbitLinks();
setupLazyYouTubeEmbeds();
