document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.getElementById('buttons');

    buttons.addEventListener('click', function(event) {
      if (event.target.matches('button')) {
        const buttonText = event.target.textContent;
        if (buttonText === '=') {
          try {
            display.textContent = eval(display.textContent);
          } catch (error) {
            display.textContent = 'Error';
          }
        } else if (buttonText === 'C') {
          display.textContent = '0';
        } else {
          display.textContent =
            display.textContent === '0' ? buttonText : display.textContent + buttonText;
        }
      }
    });
  });