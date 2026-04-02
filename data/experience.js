// ════════════════════════════════════════
// data/experience.js
// Work history in newest-first order.
// ════════════════════════════════════════

const EXPERIENCE = [

  {
    period:   '04 May 2022 - Present',
    role:     'Senior Software Engineer',
    company:  'Cisco',
    location: 'Bengaluru, India',

    story: `Working in Webex R&D across Meetings and Calling analytics initiatives.
Owned engineering for VideoMesh (on-prem video calling solution), Calling Analytics transformation pipelines, and CX Assist pipelines using microservices with Kyuubi, Apache Spark, Apache Flink and KStreams.` ,

    metrics: [
      { value: 'VideoMesh',         label: 'on-prem video calling solution support' },
      { value: 'Calling Analytics', label: 'transformation pipelines with Kyuubi/Spark/Flink/KStreams' },
      { value: 'CX Assist',         label: 'pipeline engineering and data readiness' },
      { value: 'Multi-store',       label: 'Pinot, TimescaleDB, TiDB and Iceberg delivery' },
    ],

  },

  {
    period:   '08 Apr 2019 - 01 Apr 2022',
    role:     'Associate - Full-Stack Developer',
    company:  'Deutsche Bank',
    location: 'Pune, India',

    story: `Worked on Loan Loss Provision (LLP) and Default & Recovery (DNR) solutions for enterprise risk management.
Built and maintained Spring Boot and JPA/Hibernate services, supported regulatory workflow logic, migrated legacy UI modules from GWT to Angular, and helped move applications to OpenShift.` ,

    metrics: [
      { value: 'LLP + DNR',   label: 'risk management platform modules' },
      { value: 'Regulatory',  label: 'forbearance, UTP and recovery workflows' },
      { value: 'OpenShift',   label: 'cloud platform migration' },
    ],

  },

  {
    period:   '26 Dec 2017 - 04 Apr 2019',
    role:     'Software Engineer',
    company:  'TietoEvry',
    location: 'Pune, India',
    oneliner: 'Contributed to the Energy Components hydrocarbon accounting platform for oil and gas use cases, handling analysis, development, testing, Java webservices, SQL reporting and container/image creation workflows.',
  },

  {
    period:   '24 Feb 2015 - 22 Dec 2017',
    role:     'Associate Consultant',
    company:  'SaiSystems Technology',
    location: 'Pune, India',
    oneliner: 'Worked on Utilization and Therapeutic Management systems, implementing Java 7, Spring MVC, Hibernate and AngularJS solutions for clinical review, intervention services and patient medication record workflows.',
  },

];
