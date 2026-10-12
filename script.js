const locales = {
  ko: {
    pageTitle: "Jungmin Cha | AI Native Builder · Agentic Product Developer",
    pageDesc: "Jungmin Cha의 포트폴리오. 문제를 정하고 AI가 쓸 도구와 검증 방식을 설계해 제품을 만듭니다.",
    navBuilds: "작업", navWorkflow: "만드는 방식", navAbout: "소개", navBlog: "블로그 ↗", navGithub: "GitHub ↗",
    heroEyebrow: "AI-NATIVE BUILDER",
    heroTitleOne: "AI로 만들고,", heroTitleTwo: "직접 검증합니다.",
    heroDesc: "해결할 문제를 정하고, AI 에이전트가 일할 도구와 규칙을 설계합니다.\n결과는 직접 실행해 확인한 뒤, 실제로 쓰이는 제품으로 배포합니다.",
    heroCta: "대표 작업 보기 ↓", heroContact: "이메일로 문의하기 ↗",
    copyEmail: "주소 복사", copiedEmail: "복사됨 ✓", contactSend: "이메일 보내기", lightboxKicker: "프로젝트 화면",
    statement: "AI 에이전트에게는 <em>구조</em>가 필요합니다.",
    statementNote: "AI는 맡을 문제, 쓸 도구, 결과를 확인할 기준이 정해져 있을 때 제대로 일합니다. 저는 그 틀을 먼저 설계한 뒤 AI와 함께 제품을 만듭니다.",
    buildsTitle: "대표 작업", buildsSubtitle: "‘만든 과정 보기’를 누르면 처음 던진 질문부터 검증까지의 과정을 볼 수 있습니다.",
    filterAll: "전체", filterProduct: "제품", filterTool: "AI 도구", filterGame: "게임",
    lawgateDesc: "법률 문서에서 쟁점을 나누고, 여러 AI 에이전트가 검토한 내용을 공식 근거로 다시 확인하는 법률 검토 도구.",
    cerebrasDesc: "길고 복잡한 PDF를 여러 AI 에이전트가 나눠 읽고, 핵심·위험·비용·일정을 한눈에 정리해 주는 문서 분석 서비스.",
    lawgateQuestion: "더 좋은 답보다, 근거가 부족한 답을 어떻게 막을까?",
    viewHistory: "만드는 과정 보기 ↓", projectQuestionLabel: "처음 던진 질문",
    collaborationLabel: "함께 만든 사람",
    caseStudyHistory: "Agentic history 보기 ↘", caseDetailLabel: "AGENTIC CODING HISTORY", closeHistory: "닫기",
    lawgateCaseTitle: "Agentic Coding history\nLawGate", lawgateCaseIntro: "Codex와 함께 법률 문서 검토 워크벤치를 처음부터 제품으로 만들며, 질문·제약·검증 루프를 쌓았습니다.", lawgateCaseQuestionLabel: "첫 질문", lawgateCaseQuestion: "“더 좋은 답을 만드는 것보다, 근거 없는 답변을 어떻게 차단할까?”", lawgateCaseWhy: "법률 제품에서는 출처와 검증 경계가 먼저라고 판단했습니다. 근거를 확인하고 다음 행동으로 연결하는 워크벤치를 목표로 잡았습니다.", lawgateProblemLabel: "Problem", lawgateProblem: "PDF·HWP 문서에서 쟁점을 찾고, 근거 없는 주장과 과장된 법률 조언을 막으면서도 일반 사용자가 결과를 이해할 수 있어야 했습니다.", lawgateStartLabel: "Start small", lawgateStart: "처음에는 정적 HTML·CSS·JS와 Node 서버로 핵심 검증 흐름을 빠르게 확인했습니다. 이후 필요성이 확인된 기능만 Codex CLI, RAG, Neo4j, 법령 API, PDF 처리로 확장했습니다.", lawgateFailureLabel: "Failure → Question", lawgateFailure: "PDF 33개·약 921MB 처리 지연, Windows spawn EPERM, Codex rate limit, 캐시 부재, 느린 판사 worker, 어려운 문장, 내부 경로 노출을 각각 원인을 묻는 질문으로 바꿨습니다.", lawgatePlanLabel: "Agent Plan", lawgatePlan: "질문 분해 → PDF·HWP intake → 로컬 TF-IDF RAG → 공식 법령 검색 → 원고·피고·판사 worker → 인용 검증과 증거 매트릭스로 이어지는 흐름을 설계했습니다.", lawgateContractLabel: "Agent contract", lawgateContract: "역할별 프롬프트, 한국 민사소송 실무 기준, JSON Schema, 증거 원장과 입증 공백을 분리해 Agent가 일할 업무 환경과 출력 계약을 만들었습니다.", lawgateProductLabel: "Product loop", lawgateProduct: "PDF hash 캐시, 배치 분할, 중간 digest, incremental review, 빠른 모드·정밀 모드, 4단계 litigation worker, 세션 저장, 일반인용·변호사용 PDF export로 실제 업무 흐름을 닫았습니다. 개발 기록에는 prompt 7개와 schema 4개가 남아 있습니다.", lawgateResultLabel: "Result", lawgateResult: "문제를 정의하고 질문·제약·출력 계약을 설계한 뒤 실행 결과를 보고 다음 질문을 던지며 법률 문서 검토 제품을 완성했습니다.",
    rufDesc: "댄스 학원의 수업·강사·상담·위치 정보를 운영자가 코드 없이 직접 고칠 수 있는 웹사이트.",
    rufCaseTitle: "Agentic Coding history\nRUF Web", rufCaseQuestionLabel: "핵심 질문", rufCaseQuestion: "“운영자가 개발자에게 매번 요청하지 않아도, 실제로 계속 쓰이는 웹 제품을 어떻게 만들까?”", rufCaseWhy: "RUF는 홍보 페이지가 아니라 시간표·강사·주간 수업·상담·위치 정보를 계속 바꿔야 하는 운영형 제품이었습니다. 그래서 운영자가 직접 수정하고 사용자가 바로 다음 행동을 할 수 있는 구조를 먼저 질문했습니다.", rufProblemLabel: "Problem", rufProblem: "댄스 아카데미의 브랜드 소개, 수업 탐색, 위치 확인, 상담 전환을 하나의 웹 경험으로 묶어야 했습니다.", rufBuildLabel: "Product build", rufBuild: "Next.js 15·React 19·TypeScript를 바탕으로 브랜드 UI, 다국어, 일정, 강사, 상담, 위치, FAQ, SEO, 개인정보 페이지 구조를 처음부터 구성했습니다.", rufCmsLabel: "Question → CMS", rufCms: "“관리자 페이지를 새로 만들 것인가, Google Sheets를 CMS처럼 사용할 것인가?”를 질문했습니다. 운영자가 코드 수정 없이 시간표·주간 수업·영상·강사 정보를 바꿀 수 있어야 했고, 현재 규모에서는 별도 DB·로그인·관리자 화면 없이 Sheets가 작은 운영 시스템에 맞았습니다.", rufUxLabel: "Question → UX", rufUx: "브라우저에서 핵심 메시지가 밀리거나 문장이 어색하게 줄바꿈되고, 모바일 가로 스크롤과 탐색을 방해하는 캐러셀이 생기는 문제를 화면으로 확인했습니다. 그래서 실제 사용성을 기준으로 레이아웃과 인터랙션을 단순화했습니다.", rufReliabilityLabel: "Question → Reliability", rufReliability: "“외부 데이터가 비거나 네트워크가 실패하면 어떻게 할까?”를 먼저 물었습니다. Google Sheets 장애 시 정적 fallback을 보여주고, 주소는 지오코딩 실패 시 저장된 좌표를 사용해 서비스가 멈추지 않도록 했습니다.", rufOperationsLabel: "Question → Operations", rufOperations: "실제 일정이 바뀌면 만료된 CTA와 이벤트 전용 문구를 남겨두지 않았습니다. PRE-OPEN을 Open Event로 바꾸고, 시설 사진·이미지 로딩·모바일 CTA까지 운영 상황에 맞춰 다시 검증했습니다.", rufResultLabel: "Result", rufResult: "기획·UI 설계부터 다국어·SEO·지도·상담 전환·운영 데이터 연동·반응형 QA·배포까지 연결했습니다. 5월 초기 구축 후 7월 말까지 78개 커밋으로 실제 운영 가능한 웹 Product를 완성했습니다.",
    loreDesc: "흩어진 설정과 세계관 메모를 모아, 대사와 AI 음성을 갖춘 게임 캐릭터로 만드는 제작 도구.", loreCaseTitle: "Agentic Coding history\nOh My Cosmos", loreCaseQuestionLabel: "핵심 질문", loreCaseQuestion: "“AI가 코드를 많이 작성했다는 점이 아니라, 제품 안에서 어떤 가치를 만들어야 하는가?”", loreCaseWhy: "AI 활용 자체는 흔한 차별점이라고 판단했습니다. 그래서 캐릭터·세계관·대사·음성을 실제 제작 흐름으로 연결하고, Guardian & Seeker를 첫 실증 제품으로 삼았습니다.", loreProblemLabel: "Product value", loreProblem: "Oh My Cosmos를 AI-native 캐릭터·세계관 제작 파이프라인으로 정의했습니다. Persona, Dialogue, Chat, TTS, Visual Prompt를 하나의 흐름으로 묶었습니다.", loreEvidenceLabel: "Evidence surface", loreEvidence: "Guardian & Seeker Production Kit API를 만들어 캐릭터, 대사, TTS 방향, 비주얼 프롬프트, Export Manifest를 외부에서 확인할 수 있게 했습니다.", loreImportLabel: "Document import", loreImport: "PDF·DOCX·이미지를 올려 OCR과 AI 분석을 거치고, 원문 source evidence를 보존한 채 캐릭터·관계·아이템·퀘스트를 추출하고 검토 후 적용하도록 설계했습니다.", loreGeneralizeLabel: "Avoid overfitting", loreGeneralize: "새 Workflow DB는 바로 만들지 않았습니다. 기존 World → Character → Dialogue → TTS → Export 엔티티를 조합하는 Studio부터 검증했습니다.", loreCollabLabel: "Collaboration", loreCollab: "WebSocket보다 먼저 owner/editor/viewer 권한, D1 기준 데이터, version·expectedVersion, stale write 409 Conflict, board event log를 정의한 뒤 polling과 Durable Object realtime을 단계적으로 붙였습니다.", loreStackLabel: "Product stack", loreStack: "Cloudflare Pages·Workers·D1·R2·Durable Objects, Drizzle ORM, 세션 인증, API 권한, 캐릭터 ZIP과 엔진별 Export까지 실제 배포 가능한 제품 표면으로 확장했습니다.", loreResultLabel: "Result", loreResult: "2026년 2월 초기 커밋부터 317개 커밋의 개선 기록과 23개 테스트 파일·128개 테스트를 남겼습니다. 질문·제약·검증을 반복해 AI 캐릭터 제작 제품을 처음부터 끝까지 완성했습니다.",
    unrealDesc: "AI 에이전트가 Unreal Editor의 상태를 읽고, 직접 조작하고, 결과까지 확인하게 하는 도구.",
    unityDesc: "말로 요청하면 AI가 Unity 씬과 에디터 작업을 수행하고, 실행 전에 바뀔 범위를 먼저 보여 주는 도구.",
    spartaDesc: "공부를 퀘스트로 바꾸고, 완료할 때마다 경험치가 쌓여 탑이 자라는 게임형 학습 서비스.", questCaseTitle: "Agentic Coding history\nQuest Tower", questCaseQuestionLabel: "핵심 질문", questCaseQuestion: "“학습 관리 앱이 아니라, 학습 행동을 반복시키는 제품으로 만들려면 무엇을 설계해야 할까?”", questCaseWhy: "Unreal 부트캠프의 학습 지속성을 높이려 했습니다. 다음 행동과 보상 루프가 분명해야 한다고 판단했습니다.", questProblemLabel: "Problem", questProblem: "학생·튜터의 학습 운영을 하나의 제품으로 묶고, 퀘스트 완료 → XP 획득 → 탑 성장이라는 반복 루프를 만들어야 했습니다.", questStartLabel: "Product build", questStart: "요구사항 정리와 Deep Interview로 범위를 확정한 뒤 UI·API·DB를 수직 슬라이스로 구현하고, 인증·퀘스트·타이머·리더보드·C++ 자동 채점·경제 시스템까지 연결했습니다.", questUxLabel: "Question → UX", questUx: "받을 보상이 있으면 보상 받기를 먼저, 없으면 학습 시작을 보여주도록 CTA를 상태 기반으로 설계했습니다. 다음 행동까지의 클릭 수를 줄이는 것이 기준이었습니다.", questDataLabel: "Question → Data", questData: "숨은 테스트케이스는 서버가 읽되 학생에게는 입력·정답을 마스킹하고, 중복 제출은 DB unique index로 막았습니다. 보안과 실행 가능성을 함께 지키는 선택이었습니다.", questReliabilityLabel: "Question → Reliability", questReliability: "XP·골드가 stale read-modify-write로 덮어써질 수 있어 Postgres atomic RPC, row lock, 원장 기록, 실패 시 롤백으로 데이터 정합성을 확보했습니다.", questOperationsLabel: "Question → Operations", questOperations: "실시간 UX를 없애지 않고 공유 polling·캐시·visible-tab 갱신으로 사용량을 줄였고, 외부 채점 서버 오류는 학생 코드 오류와 분리해 재시도할 수 있게 했습니다.", questResultLabel: "Result", questResult: "제품 기획부터 DB·UI·외부 API·배포·운영까지 완성하고, 235개 커밋의 개선 기록을 남겼습니다. 질문·제약·검증을 반복해 학습 제품을 닫았습니다.",
    gameDesc: "소리와 시스템 설계로 게임의 세계를 살아 움직이게 만드는 작업.",
    openProject: "프로젝트 열기 ↗", viewGithub: "GitHub에서 보기 ↗", viewPortfolio: "포트폴리오 열기 ↗", viewScreens: "화면 보기 ↗",
    emptyState: "이 카테고리에는 아직 작업이 없습니다.",
    workflowTitle: "AI와 함께 만드는 방법", workflowSubtitle: "문제를 정리하고, 도구를 연결하고, 결과를 확인합니다.",
    workflowOneTitle: "무엇을 만들지 정합니다", workflowOneDesc: "해결할 문제와 결과물이 꼭 지켜야 할 기준부터 정합니다.",
    workflowTwoTitle: "AI에게 도구를 줍니다", workflowTwoDesc: "필요한 자료와 기능을 연결해 AI가 직접 작업할 수 있게 합니다.",
    workflowThreeTitle: "결과를 확인하고 다듬습니다", workflowThreeDesc: "AI가 만든 결과를 직접 실행해 보고, 부족한 부분을 고쳐 완성합니다.",
    aboutTitle: "소개",
    aboutLede: "전자제품 품질 엔지니어로 7년을 일한 뒤\n게임 사운드와 음악을 만들어 왔습니다.\n지금은 AI 에이전트로\n분야를 가리지 않고 필요한 제품을 직접 만듭니다.",
    aboutDetailOne: "품질 엔지니어로 일하며 불량의 원인을 찾고 결과를 검증하는 습관이 몸에 뱄습니다. 그래서 AI가 만든 결과도 그대로 믿지 않고, 직접 실행해 확인합니다.",
    aboutDetailTwo: "법률 문서 검토, 학습 서비스, 게임 에디터 도구처럼 분야가 달라도 같은 방식으로 문제를 정의하고 끝까지 완성합니다.",
    otherPortfolios: "다른 포트폴리오", gameAudioPortfolio: "게임 오디오 디자이너", aiVideoPortfolio: "AI 비디오 디자이너", aiTechBlog: "AI와 일하는 법을 정리한 블로그",
    caseStudyTitle: "Agentic Coding history\nCerebras DocLens", caseStudyIntro: "처음부터 끝까지 Product를 만들며, 어떤 질문을 던지고 왜 그렇게 결정했는지를 기록했습니다.", caseStudyQuestionLabel: "첫 질문", caseStudyQuestion: "“문서 요약을 잘 만드는 것보다, 사용자가 실제로 판단할 수 있는 근거를 어떻게 남길까?”", caseStudyWhy: "긴 문서에서는 요약 하나만으로 위험·금액·기한이 묻힐 수 있다고 판단했습니다. 그래서 근거를 공유하는 여러 Agent 구조부터 설계했습니다.", caseProblemLabel: "Problem", caseProblem: "보험 약관·계약서·의료 문서를 누구나 이해하고 행동으로 옮길 수 있게 만드는 문제였습니다.", casePlanLabel: "Agent Plan", casePlan: "문서 intake → Intake Agent → 공유 근거 캐시 → Summary·Risk·Cost·Timeline Agent 병렬 분석 → 대시보드와 후속 질문으로 연결했습니다.", caseToolsLabel: "Tools", caseTools: "Next.js, Cerebras API, Gemma 4 31B, PDF/Image parsing, JSON schema, Vercel을 연결했습니다.", caseProviderLabel: "Provider 선택", caseProvider: "6개 Agent를 병렬로 분석하는 구조에서는 모델의 지식만큼 응답 시간도 중요했습니다. Cerebras는 병렬 실행 흐름을 빠르게 검증하기 위한 provider로 선택했고, GPT-4.1과 같은 입력을 비교할 수 있도록 provider를 교체 가능한 구조로 설계했습니다.", caseFailureLabel: "Failure → Correction", caseFailure: "Vercel에서 PDF parsing이 실패했을 때 LLM 문제와 런타임 문제를 나눠 확인했고, 원인은 런타임이었습니다. DOMMatrix polyfill·dynamic import·worker preload를 추가하고, OCR은 이미지 업로드 경로로 범위를 조정했습니다.", caseHumanLabel: "Human Role", caseHuman: "문제의 범위, Agent 역할, 출력 schema, 공개 데모의 안전 기준을 정의하고 각 결과를 실행·검토했습니다.", caseResultLabel: "Result", caseResult: "문제 정의와 PRD부터 Agent 구조 설계, 구현, 배포 장애 대응, UX 개선, 검증까지 하나의 Product로 완성했습니다.",
    caseStudyHistoryTools: "Agentic history 보기 ↘", agentToolsCaseTitle: "Agentic Coding history\nUnrealAgent + UnityMCP", agentToolsCaseIntro: "AI가 게임 에디터를 직접 읽고 호출하도록 도구 계층을 만들었습니다.", agentToolsCaseQuestionLabel: "핵심 질문", agentToolsCaseQuestion: "“AI Agent를 사용해 Unreal과 Unity를 개발하는 데서 끝나지 않고, Editor 자체를 조작하게 만들 수 있을까?”", agentToolsCaseWhy: "Agent가 현재 상태를 읽고, 필요한 도구를 호출하고, 변경 결과를 검증해야 실제 작업으로 이어진다고 판단했습니다.", agentProblemLabel: "Problem", agentProblem: "AI Agent가 Editor 안에서 직접 행동하는 실행 계층이 필요했습니다.", agentHarnessLabel: "Agent Harness", agentHarness: "MCP HTTP·stdio와 Codex CLI·Claude CLI를 연결하고, OpenAI·Anthropic 호환 Provider를 선택할 수 있는 로컬 harness로 구성했습니다.", unrealToolsLabel: "Unreal Tool Layer", unrealTools: "Blueprint·UMG·Material·Niagara·Control Rig·Asset·Viewport를 조작하고, RAG와 Vision까지 연결했습니다.", unityToolsLabel: "Unity Tool Layer", unityTools: "Scene·Asset·Material·Lighting·Audio·Character·Animation 작업을 Unity Editor용 MCP 도구로 노출했습니다.", agentSafetyLabel: "Safety", agentSafety: "Agent의 변경을 바로 실행하지 않도록 dryRun을 두고, 실행 전 결과와 변경 범위를 확인할 수 있게 했습니다.", agentVerifyLabel: "Failure → Correction", agentVerify: "MCP discovery 문제에서 tools/list를 직접 확인해 원인을 좁혔고, UnityMCP에서는 오디오 authoring과 beta packaging 흐름을 정리했습니다.", agentToolsResultLabel: "Result", agentToolsResult: "AI가 Unreal·Unity Editor를 읽고 조작하고 검증하는 Agentic System을 직접 만들었습니다.",
    contactEyebrow: "연락", contactTitle: "함께 만들어요", footerLine: "AI 빌더 · 제품 제작자", savePortfolioPdf: "포트폴리오 PDF 저장"
  },
  en: {
    pageTitle: "Jungmin Cha | AI Native Builder · Agentic Product Developer",
    pageDesc: "Jungmin Cha's portfolio. I define problems, design the tools and checks AI agents use, and ship products.",
    navBuilds: "Builds", navWorkflow: "How I build", navAbout: "About", navBlog: "Blog ↗", navGithub: "GitHub ↗",
    heroEyebrow: "AI-NATIVE BUILDER", heroTitleOne: "Built with AI.", heroTitleTwo: "Verified by me.",
    heroDesc: "I define the problem and design the tools and rules AI agents work with.\nThen I run every result myself and ship products people actually use.",
    heroCta: "See selected work ↓", heroContact: "Email me ↗",
    copyEmail: "Copy email", copiedEmail: "Copied ✓", contactSend: "Send an email", lightboxKicker: "PROJECT SCREENS",
    statement: "AI agents need <em>structure</em>.",
    statementNote: "AI does its best work when the problem, the tools, and the bar for checking results are set. I design that frame first, then build the product with AI.",
    buildsTitle: "Selected work", buildsSubtitle: "Select “See how it was made” to follow each build from its first question to verification.",
    filterAll: "All", filterProduct: "Products", filterTool: "Agent tools", filterGame: "Games",
    lawgateDesc: "A legal review tool that splits documents into issues, has several AI agents review them, and rechecks the findings against official sources.",
    cerebrasDesc: "Several AI agents split up a long, complex PDF and lay out its key points, risks, costs, and deadlines at a glance.",
    lawgateQuestion: "How do we block an answer when the evidence is not strong enough?",
    viewHistory: "See how it was made ↓",
    collaborationLabel: "Built with", projectQuestionLabel: "First question",
    caseStudyHistory: "View Agentic history ↘", caseDetailLabel: "AGENTIC CODING HISTORY", closeHistory: "Close",
    lawgateCaseTitle: "Agentic Coding history\nLawGate", lawgateCaseIntro: "With Codex, I built a legal document review workbench from the first prototype to a usable product by keeping the questions, constraints, and verification loops visible.", lawgateCaseQuestionLabel: "First question", lawgateCaseQuestion: "“Instead of making a better answer, how do we block an answer without enough evidence?”", lawgateCaseWhy: "For a legal product, sources and verification boundaries come first. The workbench checks evidence and leads to the next action.", lawgateProblemLabel: "Problem", lawgateProblem: "Find issues in PDF and HWP documents, block unsupported claims and overconfident legal advice, and still make the result understandable to a general user.", lawgateStartLabel: "Start small", lawgateStart: "I first used static HTML, CSS, JavaScript, and a Node server to validate the core evidence flow. Only after that did I add Codex CLI, RAG, Neo4j, legal-source APIs, and PDF processing.", lawgateFailureLabel: "Failure → Question", lawgateFailure: "I turned slow processing of 33 PDFs totaling about 921MB, Windows spawn EPERM, Codex rate limits, missing cache, slow judge workers, difficult language, and leaked internal paths into questions about their causes.", lawgatePlanLabel: "Agent Plan", lawgatePlan: "Question breakdown → PDF/HWP intake → local TF-IDF RAG → official legal-source search → plaintiff, defendant, and judge workers → citation checks and an evidence matrix.", lawgateContractLabel: "Agent contract", lawgateContract: "I separated role prompts, Korean civil-litigation practice, JSON Schema, evidence ledger, and proof gaps into a working environment and output contract for each Agent.", lawgateProductLabel: "Product loop", lawgateProduct: "PDF-hash cache, batch splitting, intermediate digests, incremental review, fast and precise modes, four-stage litigation workers, session storage, and separate public/attorney PDF exports closed the real workflow. The development record includes seven prompts and four schemas.", lawgateResultLabel: "Result", lawgateResult: "I defined the problem, designed the questions, constraints, and output contracts, then used each run to ask the next question and finish a legal document review product.",
    rufDesc: "A dance academy website where staff update classes, instructors, consultations, and location without touching code.",
    rufCaseTitle: "Agentic Coding history\nRUF Web", rufCaseQuestionLabel: "Core question", rufCaseQuestion: "“How do we build a web product that operators can keep using without asking a developer for every change?”", rufCaseWhy: "RUF was not only a promotional page. It needed schedules, instructors, weekly classes, consultation, and location information to keep changing. So I started by asking how operators could update content themselves and users could reach the next action quickly.", rufProblemLabel: "Problem", rufProblem: "Bring the academy brand, class discovery, location information, and consultation conversion into one web experience.", rufBuildLabel: "Product build", rufBuild: "Using Next.js 15, React 19, and TypeScript, I built the brand UI, multilingual content, schedule, instructors, consultation, location, FAQ, SEO, and privacy-page structure from the ground up.", rufCmsLabel: "Question → CMS", rufCms: "I asked: “Should I build a custom admin page, or use Google Sheets as a CMS?” Operators needed to update schedules, weekly classes, videos, and instructors without editing code. At this scale, Sheets kept the operating system small, with no separate database, auth, or admin UI.", rufUxLabel: "Question → UX", rufUx: "Browser review exposed pushed-down hero messaging, awkward Korean line breaks, mobile horizontal scrolling, and a carousel that made browsing harder. I simplified the layout and interactions against actual usability.", rufReliabilityLabel: "Question → Reliability", rufReliability: "I asked: “What happens when external data is empty or the network fails?” The product shows static fallbacks when Sheets is unavailable, and uses saved coordinates only when geocoding the address fails.", rufOperationsLabel: "Question → Operations", rufOperations: "When the real schedule changed, I removed expired CTAs and event-only copy. PRE-OPEN became Open Event, and facility imagery, image loading, and mobile CTAs were rechecked against the live operation.", rufResultLabel: "Result", rufResult: "I connected planning, UI, multilingual content, SEO, maps, consultation conversion, operational data, responsive QA, and deployment. From the initial build in May through the end of July, 78 commits turned it into an operating web Product.",
    loreDesc: "A production tool that gathers scattered notes and lore into game characters with dialogue and AI voices.", loreCaseTitle: "Agentic Coding history\nOh My Cosmos", loreCaseQuestionLabel: "Core question", loreCaseQuestion: "“The value was not that AI wrote a lot of code; what value should AI create inside the product?”", loreCaseWhy: "I judged AI usage itself to be a common differentiator. So I connected characters, worlds, dialogue, and voice into a real production flow, using Guardian & Seeker as the first proof product.", loreProblemLabel: "Product value", loreProblem: "I defined Oh My Cosmos as an AI-native character and world-building pipeline, connecting Persona, Dialogue, Chat, TTS, and Visual Prompt in one flow.", loreEvidenceLabel: "Evidence surface", loreEvidence: "I built the Guardian & Seeker Production Kit API so characters, dialogue, TTS direction, visual prompts, and an Export Manifest could be checked externally.", loreImportLabel: "Document import", loreImport: "Users can upload PDF, DOCX, and images for OCR and AI analysis. Source evidence stays attached while characters, relationships, items, and quests are extracted, reviewed, and applied.", loreGeneralizeLabel: "Avoid overfitting", loreGeneralize: "I first validated a Studio by composing the existing World → Character → Dialogue → TTS → Export entities. The new Workflow DB waited until that Studio check.", loreCollabLabel: "Collaboration", loreCollab: "Before WebSocket, I defined owner/editor/viewer roles, D1 as the source of truth, version and expectedVersion, stale-write 409 Conflict, and a board event log, then added polling and Durable Object realtime step by step.", loreStackLabel: "Product stack", loreStack: "I expanded the surface to Cloudflare Pages, Workers, D1, R2, Durable Objects, Drizzle ORM, session auth, API permissions, character ZIPs, and engine-specific exports.", loreResultLabel: "Result", loreResult: "From the first February 2026 commit, I left a 317-commit improvement history and 23 test files with 128 passing tests. Repeated questions, constraints, and verification completed the AI character production product end to end.",
    unrealDesc: "A tool that lets an AI agent read Unreal Editor state, operate it directly, and check the result.",
    unityDesc: "Ask in plain language and AI carries out Unity scene and editor work, showing what will change before it runs.",
    spartaDesc: "A gamified learning service that turns study into quests, where every completed quest earns XP and grows your tower.", questCaseTitle: "Agentic Coding history\nQuest Tower", questCaseQuestionLabel: "Core question", questCaseQuestion: "“What should be designed so this becomes a product that repeats learning behavior, not just a learning management app?”", questCaseWhy: "The goal was to improve learning continuity in an Unreal bootcamp. The product needed a clear next action and reward loop.", questProblemLabel: "Problem", questProblem: "Bring student and tutor operations into one product and create a repeatable loop: complete a quest → earn XP → grow the tower.", questStartLabel: "Product build", questStart: "I set scope through requirements and deep interviews, then built UI, API, and DB vertical slices before connecting auth, quests, timers, leaderboards, C++ grading, and the economy system.", questUxLabel: "Question → UX", questUx: "Show Claim reward first when a reward is available, otherwise show Start learning. The success metric was fewer clicks to the next action.", questDataLabel: "Question → Data", questData: "The server reads hidden test cases while masking inputs and answers from students; a DB unique index blocks duplicate submissions. This balanced security with executable grading.", questReliabilityLabel: "Question → Reliability", questReliability: "Because XP and gold could be overwritten by stale read-modify-write, I moved the critical path to Postgres atomic RPC, row locks, ledger records, and rollback on failure.", questOperationsLabel: "Question → Operations", questOperations: "I kept the real-time experience while reducing usage with shared polling, caching, and visible-tab refresh. External grading errors became a retryable infrastructure state, separate from student code errors.", questResultLabel: "Result", questResult: "I completed the product from planning through DB, UI, external APIs, deployment, and operations, leaving a 235-commit improvement history. Repeated questions, constraints, and verification closed the learning product.",
    gameDesc: "Game audio and systems work that makes a world feel alive through sound.",
    openProject: "Open project ↗", viewGithub: "View on GitHub ↗", viewPortfolio: "Open portfolio ↗", viewScreens: "View screens ↗", emptyState: "Nothing in this category yet.",
    workflowTitle: "How I build with AI", workflowSubtitle: "Set the problem, connect the tools, and check the result.",
    workflowOneTitle: "Decide what to make", workflowOneDesc: "Start with the problem and the standard the result needs to meet.",
    workflowTwoTitle: "Give AI the right tools", workflowTwoDesc: "Connect the files and functions AI needs to do the work directly.",
    workflowThreeTitle: "Check and improve", workflowThreeDesc: "Run the result, find what is missing, and keep refining until it works.",
    aboutTitle: "About",
    aboutLede: "After seven years as a quality engineer for consumer electronics, I made game sound and music. Now I work with AI agents to build whatever product the work needs.",
    aboutDetailOne: "Hardware quality engineering taught me to trace defects to their root cause and verify results. I bring the same habit to AI: I do not trust an output until I have run it myself.",
    aboutDetailTwo: "Legal document review, learning services, game editor tools: the field changes, but I define the problem and finish the product the same way.",
    otherPortfolios: "Other portfolios", gameAudioPortfolio: "Game Audio Designer", aiVideoPortfolio: "AI Video Designer", aiTechBlog: "Blog on working with AI",
    caseStudyTitle: "Agentic Coding history\nCerebras DocLens", caseStudyIntro: "A record of the questions, decisions, and verification loops behind a product built from start to finish.", caseStudyQuestionLabel: "First question", caseStudyQuestion: "“How do we leave evidence people can actually use to make a decision, not just a good summary?”", caseStudyWhy: "In long documents, a single summary can hide risks, costs, and deadlines. I designed a shared-evidence multi-agent structure.", caseProblemLabel: "Problem", caseProblem: "Make insurance policies, contracts, and medical documents understandable and actionable for everyone.", casePlanLabel: "Agent Plan", casePlan: "Document intake → Intake Agent → shared evidence cache → parallel Summary, Risk, Cost, and Timeline Agents → dashboard and follow-up chat.", caseToolsLabel: "Tools", caseTools: "Next.js, Cerebras API, Gemma 4 31B, PDF/image parsing, JSON schema, and Vercel.", caseProviderLabel: "Provider choice", caseProvider: "With six Agents running in parallel, response time mattered alongside model knowledge. I chose Cerebras to quickly validate the parallel execution flow, while keeping the provider swappable so the same input could be compared with GPT-4.1.", caseFailureLabel: "Failure → Correction", caseFailure: "When PDF parsing failed on Vercel, I separated the runtime issue from the LLM path. I added a DOMMatrix polyfill, dynamic import, and worker preload, then scoped OCR to image uploads for stability.", caseHumanLabel: "Human Role", caseHuman: "Define the problem scope, Agent roles, output schema, demo safety rules, and review every result by running it.", caseResultLabel: "Result", caseResult: "A product completed from problem definition and PRD through Agent architecture, implementation, deployment fixes, UX refinement, and verification.",
    caseStudyHistoryTools: "View Agentic history ↘", agentToolsCaseTitle: "Agentic Coding history\nUnrealAgent + UnityMCP", agentToolsCaseIntro: "I built the tool layer that lets AI read and call the game editor itself.", agentToolsCaseQuestionLabel: "Core question", agentToolsCaseQuestion: "“Could an AI Agent go beyond helping develop Unreal and Unity, and operate the Editor itself?”", agentToolsCaseWhy: "The Agent needs to read the current state, call the right tool, and verify the change before it becomes real work.", agentProblemLabel: "Problem", agentProblem: "I needed an execution layer where the AI Agent could act inside the Editor.", agentHarnessLabel: "Agent Harness", agentHarness: "I connected MCP over HTTP and stdio with Codex CLI and Claude CLI, plus OpenAI- and Anthropic-compatible providers in a local harness.", unrealToolsLabel: "Unreal Tool Layer", unrealTools: "I exposed Blueprint, UMG, Material, Niagara, Control Rig, Asset, and Viewport work, then connected RAG and Vision.", unityToolsLabel: "Unity Tool Layer", unityTools: "I exposed Scene, Asset, Material, Lighting, Audio, Character, and Animation work as Unity Editor MCP tools.", agentSafetyLabel: "Safety", agentSafety: "I added dryRun to change tools so the result and scope could be checked before an Agent executed the change.", agentVerifyLabel: "Failure → Correction", agentVerify: "I narrowed an MCP discovery issue by checking tools/list directly, then organized audio authoring and beta packaging flows in UnityMCP.", agentToolsResultLabel: "Result", agentToolsResult: "I built an Agentic System that reads, controls, and verifies work inside Unreal and Unity Editor.",
    contactEyebrow: "CONTACT", contactTitle: "Let's build together", footerLine: "AI builder · product maker", savePortfolioPdf: "Save portfolio as PDF"
  }
};

