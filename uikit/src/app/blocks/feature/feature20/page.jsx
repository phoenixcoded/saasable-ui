// @project
import { Feature20 } from '@/blocks/feature';

/***************************  FEATURE 20 - DATA  ***************************/

const data = {
  heading: 'Intelligent Data Compression',
  caption: 'Process data faster, enhance system, and gain quicker insights.',
  image: '/assets/images/graphics/ai/graphics4-light.svg',
  actionBtn: { children: 'Explore all Features' },
  features: [
    {
      icon: 'tabler-chart-histogram',
      title: 'Parallel Processing',
      content: 'Process data in parallel, significantly boosting data processing speed.'
    },
    {
      icon: 'tabler-artboard',
      title: 'Scalable Data Pipelines',
      content: 'Build and manage scalable and efficient data processing pipelines.'
    },
    {
      icon: 'tabler-database',
      title: 'Data Quality Assurance',
      content: 'Tools to ensure and maintain high data quality and integrity.'
    },
    {
      icon: 'tabler-settings-up',
      title: 'Dynamic Task Automation',
      content: 'Automate dynamic tasks to enhance workflow efficiency.'
    },
    {
      icon: 'tabler-devices-code',
      title: 'Cross-Platform ',
      content: 'Compatibility with various platforms for versatile data processing.'
    },
    {
      icon: 'tabler-route',
      title: 'Workflow Optimization',
      content: 'Optimize workflows for increased productivity and efficiency.'
    }
  ]
};

/***************************  BLOCK - FEATURE 20  ***************************/

export default function BlockFeature20() {
  return <Feature20 {...data} />;
}
