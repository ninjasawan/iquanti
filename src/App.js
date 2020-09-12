import React, { lazy, Suspense } from "react";
import "./App.css";

const OptimizationPage = lazy(() => import("./pages/OptimizationPage"));
const Header = lazy(() => import("./components/Header"));
const Breadcrum = lazy(() => import("./components/Breadcrum"));

function App() {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <div className="header-wrapper">
          <Header />
          <Breadcrum />
        </div>
        <main className="container">
          <OptimizationPage />
        </main>
      </Suspense>
    </div>
  );
}

export default App;
