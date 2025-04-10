## Train Tracker - Real-Time Train Information

A web application that provides live tracking information for trains in Finland. The app allows users to see currently running trains on a map, search for trains by type and number, and view real-time train details, including location and status.

Live Website - [Live Website](https://track-finn.vercel.app/)

---

### A Demo of the website

[Watch Demo Video](https://drive.google.com/file/d/1Qkl6kU6e1MP5usNEC7L-TeliqgozlSez/view)

---

### 🚀 Features

- Home Page: Displays general information about the website with a full-height hero section, text, and an image. Users can click a button to navigate to the train details page.

- Train Details Page:

  - Interactive map showing all currently running long-distance VR trains in Finland.

  - Search functionality where users can enter a train number, type, and departure date to fetch full timetable and status.

  - If the train is currently running, its live location is shown on the map, updated in real time.

- Live Map with Real-Time Data: Fetches data from the official VR API using React Query and displays train positions live on the map.

- Train Search Functionality: Users can search for a specific train using its type and number. The train’s location and live status are highlighted on the map with additional details.

### 🧰 Tech Stack

- Frontend: React

- Styling: Tailwind CSS

- Routing: React Router

- Data Fetching: React Query

- Form Management: Formik

- Validation: Yup

- Map Rendering: Mapbox GL JS

- Animations: Framer Motion

- Build Tool: Vite

### 📦 Project Setup

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

### 🗺️ Mapbox Setup

To render maps using Mapbox, you need a valid Mapbox API token. Follow these steps:

- Create an account at Mapbox.

- Generate an Access Token from your account dashboard.

- Create a .env file in the root of your project.

- Add the following line to the .env file:

```sh
VITE_MAPBOX_API_KEY=your_mapbox_access_token_here
```

### 📁 Directory Structure

```sh
src/
├── assets/ # Images, icons, etc.
├── components/ # Reusable components like buttons, headers, etc.
├── pages/ # Pages like HomePage, TrainDetailsPage
├── styles/ # Tailwind CSS and custom styles
├── utils/ # Helper functions or utilities
├── App.js # Main component with routing
└── index.js # Entry point for React app
```
