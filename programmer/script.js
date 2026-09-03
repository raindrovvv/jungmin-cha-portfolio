const portfolio = {
  ko: {
    strings: {
      navProjects: "Projects",
      navGuardian: "Guardian",
      navAgent: "UnrealAgent",
      navDebugging: "Debugging",
      navTooling: "Tooling",
      navActivities: "Activities",
      navAudio: "Game Audio",
      navDiscography: "Discography",
      navContact: "Contact",
      soundPortfolio: "Game Audio",
      email: "Email",
      orbitRole: "C++ Gameplay",
      orbitGameplay: "Gameplay / Systems",
      orbitTooling: "Editor Tooling",
      orbitDebug: "Debug / Verify",
      proofGameplay: "Gameplay",
      proofGameplayDetail: "C++ / Blueprint systems",
      proofDebugging: "Debugging",
      proofDebuggingDetail: "reproduce → trace → verify",
      proofTooling: "Tooling",
      proofToolingDetail: "MCP / automation",
      heroKicker: "GAME PROGRAMMING / PORTFOLIO",
      heroDate: "2026.09 UPDATE",
      heroName: "차정민",
      heroRole: "Game Programmer",
      heroStack: "Gameplay Systems · Editor Tooling · Debugging",
      heroIntro:
        "게임엔진에서 C++와 Blueprint로 게임플레이와 오디오 시스템을 구현합니다.\nWwise와 MCP를 활용해 기능을 빠르게 검증하고, 문제를 재현해 엔진과 미들웨어의 동작을 단계별로 추적합니다.",
      heroPrimary: "View programming projects",
      heroSecondary: "Open GitHub",
      projectsEyebrow: "01 / PROGRAMMING PROJECTS",
      projectsTitle: "문제를 쪼개고, 런타임에서 확인한 프로젝트",
      projectsNote: "게임 프로그래머 공통 기본기와 성장 가능성을 구현 증거로 연결했습니다.",
      guardianEyebrow: "02 / GUARDIAN & SEEKER",
      guardianHeading: "UE5 C++ 기반 플레이 피드백 시스템 구현",
      agentEyebrow: "03 / UNREALAGENT",
      agentHeading: "에디터와 로컬 AI를 연결한 MCP 브리지",
      debuggingEyebrow: "04 / DEBUGGING CASES",
      debuggingHeading: "증상을 재현하고 원인 경로를 좁혔습니다",
      debuggingNote: "로그, 콜리전, 미들웨어 값을 같은 사건의 증거로 묶어 확인합니다.",
      toolingEyebrow: "05 / UNITYMCP & BUILD MONITOR",
      toolingHeading: "적용 전에 확인하고, 적용 후에 다시 빌드합니다",
      toolingNote: "자동화의 목표를 ‘대신 작성’이 아니라 ‘검증 가능한 작업 단위’로 두었습니다.",
      activitiesEyebrow: "06 / PUBLIC ACTIVITIES",
      activitiesHeading: "현장에서 보고, 만들고, 다시 검증한 기록",
      activitiesNote: "전시·프로토타이핑·해커톤·게임잼에서 플레이어와 팀의 피드백을 구현 과제로 바꿨습니다.",
      activityOpen: "기록 열기",
      activityProof: "기록",
      audioEyebrow: "07 / GAME AUDIO",
      audioHeading: "사운드 도메인에서 쌓은 시스템 감각",
      audioNote: "오디오 경험은 구현·디버깅·QA를 실제 플레이 기준으로 판단하게 한 기반입니다.",
      discographyEyebrow: "08 / DISCOGRAPHY",
      discographyHeading: "긴 호흡으로 결과를 다듬어 온 기록",
      audioPortfolioLink: "Game Sound Designer portfolio ↗",
      contactEyebrow: "09 / CONTACT",
      contactHeading: "플레이어가 느끼는 문제를\n시스템의 언어로 풀어냅니다.",
      contactBody: "게임플레이 프로그래밍, 에디터 툴링, 런타임 디버깅이 만나는 지점에서 기여할 수 있습니다.\n구현 범위와 검증 방법을 함께 이야기하고 싶다면 연락 주세요.",
      contactEmail: "메일 보내기",
      contactGithub: "GitHub 열기",
      footerName: "차정민 · Game Programmer",
      projectOpen: "Open case",
      projectStatus: "verified",
      caseRole: "Role",
      caseContribution: "Contribution",
      caseEvidence: "Evidence",
      caseStack: "Stack",
      panelEvidence: "IMPLEMENTATION EVIDENCE",
      panelPass: "PASS",
      agentMedia: "UNREAL EDITOR / MCP",
      agentLink: "View UnrealAgent on GitHub ↗",
      debugOpen: "Open evidence",
      toolingLink: "View repository ↗",
      audioLearn: "See original audio portfolio ↗",
    },
    heroTags: ["C++ Gameplay", "Gameplay / Systems", "Editor Tooling", "AI-assisted Development"],
    projectMap: [
      {
        id: "guardian",
        number: "01",
        status: "G-STAR 2025",
        title: "Guardian & Seeker",
        summary: "게임플레이 상태와 오디오 피드백을 UE5 C++/Blueprint로 연결한 실전 사례",
        tags: ["UE5 C++", "Wwise", "Gameplay Feedback"],
      },
      {
        id: "unreal-agent",
        number: "02",
        status: "OPEN SOURCE",
        title: "UnrealAgent",
        summary: "반복적인 에디터 확인을 줄이기 위해 Unreal Editor와 로컬 AI를 연결한 MCP 브리지",
        tags: ["C++ / .NET", "MCP", "Editor Tooling"],
      },
      {
        id: "debugging",
        number: "03",
        status: "FIELD NOTES",
        title: "Debugging Cases",
        summary: "오클루전, 콜리전, 컴파일 로그를 한 문제의 원인 경로로 추적한 기록",
        tags: ["Runtime", "Collision", "QA"],
      },
      {
        id: "tooling",
        number: "04",
        status: "DRY RUN",
        title: "UnityMCP / Build Monitor",
        summary: "적용 전 상태 확인과 적용 후 빌드 검증을 끊기지 않게 만든 작업 흐름",
        tags: ["Unity", "Node.js", "Validation"],
      },
    ],
    guardian: {
      label: "CORE PROJECT / 4v1 ASYMMETRIC PVP",
      title: "Guardian & Seeker",
      summary:
        "Guardian & Seeker는 UE5와 Wwise로 제작한 4v1 비대칭 PvP 액션 게임이다.\n\n저는 게임 빌더이자 오디오 시스템 담당으로 참여해 역할별 Audio Component 구조, Wwise Event·Switch·RTPC 연동, Physical Material 기반 발소리, BGM State 전환, UE Collision·Line Trace 기반 오클루전 시스템을 구현했다.\n\n사운드 에셋 제작에 그치지 않고 C++·Blueprint·Wwise가 연결되는 런타임 구조를 설계하고, 플레이테스트와 디버깅으로 결과를 검증했다.",
      links: [
        { label: "View implementation ↗", href: "https://github.com/raindrovvv/GuardianAndSeeker/tree/Dev/Source/GAS/Public/Sound" },
        { label: "Watch gameplay ↗", href: "https://www.youtube.com/watch?v=d7xon5fv-kg" },
      ],
      evidence: [
        ["Role", "Gameplay builder / Audio system"],
        ["Contribution", "Audio Components, runtime state, Wwise integration"],
        ["Evidence", "191 assets · 299 players · 4.36/5 average"],
        ["Stack", "UE5.6 · C++ · Blueprint · Wwise"],
      ],
      flow: [
        ["INPUT", "Player action"],
        ["STATE", "Gameplay state"],
        ["ROUTE", "Audio Component"],
        ["OUTPUT", "Wwise feedback"],
      ],
      metrics: [
        ["191", "audio assets"],
        ["299", "playtesters"],
        ["4.36/5", "average feedback"],
      ],
    },
    unrealAgent: {
      label: "EDITOR TOOLING / LOCAL AI WORKFLOW",
      title: "UnrealAgent",
      summary:
        "반복적인 에디터 확인 작업을 줄이기 위해 Unreal Editor와 로컬 AI 에이전트를 연결하는 MCP 브리지를 제작했다.\n\nBlueprint, Asset, Viewport, Output Log를 확인할 수 있도록 도구를 구성하고, AI가 생성한 결과는 컴파일·실행·예외 상황 검증을 거친 뒤 적용했다.\n\nAI가 코드를 대신 작성했다는 점보다, 문제를 분해하고 도구의 범위를 정한 뒤 결과를 검증하는 개발 흐름을 구축한 경험에 의미가 있다.",
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
        title: "Occlusion / Collision",
        summary: "벽과 문 너머 몬스터 소리가 너무 가깝게 들리는 문제를 Wwise 값과 UE Collision/Line Trace로 분리해 확인했습니다.",
        evidence: "DistanceToPlayer, Occlusion RTPC, Collision channel, Line Trace 결과를 같은 위치에서 비교하고 필터·볼륨·전달 정도를 조정했습니다.",
        tags: ["Wwise RTPC", "UE Collision", "Line Trace"],
      },
      {
        number: "B",
        title: "Blueprint / C++ boundary",
        summary: "이벤트가 호출되지 않는 구간을 Blueprint 이벤트, Anim Notify, C++ 컴포넌트 초기화 순서로 좁혔습니다.",
        evidence: "호출 조건과 타이밍을 작은 체크리스트로 나누고, 실제 플레이 입력에서 재현한 뒤 누락 이벤트와 조건을 수정했습니다.",
        tags: ["Blueprint", "Anim Notify", "Call path"],
      },
      {
        number: "C",
        title: "Build / Runtime log",
        summary: "기능이 된 것처럼 보이는 상태와 빌드에서 실제로 동작하는 상태를 분리해 확인했습니다.",
        evidence: "컴파일 결과, Output Log, 실행 중 예외, 플레이 결과를 한 사이클로 묶어 수정 후 다시 빌드했습니다.",
        tags: ["Compile", "Output Log", "QA loop"],
      },
    ],
    tooling: [
      {
        number: "01",
        title: "UnityMCP",
        summary: "Unity Editor를 로컬 AI 에이전트와 연결하는 MCP 서버를 제작하고 AudioClip/AudioSource 조회와 3D 사운드·BGM 배치 도구를 포함했습니다.",
        tags: ["Unity 2022.3+", "Node.js", "C#", "AudioSource"],
        href: "https://github.com/raindrovvv/UnityMCP",
        featured: true,
        panel: ["DRY RUN", "true", "AudioSource → inspect → apply"],
      },
      {
        number: "02",
        title: "Build Monitor",
        summary: "도구가 생성한 결과를 바로 반영하지 않고 compile, run, exception, output log 순서로 확인하는 검증 루틴입니다.",
        tags: ["Compile", "Run", "Exception", "Evidence"],
        href: "#debugging",
        featured: false,
        panel: ["CHECK LOOP", "4 steps", "change → build → observe"],
      },
    ],
    activities: [
      { number: "01", period: "2025.11", type: "Public Showcase / Field QA", title: "G-STAR 2025 Guardian & Seeker", summary: "현장 플레이 관찰과 설문 피드백을 바탕으로 헤드폰 믹스, 입력 버그, 밸런스, 튜토리얼 UX를 다음 수정 과제로 정리했습니다.", proof: "BEXCO 2일 부스 운영 · 현장 플레이 관찰 · 설문 피드백 정리", image: "../assets/activity/gstar-2025.png", alt: "G-STAR 2025 Guardian & Seeker 전시 부스", href: "https://raindrovvv.tistory.com/108", tags: ["Field QA", "Player Feedback", "Audio Mix"] },
      { number: "02", period: "2025.08–09", type: "Prototype / User Test", title: "Smilegate Indie Game Prototyping Challenge", summary: "5주 프로토타이핑 과정에서 멘토링과 테스트 피드백을 받아 전투 흐름, 조작감, 사운드·UX 반응을 빠르게 검증했습니다.", proof: "주차별 멘토 피드백 · 온라인 테스트 플레이 · 개선 항목 기록", image: "../assets/activity/smilegate-prototyping-challenge.png", alt: "인디 게임 프로토타이핑 챌린지 테스트 현장", href: "https://raindrovvv.tistory.com/117", secondaryHref: "https://raindrovvv.tistory.com/118", tags: ["Prototype", "User Test", "Combat UX"] },
      { number: "03", period: "Activity record", type: "Hackathon / AI Collaboration", title: "Gemini 3 서울 해커톤", summary: "생성형 AI 도구를 활용해 아이디어를 빠르게 구체화하고 결과물을 검증한 해커톤 기록입니다.", proof: "아이디어 구체화 · 프로토타입 검증 · 결과 공유", image: "../assets/activity/gemini-3-seoul-hackathon.png", alt: "Gemini 3 서울 해커톤 활동 기록", href: "#contact", tags: ["Hackathon", "AI Collaboration", "Prototype"] },
      { number: "04", period: "Activity record", type: "Game Jam / Team Project", title: "스파르타 게임잼", summary: "짧은 제작 사이클 안에서 게임 아이디어를 구현하고 팀과 결과물을 완주한 게임잼 기록입니다.", proof: "팀 협업 · 빠른 구현 · 플레이 가능한 결과물", image: "../assets/activity/sparta-gamejam.png", alt: "스파르타 게임잼 결과물 이미지", href: "#projects", tags: ["Game Jam", "Teamwork", "Playable Build"] },
    ],
    audio: [
      { icon: "01", title: "Gameplay feedback", text: "전투 진입, 추격, UI 조작, 몬스터 경고음이 겹쳐도 먼저 읽혀야 할 신호를 우선순위로 정했습니다." },
      { icon: "02", title: "Runtime audio", text: "Event·Switch·RTPC와 C++/Blueprint 호출 경계를 나누고, 거리·재질·상태가 실제 소리에 반영되도록 연결했습니다." },
      { icon: "03", title: "Audio QA", text: "플레이테스트 피드백을 우선순위, 믹스, 시스템 조건 중 무엇을 바꿀지 판단하는 작업 단위로 번역했습니다." },
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
    heroKicker: "GAME PROGRAMMING / PORTFOLIO",
    heroDate: "2026.09 UPDATE",
    orbitRole: "C++ Gameplay",
    orbitGameplay: "Gameplay / Systems",
    orbitTooling: "Editor Tooling",
    orbitDebug: "Debug / Verify",
    navAudio: "Game Audio",
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
    heroIntro: "I build gameplay and audio systems with C++ and Blueprint in a game engine.\nI use Wwise and MCP to validate features quickly, reproduce failures, and trace engine and middleware behavior one step at a time.",
    heroPrimary: "View programming projects",
    heroSecondary: "Open GitHub",
    projectsTitle: "Projects verified at runtime",
    projectsNote: "Core game-programmer fundamentals, shown through implementation evidence.",
    guardianHeading: "UE5 C++ gameplay feedback system",
    agentHeading: "An MCP bridge between Unreal Editor and local AI",
    debuggingHeading: "Reproduce the symptom. Narrow the cause.",
    debuggingNote: "Logs, collision, and middleware values become evidence for the same incident.",
    toolingHeading: "Inspect before applying. Build again after applying.",
    activitiesEyebrow: "06 / PUBLIC ACTIVITIES",
    activitiesHeading: "Records of observing, making, and verifying in the field",
    activitiesNote: "Showcases, prototyping, hackathons, and game jams became concrete implementation tasks through player and team feedback.",
    activityOpen: "Open record",
    activityProof: "Record",
    toolingNote: "The goal of automation is a small, verifiable unit of work—not code generated without a check.",
    audioHeading: "Systems thinking built in the audio domain",
    audioNote: "Audio work taught me to judge implementation, debugging, and QA against the actual playable build.",
    discographyHeading: "A long-form practice of finishing details",
    audioPortfolioLink: "Game Sound Designer portfolio ↗",
    contactEyebrow: "09 / CONTACT",
    contactHeading: "I translate player-facing problems\ninto system language.",
    contactBody: "I can contribute where gameplay programming, editor tooling, and runtime debugging meet.\nIf you want to talk about implementation scope and how to verify it, I would be glad to connect.",
    contactEmail: "Send an email",
    contactGithub: "Open GitHub",
    footerName: "Jungmin Cha · Game Programmer",
    projectOpen: "Open case",
    projectStatus: "verified",
    caseRole: "Role",
    caseContribution: "Contribution",
    caseEvidence: "Evidence",
    caseStack: "Stack",
    panelEvidence: "IMPLEMENTATION EVIDENCE",
    panelPass: "PASS",
    agentMedia: "UNREAL EDITOR / MCP",
    agentLink: "View UnrealAgent on GitHub ↗",
    debugOpen: "Open evidence",
    toolingLink: "View repository ↗",
    audioLearn: "See original audio portfolio ↗",
  });
  en.heroTags = ["C++ Gameplay", "Gameplay / Systems", "Editor Tooling", "AI-assisted Development"];
  en.projectMap = [
    { id: "guardian", number: "01", status: "G-STAR 2025", title: "Guardian & Seeker", summary: "A playable UE5 C++/Blueprint system connecting gameplay state and audio feedback.", tags: ["UE5 C++", "Wwise", "Gameplay Feedback"] },
    { id: "unreal-agent", number: "02", status: "OPEN SOURCE", title: "UnrealAgent", summary: "An MCP bridge connecting Unreal Editor and local AI to reduce repetitive inspection.", tags: ["C++ / .NET", "MCP", "Editor Tooling"] },
    { id: "debugging", number: "03", status: "FIELD NOTES", title: "Debugging Cases", summary: "Tracing occlusion, collision, and compile logs back to one reproducible cause path.", tags: ["Runtime", "Collision", "QA"] },
    { id: "tooling", number: "04", status: "DRY RUN", title: "UnityMCP / Build Monitor", summary: "A workflow that keeps pre-apply inspection and post-apply build verification connected.", tags: ["Unity", "Node.js", "Validation"] },
  ];
  en.guardian = {
    label: "CORE PROJECT / 4v1 ASYMMETRIC PVP",
    title: "Guardian & Seeker",
    summary: "Guardian & Seeker is a 4v1 asymmetric PvP action game built with UE5 and Wwise.\n\nAs the gameplay builder and audio systems owner, I implemented role-based Audio Components, Wwise Event/Switch/RTPC integration, Physical Material footsteps, BGM state transitions, and UE Collision/Line Trace occlusion.\n\nI did not stop at asset production: I designed the runtime boundary between C++, Blueprint, and Wwise, then verified the result through playtests and debugging.",
    links: [
      { label: "View implementation ↗", href: "https://github.com/raindrovvv/GuardianAndSeeker/tree/Dev/Source/GAS/Public/Sound" },
      { label: "Watch gameplay ↗", href: "https://www.youtube.com/watch?v=d7xon5fv-kg" },
    ],
    evidence: [["Role", "Gameplay builder / Audio system"], ["Contribution", "Audio Components, runtime state, Wwise integration"], ["Evidence", "191 assets · 299 players · 4.36/5 average"], ["Stack", "UE5.6 · C++ · Blueprint · Wwise"]],
    flow: [["INPUT", "Player action"], ["STATE", "Gameplay state"], ["ROUTE", "Audio Component"], ["OUTPUT", "Wwise feedback"]],
    metrics: [["191", "audio assets"], ["299", "playtesters"], ["4.36/5", "average feedback"]],
  };
  en.unrealAgent = {
    label: "EDITOR TOOLING / LOCAL AI WORKFLOW",
    title: "UnrealAgent",
    summary: "I built an MCP bridge between Unreal Editor and a local AI agent to reduce repetitive editor checks.\n\nThe tools inspect Blueprints, Assets, Viewport, and Output Log. AI-generated results go through compile, run, and exception checks before they are applied.\n\nThe value is not that AI wrote code; it is the development loop I built around decomposing a problem, defining tool boundaries, and verifying the result.",
    image: "../assets/tooling/unreal-mcp.png",
    imageAlt: "UnrealAgent panel running inside Unreal Editor",
    tags: ["Unreal Editor", "MCP", "C++", "C#/.NET", "Python"],
    process: [["01", "Inspect", "Blueprint / Asset / Log"], ["02", "Constrain", "small, explicit tools"], ["03", "Verify", "compile / run / exception"]],
    href: "https://github.com/raindrovvv/UnrealAgent",
  };
  en.debugging = [
    { number: "A", title: "Occlusion / Collision", summary: "I separated a too-close monster sound behind a wall or door into Wwise values and UE Collision/Line Trace evidence.", evidence: "DistanceToPlayer, Occlusion RTPC, collision channel, and Line Trace results were compared at the same location before tuning filter, volume, and transmission.", tags: ["Wwise RTPC", "UE Collision", "Line Trace"] },
    { number: "B", title: "Blueprint / C++ boundary", summary: "I narrowed a missing event call through Blueprint events, Anim Notify timing, and C++ component initialization.", evidence: "I reduced conditions and timing to a small checklist, reproduced the issue from player input, and fixed missing events and conditions.", tags: ["Blueprint", "Anim Notify", "Call path"] },
    { number: "C", title: "Build / Runtime log", summary: "I separate a feature that looks correct from a feature that actually works in the build.", evidence: "Compile result, Output Log, runtime exceptions, and play result stay in one loop; after a fix, I build again.", tags: ["Compile", "Output Log", "QA loop"] },
  ];
  en.tooling = [
    { number: "01", title: "UnityMCP", summary: "An MCP server connecting Unity Editor to a local AI agent, with AudioClip/AudioSource inspection and 3D sound/BGM placement tools.", tags: ["Unity 2022.3+", "Node.js", "C#", "AudioSource"], href: "https://github.com/raindrovvv/UnityMCP", featured: true, panel: ["DRY RUN", "true", "AudioSource → inspect → apply"] },
    { number: "02", title: "Build Monitor", summary: "A verification routine that checks compile, run, exception, and output log instead of applying generated results immediately.", tags: ["Compile", "Run", "Exception", "Evidence"], href: "#debugging", featured: false, panel: ["CHECK LOOP", "4 steps", "change → build → observe"] },
  ];
  en.activities = [
    { number: "01", period: "2025.11", type: "Public Showcase / Field QA", title: "G-STAR 2025 Guardian & Seeker", summary: "I turned booth observations and survey feedback into follow-up tasks for headphone mix, input bugs, balance, and tutorial UX.", proof: "Two-day BEXCO booth · player observation · survey synthesis", image: "../assets/activity/gstar-2025.png", alt: "Guardian & Seeker booth at G-STAR 2025", href: "https://raindrovvv.tistory.com/108", tags: ["Field QA", "Player Feedback", "Audio Mix"] },
    { number: "02", period: "2025.08–09", type: "Prototype / User Test", title: "Smilegate Indie Game Prototyping Challenge", summary: "Across a five-week prototype cycle, I used mentoring and test feedback to validate combat flow, controls, and sound/UX response.", proof: "Weekly mentor feedback · online playtests · tracked improvements", image: "../assets/activity/smilegate-prototyping-challenge.png", alt: "Playtest session at the indie game prototyping challenge", href: "https://raindrovvv.tistory.com/117", secondaryHref: "https://raindrovvv.tistory.com/118", tags: ["Prototype", "User Test", "Combat UX"] },
    { number: "03", period: "Activity record", type: "Hackathon / AI Collaboration", title: "Gemini 3 Seoul Hackathon", summary: "A hackathon record of shaping an idea quickly with generative AI tools and validating the resulting prototype.", proof: "Idea shaping · prototype validation · result sharing", image: "../assets/activity/gemini-3-seoul-hackathon.png", alt: "Gemini 3 Seoul Hackathon activity record", href: "#contact", tags: ["Hackathon", "AI Collaboration", "Prototype"] },
    { number: "04", period: "Activity record", type: "Game Jam / Team Project", title: "Sparta Game Jam", summary: "A game-jam record of implementing an idea in a short production cycle and finishing a playable result with a team.", proof: "Team collaboration · rapid implementation · playable build", image: "../assets/activity/sparta-gamejam.png", alt: "Sparta Game Jam project artwork", href: "#projects", tags: ["Game Jam", "Teamwork", "Playable Build"] },
  ];
  en.audio = [
    { icon: "01", title: "Gameplay feedback", text: "I prioritized the cues that must read first when combat entry, chase pressure, UI actions, and monster warnings overlap." },
    { icon: "02", title: "Runtime audio", text: "I separated Event, Switch, RTPC, and C++/Blueprint call boundaries so distance, material, and state reach the actual sound." },
    { icon: "03", title: "Audio QA", text: "I translated playtest feedback into a decision about priority, mix, or system conditions—not a list of vague requests." },
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
let currentTheme = localStorage.getItem(THEME_KEY) || "dark";

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
      (project) => `
        <article class="project-map-card" data-reveal>
          <a class="project-map-link" href="#${escapeHtml(project.id)}" aria-label="${escapeHtml(`${project.title} ${copy.strings.projectOpen}`)}">
            <div class="map-card-top"><span class="project-number">${escapeHtml(project.number)}</span><span class="project-status">${escapeHtml(project.status)}</span></div>
            <h3>${escapeHtml(project.title)}</h3>
            <p>${escapeHtml(project.summary)}</p>
            ${tagList(project.tags)}
            <span class="map-card-cta">${escapeHtml(copy.strings.projectOpen)} <span aria-hidden="true">↘</span></span>
          </a>
        </article>`,
    )
    .join("");
};

