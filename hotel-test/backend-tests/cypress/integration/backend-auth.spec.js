import * as clientHelpers from '../helpers/clienthelpers.js'

 describe('backend testing auth', function(){

    it('Create a new client', function(){

       clientHelpers.createClientRequest(cy)

    })

    it('Get all clients', function(){

        clientHelpers.getAllClientsRequest(cy)
        
     })
     
     it('Create a client and delete it', function(){

      clientHelpers.createClientRequestandDelete(cy)
      
   })

   
})