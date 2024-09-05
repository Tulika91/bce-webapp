# TV Show App

A simple TV Show content management system built with **React**, **Material-UI**, and **React Router**. Users can search for TV shows, view detailed information, and navigate between popular shows, episodes, and more.

## Features

- **Search for TV Shows**: Users can search for TV shows using a debounced search input.
- **View TV Show Details**: Detailed pages for each TV show, including episodes and cast.
- **Infinite Scrolling**: Automatically load more TV shows as the user scrolls.
- **Styled with Material-UI**: A modern look and feel provided by Material-UI components and customization.

## Tech Stack

- **React** (Frontend library)
- **Material-UI** (UI components)
- **React Router** (Routing between pages)
- **Axios** (Handling API requests)
- **TVMaze API** (Fetching TV show data)

## Prerequisites

Before you begin, ensure you have installed the following on your machine:

- [Node.js](https://nodejs.org/) (v14 or above)
- npm or yarn (depending on your preference)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Tulika91/bce-webapp.git
```

### 2. Navigate to the Project Directory

```bash
cd bce-webapp
```

### 3. Install Dependencies

```bash
npm install
or
yarn install
```

### 4. Run the App

```bash
npm run dev
```

### API Integration

This app uses the TVMaze API to fetch TV show data. You don't need an API key; the API is free and open.

### Styling

All styling is handled by Material-UI. You can easily customize the theme, components, and layout by adjusting the sx prop or using the ThemeProvider provided by Material-UI.

### Contributing

Feel free to open issues or create pull requests if you find any bugs or have suggestions for new features.

### License

This project is licensed under the MIT License.
