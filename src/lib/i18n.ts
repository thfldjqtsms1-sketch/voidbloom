export type Lang = "en" | "ko";

const dict = {
  en: {
    nav: { about: "About", work: "Work", contact: "Contact" },
    hero: { tagline: "Where Emptiness Becomes Art", scroll: "Scroll" },
    about: {
      title: "We Create Immersive Worlds",
      p1: "VOIDBLOOM is an avant-garde digital art studio crafting immersive experiences at the intersection of sound, light, and motion.",
      p2: "Our installations transform empty spaces into living, breathing artworks — environments that respond, evolve, and resonate with every visitor who steps inside the void.",
    },
    categories: {
      title: "Dimensions",
      sound: { name: "SOUND", desc: "Spatial audio landscapes that envelop and transform perception" },
      light: { name: "LIGHT", desc: "Programmable luminance sculpting the invisible architecture of space" },
      motion: { name: "MOTION", desc: "Kinetic systems breathing life into the stillness of the void" },
    },
    exhibitions: {
      title: "Selected Works",
      items: [
        { name: "Echoes of Nothing", year: "2024", loc: "Seoul" },
        { name: "Phosphene Garden", year: "2024", loc: "Tokyo" },
        { name: "Sine / Void", year: "2023", loc: "Berlin" },
        { name: "Hollow Frequency", year: "2023", loc: "New York" },
      ],
    },
    cta: { text: "Enter the Void", sub: "Experience our latest installation" },
    footer: { rights: "© 2024 VOIDBLOOM. All rights reserved." },
  },
  ko: {
    nav: { about: "소개", work: "작업", contact: "연락" },
    hero: { tagline: "공허가 예술이 되는 곳", scroll: "스크롤" },
    about: {
      title: "몰입의 세계를 창조합니다",
      p1: "보이드블룸은 사운드, 빛, 모션의 교차점에서 몰입형 경험을 만드는 아방가르드 디지털 아트 스튜디오입니다.",
      p2: "우리의 설치작품은 빈 공간을 살아 숨쉬는 예술작품으로 변환합니다 — 보이드 안으로 들어서는 모든 방문자에게 반응하고, 진화하고, 공명하는 환경을 만듭니다.",
    },
    categories: {
      title: "차원",
      sound: { name: "사운드", desc: "감각을 감싸고 변형시키는 공간 오디오 랜드스케이프" },
      light: { name: "빛", desc: "보이지 않는 공간의 건축을 조각하는 프로그래밍 가능한 빛" },
      motion: { name: "모션", desc: "공허의 정적 속에 생명을 불어넣는 키네틱 시스템" },
    },
    exhibitions: {
      title: "주요 작품",
      items: [
        { name: "무(無)의 메아리", year: "2024", loc: "서울" },
        { name: "인광 정원", year: "2024", loc: "도쿄" },
        { name: "사인 / 보이드", year: "2023", loc: "베를린" },
        { name: "텅 빈 주파수", year: "2023", loc: "뉴욕" },
      ],
    },
    cta: { text: "보이드에 입장하세요", sub: "최신 설치작품을 경험하세요" },
    footer: { rights: "© 2024 VOIDBLOOM. All rights reserved." },
  },
} as const;

export function getDict(lang: Lang) {
  return dict[lang];
}
