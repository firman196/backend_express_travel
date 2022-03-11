const Category      = require('../models/Category');


module.exports = {

    /**
     * Show index category
     * 
     */
    viewCategory : async(req,res) => {
        try {
            const category      = await Category.find();
            const alertMessage  = req.flash('alertMessage');
            const alertStatus   = req.flash('alertStatus');
            const alert         = { message: alertMessage, status: alertStatus};
            res.render('admin/category/index',{
                category,
                alert,
                title : "Halaman Kategori"
            })
        } catch (error) {
            res.redirect('/admin/category');
        }
    },


    /**
     * Store data category
     * 
     */
    storeCategory : async(req,res) => {
        try {
            const { name } = req.body;
            await Category.create({ name });
            req.flash('alertMessage', 'Success Add Category');
            req.flash('alertStatus','success');
            res.redirect('/admin/category');
        } catch (error) {
            res.redirect('/admin/category');
        }
    },


     /**
     * Update data category
     * 
     */
    updateCategory : async(req,res) => {
        try {
            const { id,name }   = req.body;
            const category      = await Category.findOne({ _id:id });
            category.name       = name;
            await category.save();
            req.flash('alertMessage', 'Success Update Category');
            req.flash('alertStatus','success');
            res.redirect('/admin/category');
        } catch (error) {
            res.redirect('/admin/category');
        }
    },

    /**
     * Delete data category by id
     */
    deleteCategory : async(req, res) => {
        try {
            const { id } = req.body;
            const category = await Category.findOne({ _id:id });
            await category.remove();
            req.flash('alertMessage','Success Delete Category');
            req.flash('alertStatus','success');
            res.redirect('/admin/category');
        } catch (error) {
            req.flash('alertMessage',`${error.message}`);
            req.flash('alertStatus','danger');
            res.redirect('/admin/category');
        }
    }



    


}