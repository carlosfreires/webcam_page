"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Seleção dos elementos da página
var videoPreview = document.getElementById("videoPreview");
var videoPlayback = document.getElementById("videoPlayback");
var btnStart = document.getElementById("btnStart");
var btnRecord = document.getElementById("btnRecord");
var btnStop = document.getElementById("btnStop");
var downloadLink = document.getElementById("downloadLink");
var fileInput = document.getElementById("fileInput");
var mediaStream;
var mediaRecorder;
var recordedChunks = [];
// Botão para iniciar a captura da câmera e microfone
btnStart.addEventListener("click", function () { return __awaiter(void 0, void 0, void 0, function () {
    var erro_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, navigator.mediaDevices.getUserMedia({ video: true, audio: true })];
            case 1:
                // Captura vídeo e áudio do microfone
                mediaStream = _a.sent();
                // // Desliga a reprodução do áudio do microfone na pré-visualização do vídeo
                // const audioTracks = mediaStream.getAudioTracks();
                // if (audioTracks.length > 0) {
                //     audioTracks[0].enabled = false; // Desliga o áudio na pré-visualização
                // }
                videoPreview.muted = true;
                videoPreview.srcObject = mediaStream;
                return [3 /*break*/, 3];
            case 2:
                erro_1 = _a.sent();
                console.error("Erro ao acessar a c\u00E2mera ou microfone: ".concat(erro_1));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Iniciar a gravação
btnRecord.addEventListener("click", function () {
    if (!mediaStream) {
        alert('Por favor, inicie a captura primeiro!');
        return;
    }
    recordedChunks = [];
    // Especifica o formato da gravação (geralmente "video/webm" é suportado)
    var options = { mimeType: 'video/webm;codecs=vp8,opus' };
    mediaRecorder = new MediaRecorder(mediaStream, options);
    // Evento chamado quando há dados disponíveis
    mediaRecorder.ondataavailable = function (event) {
        if (event.data.size > 0) {
            recordedChunks.push(event.data);
        }
    };
    // Ao parar a gravação, cria-se o Blob e disponibiliza para download
    mediaRecorder.onstop = function () {
        var blob = new Blob(recordedChunks, { type: 'video/webm' });
        // Caso queira converter para MP4, você deverá implementar a conversão aqui
        var url = URL.createObjectURL(blob);
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
btnStop.addEventListener('click', function () {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop(); // Para a gravação
    }
    // Desativa os botões corretamente
    btnStop.disabled = true;
    btnRecord.disabled = false;
    // Interrompe o fluxo de mídia, liberando os recursos
    if (mediaStream) {
        mediaStream.getTracks().forEach(function (track) { return track.stop(); });
    }
    // Esconde o link de download enquanto a gravação não for concluída
    downloadLink.style.display = 'none';
});
// Reproduzir vídeo salvo a partir do arquivo selecionado
fileInput.addEventListener('change', function (event) {
    var target = event.target;
    if (target.files && target.files.length > 0) {
        var file = target.files[0];
        var url = URL.createObjectURL(file);
        videoPlayback.src = url;
        // Garantir que o áudio seja reproduzido ao reproduzir o vídeo gravado
        videoPlayback.onplay = function () {
            // Se o vídeo for reproduzido, reativa o áudio
            var playbackAudioTrack = mediaStream.getAudioTracks()[0];
            if (playbackAudioTrack) {
                playbackAudioTrack.enabled = true; // Habilita o áudio para reprodução
            }
        };
    }
});
//# sourceMappingURL=main.js.map