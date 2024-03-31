<link rel="stylesheet" type="text/css" href="../../../../modules/pointrelais/views/css/custom.css">

<div class="card mt-2">
 <div class="card-header">
    <div class="row">
        <div class="col-10">
            <div class="card-header-title">
                <h3>Point Relais</h3>
            </div>
        </div>
        <div class="col">
            <div class="col-sm input-container">
                <div class="input-group">
                    <span class="ps-switch" id="point-relais-switch">
                        <input id="point_relais_switch_0" class="ps-switch" name="form[point_relais]" value="0" type="radio">
                        <label for="form_point_relais_0">Non</label> 
                        <input id="form_point_relais_1" class="ps-switch" name="form[point_relais]" value="1"  type="radio" checked>
                        <label for="form_point_relais_1">Oui</label>
                        <span class="slide-button"></span>
                       

                    </span>
                </div>
                
            </div>
        </div>
    </div>
</div>

<div class="card-body">
    <form name="point_relais" method="post" action="">
     <input type="hidden" id="switch-value" name="switch-value" value="1">
     <div class="switch-oui">
              <div class="form-group row "> 
            <label class="col-form-label col-md-3">Wilaya:</label>
            <div class="col-md-9">
                <select class="custom-select" id="wilaya-dropdown"  name="wilaya-dropdown">
                </select>
            </div>
        </div>
        <div class="form-group row "> 
            <label class="col-form-label col-md-3">Commune:</label>
            <div class="col-md-9">
                <select class="custom-select" id="commune-dropdown"  name="commune-dropdown">
                </select>
            </div>
        </div>
        <div class="form-group row"> 
            <label class="col-form-label col-md-3"> Nom Desk:</label>
            <div class="col-md-9">
                <select class="custom-select" id="desk-dropdown"  name="desk-dropdown">
                </select>
                 <input type="hidden" id="selected-desk-name" name="selected-desk-name">
            </div>
        </div>
        <div class="form-group row"> 
            <label class="col-form-label col-md-3"> ID Desk:</label>
            <div class="col-md-9">
               <input type="text" class="form-control" id="id-desk" name="id-desk" >
            </div>
        </div>
     
      </div>
    
       
        <div class="form-group row ">
    
        
              
          
      
      <label for="point_relais_message" class="form-control-label col-md-3"">
                
                Commentaire:

              </label>
    
    <div class="col-md-9">
        
          
    <div class="input-group js-text-with-length-counter">
    
    
    <textarea id="point_relais_message" name="point_relais[message]"  cols="30" rows="3" class="js-countable-input form-control" data-max-length="1200" maxlength="1200"></textarea>
  
          <div class="input-group-append">
        <span class="input-group-text js-countable-text">1200</span>
      </div>
      </div>


  
    
  
  


    </div>
  </div>
        <div class="form-group row">
            <div class="col-md-9 offset-md-3">
                <button type="submit" class="btn btn-primary" name="submit_custom_form">Submit</button>
            </div>
        </div>
    </form>
</div>
</div>

 <script type="text/javascript" src="../../../../../modules/pointrelais/views/js/pointrelais.js"></script>

