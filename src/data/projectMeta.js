export const PROJECT_META = [
  {
    id: 1,
    slug: "pbl-short-film",
    title: "PBL Short Film",
    category: "Video Production",
    color: "bg-blue-500",
    img: "https://img.youtube.com/vi/unT67lWGBUc/maxresdefault.jpg",
  },
  {
    id: 2,
    slug: "presensi-pnl",
    title: "Aplikasi Presensi PNL",
    category: "Mobile App Development",
    color: "bg-purple-400",
    img: "/presensi-thumbnail.png",
  },
  {
    id: 3,
    slug: "sistem-berita-online",
    title: "Sistem Berita Online",
    category: "Fullstack Web Development",
    color: "bg-blue-600",
    img: "/berita-thumbnail.png",
  },
  {
    id: 4,
    slug: "museum-lhokseumawe",
    title: "Aplikasi Museum Lhokseumawe",
    category: "UI/UX Design",
    color: "bg-emerald-600",
    img: "/museum-thumbnail.jpg",
  },
  {
    id: 5,
    slug: "fotografi-monokrom",
    title: "Photography",
    category: "Mobile Photography",
    color: "bg-zinc-800",
    img: "/fotografi-thumbnail.jpg",
  },
  {
    id: 6,
    slug: "ukm-ieclop",
    title: "UKM IECLOP Website",
    category: "Frontend Web Development",
    color: "bg-indigo-600",
    img: "/ieclop-thumbnail.jpg",
  },
];

export const PROJECT_META_BY_SLUG = PROJECT_META.reduce((accumulator, item) => {
  accumulator[item.slug] = item;
  return accumulator;
}, {});
