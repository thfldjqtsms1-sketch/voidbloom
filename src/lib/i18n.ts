export type Lang = "en" | "ko";

const dict = {
  en: {
    nav: { about: "About", work: "Work", contact: "Contact", process: "Process" },
    hero: { tagline: "Where Emptiness Becomes Art", scroll: "Explore the Void" },
    about: {
      title: "We Create Immersive Worlds",
      p1: "VOIDBLOOM is an avant-garde digital art studio crafting immersive experiences at the intersection of sound, light, and motion.",
      p2: "Our installations transform empty spaces into living, breathing artworks — environments that respond, evolve, and resonate with every visitor who steps inside the void.",
    },
    philosophy: {
      title: "The Manifesto of Emptiness",
      text: "We believe that void is not an absence, but a presence of possibility. Every empty space holds a frequency waiting to be tuned, a movement waiting to be realized. Our work is to listen to the silence and illuminate the darkness, creating a bridge between the digital ephemeral and the physical visceral.",
      vision: "To redefine the boundary between human perception and architectural space through algorithmic grace and sensory saturation."
    },
    process: {
      title: "Methodology",
      sound: {
        name: "Spatial Audio",
        desc: "We utilize ambisonic soundscapes and generative wave-field synthesis to create auditory environments that move with the viewer, blurring the line between source and space."
      },
      light: {
        name: "Luminance Sculpting",
        desc: "Light is treated as a physical material. Using custom LED arrays and laser projection, we carve geometry out of the air, making the invisible visible through high-frequency modulation."
      },
      motion: {
        name: "Kinetic Systems",
        desc: "Integration of high-torque robotics and fluid dynamics simulations allows our installations to breathe. Motion is mapped to environmental sensors, ensuring a symbiotic relationship with visitors."
      },
    },
    categories: {
      title: "Dimensions",
      sound: { name: "SOUND", desc: "Spatial audio landscapes that envelop and transform perception" },
      light: { name: "LIGHT", desc: "Programmable luminance sculpting the invisible architecture of space" },
      motion: { name: "MOTION", desc: "Kinetic systems breathing life into the stillness of the void" },
    },
    exhibitions: {
      title: "Major Installations",
      items: [
        {
          name: "Echoes of Nothing",
          year: "2024",
          loc: "DDP, Seoul",
          desc: "A 40-channel spatial audio installation exploring the feedback loop between human presence and architectural silence."
        },
        {
          name: "Phosphene Garden",
          year: "2024",
          loc: "Mori Art Museum, Tokyo",
          desc: "An organic light sculpture consisting of 4,000 fiber-optic nodes responding to microscopic vibrations in the floor."
        },
        {
          name: "Sine / Void",
          year: "2023",
          loc: "Kraftwerk, Berlin",
          desc: "A massive kinetic installation where 12 industrial robots choreograph a laser mesh within a former power plant."
        },
        {
          name: "Hollow Frequency",
          year: "2023",
          loc: "MoMA PS1, New York",
          desc: "A meditative environment utilizing infra-sound and low-frequency oscillations to physically resonate with the visitor's core."
        },
      ],
    },
    cta: { text: "Enter the Void", sub: "Ready for your next sensory shift?" },
    footer: { rights: "© 2024 VOIDBLOOM. All rights reserved." },
  },
  ko: {
    nav: { about: "소개", work: "작업", contact: "연락", process: "프로세스" },
    hero: { tagline: "공허가 예술이 되는 곳", scroll: "보이드 탐험" },
    about: {
      title: "몰입의 세계를 창조합니다",
      p1: "보이드블룸은 사운드, 빛, 모션의 교차점에서 몰입형 경험을 만드는 아방가르드 디지털 아트 스튜디오입니다.",
      p2: "우리의 설치작품은 빈 공간을 살아 숨쉬는 예술작품으로 변환합니다 — 보이드 안으로 들어서는 모든 방문자에게 반응하고, 진화하고, 공명하는 환경을 만듭니다.",
    },
    philosophy: {
      title: "공허의 선언어",
      text: "우리는 공허가 부재가 아니라 가능성의 존재라고 믿습니다. 모든 빈 공간은 조율되기를 기다리는 주파수와 실현되기를 기다리는 움직임을 품고 있습니다. 우리의 작업은 침묵에 귀를 기울이고 어둠을 밝혀, 디지털의 덧없음과 물리적인 본능 사이의 가교를 만드는 것입니다.",
      vision: "알고리즘적 우아함과 감각적 포화를 통해 인간의 지각과 건축적 공간 사이의 경계를 재정의합니다."
    },
    process: {
      title: "방법론",
      sound: {
        name: "공간 오디오",
        desc: "엠비소닉 사운드스케이프와 생성적 파동장 합성 기술을 활용하여 관람객을 따라 움직이는 청각 환경을 구축하고, 소리의 근원과 공간 사이의 경계를 허뭅니다."
      },
      light: {
        name: "광도 조각",
        desc: "빛을 물리적인 재료처럼 다룹니다. 커스텀 LED 어레이와 레이저 프로젝션을 통해 공기 중에 기하학적 형태를 조각하며, 고주파 변조를 통해 보이지 않는 것을 시각화합니다."
      },
      motion: {
        name: "키네틱 시스템",
        desc: "고토크 로보틱스와 유체 역학 시뮬레이션의 결합을 통해 설치물에 생명력을 불어넣습니다. 움직임은 환경 센서에 매핑되어 방문객과의 공생 관계를 형성합니다."
      },
    },
    categories: {
      title: "차원",
      sound: { name: "사운드", desc: "감각을 감싸고 변형시키는 공간 오디오 랜드스케이프" },
      light: { name: "빛", desc: "보이지 않는 공간의 건축을 조각하는 프로그래밍 가능한 빛" },
      motion: { name: "모션", desc: "공허의 정적 속에 생명을 불어넣는 키네틱 시스템" },
    },
    exhibitions: {
      title: "주요 설치 작품",
      items: [
        {
          name: "무(無)의 메아리",
          year: "2024",
          loc: "DDP, 서울",
          desc: "인간의 존재와 건축적 침묵 사이의 피드백 루프를 탐구하는 40채널 공간 오디오 설치물입니다."
        },
        {
          name: "인광 정원",
          year: "2024",
          loc: "도쿄 모리 미술관",
          desc: "바닥의 미세한 진동에 반응하는 4,000개의 광섬유 노드로 구성된 유기적 빛의 조각입니다."
        },
        {
          name: "사인 / 보이드",
          year: "2023",
          loc: "베를린 크라프트베르크",
          desc: "12대의 산업용 로봇이 전력 발전소 내부에서 레이저 메쉬를 군무로 연출하는 대규모 키네틱 설치물입니다."
        },
        {
          name: "텅 빈 주파수",
          year: "2023",
          loc: "뉴욕 MoMA PS1",
          desc: "초저주파음과 파동을 활용하여 방문객의 중심에 물리적 공명을 일으키는 명상적 환경입니다."
        },
      ],
    },
    cta: { text: "보이드에 입장하세요", sub: "새로운 감각의 전환을 경험할 준비가 되셨나요?" },
    footer: { rights: "© 2024 VOIDBLOOM. All rights reserved." },
  },
} as const;

export function getDict(lang: Lang) {
  return dict[lang];
}
