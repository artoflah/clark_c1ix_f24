// Function to change top item
function changeTop() {
    const topElement = document.getElementById('top');
    const outfitImage = document.getElementById('outfit-img');
    const outfitDesc = document.getElementById('outfitDesc');
  
    // Change top
    if (topElement.textContent === 'Top: Red') {
      topElement.textContent = 'Top: Blue';
      outfitImage.src = 'outfit2.png'; // Update image for blue top
      outfitDesc.innerHTML = '<p>Now wearing a blue top!</p>';
    } else {
      topElement.textContent = 'Top: Red';
      outfitImage.src = 'outfit1.png'; // Reset image to red top
      outfitDesc.innerHTML = '<p>Now wearing a red top!</p>';
    }
  }
  
  // Function to change bottom item
  function changeBottom() {
    const bottomElement = document.getElementById('bottom');
    const outfitImage = document.getElementById('outfit-img');
    const outfitDesc = document.getElementById('outfitDesc');
  
    // Change bottom
    if (bottomElement.textContent === 'Bottom: Jeans') {
      bottomElement.textContent = 'Bottom: Skirt';
      outfitImage.src = 'outfit3.png'; // Update image for skirt
      outfitDesc.innerHTML = '<p>Now wearing a skirt!</p>';
    } else {
      bottomElement.textContent = 'Bottom: Jeans';
      outfitImage.src = 'outfit1.png'; // Reset image to jeans
      outfitDesc.innerHTML = '<p>Now wearing jeans!</p>';
    }
  }
  
  // Function to change shoes
  function changeShoes() {
    const shoesElement = document.getElementById('shoes');
    const outfitImage = document.getElementById('outfit-img');
    const outfitDesc = document.getElementById('outfitDesc');
  
    // Change shoes
    if (shoesElement.textContent === 'Shoes: Sneakers') {
      shoesElement.textContent = 'Shoes: Boots';
      outfitImage.src = 'outfit4.png'; // Update image for boots
      outfitDesc.innerHTML = '<p>Now wearing boots!</p>';
    } else {
      shoesElement.textContent = 'Shoes: Sneakers';
      outfitImage.src = 'outfit1.png'; // Reset image to sneakers
      outfitDesc.innerHTML = '<p>Now wearing sneakers!</p>';
    }
  }
  
  // Function to change accessory
  function changeAccessory() {
    const accessoryElement = document.getElementById('accessory');
    const outfitImage = document.getElementById('outfit-img');
    const outfitDesc = document.getElementById('outfitDesc');
  
    // Change accessory
    if (accessoryElement.textContent === 'Accessory: Hat') {
      accessoryElement.textContent = 'Accessory: Scarf';
      outfitImage.src = 'outfit5.png'; // Update image for scarf
      outfitDesc.innerHTML = '<p>Now wearing a scarf!</p>';
    } else {
      accessoryElement.textContent = 'Accessory: Hat';
      outfitImage.src = 'outfit1.png'; // Reset image to hat
      outfitDesc.innerHTML = '<p>Now wearing a hat!</p>';
    }
  }
  