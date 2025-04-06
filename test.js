const ytdl = require('ytdl-core');
const fs = require('fs');

async function downloadYouTubeAudio(url, outputPath) {
    try {
        const info = await ytdl.getInfo(url);
        const audioFormat = ytdl.chooseFormat(info.formats, { quality: 'highestaudio' });

        if (audioFormat) {
            ytdl(url, { format: audioFormat })
                .pipe(fs.createWriteStream(outputPath))
                .on('finish', () => {
                    console.log('Audio downloaded successfully!');
                })
                .on('error', (err) => {
                    console.error('Error downloading audio:', err);
                });
        } else {
            console.log('No suitable audio format found.');
        }
    } catch (error) {
        console.error('Error getting video info:', error);
    }
}

const videoURL = 'https://youtu.be/6rXb7cZVrpk';
const outputFilePath = 'audio.mp3'; // Or another audio format
downloadYouTubeAudio(videoURL, outputFilePath);