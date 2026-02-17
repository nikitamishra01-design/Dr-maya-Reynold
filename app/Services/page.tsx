export default function Services() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12">
          Areas of Specialization
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Anxiety & Panic Therapy
            </h3>
            <p>
              Support for adults experiencing chronic worry, overthinking,
              panic attacks, or high-functioning anxiety.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Trauma Recovery (EMDR & CBT)
            </h3>
            <p>
              Therapy for individuals impacted by trauma with a focus on safety
              and gradual healing.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Burnout & Stress Therapy
            </h3>
            <p>
              Helping professionals manage burnout and chronic stress while
              building healthier boundaries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
