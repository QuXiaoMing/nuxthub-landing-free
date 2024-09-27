import type { Page, Pricing } from "@/types/landing";
import {
  Smartphone,
  Box,
  Paintbrush,
  Users,
  Globe,
  Zap
} from 'lucide-vue-next'

const pricing: Pricing = {
  freePlan: {
    title: "Free",
    description: "Perfect for getting started and exploring our features.",
    price: 0,
    features: [
      "Access to basic templates",
      "Limited component library",
      "Community support",
      "1 project",
      "Basic customization options"
    ],
    ctaText: "Get Started",
    ctaLink: "#",
    isPrimary: false,
    discountedPrice: 0,
    discountPercentage: 0
  },
  proPlan: {
    title: "Pro",
    description: "Best for professionals and growing businesses.",
    price: 29,
    features: [
      "Access to all templates",
      "Full component library",
      "Priority email support",
      "Unlimited projects",
      "Advanced customization options",
      "Regular updates"
    ],
    ctaText: "Upgrade to Pro",
    ctaLink: "#",
    isPrimary: true,
    discountedPrice: 24,
    discountPercentage: 20
  },
  enterprisePlan: {
    title: "Enterprise",
    description: "Tailored solutions for large-scale applications.",
    price: 99,
    features: [
      "Everything in Pro",
      "Custom templates",
      "Dedicated support team",
      "SLA guarantees",
      "Advanced security features",
      "Custom integrations"
    ],
    ctaText: "Contact Sales",
    ctaLink: "#",
    isPrimary: false,
    discountedPrice: 79,
    discountPercentage: 20
  }
}

