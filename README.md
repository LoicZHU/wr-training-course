![Made with TypeScript](https://img.shields.io/badge/Made%20with-TypeScript-blue)
![Made with Angular](https://img.shields.io/badge/Made%20with-Angular-red)
![Made with Express](https://img.shields.io/badge/Made%20with-Express-whitesmoke)

# Training course
"Training course" project is a simple project (_still WIP_).<br/>
It is an app part of an another project for a LMS website.
It is not "responsive design", but desktop only.

## Install dependencies
If you have MongoDB installed on your computer, you can install dependencies.

### Back-end
- Go into `backend` folder and install:
```
yarn
```

### Front-end
- Go into `frontend/src/angular-app` folder and install:
```
yarn
```

## Launch app
### Back-end
- Go into `backend` folder and create a `.env` file, like the `.env-example` file with something like this:
```
APP_NAME="Express"

NODE_ENV="development"

SERVER_PORT=1234

DATABASE_HOST="mongodb://localhost/training-course"
DATABASE_PORT=""
DATABASE_USER=""
DATABASE_PASSWORD=""

TOKEN_SECRET_KEY="ZEec8:YZe8aK{/k]X)(Gjy"
```

- Still in the `backend` folder, launch server:
```
yarn dev
```

### Front-end
- Go into `frontend/src/angular-app` folder and launch Angular server:
```
ng serve
```

- Then you can open a browser and type in the URL: `localhost:4200`:
  - at the moment, the current available routes are:
    - `/formation/lecon`
    - `/formation/quiz`
    - `/administration/login`
    - `/administration/edition` (must be logged user)