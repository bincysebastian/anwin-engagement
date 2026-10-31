import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Anwin & Bia | Engagement Invitation",
    short_name: "Anwin & Bia",
    description: "Save the date — December 28th, 2026. Anwin & Bia engagement invitation and RSVP.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#fffefa",
    theme_color: "#fffefa",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
