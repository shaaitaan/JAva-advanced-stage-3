function add_two_number() {
    
        let first = parseInt($('#first').val().trim());
        let second = parseInt($('#second').val().trim());
        
        if(isNaN(first) || isNaN(second)){
            $('#response').removeClass('text-success').addClass('text-danger').text('Pls. Enter the values');
            console.log('hi');
        }else{
            let answer = first + second;
            $('#response').removeClass('text-danger').addClass('text-success').text('Answer: '+answer);
            $('#answer').val(answer);
        }

}