function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters
  
    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
      document.getElementById('result').textContent = 'Please enter valid values.';
      return;
    }
  
    const bmi = weight / (height * height);
  
    let category;
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }
  
    document.getElementById('result').textContent = `Your BMI: ${bmi.toFixed(2)} (${category})`;
  }
  