export const page: Page = {
  title: "Nuxthub Landing Free",
  description: "A powerful NuxtHub template",
  template: "salient",
  theme: "light",
  header: {
    brand: {
      title: "Nuxthub Landing Free", 
      avatar: {
        src: "https://nuxthub.com/imgs/logo.png", 
        title: "Nuxthub Landing", 
      },
      url: "/",
    },
    nav: {
      items: [
        {
          title: "Features",
          url: "#features",
          target: "_self",
        },
        {
          title: "Pricing",
          url: "#pricing",
          target: "_self",
        },
        {
          title: "Documentation",
          url: "https://github.com/ixdevv/nuxthub-landing-free", 
          target: "_blank",
        },
        {
          title: "Blog",
          url: "https://github.com/ixdevv/nuxthub-landing-free", 
          target: "_blank",
        },
      ],
    },
    buttons: [
      {
        title: "Get Started",
        url: "https://github.com/ixdevv/nuxthub-landing-free", 
        target: "_blank",
      },
    ],
  },
  hero: {
    title: "Build Stunning Nuxt Landing Pages with Ease",
    description:
      "A high-performance, SEO-friendly Nuxthub landing template. Built with Nuxt 3, Shadcn UI, Tailwind CSS. With its intuitive design and pre-built components, you can launch your landing page in minutes.",
    image: {
      src: "/hero.png",
    },
    image_position: "right",
    text_align: "left",
    buttons: [
      {
        title: "Download Template",
        url: "https://github.com/ixdevv/nuxthub-landing-free", 
        target: "_blank",
      }
    ],
    show_happy_users: false,
    show_proof: false,
  },
  section: {
    items: [
      {
        name: "what",
        title: "What is Nuxthub Landing Free?",
        description:
          "Nuxthub Landing Free is a free and open-source Nuxt template that provides a solid foundation for creating professional landing pages. It's packed with features and designed to be easily customizable, so you can create a landing page that perfectly reflects your brand.",
        image: {
          src: "/feature.jpg", 
        },
        image_position: "left",
        text_align: "center",
        items: [
          {
            title: "Modern Design",
            description:
              "Nuxthub Landing Free features a clean and modern design that is visually appealing and easy to navigate.",
          },
          {
            title: "Mobile Responsive",
            description:
              "Your landing page will look great on all devices, from desktops to smartphones.",
          },
          {
            title: "Pre-built Components",
            description:
              "Utilize a variety of pre-built components, such as hero sections, call-to-action buttons, and testimonials, to quickly assemble your landing page.",
          },
        ],
      },
      {
        name: "why",
        title: "Why Choose Nuxthub Landing Free?",
        description:
          "Nuxthub Landing Free offers a simple and efficient way to create high-quality landing pages without the need for extensive coding. Here's why you should choose it:",
        image: {
          src: "/feature.jpg", 
        },
        image_position: "right",
        text_align: "center",
        items: [
          {
            title: "Free and Open Source",
            description: "Nuxthub Landing Free is completely free to use and modify.",
          },
          {
            title: "Easy Customization",
            description: "Customize the template to match your brand and preferences.",
          },
          {
            title: "Built on NuxtHub",
            description:
              "Leverage the power of NuxtHub for effortless deployment and scalability.",
          },
        ],
      },
      {
        name: "how",
        title: "How to Use Nuxthub Landing Free",
        description:
          "Getting started with Nuxthub Landing Free is easy. Follow these steps:",
        image: {
          src: "/feature.jpg", 
        },
        image_position: "left",
        text_align: "center",
        items: [
          {
            title: "1. Download the Template",
            description:
              "Download the template from GitHub.",
          },
          {
            title: "2. Install Dependencies",
            description:
              "Run `npm install` or `yarn install` to install required packages.",
          },
          {
            title: "3. Customize the Template",
            description:
              "Modify the content, styles, and components to create your unique landing page.",
          },
          {
            title: "4. Deploy with NuxtHub",
            description:
              "Utilize NuxtHub for easy deployment and hosting.",
          },
        ],
        buttons: [
          {
            title: "Get Started Now 👉",
            url: "#", 
            target: "_blank",
          },
        ],
      },
    ],
  },
  feature: {
    title: "Key Features of Nuxthub Landing Free",
    description:
      "Nuxthub Landing Free is packed with features to help you create a professional and effective landing page.",
    items: [
      {
        title: "Responsive Design",
        description:
          "Create stunning websites that adapt seamlessly to different screen sizes and devices.",
        icon: Smartphone,
      },
      {
        title: "Extensive Component Library",
        description:
          "Choose from a vast collection of pre-built components to accelerate your application development.",
        icon: Box,
      },
      {
        title: "Customizable Styles",
        description:
          "Easily customize the look and feel of your application with our flexible styling options.",
        icon: Paintbrush,
      },
      {
        title: "Accessibility Ready",
        description:
          "Ensure your application is accessible to all users, regardless of their abilities or devices.",
        icon: Users,
      },
      {
        title: "Cross-Browser Compatibility",
        description:
          "Rest assured that your application will work flawlessly across all major browsers.",
        icon: Globe,
      },
      {
        title: "Optimized Performance",
        description:
          "Deliver fast-loading and smooth user experiences with our performance-optimized codebase.",
        icon: Zap,
      },
    ],
  },
  cta: {
    title: "Ready to Build Your Landing Page?",
    description: "Download Nuxthub Landing Free and start creating today!",
    buttons: [
      {
        title: "Download Template",
        url: "https://github.com/ixdevv/nuxthub-landing-free", 
        target: "_blank",
      },
    ],
  },
  testimonial: {
    title: "What Our Clients Say",
    items: [
      {
        id: 1,
        name: "Sarah Johnson",
        role: "CTO",
        company: "TechInnovate",
        content: "TechCorp's AI solutions have transformed our business processes, increasing efficiency by 40%.",
        avatar: "https://picsum.photos/200?t=1"
      },
      {
        id: 2,
        name: "Michael Chen",
        role: "CEO",
        company: "DataDrive",
        content: "The insights we've gained from their AI analytics have been game-changing for our decision-making.",
        avatar: "https://picsum.photos/200?t=2"
      },
      {
        id: 3,
        name: "Emily Rodriguez",
        role: "Head of AI",
        company: "FutureTech",
        content: "Their natural language processing models have significantly improved our customer interactions.",
        avatar: "https://picsum.photos/200?t=3"
      }
    ]
  },
  faq: {
    title: "Frequently Asked Questions",
    description: "Find answers to common questions about Nuxthub Landing Free:",
    items: [
      {
        title: "Is Nuxthub Landing Free really free?",
        description: "Yes, Nuxthub Landing Free is completely free to use and modify under the MIT license.",
        isOpen: false
      },
      {
        title: "Can I use Nuxthub Landing Free for commercial projects?",
        description: "Absolutely! You can use Nuxthub Landing Free for any type of project, including commercial ones.",
        isOpen: false
      },
      {
        title: "Do I need to know Nuxt.js to use Nuxthub Landing Free?",
        description: "While basic knowledge of Nuxt.js is helpful, Nuxthub Landing Free is designed to be easy to use, even for beginners. You can customize the template without extensive coding experience.",
        isOpen: false
      },
    ],
  },
  footer: {
    brand: {
      title: "Nuxthub Landing Free", 
      description:
        "Nuxthub Landing Free is a free and open-source Nuxt template that makes creating beautiful and functional landing pages a breeze.",
      avatar: {
        src: "https://nuxthub.com/imgs/logo.png", 
        title: "Nuxthub Landing Free", 
      },
      url: "#", 
    },
    badge_disabled: false,
    copyright: "© 2024 • Nuxthub Landing Free All rights reserved.",
    social: {
      items: [
        {
          title: "Twitter",
          url: "https://twitter.com/nuxthub",
          target: "_blank",
        },
        {
          title: "GitHub",
          url: "https://github.com/nuxthub",
          target: "_blank",
        },
        {
          title: "LinkedIn",
          url: "https://www.linkedin.com/company/nuxthub",
          target: "_blank",
        },
        {
          title: "Discord",
          url: "https://discord.gg/nuxthub",
          target: "_blank",
        },
        {
          title: "Email",
          url: "mailto:support@nuxthub.com",
          target: "_self",
        },
      ],
    },
    nav: {
      items: [
        {
          title: "Product",
          children: [
            {
              title: "Features",
              url: "#features",
              target: "_self",
            },
            {
              title: "Pricing",
              url: "#pricing",
              target: "_self",
            },
          ],
        },
        {
          title: "Resources",
          children: [
            {
              title: "Documentation",
              url: "https://github.com/ixdevv/nuxthub-landing-free",
              target: "_blank",
            },
            {
              title: "Blog",
              url: "https://github.com/ixdevv/nuxthub-landing-free",
              target: "_blank",
            },
            {
              title: "Shadcn UI Pro",
              url: "https://pro.shadcn.net/",
              target: "_blank",
            },
          ],
        },
        {
          title: "Company",
          children: [
            {
              title: "About Us",
              url: "/about",
              target: "_self",
            },
            {
              title: "Careers",
              url: "/careers",
              target: "_self",
            },
            {
              title: "Contact",
              url: "/contact",
              target: "_self",
            },
          ],
        },
      ],
    },
  },
  pricing: pricing,
};
