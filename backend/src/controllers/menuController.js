const MenuItem = require('../models/MenuItems')

exports.list = async(req, res, next) => {
    try{
        const items = await MenuItem.find().sort({ createdAt: -1 })
        res.json(items);
    } catch (err){ next(err); }
};

exports.create = async(req, res, next) => {
    try{
        const { name, price, category, available } = req.body;
        if (!name || !category || price == null ) {
            return res.status(400).json({error: 'name, price, category required'})
        }

        const imageUrl = req.file
        ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`
        : null;

        const item = await MenuItem.create(
            { 
                name, 
                price, 
                category, 
                available, 
                image: imageUrl 
            });
        res.status(201).json(item);
    } catch (err) { next(err) }
}

exports.update = async(req, res, next) => {
    try{
        const updates = { 
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            available: req.body.available,
        };

        if (req.file) {
        updates.image = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
        }
       const item = await MenuItem.findByIdAndUpdate(req.params.id, updates, {new: true});
       if (!item) return res.status(404).json({error: 'menu not found'});
       res.json(item);
    }catch (err){next(err)};
}

exports.delete = async( req, res, next) => {
    try{
       const item = await MenuItem.findByIdAndDelete(req.params.id)
       if (!item) return res.status(404).json({error: 'menu not found'});
       res.json({message: 'item deleted'})
    } catch (err) {
        next(err)
    }
}