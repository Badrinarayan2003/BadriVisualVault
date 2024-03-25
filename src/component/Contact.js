import { useState } from "react";

function Contact() {

    const [data, setData] = useState({
        username: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    })

    const [disable, setDisable] = useState(false)

    const handleChange = (evt) => {
        const newName = evt.target.name
        const newVal = evt.target.value
        setData((pre) => {
            return { ...pre, [newName]: newVal }
        })
    }

    const handleClick = (evt) => {
        evt.preventDefault();
        console.log(data);
        setData({
            username: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
        })


        window.Email.send({
            SecureToken:"77a3e194-71dc-481a-990b-1f6eb7759b76",
            To: 'badrinarayan295@gmail.com',
            From: "badrinarayan295@gmail.com",
            Subject: `Client Enquiry ${data.subject}`,
            Body: `Name: ${data.username} </br> Email: ${data.email} </br> Phone: ${data.phone}</br> Subject: ${data.subject} </br> Message: ${data.message}`
        }).then(
            () => {
                setDisable(true)
            }
        );

        setTimeout(() => {
            setDisable(false)
        }, 3000)

    }

    const isFormEmpty = () => {
        return (data.username.length === 0 ||
            data.email.length === 0 ||
            data.phone.length === 0 ||
            data.subject.length === 0 ||
            data.message.length === 0
        )
    }

    return (
        <section className="contact-section w-100" id="contact-sec-box">
            <h1 className="text-center  text-light fw-bold">Get In Touch</h1>
            <p className="text-center text-light fw-bold ">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            <div className="container" id="contact-box">
                {disable && <p className="text-success text-center">Send Succesfully!</p>}
                <div className="card border-0 mb-3">
                    <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-0 ">
                        <div className="col contact-img-box bg-dark">
                            <img src="./images/bg_3.png" className="img-fluid rounded-start" alt="contact" />
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <div className="form-floating mb-3 ">
                                    <input type="text" className="form-control border-3" id="floatingInput" placeholder="Full Name" value={data.username} name="username" onChange={handleChange} />
                                    <label htmlFor="floatingInput">Full Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control border-3" id="floatingEmail" placeholder="Email" value={data.email} name="email" onChange={handleChange} />
                                    <label htmlFor="floatingPassword">Email</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control border-3" id="floatingNumber" placeholder="Phone" value={data.phone} name="phone" onChange={handleChange} />
                                    <label htmlFor="floatingPassword">Phone</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control border-3" id="floatingSubject" placeholder="Subject" value={data.subject} name="subject" onChange={handleChange} />
                                    <label htmlFor="floatingPassword">Subject</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea className="form-control border-3" placeholder="Leave a comment here" id="floatingTextarea" style={{ height: '150px' }} value={data.message} name="message" onChange={handleChange}></textarea>
                                    <label htmlFor="floatingTextarea2">Message</label>
                                </div>
                                <div className="d-grid gap-2 col-6">
                                    <button className="btn text-dark fs-4  rounded-pill"
                                        type="button"
                                        onClick={handleClick}
                                        disabled={disable || isFormEmpty()}
                                    >Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
