type HiraganaRow =
  | "あ"
  | "か"
  | "さ"
  | "た"
  | "な"
  | "は"
  | "ま"
  | "や"
  | "ら"
  | "わ"
  | "ん";

export const HIRAGANA_MAP: Record<HiraganaRow, readonly string[]> = {
  あ: ["あ", "い", "う", "え", "お"],
  か: ["か", "き", "く", "け", "こ"],
  さ: ["さ", "し", "す", "せ", "そ"],
  た: ["た", "ち", "つ", "て", "と"],
  な: ["な", "に", "ぬ", "ね", "の"],
  は: ["は", "ひ", "ふ", "へ", "ほ"],
  ま: ["ま", "み", "む", "め", "も"],
  や: ["や", "ゆ", "よ"],
  ら: ["ら", "り", "る", "れ", "ろ"],
  わ: ["わ", "を"],
  ん: ["ん"],
} as const;
