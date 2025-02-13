from flask import Flask, request, redirect, url_for
import urllib.parse

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # Get the text input from the form
        text_input = request.form.get('text_input')

        # URL-encode the input to make it safe for redirects
        encoded_input = urllib.parse.quote(text_input)

        # Redirect to a dynamic route based on the input
        return redirect(url_for('display_input', input_data=encoded_input))

    # Render the input form
    return '''
        <form method="post">
            <label for="text_input">Enter Text:</label>
            <input type="text" id="text_input" name="text_input">
            <button type="submit">Submit</button>
        </form>
    '''

@app.route('/<input_data>')
def display_input(input_data):
    # Decode the input before displaying (for demonstration)
    decoded_input = urllib.parse.unquote(input_data)

    # Vulnerable to XSS because it directly outputs user input
    return f"Input in uppercase: {decoded_input.upper()}<br>Original Input: {decoded_input}"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
