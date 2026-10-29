// src/components/Img.jsx
const files = import.meta.glob("/src/shared/assets/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: "default",
});

const map = {};
for (const [path, url] of Object.entries(files)) {
  const file = path.split("/").pop();
  map[file.replace(/\.[^.]+$/, "")] = url;
}

export default function Img({ name, src, alt = "", className = "" }) {
  const url = src ?? map[name];
  if (!url) return null;
  return <img src={url} alt={alt} className={className} loading="lazy" />;
}