const renderGuardian = () => {
  const node = $("#guardian-content");
  if (!node) return;
  const copy = activeCopy();
  const item = copy.guardian;
  node.innerHTML = `
    <div class="case-main" data-reveal>
      <p class="case-label">${escapeHtml(item.label)}</p>
      <h3>${escapeHtml(item.title)}</h3>
      ${paragraphs(item.summary, "case-summary")}
      <div class="case-links">${item.links
        .map((link) => `<a class="text-link" href="${escapeHtml(link.href)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`)
        .join("")}</div>
      <div class="system-flow" aria-label="구현 흐름">${item.flow
        .map(([label, value]) => `<div class="flow-node"><small>${escapeHtml(label)}</small><strong>${escapeHtml(value)}</strong></div>`)
        .join("")}</div>
    </div>
    <aside class="evidence-panel" data-reveal>
      <div class="evidence-panel-header"><span>${escapeHtml(copy.strings.panelEvidence)}</span><strong>${escapeHtml(copy.strings.panelPass)}</strong></div>
      <ul class="evidence-list">${item.evidence
        .map(([label, value]) => `<li><strong>${escapeHtml(label)}</strong><span>${escapeHtml(value)}</span></li>`)
        .join("")}</ul>
      <div class="metric-row">${item.metrics
        .map(([value, label]) => `<div class="metric-box"><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span></div>`)
        .join("")}</div>
    </aside>`;
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

const renderDebugging = () => {
  const node = $("#debugging-content");
  if (!node) return;
  const copy = activeCopy();
  node.innerHTML = copy.debugging
    .map(
      (item) => `
        <article class="debug-card" data-reveal>
          <div class="debug-card-header"><span>CASE ${escapeHtml(item.number)}</span>${tagList(item.tags, "compact-tags")}</div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.summary)}</p>
          <details><summary>${escapeHtml(copy.strings.debugOpen)}</summary><p>${escapeHtml(item.evidence)}</p></details>
        </article>`,
    )
    .join("");
};

const renderTooling = () => {
  const node = $("#tooling-content");
  if (!node) return;
  const copy = activeCopy();
  node.innerHTML = copy.tooling
    .map(
      (item) => `
        <article class="tool-card ${item.featured ? "featured" : ""}" data-reveal>
          <div>
            <span class="tooling-number">${escapeHtml(item.number)} / ${escapeHtml(item.panel[0])}</span>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.summary)}</p>
            ${tagList(item.tags)}
            <div class="case-links"><a class="text-link" href="${escapeHtml(item.href)}" ${item.href.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""}>${escapeHtml(copy.strings.toolingLink)}</a></div>
          </div>
          <div class="dry-run-panel"><span>${escapeHtml(item.panel[0])}</span><strong>${escapeHtml(item.panel[1])}</strong><code>${escapeHtml(item.panel[2])}</code></div>
        </article>`,
    )
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
        <div class="activity-proof"><strong>${escapeHtml(copy.strings.activityProof)}</strong><span>${escapeHtml(item.proof)}</span></div>
        ${tagList(item.tags, "compact-tags")}
        ${item.secondaryHref ? `<a class="text-link activity-secondary" href="${escapeHtml(item.secondaryHref)}" target="_blank" rel="noreferrer">${escapeHtml(copy.strings.activityOpen)} 02 ↗</a>` : ""}
      </div>
    </article>`).join("");
};

const renderAudio = () => {
  const node = $("#audio-content");
  if (!node) return;
  node.innerHTML = activeCopy().audio
    .map(
      (item) => `
        <article class="audio-card" data-reveal>
          <div class="audio-card-header"><span class="audio-icon" aria-hidden="true">${escapeHtml(item.icon)}</span><span class="section-index">DOMAIN</span></div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </article>`,
    )
    .join("");
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
      <p class="eyebrow">${escapeHtml(copy.strings.contactEyebrow)}</p>
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
  renderGuardian();
  renderUnrealAgent();
  renderDebugging();
  renderTooling();
  renderActivities();
  renderAudio();
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
};

applyTheme();
renderCopy();
setupInteractions();