locales.ko.lawgateCaseWhy = "PDF·HWP 법률 문서와 증거 자료는 분량이 많고 표현도 복잡해, 필요한 근거를 사람이 직접 찾아 판단하기 어렵습니다. 그래서 근거를 확인하고 다음 행동으로 연결하는 워크벤치를 목표로 잡았습니다.";
locales.en.lawgateCaseWhy = "PDF and HWP legal documents contain a large amount of dense text and evidence, making it difficult for a person to find the right basis and decide. So the workbench checks evidence and leads to the next action.";
locales.ko.lawgateResult = "문제를 정의하고 질문·제약·출력 계약을 설계한 뒤 실행 결과를 보고 다음 질문을 던지며 법률 문서 검토 제품을 완성했습니다.";
locales.en.lawgateResult = "I defined the problem, designed the questions, constraints, and output contract, then used each result to ask the next question and complete the legal document review product.";
locales.ko.loreDesc = "흩어진 설정과 세계관 메모를 모아, 대사와 AI 음성을 갖춘 게임 캐릭터로 만드는 제작 도구.";
locales.ko.loreCaseQuestion = "“흩어진 세계관과 캐릭터 아이디어를 AI가 실제 게임 제작 자산으로 연결하려면 어떻게 해야 할까?”";
locales.ko.loreCaseWhy = "게임을 만드는 인디 팀에서 Discord·Notion·회의 중 나온 설정과 대사가 흩어지고, 캐릭터 설정이 정리되지 않으면 기획과 게임 사운드가 함께 멈추는 문제를 겪었습니다. 그래서 이 문제를 협업 캔버스와 AI 제작 파이프라인으로 만들고, Guardian & Seeker에 직접 적용해 검증하는 방향을 잡았습니다.";
locales.ko.loreProblemLabel = "Problem";
locales.ko.loreProblem = "소규모 인디 팀은 기획자·작가·사운드 인력이 부족해 세계관, 캐릭터, 대사, 음성을 체계적으로 관리하기 어렵습니다. 자료를 다시 찾고 옮기는 동안 설정이 어긋나고 캐릭터 일관성이 깨졌습니다.";
locales.ko.loreEvidenceLabel = "Question → Workflow";
locales.ko.loreEvidence = "Figma·Notion·ChatGPT·TTS 도구를 따로 쓰면 회의 내용과 제작 결과 사이가 끊깁니다. 그래서 협업 캔버스 → AI 구조화 → Persona·Dialogue·TTS → JSON/ZIP Export가 이어지는 하나의 흐름을 먼저 설계했습니다.";
locales.ko.loreImportLabel = "Agent plan";
locales.ko.loreImport = "캔버스·회의 기록·문서를 AI가 읽어 세계관·캐릭터·관계·대사 후보로 구조화하고, 원문 자료를 보존한 뒤 사람이 검토한 결과만 제작 자산으로 넘기도록 했습니다.";
locales.ko.loreGeneralizeLabel = "Question → Validation";
locales.ko.loreGeneralize = "Guardian & Seeker의 4명 Seeker와 1명 Guardian의 역할·성격·대사·보이스 톤·세계관 관계에 적용해 유효성을 확인하는 범위로 시작했습니다.";
locales.ko.loreCollabLabel = "Question → Scale";
locales.ko.loreCollab = "작은 팀이 바로 써볼 수 있도록 기본 캔버스는 가볍게 열고, AI 구조화·TTS·엔진 Export는 팀 단위 기능으로 확장하는 방향을 잡았습니다. 이후 인디 게임·웹소설·웹툰·애니메이션 팀으로 넓힐 수 있게 제품 경계를 열어두었습니다.";
locales.ko.loreStackLabel = "Product pipeline";
locales.ko.loreStack = "Cloudflare 기반 서비스에 캐릭터·세계관·대사·TTS·엔진 Export를 연결하고, ElevenLabs·Naver CLOVA Voice처럼 라이선스 가능한 음성 API를 고려해 저작권 위험을 줄이는 흐름으로 설계했습니다.";
locales.ko.loreResultLabel = "Result";
locales.ko.loreResult = "흩어진 아이디어를 회의에서 제작 자산으로 이어주는 AI 협업 회의실·캐릭터 세계관 제작 플랫폼으로 정의했습니다. Guardian & Seeker에 직접 적용해 제작 속도와 세계관 완성도를 검증하는 제품으로 발전시키고 있습니다.";
locales.en.loreDesc = "A production tool that gathers scattered notes and lore into game characters with dialogue and AI voices.";
locales.en.loreCaseQuestion = "“How can AI turn scattered world and character ideas into real game-production assets?”";
locales.en.loreCaseWhy = "In the indie team building a 4v1 asymmetric PvP game, settings and dialogue from Discord, Notion, and meetings kept getting scattered. When character settings were not organized, both planning and game audio stalled. I turned that firsthand bottleneck into a collaborative canvas and AI production pipeline, then applied it directly to Guardian & Seeker for validation.";
locales.en.loreProblemLabel = "Problem";
locales.en.loreProblem = "Small indie teams often lack dedicated planning, writing, and sound roles, making worlds, characters, dialogue, and voice assets hard to manage consistently. Re-finding and moving materials caused drift and repeated fixes.";
locales.en.loreEvidenceLabel = "Question → Workflow";
locales.en.loreEvidence = "Using Figma, Notion, ChatGPT, and a TTS tool separately breaks the path between a meeting and a usable asset. I designed one flow: collaborative canvas → AI structuring → Persona, Dialogue, TTS → JSON/ZIP export.";
locales.en.loreImportLabel = "Agent plan";
locales.en.loreImport = "AI reads canvas notes, meeting records, and documents, then structures worlds, characters, relationships, and dialogue candidates. Source material stays attached, and only human-reviewed results become production assets.";
locales.en.loreGeneralizeLabel = "Question → Validation";
locales.en.loreGeneralize = "I started by applying the flow to the roles, personalities, dialogue, voice tones, and world relationships of four Seekers and one Guardian in Guardian & Seeker.";
locales.en.loreCollabLabel = "Question → Scale";
locales.en.loreCollab = "The base canvas stays lightweight for small teams, while AI structuring, TTS, and engine export can expand into team features. The product boundary stays open to indie games, web novels, webtoons, and animation teams.";
locales.en.loreStackLabel = "Product pipeline";
locales.en.loreStack = "I connected characters, worlds, dialogue, TTS, and engine export on a Cloudflare-based service, while considering licensed voice APIs such as ElevenLabs and Naver CLOVA Voice to reduce rights risk.";
locales.en.loreResultLabel = "Result";
locales.en.loreResult = "I defined Oh My Cosmos as an AI collaboration room and character-world production platform that carries scattered ideas from meetings into production assets. It is evolving through direct application to Guardian & Seeker, where I validate its effect on production speed and world consistency.";
locales.ko.caseStudyQuestion = "“복잡한 문서를 AI가 요약하는 데서 그치지 않고, 사용자가 쉽게 읽고 판단하려면 무엇을 남겨야 할까?”";
locales.ko.caseStudyWhy = "보험 약관·계약서·의료 문서는 내용이 길고 위험·금액·기한이 흩어져 있어, 요약만 보여주면 사용자가 중요한 판단 근거를 놓칠 수 있다고 봤습니다. 그래서 어려운 문장을 핵심·위험·비용·일정으로 나누고, 원문 근거를 함께 보여주는 제품을 만들기로 했습니다.";
locales.ko.caseProblem = "복잡하고 긴 문서를 누구나 읽고 이해하며, 필요한 다음 행동까지 판단할 수 있게 하고 싶었습니다.";
locales.ko.casePlan = "문서 업로드 → Intake Agent → 공유 근거 캐시 → Summary·Risk·Cost·Timeline Agent 병렬 분석 → 쉬운 설명과 원문 근거를 함께 보여주는 대시보드로 연결했습니다.";
locales.ko.caseHuman = "어려운 내용을 어디까지 쉽게 풀어쓸지, 어떤 근거를 함께 보여줄지, 사용자가 어떤 행동을 판단해야 할지를 정의하고 각 결과를 직접 실행·검토했습니다.";
locales.ko.caseResult = "문제 정의와 PRD부터 Agent 구조 설계, 문서 처리, 쉬운 설명, 배포 장애 대응, UX 개선, 검증까지 연결해 복잡한 문서를 이해 가능한 제품으로 완성했습니다.";
locales.en.caseStudyQuestion = "“When AI summarizes a complex document, what evidence must remain so a user can read and decide with confidence?”";
locales.en.caseStudyWhy = "Insurance policies, contracts, and medical documents are long, with risks, costs, and deadlines spread across dense text. A summary alone could hide the basis for an important decision. So I split difficult language into key points, risks, costs, and timelines while keeping the source evidence visible.";
locales.en.caseProblem = "Make long, complex documents understandable to anyone and clear enough to support the next decision or action.";
locales.en.casePlan = "Document upload → Intake Agent → shared evidence cache → parallel Summary, Risk, Cost, and Timeline Agents → a dashboard that pairs plain-language explanations with source evidence.";
locales.en.caseHuman = "I defined how far to simplify difficult content, which evidence to show, and what decision the user should be able to make, then ran and reviewed each result.";
locales.en.caseResult = "From the problem definition and PRD through Agent architecture, document processing, plain-language explanations, deployment fixes, UX refinement, and verification, I completed a product that makes complex documents understandable.";
locales.ko.caseStudyQuestion = "“복잡한 문서를 쉽게 읽고 판단하게 하면서도, 분석에 오래 걸리지 않게 하려면 어떻게 할까?”";
locales.ko.caseStudyWhy = "긴 문서의 위험·금액·기한을 쉽게 풀어 보여줘야 했고, 사용자가 결과를 오래 기다리지 않게 하는 것도 중요한 문제였습니다. 여러 분석 작업을 순차로 실행하면 문서가 길수록 응답이 늦어지기 때문에, Cerebras API의 빠른 추론을 활용해 Summary·Risk·Cost·Timeline Agent를 병렬로 실행하는 구조를 먼저 검증했습니다.";
locales.ko.casePlan = "문서 업로드 → Intake Agent → 공유 근거 캐시 → Cerebras API 기반 Summary·Risk·Cost·Timeline Agent 병렬 분석 → 쉬운 설명과 원문 근거를 함께 보여주는 대시보드로 연결했습니다.";
locales.ko.caseTools = "Next.js, Cerebras API, Gemma 4 31B, PDF/Image parsing, JSON schema, Vercel을 연결했습니다. 여러 Agent를 동시에 실행해 문서 분석 대기 시간을 줄이는 것이 Provider 선택의 기준이었습니다.";
locales.ko.caseProvider = "여러 Agent가 병렬로 실행되는 구조에서는 모델의 지식과 응답 시간이 모두 중요했습니다. 그래서 Cerebras API로 병렬 실행 흐름을 빠르게 검증하고, Provider를 바꿔 비교할 수 있도록 구조를 분리했습니다.";
locales.ko.caseResult = "문제 정의와 PRD부터 Agent 구조 설계, Cerebras API 기반 병렬 문서 분석, 쉬운 설명, 배포 장애 대응, UX 개선, 검증까지 연결해 복잡한 문서를 빠르게 이해할 수 있는 제품으로 완성했습니다.";
locales.en.caseStudyQuestion = "“How can we make complex documents easy to read and decide from without making users wait too long for analysis?”";
locales.en.caseStudyWhy = "Making risks, costs, and deadlines easy to understand was only half the problem; users also should not wait too long for the result. Sequential analysis would slow down as documents grew, so I used Cerebras API's fast inference to validate a structure that runs Summary, Risk, Cost, and Timeline Agents in parallel.";
locales.en.casePlan = "Document upload → Intake Agent → shared evidence cache → parallel Summary, Risk, Cost, and Timeline Agents powered by Cerebras API → a dashboard pairing plain-language explanations with source evidence.";
locales.en.caseTools = "Next.js, Cerebras API, Gemma 4 31B, PDF/image parsing, JSON schema, and Vercel. Provider selection was driven by the need to reduce waiting time while running multiple Agents in parallel.";
locales.en.caseProvider = "With multiple Agents running in parallel, response time mattered alongside model knowledge. I used Cerebras API to validate the parallel execution flow quickly, while keeping the provider swappable for comparison.";
locales.en.caseResult = "From the problem definition and PRD through Agent architecture, Cerebras-powered parallel document analysis, plain-language explanations, deployment fixes, UX refinement, and verification, I completed a product that makes complex documents faster to understand.";
locales.ko.unrealCaseTitle = "Agentic Coding history\nUnreal Agent";
locales.ko.unrealCaseQuestionLabel = "핵심 질문";
locales.ko.unrealCaseQuestion = "“AI Agent가 Unreal Editor의 상태를 읽고, 필요한 작업을 직접 수행하게 하려면 어떤 도구 계층이 필요할까?”";
locales.ko.unrealCaseWhy = "Agent가 Editor의 현재 상태를 읽고 도구를 호출하며 변경 결과까지 검증하는 구조를 만들고 싶었습니다.";
locales.ko.unrealProblemLabel = "문제";
locales.ko.unrealProblem = "개발자가 AI를 사용하는 흐름이 아니라, AI Agent가 Unreal Editor 안에서 직접 행동하는 실행 계층이 필요했습니다.";
locales.ko.unrealHarnessLabel = "Agent Harness";
locales.ko.unrealHarness = "MCP HTTP·stdio를 Codex CLI·Claude CLI와 연결하고, OpenAI·Anthropic 호환 Provider를 선택할 수 있는 로컬 harness를 구성했습니다.";
locales.ko.unrealToolsLabel = "Unreal Tool Layer";
locales.ko.unrealTools = "Blueprint·UMG·Material·Niagara·Control Rig·Asset·Viewport 작업을 Agent 도구로 노출하고, RAG와 Vision까지 연결했습니다.";
locales.ko.unrealEditorLabel = "Editor workflow";
locales.ko.unrealEditor = "Agent가 Unreal Editor의 상태를 확인하고 필요한 작업을 호출한 뒤, 실제 변경 결과를 다시 읽어 다음 작업으로 이어지게 만들었습니다.";
locales.ko.unrealSafetyLabel = "Safety";
locales.ko.unrealSafety = "변경을 바로 실행하지 않고 dryRun과 변경 범위 확인을 거치도록 해 Agent의 실수를 통제할 수 있게 했습니다.";
locales.ko.unrealFailureLabel = "Failure → Correction";
locales.ko.unrealFailure = "MCP discovery가 동작하지 않았을 때 tools/list를 직접 확인해 문제를 좁히고, 실제 연결 상태를 검증하는 흐름으로 수정했습니다.";
locales.ko.unrealResultLabel = "Result";
locales.ko.unrealResult = "AI가 Unreal Editor를 읽고 조작하고 검증하는 Agent Tool Layer를 직접 만들었습니다.";
locales.en.unrealCaseTitle = "Agentic Coding history\nUnreal Agent";
locales.en.unrealCaseQuestionLabel = "Core question";
locales.en.unrealCaseQuestion = "“What tool layer would let an AI Agent read Unreal Editor state and perform the required work itself?”";
locales.en.unrealCaseWhy = "I wanted a structure where the Agent reads the Editor state, calls tools, and verifies the resulting change.";
locales.en.unrealProblemLabel = "Problem";
locales.en.unrealProblem = "I needed an execution layer where an AI Agent could act inside Unreal Editor, not just a workflow for a developer using AI.";
locales.en.unrealHarnessLabel = "Agent Harness";
locales.en.unrealHarness = "I connected MCP over HTTP and stdio with Codex CLI and Claude CLI, plus OpenAI- and Anthropic-compatible providers in a local harness.";
locales.en.unrealToolsLabel = "Unreal Tool Layer";
locales.en.unrealTools = "I exposed Blueprint, UMG, Material, Niagara, Control Rig, Asset, and Viewport work as Agent tools, then connected RAG and Vision.";
locales.en.unrealEditorLabel = "Editor workflow";
locales.en.unrealEditor = "The Agent checks Unreal Editor state, calls the required operation, then reads the result again so the next action can follow from the actual change.";
locales.en.unrealSafetyLabel = "Safety";
locales.en.unrealSafety = "Changes pass through dryRun and scope review before execution so Agent mistakes can be controlled.";
locales.en.unrealFailureLabel = "Failure → Correction";
locales.en.unrealFailure = "When MCP discovery failed, I checked tools/list directly, narrowed the cause, and added a flow to verify the actual connection state.";
locales.en.unrealResultLabel = "Result";
locales.en.unrealResult = "I built an Agent Tool Layer that reads, controls, and verifies work inside Unreal Editor.";
locales.ko.unityCaseTitle = "Agentic Coding history\nUnity MCP";
locales.ko.unityCaseQuestionLabel = "핵심 질문";
locales.ko.unityCaseQuestion = "“자연어로 Unity Editor를 조작하고, Agent의 변경을 안전하게 검증하려면 어떻게 해야 할까?”";
locales.ko.unityCaseWhy = "Scene과 Asset을 읽고 필요한 Editor 도구를 호출하며 변경 전후를 확인하는 MCP를 만들고 싶었습니다.";
locales.ko.unityProblemLabel = "문제";
locales.ko.unityProblem = "자연어로 요청한 Scene·Asset·Material·Lighting·Audio·Character·Animation 작업을\nUnity Editor에서 실제 결과로 이어지게 했습니다.";
locales.ko.unityMcpLabel = "Unity MCP";
locales.ko.unityMcp = "Unity Editor의 상태를 파악하고 AI가 작업을 할 수 있게 MCP 도구로 만들었습니다. Agent가 씬을 읽고 필요한 명령을 고를 수 있습니다.";
locales.ko.unityToolsOnlyLabel = "Tool Layer";
locales.ko.unityToolsOnly = "Scene·Asset·Material·Lighting·Audio·Character·Animation 작업을 Unity Editor용 도구로 분리해 호출 단위를 명확하게 만들었습니다.";
locales.ko.unitySafetyLabel = "Safety";
locales.ko.unitySafety = "변경 도구에 dryRun을 두어 실제 실행 전에 결과와 변경 범위를 확인하고, Agent의 실수를 통제할 수 있게 했습니다.";
locales.ko.unityFailureLabel = "Failure → Correction";
locales.ko.unityFailure = "오디오 authoring 도구를 추가하고 beta packaging과 안전 정책을 정리하면서, 기능을 늘리는 것보다 배포 가능한 도구 흐름을 우선했습니다.";
locales.ko.unityResultLabel = "Result";
locales.ko.unityResult = "Unity Editor를 자연어와 MCP로 조작하고, 변경 전 검토와 실행 후 확인까지 연결하는 Agentic Tool을 만들었습니다.";
locales.en.unityCaseTitle = "Agentic Coding history\nUnity MCP";
locales.en.unityCaseQuestionLabel = "Core question";
locales.en.unityCaseQuestion = "“How can natural-language Unity Editor operations remain safely verifiable before and after an Agent makes a change?”";
locales.en.unityCaseWhy = "I wanted an MCP that reads Scenes and Assets, calls the required Editor tools, and checks the state before and after a change.";
locales.en.unityProblemLabel = "Problem";
locales.en.unityProblem = "Natural-language requests needed to reach real Scene, Asset, Material, Lighting, Audio, Character, and Animation results inside Unity Editor.";
locales.en.unityMcpLabel = "Unity MCP";
locales.en.unityMcp = "I exposed Unity Editor state and operations as MCP tools so the Agent could read a scene and choose the required command.";
locales.en.unityToolsOnlyLabel = "Tool Layer";
locales.en.unityToolsOnly = "I separated Scene, Asset, Material, Lighting, Audio, Character, and Animation work into Unity Editor tools with clear call boundaries.";
locales.en.unitySafetyLabel = "Safety";
locales.en.unitySafety = "Change tools use dryRun so the result and scope can be reviewed before execution, controlling Agent mistakes.";
locales.en.unityFailureLabel = "Failure → Correction";
locales.en.unityFailure = "I added audio authoring tools and organized beta packaging and safety policies, prioritizing a shippable tool flow over simply adding more features.";
locales.en.unityResultLabel = "Result";
locales.en.unityResult = "I built an Agentic Tool that operates Unity Editor through natural language and MCP, with review before changes and checks after execution.";

