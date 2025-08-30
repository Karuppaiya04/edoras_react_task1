import React from "react";
import "./index.css";
import Avatar from "./components/Avatar";
import FeedItem from "./components/FeedItem";
import StudentModule from "./Pages/StudentModule";
 // corrected path
import { CalendarCheck2 } from "lucide-react"; // make sure you installed lucide-react

export default function App() {
  return (
    <div className="App">
      {/* Student Dashboard Page */}
      <StudentModule />

      
    </div>
  );
}
