export const projects = [
  {
    id: 'erbriwan',
    title: 'ERBriwan',
    date: 'January 2026 – April 2026',
    category: 'IoT / Emergency System',
    featured: true,
    overview:
      'An IoT-based emergency alert and monitoring system using ESP32 and GPS modules to transmit real-time location information during emergency events.',
    problem:
      'During emergencies, response times are critical. Traditional alert systems lack precise real-time location data, making it difficult for responders to locate and assist people quickly.',
    solution:
      'Built an integrated system where ESP32 devices with GPS modules transmit real-time location data to a Node.js REST API, which processes and routes emergency alerts to mobile users and responders with push notifications.',
    role: [
      'Hardware integration (ESP32 + GPS)',
      'Backend REST API development (Node.js)',
      'Mobile application development',
      'System architecture design',
      'Push notification implementation',
    ],
    technologies: ['ESP32', 'GPS', 'Node.js', 'REST API', 'Mobile App', 'Push Notifications'],
    features: [
      'Real-time GPS location tracking',
      'Emergency alert broadcasting',
      'Push notifications to responders',
      'Live incident monitoring',
      'IoT device event routing',
    ],
    architecture: [
      { label: 'ESP32 + GPS', icon: 'sensors' },
      { connector: 'Location Data' },
      { label: 'Node.js API', icon: 'dns' },
      { connector: 'Push Alerts' },
      { label: 'Mobile App', icon: 'smartphone' },
      { connector: 'Notifications' },
      { label: 'Responders', icon: 'emergency' },
    ],
    portfolioMessage:
      'Demonstrates ability to build an end-to-end IoT system combining hardware, backend development, mobile development, and real-time communication.',
  },
  {
    id: 'barangay-admin',
    title: 'Reports & Barangay Administration System',
    date: 'January 2026 – April 2026',
    category: 'Web Application',
    featured: true,
    overview:
      'A web-based administrative system for barangay management with React frontend and Supabase backend for real-time data management.',
    problem:
      'Barangay offices often rely on manual processes for record-keeping, attendance monitoring, and report generation, leading to inefficiency and data inconsistencies.',
    solution:
      'Developed a React-based web application integrated with Supabase that provides organized interfaces for record management, attendance monitoring, report generation, and administrative workflows.',
    role: [
      'Frontend development (React)',
      'Database integration (Supabase)',
      'UI/UX design and responsive layouts',
      'Real-time data synchronization',
      'Report generation features',
    ],
    technologies: ['React', 'JavaScript', 'Supabase', 'Web Development'],
    features: [
      'Record management',
      'Attendance monitoring',
      'Report generation',
      'Real-time data display',
      'Responsive dashboard interface',
      'Administrative workflows',
    ],
    architecture: [
      { label: 'React Frontend', icon: 'web' },
      { connector: 'API Calls' },
      { label: 'Supabase', icon: 'database' },
      { connector: 'Real-time Sync' },
      { label: 'Admin Dashboard', icon: 'dashboard' },
    ],
    portfolioMessage:
      'Demonstrates frontend development, dashboard design, database integration, and data-driven UI development.',
  },
  {
    id: 'sentrygas',
    title: 'SentryGas',
    date: 'August 2025 – December 2025',
    category: 'IoT / Safety System',
    featured: true,
    overview:
      'An IoT-based gas and fire safety system for real-time hazard detection, monitoring, alerts, and automated safety responses.',
    problem:
      'Gas leaks and fire hazards in enclosed spaces can escalate rapidly without immediate detection, putting lives and property at serious risk.',
    solution:
      'Built a comprehensive safety system using ESP32 with MQ-2 gas sensors and flame sensors that detects hazards, triggers automated responses (solenoid valve, water spray, siren), and provides real-time monitoring through a web application with Firebase.',
    role: [
      'Hardware prototyping and sensor integration',
      'ESP32 firmware development',
      'Firebase Realtime Database integration',
      'Web monitoring application development',
      'Automated safety response logic',
    ],
    technologies: [
      'ESP32',
      'MQ-2 Gas Sensor',
      'Flame Sensors',
      'Firebase Realtime Database',
      'Web Application',
      'IoT',
    ],
    features: [
      'Real-time gas level monitoring',
      'Flame detection',
      'Automated solenoid valve control',
      'Water spray activation',
      'Siren and LED warnings',
      'Remote web-based monitoring',
      'Email notifications',
      'Configurable sensitivity thresholds',
      'Historical event logging',
      'System reset controls',
    ],
    architecture: [
      { label: 'Sensors (MQ-2, Flame)', icon: 'sensors' },
      { connector: 'Signal' },
      { label: 'ESP32', icon: 'memory' },
      { connector: 'Sync' },
      { label: 'Firebase', icon: 'database' },
      { connector: 'Data' },
      { label: 'Web App', icon: 'desktop_windows' },
    ],
    portfolioMessage:
      'Strong example of IoT + automation + real-time monitoring + web development.',
  },
  {
    id: 'hand',
    title: 'HAND',
    date: 'January 2025 – June 2025',
    category: 'Wearable / IoT',
    featured: false,
    overview:
      'A wearable health-monitoring glove using ESP32, flex sensors, and a pulse oximeter that monitors hand movement, heart rate, and oxygen levels.',
    problem:
      'Continuous health monitoring for patients or elderly individuals often requires bulky equipment, and critical conditions may go unnoticed without real-time alerts to caregivers.',
    solution:
      'Designed a wearable glove with embedded sensors that transmits health data to an Android application for real-time monitoring, with GSM-based SMS emergency alerts sent to caregivers when critical conditions are detected.',
    role: [
      'Hardware design (conductive fabric, wiring)',
      'Sensor integration (flex, pulse oximeter)',
      'Android application development',
      'Firebase Firestore integration',
      'GSM/SMS alert system implementation',
    ],
    technologies: [
      'ESP32',
      'Flex Sensors',
      'Pulse Oximeter',
      'Android Studio',
      'Firebase Firestore',
      'GSM/SMS',
    ],
    features: [
      'Hand movement tracking',
      'Heart rate monitoring',
      'Blood oxygen level measurement',
      'Real-time Android display',
      'Historical health records',
      'SMS emergency alerts to caregivers',
      'Rechargeable battery',
      'Wearable form factor',
    ],
    architecture: [
      { label: 'Wearable Glove', icon: 'back_hand' },
      { connector: 'Bluetooth' },
      { label: 'Android App', icon: 'smartphone' },
      { connector: 'Cloud' },
      { label: 'Firebase', icon: 'database' },
      { connector: 'SMS' },
      { label: 'Caregiver', icon: 'person' },
    ],
    portfolioMessage:
      'Demonstrates wearable technology, embedded systems, mobile development, cloud storage, and hardware/software integration.',
  },
  {
    id: 'qcits',
    title: 'QCITS',
    date: 'August 2024 – December 2024',
    category: 'Desktop Application',
    featured: false,
    overview:
      'A seat reservation and monitoring system for auditorium management, developed using VB.NET.',
    problem:
      'Manual auditorium seat reservations are error-prone and time-consuming, with no centralized system to track bookings and availability.',
    solution:
      'Built a desktop application using VB.NET that manages auditorium seat reservations, tracks availability, and provides a clear interface for booking management.',
    role: [
      'Full application development (VB.NET)',
      'Database design and integration',
      'UI design for reservation interface',
    ],
    technologies: ['VB.NET'],
    features: [
      'Seat reservation management',
      'Auditorium booking interface',
      'Availability monitoring',
      'Database-driven records',
    ],
    architecture: null,
    portfolioMessage:
      'Shows the progression of development experience and earlier experience creating database-oriented reservation systems.',
  },
]
