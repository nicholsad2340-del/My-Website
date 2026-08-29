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
};

export const jobPhotoSets = {
  attic: [
    { src: jobs3, alt: 'Finished attic insulation around framing and ductwork' },
  ] satisfies ProjectPhoto[],
  framing: [
    { src: jobs5, alt: 'Installer placing insulation in a new construction wall' },
    { src: jobs6, alt: 'Insulated wall cavities ready for the next phase' },
  ] satisfies ProjectPhoto[],
  installation: [
    { src: jobs8, alt: 'Insulation tucked around attic structure' },
    { src: jobs9, alt: 'Fiberglass insulation fitted into a framed wall' },
  ] satisfies ProjectPhoto[],
  details: [
    { src: jobs10, alt: 'Close detail of insulation installed inside wall framing' },
    { src: jobs11, alt: 'Finished insulation work inside a framed room' },
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

        <div
          className={`grid gap-3 md:gap-4 auto-rows-fr ${
            photos.length <= 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-2 md:grid-cols-4'
          }`}
        >
          {photos.map((photo, index) => (
            <figure
              key={photo.src}
              className={`group relative overflow-hidden rounded-xl ${
                photos.length > 2 && index === 0
                  ? 'col-span-2 row-span-2 min-h-[350px] md:min-h-[520px]'
                  : 'min-h-[300px] md:min-h-[420px]'
              }`}
              data-testid={`figure-project-photo-${index}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-testid={`img-project-photo-${index}`}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}