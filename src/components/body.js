import React from "react";





class Content extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        cars: []
      };
    }
  
    componentDidMount() {
      fetch('https://flaskcarapi.herokuapp.com/api')
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result)
            this.setState({
              isLoaded: true,
              cars: result
            });
          },
          // error handler
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
  
    render() {
  
      const { error, isLoaded, cars } = this.state;
  
      if (error) {
        return (
          <div className="col">
            Error: {error.message}
          </div>
        );
      } else if (!isLoaded) {
        return (
          <div className="col">
            Loading...
          </div>
        );
      } else {
        return (
        
           
         
          <div className="container" >
           <div className="row content wrapper">
          <div className="col-md-2 col-md-3 col-sm-12 col-xs-12 sidebar dash" >
          <div className="card card-dash" >
              <div className="row no-gutters">
               
                <div className="col-lg-12">
                  <div className="card-body" >
                  <li className="list-group-item list-group-item-action list-group-item-warning">ALL</li>
                  <br></br>
                   
                     
                       <ul className ="list-group">
                       <li className="list-group-item list-group-item-action list-group-item-warning">Filter by Fuel</li>
                      
                      
                        
                        <li className="list-group-item list-group-item-light">Petrol </li>
                      
                      
                       
                       <li className="list-group-item list-group-item-light">Diesel</li>
                       <li className="list-group-item list-group-item-light">Electric</li>
                   
                       <br></br>
                      <li className="list-group-item list-group-item-action list-group-item-warning">Filter by Brand</li>
                       <li className="list-group-item list-group-item-light">Mercedes</li>
                       <li className="list-group-item list-group-item-light">BMW</li>
                       <li className="list-group-item list-group-item-light">Range Rover</li>
                       <li className="list-group-item list-group-item-light">Volkswagen</li>
                       <li className="list-group-item list-group-item-light">Other</li>
                       
                     </ul>
                  </div>
                </div>
              </div>
            </div>
      </div>
  
  
  
         
          
          {cars.map(car => 
            <div className="col-md-8 name-col main" >
            <div className = "name">
            <h4>{car.name}</h4>
                 
                 
          </div>
            <div className="card " >
            <div className="row no-gutters">
            <div className="col-md-5 img-col" >
              <img src={'http://localhost:5000/static/img/'+car.image_file} className="card-img" alt="..;"/> 
            
            </div>
        
            <div className="col-md-6">
              <div className="card-body">
                
          <ul className="list-group">
                     <li className="list-group-item list-group-item-action list-group-item-warning">Price:${car.price} </li>
                     <li className="list-group-item list-group-item-action list-group-item-light">Motor:{car.motor}</li>
                     <li className="list-group-item list-group-item-action list-group-item-warning">Gearbox:{car.gearbox}</li>
                      <li className="list-group-item list-group-item-light">Fuel:{car.fuel}</li>
                      <li className="list-group-item list-group-item-action list-group-item-warning">Brand:{car.brand}</li>
                      <li className="list-group-item list-group-item-action list-group-item-light">Registration:{car.register}</li>
                    </ul>
          
                    </div>
            </div>
            </div>
            </div>
            </div>
          
          
          
          )}
        </div>
        </div>  
           
            
           
          
          
  
        );
      }
    }
  }


export default Content;