// Plain-language Agentic Coding history copy: keep the technical evidence, remove report-like phrasing.
locales.ko.caseStudyHistory = "만든 과정 보기 ↘";
locales.ko.caseStudyHistoryTools = "만든 과정 보기 ↘";
locales.en.caseStudyHistory = "See how it was made ↘";
locales.en.caseStudyHistoryTools = "See how it was made ↘";

locales.ko.lawgateCaseQuestion = "“더 그럴듯한 답보다, 근거 없는 답을 먼저 막으려면 어떻게 해야 할까?”";
locales.ko.lawgateCaseWhy = "법률 문서와 증거 자료는 양이 많고 표현도 어렵습니다. 필요한 근거를 찾지 못한 채 답을 만들면 위험합니다. 그래서 근거를 먼저 확인하는 워크벤치를 만들었습니다.";
locales.ko.lawgateProblemLabel = "문제";
locales.ko.lawgateProblem = "PDF와 HWP에서 쟁점을 찾고, 근거 없는 주장과 과한 법률 조언을 막으면서도 누구나 결과를 이해해야 했습니다.";
locales.ko.lawgateStartLabel = "작게 시작하기";
locales.ko.lawgateStart = "처음에는 HTML·CSS·JS와 Node로 핵심 흐름만 만들었습니다. 필요한 기능이 확인된 뒤 Codex CLI, RAG, Neo4j, 법령 API, PDF 처리를 붙였습니다.";
locales.ko.lawgateFailureLabel = "문제에서 배운 점";
locales.ko.lawgateFailure = "PDF 33개, 약 921MB를 처리하면서 느린 속도·Windows 오류·Codex 제한·캐시 부재가 드러났습니다. 문제를 하나씩 질문으로 바꾸고 원인을 확인했습니다.";
locales.ko.lawgatePlanLabel = "진행 순서";
locales.ko.lawgatePlan = "질문을 쪼갠 뒤 PDF·HWP를 받고, 로컬 RAG로 근거를 찾았습니다. 공식 법령(법제처 API)을 다시 확인하고 원고·피고·판사 Agent가 같은 자료를 보며 검토하게 했습니다.";
locales.ko.lawgateContractLabel = "Agent 작업 기준";
locales.ko.lawgateContract = "Agent마다 역할과 출력 형식을 정했습니다. 법률 기준, JSON Schema, 증거 원장, 입증되지 않은 부분을 나눠 결과가 섞이지 않게 했습니다.";
locales.ko.lawgateProductLabel = "제품으로 연결하기";
locales.ko.lawgateProduct = "파일 hash 캐시, 배치 처리, 중간 저장, 빠른 모드·정밀 모드, 4단계 검토, 세션 저장, PDF 내보내기를 연결했습니다.";
locales.ko.lawgateResultLabel = "결과";
locales.ko.lawgateResult = "문제를 정의하고 질문과 기준을 정한 뒤, 실행 결과를 보며 다음 질문을 이어갔습니다. 그렇게 법률 문서를 검토하는 제품을 완성했습니다.";
locales.en.lawgateCaseQuestion = "“Instead of making an answer sound better, how can we block an answer without enough evidence?”";
locales.en.lawgateCaseWhy = "Legal documents and evidence are long and difficult to read. An answer is risky when its basis has not been checked. So I built a workbench that checks the evidence before writing the answer.";
locales.en.lawgateProblem = "Find issues in PDF and HWP files, stop unsupported claims and overconfident legal advice, and still make the result understandable to anyone.";
locales.en.lawgateStartLabel = "Start small";
locales.en.lawgateStart = "I started with HTML, CSS, JavaScript, and Node to test the core flow. After the need was clear, I added Codex CLI, RAG, Neo4j, legal-source APIs, and PDF processing.";
locales.en.lawgateFailureLabel = "What broke";
locales.en.lawgateFailure = "Processing 33 PDFs totaling about 921MB exposed slow steps, a Windows error, Codex limits, and missing cache. I turned each issue into a question and checked its cause.";
locales.en.lawgatePlanLabel = "The flow";
locales.en.lawgatePlan = "I broke the question down, ingested PDF and HWP files, and searched them with local RAG. Official statutes were checked again, while plaintiff, defendant, and judge Agents reviewed the same evidence.";
locales.en.lawgateContractLabel = "Agent rules";
locales.en.lawgateContract = "Each Agent got a clear role and output format. Legal rules, JSON Schema, the evidence ledger, and unsupported points stayed separate.";
locales.en.lawgateProductLabel = "Product loop";
locales.en.lawgateProduct = "I connected file-hash caching, batch processing, intermediate saves, fast and precise modes, four review stages, sessions, and PDF export.";
locales.en.lawgateResultLabel = "Result";
locales.en.lawgateResult = "I defined the problem, set the questions and rules, then used each result to decide the next question. That process became a legal document review product.";

