import { useState } from 'react'

const projects = [
  {
    id: 'erbriwan',
    title: 'ERBriwan',
    subtitle: 'IoT / Emergency System',
    date: 'January 2026 – April 2026',
    icon: 'emergency',
    tags: ['ESP32', 'GPS', 'Node.js', 'REST API', 'Mobile App'],
    overview: 'An IoT-based emergency alert system using ESP32 and GPS modules to transmit real-time location data during distress events, with a Node.js backend and mobile application for responders.',
    problem: 'During emergencies, traditional alert systems lack precise real-time location data, making it difficult for responders to locate and assist people quickly.',
    solution: 'Built an integrated IoT emergency system where ESP32 devices with GPS modules transmit real-time location data to a Node.js REST API, which processes and routes emergency alerts to mobile users and responders with push notifications.',
    role: [
      'Built an IoT-based emergency alert system using ESP32 and GPS modules to transmit real-time location data during distress events',
      'Developed a Node.js REST API to receive, process, and route emergency alerts to mobile users and responders',
      'Created a mobile application for live incident monitoring and push notifications integrated with IoT device events',
    ],
    technologies: ['ESP32', 'GPS Modules', 'Node.js', 'REST API', 'Mobile Application', 'Push Notifications'],
    features: [
      'Real-time GPS location tracking during emergencies',
      'IoT device-to-cloud communication',
      'REST API for alert processing and routing',
      'Mobile app with live incident monitoring',
      'Push notifications to responders',
      'Hardware/backend/mobile integration',
    ],
    architecture: [
      { icon: 'sensors', label: 'ESP32 + GPS' },
      { connector: 'Location Data' },
      { icon: 'dns', label: 'Node.js API' },
      { connector: 'Push Alerts' },
      { icon: 'smartphone', label: 'Mobile App' },
      { connector: 'Notifications' },
      { icon: 'emergency', label: 'Responders' },
    ],
  },
  {
    id: 'barangay',
    title: 'Reports & Barangay Administration System',
    subtitle: 'Web Application',
    date: 'January 2026 – April 2026',
    icon: 'folder_managed',
    tags: ['React', 'JavaScript', 'Supabase'],
    overview: 'A web-based administrative system for barangay management with a React frontend and Supabase integration for real-time data management.',
    problem: 'Barangay offices often rely on manual processes for record-keeping, attendance monitoring, and report generation, leading to inefficiency and data inconsistencies.',
    solution: 'Developed a complete React-based web application integrated with Supabase that provides organized interfaces for record management, attendance monitoring, report generation, and administrative workflows with real-time data.',
    role: [
      'Developed the complete frontend interface using React and JavaScript, creating a user-friendly web-based system for barangay administration',
      'Designed and implemented cohesive interfaces for managing records, monitoring attendance, viewing system data, and generating reports',
      'Focused on responsive layouts, intuitive navigation, and clear data presentation to improve overall usability',
      'Integrated the frontend with Supabase to display and manage system data in real time',
    ],
    technologies: ['React', 'JavaScript', 'Supabase', 'Web Development'],
    features: [
      'Record management system',
      'Attendance monitoring',
      'Report generation',
      'Real-time data display via Supabase',
      'Responsive layouts',
      'Intuitive navigation and data presentation',
    ],
    architecture: [
      { icon: 'web', label: 'React Frontend' },
      { connector: 'API Calls' },
      { icon: 'database', label: 'Supabase' },
      { connector: 'Real-time Sync' },
      { icon: 'dashboard', label: 'Admin Dashboard' },
    ],
  },
  {
    id: 'sentrygas',
    title: 'SentryGas',
    subtitle: 'IoT / Safety System',
    date: 'August 2025 – December 2025',
    icon: 'local_fire_department',
    tags: ['ESP32', 'MQ-2', 'Firebase', 'Web App'],
    overview: 'An IoT-based gas and fire safety system using ESP32, MQ-2 gas sensors, and flame sensors for real-time hazard detection with automated safety responses and web-based monitoring.',
    problem: 'Gas leaks and fire hazards in enclosed spaces can escalate rapidly without immediate detection, putting lives and property at serious risk.',
    solution: 'Built a comprehensive safety system using ESP32 with MQ-2 gas sensors and flame sensors that detects hazards, triggers automated safety responses (solenoid valve, water spray, siren), and provides real-time monitoring through a web application with Firebase.',
    role: [
      'Developed an IoT-based gas and fire safety system using ESP32, MQ-2 gas sensors, and flame sensors for real-time hazard detection',
      'Integrated automated safety mechanisms, including a solenoid valve for gas shut-off and a water spray system for fire suppression',
      'Implemented Firebase Realtime Database connectivity for real-time sensor data synchronization, monitoring, and event logging',
      'Developed a web-based monitoring and control application with live gas levels, flame status, system alerts, and remote control capabilities',
      'Implemented automated local and remote alert mechanisms through a siren, warning LED, and email notifications during detected emergencies',
      'Integrated configurable gas and flame sensitivity thresholds, system reset controls, and historical event monitoring',
    ],
    technologies: ['ESP32', 'MQ-2 Gas Sensor', 'Flame Sensors', 'Firebase Realtime Database', 'Web Application', 'Solenoid Valve', 'Water Spray System'],
    features: [
      'Real-time gas level monitoring',
      'Flame detection',
      'Automated solenoid valve gas shut-off',
      'Water spray fire suppression',
      'Siren and LED warnings',
      'Web-based remote monitoring and control',
      'Email notifications',
      'Configurable sensitivity thresholds',
      'Historical event logging',
      'System reset controls',
    ],
    architecture: [
      { icon: 'sensors', label: 'MQ-2 + Flame' },
      { connector: 'Signal' },
      { icon: 'memory', label: 'ESP32' },
      { connector: 'Sync' },
      { icon: 'database', label: 'Firebase' },
      { connector: 'Data' },
      { icon: 'desktop_windows', label: 'Web App' },
    ],
  },
  {
    id: 'hand',
    title: 'HAND',
    subtitle: 'Wearable / IoT',
    date: 'January 2025 – June 2025',
    icon: 'back_hand',
    tags: ['ESP32', 'Android Studio', 'Firebase', 'GSM'],
    overview: 'A wearable health-monitoring glove using ESP32, flex sensors, and a pulse oximeter that monitors hand movement, heart rate, and oxygen levels with a mobile app and SMS emergency alerts.',
    problem: 'Continuous health monitoring for patients or elderly individuals often requires bulky equipment, and critical conditions may go unnoticed without real-time alerts to caregivers.',
    solution: 'Designed a wearable glove with embedded sensors that transmits health data to an Android application for real-time monitoring, with a GSM-based SMS emergency alert system that notifies caregivers when critical conditions are detected.',
    role: [
      'Developed a wearable health monitoring glove using an ESP32, flex sensors, and a pulse oximeter to monitor hand movement, heart rate, and oxygen levels in real time',
      'Created a mobile application using Android Studio to display real-time and historical health data for caregivers and guardians',
      'Integrated a GSM-based emergency alert system that automatically sends SMS notifications to caregivers when critical health conditions are detected',
      'Integrated Firebase Firestore for cloud storage of health records and designed an ergonomic glove using conductive fabric, soft wiring, and a rechargeable battery',
    ],
    technologies: ['ESP32', 'Flex Sensors', 'Pulse Oximeter', 'Android Studio', 'Firebase Firestore', 'GSM/SMS'],
    features: [
      'Hand movement tracking via flex sensors',
      'Heart rate monitoring',
      'Blood oxygen level measurement',
      'Real-time Android app display',
      'Historical health data records',
      'SMS emergency alerts to caregivers',
      'Cloud storage via Firebase Firestore',
      'Ergonomic wearable design with rechargeable battery',
    ],
    architecture: [
      { icon: 'back_hand', label: 'Wearable Glove' },
      { connector: 'Bluetooth' },
      { icon: 'smartphone', label: 'Android App' },
      { connector: 'Cloud' },
      { icon: 'database', label: 'Firebase' },
    ],
  },
  {
    id: 'qcits',
    title: 'QCITS',
    subtitle: 'Desktop Application',
    date: 'August 2024 – December 2024',
    icon: 'event_seat',
    tags: ['VB.NET'],
    overview: 'A seat reservation and monitoring system for auditorium management, developed using VB.NET.',
    problem: 'Manual auditorium seat reservations are error-prone and time-consuming, with no centralized system to track bookings and availability.',
    solution: 'Built a desktop application using VB.NET that manages auditorium seat reservations with a clear interface for booking management and availability monitoring.',
    role: [
      'Built a seat reservation and monitoring system using VB.NET to manage auditorium bookings',
    ],
    technologies: ['VB.NET'],
    features: [
      'Seat reservation management',
      'Auditorium booking interface',
      'Availability monitoring',
    ],
    architecture: null,
  },
]

