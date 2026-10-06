/**
 * A softly rotated polaroid frame — thick bottom margin, soft shadow, and a
 * handwritten-feeling caption in the Fraunces italic. It sits a few degrees
 * off-axis and gently straightens on hover: quiet delight, no bounce.
 *
 * TO ADD THE REAL PHOTO: drop the file in /public (e.g. /public/irina.jpg),
 * then replace the placeholder <div> below with:
 *
 *   <Image src="/irina.jpg" alt="Irina Drugea" width={640} height={720}
 *          className="h-full w-full object-cover" />
 *
 * ...and add `import Image from "next/image"` at the top.
 */
export default function Polaroid({ caption }: { caption: string }) {
  return (
    <figure className="group mx-auto w-full max-w-[17rem] -rotate-3 transition-transform duration-700 ease-gentle hover:-rotate-1 hover:-translate-y-1 motion-reduce:transition-none">
      <div className="rounded-[4px] bg-white/85 p-3 pb-0 shadow-bloom backdrop-blur-sm">
        {/* Photo well — swap the placeholder for a real <Image> (see above) */}
        <div
          className="flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-[2px]"
          style={{
            background:
              "linear-gradient(150deg, #D9C6F0 0%, #C9E4F5 48%, #FADCC4 100%)",
          }}
        >
          <span className="label-mono text-plum/40">Photo</span>
        </div>
        <figcaption className="px-1 py-4 text-center font-display text-base italic text-plum/60">
          {caption}
        </figcaption>
      </div>
    </figure>
  );
}