locales.ko.caseStudyQuestion = "“복잡한 문서를 쉽게 읽고 판단하게 하면서도, 분석에 오래 걸리지 않게 하려면 어떻게 할까?”";
locales.ko.caseStudyWhy = "긴 문서의 위험·금액·기한을 쉽게 풀어 보여줘야 했습니다. 사용자가 결과를 오래 기다리지 않게 하는 것도 중요했습니다. 그래서 어려운 내용을 핵심·위험·비용·일정으로 나누고, Cerebras API로 여러 Agent를 동시에 실행하는 구조를 먼저 검증했습니다.";
locales.ko.caseProblemLabel = "문제";
locales.ko.caseProblem = "복잡하고 긴 문서를 누구나 읽고 이해하며, 필요한 다음 행동까지 판단할 수 있게 만드는 문제였습니다.";
locales.ko.casePlanLabel = "진행 순서";
locales.ko.casePlan = "모든 Agent가 각각 문서를 읽으면 토큰이 낭비됩니다. 그래서 문서가 들어오면 Intake Agent가 먼저 읽고, Summary·Risk·Cost·Timeline Agent는 같은 근거를 나눠 동시에 분석하게 했습니다. 결과는 대시보드에서 쉬운 설명과 원문으로 함께 보여줍니다.";
locales.ko.caseToolsLabel = "사용한 도구";
locales.ko.caseTools = "Next.js, Cerebras API, Gemma 4 31B, PDF/Image parsing, JSON schema, Vercel을 연결했습니다. 여러 Agent를 동시에 실행해 기다리는 시간을 줄이는 것이 도구 선택의 기준이었습니다.";
locales.ko.caseProviderLabel = "Provider 선택";
locales.ko.caseProvider = "여러 Agent가 동시에 실행되면 모델의 지식만큼 응답 시간도 중요합니다. Cerebras API로 병렬 실행을 빠르게 확인하고, 나중에 다른 Provider와 비교할 수 있게 구조를 나눴습니다.";
locales.ko.caseFailureLabel = "문제 해결";
locales.ko.caseFailure = "Vercel에서 PDF를 읽지 못했을 때 모델 문제와 실행 환경 문제를 나눠 확인했고, 원인은 실행 환경이었습니다. 필요한 설정을 보완하고, OCR은 이미지 업로드부터 안정적으로 동작하게 범위를 조정했습니다.";
locales.ko.caseHumanLabel = "사람의 판단";
locales.ko.caseHuman = "어디까지 쉽게 풀어쓸지, 어떤 원문을 함께 보여줄지, 사용자가 무엇을 판단해야 할지를 정했습니다. 결과는 직접 실행해 보고 다시 고쳤습니다.";
locales.ko.caseResultLabel = "결과";
locales.ko.caseResult = "문제 정의와 PRD부터 Agent 구조 설계, 병렬 문서 분석, 쉬운 설명, 배포 문제 해결, UX 개선, 검증까지 연결해 복잡한 문서를 빠르게 이해할 수 있는 제품을 완성했습니다.";
locales.en.caseStudyQuestion = "“How can we make complex documents easy to read and decide from without making users wait too long?”";
locales.en.caseStudyWhy = "Risks, costs, and deadlines had to be easy to understand, and users should not wait too long. So I split the content into key points, risks, costs, and timelines, then used Cerebras API to validate parallel Agent execution.";
locales.en.caseProblemLabel = "Problem";
locales.en.caseProblem = "Make long, complex documents understandable to anyone and clear enough to support the next decision or action.";
locales.en.casePlanLabel = "The flow";
locales.en.casePlan = "The Intake Agent reads the upload first. Summary, Risk, Cost, and Timeline Agents then analyze the same evidence in parallel, while the dashboard shows plain language beside the source.";
locales.en.caseToolsLabel = "Tools";
locales.en.caseTools = "Next.js, Cerebras API, Gemma 4 31B, PDF/image parsing, JSON schema, and Vercel. Reducing wait time while running multiple Agents shaped the tool choice.";
locales.en.caseProviderLabel = "Provider choice";
locales.en.caseProvider = "When several Agents run at once, response time matters alongside model knowledge. I used Cerebras API to validate the parallel flow quickly and kept the provider swappable for comparison.";
locales.en.caseFailureLabel = "Fixing problems";
locales.en.caseFailure = "When PDF parsing failed on Vercel, I separated the runtime issue from the model path. I fixed the required setup and kept OCR scoped to image uploads until the flow was stable.";
locales.en.caseHumanLabel = "Human judgment";
locales.en.caseHuman = "I decided how far to simplify the content, which source passages to show, and what the user should be able to decide. I ran each result and revised it.";
locales.en.caseResultLabel = "Result";
locales.en.caseResult = "From the problem and PRD through Agent architecture, parallel document analysis, plain-language explanations, deployment fixes, UX refinement, and verification, I completed a product that makes complex documents faster to understand.";
locales.ko.rufCaseQuestion = "“운영자가 개발자에게 매번 부탁하지 않아도, 계속 쓸 수 있는 웹을 어떻게 만들까?”";
locales.ko.rufCaseWhy = "RUF는 한 번 보고 끝나는 홍보 페이지가 아니었습니다. 시간표와 강사, 주간 수업, 상담·위치 정보가 계속 바뀌었습니다. 운영자가 직접 고치고 방문자가 바로 상담까지 갈 수 있는 구조를 먼저 생각했습니다.";
locales.ko.rufProblemLabel = "문제";
locales.ko.rufProblem = "댄스 아카데미의 브랜드 소개, 수업 찾기, 위치 확인, 상담 연결을 하나의 웹 경험으로 묶어야 했습니다.";
locales.ko.rufBuildLabel = "제품 만들기";
locales.ko.rufBuild = "Next.js·React·TypeScript로 브랜드 화면, 다국어, 일정, 강사, 상담, 위치, FAQ, SEO, 개인정보 페이지를 처음부터 만들었습니다.";
locales.ko.rufCmsLabel = "Google Sheet를 고른 이유";
locales.ko.rufCms = "운영자가 익숙한 Google Sheets를 CMS로 쓰기로 했습니다. 코드 수정 없이 시간표·주간 수업·영상·강사 정보를 바꿀 수 있고, 지금 규모에는 이 방식이 더 작고 빠르게 운영할 수 있었습니다.";
locales.ko.rufUxLabel = "화면에서 확인한 문제";
locales.ko.rufUx = "브라우저에서 첫 메시지가 밀리고, 한글 줄바꿈이 어색하고, 모바일에서 가로 스크롤이 생기는 문제를 확인했습니다. 강사 캐러셀처럼 보기에는 화려하지만 탐색을 방해하는 요소도 단순하게 바꿨습니다.";
locales.ko.rufReliabilityLabel = "멈추지 않게 하기";
locales.ko.rufReliability = "Sheets가 비거나 네트워크가 끊겨도 화면이 비지 않도록 정적 fallback을 준비했습니다. 주소 검색이 실패할 때는 저장된 좌표를 사용해 지도도 계속 보이게 했습니다.";
locales.ko.rufOperationsLabel = "운영에 맞추기";
locales.ko.rufOperations = "실제 일정이 바뀌면 만료된 신청 버튼과 이벤트 문구를 남겨두지 않았습니다. 시설 사진, 이미지 로딩, 모바일 CTA도 운영 상황에 맞춰 다시 확인했습니다.";
locales.ko.rufResultLabel = "결과";
locales.ko.rufResult = "기획과 UI부터 다국어·SEO·지도·상담·운영 데이터·반응형 QA·배포까지 연결했습니다. 5월에 시작해 7월 말까지 78개 커밋으로 실제 운영 가능한 웹 제품을 만들었습니다.";
locales.en.rufCaseQuestion = "“How can we build a web product operators can keep using without asking a developer for every change?”";
locales.en.rufCaseWhy = "RUF was not a page people visited once and left. Schedules, instructors, weekly classes, consultation, and location information kept changing. I started with a structure that operators could update and visitors could use to reach a consultation quickly.";
locales.en.rufProblem = "Bring the academy brand, class discovery, location information, and consultation into one web experience.";
locales.en.rufBuildLabel = "Product build";
locales.en.rufBuild = "Using Next.js, React, and TypeScript, I built the brand UI, multilingual content, schedule, instructors, consultation, location, FAQ, SEO, and privacy pages from scratch.";
locales.en.rufCmsLabel = "Why this CMS";
locales.en.rufCms = "I used Google Sheets because operators already knew it. They could update schedules, weekly classes, videos, and instructors without editing code, which fit the small operating scope.";
locales.en.rufUxLabel = "What the screen showed";
locales.en.rufUx = "Browser review exposed a pushed-down hero message, awkward Korean line breaks, and mobile horizontal scrolling. I also simplified a carousel that looked lively but made instructor browsing harder.";
locales.en.rufReliabilityLabel = "Keep it running";
locales.en.rufReliability = "Static fallbacks keep the page useful when Sheets is empty or the network fails. If address geocoding fails, saved coordinates keep the map visible.";
locales.en.rufOperationsLabel = "Fit the operation";
locales.en.rufOperations = "When the real schedule changed, I removed expired signup buttons and event copy. Facility photos, image loading, and mobile CTAs were checked again against the live operation.";
locales.en.rufResultLabel = "Result";
locales.en.rufResult = "I connected planning, UI, multilingual content, SEO, maps, consultation, operational data, responsive QA, and deployment. From May through the end of July, 78 commits turned it into an operating web product.";

