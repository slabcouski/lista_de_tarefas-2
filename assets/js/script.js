function taskDone(element) {
    $(element.target).parent().toggleClass('done')
}

$(document).ready(function() {
    $('form').on('submit', function(e) {
        
        e.preventDefault();

        let newList = $('#new-task-list');
        let newItem = $(`<li></li>`); 
        let newCheck = $('<input type="checkbox" id="check-task">');

        $(newCheck).appendTo(newItem);
        $(`<p id="task"></p>`).text(newList.val()).appendTo(newItem);
        $(newItem).appendTo('#new-task');
        newItem.after('<hr>');
        $(newList).val('');

        document.querySelectorAll('#check-task').forEach((item) => {
            item.addEventListener('click', taskDone)
        })

    });
}); 