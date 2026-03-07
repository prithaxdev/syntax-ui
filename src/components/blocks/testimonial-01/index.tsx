import type { Testimonial } from "./testimonial";
import TestimonialPage from "./testimonial";

const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "Syntax replaced messy UI kits and half-baked templates. Today our dashboards look premium, scale beautifully, and our team focuses on real features instead of design debt.",
    author: "Walter Dutcher",
    role: "CEO",
    image:
      "https://images.shadcnspace.com/assets/profiles/testimonial-user.png",
  },
  {
    quote:
      "Syntax replaced messy UI kits and half-baked templates. Today our dashboards look premium, scale beautifully, and our team focuses on real features instead of design debt.",
    author: "Errica Mcdowell",
    role: "Marketing Head",
    image:
      "https://images.shadcnspace.com/assets/profiles/testimonial-user-2.png",
  },
];

export default function Testimonial() {
  return (
    <main>
      <TestimonialPage testimonials={defaultTestimonials} />
    </main>
  );
}
