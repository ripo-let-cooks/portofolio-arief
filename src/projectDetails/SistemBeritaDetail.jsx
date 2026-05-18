import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";
import { PROJECT_DETAILS_DATA } from "../data/projectDetailsData";

export const project = {
  ...PROJECT_DETAILS_DATA["sistem-berita-online"],
  heroImg: "/berita-thumbnail.png",
};

export default function SistemBeritaDetail({ onClose, mode }) {
  const screenshots = [
    "/berita-1.png",
    "/berita-2.png",
    "/berita-3.png",
    "/berita-4.png",
  ];

  const gallerySection = (
    <div className="mt-8 mb-12">
      <h2 className="text-xs font-mono font-bold uppercase tracking-[0.12em] md:tracking-[0.16em] text-black/40 mb-6 flex items-center gap-3">
        <span className="w-6 h-[1px] bg-black/20" /> System Previews
      </h2>
      
      {/* Desktop Screenshots Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8">
        {screenshots.map((src, index) => (
          <div key={index} className="w-full transition-transform duration-500 hover:-translate-y-2">
            
            {/* Desktop Mockup Frame with CSS Cropping to hide Taskbar & Browser Tabs */}
            <div className="bg-white rounded-t-xl rounded-b-xl border border-black/10 shadow-[0_10px_40px_rgb(0,0,0,0.1)] relative flex flex-col overflow-hidden">
              
              {/* Fake Browser Top Bar (Mac style) */}
              <div className="h-8 bg-neutral-100 border-b border-black/5 flex items-center px-4 gap-2 z-10 shrink-0">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              
              {/* Screen Area with Cropping */}
              <div className="relative w-full overflow-hidden bg-neutral-200" style={{ paddingTop: '54%' }}>
                <img 
                  src={src} 
                  alt={`News Portal Screenshot ${index + 1}`} 
                  className="absolute left-0 w-full h-[115%] object-cover object-top"
                  style={{ top: '-8%' }}
                  onError={(e) => {
                    e.target.src = "/berita-thumbnail.png"; // fallback
                  }}
                />
              </div>

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
