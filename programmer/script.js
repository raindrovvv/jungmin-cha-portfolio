const portfolio = {
  ko: {
    strings: {
      navProjects: "Sub",
      navContribution: "Contribution",
      navGuardian: "Main",
      navDebugging: "Debugging",
      navTooling: "Tooling",
      navActivities: "Activities",
      navDiscography: "Discography",
      navContact: "Contact",
      soundPortfolio: "Game Audio",
      email: "Email",
      proofGameplay: "게임플레이",
      proofGameplayDetail: "C++ / Blueprint 시스템",
      proofDebugging: "디버깅",
      proofDebuggingDetail: "재현 → 추적 → 검증",
      proofTooling: "툴링 / 자동화",
      proofToolingDetail: "MCP / 작업 자동화",
      heroKicker: "GAME PROGRAMMING / PORTFOLIO",
      heroName: "차정민",
      heroRole: "Game Programmer",
      heroStack: "Gameplay Systems · Editor Tooling · Debugging",
      heroIntro:
        "게임엔진에서 C++와 Blueprint로 게임플레이와 오디오 시스템을 구현합니다.\nMCP 기반 도구로 개발 및 검증 루프를 단축하고, 엔진과 오디오 미들웨어(Wwise) 간의 문제를 디버깅합니다.",
      heroPrimary: "프로젝트 보러가기",
      heroSecondary: "GitHub 바로가기",
      projectsEyebrow: "02 / SUB PROJECTS",
      projectsTitle: "Sub Project",

      guardianProjectEyebrow: "01 / MAIN PROJECT",
      guardianProjectTitle: "Main Project",
      guardianProjectNote: "하나의 프로젝트 안에서 맡은 범위, 구현 결과, 문제 해결 과정을 이어서 보여줍니다.",
      contributionEyebrow: "CONTRIBUTION",
      contributionHeading: "Guardian & Seeker에서 맡은 범위와 결과",
      contributionNote: "4v1 비대칭 PvP 게임의 플레이, UI, 사운드, 개발 도구를 함께 만들었습니다.",
      contributionMetricCommits: "커밋 수 (병합 제외)",
      contributionMetricShare: "전체 1,923개 중",
      contributionMetricFiles: "코어 코드 파일",
      contributionMetricRecent: "6월 이후 추가 커밋",
      contributionEvidence: "2025.05–2026.09 · Guardian & Seeker Git history · Source/GAS + Config + Legacy/GameFeatures",
      contributionStrength: "기획 요구를 기능 단위로 나눴습니다. AI로 할 일과 직접 검증할 일을 구분해 밀도와 완성도를 올렸습니다.",
      contributionAreasTitle: "이 프로젝트에서 직접 다룬 영역",
      contributionAreasNote: "커밋 기록을 작업 영역별로 나눴습니다.",
      contributionAreaGameplay: "게임플레이",
      contributionAreaGameplayDetail: "전투, 던전, 맵, 상호작용, 게임 상태",
      contributionAreaUi: "UI / 플레이 반응",
      contributionAreaUiDetail: "HUD, 미니맵, 입력, 안내 화면",
      contributionAreaAudio: "사운드 / 효과",
      contributionAreaAudioDetail: "사운드 연결, 피격 반응, 발소리, 효과음",
      contributionAreaTools: "개발 도구 / AI",
      contributionAreaToolsDetail: "에디터 도구, 자동화, 작업 검증",
      guardianEyebrow: "IMPLEMENTATION",
      guardianHeading: "UE5 C++ 기반 플레이 피드백 시스템 구현",
      agentEyebrow: "03 / UNREALAGENT",
      agentHeading: "에디터와 로컬 AI를 연결한 MCP 브리지",
      debuggingEyebrow: "DEBUGGING",
      debuggingHeading: "증상을 재현하고 원인 경로를 좁혔습니다",

      toolingEyebrow: "03 / EDITOR TOOLING & BUILD MONITOR",
      toolingHeading: "에디터 도구와 빌드 상태를 한눈에 모니터링합니다",

      activitiesEyebrow: "04 / PUBLIC ACTIVITIES",
      activitiesHeading: "현장에서 보고, 만들고, 다시 검증한 기록",

      activityOpen: "기록 열기",
      activityProof: "기록",
      discographyEyebrow: "06 / DISCOGRAPHY",
      discographyHeading: "긴 호흡으로 결과를 다듬어 온 기록",
      audioPortfolioLink: "Game Sound Designer portfolio ↗",
      contactEyebrow: "06 / CONTACT",
      contactHeading: "게임플레이·오디오·툴 제작,\n가리지 않습니다.",
      contactBody: "제가 할 수 있는 최선을 다합니다.\nAI로 프로토타입을 빠르게 구현하여 팀과 대화하며 개선해나갑니다.",
      contactEmail: "메일 보내기",
      contactGithub: "GitHub 열기",
      footerName: "차정민 · Game Programmer",
      printPdf: "PDF 인쇄",
      projectOpen: "Open case",
      projectStatus: "verified",
      caseRole: "Role",
      caseContribution: "Contribution",
      caseEvidence: "Evidence",
      caseStack: "Stack",
      panelEvidence: "IMPLEMENTATION EVIDENCE",
      panelPass: "PASS",
      agentMedia: "UNREAL EDITOR / MCP",
      guardianMedia: "GUARDIAN & SEEKER / UE5",
      watchGameplay: "게임플레이 보기",
      guardianMediaDisclaimer: "※ 당시 비주얼·사운드 시스템을 직접 구현한 범위를 ‘테크니컬 아트’로 표기했습니다.",
      agentLink: "GitHub에서 UnrealAgent 보기 ↗",
      debugOpen: "트러블슈팅 상세 보기",
      devlogLink: "트러블슈팅 블로그 기록 보기 ↗",
      toolingLink: "저장소 보러가기 ↗",
      audioLearn: "오디오 포트폴리오 보기 ↗",
    },
    heroTags: ["C++ Gameplay", "Gameplay / Systems", "Editor Tooling", "AI-assisted Development"],
    projectMap: [
      {
        id: "projects",
        number: "01",
        status: "GAME PROJECT",
        title: "조선 십이기사단",
        summary: "한국적 세계관의 2D 액션 플랫폼입니다. 팀 리드/PM으로 진행을 맡았습니다. 타격감·UI 피드백용 사운드와 C++/Blueprint 연동을 설계·구현했습니다.",
        image: "../assets/game/joseon-knights.webp",
        imageAlt: "조선 십이기사단 게임플레이",
        href: "https://www.youtube.com/watch?v=HrRCXKaU5pM",
        tags: ["UE5", "Gameplay", "Sound Design"],
        links: [
          { label: "GitHub ↗", href: "https://github.com/NBcampUnrealTrack/1st-Team2-CH4-Project" },
          { label: "영상 보기 ↗", href: "https://www.youtube.com/watch?v=HrRCXKaU5pM" },
        ],
      },
      {
        id: "projects",
        number: "02",
        status: "GAME PROJECT",
        title: "SYMBIO",
        summary: "폐쇄된 연구소 배경의 TPS 액션 서바이벌입니다. UI/UX, 레벨, 시네마틱을 맡았습니다. 실내 공간감·총기·괴물 보이스 오디오도 구현했습니다.",
        image: "../assets/game/symbio.webp",
        imageAlt: "SYMBIO 게임플레이",
        href: "https://www.youtube.com/watch?v=2nxZ4AfdJa8",
        tags: ["UE5", "BGM / SFX", "Cinematic"],
        links: [
          { label: "GitHub ↗", href: "https://github.com/NBcampUnrealTrack/1st-Team14-CH3-Project" },
          { label: "영상 보기 ↗", href: "https://www.youtube.com/watch?v=2nxZ4AfdJa8" },
        ],
      },
      {
        id: "projects",
        number: "03",
        status: "GAME PROJECT",
        title: "레인보우 가디언",
        summary: "층마다 분위기가 바뀌는 테마 타워 로그라이트 RPG입니다. 콘셉트와 스토리 기획을 주도했습니다. 8개 테마의 탐험·전투·상점·제단 BGM과 SFX를 만들었습니다.",
        image: "../assets/game/rainbow-guardian.webp",
        imageAlt: "레인보우 가디언 게임플레이",
        href: "https://www.youtube.com/watch?v=9vPQz9_O9Uw",
        tags: ["RPG", "BGM", "SFX"],
        links: [
          { label: "GitHub ↗", href: "https://github.com/SeungH99/ProjectRainbowGuardian" },
          { label: "영상 보기 ↗", href: "https://www.youtube.com/watch?v=9vPQz9_O9Uw" },
        ],
      },
      {
        id: "projects",
        number: "04",
        status: "INTERACTIVE MEDIA",
        title: "Flight Record",
        summary: "앨범 음악과 공간 이동을 이은 Unity 인터랙티브 작품입니다. 리더/PM이자 사운드 디자이너·개발자로 참여했습니다. C# 음악 트리거와 오디오 리액티브, Jira/GitLab 협업을 총괄했습니다.",
        image: "../assets/game/flight-record.webp",
        imageAlt: "Flight Record 인터랙티브 미디어",
        href: "https://raindrovvv.itch.io/flightrecord",
        tags: ["Unity", "Interactive Audio", "Direction"],
        links: [
          { label: "게임 플레이 (itch.io) ↗", href: "https://raindrovvv.itch.io/flightrecord" },
          { label: "영상 보기 ↗", href: "https://www.youtube.com/watch?v=X-2pHNHbX7M&t=103s" },
        ],
      },
      {
        id: "projects",
        number: "05",
        status: "AI PROJECT",
        title: "AI Gunslinger",
        summary: "AI API를 게임 루프에 붙인 프로토타입입니다. 플레이어 선택과 시스템 반응을 빠르게 검증했습니다. 웹 실시간 상호작용과 턴제 결투 흐름을 설계했습니다.",
        image: "../assets/game/ai-gunslinger.jpg",
        imageAlt: "AI Gunslinger duel scene",
        href: "https://ai-gunslinger.vercel.app",
        tags: ["AI API", "Prototype", "Web"],
        links: [
          { label: "GitHub ↗", href: "https://github.com/raindrovvv/AI_GunSlinger" },
          { label: "플레이해보기 ↗", href: "https://ai-gunslinger.vercel.app" },
        ],
      },
    ],
    contribution: {
      metrics: [["670", "contributionMetricCommits"], ["34.8%", "contributionMetricShare"], ["260", "contributionMetricFiles"], ["123", "contributionMetricRecent"]],
      evidence: "contributionEvidence",
      strength: "contributionStrength",
      areas: [["contributionAreaGameplay", "contributionAreaGameplayDetail"], ["contributionAreaUi", "contributionAreaUiDetail"], ["contributionAreaAudio", "contributionAreaAudioDetail"], ["contributionAreaTools", "contributionAreaToolsDetail"]],
    },
    guardian: {
      label: "CORE PROJECT / 4v1 ASYMMETRIC PVP",
      title: "Guardian & Seeker",
      image: "../assets/game/guardian-seeker.webp",
      imageAlt: "Guardian & Seeker gameplay and Wwise implementation capture",
      summary: "Guardian & Seeker는 UE5와 Wwise로 제작한 4v1 비대칭 PvP 액션 게임입니다.",
      implementedLead: "게임플레이 및 오디오 시스템 구현 담당으로 참여했습니다.",
      implemented: [
        "역할별 Audio Component",
        "Wwise Event · Switch · RTPC",
        "Physical Material 발소리",
        "BGM State 전환",
        "Collision · Line Trace 오클루전",
      ],
      closing:
        "C++·Blueprint·Wwise가 연결되는 런타임 구조를 설계했고, 사운드 에셋과 BGM도 직접 제작해 적용했습니다. 플레이테스트와 디버깅으로 검증했습니다.",
      links: [
        { label: "구현 코드 보기 ↗", href: "https://github.com/raindrovvv/GuardianAndSeeker/tree/Dev" },
        { label: "게임플레이 보기 ↗", href: "https://www.youtube.com/watch?v=MGSCKdCAgDY" },
      ],
      evidence: [
        ["Role", "게임플레이·오디오 구현"],
        ["Contribution", "전투 기능, 게임 상태, 사운드 연결"],
        ["Evidence", "299 players · 4.36/5 average"],
        ["Stack", "UE5.6 · C++ · Blueprint · Wwise"],
      ],
      flow: [
        ["INPUT", "Player action"],
        ["STATE", "Gameplay state"],
        ["ROUTE", "Audio Component"],
        ["OUTPUT", "Wwise feedback"],
      ],
      metrics: [
        ["299명", "지스타 2025 현장 플레이테스터 ↗", "https://raindrovvv.tistory.com/108"],
        ["4.36 / 5.0", "지스타 현장 관람객 만족도 평점 ↗", "https://raindrovvv.tistory.com/108"],
      ],
    },
    unrealAgent: {
      label: "EDITOR TOOLING / LOCAL AI WORKFLOW",
      title: "UnrealAgent",
      summary:
        "에디터 확인을 줄이려고 Unreal Editor와 로컬 AI를 잇는 MCP 브리지를 만들었습니다.\n\nBlueprint, Asset, Viewport, Output Log를 조회·조작합니다. AI 제안은 컴파일·실행·예외 검증을 거친 뒤에만 적용됩니다.\n\n코드 생성이 목적이 아닙니다. 문제를 나누고, 도구 역할을 정하고, 결과를 검증하는 루프를 만들었습니다.",
      image: "../assets/tooling/unreal-mcp.png",
      imageAlt: "Unreal Editor 안에서 실행 중인 UnrealAgent 패널",
      tags: ["Unreal Editor", "MCP", "C++", "C#/.NET", "Python"],
      process: [
        ["01", "Inspect", "Blueprint / Asset / Log"],
        ["02", "Constrain", "small, explicit tools"],
        ["03", "Verify", "compile / run / exception"],
      ],
      href: "https://github.com/raindrovvv/UnrealAgent",
    },
    debugging: [
      {
        number: "A",
        title: "벽 너머 사운드 차폐와 오클루전 디버깅",
        image: "../assets/game/audio-debugging.webp",
        imageAlt: "게임 플레이 중 오클루전과 콜리전 디버깅 장면",
        summary:
          "벽과 문 너머 몬스터·함정 소리가 바로 옆처럼 들렸습니다. 장애물을 무시해 공간감이 무너진 상태였습니다. Wwise와 UE Line Trace 경계를 나눠 몰입과 성능을 같이 맞췄습니다.",
        evidence:
          "[문제 배경]\n성능 이슈로 오클루전이 꺼져 있었습니다.\n벽 너머 몬스터 소리가 여과 없이 들렸습니다.\n그냥 켜면 카메라 앵글에 따라 로컬 자기 차폐(Self-Occlusion)와 다중 리스너 충돌이 났습니다.\n[해결 및 구현 의도]\n- 연산 비용 통제: 매 프레임 Trace를 피했습니다. OcclusionRefreshInterval = 0.2f로 부하를 끊었습니다.\n- 자기 차폐 및 리스너 분리: 로컬 캐릭터 주기는 0으로 둬 자기 소리가 씹히지 않게 했습니다. 리모트 CameraAudioListener는 Unregister로 껐습니다.\n- 현실적인 공간감(Wwise 커브): 벽 뒤 소리를 -200dB로 끊지 않았습니다. -15~-20dB 감쇠와 LPF(30~50)로 먹먹하게 들리게 했습니다.\n- 실시간 검증: 콘솔 디버그 레이(GS.Audio.ShowOcclusionRay)를 만들었습니다. 녹색은 정상, 적색은 차폐입니다. 팀과 같이 눈으로 확인했습니다.",
        tags: ["Wwise Occlusion", "Line Trace", "C++"],
        href: "https://raindrovvv.tistory.com/121",
      },
      {
        number: "B",
        title: "라이트 채널 분리를 통한 캐릭터 시인성 확보",
        image: "../assets/game/dungeon-lighting.png",
        imageAlt: "던전 조명 및 캐릭터 필라이트 전후 비교 장면",
        summary:
          "던전 분위기는 유지해야 했습니다. 캐릭터 실루엣과 전면이 배경에 묻혀 조작이 어려워졌습니다. 라이트 채널을 분리해 가독성을 살렸습니다.",
        evidence:
          "[문제 배경]\n환경광을 낮추면 캐릭터가 안 보였습니다.\n캐릭터를 밝히면 배경까지 밝아져 던전 분위기가 깨졌습니다.\n[해결 및 구현 의도]\n- 물리적 조명 분리(Light Channel): 배경은 Channel 0, 캐릭터는 Channel 1입니다. 캐릭터 조명이 벽과 바닥에 번지지 않습니다.\n- 전용 컴포넌트화: C++ UGS_CharacterFillLightComponent로 Point Fill과 Spot Rim을 같이 제어합니다.\n- 파이프라인 편의성: bAutoApplyMeshChannels로 Owner의 모든 SkeletalMeshComponent에 채널을 자동 전파합니다. 수동 세팅 실수를 막았습니다.\n- 빠른 튜닝 환경: ELightUnits::Unitless로 밝기를 바로 조절합니다. 뷰포트 기즈모(DrawDebugVisualization)로 범위와 방향을 확인합니다.",
        tags: ["Light Channel", "Fill/Rim Light", "C++"],
        href: "https://raindrovvv.tistory.com/186",
      },
      {
        number: "C",
        title: "포탈 VFX 최적화와 블루프린트 계층 구조 개선",
        image: "../assets/game/vfx-optimization-poster.jpg",
        imageAlt: "포탈 VFX 거리 컬링 및 블루프린트 계층 구조 최적화 동작 장면",
        summary:
          "원거리 포탈 파티클을 줄이려 공용 최적화 컴포넌트를 붙였습니다. 에디터 프리뷰 원점이 틀어졌고, 부모 컴포넌트 상속으로 돌 문(StoneDoor)까지 컬링되어 사라졌습니다. 계층을 나눠 구조적으로 고쳤습니다.",
        evidence:
          "[문제 배경]\n최적화 컴포넌트가 서브컴포넌트를 동적으로 붙이면서 에디터 Root/Preview 트랜스폼이 흔들렸습니다.\n부모 PrimitiveComponent의 거리 컬링이 자식 메시 전체로 퍼져 문과 장식까지 사라졌습니다.\n[해결 및 구현 의도]\n- 프리뷰 안정성: 동적 부착을 제거했습니다. 플레이어 실거리 연산과 DrawDebugSphere로 뷰포트 원점을 고정했습니다.\n- 블루프린트 계층 분리: 돌 문과 포탈 이펙트의 Parent-Child를 끊고 Sibling으로 재배치했습니다. Static Mobility를 맞춰 라이트맵과 씬 그래프를 안정화했습니다.\n- 방어적 태그 및 컬링 보호 체계: GS_VFXOptIgnore와 GS_VFXOptIgnoreSubtree를 나눴습니다. SetCullDistance(0)와 bNeverDistanceCull로 다른 복합 액터에도 재사용 가능하게 만들었습니다.",
        tags: ["VFX Opt", "BP Hierarchy", "Cull Distance"],
        href: "https://raindrovvv.tistory.com/178",
      },
    ],
    tooling: [
      {
        number: "03",
        title: "UnityMCP",
        summary: "Unity Editor와 로컬 AI를 잇는 MCP 서버입니다. AudioClip/AudioSource 조회와 3D 사운드·BGM 배치 도구를 넣었습니다.",
        image: "../assets/tooling/unity-mcp.png",
        imageAlt: "Unity Editor에서 실행 중인 UnityMCP 오디오 배치 도구",
        tags: ["Unity 2022.3+", "Node.js", "C#", "AudioSource"],
        href: "https://github.com/raindrovvv/UnityMCP",
        featured: false,
        panel: ["PREVIEW / PLACE", "true", "AudioSource → inspect → apply"],
      },
      {
        number: "02",
        title: "Build Monitor",
        summary: "빌드 과정을 스피너와 단계로 보여줍니다. 완료·실패는 Discord·Slack 웹훅으로 알립니다.",
        image: "../assets/tooling/build-monitor.svg",
        imageAlt: "GAS Build Monitor에서 빌드 진행률과 Discord·Slack 웹훅 상태를 확인하는 대시보드",
        tags: ["Compile", "Run", "Exception", "Evidence"],
        href: "#debugging",
        featured: false,
        panel: ["BUILD MONITOR", "LIVE", "compile → webhook → notify"],
      },
      {
        number: "01",
        title: "UnrealAgent",
        summary: "Unreal Editor와 로컬 AI를 잇는 MCP 브리지입니다. Blueprint, Asset, Viewport, Output Log를 확인한 뒤 컴파일·실행·예외 검증을 거쳐 적용합니다.",
        image: "../assets/tooling/unreal-mcp.png",
        imageAlt: "Unreal Editor에서 실행 중인 UnrealAgent MCP 브리지",
        tags: ["Unreal Editor", "MCP", "C++", "C#/.NET", "Python"],
        href: "https://github.com/raindrovvv/UnrealAgent",
        featured: true,
        panel: ["CHECK / APPLY", "READY", "editor → agent → verify"],
      },
    ],
    activities: [
      { number: "01", period: "2025.11", type: "Public Showcase / Field QA", title: "G-STAR 2025 Guardian & Seeker", summary: "현장 플레이와 설문을 봤습니다. 헤드폰 믹스, 입력 버그, 밸런스, 튜토리얼 UX를 다음 과제로 정리했습니다.", proof: "BEXCO 2일 부스 운영 · 현장 플레이 관찰 · 설문 피드백 정리", image: "../assets/activity/gstar-2025.png", alt: "G-STAR 2025 Guardian & Seeker 전시 부스", href: "https://raindrovvv.tistory.com/108", tags: ["Field QA", "Player Feedback", "Audio Mix"] },
      { number: "02", period: "2025.08–09", type: "Prototype / User Test", title: "Smilegate Indie Game Prototyping Challenge", summary: "5주 프로토타입에서 멘토링과 테스트 피드백을 받았습니다. 전투 흐름, 조작감, 사운드·UX를 빠르게 검증했습니다.", proof: "주차별 멘토 피드백 · 온라인 테스트 플레이 · 개선 항목 기록", image: "../assets/activity/smilegate-prototyping-challenge.png", alt: "인디 게임 프로토타이핑 챌린지 테스트 현장", href: "https://raindrovvv.tistory.com/117", secondaryHref: "https://raindrovvv.tistory.com/118", tags: ["Prototype", "User Test", "Combat UX"] },
      { number: "03", period: "Activity record", type: "Hackathon / AI Collaboration", title: "Gemini 3 서울 해커톤", summary: "생성형 AI로 아이디어를 빠르게 구체화했습니다. 결과물을 검증한 해커톤 기록입니다.", proof: "아이디어 구체화 · 프로토타입 검증 · 결과 공유", image: "../assets/activity/gemini-3-seoul-hackathon.png", alt: "Gemini 3 서울 해커톤 활동 기록", href: "#contact", tags: ["Hackathon", "AI Collaboration", "Prototype"] },
      { number: "04", period: "Activity record", type: "Game Jam / Team Project", title: "스파르타 게임잼", summary: "짧은 사이클 안에서 아이디어를 구현했습니다. 팀과 플레이 가능한 결과까지 완주했습니다.", proof: "팀 협업 · 빠른 구현 · 플레이 가능한 결과물", image: "../assets/activity/sparta-gamejam.png", alt: "스파르타 게임잼 결과물 이미지", href: "#projects", tags: ["Game Jam", "Teamwork", "Playable Build"] },
    ],
    discography: {
      stats: [["50+", "released tracks"], ["7+", "years of production"], ["01", "full album · 비행"]],
      text: "50개 이상의 트랙을 작사·작곡·편곡·믹싱·마스터링까지 이어 오며 반복을 견디는 제작 습관을 쌓았습니다.\n이 경험은 게임에서도 소스 구조화와 디테일 검증을 끝까지 가져가는 힘이 되었습니다.",
      releases: [["비행", "Album"], ["RAINSHOWER", "Single"], ["FORECAST", "EP"], ["P V R V D V X", "Mixtape"]],
    },
  },
};

