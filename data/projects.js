// ════════════════════════════════════════
// data/projects.js
// Add or remove portfolio projects here.
// ════════════════════════════════════════

const PROJECTS = [

  {
    title:   'Webex Media Analytics, Calling Transformation and Webex Meetings',
    tags:    ['Java', 'Scala', 'Spring Boot', 'Kyuubi', 'Spark', 'Flink', 'KStreams', 'Pinot'],

    problem: 'Webex media and calling workloads generate complex, high-volume event streams where teams need near real-time analytics, reliable transformation pipelines, and storage across OLTP/OLAP targets for product decisions and operational visibility.',

    built:   'Led analytics pipeline engineering across VideoMesh (on-prem video calling), Calling Analytics transformation flows, and Webex Meetings workloads. Built microservice-driven ingestion and forwarding paths with Spring Boot, KStreams, Spark, and Flink; exposed API-ready datasets and supported analytical persistence across Pinot, TiDB, TimescaleDB and Iceberg-backed data layers.',

    metrics: [
      { value: '3 lanes',        label: 'VideoMesh, Calling Analytics, Webex Meetings' },
      { value: 'Microservices',  label: 'Spark/Flink/KStreams orchestration' },
      { value: 'OLTP + OLAP',    label: 'integrated multi-store analytics delivery' },
    ],

    year: '2026',

    links: [],
  },

  {
    title:   'Loan Loss Provision (LLP) and Default & Recovery (DNR) Risk Platform',
    tags:    ['Java 8', 'Spring Boot', 'Hibernate/JPA', 'Angular', 'OpenShift', 'Oracle 11g'],

    problem: 'Risk operations required an auditable, rule-driven platform to compute credit loss allowances and track events like forbearance, UTP, recovery and related compliance workflows at enterprise scale.',

    built:   'Delivered full-stack capabilities for Deutsche Bank Group LLP and DNR modules, including business-facing Spring Boot services, persistence and workflow handling with JPA/Hibernate, modernization from legacy GWT flows to Angular UI, and migration of workloads to OpenShift cloud infrastructure.',

    metrics: [
      { value: 'RegTech',        label: 'credit loss and recovery workflow automation' },
      { value: 'Modernization',  label: 'GWT to Angular migration' },
      { value: 'Platform',       label: 'OpenShift deployment migration' },
    ],

    year: '2022',

    links: [],
  },

  {
    title:   'Energy Components Hydrocarbon Accounting Platform',
    tags:    ['Java 8', 'EJB', 'Oracle 12c', 'JUnit', 'Selenium', 'Docker', 'AWS'],

    problem: 'Oil and gas operations needed dependable software to monitor production, transport and sales workflows while enabling cross-party coordination and domain reporting.',

    built:   'Contributed across analysis, development and testing for TietoEvry Energy Components product. Implemented Java web services, supported business process workflows, authored SQL-based custom reports, and worked on delivery tooling including container and image creation.',

    metrics: [
      { value: 'Domain',        label: 'oil and gas accounting systems' },
      { value: 'Service Layer', label: 'Java webservice implementation' },
      { value: 'Reporting',     label: 'custom SQL report generation' },
    ],

    year: '2019',

    links: [],
  },

  {
    title:   'UTM and PBM Clinical Workflow Systems',
    tags:    ['Java 7', 'Spring MVC', 'Hibernate', 'AngularJS', 'Healthcare'],

    problem: 'Clinical review and therapeutic management teams needed reliable applications for intervention workflows, patient medication records, and operational consistency in healthcare systems.',

    built:   'As Associate Consultant at SaiSystems Technology, worked on Utilization and Therapeutic Management initiatives from early architecture discussions through controller-layer implementation; built AngularJS factories/directives and integrated backend components for clinical workflow support.',

    metrics: [
      { value: 'Healthcare',    label: 'clinical intervention and PBM support' },
      { value: 'Architecture',  label: 'early-phase design participation' },
      { value: 'Full lifecycle', label: 'analysis to implementation' },
    ],

    year: '2017',

    links: [],
  },

];
