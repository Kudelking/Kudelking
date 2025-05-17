# Image Replacement Guide

This document explains how to replace images on your AccentWalls Pro website.

## Image Organization

All images are stored in the `/public/images/` directory and organized by category:

- `/images/hero/` - Large banner images at the top of pages
- `/images/services/` - Images related to specific services with subdirectories for each service type
- `/images/portfolio/` - Project showcase images
- `/images/faq/` - Images used in FAQ and guide pages

## How to Replace Images

### Method 1: Direct File Replacement (Easiest)

1. Create a new image with the exact same dimensions as the original
2. Name your new image exactly the same as the file you want to replace
3. Navigate to the appropriate folder in the `/public/images/` directory
4. Upload your new image, overwriting the existing file

For example, to replace the main hero image:
- Create a new image
- Name it `main-hero.jpg`
- Upload it to `/public/images/hero/`, replacing the existing file

### Method 2: Changing Image References

If you want to use a different filename or location:

1. Upload your new image to the desired location in the `/public/images/` directory
2. Open the `app/utils/images.ts` file
3. Find the reference to the image you want to replace
4. Change the path to point to your new image

Example in `app/utils/images.ts`:
\`\`\`typescript
export const imagePaths = {
  hero: {
    main: "/images/hero/main-hero.jpg", // Change this path to your new image
    // other images...
  },
  // other categories...
}
\`\`\`

## Image Requirements

For best results:

- Use high-quality, professional images
- Maintain consistent aspect ratios within the same section
- Use JPG format for photos and PNG for graphics with transparency
- Keep file sizes reasonable (optimize images before uploading)
- Recommended dimensions:
  - Hero images: 1920×1080px (16:9 ratio)
  - Service images: 800×600px (4:3 ratio)
  - Portfolio images: 800×800px (1:1 ratio) or 800×600px (4:3 ratio)

## Need Help?

If you need assistance with image replacement or have questions about image optimization, please contact your web developer.
