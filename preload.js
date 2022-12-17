document.addEventListener("DOMContentLoaded", function() {
    let btn = document.createElement("button");
    btn.innerHTML = "GG";
    btn.type = "submit";
    btn.id = "ggbtn";
    btn.style = "position: absolute;left: 100;top: 100;z-index: 1000;";
    document.body.appendChild(btn);

    document.getElementById('ggbtn').onclick = function() {
        //alert("it should work");
        //document.getElementById('input').value = 'GG';

        const input = document.querySelector('input[placeholder="[Enter] to use chat"]');
        input.value = 'GG';

        //input.click();

        /*const event = new KeyboardEvent('keydown', {
            key: 'Enter',
            bubbles: true,
            cancelable: true
        });*/

        const event = new KeyboardEvent('keydown', {
            keyCode: 13,
            bubbles: true,
            cancelable: true
        });

        input.dispatchEvent(event);
    };
});
