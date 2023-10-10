# Admin Operations
Admin operations consist of CRUD operations on events data, projects data, team data and registration data. Also saving the data locally for static access.

## Teams Data
From the admin page  `/admin/teamsDashboard` you can create new members, delete existing ones, update member information and view data of all members.

![admin-teams](https://github.com/mssmjcet/MSSsite-MERN/assets/56332670/8462a36c-3a42-4513-bf4d-d7e5bbeb5da5)

You can create a new Member by adding the following details for them.

![add-member-page](https://github.com/mssmjcet/MSSsite-MERN/assets/56332670/3c35d581-0002-449a-8447-03727ce42b68)

Similarly you can edit details of a member by clicking the edit button.

## Projects Data
From the admin page  `/admin/projectsDashboard` you can perform CRUD operations on projects data.

![admin-projects](https://github.com/mssmjcet/MSSsite-MERN/assets/56332670/2a0f1577-a27f-4852-bfb3-b52413684409)

You can update the projects details as shown below.

![edit-projects](https://github.com/mssmjcet/MSSsite-MERN/assets/56332670/37fa367a-647f-4d53-96e2-a28ffe166b07)


## Events Data
From the admin page  `/admin/eventsDashboard` you can perform CRUD operations on events data.

![admin-events](https://github.com/mssmjcet/MSSsite-MERN/assets/56332670/34089827-0bf6-4003-ba71-ef4d15cf2fbf)

New events can be added by filling the following details.

![add-event](https://github.com/mssmjcet/MSSsite-MERN/assets/56332670/a8a75dc9-c9e9-4e61-aa26-53dedbda200a)


## Registration Data
From the admin page  `/admin/registrationsDashboard` you can perform CRUD operations on registrations for a event.

To view Registrations ,first select a event from the first dropdown , then if any registrations are available they are loaded from the database.

**NOTE**:- To select a event, first event must be added in the events dashboard page if not created already. 

![admin-registration](https://github.com/mssmjcet/MSSsite-MERN/assets/56332670/61f278e7-63ae-457c-a0f7-ff36aadfe9d9)

You can add new registrations from this page as well , and view any registrations done by users.

## Home page
The admin page can be used to save all the changes locally for static access to data without the need for a backend or a database.

This static data can be accessed by the user pages of the frontend, so that the website can be deployed without a backend easily at different hosting sites at low cost.

And whenever a update needs to be done, it can be done locally, then changes can be saved statically , and the updated version of the site can be deployed,thereby saving time.

![admin-home-page](https://github.com/mssmjcet/MSSsite-MERN/assets/56332670/658501ef-4e68-412d-8000-9befad9e0dea)


