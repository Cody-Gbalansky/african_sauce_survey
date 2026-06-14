export type Product = {
  id: string;
  label: string;
  desc: string;
  color: string;
  img: string;
};

export type SingleQuestion = {
  id: number;
  type: "single";
  question: string;
  image: string;
  imageLabel: string;
  options: string[];
};

export type MultiProductQuestion = {
  id: number;
  type: "multi-product";
  question: string;
  sub: string;
};

export type SurveyQuestion = SingleQuestion | MultiProductQuestion;
export type Answers = Record<number, string | string[]>;
