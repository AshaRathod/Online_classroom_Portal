let assignments = [];

function uploadAssignment() {
    const input = document.getElementById('assignmentInput');
    const teacherMessage = document.getElementById('teacherMessage');

    if (input.files.length === 0) {
        teacherMessage.textContent = "Please select a file to share!";
        teacherMessage.style.color = "red";
        return;
    }

    const file = input.files[0];
    assignments.push(file);
    teacherMessage.textContent = `"${file.name}" shared successfully!`;
    teacherMessage.style.color = "green";

    displayAssignments();
    input.value = ""; // Reset file input
}

function displayAssignments() {
    const container = document.getElementById('assignmentList');
    container.innerHTML = "";

    assignments.forEach(file => {
        const card = document.createElement('div');
        card.className = "card";

        const title = document.createElement('div');
        title.className = "card-title";
        title.textContent = file.name;

        const buttons = document.createElement('div');
        buttons.className = "card-buttons";

        const viewBtn = document.createElement('a');
        viewBtn.className = "view";
        viewBtn.textContent = "View";
        viewBtn.href = URL.createObjectURL(file);
        viewBtn.target = "_blank";

        const downloadBtn = document.createElement('a');
        downloadBtn.className = "download";
        downloadBtn.textContent = "Download";
        downloadBtn.href = URL.createObjectURL(file);
        downloadBtn.download = file.name;

        buttons.appendChild(viewBtn);
        buttons.appendChild(downloadBtn);

        card.appendChild(title);
        card.appendChild(buttons);

        container.appendChild(card);
    });
}