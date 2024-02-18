# Film Festival TN

## Description

**Film Festival TN** is a full-stack NextJS 14 application that could be a landing page for an event,concert or a festival. This is an improved version of my previous [Filmfestival HTML/CSS/JavaScript](https://github.com/ram1117/capstone-project-1-filmfestival) I have switched to using NextJS14, Typescript and TailwindCSS. Implemented credentials and OAuth based authentication using NextAuth. The application uses PostgresSql and Prisma ORM.

### Live Demo

[Live Demo on Vercel](https://filmfestival-v2-fe.vercel.app/)

## Getting Started

### Dependencies

- Need NPM to install the packages needed for the project
- Need Git and Github account to setup and contribute to the project

### Installing

- Clone the repo in your local machine.

  ```
  https://github.com/ram1117/filmfestival-v2-fe.git
  ```

- Run the following command to install the project dependencies using npm
  ```
  cd filmfestival-v2-fe
  ```
  ```
  npm install
  ```

### Executing program

- Run the following command to start the NextJS Dev server

  ```
  npm run dev
  ```

- You can setup Docker to run Postgres database in a container.

- For Google based authentication, create an applicatiin in Google Cloud, and Google client ID and Secret to .env.local file

  ```
  GOOGLE_ID
  GOOGLE_SECRET
  ```

- To configure Prisma, add the following Database URL variable to .env file

  ```
  DATABASE_URL="postgresql://username:password@localhost:5432/filmfestival?schema=public"
  ```

## Help

Please raise a Github issue for errors or bugs.

```
https://github.com/ram1117/filmfestival-v2-fe/issues
```

## Authors

### Ram Kumar Karuppusamy

[@ram1117](https://github.com/ram1117) <br />
[ram kumar karuppusamy](https://www.linkedin.com/in/ram-kumar-karuppusamy/)

## Version History

- 0.1
  - Initial Release

## License

This project is [MIT](./LICENSE) licensed. See the LICENSE.md file for details

## Acknowledgments

N/A
