import { calculateAppsDict, sortApps } from "./lib/utils";

const Alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "#",
];
const folders = [
  {
    name: "Games",
    icons: [
      { src: "/icons/Games/calculator.png", name: "Calculator" },
      { src: "/icons/Games/compass.png", name: "Compass" },
      { src: "/icons/Games/settings.png", name: "Settings" },
    ],
  },
  {
    name: "Creativity",
    icons: [
      { src: "/icons/Creativity/imovie.png", name: "iMovie" },
      { src: "/icons/Creativity/measure.png", name: "Measure" },
      { src: "/icons/Creativity/music.png", name: "Music" },
      { src: "/icons/Creativity/numbers.png", name: "Numbers" },
      { src: "/icons/Creativity/pages.png", name: "Pages" },
      { src: "/icons/Creativity/phone.png", name: "Phone" },
      { src: "/icons/Creativity/photos.png", name: "Photos" },
    ],
  },
  {
    name: "Recently Added",
    icons: [
      { src: "/icons/RecentlyAdded/apple-store.png", name: "Apple Store" },
      { src: "/icons/RecentlyAdded/calendar.png", name: "Calendar" },
      { src: "/icons/RecentlyAdded/camera.png", name: "Camera" },
      { src: "/icons/RecentlyAdded/clips.png", name: "Clips" },
      { src: "/icons/RecentlyAdded/clock.png", name: "Clock" },
      { src: "/icons/RecentlyAdded/contacts.png", name: "Contacts" },
      { src: "/icons/RecentlyAdded/facetime.png", name: "FaceTime" },
      { src: "/icons/RecentlyAdded/files.png", name: "Files" },
      { src: "/icons/RecentlyAdded/health.png", name: "Health" },
      { src: "/icons/RecentlyAdded/home.png", name: "Home" },
      { src: "/icons/RecentlyAdded/keynote.png", name: "Keynote" },
      { src: "/icons/Creativity/imovie.png", name: "iMovie" },
      { src: "/icons/Creativity/measure.png", name: "Measure" },
      { src: "/icons/Creativity/music.png", name: "Music" },
      { src: "/icons/Creativity/numbers.png", name: "Numbers" },
      { src: "/icons/Creativity/pages.png", name: "Pages" },
      { src: "/icons/Creativity/phone.png", name: "Phone" },
      { src: "/icons/Creativity/photos.png", name: "Photos" },
      { src: "/icons/Games/calculator.png", name: "Calculator" },
      { src: "/icons/Games/compass.png", name: "Compass" },
      { src: "/icons/Games/settings.png", name: "Settings" },
      { src: "/icons/Suggestions/reminders.png", name: "Reminders" },
      { src: "/icons/Suggestions/safari.png", name: "Safari" },
      { src: "/icons/Suggestions/stocks.png", name: "Stocks" },
      { src: "/icons/Suggestions/tv.png", name: "TV" },
      { src: "/icons/Suggestions/voice-memos.png", name: "Voice Memos" },
      { src: "/icons/Sport/app-store.png", name: "App Store" },
      { src: "/icons/Sport/books.png", name: "Books" },
      { src: "/icons/Sport/find-my.png", name: "Find My" },
      { src: "/icons/Sport/idea.png", name: "Idea" },
    ],
  },
  {
    name: "Suggestions",
    icons: [
      { src: "/icons/Suggestions/reminders.png", name: "Reminders" },
      { src: "/icons/Suggestions/safari.png", name: "Safari" },
      { src: "/icons/Suggestions/stocks.png", name: "Stocks" },
      { src: "/icons/Suggestions/tv.png", name: "TV" },
      { src: "/icons/Suggestions/voice-memos.png", name: "Voice Memos" },
    ],
  },
  {
    name: "Utilities",
    icons: [
      { src: "/icons/Utilities/imovie.png", name: "iMovie" },
      { src: "/icons/Utilities/measure.png", name: "Measure" },
      { src: "/icons/Utilities/music.png", name: "Music" },
      { src: "/icons/Utilities/numbers.png", name: "Numbers" },
    ],
  },
  {
    name: "Other",
    icons: [
      { src: "/icons/Other/pages.png", name: "Pages" },
      { src: "/icons/Other/phone.png", name: "Phone" },
      { src: "/icons/Other/photos.png", name: "Photos" },
    ],
  },
  {
    name: "Sport",
    icons: [
      { src: "/icons/Sport/app-store.png", name: "App Store" },
      { src: "/icons/Sport/books.png", name: "Books" },
      { src: "/icons/Sport/find-my.png", name: "Find My" },
      { src: "/icons/Sport/idea.png", name: "Idea" },
      { src: "/icons/Utilities/imovie.png", name: "iMovie" },
      { src: "/icons/Utilities/measure.png", name: "Measure" },
      { src: "/icons/Utilities/music.png", name: "Music" },
      { src: "/icons/Utilities/numbers.png", name: "Numbers" },
    ],
  },
  {
    name: "Social",
    icons: [
      { src: "/icons/Social/mail.png", name: "App Store" },
      { src: "/icons/Social/messages.png", name: "Books" },
      { src: "/icons/Social/podcast.png", name: "Find My" },
    ],
  },
  {
    name: "Entertainment",
    icons: [
      { src: "/icons/Entertainment/remote.png", name: "Remote" },
      { src: "/icons/Entertainment/video.png", name: "Video" },
      { src: "/icons/Entertainment/wifi.png", name: "Wifi" },
    ],
  },
];

let apps = [];
folders.reduce((acc, folder) => {
  folder.icons.forEach((icon) => {
    if (!acc[icon.name.toLowerCase()]) apps.push(icon);
    acc[icon.name.toLowerCase()] = icon;
  });
  return acc;
}, {});

apps = apps.sort(sortApps);
const appsDict = calculateAppsDict(apps);

const data = { apps, appsDict, folders };
export default data;
