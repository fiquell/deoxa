import {
  type Address,
  type Contacts,
  type Features,
  type Icons,
  type Links,
  type Services,
  type VisionMission,
} from "~/interfaces";

export const SERVICES: Services[] = [
  {
    icon: "material-symbols:headset-mic-rounded",
    title: "Awesome Support",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus totam praesentium tenetur suscipit! Suscipit, tempora?",
    url: "/",
  },
  {
    icon: "material-symbols:rule-settings-rounded",
    title: "Solutions Business",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus totam praesentium tenetur suscipit! Suscipit, tempora?",
    url: "/",
  },
  {
    icon: "material-symbols:monitor-heart-rounded",
    title: "Digital Design",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus totam praesentium tenetur suscipit! Suscipit, tempora?",
    url: "/",
  },
  {
    icon: "material-symbols:trophy-rounded",
    title: "Goal Business",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus totam praesentium tenetur suscipit! Suscipit, tempora?",
    url: "/",
  },
  {
    icon: "material-symbols:lightbulb-rounded",
    title: "Branding Identity",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus totam praesentium tenetur suscipit! Suscipit, tempora?",
    url: "/",
  },
  {
    icon: "material-symbols:query-stats-rounded",
    title: "Dynamic Growth",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus totam praesentium tenetur suscipit! Suscipit, tempora?",
    url: "/",
  },
];

export const VISION_MISSION: VisionMission[] = [
  {
    title: "Our Vision",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus totam praesentium tenetur suscipit! Suscipit, tempora?",
  },
  {
    title: "Our Mission",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus totam praesentium tenetur suscipit! Suscipit, tempora?",
  },
];

export const FEATURES: Features[] = [
  {
    image: "/images/features/001.png",
    icon: "material-symbols:computer-outline",
    title: "Activity Reporting",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus totam praesentium tenetur suscipit! Suscipit, tempora?",
    url: "/",
  },
  {
    image: "/images/features/002.png",
    icon: "material-symbols:groups-outline",
    title: "Team Management",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus totam praesentium tenetur suscipit! Suscipit, tempora?",
    url: "/",
  },
  {
    image: "/images/features/003.png",
    icon: "material-symbols:analytics-outline",
    title: "Marketing Analysis",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus totam praesentium tenetur suscipit! Suscipit, tempora?",
    url: "/",
  },
];

export const ADDRESS: Address[] = [
  {
    title: "Address - A",
    subtitle: "3165 Roosevelt Wilson Riverside, CA 92507",
  },
  {
    title: "Address - B",
    subtitle: "1121 Bombardier Way Southfield, MI 48075",
  },
];

export const CONTACTS: Contacts[] = [
  {
    text: "+00 123-4567-8900",
    icon: "material-symbols:phone-enabled",
    url: "tel:12345678900",
  },
  {
    text: "support@deoxa.com",
    icon: "material-symbols:alternate-email-rounded",
    url: "mailto:support@deoxa.com",
  },
];

export const LINKS: Links[] = [
  {
    title: "Services",
    items: [
      { text: "Digital Marketing", url: "/" },
      { text: "Business Analysis", url: "/" },
      { text: "How It Work", url: "/" },
      { text: "Fix & Flip", url: "/" },
      { text: "Social Activation", url: "/" },
    ],
  },
  {
    title: "About Us",
    items: [
      { text: "Contact Us", url: "/" },
      { text: "FAQs", url: "/" },
      { text: "Blog", url: "/" },
      { text: "Privacy Policy", url: "/" },
    ],
  },
];

export const ICONS: Icons[] = [
  { icon: "fa6-brands:square-facebook", url: "/" },
  { icon: "fa6-brands:square-instagram", url: "/" },
  { icon: "fa6-brands:square-x-twitter", url: "/" },
];
