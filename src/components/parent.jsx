import { useTheme } from "../context/ThemeContext"
import Child from "./child"

const Parent = () => {
  const { theme, toggleMode } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className="app" style={{
      minHeight: "100vh",
      backgroundColor: isDark ? "#000" : "#F5F7FA",
    }}>

      <header style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: isDark ? "rgba(0, 0, 0, 0.85)" : "rgba(255, 255, 255, 0.88)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${isDark ? "rgba(128, 232, 245, 0.08)" : "rgba(0, 0, 0, 0.06)"}`,
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <span style={{ fontSize: "26px", fontWeight: "800", color: "#80E8F5" }}>
            ehya<span style={{ color: "#FFE600" }}>.</span>
          </span>

          <nav style={{ display: "flex", gap: "32px" }}>
            {["HOME", "LANDINGS", "PAGES", "DOCS", "HELP"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: "13px",
                  fontWeight: "600",
                  color: isDark ? "#9CA3AF" : "#6B7280",
                  letterSpacing: "1.2px",
                }}
              >
                {item}
              </a>
            ))}
          </nav>

          <button onClick={toggleMode} aria-label="Toggle theme" style={{
            padding: "8px",
            borderRadius: "10px",
            backgroundColor: isDark ? "rgba(255, 230, 0, 0.1)" : "rgba(0, 0, 0, 0.05)",
            display: "flex",
            fontSize: "22px",
            color: isDark ? "#FFE600" : "#0877E8",
          }}>
            <i className={isDark ? "ri-sun-line" : "ri-contrast-2-fill"} />
          </button>
        </div>
      </header>

      <main>
        <Child />
      </main>

      <footer style={{
        borderTop: `1px solid ${isDark ? "rgba(128, 232, 245, 0.06)" : "rgba(0, 0, 0, 0.06)"}`,
        padding: "32px 24px",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: "20px", fontWeight: "800", color: "#80E8F5" }}>ehya<span style={{ color: "#FFE600" }}>.</span></span>
          <p style={{ fontSize: "13px", color: isDark ? "#9CA3AF" : "#6B7280" }}>&copy; 2026 ehya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Parent