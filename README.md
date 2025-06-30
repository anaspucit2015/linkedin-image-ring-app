# Profile Photo Editor - LinkedIn Profile Picture Generator

A modern, full-featured web application for creating professional LinkedIn profile pictures with custom overlays, text, and Open to Work badges. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Image Upload**: Drag and drop or click to upload images
- **Text Overlay**: Add custom text to profile pictures
- **Ring Text**: Create circular text overlays around the image
- **Color Customization**: Change text and ring colors with a color picker
- **Font Size Control**: Adjust text size from 12px to 72px
- **Real-time Preview**: See changes instantly on the canvas
- **Download**: Save your edited profile picture as PNG
- **Responsive Design**: Works on desktop and mobile devices
- **Professional UI**: Clean, modern interface with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Canvas Library**: Fabric.js
- **Color Picker**: react-colorful
- **Icons**: Lucide React
- **UI Components**: Custom components with Tailwind

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd profile-photo-editor
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Upload Image**: Drag and drop an image or click to select one
2. **Add Text**: Enter your desired text in the text area
3. **Customize**: Adjust font size and colors
4. **Add Elements**: Click "Add Text" or "Add Ring Text" to add to canvas
5. **Download**: Click the download button to save your edited image

## Project Structure

```
profile-photo-editor/
├── app/
│   ├── components/
│   │   ├── CanvasEditor.tsx
│   │   ├── ColorPicker.tsx
│   │   ├── FAQ.tsx
│   │   ├── ImageUploader.tsx
│   │   └── TextEditor.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Key Components

- **ImageUploader**: Handles drag & drop and file selection
- **CanvasEditor**: Fabric.js canvas for image editing
- **TextEditor**: Text input and font controls
- **ColorPicker**: Color selection modal
- **FAQ**: Frequently asked questions section

## Features in Detail

### Image Upload
- Supports JPG, PNG, GIF formats
- Drag and drop functionality
- File size validation
- Image preview

### Text Editing
- Real-time text input
- Font size slider (12px - 72px)
- Color picker for text
- Add text or ring text options

### Canvas Features
- 400x400 pixel canvas (LinkedIn recommended size)
- Fabric.js for advanced canvas manipulation
- Real-time preview
- Download as PNG

### Color Management
- Hex color picker
- Separate controls for text and ring colors
- Color preview swatches
- Modal color picker interface

## LinkedIn Optimization

The app is specifically designed for LinkedIn profile optimization:

- **Recommended Size**: 400x400 pixels (LinkedIn's ideal size)
- **File Format**: PNG for best quality
- **Professional Focus**: Tools for creating "Open to Work" badges
- **Best Practices**: Built-in guidance for professional photos

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Features

1. Create new components in `app/components/`
2. Update the main page in `app/page.tsx`
3. Add any new dependencies to `package.json`
4. Update TypeScript types as needed

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built with ❤️ using Next.js and Tailwind CSS
- Inspired by professional LinkedIn profile optimization needs
- Uses Fabric.js for advanced canvas manipulation 