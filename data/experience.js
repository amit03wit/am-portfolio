// ════════════════════════════════════════
// data/experience.js
// Work history in newest-first order.
// ════════════════════════════════════════

const EXPERIENCE = [

  {
    period:   '2022-05 - Present',
    role:     'Senior Software Engineer',
    company:  'Cisco Webex',
    location: 'Bengaluru, India',

    story: `Working in Webex R&D across Meetings and Calling on the Media Analytics Framework.
Designing and maintaining services for ingestion, enrichment, streaming analytics, and downstream data delivery using Spring Boot, Spark, Flink, and Kafka.` ,

    metrics: [
      { value: 'Spark + Flink', label: 'streaming and aggregation stack' },
      { value: 'WxCAS + SSE',   label: 'calling data coverage' },
      { value: 'Multi-sink',    label: 'HDFS, Pinot, Timescale, TiDB, Iceberg' },
      { value: 'POC ownership', label: 'k-means and churn prediction' },
    ],

  },

  {
    period:   '2019-04 - 2022-05',
    role:     'Associate - Fullstack Developer',
    company:  'Deutsche Bank Group',
    location: 'Pune, India',

    story: `Worked on Loan Loss Provision and Default & Recovery solutions for risk management.
Built and maintained Spring Boot + JPA applications, supported regulatory workflow features, migrated GWT modules to Angular, and moved workloads to OpenShift.` ,

    metrics: [
      { value: 'LLP + DNR',     label: 'risk management platform modules' },
      { value: 'Java + Angular', label: 'full-stack development' },
      { value: 'OpenShift',     label: 'cloud platform migration' },
    ],

  },

  {
    period:   '2017-12 - 2019-04',
    role:     'Software Engineer',
    company:  'TietoEVRY',
    location: 'Pune, India',
    oneliner: 'Contributed to the Energy Components hydrocarbon accounting product for oil and gas use cases, handling analysis, development, testing, Java web services, SQL reporting, and container/image workflows.',
  },

  {
    period:   '2015-02 - 2017-12',
    role:     'Associate Consultant',
    company:  'SAI Systems Inc.',
    location: 'Pune, India',
    oneliner: 'Worked on Utilization and Therapeutic Management initiatives, implementing Java 7 + Spring MVC + Hibernate + AngularJS solutions for clinical review workflows and patient medication records.',
  },

];
