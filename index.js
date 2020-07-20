module.exports = class{
    
    constructor(){
        this.value;
    }

    isValidNonEmptyArray(array){
        if((Array.isArray(array)) && (array.length>0))
        {
            return true
        }
        else
        {
            return false
        }
    }

    // Array Validation //

    isArray(array){
        return Array.isArray(array)
    }

    isNumericArray(array){
        if( (this.isArray(array)) && (array.length>0) ){
            return array.every( element => typeof(element)==='number')
        }
        else{
            return false
        }  
    }

    isIntegerArray(array){
        if( (this.isArray(array)) && (array.length>0) ){
            return array.every( element => Number.isInteger(element) )
        }
        else{
            return false
        }   
    }

    isDecimalArray(array){
        if(this.isNumericArray(array)){
            if( (this.isArray(array)) && (array.length>0) ){
                return array.every( element => element%1 != 0 ) 
            }
            else{
                return false
            }
        }
        else{
            return false
        }
    }

    isStringArray(array){
        if( (this.isArray(array)) && (array.length>0) ){
            return array.every( element => typeof(element)==='string')
        }
        else{
            return false
        }  
    }

    isEmptyArray(array){
        if((this.isArray(array)) && (array.length == 0)){
            return true
        }
        else{
            return false
        }
    }


    // array aggregation

    sum(array){
        let flag = 0;
        if(this.isValidNonEmptyArray(array))
        {
            let result = array.reduce((total,element) => {
                if(typeof(element)=='number'){
                    flag = true
                    return total + element
                }
                else{
                    return total
                }
            },0)
            if(flag)
            {
                return parseFloat(result.toFixed(4))
            } 
        }
    }

   

    product(array){
        let flag = false;
        if(this.isValidNonEmptyArray(array))
        {   
            let result = array.reduce((total,element) => {
                if(typeof(element)=='number'){
                    flag = true;
                    return total * element
                }
                else{
                    return total
                }
            },1)
            
            if(flag)
            {
                return parseFloat(result.toFixed(4))
            } 
        }
    }

    count(array){
        return array.length;
    }

    
   
}




