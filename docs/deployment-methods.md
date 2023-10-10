# Deployment Methods
A few Deployment methods for the website have been discussed in the following sections.

## Deploy Backend and Frontend Separately

The frontend can be deployed on multiple sites like `Netlify, Vercel, DigitalOcean` and many more for zero to low cost. Make sure to set the variables of `.env` file wherever it is being deployed.

The backend of web site can be deployed on websites `Heroku, or any cloud service (ex:- Azure app service)`
**NOTE**:-
For deployment in cloud services or any other place it is better to use docker, as it avoids most of the problems faced with configuration and source code building(or compilation) and saves time.

After deploying the backend, update the frontend env variable for `backend-url`.

For deploying both frontend and backend the same repository folder can be used without removing anything. If the hosting website doesn't perform a build step(`npm run build`) and a start step(`npm start`), then build the frontend using `npm run build` and then deploy the build folder(for frontend only). Also click the `save changes` from admin home page if local json files are required before deploying it.


**COST**:- This is a costly option according to research done,specifically backend deployment has highest cost because node.js has to be run in a virtual environment or server environment.
## Deploy only Frontend
If only the frontend is to be deployed without the backend , then build the frontend using `npm run build` command and run the project and click `save changes` button in the admin home page. 

Enable environment variable `REACT_APP_ENABLE_LOCAL_DATA_FILES` for fetching data from local json files. 

Disable `REACT_APP_ENABLE_ADMIN_PAGES` to prevent users from accessing the admin pages (only users who know the url for admin pages can access them, there is no navigation from user pages to access admin pages).

Then you can deploy the build folder to any of hosting websites easily and set the environment variables.

 Otherwise you can use docker to build and deploy the frontend.

**COST**:- This is a highly cost efficient approach. The cost to deploy only frontend is free at some places with soe limitations on inbound and outbound bandwidth, or no.of invocations,etc. At some websites it has small cost per month ranging from 1$to 10$ based on tier and requirements.


## Deploy Backend and Frontend together

To deploy backend and frontend together, the frontend has to packaged using `npm run build`. Then the backend uses the build folder to serve the frontend. We have to deploy repo folder with build folder (or if a build step is included in deployment, then build folder can be ignored) and the start command should be `node server/index.js` to start the application. The complete website can be accessed at backend port `3001`.

Enable or disable the environment variables as per requirement.

Docker is preferred for such kind of deployments (it saves time). Mostly whenever backend deploment is involved there is always a build step(so you can ignore building the frontend locally).

**Extra**:-

For testing purposes and running docker , `gitpod` or `gitlab` can be used with monthly free credits.

These are general deployment instructions for the website with the research done till date Aug-6-2023. Please refer to the website that you are deploying the website to for specific instructions.