function ArchitectureDiagram({ architecture }) {
  if (!architecture) return null

  return (
    <div className="flex flex-col gap-4 mt-4">
      <h4 className="font-technical-label text-technical-label text-on-surface uppercase tracking-widest flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-primary inline-block" /> System Architecture
      </h4>
      <div className="w-full h-auto p-6 bg-surface-container border border-outline-variant rounded flex items-center justify-between overflow-x-auto gap-3">
        {architecture.map((item, i) => {
          if (item.connector) {
            return (
              <div key={i} className="flex-1 min-w-[50px] flex flex-col items-center gap-1">
                <span className="font-code-sm text-[10px] text-outline whitespace-nowrap">
                  {item.connector}
                </span>
                <div className="w-full h-px bg-outline-variant relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t border-r border-outline-variant rotate-45" />
                </div>
              </div>
            )
          }
          return (
            <div key={i} className="flex flex-col items-center gap-2 min-w-[80px]">
              <div className="w-12 h-12 rounded-full bg-surface border-2 border-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[20px]">{item.icon}</span>
              </div>
              <span className="font-code-sm text-[11px] text-on-surface-variant text-center leading-tight">
                {item.label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function ProjectCard({ project, isOpen, onToggle }) {
  return (
    <div
      className={`group bg-surface-container-lowest border ${isOpen ? 'border-primary' : 'border-outline-variant'} hover:border-primary transition-colors duration-300 rounded-lg overflow-hidden flex flex-col cursor-pointer`}
      onClick={onToggle}
    >
      {/* Card Header */}
      <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center shrink-0 border border-outline-variant group-hover:bg-primary group-hover:border-primary transition-colors">
            <span className="material-symbols-outlined text-[28px] text-primary group-hover:text-on-primary transition-colors">
              {project.icon}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <span className="font-technical-label text-technical-label text-on-surface-variant uppercase tracking-widest">
              {project.subtitle} • {project.date.split('–')[0].trim().split(' ').pop()}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-surface-container border border-outline-variant rounded font-code-sm text-code-sm text-on-surface-variant"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="font-code-sm text-code-sm text-on-surface-variant">+{project.tags.length - 3}</span>
          )}
          <span
            className={`material-symbols-outlined text-outline-variant group-hover:text-primary transition-all self-center ml-2 duration-300 ${isOpen ? 'rotate-180' : ''}`}
          >
            expand_more
          </span>
        </div>
      </div>

      {/* Card Detail */}
      {isOpen && (
        <div className="border-t border-outline-variant" onClick={(e) => e.stopPropagation()}>
          <div className="p-6 md:p-8 flex flex-col gap-8 bg-surface-bright">
            {/* Date */}
            <div className="font-technical-label text-technical-label text-primary uppercase tracking-widest">
              {project.date}
            </div>

            {/* Overview */}
            <div>
              <h4 className="font-body-md text-body-md font-semibold text-on-surface uppercase mb-2">Overview</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">{project.overview}</p>
            </div>

            {/* Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-body-md text-body-md font-semibold text-on-surface uppercase mb-2">Problem</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">{project.problem}</p>
              </div>
              <div>
                <h4 className="font-body-md text-body-md font-semibold text-on-surface uppercase mb-2">Solution</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">{project.solution}</p>
              </div>
            </div>

            {/* My Contribution */}
            <div>
              <h4 className="font-body-md text-body-md font-semibold text-on-surface uppercase mb-3">My Contribution</h4>
              <ul className="font-body-md text-body-md text-on-surface-variant space-y-2">
                {project.role.map((r) => (
                  <li key={r} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[16px] mt-0.5 shrink-0">check_circle</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-body-md text-body-md font-semibold text-on-surface uppercase mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-surface-container border border-outline-variant rounded font-technical-label text-[12px] text-on-surface">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="font-body-md text-body-md font-semibold text-on-surface uppercase mb-3">Key Features</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 font-body-md text-body-md text-on-surface-variant">
                    <span className="material-symbols-outlined text-outline text-[14px] mt-1 shrink-0">arrow_right</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture */}
            <ArchitectureDiagram architecture={project.architecture} />
          </div>
        </div>
      )}
    </div>
  )
}

export default function ProjectsSection() {
  const [openProject, setOpenProject] = useState(null)

  return (
    <section id="projects" className="relative flex flex-col w-full px-4 lg:px-[48px] py-24 overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5 z-0"
        style={{
          backgroundImage: 'radial-gradient(#191c1f 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col gap-4 mb-8">
        <div className="flex items-center gap-4">
          <div className="h-1 w-12 bg-primary" />
          <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-wider">Project Portfolio</h2>
        </div>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Academic projects spanning IoT systems, web applications, mobile development, and embedded hardware — each solving a real-world problem.
        </p>
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isOpen={openProject === project.id}
            onToggle={() => setOpenProject(openProject === project.id ? null : project.id)}
          />
        ))}
      </div>
    </section>
  )
}
