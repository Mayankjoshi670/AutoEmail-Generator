# Email Generator Project 🚀

An email generator built for a startup using **Node.js**, **Next.js**, **Tailwind**, **LangChain**, and **Google's Gen AI API**.  
The project follows a **Microservice architecture**, with the **frontend** hosted on [Vercel](https://vercel.com/) and the **backend** deployed on [Render](https://render.com/).

---

## Features ✨

- 🔗 Integration with **Google Gen AI API** for generating emails.
- 🛠️ Built with **Next.js** for frontend and **Node.js** for backend.
- 💅 Styled with **Tailwind CSS**.
- 📡 Follows Microservice architecture for scalability and flexibility.

---

## Installation and Setup 🛠️

Follow the steps below to set up the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/email-generator.git
cd email-generator
```
# Install Dependencies
 ### For the Frontend:
```
cd frontend
npm install
```
 ### For the Backend:
```
cd backend
npm install
```

# Add Environment Variables
### Create a .env file in  backend folder and add the following variables:

 

 ### Backend  ```.env```
```
API_KEY = <Your_Google_Gen_AI_API_Key>
```


# Run Locally
 ### Start the Frontend
```
cd frontend
npm run dev
```

 ### Start the Backend
```
cd backend
node index.js
```