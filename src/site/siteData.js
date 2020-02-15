import React from 'react';

/* eslint-disable global-require */
export const siteColors = {
  offBlack: '#46484a',
  offWhite: '#EFEFEF',
  warning: '#F4A867',
  error: '#F07285',

  darkerPurple: '#60cbec',
  primary: '#ffffff',
  lighterPurple: '#5fbae9',

  darkerBlue: '#66a4d8',
  secondary: '#4B97E0',
  lighterBlue: '#A9C2F8'
};

export const siteStructure = {
  sections: [
    { name: 'About', scrollTo: 'about' },
    { name: 'Event', scrollTo: 'event' },
    { name: 'Sponsors', scrollTo: 'sponsors' },
    { name: 'FAQ', scrollTo: 'faq' }
  ]
};

export const siteButtons = {
  contactButton: {
    text: 'Contact',
    link: 'mailto:hello@Zenith.org',
    location: '_self'
  },
  applyButton: {
    text: 'Apply',
    link: 'https://my.Zenith.org',
    location: '_self'
  },
  signupButton: {
    text: 'Stay Posted',
    link:
      'https://www.google.com/search?q=this+should+sign+the+user+up+for+a+mailing+list&oq=this+should+sign+the+user+up+for+a+mailing+list&aqs=chrome..69i57.5475j0j1&sourceid=chrome&ie=UTF-8',
    location: '_blank'
  }
};

export const mobileMenuData = {
  links: siteStructure.sections
};

export const headerData = {
  logoSrc: '',
  links: siteStructure.sections,
  actionButton: siteButtons.statusButton
};

export const footerdata = {
  address: "JCB University of Science and Technology, YMCA Faridabad, Sector 6, Faridabad"

};

export const mainPageData = {
  header: 'Be a part of the change.',
  actionText:
    'Join us in working towards social equity at Zenith on 11 April to 13 April, 2020.',
  actionButton: siteButtons.contactButton
};

export const aboutPageData = {
  header: 'What is Zenith?',
  desc:
    'Zenith is a student-run series of events held at the J.C Bose University, YMCA where participants create solutions for a variety of challenges. Our goal is to create an inclusive environment where all attendees feel comfortable learning, sharing their ideas, and developing something amazing that can improve the world around us.',
  testimonials: [
    {
      authorName: 'Milind Bishnoi',
      authorDesc: 'Zenith 2019 Category Winner',
      authorQuote:
        'I was able to meet three amazing badass women who helped me grow and made me a better person. We all found our own strengths and we made something amazing together.'
    },
  ]
};

