// @project
import { Feature18 } from '@/blocks/feature';

/***************************  FEATURE 18 - DATA  ***************************/

const data = {
  heading: 'Dynamic Task Automation',
  caption: 'Gain insights into performance metrics and proactively address issues for uninterrupted operations.',
  topics: [
    {
      icon: 'tabler-sparkles',
      title: 'AI Assistant',
      title2: 'Advanced AI Integration',
      description: 'Leverage cutting-edge AI to enhance decision-making and streamline operations.',
      image: '/assets/images/graphics/ai/graphics12-light.svg',
      list: [
        { primary: 'Intelligent Decision Support' },
        { primary: 'Predictive Analytics' },
        { primary: 'Natural Language Processing' },
        { primary: 'Real-time Insights' }
      ],
      actionBtn: { children: 'Explore all Features' },
      actionBtn2: { children: 'Customize' }
    },
    {
      icon: 'tabler-chart-histogram',
      title: 'Simple Analysis',
      title2: 'Data Lifecycle Management',
      description: 'Process data in parallel, significantly boosting data processing speed.',
      image: '/assets/images/graphics/ai/graphics7-light.svg',
      list: [{ primary: 'Fortress for Your Data' }, { primary: 'Granular Access Controls' }, { primary: 'Automated Backup Solutions' }],
      actionBtn: { children: 'Explore all Features' },
      actionBtn2: { children: 'Customize' }
    },
    {
      icon: 'tabler-users',
      title: 'Easy Collaboration',
      title2: 'Seamless Teamwork',
      description: 'Foster collaboration with intuitive tools designed for team success.',
      image: '/assets/images/graphics/ai/graphics4-light.svg',
      list: [{ primary: 'Shared Workspaces' }, { primary: 'Real-time Collaboration' }, { primary: 'Task Assignment and Tracking' }],
      actionBtn: { children: 'Explore all Features' },
      actionBtn2: { children: 'Customize' }
    },
    {
      icon: 'tabler-settings-up',
      title: 'Smart Automation',
      title2: 'Intelligent Task Management',
      description: 'Automate repetitive tasks and focus on what truly matters with smart solutions.',
      image: '/assets/images/graphics/ai/graphics9-light.svg',
      list: [{ primary: 'Workflow Automation' }, { primary: 'Trigger-based Actions' }, { primary: 'Scalable Solutions' }],
      actionBtn: { children: 'Explore all Features' },
      actionBtn2: { children: 'Customize' }
    }
  ]
};

/***************************  BLOCK - FEATURE 18  ***************************/

export default function BlockFeature18() {
  return <Feature18 {...data} />;
}
