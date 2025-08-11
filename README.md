# UMass Club Golf
This project is dedicated to organizing the activities of the UMass Club Golf team.

## Getting Started
To get started with this project, clone the repository to your local machine using the following command:

```bash
git clone https://github.com/cnobleshriver/umass-club-golf.git
```

## Usage
Detailed instructions on how to use the project will be provided here. This section will include information on how to run the application, manage members, and schedule events.

## Running the Application
To run the application, follow these steps:

1. Navigate to the project directory:
    ```bash
    cd umass-club-golf
    ```

2. Install the required dependencies using npm or yarn:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

3. Start the application:
    ```bash
    npm run dev
    ```
    or
    ```bash
    yarn dev
    ```

The application should now be running on `http://localhost:3000`.

## Contributing
If you would like to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.

# Website Content Update Guide

## Getting Started
This guide shows team members how to update tournament results, roster information, and player photos on the website using GitHub's web interface.

## Prerequisites
1. Create a free GitHub account at github.com
2. Ask the website administrator to add you as a collaborator
3. You'll receive an email invitation - accept it to gain edit access

## For Administrators: Adding Collaborators
1. Go to the repository on GitHub
2. Click the "Settings" tab
3. Click "Collaborators and teams" in the left sidebar
4. Click "Add people"
5. Enter the person's GitHub username or email
6. Select "Write" access level
7. Click "Add [username] to this repository"

## What You Can Update
- Tournament results and scores
- Roster information (players, majors, class years)
- Player headshot photos
- Contact information (leadership positions and emails)

## Updating Tournament Results

### Step 1: Access the Tournament Data File
1. Go to GitHub.com and sign in
2. Navigate to the repository: `cnobleshriver/umass-club-golf`
3. Click on `src` → `data` → `tournaments.json`
4. Click the pencil icon to edit the file

### Step 2: Add a New Tournament
The file contains a list of tournaments in JSON format. Each tournament looks like this:

```json
{
  "name": "New England Regional Tournament 1",
  "course": "Cold Springs Country Club",
  "location": "Belchertown, MA",
  "date": "Apr 5-6, 2025",
  "startDate": "2025-04-05",
  "endDate": "2025-04-06",
  "finish": "3rd",
  "finishNumeric": 3,
  "score": "774(+64)",
  "totalScore": 774,
  "toPar": 64,
  "url": "https://nccga.org/app/golf-tournaments/7125/team-leaderboard"
}
```

**Field Explanations:**
- `name`: Tournament name as it appears on the website
- `course`: Golf course name
- `location`: City, State
- `date`: Human-readable date (e.g., "Apr 5-6, 2025" or "Apr 5, 2025")
- `startDate`: Start date in YYYY-MM-DD format (for sorting)
- `endDate`: End date in YYYY-MM-DD format (same as start for single-day events)
- `finish`: Team finish as displayed (e.g., "1st", "T6", "5th")
- `finishNumeric`: Numeric version of finish for sorting (1, 6, 5, etc.)
- `score`: Team score as displayed (e.g., "774(+64)")
- `totalScore`: Total score number only (774)
- `toPar`: To par number only (64)
- `url`: Link to tournament results

**To add a new tournament:**
1. Scroll to the end of the file (before the closing `]`)
2. After the last tournament entry, add a comma `,`
3. Use the content helper tool at `your-website.com/content-helper.html` to generate the JSON
4. Copy and paste the generated JSON

## Tournament Table Features

The tournament results table includes sortable columns:
- **Date**: Click to sort chronologically by tournament start date
- **Finish**: Click to sort by team placement (1st, 2nd, T6, etc.)
- **Team Score**: Click to sort by "to par" performance (+3 is better than +64)

Other columns (Tournament Name, Course, Location) are not sortable.

### Step 3: Save Your Changes
1. Scroll to the bottom of the page
2. Add a commit message like: `Add [Tournament Name] results`
3. Click Commit changes

**Important**: Make sure your JSON syntax is correct! Each entry needs commas between them, and the last entry should NOT have a comma.

## Updating Roster Information

### Step 1: Access the Roster Data File
1. Navigate to `src` → `data` → `roster.json`
2. Click the pencil icon to edit

### Step 2: Update Player Information
Each player entry looks like this:

```json
{
  "name": "Player Name",
  "location": "City, State",
  "image": "headshots/playername-1.jpg",
  "year": "Senior",
  "major": "Computer Science"
}
```

**To add a new player:**
1. Add a comma after the last player entry
2. Use the content helper tool to generate the JSON
3. Copy and paste the generated JSON

