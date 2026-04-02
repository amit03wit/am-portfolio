// ════════════════════════════════════════
// data/skills.js
// Tech stack grouped by category.
// ════════════════════════════════════════

const SKILLS = {

  groups: [
    {
      title: 'languages & frameworks',
      pills: ['Java', 'Scala', 'Spring Boot', 'Hibernate', 'JPA', 'Angular', 'GWT', 'EJB'],
    },
    {
      title: 'streaming & event processing',
      pills: ['Apache Kafka', 'Apache Spark', 'Apache Flink', 'KStreams', 'Apache Kyuubi'],
    },
    {
      title: 'oltp databases',
      pills: ['PostgreSQL', 'Oracle 11g', 'MySQL'],
    },
    {
      title: 'olap databases',
      pills: ['Apache Pinot', 'Apache Iceberg', 'TimescaleDB (TigerData)', 'StarRocks', 'TiDB'],
    },
    {
      title: 'data lakes & query layer',
      pills: ['HDFS', 'Parquet', 'Iceberg', 'Presto', 'Trino'],
    },
    {
      title: 'cloud & devops',
      pills: ['Kubernetes', 'OpenShift', 'Helm', 'Docker', 'Jenkins', 'Bamboo', 'Vault'],
    },
    {
      title: 'monitoring & observability',
      pills: ['Grafana', 'Prometheus', 'OpenSearch', 'ELK', 'Kibana', 'Splunk'],
    },
    {
      title: 'testing & engineering practices',
      pills: ['REST APIs', 'JUnit', 'Selenium', 'Cucumber', 'CI/CD', 'System Design'],
    },
  ],

  ratings: [
    { skill: 'Java',             score: 4.5 },
    { skill: 'Scala',            score: 4.0 },
    { skill: 'Data Engineering', score: 4.0 },
    { skill: 'Cloud Platform',   score: 4.0 },
    { skill: 'Angular',          score: 3.0 },
  ],

};
