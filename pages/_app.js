import "@/styles/globals.css";
import Navbar from "./components/navBar";

export default function App({ Component, pageProps }) {
  return (
    <>
    <head>
      <title>MCQ App</title>
    </head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
