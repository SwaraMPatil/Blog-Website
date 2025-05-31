import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://SwaraMPatil:Swara123@cluster0.wja23rv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;
