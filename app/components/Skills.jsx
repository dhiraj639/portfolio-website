"use client";

export default function Skills() {
  const skills = [
    "React",
    "Next.js",
    "Docker",
    "AWS",
    "Git",
    "Linux",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white p-20"
    >
      <h2 className="text-5xl font-bold mb-12 text-center">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-900 p-10 rounded-3xl text-center hover:scale-105 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}