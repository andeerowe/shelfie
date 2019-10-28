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
        
    },

    delete: (req,res) => {
        // const {id} = req.params
        // req.app.get('db').delete_product({id})
        // .then(product => {
        //     res.status(200).send(product.data)
        // })
        // .catch(err => console.log(err))
        const {id} = req.params
        // console.log(id)
        const db = req.app.get('db')
        db.delete_product(id)
        .then(product => {
            res.status(200).send(product.data)
        })
        .catch(err => console.log(err))
    },
    editItem: async (req,res) => {
        const {id} = req.params
        const {img, productName, productPrice} = req.body
        const db = req.app.get('db')
        
        let updatedProductList = await db.edit_item(productName, img, productPrice, id)
        res.send(200).send(updatedProductList)
        console.log(updatedProductList)
    }
}