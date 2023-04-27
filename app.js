// function for clicking on btn
function setProductValue(ItemId){
    const memoryCost = document.getElementById('memory-cost')
    const storageCost = document.getElementById('storage-cost')
    const deliveryCost = document.getElementById('delivery-cost')
    
    // memory checking
    if((ItemId + '-memory') == 'default-memory'){
        const newCost = 0
        memoryCost.innerText = newCost
        
    }
    else if((ItemId + '-memory') == '16gb-memory'){
        const newCost = 180
        memoryCost.innerText = newCost
    }
    // Storage checking
    else if((ItemId + '-storage') == 'defaultStor-storage'){
        const newCost = 0
        storageCost.innerText = newCost
    }
    else if((ItemId + '-storage') == '512gb-storage'){
        const newCost = 100
        storageCost.innerText = newCost
    }
    else if((ItemId + '-storage') == '1tb-storage'){
        const newCost = 180
        storageCost.innerText = newCost
    }
    else if((ItemId + '-delivery') == 'defaultDel-delivery'){
        const newCost = 0
        deliveryCost.innerText = newCost
    }
    else{
        const newCost = 20
        deliveryCost.innerText = newCost
    }

    // Updating value 
    getTotalPrice()
}

// Function to update Value
function getTotalPrice(){
    // Dom selection and getting value from span tag og html file
    const currentTotalPrice = document.getElementById('total-price')
    const lastTotal = document.getElementById('last-total')

    const currentMemoryCost = document.getElementById('memory-cost')
    const currentMemoryText = currentMemoryCost.innerText
    
    const currentStoragePrice = document.getElementById('storage-cost')
    const currentStorageText = currentStoragePrice.innerText
    
    const currentDeliveryPrice = document.getElementById('delivery-cost')
    const currentDeliveryText = currentDeliveryPrice.innerText

    // Setting value for every event addition
    let currentTotalValue = 1299 +  parseInt(currentMemoryText) + parseInt(currentStorageText) + parseInt(currentDeliveryText)
    currentTotalPrice.innerText = currentTotalValue;
    lastTotal.innerText = currentTotalValue
}

// Event handler for memory btn
document.getElementById('default-memory').addEventListener('click',function(){
    setProductValue('default')
})

document.getElementById('16gb-memory').addEventListener('click',function(){
    setProductValue('16gb')
})
// Event handler for storage btn
document.getElementById('default-storage').addEventListener('click', function(){
    setProductValue('defaultStor')
})

document.getElementById('512gb-storage').addEventListener('click', function(){
    setProductValue('512gb')
})

document.getElementById('1tb-storage').addEventListener('click', function(){
    setProductValue('1tb')
})
// Event handler for delivey btn
document.getElementById('default-delivery').addEventListener('click', function(){
    setProductValue('defaultDel')
})

document.getElementById('fast-delivery').addEventListener('click', function(){
    setProductValue('fast')
})

// Promo Code Event
document.getElementById('promo-btn').addEventListener('click', function(){
    const promoField = document.getElementById('promo-code')
    const promoFieldValue = promoField.value
    if(promoFieldValue == 'stevekaku'){
        const lastTotal = document.getElementById('last-total')
        const lastTotalText = lastTotal.innerText
        // Make 20% of the total and set it to Final Price
        const lastTotalValue = parseInt(lastTotalText) * 0.2
        lastTotal.innerText = parseInt(lastTotalText) - lastTotalValue
        // promoField.value = ''
        // Disable input option after applying cupon once
        promoField.disabled = true
    }
})