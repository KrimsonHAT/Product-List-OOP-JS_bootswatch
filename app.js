// variables globales
const formulario = document.getElementById('product-form');
const btnBorrar = document.getElementById('product-list');
const insertarMensaje = document.querySelector('.container')

class Product{
    constructor(name,price,year){
        this.name = name;
        this.price = price;
        this.year = year;
    }

    
}


class UI{
    addProduct(product){
       const productList= document.getElementById('product-list');
       const elementDiv = document.createElement('div');
       elementDiv.classList.add('borrar');
       elementDiv.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product Name</strong>: ${product.name}
                    <strong>Product Price</strong> $${product.price}
                    <strong>Product Year</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
            
       `;
       productList.appendChild(elementDiv);
       this.resetForm();
    }
    resetForm(){
        document.getElementById('product-form').reset();
    }

    deleteProduct(element){
        if(element.name === "delete"){
          
         element.parentElement.parentElement.parentElement.remove();
         this.showMessage('Product Deleted Successfully','info')
        }
    }

    showMessage(message,cssClass){
     const div =document.createElement('div');
     div.className=`alert alert-${cssClass} mt-3`;
     div.appendChild(document.createTextNode(message))
        // Showing in DOM
        insertarMensaje.insertBefore(div,document.querySelector('#App'))

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }

}


// DOM EVENTS   EventListenners

formulario.addEventListener('submit',function(e){
    e.preventDefault();
   
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;


    // instanciar la clase Producto
    const product = new Product(name,price,year);
    const ui = new UI();
    if(name ==='' || price ==='' || year ===''){
        ui.showMessage('complete fields please','danger');

    }else{
        ui.showMessage('Product added successfully','success');
        ui.addProduct(product);
   
    }
    
    
 
});

btnBorrar.addEventListener('click',function(e){
    const ui = new UI();
    ui.deleteProduct(e.target)
})




