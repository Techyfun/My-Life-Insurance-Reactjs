import { Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';


const coverForOption = ["Choose...","Just Me","Me and My Partner"];
const TypeOption = ["Choose...","Life Insurance","Life Insurance + Critical Illness","Whole of Life"];
const amountOption=["£30,000","£40,000","£50,000","£60,000","£70,000","£80,000","£90,000","£100,000","£150,000","£200,000","£250,000","£300,000","£350,000","£400,000","£450,000","£500,000","£550,000","£600,000","£650,000","£700,000","£750,000","£800,000","£850,000","£900,000","£950,000","£1million+"];
const timeOption = ["Choose...","5 years","6 years","7 years","8 years","9 years","10 years","11 years","12 years","13 years","14 years","15 years","16 years","17 years","18 years","19 years","20 years","21 years","22 years","23 years","24 years","25 years","26 years","27 years","28 years","29 years","30 years","31 years","32 years","33 years","34 years","35 years","36 years","37 years","38 years","39 years","40 years","41 years","42 years","43 years","44 years","45 years","46 years","47 years","48 years","49 years","50 years","61 years","62 years","63 years","64 years","65 years","66 years","67 years","68 years","69 years","70 years","71 years","72 years"];
const titleOption = ["Choose...","Mr","Mrs","Miss","Ms"];

const InsuranceForm = ({setAmount,setCoverage,setYears,page}) => {
  const { register, handleSubmit , formState: { errors } } = useForm();
  const select =(options,name)=>{
    return(
      <Form.Select {...register(`${name}`,{required:{value:true,message:`Please select an option`}})}>
        {options.map(value => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
      </Form.Select>
    )
  }
  const onSubmit = data =>{
    const {amount,title,firstName,lastName} = data;
    const time = Number(data.time.split(" ")[0]);
    const name = title+"." + firstName + lastName;
    const coverAge = time *10*12;
    setAmount(amount);
    setYears(time);
    setCoverage(coverAge);
    fetch("http://localhost:5000/email/sendEmail",{
      method:'POST',
      body:{
        name:name,
        coveage:coverAge,
        data:data,
      }
    })
    .then(res =>res.json())
    .then(info=>console.log(info))
  };
    return (
      <Form onSubmit={handleSubmit(onSubmit)} className={`g-3 insureance-form px-4 py-5 ${page==="Home"?"maria":"border-0"}`}>
        <legend className='mb-3'>
            Compare Life Insurance Quotes - From 
            <span className="text-danger"> £10/Month*</span>
        </legend>
        <Row className='mt-5'>
          <Form.Group as={Col} md="6">
            <Form.Label className='fw-bold'>Cover for</Form.Label>
            {select(coverForOption,"coverFor")}
            {errors.coverFor && errors.coverFor.type === "required" && (
              <p className='my-2 fw-bold text-danger'>This is required</p>
            )}
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Label className='fw-bold'>Type of insurance</Form.Label>
            {select(TypeOption,"insuranceType")}
            {errors.insuranceType && errors.insuranceType.type === "required" && (
              <p className='my-2 fw-bold text-danger'>This is required</p>
            )}
          </Form.Group>
          <Form.Group as={Col} md="6" className='mt-3'>
            <Form.Label className='fw-bold'>Amount of Cover</Form.Label>
            {select(amountOption,"amount")}
            {errors.amount && errors.amount.type === "required" && (
              <p className='my-2 fw-bold text-danger'>This is required</p>
            )}
          </Form.Group>
          <Form.Group as={Col} md="6" className='mt-3'>
            <Form.Label className='fw-bold'>Cover Period</Form.Label>
            {select(timeOption,"time")}
            {errors.time && errors.time.type === "required" && (
              <p className='my-2 fw-bold text-danger'>This is required</p>
            )}
          </Form.Group>
          <Form.Group as={Col} md="6" className='mt-3'>
            <Form.Label className='fw-bold'>Date Of Birth</Form.Label>
            <Form.Control type="date" {...register("birthDate" ,{required:{value:true,message:"Please give your date of birth"}})}/>
          </Form.Group>
          <Form.Group as={Col} md="6" className='mt-3'>
            <Form.Label className='fw-bold'>Title</Form.Label>
            {select(titleOption,"title")}
            {errors.title && errors.title.type === "required" && (
              <p className='my-2 fw-bold text-danger'>{errors.message}</p>
            )}
          </Form.Group>
          <Form.Group as={Col} md="6" className='mt-3'>
            <Form.Label className='fw-bold'>First name</Form.Label>
            <Form.Control
              type="text"
              {...register("firstName", { required: true, maxLength: {value:30, message: "Please a provide Your First Name"}})}
            />
              {errors.firstName && errors.firstName.type === "required" && (
                <p className='my-2 fw-bold text-danger'>This is required</p>
              )}
              {errors.firstName && errors.firstName.type === "maxLength" && (
                <p className='my-2 fw-bold text-danger'>Max length exceeded</p>
              )}
          </Form.Group>
          <Form.Group as={Col} md="6" className='mt-3'>
            <Form.Label className='fw-bold'>Last name</Form.Label>
            <Form.Control
              type="text"
              {...register("lastName", { required: true, maxLength: {value:20, message: "Please a provide Your Last Name"} })}
            />
              {errors.lastName && errors.lastName.type === "required" && (
                <p className='my-2 fw-bold text-danger'>This is required</p>
              )}
              {errors.lastName && errors.lastName.type === "maxLength" && (
                <p className='my-2 fw-bold text-danger'>Max length exceeded</p>
              )}
          </Form.Group>
          <Form.Group as={Col} md="4" className='mt-3'>
            <Form.Label className='fw-bold'>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder='you@domain.com'
              {...register("email", { required: { value:true, message:"Please provide a valid Email Address"}})}
            />
            {errors.email && errors.email.type === "required" && (
              <p className='my-2 fw-bold text-danger'>This is required</p>
            )}
          </Form.Group>
          <Form.Group as={Col} md="4" className='mt-3'>
            <Form.Label className='fw-bold'>Contact Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder='___-___-___'
              {...register("phone", { required: { value:true, message:"Please provide a valid Contact Number"}})}
            />
            {errors.phone && errors.phone.type === "required" && (
              <p className='my-2 fw-bold text-danger'>This is required</p>
            )}
          </Form.Group>
          <Form.Group as={Col} md="4" className='mt-3'>
            <Form.Label className='fw-bold'>PostCode</Form.Label>
            <Form.Control
              type="number"
              placeholder='00000'
              {...register("postCode", { required: { value:true, message:"Please provide a valid PostCode"}})}
            />
            {errors.postCode && errors.postCode.type === "required" && (
              <p className='my-2 fw-bold text-danger'>This is required</p>
            )}
          </Form.Group>
          <Col md={12} className="text-center my-4">
            <button
              className="submit-btn text-white fw-bold px-4 py-2 mt-5 fs-5 rounded-2 border-0" 
              type="submit"
            >
              Compare Quotes Now
            </button>
          </Col>
          <Col md={12}>
            <div className="form-info">
              <p>
                  By clicking "Compare Quotes" you agree to the
                   <a
                    className="text-decoration-none fw-normal"
                    href="https://www.mylifeinsurance.co.uk/privacy-policy/"
                  >
                    Privacy Policy</a>
                  and
                  <a
                    className="text-decoration-none fw-normal"
                    href="https://www.mylifeinsurance.co.uk/terms/"
                  >
                    Terms & Conditions</a>, and agree that one of our
                  <a
                    className="text-decoration-none fw-normal"
                    href="https://www.mylifeinsurance.co.uk"
                  >
                    FCA authorised brokers</a>
                  can contact you by phone, email or electronic messaging to
                  provide the comparison service.
              </p>
            </div>
          </Col>
        </Row>
      </Form>
    );
};

export default InsuranceForm


