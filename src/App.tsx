import React from "react";
import HeroPage from "./components/HeroPage"; // Adjust the path based on where you saved HeroPage.tsx

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen antialiased">
      <HeroPage />
    </div>
  );
};

export default App;