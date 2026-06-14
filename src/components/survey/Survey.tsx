import { useMemo, useState } from "react";
import { GOLD, GREEN } from "../../constants/colors";
import { products } from "../../data/products";
import { questions } from "../../data/questions";
import type { Answers } from "../../types/survey";
import { OptionButton } from "./OptionButton";
import { ProductCard } from "./ProductCard";
import { Progress } from "./Progress";
import { ThankYou } from "./ThankYou";

export default function Survey() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [done, setDone] = useState(false);
  const [search, setSearch] = useState("");

  const qIndex = step - 1;
  const question = questions[qIndex];
  const total = questions.length;

  const selectedProductIds = Array.isArray(answers[2]) ? answers[2] : [];

  const setAnswer = (questionId: number, value: string | string[]) => {
    setAnswers((currentAnswers) => ({ ...currentAnswers, [questionId]: value }));
  };

  const toggleProduct = (productId: string) => {
    setAnswer(
      2,
      selectedProductIds.includes(productId)
        ? selectedProductIds.filter((id) => id !== productId)
        : [...selectedProductIds, productId]
    );
  };

  const canContinue = () => {
    if (step === 0) return true;
    if (!question) return false;
    if (question.type === "multi-product") return selectedProductIds.length > 0;
    return Boolean(answers[question.id]);
  };

  const goNext = async () => {
  if (step < total) {
    setStep((currentStep) => currentStep + 1);
    return;
  }

  try {
    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ answers })
    });

    if (!response.ok) {
      throw new Error("Failed to submit survey");
    }

    setDone(true);
  } catch (error) {

    console.error("Error submitting survey:", error);
    alert("Something went wrong. Please try again.");
  }
};

  const goBack = () => {
    setStep((currentStep) => Math.max(0, currentStep - 1));
  };


  
  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return products;

    return products.filter(
      (product) =>
        product.label.toLowerCase().includes(query) ||
        product.desc.toLowerCase().includes(query)
    );
  }, [search]);

  if (step === 0) {
    return (
      <main style={{ minHeight: "100vh", background: "#f8f8f8", display: "flex", flexDirection: "column", fontFamily: "sans-serif" }}>
        <section style={{ background: `linear-gradient(160deg,${GREEN},#0d3010)`, padding: "40px 24px 32px", textAlign: "center" }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>🌍</div>
          <div style={{ color: GOLD, fontSize: 12, fontWeight: 800, letterSpacing: 2, marginBottom: 4 }}>AFRICAN SAUCE LTD</div>
          <h1 style={{ color: "#fff", fontSize: 22, fontWeight: 900, fontFamily: "Georgia,serif", lineHeight: 1.2, margin: "0 0 8px" }}>
            Student Food Demand Survey
          </h1>
          <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 13 }}>Swansea University — in partnership with the Students&apos; Union</div>
        </section>

        <section style={{ flex: 1, padding: "24px 20px" }}>
          <div style={{ background: "#fff", borderRadius: 12, padding: "18px 16px", border: "1px solid #eee", marginBottom: 16 }}>
            <div style={{ color: GREEN, fontSize: 12, fontWeight: 800, marginBottom: 6 }}>Why we need your help</div>
            <p style={{ color: "#555", fontSize: 13, lineHeight: 1.6, margin: 0 }}>
              We are working with Swansea University Students&apos; Union to bring authentic African food to campus — in the Costcutter store and through smart vending. Your answers will directly shape what food is available to you.
            </p>
          </div>

          <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
            {[["⏱️", "2 minutes"], ["🔒", "Anonymous"], ["🎯", "7 questions"]].map(([emoji, label]) => (
              <div key={label} style={{ flex: 1, background: "#fff", borderRadius: 10, padding: "10px 6px", textAlign: "center", border: "1px solid #eee" }}>
                <div style={{ fontSize: 18 }}>{emoji}</div>
                <div style={{ fontSize: 10, color: "#888", marginTop: 3, fontWeight: 600 }}>{label}</div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setStep(1)}
            style={{
              width: "100%",
              background: GREEN,
              color: "#fff",
              border: "none",
              borderRadius: 25,
              padding: 16,
              fontSize: 16,
              fontWeight: 800,
              cursor: "pointer",
              fontFamily: "sans-serif",
              boxShadow: `0 4px 16px ${GREEN}44`
            }}
          >
            Start Survey →
          </button>
        </section>
      </main>
    );
  }

  if (done) {
    return (
      <main style={{ minHeight: "100vh", background: "#f8f8f8", display: "flex", flexDirection: "column", fontFamily: "sans-serif" }}>
        <header style={{ background: `linear-gradient(160deg,${GREEN},#0d3010)`, padding: "16px 20px" }}>
          <span style={{ color: GOLD, fontSize: 11, fontWeight: 800, letterSpacing: 1 }}>AFRICAN SAUCE LTD</span>
        </header>
        <section style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <ThankYou />
        </section>
      </main>
    );
  }

  if (!question) return null;

  return (
    <main style={{ minHeight: "100vh", background: "#f8f8f8", display: "flex", flexDirection: "column", fontFamily: "sans-serif" }}>
      <header
        style={{
          background: `linear-gradient(160deg,${GREEN},#0d3010)`,
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <button
          type="button"
          onClick={goBack}
          style={{ background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", borderRadius: 20, padding: "5px 12px", fontSize: 12, cursor: "pointer" }}
        >
          ← Back
        </button>
        <span style={{ color: GOLD, fontSize: 11, fontWeight: 800, letterSpacing: 1 }}>AFRICAN SAUCE</span>
        <div style={{ width: 60 }} />
      </header>

      <Progress current={step} total={total} />

      {question.type !== "multi-product" && (
        <section
          style={{
            margin: "0 20px 16px",
            background: `linear-gradient(135deg,${GREEN}18,${GOLD}18)`,
            borderRadius: 14,
            height: 100,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            border: `1px solid ${GREEN}22`
          }}
        >
          <div style={{ fontSize: 36 }}>{question.image}</div>
          <div style={{ fontSize: 11, color: GREEN, fontWeight: 600, textAlign: "center", padding: "0 12px" }}>{question.imageLabel}</div>
        </section>
      )}

      <section style={{ padding: "0 20px 12px" }}>
        <h2 style={{ color: "#1a1a1a", fontSize: 17, fontWeight: 800, lineHeight: 1.35, margin: "0 0 4px" }}>{question.question}</h2>
        {question.type === "multi-product" && <div style={{ color: "#888", fontSize: 12 }}>{question.sub}</div>}
      </section>

      <section style={{ flex: 1, padding: "0 20px", overflowY: "auto" }}>
        {question.type === "single" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingBottom: 16 }}>
            {question.options.map((option) => (
              <OptionButton key={option} text={option} selected={answers[question.id] === option} onClick={() => setAnswer(question.id, option)} />
            ))}
          </div>
        )}

        {question.type === "multi-product" && (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <div style={{ fontSize: 12, color: GREEN, fontWeight: 700, whiteSpace: "nowrap" }}>
                {selectedProductIds.length > 0 ? `${selectedProductIds.length} selected` : "Tap to select"}
              </div>
              <input
                placeholder="Search products…"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                style={{ flex: 1, border: "1px solid #ddd", borderRadius: 20, padding: "6px 12px", fontSize: 12, outline: "none", background: "#fff" }}
              />
            </div>

            {selectedProductIds.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
                {selectedProductIds.map((id) => {
                  const product = products.find((item) => item.id === id);
                  if (!product) return null;

                  return (
                    <button
                      type="button"
                      key={id}
                      onClick={() => toggleProduct(id)}
                      style={{ background: product.color, color: "#fff", border: "none", borderRadius: 20, padding: "3px 10px", fontSize: 10, fontWeight: 700, cursor: "pointer" }}
                    >
                      {product.label} ✕
                    </button>
                  );
                })}
              </div>
            )}

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, paddingBottom: 16 }}>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} selected={selectedProductIds.includes(product.id)} onToggle={toggleProduct} />
              ))}
              {filteredProducts.length === 0 && (
                <div style={{ gridColumn: "1/-1", textAlign: "center", color: "#aaa", fontSize: 13, padding: "24px 0" }}>No products match your search</div>
              )}
            </div>
          </>
        )}
      </section>

      <footer style={{ padding: "16px 20px 28px" }}>
        <button
          type="button"
          onClick={goNext}
          disabled={!canContinue()}
          style={{
            width: "100%",
            background: canContinue() ? GREEN : "#ccc",
            color: "#fff",
            border: "none",
            borderRadius: 25,
            padding: 16,
            fontSize: 16,
            fontWeight: 800,
            cursor: canContinue() ? "pointer" : "default",
            fontFamily: "sans-serif",
            transition: "background 0.2s",
            boxShadow: canContinue() ? `0 4px 16px ${GREEN}44` : "none"
          }}
        >
          {step === total ? "Submit ✓" : "Continue →"}
        </button>
      </footer>
    </main>
  );
}
