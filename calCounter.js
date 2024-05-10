document.getElementById('calculate').addEventListener('click', function () {
    const age = parseFloat(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const workoutDays = parseFloat(document.getElementById('workoutDays').value);
    const goal = document.getElementById('goal').value;
    let totalCalories;
    
    // Calculate BMR using Revised Harris-Benedict Equation
    const bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    
    // Adjust BMR based on activity level
    let activityFactor;
    if (workoutDays < 1) {
        activityFactor = 1.2; // Sedentary (little or no exercise)
    } else if (workoutDays >= 1 && workoutDays <= 3) {
        activityFactor = 1.375; // Lightly active (light exercise/sports 1-3 days/week)
    } else if (workoutDays >= 4 && workoutDays <= 5) {
        activityFactor = 1.55; // Moderately active (moderate exercise/sports 3-5 days/week)
    } else if (workoutDays >= 6 && workoutDays <= 7) {
        activityFactor = 1.725; // Very active (hard exercise/sports 6-7 days/week)
    } else {
        activityFactor = 1.9; // Extra active (very hard exercise/sports & physical job)
    }
    
    // Calculate total calories based on goal
    if (goal === 'maintenance') {
        totalCalories = bmr * activityFactor;
    } else if (goal === 'gain') {
        totalCalories = bmr * activityFactor + 500; // Add 500 calories surplus for weight gain
    } else if (goal === 'lose') {
        totalCalories = bmr * activityFactor - 500; // Subtract 500 calories deficit for weight loss
    }
    
    // Display total calories in the calories input
    document.getElementById('calories').value = totalCalories.toFixed(2) + " calories/day";
});