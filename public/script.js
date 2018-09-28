
$(document).ready(function(){

    // From specific City
    $('#city').change(function(){
        var selected= $(this).val();
        if(selected=='Elsewhere'){
            $('#custom-city').show()
        }
        else{
            $('#custom-city').hide()
        }
    })
    
    //For id generate
    $('#id').click(function(){
        var result= make_id()
        $('#generateid').val(result);
    })

    //For email validation
    $('#email').change(function(){
        var val= $(this).val();
        var result= email_validation(val)
        if(result==false){
            $('#submit').attr('disabled', true)
        }
        else{
            $('#submit').attr('disabled', false)
        }
    })
    
    //For phone Validation
    $('#phoneno').change(function(){
        var val= $(this).val();
        var result= phone_validation(val)
        if(result==false){
            $('#submit').attr('disabled', true)
        }
        else{
            $('#submit').attr('disabled', false)
        }
    })
    
    //Function for email validation
    function email_validation(email){
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email.match(mailformat)){
            return true;
        }
        else{
            return false
        }
    }

    //Function for phone validation
    function phone_validation(phone){
        var phoneno= /^\d{10}$/;
        if(phone.match(phoneno) && phone.length==10){
            return true
        }
        else{
            return false
            
        }
    }

    //Function for id generation
    function make_id(){
        var text= '#';
        text+=Math.random().toString(36).substring(2,8)+Math.random().toString(36).substring(2,9);
        return text;
    }
})