const createEnglishPortfolio = () => {
  const en = JSON.parse(JSON.stringify(portfolio.ko));
  Object.assign(en.strings, {
    soundPortfolio: "Game Audio",
    navProjects: "Sub",
    navGuardian: "Main",
    heroKicker: "GAME PROGRAMMING / PORTFOLIO",
    navContribution: "Contribution",
    navDiscography: "Discography",
    proofGameplay: "Gameplay",
    proofGameplayDetail: "C++ / Blueprint systems",
    proofDebugging: "Debugging",
    proofDebuggingDetail: "reproduce → trace → verify",
    proofTooling: "Tooling",
    proofToolingDetail: "MCP / automation",
    heroName: "Jungmin Cha",
    heroRole: "Game Programmer",
    heroStack: "Gameplay Systems · Editor Tooling · Debugging",
    heroIntro: "I build gameplay and audio systems with C++ and Blueprint in a game engine.\nI shorten development and validation loops with MCP-based tooling, and debug issues between the engine and audio middleware (Wwise).",
    heroPrimary: "View programming projects",
    heroSecondary: "Open GitHub",
    projectsEyebrow: "02 / SUB PROJECTS",
    projectsTitle: "Sub Project",

    guardianProjectEyebrow: "01 / MAIN PROJECT",
    guardianProjectTitle: "Main Project",
    guardianProjectNote: "One project, shown as a continuous story of scope, implementation, and problem solving.",
    contributionEyebrow: "CONTRIBUTION",
    guardianHeading: "UE5 C++ gameplay feedback system",
    guardianEyebrow: "IMPLEMENTATION",
    agentHeading: "An MCP bridge between Unreal Editor and local AI",
    debuggingEyebrow: "DEBUGGING",
    debuggingHeading: "Reproduce the symptom. Narrow the cause.",

    toolingEyebrow: "03 / EDITOR TOOLING & BUILD MONITOR",
    toolingHeading: "Monitor editor tools and build status at a glance.",
    activitiesEyebrow: "04 / PUBLIC ACTIVITIES",
    activitiesHeading: "Records of observing, making, and verifying in the field",

    activityOpen: "Open record",
    activityProof: "Record",
    discographyHeading: "A long-form practice of finishing details",
    agentLink: "View UnrealAgent on GitHub ↗",
    audioPortfolioLink: "Game Sound Designer portfolio ↗",
    toolingLink: "View repository ↗",
    contributionEyebrow: "02 / GUARDIAN & SEEKER · CONTRIBUTION",
    contributionHeading: "My scope and outcomes in Guardian & Seeker",
    contributionNote: "A 4v1 asymmetric PvP game spanning gameplay, UI, sound, and development tools.",
    contributionMetricCommits: "commits (merge excluded)",
    contributionMetricShare: "of 1,923 total",
    contributionMetricFiles: "core code files",
    contributionMetricRecent: "added since June",
    contributionEvidence: "2025.05–2026.09 · Guardian & Seeker Git history · Source/GAS + Config + Legacy/GameFeatures",
    contributionStrength: "I broke design needs into feature units. AI work and hands-on verification stayed separate, which raised density and polish.",
    contributionAreasTitle: "Areas I directly worked across",
    contributionAreasNote: "I grouped the commit record into practical work areas.",
    contributionAreaGameplay: "Gameplay",
    contributionAreaGameplayDetail: "Combat, dungeons, maps, interaction, game state",
    contributionAreaUi: "UI / Player Feedback",
    contributionAreaUiDetail: "HUD, minimap, input, guidance screens",
    contributionAreaAudio: "Sound / Effects",
    contributionAreaAudioDetail: "Sound hooks, hit response, footsteps, effects",
    contributionAreaTools: "Development Tools / AI",
    contributionAreaToolsDetail: "Editor tools, automation, workflow checks",
    contactEyebrow: "06 / CONTACT",
    contactHeading: "Gameplay, audio, tools —\nI don't stay in one lane.",
    contactBody: "I give the work everything I can.\nI prototype fast with AI, talk it through with the team, and keep improving.",
    contactEmail: "Send an email",
    contactGithub: "Open GitHub",
    footerName: "Jungmin Cha · Game Programmer",
    printPdf: "Print PDF",
    projectOpen: "Open case",
    projectStatus: "verified",
    caseRole: "Role",
    caseContribution: "Contribution",
    caseEvidence: "Evidence",
    caseStack: "Stack",
    panelEvidence: "IMPLEMENTATION EVIDENCE",
    panelPass: "PASS",
    agentMedia: "UNREAL EDITOR / MCP",
    guardianMedia: "GUARDIAN & SEEKER / UE5",
    watchGameplay: "Watch gameplay",
    guardianMediaDisclaimer: "※ “Technical Art” describes my implementation of the visual and sound systems during the project—not an art-director title.",
      agentLink: "View UnrealAgent on GitHub ↗",
    debugOpen: "Open evidence",
    devlogLink: "Read devlog article ↗",
    toolingLink: "View repository ↗",
    audioLearn: "See original audio portfolio ↗",
  });
  en.heroTags = ["C++ Gameplay", "Gameplay / Systems", "Editor Tooling", "AI-assisted Development"];
  en.projectMap = [
    {
      id: "projects",
      number: "01",
      status: "GAME PROJECT",
      title: "Twelve Knights of Joseon",
      summary: "A 2D action platform with a Korean-inspired world. I led the project as team lead/PM. I designed combat and UI feedback sound, plus the C++/Blueprint hook-up.",
      image: "../assets/game/joseon-knights.webp",
      imageAlt: "Twelve Knights of Joseon gameplay",
      href: "https://www.youtube.com/watch?v=HrRCXKaU5pM",
      tags: ["UE5", "Gameplay", "Sound Design"],
      links: [
        { label: "GitHub ↗", href: "https://github.com/NBcampUnrealTrack/1st-Team2-CH4-Project" },
        { label: "Watch video ↗", href: "https://www.youtube.com/watch?v=HrRCXKaU5pM" },
      ],
    },
    {
      id: "projects",
      number: "02",
      status: "GAME PROJECT",
      title: "SYMBIO",
      summary: "A TPS action-survival game in a sealed lab. I handled UI/UX, levels, and cinematics. I also built interior, gun, and monster-voice audio.",
      image: "../assets/game/symbio.webp",
      imageAlt: "SYMBIO gameplay",
      href: "https://www.youtube.com/watch?v=2nxZ4AfdJa8",
      tags: ["UE5", "BGM / SFX", "Cinematic"],
      links: [
        { label: "GitHub ↗", href: "https://github.com/NBcampUnrealTrack/1st-Team14-CH3-Project" },
        { label: "Watch video ↗", href: "https://www.youtube.com/watch?v=2nxZ4AfdJa8" },
      ],
    },
    {
      id: "projects",
      number: "03",
      status: "GAME PROJECT",
      title: "Rainbow Guardian",
      summary: "A themed-tower roguelite RPG. I drove concept and story. I made BGM and SFX for exploration, combat, shops, and altars across eight floors.",
      image: "../assets/game/rainbow-guardian.webp",
      imageAlt: "Rainbow Guardian gameplay",
      href: "https://www.youtube.com/watch?v=9vPQz9_O9Uw",
      tags: ["RPG", "BGM", "SFX"],
      links: [
        { label: "GitHub ↗", href: "https://github.com/SeungH99/ProjectRainbowGuardian" },
        { label: "Watch video ↗", href: "https://www.youtube.com/watch?v=9vPQz9_O9Uw" },
      ],
    },
    {
      id: "projects",
      number: "04",
      status: "INTERACTIVE MEDIA",
      title: "Flight Record",
      summary: "A Unity piece that ties album music to spatial movement. I was lead/PM and sound designer-developer. I owned C# music triggers, audio-reactive systems, and the Jira/GitLab process.",
      image: "../assets/game/flight-record.webp",
      imageAlt: "Flight Record interactive media",
      href: "https://raindrovvv.itch.io/flightrecord",
      tags: ["Unity", "Interactive Audio", "Direction"],
      links: [
        { label: "Play game (itch.io) ↗", href: "https://raindrovvv.itch.io/flightrecord" },
        { label: "Watch video ↗", href: "https://www.youtube.com/watch?v=X-2pHNHbX7M&t=103s" },
      ],
    },
    {
      id: "projects",
      number: "05",
      status: "AI PROJECT",
      title: "AI Gunslinger",
      summary: "A prototype that puts an AI API in the game loop. I used it to check player choices against system reactions fast. The flow is a web, real-time, turn-based duel.",
      image: "../assets/game/ai-gunslinger.jpg",
      imageAlt: "AI Gunslinger duel scene",
      href: "https://ai-gunslinger.vercel.app",
      tags: ["AI API", "Prototype", "Web"],
      links: [
        { label: "GitHub ↗", href: "https://github.com/raindrovvv/AI_GunSlinger" },
        { label: "Play demo ↗", href: "https://ai-gunslinger.vercel.app" },
      ],
    },
  ];
  en.guardian = {
    label: "CORE PROJECT / 4v1 ASYMMETRIC PVP",
    title: "Guardian & Seeker",
    image: "../assets/game/guardian-seeker.webp",
    imageAlt: "Guardian & Seeker gameplay and Wwise implementation capture",
    summary: "Guardian & Seeker is a 4v1 asymmetric PvP action game built with UE5 and Wwise.",
    implementedLead: "I owned gameplay and audio system implementation.",
    implemented: [
      "Role-based Audio Components",
      "Wwise Event · Switch · RTPC",
      "Physical Material footsteps",
      "BGM state transitions",
      "Collision · Line Trace occlusion",
    ],
    closing:
      "I designed the C++ / Blueprint / Wwise runtime, created and integrated the SFX and BGM myself, and verified the result through playtests and debugging.",
    links: [
      { label: "View implementation ↗", href: "https://github.com/raindrovvv/GuardianAndSeeker/tree/Dev" },
      { label: "Watch gameplay ↗", href: "https://www.youtube.com/watch?v=MGSCKdCAgDY" },
    ],
    evidence: [["Role", "Gameplay and audio implementation"], ["Contribution", "Combat features, game state, sound hooks"], ["Evidence", "299 players · 4.36/5 average"], ["Stack", "UE5.6 · C++ · Blueprint · Wwise"]],
    flow: [["INPUT", "Player action"], ["STATE", "Gameplay state"], ["ROUTE", "Audio Component"], ["OUTPUT", "Wwise feedback"]],
    metrics: [
      ["299", "G-STAR 2025 playtesters ↗", "https://raindrovvv.tistory.com/108"],
      ["4.36 / 5.0", "G-STAR visitor survey score ↗", "https://raindrovvv.tistory.com/108"],
    ],
  };
  en.unrealAgent = {
    label: "EDITOR TOOLING / LOCAL AI WORKFLOW",
    title: "UnrealAgent",
    summary: "I built an MCP bridge between Unreal Editor and a local AI agent to cut repetitive editor checks.\n\nThe tools inspect Blueprints, Assets, Viewport, and Output Log. AI changes apply only after compile, run, and exception checks.\n\nThe point is not code generation. I split the problem, defined tool roles, and verified the result.",
    image: "../assets/tooling/unreal-mcp.png",
    imageAlt: "UnrealAgent panel running inside Unreal Editor",
    tags: ["Unreal Editor", "MCP", "C++", "C#/.NET", "Python"],
    process: [["01", "Inspect", "Blueprint / Asset / Log"], ["02", "Constrain", "small, explicit tools"], ["03", "Verify", "compile / run / exception"]],
    href: "https://github.com/raindrovvv/UnrealAgent",
  };
  en.debugging = [
    {
      number: "A",
      title: "Sound Occlusion & Collision Debugging",
      image: "../assets/game/audio-debugging.webp",
      imageAlt: "Occlusion and collision debugging during gameplay",
      summary: "Monster and trap sounds played through walls and doors as if they were next to the player. Spatial feel collapsed. I split the Wwise and UE Line Trace boundary so occlusion kept immersion without a performance hit.",
      evidence:
        "[Problem Background]\nOcclusion was off because of performance cost.\nMonster sounds behind walls played at full clarity.\nTurning it back on caused local self-occlusion and extra listener conflicts from the camera angle.\n[Solution & Implementation Intent]\n- Performance Control: Avoided per-frame traces. OcclusionRefreshInterval = 0.2f cut the cost.\n- Self-Occlusion & Listener Decoupling: Local player interval stays 0 so self-sound is not culled. Remote CameraAudioListener is unregistered.\n- Spatial Realism (Wwise Curves): No hard -200dB cutoff. -15~-20dB attenuation plus LPF (30~50) makes sound behind walls muffled.\n- Runtime Validation: Console debug rays (GS.Audio.ShowOcclusionRay) show green when clear and red when occluded. The team could verify by eye.",
      tags: ["Wwise Occlusion", "Line Trace", "C++"],
      href: "https://raindrovvv.tistory.com/121",
    },
    {
      number: "B",
      title: "Dungeon Lighting & Character Visibility",
      image: "../assets/game/dungeon-lighting.png",
      imageAlt: "Dungeon lighting and character fill light comparison preview",
      summary: "The dungeon had to stay dark. Character silhouettes and faces disappeared into the background and controls suffered. Light channels separated character lighting from the room.",
      evidence:
        "[Problem Background]\nLowering ambient light hid the character.\nRaising it lit the whole room and broke the dungeon mood.\n[Solution & Implementation Intent]\n- Physical Decoupling (Light Channels): Environment stays on Channel 0, character lights on Channel 1. Fill does not spill onto walls or floors.\n- Dedicated Component Architecture: C++ UGS_CharacterFillLightComponent drives Point Fill and Spot Rim together.\n- Pipeline Ergonomics: bAutoApplyMeshChannels pushes channels to every owner SkeletalMeshComponent. No manual per-mesh setup.\n- Rapid Tuning Workflow: ELightUnits::Unitless for direct brightness. Viewport gizmos (DrawDebugVisualization) show range and direction.",
      tags: ["Light Channel", "Fill/Rim Light", "C++"],
      href: "https://raindrovvv.tistory.com/186",
    },
    {
      number: "C",
      title: "Portal VFX Optimization & BP Hierarchy",
      image: "../assets/game/vfx-optimization-poster.jpg",
      imageAlt: "Portal VFX distance culling and blueprint hierarchy optimization in action",
      summary: "A shared optimize component was attached to cut far portal particles. Editor preview origin drifted, and parent-component culling hid the StoneDoor. Splitting the hierarchy fixed it.",
      evidence:
        "[Problem Background]\nThe optimize component attached subcomponents dynamically and shook editor Root/Preview transforms.\nParent PrimitiveComponent distance culling spread to every child mesh, so the door and props vanished.\n[Solution & Implementation Intent]\n- Preview Stability: Removed dynamic attachment. Player distance plus DrawDebugSphere keeps the viewport origin still.\n- BP Hierarchy Decoupling: StoneDoor and portal FX are siblings, not parent-child. Static Mobility is aligned for lightmaps and the scene graph.\n- Defensive Tagging & Cull Overrides: GS_VFXOptIgnore and GS_VFXOptIgnoreSubtree split ignore scope. SetCullDistance(0) and bNeverDistanceCull make the pattern reusable on other composite actors.",
      tags: ["VFX Opt", "BP Hierarchy", "Cull Distance"],
      href: "https://raindrovvv.tistory.com/178",
    },
  ];
  en.tooling = [
    { number: "03", title: "UnityMCP", summary: "An MCP server between Unity Editor and a local AI agent. It inspects AudioClip/AudioSource and places 3D sound and BGM.", image: "../assets/tooling/unity-mcp.png", imageAlt: "UnityMCP audio placement tools running in Unity Editor", tags: ["Unity 2022.3+", "Node.js", "C#", "AudioSource"], href: "https://github.com/raindrovvv/UnityMCP", featured: false, panel: ["PREVIEW / PLACE", "true", "AudioSource → inspect → apply"] },
    { number: "02", title: "Build Monitor", summary: "Build steps show as a spinner and stages. Done or failed results go out through Discord and Slack webhooks.", image: "../assets/tooling/build-monitor.svg", imageAlt: "GAS Build Monitor dashboard showing build progress and Discord Slack webhook status", tags: ["Compile", "Webhook", "Discord", "Slack"], href: "#debugging", featured: false, panel: ["BUILD MONITOR", "LIVE", "compile → webhook → notify"] },
    { number: "01", title: "UnrealAgent", summary: "An MCP bridge between Unreal Editor and a local AI agent. It inspects Blueprint, Asset, Viewport, and Output Log, then applies after compile, run, and exception checks.", image: "../assets/tooling/unreal-mcp.png", imageAlt: "UnrealAgent MCP bridge running in Unreal Editor", tags: ["Unreal Editor", "MCP", "C++", "C#/.NET", "Python"], href: "https://github.com/raindrovvv/UnrealAgent", featured: true, panel: ["CHECK / APPLY", "READY", "editor → agent → verify"] },
  ];
  en.activities = [
    { number: "01", period: "2025.11", type: "Public Showcase / Field QA", title: "G-STAR 2025 Guardian & Seeker", summary: "I watched booth play and read surveys. Headphone mix, input bugs, balance, and tutorial UX became the next tasks.", proof: "Two-day BEXCO booth · player observation · survey synthesis", image: "../assets/activity/gstar-2025.png", alt: "Guardian & Seeker booth at G-STAR 2025", href: "https://raindrovvv.tistory.com/108", tags: ["Field QA", "Player Feedback", "Audio Mix"] },
    { number: "02", period: "2025.08–09", type: "Prototype / User Test", title: "Smilegate Indie Game Prototyping Challenge", summary: "A five-week prototype with mentor and test feedback. I used it to check combat flow, controls, and sound/UX fast.", proof: "Weekly mentor feedback · online playtests · tracked improvements", image: "../assets/activity/smilegate-prototyping-challenge.png", alt: "Playtest session at the indie game prototyping challenge", href: "https://raindrovvv.tistory.com/117", secondaryHref: "https://raindrovvv.tistory.com/118", tags: ["Prototype", "User Test", "Combat UX"] },
    { number: "03", period: "Activity record", type: "Hackathon / AI Collaboration", title: "Gemini 3 Seoul Hackathon", summary: "I shaped an idea quickly with generative AI. Then I validated the prototype. This is that hackathon record.", proof: "Idea shaping · prototype validation · result sharing", image: "../assets/activity/gemini-3-seoul-hackathon.png", alt: "Gemini 3 Seoul Hackathon activity record", href: "#contact", tags: ["Hackathon", "AI Collaboration", "Prototype"] },
    { number: "04", period: "Activity record", type: "Game Jam / Team Project", title: "Sparta Game Jam", summary: "I built the idea in a short cycle. The team shipped a playable result.", proof: "Team collaboration · rapid implementation · playable build", image: "../assets/activity/sparta-gamejam.png", alt: "Sparta Game Jam project artwork", href: "#projects", tags: ["Game Jam", "Teamwork", "Playable Build"] },
  ];
  en.discography = {
    stats: [["50+", "released tracks"], ["7+", "years of production"], ["01", "full album · Flight"]],
    text: "Writing, composing, arranging, mixing, and mastering more than 50 tracks taught me how to finish details through repetition.\nIn games, that practice shows up as structured sources and a willingness to verify the last small behavior.",
    releases: [["Flight", "Album"], ["RAINSHOWER", "Single"], ["FORECAST", "EP"], ["P V R V D V X", "Mixtape"]],
  };
  return en;
};