export const previewPageData = {
  header: "What's in store?",
  previewDesc: [
    'Whether you’re a talented and curious beginner who wants to learn more about technology and its role in improving social equity, or a veteran of the hackathon scene looking for a unique challenge, Zenith invites you to take part and work towards a brighter future.',
    'We want you to improve the world and yourself in the process; at the event, you’ll encounter enriching competitions, fun challenges, and the chance to work on brilliant ideas with technical mentors, fellow hackers, and professionals in various fields.'
  ],
  lastYear: {
    header: 'A Look Back at 2019',
    statBubbles: [
      {
        desc: 'Participation',
        contents: (
          <div>
            400+ participants
          </div>
        ),
        backgroundColor: siteColors.darkerBlue,
        color: 'white'
      },
      {
        desc: 'Events',
        contents: (
          <div>
            10+ fun and programming events
          </div>
        ),
        backgroundColor: siteColors.lighterBlue,
        color: 'siteColors.offBlack'
      },
      {
        desc: 'Code Relay',
        contents: (
          <div>
            Prizes worth 50,000 plus to win.
          </div>
        ),
        backgroundColor: siteColors.darkerBlue,
        color: 'white'
      },
    ]
  },
  thisYear: {
    header: 'A Look At 2019',
    statCounters: [
      {
        start: 0,
        end: 400,
        suffix: '+',
        subtitle: 'Attendees',
        gridArea: 'statAttendees'
      },
      { start: 0, end: 3, subtitle: 'Days', gridArea: 'statDuration' },
      {
        start: 0,
        end: 20,
        suffix: '+',
        textAbove: 'Participant in fun and coding events:',
        subtitle: 'Events',
        color: siteColors.lighterPurple,
        gridArea: 'statCategories'
      },
      {
        start: 100,
        end: 1,
        subtitle: 'Common Goal',
        color: 'white',
        gridArea: 'statGoal'
      }
    ],
    categories: [
      {
        name: '12 hour Hackathon',
        contents: <div style={{ fontWeight: 500 }}>12 hour Hackathon</div>,
        backgroundColor: siteColors.lighterBlue,
        color: 'siteColors.offBlack'
      },
      {
        name: 'Xunbao quiz',
        contents: <div style={{ fontWeight: 500 }}>Xunbao quiz</div>,
        backgroundColor: siteColors.darkerBlue,
        color: 'white'
      },
      {
        name: 'Ar Treasure Hunt Event',
        contents: <div style={{ fontWeight: 500 }}>Ar Treasure Hunt Event</div>,
        backgroundColor: siteColors.lighterBlue,
        color: 'siteColors.offBlack'
      },
      {
        name: 'Code Xplode',
        contents: <div style={{ fontWeight: 500 }}>Code Xplode</div>,
        backgroundColor: siteColors.lighterBlue,
        color: 'siteColors.offBlack'
      },
      {
        name: 'Vr Gaming',
        contents: <div style={{ fontWeight: 500 }}>Vr Gaming</div>,
        backgroundColor: siteColors.darkerBlue,
        color: 'white'
      },
      {
        name: 'PS4 Gaming',
        contents: <div style={{ fontWeight: 500 }}>PS4 Gaming</div>,
        backgroundColor: siteColors.darkerBlue,
        color: 'white'
      },
      {
        name: 'Lan Gaming',
        contents: <div style={{ fontWeight: 500 }}>Lan Gaming</div>,
        backgroundColor: siteColors.darkerBlue,
        color: 'white'
      },

      {
        name: 'Move Mirror',
        contents: <div style={{ fontWeight: 500 }}>Move Mirror</div>,
        backgroundColor: siteColors.darkerBlue,
        color: 'white'
      },
      {
        name: 'Drone Racing',
        contents: <div style={{ fontWeight: 500 }}>Drone Racing</div>,
        backgroundColor: siteColors.darkerBlue,
        color: 'white'
      }
    ]
  }
};

export const sponsorBubbleTiers = {
  diamond: 250,
  gold: 220,
  silver: 190,
  bronze: 160
};

