import { GREEN } from "../../constants/colors";

export function ThankYou() {
  return (
    <div style={{ textAlign: "center", padding: "40px 24px" }}>
      <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
      <div style={{ color: GREEN, fontSize: 22, fontWeight: 900, fontFamily: "Georgia,serif", marginBottom: 8 }}>Thank you!</div>
      <div style={{ color: "#555", fontSize: 14, lineHeight: 1.6, marginBottom: 24 }}>
        Your response has been recorded. You&apos;re helping shape authentic African food access at Swansea University.
      </div>
      <div style={{ background: `${GREEN}12`, borderRadius: 12, padding: 16, border: `1px solid ${GREEN}33` }}>
        <div style={{ color: GREEN, fontSize: 11, fontWeight: 800, letterSpacing: 1, marginBottom: 4 }}>AFRICAN SAUCE</div>
        <div style={{ color: "#444", fontSize: 12, lineHeight: 1.5 }}>Follow us @africansauceltd · africansauce.co.uk</div>
      </div>
    </div>
  );
}