portfolio.en = createEnglishPortfolio();

const LANGUAGE_KEY = "jungmin-programmer-language";
const THEME_KEY = "jungmin-programmer-theme";
let currentLanguage = localStorage.getItem(LANGUAGE_KEY) === "en" ? "en" : "ko";
// New visitors start in the brighter light theme; returning visitors keep their saved preference.
let currentTheme = localStorage.getItem(THEME_KEY) || "light";

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const activeCopy = () => portfolio[currentLanguage];

const tagList = (tags = [], extraClass = "") =>
  `<div class="tag-list ${extraClass}">${tags.map((tag, index) => `<span class="tag ${index === 0 ? "accent-tag" : ""}">${escapeHtml(tag)}</span>`).join("")}</div>`;

const paragraphs = (text = "", className = "") =>
  `<div class="${className}">${String(text)
    .split(/\n\n+/)
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("")}</div>`;

const applyTheme = () => {
  document.documentElement.dataset.theme = currentTheme;
  const toggle = $(".theme-toggle");
  if (!toggle) return;
  const isLight = currentTheme === "light";
  toggle.setAttribute("aria-pressed", String(isLight));
  toggle.setAttribute("aria-label", isLight ? "다크모드 전환" : "라이트모드 전환");
};

const renderHeroTags = () => {
  const node = $("#hero-tags");
  if (node) node.innerHTML = tagList(activeCopy().heroTags, "hero-tag-list");
};

