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
    # Display the input data in uppercase
    return f"Input in uppercase: {input_data.upper()}"

if __name__ == '__main__':
    app.run(debug=True)

