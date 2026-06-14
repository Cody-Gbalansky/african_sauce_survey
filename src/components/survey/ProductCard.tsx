import type { CSSProperties, SyntheticEvent } from "react";
import type { Product } from "../../types/survey";

type ProductCardProps = {
  product: Product;
  selected: boolean;
  onToggle: (productId: string) => void;
};

export function ProductCard({ product, selected, onToggle }: ProductCardProps) {
  const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    image.style.display = "none";

    if (image.parentElement) {
      image.parentElement.style.background = `${product.color}33`;
    }
  };

  const cardStyle: CSSProperties = {
    border: `2px solid ${selected ? product.color : "#e0e0e0"}`,
    borderRadius: 12,
    padding: "0 0 8px",
    cursor: "pointer",
    background: selected ? `${product.color}10` : "#fff",
    transition: "all 0.18s",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
    position: "relative",
    overflow: "hidden"
  };

  return (
    <button type="button" onClick={() => onToggle(product.id)} style={{ ...cardStyle, width: "100%", textAlign: "inherit" }}>
      {selected && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 6,
            right: 6,
            zIndex: 2,
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: product.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 6px rgba(0,0,0,0.3)"
          }}
        >
          <span style={{ color: "#fff", fontSize: 12, fontWeight: 900 }}>✓</span>
        </div>
      )}

     <div
  style={{
    width: "100%",
    height: 120,
    overflow: "hidden",
    borderRadius: "10px 10px 0 0",
    flexShrink: 0,
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    boxSizing: "border-box",
  }}
>
  <img
    src={product.img}
    alt={product.label}
    style={{
      width: "100%",
      height: "100%",
      
      objectFit: "contain",
      display: "block",
    }}
  />
</div>
      <div style={{ padding: "0 6px", width: "100%", boxSizing: "border-box" }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: "#1a1a1a", textAlign: "center", lineHeight: 1.2 }}>
          {product.label}
        </div>
        <div style={{ fontSize: 9, color: "#888", textAlign: "center", marginTop: 2 }}>{product.desc}</div>
      </div>

      {selected && <div aria-hidden="true" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: product.color }} />}
    </button>
  );
}