const renderProjectMap = () => {
  const node = $("#project-map");
  if (!node) return;
  const copy = activeCopy();
  node.innerHTML = copy.projectMap
    .map(
      (project) => {
        const mainHref = project.href || `#${project.id}`;
        const linksHtml = project.links && project.links.length
          ? `<div class="project-map-links">
              ${project.links
                .map(
                  (link) =>
                    `<a class="project-map-link-btn" href="${escapeHtml(link.href)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`,
                )
                .join("")}
            </div>`
          : "";

        return `
        <article class="project-map-card" data-reveal>
          <div class="project-map-body">
            ${project.image ? `<figure class="project-map-media"><img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.imageAlt || project.title)}" loading="lazy" decoding="async" /></figure>` : ""}
            <div class="map-card-top"><span class="project-number">${escapeHtml(project.number)}</span><span class="project-status">${escapeHtml(project.status)}</span></div>
            <h3 class="project-map-title">${escapeHtml(project.title)}</h3>
            <p class="project-map-desc">${escapeHtml(project.summary)}</p>
            ${tagList(project.tags)}
          </div>
          ${linksHtml}
        </article>`;
      },
    )
    .join("");
};

const renderContribution = () => {
  const node = $("#contribution-content");
  if (!node) return;
  const copy = activeCopy();
  const item = copy.contribution;
  const project = copy.guardian;
  const label = (key) => copy.strings[key] || key;
  node.innerHTML = `
    <div class="contribution-top" data-reveal>
      <div class="contribution-main">
        <div class="contribution-metrics">${item.metrics
          .map(([value, key], index) => `<div class="contribution-metric ${index === 0 ? "is-primary" : ""}"><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label(key))}</span></div>`)
          .join("")}</div>
        <div class="contribution-story">
          <p>${escapeHtml(label(item.strength))}</p>
          <small>${escapeHtml(label(item.evidence))}</small>
        </div>
      </div>
      <div class="contribution-project-evidence">
        <div class="contribution-evidence-head"><strong>${escapeHtml(project.title)}</strong><span>${escapeHtml(project.label)}</span></div>
        <div class="contribution-evidence-list">${project.evidence
          .filter(([key]) => key !== "Evidence")
          .map(([key, value]) => `<div><strong>${escapeHtml(key)}</strong><span>${escapeHtml(value)}</span></div>`)
          .join("")}</div>
        <div class="contribution-evidence-metrics">${project.metrics
          .map(([value, text, href]) =>
            href
              ? `<a class="contribution-evidence-metric-item" href="${escapeHtml(href)}" target="_blank" rel="noreferrer"><strong>${escapeHtml(value)}</strong><span>${escapeHtml(text)}</span></a>`
              : `<div class="contribution-evidence-metric-item"><strong>${escapeHtml(value)}</strong><span>${escapeHtml(text)}</span></div>`
          )
          .join("")}</div>
      </div>
    </div>
    <div class="contribution-areas" data-reveal>
      <div class="contribution-areas-heading"><h3>${escapeHtml(label("contributionAreasTitle"))}</h3><p>${escapeHtml(label("contributionAreasNote"))}</p></div>
      <div class="contribution-area-grid">${item.areas
        .map(([title, detail], index) => `<article class="contribution-area"><span>0${index + 1}</span><strong>${escapeHtml(label(title))}</strong><p>${escapeHtml(label(detail))}</p></article>`)
        .join("")}</div>
    </div>
    `;
};

const renderGuardian = () => {
  const node = $("#guardian-content");
  if (!node) return;
  const copy = activeCopy();
  const item = copy.guardian;
  const gameplayLink =
    item.links.find((link) => link.href.includes("youtube.com") || link.label.toLowerCase().includes("gameplay") || link.label.includes("게임플레이")) ||
    item.links[0];
  node.innerHTML = `
    <div class="case-visual-wrap" data-reveal>
      <a class="case-visual" href="${escapeHtml(gameplayLink.href)}" target="_blank" rel="noreferrer">
        <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.imageAlt)}" loading="lazy" decoding="async" />
        <span class="media-badge">${escapeHtml(copy.strings.watchGameplay)} ↗</span>
      </a>
      <p class="media-disclaimer">${escapeHtml(copy.strings.guardianMediaDisclaimer)}</p>
    </div>
    <div class="case-main" data-reveal>
      <p class="case-label">${escapeHtml(item.label)}</p>
      <h3>${escapeHtml(item.title)}</h3>
      <div class="case-summary">
        ${item.summary ? `<p>${escapeHtml(item.summary)}</p>` : ""}
        ${item.implementedLead ? `<p>${escapeHtml(item.implementedLead)}</p>` : ""}
        ${item.implemented?.length
          ? `<ul class="case-scope">${item.implemented.map((entry) => `<li>${escapeHtml(entry)}</li>`).join("")}</ul>`
          : ""}
        ${item.closing ? `<p>${escapeHtml(item.closing)}</p>` : ""}
      </div>
      <div class="case-links">${item.links
        .map((link) => `<a class="text-link" href="${escapeHtml(link.href)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`)
        .join("")}</div>
    </div>
    `;
};

const renderUnrealAgent = () => {
  const node = $("#agent-content");
  if (!node) return;
  const copy = activeCopy();
  const item = copy.unrealAgent;
  node.innerHTML = `
    <figure class="agent-visual" data-reveal>
      <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.imageAlt)}" loading="lazy" decoding="async" />
      <figcaption class="media-badge">${escapeHtml(copy.strings.agentMedia)}</figcaption>
    </figure>
    <div class="agent-copy" data-reveal>
      <p class="case-label">${escapeHtml(item.label)}</p>
      <h3>${escapeHtml(item.title)}</h3>
      ${paragraphs(item.summary, "agent-summary")}
      ${tagList(item.tags)}
      <div class="agent-process">${item.process
        .map(([number, title, value]) => `<div class="process-step"><small>${escapeHtml(number)}</small><strong>${escapeHtml(title)}<br /><span>${escapeHtml(value)}</span></strong></div>`)
        .join("")}</div>
      <div class="case-links"><a class="text-link" href="${escapeHtml(item.href)}" target="_blank" rel="noreferrer">${escapeHtml(copy.strings.agentLink)}</a></div>
    </div>`;
};

const formatEvidence = (text) => {
  if (!text) return "";
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  let html = "";
  let currentBlock = null;

  lines.forEach((line) => {
    const sectionMatch = line.match(/^\[(.*?)\]\s*(.*)$/);
    if (sectionMatch) {
      if (currentBlock) {
        html += `</div>`;
      }
      const [, title, firstLine] = sectionMatch;
      const isProblem = title.includes("문제") || title.toLowerCase().includes("problem");
      const badgeClass = isProblem ? "badge-problem" : "badge-solution";
      html += `<div class="debug-evidence-block">
        <div class="debug-evidence-title"><span class="debug-evidence-tag ${badgeClass}">${escapeHtml(title)}</span></div>`;
      if (firstLine) {
        html += `<p class="debug-evidence-text">${escapeHtml(firstLine)}</p>`;
      }
      currentBlock = title;
    } else if (line.startsWith("- ")) {
      const itemContent = line.slice(2);
      const colonIndex = itemContent.indexOf(":");
      if (colonIndex !== -1) {
        const itemHead = itemContent.slice(0, colonIndex).trim();
        const itemBody = itemContent.slice(colonIndex + 1).trim();
        html += `<div class="debug-evidence-item"><strong class="debug-item-head">${escapeHtml(itemHead)}:</strong> <span class="debug-item-body">${escapeHtml(itemBody)}</span></div>`;
      } else {
        html += `<div class="debug-evidence-item"><span class="debug-item-bullet">•</span> <span class="debug-item-body">${escapeHtml(itemContent)}</span></div>`;
      }
    } else {
      html += `<p class="debug-evidence-text">${escapeHtml(line)}</p>`;
    }
  });

  if (currentBlock) {
    html += `</div>`;
  }
  return html;
};

const DEBUG_CASE_ICONS = { A: "scan", B: "signal", C: "zap" };

const renderDebugging = () => {
  const node = $("#debugging-content");
  if (!node) return;
  const copy = activeCopy();
  node.innerHTML = copy.debugging
    .map(
      (item) => {
        const iconName = DEBUG_CASE_ICONS[item.number] || "scan";
        return `
        <article class="debug-card ${item.image ? "has-debug-visual" : ""}" data-reveal>
          ${item.image ? `<img class="debug-card-visual" src="${escapeHtml(item.image)}" alt="${escapeHtml(item.imageAlt || item.title)}" loading="lazy" decoding="async" />` : ""}
          <div class="debug-card-header"><span class="debug-case-badge">CASE ${escapeHtml(item.number)}</span>${tagList(item.tags, "compact-tags")}</div>
          <h3 class="debug-card-title"><img class="debug-case-icon" src="../assets/doodle-icons/${iconName}.svg" alt="" aria-hidden="true"><span>${escapeHtml(item.title)}</span></h3>
          <p class="debug-card-summary">${escapeHtml(item.summary)}</p>
          <details>
            <summary>${escapeHtml(copy.strings.debugOpen)}</summary>
            <div class="debug-evidence-body">
              ${formatEvidence(item.evidence)}
              ${item.href ? `<a class="debug-link" href="${escapeHtml(item.href)}" target="_blank" rel="noreferrer">${escapeHtml(copy.strings.devlogLink || "트러블슈팅 블로그 기록 보기 ↗")}</a>` : ""}
            </div>
          </details>
        </article>`;
      }
    )
    .join("");
};

const TOOLING_ICONS = { "01": "setting", "02": "grid", "03": "signal" };

const renderTooling = () => {
  const node = $("#tooling-content");
  if (!node) return;
  const copy = activeCopy();
  node.innerHTML = [...copy.tooling].sort((a, b) => a.number.localeCompare(b.number))
    .map((item) => {
      const visual = item.image
        ? `<figure class="tool-media"><img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.imageAlt || item.title)}" loading="lazy" decoding="async" /></figure>`
        : item.placeholder
          ? `<div class="tool-media tool-placeholder" aria-label="${escapeHtml(item.title)} photo placeholder"><span>PHOTO / PREVIEW</span><strong>${escapeHtml(item.title)}</strong><small>visual asset to be connected</small></div>`
          : "";
      const iconName = TOOLING_ICONS[item.number] || "setting";
      return `
        <article class="tool-card ${item.featured ? "featured" : ""}" data-reveal>
          ${visual}
          <div>
            <span class="tooling-number">${escapeHtml(item.number)} / ${escapeHtml(item.panel[0])}</span>
            <h3><img class="tool-doodle" src="../assets/doodle-icons/${iconName}.svg" alt="" aria-hidden="true">${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.summary)}</p>
            ${tagList(item.tags)}
            <div class="case-links"><a class="text-link" href="${escapeHtml(item.href)}" ${item.href.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""}>${escapeHtml(copy.strings.toolingLink)}</a></div>
          </div>
        </article>`;
    })
    .join("");
};

