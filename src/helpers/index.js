export const REGULAR_PATTERNS = {
    WORD_PATTERN : /^([A-Za-zÁáÉéÍíÓóÚúÑñ])+$/,
    TEXT_PATTERN : /^(([A-Za-zÁáÉéÍíÓóÚúÑñ])+([ ])*)+$/,
    DATE_PATTERN : /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/,
    EMAIL_PATTERN : /^([a-z0-9]+([.a-z0-9]+)?)+(\+[a-z0-9]+)?@[a-z]+(\.[a-z]+)?\.([a-z]+)$/,
    PASSWORD_PATTERN : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\(!|¡”#$%&;/=’?¡¿:;,.\-_+*{\][}\])]).{8,}$/,
}; 

export function validate(value, pattern){
    let error = 0;
    if(!pattern.test(value) || value.trim().length === 0)
        error = 1;

    return error;
}

export function validateValues(valuesObject){
    let errors = 0;

    valuesObject.forEach(item =>{
        errors += validate(item.value, item.pattern)

        if(errors){
            item.setError(true);
        }
        else{
            item.setError(false);
        }
    });

    return errors;

}

export function generateId(){
    return Math.random().toString(36).substring(2)+Date.now().toString(36);
}