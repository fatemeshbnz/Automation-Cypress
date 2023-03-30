describe('Session17_ApiAutomation', () => {
    it('First',() =>{
      let envn = cy.env
      if (envn="https://basicfittest-apiv6.gymmanager.eu/")
      {
        cy.request({
          method: 'POST',
          form: true,
          url: '/'+'api/v1/Authorize/Authenticate',
          headers: {
            'accept': 'application/json',         
          },
          body: {       
            "Username": "bfkiosk",
            "Password": "fuF4soy8VAiL43SpWAQm",
          }
                       }).then($response => {
            expect($response.status).to.eq(200);
            let body = JSON.stringify($response.body)
                cy.log(body)
    
        })

      }
      else{
        cy.request({ method: 'GET',
        form: true,
        url:   'https://basicfittest-apiv6.gymmanager.eu/api/v1/Countries',
        headers: {
          'accept': 'application/json',         
        },
        body: {       
          "Username": "bfkiosk",
          "Password": "Mdqnij9hff4jSSbbCjhy",
        }

    }).then($resp =>{
        expect($resp.status).to.eq(200);
        expect($resp.body.countries[0].shortname).to.eq("IT")
        //expect($resp.body.countries[1].shortname).to.eq("s")


        }
        );

      }

           // expect(result).to.not.empty
           // expect(result.id).to.not.empty
           // expect(result.name).to.eq('Netherlands')
           // expect(result.shortname).to.eq('NL')
           // expect(result.website).to.eq('www.basic-fit.nl')

        })
 //   it ('Second',( )=>{
       // cy.request({ method: 'GET',
      //  form: true,
      //  url:   'https://basicfittest-apiv6.gymmanager.eu/api/v1/Countries',
      //  headers: {
       //   'accept': 'application/json',         
     //   }
  //  }).then($resp =>{
     //   expect($resp.status).to.eq(200);
     //   expect($resp.body.countries[0].shortname).to.eq("N")
        //expect($resp.body.countries[1].shortname).to.eq("s")

    

 //   })
  
   // })
})