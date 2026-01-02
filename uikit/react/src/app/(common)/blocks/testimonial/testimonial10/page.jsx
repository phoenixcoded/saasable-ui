// @project
import { Testimonial10 } from '@/blocks/testimonial';

/***************************  TESTIMONIAL 10 - DATA  ***************************/

const data = {
  heading: 'Hear From Our Satisfied Users',
  caption: `Discover why users love our platform and how it's making a positive impact on their work and businesses.`,
  testimonials: [
    {
      title: 'Strongly endorsed!',
      ratings: 5,
      review: 'This platform exceeded my expectations! The features are robust, and the user interface is incredibly intuitive.',
      profile: { avatar: '', name: 'Sarah T.', role: 'Business Owner' }
    },
    {
      title: 'Top pick!',
      ratings: 4,
      review: `I've tried several platforms, and this one stands out for its reliability and user-friendly.`,
      profile: { avatar: '', name: 'Alex M.', role: 'Project Manager' }
    },
    {
      title: 'Widely praised!',
      ratings: 2,
      review: `Outstanding customer support! They're responsive and go above and beyond to ensure a smooth experience. Highly satisfied.`,
      profile: { avatar: '', name: 'Emily P.', role: 'Freelancer' }
    },
    {
      title: 'Hugely endorsed!',
      ratings: 5,
      review: `I've recommended this platform to colleagues, and they've all been impressed. It's versatile, efficient, and simply fantastic.`,
      profile: { avatar: '', name: 'Maria S', role: 'Marketing Specialist' }
    },
    {
      title: 'Outstanding choice!',
      ratings: 2,
      review: `This platform transformed the way we work. It's flexible, scalable, and adapts seamlessly to our evolving needs.`,
      profile: { avatar: '', name: 'James L.', role: 'IT Professional' }
    },
    {
      title: 'A must-consider!',
      ratings: 3,
      review: `As a tech enthusiast, I appreciate the innovation behind this platform. It's modern, sleek, and delivers on its promises.`,
      profile: { avatar: '', name: 'Kevin R.', role: 'Software Developer' }
    },
    {
      title: 'Highly recommended!',
      ratings: 5,
      review: `I've used many platforms in my career, and this one is a standout. The functionality is unmatched, making it a joy to work with.`,
      profile: { avatar: '', name: 'Jessica W.', role: 'UX/UI Designer' }
    },
    {
      title: 'Exceptional suggestion!',
      ratings: 1,
      review: `Our team's productivity soared after adopting this platform. It's a reliable solution that brings tangible results.`,
      profile: { avatar: '', name: 'Eric H.', role: 'Operations Manager' }
    },
    {
      title: 'Superbly recommended!',
      ratings: 3,
      review: 'What I love most is the seamless integration with other tools. It streamlines our workflow and saves us valuable time.',
      profile: { avatar: '', name: 'Brian C.', role: 'Content Creator' }
    }
  ]
};

/***************************  BLOCK - TESTIMONIAL 10  ***************************/

export default function BlockTestimonial10() {
  return <Testimonial10 {...data} />;
}