export const sponsorsPageData = {
  header: 'Previous Sponsors',
  sponsorUsBlurb:
    'Zenith would not be possible without the generous sponsorship of companies and individuals who have all exhibited a passion for social innovation and are commited to helping us improve the world, one project at a time.',
  sponsorAction: {
    actionText: 'Interested in sponsoring?',
    link: {
      text: 'Shoot us an email.',
      to:
        'mailto: manantechnosurge@gmail.com?subject=Zenith Sponsorship/Partnership Inquiry'
    }
  },
  shouldShowSponsorBubbles: true,
  sponsorBubbles: [
    {
      name: 'Balsamiq',
      size: sponsorBubbleTiers.gold,
      link: 'https://www.balsamiq.com',
      imgSrc: require('../static/img/sponsors/logos/logo_balsamiq.png'),
      color: '#fff',
      backgroundColor: '#cc0000',
      x: 10,
      y: 20,
      vy: 0.1
    },
    {
      name: 'DigitalOcean',
      size: sponsorBubbleTiers.gold,
      link: 'https://www.digitalocean.com',
      imgSrc: require('../static/img/sponsors/logos/logo_digitalocean.png'),
      color: '#fff',
      backgroundColor: '#0080FF',
      x: 10,
      y: 20,
      vy: 0.1
    },
    {
      name: 'Sticker Mule',
      size: sponsorBubbleTiers.gold,
      link: 'https://www.stickermule.com/ca',
      imgSrc: require('../static/img/sponsors/logos/logo_stickermule.png'),
      color: '#fff',
      backgroundColor: '#4E2817',
      x: 10,
      y: 20,
      vy: 0.1
    },
    {
      name: 'Coding Ninja',
      size: sponsorBubbleTiers.gold,
      link: 'https://www.codingninjas.com',
      imgSrc: require('../static/img/sponsors/logos/codingninja.svg'),
      color: '#fff',
      backgroundColor: '#f8c56d',
      x: 10,
      y: 20,
      vy: 0.1
    },
    {
      name: 'CodeShala',
      size: sponsorBubbleTiers.gold,
      link: 'https://codeshala.org',
      imgSrc: require('../static/img/sponsors/logos/codeshala.png'),
      color: '#fff',
      backgroundColor: '#f8c56d',
      x: 10,
      y: 20,
      vy: 0.1
    },
    {
      name: 'Linode',
      size: sponsorBubbleTiers.gold,
      link: 'https://www.linode.com/company/about/',
      imgSrc: require('../static/img/sponsors/logos/linode.png'),
      color: '#fff',
      backgroundColor: '#02b159',
      x: 10,
      y: 20,
      vy: 0.1
    },
    {
      name: 'Coding Block',
      size: sponsorBubbleTiers.silver,
      link: 'https://codingblocks.com/',
      imgSrc: require('../static/img/sponsors/logos/codingblock.png'),
      color: '#fff',
      backgroundColor: '#cc0000',
      x: 10,
      y: 20,
      vy: 0.1
    },
    {
      name: 'Sketch',
      size: sponsorBubbleTiers.silver,
      link: 'https://www.sketch.com/',
      imgSrc: require('../static/img/sponsors/logos/Sketch_Logo.svg'),
      color: '#fff',
      backgroundColor: '#feeeb7',
      x: 10,
      y: 20,
      vy: 0.1
    },
    {
      name: 'Hacker Earth',
      size: sponsorBubbleTiers.silver,
      link: 'https://hackerearth.com/',
      imgSrc: require('../static/img/sponsors/logos/hackerearth.svg'),
      color: '#fff',
      backgroundColor: 'grey',
      x: 10,
      y: 20,
      vy: 0.1
    },
    {
      name: 'Gitlab',
      size: sponsorBubbleTiers.silver,
      link: 'https://gitlab.com/',
      imgSrc: require('../static/img/sponsors/logos/gitlabo.png'),
      color: '#fff',
      backgroundColor: '#fca326',
      x: 10,
      y: 20,
      vy: 0.1
    },
  ]
};

export const FAQPageData = {
  header: 'Frequently Asked Questions',
  faqs: [
    {
      question: 'What exactly do you do at Zenith?',
      answer:
        'Over the course of 3 days, you and your team will participate in varous enriching and exciting challenges including coding contests, 8-hour hackathon and various other fun activities.'
    },
    {
      question: 'When is Zenith happening this year?',
      answer:
        'Save the date! Zenith will be held on April 11-13, 2020 at the J.C Bose University, YMCA, Faridabad. '
    },
    {
      question: "Who's able to attend?",
      answer:
        'As long as you’re currently enrolled in a institution or a local high school, we’d love to see you at the events as a hacker! If you’re not, don’t worry - you’ll have the chance to share your knowledge as a mentor or volunteer.'
    },
    {
      question: 'How is Zenith-Hackathon different from other hackathons?',
      answer:
        'Zenith is one of its kind in the hackathon community! We are a 8-hour hackathon and our categories are targeted specifically at tackling today’s most pressing social equity issues.'
    },
    {
      question: 'When will applications open for 2020?',
      answer:
        'Applications will be live later this term. Be sure to subscribe to our mailing list and/or follow us on our social media platforms to stay updated!'
    },
    {
      question: "I'm interested! Where can I find more information?",
      answer:
        'Subscribe to our mailing list and follow us on Instagram, Twitter, LinkedIn, and Facebook for more updates! Feel free to reach out to us at manantechosurge@gmail.com if you have any further questions.'
    }
  ],
  FAQAction: {
    actionText: 'Have another burning question?',
    link: {
      text: "Talk to our team.",
      to: 'mailto: manantechnosurge@gmail.com'
    }
  }
};


export const Contact = {
  numbers: [
    {
      name: "Riya Khajanchi",
      phone: "+91 9910326642"
    },
    {
      name: "Simran Nehra",
      phone: "+91 9910326642"
    }
  ],
  email: "manantechnosurge@gmail.com",
  address: footerdata.address
}