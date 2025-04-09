# 🎧 AI Transcriber & Summarizer Backend

Effortlessly transcribe audio/video and summarize text with this sleek backend.

## 🚀 Get Started

### Prerequisites

* **Node.js** (`>= 18`): [Download](https://nodejs.org/)
* **npm** (comes with Node.js)

**For YouTube & Video Processing:**

* **Linux:** Run `./build.sh` (installs `yt-dlp` & `ffmpeg`).
* **Windows:**
    * **Python** (`>= 3.7`): [Download](https://www.python.org/downloads/)
    * **yt-dlp:** [Install Guide](https://github.com/yt-dlp/yt-dlp#installation)
    * **ffmpeg:** [Download Binaries](https://ffmpeg.org/download.html) (add `bin` to your PATH).

### Installation

1.  **Clone:**
    ```bash
    git clone https://github.com/3nadh3/ai-transcriber-summarizer-backend.git
    cd ai-transcriber-summarizer-backend
    ```

2.  **Dependencies:**
    ```bash
    npm install
    ```

3.  **Configuration (`.env`):**
    ```dotenv
    ASSEMBLYAI_API_KEY=YOUR_ASSEMBLYAI_API_KEY
    OPENAI_API_KEY=YOUR_OPENAI_API_KEY
    # (Optional) GEMINI_API_KEY=YOUR_GEMINI_API_KEY
    ```

### Run

* **Linux:**
    ```bash
    chmod +x build.sh && ./build.sh
    and
    nodemon
    or
     npm start
    ```
* **Windows:**
    ```bash
    npm start
    or
    nodemon
    ```

## ⚙️ API Endpoints

* `POST /summarize-youtube`: Summarize YouTube audio (`videoUrl`).
* `POST /summarize`: Summarize text (`transcript`, `level`).
* `POST /transcribe-video`: Transcribe uploaded audio/video (`video` file).
* `POST /upload`: Upload & summarize text/PDF (`file`, optional `level`).

## ✨ Notes

* Uploaded files are temporary (`uploads/`).
* Keep your API keys secure!
