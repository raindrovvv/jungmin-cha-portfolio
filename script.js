const portfolioKo = {
  name: "차정민",
  role: "Game Audio · Wwise · UE5 · C++ / Blueprint",
  headline: "차정민 Game Audio Designer",
  intro:
    "코드와 AI 에이전트를 활용하는 Game Audio Designer입니다. Wwise 구조, UE5 Blueprint, Physical Material 발소리, 런타임 오클루전까지 실제 빌드에서 작동할 때까지 설계하고 구현합니다.",
  years: "7년+",
  focusCount: "299명",
  source: "4.36/5",
  contactNote:
    "Wwise와 UE5 C++/Blueprint 사이에서 오디오가 실제 플레이 입력, 거리, 차폐, UI 피드백에 맞게 반응하도록 설계하고 검증합니다. 채용 또는 협업 문의는 이메일로 가장 빠르게 확인합니다.",
  footerName: "차정민 Game Audio Designer Portfolio",
  focus: [
    "Wwise",
    "Unreal Engine 5",
    "C++ / Blueprint",
    "Interactive BGM",
    "Audio Debugging",
    "FL Studio",
    "AI Agent Workflow",
    "SFX Design",
    "Unity / C#",
    "OpenAI API",
    "Git Collaboration",
  ],
  reelNotes: [
    {
      title: "C++ 오디오 컴포넌트가 있는 4v1 PvP 사례",
      text: "Guardian & Seeker에서 UGS_AudioComponentBase, Monster/Seeker 오디오 컴포넌트, UI 오디오 시스템으로 Wwise와 UE5를 연결했습니다.",
    },
    {
      title: "Wwise·UE 적용부터 C++/Blueprint 로직까지",
      text: "DistanceToPlayer, AttenuationMode, OcclusionDisable RTPC를 C++ UPROPERTY로 관리하고 Event, Switch, RTPC, Anim Notify를 실제 플레이 상태에 연결했습니다.",
    },
    {
      title: "플레이 테스트로 밸런싱과 QA 검증",
      text: "299명 플레이테스트(평균 4.36/5) 피드백을 바탕으로 BGM 전환, 발소리, 오클루전, UI 피드백을 세밀하게 조정했습니다.",
    },
  ],
  techAudio: {
    eyebrow: "기술 오디오",
    title: "Wwise와 UE5 안에서 실제로 작동하는 오디오 시스템",
    intro:
      "Guardian & Seeker에서 C++ 오디오 컴포넌트 설계, Wwise RTPC 연동, UE5 구현, 오클루전 디버깅, 플레이테스트 피드백 반영까지 이어지는 제작 흐름입니다.",
    items: [
      {
        title: "Wwise 시스템 설계",
        type: "Event / Switch / RTPC",
        summary:
          "전투 중 BGM, 몬스터, UI 피드백이 겹치는 상황에서 플레이어가 먼저 읽어야 할 신호를 기준으로 Event, Switch, RTPC, 컨테이너 구조를 나눴습니다.",
        proof: "191개 오디오 에셋을 역할과 우선순위 기준으로 분류하고 Wwise 구조에 연결",
        breakdown: [
          {
            label: "문제",
            text: "전투, 탐색, UI, 몬스터 사운드가 동시에 재생될 때 무엇이 우선 들려야 하는지 정리해야 했습니다.",
          },
          {
            label: "Wwise 구조",
            text: "Event, Switch, RTPC, Random Container를 역할별로 나누고 반복 재생되는 효과음에는 변형 폭을 줬습니다.",
          },
          {
            label: "개선 방향",
            text: "단순 재생 중심 구조에서 상태와 거리, 이벤트 목적에 따라 반응하는 구조로 정리했습니다.",
          },
        ],
      },
      {
        title: "UE5 연동 구현",
        type: "C++ / Blueprint / Anim Notify",
        featured: true,
        badge: "Featured implementation",
        summary:
          "UGS_AudioComponentBase를 기반으로 몬스터/시커 오디오 컴포넌트를 분리하고, Physical Material 발소리와 애니메이션 타이밍, C++/Blueprint 이벤트를 실제 플레이 입력에 맞췄습니다.",
        proof: "GS_AudioComponentBase.h, GS_MonsterAudioComponent.h, GS_SeekerAudioComponent.h, GS_UIAudioSystem.h 기반 Sound 폴더 구조",
        links: [
          {
            label: "View C++ audio class",
            href: "https://github.com/raindrovvv/GuardianAndSeeker/blob/Dev/Source/GAS/Public/Sound/GS_AudioComponentBase.h",
          },
          {
            label: "Sound folder",
            href: "https://github.com/raindrovvv/GuardianAndSeeker/tree/Dev/Source/GAS/Public/Sound",
          },
        ],
        breakdown: [
          {
            label: "연동",
            text: "Anim Notify와 Blueprint 이벤트에서 Wwise Event를 호출하고, 필요한 사운드 상태 로직은 C++/Blueprint 기준으로 정리했습니다.",
          },
          {
            label: "재질 로직",
            text: "Physical Material 정보를 기준으로 발소리 후보를 나누고 지면 변화가 사운드에 반영되도록 설계했습니다.",
          },
          {
            label: "AI 에이전트 활용",
            text: "AI 에이전트를 코드 리뷰와 디버깅 파트너로 활용해 C++/Blueprint 로직의 조건, 호출 타이밍, 누락 이벤트를 빠르게 점검했습니다.",
          },
        ],
      },
      {
        title: "런타임 디버깅",
        type: "Occlusion / Collision",
        summary:
          "벽과 문 너머 몬스터 소리의 차폐감, 거리감, 전달감을 Wwise와 UE 콜리전/라인 트레이스 기준으로 점검했습니다.",
        proof: "오클루전 디버깅 영상과 함께 차폐/거리감 조정 과정 기록",
        breakdown: [
          {
            label: "문제",
            text: "벽 너머 몬스터 소리가 가까운 소리처럼 들려 위험 위치를 잘못 읽게 만드는 구간이 있었습니다.",
          },
          {
            label: "점검 경로",
            text: "Wwise 오클루전 값, UE Collision, Line Trace, 문/벽 구조를 함께 보며 차폐가 걸리는 지점을 확인했습니다.",
          },
          {
            label: "결과",
            text: "멀리 있는 소리와 막힌 소리가 구분되도록 필터, 볼륨, 전달감을 조정해 공간 정보를 더 명확하게 만들었습니다.",
          },
        ],
      },
      {
        title: "팀 피드백 반영",
        type: "Audio QA / Communication",
        summary:
          "플레이테스트 피드백을 사운드 우선순위, 믹스 밸런스, 시스템 수정 항목으로 번역해 팀과 공유했습니다.",
        proof: "299명 체험, 평균 4.36/5 피드백 이후 BGM 전환과 UI 피드백 개선",
        breakdown: [
          {
            label: "피드백",
            text: "플레이테스트에서 BGM 전환, UI 피드백, 발소리 인지, 공간감 관련 반응을 분리해 확인했습니다.",
          },
          {
            label: "판단",
            text: "감상평을 그대로 반영하기보다 우선순위, 믹스, 시스템 조건 중 어디를 바꿀지 판단했습니다.",
          },
          {
            label: "공유 방식",
            text: "기획/프로그래밍과 공유할 수 있도록 문제 현상, 원인 후보, 수정 방향을 짧은 작업 단위로 정리했습니다.",
          },
        ],
      },
    ],
  },
  sfxBreakdown: {
    eyebrow: "효과음 브레이크다운",
    title: "효과음 제작부터 인게임 검증까지 한 흐름으로 정리했습니다",
    process: [
      {
        step: "01",
        title: "사운드 목적 정의",
        text: "캐릭터, 몬스터, UI, 환경별로 플레이어가 알아야 할 정보와 감정 톤을 먼저 정의합니다.",
      },
      {
        step: "02",
        title: "소스 선택과 편집",
        text: "라이브러리 소스, 직접 제작한 레이어, 음악 프로덕션 경험을 조합해 SFX를 편집하고 믹스합니다.",
      },
      {
        step: "03",
        title: "미들웨어 설정",
        text: "Wwise Random/Blend Container, Switch, RTPC, 볼륨/피치 변형으로 반복감을 줄이고 상태 변화를 만듭니다.",
      },
      {
        step: "04",
        title: "인게임 QA",
        text: "실제 플레이에서 묻히는 소리, 과한 피드백, 거리/차폐 오류를 잡아 우선순위와 밸런스를 조정합니다.",
      },
    ],
    examples: [
      {
        title: "발소리 키트",
        meta: "Physical Material",
        text: "지면 재질과 이동 상태에 맞춰 발소리 후보를 나누고 랜덤 재생으로 반복감을 줄입니다.",
        deepDive: [
          {
            label: "소스",
            text: "재질별로 어울리는 라이브러리 소스와 직접 편집한 짧은 소스를 후보군으로 나눕니다.",
          },
          {
            label: "변형",
            text: "Wwise Random Container에서 피치와 볼륨 변형을 주어 같은 발소리가 반복되는 느낌을 줄입니다.",
          },
          {
            label: "인게임 확인",
            text: "UE Physical Material과 Anim Notify 타이밍을 확인해 지면 변화와 발 접지 순간이 맞게 들리는지 검증합니다.",
          },
        ],
      },
      {
        title: "전투 타격음",
        meta: "Impact Layering",
        text: "타격감, 위험 신호, 피격 확인을 분리해 전투 중에도 필요한 정보가 먼저 들리게 설계합니다.",
      },
      {
        title: "몬스터 신호음",
        meta: "Spatial Debug",
        text: "몬스터 위치감과 차폐감을 조정해 벽 너머 위협과 실제 거리감을 구분하도록 만듭니다.",
      },
      {
        title: "UI 피드백",
        meta: "2D / Priority",
        text: "전투와 BGM 위에서도 조작 성공, 선택, 경고 피드백이 짧고 명확하게 들리도록 다듬습니다.",
      },
    ],
  },
  projects: [
    {
      title: "Guardian & Seeker",
      period: "G-STAR 2025",
      type: "UE5.6 / Wwise",
      summary:
        "4v1 비대칭 PvP 액션 게임의 캐릭터, 몬스터, 환경, UI 사운드 디자인과 Wwise/UE5 구현 전반을 담당했습니다. UGS_AudioComponentBase를 중심으로 몬스터/시커/UI 오디오 컴포넌트를 나누고, RTPC와 오클루전, Physical Material 발소리, 전투 BGM 전환을 실제 빌드에서 검증했습니다.",
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
      skills: ["Wwise", "UE5.6", "C++ / Blueprint", "Interactive BGM", "QA"],
      scope: {
        content: "캐릭터, 몬스터, 환경, UI 사운드 / 전투 BGM",
        implementation: "UGS_AudioComponentBase, Wwise RTPC, UE5 C++ / Blueprint, Anim Notify",
        proof: "G-STAR 2025 출품, 299명 체험, 평균 4.36/5 · Sound 폴더 C++ 클래스 직접 링크 제공",
        code: "https://github.com/raindrovvv/GuardianAndSeeker/tree/Dev/Source/GAS/Public/Sound",
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
        "조선 말기 맵을 배경으로 한 멀티플레이 플랫폼 파이터 프로토타입입니다. Team Lead, PM, Creative Director로 참여하며 BGM/SFX뿐 아니라 Buff & StatComponent, DeathVolume, Knight 3종 스킬 설계 보조처럼 게임플레이 C++ 구조에도 관여했습니다.",
      href: "https://www.youtube.com/watch?v=HrRCXKaU5pM",
      media: {
        label: "Gameplay demo",
        href: "https://www.youtube.com/watch?v=HrRCXKaU5pM",
        image: "./assets/game/joseon-knights.webp",
        fallback: "./assets/game/joseon-knights.gif",
      },
      cta: "Demo video",
      skills: ["UE5 C++", "Team Lead", "BGM 3 tracks", "SFX 40", "PM"],
      scope: {
        content: "한국 전통 모티프 기반 BGM, 전투 SFX, UI/캐릭터/맵 아이콘",
        implementation: "Buff & StatComponent, DeathVolume, Knight 3종 스킬 설계 보조, BGM/SFX 구현",
        proof: "담당: Team Lead, PM, Creative Director · BGM 3트랙, SFX 40종 · UE5 C++ 게임플레이 구조 경험",
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
        proof: "담당: BGM/SFX 제작, UI/UX 설계, 레벨 디자인, 시네마틱 컷씬",
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
        proof: "담당: 게임 컨셉/스토리, BGM 작편곡, 효과음 제작",
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
        proof: "담당: 프로젝트 리더, PM, 기획 / 사운드 디자인, 개발",
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
  aiLab: {
    eyebrow: "AI 에이전트 / 구현 워크플로",
    title: "AI 에이전트를 구현 속도와 검증력으로 전환합니다",
    titleLines: ["AI 에이전트를", "구현 속도와 검증력으로 전환합니다"],
    intro:
      "C++/Blueprint 사운드 로직을 직접 다루되, AI 에이전트를 코드 리뷰, 디버깅, 문서화 파트너로 활용해 구현 리스크를 더 빨리 찾는 방식으로 작업합니다.",
    items: [
      {
        title: "AI-assisted Implementation Review",
        type: "C++ / Blueprint / Debugging",
        summary:
          "사운드 로직을 직접 구현한 뒤 AI 에이전트로 조건 분기, 호출 타이밍, 누락 가능성을 빠르게 재검토합니다.",
        gameAudioUse:
          "Wwise Event 호출, Physical Material 발소리, 오클루전 디버깅처럼 엔진 안에서 깨지기 쉬운 지점을 체크리스트화합니다.",
        proof:
          "C++/Blueprint 사운드 로직 구현과 AI 에이전트 기반 코드 검토, 디버깅 질문, QA 기준 정리",
        href: "https://docs.google.com/presentation/d/1Jmfm_5ZRj9EfSarHVeVsUaEku4qlAIsZJJmyfgGs5ZM/edit?slide=id.p1#slide=id.p1",
        cta: "Slides p.15",
        featured: true,
        tags: ["C++", "Blueprint", "AI Agent", "Debugging"],
      },
      {
        title: "Prompt-to-Checklist QA",
        type: "Audio QA / Test Cases",
        summary:
          "플레이 중 들리는 문제를 AI 에이전트와 함께 원인 후보, 재현 조건, 수정 단위로 쪼개 팀이 바로 확인할 수 있게 정리합니다.",
        gameAudioUse:
          "BGM 전환, UI 피드백, 발소리, 벽/문 차폐감 같은 감각 피드백을 테스트 가능한 오디오 QA 항목으로 바꿉니다.",
        proof:
          "299명 플레이테스트 이후 피드백을 우선순위, 믹스, 시스템 조건으로 분류",
        href: "https://docs.google.com/presentation/d/1Jmfm_5ZRj9EfSarHVeVsUaEku4qlAIsZJJmyfgGs5ZM/edit?slide=id.p1#slide=id.p1",
        cta: "Slides",
        featured: false,
        tags: ["QA", "Playtest", "Checklist"],
      },
      {
        title: "Source & Workflow Documentation",
        type: "Source Management / Team Knowledge",
        summary:
          "AI 에이전트로 정리한 기준을 그대로 믿지 않고, 실제 플레이 검증 결과와 연결해 팀이 재사용할 문서로 정제합니다.",
        gameAudioUse:
          "보이스/소스 네이밍, Wwise 구조, 수정 요청, 사운드 QA 기준을 반복 가능한 형태로 관리합니다.",
        proof:
          "성공 기준, 반복 테스트 환경, 전문가 디버깅 절차를 작업 기준으로 번역",
        href: "https://raindrovvv.tistory.com/132",
        cta: "Read insight",
        featured: false,
        tags: ["Resource Management", "QA", "Team Knowledge"],
      },
    ],
  },
  practice: [
    {
      title: "Gameplay-first audio",
      text: "사운드를 분위기 장식이 아니라 플레이어가 상황, 거리, 위험, 인터랙션을 이해하는 정보로 설계합니다.",
    },
    {
      title: "Implementation-ready workflow",
      text: "FL Studio에서 소스를 만들고 Wwise Event, Switch, RTPC, 컨테이너 구조를 정리한 뒤 UE5 C++/Blueprint, Anim Notify, 데이터 테이블에 적용합니다.",
    },
    {
      title: "Audio QA & polishing",
      text: "실제 플레이 테스트에서 묻히는 구간, 과한 피드백, 재생 오류, 공간감 문제를 확인하고 볼륨과 우선순위를 조정합니다.",
    },
    {
      title: "AI-agent collaboration",
      text: "AI 에이전트를 단순 대체재가 아니라 코드 검토, 디버깅 가설, QA 체크리스트를 빠르게 만드는 협업 도구로 활용합니다.",
    },
  ],
  links: [
    { label: "Email for hiring", icon: "📧", href: "mailto:vnrs97@gmail.com", primary: true },
    { label: "Guardian C++", icon: "⌘", href: "https://github.com/raindrovvv/GuardianAndSeeker/tree/Dev/Source/GAS/Public/Sound" },
    { label: "Wwise Blog", icon: "✎", href: "https://raindrovvv.tistory.com/tag/Wwise" },
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

const clonePortfolio = (value) => JSON.parse(JSON.stringify(value));

const createEnglishPortfolio = () => {
  const en = clonePortfolio(portfolioKo);

  Object.assign(en, {
    name: "Jungmin Cha",
    role: "Game Audio · Wwise · UE5 · C++ / Blueprint",
    headline: "Jungmin Cha Game Audio Designer",
    intro:
      "Game Audio Designer who codes with AI agents. I design sound for gameplay clarity and implement it end-to-end: Wwise architecture, UE5 Blueprint, Physical Material footsteps, runtime occlusion, until it works in the actual build.",
    contactNote:
      "I design and verify audio behavior between Wwise and UE5 C++/Blueprint so player input, distance, occlusion, and UI feedback read correctly in the actual build. Email is the fastest route for hiring or collaboration.",
    footerName: "Jungmin Cha Game Audio Designer Portfolio",
  });

  en.reelNotes = [
    {
      title: "A 4v1 PvP case with C++ audio components",
      text: "In Guardian & Seeker, I connected Wwise and UE5 through UGS_AudioComponentBase, Monster/Seeker audio components, and a UI audio system.",
    },
    {
      title: "From Wwise/UE integration to C++/Blueprint logic",
      text: "DistanceToPlayer, AttenuationMode, and OcclusionDisable RTPCs are managed through C++ UPROPERTY pointers, then connected to Events, Switches, RTPCs, and Anim Notifies.",
    },
    {
      title: "Balancing and QA through playtests",
      text: "After a 299-player test with a 4.36/5 average rating, I refined BGM transitions, footsteps, occlusion, and UI feedback.",
    },
  ];

  en.techAudio = {
    eyebrow: "Technical Audio",
    title: "Audio systems that work inside Wwise and UE5",
    intro:
      "Guardian & Seeker combines C++ audio component design, Wwise RTPC integration, UE5 implementation, occlusion debugging, and playtest-driven iteration in one concrete workflow.",
    items: [
      {
        title: "Wwise System Design",
        type: "Event / Switch / RTPC",
        summary:
          "In combat scenes where BGM, monster cues, and UI feedback overlap, I structured Events, Switches, RTPCs, and containers around the cues players needed to read first.",
        proof: "191 audio assets categorized by role and priority, then connected into Wwise structures",
        breakdown: [
          {
            label: "Problem",
            text: "Combat, exploration, UI, and monster sounds could overlap, so I clarified which cues needed to read first.",
          },
          {
            label: "Wwise structure",
            text: "I separated Events, Switches, RTPCs, and Random Containers by role and added variation to repeated SFX.",
          },
          {
            label: "Iteration",
            text: "The setup moved from simple playback toward state-, distance-, and purpose-aware audio behavior.",
          },
        ],
      },
      {
        title: "UE5 Implementation",
        type: "C++ / Blueprint / Anim Notify",
        featured: true,
        badge: "Featured implementation",
        summary:
          "I separated Monster/Seeker audio components around UGS_AudioComponentBase, then connected Physical Material footsteps, animation timing, and C++/Blueprint events to real player input.",
        proof: "Sound folder structure around GS_AudioComponentBase.h, GS_MonsterAudioComponent.h, GS_SeekerAudioComponent.h, and GS_UIAudioSystem.h",
        links: [
          {
            label: "View C++ audio class",
            href: "https://github.com/raindrovvv/GuardianAndSeeker/blob/Dev/Source/GAS/Public/Sound/GS_AudioComponentBase.h",
          },
          {
            label: "Sound folder",
            href: "https://github.com/raindrovvv/GuardianAndSeeker/tree/Dev/Source/GAS/Public/Sound",
          },
        ],
        breakdown: [
          {
            label: "Connection",
            text: "Anim Notifies and Blueprint events call Wwise Events, with sound state logic organized around C++/Blueprint conditions where needed.",
          },
          {
            label: "Surface logic",
            text: "Footstep candidates are split by Physical Material so surface changes are reflected in sound.",
          },
          {
            label: "AI agent use",
            text: "I used AI agents as code review and debugging partners to check C++/Blueprint conditions, call timing, and missing events faster.",
          },
        ],
      },
      {
        title: "Runtime Debugging",
        type: "Occlusion / Collision",
        summary:
          "I checked monster distance, occlusion, and transmission through Wwise values and UE collision/line trace behavior.",
        proof: "Occlusion debugging video documents distance and obstruction tuning",
        breakdown: [
          {
            label: "Problem",
            text: "Monster sounds behind walls could read too close, making the threat location unclear.",
          },
          {
            label: "Debug route",
            text: "I reviewed Wwise occlusion values, UE collision, line traces, and wall/door layout together.",
          },
          {
            label: "Result",
            text: "Filter, volume, and transmission tuning made blocked and distant sounds easier to distinguish.",
          },
        ],
      },
      {
        title: "Team Feedback",
        type: "Audio QA / Communication",
        summary:
          "I translated playtest feedback into audio priority, mix balance, and system-level tasks for the team.",
        proof: "299-player test, 4.36/5 average rating, followed by BGM and UI feedback improvements",
        breakdown: [
          {
            label: "Feedback",
            text: "I separated comments around BGM transitions, UI feedback, footsteps, and spatial clarity.",
          },
          {
            label: "Decision",
            text: "Instead of applying comments literally, I chose whether priority, mix, or system conditions needed adjustment.",
          },
          {
            label: "Team output",
            text: "Issues, likely causes, and proposed fixes were summarized into small tasks that designers and programmers could share.",
          },
        ],
      },
    ],
  };

  en.sfxBreakdown = {
    eyebrow: "SFX Breakdown",
    title: "From SFX production to in-game validation",
    process: [
      {
        step: "01",
        title: "Sound Intent",
        text: "I define what the player needs to understand and what emotional tone each character, monster, UI, or environment cue should carry.",
      },
      {
        step: "02",
        title: "Source & Edit",
        text: "I combine library sources, custom layers, and music production experience to edit and mix SFX.",
      },
      {
        step: "03",
        title: "Middleware Setup",
        text: "Random/Blend Containers, Switches, RTPCs, and pitch/volume variation reduce repetition and support state changes.",
      },
      {
        step: "04",
        title: "In-game QA",
        text: "I tune priority and balance by checking masked sounds, excessive feedback, and distance/occlusion issues in play.",
      },
    ],
    examples: [
      {
        title: "Footstep Kit",
        meta: "Physical Material",
        text: "Footstep candidates are organized by surface and movement state, with randomized playback to reduce repetition.",
        deepDive: [
          {
            label: "Source",
            text: "Library and edited short sources are grouped by material.",
          },
          {
            label: "Variation",
            text: "Pitch and volume variation in Wwise Random Containers reduces repeated-footstep fatigue.",
          },
          {
            label: "In-game check",
            text: "Physical Material and Anim Notify timing are checked against surface changes and foot contact.",
          },
        ],
      },
      {
        title: "Combat Hit",
        meta: "Impact Layering",
        text: "Hit confirmation, danger signal, and impact weight are separated so the right information reads in combat.",
      },
      {
        title: "Monster Cue",
        meta: "Spatial Debug",
        text: "Monster position and obstruction are tuned so threats behind walls read differently from nearby threats.",
      },
      {
        title: "UI Feedback",
        meta: "2D / Priority",
        text: "Selection, warning, and success cues are kept short and clear over combat and BGM.",
      },
    ],
  };

  en.projects = [
    {
      ...en.projects[0],
      summary:
        "I handled character, monster, environment, and UI sound design plus Wwise/UE5 implementation for a 4v1 asymmetrical PvP action game. Around UGS_AudioComponentBase, I separated Monster/Seeker/UI audio components and verified RTPCs, occlusion, Physical Material footsteps, and combat BGM transitions in the actual build.",
      skills: ["Wwise", "UE5.6", "C++ / Blueprint", "Interactive BGM", "QA"],
      scope: {
        content: "Character, monster, environment, UI audio / combat BGM",
        implementation: "UGS_AudioComponentBase, Wwise RTPCs, UE5 C++ / Blueprint, Anim Notify",
        proof: "G-STAR 2025 project, 299 players, 4.36/5 average rating · direct Sound folder link provided",
        code: "https://github.com/raindrovvv/GuardianAndSeeker/tree/Dev/Source/GAS/Public/Sound",
      },
    },
    {
      ...en.projects[1],
      summary:
        "An audio debugging case focused on monster distance and obstruction through walls and doors. I reviewed Wwise occlusion, Environmental Curves, Diffraction/Transmission, UE collision, and line traces together.",
      scope: {
        content: "Monster position, wall/door obstruction, spatial clarity",
        implementation: "Wwise Occlusion, Diffraction, Transmission, UE Collision Debug",
        proof: "Adjusted system behavior so distant and obstructed sounds read differently",
      },
    },
    {
      ...en.projects[2],
      summary:
        "A multiplayer platform fighter prototype set in late Joseon. As Team Lead, PM, and Creative Director, I handled BGM/SFX while also contributing to gameplay-side UE5 C++ structure such as Buff & StatComponent, DeathVolume, and support for three knight skill designs.",
      skills: ["UE5 C++", "Team Lead", "BGM 3 tracks", "SFX 40", "PM"],
      scope: {
        content: "Traditional Korean-inspired BGM, combat SFX, UI/character/map icons",
        implementation: "Buff & StatComponent, DeathVolume, support for three knight skill designs, BGM/SFX implementation",
        proof: "Role: Team Lead, PM, Creative Director · 3 BGM tracks, 40 SFX · UE5 C++ gameplay-structure experience",
      },
    },
    {
      ...en.projects[3],
      summary:
        "A UE-based TPS/FPS shooting prototype. I worked on game design, UI/UX, BGM/SFX, level design, and cinematic cutscenes to shape the world and audio tone together.",
      scope: {
        content: "Closed-lab BGM/SFX, UI feedback, cinematic audio",
        implementation: "Direct audio implementation in gameplay and cinematic scenes",
        proof: "Role: BGM/SFX, UI/UX, level design, cinematic cutscenes",
      },
    },
    {
      ...en.projects[4],
      summary:
        "A console text RPG about exploring eight themed maze towers. I handled concept, story, map systems, BGM arrangement, and SFX to give each floor a clear mood and emotional line.",
      scope: {
        content: "Eight themed towers, monsters, battle/shop/altar sounds",
        implementation: "Console RPG map system, battle scenes, themed floor structure",
        proof: "Role: concept/story, BGM arrangement, SFX production",
      },
    },
    {
      ...en.projects[5],
      summary:
        "An interactive media project where players explore a digital space through music. Three draft tracks from my album Flight were used so movement and exploration became part of the listening experience.",
      scope: {
        content: "Three draft tracks from Flight: Talseon, ばらばら, Youth Anthem (VNRS remix)",
        implementation: "Unity C# exploration, interaction, and music triggers",
        proof: "Role: project lead, PM, planning / sound design, development",
      },
    },
  ];

  const musicSummaries = {
    "[LP] 비행":
      "A full-length album about nostalgia and journeys. As VENI RAIN, I wrote lyrics, composed, and performed vocals; as VENIRUS, I arranged, mixed, and mastered the record.",
    "[EP] Rainshower":
      "A six-track EP where I participated in lyrics and composition across the record and built fundamentals in arrangement, mixing, and mastering with VENIRUS.",
    "[Single] RAINDROP":
      "An early single where I contributed to lyrics, composition, arrangement collaboration, mixing, and mastering, establishing the VENI RAIN/VENIRUS workflow.",
    "[Prod. by & Feat.] Neon Romance":
      "An external collaboration with Arthur where I handled featured vocals, co-composition, and VENIRUS arrangement for a band-driven production.",
    "[Single] 잔": "A recent single completed independently across lyrics, composition, arrangement, artwork, mixing, and mastering.",
    "[Prod. by] Sober - Romantic Refuge :: 밤":
      "A track from Sober's EP Romantic Refuge, credited to VENIRUS for composition and production.",
    "[EP] Downtown Man": "An EP where I handled lyrics, artwork, mixing, mastering, and the overall production flow.",
    "[EP] V-taper": "An EP credited to VENIRUS, covering chorus, artwork, mixing, mastering, and broader production work.",
    "[EP] FEAR & AMBITION":
      "An EP where I participated in lyrics and composition as VENI RAIN, expanding the style built through earlier singles.",
    "[Single] FLOWER":
      "A single written and composed as VENI RAIN, centered on vocal songwriting and production sensibility.",
    "[Single] OAO":
      "A single featuring HUNDOSHI, carried from lyrics, composition, arrangement, artwork, mixing, and mastering through release.",
    "[Single] HIGHWAY":
      "A two-track single where VENI RAIN's writing and composition worked together with VENIRUS arrangement, mixing, and mastering.",
    "[Single] FIRE & WATER":
      "An early two-track single led by VENIRUS production, with songwriting and arrangement across both tracks.",
    "[Single] FOUND ME":
      "An early three-track single that built the collaborative production system between VENI RAIN and VENIRUS.",
    "[EP] FORECAST": "An EP released together under VENI RAIN and VENIRUS credits.",
    "[Single] UNBERELLA": "A single/visualizer release by VENI RAIN, organized as a music-and-video project.",
    "[Prod.by] 스내키챈 - 숫자일 뿐":
      "An external collaboration where I participated with VENIRUS producer credits.",
    "[Prod.by] kumira - 돌연변이": "An external collaboration with kumira credited to VENIRUS for production and arrangement.",
    "[Prod.by] kumira - 위험해":
      "A kumira single where I contributed production work and collaborated with an external vocalist/rapper.",
    "[Prod.by] Holmsted - Survive": "An external collaboration with Holmsted credited to VENIRUS for composition and production.",
    "[Prod.by] kumira - KottonVill : 다락방": "An external collaboration where I handled production across the full album.",
    "[Prod.by & Feat.] IndEgo Aid - 자가격리패키지 : Comma":
      "A collaboration where I contributed both production and featured vocals.",
    "[Mixtape] P V R V D V X": "A mixtape produced across all tracks.",
    "[Arr.by] 서연고 사이퍼 CINDY": "A cypher arrangement credited to VENIRUS, showing external work as an arranger as well as composer.",
  };
  en.musicProjects = en.musicProjects.map((project) => ({
    ...project,
    summary: musicSummaries[project.title] || project.summary,
  }));

  en.workTabs = {
    game: {
      eyebrow: "Game Audio / BGM",
      title: "Sound that works inside play",
      text: "Selected work around Wwise and Unreal Engine 5 implementation, combat BGM, spatial cues, and UI feedback that players can immediately read.",
    },
    music: {
      eyebrow: "Music Discography",
      title: "VENI RAIN / VENIRUS music work",
      text: "24 releases covering lyrics, composition, vocals, arrangement, mixing, and mastering. This is seven-plus years of music production experience alongside game audio.",
    },
  };

  en.aiLab = {
    eyebrow: "AI Agents / Implementation Workflow",
    title: "Turning AI agents into implementation speed and verification",
    titleLines: ["Turning AI agents into", "implementation speed and verification"],
    intro:
      "I still own the C++/Blueprint sound logic, but I use AI agents as review, debugging, and documentation partners to find implementation risks faster.",
    items: [
      {
        title: "AI-assisted Implementation Review",
        type: "C++ / Blueprint / Debugging",
        summary:
          "After implementing sound logic myself, I use AI agents to re-check branches, call timing, and missing-event risks.",
        gameAudioUse:
          "Wwise Event calls, Physical Material footsteps, and occlusion debugging become explicit checklists for fragile engine-side behavior.",
        proof:
          "C++/Blueprint sound logic implementation, AI-agent code review, debugging prompts, and QA criteria",
        href: en.aiLab.items[0].href,
        cta: "Slides p.15",
        featured: true,
        tags: ["C++", "Blueprint", "AI Agent", "Debugging"],
      },
      {
        title: "Prompt-to-Checklist QA",
        type: "Audio QA / Test Cases",
        summary:
          "I turn in-play audio issues into likely causes, reproduction conditions, and small fix units the team can verify.",
        gameAudioUse:
          "BGM transitions, UI feedback, footsteps, and wall/door obstruction feedback become testable audio QA items.",
        proof:
          "299-player playtest feedback categorized into priority, mix, and system-condition tasks",
        href: en.aiLab.items[1].href,
        cta: "Slides",
        featured: false,
        tags: ["QA", "Playtest", "Checklist"],
      },
      {
        title: "Source & Workflow Documentation",
        type: "Source Management / Team Knowledge",
        summary:
          "I do not treat AI output as final; I refine it against playtest results and turn it into reusable team documentation.",
        gameAudioUse:
          "Voice/source naming, Wwise structure, revision requests, and sound QA standards are organized into repeatable workflows.",
        proof:
          "Success criteria, repeatable test environments, and expert debugging steps translated into working standards",
        href: en.aiLab.items[2].href,
        cta: "Read insight",
        featured: false,
        tags: ["Resource Management", "QA", "Team Knowledge"],
      },
    ],
  };

  en.practice = [
    {
      title: "Gameplay-first audio",
      text: "I design sound as information that helps players understand state, distance, danger, and interaction, rather than as decoration.",
    },
    {
      title: "Implementation-ready workflow",
      text: "I create sources in FL Studio, structure Wwise Events, Switches, RTPCs, and containers, then apply them through UE5 C++/Blueprint, Anim Notify, and data tables.",
    },
    {
      title: "Audio QA & polishing",
      text: "In playtests, I identify masked cues, excessive feedback, playback errors, and spatial issues, then tune volume and priority.",
    },
    {
      title: "AI-agent collaboration",
      text: "I use AI agents as collaboration tools for code review, debugging hypotheses, and QA checklists, not as a substitute for implementation ownership.",
    },
  ];

  return en;
};

const portfolioEn = createEnglishPortfolio();

const uiLocales = {
  ko: {
    htmlLang: "ko",
    title: "Jungmin Cha | Game Audio Designer who codes",
    navReel: "Reel",
    navTech: "Tech Audio",
    navSfx: "SFX Breakdown",
    navWork: "Work",
    navContact: "Contact",
    email: "Email",
    orbitSound: "Sound Designer",
    orbitAudio: "Audio Implementer",
    orbitField: "Design to Implementation",
    heroStack: "Wwise · Unreal Engine 5 · C++ / Blueprint",
    heroPrimary: "Watch reel",
    heroSecondary: "View tech cases",
    featuredCase: "Featured case",
    featuredCaseCta: "View tech case",
    toolchain: "Toolchain",
    consolePrompt: "Play audio to hear the Wwise logic in action.",
    consoleStatusRunning: "Interactive audio reel · running",
    consoleStatusStandby: "Press Play to hear Wwise logic",
    consolePlay: "Play audio",
    consolePause: "Pause audio",
    consolePlayAria: "오디오 재생",
    consolePauseAria: "오디오 일시정지",
    reelEyebrow: "데모릴",
    reelTitle: "Guardian & Seeker의 오디오 설계와 구현 과정을 담았습니다",
    workEyebrow: "주요 작업",
    workTitle: "플레이 안에서 작동한 사운드와 음악 작업",
    workTabGame: "Game Audio / BGM",
    workTabMusic: "Music Discography",
    strengthsEyebrow: "강점",
    contactEyebrow: "연락",
    contactTitle1: "엔진 안에서",
    contactTitle2: "바로 검증하는",
    contactTitle3: "오디오 구현자",
    scopeLabels: { content: "내용", implementation: "구현", proof: "근거", code: "코드" },
    aiLabLabels: { gameAudioUse: "파이프라인 적용", proof: "근거" },
    proofLabel: "근거",
    viewBreakdown: "View breakdown",
    footstepDeepDive: "Open footstep deep dive",
    cardFallbackCta: "View detail",
    listen: "Listen",
    watch: "Watch",
    view: "View",
    viewCode: "코드 보기",
    techKeywordsLabel: "대표 기술 키워드",
  },
  en: {
    htmlLang: "en",
    title: "Jungmin Cha | Game Audio Designer who codes",
    navReel: "Reel",
    navTech: "Tech Audio",
    navSfx: "SFX Breakdown",
    navWork: "Work",
    navContact: "Contact",
    email: "Email",
    orbitSound: "Sound Designer",
    orbitAudio: "Audio Implementer",
    orbitField: "Design to Implementation",
    heroStack: "Wwise · Unreal Engine 5 · C++ / Blueprint",
    heroPrimary: "Watch reel",
    heroSecondary: "View tech cases",
    featuredCase: "Featured case",
    featuredCaseCta: "View tech case",
    toolchain: "Toolchain",
    consolePrompt: "Play audio to hear the Wwise logic in action.",
    consoleStatusRunning: "Interactive audio reel · running",
    consoleStatusStandby: "Press Play to hear Wwise logic",
    consolePlay: "Play audio",
    consolePause: "Pause audio",
    consolePlayAria: "Play audio",
    consolePauseAria: "Pause audio",
    reelEyebrow: "Demo Reel",
    reelTitle: "Guardian & Seeker audio design and implementation in practice",
    workEyebrow: "Selected Work",
    workTitle: "Sound and music work built for play",
    workTabGame: "Game Audio / BGM",
    workTabMusic: "Music Discography",
    strengthsEyebrow: "Strengths",
    contactEyebrow: "Contact",
    contactTitle1: "Audio implementation",
    contactTitle2: "verified",
    contactTitle3: "inside the build",
    scopeLabels: { content: "Content", implementation: "Implementation", proof: "Evidence", code: "Code" },
    aiLabLabels: { gameAudioUse: "Pipeline use", proof: "Evidence" },
    proofLabel: "Evidence",
    viewBreakdown: "View breakdown",
    footstepDeepDive: "Open footstep deep dive",
    cardFallbackCta: "View detail",
    listen: "Listen",
    watch: "Watch",
    view: "View",
    viewCode: "View code",
    techKeywordsLabel: "Core technical keywords",
  },
};

const portfolioLocales = {
  ko: portfolioKo,
  en: portfolioEn,
};

const LANGUAGE_STORAGE_KEY = "jungmin-portfolio-language";
let currentLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) === "en" ? "en" : "ko";
let portfolio = portfolioLocales[currentLanguage];
let uiCopy = uiLocales[currentLanguage];

const fillFields = () => {
  document.querySelectorAll("[data-field]").forEach((node) => {
    const key = node.dataset.field;
    if (portfolio[key]) node.textContent = portfolio[key];
  });
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (uiCopy[key]) node.textContent = uiCopy[key];
  });
  document.documentElement.lang = uiCopy.htmlLang;
  document.title = uiCopy.title;
};

const TEXT_EDIT_STORAGE_KEY = "jungmin-portfolio-text-overrides-v2";
let refreshTextEditorTargets = () => {};
let activateWorkTab = () => {};

const focusIconMap = {
  Wwise: { label: "W", icon: "wwise" },
  "Unreal Engine 5": { label: "U", icon: "unreal" },
  "SFX Design": { label: "", icon: "wave" },
  "Interactive BGM": { label: "♪", icon: "music" },
  "Audio Debugging": { label: "◎", icon: "debug" },
  "FL Studio": { label: "FL", icon: "fl" },
  "C++ / Blueprint": { label: "C++", icon: "code" },
  "AI Agent Workflow": { label: "AI", icon: "ai" },
  "Unity / C#": { label: "U", icon: "unity" },
  "OpenAI API": { label: "AI", icon: "ai" },
  "Git Collaboration": { label: "", icon: "git" },
};

const escapeFocusText = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const renderFocus = () => {
  const fullList = document.querySelector("#focus-list");
  const heroList = document.querySelector("#hero-focus-list");
  const tag = (item) => {
    const icon = focusIconMap[item] || { label: item.slice(0, 2), icon: "default" };
    return `
      <span class="tag focus-tag">
        <span class="focus-icon focus-icon-${icon.icon}" aria-hidden="true">${escapeFocusText(icon.label)}</span>
        <span class="focus-label">${escapeFocusText(item)}</span>
      </span>
    `;
  };
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
      const cardCta = isMusic && listenHref && !hasMusicCover ? uiCopy.listen : project.cta || uiCopy.cardFallbackCta;

      return `
        <article class="work-card${project.featured ? " featured" : ""}${project.connection ? ` linked-case linked-case-${project.connection.side}` : ""}">
          <div>
            ${
              hasMusicCover
                ? `<div class="music-cover" style="${musicCover.style}">
                    <img class="cover-media" src="${musicCover.image}" alt="" loading="lazy" decoding="async" />
                    <a class="listen-button" href="${listenHref}" target="_blank" rel="noreferrer" aria-label="${project.title} ${uiCopy.listen}"><span aria-hidden="true">▶</span><span>${uiCopy.listen}</span></a>
                  </div>`
                : ""
            }
            ${
              projectMedia
                ? projectMedia.href
                  ? `<a class="game-cover" href="${projectMedia.href}" target="_blank" rel="noreferrer" aria-label="${project.title} ${uiCopy.view}">
                    ${renderCoverMedia(projectMedia)}
                    <span class="media-label">${projectMedia.label}</span>
                    <span class="listen-button media-button">
                      ${projectMedia.isVideo ? `<span aria-hidden="true">▶</span><span>${uiCopy.watch}</span>` : `<span aria-hidden="true">↗</span><span>${uiCopy.view}</span>`}
                    </span>
                  </a>`
                  : `<div class="game-cover" aria-label="${project.title} preview">
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
                        `<div class="scope-row"><strong>${uiCopy.scopeLabels[key] || key}</strong><span>${
                          key === "code"
                            ? `<a class="scope-link" href="${value}" target="_blank" rel="noreferrer">${uiCopy.viewCode}</a>`
                            : value
                        }</span></div>`,
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

const renderAiTags = (tags = []) =>
  tags.map((tag) => `<span class="ai-tag">${tag}</span>`).join("");

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const renderDisclosure = (items = [], { className = "", summary = uiCopy.viewBreakdown } = {}) => {
  if (!items.length) return "";

  return `
    <details class="breakdown-panel ${className}">
      <summary><span>${escapeHtml(summary)}</span></summary>
      <dl class="breakdown-list">
        ${items
          .map(
            (item) => `
              <div class="breakdown-row">
                <dt>${escapeHtml(item.label)}</dt>
                <dd>${escapeHtml(item.text)}</dd>
              </div>
            `,
          )
          .join("")}
      </dl>
    </details>
  `;
};

const renderInlineLinks = (links = [], className = "") => {
  if (!links.length) return "";

  return `
    <div class="inline-link-row ${className}">
      ${links
        .map(
          (link) =>
            `<a href="${escapeHtml(link.href)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`,
        )
        .join("")}
    </div>
  `;
};

const renderTechAudio = () => {
  const eyebrow = document.querySelector("#tech-audio-eyebrow");
  const title = document.querySelector("#tech-audio-title");
  const lead = document.querySelector("#tech-audio-lead");
  const list = document.querySelector("#tech-audio-list");
  const techAudio = portfolio.techAudio;

  if (!eyebrow || !title || !lead || !list || !techAudio) return;

  eyebrow.textContent = techAudio.eyebrow;
  title.textContent = techAudio.title;
  lead.innerHTML = `
    <p>${escapeHtml(techAudio.intro)}</p>
    <div class="tech-signal-row" aria-label="${uiCopy.techKeywordsLabel}">
      ${["Wwise", "Unreal Engine 5", "C++ / Blueprint", "AI Agent Workflow", "Anim Notify", "Occlusion"]
        .map((item) => `<span>${item}</span>`)
        .join("")}
    </div>
  `;
  list.innerHTML = techAudio.items
    .map(
      (item, index) => `
        <article class="tech-card${item.featured ? " is-featured" : ""}">
          <span class="tech-card-index">${String(index + 1).padStart(2, "0")}</span>
          <div>
            ${item.badge ? `<span class="tech-card-badge">${escapeHtml(item.badge)}</span>` : ""}
            <span class="tech-card-type">${escapeHtml(item.type)}</span>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.summary)}</p>
          </div>
          <div class="tech-proof">
            <strong>${uiCopy.proofLabel}</strong>
            <span>${escapeHtml(item.proof)}</span>
          </div>
          ${renderInlineLinks(item.links, "tech-code-links")}
          ${renderDisclosure(item.breakdown, { className: "tech-breakdown" })}
        </article>
      `,
    )
    .join("");
  refreshTextEditorTargets();
};

const renderSfxBreakdown = () => {
  const eyebrow = document.querySelector("#sfx-breakdown-eyebrow");
  const title = document.querySelector("#sfx-breakdown-title");
  const processRoot = document.querySelector("#sfx-process-list");
  const exampleRoot = document.querySelector("#sfx-example-list");
  const sfx = portfolio.sfxBreakdown;

  if (!eyebrow || !title || !processRoot || !exampleRoot || !sfx) return;

  eyebrow.textContent = sfx.eyebrow;
  title.textContent = sfx.title;
  processRoot.innerHTML = sfx.process
    .map(
      (item) => `
        <article class="sfx-step">
          <span>${escapeHtml(item.step)}</span>
          <div>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.text)}</p>
          </div>
        </article>
      `,
    )
    .join("");
  exampleRoot.innerHTML = sfx.examples
    .map(
      (item) => `
        <article class="sfx-example${item.deepDive?.length ? " has-deep-dive" : ""}">
          <span class="sfx-example-meta">${escapeHtml(item.meta)}</span>
          <div>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.text)}</p>
          </div>
          ${renderDisclosure(item.deepDive, { className: "sfx-deep-dive", summary: uiCopy.footstepDeepDive })}
        </article>
      `,
    )
    .join("");
  refreshTextEditorTargets();
};

const renderAiTitle = (aiLab) => {
  const lines = aiLab.titleLines?.length ? aiLab.titleLines : [aiLab.title];
  return lines
    .map((line) => `<span class="ai-lab-title-line">${escapeHtml(line)}</span>`)
    .join("");
};

const renderAiDetails = (item, { showProof = false } = {}) => {
  const details = [{ label: uiCopy.aiLabLabels.gameAudioUse, value: item.gameAudioUse }];
  if (showProof) details.push({ label: uiCopy.aiLabLabels.proof, value: item.proof });

  return `
    <div class="ai-detail-list">
      ${details
        .map(
          (detail) => `
            <div class="ai-detail-row">
              <strong>${detail.label}</strong>
              <span>${detail.value}</span>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
};

const renderAiLab = () => {
  const eyebrow = document.querySelector("#ai-lab-eyebrow");
  const title = document.querySelector("#ai-lab-title");
  const intro = document.querySelector("#ai-lab-intro");
  const featureRoot = document.querySelector("#ai-lab-feature");
  const logRoot = document.querySelector("#ai-log-list");
  const aiLab = portfolio.aiLab;

  if (!eyebrow || !title || !intro || !featureRoot || !logRoot || !aiLab) return;

  const feature = aiLab.items.find((item) => item.featured) || aiLab.items[0];
  const logs = aiLab.items.filter((item) => item !== feature);

  eyebrow.textContent = aiLab.eyebrow;
  title.innerHTML = renderAiTitle(aiLab);
  intro.textContent = aiLab.intro;

  featureRoot.innerHTML = `
    <div>
      <span class="ai-lab-type">${feature.type}</span>
      <h3>${feature.title}</h3>
      <p class="ai-lab-summary">${feature.summary}</p>
      ${renderAiDetails(feature)}
      <div class="ai-tag-list">${renderAiTags(feature.tags)}</div>
    </div>
    <a class="tag card-link ai-card-link" href="${feature.href}" target="_blank" rel="noreferrer">${feature.cta}</a>
  `;

  logRoot.innerHTML = logs
    .map(
      (item) => `
        <article class="ai-log-card">
          <div>
            <div class="ai-log-top">
              <span class="ai-log-type">${item.type}</span>
            </div>
            <h3>${item.title}</h3>
            <p class="ai-log-summary">${item.summary}</p>
            <div class="ai-tag-list">${renderAiTags(item.tags)}</div>
          </div>
          <a class="tag card-link ai-card-link" href="${item.href}" target="_blank" rel="noreferrer">${item.cta}</a>
        </article>
      `,
    )
    .join("");
  refreshTextEditorTargets();
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
      (link) => {
        const isMail = link.href.startsWith("mailto:");
        const attrs = isMail ? "" : ` target="_blank" rel="noreferrer"`;
        return `<a class="contact-link${link.primary ? " is-primary" : ""}" href="${link.href}"${attrs}><span class="contact-icon" aria-hidden="true">${link.icon}</span><span>${link.label}</span></a>`;
      },
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
          ".hero-title-stack",
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
          "#tech-audio .eyebrow",
          "#tech-audio-title",
          "#tech-audio-lead p",
          ".tech-signal-row span",
          ".tech-card h3",
          ".tech-card p",
          ".tech-card-type",
          ".tech-proof strong",
          ".tech-proof span",
          ".breakdown-panel summary span",
          ".breakdown-row dt",
          ".breakdown-row dd",
          "#sfx-breakdown .eyebrow",
          "#sfx-breakdown-title",
          ".sfx-step h3",
          ".sfx-step p",
          ".sfx-step span",
          ".sfx-example h3",
          ".sfx-example p",
          ".sfx-example-meta",
          "#work .eyebrow",
          "#work-title",
          "#ai-lab .eyebrow",
          "#ai-lab-title",
          "#ai-lab-intro",
          ".ai-lab-feature h3",
          ".ai-lab-feature p",
          ".ai-lab-type",
          ".ai-log-card h3",
          ".ai-log-card p",
          ".ai-log-type",
          ".ai-detail-row strong",
          ".ai-detail-row span",
          ".ai-tag",
          ".ai-card-link",
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
      [".hero-title-stack", "hero:stack"],
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
      ["#tech-audio .eyebrow", "tech-audio:kicker"],
      ["#tech-audio-title", "tech-audio:heading"],
      ["#tech-audio-lead p", "tech-audio:intro"],
      ["#sfx-breakdown .eyebrow", "sfx-breakdown:kicker"],
      ["#sfx-breakdown-title", "sfx-breakdown:heading"],
      ["#work .eyebrow", "work:kicker"],
      ["#work-title", "work:heading"],
      ["#ai-lab .eyebrow", "ai-lab:kicker"],
      ["#ai-lab-title", "ai-lab:heading"],
      ["#ai-lab-intro", "ai-lab:intro"],
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
    const card = node.closest(
      ".work-card, .practice-item, .ai-lab-feature, .ai-log-card, .reel-note, .tech-card, .sfx-step, .sfx-example, .contact-links a",
    );
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

  const syncEditableState = ({ applyStoredText = editMode } = {}) => {
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
  if (editMode) {
    applyOverrides();
  }

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
      renderTechAudio();
      renderSfxBreakdown();
      renderAiLab();
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

const renderAllContent = ({ activeTab = document.querySelector("[data-work-tab].is-active")?.dataset.workTab || "game" } = {}) => {
  fillFields();
  renderFocus();
  renderReelNotes();
  renderTechAudio();
  renderSfxBreakdown();
  document.querySelector("#project-list").dataset.activeWork = "";
  workViewCache.clear();
  activateWorkTab(activeTab);
  renderAiLab();
  renderPractice();
  renderLinks();
};

const setupLanguageToggle = () => {
  const buttons = document.querySelectorAll("[data-language]");
  if (!buttons.length) return;

  const syncButtons = () => {
    buttons.forEach((button) => {
      const isActive = button.dataset.language === currentLanguage;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  };

  syncButtons();

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextLanguage = button.dataset.language === "en" ? "en" : "ko";
      if (nextLanguage === currentLanguage) return;

      currentLanguage = nextLanguage;
      portfolio = portfolioLocales[currentLanguage];
      uiCopy = uiLocales[currentLanguage];
      localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage);
      syncButtons();
      renderAllContent();
    });
  });
};

const setupFixedHeaderOffset = () => {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const syncHeaderHeight = () => {
    document.documentElement.style.setProperty("--header-height", `${Math.ceil(header.offsetHeight)}px`);
  };

  syncHeaderHeight();
  window.addEventListener("resize", syncHeaderHeight);

  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(syncHeaderHeight);
    observer.observe(header);
  }
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
      bar.style.setProperty("--bar-index", String(index));
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
    statusText.textContent = isEnabled ? uiCopy.consoleStatusRunning : uiCopy.consoleStatusStandby;
    enableButton.setAttribute("aria-pressed", String(isEnabled));
    enableButton.setAttribute("aria-label", isEnabled ? uiCopy.consolePauseAria : uiCopy.consolePlayAria);
    const transportLabel = enableButton.querySelector(".transport-label");
    if (transportLabel) {
      transportLabel.textContent = isEnabled ? uiCopy.consolePause : uiCopy.consolePlay;
    }
    consoleRoot.classList.toggle("is-running", isEnabled);
    consoleRoot.classList.toggle("is-standby", !isEnabled);
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
    node instanceof Element
      ? node.closest(".work-card, .signal-panel, .tech-card, .sfx-example, .ai-lab-feature, .ai-log-card")
      : null;

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
renderTechAudio();
renderSfxBreakdown();
renderProjects();
renderAiLab();
renderPractice();
renderLinks();
setupSecretTextEditor();
setupTheme();
setupWorkTabs();
setupLanguageToggle();
setupFixedHeaderOffset();
setupMarqueeScroll();
setupAudioConsole();
setupCursorInteraction();
setupOrbitLinks();
setupLazyYouTubeEmbeds();
