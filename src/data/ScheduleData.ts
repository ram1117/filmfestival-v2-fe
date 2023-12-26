const scheduleData = [
  {
    date: "16 Nov",
    events: [
      {
        time: "10:00 AM",
        list: [
          {
            id: 1,
            title: "Woman Of",
            description: "Drama written and directed by Michal Englert",
            eventColorCode: "#eceff4",
            icon: "/icons/events/icon-screen-dark.svg",
            venue: "Luxe Screen 1",
          },
        ],
      },
      {
        time: "02:00 PM",
        list: [
          {
            id: 2,
            title: "Cinematography and Stills",
            description:
              "Workshop by cinematographer and director Priyadarshan",
            eventColorCode: "#fee1d9",
            icon: "/icons/events/icon-camera-dark.svg",
            venue: "MGR Institute Lecture Hall 2",
          },
          {
            id: 3,
            title: "Sanaa",
            description: "2022 drama written and directed by Sudhanshu Saria",
            eventColorCode: "#eceff4",
            icon: "/icons/events/icon-screen-dark.svg",
            venue: "Luxe Screen 1",
          },
        ],
      },
      {
        time: "06:00 PM",
        list: [
          {
            id: 4,
            title: "Pookkaalam",
            description: "2023 romantic drama directed by Ganesh Raj",
            eventColorCode: "#eceff4",
            icon: "/icons/events/icon-screen-dark.svg",
            venue: "Luxe Screen 3",
          },
        ],
      },
    ],
  },
  {
    date: "17 Nov",
    events: [
      {
        time: "10:00 AM",
        list: [
          {
            id: 1,
            title: "The Other Widow",
            description: "Mystery thriller directed by Maayan Rypp",
            eventColorCode: "#eceff4",
            icon: "/icons/events/icon-screen-dark.svg",
            venue: "Luxe Screen 1",
          },
        ],
      },
      {
        time: "02:00 PM",
        list: [
          {
            id: 3,
            title: "Party Of Fools",
            description: "Drama written and directed by Michal Englert",
            eventColorCode: "#eceff4",
            icon: "/icons/events/icon-screen-dark.svg",
            venue: "Luxe Screen 5",
          },
          {
            id: 2,
            title: "Makeup",
            description: "Workshop by veteran makeup-artist K. M. Sarathkumar",
            eventColorCode: "#fee1d9",
            icon: "/icons/events/icon-camera-dark.svg",
            venue: "MGR Institute Lecture Hall 2",
          },
        ],
      },
      {
        time: "06:00 PM",
        list: [
          {
            id: 4,
            title: "Neela Nira Sooriyan",
            description:
              "Tamil Drama written and directed by Samyuktha Vijayan",
            eventColorCode: "#eceff4",
            icon: "/icons/events/icon-screen-dark.svg",
            venue: "Luxe Screen 3",
          },
        ],
      },
    ],
  },
  {
    date: "18 Nov",
    events: [
      {
        time: "10:00 AM",
        list: [
          {
            id: 1,
            title: "Measures Of Men",
            description: "2023 German drama film directed by Lars Kraume",
            eventColorCode: "#eceff4",
            icon: "/icons/events/icon-screen-dark.svg",
            venue: "Luxe Screen 2",
          },
        ],
      },
      {
        time: "02:00 PM",
        list: [
          {
            id: 2,
            title: "Measures Of Men",
            description: "2023 German drama film directed by Lars Kraume",
            eventColorCode: "#eceff4",
            icon: "/icons/events/icon-screen-dark.svg",
            venue: "Luxe Screen 2",
          },
          {
            id: 3,
            title: "Acting and Comedy",
            description: "Workshop by veteran actor Naasar",
            eventColorCode: "#fee1d9",
            icon: "/icons/events/icon-camera-dark.svg",
            venue: "MGR Institute Lecture Hall 2",
          },
        ],
      },
      {
        time: "06:00 PM",
        list: [
          {
            id: 4,
            title: "Lubo",
            description:
              "2023 Italian-Swiss drama film directed by Giorgio Diritti",
            eventColorCode: "#eceff4",
            icon: "/icons/events/icon-screen-dark.svg",
            venue: "Luxe Screen 1",
          },
          {
            id: 6,
            title: "Press Meet",
            description: "International Entries Press Meet",
            eventColorCode: "#dfdff9",
            icon: "/icons/events/icon-press-dark.svg",
            venue: "Banquet Hall, The Accord",
          },
        ],
      },
    ],
  },
  {
    date: "19 Nov",
    events: [
      {
        time: "10:00 AM",
        list: [
          {
            id: 5,
            title: "Aattam",
            description:
              "Malayalam movie written and directed by Anand Ekarshi",
            eventColorCode: "#eceff4",
            icon: "/icons/events/icon-screen-dark.svg",
            venue: "Luxe Screen 7",
          },
        ],
      },
      {
        time: "02:00 PM",
        list: [
          {
            id: 6,
            title: "Press Meet",
            description: "Indian Entries Press Meet",
            eventColorCode: "#dfdff9",
            icon: "/icons/events/icon-press-dark.svg",
            venue: "Banquet Hall, The Accord",
          },
          {
            id: 4,
            title: "Makeup",
            description: "Workshop by veteran makeup-artist K. M. Sarathkumar",
            eventColorCode: "#fee1d9",
            icon: "/icons/events/icon-camera-dark.svg",
            venue: "MGR Institute Lecture Hall 2",
          },
        ],
      },
      {
        time: "06:00 PM",
        list: [
          {
            id: 6,
            title: "Press Meet",
            description: "Indian Entries Press Meet",
            eventColorCode: "#dfdff9",
            icon: "/icons/events/icon-press-dark.svg",
            venue: "Banquet Hall, The Accord",
          },
        ],
      },
    ],
  },
  {
    date: "20 Nov",
    events: [
      { time: "10:00 AM", list: [] },
      { time: "02:00 PM", list: [] },
      {
        time: "06:00 PM",
        list: [
          {
            id: 4,
            title: "Awards Ceremony",
            description:
              "Awards Ceremony for winning entries, special awards and Life Time Achievement award",
            eventColorCode: "#d8f1ee",
            icon: "/icons/events/icon-medal-dark.svg",
            venue: "Nehru Indoor Stadium, Chennai",
          },
        ],
      },
    ],
  },
];

export const scheduleLegendData = [
  {
    id: 1,
    name: "Screening",
    icon: "/icons/events/icon-screen-dark.svg",
    eventColorCode: "#eceff4",
    alt: "movie icon",
  },
  {
    id: 2,
    name: "Workshop",
    icon: "/icons/events/icon-camera-dark.svg",
    eventColorCode: "#fee1d9",
    alt: "workshop icon",
  },
  {
    id: 3,
    name: "Press Meet",
    icon: "/icons/events/icon-press-dark.svg",
    eventColorCode: "#dfdff9",
    alt: "press icon",
  },
  {
    id: 4,
    name: "Awards",
    icon: "/icons/events/icon-medal-dark.svg",
    eventColorCode: "#d8f1ee",
    alt: "awards icon",
  },
];

export default scheduleData;
