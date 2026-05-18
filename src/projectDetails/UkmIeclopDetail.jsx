import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";
import { PROJECT_DETAILS_DATA } from "../data/projectDetailsData";
import { PROJECT_META_BY_SLUG } from "../data/projectMeta";

export const project = {
  ...PROJECT_DETAILS_DATA["ukm-ieclop"],
  ...PROJECT_META_BY_SLUG["ukm-ieclop"],
  heroImg: PROJECT_META_BY_SLUG["ukm-ieclop"].img,
};

export default function UkmIeclopDetail({ onClose, mode }) {
  const screenshots = [
    "/ieclop-1.png",
    "/ieclop-2.png",
    "/ieclop-3.png",
    "/ieclop-4.png",
  ];

  const preFeatureSection = (
    <div className="mt-8 mb-12">
      <h2 className="text-xs font-mono font-bold uppercase tracking-[0.12em] md:tracking-[0.16em] text-black/40 mb-6 flex items-center gap-3">
        <span className="w-6 h-[1px] bg-black/20" /> System Previews
      </h2>
      
      {/* Desktop Screenshots Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8">
        {screenshots.map((src, index) => (
          <div key={index} className="w-full transition-transform duration-500 hover:-translate-y-2 group">
            
            {/* Desktop Mockup Frame with CSS Cropping to hide Taskbar & Browser Tabs */}
            <div className="bg-white rounded-t-xl rounded-b-xl border border-black/10 shadow-[0_10px_40px_rgb(0,0,0,0.1)] relative flex flex-col overflow-hidden transition-shadow duration-500 group-hover:shadow-[0_20px_50px_rgb(0,0,0,0.15)]">
              
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
                  alt={`UKM IECLOP UI Preview ${index + 1}`} 
                  className="absolute left-0 w-full h-[115%] object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{ top: '-8%' }}
                  onError={(e) => {
                    e.target.src = "/ieclop-thumbnail.jpg"; // fallback
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
      preFeatureSection={preFeatureSection}
    />
  );
}
