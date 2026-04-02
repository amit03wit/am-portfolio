// ════════════════════════════════════════
// data/projects.js
// Add or remove portfolio projects here.
// ════════════════════════════════════════

const PROJECTS = [

  {
    title:   'Webex Media Analytics Service',
    tags:    ['Java', 'Scala', 'Spring Boot', 'Spark', 'Flink', 'Kafka', 'Pinot'],

    problem: 'Webex media and calling ecosystems generate high-volume event streams that need low-latency enrichment, analytics, and storage across multiple sinks for business insights and operational visibility.',

    built:   'Built and evolved analytics services for Cisco Webex Media Analytics Framework covering Meetings, Video Mesh, and Calling domains. Developed streaming and aggregation flows on Spark/Flink with downstream routing, REST APIs for visual analysis, and data persistence to HDFS/Parquet, Timescale DB, TiDB, Iceberg, and Pinot.',

    metrics: [
      { value: '2022-Present', label: 'production ownership window' },
      { value: 'Multi-sink',   label: 'analytics data architecture' },
      { value: 'ML POCs',      label: 'k-means and churn prediction' },
    ],

    year: '2026',

    links: [],
  },

  {
    title:   'Loan Loss Provision & DNR Platform',
    tags:    ['Java 8', 'Spring Boot', 'Hibernate/JPA', 'Angular', 'OpenShift', 'Oracle'],

    problem: 'Credit risk teams require audit-ready and rule-driven automation to compute credit loss allowances across multiple GAAP scenarios while tracking workflow events like forbearance, UTP, and recovery.',

    built:   'Contributed to Deutsche Bank Group business-facing LLP and DNR web applications, including backend services in Spring Boot, persistence with JPA/Hibernate, legacy UI migration from GWT to Angular, and platform migration to OpenShift.',

    metrics: [
      { value: '2019-2022',   label: 'delivery period' },
      { value: 'Risk domain', label: 'LLP and DNR workflows' },
      { value: 'Modernized',  label: 'GWT to Angular transition' },
    ],

    year: '2022',

    links: [],
  },

  {
    title:   'Energy Components Product Engineering',
    tags:    ['Java 8', 'EJB', 'Oracle 12c', 'JUnit', 'Selenium', 'Docker', 'AWS'],

    problem: 'Oil and gas operations need dependable systems to monitor production, transport, and sales workflows while enabling collaboration among license holders and domain teams.',

    built:   'Worked on TietoEVRY hydrocarbon accounting product development with responsibilities across analysis, development, and testing. Built Java web services, developed SQL reports, and supported containerized delivery workflows.',

    metrics: [
      { value: '2017-2019',  label: 'delivery period' },
      { value: 'Oil & Gas',  label: 'industry focus' },
      { value: 'End-to-end', label: 'analysis to implementation' },
    ],

    year: '2019',

    links: [],
  },

  {
    title:   'UTM and PBM Clinical Workflow Support',
    tags:    ['Java 7', 'Spring MVC', 'Hibernate', 'AngularJS', 'Healthcare'],

    problem: 'Clinical and therapeutic management teams need efficient data workflows to review interventions and maintain patient medication records in a reliable application stack.',

    built:   'As Associate Consultant at SAI Systems Inc., contributed to Utilization and Therapeutic Management initiatives including architecture-level involvement, controller-layer implementation, and AngularJS factories/directives support.',

    metrics: [
      { value: '2015-2017',   label: 'delivery period' },
      { value: 'Healthcare',  label: 'domain experience' },
      { value: 'App lifecycle', label: 'architecture to implementation' },
    ],

    year: '2017',

    links: [],
  },

];
