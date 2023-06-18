if (window.File && window.FileReader && window.FileList) {
    const fileInput = document.getElementById('fileInput');
    const video = document.getElementById('video');
    const videoContainer = document.getElementById('videoContainer');
    const loading = document.getElementById('loading');
    const buttons = document.getElementById('buttons');
    const play = document.getElementById('play');
    const pause = document.getElementById('pause');
    const volumeUp = document.getElementById('volumeUp');
    const volumeDown = document.getElementById('volumeDown');

    fileInput.addEventListener ('change', function(e) {
        const file = fileInput.files[0];

    video.addEventListener('loadstart', function() {
        alert('Video cargando...');
        video.play();
    });

        if (file && file.type.startsWith('video/')){
            
            loading.style.display = 'block';

            const fileURL = URL.createObjectURL(file);
            video.src = fileURL;

            setTimeout(function(){
                loading.style.display = 'none';
                videoContainer.style.display = 'block';
                buttons.style.display = 'block';
            }, 2000);

            play.addEventListener('click', function(){
                video.play();
            });

            pause.addEventListener('click', function(){
                video.pause();
            });

            volumeUp.addEventListener('click', function(){
                video.volume += 0.1;
            });

            volumeDown.addEventListener('click', function(){
                video.volume -= 0.1;
            });

        } else {
            alert('Por favor, seleccione un tipo de archivo válido.');
        }
    } )
}