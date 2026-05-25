function buildPlan(topic, minutes) {
  const reviewTime = Math.max(5, Math.floor(minutes * 0.25));
  const practiceTime = Math.max(10, Math.floor(minutes * 0.55));
  const reflectionTime = Math.max(5, minutes - reviewTime - practiceTime);

  return [
    `Review ${topic} notes for ${reviewTime} minutes.`,
    `Practice one focused example for ${practiceTime} minutes.`,
    `Write a short reflection for ${reflectionTime} minutes.`
  ];
}

export function initStudyPlanner() {
  const form = document.querySelector("[data-planner-form]");
  const output = document.querySelector("[data-plan-output]");

  if (!form || !output) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const topic = String(formData.get("study-topic") || "the topic").trim();
    const minutes = Number(formData.get("study-time"));
    const planItems = buildPlan(topic, minutes);
    const heading = document.createElement("h3");
    const list = document.createElement("ol");

    heading.textContent = `${minutes}-minute plan`;
    planItems.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      list.appendChild(listItem);
    });

    output.replaceChildren(heading, list);
  });
}