const renderActivities = () => {
  const node = $("#activities-content");
  if (!node) return;
  const copy = activeCopy();
  node.innerHTML = copy.activities.map((item) => `
    <article class="activity-card" data-reveal>
      <a class="activity-media" href="${escapeHtml(item.href)}" ${item.href.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""}>
        <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.alt)}" loading="lazy" decoding="async" />
        <span class="media-badge">${escapeHtml(copy.strings.activityOpen)} ↗</span>
      </a>
      <div class="activity-content">
        <div class="activity-meta"><span class="activity-number">${escapeHtml(item.number)}</span><span>${escapeHtml(item.period)}</span><span>${escapeHtml(item.type)}</span></div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.summary)}</p>
        ${tagList(item.tags, "compact-tags")}
      </div>
    </article>`).join("");
};

const renderDiscography = () => {
  const node = $("#discography-content");
  if (!node) return;
  const item = activeCopy().discography;
  node.innerHTML = `
    <div class="discography-stats">${item.stats
      .map(([value, label]) => `<div class="discography-stat"><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span></div>`)
      .join("")}</div>
    <div class="discography-body"><p>${escapeHtml(item.text)}</p><ul class="release-list">${item.releases
      .map(([title, type]) => `<li><span>${escapeHtml(title)}</span><span>${escapeHtml(type)}</span></li>`)
      .join("")}</ul></div>`;
};

