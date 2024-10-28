// @project
import { ListBadgeColors } from '@/enum';

export const faq = {
  heading: 'Frequently Asked Questions',
  caption: 'With advanced analytics and reporting, you can track customer behavior, sales trends, & many more to make',
  defaultExpanded: 'panel3',
  faqList: [
    {
      question: 'What are developer AI tools?',
      answer: `Developer AI tools are software solutions that utilize machine learning and artificial intelligence to assist in various stages of the development process. They can generate code, debug, and provide intelligent recommendations to improve productivity and code quality.`
    },
    {
      question: 'How do developer AI tools work?',
      answer: {
        content:
          'Developer AI tools offer several benefits, including improved productivity, faster development cycles, better code quality, reduced manual effort, and enhanced collaboration.',
        type: 'list',
        data: [
          { primary: `They help automate repetitive coding tasks, allowing developers to focus on solving complex problems.` },
          {
            primary: 'Provide real-time guidance and suggestions to help developers avoid common mistakes and improve their skills.'
          },
          { primary: 'Enable teams to leverage data insights for better decision-making and business outcomes.' }
        ],
        color: ListBadgeColors.WHITE
      }
    },
    {
      question: 'How does AI benefit sales teams?',
      answer: `AI tools help sales teams by providing predictive analytics, personalized recommendations, and automated outreach strategies. This helps teams focus on high-priority leads and optimize customer interactions, resulting in better sales performance.`
    },
    {
      question: 'What are the benefits of using developer AI tools?',
      answer: {
        content: 'The benefits of using developer AI tools include increased productivity, faster development ',
        type: 'list',
        data: [
          { primary: `Cycles, improved code quality, reduced manual effort, enhanced collaboration` },
          {
            primary:
              'It acts as a virtual guide, offering insights, tips, and solutions to common challenges faced during the development journey.'
          },
          { primary: 'Take action based on the data to enhance relationships, sales, and business success.' }
        ],
        color: ListBadgeColors.WHITE
      }
    },
    {
      question: 'Can developer AI tools replace human developers?',
      answer: `While AI tools can assist in the development process and improve efficiency, they cannot replace human developers. These tools enhance human capabilities by automating repetitive tasks and providing smart suggestions, but creativity, critical thinking, and complex problem-solving still require human expertise.`
    }
  ],
  getInTouch: {
    title: 'Still Have a Question?',
    description: `If you have any further questions or need assistance, our team is ready to help.`,
    link: { children: 'Get in Touch', href: 'https://support.phoenixcoded.net/', target: '_blank' }
  },
  bgImage: '/assets/images/graphics/ai/background1.svg'
};
