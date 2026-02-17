import Image from "next/image";

export default function Office() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-6">
        A Calm Space for Healing
      </h2>

      <p className="max-w-3xl mx-auto mb-12">
        My Santa Monica office is designed to feel quiet, private, and
        grounding.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <Image
          src="/office1.jpeg"
          alt="Therapy Office"
          width={600}
          height={400}
          className="rounded-lg shadow-md object-cover w-full h-64"
          unoptimized
        />
        <Image
          src="/office2.jpeg"
          alt="Counseling Space"
          width={600}
          height={400}
          className="rounded-lg shadow-md object-cover w-full h-64"
          unoptimized
        />
      </div>
    </section>
  );
}
