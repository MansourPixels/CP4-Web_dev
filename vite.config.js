import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "")
  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api/tmdb": {
          target: "https://api.themoviedb.org/3",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/tmdb/, ""),
          headers: env.TMDB_ACCESS_TOKEN ? { Authorization: `Bearer ${env.TMDB_ACCESS_TOKEN}`, accept: "application/json" } : {},
        },
      },
    },
    test: { environment: "jsdom", setupFiles: "./src/test/setup.js" },
  }
})
