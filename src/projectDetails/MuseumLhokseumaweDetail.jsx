import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";
import { PROJECT_DETAILS_DATA } from "../data/projectDetailsData";

export const project = {
  ...PROJECT_DETAILS_DATA["museum-lhokseumawe"],
  heroImg: "/museum-thumbnail.jpg",
};

export default function MuseumLhokseumaweDetail({ onClose, mode }) {
  const screenshots = [
    "/museum-1.png",
    "/museum-2.png",
    "/museum-3.png",
    "/museum-4.png",
  ];

  const gallerySection = (
    <div className="mt-8 mb-12">
      <h2 className="text-xs font-mono font-bold uppercase tracking-[0.12em] md:tracking-[0.16em] text-black/40 mb-6 flex items-center gap-3">
        <span className="w-6 h-[1px] bg-black/20" /> App Previews
      </h2>
      
      {/* 4-Column Grid for Mobile Screenshots in 9:16 Ratio */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 pb-8">
        {screenshots.map((src, index) => (
          <div key={index} className="w-full">
            
            {/* 9:16 Container with Cropping via Scale */}
            <div className="w-full aspect-[9/16] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-black/5 bg-black relative cursor-pointer group">
              
              {/* Image scaled to crop Figma UI & Windows Taskbar */}
              <img 
                src={src} 
                alt={`Museum App Screenshot ${index + 1}`} 
                className="absolute inset-0 w-full h-full object-cover object-center scale-[1.22] transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.28]"
                onError={(e) => {
                  e.target.src = "/museum-thumbnail.jpg"; // fallback
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