locales.ko.loreCaseQuestion = "“흩어진 세계관과 캐릭터 아이디어를 AI가 실제 게임 제작 자산으로 연결하려면 어떻게 해야 할까?”";
locales.ko.loreCaseWhy = "인디 게임 팀에서 Discord·Notion·회의에 나온 설정과 대사가 흩어졌습니다. 캐릭터 설정이 정리되지 않으면 기획과 게임 사운드도 함께 멈췄습니다. 그래서 이 문제를 협업 캔버스와 AI 제작 흐름으로 만들고, 제작하는 게임에 직접 적용해 보기로 했습니다.";
locales.ko.loreProblemLabel = "문제";
locales.ko.loreProblem = "작은 팀은 기획자·작가·사운드 인력이 부족합니다. 세계관과 캐릭터, 대사, 음성을 관리하기 어렵고 자료를 옮기는 동안 설정도 쉽게 어긋났습니다.";
locales.ko.loreEvidenceLabel = "하나로 이어진 흐름";
locales.ko.loreEvidence = "Figma·Notion·ChatGPT·TTS를 따로 쓰면 회의 내용과 제작 결과 사이가 끊깁니다. 그래서 협업 캔버스에서 시작해 AI가 정리하고, Persona·Dialogue·TTS·JSON/ZIP Export까지 이어지게 했습니다.";
locales.ko.loreImportLabel = "Agent가 하는 일";
locales.ko.loreImport = "AI가 캔버스·회의 기록·문서를 읽고 세계관·캐릭터·관계·대사 후보로 정리합니다. 원문은 남겨두고 사람이 확인한 결과만 제작 자산으로 넘깁니다.";
locales.ko.loreGeneralizeLabel = "먼저 실제 게임에 적용";
locales.ko.loreGeneralize = "처음부터 모든 창작 분야를 해결하려 하지 않았습니다. 제작 중인 게임의 다섯 캐릭터에 역할·성격·대사·보이스 톤·관계를 적용하며 먼저 검증했습니다.";
locales.ko.loreCollabLabel = "작은 팀부터 시작";
locales.ko.loreCollab = "기본 캔버스는 가볍게 열고, AI 정리·TTS·엔진 Export는 팀 기능으로 확장할 수 있게 했습니다. 이후 인디 게임, 웹소설·웹툰·애니메이션 팀도 사용할 수 있도록 범위를 열어두었습니다.";
locales.ko.loreStackLabel = "제품 흐름";
locales.ko.loreStack = "Cloudflare 기반 서비스에 캐릭터·세계관·대사·TTS·엔진 Export를 연결했습니다. 음성은 라이선스를 확인할 수 있는 API를 사용해 저작권 위험도 함께 살폈습니다.";
locales.ko.loreResultLabel = "결과";
locales.ko.loreResult = "회의에서 나온 아이디어를 실제 제작 자산으로 이어주는 AI 협업 공간으로 정의했습니다. 제작 중인 게임에 적용하며 제작 속도와 세계관의 일관성을 확인하고 있습니다.";
locales.en.loreCaseQuestion = "“How can AI turn scattered world and character ideas into real game-production assets?”";
locales.en.loreCaseWhy = "In an indie game team, settings and dialogue from Discord, Notion, and meetings kept getting scattered. When character settings were not organized, planning and game audio stalled together. I turned that bottleneck into a collaborative canvas and AI production flow, then applied it to Guardian & Seeker.";
locales.en.loreProblem = "Small teams often lack dedicated planning, writing, and sound roles. Worlds, characters, dialogue, and voice assets become hard to manage, and settings drift while materials are moved between tools.";
locales.en.loreEvidenceLabel = "One connected flow";
locales.en.loreEvidence = "Using Figma, Notion, ChatGPT, and TTS separately breaks the path from a meeting to a usable asset. I connected collaborative canvas → AI structuring → Persona, Dialogue, TTS → JSON/ZIP export.";
locales.en.loreImportLabel = "What the Agent does";
locales.en.loreImport = "AI reads canvas notes, meeting records, and documents, then structures worlds, characters, relationships, and dialogue candidates. Source material stays attached, and only reviewed results become production assets.";
locales.en.loreGeneralizeLabel = "Test it in a real game";
locales.en.loreGeneralize = "I first applied the flow to the roles, personalities, dialogue, voice tones, and relationships of four Seekers and one Guardian in Guardian & Seeker.";
locales.en.loreCollabLabel = "Start with small teams";
locales.en.loreCollab = "The base canvas stays lightweight, while AI structuring, TTS, and engine export can grow into team features. The product can later serve indie games, web novels, webtoons, and animation teams.";
locales.en.loreStackLabel = "Product flow";
locales.en.loreStack = "I connected characters, worlds, dialogue, TTS, and engine export on a Cloudflare-based service. For voice, I also considered APIs with clear licensing so rights risk stayed visible.";
locales.en.loreResultLabel = "Result";
locales.en.loreResult = "I defined it as an AI collaboration space that carries meeting ideas into production assets. Its effect on production speed and world consistency is being checked through Guardian & Seeker.";
locales.ko.unrealCaseQuestion = "“AI Agent가 Unreal Editor를 직접 읽고 움직이게 하려면 어떤 구조가 필요할까?”";
locales.ko.unrealCaseWhy = "Agent가 Editor의 상태를 읽고, 도구를 고르고, 바뀐 결과를 다시 확인하는 흐름을 만들고 싶었습니다.";
locales.ko.unrealProblem = "개발자가 AI를 쓰는 것이 아니라, AI Agent가 Unreal Editor 안에서 직접 작업할 수 있어야 했습니다.";
locales.ko.unrealHarnessLabel = "연결 구조";
locales.ko.unrealHarness = "MCP HTTP·stdio를 Codex CLI·Claude CLI와 연결했습니다. OpenAI·Anthropic 호환 Provider도 바꿔 쓸 수 있게 했습니다.";
locales.ko.unrealToolsLabel = "Unreal 도구";
locales.ko.unrealTools = "Blueprint·UMG·Material·Niagara·Control Rig·Asset·Viewport 작업을 Agent가 부를 수 있게 만들고, RAG와 Vision도 연결했습니다.";
locales.ko.unrealEditorLabel = "작업 흐름";
locales.ko.unrealEditor = "Agent가 현재 상태를 확인하고 작업을 호출합니다. 작업이 끝나면 결과를 다시 읽어 다음 행동을 정하게 했습니다.";
locales.ko.unrealSafetyLabel = "안전 장치";
locales.ko.unrealSafety = "변경 전에 dryRun으로 결과와 범위를 먼저 확인하게 했습니다. 실수한 변경은 바로 실행되지 않습니다.";
locales.ko.unrealFailureLabel = "문제 해결";
locales.ko.unrealFailure = "MCP discovery가 안 될 때 tools/list를 직접 확인해 연결 문제를 좁혔습니다. 원인을 확인하는 도구도 Agent 흐름의 일부로 만들었습니다.";
locales.ko.unrealResultLabel = "결과";
locales.ko.unrealResult = "AI가 Unreal Editor를 읽고 움직이고 확인하는 도구 계층을 직접 만들었습니다.";
locales.en.unrealCaseQuestion = "“What structure would let an AI Agent read and operate Unreal Editor directly?”";
locales.en.unrealCaseWhy = "I wanted a flow where the Agent reads Editor state, chooses a tool, and checks the changed result again.";
locales.en.unrealProblem = "The developer should not be the only one using AI; the AI Agent needed to work directly inside Unreal Editor.";
locales.en.unrealHarnessLabel = "Connection";
locales.en.unrealHarness = "I connected MCP over HTTP and stdio with Codex CLI and Claude CLI. OpenAI- and Anthropic-compatible providers can also be swapped.";
locales.en.unrealToolsLabel = "Unreal tools";
locales.en.unrealTools = "Blueprint, UMG, Material, Niagara, Control Rig, Asset, and Viewport operations became Agent tools, with RAG and Vision connected as well.";
locales.en.unrealEditorLabel = "The flow";
locales.en.unrealEditor = "The Agent checks the current state and calls an operation. After the change, it reads the result again to decide what to do next.";
locales.en.unrealSafetyLabel = "Safety";
locales.en.unrealSafety = "dryRun checks the result and scope before a change runs. A mistaken change does not execute immediately.";
locales.en.unrealFailureLabel = "Fixing problems";
locales.en.unrealFailure = "When MCP discovery failed, I checked tools/list directly to narrow down the connection issue. The diagnostic step became part of the Agent flow.";
locales.en.unrealResultLabel = "Result";
locales.en.unrealResult = "I built the tool layer that lets an AI read, operate, and check Unreal Editor.";

locales.ko.unityCaseQuestion = "“자연어로 Unity Editor를 조작하고, Agent의 변경을 안전하게 검증하려면 어떻게 해야 할까?”";
locales.ko.unityCaseWhy = "Agent가 Scene과 Asset을 읽고, 필요한 도구를 부르고, 바뀐 상태를 확인해야 실제 작업이 된다고 봤습니다.";
locales.ko.unityProblem = "자연어로 요청한 Scene·Asset·Material·Lighting·Audio·Character·Animation 작업이 Unity Editor의 실제 결과로 이어져야 했습니다.";
locales.ko.unityMcpLabel = "Unity MCP";
locales.ko.unityMcp = "Unity Editor의 상태와 작업을 MCP 도구로 공개했습니다. Agent가 씬을 읽고 필요한 명령을 고를 수 있습니다.";
locales.ko.unityToolsOnlyLabel = "도구 나누기";
locales.ko.unityToolsOnly = "Scene·Asset·Material·Lighting·Audio·Character·Animation을 각각 호출할 수 있는 도구로 나눠 작업 범위를 분명하게 했습니다.";
locales.ko.unitySafetyLabel = "안전 장치";
locales.ko.unitySafety = "변경 도구에 dryRun을 넣었습니다. 실행 전에 결과와 범위를 확인하고, 문제가 있으면 멈출 수 있게 했습니다.";
locales.ko.unityFailureLabel = "문제 해결";
locales.ko.unityFailure = "오디오 authoring과 beta packaging을 추가하면서 안전 정책도 함께 정리했습니다. 기능 수보다 실제로 배포할 수 있는 흐름을 우선했습니다.";
locales.ko.unityResultLabel = "결과";
locales.ko.unityResult = "Unity Editor를 자연어와 MCP로 움직이고, 실행 전 확인과 실행 후 검토까지 연결하는 도구를 만들었습니다.";
locales.en.unityCaseQuestion = "“How can natural-language Unity Editor work stay safe to verify before and after an Agent changes it?”";
locales.en.unityCaseWhy = "The Agent needed to read Scenes and Assets, call the right tool, and check the changed state so the request became real work.";
locales.en.unityProblem = "Natural-language requests for Scene, Asset, Material, Lighting, Audio, Character, and Animation work needed to reach real results inside Unity Editor.";
locales.en.unityMcpLabel = "Unity MCP";
locales.en.unityMcp = "I exposed Unity Editor state and operations as MCP tools so the Agent could read a scene and choose the required command.";
locales.en.unityToolsOnlyLabel = "Separate tools";
locales.en.unityToolsOnly = "Scene, Asset, Material, Lighting, Audio, Character, and Animation became separate tools with clear boundaries.";
locales.en.unitySafetyLabel = "Safety";
locales.en.unitySafety = "Change tools use dryRun so the result and scope can be checked before execution and stopped when needed.";
locales.en.unityFailureLabel = "Fixing problems";
locales.en.unityFailure = "While adding audio authoring and beta packaging, I also organized the safety policy. A shippable flow mattered more than the number of features.";
locales.en.unityResultLabel = "Result";
locales.en.unityResult = "I built a tool that operates Unity Editor through natural language and MCP, with review before and after execution.";

