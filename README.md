# Spotted

## About

Spotted is a take on Instagram that attempts to shift the focus from selfies to sharing moments of others and the world around us.

The purpose of making this web application was to practice and hone my full-stack development skills. A variety of technologies were used to achieve this.

## Technologies Used

-   React: For the frontend I used react to enable a dynamic and seamless user experience.

-   Express.js: For the backend I used Express.js. It housed my RESTful APIs, the MongoDB connections and schema, and user authentication.

-   JWT: JSON Web Tokens are used to enable full user authentication. Within the tokens are a payload that is decrypted to retrieve information needed to save posts to MongoDb (user IDs and usernames).

-   Bcrypt: When saving passwords to the database, Bcrypt hashes the passwords for secure storage.

-   MongoDB: For data storage, MongoDB's document database was used. Its flexibility allowed me to dynamically change my schema as the project evolved.

-   Cloudinary: To allow users to capture and upload their own images, I used a Cloudinary widget. The image is housed on Cloudinary and the URL to that image is housed in MongoDB for access.

-   Geolocation API: To geolocate users and their posts, I used a Reverse Geocoding API from Rapid APIs (https://rapidapi.com/Noggle/api/reverse-geocoding-and-geolocation-service/).

## Current Features

-   User's can create, edit, and delete posts.

-   User's can view their own posts, all other user posts, and using the GeoLocator feature, view posts made in their current city.

-   User's can like posts. Their ID is added to the post's data to ensure one like per user.

-   Full user authentication using JWT.

-   A Wizard form for making/editing posts.

## Current Bugs and Limitations

-   Currently error messages do not come up when the user makes an error signing up.
-   Currently error messages do not come up when the user makes an error making or editing a post.
-   Infinite scroll has not been implemented.
-   Further CSS is required across the website.
