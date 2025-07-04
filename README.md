# 🏡 Real Estate Rate Estimation System

An AI-powered web application that predicts real estate property prices based on user input features like location, area, size, and amenities. It also includes dashboards, interactive maps, trend analysis, and property comparison tools.

![Banner](https://img.shields.io/badge/Real--Estate--Predictor-AI--Powered-blueviolet?style=for-the-badge)

---

## 🔍 Project Overview

This system allows users to:
- 🔢 Predict the price of a property using ML models
- 🗺️ Visualize the location on an interactive map
- 📊 Analyze price trends over time and across locations
- 📌 Compare different properties side by side
- 🧠 Interact with a built-in AI Assistant for real estate FAQs

---

## 🚀 Features

- **🔮 ML-Powered Price Prediction**  
  Using models like Linear Regression, Random Forest, XGBoost with `log1p` transformation.

- **📍 Interactive Location Map**  
  Real-time location plotting with Leaflet.js or Google Maps.

- **📈 Price Trend Dashboard**  
  Analyze how property prices have changed over years across different regions.

- **📋 Property Comparison Tool**  
  Compare two or more properties side-by-side.

- **💬 AI Assistant (Optional)**  
  Ask real estate questions like:  
  _"Where should I buy under 60L?"_ or  
  _"What's the average rent in Marathahalli?"_

- **📁 History Logging**  
  Save predictions and interactions to SQLite/CSV for future analysis.

---

## 🧠 Tech Stack

| Layer       | Technologies Used                          |
|-------------|---------------------------------------------|
| **Frontend**| HTML, CSS, Bootstrap, JavaScript, Jinja2    |
| **Backend** | Python, Flask / Streamlit                   |
| **ML**      | Pandas, NumPy, Scikit-learn, XGBoost, Pickle|
| **Map**     | Leaflet.js / Google Maps API                |
| **Dashboard**| Matplotlib, Seaborn, Plotly                |

---

## 📂 Project Structure

│
├── static/ # CSS, JS, and image assets
├── templates/ # HTML templates (Jinja2)
├── model/ # Trained ML model (model.pkl)
├── data/ # Dataset files and CSVs
├── app.py # Main Flask application
├── location.json # Coordinates for mapping
├── requirements.txt # Python dependencies
├── README.md # This file
