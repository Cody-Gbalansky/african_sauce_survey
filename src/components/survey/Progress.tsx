import { GOLD, GREEN } from "../../constants/colors";

type ProgressProps = {
  current: number;
  total: number;
};

export function Progress({ current, total }: ProgressProps) {
  return (
    <div style={{ padding: "0 20px 16px" }}>
      <div style={{ height: 4, background: "#f0f0f0", borderRadius: 2 }}>
        <div
          style={{
            height: "100%",
            width: `${(current / total) * 100}%`,
            background: `linear-gradient(90deg,${GREEN},${GOLD})`,
            borderRadius: 2,
            transition: "width 0.3s"
          }}
        />
      </div>
      <div style={{ textAlign: "right", fontSize: 11, color: "#aaa", marginTop: 4 }}>
        {current} of {total}
      </div>
    </div>
  );
}
