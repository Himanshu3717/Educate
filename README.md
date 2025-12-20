# Educate - Online Learning Service

This is a responsive landing page for an online learning service called "Educate", built according to the Figma design specifications.

## Technologies Used

- HTML5
- CSS3
- Bootstrap 5.3.0
- JavaScript (ES6+)
- jQuery 3.7.1
- DataTables (for table functionality)
- Slick Carousel (for testimonials slider)
- AOS (Animate On Scroll) Library

## Features

1. **Responsive Navigation Bar**
   - Logo with "Educate" branding
   - Navigation links (Home, Programs, Courses, Admissions, Testimonial)
   - Login and Registration buttons

2. **Hero Section**
   - Headline and subheadline
   - Call-to-action button
   - Video preview image with play button
   - YouTube video popup modal

3. **Cards Section**
   - Display of course/program cards with images and descriptions

4. **How does Educate Work Section**
   - Dotted SVG pattern visualization

5. **Get the Seat Price Section**
   - DataTable populated from API (https://viaje.ai/seatinfo_api/)
   - Displays Seat, Price, and Status information

6. **Testimonials Section**
   - Slider carousel populated from API (https://viaje.ai/testimonial_api/)
   - Responsive design with autoplay

## API Endpoints

- **Seat Info API**: `https://viaje.ai/seatinfo_api/`
- **Testimonial API**: `https://viaje.ai/testimonial_api/`

## Setup Instructions

1. Clone or download this repository
2. Open `index.html` in a web browser
3. No build process required - all dependencies are loaded via CDN

## File Structure

```
sciative-assignment/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Custom styles
├── js/
│   └── main.js         # JavaScript functionality
└── README.md           # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- All external libraries are loaded via CDN
- The design is fully responsive and works on mobile, tablet, and desktop devices
- Animations are included using AOS library
- Content can be customized as needed

