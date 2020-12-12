export class Validator{

    constructor(){
        
    }
    
    static validator(data, schema){
        if (typeof data === "object" && typeof schema === "object"){
            var re = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
            for (const [key,values] of Object.entries(schema)){
                if (data.hasOwnProperty(key) &&  typeof data[key] === "object"){
                    Validator.validator(data[key], schema[key]);}
                 else if (!data.description ){
                  continue;
                }
                // else if (data.description && typeof data.description !== 'string'){
                //     throw new Error ('discription must be string')
                // }
        
                else if (typeof data[key] !== schema[key]) {
                    throw new Error("Something went wrong");
                }else if (Array.isArray(data[key]) && typeof data[key] === schema[key]){
                    for (let i of data[key]){
                          Validator.validator(i,schema[key])
                    }  
                }
                else if(typeof data[values] !== typeof schema[values]){
                    throw new Error ('Invalid parameter');
                }
                else if(key === 'dateOfBirth'){
                    if(re.test(data[key]) === false ){
                        throw new Error ('type of datefBirth must be date')
                    }
                }
                else if(key === 'sex'){
                    if(data[key] !== "female" && data[key] !== "male" ){
                        throw new Error ('sex must be female or male')
                    }
                }
            }
            return true;
        }
    }
}