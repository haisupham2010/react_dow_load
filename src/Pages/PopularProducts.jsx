


export default function PopularProducts(props) {
  const handle_pro = function(event){
    event.preventDefault()
    console.log(props.keys);

  }

    return (
     
     <div className="col-lg-4 col-md-6 mb-5 mt-4">
  
     <a type="button" onClick={handle_pro} href="" className="img_full">
         <div >

          <div >
          <img className="img-fluid img_full" alt="" src={props.img_pop}/>
          </div>

          <div style={{color: "black", fontWeight: "bold"}}>
          {props.name_pop}
          </div>
          <div>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          
          </div>

          <div style={{color: "black"}}>
          {props.price_pop}
          </div>


        </div>
      </a>

   
       </div>
   
     



    );
  }
  