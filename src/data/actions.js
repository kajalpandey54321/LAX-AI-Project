import {
  MessageSquare,
  Globe,
  CalendarDays,
  Music2,
  Cloud,
  Lightbulb,
  Calculator,
  Image
} from "lucide-react";

export const actions = [
  {
    id: 1,
    title: "AI Chat",
    description: "Ask anything and get answers.",
    icon: MessageSquare,
    onClick: () => console.log("AI Chat")
  },
  {
    id: 2,
    title: "Web Search",
    description: "Explore information online.",
    icon: Globe,
    onClick: () => console.log("Web Search")
  },
  {
    id: 3,
    title: "Calendar",
    description: "Manage your daily schedule.",
    icon: CalendarDays,
    onClick: () => console.log("Calendar")
  },
  {
    id: 4,
    title: "Music",
    description: "Control your music.",
    icon: Music2,
    onClick: () => console.log("Music")
  },
  {
    id: 5,
    title: "Weather",
    description: "Check weather information.",
    icon: Cloud,
    onClick: () => console.log("Weather")
  },
  {
    id: 6,
    title: "Ideas",
    description: "Generate creative ideas.",
    icon: Lightbulb,
    onClick: () => console.log("Ideas")
  },
  {
    id: 7,
    title: "Calculator",
    description: "Perform calculations.",
    icon: Calculator,
    onClick: () => console.log("Calculator")
  },
  {
    id: 8,
    title: "Images",
    description: "Explore image features.",
    icon: Image,
    onClick: () => console.log("Images")
  }
];