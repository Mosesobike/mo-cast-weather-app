self.addEventListener('install',evt => {
    console.log('service worker has been inastalled');
});

self.addEventListener('activate',evt =>{
    console.log('service worker has been activated');
});