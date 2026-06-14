import { GREEN } from "../../constants/colors";

type OptionButtonProps = {
  text: string;
  selected: boolean;
  onClick: () => void;
};

export function OptionButton({ text, selected, onClick }: OptionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        width: "100%",
        border: `2px solid ${selected ? GREEN : "#e0e0e0"}`,
        borderRadius: 10,
        padding: "13px 16px",
        cursor: "pointer",
        background: selected ? `${GREEN}12` : "#fff",
        display: "flex",
        alignItems: "center",
        gap: 12,
        transition: "all 0.15s",
        textAlign: "left"
      }}
    >
      <div
        aria-hidden="true"
        style={{
          width: 22,
          height: 22,
          borderRadius: "50%",
          border: `2px solid ${selected ? GREEN : "#ccc"}`,
          background: selected ? GREEN : "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0
        }}
      >
        {selected && <span style={{ color: "#fff", fontSize: 12 }}>✓</span>}
      </div>
      <span style={{ fontSize: 14, color: "#1a1a1a" }}>{text}</span>
    </button>
  );
}
