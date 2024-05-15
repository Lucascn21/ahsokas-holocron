export default function manifest() {
  return {
    theme_color: "#5c03d8",
    background_color: "#30b7e8",
    icons: [
      {
        src: "./favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "./maskable_icon.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "./favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "./android-chrome-192x192.png",
        purpose: "maskable",
        sizes: "any",
        type: "image/png",
      },
      {
        purpose: "maskable",
        sizes: "512x512",
        src: "./icon512_maskable.png",
        type: "image/png",
      },
      {
        purpose: "any",
        sizes: "512x512",
        src: "./icon512_rounded.png",
        type: "image/png",
      },
    ],
    screenshots: [
      {
        src: "./screenshot_1.jpg",
        sizes: "1080x1920",
        type: "image/jpg",
        form_factor: "wide",
        label: "Homescreen",
      },
      {
        src: "./screenshot_2.jpg",
        sizes: "1080x1920",
        type: "image/jpg",
        form_factor: "wide",
        label: "Episode Data",
      },
      {
        src: "./screenshot_3.jpg",
        sizes: "1080x1920",
        type: "image/jpg",
        form_factor: "wide",
        label: "Character List",
      },
      {
        src: "./screenshot_4.jpg",
        sizes: "1080x1920",
        type: "image/jpg",
        form_factor: "wide",
        label: "Detailed info",
      },
      {
        src: "./ahsoka_drawing2.jpg",
        sizes: "330x331",
        type: "image/jpg",
        form_factor: "narrow",
        label: "A cool drawing of Ahsoka Tano",
      },
    ],
    orientation: "any",
    display: "standalone",
    dir: "auto",
    lang: "en-US",
    name: "Ahsoka's Holocron",
    short_name: "AhsHolocron",
    start_url: "/",
    scope: "/",
    description: "Ahsoka's Appreciation in Next.Js.",
    id: "/",
  };
}
