import postMessage from '../models/postMessage.js';

export const getPost = async(req, res) => {
    try{
        const postMessages = await postMessage.find();
        res.status(200).json(postMessages);
    } catch(error){
        res.status(404).json(error);
        console.log(error);
    }
}
export const createPost = async(req, res) => {
    const post = req.body;
    const newPost = new postMessage(post);
    try{
        await newPost.save();
        res.status(200).json(newPost);
    } catch(error){
        res.status(404).json(error);
        console.log(error);
    }
}