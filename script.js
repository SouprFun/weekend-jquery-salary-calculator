console.log('JS');

$(onReady);
let total = 0;

function onReady() {
    console.log('JQ');
    //goes to the button click function
    $('#submit').on('click', submitButtonClick);
    $('#tableBody').on('click', '.delete', deleteButtonClick);

}

function submitButtonClick() {
    //checks if vlaues are empty and kicks out of the function without clearing inputs so they can adjust.
    if ($('#firstName').val() === '' || $('#lastName').val() === '' || $('#id').val() === '' || $('#title').val() === '' || $('#salary').val() === '' || $('#salary').val() === NaN) {
        alert("Please enter valid inputs!");
        return;
    }

    //takes values from input
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let id = $('#id').val();
    let title = $('#title').val();
    let salary = Number($('#salary').val()); //makes sure the input coming in is a number
    let monthly = salary / 12; // finds pay amount per month
    total += monthly; // updates total and devides annual salary by months


    let className = "";
    if (total >= 20000) {
        className = 'high';
    }

    //emptying inputs
    $('#firstName').val('');
    $('#lastName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#salary').val('');

    //updates table
    $('#tableBody').append(`
            <tr>
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${id}</td>
                <td>${title}</td>
                <td>${salary}</td>
                <td>${monthly.toFixed(2)}</td>
                <td><button class="delete">Delete</button></td>
            </tr>
        `);

    //console.log(`First name: ${firstName}, last ${lastName}, id${id}, ${title}, ${salary}, ${total}`)

    $('#total').empty(); //empties the 'label that has the monthly $'
    $('#total').append(`<h3 class="${className}"> Total Monthly: $${total.toFixed(2)} </h3>`); // adds 'hi' to the emptied label

}

function deleteButtonClick(event) {
    //deletes the row
    $(event.target).closest('tr').remove();
}