const validationRules = {
  name: {
    pattern: /^[a-zA-Z\s]{2,50}$/,
    message: "Name should be 2-50 characters long and contain only letters",
  },
  age: {
    min: 16,
    max: 100,
    message: "Age should be between 16 and 100",
  },
  course: {
    pattern: /^[a-zA-Z\s]{2,50}$/,
    message: "Course should be 2-50 characters long and contain only letters",
  },
  department: {
    pattern: /^[a-zA-Z\s]{2,50}$/,
    message:
      "Department should be 2-50 characters long and contain only letters",
  },
};

function validateField(field, value) {
  const rule = validationRules[field];
  if (!value.trim()) {
    return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
  }

  if (field === "age") {
    const age = parseInt(value);
    if (isNaN(age) || age < rule.min || age > rule.max) {
      return rule.message;
    }
  } else if (!rule.pattern.test(value)) {
    return rule.message;
  }

  return "";
}