locales.ko.questCaseQuestion = "“학습 관리 화면을 넘어, 학생이 계속 다음 행동을 하게 만드는 제품을 어떻게 만들까?”";
locales.ko.questCaseWhy = "Unreal 부트캠프에서 학생이 학습을 계속 이어가게 만들고 싶었습니다. 다음 행동과 보상이 분명해야 한다고 봤습니다.";
locales.ko.questProblemLabel = "문제";
locales.ko.questProblem = "학생과 튜터의 학습 운영을 한곳에 모으고, 퀘스트 완료 → XP 획득 → 탑 성장으로 이어지는 반복 흐름을 만들어야 했습니다.";
locales.ko.questStartLabel = "제품 만들기";
locales.ko.questStart = "요구사항과 인터뷰로 범위를 정한 후 화면·API·DB를 한 기능씩 연결했습니다. 로그인, 퀘스트, 타이머, 랭킹, C++ 채점, 보상 시스템까지 붙였습니다.";
locales.ko.questUxLabel = "다음 행동을 쉽게 만들기";
locales.ko.questUx = "학생이 화면을 보고 바로 무엇을 해야 할지 알 수 있어야 했습니다. 그래서 받을 보상이 있으면 ‘보상 받기’를 먼저 보여주고, 없으면 ‘학습 시작’을 바로 보여줬습니다.";
locales.ko.questDataLabel = "버그 신고 → 바로 개선";
locales.ko.questData = "사용자가 불편한 점을 바로 신고할 수 있는 기능을 만들었습니다. 신고가 접수되면 내부 포인트를 보상하고, 내용을 확인해 다음 개선 작업으로 바로 이어지게 했습니다.";
locales.ko.questReliabilityLabel = "꼬이지 않게 하기";
locales.ko.questReliability = "여러 요청이 동시에 들어와도 XP와 골드가 덮어써지지 않게 서버에서 한 번에 처리하고 기록했습니다. 실패하면 이전 상태로 되돌렸습니다.";
locales.ko.questOperationsLabel = "운영하며 개선하기";
locales.ko.questOperations = "운영 중에는 유저들의 실시간 반응을 살펴 불편한 점을 바로 고쳤습니다. 중간중간 이벤트를 열어 다시 찾아올 이유도 만들었습니다.";
locales.ko.questResultLabel = "결과";
locales.ko.questResult = "기획부터 DB·UI·외부 API·배포·운영까지 연결했습니다. 질문하고 고치고 확인하는 과정을 반복해 학습 제품을 완성했습니다.";
locales.en.questCaseQuestion = "“How can this become a product that keeps students taking the next step, not just a learning management screen?”";
locales.en.questCaseWhy = "The goal was to keep students moving through an Unreal bootcamp. A clear next action and reward had to be obvious.";
locales.en.questProblem = "Bring student and tutor operations together and create a repeatable loop: complete a quest → earn XP → grow the tower.";
locales.en.questStartLabel = "Build the product";
locales.en.questStart = "I set the scope through requirements and interviews, then connected UI, API, and DB one feature at a time. Auth, quests, timers, rankings, C++ grading, and rewards followed.";
locales.en.questUxLabel = "The screen";
locales.en.questUx = "Show Claim reward first when a reward exists; otherwise start learning immediately. Fewer clicks to the next action was the measure.";
locales.en.questDataLabel = "Protect the data";
locales.en.questData = "The server reads hidden test cases while students never see the answers. The database also blocks duplicate submissions.";
locales.en.questReliabilityLabel = "Keep it consistent";
locales.en.questReliability = "When requests arrive together, XP and gold must not overwrite each other. I processed and recorded the update together, then rolled back on failure.";
locales.en.questOperationsLabel = "Run it";
locales.en.questOperations = "I kept the real-time screen while reducing unnecessary requests. Grading-server errors became retryable states separate from student-code errors.";
locales.en.questResultLabel = "Result";
locales.en.questResult = "I connected planning, DB, UI, external APIs, deployment, and operations. Repeating the cycle of asking, fixing, and checking completed the learning product.";

// Final Korean copy pass: keep the visible case studies concrete and easy to scan.
locales.ko.lawgateProblemLabel = "문제";
locales.ko.lawgateResult = "PDF·HWP 문서에서 쟁점을 찾고, 공식 근거를 다시 확인하며, 일반 사용자도 결과를 이해할 수 있는 법률 문서 검토 제품으로 완성했습니다.";
locales.ko.caseProblemLabel = "문제";
locales.ko.caseProblem = "복잡하고 긴 문서를 누구나 읽고 이해하며, 필요한 다음 행동까지 판단할 수 있게 하고 싶었습니다.";
locales.ko.casePlan = "모든 Agent가 같은 문서를 반복해서 읽으면 토큰과 시간이 낭비됩니다. Intake Agent가 먼저 문서를 읽고, Summary·Risk·Cost·Timeline Agent가 같은 근거를 나눠 동시에 분석하도록 구성했습니다.";
locales.ko.caseResult = "Cerebras API로 여러 Agent를 동시에 실행하고, 핵심·위험·비용·일정과 원문 근거를 함께 보여주는 문서 분석 제품으로 완성했습니다.";
locales.ko.unrealProblemLabel = "문제";
locales.ko.unityProblemLabel = "문제";
locales.ko.unityProblem = "자연어로 명령한 Scene·Asset·Material·Lighting·Audio·Character·Animation 작업이 Unity Editor의 실제 결과로 이어져야 했습니다.";
locales.ko.unityMcp = "Unity Editor의 상태를 파악하고 AI가 작업할 수 있도록 MCP 도구로 만들었습니다. Agent가 씬을 읽고 필요한 명령을 고를 수 있습니다.";
locales.ko.questProblemLabel = "문제";

locales.ko.graphTitle = "작업별로 쓴 AI 도구";
locales.ko.graphToolsLabel = "AI 도구";
locales.ko.graphBuildsLabel = "만든 것";
locales.ko.graphHintHover = "도구를 가리키면 연결된 작업이 강조되고, ";
locales.ko.graphHintTap = "작업을 누르면 해당 카드로 이동합니다.";
locales.ko.graphJumpSuffix = ", 카드로 이동";
locales.ko.toolCodex = "Codex";
locales.ko.toolClaude = "Claude";
locales.ko.toolMcp = "MCP";
locales.ko.toolRag = "RAG";
locales.ko.graphLabelLawgate = "LAW GATE";
locales.ko.graphLabelLawgateShort = "LAW GATE";
locales.ko.graphLabelCerebras = "CEREBRAS DOCLENS";
locales.ko.graphLabelCerebrasShort = "DOCLENS";
locales.ko.graphLabelRuf = "RUF DANCE ACADEMY WEB";
locales.ko.graphLabelRufShort = "RUF WEB";
locales.ko.graphLabelCosmos = "OH MY COSMOS";
locales.ko.graphLabelCosmosShort = "COSMOS";
locales.ko.graphLabelQuest = "QUEST TOWER";
locales.ko.graphLabelQuestShort = "QUEST";
locales.ko.graphLabelUnreal = "UNREAL AGENT";
locales.ko.graphLabelUnrealShort = "UNREAL";
locales.ko.graphLabelUnity = "UNITY MCP";
locales.ko.graphLabelUnityShort = "UNITY";
locales.ko.graphSubLawgate = "법률 문서 검토";
locales.ko.graphSubCerebras = "PDF 문서 분석";
locales.ko.graphSubRuf = "학원 운영 웹사이트";
locales.ko.graphSubCosmos = "게임 캐릭터 제작";
locales.ko.graphSubQuest = "게임형 학습 서비스";
locales.ko.graphSubUnreal = "언리얼 에디터 에이전트";
locales.ko.graphSubUnity = "유니티 에디터 MCP";
locales.en.graphTitle = "AI tools used in each build";
locales.en.graphToolsLabel = "AI tools";
locales.en.graphBuildsLabel = "Builds";
locales.en.graphHintHover = "Point at a tool to highlight the builds that use it. ";
locales.en.graphHintTap = "Select a build to jump to its card.";
locales.en.graphJumpSuffix = ", jump to card";
locales.en.toolCodex = "Codex";
locales.en.toolClaude = "Claude";
locales.en.toolMcp = "MCP";
locales.en.toolRag = "RAG";
locales.en.graphLabelLawgate = "LAW GATE";
locales.en.graphLabelLawgateShort = "LAW GATE";
locales.en.graphLabelCerebras = "CEREBRAS DOCLENS";
locales.en.graphLabelCerebrasShort = "DOCLENS";
locales.en.graphLabelRuf = "RUF DANCE ACADEMY WEB";
locales.en.graphLabelRufShort = "RUF WEB";
locales.en.graphLabelCosmos = "OH MY COSMOS";
locales.en.graphLabelCosmosShort = "COSMOS";
locales.en.graphLabelQuest = "QUEST TOWER";
locales.en.graphLabelQuestShort = "QUEST";
locales.en.graphLabelUnreal = "UNREAL AGENT";
locales.en.graphLabelUnrealShort = "UNREAL";
locales.en.graphLabelUnity = "UNITY MCP";
locales.en.graphLabelUnityShort = "UNITY";
locales.en.graphSubLawgate = "Legal document review";
locales.en.graphSubCerebras = "PDF document analysis";
locales.en.graphSubRuf = "Academy website";
locales.en.graphSubCosmos = "Game character studio";
locales.en.graphSubQuest = "Gamified learning";
locales.en.graphSubUnreal = "Unreal Editor agent";
locales.en.graphSubUnity = "Unity Editor MCP";

const LANG_KEY = "jungmin-builder-language";
const THEME_KEY = "jungmin-builder-theme-v2";
const currentLang = localStorage.getItem(LANG_KEY) === "en" ? "en" : "ko";
let activeLang = currentLang;
let activeTheme = localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light";

function applyLanguage(lang) {
  const copy = locales[lang];
  document.documentElement.lang = lang;
  document.title = copy.pageTitle;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = copy.pageDesc;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = copy[element.dataset.i18n];
    if (value === undefined) return;
    element.innerHTML = value.replace(/\n/g, "<br />");
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = copy[element.dataset.i18nAria];
    if (value === undefined) return;
    element.setAttribute("aria-label", value);
  });
  const label = document.getElementById("langLabel");
  if (label) label.textContent = lang === "ko" ? "EN" : "KO";
  localStorage.setItem(LANG_KEY, lang);
}

let syncHeroShaderColors = function () {};

function applyTheme(theme) {
  document.body.classList.toggle("light", theme === "light");
  const button = document.getElementById("themeToggle");
  if (button) button.setAttribute("aria-label", theme === "light" ? "Switch to dark theme" : "Switch to light theme");
  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) themeColor.content = theme === "light" ? "#f5f5f7" : "#101215";
  localStorage.setItem(THEME_KEY, theme);
  syncHeroShaderColors();
}

function initFilters() {
  const buttons = [...document.querySelectorAll(".filter-btn")];
  const cards = [...document.querySelectorAll(".project-card")];
  const emptyState = document.getElementById("emptyState");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      let visible = 0;
      buttons.forEach((item) => item.classList.toggle("is-active", item === button));
      cards.forEach((card) => {
        const matches = filter === "all" || card.dataset.category.split(" ").includes(filter);
        card.hidden = !matches;
        if (matches) visible += 1;
      });
      if (emptyState) emptyState.hidden = visible !== 0;
    });
  });
}

function initProjectNumbers() {
  document.querySelectorAll(".project-card .project-meta span:last-child").forEach((number, index) => {
    number.textContent = String(index + 1).padStart(2, "0");
  });
}

function initProjectQuestions() {
  const questionKeys = [
    "lawgateQuestion",
    "caseStudyQuestion",
    "rufCaseQuestion",
    "loreCaseQuestion",
    "questCaseQuestion",
    "unrealCaseQuestion",
    "unityCaseQuestion"
  ];

  document.querySelectorAll("#builds .project-card").forEach((card, index) => {
    const details = card.querySelector(".project-case-details");
    const body = card.querySelector(".project-body");
    const questionKey = questionKeys[index];
    if (!details || !body || !questionKey) return;

    const existing = body.querySelector(".project-decision");
    if (existing) {
      existing.querySelector("span")?.setAttribute("data-i18n", "projectQuestionLabel");
      return;
    }

    const decision = document.createElement("div");
    decision.className = "project-decision";

    const label = document.createElement("span");
    label.dataset.i18n = "projectQuestionLabel";

    const question = document.createElement("b");
    question.dataset.i18n = questionKey;

    decision.append(label, question);
    const anchor = body.querySelector(".project-collaborator") || details;
    body.insertBefore(decision, anchor);
  });
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function setOverlay(el, open) {
  if (!el) return;
  const gen = (el._overlayGen || 0) + 1;
  el._overlayGen = gen;
  window.clearTimeout(el._overlayTimer);
  if (open) {
    el.inert = false;
    if (prefersReducedMotion()) {
      el.classList.remove("is-closed");
      el.hidden = false;
      return;
    }
    el.classList.add("is-closed");
    el.hidden = false;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (el._overlayGen !== gen) return;
        el.classList.remove("is-closed");
      });
    });
    return;
  }
  el.inert = true;
  el.classList.add("is-closed");
  if (prefersReducedMotion()) {
    el.hidden = true;
    return;
  }
  el._overlayTimer = window.setTimeout(() => {
    if (el._overlayGen === gen && el.classList.contains("is-closed")) el.hidden = true;
  }, 240);
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
    });
  });
}

function initReveal() {
  if (!("IntersectionObserver" in window) || prefersReducedMotion()) return;
  const nodes = [...document.querySelectorAll(".reveal")];
  if (!nodes.length) return;
  const stagger = 50;
  const maxSteps = 6;
  const observer = new IntersectionObserver((entries) => {
    const entering = entries.filter((entry) => entry.isIntersecting);
    if (!entering.length) return;
    entering.forEach((entry) => observer.unobserve(entry.target));
    entering
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left)
      .forEach((entry, index) => {
        window.setTimeout(() => {
          entry.target.classList.add("is-revealed");
          entry.target.classList.remove("reveal-pending");
        }, Math.min(index, maxSteps) * stagger);
      });
  }, { rootMargin: "0px 0px -40px 0px", threshold: 0.01 });

  nodes.forEach((node) => {
    const rect = node.getBoundingClientRect();
    const inView = rect.bottom > 0 && rect.top < window.innerHeight * 0.92;
    if (inView) {
      node.classList.add("is-revealed");
      return;
    }
    node.classList.add("reveal-pending");
    observer.observe(node);
  });

  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const showAll = () => {
    nodes.forEach((node) => {
      node.classList.add("is-revealed");
      node.classList.remove("reveal-pending");
    });
  };
  if (typeof motion.addEventListener === "function") {
    motion.addEventListener("change", () => {
      if (motion.matches) showAll();
    });
  }
}

const galleries = {
  lawgate: {
    title: "LAW GATE",
    images: ["img/optimized/lawgate_0.jpg", "img/optimized/lawgate_1.jpg", "img/optimized/lawgate_2.jpg"]
  },
  cerebras: {
    title: "CEREBRAS DOCLENS",
    images: ["img/optimized/cerebras_0.png", "img/optimized/cerebras_1.png", "img/optimized/cerebras_2.png", "img/optimized/cerebras_3.png", "img/optimized/cerebras_4.png"]
  },
  ruf: {
    title: "RUF DANCE",
    images: ["img/optimized/rufweb_0.jpg", "img/optimized/rufweb_1.jpg", "img/optimized/rufweb_2.jpg"]
  },
  ohmycosmos: {
    title: "OH MY COSMOS",
    images: ["img/optimized/OhMyCosmos_0.jpg", "img/optimized/OhMyCosmos_1.jpg", "img/optimized/OhMyCosmos_2.jpg"]
  },
  questtower: {
    title: "QUEST TOWER",
    images: ["img/optimized/QuestTower_0.jpg", "img/optimized/QuestTower_1.jpg", "img/optimized/QuestTower_2.jpg", "img/optimized/QuestTower_3.jpg", "img/optimized/QuestTower_4.jpg"]
  }
};

let activeGallery = null;
let activeGalleryIndex = 0;
let lastFocusedElement = null;

function updateGallery() {
  if (!activeGallery) return;
  const image = document.getElementById("lightboxImage");
  const title = document.getElementById("lightboxTitle");
  const caption = document.getElementById("lightboxCaption");
  const counter = document.getElementById("lightboxCounter");
  const source = activeGallery.images[activeGalleryIndex];
  if (image) {
    image.src = source;
    image.alt = activeLang === "ko"
      ? `${activeGallery.title} 화면 ${activeGalleryIndex + 1}`
      : `${activeGallery.title} screenshot ${activeGalleryIndex + 1}`;
  }
  if (title) title.textContent = activeGallery.title;
  if (caption) caption.textContent = `${activeGallery.title} · ${activeLang === "ko" ? "화면" : "screen"} ${activeGalleryIndex + 1}`;
  if (counter) counter.textContent = `${activeGalleryIndex + 1} / ${activeGallery.images.length}`;
}

function openGallery(name, opener) {
  const gallery = galleries[name];
  const lightbox = document.getElementById("lightbox");
  if (!gallery || !lightbox) return;
  activeGallery = gallery;
  activeGalleryIndex = 0;
  lastFocusedElement = opener || document.activeElement;
  setOverlay(lightbox, true);
  document.body.classList.add("is-lightbox-open");
  updateGallery();
  document.querySelector(".lightbox-close")?.focus();
}

function closeGallery() {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;
  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus({ preventScroll: true });
  }
  lastFocusedElement = null;
  activeGallery = null;
  document.body.classList.remove("is-lightbox-open");
  setOverlay(lightbox, false);
}

