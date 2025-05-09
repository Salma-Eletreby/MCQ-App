# MCQ App

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

### ⚙️ Prerequisites

Before running the app, make sure you have the following:

1. An `.env` file in the root of the project with the following variables set:

   ```
   MONGODB_URI=your_mongodb_connection_string
   GEMINI_API_KEY=your_gemini_api_key
   ```

2. A MongoDB database named `MCQ_App` with a collection called `questions`.  
   Import the following data as your baseline:

   ```json
   [
     {
       "question": "Which city was the capital of the Abbasid Caliphate?",
       "choices": ["Damascus", "Cairo", "Baghdad", "Cordoba"],
       "correctAnswer": "Baghdad",
       "hint": "It became a major center for the House of Wisdom.",
       "category": "Ancient Islamic Civilization"
     },
     {
       "question": "Who is the famous Muslim scholar known for his medical encyclopedia 'The Canon of Medicine'?",
       "choices": ["Al-Farabi", "Al-Khwarizmi", "Ibn Sina", "Al-Ghazali"],
       "correctAnswer": "Ibn Sina",
       "hint": "He's also known as Avicenna in the West.",
       "category": "Ancient Islamic Civilization"
     },
     {
       "question": "What was the name of the famous library and translation center in Baghdad?",
       "choices": ["Bayt al-Hikma", "Al-Qarawiyyin", "Dar al-Ilm", "Al-Azhar"],
       "correctAnswer": "Bayt al-Hikma",
       "hint": "Also known as the House of Wisdom.",
       "category": "Ancient Islamic Civilization"
     },
     {
       "question": "Which Muslim mathematician is considered the 'father of algebra'?",
       "choices": ["Ibn Battuta", "Al-Razi", "Al-Khwarizmi", "Ibn Rushd"],
       "correctAnswer": "Al-Khwarizmi",
       "hint": "His name gave rise to the word 'algorithm'.",
       "category": "Ancient Islamic Civilization"
     },
     {
       "question": "What architectural masterpiece was built in Cordoba during the Umayyad Caliphate in Spain?",
       "choices": ["Alhambra", "The Great Mosque of Cordoba", "Mezquita de Granada", "Blue Mosque"],
       "correctAnswer": "The Great Mosque of Cordoba",
       "hint": "It later became a cathedral.",
       "category": "Ancient Islamic Civilization"
     },
     {
       "question": "Which Islamic dynasty is credited with the golden age of Islamic science and culture?",
       "choices": ["Umayyads", "Ottomans", "Abbasids", "Mughals"],
       "correctAnswer": "Abbasids",
       "hint": "They moved the capital to Baghdad.",
       "category": "Ancient Islamic Civilization"
     },
     {
       "question": "What is the name of the famous Muslim traveler who documented his journeys across the Islamic world?",
       "choices": ["Ibn Khaldun", "Ibn Rushd", "Ibn Sina", "Ibn Battuta"],
       "correctAnswer": "Ibn Battuta",
       "hint": "He traveled for nearly 30 years.",
       "category": "Ancient Islamic Civilization"
     },
     {
       "question": "Which Islamic philosopher and polymath influenced both Islamic and European thought with his commentaries on Aristotle?",
       "choices": ["Ibn Sina", "Ibn Rushd", "Al-Ghazali", "Al-Farabi"],
       "correctAnswer": "Ibn Rushd",
       "hint": "Known as Averroes in Latin.",
       "category": "Ancient Islamic Civilization"
     },
     {
       "question": "What was the scientific term for the Arabic method of distillation developed during the Islamic Golden Age?",
       "choices": ["Alembic", "Filtration", "Percolation", "Sublimation"],
       "correctAnswer": "Alembic",
       "hint": "This process was important in alchemy and medicine.",
       "category": "Ancient Islamic Civilization"
     },
     {
       "question": "Which Islamic scholar is credited with early ideas on sociology and historiography?",
       "choices": ["Ibn Battuta", "Al-Ghazali", "Ibn Khaldun", "Al-Idrisi"],
       "correctAnswer": "Ibn Khaldun",
       "hint": "He wrote the Muqaddimah.",
       "category": "Ancient Islamic Civilization"
     }
   ]
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

---

### 🚀 Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

You can start editing the homepage by modifying `pages/index.js`. The page auto-updates as you edit the file.

---

### 🔧 API Routes

API routes live under `pages/api` and can be accessed via:

- [http://localhost:3000/api/hello](http://localhost:3000/api/hello) (sample)
- [http://localhost:3000/api/questions](http://localhost:3000/api/questions) (your custom routes)

Learn more here: [API routes documentation](https://nextjs.org/docs/pages/building-your-application/routing/api-routes)

---

## Learn More

- 📘 [Next.js Documentation](https://nextjs.org/docs)
- 🧑‍🏫 [Learn Next.js (Interactive)](https://nextjs.org/learn-pages-router)
- 💻 [GitHub - Next.js](https://github.com/vercel/next.js)

---

## 🚀 Deploy on Vercel

Deploy this app using [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Learn more in the [deployment docs](https://nextjs.org/docs/pages/building-your-application/deploying).