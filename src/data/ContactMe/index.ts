// Icon
import {
  faEnvelope,
  faLocationDot,
  faPhone,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
// Type
export type ContactMeListType = {
  title: string;
  icon: IconDefinition;
  value: string;
  url: string;
  color: string;
};
// Data
export const ContactMeListData: ContactMeListType[] = [
  {
    title: "Phone",
    icon: faPhone,
    value: "+855 87932289",
    url: "tel:+855 87932289",
    color: "oklch(62.3% 0.214 259.815)",
  },
  {
    title: "Email",
    icon: faEnvelope,
    value: "angkimsor@gmail.com",
    url: "mailto:angkimsor@gmail.com",
    color: "oklch(65.6% 0.241 354.308)",
  },
  {
    title: "Location",
    icon: faLocationDot,
    value: "Phnom Penh, Cambodia",
    url: "https://maps.app.goo.gl/Bd9hMcfw6RVkuis26",
    color: "oklch(63.7% 0.237 25.331)",
  },
];
