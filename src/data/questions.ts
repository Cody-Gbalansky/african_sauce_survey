import type { SurveyQuestion } from "../types/survey";

export const questions: SurveyQuestion[] = [
  {
    id: 1,
    type: "single",
    question: "Are you of African or international heritage?",
    image: "🌍",
    imageLabel: "African Sauce — Swansea University Student Survey",
    options: ["Yes — African heritage", "Yes — other international heritage", "No — UK/Welsh heritage", "Prefer not to say"]
  },
  {
    id: 2,
    type: "multi-product",
    question: "Which African food products do you most struggle to find locally?",
    sub: "Select all that apply"
  },
  {
    id: 3,
    type: "single",
    question: "Would you buy authentic African food from a vending machine on campus?",
    image: "🏧",
    imageLabel: "Smart vending · available 24/7 on campus",
    options: ["Yes — definitely", "Yes — I would try it", "Maybe — depends on price", "Probably not", "No"]
  },
  {
    id: 4,
    type: "single",
    question: "How much would you spend per visit at an African food vending machine?",
    image: "💷",
    imageLabel: "Products range from £1.29 to £11.99",
    options: ["Under £3", "£3 – £5", "£5 – £8", "Over £8", "I wouldn't use it"]
  },
  {
    id: 5,
    type: "single",
    question: "How far do you currently travel to buy African food?",
    image: "📍",
    imageLabel: "Nearest African shop — Swansea city centre",
    options: ["I don't buy African food", "On campus / within walking distance", "Up to 2 miles", "2–5 miles", "More than 5 miles"]
  },
  {
    id: 6,
    type: "single",
    question: "Would you use WhatsApp or an app to order African groceries for delivery or collection?",
    image: "📱",
    imageLabel: "African Sauce App — coming soon to campus",
    options: ["Yes — I'd use WhatsApp", "Yes — I'd use an app", "Yes — either works", "Maybe", "No"]
  },
  {
    id: 7,
    type: "single",
    question: "What is your current student status?",
    image: "🎓",
    imageLabel: "Swansea University — Bay Campus or Singleton",
    options: ["UK / Home student", "International student (non-African)", "International student (African)", "Postgraduate", "Staff / Other"]
  }
];
