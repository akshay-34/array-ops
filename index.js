module.exports = class{
    
    constructor(){
        this.value;
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

   
}




