Here's a simple step-by-step guide to run your Python Flask app on Windows:

### Step 1: Install Python

1. Ensure Python is installed on your system. If not, download and install it from the [official Python website](https://www.python.org/downloads/).
2. During installation, make sure to check the option to "Add Python to PATH."

### Step 2: Set Up Your Flask Application

1. **Create a New Directory** for your Flask app, for example, `flask_app`.
   
2. **Navigate** to the directory in the Command Prompt:
   ```bash
   cd path\to\your\flask_app
   ```
   
3. **Create the Application Files**:
   - **`app.py`**: This is your main Flask application file.
   - **`templates/index.html`**: Your HTML file should be inside a folder named `templates`.

### Step 3: Install Flask

1. Open Command Prompt and navigate to your app's directory.
2. Run the following command to install Flask using pip:
   ```bash
   pip install flask
   ```

### Step 4: Run Your Flask Application

1. Make sure you are in the directory where your `app.py` file is located.
2. Run the Flask application with the command:
   ```bash
   python app.py
   ```
   
   If your file is named differently, replace `app.py` with the correct filename.

### Step 5: Access Your Flask App

1. After running the app, you should see output similar to:
   ```
   * Running on http://127.0.0.1:5000 (Press CTRL+C to quit)
   ```
   
2. Open your web browser and go to [http://127.0.0.1:5000](http://127.0.0.1:5000).

### Common Flask Commands:

- **To Stop the Flask App:** Press `CTRL+C` in the Command Prompt.
- **To Enable Debug Mode:** Add `app.run(debug=True)` in your `app.py`. This allows the server to reload automatically whenever you make changes to the code.

Let me know if you need further assistance with any of these steps!
