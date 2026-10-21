
const regions = {
  frontal: {
    name: "Frontal Lobe",
    number: "REGION 01 / 05",
    icon: "◈",
    description:
      "The frontal lobe plays an important role in planning, decision-making, voluntary movement and aspects of personality.",
    functions: [
      "Planning and reasoning",
      "Decision-making",
      "Voluntary movement"
    ],
    fact:
      "The frontal lobe helps us plan actions, solve problems and control impulses."
  },
  parietal: {
    name: "Parietal Lobe",
    number: "REGION 02 / 05",
    icon: "✧",
    description:
      "The parietal lobe helps process touch and other sensory information, while supporting spatial awareness and attention.",
    functions: [
      "Processing touch",
      "Spatial awareness",
      "Sensory integration"
    ],
    fact:
      "This region helps the brain understand where your body is in space."
  },
  temporal: {
    name: "Temporal Lobe",
    number: "REGION 03 / 05",
    icon: "〰",
    description:
      "The temporal lobe is important for hearing, understanding language and aspects of learning and memory.",
    functions: [
      "Auditory processing",
      "Language comprehension",
      "Memory formation"
    ],
    fact:
      "Parts of the temporal lobe work with other brain structures to support memory."
  },
  occipital: {
    name: "Occipital Lobe",
    number: "REGION 04 / 05",
    icon: "◎",
    description:
      "Located at the back of the brain, the occipital lobe is central to processing visual information.",
    functions: [
      "Visual processing",
      "Recognizing shapes",
      "Interpreting visual patterns"
    ],
    fact:
      "Your eyes collect light, but the brain processes the signals that allow you to see."
  },
  cerebellum: {
    name: "Cerebellum",
    number: "REGION 05 / 05",
    icon: "⌁",
    description:
      "The cerebellum contributes to coordination, balance, posture and the learning of skilled movements.",
    functions: [
      "Movement coordination",
      "Balance and posture",
      "Motor learning"
    ],
    fact:
      "The cerebellum helps make many movements smoother and more precise."
  }
};

const regionName = document.getElementById("regionName");
const regionNumber = document.getElementById("regionNumber");
const regionIcon = document.getElementById("regionIcon");
const regionDescription = document.getElementById("regionDescription");
const functionList = document.getElementById("functionList");
const regionFact = document.getElementById("regionFact");

function selectRegion(key) {
  const region = regions[key];
  if (!region) return;

  regionName.textContent = region.name;
  regionNumber.textContent = region.number;
  regionIcon.textContent = region.icon;
  regionDescription.textContent = region.description;
  regionFact.textContent = region.fact;

  functionList.replaceChildren();

  region.functions.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    functionList.appendChild(li);
  });

  document.querySelectorAll(".region-btn").forEach((button) => {
    const active = button.dataset.region === key;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  document.querySelectorAll(".hotspot").forEach((hotspot) => {
    const active = hotspot.dataset.region === key;
    hotspot.classList.toggle("selected", active);
    hotspot.setAttribute("aria-pressed", String(active));
  });
}

document.querySelectorAll(".region-btn").forEach((button) => {
  button.addEventListener("click", () => {
    selectRegion(button.dataset.region);
  });
});

document.querySelectorAll(".hotspot").forEach((hotspot) => {
  hotspot.addEventListener("click", () => {
    selectRegion(hotspot.dataset.region);
  });

  hotspot.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectRegion(hotspot.dataset.region);
    }
  });
});

selectRegion("frontal");