function moveGallery(step) {
  if (!activeGallery) return;
  activeGalleryIndex = (activeGalleryIndex + step + activeGallery.images.length) % activeGallery.images.length;
  updateGallery();
}

function initGalleries() {
  document.querySelectorAll("[data-gallery]").forEach((trigger) => {
    trigger.addEventListener("click", () => openGallery(trigger.dataset.gallery, trigger));
  });
  document.querySelectorAll("[data-lightbox-close]").forEach((element) => {
    element.addEventListener("click", closeGallery);
  });
  document.querySelector("[data-lightbox-prev]")?.addEventListener("click", () => moveGallery(-1));
  document.querySelector("[data-lightbox-next]")?.addEventListener("click", () => moveGallery(1));
  document.addEventListener("keydown", (event) => {
    if (!activeGallery) return;
    if (event.key === "Escape") closeGallery();
    if (event.key === "ArrowLeft") moveGallery(-1);
    if (event.key === "ArrowRight") moveGallery(1);
    if (event.key === "Tab") {
      const lightbox = document.getElementById("lightbox");
      const focusable = [...lightbox.querySelectorAll("button:not([disabled])")];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
}

function initHistoryPanels() {
  const modal = document.getElementById("historyModal");
  const historyBody = document.getElementById("historyModalBody");
  const title = document.getElementById("historyModalTitle");
  const closeButton = modal?.querySelector(".history-dialog-close");
  if (!modal || !historyBody || !title || !closeButton) return;

  let opener = null;
  const close = () => {
    if (opener && typeof opener.focus === "function") opener.focus({ preventScroll: true });
    opener = null;
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-history-open");
    setOverlay(modal, false);
    window.setTimeout(() => {
      if (modal.hidden) historyBody.replaceChildren();
    }, prefersReducedMotion() ? 0 : 240);
  };

  document.querySelectorAll(".project-case-details").forEach((details) => {
    const summary = details.querySelector("summary");
    const source = details.querySelector(".project-case-content");
    if (!summary || !source) return;
    summary.addEventListener("click", (event) => {
      event.preventDefault();
      const sourceTitle = source.querySelector("h4");
      title.dataset.i18n = sourceTitle?.dataset.i18n || "";
      title.innerHTML = sourceTitle?.innerHTML || "Agentic Coding history";
      const clone = source.cloneNode(true);
      clone.querySelector("h4")?.remove();
      historyBody.replaceChildren(clone);
      opener = summary;
      setOverlay(modal, true);
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("is-history-open");
      closeButton.focus();
    });
  });

  modal.querySelectorAll("[data-history-close]").forEach((element) => element.addEventListener("click", close));
  document.addEventListener("keydown", (event) => {
    if (modal.hidden) return;
    if (event.key === "Escape") close();
    if (event.key === "Tab") {
      event.preventDefault();
      closeButton.focus();
    }
  });
}

function initMobileMenu() {
  const toggle = document.getElementById("mobileMenuToggle");
  const menu = document.getElementById("mobileMenu");
  if (!toggle || !menu) return;
  const close = () => {
    if (menu.hidden && menu.classList.contains("is-closed")) return;
    if (menu.contains(document.activeElement)) toggle.focus();
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("is-menu-open");
    setOverlay(menu, false);
  };
  const open = () => {
    toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("is-menu-open");
    setOverlay(menu, true);
    menu.querySelector("a")?.focus();
  };
  toggle.addEventListener("click", () => {
    if (toggle.getAttribute("aria-expanded") === "true") close();
    else open();
  });
  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", close));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") close();
  });
}

async function copyText(value) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }
  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function initContactCopy() {
  const button = document.querySelector("[data-copy-email]");
  const feedback = document.getElementById("copyFeedback");
  if (!button) return;
  button.addEventListener("click", async () => {
    try {
      await copyText(button.dataset.copyEmail);
      button.textContent = locales[activeLang].copiedEmail;
      if (feedback) feedback.textContent = activeLang === "ko" ? "메일 주소를 복사했습니다." : "Email address copied.";
      window.setTimeout(() => {
        button.textContent = locales[activeLang].copyEmail;
        if (feedback) feedback.textContent = "";
      }, 2200);
    } catch {
      if (feedback) feedback.textContent = activeLang === "ko" ? "주소를 직접 선택해 복사해 주세요." : "Please copy the address manually.";
    }
  });
}

const printPortfolioButton = document.getElementById("printPortfolio");
const printDetails = [...document.querySelectorAll("#builds .project-case-details")];
let printDetailsState;
window.addEventListener("beforeprint", () => {
  printDetailsState = printDetails.map((detail) => detail.open);
  printDetails.forEach((detail) => { detail.open = true; });
});
window.addEventListener("afterprint", () => {
  printDetails.forEach((detail, index) => { detail.open = printDetailsState[index]; });
});
printPortfolioButton?.addEventListener("click", () => window.print());

// Lines only where that build's write-up names the tool.
// LAW GATE: Codex, RAG. Unreal Agent: Codex, Claude, MCP, RAG. Unity MCP: MCP.
// Gemini appears only in the workflow stack: with no build line it read as a broken node.
const HERO_GRAPH_EDGES = [
  ["codex", "lawgate"],
  ["rag", "lawgate"],
  ["codex", "unreal"],
  ["claude", "unreal"],
  ["mcp", "unreal"],
  ["rag", "unreal"],
  ["mcp", "unity"]
];

function initHeroGraph() {
  const root = document.getElementById("heroGraph");
  const stage = root?.querySelector(".hero-graph-stage");
  const svg = stage?.querySelector(".hero-graph-svg");
  if (!root || !stage || !svg) return;

  const nodes = [...stage.querySelectorAll("[data-node]")].map((el) => ({
    id: el.dataset.node,
    kind: el.classList.contains("graph-node-project") ? "project" : "tool",
    el,
    x: 0,
    y: 0,
    homeX: 0,
    homeY: 0,
    w: 0,
    h: 0,
    vx: 0,
    vy: 0,
    dragX: 0,
    dragY: 0,
    dragging: false,
    momentum: false,
    placed: false
  }));
  const byId = new Map(nodes.map((node) => [node.id, node]));
  const tools = nodes.filter((node) => node.kind === "tool");
  const projects = nodes.filter((node) => node.kind === "project");
  const svgNS = "http://www.w3.org/2000/svg";
  const edges = HERO_GRAPH_EDGES.flatMap(([from, to]) => {
    if (!byId.has(from) || !byId.has(to)) return [];
    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("class", "hero-graph-edge");
    path.dataset.from = from;
    path.dataset.to = to;
    svg.appendChild(path);
    return [{ from, to, path }];
  });

  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
  let reduced = motionQuery.matches;
  let stageWidth = 0;
  let stageHeight = 0;
  let narrow = false;
  let layoutKey = "";
  let hoverId = null;
  let focusId = null;
  let drag = null;
  let suppressClick = false;
  let pointer = { x: 0, y: 0, inside: false };
  let onScreen = true;
  let pageVisible = document.visibilityState !== "hidden";
  let loopOn = false;
  let raf = 0;
  let lastFrame = 0;
  let observedWidth = 0;
  let originX = 0;
  let originY = 0;

  function maxDpr() {
    return narrow ? 1 : 1.5;
  }

  function snap(value) {
    const step = 1 / maxDpr();
    return Math.round(value / step) * step;
  }

  function readSize(node) {
    node.w = node.el.getBoundingClientRect().width;
    node.h = node.el.offsetHeight;
  }

  // One width per column keeps every edge endpoint on a straight vertical line.
  function measure() {
    nodes.forEach((node) => { node.el.style.width = ""; });
    nodes.forEach(readSize);
    [tools, projects].forEach((list) => {
      const width = Math.ceil(list.reduce((max, node) => Math.max(max, node.w), 0));
      list.forEach((node) => { node.el.style.width = `${width}px`; });
    });
    nodes.forEach(readSize);
  }

  function columnsFit(width) {
    const pad = 8;
    const gutter = 48;
    const toolW = tools.reduce((max, node) => Math.max(max, node.w), 0);
    const projectW = projects.reduce((max, node) => Math.max(max, node.w), 0);
    return toolW + projectW + gutter + pad * 2 <= width;
  }

  function place(list, height, xFor) {
    const pad = 8;
    const minGap = 8;
    const content = list.reduce((sum, node) => sum + node.h, 0);
    const gaps = Math.max(list.length - 1, 0);
    const free = Math.max(0, height - pad * 2 - content);
    const gap = gaps ? Math.max(minGap, free / gaps) : 0;
    const block = content + gap * gaps;
    let y = Math.max(pad, (height - block) / 2);
    list.forEach((node) => {
      const step = 1 / maxDpr();
      const limit = Math.max(0, stageWidth - node.w);
      // Floor onto the paint snap grid so a node cannot draw past the stage's right edge.
      const snappedLimit = Math.floor((limit + 1e-4) / step) * step;
      node.homeX = Math.min(Math.max(0, xFor(node)), snappedLimit);
      node.homeY = y;
      y += node.h + gap;
    });
  }

  function readOrigin() {
    const rect = stage.getBoundingClientRect();
    originX = rect.left;
    originY = rect.top;
  }

  function layout() {
    readOrigin();
    const width = stage.getBoundingClientRect().width;
    if (width < 1) return;
    observedWidth = Math.round(stage.clientWidth);
    narrow = width < 380;
    root.classList.toggle("is-narrow", narrow);
    root.classList.toggle("is-static", reduced);
    root.classList.add("is-ready");
    measure();
    if (!narrow && !columnsFit(width)) {
      narrow = true;
      root.classList.add("is-narrow");
      measure();
    }
    const pad = 8;
    const minGap = 8;
    const block = (list) => list.reduce((sum, node) => sum + node.h, 0) + minGap * Math.max(list.length - 1, 0);
    const slack = narrow ? 0 : 72;
    const height = Math.round(Math.max(block(tools), block(projects), 280) + pad * 2 + slack);
    const key = `${width}|${height}|${narrow ? 1 : 0}|${reduced ? 1 : 0}|${nodes.map((node) => `${node.w}x${node.h}`).join(",")}`;
    if (key === layoutKey) return;
    layoutKey = key;
    stageWidth = width;
    stageHeight = height;
    root.style.setProperty("--graph-h", `${height}px`);
    root.style.setProperty("--graph-builds-x", `${Math.max(0, width - (projects[0]?.w || 0))}px`);
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    place(tools, height, () => pad);
    place(projects, height, (node) => width - node.w);
    nodes.forEach((node) => {
      if (reduced || !node.placed) {
        node.x = node.homeX;
        node.y = node.homeY;
        node.vx = 0;
        node.vy = 0;
        node.momentum = false;
      }
      node.placed = true;
    });
    paint();
    if (!reduced && nodes.some((node) => Math.abs(node.x - node.homeX) > 0.5 || Math.abs(node.y - node.homeY) > 0.5)) wake();
  }

  function edgePath(edge) {
    const from = byId.get(edge.from);
    const to = byId.get(edge.to);
    const x1 = snap(from.x + from.w);
    const y1 = snap(from.y + from.h / 2);
    const x2 = snap(to.x);
    const y2 = snap(to.y + to.h / 2);
    if (narrow) return `M ${x1} ${y1} L ${x2} ${y2}`;
    const bend = snap((x1 + x2) / 2);
    return `M ${x1} ${y1} C ${bend} ${y1}, ${bend} ${y2}, ${x2} ${y2}`;
  }

  function paintNode(node) {
    const next = `translate3d(${snap(node.x)}px, ${snap(node.y)}px, 0)`;
    if (node.painted === next) return;
    node.painted = next;
    node.el.style.transform = next;
  }

  function paintEdge(edge) {
    const d = edgePath(edge);
    if (edge.d === d) return;
    edge.d = d;
    edge.path.setAttribute("d", d);
  }

  function paint() {
    nodes.forEach(paintNode);
    edges.forEach(paintEdge);
  }

  function paintDrag(node) {
    paintNode(node);
    edges.forEach((edge) => {
      if (edge.from === node.id || edge.to === node.id) paintEdge(edge);
    });
  }

  function highlight(id) {
    const lit = new Set();
    if (id) lit.add(id);
    edges.forEach((edge) => {
      const on = Boolean(id) && (edge.from === id || edge.to === id);
      edge.path.classList.toggle("is-lit", on);
      if (on) {
        lit.add(edge.from);
        lit.add(edge.to);
      }
    });
    nodes.forEach((node) => node.el.classList.toggle("is-lit", lit.has(node.id)));
    root.classList.toggle("is-hot", Boolean(id));
  }

  function shownId() {
    return focusId || hoverId;
  }

  function canHover() {
    return finePointerQuery.matches;
  }

  function stopLoop() {
    loopOn = false;
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
  }

  function wake() {
    if (reduced || !onScreen || !pageVisible || loopOn) return;
    loopOn = true;
    lastFrame = 0;
    raf = requestAnimationFrame(tick);
  }

  // Release keeps the pointer's velocity (damping 0.8, response 0.4s).
  // Hover chase is critically damped (damping 1, response 0.3s). Velocity is px/s.
  function springTowards(node, targetX, targetY, dt) {
    const response = node.momentum ? 0.4 : 0.3;
    const ratio = node.momentum ? 0.8 : 1;
    const omega = (Math.PI * 2) / response;
    const stiffness = omega * omega;
    const damping = 2 * ratio * omega;
    let left = Math.min(Math.max(dt, 0), 0.048);
    while (left > 0.0001) {
      const step = Math.min(0.016, left);
      const ax = (targetX - node.x) * stiffness - node.vx * damping;
      const ay = (targetY - node.y) * stiffness - node.vy * damping;
      node.vx += ax * step;
      node.vy += ay * step;
      node.x += node.vx * step;
      node.y += node.vy * step;
      left -= step;
    }
  }

  function needsMotion() {
    if (drag && drag.active) return true;
    const nudging = !narrow && pointer.inside && canHover();
    for (const node of nodes) {
      if (node.dragging || node.momentum) return true;
      if (Math.abs(node.x - node.homeX) > 0.4 || Math.abs(node.y - node.homeY) > 0.4) return true;
      if (!nudging) continue;
      const dx = node.homeX + node.w / 2 - pointer.x;
      const dy = node.homeY + node.h / 2 - pointer.y;
      if (Math.hypot(dx, dy) < 120) return true;
    }
    return false;
  }

  function tick(now) {
    if (!loopOn) return;
    const gap = narrow ? 32 : 0;
    if (gap && lastFrame && now - lastFrame < gap) {
      raf = requestAnimationFrame(tick);
      return;
    }
    const dt = lastFrame ? Math.min(0.048, (now - lastFrame) / 1000) : (gap ? gap / 1000 : 0.016);
    lastFrame = now;
    const nudging = !narrow && pointer.inside && canHover();
    let moving = false;
    nodes.forEach((node) => {
      let targetX = node.homeX;
      let targetY = node.homeY;
      if (nudging && !node.dragging) {
        const dx = node.homeX + node.w / 2 - pointer.x;
        const dy = node.homeY + node.h / 2 - pointer.y;
        const dist = Math.hypot(dx, dy);
        const radius = 112;
        if (dist > 0 && dist < radius) {
          const push = (1 - dist / radius) * 8;
          targetX += (dx / dist) * push;
          targetY += (dy / dist) * push;
        }
      }
      if (node.dragging) {
        node.x = node.dragX;
        node.y = node.dragY;
        moving = true;
        return;
      }
      springTowards(node, targetX, targetY, dt);
      const speed = Math.hypot(node.vx, node.vy);
      const dist = Math.hypot(targetX - node.x, targetY - node.y);
      if (speed < 12 && dist < 0.35) {
        node.x = targetX;
        node.y = targetY;
        node.vx = 0;
        node.vy = 0;
        node.momentum = false;
      } else {
        moving = true;
      }
    });
    paint();
    if (moving) {
      raf = requestAnimationFrame(tick);
      return;
    }
    stopLoop();
  }

  function rubberband(overshoot, dimension) {
    const constant = 0.55;
    const span = Math.max(dimension, 1);
    return (overshoot * span * constant) / (span + constant * Math.abs(overshoot));
  }

  function clampDrag(node, x, y) {
    const maxX = Math.max(0, stageWidth - node.w);
    const maxY = Math.max(0, stageHeight - node.h);
    node.dragX = x < 0 ? -rubberband(-x, stageWidth) : (x > maxX ? maxX + rubberband(x - maxX, stageWidth) : x);
    node.dragY = y < 0 ? -rubberband(-y, stageHeight) : (y > maxY ? maxY + rubberband(y - maxY, stageHeight) : y);
  }

  function pushSample(x, y) {
    if (!drag) return;
    const t = performance.now();
    drag.samples.push({ x, y, t });
    const minT = t - 100;
    while (drag.samples.length > 2 && drag.samples[0].t < minT) drag.samples.shift();
  }

  function endDrag() {
    if (!drag) return;
    const current = drag;
    drag = null;
    current.node.dragging = false;
    const samples = current.samples || [];
    if (current.active && samples.length >= 2) {
      const first = samples[0];
      const last = samples[samples.length - 1];
      const span = (last.t - first.t) / 1000;
      if (span > 0.008) {
        const cap = 1400;
        let vx = Math.max(-cap, Math.min(cap, (last.x - first.x) / span));
        let vy = Math.max(-cap, Math.min(cap, (last.y - first.y) / span));
        const hx = current.node.homeX - last.x;
        const hy = current.node.homeY - last.y;
        const homeDist = Math.hypot(hx, hy) || 1;
        const toward = (vx * hx + vy * hy) / homeDist;
        if (toward < 0) {
          vx *= 0.25;
          vy *= 0.25;
        }
        current.node.vx = vx;
        current.node.vy = vy;
        current.node.momentum = Math.hypot(vx, vy) > 80;
      }
    }
    root.classList.remove("is-dragging");
    if (stage.hasPointerCapture?.(current.id)) {
      try { stage.releasePointerCapture(current.id); } catch (err) { /* already released */ }
    }
    wake();
  }

  stage.addEventListener("pointerdown", (event) => {
    if (drag || reduced || event.button > 0) return;
    const el = event.target.closest?.("[data-node]");
    if (!el) return;
    const node = byId.get(el.dataset.node);
    if (!node) return;
    suppressClick = false;
    readOrigin();
    drag = {
      node,
      id: event.pointerId,
      sx: event.clientX,
      sy: event.clientY,
      ox: node.x,
      oy: node.y,
      type: event.pointerType,
      active: false,
      samples: []
    };
  });

  stage.addEventListener("pointermove", (event) => {
    if (drag && drag.id !== event.pointerId) return;
    pointer.x = event.clientX - originX;
    pointer.y = event.clientY - originY;
    pointer.inside = true;
    if (drag && !reduced) {
      const dx = event.clientX - drag.sx;
      const dy = event.clientY - drag.sy;
      if (!drag.active) {
        if (Math.hypot(dx, dy) < 6) {
          if (needsMotion()) wake();
          return;
        }
        if (drag.type === "touch" && Math.abs(dy) >= Math.abs(dx)) return;
        drag.active = true;
        drag.node.dragging = true;
        drag.node.momentum = false;
        drag.node.vx = 0;
        drag.node.vy = 0;
        root.classList.add("is-dragging");
        stage.setPointerCapture?.(event.pointerId);
        clampDrag(drag.node, drag.ox + dx, drag.oy + dy);
        drag.node.x = drag.node.dragX;
        drag.node.y = drag.node.dragY;
        drag.samples = [{ x: drag.node.x, y: drag.node.y, t: performance.now() }];
        paintDrag(drag.node);
        wake();
        return;
      }
      clampDrag(drag.node, drag.ox + dx, drag.oy + dy);
      drag.node.x = drag.node.dragX;
      drag.node.y = drag.node.dragY;
      pushSample(drag.node.x, drag.node.y);
      paintDrag(drag.node);
      wake();
      return;
    }
    if (needsMotion()) wake();
  });

  function finishPointer(event) {
    if (!drag || drag.id !== event.pointerId) return;
    const dist = Math.hypot(event.clientX - drag.sx, event.clientY - drag.sy);
    const dragged = drag.active;
    endDrag();
    suppressClick = dragged || dist > 6;
  }

  stage.addEventListener("pointerup", finishPointer);
  stage.addEventListener("pointercancel", (event) => {
    if (!drag || drag.id !== event.pointerId) return;
    endDrag();
    suppressClick = true;
  });
  stage.addEventListener("lostpointercapture", (event) => {
    if (!drag || drag.id !== event.pointerId) return;
    endDrag();
    suppressClick = true;
  });
  stage.addEventListener("pointerenter", readOrigin);
  window.addEventListener("scroll", readOrigin, { passive: true, capture: true });
  stage.addEventListener("pointerleave", () => {
    pointer.inside = false;
    hoverId = null;
    highlight(shownId());
    if (needsMotion()) wake();
  });
  stage.addEventListener("pointerover", (event) => {
    if (!canHover()) return;
    const el = event.target.closest?.("[data-node]");
    hoverId = el ? el.dataset.node : null;
    highlight(shownId());
  });
  stage.addEventListener("pointerout", (event) => {
    if (!canHover()) return;
    const next = event.relatedTarget;
    if (next && stage.contains(next)) {
      const el = next.closest?.("[data-node]");
      hoverId = el ? el.dataset.node : null;
    } else {
      hoverId = null;
    }
    highlight(shownId());
  });
  stage.addEventListener("focusin", (event) => {
    const el = event.target.closest?.("[data-node]");
    focusId = el ? el.dataset.node : null;
    highlight(shownId());
  });
  stage.addEventListener("focusout", (event) => {
    if (stage.contains(event.relatedTarget)) return;
    focusId = null;
    highlight(shownId());
  });
  stage.addEventListener("click", (event) => {
    if (!suppressClick) return;
    event.preventDefault();
    event.stopPropagation();
    suppressClick = false;
  }, true);

  const onMotionChange = () => {
    reduced = motionQuery.matches;
    if (reduced) {
      endDrag();
      stopLoop();
    }
    layoutKey = "";
    layout();
  };
  if (typeof motionQuery.addEventListener === "function") motionQuery.addEventListener("change", onMotionChange);

  if ("IntersectionObserver" in window) {
    const visibility = new IntersectionObserver((entries) => {
      onScreen = entries.some((entry) => entry.isIntersecting);
      if (onScreen) wake();
      else {
        endDrag();
        stopLoop();
      }
    });
    visibility.observe(stage);
  }

  document.addEventListener("visibilitychange", () => {
    pageVisible = document.visibilityState !== "hidden";
    if (pageVisible) wake();
    else {
      endDrag();
      stopLoop();
    }
  });

  if ("ResizeObserver" in window) {
    const resizeObserver = new ResizeObserver(() => {
      const width = Math.round(stage.clientWidth);
      if (!width || width === observedWidth) return;
      layout();
    });
    resizeObserver.observe(root);
  } else {
    window.addEventListener("resize", () => {
      layoutKey = "";
      layout();
    });
  }

  document.getElementById("langToggle")?.addEventListener("click", () => {
    layoutKey = "";
    requestAnimationFrame(layout);
  });

  nodes.forEach((node) => node.el.setAttribute("draggable", "false"));
  layout();
  if (document.fonts?.ready) {
    document.fonts.ready.then(() => {
      layoutKey = "";
      layout();
    }).catch(() => {});
  }
}

