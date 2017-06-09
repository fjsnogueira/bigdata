var mongoose    = require( 'mongoose' );
var Schema      = mongoose.Schema;

var memberNameValidator = [
    function (val) {
        return (val.length > 0 && val.toLocaleLowerCase() != 'none')
    },
    // Custom error text...
    'Select a valid member name.' ];

var requiredStringValidator = [
    function (val) {
        var testVal = val.trim();
        return (testVal.length > 0)
    },
    // Custom error text...
    '{PATH} cannot be empty' ];

var logSchema = new Schema({
    Author: {
        type: String,
        required: true,
        validate: memberNameValidator 
    },
    commit: {
        type: String,
        required: true,
        validate: requiredStringValidator 
    },
    message: {
        type: String,
        required: true,
        validate: requiredStringValidator 
    },
    Date: { 
        type: String,
        required: true,
        validate: requiredStringValidator 
    }
});

var projectSchema = new Schema({
    name: {
        type: String,
        required: true,
        validate: memberNameValidator 
    },
    logs: [ logSchema ],
    commits: [ Object ]
    //,
    //createdOn: { 
    //    type: Date, default: Date.now 
    //}
});

// Export model...
module.exports = mongoose.model( 'Project', projectSchema );
