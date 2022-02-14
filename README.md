# Hippo Manager Programming Assessment

## ✅ Requirements

-   [x] There must be a way for a user to log in with an e-mail address/password combination. These users will be the veterinarians.
-   [x] There must be a way for a veterinarian to create a new account with their e-mail address/password combination.
-   [x] All patients must be accessible by all veterinarians. All owners must also be accessible by all veterinarians.
-   [x] All patients have an associated owner.
-   [x] Upon logging in, a veterinarian should be able to add, edit or delete patients and owners.
-   [x] Patients have the following information associated with them: name, species, color, date of birth, owner
-   [x] Owners have the following information associated with them: first name, last name, phone number

## 🛠 How to setup

This application uses Docker to configure the MySQL database. To setup up the application, run the following command. This script will initialize the Docker containers, install Laravel and npm dependencies, and run `php artisan migrate`.

```bash
./setup
```

## 🏎 How to start

To start the application, run the following command. This will start `php artisan serve`. Open your browser to http://localhost:8000.

> NOTE: for some reason, running http://127.0.0.1:8000 will not work properly. I ran out of time to figure out the issue 🤷🏽‍♀️

```bash
./start
```
