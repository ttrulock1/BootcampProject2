const updateGalleryFormHandler = async (event) => {
    event.preventDefault();

    // Get the blog post ID from the end of the URL
    const galleryId = window.location.href.split("/").pop();

    const name = document.querySelector('#title-input').value;

    const response = await fetch('/api/gallery/' + galleryId, {
        method: 'PUT',
        body: JSON.stringify({ name }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to update blog post');
    }
};

document
    .querySelector('#blog-update-form')
    .addEventListener('submit', updateGalleryFormHandler);

const deleteGalleryHandler = async (event) => {
    event.preventDefault();

    // Get the blog post ID from the end of the URL
    const galleryId = window.location.href.split("/").pop();

    const response = await fetch('/api/gallery/' + galleryId, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to delete blog post');
    }
};

document
    .querySelector('#delete-button')
    .addEventListener('click', deleteGalleryHandler);
