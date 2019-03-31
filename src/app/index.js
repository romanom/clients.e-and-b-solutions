import React from "react";
import AppRouter from "../routers/AppRouter";
import "normalize.css/normalize.css";
import "../styles/styles.scss";
import { initializeAnalytics } from "../tools/analytics";

initializeAnalytics();

const App = () => <AppRouter />;

export default App;
