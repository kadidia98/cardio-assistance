const mongoose = require ('mongoose');
/* var uniqueValidator = require('mongoose-unique-validator'); */
const patientSchema = mongoose.Schema(

{
 nom: { type:String},
prenom: { type:String},
sexe: { type:String},
groupe_sanguin: { type:String},
poids:{ type:String},
telephone: {type:Number},


 dateAdmission: { type: Date}  ,
 numero_dossier: {type:String}


},
{timestamps: true},
{
    collection: 'patient'
}

/* {
collection:'books'
} */ );

/* userSchema.plugin(uniqueValidator , { message: "email exite deja"}); */



module.exports = mongoose.model('patient', patientSchema);