document.addEventListener("DOMContentLoaded", () => {
  applyTheme(activeTheme);
  initProjectQuestions();
  applyLanguage(activeLang);
  document.getElementById("langToggle")?.addEventListener("click", () => {
    activeLang = activeLang === "ko" ? "en" : "ko";
    applyLanguage(activeLang);
  });
  document.getElementById("themeToggle")?.addEventListener("click", () => {
    activeTheme = activeTheme === "dark" ? "light" : "dark";
    applyTheme(activeTheme);
  });
  initFilters();
  initProjectNumbers();
  initSmoothScroll();
  initGalleries();
  initHistoryPanels();
  initMobileMenu();
  initContactCopy();
  initHeroGraph();
  initHeroShader();
  initReveal();
});

function initHeroShader() {
  const hero = document.querySelector(".hero-section");
  const canvas = hero && hero.querySelector(".hero-shader");
  if (!hero || !canvas) return;
  const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const frag = "#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nuniform vec2 uRes,uCss;uniform float uTime;uniform vec3 uAmt,uBg,uTop,uAccent;float hash(vec2 p){vec3 p3=fract(vec3(p.xyx)*.1031);p3+=dot(p3,p3.yzx+33.33);return fract((p3.x+p3.y)*p3.z);}float noise(vec2 p){vec2 i=floor(p);vec2 f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x),f.y);}void main(){vec2 css=gl_FragCoord.xy*(uCss/max(uRes,vec2(1.)));float dist=length(fract(css/22.)-.5)*22.;float dots=1.-smoothstep(.55,1.55,dist);vec2 nuv=css*.0031;float field=noise(nuv+vec2(uTime*.018,uTime*.011));field=field*.7+noise(nuv*1.9-uTime*.009)*.3;float alpha=dots*uAmt.x*(.22+.78*clamp(field,0.,1.));vec2 p=css/max(uCss,vec2(1.));vec2 q=(p-vec2(.8,.46))/vec2(.32,.5);vec3 col=mix(uBg,uTop,clamp(p.y,0.,1.));col=mix(col,uAccent,exp(-dot(q,q))*uAmt.y);col+=(hash(gl_FragCoord.xy)-.5)*uAmt.z;col=mix(col,uAccent,alpha);gl_FragColor=vec4(clamp(col,0.,1.),1.);}";
  let gl, prog, buf, loc, shown, blend, rafId = 0, blendRaf = 0, loopOn = false, onScreen = false, ready = false, dead = false, last = 0, fitW = 0;
  let pageOn = document.visibilityState !== "hidden", resizeObserver, intersectionObserver;

  function parseColor(input) {
    let h = String(input || "").trim();
    if (h.charAt(0) !== "#") return [0.063, 0.071, 0.082];
    h = h.slice(1);
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    const n = parseInt(h.slice(0, 6), 16);
    if (n !== n) return [0.063, 0.071, 0.082];
    return [(n >> 16) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
  }

  function readColors() {
    const style = getComputedStyle(document.body);
    const light = document.body.classList.contains("light");
    const bg = parseColor(style.getPropertyValue("--color-canvas"));
    return {
      bg,
      top: light ? parseColor(style.getPropertyValue("--color-surface")) : bg.slice(),
      accent: parseColor(style.getPropertyValue("--color-accent")),
      amt: light ? [0.1, 0.055, 0.01] : [0.13, 0.08, 0.016]
    };
  }

  function cloneColors(source) {
    return {
      bg: source.bg.slice(),
      top: source.top.slice(),
      accent: source.accent.slice(),
      amt: source.amt.slice()
    };
  }

  function mixColors(now) {
    if (!blend || !shown) return;
    const t = Math.min(1, (now - blend.at) / 120);
    const eased = 1 - (1 - t) * (1 - t);
    ["bg", "top", "accent", "amt"].forEach((key) => {
      const from = blend.from[key];
      const to = blend.to[key];
      const out = shown[key];
      out[0] = from[0] + (to[0] - from[0]) * eased;
      out[1] = from[1] + (to[1] - from[1]) * eased;
      out[2] = from[2] + (to[2] - from[2]) * eased;
    });
    if (t >= 1) blend = null;
  }

  function stopLoop() {
    loopOn = false;
    cancelAnimationFrame(rafId);
    rafId = 0;
  }

  function removeCanvas() {
    if (dead) return;
    dead = true;
    stopLoop();
    cancelAnimationFrame(blendRaf);
    gl = null;
    fitW = 0;
    if (resizeObserver) resizeObserver.disconnect();
    if (intersectionObserver) intersectionObserver.disconnect();
    canvas.remove();
    syncHeroShaderColors = function () {};
  }

  function setup() {
    const opts = { alpha: false, antialias: false, depth: false, stencil: false, powerPreference: "low-power" };
    gl = canvas.getContext("webgl", opts) || canvas.getContext("experimental-webgl", opts);
    if (!gl) return false;
    fitW = 0;
    const compile = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return shader;
      console.warn(gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    };
    const vs = compile(gl.VERTEX_SHADER, "attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}");
    const fs = compile(gl.FRAGMENT_SHADER, frag);
    if (!vs || !fs) return false;
    prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.bindAttribLocation(prog, 0, "a");
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.warn(gl.getProgramInfoLog(prog));
      return false;
    }
    buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    loc = {};
    ["uRes", "uCss", "uTime", "uAmt", "uBg", "uTop", "uAccent"].forEach((name) => {
      loc[name] = gl.getUniformLocation(prog, name);
    });
    return true;
  }

  function fit() {
    if (!gl) return false;
    if (fitW) return true;
    const cssW = hero.clientWidth;
    const cssH = hero.clientHeight;
    if (!cssW || !cssH) return false;
    const scale = Math.min(window.devicePixelRatio || 1, cssW <= 720 ? 1 : 1.5) * 0.75;
    const w = Math.max(1, Math.round(cssW * scale));
    const h = Math.max(1, Math.round(cssH * scale));
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
    gl.useProgram(prog);
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.viewport(0, 0, w, h);
    gl.uniform2f(loc.uRes, w, h);
    gl.uniform2f(loc.uCss, cssW, cssH);
    fitW = cssW;
    return true;
  }

  function draw(time) {
    if (!gl || gl.isContextLost() || !fit()) return;
    if (!shown) shown = cloneColors(readColors());
    mixColors(time || performance.now());
    const c = shown;
    gl.uniform3fv(loc.uBg, c.bg);
    gl.uniform3fv(loc.uTop, c.top);
    gl.uniform3fv(loc.uAccent, c.accent);
    gl.uniform3f(loc.uAmt, c.amt[0], c.amt[1], c.amt[2]);
    gl.uniform1f(loc.uTime, reducedQuery.matches ? 0 : time * 0.001);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    canvas.classList.add("is-ready");
  }

  function loop(now) {
    if (!loopOn) return;
    rafId = requestAnimationFrame(loop);
    if (!blend && now - last < 33) return;
    last = now;
    draw(now);
  }

  function blendLoop(now) {
    blendRaf = 0;
    if (!blend || loopOn || dead) return;
    draw(now);
    if (blend) blendRaf = requestAnimationFrame(blendLoop);
  }

  function syncRun() {
    if (dead || !gl || gl.isContextLost()) return;
    if (onScreen && pageOn && !reducedQuery.matches) {
      if (!loopOn) {
        loopOn = true;
        last = 0;
        rafId = requestAnimationFrame(loop);
      }
      return;
    }
    stopLoop();
    if (onScreen && pageOn) draw(0);
  }

  syncHeroShaderColors = function () {
    const next = readColors();
    if (!shown) {
      shown = cloneColors(next);
      return;
    }
    blend = { from: cloneColors(shown), to: next, at: performance.now() };
    if (loopOn || dead || !gl || gl.isContextLost() || !onScreen || !pageOn) return;
    if (!blendRaf) blendRaf = requestAnimationFrame(blendLoop);
  };

  function ensure() {
    if (dead || !ready || !onScreen) return;
    if (gl) return syncRun();
    try {
      if (!setup()) removeCanvas();
      else syncRun();
    } catch (error) {
      removeCanvas();
    }
  }

  canvas.addEventListener("webglcontextlost", (event) => {
    event.preventDefault();
    stopLoop();
    cancelAnimationFrame(blendRaf);
    blendRaf = 0;
    gl = null;
    fitW = 0;
    canvas.classList.remove("is-ready");
  });
  canvas.addEventListener("webglcontextrestored", () => {
    if (!dead) ensure();
  });

  const refit = () => {
    fitW = 0;
    if (gl && pageOn && onScreen) draw(performance.now());
  };
  if ("ResizeObserver" in window) {
    resizeObserver = new ResizeObserver(refit);
    resizeObserver.observe(hero);
  } else {
    window.addEventListener("resize", refit);
  }

  document.addEventListener("visibilitychange", () => {
    pageOn = document.visibilityState !== "hidden";
    syncRun();
  });
  if (typeof reducedQuery.addEventListener === "function") reducedQuery.addEventListener("change", syncRun);

  if ("IntersectionObserver" in window) {
    intersectionObserver = new IntersectionObserver((entries) => {
      onScreen = entries.some((entry) => entry.isIntersecting);
      ensure();
    });
    intersectionObserver.observe(hero);
  } else {
    onScreen = true;
  }

  const kick = () => {
    const run = () => {
      ready = true;
      ensure();
    };
    if (window.requestIdleCallback) window.requestIdleCallback(run, { timeout: 1500 });
    else window.setTimeout(run, 1);
  };
  if (document.readyState === "complete") kick();
  else window.addEventListener("load", kick, { once: true });
}
