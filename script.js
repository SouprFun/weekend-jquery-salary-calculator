console.log('JS');

$(onReady)
let total = 0

function onReady() {
    console.log('JQ');
    //goes to the button click function
    $('#submit').on('click', submitButtonClick);

    function submitButtonClick() {
        //takes values from input
        /*if ($('#firstName') === '' || $('#lastName') === '' || $('#id') ==='' || $('#title') === '' || $('#salary') === '' || $('#salary') === NaN){
            alert("Please enter valid inputs!")
            return;
        }*/

        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();
        let id = $('#id').val();                
        let title = $('#title').val();
        let salary = Number($('#salary').val()); //makes sure the input coming in is a number
        total += salary; // updates total 

        let className = "";
        if (total >= 20000){
            className = 'high'
        }

        //emptying inputs
        /*$('#firstName').val('');
        $('#lastName').val('');
        $('#id').val('');
        $('#title').val('');
        $('#salary').val('');*/

        //updates table
        $('#tableBody').append(`
            <tr>
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${id}</td>
                <td>${title}</td>
                <td>${salary}</td>
            </tr>
        `)

        //console.log(`First name: ${firstName}, last ${lastName}, id${id}, ${title}, ${salary}, ${total}`)

        $('#total').empty(); //empties the 'label that has the monthly $'
        $('#total').append(`<h3 class="${className}"> Total Monthly: ${total} </h3>`); // adds 'hi' to the emptied label

    }
}