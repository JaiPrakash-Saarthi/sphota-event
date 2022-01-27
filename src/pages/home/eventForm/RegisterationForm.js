import React, { useState } from "react";
import axios from "axios";
import { Container,Row,Col,Button,Form, } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';





import "./RegisterationForm.css"
import ErrorMessage from "../error/ErrorMessage";
const RegisterationForm = () => {

    const [counterTime, setCounterTime] = useState(50000000);
    const [userCredentials, setUserCredentials] = useState({
        name:"",
        email:"",
        phone:"",
        designation:"",
        jobTitle:""
    })
    const [isError, setIsError] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChangeUserCredentials = (e,value) => {
        const temp = e.target.value;
        if(value === 'name'){
            setUserCredentials(prev => {
                return{
                    ...prev,
                    name:temp
                }
            })
        }
        else if(value === 'email'){
            setUserCredentials(prev => {
                return{
                    ...prev,
                    email:temp
                }
            })
        }
        else if(value === 'phone'){
            setUserCredentials(prev => {
                return{
                    ...prev,
                    phone:temp
                }
            })
        }
        else if(value === 'designation'){
            setUserCredentials(prev => {
                return{
                    ...prev,
                    designation:temp
                }
            })
        }
        else if(value === 'jobTitle'){
            setUserCredentials(prev => {
                return{
                    ...prev,
                    jobTitle:temp
                }
            })
        }
        else if(value === 'company'){
            setUserCredentials(prev => {
                return{
                    ...prev,
                    company:temp
                }
            })
        }
    }


 <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/shell.js"></script>



    const handleSubmitRegisterUser = async (e) => {
        // e.preventDefault();
      const timedate = new Date();
    const formUrl = 'https://api.hsforms.com/submissions/v3/integration/submit/20107629/48e1a7d4-b918-443f-8de7-8c44dc60f576'

      // Example request JSON:
      var data = {
      "submittedAt": timedate,
      "fields": [
      {
      "name": "firstname",
      "value": userCredentials.name 
      },
      {
      "name": "email",
      "value":  userCredentials.email
      },
      {
      "name": "phone",
      "value":  userCredentials.phone
      },
      {
      "name": "company",
      "value": userCredentials.company 
      },
      {
      "name": "designation",
      "value": userCredentials.jobTitle 
      }
      ],
      "legalConsentOptions":{ // Include this object when GDPR options are enabled
      "consent":{
      "consentToProcess":true,
      "text":"I agree to allow Saarthi.ai to store and process my personal data.",
      "communications":[
      {
      "value":true,
      "subscriptionTypeId":999,
      "text":"I agree to receive marketing communications from Saarthi.ai."
      }
      ]
      }
      }
      }
      console.log("data" + JSON.stringify(data));
      
      let final_data = JSON.stringify(data);

      await axios
      .post(formUrl, final_data, {
        headers: {
            'Content-Type':'application/json'
        },
      }).then(res =>{
          console.log(res);
          setIsSuccess(true);
      }).catch(err => {
          console.log(err);
          setIsError(prev => "Please fill all credentials correctly!")
      })
      
      }
      
 
    return(
        <>
        <Container className="registerationFormContainer" fluid>
            <Row>
                <Col className="registerationFormRow1Col1">
                <h2>
                    Register Now
                </h2>
                </Col>
            </Row>
        <Row>
            {
                isSuccess ?
                <Col className="regisFormSuccessFul">
                <p> Thanks for registering! </p>
                </Col>
                :
                <Col>
                        <Form>
            <fieldset >
                <Form.Group className="mb-4">
                <Form.Control type="text" className="rfinput" placeholder="Full Name *" required onChange={(e) => handleChangeUserCredentials(e,'name')}/>
                </Form.Group>
                <Form.Group className="mb-4">
                <Form.Control type="email" className="rfinput" placeholder="Email *" required onChange={(e) => handleChangeUserCredentials(e,'email')}/>
                </Form.Group>
                <Form.Group className="mb-4">
                <Form.Control type="phone" className="rfinput" placeholder="Phone No *" required onChange={(e) => handleChangeUserCredentials(e,'phone')}/>
                </Form.Group>
                <Form.Group className="mb-4">
                <Form.Control type="text" className="rfinput" placeholder="Company *" required onChange={(e) => handleChangeUserCredentials(e,'company')}/>
                </Form.Group>
                <Form.Group className="mb-4">
                <Form.Control type="text" className="rfinput" placeholder="Job Title *" required onChange={(e) => handleChangeUserCredentials(e,'jobTitle')}/>
                </Form.Group>
                {
                    isError &&  <ErrorMessage errorMessage={isError}/>
                }
                <div className="rfButtonSubmit">
                <Button type="submit" className="rfinputSubmitButton" onClick={handleSubmitRegisterUser}>Submit</Button>
                </div>
            </fieldset>
            </Form>

            </Col>
           
            }
            
        </Row>
        </Container>
        </>
    )
}

export default RegisterationForm;