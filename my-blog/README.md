# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <title>send user data</title>
  <body>
    <h2>submit your info</h2>
    <div>
      <label>Name:</label><br />
      <input type="text" id="name" required />
      <br />
      <label>Email:</label><br />
      <input type="text" id="email" />
      <br />
      <label>Password:</label><br />
      <input type="text" id="password" />
      <br />
      <button type="submit" onclick="login()">Submit</button>
      <br>
      <div id="responseArea"></div>
    </div>

    <script>
      async function login() {
        // root.preventDefault();
        // const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        try {
          const raw = JSON.stringify({
            email: email,
            password: password,
          });

          const data = await fetch("http://localhost:8080/auth/login", {
            method: "POST",
            body: raw,
            headers: {
              "Content-Type": "application/json",
            },
          });
          const response = await data.json();

          console.log(response,"hi");
          document.getElementById("responseArea").innerText = json.stringify(response, null,2)

        } catch (error) {
          console.error("Error connecting front server");
        }
      }
    </script>
  </body>
</html>
