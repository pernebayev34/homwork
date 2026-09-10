import { useTheme } from "../context/ThemeContext"

const Child = () => {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const bg = isDark ? "#11121C" : "#FFFFFF"
  const text = isDark ? "#FFFFFF" : "#11121C"
  const sub = isDark ? "#9CA3AF" : "#6B7280"
  const border = isDark ? "rgba(128, 232, 245, 0.06)" : "rgba(0, 0, 0, 0.06)"

  const card = {
    backgroundColor: bg,
    border: `1px solid ${border}`,
    borderRadius: "20px",
    padding: "40px",
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 24px 60px" }}>

      <section style={{ ...card, display: "flex", alignItems: "center", gap: "40px" }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: "44px", fontWeight: "900", lineHeight: "1.1", color: text }}>
            BROWSE MILLION <span style={{ color: "#80E8F5" }}>PRODUCTS</span> FOR YOUR NEEDS
          </h1>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: sub, margin: "20px 0 32px", maxWidth: "420px" }}>
            Find the best deals on thousands of products. Shop smart, save big, and enjoy free delivery.
          </p>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="text"
              placeholder="I want to buy..."
              style={{
                flex: 1,
                padding: "14px 16px",
                borderRadius: "10px",
                border: `1px solid ${border}`,
                backgroundColor: isDark ? "#000" : "#F3F4F6",
                color: text,
              }}
            />
            <button style={{ backgroundColor: "#0877E8", color: "#fff", padding: "14px 28px", borderRadius: "10px", fontWeight: "700" }}>
              SEARCH
            </button>
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img
            src="https://koolkishan.github.io/react-ecommerce/static/media/home.629de4aa7e8ce767acf4.png"
            alt="Shopping"
            style={{ width: "100%", maxWidth: "420px", height: "auto" }}
          />
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "20px", marginTop: "20px" }}>

        <div style={{ ...card, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
          <div>
            <span style={{ display: "inline-block", fontSize: "10px", fontWeight: "700", color: "#000", backgroundColor: "#80E8F5", padding: "4px 12px", borderRadius: "6px" }}>
              LIMITED TIME
            </span>
            <h2 style={{ fontSize: "32px", fontWeight: "900", color: text, margin: "14px 0 10px" }}>WEEKLY DEALS</h2>
            <p style={{ fontSize: "13px", lineHeight: "1.6", color: sub, marginBottom: "24px", maxWidth: "300px" }}>
              Free Delivery on all orders this week. Don't miss out on amazing discounts.
            </p>
            <button style={{ backgroundColor: "#0877E8", color: "#fff", padding: "12px 28px", borderRadius: "10px", fontWeight: "700" }}>
              SHOP NOW
            </button>
          </div>
          <img src="/service1.png" alt="Weekly Deals" style={{ width: "180px", height: "180px", objectFit: "contain" }} />
        </div>

        <div style={{ ...card, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <span style={{ display: "inline-block", fontSize: "10px", fontWeight: "700", color: "#000", backgroundColor: "#FFE600", padding: "4px 12px", borderRadius: "6px" }}>
              ANNIVERSARY
            </span>
            <h2 style={{ fontSize: "26px", fontWeight: "900", color: text, margin: "14px 0 8px", lineHeight: "1.1" }}>
              MONTHLY DEALS
            </h2>
            <p style={{ fontSize: "13px", lineHeight: "1.6", color: sub, marginBottom: "20px" }}>
              Special anniversary offers with up to 50% off.
            </p>
          </div>
          <button
            style={{
              alignSelf: "flex-start",
              backgroundColor: isDark ? "rgba(255, 230, 0, 0.12)" : "rgba(255, 230, 0, 0.2)",
              color: "#FFE600",
              padding: "10px 24px",
              borderRadius: "10px",
              fontWeight: "700",
            }}
          >
            EXPLORE
          </button>
        </div>

      </section>

      <div style={{ ...card, marginTop: "20px", display: "flex", alignItems: "center", gap: "20px" }}>
        <div>
          <h3 style={{ fontSize: "16px", fontWeight: "800", color: text }}>FREE DELIVERY</h3>
          <p style={{ fontSize: "13px", color: sub, marginTop: "4px" }}>On all orders over $50. No hidden fees, no surprises.</p>
        </div>
        <button style={{ marginLeft: "auto", backgroundColor: "#80E8F5", color: "#000", padding: "12px 28px", borderRadius: "10px", fontWeight: "700" }}>
          GET STARTED
        </button>
      </div>

    </div>
  )
}

export default Child