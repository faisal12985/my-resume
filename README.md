# Professional Resume

A modern, clean, and professional resume template created with HTML, CSS, and JavaScript.

## Features

- **Clean Design**: Modern and professional layout
- **Responsive**: Works perfectly on all devices
- **Print-Ready**: Optimized for PDF conversion
- **Customizable**: Easy to modify colors, fonts, and content
- **Fast Loading**: Lightweight and optimized

## How to Use

### 1. Customize Your Information

Edit the `index.html` file to add your personal information:

- **Name and Title**: Update the header section
- **Contact Information**: Add your email, phone, LinkedIn, and location
- **Career Objective**: Personalize the objective statement
- **Education**: Update with your college details
- **Projects**: Add descriptions of your projects
- **Skills**: Modify the technical skills section

### 2. View Your Resume

1. Open `index.html` in any web browser
2. The resume will display with your information

### 3. Generate PDF

**Method 1: Browser Print (Recommended)**
1. Open the resume in Chrome, Firefox, or Edge
2. Press `Ctrl+P` (Windows) or `Cmd+P` (Mac)
3. Select "Save as PDF" as destination
4. Choose "More settings" and set:
   - Paper size: A4 or Letter
   - Margins: Minimum
   - Scale: 100%
   - Background graphics: ✓ (checked)
5. Click "Save"

**Method 2: Online PDF Converter**
- Use services like HTML to PDF converters
- Upload your HTML file or provide the local file path

### 4. Customization Tips

**Colors**: 
- Main theme colors are defined in CSS variables
- Primary gradient: `#667eea` to `#764ba2`
- You can change these in the `:root` section of `styles.css`

**Fonts**:
- Currently using Inter font from Google Fonts
- Change the font-family in CSS to use different fonts

**Layout**:
- Sections can be reordered by moving HTML blocks
- Responsive grid system automatically adjusts

## File Structure

```
my-resume/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript enhancements
└── README.md           # This file
```

## Browser Support

- Chrome (recommended for PDF generation)
- Firefox
- Safari
- Edge

## Tips for Job Applications

1. **Tailor Content**: Customize the resume for each job application
2. **Keep Updated**: Regularly update projects and skills
3. **Proofread**: Always check for typos and formatting
4. **File Naming**: Save PDF as "YourName_Resume.pdf"
5. **File Size**: Keep PDF under 2MB for easy email sharing

## Troubleshooting

**PDF doesn't look right?**
- Make sure background graphics are enabled in print settings
- Try using Chrome for best PDF results
- Check that all fonts load properly

**Layout issues on mobile?**
- The design is responsive and should work on all devices
- Test on actual devices or browser dev tools

**Colors not showing in PDF?**
- Enable "Background graphics" in print settings
- Some browsers may require additional settings

---

**Need help?** Check the comments in the HTML and CSS files for guidance on customization.
