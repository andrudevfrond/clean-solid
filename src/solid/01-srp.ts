(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductService {

        constructor() {}

        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }
    }

    class Mailer {

        constructor(){}

        private masterEmail: string = "andres@gmail.com";

        sendEmail(emailList: string[], template : 'to-clients'|'to-admins') {
            console.log('Enviando correo a los clientes', template);
        }
    }


    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private productService :ProductService;
        private mailer : Mailer;

        constructor(productService :ProductService, mailer : Mailer) {
            productService = productService;
            mailer = mailer;
        }
    
        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            this.productService.loadProduct(id);
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            this.productService.saveProduct(product);
        }
        
        notifyClients (){
            var mailList: string[] = ['andres@gmail.com'] 
            this.mailer.sendEmail(mailList, 'to-clients');
        }
    }

    class CartBloc {

        private itemInCart: Object[] = [];

        AddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    }

    const productService = new ProductService();
    const mailer = new Mailer();

    const productBloc = new ProductBloc(productService, mailer);
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.AddToCart(10);

})();