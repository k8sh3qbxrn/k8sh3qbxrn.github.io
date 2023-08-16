const categorySelect = document.getElementById('category');
const videoItems = document.querySelectorAll('.video-item');

categorySelect.addEventListener('change', filterVideos);

function filterVideos() {
  const selectedCategory = categorySelect.value;

  videoItems.forEach(item => {
    if (selectedCategory === 'all' || item.getAttribute('data-category') === selectedCategory) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Generate video items dynamically here and append them to the "video-archive" div
// Example:
const videoArchive = document.getElementById('video-archive');

function createVideoItem(category, title, videoId, thumbnailUrl) {
  const videoItem = document.createElement('div');
  videoItem.classList.add('video-item');
  videoItem.setAttribute('data-category', category);

  const h3 = document.createElement('h3');
  h3.textContent = title;
  videoItem.appendChild(h3);

  const link = document.createElement('a');
  link.href = `https://www.youtube.com/watch?v=${videoId}`;
  link.target = '_blank';

  const thumbnail = document.createElement('img');
  thumbnail.classList.add('video-thumbnail');
  thumbnail.src = thumbnailUrl;
  thumbnail.alt = title;

  link.appendChild(thumbnail);
  videoItem.appendChild(link);

  videoArchive.appendChild(videoItem);
}

// Example usage:
createVideoItem('music', 'Music Video 1', 'VIDEO_ID_HERE', 'music_thumbnail.jpg');
createVideoItem('sports', 'Sports Highlights', 'VIDEO_ID_HERE', 'sports_thumbnail.jpg');
createVideoItem('education', 'Educational Lecture', 'VIDEO_ID_HERE', 'education_thumbnail.jpg');
// You can add more video items as needed
