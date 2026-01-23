# My CV

Personal CV/Resume with automated PDF generation.

## Setup

```bash
npm install
git config core.hooksPath hooks
```

## Usage

Edit `cv.html` and commit. The pre-commit hook automatically generates:

- `Luong_NGUYEN_CV.pdf` - Latest version
- `Luong_NGUYEN_CV.html` - Latest version
- `history/` - Timestamped versions

### Manual Generation

```bash
node generate-pdf.js
```

## Files

| File | Description |
|------|-------------|
| `cv.html` | CV source (edit this) |
| `a8.png` | Profile photo |
| `generate-pdf.js` | Manual PDF generator |
| `hooks/pre-commit` | Auto-generation hook |
