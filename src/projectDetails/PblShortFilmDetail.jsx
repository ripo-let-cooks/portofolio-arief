import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

import { PROJECT_DETAILS_DATA } from "../data/projectDetailsData";

export const project = {
  ...PROJECT_DETAILS_DATA["pbl-short-film"],
  heroImg: "https://img.youtube.com/vi/unT67lWGBUc/maxresdefault.jpg",
};

export default function PblShortFilmDetail({ onClose, mode }) {
  return <ProjectCaseLayout project={project} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}