const renderContact = () => {
  const node = $("#contact-content");
  if (!node) return;
  const copy = activeCopy();
  node.innerHTML = `
    <div class="contact-copy" data-reveal>
      <p class="eyebrow"><img class="eyebrow-icon" src="../assets/doodle-icons/send.svg" alt="" aria-hidden="true"><span>${escapeHtml(copy.strings.contactEyebrow)}</span></p>
      <h2>${escapeHtml(copy.strings.contactHeading)}</h2>
      <p>${escapeHtml(copy.strings.contactBody)}</p>
    </div>
    <div class="contact-links" data-reveal>
      <a class="contact-primary" href="mailto:vnrs97@gmail.com">${escapeHtml(copy.strings.contactEmail)}</a>
      <a class="contact-secondary" href="https://github.com/raindrovvv" target="_blank" rel="noreferrer">${escapeHtml(copy.strings.contactGithub)}</a>
    </div>`;
};

const refreshRevealTargets = () => {
  const targets = $$('[data-reveal]:not(.is-visible)');
  if (!("IntersectionObserver" in window)) {
    targets.forEach((target) => target.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries, instance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        instance.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );
  targets.forEach((target) => observer.observe(target));
};

const renderCopy = () => {
  const copy = activeCopy();
  $$('[data-i18n]').forEach((node) => {
    const value = copy.strings[node.dataset.i18n];
    if (value) node.textContent = value;
  });
  document.documentElement.lang = currentLanguage;
  document.title = currentLanguage === "ko" ? "Game Programmer | Gameplay Systems · 차정민" : "Game Programmer | Gameplay Systems · Jungmin Cha";
  $$(".language-button").forEach((button) => {
    const active = button.dataset.language === currentLanguage;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderHeroTags();
  renderProjectMap();
  renderContribution();
  renderGuardian();
  renderDebugging();
  renderTooling();
  renderActivities();
  renderDiscography();
  renderContact();
  refreshRevealTargets();
};

const setupInteractions = () => {
  $$(".language-button").forEach((button) => {
    button.addEventListener("click", () => {
      currentLanguage = button.dataset.language === "en" ? "en" : "ko";
      localStorage.setItem(LANGUAGE_KEY, currentLanguage);
      renderCopy();
    });
  });

  $(".theme-toggle")?.addEventListener("click", () => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, currentTheme);
    applyTheme();
  });

  if ("IntersectionObserver" in window) {
    const sections = $$('main > .section[id]');
    const links = $$(".nav a");
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`));
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((section) => navObserver.observe(section));
  }

  const scrollTopBtn = $("#scroll-top");
  if (scrollTopBtn) {
    const toggleScrollTop = () => {
      const show = window.scrollY > 400;
      scrollTopBtn.classList.toggle("is-visible", show);
    };

    window.addEventListener("scroll", toggleScrollTop, { passive: true });
    toggleScrollTop();

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const printBtn = $("#print-portfolio");
  let restorePrint = null;

  const posterUrl = (src) => src.replace(/\.(gif|webp)(\?.*)?$/i, "-poster.jpg$2");

  const loadImage = (url) =>
    new Promise((resolve) => {
      const probe = new Image();
      probe.onload = () => resolve(true);
      probe.onerror = () => resolve(false);
      probe.src = url;
    });

  const wrapPrintSlots = (container, itemSelector, perPage) => {
    if (!container) return () => {};
    const items = [...container.querySelectorAll(itemSelector)];
    if (!items.length) return () => {};
    const slots = [];
    for (let i = 0; i < items.length; i += perPage) {
      const slot = document.createElement("div");
      slot.className = "print-page-slot";
      const group = items.slice(i, i + perPage);
      if (group.length === 1) slot.classList.add("is-single");
      group[0].before(slot);
      group.forEach((el) => slot.appendChild(el));
      slots.push(slot);
    }
    return () => {
      slots.forEach((slot) => {
        while (slot.firstChild) slot.before(slot.firstChild);
        slot.remove();
      });
    };
  };

  const openDebugDetailsForPrint = () => {
    const details = $$(".debug-card details");
    const previous = details.map((node) => node.open);
    details.forEach((node) => {
      node.open = true;
    });
    return () => {
      details.forEach((node, index) => {
        node.open = previous[index];
      });
    };
  };

  const applyPrintLayout = () => {
    if (restorePrint) return;
    const restoreDetails = openDebugDetailsForPrint();
    const restoreSlots = [
      wrapPrintSlots($("#debugging-content"), ":scope > .debug-card", 1),
      wrapPrintSlots($("#project-map"), ":scope > .project-map-card", 2),
      wrapPrintSlots($("#activities-content"), ":scope > .activity-card", 2),
    ];
    restorePrint = () => {
      restoreSlots.forEach((restore) => restore());
      restoreDetails();
      restorePrint = null;
    };
  };

  const prepareImagesForPrint = async () => {
    const images = $$("main img");
    const previous = images.map((img) => img.getAttribute("src"));
    await Promise.all(
      images.map(async (img) => {
        img.loading = "eager";
        const src = img.getAttribute("src") || "";
        const poster = posterUrl(src);
        if (poster !== src && (await loadImage(poster))) {
          img.src = poster;
        }
        if (img.complete && img.naturalWidth) return;
        await new Promise((resolve) => {
          img.addEventListener("load", resolve, { once: true });
          img.addEventListener("error", resolve, { once: true });
        });
      }),
    );
    return () => {
      images.forEach((img, index) => {
        if (previous[index]) img.src = previous[index];
      });
    };
  };

  window.addEventListener("beforeprint", applyPrintLayout);
  window.addEventListener("afterprint", () => {
    restorePrint?.();
  });

  if (printBtn) {
    printBtn.addEventListener("pointerenter", () => {
      $$("main img").forEach((img) => {
        const poster = posterUrl(img.getAttribute("src") || "");
        if (poster !== img.getAttribute("src")) loadImage(poster);
      });
    }, { once: true });
    printBtn.addEventListener("click", async () => {
      const restoreImages = await prepareImagesForPrint();
      applyPrintLayout();
      const restoreLayout = restorePrint;
      restorePrint = () => {
        restoreLayout?.();
        restoreImages();
      };
      window.print();
    });
  }
};

const setupAiCursor = () => {
  const finePointer = window.matchMedia?.("(pointer: fine)").matches;
  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  if (!finePointer || reducedMotion) return;

  const cursor = document.createElement("div");
  cursor.className = "ai-cursor";
  cursor.setAttribute("aria-hidden", "true");
  cursor.innerHTML = '<span class="ai-cursor-glyph" aria-hidden="true">✦</span>';
  document.body.append(cursor);

  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 2;
  let currentX = targetX;
  let currentY = targetY;
  let idleTimer;
  let idleStartedAt = 0;
  let isIdle = false;
  let frame;

  const IDLE_DELAY = 3000;
  const ORBIT_RADIUS = 24;
  const ORBIT_PERIOD = 7000;

  const clearIdleTimer = () => {
    if (idleTimer) window.clearTimeout(idleTimer);
    idleTimer = undefined;
  };

  const scheduleIdle = () => {
    clearIdleTimer();
    idleTimer = window.setTimeout(() => {
      isIdle = true;
      idleStartedAt = performance.now();
      cursor.classList.add("is-idle");
    }, IDLE_DELAY);
  };

  const move = (event) => {
    targetX = event.clientX;
    targetY = event.clientY;
    isIdle = false;
    idleStartedAt = 0;
    cursor.classList.remove("is-idle");
    cursor.classList.add("is-visible");
    scheduleIdle();
  };

  const updateHoverState = (event) => {
    cursor.classList.toggle("is-hovering", Boolean(event.target.closest("a, button, summary, input, textarea, select")));
  };

  const tick = () => {
    let renderX = currentX;
    let renderY = currentY;

    if (isIdle) {
      const elapsed = performance.now() - idleStartedAt;
      const radius = ORBIT_RADIUS * Math.min(1, elapsed / 900);
      const angle = (elapsed / ORBIT_PERIOD) * Math.PI * 2 - Math.PI / 2;
      renderX = targetX + Math.cos(angle) * radius;
      renderY = targetY + Math.sin(angle) * radius;
      currentX = renderX;
      currentY = renderY;
    } else {
      currentX += (targetX - currentX) * 0.16;
      currentY += (targetY - currentY) * 0.16;
      renderX = currentX;
      renderY = currentY;
    }

    cursor.style.setProperty("--cursor-x", `${renderX}px`);
    cursor.style.setProperty("--cursor-y", `${renderY}px`);
    frame = window.requestAnimationFrame(tick);
  };

  window.addEventListener("pointermove", move, { passive: true });
  document.addEventListener("pointerover", updateHoverState, { passive: true });
  frame = window.requestAnimationFrame(tick);
  window.addEventListener("pagehide", () => {
    window.cancelAnimationFrame(frame);
    clearIdleTimer();
    window.removeEventListener("pointermove", move);
  }, { once: true });
};

applyTheme();
renderCopy();
setupInteractions();
setupAiCursor();
