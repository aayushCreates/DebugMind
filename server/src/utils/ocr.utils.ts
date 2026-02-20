import { createWorker } from "tesseract.js";


export default async function getUploadedImgContent(imgUrl: string) {
    const worker = await createWorker("eng");
    const res = await worker.recognize(imgUrl);

    const imgContent = res.data.text;
    await worker.terminate();
    return imgContent;
}

