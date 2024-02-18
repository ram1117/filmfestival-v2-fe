import FilmIcon from "@public/icons/events/icon-screen-dark.svg";
import CameraIcon from "@public/icons/events/icon-camera-dark.svg";
import PressIcon from "@public/icons/events/icon-press-dark.svg";
import AwardIcon from "@public/icons/events/icon-medal-dark.svg";

interface IconSelectorTypes {
  [key: string]: { [key: string]: string };
}

export const IconSelector: IconSelectorTypes = {
  film: {
    icon: FilmIcon,
    alt: "film icon",
    color: "#eceff4",
  },
  workshop: {
    icon: CameraIcon,
    alt: "camera icon",
    color: "#fee1d9",
  },
  press: {
    icon: PressIcon,
    alt: "microphone icon",
    color: "#dfdff9",
  },
  awards: {
    icon: AwardIcon,
    alt: "medal icon",
    color: "#d8f1ee",
  },
};

export const colorSelector = [
  { color: "#eceff4", title: "Screeing" },
  { color: "#fee1d9", title: "Workshop" },
  { color: "#dfdff9", title: "Press Meet" },
  { color: "#d8f1ee", title: "Awards" },
];
