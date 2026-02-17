import Image from "next/image";

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
      <div>
        <Image
          src="/maya.png"
          alt="Dr. Maya Reynolds"
          width={450}
          height={550}
          className="rounded-xl shadow-lg"
          unoptimized
        />
      </div>

      <div>
        <h2 className="text-3xl font-semibold mb-6">
          Meet Dr. Maya Reynolds, PsyD
        </h2>

        <p className="mb-4">
          I am a Licensed Clinical Psychologist based in Santa Monica, CA,
          specializing in anxiety, trauma, panic, and burnout.
        </p>

        <p className="mb-4">
          My approach integrates CBT, EMDR, mindfulness, and body-based
          techniques to address both the emotional and physiological impact
          of stress and trauma.
        </p>

        <p>
          I offer both in-person therapy in Santa Monica and secure telehealth
          sessions across California.
        </p>
      </div>
    </section>
  );
}
