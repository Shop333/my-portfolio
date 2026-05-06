import { 
  LayoutDashboard, 
  User2, 
  Code2, 
  Briefcase, 
  MessageSquare, 
  FolderGit2,
  LineChart,
  Award // Import icon Award untuk Achievements
} from "lucide-react";

export const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
    icon: LayoutDashboard,
    description: "Main dashboard view"
  },
  {
    label: "Projects",
    href: "/projects",
    icon: FolderGit2,
    description: "Built & Deployed projects"
  },
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LineChart,
    description: "Stats & Coding Activity"
  },
  {
    label: "Achievements",
    href: "/achievements", 
    icon: Award,
    description: "Certifications & Awards"
  },
  {
    label: "Resume",
    href: "/about",
    icon: Briefcase,
    description: "Professional Journey"
  },
  {
    label: "Contact",
    href: "/contact",
    icon: MessageSquare,
    description: "Get in touch"
  },
];
