import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

import { PROJECT_DETAILS_DATA } from "../data/projectDetailsData";

export const project = {
  ...PROJECT_DETAILS_DATA["presensi-pnl"],
  heroImg: "/presensi-thumbnail.png",
};

export default function PresensiPnlDetail({ onClose, mode }) {
  // Gallery screenshots mapping (assuming images are placed in public folder)
  const screenshots = [
    "/presensi-1.png",
    "/presensi-2.png",
    "/presensi-3.png",
    "/presensi-4.png",
    "/presensi-5.png"
  ];

  const gallerySection = (
    <div className="mt-8 mb-12">
      <h2 className="text-xs font-mono font-bold uppercase tracking-[0.12em] md:tracking-[0.16em] text-black/40 mb-6 flex items-center gap-3">
        <span className="w-6 h-[1px] bg-black/20" /> App Previews
      </h2>
      {/* 5-Column Grid for Mobile Screenshots formatted like the Museum project */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 pb-8">
        {screenshots.map((src, index) => (
          <div key={index} className="w-full">
            
            {/* 9:16 Black Container matching Museum Figma style */}
            <div className="w-full aspect-[9/16] rounded-2xl md:rounded-3xl shadow-xl border border-neutral-800 bg-black relative cursor-pointer group flex items-center justify-center p-3 md:p-4 overflow-hidden">
              
              {/* Object-contain ensures 100% of the emulator UI is visible, no cropping! */}
              <img 
                src={src} 
                alt={`Presensi App Screenshot ${index + 1}`} 
                className="w-full h-full object-contain transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.08]"
                onError={(e) => {
                  e.target.src = "/presensi-thumbnail.png"; // fallback if image not found
                }}
              />
              
              {/* Subtle reflection overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.05] to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <ProjectCaseLayout
      project={project}
      onClose={onClose}
      closeLabel={mode === "modal" ? "Close" : "Back to Home"}
      mode={mode}
      preFeatureSection={gallerySection}
    />
  );
}
