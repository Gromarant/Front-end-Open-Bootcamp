const paragraph = document.querySelectorAll('.paragraph');
const section = document.querySelectorAll('.section');
const paperBin = document.querySelector('.paperBin');

paragraph.forEach( paragraph => {
    paragraph.addEventListener( 'dragstart', event => {
        paragraph.classList.add('.dragging')
        event.dataTransfer.setData( 'id', paragraph.id);
        const ghostElement = document.querySelector('.ghost');
        event.dataTransfer.setDragImage( ghostElement, 0, 0 );
        event.dataTransfer.effectAllowed = 'move';
    });

    paragraph.addEventListener( 'dragend', () => {
        paragraph.classList.remove('.dragging')
    });
});

section.forEach ( section => {
    section.addEventListener( 'dragover', event => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    });

    section.addEventListener( 'drop', event => {
        const idParagraph = event.dataTransfer.getData('id');
        const parag = document.getElementById(idParagraph);
        section.appendChild(parag);
    });
});

paperBin.addEventListener( 'dragover', ( event ) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move';
});

paperBin.addEventListener( 'drop', ( event ) => {
    event.preventDefault()
    const ElementId = event.dataTransfer.getData('id');
    const draggingElement = document.getElementById(ElementId);
    const parent = draggingElement.parentElement;
    parent.removeChild(draggingElement);
});