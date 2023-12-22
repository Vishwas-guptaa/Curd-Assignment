const ClientModel = require("../modals/Client")


class ClientController {
  
    static clientinsert = async (req, res) => {
        try {
            const { name, email, lastname, mobile, project } = req.body

            const data =  new ClientModel({
                name: name,
                email: email,
                mobile: mobile,
                lastname: lastname,
                project: project
            })
            
            await data.save()
        //   console.log(data)
        res.redirect("/client");
        } catch (eroor) {
            console.log("error")
        }
    }


    static clientpage = async (req, res) => {
        try {
            const data = await ClientModel.find();

            //console.log("Retrieved Data:", data);
            res.render("Client",{ram:data})
      

        } catch (eroor) {
            console.log("error")
        }
    }

    


    static clientdelete = async (req, res) => {
        try {
            const data = await ClientModel.findByIdAndDelete(req.params.id)
              res.redirect("/client")
        } catch (eroor) {
            console.log("error")
        }
    }

    static clientedit = async (req, res) => {
        try {
          //  console.log(req.params.id)
          const result = await ClientModel.findById(req.params.id);
          // console.log(result)
          res.render("Edit", { edit: result });
        } catch (error) {
          console.log(error);
        }
      };
 
    static clientupdate = async (req, res) => {
        try {
            const client = await ClientModel.findById(req.params.id)     
         
            const clientUpdate = await ClientModel.findByIdAndUpdate(
                req.params.id,
                {
                    name:req.body. name,
                    email: req.body.email,
                    mobile: req.body.mobile,
                    lastname: req.body.lastname,
                    project: req.body.project
                },
            )
             await clientUpdate.save()
           res.redirect('/client')
        //    console.log(clientUpdate)
        } catch (eroor) {
            console.log("error")
        }
    }

    static clientview = async (req, res) => {
        try {
            const data = await ClientModel.findById(req.params.id)
            res.render("View", { client: data });
          
        } catch (eroor) {
            console.log("error")
        }
    }

}

module.exports = ClientController