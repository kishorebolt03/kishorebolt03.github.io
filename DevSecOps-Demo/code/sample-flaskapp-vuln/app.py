from flask import Flask, request, render_template, redirect, url_for

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # Get the text input from the form
        text_input = request.form.get('text_input')

        # Redirect to a dynamic route based on the input
        return redirect(url_for('display_input', input_data=text_input))

    # Render the input form
    return render_template('index.html')

@app.route('/<input_data>')
def display_input(input_data):
    # Directly display the input data without sanitization (vulnerable to XSS)
    return f"Input in uppercase: {input_data.upper()}<br>Original Input: {input_data}"

if __name__ == '__main__':
    app.run(debug=True)

