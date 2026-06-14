import type { Product } from "../types/survey";

import pepperClassicSauce from "../assets/products/pepperClassicSauce.jpeg";
import redPalmOil from "../assets/products/redPalmOil.jpeg";
import garlicButter from "../assets/products/GarlicButter.jpeg";
import africanSauceSuya from "../assets/products/AfricanSauceSuya.jpeg";
import staple from "../assets/products/Staple.jpeg";
import stewMix from "../assets/products/StewMix.jpeg";
import egusiSoup from "../assets/products/EgusiSoup.jpeg";
import ogbonoSoup from "../assets/products/OgbonoSoup.jpeg";
import leafs from "../assets/products/Leafs.jpeg";
import moiMoi from "../assets/products/MoiMoi.jpeg";
import catFishGarlicButter from "../assets/products/catFishGarlicButter.jpeg";
import catFishSuyaFlavor from "../assets/products/catFishSuyaFlavor.jpeg";
import catFishPepperClassic from "../assets/products/catFishPepperClassic.jpeg";
import puffPuffMix from "../assets/products/PuffPuffMix.jpeg";
import akaraMix from "../assets/products/AkaraMix.jpeg";

export const products: Product[] = [
  { id: "pepper_classic", label: "Pepper Classic Sauce", desc: "Rich · Spicy · Flavourful · 160g", color: "#c62828", img: pepperClassicSauce },
  { id: "red_palm_oil", label: "Red Palm Oil", desc: "Pure & Natural · Authentic · Pouch", color: "#d32f2f", img: redPalmOil },
  { id: "garlic_butter", label: "Garlic Butter Sauce", desc: "Rich · Savoury · Aromatic · 160g", color: "#1b5e20", img: garlicButter },
  { id: "suya_sauce", label: "Suya Sauce", desc: "Bold · Smoky · Spicy · 160g", color: "#bf360c", img: africanSauceSuya },
  { id: "plantain_flour", label: "Plantain Flour", desc: "100% Pure Plantain · Gluten Free · 1kg", color: "#558b2f", img: staple },
  { id: "yam_flour", label: "Yam Flour", desc: "100% Pure Yam · Gluten Free · 1kg", color: "#795548", img: staple },
  { id: "stew_mix", label: "Instant Stew Mix", desc: "Authentic · 100% Natural · 500g", color: "#b71c1c", img: stewMix },
  { id: "egusi_soup", label: "Instant Egusi Soup", desc: "Premium Melon Seeds · 500g", color: "#f57f17", img: egusiSoup },
  { id: "ogbono_soup", label: "Instant Ogbono Soup", desc: "Premium Ogbono Seeds · 500g", color: "#1b5e20", img: ogbonoSoup },
  { id: "ugu_leaf", label: "Ugu Leaf", desc: "Fresh & Natural · 100% Quality", color: "#2e7d32", img: leafs },
  { id: "bitter_leaf", label: "Bitter Leaf", desc: "Fresh & Natural · 100% Quality", color: "#388e3c", img: leafs },
  { id: "water_leaf", label: "Water Leaf", desc: "Fresh & Natural · 100% Quality", color: "#43a047", img: leafs },
  { id: "scent_leaf", label: "Scent Leaf", desc: "Fresh & Natural · 100% Quality", color: "#4caf50", img: leafs },
  { id: "moi_moi", label: "Moi Moi Mix", desc: "Premium Beans · 100% Natural · 1kg", color: "#e64a19", img: moiMoi },
  { id: "catfish_garlic", label: "Cat Fish – Garlic Butter", desc: "Infused · Freeze Dried · 500g", color: "#558b2f", img: catFishGarlicButter },
  { id: "catfish_suya", label: "Cat Fish – Suya Flavour", desc: "Infused · Freeze Dried · 500g", color: "#bf360c", img: catFishSuyaFlavor },
  { id: "catfish_pepper", label: "Cat Fish – Pepper Classic", desc: "Infused · Freeze Dried · 500g", color: "#c62828", img: catFishPepperClassic },

  { id: "spice_garlic", label: "Garlic Butter Spice", desc: "100% Natural · No MSG · 100g", color: "#1b5e20", img: garlicButter },
  { id: "spice_pepper", label: "Pepper Classic Spice", desc: "100% Natural · No MSG · 100g", color: "#c62828", img: pepperClassicSauce },
  { id: "spice_suya", label: "Suya Spice", desc: "100% Natural · No MSG · 100g", color: "#bf360c", img: africanSauceSuya },

  { id: "puff_puff", label: "Puff Puff Mix", desc: "Authentic · Just add water · 1kg", color: "#e64a19", img: puffPuffMix },
  { id: "akara", label: "Akara Mix", desc: "Premium Quality Beans · 1kg", color: "#e65100", img: akaraMix }
];