**To remove a player:**
1. Find their entry in the list
2. Delete the entire entry (including the curly braces `{}`)
3. Make sure to remove any extra commas

**To update existing information:**
1. Find the player's entry
2. Change the values between the quotes (e.g., change `"Sophomore"` to `"Junior"`)

### Step 3: Save Your Changes
1. Scroll to bottom and commit with message: `Update roster - [brief description]`

## Updating Player Photos

### Step 1: Prepare Your Photo
- **File format**: JPG or PNG
- **Recommended size**: 800x800 pixels (square)
- **File naming**: Use format `lastname-1.jpg` (all lowercase, no spaces)
- **Example**: For "John Smith", name the file `smith-1.jpg`

### Step 2: Upload to GitHub
1. Navigate to `public` → `headshots` folder
2. Click **Add file** → **Upload files**
3. Drag and drop your photo file OR click "choose your files"
4. Wait for upload to complete

### Step 3: Update the Roster File (if needed)
1. If this is a NEW player photo, go to `src` → `data` → `roster.json`
2. Find the player's entry and update the `"image"` field:
```json
"image": "headshots/newfilename-1.jpg"
```

### Step 4: Save Your Changes
1. Scroll to bottom of upload page
2. Commit with message: `Add headshot for [Player Name]`

**To replace an existing photo:**
- Upload the new photo with the SAME filename as the old one
- GitHub will automatically replace it
- No need to update the roster.json file

## Updating Contact Information

### Step 1: Access the Contact Data File
1. Navigate to `src` → `data` → `contacts.json`
2. Click the pencil icon to edit

### Step 2: Update Leadership Information
Each contact entry looks like this:

```json
{
  "title": "President",
  "name": "Mike Pietrini",
  "email": "mpietrini@umass.edu"
}
```

**To update existing contact:**
1. Find the person's entry by their title (President, Vice President, etc.)
2. Update the `"name"` and/or `"email"` fields with new information

**Field Explanations:**
- `title`: Leadership position (President, Vice President, Secretary, Treasurer)
- `name`: Full name of the person
- `email`: UMass email address

### Step 3: Save Your Changes
1. Scroll to bottom and commit with message: `Update contact info for [Position]`

## Using the Content Helper Tool

For easier JSON generation, visit [https://www.umassgolf.org/content-helper.html](https://www.umassgolf.org/content-helper.html):

1. **Tournament Tab**: Fill out the form with tournament details
2. **Roster Tab**: Fill out the form with player information
3. **Contact Tab**: Fill out the form with leadership information
4. Click "Generate JSON"
5. Copy the generated code
6. Paste it into the appropriate GitHub file

## Tournament Table Features

The tournament results table now includes:
- **Sortable columns**: Click any column header to sort
- **Date sorting**: Sorts by actual tournament date
- **Score sorting**: Sorts by total team score
- **Finish sorting**: Sorts by team placement

## Troubleshooting

### Common Issues:

**"Invalid JSON" Error**
- Problem: Missing comma, extra comma, or incorrect syntax
- Solution: Check that every entry except the last one has a comma

**Photo Not Showing Up**
- Problem: File name doesn't match what's in roster.json
- Solution: Make sure the filename in roster.json exactly matches the uploaded file

**Changes Not Appearing on Website**
- Problem: Changes can take 5-10 minutes to appear
- Solution: Wait a few minutes and refresh the website

### Getting Help:
If you encounter issues:
1. Take a screenshot of any error messages
2. Note exactly what you were trying to do
3. Contact the website administrator

## Quick Reference

### File Locations:
- **Tournament Results**: `src/data/tournaments.json`
- **Roster Information**: `src/data/roster.json`
- **Contact Information**: `src/data/contacts.json`
- **Player Photos**: `public/headshots/`

### JSON Template - Tournament:
```json
{
  "name": "Tournament Name",
  "course": "Course Name",
  "location": "City, State",
  "date": "Month Day, Year",
  "startDate": "YYYY-MM-DD",
  "endDate": "YYYY-MM-DD",
  "finish": "1st",
  "finishNumeric": 1,
  "score": "000(+/-00)",
  "totalScore": 000,
  "toPar": 00,
  "url": "https://results-link.com"
}
```

### JSON Template - Player:
```json
{
  "name": "Full Name",
  "location": "City, State",
  "image": "headshots/filename.jpg",
  "year": "Class Year",
  "major": "Major Name"
}
```

### JSON Template - Contact:
```json
{
  "title": "Position Title",
  "name": "Full Name",
  "email": "email@umass.edu"
}
```

**Note**: Changes typically appear on the website within 5-10 minutes of committing.
