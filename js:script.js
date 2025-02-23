fetch('podcasts.json')
    .then(response => response.json())
    .then(data => {
        const podcastList = document.getElementById('podcast-list');
        data.forEach(podcast => {
            const podcastItem = document.createElement('div');
            podcastItem.classList.add('podcast-item');

            const image = document.createElement('img');
            image.src = podcast.imageUrl;
            podcastItem.appendChild(image);

            const details = document.createElement('div');
            const title = document.createElement('h2');
            title.textContent = podcast.title;
            details.appendChild(title);

            const description = document.createElement('p');
            description.textContent = podcast.description;
            details.appendChild(description);

            const websiteLink = document.createElement('a');
            websiteLink.href = podcast.websiteUrl;
            websiteLink.textContent = "Website";
            details.appendChild(websiteLink);

            const rssLink = document.createElement('a');
            rssLink.href = podcast.rssFeedUrl;
            rssLink.textContent = "RSS Feed";
            details.appendChild(rssLink);

            podcastItem.appendChild(details);
            podcastList.appendChild(podcastItem);
        });
    });