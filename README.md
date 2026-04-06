# HRCC Website

Official website for HackerRank Campus Crew SRMIST KTR.

## Countdown Timer Configuration

The countdown timer at `/techformers` is configured through a simple JSON file.

### Configuration File

Location: `src/config/countdown.json`

### JSON Structure

```json
{
  "event": {
    "title": "TECHFORMERS 1.0",
    "description": "HackerRank Campus Crew, SRMIST KTR",
    "date": "08 April 2026",
    "time": "5:00 PM",
    "round": "Final Round",
    "quotes": [
      "Build. Break. Learn. Repeat.",
      "Great ideas start with bold teams."
    ]
  },
  "audio": {
    "enabled": true,
    "volume": 1
  },
  "sponsors": [
    {
      "src": "/sponsors/logo.png",
      "alt": "Sponsor Name",
      "size": 50,
      "dark": false
    }
  ]
}
```

### Field Descriptions

| Field | Description | Example |
|-------|-------------|---------|
| `title` | Event name (white text with version in green) | `"TECHFORMERS 1.0"` |
| `description` | Subtitle text (gray) | `"HackerRank Campus Crew, SRMIST KTR"` |
| `date` | Date in DD Month YYYY format | `"08 April 2026"` |
| `time` | Time in 12-hour AM/PM format (IST) | `"5:00 PM"` |
| `round` | Current round/phase (shown below timer) | `"Final Round"` |
| `quotes` | Random quotes shown below round (rotates automatically) | `["Build. Break. Learn. Repeat."]` |
| `audio.enabled` | Enable/disable 10-second audio | `true` |
| `audio.volume` | Audio volume (`0` to `1`) | `1` |

### Date & Time Format

**Date:** Use format `DD Month YYYY`
- ✅ `"15 June 2026"`
- ✅ `"01 January 2027"`
- ❌ ~~`"2026-06-15"`~~

**Time:** Use 12-hour format with AM/PM (all times are IST)
- ✅ `"10:00 AM"`
- ✅ `"2:30 PM"`
- ✅ `"11:45 PM"`
- ❌ ~~`"14:00"`~~

### Sponsors Configuration

Each sponsor object:
- `src`: Path to logo file in `/public/sponsors/`
- `alt`: Accessible name for the logo
- `size`: Logo height in pixels (e.g., `40`, `50`, `60`)
- `dark`: `true` to invert colors (for dark logos on dark background)

**To add a sponsor:**
1. Place logo file in `/public/sponsors/`
2. Add entry to `sponsors` array in JSON
3. Set appropriate `size` in pixels (30-60 recommended)
4. Set `dark: true` if logo needs color inversion

**Size Guidelines:**
- Main sponsors: 50-60px
- Regular sponsors: 40-45px
- Small sponsors: 30-35px

**To remove all sponsors:**
```json
"sponsors": []
```

### Quick Examples

**Example 1: Update to Round 2**
```json
{
  "event": {
    "title": "TECHFORMERS 2.0",
    "date": "15 June 2026",
    "time": "2:00 PM",
    "round": "Round 2"
  }
}
```

**Example 2: Different Event**
```json
{
  "event": {
    "title": "CODETHON FINALS",
    "description": "Campus Coding Championship",
    "date": "20 May 2026",
    "time": "10:00 AM",
    "round": "Grand Finale"
  }
}
```

**Example 3: Morning Session**
```json
{
  "event": {
    "title": "TECH TALK 2026",
    "date": "10 April 2026",
    "time": "9:30 AM",
    "round": "Session 1"
  }
}
```

### Deployment

After editing `src/config/countdown.json`:

```bash
# 1. Build the project
npm run build

# 2. Test locally (optional)
npm run dev

# 3. Deploy
git add src/config/countdown.json
git commit -m "Update countdown configuration"
git push
```

### Tips

✅ **Keep it simple** - Date and time formats are human-readable  
✅ **Test first** - Run `npm run dev` to preview changes  
✅ **Validate JSON** - Check syntax at [jsonlint.com](https://jsonlint.com) before deploying  
✅ **Version in title** - Include version number in title (e.g., "TECHFORMERS 1.0")  
✅ **Round names** - Use clear round names: "Final Round", "Round 2", "Qualifier", etc.

---

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Tech Stack

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- Framer Motion
