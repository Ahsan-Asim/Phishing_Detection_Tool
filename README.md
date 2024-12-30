# Phishing Detection System

This project is a comprehensive **Phishing Detection System** that combines **Natural Language Processing (NLP)**, **Machine Learning (ML)**, **Information Security**, and **DevOps** principles to detect and categorize phishing URLs in real-time.

## Features
- **Chrome Extension**: User-friendly interface to authenticate Gmail, fetch emails, and categorize them as safe or phishing.
- **Backend API**: Flask-based API that utilizes a pre-trained BERT model to analyze email content and URLs.
- **Pre-trained Model**: Fine-tuned BERT model for phishing detection.
- **CI/CD Integration**: Automated testing and deployment pipeline for backend updates.

---

## Project Structure

### Root Folder
- `phishing_model/`  
  Contains the fine-tuned BERT model files used for phishing detection, including:
  - `config.json`
  - `vocab.txt`
  - `tokenizer.json`

- `shipping_backend/`  
  Backend server built using Flask to provide APIs for phishing detection. Key files:
  - `app.py`: Main server logic and API routes.
  - `requirements.txt`: Python dependencies for the backend.
  - `tests/`: Contains test cases for backend APIs.

- `extensions/`  
  Chrome extension files for the phishing detection UI. Key files:
  - `manifest.json`: Extension's main configuration.
  - `popup.html`, `popup.js`: Frontend interface for user interaction.
  - `background.js`: Background script for Gmail authentication and processing.

- `.github/workflows/ci.yml`  
  CI/CD pipeline configuration for automating tests and deployments.

---

## Installation

### Backend Setup
1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/phishing-detection.git
   cd phishing-detection/shipping_backend
2. Create and activate a virtual environment:
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

3. Install dependencies:
pip install -r requirements.txt

4. Run the server:
python app.py



Chrome Extension Setup
Navigate to chrome://extensions in your browser.
Enable Developer Mode.
Click Load unpacked and select the extensions/ folder.
Use the extension to authenticate Gmail and analyze emails.



Key Libraries and Tools
Flask: Backend API development.
Transformers: For leveraging pre-trained BERT models.
Torch: Machine Learning framework for model inference.
Pytest: Automated testing.
Chrome Extension APIs: For Gmail integration and UI.
gdown: To manage large pre-trained model files from Google Drive.





Here's a structured and concise README.md file for your GitHub repository:

markdown
Copy code
# Phishing Detection System

This project is a comprehensive **Phishing Detection System** that combines **Natural Language Processing (NLP)**, **Machine Learning (ML)**, **Information Security**, and **DevOps** principles to detect and categorize phishing URLs in real-time.

## Features
- **Chrome Extension**: User-friendly interface to authenticate Gmail, fetch emails, and categorize them as safe or phishing.
- **Backend API**: Flask-based API that utilizes a pre-trained BERT model to analyze email content and URLs.
- **Pre-trained Model**: Fine-tuned BERT model for phishing detection.
- **CI/CD Integration**: Automated testing and deployment pipeline for backend updates.

---

## Project Structure

### Root Folder
- `phishing_model/`  
  Contains the fine-tuned BERT model files used for phishing detection, including:
  - `config.json`
  - `vocab.txt`
  - `tokenizer.json`

- `shipping_backend/`  
  Backend server built using Flask to provide APIs for phishing detection. Key files:
  - `app.py`: Main server logic and API routes.
  - `requirements.txt`: Python dependencies for the backend.
  - `tests/`: Contains test cases for backend APIs.

- `extensions/`  
  Chrome extension files for the phishing detection UI. Key files:
  - `manifest.json`: Extension's main configuration.
  - `popup.html`, `popup.js`: Frontend interface for user interaction.
  - `background.js`: Background script for Gmail authentication and processing.

- `.github/workflows/ci.yml`  
  CI/CD pipeline configuration for automating tests and deployments.

---

## Installation

### Backend Setup
1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/phishing-detection.git
   cd phishing-detection/shipping_backend
2. Create and activate a virtual environment:
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
3. Install dependencies:
pip install -r requirements.txt
4. Run the server:
python app.py


Chrome Extension Setup
*Navigate to chrome://extensions in your browser.
*Enable Developer Mode.
*Click Load unpacked and select the extensions/ folder.
*Use the extension to authenticate Gmail and analyze emails.


Key Libraries and Tools
*Flask: Backend API development.
*Transformers: For leveraging pre-trained BERT models.
*Torch: Machine Learning framework for model inference.
*Pytest: Automated testing.
*Chrome Extension APIs: For Gmail integration and UI.
*gdown: To manage large pre-trained model files from Google Drive.


CI/CD Workflow
*Automated testing of backend APIs using GitHub Actions.
*Download and configure the BERT model dynamically during CI builds.


How It Works
*Email Fetching: Chrome extension fetches unread Gmail messages.
*Phishing Detection: The backend API processes email content using the BERT model.
*UI Visualization: Results displayed with color-coded labels (Red: Phishing, Green: Safe).


Credits
This project was a collaborative effort by:
Ahsan Asim
