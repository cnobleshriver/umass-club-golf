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

## Updating Roster
1. Change "roster" in src/app/components/ArticleCardsGrid/ArticleCardsGrid.tsx
2. Upload roster photos to public/headshots

## Updating Tournament Info
1. Change "data" in src/app/components/TableScrollArea/TableScrollArea.tsx