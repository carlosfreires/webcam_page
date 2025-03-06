// Seleção dos elementos da página
const videoPreview = document.getElementById("videoPreview") as HTMLVideoElement;
const videoPlayback = document.getElementById("videoPlayback") as HTMLVideoElement;
const btnStart = document.getElementById("btnStart") as HTMLButtonElement;
const btnRecord = document.getElementById("btnRecord") as HTMLButtonElement;
const btnStop = document.getElementById("btnStop") as HTMLButtonElement;
const downloadLink = document.getElementById("downloadLink") as HTMLAnchorElement;
const fileInput = document.getElementById("fileInput") as HTMLInputElement;

let mediaStream: MediaStream;
let mediaRecorder: MediaRecorder;
let recordedChunks: Blob[] = [];

// Botão para iniciar a captura da câmera e microfone
btnStart.addEventListener("click", async () => {
    try {
        // Captura vídeo e áudio do microfone
        mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        
        // // Desliga a reprodução do áudio do microfone na pré-visualização do vídeo
        // const audioTracks = mediaStream.getAudioTracks();
        // if (audioTracks.length > 0) {
        //     audioTracks[0].enabled = false; // Desliga o áudio na pré-visualização
        // }
        videoPreview.muted = true;
        videoPreview.srcObject = mediaStream;
    } catch (erro) {
        console.error(`Erro ao acessar a câmera ou microfone: ${erro}`);
    }
});

// Iniciar a gravação
btnRecord.addEventListener("click", () => {
    if (!mediaStream) {
        alert('Por favor, inicie a captura primeiro!');
        return;
    }

    recordedChunks = [];

    // Especifica o formato da gravação (geralmente "video/webm" é suportado)
    const options = { mimeType: 'video/webm;codecs=vp8,opus' };
    mediaRecorder = new MediaRecorder(mediaStream, options);

    // Evento chamado quando há dados disponíveis
    mediaRecorder.ondataavailable = (event: BlobEvent) => {
        if (event.data.size > 0) {
            recordedChunks.push(event.data);
        }
    };

    // Ao parar a gravação, cria-se o Blob e disponibiliza para download
    mediaRecorder.onstop = () => {
        const blob = new Blob(recordedChunks, { type: 'video/webm' });

        // Caso queira converter para MP4, você deverá implementar a conversão aqui
        const url = URL.createObjectURL(blob);
        downloadLink.href = url;
        downloadLink.download = 'recorded_video.webm'; // Alterar para .mp4 se for convertido
        downloadLink.style.display = 'block';
        downloadLink.textContent = 'Download do Vídeo Gravado';
    };

    mediaRecorder.start();
    btnStop.disabled = false;
    btnRecord.disabled = true;
});

// Parar a gravação
btnStop.addEventListener('click', () => {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop();  // Para a gravação
    }

    // Desativa os botões corretamente
    btnStop.disabled = true;
    btnRecord.disabled = false;

    // Interrompe o fluxo de mídia, liberando os recursos
    if (mediaStream) {
        mediaStream.getTracks().forEach(track => track.stop());
    }

    // Esconde o link de download enquanto a gravação não for concluída
    downloadLink.style.display = 'none';
});

// Reproduzir vídeo salvo a partir do arquivo selecionado
fileInput.addEventListener('change', (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
        const file = target.files[0];
        const url = URL.createObjectURL(file);
        videoPlayback.src = url;

        // Garantir que o áudio seja reproduzido ao reproduzir o vídeo gravado
        videoPlayback.onplay = () => {
            // Se o vídeo for reproduzido, reativa o áudio
            const playbackAudioTrack = mediaStream.getAudioTracks()[0];
            if (playbackAudioTrack) {
                playbackAudioTrack.enabled = true; // Habilita o áudio para reprodução
            }
        };
    }
});
