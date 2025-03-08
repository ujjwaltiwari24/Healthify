const diseases = {
    A: ["Asthma", "Anemia", "Arthritis"],
    B: ["Bronchitis", "Beriberi", "Bursitis"],
    C: ["Chickenpox", "Cholera", "Celiac Disease"],
    D: ["Dengue", "Diabetes", "Diphtheria"],
    E: ["Eczema", "Epilepsy", "Encephalitis"],
    F: ["Flu", "Fibromyalgia", "Fungal Infection"],
    G: ["Gastritis", "Glaucoma", "Gonorrhea"],
    H: ["Hypertension", "Hepatitis", "Herpes"],
    I: ["Influenza", "Iron Deficiency", "Insomnia"],
    J: ["Jaundice", "Joint Pain", "Jock Itch"],
    K: ["Kidney Stones", "Keratosis", "Keratitis"],
    L: ["Lupus", "Leukemia", "Laryngitis"],
    M: ["Migraine", "Measles", "Malaria"],
    N: ["Narcolepsy", "Nephritis", "Neuropathy"],
    O: ["Obesity", "Osteoporosis", "Oral Cancer"],
    P: ["Pneumonia", "Psoriasis", "Pancreatitis"],
    Q: ["Q Fever", "Quinsy (Peritonsillar Abscess)"],
    R: ["Rabies", "Rheumatoid Arthritis", "Rickets"],
    S: ["Scabies", "Sinusitis", "Scoliosis"],
    T: ["Tuberculosis", "Tetanus", "Thyroid Disorder"],
    U: ["Ulcer", "Urticaria", "Urinary Tract Infection"],
    V: ["Varicella (Chickenpox)", "Vitamin Deficiency", "Vertigo"],
    W: ["Whooping Cough", "Wilson’s Disease"],
    X: ["Xeroderma", "Xanthoma"],
    Y: ["Yellow Fever", "Yeast Infection"],
    Z: ["Zika Virus", "Zollinger-Ellison Syndrome"]
};

// Generate A-Z Buttons
const lettersContainer = document.querySelector(".letters-container");
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

alphabet.forEach(letter => {
    let button = document.createElement("button");
    button.className = "letter";
    button.innerText = letter;
    button.onclick = () => filterDiseases(letter);
    lettersContainer.appendChild(button);
});

function filterDiseases(letter) {
    const diseaseList = document.getElementById("disease-list");
    const selectedLetter = document.getElementById("selected-letter");
    
    selectedLetter.innerText = `Diseases Starting with '${letter}'`;
    diseaseList.innerHTML = "";

    if (diseases[letter]) {
        diseases[letter].forEach(disease => {
            let diseaseBtn = document.createElement("a");
            diseaseBtn.className = "disease";
            diseaseBtn.href = disease.toLowerCase().replace(/\s+/g, '-') + ".html";
            diseaseBtn.innerText = disease;
            diseaseList.appendChild(diseaseBtn);
        });
    }
}
