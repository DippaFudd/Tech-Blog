document.getElementById('add-post-btn').addEventListener('click', () => {
    const author = prompt('Enter the author\'s name:', 'Anonymous');
    const title = prompt('Enter the post title:', 'New Post');
    const content = prompt('Enter the post content:', 'This is a dynamically added post.');

    if (!author || !title || !content) {
        alert('All fields are required to add a post.');
        return;
    }

    const postsGrid = document.querySelector('.posts-grid');
    const newPost = document.createElement('article');
    newPost.className = 'post card';
    newPost.innerHTML = `
        <h3 class="post-title"><a href="#">${title}</a></h3>
        <p class="post-meta">Posted by <strong>${author}</strong> on ${new Date().toLocaleDateString()}</p>
        <p class="post-content">${content}</p>
        <button class="edit-post-btn btn-home">Edit</button>
    `;
    postsGrid.appendChild(newPost);
    attachEditEvent(newPost.querySelector('.edit-post-btn'));
});

function attachEditEvent(button) {
    button.addEventListener('click', (event) => {
        const postCard = event.target.closest('.post.card');
        const postTitle = postCard.querySelector('.post-title a');
        const postContent = postCard.querySelector('.post-content');

        const newTitle = prompt('Edit Post Title:', postTitle.textContent);
        const newContent = prompt('Edit Post Content:', postContent.textContent);

        if (newTitle) postTitle.textContent = newTitle;
        if (newContent) postContent.textContent = newContent;
    });
}

// Attach edit event to existing posts
document.querySelectorAll('.edit-post-btn').forEach(attachEditEvent);
