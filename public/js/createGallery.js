document.querySelector("#new-gallery-form").addEventListener("submit",handlenewgallery);
async function handlenewgallery(e){
    e.preventDefault();
    const name= document.querySelector("#name-input").value.trim();
    if(!name) return; 
    
    const response = await fetch('/api/gallery/new', {
        method: 'POST',
        body: JSON.stringify({ name }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to create gallery');
    }
}

