import { IconType } from "react-icons";

import {
  HiOutlineRocketLaunch,
  HiOutlineCalendar,
  HiOutlineAcademicCap,
  HiOutlineTrophy,
  HiOutlineUsers,
  HiOutlineEnvelope,
  HiOutlinePhoto,
  HiOutlineHandRaised,
  HiOutlineGlobeAlt,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineClock,
} from "react-icons/hi2";

import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

import {
  SiIeee,
} from "react-icons/si";

export const iconLibrary: Record<string, IconType> = {
  rocket: HiOutlineRocketLaunch,
  calendar: HiOutlineCalendar,
  academicCap: HiOutlineAcademicCap,
  trophy: HiOutlineTrophy,
  users: HiOutlineUsers,
  envelope: HiOutlineEnvelope,
  photo: HiOutlinePhoto,
  handRaised: HiOutlineHandRaised,
  globe: HiOutlineGlobeAlt,
  phone: HiOutlinePhone,
  mapPin: HiOutlineMapPin,
  clock: HiOutlineClock,
  facebook: FaFacebook,
  twitter: FaTwitter,
  linkedin: FaLinkedin,
  linkedinIn: FaLinkedinIn,
  instagram: FaInstagram,
  github: FaGithub,
  youtube: FaYoutube,
  ieee: SiIeee,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;