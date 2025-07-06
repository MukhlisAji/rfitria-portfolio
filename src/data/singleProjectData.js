// Import images (reuse or add new if you have)
import Image1 from '../images/gut-brain.png';
import Image2 from '../images/gut-brain.png';
import Image3 from '../images/gut-brain.png';

// Import icons
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from 'react-icons/fi';

export const singleProjectData = {
  ProjectHeader: {
    title: 'Gut Brain Connection',
    publishDate: 'Aug 26, 2023',
    tags: 'Health, Psychology, Nutrition',
  },
  ProjectImages: [
    {
      id: 1,
      title: 'Cover Illustration',
      img: Image1,
    },
    {
      id: 2,
      title: 'Chapter Layout Example',
      img: Image2,
    },
    {
      id: 3,
      title: 'Infographic on Gut Health',
      img: Image3,
    },
  ],
  ProjectInfo: {
    ClientHeading: 'About Publisher',
    CompanyInfo: [
      {
        id: 1,
        title: 'Name',
        details: 'Mindful Health Publishing',
      },
      {
        id: 2,
        title: 'Services',
        details: 'Editorial Design, e-Book Publishing',
      },
      {
        id: 3,
        title: 'Website',
        details: 'https://mindfulhealthbooks.com',
      },
      {
        id: 4,
        title: 'Contact',
        details: '+1 (555) 987-6543',
      },
    ],
    ObjectivesHeading: 'Project Objective',
    ObjectivesDetails:
      'To design and publish an engaging e-Book exploring the scientific and emotional connection between gut health and mental well-being, aimed at general readers and health enthusiasts.',
    Technologies: [
      {
        title: 'Tools & Technologies',
        techs: [
          'Adobe InDesign',
          'Illustrator',
          'Photoshop',
          'Canva',
        ],
      },
    ],
    ProjectDetailsHeading: 'Project Highlights & Challenges',
    ProjectDetails: [
      {
        id: 1,
        details:
          'Created custom illustrations to visually explain complex medical concepts in an accessible way.',
      },
      {
        id: 2,
        details:
          'Collaborated closely with nutritionists and psychologists to ensure scientific accuracy.',
      },
      {
        id: 3,
        details:
          'Balanced detailed information with clear layout design to keep readers engaged.',
      },
    ],
    SocialSharingHeading: 'Share This Project',
    SocialSharing: [
      {
        id: 1,
        name: 'Twitter',
        icon: <FiTwitter />,
        url: 'https://twitter.com/yourhandle',
      },
      {
        id: 2,
        name: 'Instagram',
        icon: <FiInstagram />,
        url: 'https://instagram.com/yourhandle',
      },
      {
        id: 3,
        name: 'Facebook',
        icon: <FiFacebook />,
        url: 'https://facebook.com/yourpage',
      },
      {
        id: 4,
        name: 'LinkedIn',
        icon: <FiLinkedin />,
        url: 'https://linkedin.com/yourprofile',
      },
      {
        id: 5,
        name: 'Youtube',
        icon: <FiYoutube />,
        url: 'https://youtube.com/yourchannel',
      },
    ],
  },
  RelatedProject: {
    title: 'Related Projects',
    Projects: [
      {
        id: 1,
        title: 'Pregnancy',
        img: '../images/pregnancy.png',
      },
      {
        id: 2,
        title: 'Cheerful Breakfast',
        img: '../images/breakfast.png',
      },
      {
        id: 3,
        title: 'Business Profile',
        img: '../images/business-profile.png',
      },
    ],
  },
};
