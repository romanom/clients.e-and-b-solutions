import React from "react";
import AppContainer from "../components/core/AppContainer";
import "normalize.css/normalize.css";
import "../styles/styles.scss";
import { initializeAnalytics } from "../tools/analytics";

initializeAnalytics();

const App = () => <AppContainer />;

export default App;
