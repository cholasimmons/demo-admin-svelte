# Changelog

## Version 0.1.1 (Planned for 2024-06-29)

### Planned Additions
- Expand theme system to include multiple color palettes (compact, vibrant, default).
- Implement dynamic theming where users can pick from different color schemes.
- Add options to customize individual components' colors based on selected theme.
- Enhance responsive design for better mobile experience.
- Implement additional features in the sidebar, such as links to different sections of the app.
- Improve accessibility by adding aria attributes and keyboard navigation support.



## Version 0.1.0 (2024-06-20)

### Added
- Svelte v4
- Integrated Tailwind CSS for styling.
- Implemented a responsive layout using Svelte store & Tailwind.
- Implemented a PostCSS theme system using Svelte store to toggle between themes.
- Added automatic closing of sidebar on mobile devices.
- Implemented a unified store to manage navigation, theme, and screen width states.
- Created a sidebar component that toggles visibility based on state.
- Added a dropdown menu to choose different themes (dark, light, vibrant, compact).
- Implemented event listeners to update screen width and close sidebar on mobile.

### Changed
- Updated `+page.svelte` to use a unified store for theme and navigation states.
- Updated Header.svelte and Sidebar.svelte components to use the unified store for toggling sidebar visibility.