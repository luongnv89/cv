# My CV

Personal CV/Resume with automated PDF generation.

## Usage

### Local Generation

```bash
npm install
node generate-pdf.js
```

### Auto Generation

Push changes to `main` branch. GitHub Actions will automatically generate:

- `Luong_NGUYEN_CV.pdf` - Latest version
- `Luong_NGUYEN_CV.html` - Latest version
- `history/` - Timestamped versions

## Files

| File | Description |
|------|-------------|
| `cv.html` | CV source (edit this) |
| `a8.png` | Profile photo |
| `generate-pdf.js` | PDF generator script |
