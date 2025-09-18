// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/al-folio/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "things i&#39;ve tried to cook in the past...",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "please hire me :,)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/cv/";
          },
        },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/al-folio/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/al-folio/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "projects-crypto-tracker",
          title: 'crypto tracker',
          description: "crypto portfolio tracker",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/crypto_tracker/";
            },},{id: "projects-go-travel",
          title: 'go travel',
          description: "travel diary app",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/go_travel/";
            },},{id: "projects-gym-daddy",
          title: 'gym daddy',
          description: "virtual queuing + class booking for busy gyms",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/gym_daddy/";
            },},{id: "projects-loyalty-point-system",
          title: 'loyalty point system',
          description: "serverless multi-tenancy system for loyalty points tracking",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/loyalty_point_system/";
            },},{id: "projects-match-maker",
          title: 'match maker',
          description: "tournament management system",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/match_maker/";
            },},{id: "projects-spare-net",
          title: 'spare net',
          description: "p2p networking sharing",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/spare_net/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%68%61%77%6E%74%68%69%61%68@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/vynious", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/shawn-thiah", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/al-folio/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
