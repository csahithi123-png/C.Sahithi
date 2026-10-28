# BDF Lab 01 – Node.js and Express Server

**Deployment URL:** Not deployed yet

**Deployment Note:** Public deployment has not been completed yet. The application is being tested locally using a web browser. Screenshots of the four Express endpoints are included below.

**Student Name:** C.Sahithi  
**Registration Number:** 252U1R1008
**Section:** S-15  
**Course:** Backend Development Fundamentals  
**Lab:** Lab 01 – Node.js and Express Server

---

## 1. Introduction

This project is developed as part of the Backend Development Fundamentals course. It demonstrates how to create a basic HTTP server using Node.js and how to build a web server with multiple API endpoints using Express.js.

The project includes a basic Node.js HTTP server, three Express GET endpoints, and a custom 404 response for unknown routes.

## 2. Objectives

- Initialize a Node.js project using npm.
- Understand the purpose of `package.json`.
- Install and use Express.js.
- Create a basic HTTP server using Node.js.
- Build API endpoints using Express.js.
- Return plain-text and JSON responses.
- Display the current date and time dynamically.
- Handle unknown routes with HTTP status code 404.
- Test the application locally using a web browser.

## 3. Technologies Used

- **Node.js** – JavaScript runtime for running server-side code.
- **Express.js** – Web framework for creating routes and handling HTTP requests.
- **JavaScript** – Programming language used to implement the servers.
- **npm** – Package manager used to install project dependencies.
- **Visual Studio Code** – Code editor used for development.
- **Web Browser** – Used to test the endpoints locally.

## 4. Project Structure

```text
BDF-Lab1-Project/
├── node_modules/
├── screenshots/
│   ├── About.png
│   ├── Home.png
│   ├── Time.png
│   └── Unknown.png
├── .gitignore
├── http-server.js
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

**Note:** The `node_modules/` directory contains installed dependencies and should not be uploaded to GitHub. It is excluded using `.gitignore`. The `package.json` and `package-lock.json` files are included in the repository.

## 5. Installation

Follow these steps to set up the project locally.

### Step 1: Install Node.js

Install Node.js from the official website:

https://nodejs.org/

Verify the installation by running these commands in the VS Code terminal:

```bash
node -v
npm -v
```

### Step 2: Open the Project

Open the `BDF-Lab1-Project` folder in Visual Studio Code.

### Step 3: Install Dependencies

Run the following command in the project terminal:

```bash
npm.cmd install
```

This installs the dependencies listed in `package.json`. Express.js is required for the Express server.

## 6. Execution

The project contains two server files. Run and test them separately.

### A. Run the Node.js HTTP Server

**Step 1:** Open the VS Code terminal.

**Step 2:** Execute the following command:

```bash
node http-server.js
```

**Step 3:** The terminal should display:

```text
HTTP server running on port 3001
```

**Step 4:** Open the following URL in a browser:

http://localhost:3001

**Expected Output:**

```text
Hello from the Node.js HTTP server!
```

Stop the server by pressing `Ctrl + C` in the terminal.

### B. Run the Express Server

**Step 1:** Execute the following command:

```bash
node server.js
```

**Step 2:** The terminal should display a message indicating that the server is running on port `3000`.

**Step 3:** Open the Express endpoint URLs listed in the next section.

Keep the terminal running while testing the endpoints.

## 7. API Endpoints

The Express server runs locally at `http://localhost:3000`.

| HTTP Method | Endpoint | Description | Expected Status |
|---|---|---|---|
| GET | `/` | Displays the home page welcome message. | 200 OK |
| GET | `/about` | Returns student information in JSON format. | 200 OK |
| GET | `/time` | Returns the current date and time in JSON format. | 200 OK |
| GET | `/hello123` | Demonstrates the 404 response for an unknown route. | 404 Not Found |

### Endpoint URLs

**1. Home Endpoint**

http://localhost:3000/

Displays the welcome message configured in `server.js`.

**2. About Endpoint**

http://localhost:3000/about

Returns student details in JSON format. The displayed information depends on the values configured in `server.js`.

**3. Time Endpoint**

http://localhost:3000/time

Returns the current date and time. The values are generated dynamically when the endpoint is requested.

**4. Unknown Route – 404**

http://localhost:3000/hello123

Returns a 404 response because the requested route is not defined.

**Note:** The `/hello123` URL is used as an example of an unknown route. Any undefined route should receive the configured 404 response.

## 8. Screenshots

The following screenshots are stored in the `screenshots/` folder and demonstrate the local testing of the Express endpoints.

### 8.1 Home Endpoint

![Home Endpoint](screenshots/Home.png)

### 8.2 About Endpoint

![About Endpoint](screenshots/About.png)

### 8.3 Time Endpoint

![Time Endpoint](screenshots/Time.png)

### 8.4 Unknown Route – 404 Response

![Unknown Route – 404 Response](screenshots/Unknown.png)

## 9. Testing

The application was tested locally using a web browser.

The following checks were performed:

- The home endpoint was opened to verify the welcome message.
- The about endpoint was opened to verify the student information in JSON format.
- The time endpoint was opened to verify the current date and time.
- An unknown URL was opened to verify the 404 response.
- The basic Node.js HTTP server was run separately and tested on port `3001`.

The screenshots in the `screenshots/` folder provide evidence of the endpoint tests.

## 10. Problems Faced and Solutions

### Problem 1: Running both servers on the same port

**Solution:** The Express server uses port `3000`, and the basic Node.js HTTP server uses port `3001`. The servers can be tested separately using their respective commands.

### Problem 2: Installing Express.js

**Solution:** Installed the required dependency using the npm command in the VS Code terminal.

### Problem 3: Accessing the server after stopping it

**Solution:** The local server must be running to respond to browser requests. Restart the appropriate server if the browser displays a connection error.

## 11. Notes

- Node.js and npm must be installed before running the project.
- Dependencies must be installed before starting the Express server.
- The Express server runs on port `3000`.
- The basic Node.js HTTP server runs on port `3001`.
- Both servers should be tested using their respective commands.
- No environment variables are required for the current local setup.
- The `node_modules/` directory is excluded from GitHub using `.gitignore`.
- The screenshots are stored in the `screenshots/` directory.
- The application has been tested locally.
- Public deployment is pending. The deployment URL should be updated after successful deployment.

## 12. Conclusion

This lab helped me understand the fundamentals of Node.js and Express.js server development. I created a basic HTTP server using Node.js and implemented Express endpoints to return a welcome message, student information, and the current date and time. I also tested the 404 response for unknown routes.

The project provided practical experience with npm, server execution, HTTP requests, Express routing, JSON responses, and local endpoint testing.

## 13. Deployment Information

**Current Status:** Not deployed yet.

**Public Deployment URL:** https://github.com/csahithi123-png/C.Sahithi.

After deploying the application, replace the deployment status and URL at the top of this README with the actual public deployment link. If deployment is not possible, follow the alternative instructions specified in the lab document.
