// 여행 팁 아이템
export type TTravelTipItem = {
  place?: string;
  district?: string;
  neighborhood?: string;
  category?: string;
  tips: string[]; // 실제 팁 문장들
};