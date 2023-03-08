const fitnessQuestions = [
    {
      question: "What is your current weight in pounds?",
      type: "number",
      name: "weight",
      placeholder: "Enter your weight in pounds",
      required: true
    },
    {
      question: "What is your current height in inches?",
      type: "number",
      name: "height",
      placeholder: "Enter your height in inches",
      required: true
    },
    {
      question: "What is your gender?",
      type: "radio",
      name: "gender",
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "other", label: "Other" }
      ],
      required: true
    }
  ];
  
  module.exports = fitnessQuestions;
  