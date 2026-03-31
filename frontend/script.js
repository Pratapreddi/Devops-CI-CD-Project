async function fetchNotes() {
  const res = await fetch("/api/notes");
  const data = await res.json();
  const list = document.getElementById("list");
  list.innerHTML = "";
  data.forEach(n => {
    const li = document.createElement("li");
    li.innerText = n.text;
    list.appendChild(li);
  });
}

async function addNote() {
  const text = document.getElementById("note").value;
  await fetch("/api/notes", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ text })
  });
  fetchNotes();
}

fetchNotes();