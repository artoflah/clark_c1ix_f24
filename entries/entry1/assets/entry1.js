// Select draggable elements and the drop zone
const draggables = document.querySelectorAll('.shirt-1, .bag-1, .pants-1, .shoes-1');
const dropZone = document.getElementById('bodyhidden');
const popupMessage = document.createElement('div');

// Add the pop-up message to the DOM
popupMessage.classList.add('popup-message');
popupMessage.textContent = "You're done!";
document.body.appendChild(popupMessage);

let droppedItems = new Set(); // Track dropped items

// Add drag event listeners to draggable items
draggables.forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

// Add drag event listeners to the drop zone
dropZone.addEventListener('dragover', dragOver);
dropZone.addEventListener('drop', drop);

// Drag start handler
function dragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.className);
  e.target.classList.add('dragging');
}

// Drag end handler
function dragEnd(e) {
  e.target.classList.remove('dragging');
}

// Drag over handler for the drop zone
function dragOver(e) {
  e.preventDefault(); // Allow the drop
  dropZone.classList.add('drop-zone'); // Highlight the drop zone
}

// Drop handler
function drop(e) {
  e.preventDefault();
  dropZone.classList.remove('drop-zone'); // Remove the highlight

  const className = e.dataTransfer.getData('text/plain');
  const draggedElement = document.querySelector(`.${className}`);

  // Calculate drop position relative to the drop zone
  const rect = dropZone.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const offsetY = e.clientY - rect.top;

  // Set the dragged element's position
  draggedElement.style.position = 'absolute';
  draggedElement.style.left = `${offsetX - draggedElement.offsetWidth / 2}px`;
  draggedElement.style.top = `${offsetY - draggedElement.offsetHeight / 2}px`;

  // Append the dragged element to the drop zone
  dropZone.appendChild(draggedElement);

  // Track the dropped item
  droppedItems.add(className);

  // Check if all items are dropped
  if (droppedItems.size === draggables.length) {
    showPopupMessage();
  }
}

// Show the pop-up message
function showPopupMessage() {
  popupMessage.style.display = 'block';
  setTimeout(() => {
    popupMessage.style.display = 'none';
  }, 3000); // Hide the message after 3 seconds
  // Drag start handler
function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.className);
    e.target.classList.add('dragging');
  
    // Set the drag image to the dragged element itself
    const img = e.target;
    e.dataTransfer.setDragImage(img, img.offsetWidth / 2, img.offsetHeight / 2);
  }
  
}
