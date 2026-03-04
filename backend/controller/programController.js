import program from '../model/programModel.js';
import { v4 } from 'uuid';
import { putObject } from '../util/putObject.js';
import { getObject } from '../util/getObject.js';
import { deleteObject } from '../util/deleteObject.js';
import cache from '../cache/cache.js';

export const getPrograms = async (req, res) => {
    try {
        const cachedPrograms = await cache.fetchPrograms();
        if (cachedPrograms) {
            console.log("Programs retrieved from cache");
            return res.status(200).json({
                "status": "success",
                "data": cachedPrograms
            });
        }

        const events = await program.find().sort({ _id: -1 })
        await cache.savePrograms(events);
        console.log("Programs retrieved from Database and cached");

        return res.status(200).json({
            "status": "success",
            "data": events
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ "status": "error", "message": err.message })
    }
}

export const getOneProgram = async (req, res) => {
    try {
        const { id } = req.params
        const cachedProgram = await cache.fetchProgramDetail(id);
        if (cachedProgram) {
            console.log(`Program ${id} retrieved from cache`);
            return res.status(200).json({
                "status": "success",
                "data": cachedProgram
            });
        }

        const event = await program.findById(id)

        if (!event) {
            return res.status(404).json({
                "status": "error",
                "message": "Program not found"
            })
        }
        await getObject(event.key);
        await cache.saveProgramDetail(id, event);
        console.log(`Program ${id} retrieved from Database and cached`);

        return res.status(200).json({
            "status": "success",
            "data": event
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ "status": "error", "message": err.message })
    }
}

export const createProgram = async (req, res) => {
    try {
        const { title, synopsis } = req.body
        const { file } = req.files || {}
        const galleryFiles = req.files?.galleryFiles; // Can be single or array
        const fileName = "images/" + v4()

        if (!title || !synopsis || !file) {
            return res.status(400).json({
                "status": "error",
                "message": "Please enter all fields correctly"
            })
        }

        const uploadResult = await putObject(file.data, fileName);
        if (!uploadResult || !uploadResult.url) {
            return res.status(500).json({
                "status": "error",
                "message": "Main image is not uploaded",
            });
        }

        let galleryUrls = [uploadResult.url];
        if (galleryFiles) {
            const filesToUpload = Array.isArray(galleryFiles) ? galleryFiles : [galleryFiles];
            for (const gFile of filesToUpload) {
                const gFileName = "gallery/" + v4();
                const gResult = await putObject(gFile.data, gFileName);
                if (gResult?.url) galleryUrls.push(gResult.url);
            }
        }

        const event = await program.create({
            title,
            synopsis,
            image: uploadResult.url,
            images: galleryUrls,
            key: uploadResult.key
        });

        await cache.invalidateProgramsCache();

        return res.status(201).json({
            "status": "success",
            "data": event,
        })
    } catch (err) {
        console.error('Error in createProgram:', err);
        return res.status(500).json({ "status": "error", "message": err.message })
    }
}

export const updateProgram = async (req, res) => {
    try {
        const { id } = req.params
        const { title, synopsis } = req.body
        const files = req.files || {}
        const galleryFiles = req.files?.galleryFiles;

        const event = await program.findById(id)
        if (!event) {
            return res.status(404).json({
                "status": "error",
                "message": "Program not found"
            })
        }

        let updateData = { title, synopsis };
        let currentImages = [...event.images];

        if (files.file) {
            const uploadResult = await putObject(files.file.data, event.key)
            if (uploadResult && uploadResult.url) {
                updateData.image = uploadResult.url;
                if (currentImages[0] === event.image) {
                    currentImages[0] = uploadResult.url;
                } else {
                    currentImages.unshift(uploadResult.url);
                }
            }
        }

        if (galleryFiles) {
            const filesToUpload = Array.isArray(galleryFiles) ? galleryFiles : [galleryFiles];
            for (const gFile of filesToUpload) {
                const gFileName = "gallery/" + v4();
                const gResult = await putObject(gFile.data, gFileName);
                if (gResult?.url) currentImages.push(gResult.url);
            }
        }

        updateData.images = currentImages;

        const updatedEvent = await program.findByIdAndUpdate(id, updateData, { new: true })

        await cache.invalidateProgramsCache(id);

        return res.status(200).json({
            "status": "success",
            "data": updatedEvent
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ "status": "error", "message": err.message })
    }
}


export const deleteProgram = async (req, res) => {
    try {
        const { id } = req.params
        const event = await program.findById(id)
        if (!event) {
            return res.status(404).json({
                "status": "error",
                "message": "Program not found"
            })
        }
        const data = await deleteObject(event.key)
        if (data.status !== 204 && data.status !== 200) {
            return res.status(500).json({
                "status": "error",
                "message": "Image is not deleted from S3"
            })
        }
        await program.findByIdAndDelete(id)

        await cache.invalidateProgramsCache(id);

        return res.status(200).json({
            "status": "success",
            "message": "Program deleted successfully"
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ "status": "error", "message": err.message })
    }
}

