# MSS Website (MERN Stack)
This is a website used to show viewers information about MSS-MJCET, their work, and events being conducted by them.

This website has been created using React.js and Bootstrap in the frontend and Express.js in the backend. It is a automated site wherein data related to events,projects, team members can be stored using admin portal and the changes can be viewed on the user side.

**Note**:
If the site has to be hosted statically then database data can be stored in json files and the site can be statically deployed without the backend. This has also been automated

## Project Structure and Technologies
The project is created using create-react-app. The `root` folder contains the frontend code. And the backend code exists in `server` folder inside the root folder.

For more info see [Project Structure docs](docs/project-structure.md)

## Environment Variables
The environment variables help control the project configuration and few features from a single place. They are stored in `.env` file in the root folder.

For more info see [Environment Variables docs](docs/environment-variables.md)

## How to run the project
The following are the steps required to run the project locally(w/o docker):-

1. Clone the project repository
2. Install the dependencies using the command `npm install`
3. Replace the MongoDB url with local/remote MongoDB connection URI in the `.env` file. (ex:- `mongodb://localhost:27017/` or `mongodb+srv://SMQuadri:Dk453329@cluster0.nhka0zg.mongodb.net/MssDB` PS: Don't copy these URL's, they don't work :) )
4. To run the frontend , open cmd in the repository folder and run the command `npm start`
5. Then run the backend in another cmd shell using the command `node server/index.js`
6. Access the site(user pages) by typing the url in browser `http://localhost:3000`
7. To access the admin pages use the url `http://localhost:3000/admin/home`

The frontend run on `PORT:3000` and the backend runs on `PORT:3001`.

## Admin Operations
The admin Operations consist of CRUD operations for Event Data,Projects Data, Team Data, and Registration Data. Also the option for for saving all database data locally in json files for static frontend app deployment.

For more info see [Admin Operations docs](docs/admin-operations.md)

## User Operations
The user operations consist of viewing different pages of website and registering for events by entering data and payment screenshots.

For more info see [User Operations docs](docs/user-operations.md)

## Deployment methods
There are many ways and places to deploy this app. Some of the ways to deploy this app have been discussed in the below file.

For more info see [Deployment methods docs](docs/deployment-methods.md)

## Use backend with a different Frontend
The backend can used with any other frontend as well. Only the exposed endpoints specifed in routes file have to be utilized in the frontend.

Otherwise only the return part of the frontend in each component can be changed as per requiremnt to change the web page display and the data that is fetched can be utilized. Study of the existing code is required for that.

## Future Enhancements

1. Export to Excel feature can be created for exporting registration data to a excel file.
2. Images can stored on websites like cloudinary or on google drive using google API's.
3. Currently the event registration functionality for users cannot work without the backend. This can be implemented by using Function App/Cloud Functions in any of the cloud services for free. This removes the need for a backend for user registration.
4. Feature to Record All the expenses for a event and generate reports.
5. Gallery page showing best of MSS.
6.  Feature to create documentation for a event and display it in the admin page or user page, wherever required.
7. Create Statistics for a event related to expenses, registartions, etc. using visual graphics like pie-charts, bar graphs.
8. For registration for a event, in the backend we can add a field `isPaymentRequired` in `EventsModel` and give the option to upload the payment screenshot based on it. Also payment link field can be added for UPI payments(or payment gateway integration can be done if feasible). Further the amount to be paid can be displayed in the website.
9. **IMP\* Adding authentication to prevent users from accessing the admin pages.**
10. Create a API specificatio file for easy migration of backend whenever required. Use RAML or OAS Files.
