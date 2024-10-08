function showSection(sectionId) {
    // Minden szakasz elrejtése
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Az aktuális szakasz megjelenítése
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
}

// Alapértelmezetten a bemutatkozás szakasz látható
showSection('bemutatkozas');