export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const answers = req.body.answers || {};

    const fields = {
      Heritage: answers[1] || "",
      Products: Array.isArray(answers[2]) ? answers[2].join(", ") : "",
      "Vending Interest": answers[3] || "",
      "Spend Per Visit": answers[4] || "",
      "Travel Distance": answers[5] || "",
      "Ordering Preference": answers[6] || "",
      "Student Status": answers[7] || "",
      "Submitted At": new Date().toISOString()
    };

    const response = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${encodeURIComponent(process.env.AIRTABLE_TABLE_NAME)}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ fields })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Airtable error:", data);
      return res.status(response.status).json(data);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({ error: "Failed to submit survey" });
  }
}