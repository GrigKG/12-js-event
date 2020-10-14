$(document).ready(function () {
    $(root).text('Add new item: ');
    const input = $('<input></input>');
    const buttonAdd = $('<button>new item</button>');
    const ol = $('<ol></ol>');
    $(root).append(input, buttonAdd, ol);
    $(buttonAdd).click(function () {
        const text = this.previousElementSibling.value.trim();
        const li = $('<li></li>').text(text);
        const buttonX = $('<button>X</button>');
        $(buttonX).click(function () {
            this.parentElement.remove();
        })
            $(ol).append(li);
        $(li).append(buttonX);
        this.previousElementSibling.value = '';
    })
})



