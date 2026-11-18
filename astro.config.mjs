import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://wishvajithweerasinghe.work",

  vite: {
    plugins: [tailwindcss()],
  },
});