module.exports = {
    getInventory: (req,res) => {
        const db = req.app.get('db')

        db.get_inventory().then(inventory => res.status(200).send(inventory)).catch(err => console.log(err))
    },
    addItem: async (req,res) => {
       const {name, img, price} = req.body
       console.log(name, img, price)
       let products = await req.app.get('db').create_product([name, img, price])
       res.status(200).send(products)
        
    }
}