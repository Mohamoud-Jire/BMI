// Good Luck! You got this 💪🏾
// Write your code here.
function calculateBMI(weight, height) {
  console.log(weight / (height * height));
}
let Ali = calculateBMI(79, 1.3);
let Mohamed = calculateBMI(69, 1);
if(Ali > Mohamed) {
  console.log(`Ali's BMI is higher`);
} else {
  console.log(`Mohamed's BMI is higher`);
}