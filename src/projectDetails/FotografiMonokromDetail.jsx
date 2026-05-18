import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";
import { PROJECT_DETAILS_DATA } from "../data/projectDetailsData";

export const project = {
  ...PROJECT_DETAILS_DATA["fotografi-monokrom"],
  heroImg: "/fotografi-thumbnail.jpg",
};

export default function FotografiMonokromDetail({ onClose, mode }) {
  const photos = [
    {
      src: "/fotografi-1.jpg",
      composition: "Leading Lines",
      lighting: "Natural",
      perspective: "-",
      camera: "ISO 125, f/1.8, 1/60s",
    },
    {
      src: "/fotografi-2.jpg",
      composition: "-",
      lighting: "Natural",
      perspective: "High Angle",
      camera: "ISO 100, f/1.8, 1/97s",
    },
    {
      src: "/fotografi-3.jpg",
      composition: "-",
      lighting: "Natural",
      perspective: "Low Angle",
      camera: "ISO 50, f/1.8, 1/121s",
    },
    {
      src: "/fotografi-4.jpg",
      composition: "-",
      lighting: "Natural",
      perspective: "Bird's Eye View",
      camera: "ISO 25, f/1.8, 1/122s",
    },
    {
      src: "/fotografi-5.jpg",
      composition: "Framing",
      lighting: "Natural",
      perspective: "-",
      camera: "ISO 50, f/1.8, 1/121s",
    },
  ];

  const gallerySection = (
    <div className="mt-10 mb-16">
      <h2 className="text-xs font-mono font-bold uppercase tracking-[0.12em] md:tracking-[0.16em] text-black/40 mb-6 flex items-center gap-3">
        <span className="w-6 h-[1px] bg-black/20" /> Exhibition Gallery
      </h2>
      
      {/* 3-Column Grid for Portrait Photography (3:4 Ratio) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 pb-8">
        {photos.map((photo, index) => (
          <div 
            key={index} 
            className="w-full bg-neutral-100 rounded-2xl md:rounded-3xl p-2 md:p-3 shadow-lg border border-black/5 cursor-pointer group transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            
            {/* Exact 3:4 Aspect Ratio Container matching the photos */}
            <div className="w-full aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden relative bg-black/5">
              <img 
                src={photo.src} 
                alt={`Monochrome Photography ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
                onError={(e) => {
                  e.target.src = "/fotografi-thumbnail.jpg"; // fallback
                }}
              />
              {/* Very thin inner shadow/vignette */}
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-xl md:rounded-2xl pointer-events-none" />
            </div>
            
            {/* Photographic Metadata (EXIF) */}
            <div className="mt-4 px-2 pb-2">
              <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-[10px] md:text-[11px] text-black/60 font-mono tracking-wider uppercase">
                <div>
                  <span className="block font-bold text-black/90 mb-0.5">Composition</span>
                  <span>{photo.composition}</span>
                </div>
                <div>
                  <span className="block font-bold text-black/90 mb-0.5">Lighting</span>
                  <span>{photo.lighting}</span>
                </div>
                <div>
                  <span className="block font-bold text-black/90 mb-0.5">Perspective</span>
                  <span>{photo.perspective}</span>
                </div>
                <div>
                  <span className="block font-bold text-black/90 mb-0.5">iPhone XR</span>
                  <span>{photo.camera}</span>
                </div>
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
