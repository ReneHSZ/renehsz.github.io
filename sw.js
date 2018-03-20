self.addEventListener('fetch', function (event) {
    event.respondWith(
        Response.redirect('https://renehsz.com', 302)
    );
});
