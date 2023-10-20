import { type Items } from "~/types";

export interface Services {
  icon: string;
  title: string;
  subtitle: string;
  url: string;
}

export interface VisionMission {
  title: string;
  subtitle: string;
}

export interface Features {
  image: string;
  icon: string;
  title: string;
  subtitle: string;
  url: string;
}

export interface Address {
  title: string;
  subtitle: string;
}

export interface Contacts {
  text: string;
  icon: string;
  url: string;
}

export interface Links {
  title: string;
  items: Items[];
}

export interface Icons {
  icon: string;
  url: string;
}
