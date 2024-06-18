document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById('gallery');
    const imagesDir = 'images/photos/';

    const images = [
        //{ filename: "photo1.jpg", title: "" },
        //{ filename: "photo2.png", title: "" },
        { filename: "photo3.jpg", title: "" },
        { filename: "photo4.png", title: "" },
        //{ filename: "photo5.jpg", title: "" },
        { filename: "photo6.png", title: "" },
        { filename: "photo7.jpg", title: "" },
        { filename: "photo8.jpg", title: "" },
        { filename: "photo9.jpeg", title: "" },
        { filename: "photo10.png", title: "" },
        { filename: "photo11.jpeg", title: "" },
        { filename: "photo12.jpg", title: "" },
        //{ filename: "photo13.jpg", title: "" },
        { filename: "photo14.png", title: "" },
        //{ filename: "photo15.png", title: "" },
        { filename: "photo16.png", title: "" },
        { filename: "photo17.jpg", title: "" },
        { filename: "photo18.jpg", title: "" },
        { filename: "photo19.jpg", title: "" },
        { filename: "photo20.jpg", title: "" },
        { filename: "photo21.jpg", title: "" }
    ];

    images.forEach(image => {
        console.log('Processing image:', image.filename);
        const div = document.createElement('div');
        div.className = 'col-md-3 col-sm-6 col-xs-6 filtr-item';
        div.setAttribute('data-category', 'mix, 23/24'); // Modify categories as needed
        div.innerHTML = `
            <div class="portfolio-block">
                <img class="img-fluid" src="${imagesDir}${image.filename}" alt="">
                <div class="caption">
                    <a class="search-icon" href="${imagesDir}${image.filename}" data-lightbox="image-1">
                        <i class="tf-ion-ios-search-strong"></i>
                    </a>
                    <h4><a href="portfolio.html">${image.title}</a></h4>
                </div>
            </div>
        `;
        gallery.appendChild(div);
    });
});