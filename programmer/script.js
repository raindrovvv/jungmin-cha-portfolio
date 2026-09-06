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
      heroDate: "2026.09 UPDATE",
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
      contributionStrength: "기획 요구사항을 기능 단위로 체계화하고, AI 툴을 활용할 부분, 직접 검증할 부분을 명확히 구분하여 개발 밀도와 완성도를 높였습니다.",
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
      guardianMediaDisclaimer: "※ 프로젝트 당시 비주얼·사운드 아트 관련 시스템까지 직접 구현한 범위를 설명하기 위해 ‘테크니컬 아트’라고 표현했습니다.",
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
        summary: "한국적 세계관의 2D 액션 플랫폼 파이터입니다. 팀 리드/PM으로서 프로젝트 진행을 총괄하고, 전투 타격감과 UI 피드백을 위한 사운드 디자인 및 C++/Blueprint 연동 구조를 설계·구현했습니다.",
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
        summary: "폐쇄된 연구소 배경의 TPS 액션 서바이벌 프로젝트입니다. UI/UX 및 레벨 디자인, 시네마틱 컷씬 연출과 함께 실내 공간감·총기 격발·괴물 보이스 등 오디오 시스템 전반을 구현했습니다.",
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
        summary: "층마다 분위기가 변화하는 로그라이트형 테마 타워 RPG입니다. 게임 콘셉트 및 스토리 기획을 주도하고, 8개 테마 타워의 탐험·전투·상점·제단 분위기를 차별화하는 BGM 편곡 및 SFX를 제작했습니다.",
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
        summary: "앨범 음악과 공간 이동을 인터랙티브하게 연결한 Unity 프로젝트입니다. 프로젝트 리더/PM 및 사운드 디자이너/개발자로 참여하여 Unity C# 음악 트리거, 오디오 리액티브 시스템, Jira/GitLab 협업 프로세스를 총괄했습니다.",
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
        summary: "AI API를 게임 루프에 연결해 플레이어의 선택과 시스템 반응을 빠르게 검증한 프로토타입 프로젝트입니다. 웹 기반 실시간 상호작용 및 턴제 결투 흐름을 설계했습니다.",
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
      image: "../assets/game/guardian-seeker.gif",
      imageAlt: "Guardian & Seeker gameplay and Wwise implementation capture",
      summary:
        "Guardian & Seeker는 UE5와 Wwise로 제작한 4v1 비대칭 PvP 액션 게임입니다.\n\n게임플레이 및 오디오 시스템 구현 담당으로 참여하여 역할별 Audio Component 구조, Wwise Event·Switch·RTPC 연동, Physical Material 기반 발소리, BGM State 전환, UE Collision·Line Trace 기반 오클루전 시스템을 구현했습니다.\n\n단순한 사운드 에셋 제작에 그치지 않고 C++·Blueprint·Wwise가 유기적으로 연결되는 런타임 구조를 설계했으며, 지속적인 플레이테스트와 디버깅을 통해 검증했습니다.",
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
        "반복적인 에디터 확인 작업을 줄이기 위해 Unreal Editor와 로컬 AI 에이전트를 연결하는 MCP 브리지를 제작했습니다.\n\nBlueprint, Asset, Viewport, Output Log를 조회·조작할 수 있도록 도구를 구성하고, AI가 제안한 변경 사항은 컴파일·실행·예외 처리 검증을 거친 뒤 안전하게 적용되도록 설계했습니다.\n\nAI의 단순 코드 작성을 넘어, 문제를 분해하고 도구의 역할을 명확히 한 뒤 결과를 철저히 검증하는 개발 프로세스를 구축하는 데 집중했습니다.",
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
          "벽과 문 너머 몬스터·함정 소리가 장애물을 무시하고 바로 옆처럼 들려 공간감이 붕괴되던 문제를 해결했습니다. 청각적 몰입감과 런타임 성능을 동시에 만족시키기 위해 Wwise 미들웨어와 UE Line Trace 간의 경계를 설계했습니다.",
        evidence:
          "[문제 배경] 성능 이슈로 오클루전이 꺼져 있어 벽 너머 몬스터 소리가 여과 없이 전달되었고, 단순 활성화 시 카메라 앵글에 따른 로컬 플레이어 자기 차폐(Self-Occlusion) 및 다중 리스너 충돌이 발생했습니다.\n[해결 및 구현 의도]\n- 연산 비용 통제: 매 프레임 Trace를 피하고 OcclusionRefreshInterval = 0.2f 주기를 설정해 성능 부하를 차단.\n- 자기 차폐 및 리스너 분리: 로컬 캐릭터는 주기를 0으로 두어 자기 소리가 씹히지 않게 보호하고, 리모트 플레이어의 CameraAudioListener는 강제 Unregister/비활성화 처리.\n- 현실적인 공간감(Wwise 커브): 벽 뒤 소리가 아예 끊기는 극단값(-200dB) 대신 -15~-20dB 볼륨 감쇠 + LPF(30~50) 곡선을 적용해 '벽 너머에서 먹먹하게 들리는' 자연스러운 공간감 연출.\n- 실시간 검증: 귀로만 판단하기 어려운 오클루전 상태를 즉시 확인할 수 있도록 콘솔 디버그 레이(GS.Audio.ShowOcclusionRay, 녹색: 정상 / 적색: 차폐) 시스템을 구축해 팀원들과 함께 시각적으로 검증.",
        tags: ["Wwise Occlusion", "Line Trace", "C++"],
        href: "https://raindrovvv.tistory.com/121",
      },
      {
        number: "B",
        title: "라이트 채널 분리를 통한 캐릭터 시인성 확보",
        image: "../assets/game/dungeon-lighting.png",
        imageAlt: "던전 조명 및 캐릭터 필라이트 전후 비교 장면",
        summary:
          "어두운 던전 맵의 음산한 배경 분위기는 유지하면서, 그 안에서 캐릭터 실루엣과 전면이 완전히 묻혀 조작성이 저하되던 가독성 충돌 문제를 라이트 채널 분리로 해결했습니다.",
        evidence:
          "[문제 배경] 던전 특유의 어두운 분위기를 살리기 위해 전체 환경광을 낮추면 캐릭터가 전혀 보이지 않고, 캐릭터를 밝히려고 조명을 올리면 배경 전체가 밝아져 공포스러운 분위기가 깨지는 딜레마가 있었습니다.\n[해결 및 구현 의도]\n- 물리적 조명 분리(Light Channel): 배경 환경 라이트는 Channel 0, 캐릭터 전용 라이트는 Channel 1로 지정하여 캐릭터 조명이 던전 벽이나 바닥에 번지지 않도록 물리적 간섭을 차단.\n- 전용 컴포넌트화: C++ UGS_CharacterFillLightComponent를 설계하여 정면 디테일을 살리는 Point Fill Light와 외곽 실루엣을 배경에서 떼어내는 Spot Rim Light를 하나의 컴포넌트에서 체계적으로 제어.\n- 파이프라인 편의성: 캐릭터 부위별 파츠가 많은 구조를 고려해 bAutoApplyMeshChannels로 Owner의 모든 SkeletalMeshComponent에 채널을 자동 전파하여 아티스트/기획자가 일일이 수동 세팅하는 실수를 원천 방지.\n- 빠른 튜닝 환경: 직관적인 밝기 조절을 위해 ELightUnits::Unitless 단위를 채택하고, 에디터 뷰포트에서 조명 범위와 방향을 바로 확인할 수 있는 디버그 시각화 기즈모(DrawDebugVisualization)를 탑재.",
        tags: ["Light Channel", "Fill/Rim Light", "C++"],
        href: "https://raindrovvv.tistory.com/186",
      },
      {
        number: "C",
        title: "포탈 VFX 최적화와 블루프린트 계층 구조 개선",
        image: "../assets/game/vfx-optimization.gif",
        imageAlt: "포탈 VFX 거리 컬링 및 블루프린트 계층 구조 최적화 동작 장면",
        summary:
          "원거리 포탈 파티클을 최적화하기 위해 공용 최적화 컴포넌트를 붙였다가 에디터 프리뷰 원점이 틀어지고 부모 컴포넌트 상속으로 인해 필수 돌 문(StoneDoor) 에셋까지 컬링되어 소실되던 문제를 구조적으로 해결했습니다.",
        evidence:
          "[문제 배경] 최적화 컴포넌트가 동적으로 서브컴포넌트를 붙이는 과정에서 에디터 상의 Root/Preview 트랜스폼 기준이 흔들렸고, 부모 PrimitiveComponent의 거리 컬링이 자식 메시 전체에 강제 전파되어 문과 장식까지 사라졌습니다.\n[해결 및 구현 의도]\n- 프리뷰 안정성: 동적 서브컴포넌트 부착 방식을 제거하고 로컬 플레이어와의 실거리 연산 및 DrawDebugSphere 검증 방식으로 전환해 에디터 뷰포트 원점 안정성을 확보.\n- 블루프린트 계층 분리: 돌 문과 포탈 이펙트 간의 종속(Parent-Child) 관계를 끊고 형제(Sibling) 계층으로 재배치한 뒤, 라이트맵 및 씬 그래프 안정성을 위해 Static Mobility 정합성을 일치시킴.\n- 방어적 태그 및 컬링 보호 체계: 컬링 제외 대상을 정밀하게 제어할 수 있도록 단일 컴포넌트 제외(GS_VFXOptIgnore)와 하위 전체 제외(GS_VFXOptIgnoreSubtree) 태그 체계를 분리 구축하고, SetCullDistance(0) 및 bNeverDistanceCull 오버라이드를 적용해 다른 복합 액터에서도 안전하게 재사용 가능하도록 완성.",
        tags: ["VFX Opt", "BP Hierarchy", "Cull Distance"],
        href: "https://raindrovvv.tistory.com/178",
      },
    ],
    tooling: [
      {
        number: "03",
        title: "UnityMCP",
        summary: "Unity Editor를 로컬 AI 에이전트와 연결하는 MCP 서버를 제작하고 AudioClip/AudioSource 조회와 3D 사운드·BGM 배치 도구를 포함했습니다.",
        image: "../assets/tooling/unity-mcp.png",
        imageAlt: "Unity Editor에서 실행 중인 UnityMCP 오디오 배치 도구",
        tags: ["Unity 2022.3+", "Node.js", "C#", "AudioSource"],
        href: "https://github.com/raindrovvv/UnityMCP",
        featured: false,
        panel: ["DRY RUN", "true", "AudioSource → inspect → apply"],
      },
      {
        number: "02",
        title: "Build Monitor",
        summary: "빌드 과정을 스피너와 상태 단계로 보여주고, 완료·실패 결과를 Discord·Slack 웹훅으로 알려 모니터링 흐름을 끊지 않습니다.",
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
        summary: "Unreal Editor와 로컬 AI 에이전트를 연결하는 MCP 브리지입니다. Blueprint, Asset, Viewport, Output Log를 확인하고 컴파일·실행·예외 검증을 거쳐 적용합니다.",
        image: "../assets/tooling/unreal-mcp.png",
        imageAlt: "Unreal Editor에서 실행 중인 UnrealAgent MCP 브리지",
        tags: ["Unreal Editor", "MCP", "C++", "C#/.NET", "Python"],
        href: "https://github.com/raindrovvv/UnrealAgent",
        featured: true,
        panel: ["INSPECT / VERIFY", "READY", "editor → agent → verify"],
      },
    ],
    activities: [
      { number: "01", period: "2025.11", type: "Public Showcase / Field QA", title: "G-STAR 2025 Guardian & Seeker", summary: "현장 플레이 관찰과 설문 피드백을 바탕으로 헤드폰 믹스, 입력 버그, 밸런스, 튜토리얼 UX를 다음 수정 과제로 정리했습니다.", proof: "BEXCO 2일 부스 운영 · 현장 플레이 관찰 · 설문 피드백 정리", image: "../assets/activity/gstar-2025.png", alt: "G-STAR 2025 Guardian & Seeker 전시 부스", href: "https://raindrovvv.tistory.com/108", tags: ["Field QA", "Player Feedback", "Audio Mix"] },
      { number: "02", period: "2025.08–09", type: "Prototype / User Test", title: "Smilegate Indie Game Prototyping Challenge", summary: "5주 프로토타이핑 과정에서 멘토링과 테스트 피드백을 받아 전투 흐름, 조작감, 사운드·UX 반응을 빠르게 검증했습니다.", proof: "주차별 멘토 피드백 · 온라인 테스트 플레이 · 개선 항목 기록", image: "../assets/activity/smilegate-prototyping-challenge.png", alt: "인디 게임 프로토타이핑 챌린지 테스트 현장", href: "https://raindrovvv.tistory.com/117", secondaryHref: "https://raindrovvv.tistory.com/118", tags: ["Prototype", "User Test", "Combat UX"] },
      { number: "03", period: "Activity record", type: "Hackathon / AI Collaboration", title: "Gemini 3 서울 해커톤", summary: "생성형 AI 도구를 활용해 아이디어를 빠르게 구체화하고 결과물을 검증한 해커톤 기록입니다.", proof: "아이디어 구체화 · 프로토타입 검증 · 결과 공유", image: "../assets/activity/gemini-3-seoul-hackathon.png", alt: "Gemini 3 서울 해커톤 활동 기록", href: "#contact", tags: ["Hackathon", "AI Collaboration", "Prototype"] },
      { number: "04", period: "Activity record", type: "Game Jam / Team Project", title: "스파르타 게임잼", summary: "짧은 제작 사이클 안에서 게임 아이디어를 구현하고 팀과 결과물을 완주한 게임잼 기록입니다.", proof: "팀 협업 · 빠른 구현 · 플레이 가능한 결과물", image: "../assets/activity/sparta-gamejam.png", alt: "스파르타 게임잼 결과물 이미지", href: "#projects", tags: ["Game Jam", "Teamwork", "Playable Build"] },
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
    heroDate: "2026.09 UPDATE",
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
    contributionStrength: "I structured design requirements into modular functional units, clearly separating tasks for AI tooling from areas requiring direct validation to maximize development density and polish.",
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
      summary: "A 2D action platform fighter with Korean-inspired worldbuilding. As team lead/PM, I directed project milestones and implemented combat impact sound design and C++/Blueprint integration.",
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
      summary: "A third-person action survival game set in a sealed lab. I designed UI/UX and levels, staged cinematic cutscenes, and built the audio system including interior acoustics, weapon firing, and monster vocal synthesis.",
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
      summary: "A roguelite themed tower RPG. I drove the game concept and story, and produced distinctive BGM arrangements and SFX across 8 themed towers for exploration, combat, shops, and altars.",
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
      summary: "An interactive Unity media project connecting album music with spatial movement. As project leader/PM and sound designer/dev, I built Unity C# music triggers, audio-reactive systems, and led Jira/GitLab agile processes.",
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
      summary: "A prototype connecting an AI API into a real-time game loop to rapidly validate player decisions and system reactions in turn-based duels.",
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
    image: "../assets/game/guardian-seeker.gif",
    imageAlt: "Guardian & Seeker gameplay and Wwise implementation capture",
    summary: "Guardian & Seeker is a 4v1 asymmetric PvP action game built with UE5 and Wwise.\n\nAs the gameplay builder and audio systems owner, I implemented role-based Audio Components, Wwise Event/Switch/RTPC integration, Physical Material footsteps, BGM state transitions, and UE Collision/Line Trace occlusion.\n\nI did not stop at asset production: I designed the runtime boundary between C++, Blueprint, and Wwise, then verified the result through playtests and debugging.",
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
    summary: "I built an MCP bridge between Unreal Editor and a local AI agent to reduce repetitive editor checks.\n\nThe tools inspect Blueprints, Assets, Viewport, and Output Log. AI-generated results go through compile, run, and exception checks before they are applied.\n\nThe value is not that AI wrote code; it is the development loop I built around decomposing a problem, defining tool boundaries, and verifying the result.",
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
      summary: "I resolved monster/trap sounds playing unfiltered through walls and doors using Wwise Occlusion, UE Visibility Line Traces, and local self-occlusion prevention.",
      evidence:
        "[Problem Background] Occlusion was disabled due to legacy performance concerns, causing monster sounds behind walls to play at full clarity. Simply reenabling it caused self-occlusion against the local player mesh and listener conflicts from camera angles.\n[Solution & Implementation Intent]\n- Performance Control: Replaced tick-based traces with an OcclusionRefreshInterval = 0.2f interval to throttle runtime cost.\n- Self-Occlusion & Listener Decoupling: Set interval to 0 on the local player to eliminate self-culling, while remote listeners are explicitly unregistered.\n- Spatial Realism (Wwise Curves): Replaced total cutoff (-200dB) with a gradual -15~-20dB attenuation + LPF (30~50) curve to create natural muffled sound behind obstacles.\n- Runtime Validation: Built a console CVar debug ray system (GS.Audio.ShowOcclusionRay, green: clear / red: occluded) for immediate multi-listener visual verification.",
      tags: ["Wwise Occlusion", "Line Trace", "C++"],
      href: "https://raindrovvv.tistory.com/121",
    },
    {
      number: "B",
      title: "Dungeon Lighting & Character Visibility",
      image: "../assets/game/dungeon-lighting.png",
      imageAlt: "Dungeon lighting and character fill light comparison preview",
      summary: "I solved character silhouette and frontal readability collapse in dark dungeon environments while preserving ambient tension.",
      evidence:
        "[Problem Background] Lowering ambient light to sustain dungeon horror caused character models to blend completely into darkness, while raising global lighting broke the eerie atmospheric aesthetic.\n[Solution & Implementation Intent]\n- Physical Decoupling (Light Channels): Isolated background environment lighting to Channel 0 and dedicated character fill light to Channel 1, preventing spillover onto walls and floors.\n- Dedicated Component Architecture: Built C++ UGS_CharacterFillLightComponent to manage Point Fill (frontal readability) and Spot Rim (silhouette detachment) in a unified system.\n- Pipeline Ergonomics: Configured bAutoApplyMeshChannels to automatically propagate channels across all owner SkeletalMeshComponents, preventing manual setup errors by artists or level designers.\n- Rapid Tuning Workflow: Adopted ELightUnits::Unitless for direct brightness tuning, and provided viewport debug visualization gizmos (DrawDebugVisualization) for immediate visual feedback.",
      tags: ["Light Channel", "Fill/Rim Light", "C++"],
      href: "https://raindrovvv.tistory.com/186",
    },
    {
      number: "C",
      title: "Portal VFX Optimization & BP Hierarchy",
      image: "../assets/game/vfx-optimization.gif",
      imageAlt: "Portal VFX distance culling and blueprint hierarchy optimization in action",
      summary: "I resolved editor preview origin collapse and unwanted child asset culling caused by parent PrimitiveComponent inheritance during portal VFX optimization.",
      evidence:
        "[Problem Background] Dynamic subcomponent attachment destabilized Root/Preview transforms in the editor viewport, while parent PrimitiveComponent distance culling propagated forcefully to child meshes, disappearing stone door assets.\n[Solution & Implementation Intent]\n- Preview Stability: Replaced dynamic attachment with player distance math and DrawDebugSphere verification to preserve editor viewport transform stability.\n- BP Hierarchy Decoupling: Severed parent-child dependencies between the StoneDoor and portal FX into sibling hierarchies and aligned Static Mobility for transform and lighting consistency.\n- Defensive Tagging & Cull Overrides: Designed single-component (GS_VFXOptIgnore) and subtree-wide (GS_VFXOptIgnoreSubtree) ignore tags, enforcing SetCullDistance(0) and bNeverDistanceCull overrides for safe reuse across composite actors.",
      tags: ["VFX Opt", "BP Hierarchy", "Cull Distance"],
      href: "https://raindrovvv.tistory.com/178",
    },
  ];
  en.tooling = [
    { number: "03", title: "UnityMCP", summary: "An MCP server connecting Unity Editor to a local AI agent, with AudioClip/AudioSource inspection and 3D sound/BGM placement tools.", image: "../assets/tooling/unity-mcp.png", imageAlt: "UnityMCP audio placement tools running in Unity Editor", tags: ["Unity 2022.3+", "Node.js", "C#", "AudioSource"], href: "https://github.com/raindrovvv/UnityMCP", featured: false, panel: ["DRY RUN", "true", "AudioSource → inspect → apply"] },
    { number: "02", title: "Build Monitor", summary: "A build monitor that visualizes each step with a spinner and sends completion or failure alerts through Discord and Slack webhooks.", image: "../assets/tooling/build-monitor.svg", imageAlt: "GAS Build Monitor dashboard showing build progress and Discord Slack webhook status", tags: ["Compile", "Webhook", "Discord", "Slack"], href: "#debugging", featured: false, panel: ["BUILD MONITOR", "LIVE", "compile → webhook → notify"] },
    { number: "01", title: "UnrealAgent", summary: "An MCP bridge connecting Unreal Editor and a local AI agent. It inspects Blueprints, Assets, Viewport, and Output Log before compile, run, and exception checks.", image: "../assets/tooling/unreal-mcp.png", imageAlt: "UnrealAgent MCP bridge running in Unreal Editor", tags: ["Unreal Editor", "MCP", "C++", "C#/.NET", "Python"], href: "https://github.com/raindrovvv/UnrealAgent", featured: true, panel: ["INSPECT / VERIFY", "READY", "editor → agent → verify"] },
  ];
  en.activities = [
    { number: "01", period: "2025.11", type: "Public Showcase / Field QA", title: "G-STAR 2025 Guardian & Seeker", summary: "I turned booth observations and survey feedback into follow-up tasks for headphone mix, input bugs, balance, and tutorial UX.", proof: "Two-day BEXCO booth · player observation · survey synthesis", image: "../assets/activity/gstar-2025.png", alt: "Guardian & Seeker booth at G-STAR 2025", href: "https://raindrovvv.tistory.com/108", tags: ["Field QA", "Player Feedback", "Audio Mix"] },
    { number: "02", period: "2025.08–09", type: "Prototype / User Test", title: "Smilegate Indie Game Prototyping Challenge", summary: "Across a five-week prototype cycle, I used mentoring and test feedback to validate combat flow, controls, and sound/UX response.", proof: "Weekly mentor feedback · online playtests · tracked improvements", image: "../assets/activity/smilegate-prototyping-challenge.png", alt: "Playtest session at the indie game prototyping challenge", href: "https://raindrovvv.tistory.com/117", secondaryHref: "https://raindrovvv.tistory.com/118", tags: ["Prototype", "User Test", "Combat UX"] },
    { number: "03", period: "Activity record", type: "Hackathon / AI Collaboration", title: "Gemini 3 Seoul Hackathon", summary: "A hackathon record of shaping an idea quickly with generative AI tools and validating the resulting prototype.", proof: "Idea shaping · prototype validation · result sharing", image: "../assets/activity/gemini-3-seoul-hackathon.png", alt: "Gemini 3 Seoul Hackathon activity record", href: "#contact", tags: ["Hackathon", "AI Collaboration", "Prototype"] },
    { number: "04", period: "Activity record", type: "Game Jam / Team Project", title: "Sparta Game Jam", summary: "A game-jam record of implementing an idea in a short production cycle and finishing a playable result with a team.", proof: "Team collaboration · rapid implementation · playable build", image: "../assets/activity/sparta-gamejam.png", alt: "Sparta Game Jam project artwork", href: "#projects", tags: ["Game Jam", "Teamwork", "Playable Build"] },
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
      <div class="contribution-metrics">${item.metrics
        .map(([value, key], index) => `<div class="contribution-metric ${index === 0 ? "is-primary" : ""}"><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label(key))}</span></div>`)
        .join("")}</div>
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
      <div class="contribution-story">
        <p>${escapeHtml(label(item.strength))}</p>
        <small>${escapeHtml(label(item.evidence))}</small>
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
      ${paragraphs(item.summary, "case-summary")}
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
        <div class="activity-proof"><strong>${escapeHtml(copy.strings.activityProof)}</strong><span>${escapeHtml(item.proof)}</span></div>
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
