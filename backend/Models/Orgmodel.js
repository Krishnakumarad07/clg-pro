const { uniq } = require("lodash");
const mongoose=require("mongoose");

const OrgSchema=new mongoose.Schema({
    orgname: {
    type:String,
    required: true,
    unique: true,
    },
    org_email:
    {
        type:String,
        required: true,
        unique: true,
    },
    password:
    {
        type:String,
        required: true,
    }
});
const OrgDB = mongoose.model("Organisation",OrgSchema);
module.exports = OrgDB;