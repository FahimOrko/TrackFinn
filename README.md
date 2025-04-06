## Train Tracker - Real-Time Train Information

A web application that provides live tracking information for trains in Finland. The app allows users to see currently running trains on a map, search for trains by type and number, and view real-time train details, including location and status.

### Features

- Home Page: Displays general information about the website with a full-height hero section, text, and an image. Users can click a button to navigate to the train details page.
- Train Details Page: Shows a map with currently running trains. Includes a search form to allow users to find specific trains by type and number.

- Live Map: Displays real-time locations of running trains across Finland.

- Train Search: Users can search for a specific train by its type and number. The app shows the train's location on the map and provides additional information.

### Tech Stack

- Frontend: React

- Styling: Tailwind CSS

- Routing: React Router

- Data Fetching: React Query

- Animations: Framer Motion

- Build Tool: Vite

### Project Setup

To get this project up and running locally, follow these steps:

- Clone the repository

```sh
git clone https://github.com/your-username/train-tracker.git
cd train-tracker
```

- Install dependencies:

```sh
npm install
```

- Run the development server

```sh
npm run dev
```

### Directory Structure

src/
├── assets/ # Images, icons, etc.
├── components/ # Reusable components like buttons, headers, etc.
├── pages/ # Pages like HomePage, TrainDetailsPage
├── styles/ # Tailwind CSS and custom styles
├── utils/ # Helper functions or utilities
├── App.js # Main component with routing
└── index.js # Entry point for React app
