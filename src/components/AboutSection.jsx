const skills = [
  "Problem Solving",
  "System Development",
  "Web Development",
  "Mobile Development",
  "Backend Development",
  "IoT Development",
  "Embedded Systems",
  "API Integration",
  "Database Integration",
  "Real-Time Systems",
  "UI/UX Awareness",
  "Continuous Learning",
];

const currentlyLearning = [
  "Python",
  "Cloud Computing",
  "APIs & API Development",
  "Backend Architecture",
  "DevOps",
  "AI Integration",
  "AI Automation",
  "Modern AI Technologies",
];

const hobbies = [
  { label: "Working Out", icon: "fitness_center" },
  { label: "Movies & Series", icon: "movie" },
  { label: "Anime", icon: "animation" },
  { label: "Studying", icon: "menu_book" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex flex-col w-full px-4 lg:px-[48px] py-24"
    >
      <div className="max-w-[1200px] mx-auto w-full flex flex-col gap-16">
        {/* Top Row: About Text + Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col gap-8 order-2 lg:order-1">
            <div className="flex items-center gap-4">
              <h2 className="font-display-lg text-display-lg text-primary">
                About
              </h2>
              <div className="h-[1px] flex-1 bg-outline-variant" />
            </div>

            <p className="font-body-lg text-body-lg text-on-surface">
              I am currently pursuing a degree in Information Technology at
              Quezon City University, driven by a deep fascination with how
              physical hardware interacts with software systems. My core
              interest lies in the Internet of Things (IoT), where I explore the
              bridge between embedded devices and cloud-based applications. I
              approach every project with an engineering mindset—prioritizing
              clean architecture, efficient data flow, and reliable execution.
            </p>

            {/* Education Timeline */}
            <div className="flex flex-col gap-6 mt-4 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-outline-variant">
              {/* QCU */}
              <div className="flex gap-6 relative">
                <div className="w-6 h-6 rounded-full bg-surface-container border-[3px] border-surface flex-shrink-0 z-10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="font-technical-label text-technical-label text-primary">
                    2023 — 2027
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface mt-1">
                    Quezon City University (QCU)
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Bachelor of Science in Information Technology (BSIT)
                  </p>
                </div>
              </div>

              {/* AICS */}
              <div className="flex gap-6 relative">
                <div className="w-6 h-6 rounded-full bg-surface-container border-[3px] border-surface flex-shrink-0 z-10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-outline-variant" />
                </div>
                <div className="flex flex-col">
                  <span className="font-technical-label text-technical-label text-on-surface-variant">
                    2021 — 2023
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface mt-1">
                    Asian Institute of Computer Studies (AICS)
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Senior High School — STEM Strand
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - My Photo */}
          <div className="lg:col-span-5 flex items-start justify-center relative pt-4 order-1 lg:order-2">
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, #001947 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative group">
              {/* Blue accent corners */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-lg" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-lg" />

              {/* Photo container */}
              <div className="relative w-64 h-72 md:w-72 md:h-80 rounded-xl overflow-hidden border border-outline-variant shadow-sm group-hover:shadow-md group-hover:border-primary/40 transition-all duration-500">
                <img
                  src="/Me/myPicture.jpg"
                  alt="John Kenneth Pitel"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
              </div>

              {/* Name label */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-surface border border-outline-variant rounded-lg shadow-sm">
                <span className="font-code-sm text-code-sm text-primary whitespace-nowrap">
                  John Kenneth Pitel
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="flex flex-col gap-5">
          <h3 className="font-technical-label text-technical-label text-primary uppercase tracking-widest flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Development Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center px-3 py-1.5 bg-surface-container-lowest border border-outline-variant rounded-lg font-technical-label text-[12px] text-on-surface hover:border-primary hover:text-primary transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Currently Learning Section */}
        <div className="flex flex-col gap-5">
          <h3 className="font-technical-label text-technical-label text-primary uppercase tracking-widest flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Currently Learning
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            Technologies and concepts I'm actively studying and experimenting
            with.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {currentlyLearning.map((item) => (
              <div
                key={item}
                className="flex items-center p-4 bg-surface-container-lowest border border-outline-variant rounded-xl hover:border-primary/30 transition-colors group"
              >
                <span className="font-technical-label text-[12px] text-primary group-hover:text-primary transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Hobbies & Interests */}
        <div className="flex flex-col gap-5">
          <h3 className="font-technical-label text-technical-label text-on-surface-variant uppercase tracking-widest flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-outline-variant" />
            Hobbies & Interests
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {hobbies.map((hobby) => (
              <div
                key={hobby.label}
                className="flex flex-col items-center gap-2 p-4 bg-surface-container-lowest border border-outline-variant rounded-xl hover:border-primary/30 transition-colors group"
              >
                <span className="material-symbols-outlined text-[24px] text-on-surface-variant group-hover:text-primary transition-colors">
                  {hobby.icon}
                </span>
                <span className="font-technical-label text-[11px] text-on-surface-variant text-center group-hover:text-on-surface transition-colors">
                  {hobby.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
