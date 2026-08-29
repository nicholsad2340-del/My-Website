import jobs1 from '@assets/jobs1_1788023621573.jpg';
import jobs2 from '@assets/jobs2_1788023621575.jpg';
import jobs3 from '@assets/jobs3_1788023621576.jpg';
import jobs4 from '@assets/jobs4_1788023621576.jpg';
import jobs5 from '@assets/jobs5_1788023621577.jpg';
import jobs6 from '@assets/jobs6_1788023621577.jpg';
import jobs7 from '@assets/jobs7_1788023621578.jpg';
import jobs8 from '@assets/jobs8_1788023621578.jpg';
import jobs9 from '@assets/jobs9_1788023621579.jpeg';
import jobs10 from '@assets/jobs10_1788023621579.jpeg';
import jobs11 from '@assets/jobs11_1788023621580.jpeg';

export type ProjectPhoto = {
  src: string;
  alt: string;
  label: string;
};

export const jobPhotoSets = {
  attic: [
    { src: jobs1, alt: 'Fresh blown-in insulation measured in an attic', label: 'Attic coverage' },
    { src: jobs2, alt: 'Blown-in insulation across an attic floor', label: 'Consistent depth' },
    { src: jobs3, alt: 'Finished attic insulation around framing and ductwork', label: 'Complete coverage' },
    { src: jobs7, alt: 'Blown-in insulation filling an attic corner', label: 'Hard-to-reach areas' },
    { src: jobs8, alt: 'Insulation installed around attic framing', label: 'A careful install' },
  ] satisfies ProjectPhoto[],
  framing: [
    { src: jobs4, alt: 'Fiberglass batts installed between wall studs', label: 'Wall framing' },
    { src: jobs5, alt: 'Installer placing insulation in a new construction wall', label: 'New construction' },
    { src: jobs6, alt: 'Insulated wall cavities ready for the next phase', label: 'Ready for finish work' },
    { src: jobs9, alt: 'Fiberglass insulation fitted into a framed wall', label: 'A precise fit' },
  ] satisfies ProjectPhoto[],
  installation: [
    { src: jobs4, alt: 'Pink fiberglass batts fitted around a doorway', label: 'Clean edges' },
    { src: jobs5, alt: 'Insulation installation underway in a bright new build', label: 'Work in progress' },
    { src: jobs6, alt: 'Insulation filling wall cavities before drywall', label: 'Built to perform' },
    { src: jobs1, alt: 'Attic insulation reaching the recommended depth', label: 'Energy savings' },
    { src: jobs3, alt: 'Insulation surrounding attic framing', label: 'Thorough coverage' },
    { src: jobs8, alt: 'Insulation tucked around attic structure', label: 'Details matter' },
  ] satisfies ProjectPhoto[],
  details: [
    { src: jobs10, alt: 'Close detail of insulation installed inside wall framing', label: 'The details matter' },
    { src: jobs11, alt: 'Finished insulation work inside a framed room', label: 'Done right' },
  ] satisfies ProjectPhoto[],
};

type ProjectGalleryProps = {
  photos: ProjectPhoto[];
  eyebrow: string;
  title: string;
  description: string;
  dark?: boolean;
};

export default function ProjectGallery({
  photos,
  eyebrow,
  title,
  description,
  dark = false,
}: ProjectGalleryProps) {
  return (
    <section
      className={`py-24 px-4 ${dark ? 'bg-secondary text-white' : 'bg-white'}`}
      data-testid="section-project-gallery"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-12">
          <span
            className={`font-bold tracking-[0.18em] uppercase text-sm ${
              dark ? 'text-[#7ed6a8]' : 'text-accent'
            }`}
            data-testid="text-project-gallery-eyebrow"
          >
            {eyebrow}
          </span>
          <h2
            className={`text-4xl md:text-5xl font-serif font-bold mt-3 ${
              dark ? 'text-white' : 'text-foreground'
            }`}
            data-testid="heading-project-gallery"
          >
            {title}
          </h2>
          <p
            className={`text-lg leading-relaxed mt-5 ${
              dark ? 'text-white/75' : 'text-foreground/70'
            }`}
            data-testid="text-project-gallery-description"
          >
            {description}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-fr">
          {photos.map((photo, index) => (
            <figure
              key={photo.src}
              className={`group relative overflow-hidden rounded-xl ${
                index === 0
                  ? 'col-span-2 row-span-2 min-h-[350px] md:min-h-[520px]'
                  : 'min-h-[170px] md:min-h-[250px]'
              }`}
              data-testid={`figure-project-photo-${index}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-testid={`img-project-photo-${index}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-white font-semibold">
                {photo.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}