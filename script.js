function getTotalPrice(Items) {

    let totalPrice = 0
    for (let i = 0; i < Items.length; i++) {
        totalPrice = totalPrice + Items[i].price * Items[i].quantity
    }
    console.log(totalPrice)
}


getTotalPrice([
        { product: "Milk", quantity: 1, price: 1.50 }
    ])

getTotalPrice([
        { product: "Milk", quantity: 1, price: 1.50 },
        { product: "Cereals", quantity: 1, price: 2.50 }
    ])


getTotalPrice([
        { product: "Milk", quantity: 3, price: 1.50 }
    ])
  