import { lazy } from "react";
import { PROJECT_META_BY_SLUG } from "../data/projectMeta";

const PROJECT_DETAIL_COMPONENTS = {
  "pbl-short-film": lazy(() => import("./PblShortFilmDetail")),
  "presensi-pnl": lazy(() => import("./PresensiPnlDetail")),
  "sistem-berita-online": lazy(() => import("./SistemBeritaDetail")),
  "museum-lhokseumawe": lazy(() => import("./MuseumLhokseumaweDetail")),
  "fotografi-monokrom": lazy(() => import("./FotografiMonokromDetail")),
  "ukm-ieclop": lazy(() => import("./UkmIeclopDetail")),
};

export function getProjectRouteConfig(slug) {
  const metadata = PROJECT_META_BY_SLUG[slug];
  if (!metadata) return null;

  return {
    ...metadata,
    Component: PROJECT_DETAIL_COMPONENTS[slug],
  };
}
