export const errorCheck = (value) => {
    let regex = /^[a-zA-Z0-9 ]*$/;

    let errorMessage = "";

    if(value.length === 0){
        errorMessage = "This field can not be empty"
    }else if (!regex.test(value)) {
        errorMessage = "Only letters and numbers are accepted"
    }else {
        errorMessage = "no error";
    }
    return errorMessage;
    }
