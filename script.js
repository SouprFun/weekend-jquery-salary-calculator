console.log('JS'); 

$(onReady)

function onReady(){ 
    console.log('JQ');
    //goes to the button click function
    $('#submit').on('click', submitButtonClick); 

    function submitButtonClick(){
        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();
        let id = $('#id').val();            //takes values from input boxes
        let title = $('#title').val();
        let salary = Number($('#salary').val());
        let total = 0
        total += salary;
        

        console.log(`First name: ${firstName}, last ${lastName}, id${id}, ${title}, ${salary}, ${total}`)

        $('#total').empty(); //empties the 'label that has the monthly $'
        $('#total').append(`Total Monthly: ${total}`); // adds 'hi' to the emptied label

    }
}