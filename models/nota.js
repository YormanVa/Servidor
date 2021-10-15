import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const notaSchema = new Schema({
    username: { type: String, required: [true, 'Nombre obligatorio'] },
    email: String,
    password: String,
    rol:  { type: String, default:"2"},

    
});

// Convertir a modelo
const Nota = mongoose.model('Nota', notaSchema);
export default Nota;
