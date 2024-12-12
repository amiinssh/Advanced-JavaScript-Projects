# Music Player Application

## Overview

This project is a simple yet elegant **Music Player** built with HTML, CSS, and JavaScript. It features a responsive UI and essential music playback functionalities, including play, pause, next, previous, autoplay, volume control, and a dynamic playlist.

## Features

- **Play/Pause Music**: Toggle between play and pause states with a single button.
- **Next/Previous Tracks**: Navigate through the playlist using next and previous buttons.
- **Dynamic Playlist**: Displays a list of tracks that users can click to play.
- **Volume Control**: Adjust the playback volume using a slider.
- **Autoplay**: Automatically plays the next song when enabled.
- **Track Timer**: Displays current and total duration of the track.
- **Responsive Design**: Adapts to different screen sizes and resolutions.

## Folder Structure

```
/music-player
├── index.html        # Main HTML file
├── style.css         # CSS styles for the player
├── music.js          # Core functionality and event handling
├── script.js         # Additional utility scripts
├── /music            # Folder containing audio files
│   ├── bensound-anewbeginning.mp3
│   ├── bensound-hey.mp3
│   ├── bensound-littleidea.mp3
│   ├── bensound-sunny.mp3
├── /images           # Folder containing album images
│   ├── img1.jpg
│   ├── img2.jpg
│   ├── img3.jpg
│   ├── img4.jpg
```

## How to Use

1. Clone or download the repository to your local machine.
2. Place your audio files in the `/music` folder and album images in the `/images` folder.
3. Open `index.html` in your browser.
4. Use the following controls:
   - **Play/Pause**: Click the play button in the center.
   - **Next/Previous**: Use the forward and backward buttons to switch tracks.
   - **Volume**: Adjust volume using the slider or mute by clicking the volume icon.
   - **Playlist**: Click on the hamburger icon to open the playlist and select a track.
   - **Autoplay**: Enable or disable autoplay with the "Play All" button.

## Adding New Tracks

To add more tracks:
1. Add the audio file to the `/music` folder.
2. Add the album image to the `/images` folder.
3. Update the `trackList` array in `music.js`:

```javascript
let trackList = [
    {
        name: "Track Name",
        path: "/music/your-audio-file.mp3",
        img: "/images/your-image.jpg",
        singer: "Artist Name",
    },
    // Add more tracks here
];
```

## Dependencies

- FontAwesome (for icons)
- Google Fonts (Open Sans)

## Styling

The player uses custom CSS styles defined in `style.css`, including:
- CSS Variables for easy theme customization.
- Media queries for responsiveness.

## Browser Compatibility

The application is compatible with modern web browsers such as:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

